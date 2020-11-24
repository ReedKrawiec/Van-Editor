/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game/main.ts":
/*!**************************!*\
  !*** ./src/game/main.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.g = void 0;
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
const render_1 = __webpack_require__(/*! ../lib/render */ "./src/lib/render.ts");
const van_2 = __webpack_require__(/*! ../van */ "./src/van.ts");
const Overworld_1 = __webpack_require__(/*! ./rooms/Overworld/Overworld */ "./src/game/rooms/Overworld/Overworld.ts");
let canvas_element = document.getElementById("target");
exports.g = new van_1.game(canvas_element.getContext("2d"), {}, (g) => __awaiter(void 0, void 0, void 0, function* () {
    g.state.cameras = [
        new render_1.Camera({
            x: 0,
            y: 0,
            dimensions: {
                height: van_1.viewport.height,
                width: van_1.viewport.width * 4 / 5
            },
            scaling: 0.5,
            debug: false
        }, {
            x: 1,
            y: 0,
            width: 0.8,
            height: 1
        }),
        new render_1.Camera({
            x: 0,
            y: 0,
            dimensions: {
                width: van_1.viewport.width / 5,
                height: van_1.viewport.height
            },
            scaling: 0.2,
            debug: false
        }, {
            x: van_1.viewport.width * 4 / 5,
            y: 0,
            width: 0.2,
            height: 1
        })
    ];
    let path = "./rooms/Overworld/Overworld.ts";
    //console.log(await import(path));
    g.loadRoom(new Overworld_1.Overworld(g));
    console.log(JSON.stringify(van_2.rooms));
}));


/***/ }),

/***/ "./src/game/objects/box.ts":
/*!*********************************!*\
  !*** ./src/game/objects/box.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VertBox = exports.Box = void 0;
const platformer_obj_1 = __webpack_require__(/*! ./platformer_obj */ "./src/game/objects/platformer_obj.ts");
class Box extends platformer_obj_1.platformer_obj {
    constructor(a, b) {
        super(a, b, Box.default_params);
        this.sprite_url = "./sprites/box.png";
        this.collision = true;
        this.height = 64;
        this.width = 500;
        this.gravity = false;
        this.enemy = false;
        this.tags = ["static"];
        this.state = {
            position: a,
            velocity: {
                x: 0,
                y: 0
            }
        };
    }
}
exports.Box = Box;
class VertBox extends Box {
    constructor() {
        super(...arguments);
        this.sprite_url = "./sprites/box2.png";
        this.width = 64;
        this.height = 500;
    }
}
exports.VertBox = VertBox;


/***/ }),

/***/ "./src/game/objects/bullet.ts":
/*!************************************!*\
  !*** ./src/game/objects/bullet.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rocket = exports.Bullet = void 0;
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
class Bullet extends object_1.obj {
    constructor(x, angle, id = undefined) {
        super(x);
        this.sprite_url = "./sprites/bullet.png";
        this.height = 20;
        this.width = 10;
        this.gravity = false;
        this.max_distance = 2000;
        this.tags = ["bullet"];
        if (id != undefined) {
            this.id = id;
        }
        this.state = {
            position: x,
            velocity: {
                x: 0,
                y: 0
            },
            speed: 10,
            rotation: angle,
            distance: 0,
            damage: 5
        };
        this.rotation = angle;
    }
    statef(time) {
        this.state.velocity = object_1.rotation_length(this.state.speed, this.state.rotation);
        this.state.distance += this.state.speed;
        if (this.state.distance > this.max_distance) {
            this.delete();
        }
    }
    register_controls() {
    }
}
exports.Bullet = Bullet;
class Rocket extends Bullet {
    constructor(x, angle) {
        super(x, angle);
        this.sprite_url = "./sprites/folder/rocket.png";
        this.height = 67;
        this.width = 16;
        this.particle_timer = 0;
        this.particle_frequency = 5;
        this.max_distance = 5000;
        this.tags = ["Rocket"];
        this.hitbox = {
            x_offset: 0,
            y_offset: 0,
            width: 16,
            height: 16
        };
        this.state.speed = 15;
        this.state.damage = 20;
    }
    register_audio() {
        this.audio.add("explosion", "./sounds/explosion2.mp3");
    }
    statef(time) {
        super.statef(time);
        if (this.particle_timer == 0) {
            let offset = object_1.rotation_length(30, this.rotation + 180);
            this.emit_particle("smoke", offset, 400, 12);
        }
        this.particle_timer += time;
        if (this.particle_timer > this.particle_frequency) {
            this.particle_timer = 0;
        }
        let room = main_1.g.state.current_room;
        let collisions = room.check_collisions(this.get_full_collision_box(), ["gun", "player"]);
        if (collisions.length > 0) {
            for (let collision of collisions) {
                let st = collision.state;
                if (collision.state.health) {
                    st.health -= this.state.damage;
                }
                if (collision.tags.indexOf("dummy") > -1) {
                    let dummy = collision;
                    if (dummy.state.jumping) {
                        dummy.state.times_airshot++;
                    }
                }
            }
            this.state.distance = this.max_distance;
            this.delete();
            let explosion_collisions = room.check_collisions({
                x: this.state.position.x,
                y: this.state.position.y,
                width: 256,
                height: 256
            }, ["static"]);
            for (let collider of explosion_collisions) {
                let distance = this.distance(collider);
                let multiplyer = 1 - distance / 300;
                if (multiplyer < 0)
                    multiplyer = 0;
                let o_state = collider.state;
                let velocities = object_1.rotation_length(multiplyer * 100, this.angleTowards(collider));
                o_state.velocity.x += velocities.x;
                o_state.velocity.y += velocities.y;
            }
            this.emit_particle("explosion", { x: 0, y: 0 }, 500, 0);
            this.audio.play("explosion", 0.2);
        }
    }
}
exports.Rocket = Rocket;


/***/ }),

/***/ "./src/game/objects/goomba.ts":
/*!************************************!*\
  !*** ./src/game/objects/goomba.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StandingGoomba = exports.ControlledPlayer = exports.Goomba = exports.Cursor = exports.Gun = exports.Player = void 0;
const state_1 = __webpack_require__(/*! ../../lib/state */ "./src/lib/state.ts");
const sprite_1 = __webpack_require__(/*! ../../lib/sprite */ "./src/lib/sprite.ts");
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
const platformer_obj_1 = __webpack_require__(/*! ./platformer_obj */ "./src/game/objects/platformer_obj.ts");
const controls_1 = __webpack_require__(/*! ../../lib/controls */ "./src/lib/controls.ts");
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
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


/***/ }),

/***/ "./src/game/objects/platformer_obj.ts":
/*!********************************************!*\
  !*** ./src/game/objects/platformer_obj.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.platformer_obj_composite = exports.platformer_obj = void 0;
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
class platformer_obj extends object_1.gravity_obj {
    constructor(a, b, c) {
        super(a, b, c);
        this.enemy = false;
    }
    statef(a) {
        let state = this.state;
        if (state.health <= 0) {
            this.delete();
        }
    }
}
exports.platformer_obj = platformer_obj;
class platformer_obj_composite extends object_1.composite_obj {
    constructor(a) {
        super(a);
        this.enemy = false;
    }
    statef(a) {
        let state = this.state;
        if (state.health <= 0) {
            this.delete();
        }
    }
}
exports.platformer_obj_composite = platformer_obj_composite;


/***/ }),

/***/ "./src/game/objects/target.ts":
/*!************************************!*\
  !*** ./src/game/objects/target.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Target = void 0;
const sprite_1 = __webpack_require__(/*! ../../lib/sprite */ "./src/lib/sprite.ts");
const platformer_obj_1 = __webpack_require__(/*! ./platformer_obj */ "./src/game/objects/platformer_obj.ts");
class Target extends platformer_obj_1.platformer_obj {
    constructor(a) {
        super(a, 0, Target.default_params);
        this.sprite_url = "./sprites/target.png";
        this.height = 64;
        this.width = 64;
        this.collision = true;
        this.gravity = false;
        this.render = true;
        this.enemy = true;
        this.state = {
            position: a,
            velocity: {
                x: 0,
                y: 0
            },
            health: 20,
            breaking: false
        };
    }
    register_audio() {
        this.audio.add("break", "./sounds/target/hitsound_274.mp3");
    }
    register_animations() {
        let sprites = sprite_1.sprite_gen(this.sprite_sheet, this.width, this.height);
        this.animations.add("break", [
            [0, sprites[0][1]],
            [50, sprites[0][2]],
            [100, sprites[0][3]],
            [150, sprites[0][4]]
        ], 200);
    }
    statef() {
        if (this.state.health <= 0 && !this.state.breaking) {
            this.state.breaking = true;
            this.animations.play("break", () => {
                this.delete();
            });
            this.audio.play("break", 0.1);
        }
    }
}
exports.Target = Target;


/***/ }),

/***/ "./src/game/rooms/Overworld/Overworld.ts":
/*!***********************************************!*\
  !*** ./src/game/rooms/Overworld/Overworld.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Overworld = void 0;
const room_1 = __webpack_require__(/*! ../../../lib/room */ "./src/lib/room.ts");
const goomba_1 = __webpack_require__(/*! ../../objects/goomba */ "./src/game/objects/goomba.ts");
const box_1 = __webpack_require__(/*! ../../objects/box */ "./src/game/objects/box.ts");
const collision_1 = __webpack_require__(/*! ../../../lib/collision */ "./src/lib/collision.ts");
const object_1 = __webpack_require__(/*! ../../../lib/object */ "./src/lib/object.ts");
const controls_1 = __webpack_require__(/*! ../../../lib/controls */ "./src/lib/controls.ts");
const hud_1 = __webpack_require__(/*! ../../../lib/hud */ "./src/lib/hud.ts");
const van_1 = __webpack_require__(/*! ../../../van */ "./src/van.ts");
const bullet_1 = __webpack_require__(/*! ../../objects/bullet */ "./src/game/objects/bullet.ts");
const target_1 = __webpack_require__(/*! ../../objects/target */ "./src/game/objects/target.ts");
const main_1 = __webpack_require__(/*! ../../main */ "./src/game/main.ts");
class Overworld_HUD extends hud_1.HUD {
    constructor() {
        super();
        this.text_elements.push(new hud_1.Text({
            position: {
                x: 10,
                y: van_1.GetViewportDimensions().height * 7 / 8
            },
            size: 44,
            font: "Alata",
            color: "white",
            align: "left",
            scaling: 1
        }, () => {
            let x = main_1.g.getRoom().getObjByTag("dummy")[0];
            if (x)
                return `Times Airshot:${x.state.times_airshot}`;
            return "";
        }));
        this.text_elements.push(new hud_1.Text({
            position: {
                x: 10,
                y: van_1.GetViewportDimensions().height * 6 / 8
            },
            size: 44,
            font: "Alata",
            color: "white",
            align: "left",
            scaling: 1
        }, () => {
            let x = main_1.g.getRoom().getObjByTag("dummy")[0];
            if (x)
                return `Max Times Airshot:${Math.max(x.state.times_airshot, x.state.max_times_airshot)}`;
            return "";
        }));
    }
}
class Height_HUD extends hud_1.HUD {
    constructor() {
        super();
        this.text_elements.push(new hud_1.Text({
            position: {
                x: 10,
                y: 600
            },
            size: 15,
            font: "Alata",
            color: "white",
            align: "left",
            scaling: 1
        }, () => {
            let x = main_1.g.getRoom().getObjByTag("dummy")[0];
            if (x)
                return `Height:${Math.floor(x.state.position.y)}`;
            return "";
        }));
    }
}
class Overworld extends room_1.room {
    constructor(game) {
        super(game);
        this.background_url = "./sprites/imD41l.jpg";
        this.prefabs = {
            "goomba": goomba_1.Goomba,
            "player": goomba_1.Player,
            "box": box_1.Box,
            "target": target_1.Target
        };
        this.state = {
            player: undefined,
            paused: false,
            locked_bullet: null
        };
        for (let a = 0; a < 10; a++) {
            this.objects.push(new box_1.VertBox({ x: 320, y: 250 + a * 500 }, 0));
            this.objects.push(new box_1.VertBox({ x: 900, y: 250 + a * 500 }, 0));
        }
        for (let a = 0; a < 100; a++) {
            this.objects.push(new box_1.Box({ x: 700 + a * 500, y: 0 }, 0));
        }
        this.addItems([...new goomba_1.Player({ x: 700, y: 150 }, 0, { id: "player" }).combined_objects(), new goomba_1.Goomba({ x: 550, y: 150 }, 0), new box_1.Box({ x: 600, y: 0 }, 0), new goomba_1.Cursor("cursor")]);
        game.state.cameras[0].hud = new Overworld_HUD();
        game.state.cameras[1].hud = new Height_HUD();
    }
    register_controls() {
        this.bindControl("Escape", controls_1.exec_type.once, () => {
            this.game.state.cameras[0].state.debug = !this.game.state.cameras[0].state.debug;
            let player = this.getObj("player");
            player.collision = !player.collision;
            player.gravity = !player.gravity;
        });
        this.bindControl("mouse0down", controls_1.exec_type.repeat, () => {
            let gun = this.getObj("gun");
            if (gun) {
                let muzzle = object_1.rotation_length(30, gun.state.rotation);
                let position = {
                    x: gun.state.position.x + muzzle.x,
                    y: gun.state.position.y + muzzle.y
                };
                let bullets = [];
                for (let a = 0; a < 1; a++) {
                    bullets.push(new bullet_1.Rocket({ x: position.x, y: position.y }, gun.state.rotation));
                }
                if (this.state.locked_bullet == null)
                    this.state.locked_bullet = bullets[0];
                this.addItems(bullets);
            }
        }, 400);
    }
    registerParticles() {
        this.particles["smoke"] = {
            sprite: "./sprites/folder/smoke.png",
            height: 64,
            width: 64
        };
        this.particles["explosion"] = {
            sprite: "./sprites/folder/explosion.png",
            height: 128,
            width: 128
        };
    }
    statef(time) {
        //console.log(this.objects);
        if (!this.state.paused) {
            for (let a = 0; a < this.objects.length; a++) {
                room_1.apply_gravity(this.objects[a], -1, -15);
                collision_1.velocity_collision_check(this.objects[a], this.objects);
                this.objects[a].statef(time);
            }
            for (let particle of this.particles_arr) {
                particle.statef(time);
            }
            for (let text_node of this.text_nodes) {
                text_node.statef(time);
            }
            let player = this.getObj("player");
            let target = this.getObjByTag("dummy")[0];
            let cursor = this.getObj("cursor");
            let cameras = main_1.g.state.cameras;
            for (let cam of cameras) {
                if (cam.hud) {
                    cam.hud.statef(time);
                }
            }
            if (player) {
                cameras[0].x = player.state.position.x;
                cameras[0].y = player.state.position.y + (cameras[0].state.dimensions.height / 2 - player.height / 2);
            }
            if (target) {
                cameras[1].state.position.x = target.state.position.x;
                cameras[1].state.position.y = target.state.position.y;
            }
            if (cursor) {
                cursor.collision = false;
                cursor.gravity = false;
                let mouse = controls_1.Poll_Mouse(this.game.state.canvas, this.game.state.cameras[0]);
                cursor.state.position.x = mouse.x;
                cursor.state.position.y = mouse.y;
                /*
                cameras[2].state.position.x = mouse.x;
                cameras[2].state.position.y = mouse.y;
                */
            }
        }
    }
}
exports.Overworld = Overworld;


/***/ }),

/***/ "./src/lib/audio.ts":
/*!**************************!*\
  !*** ./src/lib/audio.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.audio = void 0;
class audio {
    constructor() {
        this.sounds = {};
    }
    add(name, s) {
        this.sounds[name] = new Audio(s);
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            let keys = Object.keys(this.sounds);
            let promises = keys.map((key) => {
                return new Promise((resolve, reject) => {
                    this.sounds[key].addEventListener("canplaythrough", (e) => {
                        resolve();
                    });
                });
            });
            try {
                let x = yield Promise.all(promises);
                return (x);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    play(name, volume) {
        let a = this.sounds[name];
        a.pause();
        a.currentTime = 0;
        a.volume = volume;
        a.play();
    }
}
exports.audio = audio;


/***/ }),

/***/ "./src/lib/collision.ts":
/*!******************************!*\
  !*** ./src/lib/collision.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.velocity_collision_check = exports.check_collisions = exports.check_all_collisions = exports.check_all_objects = void 0;
const object_1 = __webpack_require__(/*! ../lib/object */ "./src/lib/object.ts");
var direction;
(function (direction) {
    direction[direction["left"] = 0] = "left";
    direction[direction["right"] = 1] = "right";
    direction[direction["up"] = 2] = "up";
    direction[direction["down"] = 3] = "down";
})(direction || (direction = {}));
function check_all_objects(c, objs, exemption = []) {
    return objs.filter((a) => (!exemption.some((b) => a.tags.indexOf(b) !== -1) && a.collides_with_box(c)));
}
exports.check_all_objects = check_all_objects;
function check_all_collisions(c, objs, exemption = []) {
    let matched = [];
    for (let a of objs) {
        if (!exemption.some((b) => a.tags.indexOf(b) !== -1) && a.collision && a.collides_with_box(c)) {
            matched.push(a);
        }
    }
    return matched;
}
exports.check_all_collisions = check_all_collisions;
//Checks up to the first collision
function check_collisions(c, objs, exemption) {
    for (let a of objs) {
        if (a.id !== exemption && a.collision && a.collides_with_box(c)) {
            return a;
        }
    }
    return null;
}
exports.check_collisions = check_collisions;
function velocity_max(velocity, box, objs, exemption, dir) {
    let collision = check_collisions(box, objs, exemption);
    if (collision == null) {
        return velocity;
    }
    else {
        let collider = collision;
        let origin = object_1.getId(objs, exemption);
        let orig_st = origin.state;
        let collider_st = collider.state;
        if (dir == direction.left) {
            return (orig_st.position.x - origin.width / 2) - (collider_st.position.x + collider.width / 2);
        }
        else if (dir == direction.right) {
            return (collider_st.position.x - collider.width / 2) - (orig_st.position.x + origin.width / 2);
        }
        else if (dir == direction.down) {
            return (orig_st.position.y - origin.height / 2) - (collider_st.position.y + collider.height / 2);
        }
        else if (dir == direction.up) {
            return (collider_st.position.y - collider.height / 2) - (orig_st.position.y + origin.height / 2);
        }
    }
}
function velocity_collision_check(object, list) {
    list = [...list];
    let ob = object;
    let st = object.state;
    let x_vel = st.velocity.x;
    let y_vel = st.velocity.y;
    if (!ob.collision) {
        ob.state.position.x += ob.state.velocity.x;
        ob.state.position.y += ob.state.velocity.y;
        return;
    }
    if (x_vel > 0) {
        let box = {
            x: st.position.x + ob.width / 2 + x_vel / 2,
            y: st.position.y,
            width: x_vel,
            height: ob.height
        };
        let vel = velocity_max(st.velocity.x, box, list, ob.id, direction.right);
        if (vel > 0) {
            st.position.x += vel;
        }
        else {
            st.velocity.x = 0;
        }
    }
    else if (x_vel < 0) {
        let box = {
            x: x_vel / 2 + st.position.x - ob.width / 2,
            y: st.position.y,
            width: -1 * x_vel,
            height: ob.height
        };
        let vel = velocity_max(st.velocity.x, box, list, ob.id, direction.left);
        if (vel < 0) {
            st.position.x += vel;
        }
        else {
            st.velocity.x = 0;
        }
    }
    if (y_vel > 0) {
        let box = {
            x: st.position.x,
            y: st.position.y + ob.height / 2 + y_vel / 2,
            width: ob.width,
            height: y_vel
        };
        let vel = velocity_max(st.velocity.y, box, list, ob.id, direction.up);
        if (vel > 0) {
            st.position.y += vel;
        }
        else {
            st.velocity.y = 0;
        }
    }
    else if (y_vel < 0) {
        let box = {
            x: st.position.x,
            y: y_vel / 2 + st.position.y - ob.height / 2,
            width: ob.width,
            height: -1 * y_vel
        };
        let vel = velocity_max(st.velocity.y, box, list, ob.id, direction.down);
        if (vel < 0) {
            st.position.y += vel;
        }
        else {
            st.velocity.y = 0;
        }
    }
}
exports.velocity_collision_check = velocity_collision_check;


/***/ }),

/***/ "./src/lib/controls.ts":
/*!*****************************!*\
  !*** ./src/lib/controls.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bind = exports.exec_type = exports.Unbind = exports.ExecuteRepeatBinds = exports.Poll_Mouse = exports.debug_binds = exports.btype = exports.held_keys = exports.init_click_handler = void 0;
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
let target = document.getElementById("target");
function init_click_handler(game) {
    window.addEventListener("click", (e) => {
        let mouse = Poll_Mouse(game.state.canvas, game.state.cameras[0]);
        let box = {
            x: mouse.x,
            y: mouse.y,
            height: 1,
            width: 1
        };
        let d;
        if (van_1.DEBUG) {
            if (van_1.DEBUG_v.last_clicked.id == "debug_target") {
                d = [...exports.debug_binds];
            }
            else if (!van_1.PAUSED && van_1.DEBUG_v.last_clicked.id == "target") {
                d = [...all_binds];
            }
            else {
                d = [];
            }
        }
        else {
            d = [...all_binds];
        }
        for (let a = 0; a < d.length; a++) {
            let selected = d[a];
            if (selected.type === btype.mouse && selected.key === "mouse1" && selected.execute == exec_type.once) {
                if (selected.obj !== undefined) {
                    if (selected.obj.collides_with_box(box)) {
                        selected.function();
                    }
                }
                else {
                    selected.function();
                }
            }
        }
    });
}
exports.init_click_handler = init_click_handler;
window.addEventListener("mousedown", (e) => {
    e.preventDefault();
    let d;
    if (van_1.DEBUG) {
        if (van_1.DEBUG_v.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && van_1.DEBUG_v.last_clicked.id == "target") {
            d = [...all_binds];
        }
        else {
            d = [];
        }
    }
    else {
        d = [...all_binds];
    }
    for (let a = 0; a < d.length; a++) {
        let selected = d[a];
        if (selected.type === btype.mouse && selected.key === ("mouse" + e.button + "down") && !selected.executed) {
            if (selected.execute === exec_type.once) {
                selected.function();
            }
            else if (selected.execute === exec_type.repeat) {
                selected.repeat_timer.active = true;
            }
            selected.executed = true;
        }
        if (selected.type === btype.mouse && (selected.key === ("mouse" + e.button + "up") || selected.key == "mouseup") && selected.executed && selected.execute === exec_type.once) {
            selected.executed = false;
        }
        else if (selected.type === btype.mouse && (selected.key === ("mouse" + e.button + "up") || selected.key == "mouseup") && selected.executed && selected.execute === exec_type.repeat) {
            let g = [...repeat_binds];
            for (let a = 0; a < g.length; a++) {
                if (g[a].bind.id === selected.id) {
                    selected.executed = false;
                    g[a].active = false;
                    break;
                }
            }
        }
    }
});
window.addEventListener("mouseup", (e) => {
    let d;
    if (van_1.DEBUG) {
        if (van_1.DEBUG_v.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && van_1.DEBUG_v.last_clicked.id == "target") {
            d = [...all_binds];
        }
        else {
            d = [];
        }
    }
    else {
        d = [...all_binds];
    }
    for (let a = 0; a < d.length; a++) {
        let selected = d[a];
        if (selected.type === btype.mouse && selected.key === ("mouse" + e.button + "up") && !selected.executed) {
            if (selected.execute === exec_type.once) {
                selected.function();
            }
            else if (selected.execute === exec_type.repeat) {
                selected.repeat_timer.active = true;
            }
            selected.executed = true;
        }
        if (selected.type === btype.mouse && (selected.key === ("mouse" + e.button + "down") || selected.key == "mousedown") && selected.executed && selected.execute === exec_type.once) {
            selected.executed = false;
        }
        else if (selected.type === btype.mouse && (selected.key === ("mouse" + e.button + "down") || selected.key == "mousedown") && selected.executed && selected.execute === exec_type.repeat) {
            let g = [...repeat_binds];
            for (let a = 0; a < g.length; a++) {
                if (g[a].bind.id === selected.id) {
                    selected.executed = false;
                    g[a].active = false;
                    break;
                }
            }
        }
    }
});
exports.held_keys = {};
window.addEventListener("wheel", (e) => {
    let code;
    if (e.deltaY < 0) {
        code = "scrollup";
    }
    else if (e.deltaY > 0) {
        code = "scrolldown";
    }
    let d;
    if (van_1.DEBUG) {
        if (van_1.DEBUG_v.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && van_1.DEBUG_v.last_clicked.id == "target") {
            d = [...all_binds];
        }
        else {
            d = [];
        }
    }
    else {
        d = [...all_binds];
    }
    for (let a = 0; a < d.length; a++) {
        let selected = d[a];
        if (selected.type === btype.mouse && selected.key === code) {
            if (selected.execute === exec_type.once) {
                selected.function();
            }
        }
    }
});
window.addEventListener("keydown", (e) => {
    exports.held_keys[e.code] = true;
    let d;
    if (van_1.DEBUG) {
        if (van_1.DEBUG_v.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && van_1.DEBUG_v.last_clicked.id == "target") {
            d = [...all_binds];
        }
        else {
            d = [];
        }
    }
    else {
        d = [...all_binds];
    }
    for (let a = 0; a < d.length; a++) {
        let selected = d[a];
        if (selected.type === btype.keyboard && selected.key === e.code && !selected.executed) {
            if (selected.execute === exec_type.once) {
                selected.function();
            }
            else if (selected.execute === exec_type.repeat) {
                for (let c of repeat_binds) {
                    if (c.bind.id == selected.id) {
                        c.active = true;
                        break;
                    }
                }
            }
            selected.executed = true;
        }
    }
});
window.addEventListener("keyup", (e) => {
    exports.held_keys[e.code] = false;
    let d;
    if (van_1.DEBUG) {
        if (van_1.DEBUG_v.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && van_1.DEBUG_v.last_clicked.id == "target") {
            d = [...all_binds];
        }
        else {
            d = [];
        }
    }
    else {
        d = [...all_binds];
    }
    for (let a = 0; a < d.length; a++) {
        let selected = d[a];
        if (selected.type === btype.keyboard && selected.key === e.code && selected.executed) {
            if (selected.execute === exec_type.once) {
                selected.executed = false;
            }
            else if (selected.execute === exec_type.repeat) {
                let g = [...repeat_binds];
                for (let a = 0; a < g.length; a++) {
                    if (g[a].bind.id === selected.id) {
                        selected.executed = false;
                        g[a].active = false;
                        break;
                    }
                }
            }
        }
    }
});
let tracker = document.getElementById("target");
window.addEventListener("mousemove", (e) => {
    var rect = e.target.getBoundingClientRect();
    last_x = x;
    last_y = y;
    x = e.clientX - rect.left; //x position within the element.
    y = e.clientY - rect.top; //y position within the element.
});
var btype;
(function (btype) {
    btype[btype["mouse"] = 0] = "mouse";
    btype[btype["keyboard"] = 1] = "keyboard";
})(btype = exports.btype || (exports.btype = {}));
let x = 0;
let y = 0;
let last_x = 0;
let last_y = 0;
let binds = {};
exports.debug_binds = [];
let mouseBinds = {};
let bind_count = 0;
let all_binds = [];
let repeat_binds = [];
function Poll_Mouse(canvas, camera) {
    let height = van_1.GetViewportDimensions().height;
    let wratio = parseFloat(window.getComputedStyle(canvas).width) / van_1.GetViewportDimensions().width;
    let vratio = parseFloat(window.getComputedStyle(canvas).height) / van_1.GetViewportDimensions().height;
    return ({
        x: ((x - camera.state.viewport.x) / wratio / camera.state.scaling + camera.state.position.x - camera.state.dimensions.width / camera.state.scaling / 2),
        y: ((height - y / vratio) / camera.state.scaling + camera.state.position.y - camera.state.dimensions.height / camera.state.scaling / 2 - camera.state.viewport.y),
        last: {
            x: (x / wratio / camera.state.scaling + camera.state.position.x),
            y: ((height - y / vratio) / camera.state.scaling + camera.state.position.y)
        }
    });
}
exports.Poll_Mouse = Poll_Mouse;
function ExecuteRepeatBinds(b) {
    for (let a of repeat_binds) {
        if (a.bind.execute === exec_type.repeat && a.timer == 0 && a.active) {
            a.bind.function();
        }
        if (a.active || (!a.active && a.timer != 0))
            a.timer += b;
        if (a.timer > a.interval) {
            a.timer = 0;
        }
    }
}
exports.ExecuteRepeatBinds = ExecuteRepeatBinds;
function Unbind(bind_id) {
    for (let a = 0; a < all_binds.length; a++) {
        if (all_binds[a].id == bind_id) {
            all_binds.splice(a, 1);
            break;
        }
    }
}
exports.Unbind = Unbind;
var exec_type;
(function (exec_type) {
    exec_type[exec_type["once"] = 0] = "once";
    exec_type[exec_type["repeat"] = 1] = "repeat";
})(exec_type = exports.exec_type || (exports.exec_type = {}));
let id = 0;
function Bind(keyname, func, type, interval, object) {
    if (keyname.slice(0, 5) === "mouse") {
        let b = {
            key: keyname,
            type: btype.mouse,
            id,
            function: func,
            obj: object,
            execute: type,
            executed: false,
            interval
        };
        if (type == exec_type.repeat) {
            b.repeat_timer = {
                bind: b,
                timer: 0,
                interval,
                active: false
            };
            repeat_binds.push(b.repeat_timer);
        }
        all_binds.push(b);
    }
    else {
        let b = {
            key: keyname,
            type: btype.keyboard,
            id,
            function: func,
            execute: type,
            executed: false,
            interval
        };
        if (type == exec_type.repeat) {
            b.repeat_timer = {
                bind: b,
                timer: 0,
                interval,
                active: false
            };
            repeat_binds.push(b.repeat_timer);
        }
        all_binds.push(b);
    }
    id++;
    return id - 1;
}
exports.Bind = Bind;


/***/ }),

/***/ "./src/lib/hud.ts":
/*!************************!*\
  !*** ./src/lib/hud.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.HUD = void 0;
class HUD {
    constructor() {
        this.graphic_elements = [];
        this.text_elements = [];
    }
    statef(a) {
        for (let x of this.graphic_elements) {
            x.statef(a);
        }
        for (let x of this.text_elements) {
            x.statef(a);
        }
    }
}
exports.HUD = HUD;
class Text {
    constructor(a, b) {
        if (!a.align) {
            a.align = "center";
        }
        this.state = a;
        if (!this.state.text) {
            this.state.text = "";
        }
        this.get_func = b;
    }
    statef(a) {
        this.state.text = this.get_func();
    }
    renderf(a) {
        let { size, color, font, text, max_width, align } = this.state;
        return {
            size,
            color,
            font,
            text,
            max_width,
            align
        };
    }
}
exports.Text = Text;


/***/ }),

/***/ "./src/lib/object.ts":
/*!***************************!*\
  !*** ./src/lib/object.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gravity_obj = exports.static_obj = exports.composite_obj = exports.obj = exports.getId = exports.rotation_length = void 0;
const render_1 = __webpack_require__(/*! ./render */ "./src/lib/render.ts");
const controls_1 = __webpack_require__(/*! ./controls */ "./src/lib/controls.ts");
const audio_1 = __webpack_require__(/*! ./audio */ "./src/lib/audio.ts");
function rotation_length(length, degree) {
    let a_len = length * Math.sin(degree * Math.PI / 180);
    let b_len = length * Math.cos(degree * Math.PI / 180);
    return {
        x: a_len,
        y: b_len
    };
}
exports.rotation_length = rotation_length;
function getId(a, id) {
    for (let b = 0; b < a.length; b++) {
        if (a[b].id == id) {
            return a[b];
        }
    }
    return undefined;
}
exports.getId = getId;
let counter = 0;
class animations {
    constructor() {
        this.animations = {};
        this.animation_tracker = 0;
        this.animating = false;
    }
    add(name, s, length) {
        this.animations[name] = [s, length];
    }
    play(name, callback) {
        this.current = name;
        this.callback = callback;
        this.animation_tracker = 0;
    }
    renderf(t) {
        let curr_animation = this.animations[this.current][0];
        let length = this.animations[this.current][1];
        let index;
        for (index = 0; index < curr_animation.length - 1; index++) {
            if (this.animation_tracker >= curr_animation[index][0] && this.animation_tracker < curr_animation[index + 1][0]) {
                this.animation_tracker = this.animation_tracker + t;
                this.animating = true;
                return curr_animation[index][1];
            }
        }
        if (this.callback) {
            this.callback();
        }
        this.animating = false;
        if (this.animation_tracker >= length) {
            this.animation_tracker = 0;
        }
        else {
            this.animation_tracker += t;
        }
        return curr_animation[index][1];
    }
}
var RenderType;
(function (RenderType) {
    RenderType[RenderType["box"] = 0] = "box";
    RenderType[RenderType["sprite"] = 1] = "sprite";
})(RenderType || (RenderType = {}));
class obj {
    constructor(position, rotation = 0, params = obj.default_params) {
        this.sprite_url = "";
        this.render_type = render_1.render_type.sprite;
        this.collision = false;
        this.tags = [];
        this.rotation = 0;
        this.render = true;
        this.animations = new animations();
        this.audio = new audio_1.audio();
        this.last_render = 0;
        this.scaling = 1;
        this.id = "" + counter;
        this.binds = [];
        counter++;
        this.register_controls();
        this.register_audio();
    }
    getState() {
        return this.state;
    }
    register_animations() {
    }
    register_audio() {
    }
    load() {
        let _this = this;
        return new Promise((resolve, reject) => {
            let a = new Image();
            a.src = this.sprite_url;
            a.onload = (() => __awaiter(this, void 0, void 0, function* () {
                _this.sprite_sheet = a;
                _this.register_animations();
                yield this.audio.load();
                resolve();
            }));
        });
    }
    distance(a) {
        let o_st = a.state;
        let st = this.state;
        return Math.sqrt(Math.pow(st.position.x - o_st.position.x, 2) + Math.pow(st.position.y - o_st.position.y, 2));
    }
    angleTowards(a) {
        let b = a;
        return this.angleTowardsPoint(b.state.position);
    }
    angleTowardsPoint(position) {
        let state = this.state;
        if (state.position.x < position.x && state.position.y > position.y
            || (state.position.x < position.x && state.position.y < position.y)) {
            return 90 - Math.atan((position.y - state.position.y) / (position.x - state.position.x)) * 180 / Math.PI;
        }
        if (state.position.x > position.x && state.position.y < position.y
            || state.position.x > position.x && state.position.y > position.y) {
            return 270 - Math.atan((position.y - state.position.y) / (position.x - state.position.x)) * 180 / Math.PI;
        }
        return 0;
    }
    bind_control(key, x, func, interval = 1) {
        if (key == "mouse1") {
            let b = controls_1.Bind(key, func, x, interval, this);
            this.binds.push(b);
        }
        else {
            this.binds.push(controls_1.Bind(key, func, x, interval));
        }
    }
    register_controls() {
    }
    delete() {
        for (let a of this.binds) {
            controls_1.Unbind(a);
        }
        this.game.getRoom().deleteItem(this.id);
    }
    collision_check(a) {
        if (this.collision) {
            let room = this.game.getRoom();
            return room.check_collisions(a, [this.id]);
        }
        return [];
    }
    statef(time) {
    }
    get_full_collision_box() {
        let st = this.state;
        if (this.hitbox) {
            return {
                x: st.position.x,
                y: st.position.y,
                width: this.hitbox.width * this.scaling,
                height: this.hitbox.height * this.scaling
            };
        }
        else {
            return {
                x: st.position.x,
                y: st.position.y,
                width: this.width,
                height: this.height
            };
        }
    }
    get_all_collision_boxes() {
        let st = this.state;
        if (this.hitbox) {
            return [{
                    x: st.position.x,
                    y: st.position.y,
                    width: this.hitbox.width * this.scaling,
                    height: this.hitbox.height * this.scaling
                }];
        }
        else {
            return [{
                    x: st.position.x,
                    y: st.position.y,
                    width: this.width * this.scaling,
                    height: this.height * this.scaling
                }];
        }
    }
    collides_with_box(a) {
        let st = this.state;
        let hcollides = false, vcollides = false;
        let hbox = this.hitbox;
        if (!this.hitbox) {
            hbox = {
                x_offset: 0,
                y_offset: 0,
                width: this.width,
                height: this.height
            };
        }
        let ob = {
            left: (st.position.x + hbox.x_offset - hbox.width / 2),
            right: (st.position.x + hbox.x_offset + hbox.width / 2),
            top: (st.position.y + hbox.y_offset + hbox.height / 2),
            bottom: (st.position.y + hbox.y_offset - hbox.height / 2)
        };
        let box = {
            left: (a.x - a.width / 2),
            right: (a.x + a.width / 2),
            top: (a.y + a.height / 2),
            bottom: (a.y - a.height / 2)
        };
        if ((ob.left >= box.left && ob.left < box.right) || (box.left > ob.left && box.left < ob.right)) {
            hcollides = true;
        }
        else {
            return false;
        }
        if ((ob.bottom >= box.bottom && ob.bottom < box.top) || (box.bottom > ob.bottom && box.bottom < ob.top)) {
            vcollides = true;
        }
        else {
            return false;
        }
        return hcollides && vcollides;
    }
    emit_particle(name, offset, lifetime, range) {
        let room = this.game.getRoom();
        let st = this.state;
        let final_position = {
            x: st.position.x + offset.x,
            y: st.position.y + offset.y
        };
        room.emit_particle(name, final_position, lifetime, range);
    }
    render_track(time) {
        let rendered = this.renderf(time - this.last_render);
        let final;
        this.last_render = time;
        if (Array.isArray(rendered))
            final = rendered;
        else {
            final = [rendered];
        }
        return final;
    }
    renderf(time) {
        let st = this.state;
        if (!this.animations.current) {
            let sprite_height = this.height;
            let sprite_width = this.width;
            if (this.height == undefined) {
                sprite_height = this.sprite_sheet.height;
            }
            if (this.width == undefined) {
                sprite_width = this.sprite_sheet.width;
            }
            return {
                sprite: {
                    sprite_sheet: this.sprite_sheet,
                    left: 0,
                    top: 0,
                    sprite_width: sprite_width,
                    sprite_height: sprite_height,
                    opacity: 1
                },
                x: st.position.x,
                y: st.position.y
            };
        }
        return {
            sprite: this.animations.renderf(time),
            x: st.position.x,
            y: st.position.y
        };
    }
}
exports.obj = obj;
obj.default_params = {};
class composite_obj extends obj {
    constructor(pos) {
        super(pos);
        this.objects = [];
        this.render = false;
        this.registered = false;
        this.collision = false;
        this.statics = [];
    }
    load() {
        //return new Promise((resolve,reject)=>resolve());
        return Promise.all([...this.objects.map((a) => a.load()), ...this.statics.map(a => a.obj.load())]);
    }
    register_composite() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let length = this.combined_objects().length;
                for (let a = 0; a < length; a++) {
                    let o = this.combined_objects()[a];
                    o.parent = this;
                }
                this.game.getRoom().addItems(this.combined_objects());
                resolve();
            }));
        });
    }
    combined_objects() {
        let combined = [...this.objects, ...this.statics.map(a => a.obj)];
        combined.forEach(a => a.parent = this);
        return combined;
    }
    get_Items_by_Tag(tag) {
        return this.combined_objects().filter((a) => a.tags.indexOf(tag) > -1);
    }
    add_Item(a, list = this.objects) {
        list.push(a);
        a.parent = this;
        this.game.getRoom().addItem(a);
    }
    get_all_collision_boxes() {
        let arr = [];
        for (let obj of [...this.statics.map(a => a.obj), ...this.objects]) {
            let created_box = obj.get_all_collision_boxes();
            if (Array.isArray(created_box)) {
                arr.push(...created_box);
            }
            else {
                arr.push(created_box);
            }
        }
        return arr;
    }
    delete() {
        for (let a of this.objects) {
            a.delete();
        }
        for (let a of this.statics) {
            a.obj.delete();
        }
        super.delete();
    }
    statef(time) {
        if (this.game.getRoom() && !this.registered) {
            this.register_composite();
            this.registered = true;
        }
    }
    collides_with_box(a) {
        for (let obj of this.objects) {
            if (obj.collides_with_box(a))
                return true;
        }
        for (let o of this.statics) {
            if (o.obj.collides_with_box(a))
                return true;
        }
        return false;
    }
}
exports.composite_obj = composite_obj;
class static_obj {
    constructor() {
        this.sprite_url = "";
    }
}
exports.static_obj = static_obj;
class gravity_obj extends obj {
    constructor() {
        super(...arguments);
        this.gravity = true;
    }
}
exports.gravity_obj = gravity_obj;


/***/ }),

/***/ "./src/lib/rand.ts":
/*!*************************!*\
  !*** ./src/lib/rand.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandInt = void 0;
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandInt = getRandInt;


/***/ }),

/***/ "./src/lib/render.ts":
/*!***************************!*\
  !*** ./src/lib/render.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rect_renderer = exports.stroked_rect_renderer = exports.sprite_renderer = exports.text_renderer = exports.hud_text_renderer = exports.object_render = exports.render_type = exports.Camera = void 0;
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
class Camera {
    constructor(props, v) {
        this.state = {
            scaling: props.scaling,
            position: {
                x: props.x * props.scaling,
                y: props.y * props.scaling
            },
            dimensions: props.dimensions,
            viewport: {
                x: v.x,
                y: v.y,
                width: v.width * props.dimensions.width,
                height: v.height * props.dimensions.height
            },
            debug: props.debug,
            hud: undefined
        };
    }
    set x(x) {
        this.state.position.x = x;
    }
    set y(y) {
        this.state.position.y = y;
    }
    get x() {
        return this.state.position.x;
    }
    get y() {
        return this.state.position.y;
    }
}
exports.Camera = Camera;
var render_type;
(function (render_type) {
    render_type[render_type["text"] = 0] = "text";
    render_type[render_type["sprite"] = 1] = "sprite";
    render_type[render_type["rect"] = 2] = "rect";
    render_type[render_type["stroke_rect"] = 3] = "stroke_rect";
})(render_type = exports.render_type || (exports.render_type = {}));
/*
export const element_render = (r:renderer_args,o:obj<unknown>,time:number) => {
  let camera = r.camera;
  let vheight = r.camera.state.dimensions.height / r.camera.state.scaling;
  let final_x = ((s.x - camera.state.position.x + camera.state.dimensions.width / 2 - s.sprite.sprite_width / 2) * r.camera.state.scaling);
  let final_y = ((vheight - s.y - camera.state.dimensions.height / 2 - s.sprite.sprite_height / 2 + camera.state.position.y) * r.camera.state.scaling);
  let height = s.sprite.sprite_height * r.camera.state.scaling;
  let width = s.sprite.sprite_width * r.camera.state.scaling;
  if(o.render_type == render_type.text){

  }
  else if(o.render_type == render_type.sprite){

  }
  else if(o.render_type == render_type.stroke_rect){

  }
}
*/
exports.object_render = (r, o, time) => {
    let rendered = o.render_track(time);
    if (Array.isArray(rendered)) {
        for (let p of rendered) {
            exports.sprite_renderer(r, {
                sprite: p.sprite,
                x: p.x,
                y: p.y,
                rotation: o.rotation,
                scale: o.scaling
            });
        }
    }
    else {
        let positioned_sprite = rendered;
        if (o.render_type == render_type.sprite) {
            exports.sprite_renderer(r, {
                sprite: positioned_sprite.sprite,
                x: positioned_sprite.x,
                y: positioned_sprite.y,
                rotation: o.rotation,
                scale: o.scaling
            });
        }
        else if (o.render_type == render_type.rect) {
        }
    }
};
exports.hud_text_renderer = (r, s) => {
    let vheight = van_1.GetViewportDimensions().height;
    r.context.font = `${s.font.size}px ${s.font.font}`;
    r.context.fillStyle = s.font.color;
    r.context.textAlign = s.font.align;
    if (s.font.max_width) {
        r.context.fillText(s.font.text, s.x, vheight - s.y, s.font.max_width);
    }
    else {
        r.context.fillText(s.font.text, s.x, vheight - s.y);
    }
};
exports.text_renderer = (r, s) => {
    let camera = r.camera;
    let vheight = r.camera.state.dimensions.height;
    let width = r.context.measureText(s.font.text).width * r.camera.state.scaling;
    let height = s.font.size * 1.2 * r.camera.state.scaling;
    let final_x = ((s.x - camera.state.position.x + camera.state.dimensions.width * (1 / r.camera.state.scaling) / 2) * r.camera.state.scaling);
    let final_y = ((vheight - s.y * camera.state.scaling - camera.state.dimensions.height / 2 + camera.state.position.y * camera.state.scaling));
    r.context.font = `${s.font.size * r.camera.state.scaling}px ${s.font.font}`;
    r.context.fillStyle = s.font.color;
    r.context.textAlign = s.font.align;
    r.context.save();
    r.context.translate(final_x, final_y);
    if (s.font.max_width) {
        r.context.fillText(s.font.text, 0, 0, s.font.max_width);
    }
    else {
        r.context.fillText(s.font.text, 0, 0);
    }
    r.context.restore();
};
exports.sprite_renderer = (r, s) => {
    let camera = r.camera;
    let vheight = r.camera.state.dimensions.height / r.camera.state.scaling;
    let final_x = ((s.x - camera.state.position.x + camera.state.dimensions.width * (1 / r.camera.state.scaling) / 2 - s.sprite.sprite_width * s.scale / 2) * r.camera.state.scaling);
    let final_y = ((vheight - s.y - camera.state.dimensions.height * (1 / r.camera.state.scaling) / 2 - s.sprite.sprite_height * s.scale / 2 + camera.state.position.y) * r.camera.state.scaling);
    let height = s.sprite.sprite_height * s.scale * r.camera.state.scaling;
    let width = s.sprite.sprite_width * s.scale * r.camera.state.scaling;
    r.context.save();
    r.context.globalAlpha = s.sprite.opacity;
    r.context.translate(final_x + (width) / 2, final_y + height / 2);
    let radians = s.rotation * (Math.PI / 180);
    r.context.rotate(radians);
    r.context.drawImage(s.sprite.sprite_sheet, s.sprite.left, s.sprite.top, s.sprite.sprite_width * s.scale, s.sprite.sprite_height * s.scale, -(width) / 2, -height / 2, width, height);
    r.context.restore();
};
exports.stroked_rect_renderer = (context, rect, x, y, color, camera) => {
    let vheight = camera.state.dimensions.height / camera.state.scaling;
    let final_x = ((x - camera.state.position.x + camera.state.dimensions.width * (1 / camera.state.scaling) / 2 - rect.width / 2) * camera.state.scaling);
    let final_y = ((vheight - y - rect.height / 2 - camera.state.dimensions.height * (1 / camera.state.scaling) / 2 + camera.state.position.y) * camera.state.scaling);
    let height = rect.height * camera.state.scaling;
    let width = rect.width * camera.state.scaling;
    context.strokeStyle = color;
    context.strokeRect(final_x, final_y, width, height);
};
exports.rect_renderer = (context, rect, x, y, color, camera) => {
    let vheight = camera.state.dimensions.height / camera.state.scaling;
    let final_x = ((x - camera.state.position.x + camera.state.dimensions.width * (1 / camera.state.scaling) / 2 - rect.width / 2) * camera.state.scaling);
    let final_y = ((vheight - y - rect.height / 2 - camera.state.dimensions.height * (1 / camera.state.scaling) / 2 + camera.state.position.y) * camera.state.scaling);
    let height = rect.height * camera.state.scaling;
    let width = rect.width * camera.state.scaling;
    context.strokeStyle = color;
    context.fillRect(final_x, final_y, width, height);
};


/***/ }),

/***/ "./src/lib/room.ts":
/*!*************************!*\
  !*** ./src/lib/room.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.room = exports.apply_gravity = void 0;
const sprite_1 = __webpack_require__(/*! ./sprite */ "./src/lib/sprite.ts");
const collision_1 = __webpack_require__(/*! ./collision */ "./src/lib/collision.ts");
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
const controls_1 = __webpack_require__(/*! ./controls */ "./src/lib/controls.ts");
const audio_1 = __webpack_require__(/*! ./audio */ "./src/lib/audio.ts");
function apply_gravity(ob, grav_const, grav_max) {
    let st = ob.state;
    if (ob.gravity && st.velocity.y > grav_max) {
        st.velocity.y += grav_const;
    }
}
exports.apply_gravity = apply_gravity;
class room {
    constructor(game) {
        this.objects = [];
        this.particles = {};
        this.particles_arr = [];
        this.audio = new audio_1.audio();
        this.text_nodes = [];
        this.game = game;
    }
    load() {
        let _this = this;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let a = new Image();
            let to_await = this.objects.map((a) => a.load());
            yield Promise.all(to_await);
            a.src = this.background_url;
            a.onerror = (() => {
                console.log("error loading url:" + this.background_url);
            });
            a.onload = (() => __awaiter(this, void 0, void 0, function* () {
                _this.background = a;
                yield this.audio.load();
                resolve();
            }));
        }));
    }
    addItem(o, list = this.objects) {
        return __awaiter(this, void 0, void 0, function* () {
            yield o.load();
            o.game = this.game;
            list.push(o);
        });
    }
    addItems(o, list = this.objects) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let ob of o) {
                ob.game = this.game;
            }
            yield Promise.all(o.map((a) => a.load()));
            list.push(...o);
        });
    }
    deleteItem(id, list = this.objects) {
        for (let a = 0; a < list.length; a++) {
            if (list[a].id === id) {
                list.splice(a, 1);
                a--;
            }
        }
    }
    registerParticles() {
    }
    bindControl(key, x, func, interval = 1) {
        controls_1.Bind(key, func, x, interval);
    }
    check_collisions(box, exempt) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return collision_1.check_all_collisions(box, this.objects, exempt);
    }
    check_objects(box, exempt, list = this.objects) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return collision_1.check_all_objects(box, list, exempt);
    }
    register_controls() {
    }
    cleanup() {
    }
    statef(time) {
        for (let a = 0; a < this.objects.length; a++) {
            this.objects[a].statef(time);
        }
        if (this.game.state.cameras) {
            for (let cameras of this.game.state.cameras) {
                if (cameras.hud) {
                    cameras.hud.statef(time);
                }
            }
        }
    }
    emit_particle(name, pos, lifetime, pos_range) {
        this.addItem(new sprite_1.Particle(this.particles[name], pos, lifetime, pos_range), this.particles_arr);
    }
    getObj(id) {
        for (let a = 0; a < this.objects.length; a++) {
            if (this.objects[a].id == id) {
                return this.objects[a];
            }
        }
        return null;
    }
    getObjByTag(tag) {
        return this.objects.filter((a) => a.tags.indexOf(tag) > -1);
    }
    renderf(time) {
        return {
            sprite_sheet: this.background,
            left: 0,
            top: 0,
            sprite_height: this.background.height,
            sprite_width: this.background.width,
            opacity: 1
        };
    }
}
exports.room = room;


/***/ }),

/***/ "./src/lib/sprite.ts":
/*!***************************!*\
  !*** ./src/lib/sprite.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sprite_gen = exports.Particle = void 0;
const object_1 = __webpack_require__(/*! ./object */ "./src/lib/object.ts");
const rand_1 = __webpack_require__(/*! ./rand */ "./src/lib/rand.ts");
class Particle extends object_1.obj {
    constructor(part, pos, lifetime, random_range) {
        super();
        this.collision = false;
        this.state = {
            lifetime: 0,
            position: {
                x: pos.x + rand_1.getRandInt(-random_range, random_range),
                y: pos.y + rand_1.getRandInt(-random_range, random_range)
            },
            velocity: {
                x: 0,
                y: 0
            }
        };
        this.sprite_url = part.sprite;
        this.height = part.height;
        this.width = part.width;
        this.max_lifetime = lifetime;
        this.random_range = random_range;
    }
    delete() {
        let room = this.game.getRoom();
        room.deleteItem(this.id, room.particles_arr);
    }
    statef(time) {
        this.state.lifetime += time;
        if (this.state.lifetime > this.max_lifetime) {
            this.delete();
        }
    }
    renderf(time) {
        if (!this.selected_sprite) {
            let sprites = sprite_gen(this.sprite_sheet, this.width, this.height);
            let random_row = rand_1.getRandInt(0, sprites.length);
            let random_col = rand_1.getRandInt(0, sprites[random_row].length);
            this.selected_sprite = sprites[random_row][random_col];
        }
        this.selected_sprite.opacity = 1 - this.state.lifetime / this.max_lifetime;
        return {
            x: this.state.position.x,
            y: this.state.position.y,
            sprite: this.selected_sprite
        };
    }
}
exports.Particle = Particle;
function sprite_gen(sprite_sheet, sprite_width, sprite_height) {
    let width = sprite_sheet.width;
    let height = sprite_sheet.height;
    let sprites = [];
    for (let b = 0; b < height; b += sprite_height) {
        sprites.push([]);
        for (let a = 0; a < width; a += sprite_width) {
            sprites[b].push({
                sprite_sheet,
                left: a,
                top: b * sprite_height,
                sprite_height,
                sprite_width,
                opacity: 1
            });
        }
    }
    return sprites;
}
exports.sprite_gen = sprite_gen;


/***/ }),

/***/ "./src/lib/state.ts":
/*!**************************!*\
  !*** ./src/lib/state.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.position_init = void 0;
function position_init() {
    return {
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
exports.position_init = position_init;


/***/ }),

/***/ "./src/van.ts":
/*!********************!*\
  !*** ./src/van.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = exports.objects = exports.rooms = exports.DEBUG_v = exports.deep = exports.render_collision_box = exports.setPaused = exports.setDebug = exports.viewport = exports.GetViewportDimensions = exports.GetScreenDimensions = exports.PAUSED = exports.DEBUG = void 0;
exports.DEBUG = true;
exports.PAUSED = true;
const render_1 = __webpack_require__(/*! ./lib/render */ "./src/lib/render.ts");
const controls_1 = __webpack_require__(/*! ./lib/controls */ "./src/lib/controls.ts");
const controls_2 = __webpack_require__(/*! ./lib/controls */ "./src/lib/controls.ts");
let canvas_element = document.getElementById("target");
let context = canvas_element.getContext("2d");
let screen_width = window.innerWidth;
let screen_height = window.innerHeight;
let vwidth = canvas_element.width;
let vheight = canvas_element.height;
//How often the game logic loop should run, in milliseconds
let logic_loop_interval = 1000 / 60;
let last_time = new Date();
let last_render_time = 0;
function GetScreenDimensions() {
    return ({
        width: screen_width,
        height: screen_height
    });
}
exports.GetScreenDimensions = GetScreenDimensions;
function GetViewportDimensions() {
    return ({
        height: canvas_element.height,
        width: canvas_element.width
    });
}
exports.GetViewportDimensions = GetViewportDimensions;
exports.viewport = {
    height: GetViewportDimensions().height,
    width: GetViewportDimensions().width
};
window.onresize = () => {
    exports.viewport.height = GetViewportDimensions().height;
    exports.viewport.width = GetViewportDimensions().width;
};
function setDebug(x) {
    exports.DEBUG = x;
}
exports.setDebug = setDebug;
function setPaused(x) {
    exports.PAUSED = x;
}
exports.setPaused = setPaused;
exports.render_collision_box = (a) => {
    boxes.push(a);
};
let boxes = [];
exports.deep = (a) => {
    return JSON.parse(JSON.stringify(a));
};
function debug_statef(t) {
    let mouse = controls_1.Poll_Mouse(exports.DEBUG_v.target, exports.DEBUG_v.camera);
    if (exports.DEBUG_v.selected_element) {
        let st = exports.DEBUG_v.selected_element.state;
        st.position.x = mouse.x,
            st.position.y = mouse.y;
    }
    if (exports.DEBUG_v.rotation_element) {
        exports.DEBUG_v.rotation_element.rotation = exports.DEBUG_v.rotation_element.angleTowardsPoint(mouse);
    }
    if (exports.DEBUG_v.middle_position) {
        let diff_y = mouse.y - exports.DEBUG_v.middle_position.y;
        let diff_x = mouse.x - exports.DEBUG_v.middle_position.x;
        exports.DEBUG_v.camera.state.position.x = exports.DEBUG_v.camera.state.position.x + -1 * diff_x;
        exports.DEBUG_v.camera.state.position.y = exports.DEBUG_v.camera.state.position.y + -1 * diff_y;
    }
}
exports.rooms = [];
class game {
    constructor(ctx, init_state, init) {
        this.prototypes = [];
        this.rooms = [];
        this.state = {
            canvas: canvas_element,
            logic: undefined,
            context: ctx,
            cameras: [],
            current_room: undefined,
            game: init_state
        };
        this.offscreen_canvas = document.createElement("canvas");
        this.offscreen_context = this.offscreen_canvas.getContext("2d");
        if (exports.DEBUG) {
            exports.DEBUG_v = {
                target: document.getElementById("debug_target"),
                camera: new render_1.Camera({
                    x: 0,
                    y: 0,
                    dimensions: {
                        height: exports.viewport.height,
                        width: exports.viewport.width
                    },
                    scaling: 1,
                    debug: true
                }, {
                    x: 1,
                    y: 0,
                    width: 1,
                    height: 1
                }),
                last_clicked: undefined,
                selected_element: undefined,
                rotation_element: undefined,
                middle_position: undefined
            };
            controls_1.debug_binds.push({
                key: "mouse0down",
                type: controls_1.btype.mouse,
                id: 0,
                function: () => {
                    if (exports.DEBUG_v.selected_element) {
                        exports.DEBUG_v.selected_element = null;
                    }
                    else {
                        let mouse = controls_1.Poll_Mouse(exports.DEBUG_v.target, exports.DEBUG_v.camera);
                        let clicked = this.getRoom().check_objects({
                            x: mouse.x,
                            y: mouse.y,
                            height: 1,
                            width: 1
                        })[0];
                        if (clicked) {
                            exports.DEBUG_v.selected_element = clicked;
                        }
                    }
                },
                execute: controls_1.exec_type.once,
                camera: exports.DEBUG_v.camera
            });
            controls_1.debug_binds.push({
                key: "mouse1up",
                type: controls_1.btype.mouse,
                id: 5,
                function: () => {
                    exports.DEBUG_v.middle_position = undefined;
                },
                execute: controls_1.exec_type.once,
                camera: exports.DEBUG_v.camera
            });
            controls_1.debug_binds.push({
                key: "mouse1down",
                type: controls_1.btype.mouse,
                id: 6,
                function: () => {
                    let mouse = controls_1.Poll_Mouse(exports.DEBUG_v.target, exports.DEBUG_v.camera);
                    exports.DEBUG_v.middle_position = mouse;
                },
                execute: controls_1.exec_type.once,
                camera: exports.DEBUG_v.camera
            });
            controls_1.debug_binds.push({
                key: "mouse0up",
                type: controls_1.btype.mouse,
                id: 1,
                function: () => {
                    exports.DEBUG_v.selected_element = undefined;
                },
                execute: controls_1.exec_type.once,
                camera: exports.DEBUG_v.camera
            });
            controls_1.debug_binds.push({
                key: "mouse2down",
                type: controls_1.btype.mouse,
                id: 3,
                function: () => {
                    if (exports.DEBUG_v.rotation_element) {
                        exports.DEBUG_v.rotation_element = null;
                    }
                    else {
                        let mouse = controls_1.Poll_Mouse(exports.DEBUG_v.target, exports.DEBUG_v.camera);
                        let clicked = this.getRoom().check_objects({
                            x: mouse.x,
                            y: mouse.y,
                            height: 1,
                            width: 1
                        })[0];
                        if (clicked) {
                            exports.DEBUG_v.rotation_element = clicked;
                        }
                    }
                },
                execute: controls_1.exec_type.once,
                camera: exports.DEBUG_v.camera
            });
            controls_1.debug_binds.push({
                key: "mouse2up",
                type: controls_1.btype.mouse,
                id: 4,
                function: () => {
                    exports.DEBUG_v.rotation_element = undefined;
                },
                execute: controls_1.exec_type.once,
                camera: exports.DEBUG_v.camera
            });
            let left_func = () => {
                let shift_held = controls_1.held_keys["ShiftLeft"] ? 1 : 0;
                if (exports.DEBUG_v.last_clicked.id == "debug_target")
                    exports.DEBUG_v.camera.state.position.x = exports.DEBUG_v.camera.state.position.x - ((5 + shift_held * 5) * (1 / exports.DEBUG_v.camera.state.scaling));
            };
            let right_func = () => {
                let shift_held = controls_1.held_keys["ShiftLeft"] ? 1 : 0;
                if (exports.DEBUG_v.last_clicked.id == "debug_target")
                    exports.DEBUG_v.camera.state.position.x = exports.DEBUG_v.camera.state.position.x + ((5 + shift_held * 5) * (1 / exports.DEBUG_v.camera.state.scaling));
            };
            let down_func = () => {
                let shift_held = controls_1.held_keys["ShiftLeft"] ? 1 : 0;
                if (!controls_1.held_keys["Control"] && exports.DEBUG_v.last_clicked.id == "debug_target")
                    exports.DEBUG_v.camera.state.position.y = exports.DEBUG_v.camera.state.position.y - ((5 + shift_held * 5) * (1 / exports.DEBUG_v.camera.state.scaling));
            };
            let up_func = () => {
                let shift_held = controls_1.held_keys["ShiftLeft"] ? 1 : 0;
                if (exports.DEBUG_v.last_clicked.id == "debug_target")
                    exports.DEBUG_v.camera.state.position.y = exports.DEBUG_v.camera.state.position.y + ((5 + shift_held * 5) * (1 / exports.DEBUG_v.camera.state.scaling));
            };
            let scroll_up = () => {
                if (exports.DEBUG_v.last_clicked.id == "debug_target")
                    exports.DEBUG_v.camera.state.scaling = exports.DEBUG_v.camera.state.scaling + 0.05;
            };
            let save_func = () => {
                let ctrl_held = controls_1.held_keys["ControlLeft"];
                if (ctrl_held && exports.PAUSED) {
                    console.log("SAVE");
                }
                else if (ctrl_held && !exports.PAUSED) {
                    console.log("pause to enable saving.");
                }
            };
            let scroll_down = () => {
                if (exports.DEBUG_v.last_clicked.id == "debug_target" && exports.DEBUG_v.camera.state.scaling > 0.05)
                    exports.DEBUG_v.camera.state.scaling = exports.DEBUG_v.camera.state.scaling - 0.05;
            };
            controls_1.debug_binds.push({
                key: "KeyA",
                type: controls_1.btype.keyboard,
                id: controls_1.Bind("KeyA", left_func, controls_1.exec_type.repeat, 1),
                function: left_func,
                execute: controls_1.exec_type.repeat
            });
            controls_1.debug_binds.push({
                key: "KeyD",
                type: controls_1.btype.keyboard,
                id: controls_1.Bind("KeyD", right_func, controls_1.exec_type.repeat, 1),
                function: right_func,
                execute: controls_1.exec_type.repeat
            });
            controls_1.debug_binds.push({
                key: "KeyW",
                type: controls_1.btype.keyboard,
                id: controls_1.Bind("KeyW", up_func, controls_1.exec_type.repeat, 1),
                function: up_func,
                execute: controls_1.exec_type.repeat
            });
            controls_1.debug_binds.push({
                key: "KeyS",
                type: controls_1.btype.keyboard,
                id: controls_1.Bind("KeyS", down_func, controls_1.exec_type.repeat, 1),
                function: down_func,
                execute: controls_1.exec_type.repeat
            });
            controls_1.debug_binds.push({
                key: "scrollup",
                type: controls_1.btype.mouse,
                id: controls_1.Bind("scrollup", scroll_up, controls_1.exec_type.once, 1),
                function: scroll_up,
                execute: controls_1.exec_type.once
            });
            controls_1.debug_binds.push({
                key: "scrolldown",
                type: controls_1.btype.mouse,
                id: controls_1.Bind("scrolldown", scroll_down, controls_1.exec_type.once, 1),
                function: scroll_down,
                execute: controls_1.exec_type.once
            });
            controls_1.debug_binds.push({
                key: "KeyS",
                type: controls_1.btype.keyboard,
                id: controls_1.Bind("KeyS", save_func, controls_1.exec_type.once, 1),
                function: save_func,
                execute: controls_1.exec_type.once
            });
            window.addEventListener("click", (e) => {
                if (e.target instanceof HTMLElement) {
                    exports.DEBUG_v.last_clicked = e.target;
                }
            });
            document.getElementById("pause_button").addEventListener("click", (e) => {
                exports.PAUSED = !exports.PAUSED;
            });
            setInterval(() => {
                if (this.getRoom()) {
                    debug_statef(0);
                }
            }, 16.66);
        }
        this.initialize();
        init(this);
    }
    render(t) {
        let time = t - last_render_time;
        last_render_time = t;
        let all_cameras = this.state.cameras;
        let debug_index = -1;
        if (exports.DEBUG) {
            all_cameras = [...all_cameras, exports.DEBUG_v.camera];
            debug_index = all_cameras.length - 1;
        }
        for (let a = 0; a < all_cameras.length; a++) {
            let camera = all_cameras[a];
            this.offscreen_canvas.height = camera.state.dimensions.height;
            this.offscreen_canvas.width = camera.state.dimensions.width;
            this.offscreen_context.clearRect(0, 0, camera.state.dimensions.width, camera.state.dimensions.height);
            this.offscreen_context.fillStyle = "black";
            this.offscreen_context.fillRect(0, 0, camera.state.dimensions.width, camera.state.dimensions.height);
            let camera_box = {
                x: camera.state.position.x,
                y: camera.state.position.y,
                width: camera.state.dimensions.width * (1 / camera.state.scaling),
                height: camera.state.dimensions.height * (1 / camera.state.scaling)
            };
            let particle_collides = this.state.current_room.check_objects(camera_box, [], this.state.current_room.particles_arr);
            let camera_colliders = [...this.state.current_room.check_objects(camera_box), ...particle_collides];
            let render_args = {
                context: this.offscreen_context,
                camera: camera,
            };
            render_1.sprite_renderer(render_args, {
                sprite: this.state.current_room.renderf(time),
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1
            });
            let hitboxes = [];
            for (let a of camera_colliders.filter((b) => b.render)) {
                let rendered = a.render_track(t);
                if (Array.isArray(rendered)) {
                    for (let positioned_sprite of rendered)
                        render_1.sprite_renderer(render_args, {
                            sprite: positioned_sprite.sprite,
                            x: positioned_sprite.x,
                            y: positioned_sprite.y,
                            rotation: a.rotation,
                            scale: a.scaling
                        });
                }
                else {
                    let positioned_sprite = rendered;
                    render_1.sprite_renderer(render_args, {
                        sprite: positioned_sprite.sprite,
                        x: positioned_sprite.x,
                        y: positioned_sprite.y,
                        rotation: a.rotation,
                        scale: a.scaling
                    });
                }
                if (exports.DEBUG && a.collision) {
                    hitboxes.push(...a.get_all_collision_boxes());
                }
            }
            for (let node of this.state.current_room.text_nodes) {
                render_1.text_renderer(render_args, {
                    x: node.state.position.x,
                    y: node.state.position.y,
                    font: node.renderf(t)
                });
            }
            if (camera.hud) {
                let graphics = camera.hud.graphic_elements;
                let text_elements = camera.hud.text_elements;
                for (let a of graphics) {
                    let rendered = a.render_track(t);
                    if (a.render) {
                        for (let positioned_sprite of rendered) {
                            render_1.sprite_renderer(render_args, {
                                sprite: positioned_sprite.sprite,
                                x: positioned_sprite.x,
                                y: positioned_sprite.y,
                                rotation: a.rotation,
                                scale: a.scaling
                            });
                        }
                    }
                }
                //render_args.context = this.state.context;
                for (let a of text_elements) {
                    let st = a.state;
                    render_1.hud_text_renderer(render_args, {
                        x: st.position.x,
                        y: st.position.y,
                        font: a.renderf(t)
                    });
                }
            }
            if (exports.DEBUG && camera.state.debug) {
                let box;
                let boxes_copy = [...boxes];
                while (boxes_copy.length > 0) {
                    let box = boxes_copy.pop();
                    let rect = {
                        width: box.width,
                        height: box.height
                    };
                    render_1.stroked_rect_renderer(this.offscreen_context, rect, box.x, box.y, "#FF0000", camera);
                }
                while (hitboxes.length > 0) {
                    let box = hitboxes.pop();
                    let rect = {
                        width: box.width,
                        height: box.height
                    };
                    render_1.stroked_rect_renderer(this.offscreen_context, rect, box.x, box.y, "#008000", camera);
                }
            }
            if (a !== debug_index) {
                this.state.context.drawImage(this.offscreen_canvas, camera.state.viewport.x, camera.state.viewport.y);
            }
            else {
                exports.DEBUG_v.target.getContext("2d").drawImage(this.offscreen_canvas, camera.state.viewport.x, camera.state.viewport.y);
            }
        }
        if (exports.DEBUG)
            boxes = [];
        requestAnimationFrame((a) => { this.render(a); });
    }
    initialize() {
        controls_2.init_click_handler(this);
    }
    start_logic(a) {
        return window.setInterval(() => {
            if (!exports.PAUSED) {
                let new_time = new Date();
                let time_since = new_time.getTime() - last_time.getTime();
                last_time = new_time;
                if (this.state.current_room) {
                    this.state.current_room.statef(time_since);
                    if (this.state.current_room.hud) {
                        this.state.current_room.hud.statef(time_since);
                    }
                }
            }
            controls_1.ExecuteRepeatBinds(a);
        }, a);
    }
    getRoom() {
        return this.state.current_room;
    }
    loadRoomString(x) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("called");
            console.log(JSON.stringify(exports.rooms));
            for (let a of exports.rooms) {
                console.log(a.constructor.name);
                if (a.constructor.name == x) {
                    this.loadRoom(new a(this));
                }
            }
        });
    }
    loadRoom(x) {
        return __awaiter(this, void 0, void 0, function* () {
            x.game = this;
            if (this.state.current_room !== undefined) {
                while (this.state.current_room.objects.length > 0) {
                    this.state.current_room.objects[0].delete();
                }
            }
            this.state.current_room = x;
            let new_room = yield x.load();
            x.register_controls();
            x.registerParticles();
            if (this.state.logic != undefined) {
                clearInterval(this.state.logic);
            }
            this.state.logic = this.start_logic(logic_loop_interval);
            this.render(0);
        });
    }
}
exports.game = game;


/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/game/main.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/game/main.ts */"./src/game/main.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL2JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL2J1bGxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL2dvb21iYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL3BsYXRmb3JtZXJfb2JqLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvdGFyZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL092ZXJ3b3JsZC9PdmVyd29ybGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9hdWRpby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbnRyb2xzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvaHVkLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JlbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkEsZ0VBQXFDO0FBQ3JDLGlGQUFxQztBQUNyQyxnRUFBNkI7QUFDN0Isc0hBQXNEO0FBQ3RELElBQUksY0FBYyxHQUFxQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztBQUVuRixTQUFDLEdBQUcsSUFBSSxVQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUUsQ0FBTyxDQUFVLEVBQUMsRUFBRTtJQUM5RSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRztRQUNoQixJQUFJLGVBQU0sQ0FBQztZQUNULENBQUMsRUFBQyxDQUFDO1lBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDSCxVQUFVLEVBQUM7Z0JBQ1QsTUFBTSxFQUFDLGNBQVEsQ0FBQyxNQUFNO2dCQUN0QixLQUFLLEVBQUMsY0FBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUMsQ0FBQzthQUMzQjtZQUNELE9BQU8sRUFBQyxHQUFHO1lBQ1gsS0FBSyxFQUFDLEtBQUs7U0FDWixFQUNBO1lBQ0MsQ0FBQyxFQUFDLENBQUM7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUNILEtBQUssRUFBQyxHQUFHO1lBQ1QsTUFBTSxFQUFDLENBQUM7U0FDVCxDQUFDO1FBQ0YsSUFBSSxlQUFNLENBQUM7WUFDVCxDQUFDLEVBQUMsQ0FBQztZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsVUFBVSxFQUFDO2dCQUNULEtBQUssRUFBQyxjQUFRLENBQUMsS0FBSyxHQUFDLENBQUM7Z0JBQ3RCLE1BQU0sRUFBQyxjQUFRLENBQUMsTUFBTTthQUN2QjtZQUNELE9BQU8sRUFBQyxHQUFHO1lBQ1gsS0FBSyxFQUFDLEtBQUs7U0FDWixFQUFDO1lBQ0EsQ0FBQyxFQUFDLGNBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFDLENBQUM7WUFDdEIsQ0FBQyxFQUFDLENBQUM7WUFDSCxLQUFLLEVBQUMsR0FBRztZQUNULE1BQU0sRUFBQyxDQUFDO1NBQ1QsQ0FBQztLQUNIO0lBQ0QsSUFBSSxJQUFJLEdBQUcsZ0NBQWdDLENBQUM7SUFDNUMsa0NBQWtDO0lBQ2xDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQUssQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQyxFQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0gsNkdBQTJEO0FBSTNELE1BQWEsR0FBSSxTQUFRLCtCQUF5QjtJQVFoRCxZQUFZLENBQVUsRUFBQyxDQUFRO1FBQzdCLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQVJoQyxlQUFVLEdBQUcsbUJBQW1CO1FBQ2hDLGNBQVMsR0FBRyxJQUFJO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsU0FBSSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBR2YsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFFBQVEsRUFBQyxDQUFDO1lBQ1YsUUFBUSxFQUFDO2dCQUNQLENBQUMsRUFBQyxDQUFDO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7Q0FDRjtBQWxCRCxrQkFrQkM7QUFDRCxNQUFhLE9BQVEsU0FBUSxHQUFHO0lBQWhDOztRQUNFLGVBQVUsR0FBRyxvQkFBb0IsQ0FBQztRQUNsQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBTSxHQUFHLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FBQTtBQUpELDBCQUlDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJELG9GQUFzRDtBQUV0RCx3RUFBMEI7QUFjMUIsTUFBYSxNQUFPLFNBQVEsWUFBaUI7SUFPM0MsWUFBWSxDQUFVLEVBQUUsS0FBWSxFQUFFLEtBQVksU0FBUztRQUN6RCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFQWCxlQUFVLEdBQUcsc0JBQXNCLENBQUM7UUFDcEMsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFNBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBR2hCLElBQUcsRUFBRSxJQUFJLFNBQVMsRUFBQztZQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFFBQVEsRUFBQyxDQUFDO1lBQ1YsUUFBUSxFQUFDO2dCQUNQLENBQUMsRUFBQyxDQUFDO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCxLQUFLLEVBQUMsRUFBRTtZQUNSLFFBQVEsRUFBQyxLQUFLO1lBQ2QsUUFBUSxFQUFDLENBQUM7WUFDVixNQUFNLEVBQUMsQ0FBQztTQUNUO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFXO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLHdCQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUM7WUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBQ0QsaUJBQWlCO0lBRWpCLENBQUM7Q0FDRjtBQW5DRCx3QkFtQ0M7QUFFRCxNQUFhLE1BQU8sU0FBUSxNQUFNO0lBY2hDLFlBQVksQ0FBVSxFQUFDLEtBQVk7UUFDakMsS0FBSyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztRQWRqQixlQUFVLEdBQUcsNkJBQTZCLENBQUM7UUFDM0MsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQix1QkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdkIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsU0FBSSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ2pCLFdBQU0sR0FBRztZQUNQLFFBQVEsRUFBQyxDQUFDO1lBQ1YsUUFBUSxFQUFDLENBQUM7WUFDVixLQUFLLEVBQUMsRUFBRTtZQUNSLE1BQU0sRUFBQyxFQUFFO1NBQ1Y7UUFHQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxjQUFjO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFXO1FBQ2hCLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsSUFBRyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBQztZQUMxQixJQUFJLE1BQU0sR0FBRyx3QkFBZSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQztRQUM1QixJQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFDO1lBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxJQUFJLEdBQUcsUUFBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDaEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFDLENBQUMsS0FBSyxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztZQUN2QixLQUFJLElBQUksU0FBUyxJQUFJLFVBQVUsRUFBQztnQkFDOUIsSUFBSSxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQThCLENBQUM7Z0JBQ2xELElBQWdDLFNBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDO29CQUN0RCxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2lCQUNoQztnQkFDRCxJQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDO29CQUN0QyxJQUFJLEtBQUssR0FBRyxTQUFtQixDQUFDO29CQUNoQyxJQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDO3dCQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO3FCQUM3QjtpQkFDRjthQUNGO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxJQUFJLG9CQUFvQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDL0MsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QixLQUFLLEVBQUMsR0FBRztnQkFDVCxNQUFNLEVBQUMsR0FBRzthQUNYLEVBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNiLEtBQUksSUFBSSxRQUFRLElBQUksb0JBQW9CLEVBQUM7Z0JBQ3ZDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksVUFBVSxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUMsR0FBRyxDQUFDO2dCQUNsQyxJQUFHLFVBQVUsR0FBRyxDQUFDO29CQUNmLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFrQixDQUFDO2dCQUMxQyxJQUFJLFVBQVUsR0FBRyx3QkFBZSxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNoRixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztDQUNGO0FBckVELHdCQXFFQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdIRCxpRkFBeUY7QUFDekYsb0ZBQXNEO0FBQ3RELG9GQUF1RTtBQUN2RSw2R0FBd0Y7QUFDeEYsMEZBQTJEO0FBSzNELHdFQUE0QjtBQUU1QixJQUFLLFNBR0o7QUFIRCxXQUFLLFNBQVM7SUFDWix5Q0FBSTtJQUNKLDJDQUFLO0FBQ1AsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2I7QUFrQkQsTUFBYSxNQUFPLFNBQVEsc0JBQXdCO0lBRWxELFlBQVksQ0FBVyxFQUFDLFFBQWUsRUFBQyxDQUFlO1FBRXJELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUhYLFVBQUssR0FBRyxJQUFJLENBQUM7UUFJWCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUU7Z0JBQ1IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDTDtTQUNGO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQWZELHdCQWVDO0FBRUQsTUFBYSxHQUFJLFNBQVEsK0JBQXlCO0lBVWhEO1FBQ0UsS0FBSyxDQUFDLHFCQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQVZ2RCxlQUFVLEdBQUcsMEJBQTBCLENBQUM7UUFDeEMsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLFNBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztRQUdaLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxRQUFRLEVBQUUscUJBQWEsRUFBRSxDQUFDLFFBQVE7WUFDbEMsUUFBUSxFQUFFLHFCQUFhLEVBQUUsQ0FBQyxRQUFRO1lBQ2xDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDYjtJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBUztRQUNkLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRCxJQUFJLEdBQUcsR0FBRyx3QkFBZSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUc7Z0JBQ3BCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4QztTQUVGO2FBQ0k7WUFDSCxJQUFJLElBQUksR0FBRyxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBVyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QztJQUVILENBQUM7Q0FDRjtBQXRDRCxrQkFzQ0M7QUFFRCxNQUFhLE1BQU8sU0FBUSwrQkFBeUI7SUFPbkQsWUFBWSxFQUFVO1FBQ3BCLEtBQUssQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBUDdCLGVBQVUsR0FBRyxzQkFBc0IsQ0FBQztRQUNwQyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFHVixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxRQUFRLEVBQUU7Z0JBQ1IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDTDtZQUNELFFBQVEsRUFBRTtnQkFDUixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsTUFBTTtJQUNOLENBQUM7Q0FDRjtBQXZCRCx3QkF1QkM7QUFNRCxNQUFhLE1BQU8sU0FBUSwrQkFBNEI7SUFPdEQsWUFBWSxDQUFVLEVBQUMsQ0FBUSxFQUFDLElBQWtCLE1BQU0sQ0FBQyxjQUFjO1FBQ3JFLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBUGYsZUFBVSxHQUFHLDRCQUE0QixDQUFDO1FBQzFDLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osU0FBSSxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFJZixJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksU0FBUyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDekIsUUFBUSxFQUFDLENBQUM7WUFDVixRQUFRLEVBQUU7Z0JBQ1IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDTDtZQUNELE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFFLEdBQUc7WUFDWCxhQUFhLEVBQUUsQ0FBQztZQUNoQixpQkFBaUIsRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELG1CQUFtQjtRQUNqQixJQUFJLE9BQU8sR0FBRyxtQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQzNCLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQixFQUFFLEdBQUcsQ0FBQztRQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUMzQixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckIsRUFBRSxHQUFHLENBQUM7UUFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7WUFDL0IsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7WUFDL0IsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25CLEVBQUUsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELGNBQWM7UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsK0JBQStCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsd0JBQXdCLENBQUM7SUFDdkQsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFTO1FBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUN0QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUNsRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQzthQUNJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pFLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO2FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQ25DLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBWTtRQUNqQixJQUFJLElBQUksR0FBRyxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFtQkU7UUFDRixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixNQUFNLEVBQUUsQ0FBQztnQkFDVCxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQy9DLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDaEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO2lCQUNJO2dCQUNILElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUMzQjtTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDaEUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2hFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQUEsQ0FBQztZQUNqRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7U0FDRjthQUNJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFBQSxDQUFDO1lBQ2pFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtTQUNGO0lBQ0gsQ0FBQztDQUNGO0FBdklELHdCQXVJQztBQUVELE1BQWEsZ0JBQWlCLFNBQVEsTUFBTTtJQUE1Qzs7UUFDRSxTQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUEyQ25CLENBQUM7SUExQ0MsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsb0JBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQy9DLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsb0JBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdEQsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsb0JBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxvQkFBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO2dCQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsb0JBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25EO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxvQkFBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDL0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsb0JBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdEQsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsb0JBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQVk7UUFDakIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0NBQ0Y7QUE1Q0QsNENBNENDO0FBRUQsTUFBYSxjQUFlLFNBQVEsK0JBQTRCO0lBTzlELFlBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhLFNBQVM7UUFDdEQsS0FBSyxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQUM7U0FDSixFQUFDLENBQUMsRUFBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFUckMsZUFBVSxHQUFHLDhDQUE4QyxDQUFDO1FBQzVELFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsU0FBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBS2hCLElBQUksRUFBRSxFQUFFO1lBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDekIsUUFBUSxFQUFFO2dCQUNSLENBQUM7Z0JBQ0QsQ0FBQzthQUNGO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2FBQ0w7WUFDRCxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxHQUFHO1lBQ1gsYUFBYSxFQUFFLENBQUM7WUFDaEIsaUJBQWlCLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsSUFBWTtRQUVqQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3RCLElBQUksY0FBYyxHQUFHLHFCQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25GLElBQUksY0FBYyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO29CQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTTtvQkFDdEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixNQUFNLEVBQUUsQ0FBQztpQkFDVixDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztpQkFDNUQ7YUFDRjtpQkFDSSxJQUFJLGNBQWMsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQztvQkFDNUIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixNQUFNLEVBQUUsQ0FBQztpQkFDVixDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztpQkFDNUQ7YUFDRjtZQUNELElBQUksY0FBYyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO29CQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQzVCLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4QixLQUFLLEVBQUUsQ0FBQztvQkFDUixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07aUJBQ3BCLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUMzRDthQUNGO2lCQUNJLElBQUksY0FBYyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDakQsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO29CQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLO29CQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDeEIsS0FBSyxFQUFFLENBQUM7b0JBQ1IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUNwQixDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztpQkFDM0Q7YUFDRjtTQUNGO1FBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0NBQ0Y7QUE3RUQsd0NBNkVDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMVhELG9GQUE0RDtBQU81RCxNQUFhLGNBQWtCLFNBQVEsb0JBQWM7SUFFbkQsWUFBWSxDQUFVLEVBQUMsQ0FBUSxFQUFDLENBQVM7UUFDdkMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFGZixVQUFLLEdBQUcsS0FBSyxDQUFDO0lBR2QsQ0FBQztJQUNELE1BQU0sQ0FBQyxDQUFRO1FBQ2IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQThCLENBQUM7UUFDaEQsSUFBRyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Q0FDRjtBQVhELHdDQVdDO0FBRUQsTUFBYSx3QkFBNEIsU0FBUSxzQkFBZ0I7SUFFL0QsWUFBWSxDQUFVO1FBQ3BCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUZYLFVBQUssR0FBRyxLQUFLLENBQUM7SUFHZCxDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQVE7UUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBOEIsQ0FBQztRQUNoRCxJQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQztDQUNGO0FBWEQsNERBV0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkQsb0ZBQW1EO0FBRW5ELDZHQUEyRDtBQVkzRCxNQUFhLE1BQU8sU0FBUSwrQkFBNEI7SUFRdEQsWUFBWSxDQUFVO1FBQ3BCLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQVJuQyxlQUFVLEdBQUcsc0JBQXNCLENBQUM7UUFDcEMsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLFVBQUssR0FBRyxJQUFJLENBQUM7UUFHWCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsUUFBUSxFQUFDLENBQUM7WUFDVixRQUFRLEVBQUM7Z0JBQ1AsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUNELE1BQU0sRUFBQyxFQUFFO1lBQ1QsUUFBUSxFQUFDLEtBQUs7U0FDZjtJQUNILENBQUM7SUFDRCxjQUFjO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELG1CQUFtQjtRQUNqQixJQUFJLE9BQU8sR0FBRyxtQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDO1lBQzFCLENBQUMsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixDQUFDLEVBQUUsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxHQUFHLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLENBQUMsR0FBRyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQixFQUFDLEdBQUcsQ0FBQztJQUNSLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQztZQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEdBQUUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7Q0FDRjtBQTFDRCx3QkEwQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REQsaUZBQXdEO0FBQ3hELGlHQUFvRjtBQUNwRix3RkFBaUQ7QUFDakQsZ0dBQWtFO0FBQ2xFLHVGQUFtRTtBQUNuRSw2RkFBOEQ7QUFDOUQsOEVBQTZDO0FBQzdDLHNFQUE0RTtBQUM1RSxpR0FBb0Q7QUFDcEQsaUdBQTRDO0FBQzVDLDJFQUE2QjtBQVE3QixNQUFNLGFBQWMsU0FBUSxTQUFHO0lBQzdCO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQUksQ0FBQztZQUMvQixRQUFRLEVBQUU7Z0JBQ1IsQ0FBQyxFQUFFLEVBQUU7Z0JBQ0wsQ0FBQyxFQUFFLDJCQUFxQixFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBQyxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFDLE1BQU07WUFDWixPQUFPLEVBQUMsQ0FBQztTQUNWLEVBQUUsR0FBRyxFQUFFO1lBQ04sSUFBSSxDQUFDLEdBQUcsUUFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQVcsQ0FBQztZQUN0RCxJQUFHLENBQUM7Z0JBQ0YsT0FBTyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNsRCxPQUFPLEVBQUU7UUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFJLENBQUM7WUFDL0IsUUFBUSxFQUFFO2dCQUNSLENBQUMsRUFBRSxFQUFFO2dCQUNMLENBQUMsRUFBRSwyQkFBcUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUMsQ0FBQzthQUN4QztZQUNELElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsT0FBTztZQUNkLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFDLENBQUM7U0FDVixFQUFFLEdBQUcsRUFBRTtZQUNOLElBQUksQ0FBQyxHQUFHLFFBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFXLENBQUM7WUFDdEQsSUFBRyxDQUFDO2dCQUNGLE9BQU8scUJBQXFCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUM7WUFDMUYsT0FBTyxFQUFFO1FBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDRjtBQUVELE1BQU0sVUFBVyxTQUFRLFNBQUc7SUFDMUI7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksVUFBSSxDQUFDO1lBQy9CLFFBQVEsRUFBRTtnQkFDUixDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsR0FBRzthQUNQO1lBQ0QsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFDLE1BQU07WUFDWixPQUFPLEVBQUMsQ0FBQztTQUNWLEVBQUUsR0FBRyxFQUFFO1lBQ04sSUFBSSxDQUFDLEdBQUcsUUFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQVcsQ0FBQztZQUN0RCxJQUFHLENBQUM7Z0JBQ0YsT0FBTyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNwRCxPQUFPLEVBQUU7UUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNGO0FBRUQsTUFBYSxTQUFVLFNBQVEsV0FBaUI7SUFTOUMsWUFBWSxJQUFrQjtRQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFUZCxtQkFBYyxHQUFHLHNCQUFzQixDQUFDO1FBRXhDLFlBQU8sR0FBRztZQUNSLFFBQVEsRUFBQyxlQUFNO1lBQ2YsUUFBUSxFQUFDLGVBQU07WUFDZixLQUFLLEVBQUMsU0FBRztZQUNULFFBQVEsRUFBQyxlQUFNO1NBQ2hCLENBQUM7UUFHQSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsTUFBTSxFQUFFLFNBQVM7WUFDakIsTUFBTSxFQUFFLEtBQUs7WUFDYixhQUFhLEVBQUMsSUFBSTtTQUNuQixDQUFDO1FBQ0YsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsRUFBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQU8sQ0FBQyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQU8sQ0FBQyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUUzRDtRQUNELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLGVBQU0sQ0FBQyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxlQUFNLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxJQUFJLFNBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksZUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekosSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUNELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLG9CQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ2pGLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFXLENBQUM7WUFDN0MsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDckMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsb0JBQVMsQ0FBQyxNQUFNLEVBQUMsR0FBRyxFQUFFO1lBQ25ELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFRLENBQUM7WUFDcEMsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsSUFBSSxNQUFNLEdBQUcsd0JBQWUsQ0FBQyxFQUFFLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxRQUFRLEdBQUc7b0JBQ2IsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztvQkFDakMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztpQkFDbEM7Z0JBQ0QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBRyxFQUFDO29CQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksZUFBTSxDQUFDLEVBQUMsQ0FBQyxFQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUJBQzFFO2dCQUVELElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksSUFBSTtvQkFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxFQUFDLEdBQUcsQ0FBQztJQUNSLENBQUM7SUFDRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHO1lBQ3hCLE1BQU0sRUFBQyw0QkFBNEI7WUFDbkMsTUFBTSxFQUFDLEVBQUU7WUFDVCxLQUFLLEVBQUMsRUFBRTtTQUNULENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHO1lBQzVCLE1BQU0sRUFBQyxnQ0FBZ0M7WUFDdkMsTUFBTSxFQUFDLEdBQUc7WUFDVixLQUFLLEVBQUMsR0FBRztTQUNWO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFZO1FBRWpCLDRCQUE0QjtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxvQkFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDeEMsb0NBQXdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsS0FBSSxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFDO2dCQUNyQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsS0FBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFDO2dCQUNuQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVcsQ0FBQztZQUM3QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBVyxDQUFDO1lBQ3BELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFXLENBQUM7WUFDN0MsSUFBSSxPQUFPLEdBQUcsUUFBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFFOUIsS0FBSSxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUM7Z0JBQ3JCLElBQUcsR0FBRyxDQUFDLEdBQUcsRUFBQztvQkFDVCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdEI7YUFDRjtZQUVELElBQUksTUFBTSxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRztZQUVELElBQUcsTUFBTSxFQUFDO2dCQUNSLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDdkQ7WUFFRCxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDekIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksS0FBSyxHQUFHLHFCQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDOzs7a0JBR0U7YUFDSDtTQUVGO0lBQ0gsQ0FBQztDQUVGO0FBdEhELDhCQXNIQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNRCxNQUFhLEtBQUs7SUFBbEI7UUFDRSxXQUFNLEdBQWtCLEVBQUUsQ0FBQztJQTRCN0IsQ0FBQztJQTNCQyxHQUFHLENBQUMsSUFBWSxFQUFFLENBQVM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0ssSUFBSTs7WUFDUixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTt3QkFDeEQsT0FBTyxFQUFFLENBQUM7b0JBQ1osQ0FBQyxDQUFDO2dCQUNKLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQztZQUNGLElBQUc7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDWDtZQUNELE9BQU0sQ0FBQyxFQUFDO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEI7UUFDSCxDQUFDO0tBQUE7SUFDRCxJQUFJLENBQUMsSUFBVyxFQUFDLE1BQWE7UUFDNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsS0FBSyxFQUFFO1FBQ1QsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQztDQUNGO0FBN0JELHNCQTZCQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDRCxpRkFBd0M7QUFXeEMsSUFBSyxTQUtKO0FBTEQsV0FBSyxTQUFTO0lBQ1oseUNBQUk7SUFDSiwyQ0FBSztJQUNMLHFDQUFFO0lBQ0YseUNBQUk7QUFDTixDQUFDLEVBTEksU0FBUyxLQUFULFNBQVMsUUFLYjtBQUVELFNBQWdCLGlCQUFpQixDQUFDLENBQWdCLEVBQUMsSUFBd0IsRUFBQyxZQUFxQixFQUFFO0lBQ2pHLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RHLENBQUM7QUFGRCw4Q0FFQztBQUVELFNBQWdCLG9CQUFvQixDQUFDLENBQWdCLEVBQUMsSUFBd0IsRUFBQyxZQUFxQixFQUFFO0lBQ3BHLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDM0YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQjtLQUNGO0lBQ0QsT0FBTyxPQUFPO0FBQ2hCLENBQUM7QUFSRCxvREFRQztBQUNELGtDQUFrQztBQUNsQyxTQUFnQixnQkFBZ0IsQ0FBQyxDQUFnQixFQUFFLElBQXlCLEVBQUUsU0FBZ0I7SUFDNUYsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDbEIsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLFNBQVMsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvRCxPQUFPLENBQUMsQ0FBQztTQUNWO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFQRCw0Q0FPQztBQUVELFNBQVMsWUFBWSxDQUFDLFFBQWUsRUFBQyxHQUFpQixFQUFDLElBQXdCLEVBQUUsU0FBZ0IsRUFBQyxHQUFhO0lBQzlHLElBQUksU0FBUyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkQsSUFBRyxTQUFTLElBQUksSUFBSSxFQUFDO1FBQ25CLE9BQU8sUUFBUSxDQUFDO0tBQ2pCO1NBQ0c7UUFDRixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSyxDQUFDLElBQUksRUFBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBa0IsQ0FBQztRQUN4QyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsS0FBa0IsQ0FBQztRQUM5QyxJQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RjthQUNJLElBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUM7WUFDN0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVGO2FBQ0ksSUFBRyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksRUFBQztZQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUY7YUFDSSxJQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUFDO1lBQzFCLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RjtLQUNGO0FBQ0gsQ0FBQztBQUVELFNBQWdCLHdCQUF3QixDQUFDLE1BQW1CLEVBQUMsSUFBd0I7SUFDbkYsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNqQixJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFDaEIsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQWtCLENBQUM7SUFDbkMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUM7UUFDSCxFQUFFLENBQUMsS0FBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQWdCLEVBQUUsQ0FBQyxLQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN6RCxFQUFFLENBQUMsS0FBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQWdCLEVBQUUsQ0FBQyxLQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyRSxPQUFPO0tBQ1I7SUFDRCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7UUFDYixJQUFJLEdBQUcsR0FBRztZQUNSLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBRyxLQUFLLEdBQUMsQ0FBQztZQUN2QyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1NBQ2xCLENBQUM7UUFDRixJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRSxJQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUM7WUFDVCxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7U0FDdEI7YUFDRztZQUNGLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjtLQUNGO1NBQ0ksSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ2xCLElBQUksR0FBRyxHQUFHO1lBQ1IsQ0FBQyxFQUFFLEtBQUssR0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBQyxDQUFDO1lBQ3ZDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUs7WUFDakIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1NBQ2xCO1FBQ0QsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBRyxHQUFHLEdBQUcsQ0FBQyxFQUFDO1lBQ1QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1NBQ3RCO2FBQ0c7WUFDRixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkI7S0FDRjtJQUNELElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtRQUNiLElBQUksR0FBRyxHQUFHO1lBQ1IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFDLENBQUM7WUFDeEMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLO1lBQ2YsTUFBTSxFQUFFLEtBQUs7U0FDZDtRQUNELElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLElBQUcsR0FBRyxHQUFHLENBQUMsRUFBQztZQUNULEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUN0QjthQUNHO1lBQ0YsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO0tBQ0Y7U0FDSSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxHQUFHLEdBQUc7WUFDUixDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsRUFBRSxLQUFLLEdBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUMsQ0FBQztZQUN4QyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUs7WUFDZixNQUFNLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSztTQUNuQjtRQUNELElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUcsR0FBRyxHQUFHLENBQUMsRUFBQztZQUNULEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUN0QjthQUNHO1lBQ0YsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO0tBQ0Y7QUFDSCxDQUFDO0FBdkVELDREQXVFQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJRCxnRUFBNEY7QUEyQjVGLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0MsU0FBZ0Isa0JBQWtCLENBQUMsSUFBa0I7SUFDbkQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1FBQ25DLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksR0FBRyxHQUFpQjtZQUN0QixDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDVCxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDVCxNQUFNLEVBQUMsQ0FBQztZQUNSLEtBQUssRUFBQyxDQUFDO1NBQ1IsQ0FBQztRQUVKLElBQUksQ0FBUSxDQUFDO1FBQ2IsSUFBRyxXQUFLLEVBQUM7WUFDUCxJQUFHLGFBQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLGNBQWMsRUFBQztnQkFDM0MsQ0FBQyxHQUFHLENBQUMsR0FBRyxtQkFBVyxDQUFDLENBQUM7YUFDdEI7aUJBQ0ksSUFBRyxDQUFDLFlBQU0sSUFBSSxhQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxRQUFRLEVBQUM7Z0JBQ3JELENBQUMsR0FBRSxDQUFDLEdBQUcsU0FBUyxDQUFDO2FBQ2xCO2lCQUNHO2dCQUNGLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDUjtTQUNGO2FBQ0c7WUFDRixDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1NBQ3BCO1FBQ0MsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDN0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUcsUUFBUSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDLElBQUksRUFBQztnQkFDbEcsSUFBRyxRQUFRLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBQztvQkFDNUIsSUFBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxFQUFDO3dCQUNyQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ3JCO2lCQUNGO3FCQUNHO29CQUNGLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckI7YUFDRjtTQUNGO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQXZDRCxnREF1Q0M7QUFHRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDekMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRW5CLElBQUksQ0FBUSxDQUFDO0lBQ2IsSUFBRyxXQUFLLEVBQUM7UUFDUCxJQUFHLGFBQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLGNBQWMsRUFBQztZQUMzQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLG1CQUFXLENBQUMsQ0FBQztTQUN0QjthQUNJLElBQUcsQ0FBQyxZQUFNLElBQUksYUFBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksUUFBUSxFQUFDO1lBQ3JELENBQUMsR0FBRSxDQUFDLEdBQUcsU0FBUyxDQUFDO1NBQ2xCO2FBQ0c7WUFDRixDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1I7S0FDRjtTQUNHO1FBQ0YsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztLQUNwQjtJQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzFHLElBQUcsUUFBUSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFDO2dCQUNyQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7aUJBQ0ksSUFBRyxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUM7Z0JBQzVDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNyQztZQUNELFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLElBQUksRUFBRTtZQUM1SyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUNJLElBQUcsUUFBUSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUM7WUFDakwsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO1lBQzFCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO2dCQUM5QixJQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxFQUFFLEVBQUM7b0JBQzlCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDcEIsTUFBTTtpQkFDUDthQUNGO1NBQ0Y7S0FDRDtBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUV2QyxJQUFJLENBQVEsQ0FBQztJQUNiLElBQUcsV0FBSyxFQUFDO1FBQ1AsSUFBRyxhQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxjQUFjLEVBQUM7WUFDM0MsQ0FBQyxHQUFHLENBQUMsR0FBRyxtQkFBVyxDQUFDLENBQUM7U0FDdEI7YUFDSSxJQUFHLENBQUMsWUFBTSxJQUFJLGFBQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLFFBQVEsRUFBQztZQUNyRCxDQUFDLEdBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUNsQjthQUNHO1lBQ0YsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNSO0tBQ0Y7U0FDRztRQUNGLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7S0FDcEI7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUN4RyxJQUFHLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLElBQUksRUFBQztnQkFDckMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JCO2lCQUNJLElBQUcsUUFBUSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFDO2dCQUM1QyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDckM7WUFDRCxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMxQjtRQUNELElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDL0ssUUFBUSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDNUI7YUFDSSxJQUFHLFFBQVEsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFDO1lBQ3JMLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUMxQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztnQkFDOUIsSUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsRUFBRSxFQUFDO29CQUM5QixRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ3BCLE1BQU07aUJBQ1A7YUFDRjtTQUNGO0tBQ0Y7QUFDSCxDQUFDLENBQUM7QUFNUyxpQkFBUyxHQUFhLEVBQUUsQ0FBQztBQUVwQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDbkMsSUFBSSxJQUFXLENBQUM7SUFFaEIsSUFBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztRQUNkLElBQUksR0FBRyxVQUFVLENBQUM7S0FDbkI7U0FDSSxJQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1FBQ25CLElBQUksR0FBRyxZQUFZLENBQUM7S0FDckI7SUFFRCxJQUFJLENBQVEsQ0FBQztJQUNiLElBQUcsV0FBSyxFQUFDO1FBQ1AsSUFBRyxhQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxjQUFjLEVBQUM7WUFDM0MsQ0FBQyxHQUFHLENBQUMsR0FBRyxtQkFBVyxDQUFDLENBQUM7U0FDdEI7YUFDSSxJQUFHLENBQUMsWUFBTSxJQUFJLGFBQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLFFBQVEsRUFBQztZQUNyRCxDQUFDLEdBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUNsQjthQUNHO1lBQ0YsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNSO0tBQ0Y7U0FDRztRQUNGLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7S0FDcEI7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDMUQsSUFBRyxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUM7Z0JBQ3JDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtTQUNGO0tBQ0Y7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDdkMsaUJBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBRXpCLElBQUksQ0FBUSxDQUFDO0lBQ2IsSUFBRyxXQUFLLEVBQUM7UUFDUCxJQUFHLGFBQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLGNBQWMsRUFBQztZQUMzQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLG1CQUFXLENBQUMsQ0FBQztTQUN0QjthQUNJLElBQUcsQ0FBQyxZQUFNLElBQUksYUFBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksUUFBUSxFQUFDO1lBQ3JELENBQUMsR0FBRSxDQUFDLEdBQUcsU0FBUyxDQUFDO1NBQ2xCO2FBQ0c7WUFDRixDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1I7S0FDRjtTQUNHO1FBQ0YsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztLQUNwQjtJQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ3RGLElBQUcsUUFBUSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFDO2dCQUNyQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7aUJBQ0ksSUFBRyxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUM7Z0JBQzVDLEtBQUksSUFBSSxDQUFDLElBQUksWUFBWSxFQUFDO29CQUN4QixJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUM7d0JBQzFCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUNoQixNQUFNO3FCQUNQO2lCQUNGO2FBQ0Y7WUFDRCxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMxQjtLQUNGO0FBRUgsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3JDLGlCQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUUxQixJQUFJLENBQVEsQ0FBQztJQUNiLElBQUcsV0FBSyxFQUFDO1FBQ1AsSUFBRyxhQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxjQUFjLEVBQUM7WUFDM0MsQ0FBQyxHQUFHLENBQUMsR0FBRyxtQkFBVyxDQUFDLENBQUM7U0FDdEI7YUFDSSxJQUFHLENBQUMsWUFBTSxJQUFJLGFBQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLFFBQVEsRUFBQztZQUNyRCxDQUFDLEdBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUNsQjthQUNHO1lBQ0YsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNSO0tBQ0Y7U0FDRztRQUNGLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7S0FDcEI7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDcEYsSUFBRyxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzNCO2lCQUNJLElBQUcsUUFBUSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFDO2dCQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO29CQUM5QixJQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxFQUFFLEVBQUM7d0JBQzlCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDcEIsTUFBTTtxQkFDUDtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtBQUVILENBQUMsQ0FBQztBQUNGLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3pDLElBQUksSUFBSSxHQUFJLENBQUMsQ0FBQyxNQUE0QixDQUFDLHFCQUFxQixFQUFFLENBQUU7SUFFcEUsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNYLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsZ0NBQWdDO0lBQzNELENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBRSxnQ0FBZ0M7QUFFN0QsQ0FBQyxDQUFDO0FBRUYsSUFBWSxLQUdYO0FBSEQsV0FBWSxLQUFLO0lBQ2YsbUNBQUs7SUFDTCx5Q0FBUTtBQUNWLENBQUMsRUFIVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFHaEI7QUFzQkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsSUFBSSxLQUFLLEdBQVksRUFBRSxDQUFDO0FBQ2IsbUJBQVcsR0FBVSxFQUFFLENBQUM7QUFDbkMsSUFBSSxVQUFVLEdBQWMsRUFBRSxDQUFDO0FBQy9CLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztBQUVuQixJQUFJLFNBQVMsR0FBZSxFQUFFO0FBRTlCLElBQUksWUFBWSxHQUFzQixFQUFFLENBQUM7QUFFekMsU0FBZ0IsVUFBVSxDQUFDLE1BQXdCLEVBQUMsTUFBYTtJQUMvRCxJQUFJLE1BQU0sR0FBRywyQkFBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFDLDJCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO0lBQzdGLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUMsMkJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDL0YsT0FBTyxDQUFDO1FBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDO1FBQy9JLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBQyxNQUFNLENBQUMsR0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekosSUFBSSxFQUFDO1lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLE1BQU0sR0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDNUQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQyxHQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUN4RTtLQUNGLENBQUM7QUFDSixDQUFDO0FBWkQsZ0NBWUM7QUFFRCxTQUFnQixrQkFBa0IsQ0FBQyxDQUFRO0lBQ3pDLEtBQUksSUFBSSxDQUFDLElBQUksWUFBWSxFQUFDO1FBQ3hCLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFDO1lBQ2pFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDZixJQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBQztZQUN0QixDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNiO0tBQ0Y7QUFDSCxDQUFDO0FBWEQsZ0RBV0M7QUFFRCxTQUFnQixNQUFNLENBQUMsT0FBYztJQUNuQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztRQUN0QyxJQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksT0FBTyxFQUFDO1lBQzVCLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU07U0FDUDtLQUNGO0FBRUgsQ0FBQztBQVJELHdCQVFDO0FBRUQsSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0lBQ25CLHlDQUFJO0lBQ0osNkNBQU07QUFDUixDQUFDLEVBSFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFHcEI7QUFFRCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDWCxTQUFnQixJQUFJLENBQUMsT0FBYyxFQUFDLElBQWlCLEVBQUMsSUFBYyxFQUFDLFFBQWUsRUFBQyxNQUFvQjtJQUN2RyxJQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sRUFBQztRQUNoQyxJQUFJLENBQUMsR0FBUTtZQUNYLEdBQUcsRUFBQyxPQUFPO1lBQ1gsSUFBSSxFQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ2hCLEVBQUU7WUFDRixRQUFRLEVBQUMsSUFBSTtZQUNiLEdBQUcsRUFBQyxNQUFNO1lBQ1YsT0FBTyxFQUFDLElBQUk7WUFDWixRQUFRLEVBQUMsS0FBSztZQUNkLFFBQVE7U0FDVCxDQUFDO1FBQ0YsSUFBRyxJQUFJLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBQztZQUMxQixDQUFDLENBQUMsWUFBWSxHQUFHO2dCQUNmLElBQUksRUFBQyxDQUFDO2dCQUNOLEtBQUssRUFBQyxDQUFDO2dCQUNQLFFBQVE7Z0JBQ1IsTUFBTSxFQUFDLEtBQUs7YUFDYjtZQUNELFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUVuQjtTQUNHO1FBQ0YsSUFBSSxDQUFDLEdBQVE7WUFDWCxHQUFHLEVBQUMsT0FBTztZQUNYLElBQUksRUFBQyxLQUFLLENBQUMsUUFBUTtZQUNuQixFQUFFO1lBQ0YsUUFBUSxFQUFDLElBQUk7WUFDYixPQUFPLEVBQUMsSUFBSTtZQUNaLFFBQVEsRUFBQyxLQUFLO1lBQ2QsUUFBUTtTQUNUO1FBQ0QsSUFBRyxJQUFJLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBQztZQUMxQixDQUFDLENBQUMsWUFBWSxHQUFHO2dCQUNmLElBQUksRUFBQyxDQUFDO2dCQUNOLEtBQUssRUFBQyxDQUFDO2dCQUNQLFFBQVE7Z0JBQ1IsTUFBTSxFQUFDLEtBQUs7YUFDYjtZQUNELFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQjtJQUNELEVBQUUsRUFBRSxDQUFDO0lBQ0wsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLENBQUM7QUEvQ0Qsb0JBK0NDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNVhELE1BQWEsR0FBRztJQUFoQjtRQUNFLHFCQUFnQixHQUF1QixFQUFFLENBQUM7UUFDMUMsa0JBQWEsR0FBZSxFQUFFLENBQUM7SUFTakMsQ0FBQztJQVJDLE1BQU0sQ0FBQyxDQUFRO1FBQ2IsS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUM7WUFDakMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNiO1FBQ0QsS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFDO1lBQzlCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDYjtJQUNILENBQUM7Q0FDRjtBQVhELGtCQVdDO0FBRUQsTUFBYSxJQUFJO0lBR2YsWUFBWSxDQUFXLEVBQUMsQ0FBZ0I7UUFDdEMsSUFBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDVixDQUFDLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBUTtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsT0FBTyxDQUFDLENBQVE7UUFDZCxJQUFJLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hELE9BQU87WUFDTCxJQUFJO1lBQ0osS0FBSztZQUNMLElBQUk7WUFDSixJQUFJO1lBQ0osU0FBUztZQUNULEtBQUs7U0FDTixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBM0JELG9CQTJCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFRCw0RUFBb0Q7QUFHcEQsa0ZBQW1FO0FBQ25FLHlFQUE4QjtBQVE5QixTQUFnQixlQUFlLENBQUMsTUFBYyxFQUFFLE1BQWM7SUFDNUQsSUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdEQsSUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdEQsT0FBTztRQUNMLENBQUMsRUFBRSxLQUFLO1FBQ1IsQ0FBQyxFQUFFLEtBQUs7S0FDVDtBQUNILENBQUM7QUFQRCwwQ0FPQztBQUVELFNBQWdCLEtBQUssQ0FBQyxDQUFzQixFQUFFLEVBQVU7SUFDdEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNqQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNiO0tBQ0Y7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBUEQsc0JBT0M7QUFFRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFVaEIsTUFBTSxVQUFVO0lBQWhCO1FBQ0UsZUFBVSxHQUFpQixFQUFFLENBQUM7UUFDOUIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBR3RCLGNBQVMsR0FBVyxLQUFLLENBQUM7SUFnQzVCLENBQUM7SUEvQkMsR0FBRyxDQUFDLElBQVksRUFBRSxDQUEwQixFQUFFLE1BQWM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsSUFBSSxDQUFDLElBQVksRUFBRSxRQUFvQjtRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxPQUFPLENBQUMsQ0FBUztRQUNmLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksTUFBTSxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksS0FBSyxDQUFDO1FBQ1YsS0FBSyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMxRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9HLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakM7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxNQUFNLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztTQUM1QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDRjtBQVNELElBQUssVUFHSjtBQUhELFdBQUssVUFBVTtJQUNiLHlDQUFHO0lBQ0gsK0NBQU07QUFDUixDQUFDLEVBSEksVUFBVSxLQUFWLFVBQVUsUUFHZDtBQUVELE1BQWEsR0FBRztJQThCZCxZQUFZLFFBQWlCLEVBQUMsUUFBUSxHQUFDLENBQUMsRUFBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLGNBQWM7UUE3QnBFLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFHaEIsZ0JBQVcsR0FBRyxvQkFBVyxDQUFDLE1BQU0sQ0FBQztRQUdqQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBSTNCLFNBQUksR0FBWSxFQUFFLENBQUM7UUFDbkIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsZUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDOUIsVUFBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBVSxDQUFDLENBQUM7UUFHdkIsWUFBTyxHQUFVLENBQUMsQ0FBQztRQVlqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsT0FBTyxFQUFFLENBQUM7UUFDVixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQWZELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELG1CQUFtQjtJQUVuQixDQUFDO0lBQ0QsY0FBYztJQUVkLENBQUM7SUFRRCxJQUFJO1FBQ0YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDeEIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQVMsRUFBRTtnQkFDckIsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUM1QixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsUUFBUSxDQUFDLENBQWM7UUFDckIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQTZCLENBQUM7UUFDM0MsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQTZCLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlHLENBQUM7SUFDRCxZQUFZLENBQUMsQ0FBZTtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFtQixDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELGlCQUFpQixDQUFDLFFBQWlCO1FBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUE2QixDQUFDO1FBQy9DLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztlQUM3RCxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUU7U0FDekc7UUFDRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7ZUFDN0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFO1lBQ25FLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUU7U0FDMUc7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxZQUFZLENBQUMsR0FBVyxFQUFFLENBQVksRUFBRSxJQUFrQixFQUFFLFFBQVEsR0FBRyxDQUFDO1FBQ3RFLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtZQUNuQixJQUFJLENBQUMsR0FBRyxlQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO2FBQ0k7WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7SUFDRCxpQkFBaUI7SUFFakIsQ0FBQztJQUNELE1BQU07UUFDSixLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDeEIsaUJBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNYO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxlQUFlLENBQUMsQ0FBZ0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBWTtJQUVuQixDQUFDO0lBQ0Qsc0JBQXNCO1FBQ3BCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUE2QixDQUFDO1FBQzVDLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNiLE9BQU87Z0JBQ0wsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDZixDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNmLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTztnQkFDdEMsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPO2FBQ3pDO1NBQ0Y7YUFDRztZQUNGLE9BQU87Z0JBQ0wsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDZixDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNmLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSztnQkFDaEIsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNO2FBQ25CO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsdUJBQXVCO1FBQ3JCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUE2QixDQUFDO1FBQzVDLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNiLE9BQU8sQ0FBQztvQkFDTixDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNmLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2YsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPO29CQUN0QyxNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ3pDLENBQUM7U0FDSDthQUNHO1lBQ0YsT0FBTyxDQUFDO29CQUNOLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2YsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDZixLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTztvQkFDL0IsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ2xDLENBQUM7U0FDSDtJQUNILENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxDQUFnQjtRQUNoQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBNkIsQ0FBQztRQUM1QyxJQUFJLFNBQVMsR0FBRyxLQUFLLEVBQUUsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ2QsSUFBSSxHQUFHO2dCQUNMLFFBQVEsRUFBQyxDQUFDO2dCQUNWLFFBQVEsRUFBQyxDQUFDO2dCQUNWLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSztnQkFDaEIsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNO2FBQ25CO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsR0FBRztZQUNQLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDdEQsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN2RCxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3RELE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxJQUFJLEdBQUcsR0FBRztZQUNSLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDekIsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUMxQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9GLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDbEI7YUFDRztZQUNGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFDO1lBQ3RHLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDbEI7YUFDRztZQUNGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLFNBQVMsSUFBSSxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELGFBQWEsQ0FBQyxJQUFXLEVBQUMsTUFBZSxFQUFDLFFBQWUsRUFBQyxLQUFZO1FBQ3BFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQTZCLENBQUM7UUFDNUMsSUFBSSxjQUFjLEdBQVk7WUFDNUIsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUMsS0FBSyxDQUFDO0lBQ3hELENBQUM7SUFDRCxZQUFZLENBQUMsSUFBVztRQUN0QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBSSxLQUF5QixDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDeEIsS0FBSyxHQUFHLFFBQVE7YUFDZDtZQUNGLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQztTQUNuQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUE2QixDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUM1QixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2hDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtnQkFDNUIsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO2FBQzFDO1lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRTtnQkFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQ3hDO1lBQ0QsT0FBTztnQkFDTCxNQUFNLEVBQUU7b0JBQ04sWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO29CQUMvQixJQUFJLEVBQUUsQ0FBQztvQkFDUCxHQUFHLEVBQUUsQ0FBQztvQkFDTixZQUFZLEVBQUUsWUFBWTtvQkFDMUIsYUFBYSxFQUFFLGFBQWE7b0JBQzVCLE9BQU8sRUFBQyxDQUFDO2lCQUNWO2dCQUNELENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakIsQ0FBQztTQUNIO1FBQ0QsT0FBTztZQUNMLE1BQU0sRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDcEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pCLENBQUM7SUFDSixDQUFDOztBQWxPSCxrQkFtT0M7QUEvTVEsa0JBQWMsR0FBVyxFQUFFLENBQUM7QUF1TnJDLE1BQWEsYUFBaUIsU0FBUSxHQUFNO0lBTTFDLFlBQVksR0FBWTtRQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFOYixZQUFPLEdBQWtCLEVBQUUsQ0FBQztRQUM1QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFlBQU8sR0FBc0IsRUFBRSxDQUFDO0lBR2hDLENBQUM7SUFDRCxJQUFJO1FBQ0Ysa0RBQWtEO1FBQ2xELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRSxFQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDSyxrQkFBa0I7O1lBQ3RCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBTyxPQUFPLEVBQUMsTUFBTSxFQUFDLEVBQUU7Z0JBQ3pDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztvQkFDNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNqQjtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RCxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsRUFBQztRQUVKLENBQUM7S0FBQTtJQUNELGdCQUFnQjtRQUNkLElBQUksUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFFLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9ELFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFFLEVBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDckMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNELGdCQUFnQixDQUFDLEdBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRCxRQUFRLENBQUMsQ0FBYyxFQUFDLElBQUksR0FBQyxJQUFJLENBQUMsT0FBTztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELHVCQUF1QjtRQUNyQixJQUFJLEdBQUcsR0FBbUIsRUFBRSxDQUFDO1FBQzdCLEtBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRSxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUM7WUFDN0QsSUFBSSxXQUFXLEdBQUcsR0FBRyxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFDaEQsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFDO2dCQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7YUFDMUI7aUJBQ0c7Z0JBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN2QjtTQUNGO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0QsTUFBTTtRQUNKLEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBQztZQUN4QixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDWjtRQUNELEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBQztZQUN4QixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBVztRQUVoQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDO1lBQ3pDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0lBRUgsQ0FBQztJQUNELGlCQUFpQixDQUFDLENBQWdCO1FBQ2hDLEtBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBQztZQUMxQixJQUFHLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxLQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFDeEIsSUFBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGO0FBL0VELHNDQStFQztBQUdELE1BQWEsVUFBVTtJQUF2QjtRQUNFLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFFbEIsQ0FBQztDQUFBO0FBSEQsZ0NBR0M7QUFFRCxNQUFhLFdBQWUsU0FBUSxHQUFNO0lBQTFDOztRQUNFLFlBQU8sR0FBRyxJQUFJO0lBQ2hCLENBQUM7Q0FBQTtBQUZELGtDQUVDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaGFELFNBQWdCLFVBQVUsQ0FBQyxHQUFVLEVBQUUsR0FBVTtJQUMvQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3hELENBQUM7QUFGRCxnQ0FFQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RELGdFQUErQztBQXVDL0MsTUFBYSxNQUFNO0lBR2pCLFlBQVksS0FBdUIsRUFBRSxDQUFXO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxPQUFPLEVBQUMsS0FBSyxDQUFDLE9BQU87WUFDckIsUUFBUSxFQUFFO2dCQUNSLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPO2dCQUMxQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTzthQUMzQjtZQUNELFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixRQUFRLEVBQUU7Z0JBQ1IsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDTCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUs7Z0JBQ3ZDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTTthQUMzQztZQUNELEtBQUssRUFBQyxLQUFLLENBQUMsS0FBSztZQUNqQixHQUFHLEVBQUMsU0FBUztTQUNkO0lBQ0gsQ0FBQztJQUNELElBQUksQ0FBQyxDQUFDLENBQVM7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFTO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBRUY7QUFsQ0Qsd0JBa0NDO0FBd0JELElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQiw2Q0FBSTtJQUNKLGlEQUFNO0lBQ04sNkNBQUk7SUFDSiwyREFBVztBQUNiLENBQUMsRUFMVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUt0QjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDVyxxQkFBYSxHQUFHLENBQUMsQ0FBZSxFQUFDLENBQWMsRUFBQyxJQUFXLEVBQUUsRUFBRTtJQUMxRSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUMzQixLQUFLLElBQUksQ0FBQyxJQUFJLFFBQVEsRUFBQztZQUNyQix1QkFBZSxDQUFDLENBQUMsRUFBRTtnQkFDakIsTUFBTSxFQUFDLENBQUMsQ0FBQyxNQUFNO2dCQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO2dCQUNwQixLQUFLLEVBQUMsQ0FBQyxDQUFDLE9BQU87YUFDaEIsQ0FBQyxDQUFDO1NBQ0o7S0FDRjtTQUNJO1FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxRQUE2QixDQUFDO1FBQ3RELElBQUcsQ0FBQyxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFDO1lBQ3JDLHVCQUFlLENBQUMsQ0FBQyxFQUFFO2dCQUNqQixNQUFNLEVBQUUsaUJBQWlCLENBQUMsTUFBTTtnQkFDaEMsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3RCLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2dCQUN0QixRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVE7Z0JBQ3BCLEtBQUssRUFBQyxDQUFDLENBQUMsT0FBTzthQUNoQixDQUFDLENBQUM7U0FDSjthQUFNLElBQUcsQ0FBQyxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFDO1NBRTNDO0tBQ0Y7QUFDSCxDQUFDO0FBRVkseUJBQWlCLEdBQUcsQ0FBQyxDQUFnQixFQUFFLENBQWMsRUFBRSxFQUFFO0lBQ3BFLElBQUksT0FBTyxHQUFHLDJCQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDO0lBQzdDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuRCxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ3BCLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN2RTtTQUNJO1FBQ0gsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JEO0FBQ0gsQ0FBQztBQUVZLHFCQUFhLEdBQUcsQ0FBQyxDQUFlLEVBQUMsQ0FBYSxFQUFFLEVBQUU7SUFDN0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN0QixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9DLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM5RSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3hELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUksSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxPQUFPLENBQUMs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QUFDO0tBQUE7SUFDSyxRQUFRLENBQUMsQ0FBZTs7WUFFNUIsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDZCxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBQztnQkFDdkMsT0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztvQkFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUM3QzthQUNGO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlCLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3RCLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksU0FBUyxFQUFDO2dCQUMvQixhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQztZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7WUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDO0tBQUE7Q0FDRjtBQWphRCxvQkFpYUMiLCJmaWxlIjoidmFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHt2ZWxvY2l0eSxvYmpfc3RhdGUscm9vbV9zdGF0ZX0gZnJvbSBcIi4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge2dhbWUsdmlld3BvcnR9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHtDYW1lcmF9IGZyb20gXCIuLi9saWIvcmVuZGVyXCI7XHJcbmltcG9ydCB7cm9vbXN9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHtPdmVyd29ybGR9IGZyb20gXCIuL3Jvb21zL092ZXJ3b3JsZC9PdmVyd29ybGRcIjtcclxubGV0IGNhbnZhc19lbGVtZW50OkhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG5leHBvcnQgbGV0IGcgPSBuZXcgZ2FtZShjYW52YXNfZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIikse30sIGFzeW5jIChnOmdhbWU8e30+KT0+e1xyXG4gIGcuc3RhdGUuY2FtZXJhcyA9IFtcclxuICAgIG5ldyBDYW1lcmEoe1xyXG4gICAgICB4OjAsXHJcbiAgICAgIHk6MCxcclxuICAgICAgZGltZW5zaW9uczp7XHJcbiAgICAgICAgaGVpZ2h0OnZpZXdwb3J0LmhlaWdodCxcclxuICAgICAgICB3aWR0aDp2aWV3cG9ydC53aWR0aCAqIDQvNVxyXG4gICAgICB9LFxyXG4gICAgICBzY2FsaW5nOjAuNSxcclxuICAgICAgZGVidWc6ZmFsc2VcclxuICAgIH1cclxuICAgICx7XHJcbiAgICAgIHg6MSxcclxuICAgICAgeTowLFxyXG4gICAgICB3aWR0aDowLjgsXHJcbiAgICAgIGhlaWdodDoxXHJcbiAgICB9KSxcclxuICAgIG5ldyBDYW1lcmEoe1xyXG4gICAgICB4OjAsXHJcbiAgICAgIHk6MCxcclxuICAgICAgZGltZW5zaW9uczp7XHJcbiAgICAgICAgd2lkdGg6dmlld3BvcnQud2lkdGgvNSxcclxuICAgICAgICBoZWlnaHQ6dmlld3BvcnQuaGVpZ2h0XHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxpbmc6MC4yLFxyXG4gICAgICBkZWJ1ZzpmYWxzZVxyXG4gICAgfSx7XHJcbiAgICAgIHg6dmlld3BvcnQud2lkdGggKiA0LzUsXHJcbiAgICAgIHk6MCxcclxuICAgICAgd2lkdGg6MC4yLFxyXG4gICAgICBoZWlnaHQ6MVxyXG4gICAgfSlcclxuICBdXHJcbiAgbGV0IHBhdGggPSBcIi4vcm9vbXMvT3ZlcndvcmxkL092ZXJ3b3JsZC50c1wiO1xyXG4gIC8vY29uc29sZS5sb2coYXdhaXQgaW1wb3J0KHBhdGgpKTtcclxuICBnLmxvYWRSb29tKG5ldyBPdmVyd29ybGQoZykpO1xyXG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJvb21zKSk7XHJcbn0pO1xyXG5cclxuIiwiaW1wb3J0IHtwbGF0Zm9ybWVyX29iaixwbGF0X3N0YXRlfSBmcm9tIFwiLi9wbGF0Zm9ybWVyX29ialwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSxwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBleGVjX3R5cGUgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm94IGV4dGVuZHMgcGxhdGZvcm1lcl9vYmo8b2JqX3N0YXRlPntcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvYm94LnBuZ1wiXHJcbiAgY29sbGlzaW9uID0gdHJ1ZVxyXG4gIGhlaWdodCA9IDY0O1xyXG4gIHdpZHRoID0gNTAwO1xyXG4gIGdyYXZpdHkgPSBmYWxzZTtcclxuICBlbmVteSA9IGZhbHNlO1xyXG4gIHRhZ3MgPSBbXCJzdGF0aWNcIl1cclxuICBjb25zdHJ1Y3RvcihhOnBvc2l0aW9uLGI6bnVtYmVyKXtcclxuICAgIHN1cGVyKGEsYixCb3guZGVmYXVsdF9wYXJhbXMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcG9zaXRpb246YSxcclxuICAgICAgdmVsb2NpdHk6e1xyXG4gICAgICAgIHg6MCxcclxuICAgICAgICB5OjBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgY2xhc3MgVmVydEJveCBleHRlbmRzIEJveHtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvYm94Mi5wbmdcIjtcclxuICB3aWR0aCA9IDY0O1xyXG4gIGhlaWdodCA9IDUwMDtcclxufSIsImltcG9ydCB7cGxhdGZvcm1lcl9vYmosIHBsYXRfc3RhdGV9IGZyb20gXCIuL3BsYXRmb3JtZXJfb2JqXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHtyb3RhdGlvbl9sZW5ndGgsIG9ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgR29vbWJhIH0gZnJvbSBcIi4vZ29vbWJhXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuXHJcbmludGVyZmFjZSBidWxsZXRfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XHJcbiAgcm90YXRpb246bnVtYmVyLFxyXG4gIGRpc3RhbmNlOm51bWJlcixcclxuICBzcGVlZDpudW1iZXIsXHJcbiAgZGFtYWdlOm51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgcG9zaXRpb257XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1bGxldCBleHRlbmRzIG9iajxidWxsZXRfc3RhdGU+e1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9idWxsZXQucG5nXCI7XHJcbiAgaGVpZ2h0ID0gMjA7XHJcbiAgd2lkdGggPSAxMDtcclxuICBncmF2aXR5ID0gZmFsc2U7XHJcbiAgbWF4X2Rpc3RhbmNlID0gMjAwMDtcclxuICB0YWdzID0gW1wiYnVsbGV0XCJdO1xyXG4gIGNvbnN0cnVjdG9yKHg6cG9zaXRpb24sIGFuZ2xlOm51bWJlciwgaWQ6c3RyaW5nID0gdW5kZWZpbmVkKXtcclxuICAgIHN1cGVyKHgpO1xyXG4gICAgaWYoaWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcG9zaXRpb246eCxcclxuICAgICAgdmVsb2NpdHk6e1xyXG4gICAgICAgIHg6MCxcclxuICAgICAgICB5OjBcclxuICAgICAgfSxcclxuICAgICAgc3BlZWQ6MTAsXHJcbiAgICAgIHJvdGF0aW9uOmFuZ2xlLFxyXG4gICAgICBkaXN0YW5jZTowLFxyXG4gICAgICBkYW1hZ2U6NVxyXG4gICAgfVxyXG4gICAgdGhpcy5yb3RhdGlvbiA9IGFuZ2xlO1xyXG4gIH1cclxuICBzdGF0ZWYodGltZTpudW1iZXIpe1xyXG4gICAgdGhpcy5zdGF0ZS52ZWxvY2l0eSA9IHJvdGF0aW9uX2xlbmd0aCh0aGlzLnN0YXRlLnNwZWVkLHRoaXMuc3RhdGUucm90YXRpb24pO1xyXG4gICAgdGhpcy5zdGF0ZS5kaXN0YW5jZSArPSB0aGlzLnN0YXRlLnNwZWVkO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5kaXN0YW5jZSA+IHRoaXMubWF4X2Rpc3RhbmNlKXtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVnaXN0ZXJfY29udHJvbHMoKXtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm9ja2V0IGV4dGVuZHMgQnVsbGV0e1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9mb2xkZXIvcm9ja2V0LnBuZ1wiO1xyXG4gIGhlaWdodCA9IDY3O1xyXG4gIHdpZHRoID0gMTY7XHJcbiAgcGFydGljbGVfdGltZXIgPSAwO1xyXG4gIHBhcnRpY2xlX2ZyZXF1ZW5jeSA9IDU7XHJcbiAgbWF4X2Rpc3RhbmNlID0gNTAwMDtcclxuICB0YWdzID0gW1wiUm9ja2V0XCJdXHJcbiAgaGl0Ym94ID0ge1xyXG4gICAgeF9vZmZzZXQ6MCxcclxuICAgIHlfb2Zmc2V0OjAsXHJcbiAgICB3aWR0aDoxNixcclxuICAgIGhlaWdodDoxNlxyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcih4OnBvc2l0aW9uLGFuZ2xlOm51bWJlcil7XHJcbiAgICBzdXBlcih4LGFuZ2xlKTtcclxuICAgIHRoaXMuc3RhdGUuc3BlZWQgPSAxNTtcclxuICAgIHRoaXMuc3RhdGUuZGFtYWdlID0gMjA7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2F1ZGlvKCl7XHJcbiAgICB0aGlzLmF1ZGlvLmFkZChcImV4cGxvc2lvblwiLFwiLi9zb3VuZHMvZXhwbG9zaW9uMi5tcDNcIik7XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOm51bWJlcil7XHJcbiAgICBzdXBlci5zdGF0ZWYodGltZSk7XHJcbiAgICBpZih0aGlzLnBhcnRpY2xlX3RpbWVyID09IDApe1xyXG4gICAgICBsZXQgb2Zmc2V0ID0gcm90YXRpb25fbGVuZ3RoKDMwLHRoaXMucm90YXRpb24gKyAxODApO1xyXG4gICAgICB0aGlzLmVtaXRfcGFydGljbGUoXCJzbW9rZVwiLG9mZnNldCwgNDAwLCAxMik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhcnRpY2xlX3RpbWVyICs9IHRpbWU7XHJcbiAgICBpZih0aGlzLnBhcnRpY2xlX3RpbWVyID4gdGhpcy5wYXJ0aWNsZV9mcmVxdWVuY3kpe1xyXG4gICAgIHRoaXMucGFydGljbGVfdGltZXIgPSAwOyBcclxuICAgIH1cclxuICAgIGxldCByb29tID0gZy5zdGF0ZS5jdXJyZW50X3Jvb207XHJcbiAgICBsZXQgY29sbGlzaW9ucyA9IHJvb20uY2hlY2tfY29sbGlzaW9ucyh0aGlzLmdldF9mdWxsX2NvbGxpc2lvbl9ib3goKSxbXCJndW5cIixcInBsYXllclwiXSk7XHJcbiAgICBpZihjb2xsaXNpb25zLmxlbmd0aCA+IDApe1xyXG4gICAgICBmb3IobGV0IGNvbGxpc2lvbiBvZiBjb2xsaXNpb25zKXtcclxuICAgICAgICBsZXQgc3QgPSBjb2xsaXNpb24uc3RhdGUgYXMgdW5rbm93biBhcyBwbGF0X3N0YXRlO1xyXG4gICAgICAgIGlmKCg8cGxhdGZvcm1lcl9vYmo8cGxhdF9zdGF0ZT4+Y29sbGlzaW9uKS5zdGF0ZS5oZWFsdGgpe1xyXG4gICAgICAgICAgc3QuaGVhbHRoIC09IHRoaXMuc3RhdGUuZGFtYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb2xsaXNpb24udGFncy5pbmRleE9mKFwiZHVtbXlcIikgPiAtMSl7XHJcbiAgICAgICAgICBsZXQgZHVtbXkgPSBjb2xsaXNpb24gYXMgR29vbWJhO1xyXG4gICAgICAgICAgaWYoZHVtbXkuc3RhdGUuanVtcGluZyl7XHJcbiAgICAgICAgICAgIGR1bW15LnN0YXRlLnRpbWVzX2FpcnNob3QrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdGF0ZS5kaXN0YW5jZSA9IHRoaXMubWF4X2Rpc3RhbmNlO1xyXG4gICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgICBsZXQgZXhwbG9zaW9uX2NvbGxpc2lvbnMgPSByb29tLmNoZWNrX2NvbGxpc2lvbnMoe1xyXG4gICAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOjI1NixcclxuICAgICAgICBoZWlnaHQ6MjU2XHJcbiAgICAgIH0sW1wic3RhdGljXCJdKVxyXG4gICAgICBmb3IobGV0IGNvbGxpZGVyIG9mIGV4cGxvc2lvbl9jb2xsaXNpb25zKXtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKGNvbGxpZGVyKTtcclxuICAgICAgICBsZXQgbXVsdGlwbHllciA9IDEgLSBkaXN0YW5jZS8zMDA7XHJcbiAgICAgICAgaWYobXVsdGlwbHllciA8IDApXHJcbiAgICAgICAgICBtdWx0aXBseWVyID0gMDtcclxuICAgICAgICBsZXQgb19zdGF0ZSA9IGNvbGxpZGVyLnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICAgICAgICBsZXQgdmVsb2NpdGllcyA9IHJvdGF0aW9uX2xlbmd0aChtdWx0aXBseWVyICogMTAwLCB0aGlzLmFuZ2xlVG93YXJkcyhjb2xsaWRlcikpO1xyXG4gICAgICAgIG9fc3RhdGUudmVsb2NpdHkueCArPSB2ZWxvY2l0aWVzLng7XHJcbiAgICAgICAgb19zdGF0ZS52ZWxvY2l0eS55ICs9IHZlbG9jaXRpZXMueTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXRfcGFydGljbGUoXCJleHBsb3Npb25cIix7eDowLHk6MH0sNTAwLDApO1xyXG4gICAgICB0aGlzLmF1ZGlvLnBsYXkoXCJleHBsb3Npb25cIiwwLjIpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IHZlbG9jaXR5LCBvYmpfc3RhdGUsIHBvc2l0aW9uX2luaXQsIHN0YXRlX2Z1bmMscG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHsgc3ByaXRlLCBzcHJpdGVfZ2VuIH0gZnJvbSBcIi4uLy4uL2xpYi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgb2JqLCByb3RhdGlvbl9sZW5ndGgsIGNvbXBvc2l0ZV9vYmogfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybWVyX29iaiwgcGxhdGZvcm1lcl9vYmpfY29tcG9zaXRlLCBwbGF0X3N0YXRlIH0gZnJvbSBcIi4vcGxhdGZvcm1lcl9vYmpcIjtcclxuaW1wb3J0IHsgUG9sbF9Nb3VzZSwgZXhlY190eXBlIH0gZnJvbSBcIi4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4uLy4uL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgQmluZCB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHtUZXh0X05vZGUsVGV4dH0gZnJvbSBcIi4uLy4uL2xpYi9odWRcIjtcclxuaW1wb3J0IHsgT3ZlcndvcmxkIH0gZnJvbSBcIi4uL3Jvb21zL092ZXJ3b3JsZC9PdmVyd29ybGRcIjtcclxuaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9tYWluXCI7XHJcblxyXG5lbnVtIGRpcmVjdGlvbiB7XHJcbiAgbGVmdCxcclxuICByaWdodFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGdvb21iYV9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZSwgcGxhdF9zdGF0ZSB7XHJcbiAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXHJcbiAgdmVsb2NpdHk6IHZlbG9jaXR5LFxyXG4gIGp1bXBpbmc6IGJvb2xlYW4sXHJcbiAgdGltZXNfYWlyc2hvdDogbnVtYmVyLFxyXG4gIG1heF90aW1lc19haXJzaG90OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIGd1bl9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZSB7XHJcbiAgcm90YXRpb246IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGxheWVyX1BhcmFtc3tcclxuICBpZDpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIGNvbXBvc2l0ZV9vYmo8b2JqX3N0YXRlPntcclxuICBlbmVteSA9IHRydWU7XHJcbiAgY29uc3RydWN0b3IoYTogcG9zaXRpb24scm90YXRpb246bnVtYmVyLGQ6UGxheWVyX1BhcmFtcykge1xyXG4gICAgXHJcbiAgICBzdXBlcihhKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhLFxyXG4gICAgICB2ZWxvY2l0eToge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgQ29udHJvbGxlZFBsYXllcihhLCByb3RhdGlvbixkKSk7XHJcbiAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgR3VuKCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEd1biBleHRlbmRzIHBsYXRmb3JtZXJfb2JqPGd1bl9zdGF0ZT57XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2ZvbGRlci9ndW4ucG5nXCI7XHJcbiAgaGVpZ2h0ID0gNTA7XHJcbiAgd2lkdGggPSAyMDtcclxuICBjb2xsaXNpb24gPSBmYWxzZTtcclxuICByZW5kZXIgPSB0cnVlO1xyXG4gIHBsYXllcjogR29vbWJhO1xyXG4gIGdyYXZpdHkgPSBmYWxzZTtcclxuICBjdXJzb3I6IEN1cnNvcjtcclxuICB0YWdzID0gW1wiZ3VuXCJdXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihwb3NpdGlvbl9pbml0KCkucG9zaXRpb24sMCxHdW4uZGVmYXVsdF9wYXJhbXMpO1xyXG4gICAgdGhpcy5pZCA9IFwiZ3VuXCI7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb25faW5pdCgpLnBvc2l0aW9uLFxyXG4gICAgICB2ZWxvY2l0eTogcG9zaXRpb25faW5pdCgpLnZlbG9jaXR5LFxyXG4gICAgICByb3RhdGlvbjogLTFcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGVmKHQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMucGxheWVyKSB7XHJcbiAgICAgIGxldCBhbmdsZSA9IHRoaXMucGxheWVyLmFuZ2xlVG93YXJkcyh0aGlzLmN1cnNvcik7XHJcbiAgICAgIGxldCByb3QgPSByb3RhdGlvbl9sZW5ndGgoNTAsIGFuZ2xlKTtcclxuICAgICAgdGhpcy5yb3RhdGlvbiA9IGFuZ2xlO1xyXG4gICAgICB0aGlzLnN0YXRlLnJvdGF0aW9uID0gYW5nbGU7XHJcbiAgICAgIHRoaXMuc3RhdGUucG9zaXRpb24gPSB7XHJcbiAgICAgICAgeDogcm90LnggKyB0aGlzLnBsYXllci5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHJvdC55ICsgdGhpcy5wbGF5ZXIuc3RhdGUucG9zaXRpb24ueVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxldCByb29tID0gZy5nZXRSb29tKCk7XHJcbiAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wYXJlbnQuZ2V0X0l0ZW1zX2J5X1RhZyhcInBsYXllclwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIHRoaXMuY3Vyc29yID0gPEN1cnNvcj5yb29tLmdldE9iaihcImN1cnNvclwiKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3Vyc29yIGV4dGVuZHMgcGxhdGZvcm1lcl9vYmo8b2JqX3N0YXRlPntcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvY3Vyc29yLnBuZ1wiO1xyXG4gIGhlaWdodCA9IDY0O1xyXG4gIHdpZHRoID0gNjQ7XHJcbiAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICByZW5kZXIgPSB0cnVlO1xyXG4gIHNjYWxpbmcgPSAxO1xyXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHt4OjAseTowfSwwLHtpZDppZH0pO1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgICAgfSxcclxuICAgICAgdmVsb2NpdHk6IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0ZWYoKSB7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgZ29vbWJhX3BhcmFtc3tcclxuICBpZD86c3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHb29tYmEgZXh0ZW5kcyBwbGF0Zm9ybWVyX29iajxnb29tYmFfc3RhdGU+e1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9mb2xkZXIvcm9ib3QucG5nXCI7XHJcbiAgaGVpZ2h0ID0gMTQ5O1xyXG4gIHdpZHRoID0gMTQ5O1xyXG4gIHRhZ3MgPSBbXCJkdW1teVwiXVxyXG4gIGNvbGxpc2lvbiA9IHRydWU7XHJcbiAgaGVhbHRoX3RleHQ6IFRleHQ7XHJcbiAgY29uc3RydWN0b3IoYTpwb3NpdGlvbixiOm51bWJlcixjOmdvb21iYV9wYXJhbXMgPSBHb29tYmEuZGVmYXVsdF9wYXJhbXMpIHtcclxuICAgIHN1cGVyKGEsYixjKTtcclxuICAgIGlmIChjLmlkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmlkID0gYy5pZDtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLmxlZnQsXHJcbiAgICAgIHBvc2l0aW9uOmEsXHJcbiAgICAgIHZlbG9jaXR5OiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGp1bXBpbmc6IGZhbHNlLFxyXG4gICAgICBoZWFsdGg6IDEwMCxcclxuICAgICAgdGltZXNfYWlyc2hvdDogMCxcclxuICAgICAgbWF4X3RpbWVzX2FpcnNob3Q6IDBcclxuICAgIH1cclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KFwid2FsazFcIik7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2FuaW1hdGlvbnMoKSB7XHJcbiAgICBsZXQgc3ByaXRlcyA9IHNwcml0ZV9nZW4odGhpcy5zcHJpdGVfc2hlZXQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoXCJ3YWxrMVwiLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzBdXSxcclxuICAgICAgWzEwMCwgc3ByaXRlc1swXVsxXV0sXHJcbiAgICAgIFs0MDAsIHNwcml0ZXNbMF1bMF1dLFxyXG4gICAgICBbNTAwLCBzcHJpdGVzWzBdWzJdXVxyXG4gICAgXSwgODAwKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZChcIndhbGsyXCIsIFtcclxuICAgICAgWzAsIHNwcml0ZXNbMF1bNV1dLFxyXG4gICAgICBbMTAwLCBzcHJpdGVzWzBdWzRdXSxcclxuICAgICAgWzQwMCwgc3ByaXRlc1swXVs1XV0sXHJcbiAgICAgIFs1MDAsIHNwcml0ZXNbMF1bM11dXHJcbiAgICBdLCA4MDApXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKFwiaWRsZWxlZnRcIiwgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVswXV1cclxuICAgIF0sIDEpO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnaWRsZXJpZ2h0JywgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVs1XV1cclxuICAgIF0sIDEpO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnZmFsbGxlZnQnLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzZdXVxyXG4gICAgXSwgMSk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmYWxscmlnaHQnLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzddXVxyXG4gICAgXSwgMSlcclxuICB9XHJcbiAgcmVnaXN0ZXJfYXVkaW8oKSB7XHJcbiAgICB0aGlzLmF1ZGlvLmFkZChcInNsaW1lXCIsIFwiLi9zb3VuZHMvZ29vbWJhL3NsaW1lYmFsbC53YXZcIik7XHJcbiAgICB0aGlzLmF1ZGlvLmFkZChcImV4cGxvc2lvblwiLCBcIi4vc291bmRzL2V4cGxvc2lvbi5tcDNcIilcclxuICB9XHJcbiAgcmVuZGVyZih0OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmp1bXBpbmcpIHtcclxuICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuc3RhdGUuZGlyZWN0aW9uID09IGRpcmVjdGlvbi5sZWZ0ID8gXCJmYWxsbGVmdFwiIDogXCJmYWxscmlnaHRcIjtcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoYW5pbWF0aW9uKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA9PSAwICYmIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9PSAwKSB7XHJcbiAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PSBkaXJlY3Rpb24ubGVmdCA/IFwiaWRsZWxlZnRcIiA6IFwiaWRsZXJpZ2h0XCI7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KGFuaW1hdGlvbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghdGhpcy5hbmltYXRpb25zLmFuaW1hdGluZykge1xyXG4gICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT0gZGlyZWN0aW9uLmxlZnQgPyBcIndhbGsxXCIgOiBcIndhbGsyXCI7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KGFuaW1hdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VwZXIucmVuZGVyZih0KTtcclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6IG51bWJlcikge1xyXG4gICAgbGV0IHJvb20gPSBnLmdldFJvb20oKTtcclxuICAgIC8qXHJcbiAgICBpZighdGhpcy5oZWFsdGhfdGV4dCl7XHJcbiAgICAgIGxldCBuZXdfbm9kZSA9IG5ldyBUZXh0KHtcclxuICAgICAgICBwb3NpdGlvbjp7XHJcbiAgICAgICAgICB4OjAsXHJcbiAgICAgICAgICB5OjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpemU6MjAsXHJcbiAgICAgICAgc2NhbGluZzoxLFxyXG4gICAgICAgIGNvbG9yOlwid2hpdGVcIixcclxuICAgICAgICBmb250OlwiQWxhdGFcIixcclxuICAgICAgICBhbGlnbjpcImNlbnRlclwiXHJcbiAgICAgIH0sKCk9PlwiXCIrTWF0aC5mbG9vcih0aGlzLnN0YXRlLnBvc2l0aW9uLnkpKTtcclxuICAgICAgcm9vbS50ZXh0X25vZGVzLnB1c2gobmV3X25vZGUpO1xyXG4gICAgICB0aGlzLmhlYWx0aF90ZXh0ID0gbmV3X25vZGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuaGVhbHRoX3RleHQuc3RhdGUucG9zaXRpb24ueCA9IHRoaXMuc3RhdGUucG9zaXRpb24ueCArIDMwO1xyXG4gICAgdGhpcy5oZWFsdGhfdGV4dC5zdGF0ZS5wb3NpdGlvbi55ID0gdGhpcy5zdGF0ZS5wb3NpdGlvbi55ICsgMTAwO1xyXG4gICAgKi9cclxuICAgIGxldCBjdXJzb3IgPSByb29tLmdldE9iaihcImN1cnNvclwiKTtcclxuICAgIGlmICh0aGlzLmNvbGxpc2lvbikge1xyXG4gICAgICBpZiAocm9vbS5jaGVja19jb2xsaXNpb25zKHtcclxuICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IDEsXHJcbiAgICAgICAgeDogdGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHRoaXMuc3RhdGUucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0IC8gMiAtIDEsXHJcbiAgICAgIH0pLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmp1bXBpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXRlLm1heF90aW1lc19haXJzaG90ID0gTWF0aC5tYXgodGhpcy5zdGF0ZS50aW1lc19haXJzaG90LCB0aGlzLnN0YXRlLm1heF90aW1lc19haXJzaG90KTtcclxuICAgICAgICB0aGlzLnN0YXRlLnRpbWVzX2FpcnNob3QgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuanVtcGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPiAwKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9IHRoaXMuc3RhdGUudmVsb2NpdHkueSAtIDAuNCAqIDE2IC8gdGltZTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueSA8IDApXHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPCAwKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9IHRoaXMuc3RhdGUudmVsb2NpdHkueSArIDAuNCAqIDE2IC8gdGltZTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueSA+IDApXHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnggPiAwKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuZGlyZWN0aW9uID0gZGlyZWN0aW9uLnJpZ2h0O1xyXG4gICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggPSB0aGlzLnN0YXRlLnZlbG9jaXR5LnggLSAwLjQgKiAxNiAvIHRpbWU7O1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS54IDwgMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA8IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24ubGVmdDtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54ICsgMC40ICogMTYgLyB0aW1lOztcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA+IDApIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlZFBsYXllciBleHRlbmRzIEdvb21iYSB7XHJcbiAgdGFncyA9IFtcInBsYXllclwiXVxyXG4gIHJlZ2lzdGVyX2NvbnRyb2xzKCkge1xyXG4gICAgdGhpcy5iaW5kX2NvbnRyb2woXCJLZXlBXCIsIGV4ZWNfdHlwZS5yZXBlYXQsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA+IC0xMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5iaW5kX2NvbnRyb2woXCJLZXlBXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdGUuZGlyZWN0aW9uID0gZGlyZWN0aW9uLmxlZnQ7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCAtIDAuMTtcclxuICAgIH0pXHJcbiAgICB0aGlzLmJpbmRfY29udHJvbChcIm1vdXNlMGRvd25cIiwgZXhlY190eXBlLnJlcGVhdCwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmF1ZGlvLnBsYXkoXCJleHBsb3Npb25cIiwgMC40KTtcclxuICAgIH0sIDQwMCk7XHJcbiAgICB0aGlzLmJpbmRfY29udHJvbChcIktleVNcIiwgZXhlY190eXBlLnJlcGVhdCwgKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuY29sbGlzaW9uICYmIHRoaXMuc3RhdGUudmVsb2NpdHkueSA+IC0xMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9IHRoaXMuc3RhdGUudmVsb2NpdHkueSAtIDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5iaW5kX2NvbnRyb2woXCJLZXlXXCIsIGV4ZWNfdHlwZS5yZXBlYXQsICgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmNvbGxpc2lvbiAmJiB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPCAxMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9IHRoaXMuc3RhdGUudmVsb2NpdHkueSArIDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5iaW5kX2NvbnRyb2woXCJLZXlEXCIsIGV4ZWNfdHlwZS5yZXBlYXQsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA8IDEwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54ICsgMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJpbmRfY29udHJvbChcIktleURcIiwgZXhlY190eXBlLm9uY2UsICgpID0+IHtcclxuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24ucmlnaHQ7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCArIDAuMTtcclxuICAgIH0pXHJcbiAgICB0aGlzLmJpbmRfY29udHJvbChcIlNwYWNlXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5qdW1waW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ICs9IDI1O1xyXG4gICAgICAgIHRoaXMuYXVkaW8ucGxheShcInNsaW1lXCIsIDAuMSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBzdGF0ZWYodGltZTogbnVtYmVyKSB7XHJcbiAgICBzdXBlci5zdGF0ZWYodGltZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhbmRpbmdHb29tYmEgZXh0ZW5kcyBwbGF0Zm9ybWVyX29iajxnb29tYmFfc3RhdGU+e1xyXG4gIHNwcml0ZV91cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Qvc3JjL2dhbWUvb2JqZWN0cy9nb29tYmEucG5nXCI7XHJcbiAgaGVpZ2h0ID0gNjQ7XHJcbiAgd2lkdGggPSA2NDtcclxuICBjb2xsaXNpb24gPSB0cnVlO1xyXG4gIGVuZW15ID0gdHJ1ZTtcclxuICB0YWdzID0gW1wic3RhbmRlclwiXVxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBpZDogc3RyaW5nID0gdW5kZWZpbmVkKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIHgseVxyXG4gICAgfSwwLFN0YW5kaW5nR29vbWJhLmRlZmF1bHRfcGFyYW1zKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbi5sZWZ0LFxyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHgsXHJcbiAgICAgICAgeVxyXG4gICAgICB9LFxyXG4gICAgICB2ZWxvY2l0eToge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgICB9LFxyXG4gICAgICBqdW1waW5nOiBmYWxzZSxcclxuICAgICAgaGVhbHRoOiAxMDAsXHJcbiAgICAgIHRpbWVzX2FpcnNob3Q6IDAsXHJcbiAgICAgIG1heF90aW1lc19haXJzaG90OiAwXHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc3RhdGUuanVtcGluZykge1xyXG4gICAgICBsZXQgbW91c2VfcG9zaXRpb24gPSBQb2xsX01vdXNlKHRoaXMuZ2FtZS5zdGF0ZS5jYW52YXMsdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXNbMF0pO1xyXG4gICAgICBpZiAobW91c2VfcG9zaXRpb24ueSA+IG1vdXNlX3Bvc2l0aW9uLmxhc3QueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbl9jaGVjayh7XHJcbiAgICAgICAgICB4OiB0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICB5OiB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCxcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSA9IG1vdXNlX3Bvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKG1vdXNlX3Bvc2l0aW9uLnkgPCBtb3VzZV9wb3NpdGlvbi5sYXN0LnkpIHtcclxuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25fY2hlY2soe1xyXG4gICAgICAgICAgeDogdGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgeTogdGhpcy5zdGF0ZS5wb3NpdGlvbi55IC0gMSxcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSA9IG1vdXNlX3Bvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtb3VzZV9wb3NpdGlvbi54IDwgbW91c2VfcG9zaXRpb24ubGFzdC54KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uX2NoZWNrKHtcclxuICAgICAgICAgIHg6IHRoaXMuc3RhdGUucG9zaXRpb24ueCAtIDEsXHJcbiAgICAgICAgICB5OiB0aGlzLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRcclxuICAgICAgICB9KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi54ID0gbW91c2VfcG9zaXRpb24ueCAtIHRoaXMud2lkdGggLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChtb3VzZV9wb3NpdGlvbi54ID4gbW91c2VfcG9zaXRpb24ubGFzdC54KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uX2NoZWNrKHtcclxuICAgICAgICAgIHg6IHRoaXMuc3RhdGUucG9zaXRpb24ueCArIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICB5OiB0aGlzLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRcclxuICAgICAgICB9KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi54ID0gbW91c2VfcG9zaXRpb24ueCAtIHRoaXMud2lkdGggLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3VwZXIuc3RhdGVmKHRpbWUpO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtjb21wb3NpdGVfb2JqLCBncmF2aXR5X29ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUscG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGxhdF9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcclxuICBoZWFsdGg6bnVtYmVyICBcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHBsYXRmb3JtZXJfb2JqPHQ+IGV4dGVuZHMgZ3Jhdml0eV9vYmo8dD57XHJcbiAgZW5lbXkgPSBmYWxzZTtcclxuICBjb25zdHJ1Y3RvcihhOnBvc2l0aW9uLGI6bnVtYmVyLGM6dW5rbm93bil7XHJcbiAgICBzdXBlcihhLGIsYyk7XHJcbiAgfVxyXG4gIHN0YXRlZihhOm51bWJlcil7XHJcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgcGxhdF9zdGF0ZTtcclxuICAgIGlmKHN0YXRlLmhlYWx0aCA8PSAwKXtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBwbGF0Zm9ybWVyX29ial9jb21wb3NpdGU8dD4gZXh0ZW5kcyBjb21wb3NpdGVfb2JqPHQ+e1xyXG4gIGVuZW15ID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoYTpwb3NpdGlvbil7XHJcbiAgICBzdXBlcihhKTtcclxuICB9XHJcbiAgc3RhdGVmKGE6bnVtYmVyKXtcclxuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBwbGF0X3N0YXRlO1xyXG4gICAgaWYoc3RhdGUuaGVhbHRoIDw9IDApe1xyXG4gICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7dmVsb2NpdHksb2JqX3N0YXRlLHN0YXRlX2Z1bmMscG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtzcHJpdGUsc3ByaXRlX2dlbn0gZnJvbSBcIi4uLy4uL2xpYi9zcHJpdGVcIjtcclxuaW1wb3J0IHtvYmoscm90YXRpb25fbGVuZ3RofSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQge3BsYXRmb3JtZXJfb2JqLHBsYXRfc3RhdGV9IGZyb20gXCIuL3BsYXRmb3JtZXJfb2JqXCI7XHJcbmltcG9ydCB7UG9sbF9Nb3VzZSwgZXhlY190eXBlfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7Y29sbGlzaW9uX2JveH0gZnJvbSBcIi4uLy4uL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHtCaW5kfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcblxyXG5pbXBvcnQge2d9IGZyb20gXCIuLi9tYWluXCI7XHJcblxyXG5pbnRlcmZhY2UgdGFyZ2V0X3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRle1xyXG4gIGhlYWx0aDpudW1iZXI7XHJcbiAgYnJlYWtpbmc6Ym9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgcGxhdGZvcm1lcl9vYmo8dGFyZ2V0X3N0YXRlPntcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvdGFyZ2V0LnBuZ1wiO1xyXG4gIGhlaWdodCA9IDY0O1xyXG4gIHdpZHRoID0gNjQ7XHJcbiAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICBncmF2aXR5ID0gZmFsc2U7XHJcbiAgcmVuZGVyID0gdHJ1ZTtcclxuICBlbmVteSA9IHRydWU7XHJcbiAgY29uc3RydWN0b3IoYTpwb3NpdGlvbil7XHJcbiAgICBzdXBlcihhLDAsVGFyZ2V0LmRlZmF1bHRfcGFyYW1zKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOmEsXHJcbiAgICAgIHZlbG9jaXR5OntcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowXHJcbiAgICAgIH0sXHJcbiAgICAgIGhlYWx0aDoyMCxcclxuICAgICAgYnJlYWtpbmc6ZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgcmVnaXN0ZXJfYXVkaW8oKXtcclxuICAgIHRoaXMuYXVkaW8uYWRkKFwiYnJlYWtcIixcIi4vc291bmRzL3RhcmdldC9oaXRzb3VuZF8yNzQubXAzXCIpO1xyXG4gIH1cclxuICByZWdpc3Rlcl9hbmltYXRpb25zKCl7XHJcbiAgICBsZXQgc3ByaXRlcyA9IHNwcml0ZV9nZW4odGhpcy5zcHJpdGVfc2hlZXQsdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XHJcbiAgICBcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoXCJicmVha1wiLFtcclxuICAgICAgWzAsc3ByaXRlc1swXVsxXV0sXHJcbiAgICAgIFs1MCxzcHJpdGVzWzBdWzJdXSxcclxuICAgICAgWzEwMCxzcHJpdGVzWzBdWzNdXSxcclxuICAgICAgWzE1MCxzcHJpdGVzWzBdWzRdXVxyXG4gICAgXSwyMDApXHJcbiAgfVxyXG4gIHN0YXRlZigpe1xyXG4gICAgaWYodGhpcy5zdGF0ZS5oZWFsdGggPD0gMCAmJiAhdGhpcy5zdGF0ZS5icmVha2luZyl7XHJcbiAgICAgIHRoaXMuc3RhdGUuYnJlYWtpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheShcImJyZWFrXCIsKCk9PntcclxuICAgICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmF1ZGlvLnBsYXkoXCJicmVha1wiLDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgcm9vbSwgYXBwbHlfZ3Jhdml0eSB9IGZyb20gXCIuLi8uLi8uLi9saWIvcm9vbVwiO1xyXG5pbXBvcnQgeyBHdW4sIEdvb21iYSxDdXJzb3IsIENvbnRyb2xsZWRQbGF5ZXIsIFBsYXllciB9IGZyb20gXCIuLi8uLi9vYmplY3RzL2dvb21iYVwiO1xyXG5pbXBvcnQgeyBCb3gsIFZlcnRCb3ggfSBmcm9tIFwiLi4vLi4vb2JqZWN0cy9ib3hcIjtcclxuaW1wb3J0IHsgdmVsb2NpdHlfY29sbGlzaW9uX2NoZWNrIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgZ3Jhdml0eV9vYmosIHJvdGF0aW9uX2xlbmd0aCB9IGZyb20gXCIuLi8uLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IFBvbGxfTW91c2UsIGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgSFVELCBUZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9odWRcIjtcclxuaW1wb3J0IHsgREVCVUcsIGdhbWUsIEdldFZpZXdwb3J0RGltZW5zaW9ucywgc2V0RGVidWcgfSBmcm9tIFwiLi4vLi4vLi4vdmFuXCI7XHJcbmltcG9ydCB7QnVsbGV0LCBSb2NrZXR9IGZyb20gXCIuLi8uLi9vYmplY3RzL2J1bGxldFwiO1xyXG5pbXBvcnQge1RhcmdldH0gZnJvbSBcIi4uLy4uL29iamVjdHMvdGFyZ2V0XCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uLy4uL21haW5cIjtcclxuXHJcbmludGVyZmFjZSBvdmVyd29ybGRfaSB7XHJcbiAgcGxheWVyOiBncmF2aXR5X29iajx1bmtub3duPixcclxuICBwYXVzZWQ6IGJvb2xlYW4sXHJcbiAgbG9ja2VkX2J1bGxldDpCdWxsZXRcclxufVxyXG5cclxuY2xhc3MgT3ZlcndvcmxkX0hVRCBleHRlbmRzIEhVRCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy50ZXh0X2VsZW1lbnRzLnB1c2gobmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodCAqIDcvOFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiA0NCxcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjpcImxlZnRcIixcclxuICAgICAgc2NhbGluZzoxXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGxldCB4ID0gZy5nZXRSb29tKCkuZ2V0T2JqQnlUYWcoXCJkdW1teVwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGlmKHgpXHJcbiAgICAgICAgcmV0dXJuIGBUaW1lcyBBaXJzaG90OiR7eC5zdGF0ZS50aW1lc19haXJzaG90fWA7XHJcbiAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9KSk7XHJcbiAgICB0aGlzLnRleHRfZWxlbWVudHMucHVzaChuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0ICogNi84XHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDQ0LFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgc2NhbGluZzoxXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGxldCB4ID0gZy5nZXRSb29tKCkuZ2V0T2JqQnlUYWcoXCJkdW1teVwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGlmKHgpXHJcbiAgICAgICAgcmV0dXJuIGBNYXggVGltZXMgQWlyc2hvdDoke01hdGgubWF4KHguc3RhdGUudGltZXNfYWlyc2hvdCx4LnN0YXRlLm1heF90aW1lc19haXJzaG90KX1gO1xyXG4gICAgICByZXR1cm4gXCJcIlxyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgSGVpZ2h0X0hVRCBleHRlbmRzIEhVRHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudGV4dF9lbGVtZW50cy5wdXNoKG5ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiA2MDBcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogMTUsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246XCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6MVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBsZXQgeCA9IGcuZ2V0Um9vbSgpLmdldE9iakJ5VGFnKFwiZHVtbXlcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBpZih4KVxyXG4gICAgICAgIHJldHVybiBgSGVpZ2h0OiR7TWF0aC5mbG9vcih4LnN0YXRlLnBvc2l0aW9uLnkpfWA7XHJcbiAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT3ZlcndvcmxkIGV4dGVuZHMgcm9vbTxvdmVyd29ybGRfaT57XHJcbiAgYmFja2dyb3VuZF91cmwgPSBcIi4vc3ByaXRlcy9pbUQ0MWwuanBnXCI7XHJcbiAgb2JqZWN0czpncmF2aXR5X29iajx1bmtub3duPltdO1xyXG4gIHByZWZhYnMgPSB7XHJcbiAgICBcImdvb21iYVwiOkdvb21iYSxcclxuICAgIFwicGxheWVyXCI6UGxheWVyLFxyXG4gICAgXCJib3hcIjpCb3gsXHJcbiAgICBcInRhcmdldFwiOlRhcmdldFxyXG4gIH07XHJcbiAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+KSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBsYXllcjogdW5kZWZpbmVkLFxyXG4gICAgICBwYXVzZWQ6IGZhbHNlLFxyXG4gICAgICBsb2NrZWRfYnVsbGV0Om51bGxcclxuICAgIH07XHJcbiAgICBmb3IobGV0IGEgPSAwO2E8MTA7YSsrKXtcclxuICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IFZlcnRCb3goe3g6MzIwLHk6MjUwICsgYSAqIDUwMH0sMCkpO1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgVmVydEJveCh7eDo5MDAseToyNTAgKyBhICogNTAwfSwwKSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gMDthIDwgMTAwOyBhKyspe1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgQm94KHt4OjcwMCArIGEgKiA1MDAseTowfSwwKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFkZEl0ZW1zKFsuLi5uZXcgUGxheWVyKHt4OjcwMCx5OjE1MH0sMCx7aWQ6XCJwbGF5ZXJcIn0pLmNvbWJpbmVkX29iamVjdHMoKSwgbmV3IEdvb21iYSh7eDo1NTAseToxNTB9LDApLG5ldyBCb3goe3g6NjAwLHk6MH0sMCksbmV3IEN1cnNvcihcImN1cnNvclwiKV0pXHJcbiAgICBnYW1lLnN0YXRlLmNhbWVyYXNbMF0uaHVkID0gbmV3IE92ZXJ3b3JsZF9IVUQoKTtcclxuICAgIGdhbWUuc3RhdGUuY2FtZXJhc1sxXS5odWQgPSBuZXcgSGVpZ2h0X0hVRCgpO1xyXG4gIH1cclxuICByZWdpc3Rlcl9jb250cm9scygpIHtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJFc2NhcGVcIiwgZXhlY190eXBlLm9uY2UsICgpID0+IHtcclxuICAgICAgdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXNbMF0uc3RhdGUuZGVidWcgPSAhdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXNbMF0uc3RhdGUuZGVidWc7XHJcbiAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldE9iaihcInBsYXllclwiKSBhcyBHb29tYmE7XHJcbiAgICAgIHBsYXllci5jb2xsaXNpb24gPSAhcGxheWVyLmNvbGxpc2lvbjtcclxuICAgICAgcGxheWVyLmdyYXZpdHkgPSAhcGxheWVyLmdyYXZpdHk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwibW91c2UwZG93blwiLCBleGVjX3R5cGUucmVwZWF0LCgpID0+IHtcclxuICAgICAgbGV0IGd1biA9IHRoaXMuZ2V0T2JqKFwiZ3VuXCIpIGFzIEd1bjtcclxuICAgICAgaWYoZ3VuKXtcclxuICAgICAgICBsZXQgbXV6emxlID0gcm90YXRpb25fbGVuZ3RoKDMwLGd1bi5zdGF0ZS5yb3RhdGlvbik7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgeDpndW4uc3RhdGUucG9zaXRpb24ueCArIG11enpsZS54LFxyXG4gICAgICAgICAgeTpndW4uc3RhdGUucG9zaXRpb24ueSArIG11enpsZS55XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidWxsZXRzID0gW107XHJcbiAgICAgICAgZm9yKGxldCBhID0gMDthIDwgMTthICsrKXtcclxuICAgICAgICAgIGJ1bGxldHMucHVzaChuZXcgUm9ja2V0KHt4OnBvc2l0aW9uLngseTpwb3NpdGlvbi55fSxndW4uc3RhdGUucm90YXRpb24pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5sb2NrZWRfYnVsbGV0ID09IG51bGwpXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmxvY2tlZF9idWxsZXQgPSBidWxsZXRzWzBdO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbXMoYnVsbGV0cyk7XHJcbiAgICAgIH1cclxuICAgIH0sNDAwKVxyXG4gIH1cclxuICByZWdpc3RlclBhcnRpY2xlcygpe1xyXG4gICAgdGhpcy5wYXJ0aWNsZXNbXCJzbW9rZVwiXSA9IHtcclxuICAgICAgc3ByaXRlOlwiLi9zcHJpdGVzL2ZvbGRlci9zbW9rZS5wbmdcIixcclxuICAgICAgaGVpZ2h0OjY0LFxyXG4gICAgICB3aWR0aDo2NFxyXG4gICAgfTtcclxuICAgIHRoaXMucGFydGljbGVzW1wiZXhwbG9zaW9uXCJdID0ge1xyXG4gICAgICBzcHJpdGU6XCIuL3Nwcml0ZXMvZm9sZGVyL2V4cGxvc2lvbi5wbmdcIixcclxuICAgICAgaGVpZ2h0OjEyOCxcclxuICAgICAgd2lkdGg6MTI4XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIFxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLm9iamVjdHMpO1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLnBhdXNlZCkge1xyXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgIGFwcGx5X2dyYXZpdHkodGhpcy5vYmplY3RzW2FdLCAtMSwgLTE1KTtcclxuICAgICAgICB2ZWxvY2l0eV9jb2xsaXNpb25fY2hlY2sodGhpcy5vYmplY3RzW2FdLCB0aGlzLm9iamVjdHMpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0c1thXS5zdGF0ZWYodGltZSk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBwYXJ0aWNsZSBvZiB0aGlzLnBhcnRpY2xlc19hcnIpe1xyXG4gICAgICAgIHBhcnRpY2xlLnN0YXRlZih0aW1lKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IHRleHRfbm9kZSBvZiB0aGlzLnRleHRfbm9kZXMpe1xyXG4gICAgICAgIHRleHRfbm9kZS5zdGF0ZWYodGltZSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0T2JqKFwicGxheWVyXCIpIGFzIEdvb21iYTtcclxuICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZ2V0T2JqQnlUYWcoXCJkdW1teVwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGxldCBjdXJzb3IgPSB0aGlzLmdldE9iaihcImN1cnNvclwiKSBhcyBDdXJzb3I7XHJcbiAgICAgIGxldCBjYW1lcmFzID0gZy5zdGF0ZS5jYW1lcmFzO1xyXG4gICAgICBcclxuICAgICAgZm9yKGxldCBjYW0gb2YgY2FtZXJhcyl7XHJcbiAgICAgICAgaWYoY2FtLmh1ZCl7XHJcbiAgICAgICAgICBjYW0uaHVkLnN0YXRlZih0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmIChwbGF5ZXIpIHsgICAgICAgIFxyXG4gICAgICAgIGNhbWVyYXNbMF0ueCA9IHBsYXllci5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gICAgICAgIGNhbWVyYXNbMF0ueSA9IHBsYXllci5zdGF0ZS5wb3NpdGlvbi55ICsgKGNhbWVyYXNbMF0uc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQvMiAtIHBsYXllci5oZWlnaHQvMik7ICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYodGFyZ2V0KXtcclxuICAgICAgICBjYW1lcmFzWzFdLnN0YXRlLnBvc2l0aW9uLnggPSB0YXJnZXQuc3RhdGUucG9zaXRpb24ueDtcclxuICAgICAgICBjYW1lcmFzWzFdLnN0YXRlLnBvc2l0aW9uLnkgPSB0YXJnZXQuc3RhdGUucG9zaXRpb24ueTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGN1cnNvcikge1xyXG4gICAgICAgIGN1cnNvci5jb2xsaXNpb24gPSBmYWxzZTtcclxuICAgICAgICBjdXJzb3IuZ3Jhdml0eSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UodGhpcy5nYW1lLnN0YXRlLmNhbnZhcyx0aGlzLmdhbWUuc3RhdGUuY2FtZXJhc1swXSk7XHJcbiAgICAgICAgY3Vyc29yLnN0YXRlLnBvc2l0aW9uLnggPSBtb3VzZS54O1xyXG4gICAgICAgIGN1cnNvci5zdGF0ZS5wb3NpdGlvbi55ID0gbW91c2UueTtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGNhbWVyYXNbMl0uc3RhdGUucG9zaXRpb24ueCA9IG1vdXNlLng7XHJcbiAgICAgICAgY2FtZXJhc1syXS5zdGF0ZS5wb3NpdGlvbi55ID0gbW91c2UueTtcclxuICAgICAgICAqL1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW50ZXJmYWNlIHNvdW5kX3N0b3JhZ2Uge1xyXG4gIFtpbmRleDogc3RyaW5nXTogSFRNTEF1ZGlvRWxlbWVudFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgYXVkaW8ge1xyXG4gIHNvdW5kczogc291bmRfc3RvcmFnZSA9IHt9O1xyXG4gIGFkZChuYW1lOiBzdHJpbmcsIHM6IHN0cmluZykge1xyXG4gICAgdGhpcy5zb3VuZHNbbmFtZV0gPSBuZXcgQXVkaW8ocyk7XHJcbiAgfVxyXG4gIGFzeW5jIGxvYWQoKSB7XHJcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc291bmRzKTtcclxuICAgIGxldCBwcm9taXNlcyA9IGtleXMubWFwKChrZXkpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLnNvdW5kc1trZXldLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5dGhyb3VnaFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgdHJ5e1xyXG4gICAgICBsZXQgeCA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgcmV0dXJuKHgpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwbGF5KG5hbWU6c3RyaW5nLHZvbHVtZTpudW1iZXIpe1xyXG4gICAgbGV0IGEgPSB0aGlzLnNvdW5kc1tuYW1lXTtcclxuICAgIGEucGF1c2UoKVxyXG4gICAgYS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBhLnZvbHVtZSA9IHZvbHVtZTtcclxuICAgIGEucGxheSgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7b2JqLGdldElkfSBmcm9tIFwiLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQge29ial9zdGF0ZX0gZnJvbSBcIi4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge2RlZXB9IGZyb20gXCIuLi92YW5cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgY29sbGlzaW9uX2JveHtcclxuICB4Om51bWJlcjtcclxuICB5Om51bWJlcjtcclxuICB3aWR0aDpudW1iZXI7XHJcbiAgaGVpZ2h0Om51bWJlcjtcclxufVxyXG5cclxuZW51bSBkaXJlY3Rpb257XHJcbiAgbGVmdCxcclxuICByaWdodCxcclxuICB1cCxcclxuICBkb3duXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja19hbGxfb2JqZWN0cyhjOiBjb2xsaXNpb25fYm94LG9ianM6QXJyYXk8b2JqPHVua25vd24+PixleGVtcHRpb246c3RyaW5nW10gPSBbXSk6QXJyYXk8b2JqPHVua25vd24+PntcclxuICByZXR1cm4gb2Jqcy5maWx0ZXIoKGEpPT4oIWV4ZW1wdGlvbi5zb21lKChiKT0+YS50YWdzLmluZGV4T2YoYikgIT09IC0xKSAmJiBhLmNvbGxpZGVzX3dpdGhfYm94KGMpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja19hbGxfY29sbGlzaW9ucyhjOiBjb2xsaXNpb25fYm94LG9ianM6QXJyYXk8b2JqPHVua25vd24+PixleGVtcHRpb246c3RyaW5nW10gPSBbXSk6QXJyYXk8b2JqPHVua25vd24+PntcclxuICBsZXQgbWF0Y2hlZCA9IFtdO1xyXG4gIGZvciAobGV0IGEgb2Ygb2Jqcykge1xyXG4gICAgaWYgKCFleGVtcHRpb24uc29tZSgoYik9PmEudGFncy5pbmRleE9mKGIpICE9PSAtMSkgJiYgYS5jb2xsaXNpb24gJiYgYS5jb2xsaWRlc193aXRoX2JveChjKSkge1xyXG4gICAgICBtYXRjaGVkLnB1c2goYSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBtYXRjaGVkXHJcbn1cclxuLy9DaGVja3MgdXAgdG8gdGhlIGZpcnN0IGNvbGxpc2lvblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfY29sbGlzaW9ucyhjOiBjb2xsaXNpb25fYm94LCBvYmpzOiBBcnJheTxvYmo8dW5rbm93bj4+LCBleGVtcHRpb246c3RyaW5nKSB7XHJcbiAgZm9yIChsZXQgYSBvZiBvYmpzKSB7XHJcbiAgICBpZiAoYS5pZCAhPT0gZXhlbXB0aW9uICYmIGEuY29sbGlzaW9uICYmIGEuY29sbGlkZXNfd2l0aF9ib3goYykpIHtcclxuICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2ZWxvY2l0eV9tYXgodmVsb2NpdHk6bnVtYmVyLGJveDpjb2xsaXNpb25fYm94LG9ianM6QXJyYXk8b2JqPHVua25vd24+PiwgZXhlbXB0aW9uOnN0cmluZyxkaXI6ZGlyZWN0aW9uKXtcclxuICBsZXQgY29sbGlzaW9uID0gY2hlY2tfY29sbGlzaW9ucyhib3gsIG9ianMsIGV4ZW1wdGlvbik7XHJcbiAgaWYoY29sbGlzaW9uID09IG51bGwpe1xyXG4gICAgcmV0dXJuIHZlbG9jaXR5O1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgbGV0IGNvbGxpZGVyID0gY29sbGlzaW9uO1xyXG4gICAgbGV0IG9yaWdpbiA9IGdldElkKG9ianMsZXhlbXB0aW9uKTtcclxuICAgIGxldCBvcmlnX3N0ID0gb3JpZ2luLnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICAgIGxldCBjb2xsaWRlcl9zdCA9IGNvbGxpZGVyLnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICAgIGlmKGRpciA9PSBkaXJlY3Rpb24ubGVmdCl7XHJcbiAgICAgIHJldHVybiAob3JpZ19zdC5wb3NpdGlvbi54IC0gb3JpZ2luLndpZHRoLzIpIC0gKGNvbGxpZGVyX3N0LnBvc2l0aW9uLnggKyBjb2xsaWRlci53aWR0aC8yKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlyID09IGRpcmVjdGlvbi5yaWdodCl7XHJcbiAgICAgIHJldHVybiAoY29sbGlkZXJfc3QucG9zaXRpb24ueCAtIGNvbGxpZGVyLndpZHRoLzIpIC0gKG9yaWdfc3QucG9zaXRpb24ueCArIG9yaWdpbi53aWR0aC8yKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlyID09IGRpcmVjdGlvbi5kb3duKXtcclxuICAgICAgcmV0dXJuIChvcmlnX3N0LnBvc2l0aW9uLnkgLSBvcmlnaW4uaGVpZ2h0LzIpIC0gKGNvbGxpZGVyX3N0LnBvc2l0aW9uLnkgKyBjb2xsaWRlci5oZWlnaHQvMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRpciA9PSBkaXJlY3Rpb24udXApe1xyXG4gICAgICByZXR1cm4gKGNvbGxpZGVyX3N0LnBvc2l0aW9uLnkgLSBjb2xsaWRlci5oZWlnaHQvMikgLSAob3JpZ19zdC5wb3NpdGlvbi55ICsgb3JpZ2luLmhlaWdodC8yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZWxvY2l0eV9jb2xsaXNpb25fY2hlY2sob2JqZWN0Om9iajx1bmtub3duPixsaXN0OkFycmF5PG9iajx1bmtub3duPj4pIHtcclxuICBsaXN0ID0gWy4uLmxpc3RdO1xyXG4gIGxldCBvYiA9IG9iamVjdDtcclxuICBsZXQgc3QgPSBvYmplY3Quc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gIGxldCB4X3ZlbCA9IHN0LnZlbG9jaXR5Lng7XHJcbiAgbGV0IHlfdmVsID0gc3QudmVsb2NpdHkueTtcclxuICBpZighb2IuY29sbGlzaW9uKXtcclxuICAgICg8b2JqX3N0YXRlPm9iLnN0YXRlKS5wb3NpdGlvbi54ICs9ICg8b2JqX3N0YXRlPm9iLnN0YXRlKS52ZWxvY2l0eS54O1xyXG4gICAgKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnBvc2l0aW9uLnkgKz0gKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnZlbG9jaXR5Lnk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICh4X3ZlbCA+IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IHN0LnBvc2l0aW9uLnggKyBvYi53aWR0aC8yICsgeF92ZWwvMixcclxuICAgICAgeTogc3QucG9zaXRpb24ueSxcclxuICAgICAgd2lkdGg6IHhfdmVsLFxyXG4gICAgICBoZWlnaHQ6IG9iLmhlaWdodFxyXG4gICAgfTtcclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueCxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24ucmlnaHQpO1xyXG4gICAgaWYodmVsID4gMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnggKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueCA9IDA7ICBcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSBpZiAoeF92ZWwgPCAwKSB7XHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICB4OiB4X3ZlbC8yICsgc3QucG9zaXRpb24ueCAtIG9iLndpZHRoLzIsXHJcbiAgICAgIHk6IHN0LnBvc2l0aW9uLnksXHJcbiAgICAgIHdpZHRoOiAtMSAqIHhfdmVsLFxyXG4gICAgICBoZWlnaHQ6IG9iLmhlaWdodFxyXG4gICAgfVxyXG4gICAgbGV0IHZlbCA9IHZlbG9jaXR5X21heChzdC52ZWxvY2l0eS54LGJveCxsaXN0LG9iLmlkLGRpcmVjdGlvbi5sZWZ0KTtcclxuICAgIGlmKHZlbCA8IDApe1xyXG4gICAgICBzdC5wb3NpdGlvbi54ICs9IHZlbDtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHN0LnZlbG9jaXR5LnggPSAwOyBcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHlfdmVsID4gMCkge1xyXG4gICAgbGV0IGJveCA9IHtcclxuICAgICAgeDogc3QucG9zaXRpb24ueCxcclxuICAgICAgeTogc3QucG9zaXRpb24ueSArIG9iLmhlaWdodC8yICsgeV92ZWwvMixcclxuICAgICAgd2lkdGg6IG9iLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHlfdmVsXHJcbiAgICB9XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LnksYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLnVwKTtcclxuICAgIGlmKHZlbCA+IDApe1xyXG4gICAgICBzdC5wb3NpdGlvbi55ICs9IHZlbDtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHN0LnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIGlmICh5X3ZlbCA8IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IHN0LnBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHlfdmVsLzIgKyBzdC5wb3NpdGlvbi55IC0gb2IuaGVpZ2h0LzIsXHJcbiAgICAgIHdpZHRoOiBvYi53aWR0aCxcclxuICAgICAgaGVpZ2h0OiAtMSAqIHlfdmVsXHJcbiAgICB9XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LnksYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLmRvd24pO1xyXG4gICAgaWYodmVsIDwgMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnkgKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtnYW1lLFBBVVNFRCxERUJVRyxERUJVR192LCBHZXRTY3JlZW5EaW1lbnNpb25zLEdldFZpZXdwb3J0RGltZW5zaW9uc30gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4vY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7b2JqfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgbW91c2VQb3N7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgbGFzdDp7XHJcbiAgICB4Om51bWJlcixcclxuICAgIHk6bnVtYmVyXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgY29udHJvbF9mdW5je1xyXG4gICgpOnZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIG1vdXNlQmluZHN7XHJcbiAgW2tleTpzdHJpbmddOiBBcnJheTxbY29udHJvbF9mdW5jLG9iajx1bmtub3duPl0+XHJcbn1cclxuXHJcbmludGVyZmFjZSBrZXlCaW5kc3tcclxuICBba2V5OnN0cmluZ106IEFycmF5PGNvbnRyb2xfZnVuYz5cclxufVxyXG5sZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0X2NsaWNrX2hhbmRsZXIoZ2FtZTpnYW1lPHVua25vd24+KXtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XHJcbiAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGdhbWUuc3RhdGUuY2FudmFzLGdhbWUuc3RhdGUuY2FtZXJhc1swXSk7XHJcbiAgICBsZXQgYm94OmNvbGxpc2lvbl9ib3ggPSB7XHJcbiAgICAgIHg6bW91c2UueCxcclxuICAgICAgeTptb3VzZS55LFxyXG4gICAgICBoZWlnaHQ6MSxcclxuICAgICAgd2lkdGg6MVxyXG4gICAgfTtcclxuICAgIFxyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gICAgZm9yKGxldCBhID0gMDthIDwgZC5sZW5ndGg7YSsrKXtcclxuICAgICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgICAgaWYoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSBcIm1vdXNlMVwiICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIGlmKHNlbGVjdGVkLm9iaiAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgIGlmKHNlbGVjdGVkLm9iai5jb2xsaWRlc193aXRoX2JveChib3gpKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gIFxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcImRvd25cIikgICYmICFzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIHNlbGVjdGVkLnJlcGVhdF90aW1lci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcInVwXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNldXBcIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2UpIHtcclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgfVxyXG4gICBlbHNlIGlmKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwidXBcIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2V1cFwiKSAmJiBzZWxlY3RlZC5leGVjdXRlZCAmJiBzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICBsZXQgZyA9IFsuLi5yZXBlYXRfYmluZHNdO1xyXG4gICAgIGZvcihsZXQgYSA9IDA7IGEgPCBnLmxlbmd0aDthKyspe1xyXG4gICAgICAgaWYoZ1thXS5iaW5kLmlkID09PSBzZWxlY3RlZC5pZCl7XHJcbiAgICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG4gIH1cclxufSlcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZSkgPT4ge1xyXG4gIFxyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwidXBcIikgICYmICFzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIHNlbGVjdGVkLnJlcGVhdF90aW1lci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcImRvd25cIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2Vkb3duXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKSB7XHJcbiAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcImRvd25cIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2Vkb3duXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICBsZXQgZyA9IFsuLi5yZXBlYXRfYmluZHNdO1xyXG4gICAgICBmb3IobGV0IGEgPSAwOyBhIDwgZy5sZW5ndGg7YSsrKXtcclxuICAgICAgICBpZihnW2FdLmJpbmQuaWQgPT09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBnW2FdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuaW50ZXJmYWNlIGhlbGRfa2V5c3tcclxuICBbaW5kZXg6c3RyaW5nXTpib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgaGVsZF9rZXlzOmhlbGRfa2V5cyA9IHt9O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLChlKT0+e1xyXG4gIGxldCBjb2RlOnN0cmluZztcclxuXHJcbiAgaWYoZS5kZWx0YVkgPCAwKXtcclxuICAgIGNvZGUgPSBcInNjcm9sbHVwXCI7XHJcbiAgfVxyXG4gIGVsc2UgaWYoZS5kZWx0YVkgPiAwKXtcclxuICAgIGNvZGUgPSBcInNjcm9sbGRvd25cIjtcclxuICB9XHJcblxyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIFxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IGNvZGUpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICBoZWxkX2tleXNbZS5jb2RlXSA9IHRydWU7XHJcbiAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLmtleWJvYXJkICYmIHNlbGVjdGVkLmtleSA9PT0gZS5jb2RlICAmJiAhc2VsZWN0ZWQuZXhlY3V0ZWQpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgICBmb3IobGV0IGMgb2YgcmVwZWF0X2JpbmRzKXtcclxuICAgICAgICAgIGlmKGMuYmluZC5pZCA9PSBzZWxlY3RlZC5pZCl7XHJcbiAgICAgICAgICAgIGMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbn0pXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcclxuICBoZWxkX2tleXNbZS5jb2RlXSA9IGZhbHNlO1xyXG4gIFxyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5rZXlib2FyZCAmJiBzZWxlY3RlZC5rZXkgPT09IGUuY29kZSAmJiBzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSApe1xyXG4gICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgICBsZXQgZyA9IFsuLi5yZXBlYXRfYmluZHNdO1xyXG4gICAgICAgIGZvcihsZXQgYSA9IDA7IGEgPCBnLmxlbmd0aDthKyspe1xyXG4gICAgICAgICAgaWYoZ1thXS5iaW5kLmlkID09PSBzZWxlY3RlZC5pZCl7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcbmxldCB0cmFja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XHJcbiAgdmFyIHJlY3QgPSAoZS50YXJnZXQgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDtcclxuICBcclxuICBsYXN0X3ggPSB4O1xyXG4gIGxhc3RfeSA9IHk7XHJcbiAgeCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDsgLy94IHBvc2l0aW9uIHdpdGhpbiB0aGUgZWxlbWVudC5cclxuICB5ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7ICAvL3kgcG9zaXRpb24gd2l0aGluIHRoZSBlbGVtZW50LlxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBlbnVtIGJ0eXBle1xyXG4gIG1vdXNlLFxyXG4gIGtleWJvYXJkXHJcbn1cclxuXHJcbmludGVyZmFjZSBiaW5ke1xyXG4gIGtleTpzdHJpbmcsXHJcbiAgdHlwZTpidHlwZSxcclxuICBpZDpudW1iZXIsXHJcbiAgZnVuY3Rpb246Y29udHJvbF9mdW5jLFxyXG4gIGV4ZWN1dGU6ZXhlY190eXBlLFxyXG4gIHJlcGVhdF90aW1lcj86cmVwZWF0X2JpbmQsXHJcbiAgb2JqPzpvYmo8dW5rbm93bj4sXHJcbiAgZXhlY3V0ZWQ/OmJvb2xlYW4sXHJcbiAgaW50ZXJ2YWw/Om51bWJlcixcclxuICBjYW1lcmE/OkNhbWVyYVxyXG59XHJcblxyXG5pbnRlcmZhY2UgcmVwZWF0X2JpbmR7XHJcbiAgYmluZDpiaW5kLFxyXG4gIHRpbWVyOm51bWJlcixcclxuICBpbnRlcnZhbDpudW1iZXIsXHJcbiAgYWN0aXZlOmJvb2xlYW5cclxufVxyXG5cclxubGV0IHggPSAwO1xyXG5sZXQgeSA9IDA7XHJcbmxldCBsYXN0X3ggPSAwO1xyXG5sZXQgbGFzdF95ID0gMDtcclxubGV0IGJpbmRzOmtleUJpbmRzID0ge307XHJcbmV4cG9ydCBsZXQgZGVidWdfYmluZHM6YmluZFtdID0gW107XHJcbmxldCBtb3VzZUJpbmRzOm1vdXNlQmluZHMgPSB7fTtcclxubGV0IGJpbmRfY291bnQgPSAwO1xyXG5cclxubGV0IGFsbF9iaW5kczpBcnJheTxiaW5kPiA9IFtdXHJcblxyXG5sZXQgcmVwZWF0X2JpbmRzOkFycmF5PHJlcGVhdF9iaW5kPiA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvbGxfTW91c2UoY2FudmFzOkhUTUxDYW52YXNFbGVtZW50LGNhbWVyYTpDYW1lcmEpOm1vdXNlUG9ze1xyXG4gIGxldCBoZWlnaHQgPSBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQ7XHJcbiAgbGV0IHdyYXRpbyA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FudmFzKS53aWR0aCkvR2V0Vmlld3BvcnREaW1lbnNpb25zKCkud2lkdGg7XHJcbiAgbGV0IHZyYXRpbyA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FudmFzKS5oZWlnaHQpL0dldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodDtcclxuICByZXR1cm4gKHtcclxuICAgIHg6ICgoeCAtIGNhbWVyYS5zdGF0ZS52aWV3cG9ydC54KS93cmF0aW8vY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoL2NhbWVyYS5zdGF0ZS5zY2FsaW5nLzIpICxcclxuICAgIHk6ICgoaGVpZ2h0IC0geS92cmF0aW8pL2NhbWVyYS5zdGF0ZS5zY2FsaW5nICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQvY2FtZXJhLnN0YXRlLnNjYWxpbmcvMiAtIGNhbWVyYS5zdGF0ZS52aWV3cG9ydC55KSxcclxuICAgIGxhc3Q6e1xyXG4gICAgICB4OiAoeC93cmF0aW8vY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCksXHJcbiAgICAgIHk6ICgoaGVpZ2h0IC0geS92cmF0aW8pL2NhbWVyYS5zdGF0ZS5zY2FsaW5nICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV4ZWN1dGVSZXBlYXRCaW5kcyhiOm51bWJlcil7XHJcbiAgZm9yKGxldCBhIG9mIHJlcGVhdF9iaW5kcyl7XHJcbiAgICBpZihhLmJpbmQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCAmJiBhLnRpbWVyID09IDAgJiYgYS5hY3RpdmUpe1xyXG4gICAgICBhLmJpbmQuZnVuY3Rpb24oKTtcclxuICAgIH1cclxuICAgIGlmKGEuYWN0aXZlIHx8ICghYS5hY3RpdmUgJiYgYS50aW1lciAhPSAwKSlcclxuICAgICAgYS50aW1lciArPSBiO1xyXG4gICAgaWYoYS50aW1lciA+IGEuaW50ZXJ2YWwpe1xyXG4gICAgICBhLnRpbWVyID0gMDsgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVW5iaW5kKGJpbmRfaWQ6bnVtYmVyKXtcclxuICBmb3IobGV0IGEgPSAwO2EgPCBhbGxfYmluZHMubGVuZ3RoOyBhKyspe1xyXG4gICAgaWYoYWxsX2JpbmRzW2FdLmlkID09IGJpbmRfaWQpe1xyXG4gICAgICBhbGxfYmluZHMuc3BsaWNlKGEsMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIGV4ZWNfdHlwZXtcclxuICBvbmNlLFxyXG4gIHJlcGVhdFxyXG59XHJcblxyXG5sZXQgaWQgPSAwO1xyXG5leHBvcnQgZnVuY3Rpb24gQmluZChrZXluYW1lOnN0cmluZyxmdW5jOmNvbnRyb2xfZnVuYyx0eXBlOmV4ZWNfdHlwZSxpbnRlcnZhbDpudW1iZXIsb2JqZWN0PzpvYmo8dW5rbm93bj4pOm51bWJlcntcclxuICBpZihrZXluYW1lLnNsaWNlKDAsNSkgPT09IFwibW91c2VcIil7XHJcbiAgICBsZXQgYjpiaW5kID0ge1xyXG4gICAgICBrZXk6a2V5bmFtZSxcclxuICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgaWQsXHJcbiAgICAgIGZ1bmN0aW9uOmZ1bmMsXHJcbiAgICAgIG9iajpvYmplY3QsXHJcbiAgICAgIGV4ZWN1dGU6dHlwZSxcclxuICAgICAgZXhlY3V0ZWQ6ZmFsc2UsXHJcbiAgICAgIGludGVydmFsXHJcbiAgICB9O1xyXG4gICAgaWYodHlwZSA9PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgYi5yZXBlYXRfdGltZXIgPSB7XHJcbiAgICAgICAgYmluZDpiLFxyXG4gICAgICAgIHRpbWVyOjAsXHJcbiAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgYWN0aXZlOmZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmVwZWF0X2JpbmRzLnB1c2goYi5yZXBlYXRfdGltZXIpO1xyXG4gICAgfVxyXG4gICAgYWxsX2JpbmRzLnB1c2goYik7XHJcblxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgbGV0IGI6YmluZCA9IHtcclxuICAgICAga2V5OmtleW5hbWUsXHJcbiAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgIGlkLFxyXG4gICAgICBmdW5jdGlvbjpmdW5jLFxyXG4gICAgICBleGVjdXRlOnR5cGUsXHJcbiAgICAgIGV4ZWN1dGVkOmZhbHNlLFxyXG4gICAgICBpbnRlcnZhbFxyXG4gICAgfVxyXG4gICAgaWYodHlwZSA9PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgYi5yZXBlYXRfdGltZXIgPSB7XHJcbiAgICAgICAgYmluZDpiLFxyXG4gICAgICAgIHRpbWVyOjAsXHJcbiAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgYWN0aXZlOmZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmVwZWF0X2JpbmRzLnB1c2goYi5yZXBlYXRfdGltZXIpO1xyXG4gICAgfVxyXG4gICAgYWxsX2JpbmRzLnB1c2goYik7XHJcbiAgfVxyXG4gIGlkKys7XHJcbiAgcmV0dXJuIGlkIC0gMTtcclxufSIsImltcG9ydCB7b2JqfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgR29vbWJhIH0gZnJvbSBcIi4uL2dhbWUvb2JqZWN0cy9nb29tYmFcIjtcclxuXHJcbmludGVyZmFjZSBIdWRUZXh0R2V0RnVuY3tcclxuICAoKTpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0U2V0dGluZ3tcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBmb250OkZvbnRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb250e1xyXG4gIG1heF93aWR0aD86bnVtYmVyLFxyXG4gIHNpemU6bnVtYmVyLFxyXG4gIGZvbnQ6c3RyaW5nLFxyXG4gIGNvbG9yOnN0cmluZyxcclxuICB0ZXh0OnN0cmluZyxcclxuICBhbGlnbjpDYW52YXNUZXh0QWxpZ25cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0X05vZGV7XHJcbiAgbWF4X3dpZHRoPzpudW1iZXIsXHJcbiAgcG9zaXRpb246e1xyXG4gICAgeDpudW1iZXIsXHJcbiAgICB5Om51bWJlclxyXG4gIH1cclxuICBzaXplOm51bWJlcjtcclxuICBzY2FsaW5nOm51bWJlcjtcclxuICBmb250OnN0cmluZztcclxuICBjb2xvcjpzdHJpbmc7XHJcbiAgdGV4dD86c3RyaW5nO1xyXG4gIGFsaWduPzpDYW52YXNUZXh0QWxpZ247XHJcbn1cclxuZXhwb3J0IGNsYXNzIEhVRHtcclxuICBncmFwaGljX2VsZW1lbnRzOkFycmF5PG9iajx1bmtub3duPj4gPSBbXTtcclxuICB0ZXh0X2VsZW1lbnRzOkFycmF5PFRleHQ+ID0gW107XHJcbiAgc3RhdGVmKGE6bnVtYmVyKXtcclxuICAgIGZvcihsZXQgeCBvZiB0aGlzLmdyYXBoaWNfZWxlbWVudHMpe1xyXG4gICAgICB4LnN0YXRlZihhKTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgeCBvZiB0aGlzLnRleHRfZWxlbWVudHMpe1xyXG4gICAgICB4LnN0YXRlZihhKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0e1xyXG4gIGdldF9mdW5jOkh1ZFRleHRHZXRGdW5jO1xyXG4gIHN0YXRlOlRleHRfTm9kZTtcclxuICBjb25zdHJ1Y3RvcihhOlRleHRfTm9kZSxiOkh1ZFRleHRHZXRGdW5jKXtcclxuICAgIGlmKCFhLmFsaWduKXtcclxuICAgICAgYS5hbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0gYTtcclxuICAgIGlmKCF0aGlzLnN0YXRlLnRleHQpe1xyXG4gICAgICB0aGlzLnN0YXRlLnRleHQgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRfZnVuYyA9IGI7XHJcbiAgfVxyXG4gIHN0YXRlZihhOm51bWJlcil7XHJcbiAgIHRoaXMuc3RhdGUudGV4dCA9IHRoaXMuZ2V0X2Z1bmMoKTtcclxuICB9XHJcbiAgcmVuZGVyZihhOm51bWJlcik6Rm9udHtcclxuICAgIGxldCB7c2l6ZSxjb2xvcixmb250LHRleHQsbWF4X3dpZHRoLGFsaWdufSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzaXplLFxyXG4gICAgICBjb2xvcixcclxuICAgICAgZm9udCxcclxuICAgICAgdGV4dCxcclxuICAgICAgbWF4X3dpZHRoLFxyXG4gICAgICBhbGlnblxyXG4gICAgfTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBzdGF0ZV9mdW5jLCBvYmpfc3RhdGUsIHBvc2l0aW9uIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgcmVuZGVyX2Z1bmMsIHJlbmRlcl90eXBlIH0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlLCBwb3NpdGlvbmVkX3Nwcml0ZSwgc3ByaXRlLCBzcHJpdGVfZ2VuIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgVW5iaW5kLCBCaW5kLCBjb250cm9sX2Z1bmMsIGV4ZWNfdHlwZSB9IGZyb20gXCIuL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7YXVkaW99IGZyb20gXCIuL2F1ZGlvXCI7XHJcbmltcG9ydCB7Z2FtZX0gZnJvbSBcIi4uL3ZhblwiO1xyXG5cclxuaW50ZXJmYWNlIG9ial9pPFQ+IHtcclxuICBzdGF0ZWY6IHN0YXRlX2Z1bmM8VD4sXHJcbiAgcmVuZGVyZjogcmVuZGVyX2Z1bmNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uX2xlbmd0aChsZW5ndGg6IG51bWJlciwgZGVncmVlOiBudW1iZXIpIHtcclxuICBsZXQgYV9sZW4gPSBsZW5ndGggKiBNYXRoLnNpbihkZWdyZWUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICBsZXQgYl9sZW4gPSBsZW5ndGggKiBNYXRoLmNvcyhkZWdyZWUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICByZXR1cm4ge1xyXG4gICAgeDogYV9sZW4sXHJcbiAgICB5OiBiX2xlblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldElkKGE6IEFycmF5PG9iajx1bmtub3duPj4sIGlkOiBzdHJpbmcpOiBvYmo8dW5rbm93bj4ge1xyXG4gIGZvciAobGV0IGIgPSAwOyBiIDwgYS5sZW5ndGg7IGIrKykge1xyXG4gICAgaWYgKGFbYl0uaWQgPT0gaWQpIHtcclxuICAgICAgcmV0dXJuIGFbYl07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcbmludGVyZmFjZSBhbmltX3N0b3JhZ2Uge1xyXG4gIFtpbmRleDogc3RyaW5nXTogW0FycmF5PFtudW1iZXIsIHNwcml0ZV0+LCBudW1iZXJdXHJcbn1cclxuXHJcbmludGVyZmFjZSB2b2lkX2Z1bmMge1xyXG4gICgpOiB2b2lkXHJcbn1cclxuXHJcbmNsYXNzIGFuaW1hdGlvbnMge1xyXG4gIGFuaW1hdGlvbnM6IGFuaW1fc3RvcmFnZSA9IHt9O1xyXG4gIGFuaW1hdGlvbl90cmFja2VyID0gMDtcclxuICBjdXJyZW50OiBzdHJpbmc7XHJcbiAgY2FsbGJhY2s6IHZvaWRfZnVuYztcclxuICBhbmltYXRpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIGFkZChuYW1lOiBzdHJpbmcsIHM6IEFycmF5PFtudW1iZXIsIHNwcml0ZV0+LCBsZW5ndGg6IG51bWJlcikge1xyXG4gICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gW3MsIGxlbmd0aF07XHJcbiAgfVxyXG4gIHBsYXkobmFtZTogc3RyaW5nLCBjYWxsYmFjaz86IHZvaWRfZnVuYykge1xyXG4gICAgdGhpcy5jdXJyZW50ID0gbmFtZTtcclxuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPSAwO1xyXG4gIH1cclxuICByZW5kZXJmKHQ6IG51bWJlcik6IHNwcml0ZSB7XHJcbiAgICBsZXQgY3Vycl9hbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50XVswXTtcclxuICAgIGxldCBsZW5ndGg6IG51bWJlciA9IHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRdWzFdO1xyXG4gICAgbGV0IGluZGV4O1xyXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgY3Vycl9hbmltYXRpb24ubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xyXG4gICAgICBpZiAodGhpcy5hbmltYXRpb25fdHJhY2tlciA+PSBjdXJyX2FuaW1hdGlvbltpbmRleF1bMF0gJiYgdGhpcy5hbmltYXRpb25fdHJhY2tlciA8IGN1cnJfYW5pbWF0aW9uW2luZGV4ICsgMV1bMF0pIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbl90cmFja2VyID0gdGhpcy5hbmltYXRpb25fdHJhY2tlciArIHQ7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBjdXJyX2FuaW1hdGlvbltpbmRleF1bMV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgIH1cclxuICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25fdHJhY2tlciA+PSBsZW5ndGgpIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciA9IDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciArPSB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN1cnJfYW5pbWF0aW9uW2luZGV4XVsxXTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBoaXRib3h7XHJcbiAgd2lkdGg6bnVtYmVyLFxyXG4gIGhlaWdodDpudW1iZXIsXHJcbiAgeF9vZmZzZXQ6bnVtYmVyLFxyXG4gIHlfb2Zmc2V0Om51bWJlclxyXG59XHJcblxyXG5lbnVtIFJlbmRlclR5cGV7XHJcbiAgYm94LFxyXG4gIHNwcml0ZVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3Mgb2JqPFQ+e1xyXG4gIHNwcml0ZV91cmwgPSBcIlwiO1xyXG4gIHNwcml0ZV9zaGVldDogSFRNTEltYWdlRWxlbWVudDtcclxuICBzdGF0ZTogVDtcclxuICByZW5kZXJfdHlwZSA9IHJlbmRlcl90eXBlLnNwcml0ZTtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGNvbGxpc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGhpdGJveDogaGl0Ym94XHJcbiAgaWQ6IHN0cmluZztcclxuICBiaW5kczogQXJyYXk8bnVtYmVyPjtcclxuICB0YWdzOnN0cmluZ1tdID0gW107XHJcbiAgcm90YXRpb246IG51bWJlciA9IDA7XHJcbiAgcmVuZGVyID0gdHJ1ZTtcclxuICBhbmltYXRpb25zID0gbmV3IGFuaW1hdGlvbnMoKTtcclxuICBhdWRpbyA9IG5ldyBhdWRpbygpO1xyXG4gIGxhc3RfcmVuZGVyOm51bWJlciA9IDA7XHJcbiAgZ2FtZTpnYW1lPHVua25vd24+O1xyXG4gIHBhcmVudDpjb21wb3NpdGVfb2JqPHVua25vd24+O1xyXG4gIHNjYWxpbmc6bnVtYmVyID0gMTtcclxuICBzdGF0aWMgZGVmYXVsdF9wYXJhbXM6dW5rbm93biA9IHt9O1xyXG4gIGdldFN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2FuaW1hdGlvbnMoKSB7XHJcblxyXG4gIH1cclxuICByZWdpc3Rlcl9hdWRpbygpIHtcclxuXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uOnBvc2l0aW9uLHJvdGF0aW9uPTAscGFyYW1zID0gb2JqLmRlZmF1bHRfcGFyYW1zKSB7XHJcbiAgICB0aGlzLmlkID0gXCJcIiArIGNvdW50ZXI7XHJcbiAgICB0aGlzLmJpbmRzID0gW107XHJcbiAgICBjb3VudGVyKys7XHJcbiAgICB0aGlzLnJlZ2lzdGVyX2NvbnRyb2xzKCk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyX2F1ZGlvKCk7XHJcbiAgfVxyXG4gIGxvYWQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IGEgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgYS5zcmMgPSB0aGlzLnNwcml0ZV91cmw7XHJcbiAgICAgIGEub25sb2FkID0gKGFzeW5jICgpID0+IHtcclxuICAgICAgICBfdGhpcy5zcHJpdGVfc2hlZXQgPSBhO1xyXG4gICAgICAgIF90aGlzLnJlZ2lzdGVyX2FuaW1hdGlvbnMoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmF1ZGlvLmxvYWQoKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICB9XHJcbiAgZGlzdGFuY2UoYTpvYmo8dW5rbm93bj4pOm51bWJlcntcclxuICAgIGxldCBvX3N0ID0gYS5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGxldCBzdCA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHN0LnBvc2l0aW9uLnggLSBvX3N0LnBvc2l0aW9uLngsMikgKyBNYXRoLnBvdyhzdC5wb3NpdGlvbi55IC0gb19zdC5wb3NpdGlvbi55LDIpKTtcclxuICB9XHJcbiAgYW5nbGVUb3dhcmRzKGE6IG9iajx1bmtub3duPik6IG51bWJlciB7XHJcbiAgICBsZXQgYiA9IGEgYXMgb2JqPG9ial9zdGF0ZT47XHJcbiAgICByZXR1cm4gdGhpcy5hbmdsZVRvd2FyZHNQb2ludChiLnN0YXRlLnBvc2l0aW9uKTtcclxuICB9XHJcbiAgYW5nbGVUb3dhcmRzUG9pbnQocG9zaXRpb246cG9zaXRpb24pOm51bWJlcntcclxuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICBpZiAoc3RhdGUucG9zaXRpb24ueCA8IHBvc2l0aW9uLnggJiYgc3RhdGUucG9zaXRpb24ueSA+IHBvc2l0aW9uLnlcclxuICAgICAgfHwgKHN0YXRlLnBvc2l0aW9uLnggPCBwb3NpdGlvbi54ICYmIHN0YXRlLnBvc2l0aW9uLnkgPCBwb3NpdGlvbi55KSkge1xyXG4gICAgICByZXR1cm4gOTAgLSBNYXRoLmF0YW4oKHBvc2l0aW9uLnkgLSBzdGF0ZS5wb3NpdGlvbi55KSAvIChwb3NpdGlvbi54IC0gc3RhdGUucG9zaXRpb24ueCkpICogMTgwIC8gTWF0aC5QSVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXRlLnBvc2l0aW9uLnggPiBwb3NpdGlvbi54ICYmIHN0YXRlLnBvc2l0aW9uLnkgPCBwb3NpdGlvbi55XHJcbiAgICAgIHx8IHN0YXRlLnBvc2l0aW9uLnggPiBwb3NpdGlvbi54ICYmIHN0YXRlLnBvc2l0aW9uLnkgPiBwb3NpdGlvbi55KSB7XHJcbiAgICAgIHJldHVybiAyNzAgLSBNYXRoLmF0YW4oKHBvc2l0aW9uLnkgLSBzdGF0ZS5wb3NpdGlvbi55KSAvIChwb3NpdGlvbi54IC0gc3RhdGUucG9zaXRpb24ueCkpICogMTgwIC8gTWF0aC5QSVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIGJpbmRfY29udHJvbChrZXk6IHN0cmluZywgeDogZXhlY190eXBlLCBmdW5jOiBjb250cm9sX2Z1bmMsIGludGVydmFsID0gMSkge1xyXG4gICAgaWYgKGtleSA9PSBcIm1vdXNlMVwiKSB7XHJcbiAgICAgIGxldCBiID0gQmluZChrZXksIGZ1bmMsIHgsIGludGVydmFsLCB0aGlzKTtcclxuICAgICAgdGhpcy5iaW5kcy5wdXNoKGIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuYmluZHMucHVzaChCaW5kKGtleSwgZnVuYywgeCwgaW50ZXJ2YWwpKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVnaXN0ZXJfY29udHJvbHMoKSB7XHJcblxyXG4gIH1cclxuICBkZWxldGUoKSB7XHJcbiAgICBmb3IgKGxldCBhIG9mIHRoaXMuYmluZHMpIHtcclxuICAgICAgVW5iaW5kKGEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lLmdldFJvb20oKS5kZWxldGVJdGVtKHRoaXMuaWQpO1xyXG4gIH1cclxuICBjb2xsaXNpb25fY2hlY2soYTogY29sbGlzaW9uX2JveCk6IEFycmF5PG9iajx1bmtub3duPj4ge1xyXG4gICAgaWYgKHRoaXMuY29sbGlzaW9uKSB7XHJcbiAgICAgIGxldCByb29tID0gdGhpcy5nYW1lLmdldFJvb20oKTtcclxuICAgICAgcmV0dXJuIHJvb20uY2hlY2tfY29sbGlzaW9ucyhhLCBbdGhpcy5pZF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICBzdGF0ZWYodGltZTogbnVtYmVyKSB7XHJcblxyXG4gIH1cclxuICBnZXRfZnVsbF9jb2xsaXNpb25fYm94KCk6Y29sbGlzaW9uX2JveHtcclxuICAgIGxldCBzdCA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICBpZih0aGlzLmhpdGJveCl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDpzdC5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6c3QucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDp0aGlzLmhpdGJveC53aWR0aCAqIHRoaXMuc2NhbGluZyxcclxuICAgICAgICBoZWlnaHQ6dGhpcy5oaXRib3guaGVpZ2h0ICogdGhpcy5zY2FsaW5nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDpzdC5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6c3QucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDp0aGlzLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDp0aGlzLmhlaWdodFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldF9hbGxfY29sbGlzaW9uX2JveGVzKCk6Y29sbGlzaW9uX2JveFtde1xyXG4gICAgbGV0IHN0ID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGlmKHRoaXMuaGl0Ym94KXtcclxuICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgeDpzdC5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6c3QucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDp0aGlzLmhpdGJveC53aWR0aCAqIHRoaXMuc2NhbGluZyxcclxuICAgICAgICBoZWlnaHQ6dGhpcy5oaXRib3guaGVpZ2h0ICogdGhpcy5zY2FsaW5nXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4gW3tcclxuICAgICAgICB4OnN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTpzdC5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOnRoaXMud2lkdGggKiB0aGlzLnNjYWxpbmcsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsaW5nXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbGxpZGVzX3dpdGhfYm94KGE6IGNvbGxpc2lvbl9ib3gpOiBib29sZWFuIHtcclxuICAgIGxldCBzdCA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICBsZXQgaGNvbGxpZGVzID0gZmFsc2UsIHZjb2xsaWRlcyA9IGZhbHNlO1xyXG4gICAgbGV0IGhib3ggPSB0aGlzLmhpdGJveDtcclxuICAgIGlmKCF0aGlzLmhpdGJveCl7XHJcbiAgICAgIGhib3ggPSB7XHJcbiAgICAgICAgeF9vZmZzZXQ6MCxcclxuICAgICAgICB5X29mZnNldDowLFxyXG4gICAgICAgIHdpZHRoOnRoaXMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBvYiA9IHtcclxuICAgICAgbGVmdDogKHN0LnBvc2l0aW9uLnggKyBoYm94Lnhfb2Zmc2V0IC0gaGJveC53aWR0aCAvIDIpLFxyXG4gICAgICByaWdodDogKHN0LnBvc2l0aW9uLnggKyBoYm94Lnhfb2Zmc2V0ICsgaGJveC53aWR0aCAvIDIpLFxyXG4gICAgICB0b3A6IChzdC5wb3NpdGlvbi55ICsgaGJveC55X29mZnNldCArIGhib3guaGVpZ2h0IC8gMiksXHJcbiAgICAgIGJvdHRvbTogKHN0LnBvc2l0aW9uLnkgKyBoYm94Lnlfb2Zmc2V0IC0gaGJveC5oZWlnaHQgLyAyKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIGxlZnQ6IChhLnggLSBhLndpZHRoIC8gMiksXHJcbiAgICAgIHJpZ2h0OiAoYS54ICsgYS53aWR0aCAvIDIpLFxyXG4gICAgICB0b3A6IChhLnkgKyBhLmhlaWdodCAvIDIpLFxyXG4gICAgICBib3R0b206IChhLnkgLSBhLmhlaWdodCAvIDIpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChvYi5sZWZ0ID49IGJveC5sZWZ0ICYmIG9iLmxlZnQgPCBib3gucmlnaHQpIHx8IChib3gubGVmdCA+IG9iLmxlZnQgJiYgYm94LmxlZnQgPCBvYi5yaWdodCkpIHtcclxuICAgICAgaGNvbGxpZGVzID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICgob2IuYm90dG9tID49IGJveC5ib3R0b20gJiYgb2IuYm90dG9tIDwgYm94LnRvcCkgfHwgKGJveC5ib3R0b20gPiBvYi5ib3R0b20gJiYgYm94LmJvdHRvbSA8IG9iLnRvcCkpe1xyXG4gICAgICB2Y29sbGlkZXMgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhjb2xsaWRlcyAmJiB2Y29sbGlkZXM7XHJcbiAgfVxyXG4gIGVtaXRfcGFydGljbGUobmFtZTpzdHJpbmcsb2Zmc2V0OnBvc2l0aW9uLGxpZmV0aW1lOm51bWJlcixyYW5nZTpudW1iZXIpe1xyXG4gICAgbGV0IHJvb20gPSB0aGlzLmdhbWUuZ2V0Um9vbSgpO1xyXG4gICAgbGV0IHN0ID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGxldCBmaW5hbF9wb3NpdGlvbjpwb3NpdGlvbiA9IHtcclxuICAgICAgeDpzdC5wb3NpdGlvbi54ICsgb2Zmc2V0LngsXHJcbiAgICAgIHk6c3QucG9zaXRpb24ueSArIG9mZnNldC55XHJcbiAgICB9XHJcbiAgICByb29tLmVtaXRfcGFydGljbGUobmFtZSxmaW5hbF9wb3NpdGlvbixsaWZldGltZSxyYW5nZSlcclxuICB9XHJcbiAgcmVuZGVyX3RyYWNrKHRpbWU6bnVtYmVyKTogcG9zaXRpb25lZF9zcHJpdGVbXSB7XHJcbiAgICBsZXQgcmVuZGVyZWQgPSB0aGlzLnJlbmRlcmYodGltZSAtIHRoaXMubGFzdF9yZW5kZXIpO1xyXG4gICAgbGV0IGZpbmFsOnBvc2l0aW9uZWRfc3ByaXRlW107XHJcbiAgICB0aGlzLmxhc3RfcmVuZGVyID0gdGltZTtcclxuICAgIGlmKEFycmF5LmlzQXJyYXkocmVuZGVyZWQpKVxyXG4gICAgICBmaW5hbCA9IHJlbmRlcmVkXHJcbiAgICBlbHNle1xyXG4gICAgICBmaW5hbCA9IFtyZW5kZXJlZF1cclxuICAgIH1cclxuICAgIHJldHVybiBmaW5hbDtcclxuICB9XHJcbiAgcmVuZGVyZih0aW1lOiBudW1iZXIpOiBwb3NpdGlvbmVkX3Nwcml0ZVtdIHwgcG9zaXRpb25lZF9zcHJpdGV7XHJcbiAgICBsZXQgc3QgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgaWYgKCF0aGlzLmFuaW1hdGlvbnMuY3VycmVudCkge1xyXG4gICAgICBsZXQgc3ByaXRlX2hlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICBsZXQgc3ByaXRlX3dpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgaWYgKHRoaXMuaGVpZ2h0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHNwcml0ZV9oZWlnaHQgPSB0aGlzLnNwcml0ZV9zaGVldC5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMud2lkdGggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3ByaXRlX3dpZHRoID0gdGhpcy5zcHJpdGVfc2hlZXQud2lkdGg7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcHJpdGU6IHtcclxuICAgICAgICAgIHNwcml0ZV9zaGVldDogdGhpcy5zcHJpdGVfc2hlZXQsXHJcbiAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgc3ByaXRlX3dpZHRoOiBzcHJpdGVfd2lkdGgsXHJcbiAgICAgICAgICBzcHJpdGVfaGVpZ2h0OiBzcHJpdGVfaGVpZ2h0LFxyXG4gICAgICAgICAgb3BhY2l0eToxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB4OiBzdC5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHN0LnBvc2l0aW9uLnlcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNwcml0ZTp0aGlzLmFuaW1hdGlvbnMucmVuZGVyZih0aW1lKSxcclxuICAgICAgeDogc3QucG9zaXRpb24ueCxcclxuICAgICAgeTogc3QucG9zaXRpb24ueVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBjb21wb3NpdGVfc3RhdGlje1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyLFxyXG4gIG9iajpvYmo8dW5rbm93bj5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGNvbXBvc2l0ZV9vYmo8VD4gZXh0ZW5kcyBvYmo8VD57XHJcbiAgb2JqZWN0czpvYmo8dW5rbm93bj5bXSA9IFtdO1xyXG4gIHJlbmRlciA9IGZhbHNlO1xyXG4gIHJlZ2lzdGVyZWQgPSBmYWxzZTtcclxuICBjb2xsaXNpb24gPSBmYWxzZTtcclxuICBzdGF0aWNzOmNvbXBvc2l0ZV9zdGF0aWNbXSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKHBvczpwb3NpdGlvbil7XHJcbiAgICBzdXBlcihwb3MpO1xyXG4gIH1cclxuICBsb2FkKCl7XHJcbiAgICAvL3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT5yZXNvbHZlKCkpO1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFsuLi50aGlzLm9iamVjdHMubWFwKChhKT0+YS5sb2FkKCkpLC4uLnRoaXMuc3RhdGljcy5tYXAoYT0+YS5vYmoubG9hZCgpKV0pO1xyXG4gIH1cclxuICBhc3luYyByZWdpc3Rlcl9jb21wb3NpdGUoKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgIGxldCBsZW5ndGggPSB0aGlzLmNvbWJpbmVkX29iamVjdHMoKS5sZW5ndGg7XHJcbiAgICAgIGZvcihsZXQgYSA9IDA7YSA8IGxlbmd0aDsgYSsrKXtcclxuICAgICAgICBsZXQgbyA9IHRoaXMuY29tYmluZWRfb2JqZWN0cygpW2FdO1xyXG4gICAgICAgIG8ucGFyZW50ID0gdGhpcztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmdhbWUuZ2V0Um9vbSgpLmFkZEl0ZW1zKHRoaXMuY29tYmluZWRfb2JqZWN0cygpKTtcclxuICAgICAgcmVzb2x2ZSgpOyBcclxuICAgIH0pXHJcbiAgICBcclxuICB9XHJcbiAgY29tYmluZWRfb2JqZWN0cygpOm9iajx1bmtub3duPltde1xyXG4gICAgbGV0IGNvbWJpbmVkID0gWy4uLnRoaXMub2JqZWN0cywuLi50aGlzLnN0YXRpY3MubWFwKGE9PmEub2JqKV07XHJcbiAgICBjb21iaW5lZC5mb3JFYWNoKGE9PmEucGFyZW50ID0gdGhpcyk7XHJcbiAgICByZXR1cm4gY29tYmluZWQ7XHJcbiAgfVxyXG4gIGdldF9JdGVtc19ieV9UYWcodGFnOnN0cmluZyl7XHJcbiAgICByZXR1cm4gdGhpcy5jb21iaW5lZF9vYmplY3RzKCkuZmlsdGVyKChhKT0+YS50YWdzLmluZGV4T2YodGFnKSA+IC0xKTtcclxuICB9XHJcbiAgYWRkX0l0ZW0oYTpvYmo8dW5rbm93bj4sbGlzdD10aGlzLm9iamVjdHMpe1xyXG4gICAgbGlzdC5wdXNoKGEpO1xyXG4gICAgYS5wYXJlbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5nYW1lLmdldFJvb20oKS5hZGRJdGVtKGEpO1xyXG4gIH1cclxuICBnZXRfYWxsX2NvbGxpc2lvbl9ib3hlcygpOmNvbGxpc2lvbl9ib3hbXXtcclxuICAgIGxldCBhcnI6Y29sbGlzaW9uX2JveFtdID0gW107XHJcbiAgICBmb3IobGV0IG9iaiBvZiBbLi4udGhpcy5zdGF0aWNzLm1hcChhPT5hLm9iaiksLi4udGhpcy5vYmplY3RzXSl7XHJcbiAgICAgIGxldCBjcmVhdGVkX2JveCA9IG9iai5nZXRfYWxsX2NvbGxpc2lvbl9ib3hlcygpO1xyXG4gICAgICBpZihBcnJheS5pc0FycmF5KGNyZWF0ZWRfYm94KSl7XHJcbiAgICAgICAgYXJyLnB1c2goLi4uY3JlYXRlZF9ib3gpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgYXJyLnB1c2goY3JlYXRlZF9ib3gpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH1cclxuICBkZWxldGUoKXtcclxuICAgIGZvcihsZXQgYSBvZiB0aGlzLm9iamVjdHMpe1xyXG4gICAgICBhLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhIG9mIHRoaXMuc3RhdGljcyl7XHJcbiAgICAgIGEub2JqLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gICAgc3VwZXIuZGVsZXRlKCk7XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOm51bWJlcil7XHJcbiAgICBcclxuICAgIGlmKHRoaXMuZ2FtZS5nZXRSb29tKCkgJiYgIXRoaXMucmVnaXN0ZXJlZCl7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJfY29tcG9zaXRlKCk7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgY29sbGlkZXNfd2l0aF9ib3goYTogY29sbGlzaW9uX2JveCk6Ym9vbGVhbntcclxuICAgIGZvcihsZXQgb2JqIG9mIHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGlmKG9iai5jb2xsaWRlc193aXRoX2JveChhKSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgbyBvZiB0aGlzLnN0YXRpY3Mpe1xyXG4gICAgICBpZihvLm9iai5jb2xsaWRlc193aXRoX2JveChhKSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9ICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBzdGF0aWNfb2JqIHtcclxuICBzcHJpdGVfdXJsID0gXCJcIjtcclxuICBzcHJpdGU6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBncmF2aXR5X29iajxUPiBleHRlbmRzIG9iajxUPntcclxuICBncmF2aXR5ID0gdHJ1ZVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRJbnQobWluOm51bWJlciwgbWF4Om51bWJlcikge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSApICsgbWluO1xyXG59IiwiaW1wb3J0IHsgc3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IEdldFZpZXdwb3J0RGltZW5zaW9ucyB9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IFRleHRfTm9kZSwgVGV4dFNldHRpbmcsSFVELFRleHQgfSBmcm9tIFwiLi9odWRcIjtcclxuaW1wb3J0IHtwb3NpdGlvbmVkX3Nwcml0ZX0gZnJvbSBcIi4vc3ByaXRlXCJcclxuXHJcbmludGVyZmFjZSBjYW1lcmFfc3RhdGUge1xyXG4gIHNjYWxpbmc6IG51bWJlcixcclxuICBwb3NpdGlvbjoge1xyXG4gICAgeDogbnVtYmVyLFxyXG4gICAgeTogbnVtYmVyXHJcbiAgfVxyXG4gIGRpbWVuc2lvbnM6IHtcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlclxyXG4gIH0sXHJcbiAgdmlld3BvcnQ6IHZpZXdwb3J0LFxyXG4gIGRlYnVnOmJvb2xlYW4sXHJcbiAgaHVkOkhVRCAgXHJcbn1cclxuXHJcbmludGVyZmFjZSB2aWV3cG9ydCB7XHJcbiAgeDogbnVtYmVyLFxyXG4gIHk6IG51bWJlcixcclxuICB3aWR0aDogbnVtYmVyLFxyXG4gIGhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBjYW1lcmFfcHJvcGVydGllcyB7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgZGltZW5zaW9uczp7XHJcbiAgICBoZWlnaHQ6bnVtYmVyLFxyXG4gICAgd2lkdGg6bnVtYmVyXHJcbiAgfVxyXG4gIHNjYWxpbmc6bnVtYmVyLFxyXG4gIGRlYnVnOmJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbWVyYSB7XHJcbiAgc3RhdGU6IGNhbWVyYV9zdGF0ZTtcclxuICBodWQ6IEhVRDtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczpjYW1lcmFfcHJvcGVydGllcywgdjogdmlld3BvcnQpIHtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNjYWxpbmc6cHJvcHMuc2NhbGluZyxcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiBwcm9wcy54ICogcHJvcHMuc2NhbGluZyxcclxuICAgICAgICB5OiBwcm9wcy55ICogcHJvcHMuc2NhbGluZ1xyXG4gICAgICB9LFxyXG4gICAgICBkaW1lbnNpb25zOiBwcm9wcy5kaW1lbnNpb25zLFxyXG4gICAgICB2aWV3cG9ydDoge1xyXG4gICAgICAgIHg6di54LFxyXG4gICAgICAgIHk6di55ICxcclxuICAgICAgICB3aWR0aDogdi53aWR0aCAqIHByb3BzLmRpbWVuc2lvbnMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB2LmhlaWdodCAqIHByb3BzLmRpbWVuc2lvbnMuaGVpZ2h0XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlYnVnOnByb3BzLmRlYnVnLFxyXG4gICAgICBodWQ6dW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldCB4KHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi54ID0geDtcclxuICB9XHJcbiAgc2V0IHkoeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgPSB5XHJcbiAgfVxyXG4gIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucG9zaXRpb24ueDtcclxuICB9XHJcbiAgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3NpdGlvbi55O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcmVuZGVyX2Z1bmMge1xyXG4gICh4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGluZzogbnVtYmVyKTogdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgcmVjdGFuZ2xlIHtcclxuICB3aWR0aDogbnVtYmVyLFxyXG4gIGhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBzcHJpdGVfYXJncyB7XHJcbiAgc3ByaXRlOiBzcHJpdGUsXHJcbiAgeDogbnVtYmVyLFxyXG4gIHk6IG51bWJlcixcclxuICByb3RhdGlvbjogbnVtYmVyLFxyXG4gIHNjYWxlOm51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgcmVuZGVyZXJfYXJncyB7XHJcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gIGNhbWVyYTogQ2FtZXJhXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIHJlbmRlcl90eXBlIHtcclxuICB0ZXh0LFxyXG4gIHNwcml0ZSxcclxuICByZWN0LFxyXG4gIHN0cm9rZV9yZWN0XHJcbn1cclxuLypcclxuZXhwb3J0IGNvbnN0IGVsZW1lbnRfcmVuZGVyID0gKHI6cmVuZGVyZXJfYXJncyxvOm9iajx1bmtub3duPix0aW1lOm51bWJlcikgPT4ge1xyXG4gIGxldCBjYW1lcmEgPSByLmNhbWVyYTtcclxuICBsZXQgdmhlaWdodCA9IHIuY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgocy54IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAvIDIgLSBzLnNwcml0ZS5zcHJpdGVfd2lkdGggLyAyKSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0gcy55IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiAtIHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQgLyAyICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGhlaWdodCA9IHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCB3aWR0aCA9IHMuc3ByaXRlLnNwcml0ZV93aWR0aCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgaWYoby5yZW5kZXJfdHlwZSA9PSByZW5kZXJfdHlwZS50ZXh0KXtcclxuXHJcbiAgfVxyXG4gIGVsc2UgaWYoby5yZW5kZXJfdHlwZSA9PSByZW5kZXJfdHlwZS5zcHJpdGUpe1xyXG5cclxuICB9XHJcbiAgZWxzZSBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnN0cm9rZV9yZWN0KXtcclxuXHJcbiAgfVxyXG59XHJcbiovXHJcbmV4cG9ydCBjb25zdCBvYmplY3RfcmVuZGVyID0gKHI6cmVuZGVyZXJfYXJncyxvOm9iajx1bmtub3duPix0aW1lOm51bWJlcikgPT4ge1xyXG4gIGxldCByZW5kZXJlZCA9IG8ucmVuZGVyX3RyYWNrKHRpbWUpO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHJlbmRlcmVkKSkge1xyXG4gICAgZm9yIChsZXQgcCBvZiByZW5kZXJlZCl7XHJcbiAgICAgIHNwcml0ZV9yZW5kZXJlcihyLCB7XHJcbiAgICAgICAgc3ByaXRlOnAuc3ByaXRlLFxyXG4gICAgICAgIHg6IHAueCxcclxuICAgICAgICB5OiBwLnksXHJcbiAgICAgICAgcm90YXRpb246IG8ucm90YXRpb24sXHJcbiAgICAgICAgc2NhbGU6by5zY2FsaW5nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGxldCBwb3NpdGlvbmVkX3Nwcml0ZSA9IHJlbmRlcmVkIGFzIHBvc2l0aW9uZWRfc3ByaXRlO1xyXG4gICAgaWYoby5yZW5kZXJfdHlwZSA9PSByZW5kZXJfdHlwZS5zcHJpdGUpe1xyXG4gICAgICBzcHJpdGVfcmVuZGVyZXIociwge1xyXG4gICAgICAgIHNwcml0ZTogcG9zaXRpb25lZF9zcHJpdGUuc3ByaXRlLFxyXG4gICAgICAgIHg6IHBvc2l0aW9uZWRfc3ByaXRlLngsXHJcbiAgICAgICAgeTogcG9zaXRpb25lZF9zcHJpdGUueSxcclxuICAgICAgICByb3RhdGlvbjogby5yb3RhdGlvbixcclxuICAgICAgICBzY2FsZTpvLnNjYWxpbmdcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYoby5yZW5kZXJfdHlwZSA9PSByZW5kZXJfdHlwZS5yZWN0KXtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaHVkX3RleHRfcmVuZGVyZXIgPSAocjogcmVuZGVyZXJfYXJncywgczogVGV4dFNldHRpbmcpID0+IHtcclxuICBsZXQgdmhlaWdodCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodDtcclxuICByLmNvbnRleHQuZm9udCA9IGAke3MuZm9udC5zaXplfXB4ICR7cy5mb250LmZvbnR9YDtcclxuICByLmNvbnRleHQuZmlsbFN0eWxlID0gcy5mb250LmNvbG9yO1xyXG4gIHIuY29udGV4dC50ZXh0QWxpZ24gPSBzLmZvbnQuYWxpZ247XHJcbiAgaWYgKHMuZm9udC5tYXhfd2lkdGgpIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgcy54LCB2aGVpZ2h0IC0gcy55LCBzLmZvbnQubWF4X3dpZHRoKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByLmNvbnRleHQuZmlsbFRleHQocy5mb250LnRleHQsIHMueCwgdmhlaWdodCAtIHMueSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGV4dF9yZW5kZXJlciA9IChyOnJlbmRlcmVyX2FyZ3MsczpUZXh0U2V0dGluZykgPT4ge1xyXG4gIGxldCBjYW1lcmEgPSByLmNhbWVyYTtcclxuICBsZXQgdmhlaWdodCA9IHIuY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0O1xyXG4gIGxldCB3aWR0aCA9IHIuY29udGV4dC5tZWFzdXJlVGV4dChzLmZvbnQudGV4dCkud2lkdGggKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBoZWlnaHQgPSBzLmZvbnQuc2l6ZSAqIDEuMiAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGZpbmFsX3ggPSAoKHMueCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9yLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSBzLnkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodC8yICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIHIuY29udGV4dC5mb250ID0gYCR7cy5mb250LnNpemUgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nfXB4ICR7cy5mb250LmZvbnR9YDtcclxuICByLmNvbnRleHQuZmlsbFN0eWxlID0gcy5mb250LmNvbG9yO1xyXG4gIHIuY29udGV4dC50ZXh0QWxpZ24gPSBzLmZvbnQuYWxpZ25cclxuICByLmNvbnRleHQuc2F2ZSgpO1xyXG4gIHIuY29udGV4dC50cmFuc2xhdGUoZmluYWxfeCwgZmluYWxfeSk7XHJcbiAgaWYgKHMuZm9udC5tYXhfd2lkdGgpIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgMCwgMCwgcy5mb250Lm1heF93aWR0aCk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCAwLCAwKTtcclxuICB9XHJcbiAgci5jb250ZXh0LnJlc3RvcmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNwcml0ZV9yZW5kZXJlciA9IChyOiByZW5kZXJlcl9hcmdzLCBzOiBzcHJpdGVfYXJncykgPT4ge1xyXG4gIGxldCBjYW1lcmEgPSByLmNhbWVyYTtcclxuICBsZXQgdmhlaWdodCA9IHIuY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgocy54IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL3IuY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiAtIHMuc3ByaXRlLnNwcml0ZV93aWR0aCAqIHMuc2NhbGUgLyAyKSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0gcy55IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEvci5jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHMuc2NhbGUgLyAyICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGhlaWdodCA9IHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQgKiBzLnNjYWxlICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgd2lkdGggPSBzLnNwcml0ZS5zcHJpdGVfd2lkdGggKiBzLnNjYWxlICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICByLmNvbnRleHQuc2F2ZSgpO1xyXG4gIHIuY29udGV4dC5nbG9iYWxBbHBoYSA9IHMuc3ByaXRlLm9wYWNpdHk7XHJcbiAgci5jb250ZXh0LnRyYW5zbGF0ZShmaW5hbF94ICArICh3aWR0aCkgLyAyLCBmaW5hbF95ICsgaGVpZ2h0IC8gMilcclxuICBsZXQgcmFkaWFucyA9IHMucm90YXRpb24gKiAoTWF0aC5QSSAvIDE4MCk7XHJcbiAgci5jb250ZXh0LnJvdGF0ZShyYWRpYW5zKTtcclxuICByLmNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgcy5zcHJpdGUuc3ByaXRlX3NoZWV0LFxyXG4gICAgcy5zcHJpdGUubGVmdCxcclxuICAgIHMuc3ByaXRlLnRvcCxcclxuICAgIHMuc3ByaXRlLnNwcml0ZV93aWR0aCAqIHMuc2NhbGUsXHJcbiAgICBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0ICogcy5zY2FsZSxcclxuICAgIC0od2lkdGgpIC8gMixcclxuICAgIC1oZWlnaHQgLyAyLFxyXG4gICAgd2lkdGgsXHJcbiAgICBoZWlnaHRcclxuICApXHJcbiAgci5jb250ZXh0LnJlc3RvcmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0cm9rZWRfcmVjdF9yZW5kZXJlciA9IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJlY3Q6IHJlY3RhbmdsZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGNhbWVyYTogQ2FtZXJhKSA9PiB7XHJcbiAgbGV0IHZoZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgoeCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcmVjdC53aWR0aCAvIDIpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0geSAtIHJlY3QuaGVpZ2h0IC8gMiAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGhlaWdodCA9IHJlY3QuaGVpZ2h0ICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IHdpZHRoID0gcmVjdC53aWR0aCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICBjb250ZXh0LnN0cm9rZVJlY3QoZmluYWxfeCwgZmluYWxfeSwgd2lkdGgsIGhlaWdodCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWN0X3JlbmRlcmVyID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcmVjdDogcmVjdGFuZ2xlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgY2FtZXJhOiBDYW1lcmEpID0+IHtcclxuICBsZXQgdmhlaWdodCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAvIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKCh4IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSByZWN0LndpZHRoIC8gMikgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSB5IC0gcmVjdC5oZWlnaHQgLyAyIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55KSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgd2lkdGggPSByZWN0LndpZHRoICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGNvbnRleHQuZmlsbFJlY3QoZmluYWxfeCwgZmluYWxfeSwgd2lkdGgsIGhlaWdodCk7XHJcbn0iLCJpbXBvcnQgeyBncmF2aXR5X29iaixvYmogfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgUGFydGljbGUsIHNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBvYmpfc3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyB2ZWxvY2l0eV9jb2xsaXNpb25fY2hlY2ssY2hlY2tfY29sbGlzaW9ucyxjb2xsaXNpb25fYm94LGNoZWNrX2FsbF9jb2xsaXNpb25zLGNoZWNrX2FsbF9vYmplY3RzfSBmcm9tIFwiLi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHtyZW5kZXJfY29sbGlzaW9uX2JveCxERUJVR30gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQge0JpbmQsY29udHJvbF9mdW5jLCBleGVjX3R5cGV9IGZyb20gXCIuL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7SFVELFRleHQsIFRleHRfTm9kZX0gZnJvbSBcIi4vaHVkXCI7XHJcbmltcG9ydCB7YXVkaW99IGZyb20gXCIuL2F1ZGlvXCJcclxuaW1wb3J0IHtnYW1lfSBmcm9tIFwiLi4vdmFuXCI7XHJcblxyXG5pbnRlcmZhY2UgcG9zaXRpb257XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5X2dyYXZpdHkob2I6Z3Jhdml0eV9vYmo8dW5rbm93bj4sZ3Jhdl9jb25zdDpudW1iZXIsIGdyYXZfbWF4Om51bWJlcil7XHJcbiAgbGV0IHN0ID0gb2Iuc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gIGlmKG9iLmdyYXZpdHkgJiYgc3QudmVsb2NpdHkueSA+IGdyYXZfbWF4KXtcclxuICAgIHN0LnZlbG9jaXR5LnkgKz0gZ3Jhdl9jb25zdDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGFydGljbGVfZW50cnl7XHJcbiAgc3ByaXRlOnN0cmluZyxcclxuICBoZWlnaHQ6bnVtYmVyLFxyXG4gIHdpZHRoOm51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgcGFydGljbGVze1xyXG4gIFtpbmRleDpzdHJpbmddOnBhcnRpY2xlX2VudHJ5XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugcm9vbV9pPFQ+e1xyXG4gIGJhY2tncm91bmRfdXJsOnN0cmluZyxcclxuICBvYmplY3RzOkFycmF5PG9iajx1bmtub3duPj5cclxuICBzdGF0ZTpUXHJcbn1cclxuZXhwb3J0IGNsYXNzIHJvb208VD57XHJcbiAgYmFja2dyb3VuZF91cmw6IHN0cmluZztcclxuICBiYWNrZ3JvdW5kOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIG9iamVjdHM6IEFycmF5PG9iajx1bmtub3duPj4gPSBbXTtcclxuICBwYXJ0aWNsZXM6cGFydGljbGVzID0ge307XHJcbiAgcGFydGljbGVzX2FycjogQXJyYXk8b2JqPHVua25vd24+PiA9IFtdO1xyXG4gIHN0YXRlOiBUO1xyXG4gIGdhbWU6Z2FtZTx1bmtub3duPjtcclxuICBodWQ6SFVEO1xyXG4gIGF1ZGlvID0gbmV3IGF1ZGlvKCk7XHJcbiAgdGV4dF9ub2RlczpUZXh0W10gPSBbXTtcclxuICBjb25zdHJ1Y3RvcihnYW1lOmdhbWU8dW5rbm93bj4pe1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICB9XHJcbiAgbG9hZCgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgYSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBsZXQgdG9fYXdhaXQgPSB0aGlzLm9iamVjdHMubWFwKChhKSA9PiBhLmxvYWQoKSk7XHJcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRvX2F3YWl0KTtcclxuICAgICAgYS5zcmMgPSB0aGlzLmJhY2tncm91bmRfdXJsO1xyXG4gICAgICBhLm9uZXJyb3IgPSAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgbG9hZGluZyB1cmw6XCIgKyB0aGlzLmJhY2tncm91bmRfdXJsKTtcclxuICAgICAgfSlcclxuICAgICAgYS5vbmxvYWQgPSAoYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgX3RoaXMuYmFja2dyb3VuZCA9IGE7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hdWRpby5sb2FkKCk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIGFzeW5jIGFkZEl0ZW0obzpvYmo8dW5rbm93bj4sIGxpc3QgPSB0aGlzLm9iamVjdHMpe1xyXG4gICAgYXdhaXQgby5sb2FkKCk7XHJcbiAgICBvLmdhbWUgPSB0aGlzLmdhbWU7XHJcbiAgICBsaXN0LnB1c2gobyk7XHJcbiAgfVxyXG4gIGFzeW5jIGFkZEl0ZW1zKG86b2JqPHVua25vd24+W10sIGxpc3QgPSB0aGlzLm9iamVjdHMpe1xyXG4gICAgZm9yKGxldCBvYiBvZiBvKXtcclxuICAgICAgb2IuZ2FtZSA9IHRoaXMuZ2FtZTtcclxuICAgIH1cclxuICAgIGF3YWl0IFByb21pc2UuYWxsKG8ubWFwKChhKT0+YS5sb2FkKCkpKTtcclxuICAgIGxpc3QucHVzaCguLi5vKTtcclxuICB9XHJcbiAgZGVsZXRlSXRlbShpZDpzdHJpbmcsIGxpc3QgPSB0aGlzLm9iamVjdHMpe1xyXG4gICAgZm9yKGxldCBhID0gMDthIDwgbGlzdC5sZW5ndGg7YSsrKXtcclxuICAgICAgaWYobGlzdFthXS5pZCA9PT0gaWQpe1xyXG4gICAgICAgIGxpc3Quc3BsaWNlKGEsMSlcclxuICAgICAgICBhLS07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmVnaXN0ZXJQYXJ0aWNsZXMoKXtcclxuXHJcbiAgfVxyXG4gIGJpbmRDb250cm9sKGtleTpzdHJpbmcseDpleGVjX3R5cGUsZnVuYzpjb250cm9sX2Z1bmMsaW50ZXJ2YWw6bnVtYmVyID0gMSl7XHJcbiAgICBCaW5kKGtleSxmdW5jLHgsaW50ZXJ2YWwpOyBcclxuICB9XHJcbiAgY2hlY2tfY29sbGlzaW9ucyhib3g6Y29sbGlzaW9uX2JveCxleGVtcHQ/OkFycmF5PHN0cmluZz4pOkFycmF5PG9iajx1bmtub3duPj57XHJcbiAgICBpZihERUJVRyl7XHJcbiAgICAgIHJlbmRlcl9jb2xsaXNpb25fYm94KGJveCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hlY2tfYWxsX2NvbGxpc2lvbnMoYm94LHRoaXMub2JqZWN0cyxleGVtcHQpO1xyXG4gIH1cclxuICBjaGVja19vYmplY3RzKGJveDpjb2xsaXNpb25fYm94LGV4ZW1wdD86c3RyaW5nW10sbGlzdD10aGlzLm9iamVjdHMpe1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICByZW5kZXJfY29sbGlzaW9uX2JveChib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoZWNrX2FsbF9vYmplY3RzKGJveCxsaXN0LGV4ZW1wdCk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2NvbnRyb2xzKCl7XHJcblxyXG4gIH1cclxuICBjbGVhbnVwKCl7XHJcblxyXG4gIH1cclxuICBzdGF0ZWYodGltZTogbnVtYmVyKSB7XHJcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGErKykge1xyXG4gICAgICB0aGlzLm9iamVjdHNbYV0uc3RhdGVmKHRpbWUpO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5nYW1lLnN0YXRlLmNhbWVyYXMpe1xyXG4gICAgICBmb3IobGV0IGNhbWVyYXMgb2YgdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXMpe1xyXG4gICAgICAgIGlmKGNhbWVyYXMuaHVkKXtcclxuICAgICAgICAgIGNhbWVyYXMuaHVkLnN0YXRlZih0aW1lKTtcclxuICAgICAgICB9IFxyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gIH1cclxuICBlbWl0X3BhcnRpY2xlKG5hbWU6c3RyaW5nLHBvczpwb3NpdGlvbixsaWZldGltZTpudW1iZXIscG9zX3JhbmdlOm51bWJlcil7XHJcbiAgICB0aGlzLmFkZEl0ZW0obmV3IFBhcnRpY2xlKHRoaXMucGFydGljbGVzW25hbWVdLHBvcyxsaWZldGltZSxwb3NfcmFuZ2UpLCB0aGlzLnBhcnRpY2xlc19hcnIpO1xyXG4gIH1cclxuICBnZXRPYmooaWQ6c3RyaW5nKXtcclxuICAgIGZvcihsZXQgYSA9IDA7IGEgPCB0aGlzLm9iamVjdHMubGVuZ3RoOyBhKyspe1xyXG4gICAgICBpZih0aGlzLm9iamVjdHNbYV0uaWQgPT0gaWQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdHNbYV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBnZXRPYmpCeVRhZyh0YWc6c3RyaW5nKXtcclxuICAgIHJldHVybiB0aGlzLm9iamVjdHMuZmlsdGVyKChhKT0+YS50YWdzLmluZGV4T2YodGFnKSA+IC0xKTtcclxuICB9XHJcbiAgcmVuZGVyZih0aW1lOiBudW1iZXIpOiBzcHJpdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3ByaXRlX3NoZWV0OiB0aGlzLmJhY2tncm91bmQsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgc3ByaXRlX2hlaWdodDogdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCxcclxuICAgICAgc3ByaXRlX3dpZHRoOiB0aGlzLmJhY2tncm91bmQud2lkdGgsXHJcbiAgICAgIG9wYWNpdHk6MVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IG9iaiB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBvYmpfc3RhdGUsIHBvc2l0aW9uLCBkaW1lbnNpb25zfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQge2dldFJhbmRJbnR9IGZyb20gXCIuL3JhbmRcIjtcclxuaW1wb3J0IHtwYXJ0aWNsZV9lbnRyeX0gZnJvbSBcIi4vcm9vbVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzcHJpdGV7XHJcbiAgc3ByaXRlX3NoZWV0OkhUTUxJbWFnZUVsZW1lbnQsXHJcbiAgbGVmdDpudW1iZXIsXHJcbiAgdG9wOm51bWJlcixcclxuICBzcHJpdGVfd2lkdGg6bnVtYmVyLFxyXG4gIHNwcml0ZV9oZWlnaHQ6bnVtYmVyLFxyXG4gIG9wYWNpdHk6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcG9zaXRpb25lZF9zcHJpdGV7XHJcbiAgc3ByaXRlOnNwcml0ZSxcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFydGljbGVfaXtcclxuICBsaWZldGltZTpudW1iZXI7XHJcbiAgcG9zaXRpb246e1xyXG4gICAgeDpudW1iZXIsXHJcbiAgICB5Om51bWJlclxyXG4gIH0sXHJcbiAgdmVsb2NpdHk6e1xyXG4gICAgeDpudW1iZXIsXHJcbiAgICB5Om51bWJlclxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlIGV4dGVuZHMgb2JqPFBhcnRpY2xlX2k+e1xyXG4gIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gIHJhbmRvbV9yYW5nZTpudW1iZXI7XHJcbiAgbWF4X2xpZmV0aW1lOm51bWJlcjtcclxuICBzZWxlY3RlZF9zcHJpdGU6c3ByaXRlO1xyXG4gIGNvbnN0cnVjdG9yKHBhcnQ6cGFydGljbGVfZW50cnkscG9zOnBvc2l0aW9uLGxpZmV0aW1lOm51bWJlcixyYW5kb21fcmFuZ2U6bnVtYmVyKXtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsaWZldGltZTowLFxyXG4gICAgICBwb3NpdGlvbjp7XHJcbiAgICAgICAgeDpwb3MueCArIGdldFJhbmRJbnQoLXJhbmRvbV9yYW5nZSxyYW5kb21fcmFuZ2UpLFxyXG4gICAgICAgIHk6cG9zLnkgKyBnZXRSYW5kSW50KC1yYW5kb21fcmFuZ2UscmFuZG9tX3JhbmdlKVxyXG4gICAgICB9LFxyXG4gICAgICB2ZWxvY2l0eTp7XHJcbiAgICAgICAgeDowLFxyXG4gICAgICAgIHk6MFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zcHJpdGVfdXJsID0gcGFydC5zcHJpdGU7XHJcbiAgICB0aGlzLmhlaWdodCA9IHBhcnQuaGVpZ2h0O1xyXG4gICAgdGhpcy53aWR0aCA9IHBhcnQud2lkdGg7XHJcbiAgICB0aGlzLm1heF9saWZldGltZSA9IGxpZmV0aW1lO1xyXG4gICAgdGhpcy5yYW5kb21fcmFuZ2UgPSByYW5kb21fcmFuZ2U7XHJcbiAgfVxyXG4gIGRlbGV0ZSgpe1xyXG4gICAgbGV0IHJvb20gPSB0aGlzLmdhbWUuZ2V0Um9vbSgpO1xyXG4gICAgcm9vbS5kZWxldGVJdGVtKHRoaXMuaWQscm9vbS5wYXJ0aWNsZXNfYXJyKTtcclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6bnVtYmVyKXtcclxuICAgIHRoaXMuc3RhdGUubGlmZXRpbWUgKz0gdGltZTtcclxuICAgIGlmKHRoaXMuc3RhdGUubGlmZXRpbWUgPiB0aGlzLm1heF9saWZldGltZSl7XHJcbiAgICAgIHRoaXMuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcmYodGltZTpudW1iZXIpOnBvc2l0aW9uZWRfc3ByaXRle1xyXG4gICAgaWYoIXRoaXMuc2VsZWN0ZWRfc3ByaXRlKXtcclxuICAgICAgbGV0IHNwcml0ZXMgPSBzcHJpdGVfZ2VuKHRoaXMuc3ByaXRlX3NoZWV0LHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgIGxldCByYW5kb21fcm93ID0gZ2V0UmFuZEludCgwLHNwcml0ZXMubGVuZ3RoKTtcclxuICAgICAgbGV0IHJhbmRvbV9jb2wgPSBnZXRSYW5kSW50KDAsc3ByaXRlc1tyYW5kb21fcm93XS5sZW5ndGgpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkX3Nwcml0ZSA9IHNwcml0ZXNbcmFuZG9tX3Jvd11bcmFuZG9tX2NvbF07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkX3Nwcml0ZS5vcGFjaXR5ID0gMSAtIHRoaXMuc3RhdGUubGlmZXRpbWUvdGhpcy5tYXhfbGlmZXRpbWU7XHJcbiAgICByZXR1cm57XHJcbiAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICB5OnRoaXMuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgc3ByaXRlOnRoaXMuc2VsZWN0ZWRfc3ByaXRlIFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwcml0ZV9nZW4oc3ByaXRlX3NoZWV0OkhUTUxJbWFnZUVsZW1lbnQsc3ByaXRlX3dpZHRoOm51bWJlcixzcHJpdGVfaGVpZ2h0Om51bWJlcik6QXJyYXk8QXJyYXk8c3ByaXRlPj57XHJcbiAgbGV0IHdpZHRoID0gc3ByaXRlX3NoZWV0LndpZHRoO1xyXG4gIGxldCBoZWlnaHQgPSBzcHJpdGVfc2hlZXQuaGVpZ2h0O1xyXG4gIGxldCBzcHJpdGVzOkFycmF5PEFycmF5PHNwcml0ZT4+ID0gW107XHJcbiAgZm9yKGxldCBiID0gMDsgYiA8IGhlaWdodDtiICs9IHNwcml0ZV9oZWlnaHQpe1xyXG4gICAgc3ByaXRlcy5wdXNoKFtdKTtcclxuICAgIGZvcihsZXQgYSA9IDA7IGEgPCB3aWR0aDthICs9IHNwcml0ZV93aWR0aCl7XHJcbiAgICAgIHNwcml0ZXNbYl0ucHVzaCh7XHJcbiAgICAgICAgc3ByaXRlX3NoZWV0LFxyXG4gICAgICAgIGxlZnQ6YSxcclxuICAgICAgICB0b3A6YiAqIHNwcml0ZV9oZWlnaHQsXHJcbiAgICAgICAgc3ByaXRlX2hlaWdodCxcclxuICAgICAgICBzcHJpdGVfd2lkdGgsXHJcbiAgICAgICAgb3BhY2l0eToxXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzcHJpdGVzO1xyXG59XHJcblxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIHN0YXRlX2Z1bmM8VD57XHJcbiAgKGxhc3RfdGltZTpudW1iZXIsY3VycmVudF9zdGF0ZTpUKTpUXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgdmVsb2NpdHl7XHJcbiAgeDpudW1iZXI7XHJcbiAgeTpudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcG9zaXRpb257XHJcbiAgeDpudW1iZXI7XHJcbiAgeTpudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZGltZW5zaW9uc3tcclxuICBoZWlnaHQ6bnVtYmVyLFxyXG4gIHdpZHRoOm51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG9ial9zdGF0ZXtcclxuICBwb3NpdGlvbjpwb3NpdGlvbjtcclxuICB2ZWxvY2l0eTp2ZWxvY2l0eTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSByb29tX3N0YXRle1xyXG4gIG9iamVjdHM6IEFycmF5PG9ial9zdGF0ZT5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uX2luaXQoKTpvYmpfc3RhdGV7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBvc2l0aW9uOntcclxuICAgICAgeDowLFxyXG4gICAgICB5OjBcclxuICAgIH0sXHJcbiAgICB2ZWxvY2l0eTp7XHJcbiAgICAgIHg6MCxcclxuICAgICAgeTowXHJcbiAgICB9XHJcblxyXG4gIH0gIFxyXG59IiwiZXhwb3J0IGxldCBERUJVRyA9IHRydWU7XHJcbmV4cG9ydCBsZXQgUEFVU0VEID0gdHJ1ZTtcclxuaW1wb3J0IHtvYmp9IGZyb20gXCIuL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUsIHBvc2l0aW9ufSBmcm9tIFwiLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtyb29tfSBmcm9tIFwiLi9saWIvcm9vbVwiO1xyXG5pbXBvcnQge3Bvc2l0aW9uZWRfc3ByaXRlLCBzcHJpdGV9IGZyb20gXCIuL2xpYi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgY29sbGlzaW9uX2JveCB9IGZyb20gXCIuL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHtzcHJpdGVfcmVuZGVyZXIscmVjdF9yZW5kZXJlciwgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyLCBodWRfdGV4dF9yZW5kZXJlciwgQ2FtZXJhLCB0ZXh0X3JlbmRlcmVyfSBmcm9tIFwiLi9saWIvcmVuZGVyXCI7XHJcbmltcG9ydCB7SFVEfSBmcm9tIFwiLi9saWIvaHVkXCI7XHJcbmltcG9ydCB7RXhlY3V0ZVJlcGVhdEJpbmRzLGRlYnVnX2JpbmRzLGJ0eXBlLGV4ZWNfdHlwZSwgUG9sbF9Nb3VzZSwgQmluZCwgaGVsZF9rZXlzfSBmcm9tIFwiLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHtpbml0X2NsaWNrX2hhbmRsZXJ9IGZyb20gXCIuL2xpYi9jb250cm9sc1wiO1xyXG5cclxuXHJcbmxldCBjYW52YXNfZWxlbWVudDpIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5sZXQgY29udGV4dDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXNfZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5cclxubGV0IHNjcmVlbl93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5sZXQgc2NyZWVuX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbmxldCB2d2lkdGggPSBjYW52YXNfZWxlbWVudC53aWR0aDtcclxubGV0IHZoZWlnaHQgPSBjYW52YXNfZWxlbWVudC5oZWlnaHQ7XHJcblxyXG5cclxuLy9Ib3cgb2Z0ZW4gdGhlIGdhbWUgbG9naWMgbG9vcCBzaG91bGQgcnVuLCBpbiBtaWxsaXNlY29uZHNcclxubGV0IGxvZ2ljX2xvb3BfaW50ZXJ2YWw6bnVtYmVyID0gMTAwMC82MDsgIFxyXG5cclxubGV0IGxhc3RfdGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG5sZXQgbGFzdF9yZW5kZXJfdGltZSA9IDA7XHJcblxyXG5pbnRlcmZhY2UgZGltZW5zaW9uc3tcclxuICBoZWlnaHQ6bnVtYmVyLFxyXG4gIHdpZHRoOm51bWJlclxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFNjcmVlbkRpbWVuc2lvbnMgKCk6ZGltZW5zaW9uc3tcclxuICByZXR1cm4oe1xyXG4gICAgd2lkdGg6c2NyZWVuX3dpZHRoLFxyXG4gICAgaGVpZ2h0OnNjcmVlbl9oZWlnaHRcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Vmlld3BvcnREaW1lbnNpb25zICgpOmRpbWVuc2lvbnN7XHJcbiAgcmV0dXJuKHtcclxuICAgIGhlaWdodDpjYW52YXNfZWxlbWVudC5oZWlnaHQsXHJcbiAgICB3aWR0aDpjYW52YXNfZWxlbWVudC53aWR0aFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgdmlld3BvcnQgPSB7XHJcbiAgaGVpZ2h0OkdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodCxcclxuICB3aWR0aDpHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aFxyXG59XHJcblxyXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgdmlld3BvcnQuaGVpZ2h0ID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0XHJcbiAgdmlld3BvcnQud2lkdGggPSBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVidWcoeDpib29sZWFuKXtcclxuICBERUJVRyA9IHg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQYXVzZWQoeDpib29sZWFuKXtcclxuICBQQVVTRUQgPSB4O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyX2NvbGxpc2lvbl9ib3ggPSAoYTpjb2xsaXNpb25fYm94KSA9PiB7XHJcbiAgYm94ZXMucHVzaChhKTtcclxufVxyXG5cclxubGV0IGJveGVzOkFycmF5PGNvbGxpc2lvbl9ib3g+ID0gW107XHJcblxyXG5leHBvcnQgbGV0IGRlZXAgPSAoYTphbnkpID0+e1xyXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGEpKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIGRlYnVnX3ZhcnN7XHJcbiAgdGFyZ2V0OkhUTUxDYW52YXNFbGVtZW50LFxyXG4gIGNhbWVyYTpDYW1lcmEsXHJcbiAgbGFzdF9jbGlja2VkOkhUTUxFbGVtZW50LFxyXG4gIHNlbGVjdGVkX2VsZW1lbnQ6b2JqPHVua25vd24+LFxyXG4gIHJvdGF0aW9uX2VsZW1lbnQ6b2JqPHVua25vd24+LFxyXG4gIG1pZGRsZV9wb3NpdGlvbjpwb3NpdGlvblxyXG59XHJcblxyXG5leHBvcnQgbGV0IERFQlVHX3Y6ZGVidWdfdmFycztcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIGdhbWVfc3RhdGU8VD57XHJcbiAgbG9naWM6bnVtYmVyLFxyXG4gIGNvbnRleHQ6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gIGN1cnJlbnRfcm9vbTpyb29tPHVua25vd24+LFxyXG4gIGNhbWVyYXM6QXJyYXk8Q2FtZXJhPixcclxuICBjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgZ2FtZTpUXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYnVnX3N0YXRlZih0Om51bWJlcil7XHJcbiAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShERUJVR192LnRhcmdldCxERUJVR192LmNhbWVyYSk7XHJcbiAgaWYoREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50KXtcclxuICAgIGxldCBzdCA9IERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIHN0LnBvc2l0aW9uLnggPSBtb3VzZS54LFxyXG4gICAgc3QucG9zaXRpb24ueSA9IG1vdXNlLnlcclxuICB9XHJcbiAgaWYoREVCVUdfdi5yb3RhdGlvbl9lbGVtZW50KXtcclxuICAgIERFQlVHX3Yucm90YXRpb25fZWxlbWVudC5yb3RhdGlvbiA9IERFQlVHX3Yucm90YXRpb25fZWxlbWVudC5hbmdsZVRvd2FyZHNQb2ludChtb3VzZSk7XHJcbiAgfVxyXG4gIGlmKERFQlVHX3YubWlkZGxlX3Bvc2l0aW9uKXtcclxuICAgbGV0IGRpZmZfeSA9IG1vdXNlLnkgLSBERUJVR192Lm1pZGRsZV9wb3NpdGlvbi55O1xyXG4gICBsZXQgZGlmZl94ID0gbW91c2UueCAtIERFQlVHX3YubWlkZGxlX3Bvc2l0aW9uLng7XHJcbiAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ID0gREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIC0xICogZGlmZl94O1xyXG4gICAgREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgKyAtMSAqIGRpZmZfeTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgcm9vbXM6YW55W10gPSBbXTtcclxuZXhwb3J0IGxldCBvYmplY3RzOmFueVtdO1xyXG5cclxuZXhwb3J0IGNsYXNzIGdhbWU8VD57XHJcbiAgc3RhdGU6Z2FtZV9zdGF0ZTxUPjtcclxuICBjb250ZXh0OkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBvZmZzY3JlZW5fY2FudmFzOkhUTUxDYW52YXNFbGVtZW50O1xyXG4gIG9mZnNjcmVlbl9jb250ZXh0OkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwcm90b3R5cGVzOkFycmF5PG9iajx1bmtub3duPj4gPSBbXTtcclxuICByb29tczpBcnJheTxhbnk+ID0gW107XHJcbiAgY29uc3RydWN0b3IoY3R4OkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxpbml0X3N0YXRlOlQsaW5pdDphbnkpe1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2FudmFzOmNhbnZhc19lbGVtZW50LFxyXG4gICAgICBsb2dpYzp1bmRlZmluZWQsXHJcbiAgICAgIGNvbnRleHQ6Y3R4LFxyXG4gICAgICBjYW1lcmFzOltcclxuICAgICAgXSxcclxuICAgICAgY3VycmVudF9yb29tOiB1bmRlZmluZWQsXHJcbiAgICAgIGdhbWU6aW5pdF9zdGF0ZVxyXG4gICAgfVxyXG4gICAgdGhpcy5vZmZzY3JlZW5fY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIHRoaXMub2Zmc2NyZWVuX2NvbnRleHQgPSB0aGlzLm9mZnNjcmVlbl9jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIGlmIChERUJVRykge1xyXG4gICAgICBERUJVR192ID0ge1xyXG4gICAgICAgIHRhcmdldDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z190YXJnZXRcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgICAgICAgY2FtZXJhOiBuZXcgQ2FtZXJhKHtcclxuICAgICAgICAgIHg6MCxcclxuICAgICAgICAgIHk6MCxcclxuICAgICAgICAgIGRpbWVuc2lvbnM6e1xyXG4gICAgICAgICAgICBoZWlnaHQ6dmlld3BvcnQuaGVpZ2h0LFxyXG4gICAgICAgICAgICB3aWR0aDp2aWV3cG9ydC53aWR0aFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNjYWxpbmc6MSxcclxuICAgICAgICAgIGRlYnVnOnRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgLHtcclxuICAgICAgICAgIHg6MSxcclxuICAgICAgICAgIHk6MCxcclxuICAgICAgICAgIHdpZHRoOjEsXHJcbiAgICAgICAgICBoZWlnaHQ6MVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGxhc3RfY2xpY2tlZDp1bmRlZmluZWQsXHJcbiAgICAgICAgc2VsZWN0ZWRfZWxlbWVudDp1bmRlZmluZWQsXHJcbiAgICAgICAgcm90YXRpb25fZWxlbWVudDp1bmRlZmluZWQsXHJcbiAgICAgICAgbWlkZGxlX3Bvc2l0aW9uOnVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIm1vdXNlMGRvd25cIixcclxuICAgICAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgICAgIGlkOjAsXHJcbiAgICAgICAgZnVuY3Rpb246KCk9PntcclxuICAgICAgICAgIGlmKERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudCl7XHJcbiAgICAgICAgICAgIERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKERFQlVHX3YudGFyZ2V0LERFQlVHX3YuY2FtZXJhKTtcclxuICAgICAgICAgICAgbGV0IGNsaWNrZWQgPSB0aGlzLmdldFJvb20oKS5jaGVja19vYmplY3RzKHtcclxuICAgICAgICAgICAgICB4Om1vdXNlLngsXHJcbiAgICAgICAgICAgICAgeTptb3VzZS55LFxyXG4gICAgICAgICAgICAgIGhlaWdodDoxLFxyXG4gICAgICAgICAgICAgIHdpZHRoOjFcclxuICAgICAgICAgICAgfSlbMF1cclxuICAgICAgICAgICAgaWYoY2xpY2tlZCl7XHJcbiAgICAgICAgICAgICAgREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50ID0gY2xpY2tlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgICAgICBjYW1lcmE6REVCVUdfdi5jYW1lcmFcclxuICAgICAgfSk7XHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIm1vdXNlMXVwXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDo1LFxyXG4gICAgICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgICAgICBERUJVR192Lm1pZGRsZV9wb3NpdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2UsXHJcbiAgICAgICAgY2FtZXJhOkRFQlVHX3YuY2FtZXJhXHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJtb3VzZTFkb3duXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDo2LFxyXG4gICAgICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKERFQlVHX3YudGFyZ2V0LERFQlVHX3YuY2FtZXJhKTtcclxuICAgICAgICAgIERFQlVHX3YubWlkZGxlX3Bvc2l0aW9uID0gbW91c2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgICAgIGNhbWVyYTpERUJVR192LmNhbWVyYVxyXG4gICAgICB9KTtcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwibW91c2UwdXBcIixcclxuICAgICAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgZnVuY3Rpb246KCk9PntcclxuICAgICAgICAgIERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2UsXHJcbiAgICAgICAgY2FtZXJhOkRFQlVHX3YuY2FtZXJhXHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJtb3VzZTJkb3duXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDozLFxyXG4gICAgICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgICAgICBpZihERUJVR192LnJvdGF0aW9uX2VsZW1lbnQpe1xyXG4gICAgICAgICAgICBERUJVR192LnJvdGF0aW9uX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShERUJVR192LnRhcmdldCxERUJVR192LmNhbWVyYSk7XHJcbiAgICAgICAgICAgIGxldCBjbGlja2VkID0gdGhpcy5nZXRSb29tKCkuY2hlY2tfb2JqZWN0cyh7XHJcbiAgICAgICAgICAgICAgeDptb3VzZS54LFxyXG4gICAgICAgICAgICAgIHk6bW91c2UueSxcclxuICAgICAgICAgICAgICBoZWlnaHQ6MSxcclxuICAgICAgICAgICAgICB3aWR0aDoxXHJcbiAgICAgICAgICAgIH0pWzBdXHJcbiAgICAgICAgICAgIGlmKGNsaWNrZWQpe1xyXG4gICAgICAgICAgICAgIERFQlVHX3Yucm90YXRpb25fZWxlbWVudCA9IGNsaWNrZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2UsXHJcbiAgICAgICAgY2FtZXJhOkRFQlVHX3YuY2FtZXJhXHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJtb3VzZTJ1cFwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgICAgaWQ6NCxcclxuICAgICAgICBmdW5jdGlvbjooKT0+e1xyXG4gICAgICAgICAgREVCVUdfdi5yb3RhdGlvbl9lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgICAgICBjYW1lcmE6REVCVUdfdi5jYW1lcmFcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgbGVmdF9mdW5jID0gKCk9PntcclxuICAgICAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDE6MDtcclxuICAgICAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICAgICAgREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggLSAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMS9ERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCByaWdodF9mdW5jID0gKCk9PntcclxuICAgICAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDE6MDtcclxuICAgICAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICAgICAgREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMS9ERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBkb3duX2Z1bmMgPSAoKT0+e1xyXG4gICAgICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMTowO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFoZWxkX2tleXNbXCJDb250cm9sXCJdICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgICAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ID0gREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSAtICgoNSArIHNoaWZ0X2hlbGQgKiA1KSAqICgxL0RFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICAgICAgfTtcclxuICAgICAgbGV0IHVwX2Z1bmMgPSAoKT0+e1xyXG4gICAgICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMTowO1xyXG4gICAgICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgICAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ID0gREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSArICgoNSArIHNoaWZ0X2hlbGQgKiA1KSAqICgxL0RFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICAgICAgfTtcclxuICAgICAgbGV0IHNjcm9sbF91cCA9ICgpPT57XHJcbiAgICAgICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIilcclxuICAgICAgICAgIERFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPSBERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nICsgMC4wNTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgc2F2ZV9mdW5jID0gKCk9PntcclxuICAgICAgICBsZXQgY3RybF9oZWxkID0gaGVsZF9rZXlzW1wiQ29udHJvbExlZnRcIl07XHJcbiAgICAgICAgaWYoY3RybF9oZWxkICYmIFBBVVNFRCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNBVkVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY3RybF9oZWxkICYmICFQQVVTRUQpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJwYXVzZSB0byBlbmFibGUgc2F2aW5nLlwiKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgc2Nyb2xsX2Rvd24gPSAoKT0+e1xyXG4gICAgICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIgJiYgREVCVUdfdi5jYW1lcmEuc3RhdGUuc2NhbGluZyA+IDAuMDUpXHJcbiAgICAgICAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nID0gREVCVUdfdi5jYW1lcmEuc3RhdGUuc2NhbGluZyAtIDAuMDU7XHJcbiAgICAgIH1cclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwiS2V5QVwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgICAgaWQ6QmluZChcIktleUFcIixsZWZ0X2Z1bmMsZXhlY190eXBlLnJlcGVhdCwxKSxcclxuICAgICAgICBmdW5jdGlvbjpsZWZ0X2Z1bmMsXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUucmVwZWF0XHJcbiAgICAgIH0pXHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIktleURcIixcclxuICAgICAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgICAgIGlkOkJpbmQoXCJLZXlEXCIscmlnaHRfZnVuYyxleGVjX3R5cGUucmVwZWF0LDEpLFxyXG4gICAgICAgIGZ1bmN0aW9uOnJpZ2h0X2Z1bmMsXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUucmVwZWF0XHJcbiAgICAgIH0pXHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIktleVdcIixcclxuICAgICAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgICAgIGlkOkJpbmQoXCJLZXlXXCIsdXBfZnVuYyxleGVjX3R5cGUucmVwZWF0LDEpLFxyXG4gICAgICAgIGZ1bmN0aW9uOnVwX2Z1bmMsXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUucmVwZWF0XHJcbiAgICAgIH0pXHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIktleVNcIixcclxuICAgICAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgICAgIGlkOkJpbmQoXCJLZXlTXCIsZG93bl9mdW5jLGV4ZWNfdHlwZS5yZXBlYXQsMSksXHJcbiAgICAgICAgZnVuY3Rpb246ZG93bl9mdW5jLFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLnJlcGVhdFxyXG4gICAgICB9KVxyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJzY3JvbGx1cFwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgICAgaWQ6QmluZChcInNjcm9sbHVwXCIsc2Nyb2xsX3VwLGV4ZWNfdHlwZS5vbmNlLDEpLFxyXG4gICAgICAgIGZ1bmN0aW9uOnNjcm9sbF91cCxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlXHJcbiAgICAgIH0pXHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcInNjcm9sbGRvd25cIixcclxuICAgICAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgICAgIGlkOkJpbmQoXCJzY3JvbGxkb3duXCIsc2Nyb2xsX2Rvd24sZXhlY190eXBlLm9uY2UsMSksXHJcbiAgICAgICAgZnVuY3Rpb246c2Nyb2xsX2Rvd24sXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZVxyXG4gICAgICB9KVxyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJLZXlTXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5rZXlib2FyZCxcclxuICAgICAgICBpZDpCaW5kKFwiS2V5U1wiLHNhdmVfZnVuYyxleGVjX3R5cGUub25jZSwxKSxcclxuICAgICAgICBmdW5jdGlvbjpzYXZlX2Z1bmMsXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZVxyXG4gICAgICB9KVxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XHJcbiAgICAgICAgaWYoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XHJcbiAgICAgICAgICBERUJVR192Lmxhc3RfY2xpY2tlZCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZV9idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XHJcbiAgICAgICAgUEFVU0VEID0gIVBBVVNFRDtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgaWYodGhpcy5nZXRSb29tKCkpe1xyXG4gICAgICAgICAgZGVidWdfc3RhdGVmKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwxNi42NilcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIGluaXQodGhpcyk7XHJcbiAgfVxyXG4gIHJlbmRlcih0Om51bWJlcil7XHJcbiAgICBsZXQgdGltZSA9IHQgLSBsYXN0X3JlbmRlcl90aW1lXHJcbiAgICBsYXN0X3JlbmRlcl90aW1lID0gdDtcclxuICAgIGxldCBhbGxfY2FtZXJhcyA9IHRoaXMuc3RhdGUuY2FtZXJhcztcclxuICAgIGxldCBkZWJ1Z19pbmRleCA9IC0xO1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICBhbGxfY2FtZXJhcyA9IFsuLi5hbGxfY2FtZXJhcyxERUJVR192LmNhbWVyYV1cclxuICAgICAgZGVidWdfaW5kZXggPSBhbGxfY2FtZXJhcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gMDthIDwgIGFsbF9jYW1lcmFzLmxlbmd0aDthKyspe1xyXG4gICAgICBsZXQgY2FtZXJhID0gYWxsX2NhbWVyYXNbYV07XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcy5oZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcy53aWR0aCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LmNsZWFyUmVjdCgwLDAsY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgsY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dC5maWxsU3R5bGU9XCJibGFja1wiO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LmZpbGxSZWN0KDAsMCxjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCxjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQpO1xyXG4gICAgICBsZXQgY2FtZXJhX2JveCA9IHtcclxuICAgICAgICB4OmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6Y2FtZXJhLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgd2lkdGg6Y2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZyksXHJcbiAgICAgICAgaGVpZ2h0OmNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKVxyXG4gICAgICB9O1xyXG4gICAgICBsZXQgcGFydGljbGVfY29sbGlkZXMgPSB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5jaGVja19vYmplY3RzKGNhbWVyYV9ib3gsW10sdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ucGFydGljbGVzX2Fycik7XHJcbiAgICAgIGxldCBjYW1lcmFfY29sbGlkZXJzID0gWy4uLnRoaXMuc3RhdGUuY3VycmVudF9yb29tLmNoZWNrX29iamVjdHMoY2FtZXJhX2JveCksLi4ucGFydGljbGVfY29sbGlkZXNdO1xyXG4gICAgICBsZXQgcmVuZGVyX2FyZ3MgPSB7XHJcbiAgICAgICAgY29udGV4dDp0aGlzLm9mZnNjcmVlbl9jb250ZXh0LFxyXG4gICAgICAgIGNhbWVyYTpjYW1lcmEsXHJcbiAgICAgIH07XHJcbiAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncyx7XHJcbiAgICAgICAgc3ByaXRlOnRoaXMuc3RhdGUuY3VycmVudF9yb29tLnJlbmRlcmYodGltZSksXHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICAgIHNjYWxlOjFcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBoaXRib3hlczpjb2xsaXNpb25fYm94W10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgYSBvZiBjYW1lcmFfY29sbGlkZXJzLmZpbHRlcigoYikgPT4gYi5yZW5kZXIpKSB7XHJcbiAgICAgICAgbGV0IHJlbmRlcmVkID0gYS5yZW5kZXJfdHJhY2sodCk7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVuZGVyZWQpKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbmVkX3Nwcml0ZSBvZiByZW5kZXJlZClcclxuICAgICAgICAgICAgc3ByaXRlX3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICAgICAgc3ByaXRlOnBvc2l0aW9uZWRfc3ByaXRlLnNwcml0ZSxcclxuICAgICAgICAgICAgICB4OiBwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICAgIHk6IHBvc2l0aW9uZWRfc3ByaXRlLnksXHJcbiAgICAgICAgICAgICAgcm90YXRpb246IGEucm90YXRpb24sXHJcbiAgICAgICAgICAgICAgc2NhbGU6YS5zY2FsaW5nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGxldCBwb3NpdGlvbmVkX3Nwcml0ZSA9IHJlbmRlcmVkIGFzIHBvc2l0aW9uZWRfc3ByaXRlO1xyXG4gICAgICAgICAgc3ByaXRlX3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICAgIHNwcml0ZTogcG9zaXRpb25lZF9zcHJpdGUuc3ByaXRlLFxyXG4gICAgICAgICAgICB4OiBwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICB5OiBwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgICAgICByb3RhdGlvbjogYS5yb3RhdGlvbixcclxuICAgICAgICAgICAgc2NhbGU6YS5zY2FsaW5nXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoREVCVUcgJiYgYS5jb2xsaXNpb24pe1xyXG4gICAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5hLmdldF9hbGxfY29sbGlzaW9uX2JveGVzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20udGV4dF9ub2Rlcyl7XHJcbiAgICAgICAgdGV4dF9yZW5kZXJlcihyZW5kZXJfYXJncyx7XHJcbiAgICAgICAgICB4Om5vZGUuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICAgIHk6bm9kZS5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgZm9udDpub2RlLnJlbmRlcmYodClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIGlmKGNhbWVyYS5odWQpe1xyXG4gICAgICAgIGxldCBncmFwaGljcyA9IGNhbWVyYS5odWQuZ3JhcGhpY19lbGVtZW50cztcclxuICAgICAgICBsZXQgdGV4dF9lbGVtZW50cyA9IGNhbWVyYS5odWQudGV4dF9lbGVtZW50cztcclxuICAgICAgICBmb3IobGV0IGEgb2YgZ3JhcGhpY3Mpe1xyXG4gICAgICAgICAgbGV0IHJlbmRlcmVkID0gYS5yZW5kZXJfdHJhY2sodCk7XHJcbiAgICAgICAgICBpZihhLnJlbmRlcil7XHJcbiAgICAgICAgICAgIGZvcihsZXQgcG9zaXRpb25lZF9zcHJpdGUgb2YgcmVuZGVyZWQpe1xyXG4gICAgICAgICAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncyx7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGU6cG9zaXRpb25lZF9zcHJpdGUuc3ByaXRlLFxyXG4gICAgICAgICAgICAgICAgeDpwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICAgICAgeTpwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgICAgICAgICAgcm90YXRpb246YS5yb3RhdGlvbixcclxuICAgICAgICAgICAgICAgIHNjYWxlOmEuc2NhbGluZ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vcmVuZGVyX2FyZ3MuY29udGV4dCA9IHRoaXMuc3RhdGUuY29udGV4dDtcclxuICAgICAgICBmb3IobGV0IGEgb2YgdGV4dF9lbGVtZW50cyl7XHJcbiAgICAgICAgICBsZXQgc3QgPSBhLnN0YXRlO1xyXG4gICAgICAgICAgaHVkX3RleHRfcmVuZGVyZXIocmVuZGVyX2FyZ3Mse1xyXG4gICAgICAgICAgICB4OnN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6c3QucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgZm9udDphLnJlbmRlcmYodClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChERUJVRyAmJiBjYW1lcmEuc3RhdGUuZGVidWcpIHtcclxuICAgICAgICBsZXQgYm94OiBjb2xsaXNpb25fYm94O1xyXG4gICAgICAgIGxldCBib3hlc19jb3B5ID0gWy4uLmJveGVzXVxyXG4gICAgICAgIHdoaWxlKGJveGVzX2NvcHkubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICBsZXQgYm94ID0gYm94ZXNfY29weS5wb3AoKTtcclxuICAgICAgICAgIGxldCByZWN0ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDpib3gud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDpib3guaGVpZ2h0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHJva2VkX3JlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCxyZWN0LGJveC54LGJveC55LFwiI0ZGMDAwMFwiLGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlKGhpdGJveGVzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgbGV0IGJveCA9IGhpdGJveGVzLnBvcCgpO1xyXG4gICAgICAgICAgbGV0IHJlY3QgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOmJveC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OmJveC5oZWlnaHRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LHJlY3QsYm94LngsYm94LnksXCIjMDA4MDAwXCIsY2FtZXJhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYoYSAhPT0gZGVidWdfaW5kZXgpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5vZmZzY3JlZW5fY2FudmFzLGNhbWVyYS5zdGF0ZS52aWV3cG9ydC54LGNhbWVyYS5zdGF0ZS52aWV3cG9ydC55KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIERFQlVHX3YudGFyZ2V0LmdldENvbnRleHQoXCIyZFwiKS5kcmF3SW1hZ2UodGhpcy5vZmZzY3JlZW5fY2FudmFzLGNhbWVyYS5zdGF0ZS52aWV3cG9ydC54LGNhbWVyYS5zdGF0ZS52aWV3cG9ydC55KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoREVCVUcpXHJcbiAgICAgIGJveGVzID0gW107XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGEpPT57dGhpcy5yZW5kZXIoYSl9KTsgXHJcbiAgfVxyXG4gIGluaXRpYWxpemUoKXtcclxuICAgIGluaXRfY2xpY2tfaGFuZGxlcih0aGlzKTtcclxuICB9XHJcbiAgc3RhcnRfbG9naWMoYTpudW1iZXIpe1xyXG4gICAgcmV0dXJuIHdpbmRvdy5zZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICBpZighUEFVU0VEKXtcclxuICAgICAgICBsZXQgbmV3X3RpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCB0aW1lX3NpbmNlID0gbmV3X3RpbWUuZ2V0VGltZSgpIC0gbGFzdF90aW1lLmdldFRpbWUoKTtcclxuICAgICAgICBsYXN0X3RpbWUgPSBuZXdfdGltZTtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbSl7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5zdGF0ZWYodGltZV9zaW5jZSk7XHJcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5odWQpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5odWQuc3RhdGVmKHRpbWVfc2luY2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgRXhlY3V0ZVJlcGVhdEJpbmRzKGEpO1xyXG4gICAgfSxhKTtcclxuICB9XHJcbiAgZ2V0Um9vbSgpe1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuY3VycmVudF9yb29tO1xyXG4gIH1cclxuICBhc3luYyBsb2FkUm9vbVN0cmluZyh4OnN0cmluZyl7XHJcbiAgICBjb25zb2xlLmxvZyhcImNhbGxlZFwiKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJvb21zKSk7XHJcbiAgICBmb3IobGV0IGEgb2Ygcm9vbXMpe1xyXG4gICAgICBjb25zb2xlLmxvZyhhLmNvbnN0cnVjdG9yLm5hbWUpXHJcbiAgICAgIGlmKGEuY29uc3RydWN0b3IubmFtZSA9PSB4KXtcclxuICAgICAgICB0aGlzLmxvYWRSb29tKG5ldyBhKHRoaXMpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBsb2FkUm9vbSh4OnJvb208dW5rbm93bj4pe1xyXG4gICAgXHJcbiAgICB4LmdhbWUgPSB0aGlzO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20gIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgIHdoaWxlKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ub2JqZWN0c1swXS5kZWxldGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20gPSB4O1xyXG4gICAgbGV0IG5ld19yb29tID0gYXdhaXQgeC5sb2FkKCk7XHJcbiAgICB4LnJlZ2lzdGVyX2NvbnRyb2xzKCk7XHJcbiAgICB4LnJlZ2lzdGVyUGFydGljbGVzKCk7XHJcbiAgICBpZih0aGlzLnN0YXRlLmxvZ2ljICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5sb2dpYyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlLmxvZ2ljID0gdGhpcy5zdGFydF9sb2dpYyhsb2dpY19sb29wX2ludGVydmFsKVxyXG4gICAgdGhpcy5yZW5kZXIoMCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=