import { obj_state, position } from "../../lib/state";
import { platformer_obj } from "./abstract/platformer_obj";

interface cursor_params{
  id:string
}

export class Cursor extends platformer_obj<obj_state> {
  sprite_url = "./sprites/cursor.png";
  height = 64;
  width = 64;
  collision = true;
  render = true;
  scaling = 1;
  tags = ["Cursor"];
  constructor(pos:position,rotation:number,scaling:number,params:cursor_params) {
    super(pos, rotation,scaling, params);
    this.state = {
      position: {
        x: pos.x,
        y: pos.y
      },
      velocity: {
        x: 0,
        y: 0
      }
    };
  }
  statef() {
  }
}
