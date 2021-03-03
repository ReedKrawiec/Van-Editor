import { DEBUG, PAUSED, setPaused, viewport } from "../van";
export let path:any; 
let fs:any;
let ipcRenderer:any;
import { prefabs } from "../game/objects/prefabs";
export let project_path = "";
export let root_path = "";
if(DEBUG){
 path =  window.require("path");
 fs = window.require("fs");
 ipcRenderer  = window.require("electron").ipcRenderer;
 project_path = ipcRenderer.sendSync('path-request', 'ping')[0]
 root_path = path.join(project_path,"..")
}
import { obj, params } from "./object";
import { obj_state } from "./state";
import {object_template} from "./templates/object_template";
import {room_template} from "./templates/room_template";
import { g } from "../game/main";
import { rooms as room_list } from "../game/rooms/rooms";
import { Bind, btype, Poll_Mouse, exec_type, held_keys, debug_binds } from "../lib/controls";
import { HUD, Text } from "../lib/hud";
import { Camera } from "../lib/render";
import { Vector, dimensions} from "../lib/state";

export class Debug_hud extends HUD {
  setTextElements() {
    return [
      new Text({
        position: {
          x: 10,
          y: viewport.height - 24
        },
        size: 22,
        font: "Alata",
        color: "white",
        align: "left",
        scaling: 1
      }, () => debug_state.render_delta_time > 0 ? Math.round(1000/debug_state.render_delta_time) + "" : ""),
      new Text({
      position: {
        x: 10,
        y: 10
      },
      size: 22,
      font: "Alata",
      color: "white",
      align: "left",
      scaling: 1
    }, () => `X:${debug_state.camera.state.position.x.toFixed(0)}`),
    new Text({
      position: {
        x: 10,
        y: 32
      },
      size: 22,
      font: "Alata",
      color: "white",
      align: "left",
      scaling: 1
    }, () => `Y:${debug_state.camera.state.position.y.toFixed(0)}`),
    new Text({
      position: {
        x: viewport.width - 10,
        y: 32
      },
      size: 22,
      font: "Alata",
      color: "white",
      align: "right",
      scaling: 1
    }, () => {
      let mouse = Poll_Mouse(debug_state.camera,debug_state.target);
      if(mouse){
        return `${mouse.x.toFixed(0)}:X`
      }
      return `:X`
    }),
    new Text({
      position: {
        x: viewport.width - 10,
        y: 10
      },
      size: 22,
      font: "Alata",
      color: "white",
      align: "right",
      scaling: 1
    }, () => {
      let mouse = Poll_Mouse(debug_state.camera,debug_state.target);
      if(mouse){
        return `${mouse.y.toFixed(0)}:Y`
      }
      return `:Y`
    }),
    new Text({
      position: {
        x: viewport.width - 10,
        y: viewport.height - 24
      },
      size: 22,
      font: "Alata",
      color: "white",
      align: "right",
      scaling: 1
    }, () => {
      return `${g.state.current_room.constructor.name}.ts`
    })
    ];
  }
}

export function debug_statef(t: number) {
  let mouse = Poll_Mouse(debug_state.camera, debug_state.target);
  if (debug_state.camera.hud) {
    debug_state.camera.hud.statef(t);
  }
  if (!PAUSED) {
    debug_update_properties_element();
  }
  if(mouse){
    if (debug_state.selected_element) {
      if (PAUSED && held_keys["ControlLeft"] && debug_state.current_action.property == "scaling") {
        let dist = {
          x: Math.abs(mouse.x - debug_state.selected_element.state.position.x),
          y: Math.abs(mouse.y - debug_state.selected_element.state.position.y)
        }
        debug_state.selected_element.state.scaling.width = (2 * dist.x) / debug_state.selected_element.width;
        debug_state.selected_element.state.scaling.height = (2 * dist.y) / debug_state.selected_element.height;
      }
      else {
        let st = debug_state.selected_element.state;
        st.position.x = mouse.x - debug_state.selected_element_offset.x,
        st.position.y = mouse.y - debug_state.selected_element_offset.y
      }
    }
    if (PAUSED && debug_state.rotation_element) {
      debug_state.rotation_element.state.rotation = debug_state.rotation_element.angleTowardsPoint(mouse);
    }
    if (debug_state.middle_position) {
      let diff_y = mouse.y - debug_state.middle_position.y;
      let diff_x = mouse.x - debug_state.middle_position.x;
      debug_state.camera.state.position.x = debug_state.camera.state.position.x + -1 * diff_x;
      debug_state.camera.state.position.y = debug_state.camera.state.position.y + -1 * diff_y;
    }
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
  collision: HTMLInputElement,
  tags:HTMLInputElement,
  layer:HTMLInputElement
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
    collision: (<HTMLInputElement>document.getElementById("collision")),
    tags: (<HTMLInputElement>document.getElementById("tags")),
    layer:(<HTMLInputElement>document.getElementById("layer"))
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

    let ele = debug_state.selected_properties_element;
    let new_val = parseFloat(properties_elements.pos_x.value) || 0;
    debug_state.actions_stack.push({
      property: "position",
      element: ele,
      new: JSON.stringify({ x: new_val, y: ele.state.position.y }),
      old: JSON.stringify(ele.state.position)
    })
    ele.state.position.x = new_val;
  })
  properties_elements.pos_y.addEventListener("input", (e) => {
    let ele = debug_state.selected_properties_element;
    let new_val = parseFloat(properties_elements.pos_y.value) || 0;
    debug_state.actions_stack.push({
      property: "position",
      element: ele,
      new: JSON.stringify({ x: ele.state.position.x, y: new_val }),
      old: JSON.stringify(ele.state.position)
    })
    ele.state.position.y = new_val;
  })
  properties_elements.vel_x.addEventListener("input", (e) => {
    let ele = debug_state.selected_properties_element;
    ele.state.velocity.x = parseFloat(properties_elements.vel_x.value) || 0;
  })
  properties_elements.vel_y.addEventListener("input", (e) => {
    let ele = debug_state.selected_properties_element;
    ele.state.velocity.y = parseFloat(properties_elements.vel_y.value) || 0;
  })
  properties_elements.rot.addEventListener("input", (e) => {
    let ele = debug_state.selected_properties_element;
    let new_val = parseFloat(properties_elements.rot.value) || 0;
    debug_state.actions_stack.push({
      property: "rotation",
      element: ele,
      new: JSON.stringify(new_val),
      old: JSON.stringify(ele.state.rotation)
    })
    ele.state.rotation = new_val;
  })
  properties_elements.sca_x.addEventListener("input", (e) => {
    let ele = debug_state.selected_properties_element;
    let new_val = parseFloat(properties_elements.sca_x.value) || 0;
    debug_state.actions_stack.push({
      property: "scaling",
      element: ele,
      new: JSON.stringify({ width: new_val, height: ele.state.scaling.height }),
      old: JSON.stringify(ele.state.scaling)
    })
    ele.state.scaling.width = new_val;
  })
  properties_elements.sca_y.addEventListener("input", (e) => {
    let ele = debug_state.selected_properties_element;
    let new_val = parseFloat(properties_elements.sca_y.value) || 0;
    debug_state.actions_stack.push({
      property: "scaling",
      element: ele,
      new: JSON.stringify({ width: ele.state.scaling.width, height: new_val }),
      old: JSON.stringify(ele.state.scaling)
    })
    ele.state.scaling.height = new_val;
  })
  properties_elements.render.addEventListener("input", (e) => {
    let ele = debug_state.selected_properties_element;
    ele.render = properties_elements.render.checked;
  })
  properties_elements.collision.addEventListener("input", (e) => {
    let ele = debug_state.selected_properties_element;
    ele.collision = properties_elements.collision.checked;
  })
  properties_elements.tags.addEventListener("input", (e) => {
    let ele = debug_state.selected_properties_element;
    ele.tags = properties_elements.tags.value.split(",");
  })
  properties_elements.layer.addEventListener("input", (e) => {
    let ele = debug_state.selected_properties_element;
    ele.layer = parseInt(properties_elements.layer.value);
  })
  document.getElementById("delete_element").addEventListener("click", (e) => {
    let ele = debug_state.selected_properties_element;
    ele.delete();
  })
}

export function debug_update_properties_element() {
  if (debug_state.selected_properties_element) {
    let ele = debug_state.selected_properties_element;
    document.getElementById("obj_name").innerHTML = ele.constructor.name;
    properties_elements.pos_x.value = "" + ele.state.position.x.toFixed(2);
    properties_elements.pos_y.value = "" + ele.state.position.y.toFixed(2);
    properties_elements.vel_x.value = "" + ele.state.velocity.x.toFixed(2);
    properties_elements.vel_y.value = "" + ele.state.velocity.y.toFixed(2);
    properties_elements.rot.value = "" + ele.state.rotation.toFixed(2);
    properties_elements.sca_x.value = "" + ele.state.scaling.width.toFixed(2);
    properties_elements.sca_y.value = "" + ele.state.scaling.height.toFixed(2);
    properties_elements.tags.value = "" + ele.tags.join(",");
    properties_elements.render.checked = ele.render;
    properties_elements.collision.checked = ele.collision;
    properties_elements.layer.value = "" + ele.layer;
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
      input.setAttribute("value", (JSON.stringify((<params>ele.params)[k])));
      input.addEventListener("click", (e) => {
        input.focus();
      })
      input.addEventListener("input", (e) => {
        let ele = debug_state.selected_properties_element;
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
          try{
            let parsed = JSON.parse(val);
            (<params>ele.params)[k] = JSON.parse(val);
          }
          catch(e){
            
          }
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
    for (let obj of g.getRoom().objects.slice().reverse()) {
      let para = document.createElement("p");
      para.appendChild(document.createTextNode(obj.constructor.name));
      para.classList.add("object_list_item");
      para.addEventListener("click", (e) => {
        if (debug_state.selected_properties_element == <obj>obj) {
          debug_state.camera.state.position = Object.assign({}, (<obj>obj).state.position)
        }
        else {
          debug_state.selected_properties_element = <obj>obj;
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
      position: { x: 0, y: 0 },
      velocity: { x: 0, y: 0 },
      rotation: 0,
      scaling: { width: 1, height: 1 }
    }));
    await a.load();
    a.render = true;
    let objs = a.combinedObjects();
    for (let obj of objs) {
      obj.UnbindAll();
    }
    let r = a.renderf(0);
    
    return {
      prefab: prefabs[o],
      name: a.constructor.name,
      rendered:r 
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
    if (Array.isArray(prefab.rendered)) {
    }
    else {
      div.append(prefab.rendered.sprite.sprite_sheet);
    }
    div.classList.add("prefab_box");
    div.addEventListener("mousedown", async () => {
      let val = {
        position: { x: debug_state.camera.state.position.x, y: debug_state.camera.state.position.y },
        velocity: { x: 0, y: 0 },
        rotation: 0,
        scaling: { width: 1, height: 1 }
      };
      let obj = <obj>(new prefab.prefab(val));
      await g.state.current_room.addItems(obj.combinedObjects());
    });
    target.append(div);
  }
}

interface debug_action {
  property: string,
  old: string,
  new: string,
  element: obj
}

export interface debug_vars {
  target: HTMLCanvasElement,
  camera: Camera,
  last_clicked: HTMLElement,
  selected_element_initial_scaling: dimensions,
  selected_element: obj,
  selected_element_offset: Vector,
  rotation_element: obj,
  selected_properties_element: obj,
  middle_position: Vector,
  click_position: Vector,
  actions_stack: debug_action[],
  current_action: debug_action,
  render_delta_time:number
}

export let debug_state: debug_vars;

export let debug_setup = () => {
  debug_state = {
    target: document.getElementById("debug_target") as HTMLCanvasElement,
    camera: new Camera({
      x: 0,
      y: 0,
      dimensions: {
        height: viewport.height,
        width: viewport.width
      },
      scaling: 1,
      debug: true
    }
      , {
        x: 1,
        y: 0,
        width: 1,
        height: 1
      }),
    last_clicked: undefined,
    selected_element: undefined,
    selected_element_offset: undefined,
    rotation_element: undefined,
    middle_position: undefined,
    click_position: undefined,
    selected_properties_element: undefined,
    selected_element_initial_scaling: { width: 1, height: 1 },
    actions_stack: [],
    render_delta_time:0,
    current_action: undefined
  }
  debug_state.camera.hud = new Debug_hud();
  debug_binds.push({
    key: "mouse0down",
    type: btype.mouse,
    id: 0,
    function: () => {
      if (debug_state.selected_element) {
        debug_state.selected_element = null;
      }
      else {
        let mouse = Poll_Mouse(debug_state.camera, debug_state.target);
        if(!mouse){
          return
        }
        debug_state.click_position = mouse;
        let all_clicked = g.getRoom().checkObjectsPoint(mouse);
        let clicked;
        let filtered = all_clicked.filter((ele) => ele == debug_state.selected_properties_element)
        if (filtered.length > 0) {
          clicked = filtered[0]
        }
        else {
          clicked = all_clicked.sort((a, b) => (b.layer - a.layer))[0];
        }
        if (clicked) {
          if (held_keys["ControlLeft"]) {
            debug_state.current_action = {
              element: clicked,
              property: "scaling",
              old: JSON.stringify(clicked.state.scaling),
              new: undefined
            }
          }
          else {
            debug_state.current_action = {
              element: clicked,
              property: "position",
              old: JSON.stringify(clicked.state.position),
              new: undefined
            }
          }
          debug_state.selected_properties_element = clicked;
          debug_update_properties_element()
          debug_state.selected_element = clicked;
          debug_state.selected_element_initial_scaling = clicked.state.scaling;
          debug_state.selected_element_offset = {
            x: mouse.x - clicked.state.position.x,
            y: mouse.y - clicked.state.position.y
          }
        }
      }
    },
    execute: exec_type.once,
    camera: debug_state.camera
  });
  debug_binds.push({
    key: "mouse1up",
    type: btype.mouse,
    id: 5,
    function: () => {
      debug_state.middle_position = undefined;
    },
    execute: exec_type.once,
    camera: debug_state.camera
  });
  debug_binds.push({
    key: "mouse1down",
    type: btype.mouse,
    id: 6,
    function: () => {
      let mouse = Poll_Mouse(debug_state.camera, debug_state.target);
      if(!mouse){
        return
      }
      debug_state.middle_position = mouse;
    },
    execute: exec_type.once,
    camera: debug_state.camera
  });
  debug_binds.push({
    key: "mouse0up",
    type: btype.mouse,
    id: 1,
    function: () => {
      if (debug_state.selected_element) {
        if (debug_state.current_action.property == "scaling") {
          debug_state.current_action.new = JSON.stringify(debug_state.selected_element.state.scaling)
        }
        else if (debug_state.current_action.property == "position") {
          debug_state.current_action.new = JSON.stringify((<obj_state>debug_state.selected_element.state).position)
        }

        debug_state.actions_stack.push(debug_state.current_action);
      }

      debug_state.selected_element = undefined;
      debug_update_properties_element()
    },
    execute: exec_type.once,
    camera: debug_state.camera
  });
  debug_binds.push({
    key: "mouse2down",
    type: btype.mouse,
    id: 3,
    function: () => {
      if (debug_state.rotation_element) {
        debug_state.rotation_element = null;
      }
      else {
        let mouse = Poll_Mouse(debug_state.camera, debug_state.target);
        if(!mouse){
          return
        }
        let clicked = g.getRoom().checkObjectsPoint(mouse)[0]
        if (clicked) {
          debug_state.rotation_element = clicked;
          debug_state.current_action = {
            element: debug_state.rotation_element,
            property: "rotation",
            old: JSON.stringify(debug_state.rotation_element.state.rotation),
            new: undefined
          }
        }
      }
    },
    execute: exec_type.once,
    camera: debug_state.camera
  });
  debug_binds.push({
    key: "mouse2up",
    type: btype.mouse,
    id: 4,
    function: () => {
      debug_state.current_action.new = JSON.stringify(debug_state.rotation_element.state.rotation)
      debug_state.actions_stack.push(debug_state.current_action);
      debug_state.rotation_element = undefined;
    },
    execute: exec_type.once,
    camera: debug_state.camera
  });

  let left_func = () => {
    let shift_held = held_keys["ShiftLeft"] ? 1 : 0;
    if (debug_state.last_clicked.id == "debug_target")
      debug_state.camera.state.position.x = debug_state.camera.state.position.x - ((5 + shift_held * 5) * (1 / debug_state.camera.state.scaling));
  };
  let right_func = () => {
    let shift_held = held_keys["ShiftLeft"] ? 1 : 0;
    if (debug_state.last_clicked.id == "debug_target")
      debug_state.camera.state.position.x = debug_state.camera.state.position.x + ((5 + shift_held * 5) * (1 / debug_state.camera.state.scaling));
  };
  let down_func = () => {
    let shift_held = held_keys["ShiftLeft"] ? 1 : 0;

    if (!held_keys["ControlLeft"] && debug_state.last_clicked.id == "debug_target")
      debug_state.camera.state.position.y = debug_state.camera.state.position.y - ((5 + shift_held * 5) * (1 / debug_state.camera.state.scaling));
  };
  let up_func = () => {
    let shift_held = held_keys["ShiftLeft"] ? 1 : 0;
    if (debug_state.last_clicked.id == "debug_target")
      debug_state.camera.state.position.y = debug_state.camera.state.position.y + ((5 + shift_held * 5) * (1 / debug_state.camera.state.scaling));
  };
  let scroll_up = () => {
    if (debug_state.last_clicked.id == "debug_target" && debug_state.camera.state.scaling < 0.05)
      debug_state.camera.state.scaling = debug_state.camera.state.scaling + 0.01;
    else if(debug_state.last_clicked.id == "debug_target")
      debug_state.camera.state.scaling = debug_state.camera.state.scaling + 0.05;
  }
  let save_func = () => {
    let ctrl_held = held_keys["ControlLeft"];
    if (ctrl_held && PAUSED) {
      let name = g.getRoom().constructor.name;
      let a = path.join(`${project_path}`, `../rooms/${name}.json`);
      try {
        fs.writeFileSync(a, JSON.stringify(g.getRoom().exportStateConfig()));
      } catch (e) {
        console.log(e);
        console.log("ERROR WRITING ROOM INFO FILE.");
        alert("Error");
      }
      alert("Saved");

    }
    else if (ctrl_held && !PAUSED) {
      alert("pause to enable saving.")
    }
  }
  let scroll_down = () => {
    if (debug_state.last_clicked.id == "debug_target" && debug_state.camera.state.scaling > 0.05)
      debug_state.camera.state.scaling = debug_state.camera.state.scaling - 0.05;
    else if (debug_state.last_clicked.id == "debug_target" && debug_state.camera.state.scaling > 0.01)
      debug_state.camera.state.scaling = debug_state.camera.state.scaling - 0.01;
  }
  let undo_func = () => {
    if (held_keys["ControlLeft"]) {
      let curr: debug_action = debug_state.actions_stack.pop();
      if (curr) {
        if (curr.property == "position") {
          curr.element.state.position = JSON.parse(curr.old);
        }
        else if (curr.property === "rotation") {
          curr.element.state.rotation = JSON.parse(curr.old);
        }
        else if (curr.property === "scaling") {
          curr.element.state.scaling = JSON.parse(curr.old);
        }
      }
    }
  }
  debug_binds.push({
    key: "KeyA",
    type: btype.keyboard,
    id: Bind("KeyA", left_func, exec_type.repeat, 1),
    function: left_func,
    execute: exec_type.repeat
  })
  debug_binds.push({
    key: "KeyD",
    type: btype.keyboard,
    id: Bind("KeyD", right_func, exec_type.repeat, 1),
    function: right_func,
    execute: exec_type.repeat
  })
  debug_binds.push({
    key: "KeyW",
    type: btype.keyboard,
    id: Bind("KeyW", up_func, exec_type.repeat, 1),
    function: up_func,
    execute: exec_type.repeat
  })
  debug_binds.push({
    key: "KeyS",
    type: btype.keyboard,
    id: Bind("KeyS", down_func, exec_type.repeat, 1),
    function: down_func,
    execute: exec_type.repeat
  })
  debug_binds.push({
    key: "scrollup",
    type: btype.mouse,
    id: Bind("scrollup", scroll_up, exec_type.once, 1),
    function: scroll_up,
    execute: exec_type.once
  })
  debug_binds.push({
    key: "scrolldown",
    type: btype.mouse,
    id: Bind("scrolldown", scroll_down, exec_type.once, 1),
    function: scroll_down,
    execute: exec_type.once
  })
  debug_binds.push({
    key: "KeyS",
    type: btype.keyboard,
    id: Bind("KeyS", save_func, exec_type.once, 1),
    function: save_func,
    execute: exec_type.once
  })
  debug_binds.push({
    key: "KeyZ",
    type: btype.keyboard,
    id: Bind("KeyZ", undo_func, exec_type.once, 1),
    function: undo_func,
    execute: exec_type.once
  })
  window.addEventListener("click", (e) => {
    if (e.target instanceof HTMLElement) {
      debug_state.last_clicked = e.target;
    }
  })
  let pause_button = document.getElementById("pause_button")
  pause_button.addEventListener("click", (e) => {
    setPaused(!PAUSED);
    if (PAUSED) {
      pause_button.innerHTML = "UNPAUSE";
    }
    else {
      pause_button.innerHTML = "PAUSE";
    }
  });
  let obj_button = document.getElementById("new_object_button");
  let room_button = document.getElementById("new_room_button");
  room_button.addEventListener("click", (e) => {
    let file_path = ipcRenderer.sendSync('object-path-request', "rooms");
    if (file_path) {
      let full_name = path.parse(file_path).base;
      let new_name = full_name.substr(0, full_name.length - 3);
      let path_to_write = path.join(`${file_path}`, "..", new_name + ".ts");
      fs.writeFileSync(path_to_write, room_template.split("template").join(new_name));

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
      fs.writeFileSync(path_to_write,object_template.split("template").join(new_name));
    }
  })

}