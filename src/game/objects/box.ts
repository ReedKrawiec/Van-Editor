import {platformer_obj,plat_state} from "./abstract/platformer_obj";
import {obj_state,position} from "../../lib/state";
import { exec_type } from "../../lib/controls";

export class box extends platformer_obj<obj_state>{
  sprite_url = "./sprites/box.png"
  collision = true
  height = 64;
  width = 500;
  gravity = false;
  enemy = false;
  tags = ["static"]
  constructor(a:position,b:number,c:number){
    super(a,b,c,box.default_params);
    this.state = {
      position:a,
      velocity:{
        x:0,
        y:0
      }
    }
  }
}
