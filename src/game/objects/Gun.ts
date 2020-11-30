import { position_init,position} from "../../lib/state";
import { rotation_length } from "../../lib/object";
import { platformer_obj } from "./abstract/platformer_obj";
import { g } from "../main";
import { Cursor } from "./Cursor";
import { gun_state, Goomba } from "./Goomba";


export class Gun extends platformer_obj<gun_state> {
  sprite_url = "./sprites/folder/gun.png";
  height = 50;
  width = 20;
  collision = false;
  render = true;
  player: Goomba;
  gravity = false;
  cursor: Cursor;
  tags = ["gun"];
  constructor(position:position,rotation = 0,scaling = 1, params = Gun.default_params) {
    super(position,rotation,scaling,params);
    this.id = "gun";
    this.state = {
      position: position,
      velocity: position_init().velocity,
      rotation: -1
    };
  }
  statef(t: number) {
    if (this.player) {
      let angle = this.player.angleTowards(this.cursor);
      let rot = rotation_length(50, angle);
      this.rotation = angle;
      this.state.rotation = angle;
      this.state.position = {
        x: rot.x + this.player.state.position.x,
        y: rot.y + this.player.state.position.y
      };

    }
    else {
      let room = g.getRoom();
      this.player = this.parent.get_Items_by_Tag("player")[0] as Goomba;
      this.cursor = <Cursor>room.getObjByTag("Cursor")[0];
    }

  }
}
