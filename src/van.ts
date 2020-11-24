export let DEBUG = true;
export let PAUSED = true;
import {obj} from "./lib/object";
import {obj_state, position} from "./lib/state";
import {room} from "./lib/room";
import {positioned_sprite, sprite} from "./lib/sprite";
import { collision_box } from "./lib/collision";
import {sprite_renderer,rect_renderer, stroked_rect_renderer, hud_text_renderer, Camera, text_renderer} from "./lib/render";
import {HUD} from "./lib/hud";
import {ExecuteRepeatBinds,debug_binds,btype,exec_type, Poll_Mouse, Bind, held_keys} from "./lib/controls";
import {init_click_handler} from "./lib/controls";


let canvas_element:HTMLCanvasElement = document.getElementById("target") as HTMLCanvasElement;
let context:CanvasRenderingContext2D = canvas_element.getContext("2d");


let screen_width = window.innerWidth;
let screen_height = window.innerHeight;

let vwidth = canvas_element.width;
let vheight = canvas_element.height;


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

interface debug_vars{
  target:HTMLCanvasElement,
  camera:Camera,
  last_clicked:HTMLElement,
  selected_element:obj<unknown>,
  rotation_element:obj<unknown>,
  middle_position:position
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

function debug_statef(t:number){
  let mouse = Poll_Mouse(DEBUG_v.target,DEBUG_v.camera);
  if(DEBUG_v.selected_element){
    let st = DEBUG_v.selected_element.state as unknown as obj_state;
    st.position.x = mouse.x,
    st.position.y = mouse.y
  }
  if(DEBUG_v.rotation_element){
    DEBUG_v.rotation_element.rotation = DEBUG_v.rotation_element.angleTowardsPoint(mouse);
  }
  if(DEBUG_v.middle_position){
   let diff_y = mouse.y - DEBUG_v.middle_position.y;
   let diff_x = mouse.x - DEBUG_v.middle_position.x;
    DEBUG_v.camera.state.position.x = DEBUG_v.camera.state.position.x + -1 * diff_x;
    DEBUG_v.camera.state.position.y = DEBUG_v.camera.state.position.y + -1 * diff_y;
  }
  
}

export let rooms:any[] = [];
export let objects:any[];

export class game<T>{
  state:game_state<T>;
  context:CanvasRenderingContext2D;
  offscreen_canvas:HTMLCanvasElement;
  offscreen_context:CanvasRenderingContext2D;
  prototypes:Array<obj<unknown>> = [];
  rooms:Array<any> = [];
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
        rotation_element:undefined,
        middle_position:undefined
      }
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
            let clicked = this.getRoom().check_objects({
              x:mouse.x,
              y:mouse.y,
              height:1,
              width:1
            })[0]
            if(clicked){
              DEBUG_v.selected_element = clicked;
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
          DEBUG_v.selected_element = undefined;
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
            let clicked = this.getRoom().check_objects({
              x:mouse.x,
              y:mouse.y,
              height:1,
              width:1
            })[0]
            if(clicked){
              DEBUG_v.rotation_element = clicked;
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
        
        if(!held_keys["Control"] && DEBUG_v.last_clicked.id == "debug_target")
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
          console.log("SAVE");
        }
        else if(ctrl_held && !PAUSED){
          console.log("pause to enable saving.")
        }
      }
      let scroll_down = ()=>{
        if(DEBUG_v.last_clicked.id == "debug_target" && DEBUG_v.camera.state.scaling > 0.05)
          DEBUG_v.camera.state.scaling = DEBUG_v.camera.state.scaling - 0.05;
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
          debug_statef(0);
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
      let particle_collides = this.state.current_room.check_objects(camera_box,[],this.state.current_room.particles_arr);
      let camera_colliders = [...this.state.current_room.check_objects(camera_box),...particle_collides];
      let render_args = {
        context:this.offscreen_context,
        camera:camera,
      };
      sprite_renderer(render_args,{
        sprite:this.state.current_room.renderf(time),
        x: 0,
        y: 0,
        rotation: 0,
        scale:1
      });
      let hitboxes:collision_box[] = [];
      for (let a of camera_colliders.filter((b) => b.render)) {
        let rendered = a.render_track(t);
        if (Array.isArray(rendered)) {
          for (let positioned_sprite of rendered)
            sprite_renderer(render_args, {
              sprite:positioned_sprite.sprite,
              x: positioned_sprite.x,
              y: positioned_sprite.y,
              rotation: a.rotation,
              scale:a.scaling
            });
        }
        else {
          let positioned_sprite = rendered as positioned_sprite;
          sprite_renderer(render_args, {
            sprite: positioned_sprite.sprite,
            x: positioned_sprite.x,
            y: positioned_sprite.y,
            rotation: a.rotation,
            scale:a.scaling
          });
        }
        if(DEBUG && a.collision){
          hitboxes.push(...a.get_all_collision_boxes());
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
          let rendered = a.render_track(t);
          if(a.render){
            for(let positioned_sprite of rendered){
              sprite_renderer(render_args,{
                sprite:positioned_sprite.sprite,
                x:positioned_sprite.x,
                y:positioned_sprite.y,
                rotation:a.rotation,
                scale:a.scaling
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
          stroked_rect_renderer(this.offscreen_context,rect,box.x,box.y,"#FF0000",camera);
        }
        while(hitboxes.length > 0){
          let box = hitboxes.pop();
          let rect = {
            width:box.width,
            height:box.height
          }
          stroked_rect_renderer(this.offscreen_context,rect,box.x,box.y,"#008000",camera);
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
    console.log("called");
    console.log(JSON.stringify(rooms));
    for(let a of rooms){
      console.log(a.constructor.name)
      if(a.constructor.name == x){
        this.loadRoom(new a(this));
      }
    }
  }
  async loadRoom(x:room<unknown>){
    
    x.game = this;
    if(this.state.current_room !== undefined){
      while(this.state.current_room.objects.length > 0){
        this.state.current_room.objects[0].delete();
      }
    }
    this.state.current_room = x;
    let new_room = await x.load();
    x.register_controls();
    x.registerParticles();
    if(this.state.logic != undefined){
      clearInterval(this.state.logic);
    }
    this.state.logic = this.start_logic(logic_loop_interval)
    this.render(0);
  }
}
