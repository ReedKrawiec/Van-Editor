export let DEBUG = true;
export let PAUSED = true;
import {obj,params} from "./lib/object";
import {obj_state, position} from "./lib/state";
import {room} from "./lib/room";
import {positioned_sprite, sprite} from "./lib/sprite";
import { collision_box } from "./lib/collision";
import {sprite_renderer,rect_renderer, stroked_rect_renderer, hud_text_renderer, Camera, text_renderer} from "./lib/render";
import {HUD} from "./lib/hud";
import {ExecuteRepeatBinds,debug_binds,btype,exec_type, Poll_Mouse, Bind, held_keys, Unbind} from "./lib/controls";
import {Distance} from "./lib/math";
import {init_click_handler} from "./lib/controls";
import {debug_update_room_list,debug_update_obj_list,debug_statef,debug_setup,debug_update_prefabs,debug_update_properties_element, Debug_hud} from "./lib/debug";
import {rooms as room_list} from "./game/rooms/rooms";
let { ipcRenderer} = window.require("electron");
const path = window.require("path");
let fs = window.require("fs");
export let project_path = ipcRenderer.sendSync('path-request', 'ping')[0];

let canvas_element:HTMLCanvasElement = document.getElementById("target") as HTMLCanvasElement;
let context:CanvasRenderingContext2D = canvas_element.getContext("2d");


let screen_width = window.innerWidth;
let screen_height = window.innerHeight;

let vwidth = canvas_element.width;
let vheight = canvas_element.height;

import {g} from "./game/main";


//How often the game logic loop should run, in milliseconds
let logic_loop_interval:number = 1000/60;  

let last_time = new Date();

let last_render_time = 0;

interface dimensions{
  height:number,
  width:number
}


export function GetScreenDimensions ():dimensions{
  return({
    width:screen_width,
    height:screen_height
  })
}

export function GetViewportDimensions ():dimensions{
  return({
    height:canvas_element.height,
    width:canvas_element.width
  })
}

export let viewport = {
  height:GetViewportDimensions().height,
  width:GetViewportDimensions().width
}

window.onresize = () => {
  viewport.height = GetViewportDimensions().height
  viewport.width = GetViewportDimensions().width
}

export function setDebug(x:boolean){
  DEBUG = x;
}

export function setPaused(x:boolean){
  PAUSED = x;
}

export const render_collision_box = (a:collision_box) => {
  boxes.push(a);
}

let boxes:Array<collision_box> = [];

export let deep = (a:any) =>{
  return JSON.parse(JSON.stringify(a));
}

interface debug_action{
  property:string,
  old:string,
  new:string,
  element:obj
}

export interface debug_vars{
  target:HTMLCanvasElement,
  camera:Camera,
  last_clicked:HTMLElement,
  selected_element_initial_scaling:dimensions,
  selected_element:obj,
  selected_element_offset:position,
  rotation_element:obj,
  selected_properties_element:obj,
  middle_position:position,
  click_position:position,
  actions_stack:debug_action[],
  current_action:debug_action
}

export let DEBUG_v:debug_vars;

interface game_state<T>{
  logic:number,
  context:CanvasRenderingContext2D,
  current_room:room<unknown>,
  cameras:Array<Camera>,
  canvas:HTMLCanvasElement,
  game:T
}


export let rooms:any[] = [];
export let objects:any[];

export class game<T>{
  state:game_state<T>;
  context:CanvasRenderingContext2D;
  offscreen_canvas:HTMLCanvasElement;
  offscreen_context:CanvasRenderingContext2D;
  prototypes:Array<obj> = [];
  rooms:Array<any> = [];
  isRendering = false;
  constructor(ctx:CanvasRenderingContext2D,init_state:T,init:any){
    this.state = {
      canvas:canvas_element,
      logic:undefined,
      context:ctx,
      cameras:[
      ],
      current_room: undefined,
      game:init_state
    }
    this.offscreen_canvas = document.createElement("canvas");
    this.offscreen_context = this.offscreen_canvas.getContext("2d");

    if (DEBUG) {
      debug_setup(); 
      DEBUG_v = {
        target: document.getElementById("debug_target") as HTMLCanvasElement,
        camera: new Camera({
          x:0,
          y:0,
          dimensions:{
            height:viewport.height,
            width:viewport.width
          },
          scaling:1,
          debug:true
        }
        ,{
          x:1,
          y:0,
          width:1,
          height:1
        }),
        last_clicked:undefined,
        selected_element:undefined,
        selected_element_offset:undefined,
        rotation_element:undefined,
        middle_position:undefined,
        click_position:undefined,
        selected_properties_element:undefined,
        selected_element_initial_scaling:{width:1,height:1},
        actions_stack:[],
        current_action:undefined
      }
      
      DEBUG_v.camera.hud = new Debug_hud();
      debug_binds.push({
        key:"mouse0down",
        type:btype.mouse,
        id:0,
        function:()=>{
          if(DEBUG_v.selected_element){
            DEBUG_v.selected_element = null;
          }
          else{
            let mouse = Poll_Mouse(DEBUG_v.target,DEBUG_v.camera);
            DEBUG_v.click_position = mouse;
            let alL_clicked = this.getRoom().checkObjects({
              x:mouse.x,
              y:mouse.y,
              height:1,
              width:1
            })
            let clicked;
            let filtered = alL_clicked.filter((ele)=>ele == DEBUG_v.selected_properties_element)
            if(filtered.length > 0){
              clicked = filtered[0]
            }
            else{
              clicked = alL_clicked[0];
            }
            if(clicked){
              if(held_keys["ControlLeft"]){
                DEBUG_v.current_action = {
                  element:clicked,
                  property:"scaling",
                  old:JSON.stringify(clicked.scaling),
                  new:undefined
               }
              }
              else{
                DEBUG_v.current_action = {
                  element:clicked,
                  property:"position",
                  old:JSON.stringify((<obj_state>clicked.state).position),
                  new:undefined
                }
              }
              DEBUG_v.selected_properties_element= clicked;
              debug_update_properties_element()
              DEBUG_v.selected_element = clicked;
              DEBUG_v.selected_element_initial_scaling = clicked.state.scaling;
              DEBUG_v.selected_element_offset = {
                x: mouse.x - (<obj_state>clicked.state).position.x,
                y: mouse.y - (<obj_state>clicked.state).position.y
              }
            }
          }
        },
        execute:exec_type.once,
        camera:DEBUG_v.camera
      });
      debug_binds.push({
        key:"mouse1up",
        type:btype.mouse,
        id:5,
        function:()=>{
          DEBUG_v.middle_position = undefined;
        },
        execute:exec_type.once,
        camera:DEBUG_v.camera
      });
      debug_binds.push({
        key:"mouse1down",
        type:btype.mouse,
        id:6,
        function:()=>{
          let mouse = Poll_Mouse(DEBUG_v.target,DEBUG_v.camera);
          DEBUG_v.middle_position = mouse;
        },
        execute:exec_type.once,
        camera:DEBUG_v.camera
      });
      debug_binds.push({
        key:"mouse0up",
        type:btype.mouse,
        id:1,
        function:()=>{
          if(DEBUG_v.selected_element){
            if(DEBUG_v.current_action.property == "scaling"){
              DEBUG_v.current_action.new = JSON.stringify(DEBUG_v.selected_element.state.scaling)
            }
            else if(DEBUG_v.current_action.property == "position"){
              DEBUG_v.current_action.new = JSON.stringify((<obj_state>DEBUG_v.selected_element.state).position)
            }
            
            DEBUG_v.actions_stack.push(DEBUG_v.current_action);
          }
          
          DEBUG_v.selected_element = undefined;
          debug_update_properties_element()
        },
        execute:exec_type.once,
        camera:DEBUG_v.camera
      });
      debug_binds.push({
        key:"mouse2down",
        type:btype.mouse,
        id:3,
        function:()=>{
          if(DEBUG_v.rotation_element){
            DEBUG_v.rotation_element = null;
          }
          else{
            let mouse = Poll_Mouse(DEBUG_v.target,DEBUG_v.camera);
            let clicked = this.getRoom().checkObjects({
              x:mouse.x,
              y:mouse.y,
              height:1,
              width:1
            })[0]
            if(clicked){
              DEBUG_v.rotation_element = clicked;
              DEBUG_v.current_action = {
                element:DEBUG_v.rotation_element,
                property:"rotation",
                old:JSON.stringify(DEBUG_v.rotation_element.rotation),
                new:undefined
              }
            }
          }
        },
        execute:exec_type.once,
        camera:DEBUG_v.camera
      });
      debug_binds.push({
        key:"mouse2up",
        type:btype.mouse,
        id:4,
        function:()=>{
          DEBUG_v.current_action.new = JSON.stringify(DEBUG_v.rotation_element.state.rotation)
          DEBUG_v.actions_stack.push(DEBUG_v.current_action);
          DEBUG_v.rotation_element = undefined;
        },
        execute:exec_type.once,
        camera:DEBUG_v.camera
      });

      let left_func = ()=>{
        let shift_held = held_keys["ShiftLeft"] ? 1:0;
        if(DEBUG_v.last_clicked.id == "debug_target")
          DEBUG_v.camera.state.position.x = DEBUG_v.camera.state.position.x - ((5 + shift_held * 5) * (1/DEBUG_v.camera.state.scaling));
      };
      let right_func = ()=>{
        let shift_held = held_keys["ShiftLeft"] ? 1:0;
        if(DEBUG_v.last_clicked.id == "debug_target")
          DEBUG_v.camera.state.position.x = DEBUG_v.camera.state.position.x + ((5 + shift_held * 5) * (1/DEBUG_v.camera.state.scaling));
      };
      let down_func = ()=>{
        let shift_held = held_keys["ShiftLeft"] ? 1:0;
        
        if(!held_keys["ControlLeft"] && DEBUG_v.last_clicked.id == "debug_target")
          DEBUG_v.camera.state.position.y = DEBUG_v.camera.state.position.y - ((5 + shift_held * 5) * (1/DEBUG_v.camera.state.scaling));
      };
      let up_func = ()=>{
        let shift_held = held_keys["ShiftLeft"] ? 1:0;
        if(DEBUG_v.last_clicked.id == "debug_target")
          DEBUG_v.camera.state.position.y = DEBUG_v.camera.state.position.y + ((5 + shift_held * 5) * (1/DEBUG_v.camera.state.scaling));
      };
      let scroll_up = ()=>{
        if(DEBUG_v.last_clicked.id == "debug_target")
          DEBUG_v.camera.state.scaling = DEBUG_v.camera.state.scaling + 0.05;
      }
      let save_func = ()=>{
        let ctrl_held = held_keys["ControlLeft"];
        if(ctrl_held && PAUSED){
          let name = this.getRoom().constructor.name;
          let a = path.join(`${project_path}`,`../rooms/${name}.json`);
          try {
            fs.writeFileSync(a,JSON.stringify(this.getRoom().exportStateConfig()));
          } catch(e){
            console.log("ERROR WRITING ROOM INFO FILE."); 
          }
          alert("Saved");
          
        }
        else if(ctrl_held && !PAUSED){
          alert("pause to enable saving.")
        }
      }
      let scroll_down = ()=>{
        if(DEBUG_v.last_clicked.id == "debug_target" && DEBUG_v.camera.state.scaling > 0.05)
          DEBUG_v.camera.state.scaling = DEBUG_v.camera.state.scaling - 0.05;
      }
      let undo_func = ()=>{
        if(held_keys["ControlLeft"]){
          let curr:debug_action = DEBUG_v.actions_stack.pop();
          if(curr){
            if(curr.property == "position"){
              curr.element.state.position = JSON.parse(curr.old);
            }
            else if(curr.property === "rotation"){
              curr.element.rotation = JSON.parse(curr.old);
            }
            else if(curr.property === "scaling"){
              curr.element.scaling = JSON.parse(curr.old);
            }
          }
        }
      }
      debug_binds.push({
        key:"KeyA",
        type:btype.keyboard,
        id:Bind("KeyA",left_func,exec_type.repeat,1),
        function:left_func,
        execute:exec_type.repeat
      })
      debug_binds.push({
        key:"KeyD",
        type:btype.keyboard,
        id:Bind("KeyD",right_func,exec_type.repeat,1),
        function:right_func,
        execute:exec_type.repeat
      })
      debug_binds.push({
        key:"KeyW",
        type:btype.keyboard,
        id:Bind("KeyW",up_func,exec_type.repeat,1),
        function:up_func,
        execute:exec_type.repeat
      })
      debug_binds.push({
        key:"KeyS",
        type:btype.keyboard,
        id:Bind("KeyS",down_func,exec_type.repeat,1),
        function:down_func,
        execute:exec_type.repeat
      })
      debug_binds.push({
        key:"scrollup",
        type:btype.mouse,
        id:Bind("scrollup",scroll_up,exec_type.once,1),
        function:scroll_up,
        execute:exec_type.once
      })
      debug_binds.push({
        key:"scrolldown",
        type:btype.mouse,
        id:Bind("scrolldown",scroll_down,exec_type.once,1),
        function:scroll_down,
        execute:exec_type.once
      })
      debug_binds.push({
        key:"KeyS",
        type:btype.keyboard,
        id:Bind("KeyS",save_func,exec_type.once,1),
        function:save_func,
        execute:exec_type.once
      })
      debug_binds.push({
        key:"KeyZ",
        type:btype.keyboard,
        id:Bind("KeyZ",undo_func,exec_type.once,1),
        function:undo_func,
        execute:exec_type.once
      })
      window.addEventListener("click",(e)=>{
        if(e.target instanceof HTMLElement){
          DEBUG_v.last_clicked = e.target;
        }
      })
      document.getElementById("pause_button").addEventListener("click",(e)=>{
        PAUSED = !PAUSED;
      });
      setInterval(()=>{
        if(this.getRoom()){
          debug_statef(16.66);
        }
      },16.66)
    }

    this.initialize();
    init(this);
  }
  render(t:number){
    let time = t - last_render_time
    last_render_time = t;
    let all_cameras = this.state.cameras;
    let debug_index = -1;
    if(DEBUG){
      all_cameras = [...all_cameras,DEBUG_v.camera]
      debug_index = all_cameras.length - 1;
    }
    for(let a = 0;a <  all_cameras.length;a++){
      let camera = all_cameras[a];
      this.offscreen_canvas.height = camera.state.dimensions.height;
      this.offscreen_canvas.width = camera.state.dimensions.width;
      this.offscreen_context.clearRect(0,0,camera.state.dimensions.width,camera.state.dimensions.height);
      this.offscreen_context.fillStyle="black";
      this.offscreen_context.fillRect(0,0,camera.state.dimensions.width,camera.state.dimensions.height);
      let camera_box = {
        x:camera.state.position.x,
        y:camera.state.position.y,
        width:camera.state.dimensions.width * (1/camera.state.scaling),
        height:camera.state.dimensions.height * (1/camera.state.scaling)
      };
      let particle_collides = this.state.current_room.checkObjects(camera_box,[],this.state.current_room.particles_arr);
      let camera_colliders = [...this.state.current_room.checkObjects(camera_box),...particle_collides];
      let render_args = {
        context:this.offscreen_context,
        camera:camera,
      };
      sprite_renderer(render_args,{
        sprite:this.state.current_room.renderf(time),
        x: 0,
        y: 0,
        rotation: 0,
        scale:{
          width:1,
          height:1
        }
      });
      let hitboxes:collision_box[] = [];
      for (let a of camera_colliders.filter((b) => b.render).sort((a,b)=>(a.layer - b.layer))) {
        let rendered = a.renderTrack(t);
        if (Array.isArray(rendered)) {
          for (let positioned_sprite of rendered)
            sprite_renderer(render_args, {
              sprite:positioned_sprite.sprite,
              x: positioned_sprite.x,
              y: positioned_sprite.y,
              rotation: a.state.rotation,
              scale:a.state.scaling
            });
        }
        else {
          let positioned_sprite = rendered as positioned_sprite;
          sprite_renderer(render_args, {
            sprite: positioned_sprite.sprite,
            x: positioned_sprite.x,
            y: positioned_sprite.y,
            rotation: a.state.rotation,
            scale:a.state.scaling
          });
        }
        if(DEBUG && a.collision){
          hitboxes.push(...a.getAllCollisionBoxes());
        }
      }
      for(let node of this.state.current_room.text_nodes){
        text_renderer(render_args,{
          x:node.state.position.x,
          y:node.state.position.y,
          font:node.renderf(t)
        })
      }
      if(camera.hud){
        let graphics = camera.hud.graphic_elements;
        let text_elements = camera.hud.text_elements;
        for(let a of graphics){
          let rendered = a.renderTrack(t);
          if(a.render){
            for(let positioned_sprite of rendered){
              sprite_renderer(render_args,{
                sprite:positioned_sprite.sprite,
                x:positioned_sprite.x,
                y:positioned_sprite.y,
                rotation:a.state.rotation,
                scale:a.state.scaling
              });
            }
          }
        }
        //render_args.context = this.state.context;
        for(let a of text_elements){
          let st = a.state;
          hud_text_renderer(render_args,{
            x:st.position.x,
            y:st.position.y,
            font:a.renderf(t)
          })
        }
      }
      if (DEBUG && camera.state.debug) {
        let box: collision_box;
        let boxes_copy = [...boxes]
        while(boxes_copy.length > 0){
          let box = boxes_copy.pop();
          let rect = {
            width:box.width,
            height:box.height
          }
          stroked_rect_renderer(this.offscreen_context,rect,box.x,box.y,"#FF0000",1,camera);
        }
        while(hitboxes.length > 0){
          let box = hitboxes.pop();
          let rect = {
            width:box.width,
            height:box.height
          }
          stroked_rect_renderer(this.offscreen_context,rect,box.x,box.y,"#008000",1,camera);
        }
        if(DEBUG_v.selected_properties_element){
          let coll = DEBUG_v.selected_properties_element.getFullCollisionBox();
          rect_renderer(this.offscreen_context,{width:25,height:25},coll.x,coll.y,"skyblue",10,camera);
          stroked_rect_renderer(this.offscreen_context,coll,coll.x,coll.y,"blue",1,camera);
        }
      }

      if(a !== debug_index){
        this.state.context.drawImage(this.offscreen_canvas,camera.state.viewport.x,camera.state.viewport.y);
      }
      else{
        DEBUG_v.target.getContext("2d").drawImage(this.offscreen_canvas,camera.state.viewport.x,camera.state.viewport.y);
      }
    }
    if(DEBUG)
      boxes = [];
    requestAnimationFrame((a)=>{this.render(a)}); 
  }
  initialize(){
    init_click_handler(this);
  }
  start_logic(a:number){
    return window.setInterval(()=>{
      if(!PAUSED){
        let new_time = new Date();
        let time_since = new_time.getTime() - last_time.getTime();
        last_time = new_time;
        if(this.state.current_room){
          this.state.current_room.statef(time_since);
          if(this.state.current_room.hud){
            this.state.current_room.hud.statef(time_since);
          }
        }
      }
      
      ExecuteRepeatBinds(a);
    },a);
  }
  getRoom(){
    return this.state.current_room;
  }
  async loadRoomString(x:string){
    for(let a of Object.keys(room_list)){
      if(a == x){
        let new_room = <room<{}>>new room_list[a](this)
        await this.loadRoom(new_room);
      }
    }
  }

  async loadRoom(x:room<unknown>){
    if(this.state.logic){
      window.clearInterval(this.state.logic);
    }
    
    x.game = this;
    if(this.state.current_room !== undefined){
      while(this.state.current_room.objects.length > 0){
        this.state.current_room.objects[0].delete();
      }
      for(let id of this.state.current_room.binds){
        Unbind(id);
      }
    }
    
    let new_room = await x.load();
    x.registerControls();
    x.registerParticles();
    if(this.state.logic != undefined){
      clearInterval(this.state.logic);
    }
    this.state.logic = this.start_logic(logic_loop_interval)
    if (DEBUG) {
      debug_update_room_list();
      debug_update_prefabs();
      debug_update_obj_list();
    }
    this.state.current_room = x;

    if(!this.isRendering){
      this.render(0);
      this.isRendering = true;
    }
  }
}
