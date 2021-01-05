import {platformer_obj,plat_state} from "./abstract/platformer_obj";
import {obj_state,Vector} from "../../lib/state";
import { exec_type } from "../../lib/controls";
import { scale_type } from "../../lib/render";

export class box extends platformer_obj{
  sprite_url = "./sprites/box.png"
  collision = true
  height = 64;
  width = 500;
  gravity = false;
  enemy = false;
  tags = ["static"];
  scale_type = scale_type.repeat
}
