
import {obj} from "../../lib/object";
import { scale_type } from "../../lib/render";
import { obj_state, Vector } from "../../lib/state";

interface wall_state extends obj_state{
    
}
    
interface wall_parameters{
    
}
    
export class wall extends obj{
  sprite_url = "./sprites/wall.png";
  height = 96;
  width = 96;
  tags:Array<string> = [];
  collision = false;
  render = true;
  tick_state = false;
  scale_type = scale_type.repeat;
  params:wall_parameters;
  static default_params:wall_parameters = {}
  constructor(state:obj_state,params:wall_parameters = wall.default_params){
    super(state,params);
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
    