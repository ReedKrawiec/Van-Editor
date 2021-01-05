
    
    import { Text } from "../../lib/hud";
import {obj} from "../../lib/object";
    import { obj_state, Vector } from "../../lib/state";
import { g} from "../main";
import {deep} from "../../van";
    
    interface Board_Label_state extends obj_state{
    
    }
    
    interface Board_Label_parameters{
      character:string
    }
    
    export class Board_Label extends obj{
      sprite_url = "./sprites/Error.png";
      height = 100;
      width = 100;
      tags:Array<string> = [];
      collision = false;
      render = false;
      rotation = 0;
      scaling = 1;
      params:Board_Label_parameters;
      bound = false;
      static default_params:Board_Label_parameters = {
        character:"A"
      }
      constructor(state:obj_state,params:Board_Label_parameters = deep(Board_Label.default_params)){
        super(state,params);
      }
      statef(time_delta:number){
        if(g.getRoom() && !this.bound){
          this.bound = true;
          g.getRoom().text_nodes.push(new Text({
            position:this.state.position,
            size:22,
            scaling:1,
            font:"Arial",
            color:"white"
          },()=>this.params.character));
          this.tick_state = false;
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
    
    