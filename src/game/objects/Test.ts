
    
    import {obj} from "../../lib/object";
    import { obj_state, position } from "../../lib/state";
    
    interface Test_state extends obj_state{
    
    }
    
    interface Test_parameters{
    
    }
    
    export class Test extends obj<Test_state>{
      sprite_url = "./sprites/Error.png";
      height = 100;
      width = 100;
      tags:Array<string> = [];
      collision = true;
      render = true;
      rotation = 0;
      scaling = 1;
      static default_params:Test_parameters = {}
      constructor(position:position,rotation:number,scaling:number,params:Test_parameters){
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
    
    