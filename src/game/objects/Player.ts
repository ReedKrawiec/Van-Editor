import { obj_state, position } from "../../lib/state";
import { composite_obj } from "../../lib/object";
import { Player_Params } from "./Goomba";
import { ControlledPlayer } from "./ControlledPlayer";
import { Gun } from "./Gun";


export class Player extends composite_obj<obj_state> {
  enemy = true;
  constructor(position: position, rotation: number,scaling:number, parameters: Player_Params) {

    super(position);
    this.state = {
      position: position,
      velocity: {
        x: 0,
        y: 0
      }
    };
    this.objects.push(new ControlledPlayer(position, rotation, scaling, parameters));
    this.objects.push(new Gun({x: position.x, y: position.y + 100},rotation, scaling,parameters));
  }
}
