
    
    import {obj} from "../../lib/object";
    import { obj_state, position } from "../../lib/state";
import { g } from "../main";
    
    interface Door_state extends obj_state{
    
    }
    
    interface Door_parameters{
      location:string
    }
    
    export class Door extends obj<Door_state>{
      sprite_url = "./sprites/target.png";
      height = 100;
      width = 100;
      tags:Array<string> = [];
      collision = false;
      render = true;
      rotation = 0;
      scaling = 1;
      params:Door_parameters;
      static default_params:Door_parameters = {
        location:"Underworld"
      }
      constructor(position:position,rotation:number,scaling:number,params:Door_parameters = Door.default_params){
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
        let collides = g.getRoom().check_collisions(this.getFullCollisionBox())
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
      register_animations(){
    
      }
      register_audio(){
    
      }
      register_controls(){
        
      }
    }
    
    