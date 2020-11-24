"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("../../lib/state");
const sprite_1 = require("../../lib/sprite");
const object_1 = require("../../lib/object");
const platformer_obj_1 = require("./platformer_obj");
const controls_1 = require("../../lib/controls");
const main_1 = require("../main");
var direction;
(function (direction) {
    direction[direction["left"] = 0] = "left";
    direction[direction["right"] = 1] = "right";
})(direction || (direction = {}));
class Player extends object_1.composite_obj {
    constructor(a, rotation, d) {
        super(a);
        this.enemy = true;
        this.state = {
            position: a,
            velocity: {
                x: 0,
                y: 0
            }
        };
        this.objects.push(new ControlledPlayer(a, rotation, d));
        this.objects.push(new Gun());
    }
}
exports.Player = Player;
class Gun extends platformer_obj_1.platformer_obj {
    constructor() {
        super(state_1.position_init().position, 0, Gun.default_params);
        this.sprite_url = "./sprites/folder/gun.png";
        this.height = 50;
        this.width = 20;
        this.collision = false;
        this.render = true;
        this.gravity = false;
        this.tags = ["gun"];
        this.id = "gun";
        this.state = {
            position: state_1.position_init().position,
            velocity: state_1.position_init().velocity,
            rotation: -1
        };
    }
    statef(t) {
        if (this.player) {
            let angle = this.player.angleTowards(this.cursor);
            let rot = object_1.rotation_length(50, angle);
            this.rotation = angle;
            this.state.rotation = angle;
            this.state.position = {
                x: rot.x + this.player.state.position.x,
                y: rot.y + this.player.state.position.y
            };
        }
        else {
            let room = main_1.g.getRoom();
            this.player = this.parent.get_Items_by_Tag("player")[0];
            this.cursor = room.getObj("cursor");
        }
    }
}
exports.Gun = Gun;
class Cursor extends platformer_obj_1.platformer_obj {
    constructor(id) {
        super({ x: 0, y: 0 }, 0, { id: id });
        this.sprite_url = "./sprites/cursor.png";
        this.height = 64;
        this.width = 64;
        this.collision = true;
        this.render = true;
        this.scaling = 1;
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
        };
    }
    statef() {
    }
}
exports.Cursor = Cursor;
class Goomba extends platformer_obj_1.platformer_obj {
    constructor(a, b, c = Goomba.default_params) {
        super(a, b, c);
        this.sprite_url = "./sprites/folder/robot.png";
        this.height = 149;
        this.width = 149;
        this.tags = ["dummy"];
        this.collision = true;
        if (c.id != undefined) {
            this.id = c.id;
        }
        this.state = {
            direction: direction.left,
            position: a,
            velocity: {
                x: 0,
                y: 0
            },
            jumping: false,
            health: 100,
            times_airshot: 0,
            max_times_airshot: 0
        };
        this.animations.play("walk1");
    }
    register_animations() {
        let sprites = sprite_1.sprite_gen(this.sprite_sheet, this.width, this.height);
        this.animations.add("walk1", [
            [0, sprites[0][0]],
            [100, sprites[0][1]],
            [400, sprites[0][0]],
            [500, sprites[0][2]]
        ], 800);
        this.animations.add("walk2", [
            [0, sprites[0][5]],
            [100, sprites[0][4]],
            [400, sprites[0][5]],
            [500, sprites[0][3]]
        ], 800);
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
        ], 1);
    }
    register_audio() {
        this.audio.add("slime", "./sounds/goomba/slimeball.wav");
        this.audio.add("explosion", "./sounds/explosion.mp3");
    }
    renderf(t) {
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
    statef(time) {
        let room = main_1.g.getRoom();
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
            this.state.velocity.x = this.state.velocity.x - 0.4 * 16 / time;
            ;
            if (this.state.velocity.x < 0) {
                this.state.velocity.x = 0;
            }
        }
        else if (this.state.velocity.x < 0) {
            this.state.direction = direction.left;
            this.state.velocity.x = this.state.velocity.x + 0.4 * 16 / time;
            ;
            if (this.state.velocity.x > 0) {
                this.state.velocity.x = 0;
            }
        }
    }
}
exports.Goomba = Goomba;
class ControlledPlayer extends Goomba {
    constructor() {
        super(...arguments);
        this.tags = ["player"];
    }
    register_controls() {
        this.bind_control("KeyA", controls_1.exec_type.repeat, () => {
            if (this.state.velocity.x > -10) {
                this.state.velocity.x = this.state.velocity.x - 1;
            }
        });
        this.bind_control("KeyA", controls_1.exec_type.once, () => {
            this.state.direction = direction.left;
            this.state.velocity.x = this.state.velocity.x - 0.1;
        });
        this.bind_control("mouse0down", controls_1.exec_type.repeat, () => {
            this.audio.play("explosion", 0.4);
        }, 400);
        this.bind_control("KeyS", controls_1.exec_type.repeat, () => {
            if (!this.collision && this.state.velocity.y > -10) {
                this.state.velocity.y = this.state.velocity.y - 1;
            }
        });
        this.bind_control("KeyW", controls_1.exec_type.repeat, () => {
            if (!this.collision && this.state.velocity.y < 10) {
                this.state.velocity.y = this.state.velocity.y + 1;
            }
        });
        this.bind_control("KeyD", controls_1.exec_type.repeat, () => {
            if (this.state.velocity.x < 10) {
                this.state.velocity.x = this.state.velocity.x + 1;
            }
        });
        this.bind_control("KeyD", controls_1.exec_type.once, () => {
            this.state.direction = direction.right;
            this.state.velocity.x = this.state.velocity.x + 0.1;
        });
        this.bind_control("Space", controls_1.exec_type.once, () => {
            if (!this.state.jumping) {
                this.state.velocity.y += 25;
                this.audio.play("slime", 0.1);
            }
        });
    }
    statef(time) {
        super.statef(time);
    }
}
exports.ControlledPlayer = ControlledPlayer;
class StandingGoomba extends platformer_obj_1.platformer_obj {
    constructor(x, y, id = undefined) {
        super({
            x, y
        }, 0, StandingGoomba.default_params);
        this.sprite_url = "http://localhost/src/game/objects/goomba.png";
        this.height = 64;
        this.width = 64;
        this.collision = true;
        this.enemy = true;
        this.tags = ["stander"];
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
        };
    }
    statef(time) {
        if (this.state.jumping) {
            let mouse_position = controls_1.Poll_Mouse(this.game.state.canvas, this.game.state.cameras[0]);
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
exports.StandingGoomba = StandingGoomba;
//# sourceMappingURL=goomba.js.map