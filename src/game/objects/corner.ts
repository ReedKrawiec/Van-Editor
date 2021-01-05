
import {obj} from "../../lib/object";
import { obj_state, Vector } from "../../lib/state";
import { positioned_sprite, sprite_gen } from "../../lib/sprite";
interface corner_state extends obj_state{
    
}
    
interface corner_parameters{
  type:string
}
    
export class corner extends obj{
  sprite_url = "./sprites/corners.png";
  height = 18;
  width = 21;
  tags:Array<string> = [];
  collision = true;
  render = true;
  params:corner_parameters;
  static default_params:corner_parameters = {
    type:"top_left"
  }
  constructor(state:obj_state,params:corner_parameters = corner.default_params){
    super(state,params);
  }
  renderf(time_delta:number){
    let sprites = sprite_gen(this.sprite_sheet, this.width, this.height);
    let selected_sprite;
    switch(this.params.type){
      default:
        selected_sprite = sprites[0][0];
        break;
      case "top_right":
        selected_sprite = sprites[0][1];
        break;
      case "bot_left":
        selected_sprite = sprites[0][2];
        break;
      case "bot_right":
        selected_sprite = sprites[0][3];
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
    