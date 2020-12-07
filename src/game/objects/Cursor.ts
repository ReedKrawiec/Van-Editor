import { obj_state, position } from "../../lib/state";
import { platformer_obj } from "./abstract/platformer_obj";

interface cursor_params{
  id:string
}

export class Cursor extends platformer_obj {
  sprite_url = "./sprites/cursor.png";
  height = 64;
  width = 64;
  collision = true;
  render = true;
  tags = ["Cursor"];
}
