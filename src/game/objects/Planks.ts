
import {obj} from "../../lib/object";
import { scale_type } from "../../lib/render";
import { obj_state, Vector } from "../../lib/state";

interface Planks_state extends obj_state{
    
}
    
interface Planks_parameters{
    
}
    
export class Planks extends obj{
  sprite_url = "./sprites/tiles.png";
  height = 96;
  width = 96;
  tags:Array<string> = ["floor"];
  collision = false;
  render = true;
  tick_state = false;
  scale_type = scale_type.repeat;
  params:Planks_parameters;
  static default_params:Planks_parameters = {}
  constructor(state:obj_state,params:Planks_parameters = Planks.default_params){
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
    