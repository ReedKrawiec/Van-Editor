import { Vector, obj_state, state_func} from "../../lib/state";
import { sprite, sprite_gen } from "../../lib/sprite";
import { obj } from "../../lib/object";
import { platformer_obj, platformer_obj_composite, plat_state } from "./abstract/platformer_obj";
import { Poll_Mouse } from "../../lib/controls";
import { collision_box } from "../../lib/collision";
import { Bind } from "../../lib/controls";
import {Text_Node,Text} from "../../lib/hud";
import { Overworld } from "../rooms/Overworld";
import { g } from "../main";
import { scale_type } from "../../lib/render";

export enum direction {
  left,
  right
}

export interface goomba_state extends obj_state, plat_state {
  direction: direction,
  jumping: boolean,
  times_airshot: number,
  max_times_airshot: number
}

export interface gun_state extends obj_state {
  rotation: number
}

export interface Player_Params{
  id:string
}

interface goomba_params{
  id?:string
}

export class Goomba extends platformer_obj{
  sprite_url = "./sprites/folder/robot.png";
  height = 149;
  width = 149;
  tags = ["dummy"]
  collision = true;
  layer = 2;
  health_text: Text;
  state:goomba_state;
  constructor(state:obj_state,parameters:goomba_params = Goomba.default_params) {
    
    super(state,parameters);
    if (parameters.id != undefined) {
      this.id = parameters.id;
    }
    Object.assign(this.state,{
      direction: direction.left,
      jumping: false,
      health: 100,
      times_airshot: 0,
      max_times_airshot: 0
    })
    //this.animations.play("walk1");
  }
  registerAnimations() {
    let sprites = sprite_gen(this.sprite_sheet, this.width, this.height);
    this.animations.add("walk1", [
      [0, sprites[0][0]],
      [100, sprites[0][1]],
      [400, sprites[0][0]],
      [500, sprites[0][2]]
    ], 800)
    this.animations.add("walk2", [
      [0, sprites[0][5]],
      [100, sprites[0][4]],
      [400, sprites[0][5]],
      [500, sprites[0][3]]
    ], 800)
    this.animations.add("idleleft", [
      [0, sprites[0][0]]
    ], 1);
    this.animations.add('idleright', [
      [0, sprites[0][5]]
    ], 1);
    this.animations.add('fallleft', [
      [0, sprites[0][6]]
    ], 1);
    this.animations.add('fallright', [
      [0, sprites[0][7]]
    ], 1)
  }
  registerAudio() {
    this.audio.add("slime", "./sounds/goomba/slimeball.wav");
    this.audio.add("explosion", "./sounds/explosion.mp3")
  }
  renderf(t: number) {
    if (this.state.jumping) {
      let animation = this.state.direction == direction.left ? "fallleft" : "fallright";
      this.animations.play(animation);
    }
    else if (this.state.velocity.x == 0 && this.state.velocity.y == 0) {
      let animation = this.state.direction == direction.left ? "idleleft" : "idleright";
      this.animations.play(animation);
    }
    else if (!this.animations.animating) {
      let animation = this.state.direction == direction.left ? "walk1" : "walk2";
      this.animations.play(animation);
    }
    return super.renderf(t);
  }
  statef(time: number) {
    let room = g.getRoom();
    let cursor = room.getObj("cursor");
    if (this.collision) {
      let col = this.getFullCollisionBox();
      if (room.checkCollisions({
        width: col.width,
        height: 1,
        x: col.x,
        y: col.y - col.height / 2 - 1,
      }).length > 0) {
        this.state.jumping = false;
        this.state.max_times_airshot = Math.max(this.state.times_airshot, this.state.max_times_airshot);
        this.state.times_airshot = 0;
      }
      else {
        this.state.jumping = true;
      }
    }
    if (this.state.velocity.y > 0) {
      this.state.velocity.y = this.state.velocity.y - 0.4 * 16 / time;
      if (this.state.velocity.y < 0)
        this.state.velocity.y = 0;
    }
    if (this.state.velocity.y < 0) {
      this.state.velocity.y = this.state.velocity.y + 0.4 * 16 / time;
      if (this.state.velocity.y > 0)
        this.state.velocity.y = 0;
    }
    if (this.state.velocity.x > 0) {
      this.state.direction = direction.right;
      this.state.velocity.x = this.state.velocity.x - 0.4 * 16 / time;;
      if (this.state.velocity.x < 0) {
        this.state.velocity.x = 0;
      }
    }
    else if (this.state.velocity.x < 0) {
      this.state.direction = direction.left;
      this.state.velocity.x = this.state.velocity.x + 0.4 * 16 / time;;
      if (this.state.velocity.x > 0) {
        this.state.velocity.x = 0;
      }
    }
  }
}
