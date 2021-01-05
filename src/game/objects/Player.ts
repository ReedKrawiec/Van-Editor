import { obj_state, Vector } from "../../lib/state";
import { composite_obj } from "../../lib/object";
import { Player_Params } from "./Goomba";
import { ControlledPlayer } from "./ControlledPlayer";
import { Gun } from "./Gun";


export class Player extends composite_obj{
  enemy = true;
  constructor(state:obj_state, parameters: Player_Params) {
    super(state);
    this.objects.push(new ControlledPlayer(state, parameters));
    this.objects.push(new Gun({
      position:{x: state.position.x, y: state.position.y + 100},
      velocity:{x:0,y:0},
      rotation:0,
      scaling:{height:1,width:1}
    },parameters));
  }
}
