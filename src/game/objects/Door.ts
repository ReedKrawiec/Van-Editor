
    
    import {obj} from "../../lib/object";
    import { obj_state, position } from "../../lib/state";
import { g } from "../main";
    
    interface Door_state extends obj_state{
    
    }
    
    interface Door_parameters{
      location:string,
      test:boolean,
      yep:number
    }
    
    export class Door extends obj{
      sprite_url = "./sprites/target.png";
      height = 100;
      width = 100;
      tags:Array<string> = [];
      collision = false;
      render = true;
      state:Door_state;
      params:Door_parameters;
      static default_params:Door_parameters = {
        location:"Underworld",
        test:true,
        yep:15
      }
      constructor(state:obj_state,params:Door_parameters = Door.default_params){
        super(state,params);
      }
      statef(time_delta:number){
        let collides = g.getRoom().checkCollisions(this.getFullCollisionBox())
        for(let obj of collides){
          if(obj.tags.includes("player")){
            g.loadRoomString(this.params.location);
            return;
          }
        }
      }
      renderf(time_delta:number){
       return super.renderf(time_delta); 
      }
      registerAnimations(){
    
      }
      registerAudio(){
    
      }
      registerControls(){
        
      }
    }
    
    