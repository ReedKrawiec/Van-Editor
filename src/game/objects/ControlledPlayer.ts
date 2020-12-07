import { exec_type } from "../../lib/controls";
import { Goomba, direction, Player_Params } from "./Goomba";
import {obj_state} from "../../lib/state";


export class ControlledPlayer extends Goomba {
  constructor(state:obj_state,params:Player_Params){
    super(state,params);
    this.state.position = state.position;
  }
  tags = ["player"];
  registerControls() {
    this.bindControl("KeyA", exec_type.repeat, () => {
      if (this.state.velocity.x > -10) {
        this.state.velocity.x = this.state.velocity.x - 1;
      }
    });
    this.bindControl("KeyA", exec_type.once, () => {
      this.state.direction = direction.left;
      this.state.velocity.x = this.state.velocity.x - 0.1;
    });
    this.bindControl("mouse0down", exec_type.repeat, () => {
      this.audio.play("explosion", 0.4);
    }, 400);
    this.bindControl("KeyD", exec_type.repeat, () => {
      if (this.state.velocity.x < 10) {
        this.state.velocity.x = this.state.velocity.x + 1;
      }
    });
    this.bindControl("KeyD", exec_type.once, () => {
      this.state.direction = direction.right;
      this.state.velocity.x = this.state.velocity.x + 0.1;
    });
    this.bindControl("Space", exec_type.once, () => {
      if (!this.state.jumping) {
        this.state.velocity.y += 25;
        this.audio.play("slime", 0.1);
      }
    });
  }
}
