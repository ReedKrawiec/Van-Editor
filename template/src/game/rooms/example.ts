import { room } from "lib/room";
import { game } from "src/van";
import { state_config } from "lib/room";
import * as config from "./example.json";
let cfig = config as unknown as state_config;
interface example_state {

}

export class example extends room<example_state>{
  background_url = "./sprites/Error.png";
  render = true;
  constructor(game: game<unknown>) {
    super(game, cfig);
  }
  registerControls() {

  }
  registerParticles() {

  }
  statef(delta_time: number) {
    super.statef(delta_time);
  }

}

