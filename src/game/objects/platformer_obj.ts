import {composite_obj, gravity_obj} from "../../lib/object";
import {obj_state,position} from "../../lib/state";

export interface plat_state extends obj_state{
  health:number  
}

export class platformer_obj<t> extends gravity_obj<t>{
  enemy = false;
  constructor(a:position,b:number,c:unknown){
    super(a,b,c);
  }
  statef(a:number){
    let state = this.state as unknown as plat_state;
    if(state.health <= 0){
      this.delete();
    }
  }
}

export class platformer_obj_composite<t> extends composite_obj<t>{
  enemy = false;
  constructor(a:position){
    super(a);
  }
  statef(a:number){
    let state = this.state as unknown as plat_state;
    if(state.health <= 0){
      this.delete();
    }
  }
}