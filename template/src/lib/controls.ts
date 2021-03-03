import { g } from "../game/main";
import {game,PAUSED,DEBUG, GetScreenDimensions,GetViewportDimensions} from "../van";
import { collision_box } from "./collision";
import {obj} from "./object";
import { Camera } from "./render";
import {Vector} from "./state";
import {debug_state} from "./debug";

interface mousePos{
  x:number,
  y:number,
  last:{
    x:number,
    y:number
  }
}



export interface control_func{
  ():void
}

interface mouseBinds{
  [key:string]: Array<[control_func,obj]>
}

interface keyBinds{
  [key:string]: Array<control_func>
}
let target = document.getElementById("target");
/*
export function init_click_handler(game:game<unknown>){
  window.addEventListener("click",(e)=>{
    
    let mouse = Poll_Mouse(game.state.cameras[0]);
    if(!mouse){
      return
    }
    let box:collision_box = {
      x:mouse.x,
      y:mouse.y,
      height:1,
      width:1
    };
    
  let d:bind[];
  if(DEBUG){
    if(debug_state.last_clicked && debug_state.last_clicked.id == "debug_target"){
      d = [...debug_binds];
    }
    else if(!PAUSED && debug_state.last_clicked && debug_state.last_clicked.id == "target"){
      d= [...all_binds]
    }
    else{
      d = [];
    }
  }
  else{
    d = [...all_binds];
  }
    for(let a = 0;a < d.length;a++){
      let selected = d[a];
      if(selected.type === btype.mouse && selected.key === "mouse1" && selected.execute == exec_type.once){
        if(selected.obj !== undefined){
          if(selected.obj.collidesWithBox(box)){
            selected.function();
          }
        }
        else{
          selected.function();        
        }
      }
    }  
  })
}
*/

let was_valid:boolean = false;

window.addEventListener("mousedown", (e) => {
  e.preventDefault();

  let d: bind[];

  function within_Canvas(canvas: HTMLCanvasElement) {
    let wratio = parseFloat(window.getComputedStyle(canvas).width) / GetViewportDimensions().width;
    let vratio = parseFloat(window.getComputedStyle(canvas).height) / GetViewportDimensions().height;
    let bounds = canvas.getBoundingClientRect();
    if (x > bounds.left && x < bounds.right && y < bounds.bottom && y > bounds.top) {
      return true;
    }
  }

  if (DEBUG) {
    if (debug_state.last_clicked && debug_state.last_clicked.id == "debug_target" && within_Canvas(g.state.canvases[1])) {
      d = [...debug_binds];
    }
    else if (!PAUSED && debug_state.last_clicked && debug_state.last_clicked.id == "target" && within_Canvas(g.state.canvases[0])) {
      d = [...all_binds]
    }
    else {
      d = [];
    }
  }
  else {
    d = [...all_binds];
  }
  for (let a = 0; a < d.length; a++) {
    let selected = d[a];
    if (selected.type === btype.mouse && selected.key === ("mouse" + e.button + "down") && !selected.executed) {
      if (selected.execute === exec_type.once) {
        selected.function();
      }
      else if (selected.execute === exec_type.repeat) {
        selected.repeat_timer.active = true;
      }
      selected.executed = true;
    }
    if (selected.type === btype.mouse && (selected.key === ("mouse" + e.button + "up") || selected.key == "mouseup") && selected.executed && selected.execute === exec_type.once) {
      selected.executed = false;
    }
    else if (selected.type === btype.mouse && (selected.key === ("mouse" + e.button + "up") || selected.key == "mouseup") && selected.executed && selected.execute === exec_type.repeat) {
      let g = [...repeat_binds];
      for (let a = 0; a < g.length; a++) {
        if (g[a].bind.id === selected.id) {
          selected.executed = false;
          g[a].active = false;
          break;
        }
      }
    }
  }
})

window.addEventListener("mouseup", (e) => {
  e.preventDefault();
  let d:bind[];
  if(DEBUG){
    if(debug_state.last_clicked && debug_state.last_clicked.id == "debug_target"){
      d = [...debug_binds];
    }
    else if(!PAUSED && debug_state.last_clicked && debug_state.last_clicked.id == "target"){
      d= [...all_binds]
    }
    else{
      d = [];
    }
  }
  else{
    d = [...all_binds];
  }
  for (let a = 0; a < d.length; a++) {
    let selected = d[a];
    if (selected.type === btype.mouse && selected.key === ("mouse" + e.button + "up")  && !selected.executed) {
      if(selected.execute === exec_type.once){
        selected.function();
      }
      else if(selected.execute === exec_type.repeat){
        selected.repeat_timer.active = true;
      }
      selected.executed = true;
    }
    if (selected.type === btype.mouse && (selected.key === ("mouse" + e.button + "down") || selected.key == "mousedown") && selected.executed && selected.execute === exec_type.once) {
       selected.executed = false;
    }
    else if(selected.type === btype.mouse && (selected.key === ("mouse" + e.button + "down") || selected.key == "mousedown") && selected.executed && selected.execute === exec_type.repeat){
      let g = [...repeat_binds];
      for(let a = 0; a < g.length;a++){
        if(g[a].bind.id === selected.id){
          selected.executed = false;
          g[a].active = false;
          break;
        }
      }
    }
  }
})

interface held_keys{
  [index:string]:boolean
}

export let held_keys:held_keys = {};

window.addEventListener("wheel",(e)=>{
  let code:string;
  e.preventDefault();
  if(e.deltaY < 0){
    code = "scrollup";
  }
  else if(e.deltaY > 0){
    code = "scrolldown";
  }

  let d:bind[];
  if(DEBUG){
    if(debug_state.last_clicked && debug_state.last_clicked.id == "debug_target"){
      d = [...debug_binds];
    }
    else if(!PAUSED && debug_state.last_clicked && debug_state.last_clicked.id == "target"){
      d= [...all_binds]
    }
    else{
      d = [];
    }
  }
  else{
    d = [...all_binds];
  }
  
  for (let a = 0; a < d.length; a++) {
    let selected = d[a];
    if (selected.type === btype.mouse && selected.key === code) {
      if(selected.execute === exec_type.once){
        selected.function();
      }
    }
  }
})

window.addEventListener("keydown", (e) => {
  held_keys[e.code] = true;
  if(e.code == "Tab"){
    e.preventDefault();
  }
  let d:bind[];
  if(DEBUG){
    if(debug_state.last_clicked && debug_state.last_clicked.id == "debug_target"){
      d = [...debug_binds];
    }
    else if(!PAUSED && debug_state.last_clicked && debug_state.last_clicked.id == "target"){
      d= [...all_binds]
    }
    else{
      d = [];
    }
  }
  else{
    d = [...all_binds];
  }
  for (let a = 0; a < d.length; a++) {
    let selected = d[a];
    if (selected.type === btype.keyboard && selected.key === e.code  && !selected.executed) {
      if(selected.execute === exec_type.once){
        selected.function();
      }
      else if(selected.execute === exec_type.repeat){
        for(let c of repeat_binds){
          if(c.bind.id == selected.id){
            c.active = true;
            break;
          }
        }
      }
      selected.executed = true;
    }
  }
  
})
window.addEventListener("keyup", (e) => {
  held_keys[e.code] = false;

  let d:bind[];
  if(DEBUG){
    if(debug_state.last_clicked && debug_state.last_clicked.id == "debug_target"){
      d = [...debug_binds];
    }
    else if(!PAUSED && debug_state.last_clicked && debug_state.last_clicked.id == "target"){
      d= [...all_binds]
    }
    else{
      d = [];
    }
  }
  else{
    d = [...all_binds];
  }
  for (let a = 0; a < d.length; a++) {
    let selected = d[a];
    if (selected.type === btype.keyboard && selected.key === e.code && selected.executed) {
      if(selected.execute === exec_type.once ){
        selected.executed = false;
      }
      else if(selected.execute === exec_type.repeat){
        let g = [...repeat_binds];
        for(let a = 0; a < g.length;a++){
          if(g[a].bind.id === selected.id){
            selected.executed = false;
            g[a].active = false;
            break;
          }
        }
      }
    }
  }

})
let tracker = document.getElementById("target");
window.addEventListener("mousemove", (e) => {
  var rect = (e.target as HTMLCanvasElement).getBoundingClientRect() ;
  //console.log(e.target)
  last_x = x;
  last_y = y;
  x = e.clientX; //x position within the element.
  y = e.clientY;  //y position within the element.

})

export enum btype{
  mouse,
  keyboard
}

interface bind{
  key:string,
  type:btype,
  id:number,
  function:control_func,
  execute:exec_type,
  repeat_timer?:repeat_bind,
  obj?:obj,
  executed?:boolean,
  interval?:number,
  camera?:Camera
}

interface repeat_bind{
  bind:bind,
  timer:number,
  interval:number,
  active:boolean
}

let x = 0;
let y = 0;
let last_x = 0;
let last_y = 0;
let binds:keyBinds = {};
export let debug_binds:bind[] = [];
let mouseBinds:mouseBinds = {};
let bind_count = 0;

let all_binds:Array<bind> = []

let repeat_binds:Array<repeat_bind> = [];

export function Poll_Mouse(camera:Camera,canvas:HTMLCanvasElement = g.state.canvases[0]):Vector{
  let height = GetViewportDimensions().height;
  let wratio = parseFloat(window.getComputedStyle(canvas).width)/GetViewportDimensions().width;
  let vratio = parseFloat(window.getComputedStyle(canvas).height)/GetViewportDimensions().height;
  let bounds = canvas.getBoundingClientRect();
  if(x > bounds.left && x < bounds.right && y < bounds.bottom && y > bounds.top){
    
    return ({
      x: ((x - bounds.left - camera.state.viewport.x)/wratio/camera.state.scaling + camera.state.position.x - camera.state.dimensions.width/camera.state.scaling/2) ,
      y: ((height - (y-bounds.top)/vratio)/camera.state.scaling + camera.state.position.y - camera.state.dimensions.height/camera.state.scaling/2 - camera.state.viewport.y)
    })
  }
  return undefined;
}

export function ExecuteRepeatBinds(b:number){
  for(let a of repeat_binds){
    if(a.bind.execute === exec_type.repeat && a.timer == 0 && a.active){
      a.bind.function();
    }
    if(a.active || (!a.active && a.timer != 0))
      a.timer += b;
    if(a.timer > a.interval){
      a.timer = 0; 
    }
  }
}

export function Unbind(bind_id:number){
  for(let a = 0;a < all_binds.length; a++){
    if(all_binds[a].id == bind_id){
      all_binds.splice(a,1);
      break;
    }
  }
  for(let a = 0;a < repeat_binds.length; a++){
    if(repeat_binds[a].bind.id == bind_id){
      repeat_binds.splice(a,1);
      break;
    }
  }
}

export enum exec_type{
  once,
  repeat
}

let id = 0;
export function Bind(keyname:string,func:control_func,type:exec_type,interval:number,object?:obj):number{
  if(keyname.slice(0,5) === "mouse" || keyname.slice(0,6) === "scroll"){
    let b:bind = {
      key:keyname,
      type:btype.mouse,
      id,
      function:func,
      obj:object,
      execute:type,
      executed:false,
      interval
    };
    if(type == exec_type.repeat){
      b.repeat_timer = {
        bind:b,
        timer:0,
        interval,
        active:false
      }
      repeat_binds.push(b.repeat_timer);
    }
    all_binds.push(b);

  }
  else{
    let b:bind = {
      key:keyname,
      type:btype.keyboard,
      id,
      function:func,
      execute:type,
      executed:false,
      interval
    }
    if(type == exec_type.repeat){
      b.repeat_timer = {
        bind:b,
        timer:0,
        interval,
        active:false
      }
      repeat_binds.push(b.repeat_timer);
    }
    all_binds.push(b);
  }
  id++;
  return id - 1;
}