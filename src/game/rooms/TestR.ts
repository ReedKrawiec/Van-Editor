
    
    import {room} from "../../lib/room";
    import {game} from "../../van";
    import {state_config} from "../../lib/room";
    import * as config from "./TestR.json";
    let cfig = config as unknown as state_config;
    interface TestR_state{
    
    }
    
    
    export class TestR extends room<TestR_state>{
      background_url="https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png";
      constructor(game:game<unknown>){
        super(game,cfig);
      }
      registerControls(){
    
      }
      registerParticles(){
    
      }
      statef(delta_time:number){
        super.statef(delta_time);
      }
    
    }
    
    