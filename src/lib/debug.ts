import { obj, params } from "./object";
import { obj_state } from "./state";
let { ipcRenderer } = window.require("electron");
const path = window.require("path");
let fs = window.require("fs");
import { prefabs } from "../game/objects/prefabs";
import { DEBUG_v, project_path, debug_vars, DEBUG, PAUSED } from "../van";
import { g } from "../game/main";
import { rooms as room_list } from "../game/rooms/rooms";
import { Poll_Mouse, held_keys } from "../lib/controls";
import { HUD,Text } from "../lib/hud";

export class Debug_hud extends HUD{
  setTextElements(){
    return [new Text({
      position: {
        x: 10,
        y: 10
      },
      size: 22,
      font: "Alata",
      color: "white",
      align:"left",
      scaling:1
    }, () => `X:${DEBUG_v.camera.state.position.x.toFixed(0)}`),
    new Text({
      position: {
        x: 10,
        y: 32
      },
      size: 22,
      font: "Alata",
      color: "white",
      align:"left",
      scaling:1
    }, () => `Y:${DEBUG_v.camera.state.position.y.toFixed(0)}`)
    ];
  }
}

export function debug_statef(t: number) {
  let mouse = Poll_Mouse(DEBUG_v.target, DEBUG_v.camera);
  if(DEBUG_v.camera.hud){
    DEBUG_v.camera.hud.statef(t);
  }
  if (!PAUSED) {
    debug_update_properties_element();
  }
  if (DEBUG_v.selected_element) {
    if (PAUSED && held_keys["ControlLeft"] && DEBUG_v.current_action.property == "scaling") {
     let dist = {
      x:Math.abs(mouse.x - DEBUG_v.selected_element.state.position.x),
      y:Math.abs(mouse.y - DEBUG_v.selected_element.state.position.y)
     }
     DEBUG_v.selected_element.state.scaling.width = (2 * dist.x)/DEBUG_v.selected_element.width;
     DEBUG_v.selected_element.state.scaling.height = (2 * dist.y)/DEBUG_v.selected_element.height;
    }
    else {
      let st = DEBUG_v.selected_element.state as unknown as obj_state;
      st.position.x = mouse.x - DEBUG_v.selected_element_offset.x,
        st.position.y = mouse.y - DEBUG_v.selected_element_offset.y
    }
  }
  if (PAUSED && DEBUG_v.rotation_element) {
    DEBUG_v.rotation_element.state.rotation = DEBUG_v.rotation_element.angleTowardsPoint(mouse);
  }
  if (DEBUG_v.middle_position) {
    let diff_y = mouse.y - DEBUG_v.middle_position.y;
    let diff_x = mouse.x - DEBUG_v.middle_position.x;
    DEBUG_v.camera.state.position.x = DEBUG_v.camera.state.position.x + -1 * diff_x;
    DEBUG_v.camera.state.position.y = DEBUG_v.camera.state.position.y + -1 * diff_y;
  }

}

export function debug_update_room_list() {
  let list = document.getElementById("room_list");
  list.textContent = '';
  for (let room_name of Object.keys(room_list)) {
    let para = document.createElement("p");
    para.appendChild(document.createTextNode(room_name));
    para.classList.add("room_list_item");
    para.addEventListener("click", (e) => {
      g.loadRoomString(room_name);
    })
    list.appendChild(para);
  }
}

interface properties_element {
  pos_x: HTMLInputElement,
  pos_y: HTMLInputElement,
  vel_x: HTMLInputElement,
  vel_y: HTMLInputElement,
  rot: HTMLInputElement,
  sca_x: HTMLInputElement,
  sca_y: HTMLInputElement,
  render: HTMLInputElement,
  collision: HTMLInputElement
}
let properties_elements: properties_element = undefined;
if (DEBUG) {
  properties_elements = {
    pos_x: (<HTMLInputElement>document.getElementById("pos_x")),
    pos_y: (<HTMLInputElement>document.getElementById("pos_y")),
    vel_x: (<HTMLInputElement>document.getElementById("vel_x")),
    vel_y: (<HTMLInputElement>document.getElementById("vel_y")),
    rot: (<HTMLInputElement>document.getElementById("rot")),
    sca_x: (<HTMLInputElement>document.getElementById("sca_x")),
    sca_y: (<HTMLInputElement>document.getElementById("sca_y")),
    render: (<HTMLInputElement>document.getElementById("render")),
    collision: (<HTMLInputElement>document.getElementById("collision"))
  }

  let inputs = document.getElementsByTagName("input");
  for (let a = 0; a < inputs.length; a++) {
    inputs[a].addEventListener("click", (e) => {
      (<HTMLElement>inputs[a]).focus();
    })
  }
  let focused;
  let debug_target = document.getElementById("debug_target")
  debug_target.addEventListener("click", (e) => {
    for (let a = 0; a < inputs.length; a++) {
      inputs[a].blur();
    }
  })
  let target = document.getElementById("target");
  target.addEventListener("click", (e) => {
    for (let a = 0; a < inputs.length; a++) {
      inputs[a].blur();
    }
  })
  properties_elements.pos_x.addEventListener("input", (e) => {
    
    let ele = DEBUG_v.selected_properties_element;
    let new_val = parseFloat(properties_elements.pos_x.value) || 0;
    DEBUG_v.actions_stack.push({
      property:"position",
      element:ele,
      new:JSON.stringify({x:new_val,y:ele.state.position.y}),
      old:JSON.stringify(ele.state.position)
    })
    ele.state.position.x = new_val;
  })
  properties_elements.pos_y.addEventListener("input", (e) => {
    let ele = DEBUG_v.selected_properties_element;
    let new_val = parseFloat(properties_elements.pos_y.value) || 0;
    DEBUG_v.actions_stack.push({
      property:"position",
      element:ele,
      new:JSON.stringify({x:ele.state.position.x,y:new_val}),
      old:JSON.stringify(ele.state.position)
    })
    ele.state.position.y = new_val;
  })
  properties_elements.vel_x.addEventListener("input", (e) => {
    let ele = DEBUG_v.selected_properties_element;
    ele.state.velocity.x = parseFloat(properties_elements.vel_x.value) || 0;
  })
  properties_elements.vel_y.addEventListener("input", (e) => {
    let ele = DEBUG_v.selected_properties_element;
    ele.state.velocity.y = parseFloat(properties_elements.vel_y.value) || 0;
  })
  properties_elements.rot.addEventListener("input", (e) => {
    let ele = DEBUG_v.selected_properties_element;
    let new_val = parseFloat(properties_elements.rot.value) || 0;
    DEBUG_v.actions_stack.push({
      property:"rotation",
      element:ele,
      new:JSON.stringify(new_val),
      old:JSON.stringify(ele.rotation)
    })
    ele.state.rotation = new_val;
  })
  properties_elements.sca_x.addEventListener("input", (e) => {
    let ele = DEBUG_v.selected_properties_element;
    let new_val = parseFloat(properties_elements.sca_x.value) || 0;
    DEBUG_v.actions_stack.push({
      property:"scaling",
      element:ele,
      new:JSON.stringify({width:new_val,height:ele.state.scaling.height}),
      old:JSON.stringify(ele.state.scaling)
    })
    ele.state.scaling.width = new_val;
  })
  properties_elements.sca_y.addEventListener("input", (e) => {
    let ele = DEBUG_v.selected_properties_element;
    let new_val = parseFloat(properties_elements.sca_y.value) || 0;
    DEBUG_v.actions_stack.push({
      property:"scaling",
      element:ele,
      new:JSON.stringify({width:ele.state.scaling.width,height:new_val}),
      old:JSON.stringify(ele.state.scaling)
    })
    ele.state.scaling.height = new_val;
  })
  properties_elements.render.addEventListener("input", (e) => {
    let ele = DEBUG_v.selected_properties_element;
    ele.render = properties_elements.render.checked;
  })
  properties_elements.collision.addEventListener("input", (e) => {
    let ele = DEBUG_v.selected_properties_element;
    ele.collision = properties_elements.collision.checked;
  })
  document.getElementById("delete_element").addEventListener("click", (e) => {
    let ele = DEBUG_v.selected_properties_element;
    ele.delete();
  })
}

export function debug_update_properties_element() {
  if (DEBUG_v.selected_properties_element) {
    let ele = DEBUG_v.selected_properties_element;
    document.getElementById("obj_name").innerHTML = ele.constructor.name;
    properties_elements.pos_x.value = "" + ele.state.position.x.toFixed(2);
    properties_elements.pos_y.value = "" + ele.state.position.y.toFixed(2);
    properties_elements.vel_x.value = "" + ele.state.velocity.x.toFixed(2);
    properties_elements.vel_y.value = "" + ele.state.velocity.y.toFixed(2);
    properties_elements.rot.value = "" + ele.state.rotation.toFixed(2);
    properties_elements.sca_x.value = "" + ele.state.scaling.width.toFixed(2);
    properties_elements.sca_y.value = "" + ele.state.scaling.height.toFixed(2);
    properties_elements.render.checked = ele.render;
    properties_elements.collision.checked = ele.collision;
    let list = document.getElementById("params_list");
    list.textContent = '';
    for (let k of Object.keys(ele.params)) {

      let p = document.createElement("p");
      let span = document.createElement("span");
      span.appendChild(document.createTextNode(k));
      let input: HTMLInputElement = document.createElement("input");
      if (typeof (<params>ele.params)[k] === "boolean") {
        input.setAttribute("type", "checkbox");
      }
      else if (typeof (<params>ele.params)[k] === "number") {
        input.setAttribute("type", "number");
      }
      else if (typeof (<params>ele.params)[k] === "string") {
        input.setAttribute("type", "text");
      }
      input.setAttribute("id", k)
      input.setAttribute("value", (<params>ele.params)[k] + "");
      input.addEventListener("click", (e) => {
        input.focus();
      })
      input.addEventListener("input", (e) => {
        let ele = DEBUG_v.selected_properties_element;
        let val: string = input.value;
        if (!isNaN(val as unknown as number)) {
          (<params>ele.params)[k] = parseFloat(val);
        }
        else if (val == "true") {
          (<params>ele.params)[k] = true;
        }
        else if (val == "false") {
          (<params>ele.params)[k] = false;
        }
        else {
          (<params>ele.params)[k] = val;
        }
      })
      p.appendChild(span);
      p.append(input);
      list.append(p);
    }
  }

}

export function debug_update_obj_list() {
  let list = document.getElementById("objects_list");
  list.textContent = '';
  if (g.getRoom()) {
    for (let obj of g.getRoom().objects) {
      let para = document.createElement("p");
      para.appendChild(document.createTextNode(obj.constructor.name));
      para.classList.add("object_list_item");
      para.addEventListener("click", (e) => {
        if (DEBUG_v.selected_properties_element == <obj>obj) {
          DEBUG_v.camera.state.position = Object.assign({}, (<obj>obj).state.position)
        }
        else {
          DEBUG_v.selected_properties_element = <obj>obj;
          debug_update_properties_element()
        }
      })
      list.appendChild(para);
    }
  }
}

export async function debug_update_prefabs() {
  let pres = Object.keys(prefabs).map(async (o: string) => {
    let a = <obj>(new prefabs[o]({
      position:{ x: 0, y: 0 },
      velocity:{x:0,y:0},
      rotation:0,
      scaling:{width:1,height:1}
    }));
    await a.load();
    a.render = true;
    let objs = a.combinedObjects();
    for (let obj of objs) {
      obj.UnbindAll();
    }

    let filtered = objs.filter((a) => a.render);
    return {
      prefab: prefabs[o],
      name: a.constructor.name,
      rendered: filtered.map((o) => {
        return {
          name: o.constructor.name,
          render: o.renderf(0)
        }
      })
    };

  })
  let a = await Promise.all(pres);

  let target = document.getElementById("prefab_target");
  target.textContent = '';
  for (let prefab of a) {

    let div = document.createElement("div");
    let para = document.createElement("p");
    para.appendChild(document.createTextNode(prefab.name));
    div.appendChild(para);
    if (Array.isArray(prefab.rendered[0].render)) {
    }
    else {
      div.append(prefab.rendered[0].render.sprite.sprite_sheet);
    }
    div.classList.add("prefab_box");
    div.addEventListener("mousedown", async () => {
      let val = {
        position:{ x: DEBUG_v.camera.state.position.x, y: DEBUG_v.camera.state.position.y },
        velocity:{x:0,y:0},
        rotation:0,
        scaling:{width:1,height:1}
      };
      let obj = <obj>(new prefab.prefab(val));
      await g.state.current_room.addItems(obj.combinedObjects());
    });
    target.append(div);
  }
}

export let debug_setup = () => {
  let obj_button = document.getElementById("new_object_button");
  let room_button = document.getElementById("new_room_button");
  room_button.addEventListener("click", (e) => {
    let file_path = ipcRenderer.sendSync('object-path-request', "rooms");
    if (file_path) {
      let full_name = path.parse(file_path).base;
      let new_name = full_name.substr(0, full_name.length - 3);
      let path_to_write = path.join(`${file_path}`, "..", new_name + ".ts");
      fs.writeFileSync(path_to_write, `
    
    import {room} from "../../lib/room";
    import {game} from "../../van";
    import {state_config} from "../../lib/room";
    import * as config from "./${new_name}.json";
    let cfig = config as unknown as state_config;
    interface ${new_name}_state{
    
    }
    
    
    export class ${new_name} extends room<${new_name}_state>{
      background_url="./sprites/Error.png";
      constructor(game:game<unknown>){
        super(game,cfig);
      }
      registerControls(){
    
      }
      registerParticles(){
    
      }
      statef(delta_time:number){
        super.statef(delta_time);
      }
    
    }
    
    `)

      path_to_write = path.join(`${file_path}`, "..", new_name + ".json");

      fs.writeFileSync(path_to_write, `
    {
      "objects":[]
    }
    `)
    }
  })
  obj_button.addEventListener("click", (e) => {
    let file_path = ipcRenderer.sendSync('object-path-request', "objects");
    if (file_path) {
      let full_name = path.parse(file_path).base;
      let new_name = full_name.substr(0, full_name.length - 3);
      let path_to_write = path.join(`${file_path}`, "..", new_name + ".ts");
      fs.writeFileSync(path_to_write, `
    
    import {obj} from "../../lib/object";
    import { obj_state, position } from "../../lib/state";
    
    interface ${new_name}_state extends obj_state{
    
    }
    
    interface ${new_name}_parameters{
    
    }
    
    export class ${new_name} extends obj<${new_name}_state>{
      sprite_url = "./sprites/Error.png";
      height = 100;
      width = 100;
      tags:Array<string> = [];
      collision = true;
      render = true;
      rotation = 0;
      scaling = 1;
      static default_params:${new_name}_parameters = {}
      constructor(position:position,rotation:number,scaling:number,params:${new_name}_parameters = ${new_name}.default_params){
        super(position,rotation,scaling,params);
        this.state = {
          position:position,
          velocity:{
            x:0,
            y:0
          }
        }
      }
      statef(time_delta:number){
    
      }
      renderf(time_delta:number){
       return super.renderf(time_delta); 
      }
      register_animations(){
    
      }
      register_audio(){
    
      }
      register_controls(){
        
      }
    }
    
    `)
    }
  })

}