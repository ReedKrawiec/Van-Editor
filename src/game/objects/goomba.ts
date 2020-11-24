import { velocity, obj_state, position_init, state_func,position} from "../../lib/state";
import { sprite, sprite_gen } from "../../lib/sprite";
import { obj, rotation_length, composite_obj } from "../../lib/object";
import { platformer_obj, platformer_obj_composite, plat_state } from "./platformer_obj";
import { Poll_Mouse, exec_type } from "../../lib/controls";
import { collision_box } from "../../lib/collision";
import { Bind } from "../../lib/controls";
import {Text_Node,Text} from "../../lib/hud";
import { Overworld } from "../rooms/Overworld/Overworld";
import { g } from "../main";

enum direction {
  left,
  right
}

export interface goomba_state extends obj_state, plat_state {
  direction: direction,
  velocity: velocity,
  jumping: boolean,
  times_airshot: number,
  max_times_airshot: number
}

interface gun_state extends obj_state {
  rotation: number
}

interface Player_Params{
  id:string
}

export class Player extends composite_obj<obj_state>{
  enemy = true;
  constructor(a: position,rotation:number,d:Player_Params) {
    
    super(a);
    this.state = {
      position: a,
      velocity: {
        x: 0,
        y: 0
      }
    }
    this.objects.push(new ControlledPlayer(a, rotation,d));
    this.objects.push(new Gun());
  }
}

export class Gun extends platformer_obj<gun_state>{
  sprite_url = "./sprites/folder/gun.png";
  height = 50;
  width = 20;
  collision = false;
  render = true;
  player: Goomba;
  gravity = false;
  cursor: Cursor;
  tags = ["gun"]
  constructor() {
    super(position_init().position,0,Gun.default_params);
    this.id = "gun";
    this.state = {
      position: position_init().position,
      velocity: position_init().velocity,
      rotation: -1
    }
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
      }

    }
    else {
      let room = g.getRoom();
      this.player = this.parent.get_Items_by_Tag("player")[0] as Goomba;
      this.cursor = <Cursor>room.getObj("cursor");
    }

  }
}

export class Cursor extends platformer_obj<obj_state>{
  sprite_url = "./sprites/cursor.png";
  height = 64;
  width = 64;
  collision = true;
  render = true;
  scaling = 1;
  constructor(id: string) {
    super({x:0,y:0},0,{id:id});
    this.id = id;
    this.state = {
      position: {
        x: 0,
        y: 0
      },
      velocity: {
        x: 0,
        y: 0
      }
    }
  }
  statef() {
  }
}

interface goomba_params{
  id?:string
}

export class Goomba extends platformer_obj<goomba_state>{
  sprite_url = "./sprites/folder/robot.png";
  height = 149;
  width = 149;
  tags = ["dummy"]
  collision = true;
  health_text: Text;
  constructor(a:position,b:number,c:goomba_params = Goomba.default_params) {
    super(a,b,c);
    if (c.id != undefined) {
      this.id = c.id;
    }
    this.state = {
      direction: direction.left,
      position:a,
      velocity: {
        x: 0,
        y: 0
      },
      jumping: false,
      health: 100,
      times_airshot: 0,
      max_times_airshot: 0
    }
    this.animations.play("walk1");
  }
  register_animations() {
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
  register_audio() {
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
    /*
    if(!this.health_text){
      let new_node = new Text({
        position:{
          x:0,
          y:0
        },
        size:20,
        scaling:1,
        color:"white",
        font:"Alata",
        align:"center"
      },()=>""+Math.floor(this.state.position.y));
      room.text_nodes.push(new_node);
      this.health_text = new_node;
    }
    
    this.health_text.state.position.x = this.state.position.x + 30;
    this.health_text.state.position.y = this.state.position.y + 100;
    */
    let cursor = room.getObj("cursor");
    if (this.collision) {
      if (room.check_collisions({
        width: this.width,
        height: 1,
        x: this.state.position.x,
        y: this.state.position.y - this.height / 2 - 1,
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

export class ControlledPlayer extends Goomba {
  tags = ["player"]
  register_controls() {
    this.bind_control("KeyA", exec_type.repeat, () => {
      if (this.state.velocity.x > -10) {
        this.state.velocity.x = this.state.velocity.x - 1;
      }
    });
    this.bind_control("KeyA", exec_type.once, () => {
      this.state.direction = direction.left;
      this.state.velocity.x = this.state.velocity.x - 0.1;
    })
    this.bind_control("mouse0down", exec_type.repeat, () => {
      this.audio.play("explosion", 0.4);
    }, 400);
    this.bind_control("KeyS", exec_type.repeat, () => {
      if (!this.collision && this.state.velocity.y > -10) {
        this.state.velocity.y = this.state.velocity.y - 1;
      }
    });
    this.bind_control("KeyW", exec_type.repeat, () => {
      if (!this.collision && this.state.velocity.y < 10) {
        this.state.velocity.y = this.state.velocity.y + 1;
      }
    });
    this.bind_control("KeyD", exec_type.repeat, () => {
      if (this.state.velocity.x < 10) {
        this.state.velocity.x = this.state.velocity.x + 1;
      }
    });
    this.bind_control("KeyD", exec_type.once, () => {
      this.state.direction = direction.right;
      this.state.velocity.x = this.state.velocity.x + 0.1;
    })
    this.bind_control("Space", exec_type.once, () => {
      if (!this.state.jumping) {
        this.state.velocity.y += 25;
        this.audio.play("slime", 0.1);
      }
    });
  }
  statef(time: number) {
    super.statef(time);
  }
}

export class StandingGoomba extends platformer_obj<goomba_state>{
  sprite_url = "http://localhost/src/game/objects/goomba.png";
  height = 64;
  width = 64;
  collision = true;
  enemy = true;
  tags = ["stander"]
  constructor(x: number, y: number, id: string = undefined) {
    super({
      x,y
    },0,StandingGoomba.default_params);
    if (id) {
      this.id = id;
    }
    this.state = {
      direction: direction.left,
      position: {
        x,
        y
      },
      velocity: {
        x: 0,
        y: 0
      },
      jumping: false,
      health: 100,
      times_airshot: 0,
      max_times_airshot: 0
    }
  }
  statef(time: number) {
    
    if (this.state.jumping) {
      let mouse_position = Poll_Mouse(this.game.state.canvas,this.game.state.cameras[0]);
      if (mouse_position.y > mouse_position.last.y) {
        if (this.collision_check({
          x: this.state.position.x,
          y: this.state.position.y + this.height,
          width: this.width,
          height: 1
        }).length == 0) {
          this.state.position.y = mouse_position.y - this.height / 2;
        }
      }
      else if (mouse_position.y < mouse_position.last.y) {
        if (this.collision_check({
          x: this.state.position.x,
          y: this.state.position.y - 1,
          width: this.width,
          height: 1
        }).length == 0) {
          this.state.position.y = mouse_position.y - this.height / 2;
        }
      }
      if (mouse_position.x < mouse_position.last.x) {
        if (this.collision_check({
          x: this.state.position.x - 1,
          y: this.state.position.y,
          width: 1,
          height: this.height
        }).length == 0) {
          this.state.position.x = mouse_position.x - this.width / 2;
        }
      }
      else if (mouse_position.x > mouse_position.last.x) {
        if (this.collision_check({
          x: this.state.position.x + this.width,
          y: this.state.position.y,
          width: 1,
          height: this.height
        }).length == 0) {
          this.state.position.x = mouse_position.x - this.width / 2;
        }
      }
    }
    super.statef(time);
  }
}

