import {platformer_obj,plat_state} from "./platformer_obj";
import {obj_state,position} from "../../lib/state";
import { exec_type } from "../../lib/controls";

export class Box extends platformer_obj<obj_state>{
  sprite_url = "./sprites/box.png"
  collision = true
  height = 64;
  width = 500;
  gravity = false;
  enemy = false;
  tags = ["static"]
  constructor(a:position,b:number){
    super(a,b,Box.default_params);
    this.state = {
      position:a,
      velocity:{
        x:0,
        y:0
      }
    }
  }
}
export class VertBox extends Box{
  sprite_url = "./sprites/box2.png";
  width = 64;
  height = 500;
}