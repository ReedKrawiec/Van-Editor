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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game/main.ts");
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
    g.loadRoom(new Overworld_1.Overworld(g));
}));


/***/ }),

/***/ "./src/game/objects/ControlledPlayer.ts":
/*!**********************************************!*\
  !*** ./src/game/objects/ControlledPlayer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlledPlayer = void 0;
const controls_1 = __webpack_require__(/*! ../../lib/controls */ "./src/lib/controls.ts");
const Goomba_1 = __webpack_require__(/*! ./Goomba */ "./src/game/objects/Goomba.ts");
class ControlledPlayer extends Goomba_1.Goomba {
    constructor() {
        super(...arguments);
        this.tags = ["player"];
    }
    register_controls() {
        this.bindControl("KeyA", controls_1.exec_type.repeat, () => {
            if (this.state.velocity.x > -10) {
                this.state.velocity.x = this.state.velocity.x - 1;
            }
        });
        this.bindControl("KeyA", controls_1.exec_type.once, () => {
            this.state.direction = Goomba_1.direction.left;
            this.state.velocity.x = this.state.velocity.x - 0.1;
        });
        this.bindControl("mouse0down", controls_1.exec_type.repeat, () => {
            this.audio.play("explosion", 0.4);
        }, 400);
        this.bindControl("KeyD", controls_1.exec_type.repeat, () => {
            if (this.state.velocity.x < 10) {
                this.state.velocity.x = this.state.velocity.x + 1;
            }
        });
        this.bindControl("KeyD", controls_1.exec_type.once, () => {
            this.state.direction = Goomba_1.direction.right;
            this.state.velocity.x = this.state.velocity.x + 0.1;
        });
        this.bindControl("Space", controls_1.exec_type.once, () => {
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


/***/ }),

/***/ "./src/game/objects/Cursor.ts":
/*!************************************!*\
  !*** ./src/game/objects/Cursor.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Cursor = void 0;
const platformer_obj_1 = __webpack_require__(/*! ./abstract/platformer_obj */ "./src/game/objects/abstract/platformer_obj.ts");
class Cursor extends platformer_obj_1.platformer_obj {
    constructor(pos, rotation, scaling, params) {
        super(pos, rotation, scaling, params);
        this.sprite_url = "./sprites/cursor.png";
        this.height = 64;
        this.width = 64;
        this.collision = true;
        this.render = true;
        this.scaling = 1;
        this.tags = ["Cursor"];
        this.state = {
            position: {
                x: pos.x,
                y: pos.y
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


/***/ }),

/***/ "./src/game/objects/Door.ts":
/*!**********************************!*\
  !*** ./src/game/objects/Door.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Door = void 0;
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
class Door extends object_1.obj {
    constructor(position, rotation, scaling, params = Door.default_params) {
        super(position, rotation, scaling, params);
        this.sprite_url = "./sprites/target.png";
        this.height = 100;
        this.width = 100;
        this.tags = [];
        this.collision = false;
        this.render = true;
        this.rotation = 0;
        this.scaling = 1;
        this.state = {
            position: position,
            velocity: {
                x: 0,
                y: 0
            }
        };
    }
    statef(time_delta) {
        let collides = main_1.g.getRoom().check_collisions(this.getFullCollisionBox());
        for (let obj of collides) {
            if (obj.tags.includes("player")) {
                main_1.g.loadRoomString(this.params.location);
                return;
            }
        }
    }
    renderf(time_delta) {
        return super.renderf(time_delta);
    }
    register_animations() {
    }
    register_audio() {
    }
    register_controls() {
    }
}
exports.Door = Door;
Door.default_params = {
    location: "Underworld"
};


/***/ }),

/***/ "./src/game/objects/Goomba.ts":
/*!************************************!*\
  !*** ./src/game/objects/Goomba.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Goomba = exports.direction = void 0;
const sprite_1 = __webpack_require__(/*! ../../lib/sprite */ "./src/lib/sprite.ts");
const platformer_obj_1 = __webpack_require__(/*! ./abstract/platformer_obj */ "./src/game/objects/abstract/platformer_obj.ts");
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
var direction;
(function (direction) {
    direction[direction["left"] = 0] = "left";
    direction[direction["right"] = 1] = "right";
})(direction = exports.direction || (exports.direction = {}));
class Goomba extends platformer_obj_1.platformer_obj {
    constructor(position, rotation, scaling, parameters = Goomba.default_params) {
        super(position, rotation, scaling, parameters);
        this.sprite_url = "./sprites/folder/robot.png";
        this.height = 149;
        this.width = 149;
        this.tags = ["dummy"];
        this.collision = true;
        if (parameters.id != undefined) {
            this.id = parameters.id;
        }
        this.state = {
            direction: direction.left,
            position: position,
            velocity: {
                x: 0,
                y: 0
            },
            jumping: false,
            health: 100,
            times_airshot: 0,
            max_times_airshot: 0
        };
        //this.animations.play("walk1");
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
        let cursor = room.getObj("cursor");
        if (this.collision) {
            let col = this.getFullCollisionBox();
            if (room.check_collisions({
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


/***/ }),

/***/ "./src/game/objects/Gun.ts":
/*!*********************************!*\
  !*** ./src/game/objects/Gun.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Gun = void 0;
const state_1 = __webpack_require__(/*! ../../lib/state */ "./src/lib/state.ts");
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
const platformer_obj_1 = __webpack_require__(/*! ./abstract/platformer_obj */ "./src/game/objects/abstract/platformer_obj.ts");
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
class Gun extends platformer_obj_1.platformer_obj {
    constructor(position, rotation = 0, scaling = 1, params = Gun.default_params) {
        super(position, rotation, scaling, params);
        this.sprite_url = "./sprites/folder/gun.png";
        this.height = 50;
        this.width = 20;
        this.collision = false;
        this.render = true;
        this.gravity = false;
        this.tags = ["gun"];
        this.id = "gun";
        this.state = {
            position: position,
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
            this.cursor = room.getObjByTag("Cursor")[0];
        }
    }
}
exports.Gun = Gun;


/***/ }),

/***/ "./src/game/objects/Player.ts":
/*!************************************!*\
  !*** ./src/game/objects/Player.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
const ControlledPlayer_1 = __webpack_require__(/*! ./ControlledPlayer */ "./src/game/objects/ControlledPlayer.ts");
const Gun_1 = __webpack_require__(/*! ./Gun */ "./src/game/objects/Gun.ts");
class Player extends object_1.composite_obj {
    constructor(position, rotation, scaling, parameters) {
        super(position);
        this.enemy = true;
        this.state = {
            position: position,
            velocity: {
                x: 0,
                y: 0
            }
        };
        this.objects.push(new ControlledPlayer_1.ControlledPlayer(position, rotation, scaling, parameters));
        this.objects.push(new Gun_1.Gun({ x: position.x, y: position.y + 100 }, rotation, scaling, parameters));
    }
}
exports.Player = Player;


/***/ }),

/***/ "./src/game/objects/Test.ts":
/*!**********************************!*\
  !*** ./src/game/objects/Test.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
class Test extends object_1.obj {
    constructor(position, rotation, scaling, params) {
        super(position, rotation, scaling, params);
        this.sprite_url = "./sprites/Error.png";
        this.height = 100;
        this.width = 100;
        this.tags = [];
        this.collision = true;
        this.render = true;
        this.rotation = 0;
        this.scaling = 1;
        this.state = {
            position: position,
            velocity: {
                x: 0,
                y: 0
            }
        };
    }
    statef(time_delta) {
    }
    renderf(time_delta) {
        return super.renderf(time_delta);
    }
    register_animations() {
    }
    register_audio() {
    }
    register_controls() {
    }
}
exports.Test = Test;
Test.default_params = {};


/***/ }),

/***/ "./src/game/objects/VertBox.ts":
/*!*************************************!*\
  !*** ./src/game/objects/VertBox.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VertBox = void 0;
const box_1 = __webpack_require__(/*! ./box */ "./src/game/objects/box.ts");
class VertBox extends box_1.box {
    constructor() {
        super(...arguments);
        this.sprite_url = "./sprites/box2.png";
        this.width = 64;
        this.height = 500;
    }
}
exports.VertBox = VertBox;


/***/ }),

/***/ "./src/game/objects/abstract/platformer_obj.ts":
/*!*****************************************************!*\
  !*** ./src/game/objects/abstract/platformer_obj.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.platformer_obj_composite = exports.platformer_obj = void 0;
const object_1 = __webpack_require__(/*! ../../../lib/object */ "./src/lib/object.ts");
class platformer_obj extends object_1.gravity_obj {
    constructor(position, rotation, scaling, parameters) {
        super(position, rotation, scaling, parameters);
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

/***/ "./src/game/objects/box.ts":
/*!*********************************!*\
  !*** ./src/game/objects/box.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.box = void 0;
const platformer_obj_1 = __webpack_require__(/*! ./abstract/platformer_obj */ "./src/game/objects/abstract/platformer_obj.ts");
class box extends platformer_obj_1.platformer_obj {
    constructor(a, b, c) {
        super(a, b, c, box.default_params);
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
exports.box = box;


/***/ }),

/***/ "./src/game/objects/bullet.ts":
/*!************************************!*\
  !*** ./src/game/objects/bullet.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rocket = exports.bullet = void 0;
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
class bullet extends object_1.obj {
    constructor(x, angle, scaling, id = undefined) {
        super(x, angle, scaling, id);
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
exports.bullet = bullet;
class Rocket extends bullet {
    constructor(x, angle) {
        super(x, angle, 1);
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
        let collisions = room.check_collisions(this.getFullCollisionBox(), ["gun", "player"]);
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

/***/ "./src/game/objects/prefabs.ts":
/*!*************************************!*\
  !*** ./src/game/objects/prefabs.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.prefabs = void 0;
const box_1 = __webpack_require__(/*! ./box */ "./src/game/objects/box.ts");
const bullet_1 = __webpack_require__(/*! ./bullet */ "./src/game/objects/bullet.ts");
const ControlledPlayer_1 = __webpack_require__(/*! ./ControlledPlayer */ "./src/game/objects/ControlledPlayer.ts");
const Cursor_1 = __webpack_require__(/*! ./Cursor */ "./src/game/objects/Cursor.ts");
const Door_1 = __webpack_require__(/*! ./Door */ "./src/game/objects/Door.ts");
const Goomba_1 = __webpack_require__(/*! ./Goomba */ "./src/game/objects/Goomba.ts");
const Gun_1 = __webpack_require__(/*! ./Gun */ "./src/game/objects/Gun.ts");
const Player_1 = __webpack_require__(/*! ./Player */ "./src/game/objects/Player.ts");
const Test_1 = __webpack_require__(/*! ./Test */ "./src/game/objects/Test.ts");
const VertBox_1 = __webpack_require__(/*! ./VertBox */ "./src/game/objects/VertBox.ts");
exports.prefabs = {
    box: box_1.box,
    bullet: bullet_1.bullet,
    ControlledPlayer: ControlledPlayer_1.ControlledPlayer,
    Cursor: Cursor_1.Cursor,
    Door: Door_1.Door,
    Goomba: Goomba_1.Goomba,
    Gun: Gun_1.Gun,
    Player: Player_1.Player,
    Test: Test_1.Test,
    VertBox: VertBox_1.VertBox,
};


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
const collision_1 = __webpack_require__(/*! ../../../lib/collision */ "./src/lib/collision.ts");
const object_1 = __webpack_require__(/*! ../../../lib/object */ "./src/lib/object.ts");
const controls_1 = __webpack_require__(/*! ../../../lib/controls */ "./src/lib/controls.ts");
const hud_1 = __webpack_require__(/*! ../../../lib/hud */ "./src/lib/hud.ts");
const van_1 = __webpack_require__(/*! ../../../van */ "./src/van.ts");
const bullet_1 = __webpack_require__(/*! ../../objects/bullet */ "./src/game/objects/bullet.ts");
const main_1 = __webpack_require__(/*! ../../main */ "./src/game/main.ts");
const json = __webpack_require__(/*! ./info.json */ "./src/game/rooms/Overworld/info.json");
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
        super(game, json);
        this.background_url = "./sprites/imD41l.jpg";
        this.state = {
            player: undefined,
            paused: false,
            locked_bullet: null
        };
        /*
        for(let a = 0;a<10;a++){
          this.objects.push(new VertBox({x:320,y:250 + a * 500},0,1));
          this.objects.push(new VertBox({x:900,y:250 + a * 500},0,1));
          
        }
        for(let a = 0;a < 100; a++){
          this.objects.push(new box({x:700 + a * 500,y:0},0,1));
        }
        
        this.addItems([...new Player({x:700,y:150},0,1,{id:"player"}).combined_objects()])
        this.addItem(new Cursor({x:0,y:0},0,1,{id:"Cursor"}));
        this.addItem(new Goomba({x:500,y:500},0,1));
        */
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
        if (!this.state.paused) {
            for (let a = 0; a < this.objects.length; a++) {
                room_1.apply_gravity(this.objects[a], -1, -15);
                collision_1.velocity_collision_check(this.objects[a], this.objects);
            }
            let player = this.getObjByTag("player")[0];
            let target = this.getObjByTag("dummy")[0];
            let cursor = this.getObjByTag("Cursor")[0];
            let cameras = main_1.g.state.cameras;
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
            }
        }
        super.statef(time);
    }
}
exports.Overworld = Overworld;


/***/ }),

/***/ "./src/game/rooms/Overworld/info.json":
/*!********************************************!*\
  !*** ./src/game/rooms/Overworld/info.json ***!
  \********************************************/
/*! exports provided: objects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"objects\":[{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":247},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":3750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":4750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":2250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":3250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":1750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":2750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":1750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":1250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":2750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":4250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":3250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":4250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":4750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":1250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":3750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":2250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":36700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":27700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":29700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":37700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":2200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":11700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":43200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":7200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":10700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":46200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":8700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":6200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":14700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":9700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":19700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":12200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":18200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":41200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":22200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":42700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":13200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":18700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":42200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":16700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":1700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":4700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":32200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":14200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":30200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":13700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":35200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":6700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":4200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":49700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":8200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":48200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":47700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":24700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":36200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":45700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":32700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":19200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":608.3333333333333,\"y\":-20},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":17200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":44200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":11200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":12700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":2700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":29200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":44700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":25700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":5700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":39700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":33200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":28700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":49200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":16200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":47200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":27200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":37200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":33700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":40200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":45200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":5200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":22700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":17700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":34200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":38700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":26200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":50200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":23700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":15200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":38200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":39200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":43700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":20700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":28200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":9200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":31200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":20200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":21700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":40700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":30700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":41700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":46700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":21200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":3700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":7700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":25200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":24200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":1200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":15700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":31700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":3200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":35700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":26700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":23200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":10200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":48700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":34700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"Cursor\",\"position\":{\"x\":965.9965417731842,\"y\":932.3615246428085},\"rotation\":0,\"scaling\":1,\"parameters\":{\"id\":\"Cursor\"}},{\"type\":\"Door\",\"position\":{\"x\":1279.841269841271,\"y\":113.40187590187611},\"rotation\":0,\"scaling\":1,\"parameters\":{\"location\":\"Underworld\"}},{\"type\":\"Player\",\"position\":{\"x\":508.4340417731819,\"y\":86.51426877663187},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"Goomba\",\"position\":{\"x\":753.8885558885554,\"y\":137.36757407564693},\"rotation\":0,\"scaling\":1,\"parameters\":{}}]}");

/***/ }),

/***/ "./src/game/rooms/Underworld/Underworld.ts":
/*!*************************************************!*\
  !*** ./src/game/rooms/Underworld/Underworld.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Underworld = void 0;
const room_1 = __webpack_require__(/*! ../../../lib/room */ "./src/lib/room.ts");
const collision_1 = __webpack_require__(/*! ../../../lib/collision */ "./src/lib/collision.ts");
const object_1 = __webpack_require__(/*! ../../../lib/object */ "./src/lib/object.ts");
const controls_1 = __webpack_require__(/*! ../../../lib/controls */ "./src/lib/controls.ts");
const hud_1 = __webpack_require__(/*! ../../../lib/hud */ "./src/lib/hud.ts");
const van_1 = __webpack_require__(/*! ../../../van */ "./src/van.ts");
const bullet_1 = __webpack_require__(/*! ../../objects/bullet */ "./src/game/objects/bullet.ts");
const main_1 = __webpack_require__(/*! ../../main */ "./src/game/main.ts");
const json = __webpack_require__(/*! ./info.json */ "./src/game/rooms/Underworld/info.json");
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
class Underworld extends room_1.room {
    constructor(game) {
        super(game, json);
        this.background_url = "./sprites/orig_719275.jpg";
        this.state = {
            player: undefined,
            paused: false,
            locked_bullet: null
        };
        /*
        for(let a = 0;a<10;a++){
          this.objects.push(new VertBox({x:320,y:250 + a * 500},0,1));
          this.objects.push(new VertBox({x:900,y:250 + a * 500},0,1));
          
        }
        for(let a = 0;a < 100; a++){
          this.objects.push(new box({x:700 + a * 500,y:0},0,1));
        }
        
        this.addItems([...new Player({x:700,y:150},0,1,{id:"player"}).combined_objects()])
        this.addItem(new Cursor({x:0,y:0},0,1,{id:"Cursor"}));
        this.addItem(new Goomba({x:500,y:500},0,1));
        */
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
        if (!this.state.paused) {
            for (let a = 0; a < this.objects.length; a++) {
                room_1.apply_gravity(this.objects[a], -1, -15);
                collision_1.velocity_collision_check(this.objects[a], this.objects);
            }
            let player = this.getObjByTag("player")[0];
            let target = this.getObjByTag("dummy")[0];
            let cursor = this.getObjByTag("Cursor")[0];
            let cameras = main_1.g.state.cameras;
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
            }
        }
        super.statef(time);
    }
}
exports.Underworld = Underworld;


/***/ }),

/***/ "./src/game/rooms/Underworld/info.json":
/*!*********************************************!*\
  !*** ./src/game/rooms/Underworld/info.json ***!
  \*********************************************/
/*! exports provided: objects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"objects\":[{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":4250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":2000,\"y\":750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":1750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":4750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":2750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":3250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":3750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":4250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":1250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":247},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":3750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":1750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":4750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":2250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":2250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":2750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":3250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":1250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":17700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":38700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":43200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":23700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":2700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":22700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":18700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":29700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":48200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":12200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":608.3333333333333,\"y\":-20},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":20200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":14200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":30200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":46700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":16700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":8700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":26200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":42700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":19200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":44700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":45200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":48700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":5200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":34200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":38200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":32200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":37700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":33200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":7200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":1700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":39200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":5700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":11700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":16200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":39700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":9200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":46200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":22200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":27200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":32700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":21200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":3700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":47700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":25700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":37200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":4200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":18200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":8200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":41700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":13200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":45700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":28200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":35700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":40200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":10700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":12700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":30700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":44200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":47200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":34700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":40700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":43700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":1200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":41200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":21700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":26700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":50200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":27700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":15700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":28700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":11200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":2200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":33700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":25200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":17200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":31700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":36200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":49700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":36700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":20700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":10200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":6700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":6200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":19700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":24700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":31200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":13700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":29200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":49200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":35200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":7700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":42200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":3200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":9700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":14700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":24200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":23200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":4700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":15200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"Cursor\",\"position\":{\"x\":-2218.546118734017,\"y\":1496.2682724359638},\"rotation\":0,\"scaling\":1,\"parameters\":{\"id\":\"Cursor\"}},{\"type\":\"Goomba\",\"position\":{\"x\":1305.1346438101702,\"y\":107.44726665819147},\"rotation\":0,\"scaling\":1.0116155193265792,\"parameters\":{}},{\"type\":\"Player\",\"position\":{\"x\":-1496.108618734017,\"y\":692.7682724359637},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":-1478.3333333335984,\"y\":586.0000000000007},\"rotation\":0,\"scaling\":1,\"parameters\":{}}]}");

/***/ }),

/***/ "./src/game/rooms/rooms.ts":
/*!*********************************!*\
  !*** ./src/game/rooms/rooms.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rooms = void 0;
const Overworld_1 = __webpack_require__(/*! ./Overworld/Overworld */ "./src/game/rooms/Overworld/Overworld.ts");
const Underworld_1 = __webpack_require__(/*! ./Underworld/Underworld */ "./src/game/rooms/Underworld/Underworld.ts");
exports.rooms = {
    Overworld: Overworld_1.Overworld,
    Underworld: Underworld_1.Underworld,
};


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
    return objs.filter((a) => (!exemption.some((b) => a.tags.indexOf(b) !== -1) && a.collidesWithBox(c)));
}
exports.check_all_objects = check_all_objects;
function check_all_collisions(c, objs, exemption = []) {
    let matched = [];
    for (let a of objs) {
        if (!exemption.some((b) => a.tags.indexOf(b) !== -1) && a.collision && a.collidesWithBox(c)) {
            matched.push(a);
        }
    }
    return matched;
}
exports.check_all_collisions = check_all_collisions;
//Checks up to the first collision
function check_collisions(c, objs, exemption) {
    for (let a of objs) {
        if (a.id !== exemption && a.collision && a.collidesWithBox(c)) {
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
        let orig_col = origin.getFullCollisionBox();
        let collider_col = collider.getFullCollisionBox();
        if (dir == direction.left) {
            return (orig_col.x - orig_col.width / 2) - (collider_col.x + collider_col.width / 2);
        }
        else if (dir == direction.right) {
            return (collider_col.x - collider_col.width / 2) - (orig_col.x + orig_col.width / 2);
        }
        else if (dir == direction.down) {
            return (orig_col.y - orig_col.height / 2) - (collider_col.y + collider_col.height / 2);
        }
        else if (dir == direction.up) {
            return (collider_col.y - collider_col.height / 2) - (orig_col.y + orig_col.height / 2);
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
    let col_box = ob.getFullCollisionBox();
    if (x_vel > 0) {
        let box = {
            x: col_box.x + col_box.width / 2 + x_vel / 2,
            y: col_box.y,
            width: x_vel,
            height: col_box.height
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
            x: x_vel / 2 + col_box.x - col_box.width / 2,
            y: col_box.y,
            width: -1 * x_vel,
            height: col_box.height
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
            x: col_box.x,
            y: col_box.y + col_box.height / 2 + y_vel / 2,
            width: col_box.width,
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
            x: col_box.x,
            y: y_vel / 2 + col_box.y - col_box.height / 2,
            width: col_box.width,
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
            if (van_1.DEBUG_v.last_clicked && van_1.DEBUG_v.last_clicked.id == "debug_target") {
                d = [...exports.debug_binds];
            }
            else if (!van_1.PAUSED && van_1.DEBUG_v.last_clicked && van_1.DEBUG_v.last_clicked.id == "target") {
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
                    if (selected.obj.collidesWithBox(box)) {
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
        if (van_1.DEBUG_v.last_clicked && van_1.DEBUG_v.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && van_1.DEBUG_v.last_clicked && van_1.DEBUG_v.last_clicked.id == "target") {
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
        if (van_1.DEBUG_v.last_clicked && van_1.DEBUG_v.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && van_1.DEBUG_v.last_clicked && van_1.DEBUG_v.last_clicked.id == "target") {
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
        if (van_1.DEBUG_v.last_clicked && van_1.DEBUG_v.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && van_1.DEBUG_v.last_clicked && van_1.DEBUG_v.last_clicked.id == "target") {
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
    console.log(all_binds);
    console.log(repeat_binds);
    let d;
    if (van_1.DEBUG) {
        if (van_1.DEBUG_v.last_clicked && van_1.DEBUG_v.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && van_1.DEBUG_v.last_clicked && van_1.DEBUG_v.last_clicked.id == "target") {
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
        if (van_1.DEBUG_v.last_clicked && van_1.DEBUG_v.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && van_1.DEBUG_v.last_clicked && van_1.DEBUG_v.last_clicked.id == "target") {
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
        y: ((height - y / vratio) / camera.state.scaling + camera.state.position.y - camera.state.dimensions.height / camera.state.scaling / 2 - camera.state.viewport.y)
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
    for (let a = 0; a < repeat_binds.length; a++) {
        if (repeat_binds[a].bind.id == bind_id) {
            repeat_binds.splice(a, 1);
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

/***/ "./src/lib/debug.ts":
/*!**************************!*\
  !*** ./src/lib/debug.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.debug_setup = void 0;
let { ipcRenderer } = window.require("electron");
const path = window.require("path");
let fs = window.require("fs");
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
exports.debug_setup = () => {
    let obj_button = document.getElementById("new_object_button");
    let room_button = document.getElementById("new_room_button");
    obj_button.addEventListener("click", (e) => {
        let object_path = path.join(`${van_1.project_path}`, "..", "objects");
        let file_path = ipcRenderer.sendSync('object-path-request', object_path);
        let full_name = path.parse(file_path).base;
        let new_name = full_name.substr(0, full_name.length - 3);
        let path_to_write = path.join(`${file_path}`, "..", new_name + ".ts");
        fs.writeFileSync(path_to_write, `
    
    import {obj} from "../../lib/object";
    import { obj_state, position } from "../../lib/state";
    
    interface ${new_name}_state extends obj_state{
    
    }
    
    interface ${new_name}_parameters{
    
    }
    
    export class ${new_name} extends obj<${new_name}_state>{
      sprite_url = "./sprites/Error.png";
      height = 100;
      width = 100;
      tags:Array<string> = [];
      collision = true;
      render = true;
      rotation = 0;
      scaling = 1;
      static default_params:${new_name}_parameters = {}
      constructor(position:position,rotation:number,scaling:number,params:${new_name}_parameters = ${new_name}.default_params){
        super(position,rotation,scaling,params);
        this.state = {
          position:position,
          velocity:{
            x:0,
            y:0
          }
        }
      }
      statef(time_delta:number){
    
      }
      renderf(time_delta:number){
       return super.renderf(time_delta); 
      }
      register_animations(){
    
      }
      register_audio(){
    
      }
      register_controls(){
        
      }
    }
    
    `);
        //ipcRenderer.sendSync('compile-prompt', 'ping')
    });
};


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

/***/ "./src/lib/math.ts":
/*!*************************!*\
  !*** ./src/lib/math.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Distance = void 0;
function Distance(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
exports.Distance = Distance;


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
const math_1 = __webpack_require__(/*! ./math */ "./src/lib/math.ts");
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
    constructor(position, rotation = 0, scaling = 1, params = obj.default_params) {
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
        this.params = {};
        this.id = "" + counter;
        this.binds = [];
        counter++;
        this.params = params;
        this.register_controls();
        this.register_audio();
        this.rotation = rotation;
        this.scaling = scaling;
        this.params = params;
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
    combined_objects() {
        return [this];
    }
    distance(a) {
        let o_st = a.state;
        let st = this.state;
        return math_1.Distance(st.position, o_st.position);
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
    bindControl(key, x, func, interval = 1) {
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
    statef(time) {
    }
    delete() {
        for (let a of this.binds) {
            controls_1.Unbind(a);
        }
        this.game.getRoom().deleteItem(this.id);
    }
    UnbindAll() {
        for (let a of this.binds) {
            controls_1.Unbind(a);
        }
    }
    collisionCheck(a) {
        if (this.collision) {
            let room = this.game.getRoom();
            return room.check_collisions(a, [this.id]);
        }
        return [];
    }
    getFullCollisionBox() {
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
                width: this.width * this.scaling,
                height: this.height * this.scaling
            };
        }
    }
    getAllCollisionBoxes() {
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
    collidesWithBox(a) {
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
            left: (st.position.x + hbox.x_offset - hbox.width * this.scaling / 2),
            right: (st.position.x + hbox.x_offset + hbox.width * this.scaling / 2),
            top: (st.position.y + hbox.y_offset + hbox.height * this.scaling / 2),
            bottom: (st.position.y + hbox.y_offset - hbox.height * this.scaling / 2)
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
        if (Object.keys(this.animations.animations).length == 0 || !this.animations.current) {
            if (!this.sprite_sheet || !this.height || !this.width) {
                return {
                    sprite: undefined,
                    x: st.position.x,
                    y: st.position.y
                };
            }
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
        return Promise.all([...this.objects.map((a) => a.load()), ...this.statics.map(a => a.obj.load())]);
    }
    combined_objects() {
        let combined = [...this.objects, ...this.statics.map(a => a.obj)];
        combined.forEach(a => a.parent = this);
        return [...combined, this];
    }
    get_Items_by_Tag(tag) {
        return this.combined_objects().filter((a) => a.tags.indexOf(tag) > -1);
    }
    add_Item(a, list = this.objects) {
        list.push(a);
        a.parent = this;
        this.game.getRoom().addItem(a);
    }
    getAllCollisionBoxes() {
        let arr = [];
        for (let obj of [...this.statics.map(a => a.obj), ...this.objects]) {
            let created_box = obj.getAllCollisionBoxes();
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
    collidesWithBox(a) {
        for (let obj of this.objects) {
            if (obj.collidesWithBox(a))
                return true;
        }
        for (let o of this.statics) {
            if (o.obj.collidesWithBox(a))
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
    let height = s.sprite.sprite_height * r.camera.state.scaling;
    let width = s.sprite.sprite_width * r.camera.state.scaling;
    r.context.save();
    r.context.globalAlpha = s.sprite.opacity;
    r.context.translate(final_x + (width) / 2, final_y + height / 2);
    let radians = s.rotation * (Math.PI / 180);
    r.context.rotate(radians);
    r.context.drawImage(s.sprite.sprite_sheet, s.sprite.left, s.sprite.top, s.sprite.sprite_width, s.sprite.sprite_height, -(width) / 2, -height / 2, width * s.scale, height * s.scale);
    r.context.restore();
};
exports.stroked_rect_renderer = (context, rect, x, y, color, lineWidth, camera) => {
    let vheight = camera.state.dimensions.height / camera.state.scaling;
    let final_x = ((x - camera.state.position.x + camera.state.dimensions.width * (1 / camera.state.scaling) / 2 - rect.width / 2) * camera.state.scaling);
    let final_y = ((vheight - y - rect.height / 2 - camera.state.dimensions.height * (1 / camera.state.scaling) / 2 + camera.state.position.y) * camera.state.scaling);
    let height = rect.height * camera.state.scaling;
    let width = rect.width * camera.state.scaling;
    context.strokeStyle = color;
    context.lineWidth = lineWidth * camera.state.scaling;
    context.strokeRect(final_x, final_y, width, height);
};
exports.rect_renderer = (context, rect, x, y, color, lineWidth, camera) => {
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
const van_2 = __webpack_require__(/*! ../van */ "./src/van.ts");
const prefabs_1 = __webpack_require__(/*! ../game/objects/prefabs */ "./src/game/objects/prefabs.ts");
function apply_gravity(ob, grav_const, grav_max) {
    let st = ob.state;
    if (ob.gravity && st.velocity.y > grav_max) {
        st.velocity.y += grav_const;
    }
}
exports.apply_gravity = apply_gravity;
class room {
    constructor(game, config) {
        this.objects = [];
        this.particles = {};
        this.particles_arr = [];
        this.binds = [];
        this.audio = new audio_1.audio();
        this.text_nodes = [];
        this.game = game;
        for (let c of config.objects) {
            this.addItemStateConfig(c);
        }
    }
    exportStateConfig() {
        let config = { objects: [] };
        for (let o of this.objects) {
            console.log(o.constructor.name + " " + o.parent);
            if (!o.parent) {
                let st = o.state;
                config.objects.push({
                    type: o.constructor.name,
                    position: st.position,
                    rotation: o.rotation,
                    scaling: o.scaling,
                    parameters: o.params
                });
            }
        }
        return config;
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
    addItemStateConfig(config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (prefabs_1.prefabs[config.type]) {
                let new_obj = (new prefabs_1.prefabs[config.type](config.position, config.rotation, config.scaling, config.parameters));
                this.addItems(new_obj.combined_objects());
            }
            else {
                console.log("UNKNOWN TYPE ATTEMPTED TO LOAD: " + config.type);
            }
        });
    }
    addItem(o, list = this.objects) {
        return __awaiter(this, void 0, void 0, function* () {
            yield o.load();
            o.game = this.game;
            list.push(o);
            if (van_1.DEBUG && list === this.objects) {
                van_2.debug_update_obj_list();
            }
        });
    }
    addItems(o, list = this.objects) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let ob of o) {
                ob.game = this.game;
            }
            yield Promise.all(o.map((a) => a.load()));
            list.push(...o);
            if (van_1.DEBUG && list === this.objects) {
                van_2.debug_update_obj_list();
            }
        });
    }
    deleteItem(id, list = this.objects) {
        for (let a = 0; a < list.length; a++) {
            if (list[a].id === id) {
                list.splice(a, 1);
                a--;
            }
        }
        if (van_1.DEBUG && list === this.objects) {
            van_2.debug_update_obj_list();
        }
    }
    registerParticles() {
    }
    bindControl(key, x, func, interval = 1) {
        this.binds.push(controls_1.Bind(key, func, x, interval));
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
        for (let particle of this.particles_arr) {
            particle.statef(time);
        }
        for (let text_node of this.text_nodes) {
            text_node.statef(time);
        }
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
        super(pos);
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
exports.game = exports.objects = exports.rooms = exports.debug_update_properties_element = exports.debug_update_prefabs = exports.debug_update_room_list = exports.debug_update_obj_list = exports.DEBUG_v = exports.deep = exports.render_collision_box = exports.setPaused = exports.setDebug = exports.viewport = exports.GetViewportDimensions = exports.GetScreenDimensions = exports.project_path = exports.PAUSED = exports.DEBUG = void 0;
exports.DEBUG = true;
exports.PAUSED = true;
const render_1 = __webpack_require__(/*! ./lib/render */ "./src/lib/render.ts");
const controls_1 = __webpack_require__(/*! ./lib/controls */ "./src/lib/controls.ts");
const math_1 = __webpack_require__(/*! ./lib/math */ "./src/lib/math.ts");
const controls_2 = __webpack_require__(/*! ./lib/controls */ "./src/lib/controls.ts");
const rooms_1 = __webpack_require__(/*! ./game/rooms/rooms */ "./src/game/rooms/rooms.ts");
let { ipcRenderer } = window.require("electron");
const path = window.require("path");
let fs = window.require("fs");
exports.project_path = ipcRenderer.sendSync('path-request', 'ping')[0];
let canvas_element = document.getElementById("target");
let context = canvas_element.getContext("2d");
let screen_width = window.innerWidth;
let screen_height = window.innerHeight;
let vwidth = canvas_element.width;
let vheight = canvas_element.height;
const main_1 = __webpack_require__(/*! ./game/main */ "./src/game/main.ts");
const prefabs_1 = __webpack_require__(/*! ./game/objects/prefabs */ "./src/game/objects/prefabs.ts");
const debug_1 = __webpack_require__(/*! ./lib/debug */ "./src/lib/debug.ts");
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
function debug_update_obj_list() {
    let list = document.getElementById("objects_list");
    list.textContent = '';
    if (main_1.g.getRoom()) {
        for (let obj of main_1.g.getRoom().objects) {
            let para = document.createElement("p");
            para.appendChild(document.createTextNode(obj.constructor.name));
            para.classList.add("object_list_item");
            para.addEventListener("click", (e) => {
                if (exports.DEBUG_v.selected_properties_element == obj) {
                    exports.DEBUG_v.camera.state.position = Object.assign({}, obj.state.position);
                }
                else {
                    exports.DEBUG_v.selected_properties_element = obj;
                    debug_update_properties_element();
                }
            });
            list.appendChild(para);
        }
    }
}
exports.debug_update_obj_list = debug_update_obj_list;
function debug_update_room_list() {
    let list = document.getElementById("room_list");
    list.textContent = '';
    for (let room_name of Object.keys(rooms_1.rooms)) {
        let para = document.createElement("p");
        para.appendChild(document.createTextNode(room_name));
        para.classList.add("room_list_item");
        para.addEventListener("click", (e) => {
            main_1.g.loadRoomString(room_name);
        });
        list.appendChild(para);
    }
}
exports.debug_update_room_list = debug_update_room_list;
let properties_elements = undefined;
if (exports.DEBUG) {
    properties_elements = {
        pos_x: document.getElementById("pos_x"),
        pos_y: document.getElementById("pos_y"),
        vel_x: document.getElementById("vel_x"),
        vel_y: document.getElementById("vel_y"),
        rot: document.getElementById("rot"),
        scaling: document.getElementById("scaling"),
    };
    let inputs = document.getElementsByTagName("input");
    for (let a = 0; a < inputs.length; a++) {
        inputs[a].addEventListener("click", (e) => {
            inputs[a].focus();
        });
    }
    let focused;
    let debug_target = document.getElementById("debug_target");
    debug_target.addEventListener("click", (e) => {
        for (let a = 0; a < inputs.length; a++) {
            inputs[a].blur();
        }
    });
    let target = document.getElementById("target");
    target.addEventListener("click", (e) => {
        for (let a = 0; a < inputs.length; a++) {
            inputs[a].blur();
        }
    });
    properties_elements.pos_x.addEventListener("input", (e) => {
        let ele = exports.DEBUG_v.selected_properties_element;
        ele.state.position.x = parseFloat(properties_elements.pos_x.value) || 0;
    });
    properties_elements.pos_y.addEventListener("input", (e) => {
        let ele = exports.DEBUG_v.selected_properties_element;
        ele.state.position.y = parseFloat(properties_elements.pos_y.value) || 0;
    });
    properties_elements.vel_x.addEventListener("input", (e) => {
        let ele = exports.DEBUG_v.selected_properties_element;
        ele.state.velocity.x = parseFloat(properties_elements.vel_x.value) || 0;
    });
    properties_elements.vel_y.addEventListener("input", (e) => {
        let ele = exports.DEBUG_v.selected_properties_element;
        ele.state.velocity.y = parseFloat(properties_elements.vel_y.value) || 0;
    });
    properties_elements.rot.addEventListener("input", (e) => {
        let ele = exports.DEBUG_v.selected_properties_element;
        ele.rotation = parseFloat(properties_elements.rot.value) || 0;
    });
    properties_elements.scaling.addEventListener("input", (e) => {
        let ele = exports.DEBUG_v.selected_properties_element;
        ele.scaling = parseFloat(properties_elements.scaling.value) || 0;
    });
    document.getElementById("delete_element").addEventListener("click", (e) => {
        let ele = exports.DEBUG_v.selected_properties_element;
        ele.delete();
    });
}
function debug_update_prefabs() {
    return __awaiter(this, void 0, void 0, function* () {
        let pres = Object.keys(prefabs_1.prefabs).map((o) => __awaiter(this, void 0, void 0, function* () {
            let a = (new prefabs_1.prefabs[o]({ x: 0, y: 0 }, 0, 1));
            yield a.load();
            let objs = a.combined_objects();
            for (let obj of objs) {
                obj.UnbindAll();
            }
            let filtered = objs.filter((a) => a.render);
            return {
                prefab: prefabs_1.prefabs[o],
                name: a.constructor.name,
                rendered: filtered.map((o) => {
                    return {
                        name: o.constructor.name,
                        render: o.renderf(0)
                    };
                })
            };
        }));
        let a = yield Promise.all(pres);
        let target = document.getElementById("prefab_target");
        target.textContent = '';
        for (let prefab of a) {
            let div = document.createElement("div");
            let para = document.createElement("p");
            para.appendChild(document.createTextNode(prefab.name));
            div.appendChild(para);
            if (Array.isArray(prefab.rendered[0].render)) {
            }
            else {
                div.append(prefab.rendered[0].render.sprite.sprite_sheet);
            }
            div.classList.add("prefab_box");
            div.addEventListener("mousedown", () => __awaiter(this, void 0, void 0, function* () {
                let obj = (new prefab.prefab(Object.assign({}, exports.DEBUG_v.camera.state.position), 0, 1));
                yield main_1.g.state.current_room.addItems(obj.combined_objects());
            }));
            target.append(div);
        }
    });
}
exports.debug_update_prefabs = debug_update_prefabs;
function debug_update_properties_element() {
    if (exports.DEBUG_v.selected_properties_element) {
        let ele = exports.DEBUG_v.selected_properties_element;
        document.getElementById("obj_name").innerHTML = ele.constructor.name;
        properties_elements.pos_x.value = "" + ele.state.position.x.toFixed(2);
        properties_elements.pos_y.value = "" + ele.state.position.y.toFixed(2);
        properties_elements.vel_x.value = "" + ele.state.velocity.x.toFixed(2);
        properties_elements.vel_y.value = "" + ele.state.velocity.y.toFixed(2);
        properties_elements.rot.value = "" + ele.rotation.toFixed(2);
        properties_elements.scaling.value = "" + ele.scaling.toFixed(2);
    }
}
exports.debug_update_properties_element = debug_update_properties_element;
function debug_statef(t) {
    let mouse = controls_1.Poll_Mouse(exports.DEBUG_v.target, exports.DEBUG_v.camera);
    if (!exports.PAUSED) {
        debug_update_properties_element();
    }
    if (exports.DEBUG_v.selected_element) {
        if (exports.PAUSED && controls_1.held_keys["ControlLeft"]) {
            let initial_distance = math_1.Distance(exports.DEBUG_v.click_position, exports.DEBUG_v.selected_element.state.position);
            let current_distance = math_1.Distance(mouse, exports.DEBUG_v.selected_element.state.position);
            exports.DEBUG_v.selected_element.scaling = exports.DEBUG_v.selected_element_initial_scaling + (current_distance - initial_distance) / exports.DEBUG_v.selected_element.width;
        }
        else {
            let st = exports.DEBUG_v.selected_element.state;
            st.position.x = mouse.x - exports.DEBUG_v.selected_element_offset.x,
                st.position.y = mouse.y - exports.DEBUG_v.selected_element_offset.y;
        }
    }
    if (exports.PAUSED && exports.DEBUG_v.rotation_element) {
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
        this.isRendering = false;
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
            debug_1.debug_setup();
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
                selected_element_offset: undefined,
                rotation_element: undefined,
                middle_position: undefined,
                click_position: undefined,
                selected_properties_element: undefined,
                selected_element_initial_scaling: 0
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
                        exports.DEBUG_v.click_position = mouse;
                        let clicked = this.getRoom().check_objects({
                            x: mouse.x,
                            y: mouse.y,
                            height: 1,
                            width: 1
                        })[0];
                        if (clicked) {
                            exports.DEBUG_v.selected_properties_element = clicked;
                            debug_update_properties_element();
                            exports.DEBUG_v.selected_element = clicked;
                            exports.DEBUG_v.selected_element_initial_scaling = clicked.scaling;
                            exports.DEBUG_v.selected_element_offset = {
                                x: mouse.x - clicked.state.position.x,
                                y: mouse.y - clicked.state.position.y
                            };
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
                    debug_update_properties_element();
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
                if (!controls_1.held_keys["ControlLeft"] && exports.DEBUG_v.last_clicked.id == "debug_target")
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
                    let name = this.getRoom().constructor.name;
                    let a = path.join(`${exports.project_path}`, `../rooms/${name}/info.json`);
                    try {
                        fs.writeFileSync(a, JSON.stringify(this.getRoom().exportStateConfig()));
                    }
                    catch (e) {
                        console.log("ERROR WRITING ROOM INFO FILE.");
                    }
                    alert("Saved");
                }
                else if (ctrl_held && !exports.PAUSED) {
                    alert("pause to enable saving.");
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
                    debug_statef(16.66);
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
                    hitboxes.push(...a.getAllCollisionBoxes());
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
                    render_1.stroked_rect_renderer(this.offscreen_context, rect, box.x, box.y, "#FF0000", 1, camera);
                }
                while (hitboxes.length > 0) {
                    let box = hitboxes.pop();
                    let rect = {
                        width: box.width,
                        height: box.height
                    };
                    render_1.stroked_rect_renderer(this.offscreen_context, rect, box.x, box.y, "#008000", 1, camera);
                }
                if (exports.DEBUG_v.selected_properties_element) {
                    let coll = exports.DEBUG_v.selected_properties_element.getFullCollisionBox();
                    render_1.rect_renderer(this.offscreen_context, { width: 25, height: 25 }, coll.x, coll.y, "skyblue", 10, camera);
                    render_1.stroked_rect_renderer(this.offscreen_context, coll, coll.x, coll.y, "blue", 1, camera);
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
            for (let a of Object.keys(rooms_1.rooms)) {
                if (a == x) {
                    let new_room = new rooms_1.rooms[a](this);
                    yield this.loadRoom(new_room);
                }
            }
        });
    }
    loadRoom(x) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.state.logic) {
                window.clearInterval(this.state.logic);
            }
            x.game = this;
            if (this.state.current_room !== undefined) {
                while (this.state.current_room.objects.length > 0) {
                    this.state.current_room.objects[0].delete();
                }
                for (let id of this.state.current_room.binds) {
                    controls_1.Unbind(id);
                }
            }
            let new_room = yield x.load();
            x.register_controls();
            x.registerParticles();
            if (this.state.logic != undefined) {
                clearInterval(this.state.logic);
            }
            this.state.logic = this.start_logic(logic_loop_interval);
            if (exports.DEBUG) {
                debug_update_room_list();
                debug_update_prefabs();
            }
            this.state.current_room = x;
            debug_update_obj_list();
            if (!this.isRendering) {
                this.render(0);
                this.isRendering = true;
            }
        });
    }
}
exports.game = game;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0NvbnRyb2xsZWRQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9DdXJzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9Eb29yLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvR29vbWJhLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvR3VuLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL1ZlcnRCb3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9hYnN0cmFjdC9wbGF0Zm9ybWVyX29iai50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL2JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL2J1bGxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL3ByZWZhYnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm9vbXMvT3ZlcndvcmxkL092ZXJ3b3JsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9yb29tcy9VbmRlcndvcmxkL1VuZGVyd29ybGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm9vbXMvcm9vbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9hdWRpby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbnRyb2xzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9odWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JlbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkEsZ0VBQXFDO0FBQ3JDLGlGQUFxQztBQUVyQyxzSEFBc0Q7QUFDdEQsSUFBSSxjQUFjLEdBQXFCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFzQixDQUFDO0FBRW5GLFNBQUMsR0FBRyxJQUFJLFVBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBRSxDQUFPLENBQVUsRUFBQyxFQUFFO0lBQzlFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHO1FBQ2hCLElBQUksZUFBTSxDQUFDO1lBQ1QsQ0FBQyxFQUFDLENBQUM7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUNILFVBQVUsRUFBQztnQkFDVCxNQUFNLEVBQUMsY0FBUSxDQUFDLE1BQU07Z0JBQ3RCLEtBQUssRUFBQyxjQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBQyxDQUFDO2FBQzNCO1lBQ0QsT0FBTyxFQUFDLEdBQUc7WUFDWCxLQUFLLEVBQUMsS0FBSztTQUNaLEVBQ0E7WUFDQyxDQUFDLEVBQUMsQ0FBQztZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsS0FBSyxFQUFDLEdBQUc7WUFDVCxNQUFNLEVBQUMsQ0FBQztTQUNULENBQUM7UUFDRixJQUFJLGVBQU0sQ0FBQztZQUNULENBQUMsRUFBQyxDQUFDO1lBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDSCxVQUFVLEVBQUM7Z0JBQ1QsS0FBSyxFQUFDLGNBQVEsQ0FBQyxLQUFLLEdBQUMsQ0FBQztnQkFDdEIsTUFBTSxFQUFDLGNBQVEsQ0FBQyxNQUFNO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFDLEdBQUc7WUFDWCxLQUFLLEVBQUMsS0FBSztTQUNaLEVBQUM7WUFDQSxDQUFDLEVBQUMsY0FBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUMsQ0FBQztZQUN0QixDQUFDLEVBQUMsQ0FBQztZQUNILEtBQUssRUFBQyxHQUFHO1lBQ1QsTUFBTSxFQUFDLENBQUM7U0FDVCxDQUFDO0tBQ0g7SUFDRCxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsRUFBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNILDBGQUErQztBQUMvQyxxRkFBNkM7QUFHN0MsTUFBYSxnQkFBaUIsU0FBUSxlQUFNO0lBQTVDOztRQUNFLFNBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBaUNwQixDQUFDO0lBaENDLGlCQUFpQjtRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLG9CQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUM5QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbkQ7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLG9CQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxrQkFBUyxDQUFDLElBQUksQ0FBQztZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLG9CQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsb0JBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQzlDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbkQ7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLG9CQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxrQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLG9CQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQzthQUMvQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBbENELDRDQWtDQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRCwrSEFBMkQ7QUFNM0QsTUFBYSxNQUFPLFNBQVEsK0JBQXlCO0lBUW5ELFlBQVksR0FBWSxFQUFDLFFBQWUsRUFBQyxPQUFjLEVBQUMsTUFBb0I7UUFDMUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBUnZDLGVBQVUsR0FBRyxzQkFBc0IsQ0FBQztRQUNwQyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixTQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUdoQixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsUUFBUSxFQUFFO2dCQUNSLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDUixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDVDtZQUNELFFBQVEsRUFBRTtnQkFDUixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNO0lBQ04sQ0FBQztDQUNGO0FBdkJELHdCQXVCQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCRyxvRkFBcUM7QUFFekMsd0VBQTRCO0FBVXhCLE1BQWEsSUFBSyxTQUFRLFlBQWU7SUFhdkMsWUFBWSxRQUFpQixFQUFDLFFBQWUsRUFBQyxPQUFjLEVBQUMsU0FBeUIsSUFBSSxDQUFDLGNBQWM7UUFDdkcsS0FBSyxDQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBYjFDLGVBQVUsR0FBRyxzQkFBc0IsQ0FBQztRQUNwQyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLFNBQUksR0FBaUIsRUFBRSxDQUFDO1FBQ3hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBT1YsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFFBQVEsRUFBQyxRQUFRO1lBQ2pCLFFBQVEsRUFBQztnQkFDUCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLFVBQWlCO1FBQ3RCLElBQUksUUFBUSxHQUFHLFFBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN2RSxLQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBQztZQUN0QixJQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFDO2dCQUM3QixRQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU87YUFDUjtTQUNGO0lBQ0gsQ0FBQztJQUNELE9BQU8sQ0FBQyxVQUFpQjtRQUN4QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELG1CQUFtQjtJQUVuQixDQUFDO0lBQ0QsY0FBYztJQUVkLENBQUM7SUFDRCxpQkFBaUI7SUFFakIsQ0FBQzs7QUEzQ0gsb0JBNENDO0FBbENRLG1CQUFjLEdBQW1CO0lBQ3RDLFFBQVEsRUFBQyxZQUFZO0NBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJQLG9GQUFzRDtBQUV0RCwrSEFBaUc7QUFNakcsd0VBQTRCO0FBRTVCLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBSTtJQUNKLDJDQUFLO0FBQ1AsQ0FBQyxFQUhXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBR3BCO0FBc0JELE1BQWEsTUFBTyxTQUFRLCtCQUE0QjtJQU90RCxZQUFZLFFBQWlCLEVBQUMsUUFBZSxFQUFDLE9BQWMsRUFBQyxhQUEyQixNQUFNLENBQUMsY0FBYztRQUUzRyxLQUFLLENBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFSOUMsZUFBVSxHQUFHLDRCQUE0QixDQUFDO1FBQzFDLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osU0FBSSxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFLZixJQUFJLFVBQVUsQ0FBQyxFQUFFLElBQUksU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDekIsUUFBUSxFQUFDLFFBQVE7WUFDakIsUUFBUSxFQUFFO2dCQUNSLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2FBQ0w7WUFDRCxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxHQUFHO1lBQ1gsYUFBYSxFQUFFLENBQUM7WUFDaEIsaUJBQWlCLEVBQUUsQ0FBQztTQUNyQjtRQUNELGdDQUFnQztJQUNsQyxDQUFDO0lBQ0QsbUJBQW1CO1FBQ2pCLElBQUksT0FBTyxHQUFHLG1CQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCLEVBQUUsR0FBRyxDQUFDO1FBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQzNCLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQixFQUFFLEdBQUcsQ0FBQztRQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUM5QixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUMvQixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUM5QixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUMvQixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsRUFBRSxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsY0FBYztRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSx3QkFBd0IsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsT0FBTyxDQUFDLENBQVM7UUFDZixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3RCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO2FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDbEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7YUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLElBQUksSUFBSSxHQUFHLFFBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNyQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDeEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO2dCQUNoQixNQUFNLEVBQUUsQ0FBQztnQkFDVCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ1IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUM5QixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2hHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQzthQUM5QjtpQkFDSTtnQkFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDM0I7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2hFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNoRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUFBLENBQUM7WUFDakUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1NBQ0Y7YUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQUEsQ0FBQztZQUNqRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7Q0FDRjtBQXJIRCx3QkFxSEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SkQsaUZBQXdEO0FBQ3hELG9GQUFtRDtBQUNuRCwrSEFBMkQ7QUFDM0Qsd0VBQTRCO0FBSzVCLE1BQWEsR0FBSSxTQUFRLCtCQUF5QjtJQVVoRCxZQUFZLFFBQWlCLEVBQUMsUUFBUSxHQUFHLENBQUMsRUFBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsY0FBYztRQUNqRixLQUFLLENBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFWMUMsZUFBVSxHQUFHLDBCQUEwQixDQUFDO1FBQ3hDLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixTQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUdiLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUscUJBQWEsRUFBRSxDQUFDLFFBQVE7WUFDbEMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNiLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQVM7UUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsSUFBSSxHQUFHLEdBQUcsd0JBQWUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHO2dCQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDeEMsQ0FBQztTQUVIO2FBQ0k7WUFDSCxJQUFJLElBQUksR0FBRyxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBVyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyRDtJQUVILENBQUM7Q0FDRjtBQXRDRCxrQkFzQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0Qsb0ZBQWlEO0FBRWpELG1IQUFzRDtBQUN0RCw0RUFBNEI7QUFHNUIsTUFBYSxNQUFPLFNBQVEsc0JBQXdCO0lBRWxELFlBQVksUUFBa0IsRUFBRSxRQUFnQixFQUFDLE9BQWMsRUFBRSxVQUF5QjtRQUV4RixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFIbEIsVUFBSyxHQUFHLElBQUksQ0FBQztRQUlYLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUU7Z0JBQ1IsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDTDtTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLG1DQUFnQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFHLENBQUMsRUFBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUMsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQztDQUNGO0FBZkQsd0JBZUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkcsb0ZBQXFDO0FBV3JDLE1BQWEsSUFBSyxTQUFRLFlBQWU7SUFVdkMsWUFBWSxRQUFpQixFQUFDLFFBQWUsRUFBQyxPQUFjLEVBQUMsTUFBc0I7UUFDakYsS0FBSyxDQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBVjFDLGVBQVUsR0FBRyxxQkFBcUIsQ0FBQztRQUNuQyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLFNBQUksR0FBaUIsRUFBRSxDQUFDO1FBQ3hCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBSVYsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFFBQVEsRUFBQyxRQUFRO1lBQ2pCLFFBQVEsRUFBQztnQkFDUCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLFVBQWlCO0lBRXhCLENBQUM7SUFDRCxPQUFPLENBQUMsVUFBaUI7UUFDeEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxtQkFBbUI7SUFFbkIsQ0FBQztJQUNELGNBQWM7SUFFZCxDQUFDO0lBQ0QsaUJBQWlCO0lBRWpCLENBQUM7O0FBbENILG9CQW1DQztBQTFCUSxtQkFBYyxHQUFtQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJoRCw0RUFBNEI7QUFFNUIsTUFBYSxPQUFRLFNBQVEsU0FBRztJQUFoQzs7UUFDRSxlQUFVLEdBQUcsb0JBQW9CLENBQUM7UUFDbEMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQU0sR0FBRyxHQUFHLENBQUM7SUFDZixDQUFDO0NBQUE7QUFKRCwwQkFJQzs7Ozs7Ozs7Ozs7Ozs7OztBQ05ELHVGQUErRDtBQU8vRCxNQUFzQixjQUFrQixTQUFRLG9CQUFjO0lBRTVELFlBQVksUUFBaUIsRUFBQyxRQUFlLEVBQUMsT0FBYyxFQUFDLFVBQWtCO1FBQzdFLEtBQUssQ0FBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxVQUFVLENBQUMsQ0FBQztRQUY5QyxVQUFLLEdBQUcsS0FBSyxDQUFDO0lBR2QsQ0FBQztJQUNELE1BQU0sQ0FBQyxDQUFRO1FBQ2IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQThCLENBQUM7UUFDaEQsSUFBRyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Q0FDRjtBQVhELHdDQVdDO0FBRUQsTUFBYSx3QkFBNEIsU0FBUSxzQkFBZ0I7SUFFL0QsWUFBWSxDQUFVO1FBQ3BCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUZYLFVBQUssR0FBRyxLQUFLLENBQUM7SUFHZCxDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQVE7UUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBOEIsQ0FBQztRQUNoRCxJQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQztDQUNGO0FBWEQsNERBV0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkQsK0hBQW9FO0FBSXBFLE1BQWEsR0FBSSxTQUFRLCtCQUF5QjtJQVFoRCxZQUFZLENBQVUsRUFBQyxDQUFRLEVBQUMsQ0FBUTtRQUN0QyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBUmxDLGVBQVUsR0FBRyxtQkFBbUI7UUFDaEMsY0FBUyxHQUFHLElBQUk7UUFDaEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFVBQUssR0FBRyxHQUFHLENBQUM7UUFDWixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxTQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFHZixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsUUFBUSxFQUFDLENBQUM7WUFDVixRQUFRLEVBQUM7Z0JBQ1AsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztDQUNGO0FBbEJELGtCQWtCQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxvRkFBc0Q7QUFFdEQsd0VBQTBCO0FBYzFCLE1BQWEsTUFBTyxTQUFRLFlBQWlCO0lBTzNDLFlBQVksQ0FBVSxFQUFFLEtBQVksRUFBQyxPQUFjLEVBQUUsS0FBWSxTQUFTO1FBQ3hFLEtBQUssQ0FBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsQ0FBQztRQVA1QixlQUFVLEdBQUcsc0JBQXNCLENBQUM7UUFDcEMsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFNBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBR2hCLElBQUcsRUFBRSxJQUFJLFNBQVMsRUFBQztZQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFFBQVEsRUFBQyxDQUFDO1lBQ1YsUUFBUSxFQUFDO2dCQUNQLENBQUMsRUFBQyxDQUFDO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCxLQUFLLEVBQUMsRUFBRTtZQUNSLFFBQVEsRUFBQyxLQUFLO1lBQ2QsUUFBUSxFQUFDLENBQUM7WUFDVixNQUFNLEVBQUMsQ0FBQztTQUNUO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFXO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLHdCQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUM7WUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBQ0QsaUJBQWlCO0lBRWpCLENBQUM7Q0FDRjtBQW5DRCx3QkFtQ0M7QUFFRCxNQUFhLE1BQU8sU0FBUSxNQUFNO0lBY2hDLFlBQVksQ0FBVSxFQUFDLEtBQVk7UUFDakMsS0FBSyxDQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFkbkIsZUFBVSxHQUFHLDZCQUE2QixDQUFDO1FBQzNDLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFNBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUNqQixXQUFNLEdBQUc7WUFDUCxRQUFRLEVBQUMsQ0FBQztZQUNWLFFBQVEsRUFBQyxDQUFDO1lBQ1YsS0FBSyxFQUFDLEVBQUU7WUFDUixNQUFNLEVBQUMsRUFBRTtTQUNWO1FBR0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsY0FBYztRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCxNQUFNLENBQUMsSUFBVztRQUNoQixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUM7WUFDMUIsSUFBSSxNQUFNLEdBQUcsd0JBQWUsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUM7UUFDNUIsSUFBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBQztZQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUN4QjtRQUNELElBQUksSUFBSSxHQUFHLFFBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ2hDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxDQUFDLEtBQUssRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7WUFDdkIsS0FBSSxJQUFJLFNBQVMsSUFBSSxVQUFVLEVBQUM7Z0JBQzlCLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUE4QixDQUFDO2dCQUNsRCxJQUFnQyxTQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQztvQkFDdEQsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztpQkFDaEM7Z0JBQ0QsSUFBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztvQkFDdEMsSUFBSSxLQUFLLEdBQUcsU0FBbUIsQ0FBQztvQkFDaEMsSUFBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBQzt3QkFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztxQkFDN0I7aUJBQ0Y7YUFDRjtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQy9DLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkIsS0FBSyxFQUFDLEdBQUc7Z0JBQ1QsTUFBTSxFQUFDLEdBQUc7YUFDWCxFQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDYixLQUFJLElBQUksUUFBUSxJQUFJLG9CQUFvQixFQUFDO2dCQUN2QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLFVBQVUsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFDLEdBQUcsQ0FBQztnQkFDbEMsSUFBRyxVQUFVLEdBQUcsQ0FBQztvQkFDZixVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUVqQixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBa0IsQ0FBQztnQkFDMUMsSUFBSSxVQUFVLEdBQUcsd0JBQWUsQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDaEYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNwQztZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7Q0FDRjtBQXRFRCx3QkFzRUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSEQsNEVBQTBCO0FBQzFCLHFGQUFnQztBQUNoQyxtSEFBb0Q7QUFDcEQscUZBQWdDO0FBQ2hDLCtFQUE0QjtBQUM1QixxRkFBZ0M7QUFDaEMsNEVBQTBCO0FBQzFCLHFGQUFnQztBQUNoQywrRUFBNEI7QUFDNUIsd0ZBQWtDO0FBQ3ZCLGVBQU8sR0FBVztJQUM1QixHQUFHLEVBQUMsU0FBRztJQUNQLE1BQU0sRUFBQyxlQUFNO0lBQ2IsZ0JBQWdCLEVBQUMsbUNBQWdCO0lBQ2pDLE1BQU0sRUFBQyxlQUFNO0lBQ2IsSUFBSSxFQUFDLFdBQUk7SUFDVCxNQUFNLEVBQUMsZUFBTTtJQUNiLEdBQUcsRUFBQyxTQUFHO0lBQ1AsTUFBTSxFQUFDLGVBQU07SUFDYixJQUFJLEVBQUMsV0FBSTtJQUNULE9BQU8sRUFBQyxpQkFBTztDQUNmOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJELGlGQUEwRjtBQVExRixnR0FBa0U7QUFDbEUsdUZBQW1FO0FBQ25FLDZGQUE4RDtBQUM5RCw4RUFBNkM7QUFDN0Msc0VBQTRFO0FBQzVFLGlHQUFvRDtBQUNwRCwyRUFBNkI7QUFDN0IsNEZBQW9DO0FBT3BDLE1BQU0sYUFBYyxTQUFRLFNBQUc7SUFDN0I7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksVUFBSSxDQUFDO1lBQy9CLFFBQVEsRUFBRTtnQkFDUixDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsMkJBQXFCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFDLENBQUM7YUFDeEM7WUFDRCxJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLE9BQU87WUFDZCxLQUFLLEVBQUMsTUFBTTtZQUNaLE9BQU8sRUFBQyxDQUFDO1NBQ1YsRUFBRSxHQUFHLEVBQUU7WUFDTixJQUFJLENBQUMsR0FBRyxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBVyxDQUFDO1lBQ3RELElBQUcsQ0FBQztnQkFDRixPQUFPLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2xELE9BQU8sRUFBRTtRQUNYLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDSixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQUksQ0FBQztZQUMvQixRQUFRLEVBQUU7Z0JBQ1IsQ0FBQyxFQUFFLEVBQUU7Z0JBQ0wsQ0FBQyxFQUFFLDJCQUFxQixFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBQyxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFFLE1BQU07WUFDYixPQUFPLEVBQUMsQ0FBQztTQUNWLEVBQUUsR0FBRyxFQUFFO1lBQ04sSUFBSSxDQUFDLEdBQUcsUUFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQVcsQ0FBQztZQUN0RCxJQUFHLENBQUM7Z0JBQ0YsT0FBTyxxQkFBcUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztZQUMxRixPQUFPLEVBQUU7UUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNGO0FBRUQsTUFBTSxVQUFXLFNBQVEsU0FBRztJQUMxQjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFJLENBQUM7WUFDL0IsUUFBUSxFQUFFO2dCQUNSLENBQUMsRUFBRSxFQUFFO2dCQUNMLENBQUMsRUFBRSxHQUFHO2FBQ1A7WUFDRCxJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLE9BQU87WUFDZCxLQUFLLEVBQUMsTUFBTTtZQUNaLE9BQU8sRUFBQyxDQUFDO1NBQ1YsRUFBRSxHQUFHLEVBQUU7WUFDTixJQUFJLENBQUMsR0FBRyxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBVyxDQUFDO1lBQ3RELElBQUcsQ0FBQztnQkFDRixPQUFPLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3BELE9BQU8sRUFBRTtRQUNYLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0Y7QUFFRCxNQUFhLFNBQVUsU0FBUSxXQUFpQjtJQUc5QyxZQUFZLElBQWtCO1FBQzVCLEtBQUssQ0FBQyxJQUFJLEVBQUMsSUFBK0IsQ0FBQyxDQUFDO1FBSDlDLG1CQUFjLEdBQUcsc0JBQXNCLENBQUM7UUFJdEMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsYUFBYSxFQUFDLElBQUk7U0FDbkIsQ0FBQztRQUNGOzs7Ozs7Ozs7Ozs7O1VBYUU7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsb0JBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDakYsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVcsQ0FBQztZQUM3QyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNyQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxvQkFBUyxDQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUU7WUFDbkQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQVEsQ0FBQztZQUNwQyxJQUFHLEdBQUcsRUFBQztnQkFDTCxJQUFJLE1BQU0sR0FBRyx3QkFBZSxDQUFDLEVBQUUsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLFFBQVEsR0FBRztvQkFDYixDQUFDLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO29CQUNqQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO2lCQUNsQztnQkFDRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2pCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFHLEVBQUM7b0JBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFNLENBQUMsRUFBQyxDQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDMUU7Z0JBRUQsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxJQUFJO29CQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDeEI7UUFDSCxDQUFDLEVBQUMsR0FBRyxDQUFDO0lBQ1IsQ0FBQztJQUNELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUc7WUFDeEIsTUFBTSxFQUFDLDRCQUE0QjtZQUNuQyxNQUFNLEVBQUMsRUFBRTtZQUNULEtBQUssRUFBQyxFQUFFO1NBQ1QsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUc7WUFDNUIsTUFBTSxFQUFDLGdDQUFnQztZQUN2QyxNQUFNLEVBQUMsR0FBRztZQUNWLEtBQUssRUFBQyxHQUFHO1NBQ1Y7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQVk7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsb0JBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3hDLG9DQUF3QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQVcsQ0FBQztZQUNyRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBVyxDQUFDO1lBQ3BELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFXLENBQUM7WUFDckQsSUFBSSxPQUFPLEdBQUcsUUFBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFFOUIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25HO1lBRUQsSUFBRyxNQUFNLEVBQUM7Z0JBQ1IsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUN2RDtZQUVELElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxLQUFLLEdBQUcscUJBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNuQztTQUVGO1FBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0NBRUY7QUFuR0QsOEJBbUdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTEQsaUZBQTBGO0FBUTFGLGdHQUFrRTtBQUNsRSx1RkFBbUU7QUFDbkUsNkZBQThEO0FBQzlELDhFQUE2QztBQUM3QyxzRUFBNEU7QUFDNUUsaUdBQW9EO0FBQ3BELDJFQUE2QjtBQUM3Qiw2RkFBb0M7QUFPcEMsTUFBTSxhQUFjLFNBQVEsU0FBRztJQUM3QjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFJLENBQUM7WUFDL0IsUUFBUSxFQUFFO2dCQUNSLENBQUMsRUFBRSxFQUFFO2dCQUNMLENBQUMsRUFBRSwyQkFBcUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUMsQ0FBQzthQUN4QztZQUNELElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsT0FBTztZQUNkLEtBQUssRUFBQyxNQUFNO1lBQ1osT0FBTyxFQUFDLENBQUM7U0FDVixFQUFFLEdBQUcsRUFBRTtZQUNOLElBQUksQ0FBQyxHQUFHLFFBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFXLENBQUM7WUFDdEQsSUFBRyxDQUFDO2dCQUNGLE9BQU8saUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbEQsT0FBTyxFQUFFO1FBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksVUFBSSxDQUFDO1lBQy9CLFFBQVEsRUFBRTtnQkFDUixDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsMkJBQXFCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFDLENBQUM7YUFDeEM7WUFDRCxJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLE9BQU87WUFDZCxLQUFLLEVBQUUsTUFBTTtZQUNiLE9BQU8sRUFBQyxDQUFDO1NBQ1YsRUFBRSxHQUFHLEVBQUU7WUFDTixJQUFJLENBQUMsR0FBRyxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBVyxDQUFDO1lBQ3RELElBQUcsQ0FBQztnQkFDRixPQUFPLHFCQUFxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDO1lBQzFGLE9BQU8sRUFBRTtRQUNYLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0Y7QUFFRCxNQUFNLFVBQVcsU0FBUSxTQUFHO0lBQzFCO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQUksQ0FBQztZQUMvQixRQUFRLEVBQUU7Z0JBQ1IsQ0FBQyxFQUFFLEVBQUU7Z0JBQ0wsQ0FBQyxFQUFFLEdBQUc7YUFDUDtZQUNELElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsT0FBTztZQUNkLEtBQUssRUFBQyxNQUFNO1lBQ1osT0FBTyxFQUFDLENBQUM7U0FDVixFQUFFLEdBQUcsRUFBRTtZQUNOLElBQUksQ0FBQyxHQUFHLFFBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFXLENBQUM7WUFDdEQsSUFBRyxDQUFDO2dCQUNGLE9BQU8sVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDcEQsT0FBTyxFQUFFO1FBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDRjtBQUVELE1BQWEsVUFBVyxTQUFRLFdBQWlCO0lBRy9DLFlBQVksSUFBa0I7UUFDNUIsS0FBSyxDQUFDLElBQUksRUFBQyxJQUErQixDQUFDLENBQUM7UUFIOUMsbUJBQWMsR0FBRywyQkFBMkIsQ0FBQztRQUkzQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsTUFBTSxFQUFFLFNBQVM7WUFDakIsTUFBTSxFQUFFLEtBQUs7WUFDYixhQUFhLEVBQUMsSUFBSTtTQUNuQixDQUFDO1FBQ0Y7Ozs7Ozs7Ozs7Ozs7VUFhRTtRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFDRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxvQkFBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNqRixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBVyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25DLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLG9CQUFTLENBQUMsTUFBTSxFQUFDLEdBQUcsRUFBRTtZQUNuRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBUSxDQUFDO1lBQ3BDLElBQUcsR0FBRyxFQUFDO2dCQUNMLElBQUksTUFBTSxHQUFHLHdCQUFlLENBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BELElBQUksUUFBUSxHQUFHO29CQUNiLENBQUMsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7b0JBQ2pDLENBQUMsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7aUJBQ2xDO2dCQUNELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDakIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUcsRUFBQztvQkFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQU0sQ0FBQyxFQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUMxRTtnQkFFRCxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLElBQUk7b0JBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBQyxHQUFHLENBQUM7SUFDUixDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRztZQUN4QixNQUFNLEVBQUMsNEJBQTRCO1lBQ25DLE1BQU0sRUFBQyxFQUFFO1lBQ1QsS0FBSyxFQUFDLEVBQUU7U0FDVCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRztZQUM1QixNQUFNLEVBQUMsZ0NBQWdDO1lBQ3ZDLE1BQU0sRUFBQyxHQUFHO1lBQ1YsS0FBSyxFQUFDLEdBQUc7U0FDVjtJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsSUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxvQkFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDeEMsb0NBQXdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDekQ7WUFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBVyxDQUFDO1lBQ3JELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFXLENBQUM7WUFDcEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQVcsQ0FBQztZQUNyRCxJQUFJLE9BQU8sR0FBRyxRQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUU5QixJQUFJLE1BQU0sRUFBRTtnQkFDVixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkc7WUFFRCxJQUFHLE1BQU0sRUFBQztnQkFDUixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEO1lBRUQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLEtBQUssR0FBRyxxQkFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1NBRUY7UUFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Q0FFRjtBQW5HRCxnQ0FtR0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pMRCxnSEFBZ0Q7QUFDaEQscUhBQW1EO0FBQ3hDLGFBQUssR0FBWTtJQUMzQixTQUFTLEVBQUMscUJBQVM7SUFDbkIsVUFBVSxFQUFDLHVCQUFVO0NBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEQsTUFBYSxLQUFLO0lBQWxCO1FBQ0UsV0FBTSxHQUFrQixFQUFFLENBQUM7SUE0QjdCLENBQUM7SUEzQkMsR0FBRyxDQUFDLElBQVksRUFBRSxDQUFTO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNLLElBQUk7O1lBQ1IsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUM5QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO29CQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7d0JBQ3hELE9BQU8sRUFBRSxDQUFDO29CQUNaLENBQUMsQ0FBQztnQkFDSixDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7WUFDRixJQUFHO2dCQUNELElBQUksQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1g7WUFDRCxPQUFNLENBQUMsRUFBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQztLQUFBO0lBQ0QsSUFBSSxDQUFDLElBQVcsRUFBQyxNQUFhO1FBQzVCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLEtBQUssRUFBRTtRQUNULENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUM7Q0FDRjtBQTdCRCxzQkE2QkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0QsaUZBQXdDO0FBV3hDLElBQUssU0FLSjtBQUxELFdBQUssU0FBUztJQUNaLHlDQUFJO0lBQ0osMkNBQUs7SUFDTCxxQ0FBRTtJQUNGLHlDQUFJO0FBQ04sQ0FBQyxFQUxJLFNBQVMsS0FBVCxTQUFTLFFBS2I7QUFFRCxTQUFnQixpQkFBaUIsQ0FBQyxDQUFnQixFQUFDLElBQXdCLEVBQUMsWUFBcUIsRUFBRTtJQUNqRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEcsQ0FBQztBQUZELDhDQUVDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsQ0FBZ0IsRUFBQyxJQUF3QixFQUFDLFlBQXFCLEVBQUU7SUFDcEcsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekYsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQjtLQUNGO0lBQ0QsT0FBTyxPQUFPO0FBQ2hCLENBQUM7QUFSRCxvREFRQztBQUNELGtDQUFrQztBQUNsQyxTQUFnQixnQkFBZ0IsQ0FBQyxDQUFnQixFQUFFLElBQXlCLEVBQUUsU0FBZ0I7SUFDNUYsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDbEIsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLFNBQVMsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0QsT0FBTyxDQUFDLENBQUM7U0FDVjtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBUEQsNENBT0M7QUFFRCxTQUFTLFlBQVksQ0FBQyxRQUFlLEVBQUMsR0FBaUIsRUFBQyxJQUF3QixFQUFFLFNBQWdCLEVBQUMsR0FBYTtJQUM5RyxJQUFJLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELElBQUcsU0FBUyxJQUFJLElBQUksRUFBQztRQUNuQixPQUFPLFFBQVEsQ0FBQztLQUNqQjtTQUNHO1FBQ0YsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLElBQUksTUFBTSxHQUFHLGNBQUssQ0FBQyxJQUFJLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQWtCLENBQUM7UUFDeEMsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLEtBQWtCLENBQUM7UUFDOUMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDNUMsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDbEQsSUFBRyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksRUFBQztZQUN2QixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xGO2FBQ0ksSUFBRyxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssRUFBQztZQUM3QixPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xGO2FBQ0ksSUFBRyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksRUFBQztZQUM1QixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BGO2FBQ0ksSUFBRyxHQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsRUFBQztZQUMxQixPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BGO0tBQ0Y7QUFDSCxDQUFDO0FBRUQsU0FBZ0Isd0JBQXdCLENBQUMsTUFBbUIsRUFBQyxJQUF3QjtJQUNuRixJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2pCLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUNoQixJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBa0IsQ0FBQztJQUNuQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQztRQUNILEVBQUUsQ0FBQyxLQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBZ0IsRUFBRSxDQUFDLEtBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pELEVBQUUsQ0FBQyxLQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBZ0IsRUFBRSxDQUFDLEtBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLE9BQU87S0FDUjtJQUNELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3ZDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtRQUNiLElBQUksR0FBRyxHQUFHO1lBQ1IsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFDLENBQUM7WUFDeEMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ1osS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07U0FDdkIsQ0FBQztRQUNGLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLElBQUcsR0FBRyxHQUFHLENBQUMsRUFBQztZQUNULEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUN0QjthQUNHO1lBQ0YsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO0tBQ0Y7U0FDSSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxHQUFHLEdBQUc7WUFDUixDQUFDLEVBQUUsS0FBSyxHQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUMsQ0FBQztZQUN4QyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSztZQUNqQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07U0FDdkI7UUFDRCxJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUM7WUFDVCxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7U0FDdEI7YUFDRztZQUNGLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjtLQUNGO0lBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ2IsSUFBSSxHQUFHLEdBQUc7WUFDUixDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDWixDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFDLENBQUMsR0FBRyxLQUFLLEdBQUMsQ0FBQztZQUN6QyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLEtBQUs7U0FDZDtRQUNELElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLElBQUcsR0FBRyxHQUFHLENBQUMsRUFBQztZQUNULEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUN0QjthQUNHO1lBQ0YsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO0tBQ0Y7U0FDSSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxHQUFHLEdBQUc7WUFDUixDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDWixDQUFDLEVBQUUsS0FBSyxHQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQztZQUN6QyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUs7U0FDbkI7UUFDRCxJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUM7WUFDVCxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7U0FDdEI7YUFDRztZQUNGLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjtLQUNGO0FBQ0gsQ0FBQztBQXhFRCw0REF3RUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SUQsZ0VBQTRGO0FBNEI1RixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9DLFNBQWdCLGtCQUFrQixDQUFDLElBQWtCO0lBQ25ELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtRQUNuQyxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLEdBQUcsR0FBaUI7WUFDdEIsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1QsTUFBTSxFQUFDLENBQUM7WUFDUixLQUFLLEVBQUMsQ0FBQztTQUNSLENBQUM7UUFFSixJQUFJLENBQVEsQ0FBQztRQUNiLElBQUcsV0FBSyxFQUFDO1lBQ1AsSUFBRyxhQUFPLENBQUMsWUFBWSxJQUFJLGFBQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLGNBQWMsRUFBQztnQkFDbkUsQ0FBQyxHQUFHLENBQUMsR0FBRyxtQkFBVyxDQUFDLENBQUM7YUFDdEI7aUJBQ0ksSUFBRyxDQUFDLFlBQU0sSUFBSSxhQUFPLENBQUMsWUFBWSxJQUFJLGFBQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLFFBQVEsRUFBQztnQkFDN0UsQ0FBQyxHQUFFLENBQUMsR0FBRyxTQUFTLENBQUM7YUFDbEI7aUJBQ0c7Z0JBQ0YsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNSO1NBQ0Y7YUFDRztZQUNGLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7U0FDcEI7UUFDQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztZQUM3QixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBRyxRQUFRLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFDO2dCQUNsRyxJQUFHLFFBQVEsQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFDO29CQUM1QixJQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUFDO3dCQUNuQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ3JCO2lCQUNGO3FCQUNHO29CQUNGLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckI7YUFDRjtTQUNGO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQXZDRCxnREF1Q0M7QUFHRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDekMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRW5CLElBQUksQ0FBUSxDQUFDO0lBQ2IsSUFBRyxXQUFLLEVBQUM7UUFDUCxJQUFHLGFBQU8sQ0FBQyxZQUFZLElBQUksYUFBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksY0FBYyxFQUFDO1lBQ25FLENBQUMsR0FBRyxDQUFDLEdBQUcsbUJBQVcsQ0FBQyxDQUFDO1NBQ3RCO2FBQ0ksSUFBRyxDQUFDLFlBQU0sSUFBSSxhQUFPLENBQUMsWUFBWSxJQUFLLGFBQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLFFBQVEsRUFBQztZQUM5RSxDQUFDLEdBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUNsQjthQUNHO1lBQ0YsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNSO0tBQ0Y7U0FDRztRQUNGLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7S0FDcEI7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUMxRyxJQUFHLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLElBQUksRUFBQztnQkFDckMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JCO2lCQUNJLElBQUcsUUFBUSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFDO2dCQUM1QyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDckM7WUFDRCxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMxQjtRQUNELElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDNUssUUFBUSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDNUI7YUFDSSxJQUFHLFFBQVEsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFDO1lBQ2pMLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUMxQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztnQkFDOUIsSUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsRUFBRSxFQUFDO29CQUM5QixRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ3BCLE1BQU07aUJBQ1A7YUFDRjtTQUNGO0tBQ0Q7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFFdkMsSUFBSSxDQUFRLENBQUM7SUFDYixJQUFHLFdBQUssRUFBQztRQUNQLElBQUcsYUFBTyxDQUFDLFlBQVksSUFBSSxhQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxjQUFjLEVBQUM7WUFDbkUsQ0FBQyxHQUFHLENBQUMsR0FBRyxtQkFBVyxDQUFDLENBQUM7U0FDdEI7YUFDSSxJQUFHLENBQUMsWUFBTSxJQUFJLGFBQU8sQ0FBQyxZQUFZLElBQUksYUFBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksUUFBUSxFQUFDO1lBQzdFLENBQUMsR0FBRSxDQUFDLEdBQUcsU0FBUyxDQUFDO1NBQ2xCO2FBQ0c7WUFDRixDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1I7S0FDRjtTQUNHO1FBQ0YsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztLQUNwQjtJQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ3hHLElBQUcsUUFBUSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFDO2dCQUNyQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7aUJBQ0ksSUFBRyxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUM7Z0JBQzVDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNyQztZQUNELFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLElBQUksRUFBRTtZQUMvSyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUNJLElBQUcsUUFBUSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUM7WUFDckwsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO1lBQzFCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO2dCQUM5QixJQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxFQUFFLEVBQUM7b0JBQzlCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDcEIsTUFBTTtpQkFDUDthQUNGO1NBQ0Y7S0FDRjtBQUNILENBQUMsQ0FBQztBQU1TLGlCQUFTLEdBQWEsRUFBRSxDQUFDO0FBRXBDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtJQUNuQyxJQUFJLElBQVcsQ0FBQztJQUVoQixJQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1FBQ2QsSUFBSSxHQUFHLFVBQVUsQ0FBQztLQUNuQjtTQUNJLElBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7UUFDbkIsSUFBSSxHQUFHLFlBQVksQ0FBQztLQUNyQjtJQUVELElBQUksQ0FBUSxDQUFDO0lBQ2IsSUFBRyxXQUFLLEVBQUM7UUFDUCxJQUFHLGFBQU8sQ0FBQyxZQUFZLElBQUksYUFBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksY0FBYyxFQUFDO1lBQ25FLENBQUMsR0FBRyxDQUFDLEdBQUcsbUJBQVcsQ0FBQyxDQUFDO1NBQ3RCO2FBQ0ksSUFBRyxDQUFDLFlBQU0sSUFBSSxhQUFPLENBQUMsWUFBWSxJQUFJLGFBQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLFFBQVEsRUFBQztZQUM3RSxDQUFDLEdBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUNsQjthQUNHO1lBQ0YsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNSO0tBQ0Y7U0FDRztRQUNGLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7S0FDcEI7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDMUQsSUFBRyxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUM7Z0JBQ3JDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtTQUNGO0tBQ0Y7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDdkMsaUJBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQVEsQ0FBQztJQUNiLElBQUcsV0FBSyxFQUFDO1FBQ1AsSUFBRyxhQUFPLENBQUMsWUFBWSxJQUFJLGFBQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLGNBQWMsRUFBQztZQUNuRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLG1CQUFXLENBQUMsQ0FBQztTQUN0QjthQUNJLElBQUcsQ0FBQyxZQUFNLElBQUksYUFBTyxDQUFDLFlBQVksSUFBSSxhQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxRQUFRLEVBQUM7WUFDN0UsQ0FBQyxHQUFFLENBQUMsR0FBRyxTQUFTLENBQUM7U0FDbEI7YUFDRztZQUNGLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDUjtLQUNGO1NBQ0c7UUFDRixDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDdEYsSUFBRyxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUM7Z0JBQ3JDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyQjtpQkFDSSxJQUFHLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBQztnQkFDNUMsS0FBSSxJQUFJLENBQUMsSUFBSSxZQUFZLEVBQUM7b0JBQ3hCLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksUUFBUSxDQUFDLEVBQUUsRUFBQzt3QkFDMUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ2hCLE1BQU07cUJBQ1A7aUJBQ0Y7YUFDRjtZQUNELFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0tBQ0Y7QUFFSCxDQUFDLENBQUM7QUFDRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDckMsaUJBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBRTFCLElBQUksQ0FBUSxDQUFDO0lBQ2IsSUFBRyxXQUFLLEVBQUM7UUFDUCxJQUFHLGFBQU8sQ0FBQyxZQUFZLElBQUksYUFBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksY0FBYyxFQUFDO1lBQ25FLENBQUMsR0FBRyxDQUFDLEdBQUcsbUJBQVcsQ0FBQyxDQUFDO1NBQ3RCO2FBQ0ksSUFBRyxDQUFDLFlBQU0sSUFBSSxhQUFPLENBQUMsWUFBWSxJQUFJLGFBQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLFFBQVEsRUFBQztZQUM3RSxDQUFDLEdBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUNsQjthQUNHO1lBQ0YsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNSO0tBQ0Y7U0FDRztRQUNGLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7S0FDcEI7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDcEYsSUFBRyxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzNCO2lCQUNJLElBQUcsUUFBUSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFDO2dCQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO29CQUM5QixJQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxFQUFFLEVBQUM7d0JBQzlCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDcEIsTUFBTTtxQkFDUDtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtBQUVILENBQUMsQ0FBQztBQUNGLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3pDLElBQUksSUFBSSxHQUFJLENBQUMsQ0FBQyxNQUE0QixDQUFDLHFCQUFxQixFQUFFLENBQUU7SUFFcEUsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNYLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsZ0NBQWdDO0lBQzNELENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBRSxnQ0FBZ0M7QUFFN0QsQ0FBQyxDQUFDO0FBRUYsSUFBWSxLQUdYO0FBSEQsV0FBWSxLQUFLO0lBQ2YsbUNBQUs7SUFDTCx5Q0FBUTtBQUNWLENBQUMsRUFIVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFHaEI7QUFzQkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsSUFBSSxLQUFLLEdBQVksRUFBRSxDQUFDO0FBQ2IsbUJBQVcsR0FBVSxFQUFFLENBQUM7QUFDbkMsSUFBSSxVQUFVLEdBQWMsRUFBRSxDQUFDO0FBQy9CLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztBQUVuQixJQUFJLFNBQVMsR0FBZSxFQUFFO0FBRTlCLElBQUksWUFBWSxHQUFzQixFQUFFLENBQUM7QUFFekMsU0FBZ0IsVUFBVSxDQUFDLE1BQXdCLEVBQUMsTUFBYTtJQUMvRCxJQUFJLE1BQU0sR0FBRywyQkFBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFDLDJCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO0lBQzdGLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUMsMkJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDL0YsT0FBTyxDQUFDO1FBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDO1FBQy9JLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBQyxNQUFNLENBQUMsR0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDMUosQ0FBQztBQUNKLENBQUM7QUFSRCxnQ0FRQztBQUVELFNBQWdCLGtCQUFrQixDQUFDLENBQVE7SUFDekMsS0FBSSxJQUFJLENBQUMsSUFBSSxZQUFZLEVBQUM7UUFDeEIsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUM7WUFDakUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNmLElBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFDO1lBQ3RCLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7S0FDRjtBQUNILENBQUM7QUFYRCxnREFXQztBQUVELFNBQWdCLE1BQU0sQ0FBQyxPQUFjO0lBQ25DLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1FBQ3RDLElBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxPQUFPLEVBQUM7WUFDNUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTTtTQUNQO0tBQ0Y7SUFDRCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztRQUN6QyxJQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE9BQU8sRUFBQztZQUNwQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNO1NBQ1A7S0FDRjtBQUNILENBQUM7QUFiRCx3QkFhQztBQUVELElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBSTtJQUNKLDZDQUFNO0FBQ1IsQ0FBQyxFQUhXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBR3BCO0FBRUQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1gsU0FBZ0IsSUFBSSxDQUFDLE9BQWMsRUFBQyxJQUFpQixFQUFDLElBQWMsRUFBQyxRQUFlLEVBQUMsTUFBb0I7SUFDdkcsSUFBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxPQUFPLEVBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQVE7WUFDWCxHQUFHLEVBQUMsT0FBTztZQUNYLElBQUksRUFBQyxLQUFLLENBQUMsS0FBSztZQUNoQixFQUFFO1lBQ0YsUUFBUSxFQUFDLElBQUk7WUFDYixHQUFHLEVBQUMsTUFBTTtZQUNWLE9BQU8sRUFBQyxJQUFJO1lBQ1osUUFBUSxFQUFDLEtBQUs7WUFDZCxRQUFRO1NBQ1QsQ0FBQztRQUNGLElBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUM7WUFDMUIsQ0FBQyxDQUFDLFlBQVksR0FBRztnQkFDZixJQUFJLEVBQUMsQ0FBQztnQkFDTixLQUFLLEVBQUMsQ0FBQztnQkFDUCxRQUFRO2dCQUNSLE1BQU0sRUFBQyxLQUFLO2FBQ2I7WUFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNuQztRQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FFbkI7U0FDRztRQUNGLElBQUksQ0FBQyxHQUFRO1lBQ1gsR0FBRyxFQUFDLE9BQU87WUFDWCxJQUFJLEVBQUMsS0FBSyxDQUFDLFFBQVE7WUFDbkIsRUFBRTtZQUNGLFFBQVEsRUFBQyxJQUFJO1lBQ2IsT0FBTyxFQUFDLElBQUk7WUFDWixRQUFRLEVBQUMsS0FBSztZQUNkLFFBQVE7U0FDVDtRQUNELElBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUM7WUFDMUIsQ0FBQyxDQUFDLFlBQVksR0FBRztnQkFDZixJQUFJLEVBQUMsQ0FBQztnQkFDTixLQUFLLEVBQUMsQ0FBQztnQkFDUCxRQUFRO2dCQUNSLE1BQU0sRUFBQyxLQUFLO2FBQ2I7WUFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNuQztRQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkI7SUFDRCxFQUFFLEVBQUUsQ0FBQztJQUNMLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoQixDQUFDO0FBL0NELG9CQStDQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2phRCxJQUFJLEVBQUUsV0FBVyxFQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFOUIsZ0VBQW9DO0FBQ3pCLG1CQUFXLEdBQUcsR0FBRyxFQUFFO0lBQzVCLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM5RCxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0QsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1FBQ3ZDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxrQkFBWSxFQUFFLEVBQUMsSUFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlELElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFekUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV4RCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUMsSUFBSSxFQUFDLFFBQVEsR0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRSxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBQzs7Ozs7Z0JBS25CLFFBQVE7Ozs7Z0JBSVIsUUFBUTs7OzttQkFJTCxRQUFRLGdCQUFnQixRQUFROzs7Ozs7Ozs7OEJBU3JCLFFBQVE7NEVBQ3NDLFFBQVEsaUJBQWlCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJCeEcsQ0FBQztRQUNGLGdEQUFnRDtJQUNsRCxDQUFDLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNELE1BQWEsR0FBRztJQUFoQjtRQUNFLHFCQUFnQixHQUF1QixFQUFFLENBQUM7UUFDMUMsa0JBQWEsR0FBZSxFQUFFLENBQUM7SUFTakMsQ0FBQztJQVJDLE1BQU0sQ0FBQyxDQUFRO1FBQ2IsS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUM7WUFDakMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNiO1FBQ0QsS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFDO1lBQzlCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDYjtJQUNILENBQUM7Q0FDRjtBQVhELGtCQVdDO0FBRUQsTUFBYSxJQUFJO0lBR2YsWUFBWSxDQUFXLEVBQUMsQ0FBZ0I7UUFDdEMsSUFBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUM7WUFDVixDQUFDLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBUTtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsT0FBTyxDQUFDLENBQVE7UUFDZCxJQUFJLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hELE9BQU87WUFDTCxJQUFJO1lBQ0osS0FBSztZQUNMLElBQUk7WUFDSixJQUFJO1lBQ0osU0FBUztZQUNULEtBQUs7U0FDTixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBM0JELG9CQTJCQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFRCxTQUFnQixRQUFRLENBQUMsQ0FBVSxFQUFDLENBQVU7SUFDNUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQztBQUZELDRCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEQsNEVBQW9EO0FBR3BELGtGQUFtRTtBQUNuRSx5RUFBOEI7QUFFOUIsc0VBQWtDO0FBT2xDLFNBQWdCLGVBQWUsQ0FBQyxNQUFjLEVBQUUsTUFBYztJQUM1RCxJQUFJLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN0RCxJQUFJLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN0RCxPQUFPO1FBQ0wsQ0FBQyxFQUFFLEtBQUs7UUFDUixDQUFDLEVBQUUsS0FBSztLQUNUO0FBQ0gsQ0FBQztBQVBELDBDQU9DO0FBRUQsU0FBZ0IsS0FBSyxDQUFDLENBQXNCLEVBQUUsRUFBVTtJQUN0RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2I7S0FDRjtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFQRCxzQkFPQztBQUVELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQVVoQixNQUFNLFVBQVU7SUFBaEI7UUFDRSxlQUFVLEdBQWlCLEVBQUUsQ0FBQztRQUM5QixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFHdEIsY0FBUyxHQUFXLEtBQUssQ0FBQztJQWdDNUIsQ0FBQztJQS9CQyxHQUFHLENBQUMsSUFBWSxFQUFFLENBQTBCLEVBQUUsTUFBYztRQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUFJLENBQUMsSUFBWSxFQUFFLFFBQW9CO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFTO1FBQ2YsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxLQUFLLENBQUM7UUFDVixLQUFLLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzFELElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0csSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQztTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLE1BQU0sRUFBRTtZQUNwQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO2FBQ0k7WUFDSCxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBU0QsSUFBSyxVQUdKO0FBSEQsV0FBSyxVQUFVO0lBQ2IseUNBQUc7SUFDSCwrQ0FBTTtBQUNSLENBQUMsRUFISSxVQUFVLEtBQVYsVUFBVSxRQUdkO0FBRUQsTUFBc0IsR0FBRztJQStCdkIsWUFBWSxRQUFpQixFQUFDLFdBQWtCLENBQUMsRUFBQyxVQUFpQixDQUFDLEVBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxjQUFjO1FBOUJoRyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBR2hCLGdCQUFXLEdBQUcsb0JBQVcsQ0FBQyxNQUFNLENBQUM7UUFHakMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUkzQixTQUFJLEdBQVksRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzlCLFVBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQVUsQ0FBQyxDQUFDO1FBR3ZCLFlBQU8sR0FBVSxDQUFDLENBQUM7UUFDbkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQWFsQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsT0FBTyxFQUFFLENBQUM7UUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQXBCRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxtQkFBbUI7SUFFbkIsQ0FBQztJQUNELGNBQWM7SUFFZCxDQUFDO0lBYUQsSUFBSTtRQUNGLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFTLEVBQUU7Z0JBQ3JCLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDNUIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4QixPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELGdCQUFnQjtRQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0QsUUFBUSxDQUFDLENBQWM7UUFDckIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQTZCLENBQUM7UUFDM0MsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQTZCLENBQUM7UUFDNUMsT0FBTyxlQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELFlBQVksQ0FBQyxDQUFlO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQW1CLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsaUJBQWlCLENBQUMsUUFBaUI7UUFDakMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQTZCLENBQUM7UUFDL0MsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO2VBQzdELENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRTtTQUN6RztRQUNELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztlQUM3RCxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDbkUsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRTtTQUMxRztRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELFdBQVcsQ0FBQyxHQUFXLEVBQUUsQ0FBWSxFQUFFLElBQWtCLEVBQUUsUUFBUSxHQUFHLENBQUM7UUFDckUsSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFO1lBQ25CLElBQUksQ0FBQyxHQUFHLGVBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEI7YUFDSTtZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUNELGlCQUFpQjtJQUVqQixDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQVc7SUFFbEIsQ0FBQztJQUNELE1BQU07UUFDSixLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDeEIsaUJBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNYO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxTQUFTO1FBQ1AsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3hCLGlCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDWDtJQUNILENBQUM7SUFDRCxjQUFjLENBQUMsQ0FBZ0I7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxtQkFBbUI7UUFDakIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQTZCLENBQUM7UUFDNUMsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ2IsT0FBTztnQkFDTCxDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNmLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2YsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPO2dCQUN0QyxNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDekM7U0FDRjthQUNHO1lBQ0YsT0FBTztnQkFDTCxDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNmLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2YsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU87Z0JBQy9CLE1BQU0sRUFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDO0lBQ0Qsb0JBQW9CO1FBQ2xCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUE2QixDQUFDO1FBQzVDLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNiLE9BQU8sQ0FBQztvQkFDTixDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNmLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2YsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPO29CQUN0QyxNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ3pDLENBQUM7U0FDSDthQUNHO1lBQ0YsT0FBTyxDQUFDO29CQUNOLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2YsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDZixLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTztvQkFDL0IsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ2xDLENBQUM7U0FDSDtJQUNILENBQUM7SUFDRCxlQUFlLENBQUMsQ0FBZ0I7UUFDOUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQTZCLENBQUM7UUFDNUMsSUFBSSxTQUFTLEdBQUcsS0FBSyxFQUFFLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNkLElBQUksR0FBRztnQkFDTCxRQUFRLEVBQUMsQ0FBQztnQkFDVixRQUFRLEVBQUMsQ0FBQztnQkFDVixLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ2hCLE1BQU0sRUFBQyxJQUFJLENBQUMsTUFBTTthQUNuQjtTQUNGO1FBQ0QsSUFBSSxFQUFFLEdBQUc7WUFDUCxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDckUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3RFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNyRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDekU7UUFFRCxJQUFJLEdBQUcsR0FBRztZQUNSLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDekIsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUMxQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9GLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDbEI7YUFDRztZQUNGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFDO1lBQ3RHLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDbEI7YUFDRztZQUNGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLFNBQVMsSUFBSSxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELGFBQWEsQ0FBQyxJQUFXLEVBQUMsTUFBZSxFQUFDLFFBQWUsRUFBQyxLQUFZO1FBQ3BFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQTZCLENBQUM7UUFDNUMsSUFBSSxjQUFjLEdBQVk7WUFDNUIsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUMsS0FBSyxDQUFDO0lBQ3hELENBQUM7SUFDRCxZQUFZLENBQUMsSUFBVztRQUN0QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBSSxLQUF5QixDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDeEIsS0FBSyxHQUFHLFFBQVE7YUFDZDtZQUNGLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQztTQUNuQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUE2QixDQUFDO1FBQzVDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUNuRixJQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO2dCQUNuRCxPQUFPO29CQUNMLE1BQU0sRUFBQyxTQUFTO29CQUNoQixDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNmLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ2hCO2FBQ0Y7WUFDRCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2hDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtnQkFDNUIsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO2FBQzFDO1lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRTtnQkFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQ3hDO1lBQ0QsT0FBTztnQkFDTCxNQUFNLEVBQUU7b0JBQ04sWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO29CQUMvQixJQUFJLEVBQUUsQ0FBQztvQkFDUCxHQUFHLEVBQUUsQ0FBQztvQkFDTixZQUFZLEVBQUUsWUFBWTtvQkFDMUIsYUFBYSxFQUFFLGFBQWE7b0JBQzVCLE9BQU8sRUFBQyxDQUFDO2lCQUNWO2dCQUNELENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakIsQ0FBQztTQUNIO1FBQ0QsT0FBTztZQUNMLE1BQU0sRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDcEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pCLENBQUM7SUFDSixDQUFDOztBQXZQSCxrQkF3UEM7QUFuT1Esa0JBQWMsR0FBVyxFQUFFLENBQUM7QUEyT3JDLE1BQXNCLGFBQWlCLFNBQVEsR0FBTTtJQU1uRCxZQUFZLEdBQVk7UUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBTmIsWUFBTyxHQUFrQixFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixZQUFPLEdBQXNCLEVBQUUsQ0FBQztJQUdoQyxDQUFDO0lBQ0QsSUFBSTtRQUNGLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRSxFQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDRCxnQkFBZ0I7UUFDZCxJQUFJLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRSxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRSxFQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsR0FBVTtRQUN6QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNELFFBQVEsQ0FBQyxDQUFjLEVBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxPQUFPO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0JBQW9CO1FBQ2xCLElBQUksR0FBRyxHQUFtQixFQUFFLENBQUM7UUFDN0IsS0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFFLEVBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQztZQUM3RCxJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM3QyxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUM7Z0JBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQzthQUMxQjtpQkFDRztnQkFDRixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0Y7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDRCxNQUFNO1FBQ0osS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ3hCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNaO1FBQ0QsS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ3hCLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDaEI7UUFDRCxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNELGVBQWUsQ0FBQyxDQUFnQjtRQUM5QixLQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFDMUIsSUFBRyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBQztZQUN4QixJQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDekIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGO0FBMURELHNDQTBEQztBQUdELE1BQWEsVUFBVTtJQUF2QjtRQUNFLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFFbEIsQ0FBQztDQUFBO0FBSEQsZ0NBR0M7QUFFRCxNQUFzQixXQUFlLFNBQVEsR0FBTTtJQUFuRDs7UUFDRSxZQUFPLEdBQUcsSUFBSTtJQUNoQixDQUFDO0NBQUE7QUFGRCxrQ0FFQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2phRCxTQUFnQixVQUFVLENBQUMsR0FBVSxFQUFFLEdBQVU7SUFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBRSxHQUFHLEdBQUcsQ0FBQztBQUN4RCxDQUFDO0FBRkQsZ0NBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNERCxnRUFBK0M7QUF1Qy9DLE1BQWEsTUFBTTtJQUdqQixZQUFZLEtBQXVCLEVBQUUsQ0FBVztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsT0FBTyxFQUFDLEtBQUssQ0FBQyxPQUFPO1lBQ3JCLFFBQVEsRUFBRTtnQkFDUixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTztnQkFDMUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU87YUFDM0I7WUFDRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsUUFBUSxFQUFFO2dCQUNSLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLO2dCQUN2QyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU07YUFDM0M7WUFDRCxLQUFLLEVBQUMsS0FBSyxDQUFDLEtBQUs7WUFDakIsR0FBRyxFQUFDLFNBQVM7U0FDZDtJQUNILENBQUM7SUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFTO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBUztRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUVGO0FBbENELHdCQWtDQztBQXdCRCxJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDckIsNkNBQUk7SUFDSixpREFBTTtJQUNOLDZDQUFJO0lBQ0osMkRBQVc7QUFDYixDQUFDLEVBTFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFLdEI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFO0FBQ1cscUJBQWEsR0FBRyxDQUFDLENBQWUsRUFBQyxDQUFjLEVBQUMsSUFBVyxFQUFFLEVBQUU7SUFDMUUsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDM0IsS0FBSyxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUM7WUFDckIsdUJBQWUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pCLE1BQU0sRUFBQyxDQUFDLENBQUMsTUFBTTtnQkFDZixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNOLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtnQkFDcEIsS0FBSyxFQUFDLENBQUMsQ0FBQyxPQUFPO2FBQ2hCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7U0FDSTtRQUNILElBQUksaUJBQWlCLEdBQUcsUUFBNkIsQ0FBQztRQUN0RCxJQUFHLENBQUMsQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBQztZQUNyQyx1QkFBZSxDQUFDLENBQUMsRUFBRTtnQkFDakIsTUFBTSxFQUFFLGlCQUFpQixDQUFDLE1BQU07Z0JBQ2hDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztnQkFDdEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO2dCQUNwQixLQUFLLEVBQUMsQ0FBQyxDQUFDLE9BQU87YUFDaEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFHLENBQUMsQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLElBQUksRUFBQztTQUUzQztLQUNGO0FBQ0gsQ0FBQztBQUVZLHlCQUFpQixHQUFHLENBQUMsQ0FBZ0IsRUFBRSxDQUFjLEVBQUUsRUFBRTtJQUNwRSxJQUFJLE9BQU8sR0FBRywyQkFBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUM3QyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNwQixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDdkU7U0FDSTtRQUNILENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyRDtBQUNILENBQUM7QUFFWSxxQkFBYSxHQUFHLENBQUMsQ0FBZSxFQUFDLENBQWEsRUFBRSxFQUFFO0lBQzdELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDdEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDOUUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUN4RCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFJLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0ksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1RSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7SUFDbEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNwQixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDekQ7U0FDSTtRQUNILENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN2QztJQUNELENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQUVZLHVCQUFlLEdBQUcsQ0FBQyxDQUFnQixFQUFFLENBQWMsRUFBRSxFQUFFO0lBQ2xFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDdEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDeEUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoTCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1TCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDN0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzNELENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDekMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2pFLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUNqQixDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksRUFDckIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ2IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQ1osQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQ3JCLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUNaLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDWCxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDZixNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FDakI7SUFDRCxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLENBQUM7QUFFWSw2QkFBcUIsR0FBRyxDQUFDLE9BQWlDLEVBQUUsSUFBZSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYSxFQUFFLFNBQWdCLEVBQUUsTUFBYyxFQUFFLEVBQUU7SUFDakssSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3BFLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckosSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakssSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUNoRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3JELE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUVZLHFCQUFhLEdBQUcsQ0FBQyxPQUFpQyxFQUFF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Y2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9nYW1lL21haW4udHNcIik7XG4iLCJpbXBvcnQge3ZlbG9jaXR5LG9ial9zdGF0ZSxyb29tX3N0YXRlfSBmcm9tIFwiLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7Z2FtZSx2aWV3cG9ydH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQge0NhbWVyYX0gZnJvbSBcIi4uL2xpYi9yZW5kZXJcIjtcclxuaW1wb3J0IHtyb29tc30gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQge092ZXJ3b3JsZH0gZnJvbSBcIi4vcm9vbXMvT3ZlcndvcmxkL092ZXJ3b3JsZFwiO1xyXG5sZXQgY2FudmFzX2VsZW1lbnQ6SFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbmV4cG9ydCBsZXQgZyA9IG5ldyBnYW1lKGNhbnZhc19lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKSx7fSwgYXN5bmMgKGc6Z2FtZTx7fT4pPT57XHJcbiAgZy5zdGF0ZS5jYW1lcmFzID0gW1xyXG4gICAgbmV3IENhbWVyYSh7XHJcbiAgICAgIHg6MCxcclxuICAgICAgeTowLFxyXG4gICAgICBkaW1lbnNpb25zOntcclxuICAgICAgICBoZWlnaHQ6dmlld3BvcnQuaGVpZ2h0LFxyXG4gICAgICAgIHdpZHRoOnZpZXdwb3J0LndpZHRoICogNC81XHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxpbmc6MC41LFxyXG4gICAgICBkZWJ1ZzpmYWxzZVxyXG4gICAgfVxyXG4gICAgLHtcclxuICAgICAgeDoxLFxyXG4gICAgICB5OjAsXHJcbiAgICAgIHdpZHRoOjAuOCxcclxuICAgICAgaGVpZ2h0OjFcclxuICAgIH0pLFxyXG4gICAgbmV3IENhbWVyYSh7XHJcbiAgICAgIHg6MCxcclxuICAgICAgeTowLFxyXG4gICAgICBkaW1lbnNpb25zOntcclxuICAgICAgICB3aWR0aDp2aWV3cG9ydC53aWR0aC81LFxyXG4gICAgICAgIGhlaWdodDp2aWV3cG9ydC5oZWlnaHRcclxuICAgICAgfSxcclxuICAgICAgc2NhbGluZzowLjIsXHJcbiAgICAgIGRlYnVnOmZhbHNlXHJcbiAgICB9LHtcclxuICAgICAgeDp2aWV3cG9ydC53aWR0aCAqIDQvNSxcclxuICAgICAgeTowLFxyXG4gICAgICB3aWR0aDowLjIsXHJcbiAgICAgIGhlaWdodDoxXHJcbiAgICB9KVxyXG4gIF1cclxuICBnLmxvYWRSb29tKG5ldyBPdmVyd29ybGQoZykpO1xyXG59KTtcclxuXHJcbiIsImltcG9ydCB7IGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgR29vbWJhLCBkaXJlY3Rpb24gfSBmcm9tIFwiLi9Hb29tYmFcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlZFBsYXllciBleHRlbmRzIEdvb21iYSB7XHJcbiAgdGFncyA9IFtcInBsYXllclwiXTtcclxuICByZWdpc3Rlcl9jb250cm9scygpIHtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJLZXlBXCIsIGV4ZWNfdHlwZS5yZXBlYXQsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA+IC0xMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIktleUFcIiwgZXhlY190eXBlLm9uY2UsICgpID0+IHtcclxuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24ubGVmdDtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54IC0gMC4xO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwibW91c2UwZG93blwiLCBleGVjX3R5cGUucmVwZWF0LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXVkaW8ucGxheShcImV4cGxvc2lvblwiLCAwLjQpO1xyXG4gICAgfSwgNDAwKTtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJLZXlEXCIsIGV4ZWNfdHlwZS5yZXBlYXQsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA8IDEwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54ICsgMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwiS2V5RFwiLCBleGVjX3R5cGUub25jZSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5yaWdodDtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54ICsgMC4xO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwiU3BhY2VcIiwgZXhlY190eXBlLm9uY2UsICgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmp1bXBpbmcpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgKz0gMjU7XHJcbiAgICAgICAgdGhpcy5hdWRpby5wbGF5KFwic2xpbWVcIiwgMC4xKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIHN1cGVyLnN0YXRlZih0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgb2JqX3N0YXRlLCBwb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHsgcGxhdGZvcm1lcl9vYmogfSBmcm9tIFwiLi9hYnN0cmFjdC9wbGF0Zm9ybWVyX29ialwiO1xyXG5cclxuaW50ZXJmYWNlIGN1cnNvcl9wYXJhbXN7XHJcbiAgaWQ6c3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJzb3IgZXh0ZW5kcyBwbGF0Zm9ybWVyX29iajxvYmpfc3RhdGU+IHtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvY3Vyc29yLnBuZ1wiO1xyXG4gIGhlaWdodCA9IDY0O1xyXG4gIHdpZHRoID0gNjQ7XHJcbiAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICByZW5kZXIgPSB0cnVlO1xyXG4gIHNjYWxpbmcgPSAxO1xyXG4gIHRhZ3MgPSBbXCJDdXJzb3JcIl07XHJcbiAgY29uc3RydWN0b3IocG9zOnBvc2l0aW9uLHJvdGF0aW9uOm51bWJlcixzY2FsaW5nOm51bWJlcixwYXJhbXM6Y3Vyc29yX3BhcmFtcykge1xyXG4gICAgc3VwZXIocG9zLCByb3RhdGlvbixzY2FsaW5nLCBwYXJhbXMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiBwb3MueCxcclxuICAgICAgICB5OiBwb3MueVxyXG4gICAgICB9LFxyXG4gICAgICB2ZWxvY2l0eToge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuICBzdGF0ZWYoKSB7XHJcbiAgfVxyXG59XHJcbiIsIlxuICAgIFxuICAgIGltcG9ydCB7b2JqfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xuICAgIGltcG9ydCB7IG9ial9zdGF0ZSwgcG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XG5pbXBvcnQgeyBnIH0gZnJvbSBcIi4uL21haW5cIjtcbiAgICBcbiAgICBpbnRlcmZhY2UgRG9vcl9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgaW50ZXJmYWNlIERvb3JfcGFyYW1ldGVyc3tcbiAgICAgIGxvY2F0aW9uOnN0cmluZ1xuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgRG9vciBleHRlbmRzIG9iajxEb29yX3N0YXRlPntcbiAgICAgIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy90YXJnZXQucG5nXCI7XG4gICAgICBoZWlnaHQgPSAxMDA7XG4gICAgICB3aWR0aCA9IDEwMDtcbiAgICAgIHRhZ3M6QXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICByZW5kZXIgPSB0cnVlO1xuICAgICAgcm90YXRpb24gPSAwO1xuICAgICAgc2NhbGluZyA9IDE7XG4gICAgICBwYXJhbXM6RG9vcl9wYXJhbWV0ZXJzO1xuICAgICAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOkRvb3JfcGFyYW1ldGVycyA9IHtcbiAgICAgICAgbG9jYXRpb246XCJVbmRlcndvcmxkXCJcbiAgICAgIH1cbiAgICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOnBvc2l0aW9uLHJvdGF0aW9uOm51bWJlcixzY2FsaW5nOm51bWJlcixwYXJhbXM6RG9vcl9wYXJhbWV0ZXJzID0gRG9vci5kZWZhdWx0X3BhcmFtcyl7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLHJvdGF0aW9uLHNjYWxpbmcscGFyYW1zKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBwb3NpdGlvbjpwb3NpdGlvbixcbiAgICAgICAgICB2ZWxvY2l0eTp7XG4gICAgICAgICAgICB4OjAsXG4gICAgICAgICAgICB5OjBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN0YXRlZih0aW1lX2RlbHRhOm51bWJlcil7XG4gICAgICAgIGxldCBjb2xsaWRlcyA9IGcuZ2V0Um9vbSgpLmNoZWNrX2NvbGxpc2lvbnModGhpcy5nZXRGdWxsQ29sbGlzaW9uQm94KCkpXG4gICAgICAgIGZvcihsZXQgb2JqIG9mIGNvbGxpZGVzKXtcbiAgICAgICAgICBpZihvYmoudGFncy5pbmNsdWRlcyhcInBsYXllclwiKSl7XG4gICAgICAgICAgICBnLmxvYWRSb29tU3RyaW5nKHRoaXMucGFyYW1zLmxvY2F0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlbmRlcmYodGltZV9kZWx0YTpudW1iZXIpe1xuICAgICAgIHJldHVybiBzdXBlci5yZW5kZXJmKHRpbWVfZGVsdGEpOyBcbiAgICAgIH1cbiAgICAgIHJlZ2lzdGVyX2FuaW1hdGlvbnMoKXtcbiAgICBcbiAgICAgIH1cbiAgICAgIHJlZ2lzdGVyX2F1ZGlvKCl7XG4gICAgXG4gICAgICB9XG4gICAgICByZWdpc3Rlcl9jb250cm9scygpe1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgIiwiaW1wb3J0IHsgdmVsb2NpdHksIG9ial9zdGF0ZSwgc3RhdGVfZnVuYyxwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBzcHJpdGUsIHNwcml0ZV9nZW4gfSBmcm9tIFwiLi4vLi4vbGliL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBvYmogfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybWVyX29iaiwgcGxhdGZvcm1lcl9vYmpfY29tcG9zaXRlLCBwbGF0X3N0YXRlIH0gZnJvbSBcIi4vYWJzdHJhY3QvcGxhdGZvcm1lcl9vYmpcIjtcclxuaW1wb3J0IHsgUG9sbF9Nb3VzZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgY29sbGlzaW9uX2JveCB9IGZyb20gXCIuLi8uLi9saWIvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IEJpbmQgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7VGV4dF9Ob2RlLFRleHR9IGZyb20gXCIuLi8uLi9saWIvaHVkXCI7XHJcbmltcG9ydCB7IE92ZXJ3b3JsZCB9IGZyb20gXCIuLi9yb29tcy9PdmVyd29ybGQvT3ZlcndvcmxkXCI7XHJcbmltcG9ydCB7IGcgfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGVudW0gZGlyZWN0aW9uIHtcclxuICBsZWZ0LFxyXG4gIHJpZ2h0XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZ29vbWJhX3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRlLCBwbGF0X3N0YXRlIHtcclxuICBkaXJlY3Rpb246IGRpcmVjdGlvbixcclxuICB2ZWxvY2l0eTogdmVsb2NpdHksXHJcbiAganVtcGluZzogYm9vbGVhbixcclxuICB0aW1lc19haXJzaG90OiBudW1iZXIsXHJcbiAgbWF4X3RpbWVzX2FpcnNob3Q6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGd1bl9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZSB7XHJcbiAgcm90YXRpb246IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYXllcl9QYXJhbXN7XHJcbiAgaWQ6c3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBnb29tYmFfcGFyYW1ze1xyXG4gIGlkPzpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdvb21iYSBleHRlbmRzIHBsYXRmb3JtZXJfb2JqPGdvb21iYV9zdGF0ZT57XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2ZvbGRlci9yb2JvdC5wbmdcIjtcclxuICBoZWlnaHQgPSAxNDk7XHJcbiAgd2lkdGggPSAxNDk7XHJcbiAgdGFncyA9IFtcImR1bW15XCJdXHJcbiAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICBoZWFsdGhfdGV4dDogVGV4dDtcclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjpwb3NpdGlvbixyb3RhdGlvbjpudW1iZXIsc2NhbGluZzpudW1iZXIscGFyYW1ldGVyczpnb29tYmFfcGFyYW1zID0gR29vbWJhLmRlZmF1bHRfcGFyYW1zKSB7XHJcbiAgICBcclxuICAgIHN1cGVyKHBvc2l0aW9uLHJvdGF0aW9uLHNjYWxpbmcscGFyYW1ldGVycyk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5pZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5pZCA9IHBhcmFtZXRlcnMuaWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbi5sZWZ0LFxyXG4gICAgICBwb3NpdGlvbjpwb3NpdGlvbixcclxuICAgICAgdmVsb2NpdHk6IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgICAgfSxcclxuICAgICAganVtcGluZzogZmFsc2UsXHJcbiAgICAgIGhlYWx0aDogMTAwLFxyXG4gICAgICB0aW1lc19haXJzaG90OiAwLFxyXG4gICAgICBtYXhfdGltZXNfYWlyc2hvdDogMFxyXG4gICAgfVxyXG4gICAgLy90aGlzLmFuaW1hdGlvbnMucGxheShcIndhbGsxXCIpO1xyXG4gIH1cclxuICByZWdpc3Rlcl9hbmltYXRpb25zKCkge1xyXG4gICAgbGV0IHNwcml0ZXMgPSBzcHJpdGVfZ2VuKHRoaXMuc3ByaXRlX3NoZWV0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKFwid2FsazFcIiwgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVswXV0sXHJcbiAgICAgIFsxMDAsIHNwcml0ZXNbMF1bMV1dLFxyXG4gICAgICBbNDAwLCBzcHJpdGVzWzBdWzBdXSxcclxuICAgICAgWzUwMCwgc3ByaXRlc1swXVsyXV1cclxuICAgIF0sIDgwMClcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoXCJ3YWxrMlwiLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzVdXSxcclxuICAgICAgWzEwMCwgc3ByaXRlc1swXVs0XV0sXHJcbiAgICAgIFs0MDAsIHNwcml0ZXNbMF1bNV1dLFxyXG4gICAgICBbNTAwLCBzcHJpdGVzWzBdWzNdXVxyXG4gICAgXSwgODAwKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZChcImlkbGVsZWZ0XCIsIFtcclxuICAgICAgWzAsIHNwcml0ZXNbMF1bMF1dXHJcbiAgICBdLCAxKTtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2lkbGVyaWdodCcsIFtcclxuICAgICAgWzAsIHNwcml0ZXNbMF1bNV1dXHJcbiAgICBdLCAxKTtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2ZhbGxsZWZ0JywgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVs2XV1cclxuICAgIF0sIDEpO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnZmFsbHJpZ2h0JywgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVs3XV1cclxuICAgIF0sIDEpXHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2F1ZGlvKCkge1xyXG4gICAgdGhpcy5hdWRpby5hZGQoXCJzbGltZVwiLCBcIi4vc291bmRzL2dvb21iYS9zbGltZWJhbGwud2F2XCIpO1xyXG4gICAgdGhpcy5hdWRpby5hZGQoXCJleHBsb3Npb25cIiwgXCIuL3NvdW5kcy9leHBsb3Npb24ubXAzXCIpXHJcbiAgfVxyXG4gIHJlbmRlcmYodDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5qdW1waW5nKSB7XHJcbiAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PSBkaXJlY3Rpb24ubGVmdCA/IFwiZmFsbGxlZnRcIiA6IFwiZmFsbHJpZ2h0XCI7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KGFuaW1hdGlvbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnggPT0gMCAmJiB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPT0gMCkge1xyXG4gICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT0gZGlyZWN0aW9uLmxlZnQgPyBcImlkbGVsZWZ0XCIgOiBcImlkbGVyaWdodFwiO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheShhbmltYXRpb24pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXRoaXMuYW5pbWF0aW9ucy5hbmltYXRpbmcpIHtcclxuICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuc3RhdGUuZGlyZWN0aW9uID09IGRpcmVjdGlvbi5sZWZ0ID8gXCJ3YWxrMVwiIDogXCJ3YWxrMlwiO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheShhbmltYXRpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1cGVyLnJlbmRlcmYodCk7XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIGxldCByb29tID0gZy5nZXRSb29tKCk7XHJcbiAgICBsZXQgY3Vyc29yID0gcm9vbS5nZXRPYmooXCJjdXJzb3JcIik7XHJcbiAgICBpZiAodGhpcy5jb2xsaXNpb24pIHtcclxuICAgICAgbGV0IGNvbCA9IHRoaXMuZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gICAgICBpZiAocm9vbS5jaGVja19jb2xsaXNpb25zKHtcclxuICAgICAgICB3aWR0aDogY29sLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogMSxcclxuICAgICAgICB4OiBjb2wueCxcclxuICAgICAgICB5OiBjb2wueSAtIGNvbC5oZWlnaHQgLyAyIC0gMSxcclxuICAgICAgfSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuanVtcGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubWF4X3RpbWVzX2FpcnNob3QgPSBNYXRoLm1heCh0aGlzLnN0YXRlLnRpbWVzX2FpcnNob3QsIHRoaXMuc3RhdGUubWF4X3RpbWVzX2FpcnNob3QpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUudGltZXNfYWlyc2hvdCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qdW1waW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueSA+IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS55IC0gMC40ICogMTYgLyB0aW1lO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS55IDwgMClcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueSA8IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS55ICsgMC40ICogMTYgLyB0aW1lO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS55ID4gMClcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA+IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24ucmlnaHQ7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCAtIDAuNCAqIDE2IC8gdGltZTs7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnggPCAwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS54IDwgMCkge1xyXG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5sZWZ0O1xyXG4gICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggPSB0aGlzLnN0YXRlLnZlbG9jaXR5LnggKyAwLjQgKiAxNiAvIHRpbWU7O1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS54ID4gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcG9zaXRpb25faW5pdCxwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyByb3RhdGlvbl9sZW5ndGggfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybWVyX29iaiB9IGZyb20gXCIuL2Fic3RyYWN0L3BsYXRmb3JtZXJfb2JqXCI7XHJcbmltcG9ydCB7IGcgfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5pbXBvcnQgeyBDdXJzb3IgfSBmcm9tIFwiLi9DdXJzb3JcIjtcclxuaW1wb3J0IHsgZ3VuX3N0YXRlLCBHb29tYmEgfSBmcm9tIFwiLi9Hb29tYmFcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR3VuIGV4dGVuZHMgcGxhdGZvcm1lcl9vYmo8Z3VuX3N0YXRlPiB7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2ZvbGRlci9ndW4ucG5nXCI7XHJcbiAgaGVpZ2h0ID0gNTA7XHJcbiAgd2lkdGggPSAyMDtcclxuICBjb2xsaXNpb24gPSBmYWxzZTtcclxuICByZW5kZXIgPSB0cnVlO1xyXG4gIHBsYXllcjogR29vbWJhO1xyXG4gIGdyYXZpdHkgPSBmYWxzZTtcclxuICBjdXJzb3I6IEN1cnNvcjtcclxuICB0YWdzID0gW1wiZ3VuXCJdO1xyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uOnBvc2l0aW9uLHJvdGF0aW9uID0gMCxzY2FsaW5nID0gMSwgcGFyYW1zID0gR3VuLmRlZmF1bHRfcGFyYW1zKSB7XHJcbiAgICBzdXBlcihwb3NpdGlvbixyb3RhdGlvbixzY2FsaW5nLHBhcmFtcyk7XHJcbiAgICB0aGlzLmlkID0gXCJndW5cIjtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgICAgdmVsb2NpdHk6IHBvc2l0aW9uX2luaXQoKS52ZWxvY2l0eSxcclxuICAgICAgcm90YXRpb246IC0xXHJcbiAgICB9O1xyXG4gIH1cclxuICBzdGF0ZWYodDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5wbGF5ZXIpIHtcclxuICAgICAgbGV0IGFuZ2xlID0gdGhpcy5wbGF5ZXIuYW5nbGVUb3dhcmRzKHRoaXMuY3Vyc29yKTtcclxuICAgICAgbGV0IHJvdCA9IHJvdGF0aW9uX2xlbmd0aCg1MCwgYW5nbGUpO1xyXG4gICAgICB0aGlzLnJvdGF0aW9uID0gYW5nbGU7XHJcbiAgICAgIHRoaXMuc3RhdGUucm90YXRpb24gPSBhbmdsZTtcclxuICAgICAgdGhpcy5zdGF0ZS5wb3NpdGlvbiA9IHtcclxuICAgICAgICB4OiByb3QueCArIHRoaXMucGxheWVyLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTogcm90LnkgKyB0aGlzLnBsYXllci5zdGF0ZS5wb3NpdGlvbi55XHJcbiAgICAgIH07XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxldCByb29tID0gZy5nZXRSb29tKCk7XHJcbiAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wYXJlbnQuZ2V0X0l0ZW1zX2J5X1RhZyhcInBsYXllclwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIHRoaXMuY3Vyc29yID0gPEN1cnNvcj5yb29tLmdldE9iakJ5VGFnKFwiQ3Vyc29yXCIpWzBdO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgb2JqX3N0YXRlLCBwb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHsgY29tcG9zaXRlX29iaiB9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllcl9QYXJhbXMgfSBmcm9tIFwiLi9Hb29tYmFcIjtcclxuaW1wb3J0IHsgQ29udHJvbGxlZFBsYXllciB9IGZyb20gXCIuL0NvbnRyb2xsZWRQbGF5ZXJcIjtcclxuaW1wb3J0IHsgR3VuIH0gZnJvbSBcIi4vR3VuXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIGNvbXBvc2l0ZV9vYmo8b2JqX3N0YXRlPiB7XHJcbiAgZW5lbXkgPSB0cnVlO1xyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBwb3NpdGlvbiwgcm90YXRpb246IG51bWJlcixzY2FsaW5nOm51bWJlciwgcGFyYW1ldGVyczogUGxheWVyX1BhcmFtcykge1xyXG5cclxuICAgIHN1cGVyKHBvc2l0aW9uKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgICAgdmVsb2NpdHk6IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBDb250cm9sbGVkUGxheWVyKHBvc2l0aW9uLCByb3RhdGlvbiwgc2NhbGluZywgcGFyYW1ldGVycykpO1xyXG4gICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IEd1bih7eDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSArIDEwMH0scm90YXRpb24sIHNjYWxpbmcscGFyYW1ldGVycykpO1xyXG4gIH1cclxufVxyXG4iLCJcbiAgICBcbiAgICBpbXBvcnQge29ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcbiAgICBpbXBvcnQgeyBvYmpfc3RhdGUsIHBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xuICAgIFxuICAgIGludGVyZmFjZSBUZXN0X3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRle1xuICAgIFxuICAgIH1cbiAgICBcbiAgICBpbnRlcmZhY2UgVGVzdF9wYXJhbWV0ZXJze1xuICAgIFxuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgVGVzdCBleHRlbmRzIG9iajxUZXN0X3N0YXRlPntcbiAgICAgIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9FcnJvci5wbmdcIjtcbiAgICAgIGhlaWdodCA9IDEwMDtcbiAgICAgIHdpZHRoID0gMTAwO1xuICAgICAgdGFnczpBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICBjb2xsaXNpb24gPSB0cnVlO1xuICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgIHJvdGF0aW9uID0gMDtcbiAgICAgIHNjYWxpbmcgPSAxO1xuICAgICAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOlRlc3RfcGFyYW1ldGVycyA9IHt9XG4gICAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjpwb3NpdGlvbixyb3RhdGlvbjpudW1iZXIsc2NhbGluZzpudW1iZXIscGFyYW1zOlRlc3RfcGFyYW1ldGVycyl7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLHJvdGF0aW9uLHNjYWxpbmcscGFyYW1zKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBwb3NpdGlvbjpwb3NpdGlvbixcbiAgICAgICAgICB2ZWxvY2l0eTp7XG4gICAgICAgICAgICB4OjAsXG4gICAgICAgICAgICB5OjBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN0YXRlZih0aW1lX2RlbHRhOm51bWJlcil7XG4gICAgXG4gICAgICB9XG4gICAgICByZW5kZXJmKHRpbWVfZGVsdGE6bnVtYmVyKXtcbiAgICAgICByZXR1cm4gc3VwZXIucmVuZGVyZih0aW1lX2RlbHRhKTsgXG4gICAgICB9XG4gICAgICByZWdpc3Rlcl9hbmltYXRpb25zKCl7XG4gICAgXG4gICAgICB9XG4gICAgICByZWdpc3Rlcl9hdWRpbygpe1xuICAgIFxuICAgICAgfVxuICAgICAgcmVnaXN0ZXJfY29udHJvbHMoKXtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICIsImltcG9ydCB7IGJveCB9IGZyb20gXCIuL2JveFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlcnRCb3ggZXh0ZW5kcyBib3gge1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9ib3gyLnBuZ1wiO1xyXG4gIHdpZHRoID0gNjQ7XHJcbiAgaGVpZ2h0ID0gNTAwO1xyXG59XHJcbiIsImltcG9ydCB7Y29tcG9zaXRlX29iaiwgZ3Jhdml0eV9vYmp9IGZyb20gXCIuLi8uLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlLHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vLi4vbGliL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHBsYXRfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XHJcbiAgaGVhbHRoOm51bWJlciAgXHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBwbGF0Zm9ybWVyX29iajx0PiBleHRlbmRzIGdyYXZpdHlfb2JqPHQ+e1xyXG4gIGVuZW15ID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IocG9zaXRpb246cG9zaXRpb24scm90YXRpb246bnVtYmVyLHNjYWxpbmc6bnVtYmVyLHBhcmFtZXRlcnM6dW5rbm93bil7XHJcbiAgICBzdXBlcihwb3NpdGlvbixyb3RhdGlvbixzY2FsaW5nLHBhcmFtZXRlcnMpO1xyXG4gIH1cclxuICBzdGF0ZWYoYTpudW1iZXIpe1xyXG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIHBsYXRfc3RhdGU7XHJcbiAgICBpZihzdGF0ZS5oZWFsdGggPD0gMCl7XHJcbiAgICAgIHRoaXMuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgcGxhdGZvcm1lcl9vYmpfY29tcG9zaXRlPHQ+IGV4dGVuZHMgY29tcG9zaXRlX29iajx0PntcclxuICBlbmVteSA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKGE6cG9zaXRpb24pe1xyXG4gICAgc3VwZXIoYSk7XHJcbiAgfVxyXG4gIHN0YXRlZihhOm51bWJlcil7XHJcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgcGxhdF9zdGF0ZTtcclxuICAgIGlmKHN0YXRlLmhlYWx0aCA8PSAwKXtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQge3BsYXRmb3JtZXJfb2JqLHBsYXRfc3RhdGV9IGZyb20gXCIuL2Fic3RyYWN0L3BsYXRmb3JtZXJfb2JqXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlLHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBib3ggZXh0ZW5kcyBwbGF0Zm9ybWVyX29iajxvYmpfc3RhdGU+e1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9ib3gucG5nXCJcclxuICBjb2xsaXNpb24gPSB0cnVlXHJcbiAgaGVpZ2h0ID0gNjQ7XHJcbiAgd2lkdGggPSA1MDA7XHJcbiAgZ3Jhdml0eSA9IGZhbHNlO1xyXG4gIGVuZW15ID0gZmFsc2U7XHJcbiAgdGFncyA9IFtcInN0YXRpY1wiXVxyXG4gIGNvbnN0cnVjdG9yKGE6cG9zaXRpb24sYjpudW1iZXIsYzpudW1iZXIpe1xyXG4gICAgc3VwZXIoYSxiLGMsYm94LmRlZmF1bHRfcGFyYW1zKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOmEsXHJcbiAgICAgIHZlbG9jaXR5OntcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtwbGF0Zm9ybWVyX29iaiwgcGxhdF9zdGF0ZX0gZnJvbSBcIi4vYWJzdHJhY3QvcGxhdGZvcm1lcl9vYmpcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGV9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHsgZXhlY190eXBlIH0gZnJvbSBcIi4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQge3JvdGF0aW9uX2xlbmd0aCwgb2JqfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBHb29tYmEgfSBmcm9tIFwiLi9Hb29tYmFcIjtcclxuaW1wb3J0IHtnfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5cclxuaW50ZXJmYWNlIGJ1bGxldF9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcclxuICByb3RhdGlvbjpudW1iZXIsXHJcbiAgZGlzdGFuY2U6bnVtYmVyLFxyXG4gIHNwZWVkOm51bWJlcixcclxuICBkYW1hZ2U6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBwb3NpdGlvbntcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgYnVsbGV0IGV4dGVuZHMgb2JqPGJ1bGxldF9zdGF0ZT57XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2J1bGxldC5wbmdcIjtcclxuICBoZWlnaHQgPSAyMDtcclxuICB3aWR0aCA9IDEwO1xyXG4gIGdyYXZpdHkgPSBmYWxzZTtcclxuICBtYXhfZGlzdGFuY2UgPSAyMDAwO1xyXG4gIHRhZ3MgPSBbXCJidWxsZXRcIl07XHJcbiAgY29uc3RydWN0b3IoeDpwb3NpdGlvbiwgYW5nbGU6bnVtYmVyLHNjYWxpbmc6bnVtYmVyLCBpZDpzdHJpbmcgPSB1bmRlZmluZWQpe1xyXG4gICAgc3VwZXIoeCxhbmdsZSxzY2FsaW5nLGlkKTtcclxuICAgIGlmKGlkICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOngsXHJcbiAgICAgIHZlbG9jaXR5OntcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowXHJcbiAgICAgIH0sXHJcbiAgICAgIHNwZWVkOjEwLFxyXG4gICAgICByb3RhdGlvbjphbmdsZSxcclxuICAgICAgZGlzdGFuY2U6MCxcclxuICAgICAgZGFtYWdlOjVcclxuICAgIH1cclxuICAgIHRoaXMucm90YXRpb24gPSBhbmdsZTtcclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6bnVtYmVyKXtcclxuICAgIHRoaXMuc3RhdGUudmVsb2NpdHkgPSByb3RhdGlvbl9sZW5ndGgodGhpcy5zdGF0ZS5zcGVlZCx0aGlzLnN0YXRlLnJvdGF0aW9uKTtcclxuICAgIHRoaXMuc3RhdGUuZGlzdGFuY2UgKz0gdGhpcy5zdGF0ZS5zcGVlZDtcclxuICAgIGlmKHRoaXMuc3RhdGUuZGlzdGFuY2UgPiB0aGlzLm1heF9kaXN0YW5jZSl7XHJcbiAgICAgIHRoaXMuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2NvbnRyb2xzKCl7XHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvY2tldCBleHRlbmRzIGJ1bGxldHtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvZm9sZGVyL3JvY2tldC5wbmdcIjtcclxuICBoZWlnaHQgPSA2NztcclxuICB3aWR0aCA9IDE2O1xyXG4gIHBhcnRpY2xlX3RpbWVyID0gMDtcclxuICBwYXJ0aWNsZV9mcmVxdWVuY3kgPSA1O1xyXG4gIG1heF9kaXN0YW5jZSA9IDUwMDA7XHJcbiAgdGFncyA9IFtcIlJvY2tldFwiXVxyXG4gIGhpdGJveCA9IHtcclxuICAgIHhfb2Zmc2V0OjAsXHJcbiAgICB5X29mZnNldDowLFxyXG4gICAgd2lkdGg6MTYsXHJcbiAgICBoZWlnaHQ6MTZcclxuICB9XHJcbiAgY29uc3RydWN0b3IoeDpwb3NpdGlvbixhbmdsZTpudW1iZXIpe1xyXG4gICAgc3VwZXIoeCxhbmdsZSwxKTtcclxuICAgIHRoaXMuc3RhdGUuc3BlZWQgPSAxNTtcclxuICAgIHRoaXMuc3RhdGUuZGFtYWdlID0gMjA7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2F1ZGlvKCl7XHJcbiAgICB0aGlzLmF1ZGlvLmFkZChcImV4cGxvc2lvblwiLFwiLi9zb3VuZHMvZXhwbG9zaW9uMi5tcDNcIik7XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOm51bWJlcil7XHJcbiAgICBzdXBlci5zdGF0ZWYodGltZSk7XHJcbiAgICBpZih0aGlzLnBhcnRpY2xlX3RpbWVyID09IDApe1xyXG4gICAgICBsZXQgb2Zmc2V0ID0gcm90YXRpb25fbGVuZ3RoKDMwLHRoaXMucm90YXRpb24gKyAxODApO1xyXG4gICAgICB0aGlzLmVtaXRfcGFydGljbGUoXCJzbW9rZVwiLG9mZnNldCwgNDAwLCAxMik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhcnRpY2xlX3RpbWVyICs9IHRpbWU7XHJcbiAgICBpZih0aGlzLnBhcnRpY2xlX3RpbWVyID4gdGhpcy5wYXJ0aWNsZV9mcmVxdWVuY3kpe1xyXG4gICAgIHRoaXMucGFydGljbGVfdGltZXIgPSAwOyBcclxuICAgIH1cclxuICAgIGxldCByb29tID0gZy5zdGF0ZS5jdXJyZW50X3Jvb207XHJcbiAgICBsZXQgY29sbGlzaW9ucyA9IHJvb20uY2hlY2tfY29sbGlzaW9ucyh0aGlzLmdldEZ1bGxDb2xsaXNpb25Cb3goKSxbXCJndW5cIixcInBsYXllclwiXSk7XHJcbiAgICBpZihjb2xsaXNpb25zLmxlbmd0aCA+IDApe1xyXG4gICAgICBmb3IobGV0IGNvbGxpc2lvbiBvZiBjb2xsaXNpb25zKXtcclxuICAgICAgICBsZXQgc3QgPSBjb2xsaXNpb24uc3RhdGUgYXMgdW5rbm93biBhcyBwbGF0X3N0YXRlO1xyXG4gICAgICAgIGlmKCg8cGxhdGZvcm1lcl9vYmo8cGxhdF9zdGF0ZT4+Y29sbGlzaW9uKS5zdGF0ZS5oZWFsdGgpe1xyXG4gICAgICAgICAgc3QuaGVhbHRoIC09IHRoaXMuc3RhdGUuZGFtYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb2xsaXNpb24udGFncy5pbmRleE9mKFwiZHVtbXlcIikgPiAtMSl7XHJcbiAgICAgICAgICBsZXQgZHVtbXkgPSBjb2xsaXNpb24gYXMgR29vbWJhO1xyXG4gICAgICAgICAgaWYoZHVtbXkuc3RhdGUuanVtcGluZyl7XHJcbiAgICAgICAgICAgIGR1bW15LnN0YXRlLnRpbWVzX2FpcnNob3QrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdGF0ZS5kaXN0YW5jZSA9IHRoaXMubWF4X2Rpc3RhbmNlO1xyXG4gICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgICBsZXQgZXhwbG9zaW9uX2NvbGxpc2lvbnMgPSByb29tLmNoZWNrX2NvbGxpc2lvbnMoe1xyXG4gICAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOjI1NixcclxuICAgICAgICBoZWlnaHQ6MjU2XHJcbiAgICAgIH0sW1wic3RhdGljXCJdKVxyXG4gICAgICBmb3IobGV0IGNvbGxpZGVyIG9mIGV4cGxvc2lvbl9jb2xsaXNpb25zKXtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKGNvbGxpZGVyKTtcclxuICAgICAgICBsZXQgbXVsdGlwbHllciA9IDEgLSBkaXN0YW5jZS8zMDA7XHJcbiAgICAgICAgaWYobXVsdGlwbHllciA8IDApXHJcbiAgICAgICAgICBtdWx0aXBseWVyID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgb19zdGF0ZSA9IGNvbGxpZGVyLnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICAgICAgICBsZXQgdmVsb2NpdGllcyA9IHJvdGF0aW9uX2xlbmd0aChtdWx0aXBseWVyICogMTAwLCB0aGlzLmFuZ2xlVG93YXJkcyhjb2xsaWRlcikpO1xyXG4gICAgICAgIG9fc3RhdGUudmVsb2NpdHkueCArPSB2ZWxvY2l0aWVzLng7XHJcbiAgICAgICAgb19zdGF0ZS52ZWxvY2l0eS55ICs9IHZlbG9jaXRpZXMueTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXRfcGFydGljbGUoXCJleHBsb3Npb25cIix7eDowLHk6MH0sNTAwLDApO1xyXG4gICAgICB0aGlzLmF1ZGlvLnBsYXkoXCJleHBsb3Npb25cIiwwLjIpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIlxuaW50ZXJmYWNlIHByZWZhYnMge1xuICBbaW5kZXg6c3RyaW5nXTphbnlcbn1cbmltcG9ydCB7Ym94fSBmcm9tIFwiLi9ib3hcIjtcbmltcG9ydCB7YnVsbGV0fSBmcm9tIFwiLi9idWxsZXRcIjtcbmltcG9ydCB7Q29udHJvbGxlZFBsYXllcn0gZnJvbSBcIi4vQ29udHJvbGxlZFBsYXllclwiO1xuaW1wb3J0IHtDdXJzb3J9IGZyb20gXCIuL0N1cnNvclwiO1xuaW1wb3J0IHtEb29yfSBmcm9tIFwiLi9Eb29yXCI7XG5pbXBvcnQge0dvb21iYX0gZnJvbSBcIi4vR29vbWJhXCI7XG5pbXBvcnQge0d1bn0gZnJvbSBcIi4vR3VuXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQge1Rlc3R9IGZyb20gXCIuL1Rlc3RcIjtcbmltcG9ydCB7VmVydEJveH0gZnJvbSBcIi4vVmVydEJveFwiO1xuZXhwb3J0IGxldCBwcmVmYWJzOnByZWZhYnMgPSB7XG5cdGJveDpib3gsXG5cdGJ1bGxldDpidWxsZXQsXG5cdENvbnRyb2xsZWRQbGF5ZXI6Q29udHJvbGxlZFBsYXllcixcblx0Q3Vyc29yOkN1cnNvcixcblx0RG9vcjpEb29yLFxuXHRHb29tYmE6R29vbWJhLFxuXHRHdW46R3VuLFxuXHRQbGF5ZXI6UGxheWVyLFxuXHRUZXN0OlRlc3QsXG5cdFZlcnRCb3g6VmVydEJveCxcbn0iLCJpbXBvcnQgeyByb29tLCBhcHBseV9ncmF2aXR5LG9iamVjdF9zdGF0ZV9jb25maWcsIHN0YXRlX2NvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9saWIvcm9vbVwiO1xyXG5pbXBvcnQgeyBHb29tYmEgfSBmcm9tIFwiLi4vLi4vb2JqZWN0cy9Hb29tYmFcIjtcclxuaW1wb3J0IHsgQ29udHJvbGxlZFBsYXllciB9IGZyb20gXCIuLi8uLi9vYmplY3RzL0NvbnRyb2xsZWRQbGF5ZXJcIjtcclxuaW1wb3J0IHsgR3VuIH0gZnJvbSBcIi4uLy4uL29iamVjdHMvR3VuXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9vYmplY3RzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBDdXJzb3IgfSBmcm9tIFwiLi4vLi4vb2JqZWN0cy9DdXJzb3JcIjtcclxuaW1wb3J0IHsgYm94IH0gZnJvbSBcIi4uLy4uL29iamVjdHMvYm94XCI7XHJcbmltcG9ydCB7IFZlcnRCb3ggfSBmcm9tIFwiLi4vLi4vb2JqZWN0cy9WZXJ0Qm94XCI7XHJcbmltcG9ydCB7IHZlbG9jaXR5X2NvbGxpc2lvbl9jaGVjayB9IGZyb20gXCIuLi8uLi8uLi9saWIvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IGdyYXZpdHlfb2JqLCByb3RhdGlvbl9sZW5ndGggfSBmcm9tIFwiLi4vLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBQb2xsX01vdXNlLCBleGVjX3R5cGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IEhVRCwgVGV4dCB9IGZyb20gXCIuLi8uLi8uLi9saWIvaHVkXCI7XHJcbmltcG9ydCB7IERFQlVHLCBnYW1lLCBHZXRWaWV3cG9ydERpbWVuc2lvbnMsIHNldERlYnVnIH0gZnJvbSBcIi4uLy4uLy4uL3ZhblwiO1xyXG5pbXBvcnQge2J1bGxldCwgUm9ja2V0fSBmcm9tIFwiLi4vLi4vb2JqZWN0cy9idWxsZXRcIjtcclxuaW1wb3J0IHtnfSBmcm9tIFwiLi4vLi4vbWFpblwiO1xyXG5pbXBvcnQgKiBhcyBqc29uIGZyb20gXCIuL2luZm8uanNvblwiO1xyXG5pbnRlcmZhY2Ugb3ZlcndvcmxkX2kge1xyXG4gIHBsYXllcjogZ3Jhdml0eV9vYmo8dW5rbm93bj4sXHJcbiAgcGF1c2VkOiBib29sZWFuLFxyXG4gIGxvY2tlZF9idWxsZXQ6YnVsbGV0XHJcbn1cclxuXHJcbmNsYXNzIE92ZXJ3b3JsZF9IVUQgZXh0ZW5kcyBIVUQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudGV4dF9lbGVtZW50cy5wdXNoKG5ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQgKiA3LzhcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogNDQsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246XCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6MVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBsZXQgeCA9IGcuZ2V0Um9vbSgpLmdldE9iakJ5VGFnKFwiZHVtbXlcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBpZih4KVxyXG4gICAgICAgIHJldHVybiBgVGltZXMgQWlyc2hvdDoke3guc3RhdGUudGltZXNfYWlyc2hvdH1gO1xyXG4gICAgICByZXR1cm4gXCJcIlxyXG4gICAgfSkpO1xyXG4gICAgdGhpcy50ZXh0X2VsZW1lbnRzLnB1c2gobmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodCAqIDYvOFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiA0NCxcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6MVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBsZXQgeCA9IGcuZ2V0Um9vbSgpLmdldE9iakJ5VGFnKFwiZHVtbXlcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBpZih4KVxyXG4gICAgICAgIHJldHVybiBgTWF4IFRpbWVzIEFpcnNob3Q6JHtNYXRoLm1heCh4LnN0YXRlLnRpbWVzX2FpcnNob3QseC5zdGF0ZS5tYXhfdGltZXNfYWlyc2hvdCl9YDtcclxuICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEhlaWdodF9IVUQgZXh0ZW5kcyBIVUR7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnRleHRfZWxlbWVudHMucHVzaChuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogNjAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDE1LFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOlwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOjFcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgbGV0IHggPSBnLmdldFJvb20oKS5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgaWYoeClcclxuICAgICAgICByZXR1cm4gYEhlaWdodDoke01hdGguZmxvb3IoeC5zdGF0ZS5wb3NpdGlvbi55KX1gO1xyXG4gICAgICByZXR1cm4gXCJcIlxyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE92ZXJ3b3JsZCBleHRlbmRzIHJvb208b3ZlcndvcmxkX2k+e1xyXG4gIGJhY2tncm91bmRfdXJsID0gXCIuL3Nwcml0ZXMvaW1ENDFsLmpwZ1wiO1xyXG4gIG9iamVjdHM6Z3Jhdml0eV9vYmo8dW5rbm93bj5bXTtcclxuICBjb25zdHJ1Y3RvcihnYW1lOmdhbWU8dW5rbm93bj4pIHtcclxuICAgIHN1cGVyKGdhbWUsanNvbiBhcyB1bmtub3duIGFzIHN0YXRlX2NvbmZpZyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwbGF5ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgcGF1c2VkOiBmYWxzZSxcclxuICAgICAgbG9ja2VkX2J1bGxldDpudWxsXHJcbiAgICB9O1xyXG4gICAgLypcclxuICAgIGZvcihsZXQgYSA9IDA7YTwxMDthKyspe1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgVmVydEJveCh7eDozMjAseToyNTAgKyBhICogNTAwfSwwLDEpKTtcclxuICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IFZlcnRCb3goe3g6OTAwLHk6MjUwICsgYSAqIDUwMH0sMCwxKSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gMDthIDwgMTAwOyBhKyspe1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgYm94KHt4OjcwMCArIGEgKiA1MDAseTowfSwwLDEpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5hZGRJdGVtcyhbLi4ubmV3IFBsYXllcih7eDo3MDAseToxNTB9LDAsMSx7aWQ6XCJwbGF5ZXJcIn0pLmNvbWJpbmVkX29iamVjdHMoKV0pXHJcbiAgICB0aGlzLmFkZEl0ZW0obmV3IEN1cnNvcih7eDowLHk6MH0sMCwxLHtpZDpcIkN1cnNvclwifSkpO1xyXG4gICAgdGhpcy5hZGRJdGVtKG5ldyBHb29tYmEoe3g6NTAwLHk6NTAwfSwwLDEpKTtcclxuICAgICovXHJcbiAgICBnYW1lLnN0YXRlLmNhbWVyYXNbMF0uaHVkID0gbmV3IE92ZXJ3b3JsZF9IVUQoKTtcclxuICAgIGdhbWUuc3RhdGUuY2FtZXJhc1sxXS5odWQgPSBuZXcgSGVpZ2h0X0hVRCgpO1xyXG4gIH1cclxuICByZWdpc3Rlcl9jb250cm9scygpIHtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJFc2NhcGVcIiwgZXhlY190eXBlLm9uY2UsICgpID0+IHtcclxuICAgICAgdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXNbMF0uc3RhdGUuZGVidWcgPSAhdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXNbMF0uc3RhdGUuZGVidWc7XHJcbiAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldE9iaihcInBsYXllclwiKSBhcyBHb29tYmE7XHJcbiAgICAgIHBsYXllci5jb2xsaXNpb24gPSAhcGxheWVyLmNvbGxpc2lvbjtcclxuICAgICAgcGxheWVyLmdyYXZpdHkgPSAhcGxheWVyLmdyYXZpdHk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwibW91c2UwZG93blwiLCBleGVjX3R5cGUucmVwZWF0LCgpID0+IHtcclxuICAgICAgbGV0IGd1biA9IHRoaXMuZ2V0T2JqKFwiZ3VuXCIpIGFzIEd1bjtcclxuICAgICAgaWYoZ3VuKXtcclxuICAgICAgICBsZXQgbXV6emxlID0gcm90YXRpb25fbGVuZ3RoKDMwLGd1bi5zdGF0ZS5yb3RhdGlvbik7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgeDpndW4uc3RhdGUucG9zaXRpb24ueCArIG11enpsZS54LFxyXG4gICAgICAgICAgeTpndW4uc3RhdGUucG9zaXRpb24ueSArIG11enpsZS55XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidWxsZXRzID0gW107XHJcbiAgICAgICAgZm9yKGxldCBhID0gMDthIDwgMTthICsrKXtcclxuICAgICAgICAgIGJ1bGxldHMucHVzaChuZXcgUm9ja2V0KHt4OnBvc2l0aW9uLngseTpwb3NpdGlvbi55fSxndW4uc3RhdGUucm90YXRpb24pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5sb2NrZWRfYnVsbGV0ID09IG51bGwpXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmxvY2tlZF9idWxsZXQgPSBidWxsZXRzWzBdO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbXMoYnVsbGV0cyk7XHJcbiAgICAgIH1cclxuICAgIH0sNDAwKVxyXG4gIH1cclxuICByZWdpc3RlclBhcnRpY2xlcygpe1xyXG4gICAgdGhpcy5wYXJ0aWNsZXNbXCJzbW9rZVwiXSA9IHtcclxuICAgICAgc3ByaXRlOlwiLi9zcHJpdGVzL2ZvbGRlci9zbW9rZS5wbmdcIixcclxuICAgICAgaGVpZ2h0OjY0LFxyXG4gICAgICB3aWR0aDo2NFxyXG4gICAgfTtcclxuICAgIHRoaXMucGFydGljbGVzW1wiZXhwbG9zaW9uXCJdID0ge1xyXG4gICAgICBzcHJpdGU6XCIuL3Nwcml0ZXMvZm9sZGVyL2V4cGxvc2lvbi5wbmdcIixcclxuICAgICAgaGVpZ2h0OjEyOCxcclxuICAgICAgd2lkdGg6MTI4XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5wYXVzZWQpIHtcclxuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCB0aGlzLm9iamVjdHMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICBhcHBseV9ncmF2aXR5KHRoaXMub2JqZWN0c1thXSwgLTEsIC0xNSk7XHJcbiAgICAgICAgdmVsb2NpdHlfY29sbGlzaW9uX2NoZWNrKHRoaXMub2JqZWN0c1thXSwgdGhpcy5vYmplY3RzKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRPYmpCeVRhZyhcInBsYXllclwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmdldE9iakJ5VGFnKFwiZHVtbXlcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBsZXQgY3Vyc29yID0gdGhpcy5nZXRPYmpCeVRhZyhcIkN1cnNvclwiKVswXSBhcyBDdXJzb3I7XHJcbiAgICAgIGxldCBjYW1lcmFzID0gZy5zdGF0ZS5jYW1lcmFzO1xyXG4gICAgICBcclxuICAgICAgaWYgKHBsYXllcikgeyAgICAgICAgXHJcbiAgICAgICAgY2FtZXJhc1swXS54ID0gcGxheWVyLnN0YXRlLnBvc2l0aW9uLng7XHJcbiAgICAgICAgY2FtZXJhc1swXS55ID0gcGxheWVyLnN0YXRlLnBvc2l0aW9uLnkgKyAoY2FtZXJhc1swXS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodC8yIC0gcGxheWVyLmhlaWdodC8yKTsgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZih0YXJnZXQpe1xyXG4gICAgICAgIGNhbWVyYXNbMV0uc3RhdGUucG9zaXRpb24ueCA9IHRhcmdldC5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gICAgICAgIGNhbWVyYXNbMV0uc3RhdGUucG9zaXRpb24ueSA9IHRhcmdldC5zdGF0ZS5wb3NpdGlvbi55O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoY3Vyc29yKSB7XHJcbiAgICAgICAgY3Vyc29yLmNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgIGN1cnNvci5ncmF2aXR5ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZSh0aGlzLmdhbWUuc3RhdGUuY2FudmFzLHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdKTtcclxuICAgICAgICBjdXJzb3Iuc3RhdGUucG9zaXRpb24ueCA9IG1vdXNlLng7XHJcbiAgICAgICAgY3Vyc29yLnN0YXRlLnBvc2l0aW9uLnkgPSBtb3VzZS55O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgc3VwZXIuc3RhdGVmKHRpbWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgcm9vbSwgYXBwbHlfZ3Jhdml0eSxvYmplY3Rfc3RhdGVfY29uZmlnLCBzdGF0ZV9jb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3Jvb21cIjtcclxuaW1wb3J0IHsgR29vbWJhIH0gZnJvbSBcIi4uLy4uL29iamVjdHMvR29vbWJhXCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZWRQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vb2JqZWN0cy9Db250cm9sbGVkUGxheWVyXCI7XHJcbmltcG9ydCB7IEd1biB9IGZyb20gXCIuLi8uLi9vYmplY3RzL0d1blwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vb2JqZWN0cy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIi4uLy4uL29iamVjdHMvQ3Vyc29yXCI7XHJcbmltcG9ydCB7IGJveCB9IGZyb20gXCIuLi8uLi9vYmplY3RzL2JveFwiO1xyXG5pbXBvcnQgeyBWZXJ0Qm94IH0gZnJvbSBcIi4uLy4uL29iamVjdHMvVmVydEJveFwiO1xyXG5pbXBvcnQgeyB2ZWxvY2l0eV9jb2xsaXNpb25fY2hlY2sgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQgeyBncmF2aXR5X29iaiwgcm90YXRpb25fbGVuZ3RoIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgUG9sbF9Nb3VzZSwgZXhlY190eXBlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBIVUQsIFRleHQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2h1ZFwiO1xyXG5pbXBvcnQgeyBERUJVRywgZ2FtZSwgR2V0Vmlld3BvcnREaW1lbnNpb25zLCBzZXREZWJ1ZyB9IGZyb20gXCIuLi8uLi8uLi92YW5cIjtcclxuaW1wb3J0IHtidWxsZXQsIFJvY2tldH0gZnJvbSBcIi4uLy4uL29iamVjdHMvYnVsbGV0XCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uLy4uL21haW5cIjtcclxuaW1wb3J0ICogYXMganNvbiBmcm9tIFwiLi9pbmZvLmpzb25cIjtcclxuaW50ZXJmYWNlIG92ZXJ3b3JsZF9pIHtcclxuICBwbGF5ZXI6IGdyYXZpdHlfb2JqPHVua25vd24+LFxyXG4gIHBhdXNlZDogYm9vbGVhbixcclxuICBsb2NrZWRfYnVsbGV0OmJ1bGxldFxyXG59XHJcblxyXG5jbGFzcyBPdmVyd29ybGRfSFVEIGV4dGVuZHMgSFVEIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnRleHRfZWxlbWVudHMucHVzaChuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0ICogNy84XHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDQ0LFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOlwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOjFcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgbGV0IHggPSBnLmdldFJvb20oKS5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgaWYoeClcclxuICAgICAgICByZXR1cm4gYFRpbWVzIEFpcnNob3Q6JHt4LnN0YXRlLnRpbWVzX2FpcnNob3R9YDtcclxuICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH0pKTtcclxuICAgIHRoaXMudGV4dF9lbGVtZW50cy5wdXNoKG5ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQgKiA2LzhcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogNDQsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOjFcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgbGV0IHggPSBnLmdldFJvb20oKS5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgaWYoeClcclxuICAgICAgICByZXR1cm4gYE1heCBUaW1lcyBBaXJzaG90OiR7TWF0aC5tYXgoeC5zdGF0ZS50aW1lc19haXJzaG90LHguc3RhdGUubWF4X3RpbWVzX2FpcnNob3QpfWA7XHJcbiAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBIZWlnaHRfSFVEIGV4dGVuZHMgSFVEe1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy50ZXh0X2VsZW1lbnRzLnB1c2gobmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IDYwMFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiAxNSxcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjpcImxlZnRcIixcclxuICAgICAgc2NhbGluZzoxXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGxldCB4ID0gZy5nZXRSb29tKCkuZ2V0T2JqQnlUYWcoXCJkdW1teVwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGlmKHgpXHJcbiAgICAgICAgcmV0dXJuIGBIZWlnaHQ6JHtNYXRoLmZsb29yKHguc3RhdGUucG9zaXRpb24ueSl9YDtcclxuICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVbmRlcndvcmxkIGV4dGVuZHMgcm9vbTxvdmVyd29ybGRfaT57XHJcbiAgYmFja2dyb3VuZF91cmwgPSBcIi4vc3ByaXRlcy9vcmlnXzcxOTI3NS5qcGdcIjtcclxuICBvYmplY3RzOmdyYXZpdHlfb2JqPHVua25vd24+W107XHJcbiAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+KSB7XHJcbiAgICBzdXBlcihnYW1lLGpzb24gYXMgdW5rbm93biBhcyBzdGF0ZV9jb25maWcpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcGxheWVyOiB1bmRlZmluZWQsXHJcbiAgICAgIHBhdXNlZDogZmFsc2UsXHJcbiAgICAgIGxvY2tlZF9idWxsZXQ6bnVsbFxyXG4gICAgfTtcclxuICAgIC8qXHJcbiAgICBmb3IobGV0IGEgPSAwO2E8MTA7YSsrKXtcclxuICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IFZlcnRCb3goe3g6MzIwLHk6MjUwICsgYSAqIDUwMH0sMCwxKSk7XHJcbiAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBWZXJ0Qm94KHt4OjkwMCx5OjI1MCArIGEgKiA1MDB9LDAsMSkpO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IDA7YSA8IDEwMDsgYSsrKXtcclxuICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IGJveCh7eDo3MDAgKyBhICogNTAwLHk6MH0sMCwxKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuYWRkSXRlbXMoWy4uLm5ldyBQbGF5ZXIoe3g6NzAwLHk6MTUwfSwwLDEse2lkOlwicGxheWVyXCJ9KS5jb21iaW5lZF9vYmplY3RzKCldKVxyXG4gICAgdGhpcy5hZGRJdGVtKG5ldyBDdXJzb3Ioe3g6MCx5OjB9LDAsMSx7aWQ6XCJDdXJzb3JcIn0pKTtcclxuICAgIHRoaXMuYWRkSXRlbShuZXcgR29vbWJhKHt4OjUwMCx5OjUwMH0sMCwxKSk7XHJcbiAgICAqL1xyXG4gICAgZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdLmh1ZCA9IG5ldyBPdmVyd29ybGRfSFVEKCk7XHJcbiAgICBnYW1lLnN0YXRlLmNhbWVyYXNbMV0uaHVkID0gbmV3IEhlaWdodF9IVUQoKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJfY29udHJvbHMoKSB7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwiRXNjYXBlXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdLnN0YXRlLmRlYnVnID0gIXRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdLnN0YXRlLmRlYnVnO1xyXG4gICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRPYmooXCJwbGF5ZXJcIikgYXMgR29vbWJhO1xyXG4gICAgICBwbGF5ZXIuY29sbGlzaW9uID0gIXBsYXllci5jb2xsaXNpb247XHJcbiAgICAgIHBsYXllci5ncmF2aXR5ID0gIXBsYXllci5ncmF2aXR5O1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIm1vdXNlMGRvd25cIiwgZXhlY190eXBlLnJlcGVhdCwoKSA9PiB7XHJcbiAgICAgIGxldCBndW4gPSB0aGlzLmdldE9iaihcImd1blwiKSBhcyBHdW47XHJcbiAgICAgIGlmKGd1bil7XHJcbiAgICAgICAgbGV0IG11enpsZSA9IHJvdGF0aW9uX2xlbmd0aCgzMCxndW4uc3RhdGUucm90YXRpb24pO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgIHg6Z3VuLnN0YXRlLnBvc2l0aW9uLnggKyBtdXp6bGUueCxcclxuICAgICAgICAgIHk6Z3VuLnN0YXRlLnBvc2l0aW9uLnkgKyBtdXp6bGUueVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYnVsbGV0cyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgYSA9IDA7YSA8IDE7YSArKyl7XHJcbiAgICAgICAgICBidWxsZXRzLnB1c2gobmV3IFJvY2tldCh7eDpwb3NpdGlvbi54LHk6cG9zaXRpb24ueX0sZ3VuLnN0YXRlLnJvdGF0aW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubG9ja2VkX2J1bGxldCA9PSBudWxsKVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5sb2NrZWRfYnVsbGV0ID0gYnVsbGV0c1swXTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW1zKGJ1bGxldHMpO1xyXG4gICAgICB9XHJcbiAgICB9LDQwMClcclxuICB9XHJcbiAgcmVnaXN0ZXJQYXJ0aWNsZXMoKXtcclxuICAgIHRoaXMucGFydGljbGVzW1wic21va2VcIl0gPSB7XHJcbiAgICAgIHNwcml0ZTpcIi4vc3ByaXRlcy9mb2xkZXIvc21va2UucG5nXCIsXHJcbiAgICAgIGhlaWdodDo2NCxcclxuICAgICAgd2lkdGg6NjRcclxuICAgIH07XHJcbiAgICB0aGlzLnBhcnRpY2xlc1tcImV4cGxvc2lvblwiXSA9IHtcclxuICAgICAgc3ByaXRlOlwiLi9zcHJpdGVzL2ZvbGRlci9leHBsb3Npb24ucG5nXCIsXHJcbiAgICAgIGhlaWdodDoxMjgsXHJcbiAgICAgIHdpZHRoOjEyOFxyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0ZWYodGltZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUucGF1c2VkKSB7XHJcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgYXBwbHlfZ3Jhdml0eSh0aGlzLm9iamVjdHNbYV0sIC0xLCAtMTUpO1xyXG4gICAgICAgIHZlbG9jaXR5X2NvbGxpc2lvbl9jaGVjayh0aGlzLm9iamVjdHNbYV0sIHRoaXMub2JqZWN0cyk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0T2JqQnlUYWcoXCJwbGF5ZXJcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgbGV0IGN1cnNvciA9IHRoaXMuZ2V0T2JqQnlUYWcoXCJDdXJzb3JcIilbMF0gYXMgQ3Vyc29yO1xyXG4gICAgICBsZXQgY2FtZXJhcyA9IGcuc3RhdGUuY2FtZXJhcztcclxuICAgICAgXHJcbiAgICAgIGlmIChwbGF5ZXIpIHsgICAgICAgIFxyXG4gICAgICAgIGNhbWVyYXNbMF0ueCA9IHBsYXllci5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gICAgICAgIGNhbWVyYXNbMF0ueSA9IHBsYXllci5zdGF0ZS5wb3NpdGlvbi55ICsgKGNhbWVyYXNbMF0uc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQvMiAtIHBsYXllci5oZWlnaHQvMik7ICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYodGFyZ2V0KXtcclxuICAgICAgICBjYW1lcmFzWzFdLnN0YXRlLnBvc2l0aW9uLnggPSB0YXJnZXQuc3RhdGUucG9zaXRpb24ueDtcclxuICAgICAgICBjYW1lcmFzWzFdLnN0YXRlLnBvc2l0aW9uLnkgPSB0YXJnZXQuc3RhdGUucG9zaXRpb24ueTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGN1cnNvcikge1xyXG4gICAgICAgIGN1cnNvci5jb2xsaXNpb24gPSBmYWxzZTtcclxuICAgICAgICBjdXJzb3IuZ3Jhdml0eSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UodGhpcy5nYW1lLnN0YXRlLmNhbnZhcyx0aGlzLmdhbWUuc3RhdGUuY2FtZXJhc1swXSk7XHJcbiAgICAgICAgY3Vyc29yLnN0YXRlLnBvc2l0aW9uLnggPSBtb3VzZS54O1xyXG4gICAgICAgIGN1cnNvci5zdGF0ZS5wb3NpdGlvbi55ID0gbW91c2UueTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIHN1cGVyLnN0YXRlZih0aW1lKTtcclxuICB9XHJcblxyXG59XHJcbiIsIlxuaW50ZXJmYWNlIHJvb21fZGlyIHtcbiAgW2luZGV4OnN0cmluZ106YW55XG59XG5pbXBvcnQge092ZXJ3b3JsZH0gZnJvbSBcIi4vT3ZlcndvcmxkL092ZXJ3b3JsZFwiO1xuaW1wb3J0IHtVbmRlcndvcmxkfSBmcm9tIFwiLi9VbmRlcndvcmxkL1VuZGVyd29ybGRcIjtcbmV4cG9ydCBsZXQgcm9vbXM6cm9vbV9kaXIgPSB7XG5cdE92ZXJ3b3JsZDpPdmVyd29ybGQsXG5cdFVuZGVyd29ybGQ6VW5kZXJ3b3JsZCxcbn0iLCJpbnRlcmZhY2Ugc291bmRfc3RvcmFnZSB7XHJcbiAgW2luZGV4OiBzdHJpbmddOiBIVE1MQXVkaW9FbGVtZW50XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBhdWRpbyB7XHJcbiAgc291bmRzOiBzb3VuZF9zdG9yYWdlID0ge307XHJcbiAgYWRkKG5hbWU6IHN0cmluZywgczogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNvdW5kc1tuYW1lXSA9IG5ldyBBdWRpbyhzKTtcclxuICB9XHJcbiAgYXN5bmMgbG9hZCgpIHtcclxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zb3VuZHMpO1xyXG4gICAgbGV0IHByb21pc2VzID0ga2V5cy5tYXAoKGtleSkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc291bmRzW2tleV0uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXl0aHJvdWdoXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICB0cnl7XHJcbiAgICAgIGxldCB4ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICByZXR1cm4oeCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBsYXkobmFtZTpzdHJpbmcsdm9sdW1lOm51bWJlcil7XHJcbiAgICBsZXQgYSA9IHRoaXMuc291bmRzW25hbWVdO1xyXG4gICAgYS5wYXVzZSgpXHJcbiAgICBhLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGEudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgYS5wbGF5KCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtvYmosZ2V0SWR9IGZyb20gXCIuLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlfSBmcm9tIFwiLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7ZGVlcH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBjb2xsaXNpb25fYm94e1xyXG4gIHg6bnVtYmVyO1xyXG4gIHk6bnVtYmVyO1xyXG4gIHdpZHRoOm51bWJlcjtcclxuICBoZWlnaHQ6bnVtYmVyO1xyXG59XHJcblxyXG5lbnVtIGRpcmVjdGlvbntcclxuICBsZWZ0LFxyXG4gIHJpZ2h0LFxyXG4gIHVwLFxyXG4gIGRvd25cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX2FsbF9vYmplY3RzKGM6IGNvbGxpc2lvbl9ib3gsb2JqczpBcnJheTxvYmo8dW5rbm93bj4+LGV4ZW1wdGlvbjpzdHJpbmdbXSA9IFtdKTpBcnJheTxvYmo8dW5rbm93bj4+e1xyXG4gIHJldHVybiBvYmpzLmZpbHRlcigoYSk9PighZXhlbXB0aW9uLnNvbWUoKGIpPT5hLnRhZ3MuaW5kZXhPZihiKSAhPT0gLTEpICYmIGEuY29sbGlkZXNXaXRoQm94KGMpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja19hbGxfY29sbGlzaW9ucyhjOiBjb2xsaXNpb25fYm94LG9ianM6QXJyYXk8b2JqPHVua25vd24+PixleGVtcHRpb246c3RyaW5nW10gPSBbXSk6QXJyYXk8b2JqPHVua25vd24+PntcclxuICBsZXQgbWF0Y2hlZCA9IFtdO1xyXG4gIGZvciAobGV0IGEgb2Ygb2Jqcykge1xyXG4gICAgaWYgKCFleGVtcHRpb24uc29tZSgoYik9PmEudGFncy5pbmRleE9mKGIpICE9PSAtMSkgJiYgYS5jb2xsaXNpb24gJiYgYS5jb2xsaWRlc1dpdGhCb3goYykpIHtcclxuICAgICAgbWF0Y2hlZC5wdXNoKGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbWF0Y2hlZFxyXG59XHJcbi8vQ2hlY2tzIHVwIHRvIHRoZSBmaXJzdCBjb2xsaXNpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX2NvbGxpc2lvbnMoYzogY29sbGlzaW9uX2JveCwgb2JqczogQXJyYXk8b2JqPHVua25vd24+PiwgZXhlbXB0aW9uOnN0cmluZykge1xyXG4gIGZvciAobGV0IGEgb2Ygb2Jqcykge1xyXG4gICAgaWYgKGEuaWQgIT09IGV4ZW1wdGlvbiAmJiBhLmNvbGxpc2lvbiAmJiBhLmNvbGxpZGVzV2l0aEJveChjKSkge1xyXG4gICAgICByZXR1cm4gYTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlbG9jaXR5X21heCh2ZWxvY2l0eTpudW1iZXIsYm94OmNvbGxpc2lvbl9ib3gsb2JqczpBcnJheTxvYmo8dW5rbm93bj4+LCBleGVtcHRpb246c3RyaW5nLGRpcjpkaXJlY3Rpb24pe1xyXG4gIGxldCBjb2xsaXNpb24gPSBjaGVja19jb2xsaXNpb25zKGJveCwgb2JqcywgZXhlbXB0aW9uKTtcclxuICBpZihjb2xsaXNpb24gPT0gbnVsbCl7XHJcbiAgICByZXR1cm4gdmVsb2NpdHk7XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBsZXQgY29sbGlkZXIgPSBjb2xsaXNpb247XHJcbiAgICBsZXQgb3JpZ2luID0gZ2V0SWQob2JqcyxleGVtcHRpb24pO1xyXG4gICAgbGV0IG9yaWdfc3QgPSBvcmlnaW4uc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gICAgbGV0IGNvbGxpZGVyX3N0ID0gY29sbGlkZXIuc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gICAgbGV0IG9yaWdfY29sID0gb3JpZ2luLmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICAgIGxldCBjb2xsaWRlcl9jb2wgPSBjb2xsaWRlci5nZXRGdWxsQ29sbGlzaW9uQm94KCk7XHJcbiAgICBpZihkaXIgPT0gZGlyZWN0aW9uLmxlZnQpe1xyXG4gICAgICByZXR1cm4gKG9yaWdfY29sLnggLSBvcmlnX2NvbC53aWR0aC8yKSAtIChjb2xsaWRlcl9jb2wueCArIGNvbGxpZGVyX2NvbC53aWR0aC8yKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlyID09IGRpcmVjdGlvbi5yaWdodCl7XHJcbiAgICAgIHJldHVybiAoY29sbGlkZXJfY29sLnggLSBjb2xsaWRlcl9jb2wud2lkdGgvMikgLSAob3JpZ19jb2wueCArIG9yaWdfY29sLndpZHRoLzIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkaXIgPT0gZGlyZWN0aW9uLmRvd24pe1xyXG4gICAgICByZXR1cm4gKG9yaWdfY29sLnkgLSBvcmlnX2NvbC5oZWlnaHQvMikgLSAoY29sbGlkZXJfY29sLnkgKyBjb2xsaWRlcl9jb2wuaGVpZ2h0LzIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkaXIgPT0gZGlyZWN0aW9uLnVwKXtcclxuICAgICAgcmV0dXJuIChjb2xsaWRlcl9jb2wueSAtIGNvbGxpZGVyX2NvbC5oZWlnaHQvMikgLSAob3JpZ19jb2wueSArIG9yaWdfY29sLmhlaWdodC8yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZWxvY2l0eV9jb2xsaXNpb25fY2hlY2sob2JqZWN0Om9iajx1bmtub3duPixsaXN0OkFycmF5PG9iajx1bmtub3duPj4pIHtcclxuICBsaXN0ID0gWy4uLmxpc3RdO1xyXG4gIGxldCBvYiA9IG9iamVjdDtcclxuICBsZXQgc3QgPSBvYmplY3Quc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gIGxldCB4X3ZlbCA9IHN0LnZlbG9jaXR5Lng7XHJcbiAgbGV0IHlfdmVsID0gc3QudmVsb2NpdHkueTtcclxuICBpZighb2IuY29sbGlzaW9uKXtcclxuICAgICg8b2JqX3N0YXRlPm9iLnN0YXRlKS5wb3NpdGlvbi54ICs9ICg8b2JqX3N0YXRlPm9iLnN0YXRlKS52ZWxvY2l0eS54O1xyXG4gICAgKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnBvc2l0aW9uLnkgKz0gKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnZlbG9jaXR5Lnk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGxldCBjb2xfYm94ID0gb2IuZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gIGlmICh4X3ZlbCA+IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IGNvbF9ib3gueCArIGNvbF9ib3gud2lkdGgvMiArIHhfdmVsLzIsXHJcbiAgICAgIHk6IGNvbF9ib3gueSxcclxuICAgICAgd2lkdGg6IHhfdmVsLFxyXG4gICAgICBoZWlnaHQ6IGNvbF9ib3guaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgbGV0IHZlbCA9IHZlbG9jaXR5X21heChzdC52ZWxvY2l0eS54LGJveCxsaXN0LG9iLmlkLGRpcmVjdGlvbi5yaWdodCk7XHJcbiAgICBpZih2ZWwgPiAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueCArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS54ID0gMDsgIFxyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIGlmICh4X3ZlbCA8IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IHhfdmVsLzIgKyBjb2xfYm94LnggLSBjb2xfYm94LndpZHRoLzIsXHJcbiAgICAgIHk6IGNvbF9ib3gueSxcclxuICAgICAgd2lkdGg6IC0xICogeF92ZWwsXHJcbiAgICAgIGhlaWdodDogY29sX2JveC5oZWlnaHRcclxuICAgIH1cclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueCxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24ubGVmdCk7XHJcbiAgICBpZih2ZWwgPCAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueCArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS54ID0gMDsgXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICh5X3ZlbCA+IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IGNvbF9ib3gueCxcclxuICAgICAgeTogY29sX2JveC55ICsgY29sX2JveC5oZWlnaHQvMiArIHlfdmVsLzIsXHJcbiAgICAgIHdpZHRoOiBjb2xfYm94LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHlfdmVsXHJcbiAgICB9XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LnksYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLnVwKTtcclxuICAgIGlmKHZlbCA+IDApe1xyXG4gICAgICBzdC5wb3NpdGlvbi55ICs9IHZlbDtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHN0LnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIGlmICh5X3ZlbCA8IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IGNvbF9ib3gueCxcclxuICAgICAgeTogeV92ZWwvMiArIGNvbF9ib3gueSAtIGNvbF9ib3guaGVpZ2h0LzIsXHJcbiAgICAgIHdpZHRoOiBjb2xfYm94LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IC0xICogeV92ZWxcclxuICAgIH1cclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueSxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24uZG93bik7XHJcbiAgICBpZih2ZWwgPCAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueSArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS55ID0gMDtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQge2dhbWUsUEFVU0VELERFQlVHLERFQlVHX3YsIEdldFNjcmVlbkRpbWVuc2lvbnMsR2V0Vmlld3BvcnREaW1lbnNpb25zfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHtvYmp9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi9yZW5kZXJcIjtcclxuaW1wb3J0IHtwb3NpdGlvbn0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbmludGVyZmFjZSBtb3VzZVBvc3tcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBsYXN0OntcclxuICAgIHg6bnVtYmVyLFxyXG4gICAgeTpudW1iZXJcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBjb250cm9sX2Z1bmN7XHJcbiAgKCk6dm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgbW91c2VCaW5kc3tcclxuICBba2V5OnN0cmluZ106IEFycmF5PFtjb250cm9sX2Z1bmMsb2JqPHVua25vd24+XT5cclxufVxyXG5cclxuaW50ZXJmYWNlIGtleUJpbmRze1xyXG4gIFtrZXk6c3RyaW5nXTogQXJyYXk8Y29udHJvbF9mdW5jPlxyXG59XHJcbmxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfY2xpY2tfaGFuZGxlcihnYW1lOmdhbWU8dW5rbm93bj4pe1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PntcclxuICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZ2FtZS5zdGF0ZS5jYW52YXMsZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdKTtcclxuICAgIGxldCBib3g6Y29sbGlzaW9uX2JveCA9IHtcclxuICAgICAgeDptb3VzZS54LFxyXG4gICAgICB5Om1vdXNlLnksXHJcbiAgICAgIGhlaWdodDoxLFxyXG4gICAgICB3aWR0aDoxXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBERUJVR192Lmxhc3RfY2xpY2tlZCAmJiBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCBkLmxlbmd0aDthKyspe1xyXG4gICAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgICBpZihzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IFwibW91c2UxXCIgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWQub2JqICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgaWYoc2VsZWN0ZWQub2JqLmNvbGxpZGVzV2l0aEJveChib3gpKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gIFxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIERFQlVHX3YubGFzdF9jbGlja2VkICYmICBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJkb3duXCIpICAmJiAhc2VsZWN0ZWQuZXhlY3V0ZWQpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgICBzZWxlY3RlZC5yZXBlYXRfdGltZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJ1cFwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZXVwXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKSB7XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgIH1cclxuICAgZWxzZSBpZihzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcInVwXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNldXBcIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgbGV0IGcgPSBbLi4ucmVwZWF0X2JpbmRzXTtcclxuICAgICBmb3IobGV0IGEgPSAwOyBhIDwgZy5sZW5ndGg7YSsrKXtcclxuICAgICAgIGlmKGdbYV0uYmluZC5pZCA9PT0gc2VsZWN0ZWQuaWQpe1xyXG4gICAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICBnW2FdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICBicmVhaztcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuICB9XHJcbn0pXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcclxuICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIERFQlVHX3YubGFzdF9jbGlja2VkICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcInVwXCIpICAmJiAhc2VsZWN0ZWQuZXhlY3V0ZWQpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgICBzZWxlY3RlZC5yZXBlYXRfdGltZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJkb3duXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNlZG93blwiKSAmJiBzZWxlY3RlZC5leGVjdXRlZCAmJiBzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSkge1xyXG4gICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJkb3duXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNlZG93blwiKSAmJiBzZWxlY3RlZC5leGVjdXRlZCAmJiBzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgbGV0IGcgPSBbLi4ucmVwZWF0X2JpbmRzXTtcclxuICAgICAgZm9yKGxldCBhID0gMDsgYSA8IGcubGVuZ3RoO2ErKyl7XHJcbiAgICAgICAgaWYoZ1thXS5iaW5kLmlkID09PSBzZWxlY3RlZC5pZCl7XHJcbiAgICAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgZ1thXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmludGVyZmFjZSBoZWxkX2tleXN7XHJcbiAgW2luZGV4OnN0cmluZ106Ym9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGhlbGRfa2V5czpoZWxkX2tleXMgPSB7fTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwoZSk9PntcclxuICBsZXQgY29kZTpzdHJpbmc7XHJcblxyXG4gIGlmKGUuZGVsdGFZIDwgMCl7XHJcbiAgICBjb2RlID0gXCJzY3JvbGx1cFwiO1xyXG4gIH1cclxuICBlbHNlIGlmKGUuZGVsdGFZID4gMCl7XHJcbiAgICBjb2RlID0gXCJzY3JvbGxkb3duXCI7XHJcbiAgfVxyXG5cclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIERFQlVHX3YubGFzdF9jbGlja2VkICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBcclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSBjb2RlKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgaGVsZF9rZXlzW2UuY29kZV0gPSB0cnVlO1xyXG4gIGNvbnNvbGUubG9nKGFsbF9iaW5kcyk7XHJcbiAgY29uc29sZS5sb2cocmVwZWF0X2JpbmRzKTtcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIERFQlVHX3YubGFzdF9jbGlja2VkICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUua2V5Ym9hcmQgJiYgc2VsZWN0ZWQua2V5ID09PSBlLmNvZGUgICYmICFzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIGZvcihsZXQgYyBvZiByZXBlYXRfYmluZHMpe1xyXG4gICAgICAgICAgaWYoYy5iaW5kLmlkID09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgICAgYy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxufSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gIGhlbGRfa2V5c1tlLmNvZGVdID0gZmFsc2U7XHJcbiAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBERUJVR192Lmxhc3RfY2xpY2tlZCAmJiBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLmtleWJvYXJkICYmIHNlbGVjdGVkLmtleSA9PT0gZS5jb2RlICYmIHNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlICl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIGxldCBnID0gWy4uLnJlcGVhdF9iaW5kc107XHJcbiAgICAgICAgZm9yKGxldCBhID0gMDsgYSA8IGcubGVuZ3RoO2ErKyl7XHJcbiAgICAgICAgICBpZihnW2FdLmJpbmQuaWQgPT09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZ1thXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxubGV0IHRyYWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcclxuICB2YXIgcmVjdCA9IChlLnRhcmdldCBhcyBIVE1MQ2FudmFzRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgO1xyXG4gIFxyXG4gIGxhc3RfeCA9IHg7XHJcbiAgbGFzdF95ID0geTtcclxuICB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0OyAvL3ggcG9zaXRpb24gd2l0aGluIHRoZSBlbGVtZW50LlxyXG4gIHkgPSBlLmNsaWVudFkgLSByZWN0LnRvcDsgIC8veSBwb3NpdGlvbiB3aXRoaW4gdGhlIGVsZW1lbnQuXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGVudW0gYnR5cGV7XHJcbiAgbW91c2UsXHJcbiAga2V5Ym9hcmRcclxufVxyXG5cclxuaW50ZXJmYWNlIGJpbmR7XHJcbiAga2V5OnN0cmluZyxcclxuICB0eXBlOmJ0eXBlLFxyXG4gIGlkOm51bWJlcixcclxuICBmdW5jdGlvbjpjb250cm9sX2Z1bmMsXHJcbiAgZXhlY3V0ZTpleGVjX3R5cGUsXHJcbiAgcmVwZWF0X3RpbWVyPzpyZXBlYXRfYmluZCxcclxuICBvYmo/Om9iajx1bmtub3duPixcclxuICBleGVjdXRlZD86Ym9vbGVhbixcclxuICBpbnRlcnZhbD86bnVtYmVyLFxyXG4gIGNhbWVyYT86Q2FtZXJhXHJcbn1cclxuXHJcbmludGVyZmFjZSByZXBlYXRfYmluZHtcclxuICBiaW5kOmJpbmQsXHJcbiAgdGltZXI6bnVtYmVyLFxyXG4gIGludGVydmFsOm51bWJlcixcclxuICBhY3RpdmU6Ym9vbGVhblxyXG59XHJcblxyXG5sZXQgeCA9IDA7XHJcbmxldCB5ID0gMDtcclxubGV0IGxhc3RfeCA9IDA7XHJcbmxldCBsYXN0X3kgPSAwO1xyXG5sZXQgYmluZHM6a2V5QmluZHMgPSB7fTtcclxuZXhwb3J0IGxldCBkZWJ1Z19iaW5kczpiaW5kW10gPSBbXTtcclxubGV0IG1vdXNlQmluZHM6bW91c2VCaW5kcyA9IHt9O1xyXG5sZXQgYmluZF9jb3VudCA9IDA7XHJcblxyXG5sZXQgYWxsX2JpbmRzOkFycmF5PGJpbmQ+ID0gW11cclxuXHJcbmxldCByZXBlYXRfYmluZHM6QXJyYXk8cmVwZWF0X2JpbmQ+ID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9sbF9Nb3VzZShjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQsY2FtZXJhOkNhbWVyYSk6cG9zaXRpb257XHJcbiAgbGV0IGhlaWdodCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodDtcclxuICBsZXQgd3JhdGlvID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLndpZHRoKS9HZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aDtcclxuICBsZXQgdnJhdGlvID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmhlaWdodCkvR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0O1xyXG4gIHJldHVybiAoe1xyXG4gICAgeDogKCh4IC0gY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngpL3dyYXRpby9jYW1lcmEuc3RhdGUuc2NhbGluZyArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgvY2FtZXJhLnN0YXRlLnNjYWxpbmcvMikgLFxyXG4gICAgeTogKChoZWlnaHQgLSB5L3ZyYXRpbykvY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodC9jYW1lcmEuc3RhdGUuc2NhbGluZy8yIC0gY2FtZXJhLnN0YXRlLnZpZXdwb3J0LnkpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV4ZWN1dGVSZXBlYXRCaW5kcyhiOm51bWJlcil7XHJcbiAgZm9yKGxldCBhIG9mIHJlcGVhdF9iaW5kcyl7XHJcbiAgICBpZihhLmJpbmQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCAmJiBhLnRpbWVyID09IDAgJiYgYS5hY3RpdmUpe1xyXG4gICAgICBhLmJpbmQuZnVuY3Rpb24oKTtcclxuICAgIH1cclxuICAgIGlmKGEuYWN0aXZlIHx8ICghYS5hY3RpdmUgJiYgYS50aW1lciAhPSAwKSlcclxuICAgICAgYS50aW1lciArPSBiO1xyXG4gICAgaWYoYS50aW1lciA+IGEuaW50ZXJ2YWwpe1xyXG4gICAgICBhLnRpbWVyID0gMDsgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVW5iaW5kKGJpbmRfaWQ6bnVtYmVyKXtcclxuICBmb3IobGV0IGEgPSAwO2EgPCBhbGxfYmluZHMubGVuZ3RoOyBhKyspe1xyXG4gICAgaWYoYWxsX2JpbmRzW2FdLmlkID09IGJpbmRfaWQpe1xyXG4gICAgICBhbGxfYmluZHMuc3BsaWNlKGEsMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IobGV0IGEgPSAwO2EgPCByZXBlYXRfYmluZHMubGVuZ3RoOyBhKyspe1xyXG4gICAgaWYocmVwZWF0X2JpbmRzW2FdLmJpbmQuaWQgPT0gYmluZF9pZCl7XHJcbiAgICAgIHJlcGVhdF9iaW5kcy5zcGxpY2UoYSwxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBleGVjX3R5cGV7XHJcbiAgb25jZSxcclxuICByZXBlYXRcclxufVxyXG5cclxubGV0IGlkID0gMDtcclxuZXhwb3J0IGZ1bmN0aW9uIEJpbmQoa2V5bmFtZTpzdHJpbmcsZnVuYzpjb250cm9sX2Z1bmMsdHlwZTpleGVjX3R5cGUsaW50ZXJ2YWw6bnVtYmVyLG9iamVjdD86b2JqPHVua25vd24+KTpudW1iZXJ7XHJcbiAgaWYoa2V5bmFtZS5zbGljZSgwLDUpID09PSBcIm1vdXNlXCIpe1xyXG4gICAgbGV0IGI6YmluZCA9IHtcclxuICAgICAga2V5OmtleW5hbWUsXHJcbiAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgIGlkLFxyXG4gICAgICBmdW5jdGlvbjpmdW5jLFxyXG4gICAgICBvYmo6b2JqZWN0LFxyXG4gICAgICBleGVjdXRlOnR5cGUsXHJcbiAgICAgIGV4ZWN1dGVkOmZhbHNlLFxyXG4gICAgICBpbnRlcnZhbFxyXG4gICAgfTtcclxuICAgIGlmKHR5cGUgPT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgIGIucmVwZWF0X3RpbWVyID0ge1xyXG4gICAgICAgIGJpbmQ6YixcclxuICAgICAgICB0aW1lcjowLFxyXG4gICAgICAgIGludGVydmFsLFxyXG4gICAgICAgIGFjdGl2ZTpmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHJlcGVhdF9iaW5kcy5wdXNoKGIucmVwZWF0X3RpbWVyKTtcclxuICAgIH1cclxuICAgIGFsbF9iaW5kcy5wdXNoKGIpO1xyXG5cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGxldCBiOmJpbmQgPSB7XHJcbiAgICAgIGtleTprZXluYW1lLFxyXG4gICAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgICBpZCxcclxuICAgICAgZnVuY3Rpb246ZnVuYyxcclxuICAgICAgZXhlY3V0ZTp0eXBlLFxyXG4gICAgICBleGVjdXRlZDpmYWxzZSxcclxuICAgICAgaW50ZXJ2YWxcclxuICAgIH1cclxuICAgIGlmKHR5cGUgPT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgIGIucmVwZWF0X3RpbWVyID0ge1xyXG4gICAgICAgIGJpbmQ6YixcclxuICAgICAgICB0aW1lcjowLFxyXG4gICAgICAgIGludGVydmFsLFxyXG4gICAgICAgIGFjdGl2ZTpmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHJlcGVhdF9iaW5kcy5wdXNoKGIucmVwZWF0X3RpbWVyKTtcclxuICAgIH1cclxuICAgIGFsbF9iaW5kcy5wdXNoKGIpO1xyXG4gIH1cclxuICBpZCsrO1xyXG4gIHJldHVybiBpZCAtIDE7XHJcbn0iLCJpbXBvcnQgeyBvYmogfSBmcm9tIFwiLi9vYmplY3RcIjtcclxubGV0IHsgaXBjUmVuZGVyZXJ9ID0gd2luZG93LnJlcXVpcmUoXCJlbGVjdHJvblwiKTtcclxuY29uc3QgcGF0aCA9IHdpbmRvdy5yZXF1aXJlKFwicGF0aFwiKTtcclxubGV0IGZzID0gd2luZG93LnJlcXVpcmUoXCJmc1wiKTtcclxuXHJcbmltcG9ydCB7cHJvamVjdF9wYXRofSBmcm9tIFwiLi4vdmFuXCI7XHJcbmV4cG9ydCBsZXQgZGVidWdfc2V0dXAgPSAoKSA9PiB7XHJcbiAgbGV0IG9ial9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19vYmplY3RfYnV0dG9uXCIpO1xyXG4gIGxldCByb29tX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Jvb21fYnV0dG9uXCIpO1xyXG4gIG9ial9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XHJcbiAgICBsZXQgb2JqZWN0X3BhdGggPSBwYXRoLmpvaW4oYCR7cHJvamVjdF9wYXRofWAsXCIuLlwiLFwib2JqZWN0c1wiKTtcclxuICAgIGxldCBmaWxlX3BhdGggPSBpcGNSZW5kZXJlci5zZW5kU3luYygnb2JqZWN0LXBhdGgtcmVxdWVzdCcsIG9iamVjdF9wYXRoKTtcclxuICAgIFxyXG4gICAgbGV0IGZ1bGxfbmFtZSA9IHBhdGgucGFyc2UoZmlsZV9wYXRoKS5iYXNlO1xyXG4gICAgbGV0IG5ld19uYW1lID0gZnVsbF9uYW1lLnN1YnN0cigwLGZ1bGxfbmFtZS5sZW5ndGggLSAzKTtcclxuICAgIFxyXG4gICAgbGV0IHBhdGhfdG9fd3JpdGUgPSBwYXRoLmpvaW4oYCR7ZmlsZV9wYXRofWAsXCIuLlwiLG5ld19uYW1lK1wiLnRzXCIpO1xyXG4gICAgZnMud3JpdGVGaWxlU3luYyhwYXRoX3RvX3dyaXRlLGBcclxuICAgIFxyXG4gICAgaW1wb3J0IHtvYmp9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbiAgICBpbXBvcnQgeyBvYmpfc3RhdGUsIHBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG4gICAgXHJcbiAgICBpbnRlcmZhY2UgJHtuZXdfbmFtZX1fc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW50ZXJmYWNlICR7bmV3X25hbWV9X3BhcmFtZXRlcnN7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzICR7bmV3X25hbWV9IGV4dGVuZHMgb2JqPCR7bmV3X25hbWV9X3N0YXRlPntcclxuICAgICAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL0Vycm9yLnBuZ1wiO1xyXG4gICAgICBoZWlnaHQgPSAxMDA7XHJcbiAgICAgIHdpZHRoID0gMTAwO1xyXG4gICAgICB0YWdzOkFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICAgICAgcmVuZGVyID0gdHJ1ZTtcclxuICAgICAgcm90YXRpb24gPSAwO1xyXG4gICAgICBzY2FsaW5nID0gMTtcclxuICAgICAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOiR7bmV3X25hbWV9X3BhcmFtZXRlcnMgPSB7fVxyXG4gICAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjpwb3NpdGlvbixyb3RhdGlvbjpudW1iZXIsc2NhbGluZzpudW1iZXIscGFyYW1zOiR7bmV3X25hbWV9X3BhcmFtZXRlcnMgPSAke25ld19uYW1lfS5kZWZhdWx0X3BhcmFtcyl7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24scm90YXRpb24sc2NhbGluZyxwYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjpwb3NpdGlvbixcclxuICAgICAgICAgIHZlbG9jaXR5OntcclxuICAgICAgICAgICAgeDowLFxyXG4gICAgICAgICAgICB5OjBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGVmKHRpbWVfZGVsdGE6bnVtYmVyKXtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlcmYodGltZV9kZWx0YTpudW1iZXIpe1xyXG4gICAgICAgcmV0dXJuIHN1cGVyLnJlbmRlcmYodGltZV9kZWx0YSk7IFxyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdGVyX2FuaW1hdGlvbnMoKXtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdGVyX2F1ZGlvKCl7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICByZWdpc3Rlcl9jb250cm9scygpe1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGApXHJcbiAgICAvL2lwY1JlbmRlcmVyLnNlbmRTeW5jKCdjb21waWxlLXByb21wdCcsICdwaW5nJylcclxuICB9KVxyXG59IiwiaW1wb3J0IHtvYmp9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBHb29tYmEgfSBmcm9tIFwiLi4vZ2FtZS9vYmplY3RzL0dvb21iYVwiO1xyXG5cclxuaW50ZXJmYWNlIEh1ZFRleHRHZXRGdW5je1xyXG4gICgpOnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRTZXR0aW5ne1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyLFxyXG4gIGZvbnQ6Rm9udFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvbnR7XHJcbiAgbWF4X3dpZHRoPzpudW1iZXIsXHJcbiAgc2l6ZTpudW1iZXIsXHJcbiAgZm9udDpzdHJpbmcsXHJcbiAgY29sb3I6c3RyaW5nLFxyXG4gIHRleHQ6c3RyaW5nLFxyXG4gIGFsaWduOkNhbnZhc1RleHRBbGlnblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRfTm9kZXtcclxuICBtYXhfd2lkdGg/Om51bWJlcixcclxuICBwb3NpdGlvbjp7XHJcbiAgICB4Om51bWJlcixcclxuICAgIHk6bnVtYmVyXHJcbiAgfVxyXG4gIHNpemU6bnVtYmVyO1xyXG4gIHNjYWxpbmc6bnVtYmVyO1xyXG4gIGZvbnQ6c3RyaW5nO1xyXG4gIGNvbG9yOnN0cmluZztcclxuICB0ZXh0PzpzdHJpbmc7XHJcbiAgYWxpZ24/OkNhbnZhc1RleHRBbGlnbjtcclxufVxyXG5leHBvcnQgY2xhc3MgSFVEe1xyXG4gIGdyYXBoaWNfZWxlbWVudHM6QXJyYXk8b2JqPHVua25vd24+PiA9IFtdO1xyXG4gIHRleHRfZWxlbWVudHM6QXJyYXk8VGV4dD4gPSBbXTtcclxuICBzdGF0ZWYoYTpudW1iZXIpe1xyXG4gICAgZm9yKGxldCB4IG9mIHRoaXMuZ3JhcGhpY19lbGVtZW50cyl7XHJcbiAgICAgIHguc3RhdGVmKGEpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCB4IG9mIHRoaXMudGV4dF9lbGVtZW50cyl7XHJcbiAgICAgIHguc3RhdGVmKGEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR7XHJcbiAgZ2V0X2Z1bmM6SHVkVGV4dEdldEZ1bmM7XHJcbiAgc3RhdGU6VGV4dF9Ob2RlO1xyXG4gIGNvbnN0cnVjdG9yKGE6VGV4dF9Ob2RlLGI6SHVkVGV4dEdldEZ1bmMpe1xyXG4gICAgaWYoIWEuYWxpZ24pe1xyXG4gICAgICBhLmFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSBhO1xyXG4gICAgaWYoIXRoaXMuc3RhdGUudGV4dCl7XHJcbiAgICAgIHRoaXMuc3RhdGUudGV4dCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdldF9mdW5jID0gYjtcclxuICB9XHJcbiAgc3RhdGVmKGE6bnVtYmVyKXtcclxuICAgdGhpcy5zdGF0ZS50ZXh0ID0gdGhpcy5nZXRfZnVuYygpO1xyXG4gIH1cclxuICByZW5kZXJmKGE6bnVtYmVyKTpGb250e1xyXG4gICAgbGV0IHtzaXplLGNvbG9yLGZvbnQsdGV4dCxtYXhfd2lkdGgsYWxpZ259ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNpemUsXHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBmb250LFxyXG4gICAgICB0ZXh0LFxyXG4gICAgICBtYXhfd2lkdGgsXHJcbiAgICAgIGFsaWduXHJcbiAgICB9O1xyXG4gIH1cclxufSIsImltcG9ydCB7cG9zaXRpb259IGZyb20gXCIuL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGlzdGFuY2UoYTpwb3NpdGlvbixiOnBvc2l0aW9uKXtcclxuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGEueCAtIGIueCwyKSArIE1hdGgucG93KGEueSAtIGIueSwyKSk7XHJcbn0iLCJpbXBvcnQgeyBzdGF0ZV9mdW5jLCBvYmpfc3RhdGUsIHBvc2l0aW9uIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgcmVuZGVyX2Z1bmMsIHJlbmRlcl90eXBlIH0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlLCBwb3NpdGlvbmVkX3Nwcml0ZSwgc3ByaXRlLCBzcHJpdGVfZ2VuIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgVW5iaW5kLCBCaW5kLCBjb250cm9sX2Z1bmMsIGV4ZWNfdHlwZSB9IGZyb20gXCIuL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7YXVkaW99IGZyb20gXCIuL2F1ZGlvXCI7XHJcbmltcG9ydCB7Z2FtZX0gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQgeyBEaXN0YW5jZSB9IGZyb20gXCIuL21hdGhcIjtcclxuXHJcbmludGVyZmFjZSBvYmpfaTxUPiB7XHJcbiAgc3RhdGVmOiBzdGF0ZV9mdW5jPFQ+LFxyXG4gIHJlbmRlcmY6IHJlbmRlcl9mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGlvbl9sZW5ndGgobGVuZ3RoOiBudW1iZXIsIGRlZ3JlZTogbnVtYmVyKSB7XHJcbiAgbGV0IGFfbGVuID0gbGVuZ3RoICogTWF0aC5zaW4oZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgbGV0IGJfbGVuID0gbGVuZ3RoICogTWF0aC5jb3MoZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHg6IGFfbGVuLFxyXG4gICAgeTogYl9sZW5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJZChhOiBBcnJheTxvYmo8dW5rbm93bj4+LCBpZDogc3RyaW5nKTogb2JqPHVua25vd24+IHtcclxuICBmb3IgKGxldCBiID0gMDsgYiA8IGEubGVuZ3RoOyBiKyspIHtcclxuICAgIGlmIChhW2JdLmlkID09IGlkKSB7XHJcbiAgICAgIHJldHVybiBhW2JdO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5sZXQgY291bnRlciA9IDA7XHJcblxyXG5pbnRlcmZhY2UgYW5pbV9zdG9yYWdlIHtcclxuICBbaW5kZXg6IHN0cmluZ106IFtBcnJheTxbbnVtYmVyLCBzcHJpdGVdPiwgbnVtYmVyXVxyXG59XHJcblxyXG5pbnRlcmZhY2Ugdm9pZF9mdW5jIHtcclxuICAoKTogdm9pZFxyXG59XHJcblxyXG5jbGFzcyBhbmltYXRpb25zIHtcclxuICBhbmltYXRpb25zOiBhbmltX3N0b3JhZ2UgPSB7fTtcclxuICBhbmltYXRpb25fdHJhY2tlciA9IDA7XHJcbiAgY3VycmVudDogc3RyaW5nO1xyXG4gIGNhbGxiYWNrOiB2b2lkX2Z1bmM7XHJcbiAgYW5pbWF0aW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuICBhZGQobmFtZTogc3RyaW5nLCBzOiBBcnJheTxbbnVtYmVyLCBzcHJpdGVdPiwgbGVuZ3RoOiBudW1iZXIpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IFtzLCBsZW5ndGhdO1xyXG4gIH1cclxuICBwbGF5KG5hbWU6IHN0cmluZywgY2FsbGJhY2s/OiB2b2lkX2Z1bmMpIHtcclxuICAgIHRoaXMuY3VycmVudCA9IG5hbWU7XHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB0aGlzLmFuaW1hdGlvbl90cmFja2VyID0gMDtcclxuICB9XHJcbiAgcmVuZGVyZih0OiBudW1iZXIpOiBzcHJpdGUge1xyXG4gICAgbGV0IGN1cnJfYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25zW3RoaXMuY3VycmVudF1bMF07XHJcbiAgICBsZXQgbGVuZ3RoOiBudW1iZXIgPSB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50XVsxXTtcclxuICAgIGxldCBpbmRleDtcclxuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGN1cnJfYW5pbWF0aW9uLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcclxuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPj0gY3Vycl9hbmltYXRpb25baW5kZXhdWzBdICYmIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPCBjdXJyX2FuaW1hdGlvbltpbmRleCArIDFdWzBdKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciA9IHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgKyB0O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gY3Vycl9hbmltYXRpb25baW5kZXhdWzFdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xyXG4gICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPj0gbGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgKz0gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBjdXJyX2FuaW1hdGlvbltpbmRleF1bMV07XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgaGl0Ym94e1xyXG4gIHdpZHRoOm51bWJlcixcclxuICBoZWlnaHQ6bnVtYmVyLFxyXG4gIHhfb2Zmc2V0Om51bWJlcixcclxuICB5X29mZnNldDpudW1iZXJcclxufVxyXG5cclxuZW51bSBSZW5kZXJUeXBle1xyXG4gIGJveCxcclxuICBzcHJpdGVcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIG9iajxUPntcclxuICBzcHJpdGVfdXJsID0gXCJcIjtcclxuICBzcHJpdGVfc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgc3RhdGU6IFQ7XHJcbiAgcmVuZGVyX3R5cGUgPSByZW5kZXJfdHlwZS5zcHJpdGU7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBjb2xsaXNpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBoaXRib3g6IGhpdGJveFxyXG4gIGlkOiBzdHJpbmc7XHJcbiAgYmluZHM6IEFycmF5PG51bWJlcj47XHJcbiAgdGFnczpzdHJpbmdbXSA9IFtdO1xyXG4gIHJvdGF0aW9uOiBudW1iZXIgPSAwO1xyXG4gIHJlbmRlciA9IHRydWU7XHJcbiAgYW5pbWF0aW9ucyA9IG5ldyBhbmltYXRpb25zKCk7XHJcbiAgYXVkaW8gPSBuZXcgYXVkaW8oKTtcclxuICBsYXN0X3JlbmRlcjpudW1iZXIgPSAwO1xyXG4gIGdhbWU6Z2FtZTx1bmtub3duPjtcclxuICBwYXJlbnQ6Y29tcG9zaXRlX29iajx1bmtub3duPjtcclxuICBzY2FsaW5nOm51bWJlciA9IDE7XHJcbiAgcGFyYW1zOnVua25vd24gPSB7fTtcclxuICBzdGF0aWMgZGVmYXVsdF9wYXJhbXM6dW5rbm93biA9IHt9O1xyXG4gIGdldFN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2FuaW1hdGlvbnMoKSB7XHJcblxyXG4gIH1cclxuICByZWdpc3Rlcl9hdWRpbygpIHtcclxuXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uOnBvc2l0aW9uLHJvdGF0aW9uOm51bWJlciA9IDAsc2NhbGluZzpudW1iZXIgPSAxLHBhcmFtcyA9IG9iai5kZWZhdWx0X3BhcmFtcykge1xyXG4gICAgXHJcbiAgICB0aGlzLmlkID0gXCJcIiArIGNvdW50ZXI7XHJcbiAgICB0aGlzLmJpbmRzID0gW107XHJcbiAgICBjb3VudGVyKys7XHJcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcclxuICAgIHRoaXMucmVnaXN0ZXJfY29udHJvbHMoKTtcclxuICAgIHRoaXMucmVnaXN0ZXJfYXVkaW8oKTtcclxuICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcclxuICAgIHRoaXMuc2NhbGluZyA9IHNjYWxpbmc7XHJcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcclxuICB9XHJcbiAgbG9hZCgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgYSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBhLnNyYyA9IHRoaXMuc3ByaXRlX3VybDtcclxuICAgICAgYS5vbmxvYWQgPSAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIF90aGlzLnNwcml0ZV9zaGVldCA9IGE7XHJcbiAgICAgICAgX3RoaXMucmVnaXN0ZXJfYW5pbWF0aW9ucygpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXVkaW8ubG9hZCgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICBjb21iaW5lZF9vYmplY3RzKCk6b2JqPHVua25vd24+W117XHJcbiAgICByZXR1cm4gW3RoaXNdO1xyXG4gIH1cclxuICBkaXN0YW5jZShhOm9iajx1bmtub3duPik6bnVtYmVye1xyXG4gICAgbGV0IG9fc3QgPSBhLnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgbGV0IHN0ID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIHJldHVybiBEaXN0YW5jZShzdC5wb3NpdGlvbixvX3N0LnBvc2l0aW9uKTtcclxuICB9XHJcbiAgYW5nbGVUb3dhcmRzKGE6IG9iajx1bmtub3duPik6IG51bWJlciB7XHJcbiAgICBsZXQgYiA9IGEgYXMgb2JqPG9ial9zdGF0ZT47XHJcbiAgICByZXR1cm4gdGhpcy5hbmdsZVRvd2FyZHNQb2ludChiLnN0YXRlLnBvc2l0aW9uKTtcclxuICB9XHJcbiAgYW5nbGVUb3dhcmRzUG9pbnQocG9zaXRpb246cG9zaXRpb24pOm51bWJlcntcclxuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICBpZiAoc3RhdGUucG9zaXRpb24ueCA8IHBvc2l0aW9uLnggJiYgc3RhdGUucG9zaXRpb24ueSA+IHBvc2l0aW9uLnlcclxuICAgICAgfHwgKHN0YXRlLnBvc2l0aW9uLnggPCBwb3NpdGlvbi54ICYmIHN0YXRlLnBvc2l0aW9uLnkgPCBwb3NpdGlvbi55KSkge1xyXG4gICAgICByZXR1cm4gOTAgLSBNYXRoLmF0YW4oKHBvc2l0aW9uLnkgLSBzdGF0ZS5wb3NpdGlvbi55KSAvIChwb3NpdGlvbi54IC0gc3RhdGUucG9zaXRpb24ueCkpICogMTgwIC8gTWF0aC5QSVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXRlLnBvc2l0aW9uLnggPiBwb3NpdGlvbi54ICYmIHN0YXRlLnBvc2l0aW9uLnkgPCBwb3NpdGlvbi55XHJcbiAgICAgIHx8IHN0YXRlLnBvc2l0aW9uLnggPiBwb3NpdGlvbi54ICYmIHN0YXRlLnBvc2l0aW9uLnkgPiBwb3NpdGlvbi55KSB7XHJcbiAgICAgIHJldHVybiAyNzAgLSBNYXRoLmF0YW4oKHBvc2l0aW9uLnkgLSBzdGF0ZS5wb3NpdGlvbi55KSAvIChwb3NpdGlvbi54IC0gc3RhdGUucG9zaXRpb24ueCkpICogMTgwIC8gTWF0aC5QSVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIGJpbmRDb250cm9sKGtleTogc3RyaW5nLCB4OiBleGVjX3R5cGUsIGZ1bmM6IGNvbnRyb2xfZnVuYywgaW50ZXJ2YWwgPSAxKSB7XHJcbiAgICBpZiAoa2V5ID09IFwibW91c2UxXCIpIHtcclxuICAgICAgbGV0IGIgPSBCaW5kKGtleSwgZnVuYywgeCwgaW50ZXJ2YWwsIHRoaXMpO1xyXG4gICAgICB0aGlzLmJpbmRzLnB1c2goYik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5iaW5kcy5wdXNoKEJpbmQoa2V5LCBmdW5jLCB4LCBpbnRlcnZhbCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWdpc3Rlcl9jb250cm9scygpe1xyXG5cclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6bnVtYmVyKXtcclxuXHJcbiAgfVxyXG4gIGRlbGV0ZSgpIHtcclxuICAgIGZvciAobGV0IGEgb2YgdGhpcy5iaW5kcykge1xyXG4gICAgICBVbmJpbmQoYSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWUuZ2V0Um9vbSgpLmRlbGV0ZUl0ZW0odGhpcy5pZCk7XHJcbiAgfVxyXG4gIFVuYmluZEFsbCgpe1xyXG4gICAgZm9yIChsZXQgYSBvZiB0aGlzLmJpbmRzKSB7XHJcbiAgICAgIFVuYmluZChhKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29sbGlzaW9uQ2hlY2soYTogY29sbGlzaW9uX2JveCk6IEFycmF5PG9iajx1bmtub3duPj4ge1xyXG4gICAgaWYgKHRoaXMuY29sbGlzaW9uKSB7XHJcbiAgICAgIGxldCByb29tID0gdGhpcy5nYW1lLmdldFJvb20oKTtcclxuICAgICAgcmV0dXJuIHJvb20uY2hlY2tfY29sbGlzaW9ucyhhLCBbdGhpcy5pZF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICBnZXRGdWxsQ29sbGlzaW9uQm94KCk6Y29sbGlzaW9uX2JveHtcclxuICAgIGxldCBzdCA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICBpZih0aGlzLmhpdGJveCl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDpzdC5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6c3QucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDp0aGlzLmhpdGJveC53aWR0aCAqIHRoaXMuc2NhbGluZyxcclxuICAgICAgICBoZWlnaHQ6dGhpcy5oaXRib3guaGVpZ2h0ICogdGhpcy5zY2FsaW5nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDpzdC5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6c3QucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDp0aGlzLndpZHRoICogdGhpcy5zY2FsaW5nLFxyXG4gICAgICAgIGhlaWdodDp0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGluZ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEFsbENvbGxpc2lvbkJveGVzKCk6Y29sbGlzaW9uX2JveFtde1xyXG4gICAgbGV0IHN0ID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGlmKHRoaXMuaGl0Ym94KXtcclxuICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgeDpzdC5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6c3QucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDp0aGlzLmhpdGJveC53aWR0aCAqIHRoaXMuc2NhbGluZyxcclxuICAgICAgICBoZWlnaHQ6dGhpcy5oaXRib3guaGVpZ2h0ICogdGhpcy5zY2FsaW5nXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4gW3tcclxuICAgICAgICB4OnN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTpzdC5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOnRoaXMud2lkdGggKiB0aGlzLnNjYWxpbmcsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsaW5nXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbGxpZGVzV2l0aEJveChhOiBjb2xsaXNpb25fYm94KTogYm9vbGVhbiB7XHJcbiAgICBsZXQgc3QgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgbGV0IGhjb2xsaWRlcyA9IGZhbHNlLCB2Y29sbGlkZXMgPSBmYWxzZTtcclxuICAgIGxldCBoYm94ID0gdGhpcy5oaXRib3g7XHJcbiAgICBpZighdGhpcy5oaXRib3gpe1xyXG4gICAgICBoYm94ID0ge1xyXG4gICAgICAgIHhfb2Zmc2V0OjAsXHJcbiAgICAgICAgeV9vZmZzZXQ6MCxcclxuICAgICAgICB3aWR0aDp0aGlzLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDp0aGlzLmhlaWdodFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgb2IgPSB7XHJcbiAgICAgIGxlZnQ6IChzdC5wb3NpdGlvbi54ICsgaGJveC54X29mZnNldCAtIGhib3gud2lkdGggKiB0aGlzLnNjYWxpbmcgLyAyKSxcclxuICAgICAgcmlnaHQ6IChzdC5wb3NpdGlvbi54ICsgaGJveC54X29mZnNldCArIGhib3gud2lkdGggKiB0aGlzLnNjYWxpbmcgLyAyKSxcclxuICAgICAgdG9wOiAoc3QucG9zaXRpb24ueSArIGhib3gueV9vZmZzZXQgKyBoYm94LmhlaWdodCAqIHRoaXMuc2NhbGluZyAvIDIpLFxyXG4gICAgICBib3R0b206IChzdC5wb3NpdGlvbi55ICsgaGJveC55X29mZnNldCAtIGhib3guaGVpZ2h0ICogdGhpcy5zY2FsaW5nIC8gMilcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICBsZWZ0OiAoYS54IC0gYS53aWR0aCAvIDIpLFxyXG4gICAgICByaWdodDogKGEueCArIGEud2lkdGggLyAyKSxcclxuICAgICAgdG9wOiAoYS55ICsgYS5oZWlnaHQgLyAyKSxcclxuICAgICAgYm90dG9tOiAoYS55IC0gYS5oZWlnaHQgLyAyKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgob2IubGVmdCA+PSBib3gubGVmdCAmJiBvYi5sZWZ0IDwgYm94LnJpZ2h0KSB8fCAoYm94LmxlZnQgPiBvYi5sZWZ0ICYmIGJveC5sZWZ0IDwgb2IucmlnaHQpKSB7XHJcbiAgICAgIGhjb2xsaWRlcyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoKG9iLmJvdHRvbSA+PSBib3guYm90dG9tICYmIG9iLmJvdHRvbSA8IGJveC50b3ApIHx8IChib3guYm90dG9tID4gb2IuYm90dG9tICYmIGJveC5ib3R0b20gPCBvYi50b3ApKXtcclxuICAgICAgdmNvbGxpZGVzID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBoY29sbGlkZXMgJiYgdmNvbGxpZGVzO1xyXG4gIH1cclxuICBlbWl0X3BhcnRpY2xlKG5hbWU6c3RyaW5nLG9mZnNldDpwb3NpdGlvbixsaWZldGltZTpudW1iZXIscmFuZ2U6bnVtYmVyKXtcclxuICAgIGxldCByb29tID0gdGhpcy5nYW1lLmdldFJvb20oKTtcclxuICAgIGxldCBzdCA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICBsZXQgZmluYWxfcG9zaXRpb246cG9zaXRpb24gPSB7XHJcbiAgICAgIHg6c3QucG9zaXRpb24ueCArIG9mZnNldC54LFxyXG4gICAgICB5OnN0LnBvc2l0aW9uLnkgKyBvZmZzZXQueVxyXG4gICAgfVxyXG4gICAgcm9vbS5lbWl0X3BhcnRpY2xlKG5hbWUsZmluYWxfcG9zaXRpb24sbGlmZXRpbWUscmFuZ2UpXHJcbiAgfVxyXG4gIHJlbmRlcl90cmFjayh0aW1lOm51bWJlcik6IHBvc2l0aW9uZWRfc3ByaXRlW10ge1xyXG4gICAgbGV0IHJlbmRlcmVkID0gdGhpcy5yZW5kZXJmKHRpbWUgLSB0aGlzLmxhc3RfcmVuZGVyKTtcclxuICAgIGxldCBmaW5hbDpwb3NpdGlvbmVkX3Nwcml0ZVtdO1xyXG4gICAgdGhpcy5sYXN0X3JlbmRlciA9IHRpbWU7XHJcbiAgICBpZihBcnJheS5pc0FycmF5KHJlbmRlcmVkKSlcclxuICAgICAgZmluYWwgPSByZW5kZXJlZFxyXG4gICAgZWxzZXtcclxuICAgICAgZmluYWwgPSBbcmVuZGVyZWRdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmluYWw7XHJcbiAgfVxyXG4gIHJlbmRlcmYodGltZTogbnVtYmVyKTogcG9zaXRpb25lZF9zcHJpdGVbXSB8IHBvc2l0aW9uZWRfc3ByaXRle1xyXG4gICAgbGV0IHN0ID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmFuaW1hdGlvbnMuYW5pbWF0aW9ucykubGVuZ3RoID09IDAgfHwgIXRoaXMuYW5pbWF0aW9ucy5jdXJyZW50KSB7XHJcbiAgICAgIGlmKCF0aGlzLnNwcml0ZV9zaGVldCB8fCAhdGhpcy5oZWlnaHQgfHwgIXRoaXMud2lkdGgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzcHJpdGU6dW5kZWZpbmVkLFxyXG4gICAgICAgICAgeDpzdC5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgeTpzdC5wb3NpdGlvbi55XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBzcHJpdGVfaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgIGxldCBzcHJpdGVfd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICBpZiAodGhpcy5oZWlnaHQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3ByaXRlX2hlaWdodCA9IHRoaXMuc3ByaXRlX3NoZWV0LmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy53aWR0aCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzcHJpdGVfd2lkdGggPSB0aGlzLnNwcml0ZV9zaGVldC53aWR0aDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgc3ByaXRlX3NoZWV0OiB0aGlzLnNwcml0ZV9zaGVldCxcclxuICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICBzcHJpdGVfd2lkdGg6IHNwcml0ZV93aWR0aCxcclxuICAgICAgICAgIHNwcml0ZV9oZWlnaHQ6IHNwcml0ZV9oZWlnaHQsXHJcbiAgICAgICAgICBvcGFjaXR5OjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHg6IHN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTogc3QucG9zaXRpb24ueVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3ByaXRlOnRoaXMuYW5pbWF0aW9ucy5yZW5kZXJmKHRpbWUpLFxyXG4gICAgICB4OiBzdC5wb3NpdGlvbi54LFxyXG4gICAgICB5OiBzdC5wb3NpdGlvbi55XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGNvbXBvc2l0ZV9zdGF0aWN7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgb2JqOm9iajx1bmtub3duPlxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgY29tcG9zaXRlX29iajxUPiBleHRlbmRzIG9iajxUPntcclxuICBvYmplY3RzOm9iajx1bmtub3duPltdID0gW107XHJcbiAgcmVuZGVyID0gZmFsc2U7XHJcbiAgcmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG4gIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gIHN0YXRpY3M6Y29tcG9zaXRlX3N0YXRpY1tdID0gW107XHJcbiAgY29uc3RydWN0b3IocG9zOnBvc2l0aW9uKXtcclxuICAgIHN1cGVyKHBvcyk7XHJcbiAgfVxyXG4gIGxvYWQoKXtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChbLi4udGhpcy5vYmplY3RzLm1hcCgoYSk9PmEubG9hZCgpKSwuLi50aGlzLnN0YXRpY3MubWFwKGE9PmEub2JqLmxvYWQoKSldKTtcclxuICB9XHJcbiAgY29tYmluZWRfb2JqZWN0cygpOm9iajx1bmtub3duPltde1xyXG4gICAgbGV0IGNvbWJpbmVkID0gWy4uLnRoaXMub2JqZWN0cywuLi50aGlzLnN0YXRpY3MubWFwKGE9PmEub2JqKV07XHJcbiAgICBjb21iaW5lZC5mb3JFYWNoKGE9PmEucGFyZW50ID0gdGhpcyk7XHJcbiAgICByZXR1cm4gWy4uLmNvbWJpbmVkLHRoaXNdO1xyXG4gIH1cclxuICBnZXRfSXRlbXNfYnlfVGFnKHRhZzpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIHRoaXMuY29tYmluZWRfb2JqZWN0cygpLmZpbHRlcigoYSk9PmEudGFncy5pbmRleE9mKHRhZykgPiAtMSk7XHJcbiAgfVxyXG4gIGFkZF9JdGVtKGE6b2JqPHVua25vd24+LGxpc3Q9dGhpcy5vYmplY3RzKXtcclxuICAgIGxpc3QucHVzaChhKTtcclxuICAgIGEucGFyZW50ID0gdGhpcztcclxuICAgIHRoaXMuZ2FtZS5nZXRSb29tKCkuYWRkSXRlbShhKTtcclxuICB9XHJcbiAgZ2V0QWxsQ29sbGlzaW9uQm94ZXMoKTpjb2xsaXNpb25fYm94W117XHJcbiAgICBsZXQgYXJyOmNvbGxpc2lvbl9ib3hbXSA9IFtdO1xyXG4gICAgZm9yKGxldCBvYmogb2YgWy4uLnRoaXMuc3RhdGljcy5tYXAoYT0+YS5vYmopLC4uLnRoaXMub2JqZWN0c10pe1xyXG4gICAgICBsZXQgY3JlYXRlZF9ib3ggPSBvYmouZ2V0QWxsQ29sbGlzaW9uQm94ZXMoKTtcclxuICAgICAgaWYoQXJyYXkuaXNBcnJheShjcmVhdGVkX2JveCkpe1xyXG4gICAgICAgIGFyci5wdXNoKC4uLmNyZWF0ZWRfYm94KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIGFyci5wdXNoKGNyZWF0ZWRfYm94KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxuICB9XHJcbiAgZGVsZXRlKCl7XHJcbiAgICBmb3IobGV0IGEgb2YgdGhpcy5vYmplY3RzKXtcclxuICAgICAgYS5kZWxldGUoKTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSBvZiB0aGlzLnN0YXRpY3Mpe1xyXG4gICAgICBhLm9iai5kZWxldGUoKTtcclxuICAgIH1cclxuICAgIHN1cGVyLmRlbGV0ZSgpO1xyXG4gIH1cclxuICBjb2xsaWRlc1dpdGhCb3goYTogY29sbGlzaW9uX2JveCk6Ym9vbGVhbntcclxuICAgIGZvcihsZXQgb2JqIG9mIHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGlmKG9iai5jb2xsaWRlc1dpdGhCb3goYSkpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IG8gb2YgdGhpcy5zdGF0aWNzKXtcclxuICAgICAgaWYoby5vYmouY29sbGlkZXNXaXRoQm94KGEpKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIHN0YXRpY19vYmoge1xyXG4gIHNwcml0ZV91cmwgPSBcIlwiO1xyXG4gIHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIGdyYXZpdHlfb2JqPFQ+IGV4dGVuZHMgb2JqPFQ+e1xyXG4gIGdyYXZpdHkgPSB0cnVlXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UmFuZEludChtaW46bnVtYmVyLCBtYXg6bnVtYmVyKSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICkgKyBtaW47XHJcbn0iLCJpbXBvcnQgeyBzcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgR2V0Vmlld3BvcnREaW1lbnNpb25zIH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQgeyBvYmogfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgb2JqX3N0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgVGV4dF9Ob2RlLCBUZXh0U2V0dGluZyxIVUQsVGV4dCB9IGZyb20gXCIuL2h1ZFwiO1xyXG5pbXBvcnQge3Bvc2l0aW9uZWRfc3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVcIlxyXG5cclxuaW50ZXJmYWNlIGNhbWVyYV9zdGF0ZSB7XHJcbiAgc2NhbGluZzogbnVtYmVyLFxyXG4gIHBvc2l0aW9uOiB7XHJcbiAgICB4OiBudW1iZXIsXHJcbiAgICB5OiBudW1iZXJcclxuICB9XHJcbiAgZGltZW5zaW9uczoge1xyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbiAgfSxcclxuICB2aWV3cG9ydDogdmlld3BvcnQsXHJcbiAgZGVidWc6Ym9vbGVhbixcclxuICBodWQ6SFVEICBcclxufVxyXG5cclxuaW50ZXJmYWNlIHZpZXdwb3J0IHtcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIGNhbWVyYV9wcm9wZXJ0aWVzIHtcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBkaW1lbnNpb25zOntcclxuICAgIGhlaWdodDpudW1iZXIsXHJcbiAgICB3aWR0aDpudW1iZXJcclxuICB9XHJcbiAgc2NhbGluZzpudW1iZXIsXHJcbiAgZGVidWc6Ym9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhIHtcclxuICBzdGF0ZTogY2FtZXJhX3N0YXRlO1xyXG4gIGh1ZDogSFVEO1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOmNhbWVyYV9wcm9wZXJ0aWVzLCB2OiB2aWV3cG9ydCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2NhbGluZzpwcm9wcy5zY2FsaW5nLFxyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IHByb3BzLnggKiBwcm9wcy5zY2FsaW5nLFxyXG4gICAgICAgIHk6IHByb3BzLnkgKiBwcm9wcy5zY2FsaW5nXHJcbiAgICAgIH0sXHJcbiAgICAgIGRpbWVuc2lvbnM6IHByb3BzLmRpbWVuc2lvbnMsXHJcbiAgICAgIHZpZXdwb3J0OiB7XHJcbiAgICAgICAgeDp2LngsXHJcbiAgICAgICAgeTp2LnkgLFxyXG4gICAgICAgIHdpZHRoOiB2LndpZHRoICogcHJvcHMuZGltZW5zaW9ucy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHYuaGVpZ2h0ICogcHJvcHMuZGltZW5zaW9ucy5oZWlnaHRcclxuICAgICAgfSxcclxuICAgICAgZGVidWc6cHJvcHMuZGVidWcsXHJcbiAgICAgIGh1ZDp1bmRlZmluZWRcclxuICAgIH1cclxuICB9XHJcbiAgc2V0IHgoeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnggPSB4O1xyXG4gIH1cclxuICBzZXQgeSh5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSA9IHlcclxuICB9XHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gIH1cclxuICBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLnBvc2l0aW9uLnk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSByZW5kZXJfZnVuYyB7XHJcbiAgKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsaW5nOiBudW1iZXIpOiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSByZWN0YW5nbGUge1xyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIHNwcml0ZV9hcmdzIHtcclxuICBzcHJpdGU6IHNwcml0ZSxcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHJvdGF0aW9uOiBudW1iZXIsXHJcbiAgc2NhbGU6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSByZW5kZXJlcl9hcmdzIHtcclxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgY2FtZXJhOiBDYW1lcmFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gcmVuZGVyX3R5cGUge1xyXG4gIHRleHQsXHJcbiAgc3ByaXRlLFxyXG4gIHJlY3QsXHJcbiAgc3Ryb2tlX3JlY3RcclxufVxyXG4vKlxyXG5leHBvcnQgY29uc3QgZWxlbWVudF9yZW5kZXIgPSAocjpyZW5kZXJlcl9hcmdzLG86b2JqPHVua25vd24+LHRpbWU6bnVtYmVyKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKChzLnggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoIC8gMiAtIHMuc3ByaXRlLnNwcml0ZV93aWR0aCAvIDIpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSBzLnkgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyAyIC0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IHdpZHRoID0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnRleHQpe1xyXG5cclxuICB9XHJcbiAgZWxzZSBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnNwcml0ZSl7XHJcblxyXG4gIH1cclxuICBlbHNlIGlmKG8ucmVuZGVyX3R5cGUgPT0gcmVuZGVyX3R5cGUuc3Ryb2tlX3JlY3Qpe1xyXG5cclxuICB9XHJcbn1cclxuKi9cclxuZXhwb3J0IGNvbnN0IG9iamVjdF9yZW5kZXIgPSAocjpyZW5kZXJlcl9hcmdzLG86b2JqPHVua25vd24+LHRpbWU6bnVtYmVyKSA9PiB7XHJcbiAgbGV0IHJlbmRlcmVkID0gby5yZW5kZXJfdHJhY2sodGltZSk7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVuZGVyZWQpKSB7XHJcbiAgICBmb3IgKGxldCBwIG9mIHJlbmRlcmVkKXtcclxuICAgICAgc3ByaXRlX3JlbmRlcmVyKHIsIHtcclxuICAgICAgICBzcHJpdGU6cC5zcHJpdGUsXHJcbiAgICAgICAgeDogcC54LFxyXG4gICAgICAgIHk6IHAueSxcclxuICAgICAgICByb3RhdGlvbjogby5yb3RhdGlvbixcclxuICAgICAgICBzY2FsZTpvLnNjYWxpbmdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgbGV0IHBvc2l0aW9uZWRfc3ByaXRlID0gcmVuZGVyZWQgYXMgcG9zaXRpb25lZF9zcHJpdGU7XHJcbiAgICBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnNwcml0ZSl7XHJcbiAgICAgIHNwcml0ZV9yZW5kZXJlcihyLCB7XHJcbiAgICAgICAgc3ByaXRlOiBwb3NpdGlvbmVkX3Nwcml0ZS5zcHJpdGUsXHJcbiAgICAgICAgeDogcG9zaXRpb25lZF9zcHJpdGUueCxcclxuICAgICAgICB5OiBwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgIHJvdGF0aW9uOiBvLnJvdGF0aW9uLFxyXG4gICAgICAgIHNjYWxlOm8uc2NhbGluZ1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnJlY3Qpe1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBodWRfdGV4dF9yZW5kZXJlciA9IChyOiByZW5kZXJlcl9hcmdzLCBzOiBUZXh0U2V0dGluZykgPT4ge1xyXG4gIGxldCB2aGVpZ2h0ID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0O1xyXG4gIHIuY29udGV4dC5mb250ID0gYCR7cy5mb250LnNpemV9cHggJHtzLmZvbnQuZm9udH1gO1xyXG4gIHIuY29udGV4dC5maWxsU3R5bGUgPSBzLmZvbnQuY29sb3I7XHJcbiAgci5jb250ZXh0LnRleHRBbGlnbiA9IHMuZm9udC5hbGlnbjtcclxuICBpZiAocy5mb250Lm1heF93aWR0aCkge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCBzLngsIHZoZWlnaHQgLSBzLnksIHMuZm9udC5tYXhfd2lkdGgpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgcy54LCB2aGVpZ2h0IC0gcy55KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0ZXh0X3JlbmRlcmVyID0gKHI6cmVuZGVyZXJfYXJncyxzOlRleHRTZXR0aW5nKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgbGV0IHdpZHRoID0gci5jb250ZXh0Lm1lYXN1cmVUZXh0KHMuZm9udC50ZXh0KS53aWR0aCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGhlaWdodCA9IHMuZm9udC5zaXplICogMS4yICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgocy54IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL3IuY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMikgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHMueSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0LzIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgci5jb250ZXh0LmZvbnQgPSBgJHtzLmZvbnQuc2l6ZSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmd9cHggJHtzLmZvbnQuZm9udH1gO1xyXG4gIHIuY29udGV4dC5maWxsU3R5bGUgPSBzLmZvbnQuY29sb3I7XHJcbiAgci5jb250ZXh0LnRleHRBbGlnbiA9IHMuZm9udC5hbGlnblxyXG4gIHIuY29udGV4dC5zYXZlKCk7XHJcbiAgci5jb250ZXh0LnRyYW5zbGF0ZShmaW5hbF94LCBmaW5hbF95KTtcclxuICBpZiAocy5mb250Lm1heF93aWR0aCkge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCAwLCAwLCBzLmZvbnQubWF4X3dpZHRoKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByLmNvbnRleHQuZmlsbFRleHQocy5mb250LnRleHQsIDAsIDApO1xyXG4gIH1cclxuICByLmNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3ByaXRlX3JlbmRlcmVyID0gKHI6IHJlbmRlcmVyX2FyZ3MsIHM6IHNwcml0ZV9hcmdzKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKChzLnggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvci5jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogcy5zY2FsZSAvIDIpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSBzLnkgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9yLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0ICogcy5zY2FsZSAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IHdpZHRoID0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICByLmNvbnRleHQuc2F2ZSgpO1xyXG4gIHIuY29udGV4dC5nbG9iYWxBbHBoYSA9IHMuc3ByaXRlLm9wYWNpdHk7XHJcbiAgci5jb250ZXh0LnRyYW5zbGF0ZShmaW5hbF94ICArICh3aWR0aCkgLyAyLCBmaW5hbF95ICsgaGVpZ2h0IC8gMilcclxuICBsZXQgcmFkaWFucyA9IHMucm90YXRpb24gKiAoTWF0aC5QSSAvIDE4MCk7XHJcbiAgci5jb250ZXh0LnJvdGF0ZShyYWRpYW5zKTtcclxuICByLmNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgcy5zcHJpdGUuc3ByaXRlX3NoZWV0LFxyXG4gICAgcy5zcHJpdGUubGVmdCxcclxuICAgIHMuc3ByaXRlLnRvcCxcclxuICAgIHMuc3ByaXRlLnNwcml0ZV93aWR0aCxcclxuICAgIHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQsXHJcbiAgICAtKHdpZHRoKSAvIDIsXHJcbiAgICAtaGVpZ2h0IC8gMixcclxuICAgIHdpZHRoICogcy5zY2FsZSxcclxuICAgIGhlaWdodCAqIHMuc2NhbGVcclxuICApXHJcbiAgci5jb250ZXh0LnJlc3RvcmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0cm9rZWRfcmVjdF9yZW5kZXJlciA9IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJlY3Q6IHJlY3RhbmdsZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDpudW1iZXIsIGNhbWVyYTogQ2FtZXJhKSA9PiB7XHJcbiAgbGV0IHZoZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgoeCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcmVjdC53aWR0aCAvIDIpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0geSAtIHJlY3QuaGVpZ2h0IC8gMiAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGhlaWdodCA9IHJlY3QuaGVpZ2h0ICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IHdpZHRoID0gcmVjdC53aWR0aCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICBjb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGNvbnRleHQuc3Ryb2tlUmVjdChmaW5hbF94LCBmaW5hbF95LCB3aWR0aCwgaGVpZ2h0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlY3RfcmVuZGVyZXIgPSAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByZWN0OiByZWN0YW5nbGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6bnVtYmVyLCBjYW1lcmE6IENhbWVyYSkgPT4ge1xyXG4gIGxldCB2aGVpZ2h0ID0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGZpbmFsX3ggPSAoKHggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiAtIHJlY3Qud2lkdGggLyAyKSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHkgLSByZWN0LmhlaWdodCAvIDIgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBoZWlnaHQgPSByZWN0LmhlaWdodCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCB3aWR0aCA9IHJlY3Qud2lkdGggKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgY29udGV4dC5maWxsUmVjdChmaW5hbF94LCBmaW5hbF95LCB3aWR0aCwgaGVpZ2h0KTtcclxufSIsImltcG9ydCB7IGdyYXZpdHlfb2JqLG9iaiB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSwgc3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IHZlbG9jaXR5X2NvbGxpc2lvbl9jaGVjayxjaGVja19jb2xsaXNpb25zLGNvbGxpc2lvbl9ib3gsY2hlY2tfYWxsX2NvbGxpc2lvbnMsY2hlY2tfYWxsX29iamVjdHN9IGZyb20gXCIuL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge3JlbmRlcl9jb2xsaXNpb25fYm94LERFQlVHfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7QmluZCxjb250cm9sX2Z1bmMsIGV4ZWNfdHlwZX0gZnJvbSBcIi4vY29udHJvbHNcIjtcclxuaW1wb3J0IHtIVUQsVGV4dCwgVGV4dF9Ob2RlfSBmcm9tIFwiLi9odWRcIjtcclxuaW1wb3J0IHthdWRpb30gZnJvbSBcIi4vYXVkaW9cIlxyXG5pbXBvcnQge2dhbWUsZGVidWdfdXBkYXRlX29ial9saXN0fSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7cHJlZmFic30gZnJvbSBcIi4uL2dhbWUvb2JqZWN0cy9wcmVmYWJzXCI7XHJcblxyXG5pbnRlcmZhY2UgcG9zaXRpb257XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5X2dyYXZpdHkob2I6Z3Jhdml0eV9vYmo8dW5rbm93bj4sZ3Jhdl9jb25zdDpudW1iZXIsIGdyYXZfbWF4Om51bWJlcil7XHJcbiAgbGV0IHN0ID0gb2Iuc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gIGlmKG9iLmdyYXZpdHkgJiYgc3QudmVsb2NpdHkueSA+IGdyYXZfbWF4KXtcclxuICAgIHN0LnZlbG9jaXR5LnkgKz0gZ3Jhdl9jb25zdDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGFydGljbGVfZW50cnl7XHJcbiAgc3ByaXRlOnN0cmluZyxcclxuICBoZWlnaHQ6bnVtYmVyLFxyXG4gIHdpZHRoOm51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgcGFydGljbGVze1xyXG4gIFtpbmRleDpzdHJpbmddOnBhcnRpY2xlX2VudHJ5XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugcm9vbV9pPFQ+e1xyXG4gIGJhY2tncm91bmRfdXJsOnN0cmluZyxcclxuICBvYmplY3RzOkFycmF5PG9iajx1bmtub3duPj5cclxuICBzdGF0ZTpUXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugb2JqZWN0X3N0YXRlX2NvbmZpZyB7XHJcbiAgdHlwZTpzdHJpbmcsXHJcbiAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gIHJvdGF0aW9uOiBudW1iZXIsXHJcbiAgc2NhbGluZzpudW1iZXIsXHJcbiAgcGFyYW1ldGVycz86IHVua25vd25cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzdGF0ZV9jb25maWd7XHJcbiAgb2JqZWN0czpvYmplY3Rfc3RhdGVfY29uZmlnW11cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHJvb208VD57XHJcbiAgYmFja2dyb3VuZF91cmw6IHN0cmluZztcclxuICBiYWNrZ3JvdW5kOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIG9iamVjdHM6IEFycmF5PG9iajx1bmtub3duPj4gPSBbXTtcclxuICBwYXJ0aWNsZXM6cGFydGljbGVzID0ge307XHJcbiAgcGFydGljbGVzX2FycjogQXJyYXk8b2JqPHVua25vd24+PiA9IFtdO1xyXG4gIHN0YXRlOiBUO1xyXG4gIGJpbmRzOm51bWJlcltdID0gW107XHJcbiAgZ2FtZTpnYW1lPHVua25vd24+O1xyXG4gIGh1ZDpIVUQ7XHJcbiAgYXVkaW8gPSBuZXcgYXVkaW8oKTtcclxuICB0ZXh0X25vZGVzOlRleHRbXSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKGdhbWU6Z2FtZTx1bmtub3duPixjb25maWc6c3RhdGVfY29uZmlnKXtcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICBmb3IobGV0IGMgb2YgY29uZmlnLm9iamVjdHMpe1xyXG4gICAgICB0aGlzLmFkZEl0ZW1TdGF0ZUNvbmZpZyhjKVxyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnRTdGF0ZUNvbmZpZygpe1xyXG4gICAgbGV0IGNvbmZpZzpzdGF0ZV9jb25maWcgPSB7b2JqZWN0czpbXX07XHJcbiAgICBmb3IobGV0IG8gb2YgdGhpcy5vYmplY3RzKXtcclxuICAgICAgY29uc29sZS5sb2coby5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgXCIrIG8ucGFyZW50KVxyXG4gICAgICAgIGlmKCFvLnBhcmVudCl7XHJcbiAgICAgICAgbGV0IHN0ID0gKDxvYmo8b2JqX3N0YXRlPj5vKS5zdGF0ZTtcclxuICAgICAgICBjb25maWcub2JqZWN0cy5wdXNoKHtcclxuICAgICAgICAgIHR5cGU6by5jb25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICAgICAgcG9zaXRpb246IHN0LnBvc2l0aW9uLFxyXG4gICAgICAgICAgcm90YXRpb246by5yb3RhdGlvbixcclxuICAgICAgICAgIHNjYWxpbmc6by5zY2FsaW5nLFxyXG4gICAgICAgICAgcGFyYW1ldGVyczpvLnBhcmFtc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG4gIGxvYWQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IGEgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgbGV0IHRvX2F3YWl0ID0gdGhpcy5vYmplY3RzLm1hcCgoYSkgPT4gYS5sb2FkKCkpO1xyXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbCh0b19hd2FpdCk7XHJcbiAgICAgIGEuc3JjID0gdGhpcy5iYWNrZ3JvdW5kX3VybDtcclxuICAgICAgYS5vbmVycm9yID0gKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGxvYWRpbmcgdXJsOlwiICsgdGhpcy5iYWNrZ3JvdW5kX3VybCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIGEub25sb2FkID0gKGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIF90aGlzLmJhY2tncm91bmQgPSBhO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXVkaW8ubG9hZCgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICBhc3luYyBhZGRJdGVtU3RhdGVDb25maWcoY29uZmlnOm9iamVjdF9zdGF0ZV9jb25maWcpe1xyXG4gICAgaWYocHJlZmFic1tjb25maWcudHlwZV0pe1xyXG4gICAgICBsZXQgbmV3X29iaiA9IDxvYmo8dW5rbm93bj4+KG5ldyBwcmVmYWJzW2NvbmZpZy50eXBlXShjb25maWcucG9zaXRpb24sY29uZmlnLnJvdGF0aW9uLGNvbmZpZy5zY2FsaW5nLGNvbmZpZy5wYXJhbWV0ZXJzKSk7XHJcbiAgICAgIHRoaXMuYWRkSXRlbXMobmV3X29iai5jb21iaW5lZF9vYmplY3RzKCkpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgY29uc29sZS5sb2coXCJVTktOT1dOIFRZUEUgQVRURU1QVEVEIFRPIExPQUQ6IFwiICsgY29uZmlnLnR5cGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGFkZEl0ZW0obzpvYmo8dW5rbm93bj4sIGxpc3QgPSB0aGlzLm9iamVjdHMpe1xyXG4gICAgYXdhaXQgby5sb2FkKCk7XHJcbiAgICBvLmdhbWUgPSB0aGlzLmdhbWU7XHJcbiAgICBsaXN0LnB1c2gobyk7XHJcbiAgICBpZihERUJVRyAmJiBsaXN0ID09PSB0aGlzLm9iamVjdHMpe1xyXG4gICAgICBkZWJ1Z191cGRhdGVfb2JqX2xpc3QoKTtcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgYWRkSXRlbXMobzpvYmo8dW5rbm93bj5bXSwgbGlzdCA9IHRoaXMub2JqZWN0cyl7XHJcbiAgICBmb3IobGV0IG9iIG9mIG8pe1xyXG4gICAgICBvYi5nYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoby5tYXAoKGEpPT5hLmxvYWQoKSkpO1xyXG4gICAgbGlzdC5wdXNoKC4uLm8pO1xyXG4gICAgaWYoREVCVUcgJiYgbGlzdCA9PT0gdGhpcy5vYmplY3RzKXtcclxuICAgICAgZGVidWdfdXBkYXRlX29ial9saXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRlbGV0ZUl0ZW0oaWQ6c3RyaW5nLCBsaXN0ID0gdGhpcy5vYmplY3RzKXtcclxuICAgIGZvcihsZXQgYSA9IDA7YSA8IGxpc3QubGVuZ3RoO2ErKyl7XHJcbiAgICAgIGlmKGxpc3RbYV0uaWQgPT09IGlkKXtcclxuICAgICAgICBsaXN0LnNwbGljZShhLDEpXHJcbiAgICAgICAgYS0tO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihERUJVRyAmJiBsaXN0ID09PSB0aGlzLm9iamVjdHMpe1xyXG4gICAgICBkZWJ1Z191cGRhdGVfb2JqX2xpc3QoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVnaXN0ZXJQYXJ0aWNsZXMoKXtcclxuXHJcbiAgfVxyXG4gIGJpbmRDb250cm9sKGtleTpzdHJpbmcseDpleGVjX3R5cGUsZnVuYzpjb250cm9sX2Z1bmMsaW50ZXJ2YWw6bnVtYmVyID0gMSl7XHJcbiAgICB0aGlzLmJpbmRzLnB1c2goQmluZChrZXksZnVuYyx4LGludGVydmFsKSk7IFxyXG4gIH1cclxuICBjaGVja19jb2xsaXNpb25zKGJveDpjb2xsaXNpb25fYm94LGV4ZW1wdD86QXJyYXk8c3RyaW5nPik6QXJyYXk8b2JqPHVua25vd24+PntcclxuICAgIGlmKERFQlVHKXtcclxuICAgICAgcmVuZGVyX2NvbGxpc2lvbl9ib3goYm94KTtcclxuICAgIH1cclxuICAgIHJldHVybiBjaGVja19hbGxfY29sbGlzaW9ucyhib3gsdGhpcy5vYmplY3RzLGV4ZW1wdCk7XHJcbiAgfVxyXG4gIGNoZWNrX29iamVjdHMoYm94OmNvbGxpc2lvbl9ib3gsZXhlbXB0PzpzdHJpbmdbXSxsaXN0PXRoaXMub2JqZWN0cyl7XHJcbiAgICBpZihERUJVRyl7XHJcbiAgICAgIHJlbmRlcl9jb2xsaXNpb25fYm94KGJveCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hlY2tfYWxsX29iamVjdHMoYm94LGxpc3QsZXhlbXB0KTtcclxuICB9XHJcbiAgcmVnaXN0ZXJfY29udHJvbHMoKXtcclxuXHJcbiAgfVxyXG4gIGNsZWFudXAoKXtcclxuXHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIGZvcihsZXQgcGFydGljbGUgb2YgdGhpcy5wYXJ0aWNsZXNfYXJyKXtcclxuICAgICAgcGFydGljbGUuc3RhdGVmKHRpbWUpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCB0ZXh0X25vZGUgb2YgdGhpcy50ZXh0X25vZGVzKXtcclxuICAgICAgdGV4dF9ub2RlLnN0YXRlZih0aW1lKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgIHRoaXMub2JqZWN0c1thXS5zdGF0ZWYodGltZSk7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmdhbWUuc3RhdGUuY2FtZXJhcyl7XHJcbiAgICAgIGZvcihsZXQgY2FtZXJhcyBvZiB0aGlzLmdhbWUuc3RhdGUuY2FtZXJhcyl7XHJcbiAgICAgICAgaWYoY2FtZXJhcy5odWQpe1xyXG4gICAgICAgICAgY2FtZXJhcy5odWQuc3RhdGVmKHRpbWUpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgIH0gXHJcbiAgICB9XHJcbiAgfVxyXG4gIGVtaXRfcGFydGljbGUobmFtZTpzdHJpbmcscG9zOnBvc2l0aW9uLGxpZmV0aW1lOm51bWJlcixwb3NfcmFuZ2U6bnVtYmVyKXtcclxuICAgIHRoaXMuYWRkSXRlbShuZXcgUGFydGljbGUodGhpcy5wYXJ0aWNsZXNbbmFtZV0scG9zLGxpZmV0aW1lLHBvc19yYW5nZSksIHRoaXMucGFydGljbGVzX2Fycik7XHJcbiAgfVxyXG4gIGdldE9iaihpZDpzdHJpbmcpe1xyXG4gICAgZm9yKGxldCBhID0gMDsgYSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGErKyl7XHJcbiAgICAgIGlmKHRoaXMub2JqZWN0c1thXS5pZCA9PSBpZCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0c1thXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGdldE9iakJ5VGFnKHRhZzpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIHRoaXMub2JqZWN0cy5maWx0ZXIoKGEpPT5hLnRhZ3MuaW5kZXhPZih0YWcpID4gLTEpO1xyXG4gIH1cclxuICByZW5kZXJmKHRpbWU6IG51bWJlcik6IHNwcml0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcHJpdGVfc2hlZXQ6IHRoaXMuYmFja2dyb3VuZCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBzcHJpdGVfaGVpZ2h0OiB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LFxyXG4gICAgICBzcHJpdGVfd2lkdGg6IHRoaXMuYmFja2dyb3VuZC53aWR0aCxcclxuICAgICAgb3BhY2l0eToxXHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSwgcG9zaXRpb24sIGRpbWVuc2lvbnN9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7Z2V0UmFuZEludH0gZnJvbSBcIi4vcmFuZFwiO1xyXG5pbXBvcnQge3BhcnRpY2xlX2VudHJ5fSBmcm9tIFwiLi9yb29tXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHNwcml0ZXtcclxuICBzcHJpdGVfc2hlZXQ6SFRNTEltYWdlRWxlbWVudCxcclxuICBsZWZ0Om51bWJlcixcclxuICB0b3A6bnVtYmVyLFxyXG4gIHNwcml0ZV93aWR0aDpudW1iZXIsXHJcbiAgc3ByaXRlX2hlaWdodDpudW1iZXIsXHJcbiAgb3BhY2l0eTpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwb3NpdGlvbmVkX3Nwcml0ZXtcclxuICBzcHJpdGU6c3ByaXRlLFxyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBQYXJ0aWNsZV9pe1xyXG4gIGxpZmV0aW1lOm51bWJlcjtcclxuICBwb3NpdGlvbjp7XHJcbiAgICB4Om51bWJlcixcclxuICAgIHk6bnVtYmVyXHJcbiAgfSxcclxuICB2ZWxvY2l0eTp7XHJcbiAgICB4Om51bWJlcixcclxuICAgIHk6bnVtYmVyXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFydGljbGUgZXh0ZW5kcyBvYmo8UGFydGljbGVfaT57XHJcbiAgY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgcmFuZG9tX3JhbmdlOm51bWJlcjtcclxuICBtYXhfbGlmZXRpbWU6bnVtYmVyO1xyXG4gIHNlbGVjdGVkX3Nwcml0ZTpzcHJpdGU7XHJcbiAgY29uc3RydWN0b3IocGFydDpwYXJ0aWNsZV9lbnRyeSxwb3M6cG9zaXRpb24sbGlmZXRpbWU6bnVtYmVyLHJhbmRvbV9yYW5nZTpudW1iZXIpe1xyXG4gICAgc3VwZXIocG9zKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxpZmV0aW1lOjAsXHJcbiAgICAgIHBvc2l0aW9uOntcclxuICAgICAgICB4OnBvcy54ICsgZ2V0UmFuZEludCgtcmFuZG9tX3JhbmdlLHJhbmRvbV9yYW5nZSksXHJcbiAgICAgICAgeTpwb3MueSArIGdldFJhbmRJbnQoLXJhbmRvbV9yYW5nZSxyYW5kb21fcmFuZ2UpXHJcbiAgICAgIH0sXHJcbiAgICAgIHZlbG9jaXR5OntcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLnNwcml0ZV91cmwgPSBwYXJ0LnNwcml0ZTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gcGFydC5oZWlnaHQ7XHJcbiAgICB0aGlzLndpZHRoID0gcGFydC53aWR0aDtcclxuICAgIHRoaXMubWF4X2xpZmV0aW1lID0gbGlmZXRpbWU7XHJcbiAgICB0aGlzLnJhbmRvbV9yYW5nZSA9IHJhbmRvbV9yYW5nZTtcclxuICB9XHJcbiAgZGVsZXRlKCl7XHJcbiAgICBsZXQgcm9vbSA9IHRoaXMuZ2FtZS5nZXRSb29tKCk7XHJcbiAgICByb29tLmRlbGV0ZUl0ZW0odGhpcy5pZCxyb29tLnBhcnRpY2xlc19hcnIpO1xyXG4gIH1cclxuICBzdGF0ZWYodGltZTpudW1iZXIpe1xyXG4gICAgdGhpcy5zdGF0ZS5saWZldGltZSArPSB0aW1lO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5saWZldGltZSA+IHRoaXMubWF4X2xpZmV0aW1lKXtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyZih0aW1lOm51bWJlcik6cG9zaXRpb25lZF9zcHJpdGV7XHJcbiAgICBpZighdGhpcy5zZWxlY3RlZF9zcHJpdGUpe1xyXG4gICAgICBsZXQgc3ByaXRlcyA9IHNwcml0ZV9nZW4odGhpcy5zcHJpdGVfc2hlZXQsdGhpcy53aWR0aCx0aGlzLmhlaWdodClcclxuICAgICAgbGV0IHJhbmRvbV9yb3cgPSBnZXRSYW5kSW50KDAsc3ByaXRlcy5sZW5ndGgpO1xyXG4gICAgICBsZXQgcmFuZG9tX2NvbCA9IGdldFJhbmRJbnQoMCxzcHJpdGVzW3JhbmRvbV9yb3ddLmxlbmd0aCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRfc3ByaXRlID0gc3ByaXRlc1tyYW5kb21fcm93XVtyYW5kb21fY29sXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRfc3ByaXRlLm9wYWNpdHkgPSAxIC0gdGhpcy5zdGF0ZS5saWZldGltZS90aGlzLm1heF9saWZldGltZTtcclxuICAgIHJldHVybntcclxuICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICBzcHJpdGU6dGhpcy5zZWxlY3RlZF9zcHJpdGUgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ByaXRlX2dlbihzcHJpdGVfc2hlZXQ6SFRNTEltYWdlRWxlbWVudCxzcHJpdGVfd2lkdGg6bnVtYmVyLHNwcml0ZV9oZWlnaHQ6bnVtYmVyKTpBcnJheTxBcnJheTxzcHJpdGU+PntcclxuICBsZXQgd2lkdGggPSBzcHJpdGVfc2hlZXQud2lkdGg7XHJcbiAgbGV0IGhlaWdodCA9IHNwcml0ZV9zaGVldC5oZWlnaHQ7XHJcbiAgbGV0IHNwcml0ZXM6QXJyYXk8QXJyYXk8c3ByaXRlPj4gPSBbXTtcclxuICBmb3IobGV0IGIgPSAwOyBiIDwgaGVpZ2h0O2IgKz0gc3ByaXRlX2hlaWdodCl7XHJcbiAgICBzcHJpdGVzLnB1c2goW10pO1xyXG4gICAgZm9yKGxldCBhID0gMDsgYSA8IHdpZHRoO2EgKz0gc3ByaXRlX3dpZHRoKXtcclxuICAgICAgc3ByaXRlc1tiXS5wdXNoKHtcclxuICAgICAgICBzcHJpdGVfc2hlZXQsXHJcbiAgICAgICAgbGVmdDphLFxyXG4gICAgICAgIHRvcDpiICogc3ByaXRlX2hlaWdodCxcclxuICAgICAgICBzcHJpdGVfaGVpZ2h0LFxyXG4gICAgICAgIHNwcml0ZV93aWR0aCxcclxuICAgICAgICBvcGFjaXR5OjFcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHNwcml0ZXM7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBpbnRlcmZhY2Ugc3RhdGVfZnVuYzxUPntcclxuICAobGFzdF90aW1lOm51bWJlcixjdXJyZW50X3N0YXRlOlQpOlRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSB2ZWxvY2l0eXtcclxuICB4Om51bWJlcjtcclxuICB5Om51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwb3NpdGlvbntcclxuICB4Om51bWJlcjtcclxuICB5Om51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBkaW1lbnNpb25ze1xyXG4gIGhlaWdodDpudW1iZXIsXHJcbiAgd2lkdGg6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugb2JqX3N0YXRle1xyXG4gIHBvc2l0aW9uOnBvc2l0aW9uO1xyXG4gIHZlbG9jaXR5OnZlbG9jaXR5O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHJvb21fc3RhdGV7XHJcbiAgb2JqZWN0czogQXJyYXk8b2JqX3N0YXRlPlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25faW5pdCgpOm9ial9zdGF0ZXtcclxuICByZXR1cm4ge1xyXG4gICAgcG9zaXRpb246e1xyXG4gICAgICB4OjAsXHJcbiAgICAgIHk6MFxyXG4gICAgfSxcclxuICAgIHZlbG9jaXR5OntcclxuICAgICAgeDowLFxyXG4gICAgICB5OjBcclxuICAgIH1cclxuXHJcbiAgfSAgXHJcbn0iLCJleHBvcnQgbGV0IERFQlVHID0gdHJ1ZTtcclxuZXhwb3J0IGxldCBQQVVTRUQgPSB0cnVlO1xyXG5pbXBvcnQge29ian0gZnJvbSBcIi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSwgcG9zaXRpb259IGZyb20gXCIuL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge3Jvb219IGZyb20gXCIuL2xpYi9yb29tXCI7XHJcbmltcG9ydCB7cG9zaXRpb25lZF9zcHJpdGUsIHNwcml0ZX0gZnJvbSBcIi4vbGliL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4vbGliL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge3Nwcml0ZV9yZW5kZXJlcixyZWN0X3JlbmRlcmVyLCBzdHJva2VkX3JlY3RfcmVuZGVyZXIsIGh1ZF90ZXh0X3JlbmRlcmVyLCBDYW1lcmEsIHRleHRfcmVuZGVyZXJ9IGZyb20gXCIuL2xpYi9yZW5kZXJcIjtcclxuaW1wb3J0IHtIVUR9IGZyb20gXCIuL2xpYi9odWRcIjtcclxuaW1wb3J0IHtFeGVjdXRlUmVwZWF0QmluZHMsZGVidWdfYmluZHMsYnR5cGUsZXhlY190eXBlLCBQb2xsX01vdXNlLCBCaW5kLCBoZWxkX2tleXMsIFVuYmluZH0gZnJvbSBcIi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7RGlzdGFuY2V9IGZyb20gXCIuL2xpYi9tYXRoXCI7XHJcbmltcG9ydCB7aW5pdF9jbGlja19oYW5kbGVyfSBmcm9tIFwiLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHtyb29tcyBhcyByb29tX2xpc3R9IGZyb20gXCIuL2dhbWUvcm9vbXMvcm9vbXNcIjtcclxubGV0IHsgaXBjUmVuZGVyZXJ9ID0gd2luZG93LnJlcXVpcmUoXCJlbGVjdHJvblwiKTtcclxuY29uc3QgcGF0aCA9IHdpbmRvdy5yZXF1aXJlKFwicGF0aFwiKTtcclxubGV0IGZzID0gd2luZG93LnJlcXVpcmUoXCJmc1wiKTtcclxuZXhwb3J0IGxldCBwcm9qZWN0X3BhdGggPSBpcGNSZW5kZXJlci5zZW5kU3luYygncGF0aC1yZXF1ZXN0JywgJ3BpbmcnKVswXTtcclxuXHJcbmxldCBjYW52YXNfZWxlbWVudDpIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5sZXQgY29udGV4dDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXNfZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5cclxubGV0IHNjcmVlbl93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5sZXQgc2NyZWVuX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbmxldCB2d2lkdGggPSBjYW52YXNfZWxlbWVudC53aWR0aDtcclxubGV0IHZoZWlnaHQgPSBjYW52YXNfZWxlbWVudC5oZWlnaHQ7XHJcblxyXG5pbXBvcnQge2d9IGZyb20gXCIuL2dhbWUvbWFpblwiO1xyXG5pbXBvcnQge3ByZWZhYnN9IGZyb20gXCIuL2dhbWUvb2JqZWN0cy9wcmVmYWJzXCI7XHJcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSBcImNvbnNvbGVcIjtcclxuaW1wb3J0IHsgZGVidWdfc2V0dXAgfSBmcm9tIFwiLi9saWIvZGVidWdcIjtcclxuXHJcbi8vSG93IG9mdGVuIHRoZSBnYW1lIGxvZ2ljIGxvb3Agc2hvdWxkIHJ1biwgaW4gbWlsbGlzZWNvbmRzXHJcbmxldCBsb2dpY19sb29wX2ludGVydmFsOm51bWJlciA9IDEwMDAvNjA7ICBcclxuXHJcbmxldCBsYXN0X3RpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxubGV0IGxhc3RfcmVuZGVyX3RpbWUgPSAwO1xyXG5cclxuaW50ZXJmYWNlIGRpbWVuc2lvbnN7XHJcbiAgaGVpZ2h0Om51bWJlcixcclxuICB3aWR0aDpudW1iZXJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRTY3JlZW5EaW1lbnNpb25zICgpOmRpbWVuc2lvbnN7XHJcbiAgcmV0dXJuKHtcclxuICAgIHdpZHRoOnNjcmVlbl93aWR0aCxcclxuICAgIGhlaWdodDpzY3JlZW5faGVpZ2h0XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFZpZXdwb3J0RGltZW5zaW9ucyAoKTpkaW1lbnNpb25ze1xyXG4gIHJldHVybih7XHJcbiAgICBoZWlnaHQ6Y2FudmFzX2VsZW1lbnQuaGVpZ2h0LFxyXG4gICAgd2lkdGg6Y2FudmFzX2VsZW1lbnQud2lkdGhcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHZpZXdwb3J0ID0ge1xyXG4gIGhlaWdodDpHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQsXHJcbiAgd2lkdGg6R2V0Vmlld3BvcnREaW1lbnNpb25zKCkud2lkdGhcclxufVxyXG5cclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gIHZpZXdwb3J0LmhlaWdodCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodFxyXG4gIHZpZXdwb3J0LndpZHRoID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkud2lkdGhcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERlYnVnKHg6Ym9vbGVhbil7XHJcbiAgREVCVUcgPSB4O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UGF1c2VkKHg6Ym9vbGVhbil7XHJcbiAgUEFVU0VEID0geDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlcl9jb2xsaXNpb25fYm94ID0gKGE6Y29sbGlzaW9uX2JveCkgPT4ge1xyXG4gIGJveGVzLnB1c2goYSk7XHJcbn1cclxuXHJcbmxldCBib3hlczpBcnJheTxjb2xsaXNpb25fYm94PiA9IFtdO1xyXG5cclxuZXhwb3J0IGxldCBkZWVwID0gKGE6YW55KSA9PntcclxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhKSk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBkZWJ1Z192YXJze1xyXG4gIHRhcmdldDpIVE1MQ2FudmFzRWxlbWVudCxcclxuICBjYW1lcmE6Q2FtZXJhLFxyXG4gIGxhc3RfY2xpY2tlZDpIVE1MRWxlbWVudCxcclxuICBzZWxlY3RlZF9lbGVtZW50X2luaXRpYWxfc2NhbGluZzpudW1iZXIsXHJcbiAgc2VsZWN0ZWRfZWxlbWVudDpvYmo8b2JqX3N0YXRlPixcclxuICBzZWxlY3RlZF9lbGVtZW50X29mZnNldDpwb3NpdGlvbixcclxuICByb3RhdGlvbl9lbGVtZW50Om9iajxvYmpfc3RhdGU+LFxyXG4gIHNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDpvYmo8b2JqX3N0YXRlPixcclxuICBtaWRkbGVfcG9zaXRpb246cG9zaXRpb24sXHJcbiAgY2xpY2tfcG9zaXRpb246cG9zaXRpb25cclxufVxyXG5cclxuZXhwb3J0IGxldCBERUJVR192OmRlYnVnX3ZhcnM7XHJcblxyXG5pbnRlcmZhY2UgZ2FtZV9zdGF0ZTxUPntcclxuICBsb2dpYzpudW1iZXIsXHJcbiAgY29udGV4dDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgY3VycmVudF9yb29tOnJvb208dW5rbm93bj4sXHJcbiAgY2FtZXJhczpBcnJheTxDYW1lcmE+LFxyXG4gIGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudCxcclxuICBnYW1lOlRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCgpe1xyXG4gIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmplY3RzX2xpc3RcIik7XHJcbiAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGlmKGcuZ2V0Um9vbSgpKXtcclxuICAgIGZvcihsZXQgb2JqIG9mIGcuZ2V0Um9vbSgpLm9iamVjdHMpe1xyXG4gICAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBwYXJhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG9iai5jb25zdHJ1Y3Rvci5uYW1lKSk7XHJcbiAgICAgIHBhcmEuY2xhc3NMaXN0LmFkZChcIm9iamVjdF9saXN0X2l0ZW1cIik7XHJcbiAgICAgIHBhcmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XHJcbiAgICAgICAgaWYoREVCVUdfdi5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQgPT0gPG9iajxvYmpfc3RhdGU+Pm9iail7XHJcbiAgICAgICAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sKDxvYmo8b2JqX3N0YXRlPj5vYmopLnN0YXRlLnBvc2l0aW9uKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgREVCVUdfdi5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQgPSA8b2JqPG9ial9zdGF0ZT4+b2JqO1xyXG4gICAgICAgICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBsaXN0LmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9yb29tX2xpc3QoKXtcclxuICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbV9saXN0XCIpO1xyXG4gIGxpc3QudGV4dENvbnRlbnQgPSAnJztcclxuICBmb3IobGV0IHJvb21fbmFtZSBvZiBPYmplY3Qua2V5cyhyb29tX2xpc3QpKXtcclxuICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXJhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJvb21fbmFtZSkpO1xyXG4gICAgcGFyYS5jbGFzc0xpc3QuYWRkKFwicm9vbV9saXN0X2l0ZW1cIik7XHJcbiAgICBwYXJhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xyXG4gICAgICBnLmxvYWRSb29tU3RyaW5nKHJvb21fbmFtZSk7XHJcbiAgICB9KVxyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChwYXJhKTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBwcm9wZXJ0aWVzX2VsZW1lbnR7XHJcbiAgcG9zX3g6SFRNTElucHV0RWxlbWVudCxcclxuICBwb3NfeTpIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHZlbF94OkhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgdmVsX3k6SFRNTElucHV0RWxlbWVudCxcclxuICByb3Q6SFRNTElucHV0RWxlbWVudCxcclxuICBzY2FsaW5nOkhUTUxJbnB1dEVsZW1lbnRcclxufVxyXG5sZXQgcHJvcGVydGllc19lbGVtZW50czpwcm9wZXJ0aWVzX2VsZW1lbnQ9dW5kZWZpbmVkO1xyXG5pZihERUJVRyl7XHJcbiAgcHJvcGVydGllc19lbGVtZW50cyA9IHtcclxuICAgIHBvc194Oig8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc194XCIpKSxcclxuICAgIHBvc195Oig8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc195XCIpKSxcclxuICAgIHZlbF94Oig8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlbF94XCIpKSxcclxuICAgIHZlbF95Oig8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlbF95XCIpKSxcclxuICAgIHJvdDooPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RcIikpLFxyXG4gICAgc2NhbGluZzooPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsaW5nXCIpKSxcclxuICB9XHJcblxyXG4gIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpO1xyXG4gIGZvcihsZXQgYSA9IDA7YTxpbnB1dHMubGVuZ3RoO2ErKyl7XHJcbiAgICBpbnB1dHNbYV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XHJcbiAgICAgICg8SFRNTEVsZW1lbnQ+aW5wdXRzW2FdKS5mb2N1cygpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gIH1cclxuICBsZXQgZm9jdXNlZDtcclxuICBsZXQgZGVidWdfdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z190YXJnZXRcIilcclxuICBkZWJ1Z190YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XHJcbiAgICBmb3IobGV0IGEgPSAwO2E8aW5wdXRzLmxlbmd0aDthKyspe1xyXG4gICAgICBpbnB1dHNbYV0uYmx1cigpOyAgICAgXHJcbiAgICB9XHJcbiAgfSlcclxuICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XHJcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xyXG4gICAgZm9yKGxldCBhID0gMDthPGlucHV0cy5sZW5ndGg7YSsrKXtcclxuICAgICAgaW5wdXRzW2FdLmJsdXIoKTsgIFxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwoZSk9PntcclxuICAgIGxldCBlbGUgPSBERUJVR192LnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5zdGF0ZS5wb3NpdGlvbi54ID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnBvc194LnZhbHVlKSB8fCAwO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwoZSk9PntcclxuICAgIGxldCBlbGUgPSBERUJVR192LnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5zdGF0ZS5wb3NpdGlvbi55ID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnBvc195LnZhbHVlKSB8fCAwO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy52ZWxfeC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwoZSk9PntcclxuICAgIGxldCBlbGUgPSBERUJVR192LnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5zdGF0ZS52ZWxvY2l0eS54ID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF94LnZhbHVlKSB8fCAwO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy52ZWxfeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwoZSk9PntcclxuICAgIGxldCBlbGUgPSBERUJVR192LnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5zdGF0ZS52ZWxvY2l0eS55ID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF95LnZhbHVlKSB8fCAwO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5yb3QuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsKGUpPT57XHJcbiAgICBsZXQgZWxlID0gREVCVUdfdi5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUucm90YXRpb24gPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMucm90LnZhbHVlKSB8fCAwO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5zY2FsaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLChlKT0+e1xyXG4gICAgbGV0IGVsZSA9IERFQlVHX3Yuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLnNjYWxpbmcgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMuc2NhbGluZy52YWx1ZSkgfHwgMDtcclxuICB9KVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlX2VsZW1lbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XHJcbiAgICBsZXQgZWxlID0gREVCVUdfdi5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUuZGVsZXRlKCk7XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9wcmVmYWJzKCl7XHJcbiAgbGV0IHByZXMgPSBPYmplY3Qua2V5cyhwcmVmYWJzKS5tYXAoYXN5bmMgKG86IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IGEgPSA8b2JqPG9ial9zdGF0ZT4+KG5ldyBwcmVmYWJzW29dKHsgeDogMCwgeTogMCB9LCAwLCAxKSk7XHJcbiAgICBhd2FpdCBhLmxvYWQoKTtcclxuICAgIGxldCBvYmpzID0gYS5jb21iaW5lZF9vYmplY3RzKCk7XHJcbiAgICBmb3IobGV0IG9iaiBvZiBvYmpzKXtcclxuICAgICAgb2JqLlVuYmluZEFsbCgpO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpbHRlcmVkID0gb2Jqcy5maWx0ZXIoKGEpID0+IGEucmVuZGVyKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByZWZhYjpwcmVmYWJzW29dLFxyXG4gICAgICBuYW1lOmEuY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgcmVuZGVyZWQ6ZmlsdGVyZWQubWFwKChvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IG8uY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgIHJlbmRlcjogby5yZW5kZXJmKDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIFxyXG4gIH0pXHJcbiAgbGV0IGEgPSBhd2FpdCBQcm9taXNlLmFsbChwcmVzKTtcclxuICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVmYWJfdGFyZ2V0XCIpO1xyXG4gIHRhcmdldC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGZvcihsZXQgcHJlZmFiIG9mIGEpe1xyXG4gICAgXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXJhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByZWZhYi5uYW1lKSk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgICBpZihBcnJheS5pc0FycmF5KHByZWZhYi5yZW5kZXJlZFswXS5yZW5kZXIpKXtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGRpdi5hcHBlbmQocHJlZmFiLnJlbmRlcmVkWzBdLnJlbmRlci5zcHJpdGUuc3ByaXRlX3NoZWV0KTtcclxuICAgIH1cclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJlZmFiX2JveFwiKTtcclxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsYXN5bmMgKCk9PntcclxuICAgICAgbGV0IG9iaiA9ICA8b2JqPG9ial9zdGF0ZT4+KG5ldyBwcmVmYWIucHJlZmFiKE9iamVjdC5hc3NpZ24oe30sREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24pLCAwLCAxKSk7XHJcbiAgICAgIGF3YWl0IGcuc3RhdGUuY3VycmVudF9yb29tLmFkZEl0ZW1zKG9iai5jb21iaW5lZF9vYmplY3RzKCkpO1xyXG4gICAgfSk7XHJcbiAgICB0YXJnZXQuYXBwZW5kKGRpdik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpe1xyXG4gIGlmKERFQlVHX3Yuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50KXtcclxuICAgIGxldCBlbGUgPSBERUJVR192LnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqX25hbWVcIikuaW5uZXJIVE1MID0gZWxlLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnBvc194LnZhbHVlID0gXCJcIitlbGUuc3RhdGUucG9zaXRpb24ueC50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeS52YWx1ZSA9IFwiXCIrZWxlLnN0YXRlLnBvc2l0aW9uLnkudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3gudmFsdWUgPSBcIlwiK2VsZS5zdGF0ZS52ZWxvY2l0eS54LnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF95LnZhbHVlID0gXCJcIitlbGUuc3RhdGUudmVsb2NpdHkueS50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5yb3QudmFsdWUgPSBcIlwiK2VsZS5yb3RhdGlvbi50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5zY2FsaW5nLnZhbHVlID0gXCJcIitlbGUuc2NhbGluZy50b0ZpeGVkKDIpO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gZGVidWdfc3RhdGVmKHQ6bnVtYmVyKXtcclxuICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKERFQlVHX3YudGFyZ2V0LERFQlVHX3YuY2FtZXJhKTtcclxuICBpZighUEFVU0VEKXtcclxuICAgIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKTtcclxuICB9XHJcbiAgaWYoREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50KXtcclxuICAgIGlmKFBBVVNFRCAmJiBoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSl7XHJcbiAgICAgIGxldCBpbml0aWFsX2Rpc3RhbmNlID0gRGlzdGFuY2UoREVCVUdfdi5jbGlja19wb3NpdGlvbixERUJVR192LnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUucG9zaXRpb24pO1xyXG4gICAgICBsZXQgY3VycmVudF9kaXN0YW5jZSA9IERpc3RhbmNlKG1vdXNlLERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5wb3NpdGlvbik7XHJcbiAgICAgIERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudC5zY2FsaW5nID0gREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50X2luaXRpYWxfc2NhbGluZyArIChjdXJyZW50X2Rpc3RhbmNlIC0gaW5pdGlhbF9kaXN0YW5jZSkvREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50LndpZHRoO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGxldCBzdCA9IERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgICAgc3QucG9zaXRpb24ueCA9IG1vdXNlLnggLSBERUJVR192LnNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0LngsXHJcbiAgICAgIHN0LnBvc2l0aW9uLnkgPSBtb3VzZS55IC0gREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50X29mZnNldC55XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKFBBVVNFRCAmJiBERUJVR192LnJvdGF0aW9uX2VsZW1lbnQpe1xyXG4gICAgREVCVUdfdi5yb3RhdGlvbl9lbGVtZW50LnJvdGF0aW9uID0gREVCVUdfdi5yb3RhdGlvbl9lbGVtZW50LmFuZ2xlVG93YXJkc1BvaW50KG1vdXNlKTtcclxuICB9XHJcbiAgaWYoREVCVUdfdi5taWRkbGVfcG9zaXRpb24pe1xyXG4gICBsZXQgZGlmZl95ID0gbW91c2UueSAtIERFQlVHX3YubWlkZGxlX3Bvc2l0aW9uLnk7XHJcbiAgIGxldCBkaWZmX3ggPSBtb3VzZS54IC0gREVCVUdfdi5taWRkbGVfcG9zaXRpb24ueDtcclxuICAgIERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggPSBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgLTEgKiBkaWZmX3g7XHJcbiAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ID0gREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSArIC0xICogZGlmZl95O1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGxldCByb29tczphbnlbXSA9IFtdO1xyXG5leHBvcnQgbGV0IG9iamVjdHM6YW55W107XHJcblxyXG5leHBvcnQgY2xhc3MgZ2FtZTxUPntcclxuICBzdGF0ZTpnYW1lX3N0YXRlPFQ+O1xyXG4gIGNvbnRleHQ6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIG9mZnNjcmVlbl9jYW52YXM6SFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgb2Zmc2NyZWVuX2NvbnRleHQ6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIHByb3RvdHlwZXM6QXJyYXk8b2JqPHVua25vd24+PiA9IFtdO1xyXG4gIHJvb21zOkFycmF5PGFueT4gPSBbXTtcclxuICBpc1JlbmRlcmluZyA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKGN0eDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsaW5pdF9zdGF0ZTpULGluaXQ6YW55KXtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhbnZhczpjYW52YXNfZWxlbWVudCxcclxuICAgICAgbG9naWM6dW5kZWZpbmVkLFxyXG4gICAgICBjb250ZXh0OmN0eCxcclxuICAgICAgY2FtZXJhczpbXHJcbiAgICAgIF0sXHJcbiAgICAgIGN1cnJlbnRfcm9vbTogdW5kZWZpbmVkLFxyXG4gICAgICBnYW1lOmluaXRfc3RhdGVcclxuICAgIH1cclxuICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0ID0gdGhpcy5vZmZzY3JlZW5fY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgZGVidWdfc2V0dXAoKTsgXHJcbiAgICAgIERFQlVHX3YgPSB7XHJcbiAgICAgICAgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnX3RhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcclxuICAgICAgICBjYW1lcmE6IG5ldyBDYW1lcmEoe1xyXG4gICAgICAgICAgeDowLFxyXG4gICAgICAgICAgeTowLFxyXG4gICAgICAgICAgZGltZW5zaW9uczp7XHJcbiAgICAgICAgICAgIGhlaWdodDp2aWV3cG9ydC5oZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOnZpZXdwb3J0LndpZHRoXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2NhbGluZzoxLFxyXG4gICAgICAgICAgZGVidWc6dHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAse1xyXG4gICAgICAgICAgeDoxLFxyXG4gICAgICAgICAgeTowLFxyXG4gICAgICAgICAgd2lkdGg6MSxcclxuICAgICAgICAgIGhlaWdodDoxXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbGFzdF9jbGlja2VkOnVuZGVmaW5lZCxcclxuICAgICAgICBzZWxlY3RlZF9lbGVtZW50OnVuZGVmaW5lZCxcclxuICAgICAgICBzZWxlY3RlZF9lbGVtZW50X29mZnNldDp1bmRlZmluZWQsXHJcbiAgICAgICAgcm90YXRpb25fZWxlbWVudDp1bmRlZmluZWQsXHJcbiAgICAgICAgbWlkZGxlX3Bvc2l0aW9uOnVuZGVmaW5lZCxcclxuICAgICAgICBjbGlja19wb3NpdGlvbjp1bmRlZmluZWQsXHJcbiAgICAgICAgc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50OnVuZGVmaW5lZCxcclxuICAgICAgICBzZWxlY3RlZF9lbGVtZW50X2luaXRpYWxfc2NhbGluZzowXHJcbiAgICAgIH1cclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwibW91c2UwZG93blwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgICAgaWQ6MCxcclxuICAgICAgICBmdW5jdGlvbjooKT0+e1xyXG4gICAgICAgICAgaWYoREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50KXtcclxuICAgICAgICAgICAgREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoREVCVUdfdi50YXJnZXQsREVCVUdfdi5jYW1lcmEpO1xyXG4gICAgICAgICAgICBERUJVR192LmNsaWNrX3Bvc2l0aW9uID0gbW91c2U7XHJcbiAgICAgICAgICAgIGxldCBjbGlja2VkID0gdGhpcy5nZXRSb29tKCkuY2hlY2tfb2JqZWN0cyh7XHJcbiAgICAgICAgICAgICAgeDptb3VzZS54LFxyXG4gICAgICAgICAgICAgIHk6bW91c2UueSxcclxuICAgICAgICAgICAgICBoZWlnaHQ6MSxcclxuICAgICAgICAgICAgICB3aWR0aDoxXHJcbiAgICAgICAgICAgIH0pWzBdXHJcbiAgICAgICAgICAgIGlmKGNsaWNrZWQpe1xyXG4gICAgICAgICAgICAgIERFQlVHX3Yuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50PSA8b2JqPG9ial9zdGF0ZT4+Y2xpY2tlZDtcclxuICAgICAgICAgICAgICBkZWJ1Z191cGRhdGVfcHJvcGVydGllc19lbGVtZW50KClcclxuICAgICAgICAgICAgICBERUJVR192LnNlbGVjdGVkX2VsZW1lbnQgPSA8b2JqPG9ial9zdGF0ZT4+Y2xpY2tlZDtcclxuICAgICAgICAgICAgICBERUJVR192LnNlbGVjdGVkX2VsZW1lbnRfaW5pdGlhbF9zY2FsaW5nID0gY2xpY2tlZC5zY2FsaW5nO1xyXG4gICAgICAgICAgICAgIERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQgPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBtb3VzZS54IC0gKDxvYmpfc3RhdGU+Y2xpY2tlZC5zdGF0ZSkucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IG1vdXNlLnkgLSAoPG9ial9zdGF0ZT5jbGlja2VkLnN0YXRlKS5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgICAgIGNhbWVyYTpERUJVR192LmNhbWVyYVxyXG4gICAgICB9KTtcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwibW91c2UxdXBcIixcclxuICAgICAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgICAgIGlkOjUsXHJcbiAgICAgICAgZnVuY3Rpb246KCk9PntcclxuICAgICAgICAgIERFQlVHX3YubWlkZGxlX3Bvc2l0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgICAgICBjYW1lcmE6REVCVUdfdi5jYW1lcmFcclxuICAgICAgfSk7XHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIm1vdXNlMWRvd25cIixcclxuICAgICAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgICAgIGlkOjYsXHJcbiAgICAgICAgZnVuY3Rpb246KCk9PntcclxuICAgICAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoREVCVUdfdi50YXJnZXQsREVCVUdfdi5jYW1lcmEpO1xyXG4gICAgICAgICAgREVCVUdfdi5taWRkbGVfcG9zaXRpb24gPSBtb3VzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2UsXHJcbiAgICAgICAgY2FtZXJhOkRFQlVHX3YuY2FtZXJhXHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJtb3VzZTB1cFwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBmdW5jdGlvbjooKT0+e1xyXG4gICAgICAgICAgREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgICAgIGNhbWVyYTpERUJVR192LmNhbWVyYVxyXG4gICAgICB9KTtcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwibW91c2UyZG93blwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgICAgaWQ6MyxcclxuICAgICAgICBmdW5jdGlvbjooKT0+e1xyXG4gICAgICAgICAgaWYoREVCVUdfdi5yb3RhdGlvbl9lbGVtZW50KXtcclxuICAgICAgICAgICAgREVCVUdfdi5yb3RhdGlvbl9lbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoREVCVUdfdi50YXJnZXQsREVCVUdfdi5jYW1lcmEpO1xyXG4gICAgICAgICAgICBsZXQgY2xpY2tlZCA9IHRoaXMuZ2V0Um9vbSgpLmNoZWNrX29iamVjdHMoe1xyXG4gICAgICAgICAgICAgIHg6bW91c2UueCxcclxuICAgICAgICAgICAgICB5Om1vdXNlLnksXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjEsXHJcbiAgICAgICAgICAgICAgd2lkdGg6MVxyXG4gICAgICAgICAgICB9KVswXVxyXG4gICAgICAgICAgICBpZihjbGlja2VkKXtcclxuICAgICAgICAgICAgICBERUJVR192LnJvdGF0aW9uX2VsZW1lbnQgPSA8b2JqPG9ial9zdGF0ZT4+Y2xpY2tlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgICAgICBjYW1lcmE6REVCVUdfdi5jYW1lcmFcclxuICAgICAgfSk7XHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIm1vdXNlMnVwXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDo0LFxyXG4gICAgICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgICAgICBERUJVR192LnJvdGF0aW9uX2VsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgICAgIGNhbWVyYTpERUJVR192LmNhbWVyYVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBsZWZ0X2Z1bmMgPSAoKT0+e1xyXG4gICAgICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMTowO1xyXG4gICAgICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgICAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ID0gREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCAtICgoNSArIHNoaWZ0X2hlbGQgKiA1KSAqICgxL0RFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICAgICAgfTtcclxuICAgICAgbGV0IHJpZ2h0X2Z1bmMgPSAoKT0+e1xyXG4gICAgICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMTowO1xyXG4gICAgICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgICAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ID0gREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCArICgoNSArIHNoaWZ0X2hlbGQgKiA1KSAqICgxL0RFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICAgICAgfTtcclxuICAgICAgbGV0IGRvd25fZnVuYyA9ICgpPT57XHJcbiAgICAgICAgbGV0IHNoaWZ0X2hlbGQgPSBoZWxkX2tleXNbXCJTaGlmdExlZnRcIl0gPyAxOjA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIWhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgICAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ID0gREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSAtICgoNSArIHNoaWZ0X2hlbGQgKiA1KSAqICgxL0RFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICAgICAgfTtcclxuICAgICAgbGV0IHVwX2Z1bmMgPSAoKT0+e1xyXG4gICAgICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMTowO1xyXG4gICAgICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgICAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ID0gREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSArICgoNSArIHNoaWZ0X2hlbGQgKiA1KSAqICgxL0RFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICAgICAgfTtcclxuICAgICAgbGV0IHNjcm9sbF91cCA9ICgpPT57XHJcbiAgICAgICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIilcclxuICAgICAgICAgIERFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPSBERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nICsgMC4wNTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgc2F2ZV9mdW5jID0gKCk9PntcclxuICAgICAgICBsZXQgY3RybF9oZWxkID0gaGVsZF9rZXlzW1wiQ29udHJvbExlZnRcIl07XHJcbiAgICAgICAgaWYoY3RybF9oZWxkICYmIFBBVVNFRCl7XHJcbiAgICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZ2V0Um9vbSgpLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgICBsZXQgYSA9IHBhdGguam9pbihgJHtwcm9qZWN0X3BhdGh9YCxgLi4vcm9vbXMvJHtuYW1lfS9pbmZvLmpzb25gKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoYSxKU09OLnN0cmluZ2lmeSh0aGlzLmdldFJvb20oKS5leHBvcnRTdGF0ZUNvbmZpZygpKSk7XHJcbiAgICAgICAgICB9IGNhdGNoKGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIFdSSVRJTkcgUk9PTSBJTkZPIEZJTEUuXCIpOyBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFsZXJ0KFwiU2F2ZWRcIik7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjdHJsX2hlbGQgJiYgIVBBVVNFRCl7XHJcbiAgICAgICAgICBhbGVydChcInBhdXNlIHRvIGVuYWJsZSBzYXZpbmcuXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBzY3JvbGxfZG93biA9ICgpPT57XHJcbiAgICAgICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIiAmJiBERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nID4gMC4wNSlcclxuICAgICAgICAgIERFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPSBERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nIC0gMC4wNTtcclxuICAgICAgfVxyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJLZXlBXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5rZXlib2FyZCxcclxuICAgICAgICBpZDpCaW5kKFwiS2V5QVwiLGxlZnRfZnVuYyxleGVjX3R5cGUucmVwZWF0LDEpLFxyXG4gICAgICAgIGZ1bmN0aW9uOmxlZnRfZnVuYyxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5yZXBlYXRcclxuICAgICAgfSlcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwiS2V5RFwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgICAgaWQ6QmluZChcIktleURcIixyaWdodF9mdW5jLGV4ZWNfdHlwZS5yZXBlYXQsMSksXHJcbiAgICAgICAgZnVuY3Rpb246cmlnaHRfZnVuYyxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5yZXBlYXRcclxuICAgICAgfSlcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwiS2V5V1wiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgICAgaWQ6QmluZChcIktleVdcIix1cF9mdW5jLGV4ZWNfdHlwZS5yZXBlYXQsMSksXHJcbiAgICAgICAgZnVuY3Rpb246dXBfZnVuYyxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5yZXBlYXRcclxuICAgICAgfSlcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwiS2V5U1wiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgICAgaWQ6QmluZChcIktleVNcIixkb3duX2Z1bmMsZXhlY190eXBlLnJlcGVhdCwxKSxcclxuICAgICAgICBmdW5jdGlvbjpkb3duX2Z1bmMsXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUucmVwZWF0XHJcbiAgICAgIH0pXHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcInNjcm9sbHVwXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDpCaW5kKFwic2Nyb2xsdXBcIixzY3JvbGxfdXAsZXhlY190eXBlLm9uY2UsMSksXHJcbiAgICAgICAgZnVuY3Rpb246c2Nyb2xsX3VwLFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2VcclxuICAgICAgfSlcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5Olwic2Nyb2xsZG93blwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgICAgaWQ6QmluZChcInNjcm9sbGRvd25cIixzY3JvbGxfZG93bixleGVjX3R5cGUub25jZSwxKSxcclxuICAgICAgICBmdW5jdGlvbjpzY3JvbGxfZG93bixcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlXHJcbiAgICAgIH0pXHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIktleVNcIixcclxuICAgICAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgICAgIGlkOkJpbmQoXCJLZXlTXCIsc2F2ZV9mdW5jLGV4ZWNfdHlwZS5vbmNlLDEpLFxyXG4gICAgICAgIGZ1bmN0aW9uOnNhdmVfZnVuYyxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlXHJcbiAgICAgIH0pXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PntcclxuICAgICAgICBpZihlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcclxuICAgICAgICAgIERFQlVHX3YubGFzdF9jbGlja2VkID0gZS50YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlX2J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PntcclxuICAgICAgICBQQVVTRUQgPSAhUEFVU0VEO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICBpZih0aGlzLmdldFJvb20oKSl7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZWYoMTYuNjYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwxNi42NilcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIGluaXQodGhpcyk7XHJcbiAgfVxyXG4gIHJlbmRlcih0Om51bWJlcil7XHJcbiAgICBsZXQgdGltZSA9IHQgLSBsYXN0X3JlbmRlcl90aW1lXHJcbiAgICBsYXN0X3JlbmRlcl90aW1lID0gdDtcclxuICAgIGxldCBhbGxfY2FtZXJhcyA9IHRoaXMuc3RhdGUuY2FtZXJhcztcclxuICAgIGxldCBkZWJ1Z19pbmRleCA9IC0xO1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICBhbGxfY2FtZXJhcyA9IFsuLi5hbGxfY2FtZXJhcyxERUJVR192LmNhbWVyYV1cclxuICAgICAgZGVidWdfaW5kZXggPSBhbGxfY2FtZXJhcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gMDthIDwgIGFsbF9jYW1lcmFzLmxlbmd0aDthKyspe1xyXG4gICAgICBsZXQgY2FtZXJhID0gYWxsX2NhbWVyYXNbYV07XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcy5oZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcy53aWR0aCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LmNsZWFyUmVjdCgwLDAsY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgsY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dC5maWxsU3R5bGU9XCJibGFja1wiO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LmZpbGxSZWN0KDAsMCxjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCxjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQpO1xyXG4gICAgICBsZXQgY2FtZXJhX2JveCA9IHtcclxuICAgICAgICB4OmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6Y2FtZXJhLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgd2lkdGg6Y2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZyksXHJcbiAgICAgICAgaGVpZ2h0OmNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKVxyXG4gICAgICB9O1xyXG4gICAgICBsZXQgcGFydGljbGVfY29sbGlkZXMgPSB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5jaGVja19vYmplY3RzKGNhbWVyYV9ib3gsW10sdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ucGFydGljbGVzX2Fycik7XHJcbiAgICAgIGxldCBjYW1lcmFfY29sbGlkZXJzID0gWy4uLnRoaXMuc3RhdGUuY3VycmVudF9yb29tLmNoZWNrX29iamVjdHMoY2FtZXJhX2JveCksLi4ucGFydGljbGVfY29sbGlkZXNdO1xyXG4gICAgICBsZXQgcmVuZGVyX2FyZ3MgPSB7XHJcbiAgICAgICAgY29udGV4dDp0aGlzLm9mZnNjcmVlbl9jb250ZXh0LFxyXG4gICAgICAgIGNhbWVyYTpjYW1lcmEsXHJcbiAgICAgIH07XHJcbiAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncyx7XHJcbiAgICAgICAgc3ByaXRlOnRoaXMuc3RhdGUuY3VycmVudF9yb29tLnJlbmRlcmYodGltZSksXHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICAgIHNjYWxlOjFcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBoaXRib3hlczpjb2xsaXNpb25fYm94W10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgYSBvZiBjYW1lcmFfY29sbGlkZXJzLmZpbHRlcigoYikgPT4gYi5yZW5kZXIpKSB7XHJcbiAgICAgICAgbGV0IHJlbmRlcmVkID0gYS5yZW5kZXJfdHJhY2sodCk7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVuZGVyZWQpKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbmVkX3Nwcml0ZSBvZiByZW5kZXJlZClcclxuICAgICAgICAgICAgc3ByaXRlX3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICAgICAgc3ByaXRlOnBvc2l0aW9uZWRfc3ByaXRlLnNwcml0ZSxcclxuICAgICAgICAgICAgICB4OiBwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICAgIHk6IHBvc2l0aW9uZWRfc3ByaXRlLnksXHJcbiAgICAgICAgICAgICAgcm90YXRpb246IGEucm90YXRpb24sXHJcbiAgICAgICAgICAgICAgc2NhbGU6YS5zY2FsaW5nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGxldCBwb3NpdGlvbmVkX3Nwcml0ZSA9IHJlbmRlcmVkIGFzIHBvc2l0aW9uZWRfc3ByaXRlO1xyXG4gICAgICAgICAgc3ByaXRlX3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICAgIHNwcml0ZTogcG9zaXRpb25lZF9zcHJpdGUuc3ByaXRlLFxyXG4gICAgICAgICAgICB4OiBwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICB5OiBwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgICAgICByb3RhdGlvbjogYS5yb3RhdGlvbixcclxuICAgICAgICAgICAgc2NhbGU6YS5zY2FsaW5nXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoREVCVUcgJiYgYS5jb2xsaXNpb24pe1xyXG4gICAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5hLmdldEFsbENvbGxpc2lvbkJveGVzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20udGV4dF9ub2Rlcyl7XHJcbiAgICAgICAgdGV4dF9yZW5kZXJlcihyZW5kZXJfYXJncyx7XHJcbiAgICAgICAgICB4Om5vZGUuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICAgIHk6bm9kZS5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgZm9udDpub2RlLnJlbmRlcmYodClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIGlmKGNhbWVyYS5odWQpe1xyXG4gICAgICAgIGxldCBncmFwaGljcyA9IGNhbWVyYS5odWQuZ3JhcGhpY19lbGVtZW50cztcclxuICAgICAgICBsZXQgdGV4dF9lbGVtZW50cyA9IGNhbWVyYS5odWQudGV4dF9lbGVtZW50cztcclxuICAgICAgICBmb3IobGV0IGEgb2YgZ3JhcGhpY3Mpe1xyXG4gICAgICAgICAgbGV0IHJlbmRlcmVkID0gYS5yZW5kZXJfdHJhY2sodCk7XHJcbiAgICAgICAgICBpZihhLnJlbmRlcil7XHJcbiAgICAgICAgICAgIGZvcihsZXQgcG9zaXRpb25lZF9zcHJpdGUgb2YgcmVuZGVyZWQpe1xyXG4gICAgICAgICAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncyx7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGU6cG9zaXRpb25lZF9zcHJpdGUuc3ByaXRlLFxyXG4gICAgICAgICAgICAgICAgeDpwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICAgICAgeTpwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgICAgICAgICAgcm90YXRpb246YS5yb3RhdGlvbixcclxuICAgICAgICAgICAgICAgIHNjYWxlOmEuc2NhbGluZ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vcmVuZGVyX2FyZ3MuY29udGV4dCA9IHRoaXMuc3RhdGUuY29udGV4dDtcclxuICAgICAgICBmb3IobGV0IGEgb2YgdGV4dF9lbGVtZW50cyl7XHJcbiAgICAgICAgICBsZXQgc3QgPSBhLnN0YXRlO1xyXG4gICAgICAgICAgaHVkX3RleHRfcmVuZGVyZXIocmVuZGVyX2FyZ3Mse1xyXG4gICAgICAgICAgICB4OnN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6c3QucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgZm9udDphLnJlbmRlcmYodClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChERUJVRyAmJiBjYW1lcmEuc3RhdGUuZGVidWcpIHtcclxuICAgICAgICBsZXQgYm94OiBjb2xsaXNpb25fYm94O1xyXG4gICAgICAgIGxldCBib3hlc19jb3B5ID0gWy4uLmJveGVzXVxyXG4gICAgICAgIHdoaWxlKGJveGVzX2NvcHkubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICBsZXQgYm94ID0gYm94ZXNfY29weS5wb3AoKTtcclxuICAgICAgICAgIGxldCByZWN0ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDpib3gud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDpib3guaGVpZ2h0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHJva2VkX3JlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCxyZWN0LGJveC54LGJveC55LFwiI0ZGMDAwMFwiLDEsY2FtZXJhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUoaGl0Ym94ZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICBsZXQgYm94ID0gaGl0Ym94ZXMucG9wKCk7XHJcbiAgICAgICAgICBsZXQgcmVjdCA9IHtcclxuICAgICAgICAgICAgd2lkdGg6Ym94LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6Ym94LmhlaWdodFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyKHRoaXMub2Zmc2NyZWVuX2NvbnRleHQscmVjdCxib3gueCxib3gueSxcIiMwMDgwMDBcIiwxLGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKERFQlVHX3Yuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50KXtcclxuICAgICAgICAgIGxldCBjb2xsID0gREVCVUdfdi5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQuZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gICAgICAgICAgcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LHt3aWR0aDoyNSxoZWlnaHQ6MjV9LGNvbGwueCxjb2xsLnksXCJza3libHVlXCIsMTAsY2FtZXJhKTtcclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LGNvbGwsY29sbC54LGNvbGwueSxcImJsdWVcIiwxLGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihhICE9PSBkZWJ1Z19pbmRleCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLm9mZnNjcmVlbl9jYW52YXMsY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngsY2FtZXJhLnN0YXRlLnZpZXdwb3J0LnkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgREVCVUdfdi50YXJnZXQuZ2V0Q29udGV4dChcIjJkXCIpLmRyYXdJbWFnZSh0aGlzLm9mZnNjcmVlbl9jYW52YXMsY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngsY2FtZXJhLnN0YXRlLnZpZXdwb3J0LnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihERUJVRylcclxuICAgICAgYm94ZXMgPSBbXTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoYSk9Pnt0aGlzLnJlbmRlcihhKX0pOyBcclxuICB9XHJcbiAgaW5pdGlhbGl6ZSgpe1xyXG4gICAgaW5pdF9jbGlja19oYW5kbGVyKHRoaXMpO1xyXG4gIH1cclxuICBzdGFydF9sb2dpYyhhOm51bWJlcil7XHJcbiAgICByZXR1cm4gd2luZG93LnNldEludGVydmFsKCgpPT57XHJcbiAgICAgIGlmKCFQQVVTRUQpe1xyXG4gICAgICAgIGxldCBuZXdfdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHRpbWVfc2luY2UgPSBuZXdfdGltZS5nZXRUaW1lKCkgLSBsYXN0X3RpbWUuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxhc3RfdGltZSA9IG5ld190aW1lO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY3VycmVudF9yb29tKXtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnN0YXRlZih0aW1lX3NpbmNlKTtcclxuICAgICAgICAgIGlmKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmh1ZCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmh1ZC5zdGF0ZWYodGltZV9zaW5jZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBFeGVjdXRlUmVwZWF0QmluZHMoYSk7XHJcbiAgICB9LGEpO1xyXG4gIH1cclxuICBnZXRSb29tKCl7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb207XHJcbiAgfVxyXG4gIGFzeW5jIGxvYWRSb29tU3RyaW5nKHg6c3RyaW5nKXtcclxuICAgIGZvcihsZXQgYSBvZiBPYmplY3Qua2V5cyhyb29tX2xpc3QpKXtcclxuICAgICAgaWYoYSA9PSB4KXtcclxuICAgICAgICBsZXQgbmV3X3Jvb20gPSA8cm9vbTx7fT4+bmV3IHJvb21fbGlzdFthXSh0aGlzKVxyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFJvb20obmV3X3Jvb20pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkUm9vbSh4OnJvb208dW5rbm93bj4pe1xyXG4gICAgaWYodGhpcy5zdGF0ZS5sb2dpYyl7XHJcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuc3RhdGUubG9naWMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB4LmdhbWUgPSB0aGlzO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20gIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgIHdoaWxlKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ub2JqZWN0c1swXS5kZWxldGUoKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGlkIG9mIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmJpbmRzKXtcclxuICAgICAgICBVbmJpbmQoaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBuZXdfcm9vbSA9IGF3YWl0IHgubG9hZCgpO1xyXG4gICAgeC5yZWdpc3Rlcl9jb250cm9scygpO1xyXG4gICAgeC5yZWdpc3RlclBhcnRpY2xlcygpO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5sb2dpYyAhPSB1bmRlZmluZWQpe1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUubG9naWMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZS5sb2dpYyA9IHRoaXMuc3RhcnRfbG9naWMobG9naWNfbG9vcF9pbnRlcnZhbClcclxuICAgIGlmIChERUJVRykge1xyXG4gICAgICBkZWJ1Z191cGRhdGVfcm9vbV9saXN0KCk7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9wcmVmYWJzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbSA9IHg7XHJcbiAgICBkZWJ1Z191cGRhdGVfb2JqX2xpc3QoKTtcclxuICAgIGlmKCF0aGlzLmlzUmVuZGVyaW5nKXtcclxuICAgICAgdGhpcy5yZW5kZXIoMCk7XHJcbiAgICAgIHRoaXMuaXNSZW5kZXJpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9