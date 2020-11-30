import { gravity_obj,obj } from "./object";
import { Particle, sprite } from "./sprite";
import { obj_state } from "./state";
import { velocity_collision_check,check_collisions,collision_box,check_all_collisions,check_all_objects} from "./collision";
import {render_collision_box,DEBUG} from "../van";
import {Bind,control_func, exec_type} from "./controls";
import {HUD,Text, Text_Node} from "./hud";
import {audio} from "./audio"
import {game,debug_update_obj_list} from "../van";
import {prefabs} from "../game/objects/prefabs";

interface position{
  x:number,
  y:number
}

export function apply_gravity(ob:gravity_obj<unknown>,grav_const:number, grav_max:number){
  let st = ob.state as obj_state;
  if(ob.gravity && st.velocity.y > grav_max){
    st.velocity.y += grav_const;
  }
}

export interface particle_entry{
  sprite:string,
  height:number,
  width:number
}

interface particles{
  [index:string]:particle_entry
}

export interface room_i<T>{
  background_url:string,
  objects:Array<obj<unknown>>
  state:T
}

export interface object_state_config {
  type:string,
  position: position,
  rotation: number,
  scaling:number,
  parameters?: unknown
}

export interface state_config{
  objects:object_state_config[]
}

export class room<T>{
  background_url: string;
  background: HTMLImageElement;
  objects: Array<obj<unknown>> = [];
  particles:particles = {};
  particles_arr: Array<obj<unknown>> = [];
  state: T;
  binds:number[] = [];
  game:game<unknown>;
  hud:HUD;
  audio = new audio();
  text_nodes:Text[] = [];
  constructor(game:game<unknown>,config:state_config){
    this.game = game;
    for(let c of config.objects){
      this.addItemStateConfig(c)
    }
  }
  exportStateConfig(){
    let config:state_config = {objects:[]};
    for(let o of this.objects){
      console.log(o.constructor.name + " "+ o.parent)
        if(!o.parent){
        let st = (<obj<obj_state>>o).state;
        config.objects.push({
          type:o.constructor.name,
          position: st.position,
          rotation:o.rotation,
          scaling:o.scaling,
          parameters:o.params
        })
      }
    }
    return config;
  }
  load() {
    let _this = this;
    return new Promise(async (resolve, reject) => {
      let a = new Image();
      let to_await = this.objects.map((a) => a.load());
      await Promise.all(to_await);
      a.src = this.background_url;
      a.onerror = (() => {
        console.log("error loading url:" + this.background_url);
      })
      a.onload = (async() => {
        _this.background = a;
        await this.audio.load();
        resolve();
      });
    })
  }
  async addItemStateConfig(config:object_state_config){
    if(prefabs[config.type]){
      let new_obj = <obj<unknown>>(new prefabs[config.type](config.position,config.rotation,config.scaling,config.parameters));
      this.addItems(new_obj.combined_objects());
    }
    else{
      console.log("UNKNOWN TYPE ATTEMPTED TO LOAD: " + config.type)
    }
  }
  async addItem(o:obj<unknown>, list = this.objects){
    await o.load();
    o.game = this.game;
    list.push(o);
    if(DEBUG && list === this.objects){
      debug_update_obj_list();
    }
  }
  async addItems(o:obj<unknown>[], list = this.objects){
    for(let ob of o){
      ob.game = this.game;
    }
    await Promise.all(o.map((a)=>a.load()));
    list.push(...o);
    if(DEBUG && list === this.objects){
      debug_update_obj_list();
    }
  }
  deleteItem(id:string, list = this.objects){
    for(let a = 0;a < list.length;a++){
      if(list[a].id === id){
        list.splice(a,1)
        a--;
      }
    }
    if(DEBUG && list === this.objects){
      debug_update_obj_list();
    }
  }
  registerParticles(){

  }
  bindControl(key:string,x:exec_type,func:control_func,interval:number = 1){
    this.binds.push(Bind(key,func,x,interval)); 
  }
  check_collisions(box:collision_box,exempt?:Array<string>):Array<obj<unknown>>{
    if(DEBUG){
      render_collision_box(box);
    }
    return check_all_collisions(box,this.objects,exempt);
  }
  check_objects(box:collision_box,exempt?:string[],list=this.objects){
    if(DEBUG){
      render_collision_box(box);
    }
    return check_all_objects(box,list,exempt);
  }
  register_controls(){

  }
  cleanup(){

  }
  statef(time: number) {
    for(let particle of this.particles_arr){
      particle.statef(time);
    }
    for(let text_node of this.text_nodes){
      text_node.statef(time);
    }
    for (let a = 0; a < this.objects.length; a++) {
      this.objects[a].statef(time);
    }
    if(this.game.state.cameras){
      for(let cameras of this.game.state.cameras){
        if(cameras.hud){
          cameras.hud.statef(time);
        } 
      } 
    }
  }
  emit_particle(name:string,pos:position,lifetime:number,pos_range:number){
    this.addItem(new Particle(this.particles[name],pos,lifetime,pos_range), this.particles_arr);
  }
  getObj(id:string){
    for(let a = 0; a < this.objects.length; a++){
      if(this.objects[a].id == id){
        
        return this.objects[a];
      }
    }
    return null;
  }
  getObjByTag(tag:string){
    return this.objects.filter((a)=>a.tags.indexOf(tag) > -1);
  }
  renderf(time: number): sprite {
    return {
      sprite_sheet: this.background,
      left: 0,
      top: 0,
      sprite_height: this.background.height,
      sprite_width: this.background.width,
      opacity:1
    }
  }
}