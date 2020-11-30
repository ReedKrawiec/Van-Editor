import { obj } from "./object";
let { ipcRenderer} = window.require("electron");
const path = window.require("path");
let fs = window.require("fs");

import {project_path} from "../van";
export let debug_setup = () => {
  let obj_button = document.getElementById("new_object_button");
  let room_button = document.getElementById("new_room_button");
  obj_button.addEventListener("click",(e)=>{
    let object_path = path.join(`${project_path}`,"..","objects");
    let file_path = ipcRenderer.sendSync('object-path-request', object_path);
    
    let full_name = path.parse(file_path).base;
    let new_name = full_name.substr(0,full_name.length - 3);
    
    let path_to_write = path.join(`${file_path}`,"..",new_name+".ts");
    fs.writeFileSync(path_to_write,`
    
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
    //ipcRenderer.sendSync('compile-prompt', 'ping')
  })
}