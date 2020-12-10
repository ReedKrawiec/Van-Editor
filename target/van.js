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
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
const render_1 = __webpack_require__(/*! ../../lib/render */ "./src/lib/render.ts");
const controls_1 = __webpack_require__(/*! ../../lib/controls */ "./src/lib/controls.ts");
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
function Poll_Mouse(camera, canvas = main_1.g.state.canvas) {
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
            old: JSON.stringify(ele.rotation)
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
                            old: JSON.stringify(clicked.scaling),
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
                        old: JSON.stringify(exports.debug_state.rotation_element.rotation),
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
exports.gravity_obj = exports.static_obj = exports.composite_obj = exports.obj = exports.rotation_length = void 0;
const render_1 = __webpack_require__(/*! ./render */ "./src/lib/render.ts");
const controls_1 = __webpack_require__(/*! ./controls */ "./src/lib/controls.ts");
const audio_1 = __webpack_require__(/*! ./audio */ "./src/lib/audio.ts");
const math_1 = __webpack_require__(/*! ./math */ "./src/lib/math.ts");
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
        this.rotation = 0;
        this.render = true;
        this.animations = new animations();
        this.audio = new audio_1.audio();
        //Last render time, used to calculate delta_time
        this.last_render = 0;
        //Scales the object vertically and horizontally
        //Updates the sprite of the object, and its hitbox
        this.scaling = {
            height: 1,
            width: 1
        };
        //Params are options for the object, that do not rely on state
        // For example, the side of a piece in chess.
        this.params = {};
        this.layer = 1;
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
        let st = this.state;
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
    //Internal method that keeps track of 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0Jpc2hvcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0NvbnRyb2xsZWRQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9DdXJzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9Eb29yLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvR29vbWJhLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvR3VuLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvS2luZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0tuaWdodC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL01vdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9QYXduLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvUXVlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9Sb29rLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvVmVydEJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL2Fic3RyYWN0L3BpZWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvYWJzdHJhY3QvcGxhdGZvcm1lcl9vYmoudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9idWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9wcmVmYWJzLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL092ZXJ3b3JsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9yb29tcy9VbmRlcndvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL3Jvb21zLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYXVkaW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb250cm9scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2RlYnVnLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvaHVkLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvbWF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL29iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JlbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNB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LE1BQU0sQ0FBQyxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUpMLGVBQVUsR0FBRyxzQkFBc0I7UUFLakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsa0JBQVUsQ0FBQyxNQUFNLENBQUM7SUFDdEMsQ0FBQztJQUNELFlBQVk7UUFDVixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxRQUFRLEdBQW1CLEVBQUUsQ0FBQztRQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUM3QyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUss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QUFDLElBQUksQ0FBQyxLQUFLO1lBQ2YsV0FBVyxFQUFDLEVBQUU7WUFDZCxXQUFXLEVBQUMsRUFBRTtZQUNkLFFBQVEsRUFBQyxTQUFTO1lBQ2xCLDBCQUEwQixFQUFDLFNBQVM7WUFDcEMsT0FBTyxFQUFDLEVBQUU7WUFDVixNQUFNLEVBQUMsRUFBRTtZQUNULFFBQVEsRUFBQyxFQUFFO1lBQ1gsUUFBUSxFQUFDLEtBQUs7U0FDZixDQUFDO1FBQ0YsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLFdBQUksQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxlQUFNLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksZUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLGFBQUssQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxXQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksZUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLGVBQU0sQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxXQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOWUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLFdBQUksQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxlQUFNLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksZUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLGFBQUssQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxXQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksZUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLGVBQU0sQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxXQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOWUsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDaEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxXQUFJLENBQUMsZUFBZSxDQUFD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LENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFJLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0ksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1RSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7SUFDbEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNwQixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDekQ7U0FDSTtRQUNILENBQUMsQ0FBQyxPQUFPLENBQUMs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QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDN0M7Z0JBQ0QsS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7b0JBQzVDLGlCQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ1o7YUFDRjtZQUNELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlCLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBRXRCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7WUFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksYUFBSyxFQUFFO2dCQUNULDhCQUFzQixFQUFFLENBQUM7Z0JBQ3pCLDRCQUFvQixFQUFFLENBQUM7Z0JBQ3ZCLDZCQUFxQixFQUFFLENBQUM7YUFDekI7WUFHRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsMENBQTBDO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUEzUUQsb0JBMlFDIiwiZmlsZSI6InZhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dhbWUvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7dmVsb2NpdHksb2JqX3N0YXRlLHJvb21fc3RhdGV9IGZyb20gXCIuLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtnYW1lLEdldFZpZXdwb3J0RGltZW5zaW9ucyx2aWV3cG9ydH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5sZXQgY2FudmFzX2VsZW1lbnQ6SFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbmludGVyZmFjZSBnbG9iYWxze1xyXG4gIHRlc3Q6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgZyA9IG5ldyBnYW1lPGdsb2JhbHM+KGNhbnZhc19lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKSx7XHJcbiAgdGVzdDowXHJcbn0pO1xyXG5nLmxvYWRSb29tU3RyaW5nKFwiQm9hcmRcIik7XHJcblxyXG4iLCJpbXBvcnQge3BpZWNlLHNpZGUscGllY2VfdHlwZSxwaWVjZV9wYXJhbWV0ZXJzfSBmcm9tIFwiLi9hYnN0cmFjdC9waWVjZVwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSwgcG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCaXNob3AgZXh0ZW5kcyBwaWVjZXtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvYmlzaG9wLnBuZ1wiXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0gcGllY2UuZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUse1xyXG4gICAgICBzaWRlOnBhcmFtcy5zaWRlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGUudHlwZSA9IHBpZWNlX3R5cGUuYmlzaG9wO1xyXG4gIH1cclxuICBnZXRBdHRhY2tpbmcoKTpBcnJheTxwb3NpdGlvbj57XHJcbiAgICByZXR1cm4gdGhpcy5hdHRhY2tEaWFnb25hbCgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgR29vbWJhLCBkaXJlY3Rpb24sIFBsYXllcl9QYXJhbXMgfSBmcm9tIFwiLi9Hb29tYmFcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGV9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlZFBsYXllciBleHRlbmRzIEdvb21iYSB7XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpQbGF5ZXJfUGFyYW1zKXtcclxuICAgIHN1cGVyKHN0YXRlLHBhcmFtcyk7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uID0gc3RhdGUucG9zaXRpb247XHJcbiAgfVxyXG4gIHRhZ3MgPSBbXCJwbGF5ZXJcIl07XHJcbiAgcmVnaXN0ZXJDb250cm9scygpIHtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJLZXlBXCIsIGV4ZWNfdHlwZS5yZXBlYXQsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA+IC0xMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIktleUFcIiwgZXhlY190eXBlLm9uY2UsICgpID0+IHtcclxuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24ubGVmdDtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54IC0gMC4xO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwibW91c2UwZG93blwiLCBleGVjX3R5cGUucmVwZWF0LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXVkaW8ucGxheShcImV4cGxvc2lvblwiLCAwLjQpO1xyXG4gICAgfSwgNDAwKTtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJLZXlEXCIsIGV4ZWNfdHlwZS5yZXBlYXQsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA8IDEwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54ICsgMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwiS2V5RFwiLCBleGVjX3R5cGUub25jZSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5yaWdodDtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54ICsgMC4xO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwiU3BhY2VcIiwgZXhlY190eXBlLm9uY2UsICgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmp1bXBpbmcpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgKz0gMjU7XHJcbiAgICAgICAgdGhpcy5hdWRpby5wbGF5KFwic2xpbWVcIiwgMC4xKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IG9ial9zdGF0ZSwgcG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IHBsYXRmb3JtZXJfb2JqIH0gZnJvbSBcIi4vYWJzdHJhY3QvcGxhdGZvcm1lcl9vYmpcIjtcclxuXHJcbmludGVyZmFjZSBjdXJzb3JfcGFyYW1ze1xyXG4gIGlkOnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3Vyc29yIGV4dGVuZHMgcGxhdGZvcm1lcl9vYmoge1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9jdXJzb3IucG5nXCI7XHJcbiAgaGVpZ2h0ID0gNjQ7XHJcbiAgd2lkdGggPSA2NDtcclxuICBjb2xsaXNpb24gPSB0cnVlO1xyXG4gIHJlbmRlciA9IHRydWU7XHJcbiAgdGFncyA9IFtcIkN1cnNvclwiXTtcclxufVxyXG4iLCJcbiAgICBcbiAgICBpbXBvcnQge29ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcbiAgICBpbXBvcnQgeyBvYmpfc3RhdGUsIHBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xuaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9tYWluXCI7XG4gICAgXG4gICAgaW50ZXJmYWNlIERvb3Jfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIGludGVyZmFjZSBEb29yX3BhcmFtZXRlcnN7XG4gICAgICBsb2NhdGlvbjpzdHJpbmcsXG4gICAgICB0ZXN0OmJvb2xlYW4sXG4gICAgICB5ZXA6bnVtYmVyXG4gICAgfVxuICAgIFxuICAgIGV4cG9ydCBjbGFzcyBEb29yIGV4dGVuZHMgb2Jqe1xuICAgICAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL3RhcmdldC5wbmdcIjtcbiAgICAgIGhlaWdodCA9IDEwMDtcbiAgICAgIHdpZHRoID0gMTAwO1xuICAgICAgdGFnczpBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICBjb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgIHJlbmRlciA9IHRydWU7XG4gICAgICBzdGF0ZTpEb29yX3N0YXRlO1xuICAgICAgcGFyYW1zOkRvb3JfcGFyYW1ldGVycztcbiAgICAgIHN0YXRpYyBkZWZhdWx0X3BhcmFtczpEb29yX3BhcmFtZXRlcnMgPSB7XG4gICAgICAgIGxvY2F0aW9uOlwiVW5kZXJ3b3JsZFwiLFxuICAgICAgICB0ZXN0OnRydWUsXG4gICAgICAgIHllcDoxNVxuICAgICAgfVxuICAgICAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpEb29yX3BhcmFtZXRlcnMgPSBEb29yLmRlZmF1bHRfcGFyYW1zKXtcbiAgICAgICAgc3VwZXIoc3RhdGUscGFyYW1zKTtcbiAgICAgIH1cbiAgICAgIHN0YXRlZih0aW1lX2RlbHRhOm51bWJlcil7XG4gICAgICAgIGxldCBjb2xsaWRlcyA9IGcuZ2V0Um9vbSgpLmNoZWNrQ29sbGlzaW9ucyh0aGlzLmdldEZ1bGxDb2xsaXNpb25Cb3goKSlcbiAgICAgICAgZm9yKGxldCBvYmogb2YgY29sbGlkZXMpe1xuICAgICAgICAgIGlmKG9iai50YWdzLmluY2x1ZGVzKFwicGxheWVyXCIpKXtcbiAgICAgICAgICAgIGcubG9hZFJvb21TdHJpbmcodGhpcy5wYXJhbXMubG9jYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVuZGVyZih0aW1lX2RlbHRhOm51bWJlcil7XG4gICAgICAgcmV0dXJuIHN1cGVyLnJlbmRlcmYodGltZV9kZWx0YSk7IFxuICAgICAgfVxuICAgICAgcmVnaXN0ZXJBbmltYXRpb25zKCl7XG4gICAgXG4gICAgICB9XG4gICAgICByZWdpc3RlckF1ZGlvKCl7XG4gICAgXG4gICAgICB9XG4gICAgICByZWdpc3RlckNvbnRyb2xzKCl7XG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAiLCJpbXBvcnQgeyB2ZWxvY2l0eSwgb2JqX3N0YXRlLCBzdGF0ZV9mdW5jLHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IHNwcml0ZSwgc3ByaXRlX2dlbiB9IGZyb20gXCIuLi8uLi9saWIvc3ByaXRlXCI7XHJcbmltcG9ydCB7IG9iaiB9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IHBsYXRmb3JtZXJfb2JqLCBwbGF0Zm9ybWVyX29ial9jb21wb3NpdGUsIHBsYXRfc3RhdGUgfSBmcm9tIFwiLi9hYnN0cmFjdC9wbGF0Zm9ybWVyX29ialwiO1xyXG5pbXBvcnQgeyBQb2xsX01vdXNlIH0gZnJvbSBcIi4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4uLy4uL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgQmluZCB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHtUZXh0X05vZGUsVGV4dH0gZnJvbSBcIi4uLy4uL2xpYi9odWRcIjtcclxuaW1wb3J0IHsgT3ZlcndvcmxkIH0gZnJvbSBcIi4uL3Jvb21zL092ZXJ3b3JsZFwiO1xyXG5pbXBvcnQgeyBnIH0gZnJvbSBcIi4uL21haW5cIjtcclxuXHJcbmV4cG9ydCBlbnVtIGRpcmVjdGlvbiB7XHJcbiAgbGVmdCxcclxuICByaWdodFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGdvb21iYV9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZSwgcGxhdF9zdGF0ZSB7XHJcbiAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXHJcbiAganVtcGluZzogYm9vbGVhbixcclxuICB0aW1lc19haXJzaG90OiBudW1iZXIsXHJcbiAgbWF4X3RpbWVzX2FpcnNob3Q6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGd1bl9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZSB7XHJcbiAgcm90YXRpb246IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYXllcl9QYXJhbXN7XHJcbiAgaWQ6c3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBnb29tYmFfcGFyYW1ze1xyXG4gIGlkPzpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdvb21iYSBleHRlbmRzIHBsYXRmb3JtZXJfb2Jqe1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9mb2xkZXIvcm9ib3QucG5nXCI7XHJcbiAgaGVpZ2h0ID0gMTQ5O1xyXG4gIHdpZHRoID0gMTQ5O1xyXG4gIHRhZ3MgPSBbXCJkdW1teVwiXVxyXG4gIGNvbGxpc2lvbiA9IHRydWU7XHJcbiAgaGVhbHRoX3RleHQ6IFRleHQ7XHJcbiAgc3RhdGU6Z29vbWJhX3N0YXRlO1xyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbWV0ZXJzOmdvb21iYV9wYXJhbXMgPSBHb29tYmEuZGVmYXVsdF9wYXJhbXMpIHtcclxuICAgIFxyXG4gICAgc3VwZXIoc3RhdGUscGFyYW1ldGVycyk7XHJcbiAgICBpZiAocGFyYW1ldGVycy5pZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5pZCA9IHBhcmFtZXRlcnMuaWQ7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUse1xyXG4gICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbi5sZWZ0LFxyXG4gICAgICBqdW1waW5nOiBmYWxzZSxcclxuICAgICAgaGVhbHRoOiAxMDAsXHJcbiAgICAgIHRpbWVzX2FpcnNob3Q6IDAsXHJcbiAgICAgIG1heF90aW1lc19haXJzaG90OiAwXHJcbiAgICB9KVxyXG4gICAgLy90aGlzLmFuaW1hdGlvbnMucGxheShcIndhbGsxXCIpO1xyXG4gIH1cclxuICByZWdpc3RlckFuaW1hdGlvbnMoKSB7XHJcbiAgICBsZXQgc3ByaXRlcyA9IHNwcml0ZV9nZW4odGhpcy5zcHJpdGVfc2hlZXQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoXCJ3YWxrMVwiLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzBdXSxcclxuICAgICAgWzEwMCwgc3ByaXRlc1swXVsxXV0sXHJcbiAgICAgIFs0MDAsIHNwcml0ZXNbMF1bMF1dLFxyXG4gICAgICBbNTAwLCBzcHJpdGVzWzBdWzJdXVxyXG4gICAgXSwgODAwKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZChcIndhbGsyXCIsIFtcclxuICAgICAgWzAsIHNwcml0ZXNbMF1bNV1dLFxyXG4gICAgICBbMTAwLCBzcHJpdGVzWzBdWzRdXSxcclxuICAgICAgWzQwMCwgc3ByaXRlc1swXVs1XV0sXHJcbiAgICAgIFs1MDAsIHNwcml0ZXNbMF1bM11dXHJcbiAgICBdLCA4MDApXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKFwiaWRsZWxlZnRcIiwgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVswXV1cclxuICAgIF0sIDEpO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnaWRsZXJpZ2h0JywgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVs1XV1cclxuICAgIF0sIDEpO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnZmFsbGxlZnQnLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzZdXVxyXG4gICAgXSwgMSk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmYWxscmlnaHQnLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzddXVxyXG4gICAgXSwgMSlcclxuICB9XHJcbiAgcmVnaXN0ZXJBdWRpbygpIHtcclxuICAgIHRoaXMuYXVkaW8uYWRkKFwic2xpbWVcIiwgXCIuL3NvdW5kcy9nb29tYmEvc2xpbWViYWxsLndhdlwiKTtcclxuICAgIHRoaXMuYXVkaW8uYWRkKFwiZXhwbG9zaW9uXCIsIFwiLi9zb3VuZHMvZXhwbG9zaW9uLm1wM1wiKVxyXG4gIH1cclxuICByZW5kZXJmKHQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuanVtcGluZykge1xyXG4gICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT0gZGlyZWN0aW9uLmxlZnQgPyBcImZhbGxsZWZ0XCIgOiBcImZhbGxyaWdodFwiO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheShhbmltYXRpb24pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS54ID09IDAgJiYgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ID09IDApIHtcclxuICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuc3RhdGUuZGlyZWN0aW9uID09IGRpcmVjdGlvbi5sZWZ0ID8gXCJpZGxlbGVmdFwiIDogXCJpZGxlcmlnaHRcIjtcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoYW5pbWF0aW9uKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCF0aGlzLmFuaW1hdGlvbnMuYW5pbWF0aW5nKSB7XHJcbiAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PSBkaXJlY3Rpb24ubGVmdCA/IFwid2FsazFcIiA6IFwid2FsazJcIjtcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoYW5pbWF0aW9uKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdXBlci5yZW5kZXJmKHQpO1xyXG4gIH1cclxuICBzdGF0ZWYodGltZTogbnVtYmVyKSB7XHJcbiAgICBsZXQgcm9vbSA9IGcuZ2V0Um9vbSgpO1xyXG4gICAgbGV0IGN1cnNvciA9IHJvb20uZ2V0T2JqKFwiY3Vyc29yXCIpO1xyXG4gICAgaWYgKHRoaXMuY29sbGlzaW9uKSB7XHJcbiAgICAgIGxldCBjb2wgPSB0aGlzLmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICAgICAgaWYgKHJvb20uY2hlY2tDb2xsaXNpb25zKHtcclxuICAgICAgICB3aWR0aDogY29sLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogMSxcclxuICAgICAgICB4OiBjb2wueCxcclxuICAgICAgICB5OiBjb2wueSAtIGNvbC5oZWlnaHQgLyAyIC0gMSxcclxuICAgICAgfSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuanVtcGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubWF4X3RpbWVzX2FpcnNob3QgPSBNYXRoLm1heCh0aGlzLnN0YXRlLnRpbWVzX2FpcnNob3QsIHRoaXMuc3RhdGUubWF4X3RpbWVzX2FpcnNob3QpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUudGltZXNfYWlyc2hvdCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qdW1waW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueSA+IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS55IC0gMC40ICogMTYgLyB0aW1lO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS55IDwgMClcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueSA8IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS55ICsgMC40ICogMTYgLyB0aW1lO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS55ID4gMClcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA+IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24ucmlnaHQ7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCAtIDAuNCAqIDE2IC8gdGltZTs7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnggPCAwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS54IDwgMCkge1xyXG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5sZWZ0O1xyXG4gICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggPSB0aGlzLnN0YXRlLnZlbG9jaXR5LnggKyAwLjQgKiAxNiAvIHRpbWU7O1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS54ID4gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtwb3NpdGlvbiwgb2JqX3N0YXRlfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IHJvdGF0aW9uX2xlbmd0aCB9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IHBsYXRmb3JtZXJfb2JqIH0gZnJvbSBcIi4vYWJzdHJhY3QvcGxhdGZvcm1lcl9vYmpcIjtcclxuaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9tYWluXCI7XHJcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gXCIuL0N1cnNvclwiO1xyXG5pbXBvcnQgeyBndW5fc3RhdGUsIEdvb21iYSB9IGZyb20gXCIuL0dvb21iYVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHdW4gZXh0ZW5kcyBwbGF0Zm9ybWVyX29iaiB7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2ZvbGRlci9ndW4ucG5nXCI7XHJcbiAgaGVpZ2h0ID0gNTA7XHJcbiAgd2lkdGggPSAyMDtcclxuICBjb2xsaXNpb24gPSBmYWxzZTtcclxuICByZW5kZXIgPSB0cnVlO1xyXG4gIHBsYXllcjogR29vbWJhO1xyXG4gIGdyYXZpdHkgPSBmYWxzZTtcclxuICBjdXJzb3I6IEN1cnNvcjtcclxuICB0YWdzID0gW1wiZ3VuXCJdO1xyXG4gIHN0YXRlZih0OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnBsYXllcikge1xyXG4gICAgICBsZXQgYW5nbGUgPSB0aGlzLnBsYXllci5hbmdsZVRvd2FyZHModGhpcy5jdXJzb3IpO1xyXG4gICAgICBsZXQgcm90ID0gcm90YXRpb25fbGVuZ3RoKDUwLCBhbmdsZSk7XHJcbiAgICAgIHRoaXMucm90YXRpb24gPSBhbmdsZTtcclxuICAgICAgdGhpcy5zdGF0ZS5yb3RhdGlvbiA9IGFuZ2xlO1xyXG4gICAgICB0aGlzLnN0YXRlLnBvc2l0aW9uID0ge1xyXG4gICAgICAgIHg6IHJvdC54ICsgdGhpcy5wbGF5ZXIuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OiByb3QueSArIHRoaXMucGxheWVyLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgICAgfTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbGV0IHJvb20gPSBnLmdldFJvb20oKTtcclxuICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBhcmVudC5nZXRJdGVtc0J5VGFnKFwicGxheWVyXCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgdGhpcy5jdXJzb3IgPSA8Q3Vyc29yPnJvb20uZ2V0T2JqQnlUYWcoXCJDdXJzb3JcIilbMF07XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge3BpZWNlLHNpZGUscGllY2VfdHlwZSxwaWVjZV9wYXJhbWV0ZXJzfSBmcm9tIFwiLi9hYnN0cmFjdC9waWVjZVwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSwgcG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtCb2FyZH0gZnJvbSBcIi4uL3Jvb21zL0JvYXJkXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBLaW5nIGV4dGVuZHMgcGllY2V7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2tpbmcucG5nXCJcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOnBpZWNlX3BhcmFtZXRlcnMgPSBwaWVjZS5kZWZhdWx0X3BhcmFtcyl7XHJcbiAgICBzdXBlcihzdGF0ZSx7XHJcbiAgICAgIHNpZGU6cGFyYW1zLnNpZGVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGF0ZS50eXBlID0gcGllY2VfdHlwZS5raW5nO1xyXG4gIH1cclxuICBjaGVja19sZWZ0X2Nhc3RsZShyb29tOkJvYXJkLGNvcmRzOnBvc2l0aW9uKXtcclxuICAgIGlmKCF0aGlzLnN0YXRlLmhhc19tb3ZlZCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54IC0gMSx5OmNvcmRzLnl9KS5sZW5ndGggPT0gMCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54IC0gMix5OmNvcmRzLnl9KS5sZW5ndGggPT0gMCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54IC0gMywgeTpjb3Jkcy55fSkubGVuZ3RoID09IDApe1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coXCJ5YVwiKVxyXG4gICAgICBsZXQgcm9vayA9IHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggLSA0LHk6Y29yZHMueX0pO1xyXG4gICAgICBpZihyb29rLmxlbmd0aCA+IDAgJiYgIXJvb2tbMF0uc3RhdGUuaGFzX21vdmVkKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vXCIpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGNoZWNrX3JpZ2h0X2Nhc3RsZShyb29tOkJvYXJkLGNvcmRzOnBvc2l0aW9uKXtcclxuICAgIGlmKCF0aGlzLnN0YXRlLmhhc19tb3ZlZCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54ICsgMSx5OmNvcmRzLnl9KS5sZW5ndGggPT0gMCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54ICsgMix5OmNvcmRzLnl9KS5sZW5ndGggPT0gMCl7XHJcbiAgICAgIGxldCByb29rID0gcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCArIDMseTpjb3Jkcy55fSk7XHJcbiAgICAgIGlmKHJvb2subGVuZ3RoID4gMCAmJiAhcm9va1swXS5zdGF0ZS5oYXNfbW92ZWQpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGdldEF0dGFja2luZygpOkFycmF5PHBvc2l0aW9uPntcclxuICAgIGxldCBjb3JkcyA9IHRoaXMuZ2V0Q29yZHMoKTtcclxuICAgIGxldCByb29tID0gZy5nZXRSb29tKCkgYXMgQm9hcmQ7XHJcbiAgICBsZXQgYXR0YWNrZWQ6QXJyYXk8cG9zaXRpb24+ID0gW107XHJcbiAgICBmb3IobGV0IHggPSAtMTt4IDw9IDE7IHgrKyl7XHJcbiAgICAgIGZvcihsZXQgeSA9IC0xO3kgPD0gMTsgeSsrKXtcclxuICAgICAgICBpZigoeCAhPT0gMCB8fCB5ICE9PSAwKSAmJiBjb3Jkcy54ICsgeCA+PSAwICYmIGNvcmRzLnggKyB4IDwgOCAmJiBjb3Jkcy55ICsgeSA+PSAwICYmIGNvcmRzLnkgKyB5IDwgOCl7XHJcbiAgICAgICAgICBsZXQgcGllY2UgPSByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54ICsgeCwgeTpjb3Jkcy55ICsgeX0pO1xyXG4gICAgICAgICAgbGV0IHNhZmUgPSB0cnVlO1xyXG4gICAgICAgICAgaWYoc2FmZSAmJiBwaWVjZS5sZW5ndGggPT09IDAgfHwgcGllY2VbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKXtcclxuICAgICAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54ICsgeCwgeTpjb3Jkcy55ICsgeX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9jYXN0bGUgY2hlY2sgbGVmdFxyXG4gICAgaWYodGhpcy5jaGVja19sZWZ0X2Nhc3RsZShyb29tLGNvcmRzKSl7XHJcbiAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCAtIDIseTpjb3Jkcy55fSk7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmNoZWNrX3JpZ2h0X2Nhc3RsZShyb29tLGNvcmRzKSl7XHJcbiAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCArIDIseTpjb3Jkcy55fSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXR0YWNrZWQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtwaWVjZSxzaWRlLHBpZWNlX3R5cGUscGllY2VfcGFyYW1ldGVyc30gZnJvbSBcIi4vYWJzdHJhY3QvcGllY2VcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUsIHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBLbmlnaHQgZXh0ZW5kcyBwaWVjZXtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMva25pZ2h0LnBuZ1wiXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0gcGllY2UuZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUse1xyXG4gICAgICBzaWRlOnBhcmFtcy5zaWRlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGUudHlwZSA9IHBpZWNlX3R5cGUua25pZ2h0O1xyXG4gIH1cclxuICBnZXRBdHRhY2tpbmcoKTpBcnJheTxwb3NpdGlvbj57XHJcbiAgICBsZXQgY29yZHMgPSB0aGlzLmdldENvcmRzKCk7XHJcbiAgICBsZXQgYXR0YWNrZWQ6QXJyYXk8cG9zaXRpb24+ID0gW107XHJcbiAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggKyAxLHk6Y29yZHMueSArIDJ9KTtcclxuICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCAtIDEseTpjb3Jkcy55ICsgMn0pO1xyXG4gICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54ICsgMix5OmNvcmRzLnkgKyAxfSk7XHJcbiAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggKyAyLHk6Y29yZHMueSAtIDF9KTtcclxuICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCArIDEseTpjb3Jkcy55IC0gMn0pO1xyXG4gICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54IC0gMSx5OmNvcmRzLnkgLSAyfSk7XHJcbiAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggLSAyLHk6Y29yZHMueSArIDF9KTtcclxuICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCAtIDIseTpjb3Jkcy55IC0gMX0pO1xyXG4gICAgcmV0dXJuKGF0dGFja2VkLmZpbHRlcigoeCk9PngueCA+PSAwICYmIHgueCA8IDggJiYgeC55ID49IDAgJiYgeC55IDwgOCkpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IG9iaiB9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IEJvYXJkLCBzaWRlIH0gZnJvbSBcIi4uL3Jvb21zL0JvYXJkXCI7XHJcbmltcG9ydCB7IHBpZWNlLCBwaWVjZV90eXBlIH0gZnJvbSBcIi4vYWJzdHJhY3QvcGllY2VcIjtcclxuaW1wb3J0IHsgUXVlZW4gfSBmcm9tIFwiLi9RdWVlblwiO1xyXG5pbXBvcnQgeyBleGVjX3R5cGUgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSwgcG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IGcgfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5pbnRlcmZhY2UgbW92ZV9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZSB7XHJcbiAgcG9zaXRpb246IHtcclxuICAgIHg6IG51bWJlcixcclxuICAgIHk6IG51bWJlclxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmUgZXh0ZW5kcyBvYmoge1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9hdHRhY2tlZC5wbmdcIjtcclxuICBoZWlnaHQgPSAxMDA7XHJcbiAgd2lkdGggPSAxMDA7XHJcbiAgcmVuZGVyID0gZmFsc2U7XHJcbiAgbGF5ZXIgPSAyO1xyXG4gIHRhZ3MgPSBbXCJtb3ZlXCJdO1xyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOiBvYmpfc3RhdGUpIHtcclxuICAgIHN1cGVyKHN0YXRlKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogc3RhdGUucG9zaXRpb24ueCAqIHRoaXMud2lkdGggLSAzNTAsXHJcbiAgICAgICAgeTogc3RhdGUucG9zaXRpb24ueSAqIHRoaXMuaGVpZ2h0IC0gMzUwXHJcbiAgICAgIH0sXHJcbiAgICAgIHZlbG9jaXR5OiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICBzY2FsaW5nOiB7XHJcbiAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZ2V0Q29yZHMoKTogcG9zaXRpb24ge1xyXG4gICAgcmV0dXJuIHsgeDogTWF0aC5mbG9vcigodGhpcy5zdGF0ZS5wb3NpdGlvbi54ICsgMzUwKSAvIDEwMCksIHk6IE1hdGguZmxvb3IoKHRoaXMuc3RhdGUucG9zaXRpb24ueSArIDM1MCkgLyAxMDApIH07XHJcbiAgfVxyXG4gIGRyb3AoKXtcclxuICAgIGlmICh0aGlzLnJlbmRlcikge1xyXG4gICAgICBsZXQgcm9vbSA9IGcuc3RhdGUuY3VycmVudF9yb29tIGFzIEJvYXJkO1xyXG4gICAgICByb29tLnN0YXRlLnNlbGVjdGVkLnN0YXRlLnBvc2l0aW9uID0gcm9vbS5zdGF0ZS5zZWxlY3RlZF9vcmlnaW5hbF9wb3NpdGlvbjtcclxuICAgICAgbGV0IHAgPSByb29tLmdldF9waWVjZSh0aGlzLmdldENvcmRzKCkpIGFzIHBpZWNlW107XHJcbiAgICAgIGxldCBzID0gcm9vbS5zdGF0ZS5zZWxlY3RlZDtcclxuICAgICAgaWYgKHMuc3RhdGUudHlwZSA9PT0gcGllY2VfdHlwZS5raW5nICYmICFzLnN0YXRlLmhhc19tb3ZlZCAmJiB0aGlzLmdldENvcmRzKCkueCA9PT0gNikge1xyXG4gICAgICAgIGxldCByb29rcyA9IHJvb20uZ2V0X3BpZWNlKHsgeDogNywgeTogcy5nZXRDb3JkcygpLnkgfSk7XHJcbiAgICAgICAgcm9va3NbMF0ubW92ZXRvQ29yZHMoeyB4OiA1LCB5OiBzLmdldENvcmRzKCkueSB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocy5zdGF0ZS50eXBlID09PSBwaWVjZV90eXBlLmtpbmcgJiYgIXMuc3RhdGUuaGFzX21vdmVkICYmIHRoaXMuZ2V0Q29yZHMoKS54ID09PSAyKSB7XHJcbiAgICAgICAgbGV0IHJvb2tzID0gcm9vbS5nZXRfcGllY2UoeyB4OiAwLCB5OiBzLmdldENvcmRzKCkueSB9KTtcclxuICAgICAgICByb29rc1swXS5tb3ZldG9Db3Jkcyh7IHg6IDMsIHk6IHMuZ2V0Q29yZHMoKS55IH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzLnN0YXRlLnR5cGUgPT09IHBpZWNlX3R5cGUucGF3biAmJiAhcy5zdGF0ZS5oYXNfbW92ZWQgJiYgcy5zdGF0ZS5zaWRlID09PSBzaWRlLndoaXRlICYmIHRoaXMuZ2V0Q29yZHMoKS55ID09PSAzKSB7XHJcbiAgICAgICAgcm9vbS5zdGF0ZS53aGl0ZV9ib2FyZFt0aGlzLmdldENvcmRzKCkueF1bdGhpcy5nZXRDb3JkcygpLnkgLSAxXS5lbnBhc3NlbnQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzLnN0YXRlLnR5cGUgPT09IHBpZWNlX3R5cGUucGF3biAmJiAhcy5zdGF0ZS5oYXNfbW92ZWQgJiYgcy5zdGF0ZS5zaWRlID09PSBzaWRlLmJsYWNrICYmIHRoaXMuZ2V0Q29yZHMoKS55ID09PSA0KSB7XHJcbiAgICAgICAgcm9vbS5zdGF0ZS5ibGFja19ib2FyZFt0aGlzLmdldENvcmRzKCkueF1bdGhpcy5nZXRDb3JkcygpLnkgKyAxXS5lbnBhc3NlbnQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzLnN0YXRlLnR5cGUgPT09IHBpZWNlX3R5cGUucGF3biAmJiBzLnN0YXRlLnNpZGUgPT0gc2lkZS5ibGFjayAmJiByb29tLmdldF9tZXRhKHRoaXMuZ2V0Q29yZHMoKSwgc2lkZS53aGl0ZSkuZW5wYXNzZW50KSB7XHJcbiAgICAgICAgbGV0IGYgPSByb29tLmdldF9waWVjZSh7IHg6IHRoaXMuZ2V0Q29yZHMoKS54LCB5OiB0aGlzLmdldENvcmRzKCkueSArIDEgfSk7XHJcbiAgICAgICAgcm9vbS5yZW1vdmVfcGllY2UoZlswXSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHMuc3RhdGUudHlwZSA9PT0gcGllY2VfdHlwZS5wYXduICYmIHMuc3RhdGUuc2lkZSA9PSBzaWRlLndoaXRlICYmIHJvb20uZ2V0X21ldGEodGhpcy5nZXRDb3JkcygpLCBzaWRlLmJsYWNrKS5lbnBhc3NlbnQpIHtcclxuICAgICAgICBsZXQgZiA9IHJvb20uZ2V0X3BpZWNlKHsgeDogdGhpcy5nZXRDb3JkcygpLngsIHk6IHRoaXMuZ2V0Q29yZHMoKS55IC0gMSB9KTtcclxuICAgICAgICByb29tLnJlbW92ZV9waWVjZShmWzBdKTtcclxuICAgICAgfVxyXG4gICAgICBzLnN0YXRlLmhhc19tb3ZlZCA9IHRydWU7XHJcbiAgICAgIGlmIChwLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByb29tLnJlbW92ZV9waWVjZShwWzBdKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoKHRoaXMuZ2V0Q29yZHMoKS55ID09IDcgfHwgdGhpcy5nZXRDb3JkcygpLnkgPT0gMCkgJiYgcy5zdGF0ZS50eXBlID09PSBwaWVjZV90eXBlLnBhd24pIHtcclxuICAgICAgICBsZXQgcXUgPSBuZXcgUXVlZW4oe1xyXG4gICAgICAgICAgcG9zaXRpb246IHRoaXMuZ2V0Q29yZHMoKSxcclxuICAgICAgICAgIHZlbG9jaXR5OiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByb3RhdGlvbjogMCxcclxuICAgICAgICAgIHNjYWxpbmc6IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLCB3aWR0aDogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIHsgc2lkZTogcy5zdGF0ZS5zaWRlIH0pO1xyXG4gICAgICAgIHF1LmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHJvb20uYWRkX3BpZWNlKHF1KTtcclxuICAgICAgICAgIHJvb20ucmVtb3ZlX3BpZWNlKHMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHMuc3RhdGUuc2lkZSA9PT0gc2lkZS53aGl0ZSkge1xyXG4gICAgICAgIHJvb20uY2hhbmdlX3NpZGUoc2lkZS5ibGFjayk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocy5zdGF0ZS5zaWRlID09PSBzaWRlLmJsYWNrKSB7XHJcbiAgICAgICAgcm9vbS5jaGFuZ2Vfc2lkZShzaWRlLndoaXRlKTtcclxuICAgICAgfVxyXG4gICAgICByb29tLmNsZWFyX2F0dGFja2VkKCk7XHJcbiAgICAgIHJvb20uc3RhdGUuc2VsZWN0ZWQubW92ZXRvQ29yZHModGhpcy5nZXRDb3JkcygpKTtcclxuXHJcbiAgICAgIHJvb20uc3RhdGUuYXR0YWNrZWQgPSBbXTtcclxuICAgICAgcm9vbS5zdGF0ZS5zZWxlY3RlZCA9IHVuZGVmaW5lZDtcclxuICAgICAgcm9vbS5zdGF0ZS5zZWxlY3RlZF9vcmlnaW5hbF9wb3NpdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbiAgcmVnaXN0ZXJDb250cm9scygpIHtcclxuICAgIFxyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIm1vdXNlMVwiLCBleGVjX3R5cGUub25jZSwgKCkgPT4ge1xyXG4gICAgICBpZih0aGlzLnJlbmRlcil7XHJcbiAgICAgICAgbGV0IHJvb20gPSBnLmdldFJvb20oKSBhcyBCb2FyZDtcclxuICAgICAgICByb29tLnN0YXRlLnNlbGVjdGVkX29yaWdpbmFsX3Bvc2l0aW9uID0gcm9vbS5zdGF0ZS5zZWxlY3RlZC5zdGF0ZS5wb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmRyb3AoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gIH1cclxufSIsImltcG9ydCB7cGllY2Usc2lkZSxwaWVjZV90eXBlLHBpZWNlX3BhcmFtZXRlcnN9IGZyb20gXCIuL2Fic3RyYWN0L3BpZWNlXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlLCBwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge0JvYXJkfSBmcm9tIFwiLi4vcm9vbXMvQm9hcmRcIjtcclxuaW1wb3J0IHtnfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhd24gZXh0ZW5kcyBwaWVjZXtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvcGF3bi5wbmdcIlxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6cGllY2VfcGFyYW1ldGVycyA9IHBpZWNlLmRlZmF1bHRfcGFyYW1zKXtcclxuICAgIHN1cGVyKHN0YXRlLHtcclxuICAgICAgc2lkZTpwYXJhbXMuc2lkZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXRlLnR5cGUgPSBwaWVjZV90eXBlLnBhd247XHJcbiAgfVxyXG4gIGdldEF0dGFja2luZygpOkFycmF5PHBvc2l0aW9uPntcclxuICAgIGxldCBhdHRhY2tlZDpBcnJheTxwb3NpdGlvbj4gPSBbXTtcclxuICAgIGxldCBjb3JkcyA9IHRoaXMuZ2V0Q29yZHMoKTtcclxuICAgIGxldCByb29tID0gZy5nZXRSb29tKCkgYXMgQm9hcmQ7XHJcbiAgICBpZih0aGlzLnN0YXRlLnNpZGUgPT0gc2lkZS53aGl0ZSl7XHJcbiAgICAgIGlmKHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLngseTpjb3Jkcy55ICsgMX0pLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54LHk6Y29yZHMueSArIDF9KTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5oYXNfbW92ZWQgJiYgcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCx5OmNvcmRzLnkgKyAyfSkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCx5OmNvcmRzLnkgKyAyfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBsZWZ0X2NvcmRzOnBvc2l0aW9uID0ge3g6Y29yZHMueC0gMSx5OmNvcmRzLnkgKyAxfTtcclxuICAgICAgbGV0IHJpZ2h0X2NvcmRzOnBvc2l0aW9uID0ge3g6Y29yZHMueCsgMSx5OmNvcmRzLnkgKyAxfTsgXHJcbiAgICAgIGxldCBsZWZ0ID0gcm9vbS5nZXRfcGllY2UobGVmdF9jb3Jkcyk7XHJcbiAgICAgIGxldCByaWdodCA9IHJvb20uZ2V0X3BpZWNlKHJpZ2h0X2NvcmRzKTtcclxuICAgICAgbGV0IGxlZnRfZW4gPSByb29tLmdldF9tZXRhKGxlZnRfY29yZHMsc2lkZS5ibGFjayk7XHJcbiAgICAgIGxldCByaWdodF9lbiA9IHJvb20uZ2V0X21ldGEocmlnaHRfY29yZHMsc2lkZS5ibGFjayk7XHJcbiAgICAgIGlmKChjb3Jkcy54IC0gMSA+PSAwKSAmJiAoKGxlZnQubGVuZ3RoID4gMCAmJiBsZWZ0WzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSkgfHwgKGxlZnRfZW4gJiYgbGVmdF9lbi5lbnBhc3NlbnQpKSl7XHJcbiAgICAgICAgYXR0YWNrZWQucHVzaChsZWZ0X2NvcmRzKTtcclxuICAgICAgfVxyXG4gICAgICBpZigoY29yZHMueCArIDEgPCA4KSAmJiAoKHJpZ2h0Lmxlbmd0aCA+IDAgJiYgcmlnaHRbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKSB8fCAocmlnaHRfZW4gJiYgcmlnaHRfZW4uZW5wYXNzZW50KSkpe1xyXG4gICAgICAgIGF0dGFja2VkLnB1c2gocmlnaHRfY29yZHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYocm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCx5OmNvcmRzLnkgLSAxfSkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLngseTpjb3Jkcy55IC0gMX0pO1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmhhc19tb3ZlZCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54LHk6Y29yZHMueSAtIDJ9KS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54LHk6Y29yZHMueSAtIDJ9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxlZnRfY29yZHM6cG9zaXRpb24gPSB7eDpjb3Jkcy54IC0gMSx5OmNvcmRzLnkgLSAxfTtcclxuICAgICAgbGV0IHJpZ2h0X2NvcmRzOnBvc2l0aW9uID0ge3g6Y29yZHMueCsgMSx5OmNvcmRzLnkgLSAxfTtcclxuICAgICAgbGV0IGxlZnQgPSByb29tLmdldF9waWVjZShsZWZ0X2NvcmRzKTtcclxuICAgICAgbGV0IHJpZ2h0ID0gcm9vbS5nZXRfcGllY2UocmlnaHRfY29yZHMpO1xyXG4gICAgICBsZXQgbGVmdF9lbiA9IHJvb20uZ2V0X21ldGEobGVmdF9jb3JkcyxzaWRlLndoaXRlKTtcclxuICAgICAgbGV0IHJpZ2h0X2VuID0gcm9vbS5nZXRfbWV0YShyaWdodF9jb3JkcyxzaWRlLndoaXRlKTtcclxuICAgICAgaWYoKGNvcmRzLnggLSAxID49IDApICYmICgobGVmdC5sZW5ndGggPiAwICYmIGxlZnRbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKSB8fCAobGVmdF9lbiAmJiBsZWZ0X2VuLmVucGFzc2VudCkpKXtcclxuICAgICAgICBhdHRhY2tlZC5wdXNoKGxlZnRfY29yZHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKChjb3Jkcy54ICsgMSA8IDgpICYmICgocmlnaHQubGVuZ3RoID4gMCAmJiByaWdodFswXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpIHx8IChyaWdodF9lbiAmJiByaWdodF9lbi5lbnBhc3NlbnQpKSl7XHJcbiAgICAgICAgYXR0YWNrZWQucHVzaChyaWdodF9jb3Jkcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhdHRhY2tlZDtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBvYmpfc3RhdGUsIHBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBjb21wb3NpdGVfb2JqIH0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyX1BhcmFtcyB9IGZyb20gXCIuL0dvb21iYVwiO1xyXG5pbXBvcnQgeyBDb250cm9sbGVkUGxheWVyIH0gZnJvbSBcIi4vQ29udHJvbGxlZFBsYXllclwiO1xyXG5pbXBvcnQgeyBHdW4gfSBmcm9tIFwiLi9HdW5cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY29tcG9zaXRlX29iantcclxuICBlbmVteSA9IHRydWU7XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLCBwYXJhbWV0ZXJzOiBQbGF5ZXJfUGFyYW1zKSB7XHJcbiAgICBzdXBlcihzdGF0ZSk7XHJcbiAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgQ29udHJvbGxlZFBsYXllcihzdGF0ZSwgcGFyYW1ldGVycykpO1xyXG4gICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IEd1bih7XHJcbiAgICAgIHBvc2l0aW9uOnt4OiBzdGF0ZS5wb3NpdGlvbi54LCB5OiBzdGF0ZS5wb3NpdGlvbi55ICsgMTAwfSxcclxuICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICByb3RhdGlvbjowLFxyXG4gICAgICBzY2FsaW5nOntoZWlnaHQ6MSx3aWR0aDoxfVxyXG4gICAgfSxwYXJhbWV0ZXJzKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7cGllY2Usc2lkZSxwaWVjZV90eXBlLHBpZWNlX3BhcmFtZXRlcnN9IGZyb20gXCIuL2Fic3RyYWN0L3BpZWNlXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlLCBwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZWVuIGV4dGVuZHMgcGllY2V7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL3F1ZWVuLnBuZ1wiXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0gcGllY2UuZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUse1xyXG4gICAgICBzaWRlOnBhcmFtcy5zaWRlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGUudHlwZSA9IHBpZWNlX3R5cGUucXVlZW47XHJcbiAgfVxyXG4gIGdldEF0dGFja2luZygpOkFycmF5PHBvc2l0aW9uPntcclxuICAgIHJldHVybiB0aGlzLmF0dGFja0RpYWdvbmFsKCkuY29uY2F0KHRoaXMuYXR0YWNrQ2FyZGluYWwoKSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtwaWVjZSxzaWRlLHBpZWNlX3R5cGUscGllY2VfcGFyYW1ldGVyc30gZnJvbSBcIi4vYWJzdHJhY3QvcGllY2VcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUsIHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7Qm9hcmR9IGZyb20gXCIuLi9yb29tcy9Cb2FyZFwiO1xyXG5pbXBvcnQge2d9IGZyb20gXCIuLi9tYWluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm9vayBleHRlbmRzIHBpZWNle1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9yb29rLnBuZ1wiXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0gcGllY2UuZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUse1xyXG4gICAgICBzaWRlOnBhcmFtcy5zaWRlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGUudHlwZSA9IHBpZWNlX3R5cGUucm9vaztcclxuICB9XHJcbiAgZ2V0QXR0YWNraW5nKCk6QXJyYXk8cG9zaXRpb24+e1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0YWNrQ2FyZGluYWwoKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBib3ggfSBmcm9tIFwiLi9ib3hcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJ0Qm94IGV4dGVuZHMgYm94IHtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvYm94Mi5wbmdcIjtcclxuICB3aWR0aCA9IDY0O1xyXG4gIGhlaWdodCA9IDUwMDtcclxufVxyXG4iLCJpbXBvcnQge29ian0gZnJvbSBcIi4uLy4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHtwb3NpdGlvbmVkX3Nwcml0ZSwgc3ByaXRlLHNwcml0ZV9nZW59IGZyb20gXCIuLi8uLi8uLi9saWIvc3ByaXRlXCI7XHJcbmltcG9ydCB7Ym9hcmRfc3RhdGUsIEJvYXJkfSBmcm9tIFwiLi4vLi4vcm9vbXMvQm9hcmRcIjtcclxuaW1wb3J0IHsgVW5iaW5kLCBleGVjX3R5cGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7cG9zaXRpb24sb2JqX3N0YXRlfSBmcm9tIFwiLi4vLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uLy4uL21haW5cIjtcclxuXHJcbmV4cG9ydCBlbnVtIHNpZGV7XHJcbiAgd2hpdGUsXHJcbiAgYmxhY2tcclxufVxyXG5cclxuZXhwb3J0IGVudW0gcGllY2VfdHlwZXtcclxuICBwYXduLFxyXG4gIHJvb2ssXHJcbiAgYmlzaG9wLFxyXG4gIHF1ZWVuLFxyXG4gIGtpbmcsXHJcbiAga25pZ2h0XHJcbn1cclxuXHJcbmludGVyZmFjZSBwaWVjZV9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcclxuICBzaWRlOnNpZGUsXHJcbiAgdHlwZTpwaWVjZV90eXBlLFxyXG4gIGhhc19tb3ZlZDpib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGllY2VfcGFyYW1ldGVyc3tcclxuICBzaWRlOnNpZGVcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHBpZWNlIGV4dGVuZHMgb2Jqe1xyXG4gIGhlaWdodCA9IDEwMDtcclxuICB3aWR0aCA9IDEwMDtcclxuICBjb2xsaXNpb24gPSB0cnVlO1xyXG4gIHBhcmFtczpwaWVjZV9wYXJhbWV0ZXJzO1xyXG4gIHN0YXRlOnBpZWNlX3N0YXRlO1xyXG4gIHRhZ3MgPSBbXCJwaWVjZVwiXTtcclxuICBzdGF0aWMgZGVmYXVsdF9wYXJhbXM6cGllY2VfcGFyYW1ldGVycyA9IHtcclxuICAgIHNpZGU6c2lkZS53aGl0ZVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOnBpZWNlX3BhcmFtZXRlcnMgPSBwaWVjZS5kZWZhdWx0X3BhcmFtcyl7XHJcbiAgICBzdXBlcihzdGF0ZSxwYXJhbXMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcG9zaXRpb246e1xyXG4gICAgICAgIHg6c3RhdGUucG9zaXRpb24ueCAqIHRoaXMud2lkdGggLSAzNTAsXHJcbiAgICAgICAgeTpzdGF0ZS5wb3NpdGlvbi55ICogdGhpcy5oZWlnaHQgLSAzNTBcclxuICAgICAgfSxcclxuICAgICAgdmVsb2NpdHk6e1xyXG4gICAgICAgIHg6MCxcclxuICAgICAgICB5OjBcclxuICAgICAgfSxcclxuICAgICAgc2lkZTpwYXJhbXMuc2lkZSxcclxuICAgICAgdHlwZTp1bmRlZmluZWQsXHJcbiAgICAgIGhhc19tb3ZlZDpmYWxzZSxcclxuICAgICAgcm90YXRpb246c3RhdGUucm90YXRpb24sXHJcbiAgICAgIHNjYWxpbmc6c3RhdGUuc2NhbGluZ1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgfVxyXG4gIG1vdmV0b0NvcmRzKGE6cG9zaXRpb24pe1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi54ID0gYS54ICogdGhpcy53aWR0aCAtIDM1MDtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSA9IGEueSAqIHRoaXMuaGVpZ2h0IC0gMzUwO1xyXG4gIH1cclxuICBnZXRDb3JkcygpOnBvc2l0aW9ue1xyXG4gICAgcmV0dXJuIHt4Ok1hdGgucm91bmQoKHRoaXMuc3RhdGUucG9zaXRpb24ueCszNTApLzEwMCkseTpNYXRoLnJvdW5kKCh0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKyAzNTApLzEwMCl9O1xyXG4gIH1cclxuICBnZXRBdHRhY2tpbmcoKTpBcnJheTxwb3NpdGlvbj57XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIHJlbmRlcmYodDpudW1iZXIpOnBvc2l0aW9uZWRfc3ByaXRle1xyXG4gICAgbGV0IHNwcml0ZXMgPSBzcHJpdGVfZ2VuKHRoaXMuc3ByaXRlX3NoZWV0LHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpO1xyXG4gICAgaWYodGhpcy5wYXJhbXMuc2lkZSA9PT0gc2lkZS53aGl0ZSl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3ByaXRlOnNwcml0ZXNbMF1bMF0sXHJcbiAgICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcHJpdGU6c3ByaXRlc1swXVsxXSxcclxuICAgICAgICB4OnRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OnRoaXMuc3RhdGUucG9zaXRpb24ueVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGF0dGFja0RpYWdvbmFsKCl7XHJcbiAgICBsZXQgY29yZHMgPSB0aGlzLmdldENvcmRzKCk7XHJcbiAgICBsZXQgcm9vbSA9IGcuZ2V0Um9vbSgpIGFzIEJvYXJkO1xyXG4gICAgbGV0IGF0dGFja2VkOkFycmF5PHBvc2l0aW9uPiA9IFtdO1xyXG4gICAgZm9yKGxldCBhID0gMTthIDwgODthKyspe1xyXG4gICAgICBpZihjb3Jkcy54IC0gYSA+PSAwICYmIGNvcmRzLnggLSBhIDwgOCAmJiBjb3Jkcy55IC0gYSA+PSAwICYmIGNvcmRzLnggLSBhIDwgOCl7XHJcbiAgICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggLSBhLHk6Y29yZHMueSAtIGF9KTtcclxuICAgICAgICBpZihwaWVjZXMubGVuZ3RoID09IDAgfHwgcGllY2VzWzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggLSBhLHk6Y29yZHMueSAtIGF9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocGllY2VzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ICBcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IDE7YSA8IDg7YSsrKXtcclxuICAgICAgaWYoY29yZHMueCAtIGEgPj0gMCAmJiBjb3Jkcy54IC0gYSA8IDggJiYgY29yZHMueSArIGEgPj0gMCAmJiBjb3Jkcy55ICsgYSA8IDgpe1xyXG4gICAgICAgIGxldCBwaWVjZXMgPSByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54IC0gYSx5OmNvcmRzLnkgKyBhfSk7XHJcbiAgICAgICAgaWYocGllY2VzLmxlbmd0aCA9PSAwIHx8IHBpZWNlc1swXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54IC0gYSx5OmNvcmRzLnkgKyBhfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBpZWNlcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAgXHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgPSAxO2EgPCA4O2ErKyl7XHJcbiAgICAgIGlmKGNvcmRzLnggKyBhID49IDAgJiYgY29yZHMueCArIGEgPCA4ICYmIGNvcmRzLnkgKyBhID49IDAgJiYgY29yZHMueSArIGEgPCA4KXtcclxuICAgICAgICBsZXQgcGllY2VzID0gcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCArIGEseTpjb3Jkcy55ICsgYX0pO1xyXG4gICAgICAgIGlmKHBpZWNlcy5sZW5ndGggPT0gMCB8fCBwaWVjZXNbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKXtcclxuICAgICAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCArIGEseTpjb3Jkcy55ICsgYX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwaWVjZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9ICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gMTthIDwgODthKyspe1xyXG4gICAgICBpZihjb3Jkcy54ICsgYSA+PSAwICYmIGNvcmRzLnggKyBhIDwgOCAmJiBjb3Jkcy55IC0gYSA+PSAwICYmIGNvcmRzLnkgLSBhIDwgOCl7XHJcbiAgICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggKyBhLHk6Y29yZHMueSAtIGF9KTtcclxuICAgICAgICBpZihwaWVjZXMubGVuZ3RoID09IDAgfHwgcGllY2VzWzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggKyBhLHk6Y29yZHMueSAtIGF9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocGllY2VzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhdHRhY2tlZDtcclxuICB9XHJcbiAgYXR0YWNrQ2FyZGluYWwoKXtcclxuICAgIGxldCBjb3JkcyA9IHRoaXMuZ2V0Q29yZHMoKTtcclxuICAgIGxldCByb29tID0gZy5nZXRSb29tKCkgYXMgQm9hcmQ7XHJcbiAgICBsZXQgYXR0YWNrZWQ6QXJyYXk8cG9zaXRpb24+ID0gW107XHJcbiAgICBmb3IobGV0IGEgPSBjb3Jkcy54IC0gMTthID49IDA7YS0tKXtcclxuICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKHt4OmEseTpjb3Jkcy55fSk7XHJcbiAgICAgIGlmKHBpZWNlcy5sZW5ndGggPT09IDAgfHwgcGllY2VzWzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgYXR0YWNrZWQucHVzaCh7eDphLHk6Y29yZHMueX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHBpZWNlcy5sZW5ndGggPiAwKXtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gY29yZHMueCArIDE7YSA8IDg7YSsrKXtcclxuICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKHt4OmEseTpjb3Jkcy55fSk7XHJcbiAgICAgIGlmKHBpZWNlcy5sZW5ndGggPT09IDAgfHwgcGllY2VzWzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgYXR0YWNrZWQucHVzaCh7eDphLHk6Y29yZHMueX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHBpZWNlcy5sZW5ndGggPiAwKXtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gY29yZHMueSAtIDE7YSA+PSAwO2EtLSl7XHJcbiAgICAgIGxldCBwaWVjZXMgPSByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54LHk6YX0pO1xyXG4gICAgICBpZihwaWVjZXMubGVuZ3RoID09PSAwIHx8IHBpZWNlc1swXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCx5OmF9KTtcclxuICAgICAgfVxyXG4gICAgICBpZihwaWVjZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IGNvcmRzLnkgKyAxO2EgPCA4O2ErKyl7XHJcbiAgICAgIGxldCBwaWVjZXMgPSByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54LHk6YX0pO1xyXG4gICAgICBpZihwaWVjZXMubGVuZ3RoID09PSAwIHx8IHBpZWNlc1swXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCx5OmF9KTtcclxuICAgICAgfVxyXG4gICAgICBpZihwaWVjZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhdHRhY2tlZDtcclxuICB9XHJcbiAgdW5iaW5kX2NvbnRyb2xzKCl7XHJcbiAgICBmb3IobGV0IGEgb2YgdGhpcy5iaW5kcyl7XHJcbiAgICAgIFVuYmluZChhKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2VsZWN0KCl7XHJcbiAgICBsZXQgcm9vbSA9IGcuc3RhdGUuY3VycmVudF9yb29tIGFzIEJvYXJkO1xyXG4gICAgICBpZihyb29tLnN0YXRlLnR1cm4gPT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgcm9vbS5zdGF0ZS5zZWxlY3RlZCA9IHRoaXM7XHJcbiAgICAgICAgcm9vbS5jbGVhcl9hdHRhY2tlZCgpO1xyXG4gICAgICAgIGxldCB2YWxpZF9hdHRhY2tlZCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgZyBvZiB0aGlzLmdldEF0dGFja2luZygpKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKGcpO1xyXG4gICAgICAgICAgaWYocGllY2VzLmxlbmd0aCA9PSAwIHx8IHBpZWNlc1swXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgICAgICB2YWxpZF9hdHRhY2tlZC5wdXNoKGcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByb29tLnN0YXRlLmF0dGFja2VkID0gdmFsaWRfYXR0YWNrZWQ7XHJcbiAgICAgICAgcm9vbS5hdHRhY2sodmFsaWRfYXR0YWNrZWQpO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIGJpbmRfY29udHJvbHMoKXtcclxuICAgIC8qXHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwibW91c2UxXCIsZXhlY190eXBlLm9uY2UsKCk9PntcclxuICAgICAgdGhpcy5zZWxlY3QoKTsgIFxyXG4gICAgfSlcclxuICAgICovXHJcbiAgfVxyXG59IiwiaW1wb3J0IHtjb21wb3NpdGVfb2JqLCBncmF2aXR5X29ian0gZnJvbSBcIi4uLy4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUscG9zaXRpb259IGZyb20gXCIuLi8uLi8uLi9saWIvc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGxhdF9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcclxuICBoZWFsdGg6bnVtYmVyICBcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIHBsYXRmb3JtZXJfb2JqIGV4dGVuZHMgZ3Jhdml0eV9vYmp7XHJcbiAgZW5lbXkgPSBmYWxzZTtcclxuICBzdGF0ZTpwbGF0X3N0YXRlXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtZXRlcnM6dW5rbm93bil7XHJcbiAgICBzdXBlcihzdGF0ZSxwYXJhbWV0ZXJzKTtcclxuICB9XHJcbiAgc3RhdGVmKGE6bnVtYmVyKXtcclxuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBwbGF0X3N0YXRlO1xyXG4gICAgaWYoc3RhdGUuaGVhbHRoIDw9IDApe1xyXG4gICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHBsYXRmb3JtZXJfb2JqX2NvbXBvc2l0ZSBleHRlbmRzIGNvbXBvc2l0ZV9vYmp7XHJcbiAgZW5lbXkgPSBmYWxzZTtcclxuICBzdGF0ZTpwbGF0X3N0YXRlO1xyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSl7XHJcbiAgICBzdXBlcihzdGF0ZSk7XHJcbiAgfVxyXG4gIHN0YXRlZihhOm51bWJlcil7XHJcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgcGxhdF9zdGF0ZTtcclxuICAgIGlmKHN0YXRlLmhlYWx0aCA8PSAwKXtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQge3BsYXRmb3JtZXJfb2JqLHBsYXRfc3RhdGV9IGZyb20gXCIuL2Fic3RyYWN0L3BsYXRmb3JtZXJfb2JqXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlLHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBib3ggZXh0ZW5kcyBwbGF0Zm9ybWVyX29iantcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvYm94LnBuZ1wiXHJcbiAgY29sbGlzaW9uID0gdHJ1ZVxyXG4gIGhlaWdodCA9IDY0O1xyXG4gIHdpZHRoID0gNTAwO1xyXG4gIGdyYXZpdHkgPSBmYWxzZTtcclxuICBlbmVteSA9IGZhbHNlO1xyXG4gIHRhZ3MgPSBbXCJzdGF0aWNcIl1cclxufVxyXG4iLCJpbXBvcnQge3BsYXRmb3JtZXJfb2JqLCBwbGF0X3N0YXRlfSBmcm9tIFwiLi9hYnN0cmFjdC9wbGF0Zm9ybWVyX29ialwiO1xyXG5pbXBvcnQge29ial9zdGF0ZX0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBleGVjX3R5cGUgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7cm90YXRpb25fbGVuZ3RoLCBvYmp9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IEdvb21iYSB9IGZyb20gXCIuL0dvb21iYVwiO1xyXG5pbXBvcnQge2d9IGZyb20gXCIuLi9tYWluXCI7XHJcblxyXG5pbnRlcmZhY2UgYnVsbGV0X3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRle1xyXG4gIHJvdGF0aW9uOm51bWJlcixcclxuICBkaXN0YW5jZTpudW1iZXIsXHJcbiAgc3BlZWQ6bnVtYmVyLFxyXG4gIGRhbWFnZTpudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIHBvc2l0aW9ue1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBidWxsZXRfcGFyYW1ldGVyc3tcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBidWxsZXQgZXh0ZW5kcyBvYmp7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2J1bGxldC5wbmdcIjtcclxuICBoZWlnaHQgPSAyMDtcclxuICB3aWR0aCA9IDEwO1xyXG4gIGdyYXZpdHkgPSBmYWxzZTtcclxuICBtYXhfZGlzdGFuY2UgPSAyMDAwO1xyXG4gIHRhZ3MgPSBbXCJidWxsZXRcIl07XHJcbiAgc3RhdGU6YnVsbGV0X3N0YXRlO1xyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6YnVsbGV0X3BhcmFtZXRlcnMpe1xyXG4gICAgc3VwZXIoc3RhdGUscGFyYW1zKTtcclxuICAgIHRoaXMuc3RhdGUuZGFtYWdlID0gNTtcclxuICAgIHRoaXMuc3RhdGUuZGlzdGFuY2UgPSAwXHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOm51bWJlcil7XHJcbiAgICB0aGlzLnN0YXRlLnZlbG9jaXR5ID0gcm90YXRpb25fbGVuZ3RoKHRoaXMuc3RhdGUuc3BlZWQsdGhpcy5zdGF0ZS5yb3RhdGlvbik7XHJcbiAgICB0aGlzLnN0YXRlLmRpc3RhbmNlICs9IHRoaXMuc3RhdGUuc3BlZWQ7XHJcbiAgICBpZih0aGlzLnN0YXRlLmRpc3RhbmNlID4gdGhpcy5tYXhfZGlzdGFuY2Upe1xyXG4gICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWdpc3RlckNvbnRyb2xzKCl7XHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvY2tldCBleHRlbmRzIGJ1bGxldHtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvZm9sZGVyL3JvY2tldC5wbmdcIjtcclxuICBoZWlnaHQgPSA2NztcclxuICB3aWR0aCA9IDE2O1xyXG4gIHBhcnRpY2xlX3RpbWVyID0gMDtcclxuICBwYXJ0aWNsZV9mcmVxdWVuY3kgPSA1O1xyXG4gIG1heF9kaXN0YW5jZSA9IDUwMDA7XHJcbiAgdGFncyA9IFtcIlJvY2tldFwiXVxyXG4gIGhpdGJveCA9IHtcclxuICAgIHhfb2Zmc2V0OjAsXHJcbiAgICB5X29mZnNldDowLFxyXG4gICAgd2lkdGg6MTYsXHJcbiAgICBoZWlnaHQ6MTZcclxuICB9XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpidWxsZXRfcGFyYW1ldGVycyl7XHJcbiAgICBzdXBlcihzdGF0ZSxwYXJhbXMpO1xyXG4gICAgdGhpcy5zdGF0ZS5zcGVlZCA9IDE1O1xyXG4gICAgdGhpcy5zdGF0ZS5kYW1hZ2UgPSAyMDtcclxuICB9XHJcbiAgcmVnaXN0ZXJBdWRpbygpe1xyXG4gICAgdGhpcy5hdWRpby5hZGQoXCJleHBsb3Npb25cIixcIi4vc291bmRzL2V4cGxvc2lvbjIubXAzXCIpO1xyXG4gIH1cclxuICBzdGF0ZWYodGltZTpudW1iZXIpe1xyXG4gICAgc3VwZXIuc3RhdGVmKHRpbWUpO1xyXG4gICAgaWYodGhpcy5wYXJ0aWNsZV90aW1lciA9PSAwKXtcclxuICAgICAgbGV0IG9mZnNldCA9IHJvdGF0aW9uX2xlbmd0aCgzMCx0aGlzLnN0YXRlLnJvdGF0aW9uICsgMTgwKTtcclxuICAgICAgdGhpcy5lbWl0UGFydGljbGUoXCJzbW9rZVwiLG9mZnNldCwgNDAwLCAxNik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhcnRpY2xlX3RpbWVyICs9IHRpbWU7XHJcbiAgICBpZih0aGlzLnBhcnRpY2xlX3RpbWVyID4gdGhpcy5wYXJ0aWNsZV9mcmVxdWVuY3kpe1xyXG4gICAgIHRoaXMucGFydGljbGVfdGltZXIgPSAwOyBcclxuICAgIH1cclxuICAgIGxldCByb29tID0gZy5zdGF0ZS5jdXJyZW50X3Jvb207XHJcbiAgICBsZXQgY29sbGlzaW9ucyA9IHJvb20uY2hlY2tDb2xsaXNpb25zKHRoaXMuZ2V0RnVsbENvbGxpc2lvbkJveCgpLFtcImd1blwiLFwicGxheWVyXCJdKTtcclxuICAgIGlmKGNvbGxpc2lvbnMubGVuZ3RoID4gMCl7XHJcbiAgICAgIGZvcihsZXQgY29sbGlzaW9uIG9mIGNvbGxpc2lvbnMpe1xyXG4gICAgICAgIGxldCBzdCA9IGNvbGxpc2lvbi5zdGF0ZSBhcyB1bmtub3duIGFzIHBsYXRfc3RhdGU7XHJcbiAgICAgICAgaWYoKDxwbGF0Zm9ybWVyX29iaj5jb2xsaXNpb24pLnN0YXRlLmhlYWx0aCl7XHJcbiAgICAgICAgICBzdC5oZWFsdGggLT0gdGhpcy5zdGF0ZS5kYW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvbGxpc2lvbi50YWdzLmluZGV4T2YoXCJkdW1teVwiKSA+IC0xKXtcclxuICAgICAgICAgIGxldCBkdW1teSA9IGNvbGxpc2lvbiBhcyBHb29tYmE7XHJcbiAgICAgICAgICBpZihkdW1teS5zdGF0ZS5qdW1waW5nKXtcclxuICAgICAgICAgICAgZHVtbXkuc3RhdGUudGltZXNfYWlyc2hvdCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnN0YXRlLmRpc3RhbmNlID0gdGhpcy5tYXhfZGlzdGFuY2U7XHJcbiAgICAgIHRoaXMuZGVsZXRlKCk7XHJcbiAgICAgIGxldCBleHBsb3Npb25fY29sbGlzaW9ucyA9IHJvb20uY2hlY2tDb2xsaXNpb25zKHtcclxuICAgICAgICB4OnRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OnRoaXMuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDoyNTYsXHJcbiAgICAgICAgaGVpZ2h0OjI1NlxyXG4gICAgICB9LFtcInN0YXRpY1wiXSlcclxuICAgICAgZm9yKGxldCBjb2xsaWRlciBvZiBleHBsb3Npb25fY29sbGlzaW9ucyl7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZShjb2xsaWRlcik7XHJcbiAgICAgICAgbGV0IG11bHRpcGx5ZXIgPSAxIC0gZGlzdGFuY2UvMzAwO1xyXG4gICAgICAgIGlmKG11bHRpcGx5ZXIgPCAwKVxyXG4gICAgICAgICAgbXVsdGlwbHllciA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG9fc3RhdGUgPSBjb2xsaWRlci5zdGF0ZSBhcyBvYmpfc3RhdGU7XHJcbiAgICAgICAgbGV0IHZlbG9jaXRpZXMgPSByb3RhdGlvbl9sZW5ndGgobXVsdGlwbHllciAqIDEwMCwgdGhpcy5hbmdsZVRvd2FyZHMoY29sbGlkZXIpKTtcclxuICAgICAgICBvX3N0YXRlLnZlbG9jaXR5LnggKz0gdmVsb2NpdGllcy54O1xyXG4gICAgICAgIG9fc3RhdGUudmVsb2NpdHkueSArPSB2ZWxvY2l0aWVzLnk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0UGFydGljbGUoXCJleHBsb3Npb25cIix7eDowLHk6MH0sNTAwLDApO1xyXG4gICAgICB0aGlzLmF1ZGlvLnBsYXkoXCJleHBsb3Npb25cIiwwLjIpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIlxuaW50ZXJmYWNlIHByZWZhYnMge1xuICBbaW5kZXg6c3RyaW5nXTphbnlcbn1cbmltcG9ydCB7QmlzaG9wfSBmcm9tIFwiLi9CaXNob3BcIjtcbmltcG9ydCB7Ym94fSBmcm9tIFwiLi9ib3hcIjtcbmltcG9ydCB7YnVsbGV0fSBmcm9tIFwiLi9idWxsZXRcIjtcbmltcG9ydCB7Q29udHJvbGxlZFBsYXllcn0gZnJvbSBcIi4vQ29udHJvbGxlZFBsYXllclwiO1xuaW1wb3J0IHtDdXJzb3J9IGZyb20gXCIuL0N1cnNvclwiO1xuaW1wb3J0IHtEb29yfSBmcm9tIFwiLi9Eb29yXCI7XG5pbXBvcnQge0dvb21iYX0gZnJvbSBcIi4vR29vbWJhXCI7XG5pbXBvcnQge0d1bn0gZnJvbSBcIi4vR3VuXCI7XG5pbXBvcnQge0tpbmd9IGZyb20gXCIuL0tpbmdcIjtcbmltcG9ydCB7S25pZ2h0fSBmcm9tIFwiLi9LbmlnaHRcIjtcbmltcG9ydCB7TW92ZX0gZnJvbSBcIi4vTW92ZVwiO1xuaW1wb3J0IHtQYXdufSBmcm9tIFwiLi9QYXduXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQge1F1ZWVufSBmcm9tIFwiLi9RdWVlblwiO1xuaW1wb3J0IHtSb29rfSBmcm9tIFwiLi9Sb29rXCI7XG5pbXBvcnQge1ZlcnRCb3h9IGZyb20gXCIuL1ZlcnRCb3hcIjtcbmV4cG9ydCBsZXQgcHJlZmFiczpwcmVmYWJzID0ge1xuXHRCaXNob3A6QmlzaG9wLFxuXHRib3g6Ym94LFxuXHRidWxsZXQ6YnVsbGV0LFxuXHRDb250cm9sbGVkUGxheWVyOkNvbnRyb2xsZWRQbGF5ZXIsXG5cdEN1cnNvcjpDdXJzb3IsXG5cdERvb3I6RG9vcixcblx0R29vbWJhOkdvb21iYSxcblx0R3VuOkd1bixcblx0S2luZzpLaW5nLFxuXHRLbmlnaHQ6S25pZ2h0LFxuXHRNb3ZlOk1vdmUsXG5cdFBhd246UGF3bixcblx0UGxheWVyOlBsYXllcixcblx0UXVlZW46UXVlZW4sXG5cdFJvb2s6Um9vayxcblx0VmVydEJveDpWZXJ0Qm94LFxufSIsImltcG9ydCB7cm9vbSxyb29tX2l9IGZyb20gXCIuLi8uLi9saWIvcm9vbVwiO1xyXG5pbXBvcnQge3BpZWNlfSBmcm9tIFwiLi4vb2JqZWN0cy9hYnN0cmFjdC9waWVjZVwiO1xyXG5pbXBvcnQge0tuaWdodH0gZnJvbSBcIi4uL29iamVjdHMvS25pZ2h0XCI7XHJcbmltcG9ydCB7Um9va30gZnJvbSBcIi4uL29iamVjdHMvUm9va1wiO1xyXG5pbXBvcnQge01vdmV9IGZyb20gXCIuLi9vYmplY3RzL01vdmVcIjtcclxuaW1wb3J0IHtvYmp9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IEJpc2hvcCB9IGZyb20gXCIuLi9vYmplY3RzL0Jpc2hvcFwiO1xyXG5pbXBvcnQgeyBRdWVlbiB9IGZyb20gXCIuLi9vYmplY3RzL1F1ZWVuXCI7XHJcbmltcG9ydCB7IEtpbmcgfSBmcm9tIFwiLi4vb2JqZWN0cy9LaW5nXCI7XHJcbmltcG9ydCB7IFBhd24gfSBmcm9tIFwiLi4vb2JqZWN0cy9QYXduXCI7XHJcbmltcG9ydCB7Z2FtZSxHZXRWaWV3cG9ydERpbWVuc2lvbnMgfSBmcm9tIFwiLi4vLi4vdmFuXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUsIHBvc2l0aW9uLCByb29tX3N0YXRlfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7Q2FtZXJhfSBmcm9tIFwiLi4vLi4vbGliL3JlbmRlclwiO1xyXG5pbXBvcnQgKiBhcyBqc29uIGZyb20gXCIuL0JvYXJkLmpzb25cIjtcclxuaW1wb3J0IHsgdmVsb2NpdHlDb2xsaXNpb25DaGVjayB9IGZyb20gXCIuLi8uLi9saWIvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IGV4ZWNfdHlwZSwgUG9sbF9Nb3VzZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuZXhwb3J0IGVudW0gc2lkZXtcclxuICB3aGl0ZSxcclxuICBibGFja1xyXG59XHJcblxyXG5pbnRlcmZhY2Ugc3BhY2Vfc3RhdGV7XHJcbiAgZW5wYXNzZW50OmJvb2xlYW4sXHJcbiAgYXR0YWNrZWQ6Ym9vbGVhblxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGF0ZV9jb252ZXJ0ZXIocG9zOnBvc2l0aW9uLHJvdGF0aW9uOm51bWJlcixzY2FsaW5nOm51bWJlcik6b2JqX3N0YXRle1xyXG4gIHJldHVybiB7XHJcbiAgICBwb3NpdGlvbjpwb3MsXHJcbiAgICB2ZWxvY2l0eTp7XHJcbiAgICAgIHg6MCxcclxuICAgICAgeTowXHJcbiAgICB9LFxyXG4gICAgcm90YXRpb24sXHJcbiAgICBzY2FsaW5nOntcclxuICAgICAgd2lkdGg6c2NhbGluZyxcclxuICAgICAgaGVpZ2h0OnNjYWxpbmdcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYm9hcmRfc3RhdGV7XHJcbiAgdHVybjpzaWRlLFxyXG4gIHdoaXRlX2JvYXJkOkFycmF5PEFycmF5PHNwYWNlX3N0YXRlPj4sXHJcbiAgYmxhY2tfYm9hcmQ6QXJyYXk8QXJyYXk8c3BhY2Vfc3RhdGU+PlxyXG4gIHNlbGVjdGVkOnBpZWNlLFxyXG4gIHNlbGVjdGVkX29yaWdpbmFsX3Bvc2l0aW9uOnBvc2l0aW9uLFxyXG4gIHNxdWFyZXM6QXJyYXk8QXJyYXk8TW92ZT4+LFxyXG4gIHBpZWNlczpBcnJheTxwaWVjZT4sXHJcbiAgYXR0YWNrZWQ6QXJyYXk8cG9zaXRpb24+LFxyXG4gIGRyYWdnaW5nOmJvb2xlYW5cclxufVxyXG5leHBvcnQgY2xhc3MgQm9hcmQgZXh0ZW5kcyByb29tPGJvYXJkX3N0YXRlPntcclxuICBzdGF0ZTpib2FyZF9zdGF0ZTtcclxuICBiYWNrZ3JvdW5kX3VybD1cIi4vc3ByaXRlcy9ib2FyZC5wbmdcIjtcclxuICBjb25zdHJ1Y3RvcihnYW1lOmdhbWU8dW5rbm93bj4pe1xyXG4gICAgc3VwZXIoZ2FtZSx7b2JqZWN0czpbXX0pO1xyXG4gICAgZ2FtZS5zdGF0ZS5jYW1lcmFzID0gW1xyXG4gICAgICBuZXcgQ2FtZXJhKHtcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowLFxyXG4gICAgICAgIGRpbWVuc2lvbnM6e1xyXG4gICAgICAgICAgaGVpZ2h0OkdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodCxcclxuICAgICAgICAgIHdpZHRoOkdldFZpZXdwb3J0RGltZW5zaW9ucygpLndpZHRoXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsaW5nOjAuNzUsXHJcbiAgICAgICAgZGVidWc6ZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgeDowLFxyXG4gICAgICAgIHk6MCxcclxuICAgICAgICB3aWR0aDoxLFxyXG4gICAgICAgIGhlaWdodDoxXHJcbiAgICAgIH0pXHJcbiAgICBdXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0dXJuOnNpZGUud2hpdGUsXHJcbiAgICAgIHdoaXRlX2JvYXJkOltdLFxyXG4gICAgICBibGFja19ib2FyZDpbXSxcclxuICAgICAgc2VsZWN0ZWQ6dW5kZWZpbmVkLFxyXG4gICAgICBzZWxlY3RlZF9vcmlnaW5hbF9wb3NpdGlvbjp1bmRlZmluZWQsXHJcbiAgICAgIHNxdWFyZXM6W10sXHJcbiAgICAgIHBpZWNlczpbXSxcclxuICAgICAgYXR0YWNrZWQ6W10sXHJcbiAgICAgIGRyYWdnaW5nOmZhbHNlXHJcbiAgICB9O1xyXG4gICAgbGV0IHJvdzIgPSBbbmV3IFJvb2soc3RhdGVfY29udmVydGVyKHt4OjAseTo3fSwwLDEpLHtzaWRlOnNpZGUuYmxhY2t9KSxuZXcgS25pZ2h0KHN0YXRlX2NvbnZlcnRlcih7eDoxLHk6N30sMCwxKSx7c2lkZTpzaWRlLmJsYWNrfSksbmV3IEJpc2hvcChzdGF0ZV9jb252ZXJ0ZXIoe3g6Mix5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pLG5ldyBRdWVlbihzdGF0ZV9jb252ZXJ0ZXIoe3g6Myx5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pLG5ldyBLaW5nKHN0YXRlX2NvbnZlcnRlcih7eDo0LHk6N30sMCwxKSx7c2lkZTpzaWRlLmJsYWNrfSksbmV3IEJpc2hvcChzdGF0ZV9jb252ZXJ0ZXIoe3g6NSx5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pLG5ldyBLbmlnaHQoc3RhdGVfY29udmVydGVyKHt4OjYseTo3fSwwLDEpLHtzaWRlOnNpZGUuYmxhY2t9KSxuZXcgUm9vayhzdGF0ZV9jb252ZXJ0ZXIoe3g6Nyx5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pXTtcclxuICAgIGxldCByb3c3ID0gW25ldyBSb29rKHN0YXRlX2NvbnZlcnRlcih7eDowLHk6MH0sMCwxKSx7c2lkZTpzaWRlLndoaXRlfSksbmV3IEtuaWdodChzdGF0ZV9jb252ZXJ0ZXIoe3g6MSx5OjB9LDAsMSkse3NpZGU6c2lkZS53aGl0ZX0pLG5ldyBCaXNob3Aoc3RhdGVfY29udmVydGVyKHt4OjIseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KSxuZXcgUXVlZW4oc3RhdGVfY29udmVydGVyKHt4OjMseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KSxuZXcgS2luZyhzdGF0ZV9jb252ZXJ0ZXIoe3g6NCx5OjB9LDAsMSkse3NpZGU6c2lkZS53aGl0ZX0pLG5ldyBCaXNob3Aoc3RhdGVfY29udmVydGVyKHt4OjUseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KSxuZXcgS25pZ2h0KHN0YXRlX2NvbnZlcnRlcih7eDo2LHk6MH0sMCwxKSx7c2lkZTpzaWRlLndoaXRlfSksbmV3IFJvb2soc3RhdGVfY29udmVydGVyKHt4OjcseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KV07XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCByb3cyLmxlbmd0aDthKyspe1xyXG4gICAgICBsZXQgcGF3bjEgPSBuZXcgUGF3bihzdGF0ZV9jb252ZXJ0ZXIoe3g6YSx5OjF9LDAsMSkse3NpZGU6c2lkZS53aGl0ZX0pO1xyXG4gICAgICBsZXQgcGF3bjIgPSBuZXcgUGF3bihzdGF0ZV9jb252ZXJ0ZXIoe3g6YSx5OjZ9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pO1xyXG4gICAgICB0aGlzLmFkZEl0ZW0ocm93N1thXSk7XHJcbiAgICAgIHRoaXMuYWRkSXRlbShwYXduMSk7XHJcbiAgICAgIHRoaXMuYWRkSXRlbShyb3cyW2FdKTtcclxuICAgICAgdGhpcy5hZGRJdGVtKHBhd24yKTtcclxuICAgICAgdGhpcy5zdGF0ZS5waWVjZXMucHVzaChwYXduMik7XHJcbiAgICAgIHRoaXMuc3RhdGUucGllY2VzLnB1c2gocm93N1thXSk7XHJcbiAgICAgIHRoaXMuc3RhdGUucGllY2VzLnB1c2gocGF3bjEpO1xyXG4gICAgICB0aGlzLnN0YXRlLnBpZWNlcy5wdXNoKHJvdzJbYV0pO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IDA7YTw4O2ErKyl7XHJcbiAgICAgIGxldCBtdl9yb3c6QXJyYXk8TW92ZT4gPSBbXTtcclxuICAgICAgZm9yKGxldCBiID0gMDtiPDg7YisrKXtcclxuICAgICAgICBsZXQgZCA9IGE7XHJcbiAgICAgICAgKCgpPT4ge1xyXG4gICAgICAgICAgbGV0IG1vdmVfbyA9IG5ldyBNb3ZlKHN0YXRlX2NvbnZlcnRlcih7eDphLHk6Yn0sMCwxKSk7XHJcbiAgICAgICAgICBtdl9yb3cucHVzaChtb3ZlX28pO1xyXG4gICAgICAgICAgdGhpcy5hZGRJdGVtKG1vdmVfbyk7XHJcbiAgICAgICAgfSkoKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhdGUuc3F1YXJlcy5wdXNoKG12X3Jvdyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlLmJsYWNrX2JvYXJkID0gdGhpcy5ibGFua19ib2FyZCgpO1xyXG4gICAgdGhpcy5zdGF0ZS53aGl0ZV9ib2FyZCA9IHRoaXMuYmxhbmtfYm9hcmQoKTtcclxuICAgIGZvcihsZXQgeCBvZiB0aGlzLnN0YXRlLnBpZWNlcyl7XHJcbiAgICAgIGlmKHguc3RhdGUuc2lkZSA9PT0gc2lkZS53aGl0ZSl7XHJcbiAgICAgICAgeC5iaW5kX2NvbnRyb2xzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmVnaXN0ZXJDb250cm9scygpIHtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJtb3VzZTBkb3duXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcblxyXG4gICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGcuc3RhdGUuY2FtZXJhc1swXSk7XHJcbiAgICAgIGxldCBjb2xsaXNpb25zID0gZy5nZXRSb29tKCkuY2hlY2tDb2xsaXNpb25zKHtcclxuICAgICAgICB4OiBtb3VzZS54LFxyXG4gICAgICAgIHk6IG1vdXNlLnksXHJcbiAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgIH0sIFtcIm1vdmVcIl0pO1xyXG4gICAgICBpZiAoY29sbGlzaW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS50dXJuID09ICg8cGllY2U+Y29sbGlzaW9uc1swXSkuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmRyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICg8cGllY2U+Y29sbGlzaW9uc1swXSkuc2VsZWN0KCk7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkX29yaWdpbmFsX3Bvc2l0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgY29sbGlzaW9uc1swXS5zdGF0ZS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJtb3VzZTB1cFwiLCBleGVjX3R5cGUub25jZSwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xyXG4gICAgICAgIGxldCBjb2xsaXNpb25zID0gZy5nZXRSb29tKCkuY2hlY2tPYmplY3RzKHtcclxuICAgICAgICAgIHg6dGhpcy5zdGF0ZS5zZWxlY3RlZC5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgeTp0aGlzLnN0YXRlLnNlbGVjdGVkLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICB3aWR0aDoxLFxyXG4gICAgICAgICAgaGVpZ2h0OjFcclxuICAgICAgICB9LFtcInBpZWNlXCJdKTtcclxuICAgICAgICBpZihjb2xsaXNpb25zLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uc1swXS5yZW5kZXIgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAoPE1vdmU+Y29sbGlzaW9uc1swXSkuZHJvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZC5zdGF0ZS5wb3NpdGlvbiA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRfb3JpZ2luYWxfcG9zaXRpb247XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBnZXRfbWV0YShhOiBwb3NpdGlvbiwgczogc2lkZSkge1xyXG4gICAgaWYgKGEueCA+PSAwICYmIGEueCA8IDggJiYgYS55ID49IDAgJiYgYS55IDwgOCl7XHJcbiAgICAgIGlmKHMgPT09IHNpZGUud2hpdGUpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLndoaXRlX2JvYXJkW2EueF1bYS55XTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ibGFja19ib2FyZFthLnhdW2EueV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuICBjaGFuZ2Vfc2lkZShzOnNpZGUpe1xyXG4gICAgbGV0IHRvX2JpbmQ7XHJcbiAgICBsZXQgdG9fdW5iaW5kO1xyXG4gICAgXHJcbiAgICBpZihzID09IHNpZGUud2hpdGUpe1xyXG4gICAgICB0b19iaW5kID0gcztcclxuICAgICAgdG9fdW5iaW5kID0gc2lkZS5ibGFjaztcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2xlYXJfZW5wYXNzZW50X2JvYXJkKHRoaXMuc3RhdGUud2hpdGVfYm9hcmQpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jbGVhcl9hdHRhY2tlZF9ib2FyZCh0aGlzLnN0YXRlLmJsYWNrX2JvYXJkKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlX2F0dGFja2VkX2JvYXJkKHRoaXMuc3RhdGUuYmxhY2tfYm9hcmQsc2lkZS5ibGFjayk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdG9fYmluZCA9IHNpZGUuYmxhY2s7XHJcbiAgICAgIHRvX3VuYmluZCA9IHNpZGUud2hpdGU7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNsZWFyX2VucGFzc2VudF9ib2FyZCh0aGlzLnN0YXRlLmJsYWNrX2JvYXJkKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2xlYXJfYXR0YWNrZWRfYm9hcmQodGhpcy5zdGF0ZS53aGl0ZV9ib2FyZCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNhbGN1bGF0ZV9hdHRhY2tlZF9ib2FyZCh0aGlzLnN0YXRlLndoaXRlX2JvYXJkLHNpZGUud2hpdGUpO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGZvcihsZXQgeCBvZiB0aGlzLnN0YXRlLnBpZWNlcyl7XHJcbiAgICAgIGlmKHguc3RhdGUuc2lkZSA9PT0gdG9fYmluZCl7XHJcbiAgICAgICAgeC5iaW5kX2NvbnRyb2xzKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICB4LnVuYmluZF9jb250cm9scygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlLnR1cm4gPSBzO1xyXG4gIH1cclxuICBjbGVhcl9lbnBhc3NlbnRfYm9hcmQoeDpBcnJheTxBcnJheTxzcGFjZV9zdGF0ZT4+KXtcclxuICAgIGZvcihsZXQgYSA9IDA7YTw4O2ErKyl7XHJcbiAgICAgIGZvcihsZXQgYiA9IDA7Yjw4O2IrKyl7XHJcbiAgICAgICAgeFthXVtiXS5lbnBhc3NlbnQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjYWxjdWxhdGVfYXR0YWNrZWRfYm9hcmQoeDpBcnJheTxBcnJheTxzcGFjZV9zdGF0ZT4+LHM6c2lkZSl7XHJcbiAgICBmb3IobGV0IGEgb2YgdGhpcy5zdGF0ZS5waWVjZXMpe1xyXG4gICAgICBpZihhLnN0YXRlLnNpZGUgPT0gcyl7XHJcbiAgICAgICAgbGV0IGF0dGFja2VkID0gYS5nZXRBdHRhY2tpbmcoKTtcclxuICAgICAgICBmb3IobGV0IGIgb2YgYXR0YWNrZWQpe1xyXG4gICAgICAgICAgeFtiLnhdW2IueV0uYXR0YWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBcclxuICB9XHJcbiAgY2xlYXJfYXR0YWNrZWRfYm9hcmQoeDpBcnJheTxBcnJheTxzcGFjZV9zdGF0ZT4+KXtcclxuICAgIGZvcihsZXQgYSA9IDA7YTw4O2ErKyl7XHJcbiAgICAgIGZvcihsZXQgYiA9IDA7Yjw4O2IrKyl7XHJcbiAgICAgICAgeFthXVtiXS5hdHRhY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJsYW5rX2JvYXJkKCl7XHJcbiAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgIGZvcihsZXQgYSA9IDA7YTw4O2ErKyl7XHJcbiAgICAgIGxldCByb3cgPSBbXTtcclxuICAgICAgZm9yKGxldCBiID0gMDtiPDg7YisrKXtcclxuICAgICAgICByb3cucHVzaCh7XHJcbiAgICAgICAgICBlbnBhc3NlbnQ6ZmFsc2UsXHJcbiAgICAgICAgICBhdHRhY2tlZDpmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJvYXJkLnB1c2gocm93KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib2FyZDtcclxuICB9XHJcbiAgYXN5bmMgYWRkX3BpZWNlKGE6cGllY2Upe1xyXG4gICAgYXdhaXQgYS5sb2FkKCk7XHJcbiAgICB0aGlzLmFkZEl0ZW0oYSk7XHJcbiAgICB0aGlzLnN0YXRlLnBpZWNlcy51bnNoaWZ0KGEpO1xyXG4gIH1cclxuICByZW1vdmVfcGllY2UoYTpwaWVjZSl7XHJcbiAgICBmb3IobGV0IGIgPSAwO2IgPCB0aGlzLnN0YXRlLnBpZWNlcy5sZW5ndGg7YisrKXtcclxuICAgICAgaWYoYS5pZCA9PT0gdGhpcy5zdGF0ZS5waWVjZXNbYl0uaWQpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUucGllY2VzLnNwbGljZShiLDEpO1xyXG4gICAgICB9ICAgXHJcbiAgICB9XHJcbiAgICBhLmRlbGV0ZSgpO1xyXG4gIH1cclxuICBnZXRfcGllY2UoYTpwb3NpdGlvbik6QXJyYXk8cGllY2U+e1xyXG4gICAgcmV0dXJuICh0aGlzLmNoZWNrQ29sbGlzaW9ucyh7XHJcbiAgICAgIHg6YS54ICogMTAwIC0gMzUwLFxyXG4gICAgICB5OmEueSAqIDEwMCAtIDM1MCxcclxuICAgICAgaGVpZ2h0OjEwMCxcclxuICAgICAgd2lkdGg6MTAwXHJcbiAgICB9KSBhcyB1bmtub3duIGFzIEFycmF5PHBpZWNlPik7XHJcbiAgfVxyXG4gIGNsZWFyX2F0dGFja2VkKCl7XHJcbiAgICBmb3IobGV0IGEgb2YgdGhpcy5zdGF0ZS5hdHRhY2tlZCl7XHJcbiAgICAgIHRoaXMuc3RhdGUuc3F1YXJlc1thLnhdW2EueV0ucmVuZGVyID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGF0dGFjayh4OkFycmF5PHBvc2l0aW9uPil7XHJcbiAgICBmb3IobGV0IGEgb2YgeCl7XHJcbiAgICAgIHRoaXMuc3RhdGUuc3F1YXJlc1thLnhdW2EueV0ucmVuZGVyID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGVmKGE6bnVtYmVyKXtcclxuICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWQgJiYgdGhpcy5zdGF0ZS5kcmFnZ2luZyl7XHJcbiAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZy5zdGF0ZS5jYW1lcmFzWzBdKTtcclxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZC5zdGF0ZS5wb3NpdGlvbi54ID0gbW91c2UueDtcclxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZC5zdGF0ZS5wb3NpdGlvbi55ID0gbW91c2UueTtcclxuICAgIH1cclxuICAgIHN1cGVyLnN0YXRlZihhKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyByb29tLCBhcHBseUdyYXZpdHksb2JqZWN0X3N0YXRlX2NvbmZpZywgc3RhdGVfY29uZmlnIH0gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XHJcbmltcG9ydCB7IEdvb21iYSB9IGZyb20gXCIuLi9vYmplY3RzL0dvb21iYVwiO1xyXG5pbXBvcnQgeyBDb250cm9sbGVkUGxheWVyIH0gZnJvbSBcIi4uL29iamVjdHMvQ29udHJvbGxlZFBsYXllclwiO1xyXG5pbXBvcnQgeyBHdW4gfSBmcm9tIFwiLi4vb2JqZWN0cy9HdW5cIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL29iamVjdHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gXCIuLi9vYmplY3RzL0N1cnNvclwiO1xyXG5pbXBvcnQgeyBib3ggfSBmcm9tIFwiLi4vb2JqZWN0cy9ib3hcIjtcclxuaW1wb3J0IHsgVmVydEJveCB9IGZyb20gXCIuLi9vYmplY3RzL1ZlcnRCb3hcIjtcclxuaW1wb3J0IHsgdmVsb2NpdHlDb2xsaXNpb25DaGVjayBhcyB2ZWxvY2l0eUNvbGxpc2lvbkNoZWNrIH0gZnJvbSBcIi4uLy4uL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgZ3Jhdml0eV9vYmosIHJvdGF0aW9uX2xlbmd0aCB9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IFBvbGxfTW91c2UsIGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgSFVELCBUZXh0IH0gZnJvbSBcIi4uLy4uL2xpYi9odWRcIjtcclxuaW1wb3J0IHsgREVCVUcsIGdhbWUsIEdldFZpZXdwb3J0RGltZW5zaW9ucywgc2V0RGVidWcsdmlld3BvcnQgfSBmcm9tIFwiLi4vLi4vdmFuXCI7XHJcbmltcG9ydCB7YnVsbGV0LCBSb2NrZXR9IGZyb20gXCIuLi9vYmplY3RzL2J1bGxldFwiO1xyXG5pbXBvcnQge2d9IGZyb20gXCIuLi9tYWluXCI7XHJcbmltcG9ydCB7Q2FtZXJhfSBmcm9tIFwiLi4vLi4vbGliL3JlbmRlclwiO1xyXG5pbXBvcnQgKiBhcyBqc29uIGZyb20gXCIuL092ZXJ3b3JsZC5qc29uXCI7XHJcbmludGVyZmFjZSBvdmVyd29ybGRfaSB7XHJcbiAgcGxheWVyOiBncmF2aXR5X29iaixcclxuICBwYXVzZWQ6IGJvb2xlYW4sXHJcbiAgbG9ja2VkX2J1bGxldDpidWxsZXRcclxufVxyXG5cclxuY2xhc3MgT3ZlcndvcmxkX0hVRCBleHRlbmRzIEhVRCB7XHJcbiAgc2V0VGV4dEVsZW1lbnRzKCl7XHJcbiAgICByZXR1cm4gW25ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQgKiA3LzhcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogNDQsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246XCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6MVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBsZXQgeCA9IGcuZ2V0Um9vbSgpLmdldE9iakJ5VGFnKFwiZHVtbXlcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICByZXR1cm4gYFRpbWVzIEFpcnNob3Q6JHt4LnN0YXRlLnRpbWVzX2FpcnNob3R9YDtcclxuICAgIH0pLFxyXG4gICAgbmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodCAqIDYvOFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiA0NCxcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6MVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBsZXQgeCA9IGcuZ2V0Um9vbSgpLmdldE9iakJ5VGFnKFwiZHVtbXlcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBpZih4KVxyXG4gICAgICAgIHJldHVybiBgTWF4IFRpbWVzIEFpcnNob3Q6JHtNYXRoLm1heCh4LnN0YXRlLnRpbWVzX2FpcnNob3QseC5zdGF0ZS5tYXhfdGltZXNfYWlyc2hvdCl9YDtcclxuICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH0pXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPdmVyd29ybGQgZXh0ZW5kcyByb29tPG92ZXJ3b3JsZF9pPntcclxuICBiYWNrZ3JvdW5kX3VybCA9IFwiLi9zcHJpdGVzL2ltRDQxbC5qcGdcIjtcclxuICBvYmplY3RzOmdyYXZpdHlfb2JqW107XHJcbiAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+KSB7XHJcbiAgICBzdXBlcihnYW1lLGpzb24gYXMgdW5rbm93biBhcyBzdGF0ZV9jb25maWcpO1xyXG4gICAgXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwbGF5ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgcGF1c2VkOiBmYWxzZSxcclxuICAgICAgbG9ja2VkX2J1bGxldDpudWxsXHJcbiAgICB9O1xyXG4gICAgZ2FtZS5zdGF0ZS5jYW1lcmFzID0gW1xyXG4gICAgICBuZXcgQ2FtZXJhKHtcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowLFxyXG4gICAgICAgIGRpbWVuc2lvbnM6e1xyXG4gICAgICAgICAgaGVpZ2h0OnZpZXdwb3J0LmhlaWdodCxcclxuICAgICAgICAgIHdpZHRoOnZpZXdwb3J0LndpZHRoICogNC81XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsaW5nOjAuNSxcclxuICAgICAgICBkZWJ1ZzpmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgICx7XHJcbiAgICAgICAgeDoxLFxyXG4gICAgICAgIHk6MCxcclxuICAgICAgICB3aWR0aDowLjgsXHJcbiAgICAgICAgaGVpZ2h0OjFcclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBDYW1lcmEoe1xyXG4gICAgICAgIHg6MCxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgZGltZW5zaW9uczp7XHJcbiAgICAgICAgICB3aWR0aDp2aWV3cG9ydC53aWR0aC81LFxyXG4gICAgICAgICAgaGVpZ2h0OnZpZXdwb3J0LmhlaWdodFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGluZzowLjIsXHJcbiAgICAgICAgZGVidWc6ZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgeDp2aWV3cG9ydC53aWR0aCAqIDQvNSxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgd2lkdGg6MC4yLFxyXG4gICAgICAgIGhlaWdodDoxXHJcbiAgICAgIH0pXHJcbiAgICBdXHJcbiAgICAvKlxyXG5cclxuICAgIGZvcihsZXQgYSA9IDA7YTwxMDthKyspe1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgVmVydEJveCh7XHJcbiAgICAgICAgcG9zaXRpb246e3g6MzIwLHk6MjUwICsgYSAqIDUwMH0sXHJcbiAgICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX1cclxuICAgICAgfSx7fSkpO1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgVmVydEJveCh7XHJcbiAgICAgICAgcG9zaXRpb246e3g6OTAwLHk6MjUwICsgYSAqIDUwMH0sXHJcbiAgICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX1cclxuICAgICAgfSx7fSkpO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IDA7YSA8IDEwMDsgYSsrKXtcclxuICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IGJveCh7XHJcbiAgICAgICAgcG9zaXRpb246e3g6NzAwICsgYSAqIDUwMCx5OjB9LFxyXG4gICAgICAgIHZlbG9jaXR5Ont4OjAseTowfSxcclxuICAgICAgICByb3RhdGlvbjowLFxyXG4gICAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9XHJcbiAgICAgIH0se30pKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5hZGRJdGVtcyhuZXcgUGxheWVyKHtcclxuICAgICAgcG9zaXRpb246e3g6NzAwLHk6MTUwfSxcclxuICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICByb3RhdGlvbjowLFxyXG4gICAgICBzY2FsaW5nOnt3aWR0aDoxLGhlaWdodDoxfX0se2lkOlwicGxheWVyXCJ9KS5jb21iaW5lZE9iamVjdHMoKSk7XHJcbiAgICB0aGlzLmFkZEl0ZW0obmV3IEN1cnNvcih7XHJcbiAgICAgIHBvc2l0aW9uOnt4OjAseTowfSxcclxuICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICByb3RhdGlvbjowLFxyXG4gICAgICBzY2FsaW5nOnt3aWR0aDoxLGhlaWdodDoxfX0se2lkOlwiQ3Vyc29yXCJ9KSk7XHJcbiAgICB0aGlzLmFkZEl0ZW0obmV3IEdvb21iYSh7XHJcbiAgICAgIHBvc2l0aW9uOnt4OjUwMCx5OjUwMH0sXHJcbiAgICAgIHZlbG9jaXR5Ont4OjAseTowfSxcclxuICAgICAgcm90YXRpb246MCxcclxuICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX0gXHJcbiAgICB9KSk7XHJcbiAgICAqL1xyXG4gICAgZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdLmh1ZCA9IG5ldyBPdmVyd29ybGRfSFVEKCk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyQ29udHJvbHMoKSB7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwiRXNjYXBlXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdLnN0YXRlLmRlYnVnID0gIXRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdLnN0YXRlLmRlYnVnO1xyXG4gICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRPYmooXCJwbGF5ZXJcIikgYXMgR29vbWJhO1xyXG4gICAgICBwbGF5ZXIuY29sbGlzaW9uID0gIXBsYXllci5jb2xsaXNpb247XHJcbiAgICAgIHBsYXllci5ncmF2aXR5ID0gIXBsYXllci5ncmF2aXR5O1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIm1vdXNlMGRvd25cIiwgZXhlY190eXBlLnJlcGVhdCwoKSA9PiB7XHJcbiAgICAgIGxldCBndW4gPSB0aGlzLmdldE9iakJ5VGFnKFwiZ3VuXCIpWzBdIGFzIEd1bjtcclxuICAgICAgaWYoZ3VuKXtcclxuICAgICAgICBsZXQgbXV6emxlID0gcm90YXRpb25fbGVuZ3RoKDMwLGd1bi5zdGF0ZS5yb3RhdGlvbik7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgeDpndW4uc3RhdGUucG9zaXRpb24ueCArIG11enpsZS54LFxyXG4gICAgICAgICAgeTpndW4uc3RhdGUucG9zaXRpb24ueSArIG11enpsZS55XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidWxsZXRzOmJ1bGxldFtdID0gW107XHJcbiAgICAgICAgZm9yKGxldCBhID0gMDthIDwgMTthICsrKXtcclxuICAgICAgICAgIGJ1bGxldHMucHVzaChuZXcgUm9ja2V0KHtcclxuICAgICAgICAgICAgcG9zaXRpb246e3g6cG9zaXRpb24ueCx5OnBvc2l0aW9uLnl9LFxyXG4gICAgICAgICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgICAgICAgIHJvdGF0aW9uOmd1bi5zdGF0ZS5yb3RhdGlvbixcclxuICAgICAgICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX1cclxuICAgICAgICAgIH0sZ3VuLnN0YXRlLnJvdGF0aW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubG9ja2VkX2J1bGxldCA9PSBudWxsKVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5sb2NrZWRfYnVsbGV0ID0gYnVsbGV0c1swXTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW1zKGJ1bGxldHMpO1xyXG4gICAgICB9XHJcbiAgICB9LDQwMClcclxuICB9XHJcbiAgcmVnaXN0ZXJQYXJ0aWNsZXMoKXtcclxuICAgIHRoaXMucGFydGljbGVzW1wic21va2VcIl0gPSB7XHJcbiAgICAgIHNwcml0ZTpcIi4vc3ByaXRlcy9mb2xkZXIvc21va2UucG5nXCIsXHJcbiAgICAgIGhlaWdodDo2NCxcclxuICAgICAgd2lkdGg6NjRcclxuICAgIH07XHJcbiAgICB0aGlzLnBhcnRpY2xlc1tcImV4cGxvc2lvblwiXSA9IHtcclxuICAgICAgc3ByaXRlOlwiLi9zcHJpdGVzL2ZvbGRlci9leHBsb3Npb24ucG5nXCIsXHJcbiAgICAgIGhlaWdodDoxMjgsXHJcbiAgICAgIHdpZHRoOjEyOFxyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0ZWYodGltZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUucGF1c2VkKSB7XHJcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgYXBwbHlHcmF2aXR5KHRoaXMub2JqZWN0c1thXSwgLTEsIC0xNSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0T2JqQnlUYWcoXCJwbGF5ZXJcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgbGV0IGN1cnNvciA9IHRoaXMuZ2V0T2JqQnlUYWcoXCJDdXJzb3JcIilbMF0gYXMgQ3Vyc29yO1xyXG4gICAgICBsZXQgY2FtZXJhcyA9IGcuc3RhdGUuY2FtZXJhcztcclxuICAgICAgXHJcbiAgICAgIGlmIChwbGF5ZXIpIHsgICAgICAgIFxyXG4gICAgICAgIGNhbWVyYXNbMF0ueCA9IHBsYXllci5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gICAgICAgIGNhbWVyYXNbMF0ueSA9IHBsYXllci5zdGF0ZS5wb3NpdGlvbi55ICsgKGNhbWVyYXNbMF0uc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQvMiAtIHBsYXllci5oZWlnaHQvMik7ICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYodGFyZ2V0KXtcclxuICAgICAgICBjYW1lcmFzWzFdLnN0YXRlLnBvc2l0aW9uLnggPSB0YXJnZXQuc3RhdGUucG9zaXRpb24ueDtcclxuICAgICAgICBjYW1lcmFzWzFdLnN0YXRlLnBvc2l0aW9uLnkgPSB0YXJnZXQuc3RhdGUucG9zaXRpb24ueTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGN1cnNvcikge1xyXG4gICAgICAgIGN1cnNvci5jb2xsaXNpb24gPSBmYWxzZTtcclxuICAgICAgICBjdXJzb3IuZ3Jhdml0eSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UodGhpcy5nYW1lLnN0YXRlLmNhbWVyYXNbMF0pO1xyXG4gICAgICAgIGN1cnNvci5zdGF0ZS5wb3NpdGlvbi54ID0gbW91c2UueDtcclxuICAgICAgICBjdXJzb3Iuc3RhdGUucG9zaXRpb24ueSA9IG1vdXNlLnk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBzdXBlci5zdGF0ZWYodGltZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyByb29tLCBhcHBseUdyYXZpdHksb2JqZWN0X3N0YXRlX2NvbmZpZywgc3RhdGVfY29uZmlnIH0gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XHJcbmltcG9ydCB7IEdvb21iYSB9IGZyb20gXCIuLi9vYmplY3RzL0dvb21iYVwiO1xyXG5pbXBvcnQgeyBDb250cm9sbGVkUGxheWVyIH0gZnJvbSBcIi4uL29iamVjdHMvQ29udHJvbGxlZFBsYXllclwiO1xyXG5pbXBvcnQgeyBHdW4gfSBmcm9tIFwiLi4vb2JqZWN0cy9HdW5cIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL29iamVjdHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gXCIuLi9vYmplY3RzL0N1cnNvclwiO1xyXG5pbXBvcnQgeyBib3ggfSBmcm9tIFwiLi4vb2JqZWN0cy9ib3hcIjtcclxuaW1wb3J0IHsgVmVydEJveCB9IGZyb20gXCIuLi9vYmplY3RzL1ZlcnRCb3hcIjtcclxuaW1wb3J0IHsgdmVsb2NpdHlDb2xsaXNpb25DaGVjayB9IGZyb20gXCIuLi8uLi9saWIvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IGdyYXZpdHlfb2JqLCByb3RhdGlvbl9sZW5ndGggfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBQb2xsX01vdXNlLCBleGVjX3R5cGUgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IEhVRCwgVGV4dCB9IGZyb20gXCIuLi8uLi9saWIvaHVkXCI7XHJcbmltcG9ydCB7IERFQlVHLCBnYW1lLCBHZXRWaWV3cG9ydERpbWVuc2lvbnMsdmlld3BvcnQsIHNldERlYnVnIH0gZnJvbSBcIi4uLy4uL3ZhblwiO1xyXG5pbXBvcnQge2J1bGxldCwgUm9ja2V0fSBmcm9tIFwiLi4vb2JqZWN0cy9idWxsZXRcIjtcclxuaW1wb3J0IHtDYW1lcmF9IGZyb20gXCIuLi8uLi9saWIvcmVuZGVyXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuaW1wb3J0ICogYXMganNvbiBmcm9tIFwiLi9VbmRlcndvcmxkLmpzb25cIjtcclxuaW50ZXJmYWNlIG92ZXJ3b3JsZF9pIHtcclxuICBwbGF5ZXI6IGdyYXZpdHlfb2JqLFxyXG4gIHBhdXNlZDogYm9vbGVhbixcclxuICBsb2NrZWRfYnVsbGV0OmJ1bGxldFxyXG59XHJcblxyXG5jbGFzcyBPdmVyd29ybGRfSFVEIGV4dGVuZHMgSFVEIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnRleHRfZWxlbWVudHMucHVzaChuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0ICogNy84XHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDQ0LFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOlwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOjFcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgbGV0IHggPSBnLmdldFJvb20oKS5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgaWYoeClcclxuICAgICAgICByZXR1cm4gYFRpbWVzIEFpcnNob3Q6JHt4LnN0YXRlLnRpbWVzX2FpcnNob3R9YDtcclxuICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH0pKTtcclxuICAgIHRoaXMudGV4dF9lbGVtZW50cy5wdXNoKG5ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQgKiA2LzhcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogNDQsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOjFcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgbGV0IHggPSBnLmdldFJvb20oKS5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgaWYoeClcclxuICAgICAgICByZXR1cm4gYE1heCBUaW1lcyBBaXJzaG90OiR7TWF0aC5tYXgoeC5zdGF0ZS50aW1lc19haXJzaG90LHguc3RhdGUubWF4X3RpbWVzX2FpcnNob3QpfWA7XHJcbiAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBIZWlnaHRfSFVEIGV4dGVuZHMgSFVEe1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy50ZXh0X2VsZW1lbnRzLnB1c2gobmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IDYwMFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiAxNSxcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjpcImxlZnRcIixcclxuICAgICAgc2NhbGluZzoxXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGxldCB4ID0gZy5nZXRSb29tKCkuZ2V0T2JqQnlUYWcoXCJkdW1teVwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGlmKHgpXHJcbiAgICAgICAgcmV0dXJuIGBIZWlnaHQ6JHtNYXRoLmZsb29yKHguc3RhdGUucG9zaXRpb24ueSl9YDtcclxuICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVbmRlcndvcmxkIGV4dGVuZHMgcm9vbTxvdmVyd29ybGRfaT57XHJcbiAgYmFja2dyb3VuZF91cmwgPSBcIi4vc3ByaXRlcy9vcmlnXzcxOTI3NS5qcGdcIjtcclxuICBvYmplY3RzOmdyYXZpdHlfb2JqW107XHJcbiAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+KSB7XHJcbiAgICBzdXBlcihnYW1lLGpzb24gYXMgdW5rbm93biBhcyBzdGF0ZV9jb25maWcpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcGxheWVyOiB1bmRlZmluZWQsXHJcbiAgICAgIHBhdXNlZDogZmFsc2UsXHJcbiAgICAgIGxvY2tlZF9idWxsZXQ6bnVsbFxyXG4gICAgfTtcclxuICAgIGdhbWUuc3RhdGUuY2FtZXJhcyA9IFtcclxuICAgICAgbmV3IENhbWVyYSh7XHJcbiAgICAgICAgeDowLFxyXG4gICAgICAgIHk6MCxcclxuICAgICAgICBkaW1lbnNpb25zOntcclxuICAgICAgICAgIGhlaWdodDp2aWV3cG9ydC5oZWlnaHQsXHJcbiAgICAgICAgICB3aWR0aDp2aWV3cG9ydC53aWR0aCAqIDQvNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGluZzowLjUsXHJcbiAgICAgICAgZGVidWc6ZmFsc2VcclxuICAgICAgfVxyXG4gICAgICAse1xyXG4gICAgICAgIHg6MSxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgd2lkdGg6MC44LFxyXG4gICAgICAgIGhlaWdodDoxXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgQ2FtZXJhKHtcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowLFxyXG4gICAgICAgIGRpbWVuc2lvbnM6e1xyXG4gICAgICAgICAgd2lkdGg6dmlld3BvcnQud2lkdGgvNSxcclxuICAgICAgICAgIGhlaWdodDp2aWV3cG9ydC5oZWlnaHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxpbmc6MC4yLFxyXG4gICAgICAgIGRlYnVnOmZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIHg6dmlld3BvcnQud2lkdGggKiA0LzUsXHJcbiAgICAgICAgeTowLFxyXG4gICAgICAgIHdpZHRoOjAuMixcclxuICAgICAgICBoZWlnaHQ6MVxyXG4gICAgICB9KVxyXG4gICAgXVxyXG4gICAgLypcclxuICAgIGZvcihsZXQgYSA9IDA7YTwxMDthKyspe1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgVmVydEJveCh7eDozMjAseToyNTAgKyBhICogNTAwfSwwLDEpKTtcclxuICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IFZlcnRCb3goe3g6OTAwLHk6MjUwICsgYSAqIDUwMH0sMCwxKSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gMDthIDwgMTAwOyBhKyspe1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgYm94KHt4OjcwMCArIGEgKiA1MDAseTowfSwwLDEpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5hZGRJdGVtcyhbLi4ubmV3IFBsYXllcih7eDo3MDAseToxNTB9LDAsMSx7aWQ6XCJwbGF5ZXJcIn0pLmNvbWJpbmVkX29iamVjdHMoKV0pXHJcbiAgICB0aGlzLmFkZEl0ZW0obmV3IEN1cnNvcih7eDowLHk6MH0sMCwxLHtpZDpcIkN1cnNvclwifSkpO1xyXG4gICAgdGhpcy5hZGRJdGVtKG5ldyBHb29tYmEoe3g6NTAwLHk6NTAwfSwwLDEpKTtcclxuICAgICovXHJcbiAgICBnYW1lLnN0YXRlLmNhbWVyYXNbMF0uaHVkID0gbmV3IE92ZXJ3b3JsZF9IVUQoKTtcclxuICAgIGdhbWUuc3RhdGUuY2FtZXJhc1sxXS5odWQgPSBuZXcgSGVpZ2h0X0hVRCgpO1xyXG4gIH1cclxuICByZWdpc3RlckNvbnRyb2xzKCkge1xyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIkVzY2FwZVwiLCBleGVjX3R5cGUub25jZSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmdhbWUuc3RhdGUuY2FtZXJhc1swXS5zdGF0ZS5kZWJ1ZyA9ICF0aGlzLmdhbWUuc3RhdGUuY2FtZXJhc1swXS5zdGF0ZS5kZWJ1ZztcclxuICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0T2JqKFwicGxheWVyXCIpIGFzIEdvb21iYTtcclxuICAgICAgcGxheWVyLmNvbGxpc2lvbiA9ICFwbGF5ZXIuY29sbGlzaW9uO1xyXG4gICAgICBwbGF5ZXIuZ3Jhdml0eSA9ICFwbGF5ZXIuZ3Jhdml0eTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJtb3VzZTBkb3duXCIsIGV4ZWNfdHlwZS5yZXBlYXQsKCkgPT4ge1xyXG4gICAgICBsZXQgZ3VuID0gdGhpcy5nZXRPYmooXCJndW5cIikgYXMgR3VuO1xyXG4gICAgICBpZihndW4pe1xyXG4gICAgICAgIGxldCBtdXp6bGUgPSByb3RhdGlvbl9sZW5ndGgoMzAsZ3VuLnN0YXRlLnJvdGF0aW9uKTtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICB4Omd1bi5zdGF0ZS5wb3NpdGlvbi54ICsgbXV6emxlLngsXHJcbiAgICAgICAgICB5Omd1bi5zdGF0ZS5wb3NpdGlvbi55ICsgbXV6emxlLnlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ1bGxldHMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGEgPSAwO2EgPCAxO2EgKyspe1xyXG4gICAgICAgICAgYnVsbGV0cy5wdXNoKG5ldyBSb2NrZXQoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjp7eDpwb3NpdGlvbi54LHk6cG9zaXRpb24ueX0sXHJcbiAgICAgICAgICAgIHZlbG9jaXR5Ont4OjAseTowfSxcclxuICAgICAgICAgICAgcm90YXRpb246Z3VuLnN0YXRlLnJvdGF0aW9uLFxyXG4gICAgICAgICAgICBzY2FsaW5nOnt3aWR0aDoxLGhlaWdodDoxfVxyXG4gICAgICAgICAgfSx7fSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmxvY2tlZF9idWxsZXQgPT0gbnVsbClcclxuICAgICAgICAgIHRoaXMuc3RhdGUubG9ja2VkX2J1bGxldCA9IGJ1bGxldHNbMF07XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtcyhidWxsZXRzKTtcclxuICAgICAgfVxyXG4gICAgfSw0MDApXHJcbiAgfVxyXG4gIHJlZ2lzdGVyUGFydGljbGVzKCl7XHJcbiAgICB0aGlzLnBhcnRpY2xlc1tcInNtb2tlXCJdID0ge1xyXG4gICAgICBzcHJpdGU6XCIuL3Nwcml0ZXMvZm9sZGVyL3Ntb2tlLnBuZ1wiLFxyXG4gICAgICBoZWlnaHQ6NjQsXHJcbiAgICAgIHdpZHRoOjY0XHJcbiAgICB9O1xyXG4gICAgdGhpcy5wYXJ0aWNsZXNbXCJleHBsb3Npb25cIl0gPSB7XHJcbiAgICAgIHNwcml0ZTpcIi4vc3ByaXRlcy9mb2xkZXIvZXhwbG9zaW9uLnBuZ1wiLFxyXG4gICAgICBoZWlnaHQ6MTI4LFxyXG4gICAgICB3aWR0aDoxMjhcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLnBhdXNlZCkge1xyXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgIGFwcGx5R3Jhdml0eSh0aGlzLm9iamVjdHNbYV0sIC0xLCAtMTUpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldE9iakJ5VGFnKFwicGxheWVyXCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZ2V0T2JqQnlUYWcoXCJkdW1teVwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGxldCBjdXJzb3IgPSB0aGlzLmdldE9iakJ5VGFnKFwiQ3Vyc29yXCIpWzBdIGFzIEN1cnNvcjtcclxuICAgICAgbGV0IGNhbWVyYXMgPSBnLnN0YXRlLmNhbWVyYXM7XHJcbiAgICAgIFxyXG4gICAgICBpZiAocGxheWVyKSB7ICAgICAgICBcclxuICAgICAgICBjYW1lcmFzWzBdLnggPSBwbGF5ZXIuc3RhdGUucG9zaXRpb24ueDtcclxuICAgICAgICBjYW1lcmFzWzBdLnkgPSBwbGF5ZXIuc3RhdGUucG9zaXRpb24ueSArIChjYW1lcmFzWzBdLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0LzIgLSBwbGF5ZXIuaGVpZ2h0LzIpOyAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmKHRhcmdldCl7XHJcbiAgICAgICAgY2FtZXJhc1sxXS5zdGF0ZS5wb3NpdGlvbi54ID0gdGFyZ2V0LnN0YXRlLnBvc2l0aW9uLng7XHJcbiAgICAgICAgY2FtZXJhc1sxXS5zdGF0ZS5wb3NpdGlvbi55ID0gdGFyZ2V0LnN0YXRlLnBvc2l0aW9uLnk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmIChjdXJzb3IpIHtcclxuICAgICAgICBjdXJzb3IuY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgICAgICAgY3Vyc29yLmdyYXZpdHkgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdKTtcclxuICAgICAgICBjdXJzb3Iuc3RhdGUucG9zaXRpb24ueCA9IG1vdXNlLng7XHJcbiAgICAgICAgY3Vyc29yLnN0YXRlLnBvc2l0aW9uLnkgPSBtb3VzZS55O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgc3VwZXIuc3RhdGVmKHRpbWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiXG5pbnRlcmZhY2Ugcm9vbV9kaXIge1xuICBbaW5kZXg6c3RyaW5nXTphbnlcbn1cbmltcG9ydCB7Qm9hcmR9IGZyb20gXCIuL0JvYXJkXCI7XG5pbXBvcnQge092ZXJ3b3JsZH0gZnJvbSBcIi4vT3ZlcndvcmxkXCI7XG5pbXBvcnQge1VuZGVyd29ybGR9IGZyb20gXCIuL1VuZGVyd29ybGRcIjtcbmV4cG9ydCBsZXQgcm9vbXM6cm9vbV9kaXIgPSB7XG5cdEJvYXJkOkJvYXJkLFxuXHRPdmVyd29ybGQ6T3ZlcndvcmxkLFxuXHRVbmRlcndvcmxkOlVuZGVyd29ybGQsXG59IiwiaW50ZXJmYWNlIHNvdW5kX3N0b3JhZ2Uge1xyXG4gIFtpbmRleDogc3RyaW5nXTogSFRNTEF1ZGlvRWxlbWVudFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgYXVkaW8ge1xyXG4gIHNvdW5kczogc291bmRfc3RvcmFnZSA9IHt9O1xyXG4gIGFkZChuYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNvdW5kc1tuYW1lXSA9IG5ldyBBdWRpbyh1cmwpO1xyXG4gIH1cclxuICBhc3luYyBsb2FkKCkge1xyXG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNvdW5kcyk7XHJcbiAgICBsZXQgcHJvbWlzZXMgPSBrZXlzLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zb3VuZHNba2V5XS5hZGRFdmVudExpc3RlbmVyKFwiY2FucGxheXRocm91Z2hcIiwgKGUpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgIHRyeXtcclxuICAgICAgbGV0IHggPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgIHJldHVybih4KTtcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcGxheShuYW1lOnN0cmluZyx2b2x1bWU6bnVtYmVyKXtcclxuICAgIGxldCBhID0gdGhpcy5zb3VuZHNbbmFtZV07XHJcbiAgICBhLnBhdXNlKClcclxuICAgIGEuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgYS52b2x1bWUgPSB2b2x1bWU7XHJcbiAgICBhLnBsYXkoKTtcclxuICB9XHJcbn0iLCJpbXBvcnQge29iaixnZXRJZH0gZnJvbSBcIi4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGV9IGZyb20gXCIuLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtkZWVwfSBmcm9tIFwiLi4vdmFuXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGNvbGxpc2lvbl9ib3h7XHJcbiAgeDpudW1iZXI7XHJcbiAgeTpudW1iZXI7XHJcbiAgd2lkdGg6bnVtYmVyO1xyXG4gIGhlaWdodDpudW1iZXI7XHJcbn1cclxuXHJcbmVudW0gZGlyZWN0aW9ue1xyXG4gIGxlZnQsXHJcbiAgcmlnaHQsXHJcbiAgdXAsXHJcbiAgZG93blxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfYWxsX29iamVjdHMoYzogY29sbGlzaW9uX2JveCxvYmpzOm9ialtdLGV4ZW1wdGlvbjpzdHJpbmdbXSA9IFtdKTpvYmpbXXtcclxuICByZXR1cm4gb2Jqcy5maWx0ZXIoKGEpPT4oIWV4ZW1wdGlvbi5zb21lKChiKT0+YS50YWdzLmluZGV4T2YoYikgIT09IC0xKSAmJiBhLmNvbGxpZGVzV2l0aEJveChjKSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfYWxsX2NvbGxpc2lvbnMoYzogY29sbGlzaW9uX2JveCxvYmpzOm9ialtdLGV4ZW1wdGlvbjpzdHJpbmdbXSA9IFtdKTpvYmpbXXtcclxuICBsZXQgbWF0Y2hlZCA9IFtdO1xyXG4gIGZvciAobGV0IGEgb2Ygb2Jqcykge1xyXG4gICAgaWYgKCFleGVtcHRpb24uc29tZSgoYik9PmEudGFncy5pbmRleE9mKGIpICE9PSAtMSkgJiYgYS5jb2xsaXNpb24gJiYgYS5jb2xsaWRlc1dpdGhCb3goYykpIHtcclxuICAgICAgbWF0Y2hlZC5wdXNoKGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbWF0Y2hlZFxyXG59XHJcbi8vQ2hlY2tzIHVwIHRvIHRoZSBmaXJzdCBjb2xsaXNpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX2NvbGxpc2lvbnMoYzogY29sbGlzaW9uX2JveCwgb2Jqczogb2JqW10sIGV4ZW1wdGlvbjpzdHJpbmcpIHtcclxuICBmb3IgKGxldCBhIG9mIG9ianMpIHtcclxuICAgIGlmIChhLmlkICE9PSBleGVtcHRpb24gJiYgYS5jb2xsaXNpb24gJiYgYS5jb2xsaWRlc1dpdGhCb3goYykpIHtcclxuICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2ZWxvY2l0eV9tYXgodmVsb2NpdHk6bnVtYmVyLGJveDpjb2xsaXNpb25fYm94LG9ianM6b2JqW10sIGV4ZW1wdGlvbjpzdHJpbmcsZGlyOmRpcmVjdGlvbil7XHJcbiAgbGV0IGNvbGxpc2lvbiA9IGNoZWNrX2NvbGxpc2lvbnMoYm94LCBvYmpzLCBleGVtcHRpb24pO1xyXG4gIGlmKGNvbGxpc2lvbiA9PSBudWxsKXtcclxuICAgIHJldHVybiB2ZWxvY2l0eTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGxldCBjb2xsaWRlciA9IGNvbGxpc2lvbjtcclxuICAgIGxldCBvcmlnaW4gPSBnZXRJZChvYmpzLGV4ZW1wdGlvbik7XHJcbiAgICBsZXQgb3JpZ19zdCA9IG9yaWdpbi5zdGF0ZSBhcyBvYmpfc3RhdGU7XHJcbiAgICBsZXQgY29sbGlkZXJfc3QgPSBjb2xsaWRlci5zdGF0ZSBhcyBvYmpfc3RhdGU7XHJcbiAgICBsZXQgb3JpZ19jb2wgPSBvcmlnaW4uZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gICAgbGV0IGNvbGxpZGVyX2NvbCA9IGNvbGxpZGVyLmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICAgIGlmKGRpciA9PSBkaXJlY3Rpb24ubGVmdCl7XHJcbiAgICAgIHJldHVybiAob3JpZ19jb2wueCAtIG9yaWdfY29sLndpZHRoLzIpIC0gKGNvbGxpZGVyX2NvbC54ICsgY29sbGlkZXJfY29sLndpZHRoLzIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkaXIgPT0gZGlyZWN0aW9uLnJpZ2h0KXtcclxuICAgICAgcmV0dXJuIChjb2xsaWRlcl9jb2wueCAtIGNvbGxpZGVyX2NvbC53aWR0aC8yKSAtIChvcmlnX2NvbC54ICsgb3JpZ19jb2wud2lkdGgvMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRpciA9PSBkaXJlY3Rpb24uZG93bil7XHJcbiAgICAgIHJldHVybiAob3JpZ19jb2wueSAtIG9yaWdfY29sLmhlaWdodC8yKSAtIChjb2xsaWRlcl9jb2wueSArIGNvbGxpZGVyX2NvbC5oZWlnaHQvMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRpciA9PSBkaXJlY3Rpb24udXApe1xyXG4gICAgICByZXR1cm4gKGNvbGxpZGVyX2NvbC55IC0gY29sbGlkZXJfY29sLmhlaWdodC8yKSAtIChvcmlnX2NvbC55ICsgb3JpZ19jb2wuaGVpZ2h0LzIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlbG9jaXR5Q29sbGlzaW9uQ2hlY2sob2JqZWN0Om9iaixsaXN0Om9ialtdKSB7XHJcbiAgbGlzdCA9IFsuLi5saXN0XTtcclxuICBsZXQgb2IgPSBvYmplY3Q7XHJcbiAgbGV0IHN0ID0gb2JqZWN0LnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICBsZXQgeF92ZWwgPSBzdC52ZWxvY2l0eS54O1xyXG4gIGxldCB5X3ZlbCA9IHN0LnZlbG9jaXR5Lnk7XHJcbiAgaWYoIW9iLmNvbGxpc2lvbil7XHJcbiAgICAoPG9ial9zdGF0ZT5vYi5zdGF0ZSkucG9zaXRpb24ueCArPSAoPG9ial9zdGF0ZT5vYi5zdGF0ZSkudmVsb2NpdHkueDtcclxuICAgICg8b2JqX3N0YXRlPm9iLnN0YXRlKS5wb3NpdGlvbi55ICs9ICg8b2JqX3N0YXRlPm9iLnN0YXRlKS52ZWxvY2l0eS55O1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBsZXQgY29sX2JveCA9IG9iLmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICBpZiAoeF92ZWwgPiAwKSB7XHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICB4OiBjb2xfYm94LnggKyBjb2xfYm94LndpZHRoLzIgKyB4X3ZlbC8yLFxyXG4gICAgICB5OiBjb2xfYm94LnksXHJcbiAgICAgIHdpZHRoOiB4X3ZlbCxcclxuICAgICAgaGVpZ2h0OiBjb2xfYm94LmhlaWdodFxyXG4gICAgfTtcclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueCxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24ucmlnaHQpO1xyXG4gICAgaWYodmVsID4gMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnggKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueCA9IDA7ICBcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSBpZiAoeF92ZWwgPCAwKSB7XHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICB4OiB4X3ZlbC8yICsgY29sX2JveC54IC0gY29sX2JveC53aWR0aC8yLFxyXG4gICAgICB5OiBjb2xfYm94LnksXHJcbiAgICAgIHdpZHRoOiAtMSAqIHhfdmVsLFxyXG4gICAgICBoZWlnaHQ6IGNvbF9ib3guaGVpZ2h0XHJcbiAgICB9XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LngsYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLmxlZnQpO1xyXG4gICAgaWYodmVsIDwgMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnggKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueCA9IDA7IFxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoeV92ZWwgPiAwKSB7XHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICB4OiBjb2xfYm94LngsXHJcbiAgICAgIHk6IGNvbF9ib3gueSArIGNvbF9ib3guaGVpZ2h0LzIgKyB5X3ZlbC8yLFxyXG4gICAgICB3aWR0aDogY29sX2JveC53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB5X3ZlbFxyXG4gICAgfVxyXG4gICAgbGV0IHZlbCA9IHZlbG9jaXR5X21heChzdC52ZWxvY2l0eS55LGJveCxsaXN0LG9iLmlkLGRpcmVjdGlvbi51cCk7XHJcbiAgICBpZih2ZWwgPiAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueSArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS55ID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSBpZiAoeV92ZWwgPCAwKSB7XHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICB4OiBjb2xfYm94LngsXHJcbiAgICAgIHk6IHlfdmVsLzIgKyBjb2xfYm94LnkgLSBjb2xfYm94LmhlaWdodC8yLFxyXG4gICAgICB3aWR0aDogY29sX2JveC53aWR0aCxcclxuICAgICAgaGVpZ2h0OiAtMSAqIHlfdmVsXHJcbiAgICB9XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LnksYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLmRvd24pO1xyXG4gICAgaWYodmVsIDwgMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnkgKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9nYW1lL21haW5cIjtcclxuaW1wb3J0IHtnYW1lLFBBVVNFRCxERUJVRywgR2V0U2NyZWVuRGltZW5zaW9ucyxHZXRWaWV3cG9ydERpbWVuc2lvbnN9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgY29sbGlzaW9uX2JveCB9IGZyb20gXCIuL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge29ian0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5pbXBvcnQge3Bvc2l0aW9ufSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQge2RlYnVnX3N0YXRlfSBmcm9tIFwiLi9kZWJ1Z1wiO1xyXG5cclxuaW50ZXJmYWNlIG1vdXNlUG9ze1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyLFxyXG4gIGxhc3Q6e1xyXG4gICAgeDpudW1iZXIsXHJcbiAgICB5Om51bWJlclxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGNvbnRyb2xfZnVuY3tcclxuICAoKTp2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBtb3VzZUJpbmRze1xyXG4gIFtrZXk6c3RyaW5nXTogQXJyYXk8W2NvbnRyb2xfZnVuYyxvYmpdPlxyXG59XHJcblxyXG5pbnRlcmZhY2Uga2V5QmluZHN7XHJcbiAgW2tleTpzdHJpbmddOiBBcnJheTxjb250cm9sX2Z1bmM+XHJcbn1cclxubGV0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpO1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9jbGlja19oYW5kbGVyKGdhbWU6Z2FtZTx1bmtub3duPil7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xyXG4gICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShnYW1lLnN0YXRlLmNhbWVyYXNbMF0pO1xyXG4gICAgbGV0IGJveDpjb2xsaXNpb25fYm94ID0ge1xyXG4gICAgICB4Om1vdXNlLngsXHJcbiAgICAgIHk6bW91c2UueSxcclxuICAgICAgaGVpZ2h0OjEsXHJcbiAgICAgIHdpZHRoOjFcclxuICAgIH07XHJcbiAgICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCBkLmxlbmd0aDthKyspe1xyXG4gICAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgICBpZihzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IFwibW91c2UxXCIgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWQub2JqICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgaWYoc2VsZWN0ZWQub2JqLmNvbGxpZGVzV2l0aEJveChib3gpKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gIFxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmICBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwiZG93blwiKSAgJiYgIXNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgICAgc2VsZWN0ZWQucmVwZWF0X3RpbWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwidXBcIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2V1cFwiKSAmJiBzZWxlY3RlZC5leGVjdXRlZCAmJiBzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSkge1xyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJ1cFwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZXVwXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgIGxldCBnID0gWy4uLnJlcGVhdF9iaW5kc107XHJcbiAgICAgZm9yKGxldCBhID0gMDsgYSA8IGcubGVuZ3RoO2ErKyl7XHJcbiAgICAgICBpZihnW2FdLmJpbmQuaWQgPT09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgZ1thXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgfVxyXG59KVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB7XHJcbiAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwidXBcIikgICYmICFzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIHNlbGVjdGVkLnJlcGVhdF90aW1lci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcImRvd25cIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2Vkb3duXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKSB7XHJcbiAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcImRvd25cIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2Vkb3duXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICBsZXQgZyA9IFsuLi5yZXBlYXRfYmluZHNdO1xyXG4gICAgICBmb3IobGV0IGEgPSAwOyBhIDwgZy5sZW5ndGg7YSsrKXtcclxuICAgICAgICBpZihnW2FdLmJpbmQuaWQgPT09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBnW2FdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuaW50ZXJmYWNlIGhlbGRfa2V5c3tcclxuICBbaW5kZXg6c3RyaW5nXTpib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgaGVsZF9rZXlzOmhlbGRfa2V5cyA9IHt9O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLChlKT0+e1xyXG4gIGxldCBjb2RlOnN0cmluZztcclxuXHJcbiAgaWYoZS5kZWx0YVkgPCAwKXtcclxuICAgIGNvZGUgPSBcInNjcm9sbHVwXCI7XHJcbiAgfVxyXG4gIGVsc2UgaWYoZS5kZWx0YVkgPiAwKXtcclxuICAgIGNvZGUgPSBcInNjcm9sbGRvd25cIjtcclxuICB9XHJcblxyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBcclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSBjb2RlKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgaGVsZF9rZXlzW2UuY29kZV0gPSB0cnVlO1xyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUua2V5Ym9hcmQgJiYgc2VsZWN0ZWQua2V5ID09PSBlLmNvZGUgICYmICFzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIGZvcihsZXQgYyBvZiByZXBlYXRfYmluZHMpe1xyXG4gICAgICAgICAgaWYoYy5iaW5kLmlkID09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgICAgYy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxufSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gIGhlbGRfa2V5c1tlLmNvZGVdID0gZmFsc2U7XHJcbiAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5rZXlib2FyZCAmJiBzZWxlY3RlZC5rZXkgPT09IGUuY29kZSAmJiBzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSApe1xyXG4gICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgICBsZXQgZyA9IFsuLi5yZXBlYXRfYmluZHNdO1xyXG4gICAgICAgIGZvcihsZXQgYSA9IDA7IGEgPCBnLmxlbmd0aDthKyspe1xyXG4gICAgICAgICAgaWYoZ1thXS5iaW5kLmlkID09PSBzZWxlY3RlZC5pZCl7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcbmxldCB0cmFja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XHJcbiAgdmFyIHJlY3QgPSAoZS50YXJnZXQgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDtcclxuICBcclxuICBsYXN0X3ggPSB4O1xyXG4gIGxhc3RfeSA9IHk7XHJcbiAgeCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDsgLy94IHBvc2l0aW9uIHdpdGhpbiB0aGUgZWxlbWVudC5cclxuICB5ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7ICAvL3kgcG9zaXRpb24gd2l0aGluIHRoZSBlbGVtZW50LlxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBlbnVtIGJ0eXBle1xyXG4gIG1vdXNlLFxyXG4gIGtleWJvYXJkXHJcbn1cclxuXHJcbmludGVyZmFjZSBiaW5ke1xyXG4gIGtleTpzdHJpbmcsXHJcbiAgdHlwZTpidHlwZSxcclxuICBpZDpudW1iZXIsXHJcbiAgZnVuY3Rpb246Y29udHJvbF9mdW5jLFxyXG4gIGV4ZWN1dGU6ZXhlY190eXBlLFxyXG4gIHJlcGVhdF90aW1lcj86cmVwZWF0X2JpbmQsXHJcbiAgb2JqPzpvYmosXHJcbiAgZXhlY3V0ZWQ/OmJvb2xlYW4sXHJcbiAgaW50ZXJ2YWw/Om51bWJlcixcclxuICBjYW1lcmE/OkNhbWVyYVxyXG59XHJcblxyXG5pbnRlcmZhY2UgcmVwZWF0X2JpbmR7XHJcbiAgYmluZDpiaW5kLFxyXG4gIHRpbWVyOm51bWJlcixcclxuICBpbnRlcnZhbDpudW1iZXIsXHJcbiAgYWN0aXZlOmJvb2xlYW5cclxufVxyXG5cclxubGV0IHggPSAwO1xyXG5sZXQgeSA9IDA7XHJcbmxldCBsYXN0X3ggPSAwO1xyXG5sZXQgbGFzdF95ID0gMDtcclxubGV0IGJpbmRzOmtleUJpbmRzID0ge307XHJcbmV4cG9ydCBsZXQgZGVidWdfYmluZHM6YmluZFtdID0gW107XHJcbmxldCBtb3VzZUJpbmRzOm1vdXNlQmluZHMgPSB7fTtcclxubGV0IGJpbmRfY291bnQgPSAwO1xyXG5cclxubGV0IGFsbF9iaW5kczpBcnJheTxiaW5kPiA9IFtdXHJcblxyXG5sZXQgcmVwZWF0X2JpbmRzOkFycmF5PHJlcGVhdF9iaW5kPiA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvbGxfTW91c2UoY2FtZXJhOkNhbWVyYSxjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQgPSBnLnN0YXRlLmNhbnZhcyk6cG9zaXRpb257XHJcbiAgbGV0IGhlaWdodCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodDtcclxuICBsZXQgd3JhdGlvID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLndpZHRoKS9HZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aDtcclxuICBsZXQgdnJhdGlvID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmhlaWdodCkvR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0O1xyXG4gIHJldHVybiAoe1xyXG4gICAgeDogKCh4IC0gY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngpL3dyYXRpby9jYW1lcmEuc3RhdGUuc2NhbGluZyArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgvY2FtZXJhLnN0YXRlLnNjYWxpbmcvMikgLFxyXG4gICAgeTogKChoZWlnaHQgLSB5L3ZyYXRpbykvY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodC9jYW1lcmEuc3RhdGUuc2NhbGluZy8yIC0gY2FtZXJhLnN0YXRlLnZpZXdwb3J0LnkpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV4ZWN1dGVSZXBlYXRCaW5kcyhiOm51bWJlcil7XHJcbiAgZm9yKGxldCBhIG9mIHJlcGVhdF9iaW5kcyl7XHJcbiAgICBpZihhLmJpbmQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCAmJiBhLnRpbWVyID09IDAgJiYgYS5hY3RpdmUpe1xyXG4gICAgICBhLmJpbmQuZnVuY3Rpb24oKTtcclxuICAgIH1cclxuICAgIGlmKGEuYWN0aXZlIHx8ICghYS5hY3RpdmUgJiYgYS50aW1lciAhPSAwKSlcclxuICAgICAgYS50aW1lciArPSBiO1xyXG4gICAgaWYoYS50aW1lciA+IGEuaW50ZXJ2YWwpe1xyXG4gICAgICBhLnRpbWVyID0gMDsgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVW5iaW5kKGJpbmRfaWQ6bnVtYmVyKXtcclxuICBmb3IobGV0IGEgPSAwO2EgPCBhbGxfYmluZHMubGVuZ3RoOyBhKyspe1xyXG4gICAgaWYoYWxsX2JpbmRzW2FdLmlkID09IGJpbmRfaWQpe1xyXG4gICAgICBhbGxfYmluZHMuc3BsaWNlKGEsMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IobGV0IGEgPSAwO2EgPCByZXBlYXRfYmluZHMubGVuZ3RoOyBhKyspe1xyXG4gICAgaWYocmVwZWF0X2JpbmRzW2FdLmJpbmQuaWQgPT0gYmluZF9pZCl7XHJcbiAgICAgIHJlcGVhdF9iaW5kcy5zcGxpY2UoYSwxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBleGVjX3R5cGV7XHJcbiAgb25jZSxcclxuICByZXBlYXRcclxufVxyXG5cclxubGV0IGlkID0gMDtcclxuZXhwb3J0IGZ1bmN0aW9uIEJpbmQoa2V5bmFtZTpzdHJpbmcsZnVuYzpjb250cm9sX2Z1bmMsdHlwZTpleGVjX3R5cGUsaW50ZXJ2YWw6bnVtYmVyLG9iamVjdD86b2JqKTpudW1iZXJ7XHJcbiAgaWYoa2V5bmFtZS5zbGljZSgwLDUpID09PSBcIm1vdXNlXCIpe1xyXG4gICAgbGV0IGI6YmluZCA9IHtcclxuICAgICAga2V5OmtleW5hbWUsXHJcbiAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgIGlkLFxyXG4gICAgICBmdW5jdGlvbjpmdW5jLFxyXG4gICAgICBvYmo6b2JqZWN0LFxyXG4gICAgICBleGVjdXRlOnR5cGUsXHJcbiAgICAgIGV4ZWN1dGVkOmZhbHNlLFxyXG4gICAgICBpbnRlcnZhbFxyXG4gICAgfTtcclxuICAgIGlmKHR5cGUgPT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgIGIucmVwZWF0X3RpbWVyID0ge1xyXG4gICAgICAgIGJpbmQ6YixcclxuICAgICAgICB0aW1lcjowLFxyXG4gICAgICAgIGludGVydmFsLFxyXG4gICAgICAgIGFjdGl2ZTpmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHJlcGVhdF9iaW5kcy5wdXNoKGIucmVwZWF0X3RpbWVyKTtcclxuICAgIH1cclxuICAgIGFsbF9iaW5kcy5wdXNoKGIpO1xyXG5cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGxldCBiOmJpbmQgPSB7XHJcbiAgICAgIGtleTprZXluYW1lLFxyXG4gICAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgICBpZCxcclxuICAgICAgZnVuY3Rpb246ZnVuYyxcclxuICAgICAgZXhlY3V0ZTp0eXBlLFxyXG4gICAgICBleGVjdXRlZDpmYWxzZSxcclxuICAgICAgaW50ZXJ2YWxcclxuICAgIH1cclxuICAgIGlmKHR5cGUgPT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgIGIucmVwZWF0X3RpbWVyID0ge1xyXG4gICAgICAgIGJpbmQ6YixcclxuICAgICAgICB0aW1lcjowLFxyXG4gICAgICAgIGludGVydmFsLFxyXG4gICAgICAgIGFjdGl2ZTpmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHJlcGVhdF9iaW5kcy5wdXNoKGIucmVwZWF0X3RpbWVyKTtcclxuICAgIH1cclxuICAgIGFsbF9iaW5kcy5wdXNoKGIpO1xyXG4gIH1cclxuICBpZCsrO1xyXG4gIHJldHVybiBpZCAtIDE7XHJcbn0iLCJpbXBvcnQgeyBvYmosIHBhcmFtcyB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBvYmpfc3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5sZXQgeyBpcGNSZW5kZXJlciB9ID0gd2luZG93LnJlcXVpcmUoXCJlbGVjdHJvblwiKTtcclxuY29uc3QgcGF0aCA9IHdpbmRvdy5yZXF1aXJlKFwicGF0aFwiKTtcclxubGV0IGZzID0gd2luZG93LnJlcXVpcmUoXCJmc1wiKTtcclxuaW1wb3J0IHsgcHJlZmFicyB9IGZyb20gXCIuLi9nYW1lL29iamVjdHMvcHJlZmFic1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0X3BhdGgsIERFQlVHLCBQQVVTRUQsIHNldFBhdXNlZCx2aWV3cG9ydCB9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9nYW1lL21haW5cIjtcclxuaW1wb3J0IHsgcm9vbXMgYXMgcm9vbV9saXN0IH0gZnJvbSBcIi4uL2dhbWUvcm9vbXMvcm9vbXNcIjtcclxuaW1wb3J0IHtCaW5kLGJ0eXBlLFBvbGxfTW91c2UsZXhlY190eXBlLCBoZWxkX2tleXMsZGVidWdfYmluZHN9IGZyb20gXCIuLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgSFVELFRleHQgfSBmcm9tIFwiLi4vbGliL2h1ZFwiO1xyXG5pbXBvcnQge0NhbWVyYX0gZnJvbSBcIi4uL2xpYi9yZW5kZXJcIjtcclxuaW1wb3J0IHtwb3NpdGlvbixkaW1lbnNpb25zLHZlbG9jaXR5fSBmcm9tIFwiLi4vbGliL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdfaHVkIGV4dGVuZHMgSFVEe1xyXG4gIHNldFRleHRFbGVtZW50cygpe1xyXG4gICAgcmV0dXJuIFtuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogMTBcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogMjIsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246XCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6MVxyXG4gICAgfSwgKCkgPT4gYFg6JHtkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueC50b0ZpeGVkKDApfWApLFxyXG4gICAgbmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IDMyXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDIyLFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOlwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOjFcclxuICAgIH0sICgpID0+IGBZOiR7ZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkudG9GaXhlZCgwKX1gKVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z19zdGF0ZWYodDogbnVtYmVyKSB7XHJcbiAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShkZWJ1Z19zdGF0ZS5jYW1lcmEsZGVidWdfc3RhdGUudGFyZ2V0KTtcclxuICBpZihkZWJ1Z19zdGF0ZS5jYW1lcmEuaHVkKXtcclxuICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5odWQuc3RhdGVmKHQpO1xyXG4gIH1cclxuICBpZiAoIVBBVVNFRCkge1xyXG4gICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpO1xyXG4gIH1cclxuICBpZiAoZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCkge1xyXG4gICAgaWYgKFBBVVNFRCAmJiBoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSAmJiBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5wcm9wZXJ0eSA9PSBcInNjYWxpbmdcIikge1xyXG4gICAgIGxldCBkaXN0ID0ge1xyXG4gICAgICB4Ok1hdGguYWJzKG1vdXNlLnggLSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlLnBvc2l0aW9uLngpLFxyXG4gICAgICB5Ok1hdGguYWJzKG1vdXNlLnkgLSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlLnBvc2l0aW9uLnkpXHJcbiAgICAgfVxyXG4gICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUuc2NhbGluZy53aWR0aCA9ICgyICogZGlzdC54KS9kZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LndpZHRoO1xyXG4gICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUuc2NhbGluZy5oZWlnaHQgPSAoMiAqIGRpc3QueSkvZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbGV0IHN0ID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgICAgc3QucG9zaXRpb24ueCA9IG1vdXNlLnggLSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50X29mZnNldC54LFxyXG4gICAgICAgIHN0LnBvc2l0aW9uLnkgPSBtb3VzZS55IC0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQueVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoUEFVU0VEICYmIGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQpIHtcclxuICAgIGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQuc3RhdGUucm90YXRpb24gPSBkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50LmFuZ2xlVG93YXJkc1BvaW50KG1vdXNlKTtcclxuICB9XHJcbiAgaWYgKGRlYnVnX3N0YXRlLm1pZGRsZV9wb3NpdGlvbikge1xyXG4gICAgbGV0IGRpZmZfeSA9IG1vdXNlLnkgLSBkZWJ1Z19zdGF0ZS5taWRkbGVfcG9zaXRpb24ueTtcclxuICAgIGxldCBkaWZmX3ggPSBtb3VzZS54IC0gZGVidWdfc3RhdGUubWlkZGxlX3Bvc2l0aW9uLng7XHJcbiAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgLTEgKiBkaWZmX3g7XHJcbiAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ICsgLTEgKiBkaWZmX3k7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9yb29tX2xpc3QoKSB7XHJcbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb21fbGlzdFwiKTtcclxuICBsaXN0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgZm9yIChsZXQgcm9vbV9uYW1lIG9mIE9iamVjdC5rZXlzKHJvb21fbGlzdCkpIHtcclxuICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXJhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJvb21fbmFtZSkpO1xyXG4gICAgcGFyYS5jbGFzc0xpc3QuYWRkKFwicm9vbV9saXN0X2l0ZW1cIik7XHJcbiAgICBwYXJhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBnLmxvYWRSb29tU3RyaW5nKHJvb21fbmFtZSk7XHJcbiAgICB9KVxyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChwYXJhKTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBwcm9wZXJ0aWVzX2VsZW1lbnQge1xyXG4gIHBvc194OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHBvc195OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHZlbF94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHZlbF95OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHJvdDogSFRNTElucHV0RWxlbWVudCxcclxuICBzY2FfeDogSFRNTElucHV0RWxlbWVudCxcclxuICBzY2FfeTogSFRNTElucHV0RWxlbWVudCxcclxuICByZW5kZXI6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgY29sbGlzaW9uOiBIVE1MSW5wdXRFbGVtZW50XHJcbn1cclxubGV0IHByb3BlcnRpZXNfZWxlbWVudHM6IHByb3BlcnRpZXNfZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuaWYgKERFQlVHKSB7XHJcbiAgcHJvcGVydGllc19lbGVtZW50cyA9IHtcclxuICAgIHBvc194OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3NfeFwiKSksXHJcbiAgICBwb3NfeTogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zX3lcIikpLFxyXG4gICAgdmVsX3g6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlbF94XCIpKSxcclxuICAgIHZlbF95OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZWxfeVwiKSksXHJcbiAgICByb3Q6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdFwiKSksXHJcbiAgICBzY2FfeDogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhX3hcIikpLFxyXG4gICAgc2NhX3k6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYV95XCIpKSxcclxuICAgIHJlbmRlcjogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuZGVyXCIpKSxcclxuICAgIGNvbGxpc2lvbjogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sbGlzaW9uXCIpKVxyXG4gIH1cclxuXHJcbiAgbGV0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIik7XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBpbnB1dHMubGVuZ3RoOyBhKyspIHtcclxuICAgIGlucHV0c1thXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgKDxIVE1MRWxlbWVudD5pbnB1dHNbYV0pLmZvY3VzKCk7XHJcbiAgICB9KVxyXG4gIH1cclxuICBsZXQgZm9jdXNlZDtcclxuICBsZXQgZGVidWdfdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z190YXJnZXRcIilcclxuICBkZWJ1Z190YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGlucHV0cy5sZW5ndGg7IGErKykge1xyXG4gICAgICBpbnB1dHNbYV0uYmx1cigpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgbGV0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpO1xyXG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgaW5wdXRzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgIGlucHV0c1thXS5ibHVyKCk7XHJcbiAgICB9XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnBvc194LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgXHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3gudmFsdWUpIHx8IDA7XHJcbiAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTpcInBvc2l0aW9uXCIsXHJcbiAgICAgIGVsZW1lbnQ6ZWxlLFxyXG4gICAgICBuZXc6SlNPTi5zdHJpbmdpZnkoe3g6bmV3X3ZhbCx5OmVsZS5zdGF0ZS5wb3NpdGlvbi55fSksXHJcbiAgICAgIG9sZDpKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUucG9zaXRpb24pXHJcbiAgICB9KVxyXG4gICAgZWxlLnN0YXRlLnBvc2l0aW9uLnggPSBuZXdfdmFsO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBsZXQgbmV3X3ZhbCA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy5wb3NfeS52YWx1ZSkgfHwgMDtcclxuICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OlwicG9zaXRpb25cIixcclxuICAgICAgZWxlbWVudDplbGUsXHJcbiAgICAgIG5ldzpKU09OLnN0cmluZ2lmeSh7eDplbGUuc3RhdGUucG9zaXRpb24ueCx5Om5ld192YWx9KSxcclxuICAgICAgb2xkOkpTT04uc3RyaW5naWZ5KGVsZS5zdGF0ZS5wb3NpdGlvbilcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUucG9zaXRpb24ueSA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF94LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5zdGF0ZS52ZWxvY2l0eS54ID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF94LnZhbHVlKSB8fCAwO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy52ZWxfeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUuc3RhdGUudmVsb2NpdHkueSA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy52ZWxfeS52YWx1ZSkgfHwgMDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMucm90LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGxldCBuZXdfdmFsID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnJvdC52YWx1ZSkgfHwgMDtcclxuICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5Olwicm90YXRpb25cIixcclxuICAgICAgZWxlbWVudDplbGUsXHJcbiAgICAgIG5ldzpKU09OLnN0cmluZ2lmeShuZXdfdmFsKSxcclxuICAgICAgb2xkOkpTT04uc3RyaW5naWZ5KGVsZS5yb3RhdGlvbilcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUucm90YXRpb24gPSBuZXdfdmFsO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5zY2FfeC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBsZXQgbmV3X3ZhbCA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy5zY2FfeC52YWx1ZSkgfHwgMDtcclxuICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5Olwic2NhbGluZ1wiLFxyXG4gICAgICBlbGVtZW50OmVsZSxcclxuICAgICAgbmV3OkpTT04uc3RyaW5naWZ5KHt3aWR0aDpuZXdfdmFsLGhlaWdodDplbGUuc3RhdGUuc2NhbGluZy5oZWlnaHR9KSxcclxuICAgICAgb2xkOkpTT04uc3RyaW5naWZ5KGVsZS5zdGF0ZS5zY2FsaW5nKVxyXG4gICAgfSlcclxuICAgIGVsZS5zdGF0ZS5zY2FsaW5nLndpZHRoID0gbmV3X3ZhbDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3kuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3kudmFsdWUpIHx8IDA7XHJcbiAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTpcInNjYWxpbmdcIixcclxuICAgICAgZWxlbWVudDplbGUsXHJcbiAgICAgIG5ldzpKU09OLnN0cmluZ2lmeSh7d2lkdGg6ZWxlLnN0YXRlLnNjYWxpbmcud2lkdGgsaGVpZ2h0Om5ld192YWx9KSxcclxuICAgICAgb2xkOkpTT04uc3RyaW5naWZ5KGVsZS5zdGF0ZS5zY2FsaW5nKVxyXG4gICAgfSlcclxuICAgIGVsZS5zdGF0ZS5zY2FsaW5nLmhlaWdodCA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnJlbmRlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUucmVuZGVyID0gcHJvcGVydGllc19lbGVtZW50cy5yZW5kZXIuY2hlY2tlZDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMuY29sbGlzaW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5jb2xsaXNpb24gPSBwcm9wZXJ0aWVzX2VsZW1lbnRzLmNvbGxpc2lvbi5jaGVja2VkO1xyXG4gIH0pXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVfZWxlbWVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUuZGVsZXRlKCk7XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKSB7XHJcbiAgaWYgKGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudCkge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqX25hbWVcIikuaW5uZXJIVE1MID0gZWxlLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnBvc194LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS5wb3NpdGlvbi54LnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnBvc195LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS5wb3NpdGlvbi55LnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF94LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS52ZWxvY2l0eS54LnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF95LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS52ZWxvY2l0eS55LnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnJvdC52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUucm90YXRpb24udG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3gudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnNjYWxpbmcud2lkdGgudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3kudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnNjYWxpbmcuaGVpZ2h0LnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnJlbmRlci5jaGVja2VkID0gZWxlLnJlbmRlcjtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMuY29sbGlzaW9uLmNoZWNrZWQgPSBlbGUuY29sbGlzaW9uO1xyXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhcmFtc19saXN0XCIpO1xyXG4gICAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgZm9yIChsZXQgayBvZiBPYmplY3Qua2V5cyhlbGUucGFyYW1zKSkge1xyXG5cclxuICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgc3Bhbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrKSk7XHJcbiAgICAgIGxldCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgaWYgKHR5cGVvZiAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZW9mICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0eXBlb2YgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBrKVxyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSArIFwiXCIpO1xyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICB9KVxyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgICAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgICAgIGxldCB2YWw6IHN0cmluZyA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmICghaXNOYU4odmFsIGFzIHVua25vd24gYXMgbnVtYmVyKSkge1xyXG4gICAgICAgICAgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPSBwYXJzZUZsb2F0KHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbCA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWwgPT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgICAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgcC5hcHBlbmQoaW5wdXQpO1xyXG4gICAgICBsaXN0LmFwcGVuZChwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdfdXBkYXRlX29ial9saXN0KCkge1xyXG4gIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmplY3RzX2xpc3RcIik7XHJcbiAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGlmIChnLmdldFJvb20oKSkge1xyXG4gICAgZm9yIChsZXQgb2JqIG9mIGcuZ2V0Um9vbSgpLm9iamVjdHMpIHtcclxuICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgcGFyYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvYmouY29uc3RydWN0b3IubmFtZSkpO1xyXG4gICAgICBwYXJhLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RfbGlzdF9pdGVtXCIpO1xyXG4gICAgICBwYXJhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQgPT0gPG9iaj5vYmopIHtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sICg8b2JqPm9iaikuc3RhdGUucG9zaXRpb24pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50ID0gPG9iaj5vYmo7XHJcbiAgICAgICAgICBkZWJ1Z191cGRhdGVfcHJvcGVydGllc19lbGVtZW50KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVidWdfdXBkYXRlX3ByZWZhYnMoKSB7XHJcbiAgbGV0IHByZXMgPSBPYmplY3Qua2V5cyhwcmVmYWJzKS5tYXAoYXN5bmMgKG86IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IGEgPSA8b2JqPihuZXcgcHJlZmFic1tvXSh7XHJcbiAgICAgIHBvc2l0aW9uOnsgeDogMCwgeTogMCB9LFxyXG4gICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9XHJcbiAgICB9KSk7XHJcbiAgICBhd2FpdCBhLmxvYWQoKTtcclxuICAgIGEucmVuZGVyID0gdHJ1ZTtcclxuICAgIGxldCBvYmpzID0gYS5jb21iaW5lZE9iamVjdHMoKTtcclxuICAgIGZvciAobGV0IG9iaiBvZiBvYmpzKSB7XHJcbiAgICAgIG9iai5VbmJpbmRBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmlsdGVyZWQgPSBvYmpzLmZpbHRlcigoYSkgPT4gYS5yZW5kZXIpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJlZmFiOiBwcmVmYWJzW29dLFxyXG4gICAgICBuYW1lOiBhLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgIHJlbmRlcmVkOiBmaWx0ZXJlZC5tYXAoKG8pID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogby5jb25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICAgICAgcmVuZGVyOiBvLnJlbmRlcmYoMClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICB9KVxyXG4gIGxldCBhID0gYXdhaXQgUHJvbWlzZS5hbGwocHJlcyk7XHJcblxyXG4gIGxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWZhYl90YXJnZXRcIik7XHJcbiAgdGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgZm9yIChsZXQgcHJlZmFiIG9mIGEpIHtcclxuXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXJhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByZWZhYi5uYW1lKSk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcmVmYWIucmVuZGVyZWRbMF0ucmVuZGVyKSkge1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGRpdi5hcHBlbmQocHJlZmFiLnJlbmRlcmVkWzBdLnJlbmRlci5zcHJpdGUuc3ByaXRlX3NoZWV0KTtcclxuICAgIH1cclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJlZmFiX2JveFwiKTtcclxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IHZhbCA9IHtcclxuICAgICAgICBwb3NpdGlvbjp7IHg6IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54LCB5OiBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSB9LFxyXG4gICAgICAgIHZlbG9jaXR5Ont4OjAseTowfSxcclxuICAgICAgICByb3RhdGlvbjowLFxyXG4gICAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBvYmogPSA8b2JqPihuZXcgcHJlZmFiLnByZWZhYih2YWwpKTtcclxuICAgICAgYXdhaXQgZy5zdGF0ZS5jdXJyZW50X3Jvb20uYWRkSXRlbXMob2JqLmNvbWJpbmVkT2JqZWN0cygpKTtcclxuICAgIH0pO1xyXG4gICAgdGFyZ2V0LmFwcGVuZChkaXYpO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGRlYnVnX2FjdGlvbntcclxuICBwcm9wZXJ0eTpzdHJpbmcsXHJcbiAgb2xkOnN0cmluZyxcclxuICBuZXc6c3RyaW5nLFxyXG4gIGVsZW1lbnQ6b2JqXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZGVidWdfdmFyc3tcclxuICB0YXJnZXQ6SFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgY2FtZXJhOkNhbWVyYSxcclxuICBsYXN0X2NsaWNrZWQ6SFRNTEVsZW1lbnQsXHJcbiAgc2VsZWN0ZWRfZWxlbWVudF9pbml0aWFsX3NjYWxpbmc6ZGltZW5zaW9ucyxcclxuICBzZWxlY3RlZF9lbGVtZW50Om9iaixcclxuICBzZWxlY3RlZF9lbGVtZW50X29mZnNldDpwb3NpdGlvbixcclxuICByb3RhdGlvbl9lbGVtZW50Om9iaixcclxuICBzZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ6b2JqLFxyXG4gIG1pZGRsZV9wb3NpdGlvbjpwb3NpdGlvbixcclxuICBjbGlja19wb3NpdGlvbjpwb3NpdGlvbixcclxuICBhY3Rpb25zX3N0YWNrOmRlYnVnX2FjdGlvbltdLFxyXG4gIGN1cnJlbnRfYWN0aW9uOmRlYnVnX2FjdGlvblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGRlYnVnX3N0YXRlOmRlYnVnX3ZhcnM7XHJcblxyXG5leHBvcnQgbGV0IGRlYnVnX3NldHVwID0gKCkgPT4ge1xyXG4gIGRlYnVnX3N0YXRlID0ge1xyXG4gICAgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnX3RhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcclxuICAgIGNhbWVyYTogbmV3IENhbWVyYSh7XHJcbiAgICAgIHg6MCxcclxuICAgICAgeTowLFxyXG4gICAgICBkaW1lbnNpb25zOntcclxuICAgICAgICBoZWlnaHQ6dmlld3BvcnQuaGVpZ2h0LFxyXG4gICAgICAgIHdpZHRoOnZpZXdwb3J0LndpZHRoXHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxpbmc6MSxcclxuICAgICAgZGVidWc6dHJ1ZVxyXG4gICAgfVxyXG4gICAgLHtcclxuICAgICAgeDoxLFxyXG4gICAgICB5OjAsXHJcbiAgICAgIHdpZHRoOjEsXHJcbiAgICAgIGhlaWdodDoxXHJcbiAgICB9KSxcclxuICAgIGxhc3RfY2xpY2tlZDp1bmRlZmluZWQsXHJcbiAgICBzZWxlY3RlZF9lbGVtZW50OnVuZGVmaW5lZCxcclxuICAgIHNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0OnVuZGVmaW5lZCxcclxuICAgIHJvdGF0aW9uX2VsZW1lbnQ6dW5kZWZpbmVkLFxyXG4gICAgbWlkZGxlX3Bvc2l0aW9uOnVuZGVmaW5lZCxcclxuICAgIGNsaWNrX3Bvc2l0aW9uOnVuZGVmaW5lZCxcclxuICAgIHNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDp1bmRlZmluZWQsXHJcbiAgICBzZWxlY3RlZF9lbGVtZW50X2luaXRpYWxfc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX0sXHJcbiAgICBhY3Rpb25zX3N0YWNrOltdLFxyXG4gICAgY3VycmVudF9hY3Rpb246dW5kZWZpbmVkXHJcbiAgfVxyXG4gIGRlYnVnX3N0YXRlLmNhbWVyYS5odWQgPSBuZXcgRGVidWdfaHVkKCk7XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6XCJtb3VzZTBkb3duXCIsXHJcbiAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6MCxcclxuICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgIGlmKGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQpe1xyXG4gICAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShkZWJ1Z19zdGF0ZS5jYW1lcmEsZGVidWdfc3RhdGUudGFyZ2V0KTtcclxuICAgICAgICBkZWJ1Z19zdGF0ZS5jbGlja19wb3NpdGlvbiA9IG1vdXNlO1xyXG4gICAgICAgIGxldCBhbExfY2xpY2tlZCA9IGcuZ2V0Um9vbSgpLmNoZWNrT2JqZWN0cyh7XHJcbiAgICAgICAgICB4Om1vdXNlLngsXHJcbiAgICAgICAgICB5Om1vdXNlLnksXHJcbiAgICAgICAgICBoZWlnaHQ6MSxcclxuICAgICAgICAgIHdpZHRoOjFcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBjbGlja2VkO1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZCA9IGFsTF9jbGlja2VkLmZpbHRlcigoZWxlKT0+ZWxlID09IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudClcclxuICAgICAgICBpZihmaWx0ZXJlZC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgIGNsaWNrZWQgPSBmaWx0ZXJlZFswXVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgY2xpY2tlZCA9IGFsTF9jbGlja2VkWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjbGlja2VkKXtcclxuICAgICAgICAgIGlmKGhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdKXtcclxuICAgICAgICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudDpjbGlja2VkLFxyXG4gICAgICAgICAgICAgIHByb3BlcnR5Olwic2NhbGluZ1wiLFxyXG4gICAgICAgICAgICAgIG9sZDpKU09OLnN0cmluZ2lmeShjbGlja2VkLnNjYWxpbmcpLFxyXG4gICAgICAgICAgICAgIG5ldzp1bmRlZmluZWRcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbiA9IHtcclxuICAgICAgICAgICAgICBlbGVtZW50OmNsaWNrZWQsXHJcbiAgICAgICAgICAgICAgcHJvcGVydHk6XCJwb3NpdGlvblwiLFxyXG4gICAgICAgICAgICAgIG9sZDpKU09OLnN0cmluZ2lmeSgoPG9ial9zdGF0ZT5jbGlja2VkLnN0YXRlKS5wb3NpdGlvbiksXHJcbiAgICAgICAgICAgICAgbmV3OnVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ9IGNsaWNrZWQ7XHJcbiAgICAgICAgICBkZWJ1Z191cGRhdGVfcHJvcGVydGllc19lbGVtZW50KClcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQgPSBjbGlja2VkO1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudF9pbml0aWFsX3NjYWxpbmcgPSBjbGlja2VkLnN0YXRlLnNjYWxpbmc7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50X29mZnNldCA9IHtcclxuICAgICAgICAgICAgeDogbW91c2UueCAtICg8b2JqX3N0YXRlPmNsaWNrZWQuc3RhdGUpLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IG1vdXNlLnkgLSAoPG9ial9zdGF0ZT5jbGlja2VkLnN0YXRlKS5wb3NpdGlvbi55XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTpkZWJ1Z19zdGF0ZS5jYW1lcmFcclxuICB9KTtcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTpcIm1vdXNlMXVwXCIsXHJcbiAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6NSxcclxuICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgIGRlYnVnX3N0YXRlLm1pZGRsZV9wb3NpdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcbiAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgY2FtZXJhOmRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OlwibW91c2UxZG93blwiLFxyXG4gICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgIGlkOjYsXHJcbiAgICBmdW5jdGlvbjooKT0+e1xyXG4gICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSxkZWJ1Z19zdGF0ZS50YXJnZXQpO1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5taWRkbGVfcG9zaXRpb24gPSBtb3VzZTtcclxuICAgIH0sXHJcbiAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgY2FtZXJhOmRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OlwibW91c2UwdXBcIixcclxuICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICBpZDoxLFxyXG4gICAgZnVuY3Rpb246KCk9PntcclxuICAgICAgaWYoZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCl7XHJcbiAgICAgICAgaWYoZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ucHJvcGVydHkgPT0gXCJzY2FsaW5nXCIpe1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ubmV3ID0gSlNPTi5zdHJpbmdpZnkoZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5zY2FsaW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uLnByb3BlcnR5ID09IFwicG9zaXRpb25cIil7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5uZXcgPSBKU09OLnN0cmluZ2lmeSgoPG9ial9zdGF0ZT5kZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlKS5wb3NpdGlvbilcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpXHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTpkZWJ1Z19zdGF0ZS5jYW1lcmFcclxuICB9KTtcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTpcIm1vdXNlMmRvd25cIixcclxuICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICBpZDozLFxyXG4gICAgZnVuY3Rpb246KCk9PntcclxuICAgICAgaWYoZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCl7XHJcbiAgICAgICAgZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSxkZWJ1Z19zdGF0ZS50YXJnZXQpO1xyXG4gICAgICAgIGxldCBjbGlja2VkID0gZy5nZXRSb29tKCkuY2hlY2tPYmplY3RzKHtcclxuICAgICAgICAgIHg6bW91c2UueCxcclxuICAgICAgICAgIHk6bW91c2UueSxcclxuICAgICAgICAgIGhlaWdodDoxLFxyXG4gICAgICAgICAgd2lkdGg6MVxyXG4gICAgICAgIH0pWzBdXHJcbiAgICAgICAgaWYoY2xpY2tlZCl7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50ID0gY2xpY2tlZDtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uID0ge1xyXG4gICAgICAgICAgICBlbGVtZW50OmRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQsXHJcbiAgICAgICAgICAgIHByb3BlcnR5Olwicm90YXRpb25cIixcclxuICAgICAgICAgICAgb2xkOkpTT04uc3RyaW5naWZ5KGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQucm90YXRpb24pLFxyXG4gICAgICAgICAgICBuZXc6dW5kZWZpbmVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTpkZWJ1Z19zdGF0ZS5jYW1lcmFcclxuICB9KTtcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTpcIm1vdXNlMnVwXCIsXHJcbiAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6NCxcclxuICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgIGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uLm5ldyA9IEpTT04uc3RyaW5naWZ5KGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQuc3RhdGUucm90YXRpb24pXHJcbiAgICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaChkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbik7XHJcbiAgICAgIGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTpkZWJ1Z19zdGF0ZS5jYW1lcmFcclxuICB9KTtcclxuXHJcbiAgbGV0IGxlZnRfZnVuYyA9ICgpPT57XHJcbiAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDE6MDtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54IC0gKCg1ICsgc2hpZnRfaGVsZCAqIDUpICogKDEvZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICB9O1xyXG4gIGxldCByaWdodF9mdW5jID0gKCk9PntcclxuICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMTowO1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMS9kZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIH07XHJcbiAgbGV0IGRvd25fZnVuYyA9ICgpPT57XHJcbiAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDE6MDtcclxuICAgIFxyXG4gICAgaWYoIWhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55IC0gKCg1ICsgc2hpZnRfaGVsZCAqIDUpICogKDEvZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICB9O1xyXG4gIGxldCB1cF9mdW5jID0gKCk9PntcclxuICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMTowO1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgKyAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMS9kZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIH07XHJcbiAgbGV0IHNjcm9sbF91cCA9ICgpPT57XHJcbiAgICBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIilcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyArIDAuMDU7XHJcbiAgfVxyXG4gIGxldCBzYXZlX2Z1bmMgPSAoKT0+e1xyXG4gICAgbGV0IGN0cmxfaGVsZCA9IGhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdO1xyXG4gICAgaWYoY3RybF9oZWxkICYmIFBBVVNFRCl7XHJcbiAgICAgIGxldCBuYW1lID0gZy5nZXRSb29tKCkuY29uc3RydWN0b3IubmFtZTtcclxuICAgICAgbGV0IGEgPSBwYXRoLmpvaW4oYCR7cHJvamVjdF9wYXRofWAsYC4uL3Jvb21zLyR7bmFtZX0uanNvbmApO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoYSxKU09OLnN0cmluZ2lmeShnLmdldFJvb20oKS5leHBvcnRTdGF0ZUNvbmZpZygpKSk7XHJcbiAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBXUklUSU5HIFJPT00gSU5GTyBGSUxFLlwiKTsgXHJcbiAgICAgIH1cclxuICAgICAgYWxlcnQoXCJTYXZlZFwiKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGN0cmxfaGVsZCAmJiAhUEFVU0VEKXtcclxuICAgICAgYWxlcnQoXCJwYXVzZSB0byBlbmFibGUgc2F2aW5nLlwiKVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgc2Nyb2xsX2Rvd24gPSAoKT0+e1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIgJiYgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPiAwLjA1KVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nIC0gMC4wNTtcclxuICB9XHJcbiAgbGV0IHVuZG9fZnVuYyA9ICgpPT57XHJcbiAgICBpZihoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSl7XHJcbiAgICAgIGxldCBjdXJyOmRlYnVnX2FjdGlvbiA9IGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucG9wKCk7XHJcbiAgICAgIGlmKGN1cnIpe1xyXG4gICAgICAgIGlmKGN1cnIucHJvcGVydHkgPT0gXCJwb3NpdGlvblwiKXtcclxuICAgICAgICAgIGN1cnIuZWxlbWVudC5zdGF0ZS5wb3NpdGlvbiA9IEpTT04ucGFyc2UoY3Vyci5vbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGN1cnIucHJvcGVydHkgPT09IFwicm90YXRpb25cIil7XHJcbiAgICAgICAgICBjdXJyLmVsZW1lbnQucm90YXRpb24gPSBKU09OLnBhcnNlKGN1cnIub2xkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjdXJyLnByb3BlcnR5ID09PSBcInNjYWxpbmdcIil7XHJcbiAgICAgICAgICBjdXJyLmVsZW1lbnQuc2NhbGluZyA9IEpTT04ucGFyc2UoY3Vyci5vbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTpcIktleUFcIixcclxuICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICBpZDpCaW5kKFwiS2V5QVwiLGxlZnRfZnVuYyxleGVjX3R5cGUucmVwZWF0LDEpLFxyXG4gICAgZnVuY3Rpb246bGVmdF9mdW5jLFxyXG4gICAgZXhlY3V0ZTpleGVjX3R5cGUucmVwZWF0XHJcbiAgfSlcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTpcIktleURcIixcclxuICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICBpZDpCaW5kKFwiS2V5RFwiLHJpZ2h0X2Z1bmMsZXhlY190eXBlLnJlcGVhdCwxKSxcclxuICAgIGZ1bmN0aW9uOnJpZ2h0X2Z1bmMsXHJcbiAgICBleGVjdXRlOmV4ZWNfdHlwZS5yZXBlYXRcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OlwiS2V5V1wiLFxyXG4gICAgdHlwZTpidHlwZS5rZXlib2FyZCxcclxuICAgIGlkOkJpbmQoXCJLZXlXXCIsdXBfZnVuYyxleGVjX3R5cGUucmVwZWF0LDEpLFxyXG4gICAgZnVuY3Rpb246dXBfZnVuYyxcclxuICAgIGV4ZWN1dGU6ZXhlY190eXBlLnJlcGVhdFxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6XCJLZXlTXCIsXHJcbiAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6QmluZChcIktleVNcIixkb3duX2Z1bmMsZXhlY190eXBlLnJlcGVhdCwxKSxcclxuICAgIGZ1bmN0aW9uOmRvd25fZnVuYyxcclxuICAgIGV4ZWN1dGU6ZXhlY190eXBlLnJlcGVhdFxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6XCJzY3JvbGx1cFwiLFxyXG4gICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgIGlkOkJpbmQoXCJzY3JvbGx1cFwiLHNjcm9sbF91cCxleGVjX3R5cGUub25jZSwxKSxcclxuICAgIGZ1bmN0aW9uOnNjcm9sbF91cCxcclxuICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2VcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5Olwic2Nyb2xsZG93blwiLFxyXG4gICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgIGlkOkJpbmQoXCJzY3JvbGxkb3duXCIsc2Nyb2xsX2Rvd24sZXhlY190eXBlLm9uY2UsMSksXHJcbiAgICBmdW5jdGlvbjpzY3JvbGxfZG93bixcclxuICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2VcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OlwiS2V5U1wiLFxyXG4gICAgdHlwZTpidHlwZS5rZXlib2FyZCxcclxuICAgIGlkOkJpbmQoXCJLZXlTXCIsc2F2ZV9mdW5jLGV4ZWNfdHlwZS5vbmNlLDEpLFxyXG4gICAgZnVuY3Rpb246c2F2ZV9mdW5jLFxyXG4gICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZVxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6XCJLZXlaXCIsXHJcbiAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6QmluZChcIktleVpcIix1bmRvX2Z1bmMsZXhlY190eXBlLm9uY2UsMSksXHJcbiAgICBmdW5jdGlvbjp1bmRvX2Z1bmMsXHJcbiAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlXHJcbiAgfSlcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XHJcbiAgICBpZihlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcclxuICAgICAgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkID0gZS50YXJnZXQ7XHJcbiAgICB9XHJcbiAgfSlcclxuICBsZXQgcGF1c2VfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZV9idXR0b25cIilcclxuICBwYXVzZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XHJcbiAgICBzZXRQYXVzZWQoIVBBVVNFRCk7XHJcbiAgICBpZihQQVVTRUQpe1xyXG4gICAgICBwYXVzZV9idXR0b24uaW5uZXJIVE1MID0gXCJVTlBBVVNFXCI7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBwYXVzZV9idXR0b24uaW5uZXJIVE1MID0gXCJQQVVTRVwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGxldCBvYmpfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfb2JqZWN0X2J1dHRvblwiKTtcclxuICBsZXQgcm9vbV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19yb29tX2J1dHRvblwiKTtcclxuICByb29tX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGxldCBmaWxlX3BhdGggPSBpcGNSZW5kZXJlci5zZW5kU3luYygnb2JqZWN0LXBhdGgtcmVxdWVzdCcsIFwicm9vbXNcIik7XHJcbiAgICBpZiAoZmlsZV9wYXRoKSB7XHJcbiAgICAgIGxldCBmdWxsX25hbWUgPSBwYXRoLnBhcnNlKGZpbGVfcGF0aCkuYmFzZTtcclxuICAgICAgbGV0IG5ld19uYW1lID0gZnVsbF9uYW1lLnN1YnN0cigwLCBmdWxsX25hbWUubGVuZ3RoIC0gMyk7XHJcbiAgICAgIGxldCBwYXRoX3RvX3dyaXRlID0gcGF0aC5qb2luKGAke2ZpbGVfcGF0aH1gLCBcIi4uXCIsIG5ld19uYW1lICsgXCIudHNcIik7XHJcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aF90b193cml0ZSwgYFxyXG4gICAgXHJcbiAgICBpbXBvcnQge3Jvb219IGZyb20gXCIuLi8uLi9saWIvcm9vbVwiO1xyXG4gICAgaW1wb3J0IHtnYW1lfSBmcm9tIFwiLi4vLi4vdmFuXCI7XHJcbiAgICBpbXBvcnQge3N0YXRlX2NvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XHJcbiAgICBpbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4vJHtuZXdfbmFtZX0uanNvblwiO1xyXG4gICAgbGV0IGNmaWcgPSBjb25maWcgYXMgdW5rbm93biBhcyBzdGF0ZV9jb25maWc7XHJcbiAgICBpbnRlcmZhY2UgJHtuZXdfbmFtZX1fc3RhdGV7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBleHBvcnQgY2xhc3MgJHtuZXdfbmFtZX0gZXh0ZW5kcyByb29tPCR7bmV3X25hbWV9X3N0YXRlPntcclxuICAgICAgYmFja2dyb3VuZF91cmw9XCIuL3Nwcml0ZXMvRXJyb3IucG5nXCI7XHJcbiAgICAgIGNvbnN0cnVjdG9yKGdhbWU6Z2FtZTx1bmtub3duPil7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSxjZmlnKTtcclxuICAgICAgfVxyXG4gICAgICByZWdpc3RlckNvbnRyb2xzKCl7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICByZWdpc3RlclBhcnRpY2xlcygpe1xyXG4gICAgXHJcbiAgICAgIH1cclxuICAgICAgc3RhdGVmKGRlbHRhX3RpbWU6bnVtYmVyKXtcclxuICAgICAgICBzdXBlci5zdGF0ZWYoZGVsdGFfdGltZSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBgKVxyXG5cclxuICAgICAgcGF0aF90b193cml0ZSA9IHBhdGguam9pbihgJHtmaWxlX3BhdGh9YCwgXCIuLlwiLCBuZXdfbmFtZSArIFwiLmpzb25cIik7XHJcblxyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGhfdG9fd3JpdGUsIGBcclxuICAgIHtcclxuICAgICAgXCJvYmplY3RzXCI6W11cclxuICAgIH1cclxuICAgIGApXHJcbiAgICB9XHJcbiAgfSlcclxuICBvYmpfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGZpbGVfcGF0aCA9IGlwY1JlbmRlcmVyLnNlbmRTeW5jKCdvYmplY3QtcGF0aC1yZXF1ZXN0JywgXCJvYmplY3RzXCIpO1xyXG4gICAgaWYgKGZpbGVfcGF0aCkge1xyXG4gICAgICBsZXQgZnVsbF9uYW1lID0gcGF0aC5wYXJzZShmaWxlX3BhdGgpLmJhc2U7XHJcbiAgICAgIGxldCBuZXdfbmFtZSA9IGZ1bGxfbmFtZS5zdWJzdHIoMCwgZnVsbF9uYW1lLmxlbmd0aCAtIDMpO1xyXG4gICAgICBsZXQgcGF0aF90b193cml0ZSA9IHBhdGguam9pbihgJHtmaWxlX3BhdGh9YCwgXCIuLlwiLCBuZXdfbmFtZSArIFwiLnRzXCIpO1xyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGhfdG9fd3JpdGUsIGBcclxuICAgIFxyXG4gICAgaW1wb3J0IHtvYmp9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbiAgICBpbXBvcnQgeyBvYmpfc3RhdGUsIHBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG4gICAgXHJcbiAgICBpbnRlcmZhY2UgJHtuZXdfbmFtZX1fc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW50ZXJmYWNlICR7bmV3X25hbWV9X3BhcmFtZXRlcnN7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzICR7bmV3X25hbWV9IGV4dGVuZHMgb2JqPCR7bmV3X25hbWV9X3N0YXRlPntcclxuICAgICAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL0Vycm9yLnBuZ1wiO1xyXG4gICAgICBoZWlnaHQgPSAxMDA7XHJcbiAgICAgIHdpZHRoID0gMTAwO1xyXG4gICAgICB0YWdzOkFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICAgICAgcmVuZGVyID0gdHJ1ZTtcclxuICAgICAgcm90YXRpb24gPSAwO1xyXG4gICAgICBzY2FsaW5nID0gMTtcclxuICAgICAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOiR7bmV3X25hbWV9X3BhcmFtZXRlcnMgPSB7fVxyXG4gICAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjpwb3NpdGlvbixyb3RhdGlvbjpudW1iZXIsc2NhbGluZzpudW1iZXIscGFyYW1zOiR7bmV3X25hbWV9X3BhcmFtZXRlcnMgPSAke25ld19uYW1lfS5kZWZhdWx0X3BhcmFtcyl7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24scm90YXRpb24sc2NhbGluZyxwYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjpwb3NpdGlvbixcclxuICAgICAgICAgIHZlbG9jaXR5OntcclxuICAgICAgICAgICAgeDowLFxyXG4gICAgICAgICAgICB5OjBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGVmKHRpbWVfZGVsdGE6bnVtYmVyKXtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlcmYodGltZV9kZWx0YTpudW1iZXIpe1xyXG4gICAgICAgcmV0dXJuIHN1cGVyLnJlbmRlcmYodGltZV9kZWx0YSk7IFxyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdGVyX2FuaW1hdGlvbnMoKXtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdGVyX2F1ZGlvKCl7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICByZWdpc3Rlcl9jb250cm9scygpe1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGApXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbn0iLCJpbXBvcnQge29ian0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IEdvb21iYSB9IGZyb20gXCIuLi9nYW1lL29iamVjdHMvR29vbWJhXCI7XHJcblxyXG5pbnRlcmZhY2UgSHVkVGV4dEdldEZ1bmN7XHJcbiAgKCk6c3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFNldHRpbmd7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgZm9udDpGb250XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9udHtcclxuICBtYXhfd2lkdGg/Om51bWJlcixcclxuICBzaXplOm51bWJlcixcclxuICBmb250OnN0cmluZyxcclxuICBjb2xvcjpzdHJpbmcsXHJcbiAgdGV4dDpzdHJpbmcsXHJcbiAgYWxpZ246Q2FudmFzVGV4dEFsaWduXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dF9Ob2Rle1xyXG4gIG1heF93aWR0aD86bnVtYmVyLFxyXG4gIHBvc2l0aW9uOntcclxuICAgIHg6bnVtYmVyLFxyXG4gICAgeTpudW1iZXJcclxuICB9XHJcbiAgc2l6ZTpudW1iZXI7XHJcbiAgc2NhbGluZzpudW1iZXI7XHJcbiAgZm9udDpzdHJpbmc7XHJcbiAgY29sb3I6c3RyaW5nO1xyXG4gIHRleHQ/OnN0cmluZztcclxuICBhbGlnbj86Q2FudmFzVGV4dEFsaWduO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBIVUR7XHJcbiAgZ3JhcGhpY19lbGVtZW50czpvYmpbXSA9IFtdO1xyXG4gIHRleHRfZWxlbWVudHM6QXJyYXk8VGV4dD4gPSBbXTtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy50ZXh0X2VsZW1lbnRzLnB1c2goLi4udGhpcy5zZXRUZXh0RWxlbWVudHMoKSk7XHJcbiAgICB0aGlzLmdyYXBoaWNfZWxlbWVudHMucHVzaCguLi50aGlzLnNldEdyYXBoaWNFbGVtZW50cygpKTsgXHJcbiAgfVxyXG4gIHN0YXRlZihhOm51bWJlcil7XHJcbiAgICBmb3IobGV0IHggb2YgdGhpcy5ncmFwaGljX2VsZW1lbnRzKXtcclxuICAgICAgeC5zdGF0ZWYoYSk7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IHggb2YgdGhpcy50ZXh0X2VsZW1lbnRzKXtcclxuICAgICAgeC5zdGF0ZWYoYSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldFRleHRFbGVtZW50cygpOlRleHRbXXtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgc2V0R3JhcGhpY0VsZW1lbnRzKCk6b2JqW117XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHtcclxuICBnZXRfZnVuYzpIdWRUZXh0R2V0RnVuYztcclxuICBzdGF0ZTpUZXh0X05vZGU7XHJcbiAgY29uc3RydWN0b3IoYTpUZXh0X05vZGUsYjpIdWRUZXh0R2V0RnVuYyl7XHJcbiAgICBpZighYS5hbGlnbil7XHJcbiAgICAgIGEuYWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IGE7XHJcbiAgICBpZighdGhpcy5zdGF0ZS50ZXh0KXtcclxuICAgICAgdGhpcy5zdGF0ZS50ZXh0ID0gXCJcIjtcclxuICAgIH1cclxuICAgIHRoaXMuZ2V0X2Z1bmMgPSBiO1xyXG4gIH1cclxuICBzdGF0ZWYoYTpudW1iZXIpe1xyXG4gICB0aGlzLnN0YXRlLnRleHQgPSB0aGlzLmdldF9mdW5jKCk7XHJcbiAgfVxyXG4gIHJlbmRlcmYoYTpudW1iZXIpOkZvbnR7XHJcbiAgICBsZXQge3NpemUsY29sb3IsZm9udCx0ZXh0LG1heF93aWR0aCxhbGlnbn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2l6ZSxcclxuICAgICAgY29sb3IsXHJcbiAgICAgIGZvbnQsXHJcbiAgICAgIHRleHQsXHJcbiAgICAgIG1heF93aWR0aCxcclxuICAgICAgYWxpZ25cclxuICAgIH07XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtwb3NpdGlvbn0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEaXN0YW5jZShhOnBvc2l0aW9uLGI6cG9zaXRpb24pe1xyXG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYS54IC0gYi54LDIpICsgTWF0aC5wb3coYS55IC0gYi55LDIpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRJbnQobWluOm51bWJlciwgbWF4Om51bWJlcikge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSApICsgbWluO1xyXG59IiwiaW1wb3J0IHsgc3RhdGVfZnVuYywgb2JqX3N0YXRlLCBwb3NpdGlvbiwgZGltZW5zaW9ucyB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IHJlbmRlcl9mdW5jLCByZW5kZXJfdHlwZSB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSwgcG9zaXRpb25lZF9zcHJpdGUsIHNwcml0ZSwgc3ByaXRlX2dlbiB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4vY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IFVuYmluZCwgQmluZCwgY29udHJvbF9mdW5jLCBleGVjX3R5cGUgfSBmcm9tIFwiLi9jb250cm9sc1wiO1xyXG5pbXBvcnQge2F1ZGlvfSBmcm9tIFwiLi9hdWRpb1wiO1xyXG5pbXBvcnQge2dhbWV9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgRGlzdGFuY2UgfSBmcm9tIFwiLi9tYXRoXCI7XHJcblxyXG5pbnRlcmZhY2Ugb2JqX2k8VD4ge1xyXG4gIHN0YXRlZjogc3RhdGVfZnVuYzxUPixcclxuICByZW5kZXJmOiByZW5kZXJfZnVuY1xyXG59XHJcblxyXG4vL0ZpbmRzIHRoZSBzaWRlIGxlbmd0aHMgb2YgYSB0cmlhbmdsZSBpZiBnaXZlbiB0aGUgIGFuZ2xlIChpbiBkZWdyZWVzKVxyXG4vL2Fsb25nIHdpdGggdGhlIGxlbmd0aCBvZiB0aGUgaHlwb3RlbnVzZVxyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25fbGVuZ3RoKGxlbmd0aDogbnVtYmVyLCBkZWdyZWU6IG51bWJlcikge1xyXG4gIGxldCBhX2xlbiA9IGxlbmd0aCAqIE1hdGguc2luKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xyXG4gIGxldCBiX2xlbiA9IGxlbmd0aCAqIE1hdGguY29zKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiBhX2xlbixcclxuICAgIHk6IGJfbGVuXHJcbiAgfVxyXG59XHJcblxyXG4vL1RoaXMgY291bnRlciB0cmFja3MgdGhlIGdsb2JhbCBudW1iZXIgb2Ygb2JqZWN0cyBjcmVhdGVkIHNvIGZhclxyXG4vL2FuIG9iamVjdCdzIGlkIChpZiBub3Qgb3ZlcndyaXR0ZW4pIHdpbGwgYmUgYSB1bmlxdWUgaW50ZWdlciwgd2hpY2hcclxuLy91c2VzIHRoaXMgY291bnRlci5cclxubGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuaW50ZXJmYWNlIGFuaW1fc3RvcmFnZSB7XHJcbiAgW2luZGV4OiBzdHJpbmddOiBbQXJyYXk8W251bWJlciwgc3ByaXRlXT4sIG51bWJlcl1cclxufVxyXG5cclxuaW50ZXJmYWNlIHZvaWRfZnVuYyB7XHJcbiAgKCk6IHZvaWRcclxufVxyXG5cclxuY2xhc3MgYW5pbWF0aW9ucyB7XHJcbiAgYW5pbWF0aW9uczogYW5pbV9zdG9yYWdlID0ge307XHJcbiAgLy9UcmFja3MgdGhlIHRpbWUgcGFzc2VkIHNpbmNlIHRoZSBjdXJyZW50IGFuaW1hdGlvblxyXG4gIC8vaGFzIHN0YXJ0ZWQgcGxheWluZ1xyXG4gIGFuaW1hdGlvbl90cmFja2VyID0gMDtcclxuICBjdXJyZW50OiBzdHJpbmc7XHJcbiAgY2FsbGJhY2s6IHZvaWRfZnVuYztcclxuICBhbmltYXRpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vZGVmaW5lcyBhbiBhbmltYXRpb24gdGhhdCBjYW4gYmUgcGxheWVkIHVzaW5nIHRoZSBwbGF5IG1ldGhvZFxyXG4gIC8vdGhlIGtleWZyYW1lcyBhcmUgYW4gYXJyYXkgb2YgdHVwbGVzIGluIHRoZSBcclxuICAvL2Zvcm1hdCBvZiBbKHRpbWUgZm9yIHRoaXMgc3ByaXRlIHRvIHNob3cpLCBzcHJpdGVdXHJcbiAgYWRkKG5hbWU6IHN0cmluZywga2V5ZnJhbWVzOiBBcnJheTxbbnVtYmVyLCBzcHJpdGVdPiwgbGVuZ3RoOiBudW1iZXIpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IFtrZXlmcmFtZXMsIGxlbmd0aF07XHJcbiAgfVxyXG4gIHBsYXkobmFtZTogc3RyaW5nLCBjYWxsYmFjaz86IHZvaWRfZnVuYykge1xyXG4gICAgdGhpcy5jdXJyZW50ID0gbmFtZTtcclxuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPSAwO1xyXG4gIH1cclxuICByZW5kZXJmKHQ6IG51bWJlcik6IHNwcml0ZSB7XHJcbiAgICBsZXQgY3Vycl9hbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50XVswXTtcclxuICAgIGxldCBsZW5ndGg6IG51bWJlciA9IHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRdWzFdO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIGZvciAoOyBpbmRleCA8IGN1cnJfYW5pbWF0aW9uLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcclxuICAgICAgbGV0IGtleWZyYW1lX3RpbWUgPSBjdXJyX2FuaW1hdGlvbltpbmRleF1bMF07XHJcbiAgICAgIGxldCBuZXh0X2tleWZyYW1lX3RpbWUgPSBjdXJyX2FuaW1hdGlvbltpbmRleCArIDFdWzBdO1xyXG4gICAgICBpZiAodGhpcy5hbmltYXRpb25fdHJhY2tlciA+PSBrZXlmcmFtZV90aW1lICYmIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPCBuZXh0X2tleWZyYW1lX3RpbWUpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbl90cmFja2VyID0gdGhpcy5hbmltYXRpb25fdHJhY2tlciArIHQ7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vUmV0dXJucyB0aGUgcmF3IHNwcml0ZSB0aGF0J3MgY29ycmVjdCB0byBzaG93IGF0IHRoaXMgdGltZVxyXG4gICAgICAgIHJldHVybiBjdXJyX2FuaW1hdGlvbltpbmRleF1bMV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbl90cmFja2VyID49IGxlbmd0aCkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbl90cmFja2VyID0gMDtcclxuICAgICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbl90cmFja2VyICs9IHQ7XHJcbiAgICB9XHJcbiAgICAvL1JldHVybnMgdGhlIGxhc3QgYXBwcm9wcmlhdGUgZnJhbWUgdW50aWwgdGhlIGFuaW1hdGlvbiBpcyBvdmVyLlxyXG4gICAgcmV0dXJuIGN1cnJfYW5pbWF0aW9uW2luZGV4XVsxXTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBoaXRib3h7XHJcbiAgd2lkdGg6bnVtYmVyLFxyXG4gIGhlaWdodDpudW1iZXIsXHJcbiAgeF9vZmZzZXQ6bnVtYmVyLFxyXG4gIHlfb2Zmc2V0Om51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHBhcmFtc3tcclxuICBbaW5kZXg6c3RyaW5nXTpib29sZWFufHN0cmluZ3xudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIG9iantcclxuICAvL1VybCB0byB0aGUgb2JqZWN0J3MgaW5kaXZpZHVhbCBzcHJpdGUsIG9yIGFsbCBvZiBpdHMgc3ByaXRlc1xyXG4gIC8vYnVuZGxlZCBpbnRvIGEgc3ByaXRlc2hlZXRcclxuICBzcHJpdGVfdXJsID0gXCJcIjtcclxuICAvL1RoaXMgaXMgdGhlIGxvYWRlZCBzcHJpdGUvc3ByaXRlc2hlZXQgb2YgdGhlIG9iamVjdFxyXG4gIC8vd2hpY2ggaXMgZmV0Y2hlZCBmcm9tIHRoZSB1cmwgYWJvdmVcclxuICBzcHJpdGVfc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgc3RhdGU6IG9ial9zdGF0ZTtcclxuICByZW5kZXJfdHlwZSA9IHJlbmRlcl90eXBlLnNwcml0ZTtcclxuICAvL1RoZXNlIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBhY3R1YWwgb2JqZWN0J3Mgc3ByaXRlIGhlaWdodCBhbmQgd2lkdGhcclxuICAvL0lmIHVzaW5nIGEgc3ByaXRlIHNoZWV0LCB0aGVzZSBiZSBvbmUgc3ByaXRlJ3MgaGVpZ2h0IGFuZCB3aWR0aC5cclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIFxyXG4gIGNvbGxpc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGhpdGJveDogaGl0Ym94XHJcbiAgaWQ6IHN0cmluZztcclxuICAvL0FycmF5IG9mIGJpbmQgaWRzXHJcbiAgLy9CaW5kcyBhcmUgaW5kZW50aWZpZWQgYnkgYSB1bmlxdWUgbnVtYmVyIHRoYXQgaXMgcmV0dXJuIHdoZW5cclxuICAvL1RoZSBiaW5kIGlzIGNyZWF0ZWQuIFdlIG11c3Qgc3RvcmUgdGhlc2UgaWRzIGluIG9yZGVyIHRvIFxyXG4gIC8vZGVsZXRlIHRoZSBiaW5kcyB3aGVuIHRoZXkgYXJlIG1hbnVhbGx5IHVuYm91bmQsIG9yIHRoZSBvYmplY3QgaXMgZGVsZXRlZC5cclxuICBiaW5kczogQXJyYXk8bnVtYmVyPjtcclxuICB0YWdzOnN0cmluZ1tdID0gW107XHJcbiAgLy90YWdzIGFyZSB1c2VkIHRvIGV4Y2x1ZGUgb3IgaW5jbHVkZSBvYmplY3RzIHdoZW4gY2hlY2tpbmcgZm9yIGNvbGxpc2lvbnMsXHJcbiAgLy9hbmQgZm9yIG9iamVjdCBpZGVudGlmaWNhdGlvbiAvIGNsYXNzaWZpY2F0aW9uIGluIHNjcmlwdHNcclxuICByb3RhdGlvbjogbnVtYmVyID0gMDtcclxuICByZW5kZXIgPSB0cnVlO1xyXG4gIGFuaW1hdGlvbnMgPSBuZXcgYW5pbWF0aW9ucygpO1xyXG4gIGF1ZGlvID0gbmV3IGF1ZGlvKCk7XHJcbiAgLy9MYXN0IHJlbmRlciB0aW1lLCB1c2VkIHRvIGNhbGN1bGF0ZSBkZWx0YV90aW1lXHJcbiAgbGFzdF9yZW5kZXI6bnVtYmVyID0gMDtcclxuICBnYW1lOmdhbWU8dW5rbm93bj47XHJcbiAgcGFyZW50OmNvbXBvc2l0ZV9vYmo7XHJcbiAgLy9TY2FsZXMgdGhlIG9iamVjdCB2ZXJ0aWNhbGx5IGFuZCBob3Jpem9udGFsbHlcclxuICAvL1VwZGF0ZXMgdGhlIHNwcml0ZSBvZiB0aGUgb2JqZWN0LCBhbmQgaXRzIGhpdGJveFxyXG4gIHNjYWxpbmc6ZGltZW5zaW9ucyA9IHtcclxuICAgIGhlaWdodDoxLFxyXG4gICAgd2lkdGg6MVxyXG4gIH07XHJcbiAgLy9QYXJhbXMgYXJlIG9wdGlvbnMgZm9yIHRoZSBvYmplY3QsIHRoYXQgZG8gbm90IHJlbHkgb24gc3RhdGVcclxuICAvLyBGb3IgZXhhbXBsZSwgdGhlIHNpZGUgb2YgYSBwaWVjZSBpbiBjaGVzcy5cclxuICBwYXJhbXM6dW5rbm93biA9IHt9O1xyXG4gIGxheWVyOm51bWJlciA9IDE7XHJcbiAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOnVua25vd24gPSB7fTtcclxuICBnZXRTdGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlO1xyXG4gIH1cclxuICAvL0FuaW1hdGlvbnMgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgdXNpbmcgdGhpcy5hbmltYXRpb25zLmFkZCBpbiB0aGlzIG1ldGhvZFxyXG4gIHJlZ2lzdGVyQW5pbWF0aW9ucygpIHtcclxuXHJcbiAgfVxyXG4gIC8vU291bmRzIHNob3VsZCBiZSByZWdpc3RlcmVkIHVzaW5nIHRoaXMuYXVkaW8uYWRkIGluIHRoaXMgbWV0aG9kLlxyXG4gIHJlZ2lzdGVyQXVkaW8oKSB7XHJcblxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zID0gb2JqLmRlZmF1bHRfcGFyYW1zKSB7XHJcbiAgICBcclxuICAgIHRoaXMuaWQgPSBcIlwiICsgY291bnRlcjtcclxuICAgIHRoaXMuYmluZHMgPSBbXTtcclxuICAgIGNvdW50ZXIrKztcclxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xyXG4gICAgdGhpcy5yZWdpc3RlckNvbnRyb2xzKCk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyQXVkaW8oKTtcclxuICAgIC8vQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHBhc3NlZCBpbiBpbml0aWFsIHN0YXRlIHRvIGF2b2lkIFxyXG4gICAgLy9VcGRhdGluZyB0aGUgc2F2ZWQgc3RhdGUgb2YgdGhlIHJvb21cclxuICAgIHRoaXMuc3RhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XHJcbiAgICBcclxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xyXG4gIH1cclxuICBsb2FkKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGxldCBhID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGEuc3JjID0gdGhpcy5zcHJpdGVfdXJsO1xyXG4gICAgICBhLm9ubG9hZCA9IChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgX3RoaXMuc3ByaXRlX3NoZWV0ID0gYTtcclxuICAgICAgICBfdGhpcy5yZWdpc3RlckFuaW1hdGlvbnMoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmF1ZGlvLmxvYWQoKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICB9XHJcbiAgLy9XaXRoaW4gbm9ybWFsIG9iamVjdHMsIHRoaXMganVzdCByZXR1cm5zIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIG9iamVjdC5cclxuICAvL1RoaXMgbWV0aG9kIGlzIG92ZXJ3cml0dGVuIGJ5IGNvbXBvc2l0ZSBvYmplY3RzLCB3aGljaCByZXR1cm5zIGV2ZXJ5IG9iamVjdFxyXG4gIC8vdGhhdCB0aGUgY29tcG9zaXRlIG9iamVjdCBjb250YWlucy4gVGhpcyBzaW1wbGlmaWVzIHRoZSBiYWNrZW5kIHdvcmssIGFzIGVhY2hcclxuICAvL29iamVjdCByZXR1cm5zIGFuIGFycmF5IG9mIGF0bGVhc3Qgb25lIG9iamVjdC5cclxuICBjb21iaW5lZE9iamVjdHMoKTpvYmpbXXtcclxuICAgIHJldHVybiBbdGhpc107XHJcbiAgfVxyXG4gIC8vRGlzdGFuY2UgZnJvbSBvbmUgb2JqZWN0IHRvIGFub3RoZXIuXHJcbiAgZGlzdGFuY2UoYTpvYmopOm51bWJlcntcclxuICAgIGxldCBvX3N0ID0gYS5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGxldCBzdCA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICByZXR1cm4gRGlzdGFuY2Uoc3QucG9zaXRpb24sb19zdC5wb3NpdGlvbik7XHJcbiAgfVxyXG4gIGFuZ2xlVG93YXJkcyhhOiBvYmopOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5nbGVUb3dhcmRzUG9pbnQoYS5zdGF0ZS5wb3NpdGlvbik7XHJcbiAgfVxyXG4gIGFuZ2xlVG93YXJkc1BvaW50KHBvc2l0aW9uOnBvc2l0aW9uKTpudW1iZXJ7XHJcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgaWYgKHN0YXRlLnBvc2l0aW9uLnggPCBwb3NpdGlvbi54ICYmIHN0YXRlLnBvc2l0aW9uLnkgPiBwb3NpdGlvbi55XHJcbiAgICAgIHx8IChzdGF0ZS5wb3NpdGlvbi54IDwgcG9zaXRpb24ueCAmJiBzdGF0ZS5wb3NpdGlvbi55IDwgcG9zaXRpb24ueSkpIHtcclxuICAgICAgcmV0dXJuIDkwIC0gTWF0aC5hdGFuKChwb3NpdGlvbi55IC0gc3RhdGUucG9zaXRpb24ueSkgLyAocG9zaXRpb24ueCAtIHN0YXRlLnBvc2l0aW9uLngpKSAqIDE4MCAvIE1hdGguUElcclxuICAgIH1cclxuICAgIGlmIChzdGF0ZS5wb3NpdGlvbi54ID4gcG9zaXRpb24ueCAmJiBzdGF0ZS5wb3NpdGlvbi55IDwgcG9zaXRpb24ueVxyXG4gICAgICB8fCBzdGF0ZS5wb3NpdGlvbi54ID4gcG9zaXRpb24ueCAmJiBzdGF0ZS5wb3NpdGlvbi55ID4gcG9zaXRpb24ueSkge1xyXG4gICAgICByZXR1cm4gMjcwIC0gTWF0aC5hdGFuKChwb3NpdGlvbi55IC0gc3RhdGUucG9zaXRpb24ueSkgLyAocG9zaXRpb24ueCAtIHN0YXRlLnBvc2l0aW9uLngpKSAqIDE4MCAvIE1hdGguUElcclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICBiaW5kQ29udHJvbChrZXk6IHN0cmluZywgeDogZXhlY190eXBlLCBmdW5jOiBjb250cm9sX2Z1bmMsIGludGVydmFsID0gMSkge1xyXG4gICAgdGhpcy5iaW5kcy5wdXNoKEJpbmQoa2V5LCBmdW5jLCB4LCBpbnRlcnZhbCwgdGhpcykpO1xyXG4gIH1cclxuICAvL1RoaXMgbWV0aG9kIGlzIHdoZXJlIGNvbnRyb2xzIGFuZCBrZXliaW5kcyBzaG91bGRcclxuICAvL2JlIGRlZmluZWQgdXNpbmcgYmluZENvbnRyb2xcclxuICByZWdpc3RlckNvbnRyb2xzKCl7XHJcblxyXG4gIH1cclxuICBzdGF0ZWYodGltZTpudW1iZXIpe1xyXG5cclxuICB9XHJcbiAgZGVsZXRlKCkge1xyXG4gICAgZm9yIChsZXQgYSBvZiB0aGlzLmJpbmRzKSB7XHJcbiAgICAgIFVuYmluZChhKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ2FtZS5nZXRSb29tKCkuZGVsZXRlSXRlbSh0aGlzLmlkKTtcclxuICB9XHJcbiAgVW5iaW5kQWxsKCl7XHJcbiAgICBmb3IgKGxldCBhIG9mIHRoaXMuYmluZHMpIHtcclxuICAgICAgVW5iaW5kKGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvL1JldHVybnMgdGhlIGNvbGxpc2lvbiBib3ggb2YgdGhlIG9iamVjdFxyXG4gIC8vRG9lcyBub3QgaGF2ZSB0byBjb3JyZXNwb25kIHRvIHRoZSBvYmplY3QncyBzcHJpdGUncyBzaXplIFxyXG4gIC8vQSBjb21wb3NpdGUgb2JqZWN0IGluc3RlYWQgcmV0dXJucyB0aGUgYm91bmRpbmcgYm94IHRoYXQgXHJcbiAgLy9jb250YWlucyBldmVyeSBvbmUgb2YgaXRzIGNvbnRhaW5lZCBvYmplY3RzXHJcbiAgZ2V0RnVsbENvbGxpc2lvbkJveCgpOmNvbGxpc2lvbl9ib3h7XHJcbiAgICAvL0lmIGEgZGV2ZWxvcGVyIGRlZmluZWQgaGl0Ym94IGV4aXN0cywgdXNlIHRoYXQsIG90aGVyd2lzZVxyXG4gICAgLy9nZW5lcmF0ZSBpdCB1c2luZyB0aGUgc3ByaXRlIHdpZHRoIC8gaGVpZ2h0XHJcbiAgICBpZih0aGlzLmhpdGJveCl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgd2lkdGg6dGhpcy5oaXRib3gud2lkdGggKiB0aGlzLnN0YXRlLnNjYWxpbmcud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGl0Ym94LmhlaWdodCAqIHRoaXMuc3RhdGUuc2NhbGluZy5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB4OnRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OnRoaXMuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDp0aGlzLndpZHRoICogdGhpcy5zdGF0ZS5zY2FsaW5nLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDp0aGlzLmhlaWdodCAqIHRoaXMuc3RhdGUuc2NhbGluZy5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvL1RoaXMgaXMgYW5vdGhlciBtZXRob2RzLCBzaW1pbGFyIHRvIGdldENvbWJpbmVkXHJcbiAgLy9KdXN0IHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgb2JqZWN0J3MgY29sbGlzaW9uIGJveFxyXG4gIC8vT3ZlcndyaXR0ZW4gaW4gY29tcG9zaXRlIG9iamVjdHMgdG8gcmV0dXJuIGV2ZXJ5IG9iamVjdCdzIGNvbGxpc2lvbiBib3hcclxuICAvL3dpdGhpbiB0aGUgY29tcG9zaXRlIG9iZWN0LlxyXG4gIGdldEFsbENvbGxpc2lvbkJveGVzKCk6Y29sbGlzaW9uX2JveFtde1xyXG4gICAgbGV0IHN0ID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIHJldHVybiBbdGhpcy5nZXRGdWxsQ29sbGlzaW9uQm94KCldXHJcbiAgfVxyXG4gIC8vQ2hlY2tzIHRvIHNlZSBpZiBhbiBvYmplY3QgYWN0dWFsbHkgY29sbGlkZXMgd2l0aCB0aGUgcHJvdmlkZWQgYm94LlxyXG4gIC8vQSBib3ggcmVwcmVzZW50cyBhbiBhcmVhIHdpdGhpbiB0aGUgZ2FtZSBzcGFjZVxyXG4gIC8vQ2hlY2tpbmcgZm9yIGNvbGxpc2lvbnMgaXMgdHJpdmlhbCBjdXJyZW50bHksIGFzIGFsbCBoaXRib3hlcyBhcmUgYXhpcyBhbGlnbmVkXHJcbiAgLy9CdXQgaW1wbGVtZW50aW5nIGEgbW9yZSBjb21wbGljYXRlZCBwaHlzaWNzIGVuZ2luZSB3b3VsZCBtYWtlIHRoaXMgbWV0aG9kJ3MgaW1wbC5cclxuICAvL3NpZ25pZmljYXRseSBtb3JlIGNvbXBsZXguXHJcbiAgY29sbGlkZXNXaXRoQm94KG90aGVyX29iamVjdDogY29sbGlzaW9uX2JveCk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGNvbGxpZGVzX2hvcnJpem9udGFsbHkgPSBmYWxzZSwgY29sbGlkZXNfdmVydGljYWxseSA9IGZhbHNlO1xyXG4gICAgbGV0IGhib3ggPSB0aGlzLmhpdGJveDtcclxuICAgIGlmKCF0aGlzLmhpdGJveCl7XHJcbiAgICAgIGhib3ggPSB7XHJcbiAgICAgICAgeF9vZmZzZXQ6MCxcclxuICAgICAgICB5X29mZnNldDowLFxyXG4gICAgICAgIHdpZHRoOnRoaXMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBvYmplY3RfYm91bmRzID0ge1xyXG4gICAgICBsZWZ0OiAodGhpcy5zdGF0ZS5wb3NpdGlvbi54ICsgaGJveC54X29mZnNldCAtIGhib3gud2lkdGggKiB0aGlzLnN0YXRlLnNjYWxpbmcud2lkdGggLyAyKSxcclxuICAgICAgcmlnaHQ6ICh0aGlzLnN0YXRlLnBvc2l0aW9uLnggKyBoYm94Lnhfb2Zmc2V0ICsgaGJveC53aWR0aCAqIHRoaXMuc3RhdGUuc2NhbGluZy53aWR0aCAvIDIpLFxyXG4gICAgICB0b3A6ICh0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKyBoYm94Lnlfb2Zmc2V0ICsgaGJveC5oZWlnaHQgKiB0aGlzLnN0YXRlLnNjYWxpbmcuaGVpZ2h0IC8gMiksXHJcbiAgICAgIGJvdHRvbTogKHRoaXMuc3RhdGUucG9zaXRpb24ueSArIGhib3gueV9vZmZzZXQgLSBoYm94LmhlaWdodCAqIHRoaXMuc3RhdGUuc2NhbGluZy5oZWlnaHQgLyAyKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBvdGhlcl9vYmplY3RfYm91bmRzID0ge1xyXG4gICAgICBsZWZ0OiAob3RoZXJfb2JqZWN0LnggLSBvdGhlcl9vYmplY3Qud2lkdGggLyAyKSxcclxuICAgICAgcmlnaHQ6IChvdGhlcl9vYmplY3QueCArIG90aGVyX29iamVjdC53aWR0aCAvIDIpLFxyXG4gICAgICB0b3A6IChvdGhlcl9vYmplY3QueSArIG90aGVyX29iamVjdC5oZWlnaHQgLyAyKSxcclxuICAgICAgYm90dG9tOiAob3RoZXJfb2JqZWN0LnkgLSBvdGhlcl9vYmplY3QuaGVpZ2h0IC8gMilcclxuICAgIH1cclxuXHJcbiAgICAvL1dlIGNhbiBjb21wYXJlIHRoZSBzaWRlcyBvZiB0aGUgYm94ZXMgdG8gc2VlIGlmIHRoZXkgb3ZlcmxhcFxyXG4gICAgLy9XZSBjaGVjayBvbmNlIGZvciBob2l6b250YWwgb3ZlcmxhcCwgdGhlbiB2ZXJ0aWNhbC5cclxuICAgIGlmICgob2JqZWN0X2JvdW5kcy5sZWZ0ID49IG90aGVyX29iamVjdF9ib3VuZHMubGVmdCAmJiBvYmplY3RfYm91bmRzLmxlZnQgPCBvdGhlcl9vYmplY3RfYm91bmRzLnJpZ2h0KSB8fCAob3RoZXJfb2JqZWN0X2JvdW5kcy5sZWZ0ID4gb2JqZWN0X2JvdW5kcy5sZWZ0ICYmIG90aGVyX29iamVjdF9ib3VuZHMubGVmdCA8IG9iamVjdF9ib3VuZHMucmlnaHQpKSB7XHJcbiAgICAgIGNvbGxpZGVzX2hvcnJpem9udGFsbHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKChvYmplY3RfYm91bmRzLmJvdHRvbSA+PSBvdGhlcl9vYmplY3RfYm91bmRzLmJvdHRvbSAmJiBvYmplY3RfYm91bmRzLmJvdHRvbSA8IG90aGVyX29iamVjdF9ib3VuZHMudG9wKSB8fCAob3RoZXJfb2JqZWN0X2JvdW5kcy5ib3R0b20gPiBvYmplY3RfYm91bmRzLmJvdHRvbSAmJiBvdGhlcl9vYmplY3RfYm91bmRzLmJvdHRvbSA8IG9iamVjdF9ib3VuZHMudG9wKSl7XHJcbiAgICAgIGNvbGxpZGVzX3ZlcnRpY2FsbHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbGxpZGVzX2hvcnJpem9udGFsbHkgJiYgY29sbGlkZXNfdmVydGljYWxseTtcclxuICB9XHJcbiAgLy9UaGUgcGFydGljbGUgbXVzdCBiZSByZWdpc3RlcmVkIGluIHRoZSByb29tJ3MgcmVnaXN0ZXJQYXJ0aWNsZXMgbWV0aG9kIFxyXG4gIC8vVGhlIG5hbWUgcGFyYW1ldGVyIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBrZXkgb2YgYSBwYXJ0aWNsZVxyXG4gIGVtaXRQYXJ0aWNsZShuYW1lOnN0cmluZyxvZmZzZXQ6cG9zaXRpb24sbGlmZXRpbWU6bnVtYmVyLHJhbmdlOm51bWJlcil7XHJcbiAgICBsZXQgcm9vbSA9IHRoaXMuZ2FtZS5nZXRSb29tKCk7XHJcbiAgICBsZXQgc3QgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgbGV0IGZpbmFsX3Bvc2l0aW9uOnBvc2l0aW9uID0ge1xyXG4gICAgICB4OnN0LnBvc2l0aW9uLnggKyBvZmZzZXQueCxcclxuICAgICAgeTpzdC5wb3NpdGlvbi55ICsgb2Zmc2V0LnlcclxuICAgIH1cclxuICAgIHJvb20uZW1pdFBhcnRpY2xlKG5hbWUsZmluYWxfcG9zaXRpb24sbGlmZXRpbWUscmFuZ2UpXHJcbiAgfVxyXG4gIC8vSW50ZXJuYWwgbWV0aG9kIHRoYXQga2VlcHMgdHJhY2sgb2YgXHJcbiAgcmVuZGVyVHJhY2sodGltZTpudW1iZXIpOiBwb3NpdGlvbmVkX3Nwcml0ZVtdIHtcclxuICAgIGxldCByZW5kZXJlZCA9IHRoaXMucmVuZGVyZih0aW1lIC0gdGhpcy5sYXN0X3JlbmRlcik7XHJcbiAgICBsZXQgZmluYWw6cG9zaXRpb25lZF9zcHJpdGVbXTtcclxuICAgIHRoaXMubGFzdF9yZW5kZXIgPSB0aW1lO1xyXG4gICAgaWYoQXJyYXkuaXNBcnJheShyZW5kZXJlZCkpXHJcbiAgICAgIGZpbmFsID0gcmVuZGVyZWRcclxuICAgIGVsc2V7XHJcbiAgICAgIGZpbmFsID0gW3JlbmRlcmVkXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpbmFsO1xyXG4gIH1cclxuICByZW5kZXJmKHRpbWU6IG51bWJlcik6IHBvc2l0aW9uZWRfc3ByaXRlW10gfCBwb3NpdGlvbmVkX3Nwcml0ZXtcclxuICAgIGxldCBzdCA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5hbmltYXRpb25zLmFuaW1hdGlvbnMpLmxlbmd0aCA9PSAwIHx8ICF0aGlzLmFuaW1hdGlvbnMuY3VycmVudCkge1xyXG4gICAgICBpZighdGhpcy5zcHJpdGVfc2hlZXQgfHwgIXRoaXMuaGVpZ2h0IHx8ICF0aGlzLndpZHRoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgc3ByaXRlOnVuZGVmaW5lZCxcclxuICAgICAgICAgIHg6c3QucG9zaXRpb24ueCxcclxuICAgICAgICAgIHk6c3QucG9zaXRpb24ueVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgc3ByaXRlX2hlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICBsZXQgc3ByaXRlX3dpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgaWYgKHRoaXMuaGVpZ2h0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHNwcml0ZV9oZWlnaHQgPSB0aGlzLnNwcml0ZV9zaGVldC5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMud2lkdGggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3ByaXRlX3dpZHRoID0gdGhpcy5zcHJpdGVfc2hlZXQud2lkdGg7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcHJpdGU6IHtcclxuICAgICAgICAgIHNwcml0ZV9zaGVldDogdGhpcy5zcHJpdGVfc2hlZXQsXHJcbiAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgc3ByaXRlX3dpZHRoOiBzcHJpdGVfd2lkdGgsXHJcbiAgICAgICAgICBzcHJpdGVfaGVpZ2h0OiBzcHJpdGVfaGVpZ2h0LFxyXG4gICAgICAgICAgb3BhY2l0eToxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB4OiBzdC5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHN0LnBvc2l0aW9uLnlcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNwcml0ZTp0aGlzLmFuaW1hdGlvbnMucmVuZGVyZih0aW1lKSxcclxuICAgICAgeDogc3QucG9zaXRpb24ueCxcclxuICAgICAgeTogc3QucG9zaXRpb24ueVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBjb21wb3NpdGVfc3RhdGlje1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyLFxyXG4gIG9iajpvYmpcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIGNvbXBvc2l0ZV9vYmogZXh0ZW5kcyBvYmp7XHJcbiAgb2JqZWN0czpvYmpbXSA9IFtdO1xyXG4gIHJlbmRlciA9IGZhbHNlO1xyXG4gIHJlZ2lzdGVyZWQgPSBmYWxzZTtcclxuICBjb2xsaXNpb24gPSBmYWxzZTtcclxuICBzdGF0aWNzOmNvbXBvc2l0ZV9zdGF0aWNbXSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKHBvczpvYmpfc3RhdGUpe1xyXG4gICAgc3VwZXIocG9zKTtcclxuICB9XHJcbiAgbG9hZCgpe1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFsuLi50aGlzLm9iamVjdHMubWFwKChhKT0+YS5sb2FkKCkpLC4uLnRoaXMuc3RhdGljcy5tYXAoYT0+YS5vYmoubG9hZCgpKV0pO1xyXG4gIH1cclxuICBjb21iaW5lZE9iamVjdHMoKTpvYmpbXXtcclxuICAgIGxldCBjb21iaW5lZCA9IFsuLi50aGlzLm9iamVjdHMsLi4udGhpcy5zdGF0aWNzLm1hcChhPT5hLm9iaildO1xyXG4gICAgY29tYmluZWQuZm9yRWFjaChhPT5hLnBhcmVudCA9IHRoaXMpO1xyXG4gICAgcmV0dXJuIFsuLi5jb21iaW5lZCx0aGlzXTtcclxuICB9XHJcbiAgZ2V0SXRlbXNCeVRhZyh0YWc6c3RyaW5nKXtcclxuICAgIHJldHVybiB0aGlzLmNvbWJpbmVkT2JqZWN0cygpLmZpbHRlcigoYSk9PmEudGFncy5pbmRleE9mKHRhZykgPiAtMSk7XHJcbiAgfVxyXG4gIGFkZEl0ZW0oYTpvYmosbGlzdD10aGlzLm9iamVjdHMpe1xyXG4gICAgbGlzdC5wdXNoKGEpO1xyXG4gICAgYS5wYXJlbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5nYW1lLmdldFJvb20oKS5hZGRJdGVtKGEpO1xyXG4gIH1cclxuICBnZXRBbGxDb2xsaXNpb25Cb3hlcygpOmNvbGxpc2lvbl9ib3hbXXtcclxuICAgIGxldCBhcnI6Y29sbGlzaW9uX2JveFtdID0gW107XHJcbiAgICBmb3IobGV0IG9iaiBvZiBbLi4udGhpcy5zdGF0aWNzLm1hcChhPT5hLm9iaiksLi4udGhpcy5vYmplY3RzXSl7XHJcbiAgICAgIGxldCBjcmVhdGVkX2JveCA9IG9iai5nZXRBbGxDb2xsaXNpb25Cb3hlcygpO1xyXG4gICAgICBpZihBcnJheS5pc0FycmF5KGNyZWF0ZWRfYm94KSl7XHJcbiAgICAgICAgYXJyLnB1c2goLi4uY3JlYXRlZF9ib3gpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgYXJyLnB1c2goY3JlYXRlZF9ib3gpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH1cclxuICBkZWxldGUoKXtcclxuICAgIGZvcihsZXQgYSBvZiB0aGlzLm9iamVjdHMpe1xyXG4gICAgICBhLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhIG9mIHRoaXMuc3RhdGljcyl7XHJcbiAgICAgIGEub2JqLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gICAgc3VwZXIuZGVsZXRlKCk7XHJcbiAgfVxyXG4gIGNvbGxpZGVzV2l0aEJveChhOiBjb2xsaXNpb25fYm94KTpib29sZWFue1xyXG4gICAgZm9yKGxldCBvYmogb2YgdGhpcy5vYmplY3RzKXtcclxuICAgICAgaWYob2JqLmNvbGxpZGVzV2l0aEJveChhKSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgbyBvZiB0aGlzLnN0YXRpY3Mpe1xyXG4gICAgICBpZihvLm9iai5jb2xsaWRlc1dpdGhCb3goYSkpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3Mgc3RhdGljX29iaiB7XHJcbiAgc3ByaXRlX3VybCA9IFwiXCI7XHJcbiAgc3ByaXRlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgZ3Jhdml0eV9vYmogZXh0ZW5kcyBvYmp7XHJcbiAgZ3Jhdml0eSA9IHRydWVcclxufSIsImltcG9ydCB7IHNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBHZXRWaWV3cG9ydERpbWVuc2lvbnMgfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7IG9iaiB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBkaW1lbnNpb25zLCBvYmpfc3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBUZXh0X05vZGUsIFRleHRTZXR0aW5nLEhVRCxUZXh0IH0gZnJvbSBcIi4vaHVkXCI7XHJcbmltcG9ydCB7cG9zaXRpb25lZF9zcHJpdGV9IGZyb20gXCIuL3Nwcml0ZVwiXHJcblxyXG5pbnRlcmZhY2UgY2FtZXJhX3N0YXRlIHtcclxuICBzY2FsaW5nOiBudW1iZXIsXHJcbiAgcG9zaXRpb246IHtcclxuICAgIHg6IG51bWJlcixcclxuICAgIHk6IG51bWJlclxyXG4gIH1cclxuICBkaW1lbnNpb25zOiB7XHJcbiAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBudW1iZXJcclxuICB9LFxyXG4gIHZpZXdwb3J0OiB2aWV3cG9ydCxcclxuICBkZWJ1Zzpib29sZWFuLFxyXG4gIGh1ZDpIVUQgIFxyXG59XHJcblxyXG5pbnRlcmZhY2Ugdmlld3BvcnQge1xyXG4gIHg6IG51bWJlcixcclxuICB5OiBudW1iZXIsXHJcbiAgd2lkdGg6IG51bWJlcixcclxuICBoZWlnaHQ6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgY2FtZXJhX3Byb3BlcnRpZXMge1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyLFxyXG4gIGRpbWVuc2lvbnM6e1xyXG4gICAgaGVpZ2h0Om51bWJlcixcclxuICAgIHdpZHRoOm51bWJlclxyXG4gIH1cclxuICBzY2FsaW5nOm51bWJlcixcclxuICBkZWJ1Zzpib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmEge1xyXG4gIHN0YXRlOiBjYW1lcmFfc3RhdGU7XHJcbiAgaHVkOiBIVUQ7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6Y2FtZXJhX3Byb3BlcnRpZXMsIHY6IHZpZXdwb3J0KSB7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzY2FsaW5nOnByb3BzLnNjYWxpbmcsXHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogcHJvcHMueCAqIHByb3BzLnNjYWxpbmcsXHJcbiAgICAgICAgeTogcHJvcHMueSAqIHByb3BzLnNjYWxpbmdcclxuICAgICAgfSxcclxuICAgICAgZGltZW5zaW9uczogcHJvcHMuZGltZW5zaW9ucyxcclxuICAgICAgdmlld3BvcnQ6IHtcclxuICAgICAgICB4OnYueCxcclxuICAgICAgICB5OnYueSAsXHJcbiAgICAgICAgd2lkdGg6IHYud2lkdGggKiBwcm9wcy5kaW1lbnNpb25zLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogdi5oZWlnaHQgKiBwcm9wcy5kaW1lbnNpb25zLmhlaWdodFxyXG4gICAgICB9LFxyXG4gICAgICBkZWJ1Zzpwcm9wcy5kZWJ1ZyxcclxuICAgICAgaHVkOnVuZGVmaW5lZFxyXG4gICAgfVxyXG4gIH1cclxuICBzZXQgeCh4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueCA9IHg7XHJcbiAgfVxyXG4gIHNldCB5KHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi55ID0geVxyXG4gIH1cclxuICBnZXQgeCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLnBvc2l0aW9uLng7XHJcbiAgfVxyXG4gIGdldCB5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucG9zaXRpb24ueTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHJlbmRlcl9mdW5jIHtcclxuICAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxpbmc6IG51bWJlcik6IHZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIHJlY3RhbmdsZSB7XHJcbiAgd2lkdGg6IG51bWJlcixcclxuICBoZWlnaHQ6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2Ugc3ByaXRlX2FyZ3Mge1xyXG4gIHNwcml0ZTogc3ByaXRlLFxyXG4gIHg6IG51bWJlcixcclxuICB5OiBudW1iZXIsXHJcbiAgcm90YXRpb246IG51bWJlcixcclxuICBzY2FsZTpkaW1lbnNpb25zXHJcbn1cclxuXHJcbmludGVyZmFjZSByZW5kZXJlcl9hcmdzIHtcclxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgY2FtZXJhOiBDYW1lcmFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gcmVuZGVyX3R5cGUge1xyXG4gIHRleHQsXHJcbiAgc3ByaXRlLFxyXG4gIHJlY3QsXHJcbiAgc3Ryb2tlX3JlY3RcclxufVxyXG4vKlxyXG5leHBvcnQgY29uc3QgZWxlbWVudF9yZW5kZXIgPSAocjpyZW5kZXJlcl9hcmdzLG86b2JqPHVua25vd24+LHRpbWU6bnVtYmVyKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKChzLnggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoIC8gMiAtIHMuc3ByaXRlLnNwcml0ZV93aWR0aCAvIDIpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSBzLnkgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyAyIC0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IHdpZHRoID0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnRleHQpe1xyXG5cclxuICB9XHJcbiAgZWxzZSBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnNwcml0ZSl7XHJcblxyXG4gIH1cclxuICBlbHNlIGlmKG8ucmVuZGVyX3R5cGUgPT0gcmVuZGVyX3R5cGUuc3Ryb2tlX3JlY3Qpe1xyXG5cclxuICB9XHJcbn1cclxuKi9cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaHVkX3RleHRfcmVuZGVyZXIgPSAocjogcmVuZGVyZXJfYXJncywgczogVGV4dFNldHRpbmcpID0+IHtcclxuICBsZXQgdmhlaWdodCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodDtcclxuICByLmNvbnRleHQuZm9udCA9IGAke3MuZm9udC5zaXplfXB4ICR7cy5mb250LmZvbnR9YDtcclxuICByLmNvbnRleHQuZmlsbFN0eWxlID0gcy5mb250LmNvbG9yO1xyXG4gIHIuY29udGV4dC50ZXh0QWxpZ24gPSBzLmZvbnQuYWxpZ247XHJcbiAgaWYgKHMuZm9udC5tYXhfd2lkdGgpIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgcy54LCB2aGVpZ2h0IC0gcy55LCBzLmZvbnQubWF4X3dpZHRoKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByLmNvbnRleHQuZmlsbFRleHQocy5mb250LnRleHQsIHMueCwgdmhlaWdodCAtIHMueSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGV4dF9yZW5kZXJlciA9IChyOnJlbmRlcmVyX2FyZ3MsczpUZXh0U2V0dGluZykgPT4ge1xyXG4gIGxldCBjYW1lcmEgPSByLmNhbWVyYTtcclxuICBsZXQgdmhlaWdodCA9IHIuY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0O1xyXG4gIGxldCB3aWR0aCA9IHIuY29udGV4dC5tZWFzdXJlVGV4dChzLmZvbnQudGV4dCkud2lkdGggKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBoZWlnaHQgPSBzLmZvbnQuc2l6ZSAqIDEuMiAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGZpbmFsX3ggPSAoKHMueCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9yLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSBzLnkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodC8yICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIHIuY29udGV4dC5mb250ID0gYCR7cy5mb250LnNpemUgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nfXB4ICR7cy5mb250LmZvbnR9YDtcclxuICByLmNvbnRleHQuZmlsbFN0eWxlID0gcy5mb250LmNvbG9yO1xyXG4gIHIuY29udGV4dC50ZXh0QWxpZ24gPSBzLmZvbnQuYWxpZ25cclxuICByLmNvbnRleHQuc2F2ZSgpO1xyXG4gIHIuY29udGV4dC50cmFuc2xhdGUoZmluYWxfeCwgZmluYWxfeSk7XHJcbiAgaWYgKHMuZm9udC5tYXhfd2lkdGgpIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgMCwgMCwgcy5mb250Lm1heF93aWR0aCk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCAwLCAwKTtcclxuICB9XHJcbiAgci5jb250ZXh0LnJlc3RvcmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNwcml0ZV9yZW5kZXJlciA9IChyOiByZW5kZXJlcl9hcmdzLCBzOiBzcHJpdGVfYXJncykgPT4ge1xyXG4gIGxldCBjYW1lcmEgPSByLmNhbWVyYTtcclxuICBsZXQgdmhlaWdodCA9IHIuY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgocy54IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL3IuY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiAtIHMuc3ByaXRlLnNwcml0ZV93aWR0aCAqIHMuc2NhbGUud2lkdGggLyAyKSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0gcy55IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEvci5jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHMuc2NhbGUuaGVpZ2h0IC8gMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55KSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBoZWlnaHQgPSBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0ICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyAqIHMuc2NhbGUuaGVpZ2h0O1xyXG4gIGxldCB3aWR0aCA9IHMuc3ByaXRlLnNwcml0ZV93aWR0aCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcgKiBzLnNjYWxlLndpZHRoO1xyXG4gIHIuY29udGV4dC5zYXZlKCk7XHJcbiAgci5jb250ZXh0Lmdsb2JhbEFscGhhID0gcy5zcHJpdGUub3BhY2l0eTtcclxuICByLmNvbnRleHQudHJhbnNsYXRlKGZpbmFsX3ggICsgKHdpZHRoKSAvIDIsIGZpbmFsX3kgKyBoZWlnaHQgLyAyKVxyXG4gIGxldCByYWRpYW5zID0gcy5yb3RhdGlvbiAqIChNYXRoLlBJIC8gMTgwKTtcclxuICByLmNvbnRleHQucm90YXRlKHJhZGlhbnMpO1xyXG4gIHIuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICBzLnNwcml0ZS5zcHJpdGVfc2hlZXQsXHJcbiAgICBzLnNwcml0ZS5sZWZ0LFxyXG4gICAgcy5zcHJpdGUudG9wLFxyXG4gICAgcy5zcHJpdGUuc3ByaXRlX3dpZHRoLFxyXG4gICAgcy5zcHJpdGUuc3ByaXRlX2hlaWdodCxcclxuICAgIC0od2lkdGggKSAvIDIsXHJcbiAgICAtaGVpZ2h0IC8gMixcclxuICAgIHdpZHRoLFxyXG4gICAgaGVpZ2h0XHJcbiAgKVxyXG4gIHIuY29udGV4dC5yZXN0b3JlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHJva2VkX3JlY3RfcmVuZGVyZXIgPSAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByZWN0OiByZWN0YW5nbGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6bnVtYmVyLCBjYW1lcmE6IENhbWVyYSkgPT4ge1xyXG4gIGxldCB2aGVpZ2h0ID0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGZpbmFsX3ggPSAoKHggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiAtIHJlY3Qud2lkdGggLyAyKSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHkgLSByZWN0LmhlaWdodCAvIDIgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBoZWlnaHQgPSByZWN0LmhlaWdodCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCB3aWR0aCA9IHJlY3Qud2lkdGggKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGggKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBjb250ZXh0LnN0cm9rZVJlY3QoZmluYWxfeCwgZmluYWxfeSwgd2lkdGgsIGhlaWdodCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWN0X3JlbmRlcmVyID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcmVjdDogcmVjdGFuZ2xlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOm51bWJlciwgY2FtZXJhOiBDYW1lcmEpID0+IHtcclxuICBsZXQgdmhlaWdodCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAvIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKCh4IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSByZWN0LndpZHRoIC8gMikgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSB5IC0gcmVjdC5oZWlnaHQgLyAyIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55KSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgd2lkdGggPSByZWN0LndpZHRoICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGNvbnRleHQuZmlsbFJlY3QoZmluYWxfeCwgZmluYWxfeSwgd2lkdGgsIGhlaWdodCk7XHJcbn0iLCJpbXBvcnQgeyBncmF2aXR5X29iaixvYmogfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgUGFydGljbGUsIHNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBkaW1lbnNpb25zLCBvYmpfc3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyB2ZWxvY2l0eUNvbGxpc2lvbkNoZWNrLGNoZWNrX2NvbGxpc2lvbnMsY29sbGlzaW9uX2JveCxjaGVja19hbGxfY29sbGlzaW9ucyxjaGVja19hbGxfb2JqZWN0c30gZnJvbSBcIi4vY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7cmVuZGVyX2NvbGxpc2lvbl9ib3gsREVCVUd9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHtCaW5kLGNvbnRyb2xfZnVuYywgZXhlY190eXBlfSBmcm9tIFwiLi9jb250cm9sc1wiO1xyXG5pbXBvcnQge0hVRCxUZXh0LCBUZXh0X05vZGV9IGZyb20gXCIuL2h1ZFwiO1xyXG5pbXBvcnQge2F1ZGlvfSBmcm9tIFwiLi9hdWRpb1wiXHJcbmltcG9ydCB7Z2FtZX0gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQge2RlYnVnX3VwZGF0ZV9vYmpfbGlzdH0gZnJvbSBcIi4uL2xpYi9kZWJ1Z1wiO1xyXG5pbXBvcnQge3ByZWZhYnN9IGZyb20gXCIuLi9nYW1lL29iamVjdHMvcHJlZmFic1wiO1xyXG5cclxuaW50ZXJmYWNlIHBvc2l0aW9ue1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUdyYXZpdHkob2I6Z3Jhdml0eV9vYmosZ3Jhdl9jb25zdDpudW1iZXIsIGdyYXZfbWF4Om51bWJlcil7XHJcbiAgbGV0IHN0ID0gb2Iuc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gIGlmKG9iLmdyYXZpdHkgJiYgc3QudmVsb2NpdHkueSA+IGdyYXZfbWF4KXtcclxuICAgIHN0LnZlbG9jaXR5LnkgKz0gZ3Jhdl9jb25zdDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGFydGljbGVfZW50cnl7XHJcbiAgc3ByaXRlOnN0cmluZyxcclxuICBoZWlnaHQ6bnVtYmVyLFxyXG4gIHdpZHRoOm51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgcGFydGljbGVze1xyXG4gIFtpbmRleDpzdHJpbmddOnBhcnRpY2xlX2VudHJ5XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugcm9vbV9pPFQ+e1xyXG4gIGJhY2tncm91bmRfdXJsOnN0cmluZyxcclxuICBvYmplY3RzOm9ialtdXHJcbiAgc3RhdGU6VFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG9iamVjdF9zdGF0ZV9jb25maWcge1xyXG4gIHR5cGU6c3RyaW5nLFxyXG4gIHN0YXRlOm9ial9zdGF0ZSxcclxuICBwYXJhbWV0ZXJzPzogdW5rbm93blxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHN0YXRlX2NvbmZpZ3tcclxuICBvYmplY3RzOm9iamVjdF9zdGF0ZV9jb25maWdbXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3Mgcm9vbTxUPntcclxuICBiYWNrZ3JvdW5kX3VybDogc3RyaW5nO1xyXG4gIGJhY2tncm91bmQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgb2JqZWN0czogb2JqW10gPSBbXTtcclxuICBwYXJ0aWNsZXM6cGFydGljbGVzID0ge307XHJcbiAgcGFydGljbGVzX2Fycjogb2JqW10gPSBbXTtcclxuICBzdGF0ZTogVDtcclxuICBiaW5kczpudW1iZXJbXSA9IFtdO1xyXG4gIGdhbWU6Z2FtZTx1bmtub3duPjtcclxuICBodWQ6SFVEO1xyXG4gIGF1ZGlvID0gbmV3IGF1ZGlvKCk7XHJcbiAgdGV4dF9ub2RlczpUZXh0W10gPSBbXTtcclxuICBjb25zdHJ1Y3RvcihnYW1lOmdhbWU8dW5rbm93bj4sY29uZmlnOnN0YXRlX2NvbmZpZyl7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgZm9yKGxldCBjIG9mIGNvbmZpZy5vYmplY3RzKXtcclxuICAgICAgdGhpcy5hZGRJdGVtU3RhdGVDb25maWcoYylcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0U3RhdGVDb25maWcoKXtcclxuICAgIGxldCBjb25maWc6c3RhdGVfY29uZmlnID0ge29iamVjdHM6W119O1xyXG4gICAgZm9yKGxldCBvIG9mIHRoaXMub2JqZWN0cyl7XHJcbiAgICAgICAgaWYoIW8ucGFyZW50KXtcclxuICAgICAgICBjb25maWcub2JqZWN0cy5wdXNoKHtcclxuICAgICAgICAgIHR5cGU6by5jb25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICAgICAgc3RhdGU6by5zdGF0ZSxcclxuICAgICAgICAgIHBhcmFtZXRlcnM6by5wYXJhbXNcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuICBsb2FkKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGxldCBhID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGxldCB0b19hd2FpdCA9IHRoaXMub2JqZWN0cy5tYXAoKGEpID0+IGEubG9hZCgpKTtcclxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodG9fYXdhaXQpO1xyXG4gICAgICBhLnNyYyA9IHRoaXMuYmFja2dyb3VuZF91cmw7XHJcbiAgICAgIGEub25lcnJvciA9ICgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBsb2FkaW5nIHVybDpcIiArIHRoaXMuYmFja2dyb3VuZF91cmwpO1xyXG4gICAgICB9KVxyXG4gICAgICBhLm9ubG9hZCA9IChhc3luYygpID0+IHtcclxuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kID0gYTtcclxuICAgICAgICBhd2FpdCB0aGlzLmF1ZGlvLmxvYWQoKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICB9XHJcbiAgYXN5bmMgYWRkSXRlbVN0YXRlQ29uZmlnKGNvbmZpZzpvYmplY3Rfc3RhdGVfY29uZmlnKXtcclxuICAgIGlmKHByZWZhYnNbY29uZmlnLnR5cGVdKXtcclxuICAgICAgbGV0IG5ld19vYmogPSA8b2JqPihuZXcgcHJlZmFic1tjb25maWcudHlwZV0oT2JqZWN0LmFzc2lnbih7fSxjb25maWcuc3RhdGUpLGNvbmZpZy5wYXJhbWV0ZXJzKSk7XHJcbiAgICAgIHRoaXMuYWRkSXRlbXMobmV3X29iai5jb21iaW5lZE9iamVjdHMoKSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVOS05PV04gVFlQRSBBVFRFTVBURUQgVE8gTE9BRDogXCIgKyBjb25maWcudHlwZSlcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgYWRkSXRlbShvOm9iaiwgbGlzdCA9IHRoaXMub2JqZWN0cyl7XHJcbiAgICBhd2FpdCBvLmxvYWQoKTtcclxuICAgIG8uZ2FtZSA9IHRoaXMuZ2FtZTtcclxuICAgIGxpc3QucHVzaChvKTtcclxuICAgIGlmKERFQlVHICYmIGxpc3QgPT09IHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBhZGRJdGVtcyhvOm9ialtdLCBsaXN0ID0gdGhpcy5vYmplY3RzKXtcclxuICAgIGZvcihsZXQgb2Igb2Ygbyl7XHJcbiAgICAgIG9iLmdhbWUgPSB0aGlzLmdhbWU7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChvLm1hcCgoYSk9PmEubG9hZCgpKSk7XHJcbiAgICBsaXN0LnB1c2goLi4ubyk7XHJcbiAgICBpZihERUJVRyAmJiBsaXN0ID09PSB0aGlzLm9iamVjdHMpe1xyXG4gICAgICBkZWJ1Z191cGRhdGVfb2JqX2xpc3QoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZGVsZXRlSXRlbShpZDpzdHJpbmcsIGxpc3QgPSB0aGlzLm9iamVjdHMpe1xyXG4gICAgZm9yKGxldCBhID0gMDthIDwgbGlzdC5sZW5ndGg7YSsrKXtcclxuICAgICAgaWYobGlzdFthXS5pZCA9PT0gaWQpe1xyXG4gICAgICAgIGxpc3Quc3BsaWNlKGEsMSlcclxuICAgICAgICBhLS07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKERFQlVHICYmIGxpc3QgPT09IHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWdpc3RlclBhcnRpY2xlcygpe1xyXG5cclxuICB9XHJcbiAgYmluZENvbnRyb2woa2V5OnN0cmluZyx4OmV4ZWNfdHlwZSxmdW5jOmNvbnRyb2xfZnVuYyxpbnRlcnZhbDpudW1iZXIgPSAxKXtcclxuICAgIHRoaXMuYmluZHMucHVzaChCaW5kKGtleSxmdW5jLHgsaW50ZXJ2YWwpKTsgXHJcbiAgfVxyXG4gIGNoZWNrQ29sbGlzaW9ucyhib3g6Y29sbGlzaW9uX2JveCxleGVtcHQ/OnN0cmluZ1tdKTpvYmpbXXtcclxuICAgIGlmKERFQlVHKXtcclxuICAgICAgcmVuZGVyX2NvbGxpc2lvbl9ib3goYm94KTtcclxuICAgIH1cclxuICAgIHJldHVybiBjaGVja19hbGxfY29sbGlzaW9ucyhib3gsdGhpcy5vYmplY3RzLGV4ZW1wdCk7XHJcbiAgfVxyXG4gIGNoZWNrT2JqZWN0cyhib3g6Y29sbGlzaW9uX2JveCxleGVtcHQ/OnN0cmluZ1tdLGxpc3Q9dGhpcy5vYmplY3RzKXtcclxuICAgIGlmKERFQlVHKXtcclxuICAgICAgcmVuZGVyX2NvbGxpc2lvbl9ib3goYm94KTtcclxuICAgIH1cclxuICAgIHJldHVybiBjaGVja19hbGxfb2JqZWN0cyhib3gsbGlzdCxleGVtcHQpO1xyXG4gIH1cclxuICByZWdpc3RlckNvbnRyb2xzKCl7XHJcblxyXG4gIH1cclxuICBjbGVhbnVwKCl7XHJcblxyXG4gIH1cclxuICBzdGF0ZWYodGltZTogbnVtYmVyKSB7XHJcbiAgICBmb3IobGV0IHBhcnRpY2xlIG9mIHRoaXMucGFydGljbGVzX2Fycil7XHJcbiAgICAgIHBhcnRpY2xlLnN0YXRlZih0aW1lKTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgdGV4dF9ub2RlIG9mIHRoaXMudGV4dF9ub2Rlcyl7XHJcbiAgICAgIHRleHRfbm9kZS5zdGF0ZWYodGltZSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGErKykge1xyXG4gICAgICB2ZWxvY2l0eUNvbGxpc2lvbkNoZWNrKHRoaXMub2JqZWN0c1thXSwgdGhpcy5vYmplY3RzKTtcclxuICAgICAgdGhpcy5vYmplY3RzW2FdLnN0YXRlZih0aW1lKTtcclxuICAgIH1cclxuICAgIGlmKHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzKXtcclxuICAgICAgZm9yKGxldCBjYW1lcmFzIG9mIHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzKXtcclxuICAgICAgICBpZihjYW1lcmFzLmh1ZCl7XHJcbiAgICAgICAgICBjYW1lcmFzLmh1ZC5zdGF0ZWYodGltZSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgfSBcclxuICAgIH1cclxuICB9XHJcbiAgZW1pdFBhcnRpY2xlKG5hbWU6c3RyaW5nLHBvczpwb3NpdGlvbixsaWZldGltZTpudW1iZXIscG9zX3JhbmdlOm51bWJlcil7XHJcbiAgICBsZXQgc3RhdGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOnBvcyxcclxuICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICByb3RhdGlvbjowLFxyXG4gICAgICBzY2FsaW5nOnt3aWR0aDoxLGhlaWdodDoxfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRJdGVtKG5ldyBQYXJ0aWNsZSh0aGlzLnBhcnRpY2xlc1tuYW1lXSxzdGF0ZSxsaWZldGltZSxwb3NfcmFuZ2UpLCB0aGlzLnBhcnRpY2xlc19hcnIpO1xyXG4gIH1cclxuICBnZXRPYmooaWQ6c3RyaW5nKXtcclxuICAgIGZvcihsZXQgYSA9IDA7IGEgPCB0aGlzLm9iamVjdHMubGVuZ3RoOyBhKyspe1xyXG4gICAgICBpZih0aGlzLm9iamVjdHNbYV0uaWQgPT0gaWQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdHNbYV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBnZXRPYmpCeVRhZyh0YWc6c3RyaW5nKXtcclxuICAgIHJldHVybiB0aGlzLm9iamVjdHMuZmlsdGVyKChhKT0+YS50YWdzLmluZGV4T2YodGFnKSA+IC0xKTtcclxuICB9XHJcbiAgcmVuZGVyZih0aW1lOiBudW1iZXIpOiBzcHJpdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3ByaXRlX3NoZWV0OiB0aGlzLmJhY2tncm91bmQsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgc3ByaXRlX2hlaWdodDogdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCxcclxuICAgICAgc3ByaXRlX3dpZHRoOiB0aGlzLmJhY2tncm91bmQud2lkdGgsXHJcbiAgICAgIG9wYWNpdHk6MVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IG9iaiB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBvYmpfc3RhdGUsIHBvc2l0aW9uLCBkaW1lbnNpb25zfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQge2dldFJhbmRJbnR9IGZyb20gXCIuL21hdGhcIjtcclxuaW1wb3J0IHtwYXJ0aWNsZV9lbnRyeX0gZnJvbSBcIi4vcm9vbVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzcHJpdGV7XHJcbiAgc3ByaXRlX3NoZWV0OkhUTUxJbWFnZUVsZW1lbnQsXHJcbiAgbGVmdDpudW1iZXIsXHJcbiAgdG9wOm51bWJlcixcclxuICBzcHJpdGVfd2lkdGg6bnVtYmVyLFxyXG4gIHNwcml0ZV9oZWlnaHQ6bnVtYmVyLFxyXG4gIG9wYWNpdHk6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcG9zaXRpb25lZF9zcHJpdGV7XHJcbiAgc3ByaXRlOnNwcml0ZSxcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFydGljbGVfaSBleHRlbmRzIG9ial9zdGF0ZXtcclxuICBsaWZldGltZTpudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZSBleHRlbmRzIG9iantcclxuICBjb2xsaXNpb24gPSBmYWxzZTtcclxuICByYW5kb21fcmFuZ2U6bnVtYmVyO1xyXG4gIG1heF9saWZldGltZTpudW1iZXI7XHJcbiAgc3RhdGU6UGFydGljbGVfaTtcclxuICBzZWxlY3RlZF9zcHJpdGU6c3ByaXRlO1xyXG4gIGNvbnN0cnVjdG9yKHBhcnQ6cGFydGljbGVfZW50cnksc3RhdGU6b2JqX3N0YXRlLGxpZmV0aW1lOm51bWJlcixyYW5kb21fcmFuZ2U6bnVtYmVyKXtcclxuICAgIHN1cGVyKHN0YXRlKTtcclxuICAgIHRoaXMuc3RhdGUubGlmZXRpbWUgPSAwO1xyXG4gICAgdGhpcy5zcHJpdGVfdXJsID0gcGFydC5zcHJpdGU7XHJcbiAgICB0aGlzLmhlaWdodCA9IHBhcnQuaGVpZ2h0O1xyXG4gICAgdGhpcy53aWR0aCA9IHBhcnQud2lkdGg7XHJcbiAgICB0aGlzLm1heF9saWZldGltZSA9IGxpZmV0aW1lO1xyXG4gICAgdGhpcy5yYW5kb21fcmFuZ2UgPSByYW5kb21fcmFuZ2U7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnggKz0gZ2V0UmFuZEludCgtcmFuZG9tX3JhbmdlLzIscmFuZG9tX3JhbmdlLzIpO1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi55ICs9IGdldFJhbmRJbnQoLXJhbmRvbV9yYW5nZS8yLHJhbmRvbV9yYW5nZS8yKTtcclxuICB9XHJcbiAgZGVsZXRlKCl7XHJcbiAgICBsZXQgcm9vbSA9IHRoaXMuZ2FtZS5nZXRSb29tKCk7XHJcbiAgICByb29tLmRlbGV0ZUl0ZW0odGhpcy5pZCxyb29tLnBhcnRpY2xlc19hcnIpO1xyXG4gIH1cclxuICBzdGF0ZWYodGltZTpudW1iZXIpe1xyXG4gICAgdGhpcy5zdGF0ZS5saWZldGltZSArPSB0aW1lO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5saWZldGltZSA+IHRoaXMubWF4X2xpZmV0aW1lKXtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyZih0aW1lOm51bWJlcik6cG9zaXRpb25lZF9zcHJpdGV7XHJcbiAgICBpZighdGhpcy5zZWxlY3RlZF9zcHJpdGUpe1xyXG4gICAgICBsZXQgc3ByaXRlcyA9IHNwcml0ZV9nZW4odGhpcy5zcHJpdGVfc2hlZXQsdGhpcy53aWR0aCx0aGlzLmhlaWdodClcclxuICAgICAgbGV0IHJhbmRvbV9yb3cgPSBnZXRSYW5kSW50KDAsc3ByaXRlcy5sZW5ndGgpO1xyXG4gICAgICBsZXQgcmFuZG9tX2NvbCA9IGdldFJhbmRJbnQoMCxzcHJpdGVzW3JhbmRvbV9yb3ddLmxlbmd0aCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRfc3ByaXRlID0gc3ByaXRlc1tyYW5kb21fcm93XVtyYW5kb21fY29sXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRfc3ByaXRlLm9wYWNpdHkgPSAxIC0gdGhpcy5zdGF0ZS5saWZldGltZS90aGlzLm1heF9saWZldGltZTtcclxuICAgIHJldHVybntcclxuICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICBzcHJpdGU6dGhpcy5zZWxlY3RlZF9zcHJpdGUgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ByaXRlX2dlbihzcHJpdGVfc2hlZXQ6SFRNTEltYWdlRWxlbWVudCxzcHJpdGVfd2lkdGg6bnVtYmVyLHNwcml0ZV9oZWlnaHQ6bnVtYmVyKTpBcnJheTxBcnJheTxzcHJpdGU+PntcclxuICBsZXQgd2lkdGggPSBzcHJpdGVfc2hlZXQud2lkdGg7XHJcbiAgbGV0IGhlaWdodCA9IHNwcml0ZV9zaGVldC5oZWlnaHQ7XHJcbiAgbGV0IHNwcml0ZXM6QXJyYXk8QXJyYXk8c3ByaXRlPj4gPSBbXTtcclxuICBmb3IobGV0IGIgPSAwOyBiIDwgaGVpZ2h0O2IgKz0gc3ByaXRlX2hlaWdodCl7XHJcbiAgICBzcHJpdGVzLnB1c2goW10pO1xyXG4gICAgZm9yKGxldCBhID0gMDsgYSA8IHdpZHRoO2EgKz0gc3ByaXRlX3dpZHRoKXtcclxuICAgICAgc3ByaXRlc1tiXS5wdXNoKHtcclxuICAgICAgICBzcHJpdGVfc2hlZXQsXHJcbiAgICAgICAgbGVmdDphLFxyXG4gICAgICAgIHRvcDpiICogc3ByaXRlX2hlaWdodCxcclxuICAgICAgICBzcHJpdGVfaGVpZ2h0LFxyXG4gICAgICAgIHNwcml0ZV93aWR0aCxcclxuICAgICAgICBvcGFjaXR5OjFcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHNwcml0ZXM7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBsZXQgREVCVUcgPSB0cnVlO1xyXG5leHBvcnQgbGV0IFBBVVNFRCA9IHRydWU7XHJcbmltcG9ydCB7IG9iaiwgcGFyYW1zIH0gZnJvbSBcIi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBvYmpfc3RhdGUsIHBvc2l0aW9uIH0gZnJvbSBcIi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IHJvb20gfSBmcm9tIFwiLi9saWIvcm9vbVwiO1xyXG5pbXBvcnQgeyBwb3NpdGlvbmVkX3Nwcml0ZSwgc3ByaXRlIH0gZnJvbSBcIi4vbGliL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4vbGliL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQgeyBzcHJpdGVfcmVuZGVyZXIsIHJlY3RfcmVuZGVyZXIsIHN0cm9rZWRfcmVjdF9yZW5kZXJlciwgaHVkX3RleHRfcmVuZGVyZXIsIENhbWVyYSwgdGV4dF9yZW5kZXJlciB9IGZyb20gXCIuL2xpYi9yZW5kZXJcIjtcclxuaW1wb3J0IHsgSFVEIH0gZnJvbSBcIi4vbGliL2h1ZFwiO1xyXG5pbXBvcnQgeyBFeGVjdXRlUmVwZWF0QmluZHMsIGRlYnVnX2JpbmRzLCBidHlwZSwgZXhlY190eXBlLCBQb2xsX01vdXNlLCBCaW5kLCBoZWxkX2tleXMsIFVuYmluZCB9IGZyb20gXCIuL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBEaXN0YW5jZSB9IGZyb20gXCIuL2xpYi9tYXRoXCI7XHJcbmltcG9ydCB7IGluaXRfY2xpY2tfaGFuZGxlciB9IGZyb20gXCIuL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBkZWJ1Z19zdGF0ZSwgZGVidWdfdXBkYXRlX3Jvb21fbGlzdCwgZGVidWdfdXBkYXRlX29ial9saXN0LCBkZWJ1Z19zdGF0ZWYsIGRlYnVnX3NldHVwLCBkZWJ1Z191cGRhdGVfcHJlZmFicywgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCwgRGVidWdfaHVkIH0gZnJvbSBcIi4vbGliL2RlYnVnXCI7XHJcbmltcG9ydCB7IHJvb21zIGFzIHJvb21fbGlzdCB9IGZyb20gXCIuL2dhbWUvcm9vbXMvcm9vbXNcIjtcclxubGV0IHsgaXBjUmVuZGVyZXIgfSA9IHdpbmRvdy5yZXF1aXJlKFwiZWxlY3Ryb25cIik7XHJcbmNvbnN0IHBhdGggPSB3aW5kb3cucmVxdWlyZShcInBhdGhcIik7XHJcbmxldCBmcyA9IHdpbmRvdy5yZXF1aXJlKFwiZnNcIik7XHJcbmV4cG9ydCBsZXQgcHJvamVjdF9wYXRoID0gaXBjUmVuZGVyZXIuc2VuZFN5bmMoJ3BhdGgtcmVxdWVzdCcsICdwaW5nJylbMF07XHJcblxyXG5sZXQgY2FudmFzX2VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmxldCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXNfZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5cclxubGV0IHNjcmVlbl93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5sZXQgc2NyZWVuX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbmxldCB2d2lkdGggPSBjYW52YXNfZWxlbWVudC53aWR0aDtcclxubGV0IHZoZWlnaHQgPSBjYW52YXNfZWxlbWVudC5oZWlnaHQ7XHJcblxyXG5pbXBvcnQgeyBnIH0gZnJvbSBcIi4vZ2FtZS9tYWluXCI7XHJcblxyXG5cclxuLy9Ib3cgb2Z0ZW4gdGhlIGdhbWUgbG9naWMgbG9vcCBzaG91bGQgcnVuLCBpbiBtaWxsaXNlY29uZHNcclxubGV0IGxvZ2ljX2xvb3BfaW50ZXJ2YWw6IG51bWJlciA9IDEwMDAgLyA2MDtcclxuXHJcbmxldCBsYXN0X3RpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxubGV0IGxhc3RfcmVuZGVyX3RpbWUgPSAwO1xyXG5cclxuaW50ZXJmYWNlIGRpbWVuc2lvbnMge1xyXG4gIGhlaWdodDogbnVtYmVyLFxyXG4gIHdpZHRoOiBudW1iZXJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRTY3JlZW5EaW1lbnNpb25zKCk6IGRpbWVuc2lvbnMge1xyXG4gIHJldHVybiAoe1xyXG4gICAgd2lkdGg6IHNjcmVlbl93aWR0aCxcclxuICAgIGhlaWdodDogc2NyZWVuX2hlaWdodFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKTogZGltZW5zaW9ucyB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICBoZWlnaHQ6IGNhbnZhc19lbGVtZW50LmhlaWdodCxcclxuICAgIHdpZHRoOiBjYW52YXNfZWxlbWVudC53aWR0aFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgdmlld3BvcnQgPSB7XHJcbiAgaGVpZ2h0OiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQsXHJcbiAgd2lkdGg6IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLndpZHRoXHJcbn1cclxuXHJcbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcclxuICB2aWV3cG9ydC5oZWlnaHQgPSBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHRcclxuICB2aWV3cG9ydC53aWR0aCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLndpZHRoXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWJ1Zyh4OiBib29sZWFuKSB7XHJcbiAgREVCVUcgPSB4O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UGF1c2VkKHg6IGJvb2xlYW4pIHtcclxuICBQQVVTRUQgPSB4O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyX2NvbGxpc2lvbl9ib3ggPSAoYTogY29sbGlzaW9uX2JveCkgPT4ge1xyXG4gIGJveGVzLnB1c2goYSk7XHJcbn1cclxuXHJcbmxldCBib3hlczogQXJyYXk8Y29sbGlzaW9uX2JveD4gPSBbXTtcclxuXHJcbmV4cG9ydCBsZXQgZGVlcCA9IChhOiBhbnkpID0+IHtcclxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhKSk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBnYW1lX3N0YXRlPFQ+IHtcclxuICBsb2dpYzogbnVtYmVyLFxyXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICBjdXJyZW50X3Jvb206IHJvb208dW5rbm93bj4sXHJcbiAgY2FtZXJhczogQXJyYXk8Q2FtZXJhPixcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxyXG4gIGdsb2JhbHM6IFRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgcm9vbXM6IGFueVtdID0gW107XHJcbmV4cG9ydCBsZXQgb2JqZWN0czogYW55W107XHJcblxyXG5leHBvcnQgY2xhc3MgZ2FtZTxUPntcclxuICBzdGF0ZTogZ2FtZV9zdGF0ZTxUPjtcclxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgLy9UaGUgb2Zmc2NyZWVuIGNhbnZhcyBhbmQgY29udGV4dCBhcmUgdXNlZCBpbiByZW5kZXJpbmcgbXVsdGlwbGUgQ2FtZXJhc1xyXG4gIC8vVGhlIGNvbnRlbnRzIGFyZSByZW5kZXJlZCB0byB0aGUgb2Zmc2NyZWVuIGNhbnZhcywgdGhlbiBjb3BpZWQgdG8gdGhlIFxyXG4gIC8vb25zY3JlZW4gY2FudmFzLCBpbiB0aGUgcHJvcGVyIHBvc2l0aW9uIGluIHRoZSB2aWV3cG9ydFxyXG4gIG9mZnNjcmVlbl9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIG9mZnNjcmVlbl9jb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgcHJvdG90eXBlczogQXJyYXk8b2JqPiA9IFtdO1xyXG4gIHJvb21zOiBBcnJheTxhbnk+ID0gW107XHJcbiAgaXNSZW5kZXJpbmcgPSBmYWxzZTtcclxuICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgaW5pdF9zdGF0ZTogVCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2FudmFzOiBjYW52YXNfZWxlbWVudCxcclxuICAgICAgbG9naWM6IHVuZGVmaW5lZCxcclxuICAgICAgY29udGV4dDogY3R4LFxyXG4gICAgICBjYW1lcmFzOiBbXHJcbiAgICAgIF0sXHJcbiAgICAgIGN1cnJlbnRfcm9vbTogdW5kZWZpbmVkLFxyXG4gICAgICBnbG9iYWxzOiBpbml0X3N0YXRlXHJcbiAgICB9XHJcbiAgICB0aGlzLm9mZnNjcmVlbl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dCA9IHRoaXMub2Zmc2NyZWVuX2NhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAvL0RFQlVHIGRldGVybWluZXMgd2hldGhlciB0aGUgZ2FtZSBpcyBydW5uaW5nIHdpdGhpbiB0aGUgZWRpdG9yXHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgLy9TZXRzIHVwIHNvbWUgZ2xvYmFsIGRlYnVnIHN0YXRlIGFuZCB0aGUgZWRpdG9yIGtleWJpbmRpbmdzXHJcbiAgICAgIGRlYnVnX3NldHVwKCk7XHJcbiAgICAgIC8vSW5pdGlhbGl6ZXMgYSBzZXBhcmF0ZSBsb2dpYyBsb29wIHNvbGVseSBmb3IgdGhlIGVkaXRvclxyXG4gICAgICAvL1RoaXMgc2VwYXJhdGlvbiBhbGxvd3MgZm9yIHRoZSBlZGl0b3IgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgZW52aXJvbm1lbnQgd2hpbGVcclxuICAgICAgLy90aGUgYWN0dWFsIHJvb20ncyBzdGF0ZSBsb29wIGlzIHBhdXNlZC5cclxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmdldFJvb20oKSkge1xyXG4gICAgICAgICAgLy9UaGlzIGZ1bmN0aW9ucyBoYW5kbGVzIHRoZSBlZGl0b3IgaW50ZXJhY3Rpb25zIHdpdGggdGhlIGdhbWUgZW52aXJvbm1lbnRcclxuICAgICAgICAgIGRlYnVnX3N0YXRlZigxNi42Nik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxNi42NilcclxuICAgIH1cclxuICAgIC8vQ3JlYXRlcyBhIG9uY2xpY2sgZnVuY3Rpb24gb24gdGhlIHdpbmRvdyB0aGF0IGhhbmRsZXMgZWxlbWVudCBvbmNsaWNrIGZ1bmN0aW9uc1xyXG4gICAgaW5pdF9jbGlja19oYW5kbGVyKHRoaXMpO1xyXG4gIH1cclxuICByZW5kZXIodDogbnVtYmVyKSB7XHJcbiAgICAvL3QgaXMgY3VycmVudCByZW5kZXIgdGltZVxyXG4gICAgbGV0IGRlbHRhX3RpbWUgPSB0IC0gbGFzdF9yZW5kZXJfdGltZVxyXG4gICAgbGFzdF9yZW5kZXJfdGltZSA9IHQ7XHJcbiAgICBsZXQgYWxsX2NhbWVyYXMgPSB0aGlzLnN0YXRlLmNhbWVyYXM7XHJcbiAgICBsZXQgZWRpdG9yX2NhbWVyYV9pbmRleCA9IC0xO1xyXG4gICAgaWYgKERFQlVHKSB7XHJcbiAgICAgIGFsbF9jYW1lcmFzID0gWy4uLmFsbF9jYW1lcmFzLCBkZWJ1Z19zdGF0ZS5jYW1lcmFdXHJcbiAgICAgIGVkaXRvcl9jYW1lcmFfaW5kZXggPSBhbGxfY2FtZXJhcy5sZW5ndGggLSAxO1xyXG4gICAgICAvL1RoZSBlZGl0b3IgY2FtZXJhIGlzIGFsd2F5cyB0aGUgbGFzdCBjYW1lcmEgaW5zaWRlIHRoZSBjYW1lcmFzIGFycmF5XHJcbiAgICAgIC8vdGhlIGVkaXRvciBjYW1lcmEgaXMgcmVuZGVyZWQgdG8gYSBkaWZmZXJlbnQgY2FudmFzIHRoYW4gdGhlIG1haW4gZ2FtZSBjYW52YXNcclxuICAgICAgLy9zbyB3ZSB1c2UgdGhlIGNhbWVyYSdzIGluZGV4IHRvIGNoZWNrIHdoYXQgY2FudmFzIHRvIHJlbmRlciB0b1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhbGxfY2FtZXJhcy5sZW5ndGg7IGErKykge1xyXG4gICAgICBsZXQgY2FtZXJhID0gYWxsX2NhbWVyYXNbYV07XHJcbiAgICAgIC8vV2UgcmVuZGVyIHRoZSBjYW1lcmFzIGNvbnRlbnRzIHRvIGFuIG9mZnNjcmVlbiBjYW52YXMsIHRoZW4gY29weSBpdHMgY29udGVudHNcclxuICAgICAgLy90byB0aGUgbWFpbiBjYW52YXMuXHJcbiAgICAgIC8vVGhpcyBhbGxvd3MgdXMgdG8gYXZvaWQgYW55IG1hdGggbmVlZGVkIHRvIGRldGVybWluZSBzcHJpdGVzIHRoYXQgYXJlIHBhcnRpYWxseSBvZmZzY3JlZW5cclxuICAgICAgLy9hcyBhbnkgb2Zmc2NyZWVuIHNlY3Rpb25zIG9mIHRoZSBzcHJpdGVzIHdpbGwgbm90IGJlIGNvcGllZCBvdmVyLCByYXRoZXIgdGhhbiBleHBsaWNpdGx5IFxyXG4gICAgICAvL2NhbGN1bGF0aW5nIHRoZSBjdXRvZmZzXHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcy5oZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcy53aWR0aCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCwgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgsIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCk7XHJcbiAgICAgIC8vVGhpcyBjb2xsaXNpb24gYm94IHJlcHJlc2VudHMgdGhlIGNhbWVyYSdzIGZpZWxkIG9mIHZpZXcgaW4gdGhlIGdhbWUgc3BhY2VcclxuICAgICAgLy9XZSB1c2UgdGhlIHJvb20ncyBjaGVja09iamVjdHMgZnVuY3Rpb24gdG8gZmluZCBhbnkgb2JqZWN0IHRoYXQgZXhpc3RzIHdpdGhpbiB0aGlzIGFyZWFcclxuICAgICAgLy9UaGVzZSBvYmplY3RzIGFyZSB0aGUgb2JqZWN0cyB0aGF0IG5lZWQgdG8gYmUgcmVuZGVyZWQgZm9yIHRoaXMgY2FtZXJhXHJcbiAgICAgIGxldCBjYW1lcmFfYm94ID0ge1xyXG4gICAgICAgIHg6IGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOiBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxIC8gY2FtZXJhLnN0YXRlLnNjYWxpbmcpLFxyXG4gICAgICAgIGhlaWdodDogY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEgLyBjYW1lcmEuc3RhdGUuc2NhbGluZylcclxuICAgICAgfTtcclxuICAgICAgLy9MaXN0IG9mIGFsbCBwYXJ0aWNsZXMgd2l0aGluIHRoZSBjYW1lcmEncyBmb3ZcclxuICAgICAgbGV0IHBhcnRpY2xlX2NvbGxpZGVzID0gdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uY2hlY2tPYmplY3RzKGNhbWVyYV9ib3gsIFtdLCB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5wYXJ0aWNsZXNfYXJyKTtcclxuICAgICAgLy9MaXN0IG9mIGFsbCBvYmplY3RzIHdpdGhpbiB0aGUgY2FtZXJhJ3MgZm92XHJcbiAgICAgIGxldCBjYW1lcmFfY29sbGlkZXJzID0gWy4uLnRoaXMuc3RhdGUuY3VycmVudF9yb29tLmNoZWNrT2JqZWN0cyhjYW1lcmFfYm94KSwgLi4ucGFydGljbGVfY29sbGlkZXNdO1xyXG5cclxuICAgICAgbGV0IHJlbmRlcl9hcmdzID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHRoaXMub2Zmc2NyZWVuX2NvbnRleHQsXHJcbiAgICAgICAgY2FtZXJhOiBjYW1lcmEsXHJcbiAgICAgIH07XHJcbiAgICAgIC8vUmVuZGVycyB0aGUgcm9vbSdzIGJhY2tncm91bmQuXHJcbiAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgIHNwcml0ZTogdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ucmVuZGVyZihkZWx0YV90aW1lKSxcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgLy9BcnJheSBvZiBoaXRib3hlcyBmb3IgZWFjaCBpdGVtIGluIHRoZSByb29tXHJcbiAgICAgIGxldCBoaXRib3hlczogY29sbGlzaW9uX2JveFtdID0gW107XHJcbiAgICAgIGZvciAobGV0IGEgb2YgY2FtZXJhX2NvbGxpZGVycy5maWx0ZXIoKGIpID0+IGIucmVuZGVyKS5zb3J0KChhLCBiKSA9PiAoYS5sYXllciAtIGIubGF5ZXIpKSkge1xyXG4gICAgICAgIGxldCByZW5kZXJlZCA9IGEucmVuZGVyVHJhY2sodCk7XHJcblxyXG4gICAgICAgIC8vT2JqZWN0cyBjYW4gcmV0dXJuIGVpdGhlciBhIHNwcml0ZSwgb3IgYW4gYXJyYXkgb2Ygc3ByaXRlcyB0byBzaW1wbGlmeSB0aGUgQVBJXHJcbiAgICAgICAgLy9Gb3IgdGhlIHVzZXIsIGFuZCBmb3IgdXNlIGluIGNvbXBvc2l0ZSBvYmplY3RzKG9iamVjdCB0aGF0IGJ1bmRsZXMgb3RoZXIgb2JqZWN0cyB0b2dldGhlcilcclxuICAgICAgICAvL0ludGVybmFsbHksIHdlIGNvbnZlcnQgYW55IHNpbmdsZSBzcHJpdGUgaW50byBhbiBhcnJheSBvZiBvbmUgc3ByaXRlLlxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgcG9zaXRpb25lZF9zcHJpdGUgb2YgcmVuZGVyZWQpXHJcbiAgICAgICAgICBzcHJpdGVfcmVuZGVyZXIocmVuZGVyX2FyZ3MsIHtcclxuICAgICAgICAgICAgc3ByaXRlOiBwb3NpdGlvbmVkX3Nwcml0ZS5zcHJpdGUsXHJcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uZWRfc3ByaXRlLngsXHJcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uZWRfc3ByaXRlLnksXHJcbiAgICAgICAgICAgIHJvdGF0aW9uOiBhLnN0YXRlLnJvdGF0aW9uLFxyXG4gICAgICAgICAgICBzY2FsZTogYS5zdGF0ZS5zY2FsaW5nXHJcbiAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vSGl0Ym94ZXMgYXJlIHJlbmRlcmVkIGxhdGUgaW4gdGhlIHJlbmRlciBsb29wLCB0byBlbnN1cmUgb2JqZWN0cyBkb24ndCBvdmVybGFwIHRoZW1cclxuICAgICAgICAvL0FzIHdlIHJlbmRlciBvYmplY3RzLCB3ZSBhZGQgdGhlaXIgaGl0Ym94ZXMgdG8gdGhpcyBsaXN0XHJcbiAgICAgICAgaWYgKERFQlVHICYmIGEuY29sbGlzaW9uKSB7XHJcbiAgICAgICAgICBoaXRib3hlcy5wdXNoKC4uLmEuZ2V0QWxsQ29sbGlzaW9uQm94ZXMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vVGhpcyBpcyBhIHNwZWNpYWwgY2xhc3Mgb2Ygb2JqZWN0IHRoYXQgZXhpc3RzIGluIHRoZSBnYW1lIHdvcmxkXHJcbiAgICAgIGZvciAobGV0IG5vZGUgb2YgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20udGV4dF9ub2Rlcykge1xyXG4gICAgICAgIHRleHRfcmVuZGVyZXIocmVuZGVyX2FyZ3MsIHtcclxuICAgICAgICAgIHg6IG5vZGUuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICAgIHk6IG5vZGUuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICAgIGZvbnQ6IG5vZGUucmVuZGVyZih0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjYW1lcmEuaHVkKSB7XHJcbiAgICAgICAgbGV0IGdyYXBoaWNzID0gY2FtZXJhLmh1ZC5ncmFwaGljX2VsZW1lbnRzO1xyXG4gICAgICAgIGxldCB0ZXh0X2VsZW1lbnRzID0gY2FtZXJhLmh1ZC50ZXh0X2VsZW1lbnRzO1xyXG4gICAgICAgIC8vUmVuZGVycyBzdGF0aWMgZ3JhcGhpY3MgdGhhdCBhcmUgYSBwYXJ0IG9mIHRoZSBodWRcclxuICAgICAgICBmb3IgKGxldCBncmFwaGljIG9mIGdyYXBoaWNzKSB7XHJcbiAgICAgICAgICBsZXQgcmVuZGVyZWQgPSBncmFwaGljLnJlbmRlclRyYWNrKHQpO1xyXG4gICAgICAgICAgaWYgKGdyYXBoaWMucmVuZGVyKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHBvc2l0aW9uZWRfc3ByaXRlIG9mIHJlbmRlcmVkKSB7XHJcbiAgICAgICAgICAgICAgc3ByaXRlX3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGU6IHBvc2l0aW9uZWRfc3ByaXRlLnNwcml0ZSxcclxuICAgICAgICAgICAgICAgIHg6IHBvc2l0aW9uZWRfc3ByaXRlLngsXHJcbiAgICAgICAgICAgICAgICB5OiBwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgICAgICAgICAgcm90YXRpb246IGdyYXBoaWMuc3RhdGUucm90YXRpb24sXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogZ3JhcGhpYy5zdGF0ZS5zY2FsaW5nXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgdGV4dCBvZiB0ZXh0X2VsZW1lbnRzKSB7XHJcbiAgICAgICAgICBodWRfdGV4dF9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgICB4OiB0ZXh0LnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IHRleHQuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgZm9udDogdGV4dC5yZW5kZXJmKHQpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL0lmIGEgY2FtZXJhIGlzIG1hcmtlZCBhcyBhIGRlYnVnIGNhbWVyYSwgd2UgcmVuZGVyIHRoZVxyXG4gICAgICAvLyAgaGl0Ym94ZXMsIGFuZCBwb3RlbnRpYWxseSB1cGRhdGUgdGhlIGVkaXRvclxyXG4gICAgICBpZiAoY2FtZXJhLnN0YXRlLmRlYnVnKSB7XHJcbiAgICAgICAgbGV0IGJveDogY29sbGlzaW9uX2JveDtcclxuICAgICAgICBsZXQgYm94ZXNfY29weSA9IFsuLi5ib3hlc11cclxuICAgICAgICB3aGlsZSAoYm94ZXNfY29weS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBsZXQgYm94ID0gYm94ZXNfY29weS5wb3AoKTtcclxuICAgICAgICAgIGxldCByZWN0ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogYm94LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LCByZWN0LCBib3gueCwgYm94LnksIFwiI0ZGMDAwMFwiLCAxLCBjYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoaGl0Ym94ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGV0IGJveCA9IGhpdGJveGVzLnBvcCgpO1xyXG4gICAgICAgICAgbGV0IHJlY3QgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBib3gud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyKHRoaXMub2Zmc2NyZWVuX2NvbnRleHQsIHJlY3QsIGJveC54LCBib3gueSwgXCIjMDA4MDAwXCIsIDEsIGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vRHJhd3MgYSBzcGVjaWFsIGJveCBhcm91bmQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50XHJcbiAgICAgICAgLy9pbnNpZGUgdGhlIGVkaXRvciBVSVxyXG4gICAgICAgIGlmIChERUJVRyAmJiBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQpIHtcclxuICAgICAgICAgIGxldCBjb2xsID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50LmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICAgICAgICAgIHJlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCwgeyB3aWR0aDogMjUsIGhlaWdodDogMjUgfSwgY29sbC54LCBjb2xsLnksIFwic2t5Ymx1ZVwiLCAxMCwgY2FtZXJhKTtcclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LCBjb2xsLCBjb2xsLngsIGNvbGwueSwgXCJibHVlXCIsIDEsIGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vU2VwYXJhdGUgY2FudmFzIGZvciB0aGUgZWRpdG9yIGNhbWVyYVxyXG4gICAgICBpZiAoYSAhPT0gZWRpdG9yX2NhbWVyYV9pbmRleCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5vZmZzY3JlZW5fY2FudmFzLCBjYW1lcmEuc3RhdGUudmlld3BvcnQueCwgY2FtZXJhLnN0YXRlLnZpZXdwb3J0LnkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGRlYnVnX3N0YXRlLnRhcmdldC5nZXRDb250ZXh0KFwiMmRcIikuZHJhd0ltYWdlKHRoaXMub2Zmc2NyZWVuX2NhbnZhcywgY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngsIGNhbWVyYS5zdGF0ZS52aWV3cG9ydC55KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKERFQlVHKVxyXG4gICAgICBib3hlcyA9IFtdO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChhKSA9PiB7IHRoaXMucmVuZGVyKGEpIH0pO1xyXG4gIH1cclxuICBzdGFydF9sb2dpYyhhOiBudW1iZXIpIHtcclxuICAgIC8vdGhpcyBpcyB0aGUgcm9vbSdzIHN0YXRlIGxvb3BcclxuICAgIHJldHVybiB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoIVBBVVNFRCkge1xyXG4gICAgICAgIGxldCBuZXdfdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHRpbWVfc2luY2UgPSBuZXdfdGltZS5nZXRUaW1lKCkgLSBsYXN0X3RpbWUuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxhc3RfdGltZSA9IG5ld190aW1lO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbSkge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uc3RhdGVmKHRpbWVfc2luY2UpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmh1ZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5odWQuc3RhdGVmKHRpbWVfc2luY2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL1RoaXMgZnVuY3Rpb25zIGhhbmRsZXMgYmluZHMgdGhhdCBvY2N1ciBvbiBhbiBpbnRlcnZhbFxyXG4gICAgICBFeGVjdXRlUmVwZWF0QmluZHMoYSk7XHJcbiAgICB9LCBhKTtcclxuICB9XHJcbiAgZ2V0Um9vbSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbTtcclxuICB9XHJcbiAgYXN5bmMgbG9hZFJvb21TdHJpbmcoeDogc3RyaW5nKSB7XHJcbiAgICAvL3Jvb20gbGlzdCBpcyBhIG9iamVjdCB0aGF0IGNvbnRhaW5zIGVhY2ggcm9vbSdzIGNsYXNzLFxyXG4gICAgLy93aXRoIHRoZSByb29tJ3MgbmFtZSBhcyB0aGUga2V5IGZvciBjbGFzc1xyXG4gICAgLy9UaGlzIG9iamVjdCBpcyBwb3B1bGF0ZWQgYXQgY29tcGlsZSB0aW1lXHJcbiAgICBmb3IgKGxldCBhIG9mIE9iamVjdC5rZXlzKHJvb21fbGlzdCkpIHtcclxuICAgICAgaWYgKGEgPT0geCkge1xyXG4gICAgICAgIC8vdGhpcyBpc24ndCBwYXJ0aWN1bGFybHkgdHlwZS1zYWZlLlxyXG4gICAgICAgIGxldCBuZXdfcm9vbSA9IDxyb29tPHt9Pj5uZXcgcm9vbV9saXN0W2FdKHRoaXMpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkUm9vbShuZXdfcm9vbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRSb29tKHg6IHJvb208dW5rbm93bj4pIHtcclxuICAgIC8vQ2xlYXJzIHRoZSByb29tJ3MgbG9naWMgbG9vcCBpZiBvbmVcclxuICAgIC8vV2FzIGFscmVhZHkgcnVubmluZ1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubG9naWMpIHtcclxuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5sb2dpYyk7XHJcbiAgICB9XHJcbiAgICAvL1RoaXMgcmVmZXJlbmNlIGlzIHVzZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uXHJcbiAgICB4LmdhbWUgPSB0aGlzO1xyXG4gICAgLy9EZWxldGVzIGVhY2ggb2JqZWN0IGluIHRoZSByb29tICh3aGljaCBhbHNvIHVuYmluZHMgdGhlaXIgYmluZHMpLFxyXG4gICAgLy9hbmQgdW5iaW5kcyB0aGUgcm9vbSdzIGJpbmRpbmdzLlxyXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgd2hpbGUgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHNbMF0uZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaWQgb2YgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uYmluZHMpIHtcclxuICAgICAgICBVbmJpbmQoaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3X3Jvb20gPSBhd2FpdCB4LmxvYWQoKTtcclxuICAgIHgucmVnaXN0ZXJDb250cm9scygpO1xyXG4gICAgeC5yZWdpc3RlclBhcnRpY2xlcygpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUubG9naWMgPSB0aGlzLnN0YXJ0X2xvZ2ljKGxvZ2ljX2xvb3BfaW50ZXJ2YWwpXHJcbiAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbSA9IHg7XHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgZGVidWdfdXBkYXRlX3Jvb21fbGlzdCgpO1xyXG4gICAgICBkZWJ1Z191cGRhdGVfcHJlZmFicygpO1xyXG4gICAgICBkZWJ1Z191cGRhdGVfb2JqX2xpc3QoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKCF0aGlzLmlzUmVuZGVyaW5nKSB7XHJcbiAgICAgIC8vVGhpcyBzdGFydHMgdGhlIHJlbmRlciBsb29wIGZvciB0aGUgcm9vbVxyXG4gICAgICB0aGlzLnJlbmRlcigwKTtcclxuICAgICAgdGhpcy5pc1JlbmRlcmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=