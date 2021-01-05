import { obj_state, Vector } from "../../lib/state";
import { obj } from "../../lib/object";

interface cursor_params{
  id:string
}

export class Cursor extends obj {
  sprite_url = "./sprites/cursor.png";
  height = 64;
  width = 64;
  collision = false;
  render = true;
  gravity = false;
  tags = ["Cursor"];
}
