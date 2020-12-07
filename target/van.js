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
let canvas_element = document.getElementById("target");
exports.g = new van_1.game(canvas_element.getContext("2d"), {}, (g) => __awaiter(void 0, void 0, void 0, function* () {
    g.loadRoomString("Overworld");
}));


/***/ }),

/***/ "./src/game/objects/Bishop.ts":
/*!************************************!*\
  !*** ./src/game/objects/Bishop.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bishop = void 0;
const piece_1 = __webpack_require__(/*! ./abstract/piece */ "./src/game/objects/abstract/piece.ts");
class Bishop extends piece_1.piece {
    constructor(state, params = piece_1.piece.default_params) {
        super(state, {
            side: params.side
        });
        this.sprite_url = "./sprites/bishop.png";
        this.state.type = piece_1.piece_type.bishop;
    }
    getAttacking() {
        return this.attackDiagonal();
    }
}
exports.Bishop = Bishop;


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
    constructor(state, params) {
        super(state, params);
        this.tags = ["player"];
        this.state.position = state.position;
    }
    registerControls() {
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
    constructor() {
        super(...arguments);
        this.sprite_url = "./sprites/cursor.png";
        this.height = 64;
        this.width = 64;
        this.collision = true;
        this.render = true;
        this.tags = ["Cursor"];
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
    constructor(state, params = Door.default_params) {
        super(state, params);
        this.sprite_url = "./sprites/target.png";
        this.height = 100;
        this.width = 100;
        this.tags = [];
        this.collision = false;
        this.render = true;
    }
    statef(time_delta) {
        let collides = main_1.g.getRoom().checkCollisions(this.getFullCollisionBox());
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
    registerAnimations() {
    }
    registerAudio() {
    }
    registerControls() {
    }
}
exports.Door = Door;
Door.default_params = {
    location: "Underworld",
    test: true,
    yep: 15
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
    constructor(state, parameters = Goomba.default_params) {
        super(state, parameters);
        this.sprite_url = "./sprites/folder/robot.png";
        this.height = 149;
        this.width = 149;
        this.tags = ["dummy"];
        this.collision = true;
        if (parameters.id != undefined) {
            this.id = parameters.id;
        }
        Object.assign(this.state, {
            direction: direction.left,
            jumping: false,
            health: 100,
            times_airshot: 0,
            max_times_airshot: 0
        });
        //this.animations.play("walk1");
    }
    registerAnimations() {
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
    registerAudio() {
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
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
const platformer_obj_1 = __webpack_require__(/*! ./abstract/platformer_obj */ "./src/game/objects/abstract/platformer_obj.ts");
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
class Gun extends platformer_obj_1.platformer_obj {
    constructor() {
        super(...arguments);
        this.sprite_url = "./sprites/folder/gun.png";
        this.height = 50;
        this.width = 20;
        this.collision = false;
        this.render = true;
        this.gravity = false;
        this.tags = ["gun"];
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
            this.player = this.parent.getItemsByTag("player")[0];
            this.cursor = room.getObjByTag("Cursor")[0];
        }
    }
}
exports.Gun = Gun;


/***/ }),

/***/ "./src/game/objects/King.ts":
/*!**********************************!*\
  !*** ./src/game/objects/King.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.King = void 0;
const piece_1 = __webpack_require__(/*! ./abstract/piece */ "./src/game/objects/abstract/piece.ts");
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
class King extends piece_1.piece {
    constructor(state, params = piece_1.piece.default_params) {
        super(state, {
            side: params.side
        });
        this.sprite_url = "./sprites/king.png";
        this.state.type = piece_1.piece_type.king;
    }
    check_left_castle(room, cords) {
        if (!this.state.has_moved && room.get_piece({ x: cords.x - 1, y: cords.y }).length == 0 && room.get_piece({ x: cords.x - 2, y: cords.y }).length == 0 && room.get_piece({ x: cords.y - 3, y: cords.y }).length == 0) {
            let rook = room.get_piece({ x: cords.x - 4, y: cords.y });
            if (rook.length > 0 && !rook[0].state.has_moved) {
                return true;
            }
        }
        return false;
    }
    check_right_castle(room, cords) {
        if (!this.state.has_moved && room.get_piece({ x: cords.x + 1, y: cords.y }).length == 0 && room.get_piece({ x: cords.x + 2, y: cords.y }).length == 0) {
            let rook = room.get_piece({ x: cords.x + 3, y: cords.y });
            if (rook.length > 0 && !rook[0].state.has_moved) {
                return true;
            }
        }
        return false;
    }
    getAttacking() {
        let cords = this.getCords();
        let room = main_1.g.getRoom();
        let attacked = [];
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                if ((x !== 0 || y !== 0) && cords.x + x >= 0 && cords.y + x < 8 && cords.y + y >= 0 && cords.y + y < 8) {
                    let piece = room.get_piece({ x: cords.x + x, y: cords.y + y });
                    let safe = true;
                    if (safe && piece.length === 0 || piece[0].state.side !== this.state.side) {
                        attacked.push({ x: cords.x + x, y: cords.y + y });
                    }
                }
            }
        }
        //castle check left
        if (this.check_left_castle(room, cords)) {
            attacked.push({ x: cords.x - 2, y: cords.y });
        }
        if (this.check_right_castle(room, cords)) {
            attacked.push({ x: cords.x + 2, y: cords.y });
        }
        return attacked;
    }
}
exports.King = King;


/***/ }),

/***/ "./src/game/objects/Knight.ts":
/*!************************************!*\
  !*** ./src/game/objects/Knight.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = void 0;
const piece_1 = __webpack_require__(/*! ./abstract/piece */ "./src/game/objects/abstract/piece.ts");
class Knight extends piece_1.piece {
    constructor(state, params = piece_1.piece.default_params) {
        super(state, {
            side: params.side
        });
        this.sprite_url = "./sprites/knight.png";
        this.state.type = piece_1.piece_type.knight;
    }
    getAttacking() {
        let cords = this.getCords();
        let attacked = [];
        attacked.push({ x: cords.x + 1, y: cords.y + 2 });
        attacked.push({ x: cords.x - 1, y: cords.y + 2 });
        attacked.push({ x: cords.x + 2, y: cords.y + 1 });
        attacked.push({ x: cords.x + 2, y: cords.y - 1 });
        attacked.push({ x: cords.x + 1, y: cords.y - 2 });
        attacked.push({ x: cords.x - 1, y: cords.y - 2 });
        attacked.push({ x: cords.x - 2, y: cords.y + 1 });
        attacked.push({ x: cords.x - 2, y: cords.y - 1 });
        return (attacked.filter((x) => x.x >= 0 && x.x < 8 && x.y >= 0 && x.y < 8));
    }
}
exports.Knight = Knight;


/***/ }),

/***/ "./src/game/objects/Move.ts":
/*!**********************************!*\
  !*** ./src/game/objects/Move.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
const Board_1 = __webpack_require__(/*! ../rooms/Board */ "./src/game/rooms/Board.ts");
const piece_1 = __webpack_require__(/*! ./abstract/piece */ "./src/game/objects/abstract/piece.ts");
const Queen_1 = __webpack_require__(/*! ./Queen */ "./src/game/objects/Queen.ts");
const controls_1 = __webpack_require__(/*! ../../lib/controls */ "./src/lib/controls.ts");
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
class Move extends object_1.obj {
    constructor(state) {
        super(state);
        this.sprite_url = "./sprites/attacked.png";
        this.height = 100;
        this.width = 100;
        this.render = false;
        this.layer = 2;
        this.state = {
            position: {
                x: state.position.x * this.width - 350,
                y: state.position.y * this.height - 350
            },
            velocity: {
                x: 0,
                y: 0
            },
            rotation: 0,
            scaling: {
                width: 1,
                height: 1
            }
        };
    }
    getCords() {
        return { x: Math.floor((this.state.position.x + 350) / 100), y: Math.floor((this.state.position.y + 350) / 100) };
    }
    registerControls() {
        this.bindControl("mouse1", controls_1.exec_type.once, () => {
            if (this.render) {
                let room = main_1.g.state.current_room;
                let p = room.get_piece(this.getCords());
                let s = room.state.selected;
                if (s.state.type === piece_1.piece_type.king && !s.state.has_moved && this.getCords().x === 6) {
                    let rooks = room.get_piece({ x: 7, y: s.getCords().y });
                    rooks[0].movetoCords({ x: 5, y: s.getCords().y });
                }
                if (s.state.type === piece_1.piece_type.king && !s.state.has_moved && this.getCords().y === 2) {
                    let rooks = room.get_piece({ x: 0, y: s.getCords().y });
                    rooks[0].movetoCords({ x: 3, y: s.getCords().y });
                }
                if (s.state.type === piece_1.piece_type.pawn && !s.state.has_moved && s.state.side === Board_1.side.white && this.getCords().y === 3) {
                    room.state.white_board[this.getCords().x][this.getCords().y - 1].enpassent = true;
                }
                if (s.state.type === piece_1.piece_type.pawn && !s.state.has_moved && s.state.side === Board_1.side.black && this.getCords().y === 4) {
                    room.state.black_board[this.getCords().x][this.getCords().y + 1].enpassent = true;
                }
                if (s.state.type === piece_1.piece_type.pawn && s.state.side == Board_1.side.black && room.get_meta(this.getCords(), Board_1.side.white).enpassent) {
                    let f = room.get_piece({ x: this.getCords().x, y: this.getCords().y + 1 });
                    room.remove_piece(f[0]);
                }
                if (s.state.type === piece_1.piece_type.pawn && s.state.side == Board_1.side.white && room.get_meta(this.getCords(), Board_1.side.black).enpassent) {
                    let f = room.get_piece({ x: this.getCords().x, y: this.getCords().y - 1 });
                    room.remove_piece(f[0]);
                }
                s.state.has_moved = true;
                if (p.length > 0) {
                    room.remove_piece(p[0]);
                }
                if ((this.getCords().y == 7 || this.getCords().y == 0) && s.state.type === piece_1.piece_type.pawn) {
                    let qu = new Queen_1.Queen({
                        position: this.getCords(),
                        velocity: {
                            x: 0,
                            y: 0
                        },
                        rotation: 0,
                        scaling: {
                            height: 1, width: 1
                        }
                    }, { side: s.state.side });
                    qu.load().then(() => {
                        room.add_piece(qu);
                        room.remove_piece(s);
                    });
                }
                if (s.state.side === Board_1.side.white) {
                    room.change_side(Board_1.side.black);
                }
                else if (s.state.side === Board_1.side.black) {
                    room.change_side(Board_1.side.white);
                }
                room.clear_attacked();
                room.state.selected.movetoCords(this.getCords());
                room.state.attacked = [];
                room.state.selected = undefined;
            }
        });
    }
}
exports.Move = Move;


/***/ }),

/***/ "./src/game/objects/Pawn.ts":
/*!**********************************!*\
  !*** ./src/game/objects/Pawn.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const piece_1 = __webpack_require__(/*! ./abstract/piece */ "./src/game/objects/abstract/piece.ts");
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
class Pawn extends piece_1.piece {
    constructor(state, params = piece_1.piece.default_params) {
        super(state, {
            side: params.side
        });
        this.sprite_url = "./sprites/pawn.png";
        this.state.type = piece_1.piece_type.pawn;
    }
    getAttacking() {
        let attacked = [];
        let cords = this.getCords();
        let room = main_1.g.getRoom();
        if (this.state.side == piece_1.side.white) {
            if (room.get_piece({ x: cords.x, y: cords.y + 1 }).length === 0) {
                attacked.push({ x: cords.x, y: cords.y + 1 });
                if (!this.state.has_moved && room.get_piece({ x: cords.x, y: cords.y + 2 }).length === 0) {
                    attacked.push({ x: cords.x, y: cords.y + 2 });
                }
            }
            let left_cords = { x: cords.x - 1, y: cords.y + 1 };
            let right_cords = { x: cords.x + 1, y: cords.y + 1 };
            let left = room.get_piece(left_cords);
            let right = room.get_piece(right_cords);
            let left_en = room.get_meta(left_cords, piece_1.side.black);
            let right_en = room.get_meta(right_cords, piece_1.side.black);
            if ((cords.x - 1 >= 0) && ((left.length > 0 && left[0].state.side !== this.state.side) || (left_en && left_en.enpassent))) {
                attacked.push(left_cords);
            }
            if ((cords.x + 1 < 8) && ((right.length > 0 && right[0].state.side !== this.state.side) || (right_en && right_en.enpassent))) {
                attacked.push(right_cords);
            }
        }
        else {
            if (room.get_piece({ x: cords.x, y: cords.y - 1 }).length === 0) {
                attacked.push({ x: cords.x, y: cords.y - 1 });
                if (!this.state.has_moved && room.get_piece({ x: cords.x, y: cords.y - 2 }).length === 0) {
                    attacked.push({ x: cords.x, y: cords.y - 2 });
                }
            }
            let left_cords = { x: cords.x - 1, y: cords.y - 1 };
            let right_cords = { x: cords.x + 1, y: cords.y - 1 };
            let left = room.get_piece(left_cords);
            let right = room.get_piece(right_cords);
            let left_en = room.get_meta(left_cords, piece_1.side.white);
            let right_en = room.get_meta(right_cords, piece_1.side.white);
            if ((cords.x - 1 >= 0) && ((left.length > 0 && left[0].state.side !== this.state.side) || (left_en && left_en.enpassent))) {
                attacked.push(left_cords);
            }
            if ((cords.x + 1 < 8) && ((right.length > 0 && right[0].state.side !== this.state.side) || (right_en && right_en.enpassent))) {
                attacked.push(right_cords);
            }
        }
        return attacked;
    }
}
exports.Pawn = Pawn;


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
    constructor(state, parameters) {
        super(state);
        this.enemy = true;
        this.objects.push(new ControlledPlayer_1.ControlledPlayer(state, parameters));
        this.objects.push(new Gun_1.Gun({
            position: { x: state.position.x, y: state.position.y + 100 },
            velocity: { x: 0, y: 0 },
            rotation: 0,
            scaling: { height: 1, width: 1 }
        }, parameters));
    }
}
exports.Player = Player;


/***/ }),

/***/ "./src/game/objects/Queen.ts":
/*!***********************************!*\
  !*** ./src/game/objects/Queen.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
const piece_1 = __webpack_require__(/*! ./abstract/piece */ "./src/game/objects/abstract/piece.ts");
class Queen extends piece_1.piece {
    constructor(state, params = piece_1.piece.default_params) {
        super(state, {
            side: params.side
        });
        this.sprite_url = "./sprites/queen.png";
        this.state.type = piece_1.piece_type.queen;
    }
    getAttacking() {
        return this.attackDiagonal().concat(this.attackCardinal());
    }
}
exports.Queen = Queen;


/***/ }),

/***/ "./src/game/objects/Rook.ts":
/*!**********************************!*\
  !*** ./src/game/objects/Rook.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rook = void 0;
const piece_1 = __webpack_require__(/*! ./abstract/piece */ "./src/game/objects/abstract/piece.ts");
class Rook extends piece_1.piece {
    constructor(state, params = piece_1.piece.default_params) {
        super(state, {
            side: params.side
        });
        this.sprite_url = "./sprites/rook.png";
        this.state.type = piece_1.piece_type.rook;
    }
    getAttacking() {
        return this.attackCardinal();
    }
}
exports.Rook = Rook;


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

/***/ "./src/game/objects/abstract/piece.ts":
/*!********************************************!*\
  !*** ./src/game/objects/abstract/piece.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.piece = exports.piece_type = exports.side = void 0;
const object_1 = __webpack_require__(/*! ../../../lib/object */ "./src/lib/object.ts");
const sprite_1 = __webpack_require__(/*! ../../../lib/sprite */ "./src/lib/sprite.ts");
const controls_1 = __webpack_require__(/*! ../../../lib/controls */ "./src/lib/controls.ts");
const main_1 = __webpack_require__(/*! ../../main */ "./src/game/main.ts");
var side;
(function (side) {
    side[side["white"] = 0] = "white";
    side[side["black"] = 1] = "black";
})(side = exports.side || (exports.side = {}));
var piece_type;
(function (piece_type) {
    piece_type[piece_type["pawn"] = 0] = "pawn";
    piece_type[piece_type["rook"] = 1] = "rook";
    piece_type[piece_type["bishop"] = 2] = "bishop";
    piece_type[piece_type["queen"] = 3] = "queen";
    piece_type[piece_type["king"] = 4] = "king";
    piece_type[piece_type["knight"] = 5] = "knight";
})(piece_type = exports.piece_type || (exports.piece_type = {}));
class piece extends object_1.obj {
    constructor(state, params = piece.default_params) {
        super(state, params);
        this.height = 100;
        this.width = 100;
        this.collision = true;
        this.state = {
            position: {
                x: state.position.x * this.width - 350,
                y: state.position.y * this.height - 350
            },
            velocity: {
                x: 0,
                y: 0
            },
            side: params.side,
            type: undefined,
            has_moved: false,
            rotation: state.rotation,
            scaling: state.scaling
        };
        this.params = params;
    }
    movetoCords(a) {
        this.state.position.x = a.x * this.width - 350;
        this.state.position.y = a.y * this.height - 350;
    }
    getCords() {
        return { x: Math.round((this.state.position.x + 350) / 100), y: Math.round((this.state.position.y + 350) / 100) };
    }
    getAttacking() {
        return [];
    }
    renderf(t) {
        let sprites = sprite_1.sprite_gen(this.sprite_sheet, this.width, this.height);
        if (this.params.side === side.white) {
            return {
                sprite: sprites[0][0],
                x: this.state.position.x,
                y: this.state.position.y
            };
        }
        else {
            return {
                sprite: sprites[0][1],
                x: this.state.position.x,
                y: this.state.position.y
            };
        }
    }
    attackDiagonal() {
        let cords = this.getCords();
        console.log(cords);
        let room = main_1.g.getRoom();
        let attacked = [];
        for (let a = 1; a < 8; a++) {
            if (cords.x - a >= 0 && cords.x - a < 8 && cords.y - a >= 0 && cords.x - a < 8) {
                let pieces = room.get_piece({ x: cords.x - a, y: cords.y - a });
                if (pieces.length == 0 || pieces[0].state.side !== this.state.side) {
                    attacked.push({ x: cords.x - a, y: cords.y - a });
                }
                if (pieces.length > 0) {
                    break;
                }
            }
        }
        for (let a = 1; a < 8; a++) {
            if (cords.x - a >= 0 && cords.x - a < 8 && cords.y + a >= 0 && cords.y + a < 8) {
                let pieces = room.get_piece({ x: cords.x - a, y: cords.y + a });
                if (pieces.length == 0 || pieces[0].state.side !== this.state.side) {
                    attacked.push({ x: cords.x - a, y: cords.y + a });
                }
                if (pieces.length > 0) {
                    break;
                }
            }
        }
        for (let a = 1; a < 8; a++) {
            if (cords.x + a >= 0 && cords.x + a < 8 && cords.y + a >= 0 && cords.y + a < 8) {
                let pieces = room.get_piece({ x: cords.x + a, y: cords.y + a });
                if (pieces.length == 0 || pieces[0].state.side !== this.state.side) {
                    attacked.push({ x: cords.x + a, y: cords.y + a });
                }
                if (pieces.length > 0) {
                    break;
                }
            }
        }
        for (let a = 1; a < 8; a++) {
            if (cords.x + a >= 0 && cords.x + a < 8 && cords.y - a >= 0 && cords.y - a < 8) {
                let pieces = room.get_piece({ x: cords.x + a, y: cords.y - a });
                if (pieces.length == 0 || pieces[0].state.side !== this.state.side) {
                    attacked.push({ x: cords.x + a, y: cords.y - a });
                }
                if (pieces.length > 0) {
                    break;
                }
            }
        }
        return attacked;
    }
    attackCardinal() {
        let cords = this.getCords();
        let room = main_1.g.getRoom();
        let attacked = [];
        for (let a = cords.x - 1; a >= 0; a--) {
            let pieces = room.get_piece({ x: a, y: cords.y });
            if (pieces.length === 0 || pieces[0].state.side !== this.state.side) {
                attacked.push({ x: a, y: cords.y });
            }
            if (pieces.length > 0) {
                break;
            }
        }
        for (let a = cords.x + 1; a < 8; a++) {
            let pieces = room.get_piece({ x: a, y: cords.y });
            if (pieces.length === 0 || pieces[0].state.side !== this.state.side) {
                attacked.push({ x: a, y: cords.y });
            }
            if (pieces.length > 0) {
                break;
            }
        }
        for (let a = cords.y - 1; a >= 0; a--) {
            let pieces = room.get_piece({ x: cords.x, y: a });
            if (pieces.length === 0 || pieces[0].state.side !== this.state.side) {
                attacked.push({ x: cords.x, y: a });
            }
            if (pieces.length > 0) {
                break;
            }
        }
        for (let a = cords.y + 1; a < 8; a++) {
            let pieces = room.get_piece({ x: cords.x, y: a });
            if (pieces.length === 0 || pieces[0].state.side !== this.state.side) {
                attacked.push({ x: cords.x, y: a });
            }
            if (pieces.length > 0) {
                break;
            }
        }
        return attacked;
    }
    unbind_controls() {
        for (let a of this.binds) {
            controls_1.Unbind(a);
        }
    }
    bind_controls() {
        this.bindControl("mouse1", controls_1.exec_type.once, () => {
            let room = main_1.g.state.current_room;
            if (room.state.turn === this.state.side) {
                room.state.selected = this;
                room.clear_attacked();
                let valid_attacked = [];
                for (let g of this.getAttacking()) {
                    let pieces = room.get_piece(g);
                    if (pieces.length == 0 || pieces[0].state.side !== this.state.side) {
                        valid_attacked.push(g);
                    }
                }
                room.state.attacked = valid_attacked;
                room.attack(valid_attacked);
            }
        });
    }
}
exports.piece = piece;
piece.default_params = {
    side: side.white
};


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
    constructor(state, parameters) {
        super(state, parameters);
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
    constructor(state) {
        super(state);
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
    constructor() {
        super(...arguments);
        this.sprite_url = "./sprites/box.png";
        this.collision = true;
        this.height = 64;
        this.width = 500;
        this.gravity = false;
        this.enemy = false;
        this.tags = ["static"];
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
    constructor(state, params) {
        super(state, params);
        this.sprite_url = "./sprites/bullet.png";
        this.height = 20;
        this.width = 10;
        this.gravity = false;
        this.max_distance = 2000;
        this.tags = ["bullet"];
        this.state.damage = 5;
        this.state.distance = 0;
    }
    statef(time) {
        this.state.velocity = object_1.rotation_length(this.state.speed, this.state.rotation);
        this.state.distance += this.state.speed;
        if (this.state.distance > this.max_distance) {
            this.delete();
        }
    }
    registerControls() {
    }
}
exports.bullet = bullet;
class Rocket extends bullet {
    constructor(state, params) {
        super(state, params);
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
    registerAudio() {
        this.audio.add("explosion", "./sounds/explosion2.mp3");
    }
    statef(time) {
        super.statef(time);
        if (this.particle_timer == 0) {
            let offset = object_1.rotation_length(30, this.state.rotation + 180);
            this.emitParticle("smoke", offset, 400, 16);
        }
        this.particle_timer += time;
        if (this.particle_timer > this.particle_frequency) {
            this.particle_timer = 0;
        }
        let room = main_1.g.state.current_room;
        let collisions = room.checkCollisions(this.getFullCollisionBox(), ["gun", "player"]);
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
            let explosion_collisions = room.checkCollisions({
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
            this.emitParticle("explosion", { x: 0, y: 0 }, 500, 0);
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
const Bishop_1 = __webpack_require__(/*! ./Bishop */ "./src/game/objects/Bishop.ts");
const box_1 = __webpack_require__(/*! ./box */ "./src/game/objects/box.ts");
const bullet_1 = __webpack_require__(/*! ./bullet */ "./src/game/objects/bullet.ts");
const ControlledPlayer_1 = __webpack_require__(/*! ./ControlledPlayer */ "./src/game/objects/ControlledPlayer.ts");
const Cursor_1 = __webpack_require__(/*! ./Cursor */ "./src/game/objects/Cursor.ts");
const Door_1 = __webpack_require__(/*! ./Door */ "./src/game/objects/Door.ts");
const Goomba_1 = __webpack_require__(/*! ./Goomba */ "./src/game/objects/Goomba.ts");
const Gun_1 = __webpack_require__(/*! ./Gun */ "./src/game/objects/Gun.ts");
const King_1 = __webpack_require__(/*! ./King */ "./src/game/objects/King.ts");
const Knight_1 = __webpack_require__(/*! ./Knight */ "./src/game/objects/Knight.ts");
const Move_1 = __webpack_require__(/*! ./Move */ "./src/game/objects/Move.ts");
const Pawn_1 = __webpack_require__(/*! ./Pawn */ "./src/game/objects/Pawn.ts");
const Player_1 = __webpack_require__(/*! ./Player */ "./src/game/objects/Player.ts");
const Queen_1 = __webpack_require__(/*! ./Queen */ "./src/game/objects/Queen.ts");
const Rook_1 = __webpack_require__(/*! ./Rook */ "./src/game/objects/Rook.ts");
const VertBox_1 = __webpack_require__(/*! ./VertBox */ "./src/game/objects/VertBox.ts");
exports.prefabs = {
    Bishop: Bishop_1.Bishop,
    box: box_1.box,
    bullet: bullet_1.bullet,
    ControlledPlayer: ControlledPlayer_1.ControlledPlayer,
    Cursor: Cursor_1.Cursor,
    Door: Door_1.Door,
    Goomba: Goomba_1.Goomba,
    Gun: Gun_1.Gun,
    King: King_1.King,
    Knight: Knight_1.Knight,
    Move: Move_1.Move,
    Pawn: Pawn_1.Pawn,
    Player: Player_1.Player,
    Queen: Queen_1.Queen,
    Rook: Rook_1.Rook,
    VertBox: VertBox_1.VertBox,
};


/***/ }),

/***/ "./src/game/rooms/Board.ts":
/*!*********************************!*\
  !*** ./src/game/rooms/Board.ts ***!
  \*********************************/
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
exports.Board = exports.side = void 0;
const room_1 = __webpack_require__(/*! ../../lib/room */ "./src/lib/room.ts");
const Knight_1 = __webpack_require__(/*! ../objects/Knight */ "./src/game/objects/Knight.ts");
const Rook_1 = __webpack_require__(/*! ../objects/Rook */ "./src/game/objects/Rook.ts");
const Move_1 = __webpack_require__(/*! ../objects/Move */ "./src/game/objects/Move.ts");
const Bishop_1 = __webpack_require__(/*! ../objects/Bishop */ "./src/game/objects/Bishop.ts");
const Queen_1 = __webpack_require__(/*! ../objects/Queen */ "./src/game/objects/Queen.ts");
const King_1 = __webpack_require__(/*! ../objects/King */ "./src/game/objects/King.ts");
const Pawn_1 = __webpack_require__(/*! ../objects/Pawn */ "./src/game/objects/Pawn.ts");
const van_1 = __webpack_require__(/*! ../../van */ "./src/van.ts");
const render_1 = __webpack_require__(/*! ../../lib/render */ "./src/lib/render.ts");
const collision_1 = __webpack_require__(/*! ../../lib/collision */ "./src/lib/collision.ts");
var side;
(function (side) {
    side[side["white"] = 0] = "white";
    side[side["black"] = 1] = "black";
})(side = exports.side || (exports.side = {}));
function state_converter(pos, rotation, scaling) {
    return {
        position: pos,
        velocity: {
            x: 0,
            y: 0
        },
        rotation,
        scaling: {
            width: scaling,
            height: scaling
        }
    };
}
class Board extends room_1.room {
    constructor(game) {
        super(game, { objects: [] });
        this.background_url = "./sprites/board.png";
        game.state.cameras = [
            new render_1.Camera({
                x: 0,
                y: 0,
                dimensions: {
                    height: van_1.GetViewportDimensions().height,
                    width: van_1.GetViewportDimensions().width
                },
                scaling: 0.75,
                debug: false
            }, {
                x: 0,
                y: 0,
                width: 1,
                height: 1
            })
        ];
        this.state = {
            turn: side.white,
            white_board: [],
            black_board: [],
            selected: undefined,
            squares: [],
            pieces: [],
            attacked: []
        };
        let row2 = [new Rook_1.Rook(state_converter({ x: 0, y: 7 }, 0, 1), { side: side.black }), new Knight_1.Knight(state_converter({ x: 1, y: 7 }, 0, 1), { side: side.black }), new Bishop_1.Bishop(state_converter({ x: 2, y: 7 }, 0, 1), { side: side.black }), new Queen_1.Queen(state_converter({ x: 3, y: 7 }, 0, 1), { side: side.black }), new King_1.King(state_converter({ x: 4, y: 7 }, 0, 1), { side: side.black }), new Bishop_1.Bishop(state_converter({ x: 5, y: 7 }, 0, 1), { side: side.black }), new Knight_1.Knight(state_converter({ x: 6, y: 7 }, 0, 1), { side: side.black }), new Rook_1.Rook(state_converter({ x: 7, y: 7 }, 0, 1), { side: side.black })];
        let row7 = [new Rook_1.Rook(state_converter({ x: 0, y: 0 }, 0, 1), { side: side.white }), new Knight_1.Knight(state_converter({ x: 1, y: 0 }, 0, 1), { side: side.white }), new Bishop_1.Bishop(state_converter({ x: 2, y: 0 }, 0, 1), { side: side.white }), new Queen_1.Queen(state_converter({ x: 3, y: 0 }, 0, 1), { side: side.white }), new King_1.King(state_converter({ x: 4, y: 0 }, 0, 1), { side: side.white }), new Bishop_1.Bishop(state_converter({ x: 5, y: 0 }, 0, 1), { side: side.white }), new Knight_1.Knight(state_converter({ x: 6, y: 0 }, 0, 1), { side: side.white }), new Rook_1.Rook(state_converter({ x: 7, y: 0 }, 0, 1), { side: side.white })];
        for (let a = 0; a < row2.length; a++) {
            let pawn1 = new Pawn_1.Pawn(state_converter({ x: a, y: 1 }, 0, 1), { side: side.white });
            let pawn2 = new Pawn_1.Pawn(state_converter({ x: a, y: 6 }, 0, 1), { side: side.black });
            this.addItem(row7[a]);
            this.addItem(pawn1);
            this.addItem(row2[a]);
            this.addItem(pawn2);
            this.state.pieces.push(pawn2);
            this.state.pieces.push(row7[a]);
            this.state.pieces.push(pawn1);
            this.state.pieces.push(row2[a]);
        }
        for (let a = 0; a < 8; a++) {
            let mv_row = [];
            for (let b = 0; b < 8; b++) {
                let d = a;
                (() => {
                    let move_o = new Move_1.Move(state_converter({ x: a, y: b }, 0, 1));
                    mv_row.push(move_o);
                    this.addItem(move_o);
                })();
            }
            this.state.squares.push(mv_row);
        }
        this.state.black_board = this.blank_board();
        this.state.white_board = this.blank_board();
        /*
        let camera = g.state.cameras[0];
        camera.state.position = {
          x:0,
          y:0
        }
        let screen_dimensions = GetViewportDimensions();
        camera.state.dimensions = {
          width:screen_dimensions.width,
          height:screen_dimensions.height
        }
        */
        for (let x of this.state.pieces) {
            if (x.state.side === side.white) {
                x.bind_controls();
            }
        }
    }
    get_meta(a, s) {
        if (a.x >= 0 && a.x < 8 && a.y >= 0 && a.y < 8) {
            if (s === side.white) {
                return this.state.white_board[a.x][a.y];
            }
            return this.state.black_board[a.x][a.y];
        }
        return undefined;
    }
    change_side(s) {
        let to_bind;
        let to_unbind;
        if (s == side.white) {
            to_bind = s;
            to_unbind = side.black;
            this.clear_enpassent_board(this.state.white_board);
            this.clear_attacked_board(this.state.black_board);
            this.calculate_attacked_board(this.state.black_board, side.black);
        }
        else {
            to_bind = side.black;
            to_unbind = side.white;
            this.clear_enpassent_board(this.state.black_board);
            this.clear_attacked_board(this.state.white_board);
            this.calculate_attacked_board(this.state.white_board, side.white);
            console.log(this.state.white_board);
        }
        for (let x of this.state.pieces) {
            if (x.state.side === to_bind) {
                x.bind_controls();
            }
            else {
                x.unbind_controls();
            }
        }
        this.state.turn = s;
    }
    clear_enpassent_board(x) {
        for (let a = 0; a < 8; a++) {
            for (let b = 0; b < 8; b++) {
                x[a][b].enpassent = false;
            }
        }
    }
    calculate_attacked_board(x, s) {
        for (let a of this.state.pieces) {
            if (a.state.side == s) {
                let attacked = a.getAttacking();
                console.log(a);
                for (let b of attacked) {
                    console.log(b);
                    x[b.x][b.y].attacked = true;
                }
            }
        }
    }
    clear_attacked_board(x) {
        for (let a = 0; a < 8; a++) {
            for (let b = 0; b < 8; b++) {
                x[a][b].attacked = false;
            }
        }
    }
    blank_board() {
        let board = [];
        for (let a = 0; a < 8; a++) {
            let row = [];
            for (let b = 0; b < 8; b++) {
                row.push({
                    enpassent: false,
                    attacked: false
                });
            }
            board.push(row);
        }
        return board;
    }
    add_piece(a) {
        return __awaiter(this, void 0, void 0, function* () {
            yield a.load();
            this.addItem(a);
            this.state.pieces.unshift(a);
        });
    }
    remove_piece(a) {
        for (let b = 0; b < this.state.pieces.length; b++) {
            if (a.id === this.state.pieces[b].id) {
                this.state.pieces.splice(b, 1);
            }
        }
        a.delete();
    }
    get_piece(a) {
        return this.checkCollisions({
            x: a.x * 100 - 350,
            y: a.y * 100 - 350,
            height: 100,
            width: 100
        });
    }
    clear_attacked() {
        for (let a of this.state.attacked) {
            this.state.squares[a.x][a.y].render = false;
        }
    }
    attack(x) {
        for (let a of x) {
            this.state.squares[a.x][a.y].render = true;
        }
    }
    statef(a) {
        for (let a = 0; a < this.objects.length; a++) {
            collision_1.velocityCollisionCheck(this.objects[a], this.objects);
        }
    }
}
exports.Board = Board;


/***/ }),

/***/ "./src/game/rooms/Overworld.json":
/*!***************************************!*\
  !*** ./src/game/rooms/Overworld.json ***!
  \***************************************/
/*! exports provided: objects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"objects\":[{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":3750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":2750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":1750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":2750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":3250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":3250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":2250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":1750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":4250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":1250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":2250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":4250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":4750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":3750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":4750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":1250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":13200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":38200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":49700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":43700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":28700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":40700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":20700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":10200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":42200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":38700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":26200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":39200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":21700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":36200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":3700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":37200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":33200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":23200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":3200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":5700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":24700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":15200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":14200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":43200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":32700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":45700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":49200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":1700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":7200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":2700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":44200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":16700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":37700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":21200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":32200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":46200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":8700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":11200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":15700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":1200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":9200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":25700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":29700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":6200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":30200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":7700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":31700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":12200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":17700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":35700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":17200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":45200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":35200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":604,\"y\":-14},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":10700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":11700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":33700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":8200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":36700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":22700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":40200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":34200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":22200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":29200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":4700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":41200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":50200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":27200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":4200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":16200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":20200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":9700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":48200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":19200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":39700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":30700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":13700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":46700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":48700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":6700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":23700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":12700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":2200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":41700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":44700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":42700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":27700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":26700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":14700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":24200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":47200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":5200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":47700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":19700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":18200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":28200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":34700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":18700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":31200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":25200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"Cursor\",\"state\":{\"position\":{\"x\":-16.4375,\"y\":909.8784753821415},\"velocity\":{\"x\":0,\"y\":-1},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"id\":\"Cursor\"}},{\"type\":\"Player\",\"state\":{\"position\":{\"x\":700,\"y\":150},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"Goomba\",\"state\":{\"position\":{\"x\":500,\"y\":106.69374164962552},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1},\"direction\":0,\"jumping\":false,\"health\":100,\"times_airshot\":0,\"max_times_airshot\":0},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":-252.00000000000023,\"y\":147.46153846153845},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1.9213333333333331,\"height\":11.532280219780215}},\"parameters\":{}}]}");

/***/ }),

/***/ "./src/game/rooms/Overworld.ts":
/*!*************************************!*\
  !*** ./src/game/rooms/Overworld.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Overworld = void 0;
const room_1 = __webpack_require__(/*! ../../lib/room */ "./src/lib/room.ts");
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
const controls_1 = __webpack_require__(/*! ../../lib/controls */ "./src/lib/controls.ts");
const hud_1 = __webpack_require__(/*! ../../lib/hud */ "./src/lib/hud.ts");
const van_1 = __webpack_require__(/*! ../../van */ "./src/van.ts");
const bullet_1 = __webpack_require__(/*! ../objects/bullet */ "./src/game/objects/bullet.ts");
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
const render_1 = __webpack_require__(/*! ../../lib/render */ "./src/lib/render.ts");
const json = __webpack_require__(/*! ./Overworld.json */ "./src/game/rooms/Overworld.json");
class Overworld_HUD extends hud_1.HUD {
    setTextElements() {
        return [new hud_1.Text({
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
                return `Times Airshot:${x.state.times_airshot}`;
            }),
            new hud_1.Text({
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
            })];
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
        game.state.cameras = [
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
        /*
    
        for(let a = 0;a<10;a++){
          this.objects.push(new VertBox({
            position:{x:320,y:250 + a * 500},
            velocity:{x:0,y:0},
            rotation:0,
            scaling:{width:1,height:1}
          },{}));
          this.objects.push(new VertBox({
            position:{x:900,y:250 + a * 500},
            velocity:{x:0,y:0},
            rotation:0,
            scaling:{width:1,height:1}
          },{}));
          
        }
        for(let a = 0;a < 100; a++){
          this.objects.push(new box({
            position:{x:700 + a * 500,y:0},
            velocity:{x:0,y:0},
            rotation:0,
            scaling:{width:1,height:1}
          },{}));
        }
        
        this.addItems(new Player({
          position:{x:700,y:150},
          velocity:{x:0,y:0},
          rotation:0,
          scaling:{width:1,height:1}},{id:"player"}).combinedObjects());
        this.addItem(new Cursor({
          position:{x:0,y:0},
          velocity:{x:0,y:0},
          rotation:0,
          scaling:{width:1,height:1}},{id:"Cursor"}));
        this.addItem(new Goomba({
          position:{x:500,y:500},
          velocity:{x:0,y:0},
          rotation:0,
          scaling:{width:1,height:1}
        }));
        */
        game.state.cameras[0].hud = new Overworld_HUD();
    }
    registerControls() {
        this.bindControl("Escape", controls_1.exec_type.once, () => {
            this.game.state.cameras[0].state.debug = !this.game.state.cameras[0].state.debug;
            let player = this.getObj("player");
            player.collision = !player.collision;
            player.gravity = !player.gravity;
        });
        this.bindControl("mouse0down", controls_1.exec_type.repeat, () => {
            let gun = this.getObjByTag("gun")[0];
            if (gun) {
                let muzzle = object_1.rotation_length(30, gun.state.rotation);
                let position = {
                    x: gun.state.position.x + muzzle.x,
                    y: gun.state.position.y + muzzle.y
                };
                let bullets = [];
                for (let a = 0; a < 1; a++) {
                    bullets.push(new bullet_1.Rocket({
                        position: { x: position.x, y: position.y },
                        velocity: { x: 0, y: 0 },
                        rotation: gun.state.rotation,
                        scaling: { width: 1, height: 1 }
                    }, gun.state.rotation));
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
                room_1.applyGravity(this.objects[a], -1, -15);
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

/***/ "./src/game/rooms/Underworld.json":
/*!****************************************!*\
  !*** ./src/game/rooms/Underworld.json ***!
  \****************************************/
/*! exports provided: objects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"objects\":[{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":4250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":2000,\"y\":750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":1750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":4750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":2750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":3250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":3750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":4250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":1250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":247},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":3750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":1750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":4750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":2250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":2250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":2750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":3250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":320,\"y\":750},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"VertBox\",\"position\":{\"x\":900,\"y\":1250},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":17700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":38700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":43200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":23700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":2700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":22700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":18700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":29700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":48200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":12200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":608.3333333333333,\"y\":-20},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":20200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":14200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":30200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":46700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":16700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":8700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":26200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":42700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":19200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":44700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":45200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":48700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":5200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":34200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":38200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":32200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":37700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":33200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":7200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":1700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":39200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":5700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":11700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":16200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":39700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":9200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":46200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":22200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":27200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":32700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":21200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":3700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":47700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":25700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":37200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":4200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":18200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":8200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":41700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":13200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":45700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":28200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":35700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":40200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":10700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":12700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":30700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":44200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":47200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":34700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":40700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":43700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":1200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":41200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":21700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":26700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":50200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":27700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":15700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":28700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":11200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":2200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":33700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":25200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":17200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":31700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":36200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":49700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":36700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":20700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":10200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":6700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":6200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":19700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":24700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":31200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":13700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":29200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":49200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":35200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":7700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":42200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":3200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":9700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":14700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":24200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":23200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":4700,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"box\",\"position\":{\"x\":15200,\"y\":0},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"Cursor\",\"position\":{\"x\":481.4538812659912,\"y\":1062.8428172389417},\"rotation\":0,\"scaling\":1,\"parameters\":{\"id\":\"Cursor\"}},{\"type\":\"box\",\"position\":{\"x\":-1478.3333333335984,\"y\":586.0000000000007},\"rotation\":0,\"scaling\":1,\"parameters\":{}},{\"type\":\"Door\",\"position\":{\"x\":1628.8744588744594,\"y\":101.64502164502176},\"rotation\":0,\"scaling\":1,\"parameters\":{\"location\":\"Overworld\"}},{\"type\":\"Goomba\",\"position\":{\"x\":1305.1346438101702,\"y\":107.44726665819147},\"rotation\":0,\"scaling\":1.0116155193265792,\"parameters\":{}},{\"type\":\"Player\",\"position\":{\"x\":1203.8913812659912,\"y\":257.3428172389416},\"rotation\":0,\"scaling\":1,\"parameters\":{}}]}");

/***/ }),

/***/ "./src/game/rooms/Underworld.ts":
/*!**************************************!*\
  !*** ./src/game/rooms/Underworld.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Underworld = void 0;
const room_1 = __webpack_require__(/*! ../../lib/room */ "./src/lib/room.ts");
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
const controls_1 = __webpack_require__(/*! ../../lib/controls */ "./src/lib/controls.ts");
const hud_1 = __webpack_require__(/*! ../../lib/hud */ "./src/lib/hud.ts");
const van_1 = __webpack_require__(/*! ../../van */ "./src/van.ts");
const bullet_1 = __webpack_require__(/*! ../objects/bullet */ "./src/game/objects/bullet.ts");
const render_1 = __webpack_require__(/*! ../../lib/render */ "./src/lib/render.ts");
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
const json = __webpack_require__(/*! ./Underworld.json */ "./src/game/rooms/Underworld.json");
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
        game.state.cameras = [
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
    registerControls() {
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
                    bullets.push(new bullet_1.Rocket({
                        position: { x: position.x, y: position.y },
                        velocity: { x: 0, y: 0 },
                        rotation: gun.state.rotation,
                        scaling: { width: 1, height: 1 }
                    }, {}));
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
                room_1.applyGravity(this.objects[a], -1, -15);
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

/***/ "./src/game/rooms/rooms.ts":
/*!*********************************!*\
  !*** ./src/game/rooms/rooms.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rooms = void 0;
const Board_1 = __webpack_require__(/*! ./Board */ "./src/game/rooms/Board.ts");
const Overworld_1 = __webpack_require__(/*! ./Overworld */ "./src/game/rooms/Overworld.ts");
const Underworld_1 = __webpack_require__(/*! ./Underworld */ "./src/game/rooms/Underworld.ts");
exports.rooms = {
    Board: Board_1.Board,
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
exports.velocityCollisionCheck = exports.check_collisions = exports.check_all_collisions = exports.check_all_objects = void 0;
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
function velocityCollisionCheck(object, list) {
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
exports.velocityCollisionCheck = velocityCollisionCheck;


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
exports.debug_setup = exports.debug_update_prefabs = exports.debug_update_obj_list = exports.debug_update_properties_element = exports.debug_update_room_list = exports.debug_statef = exports.Debug_hud = void 0;
let { ipcRenderer } = window.require("electron");
const path = window.require("path");
let fs = window.require("fs");
const prefabs_1 = __webpack_require__(/*! ../game/objects/prefabs */ "./src/game/objects/prefabs.ts");
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
const main_1 = __webpack_require__(/*! ../game/main */ "./src/game/main.ts");
const rooms_1 = __webpack_require__(/*! ../game/rooms/rooms */ "./src/game/rooms/rooms.ts");
const controls_1 = __webpack_require__(/*! ../lib/controls */ "./src/lib/controls.ts");
const hud_1 = __webpack_require__(/*! ../lib/hud */ "./src/lib/hud.ts");
class Debug_hud extends hud_1.HUD {
    setTextElements() {
        return [new hud_1.Text({
                position: {
                    x: 10,
                    y: 10
                },
                size: 22,
                font: "Alata",
                color: "white",
                align: "left",
                scaling: 1
            }, () => `X:${van_1.DEBUG_v.camera.state.position.x.toFixed(0)}`),
            new hud_1.Text({
                position: {
                    x: 10,
                    y: 32
                },
                size: 22,
                font: "Alata",
                color: "white",
                align: "left",
                scaling: 1
            }, () => `Y:${van_1.DEBUG_v.camera.state.position.y.toFixed(0)}`)
        ];
    }
}
exports.Debug_hud = Debug_hud;
function debug_statef(t) {
    let mouse = controls_1.Poll_Mouse(van_1.DEBUG_v.target, van_1.DEBUG_v.camera);
    if (van_1.DEBUG_v.camera.hud) {
        van_1.DEBUG_v.camera.hud.statef(t);
    }
    if (!van_1.PAUSED) {
        debug_update_properties_element();
    }
    if (van_1.DEBUG_v.selected_element) {
        if (van_1.PAUSED && controls_1.held_keys["ControlLeft"] && van_1.DEBUG_v.current_action.property == "scaling") {
            let dist = {
                x: Math.abs(mouse.x - van_1.DEBUG_v.selected_element.state.position.x),
                y: Math.abs(mouse.y - van_1.DEBUG_v.selected_element.state.position.y)
            };
            van_1.DEBUG_v.selected_element.state.scaling.width = (2 * dist.x) / van_1.DEBUG_v.selected_element.width;
            van_1.DEBUG_v.selected_element.state.scaling.height = (2 * dist.y) / van_1.DEBUG_v.selected_element.height;
        }
        else {
            let st = van_1.DEBUG_v.selected_element.state;
            st.position.x = mouse.x - van_1.DEBUG_v.selected_element_offset.x,
                st.position.y = mouse.y - van_1.DEBUG_v.selected_element_offset.y;
        }
    }
    if (van_1.PAUSED && van_1.DEBUG_v.rotation_element) {
        van_1.DEBUG_v.rotation_element.state.rotation = van_1.DEBUG_v.rotation_element.angleTowardsPoint(mouse);
    }
    if (van_1.DEBUG_v.middle_position) {
        let diff_y = mouse.y - van_1.DEBUG_v.middle_position.y;
        let diff_x = mouse.x - van_1.DEBUG_v.middle_position.x;
        van_1.DEBUG_v.camera.state.position.x = van_1.DEBUG_v.camera.state.position.x + -1 * diff_x;
        van_1.DEBUG_v.camera.state.position.y = van_1.DEBUG_v.camera.state.position.y + -1 * diff_y;
    }
}
exports.debug_statef = debug_statef;
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
if (van_1.DEBUG) {
    properties_elements = {
        pos_x: document.getElementById("pos_x"),
        pos_y: document.getElementById("pos_y"),
        vel_x: document.getElementById("vel_x"),
        vel_y: document.getElementById("vel_y"),
        rot: document.getElementById("rot"),
        sca_x: document.getElementById("sca_x"),
        sca_y: document.getElementById("sca_y"),
        render: document.getElementById("render"),
        collision: document.getElementById("collision")
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
        let ele = van_1.DEBUG_v.selected_properties_element;
        let new_val = parseFloat(properties_elements.pos_x.value) || 0;
        van_1.DEBUG_v.actions_stack.push({
            property: "position",
            element: ele,
            new: JSON.stringify({ x: new_val, y: ele.state.position.y }),
            old: JSON.stringify(ele.state.position)
        });
        ele.state.position.x = new_val;
    });
    properties_elements.pos_y.addEventListener("input", (e) => {
        let ele = van_1.DEBUG_v.selected_properties_element;
        let new_val = parseFloat(properties_elements.pos_y.value) || 0;
        van_1.DEBUG_v.actions_stack.push({
            property: "position",
            element: ele,
            new: JSON.stringify({ x: ele.state.position.x, y: new_val }),
            old: JSON.stringify(ele.state.position)
        });
        ele.state.position.y = new_val;
    });
    properties_elements.vel_x.addEventListener("input", (e) => {
        let ele = van_1.DEBUG_v.selected_properties_element;
        ele.state.velocity.x = parseFloat(properties_elements.vel_x.value) || 0;
    });
    properties_elements.vel_y.addEventListener("input", (e) => {
        let ele = van_1.DEBUG_v.selected_properties_element;
        ele.state.velocity.y = parseFloat(properties_elements.vel_y.value) || 0;
    });
    properties_elements.rot.addEventListener("input", (e) => {
        let ele = van_1.DEBUG_v.selected_properties_element;
        let new_val = parseFloat(properties_elements.rot.value) || 0;
        van_1.DEBUG_v.actions_stack.push({
            property: "rotation",
            element: ele,
            new: JSON.stringify(new_val),
            old: JSON.stringify(ele.rotation)
        });
        ele.state.rotation = new_val;
    });
    properties_elements.sca_x.addEventListener("input", (e) => {
        let ele = van_1.DEBUG_v.selected_properties_element;
        let new_val = parseFloat(properties_elements.sca_x.value) || 0;
        van_1.DEBUG_v.actions_stack.push({
            property: "scaling",
            element: ele,
            new: JSON.stringify({ width: new_val, height: ele.state.scaling.height }),
            old: JSON.stringify(ele.state.scaling)
        });
        ele.state.scaling.width = new_val;
    });
    properties_elements.sca_y.addEventListener("input", (e) => {
        let ele = van_1.DEBUG_v.selected_properties_element;
        let new_val = parseFloat(properties_elements.sca_y.value) || 0;
        van_1.DEBUG_v.actions_stack.push({
            property: "scaling",
            element: ele,
            new: JSON.stringify({ width: ele.state.scaling.width, height: new_val }),
            old: JSON.stringify(ele.state.scaling)
        });
        ele.state.scaling.height = new_val;
    });
    properties_elements.render.addEventListener("input", (e) => {
        let ele = van_1.DEBUG_v.selected_properties_element;
        ele.render = properties_elements.render.checked;
    });
    properties_elements.collision.addEventListener("input", (e) => {
        let ele = van_1.DEBUG_v.selected_properties_element;
        ele.collision = properties_elements.collision.checked;
    });
    document.getElementById("delete_element").addEventListener("click", (e) => {
        let ele = van_1.DEBUG_v.selected_properties_element;
        ele.delete();
    });
}
function debug_update_properties_element() {
    if (van_1.DEBUG_v.selected_properties_element) {
        let ele = van_1.DEBUG_v.selected_properties_element;
        document.getElementById("obj_name").innerHTML = ele.constructor.name;
        properties_elements.pos_x.value = "" + ele.state.position.x.toFixed(2);
        properties_elements.pos_y.value = "" + ele.state.position.y.toFixed(2);
        properties_elements.vel_x.value = "" + ele.state.velocity.x.toFixed(2);
        properties_elements.vel_y.value = "" + ele.state.velocity.y.toFixed(2);
        properties_elements.rot.value = "" + ele.state.rotation.toFixed(2);
        properties_elements.sca_x.value = "" + ele.state.scaling.width.toFixed(2);
        properties_elements.sca_y.value = "" + ele.state.scaling.height.toFixed(2);
        properties_elements.render.checked = ele.render;
        properties_elements.collision.checked = ele.collision;
        let list = document.getElementById("params_list");
        list.textContent = '';
        for (let k of Object.keys(ele.params)) {
            let p = document.createElement("p");
            let span = document.createElement("span");
            span.appendChild(document.createTextNode(k));
            let input = document.createElement("input");
            if (typeof ele.params[k] === "boolean") {
                input.setAttribute("type", "checkbox");
            }
            else if (typeof ele.params[k] === "number") {
                input.setAttribute("type", "number");
            }
            else if (typeof ele.params[k] === "string") {
                input.setAttribute("type", "text");
            }
            input.setAttribute("id", k);
            input.setAttribute("value", ele.params[k] + "");
            input.addEventListener("click", (e) => {
                input.focus();
            });
            input.addEventListener("input", (e) => {
                let ele = van_1.DEBUG_v.selected_properties_element;
                let val = input.value;
                if (!isNaN(val)) {
                    ele.params[k] = parseFloat(val);
                }
                else if (val == "true") {
                    ele.params[k] = true;
                }
                else if (val == "false") {
                    ele.params[k] = false;
                }
                else {
                    ele.params[k] = val;
                }
            });
            p.appendChild(span);
            p.append(input);
            list.append(p);
        }
    }
}
exports.debug_update_properties_element = debug_update_properties_element;
function debug_update_obj_list() {
    let list = document.getElementById("objects_list");
    list.textContent = '';
    if (main_1.g.getRoom()) {
        for (let obj of main_1.g.getRoom().objects) {
            let para = document.createElement("p");
            para.appendChild(document.createTextNode(obj.constructor.name));
            para.classList.add("object_list_item");
            para.addEventListener("click", (e) => {
                if (van_1.DEBUG_v.selected_properties_element == obj) {
                    van_1.DEBUG_v.camera.state.position = Object.assign({}, obj.state.position);
                }
                else {
                    van_1.DEBUG_v.selected_properties_element = obj;
                    debug_update_properties_element();
                }
            });
            list.appendChild(para);
        }
    }
}
exports.debug_update_obj_list = debug_update_obj_list;
function debug_update_prefabs() {
    return __awaiter(this, void 0, void 0, function* () {
        let pres = Object.keys(prefabs_1.prefabs).map((o) => __awaiter(this, void 0, void 0, function* () {
            let a = (new prefabs_1.prefabs[o]({
                position: { x: 0, y: 0 },
                velocity: { x: 0, y: 0 },
                rotation: 0,
                scaling: { width: 1, height: 1 }
            }));
            yield a.load();
            a.render = true;
            let objs = a.combinedObjects();
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
                let val = {
                    position: { x: van_1.DEBUG_v.camera.state.position.x, y: van_1.DEBUG_v.camera.state.position.y },
                    velocity: { x: 0, y: 0 },
                    rotation: 0,
                    scaling: { width: 1, height: 1 }
                };
                let obj = (new prefab.prefab(val));
                yield main_1.g.state.current_room.addItems(obj.combinedObjects());
            }));
            target.append(div);
        }
    });
}
exports.debug_update_prefabs = debug_update_prefabs;
exports.debug_setup = () => {
    let obj_button = document.getElementById("new_object_button");
    let room_button = document.getElementById("new_room_button");
    room_button.addEventListener("click", (e) => {
        let file_path = ipcRenderer.sendSync('object-path-request', "rooms");
        if (file_path) {
            let full_name = path.parse(file_path).base;
            let new_name = full_name.substr(0, full_name.length - 3);
            let path_to_write = path.join(`${file_path}`, "..", new_name + ".ts");
            fs.writeFileSync(path_to_write, `
    
    import {room} from "../../lib/room";
    import {game} from "../../van";
    import {state_config} from "../../lib/room";
    import * as config from "./${new_name}.json";
    let cfig = config as unknown as state_config;
    interface ${new_name}_state{
    
    }
    
    
    export class ${new_name} extends room<${new_name}_state>{
      background_url="./sprites/Error.png";
      constructor(game:game<unknown>){
        super(game,cfig);
      }
      registerControls(){
    
      }
      registerParticles(){
    
      }
      statef(delta_time:number){
        super.statef(delta_time);
      }
    
    }
    
    `);
            path_to_write = path.join(`${file_path}`, "..", new_name + ".json");
            fs.writeFileSync(path_to_write, `
    {
      "objects":[]
    }
    `);
        }
    });
    obj_button.addEventListener("click", (e) => {
        let file_path = ipcRenderer.sendSync('object-path-request', "objects");
        if (file_path) {
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
        }
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
        this.text_elements.push(...this.setTextElements());
        this.graphic_elements.push(...this.setGraphicElements());
    }
    statef(a) {
        for (let x of this.graphic_elements) {
            x.statef(a);
        }
        for (let x of this.text_elements) {
            x.statef(a);
        }
    }
    setTextElements() {
        return [];
    }
    setGraphicElements() {
        return [];
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
exports.getRandInt = exports.Distance = void 0;
function Distance(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
exports.Distance = Distance;
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandInt = getRandInt;


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
    constructor(state, params = obj.default_params) {
        this.sprite_url = "";
        this.render_type = render_1.render_type.sprite;
        this.collision = false;
        this.tags = [];
        this.rotation = 0;
        this.render = true;
        this.animations = new animations();
        this.audio = new audio_1.audio();
        this.last_render = 0;
        this.scaling = {
            height: 1,
            width: 1
        };
        this.params = {};
        this.layer = 1;
        this.id = "" + counter;
        this.binds = [];
        counter++;
        this.params = params;
        this.registerControls();
        this.registerAudio();
        this.state = Object.assign({}, JSON.parse(JSON.stringify(state)));
        this.params = params;
    }
    getState() {
        return this.state;
    }
    registerAnimations() {
    }
    registerAudio() {
    }
    load() {
        let _this = this;
        return new Promise((resolve, reject) => {
            let a = new Image();
            a.src = this.sprite_url;
            a.onload = (() => __awaiter(this, void 0, void 0, function* () {
                _this.sprite_sheet = a;
                _this.registerAnimations();
                yield this.audio.load();
                resolve();
            }));
        });
    }
    combinedObjects() {
        return [this];
    }
    distance(a) {
        let o_st = a.state;
        let st = this.state;
        return math_1.Distance(st.position, o_st.position);
    }
    angleTowards(a) {
        return this.angleTowardsPoint(a.state.position);
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
    registerControls() {
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
            return room.checkCollisions(a, [this.id]);
        }
        return [];
    }
    getFullCollisionBox() {
        let st = this.state;
        if (this.hitbox) {
            return {
                x: st.position.x,
                y: st.position.y,
                width: this.hitbox.width * this.state.scaling.width,
                height: this.hitbox.height * this.state.scaling.height
            };
        }
        else {
            return {
                x: st.position.x,
                y: st.position.y,
                width: this.width * this.state.scaling.width,
                height: this.height * this.state.scaling.height
            };
        }
    }
    getAllCollisionBoxes() {
        let st = this.state;
        if (this.hitbox) {
            return [{
                    x: st.position.x,
                    y: st.position.y,
                    width: this.width * this.state.scaling.width,
                    height: this.height * this.state.scaling.height
                }];
        }
        else {
            return [{
                    x: st.position.x,
                    y: st.position.y,
                    width: this.width * this.state.scaling.width,
                    height: this.height * this.state.scaling.height
                }];
        }
    }
    collidesWithBox(a) {
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
            left: (this.state.position.x + hbox.x_offset - hbox.width * this.state.scaling.width / 2),
            right: (this.state.position.x + hbox.x_offset + hbox.width * this.state.scaling.width / 2),
            top: (this.state.position.y + hbox.y_offset + hbox.height * this.state.scaling.height / 2),
            bottom: (this.state.position.y + hbox.y_offset - hbox.height * this.state.scaling.height / 2)
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
    emitParticle(name, offset, lifetime, range) {
        let room = this.game.getRoom();
        let st = this.state;
        let final_position = {
            x: st.position.x + offset.x,
            y: st.position.y + offset.y
        };
        room.emitParticle(name, final_position, lifetime, range);
    }
    renderTrack(time) {
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
    combinedObjects() {
        let combined = [...this.objects, ...this.statics.map(a => a.obj)];
        combined.forEach(a => a.parent = this);
        return [...combined, this];
    }
    getItemsByTag(tag) {
        return this.combinedObjects().filter((a) => a.tags.indexOf(tag) > -1);
    }
    addItem(a, list = this.objects) {
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

/***/ "./src/lib/render.ts":
/*!***************************!*\
  !*** ./src/lib/render.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rect_renderer = exports.stroked_rect_renderer = exports.sprite_renderer = exports.text_renderer = exports.hud_text_renderer = exports.render_type = exports.Camera = void 0;
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
    let final_x = ((s.x - camera.state.position.x + camera.state.dimensions.width * (1 / r.camera.state.scaling) / 2 - s.sprite.sprite_width * s.scale.width / 2) * r.camera.state.scaling);
    let final_y = ((vheight - s.y - camera.state.dimensions.height * (1 / r.camera.state.scaling) / 2 - s.sprite.sprite_height * s.scale.height / 2 + camera.state.position.y) * r.camera.state.scaling);
    let height = s.sprite.sprite_height * r.camera.state.scaling * s.scale.height;
    let width = s.sprite.sprite_width * r.camera.state.scaling * s.scale.width;
    r.context.save();
    r.context.globalAlpha = s.sprite.opacity;
    r.context.translate(final_x + (width) / 2, final_y + height / 2);
    let radians = s.rotation * (Math.PI / 180);
    r.context.rotate(radians);
    r.context.drawImage(s.sprite.sprite_sheet, s.sprite.left, s.sprite.top, s.sprite.sprite_width, s.sprite.sprite_height, -(width) / 2, -height / 2, width, height);
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
exports.room = exports.applyGravity = void 0;
const sprite_1 = __webpack_require__(/*! ./sprite */ "./src/lib/sprite.ts");
const collision_1 = __webpack_require__(/*! ./collision */ "./src/lib/collision.ts");
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
const controls_1 = __webpack_require__(/*! ./controls */ "./src/lib/controls.ts");
const audio_1 = __webpack_require__(/*! ./audio */ "./src/lib/audio.ts");
const debug_1 = __webpack_require__(/*! ../lib/debug */ "./src/lib/debug.ts");
const prefabs_1 = __webpack_require__(/*! ../game/objects/prefabs */ "./src/game/objects/prefabs.ts");
function applyGravity(ob, grav_const, grav_max) {
    let st = ob.state;
    if (ob.gravity && st.velocity.y > grav_max) {
        st.velocity.y += grav_const;
    }
}
exports.applyGravity = applyGravity;
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
            if (!o.parent) {
                config.objects.push({
                    type: o.constructor.name,
                    state: o.state,
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
                let new_obj = (new prefabs_1.prefabs[config.type](Object.assign({}, config.state), config.parameters));
                this.addItems(new_obj.combinedObjects());
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
                debug_1.debug_update_obj_list();
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
                debug_1.debug_update_obj_list();
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
            debug_1.debug_update_obj_list();
        }
    }
    registerParticles() {
    }
    bindControl(key, x, func, interval = 1) {
        this.binds.push(controls_1.Bind(key, func, x, interval));
    }
    checkCollisions(box, exempt) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return collision_1.check_all_collisions(box, this.objects, exempt);
    }
    checkObjects(box, exempt, list = this.objects) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return collision_1.check_all_objects(box, list, exempt);
    }
    registerControls() {
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
            collision_1.velocityCollisionCheck(this.objects[a], this.objects);
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
    emitParticle(name, pos, lifetime, pos_range) {
        let state = {
            position: pos,
            velocity: { x: 0, y: 0 },
            rotation: 0,
            scaling: { width: 1, height: 1 }
        };
        this.addItem(new sprite_1.Particle(this.particles[name], state, lifetime, pos_range), this.particles_arr);
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
const math_1 = __webpack_require__(/*! ./math */ "./src/lib/math.ts");
class Particle extends object_1.obj {
    constructor(part, state, lifetime, random_range) {
        super(state);
        this.collision = false;
        this.state.lifetime = 0;
        this.sprite_url = part.sprite;
        this.height = part.height;
        this.width = part.width;
        this.max_lifetime = lifetime;
        this.random_range = random_range;
        this.state.position.x += math_1.getRandInt(-random_range / 2, random_range / 2);
        this.state.position.y += math_1.getRandInt(-random_range / 2, random_range / 2);
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
            let random_row = math_1.getRandInt(0, sprites.length);
            let random_col = math_1.getRandInt(0, sprites[random_row].length);
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
exports.game = exports.objects = exports.rooms = exports.DEBUG_v = exports.deep = exports.render_collision_box = exports.setPaused = exports.setDebug = exports.viewport = exports.GetViewportDimensions = exports.GetScreenDimensions = exports.project_path = exports.PAUSED = exports.DEBUG = void 0;
exports.DEBUG = true;
exports.PAUSED = true;
const render_1 = __webpack_require__(/*! ./lib/render */ "./src/lib/render.ts");
const controls_1 = __webpack_require__(/*! ./lib/controls */ "./src/lib/controls.ts");
const controls_2 = __webpack_require__(/*! ./lib/controls */ "./src/lib/controls.ts");
const debug_1 = __webpack_require__(/*! ./lib/debug */ "./src/lib/debug.ts");
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
                selected_element_initial_scaling: { width: 1, height: 1 },
                actions_stack: [],
                current_action: undefined
            };
            exports.DEBUG_v.camera.hud = new debug_1.Debug_hud();
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
                        let alL_clicked = this.getRoom().checkObjects({
                            x: mouse.x,
                            y: mouse.y,
                            height: 1,
                            width: 1
                        });
                        let clicked;
                        let filtered = alL_clicked.filter((ele) => ele == exports.DEBUG_v.selected_properties_element);
                        if (filtered.length > 0) {
                            clicked = filtered[0];
                        }
                        else {
                            clicked = alL_clicked[0];
                        }
                        if (clicked) {
                            if (controls_1.held_keys["ControlLeft"]) {
                                exports.DEBUG_v.current_action = {
                                    element: clicked,
                                    property: "scaling",
                                    old: JSON.stringify(clicked.scaling),
                                    new: undefined
                                };
                            }
                            else {
                                exports.DEBUG_v.current_action = {
                                    element: clicked,
                                    property: "position",
                                    old: JSON.stringify(clicked.state.position),
                                    new: undefined
                                };
                            }
                            exports.DEBUG_v.selected_properties_element = clicked;
                            debug_1.debug_update_properties_element();
                            exports.DEBUG_v.selected_element = clicked;
                            exports.DEBUG_v.selected_element_initial_scaling = clicked.state.scaling;
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
                    if (exports.DEBUG_v.selected_element) {
                        if (exports.DEBUG_v.current_action.property == "scaling") {
                            exports.DEBUG_v.current_action.new = JSON.stringify(exports.DEBUG_v.selected_element.state.scaling);
                        }
                        else if (exports.DEBUG_v.current_action.property == "position") {
                            exports.DEBUG_v.current_action.new = JSON.stringify(exports.DEBUG_v.selected_element.state.position);
                        }
                        exports.DEBUG_v.actions_stack.push(exports.DEBUG_v.current_action);
                    }
                    exports.DEBUG_v.selected_element = undefined;
                    debug_1.debug_update_properties_element();
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
                        let clicked = this.getRoom().checkObjects({
                            x: mouse.x,
                            y: mouse.y,
                            height: 1,
                            width: 1
                        })[0];
                        if (clicked) {
                            exports.DEBUG_v.rotation_element = clicked;
                            exports.DEBUG_v.current_action = {
                                element: exports.DEBUG_v.rotation_element,
                                property: "rotation",
                                old: JSON.stringify(exports.DEBUG_v.rotation_element.rotation),
                                new: undefined
                            };
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
                    exports.DEBUG_v.current_action.new = JSON.stringify(exports.DEBUG_v.rotation_element.state.rotation);
                    exports.DEBUG_v.actions_stack.push(exports.DEBUG_v.current_action);
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
                    let a = path.join(`${exports.project_path}`, `../rooms/${name}.json`);
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
            let undo_func = () => {
                if (controls_1.held_keys["ControlLeft"]) {
                    let curr = exports.DEBUG_v.actions_stack.pop();
                    if (curr) {
                        if (curr.property == "position") {
                            curr.element.state.position = JSON.parse(curr.old);
                        }
                        else if (curr.property === "rotation") {
                            curr.element.rotation = JSON.parse(curr.old);
                        }
                        else if (curr.property === "scaling") {
                            curr.element.scaling = JSON.parse(curr.old);
                        }
                    }
                }
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
            controls_1.debug_binds.push({
                key: "KeyZ",
                type: controls_1.btype.keyboard,
                id: controls_1.Bind("KeyZ", undo_func, controls_1.exec_type.once, 1),
                function: undo_func,
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
                    debug_1.debug_statef(16.66);
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
            let particle_collides = this.state.current_room.checkObjects(camera_box, [], this.state.current_room.particles_arr);
            let camera_colliders = [...this.state.current_room.checkObjects(camera_box), ...particle_collides];
            let render_args = {
                context: this.offscreen_context,
                camera: camera,
            };
            render_1.sprite_renderer(render_args, {
                sprite: this.state.current_room.renderf(time),
                x: 0,
                y: 0,
                rotation: 0,
                scale: {
                    width: 1,
                    height: 1
                }
            });
            let hitboxes = [];
            for (let a of camera_colliders.filter((b) => b.render).sort((a, b) => (a.layer - b.layer))) {
                let rendered = a.renderTrack(t);
                if (Array.isArray(rendered)) {
                    for (let positioned_sprite of rendered)
                        render_1.sprite_renderer(render_args, {
                            sprite: positioned_sprite.sprite,
                            x: positioned_sprite.x,
                            y: positioned_sprite.y,
                            rotation: a.state.rotation,
                            scale: a.state.scaling
                        });
                }
                else {
                    let positioned_sprite = rendered;
                    render_1.sprite_renderer(render_args, {
                        sprite: positioned_sprite.sprite,
                        x: positioned_sprite.x,
                        y: positioned_sprite.y,
                        rotation: a.state.rotation,
                        scale: a.state.scaling
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
                    let rendered = a.renderTrack(t);
                    if (a.render) {
                        for (let positioned_sprite of rendered) {
                            render_1.sprite_renderer(render_args, {
                                sprite: positioned_sprite.sprite,
                                x: positioned_sprite.x,
                                y: positioned_sprite.y,
                                rotation: a.state.rotation,
                                scale: a.state.scaling
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
            x.registerControls();
            x.registerParticles();
            if (this.state.logic != undefined) {
                clearInterval(this.state.logic);
            }
            this.state.logic = this.start_logic(logic_loop_interval);
            if (exports.DEBUG) {
                debug_1.debug_update_room_list();
                debug_1.debug_update_prefabs();
                debug_1.debug_update_obj_list();
            }
            this.state.current_room = x;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0Jpc2hvcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0NvbnRyb2xsZWRQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9DdXJzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9Eb29yLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvR29vbWJhLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvR3VuLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvS2luZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0tuaWdodC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL01vdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9QYXduLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvUXVlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9Sb29rLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvVmVydEJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL2Fic3RyYWN0L3BpZWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvYWJzdHJhY3QvcGxhdGZvcm1lcl9vYmoudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9idWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9wcmVmYWJzLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL092ZXJ3b3JsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9yb29tcy9VbmRlcndvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL3Jvb21zLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYXVkaW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb250cm9scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2RlYnVnLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvaHVkLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvbWF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL29iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JlbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBLGdFQUEyRDtBQUMzRCxJQUFJLGNBQWMsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUM7QUFFbkYsU0FBQyxHQUFHLElBQUksVUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFFLENBQU8sQ0FBVSxFQUFDLEVBQUU7SUFDOUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNoQyxDQUFDLEVBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ05ILG9HQUF3RTtBQUd4RSxNQUFhLE1BQU8sU0FBUSxhQUFLO0lBRS9CLFlBQVksS0FBZSxFQUFDLFNBQTBCLGFBQUssQ0FBQyxjQUFjO1FBQ3hFLEtBQUssQ0FBQyxLQUFLLEVBQUM7WUFDVixJQUFJLEVBQUMsTUFBTSxDQUFDLElBQUk7U0FDakIsQ0FBQyxDQUFDO1FBSkwsZUFBVSxHQUFHLHNCQUFzQjtRQUtqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxrQkFBVSxDQUFDLE1BQU0sQ0FBQztJQUN0QyxDQUFDO0lBQ0QsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQVhELHdCQVdDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEQsMEZBQStDO0FBQy9DLHFGQUE0RDtBQUk1RCxNQUFhLGdCQUFpQixTQUFRLGVBQU07SUFDMUMsWUFBWSxLQUFlLEVBQUMsTUFBb0I7UUFDOUMsS0FBSyxDQUFDLEtBQUssRUFBQyxNQUFNLENBQUMsQ0FBQztRQUd0QixTQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUZoQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxvQkFBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDOUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25EO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxvQkFBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsa0JBQVMsQ0FBQyxJQUFJLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxvQkFBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNSLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLG9CQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUM5QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25EO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxvQkFBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsa0JBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxvQkFBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQW5DRCw0Q0FtQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0QsK0hBQTJEO0FBTTNELE1BQWEsTUFBTyxTQUFRLCtCQUFjO0lBQTFDOztRQUNFLGVBQVUsR0FBRyxzQkFBc0IsQ0FBQztRQUNwQyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLFNBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Q0FBQTtBQVBELHdCQU9DOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkcsb0ZBQXFDO0FBRXpDLHdFQUE0QjtBQVl4QixNQUFhLElBQUssU0FBUSxZQUFHO0lBYzNCLFlBQVksS0FBZSxFQUFDLFNBQXlCLElBQUksQ0FBQyxjQUFjO1FBQ3RFLEtBQUssQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFkdEIsZUFBVSxHQUFHLHNCQUFzQixDQUFDO1FBQ3BDLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osU0FBSSxHQUFpQixFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQUcsSUFBSSxDQUFDO0lBVWQsQ0FBQztJQUNELE1BQU0sQ0FBQyxVQUFpQjtRQUN0QixJQUFJLFFBQVEsR0FBRyxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RFLEtBQUksSUFBSSxHQUFHLElBQUksUUFBUSxFQUFDO1lBQ3RCLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUM7Z0JBQzdCLFFBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsT0FBTzthQUNSO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsT0FBTyxDQUFDLFVBQWlCO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsa0JBQWtCO0lBRWxCLENBQUM7SUFDRCxhQUFhO0lBRWIsQ0FBQztJQUNELGdCQUFnQjtJQUVoQixDQUFDOztBQXJDSCxvQkFzQ0M7QUE3QlEsbUJBQWMsR0FBbUI7SUFDdEMsUUFBUSxFQUFDLFlBQVk7SUFDckIsSUFBSSxFQUFDLElBQUk7SUFDVCxHQUFHLEVBQUMsRUFBRTtDQUNQOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJQLG9GQUFzRDtBQUV0RCwrSEFBaUc7QUFNakcsd0VBQTRCO0FBRTVCLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBSTtJQUNKLDJDQUFLO0FBQ1AsQ0FBQyxFQUhXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBR3BCO0FBcUJELE1BQWEsTUFBTyxTQUFRLCtCQUFjO0lBUXhDLFlBQVksS0FBZSxFQUFDLGFBQTJCLE1BQU0sQ0FBQyxjQUFjO1FBRTFFLEtBQUssQ0FBQyxLQUFLLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFUMUIsZUFBVSxHQUFHLDRCQUE0QixDQUFDO1FBQzFDLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osU0FBSSxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFNZixJQUFJLFVBQVUsQ0FBQyxFQUFFLElBQUksU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztTQUN6QjtRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztZQUN2QixTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDekIsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsR0FBRztZQUNYLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLGlCQUFpQixFQUFFLENBQUM7U0FDckIsQ0FBQztRQUNGLGdDQUFnQztJQUNsQyxDQUFDO0lBQ0Qsa0JBQWtCO1FBQ2hCLElBQUksT0FBTyxHQUFHLG1CQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCLEVBQUUsR0FBRyxDQUFDO1FBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQzNCLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQixFQUFFLEdBQUcsQ0FBQztRQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUM5QixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUMvQixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUM5QixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUMvQixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsRUFBRSxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSx3QkFBd0IsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsT0FBTyxDQUFDLENBQVM7UUFDZixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3RCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO2FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDbEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7YUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLElBQUksSUFBSSxHQUFHLFFBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNyQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ3ZCLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztnQkFDaEIsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNSLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDOUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNoRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7YUFDOUI7aUJBQ0k7Z0JBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQzNCO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNoRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDaEUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFBQSxDQUFDO1lBQ2pFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtTQUNGO2FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUFBLENBQUM7WUFDakUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1NBQ0Y7SUFDSCxDQUFDO0NBQ0Y7QUFqSEQsd0JBaUhDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkpELG9GQUFtRDtBQUNuRCwrSEFBMkQ7QUFDM0Qsd0VBQTRCO0FBSzVCLE1BQWEsR0FBSSxTQUFRLCtCQUFjO0lBQXZDOztRQUNFLGVBQVUsR0FBRywwQkFBMEIsQ0FBQztRQUN4QyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUVkLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsU0FBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFvQmpCLENBQUM7SUFuQkMsTUFBTSxDQUFDLENBQVM7UUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsSUFBSSxHQUFHLEdBQUcsd0JBQWUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHO2dCQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDeEMsQ0FBQztTQUVIO2FBQ0k7WUFDSCxJQUFJLElBQUksR0FBRyxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQVcsQ0FBQztZQUMvRCxJQUFJLENBQUMsTUFBTSxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckQ7SUFFSCxDQUFDO0NBQ0Y7QUE3QkQsa0JBNkJDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckNELG9HQUF3RTtBQUd4RSx3RUFBMEI7QUFFMUIsTUFBYSxJQUFLLFNBQVEsYUFBSztJQUU3QixZQUFZLEtBQWUsRUFBQyxTQUEwQixhQUFLLENBQUMsY0FBYztRQUN4RSxLQUFLLENBQUMsS0FBSyxFQUFDO1lBQ1YsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUpMLGVBQVUsR0FBRyxvQkFBb0I7UUFLL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsa0JBQVUsQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUNELGlCQUFpQixDQUFDLElBQVUsRUFBQyxLQUFjO1FBQ3pDLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztZQUNuTSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUM7Z0JBQzdDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELGtCQUFrQixDQUFDLElBQVUsRUFBQyxLQUFjO1FBQzFDLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7WUFDekksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDckQsSUFBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFDO2dCQUM3QyxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxZQUFZO1FBQ1YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLFFBQUMsQ0FBQyxPQUFPLEVBQVcsQ0FBQztRQUNoQyxJQUFJLFFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBQ2xDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN6QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7Z0JBQ3pCLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUM7b0JBQ3BHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixJQUFHLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQzt3QkFDdkUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO3FCQUMvQztpQkFDRjthQUNGO1NBQ0Y7UUFDRCxtQkFBbUI7UUFDbkIsSUFBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxFQUFDO1lBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxFQUFDO1lBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBbERELG9CQWtEQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZERCxvR0FBd0U7QUFJeEUsTUFBYSxNQUFPLFNBQVEsYUFBSztJQUUvQixZQUFZLEtBQWUsRUFBQyxTQUEwQixhQUFLLENBQUMsY0FBYztRQUN4RSxLQUFLLENBQUMsS0FBSyxFQUFDO1lBQ1YsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUpMLGVBQVUsR0FBRyxzQkFBc0I7UUFLakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsa0JBQVUsQ0FBQyxNQUFNLENBQUM7SUFDdEMsQ0FBQztJQUNELFlBQVk7UUFDVixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxRQUFRLEdBQW1CLEVBQUUsQ0FBQztRQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUM3QyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUM3QyxRQUFRLENBQUMsSUFB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QyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN4RCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ25EO2dCQUNELElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssa0JBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDckYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN4RCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ25EO2dCQUNELElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssa0JBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxZQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNwSCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENB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QUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxlQUFNLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksYUFBSyxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLFdBQUksQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxlQUFNLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksZUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLFdBQUksQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztRQUM5ZSxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksV0FBSSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLGVBQU0sQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxlQUFNLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksYUFBSyxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLFdBQUksQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxlQUFNLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxF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Q0FBQztRQUMvQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7ZUFDN0QsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFO1NBQ3pHO1FBQ0QsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO2VBQzdELEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUNuRSxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFO1NBQzFHO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsV0FBVyxDQUFDLEdBQVcsRUFBRSxDQUFZLEVBQUUsSUFB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R0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3hELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUksSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztJQUNsQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FB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Q0FBQzthQUN6QjtRQUNILENBQUM7S0FBQTtDQUNGO0FBdGhCRCxvQkFzaEJDIiwiZmlsZSI6InZhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dhbWUvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7dmVsb2NpdHksb2JqX3N0YXRlLHJvb21fc3RhdGV9IGZyb20gXCIuLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtnYW1lLEdldFZpZXdwb3J0RGltZW5zaW9ucyx2aWV3cG9ydH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5sZXQgY2FudmFzX2VsZW1lbnQ6SFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbmV4cG9ydCBsZXQgZyA9IG5ldyBnYW1lKGNhbnZhc19lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKSx7fSwgYXN5bmMgKGc6Z2FtZTx7fT4pPT57XHJcbiAgZy5sb2FkUm9vbVN0cmluZyhcIk92ZXJ3b3JsZFwiKTtcclxufSk7XHJcblxyXG4iLCJpbXBvcnQge3BpZWNlLHNpZGUscGllY2VfdHlwZSxwaWVjZV9wYXJhbWV0ZXJzfSBmcm9tIFwiLi9hYnN0cmFjdC9waWVjZVwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSwgcG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCaXNob3AgZXh0ZW5kcyBwaWVjZXtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvYmlzaG9wLnBuZ1wiXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0gcGllY2UuZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUse1xyXG4gICAgICBzaWRlOnBhcmFtcy5zaWRlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGUudHlwZSA9IHBpZWNlX3R5cGUuYmlzaG9wO1xyXG4gIH1cclxuICBnZXRBdHRhY2tpbmcoKTpBcnJheTxwb3NpdGlvbj57XHJcbiAgICByZXR1cm4gdGhpcy5hdHRhY2tEaWFnb25hbCgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgR29vbWJhLCBkaXJlY3Rpb24sIFBsYXllcl9QYXJhbXMgfSBmcm9tIFwiLi9Hb29tYmFcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGV9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlZFBsYXllciBleHRlbmRzIEdvb21iYSB7XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpQbGF5ZXJfUGFyYW1zKXtcclxuICAgIHN1cGVyKHN0YXRlLHBhcmFtcyk7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uID0gc3RhdGUucG9zaXRpb247XHJcbiAgfVxyXG4gIHRhZ3MgPSBbXCJwbGF5ZXJcIl07XHJcbiAgcmVnaXN0ZXJDb250cm9scygpIHtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJLZXlBXCIsIGV4ZWNfdHlwZS5yZXBlYXQsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA+IC0xMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIktleUFcIiwgZXhlY190eXBlLm9uY2UsICgpID0+IHtcclxuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24ubGVmdDtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54IC0gMC4xO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwibW91c2UwZG93blwiLCBleGVjX3R5cGUucmVwZWF0LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXVkaW8ucGxheShcImV4cGxvc2lvblwiLCAwLjQpO1xyXG4gICAgfSwgNDAwKTtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJLZXlEXCIsIGV4ZWNfdHlwZS5yZXBlYXQsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA8IDEwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54ICsgMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwiS2V5RFwiLCBleGVjX3R5cGUub25jZSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5yaWdodDtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54ICsgMC4xO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwiU3BhY2VcIiwgZXhlY190eXBlLm9uY2UsICgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmp1bXBpbmcpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgKz0gMjU7XHJcbiAgICAgICAgdGhpcy5hdWRpby5wbGF5KFwic2xpbWVcIiwgMC4xKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IG9ial9zdGF0ZSwgcG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IHBsYXRmb3JtZXJfb2JqIH0gZnJvbSBcIi4vYWJzdHJhY3QvcGxhdGZvcm1lcl9vYmpcIjtcclxuXHJcbmludGVyZmFjZSBjdXJzb3JfcGFyYW1ze1xyXG4gIGlkOnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3Vyc29yIGV4dGVuZHMgcGxhdGZvcm1lcl9vYmoge1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9jdXJzb3IucG5nXCI7XHJcbiAgaGVpZ2h0ID0gNjQ7XHJcbiAgd2lkdGggPSA2NDtcclxuICBjb2xsaXNpb24gPSB0cnVlO1xyXG4gIHJlbmRlciA9IHRydWU7XHJcbiAgdGFncyA9IFtcIkN1cnNvclwiXTtcclxufVxyXG4iLCJcbiAgICBcbiAgICBpbXBvcnQge29ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcbiAgICBpbXBvcnQgeyBvYmpfc3RhdGUsIHBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xuaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9tYWluXCI7XG4gICAgXG4gICAgaW50ZXJmYWNlIERvb3Jfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIGludGVyZmFjZSBEb29yX3BhcmFtZXRlcnN7XG4gICAgICBsb2NhdGlvbjpzdHJpbmcsXG4gICAgICB0ZXN0OmJvb2xlYW4sXG4gICAgICB5ZXA6bnVtYmVyXG4gICAgfVxuICAgIFxuICAgIGV4cG9ydCBjbGFzcyBEb29yIGV4dGVuZHMgb2Jqe1xuICAgICAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL3RhcmdldC5wbmdcIjtcbiAgICAgIGhlaWdodCA9IDEwMDtcbiAgICAgIHdpZHRoID0gMTAwO1xuICAgICAgdGFnczpBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICBjb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgIHJlbmRlciA9IHRydWU7XG4gICAgICBzdGF0ZTpEb29yX3N0YXRlO1xuICAgICAgcGFyYW1zOkRvb3JfcGFyYW1ldGVycztcbiAgICAgIHN0YXRpYyBkZWZhdWx0X3BhcmFtczpEb29yX3BhcmFtZXRlcnMgPSB7XG4gICAgICAgIGxvY2F0aW9uOlwiVW5kZXJ3b3JsZFwiLFxuICAgICAgICB0ZXN0OnRydWUsXG4gICAgICAgIHllcDoxNVxuICAgICAgfVxuICAgICAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpEb29yX3BhcmFtZXRlcnMgPSBEb29yLmRlZmF1bHRfcGFyYW1zKXtcbiAgICAgICAgc3VwZXIoc3RhdGUscGFyYW1zKTtcbiAgICAgIH1cbiAgICAgIHN0YXRlZih0aW1lX2RlbHRhOm51bWJlcil7XG4gICAgICAgIGxldCBjb2xsaWRlcyA9IGcuZ2V0Um9vbSgpLmNoZWNrQ29sbGlzaW9ucyh0aGlzLmdldEZ1bGxDb2xsaXNpb25Cb3goKSlcbiAgICAgICAgZm9yKGxldCBvYmogb2YgY29sbGlkZXMpe1xuICAgICAgICAgIGlmKG9iai50YWdzLmluY2x1ZGVzKFwicGxheWVyXCIpKXtcbiAgICAgICAgICAgIGcubG9hZFJvb21TdHJpbmcodGhpcy5wYXJhbXMubG9jYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVuZGVyZih0aW1lX2RlbHRhOm51bWJlcil7XG4gICAgICAgcmV0dXJuIHN1cGVyLnJlbmRlcmYodGltZV9kZWx0YSk7IFxuICAgICAgfVxuICAgICAgcmVnaXN0ZXJBbmltYXRpb25zKCl7XG4gICAgXG4gICAgICB9XG4gICAgICByZWdpc3RlckF1ZGlvKCl7XG4gICAgXG4gICAgICB9XG4gICAgICByZWdpc3RlckNvbnRyb2xzKCl7XG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAiLCJpbXBvcnQgeyB2ZWxvY2l0eSwgb2JqX3N0YXRlLCBzdGF0ZV9mdW5jLHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IHNwcml0ZSwgc3ByaXRlX2dlbiB9IGZyb20gXCIuLi8uLi9saWIvc3ByaXRlXCI7XHJcbmltcG9ydCB7IG9iaiB9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IHBsYXRmb3JtZXJfb2JqLCBwbGF0Zm9ybWVyX29ial9jb21wb3NpdGUsIHBsYXRfc3RhdGUgfSBmcm9tIFwiLi9hYnN0cmFjdC9wbGF0Zm9ybWVyX29ialwiO1xyXG5pbXBvcnQgeyBQb2xsX01vdXNlIH0gZnJvbSBcIi4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4uLy4uL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgQmluZCB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHtUZXh0X05vZGUsVGV4dH0gZnJvbSBcIi4uLy4uL2xpYi9odWRcIjtcclxuaW1wb3J0IHsgT3ZlcndvcmxkIH0gZnJvbSBcIi4uL3Jvb21zL092ZXJ3b3JsZFwiO1xyXG5pbXBvcnQgeyBnIH0gZnJvbSBcIi4uL21haW5cIjtcclxuXHJcbmV4cG9ydCBlbnVtIGRpcmVjdGlvbiB7XHJcbiAgbGVmdCxcclxuICByaWdodFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGdvb21iYV9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZSwgcGxhdF9zdGF0ZSB7XHJcbiAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXHJcbiAganVtcGluZzogYm9vbGVhbixcclxuICB0aW1lc19haXJzaG90OiBudW1iZXIsXHJcbiAgbWF4X3RpbWVzX2FpcnNob3Q6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGd1bl9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZSB7XHJcbiAgcm90YXRpb246IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYXllcl9QYXJhbXN7XHJcbiAgaWQ6c3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBnb29tYmFfcGFyYW1ze1xyXG4gIGlkPzpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdvb21iYSBleHRlbmRzIHBsYXRmb3JtZXJfb2Jqe1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9mb2xkZXIvcm9ib3QucG5nXCI7XHJcbiAgaGVpZ2h0ID0gMTQ5O1xyXG4gIHdpZHRoID0gMTQ5O1xyXG4gIHRhZ3MgPSBbXCJkdW1teVwiXVxyXG4gIGNvbGxpc2lvbiA9IHRydWU7XHJcbiAgaGVhbHRoX3RleHQ6IFRleHQ7XHJcbiAgc3RhdGU6Z29vbWJhX3N0YXRlO1xyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbWV0ZXJzOmdvb21iYV9wYXJhbXMgPSBHb29tYmEuZGVmYXVsdF9wYXJhbXMpIHtcclxuICAgIFxyXG4gICAgc3VwZXIoc3RhdGUscGFyYW1ldGVycyk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5pZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5pZCA9IHBhcmFtZXRlcnMuaWQ7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUse1xyXG4gICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbi5sZWZ0LFxyXG4gICAgICBqdW1waW5nOiBmYWxzZSxcclxuICAgICAgaGVhbHRoOiAxMDAsXHJcbiAgICAgIHRpbWVzX2FpcnNob3Q6IDAsXHJcbiAgICAgIG1heF90aW1lc19haXJzaG90OiAwXHJcbiAgICB9KVxyXG4gICAgLy90aGlzLmFuaW1hdGlvbnMucGxheShcIndhbGsxXCIpO1xyXG4gIH1cclxuICByZWdpc3RlckFuaW1hdGlvbnMoKSB7XHJcbiAgICBsZXQgc3ByaXRlcyA9IHNwcml0ZV9nZW4odGhpcy5zcHJpdGVfc2hlZXQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoXCJ3YWxrMVwiLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzBdXSxcclxuICAgICAgWzEwMCwgc3ByaXRlc1swXVsxXV0sXHJcbiAgICAgIFs0MDAsIHNwcml0ZXNbMF1bMF1dLFxyXG4gICAgICBbNTAwLCBzcHJpdGVzWzBdWzJdXVxyXG4gICAgXSwgODAwKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZChcIndhbGsyXCIsIFtcclxuICAgICAgWzAsIHNwcml0ZXNbMF1bNV1dLFxyXG4gICAgICBbMTAwLCBzcHJpdGVzWzBdWzRdXSxcclxuICAgICAgWzQwMCwgc3ByaXRlc1swXVs1XV0sXHJcbiAgICAgIFs1MDAsIHNwcml0ZXNbMF1bM11dXHJcbiAgICBdLCA4MDApXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKFwiaWRsZWxlZnRcIiwgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVswXV1cclxuICAgIF0sIDEpO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnaWRsZXJpZ2h0JywgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVs1XV1cclxuICAgIF0sIDEpO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnZmFsbGxlZnQnLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzZdXVxyXG4gICAgXSwgMSk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmYWxscmlnaHQnLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzddXVxyXG4gICAgXSwgMSlcclxuICB9XHJcbiAgcmVnaXN0ZXJBdWRpbygpIHtcclxuICAgIHRoaXMuYXVkaW8uYWRkKFwic2xpbWVcIiwgXCIuL3NvdW5kcy9nb29tYmEvc2xpbWViYWxsLndhdlwiKTtcclxuICAgIHRoaXMuYXVkaW8uYWRkKFwiZXhwbG9zaW9uXCIsIFwiLi9zb3VuZHMvZXhwbG9zaW9uLm1wM1wiKVxyXG4gIH1cclxuICByZW5kZXJmKHQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuanVtcGluZykge1xyXG4gICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT0gZGlyZWN0aW9uLmxlZnQgPyBcImZhbGxsZWZ0XCIgOiBcImZhbGxyaWdodFwiO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheShhbmltYXRpb24pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS54ID09IDAgJiYgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ID09IDApIHtcclxuICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuc3RhdGUuZGlyZWN0aW9uID09IGRpcmVjdGlvbi5sZWZ0ID8gXCJpZGxlbGVmdFwiIDogXCJpZGxlcmlnaHRcIjtcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoYW5pbWF0aW9uKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCF0aGlzLmFuaW1hdGlvbnMuYW5pbWF0aW5nKSB7XHJcbiAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PSBkaXJlY3Rpb24ubGVmdCA/IFwid2FsazFcIiA6IFwid2FsazJcIjtcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoYW5pbWF0aW9uKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdXBlci5yZW5kZXJmKHQpO1xyXG4gIH1cclxuICBzdGF0ZWYodGltZTogbnVtYmVyKSB7XHJcbiAgICBsZXQgcm9vbSA9IGcuZ2V0Um9vbSgpO1xyXG4gICAgbGV0IGN1cnNvciA9IHJvb20uZ2V0T2JqKFwiY3Vyc29yXCIpO1xyXG4gICAgaWYgKHRoaXMuY29sbGlzaW9uKSB7XHJcbiAgICAgIGxldCBjb2wgPSB0aGlzLmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICAgICAgaWYgKHJvb20uY2hlY2tDb2xsaXNpb25zKHtcclxuICAgICAgICB3aWR0aDogY29sLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogMSxcclxuICAgICAgICB4OiBjb2wueCxcclxuICAgICAgICB5OiBjb2wueSAtIGNvbC5oZWlnaHQgLyAyIC0gMSxcclxuICAgICAgfSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuanVtcGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubWF4X3RpbWVzX2FpcnNob3QgPSBNYXRoLm1heCh0aGlzLnN0YXRlLnRpbWVzX2FpcnNob3QsIHRoaXMuc3RhdGUubWF4X3RpbWVzX2FpcnNob3QpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUudGltZXNfYWlyc2hvdCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qdW1waW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueSA+IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS55IC0gMC40ICogMTYgLyB0aW1lO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS55IDwgMClcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueSA8IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS55ICsgMC40ICogMTYgLyB0aW1lO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS55ID4gMClcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA+IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24ucmlnaHQ7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCAtIDAuNCAqIDE2IC8gdGltZTs7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnggPCAwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS54IDwgMCkge1xyXG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5sZWZ0O1xyXG4gICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggPSB0aGlzLnN0YXRlLnZlbG9jaXR5LnggKyAwLjQgKiAxNiAvIHRpbWU7O1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS54ID4gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtwb3NpdGlvbiwgb2JqX3N0YXRlfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IHJvdGF0aW9uX2xlbmd0aCB9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IHBsYXRmb3JtZXJfb2JqIH0gZnJvbSBcIi4vYWJzdHJhY3QvcGxhdGZvcm1lcl9vYmpcIjtcclxuaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9tYWluXCI7XHJcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gXCIuL0N1cnNvclwiO1xyXG5pbXBvcnQgeyBndW5fc3RhdGUsIEdvb21iYSB9IGZyb20gXCIuL0dvb21iYVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHdW4gZXh0ZW5kcyBwbGF0Zm9ybWVyX29iaiB7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2ZvbGRlci9ndW4ucG5nXCI7XHJcbiAgaGVpZ2h0ID0gNTA7XHJcbiAgd2lkdGggPSAyMDtcclxuICBjb2xsaXNpb24gPSBmYWxzZTtcclxuICByZW5kZXIgPSB0cnVlO1xyXG4gIHBsYXllcjogR29vbWJhO1xyXG4gIGdyYXZpdHkgPSBmYWxzZTtcclxuICBjdXJzb3I6IEN1cnNvcjtcclxuICB0YWdzID0gW1wiZ3VuXCJdO1xyXG4gIHN0YXRlZih0OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnBsYXllcikge1xyXG4gICAgICBsZXQgYW5nbGUgPSB0aGlzLnBsYXllci5hbmdsZVRvd2FyZHModGhpcy5jdXJzb3IpO1xyXG4gICAgICBsZXQgcm90ID0gcm90YXRpb25fbGVuZ3RoKDUwLCBhbmdsZSk7XHJcbiAgICAgIHRoaXMucm90YXRpb24gPSBhbmdsZTtcclxuICAgICAgdGhpcy5zdGF0ZS5yb3RhdGlvbiA9IGFuZ2xlO1xyXG4gICAgICB0aGlzLnN0YXRlLnBvc2l0aW9uID0ge1xyXG4gICAgICAgIHg6IHJvdC54ICsgdGhpcy5wbGF5ZXIuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OiByb3QueSArIHRoaXMucGxheWVyLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgICAgfTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbGV0IHJvb20gPSBnLmdldFJvb20oKTtcclxuICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBhcmVudC5nZXRJdGVtc0J5VGFnKFwicGxheWVyXCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgdGhpcy5jdXJzb3IgPSA8Q3Vyc29yPnJvb20uZ2V0T2JqQnlUYWcoXCJDdXJzb3JcIilbMF07XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge3BpZWNlLHNpZGUscGllY2VfdHlwZSxwaWVjZV9wYXJhbWV0ZXJzfSBmcm9tIFwiLi9hYnN0cmFjdC9waWVjZVwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSwgcG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtCb2FyZH0gZnJvbSBcIi4uL3Jvb21zL0JvYXJkXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBLaW5nIGV4dGVuZHMgcGllY2V7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2tpbmcucG5nXCJcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOnBpZWNlX3BhcmFtZXRlcnMgPSBwaWVjZS5kZWZhdWx0X3BhcmFtcyl7XHJcbiAgICBzdXBlcihzdGF0ZSx7XHJcbiAgICAgIHNpZGU6cGFyYW1zLnNpZGVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGF0ZS50eXBlID0gcGllY2VfdHlwZS5raW5nO1xyXG4gIH1cclxuICBjaGVja19sZWZ0X2Nhc3RsZShyb29tOkJvYXJkLGNvcmRzOnBvc2l0aW9uKXtcclxuICAgIGlmKCF0aGlzLnN0YXRlLmhhc19tb3ZlZCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54IC0gMSx5OmNvcmRzLnl9KS5sZW5ndGggPT0gMCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54IC0gMix5OmNvcmRzLnl9KS5sZW5ndGggPT0gMCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy55IC0gMywgeTpjb3Jkcy55fSkubGVuZ3RoID09IDApe1xyXG4gICAgICBsZXQgcm9vayA9IHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggLSA0LHk6Y29yZHMueX0pO1xyXG4gICAgICBpZihyb29rLmxlbmd0aCA+IDAgJiYgIXJvb2tbMF0uc3RhdGUuaGFzX21vdmVkKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBjaGVja19yaWdodF9jYXN0bGUocm9vbTpCb2FyZCxjb3Jkczpwb3NpdGlvbil7XHJcbiAgICBpZighdGhpcy5zdGF0ZS5oYXNfbW92ZWQgJiYgcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCArIDEseTpjb3Jkcy55fSkubGVuZ3RoID09IDAgJiYgcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCArIDIseTpjb3Jkcy55fSkubGVuZ3RoID09IDApe1xyXG4gICAgICBsZXQgcm9vayA9IHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggKyAzLHk6Y29yZHMueX0pO1xyXG4gICAgICBpZihyb29rLmxlbmd0aCA+IDAgJiYgIXJvb2tbMF0uc3RhdGUuaGFzX21vdmVkKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBnZXRBdHRhY2tpbmcoKTpBcnJheTxwb3NpdGlvbj57XHJcbiAgICBsZXQgY29yZHMgPSB0aGlzLmdldENvcmRzKCk7XHJcbiAgICBsZXQgcm9vbSA9IGcuZ2V0Um9vbSgpIGFzIEJvYXJkO1xyXG4gICAgbGV0IGF0dGFja2VkOkFycmF5PHBvc2l0aW9uPiA9IFtdO1xyXG4gICAgZm9yKGxldCB4ID0gLTE7eCA8PSAxOyB4Kyspe1xyXG4gICAgICBmb3IobGV0IHkgPSAtMTt5IDw9IDE7IHkrKyl7XHJcbiAgICAgICAgaWYoKHggIT09IDAgfHwgeSAhPT0gMCkgJiYgY29yZHMueCArIHggPj0gMCAmJiBjb3Jkcy55ICsgeCA8IDggJiYgY29yZHMueSArIHkgPj0gMCAmJiBjb3Jkcy55ICsgeSA8IDgpe1xyXG4gICAgICAgICAgbGV0IHBpZWNlID0gcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCArIHgsIHk6Y29yZHMueSArIHl9KTtcclxuICAgICAgICAgIGxldCBzYWZlID0gdHJ1ZTtcclxuICAgICAgICAgIGlmKHNhZmUgJiYgcGllY2UubGVuZ3RoID09PSAwIHx8IHBpZWNlWzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCArIHgsIHk6Y29yZHMueSArIHl9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vY2FzdGxlIGNoZWNrIGxlZnRcclxuICAgIGlmKHRoaXMuY2hlY2tfbGVmdF9jYXN0bGUocm9vbSxjb3Jkcykpe1xyXG4gICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggLSAyLHk6Y29yZHMueX0pO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5jaGVja19yaWdodF9jYXN0bGUocm9vbSxjb3Jkcykpe1xyXG4gICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggKyAyLHk6Y29yZHMueX0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dGFja2VkO1xyXG4gIH1cclxufSIsImltcG9ydCB7cGllY2Usc2lkZSxwaWVjZV90eXBlLHBpZWNlX3BhcmFtZXRlcnN9IGZyb20gXCIuL2Fic3RyYWN0L3BpZWNlXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlLCBwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge2d9IGZyb20gXCIuLi9tYWluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgS25pZ2h0IGV4dGVuZHMgcGllY2V7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2tuaWdodC5wbmdcIlxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6cGllY2VfcGFyYW1ldGVycyA9IHBpZWNlLmRlZmF1bHRfcGFyYW1zKXtcclxuICAgIHN1cGVyKHN0YXRlLHtcclxuICAgICAgc2lkZTpwYXJhbXMuc2lkZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXRlLnR5cGUgPSBwaWVjZV90eXBlLmtuaWdodDtcclxuICB9XHJcbiAgZ2V0QXR0YWNraW5nKCk6QXJyYXk8cG9zaXRpb24+e1xyXG4gICAgbGV0IGNvcmRzID0gdGhpcy5nZXRDb3JkcygpO1xyXG4gICAgbGV0IGF0dGFja2VkOkFycmF5PHBvc2l0aW9uPiA9IFtdO1xyXG4gICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54ICsgMSx5OmNvcmRzLnkgKyAyfSk7XHJcbiAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggLSAxLHk6Y29yZHMueSArIDJ9KTtcclxuICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCArIDIseTpjb3Jkcy55ICsgMX0pO1xyXG4gICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54ICsgMix5OmNvcmRzLnkgLSAxfSk7XHJcbiAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggKyAxLHk6Y29yZHMueSAtIDJ9KTtcclxuICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCAtIDEseTpjb3Jkcy55IC0gMn0pO1xyXG4gICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54IC0gMix5OmNvcmRzLnkgKyAxfSk7XHJcbiAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggLSAyLHk6Y29yZHMueSAtIDF9KTtcclxuICAgIHJldHVybihhdHRhY2tlZC5maWx0ZXIoKHgpPT54LnggPj0gMCAmJiB4LnggPCA4ICYmIHgueSA+PSAwICYmIHgueSA8IDgpKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBvYmogfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBCb2FyZCwgc2lkZSB9IGZyb20gXCIuLi9yb29tcy9Cb2FyZFwiO1xyXG5pbXBvcnQgeyBwaWVjZSwgcGllY2VfdHlwZSB9IGZyb20gXCIuL2Fic3RyYWN0L3BpZWNlXCI7XHJcbmltcG9ydCB7IFF1ZWVuIH0gZnJvbSBcIi4vUXVlZW5cIjtcclxuaW1wb3J0IHsgZXhlY190eXBlIH0gZnJvbSBcIi4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBvYmpfc3RhdGUsIHBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBnIH0gZnJvbSBcIi4uL21haW5cIjtcclxuaW50ZXJmYWNlIG1vdmVfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGUge1xyXG4gIHBvc2l0aW9uOiB7XHJcbiAgICB4OiBudW1iZXIsXHJcbiAgICB5OiBudW1iZXJcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlIGV4dGVuZHMgb2JqIHtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvYXR0YWNrZWQucG5nXCI7XHJcbiAgaGVpZ2h0ID0gMTAwO1xyXG4gIHdpZHRoID0gMTAwO1xyXG4gIHJlbmRlciA9IGZhbHNlO1xyXG4gIGxheWVyID0gMjtcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTogb2JqX3N0YXRlKSB7XHJcbiAgICBzdXBlcihzdGF0ZSk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IHN0YXRlLnBvc2l0aW9uLnggKiB0aGlzLndpZHRoIC0gMzUwLFxyXG4gICAgICAgIHk6IHN0YXRlLnBvc2l0aW9uLnkgKiB0aGlzLmhlaWdodCAtIDM1MFxyXG4gICAgICB9LFxyXG4gICAgICB2ZWxvY2l0eToge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgICB9LFxyXG4gICAgICByb3RhdGlvbjogMCxcclxuICAgICAgc2NhbGluZzoge1xyXG4gICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgIGhlaWdodDogMVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldENvcmRzKCk6IHBvc2l0aW9uIHtcclxuICAgIHJldHVybiB7IHg6IE1hdGguZmxvb3IoKHRoaXMuc3RhdGUucG9zaXRpb24ueCArIDM1MCkgLyAxMDApLCB5OiBNYXRoLmZsb29yKCh0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKyAzNTApIC8gMTAwKSB9O1xyXG4gIH1cclxuICByZWdpc3RlckNvbnRyb2xzKCkge1xyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIm1vdXNlMVwiLCBleGVjX3R5cGUub25jZSwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5yZW5kZXIpIHtcclxuICAgICAgICBsZXQgcm9vbSA9IGcuc3RhdGUuY3VycmVudF9yb29tIGFzIEJvYXJkO1xyXG4gICAgICAgIGxldCBwID0gcm9vbS5nZXRfcGllY2UodGhpcy5nZXRDb3JkcygpKSBhcyBwaWVjZVtdO1xyXG4gICAgICAgIGxldCBzID0gcm9vbS5zdGF0ZS5zZWxlY3RlZDtcclxuICAgICAgICBpZiAocy5zdGF0ZS50eXBlID09PSBwaWVjZV90eXBlLmtpbmcgJiYgIXMuc3RhdGUuaGFzX21vdmVkICYmIHRoaXMuZ2V0Q29yZHMoKS54ID09PSA2KSB7XHJcbiAgICAgICAgICBsZXQgcm9va3MgPSByb29tLmdldF9waWVjZSh7IHg6IDcsIHk6IHMuZ2V0Q29yZHMoKS55IH0pO1xyXG4gICAgICAgICAgcm9va3NbMF0ubW92ZXRvQ29yZHMoeyB4OiA1LCB5OiBzLmdldENvcmRzKCkueSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHMuc3RhdGUudHlwZSA9PT0gcGllY2VfdHlwZS5raW5nICYmICFzLnN0YXRlLmhhc19tb3ZlZCAmJiB0aGlzLmdldENvcmRzKCkueSA9PT0gMikge1xyXG4gICAgICAgICAgbGV0IHJvb2tzID0gcm9vbS5nZXRfcGllY2UoeyB4OiAwLCB5OiBzLmdldENvcmRzKCkueSB9KTtcclxuICAgICAgICAgIHJvb2tzWzBdLm1vdmV0b0NvcmRzKHsgeDogMywgeTogcy5nZXRDb3JkcygpLnkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzLnN0YXRlLnR5cGUgPT09IHBpZWNlX3R5cGUucGF3biAmJiAhcy5zdGF0ZS5oYXNfbW92ZWQgJiYgcy5zdGF0ZS5zaWRlID09PSBzaWRlLndoaXRlICYmIHRoaXMuZ2V0Q29yZHMoKS55ID09PSAzKSB7XHJcbiAgICAgICAgICByb29tLnN0YXRlLndoaXRlX2JvYXJkW3RoaXMuZ2V0Q29yZHMoKS54XVt0aGlzLmdldENvcmRzKCkueSAtIDFdLmVucGFzc2VudCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzLnN0YXRlLnR5cGUgPT09IHBpZWNlX3R5cGUucGF3biAmJiAhcy5zdGF0ZS5oYXNfbW92ZWQgJiYgcy5zdGF0ZS5zaWRlID09PSBzaWRlLmJsYWNrICYmIHRoaXMuZ2V0Q29yZHMoKS55ID09PSA0KSB7XHJcbiAgICAgICAgICByb29tLnN0YXRlLmJsYWNrX2JvYXJkW3RoaXMuZ2V0Q29yZHMoKS54XVt0aGlzLmdldENvcmRzKCkueSArIDFdLmVucGFzc2VudCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzLnN0YXRlLnR5cGUgPT09IHBpZWNlX3R5cGUucGF3biAmJiBzLnN0YXRlLnNpZGUgPT0gc2lkZS5ibGFjayAmJiByb29tLmdldF9tZXRhKHRoaXMuZ2V0Q29yZHMoKSwgc2lkZS53aGl0ZSkuZW5wYXNzZW50KSB7XHJcbiAgICAgICAgICBsZXQgZiA9IHJvb20uZ2V0X3BpZWNlKHsgeDogdGhpcy5nZXRDb3JkcygpLngsIHk6IHRoaXMuZ2V0Q29yZHMoKS55ICsgMSB9KTtcclxuICAgICAgICAgIHJvb20ucmVtb3ZlX3BpZWNlKGZbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocy5zdGF0ZS50eXBlID09PSBwaWVjZV90eXBlLnBhd24gJiYgcy5zdGF0ZS5zaWRlID09IHNpZGUud2hpdGUgJiYgcm9vbS5nZXRfbWV0YSh0aGlzLmdldENvcmRzKCksIHNpZGUuYmxhY2spLmVucGFzc2VudCkge1xyXG4gICAgICAgICAgbGV0IGYgPSByb29tLmdldF9waWVjZSh7IHg6IHRoaXMuZ2V0Q29yZHMoKS54LCB5OiB0aGlzLmdldENvcmRzKCkueSAtIDEgfSk7XHJcbiAgICAgICAgICByb29tLnJlbW92ZV9waWVjZShmWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcy5zdGF0ZS5oYXNfbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChwLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHJvb20ucmVtb3ZlX3BpZWNlKHBbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMuZ2V0Q29yZHMoKS55ID09IDcgfHwgdGhpcy5nZXRDb3JkcygpLnkgPT0gMCkgJiYgcy5zdGF0ZS50eXBlID09PSBwaWVjZV90eXBlLnBhd24pIHtcclxuICAgICAgICAgIGxldCBxdSA9IG5ldyBRdWVlbih7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmdldENvcmRzKCksXHJcbiAgICAgICAgICAgIHZlbG9jaXR5OiB7XHJcbiAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICAgICAgICBzY2FsaW5nOiB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxLCB3aWR0aDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCB7IHNpZGU6IHMuc3RhdGUuc2lkZSB9KTtcclxuICAgICAgICAgIHF1LmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcm9vbS5hZGRfcGllY2UocXUpO1xyXG4gICAgICAgICAgICByb29tLnJlbW92ZV9waWVjZShzKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzLnN0YXRlLnNpZGUgPT09IHNpZGUud2hpdGUpIHtcclxuICAgICAgICAgIHJvb20uY2hhbmdlX3NpZGUoc2lkZS5ibGFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHMuc3RhdGUuc2lkZSA9PT0gc2lkZS5ibGFjaykge1xyXG4gICAgICAgICAgcm9vbS5jaGFuZ2Vfc2lkZShzaWRlLndoaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm9vbS5jbGVhcl9hdHRhY2tlZCgpO1xyXG4gICAgICAgIHJvb20uc3RhdGUuc2VsZWN0ZWQubW92ZXRvQ29yZHModGhpcy5nZXRDb3JkcygpKTtcclxuXHJcbiAgICAgICAgcm9vbS5zdGF0ZS5hdHRhY2tlZCA9IFtdO1xyXG4gICAgICAgIHJvb20uc3RhdGUuc2VsZWN0ZWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59IiwiaW1wb3J0IHtwaWVjZSxzaWRlLHBpZWNlX3R5cGUscGllY2VfcGFyYW1ldGVyc30gZnJvbSBcIi4vYWJzdHJhY3QvcGllY2VcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUsIHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7Qm9hcmR9IGZyb20gXCIuLi9yb29tcy9Cb2FyZFwiO1xyXG5pbXBvcnQge2d9IGZyb20gXCIuLi9tYWluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGF3biBleHRlbmRzIHBpZWNle1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9wYXduLnBuZ1wiXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0gcGllY2UuZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUse1xyXG4gICAgICBzaWRlOnBhcmFtcy5zaWRlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGUudHlwZSA9IHBpZWNlX3R5cGUucGF3bjtcclxuICB9XHJcbiAgZ2V0QXR0YWNraW5nKCk6QXJyYXk8cG9zaXRpb24+e1xyXG4gICAgbGV0IGF0dGFja2VkOkFycmF5PHBvc2l0aW9uPiA9IFtdO1xyXG4gICAgbGV0IGNvcmRzID0gdGhpcy5nZXRDb3JkcygpO1xyXG4gICAgbGV0IHJvb20gPSBnLmdldFJvb20oKSBhcyBCb2FyZDtcclxuICAgIGlmKHRoaXMuc3RhdGUuc2lkZSA9PSBzaWRlLndoaXRlKXtcclxuICAgICAgaWYocm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCx5OmNvcmRzLnkgKyAxfSkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLngseTpjb3Jkcy55ICsgMX0pO1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmhhc19tb3ZlZCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54LHk6Y29yZHMueSArIDJ9KS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54LHk6Y29yZHMueSArIDJ9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxlZnRfY29yZHM6cG9zaXRpb24gPSB7eDpjb3Jkcy54LSAxLHk6Y29yZHMueSArIDF9O1xyXG4gICAgICBsZXQgcmlnaHRfY29yZHM6cG9zaXRpb24gPSB7eDpjb3Jkcy54KyAxLHk6Y29yZHMueSArIDF9OyBcclxuICAgICAgbGV0IGxlZnQgPSByb29tLmdldF9waWVjZShsZWZ0X2NvcmRzKTtcclxuICAgICAgbGV0IHJpZ2h0ID0gcm9vbS5nZXRfcGllY2UocmlnaHRfY29yZHMpO1xyXG4gICAgICBsZXQgbGVmdF9lbiA9IHJvb20uZ2V0X21ldGEobGVmdF9jb3JkcyxzaWRlLmJsYWNrKTtcclxuICAgICAgbGV0IHJpZ2h0X2VuID0gcm9vbS5nZXRfbWV0YShyaWdodF9jb3JkcyxzaWRlLmJsYWNrKTtcclxuICAgICAgaWYoKGNvcmRzLnggLSAxID49IDApICYmICgobGVmdC5sZW5ndGggPiAwICYmIGxlZnRbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKSB8fCAobGVmdF9lbiAmJiBsZWZ0X2VuLmVucGFzc2VudCkpKXtcclxuICAgICAgICBhdHRhY2tlZC5wdXNoKGxlZnRfY29yZHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKChjb3Jkcy54ICsgMSA8IDgpICYmICgocmlnaHQubGVuZ3RoID4gMCAmJiByaWdodFswXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpIHx8IChyaWdodF9lbiAmJiByaWdodF9lbi5lbnBhc3NlbnQpKSl7XHJcbiAgICAgICAgYXR0YWNrZWQucHVzaChyaWdodF9jb3Jkcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZihyb29tLmdldF9waWVjZSh7eDpjb3Jkcy54LHk6Y29yZHMueSAtIDF9KS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCx5OmNvcmRzLnkgLSAxfSk7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuaGFzX21vdmVkICYmIHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLngseTpjb3Jkcy55IC0gMn0pLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLngseTpjb3Jkcy55IC0gMn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgbGVmdF9jb3Jkczpwb3NpdGlvbiA9IHt4OmNvcmRzLnggLSAxLHk6Y29yZHMueSAtIDF9O1xyXG4gICAgICBsZXQgcmlnaHRfY29yZHM6cG9zaXRpb24gPSB7eDpjb3Jkcy54KyAxLHk6Y29yZHMueSAtIDF9O1xyXG4gICAgICBsZXQgbGVmdCA9IHJvb20uZ2V0X3BpZWNlKGxlZnRfY29yZHMpO1xyXG4gICAgICBsZXQgcmlnaHQgPSByb29tLmdldF9waWVjZShyaWdodF9jb3Jkcyk7XHJcbiAgICAgIGxldCBsZWZ0X2VuID0gcm9vbS5nZXRfbWV0YShsZWZ0X2NvcmRzLHNpZGUud2hpdGUpO1xyXG4gICAgICBsZXQgcmlnaHRfZW4gPSByb29tLmdldF9tZXRhKHJpZ2h0X2NvcmRzLHNpZGUud2hpdGUpO1xyXG4gICAgICBpZigoY29yZHMueCAtIDEgPj0gMCkgJiYgKChsZWZ0Lmxlbmd0aCA+IDAgJiYgbGVmdFswXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpIHx8IChsZWZ0X2VuICYmIGxlZnRfZW4uZW5wYXNzZW50KSkpe1xyXG4gICAgICAgIGF0dGFja2VkLnB1c2gobGVmdF9jb3Jkcyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoKGNvcmRzLnggKyAxIDwgOCkgJiYgKChyaWdodC5sZW5ndGggPiAwICYmIHJpZ2h0WzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSkgfHwgKHJpZ2h0X2VuICYmIHJpZ2h0X2VuLmVucGFzc2VudCkpKXtcclxuICAgICAgICBhdHRhY2tlZC5wdXNoKHJpZ2h0X2NvcmRzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dGFja2VkO1xyXG4gIH1cclxufSIsImltcG9ydCB7IG9ial9zdGF0ZSwgcG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IGNvbXBvc2l0ZV9vYmogfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJfUGFyYW1zIH0gZnJvbSBcIi4vR29vbWJhXCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZWRQbGF5ZXIgfSBmcm9tIFwiLi9Db250cm9sbGVkUGxheWVyXCI7XHJcbmltcG9ydCB7IEd1biB9IGZyb20gXCIuL0d1blwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjb21wb3NpdGVfb2Jqe1xyXG4gIGVuZW15ID0gdHJ1ZTtcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUsIHBhcmFtZXRlcnM6IFBsYXllcl9QYXJhbXMpIHtcclxuICAgIHN1cGVyKHN0YXRlKTtcclxuICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBDb250cm9sbGVkUGxheWVyKHN0YXRlLCBwYXJhbWV0ZXJzKSk7XHJcbiAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgR3VuKHtcclxuICAgICAgcG9zaXRpb246e3g6IHN0YXRlLnBvc2l0aW9uLngsIHk6IHN0YXRlLnBvc2l0aW9uLnkgKyAxMDB9LFxyXG4gICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgIHNjYWxpbmc6e2hlaWdodDoxLHdpZHRoOjF9XHJcbiAgICB9LHBhcmFtZXRlcnMpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtwaWVjZSxzaWRlLHBpZWNlX3R5cGUscGllY2VfcGFyYW1ldGVyc30gZnJvbSBcIi4vYWJzdHJhY3QvcGllY2VcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUsIHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlZW4gZXh0ZW5kcyBwaWVjZXtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvcXVlZW4ucG5nXCJcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOnBpZWNlX3BhcmFtZXRlcnMgPSBwaWVjZS5kZWZhdWx0X3BhcmFtcyl7XHJcbiAgICBzdXBlcihzdGF0ZSx7XHJcbiAgICAgIHNpZGU6cGFyYW1zLnNpZGVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGF0ZS50eXBlID0gcGllY2VfdHlwZS5xdWVlbjtcclxuICB9XHJcbiAgZ2V0QXR0YWNraW5nKCk6QXJyYXk8cG9zaXRpb24+e1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0YWNrRGlhZ29uYWwoKS5jb25jYXQodGhpcy5hdHRhY2tDYXJkaW5hbCgpKTtcclxuICB9XHJcbn0iLCJpbXBvcnQge3BpZWNlLHNpZGUscGllY2VfdHlwZSxwaWVjZV9wYXJhbWV0ZXJzfSBmcm9tIFwiLi9hYnN0cmFjdC9waWVjZVwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSwgcG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtCb2FyZH0gZnJvbSBcIi4uL3Jvb21zL0JvYXJkXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb29rIGV4dGVuZHMgcGllY2V7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL3Jvb2sucG5nXCJcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOnBpZWNlX3BhcmFtZXRlcnMgPSBwaWVjZS5kZWZhdWx0X3BhcmFtcyl7XHJcbiAgICBzdXBlcihzdGF0ZSx7XHJcbiAgICAgIHNpZGU6cGFyYW1zLnNpZGVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGF0ZS50eXBlID0gcGllY2VfdHlwZS5yb29rO1xyXG4gIH1cclxuICBnZXRBdHRhY2tpbmcoKTpBcnJheTxwb3NpdGlvbj57XHJcbiAgICByZXR1cm4gdGhpcy5hdHRhY2tDYXJkaW5hbCgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IGJveCB9IGZyb20gXCIuL2JveFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlcnRCb3ggZXh0ZW5kcyBib3gge1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9ib3gyLnBuZ1wiO1xyXG4gIHdpZHRoID0gNjQ7XHJcbiAgaGVpZ2h0ID0gNTAwO1xyXG59XHJcbiIsImltcG9ydCB7b2JqfSBmcm9tIFwiLi4vLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQge3Bvc2l0aW9uZWRfc3ByaXRlLCBzcHJpdGUsc3ByaXRlX2dlbn0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zcHJpdGVcIjtcclxuaW1wb3J0IHtib2FyZF9zdGF0ZSwgQm9hcmR9IGZyb20gXCIuLi8uLi9yb29tcy9Cb2FyZFwiO1xyXG5pbXBvcnQgeyBVbmJpbmQsIGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHtwb3NpdGlvbixvYmpfc3RhdGV9IGZyb20gXCIuLi8uLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtnfSBmcm9tIFwiLi4vLi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGVudW0gc2lkZXtcclxuICB3aGl0ZSxcclxuICBibGFja1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBwaWVjZV90eXBle1xyXG4gIHBhd24sXHJcbiAgcm9vayxcclxuICBiaXNob3AsXHJcbiAgcXVlZW4sXHJcbiAga2luZyxcclxuICBrbmlnaHRcclxufVxyXG5cclxuaW50ZXJmYWNlIHBpZWNlX3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRle1xyXG4gIHNpZGU6c2lkZSxcclxuICB0eXBlOnBpZWNlX3R5cGUsXHJcbiAgaGFzX21vdmVkOmJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwaWVjZV9wYXJhbWV0ZXJze1xyXG4gIHNpZGU6c2lkZVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgcGllY2UgZXh0ZW5kcyBvYmp7XHJcbiAgaGVpZ2h0ID0gMTAwO1xyXG4gIHdpZHRoID0gMTAwO1xyXG4gIGNvbGxpc2lvbiA9IHRydWU7XHJcbiAgcGFyYW1zOnBpZWNlX3BhcmFtZXRlcnM7XHJcbiAgc3RhdGU6cGllY2Vfc3RhdGU7XHJcbiAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOnBpZWNlX3BhcmFtZXRlcnMgPSB7XHJcbiAgICBzaWRlOnNpZGUud2hpdGVcclxuICB9XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0gcGllY2UuZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUscGFyYW1zKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOntcclxuICAgICAgICB4OnN0YXRlLnBvc2l0aW9uLnggKiB0aGlzLndpZHRoIC0gMzUwLFxyXG4gICAgICAgIHk6c3RhdGUucG9zaXRpb24ueSAqIHRoaXMuaGVpZ2h0IC0gMzUwXHJcbiAgICAgIH0sXHJcbiAgICAgIHZlbG9jaXR5OntcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpZGU6cGFyYW1zLnNpZGUsXHJcbiAgICAgIHR5cGU6dW5kZWZpbmVkLFxyXG4gICAgICBoYXNfbW92ZWQ6ZmFsc2UsXHJcbiAgICAgIHJvdGF0aW9uOnN0YXRlLnJvdGF0aW9uLFxyXG4gICAgICBzY2FsaW5nOnN0YXRlLnNjYWxpbmdcclxuICAgIH1cclxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xyXG4gIH1cclxuICBtb3ZldG9Db3JkcyhhOnBvc2l0aW9uKXtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueCA9IGEueCAqIHRoaXMud2lkdGggLSAzNTA7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgPSBhLnkgKiB0aGlzLmhlaWdodCAtIDM1MDtcclxuICB9XHJcbiAgZ2V0Q29yZHMoKTpwb3NpdGlvbntcclxuICAgIHJldHVybiB7eDpNYXRoLnJvdW5kKCh0aGlzLnN0YXRlLnBvc2l0aW9uLngrMzUwKS8xMDApLHk6TWF0aC5yb3VuZCgodGhpcy5zdGF0ZS5wb3NpdGlvbi55ICsgMzUwKS8xMDApfTtcclxuICB9XHJcbiAgZ2V0QXR0YWNraW5nKCk6QXJyYXk8cG9zaXRpb24+e1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICByZW5kZXJmKHQ6bnVtYmVyKTpwb3NpdGlvbmVkX3Nwcml0ZXtcclxuICAgIGxldCBzcHJpdGVzID0gc3ByaXRlX2dlbih0aGlzLnNwcml0ZV9zaGVldCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcclxuICAgIGlmKHRoaXMucGFyYW1zLnNpZGUgPT09IHNpZGUud2hpdGUpe1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNwcml0ZTpzcHJpdGVzWzBdWzBdLFxyXG4gICAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3ByaXRlOnNwcml0ZXNbMF1bMV0sXHJcbiAgICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhdHRhY2tEaWFnb25hbCgpe1xyXG4gICAgbGV0IGNvcmRzID0gdGhpcy5nZXRDb3JkcygpO1xyXG4gICAgY29uc29sZS5sb2coY29yZHMpO1xyXG4gICAgbGV0IHJvb20gPSBnLmdldFJvb20oKSBhcyBCb2FyZDtcclxuICAgIGxldCBhdHRhY2tlZDpBcnJheTxwb3NpdGlvbj4gPSBbXTtcclxuICAgIGZvcihsZXQgYSA9IDE7YSA8IDg7YSsrKXtcclxuICAgICAgaWYoY29yZHMueCAtIGEgPj0gMCAmJiBjb3Jkcy54IC0gYSA8IDggJiYgY29yZHMueSAtIGEgPj0gMCAmJiBjb3Jkcy54IC0gYSA8IDgpe1xyXG4gICAgICAgIGxldCBwaWVjZXMgPSByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54IC0gYSx5OmNvcmRzLnkgLSBhfSk7XHJcbiAgICAgICAgaWYocGllY2VzLmxlbmd0aCA9PSAwIHx8IHBpZWNlc1swXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54IC0gYSx5OmNvcmRzLnkgLSBhfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBpZWNlcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAgXHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgPSAxO2EgPCA4O2ErKyl7XHJcbiAgICAgIGlmKGNvcmRzLnggLSBhID49IDAgJiYgY29yZHMueCAtIGEgPCA4ICYmIGNvcmRzLnkgKyBhID49IDAgJiYgY29yZHMueSArIGEgPCA4KXtcclxuICAgICAgICBsZXQgcGllY2VzID0gcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCAtIGEseTpjb3Jkcy55ICsgYX0pO1xyXG4gICAgICAgIGlmKHBpZWNlcy5sZW5ndGggPT0gMCB8fCBwaWVjZXNbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKXtcclxuICAgICAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCAtIGEseTpjb3Jkcy55ICsgYX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwaWVjZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0gIFxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gMTthIDwgODthKyspe1xyXG4gICAgICBpZihjb3Jkcy54ICsgYSA+PSAwICYmIGNvcmRzLnggKyBhIDwgOCAmJiBjb3Jkcy55ICsgYSA+PSAwICYmIGNvcmRzLnkgKyBhIDwgOCl7XHJcbiAgICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggKyBhLHk6Y29yZHMueSArIGF9KTtcclxuICAgICAgICBpZihwaWVjZXMubGVuZ3RoID09IDAgfHwgcGllY2VzWzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggKyBhLHk6Y29yZHMueSArIGF9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocGllY2VzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IDE7YSA8IDg7YSsrKXtcclxuICAgICAgaWYoY29yZHMueCArIGEgPj0gMCAmJiBjb3Jkcy54ICsgYSA8IDggJiYgY29yZHMueSAtIGEgPj0gMCAmJiBjb3Jkcy55IC0gYSA8IDgpe1xyXG4gICAgICAgIGxldCBwaWVjZXMgPSByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54ICsgYSx5OmNvcmRzLnkgLSBhfSk7XHJcbiAgICAgICAgaWYocGllY2VzLmxlbmd0aCA9PSAwIHx8IHBpZWNlc1swXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54ICsgYSx5OmNvcmRzLnkgLSBhfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBpZWNlcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXR0YWNrZWQ7XHJcbiAgfVxyXG4gIGF0dGFja0NhcmRpbmFsKCl7XHJcbiAgICBsZXQgY29yZHMgPSB0aGlzLmdldENvcmRzKCk7XHJcbiAgICBsZXQgcm9vbSA9IGcuZ2V0Um9vbSgpIGFzIEJvYXJkO1xyXG4gICAgbGV0IGF0dGFja2VkOkFycmF5PHBvc2l0aW9uPiA9IFtdO1xyXG4gICAgZm9yKGxldCBhID0gY29yZHMueCAtIDE7YSA+PSAwO2EtLSl7XHJcbiAgICAgIGxldCBwaWVjZXMgPSByb29tLmdldF9waWVjZSh7eDphLHk6Y29yZHMueX0pO1xyXG4gICAgICBpZihwaWVjZXMubGVuZ3RoID09PSAwIHx8IHBpZWNlc1swXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgIGF0dGFja2VkLnB1c2goe3g6YSx5OmNvcmRzLnl9KTtcclxuICAgICAgfVxyXG4gICAgICBpZihwaWVjZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IGNvcmRzLnggKyAxO2EgPCA4O2ErKyl7XHJcbiAgICAgIGxldCBwaWVjZXMgPSByb29tLmdldF9waWVjZSh7eDphLHk6Y29yZHMueX0pO1xyXG4gICAgICBpZihwaWVjZXMubGVuZ3RoID09PSAwIHx8IHBpZWNlc1swXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgIGF0dGFja2VkLnB1c2goe3g6YSx5OmNvcmRzLnl9KTtcclxuICAgICAgfVxyXG4gICAgICBpZihwaWVjZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IGNvcmRzLnkgLSAxO2EgPj0gMDthLS0pe1xyXG4gICAgICBsZXQgcGllY2VzID0gcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCx5OmF9KTtcclxuICAgICAgaWYocGllY2VzLmxlbmd0aCA9PT0gMCB8fCBwaWVjZXNbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKXtcclxuICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLngseTphfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYocGllY2VzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgPSBjb3Jkcy55ICsgMTthIDwgODthKyspe1xyXG4gICAgICBsZXQgcGllY2VzID0gcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCx5OmF9KTtcclxuICAgICAgaWYocGllY2VzLmxlbmd0aCA9PT0gMCB8fCBwaWVjZXNbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKXtcclxuICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLngseTphfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYocGllY2VzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXR0YWNrZWQ7XHJcbiAgfVxyXG4gIHVuYmluZF9jb250cm9scygpe1xyXG4gICAgZm9yKGxldCBhIG9mIHRoaXMuYmluZHMpe1xyXG4gICAgICBVbmJpbmQoYSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJpbmRfY29udHJvbHMoKXtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJtb3VzZTFcIixleGVjX3R5cGUub25jZSwoKT0+e1xyXG4gICAgICBsZXQgcm9vbSA9IGcuc3RhdGUuY3VycmVudF9yb29tIGFzIEJvYXJkO1xyXG4gICAgICBpZihyb29tLnN0YXRlLnR1cm4gPT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgcm9vbS5zdGF0ZS5zZWxlY3RlZCA9IHRoaXM7XHJcbiAgICAgICAgcm9vbS5jbGVhcl9hdHRhY2tlZCgpO1xyXG4gICAgICAgIGxldCB2YWxpZF9hdHRhY2tlZCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgZyBvZiB0aGlzLmdldEF0dGFja2luZygpKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKGcpO1xyXG4gICAgICAgICAgaWYocGllY2VzLmxlbmd0aCA9PSAwIHx8IHBpZWNlc1swXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgICAgICB2YWxpZF9hdHRhY2tlZC5wdXNoKGcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByb29tLnN0YXRlLmF0dGFja2VkID0gdmFsaWRfYXR0YWNrZWQ7XHJcbiAgICAgICAgcm9vbS5hdHRhY2sodmFsaWRfYXR0YWNrZWQpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSIsImltcG9ydCB7Y29tcG9zaXRlX29iaiwgZ3Jhdml0eV9vYmp9IGZyb20gXCIuLi8uLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlLHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vLi4vbGliL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHBsYXRfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XHJcbiAgaGVhbHRoOm51bWJlciAgXHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBwbGF0Zm9ybWVyX29iaiBleHRlbmRzIGdyYXZpdHlfb2Jqe1xyXG4gIGVuZW15ID0gZmFsc2U7XHJcbiAgc3RhdGU6cGxhdF9zdGF0ZVxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbWV0ZXJzOnVua25vd24pe1xyXG4gICAgc3VwZXIoc3RhdGUscGFyYW1ldGVycyk7XHJcbiAgfVxyXG4gIHN0YXRlZihhOm51bWJlcil7XHJcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgcGxhdF9zdGF0ZTtcclxuICAgIGlmKHN0YXRlLmhlYWx0aCA8PSAwKXtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBwbGF0Zm9ybWVyX29ial9jb21wb3NpdGUgZXh0ZW5kcyBjb21wb3NpdGVfb2Jqe1xyXG4gIGVuZW15ID0gZmFsc2U7XHJcbiAgc3RhdGU6cGxhdF9zdGF0ZTtcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUpe1xyXG4gICAgc3VwZXIoc3RhdGUpO1xyXG4gIH1cclxuICBzdGF0ZWYoYTpudW1iZXIpe1xyXG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIHBsYXRfc3RhdGU7XHJcbiAgICBpZihzdGF0ZS5oZWFsdGggPD0gMCl7XHJcbiAgICAgIHRoaXMuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtwbGF0Zm9ybWVyX29iaixwbGF0X3N0YXRlfSBmcm9tIFwiLi9hYnN0cmFjdC9wbGF0Zm9ybWVyX29ialwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSxwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBleGVjX3R5cGUgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgYm94IGV4dGVuZHMgcGxhdGZvcm1lcl9vYmp7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2JveC5wbmdcIlxyXG4gIGNvbGxpc2lvbiA9IHRydWVcclxuICBoZWlnaHQgPSA2NDtcclxuICB3aWR0aCA9IDUwMDtcclxuICBncmF2aXR5ID0gZmFsc2U7XHJcbiAgZW5lbXkgPSBmYWxzZTtcclxuICB0YWdzID0gW1wic3RhdGljXCJdXHJcbn1cclxuIiwiaW1wb3J0IHtwbGF0Zm9ybWVyX29iaiwgcGxhdF9zdGF0ZX0gZnJvbSBcIi4vYWJzdHJhY3QvcGxhdGZvcm1lcl9vYmpcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGV9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHsgZXhlY190eXBlIH0gZnJvbSBcIi4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQge3JvdGF0aW9uX2xlbmd0aCwgb2JqfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBHb29tYmEgfSBmcm9tIFwiLi9Hb29tYmFcIjtcclxuaW1wb3J0IHtnfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5cclxuaW50ZXJmYWNlIGJ1bGxldF9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcclxuICByb3RhdGlvbjpudW1iZXIsXHJcbiAgZGlzdGFuY2U6bnVtYmVyLFxyXG4gIHNwZWVkOm51bWJlcixcclxuICBkYW1hZ2U6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBwb3NpdGlvbntcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgYnVsbGV0X3BhcmFtZXRlcnN7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgYnVsbGV0IGV4dGVuZHMgb2Jqe1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9idWxsZXQucG5nXCI7XHJcbiAgaGVpZ2h0ID0gMjA7XHJcbiAgd2lkdGggPSAxMDtcclxuICBncmF2aXR5ID0gZmFsc2U7XHJcbiAgbWF4X2Rpc3RhbmNlID0gMjAwMDtcclxuICB0YWdzID0gW1wiYnVsbGV0XCJdO1xyXG4gIHN0YXRlOmJ1bGxldF9zdGF0ZTtcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOmJ1bGxldF9wYXJhbWV0ZXJzKXtcclxuICAgIHN1cGVyKHN0YXRlLHBhcmFtcyk7XHJcbiAgICB0aGlzLnN0YXRlLmRhbWFnZSA9IDU7XHJcbiAgICB0aGlzLnN0YXRlLmRpc3RhbmNlID0gMFxyXG4gIH1cclxuICBzdGF0ZWYodGltZTpudW1iZXIpe1xyXG4gICAgdGhpcy5zdGF0ZS52ZWxvY2l0eSA9IHJvdGF0aW9uX2xlbmd0aCh0aGlzLnN0YXRlLnNwZWVkLHRoaXMuc3RhdGUucm90YXRpb24pO1xyXG4gICAgdGhpcy5zdGF0ZS5kaXN0YW5jZSArPSB0aGlzLnN0YXRlLnNwZWVkO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5kaXN0YW5jZSA+IHRoaXMubWF4X2Rpc3RhbmNlKXtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVnaXN0ZXJDb250cm9scygpe1xyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb2NrZXQgZXh0ZW5kcyBidWxsZXR7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2ZvbGRlci9yb2NrZXQucG5nXCI7XHJcbiAgaGVpZ2h0ID0gNjc7XHJcbiAgd2lkdGggPSAxNjtcclxuICBwYXJ0aWNsZV90aW1lciA9IDA7XHJcbiAgcGFydGljbGVfZnJlcXVlbmN5ID0gNTtcclxuICBtYXhfZGlzdGFuY2UgPSA1MDAwO1xyXG4gIHRhZ3MgPSBbXCJSb2NrZXRcIl1cclxuICBoaXRib3ggPSB7XHJcbiAgICB4X29mZnNldDowLFxyXG4gICAgeV9vZmZzZXQ6MCxcclxuICAgIHdpZHRoOjE2LFxyXG4gICAgaGVpZ2h0OjE2XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6YnVsbGV0X3BhcmFtZXRlcnMpe1xyXG4gICAgc3VwZXIoc3RhdGUscGFyYW1zKTtcclxuICAgIHRoaXMuc3RhdGUuc3BlZWQgPSAxNTtcclxuICAgIHRoaXMuc3RhdGUuZGFtYWdlID0gMjA7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyQXVkaW8oKXtcclxuICAgIHRoaXMuYXVkaW8uYWRkKFwiZXhwbG9zaW9uXCIsXCIuL3NvdW5kcy9leHBsb3Npb24yLm1wM1wiKTtcclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6bnVtYmVyKXtcclxuICAgIHN1cGVyLnN0YXRlZih0aW1lKTtcclxuICAgIGlmKHRoaXMucGFydGljbGVfdGltZXIgPT0gMCl7XHJcbiAgICAgIGxldCBvZmZzZXQgPSByb3RhdGlvbl9sZW5ndGgoMzAsdGhpcy5zdGF0ZS5yb3RhdGlvbiArIDE4MCk7XHJcbiAgICAgIHRoaXMuZW1pdFBhcnRpY2xlKFwic21va2VcIixvZmZzZXQsIDQwMCwgMTYpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYXJ0aWNsZV90aW1lciArPSB0aW1lO1xyXG4gICAgaWYodGhpcy5wYXJ0aWNsZV90aW1lciA+IHRoaXMucGFydGljbGVfZnJlcXVlbmN5KXtcclxuICAgICB0aGlzLnBhcnRpY2xlX3RpbWVyID0gMDsgXHJcbiAgICB9XHJcbiAgICBsZXQgcm9vbSA9IGcuc3RhdGUuY3VycmVudF9yb29tO1xyXG4gICAgbGV0IGNvbGxpc2lvbnMgPSByb29tLmNoZWNrQ29sbGlzaW9ucyh0aGlzLmdldEZ1bGxDb2xsaXNpb25Cb3goKSxbXCJndW5cIixcInBsYXllclwiXSk7XHJcbiAgICBpZihjb2xsaXNpb25zLmxlbmd0aCA+IDApe1xyXG4gICAgICBmb3IobGV0IGNvbGxpc2lvbiBvZiBjb2xsaXNpb25zKXtcclxuICAgICAgICBsZXQgc3QgPSBjb2xsaXNpb24uc3RhdGUgYXMgdW5rbm93biBhcyBwbGF0X3N0YXRlO1xyXG4gICAgICAgIGlmKCg8cGxhdGZvcm1lcl9vYmo+Y29sbGlzaW9uKS5zdGF0ZS5oZWFsdGgpe1xyXG4gICAgICAgICAgc3QuaGVhbHRoIC09IHRoaXMuc3RhdGUuZGFtYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb2xsaXNpb24udGFncy5pbmRleE9mKFwiZHVtbXlcIikgPiAtMSl7XHJcbiAgICAgICAgICBsZXQgZHVtbXkgPSBjb2xsaXNpb24gYXMgR29vbWJhO1xyXG4gICAgICAgICAgaWYoZHVtbXkuc3RhdGUuanVtcGluZyl7XHJcbiAgICAgICAgICAgIGR1bW15LnN0YXRlLnRpbWVzX2FpcnNob3QrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdGF0ZS5kaXN0YW5jZSA9IHRoaXMubWF4X2Rpc3RhbmNlO1xyXG4gICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgICBsZXQgZXhwbG9zaW9uX2NvbGxpc2lvbnMgPSByb29tLmNoZWNrQ29sbGlzaW9ucyh7XHJcbiAgICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgd2lkdGg6MjU2LFxyXG4gICAgICAgIGhlaWdodDoyNTZcclxuICAgICAgfSxbXCJzdGF0aWNcIl0pXHJcbiAgICAgIGZvcihsZXQgY29sbGlkZXIgb2YgZXhwbG9zaW9uX2NvbGxpc2lvbnMpe1xyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UoY29sbGlkZXIpO1xyXG4gICAgICAgIGxldCBtdWx0aXBseWVyID0gMSAtIGRpc3RhbmNlLzMwMDtcclxuICAgICAgICBpZihtdWx0aXBseWVyIDwgMClcclxuICAgICAgICAgIG11bHRpcGx5ZXIgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBvX3N0YXRlID0gY29sbGlkZXIuc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gICAgICAgIGxldCB2ZWxvY2l0aWVzID0gcm90YXRpb25fbGVuZ3RoKG11bHRpcGx5ZXIgKiAxMDAsIHRoaXMuYW5nbGVUb3dhcmRzKGNvbGxpZGVyKSk7XHJcbiAgICAgICAgb19zdGF0ZS52ZWxvY2l0eS54ICs9IHZlbG9jaXRpZXMueDtcclxuICAgICAgICBvX3N0YXRlLnZlbG9jaXR5LnkgKz0gdmVsb2NpdGllcy55O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdFBhcnRpY2xlKFwiZXhwbG9zaW9uXCIse3g6MCx5OjB9LDUwMCwwKTtcclxuICAgICAgdGhpcy5hdWRpby5wbGF5KFwiZXhwbG9zaW9uXCIsMC4yKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJcbmludGVyZmFjZSBwcmVmYWJzIHtcbiAgW2luZGV4OnN0cmluZ106YW55XG59XG5pbXBvcnQge0Jpc2hvcH0gZnJvbSBcIi4vQmlzaG9wXCI7XG5pbXBvcnQge2JveH0gZnJvbSBcIi4vYm94XCI7XG5pbXBvcnQge2J1bGxldH0gZnJvbSBcIi4vYnVsbGV0XCI7XG5pbXBvcnQge0NvbnRyb2xsZWRQbGF5ZXJ9IGZyb20gXCIuL0NvbnRyb2xsZWRQbGF5ZXJcIjtcbmltcG9ydCB7Q3Vyc29yfSBmcm9tIFwiLi9DdXJzb3JcIjtcbmltcG9ydCB7RG9vcn0gZnJvbSBcIi4vRG9vclwiO1xuaW1wb3J0IHtHb29tYmF9IGZyb20gXCIuL0dvb21iYVwiO1xuaW1wb3J0IHtHdW59IGZyb20gXCIuL0d1blwiO1xuaW1wb3J0IHtLaW5nfSBmcm9tIFwiLi9LaW5nXCI7XG5pbXBvcnQge0tuaWdodH0gZnJvbSBcIi4vS25pZ2h0XCI7XG5pbXBvcnQge01vdmV9IGZyb20gXCIuL01vdmVcIjtcbmltcG9ydCB7UGF3bn0gZnJvbSBcIi4vUGF3blwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHtRdWVlbn0gZnJvbSBcIi4vUXVlZW5cIjtcbmltcG9ydCB7Um9va30gZnJvbSBcIi4vUm9va1wiO1xuaW1wb3J0IHtWZXJ0Qm94fSBmcm9tIFwiLi9WZXJ0Qm94XCI7XG5leHBvcnQgbGV0IHByZWZhYnM6cHJlZmFicyA9IHtcblx0QmlzaG9wOkJpc2hvcCxcblx0Ym94OmJveCxcblx0YnVsbGV0OmJ1bGxldCxcblx0Q29udHJvbGxlZFBsYXllcjpDb250cm9sbGVkUGxheWVyLFxuXHRDdXJzb3I6Q3Vyc29yLFxuXHREb29yOkRvb3IsXG5cdEdvb21iYTpHb29tYmEsXG5cdEd1bjpHdW4sXG5cdEtpbmc6S2luZyxcblx0S25pZ2h0OktuaWdodCxcblx0TW92ZTpNb3ZlLFxuXHRQYXduOlBhd24sXG5cdFBsYXllcjpQbGF5ZXIsXG5cdFF1ZWVuOlF1ZWVuLFxuXHRSb29rOlJvb2ssXG5cdFZlcnRCb3g6VmVydEJveCxcbn0iLCJpbXBvcnQge3Jvb20scm9vbV9pfSBmcm9tIFwiLi4vLi4vbGliL3Jvb21cIjtcclxuaW1wb3J0IHtwaWVjZX0gZnJvbSBcIi4uL29iamVjdHMvYWJzdHJhY3QvcGllY2VcIjtcclxuaW1wb3J0IHtLbmlnaHR9IGZyb20gXCIuLi9vYmplY3RzL0tuaWdodFwiO1xyXG5pbXBvcnQge1Jvb2t9IGZyb20gXCIuLi9vYmplY3RzL1Jvb2tcIjtcclxuaW1wb3J0IHtNb3ZlfSBmcm9tIFwiLi4vb2JqZWN0cy9Nb3ZlXCI7XHJcbmltcG9ydCB7b2JqfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBCaXNob3AgfSBmcm9tIFwiLi4vb2JqZWN0cy9CaXNob3BcIjtcclxuaW1wb3J0IHsgUXVlZW4gfSBmcm9tIFwiLi4vb2JqZWN0cy9RdWVlblwiO1xyXG5pbXBvcnQgeyBLaW5nIH0gZnJvbSBcIi4uL29iamVjdHMvS2luZ1wiO1xyXG5pbXBvcnQgeyBQYXduIH0gZnJvbSBcIi4uL29iamVjdHMvUGF3blwiO1xyXG5pbXBvcnQge2dhbWUsR2V0Vmlld3BvcnREaW1lbnNpb25zIH0gZnJvbSBcIi4uLy4uL3ZhblwiO1xyXG5pbXBvcnQge2d9IGZyb20gXCIuLi9tYWluXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlLCBwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge0NhbWVyYX0gZnJvbSBcIi4uLy4uL2xpYi9yZW5kZXJcIjtcclxuaW1wb3J0ICogYXMganNvbiBmcm9tIFwiLi9Cb2FyZC5qc29uXCI7XHJcbmltcG9ydCB7IHZlbG9jaXR5Q29sbGlzaW9uQ2hlY2sgfSBmcm9tIFwiLi4vLi4vbGliL2NvbGxpc2lvblwiO1xyXG5leHBvcnQgZW51bSBzaWRle1xyXG4gIHdoaXRlLFxyXG4gIGJsYWNrXHJcbn1cclxuXHJcbmludGVyZmFjZSBzcGFjZV9zdGF0ZXtcclxuICBlbnBhc3NlbnQ6Ym9vbGVhbixcclxuICBhdHRhY2tlZDpib29sZWFuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXRlX2NvbnZlcnRlcihwb3M6cG9zaXRpb24scm90YXRpb246bnVtYmVyLHNjYWxpbmc6bnVtYmVyKTpvYmpfc3RhdGV7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBvc2l0aW9uOnBvcyxcclxuICAgIHZlbG9jaXR5OntcclxuICAgICAgeDowLFxyXG4gICAgICB5OjBcclxuICAgIH0sXHJcbiAgICByb3RhdGlvbixcclxuICAgIHNjYWxpbmc6e1xyXG4gICAgICB3aWR0aDpzY2FsaW5nLFxyXG4gICAgICBoZWlnaHQ6c2NhbGluZ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBib2FyZF9zdGF0ZXtcclxuICB0dXJuOnNpZGUsXHJcbiAgd2hpdGVfYm9hcmQ6QXJyYXk8QXJyYXk8c3BhY2Vfc3RhdGU+PixcclxuICBibGFja19ib2FyZDpBcnJheTxBcnJheTxzcGFjZV9zdGF0ZT4+XHJcbiAgc2VsZWN0ZWQ6cGllY2UsXHJcbiAgc3F1YXJlczpBcnJheTxBcnJheTxNb3ZlPj4sXHJcbiAgcGllY2VzOkFycmF5PHBpZWNlPixcclxuICBhdHRhY2tlZDpBcnJheTxwb3NpdGlvbj5cclxufVxyXG5leHBvcnQgY2xhc3MgQm9hcmQgZXh0ZW5kcyByb29tPGJvYXJkX3N0YXRlPntcclxuICBiYWNrZ3JvdW5kX3VybD1cIi4vc3ByaXRlcy9ib2FyZC5wbmdcIjtcclxuICBjb25zdHJ1Y3RvcihnYW1lOmdhbWU8dW5rbm93bj4pe1xyXG4gICAgc3VwZXIoZ2FtZSx7b2JqZWN0czpbXX0pO1xyXG4gICAgZ2FtZS5zdGF0ZS5jYW1lcmFzID0gW1xyXG4gICAgICBuZXcgQ2FtZXJhKHtcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowLFxyXG4gICAgICAgIGRpbWVuc2lvbnM6e1xyXG4gICAgICAgICAgaGVpZ2h0OkdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodCxcclxuICAgICAgICAgIHdpZHRoOkdldFZpZXdwb3J0RGltZW5zaW9ucygpLndpZHRoXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsaW5nOjAuNzUsXHJcbiAgICAgICAgZGVidWc6ZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgeDowLFxyXG4gICAgICAgIHk6MCxcclxuICAgICAgICB3aWR0aDoxLFxyXG4gICAgICAgIGhlaWdodDoxXHJcbiAgICAgIH0pXHJcbiAgICBdXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0dXJuOnNpZGUud2hpdGUsXHJcbiAgICAgIHdoaXRlX2JvYXJkOltdLFxyXG4gICAgICBibGFja19ib2FyZDpbXSxcclxuICAgICAgc2VsZWN0ZWQ6dW5kZWZpbmVkLFxyXG4gICAgICBzcXVhcmVzOltdLFxyXG4gICAgICBwaWVjZXM6W10sXHJcbiAgICAgIGF0dGFja2VkOltdXHJcbiAgICB9O1xyXG4gICAgbGV0IHJvdzIgPSBbbmV3IFJvb2soc3RhdGVfY29udmVydGVyKHt4OjAseTo3fSwwLDEpLHtzaWRlOnNpZGUuYmxhY2t9KSxuZXcgS25pZ2h0KHN0YXRlX2NvbnZlcnRlcih7eDoxLHk6N30sMCwxKSx7c2lkZTpzaWRlLmJsYWNrfSksbmV3IEJpc2hvcChzdGF0ZV9jb252ZXJ0ZXIoe3g6Mix5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pLG5ldyBRdWVlbihzdGF0ZV9jb252ZXJ0ZXIoe3g6Myx5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pLG5ldyBLaW5nKHN0YXRlX2NvbnZlcnRlcih7eDo0LHk6N30sMCwxKSx7c2lkZTpzaWRlLmJsYWNrfSksbmV3IEJpc2hvcChzdGF0ZV9jb252ZXJ0ZXIoe3g6NSx5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pLG5ldyBLbmlnaHQoc3RhdGVfY29udmVydGVyKHt4OjYseTo3fSwwLDEpLHtzaWRlOnNpZGUuYmxhY2t9KSxuZXcgUm9vayhzdGF0ZV9jb252ZXJ0ZXIoe3g6Nyx5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pXTtcclxuICAgIGxldCByb3c3ID0gW25ldyBSb29rKHN0YXRlX2NvbnZlcnRlcih7eDowLHk6MH0sMCwxKSx7c2lkZTpzaWRlLndoaXRlfSksbmV3IEtuaWdodChzdGF0ZV9jb252ZXJ0ZXIoe3g6MSx5OjB9LDAsMSkse3NpZGU6c2lkZS53aGl0ZX0pLG5ldyBCaXNob3Aoc3RhdGVfY29udmVydGVyKHt4OjIseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KSxuZXcgUXVlZW4oc3RhdGVfY29udmVydGVyKHt4OjMseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KSxuZXcgS2luZyhzdGF0ZV9jb252ZXJ0ZXIoe3g6NCx5OjB9LDAsMSkse3NpZGU6c2lkZS53aGl0ZX0pLG5ldyBCaXNob3Aoc3RhdGVfY29udmVydGVyKHt4OjUseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KSxuZXcgS25pZ2h0KHN0YXRlX2NvbnZlcnRlcih7eDo2LHk6MH0sMCwxKSx7c2lkZTpzaWRlLndoaXRlfSksbmV3IFJvb2soc3RhdGVfY29udmVydGVyKHt4OjcseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KV07XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCByb3cyLmxlbmd0aDthKyspe1xyXG4gICAgICBsZXQgcGF3bjEgPSBuZXcgUGF3bihzdGF0ZV9jb252ZXJ0ZXIoe3g6YSx5OjF9LDAsMSkse3NpZGU6c2lkZS53aGl0ZX0pO1xyXG4gICAgICBsZXQgcGF3bjIgPSBuZXcgUGF3bihzdGF0ZV9jb252ZXJ0ZXIoe3g6YSx5OjZ9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pO1xyXG4gICAgICB0aGlzLmFkZEl0ZW0ocm93N1thXSk7XHJcbiAgICAgIHRoaXMuYWRkSXRlbShwYXduMSk7XHJcbiAgICAgIHRoaXMuYWRkSXRlbShyb3cyW2FdKTtcclxuICAgICAgdGhpcy5hZGRJdGVtKHBhd24yKTtcclxuICAgICAgdGhpcy5zdGF0ZS5waWVjZXMucHVzaChwYXduMik7XHJcbiAgICAgIHRoaXMuc3RhdGUucGllY2VzLnB1c2gocm93N1thXSk7XHJcbiAgICAgIHRoaXMuc3RhdGUucGllY2VzLnB1c2gocGF3bjEpO1xyXG4gICAgICB0aGlzLnN0YXRlLnBpZWNlcy5wdXNoKHJvdzJbYV0pO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IDA7YTw4O2ErKyl7XHJcbiAgICAgIGxldCBtdl9yb3c6QXJyYXk8TW92ZT4gPSBbXTtcclxuICAgICAgZm9yKGxldCBiID0gMDtiPDg7YisrKXtcclxuICAgICAgICBsZXQgZCA9IGE7XHJcbiAgICAgICAgKCgpPT4ge1xyXG4gICAgICAgICAgbGV0IG1vdmVfbyA9IG5ldyBNb3ZlKHN0YXRlX2NvbnZlcnRlcih7eDphLHk6Yn0sMCwxKSk7XHJcbiAgICAgICAgICBtdl9yb3cucHVzaChtb3ZlX28pO1xyXG4gICAgICAgICAgdGhpcy5hZGRJdGVtKG1vdmVfbyk7XHJcbiAgICAgICAgfSkoKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhdGUuc3F1YXJlcy5wdXNoKG12X3Jvdyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlLmJsYWNrX2JvYXJkID0gdGhpcy5ibGFua19ib2FyZCgpO1xyXG4gICAgdGhpcy5zdGF0ZS53aGl0ZV9ib2FyZCA9IHRoaXMuYmxhbmtfYm9hcmQoKTtcclxuICAgIC8qXHJcbiAgICBsZXQgY2FtZXJhID0gZy5zdGF0ZS5jYW1lcmFzWzBdO1xyXG4gICAgY2FtZXJhLnN0YXRlLnBvc2l0aW9uID0ge1xyXG4gICAgICB4OjAsXHJcbiAgICAgIHk6MFxyXG4gICAgfVxyXG4gICAgbGV0IHNjcmVlbl9kaW1lbnNpb25zID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCk7XHJcbiAgICBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucyA9IHtcclxuICAgICAgd2lkdGg6c2NyZWVuX2RpbWVuc2lvbnMud2lkdGgsXHJcbiAgICAgIGhlaWdodDpzY3JlZW5fZGltZW5zaW9ucy5oZWlnaHRcclxuICAgIH1cclxuICAgICovXHJcbiAgICBmb3IobGV0IHggb2YgdGhpcy5zdGF0ZS5waWVjZXMpe1xyXG4gICAgICBpZih4LnN0YXRlLnNpZGUgPT09IHNpZGUud2hpdGUpe1xyXG4gICAgICAgIHguYmluZF9jb250cm9scygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldF9tZXRhKGE6cG9zaXRpb24sczpzaWRlKXtcclxuICAgIGlmKGEueCA+PSAwICYmIGEueCA8IDggJiYgYS55ID49IDAgJiYgYS55IDwgOCl7XHJcbiAgICAgIGlmKHMgPT09IHNpZGUud2hpdGUpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLndoaXRlX2JvYXJkW2EueF1bYS55XTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ibGFja19ib2FyZFthLnhdW2EueV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuICBjaGFuZ2Vfc2lkZShzOnNpZGUpe1xyXG4gICAgbGV0IHRvX2JpbmQ7XHJcbiAgICBsZXQgdG9fdW5iaW5kO1xyXG4gICAgXHJcbiAgICBpZihzID09IHNpZGUud2hpdGUpe1xyXG4gICAgICB0b19iaW5kID0gcztcclxuICAgICAgdG9fdW5iaW5kID0gc2lkZS5ibGFjaztcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2xlYXJfZW5wYXNzZW50X2JvYXJkKHRoaXMuc3RhdGUud2hpdGVfYm9hcmQpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jbGVhcl9hdHRhY2tlZF9ib2FyZCh0aGlzLnN0YXRlLmJsYWNrX2JvYXJkKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlX2F0dGFja2VkX2JvYXJkKHRoaXMuc3RhdGUuYmxhY2tfYm9hcmQsc2lkZS5ibGFjayk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdG9fYmluZCA9IHNpZGUuYmxhY2s7XHJcbiAgICAgIHRvX3VuYmluZCA9IHNpZGUud2hpdGU7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNsZWFyX2VucGFzc2VudF9ib2FyZCh0aGlzLnN0YXRlLmJsYWNrX2JvYXJkKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2xlYXJfYXR0YWNrZWRfYm9hcmQodGhpcy5zdGF0ZS53aGl0ZV9ib2FyZCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNhbGN1bGF0ZV9hdHRhY2tlZF9ib2FyZCh0aGlzLnN0YXRlLndoaXRlX2JvYXJkLHNpZGUud2hpdGUpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLndoaXRlX2JvYXJkKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBmb3IobGV0IHggb2YgdGhpcy5zdGF0ZS5waWVjZXMpe1xyXG4gICAgICBpZih4LnN0YXRlLnNpZGUgPT09IHRvX2JpbmQpe1xyXG4gICAgICAgIHguYmluZF9jb250cm9scygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgeC51bmJpbmRfY29udHJvbHMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZS50dXJuID0gcztcclxuICB9XHJcbiAgY2xlYXJfZW5wYXNzZW50X2JvYXJkKHg6QXJyYXk8QXJyYXk8c3BhY2Vfc3RhdGU+Pil7XHJcbiAgICBmb3IobGV0IGEgPSAwO2E8ODthKyspe1xyXG4gICAgICBmb3IobGV0IGIgPSAwO2I8ODtiKyspe1xyXG4gICAgICAgIHhbYV1bYl0uZW5wYXNzZW50ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY2FsY3VsYXRlX2F0dGFja2VkX2JvYXJkKHg6QXJyYXk8QXJyYXk8c3BhY2Vfc3RhdGU+PixzOnNpZGUpe1xyXG4gICAgZm9yKGxldCBhIG9mIHRoaXMuc3RhdGUucGllY2VzKXtcclxuICAgICAgaWYoYS5zdGF0ZS5zaWRlID09IHMpe1xyXG4gICAgICAgIGxldCBhdHRhY2tlZCA9IGEuZ2V0QXR0YWNraW5nKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYSk7XHJcbiAgICAgICAgZm9yKGxldCBiIG9mIGF0dGFja2VkKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGIpO1xyXG4gICAgICAgICAgeFtiLnhdW2IueV0uYXR0YWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBcclxuICB9XHJcbiAgY2xlYXJfYXR0YWNrZWRfYm9hcmQoeDpBcnJheTxBcnJheTxzcGFjZV9zdGF0ZT4+KXtcclxuICAgIGZvcihsZXQgYSA9IDA7YTw4O2ErKyl7XHJcbiAgICAgIGZvcihsZXQgYiA9IDA7Yjw4O2IrKyl7XHJcbiAgICAgICAgeFthXVtiXS5hdHRhY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJsYW5rX2JvYXJkKCl7XHJcbiAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgIGZvcihsZXQgYSA9IDA7YTw4O2ErKyl7XHJcbiAgICAgIGxldCByb3cgPSBbXTtcclxuICAgICAgZm9yKGxldCBiID0gMDtiPDg7YisrKXtcclxuICAgICAgICByb3cucHVzaCh7XHJcbiAgICAgICAgICBlbnBhc3NlbnQ6ZmFsc2UsXHJcbiAgICAgICAgICBhdHRhY2tlZDpmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJvYXJkLnB1c2gocm93KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib2FyZDtcclxuICB9XHJcbiAgYXN5bmMgYWRkX3BpZWNlKGE6cGllY2Upe1xyXG4gICAgYXdhaXQgYS5sb2FkKCk7XHJcbiAgICB0aGlzLmFkZEl0ZW0oYSk7XHJcbiAgICB0aGlzLnN0YXRlLnBpZWNlcy51bnNoaWZ0KGEpO1xyXG4gIH1cclxuICByZW1vdmVfcGllY2UoYTpwaWVjZSl7XHJcbiAgICBmb3IobGV0IGIgPSAwO2IgPCB0aGlzLnN0YXRlLnBpZWNlcy5sZW5ndGg7YisrKXtcclxuICAgICAgaWYoYS5pZCA9PT0gdGhpcy5zdGF0ZS5waWVjZXNbYl0uaWQpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUucGllY2VzLnNwbGljZShiLDEpO1xyXG4gICAgICB9ICAgXHJcbiAgICB9XHJcbiAgICBhLmRlbGV0ZSgpO1xyXG4gIH1cclxuICBnZXRfcGllY2UoYTpwb3NpdGlvbik6QXJyYXk8cGllY2U+e1xyXG4gICAgcmV0dXJuICh0aGlzLmNoZWNrQ29sbGlzaW9ucyh7XHJcbiAgICAgIHg6YS54ICogMTAwIC0gMzUwLFxyXG4gICAgICB5OmEueSAqIDEwMCAtIDM1MCxcclxuICAgICAgaGVpZ2h0OjEwMCxcclxuICAgICAgd2lkdGg6MTAwXHJcbiAgICB9KSBhcyB1bmtub3duIGFzIEFycmF5PHBpZWNlPik7XHJcbiAgfVxyXG4gIGNsZWFyX2F0dGFja2VkKCl7XHJcbiAgICBmb3IobGV0IGEgb2YgdGhpcy5zdGF0ZS5hdHRhY2tlZCl7XHJcbiAgICAgIHRoaXMuc3RhdGUuc3F1YXJlc1thLnhdW2EueV0ucmVuZGVyID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGF0dGFjayh4OkFycmF5PHBvc2l0aW9uPil7XHJcbiAgICBmb3IobGV0IGEgb2YgeCl7XHJcbiAgICAgIHRoaXMuc3RhdGUuc3F1YXJlc1thLnhdW2EueV0ucmVuZGVyID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGVmKGE6bnVtYmVyKXtcclxuICAgIGZvcihsZXQgYSA9IDA7YTx0aGlzLm9iamVjdHMubGVuZ3RoO2ErKyl7XHJcbiAgICAgIHZlbG9jaXR5Q29sbGlzaW9uQ2hlY2sodGhpcy5vYmplY3RzW2FdLCB0aGlzLm9iamVjdHMpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IHJvb20sIGFwcGx5R3Jhdml0eSxvYmplY3Rfc3RhdGVfY29uZmlnLCBzdGF0ZV9jb25maWcgfSBmcm9tIFwiLi4vLi4vbGliL3Jvb21cIjtcclxuaW1wb3J0IHsgR29vbWJhIH0gZnJvbSBcIi4uL29iamVjdHMvR29vbWJhXCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZWRQbGF5ZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9Db250cm9sbGVkUGxheWVyXCI7XHJcbmltcG9ydCB7IEd1biB9IGZyb20gXCIuLi9vYmplY3RzL0d1blwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIi4uL29iamVjdHMvQ3Vyc29yXCI7XHJcbmltcG9ydCB7IGJveCB9IGZyb20gXCIuLi9vYmplY3RzL2JveFwiO1xyXG5pbXBvcnQgeyBWZXJ0Qm94IH0gZnJvbSBcIi4uL29iamVjdHMvVmVydEJveFwiO1xyXG5pbXBvcnQgeyB2ZWxvY2l0eUNvbGxpc2lvbkNoZWNrIGFzIHZlbG9jaXR5Q29sbGlzaW9uQ2hlY2sgfSBmcm9tIFwiLi4vLi4vbGliL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQgeyBncmF2aXR5X29iaiwgcm90YXRpb25fbGVuZ3RoIH0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgUG9sbF9Nb3VzZSwgZXhlY190eXBlIH0gZnJvbSBcIi4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBIVUQsIFRleHQgfSBmcm9tIFwiLi4vLi4vbGliL2h1ZFwiO1xyXG5pbXBvcnQgeyBERUJVRywgZ2FtZSwgR2V0Vmlld3BvcnREaW1lbnNpb25zLCBzZXREZWJ1Zyx2aWV3cG9ydCB9IGZyb20gXCIuLi8uLi92YW5cIjtcclxuaW1wb3J0IHtidWxsZXQsIFJvY2tldH0gZnJvbSBcIi4uL29iamVjdHMvYnVsbGV0XCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuaW1wb3J0IHtDYW1lcmF9IGZyb20gXCIuLi8uLi9saWIvcmVuZGVyXCI7XHJcbmltcG9ydCAqIGFzIGpzb24gZnJvbSBcIi4vT3ZlcndvcmxkLmpzb25cIjtcclxuaW50ZXJmYWNlIG92ZXJ3b3JsZF9pIHtcclxuICBwbGF5ZXI6IGdyYXZpdHlfb2JqLFxyXG4gIHBhdXNlZDogYm9vbGVhbixcclxuICBsb2NrZWRfYnVsbGV0OmJ1bGxldFxyXG59XHJcblxyXG5jbGFzcyBPdmVyd29ybGRfSFVEIGV4dGVuZHMgSFVEIHtcclxuICBzZXRUZXh0RWxlbWVudHMoKXtcclxuICAgIHJldHVybiBbbmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodCAqIDcvOFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiA0NCxcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjpcImxlZnRcIixcclxuICAgICAgc2NhbGluZzoxXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGxldCB4ID0gZy5nZXRSb29tKCkuZ2V0T2JqQnlUYWcoXCJkdW1teVwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIHJldHVybiBgVGltZXMgQWlyc2hvdDoke3guc3RhdGUudGltZXNfYWlyc2hvdH1gO1xyXG4gICAgfSksXHJcbiAgICBuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0ICogNi84XHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDQ0LFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgc2NhbGluZzoxXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGxldCB4ID0gZy5nZXRSb29tKCkuZ2V0T2JqQnlUYWcoXCJkdW1teVwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGlmKHgpXHJcbiAgICAgICAgcmV0dXJuIGBNYXggVGltZXMgQWlyc2hvdDoke01hdGgubWF4KHguc3RhdGUudGltZXNfYWlyc2hvdCx4LnN0YXRlLm1heF90aW1lc19haXJzaG90KX1gO1xyXG4gICAgICByZXR1cm4gXCJcIlxyXG4gICAgfSldO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE92ZXJ3b3JsZCBleHRlbmRzIHJvb208b3ZlcndvcmxkX2k+e1xyXG4gIGJhY2tncm91bmRfdXJsID0gXCIuL3Nwcml0ZXMvaW1ENDFsLmpwZ1wiO1xyXG4gIG9iamVjdHM6Z3Jhdml0eV9vYmpbXTtcclxuICBjb25zdHJ1Y3RvcihnYW1lOmdhbWU8dW5rbm93bj4pIHtcclxuICAgIHN1cGVyKGdhbWUsanNvbiBhcyB1bmtub3duIGFzIHN0YXRlX2NvbmZpZyk7XHJcbiAgICBcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBsYXllcjogdW5kZWZpbmVkLFxyXG4gICAgICBwYXVzZWQ6IGZhbHNlLFxyXG4gICAgICBsb2NrZWRfYnVsbGV0Om51bGxcclxuICAgIH07XHJcbiAgICBnYW1lLnN0YXRlLmNhbWVyYXMgPSBbXHJcbiAgICAgIG5ldyBDYW1lcmEoe1xyXG4gICAgICAgIHg6MCxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgZGltZW5zaW9uczp7XHJcbiAgICAgICAgICBoZWlnaHQ6dmlld3BvcnQuaGVpZ2h0LFxyXG4gICAgICAgICAgd2lkdGg6dmlld3BvcnQud2lkdGggKiA0LzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxpbmc6MC41LFxyXG4gICAgICAgIGRlYnVnOmZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgLHtcclxuICAgICAgICB4OjEsXHJcbiAgICAgICAgeTowLFxyXG4gICAgICAgIHdpZHRoOjAuOCxcclxuICAgICAgICBoZWlnaHQ6MVxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IENhbWVyYSh7XHJcbiAgICAgICAgeDowLFxyXG4gICAgICAgIHk6MCxcclxuICAgICAgICBkaW1lbnNpb25zOntcclxuICAgICAgICAgIHdpZHRoOnZpZXdwb3J0LndpZHRoLzUsXHJcbiAgICAgICAgICBoZWlnaHQ6dmlld3BvcnQuaGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsaW5nOjAuMixcclxuICAgICAgICBkZWJ1ZzpmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICB4OnZpZXdwb3J0LndpZHRoICogNC81LFxyXG4gICAgICAgIHk6MCxcclxuICAgICAgICB3aWR0aDowLjIsXHJcbiAgICAgICAgaGVpZ2h0OjFcclxuICAgICAgfSlcclxuICAgIF1cclxuICAgIC8qXHJcblxyXG4gICAgZm9yKGxldCBhID0gMDthPDEwO2ErKyl7XHJcbiAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBWZXJ0Qm94KHtcclxuICAgICAgICBwb3NpdGlvbjp7eDozMjAseToyNTAgKyBhICogNTAwfSxcclxuICAgICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgICAgcm90YXRpb246MCxcclxuICAgICAgICBzY2FsaW5nOnt3aWR0aDoxLGhlaWdodDoxfVxyXG4gICAgICB9LHt9KSk7XHJcbiAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBWZXJ0Qm94KHtcclxuICAgICAgICBwb3NpdGlvbjp7eDo5MDAseToyNTAgKyBhICogNTAwfSxcclxuICAgICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgICAgcm90YXRpb246MCxcclxuICAgICAgICBzY2FsaW5nOnt3aWR0aDoxLGhlaWdodDoxfVxyXG4gICAgICB9LHt9KSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gMDthIDwgMTAwOyBhKyspe1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgYm94KHtcclxuICAgICAgICBwb3NpdGlvbjp7eDo3MDAgKyBhICogNTAwLHk6MH0sXHJcbiAgICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX1cclxuICAgICAgfSx7fSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmFkZEl0ZW1zKG5ldyBQbGF5ZXIoe1xyXG4gICAgICBwb3NpdGlvbjp7eDo3MDAseToxNTB9LFxyXG4gICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9fSx7aWQ6XCJwbGF5ZXJcIn0pLmNvbWJpbmVkT2JqZWN0cygpKTtcclxuICAgIHRoaXMuYWRkSXRlbShuZXcgQ3Vyc29yKHtcclxuICAgICAgcG9zaXRpb246e3g6MCx5OjB9LFxyXG4gICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9fSx7aWQ6XCJDdXJzb3JcIn0pKTtcclxuICAgIHRoaXMuYWRkSXRlbShuZXcgR29vbWJhKHtcclxuICAgICAgcG9zaXRpb246e3g6NTAwLHk6NTAwfSxcclxuICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICByb3RhdGlvbjowLFxyXG4gICAgICBzY2FsaW5nOnt3aWR0aDoxLGhlaWdodDoxfSBcclxuICAgIH0pKTtcclxuICAgICovXHJcbiAgICBnYW1lLnN0YXRlLmNhbWVyYXNbMF0uaHVkID0gbmV3IE92ZXJ3b3JsZF9IVUQoKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJDb250cm9scygpIHtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJFc2NhcGVcIiwgZXhlY190eXBlLm9uY2UsICgpID0+IHtcclxuICAgICAgdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXNbMF0uc3RhdGUuZGVidWcgPSAhdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXNbMF0uc3RhdGUuZGVidWc7XHJcbiAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldE9iaihcInBsYXllclwiKSBhcyBHb29tYmE7XHJcbiAgICAgIHBsYXllci5jb2xsaXNpb24gPSAhcGxheWVyLmNvbGxpc2lvbjtcclxuICAgICAgcGxheWVyLmdyYXZpdHkgPSAhcGxheWVyLmdyYXZpdHk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwibW91c2UwZG93blwiLCBleGVjX3R5cGUucmVwZWF0LCgpID0+IHtcclxuICAgICAgbGV0IGd1biA9IHRoaXMuZ2V0T2JqQnlUYWcoXCJndW5cIilbMF0gYXMgR3VuO1xyXG4gICAgICBpZihndW4pe1xyXG4gICAgICAgIGxldCBtdXp6bGUgPSByb3RhdGlvbl9sZW5ndGgoMzAsZ3VuLnN0YXRlLnJvdGF0aW9uKTtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICB4Omd1bi5zdGF0ZS5wb3NpdGlvbi54ICsgbXV6emxlLngsXHJcbiAgICAgICAgICB5Omd1bi5zdGF0ZS5wb3NpdGlvbi55ICsgbXV6emxlLnlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ1bGxldHM6YnVsbGV0W10gPSBbXTtcclxuICAgICAgICBmb3IobGV0IGEgPSAwO2EgPCAxO2EgKyspe1xyXG4gICAgICAgICAgYnVsbGV0cy5wdXNoKG5ldyBSb2NrZXQoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjp7eDpwb3NpdGlvbi54LHk6cG9zaXRpb24ueX0sXHJcbiAgICAgICAgICAgIHZlbG9jaXR5Ont4OjAseTowfSxcclxuICAgICAgICAgICAgcm90YXRpb246Z3VuLnN0YXRlLnJvdGF0aW9uLFxyXG4gICAgICAgICAgICBzY2FsaW5nOnt3aWR0aDoxLGhlaWdodDoxfVxyXG4gICAgICAgICAgfSxndW4uc3RhdGUucm90YXRpb24pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5sb2NrZWRfYnVsbGV0ID09IG51bGwpXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmxvY2tlZF9idWxsZXQgPSBidWxsZXRzWzBdO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbXMoYnVsbGV0cyk7XHJcbiAgICAgIH1cclxuICAgIH0sNDAwKVxyXG4gIH1cclxuICByZWdpc3RlclBhcnRpY2xlcygpe1xyXG4gICAgdGhpcy5wYXJ0aWNsZXNbXCJzbW9rZVwiXSA9IHtcclxuICAgICAgc3ByaXRlOlwiLi9zcHJpdGVzL2ZvbGRlci9zbW9rZS5wbmdcIixcclxuICAgICAgaGVpZ2h0OjY0LFxyXG4gICAgICB3aWR0aDo2NFxyXG4gICAgfTtcclxuICAgIHRoaXMucGFydGljbGVzW1wiZXhwbG9zaW9uXCJdID0ge1xyXG4gICAgICBzcHJpdGU6XCIuL3Nwcml0ZXMvZm9sZGVyL2V4cGxvc2lvbi5wbmdcIixcclxuICAgICAgaGVpZ2h0OjEyOCxcclxuICAgICAgd2lkdGg6MTI4XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5wYXVzZWQpIHtcclxuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCB0aGlzLm9iamVjdHMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICBhcHBseUdyYXZpdHkodGhpcy5vYmplY3RzW2FdLCAtMSwgLTE1KTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRPYmpCeVRhZyhcInBsYXllclwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmdldE9iakJ5VGFnKFwiZHVtbXlcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBsZXQgY3Vyc29yID0gdGhpcy5nZXRPYmpCeVRhZyhcIkN1cnNvclwiKVswXSBhcyBDdXJzb3I7XHJcbiAgICAgIGxldCBjYW1lcmFzID0gZy5zdGF0ZS5jYW1lcmFzO1xyXG4gICAgICBcclxuICAgICAgaWYgKHBsYXllcikgeyAgICAgICAgXHJcbiAgICAgICAgY2FtZXJhc1swXS54ID0gcGxheWVyLnN0YXRlLnBvc2l0aW9uLng7XHJcbiAgICAgICAgY2FtZXJhc1swXS55ID0gcGxheWVyLnN0YXRlLnBvc2l0aW9uLnkgKyAoY2FtZXJhc1swXS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodC8yIC0gcGxheWVyLmhlaWdodC8yKTsgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZih0YXJnZXQpe1xyXG4gICAgICAgIGNhbWVyYXNbMV0uc3RhdGUucG9zaXRpb24ueCA9IHRhcmdldC5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gICAgICAgIGNhbWVyYXNbMV0uc3RhdGUucG9zaXRpb24ueSA9IHRhcmdldC5zdGF0ZS5wb3NpdGlvbi55O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoY3Vyc29yKSB7XHJcbiAgICAgICAgY3Vyc29yLmNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgIGN1cnNvci5ncmF2aXR5ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZSh0aGlzLmdhbWUuc3RhdGUuY2FudmFzLHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdKTtcclxuICAgICAgICBjdXJzb3Iuc3RhdGUucG9zaXRpb24ueCA9IG1vdXNlLng7XHJcbiAgICAgICAgY3Vyc29yLnN0YXRlLnBvc2l0aW9uLnkgPSBtb3VzZS55O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgc3VwZXIuc3RhdGVmKHRpbWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgcm9vbSwgYXBwbHlHcmF2aXR5LG9iamVjdF9zdGF0ZV9jb25maWcsIHN0YXRlX2NvbmZpZyB9IGZyb20gXCIuLi8uLi9saWIvcm9vbVwiO1xyXG5pbXBvcnQgeyBHb29tYmEgfSBmcm9tIFwiLi4vb2JqZWN0cy9Hb29tYmFcIjtcclxuaW1wb3J0IHsgQ29udHJvbGxlZFBsYXllciB9IGZyb20gXCIuLi9vYmplY3RzL0NvbnRyb2xsZWRQbGF5ZXJcIjtcclxuaW1wb3J0IHsgR3VuIH0gZnJvbSBcIi4uL29iamVjdHMvR3VuXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9vYmplY3RzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBDdXJzb3IgfSBmcm9tIFwiLi4vb2JqZWN0cy9DdXJzb3JcIjtcclxuaW1wb3J0IHsgYm94IH0gZnJvbSBcIi4uL29iamVjdHMvYm94XCI7XHJcbmltcG9ydCB7IFZlcnRCb3ggfSBmcm9tIFwiLi4vb2JqZWN0cy9WZXJ0Qm94XCI7XHJcbmltcG9ydCB7IHZlbG9jaXR5Q29sbGlzaW9uQ2hlY2sgfSBmcm9tIFwiLi4vLi4vbGliL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQgeyBncmF2aXR5X29iaiwgcm90YXRpb25fbGVuZ3RoIH0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgUG9sbF9Nb3VzZSwgZXhlY190eXBlIH0gZnJvbSBcIi4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBIVUQsIFRleHQgfSBmcm9tIFwiLi4vLi4vbGliL2h1ZFwiO1xyXG5pbXBvcnQgeyBERUJVRywgZ2FtZSwgR2V0Vmlld3BvcnREaW1lbnNpb25zLHZpZXdwb3J0LCBzZXREZWJ1ZyB9IGZyb20gXCIuLi8uLi92YW5cIjtcclxuaW1wb3J0IHtidWxsZXQsIFJvY2tldH0gZnJvbSBcIi4uL29iamVjdHMvYnVsbGV0XCI7XHJcbmltcG9ydCB7Q2FtZXJhfSBmcm9tIFwiLi4vLi4vbGliL3JlbmRlclwiO1xyXG5pbXBvcnQge2d9IGZyb20gXCIuLi9tYWluXCI7XHJcbmltcG9ydCAqIGFzIGpzb24gZnJvbSBcIi4vVW5kZXJ3b3JsZC5qc29uXCI7XHJcbmludGVyZmFjZSBvdmVyd29ybGRfaSB7XHJcbiAgcGxheWVyOiBncmF2aXR5X29iaixcclxuICBwYXVzZWQ6IGJvb2xlYW4sXHJcbiAgbG9ja2VkX2J1bGxldDpidWxsZXRcclxufVxyXG5cclxuY2xhc3MgT3ZlcndvcmxkX0hVRCBleHRlbmRzIEhVRCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy50ZXh0X2VsZW1lbnRzLnB1c2gobmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodCAqIDcvOFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiA0NCxcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjpcImxlZnRcIixcclxuICAgICAgc2NhbGluZzoxXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGxldCB4ID0gZy5nZXRSb29tKCkuZ2V0T2JqQnlUYWcoXCJkdW1teVwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGlmKHgpXHJcbiAgICAgICAgcmV0dXJuIGBUaW1lcyBBaXJzaG90OiR7eC5zdGF0ZS50aW1lc19haXJzaG90fWA7XHJcbiAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9KSk7XHJcbiAgICB0aGlzLnRleHRfZWxlbWVudHMucHVzaChuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0ICogNi84XHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDQ0LFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgc2NhbGluZzoxXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGxldCB4ID0gZy5nZXRSb29tKCkuZ2V0T2JqQnlUYWcoXCJkdW1teVwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGlmKHgpXHJcbiAgICAgICAgcmV0dXJuIGBNYXggVGltZXMgQWlyc2hvdDoke01hdGgubWF4KHguc3RhdGUudGltZXNfYWlyc2hvdCx4LnN0YXRlLm1heF90aW1lc19haXJzaG90KX1gO1xyXG4gICAgICByZXR1cm4gXCJcIlxyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgSGVpZ2h0X0hVRCBleHRlbmRzIEhVRHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudGV4dF9lbGVtZW50cy5wdXNoKG5ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiA2MDBcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogMTUsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246XCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6MVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBsZXQgeCA9IGcuZ2V0Um9vbSgpLmdldE9iakJ5VGFnKFwiZHVtbXlcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBpZih4KVxyXG4gICAgICAgIHJldHVybiBgSGVpZ2h0OiR7TWF0aC5mbG9vcih4LnN0YXRlLnBvc2l0aW9uLnkpfWA7XHJcbiAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVW5kZXJ3b3JsZCBleHRlbmRzIHJvb208b3ZlcndvcmxkX2k+e1xyXG4gIGJhY2tncm91bmRfdXJsID0gXCIuL3Nwcml0ZXMvb3JpZ183MTkyNzUuanBnXCI7XHJcbiAgb2JqZWN0czpncmF2aXR5X29ialtdO1xyXG4gIGNvbnN0cnVjdG9yKGdhbWU6Z2FtZTx1bmtub3duPikge1xyXG4gICAgc3VwZXIoZ2FtZSxqc29uIGFzIHVua25vd24gYXMgc3RhdGVfY29uZmlnKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBsYXllcjogdW5kZWZpbmVkLFxyXG4gICAgICBwYXVzZWQ6IGZhbHNlLFxyXG4gICAgICBsb2NrZWRfYnVsbGV0Om51bGxcclxuICAgIH07XHJcbiAgICBnYW1lLnN0YXRlLmNhbWVyYXMgPSBbXHJcbiAgICAgIG5ldyBDYW1lcmEoe1xyXG4gICAgICAgIHg6MCxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgZGltZW5zaW9uczp7XHJcbiAgICAgICAgICBoZWlnaHQ6dmlld3BvcnQuaGVpZ2h0LFxyXG4gICAgICAgICAgd2lkdGg6dmlld3BvcnQud2lkdGggKiA0LzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxpbmc6MC41LFxyXG4gICAgICAgIGRlYnVnOmZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgLHtcclxuICAgICAgICB4OjEsXHJcbiAgICAgICAgeTowLFxyXG4gICAgICAgIHdpZHRoOjAuOCxcclxuICAgICAgICBoZWlnaHQ6MVxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IENhbWVyYSh7XHJcbiAgICAgICAgeDowLFxyXG4gICAgICAgIHk6MCxcclxuICAgICAgICBkaW1lbnNpb25zOntcclxuICAgICAgICAgIHdpZHRoOnZpZXdwb3J0LndpZHRoLzUsXHJcbiAgICAgICAgICBoZWlnaHQ6dmlld3BvcnQuaGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsaW5nOjAuMixcclxuICAgICAgICBkZWJ1ZzpmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICB4OnZpZXdwb3J0LndpZHRoICogNC81LFxyXG4gICAgICAgIHk6MCxcclxuICAgICAgICB3aWR0aDowLjIsXHJcbiAgICAgICAgaGVpZ2h0OjFcclxuICAgICAgfSlcclxuICAgIF1cclxuICAgIC8qXHJcbiAgICBmb3IobGV0IGEgPSAwO2E8MTA7YSsrKXtcclxuICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IFZlcnRCb3goe3g6MzIwLHk6MjUwICsgYSAqIDUwMH0sMCwxKSk7XHJcbiAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBWZXJ0Qm94KHt4OjkwMCx5OjI1MCArIGEgKiA1MDB9LDAsMSkpO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IDA7YSA8IDEwMDsgYSsrKXtcclxuICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IGJveCh7eDo3MDAgKyBhICogNTAwLHk6MH0sMCwxKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuYWRkSXRlbXMoWy4uLm5ldyBQbGF5ZXIoe3g6NzAwLHk6MTUwfSwwLDEse2lkOlwicGxheWVyXCJ9KS5jb21iaW5lZF9vYmplY3RzKCldKVxyXG4gICAgdGhpcy5hZGRJdGVtKG5ldyBDdXJzb3Ioe3g6MCx5OjB9LDAsMSx7aWQ6XCJDdXJzb3JcIn0pKTtcclxuICAgIHRoaXMuYWRkSXRlbShuZXcgR29vbWJhKHt4OjUwMCx5OjUwMH0sMCwxKSk7XHJcbiAgICAqL1xyXG4gICAgZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdLmh1ZCA9IG5ldyBPdmVyd29ybGRfSFVEKCk7XHJcbiAgICBnYW1lLnN0YXRlLmNhbWVyYXNbMV0uaHVkID0gbmV3IEhlaWdodF9IVUQoKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJDb250cm9scygpIHtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJFc2NhcGVcIiwgZXhlY190eXBlLm9uY2UsICgpID0+IHtcclxuICAgICAgdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXNbMF0uc3RhdGUuZGVidWcgPSAhdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXNbMF0uc3RhdGUuZGVidWc7XHJcbiAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldE9iaihcInBsYXllclwiKSBhcyBHb29tYmE7XHJcbiAgICAgIHBsYXllci5jb2xsaXNpb24gPSAhcGxheWVyLmNvbGxpc2lvbjtcclxuICAgICAgcGxheWVyLmdyYXZpdHkgPSAhcGxheWVyLmdyYXZpdHk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwibW91c2UwZG93blwiLCBleGVjX3R5cGUucmVwZWF0LCgpID0+IHtcclxuICAgICAgbGV0IGd1biA9IHRoaXMuZ2V0T2JqKFwiZ3VuXCIpIGFzIEd1bjtcclxuICAgICAgaWYoZ3VuKXtcclxuICAgICAgICBsZXQgbXV6emxlID0gcm90YXRpb25fbGVuZ3RoKDMwLGd1bi5zdGF0ZS5yb3RhdGlvbik7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgeDpndW4uc3RhdGUucG9zaXRpb24ueCArIG11enpsZS54LFxyXG4gICAgICAgICAgeTpndW4uc3RhdGUucG9zaXRpb24ueSArIG11enpsZS55XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidWxsZXRzID0gW107XHJcbiAgICAgICAgZm9yKGxldCBhID0gMDthIDwgMTthICsrKXtcclxuICAgICAgICAgIGJ1bGxldHMucHVzaChuZXcgUm9ja2V0KHtcclxuICAgICAgICAgICAgcG9zaXRpb246e3g6cG9zaXRpb24ueCx5OnBvc2l0aW9uLnl9LFxyXG4gICAgICAgICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgICAgICAgIHJvdGF0aW9uOmd1bi5zdGF0ZS5yb3RhdGlvbixcclxuICAgICAgICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX1cclxuICAgICAgICAgIH0se30pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5sb2NrZWRfYnVsbGV0ID09IG51bGwpXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmxvY2tlZF9idWxsZXQgPSBidWxsZXRzWzBdO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbXMoYnVsbGV0cyk7XHJcbiAgICAgIH1cclxuICAgIH0sNDAwKVxyXG4gIH1cclxuICByZWdpc3RlclBhcnRpY2xlcygpe1xyXG4gICAgdGhpcy5wYXJ0aWNsZXNbXCJzbW9rZVwiXSA9IHtcclxuICAgICAgc3ByaXRlOlwiLi9zcHJpdGVzL2ZvbGRlci9zbW9rZS5wbmdcIixcclxuICAgICAgaGVpZ2h0OjY0LFxyXG4gICAgICB3aWR0aDo2NFxyXG4gICAgfTtcclxuICAgIHRoaXMucGFydGljbGVzW1wiZXhwbG9zaW9uXCJdID0ge1xyXG4gICAgICBzcHJpdGU6XCIuL3Nwcml0ZXMvZm9sZGVyL2V4cGxvc2lvbi5wbmdcIixcclxuICAgICAgaGVpZ2h0OjEyOCxcclxuICAgICAgd2lkdGg6MTI4XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5wYXVzZWQpIHtcclxuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCB0aGlzLm9iamVjdHMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICBhcHBseUdyYXZpdHkodGhpcy5vYmplY3RzW2FdLCAtMSwgLTE1KTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRPYmpCeVRhZyhcInBsYXllclwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmdldE9iakJ5VGFnKFwiZHVtbXlcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBsZXQgY3Vyc29yID0gdGhpcy5nZXRPYmpCeVRhZyhcIkN1cnNvclwiKVswXSBhcyBDdXJzb3I7XHJcbiAgICAgIGxldCBjYW1lcmFzID0gZy5zdGF0ZS5jYW1lcmFzO1xyXG4gICAgICBcclxuICAgICAgaWYgKHBsYXllcikgeyAgICAgICAgXHJcbiAgICAgICAgY2FtZXJhc1swXS54ID0gcGxheWVyLnN0YXRlLnBvc2l0aW9uLng7XHJcbiAgICAgICAgY2FtZXJhc1swXS55ID0gcGxheWVyLnN0YXRlLnBvc2l0aW9uLnkgKyAoY2FtZXJhc1swXS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodC8yIC0gcGxheWVyLmhlaWdodC8yKTsgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZih0YXJnZXQpe1xyXG4gICAgICAgIGNhbWVyYXNbMV0uc3RhdGUucG9zaXRpb24ueCA9IHRhcmdldC5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gICAgICAgIGNhbWVyYXNbMV0uc3RhdGUucG9zaXRpb24ueSA9IHRhcmdldC5zdGF0ZS5wb3NpdGlvbi55O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoY3Vyc29yKSB7XHJcbiAgICAgICAgY3Vyc29yLmNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgIGN1cnNvci5ncmF2aXR5ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZSh0aGlzLmdhbWUuc3RhdGUuY2FudmFzLHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdKTtcclxuICAgICAgICBjdXJzb3Iuc3RhdGUucG9zaXRpb24ueCA9IG1vdXNlLng7XHJcbiAgICAgICAgY3Vyc29yLnN0YXRlLnBvc2l0aW9uLnkgPSBtb3VzZS55O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgc3VwZXIuc3RhdGVmKHRpbWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiXG5pbnRlcmZhY2Ugcm9vbV9kaXIge1xuICBbaW5kZXg6c3RyaW5nXTphbnlcbn1cbmltcG9ydCB7Qm9hcmR9IGZyb20gXCIuL0JvYXJkXCI7XG5pbXBvcnQge092ZXJ3b3JsZH0gZnJvbSBcIi4vT3ZlcndvcmxkXCI7XG5pbXBvcnQge1VuZGVyd29ybGR9IGZyb20gXCIuL1VuZGVyd29ybGRcIjtcbmV4cG9ydCBsZXQgcm9vbXM6cm9vbV9kaXIgPSB7XG5cdEJvYXJkOkJvYXJkLFxuXHRPdmVyd29ybGQ6T3ZlcndvcmxkLFxuXHRVbmRlcndvcmxkOlVuZGVyd29ybGQsXG59IiwiaW50ZXJmYWNlIHNvdW5kX3N0b3JhZ2Uge1xyXG4gIFtpbmRleDogc3RyaW5nXTogSFRNTEF1ZGlvRWxlbWVudFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgYXVkaW8ge1xyXG4gIHNvdW5kczogc291bmRfc3RvcmFnZSA9IHt9O1xyXG4gIGFkZChuYW1lOiBzdHJpbmcsIHM6IHN0cmluZykge1xyXG4gICAgdGhpcy5zb3VuZHNbbmFtZV0gPSBuZXcgQXVkaW8ocyk7XHJcbiAgfVxyXG4gIGFzeW5jIGxvYWQoKSB7XHJcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc291bmRzKTtcclxuICAgIGxldCBwcm9taXNlcyA9IGtleXMubWFwKChrZXkpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLnNvdW5kc1trZXldLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5dGhyb3VnaFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgdHJ5e1xyXG4gICAgICBsZXQgeCA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgcmV0dXJuKHgpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwbGF5KG5hbWU6c3RyaW5nLHZvbHVtZTpudW1iZXIpe1xyXG4gICAgbGV0IGEgPSB0aGlzLnNvdW5kc1tuYW1lXTtcclxuICAgIGEucGF1c2UoKVxyXG4gICAgYS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBhLnZvbHVtZSA9IHZvbHVtZTtcclxuICAgIGEucGxheSgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7b2JqLGdldElkfSBmcm9tIFwiLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQge29ial9zdGF0ZX0gZnJvbSBcIi4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge2RlZXB9IGZyb20gXCIuLi92YW5cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgY29sbGlzaW9uX2JveHtcclxuICB4Om51bWJlcjtcclxuICB5Om51bWJlcjtcclxuICB3aWR0aDpudW1iZXI7XHJcbiAgaGVpZ2h0Om51bWJlcjtcclxufVxyXG5cclxuZW51bSBkaXJlY3Rpb257XHJcbiAgbGVmdCxcclxuICByaWdodCxcclxuICB1cCxcclxuICBkb3duXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja19hbGxfb2JqZWN0cyhjOiBjb2xsaXNpb25fYm94LG9ianM6b2JqW10sZXhlbXB0aW9uOnN0cmluZ1tdID0gW10pOm9ialtde1xyXG4gIHJldHVybiBvYmpzLmZpbHRlcigoYSk9PighZXhlbXB0aW9uLnNvbWUoKGIpPT5hLnRhZ3MuaW5kZXhPZihiKSAhPT0gLTEpICYmIGEuY29sbGlkZXNXaXRoQm94KGMpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja19hbGxfY29sbGlzaW9ucyhjOiBjb2xsaXNpb25fYm94LG9ianM6b2JqW10sZXhlbXB0aW9uOnN0cmluZ1tdID0gW10pOm9ialtde1xyXG4gIGxldCBtYXRjaGVkID0gW107XHJcbiAgZm9yIChsZXQgYSBvZiBvYmpzKSB7XHJcbiAgICBpZiAoIWV4ZW1wdGlvbi5zb21lKChiKT0+YS50YWdzLmluZGV4T2YoYikgIT09IC0xKSAmJiBhLmNvbGxpc2lvbiAmJiBhLmNvbGxpZGVzV2l0aEJveChjKSkge1xyXG4gICAgICBtYXRjaGVkLnB1c2goYSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBtYXRjaGVkXHJcbn1cclxuLy9DaGVja3MgdXAgdG8gdGhlIGZpcnN0IGNvbGxpc2lvblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfY29sbGlzaW9ucyhjOiBjb2xsaXNpb25fYm94LCBvYmpzOiBvYmpbXSwgZXhlbXB0aW9uOnN0cmluZykge1xyXG4gIGZvciAobGV0IGEgb2Ygb2Jqcykge1xyXG4gICAgaWYgKGEuaWQgIT09IGV4ZW1wdGlvbiAmJiBhLmNvbGxpc2lvbiAmJiBhLmNvbGxpZGVzV2l0aEJveChjKSkge1xyXG4gICAgICByZXR1cm4gYTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlbG9jaXR5X21heCh2ZWxvY2l0eTpudW1iZXIsYm94OmNvbGxpc2lvbl9ib3gsb2JqczpvYmpbXSwgZXhlbXB0aW9uOnN0cmluZyxkaXI6ZGlyZWN0aW9uKXtcclxuICBsZXQgY29sbGlzaW9uID0gY2hlY2tfY29sbGlzaW9ucyhib3gsIG9ianMsIGV4ZW1wdGlvbik7XHJcbiAgaWYoY29sbGlzaW9uID09IG51bGwpe1xyXG4gICAgcmV0dXJuIHZlbG9jaXR5O1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgbGV0IGNvbGxpZGVyID0gY29sbGlzaW9uO1xyXG4gICAgbGV0IG9yaWdpbiA9IGdldElkKG9ianMsZXhlbXB0aW9uKTtcclxuICAgIGxldCBvcmlnX3N0ID0gb3JpZ2luLnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICAgIGxldCBjb2xsaWRlcl9zdCA9IGNvbGxpZGVyLnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICAgIGxldCBvcmlnX2NvbCA9IG9yaWdpbi5nZXRGdWxsQ29sbGlzaW9uQm94KCk7XHJcbiAgICBsZXQgY29sbGlkZXJfY29sID0gY29sbGlkZXIuZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gICAgaWYoZGlyID09IGRpcmVjdGlvbi5sZWZ0KXtcclxuICAgICAgcmV0dXJuIChvcmlnX2NvbC54IC0gb3JpZ19jb2wud2lkdGgvMikgLSAoY29sbGlkZXJfY29sLnggKyBjb2xsaWRlcl9jb2wud2lkdGgvMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRpciA9PSBkaXJlY3Rpb24ucmlnaHQpe1xyXG4gICAgICByZXR1cm4gKGNvbGxpZGVyX2NvbC54IC0gY29sbGlkZXJfY29sLndpZHRoLzIpIC0gKG9yaWdfY29sLnggKyBvcmlnX2NvbC53aWR0aC8yKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlyID09IGRpcmVjdGlvbi5kb3duKXtcclxuICAgICAgcmV0dXJuIChvcmlnX2NvbC55IC0gb3JpZ19jb2wuaGVpZ2h0LzIpIC0gKGNvbGxpZGVyX2NvbC55ICsgY29sbGlkZXJfY29sLmhlaWdodC8yKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlyID09IGRpcmVjdGlvbi51cCl7XHJcbiAgICAgIHJldHVybiAoY29sbGlkZXJfY29sLnkgLSBjb2xsaWRlcl9jb2wuaGVpZ2h0LzIpIC0gKG9yaWdfY29sLnkgKyBvcmlnX2NvbC5oZWlnaHQvMik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVsb2NpdHlDb2xsaXNpb25DaGVjayhvYmplY3Q6b2JqLGxpc3Q6b2JqW10pIHtcclxuICBsaXN0ID0gWy4uLmxpc3RdO1xyXG4gIGxldCBvYiA9IG9iamVjdDtcclxuICBsZXQgc3QgPSBvYmplY3Quc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gIGxldCB4X3ZlbCA9IHN0LnZlbG9jaXR5Lng7XHJcbiAgbGV0IHlfdmVsID0gc3QudmVsb2NpdHkueTtcclxuICBpZighb2IuY29sbGlzaW9uKXtcclxuICAgICg8b2JqX3N0YXRlPm9iLnN0YXRlKS5wb3NpdGlvbi54ICs9ICg8b2JqX3N0YXRlPm9iLnN0YXRlKS52ZWxvY2l0eS54O1xyXG4gICAgKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnBvc2l0aW9uLnkgKz0gKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnZlbG9jaXR5Lnk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGxldCBjb2xfYm94ID0gb2IuZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gIGlmICh4X3ZlbCA+IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IGNvbF9ib3gueCArIGNvbF9ib3gud2lkdGgvMiArIHhfdmVsLzIsXHJcbiAgICAgIHk6IGNvbF9ib3gueSxcclxuICAgICAgd2lkdGg6IHhfdmVsLFxyXG4gICAgICBoZWlnaHQ6IGNvbF9ib3guaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgbGV0IHZlbCA9IHZlbG9jaXR5X21heChzdC52ZWxvY2l0eS54LGJveCxsaXN0LG9iLmlkLGRpcmVjdGlvbi5yaWdodCk7XHJcbiAgICBpZih2ZWwgPiAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueCArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS54ID0gMDsgIFxyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIGlmICh4X3ZlbCA8IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IHhfdmVsLzIgKyBjb2xfYm94LnggLSBjb2xfYm94LndpZHRoLzIsXHJcbiAgICAgIHk6IGNvbF9ib3gueSxcclxuICAgICAgd2lkdGg6IC0xICogeF92ZWwsXHJcbiAgICAgIGhlaWdodDogY29sX2JveC5oZWlnaHRcclxuICAgIH1cclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueCxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24ubGVmdCk7XHJcbiAgICBpZih2ZWwgPCAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueCArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS54ID0gMDsgXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICh5X3ZlbCA+IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IGNvbF9ib3gueCxcclxuICAgICAgeTogY29sX2JveC55ICsgY29sX2JveC5oZWlnaHQvMiArIHlfdmVsLzIsXHJcbiAgICAgIHdpZHRoOiBjb2xfYm94LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHlfdmVsXHJcbiAgICB9XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LnksYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLnVwKTtcclxuICAgIGlmKHZlbCA+IDApe1xyXG4gICAgICBzdC5wb3NpdGlvbi55ICs9IHZlbDtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHN0LnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIGlmICh5X3ZlbCA8IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IGNvbF9ib3gueCxcclxuICAgICAgeTogeV92ZWwvMiArIGNvbF9ib3gueSAtIGNvbF9ib3guaGVpZ2h0LzIsXHJcbiAgICAgIHdpZHRoOiBjb2xfYm94LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IC0xICogeV92ZWxcclxuICAgIH1cclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueSxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24uZG93bik7XHJcbiAgICBpZih2ZWwgPCAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueSArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS55ID0gMDtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQge2dhbWUsUEFVU0VELERFQlVHLERFQlVHX3YsIEdldFNjcmVlbkRpbWVuc2lvbnMsR2V0Vmlld3BvcnREaW1lbnNpb25zfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHtvYmp9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi9yZW5kZXJcIjtcclxuaW1wb3J0IHtwb3NpdGlvbn0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbmludGVyZmFjZSBtb3VzZVBvc3tcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBsYXN0OntcclxuICAgIHg6bnVtYmVyLFxyXG4gICAgeTpudW1iZXJcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBjb250cm9sX2Z1bmN7XHJcbiAgKCk6dm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgbW91c2VCaW5kc3tcclxuICBba2V5OnN0cmluZ106IEFycmF5PFtjb250cm9sX2Z1bmMsb2JqXT5cclxufVxyXG5cclxuaW50ZXJmYWNlIGtleUJpbmRze1xyXG4gIFtrZXk6c3RyaW5nXTogQXJyYXk8Y29udHJvbF9mdW5jPlxyXG59XHJcbmxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfY2xpY2tfaGFuZGxlcihnYW1lOmdhbWU8dW5rbm93bj4pe1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PntcclxuICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZ2FtZS5zdGF0ZS5jYW52YXMsZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdKTtcclxuICAgIGxldCBib3g6Y29sbGlzaW9uX2JveCA9IHtcclxuICAgICAgeDptb3VzZS54LFxyXG4gICAgICB5Om1vdXNlLnksXHJcbiAgICAgIGhlaWdodDoxLFxyXG4gICAgICB3aWR0aDoxXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBERUJVR192Lmxhc3RfY2xpY2tlZCAmJiBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCBkLmxlbmd0aDthKyspe1xyXG4gICAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgICBpZihzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IFwibW91c2UxXCIgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWQub2JqICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgaWYoc2VsZWN0ZWQub2JqLmNvbGxpZGVzV2l0aEJveChib3gpKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gIFxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIERFQlVHX3YubGFzdF9jbGlja2VkICYmICBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJkb3duXCIpICAmJiAhc2VsZWN0ZWQuZXhlY3V0ZWQpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgICBzZWxlY3RlZC5yZXBlYXRfdGltZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJ1cFwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZXVwXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKSB7XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgIH1cclxuICAgZWxzZSBpZihzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcInVwXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNldXBcIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgbGV0IGcgPSBbLi4ucmVwZWF0X2JpbmRzXTtcclxuICAgICBmb3IobGV0IGEgPSAwOyBhIDwgZy5sZW5ndGg7YSsrKXtcclxuICAgICAgIGlmKGdbYV0uYmluZC5pZCA9PT0gc2VsZWN0ZWQuaWQpe1xyXG4gICAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICBnW2FdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICBicmVhaztcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuICB9XHJcbn0pXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcclxuICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIERFQlVHX3YubGFzdF9jbGlja2VkICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcInVwXCIpICAmJiAhc2VsZWN0ZWQuZXhlY3V0ZWQpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgICBzZWxlY3RlZC5yZXBlYXRfdGltZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJkb3duXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNlZG93blwiKSAmJiBzZWxlY3RlZC5leGVjdXRlZCAmJiBzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSkge1xyXG4gICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJkb3duXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNlZG93blwiKSAmJiBzZWxlY3RlZC5leGVjdXRlZCAmJiBzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgbGV0IGcgPSBbLi4ucmVwZWF0X2JpbmRzXTtcclxuICAgICAgZm9yKGxldCBhID0gMDsgYSA8IGcubGVuZ3RoO2ErKyl7XHJcbiAgICAgICAgaWYoZ1thXS5iaW5kLmlkID09PSBzZWxlY3RlZC5pZCl7XHJcbiAgICAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgZ1thXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmludGVyZmFjZSBoZWxkX2tleXN7XHJcbiAgW2luZGV4OnN0cmluZ106Ym9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGhlbGRfa2V5czpoZWxkX2tleXMgPSB7fTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwoZSk9PntcclxuICBsZXQgY29kZTpzdHJpbmc7XHJcblxyXG4gIGlmKGUuZGVsdGFZIDwgMCl7XHJcbiAgICBjb2RlID0gXCJzY3JvbGx1cFwiO1xyXG4gIH1cclxuICBlbHNlIGlmKGUuZGVsdGFZID4gMCl7XHJcbiAgICBjb2RlID0gXCJzY3JvbGxkb3duXCI7XHJcbiAgfVxyXG5cclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIERFQlVHX3YubGFzdF9jbGlja2VkICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBcclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSBjb2RlKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgaGVsZF9rZXlzW2UuY29kZV0gPSB0cnVlO1xyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZCAmJiBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5rZXlib2FyZCAmJiBzZWxlY3RlZC5rZXkgPT09IGUuY29kZSAgJiYgIXNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgICAgZm9yKGxldCBjIG9mIHJlcGVhdF9iaW5kcyl7XHJcbiAgICAgICAgICBpZihjLmJpbmQuaWQgPT0gc2VsZWN0ZWQuaWQpe1xyXG4gICAgICAgICAgICBjLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59KVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgaGVsZF9rZXlzW2UuY29kZV0gPSBmYWxzZTtcclxuICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIERFQlVHX3YubGFzdF9jbGlja2VkICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUua2V5Ym9hcmQgJiYgc2VsZWN0ZWQua2V5ID09PSBlLmNvZGUgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2UgKXtcclxuICAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgICAgbGV0IGcgPSBbLi4ucmVwZWF0X2JpbmRzXTtcclxuICAgICAgICBmb3IobGV0IGEgPSAwOyBhIDwgZy5sZW5ndGg7YSsrKXtcclxuICAgICAgICAgIGlmKGdbYV0uYmluZC5pZCA9PT0gc2VsZWN0ZWQuaWQpe1xyXG4gICAgICAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBnW2FdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG5sZXQgdHJhY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xyXG4gIHZhciByZWN0ID0gKGUudGFyZ2V0IGFzIEhUTUxDYW52YXNFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA7XHJcbiAgXHJcbiAgbGFzdF94ID0geDtcclxuICBsYXN0X3kgPSB5O1xyXG4gIHggPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7IC8veCBwb3NpdGlvbiB3aXRoaW4gdGhlIGVsZW1lbnQuXHJcbiAgeSA9IGUuY2xpZW50WSAtIHJlY3QudG9wOyAgLy95IHBvc2l0aW9uIHdpdGhpbiB0aGUgZWxlbWVudC5cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgZW51bSBidHlwZXtcclxuICBtb3VzZSxcclxuICBrZXlib2FyZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgYmluZHtcclxuICBrZXk6c3RyaW5nLFxyXG4gIHR5cGU6YnR5cGUsXHJcbiAgaWQ6bnVtYmVyLFxyXG4gIGZ1bmN0aW9uOmNvbnRyb2xfZnVuYyxcclxuICBleGVjdXRlOmV4ZWNfdHlwZSxcclxuICByZXBlYXRfdGltZXI/OnJlcGVhdF9iaW5kLFxyXG4gIG9iaj86b2JqLFxyXG4gIGV4ZWN1dGVkPzpib29sZWFuLFxyXG4gIGludGVydmFsPzpudW1iZXIsXHJcbiAgY2FtZXJhPzpDYW1lcmFcclxufVxyXG5cclxuaW50ZXJmYWNlIHJlcGVhdF9iaW5ke1xyXG4gIGJpbmQ6YmluZCxcclxuICB0aW1lcjpudW1iZXIsXHJcbiAgaW50ZXJ2YWw6bnVtYmVyLFxyXG4gIGFjdGl2ZTpib29sZWFuXHJcbn1cclxuXHJcbmxldCB4ID0gMDtcclxubGV0IHkgPSAwO1xyXG5sZXQgbGFzdF94ID0gMDtcclxubGV0IGxhc3RfeSA9IDA7XHJcbmxldCBiaW5kczprZXlCaW5kcyA9IHt9O1xyXG5leHBvcnQgbGV0IGRlYnVnX2JpbmRzOmJpbmRbXSA9IFtdO1xyXG5sZXQgbW91c2VCaW5kczptb3VzZUJpbmRzID0ge307XHJcbmxldCBiaW5kX2NvdW50ID0gMDtcclxuXHJcbmxldCBhbGxfYmluZHM6QXJyYXk8YmluZD4gPSBbXVxyXG5cclxubGV0IHJlcGVhdF9iaW5kczpBcnJheTxyZXBlYXRfYmluZD4gPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQb2xsX01vdXNlKGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudCxjYW1lcmE6Q2FtZXJhKTpwb3NpdGlvbntcclxuICBsZXQgaGVpZ2h0ID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0O1xyXG4gIGxldCB3cmF0aW8gPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNhbnZhcykud2lkdGgpL0dldFZpZXdwb3J0RGltZW5zaW9ucygpLndpZHRoO1xyXG4gIGxldCB2cmF0aW8gPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNhbnZhcykuaGVpZ2h0KS9HZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQ7XHJcbiAgcmV0dXJuICh7XHJcbiAgICB4OiAoKHggLSBjYW1lcmEuc3RhdGUudmlld3BvcnQueCkvd3JhdGlvL2NhbWVyYS5zdGF0ZS5zY2FsaW5nICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aC9jYW1lcmEuc3RhdGUuc2NhbGluZy8yKSAsXHJcbiAgICB5OiAoKGhlaWdodCAtIHkvdnJhdGlvKS9jYW1lcmEuc3RhdGUuc2NhbGluZyArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0L2NhbWVyYS5zdGF0ZS5zY2FsaW5nLzIgLSBjYW1lcmEuc3RhdGUudmlld3BvcnQueSlcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhlY3V0ZVJlcGVhdEJpbmRzKGI6bnVtYmVyKXtcclxuICBmb3IobGV0IGEgb2YgcmVwZWF0X2JpbmRzKXtcclxuICAgIGlmKGEuYmluZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0ICYmIGEudGltZXIgPT0gMCAmJiBhLmFjdGl2ZSl7XHJcbiAgICAgIGEuYmluZC5mdW5jdGlvbigpO1xyXG4gICAgfVxyXG4gICAgaWYoYS5hY3RpdmUgfHwgKCFhLmFjdGl2ZSAmJiBhLnRpbWVyICE9IDApKVxyXG4gICAgICBhLnRpbWVyICs9IGI7XHJcbiAgICBpZihhLnRpbWVyID4gYS5pbnRlcnZhbCl7XHJcbiAgICAgIGEudGltZXIgPSAwOyBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVbmJpbmQoYmluZF9pZDpudW1iZXIpe1xyXG4gIGZvcihsZXQgYSA9IDA7YSA8IGFsbF9iaW5kcy5sZW5ndGg7IGErKyl7XHJcbiAgICBpZihhbGxfYmluZHNbYV0uaWQgPT0gYmluZF9pZCl7XHJcbiAgICAgIGFsbF9iaW5kcy5zcGxpY2UoYSwxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvcihsZXQgYSA9IDA7YSA8IHJlcGVhdF9iaW5kcy5sZW5ndGg7IGErKyl7XHJcbiAgICBpZihyZXBlYXRfYmluZHNbYV0uYmluZC5pZCA9PSBiaW5kX2lkKXtcclxuICAgICAgcmVwZWF0X2JpbmRzLnNwbGljZShhLDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIGV4ZWNfdHlwZXtcclxuICBvbmNlLFxyXG4gIHJlcGVhdFxyXG59XHJcblxyXG5sZXQgaWQgPSAwO1xyXG5leHBvcnQgZnVuY3Rpb24gQmluZChrZXluYW1lOnN0cmluZyxmdW5jOmNvbnRyb2xfZnVuYyx0eXBlOmV4ZWNfdHlwZSxpbnRlcnZhbDpudW1iZXIsb2JqZWN0PzpvYmopOm51bWJlcntcclxuICBpZihrZXluYW1lLnNsaWNlKDAsNSkgPT09IFwibW91c2VcIil7XHJcbiAgICBsZXQgYjpiaW5kID0ge1xyXG4gICAgICBrZXk6a2V5bmFtZSxcclxuICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgaWQsXHJcbiAgICAgIGZ1bmN0aW9uOmZ1bmMsXHJcbiAgICAgIG9iajpvYmplY3QsXHJcbiAgICAgIGV4ZWN1dGU6dHlwZSxcclxuICAgICAgZXhlY3V0ZWQ6ZmFsc2UsXHJcbiAgICAgIGludGVydmFsXHJcbiAgICB9O1xyXG4gICAgaWYodHlwZSA9PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgYi5yZXBlYXRfdGltZXIgPSB7XHJcbiAgICAgICAgYmluZDpiLFxyXG4gICAgICAgIHRpbWVyOjAsXHJcbiAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgYWN0aXZlOmZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmVwZWF0X2JpbmRzLnB1c2goYi5yZXBlYXRfdGltZXIpO1xyXG4gICAgfVxyXG4gICAgYWxsX2JpbmRzLnB1c2goYik7XHJcblxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgbGV0IGI6YmluZCA9IHtcclxuICAgICAga2V5OmtleW5hbWUsXHJcbiAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgIGlkLFxyXG4gICAgICBmdW5jdGlvbjpmdW5jLFxyXG4gICAgICBleGVjdXRlOnR5cGUsXHJcbiAgICAgIGV4ZWN1dGVkOmZhbHNlLFxyXG4gICAgICBpbnRlcnZhbFxyXG4gICAgfVxyXG4gICAgaWYodHlwZSA9PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgYi5yZXBlYXRfdGltZXIgPSB7XHJcbiAgICAgICAgYmluZDpiLFxyXG4gICAgICAgIHRpbWVyOjAsXHJcbiAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgYWN0aXZlOmZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmVwZWF0X2JpbmRzLnB1c2goYi5yZXBlYXRfdGltZXIpO1xyXG4gICAgfVxyXG4gICAgYWxsX2JpbmRzLnB1c2goYik7XHJcbiAgfVxyXG4gIGlkKys7XHJcbiAgcmV0dXJuIGlkIC0gMTtcclxufSIsImltcG9ydCB7IG9iaiwgcGFyYW1zIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmxldCB7IGlwY1JlbmRlcmVyIH0gPSB3aW5kb3cucmVxdWlyZShcImVsZWN0cm9uXCIpO1xyXG5jb25zdCBwYXRoID0gd2luZG93LnJlcXVpcmUoXCJwYXRoXCIpO1xyXG5sZXQgZnMgPSB3aW5kb3cucmVxdWlyZShcImZzXCIpO1xyXG5pbXBvcnQgeyBwcmVmYWJzIH0gZnJvbSBcIi4uL2dhbWUvb2JqZWN0cy9wcmVmYWJzXCI7XHJcbmltcG9ydCB7IERFQlVHX3YsIHByb2plY3RfcGF0aCwgZGVidWdfdmFycywgREVCVUcsIFBBVVNFRCB9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9nYW1lL21haW5cIjtcclxuaW1wb3J0IHsgcm9vbXMgYXMgcm9vbV9saXN0IH0gZnJvbSBcIi4uL2dhbWUvcm9vbXMvcm9vbXNcIjtcclxuaW1wb3J0IHsgUG9sbF9Nb3VzZSwgaGVsZF9rZXlzIH0gZnJvbSBcIi4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBIVUQsVGV4dCB9IGZyb20gXCIuLi9saWIvaHVkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdfaHVkIGV4dGVuZHMgSFVEe1xyXG4gIHNldFRleHRFbGVtZW50cygpe1xyXG4gICAgcmV0dXJuIFtuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogMTBcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogMjIsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246XCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6MVxyXG4gICAgfSwgKCkgPT4gYFg6JHtERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54LnRvRml4ZWQoMCl9YCksXHJcbiAgICBuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogMzJcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogMjIsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246XCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6MVxyXG4gICAgfSwgKCkgPT4gYFk6JHtERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55LnRvRml4ZWQoMCl9YClcclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdfc3RhdGVmKHQ6IG51bWJlcikge1xyXG4gIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoREVCVUdfdi50YXJnZXQsIERFQlVHX3YuY2FtZXJhKTtcclxuICBpZihERUJVR192LmNhbWVyYS5odWQpe1xyXG4gICAgREVCVUdfdi5jYW1lcmEuaHVkLnN0YXRlZih0KTtcclxuICB9XHJcbiAgaWYgKCFQQVVTRUQpIHtcclxuICAgIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKTtcclxuICB9XHJcbiAgaWYgKERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudCkge1xyXG4gICAgaWYgKFBBVVNFRCAmJiBoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSAmJiBERUJVR192LmN1cnJlbnRfYWN0aW9uLnByb3BlcnR5ID09IFwic2NhbGluZ1wiKSB7XHJcbiAgICAgbGV0IGRpc3QgPSB7XHJcbiAgICAgIHg6TWF0aC5hYnMobW91c2UueCAtIERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5wb3NpdGlvbi54KSxcclxuICAgICAgeTpNYXRoLmFicyhtb3VzZS55IC0gREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50LnN0YXRlLnBvc2l0aW9uLnkpXHJcbiAgICAgfVxyXG4gICAgIERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5zY2FsaW5nLndpZHRoID0gKDIgKiBkaXN0LngpL0RFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudC53aWR0aDtcclxuICAgICBERUJVR192LnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUuc2NhbGluZy5oZWlnaHQgPSAoMiAqIGRpc3QueSkvREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50LmhlaWdodDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBsZXQgc3QgPSBERUJVR192LnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnggPSBtb3VzZS54IC0gREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50X29mZnNldC54LFxyXG4gICAgICAgIHN0LnBvc2l0aW9uLnkgPSBtb3VzZS55IC0gREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50X29mZnNldC55XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChQQVVTRUQgJiYgREVCVUdfdi5yb3RhdGlvbl9lbGVtZW50KSB7XHJcbiAgICBERUJVR192LnJvdGF0aW9uX2VsZW1lbnQuc3RhdGUucm90YXRpb24gPSBERUJVR192LnJvdGF0aW9uX2VsZW1lbnQuYW5nbGVUb3dhcmRzUG9pbnQobW91c2UpO1xyXG4gIH1cclxuICBpZiAoREVCVUdfdi5taWRkbGVfcG9zaXRpb24pIHtcclxuICAgIGxldCBkaWZmX3kgPSBtb3VzZS55IC0gREVCVUdfdi5taWRkbGVfcG9zaXRpb24ueTtcclxuICAgIGxldCBkaWZmX3ggPSBtb3VzZS54IC0gREVCVUdfdi5taWRkbGVfcG9zaXRpb24ueDtcclxuICAgIERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggPSBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgLTEgKiBkaWZmX3g7XHJcbiAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ID0gREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSArIC0xICogZGlmZl95O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z191cGRhdGVfcm9vbV9saXN0KCkge1xyXG4gIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb29tX2xpc3RcIik7XHJcbiAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGZvciAobGV0IHJvb21fbmFtZSBvZiBPYmplY3Qua2V5cyhyb29tX2xpc3QpKSB7XHJcbiAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyb29tX25hbWUpKTtcclxuICAgIHBhcmEuY2xhc3NMaXN0LmFkZChcInJvb21fbGlzdF9pdGVtXCIpO1xyXG4gICAgcGFyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZy5sb2FkUm9vbVN0cmluZyhyb29tX25hbWUpO1xyXG4gICAgfSlcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgcHJvcGVydGllc19lbGVtZW50IHtcclxuICBwb3NfeDogSFRNTElucHV0RWxlbWVudCxcclxuICBwb3NfeTogSFRNTElucHV0RWxlbWVudCxcclxuICB2ZWxfeDogSFRNTElucHV0RWxlbWVudCxcclxuICB2ZWxfeTogSFRNTElucHV0RWxlbWVudCxcclxuICByb3Q6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgc2NhX3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgc2NhX3k6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgcmVuZGVyOiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIGNvbGxpc2lvbjogSFRNTElucHV0RWxlbWVudFxyXG59XHJcbmxldCBwcm9wZXJ0aWVzX2VsZW1lbnRzOiBwcm9wZXJ0aWVzX2VsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbmlmIChERUJVRykge1xyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMgPSB7XHJcbiAgICBwb3NfeDogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zX3hcIikpLFxyXG4gICAgcG9zX3k6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc195XCIpKSxcclxuICAgIHZlbF94OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZWxfeFwiKSksXHJcbiAgICB2ZWxfeTogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVsX3lcIikpLFxyXG4gICAgcm90OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RcIikpLFxyXG4gICAgc2NhX3g6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYV94XCIpKSxcclxuICAgIHNjYV95OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FfeVwiKSksXHJcbiAgICByZW5kZXI6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbmRlclwiKSksXHJcbiAgICBjb2xsaXNpb246ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbGxpc2lvblwiKSlcclxuICB9XHJcblxyXG4gIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpO1xyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgaW5wdXRzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBpbnB1dHNbYV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICg8SFRNTEVsZW1lbnQ+aW5wdXRzW2FdKS5mb2N1cygpO1xyXG4gICAgfSlcclxuICB9XHJcbiAgbGV0IGZvY3VzZWQ7XHJcbiAgbGV0IGRlYnVnX3RhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgZGVidWdfdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBpbnB1dHMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgaW5wdXRzW2FdLmJsdXIoKTtcclxuICAgIH1cclxuICB9KVxyXG4gIGxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKTtcclxuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGlucHV0cy5sZW5ndGg7IGErKykge1xyXG4gICAgICBpbnB1dHNbYV0uYmx1cigpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIFxyXG4gICAgbGV0IGVsZSA9IERFQlVHX3Yuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3gudmFsdWUpIHx8IDA7XHJcbiAgICBERUJVR192LmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OlwicG9zaXRpb25cIixcclxuICAgICAgZWxlbWVudDplbGUsXHJcbiAgICAgIG5ldzpKU09OLnN0cmluZ2lmeSh7eDpuZXdfdmFsLHk6ZWxlLnN0YXRlLnBvc2l0aW9uLnl9KSxcclxuICAgICAgb2xkOkpTT04uc3RyaW5naWZ5KGVsZS5zdGF0ZS5wb3NpdGlvbilcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUucG9zaXRpb24ueCA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnBvc195LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IERFQlVHX3Yuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3kudmFsdWUpIHx8IDA7XHJcbiAgICBERUJVR192LmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OlwicG9zaXRpb25cIixcclxuICAgICAgZWxlbWVudDplbGUsXHJcbiAgICAgIG5ldzpKU09OLnN0cmluZ2lmeSh7eDplbGUuc3RhdGUucG9zaXRpb24ueCx5Om5ld192YWx9KSxcclxuICAgICAgb2xkOkpTT04uc3RyaW5naWZ5KGVsZS5zdGF0ZS5wb3NpdGlvbilcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUucG9zaXRpb24ueSA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF94LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IERFQlVHX3Yuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLnN0YXRlLnZlbG9jaXR5LnggPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3gudmFsdWUpIHx8IDA7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF95LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IERFQlVHX3Yuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLnN0YXRlLnZlbG9jaXR5LnkgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3kudmFsdWUpIHx8IDA7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnJvdC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBERUJVR192LnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGxldCBuZXdfdmFsID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnJvdC52YWx1ZSkgfHwgMDtcclxuICAgIERFQlVHX3YuYWN0aW9uc19zdGFjay5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6XCJyb3RhdGlvblwiLFxyXG4gICAgICBlbGVtZW50OmVsZSxcclxuICAgICAgbmV3OkpTT04uc3RyaW5naWZ5KG5ld192YWwpLFxyXG4gICAgICBvbGQ6SlNPTi5zdHJpbmdpZnkoZWxlLnJvdGF0aW9uKVxyXG4gICAgfSlcclxuICAgIGVsZS5zdGF0ZS5yb3RhdGlvbiA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV94LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IERFQlVHX3Yuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3gudmFsdWUpIHx8IDA7XHJcbiAgICBERUJVR192LmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5Olwic2NhbGluZ1wiLFxyXG4gICAgICBlbGVtZW50OmVsZSxcclxuICAgICAgbmV3OkpTT04uc3RyaW5naWZ5KHt3aWR0aDpuZXdfdmFsLGhlaWdodDplbGUuc3RhdGUuc2NhbGluZy5oZWlnaHR9KSxcclxuICAgICAgb2xkOkpTT04uc3RyaW5naWZ5KGVsZS5zdGF0ZS5zY2FsaW5nKVxyXG4gICAgfSlcclxuICAgIGVsZS5zdGF0ZS5zY2FsaW5nLndpZHRoID0gbmV3X3ZhbDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3kuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gREVCVUdfdi5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBsZXQgbmV3X3ZhbCA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy5zY2FfeS52YWx1ZSkgfHwgMDtcclxuICAgIERFQlVHX3YuYWN0aW9uc19zdGFjay5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6XCJzY2FsaW5nXCIsXHJcbiAgICAgIGVsZW1lbnQ6ZWxlLFxyXG4gICAgICBuZXc6SlNPTi5zdHJpbmdpZnkoe3dpZHRoOmVsZS5zdGF0ZS5zY2FsaW5nLndpZHRoLGhlaWdodDpuZXdfdmFsfSksXHJcbiAgICAgIG9sZDpKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUuc2NhbGluZylcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUuc2NhbGluZy5oZWlnaHQgPSBuZXdfdmFsO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5yZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gREVCVUdfdi5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUucmVuZGVyID0gcHJvcGVydGllc19lbGVtZW50cy5yZW5kZXIuY2hlY2tlZDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMuY29sbGlzaW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IERFQlVHX3Yuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLmNvbGxpc2lvbiA9IHByb3BlcnRpZXNfZWxlbWVudHMuY29sbGlzaW9uLmNoZWNrZWQ7XHJcbiAgfSlcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZV9lbGVtZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IERFQlVHX3Yuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLmRlbGV0ZSgpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z191cGRhdGVfcHJvcGVydGllc19lbGVtZW50KCkge1xyXG4gIGlmIChERUJVR192LnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudCkge1xyXG4gICAgbGV0IGVsZSA9IERFQlVHX3Yuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmpfbmFtZVwiKS5pbm5lckhUTUwgPSBlbGUuY29uc3RydWN0b3IubmFtZTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3gudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnBvc2l0aW9uLngudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3kudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnBvc2l0aW9uLnkudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3gudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnZlbG9jaXR5LngudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3kudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnZlbG9jaXR5LnkudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMucm90LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS5yb3RhdGlvbi50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5zY2FfeC52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUuc2NhbGluZy53aWR0aC50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5zY2FfeS52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUuc2NhbGluZy5oZWlnaHQudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMucmVuZGVyLmNoZWNrZWQgPSBlbGUucmVuZGVyO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5jb2xsaXNpb24uY2hlY2tlZCA9IGVsZS5jb2xsaXNpb247XHJcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFyYW1zX2xpc3RcIik7XHJcbiAgICBsaXN0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBmb3IgKGxldCBrIG9mIE9iamVjdC5rZXlzKGVsZS5wYXJhbXMpKSB7XHJcblxyXG4gICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBzcGFuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGspKTtcclxuICAgICAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICBpZiAodHlwZW9mICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0eXBlb2YgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGspXHJcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdICsgXCJcIik7XHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBlbGUgPSBERUJVR192LnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgICAgICBsZXQgdmFsOiBzdHJpbmcgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBpZiAoIWlzTmFOKHZhbCBhcyB1bmtub3duIGFzIG51bWJlcikpIHtcclxuICAgICAgICAgICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID0gcGFyc2VGbG9hdCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWwgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsID09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHAuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgIHAuYXBwZW5kKGlucHV0KTtcclxuICAgICAgbGlzdC5hcHBlbmQocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCgpIHtcclxuICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqZWN0c19saXN0XCIpO1xyXG4gIGxpc3QudGV4dENvbnRlbnQgPSAnJztcclxuICBpZiAoZy5nZXRSb29tKCkpIHtcclxuICAgIGZvciAobGV0IG9iaiBvZiBnLmdldFJvb20oKS5vYmplY3RzKSB7XHJcbiAgICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIHBhcmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUob2JqLmNvbnN0cnVjdG9yLm5hbWUpKTtcclxuICAgICAgcGFyYS5jbGFzc0xpc3QuYWRkKFwib2JqZWN0X2xpc3RfaXRlbVwiKTtcclxuICAgICAgcGFyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoREVCVUdfdi5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQgPT0gPG9iaj5vYmopIHtcclxuICAgICAgICAgIERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgKDxvYmo+b2JqKS5zdGF0ZS5wb3NpdGlvbilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBERUJVR192LnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudCA9IDxvYmo+b2JqO1xyXG4gICAgICAgICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBsaXN0LmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9wcmVmYWJzKCkge1xyXG4gIGxldCBwcmVzID0gT2JqZWN0LmtleXMocHJlZmFicykubWFwKGFzeW5jIChvOiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBhID0gPG9iaj4obmV3IHByZWZhYnNbb10oe1xyXG4gICAgICBwb3NpdGlvbjp7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICByb3RhdGlvbjowLFxyXG4gICAgICBzY2FsaW5nOnt3aWR0aDoxLGhlaWdodDoxfVxyXG4gICAgfSkpO1xyXG4gICAgYXdhaXQgYS5sb2FkKCk7XHJcbiAgICBhLnJlbmRlciA9IHRydWU7XHJcbiAgICBsZXQgb2JqcyA9IGEuY29tYmluZWRPYmplY3RzKCk7XHJcbiAgICBmb3IgKGxldCBvYmogb2Ygb2Jqcykge1xyXG4gICAgICBvYmouVW5iaW5kQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpbHRlcmVkID0gb2Jqcy5maWx0ZXIoKGEpID0+IGEucmVuZGVyKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByZWZhYjogcHJlZmFic1tvXSxcclxuICAgICAgbmFtZTogYS5jb25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICByZW5kZXJlZDogZmlsdGVyZWQubWFwKChvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IG8uY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgIHJlbmRlcjogby5yZW5kZXJmKDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgfSlcclxuICBsZXQgYSA9IGF3YWl0IFByb21pc2UuYWxsKHByZXMpO1xyXG5cclxuICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVmYWJfdGFyZ2V0XCIpO1xyXG4gIHRhcmdldC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGZvciAobGV0IHByZWZhYiBvZiBhKSB7XHJcblxyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcmVmYWIubmFtZSkpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJlZmFiLnJlbmRlcmVkWzBdLnJlbmRlcikpIHtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBkaXYuYXBwZW5kKHByZWZhYi5yZW5kZXJlZFswXS5yZW5kZXIuc3ByaXRlLnNwcml0ZV9zaGVldCk7XHJcbiAgICB9XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInByZWZhYl9ib3hcIik7XHJcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgcG9zaXRpb246eyB4OiBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54LCB5OiBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55IH0sXHJcbiAgICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX1cclxuICAgICAgfTtcclxuICAgICAgbGV0IG9iaiA9IDxvYmo+KG5ldyBwcmVmYWIucHJlZmFiKHZhbCkpO1xyXG4gICAgICBhd2FpdCBnLnN0YXRlLmN1cnJlbnRfcm9vbS5hZGRJdGVtcyhvYmouY29tYmluZWRPYmplY3RzKCkpO1xyXG4gICAgfSk7XHJcbiAgICB0YXJnZXQuYXBwZW5kKGRpdik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGRlYnVnX3NldHVwID0gKCkgPT4ge1xyXG4gIGxldCBvYmpfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfb2JqZWN0X2J1dHRvblwiKTtcclxuICBsZXQgcm9vbV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19yb29tX2J1dHRvblwiKTtcclxuICByb29tX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGxldCBmaWxlX3BhdGggPSBpcGNSZW5kZXJlci5zZW5kU3luYygnb2JqZWN0LXBhdGgtcmVxdWVzdCcsIFwicm9vbXNcIik7XHJcbiAgICBpZiAoZmlsZV9wYXRoKSB7XHJcbiAgICAgIGxldCBmdWxsX25hbWUgPSBwYXRoLnBhcnNlKGZpbGVfcGF0aCkuYmFzZTtcclxuICAgICAgbGV0IG5ld19uYW1lID0gZnVsbF9uYW1lLnN1YnN0cigwLCBmdWxsX25hbWUubGVuZ3RoIC0gMyk7XHJcbiAgICAgIGxldCBwYXRoX3RvX3dyaXRlID0gcGF0aC5qb2luKGAke2ZpbGVfcGF0aH1gLCBcIi4uXCIsIG5ld19uYW1lICsgXCIudHNcIik7XHJcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aF90b193cml0ZSwgYFxyXG4gICAgXHJcbiAgICBpbXBvcnQge3Jvb219IGZyb20gXCIuLi8uLi9saWIvcm9vbVwiO1xyXG4gICAgaW1wb3J0IHtnYW1lfSBmcm9tIFwiLi4vLi4vdmFuXCI7XHJcbiAgICBpbXBvcnQge3N0YXRlX2NvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XHJcbiAgICBpbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4vJHtuZXdfbmFtZX0uanNvblwiO1xyXG4gICAgbGV0IGNmaWcgPSBjb25maWcgYXMgdW5rbm93biBhcyBzdGF0ZV9jb25maWc7XHJcbiAgICBpbnRlcmZhY2UgJHtuZXdfbmFtZX1fc3RhdGV7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBleHBvcnQgY2xhc3MgJHtuZXdfbmFtZX0gZXh0ZW5kcyByb29tPCR7bmV3X25hbWV9X3N0YXRlPntcclxuICAgICAgYmFja2dyb3VuZF91cmw9XCIuL3Nwcml0ZXMvRXJyb3IucG5nXCI7XHJcbiAgICAgIGNvbnN0cnVjdG9yKGdhbWU6Z2FtZTx1bmtub3duPil7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSxjZmlnKTtcclxuICAgICAgfVxyXG4gICAgICByZWdpc3RlckNvbnRyb2xzKCl7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICByZWdpc3RlclBhcnRpY2xlcygpe1xyXG4gICAgXHJcbiAgICAgIH1cclxuICAgICAgc3RhdGVmKGRlbHRhX3RpbWU6bnVtYmVyKXtcclxuICAgICAgICBzdXBlci5zdGF0ZWYoZGVsdGFfdGltZSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBgKVxyXG5cclxuICAgICAgcGF0aF90b193cml0ZSA9IHBhdGguam9pbihgJHtmaWxlX3BhdGh9YCwgXCIuLlwiLCBuZXdfbmFtZSArIFwiLmpzb25cIik7XHJcblxyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGhfdG9fd3JpdGUsIGBcclxuICAgIHtcclxuICAgICAgXCJvYmplY3RzXCI6W11cclxuICAgIH1cclxuICAgIGApXHJcbiAgICB9XHJcbiAgfSlcclxuICBvYmpfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGZpbGVfcGF0aCA9IGlwY1JlbmRlcmVyLnNlbmRTeW5jKCdvYmplY3QtcGF0aC1yZXF1ZXN0JywgXCJvYmplY3RzXCIpO1xyXG4gICAgaWYgKGZpbGVfcGF0aCkge1xyXG4gICAgICBsZXQgZnVsbF9uYW1lID0gcGF0aC5wYXJzZShmaWxlX3BhdGgpLmJhc2U7XHJcbiAgICAgIGxldCBuZXdfbmFtZSA9IGZ1bGxfbmFtZS5zdWJzdHIoMCwgZnVsbF9uYW1lLmxlbmd0aCAtIDMpO1xyXG4gICAgICBsZXQgcGF0aF90b193cml0ZSA9IHBhdGguam9pbihgJHtmaWxlX3BhdGh9YCwgXCIuLlwiLCBuZXdfbmFtZSArIFwiLnRzXCIpO1xyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGhfdG9fd3JpdGUsIGBcclxuICAgIFxyXG4gICAgaW1wb3J0IHtvYmp9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbiAgICBpbXBvcnQgeyBvYmpfc3RhdGUsIHBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG4gICAgXHJcbiAgICBpbnRlcmZhY2UgJHtuZXdfbmFtZX1fc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW50ZXJmYWNlICR7bmV3X25hbWV9X3BhcmFtZXRlcnN7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzICR7bmV3X25hbWV9IGV4dGVuZHMgb2JqPCR7bmV3X25hbWV9X3N0YXRlPntcclxuICAgICAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL0Vycm9yLnBuZ1wiO1xyXG4gICAgICBoZWlnaHQgPSAxMDA7XHJcbiAgICAgIHdpZHRoID0gMTAwO1xyXG4gICAgICB0YWdzOkFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICAgICAgcmVuZGVyID0gdHJ1ZTtcclxuICAgICAgcm90YXRpb24gPSAwO1xyXG4gICAgICBzY2FsaW5nID0gMTtcclxuICAgICAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOiR7bmV3X25hbWV9X3BhcmFtZXRlcnMgPSB7fVxyXG4gICAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjpwb3NpdGlvbixyb3RhdGlvbjpudW1iZXIsc2NhbGluZzpudW1iZXIscGFyYW1zOiR7bmV3X25hbWV9X3BhcmFtZXRlcnMgPSAke25ld19uYW1lfS5kZWZhdWx0X3BhcmFtcyl7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24scm90YXRpb24sc2NhbGluZyxwYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjpwb3NpdGlvbixcclxuICAgICAgICAgIHZlbG9jaXR5OntcclxuICAgICAgICAgICAgeDowLFxyXG4gICAgICAgICAgICB5OjBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGVmKHRpbWVfZGVsdGE6bnVtYmVyKXtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlcmYodGltZV9kZWx0YTpudW1iZXIpe1xyXG4gICAgICAgcmV0dXJuIHN1cGVyLnJlbmRlcmYodGltZV9kZWx0YSk7IFxyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdGVyX2FuaW1hdGlvbnMoKXtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdGVyX2F1ZGlvKCl7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICByZWdpc3Rlcl9jb250cm9scygpe1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGApXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbn0iLCJpbXBvcnQge29ian0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IEdvb21iYSB9IGZyb20gXCIuLi9nYW1lL29iamVjdHMvR29vbWJhXCI7XHJcblxyXG5pbnRlcmZhY2UgSHVkVGV4dEdldEZ1bmN7XHJcbiAgKCk6c3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFNldHRpbmd7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgZm9udDpGb250XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9udHtcclxuICBtYXhfd2lkdGg/Om51bWJlcixcclxuICBzaXplOm51bWJlcixcclxuICBmb250OnN0cmluZyxcclxuICBjb2xvcjpzdHJpbmcsXHJcbiAgdGV4dDpzdHJpbmcsXHJcbiAgYWxpZ246Q2FudmFzVGV4dEFsaWduXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dF9Ob2Rle1xyXG4gIG1heF93aWR0aD86bnVtYmVyLFxyXG4gIHBvc2l0aW9uOntcclxuICAgIHg6bnVtYmVyLFxyXG4gICAgeTpudW1iZXJcclxuICB9XHJcbiAgc2l6ZTpudW1iZXI7XHJcbiAgc2NhbGluZzpudW1iZXI7XHJcbiAgZm9udDpzdHJpbmc7XHJcbiAgY29sb3I6c3RyaW5nO1xyXG4gIHRleHQ/OnN0cmluZztcclxuICBhbGlnbj86Q2FudmFzVGV4dEFsaWduO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBIVUR7XHJcbiAgZ3JhcGhpY19lbGVtZW50czpvYmpbXSA9IFtdO1xyXG4gIHRleHRfZWxlbWVudHM6QXJyYXk8VGV4dD4gPSBbXTtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy50ZXh0X2VsZW1lbnRzLnB1c2goLi4udGhpcy5zZXRUZXh0RWxlbWVudHMoKSk7XHJcbiAgICB0aGlzLmdyYXBoaWNfZWxlbWVudHMucHVzaCguLi50aGlzLnNldEdyYXBoaWNFbGVtZW50cygpKTsgXHJcbiAgfVxyXG4gIHN0YXRlZihhOm51bWJlcil7XHJcbiAgICBmb3IobGV0IHggb2YgdGhpcy5ncmFwaGljX2VsZW1lbnRzKXtcclxuICAgICAgeC5zdGF0ZWYoYSk7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IHggb2YgdGhpcy50ZXh0X2VsZW1lbnRzKXtcclxuICAgICAgeC5zdGF0ZWYoYSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldFRleHRFbGVtZW50cygpOlRleHRbXXtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgc2V0R3JhcGhpY0VsZW1lbnRzKCk6b2JqW117XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHtcclxuICBnZXRfZnVuYzpIdWRUZXh0R2V0RnVuYztcclxuICBzdGF0ZTpUZXh0X05vZGU7XHJcbiAgY29uc3RydWN0b3IoYTpUZXh0X05vZGUsYjpIdWRUZXh0R2V0RnVuYyl7XHJcbiAgICBpZighYS5hbGlnbil7XHJcbiAgICAgIGEuYWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IGE7XHJcbiAgICBpZighdGhpcy5zdGF0ZS50ZXh0KXtcclxuICAgICAgdGhpcy5zdGF0ZS50ZXh0ID0gXCJcIjtcclxuICAgIH1cclxuICAgIHRoaXMuZ2V0X2Z1bmMgPSBiO1xyXG4gIH1cclxuICBzdGF0ZWYoYTpudW1iZXIpe1xyXG4gICB0aGlzLnN0YXRlLnRleHQgPSB0aGlzLmdldF9mdW5jKCk7XHJcbiAgfVxyXG4gIHJlbmRlcmYoYTpudW1iZXIpOkZvbnR7XHJcbiAgICBsZXQge3NpemUsY29sb3IsZm9udCx0ZXh0LG1heF93aWR0aCxhbGlnbn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2l6ZSxcclxuICAgICAgY29sb3IsXHJcbiAgICAgIGZvbnQsXHJcbiAgICAgIHRleHQsXHJcbiAgICAgIG1heF93aWR0aCxcclxuICAgICAgYWxpZ25cclxuICAgIH07XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtwb3NpdGlvbn0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEaXN0YW5jZShhOnBvc2l0aW9uLGI6cG9zaXRpb24pe1xyXG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYS54IC0gYi54LDIpICsgTWF0aC5wb3coYS55IC0gYi55LDIpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRJbnQobWluOm51bWJlciwgbWF4Om51bWJlcikge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSApICsgbWluO1xyXG59IiwiaW1wb3J0IHsgc3RhdGVfZnVuYywgb2JqX3N0YXRlLCBwb3NpdGlvbiwgZGltZW5zaW9ucyB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IHJlbmRlcl9mdW5jLCByZW5kZXJfdHlwZSB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSwgcG9zaXRpb25lZF9zcHJpdGUsIHNwcml0ZSwgc3ByaXRlX2dlbiB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4vY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IFVuYmluZCwgQmluZCwgY29udHJvbF9mdW5jLCBleGVjX3R5cGUgfSBmcm9tIFwiLi9jb250cm9sc1wiO1xyXG5pbXBvcnQge2F1ZGlvfSBmcm9tIFwiLi9hdWRpb1wiO1xyXG5pbXBvcnQge2dhbWV9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgRGlzdGFuY2UgfSBmcm9tIFwiLi9tYXRoXCI7XHJcblxyXG5pbnRlcmZhY2Ugb2JqX2k8VD4ge1xyXG4gIHN0YXRlZjogc3RhdGVfZnVuYzxUPixcclxuICByZW5kZXJmOiByZW5kZXJfZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25fbGVuZ3RoKGxlbmd0aDogbnVtYmVyLCBkZWdyZWU6IG51bWJlcikge1xyXG4gIGxldCBhX2xlbiA9IGxlbmd0aCAqIE1hdGguc2luKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xyXG4gIGxldCBiX2xlbiA9IGxlbmd0aCAqIE1hdGguY29zKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiBhX2xlbixcclxuICAgIHk6IGJfbGVuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWQoYTogb2JqW10sIGlkOiBzdHJpbmcpOiBvYmoge1xyXG4gIGZvciAobGV0IGIgPSAwOyBiIDwgYS5sZW5ndGg7IGIrKykge1xyXG4gICAgaWYgKGFbYl0uaWQgPT0gaWQpIHtcclxuICAgICAgcmV0dXJuIGFbYl07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcbmludGVyZmFjZSBhbmltX3N0b3JhZ2Uge1xyXG4gIFtpbmRleDogc3RyaW5nXTogW0FycmF5PFtudW1iZXIsIHNwcml0ZV0+LCBudW1iZXJdXHJcbn1cclxuXHJcbmludGVyZmFjZSB2b2lkX2Z1bmMge1xyXG4gICgpOiB2b2lkXHJcbn1cclxuXHJcbmNsYXNzIGFuaW1hdGlvbnMge1xyXG4gIGFuaW1hdGlvbnM6IGFuaW1fc3RvcmFnZSA9IHt9O1xyXG4gIGFuaW1hdGlvbl90cmFja2VyID0gMDtcclxuICBjdXJyZW50OiBzdHJpbmc7XHJcbiAgY2FsbGJhY2s6IHZvaWRfZnVuYztcclxuICBhbmltYXRpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIGFkZChuYW1lOiBzdHJpbmcsIHM6IEFycmF5PFtudW1iZXIsIHNwcml0ZV0+LCBsZW5ndGg6IG51bWJlcikge1xyXG4gICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gW3MsIGxlbmd0aF07XHJcbiAgfVxyXG4gIHBsYXkobmFtZTogc3RyaW5nLCBjYWxsYmFjaz86IHZvaWRfZnVuYykge1xyXG4gICAgdGhpcy5jdXJyZW50ID0gbmFtZTtcclxuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPSAwO1xyXG4gIH1cclxuICByZW5kZXJmKHQ6IG51bWJlcik6IHNwcml0ZSB7XHJcbiAgICBsZXQgY3Vycl9hbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50XVswXTtcclxuICAgIGxldCBsZW5ndGg6IG51bWJlciA9IHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRdWzFdO1xyXG4gICAgbGV0IGluZGV4O1xyXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgY3Vycl9hbmltYXRpb24ubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xyXG4gICAgICBpZiAodGhpcy5hbmltYXRpb25fdHJhY2tlciA+PSBjdXJyX2FuaW1hdGlvbltpbmRleF1bMF0gJiYgdGhpcy5hbmltYXRpb25fdHJhY2tlciA8IGN1cnJfYW5pbWF0aW9uW2luZGV4ICsgMV1bMF0pIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbl90cmFja2VyID0gdGhpcy5hbmltYXRpb25fdHJhY2tlciArIHQ7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBjdXJyX2FuaW1hdGlvbltpbmRleF1bMV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgIH1cclxuICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25fdHJhY2tlciA+PSBsZW5ndGgpIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciA9IDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciArPSB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN1cnJfYW5pbWF0aW9uW2luZGV4XVsxXTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBoaXRib3h7XHJcbiAgd2lkdGg6bnVtYmVyLFxyXG4gIGhlaWdodDpudW1iZXIsXHJcbiAgeF9vZmZzZXQ6bnVtYmVyLFxyXG4gIHlfb2Zmc2V0Om51bWJlclxyXG59XHJcblxyXG5lbnVtIFJlbmRlclR5cGV7XHJcbiAgYm94LFxyXG4gIHNwcml0ZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHBhcmFtc3tcclxuICBbaW5kZXg6c3RyaW5nXTpib29sZWFufHN0cmluZ3xudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIG9iantcclxuICBzcHJpdGVfdXJsID0gXCJcIjtcclxuICBzcHJpdGVfc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgc3RhdGU6IG9ial9zdGF0ZTtcclxuICByZW5kZXJfdHlwZSA9IHJlbmRlcl90eXBlLnNwcml0ZTtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGNvbGxpc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGhpdGJveDogaGl0Ym94XHJcbiAgaWQ6IHN0cmluZztcclxuICBiaW5kczogQXJyYXk8bnVtYmVyPjtcclxuICB0YWdzOnN0cmluZ1tdID0gW107XHJcbiAgcm90YXRpb246IG51bWJlciA9IDA7XHJcbiAgcmVuZGVyID0gdHJ1ZTtcclxuICBhbmltYXRpb25zID0gbmV3IGFuaW1hdGlvbnMoKTtcclxuICBhdWRpbyA9IG5ldyBhdWRpbygpO1xyXG4gIGxhc3RfcmVuZGVyOm51bWJlciA9IDA7XHJcbiAgZ2FtZTpnYW1lPHVua25vd24+O1xyXG4gIHBhcmVudDpjb21wb3NpdGVfb2JqO1xyXG4gIHNjYWxpbmc6ZGltZW5zaW9ucyA9IHtcclxuICAgIGhlaWdodDoxLFxyXG4gICAgd2lkdGg6MVxyXG4gIH07XHJcbiAgcGFyYW1zOnVua25vd24gPSB7fTtcclxuICBsYXllcjpudW1iZXIgPSAxO1xyXG4gIHN0YXRpYyBkZWZhdWx0X3BhcmFtczp1bmtub3duID0ge307XHJcbiAgZ2V0U3RhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcclxuICB9XHJcbiAgcmVnaXN0ZXJBbmltYXRpb25zKCkge1xyXG5cclxuICB9XHJcbiAgcmVnaXN0ZXJBdWRpbygpIHtcclxuXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXMgPSBvYmouZGVmYXVsdF9wYXJhbXMpIHtcclxuICAgIFxyXG4gICAgdGhpcy5pZCA9IFwiXCIgKyBjb3VudGVyO1xyXG4gICAgdGhpcy5iaW5kcyA9IFtdO1xyXG4gICAgY291bnRlcisrO1xyXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICB0aGlzLnJlZ2lzdGVyQ29udHJvbHMoKTtcclxuICAgIHRoaXMucmVnaXN0ZXJBdWRpbygpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0ZSkpKTtcclxuICAgIFxyXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgfVxyXG4gIGxvYWQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IGEgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgYS5zcmMgPSB0aGlzLnNwcml0ZV91cmw7XHJcbiAgICAgIGEub25sb2FkID0gKGFzeW5jICgpID0+IHtcclxuICAgICAgICBfdGhpcy5zcHJpdGVfc2hlZXQgPSBhO1xyXG4gICAgICAgIF90aGlzLnJlZ2lzdGVyQW5pbWF0aW9ucygpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXVkaW8ubG9hZCgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICBjb21iaW5lZE9iamVjdHMoKTpvYmpbXXtcclxuICAgIHJldHVybiBbdGhpc107XHJcbiAgfVxyXG4gIGRpc3RhbmNlKGE6b2JqKTpudW1iZXJ7XHJcbiAgICBsZXQgb19zdCA9IGEuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICBsZXQgc3QgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgcmV0dXJuIERpc3RhbmNlKHN0LnBvc2l0aW9uLG9fc3QucG9zaXRpb24pO1xyXG4gIH1cclxuICBhbmdsZVRvd2FyZHMoYTogb2JqKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmFuZ2xlVG93YXJkc1BvaW50KGEuc3RhdGUucG9zaXRpb24pO1xyXG4gIH1cclxuICBhbmdsZVRvd2FyZHNQb2ludChwb3NpdGlvbjpwb3NpdGlvbik6bnVtYmVye1xyXG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGlmIChzdGF0ZS5wb3NpdGlvbi54IDwgcG9zaXRpb24ueCAmJiBzdGF0ZS5wb3NpdGlvbi55ID4gcG9zaXRpb24ueVxyXG4gICAgICB8fCAoc3RhdGUucG9zaXRpb24ueCA8IHBvc2l0aW9uLnggJiYgc3RhdGUucG9zaXRpb24ueSA8IHBvc2l0aW9uLnkpKSB7XHJcbiAgICAgIHJldHVybiA5MCAtIE1hdGguYXRhbigocG9zaXRpb24ueSAtIHN0YXRlLnBvc2l0aW9uLnkpIC8gKHBvc2l0aW9uLnggLSBzdGF0ZS5wb3NpdGlvbi54KSkgKiAxODAgLyBNYXRoLlBJXHJcbiAgICB9XHJcbiAgICBpZiAoc3RhdGUucG9zaXRpb24ueCA+IHBvc2l0aW9uLnggJiYgc3RhdGUucG9zaXRpb24ueSA8IHBvc2l0aW9uLnlcclxuICAgICAgfHwgc3RhdGUucG9zaXRpb24ueCA+IHBvc2l0aW9uLnggJiYgc3RhdGUucG9zaXRpb24ueSA+IHBvc2l0aW9uLnkpIHtcclxuICAgICAgcmV0dXJuIDI3MCAtIE1hdGguYXRhbigocG9zaXRpb24ueSAtIHN0YXRlLnBvc2l0aW9uLnkpIC8gKHBvc2l0aW9uLnggLSBzdGF0ZS5wb3NpdGlvbi54KSkgKiAxODAgLyBNYXRoLlBJXHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgYmluZENvbnRyb2woa2V5OiBzdHJpbmcsIHg6IGV4ZWNfdHlwZSwgZnVuYzogY29udHJvbF9mdW5jLCBpbnRlcnZhbCA9IDEpIHtcclxuICAgIGlmIChrZXkgPT0gXCJtb3VzZTFcIikge1xyXG4gICAgICBsZXQgYiA9IEJpbmQoa2V5LCBmdW5jLCB4LCBpbnRlcnZhbCwgdGhpcyk7XHJcbiAgICAgIHRoaXMuYmluZHMucHVzaChiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmJpbmRzLnB1c2goQmluZChrZXksIGZ1bmMsIHgsIGludGVydmFsKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlZ2lzdGVyQ29udHJvbHMoKXtcclxuXHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOm51bWJlcil7XHJcblxyXG4gIH1cclxuICBkZWxldGUoKSB7XHJcbiAgICBmb3IgKGxldCBhIG9mIHRoaXMuYmluZHMpIHtcclxuICAgICAgVW5iaW5kKGEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lLmdldFJvb20oKS5kZWxldGVJdGVtKHRoaXMuaWQpO1xyXG4gIH1cclxuICBVbmJpbmRBbGwoKXtcclxuICAgIGZvciAobGV0IGEgb2YgdGhpcy5iaW5kcykge1xyXG4gICAgICBVbmJpbmQoYSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbGxpc2lvbkNoZWNrKGE6IGNvbGxpc2lvbl9ib3gpOiBvYmpbXSB7XHJcbiAgICBpZiAodGhpcy5jb2xsaXNpb24pIHtcclxuICAgICAgbGV0IHJvb20gPSB0aGlzLmdhbWUuZ2V0Um9vbSgpO1xyXG4gICAgICByZXR1cm4gcm9vbS5jaGVja0NvbGxpc2lvbnMoYSwgW3RoaXMuaWRdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgZ2V0RnVsbENvbGxpc2lvbkJveCgpOmNvbGxpc2lvbl9ib3h7XHJcbiAgICBsZXQgc3QgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgaWYodGhpcy5oaXRib3gpe1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6c3QucG9zaXRpb24ueCxcclxuICAgICAgICB5OnN0LnBvc2l0aW9uLnksXHJcbiAgICAgICAgd2lkdGg6dGhpcy5oaXRib3gud2lkdGggKiB0aGlzLnN0YXRlLnNjYWxpbmcud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGl0Ym94LmhlaWdodCAqIHRoaXMuc3RhdGUuc2NhbGluZy5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB4OnN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTpzdC5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOnRoaXMud2lkdGggKiB0aGlzLnN0YXRlLnNjYWxpbmcud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGVpZ2h0ICogdGhpcy5zdGF0ZS5zY2FsaW5nLmhlaWdodFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEFsbENvbGxpc2lvbkJveGVzKCk6Y29sbGlzaW9uX2JveFtde1xyXG4gICAgbGV0IHN0ID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGlmKHRoaXMuaGl0Ym94KXtcclxuICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgeDpzdC5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6c3QucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDp0aGlzLndpZHRoICogdGhpcy5zdGF0ZS5zY2FsaW5nLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDp0aGlzLmhlaWdodCAqIHRoaXMuc3RhdGUuc2NhbGluZy5oZWlnaHRcclxuICAgICAgfV1cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiBbe1xyXG4gICAgICAgIHg6c3QucG9zaXRpb24ueCxcclxuICAgICAgICB5OnN0LnBvc2l0aW9uLnksXHJcbiAgICAgICAgd2lkdGg6dGhpcy53aWR0aCAqIHRoaXMuc3RhdGUuc2NhbGluZy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6dGhpcy5oZWlnaHQgKiB0aGlzLnN0YXRlLnNjYWxpbmcuaGVpZ2h0XHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbGxpZGVzV2l0aEJveChhOiBjb2xsaXNpb25fYm94KTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaGNvbGxpZGVzID0gZmFsc2UsIHZjb2xsaWRlcyA9IGZhbHNlO1xyXG4gICAgbGV0IGhib3ggPSB0aGlzLmhpdGJveDtcclxuICAgIGlmKCF0aGlzLmhpdGJveCl7XHJcbiAgICAgIGhib3ggPSB7XHJcbiAgICAgICAgeF9vZmZzZXQ6MCxcclxuICAgICAgICB5X29mZnNldDowLFxyXG4gICAgICAgIHdpZHRoOnRoaXMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBvYiA9IHtcclxuICAgICAgbGVmdDogKHRoaXMuc3RhdGUucG9zaXRpb24ueCArIGhib3gueF9vZmZzZXQgLSBoYm94LndpZHRoICogdGhpcy5zdGF0ZS5zY2FsaW5nLndpZHRoIC8gMiksXHJcbiAgICAgIHJpZ2h0OiAodGhpcy5zdGF0ZS5wb3NpdGlvbi54ICsgaGJveC54X29mZnNldCArIGhib3gud2lkdGggKiB0aGlzLnN0YXRlLnNjYWxpbmcud2lkdGggLyAyKSxcclxuICAgICAgdG9wOiAodGhpcy5zdGF0ZS5wb3NpdGlvbi55ICsgaGJveC55X29mZnNldCArIGhib3guaGVpZ2h0ICogdGhpcy5zdGF0ZS5zY2FsaW5nLmhlaWdodCAvIDIpLFxyXG4gICAgICBib3R0b206ICh0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKyBoYm94Lnlfb2Zmc2V0IC0gaGJveC5oZWlnaHQgKiB0aGlzLnN0YXRlLnNjYWxpbmcuaGVpZ2h0IC8gMilcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICBsZWZ0OiAoYS54IC0gYS53aWR0aCAvIDIpLFxyXG4gICAgICByaWdodDogKGEueCArIGEud2lkdGggLyAyKSxcclxuICAgICAgdG9wOiAoYS55ICsgYS5oZWlnaHQgLyAyKSxcclxuICAgICAgYm90dG9tOiAoYS55IC0gYS5oZWlnaHQgLyAyKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgob2IubGVmdCA+PSBib3gubGVmdCAmJiBvYi5sZWZ0IDwgYm94LnJpZ2h0KSB8fCAoYm94LmxlZnQgPiBvYi5sZWZ0ICYmIGJveC5sZWZ0IDwgb2IucmlnaHQpKSB7XHJcbiAgICAgIGhjb2xsaWRlcyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoKG9iLmJvdHRvbSA+PSBib3guYm90dG9tICYmIG9iLmJvdHRvbSA8IGJveC50b3ApIHx8IChib3guYm90dG9tID4gb2IuYm90dG9tICYmIGJveC5ib3R0b20gPCBvYi50b3ApKXtcclxuICAgICAgdmNvbGxpZGVzID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBoY29sbGlkZXMgJiYgdmNvbGxpZGVzO1xyXG4gIH1cclxuICBlbWl0UGFydGljbGUobmFtZTpzdHJpbmcsb2Zmc2V0OnBvc2l0aW9uLGxpZmV0aW1lOm51bWJlcixyYW5nZTpudW1iZXIpe1xyXG4gICAgbGV0IHJvb20gPSB0aGlzLmdhbWUuZ2V0Um9vbSgpO1xyXG4gICAgbGV0IHN0ID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGxldCBmaW5hbF9wb3NpdGlvbjpwb3NpdGlvbiA9IHtcclxuICAgICAgeDpzdC5wb3NpdGlvbi54ICsgb2Zmc2V0LngsXHJcbiAgICAgIHk6c3QucG9zaXRpb24ueSArIG9mZnNldC55XHJcbiAgICB9XHJcbiAgICByb29tLmVtaXRQYXJ0aWNsZShuYW1lLGZpbmFsX3Bvc2l0aW9uLGxpZmV0aW1lLHJhbmdlKVxyXG4gIH1cclxuICByZW5kZXJUcmFjayh0aW1lOm51bWJlcik6IHBvc2l0aW9uZWRfc3ByaXRlW10ge1xyXG4gICAgbGV0IHJlbmRlcmVkID0gdGhpcy5yZW5kZXJmKHRpbWUgLSB0aGlzLmxhc3RfcmVuZGVyKTtcclxuICAgIGxldCBmaW5hbDpwb3NpdGlvbmVkX3Nwcml0ZVtdO1xyXG4gICAgdGhpcy5sYXN0X3JlbmRlciA9IHRpbWU7XHJcbiAgICBpZihBcnJheS5pc0FycmF5KHJlbmRlcmVkKSlcclxuICAgICAgZmluYWwgPSByZW5kZXJlZFxyXG4gICAgZWxzZXtcclxuICAgICAgZmluYWwgPSBbcmVuZGVyZWRdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmluYWw7XHJcbiAgfVxyXG4gIHJlbmRlcmYodGltZTogbnVtYmVyKTogcG9zaXRpb25lZF9zcHJpdGVbXSB8IHBvc2l0aW9uZWRfc3ByaXRle1xyXG4gICAgbGV0IHN0ID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmFuaW1hdGlvbnMuYW5pbWF0aW9ucykubGVuZ3RoID09IDAgfHwgIXRoaXMuYW5pbWF0aW9ucy5jdXJyZW50KSB7XHJcbiAgICAgIGlmKCF0aGlzLnNwcml0ZV9zaGVldCB8fCAhdGhpcy5oZWlnaHQgfHwgIXRoaXMud2lkdGgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzcHJpdGU6dW5kZWZpbmVkLFxyXG4gICAgICAgICAgeDpzdC5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgeTpzdC5wb3NpdGlvbi55XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBzcHJpdGVfaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgIGxldCBzcHJpdGVfd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICBpZiAodGhpcy5oZWlnaHQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3ByaXRlX2hlaWdodCA9IHRoaXMuc3ByaXRlX3NoZWV0LmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy53aWR0aCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzcHJpdGVfd2lkdGggPSB0aGlzLnNwcml0ZV9zaGVldC53aWR0aDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgc3ByaXRlX3NoZWV0OiB0aGlzLnNwcml0ZV9zaGVldCxcclxuICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICBzcHJpdGVfd2lkdGg6IHNwcml0ZV93aWR0aCxcclxuICAgICAgICAgIHNwcml0ZV9oZWlnaHQ6IHNwcml0ZV9oZWlnaHQsXHJcbiAgICAgICAgICBvcGFjaXR5OjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHg6IHN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTogc3QucG9zaXRpb24ueVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3ByaXRlOnRoaXMuYW5pbWF0aW9ucy5yZW5kZXJmKHRpbWUpLFxyXG4gICAgICB4OiBzdC5wb3NpdGlvbi54LFxyXG4gICAgICB5OiBzdC5wb3NpdGlvbi55XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGNvbXBvc2l0ZV9zdGF0aWN7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgb2JqOm9ialxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgY29tcG9zaXRlX29iaiBleHRlbmRzIG9iantcclxuICBvYmplY3RzOm9ialtdID0gW107XHJcbiAgcmVuZGVyID0gZmFsc2U7XHJcbiAgcmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG4gIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gIHN0YXRpY3M6Y29tcG9zaXRlX3N0YXRpY1tdID0gW107XHJcbiAgY29uc3RydWN0b3IocG9zOm9ial9zdGF0ZSl7XHJcbiAgICBzdXBlcihwb3MpO1xyXG4gIH1cclxuICBsb2FkKCl7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoWy4uLnRoaXMub2JqZWN0cy5tYXAoKGEpPT5hLmxvYWQoKSksLi4udGhpcy5zdGF0aWNzLm1hcChhPT5hLm9iai5sb2FkKCkpXSk7XHJcbiAgfVxyXG4gIGNvbWJpbmVkT2JqZWN0cygpOm9ialtde1xyXG4gICAgbGV0IGNvbWJpbmVkID0gWy4uLnRoaXMub2JqZWN0cywuLi50aGlzLnN0YXRpY3MubWFwKGE9PmEub2JqKV07XHJcbiAgICBjb21iaW5lZC5mb3JFYWNoKGE9PmEucGFyZW50ID0gdGhpcyk7XHJcbiAgICByZXR1cm4gWy4uLmNvbWJpbmVkLHRoaXNdO1xyXG4gIH1cclxuICBnZXRJdGVtc0J5VGFnKHRhZzpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIHRoaXMuY29tYmluZWRPYmplY3RzKCkuZmlsdGVyKChhKT0+YS50YWdzLmluZGV4T2YodGFnKSA+IC0xKTtcclxuICB9XHJcbiAgYWRkSXRlbShhOm9iaixsaXN0PXRoaXMub2JqZWN0cyl7XHJcbiAgICBsaXN0LnB1c2goYSk7XHJcbiAgICBhLnBhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmdhbWUuZ2V0Um9vbSgpLmFkZEl0ZW0oYSk7XHJcbiAgfVxyXG4gIGdldEFsbENvbGxpc2lvbkJveGVzKCk6Y29sbGlzaW9uX2JveFtde1xyXG4gICAgbGV0IGFycjpjb2xsaXNpb25fYm94W10gPSBbXTtcclxuICAgIGZvcihsZXQgb2JqIG9mIFsuLi50aGlzLnN0YXRpY3MubWFwKGE9PmEub2JqKSwuLi50aGlzLm9iamVjdHNdKXtcclxuICAgICAgbGV0IGNyZWF0ZWRfYm94ID0gb2JqLmdldEFsbENvbGxpc2lvbkJveGVzKCk7XHJcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoY3JlYXRlZF9ib3gpKXtcclxuICAgICAgICBhcnIucHVzaCguLi5jcmVhdGVkX2JveCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBhcnIucHVzaChjcmVhdGVkX2JveCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbiAgfVxyXG4gIGRlbGV0ZSgpe1xyXG4gICAgZm9yKGxldCBhIG9mIHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGEuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgb2YgdGhpcy5zdGF0aWNzKXtcclxuICAgICAgYS5vYmouZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgICBzdXBlci5kZWxldGUoKTtcclxuICB9XHJcbiAgY29sbGlkZXNXaXRoQm94KGE6IGNvbGxpc2lvbl9ib3gpOmJvb2xlYW57XHJcbiAgICBmb3IobGV0IG9iaiBvZiB0aGlzLm9iamVjdHMpe1xyXG4gICAgICBpZihvYmouY29sbGlkZXNXaXRoQm94KGEpKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBvIG9mIHRoaXMuc3RhdGljcyl7XHJcbiAgICAgIGlmKG8ub2JqLmNvbGxpZGVzV2l0aEJveChhKSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9ICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBzdGF0aWNfb2JqIHtcclxuICBzcHJpdGVfdXJsID0gXCJcIjtcclxuICBzcHJpdGU6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBncmF2aXR5X29iaiBleHRlbmRzIG9iantcclxuICBncmF2aXR5ID0gdHJ1ZVxyXG59IiwiaW1wb3J0IHsgc3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IEdldFZpZXdwb3J0RGltZW5zaW9ucyB9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IGRpbWVuc2lvbnMsIG9ial9zdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IFRleHRfTm9kZSwgVGV4dFNldHRpbmcsSFVELFRleHQgfSBmcm9tIFwiLi9odWRcIjtcclxuaW1wb3J0IHtwb3NpdGlvbmVkX3Nwcml0ZX0gZnJvbSBcIi4vc3ByaXRlXCJcclxuXHJcbmludGVyZmFjZSBjYW1lcmFfc3RhdGUge1xyXG4gIHNjYWxpbmc6IG51bWJlcixcclxuICBwb3NpdGlvbjoge1xyXG4gICAgeDogbnVtYmVyLFxyXG4gICAgeTogbnVtYmVyXHJcbiAgfVxyXG4gIGRpbWVuc2lvbnM6IHtcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlclxyXG4gIH0sXHJcbiAgdmlld3BvcnQ6IHZpZXdwb3J0LFxyXG4gIGRlYnVnOmJvb2xlYW4sXHJcbiAgaHVkOkhVRCAgXHJcbn1cclxuXHJcbmludGVyZmFjZSB2aWV3cG9ydCB7XHJcbiAgeDogbnVtYmVyLFxyXG4gIHk6IG51bWJlcixcclxuICB3aWR0aDogbnVtYmVyLFxyXG4gIGhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBjYW1lcmFfcHJvcGVydGllcyB7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgZGltZW5zaW9uczp7XHJcbiAgICBoZWlnaHQ6bnVtYmVyLFxyXG4gICAgd2lkdGg6bnVtYmVyXHJcbiAgfVxyXG4gIHNjYWxpbmc6bnVtYmVyLFxyXG4gIGRlYnVnOmJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbWVyYSB7XHJcbiAgc3RhdGU6IGNhbWVyYV9zdGF0ZTtcclxuICBodWQ6IEhVRDtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczpjYW1lcmFfcHJvcGVydGllcywgdjogdmlld3BvcnQpIHtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNjYWxpbmc6cHJvcHMuc2NhbGluZyxcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiBwcm9wcy54ICogcHJvcHMuc2NhbGluZyxcclxuICAgICAgICB5OiBwcm9wcy55ICogcHJvcHMuc2NhbGluZ1xyXG4gICAgICB9LFxyXG4gICAgICBkaW1lbnNpb25zOiBwcm9wcy5kaW1lbnNpb25zLFxyXG4gICAgICB2aWV3cG9ydDoge1xyXG4gICAgICAgIHg6di54LFxyXG4gICAgICAgIHk6di55ICxcclxuICAgICAgICB3aWR0aDogdi53aWR0aCAqIHByb3BzLmRpbWVuc2lvbnMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB2LmhlaWdodCAqIHByb3BzLmRpbWVuc2lvbnMuaGVpZ2h0XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlYnVnOnByb3BzLmRlYnVnLFxyXG4gICAgICBodWQ6dW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldCB4KHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi54ID0geDtcclxuICB9XHJcbiAgc2V0IHkoeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgPSB5XHJcbiAgfVxyXG4gIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucG9zaXRpb24ueDtcclxuICB9XHJcbiAgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3NpdGlvbi55O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcmVuZGVyX2Z1bmMge1xyXG4gICh4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGluZzogbnVtYmVyKTogdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgcmVjdGFuZ2xlIHtcclxuICB3aWR0aDogbnVtYmVyLFxyXG4gIGhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBzcHJpdGVfYXJncyB7XHJcbiAgc3ByaXRlOiBzcHJpdGUsXHJcbiAgeDogbnVtYmVyLFxyXG4gIHk6IG51bWJlcixcclxuICByb3RhdGlvbjogbnVtYmVyLFxyXG4gIHNjYWxlOmRpbWVuc2lvbnNcclxufVxyXG5cclxuaW50ZXJmYWNlIHJlbmRlcmVyX2FyZ3Mge1xyXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICBjYW1lcmE6IENhbWVyYVxyXG59XHJcblxyXG5leHBvcnQgZW51bSByZW5kZXJfdHlwZSB7XHJcbiAgdGV4dCxcclxuICBzcHJpdGUsXHJcbiAgcmVjdCxcclxuICBzdHJva2VfcmVjdFxyXG59XHJcbi8qXHJcbmV4cG9ydCBjb25zdCBlbGVtZW50X3JlbmRlciA9IChyOnJlbmRlcmVyX2FyZ3MsbzpvYmo8dW5rbm93bj4sdGltZTpudW1iZXIpID0+IHtcclxuICBsZXQgY2FtZXJhID0gci5jYW1lcmE7XHJcbiAgbGV0IHZoZWlnaHQgPSByLmNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAvIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGZpbmFsX3ggPSAoKHMueCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggLyAyIC0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoIC8gMikgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHMueSAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAvIDIgLSBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0IC8gMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55KSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBoZWlnaHQgPSBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0ICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgd2lkdGggPSBzLnNwcml0ZS5zcHJpdGVfd2lkdGggKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGlmKG8ucmVuZGVyX3R5cGUgPT0gcmVuZGVyX3R5cGUudGV4dCl7XHJcblxyXG4gIH1cclxuICBlbHNlIGlmKG8ucmVuZGVyX3R5cGUgPT0gcmVuZGVyX3R5cGUuc3ByaXRlKXtcclxuXHJcbiAgfVxyXG4gIGVsc2UgaWYoby5yZW5kZXJfdHlwZSA9PSByZW5kZXJfdHlwZS5zdHJva2VfcmVjdCl7XHJcblxyXG4gIH1cclxufVxyXG4qL1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBodWRfdGV4dF9yZW5kZXJlciA9IChyOiByZW5kZXJlcl9hcmdzLCBzOiBUZXh0U2V0dGluZykgPT4ge1xyXG4gIGxldCB2aGVpZ2h0ID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0O1xyXG4gIHIuY29udGV4dC5mb250ID0gYCR7cy5mb250LnNpemV9cHggJHtzLmZvbnQuZm9udH1gO1xyXG4gIHIuY29udGV4dC5maWxsU3R5bGUgPSBzLmZvbnQuY29sb3I7XHJcbiAgci5jb250ZXh0LnRleHRBbGlnbiA9IHMuZm9udC5hbGlnbjtcclxuICBpZiAocy5mb250Lm1heF93aWR0aCkge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCBzLngsIHZoZWlnaHQgLSBzLnksIHMuZm9udC5tYXhfd2lkdGgpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgcy54LCB2aGVpZ2h0IC0gcy55KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0ZXh0X3JlbmRlcmVyID0gKHI6cmVuZGVyZXJfYXJncyxzOlRleHRTZXR0aW5nKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgbGV0IHdpZHRoID0gci5jb250ZXh0Lm1lYXN1cmVUZXh0KHMuZm9udC50ZXh0KS53aWR0aCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGhlaWdodCA9IHMuZm9udC5zaXplICogMS4yICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgocy54IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL3IuY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMikgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHMueSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0LzIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgci5jb250ZXh0LmZvbnQgPSBgJHtzLmZvbnQuc2l6ZSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmd9cHggJHtzLmZvbnQuZm9udH1gO1xyXG4gIHIuY29udGV4dC5maWxsU3R5bGUgPSBzLmZvbnQuY29sb3I7XHJcbiAgci5jb250ZXh0LnRleHRBbGlnbiA9IHMuZm9udC5hbGlnblxyXG4gIHIuY29udGV4dC5zYXZlKCk7XHJcbiAgci5jb250ZXh0LnRyYW5zbGF0ZShmaW5hbF94LCBmaW5hbF95KTtcclxuICBpZiAocy5mb250Lm1heF93aWR0aCkge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCAwLCAwLCBzLmZvbnQubWF4X3dpZHRoKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByLmNvbnRleHQuZmlsbFRleHQocy5mb250LnRleHQsIDAsIDApO1xyXG4gIH1cclxuICByLmNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3ByaXRlX3JlbmRlcmVyID0gKHI6IHJlbmRlcmVyX2FyZ3MsIHM6IHNwcml0ZV9hcmdzKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKChzLnggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvci5jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogcy5zY2FsZS53aWR0aCAvIDIpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSBzLnkgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9yLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0ICogcy5zY2FsZS5oZWlnaHQgLyAyICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGhlaWdodCA9IHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nICogcy5zY2FsZS5oZWlnaHQ7XHJcbiAgbGV0IHdpZHRoID0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyAqIHMuc2NhbGUud2lkdGg7XHJcbiAgci5jb250ZXh0LnNhdmUoKTtcclxuICByLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSBzLnNwcml0ZS5vcGFjaXR5O1xyXG4gIHIuY29udGV4dC50cmFuc2xhdGUoZmluYWxfeCAgKyAod2lkdGgpIC8gMiwgZmluYWxfeSArIGhlaWdodCAvIDIpXHJcbiAgbGV0IHJhZGlhbnMgPSBzLnJvdGF0aW9uICogKE1hdGguUEkgLyAxODApO1xyXG4gIHIuY29udGV4dC5yb3RhdGUocmFkaWFucyk7XHJcbiAgci5jb250ZXh0LmRyYXdJbWFnZShcclxuICAgIHMuc3ByaXRlLnNwcml0ZV9zaGVldCxcclxuICAgIHMuc3ByaXRlLmxlZnQsXHJcbiAgICBzLnNwcml0ZS50b3AsXHJcbiAgICBzLnNwcml0ZS5zcHJpdGVfd2lkdGgsXHJcbiAgICBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0LFxyXG4gICAgLSh3aWR0aCApIC8gMixcclxuICAgIC1oZWlnaHQgLyAyLFxyXG4gICAgd2lkdGgsXHJcbiAgICBoZWlnaHRcclxuICApXHJcbiAgci5jb250ZXh0LnJlc3RvcmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0cm9rZWRfcmVjdF9yZW5kZXJlciA9IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJlY3Q6IHJlY3RhbmdsZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDpudW1iZXIsIGNhbWVyYTogQ2FtZXJhKSA9PiB7XHJcbiAgbGV0IHZoZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgoeCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcmVjdC53aWR0aCAvIDIpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0geSAtIHJlY3QuaGVpZ2h0IC8gMiAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGhlaWdodCA9IHJlY3QuaGVpZ2h0ICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IHdpZHRoID0gcmVjdC53aWR0aCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICBjb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGNvbnRleHQuc3Ryb2tlUmVjdChmaW5hbF94LCBmaW5hbF95LCB3aWR0aCwgaGVpZ2h0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlY3RfcmVuZGVyZXIgPSAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByZWN0OiByZWN0YW5nbGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6bnVtYmVyLCBjYW1lcmE6IENhbWVyYSkgPT4ge1xyXG4gIGxldCB2aGVpZ2h0ID0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGZpbmFsX3ggPSAoKHggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiAtIHJlY3Qud2lkdGggLyAyKSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHkgLSByZWN0LmhlaWdodCAvIDIgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBoZWlnaHQgPSByZWN0LmhlaWdodCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCB3aWR0aCA9IHJlY3Qud2lkdGggKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgY29udGV4dC5maWxsUmVjdChmaW5hbF94LCBmaW5hbF95LCB3aWR0aCwgaGVpZ2h0KTtcclxufSIsImltcG9ydCB7IGdyYXZpdHlfb2JqLG9iaiB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSwgc3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IGRpbWVuc2lvbnMsIG9ial9zdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IHZlbG9jaXR5Q29sbGlzaW9uQ2hlY2ssY2hlY2tfY29sbGlzaW9ucyxjb2xsaXNpb25fYm94LGNoZWNrX2FsbF9jb2xsaXNpb25zLGNoZWNrX2FsbF9vYmplY3RzfSBmcm9tIFwiLi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHtyZW5kZXJfY29sbGlzaW9uX2JveCxERUJVR30gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQge0JpbmQsY29udHJvbF9mdW5jLCBleGVjX3R5cGV9IGZyb20gXCIuL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7SFVELFRleHQsIFRleHRfTm9kZX0gZnJvbSBcIi4vaHVkXCI7XHJcbmltcG9ydCB7YXVkaW99IGZyb20gXCIuL2F1ZGlvXCJcclxuaW1wb3J0IHtnYW1lfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7ZGVidWdfdXBkYXRlX29ial9saXN0fSBmcm9tIFwiLi4vbGliL2RlYnVnXCI7XHJcbmltcG9ydCB7cHJlZmFic30gZnJvbSBcIi4uL2dhbWUvb2JqZWN0cy9wcmVmYWJzXCI7XHJcblxyXG5pbnRlcmZhY2UgcG9zaXRpb257XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5R3Jhdml0eShvYjpncmF2aXR5X29iaixncmF2X2NvbnN0Om51bWJlciwgZ3Jhdl9tYXg6bnVtYmVyKXtcclxuICBsZXQgc3QgPSBvYi5zdGF0ZSBhcyBvYmpfc3RhdGU7XHJcbiAgaWYob2IuZ3Jhdml0eSAmJiBzdC52ZWxvY2l0eS55ID4gZ3Jhdl9tYXgpe1xyXG4gICAgc3QudmVsb2NpdHkueSArPSBncmF2X2NvbnN0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwYXJ0aWNsZV9lbnRyeXtcclxuICBzcHJpdGU6c3RyaW5nLFxyXG4gIGhlaWdodDpudW1iZXIsXHJcbiAgd2lkdGg6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBwYXJ0aWNsZXN7XHJcbiAgW2luZGV4OnN0cmluZ106cGFydGljbGVfZW50cnlcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSByb29tX2k8VD57XHJcbiAgYmFja2dyb3VuZF91cmw6c3RyaW5nLFxyXG4gIG9iamVjdHM6b2JqW11cclxuICBzdGF0ZTpUXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugb2JqZWN0X3N0YXRlX2NvbmZpZyB7XHJcbiAgdHlwZTpzdHJpbmcsXHJcbiAgc3RhdGU6b2JqX3N0YXRlLFxyXG4gIHBhcmFtZXRlcnM/OiB1bmtub3duXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugc3RhdGVfY29uZmlne1xyXG4gIG9iamVjdHM6b2JqZWN0X3N0YXRlX2NvbmZpZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyByb29tPFQ+e1xyXG4gIGJhY2tncm91bmRfdXJsOiBzdHJpbmc7XHJcbiAgYmFja2dyb3VuZDogSFRNTEltYWdlRWxlbWVudDtcclxuICBvYmplY3RzOiBvYmpbXSA9IFtdO1xyXG4gIHBhcnRpY2xlczpwYXJ0aWNsZXMgPSB7fTtcclxuICBwYXJ0aWNsZXNfYXJyOiBvYmpbXSA9IFtdO1xyXG4gIHN0YXRlOiBUO1xyXG4gIGJpbmRzOm51bWJlcltdID0gW107XHJcbiAgZ2FtZTpnYW1lPHVua25vd24+O1xyXG4gIGh1ZDpIVUQ7XHJcbiAgYXVkaW8gPSBuZXcgYXVkaW8oKTtcclxuICB0ZXh0X25vZGVzOlRleHRbXSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKGdhbWU6Z2FtZTx1bmtub3duPixjb25maWc6c3RhdGVfY29uZmlnKXtcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICBmb3IobGV0IGMgb2YgY29uZmlnLm9iamVjdHMpe1xyXG4gICAgICB0aGlzLmFkZEl0ZW1TdGF0ZUNvbmZpZyhjKVxyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnRTdGF0ZUNvbmZpZygpe1xyXG4gICAgbGV0IGNvbmZpZzpzdGF0ZV9jb25maWcgPSB7b2JqZWN0czpbXX07XHJcbiAgICBmb3IobGV0IG8gb2YgdGhpcy5vYmplY3RzKXtcclxuICAgICAgICBpZighby5wYXJlbnQpe1xyXG4gICAgICAgIGNvbmZpZy5vYmplY3RzLnB1c2goe1xyXG4gICAgICAgICAgdHlwZTpvLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgICAgICBzdGF0ZTpvLnN0YXRlLFxyXG4gICAgICAgICAgcGFyYW1ldGVyczpvLnBhcmFtc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG4gIGxvYWQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IGEgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgbGV0IHRvX2F3YWl0ID0gdGhpcy5vYmplY3RzLm1hcCgoYSkgPT4gYS5sb2FkKCkpO1xyXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbCh0b19hd2FpdCk7XHJcbiAgICAgIGEuc3JjID0gdGhpcy5iYWNrZ3JvdW5kX3VybDtcclxuICAgICAgYS5vbmVycm9yID0gKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGxvYWRpbmcgdXJsOlwiICsgdGhpcy5iYWNrZ3JvdW5kX3VybCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIGEub25sb2FkID0gKGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIF90aGlzLmJhY2tncm91bmQgPSBhO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXVkaW8ubG9hZCgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICBhc3luYyBhZGRJdGVtU3RhdGVDb25maWcoY29uZmlnOm9iamVjdF9zdGF0ZV9jb25maWcpe1xyXG4gICAgaWYocHJlZmFic1tjb25maWcudHlwZV0pe1xyXG4gICAgICBsZXQgbmV3X29iaiA9IDxvYmo+KG5ldyBwcmVmYWJzW2NvbmZpZy50eXBlXShPYmplY3QuYXNzaWduKHt9LGNvbmZpZy5zdGF0ZSksY29uZmlnLnBhcmFtZXRlcnMpKTtcclxuICAgICAgdGhpcy5hZGRJdGVtcyhuZXdfb2JqLmNvbWJpbmVkT2JqZWN0cygpKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVU5LTk9XTiBUWVBFIEFUVEVNUFRFRCBUTyBMT0FEOiBcIiArIGNvbmZpZy50eXBlKVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBhZGRJdGVtKG86b2JqLCBsaXN0ID0gdGhpcy5vYmplY3RzKXtcclxuICAgIGF3YWl0IG8ubG9hZCgpO1xyXG4gICAgby5nYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgbGlzdC5wdXNoKG8pO1xyXG4gICAgaWYoREVCVUcgJiYgbGlzdCA9PT0gdGhpcy5vYmplY3RzKXtcclxuICAgICAgZGVidWdfdXBkYXRlX29ial9saXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGFkZEl0ZW1zKG86b2JqW10sIGxpc3QgPSB0aGlzLm9iamVjdHMpe1xyXG4gICAgZm9yKGxldCBvYiBvZiBvKXtcclxuICAgICAgb2IuZ2FtZSA9IHRoaXMuZ2FtZTtcclxuICAgIH1cclxuICAgIGF3YWl0IFByb21pc2UuYWxsKG8ubWFwKChhKT0+YS5sb2FkKCkpKTtcclxuICAgIGxpc3QucHVzaCguLi5vKTtcclxuICAgIGlmKERFQlVHICYmIGxpc3QgPT09IHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBkZWxldGVJdGVtKGlkOnN0cmluZywgbGlzdCA9IHRoaXMub2JqZWN0cyl7XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCBsaXN0Lmxlbmd0aDthKyspe1xyXG4gICAgICBpZihsaXN0W2FdLmlkID09PSBpZCl7XHJcbiAgICAgICAgbGlzdC5zcGxpY2UoYSwxKVxyXG4gICAgICAgIGEtLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoREVCVUcgJiYgbGlzdCA9PT0gdGhpcy5vYmplY3RzKXtcclxuICAgICAgZGVidWdfdXBkYXRlX29ial9saXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlZ2lzdGVyUGFydGljbGVzKCl7XHJcblxyXG4gIH1cclxuICBiaW5kQ29udHJvbChrZXk6c3RyaW5nLHg6ZXhlY190eXBlLGZ1bmM6Y29udHJvbF9mdW5jLGludGVydmFsOm51bWJlciA9IDEpe1xyXG4gICAgdGhpcy5iaW5kcy5wdXNoKEJpbmQoa2V5LGZ1bmMseCxpbnRlcnZhbCkpOyBcclxuICB9XHJcbiAgY2hlY2tDb2xsaXNpb25zKGJveDpjb2xsaXNpb25fYm94LGV4ZW1wdD86c3RyaW5nW10pOm9ialtde1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICByZW5kZXJfY29sbGlzaW9uX2JveChib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoZWNrX2FsbF9jb2xsaXNpb25zKGJveCx0aGlzLm9iamVjdHMsZXhlbXB0KTtcclxuICB9XHJcbiAgY2hlY2tPYmplY3RzKGJveDpjb2xsaXNpb25fYm94LGV4ZW1wdD86c3RyaW5nW10sbGlzdD10aGlzLm9iamVjdHMpe1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICByZW5kZXJfY29sbGlzaW9uX2JveChib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoZWNrX2FsbF9vYmplY3RzKGJveCxsaXN0LGV4ZW1wdCk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyQ29udHJvbHMoKXtcclxuXHJcbiAgfVxyXG4gIGNsZWFudXAoKXtcclxuXHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIGZvcihsZXQgcGFydGljbGUgb2YgdGhpcy5wYXJ0aWNsZXNfYXJyKXtcclxuICAgICAgcGFydGljbGUuc3RhdGVmKHRpbWUpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCB0ZXh0X25vZGUgb2YgdGhpcy50ZXh0X25vZGVzKXtcclxuICAgICAgdGV4dF9ub2RlLnN0YXRlZih0aW1lKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgIHZlbG9jaXR5Q29sbGlzaW9uQ2hlY2sodGhpcy5vYmplY3RzW2FdLCB0aGlzLm9iamVjdHMpO1xyXG4gICAgICB0aGlzLm9iamVjdHNbYV0uc3RhdGVmKHRpbWUpO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5nYW1lLnN0YXRlLmNhbWVyYXMpe1xyXG4gICAgICBmb3IobGV0IGNhbWVyYXMgb2YgdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXMpe1xyXG4gICAgICAgIGlmKGNhbWVyYXMuaHVkKXtcclxuICAgICAgICAgIGNhbWVyYXMuaHVkLnN0YXRlZih0aW1lKTtcclxuICAgICAgICB9IFxyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gIH1cclxuICBlbWl0UGFydGljbGUobmFtZTpzdHJpbmcscG9zOnBvc2l0aW9uLGxpZmV0aW1lOm51bWJlcixwb3NfcmFuZ2U6bnVtYmVyKXtcclxuICAgIGxldCBzdGF0ZSA9IHtcclxuICAgICAgcG9zaXRpb246cG9zLFxyXG4gICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFkZEl0ZW0obmV3IFBhcnRpY2xlKHRoaXMucGFydGljbGVzW25hbWVdLHN0YXRlLGxpZmV0aW1lLHBvc19yYW5nZSksIHRoaXMucGFydGljbGVzX2Fycik7XHJcbiAgfVxyXG4gIGdldE9iaihpZDpzdHJpbmcpe1xyXG4gICAgZm9yKGxldCBhID0gMDsgYSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGErKyl7XHJcbiAgICAgIGlmKHRoaXMub2JqZWN0c1thXS5pZCA9PSBpZCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0c1thXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGdldE9iakJ5VGFnKHRhZzpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIHRoaXMub2JqZWN0cy5maWx0ZXIoKGEpPT5hLnRhZ3MuaW5kZXhPZih0YWcpID4gLTEpO1xyXG4gIH1cclxuICByZW5kZXJmKHRpbWU6IG51bWJlcik6IHNwcml0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcHJpdGVfc2hlZXQ6IHRoaXMuYmFja2dyb3VuZCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBzcHJpdGVfaGVpZ2h0OiB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LFxyXG4gICAgICBzcHJpdGVfd2lkdGg6IHRoaXMuYmFja2dyb3VuZC53aWR0aCxcclxuICAgICAgb3BhY2l0eToxXHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSwgcG9zaXRpb24sIGRpbWVuc2lvbnN9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7Z2V0UmFuZEludH0gZnJvbSBcIi4vbWF0aFwiO1xyXG5pbXBvcnQge3BhcnRpY2xlX2VudHJ5fSBmcm9tIFwiLi9yb29tXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHNwcml0ZXtcclxuICBzcHJpdGVfc2hlZXQ6SFRNTEltYWdlRWxlbWVudCxcclxuICBsZWZ0Om51bWJlcixcclxuICB0b3A6bnVtYmVyLFxyXG4gIHNwcml0ZV93aWR0aDpudW1iZXIsXHJcbiAgc3ByaXRlX2hlaWdodDpudW1iZXIsXHJcbiAgb3BhY2l0eTpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwb3NpdGlvbmVkX3Nwcml0ZXtcclxuICBzcHJpdGU6c3ByaXRlLFxyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBQYXJ0aWNsZV9pIGV4dGVuZHMgb2JqX3N0YXRle1xyXG4gIGxpZmV0aW1lOm51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlIGV4dGVuZHMgb2Jqe1xyXG4gIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gIHJhbmRvbV9yYW5nZTpudW1iZXI7XHJcbiAgbWF4X2xpZmV0aW1lOm51bWJlcjtcclxuICBzdGF0ZTpQYXJ0aWNsZV9pO1xyXG4gIHNlbGVjdGVkX3Nwcml0ZTpzcHJpdGU7XHJcbiAgY29uc3RydWN0b3IocGFydDpwYXJ0aWNsZV9lbnRyeSxzdGF0ZTpvYmpfc3RhdGUsbGlmZXRpbWU6bnVtYmVyLHJhbmRvbV9yYW5nZTpudW1iZXIpe1xyXG4gICAgc3VwZXIoc3RhdGUpO1xyXG4gICAgdGhpcy5zdGF0ZS5saWZldGltZSA9IDA7XHJcbiAgICB0aGlzLnNwcml0ZV91cmwgPSBwYXJ0LnNwcml0ZTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gcGFydC5oZWlnaHQ7XHJcbiAgICB0aGlzLndpZHRoID0gcGFydC53aWR0aDtcclxuICAgIHRoaXMubWF4X2xpZmV0aW1lID0gbGlmZXRpbWU7XHJcbiAgICB0aGlzLnJhbmRvbV9yYW5nZSA9IHJhbmRvbV9yYW5nZTtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueCArPSBnZXRSYW5kSW50KC1yYW5kb21fcmFuZ2UvMixyYW5kb21fcmFuZ2UvMik7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKz0gZ2V0UmFuZEludCgtcmFuZG9tX3JhbmdlLzIscmFuZG9tX3JhbmdlLzIpO1xyXG4gIH1cclxuICBkZWxldGUoKXtcclxuICAgIGxldCByb29tID0gdGhpcy5nYW1lLmdldFJvb20oKTtcclxuICAgIHJvb20uZGVsZXRlSXRlbSh0aGlzLmlkLHJvb20ucGFydGljbGVzX2Fycik7XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOm51bWJlcil7XHJcbiAgICB0aGlzLnN0YXRlLmxpZmV0aW1lICs9IHRpbWU7XHJcbiAgICBpZih0aGlzLnN0YXRlLmxpZmV0aW1lID4gdGhpcy5tYXhfbGlmZXRpbWUpe1xyXG4gICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXJmKHRpbWU6bnVtYmVyKTpwb3NpdGlvbmVkX3Nwcml0ZXtcclxuICAgIGlmKCF0aGlzLnNlbGVjdGVkX3Nwcml0ZSl7XHJcbiAgICAgIGxldCBzcHJpdGVzID0gc3ByaXRlX2dlbih0aGlzLnNwcml0ZV9zaGVldCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICBsZXQgcmFuZG9tX3JvdyA9IGdldFJhbmRJbnQoMCxzcHJpdGVzLmxlbmd0aCk7XHJcbiAgICAgIGxldCByYW5kb21fY29sID0gZ2V0UmFuZEludCgwLHNwcml0ZXNbcmFuZG9tX3Jvd10ubGVuZ3RoKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZF9zcHJpdGUgPSBzcHJpdGVzW3JhbmRvbV9yb3ddW3JhbmRvbV9jb2xdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RlZF9zcHJpdGUub3BhY2l0eSA9IDEgLSB0aGlzLnN0YXRlLmxpZmV0aW1lL3RoaXMubWF4X2xpZmV0aW1lO1xyXG4gICAgcmV0dXJue1xyXG4gICAgICB4OnRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgIHNwcml0ZTp0aGlzLnNlbGVjdGVkX3Nwcml0ZSBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcHJpdGVfZ2VuKHNwcml0ZV9zaGVldDpIVE1MSW1hZ2VFbGVtZW50LHNwcml0ZV93aWR0aDpudW1iZXIsc3ByaXRlX2hlaWdodDpudW1iZXIpOkFycmF5PEFycmF5PHNwcml0ZT4+e1xyXG4gIGxldCB3aWR0aCA9IHNwcml0ZV9zaGVldC53aWR0aDtcclxuICBsZXQgaGVpZ2h0ID0gc3ByaXRlX3NoZWV0LmhlaWdodDtcclxuICBsZXQgc3ByaXRlczpBcnJheTxBcnJheTxzcHJpdGU+PiA9IFtdO1xyXG4gIGZvcihsZXQgYiA9IDA7IGIgPCBoZWlnaHQ7YiArPSBzcHJpdGVfaGVpZ2h0KXtcclxuICAgIHNwcml0ZXMucHVzaChbXSk7XHJcbiAgICBmb3IobGV0IGEgPSAwOyBhIDwgd2lkdGg7YSArPSBzcHJpdGVfd2lkdGgpe1xyXG4gICAgICBzcHJpdGVzW2JdLnB1c2goe1xyXG4gICAgICAgIHNwcml0ZV9zaGVldCxcclxuICAgICAgICBsZWZ0OmEsXHJcbiAgICAgICAgdG9wOmIgKiBzcHJpdGVfaGVpZ2h0LFxyXG4gICAgICAgIHNwcml0ZV9oZWlnaHQsXHJcbiAgICAgICAgc3ByaXRlX3dpZHRoLFxyXG4gICAgICAgIG9wYWNpdHk6MVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc3ByaXRlcztcclxufVxyXG5cclxuIiwiZXhwb3J0IGxldCBERUJVRyA9IHRydWU7XHJcbmV4cG9ydCBsZXQgUEFVU0VEID0gdHJ1ZTtcclxuaW1wb3J0IHtvYmoscGFyYW1zfSBmcm9tIFwiLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlLCBwb3NpdGlvbn0gZnJvbSBcIi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7cm9vbX0gZnJvbSBcIi4vbGliL3Jvb21cIjtcclxuaW1wb3J0IHtwb3NpdGlvbmVkX3Nwcml0ZSwgc3ByaXRlfSBmcm9tIFwiLi9saWIvc3ByaXRlXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi9saWIvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7c3ByaXRlX3JlbmRlcmVyLHJlY3RfcmVuZGVyZXIsIHN0cm9rZWRfcmVjdF9yZW5kZXJlciwgaHVkX3RleHRfcmVuZGVyZXIsIENhbWVyYSwgdGV4dF9yZW5kZXJlcn0gZnJvbSBcIi4vbGliL3JlbmRlclwiO1xyXG5pbXBvcnQge0hVRH0gZnJvbSBcIi4vbGliL2h1ZFwiO1xyXG5pbXBvcnQge0V4ZWN1dGVSZXBlYXRCaW5kcyxkZWJ1Z19iaW5kcyxidHlwZSxleGVjX3R5cGUsIFBvbGxfTW91c2UsIEJpbmQsIGhlbGRfa2V5cywgVW5iaW5kfSBmcm9tIFwiLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHtEaXN0YW5jZX0gZnJvbSBcIi4vbGliL21hdGhcIjtcclxuaW1wb3J0IHtpbml0X2NsaWNrX2hhbmRsZXJ9IGZyb20gXCIuL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQge2RlYnVnX3VwZGF0ZV9yb29tX2xpc3QsZGVidWdfdXBkYXRlX29ial9saXN0LGRlYnVnX3N0YXRlZixkZWJ1Z19zZXR1cCxkZWJ1Z191cGRhdGVfcHJlZmFicyxkZWJ1Z191cGRhdGVfcHJvcGVydGllc19lbGVtZW50LCBEZWJ1Z19odWR9IGZyb20gXCIuL2xpYi9kZWJ1Z1wiO1xyXG5pbXBvcnQge3Jvb21zIGFzIHJvb21fbGlzdH0gZnJvbSBcIi4vZ2FtZS9yb29tcy9yb29tc1wiO1xyXG5sZXQgeyBpcGNSZW5kZXJlcn0gPSB3aW5kb3cucmVxdWlyZShcImVsZWN0cm9uXCIpO1xyXG5jb25zdCBwYXRoID0gd2luZG93LnJlcXVpcmUoXCJwYXRoXCIpO1xyXG5sZXQgZnMgPSB3aW5kb3cucmVxdWlyZShcImZzXCIpO1xyXG5leHBvcnQgbGV0IHByb2plY3RfcGF0aCA9IGlwY1JlbmRlcmVyLnNlbmRTeW5jKCdwYXRoLXJlcXVlc3QnLCAncGluZycpWzBdO1xyXG5cclxubGV0IGNhbnZhc19lbGVtZW50OkhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmxldCBjb250ZXh0OkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhc19lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcblxyXG5sZXQgc2NyZWVuX3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmxldCBzY3JlZW5faGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxubGV0IHZ3aWR0aCA9IGNhbnZhc19lbGVtZW50LndpZHRoO1xyXG5sZXQgdmhlaWdodCA9IGNhbnZhc19lbGVtZW50LmhlaWdodDtcclxuXHJcbmltcG9ydCB7Z30gZnJvbSBcIi4vZ2FtZS9tYWluXCI7XHJcblxyXG5cclxuLy9Ib3cgb2Z0ZW4gdGhlIGdhbWUgbG9naWMgbG9vcCBzaG91bGQgcnVuLCBpbiBtaWxsaXNlY29uZHNcclxubGV0IGxvZ2ljX2xvb3BfaW50ZXJ2YWw6bnVtYmVyID0gMTAwMC82MDsgIFxyXG5cclxubGV0IGxhc3RfdGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG5sZXQgbGFzdF9yZW5kZXJfdGltZSA9IDA7XHJcblxyXG5pbnRlcmZhY2UgZGltZW5zaW9uc3tcclxuICBoZWlnaHQ6bnVtYmVyLFxyXG4gIHdpZHRoOm51bWJlclxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFNjcmVlbkRpbWVuc2lvbnMgKCk6ZGltZW5zaW9uc3tcclxuICByZXR1cm4oe1xyXG4gICAgd2lkdGg6c2NyZWVuX3dpZHRoLFxyXG4gICAgaGVpZ2h0OnNjcmVlbl9oZWlnaHRcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Vmlld3BvcnREaW1lbnNpb25zICgpOmRpbWVuc2lvbnN7XHJcbiAgcmV0dXJuKHtcclxuICAgIGhlaWdodDpjYW52YXNfZWxlbWVudC5oZWlnaHQsXHJcbiAgICB3aWR0aDpjYW52YXNfZWxlbWVudC53aWR0aFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgdmlld3BvcnQgPSB7XHJcbiAgaGVpZ2h0OkdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodCxcclxuICB3aWR0aDpHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aFxyXG59XHJcblxyXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgdmlld3BvcnQuaGVpZ2h0ID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0XHJcbiAgdmlld3BvcnQud2lkdGggPSBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVidWcoeDpib29sZWFuKXtcclxuICBERUJVRyA9IHg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQYXVzZWQoeDpib29sZWFuKXtcclxuICBQQVVTRUQgPSB4O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyX2NvbGxpc2lvbl9ib3ggPSAoYTpjb2xsaXNpb25fYm94KSA9PiB7XHJcbiAgYm94ZXMucHVzaChhKTtcclxufVxyXG5cclxubGV0IGJveGVzOkFycmF5PGNvbGxpc2lvbl9ib3g+ID0gW107XHJcblxyXG5leHBvcnQgbGV0IGRlZXAgPSAoYTphbnkpID0+e1xyXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGEpKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIGRlYnVnX2FjdGlvbntcclxuICBwcm9wZXJ0eTpzdHJpbmcsXHJcbiAgb2xkOnN0cmluZyxcclxuICBuZXc6c3RyaW5nLFxyXG4gIGVsZW1lbnQ6b2JqXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZGVidWdfdmFyc3tcclxuICB0YXJnZXQ6SFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgY2FtZXJhOkNhbWVyYSxcclxuICBsYXN0X2NsaWNrZWQ6SFRNTEVsZW1lbnQsXHJcbiAgc2VsZWN0ZWRfZWxlbWVudF9pbml0aWFsX3NjYWxpbmc6ZGltZW5zaW9ucyxcclxuICBzZWxlY3RlZF9lbGVtZW50Om9iaixcclxuICBzZWxlY3RlZF9lbGVtZW50X29mZnNldDpwb3NpdGlvbixcclxuICByb3RhdGlvbl9lbGVtZW50Om9iaixcclxuICBzZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ6b2JqLFxyXG4gIG1pZGRsZV9wb3NpdGlvbjpwb3NpdGlvbixcclxuICBjbGlja19wb3NpdGlvbjpwb3NpdGlvbixcclxuICBhY3Rpb25zX3N0YWNrOmRlYnVnX2FjdGlvbltdLFxyXG4gIGN1cnJlbnRfYWN0aW9uOmRlYnVnX2FjdGlvblxyXG59XHJcblxyXG5leHBvcnQgbGV0IERFQlVHX3Y6ZGVidWdfdmFycztcclxuXHJcbmludGVyZmFjZSBnYW1lX3N0YXRlPFQ+e1xyXG4gIGxvZ2ljOm51bWJlcixcclxuICBjb250ZXh0OkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICBjdXJyZW50X3Jvb206cm9vbTx1bmtub3duPixcclxuICBjYW1lcmFzOkFycmF5PENhbWVyYT4sXHJcbiAgY2FudmFzOkhUTUxDYW52YXNFbGVtZW50LFxyXG4gIGdhbWU6VFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCByb29tczphbnlbXSA9IFtdO1xyXG5leHBvcnQgbGV0IG9iamVjdHM6YW55W107XHJcblxyXG5leHBvcnQgY2xhc3MgZ2FtZTxUPntcclxuICBzdGF0ZTpnYW1lX3N0YXRlPFQ+O1xyXG4gIGNvbnRleHQ6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIG9mZnNjcmVlbl9jYW52YXM6SFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgb2Zmc2NyZWVuX2NvbnRleHQ6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIHByb3RvdHlwZXM6QXJyYXk8b2JqPiA9IFtdO1xyXG4gIHJvb21zOkFycmF5PGFueT4gPSBbXTtcclxuICBpc1JlbmRlcmluZyA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKGN0eDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsaW5pdF9zdGF0ZTpULGluaXQ6YW55KXtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhbnZhczpjYW52YXNfZWxlbWVudCxcclxuICAgICAgbG9naWM6dW5kZWZpbmVkLFxyXG4gICAgICBjb250ZXh0OmN0eCxcclxuICAgICAgY2FtZXJhczpbXHJcbiAgICAgIF0sXHJcbiAgICAgIGN1cnJlbnRfcm9vbTogdW5kZWZpbmVkLFxyXG4gICAgICBnYW1lOmluaXRfc3RhdGVcclxuICAgIH1cclxuICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0ID0gdGhpcy5vZmZzY3JlZW5fY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgZGVidWdfc2V0dXAoKTsgXHJcbiAgICAgIERFQlVHX3YgPSB7XHJcbiAgICAgICAgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnX3RhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcclxuICAgICAgICBjYW1lcmE6IG5ldyBDYW1lcmEoe1xyXG4gICAgICAgICAgeDowLFxyXG4gICAgICAgICAgeTowLFxyXG4gICAgICAgICAgZGltZW5zaW9uczp7XHJcbiAgICAgICAgICAgIGhlaWdodDp2aWV3cG9ydC5oZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOnZpZXdwb3J0LndpZHRoXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2NhbGluZzoxLFxyXG4gICAgICAgICAgZGVidWc6dHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAse1xyXG4gICAgICAgICAgeDoxLFxyXG4gICAgICAgICAgeTowLFxyXG4gICAgICAgICAgd2lkdGg6MSxcclxuICAgICAgICAgIGhlaWdodDoxXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbGFzdF9jbGlja2VkOnVuZGVmaW5lZCxcclxuICAgICAgICBzZWxlY3RlZF9lbGVtZW50OnVuZGVmaW5lZCxcclxuICAgICAgICBzZWxlY3RlZF9lbGVtZW50X29mZnNldDp1bmRlZmluZWQsXHJcbiAgICAgICAgcm90YXRpb25fZWxlbWVudDp1bmRlZmluZWQsXHJcbiAgICAgICAgbWlkZGxlX3Bvc2l0aW9uOnVuZGVmaW5lZCxcclxuICAgICAgICBjbGlja19wb3NpdGlvbjp1bmRlZmluZWQsXHJcbiAgICAgICAgc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50OnVuZGVmaW5lZCxcclxuICAgICAgICBzZWxlY3RlZF9lbGVtZW50X2luaXRpYWxfc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX0sXHJcbiAgICAgICAgYWN0aW9uc19zdGFjazpbXSxcclxuICAgICAgICBjdXJyZW50X2FjdGlvbjp1bmRlZmluZWRcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgREVCVUdfdi5jYW1lcmEuaHVkID0gbmV3IERlYnVnX2h1ZCgpO1xyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJtb3VzZTBkb3duXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDowLFxyXG4gICAgICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgICAgICBpZihERUJVR192LnNlbGVjdGVkX2VsZW1lbnQpe1xyXG4gICAgICAgICAgICBERUJVR192LnNlbGVjdGVkX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShERUJVR192LnRhcmdldCxERUJVR192LmNhbWVyYSk7XHJcbiAgICAgICAgICAgIERFQlVHX3YuY2xpY2tfcG9zaXRpb24gPSBtb3VzZTtcclxuICAgICAgICAgICAgbGV0IGFsTF9jbGlja2VkID0gdGhpcy5nZXRSb29tKCkuY2hlY2tPYmplY3RzKHtcclxuICAgICAgICAgICAgICB4Om1vdXNlLngsXHJcbiAgICAgICAgICAgICAgeTptb3VzZS55LFxyXG4gICAgICAgICAgICAgIGhlaWdodDoxLFxyXG4gICAgICAgICAgICAgIHdpZHRoOjFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IGNsaWNrZWQ7XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZCA9IGFsTF9jbGlja2VkLmZpbHRlcigoZWxlKT0+ZWxlID09IERFQlVHX3Yuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50KVxyXG4gICAgICAgICAgICBpZihmaWx0ZXJlZC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICBjbGlja2VkID0gZmlsdGVyZWRbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgIGNsaWNrZWQgPSBhbExfY2xpY2tlZFswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjbGlja2VkKXtcclxuICAgICAgICAgICAgICBpZihoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSl7XHJcbiAgICAgICAgICAgICAgICBERUJVR192LmN1cnJlbnRfYWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICBlbGVtZW50OmNsaWNrZWQsXHJcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5Olwic2NhbGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBvbGQ6SlNPTi5zdHJpbmdpZnkoY2xpY2tlZC5zY2FsaW5nKSxcclxuICAgICAgICAgICAgICAgICAgbmV3OnVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBERUJVR192LmN1cnJlbnRfYWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICBlbGVtZW50OmNsaWNrZWQsXHJcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5OlwicG9zaXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgb2xkOkpTT04uc3RyaW5naWZ5KCg8b2JqX3N0YXRlPmNsaWNrZWQuc3RhdGUpLnBvc2l0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgbmV3OnVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBERUJVR192LnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudD0gY2xpY2tlZDtcclxuICAgICAgICAgICAgICBkZWJ1Z191cGRhdGVfcHJvcGVydGllc19lbGVtZW50KClcclxuICAgICAgICAgICAgICBERUJVR192LnNlbGVjdGVkX2VsZW1lbnQgPSBjbGlja2VkO1xyXG4gICAgICAgICAgICAgIERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudF9pbml0aWFsX3NjYWxpbmcgPSBjbGlja2VkLnN0YXRlLnNjYWxpbmc7XHJcbiAgICAgICAgICAgICAgREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50X29mZnNldCA9IHtcclxuICAgICAgICAgICAgICAgIHg6IG1vdXNlLnggLSAoPG9ial9zdGF0ZT5jbGlja2VkLnN0YXRlKS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogbW91c2UueSAtICg8b2JqX3N0YXRlPmNsaWNrZWQuc3RhdGUpLnBvc2l0aW9uLnlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2UsXHJcbiAgICAgICAgY2FtZXJhOkRFQlVHX3YuY2FtZXJhXHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJtb3VzZTF1cFwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgICAgaWQ6NSxcclxuICAgICAgICBmdW5jdGlvbjooKT0+e1xyXG4gICAgICAgICAgREVCVUdfdi5taWRkbGVfcG9zaXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgICAgIGNhbWVyYTpERUJVR192LmNhbWVyYVxyXG4gICAgICB9KTtcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwibW91c2UxZG93blwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgICAgaWQ6NixcclxuICAgICAgICBmdW5jdGlvbjooKT0+e1xyXG4gICAgICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShERUJVR192LnRhcmdldCxERUJVR192LmNhbWVyYSk7XHJcbiAgICAgICAgICBERUJVR192Lm1pZGRsZV9wb3NpdGlvbiA9IG1vdXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgICAgICBjYW1lcmE6REVCVUdfdi5jYW1lcmFcclxuICAgICAgfSk7XHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIm1vdXNlMHVwXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgICAgICBpZihERUJVR192LnNlbGVjdGVkX2VsZW1lbnQpe1xyXG4gICAgICAgICAgICBpZihERUJVR192LmN1cnJlbnRfYWN0aW9uLnByb3BlcnR5ID09IFwic2NhbGluZ1wiKXtcclxuICAgICAgICAgICAgICBERUJVR192LmN1cnJlbnRfYWN0aW9uLm5ldyA9IEpTT04uc3RyaW5naWZ5KERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5zY2FsaW5nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoREVCVUdfdi5jdXJyZW50X2FjdGlvbi5wcm9wZXJ0eSA9PSBcInBvc2l0aW9uXCIpe1xyXG4gICAgICAgICAgICAgIERFQlVHX3YuY3VycmVudF9hY3Rpb24ubmV3ID0gSlNPTi5zdHJpbmdpZnkoKDxvYmpfc3RhdGU+REVCVUdfdi5zZWxlY3RlZF9lbGVtZW50LnN0YXRlKS5wb3NpdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgREVCVUdfdi5hY3Rpb25zX3N0YWNrLnB1c2goREVCVUdfdi5jdXJyZW50X2FjdGlvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgICAgICBjYW1lcmE6REVCVUdfdi5jYW1lcmFcclxuICAgICAgfSk7XHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIm1vdXNlMmRvd25cIixcclxuICAgICAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgICAgIGlkOjMsXHJcbiAgICAgICAgZnVuY3Rpb246KCk9PntcclxuICAgICAgICAgIGlmKERFQlVHX3Yucm90YXRpb25fZWxlbWVudCl7XHJcbiAgICAgICAgICAgIERFQlVHX3Yucm90YXRpb25fZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKERFQlVHX3YudGFyZ2V0LERFQlVHX3YuY2FtZXJhKTtcclxuICAgICAgICAgICAgbGV0IGNsaWNrZWQgPSB0aGlzLmdldFJvb20oKS5jaGVja09iamVjdHMoe1xyXG4gICAgICAgICAgICAgIHg6bW91c2UueCxcclxuICAgICAgICAgICAgICB5Om1vdXNlLnksXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjEsXHJcbiAgICAgICAgICAgICAgd2lkdGg6MVxyXG4gICAgICAgICAgICB9KVswXVxyXG4gICAgICAgICAgICBpZihjbGlja2VkKXtcclxuICAgICAgICAgICAgICBERUJVR192LnJvdGF0aW9uX2VsZW1lbnQgPSBjbGlja2VkO1xyXG4gICAgICAgICAgICAgIERFQlVHX3YuY3VycmVudF9hY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OkRFQlVHX3Yucm90YXRpb25fZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5Olwicm90YXRpb25cIixcclxuICAgICAgICAgICAgICAgIG9sZDpKU09OLnN0cmluZ2lmeShERUJVR192LnJvdGF0aW9uX2VsZW1lbnQucm90YXRpb24pLFxyXG4gICAgICAgICAgICAgICAgbmV3OnVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgICAgICBjYW1lcmE6REVCVUdfdi5jYW1lcmFcclxuICAgICAgfSk7XHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIm1vdXNlMnVwXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDo0LFxyXG4gICAgICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgICAgICBERUJVR192LmN1cnJlbnRfYWN0aW9uLm5ldyA9IEpTT04uc3RyaW5naWZ5KERFQlVHX3Yucm90YXRpb25fZWxlbWVudC5zdGF0ZS5yb3RhdGlvbilcclxuICAgICAgICAgIERFQlVHX3YuYWN0aW9uc19zdGFjay5wdXNoKERFQlVHX3YuY3VycmVudF9hY3Rpb24pO1xyXG4gICAgICAgICAgREVCVUdfdi5yb3RhdGlvbl9lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgICAgICBjYW1lcmE6REVCVUdfdi5jYW1lcmFcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgbGVmdF9mdW5jID0gKCk9PntcclxuICAgICAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDE6MDtcclxuICAgICAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICAgICAgREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggLSAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMS9ERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCByaWdodF9mdW5jID0gKCk9PntcclxuICAgICAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDE6MDtcclxuICAgICAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICAgICAgREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMS9ERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBkb3duX2Z1bmMgPSAoKT0+e1xyXG4gICAgICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMTowO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSAmJiBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICAgICAgREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgLSAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMS9ERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCB1cF9mdW5jID0gKCk9PntcclxuICAgICAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDE6MDtcclxuICAgICAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICAgICAgREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgKyAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMS9ERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBzY3JvbGxfdXAgPSAoKT0+e1xyXG4gICAgICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgICAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nID0gREVCVUdfdi5jYW1lcmEuc3RhdGUuc2NhbGluZyArIDAuMDU7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHNhdmVfZnVuYyA9ICgpPT57XHJcbiAgICAgICAgbGV0IGN0cmxfaGVsZCA9IGhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdO1xyXG4gICAgICAgIGlmKGN0cmxfaGVsZCAmJiBQQVVTRUQpe1xyXG4gICAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmdldFJvb20oKS5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICAgICAgbGV0IGEgPSBwYXRoLmpvaW4oYCR7cHJvamVjdF9wYXRofWAsYC4uL3Jvb21zLyR7bmFtZX0uanNvbmApO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhhLEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0Um9vbSgpLmV4cG9ydFN0YXRlQ29uZmlnKCkpKTtcclxuICAgICAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgV1JJVElORyBST09NIElORk8gRklMRS5cIik7IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYWxlcnQoXCJTYXZlZFwiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGN0cmxfaGVsZCAmJiAhUEFVU0VEKXtcclxuICAgICAgICAgIGFsZXJ0KFwicGF1c2UgdG8gZW5hYmxlIHNhdmluZy5cIilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHNjcm9sbF9kb3duID0gKCk9PntcclxuICAgICAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiICYmIERFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPiAwLjA1KVxyXG4gICAgICAgICAgREVCVUdfdi5jYW1lcmEuc3RhdGUuc2NhbGluZyA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcgLSAwLjA1O1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB1bmRvX2Z1bmMgPSAoKT0+e1xyXG4gICAgICAgIGlmKGhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdKXtcclxuICAgICAgICAgIGxldCBjdXJyOmRlYnVnX2FjdGlvbiA9IERFQlVHX3YuYWN0aW9uc19zdGFjay5wb3AoKTtcclxuICAgICAgICAgIGlmKGN1cnIpe1xyXG4gICAgICAgICAgICBpZihjdXJyLnByb3BlcnR5ID09IFwicG9zaXRpb25cIil7XHJcbiAgICAgICAgICAgICAgY3Vyci5lbGVtZW50LnN0YXRlLnBvc2l0aW9uID0gSlNPTi5wYXJzZShjdXJyLm9sZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihjdXJyLnByb3BlcnR5ID09PSBcInJvdGF0aW9uXCIpe1xyXG4gICAgICAgICAgICAgIGN1cnIuZWxlbWVudC5yb3RhdGlvbiA9IEpTT04ucGFyc2UoY3Vyci5vbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoY3Vyci5wcm9wZXJ0eSA9PT0gXCJzY2FsaW5nXCIpe1xyXG4gICAgICAgICAgICAgIGN1cnIuZWxlbWVudC5zY2FsaW5nID0gSlNPTi5wYXJzZShjdXJyLm9sZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwiS2V5QVwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgICAgaWQ6QmluZChcIktleUFcIixsZWZ0X2Z1bmMsZXhlY190eXBlLnJlcGVhdCwxKSxcclxuICAgICAgICBmdW5jdGlvbjpsZWZ0X2Z1bmMsXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUucmVwZWF0XHJcbiAgICAgIH0pXHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIktleURcIixcclxuICAgICAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgICAgIGlkOkJpbmQoXCJLZXlEXCIscmlnaHRfZnVuYyxleGVjX3R5cGUucmVwZWF0LDEpLFxyXG4gICAgICAgIGZ1bmN0aW9uOnJpZ2h0X2Z1bmMsXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUucmVwZWF0XHJcbiAgICAgIH0pXHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIktleVdcIixcclxuICAgICAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgICAgIGlkOkJpbmQoXCJLZXlXXCIsdXBfZnVuYyxleGVjX3R5cGUucmVwZWF0LDEpLFxyXG4gICAgICAgIGZ1bmN0aW9uOnVwX2Z1bmMsXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUucmVwZWF0XHJcbiAgICAgIH0pXHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIktleVNcIixcclxuICAgICAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgICAgIGlkOkJpbmQoXCJLZXlTXCIsZG93bl9mdW5jLGV4ZWNfdHlwZS5yZXBlYXQsMSksXHJcbiAgICAgICAgZnVuY3Rpb246ZG93bl9mdW5jLFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLnJlcGVhdFxyXG4gICAgICB9KVxyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJzY3JvbGx1cFwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgICAgaWQ6QmluZChcInNjcm9sbHVwXCIsc2Nyb2xsX3VwLGV4ZWNfdHlwZS5vbmNlLDEpLFxyXG4gICAgICAgIGZ1bmN0aW9uOnNjcm9sbF91cCxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlXHJcbiAgICAgIH0pXHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcInNjcm9sbGRvd25cIixcclxuICAgICAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgICAgIGlkOkJpbmQoXCJzY3JvbGxkb3duXCIsc2Nyb2xsX2Rvd24sZXhlY190eXBlLm9uY2UsMSksXHJcbiAgICAgICAgZnVuY3Rpb246c2Nyb2xsX2Rvd24sXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZVxyXG4gICAgICB9KVxyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJLZXlTXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5rZXlib2FyZCxcclxuICAgICAgICBpZDpCaW5kKFwiS2V5U1wiLHNhdmVfZnVuYyxleGVjX3R5cGUub25jZSwxKSxcclxuICAgICAgICBmdW5jdGlvbjpzYXZlX2Z1bmMsXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZVxyXG4gICAgICB9KVxyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJLZXlaXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5rZXlib2FyZCxcclxuICAgICAgICBpZDpCaW5kKFwiS2V5WlwiLHVuZG9fZnVuYyxleGVjX3R5cGUub25jZSwxKSxcclxuICAgICAgICBmdW5jdGlvbjp1bmRvX2Z1bmMsXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZVxyXG4gICAgICB9KVxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XHJcbiAgICAgICAgaWYoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XHJcbiAgICAgICAgICBERUJVR192Lmxhc3RfY2xpY2tlZCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZV9idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XHJcbiAgICAgICAgUEFVU0VEID0gIVBBVVNFRDtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgaWYodGhpcy5nZXRSb29tKCkpe1xyXG4gICAgICAgICAgZGVidWdfc3RhdGVmKDE2LjY2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sMTYuNjYpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICBpbml0KHRoaXMpO1xyXG4gIH1cclxuICByZW5kZXIodDpudW1iZXIpe1xyXG4gICAgbGV0IHRpbWUgPSB0IC0gbGFzdF9yZW5kZXJfdGltZVxyXG4gICAgbGFzdF9yZW5kZXJfdGltZSA9IHQ7XHJcbiAgICBsZXQgYWxsX2NhbWVyYXMgPSB0aGlzLnN0YXRlLmNhbWVyYXM7XHJcbiAgICBsZXQgZGVidWdfaW5kZXggPSAtMTtcclxuICAgIGlmKERFQlVHKXtcclxuICAgICAgYWxsX2NhbWVyYXMgPSBbLi4uYWxsX2NhbWVyYXMsREVCVUdfdi5jYW1lcmFdXHJcbiAgICAgIGRlYnVnX2luZGV4ID0gYWxsX2NhbWVyYXMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IDA7YSA8ICBhbGxfY2FtZXJhcy5sZW5ndGg7YSsrKXtcclxuICAgICAgbGV0IGNhbWVyYSA9IGFsbF9jYW1lcmFzW2FdO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jYW52YXMuaGVpZ2h0ID0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0O1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jYW52YXMud2lkdGggPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aDtcclxuICAgICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dC5jbGVhclJlY3QoMCwwLGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoLGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCk7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NvbnRleHQuZmlsbFN0eWxlPVwiYmxhY2tcIjtcclxuICAgICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dC5maWxsUmVjdCgwLDAsY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgsY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgbGV0IGNhbWVyYV9ib3ggPSB7XHJcbiAgICAgICAgeDpjYW1lcmEuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOmNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpLFxyXG4gICAgICAgIGhlaWdodDpjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZylcclxuICAgICAgfTtcclxuICAgICAgbGV0IHBhcnRpY2xlX2NvbGxpZGVzID0gdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uY2hlY2tPYmplY3RzKGNhbWVyYV9ib3gsW10sdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ucGFydGljbGVzX2Fycik7XHJcbiAgICAgIGxldCBjYW1lcmFfY29sbGlkZXJzID0gWy4uLnRoaXMuc3RhdGUuY3VycmVudF9yb29tLmNoZWNrT2JqZWN0cyhjYW1lcmFfYm94KSwuLi5wYXJ0aWNsZV9jb2xsaWRlc107XHJcbiAgICAgIGxldCByZW5kZXJfYXJncyA9IHtcclxuICAgICAgICBjb250ZXh0OnRoaXMub2Zmc2NyZWVuX2NvbnRleHQsXHJcbiAgICAgICAgY2FtZXJhOmNhbWVyYSxcclxuICAgICAgfTtcclxuICAgICAgc3ByaXRlX3JlbmRlcmVyKHJlbmRlcl9hcmdzLHtcclxuICAgICAgICBzcHJpdGU6dGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ucmVuZGVyZih0aW1lKSxcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgICAgc2NhbGU6e1xyXG4gICAgICAgICAgd2lkdGg6MSxcclxuICAgICAgICAgIGhlaWdodDoxXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGhpdGJveGVzOmNvbGxpc2lvbl9ib3hbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBhIG9mIGNhbWVyYV9jb2xsaWRlcnMuZmlsdGVyKChiKSA9PiBiLnJlbmRlcikuc29ydCgoYSxiKT0+KGEubGF5ZXIgLSBiLmxheWVyKSkpIHtcclxuICAgICAgICBsZXQgcmVuZGVyZWQgPSBhLnJlbmRlclRyYWNrKHQpO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlbmRlcmVkKSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgcG9zaXRpb25lZF9zcHJpdGUgb2YgcmVuZGVyZWQpXHJcbiAgICAgICAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgICAgIHNwcml0ZTpwb3NpdGlvbmVkX3Nwcml0ZS5zcHJpdGUsXHJcbiAgICAgICAgICAgICAgeDogcG9zaXRpb25lZF9zcHJpdGUueCxcclxuICAgICAgICAgICAgICB5OiBwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgICAgICAgIHJvdGF0aW9uOiBhLnN0YXRlLnJvdGF0aW9uLFxyXG4gICAgICAgICAgICAgIHNjYWxlOmEuc3RhdGUuc2NhbGluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBsZXQgcG9zaXRpb25lZF9zcHJpdGUgPSByZW5kZXJlZCBhcyBwb3NpdGlvbmVkX3Nwcml0ZTtcclxuICAgICAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgICBzcHJpdGU6IHBvc2l0aW9uZWRfc3ByaXRlLnNwcml0ZSxcclxuICAgICAgICAgICAgeDogcG9zaXRpb25lZF9zcHJpdGUueCxcclxuICAgICAgICAgICAgeTogcG9zaXRpb25lZF9zcHJpdGUueSxcclxuICAgICAgICAgICAgcm90YXRpb246IGEuc3RhdGUucm90YXRpb24sXHJcbiAgICAgICAgICAgIHNjYWxlOmEuc3RhdGUuc2NhbGluZ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKERFQlVHICYmIGEuY29sbGlzaW9uKXtcclxuICAgICAgICAgIGhpdGJveGVzLnB1c2goLi4uYS5nZXRBbGxDb2xsaXNpb25Cb3hlcygpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBub2RlIG9mIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnRleHRfbm9kZXMpe1xyXG4gICAgICAgIHRleHRfcmVuZGVyZXIocmVuZGVyX2FyZ3Mse1xyXG4gICAgICAgICAgeDpub2RlLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICB5Om5vZGUuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICAgIGZvbnQ6bm9kZS5yZW5kZXJmKHQpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBpZihjYW1lcmEuaHVkKXtcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBjYW1lcmEuaHVkLmdyYXBoaWNfZWxlbWVudHM7XHJcbiAgICAgICAgbGV0IHRleHRfZWxlbWVudHMgPSBjYW1lcmEuaHVkLnRleHRfZWxlbWVudHM7XHJcbiAgICAgICAgZm9yKGxldCBhIG9mIGdyYXBoaWNzKXtcclxuICAgICAgICAgIGxldCByZW5kZXJlZCA9IGEucmVuZGVyVHJhY2sodCk7XHJcbiAgICAgICAgICBpZihhLnJlbmRlcil7XHJcbiAgICAgICAgICAgIGZvcihsZXQgcG9zaXRpb25lZF9zcHJpdGUgb2YgcmVuZGVyZWQpe1xyXG4gICAgICAgICAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncyx7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGU6cG9zaXRpb25lZF9zcHJpdGUuc3ByaXRlLFxyXG4gICAgICAgICAgICAgICAgeDpwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICAgICAgeTpwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgICAgICAgICAgcm90YXRpb246YS5zdGF0ZS5yb3RhdGlvbixcclxuICAgICAgICAgICAgICAgIHNjYWxlOmEuc3RhdGUuc2NhbGluZ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vcmVuZGVyX2FyZ3MuY29udGV4dCA9IHRoaXMuc3RhdGUuY29udGV4dDtcclxuICAgICAgICBmb3IobGV0IGEgb2YgdGV4dF9lbGVtZW50cyl7XHJcbiAgICAgICAgICBsZXQgc3QgPSBhLnN0YXRlO1xyXG4gICAgICAgICAgaHVkX3RleHRfcmVuZGVyZXIocmVuZGVyX2FyZ3Mse1xyXG4gICAgICAgICAgICB4OnN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6c3QucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgZm9udDphLnJlbmRlcmYodClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChERUJVRyAmJiBjYW1lcmEuc3RhdGUuZGVidWcpIHtcclxuICAgICAgICBsZXQgYm94OiBjb2xsaXNpb25fYm94O1xyXG4gICAgICAgIGxldCBib3hlc19jb3B5ID0gWy4uLmJveGVzXVxyXG4gICAgICAgIHdoaWxlKGJveGVzX2NvcHkubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICBsZXQgYm94ID0gYm94ZXNfY29weS5wb3AoKTtcclxuICAgICAgICAgIGxldCByZWN0ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDpib3gud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDpib3guaGVpZ2h0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHJva2VkX3JlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCxyZWN0LGJveC54LGJveC55LFwiI0ZGMDAwMFwiLDEsY2FtZXJhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUoaGl0Ym94ZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICBsZXQgYm94ID0gaGl0Ym94ZXMucG9wKCk7XHJcbiAgICAgICAgICBsZXQgcmVjdCA9IHtcclxuICAgICAgICAgICAgd2lkdGg6Ym94LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6Ym94LmhlaWdodFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyKHRoaXMub2Zmc2NyZWVuX2NvbnRleHQscmVjdCxib3gueCxib3gueSxcIiMwMDgwMDBcIiwxLGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKERFQlVHX3Yuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50KXtcclxuICAgICAgICAgIGxldCBjb2xsID0gREVCVUdfdi5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQuZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gICAgICAgICAgcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LHt3aWR0aDoyNSxoZWlnaHQ6MjV9LGNvbGwueCxjb2xsLnksXCJza3libHVlXCIsMTAsY2FtZXJhKTtcclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LGNvbGwsY29sbC54LGNvbGwueSxcImJsdWVcIiwxLGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihhICE9PSBkZWJ1Z19pbmRleCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLm9mZnNjcmVlbl9jYW52YXMsY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngsY2FtZXJhLnN0YXRlLnZpZXdwb3J0LnkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgREVCVUdfdi50YXJnZXQuZ2V0Q29udGV4dChcIjJkXCIpLmRyYXdJbWFnZSh0aGlzLm9mZnNjcmVlbl9jYW52YXMsY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngsY2FtZXJhLnN0YXRlLnZpZXdwb3J0LnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihERUJVRylcclxuICAgICAgYm94ZXMgPSBbXTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoYSk9Pnt0aGlzLnJlbmRlcihhKX0pOyBcclxuICB9XHJcbiAgaW5pdGlhbGl6ZSgpe1xyXG4gICAgaW5pdF9jbGlja19oYW5kbGVyKHRoaXMpO1xyXG4gIH1cclxuICBzdGFydF9sb2dpYyhhOm51bWJlcil7XHJcbiAgICByZXR1cm4gd2luZG93LnNldEludGVydmFsKCgpPT57XHJcbiAgICAgIGlmKCFQQVVTRUQpe1xyXG4gICAgICAgIGxldCBuZXdfdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHRpbWVfc2luY2UgPSBuZXdfdGltZS5nZXRUaW1lKCkgLSBsYXN0X3RpbWUuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxhc3RfdGltZSA9IG5ld190aW1lO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY3VycmVudF9yb29tKXtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnN0YXRlZih0aW1lX3NpbmNlKTtcclxuICAgICAgICAgIGlmKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmh1ZCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmh1ZC5zdGF0ZWYodGltZV9zaW5jZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBFeGVjdXRlUmVwZWF0QmluZHMoYSk7XHJcbiAgICB9LGEpO1xyXG4gIH1cclxuICBnZXRSb29tKCl7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb207XHJcbiAgfVxyXG4gIGFzeW5jIGxvYWRSb29tU3RyaW5nKHg6c3RyaW5nKXtcclxuICAgIGZvcihsZXQgYSBvZiBPYmplY3Qua2V5cyhyb29tX2xpc3QpKXtcclxuICAgICAgaWYoYSA9PSB4KXtcclxuICAgICAgICBsZXQgbmV3X3Jvb20gPSA8cm9vbTx7fT4+bmV3IHJvb21fbGlzdFthXSh0aGlzKVxyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFJvb20obmV3X3Jvb20pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkUm9vbSh4OnJvb208dW5rbm93bj4pe1xyXG4gICAgaWYodGhpcy5zdGF0ZS5sb2dpYyl7XHJcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuc3RhdGUubG9naWMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB4LmdhbWUgPSB0aGlzO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20gIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgIHdoaWxlKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ub2JqZWN0c1swXS5kZWxldGUoKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGlkIG9mIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmJpbmRzKXtcclxuICAgICAgICBVbmJpbmQoaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBuZXdfcm9vbSA9IGF3YWl0IHgubG9hZCgpO1xyXG4gICAgeC5yZWdpc3RlckNvbnRyb2xzKCk7XHJcbiAgICB4LnJlZ2lzdGVyUGFydGljbGVzKCk7XHJcbiAgICBpZih0aGlzLnN0YXRlLmxvZ2ljICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5sb2dpYyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlLmxvZ2ljID0gdGhpcy5zdGFydF9sb2dpYyhsb2dpY19sb29wX2ludGVydmFsKVxyXG4gICAgaWYgKERFQlVHKSB7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9yb29tX2xpc3QoKTtcclxuICAgICAgZGVidWdfdXBkYXRlX3ByZWZhYnMoKTtcclxuICAgICAgZGVidWdfdXBkYXRlX29ial9saXN0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbSA9IHg7XHJcblxyXG4gICAgaWYoIXRoaXMuaXNSZW5kZXJpbmcpe1xyXG4gICAgICB0aGlzLnJlbmRlcigwKTtcclxuICAgICAgdGhpcy5pc1JlbmRlcmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=