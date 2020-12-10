export let DEBUG = true;
export let PAUSED = true;
import { obj, params } from "./lib/object";
import { obj_state, position } from "./lib/state";
import { room } from "./lib/room";
import { positioned_sprite, sprite } from "./lib/sprite";
import { collision_box } from "./lib/collision";
import { sprite_renderer, rect_renderer, stroked_rect_renderer, hud_text_renderer, Camera, text_renderer } from "./lib/render";
import { HUD } from "./lib/hud";
import { ExecuteRepeatBinds, debug_binds, btype, exec_type, Poll_Mouse, Bind, held_keys, Unbind } from "./lib/controls";
import { Distance } from "./lib/math";
import { init_click_handler } from "./lib/controls";
import { debug_state, debug_update_room_list, debug_update_obj_list, debug_statef, debug_setup, debug_update_prefabs, debug_update_properties_element, Debug_hud } from "./lib/debug";
import { rooms as room_list } from "./game/rooms/rooms";
let { ipcRenderer } = window.require("electron");
const path = window.require("path");
let fs = window.require("fs");
export let project_path = ipcRenderer.sendSync('path-request', 'ping')[0];

let canvas_element: HTMLCanvasElement = document.getElementById("target") as HTMLCanvasElement;
let context: CanvasRenderingContext2D = canvas_element.getContext("2d");


let screen_width = window.innerWidth;
let screen_height = window.innerHeight;

let vwidth = canvas_element.width;
let vheight = canvas_element.height;

import { g } from "./game/main";


//How often the game logic loop should run, in milliseconds
let logic_loop_interval: number = 1000 / 60;

let last_time = new Date();

let last_render_time = 0;

interface dimensions {
  height: number,
  width: number
}


export function GetScreenDimensions(): dimensions {
  return ({
    width: screen_width,
    height: screen_height
  })
}

export function GetViewportDimensions(): dimensions {
  return ({
    height: canvas_element.height,
    width: canvas_element.width
  })
}

export let viewport = {
  height: GetViewportDimensions().height,
  width: GetViewportDimensions().width
}

window.onresize = () => {
  viewport.height = GetViewportDimensions().height
  viewport.width = GetViewportDimensions().width
}

export function setDebug(x: boolean) {
  DEBUG = x;
}

export function setPaused(x: boolean) {
  PAUSED = x;
}

export const render_collision_box = (a: collision_box) => {
  boxes.push(a);
}

let boxes: Array<collision_box> = [];

export let deep = (a: any) => {
  return JSON.parse(JSON.stringify(a));
}

interface game_state<T> {
  logic: number,
  context: CanvasRenderingContext2D,
  current_room: room<unknown>,
  cameras: Array<Camera>,
  canvas: HTMLCanvasElement,
  globals: T
}


export let rooms: any[] = [];
export let objects: any[];

export class game<T>{
  state: game_state<T>;
  context: CanvasRenderingContext2D;
  //The offscreen canvas and context are used in rendering multiple Cameras
  //The contents are rendered to the offscreen canvas, then copied to the 
  //onscreen canvas, in the proper position in the viewport
  offscreen_canvas: HTMLCanvasElement;
  offscreen_context: CanvasRenderingContext2D;
  prototypes: Array<obj> = [];
  rooms: Array<any> = [];
  isRendering = false;
  constructor(ctx: CanvasRenderingContext2D, init_state: T) {
    this.state = {
      canvas: canvas_element,
      logic: undefined,
      context: ctx,
      cameras: [
      ],
      current_room: undefined,
      globals: init_state
    }
    this.offscreen_canvas = document.createElement("canvas");
    this.offscreen_context = this.offscreen_canvas.getContext("2d");
    //DEBUG determines whether the game is running within the editor
    if (DEBUG) {
      //Sets up some global debug state and the editor keybindings
      debug_setup();
      //Initializes a separate logic loop solely for the editor
      //This separation allows for the editor to interact with the environment while
      //the actual room's state loop is paused.
      setInterval(() => {
        if (this.getRoom()) {
          //This functions handles the editor interactions with the game environment
          debug_statef(16.66);
        }
      }, 16.66)
    }
    //Creates a onclick function on the window that handles element onclick functions
    init_click_handler(this);
  }
  render(t: number) {
    //t is current render time
    let delta_time = t - last_render_time
    last_render_time = t;
    let all_cameras = this.state.cameras;
    let editor_camera_index = -1;
    if (DEBUG) {
      all_cameras = [...all_cameras, debug_state.camera]
      editor_camera_index = all_cameras.length - 1;
      //The editor camera is always the last camera inside the cameras array
      //the editor camera is rendered to a different canvas than the main game canvas
      //so we use the camera's index to check what canvas to render to
    }
    for (let a = 0; a < all_cameras.length; a++) {
      let camera = all_cameras[a];
      //We render the cameras contents to an offscreen canvas, then copy its contents
      //to the main canvas.
      //This allows us to avoid any math needed to determine sprites that are partially offscreen
      //as any offscreen sections of the sprites will not be copied over, rather than explicitly 
      //calculating the cutoffs
      this.offscreen_canvas.height = camera.state.dimensions.height;
      this.offscreen_canvas.width = camera.state.dimensions.width;
      this.offscreen_context.clearRect(0, 0, camera.state.dimensions.width, camera.state.dimensions.height);
      this.offscreen_context.fillStyle = "black";
      this.offscreen_context.fillRect(0, 0, camera.state.dimensions.width, camera.state.dimensions.height);
      //This collision box represents the camera's field of view in the game space
      //We use the room's checkObjects function to find any object that exists within this area
      //These objects are the objects that need to be rendered for this camera
      let camera_box = {
        x: camera.state.position.x,
        y: camera.state.position.y,
        width: camera.state.dimensions.width * (1 / camera.state.scaling),
        height: camera.state.dimensions.height * (1 / camera.state.scaling)
      };
      //List of all particles within the camera's fov
      let particle_collides = this.state.current_room.checkObjects(camera_box, [], this.state.current_room.particles_arr);
      //List of all objects within the camera's fov
      let camera_colliders = [...this.state.current_room.checkObjects(camera_box), ...particle_collides];

      let render_args = {
        context: this.offscreen_context,
        camera: camera,
      };
      //Renders the room's background.
      sprite_renderer(render_args, {
        sprite: this.state.current_room.renderf(delta_time),
        x: 0,
        y: 0,
        rotation: 0,
        scale: {
          width: 1,
          height: 1
        }
      });
      //Array of hitboxes for each item in the room
      let hitboxes: collision_box[] = [];
      for (let a of camera_colliders.filter((b) => b.render).sort((a, b) => (a.layer - b.layer))) {
        let rendered = a.renderTrack(t);

        //Objects can return either a sprite, or an array of sprites to simplify the API
        //For the user, and for use in composite objects(object that bundles other objects together)
        //Internally, we convert any single sprite into an array of one sprite.


        for (let positioned_sprite of rendered)
          sprite_renderer(render_args, {
            sprite: positioned_sprite.sprite,
            x: positioned_sprite.x,
            y: positioned_sprite.y,
            rotation: a.state.rotation,
            scale: a.state.scaling
          });


        //Hitboxes are rendered late in the render loop, to ensure objects don't overlap them
        //As we render objects, we add their hitboxes to this list
        if (DEBUG && a.collision) {
          hitboxes.push(...a.getAllCollisionBoxes());
        }
      }
      //This is a special class of object that exists in the game world
      for (let node of this.state.current_room.text_nodes) {
        text_renderer(render_args, {
          x: node.state.position.x,
          y: node.state.position.y,
          font: node.renderf(t)
        })
      }

      if (camera.hud) {
        let graphics = camera.hud.graphic_elements;
        let text_elements = camera.hud.text_elements;
        //Renders static graphics that are a part of the hud
        for (let graphic of graphics) {
          let rendered = graphic.renderTrack(t);
          if (graphic.render) {
            for (let positioned_sprite of rendered) {
              sprite_renderer(render_args, {
                sprite: positioned_sprite.sprite,
                x: positioned_sprite.x,
                y: positioned_sprite.y,
                rotation: graphic.state.rotation,
                scale: graphic.state.scaling
              });
            }
          }
        }
        for (let text of text_elements) {
          hud_text_renderer(render_args, {
            x: text.state.position.x,
            y: text.state.position.y,
            font: text.renderf(t)
          })
        }
      }
      //If a camera is marked as a debug camera, we render the
      //  hitboxes, and potentially update the editor
      if (camera.state.debug) {
        let box: collision_box;
        let boxes_copy = [...boxes]
        while (boxes_copy.length > 0) {
          let box = boxes_copy.pop();
          let rect = {
            width: box.width,
            height: box.height
          }
          stroked_rect_renderer(this.offscreen_context, rect, box.x, box.y, "#FF0000", 1, camera);
        }
        while (hitboxes.length > 0) {
          let box = hitboxes.pop();
          let rect = {
            width: box.width,
            height: box.height
          }
          stroked_rect_renderer(this.offscreen_context, rect, box.x, box.y, "#008000", 1, camera);
        }
        //Draws a special box around the currently selected element
        //inside the editor UI
        if (DEBUG && debug_state.selected_properties_element) {
          let coll = debug_state.selected_properties_element.getFullCollisionBox();
          rect_renderer(this.offscreen_context, { width: 25, height: 25 }, coll.x, coll.y, "skyblue", 10, camera);
          stroked_rect_renderer(this.offscreen_context, coll, coll.x, coll.y, "blue", 1, camera);
        }
      }
      //Separate canvas for the editor camera
      if (a !== editor_camera_index) {
        this.state.context.drawImage(this.offscreen_canvas, camera.state.viewport.x, camera.state.viewport.y);
      }
      else {
        debug_state.target.getContext("2d").drawImage(this.offscreen_canvas, camera.state.viewport.x, camera.state.viewport.y);
      }
    }
    if (DEBUG)
      boxes = [];
    requestAnimationFrame((a) => { this.render(a) });
  }
  start_logic(a: number) {
    //this is the room's state loop
    return window.setInterval(() => {
      if (!PAUSED) {
        let new_time = new Date();
        let time_since = new_time.getTime() - last_time.getTime();
        last_time = new_time;
        if (this.state.current_room) {
          this.state.current_room.statef(time_since);
          if (this.state.current_room.hud) {
            this.state.current_room.hud.statef(time_since);
          }
        }
      }
      //This functions handles binds that occur on an interval
      ExecuteRepeatBinds(a);
    }, a);
  }
  getRoom() {
    return this.state.current_room;
  }
  async loadRoomString(x: string) {
    //room list is a object that contains each room's class,
    //with the room's name as the key for class
    //This object is populated at compile time
    for (let a of Object.keys(room_list)) {
      if (a == x) {
        //this isn't particularly type-safe.
        let new_room = <room<{}>>new room_list[a](this)
        await this.loadRoom(new_room);
      }
    }
  }

  async loadRoom(x: room<unknown>) {
    //Clears the room's logic loop if one
    //Was already running
    if (this.state.logic) {
      window.clearInterval(this.state.logic);
    }
    //This reference is used during initialization
    x.game = this;
    //Deletes each object in the room (which also unbinds their binds),
    //and unbinds the room's bindings.
    if (this.state.current_room !== undefined) {
      while (this.state.current_room.objects.length > 0) {
        this.state.current_room.objects[0].delete();
      }
      for (let id of this.state.current_room.binds) {
        Unbind(id);
      }
    }
    let new_room = await x.load();
    x.registerControls();
    x.registerParticles();

    this.state.logic = this.start_logic(logic_loop_interval)
    this.state.current_room = x;
    if (DEBUG) {
      debug_update_room_list();
      debug_update_prefabs();
      debug_update_obj_list();
    }


    if (!this.isRendering) {
      //This starts the render loop for the room
      this.render(0);
      this.isRendering = true;
    }
  }
}
