import {composite_obj, gravity_obj} from "../../../lib/object";
import {obj_state,Vector} from "../../../lib/state";

export interface plat_state extends obj_state{
  health:number  
}

export abstract class platformer_obj extends gravity_obj{
  enemy = false;
  state:plat_state
  constructor(state:obj_state,parameters:unknown){
    super(state,parameters);
  }
  statef(a:number){
    let state = this.state as unknown as plat_state;
    if(state.health <= 0){
      this.delete();
    }
  }
}

export class platformer_obj_composite extends composite_obj{
  enemy = false;
  state:plat_state;
  constructor(state:obj_state){
    super(state);
  }
  statef(a:number){
    let state = this.state as unknown as plat_state;
    if(state.health <= 0){
      this.delete();
    }
  }
}