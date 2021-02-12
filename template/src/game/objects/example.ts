
import {obj} from "lib/object";
import { obj_state, Vector } from "lib/state";

interface example_state extends obj_state{
    
}
    
interface example_parameters{
    
}
    
export class example extends obj{
  sprite_url = "./sprites/Error.png";
  height = 100;
  width = 100;
  tags:Array<string>;
  collision = true;
  render = true;
  state:example_state;
  params:example_parameters;
  static default_params:example_parameters = {}
  constructor(state:obj_state,params:example_parameters = example.default_params){
    super(state,params);
  }
  statef(time_delta:number){
    super.statef(time_delta);
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
    