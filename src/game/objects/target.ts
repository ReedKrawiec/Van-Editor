import {velocity,obj_state,state_func,position} from "../../lib/state";
import {sprite,sprite_gen} from "../../lib/sprite";
import {obj,rotation_length} from "../../lib/object";
import {platformer_obj,plat_state} from "./platformer_obj";
import {Poll_Mouse, exec_type} from "../../lib/controls";
import {collision_box} from "../../lib/collision";
import {Bind} from "../../lib/controls";

import {g} from "../main";

interface target_state extends obj_state{
  health:number;
  breaking:boolean
}

export class Target extends platformer_obj<target_state>{
  sprite_url = "./sprites/target.png";
  height = 64;
  width = 64;
  collision = true;
  gravity = false;
  render = true;
  enemy = true;
  constructor(a:position){
    super(a,0,Target.default_params);
    this.state = {
      position:a,
      velocity:{
        x:0,
        y:0
      },
      health:20,
      breaking:false
    }
  }
  register_audio(){
    this.audio.add("break","./sounds/target/hitsound_274.mp3");
  }
  register_animations(){
    let sprites = sprite_gen(this.sprite_sheet,this.width,this.height);
    
    this.animations.add("break",[
      [0,sprites[0][1]],
      [50,sprites[0][2]],
      [100,sprites[0][3]],
      [150,sprites[0][4]]
    ],200)
  }
  statef(){
    if(this.state.health <= 0 && !this.state.breaking){
      this.state.breaking = true;
      this.animations.play("break",()=>{
        this.delete();
      })
      this.audio.play("break",0.1);
    }
  }
}