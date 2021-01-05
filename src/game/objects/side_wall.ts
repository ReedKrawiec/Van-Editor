
import {obj} from "../../lib/object";
import { positioned_sprite, sprite_gen } from "../../lib/sprite";
import { obj_state, Vector } from "../../lib/state";

interface side_wall_state extends obj_state{
    
}

interface side_wall_parameters{
    direction:string
}
    
export class side_wall extends obj{
  sprite_url = "./sprites/side_walls.png";
  height = 174;
  width = 21;
  tags:Array<string> = [];
  collision = false;
  render = true;
  tick_state = false;
  params:side_wall_parameters;
  static default_params:side_wall_parameters = {
    direction: "left"
  }
  constructor(state:obj_state,params:side_wall_parameters = side_wall.default_params){
    super(state,params);
  }
  statef(time_delta:number){
    
  }
  renderf(time_delta:number):positioned_sprite{
   let sprites = sprite_gen(this.sprite_sheet, this.width, this.height);
   let selected_sprite;
   switch(this.params.direction){
     default:
       selected_sprite = sprites[0][0];
       break;
      case "right":
       selected_sprite = sprites[0][1];
       break;
   }
   return {
     sprite:selected_sprite,
     x:this.state.position.x,
     y:this.state.position.y
   }
  }
  register_animations(){
    
  }
  register_audio(){
    
  }
  register_controls(){
        
  }
}
    