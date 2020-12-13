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

Object.defineProperty(exports, "__esModule", { value: true });
exports.g = void 0;
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
let canvas_element = document.getElementById("target");
exports.g = new van_1.game(canvas_element.getContext("2d"), {
    test: 0
});
exports.g.loadRoomString("Board");


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

/***/ "./src/game/objects/Board_Label.ts":
/*!*****************************************!*\
  !*** ./src/game/objects/Board_Label.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Board_Label = void 0;
const hud_1 = __webpack_require__(/*! ../../lib/hud */ "./src/lib/hud.ts");
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
const van_1 = __webpack_require__(/*! ../../van */ "./src/van.ts");
class Board_Label extends object_1.obj {
    constructor(state, params = van_1.deep(Board_Label.default_params)) {
        super(state, params);
        this.sprite_url = "./sprites/Error.png";
        this.height = 100;
        this.width = 100;
        this.tags = [];
        this.collision = true;
        this.render = false;
        this.rotation = 0;
        this.scaling = 1;
        this.bound = false;
    }
    statef(time_delta) {
        if (main_1.g.getRoom() && !this.bound) {
            this.bound = true;
            main_1.g.getRoom().text_nodes.push(new hud_1.Text({
                position: this.state.position,
                size: 22,
                scaling: 1,
                font: "Arial",
                color: "white"
            }, () => this.params.character));
            this.tick_state = false;
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
exports.Board_Label = Board_Label;
Board_Label.default_params = {
    character: "A"
};


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
        if (!this.state.has_moved && room.get_piece({ x: cords.x - 1, y: cords.y }).length == 0 && room.get_piece({ x: cords.x - 2, y: cords.y }).length == 0 && room.get_piece({ x: cords.x - 3, y: cords.y }).length == 0) {
            console.log("ya");
            let rook = room.get_piece({ x: cords.x - 4, y: cords.y });
            if (rook.length > 0 && !rook[0].state.has_moved) {
                console.log("no");
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
                if ((x !== 0 || y !== 0) && cords.x + x >= 0 && cords.x + x < 8 && cords.y + y >= 0 && cords.y + y < 8) {
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
        this.save_to_file = false;
        this.tags = ["move"];
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
    drop() {
        if (this.render) {
            let room = main_1.g.state.current_room;
            room.state.selected.state.position = room.state.selected_original_position;
            let p = room.get_piece(this.getCords());
            let s = room.state.selected;
            if (s.state.type === piece_1.piece_type.king && !s.state.has_moved && this.getCords().x === 6) {
                let rooks = room.get_piece({ x: 7, y: s.getCords().y });
                rooks[0].movetoCords({ x: 5, y: s.getCords().y });
            }
            if (s.state.type === piece_1.piece_type.king && !s.state.has_moved && this.getCords().x === 2) {
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
            room.state.selected_original_position = undefined;
        }
    }
    registerControls() {
        this.bindControl("mouse1", controls_1.exec_type.once, () => {
            if (this.render) {
                let room = main_1.g.getRoom();
                room.state.selected_original_position = room.state.selected.state.position;
                this.drop();
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

/***/ "./src/game/objects/Rotator.ts":
/*!*************************************!*\
  !*** ./src/game/objects/Rotator.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotator = void 0;
const box_1 = __webpack_require__(/*! ./box */ "./src/game/objects/box.ts");
class Rotator extends box_1.box {
    statef(time_delta) {
        this.state.rotation += (0.07 * time_delta);
    }
}
exports.Rotator = Rotator;


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
        this.tags = ["piece"];
        this.save_to_file = false;
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
    select() {
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
    }
    bind_controls() {
        /*
        this.bindControl("mouse1",exec_type.once,()=>{
          this.select();
        })
        */
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
                o_state.velocity.x += velocities.x * time / 16;
                o_state.velocity.y += velocities.y * time / 16;
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
const Board_Label_1 = __webpack_require__(/*! ./Board_Label */ "./src/game/objects/Board_Label.ts");
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
const Rotator_1 = __webpack_require__(/*! ./Rotator */ "./src/game/objects/Rotator.ts");
const VertBox_1 = __webpack_require__(/*! ./VertBox */ "./src/game/objects/VertBox.ts");
exports.prefabs = {
    Bishop: Bishop_1.Bishop,
    Board_Label: Board_Label_1.Board_Label,
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
    Rotator: Rotator_1.Rotator,
    VertBox: VertBox_1.VertBox,
};


/***/ }),

/***/ "./src/game/rooms/Board.json":
/*!***********************************!*\
  !*** ./src/game/rooms/Board.json ***!
  \***********************************/
/*! exports provided: objects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"objects\":[{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":-148.82352941176475,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"C\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":-350,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"A\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":50,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"E\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":-250,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"B\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":250,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"G\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":451.40424590888983,\"y\":-50.382574082264455},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":4}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":450,\"y\":-250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":2}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":453.50326797385696,\"y\":-352.764203117144},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":1}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":150,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"F\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":450,\"y\":-153.529411764706},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":3}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":-50,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"D\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":350.0000000000001,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"H\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":449.42105263157896,\"y\":48.85087719298252},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":5}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":451.21592442645107,\"y\":148.40215924426462},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":6}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":451.21592442645095,\"y\":247.5688259109313},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":7}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":451.215924426451,\"y\":349.79104813315354},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":8}}]}");

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
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
const render_1 = __webpack_require__(/*! ../../lib/render */ "./src/lib/render.ts");
const controls_1 = __webpack_require__(/*! ../../lib/controls */ "./src/lib/controls.ts");
const config = __webpack_require__(/*! ./Board.json */ "./src/game/rooms/Board.json");
let cfig = config;
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
        super(game, cfig);
        this.background_url = "./sprites/board.png";
        game.state.cameras = [
            new render_1.Camera({
                x: 0,
                y: 0,
                dimensions: {
                    height: van_1.GetViewportDimensions().height,
                    width: van_1.GetViewportDimensions().width
                },
                scaling: 0.65,
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
            selected_original_position: undefined,
            squares: [],
            pieces: [],
            attacked: [],
            dragging: false
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
        for (let x of this.state.pieces) {
            if (x.state.side === side.white) {
                x.bind_controls();
            }
        }
    }
    registerControls() {
        this.bindControl("mouse0down", controls_1.exec_type.once, () => {
            let mouse = controls_1.Poll_Mouse(main_1.g.state.cameras[0]);
            if (!mouse) {
                return;
            }
            let collisions = main_1.g.getRoom().checkCollisions({
                x: mouse.x,
                y: mouse.y,
                width: 1,
                height: 1
            }, ["move"]);
            if (collisions.length > 0) {
                if (this.state.turn == collisions[0].state.side) {
                    this.state.dragging = true;
                    collisions[0].select();
                    this.state.selected_original_position = Object.assign({}, collisions[0].state.position);
                }
            }
        });
        this.bindControl("mouse0up", controls_1.exec_type.once, () => {
            if (this.state.selected) {
                let collisions = main_1.g.getRoom().checkObjects({
                    x: this.state.selected.state.position.x,
                    y: this.state.selected.state.position.y,
                    width: 1,
                    height: 1
                }, ["piece"]);
                if (collisions.length > 0 && collisions[0].render == true) {
                    collisions[0].drop();
                }
                else {
                    this.state.selected.state.position = this.state.selected_original_position;
                    this.state.dragging = false;
                }
            }
        });
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
                for (let b of attacked) {
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
        if (this.state.selected && this.state.dragging) {
            let mouse = controls_1.Poll_Mouse(main_1.g.state.cameras[0]);
            if (!mouse) {
                return;
            }
            this.state.selected.state.position.x = mouse.x;
            this.state.selected.state.position.y = mouse.y;
        }
        super.statef(a);
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

module.exports = JSON.parse("{\"objects\":[{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":2250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":4250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":2750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":1750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":3750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":3750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":4250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":2750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":3250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":1250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":2250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":4750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":1250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":3250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":1750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":4750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":11700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":36700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":16700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":42700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":32200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":31700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":31200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":38200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":34700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":14700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":13200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":611.5,\"y\":-19},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":26200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":47700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":48200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":14200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":41700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":19200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":11200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":50200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":17200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":42200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":40700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":46700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":38700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":6700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":30200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":47200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":29700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":22200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":32700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":5200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":10200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":20700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":33700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":45200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":30700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":2200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":16200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":15700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":21700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":43200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":49700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":29200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":6200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":28700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":39700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":48700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":21200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":37700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":39200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":18700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":49200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":3200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":46200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":27200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":44700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":23700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":40200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":23200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":7700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":34200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":4700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":36200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":1200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":35200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":37200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":8700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":27700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":33200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":22700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":13700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":9700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":35700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":45700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":10700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":4200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":18200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":43700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":26700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":25200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":2700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":17700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":28200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":41200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":12700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":9200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":12200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":8200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":19700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":25700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":20200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":3700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":44200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":24700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":24200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":15200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":5700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":7200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":1700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"Cursor\",\"state\":{\"position\":{\"x\":-67.68082177348344,\"y\":901.7065412473264},\"velocity\":{\"x\":0,\"y\":-2},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"id\":\"Cursor\"}},{\"type\":\"Player\",\"state\":{\"position\":{\"x\":700,\"y\":150},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"Goomba\",\"state\":{\"position\":{\"x\":500,\"y\":88.03938267526655},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1},\"direction\":0,\"jumping\":false,\"health\":100,\"times_airshot\":0,\"max_times_airshot\":0},\"parameters\":{}}]}");

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
        console.log(time);
        if (!this.state.paused) {
            for (let a = 0; a < this.objects.length; a++) {
                room_1.applyGravity(this.objects[a], -1 * time / 16, -15);
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
                let mouse = controls_1.Poll_Mouse(this.game.state.cameras[0]);
                if (!mouse) {
                    return;
                }
                cursor.state.position.x = mouse.x;
                cursor.state.position.y = mouse.y;
            }
        }
        super.statef(time);
    }
}
exports.Overworld = Overworld;


/***/ }),

/***/ "./src/game/rooms/TestR.json":
/*!***********************************!*\
  !*** ./src/game/rooms/TestR.json ***!
  \***********************************/
/*! exports provided: objects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"objects\":[{\"type\":\"Rotator\",\"state\":{\"position\":{\"x\":0,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}}]}");

/***/ }),

/***/ "./src/game/rooms/TestR.ts":
/*!*********************************!*\
  !*** ./src/game/rooms/TestR.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TestR = void 0;
const room_1 = __webpack_require__(/*! ../../lib/room */ "./src/lib/room.ts");
const config = __webpack_require__(/*! ./TestR.json */ "./src/game/rooms/TestR.json");
let cfig = config;
class TestR extends room_1.room {
    constructor(game) {
        super(game, cfig);
        this.background_url = "https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png";
    }
    registerControls() {
    }
    registerParticles() {
    }
    statef(delta_time) {
        super.statef(delta_time);
    }
}
exports.TestR = TestR;


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
                let mouse = controls_1.Poll_Mouse(this.game.state.cameras[0]);
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
const TestR_1 = __webpack_require__(/*! ./TestR */ "./src/game/rooms/TestR.ts");
const Underworld_1 = __webpack_require__(/*! ./Underworld */ "./src/game/rooms/Underworld.ts");
exports.rooms = {
    Board: Board_1.Board,
    Overworld: Overworld_1.Overworld,
    TestR: TestR_1.TestR,
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
    add(name, url) {
        this.sounds[name] = new Audio(url);
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
const main_1 = __webpack_require__(/*! ../game/main */ "./src/game/main.ts");
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
const debug_1 = __webpack_require__(/*! ./debug */ "./src/lib/debug.ts");
let target = document.getElementById("target");
function init_click_handler(game) {
    window.addEventListener("click", (e) => {
        let mouse = Poll_Mouse(game.state.cameras[0]);
        if (!mouse) {
            return;
        }
        let box = {
            x: mouse.x,
            y: mouse.y,
            height: 1,
            width: 1
        };
        let d;
        if (van_1.DEBUG) {
            if (debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "debug_target") {
                d = [...exports.debug_binds];
            }
            else if (!van_1.PAUSED && debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "target") {
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
        if (debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "target") {
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
        if (debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "target") {
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
        if (debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "target") {
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
        if (debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "target") {
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
        if (debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "target") {
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
    //console.log(e.target)
    last_x = x;
    last_y = y;
    x = e.clientX; //x position within the element.
    y = e.clientY; //y position within the element.
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
function Poll_Mouse(camera, canvas = main_1.g.state.canvas) {
    let height = van_1.GetViewportDimensions().height;
    let wratio = parseFloat(window.getComputedStyle(canvas).width) / van_1.GetViewportDimensions().width;
    let vratio = parseFloat(window.getComputedStyle(canvas).height) / van_1.GetViewportDimensions().height;
    let bounds = canvas.getBoundingClientRect();
    if (x > bounds.left && x < bounds.right && y < bounds.bottom && y > bounds.top) {
        return ({
            x: ((x - bounds.left - camera.state.viewport.x) / wratio / camera.state.scaling + camera.state.position.x - camera.state.dimensions.width / camera.state.scaling / 2),
            y: ((height - (y - bounds.top) / vratio) / camera.state.scaling + camera.state.position.y - camera.state.dimensions.height / camera.state.scaling / 2 - camera.state.viewport.y)
        });
    }
    return undefined;
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
exports.debug_setup = exports.debug_state = exports.debug_update_prefabs = exports.debug_update_obj_list = exports.debug_update_properties_element = exports.debug_update_room_list = exports.debug_statef = exports.Debug_hud = void 0;
let { ipcRenderer } = window.require("electron");
const path = window.require("path");
let fs = window.require("fs");
const prefabs_1 = __webpack_require__(/*! ../game/objects/prefabs */ "./src/game/objects/prefabs.ts");
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
const main_1 = __webpack_require__(/*! ../game/main */ "./src/game/main.ts");
const rooms_1 = __webpack_require__(/*! ../game/rooms/rooms */ "./src/game/rooms/rooms.ts");
const controls_1 = __webpack_require__(/*! ../lib/controls */ "./src/lib/controls.ts");
const hud_1 = __webpack_require__(/*! ../lib/hud */ "./src/lib/hud.ts");
const render_1 = __webpack_require__(/*! ../lib/render */ "./src/lib/render.ts");
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
            }, () => `X:${exports.debug_state.camera.state.position.x.toFixed(0)}`),
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
            }, () => `Y:${exports.debug_state.camera.state.position.y.toFixed(0)}`)
        ];
    }
}
exports.Debug_hud = Debug_hud;
function debug_statef(t) {
    let mouse = controls_1.Poll_Mouse(exports.debug_state.camera, exports.debug_state.target);
    if (!mouse) {
        return;
    }
    if (exports.debug_state.camera.hud) {
        exports.debug_state.camera.hud.statef(t);
    }
    if (!van_1.PAUSED) {
        debug_update_properties_element();
    }
    if (exports.debug_state.selected_element) {
        if (van_1.PAUSED && controls_1.held_keys["ControlLeft"] && exports.debug_state.current_action.property == "scaling") {
            let dist = {
                x: Math.abs(mouse.x - exports.debug_state.selected_element.state.position.x),
                y: Math.abs(mouse.y - exports.debug_state.selected_element.state.position.y)
            };
            exports.debug_state.selected_element.state.scaling.width = (2 * dist.x) / exports.debug_state.selected_element.width;
            exports.debug_state.selected_element.state.scaling.height = (2 * dist.y) / exports.debug_state.selected_element.height;
        }
        else {
            let st = exports.debug_state.selected_element.state;
            st.position.x = mouse.x - exports.debug_state.selected_element_offset.x,
                st.position.y = mouse.y - exports.debug_state.selected_element_offset.y;
        }
    }
    if (van_1.PAUSED && exports.debug_state.rotation_element) {
        exports.debug_state.rotation_element.state.rotation = exports.debug_state.rotation_element.angleTowardsPoint(mouse);
    }
    if (exports.debug_state.middle_position) {
        let diff_y = mouse.y - exports.debug_state.middle_position.y;
        let diff_x = mouse.x - exports.debug_state.middle_position.x;
        exports.debug_state.camera.state.position.x = exports.debug_state.camera.state.position.x + -1 * diff_x;
        exports.debug_state.camera.state.position.y = exports.debug_state.camera.state.position.y + -1 * diff_y;
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
        let ele = exports.debug_state.selected_properties_element;
        let new_val = parseFloat(properties_elements.pos_x.value) || 0;
        exports.debug_state.actions_stack.push({
            property: "position",
            element: ele,
            new: JSON.stringify({ x: new_val, y: ele.state.position.y }),
            old: JSON.stringify(ele.state.position)
        });
        ele.state.position.x = new_val;
    });
    properties_elements.pos_y.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        let new_val = parseFloat(properties_elements.pos_y.value) || 0;
        exports.debug_state.actions_stack.push({
            property: "position",
            element: ele,
            new: JSON.stringify({ x: ele.state.position.x, y: new_val }),
            old: JSON.stringify(ele.state.position)
        });
        ele.state.position.y = new_val;
    });
    properties_elements.vel_x.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        ele.state.velocity.x = parseFloat(properties_elements.vel_x.value) || 0;
    });
    properties_elements.vel_y.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        ele.state.velocity.y = parseFloat(properties_elements.vel_y.value) || 0;
    });
    properties_elements.rot.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        let new_val = parseFloat(properties_elements.rot.value) || 0;
        exports.debug_state.actions_stack.push({
            property: "rotation",
            element: ele,
            new: JSON.stringify(new_val),
            old: JSON.stringify(ele.state.rotation)
        });
        ele.state.rotation = new_val;
    });
    properties_elements.sca_x.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        let new_val = parseFloat(properties_elements.sca_x.value) || 0;
        exports.debug_state.actions_stack.push({
            property: "scaling",
            element: ele,
            new: JSON.stringify({ width: new_val, height: ele.state.scaling.height }),
            old: JSON.stringify(ele.state.scaling)
        });
        ele.state.scaling.width = new_val;
    });
    properties_elements.sca_y.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        let new_val = parseFloat(properties_elements.sca_y.value) || 0;
        exports.debug_state.actions_stack.push({
            property: "scaling",
            element: ele,
            new: JSON.stringify({ width: ele.state.scaling.width, height: new_val }),
            old: JSON.stringify(ele.state.scaling)
        });
        ele.state.scaling.height = new_val;
    });
    properties_elements.render.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        ele.render = properties_elements.render.checked;
    });
    properties_elements.collision.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        ele.collision = properties_elements.collision.checked;
    });
    document.getElementById("delete_element").addEventListener("click", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        ele.delete();
    });
}
function debug_update_properties_element() {
    if (exports.debug_state.selected_properties_element) {
        let ele = exports.debug_state.selected_properties_element;
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
                let ele = exports.debug_state.selected_properties_element;
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
                if (exports.debug_state.selected_properties_element == obj) {
                    exports.debug_state.camera.state.position = Object.assign({}, obj.state.position);
                }
                else {
                    exports.debug_state.selected_properties_element = obj;
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
                    position: { x: exports.debug_state.camera.state.position.x, y: exports.debug_state.camera.state.position.y },
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
    exports.debug_state = {
        target: document.getElementById("debug_target"),
        camera: new render_1.Camera({
            x: 0,
            y: 0,
            dimensions: {
                height: van_1.viewport.height,
                width: van_1.viewport.width
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
    exports.debug_state.camera.hud = new Debug_hud();
    controls_1.debug_binds.push({
        key: "mouse0down",
        type: controls_1.btype.mouse,
        id: 0,
        function: () => {
            if (exports.debug_state.selected_element) {
                exports.debug_state.selected_element = null;
            }
            else {
                let mouse = controls_1.Poll_Mouse(exports.debug_state.camera, exports.debug_state.target);
                if (!mouse) {
                    return;
                }
                exports.debug_state.click_position = mouse;
                let alL_clicked = main_1.g.getRoom().checkObjects({
                    x: mouse.x,
                    y: mouse.y,
                    height: 1,
                    width: 1
                });
                let clicked;
                let filtered = alL_clicked.filter((ele) => ele == exports.debug_state.selected_properties_element);
                if (filtered.length > 0) {
                    clicked = filtered[0];
                }
                else {
                    clicked = alL_clicked[0];
                }
                if (clicked) {
                    if (controls_1.held_keys["ControlLeft"]) {
                        exports.debug_state.current_action = {
                            element: clicked,
                            property: "scaling",
                            old: JSON.stringify(clicked.state.scaling),
                            new: undefined
                        };
                    }
                    else {
                        exports.debug_state.current_action = {
                            element: clicked,
                            property: "position",
                            old: JSON.stringify(clicked.state.position),
                            new: undefined
                        };
                    }
                    exports.debug_state.selected_properties_element = clicked;
                    debug_update_properties_element();
                    exports.debug_state.selected_element = clicked;
                    exports.debug_state.selected_element_initial_scaling = clicked.state.scaling;
                    exports.debug_state.selected_element_offset = {
                        x: mouse.x - clicked.state.position.x,
                        y: mouse.y - clicked.state.position.y
                    };
                }
            }
        },
        execute: controls_1.exec_type.once,
        camera: exports.debug_state.camera
    });
    controls_1.debug_binds.push({
        key: "mouse1up",
        type: controls_1.btype.mouse,
        id: 5,
        function: () => {
            exports.debug_state.middle_position = undefined;
        },
        execute: controls_1.exec_type.once,
        camera: exports.debug_state.camera
    });
    controls_1.debug_binds.push({
        key: "mouse1down",
        type: controls_1.btype.mouse,
        id: 6,
        function: () => {
            let mouse = controls_1.Poll_Mouse(exports.debug_state.camera, exports.debug_state.target);
            if (!mouse) {
                return;
            }
            exports.debug_state.middle_position = mouse;
        },
        execute: controls_1.exec_type.once,
        camera: exports.debug_state.camera
    });
    controls_1.debug_binds.push({
        key: "mouse0up",
        type: controls_1.btype.mouse,
        id: 1,
        function: () => {
            if (exports.debug_state.selected_element) {
                if (exports.debug_state.current_action.property == "scaling") {
                    exports.debug_state.current_action.new = JSON.stringify(exports.debug_state.selected_element.state.scaling);
                }
                else if (exports.debug_state.current_action.property == "position") {
                    exports.debug_state.current_action.new = JSON.stringify(exports.debug_state.selected_element.state.position);
                }
                exports.debug_state.actions_stack.push(exports.debug_state.current_action);
            }
            exports.debug_state.selected_element = undefined;
            debug_update_properties_element();
        },
        execute: controls_1.exec_type.once,
        camera: exports.debug_state.camera
    });
    controls_1.debug_binds.push({
        key: "mouse2down",
        type: controls_1.btype.mouse,
        id: 3,
        function: () => {
            if (exports.debug_state.rotation_element) {
                exports.debug_state.rotation_element = null;
            }
            else {
                let mouse = controls_1.Poll_Mouse(exports.debug_state.camera, exports.debug_state.target);
                if (!mouse) {
                    return;
                }
                let clicked = main_1.g.getRoom().checkObjects({
                    x: mouse.x,
                    y: mouse.y,
                    height: 1,
                    width: 1
                })[0];
                if (clicked) {
                    exports.debug_state.rotation_element = clicked;
                    exports.debug_state.current_action = {
                        element: exports.debug_state.rotation_element,
                        property: "rotation",
                        old: JSON.stringify(exports.debug_state.rotation_element.state.rotation),
                        new: undefined
                    };
                }
            }
        },
        execute: controls_1.exec_type.once,
        camera: exports.debug_state.camera
    });
    controls_1.debug_binds.push({
        key: "mouse2up",
        type: controls_1.btype.mouse,
        id: 4,
        function: () => {
            exports.debug_state.current_action.new = JSON.stringify(exports.debug_state.rotation_element.state.rotation);
            exports.debug_state.actions_stack.push(exports.debug_state.current_action);
            exports.debug_state.rotation_element = undefined;
        },
        execute: controls_1.exec_type.once,
        camera: exports.debug_state.camera
    });
    let left_func = () => {
        let shift_held = controls_1.held_keys["ShiftLeft"] ? 1 : 0;
        if (exports.debug_state.last_clicked.id == "debug_target")
            exports.debug_state.camera.state.position.x = exports.debug_state.camera.state.position.x - ((5 + shift_held * 5) * (1 / exports.debug_state.camera.state.scaling));
    };
    let right_func = () => {
        let shift_held = controls_1.held_keys["ShiftLeft"] ? 1 : 0;
        if (exports.debug_state.last_clicked.id == "debug_target")
            exports.debug_state.camera.state.position.x = exports.debug_state.camera.state.position.x + ((5 + shift_held * 5) * (1 / exports.debug_state.camera.state.scaling));
    };
    let down_func = () => {
        let shift_held = controls_1.held_keys["ShiftLeft"] ? 1 : 0;
        if (!controls_1.held_keys["ControlLeft"] && exports.debug_state.last_clicked.id == "debug_target")
            exports.debug_state.camera.state.position.y = exports.debug_state.camera.state.position.y - ((5 + shift_held * 5) * (1 / exports.debug_state.camera.state.scaling));
    };
    let up_func = () => {
        let shift_held = controls_1.held_keys["ShiftLeft"] ? 1 : 0;
        if (exports.debug_state.last_clicked.id == "debug_target")
            exports.debug_state.camera.state.position.y = exports.debug_state.camera.state.position.y + ((5 + shift_held * 5) * (1 / exports.debug_state.camera.state.scaling));
    };
    let scroll_up = () => {
        if (exports.debug_state.last_clicked.id == "debug_target")
            exports.debug_state.camera.state.scaling = exports.debug_state.camera.state.scaling + 0.05;
    };
    let save_func = () => {
        let ctrl_held = controls_1.held_keys["ControlLeft"];
        if (ctrl_held && van_1.PAUSED) {
            let name = main_1.g.getRoom().constructor.name;
            let a = path.join(`${van_1.project_path}`, `../rooms/${name}.json`);
            try {
                fs.writeFileSync(a, JSON.stringify(main_1.g.getRoom().exportStateConfig()));
            }
            catch (e) {
                console.log("ERROR WRITING ROOM INFO FILE.");
            }
            alert("Saved");
        }
        else if (ctrl_held && !van_1.PAUSED) {
            alert("pause to enable saving.");
        }
    };
    let scroll_down = () => {
        if (exports.debug_state.last_clicked.id == "debug_target" && exports.debug_state.camera.state.scaling > 0.05)
            exports.debug_state.camera.state.scaling = exports.debug_state.camera.state.scaling - 0.05;
    };
    let undo_func = () => {
        if (controls_1.held_keys["ControlLeft"]) {
            let curr = exports.debug_state.actions_stack.pop();
            if (curr) {
                if (curr.property == "position") {
                    curr.element.state.position = JSON.parse(curr.old);
                }
                else if (curr.property === "rotation") {
                    curr.element.state.rotation = JSON.parse(curr.old);
                }
                else if (curr.property === "scaling") {
                    curr.element.state.scaling = JSON.parse(curr.old);
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
            exports.debug_state.last_clicked = e.target;
        }
    });
    let pause_button = document.getElementById("pause_button");
    pause_button.addEventListener("click", (e) => {
        van_1.setPaused(!van_1.PAUSED);
        if (van_1.PAUSED) {
            pause_button.innerHTML = "UNPAUSE";
        }
        else {
            pause_button.innerHTML = "PAUSE";
        }
    });
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
    
export class ${new_name} extends obj{
  sprite_url = "./sprites/Error.png";
  height = 100;
  width = 100;
  tags:Array<string> = [];
  collision = true;
  render = true;
  rotation = 0;
  scaling = 1;
  params:${new_name}_parameters;
  static default_params:${new_name}_parameters = {}
  constructor(state:obj_state,params:${new_name}_parameters = ${new_name}.default_params){
    super(state,params);
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
    constructor(node, getFunc) {
        if (!node.align) {
            node.align = "center";
        }
        this.state = node;
        if (!this.state.text) {
            this.state.text = "";
        }
        this.getFunc = getFunc;
    }
    statef(a) {
        this.state.text = this.getFunc();
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
exports.gravity_obj = exports.static_obj = exports.composite_obj = exports.obj = exports.rotation_length = exports.getId = void 0;
const render_1 = __webpack_require__(/*! ./render */ "./src/lib/render.ts");
const controls_1 = __webpack_require__(/*! ./controls */ "./src/lib/controls.ts");
const audio_1 = __webpack_require__(/*! ./audio */ "./src/lib/audio.ts");
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
const math_1 = __webpack_require__(/*! ./math */ "./src/lib/math.ts");
function getId(a, id) {
    for (let b = 0; b < a.length; b++) {
        if (a[b].id == id) {
            return a[b];
        }
    }
    return undefined;
}
exports.getId = getId;
//Finds the side lengths of a triangle if given the  angle (in degrees)
//along with the length of the hypotenuse
function rotation_length(length, degree) {
    let a_len = length * Math.sin(degree * Math.PI / 180);
    let b_len = length * Math.cos(degree * Math.PI / 180);
    return {
        x: a_len,
        y: b_len
    };
}
exports.rotation_length = rotation_length;
//This counter tracks the global number of objects created so far
//an object's id (if not overwritten) will be a unique integer, which
//uses this counter.
let counter = 0;
class animations {
    constructor() {
        this.animations = {};
        //Tracks the time passed since the current animation
        //has started playing
        this.animation_tracker = 0;
        this.animating = false;
    }
    //defines an animation that can be played using the play method
    //the keyframes are an array of tuples in the 
    //format of [(time for this sprite to show), sprite]
    add(name, keyframes, length) {
        this.animations[name] = [keyframes, length];
    }
    play(name, callback) {
        this.current = name;
        this.callback = callback;
        this.animation_tracker = 0;
    }
    renderf(t) {
        let curr_animation = this.animations[this.current][0];
        let length = this.animations[this.current][1];
        let index = 0;
        for (; index < curr_animation.length - 1; index++) {
            let keyframe_time = curr_animation[index][0];
            let next_keyframe_time = curr_animation[index + 1][0];
            if (this.animation_tracker >= keyframe_time && this.animation_tracker < next_keyframe_time) {
                this.animation_tracker = this.animation_tracker + t;
                this.animating = true;
                //Returns the raw sprite that's correct to show at this time
                return curr_animation[index][1];
            }
        }
        if (this.animation_tracker >= length) {
            this.animation_tracker = 0;
            this.animating = false;
            if (this.callback) {
                this.callback();
            }
        }
        else {
            this.animation_tracker += t;
        }
        //Returns the last appropriate frame until the animation is over.
        return curr_animation[index][1];
    }
}
class obj {
    constructor(state, params = obj.default_params) {
        //Url to the object's individual sprite, or all of its sprites
        //bundled into a spritesheet
        this.sprite_url = "";
        this.render_type = render_1.render_type.sprite;
        this.collision = false;
        this.tags = [];
        //tags are used to exclude or include objects when checking for collisions,
        //and for object identification / classification in scripts
        this.render = true;
        this.animations = new animations();
        this.audio = new audio_1.audio();
        //Last render time, used to calculate delta_time
        this.last_render = 0;
        //Params are options for the object, that do not rely on state
        // For example, the side of a piece in chess.
        this.params = {};
        this.layer = 1;
        this.save_to_file = true;
        this.tick_state = true;
        this.id = "" + counter;
        this.binds = [];
        counter++;
        this.params = params;
        this.registerControls();
        this.registerAudio();
        //Creates a copy of the passed in initial state to avoid 
        //Updating the saved state of the room
        this.state = JSON.parse(JSON.stringify(state));
        this.params = params;
    }
    getState() {
        return this.state;
    }
    //Animations should be registered using this.animations.add in this method
    registerAnimations() {
    }
    //Sounds should be registered using this.audio.add in this method.
    registerAudio() {
    }
    defaultParams() {
        return van_1.deep(this.defaultParams);
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
    //Within normal objects, this just returns an array that contains the object.
    //This method is overwritten by composite objects, which returns every object
    //that the composite object contains. This simplifies the backend work, as each
    //object returns an array of atleast one object.
    combinedObjects() {
        return [this];
    }
    //Distance from one object to another.
    distance(target) {
        return math_1.Distance(this.state.position, target.state.position);
    }
    angleTowards(a) {
        return this.angleTowardsPoint(a.state.position);
    }
    angleTowardsPoint(target) {
        if (this.state.position.x < target.x && this.state.position.y > target.y
            || (this.state.position.x < target.x && this.state.position.y < target.y)) {
            return 90 - Math.atan((target.y - this.state.position.y) / (target.x - this.state.position.x)) * 180 / Math.PI;
        }
        if (this.state.position.x > target.x && this.state.position.y < target.y
            || this.state.position.x > target.x && this.state.position.y > target.y) {
            return 270 - Math.atan((target.y - this.state.position.y) / (target.x - this.state.position.x)) * 180 / Math.PI;
        }
        return 0;
    }
    bindControl(key, x, func, interval = 1) {
        this.binds.push(controls_1.Bind(key, func, x, interval, this));
    }
    //This method is where controls and keybinds should
    //be defined using bindControl
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
    //Returns the collision box of the object
    //Does not have to correspond to the object's sprite's size 
    //A composite object instead returns the bounding box that 
    //contains every one of its contained objects
    getFullCollisionBox() {
        //If a developer defined hitbox exists, use that, otherwise
        //generate it using the sprite width / height
        if (this.hitbox) {
            return {
                x: this.state.position.x,
                y: this.state.position.y,
                width: this.hitbox.width * this.state.scaling.width,
                height: this.hitbox.height * this.state.scaling.height
            };
        }
        else {
            return {
                x: this.state.position.x,
                y: this.state.position.y,
                width: this.width * this.state.scaling.width,
                height: this.height * this.state.scaling.height
            };
        }
    }
    //This is another methods, similar to getCombined
    //Just returns an array containing the object's collision box
    //Overwritten in composite objects to return every object's collision box
    //within the composite obect.
    getAllCollisionBoxes() {
        return [this.getFullCollisionBox()];
    }
    //Checks to see if an object actually collides with the provided box.
    //A box represents an area within the game space
    //Checking for collisions is trivial currently, as all hitboxes are axis aligned
    //But implementing a more complicated physics engine would make this method's impl.
    //significatly more complex.
    collidesWithBox(other_object) {
        let collides_horrizontally = false, collides_vertically = false;
        let hbox = this.hitbox;
        if (!this.hitbox) {
            hbox = {
                x_offset: 0,
                y_offset: 0,
                width: this.width,
                height: this.height
            };
        }
        let object_bounds = {
            left: (this.state.position.x + hbox.x_offset - hbox.width * this.state.scaling.width / 2),
            right: (this.state.position.x + hbox.x_offset + hbox.width * this.state.scaling.width / 2),
            top: (this.state.position.y + hbox.y_offset + hbox.height * this.state.scaling.height / 2),
            bottom: (this.state.position.y + hbox.y_offset - hbox.height * this.state.scaling.height / 2)
        };
        let other_object_bounds = {
            left: (other_object.x - other_object.width / 2),
            right: (other_object.x + other_object.width / 2),
            top: (other_object.y + other_object.height / 2),
            bottom: (other_object.y - other_object.height / 2)
        };
        //We can compare the sides of the boxes to see if they overlap
        //We check once for hoizontal overlap, then vertical.
        if ((object_bounds.left >= other_object_bounds.left && object_bounds.left < other_object_bounds.right) || (other_object_bounds.left > object_bounds.left && other_object_bounds.left < object_bounds.right)) {
            collides_horrizontally = true;
        }
        else {
            return false;
        }
        if ((object_bounds.bottom >= other_object_bounds.bottom && object_bounds.bottom < other_object_bounds.top) || (other_object_bounds.bottom > object_bounds.bottom && other_object_bounds.bottom < object_bounds.top)) {
            collides_vertically = true;
        }
        else {
            return false;
        }
        return collides_horrizontally && collides_vertically;
    }
    //The particle must be registered in the room's registerParticles method 
    //The name parameter should correspond to the key of a particle
    emitParticle(name, offset, lifetime, range) {
        let room = this.game.getRoom();
        let st = this.state;
        let final_position = {
            x: st.position.x + offset.x,
            y: st.position.y + offset.y
        };
        room.emitParticle(name, final_position, lifetime, range);
    }
    //Internal method that keeps calculates the delta_time
    //Also converts individual sprites into arrays of one sprite.
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
    //Most objects should not be overwritting the renderf method
    //Returns the appropriate sprite for the object
    renderf(time) {
        //If the object doesn't have registered animations, or isn't playing one
        //We have to create the sprite here.
        if (Object.keys(this.animations.animations).length == 0 || !this.animations.current) {
            if (!this.sprite_sheet || !this.height || !this.width) {
                return {
                    sprite: undefined,
                    x: this.state.position.x,
                    y: this.state.position.y
                };
            }
            let sprite_height = this.height;
            let sprite_width = this.width;
            //Technically we don't need to define an object height and width
            //If the sprite_url points to a single static sprite, as we can just pull
            //the dimensions from the image
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
                x: this.state.position.x,
                y: this.state.position.y
            };
        }
        return {
            sprite: this.animations.renderf(time),
            x: this.state.position.x,
            y: this.state.position.y
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
    if (ob.gravity && ob.state.velocity.y > grav_max) {
        ob.state.velocity.y += grav_const;
    }
}
exports.applyGravity = applyGravity;
class room {
    constructor(game, config) {
        this.objects = [];
        //This object contains particle definitions
        this.particles = {};
        //This array is what actually contains the particles
        //that exists within the room.
        this.particles_arr = [];
        this.binds = [];
        this.audio = new audio_1.audio();
        //These text nodes exists in the actual room space, rather than
        //on the hud layer.
        this.text_nodes = [];
        this.game = game;
        for (let c of config.objects) {
            //This handles loading objects from the saved json file associated with each room.
            this.addItemStateConfig(c);
        }
    }
    exportStateConfig() {
        let config = { objects: [] };
        for (let o of this.objects.filter((obj) => obj.save_to_file)) {
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
        for (let a = 0; a < this.objects.filter((o) => o.tick_state).length; a++) {
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
exports.game = exports.objects = exports.rooms = exports.deep = exports.render_collision_box = exports.setPaused = exports.setDebug = exports.viewport = exports.GetViewportDimensions = exports.GetScreenDimensions = exports.project_path = exports.PAUSED = exports.DEBUG = void 0;
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
    constructor(ctx, init_state) {
        this.prototypes = [];
        this.rooms = [];
        this.isRendering = false;
        this.state = {
            canvas: canvas_element,
            logic: undefined,
            context: ctx,
            cameras: [],
            current_room: undefined,
            globals: init_state
        };
        this.offscreen_canvas = document.createElement("canvas");
        this.offscreen_context = this.offscreen_canvas.getContext("2d");
        //DEBUG determines whether the game is running within the editor
        if (exports.DEBUG) {
            //Sets up some global debug state and the editor keybindings
            debug_1.debug_setup();
            //Initializes a separate logic loop solely for the editor
            //This separation allows for the editor to interact with the environment while
            //the actual room's state loop is paused.
            setInterval(() => {
                if (this.getRoom()) {
                    //This functions handles the editor interactions with the game environment
                    debug_1.debug_statef(16.66);
                }
            }, 16.66);
        }
        //Creates a onclick function on the window that handles element onclick functions
        controls_2.init_click_handler(this);
    }
    render(t) {
        //t is current render time
        let delta_time = t - last_render_time;
        last_render_time = t;
        let all_cameras = this.state.cameras;
        let editor_camera_index = -1;
        if (exports.DEBUG) {
            all_cameras = [...all_cameras, debug_1.debug_state.camera];
            editor_camera_index = all_cameras.length - 1;
            //The editor camera is always the last camera inside the cameras array
            //the editor camera is rendered to a different canvas than the main game canvas
            //so we use the camera's index to check what canvas to render to
        }
        for (let a = 0; a < all_cameras.length; a++) {
            let camera = all_cameras[a];
            //We render the cameras contents to an offscreen canvas, then copy its contents
            //to the main canvas.
            //This allows us to avoid any math needed to determine sprites that are partially offscreen
            //as any offscreen sections of the sprites will not be copied over, rather than explicitly 
            //calculating the cutoffs
            this.offscreen_canvas.height = camera.state.dimensions.height;
            this.offscreen_canvas.width = camera.state.dimensions.width;
            this.offscreen_context.clearRect(0, 0, camera.state.dimensions.width, camera.state.dimensions.height);
            this.offscreen_context.fillStyle = "black";
            this.offscreen_context.fillRect(0, 0, camera.state.dimensions.width, camera.state.dimensions.height);
            //This collision box represents the camera's field of view in the game space
            //We use the room's checkObjects function to find any object that exists within this area
            //These objects are the objects that need to be rendered for this camera
            let camera_box = {
                x: camera.state.position.x,
                y: camera.state.position.y,
                width: camera.state.dimensions.width * (1 / camera.state.scaling),
                height: camera.state.dimensions.height * (1 / camera.state.scaling)
            };
            //List of all particles within the camera's fov
            let particle_collides = this.state.current_room.checkObjects(camera_box, [], this.state.current_room.particles_arr);
            //List of all objects within the camera's fov
            let camera_colliders = [...this.state.current_room.checkObjects(camera_box), ...particle_collides];
            let render_args = {
                context: this.offscreen_context,
                camera: camera,
            };
            //Renders the room's background.
            render_1.sprite_renderer(render_args, {
                sprite: this.state.current_room.renderf(delta_time),
                x: 0,
                y: 0,
                rotation: 0,
                scale: {
                    width: 1,
                    height: 1
                }
            });
            //Array of hitboxes for each item in the room
            let hitboxes = [];
            for (let a of camera_colliders.filter((b) => b.render).sort((a, b) => (a.layer - b.layer))) {
                let rendered = a.renderTrack(t);
                //Objects can return either a sprite, or an array of sprites to simplify the API
                //For the user, and for use in composite objects(object that bundles other objects together)
                //Internally, we convert any single sprite into an array of one sprite.
                for (let positioned_sprite of rendered)
                    render_1.sprite_renderer(render_args, {
                        sprite: positioned_sprite.sprite,
                        x: positioned_sprite.x,
                        y: positioned_sprite.y,
                        rotation: a.state.rotation,
                        scale: a.state.scaling
                    });
                //Hitboxes are rendered late in the render loop, to ensure objects don't overlap them
                //As we render objects, we add their hitboxes to this list
                if (exports.DEBUG && a.collision) {
                    hitboxes.push(...a.getAllCollisionBoxes());
                }
            }
            //This is a special class of object that exists in the game world
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
                //Renders static graphics that are a part of the hud
                for (let graphic of graphics) {
                    let rendered = graphic.renderTrack(t);
                    if (graphic.render) {
                        for (let positioned_sprite of rendered) {
                            render_1.sprite_renderer(render_args, {
                                sprite: positioned_sprite.sprite,
                                x: positioned_sprite.x,
                                y: positioned_sprite.y,
                                rotation: graphic.state.rotation,
                                scale: graphic.state.scaling
                            });
                        }
                    }
                }
                for (let text of text_elements) {
                    render_1.hud_text_renderer(render_args, {
                        x: text.state.position.x,
                        y: text.state.position.y,
                        font: text.renderf(t)
                    });
                }
            }
            //If a camera is marked as a debug camera, we render the
            //  hitboxes, and potentially update the editor
            if (camera.state.debug) {
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
                //Draws a special box around the currently selected element
                //inside the editor UI
                if (exports.DEBUG && debug_1.debug_state.selected_properties_element) {
                    let coll = debug_1.debug_state.selected_properties_element.getFullCollisionBox();
                    render_1.rect_renderer(this.offscreen_context, { width: 25, height: 25 }, coll.x, coll.y, "skyblue", 10, camera);
                    render_1.stroked_rect_renderer(this.offscreen_context, coll, coll.x, coll.y, "blue", 1, camera);
                }
            }
            //Separate canvas for the editor camera
            if (a !== editor_camera_index) {
                this.state.context.drawImage(this.offscreen_canvas, camera.state.viewport.x, camera.state.viewport.y);
            }
            else {
                debug_1.debug_state.target.getContext("2d").drawImage(this.offscreen_canvas, camera.state.viewport.x, camera.state.viewport.y);
            }
        }
        if (exports.DEBUG)
            boxes = [];
        requestAnimationFrame((a) => { this.render(a); });
    }
    start_logic(a) {
        //this is the room's state loop
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
            //This functions handles binds that occur on an interval
            controls_1.ExecuteRepeatBinds(a);
        }, a);
    }
    getRoom() {
        return this.state.current_room;
    }
    loadRoomString(x) {
        return __awaiter(this, void 0, void 0, function* () {
            //room list is a object that contains each room's class,
            //with the room's name as the key for class
            //This object is populated at compile time
            for (let a of Object.keys(rooms_1.rooms)) {
                if (a == x) {
                    //this isn't particularly type-safe.
                    let new_room = new rooms_1.rooms[a](this);
                    yield this.loadRoom(new_room);
                }
            }
        });
    }
    loadRoom(x) {
        return __awaiter(this, void 0, void 0, function* () {
            //Clears the room's logic loop if one
            //Was already running
            if (this.state.logic) {
                window.clearInterval(this.state.logic);
            }
            //This reference is used during initialization
            x.game = this;
            //Deletes each object in the room (which also unbinds their binds),
            //and unbinds the room's bindings.
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
            this.state.logic = this.start_logic(logic_loop_interval);
            this.state.current_room = x;
            if (exports.DEBUG) {
                debug_1.debug_update_room_list();
                debug_1.debug_update_prefabs();
                debug_1.debug_update_obj_list();
            }
            if (!this.isRendering) {
                //This starts the render loop for the room
                this.render(0);
                this.isRendering = true;
            }
        });
    }
}
exports.game = game;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0Jpc2hvcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0JvYXJkX0xhYmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvQ29udHJvbGxlZFBsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0N1cnNvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0Rvb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9Hb29tYmEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9HdW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9LaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvS25pZ2h0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvTW92ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL1Bhd24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9RdWVlbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL1Jvb2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9Sb3RhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvVmVydEJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL2Fic3RyYWN0L3BpZWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvYWJzdHJhY3QvcGxhdGZvcm1lcl9vYmoudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9idWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9wcmVmYWJzLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL092ZXJ3b3JsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9yb29tcy9UZXN0Ui50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9yb29tcy9VbmRlcndvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL3Jvb21zLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYXVkaW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb250cm9scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2RlYnVnLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvaHVkLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvbWF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL29iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JlbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNB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QyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRTtnQkFDMUgsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekI7WUFDRCxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLGtCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLFlBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRTtnQkFDMUgsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekI7WUFDRCxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLGtCQUFVLENBQUMsSUFBSSxFQUFFO2dCQUMxRixJQUFJLEVBQUUsR0FBRyxJQUFJLGFBQUssQ0FBQztvQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ3pCLFFBQVEsRUFBRTt3QkFDUixDQUFDLEVBQUUsQ0FBQzt3QkFDSixDQUFDLEVBQUUsQ0FBQztxQkFDTDtvQkFDRCxRQUFRLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztxQkFDcEI7aUJBQ0YsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzNCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssWUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUI7aUJBQ0ksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxZQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM5QjtZQUNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFFakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLDBCQUEwQixHQUFHLFNBQVMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFDRCxnQkFBZ0I7UUFFZCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxvQkFBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDOUMsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNiLElBQUksSUFBSSxHQUFHLFFBQUMsQ0FBQyxPQUFPLEVBQVcsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2dCQUMzRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjtRQUNILENBQUMsQ0FBQztJQUVKLENBQUM7Q0FDRjtBQXZHRCxvQkF1R0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySEQsb0dBQXdFO0FBR3hFLHdFQUEwQjtBQUUxQixNQUFhLElBQUssU0FBUSxhQUFLO0lBRTdCLFlBQVksS0FBZSxFQUFDLFNBQTBCLGFBQUssQ0FBQyxjQUFjO1FBQ3hFLEtBQUssQ0FBQyxLQUFLLEVBQUM7WUFDVixJQUFJLEVBQUMsTUFBTSxDQUFDLElBQUk7U0FDakIsQ0FBQyxDQUFDO1FBSkwsZUFBVSxHQUFHLG9CQUFvQjtRQUsvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxrQkFBVSxDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBQ0QsWUFBWTtRQUNWLElBQUksUUFBUSxHQUFtQixFQUFFLENBQUM7UUFDbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLFFBQUMsQ0FBQyxPQUFPLEVBQVcsQ0FBQztRQUNoQyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLFlBQUksQ0FBQyxLQUFLLEVBQUM7WUFDL0IsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO2dCQUN4RCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztnQkFDekMsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7b0JBQ2pGLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUMxQzthQUNGO1lBQ0QsSUFBSSxVQUFVLEdBQVksRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7WUFDdkQsSUFBSSxXQUFXLEdBQVksRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7WUFDeEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLFlBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBQyxZQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDO2dCQUN2SCxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsSUFBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDO2dCQUMxSCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzVCO1NBQ0Y7YUFDSTtZQUNILElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztnQkFDeEQsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7Z0JBQ3pDLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO29CQUNqRixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztpQkFDMUM7YUFDRjtZQUNELElBQUksVUFBVSxHQUFZLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1lBQ3hELElBQUksV0FBVyxHQUFZLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1lBQ3hELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBQyxZQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUMsWUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQztnQkFDdkgsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMzQjtZQUNELElBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQztnQkFDMUgsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM1QjtTQUNGO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBdERELG9CQXNEQzs7Ozs7Ozs7Ozs7Ozs7OztBQzFERCxvRkFBaUQ7QUFFakQsbUhBQXNEO0FBQ3RELDRFQUE0QjtBQUc1QixNQUFhLE1BQU8sU0FBUSxzQkFBYTtJQUV2QyxZQUFZLEtBQWUsRUFBRSxVQUF5QjtRQUNwRCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFGZixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBR1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxtQ0FBZ0IsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQUcsQ0FBQztZQUN4QixRQUFRLEVBQUMsRUFBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBQztZQUN6RCxRQUFRLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7WUFDbEIsUUFBUSxFQUFDLENBQUM7WUFDVixPQUFPLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUM7U0FDM0IsRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQVpELHdCQVlDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELG9HQUF3RTtBQUd4RSxNQUFhLEtBQU0sU0FBUSxhQUFLO0lBRTlCLFlBQVksS0FBZSxFQUFDLFNBQTBCLGFBQUssQ0FBQyxjQUFjO1FBQ3hFLEtBQUssQ0FBQyxLQUFLLEVBQUM7WUFDVixJQUFJLEVBQUMsTUFBTSxDQUFDLElBQUk7U0FDakIsQ0FBQyxDQUFDO1FBSkwsZUFBVSxHQUFHLHFCQUFxQjtRQUtoQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxrQkFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBQ0QsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0Y7QUFYRCxzQkFXQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RELG9HQUF3RTtBQUt4RSxNQUFhLElBQUssU0FBUSxhQUFLO0lBRTdCLFlBQVksS0FBZSxFQUFDLFNBQTBCLGFBQUssQ0FBQyxjQUFjO1FBQ3hFLEtBQUssQ0FBQyxLQUFLLEVBQUM7WUFDVixJQUFJLEVBQUMsTUFBTSxDQUFDLElBQUk7U0FDakIsQ0FBQyxDQUFDO1FBSkwsZUFBVSxHQUFHLG9CQUFvQjtRQUsvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxrQkFBVSxDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBQ0QsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQVhELG9CQVdDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsNEVBQTRCO0FBRzVCLE1BQWEsT0FBUSxTQUFRLFNBQUc7SUFDOUIsTUFBTSxDQUFDLFVBQWtCO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUFKRCwwQkFJQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hELDRFQUE0QjtBQUU1QixNQUFhLE9BQVEsU0FBUSxTQUFHO0lBQWhDOztRQUNFLGVBQVUsR0FBRyxvQkFBb0IsQ0FBQztRQUNsQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBTSxHQUFHLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FBQTtBQUpELDBCQUlDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkQsdUZBQXdDO0FBQ3hDLHVGQUF5RTtBQUV6RSw2RkFBMEQ7QUFFMUQsMkVBQTZCO0FBRTdCLElBQVksSUFHWDtBQUhELFdBQVksSUFBSTtJQUNkLGlDQUFLO0lBQ0wsaUNBQUs7QUFDUCxDQUFDLEVBSFcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBR2Y7QUFFRCxJQUFZLFVBT1g7QUFQRCxXQUFZLFVBQVU7SUFDcEIsMkNBQUk7SUFDSiwyQ0FBSTtJQUNKLCtDQUFNO0lBQ04sNkNBQUs7SUFDTCwyQ0FBSTtJQUNKLCtDQUFNO0FBQ1IsQ0FBQyxFQVBXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBT3JCO0FBWUQsTUFBYSxLQUFNLFNBQVEsWUFBRztJQVc1QixZQUFZLEtBQWUsRUFBQyxTQUEwQixLQUFLLENBQUMsY0FBYztRQUN4RSxLQUFLLENBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBWHRCLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osY0FBUyxHQUFHLElBQUksQ0FBQztRQUdqQixTQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQU1uQixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsUUFBUSxFQUFDO2dCQUNQLENBQUMsRUFBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUc7Z0JBQ3JDLENBQUMsRUFBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUc7YUFDdkM7WUFDRCxRQUFRLEVBQUM7Z0JBQ1AsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUNELElBQUksRUFBQyxNQUFNLENBQUMsSUFBSTtZQUNoQixJQUFJLEVBQUMsU0FBUztZQUNkLFNBQVMsRUFBQyxLQUFLO1lBQ2YsUUFBUSxFQUFDLEtBQUssQ0FBQyxRQUFRO1lBQ3ZCLE9BQU8sRUFBQyxLQUFLLENBQUMsT0FBTztTQUN0QjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxXQUFXLENBQUMsQ0FBVTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU8sRUFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsR0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO0lBQ3pHLENBQUM7SUFDRCxZQUFZO1FBQ1YsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsT0FBTyxDQUFDLENBQVE7UUFDZCxJQUFJLE9BQU8sR0FBRyxtQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkUsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQ2pDLE9BQU87Z0JBQ0wsTUFBTSxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4QjtTQUNGO2FBQ0c7WUFDRixPQUFPO2dCQUNMLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDeEI7U0FDRjtJQUNILENBQUM7SUFDRCxjQUFjO1FBQ1osSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLFFBQUMsQ0FBQyxPQUFPLEVBQVcsQ0FBQztRQUNoQyxJQUFJLFFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBQ2xDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDdEIsSUFBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUM7Z0JBQzVFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztnQkFDM0QsSUFBRyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQztvQkFDaEUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUM5QztnQkFDRCxJQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO29CQUNuQixNQUFNO2lCQUNQO2FBQ0Y7U0FDRjtRQUNELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDdEIsSUFBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUM7Z0JBQzVFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztnQkFDM0QsSUFBRyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQztvQkFDaEUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUM5QztnQkFDRCxJQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO29CQUNuQixNQUFNO2lCQUNQO2FBQ0Y7U0FDRjtRQUNELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDdEIsSUFBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUM7Z0JBQzVFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztnQkFDM0QsSUFBRyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQztvQkFDaEUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUM5QztnQkFDRCxJQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO29CQUNuQixNQUFNO2lCQUNQO2FBQ0Y7U0FDRjtRQUNELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDdEIsSUFBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUM7Z0JBQzVFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztnQkFDM0QsSUFBRyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQztvQkFDaEUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUM5QztnQkFDRCxJQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO29CQUNuQixNQUFNO2lCQUNQO2FBQ0Y7U0FDRjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxjQUFjO1FBQ1osSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLFFBQUMsQ0FBQyxPQUFPLEVBQVcsQ0FBQztRQUNoQyxJQUFJLFFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBQ2xDLEtBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQztZQUNqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDN0MsSUFBRyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQztnQkFDakUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2FBQ2hDO1lBQ0QsSUFBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztnQkFDbkIsTUFBTTthQUNQO1NBQ0Y7UUFDRCxLQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDaEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUcsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUM7Z0JBQ2pFLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQzthQUNoQztZQUNELElBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7Z0JBQ25CLE1BQU07YUFDUDtTQUNGO1FBQ0QsS0FBSSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQ2pDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFHLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDO2dCQUNqRSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDaEM7WUFDRCxJQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO2dCQUNuQixNQUFNO2FBQ1A7U0FDRjtRQUNELEtBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQztZQUNoQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDN0MsSUFBRyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQztnQkFDakUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2FBQ2hDO1lBQ0QsSUFBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztnQkFDbkIsTUFBTTthQUNQO1NBQ0Y7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBQ0QsZUFBZTtRQUNiLEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBQztZQUN0QixpQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ1g7SUFDSCxDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksSUFBSSxHQUFHLFFBQUMsQ0FBQyxLQUFLLENBQUMsWUFBcUIsQ0FBQztRQUN2QyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFDO2dCQUUvQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDO29CQUNoRSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN4QjthQUNGO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBQ0QsYUFBYTtRQUNYOzs7O1VBSUU7SUFDSixDQUFDOztBQWpMSCxzQkFrTEM7QUExS1Esb0JBQWMsR0FBb0I7SUFDdkMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLO0NBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNILHVGQUErRDtBQU8vRCxNQUFzQixjQUFlLFNBQVEsb0JBQVc7SUFHdEQsWUFBWSxLQUFlLEVBQUMsVUFBa0I7UUFDNUMsS0FBSyxDQUFDLEtBQUssRUFBQyxVQUFVLENBQUMsQ0FBQztRQUgxQixVQUFLLEdBQUcsS0FBSyxDQUFDO0lBSWQsQ0FBQztJQUNELE1BQU0sQ0FBQyxDQUFRO1FBQ2IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQThCLENBQUM7UUFDaEQsSUFBRyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Q0FDRjtBQVpELHdDQVlDO0FBRUQsTUFBYSx3QkFBeUIsU0FBUSxzQkFBYTtJQUd6RCxZQUFZLEtBQWU7UUFDekIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSGYsVUFBSyxHQUFHLEtBQUssQ0FBQztJQUlkLENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBUTtRQUNiLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUE4QixDQUFDO1FBQ2hELElBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0NBQ0Y7QUFaRCw0REFZQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDRCwrSEFBb0U7QUFJcEUsTUFBYSxHQUFJLFNBQVEsK0JBQWM7SUFBdkM7O1FBQ0UsZUFBVSxHQUFHLG1CQUFtQjtRQUNoQyxjQUFTLEdBQUcsSUFBSTtRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFNBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNuQixDQUFDO0NBQUE7QUFSRCxrQkFRQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RELG9GQUFzRDtBQUV0RCx3RUFBMEI7QUFrQjFCLE1BQWEsTUFBTyxTQUFRLFlBQUc7SUFRN0IsWUFBWSxLQUFlLEVBQUMsTUFBd0I7UUFDbEQsS0FBSyxDQUFDLEtBQUssRUFBQyxNQUFNLENBQUMsQ0FBQztRQVJ0QixlQUFVLEdBQUcsc0JBQXNCLENBQUM7UUFDcEMsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFNBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBSWhCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBVztRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyx3QkFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFDO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUNELGdCQUFnQjtJQUVoQixDQUFDO0NBQ0Y7QUF2QkQsd0JBdUJDO0FBRUQsTUFBYSxNQUFPLFNBQVEsTUFBTTtJQWNoQyxZQUFZLEtBQWUsRUFBQyxNQUF3QjtRQUNsRCxLQUFLLENBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBZHRCLGVBQVUsR0FBRyw2QkFBNkIsQ0FBQztRQUMzQyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixTQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDakIsV0FBTSxHQUFHO1lBQ1AsUUFBUSxFQUFDLENBQUM7WUFDVixRQUFRLEVBQUMsQ0FBQztZQUNWLEtBQUssRUFBQyxFQUFFO1lBQ1IsTUFBTSxFQUFDLEVBQUU7U0FDVjtRQUdDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELGFBQWE7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMseUJBQXlCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQVc7UUFDaEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFHLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFDO1lBQzFCLElBQUksTUFBTSxHQUFHLHdCQUFlLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQztRQUM1QixJQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFDO1lBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxJQUFJLEdBQUcsUUFBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDaEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxDQUFDLEtBQUssRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7WUFDdkIsS0FBSSxJQUFJLFNBQVMsSUFBSSxVQUFVLEVBQUM7Z0JBQzlCLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUE4QixDQUFDO2dCQUNsRCxJQUFvQixTQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQztvQkFDMUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztpQkFDaEM7Z0JBQ0QsSUFBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztvQkFDdEMsSUFBSSxLQUFLLEdBQUcsU0FBbUIsQ0FBQztvQkFDaEMsSUFBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBQzt3QkFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztxQkFDN0I7aUJBQ0Y7YUFDRjtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUM5QyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZCLEtBQUssRUFBQyxHQUFHO2dCQUNULE1BQU0sRUFBQyxHQUFHO2FBQ1gsRUFBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2IsS0FBSSxJQUFJLFFBQVEsSUFBSSxvQkFBb0IsRUFBQztnQkFDdkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBQyxHQUFHLENBQUM7Z0JBQ2xDLElBQUcsVUFBVSxHQUFHLENBQUM7b0JBQ2YsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFFakIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQWtCLENBQUM7Z0JBQzFDLElBQUksVUFBVSxHQUFHLHdCQUFlLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hGLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFDLEVBQUUsQ0FBQztnQkFDN0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUMsRUFBRSxDQUFDO2FBQzlDO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztDQUNGO0FBdEVELHdCQXNFQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIRCxxRkFBZ0M7QUFDaEMsb0dBQTBDO0FBQzFDLDRFQUEwQjtBQUMxQixxRkFBZ0M7QUFDaEMsbUhBQW9EO0FBQ3BELHFGQUFnQztBQUNoQywrRUFBNEI7QUFDNUIscUZBQWdDO0FBQ2hDLDRFQUEwQjtBQUMxQiwrRUFBNEI7QUFDNUIscUZBQWdDO0FBQ2hDLCtFQUE0QjtBQUM1QiwrRUFBNEI7QUFDNUIscUZBQWdDO0FBQ2hDLGtGQUE4QjtBQUM5QiwrRUFBNEI7QUFDNUIsd0ZBQWtDO0FBQ2xDLHdGQUFrQztBQUN2QixlQUFPLEdBQVc7SUFDNUIsTUFBTSxFQUFDLGVBQU07SUFDYixXQUFXLEVBQUMseUJBQVc7SUFDdkIsR0FBRyxFQUFDLFNBQUc7SUFDUCxNQUFNLEVBQUMsZUFBTTtJQUNiLGdCQUFnQixFQUFDLG1DQUFnQjtJQUNqQyxNQUFNLEVBQUMsZUFBTTtJQUNiLElBQUksRUFBQyxXQUFJO0lBQ1QsTUFBTSxFQUFDLGVBQU07SUFDYixHQUFHLEVBQUMsU0FBRztJQUNQLElBQUksRUFBQyxXQUFJO0lBQ1QsTUFBTSxFQUFDLGVBQU07SUFDYixJQUFJLEVBQUMsV0FBSTtJQUNULElBQUksRUFBQyxXQUFJO0lBQ1QsTUFBTSxFQUFDLGVBQU07SUFDYixLQUFLLEVBQUMsYUFBSztJQUNYLElBQUksRUFBQyxXQUFJO0lBQ1QsT0FBTyxFQUFDLGlCQUFPO0lBQ2YsT0FBTyxFQUFDLGlCQUFPO0NBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRCw4RUFBd0Q7QUFFeEQsOEZBQXlDO0FBQ3pDLHdGQUFxQztBQUNyQyx3RkFBcUM7QUFFckMsOEZBQTJDO0FBQzNDLDJGQUF5QztBQUN6Qyx3RkFBdUM7QUFDdkMsd0ZBQXVDO0FBQ3ZDLG1FQUFzRDtBQUN0RCx3RUFBMEI7QUFFMUIsb0ZBQXdDO0FBR3hDLDBGQUEyRDtBQUMzRCxzRkFBdUM7QUFDdkMsSUFBSSxJQUFJLEdBQUcsTUFBaUMsQ0FBQztBQUM3QyxJQUFZLElBR1g7QUFIRCxXQUFZLElBQUk7SUFDZCxpQ0FBSztJQUNMLGlDQUFLO0FBQ1AsQ0FBQyxFQUhXLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQUdmO0FBT0QsU0FBUyxlQUFlLENBQUMsR0FBWSxFQUFDLFFBQWUsRUFBQyxPQUFjO0lBQ2xFLE9BQU87UUFDTCxRQUFRLEVBQUMsR0FBRztRQUNaLFFBQVEsRUFBQztZQUNQLENBQUMsRUFBQyxDQUFDO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELFFBQVE7UUFDUixPQUFPLEVBQUM7WUFDTixLQUFLLEVBQUMsT0FBTztZQUNiLE1BQU0sRUFBQyxPQUFPO1NBQ2Y7S0FDRjtBQUNILENBQUM7QUFhRCxNQUFhLEtBQU0sU0FBUSxXQUFpQjtJQUcxQyxZQUFZLElBQWtCO1FBQzVCLEtBQUssQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFGbkIsbUJBQWMsR0FBQyxxQkFBcUIsQ0FBQztRQUduQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRztZQUNuQixJQUFJLGVBQU0sQ0FBQztnQkFDVCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxVQUFVLEVBQUM7b0JBQ1QsTUFBTSxFQUFDLDJCQUFxQixFQUFFLENBQUMsTUFBTTtvQkFDckMsS0FBSyxFQUFDLDJCQUFxQixFQUFFLENBQUMsS0FBSztpQkFDcEM7Z0JBQ0QsT0FBTyxFQUFDLElBQUk7Z0JBQ1osS0FBSyxFQUFDLEtBQUs7YUFDWixFQUFDO2dCQUNBLENBQUMsRUFBQyxDQUFDO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUNILEtBQUssRUFBQyxDQUFDO2dCQUNQLE1BQU0sRUFBQyxDQUFDO2FBQ1QsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSztZQUNmLFdBQVcsRUFBQyxFQUFFO1lBQ2QsV0FBVyxFQUFDLEVBQUU7WUFDZCxRQUFRLEVBQUMsU0FBUztZQUNsQiwwQkFBMEIsRUFBQyxTQUFTO1lBQ3BDLE9BQU8sRUFBQyxFQUFFO1lBQ1YsTUFBTSxFQUFDLEVBQUU7WUFDVCxRQUFRLEVBQUMsRUFBRTtZQUNYLFFBQVEsRUFBQyxLQUFLO1NBQ2YsQ0FBQztRQUVGLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxXQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksZUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLGVBQU0sQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxhQUFLLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksV0FBSSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLGVBQU0sQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxlQUFNLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksV0FBSSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzllLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxXQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksZUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLGVBQU0sQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxhQUFLLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksV0FBSSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLGVBQU0sQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxlQUFNLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksV0FBSSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzllLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksV0FBSSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztZQUN2RSxJQUFJLEtBQUssR0FBRyxJQUFJLFdBQUksQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7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SUFDcEUsSUFBSSxPQUFPLEdBQUcsMkJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDN0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25ELENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDcEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3ZFO1NBQ0k7UUFDSCxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckQ7QUFDSCxDQUFDO0FBRVkscUJBQWEsR0FBRyxDQUFDLENBQWUsRUFBQyxDQUFhLEVBQUUsRUFBRTtJQUM3RCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3RCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0MsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzlFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDeEQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxSSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO0lBQ2xDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDcEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3pEO1NBQ0k7UUFDSCxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdkM7SUFDRCxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLENBQUM7QUFFWSx1QkFBZSxHQUFHLENBQUMsQ0FBZ0IsRUFBRSxDQUFjLEVBQUUsRUFBRTtJQUNsRSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3RCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3hFLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FB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QUFFLENBQUM7Z0JBQ3ZCLDZCQUFxQixFQUFFLENBQUM7YUFDekI7WUFHRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsMENBQTBDO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUEzUUQsb0JBMlFDIiwiZmlsZSI6InZhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dhbWUvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7dmVsb2NpdHksb2JqX3N0YXRlLHJvb21fc3RhdGV9IGZyb20gXCIuLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtnYW1lLEdldFZpZXdwb3J0RGltZW5zaW9ucyx2aWV3cG9ydH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5sZXQgY2FudmFzX2VsZW1lbnQ6SFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbmludGVyZmFjZSBnbG9iYWxze1xyXG4gIHRlc3Q6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgZyA9IG5ldyBnYW1lPGdsb2JhbHM+KGNhbnZhc19lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKSx7XHJcbiAgdGVzdDowXHJcbn0pO1xyXG5nLmxvYWRSb29tU3RyaW5nKFwiQm9hcmRcIik7XHJcblxyXG4iLCJpbXBvcnQge3BpZWNlLHNpZGUscGllY2VfdHlwZSxwaWVjZV9wYXJhbWV0ZXJzfSBmcm9tIFwiLi9hYnN0cmFjdC9waWVjZVwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSwgcG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCaXNob3AgZXh0ZW5kcyBwaWVjZXtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvYmlzaG9wLnBuZ1wiXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0gcGllY2UuZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUse1xyXG4gICAgICBzaWRlOnBhcmFtcy5zaWRlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGUudHlwZSA9IHBpZWNlX3R5cGUuYmlzaG9wO1xyXG4gIH1cclxuICBnZXRBdHRhY2tpbmcoKTpBcnJheTxwb3NpdGlvbj57XHJcbiAgICByZXR1cm4gdGhpcy5hdHRhY2tEaWFnb25hbCgpO1xyXG4gIH1cclxufSIsIlxuICAgIFxuICAgIGltcG9ydCB7IFRleHQgfSBmcm9tIFwiLi4vLi4vbGliL2h1ZFwiO1xuaW1wb3J0IHtvYmp9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XG4gICAgaW1wb3J0IHsgb2JqX3N0YXRlLCBwb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcbmltcG9ydCB7IGd9IGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQge2RlZXB9IGZyb20gXCIuLi8uLi92YW5cIjtcbiAgICBcbiAgICBpbnRlcmZhY2UgQm9hcmRfTGFiZWxfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIGludGVyZmFjZSBCb2FyZF9MYWJlbF9wYXJhbWV0ZXJze1xuICAgICAgY2hhcmFjdGVyOnN0cmluZ1xuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgQm9hcmRfTGFiZWwgZXh0ZW5kcyBvYmp7XG4gICAgICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvRXJyb3IucG5nXCI7XG4gICAgICBoZWlnaHQgPSAxMDA7XG4gICAgICB3aWR0aCA9IDEwMDtcbiAgICAgIHRhZ3M6QXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgcm90YXRpb24gPSAwO1xuICAgICAgc2NhbGluZyA9IDE7XG4gICAgICBwYXJhbXM6Qm9hcmRfTGFiZWxfcGFyYW1ldGVycztcbiAgICAgIGJvdW5kID0gZmFsc2U7XG4gICAgICBzdGF0aWMgZGVmYXVsdF9wYXJhbXM6Qm9hcmRfTGFiZWxfcGFyYW1ldGVycyA9IHtcbiAgICAgICAgY2hhcmFjdGVyOlwiQVwiXG4gICAgICB9XG4gICAgICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOkJvYXJkX0xhYmVsX3BhcmFtZXRlcnMgPSBkZWVwKEJvYXJkX0xhYmVsLmRlZmF1bHRfcGFyYW1zKSl7XG4gICAgICAgIHN1cGVyKHN0YXRlLHBhcmFtcyk7XG4gICAgICB9XG4gICAgICBzdGF0ZWYodGltZV9kZWx0YTpudW1iZXIpe1xuICAgICAgICBpZihnLmdldFJvb20oKSAmJiAhdGhpcy5ib3VuZCl7XG4gICAgICAgICAgdGhpcy5ib3VuZCA9IHRydWU7XG4gICAgICAgICAgZy5nZXRSb29tKCkudGV4dF9ub2Rlcy5wdXNoKG5ldyBUZXh0KHtcbiAgICAgICAgICAgIHBvc2l0aW9uOnRoaXMuc3RhdGUucG9zaXRpb24sXG4gICAgICAgICAgICBzaXplOjIyLFxuICAgICAgICAgICAgc2NhbGluZzoxLFxuICAgICAgICAgICAgZm9udDpcIkFyaWFsXCIsXG4gICAgICAgICAgICBjb2xvcjpcIndoaXRlXCJcbiAgICAgICAgICB9LCgpPT50aGlzLnBhcmFtcy5jaGFyYWN0ZXIpKTtcbiAgICAgICAgICB0aGlzLnRpY2tfc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVuZGVyZih0aW1lX2RlbHRhOm51bWJlcil7XG4gICAgICAgcmV0dXJuIHN1cGVyLnJlbmRlcmYodGltZV9kZWx0YSk7IFxuICAgICAgfVxuICAgICAgcmVnaXN0ZXJfYW5pbWF0aW9ucygpe1xuICAgIFxuICAgICAgfVxuICAgICAgcmVnaXN0ZXJfYXVkaW8oKXtcbiAgICBcbiAgICAgIH1cbiAgICAgIHJlZ2lzdGVyX2NvbnRyb2xzKCl7XG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAiLCJpbXBvcnQgeyBleGVjX3R5cGUgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IEdvb21iYSwgZGlyZWN0aW9uLCBQbGF5ZXJfUGFyYW1zIH0gZnJvbSBcIi4vR29vbWJhXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZWRQbGF5ZXIgZXh0ZW5kcyBHb29tYmEge1xyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6UGxheWVyX1BhcmFtcyl7XHJcbiAgICBzdXBlcihzdGF0ZSxwYXJhbXMpO1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xyXG4gIH1cclxuICB0YWdzID0gW1wicGxheWVyXCJdO1xyXG4gIHJlZ2lzdGVyQ29udHJvbHMoKSB7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwiS2V5QVwiLCBleGVjX3R5cGUucmVwZWF0LCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnggPiAtMTApIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggPSB0aGlzLnN0YXRlLnZlbG9jaXR5LnggLSAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJLZXlBXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdGUuZGlyZWN0aW9uID0gZGlyZWN0aW9uLmxlZnQ7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCAtIDAuMTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIm1vdXNlMGRvd25cIiwgZXhlY190eXBlLnJlcGVhdCwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmF1ZGlvLnBsYXkoXCJleHBsb3Npb25cIiwgMC40KTtcclxuICAgIH0sIDQwMCk7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwiS2V5RFwiLCBleGVjX3R5cGUucmVwZWF0LCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnggPCAxMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCArIDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIktleURcIiwgZXhlY190eXBlLm9uY2UsICgpID0+IHtcclxuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24ucmlnaHQ7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCArIDAuMTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIlNwYWNlXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5qdW1waW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ICs9IDI1O1xyXG4gICAgICAgIHRoaXMuYXVkaW8ucGxheShcInNsaW1lXCIsIDAuMSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBvYmpfc3RhdGUsIHBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybWVyX29iaiB9IGZyb20gXCIuL2Fic3RyYWN0L3BsYXRmb3JtZXJfb2JqXCI7XHJcblxyXG5pbnRlcmZhY2UgY3Vyc29yX3BhcmFtc3tcclxuICBpZDpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnNvciBleHRlbmRzIHBsYXRmb3JtZXJfb2JqIHtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvY3Vyc29yLnBuZ1wiO1xyXG4gIGhlaWdodCA9IDY0O1xyXG4gIHdpZHRoID0gNjQ7XHJcbiAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICByZW5kZXIgPSB0cnVlO1xyXG4gIHRhZ3MgPSBbXCJDdXJzb3JcIl07XHJcbn1cclxuIiwiXG4gICAgXG4gICAgaW1wb3J0IHtvYmp9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XG4gICAgaW1wb3J0IHsgb2JqX3N0YXRlLCBwb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcbmltcG9ydCB7IGcgfSBmcm9tIFwiLi4vbWFpblwiO1xuICAgIFxuICAgIGludGVyZmFjZSBEb29yX3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRle1xuICAgIFxuICAgIH1cbiAgICBcbiAgICBpbnRlcmZhY2UgRG9vcl9wYXJhbWV0ZXJze1xuICAgICAgbG9jYXRpb246c3RyaW5nLFxuICAgICAgdGVzdDpib29sZWFuLFxuICAgICAgeWVwOm51bWJlclxuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgRG9vciBleHRlbmRzIG9iantcbiAgICAgIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy90YXJnZXQucG5nXCI7XG4gICAgICBoZWlnaHQgPSAxMDA7XG4gICAgICB3aWR0aCA9IDEwMDtcbiAgICAgIHRhZ3M6QXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICByZW5kZXIgPSB0cnVlO1xuICAgICAgc3RhdGU6RG9vcl9zdGF0ZTtcbiAgICAgIHBhcmFtczpEb29yX3BhcmFtZXRlcnM7XG4gICAgICBzdGF0aWMgZGVmYXVsdF9wYXJhbXM6RG9vcl9wYXJhbWV0ZXJzID0ge1xuICAgICAgICBsb2NhdGlvbjpcIlVuZGVyd29ybGRcIixcbiAgICAgICAgdGVzdDp0cnVlLFxuICAgICAgICB5ZXA6MTVcbiAgICAgIH1cbiAgICAgIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6RG9vcl9wYXJhbWV0ZXJzID0gRG9vci5kZWZhdWx0X3BhcmFtcyl7XG4gICAgICAgIHN1cGVyKHN0YXRlLHBhcmFtcyk7XG4gICAgICB9XG4gICAgICBzdGF0ZWYodGltZV9kZWx0YTpudW1iZXIpe1xuICAgICAgICBsZXQgY29sbGlkZXMgPSBnLmdldFJvb20oKS5jaGVja0NvbGxpc2lvbnModGhpcy5nZXRGdWxsQ29sbGlzaW9uQm94KCkpXG4gICAgICAgIGZvcihsZXQgb2JqIG9mIGNvbGxpZGVzKXtcbiAgICAgICAgICBpZihvYmoudGFncy5pbmNsdWRlcyhcInBsYXllclwiKSl7XG4gICAgICAgICAgICBnLmxvYWRSb29tU3RyaW5nKHRoaXMucGFyYW1zLmxvY2F0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlbmRlcmYodGltZV9kZWx0YTpudW1iZXIpe1xuICAgICAgIHJldHVybiBzdXBlci5yZW5kZXJmKHRpbWVfZGVsdGEpOyBcbiAgICAgIH1cbiAgICAgIHJlZ2lzdGVyQW5pbWF0aW9ucygpe1xuICAgIFxuICAgICAgfVxuICAgICAgcmVnaXN0ZXJBdWRpbygpe1xuICAgIFxuICAgICAgfVxuICAgICAgcmVnaXN0ZXJDb250cm9scygpe1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgIiwiaW1wb3J0IHsgdmVsb2NpdHksIG9ial9zdGF0ZSwgc3RhdGVfZnVuYyxwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBzcHJpdGUsIHNwcml0ZV9nZW4gfSBmcm9tIFwiLi4vLi4vbGliL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBvYmogfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybWVyX29iaiwgcGxhdGZvcm1lcl9vYmpfY29tcG9zaXRlLCBwbGF0X3N0YXRlIH0gZnJvbSBcIi4vYWJzdHJhY3QvcGxhdGZvcm1lcl9vYmpcIjtcclxuaW1wb3J0IHsgUG9sbF9Nb3VzZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgY29sbGlzaW9uX2JveCB9IGZyb20gXCIuLi8uLi9saWIvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IEJpbmQgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7VGV4dF9Ob2RlLFRleHR9IGZyb20gXCIuLi8uLi9saWIvaHVkXCI7XHJcbmltcG9ydCB7IE92ZXJ3b3JsZCB9IGZyb20gXCIuLi9yb29tcy9PdmVyd29ybGRcIjtcclxuaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9tYWluXCI7XHJcblxyXG5leHBvcnQgZW51bSBkaXJlY3Rpb24ge1xyXG4gIGxlZnQsXHJcbiAgcmlnaHRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBnb29tYmFfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGUsIHBsYXRfc3RhdGUge1xyXG4gIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxyXG4gIGp1bXBpbmc6IGJvb2xlYW4sXHJcbiAgdGltZXNfYWlyc2hvdDogbnVtYmVyLFxyXG4gIG1heF90aW1lc19haXJzaG90OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBndW5fc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGUge1xyXG4gIHJvdGF0aW9uOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXJfUGFyYW1ze1xyXG4gIGlkOnN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgZ29vbWJhX3BhcmFtc3tcclxuICBpZD86c3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHb29tYmEgZXh0ZW5kcyBwbGF0Zm9ybWVyX29iantcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvZm9sZGVyL3JvYm90LnBuZ1wiO1xyXG4gIGhlaWdodCA9IDE0OTtcclxuICB3aWR0aCA9IDE0OTtcclxuICB0YWdzID0gW1wiZHVtbXlcIl1cclxuICBjb2xsaXNpb24gPSB0cnVlO1xyXG4gIGhlYWx0aF90ZXh0OiBUZXh0O1xyXG4gIHN0YXRlOmdvb21iYV9zdGF0ZTtcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1ldGVyczpnb29tYmFfcGFyYW1zID0gR29vbWJhLmRlZmF1bHRfcGFyYW1zKSB7XHJcbiAgICBcclxuICAgIHN1cGVyKHN0YXRlLHBhcmFtZXRlcnMpO1xyXG4gICAgaWYgKHBhcmFtZXRlcnMuaWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuaWQgPSBwYXJhbWV0ZXJzLmlkO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLHtcclxuICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24ubGVmdCxcclxuICAgICAganVtcGluZzogZmFsc2UsXHJcbiAgICAgIGhlYWx0aDogMTAwLFxyXG4gICAgICB0aW1lc19haXJzaG90OiAwLFxyXG4gICAgICBtYXhfdGltZXNfYWlyc2hvdDogMFxyXG4gICAgfSlcclxuICAgIC8vdGhpcy5hbmltYXRpb25zLnBsYXkoXCJ3YWxrMVwiKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJBbmltYXRpb25zKCkge1xyXG4gICAgbGV0IHNwcml0ZXMgPSBzcHJpdGVfZ2VuKHRoaXMuc3ByaXRlX3NoZWV0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKFwid2FsazFcIiwgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVswXV0sXHJcbiAgICAgIFsxMDAsIHNwcml0ZXNbMF1bMV1dLFxyXG4gICAgICBbNDAwLCBzcHJpdGVzWzBdWzBdXSxcclxuICAgICAgWzUwMCwgc3ByaXRlc1swXVsyXV1cclxuICAgIF0sIDgwMClcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoXCJ3YWxrMlwiLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzVdXSxcclxuICAgICAgWzEwMCwgc3ByaXRlc1swXVs0XV0sXHJcbiAgICAgIFs0MDAsIHNwcml0ZXNbMF1bNV1dLFxyXG4gICAgICBbNTAwLCBzcHJpdGVzWzBdWzNdXVxyXG4gICAgXSwgODAwKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZChcImlkbGVsZWZ0XCIsIFtcclxuICAgICAgWzAsIHNwcml0ZXNbMF1bMF1dXHJcbiAgICBdLCAxKTtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2lkbGVyaWdodCcsIFtcclxuICAgICAgWzAsIHNwcml0ZXNbMF1bNV1dXHJcbiAgICBdLCAxKTtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2ZhbGxsZWZ0JywgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVs2XV1cclxuICAgIF0sIDEpO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnZmFsbHJpZ2h0JywgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVs3XV1cclxuICAgIF0sIDEpXHJcbiAgfVxyXG4gIHJlZ2lzdGVyQXVkaW8oKSB7XHJcbiAgICB0aGlzLmF1ZGlvLmFkZChcInNsaW1lXCIsIFwiLi9zb3VuZHMvZ29vbWJhL3NsaW1lYmFsbC53YXZcIik7XHJcbiAgICB0aGlzLmF1ZGlvLmFkZChcImV4cGxvc2lvblwiLCBcIi4vc291bmRzL2V4cGxvc2lvbi5tcDNcIilcclxuICB9XHJcbiAgcmVuZGVyZih0OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmp1bXBpbmcpIHtcclxuICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuc3RhdGUuZGlyZWN0aW9uID09IGRpcmVjdGlvbi5sZWZ0ID8gXCJmYWxsbGVmdFwiIDogXCJmYWxscmlnaHRcIjtcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoYW5pbWF0aW9uKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA9PSAwICYmIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9PSAwKSB7XHJcbiAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PSBkaXJlY3Rpb24ubGVmdCA/IFwiaWRsZWxlZnRcIiA6IFwiaWRsZXJpZ2h0XCI7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KGFuaW1hdGlvbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghdGhpcy5hbmltYXRpb25zLmFuaW1hdGluZykge1xyXG4gICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT0gZGlyZWN0aW9uLmxlZnQgPyBcIndhbGsxXCIgOiBcIndhbGsyXCI7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KGFuaW1hdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VwZXIucmVuZGVyZih0KTtcclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6IG51bWJlcikge1xyXG4gICAgbGV0IHJvb20gPSBnLmdldFJvb20oKTtcclxuICAgIGxldCBjdXJzb3IgPSByb29tLmdldE9iaihcImN1cnNvclwiKTtcclxuICAgIGlmICh0aGlzLmNvbGxpc2lvbikge1xyXG4gICAgICBsZXQgY29sID0gdGhpcy5nZXRGdWxsQ29sbGlzaW9uQm94KCk7XHJcbiAgICAgIGlmIChyb29tLmNoZWNrQ29sbGlzaW9ucyh7XHJcbiAgICAgICAgd2lkdGg6IGNvbC53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IDEsXHJcbiAgICAgICAgeDogY29sLngsXHJcbiAgICAgICAgeTogY29sLnkgLSBjb2wuaGVpZ2h0IC8gMiAtIDEsXHJcbiAgICAgIH0pLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmp1bXBpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXRlLm1heF90aW1lc19haXJzaG90ID0gTWF0aC5tYXgodGhpcy5zdGF0ZS50aW1lc19haXJzaG90LCB0aGlzLnN0YXRlLm1heF90aW1lc19haXJzaG90KTtcclxuICAgICAgICB0aGlzLnN0YXRlLnRpbWVzX2FpcnNob3QgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuanVtcGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPiAwKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9IHRoaXMuc3RhdGUudmVsb2NpdHkueSAtIDAuNCAqIDE2IC8gdGltZTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueSA8IDApXHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPCAwKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9IHRoaXMuc3RhdGUudmVsb2NpdHkueSArIDAuNCAqIDE2IC8gdGltZTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueSA+IDApXHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnggPiAwKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuZGlyZWN0aW9uID0gZGlyZWN0aW9uLnJpZ2h0O1xyXG4gICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggPSB0aGlzLnN0YXRlLnZlbG9jaXR5LnggLSAwLjQgKiAxNiAvIHRpbWU7O1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS54IDwgMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA8IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24ubGVmdDtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54ICsgMC40ICogMTYgLyB0aW1lOztcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA+IDApIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7cG9zaXRpb24sIG9ial9zdGF0ZX0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyByb3RhdGlvbl9sZW5ndGggfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybWVyX29iaiB9IGZyb20gXCIuL2Fic3RyYWN0L3BsYXRmb3JtZXJfb2JqXCI7XHJcbmltcG9ydCB7IGcgfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5pbXBvcnQgeyBDdXJzb3IgfSBmcm9tIFwiLi9DdXJzb3JcIjtcclxuaW1wb3J0IHsgZ3VuX3N0YXRlLCBHb29tYmEgfSBmcm9tIFwiLi9Hb29tYmFcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR3VuIGV4dGVuZHMgcGxhdGZvcm1lcl9vYmoge1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9mb2xkZXIvZ3VuLnBuZ1wiO1xyXG4gIGhlaWdodCA9IDUwO1xyXG4gIHdpZHRoID0gMjA7XHJcbiAgY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgcmVuZGVyID0gdHJ1ZTtcclxuICBwbGF5ZXI6IEdvb21iYTtcclxuICBncmF2aXR5ID0gZmFsc2U7XHJcbiAgY3Vyc29yOiBDdXJzb3I7XHJcbiAgdGFncyA9IFtcImd1blwiXTtcclxuICBzdGF0ZWYodDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5wbGF5ZXIpIHtcclxuICAgICAgbGV0IGFuZ2xlID0gdGhpcy5wbGF5ZXIuYW5nbGVUb3dhcmRzKHRoaXMuY3Vyc29yKTtcclxuICAgICAgbGV0IHJvdCA9IHJvdGF0aW9uX2xlbmd0aCg1MCwgYW5nbGUpO1xyXG4gICAgICB0aGlzLnN0YXRlLnJvdGF0aW9uID0gYW5nbGU7XHJcbiAgICAgIHRoaXMuc3RhdGUucG9zaXRpb24gPSB7XHJcbiAgICAgICAgeDogcm90LnggKyB0aGlzLnBsYXllci5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHJvdC55ICsgdGhpcy5wbGF5ZXIuc3RhdGUucG9zaXRpb24ueVxyXG4gICAgICB9O1xyXG5cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBsZXQgcm9vbSA9IGcuZ2V0Um9vbSgpO1xyXG4gICAgICB0aGlzLnBsYXllciA9IHRoaXMucGFyZW50LmdldEl0ZW1zQnlUYWcoXCJwbGF5ZXJcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICB0aGlzLmN1cnNvciA9IDxDdXJzb3I+cm9vbS5nZXRPYmpCeVRhZyhcIkN1cnNvclwiKVswXTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7cGllY2Usc2lkZSxwaWVjZV90eXBlLHBpZWNlX3BhcmFtZXRlcnN9IGZyb20gXCIuL2Fic3RyYWN0L3BpZWNlXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlLCBwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge0JvYXJkfSBmcm9tIFwiLi4vcm9vbXMvQm9hcmRcIjtcclxuaW1wb3J0IHtnfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtpbmcgZXh0ZW5kcyBwaWVjZXtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMva2luZy5wbmdcIlxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6cGllY2VfcGFyYW1ldGVycyA9IHBpZWNlLmRlZmF1bHRfcGFyYW1zKXtcclxuICAgIHN1cGVyKHN0YXRlLHtcclxuICAgICAgc2lkZTpwYXJhbXMuc2lkZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXRlLnR5cGUgPSBwaWVjZV90eXBlLmtpbmc7XHJcbiAgfVxyXG4gIGNoZWNrX2xlZnRfY2FzdGxlKHJvb206Qm9hcmQsY29yZHM6cG9zaXRpb24pe1xyXG4gICAgaWYoIXRoaXMuc3RhdGUuaGFzX21vdmVkICYmIHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggLSAxLHk6Y29yZHMueX0pLmxlbmd0aCA9PSAwICYmIHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggLSAyLHk6Y29yZHMueX0pLmxlbmd0aCA9PSAwICYmIHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggLSAzLCB5OmNvcmRzLnl9KS5sZW5ndGggPT0gMCl7XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhcInlhXCIpXHJcbiAgICAgIGxldCByb29rID0gcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCAtIDQseTpjb3Jkcy55fSk7XHJcbiAgICAgIGlmKHJvb2subGVuZ3RoID4gMCAmJiAhcm9va1swXS5zdGF0ZS5oYXNfbW92ZWQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm9cIik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgY2hlY2tfcmlnaHRfY2FzdGxlKHJvb206Qm9hcmQsY29yZHM6cG9zaXRpb24pe1xyXG4gICAgaWYoIXRoaXMuc3RhdGUuaGFzX21vdmVkICYmIHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggKyAxLHk6Y29yZHMueX0pLmxlbmd0aCA9PSAwICYmIHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggKyAyLHk6Y29yZHMueX0pLmxlbmd0aCA9PSAwKXtcclxuICAgICAgbGV0IHJvb2sgPSByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54ICsgMyx5OmNvcmRzLnl9KTtcclxuICAgICAgaWYocm9vay5sZW5ndGggPiAwICYmICFyb29rWzBdLnN0YXRlLmhhc19tb3ZlZCl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgZ2V0QXR0YWNraW5nKCk6QXJyYXk8cG9zaXRpb24+e1xyXG4gICAgbGV0IGNvcmRzID0gdGhpcy5nZXRDb3JkcygpO1xyXG4gICAgbGV0IHJvb20gPSBnLmdldFJvb20oKSBhcyBCb2FyZDtcclxuICAgIGxldCBhdHRhY2tlZDpBcnJheTxwb3NpdGlvbj4gPSBbXTtcclxuICAgIGZvcihsZXQgeCA9IC0xO3ggPD0gMTsgeCsrKXtcclxuICAgICAgZm9yKGxldCB5ID0gLTE7eSA8PSAxOyB5Kyspe1xyXG4gICAgICAgIGlmKCh4ICE9PSAwIHx8IHkgIT09IDApICYmIGNvcmRzLnggKyB4ID49IDAgJiYgY29yZHMueCArIHggPCA4ICYmIGNvcmRzLnkgKyB5ID49IDAgJiYgY29yZHMueSArIHkgPCA4KXtcclxuICAgICAgICAgIGxldCBwaWVjZSA9IHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggKyB4LCB5OmNvcmRzLnkgKyB5fSk7XHJcbiAgICAgICAgICBsZXQgc2FmZSA9IHRydWU7XHJcbiAgICAgICAgICBpZihzYWZlICYmIHBpZWNlLmxlbmd0aCA9PT0gMCB8fCBwaWVjZVswXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggKyB4LCB5OmNvcmRzLnkgKyB5fSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2Nhc3RsZSBjaGVjayBsZWZ0XHJcbiAgICBpZih0aGlzLmNoZWNrX2xlZnRfY2FzdGxlKHJvb20sY29yZHMpKXtcclxuICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54IC0gMix5OmNvcmRzLnl9KTtcclxuICAgIH1cclxuICAgIGlmKHRoaXMuY2hlY2tfcmlnaHRfY2FzdGxlKHJvb20sY29yZHMpKXtcclxuICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54ICsgMix5OmNvcmRzLnl9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBhdHRhY2tlZDtcclxuICB9XHJcbn0iLCJpbXBvcnQge3BpZWNlLHNpZGUscGllY2VfdHlwZSxwaWVjZV9wYXJhbWV0ZXJzfSBmcm9tIFwiLi9hYnN0cmFjdC9waWVjZVwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSwgcG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtnfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtuaWdodCBleHRlbmRzIHBpZWNle1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9rbmlnaHQucG5nXCJcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOnBpZWNlX3BhcmFtZXRlcnMgPSBwaWVjZS5kZWZhdWx0X3BhcmFtcyl7XHJcbiAgICBzdXBlcihzdGF0ZSx7XHJcbiAgICAgIHNpZGU6cGFyYW1zLnNpZGVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGF0ZS50eXBlID0gcGllY2VfdHlwZS5rbmlnaHQ7XHJcbiAgfVxyXG4gIGdldEF0dGFja2luZygpOkFycmF5PHBvc2l0aW9uPntcclxuICAgIGxldCBjb3JkcyA9IHRoaXMuZ2V0Q29yZHMoKTtcclxuICAgIGxldCBhdHRhY2tlZDpBcnJheTxwb3NpdGlvbj4gPSBbXTtcclxuICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCArIDEseTpjb3Jkcy55ICsgMn0pO1xyXG4gICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54IC0gMSx5OmNvcmRzLnkgKyAyfSk7XHJcbiAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggKyAyLHk6Y29yZHMueSArIDF9KTtcclxuICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCArIDIseTpjb3Jkcy55IC0gMX0pO1xyXG4gICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54ICsgMSx5OmNvcmRzLnkgLSAyfSk7XHJcbiAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggLSAxLHk6Y29yZHMueSAtIDJ9KTtcclxuICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCAtIDIseTpjb3Jkcy55ICsgMX0pO1xyXG4gICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54IC0gMix5OmNvcmRzLnkgLSAxfSk7XHJcbiAgICByZXR1cm4oYXR0YWNrZWQuZmlsdGVyKCh4KT0+eC54ID49IDAgJiYgeC54IDwgOCAmJiB4LnkgPj0gMCAmJiB4LnkgPCA4KSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgQm9hcmQsIHNpZGUgfSBmcm9tIFwiLi4vcm9vbXMvQm9hcmRcIjtcclxuaW1wb3J0IHsgcGllY2UsIHBpZWNlX3R5cGUgfSBmcm9tIFwiLi9hYnN0cmFjdC9waWVjZVwiO1xyXG5pbXBvcnQgeyBRdWVlbiB9IGZyb20gXCIuL1F1ZWVuXCI7XHJcbmltcG9ydCB7IGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgb2JqX3N0YXRlLCBwb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9tYWluXCI7XHJcbmludGVyZmFjZSBtb3ZlX3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRlIHtcclxuICBwb3NpdGlvbjoge1xyXG4gICAgeDogbnVtYmVyLFxyXG4gICAgeTogbnVtYmVyXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW92ZSBleHRlbmRzIG9iaiB7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2F0dGFja2VkLnBuZ1wiO1xyXG4gIGhlaWdodCA9IDEwMDtcclxuICB3aWR0aCA9IDEwMDtcclxuICByZW5kZXIgPSBmYWxzZTtcclxuICBsYXllciA9IDI7XHJcbiAgc2F2ZV90b19maWxlID0gZmFsc2U7XHJcbiAgdGFncyA9IFtcIm1vdmVcIl07XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6IG9ial9zdGF0ZSkge1xyXG4gICAgc3VwZXIoc3RhdGUpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiBzdGF0ZS5wb3NpdGlvbi54ICogdGhpcy53aWR0aCAtIDM1MCxcclxuICAgICAgICB5OiBzdGF0ZS5wb3NpdGlvbi55ICogdGhpcy5oZWlnaHQgLSAzNTBcclxuICAgICAgfSxcclxuICAgICAgdmVsb2NpdHk6IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgICAgfSxcclxuICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgIHNjYWxpbmc6IHtcclxuICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBnZXRDb3JkcygpOiBwb3NpdGlvbiB7XHJcbiAgICByZXR1cm4geyB4OiBNYXRoLmZsb29yKCh0aGlzLnN0YXRlLnBvc2l0aW9uLnggKyAzNTApIC8gMTAwKSwgeTogTWF0aC5mbG9vcigodGhpcy5zdGF0ZS5wb3NpdGlvbi55ICsgMzUwKSAvIDEwMCkgfTtcclxuICB9XHJcbiAgZHJvcCgpe1xyXG4gICAgaWYgKHRoaXMucmVuZGVyKSB7XHJcbiAgICAgIGxldCByb29tID0gZy5zdGF0ZS5jdXJyZW50X3Jvb20gYXMgQm9hcmQ7XHJcbiAgICAgIHJvb20uc3RhdGUuc2VsZWN0ZWQuc3RhdGUucG9zaXRpb24gPSByb29tLnN0YXRlLnNlbGVjdGVkX29yaWdpbmFsX3Bvc2l0aW9uO1xyXG4gICAgICBsZXQgcCA9IHJvb20uZ2V0X3BpZWNlKHRoaXMuZ2V0Q29yZHMoKSkgYXMgcGllY2VbXTtcclxuICAgICAgbGV0IHMgPSByb29tLnN0YXRlLnNlbGVjdGVkO1xyXG4gICAgICBpZiAocy5zdGF0ZS50eXBlID09PSBwaWVjZV90eXBlLmtpbmcgJiYgIXMuc3RhdGUuaGFzX21vdmVkICYmIHRoaXMuZ2V0Q29yZHMoKS54ID09PSA2KSB7XHJcbiAgICAgICAgbGV0IHJvb2tzID0gcm9vbS5nZXRfcGllY2UoeyB4OiA3LCB5OiBzLmdldENvcmRzKCkueSB9KTtcclxuICAgICAgICByb29rc1swXS5tb3ZldG9Db3Jkcyh7IHg6IDUsIHk6IHMuZ2V0Q29yZHMoKS55IH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzLnN0YXRlLnR5cGUgPT09IHBpZWNlX3R5cGUua2luZyAmJiAhcy5zdGF0ZS5oYXNfbW92ZWQgJiYgdGhpcy5nZXRDb3JkcygpLnggPT09IDIpIHtcclxuICAgICAgICBsZXQgcm9va3MgPSByb29tLmdldF9waWVjZSh7IHg6IDAsIHk6IHMuZ2V0Q29yZHMoKS55IH0pO1xyXG4gICAgICAgIHJvb2tzWzBdLm1vdmV0b0NvcmRzKHsgeDogMywgeTogcy5nZXRDb3JkcygpLnkgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHMuc3RhdGUudHlwZSA9PT0gcGllY2VfdHlwZS5wYXduICYmICFzLnN0YXRlLmhhc19tb3ZlZCAmJiBzLnN0YXRlLnNpZGUgPT09IHNpZGUud2hpdGUgJiYgdGhpcy5nZXRDb3JkcygpLnkgPT09IDMpIHtcclxuICAgICAgICByb29tLnN0YXRlLndoaXRlX2JvYXJkW3RoaXMuZ2V0Q29yZHMoKS54XVt0aGlzLmdldENvcmRzKCkueSAtIDFdLmVucGFzc2VudCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHMuc3RhdGUudHlwZSA9PT0gcGllY2VfdHlwZS5wYXduICYmICFzLnN0YXRlLmhhc19tb3ZlZCAmJiBzLnN0YXRlLnNpZGUgPT09IHNpZGUuYmxhY2sgJiYgdGhpcy5nZXRDb3JkcygpLnkgPT09IDQpIHtcclxuICAgICAgICByb29tLnN0YXRlLmJsYWNrX2JvYXJkW3RoaXMuZ2V0Q29yZHMoKS54XVt0aGlzLmdldENvcmRzKCkueSArIDFdLmVucGFzc2VudCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHMuc3RhdGUudHlwZSA9PT0gcGllY2VfdHlwZS5wYXduICYmIHMuc3RhdGUuc2lkZSA9PSBzaWRlLmJsYWNrICYmIHJvb20uZ2V0X21ldGEodGhpcy5nZXRDb3JkcygpLCBzaWRlLndoaXRlKS5lbnBhc3NlbnQpIHtcclxuICAgICAgICBsZXQgZiA9IHJvb20uZ2V0X3BpZWNlKHsgeDogdGhpcy5nZXRDb3JkcygpLngsIHk6IHRoaXMuZ2V0Q29yZHMoKS55ICsgMSB9KTtcclxuICAgICAgICByb29tLnJlbW92ZV9waWVjZShmWzBdKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocy5zdGF0ZS50eXBlID09PSBwaWVjZV90eXBlLnBhd24gJiYgcy5zdGF0ZS5zaWRlID09IHNpZGUud2hpdGUgJiYgcm9vbS5nZXRfbWV0YSh0aGlzLmdldENvcmRzKCksIHNpZGUuYmxhY2spLmVucGFzc2VudCkge1xyXG4gICAgICAgIGxldCBmID0gcm9vbS5nZXRfcGllY2UoeyB4OiB0aGlzLmdldENvcmRzKCkueCwgeTogdGhpcy5nZXRDb3JkcygpLnkgLSAxIH0pO1xyXG4gICAgICAgIHJvb20ucmVtb3ZlX3BpZWNlKGZbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHMuc3RhdGUuaGFzX21vdmVkID0gdHJ1ZTtcclxuICAgICAgaWYgKHAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJvb20ucmVtb3ZlX3BpZWNlKHBbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgodGhpcy5nZXRDb3JkcygpLnkgPT0gNyB8fCB0aGlzLmdldENvcmRzKCkueSA9PSAwKSAmJiBzLnN0YXRlLnR5cGUgPT09IHBpZWNlX3R5cGUucGF3bikge1xyXG4gICAgICAgIGxldCBxdSA9IG5ldyBRdWVlbih7XHJcbiAgICAgICAgICBwb3NpdGlvbjogdGhpcy5nZXRDb3JkcygpLFxyXG4gICAgICAgICAgdmVsb2NpdHk6IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICAgICAgc2NhbGluZzoge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEsIHdpZHRoOiAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgeyBzaWRlOiBzLnN0YXRlLnNpZGUgfSk7XHJcbiAgICAgICAgcXUubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgcm9vbS5hZGRfcGllY2UocXUpO1xyXG4gICAgICAgICAgcm9vbS5yZW1vdmVfcGllY2Uocyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBpZiAocy5zdGF0ZS5zaWRlID09PSBzaWRlLndoaXRlKSB7XHJcbiAgICAgICAgcm9vbS5jaGFuZ2Vfc2lkZShzaWRlLmJsYWNrKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChzLnN0YXRlLnNpZGUgPT09IHNpZGUuYmxhY2spIHtcclxuICAgICAgICByb29tLmNoYW5nZV9zaWRlKHNpZGUud2hpdGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJvb20uY2xlYXJfYXR0YWNrZWQoKTtcclxuICAgICAgcm9vbS5zdGF0ZS5zZWxlY3RlZC5tb3ZldG9Db3Jkcyh0aGlzLmdldENvcmRzKCkpO1xyXG5cclxuICAgICAgcm9vbS5zdGF0ZS5hdHRhY2tlZCA9IFtdO1xyXG4gICAgICByb29tLnN0YXRlLnNlbGVjdGVkID0gdW5kZWZpbmVkO1xyXG4gICAgICByb29tLnN0YXRlLnNlbGVjdGVkX29yaWdpbmFsX3Bvc2l0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWdpc3RlckNvbnRyb2xzKCkge1xyXG4gICAgXHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwibW91c2UxXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcbiAgICAgIGlmKHRoaXMucmVuZGVyKXtcclxuICAgICAgICBsZXQgcm9vbSA9IGcuZ2V0Um9vbSgpIGFzIEJvYXJkO1xyXG4gICAgICAgIHJvb20uc3RhdGUuc2VsZWN0ZWRfb3JpZ2luYWxfcG9zaXRpb24gPSByb29tLnN0YXRlLnNlbGVjdGVkLnN0YXRlLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuZHJvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgfVxyXG59IiwiaW1wb3J0IHtwaWVjZSxzaWRlLHBpZWNlX3R5cGUscGllY2VfcGFyYW1ldGVyc30gZnJvbSBcIi4vYWJzdHJhY3QvcGllY2VcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUsIHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7Qm9hcmR9IGZyb20gXCIuLi9yb29tcy9Cb2FyZFwiO1xyXG5pbXBvcnQge2d9IGZyb20gXCIuLi9tYWluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGF3biBleHRlbmRzIHBpZWNle1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9wYXduLnBuZ1wiXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0gcGllY2UuZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUse1xyXG4gICAgICBzaWRlOnBhcmFtcy5zaWRlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGUudHlwZSA9IHBpZWNlX3R5cGUucGF3bjtcclxuICB9XHJcbiAgZ2V0QXR0YWNraW5nKCk6QXJyYXk8cG9zaXRpb24+e1xyXG4gICAgbGV0IGF0dGFja2VkOkFycmF5PHBvc2l0aW9uPiA9IFtdO1xyXG4gICAgbGV0IGNvcmRzID0gdGhpcy5nZXRDb3JkcygpO1xyXG4gICAgbGV0IHJvb20gPSBnLmdldFJvb20oKSBhcyBCb2FyZDtcclxuICAgIGlmKHRoaXMuc3RhdGUuc2lkZSA9PSBzaWRlLndoaXRlKXtcclxuICAgICAgaWYocm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCx5OmNvcmRzLnkgKyAxfSkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLngseTpjb3Jkcy55ICsgMX0pO1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmhhc19tb3ZlZCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54LHk6Y29yZHMueSArIDJ9KS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54LHk6Y29yZHMueSArIDJ9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxlZnRfY29yZHM6cG9zaXRpb24gPSB7eDpjb3Jkcy54LSAxLHk6Y29yZHMueSArIDF9O1xyXG4gICAgICBsZXQgcmlnaHRfY29yZHM6cG9zaXRpb24gPSB7eDpjb3Jkcy54KyAxLHk6Y29yZHMueSArIDF9OyBcclxuICAgICAgbGV0IGxlZnQgPSByb29tLmdldF9waWVjZShsZWZ0X2NvcmRzKTtcclxuICAgICAgbGV0IHJpZ2h0ID0gcm9vbS5nZXRfcGllY2UocmlnaHRfY29yZHMpO1xyXG4gICAgICBsZXQgbGVmdF9lbiA9IHJvb20uZ2V0X21ldGEobGVmdF9jb3JkcyxzaWRlLmJsYWNrKTtcclxuICAgICAgbGV0IHJpZ2h0X2VuID0gcm9vbS5nZXRfbWV0YShyaWdodF9jb3JkcyxzaWRlLmJsYWNrKTtcclxuICAgICAgaWYoKGNvcmRzLnggLSAxID49IDApICYmICgobGVmdC5sZW5ndGggPiAwICYmIGxlZnRbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKSB8fCAobGVmdF9lbiAmJiBsZWZ0X2VuLmVucGFzc2VudCkpKXtcclxuICAgICAgICBhdHRhY2tlZC5wdXNoKGxlZnRfY29yZHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKChjb3Jkcy54ICsgMSA8IDgpICYmICgocmlnaHQubGVuZ3RoID4gMCAmJiByaWdodFswXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpIHx8IChyaWdodF9lbiAmJiByaWdodF9lbi5lbnBhc3NlbnQpKSl7XHJcbiAgICAgICAgYXR0YWNrZWQucHVzaChyaWdodF9jb3Jkcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZihyb29tLmdldF9waWVjZSh7eDpjb3Jkcy54LHk6Y29yZHMueSAtIDF9KS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCx5OmNvcmRzLnkgLSAxfSk7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuaGFzX21vdmVkICYmIHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLngseTpjb3Jkcy55IC0gMn0pLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLngseTpjb3Jkcy55IC0gMn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgbGVmdF9jb3Jkczpwb3NpdGlvbiA9IHt4OmNvcmRzLnggLSAxLHk6Y29yZHMueSAtIDF9O1xyXG4gICAgICBsZXQgcmlnaHRfY29yZHM6cG9zaXRpb24gPSB7eDpjb3Jkcy54KyAxLHk6Y29yZHMueSAtIDF9O1xyXG4gICAgICBsZXQgbGVmdCA9IHJvb20uZ2V0X3BpZWNlKGxlZnRfY29yZHMpO1xyXG4gICAgICBsZXQgcmlnaHQgPSByb29tLmdldF9waWVjZShyaWdodF9jb3Jkcyk7XHJcbiAgICAgIGxldCBsZWZ0X2VuID0gcm9vbS5nZXRfbWV0YShsZWZ0X2NvcmRzLHNpZGUud2hpdGUpO1xyXG4gICAgICBsZXQgcmlnaHRfZW4gPSByb29tLmdldF9tZXRhKHJpZ2h0X2NvcmRzLHNpZGUud2hpdGUpO1xyXG4gICAgICBpZigoY29yZHMueCAtIDEgPj0gMCkgJiYgKChsZWZ0Lmxlbmd0aCA+IDAgJiYgbGVmdFswXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpIHx8IChsZWZ0X2VuICYmIGxlZnRfZW4uZW5wYXNzZW50KSkpe1xyXG4gICAgICAgIGF0dGFja2VkLnB1c2gobGVmdF9jb3Jkcyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoKGNvcmRzLnggKyAxIDwgOCkgJiYgKChyaWdodC5sZW5ndGggPiAwICYmIHJpZ2h0WzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSkgfHwgKHJpZ2h0X2VuICYmIHJpZ2h0X2VuLmVucGFzc2VudCkpKXtcclxuICAgICAgICBhdHRhY2tlZC5wdXNoKHJpZ2h0X2NvcmRzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dGFja2VkO1xyXG4gIH1cclxufSIsImltcG9ydCB7IG9ial9zdGF0ZSwgcG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IGNvbXBvc2l0ZV9vYmogfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJfUGFyYW1zIH0gZnJvbSBcIi4vR29vbWJhXCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZWRQbGF5ZXIgfSBmcm9tIFwiLi9Db250cm9sbGVkUGxheWVyXCI7XHJcbmltcG9ydCB7IEd1biB9IGZyb20gXCIuL0d1blwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjb21wb3NpdGVfb2Jqe1xyXG4gIGVuZW15ID0gdHJ1ZTtcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUsIHBhcmFtZXRlcnM6IFBsYXllcl9QYXJhbXMpIHtcclxuICAgIHN1cGVyKHN0YXRlKTtcclxuICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBDb250cm9sbGVkUGxheWVyKHN0YXRlLCBwYXJhbWV0ZXJzKSk7XHJcbiAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgR3VuKHtcclxuICAgICAgcG9zaXRpb246e3g6IHN0YXRlLnBvc2l0aW9uLngsIHk6IHN0YXRlLnBvc2l0aW9uLnkgKyAxMDB9LFxyXG4gICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgIHNjYWxpbmc6e2hlaWdodDoxLHdpZHRoOjF9XHJcbiAgICB9LHBhcmFtZXRlcnMpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtwaWVjZSxzaWRlLHBpZWNlX3R5cGUscGllY2VfcGFyYW1ldGVyc30gZnJvbSBcIi4vYWJzdHJhY3QvcGllY2VcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUsIHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlZW4gZXh0ZW5kcyBwaWVjZXtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvcXVlZW4ucG5nXCJcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOnBpZWNlX3BhcmFtZXRlcnMgPSBwaWVjZS5kZWZhdWx0X3BhcmFtcyl7XHJcbiAgICBzdXBlcihzdGF0ZSx7XHJcbiAgICAgIHNpZGU6cGFyYW1zLnNpZGVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGF0ZS50eXBlID0gcGllY2VfdHlwZS5xdWVlbjtcclxuICB9XHJcbiAgZ2V0QXR0YWNraW5nKCk6QXJyYXk8cG9zaXRpb24+e1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0YWNrRGlhZ29uYWwoKS5jb25jYXQodGhpcy5hdHRhY2tDYXJkaW5hbCgpKTtcclxuICB9XHJcbn0iLCJpbXBvcnQge3BpZWNlLHNpZGUscGllY2VfdHlwZSxwaWVjZV9wYXJhbWV0ZXJzfSBmcm9tIFwiLi9hYnN0cmFjdC9waWVjZVwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSwgcG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtCb2FyZH0gZnJvbSBcIi4uL3Jvb21zL0JvYXJkXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb29rIGV4dGVuZHMgcGllY2V7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL3Jvb2sucG5nXCJcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOnBpZWNlX3BhcmFtZXRlcnMgPSBwaWVjZS5kZWZhdWx0X3BhcmFtcyl7XHJcbiAgICBzdXBlcihzdGF0ZSx7XHJcbiAgICAgIHNpZGU6cGFyYW1zLnNpZGVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGF0ZS50eXBlID0gcGllY2VfdHlwZS5yb29rO1xyXG4gIH1cclxuICBnZXRBdHRhY2tpbmcoKTpBcnJheTxwb3NpdGlvbj57XHJcbiAgICByZXR1cm4gdGhpcy5hdHRhY2tDYXJkaW5hbCgpO1xyXG4gIH1cclxufSIsIlxuXG5pbXBvcnQgeyBvYmogfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xuaW1wb3J0IHsgb2JqX3N0YXRlLCBwb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcbmltcG9ydCB7IGJveCB9IGZyb20gXCIuL2JveFwiO1xuXG5cbmV4cG9ydCBjbGFzcyBSb3RhdG9yIGV4dGVuZHMgYm94IHtcbiAgc3RhdGVmKHRpbWVfZGVsdGE6IG51bWJlcikge1xuICAgIHRoaXMuc3RhdGUucm90YXRpb24gKz0gKDAuMDcgKiB0aW1lX2RlbHRhKVxuICB9XG59XG5cbiIsImltcG9ydCB7IGJveCB9IGZyb20gXCIuL2JveFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlcnRCb3ggZXh0ZW5kcyBib3gge1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9ib3gyLnBuZ1wiO1xyXG4gIHdpZHRoID0gNjQ7XHJcbiAgaGVpZ2h0ID0gNTAwO1xyXG59XHJcbiIsImltcG9ydCB7b2JqfSBmcm9tIFwiLi4vLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQge3Bvc2l0aW9uZWRfc3ByaXRlLCBzcHJpdGUsc3ByaXRlX2dlbn0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zcHJpdGVcIjtcclxuaW1wb3J0IHtib2FyZF9zdGF0ZSwgQm9hcmR9IGZyb20gXCIuLi8uLi9yb29tcy9Cb2FyZFwiO1xyXG5pbXBvcnQgeyBVbmJpbmQsIGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHtwb3NpdGlvbixvYmpfc3RhdGV9IGZyb20gXCIuLi8uLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtnfSBmcm9tIFwiLi4vLi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGVudW0gc2lkZXtcclxuICB3aGl0ZSxcclxuICBibGFja1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBwaWVjZV90eXBle1xyXG4gIHBhd24sXHJcbiAgcm9vayxcclxuICBiaXNob3AsXHJcbiAgcXVlZW4sXHJcbiAga2luZyxcclxuICBrbmlnaHRcclxufVxyXG5cclxuaW50ZXJmYWNlIHBpZWNlX3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRle1xyXG4gIHNpZGU6c2lkZSxcclxuICB0eXBlOnBpZWNlX3R5cGUsXHJcbiAgaGFzX21vdmVkOmJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwaWVjZV9wYXJhbWV0ZXJze1xyXG4gIHNpZGU6c2lkZVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgcGllY2UgZXh0ZW5kcyBvYmp7XHJcbiAgaGVpZ2h0ID0gMTAwO1xyXG4gIHdpZHRoID0gMTAwO1xyXG4gIGNvbGxpc2lvbiA9IHRydWU7XHJcbiAgcGFyYW1zOnBpZWNlX3BhcmFtZXRlcnM7XHJcbiAgc3RhdGU6cGllY2Vfc3RhdGU7XHJcbiAgdGFncyA9IFtcInBpZWNlXCJdO1xyXG4gIHNhdmVfdG9fZmlsZSA9IGZhbHNlO1xyXG4gIHN0YXRpYyBkZWZhdWx0X3BhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0ge1xyXG4gICAgc2lkZTpzaWRlLndoaXRlXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6cGllY2VfcGFyYW1ldGVycyA9IHBpZWNlLmRlZmF1bHRfcGFyYW1zKXtcclxuICAgIHN1cGVyKHN0YXRlLHBhcmFtcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwb3NpdGlvbjp7XHJcbiAgICAgICAgeDpzdGF0ZS5wb3NpdGlvbi54ICogdGhpcy53aWR0aCAtIDM1MCxcclxuICAgICAgICB5OnN0YXRlLnBvc2l0aW9uLnkgKiB0aGlzLmhlaWdodCAtIDM1MFxyXG4gICAgICB9LFxyXG4gICAgICB2ZWxvY2l0eTp7XHJcbiAgICAgICAgeDowLFxyXG4gICAgICAgIHk6MFxyXG4gICAgICB9LFxyXG4gICAgICBzaWRlOnBhcmFtcy5zaWRlLFxyXG4gICAgICB0eXBlOnVuZGVmaW5lZCxcclxuICAgICAgaGFzX21vdmVkOmZhbHNlLFxyXG4gICAgICByb3RhdGlvbjpzdGF0ZS5yb3RhdGlvbixcclxuICAgICAgc2NhbGluZzpzdGF0ZS5zY2FsaW5nXHJcbiAgICB9XHJcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcclxuICB9XHJcbiAgbW92ZXRvQ29yZHMoYTpwb3NpdGlvbil7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnggPSBhLnggKiB0aGlzLndpZHRoIC0gMzUwO1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi55ID0gYS55ICogdGhpcy5oZWlnaHQgLSAzNTA7XHJcbiAgfVxyXG4gIGdldENvcmRzKCk6cG9zaXRpb257XHJcbiAgICByZXR1cm4ge3g6TWF0aC5yb3VuZCgodGhpcy5zdGF0ZS5wb3NpdGlvbi54KzM1MCkvMTAwKSx5Ok1hdGgucm91bmQoKHRoaXMuc3RhdGUucG9zaXRpb24ueSArIDM1MCkvMTAwKX07XHJcbiAgfVxyXG4gIGdldEF0dGFja2luZygpOkFycmF5PHBvc2l0aW9uPntcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgcmVuZGVyZih0Om51bWJlcik6cG9zaXRpb25lZF9zcHJpdGV7XHJcbiAgICBsZXQgc3ByaXRlcyA9IHNwcml0ZV9nZW4odGhpcy5zcHJpdGVfc2hlZXQsdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XHJcbiAgICBpZih0aGlzLnBhcmFtcy5zaWRlID09PSBzaWRlLndoaXRlKXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcHJpdGU6c3ByaXRlc1swXVswXSxcclxuICAgICAgICB4OnRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OnRoaXMuc3RhdGUucG9zaXRpb24ueVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNwcml0ZTpzcHJpdGVzWzBdWzFdLFxyXG4gICAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYXR0YWNrRGlhZ29uYWwoKXtcclxuICAgIGxldCBjb3JkcyA9IHRoaXMuZ2V0Q29yZHMoKTtcclxuICAgIGxldCByb29tID0gZy5nZXRSb29tKCkgYXMgQm9hcmQ7XHJcbiAgICBsZXQgYXR0YWNrZWQ6QXJyYXk8cG9zaXRpb24+ID0gW107XHJcbiAgICBmb3IobGV0IGEgPSAxO2EgPCA4O2ErKyl7XHJcbiAgICAgIGlmKGNvcmRzLnggLSBhID49IDAgJiYgY29yZHMueCAtIGEgPCA4ICYmIGNvcmRzLnkgLSBhID49IDAgJiYgY29yZHMueCAtIGEgPCA4KXtcclxuICAgICAgICBsZXQgcGllY2VzID0gcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCAtIGEseTpjb3Jkcy55IC0gYX0pO1xyXG4gICAgICAgIGlmKHBpZWNlcy5sZW5ndGggPT0gMCB8fCBwaWVjZXNbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKXtcclxuICAgICAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCAtIGEseTpjb3Jkcy55IC0gYX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwaWVjZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0gIFxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gMTthIDwgODthKyspe1xyXG4gICAgICBpZihjb3Jkcy54IC0gYSA+PSAwICYmIGNvcmRzLnggLSBhIDwgOCAmJiBjb3Jkcy55ICsgYSA+PSAwICYmIGNvcmRzLnkgKyBhIDwgOCl7XHJcbiAgICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggLSBhLHk6Y29yZHMueSArIGF9KTtcclxuICAgICAgICBpZihwaWVjZXMubGVuZ3RoID09IDAgfHwgcGllY2VzWzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggLSBhLHk6Y29yZHMueSArIGF9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocGllY2VzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ICBcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IDE7YSA8IDg7YSsrKXtcclxuICAgICAgaWYoY29yZHMueCArIGEgPj0gMCAmJiBjb3Jkcy54ICsgYSA8IDggJiYgY29yZHMueSArIGEgPj0gMCAmJiBjb3Jkcy55ICsgYSA8IDgpe1xyXG4gICAgICAgIGxldCBwaWVjZXMgPSByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54ICsgYSx5OmNvcmRzLnkgKyBhfSk7XHJcbiAgICAgICAgaWYocGllY2VzLmxlbmd0aCA9PSAwIHx8IHBpZWNlc1swXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54ICsgYSx5OmNvcmRzLnkgKyBhfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBpZWNlcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgPSAxO2EgPCA4O2ErKyl7XHJcbiAgICAgIGlmKGNvcmRzLnggKyBhID49IDAgJiYgY29yZHMueCArIGEgPCA4ICYmIGNvcmRzLnkgLSBhID49IDAgJiYgY29yZHMueSAtIGEgPCA4KXtcclxuICAgICAgICBsZXQgcGllY2VzID0gcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCArIGEseTpjb3Jkcy55IC0gYX0pO1xyXG4gICAgICAgIGlmKHBpZWNlcy5sZW5ndGggPT0gMCB8fCBwaWVjZXNbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKXtcclxuICAgICAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCArIGEseTpjb3Jkcy55IC0gYX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwaWVjZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9ICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dGFja2VkO1xyXG4gIH1cclxuICBhdHRhY2tDYXJkaW5hbCgpe1xyXG4gICAgbGV0IGNvcmRzID0gdGhpcy5nZXRDb3JkcygpO1xyXG4gICAgbGV0IHJvb20gPSBnLmdldFJvb20oKSBhcyBCb2FyZDtcclxuICAgIGxldCBhdHRhY2tlZDpBcnJheTxwb3NpdGlvbj4gPSBbXTtcclxuICAgIGZvcihsZXQgYSA9IGNvcmRzLnggLSAxO2EgPj0gMDthLS0pe1xyXG4gICAgICBsZXQgcGllY2VzID0gcm9vbS5nZXRfcGllY2Uoe3g6YSx5OmNvcmRzLnl9KTtcclxuICAgICAgaWYocGllY2VzLmxlbmd0aCA9PT0gMCB8fCBwaWVjZXNbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKXtcclxuICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmEseTpjb3Jkcy55fSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYocGllY2VzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgPSBjb3Jkcy54ICsgMTthIDwgODthKyspe1xyXG4gICAgICBsZXQgcGllY2VzID0gcm9vbS5nZXRfcGllY2Uoe3g6YSx5OmNvcmRzLnl9KTtcclxuICAgICAgaWYocGllY2VzLmxlbmd0aCA9PT0gMCB8fCBwaWVjZXNbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKXtcclxuICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmEseTpjb3Jkcy55fSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYocGllY2VzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgPSBjb3Jkcy55IC0gMTthID49IDA7YS0tKXtcclxuICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLngseTphfSk7XHJcbiAgICAgIGlmKHBpZWNlcy5sZW5ndGggPT09IDAgfHwgcGllY2VzWzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54LHk6YX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHBpZWNlcy5sZW5ndGggPiAwKXtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gY29yZHMueSArIDE7YSA8IDg7YSsrKXtcclxuICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLngseTphfSk7XHJcbiAgICAgIGlmKHBpZWNlcy5sZW5ndGggPT09IDAgfHwgcGllY2VzWzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54LHk6YX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHBpZWNlcy5sZW5ndGggPiAwKXtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dGFja2VkO1xyXG4gIH1cclxuICB1bmJpbmRfY29udHJvbHMoKXtcclxuICAgIGZvcihsZXQgYSBvZiB0aGlzLmJpbmRzKXtcclxuICAgICAgVW5iaW5kKGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZWxlY3QoKXtcclxuICAgIGxldCByb29tID0gZy5zdGF0ZS5jdXJyZW50X3Jvb20gYXMgQm9hcmQ7XHJcbiAgICAgIGlmKHJvb20uc3RhdGUudHVybiA9PT0gdGhpcy5zdGF0ZS5zaWRlKXtcclxuICAgICAgICByb29tLnN0YXRlLnNlbGVjdGVkID0gdGhpcztcclxuICAgICAgICByb29tLmNsZWFyX2F0dGFja2VkKCk7XHJcbiAgICAgICAgbGV0IHZhbGlkX2F0dGFja2VkID0gW107XHJcbiAgICAgICAgZm9yKGxldCBnIG9mIHRoaXMuZ2V0QXR0YWNraW5nKCkpe1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBsZXQgcGllY2VzID0gcm9vbS5nZXRfcGllY2UoZyk7XHJcbiAgICAgICAgICBpZihwaWVjZXMubGVuZ3RoID09IDAgfHwgcGllY2VzWzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgICAgIHZhbGlkX2F0dGFja2VkLnB1c2goZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvb20uc3RhdGUuYXR0YWNrZWQgPSB2YWxpZF9hdHRhY2tlZDtcclxuICAgICAgICByb29tLmF0dGFjayh2YWxpZF9hdHRhY2tlZCk7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgYmluZF9jb250cm9scygpe1xyXG4gICAgLypcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJtb3VzZTFcIixleGVjX3R5cGUub25jZSwoKT0+e1xyXG4gICAgICB0aGlzLnNlbGVjdCgpOyAgXHJcbiAgICB9KVxyXG4gICAgKi9cclxuICB9XHJcbn0iLCJpbXBvcnQge2NvbXBvc2l0ZV9vYmosIGdyYXZpdHlfb2JqfSBmcm9tIFwiLi4vLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSxwb3NpdGlvbn0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwbGF0X3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRle1xyXG4gIGhlYWx0aDpudW1iZXIgIFxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgcGxhdGZvcm1lcl9vYmogZXh0ZW5kcyBncmF2aXR5X29iantcclxuICBlbmVteSA9IGZhbHNlO1xyXG4gIHN0YXRlOnBsYXRfc3RhdGVcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1ldGVyczp1bmtub3duKXtcclxuICAgIHN1cGVyKHN0YXRlLHBhcmFtZXRlcnMpO1xyXG4gIH1cclxuICBzdGF0ZWYoYTpudW1iZXIpe1xyXG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIHBsYXRfc3RhdGU7XHJcbiAgICBpZihzdGF0ZS5oZWFsdGggPD0gMCl7XHJcbiAgICAgIHRoaXMuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgcGxhdGZvcm1lcl9vYmpfY29tcG9zaXRlIGV4dGVuZHMgY29tcG9zaXRlX29iantcclxuICBlbmVteSA9IGZhbHNlO1xyXG4gIHN0YXRlOnBsYXRfc3RhdGU7XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlKXtcclxuICAgIHN1cGVyKHN0YXRlKTtcclxuICB9XHJcbiAgc3RhdGVmKGE6bnVtYmVyKXtcclxuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBwbGF0X3N0YXRlO1xyXG4gICAgaWYoc3RhdGUuaGVhbHRoIDw9IDApe1xyXG4gICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7cGxhdGZvcm1lcl9vYmoscGxhdF9zdGF0ZX0gZnJvbSBcIi4vYWJzdHJhY3QvcGxhdGZvcm1lcl9vYmpcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUscG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHsgZXhlY190eXBlIH0gZnJvbSBcIi4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGJveCBleHRlbmRzIHBsYXRmb3JtZXJfb2Jqe1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9ib3gucG5nXCJcclxuICBjb2xsaXNpb24gPSB0cnVlXHJcbiAgaGVpZ2h0ID0gNjQ7XHJcbiAgd2lkdGggPSA1MDA7XHJcbiAgZ3Jhdml0eSA9IGZhbHNlO1xyXG4gIGVuZW15ID0gZmFsc2U7XHJcbiAgdGFncyA9IFtcInN0YXRpY1wiXVxyXG59XHJcbiIsImltcG9ydCB7cGxhdGZvcm1lcl9vYmosIHBsYXRfc3RhdGV9IGZyb20gXCIuL2Fic3RyYWN0L3BsYXRmb3JtZXJfb2JqXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHtyb3RhdGlvbl9sZW5ndGgsIG9ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgR29vbWJhIH0gZnJvbSBcIi4vR29vbWJhXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuXHJcbmludGVyZmFjZSBidWxsZXRfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XHJcbiAgcm90YXRpb246bnVtYmVyLFxyXG4gIGRpc3RhbmNlOm51bWJlcixcclxuICBzcGVlZDpudW1iZXIsXHJcbiAgZGFtYWdlOm51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgcG9zaXRpb257XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIGJ1bGxldF9wYXJhbWV0ZXJze1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGJ1bGxldCBleHRlbmRzIG9iantcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvYnVsbGV0LnBuZ1wiO1xyXG4gIGhlaWdodCA9IDIwO1xyXG4gIHdpZHRoID0gMTA7XHJcbiAgZ3Jhdml0eSA9IGZhbHNlO1xyXG4gIG1heF9kaXN0YW5jZSA9IDIwMDA7XHJcbiAgdGFncyA9IFtcImJ1bGxldFwiXTtcclxuICBzdGF0ZTpidWxsZXRfc3RhdGU7XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpidWxsZXRfcGFyYW1ldGVycyl7XHJcbiAgICBzdXBlcihzdGF0ZSxwYXJhbXMpO1xyXG4gICAgdGhpcy5zdGF0ZS5kYW1hZ2UgPSA1O1xyXG4gICAgdGhpcy5zdGF0ZS5kaXN0YW5jZSA9IDBcclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6bnVtYmVyKXtcclxuICAgIHRoaXMuc3RhdGUudmVsb2NpdHkgPSByb3RhdGlvbl9sZW5ndGgodGhpcy5zdGF0ZS5zcGVlZCx0aGlzLnN0YXRlLnJvdGF0aW9uKTtcclxuICAgIHRoaXMuc3RhdGUuZGlzdGFuY2UgKz0gdGhpcy5zdGF0ZS5zcGVlZDtcclxuICAgIGlmKHRoaXMuc3RhdGUuZGlzdGFuY2UgPiB0aGlzLm1heF9kaXN0YW5jZSl7XHJcbiAgICAgIHRoaXMuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlZ2lzdGVyQ29udHJvbHMoKXtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm9ja2V0IGV4dGVuZHMgYnVsbGV0e1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9mb2xkZXIvcm9ja2V0LnBuZ1wiO1xyXG4gIGhlaWdodCA9IDY3O1xyXG4gIHdpZHRoID0gMTY7XHJcbiAgcGFydGljbGVfdGltZXIgPSAwO1xyXG4gIHBhcnRpY2xlX2ZyZXF1ZW5jeSA9IDU7XHJcbiAgbWF4X2Rpc3RhbmNlID0gNTAwMDtcclxuICB0YWdzID0gW1wiUm9ja2V0XCJdXHJcbiAgaGl0Ym94ID0ge1xyXG4gICAgeF9vZmZzZXQ6MCxcclxuICAgIHlfb2Zmc2V0OjAsXHJcbiAgICB3aWR0aDoxNixcclxuICAgIGhlaWdodDoxNlxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOmJ1bGxldF9wYXJhbWV0ZXJzKXtcclxuICAgIHN1cGVyKHN0YXRlLHBhcmFtcyk7XHJcbiAgICB0aGlzLnN0YXRlLnNwZWVkID0gMTU7XHJcbiAgICB0aGlzLnN0YXRlLmRhbWFnZSA9IDIwO1xyXG4gIH1cclxuICByZWdpc3RlckF1ZGlvKCl7XHJcbiAgICB0aGlzLmF1ZGlvLmFkZChcImV4cGxvc2lvblwiLFwiLi9zb3VuZHMvZXhwbG9zaW9uMi5tcDNcIik7XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOm51bWJlcil7XHJcbiAgICBzdXBlci5zdGF0ZWYodGltZSk7XHJcbiAgICBpZih0aGlzLnBhcnRpY2xlX3RpbWVyID09IDApe1xyXG4gICAgICBsZXQgb2Zmc2V0ID0gcm90YXRpb25fbGVuZ3RoKDMwLHRoaXMuc3RhdGUucm90YXRpb24gKyAxODApO1xyXG4gICAgICB0aGlzLmVtaXRQYXJ0aWNsZShcInNtb2tlXCIsb2Zmc2V0LCA0MDAsIDE2KTtcclxuICAgIH1cclxuICAgIHRoaXMucGFydGljbGVfdGltZXIgKz0gdGltZTtcclxuICAgIGlmKHRoaXMucGFydGljbGVfdGltZXIgPiB0aGlzLnBhcnRpY2xlX2ZyZXF1ZW5jeSl7XHJcbiAgICAgdGhpcy5wYXJ0aWNsZV90aW1lciA9IDA7IFxyXG4gICAgfVxyXG4gICAgbGV0IHJvb20gPSBnLnN0YXRlLmN1cnJlbnRfcm9vbTtcclxuICAgIGxldCBjb2xsaXNpb25zID0gcm9vbS5jaGVja0NvbGxpc2lvbnModGhpcy5nZXRGdWxsQ29sbGlzaW9uQm94KCksW1wiZ3VuXCIsXCJwbGF5ZXJcIl0pO1xyXG4gICAgaWYoY29sbGlzaW9ucy5sZW5ndGggPiAwKXtcclxuICAgICAgZm9yKGxldCBjb2xsaXNpb24gb2YgY29sbGlzaW9ucyl7XHJcbiAgICAgICAgbGV0IHN0ID0gY29sbGlzaW9uLnN0YXRlIGFzIHVua25vd24gYXMgcGxhdF9zdGF0ZTtcclxuICAgICAgICBpZigoPHBsYXRmb3JtZXJfb2JqPmNvbGxpc2lvbikuc3RhdGUuaGVhbHRoKXtcclxuICAgICAgICAgIHN0LmhlYWx0aCAtPSB0aGlzLnN0YXRlLmRhbWFnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29sbGlzaW9uLnRhZ3MuaW5kZXhPZihcImR1bW15XCIpID4gLTEpe1xyXG4gICAgICAgICAgbGV0IGR1bW15ID0gY29sbGlzaW9uIGFzIEdvb21iYTtcclxuICAgICAgICAgIGlmKGR1bW15LnN0YXRlLmp1bXBpbmcpe1xyXG4gICAgICAgICAgICBkdW1teS5zdGF0ZS50aW1lc19haXJzaG90Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhdGUuZGlzdGFuY2UgPSB0aGlzLm1heF9kaXN0YW5jZTtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgICAgbGV0IGV4cGxvc2lvbl9jb2xsaXNpb25zID0gcm9vbS5jaGVja0NvbGxpc2lvbnMoe1xyXG4gICAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOjI1NixcclxuICAgICAgICBoZWlnaHQ6MjU2XHJcbiAgICAgIH0sW1wic3RhdGljXCJdKVxyXG4gICAgICBmb3IobGV0IGNvbGxpZGVyIG9mIGV4cGxvc2lvbl9jb2xsaXNpb25zKXtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKGNvbGxpZGVyKTtcclxuICAgICAgICBsZXQgbXVsdGlwbHllciA9IDEgLSBkaXN0YW5jZS8zMDA7XHJcbiAgICAgICAgaWYobXVsdGlwbHllciA8IDApXHJcbiAgICAgICAgICBtdWx0aXBseWVyID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgb19zdGF0ZSA9IGNvbGxpZGVyLnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICAgICAgICBsZXQgdmVsb2NpdGllcyA9IHJvdGF0aW9uX2xlbmd0aChtdWx0aXBseWVyICogMTAwLCB0aGlzLmFuZ2xlVG93YXJkcyhjb2xsaWRlcikpO1xyXG4gICAgICAgIG9fc3RhdGUudmVsb2NpdHkueCArPSB2ZWxvY2l0aWVzLnggKiB0aW1lLzE2O1xyXG4gICAgICAgIG9fc3RhdGUudmVsb2NpdHkueSArPSB2ZWxvY2l0aWVzLnkgKiB0aW1lLzE2O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdFBhcnRpY2xlKFwiZXhwbG9zaW9uXCIse3g6MCx5OjB9LDUwMCwwKTtcclxuICAgICAgdGhpcy5hdWRpby5wbGF5KFwiZXhwbG9zaW9uXCIsMC4yKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJcbmludGVyZmFjZSBwcmVmYWJzIHtcbiAgW2luZGV4OnN0cmluZ106YW55XG59XG5pbXBvcnQge0Jpc2hvcH0gZnJvbSBcIi4vQmlzaG9wXCI7XG5pbXBvcnQge0JvYXJkX0xhYmVsfSBmcm9tIFwiLi9Cb2FyZF9MYWJlbFwiO1xuaW1wb3J0IHtib3h9IGZyb20gXCIuL2JveFwiO1xuaW1wb3J0IHtidWxsZXR9IGZyb20gXCIuL2J1bGxldFwiO1xuaW1wb3J0IHtDb250cm9sbGVkUGxheWVyfSBmcm9tIFwiLi9Db250cm9sbGVkUGxheWVyXCI7XG5pbXBvcnQge0N1cnNvcn0gZnJvbSBcIi4vQ3Vyc29yXCI7XG5pbXBvcnQge0Rvb3J9IGZyb20gXCIuL0Rvb3JcIjtcbmltcG9ydCB7R29vbWJhfSBmcm9tIFwiLi9Hb29tYmFcIjtcbmltcG9ydCB7R3VufSBmcm9tIFwiLi9HdW5cIjtcbmltcG9ydCB7S2luZ30gZnJvbSBcIi4vS2luZ1wiO1xuaW1wb3J0IHtLbmlnaHR9IGZyb20gXCIuL0tuaWdodFwiO1xuaW1wb3J0IHtNb3ZlfSBmcm9tIFwiLi9Nb3ZlXCI7XG5pbXBvcnQge1Bhd259IGZyb20gXCIuL1Bhd25cIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7UXVlZW59IGZyb20gXCIuL1F1ZWVuXCI7XG5pbXBvcnQge1Jvb2t9IGZyb20gXCIuL1Jvb2tcIjtcbmltcG9ydCB7Um90YXRvcn0gZnJvbSBcIi4vUm90YXRvclwiO1xuaW1wb3J0IHtWZXJ0Qm94fSBmcm9tIFwiLi9WZXJ0Qm94XCI7XG5leHBvcnQgbGV0IHByZWZhYnM6cHJlZmFicyA9IHtcblx0QmlzaG9wOkJpc2hvcCxcblx0Qm9hcmRfTGFiZWw6Qm9hcmRfTGFiZWwsXG5cdGJveDpib3gsXG5cdGJ1bGxldDpidWxsZXQsXG5cdENvbnRyb2xsZWRQbGF5ZXI6Q29udHJvbGxlZFBsYXllcixcblx0Q3Vyc29yOkN1cnNvcixcblx0RG9vcjpEb29yLFxuXHRHb29tYmE6R29vbWJhLFxuXHRHdW46R3VuLFxuXHRLaW5nOktpbmcsXG5cdEtuaWdodDpLbmlnaHQsXG5cdE1vdmU6TW92ZSxcblx0UGF3bjpQYXduLFxuXHRQbGF5ZXI6UGxheWVyLFxuXHRRdWVlbjpRdWVlbixcblx0Um9vazpSb29rLFxuXHRSb3RhdG9yOlJvdGF0b3IsXG5cdFZlcnRCb3g6VmVydEJveCxcbn0iLCJpbXBvcnQge3Jvb20scm9vbV9pLHN0YXRlX2NvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XHJcbmltcG9ydCB7cGllY2V9IGZyb20gXCIuLi9vYmplY3RzL2Fic3RyYWN0L3BpZWNlXCI7XHJcbmltcG9ydCB7S25pZ2h0fSBmcm9tIFwiLi4vb2JqZWN0cy9LbmlnaHRcIjtcclxuaW1wb3J0IHtSb29rfSBmcm9tIFwiLi4vb2JqZWN0cy9Sb29rXCI7XHJcbmltcG9ydCB7TW92ZX0gZnJvbSBcIi4uL29iamVjdHMvTW92ZVwiO1xyXG5pbXBvcnQge29ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgQmlzaG9wIH0gZnJvbSBcIi4uL29iamVjdHMvQmlzaG9wXCI7XHJcbmltcG9ydCB7IFF1ZWVuIH0gZnJvbSBcIi4uL29iamVjdHMvUXVlZW5cIjtcclxuaW1wb3J0IHsgS2luZyB9IGZyb20gXCIuLi9vYmplY3RzL0tpbmdcIjtcclxuaW1wb3J0IHsgUGF3biB9IGZyb20gXCIuLi9vYmplY3RzL1Bhd25cIjtcclxuaW1wb3J0IHtnYW1lLEdldFZpZXdwb3J0RGltZW5zaW9ucyB9IGZyb20gXCIuLi8uLi92YW5cIjtcclxuaW1wb3J0IHtnfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSwgcG9zaXRpb24sIHJvb21fc3RhdGV9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtDYW1lcmF9IGZyb20gXCIuLi8uLi9saWIvcmVuZGVyXCI7XHJcbmltcG9ydCAqIGFzIGpzb24gZnJvbSBcIi4vQm9hcmQuanNvblwiO1xyXG5pbXBvcnQgeyB2ZWxvY2l0eUNvbGxpc2lvbkNoZWNrIH0gZnJvbSBcIi4uLy4uL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgZXhlY190eXBlLCBQb2xsX01vdXNlIH0gZnJvbSBcIi4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4vQm9hcmQuanNvblwiO1xyXG5sZXQgY2ZpZyA9IGNvbmZpZyBhcyB1bmtub3duIGFzIHN0YXRlX2NvbmZpZztcclxuZXhwb3J0IGVudW0gc2lkZXtcclxuICB3aGl0ZSxcclxuICBibGFja1xyXG59XHJcblxyXG5pbnRlcmZhY2Ugc3BhY2Vfc3RhdGV7XHJcbiAgZW5wYXNzZW50OmJvb2xlYW4sXHJcbiAgYXR0YWNrZWQ6Ym9vbGVhblxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGF0ZV9jb252ZXJ0ZXIocG9zOnBvc2l0aW9uLHJvdGF0aW9uOm51bWJlcixzY2FsaW5nOm51bWJlcik6b2JqX3N0YXRle1xyXG4gIHJldHVybiB7XHJcbiAgICBwb3NpdGlvbjpwb3MsXHJcbiAgICB2ZWxvY2l0eTp7XHJcbiAgICAgIHg6MCxcclxuICAgICAgeTowXHJcbiAgICB9LFxyXG4gICAgcm90YXRpb24sXHJcbiAgICBzY2FsaW5nOntcclxuICAgICAgd2lkdGg6c2NhbGluZyxcclxuICAgICAgaGVpZ2h0OnNjYWxpbmdcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYm9hcmRfc3RhdGV7XHJcbiAgdHVybjpzaWRlLFxyXG4gIHdoaXRlX2JvYXJkOkFycmF5PEFycmF5PHNwYWNlX3N0YXRlPj4sXHJcbiAgYmxhY2tfYm9hcmQ6QXJyYXk8QXJyYXk8c3BhY2Vfc3RhdGU+PlxyXG4gIHNlbGVjdGVkOnBpZWNlLFxyXG4gIHNlbGVjdGVkX29yaWdpbmFsX3Bvc2l0aW9uOnBvc2l0aW9uLFxyXG4gIHNxdWFyZXM6QXJyYXk8QXJyYXk8TW92ZT4+LFxyXG4gIHBpZWNlczpBcnJheTxwaWVjZT4sXHJcbiAgYXR0YWNrZWQ6QXJyYXk8cG9zaXRpb24+LFxyXG4gIGRyYWdnaW5nOmJvb2xlYW5cclxufVxyXG5leHBvcnQgY2xhc3MgQm9hcmQgZXh0ZW5kcyByb29tPGJvYXJkX3N0YXRlPntcclxuICBzdGF0ZTpib2FyZF9zdGF0ZTtcclxuICBiYWNrZ3JvdW5kX3VybD1cIi4vc3ByaXRlcy9ib2FyZC5wbmdcIjtcclxuICBjb25zdHJ1Y3RvcihnYW1lOmdhbWU8dW5rbm93bj4pe1xyXG4gICAgc3VwZXIoZ2FtZSxjZmlnKTtcclxuICAgIGdhbWUuc3RhdGUuY2FtZXJhcyA9IFtcclxuICAgICAgbmV3IENhbWVyYSh7XHJcbiAgICAgICAgeDowLFxyXG4gICAgICAgIHk6MCxcclxuICAgICAgICBkaW1lbnNpb25zOntcclxuICAgICAgICAgIGhlaWdodDpHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQsXHJcbiAgICAgICAgICB3aWR0aDpHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGluZzowLjY1LFxyXG4gICAgICAgIGRlYnVnOmZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIHg6MCxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgd2lkdGg6MSxcclxuICAgICAgICBoZWlnaHQ6MVxyXG4gICAgICB9KVxyXG4gICAgXVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdHVybjpzaWRlLndoaXRlLFxyXG4gICAgICB3aGl0ZV9ib2FyZDpbXSxcclxuICAgICAgYmxhY2tfYm9hcmQ6W10sXHJcbiAgICAgIHNlbGVjdGVkOnVuZGVmaW5lZCxcclxuICAgICAgc2VsZWN0ZWRfb3JpZ2luYWxfcG9zaXRpb246dW5kZWZpbmVkLFxyXG4gICAgICBzcXVhcmVzOltdLFxyXG4gICAgICBwaWVjZXM6W10sXHJcbiAgICAgIGF0dGFja2VkOltdLFxyXG4gICAgICBkcmFnZ2luZzpmYWxzZVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgbGV0IHJvdzIgPSBbbmV3IFJvb2soc3RhdGVfY29udmVydGVyKHt4OjAseTo3fSwwLDEpLHtzaWRlOnNpZGUuYmxhY2t9KSxuZXcgS25pZ2h0KHN0YXRlX2NvbnZlcnRlcih7eDoxLHk6N30sMCwxKSx7c2lkZTpzaWRlLmJsYWNrfSksbmV3IEJpc2hvcChzdGF0ZV9jb252ZXJ0ZXIoe3g6Mix5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pLG5ldyBRdWVlbihzdGF0ZV9jb252ZXJ0ZXIoe3g6Myx5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pLG5ldyBLaW5nKHN0YXRlX2NvbnZlcnRlcih7eDo0LHk6N30sMCwxKSx7c2lkZTpzaWRlLmJsYWNrfSksbmV3IEJpc2hvcChzdGF0ZV9jb252ZXJ0ZXIoe3g6NSx5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pLG5ldyBLbmlnaHQoc3RhdGVfY29udmVydGVyKHt4OjYseTo3fSwwLDEpLHtzaWRlOnNpZGUuYmxhY2t9KSxuZXcgUm9vayhzdGF0ZV9jb252ZXJ0ZXIoe3g6Nyx5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pXTtcclxuICAgIGxldCByb3c3ID0gW25ldyBSb29rKHN0YXRlX2NvbnZlcnRlcih7eDowLHk6MH0sMCwxKSx7c2lkZTpzaWRlLndoaXRlfSksbmV3IEtuaWdodChzdGF0ZV9jb252ZXJ0ZXIoe3g6MSx5OjB9LDAsMSkse3NpZGU6c2lkZS53aGl0ZX0pLG5ldyBCaXNob3Aoc3RhdGVfY29udmVydGVyKHt4OjIseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KSxuZXcgUXVlZW4oc3RhdGVfY29udmVydGVyKHt4OjMseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KSxuZXcgS2luZyhzdGF0ZV9jb252ZXJ0ZXIoe3g6NCx5OjB9LDAsMSkse3NpZGU6c2lkZS53aGl0ZX0pLG5ldyBCaXNob3Aoc3RhdGVfY29udmVydGVyKHt4OjUseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KSxuZXcgS25pZ2h0KHN0YXRlX2NvbnZlcnRlcih7eDo2LHk6MH0sMCwxKSx7c2lkZTpzaWRlLndoaXRlfSksbmV3IFJvb2soc3RhdGVfY29udmVydGVyKHt4OjcseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KV07XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCByb3cyLmxlbmd0aDthKyspe1xyXG4gICAgICBsZXQgcGF3bjEgPSBuZXcgUGF3bihzdGF0ZV9jb252ZXJ0ZXIoe3g6YSx5OjF9LDAsMSkse3NpZGU6c2lkZS53aGl0ZX0pO1xyXG4gICAgICBsZXQgcGF3bjIgPSBuZXcgUGF3bihzdGF0ZV9jb252ZXJ0ZXIoe3g6YSx5OjZ9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pO1xyXG4gICAgICB0aGlzLmFkZEl0ZW0ocm93N1thXSk7XHJcbiAgICAgIHRoaXMuYWRkSXRlbShwYXduMSk7XHJcbiAgICAgIHRoaXMuYWRkSXRlbShyb3cyW2FdKTtcclxuICAgICAgdGhpcy5hZGRJdGVtKHBhd24yKTtcclxuICAgICAgdGhpcy5zdGF0ZS5waWVjZXMucHVzaChwYXduMik7XHJcbiAgICAgIHRoaXMuc3RhdGUucGllY2VzLnB1c2gocm93N1thXSk7XHJcbiAgICAgIHRoaXMuc3RhdGUucGllY2VzLnB1c2gocGF3bjEpO1xyXG4gICAgICB0aGlzLnN0YXRlLnBpZWNlcy5wdXNoKHJvdzJbYV0pO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IDA7YTw4O2ErKyl7XHJcbiAgICAgIGxldCBtdl9yb3c6QXJyYXk8TW92ZT4gPSBbXTtcclxuICAgICAgZm9yKGxldCBiID0gMDtiPDg7YisrKXtcclxuICAgICAgICBsZXQgZCA9IGE7XHJcbiAgICAgICAgKCgpPT4ge1xyXG4gICAgICAgICAgbGV0IG1vdmVfbyA9IG5ldyBNb3ZlKHN0YXRlX2NvbnZlcnRlcih7eDphLHk6Yn0sMCwxKSk7XHJcbiAgICAgICAgICBtdl9yb3cucHVzaChtb3ZlX28pO1xyXG4gICAgICAgICAgdGhpcy5hZGRJdGVtKG1vdmVfbyk7XHJcbiAgICAgICAgfSkoKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhdGUuc3F1YXJlcy5wdXNoKG12X3Jvdyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlLmJsYWNrX2JvYXJkID0gdGhpcy5ibGFua19ib2FyZCgpO1xyXG4gICAgdGhpcy5zdGF0ZS53aGl0ZV9ib2FyZCA9IHRoaXMuYmxhbmtfYm9hcmQoKTtcclxuICAgIGZvcihsZXQgeCBvZiB0aGlzLnN0YXRlLnBpZWNlcyl7XHJcbiAgICAgIGlmKHguc3RhdGUuc2lkZSA9PT0gc2lkZS53aGl0ZSl7XHJcbiAgICAgICAgeC5iaW5kX2NvbnRyb2xzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmVnaXN0ZXJDb250cm9scygpIHtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJtb3VzZTBkb3duXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcblxyXG4gICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGcuc3RhdGUuY2FtZXJhc1swXSk7XHJcbiAgICAgIGlmKCFtb3VzZSl7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgbGV0IGNvbGxpc2lvbnMgPSBnLmdldFJvb20oKS5jaGVja0NvbGxpc2lvbnMoe1xyXG4gICAgICAgIHg6IG1vdXNlLngsXHJcbiAgICAgICAgeTogbW91c2UueSxcclxuICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgfSwgW1wibW92ZVwiXSk7XHJcbiAgICAgIGlmIChjb2xsaXNpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnR1cm4gPT0gKDxwaWVjZT5jb2xsaXNpb25zWzBdKS5zdGF0ZS5zaWRlKXtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgKDxwaWVjZT5jb2xsaXNpb25zWzBdKS5zZWxlY3QoKTtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRfb3JpZ2luYWxfcG9zaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBjb2xsaXNpb25zWzBdLnN0YXRlLnBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIm1vdXNlMHVwXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgbGV0IGNvbGxpc2lvbnMgPSBnLmdldFJvb20oKS5jaGVja09iamVjdHMoe1xyXG4gICAgICAgICAgeDp0aGlzLnN0YXRlLnNlbGVjdGVkLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICB5OnRoaXMuc3RhdGUuc2VsZWN0ZWQuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICAgIHdpZHRoOjEsXHJcbiAgICAgICAgICBoZWlnaHQ6MVxyXG4gICAgICAgIH0sW1wicGllY2VcIl0pO1xyXG4gICAgICAgIGlmKGNvbGxpc2lvbnMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25zWzBdLnJlbmRlciA9PSB0cnVlKXtcclxuICAgICAgICAgICg8TW92ZT5jb2xsaXNpb25zWzBdKS5kcm9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkLnN0YXRlLnBvc2l0aW9uID0gdGhpcy5zdGF0ZS5zZWxlY3RlZF9vcmlnaW5hbF9wb3NpdGlvbjtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGdldF9tZXRhKGE6IHBvc2l0aW9uLCBzOiBzaWRlKSB7XHJcbiAgICBpZiAoYS54ID49IDAgJiYgYS54IDwgOCAmJiBhLnkgPj0gMCAmJiBhLnkgPCA4KXtcclxuICAgICAgaWYocyA9PT0gc2lkZS53aGl0ZSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUud2hpdGVfYm9hcmRbYS54XVthLnldO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmJsYWNrX2JvYXJkW2EueF1bYS55XTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIGNoYW5nZV9zaWRlKHM6c2lkZSl7XHJcbiAgICBsZXQgdG9fYmluZDtcclxuICAgIGxldCB0b191bmJpbmQ7XHJcbiAgICBcclxuICAgIGlmKHMgPT0gc2lkZS53aGl0ZSl7XHJcbiAgICAgIHRvX2JpbmQgPSBzO1xyXG4gICAgICB0b191bmJpbmQgPSBzaWRlLmJsYWNrO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jbGVhcl9lbnBhc3NlbnRfYm9hcmQodGhpcy5zdGF0ZS53aGl0ZV9ib2FyZCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNsZWFyX2F0dGFja2VkX2JvYXJkKHRoaXMuc3RhdGUuYmxhY2tfYm9hcmQpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jYWxjdWxhdGVfYXR0YWNrZWRfYm9hcmQodGhpcy5zdGF0ZS5ibGFja19ib2FyZCxzaWRlLmJsYWNrKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICB0b19iaW5kID0gc2lkZS5ibGFjaztcclxuICAgICAgdG9fdW5iaW5kID0gc2lkZS53aGl0ZTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2xlYXJfZW5wYXNzZW50X2JvYXJkKHRoaXMuc3RhdGUuYmxhY2tfYm9hcmQpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jbGVhcl9hdHRhY2tlZF9ib2FyZCh0aGlzLnN0YXRlLndoaXRlX2JvYXJkKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlX2F0dGFja2VkX2JvYXJkKHRoaXMuc3RhdGUud2hpdGVfYm9hcmQsc2lkZS53aGl0ZSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgZm9yKGxldCB4IG9mIHRoaXMuc3RhdGUucGllY2VzKXtcclxuICAgICAgaWYoeC5zdGF0ZS5zaWRlID09PSB0b19iaW5kKXtcclxuICAgICAgICB4LmJpbmRfY29udHJvbHMoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHgudW5iaW5kX2NvbnRyb2xzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUudHVybiA9IHM7XHJcbiAgfVxyXG4gIGNsZWFyX2VucGFzc2VudF9ib2FyZCh4OkFycmF5PEFycmF5PHNwYWNlX3N0YXRlPj4pe1xyXG4gICAgZm9yKGxldCBhID0gMDthPDg7YSsrKXtcclxuICAgICAgZm9yKGxldCBiID0gMDtiPDg7YisrKXtcclxuICAgICAgICB4W2FdW2JdLmVucGFzc2VudCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhbGN1bGF0ZV9hdHRhY2tlZF9ib2FyZCh4OkFycmF5PEFycmF5PHNwYWNlX3N0YXRlPj4sczpzaWRlKXtcclxuICAgIGZvcihsZXQgYSBvZiB0aGlzLnN0YXRlLnBpZWNlcyl7XHJcbiAgICAgIGlmKGEuc3RhdGUuc2lkZSA9PSBzKXtcclxuICAgICAgICBsZXQgYXR0YWNrZWQgPSBhLmdldEF0dGFja2luZygpO1xyXG4gICAgICAgIGZvcihsZXQgYiBvZiBhdHRhY2tlZCl7XHJcbiAgICAgICAgICB4W2IueF1bYi55XS5hdHRhY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gIH1cclxuICBjbGVhcl9hdHRhY2tlZF9ib2FyZCh4OkFycmF5PEFycmF5PHNwYWNlX3N0YXRlPj4pe1xyXG4gICAgZm9yKGxldCBhID0gMDthPDg7YSsrKXtcclxuICAgICAgZm9yKGxldCBiID0gMDtiPDg7YisrKXtcclxuICAgICAgICB4W2FdW2JdLmF0dGFja2VkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYmxhbmtfYm9hcmQoKXtcclxuICAgIGxldCBib2FyZCA9IFtdO1xyXG4gICAgZm9yKGxldCBhID0gMDthPDg7YSsrKXtcclxuICAgICAgbGV0IHJvdyA9IFtdO1xyXG4gICAgICBmb3IobGV0IGIgPSAwO2I8ODtiKyspe1xyXG4gICAgICAgIHJvdy5wdXNoKHtcclxuICAgICAgICAgIGVucGFzc2VudDpmYWxzZSxcclxuICAgICAgICAgIGF0dGFja2VkOmZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgYm9hcmQucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJvYXJkO1xyXG4gIH1cclxuICBhc3luYyBhZGRfcGllY2UoYTpwaWVjZSl7XHJcbiAgICBhd2FpdCBhLmxvYWQoKTtcclxuICAgIHRoaXMuYWRkSXRlbShhKTtcclxuICAgIHRoaXMuc3RhdGUucGllY2VzLnVuc2hpZnQoYSk7XHJcbiAgfVxyXG4gIHJlbW92ZV9waWVjZShhOnBpZWNlKXtcclxuICAgIGZvcihsZXQgYiA9IDA7YiA8IHRoaXMuc3RhdGUucGllY2VzLmxlbmd0aDtiKyspe1xyXG4gICAgICBpZihhLmlkID09PSB0aGlzLnN0YXRlLnBpZWNlc1tiXS5pZCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5waWVjZXMuc3BsaWNlKGIsMSk7XHJcbiAgICAgIH0gICBcclxuICAgIH1cclxuICAgIGEuZGVsZXRlKCk7XHJcbiAgfVxyXG4gIGdldF9waWVjZShhOnBvc2l0aW9uKTpBcnJheTxwaWVjZT57XHJcbiAgICByZXR1cm4gKHRoaXMuY2hlY2tDb2xsaXNpb25zKHtcclxuICAgICAgeDphLnggKiAxMDAgLSAzNTAsXHJcbiAgICAgIHk6YS55ICogMTAwIC0gMzUwLFxyXG4gICAgICBoZWlnaHQ6MTAwLFxyXG4gICAgICB3aWR0aDoxMDBcclxuICAgIH0pIGFzIHVua25vd24gYXMgQXJyYXk8cGllY2U+KTtcclxuICB9XHJcbiAgY2xlYXJfYXR0YWNrZWQoKXtcclxuICAgIGZvcihsZXQgYSBvZiB0aGlzLnN0YXRlLmF0dGFja2VkKXtcclxuICAgICAgdGhpcy5zdGF0ZS5zcXVhcmVzW2EueF1bYS55XS5yZW5kZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgYXR0YWNrKHg6QXJyYXk8cG9zaXRpb24+KXtcclxuICAgIGZvcihsZXQgYSBvZiB4KXtcclxuICAgICAgdGhpcy5zdGF0ZS5zcXVhcmVzW2EueF1bYS55XS5yZW5kZXIgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0ZWYoYTpudW1iZXIpe1xyXG4gICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZCAmJiB0aGlzLnN0YXRlLmRyYWdnaW5nKXtcclxuICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShnLnN0YXRlLmNhbWVyYXNbMF0pO1xyXG4gICAgICBpZighbW91c2Upe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWQuc3RhdGUucG9zaXRpb24ueCA9IG1vdXNlLng7XHJcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWQuc3RhdGUucG9zaXRpb24ueSA9IG1vdXNlLnk7XHJcbiAgICB9XHJcbiAgICBzdXBlci5zdGF0ZWYoYSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgcm9vbSwgYXBwbHlHcmF2aXR5LG9iamVjdF9zdGF0ZV9jb25maWcsIHN0YXRlX2NvbmZpZyB9IGZyb20gXCIuLi8uLi9saWIvcm9vbVwiO1xyXG5pbXBvcnQgeyBHb29tYmEgfSBmcm9tIFwiLi4vb2JqZWN0cy9Hb29tYmFcIjtcclxuaW1wb3J0IHsgQ29udHJvbGxlZFBsYXllciB9IGZyb20gXCIuLi9vYmplY3RzL0NvbnRyb2xsZWRQbGF5ZXJcIjtcclxuaW1wb3J0IHsgR3VuIH0gZnJvbSBcIi4uL29iamVjdHMvR3VuXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9vYmplY3RzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBDdXJzb3IgfSBmcm9tIFwiLi4vb2JqZWN0cy9DdXJzb3JcIjtcclxuaW1wb3J0IHsgYm94IH0gZnJvbSBcIi4uL29iamVjdHMvYm94XCI7XHJcbmltcG9ydCB7IFZlcnRCb3ggfSBmcm9tIFwiLi4vb2JqZWN0cy9WZXJ0Qm94XCI7XHJcbmltcG9ydCB7IHZlbG9jaXR5Q29sbGlzaW9uQ2hlY2sgYXMgdmVsb2NpdHlDb2xsaXNpb25DaGVjayB9IGZyb20gXCIuLi8uLi9saWIvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IGdyYXZpdHlfb2JqLCByb3RhdGlvbl9sZW5ndGggfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBQb2xsX01vdXNlLCBleGVjX3R5cGUgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IEhVRCwgVGV4dCB9IGZyb20gXCIuLi8uLi9saWIvaHVkXCI7XHJcbmltcG9ydCB7IERFQlVHLCBnYW1lLCBHZXRWaWV3cG9ydERpbWVuc2lvbnMsIHNldERlYnVnLHZpZXdwb3J0IH0gZnJvbSBcIi4uLy4uL3ZhblwiO1xyXG5pbXBvcnQge2J1bGxldCwgUm9ja2V0fSBmcm9tIFwiLi4vb2JqZWN0cy9idWxsZXRcIjtcclxuaW1wb3J0IHtnfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5pbXBvcnQge0NhbWVyYX0gZnJvbSBcIi4uLy4uL2xpYi9yZW5kZXJcIjtcclxuaW1wb3J0ICogYXMganNvbiBmcm9tIFwiLi9PdmVyd29ybGQuanNvblwiO1xyXG5pbnRlcmZhY2Ugb3ZlcndvcmxkX2kge1xyXG4gIHBsYXllcjogZ3Jhdml0eV9vYmosXHJcbiAgcGF1c2VkOiBib29sZWFuLFxyXG4gIGxvY2tlZF9idWxsZXQ6YnVsbGV0XHJcbn1cclxuXHJcbmNsYXNzIE92ZXJ3b3JsZF9IVUQgZXh0ZW5kcyBIVUQge1xyXG4gIHNldFRleHRFbGVtZW50cygpe1xyXG4gICAgcmV0dXJuIFtuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0ICogNy84XHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDQ0LFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOlwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOjFcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgbGV0IHggPSBnLmdldFJvb20oKS5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgcmV0dXJuIGBUaW1lcyBBaXJzaG90OiR7eC5zdGF0ZS50aW1lc19haXJzaG90fWA7XHJcbiAgICB9KSxcclxuICAgIG5ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQgKiA2LzhcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogNDQsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOjFcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgbGV0IHggPSBnLmdldFJvb20oKS5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgaWYoeClcclxuICAgICAgICByZXR1cm4gYE1heCBUaW1lcyBBaXJzaG90OiR7TWF0aC5tYXgoeC5zdGF0ZS50aW1lc19haXJzaG90LHguc3RhdGUubWF4X3RpbWVzX2FpcnNob3QpfWA7XHJcbiAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9KV07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT3ZlcndvcmxkIGV4dGVuZHMgcm9vbTxvdmVyd29ybGRfaT57XHJcbiAgYmFja2dyb3VuZF91cmwgPSBcIi4vc3ByaXRlcy9pbUQ0MWwuanBnXCI7XHJcbiAgb2JqZWN0czpncmF2aXR5X29ialtdO1xyXG4gIGNvbnN0cnVjdG9yKGdhbWU6Z2FtZTx1bmtub3duPikge1xyXG4gICAgc3VwZXIoZ2FtZSxqc29uIGFzIHVua25vd24gYXMgc3RhdGVfY29uZmlnKTtcclxuICAgIFxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcGxheWVyOiB1bmRlZmluZWQsXHJcbiAgICAgIHBhdXNlZDogZmFsc2UsXHJcbiAgICAgIGxvY2tlZF9idWxsZXQ6bnVsbFxyXG4gICAgfTtcclxuICAgIGdhbWUuc3RhdGUuY2FtZXJhcyA9IFtcclxuICAgICAgbmV3IENhbWVyYSh7XHJcbiAgICAgICAgeDowLFxyXG4gICAgICAgIHk6MCxcclxuICAgICAgICBkaW1lbnNpb25zOntcclxuICAgICAgICAgIGhlaWdodDp2aWV3cG9ydC5oZWlnaHQsXHJcbiAgICAgICAgICB3aWR0aDp2aWV3cG9ydC53aWR0aCAqIDQvNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGluZzowLjUsXHJcbiAgICAgICAgZGVidWc6ZmFsc2VcclxuICAgICAgfVxyXG4gICAgICAse1xyXG4gICAgICAgIHg6MSxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgd2lkdGg6MC44LFxyXG4gICAgICAgIGhlaWdodDoxXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgQ2FtZXJhKHtcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowLFxyXG4gICAgICAgIGRpbWVuc2lvbnM6e1xyXG4gICAgICAgICAgd2lkdGg6dmlld3BvcnQud2lkdGgvNSxcclxuICAgICAgICAgIGhlaWdodDp2aWV3cG9ydC5oZWlnaHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxpbmc6MC4yLFxyXG4gICAgICAgIGRlYnVnOmZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIHg6dmlld3BvcnQud2lkdGggKiA0LzUsXHJcbiAgICAgICAgeTowLFxyXG4gICAgICAgIHdpZHRoOjAuMixcclxuICAgICAgICBoZWlnaHQ6MVxyXG4gICAgICB9KVxyXG4gICAgXVxyXG4gICAgLypcclxuXHJcbiAgICBmb3IobGV0IGEgPSAwO2E8MTA7YSsrKXtcclxuICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IFZlcnRCb3goe1xyXG4gICAgICAgIHBvc2l0aW9uOnt4OjMyMCx5OjI1MCArIGEgKiA1MDB9LFxyXG4gICAgICAgIHZlbG9jaXR5Ont4OjAseTowfSxcclxuICAgICAgICByb3RhdGlvbjowLFxyXG4gICAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9XHJcbiAgICAgIH0se30pKTtcclxuICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IFZlcnRCb3goe1xyXG4gICAgICAgIHBvc2l0aW9uOnt4OjkwMCx5OjI1MCArIGEgKiA1MDB9LFxyXG4gICAgICAgIHZlbG9jaXR5Ont4OjAseTowfSxcclxuICAgICAgICByb3RhdGlvbjowLFxyXG4gICAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9XHJcbiAgICAgIH0se30pKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCAxMDA7IGErKyl7XHJcbiAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBib3goe1xyXG4gICAgICAgIHBvc2l0aW9uOnt4OjcwMCArIGEgKiA1MDAseTowfSxcclxuICAgICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgICAgcm90YXRpb246MCxcclxuICAgICAgICBzY2FsaW5nOnt3aWR0aDoxLGhlaWdodDoxfVxyXG4gICAgICB9LHt9KSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuYWRkSXRlbXMobmV3IFBsYXllcih7XHJcbiAgICAgIHBvc2l0aW9uOnt4OjcwMCx5OjE1MH0sXHJcbiAgICAgIHZlbG9jaXR5Ont4OjAseTowfSxcclxuICAgICAgcm90YXRpb246MCxcclxuICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX19LHtpZDpcInBsYXllclwifSkuY29tYmluZWRPYmplY3RzKCkpO1xyXG4gICAgdGhpcy5hZGRJdGVtKG5ldyBDdXJzb3Ioe1xyXG4gICAgICBwb3NpdGlvbjp7eDowLHk6MH0sXHJcbiAgICAgIHZlbG9jaXR5Ont4OjAseTowfSxcclxuICAgICAgcm90YXRpb246MCxcclxuICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX19LHtpZDpcIkN1cnNvclwifSkpO1xyXG4gICAgdGhpcy5hZGRJdGVtKG5ldyBHb29tYmEoe1xyXG4gICAgICBwb3NpdGlvbjp7eDo1MDAseTo1MDB9LFxyXG4gICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9IFxyXG4gICAgfSkpO1xyXG4gICAgKi9cclxuICAgIGdhbWUuc3RhdGUuY2FtZXJhc1swXS5odWQgPSBuZXcgT3ZlcndvcmxkX0hVRCgpO1xyXG4gIH1cclxuICByZWdpc3RlckNvbnRyb2xzKCkge1xyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIkVzY2FwZVwiLCBleGVjX3R5cGUub25jZSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmdhbWUuc3RhdGUuY2FtZXJhc1swXS5zdGF0ZS5kZWJ1ZyA9ICF0aGlzLmdhbWUuc3RhdGUuY2FtZXJhc1swXS5zdGF0ZS5kZWJ1ZztcclxuICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0T2JqKFwicGxheWVyXCIpIGFzIEdvb21iYTtcclxuICAgICAgcGxheWVyLmNvbGxpc2lvbiA9ICFwbGF5ZXIuY29sbGlzaW9uO1xyXG4gICAgICBwbGF5ZXIuZ3Jhdml0eSA9ICFwbGF5ZXIuZ3Jhdml0eTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJtb3VzZTBkb3duXCIsIGV4ZWNfdHlwZS5yZXBlYXQsKCkgPT4ge1xyXG4gICAgICBsZXQgZ3VuID0gdGhpcy5nZXRPYmpCeVRhZyhcImd1blwiKVswXSBhcyBHdW47XHJcbiAgICAgIGlmKGd1bil7XHJcbiAgICAgICAgbGV0IG11enpsZSA9IHJvdGF0aW9uX2xlbmd0aCgzMCxndW4uc3RhdGUucm90YXRpb24pO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgIHg6Z3VuLnN0YXRlLnBvc2l0aW9uLnggKyBtdXp6bGUueCxcclxuICAgICAgICAgIHk6Z3VuLnN0YXRlLnBvc2l0aW9uLnkgKyBtdXp6bGUueVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYnVsbGV0czpidWxsZXRbXSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgYSA9IDA7YSA8IDE7YSArKyl7XHJcbiAgICAgICAgICBidWxsZXRzLnB1c2gobmV3IFJvY2tldCh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOnt4OnBvc2l0aW9uLngseTpwb3NpdGlvbi55fSxcclxuICAgICAgICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICAgICAgICByb3RhdGlvbjpndW4uc3RhdGUucm90YXRpb24sXHJcbiAgICAgICAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9XHJcbiAgICAgICAgICB9LGd1bi5zdGF0ZS5yb3RhdGlvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmxvY2tlZF9idWxsZXQgPT0gbnVsbClcclxuICAgICAgICAgIHRoaXMuc3RhdGUubG9ja2VkX2J1bGxldCA9IGJ1bGxldHNbMF07XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtcyhidWxsZXRzKTtcclxuICAgICAgfVxyXG4gICAgfSw0MDApXHJcbiAgfVxyXG4gIHJlZ2lzdGVyUGFydGljbGVzKCl7XHJcbiAgICB0aGlzLnBhcnRpY2xlc1tcInNtb2tlXCJdID0ge1xyXG4gICAgICBzcHJpdGU6XCIuL3Nwcml0ZXMvZm9sZGVyL3Ntb2tlLnBuZ1wiLFxyXG4gICAgICBoZWlnaHQ6NjQsXHJcbiAgICAgIHdpZHRoOjY0XHJcbiAgICB9O1xyXG4gICAgdGhpcy5wYXJ0aWNsZXNbXCJleHBsb3Npb25cIl0gPSB7XHJcbiAgICAgIHNwcml0ZTpcIi4vc3ByaXRlcy9mb2xkZXIvZXhwbG9zaW9uLnBuZ1wiLFxyXG4gICAgICBoZWlnaHQ6MTI4LFxyXG4gICAgICB3aWR0aDoxMjhcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2codGltZSk7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUucGF1c2VkKSB7XHJcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgYXBwbHlHcmF2aXR5KHRoaXMub2JqZWN0c1thXSwgLTEgKiB0aW1lLzE2LCAtMTUpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldE9iakJ5VGFnKFwicGxheWVyXCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZ2V0T2JqQnlUYWcoXCJkdW1teVwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGxldCBjdXJzb3IgPSB0aGlzLmdldE9iakJ5VGFnKFwiQ3Vyc29yXCIpWzBdIGFzIEN1cnNvcjtcclxuICAgICAgbGV0IGNhbWVyYXMgPSBnLnN0YXRlLmNhbWVyYXM7XHJcbiAgICAgIFxyXG4gICAgICBpZiAocGxheWVyKSB7ICAgICAgICBcclxuICAgICAgICBjYW1lcmFzWzBdLnggPSBwbGF5ZXIuc3RhdGUucG9zaXRpb24ueDtcclxuICAgICAgICBjYW1lcmFzWzBdLnkgPSBwbGF5ZXIuc3RhdGUucG9zaXRpb24ueSArIChjYW1lcmFzWzBdLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0LzIgLSBwbGF5ZXIuaGVpZ2h0LzIpOyAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmKHRhcmdldCl7XHJcbiAgICAgICAgY2FtZXJhc1sxXS5zdGF0ZS5wb3NpdGlvbi54ID0gdGFyZ2V0LnN0YXRlLnBvc2l0aW9uLng7XHJcbiAgICAgICAgY2FtZXJhc1sxXS5zdGF0ZS5wb3NpdGlvbi55ID0gdGFyZ2V0LnN0YXRlLnBvc2l0aW9uLnk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmIChjdXJzb3IpIHtcclxuICAgICAgICBjdXJzb3IuY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgICAgICAgY3Vyc29yLmdyYXZpdHkgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdKTtcclxuICAgICAgICBpZighbW91c2Upe1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnNvci5zdGF0ZS5wb3NpdGlvbi54ID0gbW91c2UueDtcclxuICAgICAgICBjdXJzb3Iuc3RhdGUucG9zaXRpb24ueSA9IG1vdXNlLnk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBzdXBlci5zdGF0ZWYodGltZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJcbiAgICBcbiAgICBpbXBvcnQge3Jvb219IGZyb20gXCIuLi8uLi9saWIvcm9vbVwiO1xuICAgIGltcG9ydCB7Z2FtZX0gZnJvbSBcIi4uLy4uL3ZhblwiO1xuICAgIGltcG9ydCB7c3RhdGVfY29uZmlnfSBmcm9tIFwiLi4vLi4vbGliL3Jvb21cIjtcbiAgICBpbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4vVGVzdFIuanNvblwiO1xuICAgIGxldCBjZmlnID0gY29uZmlnIGFzIHVua25vd24gYXMgc3RhdGVfY29uZmlnO1xuICAgIGludGVyZmFjZSBUZXN0Ul9zdGF0ZXtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RSIGV4dGVuZHMgcm9vbTxUZXN0Ul9zdGF0ZT57XG4gICAgICBiYWNrZ3JvdW5kX3VybD1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL2MvYzIvUGV0ZXJfR3JpZmZpbi5wbmdcIjtcbiAgICAgIGNvbnN0cnVjdG9yKGdhbWU6Z2FtZTx1bmtub3duPil7XG4gICAgICAgIHN1cGVyKGdhbWUsY2ZpZyk7XG4gICAgICB9XG4gICAgICByZWdpc3RlckNvbnRyb2xzKCl7XG4gICAgXG4gICAgICB9XG4gICAgICByZWdpc3RlclBhcnRpY2xlcygpe1xuICAgIFxuICAgICAgfVxuICAgICAgc3RhdGVmKGRlbHRhX3RpbWU6bnVtYmVyKXtcbiAgICAgICAgc3VwZXIuc3RhdGVmKGRlbHRhX3RpbWUpO1xuICAgICAgfVxuICAgIFxuICAgIH1cbiAgICBcbiAgICAiLCJpbXBvcnQgeyByb29tLCBhcHBseUdyYXZpdHksb2JqZWN0X3N0YXRlX2NvbmZpZywgc3RhdGVfY29uZmlnIH0gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XHJcbmltcG9ydCB7IEdvb21iYSB9IGZyb20gXCIuLi9vYmplY3RzL0dvb21iYVwiO1xyXG5pbXBvcnQgeyBDb250cm9sbGVkUGxheWVyIH0gZnJvbSBcIi4uL29iamVjdHMvQ29udHJvbGxlZFBsYXllclwiO1xyXG5pbXBvcnQgeyBHdW4gfSBmcm9tIFwiLi4vb2JqZWN0cy9HdW5cIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL29iamVjdHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gXCIuLi9vYmplY3RzL0N1cnNvclwiO1xyXG5pbXBvcnQgeyBib3ggfSBmcm9tIFwiLi4vb2JqZWN0cy9ib3hcIjtcclxuaW1wb3J0IHsgVmVydEJveCB9IGZyb20gXCIuLi9vYmplY3RzL1ZlcnRCb3hcIjtcclxuaW1wb3J0IHsgdmVsb2NpdHlDb2xsaXNpb25DaGVjayB9IGZyb20gXCIuLi8uLi9saWIvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IGdyYXZpdHlfb2JqLCByb3RhdGlvbl9sZW5ndGggfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBQb2xsX01vdXNlLCBleGVjX3R5cGUgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IEhVRCwgVGV4dCB9IGZyb20gXCIuLi8uLi9saWIvaHVkXCI7XHJcbmltcG9ydCB7IERFQlVHLCBnYW1lLCBHZXRWaWV3cG9ydERpbWVuc2lvbnMsdmlld3BvcnQsIHNldERlYnVnIH0gZnJvbSBcIi4uLy4uL3ZhblwiO1xyXG5pbXBvcnQge2J1bGxldCwgUm9ja2V0fSBmcm9tIFwiLi4vb2JqZWN0cy9idWxsZXRcIjtcclxuaW1wb3J0IHtDYW1lcmF9IGZyb20gXCIuLi8uLi9saWIvcmVuZGVyXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuaW1wb3J0ICogYXMganNvbiBmcm9tIFwiLi9VbmRlcndvcmxkLmpzb25cIjtcclxuaW50ZXJmYWNlIG92ZXJ3b3JsZF9pIHtcclxuICBwbGF5ZXI6IGdyYXZpdHlfb2JqLFxyXG4gIHBhdXNlZDogYm9vbGVhbixcclxuICBsb2NrZWRfYnVsbGV0OmJ1bGxldFxyXG59XHJcblxyXG5jbGFzcyBPdmVyd29ybGRfSFVEIGV4dGVuZHMgSFVEIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnRleHRfZWxlbWVudHMucHVzaChuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0ICogNy84XHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDQ0LFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOlwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOjFcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgbGV0IHggPSBnLmdldFJvb20oKS5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgaWYoeClcclxuICAgICAgICByZXR1cm4gYFRpbWVzIEFpcnNob3Q6JHt4LnN0YXRlLnRpbWVzX2FpcnNob3R9YDtcclxuICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH0pKTtcclxuICAgIHRoaXMudGV4dF9lbGVtZW50cy5wdXNoKG5ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQgKiA2LzhcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogNDQsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOjFcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgbGV0IHggPSBnLmdldFJvb20oKS5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgaWYoeClcclxuICAgICAgICByZXR1cm4gYE1heCBUaW1lcyBBaXJzaG90OiR7TWF0aC5tYXgoeC5zdGF0ZS50aW1lc19haXJzaG90LHguc3RhdGUubWF4X3RpbWVzX2FpcnNob3QpfWA7XHJcbiAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBIZWlnaHRfSFVEIGV4dGVuZHMgSFVEe1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy50ZXh0X2VsZW1lbnRzLnB1c2gobmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IDYwMFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiAxNSxcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjpcImxlZnRcIixcclxuICAgICAgc2NhbGluZzoxXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGxldCB4ID0gZy5nZXRSb29tKCkuZ2V0T2JqQnlUYWcoXCJkdW1teVwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGlmKHgpXHJcbiAgICAgICAgcmV0dXJuIGBIZWlnaHQ6JHtNYXRoLmZsb29yKHguc3RhdGUucG9zaXRpb24ueSl9YDtcclxuICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVbmRlcndvcmxkIGV4dGVuZHMgcm9vbTxvdmVyd29ybGRfaT57XHJcbiAgYmFja2dyb3VuZF91cmwgPSBcIi4vc3ByaXRlcy9vcmlnXzcxOTI3NS5qcGdcIjtcclxuICBvYmplY3RzOmdyYXZpdHlfb2JqW107XHJcbiAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+KSB7XHJcbiAgICBzdXBlcihnYW1lLGpzb24gYXMgdW5rbm93biBhcyBzdGF0ZV9jb25maWcpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcGxheWVyOiB1bmRlZmluZWQsXHJcbiAgICAgIHBhdXNlZDogZmFsc2UsXHJcbiAgICAgIGxvY2tlZF9idWxsZXQ6bnVsbFxyXG4gICAgfTtcclxuICAgIGdhbWUuc3RhdGUuY2FtZXJhcyA9IFtcclxuICAgICAgbmV3IENhbWVyYSh7XHJcbiAgICAgICAgeDowLFxyXG4gICAgICAgIHk6MCxcclxuICAgICAgICBkaW1lbnNpb25zOntcclxuICAgICAgICAgIGhlaWdodDp2aWV3cG9ydC5oZWlnaHQsXHJcbiAgICAgICAgICB3aWR0aDp2aWV3cG9ydC53aWR0aCAqIDQvNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGluZzowLjUsXHJcbiAgICAgICAgZGVidWc6ZmFsc2VcclxuICAgICAgfVxyXG4gICAgICAse1xyXG4gICAgICAgIHg6MSxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgd2lkdGg6MC44LFxyXG4gICAgICAgIGhlaWdodDoxXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgQ2FtZXJhKHtcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowLFxyXG4gICAgICAgIGRpbWVuc2lvbnM6e1xyXG4gICAgICAgICAgd2lkdGg6dmlld3BvcnQud2lkdGgvNSxcclxuICAgICAgICAgIGhlaWdodDp2aWV3cG9ydC5oZWlnaHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxpbmc6MC4yLFxyXG4gICAgICAgIGRlYnVnOmZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIHg6dmlld3BvcnQud2lkdGggKiA0LzUsXHJcbiAgICAgICAgeTowLFxyXG4gICAgICAgIHdpZHRoOjAuMixcclxuICAgICAgICBoZWlnaHQ6MVxyXG4gICAgICB9KVxyXG4gICAgXVxyXG4gICAgLypcclxuICAgIGZvcihsZXQgYSA9IDA7YTwxMDthKyspe1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgVmVydEJveCh7eDozMjAseToyNTAgKyBhICogNTAwfSwwLDEpKTtcclxuICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IFZlcnRCb3goe3g6OTAwLHk6MjUwICsgYSAqIDUwMH0sMCwxKSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gMDthIDwgMTAwOyBhKyspe1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgYm94KHt4OjcwMCArIGEgKiA1MDAseTowfSwwLDEpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5hZGRJdGVtcyhbLi4ubmV3IFBsYXllcih7eDo3MDAseToxNTB9LDAsMSx7aWQ6XCJwbGF5ZXJcIn0pLmNvbWJpbmVkX29iamVjdHMoKV0pXHJcbiAgICB0aGlzLmFkZEl0ZW0obmV3IEN1cnNvcih7eDowLHk6MH0sMCwxLHtpZDpcIkN1cnNvclwifSkpO1xyXG4gICAgdGhpcy5hZGRJdGVtKG5ldyBHb29tYmEoe3g6NTAwLHk6NTAwfSwwLDEpKTtcclxuICAgICovXHJcbiAgICBnYW1lLnN0YXRlLmNhbWVyYXNbMF0uaHVkID0gbmV3IE92ZXJ3b3JsZF9IVUQoKTtcclxuICAgIGdhbWUuc3RhdGUuY2FtZXJhc1sxXS5odWQgPSBuZXcgSGVpZ2h0X0hVRCgpO1xyXG4gIH1cclxuICByZWdpc3RlckNvbnRyb2xzKCkge1xyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIkVzY2FwZVwiLCBleGVjX3R5cGUub25jZSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmdhbWUuc3RhdGUuY2FtZXJhc1swXS5zdGF0ZS5kZWJ1ZyA9ICF0aGlzLmdhbWUuc3RhdGUuY2FtZXJhc1swXS5zdGF0ZS5kZWJ1ZztcclxuICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0T2JqKFwicGxheWVyXCIpIGFzIEdvb21iYTtcclxuICAgICAgcGxheWVyLmNvbGxpc2lvbiA9ICFwbGF5ZXIuY29sbGlzaW9uO1xyXG4gICAgICBwbGF5ZXIuZ3Jhdml0eSA9ICFwbGF5ZXIuZ3Jhdml0eTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJtb3VzZTBkb3duXCIsIGV4ZWNfdHlwZS5yZXBlYXQsKCkgPT4ge1xyXG4gICAgICBsZXQgZ3VuID0gdGhpcy5nZXRPYmooXCJndW5cIikgYXMgR3VuO1xyXG4gICAgICBpZihndW4pe1xyXG4gICAgICAgIGxldCBtdXp6bGUgPSByb3RhdGlvbl9sZW5ndGgoMzAsZ3VuLnN0YXRlLnJvdGF0aW9uKTtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICB4Omd1bi5zdGF0ZS5wb3NpdGlvbi54ICsgbXV6emxlLngsXHJcbiAgICAgICAgICB5Omd1bi5zdGF0ZS5wb3NpdGlvbi55ICsgbXV6emxlLnlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ1bGxldHMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGEgPSAwO2EgPCAxO2EgKyspe1xyXG4gICAgICAgICAgYnVsbGV0cy5wdXNoKG5ldyBSb2NrZXQoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjp7eDpwb3NpdGlvbi54LHk6cG9zaXRpb24ueX0sXHJcbiAgICAgICAgICAgIHZlbG9jaXR5Ont4OjAseTowfSxcclxuICAgICAgICAgICAgcm90YXRpb246Z3VuLnN0YXRlLnJvdGF0aW9uLFxyXG4gICAgICAgICAgICBzY2FsaW5nOnt3aWR0aDoxLGhlaWdodDoxfVxyXG4gICAgICAgICAgfSx7fSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmxvY2tlZF9idWxsZXQgPT0gbnVsbClcclxuICAgICAgICAgIHRoaXMuc3RhdGUubG9ja2VkX2J1bGxldCA9IGJ1bGxldHNbMF07XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtcyhidWxsZXRzKTtcclxuICAgICAgfVxyXG4gICAgfSw0MDApXHJcbiAgfVxyXG4gIHJlZ2lzdGVyUGFydGljbGVzKCl7XHJcbiAgICB0aGlzLnBhcnRpY2xlc1tcInNtb2tlXCJdID0ge1xyXG4gICAgICBzcHJpdGU6XCIuL3Nwcml0ZXMvZm9sZGVyL3Ntb2tlLnBuZ1wiLFxyXG4gICAgICBoZWlnaHQ6NjQsXHJcbiAgICAgIHdpZHRoOjY0XHJcbiAgICB9O1xyXG4gICAgdGhpcy5wYXJ0aWNsZXNbXCJleHBsb3Npb25cIl0gPSB7XHJcbiAgICAgIHNwcml0ZTpcIi4vc3ByaXRlcy9mb2xkZXIvZXhwbG9zaW9uLnBuZ1wiLFxyXG4gICAgICBoZWlnaHQ6MTI4LFxyXG4gICAgICB3aWR0aDoxMjhcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLnBhdXNlZCkge1xyXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgIGFwcGx5R3Jhdml0eSh0aGlzLm9iamVjdHNbYV0sIC0xLCAtMTUpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldE9iakJ5VGFnKFwicGxheWVyXCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZ2V0T2JqQnlUYWcoXCJkdW1teVwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGxldCBjdXJzb3IgPSB0aGlzLmdldE9iakJ5VGFnKFwiQ3Vyc29yXCIpWzBdIGFzIEN1cnNvcjtcclxuICAgICAgbGV0IGNhbWVyYXMgPSBnLnN0YXRlLmNhbWVyYXM7XHJcbiAgICAgIFxyXG4gICAgICBpZiAocGxheWVyKSB7ICAgICAgICBcclxuICAgICAgICBjYW1lcmFzWzBdLnggPSBwbGF5ZXIuc3RhdGUucG9zaXRpb24ueDtcclxuICAgICAgICBjYW1lcmFzWzBdLnkgPSBwbGF5ZXIuc3RhdGUucG9zaXRpb24ueSArIChjYW1lcmFzWzBdLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0LzIgLSBwbGF5ZXIuaGVpZ2h0LzIpOyAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmKHRhcmdldCl7XHJcbiAgICAgICAgY2FtZXJhc1sxXS5zdGF0ZS5wb3NpdGlvbi54ID0gdGFyZ2V0LnN0YXRlLnBvc2l0aW9uLng7XHJcbiAgICAgICAgY2FtZXJhc1sxXS5zdGF0ZS5wb3NpdGlvbi55ID0gdGFyZ2V0LnN0YXRlLnBvc2l0aW9uLnk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmIChjdXJzb3IpIHtcclxuICAgICAgICBjdXJzb3IuY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgICAgICAgY3Vyc29yLmdyYXZpdHkgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdKTtcclxuICAgICAgICBjdXJzb3Iuc3RhdGUucG9zaXRpb24ueCA9IG1vdXNlLng7XHJcbiAgICAgICAgY3Vyc29yLnN0YXRlLnBvc2l0aW9uLnkgPSBtb3VzZS55O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgc3VwZXIuc3RhdGVmKHRpbWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiXG5pbnRlcmZhY2Ugcm9vbV9kaXIge1xuICBbaW5kZXg6c3RyaW5nXTphbnlcbn1cbmltcG9ydCB7Qm9hcmR9IGZyb20gXCIuL0JvYXJkXCI7XG5pbXBvcnQge092ZXJ3b3JsZH0gZnJvbSBcIi4vT3ZlcndvcmxkXCI7XG5pbXBvcnQge1Rlc3RSfSBmcm9tIFwiLi9UZXN0UlwiO1xuaW1wb3J0IHtVbmRlcndvcmxkfSBmcm9tIFwiLi9VbmRlcndvcmxkXCI7XG5leHBvcnQgbGV0IHJvb21zOnJvb21fZGlyID0ge1xuXHRCb2FyZDpCb2FyZCxcblx0T3ZlcndvcmxkOk92ZXJ3b3JsZCxcblx0VGVzdFI6VGVzdFIsXG5cdFVuZGVyd29ybGQ6VW5kZXJ3b3JsZCxcbn0iLCJpbnRlcmZhY2Ugc291bmRfc3RvcmFnZSB7XHJcbiAgW2luZGV4OiBzdHJpbmddOiBIVE1MQXVkaW9FbGVtZW50XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBhdWRpbyB7XHJcbiAgc291bmRzOiBzb3VuZF9zdG9yYWdlID0ge307XHJcbiAgYWRkKG5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc291bmRzW25hbWVdID0gbmV3IEF1ZGlvKHVybCk7XHJcbiAgfVxyXG4gIGFzeW5jIGxvYWQoKSB7XHJcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc291bmRzKTtcclxuICAgIGxldCBwcm9taXNlcyA9IGtleXMubWFwKChrZXkpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLnNvdW5kc1trZXldLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5dGhyb3VnaFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgdHJ5e1xyXG4gICAgICBsZXQgeCA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgcmV0dXJuKHgpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwbGF5KG5hbWU6c3RyaW5nLHZvbHVtZTpudW1iZXIpe1xyXG4gICAgbGV0IGEgPSB0aGlzLnNvdW5kc1tuYW1lXTtcclxuICAgIGEucGF1c2UoKVxyXG4gICAgYS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBhLnZvbHVtZSA9IHZvbHVtZTtcclxuICAgIGEucGxheSgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7b2JqLGdldElkfSBmcm9tIFwiLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQge29ial9zdGF0ZX0gZnJvbSBcIi4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge2RlZXB9IGZyb20gXCIuLi92YW5cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgY29sbGlzaW9uX2JveHtcclxuICB4Om51bWJlcjtcclxuICB5Om51bWJlcjtcclxuICB3aWR0aDpudW1iZXI7XHJcbiAgaGVpZ2h0Om51bWJlcjtcclxufVxyXG5cclxuZW51bSBkaXJlY3Rpb257XHJcbiAgbGVmdCxcclxuICByaWdodCxcclxuICB1cCxcclxuICBkb3duXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja19hbGxfb2JqZWN0cyhjOiBjb2xsaXNpb25fYm94LG9ianM6b2JqW10sZXhlbXB0aW9uOnN0cmluZ1tdID0gW10pOm9ialtde1xyXG4gIHJldHVybiBvYmpzLmZpbHRlcigoYSk9PighZXhlbXB0aW9uLnNvbWUoKGIpPT5hLnRhZ3MuaW5kZXhPZihiKSAhPT0gLTEpICYmIGEuY29sbGlkZXNXaXRoQm94KGMpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja19hbGxfY29sbGlzaW9ucyhjOiBjb2xsaXNpb25fYm94LG9ianM6b2JqW10sZXhlbXB0aW9uOnN0cmluZ1tdID0gW10pOkFycmF5PG9iaj57XHJcbiAgbGV0IG1hdGNoZWQgPSBbXTtcclxuICBmb3IgKGxldCBhIG9mIG9ianMpIHtcclxuICAgIGlmICghZXhlbXB0aW9uLnNvbWUoKGIpPT5hLnRhZ3MuaW5kZXhPZihiKSAhPT0gLTEpICYmIGEuY29sbGlzaW9uICYmIGEuY29sbGlkZXNXaXRoQm94KGMpKSB7XHJcbiAgICAgIG1hdGNoZWQucHVzaChhKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG1hdGNoZWRcclxufVxyXG4vL0NoZWNrcyB1cCB0byB0aGUgZmlyc3QgY29sbGlzaW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja19jb2xsaXNpb25zKGM6IGNvbGxpc2lvbl9ib3gsIG9ianM6IG9ialtdLCBleGVtcHRpb246c3RyaW5nKSB7XHJcbiAgZm9yIChsZXQgYSBvZiBvYmpzKSB7XHJcbiAgICBpZiAoYS5pZCAhPT0gZXhlbXB0aW9uICYmIGEuY29sbGlzaW9uICYmIGEuY29sbGlkZXNXaXRoQm94KGMpKSB7XHJcbiAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gdmVsb2NpdHlfbWF4KHZlbG9jaXR5Om51bWJlcixib3g6Y29sbGlzaW9uX2JveCxvYmpzOm9ialtdLCBleGVtcHRpb246c3RyaW5nLGRpcjpkaXJlY3Rpb24pe1xyXG4gIGxldCBjb2xsaXNpb24gPSBjaGVja19jb2xsaXNpb25zKGJveCwgb2JqcywgZXhlbXB0aW9uKTtcclxuICBpZihjb2xsaXNpb24gPT0gbnVsbCl7XHJcbiAgICByZXR1cm4gdmVsb2NpdHk7XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBsZXQgY29sbGlkZXIgPSBjb2xsaXNpb247XHJcbiAgICBsZXQgb3JpZ2luID0gZ2V0SWQob2JqcyxleGVtcHRpb24pO1xyXG4gICAgbGV0IG9yaWdfc3QgPSBvcmlnaW4uc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gICAgbGV0IGNvbGxpZGVyX3N0ID0gY29sbGlkZXIuc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gICAgbGV0IG9yaWdfY29sID0gb3JpZ2luLmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICAgIGxldCBjb2xsaWRlcl9jb2wgPSBjb2xsaWRlci5nZXRGdWxsQ29sbGlzaW9uQm94KCk7XHJcbiAgICBpZihkaXIgPT0gZGlyZWN0aW9uLmxlZnQpe1xyXG4gICAgICByZXR1cm4gKG9yaWdfY29sLnggLSBvcmlnX2NvbC53aWR0aC8yKSAtIChjb2xsaWRlcl9jb2wueCArIGNvbGxpZGVyX2NvbC53aWR0aC8yKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlyID09IGRpcmVjdGlvbi5yaWdodCl7XHJcbiAgICAgIHJldHVybiAoY29sbGlkZXJfY29sLnggLSBjb2xsaWRlcl9jb2wud2lkdGgvMikgLSAob3JpZ19jb2wueCArIG9yaWdfY29sLndpZHRoLzIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkaXIgPT0gZGlyZWN0aW9uLmRvd24pe1xyXG4gICAgICByZXR1cm4gKG9yaWdfY29sLnkgLSBvcmlnX2NvbC5oZWlnaHQvMikgLSAoY29sbGlkZXJfY29sLnkgKyBjb2xsaWRlcl9jb2wuaGVpZ2h0LzIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkaXIgPT0gZGlyZWN0aW9uLnVwKXtcclxuICAgICAgcmV0dXJuIChjb2xsaWRlcl9jb2wueSAtIGNvbGxpZGVyX2NvbC5oZWlnaHQvMikgLSAob3JpZ19jb2wueSArIG9yaWdfY29sLmhlaWdodC8yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZWxvY2l0eUNvbGxpc2lvbkNoZWNrKG9iamVjdDpvYmosbGlzdDpvYmpbXSkge1xyXG4gIGxpc3QgPSBbLi4ubGlzdF07XHJcbiAgbGV0IG9iID0gb2JqZWN0O1xyXG4gIGxldCBzdCA9IG9iamVjdC5zdGF0ZSBhcyBvYmpfc3RhdGU7XHJcbiAgbGV0IHhfdmVsID0gc3QudmVsb2NpdHkueDtcclxuICBsZXQgeV92ZWwgPSBzdC52ZWxvY2l0eS55O1xyXG4gIGlmKCFvYi5jb2xsaXNpb24pe1xyXG4gICAgKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnBvc2l0aW9uLnggKz0gKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnZlbG9jaXR5Lng7XHJcbiAgICAoPG9ial9zdGF0ZT5vYi5zdGF0ZSkucG9zaXRpb24ueSArPSAoPG9ial9zdGF0ZT5vYi5zdGF0ZSkudmVsb2NpdHkueTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgbGV0IGNvbF9ib3ggPSBvYi5nZXRGdWxsQ29sbGlzaW9uQm94KCk7XHJcbiAgaWYgKHhfdmVsID4gMCkge1xyXG4gICAgbGV0IGJveCA9IHtcclxuICAgICAgeDogY29sX2JveC54ICsgY29sX2JveC53aWR0aC8yICsgeF92ZWwvMixcclxuICAgICAgeTogY29sX2JveC55LFxyXG4gICAgICB3aWR0aDogeF92ZWwsXHJcbiAgICAgIGhlaWdodDogY29sX2JveC5oZWlnaHRcclxuICAgIH07XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LngsYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLnJpZ2h0KTtcclxuICAgIGlmKHZlbCA+IDApe1xyXG4gICAgICBzdC5wb3NpdGlvbi54ICs9IHZlbDtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHN0LnZlbG9jaXR5LnggPSAwOyAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHhfdmVsIDwgMCkge1xyXG4gICAgbGV0IGJveCA9IHtcclxuICAgICAgeDogeF92ZWwvMiArIGNvbF9ib3gueCAtIGNvbF9ib3gud2lkdGgvMixcclxuICAgICAgeTogY29sX2JveC55LFxyXG4gICAgICB3aWR0aDogLTEgKiB4X3ZlbCxcclxuICAgICAgaGVpZ2h0OiBjb2xfYm94LmhlaWdodFxyXG4gICAgfVxyXG4gICAgbGV0IHZlbCA9IHZlbG9jaXR5X21heChzdC52ZWxvY2l0eS54LGJveCxsaXN0LG9iLmlkLGRpcmVjdGlvbi5sZWZ0KTtcclxuICAgIGlmKHZlbCA8IDApe1xyXG4gICAgICBzdC5wb3NpdGlvbi54ICs9IHZlbDtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHN0LnZlbG9jaXR5LnggPSAwOyBcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHlfdmVsID4gMCkge1xyXG4gICAgbGV0IGJveCA9IHtcclxuICAgICAgeDogY29sX2JveC54LFxyXG4gICAgICB5OiBjb2xfYm94LnkgKyBjb2xfYm94LmhlaWdodC8yICsgeV92ZWwvMixcclxuICAgICAgd2lkdGg6IGNvbF9ib3gud2lkdGgsXHJcbiAgICAgIGhlaWdodDogeV92ZWxcclxuICAgIH1cclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueSxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24udXApO1xyXG4gICAgaWYodmVsID4gMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnkgKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHlfdmVsIDwgMCkge1xyXG4gICAgbGV0IGJveCA9IHtcclxuICAgICAgeDogY29sX2JveC54LFxyXG4gICAgICB5OiB5X3ZlbC8yICsgY29sX2JveC55IC0gY29sX2JveC5oZWlnaHQvMixcclxuICAgICAgd2lkdGg6IGNvbF9ib3gud2lkdGgsXHJcbiAgICAgIGhlaWdodDogLTEgKiB5X3ZlbFxyXG4gICAgfVxyXG4gICAgbGV0IHZlbCA9IHZlbG9jaXR5X21heChzdC52ZWxvY2l0eS55LGJveCxsaXN0LG9iLmlkLGRpcmVjdGlvbi5kb3duKTtcclxuICAgIGlmKHZlbCA8IDApe1xyXG4gICAgICBzdC5wb3NpdGlvbi55ICs9IHZlbDtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHN0LnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IGcgfSBmcm9tIFwiLi4vZ2FtZS9tYWluXCI7XHJcbmltcG9ydCB7Z2FtZSxQQVVTRUQsREVCVUcsIEdldFNjcmVlbkRpbWVuc2lvbnMsR2V0Vmlld3BvcnREaW1lbnNpb25zfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHtvYmp9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi9yZW5kZXJcIjtcclxuaW1wb3J0IHtwb3NpdGlvbn0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHtkZWJ1Z19zdGF0ZX0gZnJvbSBcIi4vZGVidWdcIjtcclxuXHJcbmludGVyZmFjZSBtb3VzZVBvc3tcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBsYXN0OntcclxuICAgIHg6bnVtYmVyLFxyXG4gICAgeTpudW1iZXJcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBjb250cm9sX2Z1bmN7XHJcbiAgKCk6dm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgbW91c2VCaW5kc3tcclxuICBba2V5OnN0cmluZ106IEFycmF5PFtjb250cm9sX2Z1bmMsb2JqXT5cclxufVxyXG5cclxuaW50ZXJmYWNlIGtleUJpbmRze1xyXG4gIFtrZXk6c3RyaW5nXTogQXJyYXk8Y29udHJvbF9mdW5jPlxyXG59XHJcbmxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfY2xpY2tfaGFuZGxlcihnYW1lOmdhbWU8dW5rbm93bj4pe1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PntcclxuICAgIFxyXG4gICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShnYW1lLnN0YXRlLmNhbWVyYXNbMF0pO1xyXG4gICAgaWYoIW1vdXNlKXtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgYm94OmNvbGxpc2lvbl9ib3ggPSB7XHJcbiAgICAgIHg6bW91c2UueCxcclxuICAgICAgeTptb3VzZS55LFxyXG4gICAgICBoZWlnaHQ6MSxcclxuICAgICAgd2lkdGg6MVxyXG4gICAgfTtcclxuICAgIFxyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICAgIGZvcihsZXQgYSA9IDA7YSA8IGQubGVuZ3RoO2ErKyl7XHJcbiAgICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICAgIGlmKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIHNlbGVjdGVkLmtleSA9PT0gXCJtb3VzZTFcIiAmJiBzZWxlY3RlZC5leGVjdXRlID09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBpZihzZWxlY3RlZC5vYmogIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICBpZihzZWxlY3RlZC5vYmouY29sbGlkZXNXaXRoQm94KGJveCkpe1xyXG4gICAgICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSAgXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJkb3duXCIpICAmJiAhc2VsZWN0ZWQuZXhlY3V0ZWQpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgICBzZWxlY3RlZC5yZXBlYXRfdGltZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJ1cFwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZXVwXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKSB7XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgIH1cclxuICAgZWxzZSBpZihzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcInVwXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNldXBcIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgbGV0IGcgPSBbLi4ucmVwZWF0X2JpbmRzXTtcclxuICAgICBmb3IobGV0IGEgPSAwOyBhIDwgZy5sZW5ndGg7YSsrKXtcclxuICAgICAgIGlmKGdbYV0uYmluZC5pZCA9PT0gc2VsZWN0ZWQuaWQpe1xyXG4gICAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICBnW2FdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICBicmVhaztcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuICB9XHJcbn0pXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcclxuICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJ1cFwiKSAgJiYgIXNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgICAgc2VsZWN0ZWQucmVwZWF0X3RpbWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwiZG93blwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZWRvd25cIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2UpIHtcclxuICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwiZG93blwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZWRvd25cIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgIGxldCBnID0gWy4uLnJlcGVhdF9iaW5kc107XHJcbiAgICAgIGZvcihsZXQgYSA9IDA7IGEgPCBnLmxlbmd0aDthKyspe1xyXG4gICAgICAgIGlmKGdbYV0uYmluZC5pZCA9PT0gc2VsZWN0ZWQuaWQpe1xyXG4gICAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5pbnRlcmZhY2UgaGVsZF9rZXlze1xyXG4gIFtpbmRleDpzdHJpbmddOmJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGxldCBoZWxkX2tleXM6aGVsZF9rZXlzID0ge307XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsKGUpPT57XHJcbiAgbGV0IGNvZGU6c3RyaW5nO1xyXG5cclxuICBpZihlLmRlbHRhWSA8IDApe1xyXG4gICAgY29kZSA9IFwic2Nyb2xsdXBcIjtcclxuICB9XHJcbiAgZWxzZSBpZihlLmRlbHRhWSA+IDApe1xyXG4gICAgY29kZSA9IFwic2Nyb2xsZG93blwiO1xyXG4gIH1cclxuXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIFxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IGNvZGUpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICBoZWxkX2tleXNbZS5jb2RlXSA9IHRydWU7XHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5rZXlib2FyZCAmJiBzZWxlY3RlZC5rZXkgPT09IGUuY29kZSAgJiYgIXNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgICAgZm9yKGxldCBjIG9mIHJlcGVhdF9iaW5kcyl7XHJcbiAgICAgICAgICBpZihjLmJpbmQuaWQgPT0gc2VsZWN0ZWQuaWQpe1xyXG4gICAgICAgICAgICBjLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59KVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgaGVsZF9rZXlzW2UuY29kZV0gPSBmYWxzZTtcclxuICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLmtleWJvYXJkICYmIHNlbGVjdGVkLmtleSA9PT0gZS5jb2RlICYmIHNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlICl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIGxldCBnID0gWy4uLnJlcGVhdF9iaW5kc107XHJcbiAgICAgICAgZm9yKGxldCBhID0gMDsgYSA8IGcubGVuZ3RoO2ErKyl7XHJcbiAgICAgICAgICBpZihnW2FdLmJpbmQuaWQgPT09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZ1thXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxubGV0IHRyYWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcclxuICB2YXIgcmVjdCA9IChlLnRhcmdldCBhcyBIVE1MQ2FudmFzRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgO1xyXG4gIC8vY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgbGFzdF94ID0geDtcclxuICBsYXN0X3kgPSB5O1xyXG4gIHggPSBlLmNsaWVudFg7IC8veCBwb3NpdGlvbiB3aXRoaW4gdGhlIGVsZW1lbnQuXHJcbiAgeSA9IGUuY2xpZW50WTsgIC8veSBwb3NpdGlvbiB3aXRoaW4gdGhlIGVsZW1lbnQuXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGVudW0gYnR5cGV7XHJcbiAgbW91c2UsXHJcbiAga2V5Ym9hcmRcclxufVxyXG5cclxuaW50ZXJmYWNlIGJpbmR7XHJcbiAga2V5OnN0cmluZyxcclxuICB0eXBlOmJ0eXBlLFxyXG4gIGlkOm51bWJlcixcclxuICBmdW5jdGlvbjpjb250cm9sX2Z1bmMsXHJcbiAgZXhlY3V0ZTpleGVjX3R5cGUsXHJcbiAgcmVwZWF0X3RpbWVyPzpyZXBlYXRfYmluZCxcclxuICBvYmo/Om9iaixcclxuICBleGVjdXRlZD86Ym9vbGVhbixcclxuICBpbnRlcnZhbD86bnVtYmVyLFxyXG4gIGNhbWVyYT86Q2FtZXJhXHJcbn1cclxuXHJcbmludGVyZmFjZSByZXBlYXRfYmluZHtcclxuICBiaW5kOmJpbmQsXHJcbiAgdGltZXI6bnVtYmVyLFxyXG4gIGludGVydmFsOm51bWJlcixcclxuICBhY3RpdmU6Ym9vbGVhblxyXG59XHJcblxyXG5sZXQgeCA9IDA7XHJcbmxldCB5ID0gMDtcclxubGV0IGxhc3RfeCA9IDA7XHJcbmxldCBsYXN0X3kgPSAwO1xyXG5sZXQgYmluZHM6a2V5QmluZHMgPSB7fTtcclxuZXhwb3J0IGxldCBkZWJ1Z19iaW5kczpiaW5kW10gPSBbXTtcclxubGV0IG1vdXNlQmluZHM6bW91c2VCaW5kcyA9IHt9O1xyXG5sZXQgYmluZF9jb3VudCA9IDA7XHJcblxyXG5sZXQgYWxsX2JpbmRzOkFycmF5PGJpbmQ+ID0gW11cclxuXHJcbmxldCByZXBlYXRfYmluZHM6QXJyYXk8cmVwZWF0X2JpbmQ+ID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9sbF9Nb3VzZShjYW1lcmE6Q2FtZXJhLGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudCA9IGcuc3RhdGUuY2FudmFzKTpwb3NpdGlvbntcclxuICBsZXQgaGVpZ2h0ID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0O1xyXG4gIGxldCB3cmF0aW8gPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNhbnZhcykud2lkdGgpL0dldFZpZXdwb3J0RGltZW5zaW9ucygpLndpZHRoO1xyXG4gIGxldCB2cmF0aW8gPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNhbnZhcykuaGVpZ2h0KS9HZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQ7XHJcbiAgbGV0IGJvdW5kcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBpZih4ID4gYm91bmRzLmxlZnQgJiYgeCA8IGJvdW5kcy5yaWdodCAmJiB5IDwgYm91bmRzLmJvdHRvbSAmJiB5ID4gYm91bmRzLnRvcCl7XHJcbiAgICBcclxuICAgIHJldHVybiAoe1xyXG4gICAgICB4OiAoKHggLSBib3VuZHMubGVmdCAtIGNhbWVyYS5zdGF0ZS52aWV3cG9ydC54KS93cmF0aW8vY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoL2NhbWVyYS5zdGF0ZS5zY2FsaW5nLzIpICxcclxuICAgICAgeTogKChoZWlnaHQgLSAoeS1ib3VuZHMudG9wKS92cmF0aW8pL2NhbWVyYS5zdGF0ZS5zY2FsaW5nICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQvY2FtZXJhLnN0YXRlLnNjYWxpbmcvMiAtIGNhbWVyYS5zdGF0ZS52aWV3cG9ydC55KVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV4ZWN1dGVSZXBlYXRCaW5kcyhiOm51bWJlcil7XHJcbiAgZm9yKGxldCBhIG9mIHJlcGVhdF9iaW5kcyl7XHJcbiAgICBpZihhLmJpbmQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCAmJiBhLnRpbWVyID09IDAgJiYgYS5hY3RpdmUpe1xyXG4gICAgICBhLmJpbmQuZnVuY3Rpb24oKTtcclxuICAgIH1cclxuICAgIGlmKGEuYWN0aXZlIHx8ICghYS5hY3RpdmUgJiYgYS50aW1lciAhPSAwKSlcclxuICAgICAgYS50aW1lciArPSBiO1xyXG4gICAgaWYoYS50aW1lciA+IGEuaW50ZXJ2YWwpe1xyXG4gICAgICBhLnRpbWVyID0gMDsgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVW5iaW5kKGJpbmRfaWQ6bnVtYmVyKXtcclxuICBmb3IobGV0IGEgPSAwO2EgPCBhbGxfYmluZHMubGVuZ3RoOyBhKyspe1xyXG4gICAgaWYoYWxsX2JpbmRzW2FdLmlkID09IGJpbmRfaWQpe1xyXG4gICAgICBhbGxfYmluZHMuc3BsaWNlKGEsMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IobGV0IGEgPSAwO2EgPCByZXBlYXRfYmluZHMubGVuZ3RoOyBhKyspe1xyXG4gICAgaWYocmVwZWF0X2JpbmRzW2FdLmJpbmQuaWQgPT0gYmluZF9pZCl7XHJcbiAgICAgIHJlcGVhdF9iaW5kcy5zcGxpY2UoYSwxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBleGVjX3R5cGV7XHJcbiAgb25jZSxcclxuICByZXBlYXRcclxufVxyXG5cclxubGV0IGlkID0gMDtcclxuZXhwb3J0IGZ1bmN0aW9uIEJpbmQoa2V5bmFtZTpzdHJpbmcsZnVuYzpjb250cm9sX2Z1bmMsdHlwZTpleGVjX3R5cGUsaW50ZXJ2YWw6bnVtYmVyLG9iamVjdD86b2JqKTpudW1iZXJ7XHJcbiAgaWYoa2V5bmFtZS5zbGljZSgwLDUpID09PSBcIm1vdXNlXCIpe1xyXG4gICAgbGV0IGI6YmluZCA9IHtcclxuICAgICAga2V5OmtleW5hbWUsXHJcbiAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgIGlkLFxyXG4gICAgICBmdW5jdGlvbjpmdW5jLFxyXG4gICAgICBvYmo6b2JqZWN0LFxyXG4gICAgICBleGVjdXRlOnR5cGUsXHJcbiAgICAgIGV4ZWN1dGVkOmZhbHNlLFxyXG4gICAgICBpbnRlcnZhbFxyXG4gICAgfTtcclxuICAgIGlmKHR5cGUgPT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgIGIucmVwZWF0X3RpbWVyID0ge1xyXG4gICAgICAgIGJpbmQ6YixcclxuICAgICAgICB0aW1lcjowLFxyXG4gICAgICAgIGludGVydmFsLFxyXG4gICAgICAgIGFjdGl2ZTpmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHJlcGVhdF9iaW5kcy5wdXNoKGIucmVwZWF0X3RpbWVyKTtcclxuICAgIH1cclxuICAgIGFsbF9iaW5kcy5wdXNoKGIpO1xyXG5cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGxldCBiOmJpbmQgPSB7XHJcbiAgICAgIGtleTprZXluYW1lLFxyXG4gICAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgICBpZCxcclxuICAgICAgZnVuY3Rpb246ZnVuYyxcclxuICAgICAgZXhlY3V0ZTp0eXBlLFxyXG4gICAgICBleGVjdXRlZDpmYWxzZSxcclxuICAgICAgaW50ZXJ2YWxcclxuICAgIH1cclxuICAgIGlmKHR5cGUgPT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgIGIucmVwZWF0X3RpbWVyID0ge1xyXG4gICAgICAgIGJpbmQ6YixcclxuICAgICAgICB0aW1lcjowLFxyXG4gICAgICAgIGludGVydmFsLFxyXG4gICAgICAgIGFjdGl2ZTpmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHJlcGVhdF9iaW5kcy5wdXNoKGIucmVwZWF0X3RpbWVyKTtcclxuICAgIH1cclxuICAgIGFsbF9iaW5kcy5wdXNoKGIpO1xyXG4gIH1cclxuICBpZCsrO1xyXG4gIHJldHVybiBpZCAtIDE7XHJcbn0iLCJpbXBvcnQgeyBvYmosIHBhcmFtcyB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBvYmpfc3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5sZXQgeyBpcGNSZW5kZXJlciB9ID0gd2luZG93LnJlcXVpcmUoXCJlbGVjdHJvblwiKTtcclxuY29uc3QgcGF0aCA9IHdpbmRvdy5yZXF1aXJlKFwicGF0aFwiKTtcclxubGV0IGZzID0gd2luZG93LnJlcXVpcmUoXCJmc1wiKTtcclxuaW1wb3J0IHsgcHJlZmFicyB9IGZyb20gXCIuLi9nYW1lL29iamVjdHMvcHJlZmFic1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0X3BhdGgsIERFQlVHLCBQQVVTRUQsIHNldFBhdXNlZCwgdmlld3BvcnQgfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7IGcgfSBmcm9tIFwiLi4vZ2FtZS9tYWluXCI7XHJcbmltcG9ydCB7IHJvb21zIGFzIHJvb21fbGlzdCB9IGZyb20gXCIuLi9nYW1lL3Jvb21zL3Jvb21zXCI7XHJcbmltcG9ydCB7IEJpbmQsIGJ0eXBlLCBQb2xsX01vdXNlLCBleGVjX3R5cGUsIGhlbGRfa2V5cywgZGVidWdfYmluZHMgfSBmcm9tIFwiLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IEhVRCwgVGV4dCB9IGZyb20gXCIuLi9saWIvaHVkXCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCIuLi9saWIvcmVuZGVyXCI7XHJcbmltcG9ydCB7IHBvc2l0aW9uLCBkaW1lbnNpb25zLCB2ZWxvY2l0eSB9IGZyb20gXCIuLi9saWIvc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z19odWQgZXh0ZW5kcyBIVUQge1xyXG4gIHNldFRleHRFbGVtZW50cygpIHtcclxuICAgIHJldHVybiBbbmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IDEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDIyLFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgc2NhbGluZzogMVxyXG4gICAgfSwgKCkgPT4gYFg6JHtkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueC50b0ZpeGVkKDApfWApLFxyXG4gICAgbmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IDMyXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDIyLFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgc2NhbGluZzogMVxyXG4gICAgfSwgKCkgPT4gYFk6JHtkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueS50b0ZpeGVkKDApfWApXHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnX3N0YXRlZih0OiBudW1iZXIpIHtcclxuICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSwgZGVidWdfc3RhdGUudGFyZ2V0KTtcclxuICBpZighbW91c2Upe1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmIChkZWJ1Z19zdGF0ZS5jYW1lcmEuaHVkKSB7XHJcbiAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuaHVkLnN0YXRlZih0KTtcclxuICB9XHJcbiAgaWYgKCFQQVVTRUQpIHtcclxuICAgIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKTtcclxuICB9XHJcbiAgaWYgKGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQpIHtcclxuICAgIGlmIChQQVVTRUQgJiYgaGVsZF9rZXlzW1wiQ29udHJvbExlZnRcIl0gJiYgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ucHJvcGVydHkgPT0gXCJzY2FsaW5nXCIpIHtcclxuICAgICAgbGV0IGRpc3QgPSB7XHJcbiAgICAgICAgeDogTWF0aC5hYnMobW91c2UueCAtIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUucG9zaXRpb24ueCksXHJcbiAgICAgICAgeTogTWF0aC5hYnMobW91c2UueSAtIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUucG9zaXRpb24ueSlcclxuICAgICAgfVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlLnNjYWxpbmcud2lkdGggPSAoMiAqIGRpc3QueCkgLyBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LndpZHRoO1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlLnNjYWxpbmcuaGVpZ2h0ID0gKDIgKiBkaXN0LnkpIC8gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbGV0IHN0ID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgICAgc3QucG9zaXRpb24ueCA9IG1vdXNlLnggLSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50X29mZnNldC54LFxyXG4gICAgICAgIHN0LnBvc2l0aW9uLnkgPSBtb3VzZS55IC0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQueVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoUEFVU0VEICYmIGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQpIHtcclxuICAgIGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQuc3RhdGUucm90YXRpb24gPSBkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50LmFuZ2xlVG93YXJkc1BvaW50KG1vdXNlKTtcclxuICB9XHJcbiAgaWYgKGRlYnVnX3N0YXRlLm1pZGRsZV9wb3NpdGlvbikge1xyXG4gICAgbGV0IGRpZmZfeSA9IG1vdXNlLnkgLSBkZWJ1Z19zdGF0ZS5taWRkbGVfcG9zaXRpb24ueTtcclxuICAgIGxldCBkaWZmX3ggPSBtb3VzZS54IC0gZGVidWdfc3RhdGUubWlkZGxlX3Bvc2l0aW9uLng7XHJcbiAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgLTEgKiBkaWZmX3g7XHJcbiAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ICsgLTEgKiBkaWZmX3k7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9yb29tX2xpc3QoKSB7XHJcbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb21fbGlzdFwiKTtcclxuICBsaXN0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgZm9yIChsZXQgcm9vbV9uYW1lIG9mIE9iamVjdC5rZXlzKHJvb21fbGlzdCkpIHtcclxuICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXJhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJvb21fbmFtZSkpO1xyXG4gICAgcGFyYS5jbGFzc0xpc3QuYWRkKFwicm9vbV9saXN0X2l0ZW1cIik7XHJcbiAgICBwYXJhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBnLmxvYWRSb29tU3RyaW5nKHJvb21fbmFtZSk7XHJcbiAgICB9KVxyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChwYXJhKTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBwcm9wZXJ0aWVzX2VsZW1lbnQge1xyXG4gIHBvc194OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHBvc195OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHZlbF94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHZlbF95OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHJvdDogSFRNTElucHV0RWxlbWVudCxcclxuICBzY2FfeDogSFRNTElucHV0RWxlbWVudCxcclxuICBzY2FfeTogSFRNTElucHV0RWxlbWVudCxcclxuICByZW5kZXI6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgY29sbGlzaW9uOiBIVE1MSW5wdXRFbGVtZW50XHJcbn1cclxubGV0IHByb3BlcnRpZXNfZWxlbWVudHM6IHByb3BlcnRpZXNfZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuaWYgKERFQlVHKSB7XHJcbiAgcHJvcGVydGllc19lbGVtZW50cyA9IHtcclxuICAgIHBvc194OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3NfeFwiKSksXHJcbiAgICBwb3NfeTogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zX3lcIikpLFxyXG4gICAgdmVsX3g6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlbF94XCIpKSxcclxuICAgIHZlbF95OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZWxfeVwiKSksXHJcbiAgICByb3Q6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdFwiKSksXHJcbiAgICBzY2FfeDogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhX3hcIikpLFxyXG4gICAgc2NhX3k6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYV95XCIpKSxcclxuICAgIHJlbmRlcjogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuZGVyXCIpKSxcclxuICAgIGNvbGxpc2lvbjogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sbGlzaW9uXCIpKVxyXG4gIH1cclxuXHJcbiAgbGV0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIik7XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBpbnB1dHMubGVuZ3RoOyBhKyspIHtcclxuICAgIGlucHV0c1thXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgKDxIVE1MRWxlbWVudD5pbnB1dHNbYV0pLmZvY3VzKCk7XHJcbiAgICB9KVxyXG4gIH1cclxuICBsZXQgZm9jdXNlZDtcclxuICBsZXQgZGVidWdfdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z190YXJnZXRcIilcclxuICBkZWJ1Z190YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGlucHV0cy5sZW5ndGg7IGErKykge1xyXG4gICAgICBpbnB1dHNbYV0uYmx1cigpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgbGV0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpO1xyXG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgaW5wdXRzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgIGlucHV0c1thXS5ibHVyKCk7XHJcbiAgICB9XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnBvc194LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG5cclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBsZXQgbmV3X3ZhbCA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy5wb3NfeC52YWx1ZSkgfHwgMDtcclxuICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBcInBvc2l0aW9uXCIsXHJcbiAgICAgIGVsZW1lbnQ6IGVsZSxcclxuICAgICAgbmV3OiBKU09OLnN0cmluZ2lmeSh7IHg6IG5ld192YWwsIHk6IGVsZS5zdGF0ZS5wb3NpdGlvbi55IH0pLFxyXG4gICAgICBvbGQ6IEpTT04uc3RyaW5naWZ5KGVsZS5zdGF0ZS5wb3NpdGlvbilcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUucG9zaXRpb24ueCA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnBvc195LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGxldCBuZXdfdmFsID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnBvc195LnZhbHVlKSB8fCAwO1xyXG4gICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IFwicG9zaXRpb25cIixcclxuICAgICAgZWxlbWVudDogZWxlLFxyXG4gICAgICBuZXc6IEpTT04uc3RyaW5naWZ5KHsgeDogZWxlLnN0YXRlLnBvc2l0aW9uLngsIHk6IG5ld192YWwgfSksXHJcbiAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoZWxlLnN0YXRlLnBvc2l0aW9uKVxyXG4gICAgfSlcclxuICAgIGVsZS5zdGF0ZS5wb3NpdGlvbi55ID0gbmV3X3ZhbDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3guYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLnN0YXRlLnZlbG9jaXR5LnggPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3gudmFsdWUpIHx8IDA7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF95LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5zdGF0ZS52ZWxvY2l0eS55ID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF95LnZhbHVlKSB8fCAwO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5yb3QuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMucm90LnZhbHVlKSB8fCAwO1xyXG4gICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IFwicm90YXRpb25cIixcclxuICAgICAgZWxlbWVudDogZWxlLFxyXG4gICAgICBuZXc6IEpTT04uc3RyaW5naWZ5KG5ld192YWwpLFxyXG4gICAgICBvbGQ6IEpTT04uc3RyaW5naWZ5KGVsZS5zdGF0ZS5yb3RhdGlvbilcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUucm90YXRpb24gPSBuZXdfdmFsO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5zY2FfeC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBsZXQgbmV3X3ZhbCA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy5zY2FfeC52YWx1ZSkgfHwgMDtcclxuICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBcInNjYWxpbmdcIixcclxuICAgICAgZWxlbWVudDogZWxlLFxyXG4gICAgICBuZXc6IEpTT04uc3RyaW5naWZ5KHsgd2lkdGg6IG5ld192YWwsIGhlaWdodDogZWxlLnN0YXRlLnNjYWxpbmcuaGVpZ2h0IH0pLFxyXG4gICAgICBvbGQ6IEpTT04uc3RyaW5naWZ5KGVsZS5zdGF0ZS5zY2FsaW5nKVxyXG4gICAgfSlcclxuICAgIGVsZS5zdGF0ZS5zY2FsaW5nLndpZHRoID0gbmV3X3ZhbDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3kuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3kudmFsdWUpIHx8IDA7XHJcbiAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogXCJzY2FsaW5nXCIsXHJcbiAgICAgIGVsZW1lbnQ6IGVsZSxcclxuICAgICAgbmV3OiBKU09OLnN0cmluZ2lmeSh7IHdpZHRoOiBlbGUuc3RhdGUuc2NhbGluZy53aWR0aCwgaGVpZ2h0OiBuZXdfdmFsIH0pLFxyXG4gICAgICBvbGQ6IEpTT04uc3RyaW5naWZ5KGVsZS5zdGF0ZS5zY2FsaW5nKVxyXG4gICAgfSlcclxuICAgIGVsZS5zdGF0ZS5zY2FsaW5nLmhlaWdodCA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnJlbmRlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUucmVuZGVyID0gcHJvcGVydGllc19lbGVtZW50cy5yZW5kZXIuY2hlY2tlZDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMuY29sbGlzaW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5jb2xsaXNpb24gPSBwcm9wZXJ0aWVzX2VsZW1lbnRzLmNvbGxpc2lvbi5jaGVja2VkO1xyXG4gIH0pXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVfZWxlbWVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUuZGVsZXRlKCk7XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKSB7XHJcbiAgaWYgKGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudCkge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqX25hbWVcIikuaW5uZXJIVE1MID0gZWxlLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnBvc194LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS5wb3NpdGlvbi54LnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnBvc195LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS5wb3NpdGlvbi55LnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF94LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS52ZWxvY2l0eS54LnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF95LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS52ZWxvY2l0eS55LnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnJvdC52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUucm90YXRpb24udG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3gudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnNjYWxpbmcud2lkdGgudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3kudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnNjYWxpbmcuaGVpZ2h0LnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnJlbmRlci5jaGVja2VkID0gZWxlLnJlbmRlcjtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMuY29sbGlzaW9uLmNoZWNrZWQgPSBlbGUuY29sbGlzaW9uO1xyXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhcmFtc19saXN0XCIpO1xyXG4gICAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgZm9yIChsZXQgayBvZiBPYmplY3Qua2V5cyhlbGUucGFyYW1zKSkge1xyXG5cclxuICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgc3Bhbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrKSk7XHJcbiAgICAgIGxldCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgaWYgKHR5cGVvZiAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZW9mICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0eXBlb2YgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBrKVxyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSArIFwiXCIpO1xyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICB9KVxyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgICAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgICAgIGxldCB2YWw6IHN0cmluZyA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmICghaXNOYU4odmFsIGFzIHVua25vd24gYXMgbnVtYmVyKSkge1xyXG4gICAgICAgICAgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPSBwYXJzZUZsb2F0KHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbCA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWwgPT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgICAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgcC5hcHBlbmQoaW5wdXQpO1xyXG4gICAgICBsaXN0LmFwcGVuZChwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdfdXBkYXRlX29ial9saXN0KCkge1xyXG4gIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmplY3RzX2xpc3RcIik7XHJcbiAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGlmIChnLmdldFJvb20oKSkge1xyXG4gICAgZm9yIChsZXQgb2JqIG9mIGcuZ2V0Um9vbSgpLm9iamVjdHMpIHtcclxuICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgcGFyYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvYmouY29uc3RydWN0b3IubmFtZSkpO1xyXG4gICAgICBwYXJhLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RfbGlzdF9pdGVtXCIpO1xyXG4gICAgICBwYXJhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQgPT0gPG9iaj5vYmopIHtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sICg8b2JqPm9iaikuc3RhdGUucG9zaXRpb24pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50ID0gPG9iaj5vYmo7XHJcbiAgICAgICAgICBkZWJ1Z191cGRhdGVfcHJvcGVydGllc19lbGVtZW50KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVidWdfdXBkYXRlX3ByZWZhYnMoKSB7XHJcbiAgbGV0IHByZXMgPSBPYmplY3Qua2V5cyhwcmVmYWJzKS5tYXAoYXN5bmMgKG86IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IGEgPSA8b2JqPihuZXcgcHJlZmFic1tvXSh7XHJcbiAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgdmVsb2NpdHk6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICByb3RhdGlvbjogMCxcclxuICAgICAgc2NhbGluZzogeyB3aWR0aDogMSwgaGVpZ2h0OiAxIH1cclxuICAgIH0pKTtcclxuICAgIGF3YWl0IGEubG9hZCgpO1xyXG4gICAgYS5yZW5kZXIgPSB0cnVlO1xyXG4gICAgbGV0IG9ianMgPSBhLmNvbWJpbmVkT2JqZWN0cygpO1xyXG4gICAgZm9yIChsZXQgb2JqIG9mIG9ianMpIHtcclxuICAgICAgb2JqLlVuYmluZEFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmaWx0ZXJlZCA9IG9ianMuZmlsdGVyKChhKSA9PiBhLnJlbmRlcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcmVmYWI6IHByZWZhYnNbb10sXHJcbiAgICAgIG5hbWU6IGEuY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgcmVuZGVyZWQ6IGZpbHRlcmVkLm1hcCgobykgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBuYW1lOiBvLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgICAgICByZW5kZXI6IG8ucmVuZGVyZigwKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gIH0pXHJcbiAgbGV0IGEgPSBhd2FpdCBQcm9taXNlLmFsbChwcmVzKTtcclxuXHJcbiAgbGV0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlZmFiX3RhcmdldFwiKTtcclxuICB0YXJnZXQudGV4dENvbnRlbnQgPSAnJztcclxuICBmb3IgKGxldCBwcmVmYWIgb2YgYSkge1xyXG5cclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBhcmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocHJlZmFiLm5hbWUpKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChwYXJhKTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHByZWZhYi5yZW5kZXJlZFswXS5yZW5kZXIpKSB7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgZGl2LmFwcGVuZChwcmVmYWIucmVuZGVyZWRbMF0ucmVuZGVyLnNwcml0ZS5zcHJpdGVfc2hlZXQpO1xyXG4gICAgfVxyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwcmVmYWJfYm94XCIpO1xyXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgdmFsID0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiB7IHg6IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54LCB5OiBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSB9LFxyXG4gICAgICAgIHZlbG9jaXR5OiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICByb3RhdGlvbjogMCxcclxuICAgICAgICBzY2FsaW5nOiB7IHdpZHRoOiAxLCBoZWlnaHQ6IDEgfVxyXG4gICAgICB9O1xyXG4gICAgICBsZXQgb2JqID0gPG9iaj4obmV3IHByZWZhYi5wcmVmYWIodmFsKSk7XHJcbiAgICAgIGF3YWl0IGcuc3RhdGUuY3VycmVudF9yb29tLmFkZEl0ZW1zKG9iai5jb21iaW5lZE9iamVjdHMoKSk7XHJcbiAgICB9KTtcclxuICAgIHRhcmdldC5hcHBlbmQoZGl2KTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBkZWJ1Z19hY3Rpb24ge1xyXG4gIHByb3BlcnR5OiBzdHJpbmcsXHJcbiAgb2xkOiBzdHJpbmcsXHJcbiAgbmV3OiBzdHJpbmcsXHJcbiAgZWxlbWVudDogb2JqXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZGVidWdfdmFycyB7XHJcbiAgdGFyZ2V0OiBIVE1MQ2FudmFzRWxlbWVudCxcclxuICBjYW1lcmE6IENhbWVyYSxcclxuICBsYXN0X2NsaWNrZWQ6IEhUTUxFbGVtZW50LFxyXG4gIHNlbGVjdGVkX2VsZW1lbnRfaW5pdGlhbF9zY2FsaW5nOiBkaW1lbnNpb25zLFxyXG4gIHNlbGVjdGVkX2VsZW1lbnQ6IG9iaixcclxuICBzZWxlY3RlZF9lbGVtZW50X29mZnNldDogcG9zaXRpb24sXHJcbiAgcm90YXRpb25fZWxlbWVudDogb2JqLFxyXG4gIHNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDogb2JqLFxyXG4gIG1pZGRsZV9wb3NpdGlvbjogcG9zaXRpb24sXHJcbiAgY2xpY2tfcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gIGFjdGlvbnNfc3RhY2s6IGRlYnVnX2FjdGlvbltdLFxyXG4gIGN1cnJlbnRfYWN0aW9uOiBkZWJ1Z19hY3Rpb25cclxufVxyXG5cclxuZXhwb3J0IGxldCBkZWJ1Z19zdGF0ZTogZGVidWdfdmFycztcclxuXHJcbmV4cG9ydCBsZXQgZGVidWdfc2V0dXAgPSAoKSA9PiB7XHJcbiAgZGVidWdfc3RhdGUgPSB7XHJcbiAgICB0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWdfdGFyZ2V0XCIpIGFzIEhUTUxDYW52YXNFbGVtZW50LFxyXG4gICAgY2FtZXJhOiBuZXcgQ2FtZXJhKHtcclxuICAgICAgeDogMCxcclxuICAgICAgeTogMCxcclxuICAgICAgZGltZW5zaW9uczoge1xyXG4gICAgICAgIGhlaWdodDogdmlld3BvcnQuaGVpZ2h0LFxyXG4gICAgICAgIHdpZHRoOiB2aWV3cG9ydC53aWR0aFxyXG4gICAgICB9LFxyXG4gICAgICBzY2FsaW5nOiAxLFxyXG4gICAgICBkZWJ1ZzogdHJ1ZVxyXG4gICAgfVxyXG4gICAgICAsIHtcclxuICAgICAgICB4OiAxLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgIH0pLFxyXG4gICAgbGFzdF9jbGlja2VkOiB1bmRlZmluZWQsXHJcbiAgICBzZWxlY3RlZF9lbGVtZW50OiB1bmRlZmluZWQsXHJcbiAgICBzZWxlY3RlZF9lbGVtZW50X29mZnNldDogdW5kZWZpbmVkLFxyXG4gICAgcm90YXRpb25fZWxlbWVudDogdW5kZWZpbmVkLFxyXG4gICAgbWlkZGxlX3Bvc2l0aW9uOiB1bmRlZmluZWQsXHJcbiAgICBjbGlja19wb3NpdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50OiB1bmRlZmluZWQsXHJcbiAgICBzZWxlY3RlZF9lbGVtZW50X2luaXRpYWxfc2NhbGluZzogeyB3aWR0aDogMSwgaGVpZ2h0OiAxIH0sXHJcbiAgICBhY3Rpb25zX3N0YWNrOiBbXSxcclxuICAgIGN1cnJlbnRfYWN0aW9uOiB1bmRlZmluZWRcclxuICB9XHJcbiAgZGVidWdfc3RhdGUuY2FtZXJhLmh1ZCA9IG5ldyBEZWJ1Z19odWQoKTtcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJtb3VzZTBkb3duXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiAwLFxyXG4gICAgZnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgaWYgKGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQpIHtcclxuICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSwgZGVidWdfc3RhdGUudGFyZ2V0KTtcclxuICAgICAgICBpZighbW91c2Upe1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlYnVnX3N0YXRlLmNsaWNrX3Bvc2l0aW9uID0gbW91c2U7XHJcbiAgICAgICAgbGV0IGFsTF9jbGlja2VkID0gZy5nZXRSb29tKCkuY2hlY2tPYmplY3RzKHtcclxuICAgICAgICAgIHg6IG1vdXNlLngsXHJcbiAgICAgICAgICB5OiBtb3VzZS55LFxyXG4gICAgICAgICAgaGVpZ2h0OiAxLFxyXG4gICAgICAgICAgd2lkdGg6IDFcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBjbGlja2VkO1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZCA9IGFsTF9jbGlja2VkLmZpbHRlcigoZWxlKSA9PiBlbGUgPT0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50KVxyXG4gICAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjbGlja2VkID0gZmlsdGVyZWRbMF1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjbGlja2VkID0gYWxMX2NsaWNrZWRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjbGlja2VkKSB7XHJcbiAgICAgICAgICBpZiAoaGVsZF9rZXlzW1wiQ29udHJvbExlZnRcIl0pIHtcclxuICAgICAgICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudDogY2xpY2tlZCxcclxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJzY2FsaW5nXCIsXHJcbiAgICAgICAgICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShjbGlja2VkLnN0YXRlLnNjYWxpbmcpLFxyXG4gICAgICAgICAgICAgIG5ldzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbiA9IHtcclxuICAgICAgICAgICAgICBlbGVtZW50OiBjbGlja2VkLFxyXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcInBvc2l0aW9uXCIsXHJcbiAgICAgICAgICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeSgoPG9ial9zdGF0ZT5jbGlja2VkLnN0YXRlKS5wb3NpdGlvbiksXHJcbiAgICAgICAgICAgICAgbmV3OiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50ID0gY2xpY2tlZDtcclxuICAgICAgICAgIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKVxyXG4gICAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCA9IGNsaWNrZWQ7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50X2luaXRpYWxfc2NhbGluZyA9IGNsaWNrZWQuc3RhdGUuc2NhbGluZztcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0ID0ge1xyXG4gICAgICAgICAgICB4OiBtb3VzZS54IC0gKDxvYmpfc3RhdGU+Y2xpY2tlZC5zdGF0ZSkucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgeTogbW91c2UueSAtICg8b2JqX3N0YXRlPmNsaWNrZWQuc3RhdGUpLnBvc2l0aW9uLnlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTogZGVidWdfc3RhdGUuY2FtZXJhXHJcbiAgfSk7XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwibW91c2UxdXBcIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDUsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5taWRkbGVfcG9zaXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2UsXHJcbiAgICBjYW1lcmE6IGRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIm1vdXNlMWRvd25cIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDYsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSwgZGVidWdfc3RhdGUudGFyZ2V0KTtcclxuICAgICAgaWYoIW1vdXNlKXtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5taWRkbGVfcG9zaXRpb24gPSBtb3VzZTtcclxuICAgIH0sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTogZGVidWdfc3RhdGUuY2FtZXJhXHJcbiAgfSk7XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwibW91c2UwdXBcIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDEsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBpZiAoZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5wcm9wZXJ0eSA9PSBcInNjYWxpbmdcIikge1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ubmV3ID0gSlNPTi5zdHJpbmdpZnkoZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5zY2FsaW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5wcm9wZXJ0eSA9PSBcInBvc2l0aW9uXCIpIHtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uLm5ldyA9IEpTT04uc3RyaW5naWZ5KCg8b2JqX3N0YXRlPmRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUpLnBvc2l0aW9uKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpXHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2UsXHJcbiAgICBjYW1lcmE6IGRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIm1vdXNlMmRvd25cIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDMsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBpZiAoZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCkge1xyXG4gICAgICAgIGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZGVidWdfc3RhdGUuY2FtZXJhLCBkZWJ1Z19zdGF0ZS50YXJnZXQpO1xyXG4gICAgICAgIGlmKCFtb3VzZSl7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNsaWNrZWQgPSBnLmdldFJvb20oKS5jaGVja09iamVjdHMoe1xyXG4gICAgICAgICAgeDogbW91c2UueCxcclxuICAgICAgICAgIHk6IG1vdXNlLnksXHJcbiAgICAgICAgICBoZWlnaHQ6IDEsXHJcbiAgICAgICAgICB3aWR0aDogMVxyXG4gICAgICAgIH0pWzBdXHJcbiAgICAgICAgaWYgKGNsaWNrZWQpIHtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQgPSBjbGlja2VkO1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQsXHJcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInJvdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudC5zdGF0ZS5yb3RhdGlvbiksXHJcbiAgICAgICAgICAgIG5ldzogdW5kZWZpbmVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2UsXHJcbiAgICBjYW1lcmE6IGRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIm1vdXNlMnVwXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiA0LFxyXG4gICAgZnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ubmV3ID0gSlNPTi5zdHJpbmdpZnkoZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudC5zdGF0ZS5yb3RhdGlvbilcclxuICAgICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uKTtcclxuICAgICAgZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTogZGVidWdfc3RhdGUuY2FtZXJhXHJcbiAgfSk7XHJcblxyXG4gIGxldCBsZWZ0X2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDEgOiAwO1xyXG4gICAgaWYgKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54IC0gKCg1ICsgc2hpZnRfaGVsZCAqIDUpICogKDEgLyBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIH07XHJcbiAgbGV0IHJpZ2h0X2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDEgOiAwO1xyXG4gICAgaWYgKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgKCg1ICsgc2hpZnRfaGVsZCAqIDUpICogKDEgLyBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIH07XHJcbiAgbGV0IGRvd25fZnVuYyA9ICgpID0+IHtcclxuICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMSA6IDA7XHJcblxyXG4gICAgaWYgKCFoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIilcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSAtICgoNSArIHNoaWZ0X2hlbGQgKiA1KSAqICgxIC8gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICB9O1xyXG4gIGxldCB1cF9mdW5jID0gKCkgPT4ge1xyXG4gICAgbGV0IHNoaWZ0X2hlbGQgPSBoZWxkX2tleXNbXCJTaGlmdExlZnRcIl0gPyAxIDogMDtcclxuICAgIGlmIChkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIilcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSArICgoNSArIHNoaWZ0X2hlbGQgKiA1KSAqICgxIC8gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICB9O1xyXG4gIGxldCBzY3JvbGxfdXAgPSAoKSA9PiB7XHJcbiAgICBpZiAoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyAwLjA1O1xyXG4gIH1cclxuICBsZXQgc2F2ZV9mdW5jID0gKCkgPT4ge1xyXG4gICAgbGV0IGN0cmxfaGVsZCA9IGhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdO1xyXG4gICAgaWYgKGN0cmxfaGVsZCAmJiBQQVVTRUQpIHtcclxuICAgICAgbGV0IG5hbWUgPSBnLmdldFJvb20oKS5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICBsZXQgYSA9IHBhdGguam9pbihgJHtwcm9qZWN0X3BhdGh9YCwgYC4uL3Jvb21zLyR7bmFtZX0uanNvbmApO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoYSwgSlNPTi5zdHJpbmdpZnkoZy5nZXRSb29tKCkuZXhwb3J0U3RhdGVDb25maWcoKSkpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBXUklUSU5HIFJPT00gSU5GTyBGSUxFLlwiKTtcclxuICAgICAgfVxyXG4gICAgICBhbGVydChcIlNhdmVkXCIpO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGN0cmxfaGVsZCAmJiAhUEFVU0VEKSB7XHJcbiAgICAgIGFsZXJ0KFwicGF1c2UgdG8gZW5hYmxlIHNhdmluZy5cIilcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHNjcm9sbF9kb3duID0gKCkgPT4ge1xyXG4gICAgaWYgKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiICYmIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nID4gMC4wNSlcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyAtIDAuMDU7XHJcbiAgfVxyXG4gIGxldCB1bmRvX2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBpZiAoaGVsZF9rZXlzW1wiQ29udHJvbExlZnRcIl0pIHtcclxuICAgICAgbGV0IGN1cnI6IGRlYnVnX2FjdGlvbiA9IGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucG9wKCk7XHJcbiAgICAgIGlmIChjdXJyKSB7XHJcbiAgICAgICAgaWYgKGN1cnIucHJvcGVydHkgPT0gXCJwb3NpdGlvblwiKSB7XHJcbiAgICAgICAgICBjdXJyLmVsZW1lbnQuc3RhdGUucG9zaXRpb24gPSBKU09OLnBhcnNlKGN1cnIub2xkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY3Vyci5wcm9wZXJ0eSA9PT0gXCJyb3RhdGlvblwiKSB7XHJcbiAgICAgICAgICBjdXJyLmVsZW1lbnQuc3RhdGUucm90YXRpb24gPSBKU09OLnBhcnNlKGN1cnIub2xkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY3Vyci5wcm9wZXJ0eSA9PT0gXCJzY2FsaW5nXCIpIHtcclxuICAgICAgICAgIGN1cnIuZWxlbWVudC5zdGF0ZS5zY2FsaW5nID0gSlNPTi5wYXJzZShjdXJyLm9sZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleUFcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlBXCIsIGxlZnRfZnVuYywgZXhlY190eXBlLnJlcGVhdCwgMSksXHJcbiAgICBmdW5jdGlvbjogbGVmdF9mdW5jLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLnJlcGVhdFxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwiS2V5RFwiLFxyXG4gICAgdHlwZTogYnR5cGUua2V5Ym9hcmQsXHJcbiAgICBpZDogQmluZChcIktleURcIiwgcmlnaHRfZnVuYywgZXhlY190eXBlLnJlcGVhdCwgMSksXHJcbiAgICBmdW5jdGlvbjogcmlnaHRfZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5yZXBlYXRcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleVdcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlXXCIsIHVwX2Z1bmMsIGV4ZWNfdHlwZS5yZXBlYXQsIDEpLFxyXG4gICAgZnVuY3Rpb246IHVwX2Z1bmMsXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUucmVwZWF0XHJcbiAgfSlcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJLZXlTXCIsXHJcbiAgICB0eXBlOiBidHlwZS5rZXlib2FyZCxcclxuICAgIGlkOiBCaW5kKFwiS2V5U1wiLCBkb3duX2Z1bmMsIGV4ZWNfdHlwZS5yZXBlYXQsIDEpLFxyXG4gICAgZnVuY3Rpb246IGRvd25fZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5yZXBlYXRcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcInNjcm9sbHVwXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiBCaW5kKFwic2Nyb2xsdXBcIiwgc2Nyb2xsX3VwLCBleGVjX3R5cGUub25jZSwgMSksXHJcbiAgICBmdW5jdGlvbjogc2Nyb2xsX3VwLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2VcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcInNjcm9sbGRvd25cIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IEJpbmQoXCJzY3JvbGxkb3duXCIsIHNjcm9sbF9kb3duLCBleGVjX3R5cGUub25jZSwgMSksXHJcbiAgICBmdW5jdGlvbjogc2Nyb2xsX2Rvd24sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZVxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwiS2V5U1wiLFxyXG4gICAgdHlwZTogYnR5cGUua2V5Ym9hcmQsXHJcbiAgICBpZDogQmluZChcIktleVNcIiwgc2F2ZV9mdW5jLCBleGVjX3R5cGUub25jZSwgMSksXHJcbiAgICBmdW5jdGlvbjogc2F2ZV9mdW5jLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2VcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleVpcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlaXCIsIHVuZG9fZnVuYywgZXhlY190eXBlLm9uY2UsIDEpLFxyXG4gICAgZnVuY3Rpb246IHVuZG9fZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlXHJcbiAgfSlcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgPSBlLnRhcmdldDtcclxuICAgIH1cclxuICB9KVxyXG4gIGxldCBwYXVzZV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlX2J1dHRvblwiKVxyXG4gIHBhdXNlX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIHNldFBhdXNlZCghUEFVU0VEKTtcclxuICAgIGlmIChQQVVTRUQpIHtcclxuICAgICAgcGF1c2VfYnV0dG9uLmlubmVySFRNTCA9IFwiVU5QQVVTRVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHBhdXNlX2J1dHRvbi5pbm5lckhUTUwgPSBcIlBBVVNFXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgbGV0IG9ial9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19vYmplY3RfYnV0dG9uXCIpO1xyXG4gIGxldCByb29tX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Jvb21fYnV0dG9uXCIpO1xyXG4gIHJvb21fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGZpbGVfcGF0aCA9IGlwY1JlbmRlcmVyLnNlbmRTeW5jKCdvYmplY3QtcGF0aC1yZXF1ZXN0JywgXCJyb29tc1wiKTtcclxuICAgIGlmIChmaWxlX3BhdGgpIHtcclxuICAgICAgbGV0IGZ1bGxfbmFtZSA9IHBhdGgucGFyc2UoZmlsZV9wYXRoKS5iYXNlO1xyXG4gICAgICBsZXQgbmV3X25hbWUgPSBmdWxsX25hbWUuc3Vic3RyKDAsIGZ1bGxfbmFtZS5sZW5ndGggLSAzKTtcclxuICAgICAgbGV0IHBhdGhfdG9fd3JpdGUgPSBwYXRoLmpvaW4oYCR7ZmlsZV9wYXRofWAsIFwiLi5cIiwgbmV3X25hbWUgKyBcIi50c1wiKTtcclxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoX3RvX3dyaXRlLCBgXHJcbiAgICBcclxuICAgIGltcG9ydCB7cm9vbX0gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XHJcbiAgICBpbXBvcnQge2dhbWV9IGZyb20gXCIuLi8uLi92YW5cIjtcclxuICAgIGltcG9ydCB7c3RhdGVfY29uZmlnfSBmcm9tIFwiLi4vLi4vbGliL3Jvb21cIjtcclxuICAgIGltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi8ke25ld19uYW1lfS5qc29uXCI7XHJcbiAgICBsZXQgY2ZpZyA9IGNvbmZpZyBhcyB1bmtub3duIGFzIHN0YXRlX2NvbmZpZztcclxuICAgIGludGVyZmFjZSAke25ld19uYW1lfV9zdGF0ZXtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyAke25ld19uYW1lfSBleHRlbmRzIHJvb208JHtuZXdfbmFtZX1fc3RhdGU+e1xyXG4gICAgICBiYWNrZ3JvdW5kX3VybD1cIi4vc3ByaXRlcy9FcnJvci5wbmdcIjtcclxuICAgICAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+KXtcclxuICAgICAgICBzdXBlcihnYW1lLGNmaWcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdGVyQ29udHJvbHMoKXtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdGVyUGFydGljbGVzKCl7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZWYoZGVsdGFfdGltZTpudW1iZXIpe1xyXG4gICAgICAgIHN1cGVyLnN0YXRlZihkZWx0YV90aW1lKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGApXHJcblxyXG4gICAgICBwYXRoX3RvX3dyaXRlID0gcGF0aC5qb2luKGAke2ZpbGVfcGF0aH1gLCBcIi4uXCIsIG5ld19uYW1lICsgXCIuanNvblwiKTtcclxuXHJcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aF90b193cml0ZSwgYFxyXG4gICAge1xyXG4gICAgICBcIm9iamVjdHNcIjpbXVxyXG4gICAgfVxyXG4gICAgYClcclxuICAgIH1cclxuICB9KVxyXG4gIG9ial9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZmlsZV9wYXRoID0gaXBjUmVuZGVyZXIuc2VuZFN5bmMoJ29iamVjdC1wYXRoLXJlcXVlc3QnLCBcIm9iamVjdHNcIik7XHJcbiAgICBpZiAoZmlsZV9wYXRoKSB7XHJcbiAgICAgIGxldCBmdWxsX25hbWUgPSBwYXRoLnBhcnNlKGZpbGVfcGF0aCkuYmFzZTtcclxuICAgICAgbGV0IG5ld19uYW1lID0gZnVsbF9uYW1lLnN1YnN0cigwLCBmdWxsX25hbWUubGVuZ3RoIC0gMyk7XHJcbiAgICAgIGxldCBwYXRoX3RvX3dyaXRlID0gcGF0aC5qb2luKGAke2ZpbGVfcGF0aH1gLCBcIi4uXCIsIG5ld19uYW1lICsgXCIudHNcIik7XHJcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aF90b193cml0ZSwgYFxyXG5pbXBvcnQge29ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgb2JqX3N0YXRlLCBwb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuXHJcbmludGVyZmFjZSAke25ld19uYW1lfV9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcclxuICAgIFxyXG59XHJcbiAgICBcclxuaW50ZXJmYWNlICR7bmV3X25hbWV9X3BhcmFtZXRlcnN7XHJcbiAgICBcclxufVxyXG4gICAgXHJcbmV4cG9ydCBjbGFzcyAke25ld19uYW1lfSBleHRlbmRzIG9iantcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvRXJyb3IucG5nXCI7XHJcbiAgaGVpZ2h0ID0gMTAwO1xyXG4gIHdpZHRoID0gMTAwO1xyXG4gIHRhZ3M6QXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIGNvbGxpc2lvbiA9IHRydWU7XHJcbiAgcmVuZGVyID0gdHJ1ZTtcclxuICByb3RhdGlvbiA9IDA7XHJcbiAgc2NhbGluZyA9IDE7XHJcbiAgcGFyYW1zOiR7bmV3X25hbWV9X3BhcmFtZXRlcnM7XHJcbiAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOiR7bmV3X25hbWV9X3BhcmFtZXRlcnMgPSB7fVxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6JHtuZXdfbmFtZX1fcGFyYW1ldGVycyA9ICR7bmV3X25hbWV9LmRlZmF1bHRfcGFyYW1zKXtcclxuICAgIHN1cGVyKHN0YXRlLHBhcmFtcyk7XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lX2RlbHRhOm51bWJlcil7XHJcbiAgICBcclxuICB9XHJcbiAgcmVuZGVyZih0aW1lX2RlbHRhOm51bWJlcil7XHJcbiAgIHJldHVybiBzdXBlci5yZW5kZXJmKHRpbWVfZGVsdGEpOyBcclxuICB9XHJcbiAgcmVnaXN0ZXJfYW5pbWF0aW9ucygpe1xyXG4gICAgXHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2F1ZGlvKCl7XHJcbiAgICBcclxuICB9XHJcbiAgcmVnaXN0ZXJfY29udHJvbHMoKXtcclxuICAgICAgICBcclxuICB9XHJcbn1cclxuICAgIGApXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbn0iLCJpbXBvcnQge29ian0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IEdvb21iYSB9IGZyb20gXCIuLi9nYW1lL29iamVjdHMvR29vbWJhXCI7XHJcblxyXG5pbnRlcmZhY2UgSHVkVGV4dEdldEZ1bmN7XHJcbiAgKCk6c3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFNldHRpbmd7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgZm9udDpGb250XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9udHtcclxuICBtYXhfd2lkdGg/Om51bWJlcixcclxuICBzaXplOm51bWJlcixcclxuICBmb250OnN0cmluZyxcclxuICBjb2xvcjpzdHJpbmcsXHJcbiAgdGV4dDpzdHJpbmcsXHJcbiAgYWxpZ246Q2FudmFzVGV4dEFsaWduXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dF9Ob2Rle1xyXG4gIG1heF93aWR0aD86bnVtYmVyLFxyXG4gIHBvc2l0aW9uOntcclxuICAgIHg6bnVtYmVyLFxyXG4gICAgeTpudW1iZXJcclxuICB9XHJcbiAgc2l6ZTpudW1iZXI7XHJcbiAgc2NhbGluZzpudW1iZXI7XHJcbiAgZm9udDpzdHJpbmc7XHJcbiAgY29sb3I6c3RyaW5nO1xyXG4gIHRleHQ/OnN0cmluZztcclxuICBhbGlnbj86Q2FudmFzVGV4dEFsaWduO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBIVUR7XHJcbiAgZ3JhcGhpY19lbGVtZW50czpvYmpbXSA9IFtdO1xyXG4gIHRleHRfZWxlbWVudHM6QXJyYXk8VGV4dD4gPSBbXTtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy50ZXh0X2VsZW1lbnRzLnB1c2goLi4udGhpcy5zZXRUZXh0RWxlbWVudHMoKSk7XHJcbiAgICB0aGlzLmdyYXBoaWNfZWxlbWVudHMucHVzaCguLi50aGlzLnNldEdyYXBoaWNFbGVtZW50cygpKTsgXHJcbiAgfVxyXG4gIHN0YXRlZihhOm51bWJlcil7XHJcbiAgICBmb3IobGV0IHggb2YgdGhpcy5ncmFwaGljX2VsZW1lbnRzKXtcclxuICAgICAgeC5zdGF0ZWYoYSk7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IHggb2YgdGhpcy50ZXh0X2VsZW1lbnRzKXtcclxuICAgICAgeC5zdGF0ZWYoYSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldFRleHRFbGVtZW50cygpOlRleHRbXXtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgc2V0R3JhcGhpY0VsZW1lbnRzKCk6b2JqW117XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHtcclxuICBnZXRGdW5jOkh1ZFRleHRHZXRGdW5jO1xyXG4gIHN0YXRlOlRleHRfTm9kZTtcclxuICBjb25zdHJ1Y3Rvcihub2RlOlRleHRfTm9kZSxnZXRGdW5jOkh1ZFRleHRHZXRGdW5jKXtcclxuICAgIGlmKCFub2RlLmFsaWduKXtcclxuICAgICAgbm9kZS5hbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0gbm9kZTtcclxuICAgIGlmKCF0aGlzLnN0YXRlLnRleHQpe1xyXG4gICAgICB0aGlzLnN0YXRlLnRleHQgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRGdW5jID0gZ2V0RnVuYztcclxuICB9XHJcbiAgc3RhdGVmKGE6bnVtYmVyKXtcclxuICAgdGhpcy5zdGF0ZS50ZXh0ID0gdGhpcy5nZXRGdW5jKCk7XHJcbiAgfVxyXG4gIHJlbmRlcmYoYTpudW1iZXIpOkZvbnR7XHJcbiAgICBsZXQge3NpemUsY29sb3IsZm9udCx0ZXh0LG1heF93aWR0aCxhbGlnbn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2l6ZSxcclxuICAgICAgY29sb3IsXHJcbiAgICAgIGZvbnQsXHJcbiAgICAgIHRleHQsXHJcbiAgICAgIG1heF93aWR0aCxcclxuICAgICAgYWxpZ25cclxuICAgIH07XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtwb3NpdGlvbn0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEaXN0YW5jZShhOnBvc2l0aW9uLGI6cG9zaXRpb24pe1xyXG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYS54IC0gYi54LDIpICsgTWF0aC5wb3coYS55IC0gYi55LDIpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRJbnQobWluOm51bWJlciwgbWF4Om51bWJlcikge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSApICsgbWluO1xyXG59IiwiaW1wb3J0IHsgc3RhdGVfZnVuYywgb2JqX3N0YXRlLCBwb3NpdGlvbiwgZGltZW5zaW9ucyB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IHJlbmRlcl9mdW5jLCByZW5kZXJfdHlwZSB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSwgcG9zaXRpb25lZF9zcHJpdGUsIHNwcml0ZSwgc3ByaXRlX2dlbiB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4vY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IFVuYmluZCwgQmluZCwgY29udHJvbF9mdW5jLCBleGVjX3R5cGUgfSBmcm9tIFwiLi9jb250cm9sc1wiO1xyXG5pbXBvcnQge2F1ZGlvfSBmcm9tIFwiLi9hdWRpb1wiO1xyXG5pbXBvcnQge2RlZXAsIGdhbWV9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgRGlzdGFuY2UgfSBmcm9tIFwiLi9tYXRoXCI7XHJcblxyXG5pbnRlcmZhY2Ugb2JqX2k8VD4ge1xyXG4gIHN0YXRlZjogc3RhdGVfZnVuYzxUPixcclxuICByZW5kZXJmOiByZW5kZXJfZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWQoYTogb2JqW10sIGlkOiBzdHJpbmcpOiBvYmoge1xyXG4gIGZvciAobGV0IGIgPSAwOyBiIDwgYS5sZW5ndGg7IGIrKykge1xyXG4gICAgaWYgKGFbYl0uaWQgPT0gaWQpIHtcclxuICAgICAgcmV0dXJuIGFbYl07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8vRmluZHMgdGhlIHNpZGUgbGVuZ3RocyBvZiBhIHRyaWFuZ2xlIGlmIGdpdmVuIHRoZSAgYW5nbGUgKGluIGRlZ3JlZXMpXHJcbi8vYWxvbmcgd2l0aCB0aGUgbGVuZ3RoIG9mIHRoZSBoeXBvdGVudXNlXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGlvbl9sZW5ndGgobGVuZ3RoOiBudW1iZXIsIGRlZ3JlZTogbnVtYmVyKSB7XHJcbiAgbGV0IGFfbGVuID0gbGVuZ3RoICogTWF0aC5zaW4oZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgbGV0IGJfbGVuID0gbGVuZ3RoICogTWF0aC5jb3MoZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHg6IGFfbGVuLFxyXG4gICAgeTogYl9sZW5cclxuICB9XHJcbn1cclxuXHJcbi8vVGhpcyBjb3VudGVyIHRyYWNrcyB0aGUgZ2xvYmFsIG51bWJlciBvZiBvYmplY3RzIGNyZWF0ZWQgc28gZmFyXHJcbi8vYW4gb2JqZWN0J3MgaWQgKGlmIG5vdCBvdmVyd3JpdHRlbikgd2lsbCBiZSBhIHVuaXF1ZSBpbnRlZ2VyLCB3aGljaFxyXG4vL3VzZXMgdGhpcyBjb3VudGVyLlxyXG5sZXQgY291bnRlciA9IDA7XHJcblxyXG5pbnRlcmZhY2UgYW5pbV9zdG9yYWdlIHtcclxuICBbaW5kZXg6IHN0cmluZ106IFtBcnJheTxbbnVtYmVyLCBzcHJpdGVdPiwgbnVtYmVyXVxyXG59XHJcblxyXG5pbnRlcmZhY2Ugdm9pZF9mdW5jIHtcclxuICAoKTogdm9pZFxyXG59XHJcblxyXG5jbGFzcyBhbmltYXRpb25zIHtcclxuICBhbmltYXRpb25zOiBhbmltX3N0b3JhZ2UgPSB7fTtcclxuICAvL1RyYWNrcyB0aGUgdGltZSBwYXNzZWQgc2luY2UgdGhlIGN1cnJlbnQgYW5pbWF0aW9uXHJcbiAgLy9oYXMgc3RhcnRlZCBwbGF5aW5nXHJcbiAgYW5pbWF0aW9uX3RyYWNrZXIgPSAwO1xyXG4gIGN1cnJlbnQ6IHN0cmluZztcclxuICBjYWxsYmFjazogdm9pZF9mdW5jO1xyXG4gIGFuaW1hdGluZzpib29sZWFuID0gZmFsc2U7XHJcbiAgLy9kZWZpbmVzIGFuIGFuaW1hdGlvbiB0aGF0IGNhbiBiZSBwbGF5ZWQgdXNpbmcgdGhlIHBsYXkgbWV0aG9kXHJcbiAgLy90aGUga2V5ZnJhbWVzIGFyZSBhbiBhcnJheSBvZiB0dXBsZXMgaW4gdGhlIFxyXG4gIC8vZm9ybWF0IG9mIFsodGltZSBmb3IgdGhpcyBzcHJpdGUgdG8gc2hvdyksIHNwcml0ZV1cclxuICBhZGQobmFtZTogc3RyaW5nLCBrZXlmcmFtZXM6IEFycmF5PFtudW1iZXIsIHNwcml0ZV0+LCBsZW5ndGg6IG51bWJlcikge1xyXG4gICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gW2tleWZyYW1lcywgbGVuZ3RoXTtcclxuICB9XHJcbiAgcGxheShuYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogdm9pZF9mdW5jKSB7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciA9IDA7XHJcbiAgfVxyXG4gIHJlbmRlcmYodDogbnVtYmVyKTogc3ByaXRlIHtcclxuICAgIGxldCBjdXJyX2FuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRdWzBdO1xyXG4gICAgbGV0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5hbmltYXRpb25zW3RoaXMuY3VycmVudF1bMV07XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgZm9yICg7IGluZGV4IDwgY3Vycl9hbmltYXRpb24ubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xyXG4gICAgICBsZXQga2V5ZnJhbWVfdGltZSA9IGN1cnJfYW5pbWF0aW9uW2luZGV4XVswXTtcclxuICAgICAgbGV0IG5leHRfa2V5ZnJhbWVfdGltZSA9IGN1cnJfYW5pbWF0aW9uW2luZGV4ICsgMV1bMF07XHJcbiAgICAgIGlmICh0aGlzLmFuaW1hdGlvbl90cmFja2VyID49IGtleWZyYW1lX3RpbWUgJiYgdGhpcy5hbmltYXRpb25fdHJhY2tlciA8IG5leHRfa2V5ZnJhbWVfdGltZSkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPSB0aGlzLmFuaW1hdGlvbl90cmFja2VyICsgdDtcclxuICAgICAgICB0aGlzLmFuaW1hdGluZyA9IHRydWU7XHJcbiAgICAgICAgLy9SZXR1cm5zIHRoZSByYXcgc3ByaXRlIHRoYXQncyBjb3JyZWN0IHRvIHNob3cgYXQgdGhpcyB0aW1lXHJcbiAgICAgICAgcmV0dXJuIGN1cnJfYW5pbWF0aW9uW2luZGV4XVsxXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPj0gbGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPSAwO1xyXG4gICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgKz0gdDtcclxuICAgIH1cclxuICAgIC8vUmV0dXJucyB0aGUgbGFzdCBhcHByb3ByaWF0ZSBmcmFtZSB1bnRpbCB0aGUgYW5pbWF0aW9uIGlzIG92ZXIuXHJcbiAgICByZXR1cm4gY3Vycl9hbmltYXRpb25baW5kZXhdWzFdO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGhpdGJveHtcclxuICB3aWR0aDpudW1iZXIsXHJcbiAgaGVpZ2h0Om51bWJlcixcclxuICB4X29mZnNldDpudW1iZXIsXHJcbiAgeV9vZmZzZXQ6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGFyYW1ze1xyXG4gIFtpbmRleDpzdHJpbmddOmJvb2xlYW58c3RyaW5nfG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3Mgb2Jqe1xyXG4gIC8vVXJsIHRvIHRoZSBvYmplY3QncyBpbmRpdmlkdWFsIHNwcml0ZSwgb3IgYWxsIG9mIGl0cyBzcHJpdGVzXHJcbiAgLy9idW5kbGVkIGludG8gYSBzcHJpdGVzaGVldFxyXG4gIHNwcml0ZV91cmwgPSBcIlwiO1xyXG4gIC8vVGhpcyBpcyB0aGUgbG9hZGVkIHNwcml0ZS9zcHJpdGVzaGVldCBvZiB0aGUgb2JqZWN0XHJcbiAgLy93aGljaCBpcyBmZXRjaGVkIGZyb20gdGhlIHVybCBhYm92ZVxyXG4gIHNwcml0ZV9zaGVldDogSFRNTEltYWdlRWxlbWVudDtcclxuICBzdGF0ZTogb2JqX3N0YXRlO1xyXG4gIHJlbmRlcl90eXBlID0gcmVuZGVyX3R5cGUuc3ByaXRlO1xyXG4gIC8vVGhlc2Ugc2hvdWxkIGNvcnJlc3BvbmQgdG8gdGhlIGFjdHVhbCBvYmplY3QncyBzcHJpdGUgaGVpZ2h0IGFuZCB3aWR0aFxyXG4gIC8vSWYgdXNpbmcgYSBzcHJpdGUgc2hlZXQsIHRoZXNlIGJlIG9uZSBzcHJpdGUncyBoZWlnaHQgYW5kIHdpZHRoLlxyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgXHJcbiAgY29sbGlzaW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaGl0Ym94OiBoaXRib3hcclxuICBpZDogc3RyaW5nO1xyXG4gIC8vQXJyYXkgb2YgYmluZCBpZHNcclxuICAvL0JpbmRzIGFyZSBpbmRlbnRpZmllZCBieSBhIHVuaXF1ZSBudW1iZXIgdGhhdCBpcyByZXR1cm4gd2hlblxyXG4gIC8vVGhlIGJpbmQgaXMgY3JlYXRlZC4gV2UgbXVzdCBzdG9yZSB0aGVzZSBpZHMgaW4gb3JkZXIgdG8gXHJcbiAgLy9kZWxldGUgdGhlIGJpbmRzIHdoZW4gdGhleSBhcmUgbWFudWFsbHkgdW5ib3VuZCwgb3IgdGhlIG9iamVjdCBpcyBkZWxldGVkLlxyXG4gIGJpbmRzOiBBcnJheTxudW1iZXI+O1xyXG4gIHRhZ3M6c3RyaW5nW10gPSBbXTtcclxuICAvL3RhZ3MgYXJlIHVzZWQgdG8gZXhjbHVkZSBvciBpbmNsdWRlIG9iamVjdHMgd2hlbiBjaGVja2luZyBmb3IgY29sbGlzaW9ucyxcclxuICAvL2FuZCBmb3Igb2JqZWN0IGlkZW50aWZpY2F0aW9uIC8gY2xhc3NpZmljYXRpb24gaW4gc2NyaXB0c1xyXG4gIHJlbmRlciA9IHRydWU7XHJcbiAgYW5pbWF0aW9ucyA9IG5ldyBhbmltYXRpb25zKCk7XHJcbiAgYXVkaW8gPSBuZXcgYXVkaW8oKTtcclxuICAvL0xhc3QgcmVuZGVyIHRpbWUsIHVzZWQgdG8gY2FsY3VsYXRlIGRlbHRhX3RpbWVcclxuICBsYXN0X3JlbmRlcjpudW1iZXIgPSAwO1xyXG4gIGdhbWU6Z2FtZTx1bmtub3duPjtcclxuICBwYXJlbnQ6Y29tcG9zaXRlX29iajtcclxuICAvL1BhcmFtcyBhcmUgb3B0aW9ucyBmb3IgdGhlIG9iamVjdCwgdGhhdCBkbyBub3QgcmVseSBvbiBzdGF0ZVxyXG4gIC8vIEZvciBleGFtcGxlLCB0aGUgc2lkZSBvZiBhIHBpZWNlIGluIGNoZXNzLlxyXG4gIHBhcmFtczp1bmtub3duID0ge307XHJcbiAgbGF5ZXI6bnVtYmVyID0gMTtcclxuICBzYXZlX3RvX2ZpbGU6Ym9vbGVhbiA9IHRydWU7XHJcbiAgdGlja19zdGF0ZSA9IHRydWU7XHJcbiAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOnVua25vd24gPSB7fTtcclxuICBnZXRTdGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlO1xyXG4gIH1cclxuICAvL0FuaW1hdGlvbnMgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgdXNpbmcgdGhpcy5hbmltYXRpb25zLmFkZCBpbiB0aGlzIG1ldGhvZFxyXG4gIHJlZ2lzdGVyQW5pbWF0aW9ucygpIHtcclxuXHJcbiAgfVxyXG4gIC8vU291bmRzIHNob3VsZCBiZSByZWdpc3RlcmVkIHVzaW5nIHRoaXMuYXVkaW8uYWRkIGluIHRoaXMgbWV0aG9kLlxyXG4gIHJlZ2lzdGVyQXVkaW8oKSB7XHJcblxyXG4gIH1cclxuICBkZWZhdWx0UGFyYW1zKCk6dW5rbm93bntcclxuICAgIHJldHVybiBkZWVwKHRoaXMuZGVmYXVsdFBhcmFtcyk7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXMgPSBvYmouZGVmYXVsdF9wYXJhbXMpIHtcclxuICAgIFxyXG4gICAgdGhpcy5pZCA9IFwiXCIgKyBjb3VudGVyO1xyXG4gICAgdGhpcy5iaW5kcyA9IFtdO1xyXG4gICAgY291bnRlcisrO1xyXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICB0aGlzLnJlZ2lzdGVyQ29udHJvbHMoKTtcclxuICAgIHRoaXMucmVnaXN0ZXJBdWRpbygpO1xyXG4gICAgLy9DcmVhdGVzIGEgY29weSBvZiB0aGUgcGFzc2VkIGluIGluaXRpYWwgc3RhdGUgdG8gYXZvaWQgXHJcbiAgICAvL1VwZGF0aW5nIHRoZSBzYXZlZCBzdGF0ZSBvZiB0aGUgcm9vbVxyXG4gICAgdGhpcy5zdGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcclxuICAgIFxyXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgfVxyXG4gIGxvYWQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IGEgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgYS5zcmMgPSB0aGlzLnNwcml0ZV91cmw7XHJcbiAgICAgIGEub25sb2FkID0gKGFzeW5jICgpID0+IHtcclxuICAgICAgICBfdGhpcy5zcHJpdGVfc2hlZXQgPSBhO1xyXG4gICAgICAgIF90aGlzLnJlZ2lzdGVyQW5pbWF0aW9ucygpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXVkaW8ubG9hZCgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICAvL1dpdGhpbiBub3JtYWwgb2JqZWN0cywgdGhpcyBqdXN0IHJldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgb2JqZWN0LlxyXG4gIC8vVGhpcyBtZXRob2QgaXMgb3ZlcndyaXR0ZW4gYnkgY29tcG9zaXRlIG9iamVjdHMsIHdoaWNoIHJldHVybnMgZXZlcnkgb2JqZWN0XHJcbiAgLy90aGF0IHRoZSBjb21wb3NpdGUgb2JqZWN0IGNvbnRhaW5zLiBUaGlzIHNpbXBsaWZpZXMgdGhlIGJhY2tlbmQgd29yaywgYXMgZWFjaFxyXG4gIC8vb2JqZWN0IHJldHVybnMgYW4gYXJyYXkgb2YgYXRsZWFzdCBvbmUgb2JqZWN0LlxyXG4gIGNvbWJpbmVkT2JqZWN0cygpOm9ialtde1xyXG4gICAgcmV0dXJuIFt0aGlzXTtcclxuICB9XHJcbiAgLy9EaXN0YW5jZSBmcm9tIG9uZSBvYmplY3QgdG8gYW5vdGhlci5cclxuICBkaXN0YW5jZSh0YXJnZXQ6b2JqKTpudW1iZXJ7XHJcbiAgICByZXR1cm4gRGlzdGFuY2UodGhpcy5zdGF0ZS5wb3NpdGlvbix0YXJnZXQuc3RhdGUucG9zaXRpb24pO1xyXG4gIH1cclxuICBhbmdsZVRvd2FyZHMoYTogb2JqKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmFuZ2xlVG93YXJkc1BvaW50KGEuc3RhdGUucG9zaXRpb24pO1xyXG4gIH1cclxuICBhbmdsZVRvd2FyZHNQb2ludCh0YXJnZXQ6cG9zaXRpb24pOm51bWJlcntcclxuICAgIGlmICh0aGlzLnN0YXRlLnBvc2l0aW9uLnggPCB0YXJnZXQueCAmJiB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgPiB0YXJnZXQueVxyXG4gICAgICB8fCAodGhpcy5zdGF0ZS5wb3NpdGlvbi54IDwgdGFyZ2V0LnggJiYgdGhpcy5zdGF0ZS5wb3NpdGlvbi55IDwgdGFyZ2V0LnkpKSB7XHJcbiAgICAgIHJldHVybiA5MCAtIE1hdGguYXRhbigodGFyZ2V0LnkgLSB0aGlzLnN0YXRlLnBvc2l0aW9uLnkpIC8gKHRhcmdldC54IC0gdGhpcy5zdGF0ZS5wb3NpdGlvbi54KSkgKiAxODAgLyBNYXRoLlBJXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5wb3NpdGlvbi54ID4gdGFyZ2V0LnggJiYgdGhpcy5zdGF0ZS5wb3NpdGlvbi55IDwgdGFyZ2V0LnlcclxuICAgICAgfHwgdGhpcy5zdGF0ZS5wb3NpdGlvbi54ID4gdGFyZ2V0LnggJiYgdGhpcy5zdGF0ZS5wb3NpdGlvbi55ID4gdGFyZ2V0LnkpIHtcclxuICAgICAgcmV0dXJuIDI3MCAtIE1hdGguYXRhbigodGFyZ2V0LnkgLSB0aGlzLnN0YXRlLnBvc2l0aW9uLnkpIC8gKHRhcmdldC54IC0gdGhpcy5zdGF0ZS5wb3NpdGlvbi54KSkgKiAxODAgLyBNYXRoLlBJXHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgYmluZENvbnRyb2woa2V5OiBzdHJpbmcsIHg6IGV4ZWNfdHlwZSwgZnVuYzogY29udHJvbF9mdW5jLCBpbnRlcnZhbCA9IDEpIHtcclxuICAgIHRoaXMuYmluZHMucHVzaChCaW5kKGtleSwgZnVuYywgeCwgaW50ZXJ2YWwsIHRoaXMpKTtcclxuICB9XHJcbiAgLy9UaGlzIG1ldGhvZCBpcyB3aGVyZSBjb250cm9scyBhbmQga2V5YmluZHMgc2hvdWxkXHJcbiAgLy9iZSBkZWZpbmVkIHVzaW5nIGJpbmRDb250cm9sXHJcbiAgcmVnaXN0ZXJDb250cm9scygpe1xyXG5cclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6bnVtYmVyKXtcclxuXHJcbiAgfVxyXG4gIGRlbGV0ZSgpIHtcclxuICAgIGZvciAobGV0IGEgb2YgdGhpcy5iaW5kcykge1xyXG4gICAgICBVbmJpbmQoYSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWUuZ2V0Um9vbSgpLmRlbGV0ZUl0ZW0odGhpcy5pZCk7XHJcbiAgfVxyXG4gIFVuYmluZEFsbCgpe1xyXG4gICAgZm9yIChsZXQgYSBvZiB0aGlzLmJpbmRzKSB7XHJcbiAgICAgIFVuYmluZChhKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy9SZXR1cm5zIHRoZSBjb2xsaXNpb24gYm94IG9mIHRoZSBvYmplY3RcclxuICAvL0RvZXMgbm90IGhhdmUgdG8gY29ycmVzcG9uZCB0byB0aGUgb2JqZWN0J3Mgc3ByaXRlJ3Mgc2l6ZSBcclxuICAvL0EgY29tcG9zaXRlIG9iamVjdCBpbnN0ZWFkIHJldHVybnMgdGhlIGJvdW5kaW5nIGJveCB0aGF0IFxyXG4gIC8vY29udGFpbnMgZXZlcnkgb25lIG9mIGl0cyBjb250YWluZWQgb2JqZWN0c1xyXG4gIGdldEZ1bGxDb2xsaXNpb25Cb3goKTpjb2xsaXNpb25fYm94e1xyXG4gICAgLy9JZiBhIGRldmVsb3BlciBkZWZpbmVkIGhpdGJveCBleGlzdHMsIHVzZSB0aGF0LCBvdGhlcndpc2VcclxuICAgIC8vZ2VuZXJhdGUgaXQgdXNpbmcgdGhlIHNwcml0ZSB3aWR0aCAvIGhlaWdodFxyXG4gICAgaWYodGhpcy5oaXRib3gpe1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOnRoaXMuaGl0Ym94LndpZHRoICogdGhpcy5zdGF0ZS5zY2FsaW5nLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDp0aGlzLmhpdGJveC5oZWlnaHQgKiB0aGlzLnN0YXRlLnNjYWxpbmcuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgd2lkdGg6dGhpcy53aWR0aCAqIHRoaXMuc3RhdGUuc2NhbGluZy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6dGhpcy5oZWlnaHQgKiB0aGlzLnN0YXRlLnNjYWxpbmcuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy9UaGlzIGlzIGFub3RoZXIgbWV0aG9kcywgc2ltaWxhciB0byBnZXRDb21iaW5lZFxyXG4gIC8vSnVzdCByZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG9iamVjdCdzIGNvbGxpc2lvbiBib3hcclxuICAvL092ZXJ3cml0dGVuIGluIGNvbXBvc2l0ZSBvYmplY3RzIHRvIHJldHVybiBldmVyeSBvYmplY3QncyBjb2xsaXNpb24gYm94XHJcbiAgLy93aXRoaW4gdGhlIGNvbXBvc2l0ZSBvYmVjdC5cclxuICBnZXRBbGxDb2xsaXNpb25Cb3hlcygpOmNvbGxpc2lvbl9ib3hbXXtcclxuICAgIHJldHVybiBbdGhpcy5nZXRGdWxsQ29sbGlzaW9uQm94KCldXHJcbiAgfVxyXG4gIC8vQ2hlY2tzIHRvIHNlZSBpZiBhbiBvYmplY3QgYWN0dWFsbHkgY29sbGlkZXMgd2l0aCB0aGUgcHJvdmlkZWQgYm94LlxyXG4gIC8vQSBib3ggcmVwcmVzZW50cyBhbiBhcmVhIHdpdGhpbiB0aGUgZ2FtZSBzcGFjZVxyXG4gIC8vQ2hlY2tpbmcgZm9yIGNvbGxpc2lvbnMgaXMgdHJpdmlhbCBjdXJyZW50bHksIGFzIGFsbCBoaXRib3hlcyBhcmUgYXhpcyBhbGlnbmVkXHJcbiAgLy9CdXQgaW1wbGVtZW50aW5nIGEgbW9yZSBjb21wbGljYXRlZCBwaHlzaWNzIGVuZ2luZSB3b3VsZCBtYWtlIHRoaXMgbWV0aG9kJ3MgaW1wbC5cclxuICAvL3NpZ25pZmljYXRseSBtb3JlIGNvbXBsZXguXHJcbiAgY29sbGlkZXNXaXRoQm94KG90aGVyX29iamVjdDogY29sbGlzaW9uX2JveCk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGNvbGxpZGVzX2hvcnJpem9udGFsbHkgPSBmYWxzZSwgY29sbGlkZXNfdmVydGljYWxseSA9IGZhbHNlO1xyXG4gICAgbGV0IGhib3ggPSB0aGlzLmhpdGJveDtcclxuICAgIGlmKCF0aGlzLmhpdGJveCl7XHJcbiAgICAgIGhib3ggPSB7XHJcbiAgICAgICAgeF9vZmZzZXQ6MCxcclxuICAgICAgICB5X29mZnNldDowLFxyXG4gICAgICAgIHdpZHRoOnRoaXMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBvYmplY3RfYm91bmRzID0ge1xyXG4gICAgICBsZWZ0OiAodGhpcy5zdGF0ZS5wb3NpdGlvbi54ICsgaGJveC54X29mZnNldCAtIGhib3gud2lkdGggKiB0aGlzLnN0YXRlLnNjYWxpbmcud2lkdGggLyAyKSxcclxuICAgICAgcmlnaHQ6ICh0aGlzLnN0YXRlLnBvc2l0aW9uLnggKyBoYm94Lnhfb2Zmc2V0ICsgaGJveC53aWR0aCAqIHRoaXMuc3RhdGUuc2NhbGluZy53aWR0aCAvIDIpLFxyXG4gICAgICB0b3A6ICh0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKyBoYm94Lnlfb2Zmc2V0ICsgaGJveC5oZWlnaHQgKiB0aGlzLnN0YXRlLnNjYWxpbmcuaGVpZ2h0IC8gMiksXHJcbiAgICAgIGJvdHRvbTogKHRoaXMuc3RhdGUucG9zaXRpb24ueSArIGhib3gueV9vZmZzZXQgLSBoYm94LmhlaWdodCAqIHRoaXMuc3RhdGUuc2NhbGluZy5oZWlnaHQgLyAyKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBvdGhlcl9vYmplY3RfYm91bmRzID0ge1xyXG4gICAgICBsZWZ0OiAob3RoZXJfb2JqZWN0LnggLSBvdGhlcl9vYmplY3Qud2lkdGggLyAyKSxcclxuICAgICAgcmlnaHQ6IChvdGhlcl9vYmplY3QueCArIG90aGVyX29iamVjdC53aWR0aCAvIDIpLFxyXG4gICAgICB0b3A6IChvdGhlcl9vYmplY3QueSArIG90aGVyX29iamVjdC5oZWlnaHQgLyAyKSxcclxuICAgICAgYm90dG9tOiAob3RoZXJfb2JqZWN0LnkgLSBvdGhlcl9vYmplY3QuaGVpZ2h0IC8gMilcclxuICAgIH1cclxuXHJcbiAgICAvL1dlIGNhbiBjb21wYXJlIHRoZSBzaWRlcyBvZiB0aGUgYm94ZXMgdG8gc2VlIGlmIHRoZXkgb3ZlcmxhcFxyXG4gICAgLy9XZSBjaGVjayBvbmNlIGZvciBob2l6b250YWwgb3ZlcmxhcCwgdGhlbiB2ZXJ0aWNhbC5cclxuICAgIGlmICgob2JqZWN0X2JvdW5kcy5sZWZ0ID49IG90aGVyX29iamVjdF9ib3VuZHMubGVmdCAmJiBvYmplY3RfYm91bmRzLmxlZnQgPCBvdGhlcl9vYmplY3RfYm91bmRzLnJpZ2h0KSB8fCAob3RoZXJfb2JqZWN0X2JvdW5kcy5sZWZ0ID4gb2JqZWN0X2JvdW5kcy5sZWZ0ICYmIG90aGVyX29iamVjdF9ib3VuZHMubGVmdCA8IG9iamVjdF9ib3VuZHMucmlnaHQpKSB7XHJcbiAgICAgIGNvbGxpZGVzX2hvcnJpem9udGFsbHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKChvYmplY3RfYm91bmRzLmJvdHRvbSA+PSBvdGhlcl9vYmplY3RfYm91bmRzLmJvdHRvbSAmJiBvYmplY3RfYm91bmRzLmJvdHRvbSA8IG90aGVyX29iamVjdF9ib3VuZHMudG9wKSB8fCAob3RoZXJfb2JqZWN0X2JvdW5kcy5ib3R0b20gPiBvYmplY3RfYm91bmRzLmJvdHRvbSAmJiBvdGhlcl9vYmplY3RfYm91bmRzLmJvdHRvbSA8IG9iamVjdF9ib3VuZHMudG9wKSl7XHJcbiAgICAgIGNvbGxpZGVzX3ZlcnRpY2FsbHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbGxpZGVzX2hvcnJpem9udGFsbHkgJiYgY29sbGlkZXNfdmVydGljYWxseTtcclxuICB9XHJcbiAgLy9UaGUgcGFydGljbGUgbXVzdCBiZSByZWdpc3RlcmVkIGluIHRoZSByb29tJ3MgcmVnaXN0ZXJQYXJ0aWNsZXMgbWV0aG9kIFxyXG4gIC8vVGhlIG5hbWUgcGFyYW1ldGVyIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBrZXkgb2YgYSBwYXJ0aWNsZVxyXG4gIGVtaXRQYXJ0aWNsZShuYW1lOnN0cmluZyxvZmZzZXQ6cG9zaXRpb24sbGlmZXRpbWU6bnVtYmVyLHJhbmdlOm51bWJlcil7XHJcbiAgICBsZXQgcm9vbSA9IHRoaXMuZ2FtZS5nZXRSb29tKCk7XHJcbiAgICBsZXQgc3QgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgbGV0IGZpbmFsX3Bvc2l0aW9uOnBvc2l0aW9uID0ge1xyXG4gICAgICB4OnN0LnBvc2l0aW9uLnggKyBvZmZzZXQueCxcclxuICAgICAgeTpzdC5wb3NpdGlvbi55ICsgb2Zmc2V0LnlcclxuICAgIH1cclxuICAgIHJvb20uZW1pdFBhcnRpY2xlKG5hbWUsZmluYWxfcG9zaXRpb24sbGlmZXRpbWUscmFuZ2UpXHJcbiAgfVxyXG4gIC8vSW50ZXJuYWwgbWV0aG9kIHRoYXQga2VlcHMgY2FsY3VsYXRlcyB0aGUgZGVsdGFfdGltZVxyXG4gIC8vQWxzbyBjb252ZXJ0cyBpbmRpdmlkdWFsIHNwcml0ZXMgaW50byBhcnJheXMgb2Ygb25lIHNwcml0ZS5cclxuICByZW5kZXJUcmFjayh0aW1lOm51bWJlcik6IHBvc2l0aW9uZWRfc3ByaXRlW10ge1xyXG4gICAgbGV0IHJlbmRlcmVkID0gdGhpcy5yZW5kZXJmKHRpbWUgLSB0aGlzLmxhc3RfcmVuZGVyKTtcclxuICAgIGxldCBmaW5hbDpwb3NpdGlvbmVkX3Nwcml0ZVtdO1xyXG4gICAgdGhpcy5sYXN0X3JlbmRlciA9IHRpbWU7XHJcbiAgICBpZihBcnJheS5pc0FycmF5KHJlbmRlcmVkKSlcclxuICAgICAgZmluYWwgPSByZW5kZXJlZFxyXG4gICAgZWxzZXtcclxuICAgICAgZmluYWwgPSBbcmVuZGVyZWRdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmluYWw7XHJcbiAgfVxyXG4gIC8vTW9zdCBvYmplY3RzIHNob3VsZCBub3QgYmUgb3ZlcndyaXR0aW5nIHRoZSByZW5kZXJmIG1ldGhvZFxyXG4gIC8vUmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgc3ByaXRlIGZvciB0aGUgb2JqZWN0XHJcbiAgcmVuZGVyZih0aW1lOiBudW1iZXIpOiBwb3NpdGlvbmVkX3Nwcml0ZVtdIHwgcG9zaXRpb25lZF9zcHJpdGV7XHJcbiAgICAvL0lmIHRoZSBvYmplY3QgZG9lc24ndCBoYXZlIHJlZ2lzdGVyZWQgYW5pbWF0aW9ucywgb3IgaXNuJ3QgcGxheWluZyBvbmVcclxuICAgIC8vV2UgaGF2ZSB0byBjcmVhdGUgdGhlIHNwcml0ZSBoZXJlLlxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuYW5pbWF0aW9ucy5hbmltYXRpb25zKS5sZW5ndGggPT0gMCB8fCAhdGhpcy5hbmltYXRpb25zLmN1cnJlbnQpIHtcclxuICAgICAgaWYoIXRoaXMuc3ByaXRlX3NoZWV0IHx8ICF0aGlzLmhlaWdodCB8fCAhdGhpcy53aWR0aCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHNwcml0ZTp1bmRlZmluZWQsXHJcbiAgICAgICAgICB4OnRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBzcHJpdGVfaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgIGxldCBzcHJpdGVfd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAvL1RlY2huaWNhbGx5IHdlIGRvbid0IG5lZWQgdG8gZGVmaW5lIGFuIG9iamVjdCBoZWlnaHQgYW5kIHdpZHRoXHJcbiAgICAgIC8vSWYgdGhlIHNwcml0ZV91cmwgcG9pbnRzIHRvIGEgc2luZ2xlIHN0YXRpYyBzcHJpdGUsIGFzIHdlIGNhbiBqdXN0IHB1bGxcclxuICAgICAgLy90aGUgZGltZW5zaW9ucyBmcm9tIHRoZSBpbWFnZVxyXG4gICAgICBpZiAodGhpcy5oZWlnaHQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3ByaXRlX2hlaWdodCA9IHRoaXMuc3ByaXRlX3NoZWV0LmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy53aWR0aCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzcHJpdGVfd2lkdGggPSB0aGlzLnNwcml0ZV9zaGVldC53aWR0aDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgc3ByaXRlX3NoZWV0OiB0aGlzLnNwcml0ZV9zaGVldCxcclxuICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICBzcHJpdGVfd2lkdGg6IHNwcml0ZV93aWR0aCxcclxuICAgICAgICAgIHNwcml0ZV9oZWlnaHQ6IHNwcml0ZV9oZWlnaHQsXHJcbiAgICAgICAgICBvcGFjaXR5OjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHg6IHRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OiB0aGlzLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNwcml0ZTp0aGlzLmFuaW1hdGlvbnMucmVuZGVyZih0aW1lKSxcclxuICAgICAgeDogdGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgY29tcG9zaXRlX3N0YXRpY3tcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBvYmo6b2JqXHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBjb21wb3NpdGVfb2JqIGV4dGVuZHMgb2Jqe1xyXG4gIG9iamVjdHM6b2JqW10gPSBbXTtcclxuICByZW5kZXIgPSBmYWxzZTtcclxuICByZWdpc3RlcmVkID0gZmFsc2U7XHJcbiAgY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgc3RhdGljczpjb21wb3NpdGVfc3RhdGljW10gPSBbXTtcclxuICBjb25zdHJ1Y3Rvcihwb3M6b2JqX3N0YXRlKXtcclxuICAgIHN1cGVyKHBvcyk7XHJcbiAgfVxyXG4gIGxvYWQoKXtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChbLi4udGhpcy5vYmplY3RzLm1hcCgoYSk9PmEubG9hZCgpKSwuLi50aGlzLnN0YXRpY3MubWFwKGE9PmEub2JqLmxvYWQoKSldKTtcclxuICB9XHJcbiAgY29tYmluZWRPYmplY3RzKCk6b2JqW117XHJcbiAgICBsZXQgY29tYmluZWQgPSBbLi4udGhpcy5vYmplY3RzLC4uLnRoaXMuc3RhdGljcy5tYXAoYT0+YS5vYmopXTtcclxuICAgIGNvbWJpbmVkLmZvckVhY2goYT0+YS5wYXJlbnQgPSB0aGlzKTtcclxuICAgIHJldHVybiBbLi4uY29tYmluZWQsdGhpc107XHJcbiAgfVxyXG4gIGdldEl0ZW1zQnlUYWcodGFnOnN0cmluZyl7XHJcbiAgICByZXR1cm4gdGhpcy5jb21iaW5lZE9iamVjdHMoKS5maWx0ZXIoKGEpPT5hLnRhZ3MuaW5kZXhPZih0YWcpID4gLTEpO1xyXG4gIH1cclxuICBhZGRJdGVtKGE6b2JqLGxpc3Q9dGhpcy5vYmplY3RzKXtcclxuICAgIGxpc3QucHVzaChhKTtcclxuICAgIGEucGFyZW50ID0gdGhpcztcclxuICAgIHRoaXMuZ2FtZS5nZXRSb29tKCkuYWRkSXRlbShhKTtcclxuICB9XHJcbiAgZ2V0QWxsQ29sbGlzaW9uQm94ZXMoKTpjb2xsaXNpb25fYm94W117XHJcbiAgICBsZXQgYXJyOmNvbGxpc2lvbl9ib3hbXSA9IFtdO1xyXG4gICAgZm9yKGxldCBvYmogb2YgWy4uLnRoaXMuc3RhdGljcy5tYXAoYT0+YS5vYmopLC4uLnRoaXMub2JqZWN0c10pe1xyXG4gICAgICBsZXQgY3JlYXRlZF9ib3ggPSBvYmouZ2V0QWxsQ29sbGlzaW9uQm94ZXMoKTtcclxuICAgICAgaWYoQXJyYXkuaXNBcnJheShjcmVhdGVkX2JveCkpe1xyXG4gICAgICAgIGFyci5wdXNoKC4uLmNyZWF0ZWRfYm94KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIGFyci5wdXNoKGNyZWF0ZWRfYm94KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxuICB9XHJcbiAgZGVsZXRlKCl7XHJcbiAgICBmb3IobGV0IGEgb2YgdGhpcy5vYmplY3RzKXtcclxuICAgICAgYS5kZWxldGUoKTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSBvZiB0aGlzLnN0YXRpY3Mpe1xyXG4gICAgICBhLm9iai5kZWxldGUoKTtcclxuICAgIH1cclxuICAgIHN1cGVyLmRlbGV0ZSgpO1xyXG4gIH1cclxuICBjb2xsaWRlc1dpdGhCb3goYTogY29sbGlzaW9uX2JveCk6Ym9vbGVhbntcclxuICAgIGZvcihsZXQgb2JqIG9mIHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGlmKG9iai5jb2xsaWRlc1dpdGhCb3goYSkpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IG8gb2YgdGhpcy5zdGF0aWNzKXtcclxuICAgICAgaWYoby5vYmouY29sbGlkZXNXaXRoQm94KGEpKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIHN0YXRpY19vYmoge1xyXG4gIHNwcml0ZV91cmwgPSBcIlwiO1xyXG4gIHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIGdyYXZpdHlfb2JqIGV4dGVuZHMgb2Jqe1xyXG4gIGdyYXZpdHkgPSB0cnVlXHJcbn0iLCJpbXBvcnQgeyBzcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgR2V0Vmlld3BvcnREaW1lbnNpb25zIH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQgeyBvYmogfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgZGltZW5zaW9ucywgb2JqX3N0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgVGV4dF9Ob2RlLCBUZXh0U2V0dGluZyxIVUQsVGV4dCB9IGZyb20gXCIuL2h1ZFwiO1xyXG5pbXBvcnQge3Bvc2l0aW9uZWRfc3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVcIlxyXG5cclxuaW50ZXJmYWNlIGNhbWVyYV9zdGF0ZSB7XHJcbiAgc2NhbGluZzogbnVtYmVyLFxyXG4gIHBvc2l0aW9uOiB7XHJcbiAgICB4OiBudW1iZXIsXHJcbiAgICB5OiBudW1iZXJcclxuICB9XHJcbiAgZGltZW5zaW9uczoge1xyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbiAgfSxcclxuICB2aWV3cG9ydDogdmlld3BvcnQsXHJcbiAgZGVidWc6Ym9vbGVhbixcclxuICBodWQ6SFVEICBcclxufVxyXG5cclxuaW50ZXJmYWNlIHZpZXdwb3J0IHtcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIGNhbWVyYV9wcm9wZXJ0aWVzIHtcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBkaW1lbnNpb25zOntcclxuICAgIGhlaWdodDpudW1iZXIsXHJcbiAgICB3aWR0aDpudW1iZXJcclxuICB9XHJcbiAgc2NhbGluZzpudW1iZXIsXHJcbiAgZGVidWc6Ym9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhIHtcclxuICBzdGF0ZTogY2FtZXJhX3N0YXRlO1xyXG4gIGh1ZDogSFVEO1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOmNhbWVyYV9wcm9wZXJ0aWVzLCB2OiB2aWV3cG9ydCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2NhbGluZzpwcm9wcy5zY2FsaW5nLFxyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IHByb3BzLnggKiBwcm9wcy5zY2FsaW5nLFxyXG4gICAgICAgIHk6IHByb3BzLnkgKiBwcm9wcy5zY2FsaW5nXHJcbiAgICAgIH0sXHJcbiAgICAgIGRpbWVuc2lvbnM6IHByb3BzLmRpbWVuc2lvbnMsXHJcbiAgICAgIHZpZXdwb3J0OiB7XHJcbiAgICAgICAgeDp2LngsXHJcbiAgICAgICAgeTp2LnkgLFxyXG4gICAgICAgIHdpZHRoOiB2LndpZHRoICogcHJvcHMuZGltZW5zaW9ucy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHYuaGVpZ2h0ICogcHJvcHMuZGltZW5zaW9ucy5oZWlnaHRcclxuICAgICAgfSxcclxuICAgICAgZGVidWc6cHJvcHMuZGVidWcsXHJcbiAgICAgIGh1ZDp1bmRlZmluZWRcclxuICAgIH1cclxuICB9XHJcbiAgc2V0IHgoeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnggPSB4O1xyXG4gIH1cclxuICBzZXQgeSh5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSA9IHlcclxuICB9XHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gIH1cclxuICBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLnBvc2l0aW9uLnk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSByZW5kZXJfZnVuYyB7XHJcbiAgKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsaW5nOiBudW1iZXIpOiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSByZWN0YW5nbGUge1xyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIHNwcml0ZV9hcmdzIHtcclxuICBzcHJpdGU6IHNwcml0ZSxcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHJvdGF0aW9uOiBudW1iZXIsXHJcbiAgc2NhbGU6ZGltZW5zaW9uc1xyXG59XHJcblxyXG5pbnRlcmZhY2UgcmVuZGVyZXJfYXJncyB7XHJcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gIGNhbWVyYTogQ2FtZXJhXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIHJlbmRlcl90eXBlIHtcclxuICB0ZXh0LFxyXG4gIHNwcml0ZSxcclxuICByZWN0LFxyXG4gIHN0cm9rZV9yZWN0XHJcbn1cclxuLypcclxuZXhwb3J0IGNvbnN0IGVsZW1lbnRfcmVuZGVyID0gKHI6cmVuZGVyZXJfYXJncyxvOm9iajx1bmtub3duPix0aW1lOm51bWJlcikgPT4ge1xyXG4gIGxldCBjYW1lcmEgPSByLmNhbWVyYTtcclxuICBsZXQgdmhlaWdodCA9IHIuY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgocy54IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAvIDIgLSBzLnNwcml0ZS5zcHJpdGVfd2lkdGggLyAyKSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0gcy55IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiAtIHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQgLyAyICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGhlaWdodCA9IHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCB3aWR0aCA9IHMuc3ByaXRlLnNwcml0ZV93aWR0aCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgaWYoby5yZW5kZXJfdHlwZSA9PSByZW5kZXJfdHlwZS50ZXh0KXtcclxuXHJcbiAgfVxyXG4gIGVsc2UgaWYoby5yZW5kZXJfdHlwZSA9PSByZW5kZXJfdHlwZS5zcHJpdGUpe1xyXG5cclxuICB9XHJcbiAgZWxzZSBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnN0cm9rZV9yZWN0KXtcclxuXHJcbiAgfVxyXG59XHJcbiovXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGh1ZF90ZXh0X3JlbmRlcmVyID0gKHI6IHJlbmRlcmVyX2FyZ3MsIHM6IFRleHRTZXR0aW5nKSA9PiB7XHJcbiAgbGV0IHZoZWlnaHQgPSBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQ7XHJcbiAgci5jb250ZXh0LmZvbnQgPSBgJHtzLmZvbnQuc2l6ZX1weCAke3MuZm9udC5mb250fWA7XHJcbiAgci5jb250ZXh0LmZpbGxTdHlsZSA9IHMuZm9udC5jb2xvcjtcclxuICByLmNvbnRleHQudGV4dEFsaWduID0gcy5mb250LmFsaWduO1xyXG4gIGlmIChzLmZvbnQubWF4X3dpZHRoKSB7XHJcbiAgICByLmNvbnRleHQuZmlsbFRleHQocy5mb250LnRleHQsIHMueCwgdmhlaWdodCAtIHMueSwgcy5mb250Lm1heF93aWR0aCk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCBzLngsIHZoZWlnaHQgLSBzLnkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRleHRfcmVuZGVyZXIgPSAocjpyZW5kZXJlcl9hcmdzLHM6VGV4dFNldHRpbmcpID0+IHtcclxuICBsZXQgY2FtZXJhID0gci5jYW1lcmE7XHJcbiAgbGV0IHZoZWlnaHQgPSByLmNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodDtcclxuICBsZXQgd2lkdGggPSByLmNvbnRleHQubWVhc3VyZVRleHQocy5mb250LnRleHQpLndpZHRoICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgaGVpZ2h0ID0gcy5mb250LnNpemUgKiAxLjIgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKChzLnggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvci5jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyKSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0gcy55ICogY2FtZXJhLnN0YXRlLnNjYWxpbmcgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQvMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICByLmNvbnRleHQuZm9udCA9IGAke3MuZm9udC5zaXplICogci5jYW1lcmEuc3RhdGUuc2NhbGluZ31weCAke3MuZm9udC5mb250fWA7XHJcbiAgci5jb250ZXh0LmZpbGxTdHlsZSA9IHMuZm9udC5jb2xvcjtcclxuICByLmNvbnRleHQudGV4dEFsaWduID0gcy5mb250LmFsaWduXHJcbiAgci5jb250ZXh0LnNhdmUoKTtcclxuICByLmNvbnRleHQudHJhbnNsYXRlKGZpbmFsX3gsIGZpbmFsX3kpO1xyXG4gIGlmIChzLmZvbnQubWF4X3dpZHRoKSB7XHJcbiAgICByLmNvbnRleHQuZmlsbFRleHQocy5mb250LnRleHQsIDAsIDAsIHMuZm9udC5tYXhfd2lkdGgpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgMCwgMCk7XHJcbiAgfVxyXG4gIHIuY29udGV4dC5yZXN0b3JlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzcHJpdGVfcmVuZGVyZXIgPSAocjogcmVuZGVyZXJfYXJncywgczogc3ByaXRlX2FyZ3MpID0+IHtcclxuICBsZXQgY2FtZXJhID0gci5jYW1lcmE7XHJcbiAgbGV0IHZoZWlnaHQgPSByLmNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAvIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGZpbmFsX3ggPSAoKHMueCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9yLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSBzLnNwcml0ZS5zcHJpdGVfd2lkdGggKiBzLnNjYWxlLndpZHRoIC8gMikgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHMueSAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxL3IuY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiAtIHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQgKiBzLnNjYWxlLmhlaWdodCAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcgKiBzLnNjYWxlLmhlaWdodDtcclxuICBsZXQgd2lkdGggPSBzLnNwcml0ZS5zcHJpdGVfd2lkdGggKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nICogcy5zY2FsZS53aWR0aDtcclxuICByLmNvbnRleHQuc2F2ZSgpO1xyXG4gIHIuY29udGV4dC5nbG9iYWxBbHBoYSA9IHMuc3ByaXRlLm9wYWNpdHk7XHJcbiAgci5jb250ZXh0LnRyYW5zbGF0ZShmaW5hbF94ICArICh3aWR0aCkgLyAyLCBmaW5hbF95ICsgaGVpZ2h0IC8gMilcclxuICBsZXQgcmFkaWFucyA9IHMucm90YXRpb24gKiAoTWF0aC5QSSAvIDE4MCk7XHJcbiAgci5jb250ZXh0LnJvdGF0ZShyYWRpYW5zKTtcclxuICByLmNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgcy5zcHJpdGUuc3ByaXRlX3NoZWV0LFxyXG4gICAgcy5zcHJpdGUubGVmdCxcclxuICAgIHMuc3ByaXRlLnRvcCxcclxuICAgIHMuc3ByaXRlLnNwcml0ZV93aWR0aCxcclxuICAgIHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQsXHJcbiAgICAtKHdpZHRoICkgLyAyLFxyXG4gICAgLWhlaWdodCAvIDIsXHJcbiAgICB3aWR0aCxcclxuICAgIGhlaWdodFxyXG4gIClcclxuICByLmNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcmVjdDogcmVjdGFuZ2xlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOm51bWJlciwgY2FtZXJhOiBDYW1lcmEpID0+IHtcclxuICBsZXQgdmhlaWdodCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAvIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKCh4IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSByZWN0LndpZHRoIC8gMikgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSB5IC0gcmVjdC5oZWlnaHQgLyAyIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55KSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgd2lkdGggPSByZWN0LndpZHRoICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgY29udGV4dC5zdHJva2VSZWN0KGZpbmFsX3gsIGZpbmFsX3ksIHdpZHRoLCBoZWlnaHQpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVjdF9yZW5kZXJlciA9IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJlY3Q6IHJlY3RhbmdsZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDpudW1iZXIsIGNhbWVyYTogQ2FtZXJhKSA9PiB7XHJcbiAgbGV0IHZoZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgoeCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcmVjdC53aWR0aCAvIDIpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0geSAtIHJlY3QuaGVpZ2h0IC8gMiAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGhlaWdodCA9IHJlY3QuaGVpZ2h0ICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IHdpZHRoID0gcmVjdC53aWR0aCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICBjb250ZXh0LmZpbGxSZWN0KGZpbmFsX3gsIGZpbmFsX3ksIHdpZHRoLCBoZWlnaHQpO1xyXG59IiwiaW1wb3J0IHsgZ3Jhdml0eV9vYmosb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlLCBzcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgZGltZW5zaW9ucywgb2JqX3N0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgdmVsb2NpdHlDb2xsaXNpb25DaGVjayxjaGVja19jb2xsaXNpb25zLGNvbGxpc2lvbl9ib3gsY2hlY2tfYWxsX2NvbGxpc2lvbnMsY2hlY2tfYWxsX29iamVjdHN9IGZyb20gXCIuL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge3JlbmRlcl9jb2xsaXNpb25fYm94LERFQlVHfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7QmluZCxjb250cm9sX2Z1bmMsIGV4ZWNfdHlwZX0gZnJvbSBcIi4vY29udHJvbHNcIjtcclxuaW1wb3J0IHtIVUQsVGV4dCwgVGV4dF9Ob2RlfSBmcm9tIFwiLi9odWRcIjtcclxuaW1wb3J0IHthdWRpb30gZnJvbSBcIi4vYXVkaW9cIlxyXG5pbXBvcnQge2dhbWV9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHtkZWJ1Z191cGRhdGVfb2JqX2xpc3R9IGZyb20gXCIuLi9saWIvZGVidWdcIjtcclxuaW1wb3J0IHtwcmVmYWJzfSBmcm9tIFwiLi4vZ2FtZS9vYmplY3RzL3ByZWZhYnNcIjtcclxuXHJcbmludGVyZmFjZSBwb3NpdGlvbntcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlclxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlHcmF2aXR5KG9iOmdyYXZpdHlfb2JqLGdyYXZfY29uc3Q6bnVtYmVyLCBncmF2X21heDpudW1iZXIpe1xyXG4gIGlmKG9iLmdyYXZpdHkgJiYgb2Iuc3RhdGUudmVsb2NpdHkueSA+IGdyYXZfbWF4KXtcclxuICAgIG9iLnN0YXRlLnZlbG9jaXR5LnkgKz0gZ3Jhdl9jb25zdDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGFydGljbGVfZW50cnl7XHJcbiAgc3ByaXRlOnN0cmluZyxcclxuICBoZWlnaHQ6bnVtYmVyLFxyXG4gIHdpZHRoOm51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgcGFydGljbGVze1xyXG4gIFtpbmRleDpzdHJpbmddOnBhcnRpY2xlX2VudHJ5XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugcm9vbV9pPFQ+e1xyXG4gIGJhY2tncm91bmRfdXJsOnN0cmluZyxcclxuICBvYmplY3RzOm9ialtdXHJcbiAgc3RhdGU6VFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG9iamVjdF9zdGF0ZV9jb25maWcge1xyXG4gIHR5cGU6c3RyaW5nLFxyXG4gIHN0YXRlOm9ial9zdGF0ZSxcclxuICBwYXJhbWV0ZXJzPzogdW5rbm93blxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHN0YXRlX2NvbmZpZ3tcclxuICBvYmplY3RzOm9iamVjdF9zdGF0ZV9jb25maWdbXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3Mgcm9vbTxUPntcclxuICAvL1VybCB0byBhbiBpbWFnZSB0byBiZSB1c2VkIGZvciB0aGUgcm9vbSBiYWNrZ3JvdW5kXHJcbiAgYmFja2dyb3VuZF91cmw6IHN0cmluZztcclxuICBiYWNrZ3JvdW5kOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIG9iamVjdHM6IG9ialtdID0gW107XHJcbiAgLy9UaGlzIG9iamVjdCBjb250YWlucyBwYXJ0aWNsZSBkZWZpbml0aW9uc1xyXG4gIHBhcnRpY2xlczpwYXJ0aWNsZXMgPSB7fTtcclxuICAvL1RoaXMgYXJyYXkgaXMgd2hhdCBhY3R1YWxseSBjb250YWlucyB0aGUgcGFydGljbGVzXHJcbiAgLy90aGF0IGV4aXN0cyB3aXRoaW4gdGhlIHJvb20uXHJcbiAgcGFydGljbGVzX2Fycjogb2JqW10gPSBbXTtcclxuICBzdGF0ZTogVDtcclxuICBiaW5kczpudW1iZXJbXSA9IFtdO1xyXG4gIGdhbWU6Z2FtZTx1bmtub3duPjtcclxuICBodWQ6SFVEO1xyXG4gIGF1ZGlvID0gbmV3IGF1ZGlvKCk7XHJcbiAgLy9UaGVzZSB0ZXh0IG5vZGVzIGV4aXN0cyBpbiB0aGUgYWN0dWFsIHJvb20gc3BhY2UsIHJhdGhlciB0aGFuXHJcbiAgLy9vbiB0aGUgaHVkIGxheWVyLlxyXG4gIHRleHRfbm9kZXM6VGV4dFtdID0gW107XHJcbiAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+LGNvbmZpZzpzdGF0ZV9jb25maWcpe1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIGZvcihsZXQgYyBvZiBjb25maWcub2JqZWN0cyl7XHJcbiAgICAgIC8vVGhpcyBoYW5kbGVzIGxvYWRpbmcgb2JqZWN0cyBmcm9tIHRoZSBzYXZlZCBqc29uIGZpbGUgYXNzb2NpYXRlZCB3aXRoIGVhY2ggcm9vbS5cclxuICAgICAgdGhpcy5hZGRJdGVtU3RhdGVDb25maWcoYylcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0U3RhdGVDb25maWcoKXtcclxuICAgIGxldCBjb25maWc6c3RhdGVfY29uZmlnID0ge29iamVjdHM6W119O1xyXG4gICAgZm9yKGxldCBvIG9mIHRoaXMub2JqZWN0cy5maWx0ZXIoKG9iaik9Pm9iai5zYXZlX3RvX2ZpbGUpKXtcclxuICAgICAgICBpZighby5wYXJlbnQpe1xyXG4gICAgICAgIGNvbmZpZy5vYmplY3RzLnB1c2goe1xyXG4gICAgICAgICAgdHlwZTpvLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgICAgICBzdGF0ZTpvLnN0YXRlLFxyXG4gICAgICAgICAgcGFyYW1ldGVyczpvLnBhcmFtc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG4gIGxvYWQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IGEgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgbGV0IHRvX2F3YWl0ID0gdGhpcy5vYmplY3RzLm1hcCgoYSkgPT4gYS5sb2FkKCkpO1xyXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbCh0b19hd2FpdCk7XHJcbiAgICAgIGEuc3JjID0gdGhpcy5iYWNrZ3JvdW5kX3VybDtcclxuICAgICAgYS5vbmVycm9yID0gKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGxvYWRpbmcgdXJsOlwiICsgdGhpcy5iYWNrZ3JvdW5kX3VybCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIGEub25sb2FkID0gKGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIF90aGlzLmJhY2tncm91bmQgPSBhO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXVkaW8ubG9hZCgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICBhc3luYyBhZGRJdGVtU3RhdGVDb25maWcoY29uZmlnOm9iamVjdF9zdGF0ZV9jb25maWcpe1xyXG4gICAgaWYocHJlZmFic1tjb25maWcudHlwZV0pe1xyXG4gICAgICBsZXQgbmV3X29iaiA9IDxvYmo+KG5ldyBwcmVmYWJzW2NvbmZpZy50eXBlXShPYmplY3QuYXNzaWduKHt9LGNvbmZpZy5zdGF0ZSksY29uZmlnLnBhcmFtZXRlcnMpKTtcclxuICAgICAgdGhpcy5hZGRJdGVtcyhuZXdfb2JqLmNvbWJpbmVkT2JqZWN0cygpKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVU5LTk9XTiBUWVBFIEFUVEVNUFRFRCBUTyBMT0FEOiBcIiArIGNvbmZpZy50eXBlKVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBhZGRJdGVtKG86b2JqLCBsaXN0ID0gdGhpcy5vYmplY3RzKXtcclxuICAgIGF3YWl0IG8ubG9hZCgpO1xyXG4gICAgby5nYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgbGlzdC5wdXNoKG8pO1xyXG4gICAgaWYoREVCVUcgJiYgbGlzdCA9PT0gdGhpcy5vYmplY3RzKXtcclxuICAgICAgZGVidWdfdXBkYXRlX29ial9saXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGFkZEl0ZW1zKG86b2JqW10sIGxpc3QgPSB0aGlzLm9iamVjdHMpe1xyXG4gICAgZm9yKGxldCBvYiBvZiBvKXtcclxuICAgICAgb2IuZ2FtZSA9IHRoaXMuZ2FtZTtcclxuICAgIH1cclxuICAgIGF3YWl0IFByb21pc2UuYWxsKG8ubWFwKChhKT0+YS5sb2FkKCkpKTtcclxuICAgIGxpc3QucHVzaCguLi5vKTtcclxuICAgIGlmKERFQlVHICYmIGxpc3QgPT09IHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBkZWxldGVJdGVtKGlkOnN0cmluZywgbGlzdCA9IHRoaXMub2JqZWN0cyl7XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCBsaXN0Lmxlbmd0aDthKyspe1xyXG4gICAgICBpZihsaXN0W2FdLmlkID09PSBpZCl7XHJcbiAgICAgICAgbGlzdC5zcGxpY2UoYSwxKVxyXG4gICAgICAgIGEtLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoREVCVUcgJiYgbGlzdCA9PT0gdGhpcy5vYmplY3RzKXtcclxuICAgICAgZGVidWdfdXBkYXRlX29ial9saXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlZ2lzdGVyUGFydGljbGVzKCl7XHJcblxyXG4gIH1cclxuICBiaW5kQ29udHJvbChrZXk6c3RyaW5nLHg6ZXhlY190eXBlLGZ1bmM6Y29udHJvbF9mdW5jLGludGVydmFsOm51bWJlciA9IDEpe1xyXG4gICAgdGhpcy5iaW5kcy5wdXNoKEJpbmQoa2V5LGZ1bmMseCxpbnRlcnZhbCkpOyBcclxuICB9XHJcbiAgY2hlY2tDb2xsaXNpb25zKGJveDpjb2xsaXNpb25fYm94LGV4ZW1wdD86c3RyaW5nW10pOm9ialtde1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICByZW5kZXJfY29sbGlzaW9uX2JveChib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoZWNrX2FsbF9jb2xsaXNpb25zKGJveCx0aGlzLm9iamVjdHMsZXhlbXB0KTtcclxuICB9XHJcbiAgY2hlY2tPYmplY3RzKGJveDpjb2xsaXNpb25fYm94LGV4ZW1wdD86c3RyaW5nW10sbGlzdD10aGlzLm9iamVjdHMpe1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICByZW5kZXJfY29sbGlzaW9uX2JveChib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoZWNrX2FsbF9vYmplY3RzKGJveCxsaXN0LGV4ZW1wdCk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyQ29udHJvbHMoKXtcclxuXHJcbiAgfVxyXG4gIGNsZWFudXAoKXtcclxuXHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIGZvcihsZXQgcGFydGljbGUgb2YgdGhpcy5wYXJ0aWNsZXNfYXJyKXtcclxuICAgICAgcGFydGljbGUuc3RhdGVmKHRpbWUpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCB0ZXh0X25vZGUgb2YgdGhpcy50ZXh0X25vZGVzKXtcclxuICAgICAgdGV4dF9ub2RlLnN0YXRlZih0aW1lKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGhpcy5vYmplY3RzLmZpbHRlcigobyk9Pm8udGlja19zdGF0ZSkubGVuZ3RoOyBhKyspIHtcclxuICAgICAgdmVsb2NpdHlDb2xsaXNpb25DaGVjayh0aGlzLm9iamVjdHNbYV0sIHRoaXMub2JqZWN0cyk7XHJcbiAgICAgIHRoaXMub2JqZWN0c1thXS5zdGF0ZWYodGltZSk7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmdhbWUuc3RhdGUuY2FtZXJhcyl7XHJcbiAgICAgIGZvcihsZXQgY2FtZXJhcyBvZiB0aGlzLmdhbWUuc3RhdGUuY2FtZXJhcyl7XHJcbiAgICAgICAgaWYoY2FtZXJhcy5odWQpe1xyXG4gICAgICAgICAgY2FtZXJhcy5odWQuc3RhdGVmKHRpbWUpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgIH0gXHJcbiAgICB9XHJcbiAgfVxyXG4gIGVtaXRQYXJ0aWNsZShuYW1lOnN0cmluZyxwb3M6cG9zaXRpb24sbGlmZXRpbWU6bnVtYmVyLHBvc19yYW5nZTpudW1iZXIpe1xyXG4gICAgbGV0IHN0YXRlID0ge1xyXG4gICAgICBwb3NpdGlvbjpwb3MsXHJcbiAgICAgIHZlbG9jaXR5Ont4OjAseTowfSxcclxuICAgICAgcm90YXRpb246MCxcclxuICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX1cclxuICAgIH1cclxuICAgIHRoaXMuYWRkSXRlbShuZXcgUGFydGljbGUodGhpcy5wYXJ0aWNsZXNbbmFtZV0sc3RhdGUsbGlmZXRpbWUscG9zX3JhbmdlKSwgdGhpcy5wYXJ0aWNsZXNfYXJyKTtcclxuICB9XHJcbiAgZ2V0T2JqKGlkOnN0cmluZyl7XHJcbiAgICBmb3IobGV0IGEgPSAwOyBhIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgYSsrKXtcclxuICAgICAgaWYodGhpcy5vYmplY3RzW2FdLmlkID09IGlkKXtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RzW2FdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgZ2V0T2JqQnlUYWcodGFnOnN0cmluZyl7XHJcbiAgICByZXR1cm4gdGhpcy5vYmplY3RzLmZpbHRlcigoYSk9PmEudGFncy5pbmRleE9mKHRhZykgPiAtMSk7XHJcbiAgfVxyXG4gIHJlbmRlcmYodGltZTogbnVtYmVyKTogc3ByaXRlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNwcml0ZV9zaGVldDogdGhpcy5iYWNrZ3JvdW5kLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIHNwcml0ZV9oZWlnaHQ6IHRoaXMuYmFja2dyb3VuZC5oZWlnaHQsXHJcbiAgICAgIHNwcml0ZV93aWR0aDogdGhpcy5iYWNrZ3JvdW5kLndpZHRoLFxyXG4gICAgICBvcGFjaXR5OjFcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBvYmogfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgb2JqX3N0YXRlLCBwb3NpdGlvbiwgZGltZW5zaW9uc30gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHtnZXRSYW5kSW50fSBmcm9tIFwiLi9tYXRoXCI7XHJcbmltcG9ydCB7cGFydGljbGVfZW50cnl9IGZyb20gXCIuL3Jvb21cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugc3ByaXRle1xyXG4gIHNwcml0ZV9zaGVldDpIVE1MSW1hZ2VFbGVtZW50LFxyXG4gIGxlZnQ6bnVtYmVyLFxyXG4gIHRvcDpudW1iZXIsXHJcbiAgc3ByaXRlX3dpZHRoOm51bWJlcixcclxuICBzcHJpdGVfaGVpZ2h0Om51bWJlcixcclxuICBvcGFjaXR5Om51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHBvc2l0aW9uZWRfc3ByaXRle1xyXG4gIHNwcml0ZTpzcHJpdGUsXHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhcnRpY2xlX2kgZXh0ZW5kcyBvYmpfc3RhdGV7XHJcbiAgbGlmZXRpbWU6bnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFydGljbGUgZXh0ZW5kcyBvYmp7XHJcbiAgY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgcmFuZG9tX3JhbmdlOm51bWJlcjtcclxuICBtYXhfbGlmZXRpbWU6bnVtYmVyO1xyXG4gIHN0YXRlOlBhcnRpY2xlX2k7XHJcbiAgc2VsZWN0ZWRfc3ByaXRlOnNwcml0ZTtcclxuICBjb25zdHJ1Y3RvcihwYXJ0OnBhcnRpY2xlX2VudHJ5LHN0YXRlOm9ial9zdGF0ZSxsaWZldGltZTpudW1iZXIscmFuZG9tX3JhbmdlOm51bWJlcil7XHJcbiAgICBzdXBlcihzdGF0ZSk7XHJcbiAgICB0aGlzLnN0YXRlLmxpZmV0aW1lID0gMDtcclxuICAgIHRoaXMuc3ByaXRlX3VybCA9IHBhcnQuc3ByaXRlO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBwYXJ0LmhlaWdodDtcclxuICAgIHRoaXMud2lkdGggPSBwYXJ0LndpZHRoO1xyXG4gICAgdGhpcy5tYXhfbGlmZXRpbWUgPSBsaWZldGltZTtcclxuICAgIHRoaXMucmFuZG9tX3JhbmdlID0gcmFuZG9tX3JhbmdlO1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi54ICs9IGdldFJhbmRJbnQoLXJhbmRvbV9yYW5nZS8yLHJhbmRvbV9yYW5nZS8yKTtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSArPSBnZXRSYW5kSW50KC1yYW5kb21fcmFuZ2UvMixyYW5kb21fcmFuZ2UvMik7XHJcbiAgfVxyXG4gIGRlbGV0ZSgpe1xyXG4gICAgbGV0IHJvb20gPSB0aGlzLmdhbWUuZ2V0Um9vbSgpO1xyXG4gICAgcm9vbS5kZWxldGVJdGVtKHRoaXMuaWQscm9vbS5wYXJ0aWNsZXNfYXJyKTtcclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6bnVtYmVyKXtcclxuICAgIHRoaXMuc3RhdGUubGlmZXRpbWUgKz0gdGltZTtcclxuICAgIGlmKHRoaXMuc3RhdGUubGlmZXRpbWUgPiB0aGlzLm1heF9saWZldGltZSl7XHJcbiAgICAgIHRoaXMuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcmYodGltZTpudW1iZXIpOnBvc2l0aW9uZWRfc3ByaXRle1xyXG4gICAgaWYoIXRoaXMuc2VsZWN0ZWRfc3ByaXRlKXtcclxuICAgICAgbGV0IHNwcml0ZXMgPSBzcHJpdGVfZ2VuKHRoaXMuc3ByaXRlX3NoZWV0LHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgIGxldCByYW5kb21fcm93ID0gZ2V0UmFuZEludCgwLHNwcml0ZXMubGVuZ3RoKTtcclxuICAgICAgbGV0IHJhbmRvbV9jb2wgPSBnZXRSYW5kSW50KDAsc3ByaXRlc1tyYW5kb21fcm93XS5sZW5ndGgpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkX3Nwcml0ZSA9IHNwcml0ZXNbcmFuZG9tX3Jvd11bcmFuZG9tX2NvbF07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkX3Nwcml0ZS5vcGFjaXR5ID0gMSAtIHRoaXMuc3RhdGUubGlmZXRpbWUvdGhpcy5tYXhfbGlmZXRpbWU7XHJcbiAgICByZXR1cm57XHJcbiAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICB5OnRoaXMuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgc3ByaXRlOnRoaXMuc2VsZWN0ZWRfc3ByaXRlIFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwcml0ZV9nZW4oc3ByaXRlX3NoZWV0OkhUTUxJbWFnZUVsZW1lbnQsc3ByaXRlX3dpZHRoOm51bWJlcixzcHJpdGVfaGVpZ2h0Om51bWJlcik6QXJyYXk8QXJyYXk8c3ByaXRlPj57XHJcbiAgbGV0IHdpZHRoID0gc3ByaXRlX3NoZWV0LndpZHRoO1xyXG4gIGxldCBoZWlnaHQgPSBzcHJpdGVfc2hlZXQuaGVpZ2h0O1xyXG4gIGxldCBzcHJpdGVzOkFycmF5PEFycmF5PHNwcml0ZT4+ID0gW107XHJcbiAgZm9yKGxldCBiID0gMDsgYiA8IGhlaWdodDtiICs9IHNwcml0ZV9oZWlnaHQpe1xyXG4gICAgc3ByaXRlcy5wdXNoKFtdKTtcclxuICAgIGZvcihsZXQgYSA9IDA7IGEgPCB3aWR0aDthICs9IHNwcml0ZV93aWR0aCl7XHJcbiAgICAgIHNwcml0ZXNbYl0ucHVzaCh7XHJcbiAgICAgICAgc3ByaXRlX3NoZWV0LFxyXG4gICAgICAgIGxlZnQ6YSxcclxuICAgICAgICB0b3A6YiAqIHNwcml0ZV9oZWlnaHQsXHJcbiAgICAgICAgc3ByaXRlX2hlaWdodCxcclxuICAgICAgICBzcHJpdGVfd2lkdGgsXHJcbiAgICAgICAgb3BhY2l0eToxXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzcHJpdGVzO1xyXG59XHJcblxyXG4iLCJleHBvcnQgbGV0IERFQlVHID0gdHJ1ZTtcclxuZXhwb3J0IGxldCBQQVVTRUQgPSB0cnVlO1xyXG5pbXBvcnQgeyBvYmosIHBhcmFtcyB9IGZyb20gXCIuL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgb2JqX3N0YXRlLCBwb3NpdGlvbiB9IGZyb20gXCIuL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyByb29tIH0gZnJvbSBcIi4vbGliL3Jvb21cIjtcclxuaW1wb3J0IHsgcG9zaXRpb25lZF9zcHJpdGUsIHNwcml0ZSB9IGZyb20gXCIuL2xpYi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgY29sbGlzaW9uX2JveCB9IGZyb20gXCIuL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgc3ByaXRlX3JlbmRlcmVyLCByZWN0X3JlbmRlcmVyLCBzdHJva2VkX3JlY3RfcmVuZGVyZXIsIGh1ZF90ZXh0X3JlbmRlcmVyLCBDYW1lcmEsIHRleHRfcmVuZGVyZXIgfSBmcm9tIFwiLi9saWIvcmVuZGVyXCI7XHJcbmltcG9ydCB7IEhVRCB9IGZyb20gXCIuL2xpYi9odWRcIjtcclxuaW1wb3J0IHsgRXhlY3V0ZVJlcGVhdEJpbmRzLCBkZWJ1Z19iaW5kcywgYnR5cGUsIGV4ZWNfdHlwZSwgUG9sbF9Nb3VzZSwgQmluZCwgaGVsZF9rZXlzLCBVbmJpbmQgfSBmcm9tIFwiLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgRGlzdGFuY2UgfSBmcm9tIFwiLi9saWIvbWF0aFwiO1xyXG5pbXBvcnQgeyBpbml0X2NsaWNrX2hhbmRsZXIgfSBmcm9tIFwiLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgZGVidWdfc3RhdGUsIGRlYnVnX3VwZGF0ZV9yb29tX2xpc3QsIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCwgZGVidWdfc3RhdGVmLCBkZWJ1Z19zZXR1cCwgZGVidWdfdXBkYXRlX3ByZWZhYnMsIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQsIERlYnVnX2h1ZCB9IGZyb20gXCIuL2xpYi9kZWJ1Z1wiO1xyXG5pbXBvcnQgeyByb29tcyBhcyByb29tX2xpc3QgfSBmcm9tIFwiLi9nYW1lL3Jvb21zL3Jvb21zXCI7XHJcbmxldCB7IGlwY1JlbmRlcmVyIH0gPSB3aW5kb3cucmVxdWlyZShcImVsZWN0cm9uXCIpO1xyXG5jb25zdCBwYXRoID0gd2luZG93LnJlcXVpcmUoXCJwYXRoXCIpO1xyXG5sZXQgZnMgPSB3aW5kb3cucmVxdWlyZShcImZzXCIpO1xyXG5leHBvcnQgbGV0IHByb2plY3RfcGF0aCA9IGlwY1JlbmRlcmVyLnNlbmRTeW5jKCdwYXRoLXJlcXVlc3QnLCAncGluZycpWzBdO1xyXG5cclxubGV0IGNhbnZhc19lbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5sZXQgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzX2VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuXHJcbmxldCBzY3JlZW5fd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxubGV0IHNjcmVlbl9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5sZXQgdndpZHRoID0gY2FudmFzX2VsZW1lbnQud2lkdGg7XHJcbmxldCB2aGVpZ2h0ID0gY2FudmFzX2VsZW1lbnQuaGVpZ2h0O1xyXG5cclxuaW1wb3J0IHsgZyB9IGZyb20gXCIuL2dhbWUvbWFpblwiO1xyXG5cclxuXHJcbi8vSG93IG9mdGVuIHRoZSBnYW1lIGxvZ2ljIGxvb3Agc2hvdWxkIHJ1biwgaW4gbWlsbGlzZWNvbmRzXHJcbmxldCBsb2dpY19sb29wX2ludGVydmFsOiBudW1iZXIgPSAxMDAwIC8gNjA7XHJcblxyXG5sZXQgbGFzdF90aW1lID0gbmV3IERhdGUoKTtcclxuXHJcbmxldCBsYXN0X3JlbmRlcl90aW1lID0gMDtcclxuXHJcbmludGVyZmFjZSBkaW1lbnNpb25zIHtcclxuICBoZWlnaHQ6IG51bWJlcixcclxuICB3aWR0aDogbnVtYmVyXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0U2NyZWVuRGltZW5zaW9ucygpOiBkaW1lbnNpb25zIHtcclxuICByZXR1cm4gKHtcclxuICAgIHdpZHRoOiBzY3JlZW5fd2lkdGgsXHJcbiAgICBoZWlnaHQ6IHNjcmVlbl9oZWlnaHRcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Vmlld3BvcnREaW1lbnNpb25zKCk6IGRpbWVuc2lvbnMge1xyXG4gIHJldHVybiAoe1xyXG4gICAgaGVpZ2h0OiBjYW52YXNfZWxlbWVudC5oZWlnaHQsXHJcbiAgICB3aWR0aDogY2FudmFzX2VsZW1lbnQud2lkdGhcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHZpZXdwb3J0ID0ge1xyXG4gIGhlaWdodDogR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0LFxyXG4gIHdpZHRoOiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aFxyXG59XHJcblxyXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgdmlld3BvcnQuaGVpZ2h0ID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0XHJcbiAgdmlld3BvcnQud2lkdGggPSBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVidWcoeDogYm9vbGVhbikge1xyXG4gIERFQlVHID0geDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBhdXNlZCh4OiBib29sZWFuKSB7XHJcbiAgUEFVU0VEID0geDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlcl9jb2xsaXNpb25fYm94ID0gKGE6IGNvbGxpc2lvbl9ib3gpID0+IHtcclxuICBib3hlcy5wdXNoKGEpO1xyXG59XHJcblxyXG5sZXQgYm94ZXM6IEFycmF5PGNvbGxpc2lvbl9ib3g+ID0gW107XHJcblxyXG5leHBvcnQgbGV0IGRlZXAgPSAoYTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYSkpO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgZ2FtZV9zdGF0ZTxUPiB7XHJcbiAgbG9naWM6IG51bWJlcixcclxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgY3VycmVudF9yb29tOiByb29tPHVua25vd24+LFxyXG4gIGNhbWVyYXM6IEFycmF5PENhbWVyYT4sXHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcclxuICBnbG9iYWxzOiBUXHJcbn1cclxuXHJcblxyXG5leHBvcnQgbGV0IHJvb21zOiBhbnlbXSA9IFtdO1xyXG5leHBvcnQgbGV0IG9iamVjdHM6IGFueVtdO1xyXG5cclxuZXhwb3J0IGNsYXNzIGdhbWU8VD57XHJcbiAgc3RhdGU6IGdhbWVfc3RhdGU8VD47XHJcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIC8vVGhlIG9mZnNjcmVlbiBjYW52YXMgYW5kIGNvbnRleHQgYXJlIHVzZWQgaW4gcmVuZGVyaW5nIG11bHRpcGxlIENhbWVyYXNcclxuICAvL1RoZSBjb250ZW50cyBhcmUgcmVuZGVyZWQgdG8gdGhlIG9mZnNjcmVlbiBjYW52YXMsIHRoZW4gY29waWVkIHRvIHRoZSBcclxuICAvL29uc2NyZWVuIGNhbnZhcywgaW4gdGhlIHByb3BlciBwb3NpdGlvbiBpbiB0aGUgdmlld3BvcnRcclxuICBvZmZzY3JlZW5fY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBvZmZzY3JlZW5fY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIHByb3RvdHlwZXM6IEFycmF5PG9iaj4gPSBbXTtcclxuICByb29tczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIGlzUmVuZGVyaW5nID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGluaXRfc3RhdGU6IFQpIHtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhbnZhczogY2FudmFzX2VsZW1lbnQsXHJcbiAgICAgIGxvZ2ljOiB1bmRlZmluZWQsXHJcbiAgICAgIGNvbnRleHQ6IGN0eCxcclxuICAgICAgY2FtZXJhczogW1xyXG4gICAgICBdLFxyXG4gICAgICBjdXJyZW50X3Jvb206IHVuZGVmaW5lZCxcclxuICAgICAgZ2xvYmFsczogaW5pdF9zdGF0ZVxyXG4gICAgfVxyXG4gICAgdGhpcy5vZmZzY3JlZW5fY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIHRoaXMub2Zmc2NyZWVuX2NvbnRleHQgPSB0aGlzLm9mZnNjcmVlbl9jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgLy9ERUJVRyBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdhbWUgaXMgcnVubmluZyB3aXRoaW4gdGhlIGVkaXRvclxyXG4gICAgaWYgKERFQlVHKSB7XHJcbiAgICAgIC8vU2V0cyB1cCBzb21lIGdsb2JhbCBkZWJ1ZyBzdGF0ZSBhbmQgdGhlIGVkaXRvciBrZXliaW5kaW5nc1xyXG4gICAgICBkZWJ1Z19zZXR1cCgpO1xyXG4gICAgICAvL0luaXRpYWxpemVzIGEgc2VwYXJhdGUgbG9naWMgbG9vcCBzb2xlbHkgZm9yIHRoZSBlZGl0b3JcclxuICAgICAgLy9UaGlzIHNlcGFyYXRpb24gYWxsb3dzIGZvciB0aGUgZWRpdG9yIHRvIGludGVyYWN0IHdpdGggdGhlIGVudmlyb25tZW50IHdoaWxlXHJcbiAgICAgIC8vdGhlIGFjdHVhbCByb29tJ3Mgc3RhdGUgbG9vcCBpcyBwYXVzZWQuXHJcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5nZXRSb29tKCkpIHtcclxuICAgICAgICAgIC8vVGhpcyBmdW5jdGlvbnMgaGFuZGxlcyB0aGUgZWRpdG9yIGludGVyYWN0aW9ucyB3aXRoIHRoZSBnYW1lIGVudmlyb25tZW50XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZWYoMTYuNjYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTYuNjYpXHJcbiAgICB9XHJcbiAgICAvL0NyZWF0ZXMgYSBvbmNsaWNrIGZ1bmN0aW9uIG9uIHRoZSB3aW5kb3cgdGhhdCBoYW5kbGVzIGVsZW1lbnQgb25jbGljayBmdW5jdGlvbnNcclxuICAgIGluaXRfY2xpY2tfaGFuZGxlcih0aGlzKTtcclxuICB9XHJcbiAgcmVuZGVyKHQ6IG51bWJlcikge1xyXG4gICAgLy90IGlzIGN1cnJlbnQgcmVuZGVyIHRpbWVcclxuICAgIGxldCBkZWx0YV90aW1lID0gdCAtIGxhc3RfcmVuZGVyX3RpbWVcclxuICAgIGxhc3RfcmVuZGVyX3RpbWUgPSB0O1xyXG4gICAgbGV0IGFsbF9jYW1lcmFzID0gdGhpcy5zdGF0ZS5jYW1lcmFzO1xyXG4gICAgbGV0IGVkaXRvcl9jYW1lcmFfaW5kZXggPSAtMTtcclxuICAgIGlmIChERUJVRykge1xyXG4gICAgICBhbGxfY2FtZXJhcyA9IFsuLi5hbGxfY2FtZXJhcywgZGVidWdfc3RhdGUuY2FtZXJhXVxyXG4gICAgICBlZGl0b3JfY2FtZXJhX2luZGV4ID0gYWxsX2NhbWVyYXMubGVuZ3RoIC0gMTtcclxuICAgICAgLy9UaGUgZWRpdG9yIGNhbWVyYSBpcyBhbHdheXMgdGhlIGxhc3QgY2FtZXJhIGluc2lkZSB0aGUgY2FtZXJhcyBhcnJheVxyXG4gICAgICAvL3RoZSBlZGl0b3IgY2FtZXJhIGlzIHJlbmRlcmVkIHRvIGEgZGlmZmVyZW50IGNhbnZhcyB0aGFuIHRoZSBtYWluIGdhbWUgY2FudmFzXHJcbiAgICAgIC8vc28gd2UgdXNlIHRoZSBjYW1lcmEncyBpbmRleCB0byBjaGVjayB3aGF0IGNhbnZhcyB0byByZW5kZXIgdG9cclxuICAgIH1cclxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYWxsX2NhbWVyYXMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgbGV0IGNhbWVyYSA9IGFsbF9jYW1lcmFzW2FdO1xyXG4gICAgICAvL1dlIHJlbmRlciB0aGUgY2FtZXJhcyBjb250ZW50cyB0byBhbiBvZmZzY3JlZW4gY2FudmFzLCB0aGVuIGNvcHkgaXRzIGNvbnRlbnRzXHJcbiAgICAgIC8vdG8gdGhlIG1haW4gY2FudmFzLlxyXG4gICAgICAvL1RoaXMgYWxsb3dzIHVzIHRvIGF2b2lkIGFueSBtYXRoIG5lZWRlZCB0byBkZXRlcm1pbmUgc3ByaXRlcyB0aGF0IGFyZSBwYXJ0aWFsbHkgb2Zmc2NyZWVuXHJcbiAgICAgIC8vYXMgYW55IG9mZnNjcmVlbiBzZWN0aW9ucyBvZiB0aGUgc3ByaXRlcyB3aWxsIG5vdCBiZSBjb3BpZWQgb3ZlciwgcmF0aGVyIHRoYW4gZXhwbGljaXRseSBcclxuICAgICAgLy9jYWxjdWxhdGluZyB0aGUgY3V0b2Zmc1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jYW52YXMuaGVpZ2h0ID0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0O1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jYW52YXMud2lkdGggPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aDtcclxuICAgICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgsIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCk7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoLCBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQpO1xyXG4gICAgICAvL1RoaXMgY29sbGlzaW9uIGJveCByZXByZXNlbnRzIHRoZSBjYW1lcmEncyBmaWVsZCBvZiB2aWV3IGluIHRoZSBnYW1lIHNwYWNlXHJcbiAgICAgIC8vV2UgdXNlIHRoZSByb29tJ3MgY2hlY2tPYmplY3RzIGZ1bmN0aW9uIHRvIGZpbmQgYW55IG9iamVjdCB0aGF0IGV4aXN0cyB3aXRoaW4gdGhpcyBhcmVhXHJcbiAgICAgIC8vVGhlc2Ugb2JqZWN0cyBhcmUgdGhlIG9iamVjdHMgdGhhdCBuZWVkIHRvIGJlIHJlbmRlcmVkIGZvciB0aGlzIGNhbWVyYVxyXG4gICAgICBsZXQgY2FtZXJhX2JveCA9IHtcclxuICAgICAgICB4OiBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OiBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDogY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMSAvIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKSxcclxuICAgICAgICBoZWlnaHQ6IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxIC8gY2FtZXJhLnN0YXRlLnNjYWxpbmcpXHJcbiAgICAgIH07XHJcbiAgICAgIC8vTGlzdCBvZiBhbGwgcGFydGljbGVzIHdpdGhpbiB0aGUgY2FtZXJhJ3MgZm92XHJcbiAgICAgIGxldCBwYXJ0aWNsZV9jb2xsaWRlcyA9IHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmNoZWNrT2JqZWN0cyhjYW1lcmFfYm94LCBbXSwgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ucGFydGljbGVzX2Fycik7XHJcbiAgICAgIC8vTGlzdCBvZiBhbGwgb2JqZWN0cyB3aXRoaW4gdGhlIGNhbWVyYSdzIGZvdlxyXG4gICAgICBsZXQgY2FtZXJhX2NvbGxpZGVycyA9IFsuLi50aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5jaGVja09iamVjdHMoY2FtZXJhX2JveCksIC4uLnBhcnRpY2xlX2NvbGxpZGVzXTtcclxuXHJcbiAgICAgIGxldCByZW5kZXJfYXJncyA9IHtcclxuICAgICAgICBjb250ZXh0OiB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LFxyXG4gICAgICAgIGNhbWVyYTogY2FtZXJhLFxyXG4gICAgICB9O1xyXG4gICAgICAvL1JlbmRlcnMgdGhlIHJvb20ncyBiYWNrZ3JvdW5kLlxyXG4gICAgICBzcHJpdGVfcmVuZGVyZXIocmVuZGVyX2FyZ3MsIHtcclxuICAgICAgICBzcHJpdGU6IHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnJlbmRlcmYoZGVsdGFfdGltZSksXHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIC8vQXJyYXkgb2YgaGl0Ym94ZXMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgcm9vbVxyXG4gICAgICBsZXQgaGl0Ym94ZXM6IGNvbGxpc2lvbl9ib3hbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBhIG9mIGNhbWVyYV9jb2xsaWRlcnMuZmlsdGVyKChiKSA9PiBiLnJlbmRlcikuc29ydCgoYSwgYikgPT4gKGEubGF5ZXIgLSBiLmxheWVyKSkpIHtcclxuICAgICAgICBsZXQgcmVuZGVyZWQgPSBhLnJlbmRlclRyYWNrKHQpO1xyXG5cclxuICAgICAgICAvL09iamVjdHMgY2FuIHJldHVybiBlaXRoZXIgYSBzcHJpdGUsIG9yIGFuIGFycmF5IG9mIHNwcml0ZXMgdG8gc2ltcGxpZnkgdGhlIEFQSVxyXG4gICAgICAgIC8vRm9yIHRoZSB1c2VyLCBhbmQgZm9yIHVzZSBpbiBjb21wb3NpdGUgb2JqZWN0cyhvYmplY3QgdGhhdCBidW5kbGVzIG90aGVyIG9iamVjdHMgdG9nZXRoZXIpXHJcbiAgICAgICAgLy9JbnRlcm5hbGx5LCB3ZSBjb252ZXJ0IGFueSBzaW5nbGUgc3ByaXRlIGludG8gYW4gYXJyYXkgb2Ygb25lIHNwcml0ZS5cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IHBvc2l0aW9uZWRfc3ByaXRlIG9mIHJlbmRlcmVkKVxyXG4gICAgICAgICAgc3ByaXRlX3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICAgIHNwcml0ZTogcG9zaXRpb25lZF9zcHJpdGUuc3ByaXRlLFxyXG4gICAgICAgICAgICB4OiBwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICB5OiBwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgICAgICByb3RhdGlvbjogYS5zdGF0ZS5yb3RhdGlvbixcclxuICAgICAgICAgICAgc2NhbGU6IGEuc3RhdGUuc2NhbGluZ1xyXG4gICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvL0hpdGJveGVzIGFyZSByZW5kZXJlZCBsYXRlIGluIHRoZSByZW5kZXIgbG9vcCwgdG8gZW5zdXJlIG9iamVjdHMgZG9uJ3Qgb3ZlcmxhcCB0aGVtXHJcbiAgICAgICAgLy9BcyB3ZSByZW5kZXIgb2JqZWN0cywgd2UgYWRkIHRoZWlyIGhpdGJveGVzIHRvIHRoaXMgbGlzdFxyXG4gICAgICAgIGlmIChERUJVRyAmJiBhLmNvbGxpc2lvbikge1xyXG4gICAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5hLmdldEFsbENvbGxpc2lvbkJveGVzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL1RoaXMgaXMgYSBzcGVjaWFsIGNsYXNzIG9mIG9iamVjdCB0aGF0IGV4aXN0cyBpbiB0aGUgZ2FtZSB3b3JsZFxyXG4gICAgICBmb3IgKGxldCBub2RlIG9mIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnRleHRfbm9kZXMpIHtcclxuICAgICAgICB0ZXh0X3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICB4OiBub2RlLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICB5OiBub2RlLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICBmb250OiBub2RlLnJlbmRlcmYodClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2FtZXJhLmh1ZCkge1xyXG4gICAgICAgIGxldCBncmFwaGljcyA9IGNhbWVyYS5odWQuZ3JhcGhpY19lbGVtZW50cztcclxuICAgICAgICBsZXQgdGV4dF9lbGVtZW50cyA9IGNhbWVyYS5odWQudGV4dF9lbGVtZW50cztcclxuICAgICAgICAvL1JlbmRlcnMgc3RhdGljIGdyYXBoaWNzIHRoYXQgYXJlIGEgcGFydCBvZiB0aGUgaHVkXHJcbiAgICAgICAgZm9yIChsZXQgZ3JhcGhpYyBvZiBncmFwaGljcykge1xyXG4gICAgICAgICAgbGV0IHJlbmRlcmVkID0gZ3JhcGhpYy5yZW5kZXJUcmFjayh0KTtcclxuICAgICAgICAgIGlmIChncmFwaGljLnJlbmRlcikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbmVkX3Nwcml0ZSBvZiByZW5kZXJlZCkge1xyXG4gICAgICAgICAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlOiBwb3NpdGlvbmVkX3Nwcml0ZS5zcHJpdGUsXHJcbiAgICAgICAgICAgICAgICB4OiBwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICAgICAgeTogcG9zaXRpb25lZF9zcHJpdGUueSxcclxuICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBncmFwaGljLnN0YXRlLnJvdGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IGdyYXBoaWMuc3RhdGUuc2NhbGluZ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHRleHQgb2YgdGV4dF9lbGVtZW50cykge1xyXG4gICAgICAgICAgaHVkX3RleHRfcmVuZGVyZXIocmVuZGVyX2FyZ3MsIHtcclxuICAgICAgICAgICAgeDogdGV4dC5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiB0ZXh0LnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIGZvbnQ6IHRleHQucmVuZGVyZih0KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy9JZiBhIGNhbWVyYSBpcyBtYXJrZWQgYXMgYSBkZWJ1ZyBjYW1lcmEsIHdlIHJlbmRlciB0aGVcclxuICAgICAgLy8gIGhpdGJveGVzLCBhbmQgcG90ZW50aWFsbHkgdXBkYXRlIHRoZSBlZGl0b3JcclxuICAgICAgaWYgKGNhbWVyYS5zdGF0ZS5kZWJ1Zykge1xyXG4gICAgICAgIGxldCBib3g6IGNvbGxpc2lvbl9ib3g7XHJcbiAgICAgICAgbGV0IGJveGVzX2NvcHkgPSBbLi4uYm94ZXNdXHJcbiAgICAgICAgd2hpbGUgKGJveGVzX2NvcHkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGV0IGJveCA9IGJveGVzX2NvcHkucG9wKCk7XHJcbiAgICAgICAgICBsZXQgcmVjdCA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IGJveC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBib3guaGVpZ2h0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHJva2VkX3JlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCwgcmVjdCwgYm94LngsIGJveC55LCBcIiNGRjAwMDBcIiwgMSwgY2FtZXJhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGhpdGJveGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGxldCBib3ggPSBoaXRib3hlcy5wb3AoKTtcclxuICAgICAgICAgIGxldCByZWN0ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogYm94LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LCByZWN0LCBib3gueCwgYm94LnksIFwiIzAwODAwMFwiLCAxLCBjYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0RyYXdzIGEgc3BlY2lhbCBib3ggYXJvdW5kIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZWxlbWVudFxyXG4gICAgICAgIC8vaW5zaWRlIHRoZSBlZGl0b3IgVUlcclxuICAgICAgICBpZiAoREVCVUcgJiYgZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50KSB7XHJcbiAgICAgICAgICBsZXQgY29sbCA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudC5nZXRGdWxsQ29sbGlzaW9uQm94KCk7XHJcbiAgICAgICAgICByZWN0X3JlbmRlcmVyKHRoaXMub2Zmc2NyZWVuX2NvbnRleHQsIHsgd2lkdGg6IDI1LCBoZWlnaHQ6IDI1IH0sIGNvbGwueCwgY29sbC55LCBcInNreWJsdWVcIiwgMTAsIGNhbWVyYSk7XHJcbiAgICAgICAgICBzdHJva2VkX3JlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCwgY29sbCwgY29sbC54LCBjb2xsLnksIFwiYmx1ZVwiLCAxLCBjYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL1NlcGFyYXRlIGNhbnZhcyBmb3IgdGhlIGVkaXRvciBjYW1lcmFcclxuICAgICAgaWYgKGEgIT09IGVkaXRvcl9jYW1lcmFfaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMub2Zmc2NyZWVuX2NhbnZhcywgY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngsIGNhbWVyYS5zdGF0ZS52aWV3cG9ydC55KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBkZWJ1Z19zdGF0ZS50YXJnZXQuZ2V0Q29udGV4dChcIjJkXCIpLmRyYXdJbWFnZSh0aGlzLm9mZnNjcmVlbl9jYW52YXMsIGNhbWVyYS5zdGF0ZS52aWV3cG9ydC54LCBjYW1lcmEuc3RhdGUudmlld3BvcnQueSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChERUJVRylcclxuICAgICAgYm94ZXMgPSBbXTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoYSkgPT4geyB0aGlzLnJlbmRlcihhKSB9KTtcclxuICB9XHJcbiAgc3RhcnRfbG9naWMoYTogbnVtYmVyKSB7XHJcbiAgICAvL3RoaXMgaXMgdGhlIHJvb20ncyBzdGF0ZSBsb29wXHJcbiAgICByZXR1cm4gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKCFQQVVTRUQpIHtcclxuICAgICAgICBsZXQgbmV3X3RpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCB0aW1lX3NpbmNlID0gbmV3X3RpbWUuZ2V0VGltZSgpIC0gbGFzdF90aW1lLmdldFRpbWUoKTtcclxuICAgICAgICBsYXN0X3RpbWUgPSBuZXdfdGltZTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20pIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnN0YXRlZih0aW1lX3NpbmNlKTtcclxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5odWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uaHVkLnN0YXRlZih0aW1lX3NpbmNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy9UaGlzIGZ1bmN0aW9ucyBoYW5kbGVzIGJpbmRzIHRoYXQgb2NjdXIgb24gYW4gaW50ZXJ2YWxcclxuICAgICAgRXhlY3V0ZVJlcGVhdEJpbmRzKGEpO1xyXG4gICAgfSwgYSk7XHJcbiAgfVxyXG4gIGdldFJvb20oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb207XHJcbiAgfVxyXG4gIGFzeW5jIGxvYWRSb29tU3RyaW5nKHg6IHN0cmluZykge1xyXG4gICAgLy9yb29tIGxpc3QgaXMgYSBvYmplY3QgdGhhdCBjb250YWlucyBlYWNoIHJvb20ncyBjbGFzcyxcclxuICAgIC8vd2l0aCB0aGUgcm9vbSdzIG5hbWUgYXMgdGhlIGtleSBmb3IgY2xhc3NcclxuICAgIC8vVGhpcyBvYmplY3QgaXMgcG9wdWxhdGVkIGF0IGNvbXBpbGUgdGltZVxyXG4gICAgZm9yIChsZXQgYSBvZiBPYmplY3Qua2V5cyhyb29tX2xpc3QpKSB7XHJcbiAgICAgIGlmIChhID09IHgpIHtcclxuICAgICAgICAvL3RoaXMgaXNuJ3QgcGFydGljdWxhcmx5IHR5cGUtc2FmZS5cclxuICAgICAgICBsZXQgbmV3X3Jvb20gPSA8cm9vbTx7fT4+bmV3IHJvb21fbGlzdFthXSh0aGlzKVxyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFJvb20obmV3X3Jvb20pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkUm9vbSh4OiByb29tPHVua25vd24+KSB7XHJcbiAgICAvL0NsZWFycyB0aGUgcm9vbSdzIGxvZ2ljIGxvb3AgaWYgb25lXHJcbiAgICAvL1dhcyBhbHJlYWR5IHJ1bm5pbmdcclxuICAgIGlmICh0aGlzLnN0YXRlLmxvZ2ljKSB7XHJcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuc3RhdGUubG9naWMpO1xyXG4gICAgfVxyXG4gICAgLy9UaGlzIHJlZmVyZW5jZSBpcyB1c2VkIGR1cmluZyBpbml0aWFsaXphdGlvblxyXG4gICAgeC5nYW1lID0gdGhpcztcclxuICAgIC8vRGVsZXRlcyBlYWNoIG9iamVjdCBpbiB0aGUgcm9vbSAod2hpY2ggYWxzbyB1bmJpbmRzIHRoZWlyIGJpbmRzKSxcclxuICAgIC8vYW5kIHVuYmluZHMgdGhlIHJvb20ncyBiaW5kaW5ncy5cclxuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHdoaWxlICh0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5vYmplY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5vYmplY3RzWzBdLmRlbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGlkIG9mIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmJpbmRzKSB7XHJcbiAgICAgICAgVW5iaW5kKGlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IG5ld19yb29tID0gYXdhaXQgeC5sb2FkKCk7XHJcbiAgICB4LnJlZ2lzdGVyQ29udHJvbHMoKTtcclxuICAgIHgucmVnaXN0ZXJQYXJ0aWNsZXMoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlLmxvZ2ljID0gdGhpcy5zdGFydF9sb2dpYyhsb2dpY19sb29wX2ludGVydmFsKVxyXG4gICAgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20gPSB4O1xyXG4gICAgaWYgKERFQlVHKSB7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9yb29tX2xpc3QoKTtcclxuICAgICAgZGVidWdfdXBkYXRlX3ByZWZhYnMoKTtcclxuICAgICAgZGVidWdfdXBkYXRlX29ial9saXN0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICghdGhpcy5pc1JlbmRlcmluZykge1xyXG4gICAgICAvL1RoaXMgc3RhcnRzIHRoZSByZW5kZXIgbG9vcCBmb3IgdGhlIHJvb21cclxuICAgICAgdGhpcy5yZW5kZXIoMCk7XHJcbiAgICAgIHRoaXMuaXNSZW5kZXJpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9