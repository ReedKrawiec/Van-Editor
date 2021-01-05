

import { obj } from "../../lib/object";
import { obj_state, Vector } from "../../lib/state";
import { box } from "./box";


export class Rotator extends box {
  statef(time_delta: number) {
    this.state.rotation += (0.07 * time_delta)
  }
}

