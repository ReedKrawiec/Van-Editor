export let DEBUG = process.env.NODE_ENV === 'dev';
export let PAUSED = process.env.NODE_ENV === 'dev';
import { obj } from "./lib/object";
import { p2p, room,p2p_room } from "./lib/room";
import { collision_box } from "./lib/collision";
import { sprite_renderer, rect_renderer, stroked_rect_renderer, hud_text_renderer, Camera, text_renderer, scale_type, line, line_renderer, canvas_renderer } from "./lib/render";
import { ExecuteRepeatBinds, Unbind } from "./lib/controls";
import { debug_state, debug_update_room_list, debug_update_obj_list, debug_update_prefabs, debug_statef, debug_setup } from "./lib/debug";
import { positioned_sprite } from "lib/sprite";
import { rooms as room_list } from "./game/rooms/rooms";
import { Vec } from "lib/math";
import Peer from 'peerjs';



let canvas_element: HTMLCanvasElement = document.getElementById("target") as HTMLCanvasElement;
let context: CanvasRenderingContext2D = canvas_element.getContext("2d");


let screen_width = window.innerWidth;
let screen_height = window.innerHeight;


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

let lines: line[] = [];

export const render_line = (a: line) => {
  lines.push(a);
}

let boxes: Array<collision_box> = [];

export let copy = (a: any) => {
  return JSON.parse(JSON.stringify(a));
}

interface game_state<T> {
  logic: number,
  context: CanvasRenderingContext2D,
  current_room: room<unknown>,
  cameras: Array<Camera>,
  canvases: HTMLCanvasElement[],
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
  static_canvas: HTMLCanvasElement;
  static_context: CanvasRenderingContext2D;
  prototypes: Array<obj> = [];
  rooms: Array<any> = [];
  isRendering = false;
  constructor(ctx: CanvasRenderingContext2D, init_state: T) {
    this.state = {
      canvases: [canvas_element],
      logic: undefined,
      context: ctx,
      cameras: [
      ],
      current_room: undefined,
      globals: init_state
    }
    this.offscreen_canvas = document.createElement("canvas");
    this.offscreen_context = this.offscreen_canvas.getContext("2d");
    this.static_canvas = document.createElement("canvas");
    this.static_context = this.static_canvas.getContext("2d");
    //DEBUG determines whether the game is running within the editor
    if (DEBUG) {

      //Sets up some global debug state and the editor keybindings
      debug_setup();
      this.state.canvases.push(debug_state.target);
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
    //init_click_handler(this);
  }
  render(t: number) {
    //t is current render time
    let delta_time = t - last_render_time
    last_render_time = t;
    let all_cameras = [...this.state.cameras,...this.state.current_room.cameras];
    let editor_camera_index = -1;
    if (DEBUG) {
      debug_state.render_delta_time = delta_time;
      all_cameras = [...all_cameras, debug_state.camera]
      editor_camera_index = all_cameras.length - 1;
      if (all_cameras.length === 1) {
        this.state.context.fillStyle = "white"
        this.state.context.font = "50px Arial"
        this.state.context.textAlign = "center";
        this.state.context.fillText("NO CAMERA", viewport.width / 2, viewport.height / 2);
      }
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
      let room = this.state.current_room;
      //List of all particles within the camera's fov
      let cords = room.proximity_map.getCordsFromBox(camera_box);
      let to_check = room.proximity_map.getObjectsFromCords(cords);
      let particle_collides = this.state.current_room.checkObjects(camera_box, [], this.state.current_room.particles_arr);
      //List of all objects within the camera's fov
      let camera_colliders = [...this.state.current_room.checkObjects(camera_box, [], to_check), ...particle_collides];
      let render_args = {
        context: this.offscreen_context,
        camera: camera,
      };
      //Renders the room's background.
      if (this.state.current_room.render) {
        sprite_renderer(render_args, {
          sprite: this.state.current_room.renderf(delta_time),
          x: 0,
          y: 0,
          rotation: 0,
          scale: {
            width: 1,
            height: 1
          },
          scale_type: scale_type.grow
        });
      }
      canvas_renderer(render_args, {
        canvas: this.static_canvas,
        width: this.state.current_room.proximity_map.length,
        height: this.state.current_room.proximity_map.length,
        x: 0,
        y: 0,
        scale: { width: 1, height: 1 }
      })
      //Array of hitboxes for each item in the room
      let hitboxes: collision_box[] = [];
      camera_colliders = camera_colliders.filter((b) => b.render && !b.static).sort((a, b) => (a.layer - b.layer))
      for (let a of camera_colliders) {
        let rendered = a.renderTrack(t);

        //Objects can return either a sprite, or an array of sprites to simplify the API
        //For the user, and for use in composite objects(object that bundles other objects together)
        //Internally, we convert any single sprite into an array of one sprite.

        
        for (let positioned_sprite of rendered) {
          sprite_renderer(render_args, {
            sprite: positioned_sprite.sprite,
            x: positioned_sprite.x,
            y: positioned_sprite.y,
            rotation: a.state.rotation,
            scale: a.state.scaling,
            scale_type: a.scale_type
          });
        }
        for (let node of a.text_nodes) {
          text_renderer(render_args, {
            x: node.state.position.x,
            y: node.state.position.y,
            font: node.renderf(t)
          })
        }

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
                scale: graphic.state.scaling,
                scale_type: graphic.scale_type
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
        let boxes_copy = [...boxes];
        let lines_copy = [...lines];
        while (lines_copy.length > 0) {
          let line = lines_copy.pop();
          line_renderer(this.offscreen_context, line, "orange", 10, camera);
        }
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
          rect_renderer(this.offscreen_context, { width: 5, height: 5 }, coll.x, coll.y, "skyblue", 10, camera);
          stroked_rect_renderer(this.offscreen_context, coll, coll.x, coll.y, "blue", 1, camera);
        }

        stroked_rect_renderer(this.offscreen_context, { width: this.state.current_room.proximity_map.length, height: this.state.current_room.proximity_map.length }, 0, 0, "purple", 10, camera);
      }
      //Separate canvas for the editor camera
      if (a !== editor_camera_index) {
        this.state.context.drawImage(this.offscreen_canvas, camera.state.viewport.x, camera.state.viewport.y);
      }
      else {
        debug_state.target.getContext("2d").drawImage(this.offscreen_canvas, camera.state.viewport.x, camera.state.viewport.y);
      }
    }
    if (DEBUG) {
      boxes = [];
      lines = [];
    }
    requestAnimationFrame((a) => {
      if (this.isRendering)
        this.render(a)
    });
  }
  start_logic(a: number) {
    //this is the room's state loop
    return window.setInterval(() => {
      let new_time = new Date();
      if (!PAUSED) {

        let time_since = new_time.getTime() - last_time.getTime();
        let room = this.state.current_room;
        if (room) {
          room.statef(time_since);
          if(this.state.cameras){
            for(let cameras of this.state.cameras){
              if(cameras.hud){
                cameras.hud.statef(time_since);
              } 
            } 
          }
        }
      }
      last_time = new_time;
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
    let loaded_room = false;
    for (let a of Object.keys(room_list)) {
      if (a == x) {
        //this isn't particularly type-safe.
        let new_room = <room<{}>>new room_list[a](this)
        await this.loadRoom(new_room);
        return;
      }
    }
    throw new Error("Attempted to load non-existing room.");
  }
  redrawStatics() {
    let room_length = this.state.current_room.proximity_map.length;
    let statics = this.state.current_room.objects.filter(u => u.static);
    this.static_canvas.width = room_length;
    this.static_canvas.height = room_length;
    this.static_context.clearRect(0, 0, room_length, room_length);
    let static_cam = new Camera({
      x: 0,
      y: 0,
      dimensions: { height: room_length, width: room_length },
      scaling: 1,
      debug: false
    }, {
      x: 0,
      y: 0,
      width: 1,
      height: 1
    })
    statics.forEach((u) => {
      let rendered = u.renderTrack(u.last_render);
      for (let r of rendered) {
        sprite_renderer({
          context: this.static_context,
          camera: static_cam
        }, {
          sprite: r.sprite,
          x: r.x,
          y: r.y,
          rotation: u.state.rotation,
          scale: u.state.scaling,
          scale_type: u.scale_type
        });
      }
    })
  }
  async loadRoom(x: room<unknown>) {
    //Clears the room's logic loop if one
    //Was already running
    this.isRendering = false;
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
    await x.load();
    for (let c of x.config.objects) {
      //This handles loading objects from the saved json file associated with each room.
      await x.addItemStateConfig(c)
    }
    x.registerControls();
    x.registerParticles();
    this.state.current_room = x;
    this.state.current_room.initialize();
    this.redrawStatics();
    this.state.logic = this.start_logic(logic_loop_interval)

    if (DEBUG) {
      debug_update_room_list();
      debug_update_prefabs();
      debug_update_obj_list();
    }


    if (!this.isRendering) {
      this.isRendering = true;
      //This starts the render loop for the room
      this.render(0);


    }

  }
}

export enum peer_connection{
  child,
  host
}

export class peer_to_peer_game<T> extends game<T>{
  hosting_peer:Peer;
  hosting_connections:Peer.DataConnection[] = [];
  peer_host:Peer.DataConnection;
  type:peer_connection;
  constructor(ctx: CanvasRenderingContext2D, init_state: T){
    super(ctx, init_state);
    this.hosting_peer = new Peer();
  }
  connect(id:string){
    const conn = this.hosting_peer.connect(id);
    this.peer_host = conn;
    this.type = peer_connection.child;
    conn.on("open", () => {
      conn.send(JSON.stringify({type:"connection",recieved:"success"}));
    })
    conn.on("data", (data) => {
      let {type,recieved} = JSON.parse(data);
      this.recieve_from_host(type,recieved)
    })
  }
  host(){
    this.type = peer_connection.host;
    this.hosting_peer.on("connection", (connection) => {
      this.hosting_connections.push(connection);
      let id = this.hosting_connections.length - 1;
      connection.on("data",(data) => {
        let {type,recieved} = JSON.parse(data);
        this.recieve_from_peer(id,type,recieved)
      })      
    })
  }
  send_to_peer(id:number,type:string,data:string){
    this.hosting_connections[id].send(JSON.stringify({type,data}));
  }
  send_to_all_peers(type:string,data:string){
    for(let conn of this.hosting_connections){
      conn.send(JSON.stringify({type,recieved:data}));
    }
  }
  send_to_host(type:string,data:string){
    this.peer_host.send(JSON.stringify({type,recieved:data}));
  }
  recieve_from_peer(id:number,type:string,data:string){
    (this.state.current_room as p2p_room).parse_packet(type,data,id);
  }
  recieve_from_host(type:string,data:string){
    switch(type){
      case "change_room":
        this.loadRoomString(data)
    }
    if(this.state.current_room){
      (this.state.current_room as p2p_room).parse_packet(type,data,undefined);
    }
  }
  async loadRoomString(x:string){
    this.send_to_all_peers("change_room",x);
    let result = await super.loadRoomString(x);
    if(this.type == peer_connection.child){
      this.send_to_host("finished_change_room","success");
    }
    return result;
  }  
}