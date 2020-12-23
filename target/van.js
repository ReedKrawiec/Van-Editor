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
/*
window.board_functions = {};

window.board_functions.backwards = ()=>{
  let room = g.getRoom() as Board;
  for(let move of room.state.last_move.reverse()){
    let piece:piece;
    
    switch(move.type){
      case "remove":
        room.add_piece_from_type(move.old_piece,move.old_position,move.side);
        break;
        
      case "add":
        piece = room.get_piece(move.old_position).filter((p)=>p.state.side === move.side && p.state.type === move.new_piece)[0];
        room.remove_piece(piece);
        break;
    
      case "move":
        piece = room.get_piece(move.new_position).filter((p)=>p.state.side === move.side && p.state.type === move.new_piece)[0]
        piece.movetoCords(move.old_position);
        break;
        
    }
    
  }
  room.state.after_history.unshift(room.state.last_move);
  room.state.last_move = room.state.before_history.pop();
  room.state.turn = room.state.turn == side.white ? side.black : side.white;
}
*/
exports.g.loadRoomString("Overworld");


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
        this.collision = false;
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
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
class Cursor extends object_1.obj {
    constructor() {
        super(...arguments);
        this.sprite_url = "./sprites/cursor.png";
        this.height = 64;
        this.width = 64;
        this.collision = false;
        this.render = true;
        this.gravity = false;
        this.tags = ["Cursor"];
    }
    statef(t) {
        super.statef(t);
        console.log(this.state.velocity);
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
        this.tick_state = false;
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
            room.state.before_history.push(room.state.last_move);
            room.state.last_move = [];
            let p = room.get_piece(this.getCords());
            let s = room.state.selected;
            if (s.state.type === piece_1.piece_type.king && !s.state.has_moved && this.getCords().x === 6) {
                let rooks = room.get_piece({ x: 7, y: s.getCords().y });
                rooks[0].movetoCordsHistory({ x: 5, y: s.getCords().y });
            }
            if (s.state.type === piece_1.piece_type.king && !s.state.has_moved && this.getCords().x === 2) {
                let rooks = room.get_piece({ x: 0, y: s.getCords().y });
                rooks[0].movetoCordsHistory({ x: 3, y: s.getCords().y });
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
                    room.add_piece_history(qu);
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
            room.state.selected.movetoCordsHistory(this.getCords());
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
        this.tick_state = false;
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
    movetoCordsHistory(a) {
        let room = main_1.g.getRoom();
        room.state.last_move.push({
            type: "move",
            old_position: Object.assign({}, this.getCords()),
            new_position: Object.assign({}, a),
            old_piece: this.state.type,
            new_piece: this.state.type,
            side: this.state.side
        });
        this.movetoCords(a);
    }
    movetoCords(a) {
        let room = main_1.g.getRoom();
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
const render_1 = __webpack_require__(/*! ../../lib/render */ "./src/lib/render.ts");
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
        this.scale_type = render_1.scale_type.repeat;
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

module.exports = JSON.parse("{\"objects\":[{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":-148.82352941176475,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"C\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":150,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"F\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":-50,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"D\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":430,\"y\":349.79104813315354},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":8}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":-350,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"A\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":350.0000000000001,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"H\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":-250,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"B\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":430,\"y\":-350},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":1}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":430,\"y\":150},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":6}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":50,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"E\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":430,\"y\":-153.529411764706},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":3}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":430,\"y\":50},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":5}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":250,\"y\":-430},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":\"G\"}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":430,\"y\":-50},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":4}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":430,\"y\":247.5688259109313},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":7}},{\"type\":\"Board_Label\",\"state\":{\"position\":{\"x\":428.57142857142844,\"y\":-250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"character\":2}}]}");

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
const piece_1 = __webpack_require__(/*! ../objects/abstract/piece */ "./src/game/objects/abstract/piece.ts");
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
            dragging: false,
            last_move: [],
            before_history: [],
            after_history: []
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
                let piece = collisions[0];
                if (this.state.turn == piece.state.side) {
                    this.state.dragging = true;
                    piece.select();
                    piece.layer = 3;
                    this.state.selected_original_position = Object.assign({}, collisions[0].state.position);
                }
            }
        });
        this.bindControl("mouse0up", controls_1.exec_type.once, () => {
            if (this.state.selected) {
                this.state.selected.layer = 1;
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
    add_piece_history(a) {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.last_move.push({
                type: "add",
                old_position: Object.assign({}, a.getCords()),
                new_position: Object.assign({}, a.getCords()),
                new_piece: a.state.type,
                side: a.state.side
            });
            yield this.add_piece(a);
        });
    }
    add_piece_from_type(type, position, side) {
        return __awaiter(this, void 0, void 0, function* () {
            let piece;
            let state = {
                position,
                velocity: {
                    x: 0,
                    y: 0
                },
                rotation: 0,
                scaling: {
                    height: 1,
                    width: 1
                }
            };
            switch (type) {
                case piece_1.piece_type.bishop:
                    piece = new Bishop_1.Bishop(state, { side });
                    break;
                case piece_1.piece_type.rook:
                    piece = new Rook_1.Rook(state, { side });
                    break;
                case piece_1.piece_type.queen:
                    piece = new Queen_1.Queen(state, { side });
                    break;
                case piece_1.piece_type.pawn:
                    piece = new Pawn_1.Pawn(state, { side });
                    break;
                case piece_1.piece_type.knight:
                    piece = new Knight_1.Knight(state, { side });
                    break;
                case piece_1.piece_type.king:
                    piece = new King_1.King(state, { side });
                    break;
            }
            yield this.add_piece(piece);
        });
    }
    add_piece(a) {
        return __awaiter(this, void 0, void 0, function* () {
            yield a.load();
            this.addItem(a);
            this.state.pieces.unshift(a);
        });
    }
    remove_piece(a) {
        this.state.last_move.push({
            type: "remove",
            old_position: Object.assign({}, a.getCords()),
            new_position: Object.assign({}, a.getCords()),
            old_piece: a.state.type,
            side: a.state.side
        });
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
            if (mouse) {
                this.state.selected.state.position.x = mouse.x;
                this.state.selected.state.position.y = mouse.y;
            }
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

module.exports = JSON.parse("{\"objects\":[{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":2250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":4250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":2750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":1750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":3750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":3750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":4250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":2750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":3250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":1250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":2250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":4750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":1250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":3250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":1750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":320,\"y\":4750},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"VertBox\",\"state\":{\"position\":{\"x\":900,\"y\":250},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":11700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":36700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":16700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":42700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":32200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":31700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":31200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":38200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":34700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":14700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":13200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":611.5,\"y\":-19},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":26200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":47700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":48200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":14200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":41700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":19200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":11200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":50200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":17200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":42200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":40700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":46700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":38700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":6700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":30200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":47200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":29700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":22200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":32700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":5200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":10200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":20700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":33700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":45200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":30700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":2200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":16200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":15700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":21700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":43200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":49700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":29200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":6200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":28700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":39700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":48700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":21200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":37700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":39200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":18700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":49200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":3200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":46200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":27200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":44700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":23700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":40200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":23200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":7700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":34200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":4700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":36200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":1200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":35200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":37200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":8700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":27700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":33200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":22700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":13700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":9700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":35700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":45700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":10700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":4200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":18200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":43700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":26700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":25200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":2700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":17700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":28200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":41200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":12700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":9200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":12200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":8200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":19700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":25700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":20200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":3700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":44200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":24700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":24200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":15200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":5700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":7200,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"box\",\"state\":{\"position\":{\"x\":1700,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"Cursor\",\"state\":{\"position\":{\"x\":-52,\"y\":-238.94780040221212},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{\"id\":\"Cursor\"}},{\"type\":\"Goomba\",\"state\":{\"position\":{\"x\":500,\"y\":87.53938267526655},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1},\"direction\":0,\"jumping\":false,\"health\":100,\"times_airshot\":0,\"max_times_airshot\":0},\"parameters\":{}},{\"type\":\"Player\",\"state\":{\"position\":{\"x\":700,\"y\":150},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":1}},\"parameters\":{}},{\"type\":\"Rocket\",\"state\":{\"position\":{\"x\":626.4052708223829,\"y\":56.18636089908266},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":246.91645185747947,\"scaling\":{\"width\":1,\"height\":1},\"damage\":20,\"distance\":0,\"speed\":15},\"parameters\":246.91645185747947}]}");

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
                if (mouse) {
                    cursor.state.position.x = mouse.x;
                    cursor.state.position.y = mouse.y;
                }
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
        this.scale_type = render_1.scale_type.grow;
        this.opacity = 1;
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
                    opacity: this.opacity
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
exports.rect_renderer = exports.stroked_rect_renderer = exports.sprite_renderer = exports.text_renderer = exports.hud_text_renderer = exports.scale_type = exports.render_type = exports.Camera = void 0;
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
var scale_type;
(function (scale_type) {
    scale_type[scale_type["grow"] = 0] = "grow";
    scale_type[scale_type["repeat"] = 1] = "repeat";
})(scale_type = exports.scale_type || (exports.scale_type = {}));
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
    if (s.scale_type == scale_type.grow) {
        r.context.drawImage(s.sprite.sprite_sheet, s.sprite.left, s.sprite.top, s.sprite.sprite_width, s.sprite.sprite_height, -(width) / 2, -height / 2, width, height);
    }
    else if (s.scale_type == scale_type.repeat) {
        let one_width = s.sprite.sprite_width * r.camera.state.scaling;
        let one_height = s.sprite.sprite_height * r.camera.state.scaling;
        let total_hor_sprites = width / one_width;
        let total_ver_sprites = height / one_height;
        if (total_hor_sprites - 1 > 0.0001 || total_ver_sprites - 1 > 0.0001) {
            console.log(total_hor_sprites + " + " + total_ver_sprites);
        }
        for (let a = 0; a < total_hor_sprites; a += 1) {
            for (let b = 0; b < total_ver_sprites; b += 1) {
                let new_width = one_width;
                let new_height = one_height;
                if ((a + 1) * one_width - width > 0.00001) {
                    new_width = width % one_width;
                }
                if ((b + 1) * one_height - height > 0.00001) {
                    new_height = height % one_height;
                }
                r.context.drawImage(s.sprite.sprite_sheet, s.sprite.left, s.sprite.top, s.sprite.sprite_width, s.sprite.sprite_height, -width / 2 + a * one_width, -height / 2 + b * one_height, new_width, new_height);
            }
        }
    }
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
        let ticking_objects = this.objects.filter((o) => o.tick_state);
        for (let a = 0; a < ticking_objects.length; a++) {
            collision_1.velocityCollisionCheck(ticking_objects[a], this.objects);
            ticking_objects[a].statef(time);
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
exports.project_path = ipcRenderer.sendSync('path-request', 'ping')[0];
let canvas_element = document.getElementById("target");
let context = canvas_element.getContext("2d");
let screen_width = window.innerWidth;
let screen_height = window.innerHeight;
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
                },
                scale_type: render_1.scale_type.grow
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
                        scale: a.state.scaling,
                        scale_type: a.scale_type
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
                                scale: graphic.state.scaling,
                                scale_type: graphic.scale_type
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0Jpc2hvcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0JvYXJkX0xhYmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvQ29udHJvbGxlZFBsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0N1cnNvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL0Rvb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9Hb29tYmEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9HdW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9LaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvS25pZ2h0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvTW92ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL1Bhd24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9RdWVlbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL1Jvb2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9Sb3RhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvVmVydEJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL2Fic3RyYWN0L3BpZWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvYWJzdHJhY3QvcGxhdGZvcm1lcl9vYmoudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9idWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9wcmVmYWJzLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL092ZXJ3b3JsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9yb29tcy9UZXN0Ui50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9yb29tcy9VbmRlcndvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL3Jvb21zLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYXVkaW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb250cm9scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2RlYnVnLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvaHVkLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvbWF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL29iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JlbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakZBLGdFQUEyRDtBQUczRCxJQUFJLGNBQWMsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUM7QUFVbkYsU0FBQyxHQUFHLElBQUksVUFBSSxDQUFVLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUM7SUFDL0QsSUFBSSxFQUFDLENBQUM7Q0FDUCxDQUFDLENBQUM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOEJFO0FBQ0YsU0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEOUIsb0dBQXdFO0FBR3hFLE1BQWEsTUFBTyxTQUFRLGFBQUs7SUFFL0IsWUFBWSxLQUFlLEVBQUMsU0FBMEIsYUFBSyxDQUFDLGNBQWM7UUFDeEUsS0FBSyxDQUFDLEtBQUssRUFBQztZQUNWLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSTtTQUNqQixDQUFDLENBQUM7UUFKTCxlQUFVLEdBQUcsc0JBQXNCO1FBS2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLGtCQUFVLENBQUMsTUFBTSxDQUFDO0lBQ3RDLENBQUM7SUFDRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBWEQsd0JBV0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRywyRUFBcUM7QUFDekMsb0ZBQXFDO0FBRXJDLHdFQUEyQjtBQUMzQixtRUFBK0I7QUFVM0IsTUFBYSxXQUFZLFNBQVEsWUFBRztJQWNsQyxZQUFZLEtBQWUsRUFBQyxTQUFnQyxVQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztRQUMxRixLQUFLLENBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBZHRCLGVBQVUsR0FBRyxxQkFBcUIsQ0FBQztRQUNuQyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLFNBQUksR0FBaUIsRUFBRSxDQUFDO1FBQ3hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRVosVUFBSyxHQUFHLEtBQUssQ0FBQztJQU1kLENBQUM7SUFDRCxNQUFNLENBQUMsVUFBaUI7UUFDdEIsSUFBRyxRQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLFFBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksVUFBSSxDQUFDO2dCQUNuQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUM1QixJQUFJLEVBQUMsRUFBRTtnQkFDUCxPQUFPLEVBQUMsQ0FBQztnQkFDVCxJQUFJLEVBQUMsT0FBTztnQkFDWixLQUFLLEVBQUMsT0FBTzthQUNkLEVBQUMsR0FBRSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6QjtJQUNILENBQUM7SUFDRCxPQUFPLENBQUMsVUFBaUI7UUFDeEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxtQkFBbUI7SUFFbkIsQ0FBQztJQUNELGNBQWM7SUFFZCxDQUFDO0lBQ0QsaUJBQWlCO0lBRWpCLENBQUM7O0FBekNILGtDQTBDQztBQS9CUSwwQkFBYyxHQUEwQjtJQUM3QyxTQUFTLEVBQUMsR0FBRztDQUNkOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JQLDBGQUErQztBQUMvQyxxRkFBNEQ7QUFJNUQsTUFBYSxnQkFBaUIsU0FBUSxlQUFNO0lBQzFDLFlBQVksS0FBZSxFQUFDLE1BQW9CO1FBQzlDLEtBQUssQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFHdEIsU0FBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFGaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsb0JBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQzlDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsb0JBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGtCQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsb0JBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxvQkFBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDOUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsb0JBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGtCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsb0JBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFuQ0QsNENBbUNDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNELG9GQUF1QztBQU12QyxNQUFhLE1BQU8sU0FBUSxZQUFHO0lBQS9COztRQUNFLGVBQVUsR0FBRyxzQkFBc0IsQ0FBQztRQUNwQyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsU0FBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFLcEIsQ0FBQztJQUpDLE1BQU0sQ0FBQyxDQUFRO1FBQ2IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUNGO0FBWkQsd0JBWUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkcsb0ZBQXFDO0FBRXpDLHdFQUE0QjtBQVl4QixNQUFhLElBQUssU0FBUSxZQUFHO0lBYzNCLFlBQVksS0FBZSxFQUFDLFNBQXlCLElBQUksQ0FBQyxjQUFjO1FBQ3RFLEtBQUssQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFkdEIsZUFBVSxHQUFHLHNCQUFzQixDQUFDO1FBQ3BDLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osU0FBSSxHQUFpQixFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQUcsSUFBSSxDQUFDO0lBVWQsQ0FBQztJQUNELE1BQU0sQ0FBQyxVQUFpQjtRQUN0QixJQUFJLFFBQVEsR0FBRyxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RFLEtBQUksSUFBSSxHQUFHLElBQUksUUFBUSxFQUFDO1lBQ3RCLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUM7Z0JBQzdCLFFBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsT0FBTzthQUNSO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsT0FBTyxDQUFDLFVBQWlCO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsa0JBQWtCO0lBRWxCLENBQUM7SUFDRCxhQUFhO0lBRWIsQ0FBQztJQUNELGdCQUFnQjtJQUVoQixDQUFDOztBQXJDSCxvQkFzQ0M7QUE3QlEsbUJBQWMsR0FBbUI7SUFDdEMsUUFBUSxFQUFDLFlBQVk7SUFDckIsSUFBSSxFQUFDLElBQUk7SUFDVCxHQUFHLEVBQUMsRUFBRTtDQUNQOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJQLG9GQUFzRDtBQUV0RCwrSEFBaUc7QUFNakcsd0VBQTRCO0FBRTVCLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBSTtJQUNKLDJDQUFLO0FBQ1AsQ0FBQyxFQUhXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBR3BCO0FBcUJELE1BQWEsTUFBTyxTQUFRLCtCQUFjO0lBUXhDLFlBQVksS0FBZSxFQUFDLGFBQTJCLE1BQU0sQ0FBQyxjQUFjO1FBRTFFLEtBQUssQ0FBQyxLQUFLLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFUMUIsZUFBVSxHQUFHLDRCQUE0QixDQUFDO1FBQzFDLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osU0FBSSxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFNZixJQUFJLFVBQVUsQ0FBQyxFQUFFLElBQUksU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztTQUN6QjtRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztZQUN2QixTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDekIsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsR0FBRztZQUNYLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLGlCQUFpQixFQUFFLENBQUM7U0FDckIsQ0FBQztRQUNGLGdDQUFnQztJQUNsQyxDQUFDO0lBQ0Qsa0JBQWtCO1FBQ2hCLElBQUksT0FBTyxHQUFHLG1CQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDM0IsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCLEVBQUUsR0FBRyxDQUFDO1FBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQzNCLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQixFQUFFLEdBQUcsQ0FBQztRQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUM5QixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUMvQixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUM5QixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUMvQixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkIsRUFBRSxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSx3QkFBd0IsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsT0FBTyxDQUFDLENBQVM7UUFDZixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3RCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO2FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDbEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7YUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLElBQUksSUFBSSxHQUFHLFFBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNyQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ3ZCLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztnQkFDaEIsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNSLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDOUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNoRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7YUFDOUI7aUJBQ0k7Z0JBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQzNCO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNoRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDaEUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFBQSxDQUFDO1lBQ2pFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtTQUNGO2FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUFBLENBQUM7WUFDakUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1NBQ0Y7SUFDSCxDQUFDO0NBQ0Y7QUFqSEQsd0JBaUhDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkpELG9GQUFtRDtBQUNuRCwrSEFBMkQ7QUFDM0Qsd0VBQTRCO0FBSzVCLE1BQWEsR0FBSSxTQUFRLCtCQUFjO0lBQXZDOztRQUNFLGVBQVUsR0FBRywwQkFBMEIsQ0FBQztRQUN4QyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUVkLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsU0FBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFtQmpCLENBQUM7SUFsQkMsTUFBTSxDQUFDLENBQVM7UUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsSUFBSSxHQUFHLEdBQUcsd0JBQWUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHO2dCQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDeEMsQ0FBQztTQUVIO2FBQ0k7WUFDSCxJQUFJLElBQUksR0FBRyxRQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQVcsQ0FBQztZQUMvRCxJQUFJLENBQUMsTUFBTSxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckQ7SUFFSCxDQUFDO0NBQ0Y7QUE1QkQsa0JBNEJDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENELG9HQUF3RTtBQUd4RSx3RUFBMEI7QUFFMUIsTUFBYSxJQUFLLFNBQVEsYUFBSztJQUU3QixZQUFZLEtBQWUsRUFBQyxTQUEwQixhQUFLLENBQUMsY0FBYztRQUN4RSxLQUFLLENBQUMsS0FBSyxFQUFDO1lBQ1YsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUpMLGVBQVUsR0FBRyxvQkFBb0I7UUFLL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsa0JBQVUsQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUNELGlCQUFpQixDQUFDLElBQVUsRUFBQyxLQUFjO1FBQ3pDLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztZQUVuTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNqQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELGtCQUFrQixDQUFDLElBQVUsRUFBQyxLQUFjO1FBQzFDLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7WUFDekksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDckQsSUFBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFDO2dCQUM3QyxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxZQUFZO1FBQ1YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLFFBQUMsQ0FBQyxPQUFPLEVBQVcsQ0FBQztRQUNoQyxJQUFJLFFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBQ2xDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN6QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7Z0JBQ3pCLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUM7b0JBQ3BHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixJQUFHLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQzt3QkFDdkUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO3FCQUMvQztpQkFDRjthQUNGO1NBQ0Y7UUFDRCxtQkFBbUI7UUFDbkIsSUFBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxFQUFDO1lBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxFQUFDO1lBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBckRELG9CQXFEQzs7Ozs7Ozs7Ozs7Ozs7OztBQzFERCxvR0FBd0U7QUFJeEUsTUFBYSxNQUFPLFNBQVEsYUFBSztJQUUvQixZQUFZLEtBQWUsRUFBQyxTQUEwQixhQUFLLENBQUMsY0FBYztRQUN4RSxLQUFLLENBQUMsS0FBSyxFQUFDO1lBQ1YsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUpMLGVBQVUsR0FBRyxzQkFBc0I7UUFLakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsa0JBQVUsQ0FBQyxNQUFNLENBQUM7SUFDdEMsQ0FBQztJQUNELFlBQVk7UUFDVixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxRQUFRLEdBQW1CLEVBQUUsQ0FBQztRQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUM3QyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUM3QyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQzdDLE9BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENB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QUFJLEtBQUssWUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEgsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUNuRjtZQUNELElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssa0JBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksWUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFO2dCQUMxSCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDM0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QjtZQUNELElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssa0JBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksWUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFO2dCQUMxSCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFR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QUNqQixDQUFDO1FBRUYsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLFdBQUksQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxlQUFNLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksZUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLGFBQUssQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxXQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksZUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLGVBQU0sQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxXQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOWUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLFdBQUksQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxlQUFNLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksZUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLGFBQUssQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxXQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLElBQUksZUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLGVBQU0sQ0FBQyxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxXQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOWUsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDaEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxXQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksS0FBSyxHQUFHLElBQUksV0FBSSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsRUFBQyxD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VUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDOUUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUN4RCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFJLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0ksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1RSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7SUFDbEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNwQixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDekQ7U0FDSTtRQUNILENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN2QztJQUNELENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQUVZLHVCQUFlLEdBQUcsQ0FBQyxDQUFnQixFQUFFLENBQWMsRUFBRSxFQUFFO0lBQ2xFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDdEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDeEUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEwsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25NLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM5RSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDM0UsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUN6QyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDakUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUIsSUFBRyxDQUFDLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUM7UUFDakMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQ2pCLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUNyQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFDYixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFDWixDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksRUFDckIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFDLEVBQ2IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNYLEtBQUssRUFDTCxNQUFNLENBQ1A7S0FDRjtTQUNJLElBQUcsQ0FBQyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFDO1FBQ3hDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUMvRCxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDakUsSUFBSSxpQkFBaUIsR0FBRyxLQUFLLEdBQUMsU0FBUztRQUN2QyxJQUFJLGlCQUFpQixHQUFHLE1BQU0sR0FBQyxVQUFVLENBQUM7UUFDMUMsSUFBRyxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsTUFBTSxJQUFJLGlCQUFpQixHQUFHLENBQUMsR0FBRyxNQUFNLEVBQUM7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLEdBQUcsaUJBQWlCLENBQUM7U0FDM0Q7UUFFRixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsaUJBQWlCLEVBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQztZQUN6QyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsaUJBQWlCLEVBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQztnQkFDekMsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDO2dCQUMxQixJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQzVCLElBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLEtBQUssR0FBRyxPQUFPLEVBQUM7b0JBQ3ZDLFNBQVMsR0FBRyxLQUFLLEdBQUcsU0FBUyxDQUFDO2lCQUMvQjtnQkFDRCxJQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxNQUFNLEdBQUcsT0FBTyxFQUFDO29CQUN6QyxVQUFVLEdBQUcsTUFBTSxHQUFHLFVBQVUsQ0FBQztpQkFDbEM7Z0JBQ0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQ2xCLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUNyQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFDYixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFDWixDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksRUFDckIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQ3RCLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxFQUN4QixDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsRUFDMUIsU0FBUyxFQUNULFVBQVUsQ0FDVjthQUNGO1NBRUY7S0FDRDtJQUdELENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQUVZLDZCQUFxQixHQUFHLENBQUMsT0FBaUMsRUFBRSxJQUFlLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhLEVBQUUsU0FBZ0IsRUFBRSxNQUFjLEVBQUUsRUFBRTtJQUNqSyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDcEUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNySixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqSyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ2hELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDOUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDNUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDckQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBRVkscUJBQWEsR0FBRyxDQUFDLE9BQWlDLEVBQUUsSUFBZSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYSxFQUFFLFNBQWdCLEVBQUUsTUFBYyxFQUFFLEVBQUU7SUFDekosSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3BFLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckosSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakssSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUNoRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFH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QyxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUM3QztnQkFDRCxLQUFLLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRTtvQkFDNUMsaUJBQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDWjthQUNGO1lBQ0QsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUIsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFFdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztZQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDNUIsSUFBSSxhQUFLLEVBQUU7Z0JBQ1QsOEJBQXNCLEVBQUUsQ0FBQztnQkFDekIsNEJBQW9CLEVBQUUsQ0FBQztnQkFDdkIsNkJBQXFCLEVBQUUsQ0FBQzthQUN6QjtZQUdELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNyQiwwQ0FBMEM7Z0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDekI7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQTlRRCxvQkE4UUMiLCJmaWxlIjoidmFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZ2FtZS9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHt2ZWxvY2l0eSxvYmpfc3RhdGUscm9vbV9zdGF0ZX0gZnJvbSBcIi4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge2dhbWUsR2V0Vmlld3BvcnREaW1lbnNpb25zLHZpZXdwb3J0fSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7Qm9hcmQsIHNpZGV9IGZyb20gXCIuLi9nYW1lL3Jvb21zL0JvYXJkXCI7XHJcbmltcG9ydCB7IHBpZWNlIH0gZnJvbSBcIi4vb2JqZWN0cy9hYnN0cmFjdC9waWVjZVwiO1xyXG5sZXQgY2FudmFzX2VsZW1lbnQ6SFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHsgYm9hcmRfZnVuY3Rpb25zOiBhbnk7IH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGdsb2JhbHN7XHJcbiAgdGVzdDpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGxldCBnID0gbmV3IGdhbWU8Z2xvYmFscz4oY2FudmFzX2VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpLHtcclxuICB0ZXN0OjBcclxufSk7XHJcbi8qXHJcbndpbmRvdy5ib2FyZF9mdW5jdGlvbnMgPSB7fTtcclxuXHJcbndpbmRvdy5ib2FyZF9mdW5jdGlvbnMuYmFja3dhcmRzID0gKCk9PntcclxuICBsZXQgcm9vbSA9IGcuZ2V0Um9vbSgpIGFzIEJvYXJkO1xyXG4gIGZvcihsZXQgbW92ZSBvZiByb29tLnN0YXRlLmxhc3RfbW92ZS5yZXZlcnNlKCkpe1xyXG4gICAgbGV0IHBpZWNlOnBpZWNlO1xyXG4gICAgXHJcbiAgICBzd2l0Y2gobW92ZS50eXBlKXtcclxuICAgICAgY2FzZSBcInJlbW92ZVwiOlxyXG4gICAgICAgIHJvb20uYWRkX3BpZWNlX2Zyb21fdHlwZShtb3ZlLm9sZF9waWVjZSxtb3ZlLm9sZF9wb3NpdGlvbixtb3ZlLnNpZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICBjYXNlIFwiYWRkXCI6XHJcbiAgICAgICAgcGllY2UgPSByb29tLmdldF9waWVjZShtb3ZlLm9sZF9wb3NpdGlvbikuZmlsdGVyKChwKT0+cC5zdGF0ZS5zaWRlID09PSBtb3ZlLnNpZGUgJiYgcC5zdGF0ZS50eXBlID09PSBtb3ZlLm5ld19waWVjZSlbMF07XHJcbiAgICAgICAgcm9vbS5yZW1vdmVfcGllY2UocGllY2UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgIGNhc2UgXCJtb3ZlXCI6XHJcbiAgICAgICAgcGllY2UgPSByb29tLmdldF9waWVjZShtb3ZlLm5ld19wb3NpdGlvbikuZmlsdGVyKChwKT0+cC5zdGF0ZS5zaWRlID09PSBtb3ZlLnNpZGUgJiYgcC5zdGF0ZS50eXBlID09PSBtb3ZlLm5ld19waWVjZSlbMF1cclxuICAgICAgICBwaWVjZS5tb3ZldG9Db3Jkcyhtb3ZlLm9sZF9wb3NpdGlvbik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgcm9vbS5zdGF0ZS5hZnRlcl9oaXN0b3J5LnVuc2hpZnQocm9vbS5zdGF0ZS5sYXN0X21vdmUpO1xyXG4gIHJvb20uc3RhdGUubGFzdF9tb3ZlID0gcm9vbS5zdGF0ZS5iZWZvcmVfaGlzdG9yeS5wb3AoKTtcclxuICByb29tLnN0YXRlLnR1cm4gPSByb29tLnN0YXRlLnR1cm4gPT0gc2lkZS53aGl0ZSA/IHNpZGUuYmxhY2sgOiBzaWRlLndoaXRlO1xyXG59XHJcbiovXHJcbmcubG9hZFJvb21TdHJpbmcoXCJPdmVyd29ybGRcIik7XHJcblxyXG4iLCJpbXBvcnQge3BpZWNlLHNpZGUscGllY2VfdHlwZSxwaWVjZV9wYXJhbWV0ZXJzfSBmcm9tIFwiLi9hYnN0cmFjdC9waWVjZVwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSwgcG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCaXNob3AgZXh0ZW5kcyBwaWVjZXtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvYmlzaG9wLnBuZ1wiXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0gcGllY2UuZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUse1xyXG4gICAgICBzaWRlOnBhcmFtcy5zaWRlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGUudHlwZSA9IHBpZWNlX3R5cGUuYmlzaG9wO1xyXG4gIH1cclxuICBnZXRBdHRhY2tpbmcoKTpBcnJheTxwb3NpdGlvbj57XHJcbiAgICByZXR1cm4gdGhpcy5hdHRhY2tEaWFnb25hbCgpO1xyXG4gIH1cclxufSIsIlxuICAgIFxuICAgIGltcG9ydCB7IFRleHQgfSBmcm9tIFwiLi4vLi4vbGliL2h1ZFwiO1xuaW1wb3J0IHtvYmp9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XG4gICAgaW1wb3J0IHsgb2JqX3N0YXRlLCBwb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcbmltcG9ydCB7IGd9IGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQge2RlZXB9IGZyb20gXCIuLi8uLi92YW5cIjtcbiAgICBcbiAgICBpbnRlcmZhY2UgQm9hcmRfTGFiZWxfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIGludGVyZmFjZSBCb2FyZF9MYWJlbF9wYXJhbWV0ZXJze1xuICAgICAgY2hhcmFjdGVyOnN0cmluZ1xuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgQm9hcmRfTGFiZWwgZXh0ZW5kcyBvYmp7XG4gICAgICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvRXJyb3IucG5nXCI7XG4gICAgICBoZWlnaHQgPSAxMDA7XG4gICAgICB3aWR0aCA9IDEwMDtcbiAgICAgIHRhZ3M6QXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIHJvdGF0aW9uID0gMDtcbiAgICAgIHNjYWxpbmcgPSAxO1xuICAgICAgcGFyYW1zOkJvYXJkX0xhYmVsX3BhcmFtZXRlcnM7XG4gICAgICBib3VuZCA9IGZhbHNlO1xuICAgICAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOkJvYXJkX0xhYmVsX3BhcmFtZXRlcnMgPSB7XG4gICAgICAgIGNoYXJhY3RlcjpcIkFcIlxuICAgICAgfVxuICAgICAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpCb2FyZF9MYWJlbF9wYXJhbWV0ZXJzID0gZGVlcChCb2FyZF9MYWJlbC5kZWZhdWx0X3BhcmFtcykpe1xuICAgICAgICBzdXBlcihzdGF0ZSxwYXJhbXMpO1xuICAgICAgfVxuICAgICAgc3RhdGVmKHRpbWVfZGVsdGE6bnVtYmVyKXtcbiAgICAgICAgaWYoZy5nZXRSb29tKCkgJiYgIXRoaXMuYm91bmQpe1xuICAgICAgICAgIHRoaXMuYm91bmQgPSB0cnVlO1xuICAgICAgICAgIGcuZ2V0Um9vbSgpLnRleHRfbm9kZXMucHVzaChuZXcgVGV4dCh7XG4gICAgICAgICAgICBwb3NpdGlvbjp0aGlzLnN0YXRlLnBvc2l0aW9uLFxuICAgICAgICAgICAgc2l6ZToyMixcbiAgICAgICAgICAgIHNjYWxpbmc6MSxcbiAgICAgICAgICAgIGZvbnQ6XCJBcmlhbFwiLFxuICAgICAgICAgICAgY29sb3I6XCJ3aGl0ZVwiXG4gICAgICAgICAgfSwoKT0+dGhpcy5wYXJhbXMuY2hhcmFjdGVyKSk7XG4gICAgICAgICAgdGhpcy50aWNrX3N0YXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlbmRlcmYodGltZV9kZWx0YTpudW1iZXIpe1xuICAgICAgIHJldHVybiBzdXBlci5yZW5kZXJmKHRpbWVfZGVsdGEpOyBcbiAgICAgIH1cbiAgICAgIHJlZ2lzdGVyX2FuaW1hdGlvbnMoKXtcbiAgICBcbiAgICAgIH1cbiAgICAgIHJlZ2lzdGVyX2F1ZGlvKCl7XG4gICAgXG4gICAgICB9XG4gICAgICByZWdpc3Rlcl9jb250cm9scygpe1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgIiwiaW1wb3J0IHsgZXhlY190eXBlIH0gZnJvbSBcIi4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBHb29tYmEsIGRpcmVjdGlvbiwgUGxheWVyX1BhcmFtcyB9IGZyb20gXCIuL0dvb21iYVwiO1xyXG5pbXBvcnQge29ial9zdGF0ZX0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVkUGxheWVyIGV4dGVuZHMgR29vbWJhIHtcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOlBsYXllcl9QYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUscGFyYW1zKTtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcclxuICB9XHJcbiAgdGFncyA9IFtcInBsYXllclwiXTtcclxuICByZWdpc3RlckNvbnRyb2xzKCkge1xyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIktleUFcIiwgZXhlY190eXBlLnJlcGVhdCwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS54ID4gLTEwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54IC0gMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwiS2V5QVwiLCBleGVjX3R5cGUub25jZSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5sZWZ0O1xyXG4gICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggPSB0aGlzLnN0YXRlLnZlbG9jaXR5LnggLSAwLjE7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJtb3VzZTBkb3duXCIsIGV4ZWNfdHlwZS5yZXBlYXQsICgpID0+IHtcclxuICAgICAgdGhpcy5hdWRpby5wbGF5KFwiZXhwbG9zaW9uXCIsIDAuNCk7XHJcbiAgICB9LCA0MDApO1xyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIktleURcIiwgZXhlY190eXBlLnJlcGVhdCwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS54IDwgMTApIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggPSB0aGlzLnN0YXRlLnZlbG9jaXR5LnggKyAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJLZXlEXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdGUuZGlyZWN0aW9uID0gZGlyZWN0aW9uLnJpZ2h0O1xyXG4gICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggPSB0aGlzLnN0YXRlLnZlbG9jaXR5LnggKyAwLjE7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJTcGFjZVwiLCBleGVjX3R5cGUub25jZSwgKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuc3RhdGUuanVtcGluZykge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueSArPSAyNTtcclxuICAgICAgICB0aGlzLmF1ZGlvLnBsYXkoXCJzbGltZVwiLCAwLjEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgb2JqX3N0YXRlLCBwb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuXHJcbmludGVyZmFjZSBjdXJzb3JfcGFyYW1ze1xyXG4gIGlkOnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3Vyc29yIGV4dGVuZHMgb2JqIHtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvY3Vyc29yLnBuZ1wiO1xyXG4gIGhlaWdodCA9IDY0O1xyXG4gIHdpZHRoID0gNjQ7XHJcbiAgY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgcmVuZGVyID0gdHJ1ZTtcclxuICBncmF2aXR5ID0gZmFsc2U7XHJcbiAgdGFncyA9IFtcIkN1cnNvclwiXTtcclxuICBzdGF0ZWYodDpudW1iZXIpe1xyXG4gICAgc3VwZXIuc3RhdGVmKHQpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52ZWxvY2l0eSk7XHJcbiAgfVxyXG59XHJcbiIsIlxuICAgIFxuICAgIGltcG9ydCB7b2JqfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xuICAgIGltcG9ydCB7IG9ial9zdGF0ZSwgcG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XG5pbXBvcnQgeyBnIH0gZnJvbSBcIi4uL21haW5cIjtcbiAgICBcbiAgICBpbnRlcmZhY2UgRG9vcl9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgaW50ZXJmYWNlIERvb3JfcGFyYW1ldGVyc3tcbiAgICAgIGxvY2F0aW9uOnN0cmluZyxcbiAgICAgIHRlc3Q6Ym9vbGVhbixcbiAgICAgIHllcDpudW1iZXJcbiAgICB9XG4gICAgXG4gICAgZXhwb3J0IGNsYXNzIERvb3IgZXh0ZW5kcyBvYmp7XG4gICAgICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvdGFyZ2V0LnBuZ1wiO1xuICAgICAgaGVpZ2h0ID0gMTAwO1xuICAgICAgd2lkdGggPSAxMDA7XG4gICAgICB0YWdzOkFycmF5PHN0cmluZz4gPSBbXTtcbiAgICAgIGNvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgIHN0YXRlOkRvb3Jfc3RhdGU7XG4gICAgICBwYXJhbXM6RG9vcl9wYXJhbWV0ZXJzO1xuICAgICAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOkRvb3JfcGFyYW1ldGVycyA9IHtcbiAgICAgICAgbG9jYXRpb246XCJVbmRlcndvcmxkXCIsXG4gICAgICAgIHRlc3Q6dHJ1ZSxcbiAgICAgICAgeWVwOjE1XG4gICAgICB9XG4gICAgICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOkRvb3JfcGFyYW1ldGVycyA9IERvb3IuZGVmYXVsdF9wYXJhbXMpe1xuICAgICAgICBzdXBlcihzdGF0ZSxwYXJhbXMpO1xuICAgICAgfVxuICAgICAgc3RhdGVmKHRpbWVfZGVsdGE6bnVtYmVyKXtcbiAgICAgICAgbGV0IGNvbGxpZGVzID0gZy5nZXRSb29tKCkuY2hlY2tDb2xsaXNpb25zKHRoaXMuZ2V0RnVsbENvbGxpc2lvbkJveCgpKVxuICAgICAgICBmb3IobGV0IG9iaiBvZiBjb2xsaWRlcyl7XG4gICAgICAgICAgaWYob2JqLnRhZ3MuaW5jbHVkZXMoXCJwbGF5ZXJcIikpe1xuICAgICAgICAgICAgZy5sb2FkUm9vbVN0cmluZyh0aGlzLnBhcmFtcy5sb2NhdGlvbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZW5kZXJmKHRpbWVfZGVsdGE6bnVtYmVyKXtcbiAgICAgICByZXR1cm4gc3VwZXIucmVuZGVyZih0aW1lX2RlbHRhKTsgXG4gICAgICB9XG4gICAgICByZWdpc3RlckFuaW1hdGlvbnMoKXtcbiAgICBcbiAgICAgIH1cbiAgICAgIHJlZ2lzdGVyQXVkaW8oKXtcbiAgICBcbiAgICAgIH1cbiAgICAgIHJlZ2lzdGVyQ29udHJvbHMoKXtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICIsImltcG9ydCB7IHZlbG9jaXR5LCBvYmpfc3RhdGUsIHN0YXRlX2Z1bmMscG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHsgc3ByaXRlLCBzcHJpdGVfZ2VuIH0gZnJvbSBcIi4uLy4uL2xpYi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgcGxhdGZvcm1lcl9vYmosIHBsYXRmb3JtZXJfb2JqX2NvbXBvc2l0ZSwgcGxhdF9zdGF0ZSB9IGZyb20gXCIuL2Fic3RyYWN0L3BsYXRmb3JtZXJfb2JqXCI7XHJcbmltcG9ydCB7IFBvbGxfTW91c2UgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi4vLi4vbGliL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQgeyBCaW5kIH0gZnJvbSBcIi4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQge1RleHRfTm9kZSxUZXh0fSBmcm9tIFwiLi4vLi4vbGliL2h1ZFwiO1xyXG5pbXBvcnQgeyBPdmVyd29ybGQgfSBmcm9tIFwiLi4vcm9vbXMvT3ZlcndvcmxkXCI7XHJcbmltcG9ydCB7IGcgfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGVudW0gZGlyZWN0aW9uIHtcclxuICBsZWZ0LFxyXG4gIHJpZ2h0XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZ29vbWJhX3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRlLCBwbGF0X3N0YXRlIHtcclxuICBkaXJlY3Rpb246IGRpcmVjdGlvbixcclxuICBqdW1waW5nOiBib29sZWFuLFxyXG4gIHRpbWVzX2FpcnNob3Q6IG51bWJlcixcclxuICBtYXhfdGltZXNfYWlyc2hvdDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZ3VuX3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRlIHtcclxuICByb3RhdGlvbjogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGxheWVyX1BhcmFtc3tcclxuICBpZDpzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIGdvb21iYV9wYXJhbXN7XHJcbiAgaWQ/OnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR29vbWJhIGV4dGVuZHMgcGxhdGZvcm1lcl9vYmp7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2ZvbGRlci9yb2JvdC5wbmdcIjtcclxuICBoZWlnaHQgPSAxNDk7XHJcbiAgd2lkdGggPSAxNDk7XHJcbiAgdGFncyA9IFtcImR1bW15XCJdXHJcbiAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICBoZWFsdGhfdGV4dDogVGV4dDtcclxuICBzdGF0ZTpnb29tYmFfc3RhdGU7XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtZXRlcnM6Z29vbWJhX3BhcmFtcyA9IEdvb21iYS5kZWZhdWx0X3BhcmFtcykge1xyXG4gICAgXHJcbiAgICBzdXBlcihzdGF0ZSxwYXJhbWV0ZXJzKTtcclxuICAgIGlmIChwYXJhbWV0ZXJzLmlkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmlkID0gcGFyYW1ldGVycy5pZDtcclxuICAgIH1cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSx7XHJcbiAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLmxlZnQsXHJcbiAgICAgIGp1bXBpbmc6IGZhbHNlLFxyXG4gICAgICBoZWFsdGg6IDEwMCxcclxuICAgICAgdGltZXNfYWlyc2hvdDogMCxcclxuICAgICAgbWF4X3RpbWVzX2FpcnNob3Q6IDBcclxuICAgIH0pXHJcbiAgICAvL3RoaXMuYW5pbWF0aW9ucy5wbGF5KFwid2FsazFcIik7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyQW5pbWF0aW9ucygpIHtcclxuICAgIGxldCBzcHJpdGVzID0gc3ByaXRlX2dlbih0aGlzLnNwcml0ZV9zaGVldCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZChcIndhbGsxXCIsIFtcclxuICAgICAgWzAsIHNwcml0ZXNbMF1bMF1dLFxyXG4gICAgICBbMTAwLCBzcHJpdGVzWzBdWzFdXSxcclxuICAgICAgWzQwMCwgc3ByaXRlc1swXVswXV0sXHJcbiAgICAgIFs1MDAsIHNwcml0ZXNbMF1bMl1dXHJcbiAgICBdLCA4MDApXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKFwid2FsazJcIiwgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVs1XV0sXHJcbiAgICAgIFsxMDAsIHNwcml0ZXNbMF1bNF1dLFxyXG4gICAgICBbNDAwLCBzcHJpdGVzWzBdWzVdXSxcclxuICAgICAgWzUwMCwgc3ByaXRlc1swXVszXV1cclxuICAgIF0sIDgwMClcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoXCJpZGxlbGVmdFwiLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzBdXVxyXG4gICAgXSwgMSk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdpZGxlcmlnaHQnLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzVdXVxyXG4gICAgXSwgMSk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmYWxsbGVmdCcsIFtcclxuICAgICAgWzAsIHNwcml0ZXNbMF1bNl1dXHJcbiAgICBdLCAxKTtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2ZhbGxyaWdodCcsIFtcclxuICAgICAgWzAsIHNwcml0ZXNbMF1bN11dXHJcbiAgICBdLCAxKVxyXG4gIH1cclxuICByZWdpc3RlckF1ZGlvKCkge1xyXG4gICAgdGhpcy5hdWRpby5hZGQoXCJzbGltZVwiLCBcIi4vc291bmRzL2dvb21iYS9zbGltZWJhbGwud2F2XCIpO1xyXG4gICAgdGhpcy5hdWRpby5hZGQoXCJleHBsb3Npb25cIiwgXCIuL3NvdW5kcy9leHBsb3Npb24ubXAzXCIpXHJcbiAgfVxyXG4gIHJlbmRlcmYodDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5qdW1waW5nKSB7XHJcbiAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PSBkaXJlY3Rpb24ubGVmdCA/IFwiZmFsbGxlZnRcIiA6IFwiZmFsbHJpZ2h0XCI7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KGFuaW1hdGlvbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnggPT0gMCAmJiB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPT0gMCkge1xyXG4gICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT0gZGlyZWN0aW9uLmxlZnQgPyBcImlkbGVsZWZ0XCIgOiBcImlkbGVyaWdodFwiO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheShhbmltYXRpb24pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXRoaXMuYW5pbWF0aW9ucy5hbmltYXRpbmcpIHtcclxuICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuc3RhdGUuZGlyZWN0aW9uID09IGRpcmVjdGlvbi5sZWZ0ID8gXCJ3YWxrMVwiIDogXCJ3YWxrMlwiO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheShhbmltYXRpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1cGVyLnJlbmRlcmYodCk7XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIGxldCByb29tID0gZy5nZXRSb29tKCk7XHJcbiAgICBsZXQgY3Vyc29yID0gcm9vbS5nZXRPYmooXCJjdXJzb3JcIik7XHJcbiAgICBpZiAodGhpcy5jb2xsaXNpb24pIHtcclxuICAgICAgbGV0IGNvbCA9IHRoaXMuZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gICAgICBpZiAocm9vbS5jaGVja0NvbGxpc2lvbnMoe1xyXG4gICAgICAgIHdpZHRoOiBjb2wud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiAxLFxyXG4gICAgICAgIHg6IGNvbC54LFxyXG4gICAgICAgIHk6IGNvbC55IC0gY29sLmhlaWdodCAvIDIgLSAxLFxyXG4gICAgICB9KS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qdW1waW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tYXhfdGltZXNfYWlyc2hvdCA9IE1hdGgubWF4KHRoaXMuc3RhdGUudGltZXNfYWlyc2hvdCwgdGhpcy5zdGF0ZS5tYXhfdGltZXNfYWlyc2hvdCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS50aW1lc19haXJzaG90ID0gMDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS55ID4gMCkge1xyXG4gICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPSB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgLSAwLjQgKiAxNiAvIHRpbWU7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPCAwKVxyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS55IDwgMCkge1xyXG4gICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPSB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgKyAwLjQgKiAxNiAvIHRpbWU7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPiAwKVxyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS54ID4gMCkge1xyXG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5yaWdodDtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54IC0gMC40ICogMTYgLyB0aW1lOztcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA8IDApIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnggPCAwKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuZGlyZWN0aW9uID0gZGlyZWN0aW9uLmxlZnQ7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCArIDAuNCAqIDE2IC8gdGltZTs7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge3Bvc2l0aW9uLCBvYmpfc3RhdGV9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHsgcm90YXRpb25fbGVuZ3RoIH0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgcGxhdGZvcm1lcl9vYmogfSBmcm9tIFwiLi9hYnN0cmFjdC9wbGF0Zm9ybWVyX29ialwiO1xyXG5pbXBvcnQgeyBnIH0gZnJvbSBcIi4uL21haW5cIjtcclxuaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIi4vQ3Vyc29yXCI7XHJcbmltcG9ydCB7IGd1bl9zdGF0ZSwgR29vbWJhIH0gZnJvbSBcIi4vR29vbWJhXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEd1biBleHRlbmRzIHBsYXRmb3JtZXJfb2JqIHtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvZm9sZGVyL2d1bi5wbmdcIjtcclxuICBoZWlnaHQgPSA1MDtcclxuICB3aWR0aCA9IDIwO1xyXG4gIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gIHJlbmRlciA9IHRydWU7XHJcbiAgcGxheWVyOiBHb29tYmE7XHJcbiAgZ3Jhdml0eSA9IGZhbHNlO1xyXG4gIGN1cnNvcjogQ3Vyc29yO1xyXG4gIHRhZ3MgPSBbXCJndW5cIl07XHJcbiAgc3RhdGVmKHQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMucGxheWVyKSB7XHJcbiAgICAgIGxldCBhbmdsZSA9IHRoaXMucGxheWVyLmFuZ2xlVG93YXJkcyh0aGlzLmN1cnNvcik7XHJcbiAgICAgIGxldCByb3QgPSByb3RhdGlvbl9sZW5ndGgoNTAsIGFuZ2xlKTtcclxuICAgICAgdGhpcy5zdGF0ZS5yb3RhdGlvbiA9IGFuZ2xlO1xyXG4gICAgICB0aGlzLnN0YXRlLnBvc2l0aW9uID0ge1xyXG4gICAgICAgIHg6IHJvdC54ICsgdGhpcy5wbGF5ZXIuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OiByb3QueSArIHRoaXMucGxheWVyLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgICAgfTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbGV0IHJvb20gPSBnLmdldFJvb20oKTtcclxuICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBhcmVudC5nZXRJdGVtc0J5VGFnKFwicGxheWVyXCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgdGhpcy5jdXJzb3IgPSA8Q3Vyc29yPnJvb20uZ2V0T2JqQnlUYWcoXCJDdXJzb3JcIilbMF07XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge3BpZWNlLHNpZGUscGllY2VfdHlwZSxwaWVjZV9wYXJhbWV0ZXJzfSBmcm9tIFwiLi9hYnN0cmFjdC9waWVjZVwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSwgcG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtCb2FyZH0gZnJvbSBcIi4uL3Jvb21zL0JvYXJkXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBLaW5nIGV4dGVuZHMgcGllY2V7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2tpbmcucG5nXCJcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOnBpZWNlX3BhcmFtZXRlcnMgPSBwaWVjZS5kZWZhdWx0X3BhcmFtcyl7XHJcbiAgICBzdXBlcihzdGF0ZSx7XHJcbiAgICAgIHNpZGU6cGFyYW1zLnNpZGVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGF0ZS50eXBlID0gcGllY2VfdHlwZS5raW5nO1xyXG4gIH1cclxuICBjaGVja19sZWZ0X2Nhc3RsZShyb29tOkJvYXJkLGNvcmRzOnBvc2l0aW9uKXtcclxuICAgIGlmKCF0aGlzLnN0YXRlLmhhc19tb3ZlZCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54IC0gMSx5OmNvcmRzLnl9KS5sZW5ndGggPT0gMCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54IC0gMix5OmNvcmRzLnl9KS5sZW5ndGggPT0gMCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54IC0gMywgeTpjb3Jkcy55fSkubGVuZ3RoID09IDApe1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coXCJ5YVwiKVxyXG4gICAgICBsZXQgcm9vayA9IHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggLSA0LHk6Y29yZHMueX0pO1xyXG4gICAgICBpZihyb29rLmxlbmd0aCA+IDAgJiYgIXJvb2tbMF0uc3RhdGUuaGFzX21vdmVkKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vXCIpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGNoZWNrX3JpZ2h0X2Nhc3RsZShyb29tOkJvYXJkLGNvcmRzOnBvc2l0aW9uKXtcclxuICAgIGlmKCF0aGlzLnN0YXRlLmhhc19tb3ZlZCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54ICsgMSx5OmNvcmRzLnl9KS5sZW5ndGggPT0gMCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54ICsgMix5OmNvcmRzLnl9KS5sZW5ndGggPT0gMCl7XHJcbiAgICAgIGxldCByb29rID0gcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCArIDMseTpjb3Jkcy55fSk7XHJcbiAgICAgIGlmKHJvb2subGVuZ3RoID4gMCAmJiAhcm9va1swXS5zdGF0ZS5oYXNfbW92ZWQpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGdldEF0dGFja2luZygpOkFycmF5PHBvc2l0aW9uPntcclxuICAgIGxldCBjb3JkcyA9IHRoaXMuZ2V0Q29yZHMoKTtcclxuICAgIGxldCByb29tID0gZy5nZXRSb29tKCkgYXMgQm9hcmQ7XHJcbiAgICBsZXQgYXR0YWNrZWQ6QXJyYXk8cG9zaXRpb24+ID0gW107XHJcbiAgICBmb3IobGV0IHggPSAtMTt4IDw9IDE7IHgrKyl7XHJcbiAgICAgIGZvcihsZXQgeSA9IC0xO3kgPD0gMTsgeSsrKXtcclxuICAgICAgICBpZigoeCAhPT0gMCB8fCB5ICE9PSAwKSAmJiBjb3Jkcy54ICsgeCA+PSAwICYmIGNvcmRzLnggKyB4IDwgOCAmJiBjb3Jkcy55ICsgeSA+PSAwICYmIGNvcmRzLnkgKyB5IDwgOCl7XHJcbiAgICAgICAgICBsZXQgcGllY2UgPSByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54ICsgeCwgeTpjb3Jkcy55ICsgeX0pO1xyXG4gICAgICAgICAgbGV0IHNhZmUgPSB0cnVlO1xyXG4gICAgICAgICAgaWYoc2FmZSAmJiBwaWVjZS5sZW5ndGggPT09IDAgfHwgcGllY2VbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKXtcclxuICAgICAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54ICsgeCwgeTpjb3Jkcy55ICsgeX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9jYXN0bGUgY2hlY2sgbGVmdFxyXG4gICAgaWYodGhpcy5jaGVja19sZWZ0X2Nhc3RsZShyb29tLGNvcmRzKSl7XHJcbiAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCAtIDIseTpjb3Jkcy55fSk7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmNoZWNrX3JpZ2h0X2Nhc3RsZShyb29tLGNvcmRzKSl7XHJcbiAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCArIDIseTpjb3Jkcy55fSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXR0YWNrZWQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtwaWVjZSxzaWRlLHBpZWNlX3R5cGUscGllY2VfcGFyYW1ldGVyc30gZnJvbSBcIi4vYWJzdHJhY3QvcGllY2VcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUsIHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBLbmlnaHQgZXh0ZW5kcyBwaWVjZXtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMva25pZ2h0LnBuZ1wiXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0gcGllY2UuZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUse1xyXG4gICAgICBzaWRlOnBhcmFtcy5zaWRlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGUudHlwZSA9IHBpZWNlX3R5cGUua25pZ2h0O1xyXG4gIH1cclxuICBnZXRBdHRhY2tpbmcoKTpBcnJheTxwb3NpdGlvbj57XHJcbiAgICBsZXQgY29yZHMgPSB0aGlzLmdldENvcmRzKCk7XHJcbiAgICBsZXQgYXR0YWNrZWQ6QXJyYXk8cG9zaXRpb24+ID0gW107XHJcbiAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggKyAxLHk6Y29yZHMueSArIDJ9KTtcclxuICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCAtIDEseTpjb3Jkcy55ICsgMn0pO1xyXG4gICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54ICsgMix5OmNvcmRzLnkgKyAxfSk7XHJcbiAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggKyAyLHk6Y29yZHMueSAtIDF9KTtcclxuICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCArIDEseTpjb3Jkcy55IC0gMn0pO1xyXG4gICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54IC0gMSx5OmNvcmRzLnkgLSAyfSk7XHJcbiAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggLSAyLHk6Y29yZHMueSArIDF9KTtcclxuICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCAtIDIseTpjb3Jkcy55IC0gMX0pO1xyXG4gICAgcmV0dXJuKGF0dGFja2VkLmZpbHRlcigoeCk9PngueCA+PSAwICYmIHgueCA8IDggJiYgeC55ID49IDAgJiYgeC55IDwgOCkpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IG9iaiB9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IEJvYXJkLCBzaWRlIH0gZnJvbSBcIi4uL3Jvb21zL0JvYXJkXCI7XHJcbmltcG9ydCB7IHBpZWNlLCBwaWVjZV90eXBlIH0gZnJvbSBcIi4vYWJzdHJhY3QvcGllY2VcIjtcclxuaW1wb3J0IHsgUXVlZW4gfSBmcm9tIFwiLi9RdWVlblwiO1xyXG5pbXBvcnQgeyBleGVjX3R5cGUgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSwgcG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IGcgfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5pbnRlcmZhY2UgbW92ZV9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZSB7XHJcbiAgcG9zaXRpb246IHtcclxuICAgIHg6IG51bWJlcixcclxuICAgIHk6IG51bWJlclxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmUgZXh0ZW5kcyBvYmoge1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9hdHRhY2tlZC5wbmdcIjtcclxuICBoZWlnaHQgPSAxMDA7XHJcbiAgd2lkdGggPSAxMDA7XHJcbiAgcmVuZGVyID0gZmFsc2U7XHJcbiAgbGF5ZXIgPSAyO1xyXG4gIHRpY2tfc3RhdGUgPSBmYWxzZTtcclxuICBzYXZlX3RvX2ZpbGUgPSBmYWxzZTtcclxuICB0YWdzID0gW1wibW92ZVwiXTtcclxuICBjb25zdHJ1Y3RvcihzdGF0ZTogb2JqX3N0YXRlKSB7XHJcbiAgICBzdXBlcihzdGF0ZSk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IHN0YXRlLnBvc2l0aW9uLnggKiB0aGlzLndpZHRoIC0gMzUwLFxyXG4gICAgICAgIHk6IHN0YXRlLnBvc2l0aW9uLnkgKiB0aGlzLmhlaWdodCAtIDM1MFxyXG4gICAgICB9LFxyXG4gICAgICB2ZWxvY2l0eToge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgICB9LFxyXG4gICAgICByb3RhdGlvbjogMCxcclxuICAgICAgc2NhbGluZzoge1xyXG4gICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgIGhlaWdodDogMVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldENvcmRzKCk6IHBvc2l0aW9uIHtcclxuICAgIHJldHVybiB7IHg6IE1hdGguZmxvb3IoKHRoaXMuc3RhdGUucG9zaXRpb24ueCArIDM1MCkgLyAxMDApLCB5OiBNYXRoLmZsb29yKCh0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKyAzNTApIC8gMTAwKSB9O1xyXG4gIH1cclxuICBkcm9wKCl7XHJcbiAgICBpZiAodGhpcy5yZW5kZXIpIHtcclxuICAgICAgbGV0IHJvb20gPSBnLnN0YXRlLmN1cnJlbnRfcm9vbSBhcyBCb2FyZDtcclxuICAgICAgcm9vbS5zdGF0ZS5zZWxlY3RlZC5zdGF0ZS5wb3NpdGlvbiA9IHJvb20uc3RhdGUuc2VsZWN0ZWRfb3JpZ2luYWxfcG9zaXRpb247XHJcbiAgICAgIHJvb20uc3RhdGUuYmVmb3JlX2hpc3RvcnkucHVzaChyb29tLnN0YXRlLmxhc3RfbW92ZSk7XHJcbiAgICAgIHJvb20uc3RhdGUubGFzdF9tb3ZlID0gW107XHJcbiAgICAgIGxldCBwID0gcm9vbS5nZXRfcGllY2UodGhpcy5nZXRDb3JkcygpKSBhcyBwaWVjZVtdO1xyXG4gICAgICBsZXQgcyA9IHJvb20uc3RhdGUuc2VsZWN0ZWQ7XHJcbiAgICAgIGlmIChzLnN0YXRlLnR5cGUgPT09IHBpZWNlX3R5cGUua2luZyAmJiAhcy5zdGF0ZS5oYXNfbW92ZWQgJiYgdGhpcy5nZXRDb3JkcygpLnggPT09IDYpIHtcclxuICAgICAgICBsZXQgcm9va3MgPSByb29tLmdldF9waWVjZSh7IHg6IDcsIHk6IHMuZ2V0Q29yZHMoKS55IH0pO1xyXG4gICAgICAgIHJvb2tzWzBdLm1vdmV0b0NvcmRzSGlzdG9yeSh7IHg6IDUsIHk6IHMuZ2V0Q29yZHMoKS55IH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzLnN0YXRlLnR5cGUgPT09IHBpZWNlX3R5cGUua2luZyAmJiAhcy5zdGF0ZS5oYXNfbW92ZWQgJiYgdGhpcy5nZXRDb3JkcygpLnggPT09IDIpIHtcclxuICAgICAgICBsZXQgcm9va3MgPSByb29tLmdldF9waWVjZSh7IHg6IDAsIHk6IHMuZ2V0Q29yZHMoKS55IH0pO1xyXG4gICAgICAgIHJvb2tzWzBdLm1vdmV0b0NvcmRzSGlzdG9yeSh7IHg6IDMsIHk6IHMuZ2V0Q29yZHMoKS55IH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzLnN0YXRlLnR5cGUgPT09IHBpZWNlX3R5cGUucGF3biAmJiAhcy5zdGF0ZS5oYXNfbW92ZWQgJiYgcy5zdGF0ZS5zaWRlID09PSBzaWRlLndoaXRlICYmIHRoaXMuZ2V0Q29yZHMoKS55ID09PSAzKSB7XHJcbiAgICAgICAgcm9vbS5zdGF0ZS53aGl0ZV9ib2FyZFt0aGlzLmdldENvcmRzKCkueF1bdGhpcy5nZXRDb3JkcygpLnkgLSAxXS5lbnBhc3NlbnQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzLnN0YXRlLnR5cGUgPT09IHBpZWNlX3R5cGUucGF3biAmJiAhcy5zdGF0ZS5oYXNfbW92ZWQgJiYgcy5zdGF0ZS5zaWRlID09PSBzaWRlLmJsYWNrICYmIHRoaXMuZ2V0Q29yZHMoKS55ID09PSA0KSB7XHJcbiAgICAgICAgcm9vbS5zdGF0ZS5ibGFja19ib2FyZFt0aGlzLmdldENvcmRzKCkueF1bdGhpcy5nZXRDb3JkcygpLnkgKyAxXS5lbnBhc3NlbnQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzLnN0YXRlLnR5cGUgPT09IHBpZWNlX3R5cGUucGF3biAmJiBzLnN0YXRlLnNpZGUgPT0gc2lkZS5ibGFjayAmJiByb29tLmdldF9tZXRhKHRoaXMuZ2V0Q29yZHMoKSwgc2lkZS53aGl0ZSkuZW5wYXNzZW50KSB7XHJcbiAgICAgICAgbGV0IGYgPSByb29tLmdldF9waWVjZSh7IHg6IHRoaXMuZ2V0Q29yZHMoKS54LCB5OiB0aGlzLmdldENvcmRzKCkueSArIDEgfSk7XHJcbiAgICAgICAgcm9vbS5yZW1vdmVfcGllY2UoZlswXSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHMuc3RhdGUudHlwZSA9PT0gcGllY2VfdHlwZS5wYXduICYmIHMuc3RhdGUuc2lkZSA9PSBzaWRlLndoaXRlICYmIHJvb20uZ2V0X21ldGEodGhpcy5nZXRDb3JkcygpLCBzaWRlLmJsYWNrKS5lbnBhc3NlbnQpIHtcclxuICAgICAgICBsZXQgZiA9IHJvb20uZ2V0X3BpZWNlKHsgeDogdGhpcy5nZXRDb3JkcygpLngsIHk6IHRoaXMuZ2V0Q29yZHMoKS55IC0gMSB9KTtcclxuICAgICAgICByb29tLnJlbW92ZV9waWVjZShmWzBdKTtcclxuICAgICAgfVxyXG4gICAgICBzLnN0YXRlLmhhc19tb3ZlZCA9IHRydWU7XHJcbiAgICAgIGlmIChwLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByb29tLnJlbW92ZV9waWVjZShwWzBdKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoKHRoaXMuZ2V0Q29yZHMoKS55ID09IDcgfHwgdGhpcy5nZXRDb3JkcygpLnkgPT0gMCkgJiYgcy5zdGF0ZS50eXBlID09PSBwaWVjZV90eXBlLnBhd24pIHtcclxuICAgICAgICBsZXQgcXUgPSBuZXcgUXVlZW4oe1xyXG4gICAgICAgICAgcG9zaXRpb246IHRoaXMuZ2V0Q29yZHMoKSxcclxuICAgICAgICAgIHZlbG9jaXR5OiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByb3RhdGlvbjogMCxcclxuICAgICAgICAgIHNjYWxpbmc6IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLCB3aWR0aDogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIHsgc2lkZTogcy5zdGF0ZS5zaWRlIH0pO1xyXG4gICAgICAgIHF1LmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHJvb20uYWRkX3BpZWNlX2hpc3RvcnkocXUpO1xyXG4gICAgICAgICAgcm9vbS5yZW1vdmVfcGllY2Uocyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBpZiAocy5zdGF0ZS5zaWRlID09PSBzaWRlLndoaXRlKSB7XHJcbiAgICAgICAgcm9vbS5jaGFuZ2Vfc2lkZShzaWRlLmJsYWNrKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChzLnN0YXRlLnNpZGUgPT09IHNpZGUuYmxhY2spIHtcclxuICAgICAgICByb29tLmNoYW5nZV9zaWRlKHNpZGUud2hpdGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJvb20uY2xlYXJfYXR0YWNrZWQoKTtcclxuICAgICAgcm9vbS5zdGF0ZS5zZWxlY3RlZC5tb3ZldG9Db3Jkc0hpc3RvcnkodGhpcy5nZXRDb3JkcygpKTtcclxuXHJcbiAgICAgIHJvb20uc3RhdGUuYXR0YWNrZWQgPSBbXTtcclxuICAgICAgcm9vbS5zdGF0ZS5zZWxlY3RlZCA9IHVuZGVmaW5lZDtcclxuICAgICAgcm9vbS5zdGF0ZS5zZWxlY3RlZF9vcmlnaW5hbF9wb3NpdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbiAgcmVnaXN0ZXJDb250cm9scygpIHtcclxuICAgIFxyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIm1vdXNlMVwiLCBleGVjX3R5cGUub25jZSwgKCkgPT4ge1xyXG4gICAgICBpZih0aGlzLnJlbmRlcil7XHJcbiAgICAgICAgbGV0IHJvb20gPSBnLmdldFJvb20oKSBhcyBCb2FyZDtcclxuICAgICAgICByb29tLnN0YXRlLnNlbGVjdGVkX29yaWdpbmFsX3Bvc2l0aW9uID0gcm9vbS5zdGF0ZS5zZWxlY3RlZC5zdGF0ZS5wb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmRyb3AoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gIH1cclxufSIsImltcG9ydCB7cGllY2Usc2lkZSxwaWVjZV90eXBlLHBpZWNlX3BhcmFtZXRlcnN9IGZyb20gXCIuL2Fic3RyYWN0L3BpZWNlXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlLCBwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge0JvYXJkfSBmcm9tIFwiLi4vcm9vbXMvQm9hcmRcIjtcclxuaW1wb3J0IHtnfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhd24gZXh0ZW5kcyBwaWVjZXtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvcGF3bi5wbmdcIlxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6cGllY2VfcGFyYW1ldGVycyA9IHBpZWNlLmRlZmF1bHRfcGFyYW1zKXtcclxuICAgIHN1cGVyKHN0YXRlLHtcclxuICAgICAgc2lkZTpwYXJhbXMuc2lkZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXRlLnR5cGUgPSBwaWVjZV90eXBlLnBhd247XHJcbiAgfVxyXG4gIGdldEF0dGFja2luZygpOkFycmF5PHBvc2l0aW9uPntcclxuICAgIGxldCBhdHRhY2tlZDpBcnJheTxwb3NpdGlvbj4gPSBbXTtcclxuICAgIGxldCBjb3JkcyA9IHRoaXMuZ2V0Q29yZHMoKTtcclxuICAgIGxldCByb29tID0gZy5nZXRSb29tKCkgYXMgQm9hcmQ7XHJcbiAgICBpZih0aGlzLnN0YXRlLnNpZGUgPT0gc2lkZS53aGl0ZSl7XHJcbiAgICAgIGlmKHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLngseTpjb3Jkcy55ICsgMX0pLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54LHk6Y29yZHMueSArIDF9KTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5oYXNfbW92ZWQgJiYgcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCx5OmNvcmRzLnkgKyAyfSkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCx5OmNvcmRzLnkgKyAyfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBsZWZ0X2NvcmRzOnBvc2l0aW9uID0ge3g6Y29yZHMueC0gMSx5OmNvcmRzLnkgKyAxfTtcclxuICAgICAgbGV0IHJpZ2h0X2NvcmRzOnBvc2l0aW9uID0ge3g6Y29yZHMueCsgMSx5OmNvcmRzLnkgKyAxfTsgXHJcbiAgICAgIGxldCBsZWZ0ID0gcm9vbS5nZXRfcGllY2UobGVmdF9jb3Jkcyk7XHJcbiAgICAgIGxldCByaWdodCA9IHJvb20uZ2V0X3BpZWNlKHJpZ2h0X2NvcmRzKTtcclxuICAgICAgbGV0IGxlZnRfZW4gPSByb29tLmdldF9tZXRhKGxlZnRfY29yZHMsc2lkZS5ibGFjayk7XHJcbiAgICAgIGxldCByaWdodF9lbiA9IHJvb20uZ2V0X21ldGEocmlnaHRfY29yZHMsc2lkZS5ibGFjayk7XHJcbiAgICAgIGlmKChjb3Jkcy54IC0gMSA+PSAwKSAmJiAoKGxlZnQubGVuZ3RoID4gMCAmJiBsZWZ0WzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSkgfHwgKGxlZnRfZW4gJiYgbGVmdF9lbi5lbnBhc3NlbnQpKSl7XHJcbiAgICAgICAgYXR0YWNrZWQucHVzaChsZWZ0X2NvcmRzKTtcclxuICAgICAgfVxyXG4gICAgICBpZigoY29yZHMueCArIDEgPCA4KSAmJiAoKHJpZ2h0Lmxlbmd0aCA+IDAgJiYgcmlnaHRbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKSB8fCAocmlnaHRfZW4gJiYgcmlnaHRfZW4uZW5wYXNzZW50KSkpe1xyXG4gICAgICAgIGF0dGFja2VkLnB1c2gocmlnaHRfY29yZHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYocm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCx5OmNvcmRzLnkgLSAxfSkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLngseTpjb3Jkcy55IC0gMX0pO1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmhhc19tb3ZlZCAmJiByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54LHk6Y29yZHMueSAtIDJ9KS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54LHk6Y29yZHMueSAtIDJ9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxlZnRfY29yZHM6cG9zaXRpb24gPSB7eDpjb3Jkcy54IC0gMSx5OmNvcmRzLnkgLSAxfTtcclxuICAgICAgbGV0IHJpZ2h0X2NvcmRzOnBvc2l0aW9uID0ge3g6Y29yZHMueCsgMSx5OmNvcmRzLnkgLSAxfTtcclxuICAgICAgbGV0IGxlZnQgPSByb29tLmdldF9waWVjZShsZWZ0X2NvcmRzKTtcclxuICAgICAgbGV0IHJpZ2h0ID0gcm9vbS5nZXRfcGllY2UocmlnaHRfY29yZHMpO1xyXG4gICAgICBsZXQgbGVmdF9lbiA9IHJvb20uZ2V0X21ldGEobGVmdF9jb3JkcyxzaWRlLndoaXRlKTtcclxuICAgICAgbGV0IHJpZ2h0X2VuID0gcm9vbS5nZXRfbWV0YShyaWdodF9jb3JkcyxzaWRlLndoaXRlKTtcclxuICAgICAgaWYoKGNvcmRzLnggLSAxID49IDApICYmICgobGVmdC5sZW5ndGggPiAwICYmIGxlZnRbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKSB8fCAobGVmdF9lbiAmJiBsZWZ0X2VuLmVucGFzc2VudCkpKXtcclxuICAgICAgICBhdHRhY2tlZC5wdXNoKGxlZnRfY29yZHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKChjb3Jkcy54ICsgMSA8IDgpICYmICgocmlnaHQubGVuZ3RoID4gMCAmJiByaWdodFswXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpIHx8IChyaWdodF9lbiAmJiByaWdodF9lbi5lbnBhc3NlbnQpKSl7XHJcbiAgICAgICAgYXR0YWNrZWQucHVzaChyaWdodF9jb3Jkcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhdHRhY2tlZDtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBvYmpfc3RhdGUsIHBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBjb21wb3NpdGVfb2JqIH0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyX1BhcmFtcyB9IGZyb20gXCIuL0dvb21iYVwiO1xyXG5pbXBvcnQgeyBDb250cm9sbGVkUGxheWVyIH0gZnJvbSBcIi4vQ29udHJvbGxlZFBsYXllclwiO1xyXG5pbXBvcnQgeyBHdW4gfSBmcm9tIFwiLi9HdW5cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY29tcG9zaXRlX29iantcclxuICBlbmVteSA9IHRydWU7XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLCBwYXJhbWV0ZXJzOiBQbGF5ZXJfUGFyYW1zKSB7XHJcbiAgICBzdXBlcihzdGF0ZSk7XHJcbiAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgQ29udHJvbGxlZFBsYXllcihzdGF0ZSwgcGFyYW1ldGVycykpO1xyXG4gICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IEd1bih7XHJcbiAgICAgIHBvc2l0aW9uOnt4OiBzdGF0ZS5wb3NpdGlvbi54LCB5OiBzdGF0ZS5wb3NpdGlvbi55ICsgMTAwfSxcclxuICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICByb3RhdGlvbjowLFxyXG4gICAgICBzY2FsaW5nOntoZWlnaHQ6MSx3aWR0aDoxfVxyXG4gICAgfSxwYXJhbWV0ZXJzKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7cGllY2Usc2lkZSxwaWVjZV90eXBlLHBpZWNlX3BhcmFtZXRlcnN9IGZyb20gXCIuL2Fic3RyYWN0L3BpZWNlXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlLCBwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZWVuIGV4dGVuZHMgcGllY2V7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL3F1ZWVuLnBuZ1wiXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0gcGllY2UuZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUse1xyXG4gICAgICBzaWRlOnBhcmFtcy5zaWRlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGUudHlwZSA9IHBpZWNlX3R5cGUucXVlZW47XHJcbiAgfVxyXG4gIGdldEF0dGFja2luZygpOkFycmF5PHBvc2l0aW9uPntcclxuICAgIHJldHVybiB0aGlzLmF0dGFja0RpYWdvbmFsKCkuY29uY2F0KHRoaXMuYXR0YWNrQ2FyZGluYWwoKSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtwaWVjZSxzaWRlLHBpZWNlX3R5cGUscGllY2VfcGFyYW1ldGVyc30gZnJvbSBcIi4vYWJzdHJhY3QvcGllY2VcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUsIHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7Qm9hcmR9IGZyb20gXCIuLi9yb29tcy9Cb2FyZFwiO1xyXG5pbXBvcnQge2d9IGZyb20gXCIuLi9tYWluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm9vayBleHRlbmRzIHBpZWNle1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9yb29rLnBuZ1wiXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0gcGllY2UuZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUse1xyXG4gICAgICBzaWRlOnBhcmFtcy5zaWRlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGUudHlwZSA9IHBpZWNlX3R5cGUucm9vaztcclxuICB9XHJcbiAgZ2V0QXR0YWNraW5nKCk6QXJyYXk8cG9zaXRpb24+e1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0YWNrQ2FyZGluYWwoKTtcclxuICB9XHJcbn0iLCJcblxuaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcbmltcG9ydCB7IG9ial9zdGF0ZSwgcG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XG5pbXBvcnQgeyBib3ggfSBmcm9tIFwiLi9ib3hcIjtcblxuXG5leHBvcnQgY2xhc3MgUm90YXRvciBleHRlbmRzIGJveCB7XG4gIHN0YXRlZih0aW1lX2RlbHRhOiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXRlLnJvdGF0aW9uICs9ICgwLjA3ICogdGltZV9kZWx0YSlcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBib3ggfSBmcm9tIFwiLi9ib3hcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJ0Qm94IGV4dGVuZHMgYm94IHtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvYm94Mi5wbmdcIjtcclxuICB3aWR0aCA9IDY0O1xyXG4gIGhlaWdodCA9IDUwMDtcclxufVxyXG4iLCJpbXBvcnQge29ian0gZnJvbSBcIi4uLy4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHtwb3NpdGlvbmVkX3Nwcml0ZSwgc3ByaXRlLHNwcml0ZV9nZW59IGZyb20gXCIuLi8uLi8uLi9saWIvc3ByaXRlXCI7XHJcbmltcG9ydCB7Ym9hcmRfc3RhdGUsIEJvYXJkfSBmcm9tIFwiLi4vLi4vcm9vbXMvQm9hcmRcIjtcclxuaW1wb3J0IHsgVW5iaW5kLCBleGVjX3R5cGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7cG9zaXRpb24sb2JqX3N0YXRlfSBmcm9tIFwiLi4vLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uLy4uL21haW5cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgbW92ZXN7XHJcbiAgdHlwZTpzdHJpbmcsXHJcbiAgb2xkX3Bvc2l0aW9uOnBvc2l0aW9uLFxyXG4gIG5ld19wb3NpdGlvbjpwb3NpdGlvbixcclxuICBvbGRfcGllY2U/OnBpZWNlX3R5cGUsXHJcbiAgbmV3X3BpZWNlPzpwaWVjZV90eXBlLFxyXG4gIG1vdmVfcGllY2U/OnBpZWNlLFxyXG4gIHNpZGU6c2lkZVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBzaWRle1xyXG4gIHdoaXRlLFxyXG4gIGJsYWNrXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIHBpZWNlX3R5cGV7XHJcbiAgcGF3bixcclxuICByb29rLFxyXG4gIGJpc2hvcCxcclxuICBxdWVlbixcclxuICBraW5nLFxyXG4gIGtuaWdodFxyXG59XHJcblxyXG5pbnRlcmZhY2UgcGllY2Vfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XHJcbiAgc2lkZTpzaWRlLFxyXG4gIHR5cGU6cGllY2VfdHlwZSxcclxuICBoYXNfbW92ZWQ6Ym9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHBpZWNlX3BhcmFtZXRlcnN7XHJcbiAgc2lkZTpzaWRlXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBwaWVjZSBleHRlbmRzIG9iantcclxuICBoZWlnaHQgPSAxMDA7XHJcbiAgd2lkdGggPSAxMDA7XHJcbiAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICBwYXJhbXM6cGllY2VfcGFyYW1ldGVycztcclxuICBzdGF0ZTpwaWVjZV9zdGF0ZTtcclxuICB0YWdzID0gW1wicGllY2VcIl07XHJcbiAgdGlja19zdGF0ZSA9IGZhbHNlO1xyXG4gIHNhdmVfdG9fZmlsZSA9IGZhbHNlO1xyXG4gIHN0YXRpYyBkZWZhdWx0X3BhcmFtczpwaWVjZV9wYXJhbWV0ZXJzID0ge1xyXG4gICAgc2lkZTpzaWRlLndoaXRlXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6cGllY2VfcGFyYW1ldGVycyA9IHBpZWNlLmRlZmF1bHRfcGFyYW1zKXtcclxuICAgIHN1cGVyKHN0YXRlLHBhcmFtcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwb3NpdGlvbjp7XHJcbiAgICAgICAgeDpzdGF0ZS5wb3NpdGlvbi54ICogdGhpcy53aWR0aCAtIDM1MCxcclxuICAgICAgICB5OnN0YXRlLnBvc2l0aW9uLnkgKiB0aGlzLmhlaWdodCAtIDM1MFxyXG4gICAgICB9LFxyXG4gICAgICB2ZWxvY2l0eTp7XHJcbiAgICAgICAgeDowLFxyXG4gICAgICAgIHk6MFxyXG4gICAgICB9LFxyXG4gICAgICBzaWRlOnBhcmFtcy5zaWRlLFxyXG4gICAgICB0eXBlOnVuZGVmaW5lZCxcclxuICAgICAgaGFzX21vdmVkOmZhbHNlLFxyXG4gICAgICByb3RhdGlvbjpzdGF0ZS5yb3RhdGlvbixcclxuICAgICAgc2NhbGluZzpzdGF0ZS5zY2FsaW5nXHJcbiAgICB9XHJcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcclxuICB9XHJcbiAgbW92ZXRvQ29yZHNIaXN0b3J5KGE6cG9zaXRpb24pe1xyXG4gICAgbGV0IHJvb20gPSBnLmdldFJvb20oKSBhcyBCb2FyZDtcclxuICAgIHJvb20uc3RhdGUubGFzdF9tb3ZlLnB1c2goe1xyXG4gICAgICB0eXBlOlwibW92ZVwiLFxyXG4gICAgICBvbGRfcG9zaXRpb246T2JqZWN0LmFzc2lnbih7fSx0aGlzLmdldENvcmRzKCkpLCAgICAgIFxyXG4gICAgICBuZXdfcG9zaXRpb246T2JqZWN0LmFzc2lnbih7fSxhKSxcclxuICAgICAgb2xkX3BpZWNlOnRoaXMuc3RhdGUudHlwZSxcclxuICAgICAgbmV3X3BpZWNlOnRoaXMuc3RhdGUudHlwZSxcclxuICAgICAgc2lkZTp0aGlzLnN0YXRlLnNpZGVcclxuICAgICB9KVxyXG4gICAgdGhpcy5tb3ZldG9Db3JkcyhhKTtcclxuICB9XHJcbiAgbW92ZXRvQ29yZHMoYTpwb3NpdGlvbil7XHJcbiAgICBsZXQgcm9vbSA9IGcuZ2V0Um9vbSgpIGFzIEJvYXJkO1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi54ID0gYS54ICogdGhpcy53aWR0aCAtIDM1MDtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSA9IGEueSAqIHRoaXMuaGVpZ2h0IC0gMzUwO1xyXG4gIH1cclxuICBnZXRDb3JkcygpOnBvc2l0aW9ue1xyXG4gICAgcmV0dXJuIHt4Ok1hdGgucm91bmQoKHRoaXMuc3RhdGUucG9zaXRpb24ueCszNTApLzEwMCkseTpNYXRoLnJvdW5kKCh0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKyAzNTApLzEwMCl9O1xyXG4gIH1cclxuICBnZXRBdHRhY2tpbmcoKTpBcnJheTxwb3NpdGlvbj57XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIHJlbmRlcmYodDpudW1iZXIpOnBvc2l0aW9uZWRfc3ByaXRle1xyXG4gICAgbGV0IHNwcml0ZXMgPSBzcHJpdGVfZ2VuKHRoaXMuc3ByaXRlX3NoZWV0LHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpO1xyXG4gICAgaWYodGhpcy5wYXJhbXMuc2lkZSA9PT0gc2lkZS53aGl0ZSl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3ByaXRlOnNwcml0ZXNbMF1bMF0sXHJcbiAgICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcHJpdGU6c3ByaXRlc1swXVsxXSxcclxuICAgICAgICB4OnRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OnRoaXMuc3RhdGUucG9zaXRpb24ueVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGF0dGFja0RpYWdvbmFsKCl7XHJcbiAgICBsZXQgY29yZHMgPSB0aGlzLmdldENvcmRzKCk7XHJcbiAgICBsZXQgcm9vbSA9IGcuZ2V0Um9vbSgpIGFzIEJvYXJkO1xyXG4gICAgbGV0IGF0dGFja2VkOkFycmF5PHBvc2l0aW9uPiA9IFtdO1xyXG4gICAgZm9yKGxldCBhID0gMTthIDwgODthKyspe1xyXG4gICAgICBpZihjb3Jkcy54IC0gYSA+PSAwICYmIGNvcmRzLnggLSBhIDwgOCAmJiBjb3Jkcy55IC0gYSA+PSAwICYmIGNvcmRzLnggLSBhIDwgOCl7XHJcbiAgICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggLSBhLHk6Y29yZHMueSAtIGF9KTtcclxuICAgICAgICBpZihwaWVjZXMubGVuZ3RoID09IDAgfHwgcGllY2VzWzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggLSBhLHk6Y29yZHMueSAtIGF9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocGllY2VzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ICBcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IDE7YSA8IDg7YSsrKXtcclxuICAgICAgaWYoY29yZHMueCAtIGEgPj0gMCAmJiBjb3Jkcy54IC0gYSA8IDggJiYgY29yZHMueSArIGEgPj0gMCAmJiBjb3Jkcy55ICsgYSA8IDgpe1xyXG4gICAgICAgIGxldCBwaWVjZXMgPSByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54IC0gYSx5OmNvcmRzLnkgKyBhfSk7XHJcbiAgICAgICAgaWYocGllY2VzLmxlbmd0aCA9PSAwIHx8IHBpZWNlc1swXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgICAgYXR0YWNrZWQucHVzaCh7eDpjb3Jkcy54IC0gYSx5OmNvcmRzLnkgKyBhfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBpZWNlcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSAgXHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgPSAxO2EgPCA4O2ErKyl7XHJcbiAgICAgIGlmKGNvcmRzLnggKyBhID49IDAgJiYgY29yZHMueCArIGEgPCA4ICYmIGNvcmRzLnkgKyBhID49IDAgJiYgY29yZHMueSArIGEgPCA4KXtcclxuICAgICAgICBsZXQgcGllY2VzID0gcm9vbS5nZXRfcGllY2Uoe3g6Y29yZHMueCArIGEseTpjb3Jkcy55ICsgYX0pO1xyXG4gICAgICAgIGlmKHBpZWNlcy5sZW5ndGggPT0gMCB8fCBwaWVjZXNbMF0uc3RhdGUuc2lkZSAhPT0gdGhpcy5zdGF0ZS5zaWRlKXtcclxuICAgICAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCArIGEseTpjb3Jkcy55ICsgYX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwaWVjZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9ICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gMTthIDwgODthKyspe1xyXG4gICAgICBpZihjb3Jkcy54ICsgYSA+PSAwICYmIGNvcmRzLnggKyBhIDwgOCAmJiBjb3Jkcy55IC0gYSA+PSAwICYmIGNvcmRzLnkgLSBhIDwgOCl7XHJcbiAgICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKHt4OmNvcmRzLnggKyBhLHk6Y29yZHMueSAtIGF9KTtcclxuICAgICAgICBpZihwaWVjZXMubGVuZ3RoID09IDAgfHwgcGllY2VzWzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgICBhdHRhY2tlZC5wdXNoKHt4OmNvcmRzLnggKyBhLHk6Y29yZHMueSAtIGF9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocGllY2VzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhdHRhY2tlZDtcclxuICB9XHJcbiAgYXR0YWNrQ2FyZGluYWwoKXtcclxuICAgIGxldCBjb3JkcyA9IHRoaXMuZ2V0Q29yZHMoKTtcclxuICAgIGxldCByb29tID0gZy5nZXRSb29tKCkgYXMgQm9hcmQ7XHJcbiAgICBsZXQgYXR0YWNrZWQ6QXJyYXk8cG9zaXRpb24+ID0gW107XHJcbiAgICBmb3IobGV0IGEgPSBjb3Jkcy54IC0gMTthID49IDA7YS0tKXtcclxuICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKHt4OmEseTpjb3Jkcy55fSk7XHJcbiAgICAgIGlmKHBpZWNlcy5sZW5ndGggPT09IDAgfHwgcGllY2VzWzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgYXR0YWNrZWQucHVzaCh7eDphLHk6Y29yZHMueX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHBpZWNlcy5sZW5ndGggPiAwKXtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gY29yZHMueCArIDE7YSA8IDg7YSsrKXtcclxuICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKHt4OmEseTpjb3Jkcy55fSk7XHJcbiAgICAgIGlmKHBpZWNlcy5sZW5ndGggPT09IDAgfHwgcGllY2VzWzBdLnN0YXRlLnNpZGUgIT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgYXR0YWNrZWQucHVzaCh7eDphLHk6Y29yZHMueX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHBpZWNlcy5sZW5ndGggPiAwKXtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gY29yZHMueSAtIDE7YSA+PSAwO2EtLSl7XHJcbiAgICAgIGxldCBwaWVjZXMgPSByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54LHk6YX0pO1xyXG4gICAgICBpZihwaWVjZXMubGVuZ3RoID09PSAwIHx8IHBpZWNlc1swXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCx5OmF9KTtcclxuICAgICAgfVxyXG4gICAgICBpZihwaWVjZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IGNvcmRzLnkgKyAxO2EgPCA4O2ErKyl7XHJcbiAgICAgIGxldCBwaWVjZXMgPSByb29tLmdldF9waWVjZSh7eDpjb3Jkcy54LHk6YX0pO1xyXG4gICAgICBpZihwaWVjZXMubGVuZ3RoID09PSAwIHx8IHBpZWNlc1swXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgIGF0dGFja2VkLnB1c2goe3g6Y29yZHMueCx5OmF9KTtcclxuICAgICAgfVxyXG4gICAgICBpZihwaWVjZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhdHRhY2tlZDtcclxuICB9XHJcbiAgdW5iaW5kX2NvbnRyb2xzKCl7XHJcbiAgICBmb3IobGV0IGEgb2YgdGhpcy5iaW5kcyl7XHJcbiAgICAgIFVuYmluZChhKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2VsZWN0KCl7XHJcbiAgICBsZXQgcm9vbSA9IGcuc3RhdGUuY3VycmVudF9yb29tIGFzIEJvYXJkO1xyXG4gICAgICBpZihyb29tLnN0YXRlLnR1cm4gPT09IHRoaXMuc3RhdGUuc2lkZSl7XHJcbiAgICAgICAgcm9vbS5zdGF0ZS5zZWxlY3RlZCA9IHRoaXM7XHJcbiAgICAgICAgcm9vbS5jbGVhcl9hdHRhY2tlZCgpO1xyXG4gICAgICAgIGxldCB2YWxpZF9hdHRhY2tlZCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgZyBvZiB0aGlzLmdldEF0dGFja2luZygpKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IHBpZWNlcyA9IHJvb20uZ2V0X3BpZWNlKGcpO1xyXG4gICAgICAgICAgaWYocGllY2VzLmxlbmd0aCA9PSAwIHx8IHBpZWNlc1swXS5zdGF0ZS5zaWRlICE9PSB0aGlzLnN0YXRlLnNpZGUpe1xyXG4gICAgICAgICAgICB2YWxpZF9hdHRhY2tlZC5wdXNoKGcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByb29tLnN0YXRlLmF0dGFja2VkID0gdmFsaWRfYXR0YWNrZWQ7XHJcbiAgICAgICAgcm9vbS5hdHRhY2sodmFsaWRfYXR0YWNrZWQpO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIGJpbmRfY29udHJvbHMoKXtcclxuICAgIC8qXHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwibW91c2UxXCIsZXhlY190eXBlLm9uY2UsKCk9PntcclxuICAgICAgdGhpcy5zZWxlY3QoKTsgIFxyXG4gICAgfSlcclxuICAgICovXHJcbiAgfVxyXG59IiwiaW1wb3J0IHtjb21wb3NpdGVfb2JqLCBncmF2aXR5X29ian0gZnJvbSBcIi4uLy4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUscG9zaXRpb259IGZyb20gXCIuLi8uLi8uLi9saWIvc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGxhdF9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcclxuICBoZWFsdGg6bnVtYmVyICBcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIHBsYXRmb3JtZXJfb2JqIGV4dGVuZHMgZ3Jhdml0eV9vYmp7XHJcbiAgZW5lbXkgPSBmYWxzZTtcclxuICBzdGF0ZTpwbGF0X3N0YXRlXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtZXRlcnM6dW5rbm93bil7XHJcbiAgICBzdXBlcihzdGF0ZSxwYXJhbWV0ZXJzKTtcclxuICB9XHJcbiAgc3RhdGVmKGE6bnVtYmVyKXtcclxuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBwbGF0X3N0YXRlO1xyXG4gICAgaWYoc3RhdGUuaGVhbHRoIDw9IDApe1xyXG4gICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHBsYXRmb3JtZXJfb2JqX2NvbXBvc2l0ZSBleHRlbmRzIGNvbXBvc2l0ZV9vYmp7XHJcbiAgZW5lbXkgPSBmYWxzZTtcclxuICBzdGF0ZTpwbGF0X3N0YXRlO1xyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSl7XHJcbiAgICBzdXBlcihzdGF0ZSk7XHJcbiAgfVxyXG4gIHN0YXRlZihhOm51bWJlcil7XHJcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgcGxhdF9zdGF0ZTtcclxuICAgIGlmKHN0YXRlLmhlYWx0aCA8PSAwKXtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQge3BsYXRmb3JtZXJfb2JqLHBsYXRfc3RhdGV9IGZyb20gXCIuL2Fic3RyYWN0L3BsYXRmb3JtZXJfb2JqXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlLHBvc2l0aW9ufSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgc2NhbGVfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvcmVuZGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgYm94IGV4dGVuZHMgcGxhdGZvcm1lcl9vYmp7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2JveC5wbmdcIlxyXG4gIGNvbGxpc2lvbiA9IHRydWVcclxuICBoZWlnaHQgPSA2NDtcclxuICB3aWR0aCA9IDUwMDtcclxuICBncmF2aXR5ID0gZmFsc2U7XHJcbiAgZW5lbXkgPSBmYWxzZTtcclxuICB0YWdzID0gW1wic3RhdGljXCJdO1xyXG4gIHNjYWxlX3R5cGUgPSBzY2FsZV90eXBlLnJlcGVhdFxyXG59XHJcbiIsImltcG9ydCB7cGxhdGZvcm1lcl9vYmosIHBsYXRfc3RhdGV9IGZyb20gXCIuL2Fic3RyYWN0L3BsYXRmb3JtZXJfb2JqXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHtyb3RhdGlvbl9sZW5ndGgsIG9ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgR29vbWJhIH0gZnJvbSBcIi4vR29vbWJhXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuXHJcbmludGVyZmFjZSBidWxsZXRfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XHJcbiAgcm90YXRpb246bnVtYmVyLFxyXG4gIGRpc3RhbmNlOm51bWJlcixcclxuICBzcGVlZDpudW1iZXIsXHJcbiAgZGFtYWdlOm51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgcG9zaXRpb257XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIGJ1bGxldF9wYXJhbWV0ZXJze1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGJ1bGxldCBleHRlbmRzIG9iantcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvYnVsbGV0LnBuZ1wiO1xyXG4gIGhlaWdodCA9IDIwO1xyXG4gIHdpZHRoID0gMTA7XHJcbiAgZ3Jhdml0eSA9IGZhbHNlO1xyXG4gIG1heF9kaXN0YW5jZSA9IDIwMDA7XHJcbiAgdGFncyA9IFtcImJ1bGxldFwiXTtcclxuICBzdGF0ZTpidWxsZXRfc3RhdGU7XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpidWxsZXRfcGFyYW1ldGVycyl7XHJcbiAgICBzdXBlcihzdGF0ZSxwYXJhbXMpO1xyXG4gICAgdGhpcy5zdGF0ZS5kYW1hZ2UgPSA1O1xyXG4gICAgdGhpcy5zdGF0ZS5kaXN0YW5jZSA9IDBcclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6bnVtYmVyKXtcclxuICAgIHRoaXMuc3RhdGUudmVsb2NpdHkgPSByb3RhdGlvbl9sZW5ndGgodGhpcy5zdGF0ZS5zcGVlZCx0aGlzLnN0YXRlLnJvdGF0aW9uKTtcclxuICAgIHRoaXMuc3RhdGUuZGlzdGFuY2UgKz0gdGhpcy5zdGF0ZS5zcGVlZDtcclxuICAgIGlmKHRoaXMuc3RhdGUuZGlzdGFuY2UgPiB0aGlzLm1heF9kaXN0YW5jZSl7XHJcbiAgICAgIHRoaXMuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlZ2lzdGVyQ29udHJvbHMoKXtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm9ja2V0IGV4dGVuZHMgYnVsbGV0e1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9mb2xkZXIvcm9ja2V0LnBuZ1wiO1xyXG4gIGhlaWdodCA9IDY3O1xyXG4gIHdpZHRoID0gMTY7XHJcbiAgcGFydGljbGVfdGltZXIgPSAwO1xyXG4gIHBhcnRpY2xlX2ZyZXF1ZW5jeSA9IDU7XHJcbiAgbWF4X2Rpc3RhbmNlID0gNTAwMDtcclxuICB0YWdzID0gW1wiUm9ja2V0XCJdXHJcbiAgaGl0Ym94ID0ge1xyXG4gICAgeF9vZmZzZXQ6MCxcclxuICAgIHlfb2Zmc2V0OjAsXHJcbiAgICB3aWR0aDoxNixcclxuICAgIGhlaWdodDoxNlxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOmJ1bGxldF9wYXJhbWV0ZXJzKXtcclxuICAgIHN1cGVyKHN0YXRlLHBhcmFtcyk7XHJcbiAgICB0aGlzLnN0YXRlLnNwZWVkID0gMTU7XHJcbiAgICB0aGlzLnN0YXRlLmRhbWFnZSA9IDIwO1xyXG4gIH1cclxuICByZWdpc3RlckF1ZGlvKCl7XHJcbiAgICB0aGlzLmF1ZGlvLmFkZChcImV4cGxvc2lvblwiLFwiLi9zb3VuZHMvZXhwbG9zaW9uMi5tcDNcIik7XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOm51bWJlcil7XHJcbiAgICBzdXBlci5zdGF0ZWYodGltZSk7XHJcbiAgICBpZih0aGlzLnBhcnRpY2xlX3RpbWVyID09IDApe1xyXG4gICAgICBsZXQgb2Zmc2V0ID0gcm90YXRpb25fbGVuZ3RoKDMwLHRoaXMuc3RhdGUucm90YXRpb24gKyAxODApO1xyXG4gICAgICB0aGlzLmVtaXRQYXJ0aWNsZShcInNtb2tlXCIsb2Zmc2V0LCA0MDAsIDE2KTtcclxuICAgIH1cclxuICAgIHRoaXMucGFydGljbGVfdGltZXIgKz0gdGltZTtcclxuICAgIGlmKHRoaXMucGFydGljbGVfdGltZXIgPiB0aGlzLnBhcnRpY2xlX2ZyZXF1ZW5jeSl7XHJcbiAgICAgdGhpcy5wYXJ0aWNsZV90aW1lciA9IDA7IFxyXG4gICAgfVxyXG4gICAgbGV0IHJvb20gPSBnLnN0YXRlLmN1cnJlbnRfcm9vbTtcclxuICAgIGxldCBjb2xsaXNpb25zID0gcm9vbS5jaGVja0NvbGxpc2lvbnModGhpcy5nZXRGdWxsQ29sbGlzaW9uQm94KCksW1wiZ3VuXCIsXCJwbGF5ZXJcIl0pO1xyXG4gICAgaWYoY29sbGlzaW9ucy5sZW5ndGggPiAwKXtcclxuICAgICAgZm9yKGxldCBjb2xsaXNpb24gb2YgY29sbGlzaW9ucyl7XHJcbiAgICAgICAgbGV0IHN0ID0gY29sbGlzaW9uLnN0YXRlIGFzIHVua25vd24gYXMgcGxhdF9zdGF0ZTtcclxuICAgICAgICBpZigoPHBsYXRmb3JtZXJfb2JqPmNvbGxpc2lvbikuc3RhdGUuaGVhbHRoKXtcclxuICAgICAgICAgIHN0LmhlYWx0aCAtPSB0aGlzLnN0YXRlLmRhbWFnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29sbGlzaW9uLnRhZ3MuaW5kZXhPZihcImR1bW15XCIpID4gLTEpe1xyXG4gICAgICAgICAgbGV0IGR1bW15ID0gY29sbGlzaW9uIGFzIEdvb21iYTtcclxuICAgICAgICAgIGlmKGR1bW15LnN0YXRlLmp1bXBpbmcpe1xyXG4gICAgICAgICAgICBkdW1teS5zdGF0ZS50aW1lc19haXJzaG90Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhdGUuZGlzdGFuY2UgPSB0aGlzLm1heF9kaXN0YW5jZTtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgICAgbGV0IGV4cGxvc2lvbl9jb2xsaXNpb25zID0gcm9vbS5jaGVja0NvbGxpc2lvbnMoe1xyXG4gICAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOjI1NixcclxuICAgICAgICBoZWlnaHQ6MjU2XHJcbiAgICAgIH0sW1wic3RhdGljXCJdKVxyXG4gICAgICBmb3IobGV0IGNvbGxpZGVyIG9mIGV4cGxvc2lvbl9jb2xsaXNpb25zKXtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKGNvbGxpZGVyKTtcclxuICAgICAgICBsZXQgbXVsdGlwbHllciA9IDEgLSBkaXN0YW5jZS8zMDA7XHJcbiAgICAgICAgaWYobXVsdGlwbHllciA8IDApXHJcbiAgICAgICAgICBtdWx0aXBseWVyID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgb19zdGF0ZSA9IGNvbGxpZGVyLnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICAgICAgICBsZXQgdmVsb2NpdGllcyA9IHJvdGF0aW9uX2xlbmd0aChtdWx0aXBseWVyICogMTAwLCB0aGlzLmFuZ2xlVG93YXJkcyhjb2xsaWRlcikpO1xyXG4gICAgICAgIG9fc3RhdGUudmVsb2NpdHkueCArPSB2ZWxvY2l0aWVzLnggKiB0aW1lLzE2O1xyXG4gICAgICAgIG9fc3RhdGUudmVsb2NpdHkueSArPSB2ZWxvY2l0aWVzLnkgKiB0aW1lLzE2O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdFBhcnRpY2xlKFwiZXhwbG9zaW9uXCIse3g6MCx5OjB9LDUwMCwwKTtcclxuICAgICAgdGhpcy5hdWRpby5wbGF5KFwiZXhwbG9zaW9uXCIsMC4yKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJcbmludGVyZmFjZSBwcmVmYWJzIHtcbiAgW2luZGV4OnN0cmluZ106YW55XG59XG5pbXBvcnQge0Jpc2hvcH0gZnJvbSBcIi4vQmlzaG9wXCI7XG5pbXBvcnQge0JvYXJkX0xhYmVsfSBmcm9tIFwiLi9Cb2FyZF9MYWJlbFwiO1xuaW1wb3J0IHtib3h9IGZyb20gXCIuL2JveFwiO1xuaW1wb3J0IHtidWxsZXR9IGZyb20gXCIuL2J1bGxldFwiO1xuaW1wb3J0IHtDb250cm9sbGVkUGxheWVyfSBmcm9tIFwiLi9Db250cm9sbGVkUGxheWVyXCI7XG5pbXBvcnQge0N1cnNvcn0gZnJvbSBcIi4vQ3Vyc29yXCI7XG5pbXBvcnQge0Rvb3J9IGZyb20gXCIuL0Rvb3JcIjtcbmltcG9ydCB7R29vbWJhfSBmcm9tIFwiLi9Hb29tYmFcIjtcbmltcG9ydCB7R3VufSBmcm9tIFwiLi9HdW5cIjtcbmltcG9ydCB7S2luZ30gZnJvbSBcIi4vS2luZ1wiO1xuaW1wb3J0IHtLbmlnaHR9IGZyb20gXCIuL0tuaWdodFwiO1xuaW1wb3J0IHtNb3ZlfSBmcm9tIFwiLi9Nb3ZlXCI7XG5pbXBvcnQge1Bhd259IGZyb20gXCIuL1Bhd25cIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7UXVlZW59IGZyb20gXCIuL1F1ZWVuXCI7XG5pbXBvcnQge1Jvb2t9IGZyb20gXCIuL1Jvb2tcIjtcbmltcG9ydCB7Um90YXRvcn0gZnJvbSBcIi4vUm90YXRvclwiO1xuaW1wb3J0IHtWZXJ0Qm94fSBmcm9tIFwiLi9WZXJ0Qm94XCI7XG5leHBvcnQgbGV0IHByZWZhYnM6cHJlZmFicyA9IHtcblx0QmlzaG9wOkJpc2hvcCxcblx0Qm9hcmRfTGFiZWw6Qm9hcmRfTGFiZWwsXG5cdGJveDpib3gsXG5cdGJ1bGxldDpidWxsZXQsXG5cdENvbnRyb2xsZWRQbGF5ZXI6Q29udHJvbGxlZFBsYXllcixcblx0Q3Vyc29yOkN1cnNvcixcblx0RG9vcjpEb29yLFxuXHRHb29tYmE6R29vbWJhLFxuXHRHdW46R3VuLFxuXHRLaW5nOktpbmcsXG5cdEtuaWdodDpLbmlnaHQsXG5cdE1vdmU6TW92ZSxcblx0UGF3bjpQYXduLFxuXHRQbGF5ZXI6UGxheWVyLFxuXHRRdWVlbjpRdWVlbixcblx0Um9vazpSb29rLFxuXHRSb3RhdG9yOlJvdGF0b3IsXG5cdFZlcnRCb3g6VmVydEJveCxcbn0iLCJpbXBvcnQge3Jvb20scm9vbV9pLHN0YXRlX2NvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XHJcbmltcG9ydCB7cGllY2UsIHBpZWNlX3R5cGUsbW92ZXN9IGZyb20gXCIuLi9vYmplY3RzL2Fic3RyYWN0L3BpZWNlXCI7XHJcbmltcG9ydCB7S25pZ2h0fSBmcm9tIFwiLi4vb2JqZWN0cy9LbmlnaHRcIjtcclxuaW1wb3J0IHtSb29rfSBmcm9tIFwiLi4vb2JqZWN0cy9Sb29rXCI7XHJcbmltcG9ydCB7TW92ZX0gZnJvbSBcIi4uL29iamVjdHMvTW92ZVwiO1xyXG5pbXBvcnQge29ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgQmlzaG9wIH0gZnJvbSBcIi4uL29iamVjdHMvQmlzaG9wXCI7XHJcbmltcG9ydCB7IFF1ZWVuIH0gZnJvbSBcIi4uL29iamVjdHMvUXVlZW5cIjtcclxuaW1wb3J0IHsgS2luZyB9IGZyb20gXCIuLi9vYmplY3RzL0tpbmdcIjtcclxuaW1wb3J0IHsgUGF3biB9IGZyb20gXCIuLi9vYmplY3RzL1Bhd25cIjtcclxuaW1wb3J0IHtnYW1lLEdldFZpZXdwb3J0RGltZW5zaW9ucyB9IGZyb20gXCIuLi8uLi92YW5cIjtcclxuaW1wb3J0IHtnfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSwgcG9zaXRpb24sIHJvb21fc3RhdGV9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtDYW1lcmF9IGZyb20gXCIuLi8uLi9saWIvcmVuZGVyXCI7XHJcbmltcG9ydCAqIGFzIGpzb24gZnJvbSBcIi4vQm9hcmQuanNvblwiO1xyXG5pbXBvcnQgeyB2ZWxvY2l0eUNvbGxpc2lvbkNoZWNrIH0gZnJvbSBcIi4uLy4uL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgZXhlY190eXBlLCBQb2xsX01vdXNlIH0gZnJvbSBcIi4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4vQm9hcmQuanNvblwiO1xyXG5sZXQgY2ZpZyA9IGNvbmZpZyBhcyB1bmtub3duIGFzIHN0YXRlX2NvbmZpZztcclxuZXhwb3J0IGVudW0gc2lkZXtcclxuICB3aGl0ZSxcclxuICBibGFja1xyXG59XHJcblxyXG5pbnRlcmZhY2Ugc3BhY2Vfc3RhdGV7XHJcbiAgZW5wYXNzZW50OmJvb2xlYW4sXHJcbiAgYXR0YWNrZWQ6Ym9vbGVhblxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGF0ZV9jb252ZXJ0ZXIocG9zOnBvc2l0aW9uLHJvdGF0aW9uOm51bWJlcixzY2FsaW5nOm51bWJlcik6b2JqX3N0YXRle1xyXG4gIHJldHVybiB7XHJcbiAgICBwb3NpdGlvbjpwb3MsXHJcbiAgICB2ZWxvY2l0eTp7XHJcbiAgICAgIHg6MCxcclxuICAgICAgeTowXHJcbiAgICB9LFxyXG4gICAgcm90YXRpb24sXHJcbiAgICBzY2FsaW5nOntcclxuICAgICAgd2lkdGg6c2NhbGluZyxcclxuICAgICAgaGVpZ2h0OnNjYWxpbmdcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBib2FyZF9zdGF0ZXtcclxuICB0dXJuOnNpZGUsXHJcbiAgd2hpdGVfYm9hcmQ6QXJyYXk8QXJyYXk8c3BhY2Vfc3RhdGU+PixcclxuICBibGFja19ib2FyZDpBcnJheTxBcnJheTxzcGFjZV9zdGF0ZT4+XHJcbiAgc2VsZWN0ZWQ6cGllY2UsXHJcbiAgc2VsZWN0ZWRfb3JpZ2luYWxfcG9zaXRpb246cG9zaXRpb24sXHJcbiAgc3F1YXJlczpBcnJheTxBcnJheTxNb3ZlPj4sXHJcbiAgcGllY2VzOkFycmF5PHBpZWNlPixcclxuICBhdHRhY2tlZDpBcnJheTxwb3NpdGlvbj4sXHJcbiAgZHJhZ2dpbmc6Ym9vbGVhbixcclxuICBsYXN0X21vdmU6bW92ZXNbXSxcclxuICBiZWZvcmVfaGlzdG9yeTptb3Zlc1tdW10sXHJcbiAgYWZ0ZXJfaGlzdG9yeTptb3Zlc1tdW11cclxufVxyXG5leHBvcnQgY2xhc3MgQm9hcmQgZXh0ZW5kcyByb29tPGJvYXJkX3N0YXRlPntcclxuICBzdGF0ZTpib2FyZF9zdGF0ZTtcclxuICBiYWNrZ3JvdW5kX3VybD1cIi4vc3ByaXRlcy9ib2FyZC5wbmdcIjtcclxuICBjb25zdHJ1Y3RvcihnYW1lOmdhbWU8dW5rbm93bj4pe1xyXG4gICAgc3VwZXIoZ2FtZSxjZmlnKTtcclxuICAgIGdhbWUuc3RhdGUuY2FtZXJhcyA9IFtcclxuICAgICAgbmV3IENhbWVyYSh7XHJcbiAgICAgICAgeDowLFxyXG4gICAgICAgIHk6MCxcclxuICAgICAgICBkaW1lbnNpb25zOntcclxuICAgICAgICAgIGhlaWdodDpHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQsXHJcbiAgICAgICAgICB3aWR0aDpHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGluZzowLjY1LFxyXG4gICAgICAgIGRlYnVnOmZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIHg6MCxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgd2lkdGg6MSxcclxuICAgICAgICBoZWlnaHQ6MVxyXG4gICAgICB9KVxyXG4gICAgXVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdHVybjpzaWRlLndoaXRlLFxyXG4gICAgICB3aGl0ZV9ib2FyZDpbXSxcclxuICAgICAgYmxhY2tfYm9hcmQ6W10sXHJcbiAgICAgIHNlbGVjdGVkOnVuZGVmaW5lZCxcclxuICAgICAgc2VsZWN0ZWRfb3JpZ2luYWxfcG9zaXRpb246dW5kZWZpbmVkLFxyXG4gICAgICBzcXVhcmVzOltdLFxyXG4gICAgICBwaWVjZXM6W10sXHJcbiAgICAgIGF0dGFja2VkOltdLFxyXG4gICAgICBkcmFnZ2luZzpmYWxzZSxcclxuICAgICAgbGFzdF9tb3ZlOltdLFxyXG4gICAgICBiZWZvcmVfaGlzdG9yeTpbXSxcclxuICAgICAgYWZ0ZXJfaGlzdG9yeTpbXVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgbGV0IHJvdzIgPSBbbmV3IFJvb2soc3RhdGVfY29udmVydGVyKHt4OjAseTo3fSwwLDEpLHtzaWRlOnNpZGUuYmxhY2t9KSxuZXcgS25pZ2h0KHN0YXRlX2NvbnZlcnRlcih7eDoxLHk6N30sMCwxKSx7c2lkZTpzaWRlLmJsYWNrfSksbmV3IEJpc2hvcChzdGF0ZV9jb252ZXJ0ZXIoe3g6Mix5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pLG5ldyBRdWVlbihzdGF0ZV9jb252ZXJ0ZXIoe3g6Myx5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pLG5ldyBLaW5nKHN0YXRlX2NvbnZlcnRlcih7eDo0LHk6N30sMCwxKSx7c2lkZTpzaWRlLmJsYWNrfSksbmV3IEJpc2hvcChzdGF0ZV9jb252ZXJ0ZXIoe3g6NSx5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pLG5ldyBLbmlnaHQoc3RhdGVfY29udmVydGVyKHt4OjYseTo3fSwwLDEpLHtzaWRlOnNpZGUuYmxhY2t9KSxuZXcgUm9vayhzdGF0ZV9jb252ZXJ0ZXIoe3g6Nyx5Ojd9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pXTtcclxuICAgIGxldCByb3c3ID0gW25ldyBSb29rKHN0YXRlX2NvbnZlcnRlcih7eDowLHk6MH0sMCwxKSx7c2lkZTpzaWRlLndoaXRlfSksbmV3IEtuaWdodChzdGF0ZV9jb252ZXJ0ZXIoe3g6MSx5OjB9LDAsMSkse3NpZGU6c2lkZS53aGl0ZX0pLG5ldyBCaXNob3Aoc3RhdGVfY29udmVydGVyKHt4OjIseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KSxuZXcgUXVlZW4oc3RhdGVfY29udmVydGVyKHt4OjMseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KSxuZXcgS2luZyhzdGF0ZV9jb252ZXJ0ZXIoe3g6NCx5OjB9LDAsMSkse3NpZGU6c2lkZS53aGl0ZX0pLG5ldyBCaXNob3Aoc3RhdGVfY29udmVydGVyKHt4OjUseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KSxuZXcgS25pZ2h0KHN0YXRlX2NvbnZlcnRlcih7eDo2LHk6MH0sMCwxKSx7c2lkZTpzaWRlLndoaXRlfSksbmV3IFJvb2soc3RhdGVfY29udmVydGVyKHt4OjcseTowfSwwLDEpLHtzaWRlOnNpZGUud2hpdGV9KV07XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCByb3cyLmxlbmd0aDthKyspe1xyXG4gICAgICBsZXQgcGF3bjEgPSBuZXcgUGF3bihzdGF0ZV9jb252ZXJ0ZXIoe3g6YSx5OjF9LDAsMSkse3NpZGU6c2lkZS53aGl0ZX0pO1xyXG4gICAgICBsZXQgcGF3bjIgPSBuZXcgUGF3bihzdGF0ZV9jb252ZXJ0ZXIoe3g6YSx5OjZ9LDAsMSkse3NpZGU6c2lkZS5ibGFja30pO1xyXG4gICAgICB0aGlzLmFkZEl0ZW0ocm93N1thXSk7XHJcbiAgICAgIHRoaXMuYWRkSXRlbShwYXduMSk7XHJcbiAgICAgIHRoaXMuYWRkSXRlbShyb3cyW2FdKTtcclxuICAgICAgdGhpcy5hZGRJdGVtKHBhd24yKTtcclxuICAgICAgdGhpcy5zdGF0ZS5waWVjZXMucHVzaChwYXduMik7XHJcbiAgICAgIHRoaXMuc3RhdGUucGllY2VzLnB1c2gocm93N1thXSk7XHJcbiAgICAgIHRoaXMuc3RhdGUucGllY2VzLnB1c2gocGF3bjEpO1xyXG4gICAgICB0aGlzLnN0YXRlLnBpZWNlcy5wdXNoKHJvdzJbYV0pO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IDA7YTw4O2ErKyl7XHJcbiAgICAgIGxldCBtdl9yb3c6QXJyYXk8TW92ZT4gPSBbXTtcclxuICAgICAgZm9yKGxldCBiID0gMDtiPDg7YisrKXtcclxuICAgICAgICBsZXQgZCA9IGE7XHJcbiAgICAgICAgKCgpPT4ge1xyXG4gICAgICAgICAgbGV0IG1vdmVfbyA9IG5ldyBNb3ZlKHN0YXRlX2NvbnZlcnRlcih7eDphLHk6Yn0sMCwxKSk7XHJcbiAgICAgICAgICBtdl9yb3cucHVzaChtb3ZlX28pO1xyXG4gICAgICAgICAgdGhpcy5hZGRJdGVtKG1vdmVfbyk7XHJcbiAgICAgICAgfSkoKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhdGUuc3F1YXJlcy5wdXNoKG12X3Jvdyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlLmJsYWNrX2JvYXJkID0gdGhpcy5ibGFua19ib2FyZCgpO1xyXG4gICAgdGhpcy5zdGF0ZS53aGl0ZV9ib2FyZCA9IHRoaXMuYmxhbmtfYm9hcmQoKTtcclxuICAgIGZvcihsZXQgeCBvZiB0aGlzLnN0YXRlLnBpZWNlcyl7XHJcbiAgICAgIGlmKHguc3RhdGUuc2lkZSA9PT0gc2lkZS53aGl0ZSl7XHJcbiAgICAgICAgeC5iaW5kX2NvbnRyb2xzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmVnaXN0ZXJDb250cm9scygpIHtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJtb3VzZTBkb3duXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcblxyXG4gICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGcuc3RhdGUuY2FtZXJhc1swXSk7XHJcbiAgICAgIGlmKCFtb3VzZSl7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgbGV0IGNvbGxpc2lvbnMgPSBnLmdldFJvb20oKS5jaGVja0NvbGxpc2lvbnMoe1xyXG4gICAgICAgIHg6IG1vdXNlLngsXHJcbiAgICAgICAgeTogbW91c2UueSxcclxuICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgfSwgW1wibW92ZVwiXSk7XHJcbiAgICAgIGlmIChjb2xsaXNpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcGllY2UgPSAoPHBpZWNlPmNvbGxpc2lvbnNbMF0pO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUudHVybiA9PSBwaWVjZS5zdGF0ZS5zaWRlKXtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgcGllY2Uuc2VsZWN0KCk7XHJcbiAgICAgICAgICBwaWVjZS5sYXllciA9IDM7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkX29yaWdpbmFsX3Bvc2l0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgY29sbGlzaW9uc1swXS5zdGF0ZS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJtb3VzZTB1cFwiLCBleGVjX3R5cGUub25jZSwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWQubGF5ZXIgPSAxO1xyXG4gICAgICAgIGxldCBjb2xsaXNpb25zID0gZy5nZXRSb29tKCkuY2hlY2tPYmplY3RzKHtcclxuICAgICAgICAgIHg6dGhpcy5zdGF0ZS5zZWxlY3RlZC5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgeTp0aGlzLnN0YXRlLnNlbGVjdGVkLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICB3aWR0aDoxLFxyXG4gICAgICAgICAgaGVpZ2h0OjFcclxuICAgICAgICB9LFtcInBpZWNlXCJdKTtcclxuICAgICAgICBpZihjb2xsaXNpb25zLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uc1swXS5yZW5kZXIgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAoPE1vdmU+Y29sbGlzaW9uc1swXSkuZHJvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZC5zdGF0ZS5wb3NpdGlvbiA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRfb3JpZ2luYWxfcG9zaXRpb247XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBnZXRfbWV0YShhOiBwb3NpdGlvbiwgczogc2lkZSkge1xyXG4gICAgaWYgKGEueCA+PSAwICYmIGEueCA8IDggJiYgYS55ID49IDAgJiYgYS55IDwgOCl7XHJcbiAgICAgIGlmKHMgPT09IHNpZGUud2hpdGUpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLndoaXRlX2JvYXJkW2EueF1bYS55XTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ibGFja19ib2FyZFthLnhdW2EueV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuICBjaGFuZ2Vfc2lkZShzOnNpZGUpe1xyXG4gICAgbGV0IHRvX2JpbmQ7XHJcbiAgICBsZXQgdG9fdW5iaW5kO1xyXG4gICAgXHJcbiAgICBpZihzID09IHNpZGUud2hpdGUpe1xyXG4gICAgICB0b19iaW5kID0gcztcclxuICAgICAgdG9fdW5iaW5kID0gc2lkZS5ibGFjaztcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2xlYXJfZW5wYXNzZW50X2JvYXJkKHRoaXMuc3RhdGUud2hpdGVfYm9hcmQpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jbGVhcl9hdHRhY2tlZF9ib2FyZCh0aGlzLnN0YXRlLmJsYWNrX2JvYXJkKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlX2F0dGFja2VkX2JvYXJkKHRoaXMuc3RhdGUuYmxhY2tfYm9hcmQsc2lkZS5ibGFjayk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdG9fYmluZCA9IHNpZGUuYmxhY2s7XHJcbiAgICAgIHRvX3VuYmluZCA9IHNpZGUud2hpdGU7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNsZWFyX2VucGFzc2VudF9ib2FyZCh0aGlzLnN0YXRlLmJsYWNrX2JvYXJkKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2xlYXJfYXR0YWNrZWRfYm9hcmQodGhpcy5zdGF0ZS53aGl0ZV9ib2FyZCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNhbGN1bGF0ZV9hdHRhY2tlZF9ib2FyZCh0aGlzLnN0YXRlLndoaXRlX2JvYXJkLHNpZGUud2hpdGUpO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGZvcihsZXQgeCBvZiB0aGlzLnN0YXRlLnBpZWNlcyl7XHJcbiAgICAgIGlmKHguc3RhdGUuc2lkZSA9PT0gdG9fYmluZCl7XHJcbiAgICAgICAgeC5iaW5kX2NvbnRyb2xzKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICB4LnVuYmluZF9jb250cm9scygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlLnR1cm4gPSBzO1xyXG4gIH1cclxuICBjbGVhcl9lbnBhc3NlbnRfYm9hcmQoeDpBcnJheTxBcnJheTxzcGFjZV9zdGF0ZT4+KXtcclxuICAgIGZvcihsZXQgYSA9IDA7YTw4O2ErKyl7XHJcbiAgICAgIGZvcihsZXQgYiA9IDA7Yjw4O2IrKyl7XHJcbiAgICAgICAgeFthXVtiXS5lbnBhc3NlbnQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjYWxjdWxhdGVfYXR0YWNrZWRfYm9hcmQoeDpBcnJheTxBcnJheTxzcGFjZV9zdGF0ZT4+LHM6c2lkZSl7XHJcbiAgICBmb3IobGV0IGEgb2YgdGhpcy5zdGF0ZS5waWVjZXMpe1xyXG4gICAgICBpZihhLnN0YXRlLnNpZGUgPT0gcyl7XHJcbiAgICAgICAgbGV0IGF0dGFja2VkID0gYS5nZXRBdHRhY2tpbmcoKTtcclxuICAgICAgICBmb3IobGV0IGIgb2YgYXR0YWNrZWQpe1xyXG4gICAgICAgICAgeFtiLnhdW2IueV0uYXR0YWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBcclxuICB9XHJcbiAgY2xlYXJfYXR0YWNrZWRfYm9hcmQoeDpBcnJheTxBcnJheTxzcGFjZV9zdGF0ZT4+KXtcclxuICAgIGZvcihsZXQgYSA9IDA7YTw4O2ErKyl7XHJcbiAgICAgIGZvcihsZXQgYiA9IDA7Yjw4O2IrKyl7XHJcbiAgICAgICAgeFthXVtiXS5hdHRhY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJsYW5rX2JvYXJkKCl7XHJcbiAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgIGZvcihsZXQgYSA9IDA7YTw4O2ErKyl7XHJcbiAgICAgIGxldCByb3cgPSBbXTtcclxuICAgICAgZm9yKGxldCBiID0gMDtiPDg7YisrKXtcclxuICAgICAgICByb3cucHVzaCh7XHJcbiAgICAgICAgICBlbnBhc3NlbnQ6ZmFsc2UsXHJcbiAgICAgICAgICBhdHRhY2tlZDpmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJvYXJkLnB1c2gocm93KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib2FyZDtcclxuICB9XHJcbiAgYXN5bmMgYWRkX3BpZWNlX2hpc3RvcnkoYTpwaWVjZSl7XHJcbiAgICB0aGlzLnN0YXRlLmxhc3RfbW92ZS5wdXNoKHtcclxuICAgICAgdHlwZTpcImFkZFwiLFxyXG4gICAgICBvbGRfcG9zaXRpb246T2JqZWN0LmFzc2lnbih7fSxhLmdldENvcmRzKCkpLFxyXG4gICAgICBuZXdfcG9zaXRpb246T2JqZWN0LmFzc2lnbih7fSxhLmdldENvcmRzKCkpLFxyXG4gICAgICBuZXdfcGllY2U6YS5zdGF0ZS50eXBlLFxyXG4gICAgICBzaWRlOmEuc3RhdGUuc2lkZVxyXG4gICAgfSlcclxuICAgIGF3YWl0IHRoaXMuYWRkX3BpZWNlKGEpO1xyXG4gIH1cclxuICBhc3luYyBhZGRfcGllY2VfZnJvbV90eXBlKHR5cGU6cGllY2VfdHlwZSxwb3NpdGlvbjpwb3NpdGlvbixzaWRlOnNpZGUpe1xyXG4gICAgbGV0IHBpZWNlOnBpZWNlO1xyXG4gICAgbGV0IHN0YXRlOm9ial9zdGF0ZSA9IHtcclxuICAgICAgcG9zaXRpb24sXHJcbiAgICAgIHZlbG9jaXR5OntcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgIHNjYWxpbmc6e1xyXG4gICAgICAgIGhlaWdodDoxLFxyXG4gICAgICAgIHdpZHRoOjFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICBjYXNlIHBpZWNlX3R5cGUuYmlzaG9wOlxyXG4gICAgICAgIHBpZWNlID0gbmV3IEJpc2hvcChzdGF0ZSx7c2lkZX0pXHJcbiAgICAgICAgYnJlYWs7ICBcclxuICAgICAgY2FzZSBwaWVjZV90eXBlLnJvb2s6XHJcbiAgICAgICAgcGllY2UgPSBuZXcgUm9vayhzdGF0ZSx7c2lkZX0pXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgcGllY2VfdHlwZS5xdWVlbjpcclxuICAgICAgICBwaWVjZSA9IG5ldyBRdWVlbihzdGF0ZSx7c2lkZX0pXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgcGllY2VfdHlwZS5wYXduOlxyXG4gICAgICAgIHBpZWNlID0gbmV3IFBhd24oc3RhdGUse3NpZGV9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBwaWVjZV90eXBlLmtuaWdodDpcclxuICAgICAgICBwaWVjZSA9IG5ldyBLbmlnaHQoc3RhdGUse3NpZGV9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBwaWVjZV90eXBlLmtpbmc6XHJcbiAgICAgICAgcGllY2UgPSBuZXcgS2luZyhzdGF0ZSx7c2lkZX0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgdGhpcy5hZGRfcGllY2UocGllY2UpO1xyXG4gIH1cclxuICBhc3luYyBhZGRfcGllY2UoYTpwaWVjZSl7XHJcbiAgICBhd2FpdCBhLmxvYWQoKTtcclxuICAgIHRoaXMuYWRkSXRlbShhKTtcclxuICAgIHRoaXMuc3RhdGUucGllY2VzLnVuc2hpZnQoYSk7XHJcbiAgfVxyXG4gIHJlbW92ZV9waWVjZShhOnBpZWNlKXtcclxuICAgIHRoaXMuc3RhdGUubGFzdF9tb3ZlLnB1c2goe1xyXG4gICAgICB0eXBlOlwicmVtb3ZlXCIsXHJcbiAgICAgIG9sZF9wb3NpdGlvbjpPYmplY3QuYXNzaWduKHt9LGEuZ2V0Q29yZHMoKSksXHJcbiAgICAgIG5ld19wb3NpdGlvbjpPYmplY3QuYXNzaWduKHt9LGEuZ2V0Q29yZHMoKSksXHJcbiAgICAgIG9sZF9waWVjZTphLnN0YXRlLnR5cGUsXHJcbiAgICAgIHNpZGU6YS5zdGF0ZS5zaWRlXHJcbiAgICB9KVxyXG4gICAgZm9yKGxldCBiID0gMDtiIDwgdGhpcy5zdGF0ZS5waWVjZXMubGVuZ3RoO2IrKyl7XHJcbiAgICAgIGlmKGEuaWQgPT09IHRoaXMuc3RhdGUucGllY2VzW2JdLmlkKXtcclxuICAgICAgICB0aGlzLnN0YXRlLnBpZWNlcy5zcGxpY2UoYiwxKTtcclxuICAgICAgfSAgIFxyXG4gICAgfVxyXG4gICAgYS5kZWxldGUoKTtcclxuICB9XHJcbiAgZ2V0X3BpZWNlKGE6cG9zaXRpb24pOkFycmF5PHBpZWNlPntcclxuICAgIHJldHVybiAodGhpcy5jaGVja0NvbGxpc2lvbnMoe1xyXG4gICAgICB4OmEueCAqIDEwMCAtIDM1MCxcclxuICAgICAgeTphLnkgKiAxMDAgLSAzNTAsXHJcbiAgICAgIGhlaWdodDoxMDAsXHJcbiAgICAgIHdpZHRoOjEwMFxyXG4gICAgfSkgYXMgdW5rbm93biBhcyBBcnJheTxwaWVjZT4pO1xyXG4gIH1cclxuICBjbGVhcl9hdHRhY2tlZCgpe1xyXG4gICAgZm9yKGxldCBhIG9mIHRoaXMuc3RhdGUuYXR0YWNrZWQpe1xyXG4gICAgICB0aGlzLnN0YXRlLnNxdWFyZXNbYS54XVthLnldLnJlbmRlciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBhdHRhY2soeDpBcnJheTxwb3NpdGlvbj4pe1xyXG4gICAgZm9yKGxldCBhIG9mIHgpe1xyXG4gICAgICB0aGlzLnN0YXRlLnNxdWFyZXNbYS54XVthLnldLnJlbmRlciA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRlZihhOm51bWJlcil7XHJcbiAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkICYmIHRoaXMuc3RhdGUuZHJhZ2dpbmcpe1xyXG4gICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGcuc3RhdGUuY2FtZXJhc1swXSk7XHJcbiAgICAgIGlmKG1vdXNlKXtcclxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkLnN0YXRlLnBvc2l0aW9uLnggPSBtb3VzZS54O1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWQuc3RhdGUucG9zaXRpb24ueSA9IG1vdXNlLnk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHN1cGVyLnN0YXRlZihhKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyByb29tLCBhcHBseUdyYXZpdHksb2JqZWN0X3N0YXRlX2NvbmZpZywgc3RhdGVfY29uZmlnIH0gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XHJcbmltcG9ydCB7IEdvb21iYSB9IGZyb20gXCIuLi9vYmplY3RzL0dvb21iYVwiO1xyXG5pbXBvcnQgeyBDb250cm9sbGVkUGxheWVyIH0gZnJvbSBcIi4uL29iamVjdHMvQ29udHJvbGxlZFBsYXllclwiO1xyXG5pbXBvcnQgeyBHdW4gfSBmcm9tIFwiLi4vb2JqZWN0cy9HdW5cIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL29iamVjdHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gXCIuLi9vYmplY3RzL0N1cnNvclwiO1xyXG5pbXBvcnQgeyBib3ggfSBmcm9tIFwiLi4vb2JqZWN0cy9ib3hcIjtcclxuaW1wb3J0IHsgVmVydEJveCB9IGZyb20gXCIuLi9vYmplY3RzL1ZlcnRCb3hcIjtcclxuaW1wb3J0IHsgdmVsb2NpdHlDb2xsaXNpb25DaGVjayBhcyB2ZWxvY2l0eUNvbGxpc2lvbkNoZWNrIH0gZnJvbSBcIi4uLy4uL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgZ3Jhdml0eV9vYmosIHJvdGF0aW9uX2xlbmd0aCB9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IFBvbGxfTW91c2UsIGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgSFVELCBUZXh0IH0gZnJvbSBcIi4uLy4uL2xpYi9odWRcIjtcclxuaW1wb3J0IHsgREVCVUcsIGdhbWUsIEdldFZpZXdwb3J0RGltZW5zaW9ucywgc2V0RGVidWcsdmlld3BvcnQgfSBmcm9tIFwiLi4vLi4vdmFuXCI7XHJcbmltcG9ydCB7YnVsbGV0LCBSb2NrZXR9IGZyb20gXCIuLi9vYmplY3RzL2J1bGxldFwiO1xyXG5pbXBvcnQge2d9IGZyb20gXCIuLi9tYWluXCI7XHJcbmltcG9ydCB7Q2FtZXJhfSBmcm9tIFwiLi4vLi4vbGliL3JlbmRlclwiO1xyXG5pbXBvcnQgKiBhcyBqc29uIGZyb20gXCIuL092ZXJ3b3JsZC5qc29uXCI7XHJcbmludGVyZmFjZSBvdmVyd29ybGRfaSB7XHJcbiAgcGxheWVyOiBncmF2aXR5X29iaixcclxuICBwYXVzZWQ6IGJvb2xlYW4sXHJcbiAgbG9ja2VkX2J1bGxldDpidWxsZXRcclxufVxyXG5cclxuY2xhc3MgT3ZlcndvcmxkX0hVRCBleHRlbmRzIEhVRCB7XHJcbiAgc2V0VGV4dEVsZW1lbnRzKCl7XHJcbiAgICByZXR1cm4gW25ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQgKiA3LzhcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogNDQsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246XCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6MVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBsZXQgeCA9IGcuZ2V0Um9vbSgpLmdldE9iakJ5VGFnKFwiZHVtbXlcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICByZXR1cm4gYFRpbWVzIEFpcnNob3Q6JHt4LnN0YXRlLnRpbWVzX2FpcnNob3R9YDtcclxuICAgIH0pLFxyXG4gICAgbmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodCAqIDYvOFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiA0NCxcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6MVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBsZXQgeCA9IGcuZ2V0Um9vbSgpLmdldE9iakJ5VGFnKFwiZHVtbXlcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBpZih4KVxyXG4gICAgICAgIHJldHVybiBgTWF4IFRpbWVzIEFpcnNob3Q6JHtNYXRoLm1heCh4LnN0YXRlLnRpbWVzX2FpcnNob3QseC5zdGF0ZS5tYXhfdGltZXNfYWlyc2hvdCl9YDtcclxuICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH0pXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPdmVyd29ybGQgZXh0ZW5kcyByb29tPG92ZXJ3b3JsZF9pPntcclxuICBiYWNrZ3JvdW5kX3VybCA9IFwiLi9zcHJpdGVzL2ltRDQxbC5qcGdcIjtcclxuICBvYmplY3RzOmdyYXZpdHlfb2JqW107XHJcbiAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+KSB7XHJcbiAgICBzdXBlcihnYW1lLGpzb24gYXMgdW5rbm93biBhcyBzdGF0ZV9jb25maWcpO1xyXG4gICAgXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwbGF5ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgcGF1c2VkOiBmYWxzZSxcclxuICAgICAgbG9ja2VkX2J1bGxldDpudWxsXHJcbiAgICB9O1xyXG4gICAgZ2FtZS5zdGF0ZS5jYW1lcmFzID0gW1xyXG4gICAgICBuZXcgQ2FtZXJhKHtcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowLFxyXG4gICAgICAgIGRpbWVuc2lvbnM6e1xyXG4gICAgICAgICAgaGVpZ2h0OnZpZXdwb3J0LmhlaWdodCxcclxuICAgICAgICAgIHdpZHRoOnZpZXdwb3J0LndpZHRoICogNC81XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsaW5nOjAuNSxcclxuICAgICAgICBkZWJ1ZzpmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgICx7XHJcbiAgICAgICAgeDoxLFxyXG4gICAgICAgIHk6MCxcclxuICAgICAgICB3aWR0aDowLjgsXHJcbiAgICAgICAgaGVpZ2h0OjFcclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBDYW1lcmEoe1xyXG4gICAgICAgIHg6MCxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgZGltZW5zaW9uczp7XHJcbiAgICAgICAgICB3aWR0aDp2aWV3cG9ydC53aWR0aC81LFxyXG4gICAgICAgICAgaGVpZ2h0OnZpZXdwb3J0LmhlaWdodFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGluZzowLjIsXHJcbiAgICAgICAgZGVidWc6ZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgeDp2aWV3cG9ydC53aWR0aCAqIDQvNSxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgd2lkdGg6MC4yLFxyXG4gICAgICAgIGhlaWdodDoxXHJcbiAgICAgIH0pXHJcbiAgICBdXHJcbiAgICAvKlxyXG5cclxuICAgIGZvcihsZXQgYSA9IDA7YTwxMDthKyspe1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgVmVydEJveCh7XHJcbiAgICAgICAgcG9zaXRpb246e3g6MzIwLHk6MjUwICsgYSAqIDUwMH0sXHJcbiAgICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX1cclxuICAgICAgfSx7fSkpO1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgVmVydEJveCh7XHJcbiAgICAgICAgcG9zaXRpb246e3g6OTAwLHk6MjUwICsgYSAqIDUwMH0sXHJcbiAgICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX1cclxuICAgICAgfSx7fSkpO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IDA7YSA8IDEwMDsgYSsrKXtcclxuICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IGJveCh7XHJcbiAgICAgICAgcG9zaXRpb246e3g6NzAwICsgYSAqIDUwMCx5OjB9LFxyXG4gICAgICAgIHZlbG9jaXR5Ont4OjAseTowfSxcclxuICAgICAgICByb3RhdGlvbjowLFxyXG4gICAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9XHJcbiAgICAgIH0se30pKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5hZGRJdGVtcyhuZXcgUGxheWVyKHtcclxuICAgICAgcG9zaXRpb246e3g6NzAwLHk6MTUwfSxcclxuICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICByb3RhdGlvbjowLFxyXG4gICAgICBzY2FsaW5nOnt3aWR0aDoxLGhlaWdodDoxfX0se2lkOlwicGxheWVyXCJ9KS5jb21iaW5lZE9iamVjdHMoKSk7XHJcbiAgICB0aGlzLmFkZEl0ZW0obmV3IEN1cnNvcih7XHJcbiAgICAgIHBvc2l0aW9uOnt4OjAseTowfSxcclxuICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICByb3RhdGlvbjowLFxyXG4gICAgICBzY2FsaW5nOnt3aWR0aDoxLGhlaWdodDoxfX0se2lkOlwiQ3Vyc29yXCJ9KSk7XHJcbiAgICB0aGlzLmFkZEl0ZW0obmV3IEdvb21iYSh7XHJcbiAgICAgIHBvc2l0aW9uOnt4OjUwMCx5OjUwMH0sXHJcbiAgICAgIHZlbG9jaXR5Ont4OjAseTowfSxcclxuICAgICAgcm90YXRpb246MCxcclxuICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX0gXHJcbiAgICB9KSk7XHJcbiAgICAqL1xyXG4gICAgZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdLmh1ZCA9IG5ldyBPdmVyd29ybGRfSFVEKCk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyQ29udHJvbHMoKSB7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwiRXNjYXBlXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdLnN0YXRlLmRlYnVnID0gIXRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdLnN0YXRlLmRlYnVnO1xyXG4gICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRPYmooXCJwbGF5ZXJcIikgYXMgR29vbWJhO1xyXG4gICAgICBwbGF5ZXIuY29sbGlzaW9uID0gIXBsYXllci5jb2xsaXNpb247XHJcbiAgICAgIHBsYXllci5ncmF2aXR5ID0gIXBsYXllci5ncmF2aXR5O1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIm1vdXNlMGRvd25cIiwgZXhlY190eXBlLnJlcGVhdCwoKSA9PiB7XHJcbiAgICAgIGxldCBndW4gPSB0aGlzLmdldE9iakJ5VGFnKFwiZ3VuXCIpWzBdIGFzIEd1bjtcclxuICAgICAgaWYoZ3VuKXtcclxuICAgICAgICBsZXQgbXV6emxlID0gcm90YXRpb25fbGVuZ3RoKDMwLGd1bi5zdGF0ZS5yb3RhdGlvbik7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgeDpndW4uc3RhdGUucG9zaXRpb24ueCArIG11enpsZS54LFxyXG4gICAgICAgICAgeTpndW4uc3RhdGUucG9zaXRpb24ueSArIG11enpsZS55XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidWxsZXRzOmJ1bGxldFtdID0gW107XHJcbiAgICAgICAgZm9yKGxldCBhID0gMDthIDwgMTthICsrKXtcclxuICAgICAgICAgIGJ1bGxldHMucHVzaChuZXcgUm9ja2V0KHtcclxuICAgICAgICAgICAgcG9zaXRpb246e3g6cG9zaXRpb24ueCx5OnBvc2l0aW9uLnl9LFxyXG4gICAgICAgICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgICAgICAgIHJvdGF0aW9uOmd1bi5zdGF0ZS5yb3RhdGlvbixcclxuICAgICAgICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX1cclxuICAgICAgICAgIH0sZ3VuLnN0YXRlLnJvdGF0aW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubG9ja2VkX2J1bGxldCA9PSBudWxsKVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5sb2NrZWRfYnVsbGV0ID0gYnVsbGV0c1swXTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW1zKGJ1bGxldHMpO1xyXG4gICAgICB9XHJcbiAgICB9LDQwMClcclxuICB9XHJcbiAgcmVnaXN0ZXJQYXJ0aWNsZXMoKXtcclxuICAgIHRoaXMucGFydGljbGVzW1wic21va2VcIl0gPSB7XHJcbiAgICAgIHNwcml0ZTpcIi4vc3ByaXRlcy9mb2xkZXIvc21va2UucG5nXCIsXHJcbiAgICAgIGhlaWdodDo2NCxcclxuICAgICAgd2lkdGg6NjRcclxuICAgIH07XHJcbiAgICB0aGlzLnBhcnRpY2xlc1tcImV4cGxvc2lvblwiXSA9IHtcclxuICAgICAgc3ByaXRlOlwiLi9zcHJpdGVzL2ZvbGRlci9leHBsb3Npb24ucG5nXCIsXHJcbiAgICAgIGhlaWdodDoxMjgsXHJcbiAgICAgIHdpZHRoOjEyOFxyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0ZWYodGltZTogbnVtYmVyKSB7XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5zdGF0ZS5wYXVzZWQpIHtcclxuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCB0aGlzLm9iamVjdHMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICBhcHBseUdyYXZpdHkodGhpcy5vYmplY3RzW2FdLCAtMSAqIHRpbWUvMTYsIC0xNSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0T2JqQnlUYWcoXCJwbGF5ZXJcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgbGV0IGN1cnNvciA9IHRoaXMuZ2V0T2JqQnlUYWcoXCJDdXJzb3JcIilbMF0gYXMgQ3Vyc29yO1xyXG4gICAgICBsZXQgY2FtZXJhcyA9IGcuc3RhdGUuY2FtZXJhcztcclxuICAgICAgXHJcbiAgICAgIGlmIChwbGF5ZXIpIHsgICAgICAgIFxyXG4gICAgICAgIGNhbWVyYXNbMF0ueCA9IHBsYXllci5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gICAgICAgIGNhbWVyYXNbMF0ueSA9IHBsYXllci5zdGF0ZS5wb3NpdGlvbi55ICsgKGNhbWVyYXNbMF0uc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQvMiAtIHBsYXllci5oZWlnaHQvMik7ICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYodGFyZ2V0KXtcclxuICAgICAgICBjYW1lcmFzWzFdLnN0YXRlLnBvc2l0aW9uLnggPSB0YXJnZXQuc3RhdGUucG9zaXRpb24ueDtcclxuICAgICAgICBjYW1lcmFzWzFdLnN0YXRlLnBvc2l0aW9uLnkgPSB0YXJnZXQuc3RhdGUucG9zaXRpb24ueTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGN1cnNvcikge1xyXG4gICAgICAgIGN1cnNvci5jb2xsaXNpb24gPSBmYWxzZTtcclxuICAgICAgICBjdXJzb3IuZ3Jhdml0eSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UodGhpcy5nYW1lLnN0YXRlLmNhbWVyYXNbMF0pO1xyXG4gICAgICAgIGlmKG1vdXNlKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY3Vyc29yLnN0YXRlLnBvc2l0aW9uLnggPSBtb3VzZS54O1xyXG4gICAgICAgICAgY3Vyc29yLnN0YXRlLnBvc2l0aW9uLnkgPSBtb3VzZS55O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIHN1cGVyLnN0YXRlZih0aW1lKTtcclxuICB9XHJcblxyXG59XHJcbiIsIlxuICAgIFxuICAgIGltcG9ydCB7cm9vbX0gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XG4gICAgaW1wb3J0IHtnYW1lfSBmcm9tIFwiLi4vLi4vdmFuXCI7XG4gICAgaW1wb3J0IHtzdGF0ZV9jb25maWd9IGZyb20gXCIuLi8uLi9saWIvcm9vbVwiO1xuICAgIGltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi9UZXN0Ui5qc29uXCI7XG4gICAgbGV0IGNmaWcgPSBjb25maWcgYXMgdW5rbm93biBhcyBzdGF0ZV9jb25maWc7XG4gICAgaW50ZXJmYWNlIFRlc3RSX3N0YXRle1xuICAgIFxuICAgIH1cbiAgICBcbiAgICBcbiAgICBleHBvcnQgY2xhc3MgVGVzdFIgZXh0ZW5kcyByb29tPFRlc3RSX3N0YXRlPntcbiAgICAgIGJhY2tncm91bmRfdXJsPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vYy9jMi9QZXRlcl9HcmlmZmluLnBuZ1wiO1xuICAgICAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+KXtcbiAgICAgICAgc3VwZXIoZ2FtZSxjZmlnKTtcbiAgICAgIH1cbiAgICAgIHJlZ2lzdGVyQ29udHJvbHMoKXtcbiAgICBcbiAgICAgIH1cbiAgICAgIHJlZ2lzdGVyUGFydGljbGVzKCl7XG4gICAgXG4gICAgICB9XG4gICAgICBzdGF0ZWYoZGVsdGFfdGltZTpudW1iZXIpe1xuICAgICAgICBzdXBlci5zdGF0ZWYoZGVsdGFfdGltZSk7XG4gICAgICB9XG4gICAgXG4gICAgfVxuICAgIFxuICAgICIsImltcG9ydCB7IHJvb20sIGFwcGx5R3Jhdml0eSxvYmplY3Rfc3RhdGVfY29uZmlnLCBzdGF0ZV9jb25maWcgfSBmcm9tIFwiLi4vLi4vbGliL3Jvb21cIjtcclxuaW1wb3J0IHsgR29vbWJhIH0gZnJvbSBcIi4uL29iamVjdHMvR29vbWJhXCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZWRQbGF5ZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9Db250cm9sbGVkUGxheWVyXCI7XHJcbmltcG9ydCB7IEd1biB9IGZyb20gXCIuLi9vYmplY3RzL0d1blwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIi4uL29iamVjdHMvQ3Vyc29yXCI7XHJcbmltcG9ydCB7IGJveCB9IGZyb20gXCIuLi9vYmplY3RzL2JveFwiO1xyXG5pbXBvcnQgeyBWZXJ0Qm94IH0gZnJvbSBcIi4uL29iamVjdHMvVmVydEJveFwiO1xyXG5pbXBvcnQgeyB2ZWxvY2l0eUNvbGxpc2lvbkNoZWNrIH0gZnJvbSBcIi4uLy4uL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgZ3Jhdml0eV9vYmosIHJvdGF0aW9uX2xlbmd0aCB9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IFBvbGxfTW91c2UsIGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgSFVELCBUZXh0IH0gZnJvbSBcIi4uLy4uL2xpYi9odWRcIjtcclxuaW1wb3J0IHsgREVCVUcsIGdhbWUsIEdldFZpZXdwb3J0RGltZW5zaW9ucyx2aWV3cG9ydCwgc2V0RGVidWcgfSBmcm9tIFwiLi4vLi4vdmFuXCI7XHJcbmltcG9ydCB7YnVsbGV0LCBSb2NrZXR9IGZyb20gXCIuLi9vYmplY3RzL2J1bGxldFwiO1xyXG5pbXBvcnQge0NhbWVyYX0gZnJvbSBcIi4uLy4uL2xpYi9yZW5kZXJcIjtcclxuaW1wb3J0IHtnfSBmcm9tIFwiLi4vbWFpblwiO1xyXG5pbXBvcnQgKiBhcyBqc29uIGZyb20gXCIuL1VuZGVyd29ybGQuanNvblwiO1xyXG5pbnRlcmZhY2Ugb3ZlcndvcmxkX2kge1xyXG4gIHBsYXllcjogZ3Jhdml0eV9vYmosXHJcbiAgcGF1c2VkOiBib29sZWFuLFxyXG4gIGxvY2tlZF9idWxsZXQ6YnVsbGV0XHJcbn1cclxuXHJcbmNsYXNzIE92ZXJ3b3JsZF9IVUQgZXh0ZW5kcyBIVUQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudGV4dF9lbGVtZW50cy5wdXNoKG5ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQgKiA3LzhcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogNDQsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246XCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6MVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBsZXQgeCA9IGcuZ2V0Um9vbSgpLmdldE9iakJ5VGFnKFwiZHVtbXlcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBpZih4KVxyXG4gICAgICAgIHJldHVybiBgVGltZXMgQWlyc2hvdDoke3guc3RhdGUudGltZXNfYWlyc2hvdH1gO1xyXG4gICAgICByZXR1cm4gXCJcIlxyXG4gICAgfSkpO1xyXG4gICAgdGhpcy50ZXh0X2VsZW1lbnRzLnB1c2gobmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodCAqIDYvOFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiA0NCxcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6MVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBsZXQgeCA9IGcuZ2V0Um9vbSgpLmdldE9iakJ5VGFnKFwiZHVtbXlcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBpZih4KVxyXG4gICAgICAgIHJldHVybiBgTWF4IFRpbWVzIEFpcnNob3Q6JHtNYXRoLm1heCh4LnN0YXRlLnRpbWVzX2FpcnNob3QseC5zdGF0ZS5tYXhfdGltZXNfYWlyc2hvdCl9YDtcclxuICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEhlaWdodF9IVUQgZXh0ZW5kcyBIVUR7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnRleHRfZWxlbWVudHMucHVzaChuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogNjAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDE1LFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOlwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOjFcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgbGV0IHggPSBnLmdldFJvb20oKS5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgaWYoeClcclxuICAgICAgICByZXR1cm4gYEhlaWdodDoke01hdGguZmxvb3IoeC5zdGF0ZS5wb3NpdGlvbi55KX1gO1xyXG4gICAgICByZXR1cm4gXCJcIlxyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVuZGVyd29ybGQgZXh0ZW5kcyByb29tPG92ZXJ3b3JsZF9pPntcclxuICBiYWNrZ3JvdW5kX3VybCA9IFwiLi9zcHJpdGVzL29yaWdfNzE5Mjc1LmpwZ1wiO1xyXG4gIG9iamVjdHM6Z3Jhdml0eV9vYmpbXTtcclxuICBjb25zdHJ1Y3RvcihnYW1lOmdhbWU8dW5rbm93bj4pIHtcclxuICAgIHN1cGVyKGdhbWUsanNvbiBhcyB1bmtub3duIGFzIHN0YXRlX2NvbmZpZyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwbGF5ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgcGF1c2VkOiBmYWxzZSxcclxuICAgICAgbG9ja2VkX2J1bGxldDpudWxsXHJcbiAgICB9O1xyXG4gICAgZ2FtZS5zdGF0ZS5jYW1lcmFzID0gW1xyXG4gICAgICBuZXcgQ2FtZXJhKHtcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowLFxyXG4gICAgICAgIGRpbWVuc2lvbnM6e1xyXG4gICAgICAgICAgaGVpZ2h0OnZpZXdwb3J0LmhlaWdodCxcclxuICAgICAgICAgIHdpZHRoOnZpZXdwb3J0LndpZHRoICogNC81XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsaW5nOjAuNSxcclxuICAgICAgICBkZWJ1ZzpmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgICx7XHJcbiAgICAgICAgeDoxLFxyXG4gICAgICAgIHk6MCxcclxuICAgICAgICB3aWR0aDowLjgsXHJcbiAgICAgICAgaGVpZ2h0OjFcclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBDYW1lcmEoe1xyXG4gICAgICAgIHg6MCxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgZGltZW5zaW9uczp7XHJcbiAgICAgICAgICB3aWR0aDp2aWV3cG9ydC53aWR0aC81LFxyXG4gICAgICAgICAgaGVpZ2h0OnZpZXdwb3J0LmhlaWdodFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGluZzowLjIsXHJcbiAgICAgICAgZGVidWc6ZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgeDp2aWV3cG9ydC53aWR0aCAqIDQvNSxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgd2lkdGg6MC4yLFxyXG4gICAgICAgIGhlaWdodDoxXHJcbiAgICAgIH0pXHJcbiAgICBdXHJcbiAgICAvKlxyXG4gICAgZm9yKGxldCBhID0gMDthPDEwO2ErKyl7XHJcbiAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBWZXJ0Qm94KHt4OjMyMCx5OjI1MCArIGEgKiA1MDB9LDAsMSkpO1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgVmVydEJveCh7eDo5MDAseToyNTAgKyBhICogNTAwfSwwLDEpKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCAxMDA7IGErKyl7XHJcbiAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBib3goe3g6NzAwICsgYSAqIDUwMCx5OjB9LDAsMSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmFkZEl0ZW1zKFsuLi5uZXcgUGxheWVyKHt4OjcwMCx5OjE1MH0sMCwxLHtpZDpcInBsYXllclwifSkuY29tYmluZWRfb2JqZWN0cygpXSlcclxuICAgIHRoaXMuYWRkSXRlbShuZXcgQ3Vyc29yKHt4OjAseTowfSwwLDEse2lkOlwiQ3Vyc29yXCJ9KSk7XHJcbiAgICB0aGlzLmFkZEl0ZW0obmV3IEdvb21iYSh7eDo1MDAseTo1MDB9LDAsMSkpO1xyXG4gICAgKi9cclxuICAgIGdhbWUuc3RhdGUuY2FtZXJhc1swXS5odWQgPSBuZXcgT3ZlcndvcmxkX0hVRCgpO1xyXG4gICAgZ2FtZS5zdGF0ZS5jYW1lcmFzWzFdLmh1ZCA9IG5ldyBIZWlnaHRfSFVEKCk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyQ29udHJvbHMoKSB7XHJcbiAgICB0aGlzLmJpbmRDb250cm9sKFwiRXNjYXBlXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdLnN0YXRlLmRlYnVnID0gIXRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdLnN0YXRlLmRlYnVnO1xyXG4gICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRPYmooXCJwbGF5ZXJcIikgYXMgR29vbWJhO1xyXG4gICAgICBwbGF5ZXIuY29sbGlzaW9uID0gIXBsYXllci5jb2xsaXNpb247XHJcbiAgICAgIHBsYXllci5ncmF2aXR5ID0gIXBsYXllci5ncmF2aXR5O1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIm1vdXNlMGRvd25cIiwgZXhlY190eXBlLnJlcGVhdCwoKSA9PiB7XHJcbiAgICAgIGxldCBndW4gPSB0aGlzLmdldE9iaihcImd1blwiKSBhcyBHdW47XHJcbiAgICAgIGlmKGd1bil7XHJcbiAgICAgICAgbGV0IG11enpsZSA9IHJvdGF0aW9uX2xlbmd0aCgzMCxndW4uc3RhdGUucm90YXRpb24pO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgIHg6Z3VuLnN0YXRlLnBvc2l0aW9uLnggKyBtdXp6bGUueCxcclxuICAgICAgICAgIHk6Z3VuLnN0YXRlLnBvc2l0aW9uLnkgKyBtdXp6bGUueVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYnVsbGV0cyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgYSA9IDA7YSA8IDE7YSArKyl7XHJcbiAgICAgICAgICBidWxsZXRzLnB1c2gobmV3IFJvY2tldCh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOnt4OnBvc2l0aW9uLngseTpwb3NpdGlvbi55fSxcclxuICAgICAgICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICAgICAgICByb3RhdGlvbjpndW4uc3RhdGUucm90YXRpb24sXHJcbiAgICAgICAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9XHJcbiAgICAgICAgICB9LHt9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubG9ja2VkX2J1bGxldCA9PSBudWxsKVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5sb2NrZWRfYnVsbGV0ID0gYnVsbGV0c1swXTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW1zKGJ1bGxldHMpO1xyXG4gICAgICB9XHJcbiAgICB9LDQwMClcclxuICB9XHJcbiAgcmVnaXN0ZXJQYXJ0aWNsZXMoKXtcclxuICAgIHRoaXMucGFydGljbGVzW1wic21va2VcIl0gPSB7XHJcbiAgICAgIHNwcml0ZTpcIi4vc3ByaXRlcy9mb2xkZXIvc21va2UucG5nXCIsXHJcbiAgICAgIGhlaWdodDo2NCxcclxuICAgICAgd2lkdGg6NjRcclxuICAgIH07XHJcbiAgICB0aGlzLnBhcnRpY2xlc1tcImV4cGxvc2lvblwiXSA9IHtcclxuICAgICAgc3ByaXRlOlwiLi9zcHJpdGVzL2ZvbGRlci9leHBsb3Npb24ucG5nXCIsXHJcbiAgICAgIGhlaWdodDoxMjgsXHJcbiAgICAgIHdpZHRoOjEyOFxyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0ZWYodGltZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUucGF1c2VkKSB7XHJcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgYXBwbHlHcmF2aXR5KHRoaXMub2JqZWN0c1thXSwgLTEsIC0xNSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0T2JqQnlUYWcoXCJwbGF5ZXJcIilbMF0gYXMgR29vbWJhO1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgbGV0IGN1cnNvciA9IHRoaXMuZ2V0T2JqQnlUYWcoXCJDdXJzb3JcIilbMF0gYXMgQ3Vyc29yO1xyXG4gICAgICBsZXQgY2FtZXJhcyA9IGcuc3RhdGUuY2FtZXJhcztcclxuICAgICAgXHJcbiAgICAgIGlmIChwbGF5ZXIpIHsgICAgICAgIFxyXG4gICAgICAgIGNhbWVyYXNbMF0ueCA9IHBsYXllci5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gICAgICAgIGNhbWVyYXNbMF0ueSA9IHBsYXllci5zdGF0ZS5wb3NpdGlvbi55ICsgKGNhbWVyYXNbMF0uc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQvMiAtIHBsYXllci5oZWlnaHQvMik7ICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYodGFyZ2V0KXtcclxuICAgICAgICBjYW1lcmFzWzFdLnN0YXRlLnBvc2l0aW9uLnggPSB0YXJnZXQuc3RhdGUucG9zaXRpb24ueDtcclxuICAgICAgICBjYW1lcmFzWzFdLnN0YXRlLnBvc2l0aW9uLnkgPSB0YXJnZXQuc3RhdGUucG9zaXRpb24ueTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGN1cnNvcikge1xyXG4gICAgICAgIGN1cnNvci5jb2xsaXNpb24gPSBmYWxzZTtcclxuICAgICAgICBjdXJzb3IuZ3Jhdml0eSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UodGhpcy5nYW1lLnN0YXRlLmNhbWVyYXNbMF0pO1xyXG4gICAgICAgIGN1cnNvci5zdGF0ZS5wb3NpdGlvbi54ID0gbW91c2UueDtcclxuICAgICAgICBjdXJzb3Iuc3RhdGUucG9zaXRpb24ueSA9IG1vdXNlLnk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBzdXBlci5zdGF0ZWYodGltZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJcbmludGVyZmFjZSByb29tX2RpciB7XG4gIFtpbmRleDpzdHJpbmddOmFueVxufVxuaW1wb3J0IHtCb2FyZH0gZnJvbSBcIi4vQm9hcmRcIjtcbmltcG9ydCB7T3ZlcndvcmxkfSBmcm9tIFwiLi9PdmVyd29ybGRcIjtcbmltcG9ydCB7VGVzdFJ9IGZyb20gXCIuL1Rlc3RSXCI7XG5pbXBvcnQge1VuZGVyd29ybGR9IGZyb20gXCIuL1VuZGVyd29ybGRcIjtcbmV4cG9ydCBsZXQgcm9vbXM6cm9vbV9kaXIgPSB7XG5cdEJvYXJkOkJvYXJkLFxuXHRPdmVyd29ybGQ6T3ZlcndvcmxkLFxuXHRUZXN0UjpUZXN0Uixcblx0VW5kZXJ3b3JsZDpVbmRlcndvcmxkLFxufSIsImludGVyZmFjZSBzb3VuZF9zdG9yYWdlIHtcclxuICBbaW5kZXg6IHN0cmluZ106IEhUTUxBdWRpb0VsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGF1ZGlvIHtcclxuICBzb3VuZHM6IHNvdW5kX3N0b3JhZ2UgPSB7fTtcclxuICBhZGQobmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5zb3VuZHNbbmFtZV0gPSBuZXcgQXVkaW8odXJsKTtcclxuICB9XHJcbiAgYXN5bmMgbG9hZCgpIHtcclxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zb3VuZHMpO1xyXG4gICAgbGV0IHByb21pc2VzID0ga2V5cy5tYXAoKGtleSkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc291bmRzW2tleV0uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXl0aHJvdWdoXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICB0cnl7XHJcbiAgICAgIGxldCB4ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICByZXR1cm4oeCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBsYXkobmFtZTpzdHJpbmcsdm9sdW1lOm51bWJlcil7XHJcbiAgICBsZXQgYSA9IHRoaXMuc291bmRzW25hbWVdO1xyXG4gICAgYS5wYXVzZSgpXHJcbiAgICBhLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGEudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgYS5wbGF5KCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtvYmosZ2V0SWR9IGZyb20gXCIuLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlfSBmcm9tIFwiLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7ZGVlcH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBjb2xsaXNpb25fYm94e1xyXG4gIHg6bnVtYmVyO1xyXG4gIHk6bnVtYmVyO1xyXG4gIHdpZHRoOm51bWJlcjtcclxuICBoZWlnaHQ6bnVtYmVyO1xyXG59XHJcblxyXG5lbnVtIGRpcmVjdGlvbntcclxuICBsZWZ0LFxyXG4gIHJpZ2h0LFxyXG4gIHVwLFxyXG4gIGRvd25cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX2FsbF9vYmplY3RzKGM6IGNvbGxpc2lvbl9ib3gsb2JqczpvYmpbXSxleGVtcHRpb246c3RyaW5nW10gPSBbXSk6b2JqW117XHJcbiAgcmV0dXJuIG9ianMuZmlsdGVyKChhKT0+KCFleGVtcHRpb24uc29tZSgoYik9PmEudGFncy5pbmRleE9mKGIpICE9PSAtMSkgJiYgYS5jb2xsaWRlc1dpdGhCb3goYykpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX2FsbF9jb2xsaXNpb25zKGM6IGNvbGxpc2lvbl9ib3gsb2JqczpvYmpbXSxleGVtcHRpb246c3RyaW5nW10gPSBbXSk6QXJyYXk8b2JqPntcclxuICBsZXQgbWF0Y2hlZCA9IFtdO1xyXG4gIGZvciAobGV0IGEgb2Ygb2Jqcykge1xyXG4gICAgaWYgKCFleGVtcHRpb24uc29tZSgoYik9PmEudGFncy5pbmRleE9mKGIpICE9PSAtMSkgJiYgYS5jb2xsaXNpb24gJiYgYS5jb2xsaWRlc1dpdGhCb3goYykpIHtcclxuICAgICAgbWF0Y2hlZC5wdXNoKGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbWF0Y2hlZFxyXG59XHJcbi8vQ2hlY2tzIHVwIHRvIHRoZSBmaXJzdCBjb2xsaXNpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX2NvbGxpc2lvbnMoYzogY29sbGlzaW9uX2JveCwgb2Jqczogb2JqW10sIGV4ZW1wdGlvbjpzdHJpbmcpIHtcclxuICBmb3IgKGxldCBhIG9mIG9ianMpIHtcclxuICAgIGlmIChhLmlkICE9PSBleGVtcHRpb24gJiYgYS5jb2xsaXNpb24gJiYgYS5jb2xsaWRlc1dpdGhCb3goYykpIHtcclxuICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2ZWxvY2l0eV9tYXgodmVsb2NpdHk6bnVtYmVyLGJveDpjb2xsaXNpb25fYm94LG9ianM6b2JqW10sIGV4ZW1wdGlvbjpzdHJpbmcsZGlyOmRpcmVjdGlvbil7XHJcbiAgbGV0IGNvbGxpc2lvbiA9IGNoZWNrX2NvbGxpc2lvbnMoYm94LCBvYmpzLCBleGVtcHRpb24pO1xyXG4gIGlmKGNvbGxpc2lvbiA9PSBudWxsKXtcclxuICAgIHJldHVybiB2ZWxvY2l0eTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGxldCBjb2xsaWRlciA9IGNvbGxpc2lvbjtcclxuICAgIGxldCBvcmlnaW4gPSBnZXRJZChvYmpzLGV4ZW1wdGlvbik7XHJcbiAgICBsZXQgb3JpZ19zdCA9IG9yaWdpbi5zdGF0ZSBhcyBvYmpfc3RhdGU7XHJcbiAgICBsZXQgY29sbGlkZXJfc3QgPSBjb2xsaWRlci5zdGF0ZSBhcyBvYmpfc3RhdGU7XHJcbiAgICBsZXQgb3JpZ19jb2wgPSBvcmlnaW4uZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gICAgbGV0IGNvbGxpZGVyX2NvbCA9IGNvbGxpZGVyLmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICAgIGlmKGRpciA9PSBkaXJlY3Rpb24ubGVmdCl7XHJcbiAgICAgIHJldHVybiAob3JpZ19jb2wueCAtIG9yaWdfY29sLndpZHRoLzIpIC0gKGNvbGxpZGVyX2NvbC54ICsgY29sbGlkZXJfY29sLndpZHRoLzIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkaXIgPT0gZGlyZWN0aW9uLnJpZ2h0KXtcclxuICAgICAgcmV0dXJuIChjb2xsaWRlcl9jb2wueCAtIGNvbGxpZGVyX2NvbC53aWR0aC8yKSAtIChvcmlnX2NvbC54ICsgb3JpZ19jb2wud2lkdGgvMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRpciA9PSBkaXJlY3Rpb24uZG93bil7XHJcbiAgICAgIHJldHVybiAob3JpZ19jb2wueSAtIG9yaWdfY29sLmhlaWdodC8yKSAtIChjb2xsaWRlcl9jb2wueSArIGNvbGxpZGVyX2NvbC5oZWlnaHQvMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRpciA9PSBkaXJlY3Rpb24udXApe1xyXG4gICAgICByZXR1cm4gKGNvbGxpZGVyX2NvbC55IC0gY29sbGlkZXJfY29sLmhlaWdodC8yKSAtIChvcmlnX2NvbC55ICsgb3JpZ19jb2wuaGVpZ2h0LzIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlbG9jaXR5Q29sbGlzaW9uQ2hlY2sob2JqZWN0Om9iaixsaXN0Om9ialtdKSB7XHJcbiAgbGlzdCA9IFsuLi5saXN0XTtcclxuICBsZXQgb2IgPSBvYmplY3Q7XHJcbiAgbGV0IHN0ID0gb2JqZWN0LnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICBsZXQgeF92ZWwgPSBzdC52ZWxvY2l0eS54O1xyXG4gIGxldCB5X3ZlbCA9IHN0LnZlbG9jaXR5Lnk7XHJcbiAgaWYoIW9iLmNvbGxpc2lvbil7XHJcbiAgICAoPG9ial9zdGF0ZT5vYi5zdGF0ZSkucG9zaXRpb24ueCArPSAoPG9ial9zdGF0ZT5vYi5zdGF0ZSkudmVsb2NpdHkueDtcclxuICAgICg8b2JqX3N0YXRlPm9iLnN0YXRlKS5wb3NpdGlvbi55ICs9ICg8b2JqX3N0YXRlPm9iLnN0YXRlKS52ZWxvY2l0eS55O1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBsZXQgY29sX2JveCA9IG9iLmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICBpZiAoeF92ZWwgPiAwKSB7XHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICB4OiBjb2xfYm94LnggKyBjb2xfYm94LndpZHRoLzIgKyB4X3ZlbC8yLFxyXG4gICAgICB5OiBjb2xfYm94LnksXHJcbiAgICAgIHdpZHRoOiB4X3ZlbCxcclxuICAgICAgaGVpZ2h0OiBjb2xfYm94LmhlaWdodFxyXG4gICAgfTtcclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueCxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24ucmlnaHQpO1xyXG4gICAgaWYodmVsID4gMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnggKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueCA9IDA7ICBcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSBpZiAoeF92ZWwgPCAwKSB7XHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICB4OiB4X3ZlbC8yICsgY29sX2JveC54IC0gY29sX2JveC53aWR0aC8yLFxyXG4gICAgICB5OiBjb2xfYm94LnksXHJcbiAgICAgIHdpZHRoOiAtMSAqIHhfdmVsLFxyXG4gICAgICBoZWlnaHQ6IGNvbF9ib3guaGVpZ2h0XHJcbiAgICB9XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LngsYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLmxlZnQpO1xyXG4gICAgaWYodmVsIDwgMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnggKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueCA9IDA7IFxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoeV92ZWwgPiAwKSB7XHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICB4OiBjb2xfYm94LngsXHJcbiAgICAgIHk6IGNvbF9ib3gueSArIGNvbF9ib3guaGVpZ2h0LzIgKyB5X3ZlbC8yLFxyXG4gICAgICB3aWR0aDogY29sX2JveC53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB5X3ZlbFxyXG4gICAgfVxyXG4gICAgbGV0IHZlbCA9IHZlbG9jaXR5X21heChzdC52ZWxvY2l0eS55LGJveCxsaXN0LG9iLmlkLGRpcmVjdGlvbi51cCk7XHJcbiAgICBpZih2ZWwgPiAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueSArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS55ID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSBpZiAoeV92ZWwgPCAwKSB7XHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICB4OiBjb2xfYm94LngsXHJcbiAgICAgIHk6IHlfdmVsLzIgKyBjb2xfYm94LnkgLSBjb2xfYm94LmhlaWdodC8yLFxyXG4gICAgICB3aWR0aDogY29sX2JveC53aWR0aCxcclxuICAgICAgaGVpZ2h0OiAtMSAqIHlfdmVsXHJcbiAgICB9XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LnksYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLmRvd24pO1xyXG4gICAgaWYodmVsIDwgMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnkgKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9nYW1lL21haW5cIjtcclxuaW1wb3J0IHtnYW1lLFBBVVNFRCxERUJVRywgR2V0U2NyZWVuRGltZW5zaW9ucyxHZXRWaWV3cG9ydERpbWVuc2lvbnN9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgY29sbGlzaW9uX2JveCB9IGZyb20gXCIuL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge29ian0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5pbXBvcnQge3Bvc2l0aW9ufSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQge2RlYnVnX3N0YXRlfSBmcm9tIFwiLi9kZWJ1Z1wiO1xyXG5cclxuaW50ZXJmYWNlIG1vdXNlUG9ze1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyLFxyXG4gIGxhc3Q6e1xyXG4gICAgeDpudW1iZXIsXHJcbiAgICB5Om51bWJlclxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGNvbnRyb2xfZnVuY3tcclxuICAoKTp2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBtb3VzZUJpbmRze1xyXG4gIFtrZXk6c3RyaW5nXTogQXJyYXk8W2NvbnRyb2xfZnVuYyxvYmpdPlxyXG59XHJcblxyXG5pbnRlcmZhY2Uga2V5QmluZHN7XHJcbiAgW2tleTpzdHJpbmddOiBBcnJheTxjb250cm9sX2Z1bmM+XHJcbn1cclxubGV0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpO1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9jbGlja19oYW5kbGVyKGdhbWU6Z2FtZTx1bmtub3duPil7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xyXG4gICAgXHJcbiAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGdhbWUuc3RhdGUuY2FtZXJhc1swXSk7XHJcbiAgICBpZighbW91c2Upe1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCBib3g6Y29sbGlzaW9uX2JveCA9IHtcclxuICAgICAgeDptb3VzZS54LFxyXG4gICAgICB5Om1vdXNlLnksXHJcbiAgICAgIGhlaWdodDoxLFxyXG4gICAgICB3aWR0aDoxXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gICAgZm9yKGxldCBhID0gMDthIDwgZC5sZW5ndGg7YSsrKXtcclxuICAgICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgICAgaWYoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSBcIm1vdXNlMVwiICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIGlmKHNlbGVjdGVkLm9iaiAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgIGlmKHNlbGVjdGVkLm9iai5jb2xsaWRlc1dpdGhCb3goYm94KSl7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9ICBcclxuICB9KVxyXG59XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiAgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcImRvd25cIikgICYmICFzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIHNlbGVjdGVkLnJlcGVhdF90aW1lci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcInVwXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNldXBcIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2UpIHtcclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgfVxyXG4gICBlbHNlIGlmKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwidXBcIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2V1cFwiKSAmJiBzZWxlY3RlZC5leGVjdXRlZCAmJiBzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICBsZXQgZyA9IFsuLi5yZXBlYXRfYmluZHNdO1xyXG4gICAgIGZvcihsZXQgYSA9IDA7IGEgPCBnLmxlbmd0aDthKyspe1xyXG4gICAgICAgaWYoZ1thXS5iaW5kLmlkID09PSBzZWxlY3RlZC5pZCl7XHJcbiAgICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG4gIH1cclxufSlcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZSkgPT4ge1xyXG4gIFxyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcInVwXCIpICAmJiAhc2VsZWN0ZWQuZXhlY3V0ZWQpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgICBzZWxlY3RlZC5yZXBlYXRfdGltZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJkb3duXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNlZG93blwiKSAmJiBzZWxlY3RlZC5leGVjdXRlZCAmJiBzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSkge1xyXG4gICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJkb3duXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNlZG93blwiKSAmJiBzZWxlY3RlZC5leGVjdXRlZCAmJiBzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgbGV0IGcgPSBbLi4ucmVwZWF0X2JpbmRzXTtcclxuICAgICAgZm9yKGxldCBhID0gMDsgYSA8IGcubGVuZ3RoO2ErKyl7XHJcbiAgICAgICAgaWYoZ1thXS5iaW5kLmlkID09PSBzZWxlY3RlZC5pZCl7XHJcbiAgICAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgZ1thXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmludGVyZmFjZSBoZWxkX2tleXN7XHJcbiAgW2luZGV4OnN0cmluZ106Ym9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGhlbGRfa2V5czpoZWxkX2tleXMgPSB7fTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwoZSk9PntcclxuICBsZXQgY29kZTpzdHJpbmc7XHJcblxyXG4gIGlmKGUuZGVsdGFZIDwgMCl7XHJcbiAgICBjb2RlID0gXCJzY3JvbGx1cFwiO1xyXG4gIH1cclxuICBlbHNlIGlmKGUuZGVsdGFZID4gMCl7XHJcbiAgICBjb2RlID0gXCJzY3JvbGxkb3duXCI7XHJcbiAgfVxyXG5cclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgXHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIHNlbGVjdGVkLmtleSA9PT0gY29kZSkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gIGhlbGRfa2V5c1tlLmNvZGVdID0gdHJ1ZTtcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLmtleWJvYXJkICYmIHNlbGVjdGVkLmtleSA9PT0gZS5jb2RlICAmJiAhc2VsZWN0ZWQuZXhlY3V0ZWQpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgICBmb3IobGV0IGMgb2YgcmVwZWF0X2JpbmRzKXtcclxuICAgICAgICAgIGlmKGMuYmluZC5pZCA9PSBzZWxlY3RlZC5pZCl7XHJcbiAgICAgICAgICAgIGMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbn0pXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcclxuICBoZWxkX2tleXNbZS5jb2RlXSA9IGZhbHNlO1xyXG4gIFxyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUua2V5Ym9hcmQgJiYgc2VsZWN0ZWQua2V5ID09PSBlLmNvZGUgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2UgKXtcclxuICAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgICAgbGV0IGcgPSBbLi4ucmVwZWF0X2JpbmRzXTtcclxuICAgICAgICBmb3IobGV0IGEgPSAwOyBhIDwgZy5sZW5ndGg7YSsrKXtcclxuICAgICAgICAgIGlmKGdbYV0uYmluZC5pZCA9PT0gc2VsZWN0ZWQuaWQpe1xyXG4gICAgICAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBnW2FdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG5sZXQgdHJhY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xyXG4gIHZhciByZWN0ID0gKGUudGFyZ2V0IGFzIEhUTUxDYW52YXNFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA7XHJcbiAgLy9jb25zb2xlLmxvZyhlLnRhcmdldClcclxuICBsYXN0X3ggPSB4O1xyXG4gIGxhc3RfeSA9IHk7XHJcbiAgeCA9IGUuY2xpZW50WDsgLy94IHBvc2l0aW9uIHdpdGhpbiB0aGUgZWxlbWVudC5cclxuICB5ID0gZS5jbGllbnRZOyAgLy95IHBvc2l0aW9uIHdpdGhpbiB0aGUgZWxlbWVudC5cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgZW51bSBidHlwZXtcclxuICBtb3VzZSxcclxuICBrZXlib2FyZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgYmluZHtcclxuICBrZXk6c3RyaW5nLFxyXG4gIHR5cGU6YnR5cGUsXHJcbiAgaWQ6bnVtYmVyLFxyXG4gIGZ1bmN0aW9uOmNvbnRyb2xfZnVuYyxcclxuICBleGVjdXRlOmV4ZWNfdHlwZSxcclxuICByZXBlYXRfdGltZXI/OnJlcGVhdF9iaW5kLFxyXG4gIG9iaj86b2JqLFxyXG4gIGV4ZWN1dGVkPzpib29sZWFuLFxyXG4gIGludGVydmFsPzpudW1iZXIsXHJcbiAgY2FtZXJhPzpDYW1lcmFcclxufVxyXG5cclxuaW50ZXJmYWNlIHJlcGVhdF9iaW5ke1xyXG4gIGJpbmQ6YmluZCxcclxuICB0aW1lcjpudW1iZXIsXHJcbiAgaW50ZXJ2YWw6bnVtYmVyLFxyXG4gIGFjdGl2ZTpib29sZWFuXHJcbn1cclxuXHJcbmxldCB4ID0gMDtcclxubGV0IHkgPSAwO1xyXG5sZXQgbGFzdF94ID0gMDtcclxubGV0IGxhc3RfeSA9IDA7XHJcbmxldCBiaW5kczprZXlCaW5kcyA9IHt9O1xyXG5leHBvcnQgbGV0IGRlYnVnX2JpbmRzOmJpbmRbXSA9IFtdO1xyXG5sZXQgbW91c2VCaW5kczptb3VzZUJpbmRzID0ge307XHJcbmxldCBiaW5kX2NvdW50ID0gMDtcclxuXHJcbmxldCBhbGxfYmluZHM6QXJyYXk8YmluZD4gPSBbXVxyXG5cclxubGV0IHJlcGVhdF9iaW5kczpBcnJheTxyZXBlYXRfYmluZD4gPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQb2xsX01vdXNlKGNhbWVyYTpDYW1lcmEsY2FudmFzOkhUTUxDYW52YXNFbGVtZW50ID0gZy5zdGF0ZS5jYW52YXMpOnBvc2l0aW9ue1xyXG4gIGxldCBoZWlnaHQgPSBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQ7XHJcbiAgbGV0IHdyYXRpbyA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FudmFzKS53aWR0aCkvR2V0Vmlld3BvcnREaW1lbnNpb25zKCkud2lkdGg7XHJcbiAgbGV0IHZyYXRpbyA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FudmFzKS5oZWlnaHQpL0dldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodDtcclxuICBsZXQgYm91bmRzID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGlmKHggPiBib3VuZHMubGVmdCAmJiB4IDwgYm91bmRzLnJpZ2h0ICYmIHkgPCBib3VuZHMuYm90dG9tICYmIHkgPiBib3VuZHMudG9wKXtcclxuICAgIFxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIHg6ICgoeCAtIGJvdW5kcy5sZWZ0IC0gY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngpL3dyYXRpby9jYW1lcmEuc3RhdGUuc2NhbGluZyArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgvY2FtZXJhLnN0YXRlLnNjYWxpbmcvMikgLFxyXG4gICAgICB5OiAoKGhlaWdodCAtICh5LWJvdW5kcy50b3ApL3ZyYXRpbykvY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodC9jYW1lcmEuc3RhdGUuc2NhbGluZy8yIC0gY2FtZXJhLnN0YXRlLnZpZXdwb3J0LnkpXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhlY3V0ZVJlcGVhdEJpbmRzKGI6bnVtYmVyKXtcclxuICBmb3IobGV0IGEgb2YgcmVwZWF0X2JpbmRzKXtcclxuICAgIGlmKGEuYmluZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0ICYmIGEudGltZXIgPT0gMCAmJiBhLmFjdGl2ZSl7XHJcbiAgICAgIGEuYmluZC5mdW5jdGlvbigpO1xyXG4gICAgfVxyXG4gICAgaWYoYS5hY3RpdmUgfHwgKCFhLmFjdGl2ZSAmJiBhLnRpbWVyICE9IDApKVxyXG4gICAgICBhLnRpbWVyICs9IGI7XHJcbiAgICBpZihhLnRpbWVyID4gYS5pbnRlcnZhbCl7XHJcbiAgICAgIGEudGltZXIgPSAwOyBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVbmJpbmQoYmluZF9pZDpudW1iZXIpe1xyXG4gIGZvcihsZXQgYSA9IDA7YSA8IGFsbF9iaW5kcy5sZW5ndGg7IGErKyl7XHJcbiAgICBpZihhbGxfYmluZHNbYV0uaWQgPT0gYmluZF9pZCl7XHJcbiAgICAgIGFsbF9iaW5kcy5zcGxpY2UoYSwxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvcihsZXQgYSA9IDA7YSA8IHJlcGVhdF9iaW5kcy5sZW5ndGg7IGErKyl7XHJcbiAgICBpZihyZXBlYXRfYmluZHNbYV0uYmluZC5pZCA9PSBiaW5kX2lkKXtcclxuICAgICAgcmVwZWF0X2JpbmRzLnNwbGljZShhLDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIGV4ZWNfdHlwZXtcclxuICBvbmNlLFxyXG4gIHJlcGVhdFxyXG59XHJcblxyXG5sZXQgaWQgPSAwO1xyXG5leHBvcnQgZnVuY3Rpb24gQmluZChrZXluYW1lOnN0cmluZyxmdW5jOmNvbnRyb2xfZnVuYyx0eXBlOmV4ZWNfdHlwZSxpbnRlcnZhbDpudW1iZXIsb2JqZWN0PzpvYmopOm51bWJlcntcclxuICBpZihrZXluYW1lLnNsaWNlKDAsNSkgPT09IFwibW91c2VcIil7XHJcbiAgICBsZXQgYjpiaW5kID0ge1xyXG4gICAgICBrZXk6a2V5bmFtZSxcclxuICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgaWQsXHJcbiAgICAgIGZ1bmN0aW9uOmZ1bmMsXHJcbiAgICAgIG9iajpvYmplY3QsXHJcbiAgICAgIGV4ZWN1dGU6dHlwZSxcclxuICAgICAgZXhlY3V0ZWQ6ZmFsc2UsXHJcbiAgICAgIGludGVydmFsXHJcbiAgICB9O1xyXG4gICAgaWYodHlwZSA9PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgYi5yZXBlYXRfdGltZXIgPSB7XHJcbiAgICAgICAgYmluZDpiLFxyXG4gICAgICAgIHRpbWVyOjAsXHJcbiAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgYWN0aXZlOmZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmVwZWF0X2JpbmRzLnB1c2goYi5yZXBlYXRfdGltZXIpO1xyXG4gICAgfVxyXG4gICAgYWxsX2JpbmRzLnB1c2goYik7XHJcblxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgbGV0IGI6YmluZCA9IHtcclxuICAgICAga2V5OmtleW5hbWUsXHJcbiAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgIGlkLFxyXG4gICAgICBmdW5jdGlvbjpmdW5jLFxyXG4gICAgICBleGVjdXRlOnR5cGUsXHJcbiAgICAgIGV4ZWN1dGVkOmZhbHNlLFxyXG4gICAgICBpbnRlcnZhbFxyXG4gICAgfVxyXG4gICAgaWYodHlwZSA9PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgYi5yZXBlYXRfdGltZXIgPSB7XHJcbiAgICAgICAgYmluZDpiLFxyXG4gICAgICAgIHRpbWVyOjAsXHJcbiAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgYWN0aXZlOmZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmVwZWF0X2JpbmRzLnB1c2goYi5yZXBlYXRfdGltZXIpO1xyXG4gICAgfVxyXG4gICAgYWxsX2JpbmRzLnB1c2goYik7XHJcbiAgfVxyXG4gIGlkKys7XHJcbiAgcmV0dXJuIGlkIC0gMTtcclxufSIsImltcG9ydCB7IG9iaiwgcGFyYW1zIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmxldCB7IGlwY1JlbmRlcmVyIH0gPSB3aW5kb3cucmVxdWlyZShcImVsZWN0cm9uXCIpO1xyXG5jb25zdCBwYXRoID0gd2luZG93LnJlcXVpcmUoXCJwYXRoXCIpO1xyXG5sZXQgZnMgPSB3aW5kb3cucmVxdWlyZShcImZzXCIpO1xyXG5pbXBvcnQgeyBwcmVmYWJzIH0gZnJvbSBcIi4uL2dhbWUvb2JqZWN0cy9wcmVmYWJzXCI7XHJcbmltcG9ydCB7IHByb2plY3RfcGF0aCwgREVCVUcsIFBBVVNFRCwgc2V0UGF1c2VkLCB2aWV3cG9ydCB9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9nYW1lL21haW5cIjtcclxuaW1wb3J0IHsgcm9vbXMgYXMgcm9vbV9saXN0IH0gZnJvbSBcIi4uL2dhbWUvcm9vbXMvcm9vbXNcIjtcclxuaW1wb3J0IHsgQmluZCwgYnR5cGUsIFBvbGxfTW91c2UsIGV4ZWNfdHlwZSwgaGVsZF9rZXlzLCBkZWJ1Z19iaW5kcyB9IGZyb20gXCIuLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgSFVELCBUZXh0IH0gZnJvbSBcIi4uL2xpYi9odWRcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4uL2xpYi9yZW5kZXJcIjtcclxuaW1wb3J0IHsgcG9zaXRpb24sIGRpbWVuc2lvbnMsIHZlbG9jaXR5IH0gZnJvbSBcIi4uL2xpYi9zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlYnVnX2h1ZCBleHRlbmRzIEhVRCB7XHJcbiAgc2V0VGV4dEVsZW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIFtuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogMTBcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogMjIsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOiAxXHJcbiAgICB9LCAoKSA9PiBgWDoke2RlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54LnRvRml4ZWQoMCl9YCksXHJcbiAgICBuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogMzJcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogMjIsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOiAxXHJcbiAgICB9LCAoKSA9PiBgWToke2RlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55LnRvRml4ZWQoMCl9YClcclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdfc3RhdGVmKHQ6IG51bWJlcikge1xyXG4gIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZGVidWdfc3RhdGUuY2FtZXJhLCBkZWJ1Z19zdGF0ZS50YXJnZXQpO1xyXG4gIGlmKCFtb3VzZSl7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgaWYgKGRlYnVnX3N0YXRlLmNhbWVyYS5odWQpIHtcclxuICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5odWQuc3RhdGVmKHQpO1xyXG4gIH1cclxuICBpZiAoIVBBVVNFRCkge1xyXG4gICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpO1xyXG4gIH1cclxuICBpZiAoZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCkge1xyXG4gICAgaWYgKFBBVVNFRCAmJiBoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSAmJiBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5wcm9wZXJ0eSA9PSBcInNjYWxpbmdcIikge1xyXG4gICAgICBsZXQgZGlzdCA9IHtcclxuICAgICAgICB4OiBNYXRoLmFicyhtb3VzZS54IC0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5wb3NpdGlvbi54KSxcclxuICAgICAgICB5OiBNYXRoLmFicyhtb3VzZS55IC0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5wb3NpdGlvbi55KVxyXG4gICAgICB9XHJcbiAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUuc2NhbGluZy53aWR0aCA9ICgyICogZGlzdC54KSAvIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQud2lkdGg7XHJcbiAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUuc2NhbGluZy5oZWlnaHQgPSAoMiAqIGRpc3QueSkgLyBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LmhlaWdodDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBsZXQgc3QgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgICBzdC5wb3NpdGlvbi54ID0gbW91c2UueCAtIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0LngsXHJcbiAgICAgICAgc3QucG9zaXRpb24ueSA9IG1vdXNlLnkgLSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50X29mZnNldC55XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChQQVVTRUQgJiYgZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCkge1xyXG4gICAgZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudC5zdGF0ZS5yb3RhdGlvbiA9IGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQuYW5nbGVUb3dhcmRzUG9pbnQobW91c2UpO1xyXG4gIH1cclxuICBpZiAoZGVidWdfc3RhdGUubWlkZGxlX3Bvc2l0aW9uKSB7XHJcbiAgICBsZXQgZGlmZl95ID0gbW91c2UueSAtIGRlYnVnX3N0YXRlLm1pZGRsZV9wb3NpdGlvbi55O1xyXG4gICAgbGV0IGRpZmZfeCA9IG1vdXNlLnggLSBkZWJ1Z19zdGF0ZS5taWRkbGVfcG9zaXRpb24ueDtcclxuICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyAtMSAqIGRpZmZfeDtcclxuICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgKyAtMSAqIGRpZmZfeTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdfdXBkYXRlX3Jvb21fbGlzdCgpIHtcclxuICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbV9saXN0XCIpO1xyXG4gIGxpc3QudGV4dENvbnRlbnQgPSAnJztcclxuICBmb3IgKGxldCByb29tX25hbWUgb2YgT2JqZWN0LmtleXMocm9vbV9saXN0KSkge1xyXG4gICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBhcmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocm9vbV9uYW1lKSk7XHJcbiAgICBwYXJhLmNsYXNzTGlzdC5hZGQoXCJyb29tX2xpc3RfaXRlbVwiKTtcclxuICAgIHBhcmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGcubG9hZFJvb21TdHJpbmcocm9vbV9uYW1lKTtcclxuICAgIH0pXHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIHByb3BlcnRpZXNfZWxlbWVudCB7XHJcbiAgcG9zX3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgcG9zX3k6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgdmVsX3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgdmVsX3k6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgcm90OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHNjYV94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHNjYV95OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHJlbmRlcjogSFRNTElucHV0RWxlbWVudCxcclxuICBjb2xsaXNpb246IEhUTUxJbnB1dEVsZW1lbnRcclxufVxyXG5sZXQgcHJvcGVydGllc19lbGVtZW50czogcHJvcGVydGllc19lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG5pZiAoREVCVUcpIHtcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzID0ge1xyXG4gICAgcG9zX3g6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc194XCIpKSxcclxuICAgIHBvc195OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3NfeVwiKSksXHJcbiAgICB2ZWxfeDogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVsX3hcIikpLFxyXG4gICAgdmVsX3k6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlbF95XCIpKSxcclxuICAgIHJvdDogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90XCIpKSxcclxuICAgIHNjYV94OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FfeFwiKSksXHJcbiAgICBzY2FfeTogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhX3lcIikpLFxyXG4gICAgcmVuZGVyOiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXJcIikpLFxyXG4gICAgY29sbGlzaW9uOiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xsaXNpb25cIikpXHJcbiAgfVxyXG5cclxuICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKTtcclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGlucHV0cy5sZW5ndGg7IGErKykge1xyXG4gICAgaW5wdXRzW2FdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAoPEhUTUxFbGVtZW50PmlucHV0c1thXSkuZm9jdXMoKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIGxldCBmb2N1c2VkO1xyXG4gIGxldCBkZWJ1Z190YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnX3RhcmdldFwiKVxyXG4gIGRlYnVnX3RhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgaW5wdXRzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgIGlucHV0c1thXS5ibHVyKCk7XHJcbiAgICB9XHJcbiAgfSlcclxuICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XHJcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBpbnB1dHMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgaW5wdXRzW2FdLmJsdXIoKTtcclxuICAgIH1cclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3guYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcblxyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGxldCBuZXdfdmFsID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnBvc194LnZhbHVlKSB8fCAwO1xyXG4gICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IFwicG9zaXRpb25cIixcclxuICAgICAgZWxlbWVudDogZWxlLFxyXG4gICAgICBuZXc6IEpTT04uc3RyaW5naWZ5KHsgeDogbmV3X3ZhbCwgeTogZWxlLnN0YXRlLnBvc2l0aW9uLnkgfSksXHJcbiAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoZWxlLnN0YXRlLnBvc2l0aW9uKVxyXG4gICAgfSlcclxuICAgIGVsZS5zdGF0ZS5wb3NpdGlvbi54ID0gbmV3X3ZhbDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3kuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3kudmFsdWUpIHx8IDA7XHJcbiAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogXCJwb3NpdGlvblwiLFxyXG4gICAgICBlbGVtZW50OiBlbGUsXHJcbiAgICAgIG5ldzogSlNPTi5zdHJpbmdpZnkoeyB4OiBlbGUuc3RhdGUucG9zaXRpb24ueCwgeTogbmV3X3ZhbCB9KSxcclxuICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUucG9zaXRpb24pXHJcbiAgICB9KVxyXG4gICAgZWxlLnN0YXRlLnBvc2l0aW9uLnkgPSBuZXdfdmFsO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy52ZWxfeC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUuc3RhdGUudmVsb2NpdHkueCA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy52ZWxfeC52YWx1ZSkgfHwgMDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3kuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLnN0YXRlLnZlbG9jaXR5LnkgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3kudmFsdWUpIHx8IDA7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnJvdC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBsZXQgbmV3X3ZhbCA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy5yb3QudmFsdWUpIHx8IDA7XHJcbiAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogXCJyb3RhdGlvblwiLFxyXG4gICAgICBlbGVtZW50OiBlbGUsXHJcbiAgICAgIG5ldzogSlNPTi5zdHJpbmdpZnkobmV3X3ZhbCksXHJcbiAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoZWxlLnN0YXRlLnJvdGF0aW9uKVxyXG4gICAgfSlcclxuICAgIGVsZS5zdGF0ZS5yb3RhdGlvbiA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV94LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGxldCBuZXdfdmFsID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV94LnZhbHVlKSB8fCAwO1xyXG4gICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IFwic2NhbGluZ1wiLFxyXG4gICAgICBlbGVtZW50OiBlbGUsXHJcbiAgICAgIG5ldzogSlNPTi5zdHJpbmdpZnkoeyB3aWR0aDogbmV3X3ZhbCwgaGVpZ2h0OiBlbGUuc3RhdGUuc2NhbGluZy5oZWlnaHQgfSksXHJcbiAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoZWxlLnN0YXRlLnNjYWxpbmcpXHJcbiAgICB9KVxyXG4gICAgZWxlLnN0YXRlLnNjYWxpbmcud2lkdGggPSBuZXdfdmFsO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5zY2FfeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBsZXQgbmV3X3ZhbCA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy5zY2FfeS52YWx1ZSkgfHwgMDtcclxuICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBcInNjYWxpbmdcIixcclxuICAgICAgZWxlbWVudDogZWxlLFxyXG4gICAgICBuZXc6IEpTT04uc3RyaW5naWZ5KHsgd2lkdGg6IGVsZS5zdGF0ZS5zY2FsaW5nLndpZHRoLCBoZWlnaHQ6IG5ld192YWwgfSksXHJcbiAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoZWxlLnN0YXRlLnNjYWxpbmcpXHJcbiAgICB9KVxyXG4gICAgZWxlLnN0YXRlLnNjYWxpbmcuaGVpZ2h0ID0gbmV3X3ZhbDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMucmVuZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5yZW5kZXIgPSBwcm9wZXJ0aWVzX2VsZW1lbnRzLnJlbmRlci5jaGVja2VkO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5jb2xsaXNpb24uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLmNvbGxpc2lvbiA9IHByb3BlcnRpZXNfZWxlbWVudHMuY29sbGlzaW9uLmNoZWNrZWQ7XHJcbiAgfSlcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZV9lbGVtZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5kZWxldGUoKTtcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpIHtcclxuICBpZiAoZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50KSB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmpfbmFtZVwiKS5pbm5lckhUTUwgPSBlbGUuY29uc3RydWN0b3IubmFtZTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3gudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnBvc2l0aW9uLngudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3kudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnBvc2l0aW9uLnkudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3gudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnZlbG9jaXR5LngudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3kudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnZlbG9jaXR5LnkudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMucm90LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS5yb3RhdGlvbi50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5zY2FfeC52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUuc2NhbGluZy53aWR0aC50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5zY2FfeS52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUuc2NhbGluZy5oZWlnaHQudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMucmVuZGVyLmNoZWNrZWQgPSBlbGUucmVuZGVyO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5jb2xsaXNpb24uY2hlY2tlZCA9IGVsZS5jb2xsaXNpb247XHJcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFyYW1zX2xpc3RcIik7XHJcbiAgICBsaXN0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBmb3IgKGxldCBrIG9mIE9iamVjdC5rZXlzKGVsZS5wYXJhbXMpKSB7XHJcblxyXG4gICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBzcGFuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGspKTtcclxuICAgICAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICBpZiAodHlwZW9mICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0eXBlb2YgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGspXHJcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdICsgXCJcIik7XHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHZhbDogc3RyaW5nID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgaWYgKCFpc05hTih2YWwgYXMgdW5rbm93biBhcyBudW1iZXIpKSB7XHJcbiAgICAgICAgICAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9IHBhcnNlRmxvYXQodmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbCA9PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBwLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICBwLmFwcGVuZChpbnB1dCk7XHJcbiAgICAgIGxpc3QuYXBwZW5kKHApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z191cGRhdGVfb2JqX2xpc3QoKSB7XHJcbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iamVjdHNfbGlzdFwiKTtcclxuICBsaXN0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgaWYgKGcuZ2V0Um9vbSgpKSB7XHJcbiAgICBmb3IgKGxldCBvYmogb2YgZy5nZXRSb29tKCkub2JqZWN0cykge1xyXG4gICAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBwYXJhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG9iai5jb25zdHJ1Y3Rvci5uYW1lKSk7XHJcbiAgICAgIHBhcmEuY2xhc3NMaXN0LmFkZChcIm9iamVjdF9saXN0X2l0ZW1cIik7XHJcbiAgICAgIHBhcmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudCA9PSA8b2JqPm9iaikge1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgKDxvYmo+b2JqKS5zdGF0ZS5wb3NpdGlvbilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQgPSA8b2JqPm9iajtcclxuICAgICAgICAgIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgbGlzdC5hcHBlbmRDaGlsZChwYXJhKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWJ1Z191cGRhdGVfcHJlZmFicygpIHtcclxuICBsZXQgcHJlcyA9IE9iamVjdC5rZXlzKHByZWZhYnMpLm1hcChhc3luYyAobzogc3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgYSA9IDxvYmo+KG5ldyBwcmVmYWJzW29dKHtcclxuICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICB2ZWxvY2l0eTogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICBzY2FsaW5nOiB7IHdpZHRoOiAxLCBoZWlnaHQ6IDEgfVxyXG4gICAgfSkpO1xyXG4gICAgYXdhaXQgYS5sb2FkKCk7XHJcbiAgICBhLnJlbmRlciA9IHRydWU7XHJcbiAgICBsZXQgb2JqcyA9IGEuY29tYmluZWRPYmplY3RzKCk7XHJcbiAgICBmb3IgKGxldCBvYmogb2Ygb2Jqcykge1xyXG4gICAgICBvYmouVW5iaW5kQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpbHRlcmVkID0gb2Jqcy5maWx0ZXIoKGEpID0+IGEucmVuZGVyKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByZWZhYjogcHJlZmFic1tvXSxcclxuICAgICAgbmFtZTogYS5jb25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICByZW5kZXJlZDogZmlsdGVyZWQubWFwKChvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IG8uY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgIHJlbmRlcjogby5yZW5kZXJmKDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgfSlcclxuICBsZXQgYSA9IGF3YWl0IFByb21pc2UuYWxsKHByZXMpO1xyXG5cclxuICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVmYWJfdGFyZ2V0XCIpO1xyXG4gIHRhcmdldC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGZvciAobGV0IHByZWZhYiBvZiBhKSB7XHJcblxyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcmVmYWIubmFtZSkpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJlZmFiLnJlbmRlcmVkWzBdLnJlbmRlcikpIHtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBkaXYuYXBwZW5kKHByZWZhYi5yZW5kZXJlZFswXS5yZW5kZXIuc3ByaXRlLnNwcml0ZV9zaGVldCk7XHJcbiAgICB9XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInByZWZhYl9ib3hcIik7XHJcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgcG9zaXRpb246IHsgeDogZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLngsIHk6IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55IH0sXHJcbiAgICAgICAgdmVsb2NpdHk6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICAgIHNjYWxpbmc6IHsgd2lkdGg6IDEsIGhlaWdodDogMSB9XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBvYmogPSA8b2JqPihuZXcgcHJlZmFiLnByZWZhYih2YWwpKTtcclxuICAgICAgYXdhaXQgZy5zdGF0ZS5jdXJyZW50X3Jvb20uYWRkSXRlbXMob2JqLmNvbWJpbmVkT2JqZWN0cygpKTtcclxuICAgIH0pO1xyXG4gICAgdGFyZ2V0LmFwcGVuZChkaXYpO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGRlYnVnX2FjdGlvbiB7XHJcbiAgcHJvcGVydHk6IHN0cmluZyxcclxuICBvbGQ6IHN0cmluZyxcclxuICBuZXc6IHN0cmluZyxcclxuICBlbGVtZW50OiBvYmpcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBkZWJ1Z192YXJzIHtcclxuICB0YXJnZXQ6IEhUTUxDYW52YXNFbGVtZW50LFxyXG4gIGNhbWVyYTogQ2FtZXJhLFxyXG4gIGxhc3RfY2xpY2tlZDogSFRNTEVsZW1lbnQsXHJcbiAgc2VsZWN0ZWRfZWxlbWVudF9pbml0aWFsX3NjYWxpbmc6IGRpbWVuc2lvbnMsXHJcbiAgc2VsZWN0ZWRfZWxlbWVudDogb2JqLFxyXG4gIHNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0OiBwb3NpdGlvbixcclxuICByb3RhdGlvbl9lbGVtZW50OiBvYmosXHJcbiAgc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50OiBvYmosXHJcbiAgbWlkZGxlX3Bvc2l0aW9uOiBwb3NpdGlvbixcclxuICBjbGlja19wb3NpdGlvbjogcG9zaXRpb24sXHJcbiAgYWN0aW9uc19zdGFjazogZGVidWdfYWN0aW9uW10sXHJcbiAgY3VycmVudF9hY3Rpb246IGRlYnVnX2FjdGlvblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGRlYnVnX3N0YXRlOiBkZWJ1Z192YXJzO1xyXG5cclxuZXhwb3J0IGxldCBkZWJ1Z19zZXR1cCA9ICgpID0+IHtcclxuICBkZWJ1Z19zdGF0ZSA9IHtcclxuICAgIHRhcmdldDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z190YXJnZXRcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgICBjYW1lcmE6IG5ldyBDYW1lcmEoe1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwLFxyXG4gICAgICBkaW1lbnNpb25zOiB7XHJcbiAgICAgICAgaGVpZ2h0OiB2aWV3cG9ydC5oZWlnaHQsXHJcbiAgICAgICAgd2lkdGg6IHZpZXdwb3J0LndpZHRoXHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxpbmc6IDEsXHJcbiAgICAgIGRlYnVnOiB0cnVlXHJcbiAgICB9XHJcbiAgICAgICwge1xyXG4gICAgICAgIHg6IDEsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgfSksXHJcbiAgICBsYXN0X2NsaWNrZWQ6IHVuZGVmaW5lZCxcclxuICAgIHNlbGVjdGVkX2VsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgIHNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0OiB1bmRlZmluZWQsXHJcbiAgICByb3RhdGlvbl9lbGVtZW50OiB1bmRlZmluZWQsXHJcbiAgICBtaWRkbGVfcG9zaXRpb246IHVuZGVmaW5lZCxcclxuICAgIGNsaWNrX3Bvc2l0aW9uOiB1bmRlZmluZWQsXHJcbiAgICBzZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgIHNlbGVjdGVkX2VsZW1lbnRfaW5pdGlhbF9zY2FsaW5nOiB7IHdpZHRoOiAxLCBoZWlnaHQ6IDEgfSxcclxuICAgIGFjdGlvbnNfc3RhY2s6IFtdLFxyXG4gICAgY3VycmVudF9hY3Rpb246IHVuZGVmaW5lZFxyXG4gIH1cclxuICBkZWJ1Z19zdGF0ZS5jYW1lcmEuaHVkID0gbmV3IERlYnVnX2h1ZCgpO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIm1vdXNlMGRvd25cIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDAsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBpZiAoZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCkge1xyXG4gICAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZGVidWdfc3RhdGUuY2FtZXJhLCBkZWJ1Z19zdGF0ZS50YXJnZXQpO1xyXG4gICAgICAgIGlmKCFtb3VzZSl7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVidWdfc3RhdGUuY2xpY2tfcG9zaXRpb24gPSBtb3VzZTtcclxuICAgICAgICBsZXQgYWxMX2NsaWNrZWQgPSBnLmdldFJvb20oKS5jaGVja09iamVjdHMoe1xyXG4gICAgICAgICAgeDogbW91c2UueCxcclxuICAgICAgICAgIHk6IG1vdXNlLnksXHJcbiAgICAgICAgICBoZWlnaHQ6IDEsXHJcbiAgICAgICAgICB3aWR0aDogMVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGNsaWNrZWQ7XHJcbiAgICAgICAgbGV0IGZpbHRlcmVkID0gYWxMX2NsaWNrZWQuZmlsdGVyKChlbGUpID0+IGVsZSA9PSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQpXHJcbiAgICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNsaWNrZWQgPSBmaWx0ZXJlZFswXVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNsaWNrZWQgPSBhbExfY2xpY2tlZFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNsaWNrZWQpIHtcclxuICAgICAgICAgIGlmIChoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSkge1xyXG4gICAgICAgICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbiA9IHtcclxuICAgICAgICAgICAgICBlbGVtZW50OiBjbGlja2VkLFxyXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcInNjYWxpbmdcIixcclxuICAgICAgICAgICAgICBvbGQ6IEpTT04uc3RyaW5naWZ5KGNsaWNrZWQuc3RhdGUuc2NhbGluZyksXHJcbiAgICAgICAgICAgICAgbmV3OiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQ6IGNsaWNrZWQsXHJcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwicG9zaXRpb25cIixcclxuICAgICAgICAgICAgICBvbGQ6IEpTT04uc3RyaW5naWZ5KCg8b2JqX3N0YXRlPmNsaWNrZWQuc3RhdGUpLnBvc2l0aW9uKSxcclxuICAgICAgICAgICAgICBuZXc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQgPSBjbGlja2VkO1xyXG4gICAgICAgICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpXHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50ID0gY2xpY2tlZDtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnRfaW5pdGlhbF9zY2FsaW5nID0gY2xpY2tlZC5zdGF0ZS5zY2FsaW5nO1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQgPSB7XHJcbiAgICAgICAgICAgIHg6IG1vdXNlLnggLSAoPG9ial9zdGF0ZT5jbGlja2VkLnN0YXRlKS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBtb3VzZS55IC0gKDxvYmpfc3RhdGU+Y2xpY2tlZC5zdGF0ZSkucG9zaXRpb24ueVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgY2FtZXJhOiBkZWJ1Z19zdGF0ZS5jYW1lcmFcclxuICB9KTtcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJtb3VzZTF1cFwiLFxyXG4gICAgdHlwZTogYnR5cGUubW91c2UsXHJcbiAgICBpZDogNSxcclxuICAgIGZ1bmN0aW9uOiAoKSA9PiB7XHJcbiAgICAgIGRlYnVnX3N0YXRlLm1pZGRsZV9wb3NpdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTogZGVidWdfc3RhdGUuY2FtZXJhXHJcbiAgfSk7XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwibW91c2UxZG93blwiLFxyXG4gICAgdHlwZTogYnR5cGUubW91c2UsXHJcbiAgICBpZDogNixcclxuICAgIGZ1bmN0aW9uOiAoKSA9PiB7XHJcbiAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZGVidWdfc3RhdGUuY2FtZXJhLCBkZWJ1Z19zdGF0ZS50YXJnZXQpO1xyXG4gICAgICBpZighbW91c2Upe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGRlYnVnX3N0YXRlLm1pZGRsZV9wb3NpdGlvbiA9IG1vdXNlO1xyXG4gICAgfSxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgY2FtZXJhOiBkZWJ1Z19zdGF0ZS5jYW1lcmFcclxuICB9KTtcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJtb3VzZTB1cFwiLFxyXG4gICAgdHlwZTogYnR5cGUubW91c2UsXHJcbiAgICBpZDogMSxcclxuICAgIGZ1bmN0aW9uOiAoKSA9PiB7XHJcbiAgICAgIGlmIChkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uLnByb3BlcnR5ID09IFwic2NhbGluZ1wiKSB7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5uZXcgPSBKU09OLnN0cmluZ2lmeShkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlLnNjYWxpbmcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uLnByb3BlcnR5ID09IFwicG9zaXRpb25cIikge1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ubmV3ID0gSlNPTi5zdHJpbmdpZnkoKDxvYmpfc3RhdGU+ZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZSkucG9zaXRpb24pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICBkZWJ1Z191cGRhdGVfcHJvcGVydGllc19lbGVtZW50KClcclxuICAgIH0sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTogZGVidWdfc3RhdGUuY2FtZXJhXHJcbiAgfSk7XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwibW91c2UyZG93blwiLFxyXG4gICAgdHlwZTogYnR5cGUubW91c2UsXHJcbiAgICBpZDogMyxcclxuICAgIGZ1bmN0aW9uOiAoKSA9PiB7XHJcbiAgICAgIGlmIChkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50KSB7XHJcbiAgICAgICAgZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShkZWJ1Z19zdGF0ZS5jYW1lcmEsIGRlYnVnX3N0YXRlLnRhcmdldCk7XHJcbiAgICAgICAgaWYoIW1vdXNlKXtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2xpY2tlZCA9IGcuZ2V0Um9vbSgpLmNoZWNrT2JqZWN0cyh7XHJcbiAgICAgICAgICB4OiBtb3VzZS54LFxyXG4gICAgICAgICAgeTogbW91c2UueSxcclxuICAgICAgICAgIGhlaWdodDogMSxcclxuICAgICAgICAgIHdpZHRoOiAxXHJcbiAgICAgICAgfSlbMF1cclxuICAgICAgICBpZiAoY2xpY2tlZCkge1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCA9IGNsaWNrZWQ7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbiA9IHtcclxuICAgICAgICAgICAgZWxlbWVudDogZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCxcclxuICAgICAgICAgICAgcHJvcGVydHk6IFwicm90YXRpb25cIixcclxuICAgICAgICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50LnN0YXRlLnJvdGF0aW9uKSxcclxuICAgICAgICAgICAgbmV3OiB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTogZGVidWdfc3RhdGUuY2FtZXJhXHJcbiAgfSk7XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwibW91c2UydXBcIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDQsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5uZXcgPSBKU09OLnN0cmluZ2lmeShkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50LnN0YXRlLnJvdGF0aW9uKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24pO1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgY2FtZXJhOiBkZWJ1Z19zdGF0ZS5jYW1lcmFcclxuICB9KTtcclxuXHJcbiAgbGV0IGxlZnRfZnVuYyA9ICgpID0+IHtcclxuICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMSA6IDA7XHJcbiAgICBpZiAoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggLSAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMSAvIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgfTtcclxuICBsZXQgcmlnaHRfZnVuYyA9ICgpID0+IHtcclxuICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMSA6IDA7XHJcbiAgICBpZiAoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMSAvIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgfTtcclxuICBsZXQgZG93bl9mdW5jID0gKCkgPT4ge1xyXG4gICAgbGV0IHNoaWZ0X2hlbGQgPSBoZWxkX2tleXNbXCJTaGlmdExlZnRcIl0gPyAxIDogMDtcclxuXHJcbiAgICBpZiAoIWhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55IC0gKCg1ICsgc2hpZnRfaGVsZCAqIDUpICogKDEgLyBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIH07XHJcbiAgbGV0IHVwX2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDEgOiAwO1xyXG4gICAgaWYgKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ICsgKCg1ICsgc2hpZnRfaGVsZCAqIDUpICogKDEgLyBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIH07XHJcbiAgbGV0IHNjcm9sbF91cCA9ICgpID0+IHtcclxuICAgIGlmIChkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIilcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyArIDAuMDU7XHJcbiAgfVxyXG4gIGxldCBzYXZlX2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBsZXQgY3RybF9oZWxkID0gaGVsZF9rZXlzW1wiQ29udHJvbExlZnRcIl07XHJcbiAgICBpZiAoY3RybF9oZWxkICYmIFBBVVNFRCkge1xyXG4gICAgICBsZXQgbmFtZSA9IGcuZ2V0Um9vbSgpLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgIGxldCBhID0gcGF0aC5qb2luKGAke3Byb2plY3RfcGF0aH1gLCBgLi4vcm9vbXMvJHtuYW1lfS5qc29uYCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhhLCBKU09OLnN0cmluZ2lmeShnLmdldFJvb20oKS5leHBvcnRTdGF0ZUNvbmZpZygpKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIFdSSVRJTkcgUk9PTSBJTkZPIEZJTEUuXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGFsZXJ0KFwiU2F2ZWRcIik7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY3RybF9oZWxkICYmICFQQVVTRUQpIHtcclxuICAgICAgYWxlcnQoXCJwYXVzZSB0byBlbmFibGUgc2F2aW5nLlwiKVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgc2Nyb2xsX2Rvd24gPSAoKSA9PiB7XHJcbiAgICBpZiAoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIgJiYgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPiAwLjA1KVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nIC0gMC4wNTtcclxuICB9XHJcbiAgbGV0IHVuZG9fZnVuYyA9ICgpID0+IHtcclxuICAgIGlmIChoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSkge1xyXG4gICAgICBsZXQgY3VycjogZGVidWdfYWN0aW9uID0gZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wb3AoKTtcclxuICAgICAgaWYgKGN1cnIpIHtcclxuICAgICAgICBpZiAoY3Vyci5wcm9wZXJ0eSA9PSBcInBvc2l0aW9uXCIpIHtcclxuICAgICAgICAgIGN1cnIuZWxlbWVudC5zdGF0ZS5wb3NpdGlvbiA9IEpTT04ucGFyc2UoY3Vyci5vbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjdXJyLnByb3BlcnR5ID09PSBcInJvdGF0aW9uXCIpIHtcclxuICAgICAgICAgIGN1cnIuZWxlbWVudC5zdGF0ZS5yb3RhdGlvbiA9IEpTT04ucGFyc2UoY3Vyci5vbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjdXJyLnByb3BlcnR5ID09PSBcInNjYWxpbmdcIikge1xyXG4gICAgICAgICAgY3Vyci5lbGVtZW50LnN0YXRlLnNjYWxpbmcgPSBKU09OLnBhcnNlKGN1cnIub2xkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwiS2V5QVwiLFxyXG4gICAgdHlwZTogYnR5cGUua2V5Ym9hcmQsXHJcbiAgICBpZDogQmluZChcIktleUFcIiwgbGVmdF9mdW5jLCBleGVjX3R5cGUucmVwZWF0LCAxKSxcclxuICAgIGZ1bmN0aW9uOiBsZWZ0X2Z1bmMsXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUucmVwZWF0XHJcbiAgfSlcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJLZXlEXCIsXHJcbiAgICB0eXBlOiBidHlwZS5rZXlib2FyZCxcclxuICAgIGlkOiBCaW5kKFwiS2V5RFwiLCByaWdodF9mdW5jLCBleGVjX3R5cGUucmVwZWF0LCAxKSxcclxuICAgIGZ1bmN0aW9uOiByaWdodF9mdW5jLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLnJlcGVhdFxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwiS2V5V1wiLFxyXG4gICAgdHlwZTogYnR5cGUua2V5Ym9hcmQsXHJcbiAgICBpZDogQmluZChcIktleVdcIiwgdXBfZnVuYywgZXhlY190eXBlLnJlcGVhdCwgMSksXHJcbiAgICBmdW5jdGlvbjogdXBfZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5yZXBlYXRcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleVNcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlTXCIsIGRvd25fZnVuYywgZXhlY190eXBlLnJlcGVhdCwgMSksXHJcbiAgICBmdW5jdGlvbjogZG93bl9mdW5jLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLnJlcGVhdFxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwic2Nyb2xsdXBcIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IEJpbmQoXCJzY3JvbGx1cFwiLCBzY3JvbGxfdXAsIGV4ZWNfdHlwZS5vbmNlLCAxKSxcclxuICAgIGZ1bmN0aW9uOiBzY3JvbGxfdXAsXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZVxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwic2Nyb2xsZG93blwiLFxyXG4gICAgdHlwZTogYnR5cGUubW91c2UsXHJcbiAgICBpZDogQmluZChcInNjcm9sbGRvd25cIiwgc2Nyb2xsX2Rvd24sIGV4ZWNfdHlwZS5vbmNlLCAxKSxcclxuICAgIGZ1bmN0aW9uOiBzY3JvbGxfZG93bixcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlXHJcbiAgfSlcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJLZXlTXCIsXHJcbiAgICB0eXBlOiBidHlwZS5rZXlib2FyZCxcclxuICAgIGlkOiBCaW5kKFwiS2V5U1wiLCBzYXZlX2Z1bmMsIGV4ZWNfdHlwZS5vbmNlLCAxKSxcclxuICAgIGZ1bmN0aW9uOiBzYXZlX2Z1bmMsXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZVxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwiS2V5WlwiLFxyXG4gICAgdHlwZTogYnR5cGUua2V5Ym9hcmQsXHJcbiAgICBpZDogQmluZChcIktleVpcIiwgdW5kb19mdW5jLCBleGVjX3R5cGUub25jZSwgMSksXHJcbiAgICBmdW5jdGlvbjogdW5kb19mdW5jLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2VcclxuICB9KVxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCA9IGUudGFyZ2V0O1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgbGV0IHBhdXNlX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF1c2VfYnV0dG9uXCIpXHJcbiAgcGF1c2VfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgc2V0UGF1c2VkKCFQQVVTRUQpO1xyXG4gICAgaWYgKFBBVVNFRCkge1xyXG4gICAgICBwYXVzZV9idXR0b24uaW5uZXJIVE1MID0gXCJVTlBBVVNFXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcGF1c2VfYnV0dG9uLmlubmVySFRNTCA9IFwiUEFVU0VcIjtcclxuICAgIH1cclxuICB9KTtcclxuICBsZXQgb2JqX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X29iamVjdF9idXR0b25cIik7XHJcbiAgbGV0IHJvb21fYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfcm9vbV9idXR0b25cIik7XHJcbiAgcm9vbV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZmlsZV9wYXRoID0gaXBjUmVuZGVyZXIuc2VuZFN5bmMoJ29iamVjdC1wYXRoLXJlcXVlc3QnLCBcInJvb21zXCIpO1xyXG4gICAgaWYgKGZpbGVfcGF0aCkge1xyXG4gICAgICBsZXQgZnVsbF9uYW1lID0gcGF0aC5wYXJzZShmaWxlX3BhdGgpLmJhc2U7XHJcbiAgICAgIGxldCBuZXdfbmFtZSA9IGZ1bGxfbmFtZS5zdWJzdHIoMCwgZnVsbF9uYW1lLmxlbmd0aCAtIDMpO1xyXG4gICAgICBsZXQgcGF0aF90b193cml0ZSA9IHBhdGguam9pbihgJHtmaWxlX3BhdGh9YCwgXCIuLlwiLCBuZXdfbmFtZSArIFwiLnRzXCIpO1xyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGhfdG9fd3JpdGUsIGBcclxuICAgIFxyXG4gICAgaW1wb3J0IHtyb29tfSBmcm9tIFwiLi4vLi4vbGliL3Jvb21cIjtcclxuICAgIGltcG9ydCB7Z2FtZX0gZnJvbSBcIi4uLy4uL3ZhblwiO1xyXG4gICAgaW1wb3J0IHtzdGF0ZV9jb25maWd9IGZyb20gXCIuLi8uLi9saWIvcm9vbVwiO1xyXG4gICAgaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuLyR7bmV3X25hbWV9Lmpzb25cIjtcclxuICAgIGxldCBjZmlnID0gY29uZmlnIGFzIHVua25vd24gYXMgc3RhdGVfY29uZmlnO1xyXG4gICAgaW50ZXJmYWNlICR7bmV3X25hbWV9X3N0YXRle1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzICR7bmV3X25hbWV9IGV4dGVuZHMgcm9vbTwke25ld19uYW1lfV9zdGF0ZT57XHJcbiAgICAgIGJhY2tncm91bmRfdXJsPVwiLi9zcHJpdGVzL0Vycm9yLnBuZ1wiO1xyXG4gICAgICBjb25zdHJ1Y3RvcihnYW1lOmdhbWU8dW5rbm93bj4pe1xyXG4gICAgICAgIHN1cGVyKGdhbWUsY2ZpZyk7XHJcbiAgICAgIH1cclxuICAgICAgcmVnaXN0ZXJDb250cm9scygpe1xyXG4gICAgXHJcbiAgICAgIH1cclxuICAgICAgcmVnaXN0ZXJQYXJ0aWNsZXMoKXtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlZihkZWx0YV90aW1lOm51bWJlcil7XHJcbiAgICAgICAgc3VwZXIuc3RhdGVmKGRlbHRhX3RpbWUpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgYClcclxuXHJcbiAgICAgIHBhdGhfdG9fd3JpdGUgPSBwYXRoLmpvaW4oYCR7ZmlsZV9wYXRofWAsIFwiLi5cIiwgbmV3X25hbWUgKyBcIi5qc29uXCIpO1xyXG5cclxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoX3RvX3dyaXRlLCBgXHJcbiAgICB7XHJcbiAgICAgIFwib2JqZWN0c1wiOltdXHJcbiAgICB9XHJcbiAgICBgKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgb2JqX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGxldCBmaWxlX3BhdGggPSBpcGNSZW5kZXJlci5zZW5kU3luYygnb2JqZWN0LXBhdGgtcmVxdWVzdCcsIFwib2JqZWN0c1wiKTtcclxuICAgIGlmIChmaWxlX3BhdGgpIHtcclxuICAgICAgbGV0IGZ1bGxfbmFtZSA9IHBhdGgucGFyc2UoZmlsZV9wYXRoKS5iYXNlO1xyXG4gICAgICBsZXQgbmV3X25hbWUgPSBmdWxsX25hbWUuc3Vic3RyKDAsIGZ1bGxfbmFtZS5sZW5ndGggLSAzKTtcclxuICAgICAgbGV0IHBhdGhfdG9fd3JpdGUgPSBwYXRoLmpvaW4oYCR7ZmlsZV9wYXRofWAsIFwiLi5cIiwgbmV3X25hbWUgKyBcIi50c1wiKTtcclxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoX3RvX3dyaXRlLCBgXHJcbmltcG9ydCB7b2JqfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBvYmpfc3RhdGUsIHBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5cclxuaW50ZXJmYWNlICR7bmV3X25hbWV9X3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRle1xyXG4gICAgXHJcbn1cclxuICAgIFxyXG5pbnRlcmZhY2UgJHtuZXdfbmFtZX1fcGFyYW1ldGVyc3tcclxuICAgIFxyXG59XHJcbiAgICBcclxuZXhwb3J0IGNsYXNzICR7bmV3X25hbWV9IGV4dGVuZHMgb2Jqe1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9FcnJvci5wbmdcIjtcclxuICBoZWlnaHQgPSAxMDA7XHJcbiAgd2lkdGggPSAxMDA7XHJcbiAgdGFnczpBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICByZW5kZXIgPSB0cnVlO1xyXG4gIHBhcmFtczoke25ld19uYW1lfV9wYXJhbWV0ZXJzO1xyXG4gIHN0YXRpYyBkZWZhdWx0X3BhcmFtczoke25ld19uYW1lfV9wYXJhbWV0ZXJzID0ge31cclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOiR7bmV3X25hbWV9X3BhcmFtZXRlcnMgPSAke25ld19uYW1lfS5kZWZhdWx0X3BhcmFtcyl7XHJcbiAgICBzdXBlcihzdGF0ZSxwYXJhbXMpO1xyXG4gIH1cclxuICBzdGF0ZWYodGltZV9kZWx0YTpudW1iZXIpe1xyXG4gICAgXHJcbiAgfVxyXG4gIHJlbmRlcmYodGltZV9kZWx0YTpudW1iZXIpe1xyXG4gICByZXR1cm4gc3VwZXIucmVuZGVyZih0aW1lX2RlbHRhKTsgXHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2FuaW1hdGlvbnMoKXtcclxuICAgIFxyXG4gIH1cclxuICByZWdpc3Rlcl9hdWRpbygpe1xyXG4gICAgXHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2NvbnRyb2xzKCl7XHJcbiAgICAgICAgXHJcbiAgfVxyXG59XHJcbiAgICBgKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG59IiwiaW1wb3J0IHtvYmp9IGZyb20gXCIuL29iamVjdFwiO1xyXG5cclxuaW50ZXJmYWNlIEh1ZFRleHRHZXRGdW5je1xyXG4gICgpOnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRTZXR0aW5ne1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyLFxyXG4gIGZvbnQ6Rm9udFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvbnR7XHJcbiAgbWF4X3dpZHRoPzpudW1iZXIsXHJcbiAgc2l6ZTpudW1iZXIsXHJcbiAgZm9udDpzdHJpbmcsXHJcbiAgY29sb3I6c3RyaW5nLFxyXG4gIHRleHQ6c3RyaW5nLFxyXG4gIGFsaWduOkNhbnZhc1RleHRBbGlnblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRfTm9kZXtcclxuICBtYXhfd2lkdGg/Om51bWJlcixcclxuICBwb3NpdGlvbjp7XHJcbiAgICB4Om51bWJlcixcclxuICAgIHk6bnVtYmVyXHJcbiAgfVxyXG4gIHNpemU6bnVtYmVyO1xyXG4gIHNjYWxpbmc6bnVtYmVyO1xyXG4gIGZvbnQ6c3RyaW5nO1xyXG4gIGNvbG9yOnN0cmluZztcclxuICB0ZXh0PzpzdHJpbmc7XHJcbiAgYWxpZ24/OkNhbnZhc1RleHRBbGlnbjtcclxufVxyXG5leHBvcnQgY2xhc3MgSFVEe1xyXG4gIGdyYXBoaWNfZWxlbWVudHM6b2JqW10gPSBbXTtcclxuICB0ZXh0X2VsZW1lbnRzOkFycmF5PFRleHQ+ID0gW107XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMudGV4dF9lbGVtZW50cy5wdXNoKC4uLnRoaXMuc2V0VGV4dEVsZW1lbnRzKCkpO1xyXG4gICAgdGhpcy5ncmFwaGljX2VsZW1lbnRzLnB1c2goLi4udGhpcy5zZXRHcmFwaGljRWxlbWVudHMoKSk7IFxyXG4gIH1cclxuICBzdGF0ZWYoYTpudW1iZXIpe1xyXG4gICAgZm9yKGxldCB4IG9mIHRoaXMuZ3JhcGhpY19lbGVtZW50cyl7XHJcbiAgICAgIHguc3RhdGVmKGEpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCB4IG9mIHRoaXMudGV4dF9lbGVtZW50cyl7XHJcbiAgICAgIHguc3RhdGVmKGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRUZXh0RWxlbWVudHMoKTpUZXh0W117XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIHNldEdyYXBoaWNFbGVtZW50cygpOm9ialtde1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR7XHJcbiAgZ2V0RnVuYzpIdWRUZXh0R2V0RnVuYztcclxuICBzdGF0ZTpUZXh0X05vZGU7XHJcbiAgY29uc3RydWN0b3Iobm9kZTpUZXh0X05vZGUsZ2V0RnVuYzpIdWRUZXh0R2V0RnVuYyl7XHJcbiAgICBpZighbm9kZS5hbGlnbil7XHJcbiAgICAgIG5vZGUuYWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IG5vZGU7XHJcbiAgICBpZighdGhpcy5zdGF0ZS50ZXh0KXtcclxuICAgICAgdGhpcy5zdGF0ZS50ZXh0ID0gXCJcIjtcclxuICAgIH1cclxuICAgIHRoaXMuZ2V0RnVuYyA9IGdldEZ1bmM7XHJcbiAgfVxyXG4gIHN0YXRlZihhOm51bWJlcil7XHJcbiAgIHRoaXMuc3RhdGUudGV4dCA9IHRoaXMuZ2V0RnVuYygpO1xyXG4gIH1cclxuICByZW5kZXJmKGE6bnVtYmVyKTpGb250e1xyXG4gICAgbGV0IHtzaXplLGNvbG9yLGZvbnQsdGV4dCxtYXhfd2lkdGgsYWxpZ259ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNpemUsXHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBmb250LFxyXG4gICAgICB0ZXh0LFxyXG4gICAgICBtYXhfd2lkdGgsXHJcbiAgICAgIGFsaWduXHJcbiAgICB9O1xyXG4gIH1cclxufSIsImltcG9ydCB7cG9zaXRpb259IGZyb20gXCIuL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGlzdGFuY2UoYTpwb3NpdGlvbixiOnBvc2l0aW9uKXtcclxuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGEueCAtIGIueCwyKSArIE1hdGgucG93KGEueSAtIGIueSwyKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kSW50KG1pbjpudW1iZXIsIG1heDpudW1iZXIpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKSArIG1pbjtcclxufSIsImltcG9ydCB7IHN0YXRlX2Z1bmMsIG9ial9zdGF0ZSwgcG9zaXRpb24sIGRpbWVuc2lvbnMgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJfZnVuYywgcmVuZGVyX3R5cGUgLHNjYWxlX3R5cGV9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSwgcG9zaXRpb25lZF9zcHJpdGUsIHNwcml0ZSwgc3ByaXRlX2dlbiB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4vY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IFVuYmluZCwgQmluZCwgY29udHJvbF9mdW5jLCBleGVjX3R5cGUgfSBmcm9tIFwiLi9jb250cm9sc1wiO1xyXG5pbXBvcnQge2F1ZGlvfSBmcm9tIFwiLi9hdWRpb1wiO1xyXG5pbXBvcnQge2RlZXAsIGdhbWV9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgRGlzdGFuY2UgfSBmcm9tIFwiLi9tYXRoXCI7XHJcblxyXG5pbnRlcmZhY2Ugb2JqX2k8VD4ge1xyXG4gIHN0YXRlZjogc3RhdGVfZnVuYzxUPixcclxuICByZW5kZXJmOiByZW5kZXJfZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWQoYTogb2JqW10sIGlkOiBzdHJpbmcpOiBvYmoge1xyXG4gIGZvciAobGV0IGIgPSAwOyBiIDwgYS5sZW5ndGg7IGIrKykge1xyXG4gICAgaWYgKGFbYl0uaWQgPT0gaWQpIHtcclxuICAgICAgcmV0dXJuIGFbYl07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8vRmluZHMgdGhlIHNpZGUgbGVuZ3RocyBvZiBhIHRyaWFuZ2xlIGlmIGdpdmVuIHRoZSAgYW5nbGUgKGluIGRlZ3JlZXMpXHJcbi8vYWxvbmcgd2l0aCB0aGUgbGVuZ3RoIG9mIHRoZSBoeXBvdGVudXNlXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGlvbl9sZW5ndGgobGVuZ3RoOiBudW1iZXIsIGRlZ3JlZTogbnVtYmVyKSB7XHJcbiAgbGV0IGFfbGVuID0gbGVuZ3RoICogTWF0aC5zaW4oZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgbGV0IGJfbGVuID0gbGVuZ3RoICogTWF0aC5jb3MoZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHg6IGFfbGVuLFxyXG4gICAgeTogYl9sZW5cclxuICB9XHJcbn1cclxuXHJcbi8vVGhpcyBjb3VudGVyIHRyYWNrcyB0aGUgZ2xvYmFsIG51bWJlciBvZiBvYmplY3RzIGNyZWF0ZWQgc28gZmFyXHJcbi8vYW4gb2JqZWN0J3MgaWQgKGlmIG5vdCBvdmVyd3JpdHRlbikgd2lsbCBiZSBhIHVuaXF1ZSBpbnRlZ2VyLCB3aGljaFxyXG4vL3VzZXMgdGhpcyBjb3VudGVyLlxyXG5sZXQgY291bnRlciA9IDA7XHJcblxyXG5pbnRlcmZhY2UgYW5pbV9zdG9yYWdlIHtcclxuICBbaW5kZXg6IHN0cmluZ106IFtBcnJheTxbbnVtYmVyLCBzcHJpdGVdPiwgbnVtYmVyXVxyXG59XHJcblxyXG5pbnRlcmZhY2Ugdm9pZF9mdW5jIHtcclxuICAoKTogdm9pZFxyXG59XHJcblxyXG5jbGFzcyBhbmltYXRpb25zIHtcclxuICBhbmltYXRpb25zOiBhbmltX3N0b3JhZ2UgPSB7fTtcclxuICAvL1RyYWNrcyB0aGUgdGltZSBwYXNzZWQgc2luY2UgdGhlIGN1cnJlbnQgYW5pbWF0aW9uXHJcbiAgLy9oYXMgc3RhcnRlZCBwbGF5aW5nXHJcbiAgYW5pbWF0aW9uX3RyYWNrZXIgPSAwO1xyXG4gIGN1cnJlbnQ6IHN0cmluZztcclxuICBjYWxsYmFjazogdm9pZF9mdW5jO1xyXG4gIGFuaW1hdGluZzpib29sZWFuID0gZmFsc2U7XHJcbiAgLy9kZWZpbmVzIGFuIGFuaW1hdGlvbiB0aGF0IGNhbiBiZSBwbGF5ZWQgdXNpbmcgdGhlIHBsYXkgbWV0aG9kXHJcbiAgLy90aGUga2V5ZnJhbWVzIGFyZSBhbiBhcnJheSBvZiB0dXBsZXMgaW4gdGhlIFxyXG4gIC8vZm9ybWF0IG9mIFsodGltZSBmb3IgdGhpcyBzcHJpdGUgdG8gc2hvdyksIHNwcml0ZV1cclxuICBhZGQobmFtZTogc3RyaW5nLCBrZXlmcmFtZXM6IEFycmF5PFtudW1iZXIsIHNwcml0ZV0+LCBsZW5ndGg6IG51bWJlcikge1xyXG4gICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gW2tleWZyYW1lcywgbGVuZ3RoXTtcclxuICB9XHJcbiAgcGxheShuYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogdm9pZF9mdW5jKSB7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciA9IDA7XHJcbiAgfVxyXG4gIHJlbmRlcmYodDogbnVtYmVyKTogc3ByaXRlIHtcclxuICAgIGxldCBjdXJyX2FuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRdWzBdO1xyXG4gICAgbGV0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5hbmltYXRpb25zW3RoaXMuY3VycmVudF1bMV07XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgZm9yICg7IGluZGV4IDwgY3Vycl9hbmltYXRpb24ubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xyXG4gICAgICBsZXQga2V5ZnJhbWVfdGltZSA9IGN1cnJfYW5pbWF0aW9uW2luZGV4XVswXTtcclxuICAgICAgbGV0IG5leHRfa2V5ZnJhbWVfdGltZSA9IGN1cnJfYW5pbWF0aW9uW2luZGV4ICsgMV1bMF07XHJcbiAgICAgIGlmICh0aGlzLmFuaW1hdGlvbl90cmFja2VyID49IGtleWZyYW1lX3RpbWUgJiYgdGhpcy5hbmltYXRpb25fdHJhY2tlciA8IG5leHRfa2V5ZnJhbWVfdGltZSkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPSB0aGlzLmFuaW1hdGlvbl90cmFja2VyICsgdDtcclxuICAgICAgICB0aGlzLmFuaW1hdGluZyA9IHRydWU7XHJcbiAgICAgICAgLy9SZXR1cm5zIHRoZSByYXcgc3ByaXRlIHRoYXQncyBjb3JyZWN0IHRvIHNob3cgYXQgdGhpcyB0aW1lXHJcbiAgICAgICAgcmV0dXJuIGN1cnJfYW5pbWF0aW9uW2luZGV4XVsxXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPj0gbGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPSAwO1xyXG4gICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgKz0gdDtcclxuICAgIH1cclxuICAgIC8vUmV0dXJucyB0aGUgbGFzdCBhcHByb3ByaWF0ZSBmcmFtZSB1bnRpbCB0aGUgYW5pbWF0aW9uIGlzIG92ZXIuXHJcbiAgICByZXR1cm4gY3Vycl9hbmltYXRpb25baW5kZXhdWzFdO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGhpdGJveHtcclxuICB3aWR0aDpudW1iZXIsXHJcbiAgaGVpZ2h0Om51bWJlcixcclxuICB4X29mZnNldDpudW1iZXIsXHJcbiAgeV9vZmZzZXQ6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGFyYW1ze1xyXG4gIFtpbmRleDpzdHJpbmddOmJvb2xlYW58c3RyaW5nfG51bWJlclxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBvYmp7XHJcbiAgLy9VcmwgdG8gdGhlIG9iamVjdCdzIGluZGl2aWR1YWwgc3ByaXRlLCBvciBhbGwgb2YgaXRzIHNwcml0ZXNcclxuICAvL2J1bmRsZWQgaW50byBhIHNwcml0ZXNoZWV0XHJcbiAgc3ByaXRlX3VybCA9IFwiXCI7XHJcbiAgLy9UaGlzIGlzIHRoZSBsb2FkZWQgc3ByaXRlL3Nwcml0ZXNoZWV0IG9mIHRoZSBvYmplY3RcclxuICAvL3doaWNoIGlzIGZldGNoZWQgZnJvbSB0aGUgdXJsIGFib3ZlXHJcbiAgc3ByaXRlX3NoZWV0OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIHN0YXRlOiBvYmpfc3RhdGU7XHJcbiAgcmVuZGVyX3R5cGUgPSByZW5kZXJfdHlwZS5zcHJpdGU7XHJcbiAgLy9UaGVzZSBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgYWN0dWFsIG9iamVjdCdzIHNwcml0ZSBoZWlnaHQgYW5kIHdpZHRoXHJcbiAgLy9JZiB1c2luZyBhIHNwcml0ZSBzaGVldCwgdGhlc2UgYmUgb25lIHNwcml0ZSdzIGhlaWdodCBhbmQgd2lkdGguXHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBcclxuICBjb2xsaXNpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBoaXRib3g6IGhpdGJveFxyXG4gIGlkOiBzdHJpbmc7XHJcbiAgLy9BcnJheSBvZiBiaW5kIGlkc1xyXG4gIC8vQmluZHMgYXJlIGluZGVudGlmaWVkIGJ5IGEgdW5pcXVlIG51bWJlciB0aGF0IGlzIHJldHVybiB3aGVuXHJcbiAgLy9UaGUgYmluZCBpcyBjcmVhdGVkLiBXZSBtdXN0IHN0b3JlIHRoZXNlIGlkcyBpbiBvcmRlciB0byBcclxuICAvL2RlbGV0ZSB0aGUgYmluZHMgd2hlbiB0aGV5IGFyZSBtYW51YWxseSB1bmJvdW5kLCBvciB0aGUgb2JqZWN0IGlzIGRlbGV0ZWQuXHJcbiAgYmluZHM6IEFycmF5PG51bWJlcj47XHJcbiAgdGFnczpzdHJpbmdbXSA9IFtdO1xyXG4gIC8vdGFncyBhcmUgdXNlZCB0byBleGNsdWRlIG9yIGluY2x1ZGUgb2JqZWN0cyB3aGVuIGNoZWNraW5nIGZvciBjb2xsaXNpb25zLFxyXG4gIC8vYW5kIGZvciBvYmplY3QgaWRlbnRpZmljYXRpb24gLyBjbGFzc2lmaWNhdGlvbiBpbiBzY3JpcHRzXHJcbiAgcmVuZGVyID0gdHJ1ZTtcclxuICBhbmltYXRpb25zID0gbmV3IGFuaW1hdGlvbnMoKTtcclxuICBhdWRpbyA9IG5ldyBhdWRpbygpO1xyXG4gIC8vTGFzdCByZW5kZXIgdGltZSwgdXNlZCB0byBjYWxjdWxhdGUgZGVsdGFfdGltZVxyXG4gIGxhc3RfcmVuZGVyOm51bWJlciA9IDA7XHJcbiAgZ2FtZTpnYW1lPHVua25vd24+O1xyXG4gIHBhcmVudDpjb21wb3NpdGVfb2JqO1xyXG4gIC8vUGFyYW1zIGFyZSBvcHRpb25zIGZvciB0aGUgb2JqZWN0LCB0aGF0IGRvIG5vdCByZWx5IG9uIHN0YXRlXHJcbiAgLy8gRm9yIGV4YW1wbGUsIHRoZSBzaWRlIG9mIGEgcGllY2UgaW4gY2hlc3MuXHJcbiAgcGFyYW1zOnVua25vd24gPSB7fTtcclxuICBsYXllcjpudW1iZXIgPSAxO1xyXG4gIHNhdmVfdG9fZmlsZTpib29sZWFuID0gdHJ1ZTtcclxuICB0aWNrX3N0YXRlID0gdHJ1ZTtcclxuICBzY2FsZV90eXBlID0gc2NhbGVfdHlwZS5ncm93O1xyXG4gIHN0YXRpYyBkZWZhdWx0X3BhcmFtczp1bmtub3duID0ge307XHJcbiAgb3BhY2l0eTpudW1iZXIgPSAxO1xyXG4gIGdldFN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgfVxyXG4gIC8vQW5pbWF0aW9ucyBzaG91bGQgYmUgcmVnaXN0ZXJlZCB1c2luZyB0aGlzLmFuaW1hdGlvbnMuYWRkIGluIHRoaXMgbWV0aG9kXHJcbiAgcmVnaXN0ZXJBbmltYXRpb25zKCkge1xyXG5cclxuICB9XHJcbiAgLy9Tb3VuZHMgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgdXNpbmcgdGhpcy5hdWRpby5hZGQgaW4gdGhpcyBtZXRob2QuXHJcbiAgcmVnaXN0ZXJBdWRpbygpIHtcclxuXHJcbiAgfVxyXG4gIGRlZmF1bHRQYXJhbXMoKTp1bmtub3due1xyXG4gICAgcmV0dXJuIGRlZXAodGhpcy5kZWZhdWx0UGFyYW1zKTtcclxuICB9XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtcyA9IG9iai5kZWZhdWx0X3BhcmFtcykge1xyXG4gICAgXHJcbiAgICB0aGlzLmlkID0gXCJcIiArIGNvdW50ZXI7XHJcbiAgICB0aGlzLmJpbmRzID0gW107XHJcbiAgICBjb3VudGVyKys7XHJcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcclxuICAgIHRoaXMucmVnaXN0ZXJDb250cm9scygpO1xyXG4gICAgdGhpcy5yZWdpc3RlckF1ZGlvKCk7XHJcbiAgICAvL0NyZWF0ZXMgYSBjb3B5IG9mIHRoZSBwYXNzZWQgaW4gaW5pdGlhbCBzdGF0ZSB0byBhdm9pZCBcclxuICAgIC8vVXBkYXRpbmcgdGhlIHNhdmVkIHN0YXRlIG9mIHRoZSByb29tXHJcbiAgICB0aGlzLnN0YXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xyXG4gICAgXHJcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcclxuICB9XHJcbiAgbG9hZCgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgYSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBhLnNyYyA9IHRoaXMuc3ByaXRlX3VybDtcclxuICAgICAgYS5vbmxvYWQgPSAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIF90aGlzLnNwcml0ZV9zaGVldCA9IGE7XHJcbiAgICAgICAgX3RoaXMucmVnaXN0ZXJBbmltYXRpb25zKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hdWRpby5sb2FkKCk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vV2l0aGluIG5vcm1hbCBvYmplY3RzLCB0aGlzIGp1c3QgcmV0dXJucyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSBvYmplY3QuXHJcbiAgLy9UaGlzIG1ldGhvZCBpcyBvdmVyd3JpdHRlbiBieSBjb21wb3NpdGUgb2JqZWN0cywgd2hpY2ggcmV0dXJucyBldmVyeSBvYmplY3RcclxuICAvL3RoYXQgdGhlIGNvbXBvc2l0ZSBvYmplY3QgY29udGFpbnMuIFRoaXMgc2ltcGxpZmllcyB0aGUgYmFja2VuZCB3b3JrLCBhcyBlYWNoXHJcbiAgLy9vYmplY3QgcmV0dXJucyBhbiBhcnJheSBvZiBhdGxlYXN0IG9uZSBvYmplY3QuXHJcbiAgY29tYmluZWRPYmplY3RzKCk6b2JqW117XHJcbiAgICByZXR1cm4gW3RoaXNdO1xyXG4gIH1cclxuICAvL0Rpc3RhbmNlIGZyb20gb25lIG9iamVjdCB0byBhbm90aGVyLlxyXG4gIGRpc3RhbmNlKHRhcmdldDpvYmopOm51bWJlcntcclxuICAgIHJldHVybiBEaXN0YW5jZSh0aGlzLnN0YXRlLnBvc2l0aW9uLHRhcmdldC5zdGF0ZS5wb3NpdGlvbik7XHJcbiAgfVxyXG4gIGFuZ2xlVG93YXJkcyhhOiBvYmopOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5nbGVUb3dhcmRzUG9pbnQoYS5zdGF0ZS5wb3NpdGlvbik7XHJcbiAgfVxyXG4gIGFuZ2xlVG93YXJkc1BvaW50KHRhcmdldDpwb3NpdGlvbik6bnVtYmVye1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucG9zaXRpb24ueCA8IHRhcmdldC54ICYmIHRoaXMuc3RhdGUucG9zaXRpb24ueSA+IHRhcmdldC55XHJcbiAgICAgIHx8ICh0aGlzLnN0YXRlLnBvc2l0aW9uLnggPCB0YXJnZXQueCAmJiB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgPCB0YXJnZXQueSkpIHtcclxuICAgICAgcmV0dXJuIDkwIC0gTWF0aC5hdGFuKCh0YXJnZXQueSAtIHRoaXMuc3RhdGUucG9zaXRpb24ueSkgLyAodGFyZ2V0LnggLSB0aGlzLnN0YXRlLnBvc2l0aW9uLngpKSAqIDE4MCAvIE1hdGguUElcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnBvc2l0aW9uLnggPiB0YXJnZXQueCAmJiB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgPCB0YXJnZXQueVxyXG4gICAgICB8fCB0aGlzLnN0YXRlLnBvc2l0aW9uLnggPiB0YXJnZXQueCAmJiB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgPiB0YXJnZXQueSkge1xyXG4gICAgICByZXR1cm4gMjcwIC0gTWF0aC5hdGFuKCh0YXJnZXQueSAtIHRoaXMuc3RhdGUucG9zaXRpb24ueSkgLyAodGFyZ2V0LnggLSB0aGlzLnN0YXRlLnBvc2l0aW9uLngpKSAqIDE4MCAvIE1hdGguUElcclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICBiaW5kQ29udHJvbChrZXk6IHN0cmluZywgeDogZXhlY190eXBlLCBmdW5jOiBjb250cm9sX2Z1bmMsIGludGVydmFsID0gMSkge1xyXG4gICAgdGhpcy5iaW5kcy5wdXNoKEJpbmQoa2V5LCBmdW5jLCB4LCBpbnRlcnZhbCwgdGhpcykpO1xyXG4gIH1cclxuICAvL1RoaXMgbWV0aG9kIGlzIHdoZXJlIGNvbnRyb2xzIGFuZCBrZXliaW5kcyBzaG91bGRcclxuICAvL2JlIGRlZmluZWQgdXNpbmcgYmluZENvbnRyb2xcclxuICByZWdpc3RlckNvbnRyb2xzKCl7XHJcblxyXG4gIH1cclxuICBzdGF0ZWYodGltZTpudW1iZXIpe1xyXG5cclxuICB9XHJcbiAgZGVsZXRlKCkge1xyXG4gICAgZm9yIChsZXQgYSBvZiB0aGlzLmJpbmRzKSB7XHJcbiAgICAgIFVuYmluZChhKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ2FtZS5nZXRSb29tKCkuZGVsZXRlSXRlbSh0aGlzLmlkKTtcclxuICB9XHJcbiAgVW5iaW5kQWxsKCl7XHJcbiAgICBmb3IgKGxldCBhIG9mIHRoaXMuYmluZHMpIHtcclxuICAgICAgVW5iaW5kKGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvL1JldHVybnMgdGhlIGNvbGxpc2lvbiBib3ggb2YgdGhlIG9iamVjdFxyXG4gIC8vRG9lcyBub3QgaGF2ZSB0byBjb3JyZXNwb25kIHRvIHRoZSBvYmplY3QncyBzcHJpdGUncyBzaXplIFxyXG4gIC8vQSBjb21wb3NpdGUgb2JqZWN0IGluc3RlYWQgcmV0dXJucyB0aGUgYm91bmRpbmcgYm94IHRoYXQgXHJcbiAgLy9jb250YWlucyBldmVyeSBvbmUgb2YgaXRzIGNvbnRhaW5lZCBvYmplY3RzXHJcbiAgZ2V0RnVsbENvbGxpc2lvbkJveCgpOmNvbGxpc2lvbl9ib3h7XHJcbiAgICAvL0lmIGEgZGV2ZWxvcGVyIGRlZmluZWQgaGl0Ym94IGV4aXN0cywgdXNlIHRoYXQsIG90aGVyd2lzZVxyXG4gICAgLy9nZW5lcmF0ZSBpdCB1c2luZyB0aGUgc3ByaXRlIHdpZHRoIC8gaGVpZ2h0XHJcbiAgICBpZih0aGlzLmhpdGJveCl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgd2lkdGg6dGhpcy5oaXRib3gud2lkdGggKiB0aGlzLnN0YXRlLnNjYWxpbmcud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGl0Ym94LmhlaWdodCAqIHRoaXMuc3RhdGUuc2NhbGluZy5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB4OnRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OnRoaXMuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDp0aGlzLndpZHRoICogdGhpcy5zdGF0ZS5zY2FsaW5nLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDp0aGlzLmhlaWdodCAqIHRoaXMuc3RhdGUuc2NhbGluZy5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvL1RoaXMgaXMgYW5vdGhlciBtZXRob2RzLCBzaW1pbGFyIHRvIGdldENvbWJpbmVkXHJcbiAgLy9KdXN0IHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgb2JqZWN0J3MgY29sbGlzaW9uIGJveFxyXG4gIC8vT3ZlcndyaXR0ZW4gaW4gY29tcG9zaXRlIG9iamVjdHMgdG8gcmV0dXJuIGV2ZXJ5IG9iamVjdCdzIGNvbGxpc2lvbiBib3hcclxuICAvL3dpdGhpbiB0aGUgY29tcG9zaXRlIG9iZWN0LlxyXG4gIGdldEFsbENvbGxpc2lvbkJveGVzKCk6Y29sbGlzaW9uX2JveFtde1xyXG4gICAgcmV0dXJuIFt0aGlzLmdldEZ1bGxDb2xsaXNpb25Cb3goKV1cclxuICB9XHJcbiAgLy9DaGVja3MgdG8gc2VlIGlmIGFuIG9iamVjdCBhY3R1YWxseSBjb2xsaWRlcyB3aXRoIHRoZSBwcm92aWRlZCBib3guXHJcbiAgLy9BIGJveCByZXByZXNlbnRzIGFuIGFyZWEgd2l0aGluIHRoZSBnYW1lIHNwYWNlXHJcbiAgLy9DaGVja2luZyBmb3IgY29sbGlzaW9ucyBpcyB0cml2aWFsIGN1cnJlbnRseSwgYXMgYWxsIGhpdGJveGVzIGFyZSBheGlzIGFsaWduZWRcclxuICAvL0J1dCBpbXBsZW1lbnRpbmcgYSBtb3JlIGNvbXBsaWNhdGVkIHBoeXNpY3MgZW5naW5lIHdvdWxkIG1ha2UgdGhpcyBtZXRob2QncyBpbXBsLlxyXG4gIC8vc2lnbmlmaWNhdGx5IG1vcmUgY29tcGxleC5cclxuICBjb2xsaWRlc1dpdGhCb3gob3RoZXJfb2JqZWN0OiBjb2xsaXNpb25fYm94KTogYm9vbGVhbiB7XHJcbiAgICBsZXQgY29sbGlkZXNfaG9ycml6b250YWxseSA9IGZhbHNlLCBjb2xsaWRlc192ZXJ0aWNhbGx5ID0gZmFsc2U7XHJcbiAgICBsZXQgaGJveCA9IHRoaXMuaGl0Ym94O1xyXG4gICAgaWYoIXRoaXMuaGl0Ym94KXtcclxuICAgICAgaGJveCA9IHtcclxuICAgICAgICB4X29mZnNldDowLFxyXG4gICAgICAgIHlfb2Zmc2V0OjAsXHJcbiAgICAgICAgd2lkdGg6dGhpcy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6dGhpcy5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IG9iamVjdF9ib3VuZHMgPSB7XHJcbiAgICAgIGxlZnQ6ICh0aGlzLnN0YXRlLnBvc2l0aW9uLnggKyBoYm94Lnhfb2Zmc2V0IC0gaGJveC53aWR0aCAqIHRoaXMuc3RhdGUuc2NhbGluZy53aWR0aCAvIDIpLFxyXG4gICAgICByaWdodDogKHRoaXMuc3RhdGUucG9zaXRpb24ueCArIGhib3gueF9vZmZzZXQgKyBoYm94LndpZHRoICogdGhpcy5zdGF0ZS5zY2FsaW5nLndpZHRoIC8gMiksXHJcbiAgICAgIHRvcDogKHRoaXMuc3RhdGUucG9zaXRpb24ueSArIGhib3gueV9vZmZzZXQgKyBoYm94LmhlaWdodCAqIHRoaXMuc3RhdGUuc2NhbGluZy5oZWlnaHQgLyAyKSxcclxuICAgICAgYm90dG9tOiAodGhpcy5zdGF0ZS5wb3NpdGlvbi55ICsgaGJveC55X29mZnNldCAtIGhib3guaGVpZ2h0ICogdGhpcy5zdGF0ZS5zY2FsaW5nLmhlaWdodCAvIDIpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG90aGVyX29iamVjdF9ib3VuZHMgPSB7XHJcbiAgICAgIGxlZnQ6IChvdGhlcl9vYmplY3QueCAtIG90aGVyX29iamVjdC53aWR0aCAvIDIpLFxyXG4gICAgICByaWdodDogKG90aGVyX29iamVjdC54ICsgb3RoZXJfb2JqZWN0LndpZHRoIC8gMiksXHJcbiAgICAgIHRvcDogKG90aGVyX29iamVjdC55ICsgb3RoZXJfb2JqZWN0LmhlaWdodCAvIDIpLFxyXG4gICAgICBib3R0b206IChvdGhlcl9vYmplY3QueSAtIG90aGVyX29iamVjdC5oZWlnaHQgLyAyKVxyXG4gICAgfVxyXG5cclxuICAgIC8vV2UgY2FuIGNvbXBhcmUgdGhlIHNpZGVzIG9mIHRoZSBib3hlcyB0byBzZWUgaWYgdGhleSBvdmVybGFwXHJcbiAgICAvL1dlIGNoZWNrIG9uY2UgZm9yIGhvaXpvbnRhbCBvdmVybGFwLCB0aGVuIHZlcnRpY2FsLlxyXG4gICAgaWYgKChvYmplY3RfYm91bmRzLmxlZnQgPj0gb3RoZXJfb2JqZWN0X2JvdW5kcy5sZWZ0ICYmIG9iamVjdF9ib3VuZHMubGVmdCA8IG90aGVyX29iamVjdF9ib3VuZHMucmlnaHQpIHx8IChvdGhlcl9vYmplY3RfYm91bmRzLmxlZnQgPiBvYmplY3RfYm91bmRzLmxlZnQgJiYgb3RoZXJfb2JqZWN0X2JvdW5kcy5sZWZ0IDwgb2JqZWN0X2JvdW5kcy5yaWdodCkpIHtcclxuICAgICAgY29sbGlkZXNfaG9ycml6b250YWxseSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoKG9iamVjdF9ib3VuZHMuYm90dG9tID49IG90aGVyX29iamVjdF9ib3VuZHMuYm90dG9tICYmIG9iamVjdF9ib3VuZHMuYm90dG9tIDwgb3RoZXJfb2JqZWN0X2JvdW5kcy50b3ApIHx8IChvdGhlcl9vYmplY3RfYm91bmRzLmJvdHRvbSA+IG9iamVjdF9ib3VuZHMuYm90dG9tICYmIG90aGVyX29iamVjdF9ib3VuZHMuYm90dG9tIDwgb2JqZWN0X2JvdW5kcy50b3ApKXtcclxuICAgICAgY29sbGlkZXNfdmVydGljYWxseSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sbGlkZXNfaG9ycml6b250YWxseSAmJiBjb2xsaWRlc192ZXJ0aWNhbGx5O1xyXG4gIH1cclxuICAvL1RoZSBwYXJ0aWNsZSBtdXN0IGJlIHJlZ2lzdGVyZWQgaW4gdGhlIHJvb20ncyByZWdpc3RlclBhcnRpY2xlcyBtZXRob2QgXHJcbiAgLy9UaGUgbmFtZSBwYXJhbWV0ZXIgc2hvdWxkIGNvcnJlc3BvbmQgdG8gdGhlIGtleSBvZiBhIHBhcnRpY2xlXHJcbiAgZW1pdFBhcnRpY2xlKG5hbWU6c3RyaW5nLG9mZnNldDpwb3NpdGlvbixsaWZldGltZTpudW1iZXIscmFuZ2U6bnVtYmVyKXtcclxuICAgIGxldCByb29tID0gdGhpcy5nYW1lLmdldFJvb20oKTtcclxuICAgIGxldCBzdCA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICBsZXQgZmluYWxfcG9zaXRpb246cG9zaXRpb24gPSB7XHJcbiAgICAgIHg6c3QucG9zaXRpb24ueCArIG9mZnNldC54LFxyXG4gICAgICB5OnN0LnBvc2l0aW9uLnkgKyBvZmZzZXQueVxyXG4gICAgfVxyXG4gICAgcm9vbS5lbWl0UGFydGljbGUobmFtZSxmaW5hbF9wb3NpdGlvbixsaWZldGltZSxyYW5nZSlcclxuICB9XHJcbiAgLy9JbnRlcm5hbCBtZXRob2QgdGhhdCBrZWVwcyBjYWxjdWxhdGVzIHRoZSBkZWx0YV90aW1lXHJcbiAgLy9BbHNvIGNvbnZlcnRzIGluZGl2aWR1YWwgc3ByaXRlcyBpbnRvIGFycmF5cyBvZiBvbmUgc3ByaXRlLlxyXG4gIHJlbmRlclRyYWNrKHRpbWU6bnVtYmVyKTogcG9zaXRpb25lZF9zcHJpdGVbXSB7XHJcbiAgICBsZXQgcmVuZGVyZWQgPSB0aGlzLnJlbmRlcmYodGltZSAtIHRoaXMubGFzdF9yZW5kZXIpO1xyXG4gICAgbGV0IGZpbmFsOnBvc2l0aW9uZWRfc3ByaXRlW107XHJcbiAgICB0aGlzLmxhc3RfcmVuZGVyID0gdGltZTtcclxuICAgIGlmKEFycmF5LmlzQXJyYXkocmVuZGVyZWQpKVxyXG4gICAgICBmaW5hbCA9IHJlbmRlcmVkXHJcbiAgICBlbHNle1xyXG4gICAgICBmaW5hbCA9IFtyZW5kZXJlZF1cclxuICAgIH1cclxuICAgIHJldHVybiBmaW5hbDtcclxuICB9XHJcbiAgLy9Nb3N0IG9iamVjdHMgc2hvdWxkIG5vdCBiZSBvdmVyd3JpdHRpbmcgdGhlIHJlbmRlcmYgbWV0aG9kXHJcbiAgLy9SZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSBzcHJpdGUgZm9yIHRoZSBvYmplY3RcclxuICByZW5kZXJmKHRpbWU6IG51bWJlcik6IHBvc2l0aW9uZWRfc3ByaXRlW10gfCBwb3NpdGlvbmVkX3Nwcml0ZXtcclxuICAgIC8vSWYgdGhlIG9iamVjdCBkb2Vzbid0IGhhdmUgcmVnaXN0ZXJlZCBhbmltYXRpb25zLCBvciBpc24ndCBwbGF5aW5nIG9uZVxyXG4gICAgLy9XZSBoYXZlIHRvIGNyZWF0ZSB0aGUgc3ByaXRlIGhlcmUuXHJcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5hbmltYXRpb25zLmFuaW1hdGlvbnMpLmxlbmd0aCA9PSAwIHx8ICF0aGlzLmFuaW1hdGlvbnMuY3VycmVudCkge1xyXG4gICAgICBpZighdGhpcy5zcHJpdGVfc2hlZXQgfHwgIXRoaXMuaGVpZ2h0IHx8ICF0aGlzLndpZHRoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgc3ByaXRlOnVuZGVmaW5lZCxcclxuICAgICAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHNwcml0ZV9oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgbGV0IHNwcml0ZV93aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIC8vVGVjaG5pY2FsbHkgd2UgZG9uJ3QgbmVlZCB0byBkZWZpbmUgYW4gb2JqZWN0IGhlaWdodCBhbmQgd2lkdGhcclxuICAgICAgLy9JZiB0aGUgc3ByaXRlX3VybCBwb2ludHMgdG8gYSBzaW5nbGUgc3RhdGljIHNwcml0ZSwgYXMgd2UgY2FuIGp1c3QgcHVsbFxyXG4gICAgICAvL3RoZSBkaW1lbnNpb25zIGZyb20gdGhlIGltYWdlXHJcbiAgICAgIGlmICh0aGlzLmhlaWdodCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzcHJpdGVfaGVpZ2h0ID0gdGhpcy5zcHJpdGVfc2hlZXQuaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLndpZHRoID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHNwcml0ZV93aWR0aCA9IHRoaXMuc3ByaXRlX3NoZWV0LndpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3ByaXRlOiB7XHJcbiAgICAgICAgICBzcHJpdGVfc2hlZXQ6IHRoaXMuc3ByaXRlX3NoZWV0LFxyXG4gICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgIHNwcml0ZV93aWR0aDogc3ByaXRlX3dpZHRoLFxyXG4gICAgICAgICAgc3ByaXRlX2hlaWdodDogc3ByaXRlX2hlaWdodCxcclxuICAgICAgICAgIG9wYWNpdHk6dGhpcy5vcGFjaXR5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB4OiB0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTogdGhpcy5zdGF0ZS5wb3NpdGlvbi55XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcHJpdGU6dGhpcy5hbmltYXRpb25zLnJlbmRlcmYodGltZSksXHJcbiAgICAgIHg6IHRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgeTogdGhpcy5zdGF0ZS5wb3NpdGlvbi55XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGNvbXBvc2l0ZV9zdGF0aWN7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgb2JqOm9ialxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgY29tcG9zaXRlX29iaiBleHRlbmRzIG9iantcclxuICBvYmplY3RzOm9ialtdID0gW107XHJcbiAgcmVuZGVyID0gZmFsc2U7XHJcbiAgcmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG4gIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gIHN0YXRpY3M6Y29tcG9zaXRlX3N0YXRpY1tdID0gW107XHJcbiAgY29uc3RydWN0b3IocG9zOm9ial9zdGF0ZSl7XHJcbiAgICBzdXBlcihwb3MpO1xyXG4gIH1cclxuICBsb2FkKCl7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoWy4uLnRoaXMub2JqZWN0cy5tYXAoKGEpPT5hLmxvYWQoKSksLi4udGhpcy5zdGF0aWNzLm1hcChhPT5hLm9iai5sb2FkKCkpXSk7XHJcbiAgfVxyXG4gIGNvbWJpbmVkT2JqZWN0cygpOm9ialtde1xyXG4gICAgbGV0IGNvbWJpbmVkID0gWy4uLnRoaXMub2JqZWN0cywuLi50aGlzLnN0YXRpY3MubWFwKGE9PmEub2JqKV07XHJcbiAgICBjb21iaW5lZC5mb3JFYWNoKGE9PmEucGFyZW50ID0gdGhpcyk7XHJcbiAgICByZXR1cm4gWy4uLmNvbWJpbmVkLHRoaXNdO1xyXG4gIH1cclxuICBnZXRJdGVtc0J5VGFnKHRhZzpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIHRoaXMuY29tYmluZWRPYmplY3RzKCkuZmlsdGVyKChhKT0+YS50YWdzLmluZGV4T2YodGFnKSA+IC0xKTtcclxuICB9XHJcbiAgYWRkSXRlbShhOm9iaixsaXN0PXRoaXMub2JqZWN0cyl7XHJcbiAgICBsaXN0LnB1c2goYSk7XHJcbiAgICBhLnBhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmdhbWUuZ2V0Um9vbSgpLmFkZEl0ZW0oYSk7XHJcbiAgfVxyXG4gIGdldEFsbENvbGxpc2lvbkJveGVzKCk6Y29sbGlzaW9uX2JveFtde1xyXG4gICAgbGV0IGFycjpjb2xsaXNpb25fYm94W10gPSBbXTtcclxuICAgIGZvcihsZXQgb2JqIG9mIFsuLi50aGlzLnN0YXRpY3MubWFwKGE9PmEub2JqKSwuLi50aGlzLm9iamVjdHNdKXtcclxuICAgICAgbGV0IGNyZWF0ZWRfYm94ID0gb2JqLmdldEFsbENvbGxpc2lvbkJveGVzKCk7XHJcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoY3JlYXRlZF9ib3gpKXtcclxuICAgICAgICBhcnIucHVzaCguLi5jcmVhdGVkX2JveCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBhcnIucHVzaChjcmVhdGVkX2JveCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbiAgfVxyXG4gIGRlbGV0ZSgpe1xyXG4gICAgZm9yKGxldCBhIG9mIHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGEuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgb2YgdGhpcy5zdGF0aWNzKXtcclxuICAgICAgYS5vYmouZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgICBzdXBlci5kZWxldGUoKTtcclxuICB9XHJcbiAgY29sbGlkZXNXaXRoQm94KGE6IGNvbGxpc2lvbl9ib3gpOmJvb2xlYW57XHJcbiAgICBmb3IobGV0IG9iaiBvZiB0aGlzLm9iamVjdHMpe1xyXG4gICAgICBpZihvYmouY29sbGlkZXNXaXRoQm94KGEpKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBvIG9mIHRoaXMuc3RhdGljcyl7XHJcbiAgICAgIGlmKG8ub2JqLmNvbGxpZGVzV2l0aEJveChhKSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9ICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBzdGF0aWNfb2JqIHtcclxuICBzcHJpdGVfdXJsID0gXCJcIjtcclxuICBzcHJpdGU6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBncmF2aXR5X29iaiBleHRlbmRzIG9iantcclxuICBncmF2aXR5ID0gdHJ1ZVxyXG59IiwiaW1wb3J0IHsgc3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IEdldFZpZXdwb3J0RGltZW5zaW9ucyB9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IGRpbWVuc2lvbnMsIG9ial9zdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IFRleHRfTm9kZSwgVGV4dFNldHRpbmcsSFVELFRleHQgfSBmcm9tIFwiLi9odWRcIjtcclxuaW1wb3J0IHtwb3NpdGlvbmVkX3Nwcml0ZX0gZnJvbSBcIi4vc3ByaXRlXCJcclxuXHJcbmludGVyZmFjZSBjYW1lcmFfc3RhdGUge1xyXG4gIHNjYWxpbmc6IG51bWJlcixcclxuICBwb3NpdGlvbjoge1xyXG4gICAgeDogbnVtYmVyLFxyXG4gICAgeTogbnVtYmVyXHJcbiAgfVxyXG4gIGRpbWVuc2lvbnM6IHtcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlclxyXG4gIH0sXHJcbiAgdmlld3BvcnQ6IHZpZXdwb3J0LFxyXG4gIGRlYnVnOmJvb2xlYW4sXHJcbiAgaHVkOkhVRCAgXHJcbn1cclxuXHJcbmludGVyZmFjZSB2aWV3cG9ydCB7XHJcbiAgeDogbnVtYmVyLFxyXG4gIHk6IG51bWJlcixcclxuICB3aWR0aDogbnVtYmVyLFxyXG4gIGhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBjYW1lcmFfcHJvcGVydGllcyB7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgZGltZW5zaW9uczp7XHJcbiAgICBoZWlnaHQ6bnVtYmVyLFxyXG4gICAgd2lkdGg6bnVtYmVyXHJcbiAgfVxyXG4gIHNjYWxpbmc6bnVtYmVyLFxyXG4gIGRlYnVnOmJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbWVyYSB7XHJcbiAgc3RhdGU6IGNhbWVyYV9zdGF0ZTtcclxuICBodWQ6IEhVRDtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczpjYW1lcmFfcHJvcGVydGllcywgdjogdmlld3BvcnQpIHtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNjYWxpbmc6cHJvcHMuc2NhbGluZyxcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiBwcm9wcy54ICogcHJvcHMuc2NhbGluZyxcclxuICAgICAgICB5OiBwcm9wcy55ICogcHJvcHMuc2NhbGluZ1xyXG4gICAgICB9LFxyXG4gICAgICBkaW1lbnNpb25zOiBwcm9wcy5kaW1lbnNpb25zLFxyXG4gICAgICB2aWV3cG9ydDoge1xyXG4gICAgICAgIHg6di54LFxyXG4gICAgICAgIHk6di55ICxcclxuICAgICAgICB3aWR0aDogdi53aWR0aCAqIHByb3BzLmRpbWVuc2lvbnMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB2LmhlaWdodCAqIHByb3BzLmRpbWVuc2lvbnMuaGVpZ2h0XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlYnVnOnByb3BzLmRlYnVnLFxyXG4gICAgICBodWQ6dW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldCB4KHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi54ID0geDtcclxuICB9XHJcbiAgc2V0IHkoeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgPSB5XHJcbiAgfVxyXG4gIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucG9zaXRpb24ueDtcclxuICB9XHJcbiAgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3NpdGlvbi55O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcmVuZGVyX2Z1bmMge1xyXG4gICh4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGluZzogbnVtYmVyKTogdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgcmVjdGFuZ2xlIHtcclxuICB3aWR0aDogbnVtYmVyLFxyXG4gIGhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBzcHJpdGVfYXJncyB7XHJcbiAgc3ByaXRlOiBzcHJpdGUsXHJcbiAgeDogbnVtYmVyLFxyXG4gIHk6IG51bWJlcixcclxuICByb3RhdGlvbjogbnVtYmVyLFxyXG4gIHNjYWxlOmRpbWVuc2lvbnMsXHJcbiAgc2NhbGVfdHlwZTpzY2FsZV90eXBlXHJcbn1cclxuXHJcbmludGVyZmFjZSByZW5kZXJlcl9hcmdzIHtcclxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgY2FtZXJhOiBDYW1lcmFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gcmVuZGVyX3R5cGUge1xyXG4gIHRleHQsXHJcbiAgc3ByaXRlLFxyXG4gIHJlY3QsXHJcbiAgc3Ryb2tlX3JlY3RcclxufVxyXG5cclxuZXhwb3J0IGVudW0gc2NhbGVfdHlwZXtcclxuICBncm93LFxyXG4gIHJlcGVhdFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaHVkX3RleHRfcmVuZGVyZXIgPSAocjogcmVuZGVyZXJfYXJncywgczogVGV4dFNldHRpbmcpID0+IHtcclxuICBsZXQgdmhlaWdodCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodDtcclxuICByLmNvbnRleHQuZm9udCA9IGAke3MuZm9udC5zaXplfXB4ICR7cy5mb250LmZvbnR9YDtcclxuICByLmNvbnRleHQuZmlsbFN0eWxlID0gcy5mb250LmNvbG9yO1xyXG4gIHIuY29udGV4dC50ZXh0QWxpZ24gPSBzLmZvbnQuYWxpZ247XHJcbiAgaWYgKHMuZm9udC5tYXhfd2lkdGgpIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgcy54LCB2aGVpZ2h0IC0gcy55LCBzLmZvbnQubWF4X3dpZHRoKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByLmNvbnRleHQuZmlsbFRleHQocy5mb250LnRleHQsIHMueCwgdmhlaWdodCAtIHMueSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGV4dF9yZW5kZXJlciA9IChyOnJlbmRlcmVyX2FyZ3MsczpUZXh0U2V0dGluZykgPT4ge1xyXG4gIGxldCBjYW1lcmEgPSByLmNhbWVyYTtcclxuICBsZXQgdmhlaWdodCA9IHIuY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0O1xyXG4gIGxldCB3aWR0aCA9IHIuY29udGV4dC5tZWFzdXJlVGV4dChzLmZvbnQudGV4dCkud2lkdGggKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBoZWlnaHQgPSBzLmZvbnQuc2l6ZSAqIDEuMiAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGZpbmFsX3ggPSAoKHMueCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9yLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSBzLnkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodC8yICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIHIuY29udGV4dC5mb250ID0gYCR7cy5mb250LnNpemUgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nfXB4ICR7cy5mb250LmZvbnR9YDtcclxuICByLmNvbnRleHQuZmlsbFN0eWxlID0gcy5mb250LmNvbG9yO1xyXG4gIHIuY29udGV4dC50ZXh0QWxpZ24gPSBzLmZvbnQuYWxpZ25cclxuICByLmNvbnRleHQuc2F2ZSgpO1xyXG4gIHIuY29udGV4dC50cmFuc2xhdGUoZmluYWxfeCwgZmluYWxfeSk7XHJcbiAgaWYgKHMuZm9udC5tYXhfd2lkdGgpIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgMCwgMCwgcy5mb250Lm1heF93aWR0aCk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCAwLCAwKTtcclxuICB9XHJcbiAgci5jb250ZXh0LnJlc3RvcmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNwcml0ZV9yZW5kZXJlciA9IChyOiByZW5kZXJlcl9hcmdzLCBzOiBzcHJpdGVfYXJncykgPT4ge1xyXG4gIGxldCBjYW1lcmEgPSByLmNhbWVyYTtcclxuICBsZXQgdmhlaWdodCA9IHIuY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgocy54IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL3IuY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiAtIHMuc3ByaXRlLnNwcml0ZV93aWR0aCAqIHMuc2NhbGUud2lkdGggLyAyKSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0gcy55IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEvci5jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHMuc2NhbGUuaGVpZ2h0IC8gMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55KSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBoZWlnaHQgPSBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0ICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyAqIHMuc2NhbGUuaGVpZ2h0O1xyXG4gIGxldCB3aWR0aCA9IHMuc3ByaXRlLnNwcml0ZV93aWR0aCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcgKiBzLnNjYWxlLndpZHRoO1xyXG4gIHIuY29udGV4dC5zYXZlKCk7XHJcbiAgci5jb250ZXh0Lmdsb2JhbEFscGhhID0gcy5zcHJpdGUub3BhY2l0eTtcclxuICByLmNvbnRleHQudHJhbnNsYXRlKGZpbmFsX3ggICsgKHdpZHRoKSAvIDIsIGZpbmFsX3kgKyBoZWlnaHQgLyAyKVxyXG4gIGxldCByYWRpYW5zID0gcy5yb3RhdGlvbiAqIChNYXRoLlBJIC8gMTgwKTtcclxuICByLmNvbnRleHQucm90YXRlKHJhZGlhbnMpO1xyXG4gIGlmKHMuc2NhbGVfdHlwZSA9PSBzY2FsZV90eXBlLmdyb3cpe1xyXG4gICAgci5jb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgcy5zcHJpdGUuc3ByaXRlX3NoZWV0LFxyXG4gICAgICBzLnNwcml0ZS5sZWZ0LFxyXG4gICAgICBzLnNwcml0ZS50b3AsXHJcbiAgICAgIHMuc3ByaXRlLnNwcml0ZV93aWR0aCxcclxuICAgICAgcy5zcHJpdGUuc3ByaXRlX2hlaWdodCxcclxuICAgICAgLSh3aWR0aCApIC8gMixcclxuICAgICAgLWhlaWdodCAvIDIsXHJcbiAgICAgIHdpZHRoLFxyXG4gICAgICBoZWlnaHRcclxuICAgIClcclxuICB9XHJcbiAgZWxzZSBpZihzLnNjYWxlX3R5cGUgPT0gc2NhbGVfdHlwZS5yZXBlYXQpe1xyXG4gICAgbGV0IG9uZV93aWR0aCA9IHMuc3ByaXRlLnNwcml0ZV93aWR0aCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgICBsZXQgb25lX2hlaWdodCA9IHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gICAgbGV0IHRvdGFsX2hvcl9zcHJpdGVzID0gd2lkdGgvb25lX3dpZHRoXHJcbiAgICBsZXQgdG90YWxfdmVyX3Nwcml0ZXMgPSBoZWlnaHQvb25lX2hlaWdodDtcclxuICAgIGlmKHRvdGFsX2hvcl9zcHJpdGVzIC0gMSA+IDAuMDAwMSB8fCB0b3RhbF92ZXJfc3ByaXRlcyAtIDEgPiAwLjAwMDEpe1xyXG4gICAgICBjb25zb2xlLmxvZyh0b3RhbF9ob3Jfc3ByaXRlcyArIFwiICsgXCIgKyB0b3RhbF92ZXJfc3ByaXRlcylcclxuICAgIH1cclxuICAgIFxyXG4gICBmb3IobGV0IGEgPSAwO2EgPCB0b3RhbF9ob3Jfc3ByaXRlczthICs9IDEpe1xyXG4gICAgIGZvcihsZXQgYiA9IDA7YiA8IHRvdGFsX3Zlcl9zcHJpdGVzO2IgKz0gMSl7XHJcbiAgICAgICBsZXQgbmV3X3dpZHRoID0gb25lX3dpZHRoO1xyXG4gICAgICAgbGV0IG5ld19oZWlnaHQgPSBvbmVfaGVpZ2h0O1xyXG4gICAgICAgaWYoKGEgKyAxKSAqIG9uZV93aWR0aCAtIHdpZHRoID4gMC4wMDAwMSl7XHJcbiAgICAgICAgIG5ld193aWR0aCA9IHdpZHRoICUgb25lX3dpZHRoO1xyXG4gICAgICAgfVxyXG4gICAgICAgaWYoKGIgKyAxKSAqIG9uZV9oZWlnaHQgLSBoZWlnaHQgPiAwLjAwMDAxKXtcclxuICAgICAgICAgbmV3X2hlaWdodCA9IGhlaWdodCAlIG9uZV9oZWlnaHQ7XHJcbiAgICAgICB9XHJcbiAgICAgICByLmNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgIHMuc3ByaXRlLnNwcml0ZV9zaGVldCxcclxuICAgICAgICBzLnNwcml0ZS5sZWZ0LFxyXG4gICAgICAgIHMuc3ByaXRlLnRvcCxcclxuICAgICAgICBzLnNwcml0ZS5zcHJpdGVfd2lkdGgsXHJcbiAgICAgICAgcy5zcHJpdGUuc3ByaXRlX2hlaWdodCxcclxuICAgICAgICAtd2lkdGgvMiArIGEgKiBvbmVfd2lkdGgsXHJcbiAgICAgICAgLWhlaWdodC8yICsgYiAqIG9uZV9oZWlnaHQsXHJcbiAgICAgICAgbmV3X3dpZHRoLFxyXG4gICAgICAgIG5ld19oZWlnaHRcclxuICAgICAgIClcclxuICAgICB9XHJcblxyXG4gICB9IFxyXG4gIH1cclxuICBcclxuICBcclxuICByLmNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcmVjdDogcmVjdGFuZ2xlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOm51bWJlciwgY2FtZXJhOiBDYW1lcmEpID0+IHtcclxuICBsZXQgdmhlaWdodCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAvIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKCh4IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSByZWN0LndpZHRoIC8gMikgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSB5IC0gcmVjdC5oZWlnaHQgLyAyIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55KSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgd2lkdGggPSByZWN0LndpZHRoICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgY29udGV4dC5zdHJva2VSZWN0KGZpbmFsX3gsIGZpbmFsX3ksIHdpZHRoLCBoZWlnaHQpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVjdF9yZW5kZXJlciA9IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJlY3Q6IHJlY3RhbmdsZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDpudW1iZXIsIGNhbWVyYTogQ2FtZXJhKSA9PiB7XHJcbiAgbGV0IHZoZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgoeCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcmVjdC53aWR0aCAvIDIpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0geSAtIHJlY3QuaGVpZ2h0IC8gMiAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGhlaWdodCA9IHJlY3QuaGVpZ2h0ICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IHdpZHRoID0gcmVjdC53aWR0aCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICBjb250ZXh0LmZpbGxSZWN0KGZpbmFsX3gsIGZpbmFsX3ksIHdpZHRoLCBoZWlnaHQpO1xyXG59IiwiaW1wb3J0IHsgZ3Jhdml0eV9vYmosb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlLCBzcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgZGltZW5zaW9ucywgb2JqX3N0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgdmVsb2NpdHlDb2xsaXNpb25DaGVjayxjaGVja19jb2xsaXNpb25zLGNvbGxpc2lvbl9ib3gsY2hlY2tfYWxsX2NvbGxpc2lvbnMsY2hlY2tfYWxsX29iamVjdHN9IGZyb20gXCIuL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge3JlbmRlcl9jb2xsaXNpb25fYm94LERFQlVHfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7QmluZCxjb250cm9sX2Z1bmMsIGV4ZWNfdHlwZX0gZnJvbSBcIi4vY29udHJvbHNcIjtcclxuaW1wb3J0IHtIVUQsVGV4dCwgVGV4dF9Ob2RlfSBmcm9tIFwiLi9odWRcIjtcclxuaW1wb3J0IHthdWRpb30gZnJvbSBcIi4vYXVkaW9cIlxyXG5pbXBvcnQge2dhbWV9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHtkZWJ1Z191cGRhdGVfb2JqX2xpc3R9IGZyb20gXCIuLi9saWIvZGVidWdcIjtcclxuaW1wb3J0IHtwcmVmYWJzfSBmcm9tIFwiLi4vZ2FtZS9vYmplY3RzL3ByZWZhYnNcIjtcclxuXHJcbmludGVyZmFjZSBwb3NpdGlvbntcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlclxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlHcmF2aXR5KG9iOmdyYXZpdHlfb2JqLGdyYXZfY29uc3Q6bnVtYmVyLCBncmF2X21heDpudW1iZXIpe1xyXG4gIGlmKG9iLmdyYXZpdHkgJiYgb2Iuc3RhdGUudmVsb2NpdHkueSA+IGdyYXZfbWF4KXtcclxuICAgIG9iLnN0YXRlLnZlbG9jaXR5LnkgKz0gZ3Jhdl9jb25zdDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGFydGljbGVfZW50cnl7XHJcbiAgc3ByaXRlOnN0cmluZyxcclxuICBoZWlnaHQ6bnVtYmVyLFxyXG4gIHdpZHRoOm51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgcGFydGljbGVze1xyXG4gIFtpbmRleDpzdHJpbmddOnBhcnRpY2xlX2VudHJ5XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugcm9vbV9pPFQ+e1xyXG4gIGJhY2tncm91bmRfdXJsOnN0cmluZyxcclxuICBvYmplY3RzOm9ialtdXHJcbiAgc3RhdGU6VFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG9iamVjdF9zdGF0ZV9jb25maWcge1xyXG4gIHR5cGU6c3RyaW5nLFxyXG4gIHN0YXRlOm9ial9zdGF0ZSxcclxuICBwYXJhbWV0ZXJzPzogdW5rbm93blxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHN0YXRlX2NvbmZpZ3tcclxuICBvYmplY3RzOm9iamVjdF9zdGF0ZV9jb25maWdbXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3Mgcm9vbTxUPntcclxuICAvL1VybCB0byBhbiBpbWFnZSB0byBiZSB1c2VkIGZvciB0aGUgcm9vbSBiYWNrZ3JvdW5kXHJcbiAgYmFja2dyb3VuZF91cmw6IHN0cmluZztcclxuICBiYWNrZ3JvdW5kOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIG9iamVjdHM6IG9ialtdID0gW107XHJcbiAgLy9UaGlzIG9iamVjdCBjb250YWlucyBwYXJ0aWNsZSBkZWZpbml0aW9uc1xyXG4gIHBhcnRpY2xlczpwYXJ0aWNsZXMgPSB7fTtcclxuICAvL1RoaXMgYXJyYXkgaXMgd2hhdCBhY3R1YWxseSBjb250YWlucyB0aGUgcGFydGljbGVzXHJcbiAgLy90aGF0IGV4aXN0cyB3aXRoaW4gdGhlIHJvb20uXHJcbiAgcGFydGljbGVzX2Fycjogb2JqW10gPSBbXTtcclxuICBzdGF0ZTogVDtcclxuICBiaW5kczpudW1iZXJbXSA9IFtdO1xyXG4gIGdhbWU6Z2FtZTx1bmtub3duPjtcclxuICBodWQ6SFVEO1xyXG4gIGF1ZGlvID0gbmV3IGF1ZGlvKCk7XHJcbiAgLy9UaGVzZSB0ZXh0IG5vZGVzIGV4aXN0cyBpbiB0aGUgYWN0dWFsIHJvb20gc3BhY2UsIHJhdGhlciB0aGFuXHJcbiAgLy9vbiB0aGUgaHVkIGxheWVyLlxyXG4gIHRleHRfbm9kZXM6VGV4dFtdID0gW107XHJcbiAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+LGNvbmZpZzpzdGF0ZV9jb25maWcpe1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIGZvcihsZXQgYyBvZiBjb25maWcub2JqZWN0cyl7XHJcbiAgICAgIC8vVGhpcyBoYW5kbGVzIGxvYWRpbmcgb2JqZWN0cyBmcm9tIHRoZSBzYXZlZCBqc29uIGZpbGUgYXNzb2NpYXRlZCB3aXRoIGVhY2ggcm9vbS5cclxuICAgICAgdGhpcy5hZGRJdGVtU3RhdGVDb25maWcoYylcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0U3RhdGVDb25maWcoKXtcclxuICAgIGxldCBjb25maWc6c3RhdGVfY29uZmlnID0ge29iamVjdHM6W119O1xyXG4gICAgZm9yKGxldCBvIG9mIHRoaXMub2JqZWN0cy5maWx0ZXIoKG9iaik9Pm9iai5zYXZlX3RvX2ZpbGUpKXtcclxuICAgICAgICBpZighby5wYXJlbnQpe1xyXG4gICAgICAgIGNvbmZpZy5vYmplY3RzLnB1c2goe1xyXG4gICAgICAgICAgdHlwZTpvLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgICAgICBzdGF0ZTpvLnN0YXRlLFxyXG4gICAgICAgICAgcGFyYW1ldGVyczpvLnBhcmFtc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG4gIGxvYWQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IGEgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgbGV0IHRvX2F3YWl0ID0gdGhpcy5vYmplY3RzLm1hcCgoYSkgPT4gYS5sb2FkKCkpO1xyXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbCh0b19hd2FpdCk7XHJcbiAgICAgIGEuc3JjID0gdGhpcy5iYWNrZ3JvdW5kX3VybDtcclxuICAgICAgYS5vbmVycm9yID0gKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGxvYWRpbmcgdXJsOlwiICsgdGhpcy5iYWNrZ3JvdW5kX3VybCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIGEub25sb2FkID0gKGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIF90aGlzLmJhY2tncm91bmQgPSBhO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXVkaW8ubG9hZCgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICBhc3luYyBhZGRJdGVtU3RhdGVDb25maWcoY29uZmlnOm9iamVjdF9zdGF0ZV9jb25maWcpe1xyXG4gICAgaWYocHJlZmFic1tjb25maWcudHlwZV0pe1xyXG4gICAgICBsZXQgbmV3X29iaiA9IDxvYmo+KG5ldyBwcmVmYWJzW2NvbmZpZy50eXBlXShPYmplY3QuYXNzaWduKHt9LGNvbmZpZy5zdGF0ZSksY29uZmlnLnBhcmFtZXRlcnMpKTtcclxuICAgICAgdGhpcy5hZGRJdGVtcyhuZXdfb2JqLmNvbWJpbmVkT2JqZWN0cygpKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVU5LTk9XTiBUWVBFIEFUVEVNUFRFRCBUTyBMT0FEOiBcIiArIGNvbmZpZy50eXBlKVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBhZGRJdGVtKG86b2JqLCBsaXN0ID0gdGhpcy5vYmplY3RzKXtcclxuICAgIGF3YWl0IG8ubG9hZCgpO1xyXG4gICAgby5nYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgbGlzdC5wdXNoKG8pO1xyXG4gICAgaWYoREVCVUcgJiYgbGlzdCA9PT0gdGhpcy5vYmplY3RzKXtcclxuICAgICAgZGVidWdfdXBkYXRlX29ial9saXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGFkZEl0ZW1zKG86b2JqW10sIGxpc3QgPSB0aGlzLm9iamVjdHMpe1xyXG4gICAgZm9yKGxldCBvYiBvZiBvKXtcclxuICAgICAgb2IuZ2FtZSA9IHRoaXMuZ2FtZTtcclxuICAgIH1cclxuICAgIGF3YWl0IFByb21pc2UuYWxsKG8ubWFwKChhKT0+YS5sb2FkKCkpKTtcclxuICAgIGxpc3QucHVzaCguLi5vKTtcclxuICAgIGlmKERFQlVHICYmIGxpc3QgPT09IHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBkZWxldGVJdGVtKGlkOnN0cmluZywgbGlzdCA9IHRoaXMub2JqZWN0cyl7XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCBsaXN0Lmxlbmd0aDthKyspe1xyXG4gICAgICBpZihsaXN0W2FdLmlkID09PSBpZCl7XHJcbiAgICAgICAgbGlzdC5zcGxpY2UoYSwxKVxyXG4gICAgICAgIGEtLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoREVCVUcgJiYgbGlzdCA9PT0gdGhpcy5vYmplY3RzKXtcclxuICAgICAgZGVidWdfdXBkYXRlX29ial9saXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlZ2lzdGVyUGFydGljbGVzKCl7XHJcblxyXG4gIH1cclxuICBiaW5kQ29udHJvbChrZXk6c3RyaW5nLHg6ZXhlY190eXBlLGZ1bmM6Y29udHJvbF9mdW5jLGludGVydmFsOm51bWJlciA9IDEpe1xyXG4gICAgdGhpcy5iaW5kcy5wdXNoKEJpbmQoa2V5LGZ1bmMseCxpbnRlcnZhbCkpOyBcclxuICB9XHJcbiAgY2hlY2tDb2xsaXNpb25zKGJveDpjb2xsaXNpb25fYm94LGV4ZW1wdD86c3RyaW5nW10pOm9ialtde1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICByZW5kZXJfY29sbGlzaW9uX2JveChib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoZWNrX2FsbF9jb2xsaXNpb25zKGJveCx0aGlzLm9iamVjdHMsZXhlbXB0KTtcclxuICB9XHJcbiAgY2hlY2tPYmplY3RzKGJveDpjb2xsaXNpb25fYm94LGV4ZW1wdD86c3RyaW5nW10sbGlzdD10aGlzLm9iamVjdHMpOm9ialtde1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICByZW5kZXJfY29sbGlzaW9uX2JveChib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoZWNrX2FsbF9vYmplY3RzKGJveCxsaXN0LGV4ZW1wdCk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyQ29udHJvbHMoKXtcclxuXHJcbiAgfVxyXG4gIGNsZWFudXAoKXtcclxuXHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIGZvcihsZXQgcGFydGljbGUgb2YgdGhpcy5wYXJ0aWNsZXNfYXJyKXtcclxuICAgICAgcGFydGljbGUuc3RhdGVmKHRpbWUpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCB0ZXh0X25vZGUgb2YgdGhpcy50ZXh0X25vZGVzKXtcclxuICAgICAgdGV4dF9ub2RlLnN0YXRlZih0aW1lKTtcclxuICAgIH1cclxuICAgIGxldCB0aWNraW5nX29iamVjdHMgPSB0aGlzLm9iamVjdHMuZmlsdGVyKChvKT0+by50aWNrX3N0YXRlKTtcclxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGlja2luZ19vYmplY3RzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgIHZlbG9jaXR5Q29sbGlzaW9uQ2hlY2sodGlja2luZ19vYmplY3RzW2FdLCB0aGlzLm9iamVjdHMpO1xyXG4gICAgICB0aWNraW5nX29iamVjdHNbYV0uc3RhdGVmKHRpbWUpO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5nYW1lLnN0YXRlLmNhbWVyYXMpe1xyXG4gICAgICBmb3IobGV0IGNhbWVyYXMgb2YgdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXMpe1xyXG4gICAgICAgIGlmKGNhbWVyYXMuaHVkKXtcclxuICAgICAgICAgIGNhbWVyYXMuaHVkLnN0YXRlZih0aW1lKTtcclxuICAgICAgICB9IFxyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gIH1cclxuICBlbWl0UGFydGljbGUobmFtZTpzdHJpbmcscG9zOnBvc2l0aW9uLGxpZmV0aW1lOm51bWJlcixwb3NfcmFuZ2U6bnVtYmVyKXtcclxuICAgIGxldCBzdGF0ZSA9IHtcclxuICAgICAgcG9zaXRpb246cG9zLFxyXG4gICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFkZEl0ZW0obmV3IFBhcnRpY2xlKHRoaXMucGFydGljbGVzW25hbWVdLHN0YXRlLGxpZmV0aW1lLHBvc19yYW5nZSksIHRoaXMucGFydGljbGVzX2Fycik7XHJcbiAgfVxyXG4gIGdldE9iaihpZDpzdHJpbmcpe1xyXG4gICAgZm9yKGxldCBhID0gMDsgYSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGErKyl7XHJcbiAgICAgIGlmKHRoaXMub2JqZWN0c1thXS5pZCA9PSBpZCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0c1thXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGdldE9iakJ5VGFnKHRhZzpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIHRoaXMub2JqZWN0cy5maWx0ZXIoKGEpPT5hLnRhZ3MuaW5kZXhPZih0YWcpID4gLTEpO1xyXG4gIH1cclxuICByZW5kZXJmKHRpbWU6IG51bWJlcik6IHNwcml0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcHJpdGVfc2hlZXQ6IHRoaXMuYmFja2dyb3VuZCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBzcHJpdGVfaGVpZ2h0OiB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LFxyXG4gICAgICBzcHJpdGVfd2lkdGg6IHRoaXMuYmFja2dyb3VuZC53aWR0aCxcclxuICAgICAgb3BhY2l0eToxXHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSwgcG9zaXRpb24sIGRpbWVuc2lvbnN9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7Z2V0UmFuZEludH0gZnJvbSBcIi4vbWF0aFwiO1xyXG5pbXBvcnQge3BhcnRpY2xlX2VudHJ5fSBmcm9tIFwiLi9yb29tXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHNwcml0ZXtcclxuICBzcHJpdGVfc2hlZXQ6SFRNTEltYWdlRWxlbWVudCxcclxuICBsZWZ0Om51bWJlcixcclxuICB0b3A6bnVtYmVyLFxyXG4gIHNwcml0ZV93aWR0aDpudW1iZXIsXHJcbiAgc3ByaXRlX2hlaWdodDpudW1iZXIsXHJcbiAgb3BhY2l0eTpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwb3NpdGlvbmVkX3Nwcml0ZXtcclxuICBzcHJpdGU6c3ByaXRlLFxyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBQYXJ0aWNsZV9pIGV4dGVuZHMgb2JqX3N0YXRle1xyXG4gIGxpZmV0aW1lOm51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlIGV4dGVuZHMgb2Jqe1xyXG4gIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gIHJhbmRvbV9yYW5nZTpudW1iZXI7XHJcbiAgbWF4X2xpZmV0aW1lOm51bWJlcjtcclxuICBzdGF0ZTpQYXJ0aWNsZV9pO1xyXG4gIHNlbGVjdGVkX3Nwcml0ZTpzcHJpdGU7XHJcbiAgY29uc3RydWN0b3IocGFydDpwYXJ0aWNsZV9lbnRyeSxzdGF0ZTpvYmpfc3RhdGUsbGlmZXRpbWU6bnVtYmVyLHJhbmRvbV9yYW5nZTpudW1iZXIpe1xyXG4gICAgc3VwZXIoc3RhdGUpO1xyXG4gICAgdGhpcy5zdGF0ZS5saWZldGltZSA9IDA7XHJcbiAgICB0aGlzLnNwcml0ZV91cmwgPSBwYXJ0LnNwcml0ZTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gcGFydC5oZWlnaHQ7XHJcbiAgICB0aGlzLndpZHRoID0gcGFydC53aWR0aDtcclxuICAgIHRoaXMubWF4X2xpZmV0aW1lID0gbGlmZXRpbWU7XHJcbiAgICB0aGlzLnJhbmRvbV9yYW5nZSA9IHJhbmRvbV9yYW5nZTtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueCArPSBnZXRSYW5kSW50KC1yYW5kb21fcmFuZ2UvMixyYW5kb21fcmFuZ2UvMik7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKz0gZ2V0UmFuZEludCgtcmFuZG9tX3JhbmdlLzIscmFuZG9tX3JhbmdlLzIpO1xyXG4gIH1cclxuICBkZWxldGUoKXtcclxuICAgIGxldCByb29tID0gdGhpcy5nYW1lLmdldFJvb20oKTtcclxuICAgIHJvb20uZGVsZXRlSXRlbSh0aGlzLmlkLHJvb20ucGFydGljbGVzX2Fycik7XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOm51bWJlcil7XHJcbiAgICB0aGlzLnN0YXRlLmxpZmV0aW1lICs9IHRpbWU7XHJcbiAgICBpZih0aGlzLnN0YXRlLmxpZmV0aW1lID4gdGhpcy5tYXhfbGlmZXRpbWUpe1xyXG4gICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXJmKHRpbWU6bnVtYmVyKTpwb3NpdGlvbmVkX3Nwcml0ZXtcclxuICAgIGlmKCF0aGlzLnNlbGVjdGVkX3Nwcml0ZSl7XHJcbiAgICAgIGxldCBzcHJpdGVzID0gc3ByaXRlX2dlbih0aGlzLnNwcml0ZV9zaGVldCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICBsZXQgcmFuZG9tX3JvdyA9IGdldFJhbmRJbnQoMCxzcHJpdGVzLmxlbmd0aCk7XHJcbiAgICAgIGxldCByYW5kb21fY29sID0gZ2V0UmFuZEludCgwLHNwcml0ZXNbcmFuZG9tX3Jvd10ubGVuZ3RoKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZF9zcHJpdGUgPSBzcHJpdGVzW3JhbmRvbV9yb3ddW3JhbmRvbV9jb2xdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RlZF9zcHJpdGUub3BhY2l0eSA9IDEgLSB0aGlzLnN0YXRlLmxpZmV0aW1lL3RoaXMubWF4X2xpZmV0aW1lO1xyXG4gICAgcmV0dXJue1xyXG4gICAgICB4OnRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgIHNwcml0ZTp0aGlzLnNlbGVjdGVkX3Nwcml0ZSBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcHJpdGVfZ2VuKHNwcml0ZV9zaGVldDpIVE1MSW1hZ2VFbGVtZW50LHNwcml0ZV93aWR0aDpudW1iZXIsc3ByaXRlX2hlaWdodDpudW1iZXIpOkFycmF5PEFycmF5PHNwcml0ZT4+e1xyXG4gIGxldCB3aWR0aCA9IHNwcml0ZV9zaGVldC53aWR0aDtcclxuICBsZXQgaGVpZ2h0ID0gc3ByaXRlX3NoZWV0LmhlaWdodDtcclxuICBsZXQgc3ByaXRlczpBcnJheTxBcnJheTxzcHJpdGU+PiA9IFtdO1xyXG4gIGZvcihsZXQgYiA9IDA7IGIgPCBoZWlnaHQ7YiArPSBzcHJpdGVfaGVpZ2h0KXtcclxuICAgIHNwcml0ZXMucHVzaChbXSk7XHJcbiAgICBmb3IobGV0IGEgPSAwOyBhIDwgd2lkdGg7YSArPSBzcHJpdGVfd2lkdGgpe1xyXG4gICAgICBzcHJpdGVzW2JdLnB1c2goe1xyXG4gICAgICAgIHNwcml0ZV9zaGVldCxcclxuICAgICAgICBsZWZ0OmEsXHJcbiAgICAgICAgdG9wOmIgKiBzcHJpdGVfaGVpZ2h0LFxyXG4gICAgICAgIHNwcml0ZV9oZWlnaHQsXHJcbiAgICAgICAgc3ByaXRlX3dpZHRoLFxyXG4gICAgICAgIG9wYWNpdHk6MVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc3ByaXRlcztcclxufVxyXG5cclxuIiwiZXhwb3J0IGxldCBERUJVRyA9IHRydWU7XHJcbmV4cG9ydCBsZXQgUEFVU0VEID0gdHJ1ZTtcclxuaW1wb3J0IHsgb2JqfSBmcm9tIFwiLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IHJvb20gfSBmcm9tIFwiLi9saWIvcm9vbVwiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4vbGliL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQgeyBzcHJpdGVfcmVuZGVyZXIsIHJlY3RfcmVuZGVyZXIsIHN0cm9rZWRfcmVjdF9yZW5kZXJlciwgaHVkX3RleHRfcmVuZGVyZXIsIENhbWVyYSwgdGV4dF9yZW5kZXJlciAsc2NhbGVfdHlwZX0gZnJvbSBcIi4vbGliL3JlbmRlclwiO1xyXG5pbXBvcnQgeyBFeGVjdXRlUmVwZWF0QmluZHMsIFVuYmluZCB9IGZyb20gXCIuL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBpbml0X2NsaWNrX2hhbmRsZXIgfSBmcm9tIFwiLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgZGVidWdfc3RhdGUsIGRlYnVnX3VwZGF0ZV9yb29tX2xpc3QsIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCxkZWJ1Z191cGRhdGVfcHJlZmFicywgZGVidWdfc3RhdGVmLCBkZWJ1Z19zZXR1cCB9IGZyb20gXCIuL2xpYi9kZWJ1Z1wiO1xyXG5pbXBvcnQgeyByb29tcyBhcyByb29tX2xpc3QgfSBmcm9tIFwiLi9nYW1lL3Jvb21zL3Jvb21zXCI7XHJcbmxldCB7IGlwY1JlbmRlcmVyIH0gPSB3aW5kb3cucmVxdWlyZShcImVsZWN0cm9uXCIpO1xyXG5leHBvcnQgbGV0IHByb2plY3RfcGF0aCA9IGlwY1JlbmRlcmVyLnNlbmRTeW5jKCdwYXRoLXJlcXVlc3QnLCAncGluZycpWzBdO1xyXG5cclxubGV0IGNhbnZhc19lbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5sZXQgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzX2VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuXHJcbmxldCBzY3JlZW5fd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxubGV0IHNjcmVlbl9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cclxuLy9Ib3cgb2Z0ZW4gdGhlIGdhbWUgbG9naWMgbG9vcCBzaG91bGQgcnVuLCBpbiBtaWxsaXNlY29uZHNcclxubGV0IGxvZ2ljX2xvb3BfaW50ZXJ2YWw6IG51bWJlciA9IDEwMDAgLyA2MDtcclxuXHJcbmxldCBsYXN0X3RpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxubGV0IGxhc3RfcmVuZGVyX3RpbWUgPSAwO1xyXG5cclxuaW50ZXJmYWNlIGRpbWVuc2lvbnMge1xyXG4gIGhlaWdodDogbnVtYmVyLFxyXG4gIHdpZHRoOiBudW1iZXJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRTY3JlZW5EaW1lbnNpb25zKCk6IGRpbWVuc2lvbnMge1xyXG4gIHJldHVybiAoe1xyXG4gICAgd2lkdGg6IHNjcmVlbl93aWR0aCxcclxuICAgIGhlaWdodDogc2NyZWVuX2hlaWdodFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKTogZGltZW5zaW9ucyB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICBoZWlnaHQ6IGNhbnZhc19lbGVtZW50LmhlaWdodCxcclxuICAgIHdpZHRoOiBjYW52YXNfZWxlbWVudC53aWR0aFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgdmlld3BvcnQgPSB7XHJcbiAgaGVpZ2h0OiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQsXHJcbiAgd2lkdGg6IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLndpZHRoXHJcbn1cclxuXHJcbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcclxuICB2aWV3cG9ydC5oZWlnaHQgPSBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHRcclxuICB2aWV3cG9ydC53aWR0aCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLndpZHRoXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWJ1Zyh4OiBib29sZWFuKSB7XHJcbiAgREVCVUcgPSB4O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UGF1c2VkKHg6IGJvb2xlYW4pIHtcclxuICBQQVVTRUQgPSB4O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyX2NvbGxpc2lvbl9ib3ggPSAoYTogY29sbGlzaW9uX2JveCkgPT4ge1xyXG4gIGJveGVzLnB1c2goYSk7XHJcbn1cclxuXHJcbmxldCBib3hlczogQXJyYXk8Y29sbGlzaW9uX2JveD4gPSBbXTtcclxuXHJcbmV4cG9ydCBsZXQgZGVlcCA9IChhOiBhbnkpID0+IHtcclxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhKSk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBnYW1lX3N0YXRlPFQ+IHtcclxuICBsb2dpYzogbnVtYmVyLFxyXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICBjdXJyZW50X3Jvb206IHJvb208dW5rbm93bj4sXHJcbiAgY2FtZXJhczogQXJyYXk8Q2FtZXJhPixcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxyXG4gIGdsb2JhbHM6IFRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgcm9vbXM6IGFueVtdID0gW107XHJcbmV4cG9ydCBsZXQgb2JqZWN0czogYW55W107XHJcblxyXG5leHBvcnQgY2xhc3MgZ2FtZTxUPntcclxuICBzdGF0ZTogZ2FtZV9zdGF0ZTxUPjtcclxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgLy9UaGUgb2Zmc2NyZWVuIGNhbnZhcyBhbmQgY29udGV4dCBhcmUgdXNlZCBpbiByZW5kZXJpbmcgbXVsdGlwbGUgQ2FtZXJhc1xyXG4gIC8vVGhlIGNvbnRlbnRzIGFyZSByZW5kZXJlZCB0byB0aGUgb2Zmc2NyZWVuIGNhbnZhcywgdGhlbiBjb3BpZWQgdG8gdGhlIFxyXG4gIC8vb25zY3JlZW4gY2FudmFzLCBpbiB0aGUgcHJvcGVyIHBvc2l0aW9uIGluIHRoZSB2aWV3cG9ydFxyXG4gIG9mZnNjcmVlbl9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIG9mZnNjcmVlbl9jb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgcHJvdG90eXBlczogQXJyYXk8b2JqPiA9IFtdO1xyXG4gIHJvb21zOiBBcnJheTxhbnk+ID0gW107XHJcbiAgaXNSZW5kZXJpbmcgPSBmYWxzZTtcclxuICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgaW5pdF9zdGF0ZTogVCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2FudmFzOiBjYW52YXNfZWxlbWVudCxcclxuICAgICAgbG9naWM6IHVuZGVmaW5lZCxcclxuICAgICAgY29udGV4dDogY3R4LFxyXG4gICAgICBjYW1lcmFzOiBbXHJcbiAgICAgIF0sXHJcbiAgICAgIGN1cnJlbnRfcm9vbTogdW5kZWZpbmVkLFxyXG4gICAgICBnbG9iYWxzOiBpbml0X3N0YXRlXHJcbiAgICB9XHJcbiAgICB0aGlzLm9mZnNjcmVlbl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dCA9IHRoaXMub2Zmc2NyZWVuX2NhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAvL0RFQlVHIGRldGVybWluZXMgd2hldGhlciB0aGUgZ2FtZSBpcyBydW5uaW5nIHdpdGhpbiB0aGUgZWRpdG9yXHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgLy9TZXRzIHVwIHNvbWUgZ2xvYmFsIGRlYnVnIHN0YXRlIGFuZCB0aGUgZWRpdG9yIGtleWJpbmRpbmdzXHJcbiAgICAgIGRlYnVnX3NldHVwKCk7XHJcbiAgICAgIC8vSW5pdGlhbGl6ZXMgYSBzZXBhcmF0ZSBsb2dpYyBsb29wIHNvbGVseSBmb3IgdGhlIGVkaXRvclxyXG4gICAgICAvL1RoaXMgc2VwYXJhdGlvbiBhbGxvd3MgZm9yIHRoZSBlZGl0b3IgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgZW52aXJvbm1lbnQgd2hpbGVcclxuICAgICAgLy90aGUgYWN0dWFsIHJvb20ncyBzdGF0ZSBsb29wIGlzIHBhdXNlZC5cclxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmdldFJvb20oKSkge1xyXG4gICAgICAgICAgLy9UaGlzIGZ1bmN0aW9ucyBoYW5kbGVzIHRoZSBlZGl0b3IgaW50ZXJhY3Rpb25zIHdpdGggdGhlIGdhbWUgZW52aXJvbm1lbnRcclxuICAgICAgICAgIGRlYnVnX3N0YXRlZigxNi42Nik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxNi42NilcclxuICAgIH1cclxuICAgIC8vQ3JlYXRlcyBhIG9uY2xpY2sgZnVuY3Rpb24gb24gdGhlIHdpbmRvdyB0aGF0IGhhbmRsZXMgZWxlbWVudCBvbmNsaWNrIGZ1bmN0aW9uc1xyXG4gICAgaW5pdF9jbGlja19oYW5kbGVyKHRoaXMpO1xyXG4gIH1cclxuICByZW5kZXIodDogbnVtYmVyKSB7XHJcbiAgICAvL3QgaXMgY3VycmVudCByZW5kZXIgdGltZVxyXG4gICAgbGV0IGRlbHRhX3RpbWUgPSB0IC0gbGFzdF9yZW5kZXJfdGltZVxyXG4gICAgbGFzdF9yZW5kZXJfdGltZSA9IHQ7XHJcbiAgICBsZXQgYWxsX2NhbWVyYXMgPSB0aGlzLnN0YXRlLmNhbWVyYXM7XHJcbiAgICBsZXQgZWRpdG9yX2NhbWVyYV9pbmRleCA9IC0xO1xyXG4gICAgaWYgKERFQlVHKSB7XHJcbiAgICAgIGFsbF9jYW1lcmFzID0gWy4uLmFsbF9jYW1lcmFzLCBkZWJ1Z19zdGF0ZS5jYW1lcmFdXHJcbiAgICAgIGVkaXRvcl9jYW1lcmFfaW5kZXggPSBhbGxfY2FtZXJhcy5sZW5ndGggLSAxO1xyXG4gICAgICAvL1RoZSBlZGl0b3IgY2FtZXJhIGlzIGFsd2F5cyB0aGUgbGFzdCBjYW1lcmEgaW5zaWRlIHRoZSBjYW1lcmFzIGFycmF5XHJcbiAgICAgIC8vdGhlIGVkaXRvciBjYW1lcmEgaXMgcmVuZGVyZWQgdG8gYSBkaWZmZXJlbnQgY2FudmFzIHRoYW4gdGhlIG1haW4gZ2FtZSBjYW52YXNcclxuICAgICAgLy9zbyB3ZSB1c2UgdGhlIGNhbWVyYSdzIGluZGV4IHRvIGNoZWNrIHdoYXQgY2FudmFzIHRvIHJlbmRlciB0b1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhbGxfY2FtZXJhcy5sZW5ndGg7IGErKykge1xyXG4gICAgICBsZXQgY2FtZXJhID0gYWxsX2NhbWVyYXNbYV07XHJcbiAgICAgIC8vV2UgcmVuZGVyIHRoZSBjYW1lcmFzIGNvbnRlbnRzIHRvIGFuIG9mZnNjcmVlbiBjYW52YXMsIHRoZW4gY29weSBpdHMgY29udGVudHNcclxuICAgICAgLy90byB0aGUgbWFpbiBjYW52YXMuXHJcbiAgICAgIC8vVGhpcyBhbGxvd3MgdXMgdG8gYXZvaWQgYW55IG1hdGggbmVlZGVkIHRvIGRldGVybWluZSBzcHJpdGVzIHRoYXQgYXJlIHBhcnRpYWxseSBvZmZzY3JlZW5cclxuICAgICAgLy9hcyBhbnkgb2Zmc2NyZWVuIHNlY3Rpb25zIG9mIHRoZSBzcHJpdGVzIHdpbGwgbm90IGJlIGNvcGllZCBvdmVyLCByYXRoZXIgdGhhbiBleHBsaWNpdGx5IFxyXG4gICAgICAvL2NhbGN1bGF0aW5nIHRoZSBjdXRvZmZzXHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcy5oZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcy53aWR0aCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCwgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgsIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCk7XHJcbiAgICAgIC8vVGhpcyBjb2xsaXNpb24gYm94IHJlcHJlc2VudHMgdGhlIGNhbWVyYSdzIGZpZWxkIG9mIHZpZXcgaW4gdGhlIGdhbWUgc3BhY2VcclxuICAgICAgLy9XZSB1c2UgdGhlIHJvb20ncyBjaGVja09iamVjdHMgZnVuY3Rpb24gdG8gZmluZCBhbnkgb2JqZWN0IHRoYXQgZXhpc3RzIHdpdGhpbiB0aGlzIGFyZWFcclxuICAgICAgLy9UaGVzZSBvYmplY3RzIGFyZSB0aGUgb2JqZWN0cyB0aGF0IG5lZWQgdG8gYmUgcmVuZGVyZWQgZm9yIHRoaXMgY2FtZXJhXHJcbiAgICAgIGxldCBjYW1lcmFfYm94ID0ge1xyXG4gICAgICAgIHg6IGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOiBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxIC8gY2FtZXJhLnN0YXRlLnNjYWxpbmcpLFxyXG4gICAgICAgIGhlaWdodDogY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEgLyBjYW1lcmEuc3RhdGUuc2NhbGluZylcclxuICAgICAgfTtcclxuICAgICAgLy9MaXN0IG9mIGFsbCBwYXJ0aWNsZXMgd2l0aGluIHRoZSBjYW1lcmEncyBmb3ZcclxuICAgICAgbGV0IHBhcnRpY2xlX2NvbGxpZGVzID0gdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uY2hlY2tPYmplY3RzKGNhbWVyYV9ib3gsIFtdLCB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5wYXJ0aWNsZXNfYXJyKTtcclxuICAgICAgLy9MaXN0IG9mIGFsbCBvYmplY3RzIHdpdGhpbiB0aGUgY2FtZXJhJ3MgZm92XHJcbiAgICAgIGxldCBjYW1lcmFfY29sbGlkZXJzID0gWy4uLnRoaXMuc3RhdGUuY3VycmVudF9yb29tLmNoZWNrT2JqZWN0cyhjYW1lcmFfYm94KSwgLi4ucGFydGljbGVfY29sbGlkZXNdO1xyXG5cclxuICAgICAgbGV0IHJlbmRlcl9hcmdzID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHRoaXMub2Zmc2NyZWVuX2NvbnRleHQsXHJcbiAgICAgICAgY2FtZXJhOiBjYW1lcmEsXHJcbiAgICAgIH07XHJcbiAgICAgIC8vUmVuZGVycyB0aGUgcm9vbSdzIGJhY2tncm91bmQuXHJcbiAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgIHNwcml0ZTogdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ucmVuZGVyZihkZWx0YV90aW1lKSxcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsZV90eXBlOnNjYWxlX3R5cGUuZ3Jvd1xyXG4gICAgICB9KTtcclxuICAgICAgLy9BcnJheSBvZiBoaXRib3hlcyBmb3IgZWFjaCBpdGVtIGluIHRoZSByb29tXHJcbiAgICAgIGxldCBoaXRib3hlczogY29sbGlzaW9uX2JveFtdID0gW107XHJcbiAgICAgIGZvciAobGV0IGEgb2YgY2FtZXJhX2NvbGxpZGVycy5maWx0ZXIoKGIpID0+IGIucmVuZGVyKS5zb3J0KChhLCBiKSA9PiAoYS5sYXllciAtIGIubGF5ZXIpKSkge1xyXG4gICAgICAgIGxldCByZW5kZXJlZCA9IGEucmVuZGVyVHJhY2sodCk7XHJcblxyXG4gICAgICAgIC8vT2JqZWN0cyBjYW4gcmV0dXJuIGVpdGhlciBhIHNwcml0ZSwgb3IgYW4gYXJyYXkgb2Ygc3ByaXRlcyB0byBzaW1wbGlmeSB0aGUgQVBJXHJcbiAgICAgICAgLy9Gb3IgdGhlIHVzZXIsIGFuZCBmb3IgdXNlIGluIGNvbXBvc2l0ZSBvYmplY3RzKG9iamVjdCB0aGF0IGJ1bmRsZXMgb3RoZXIgb2JqZWN0cyB0b2dldGhlcilcclxuICAgICAgICAvL0ludGVybmFsbHksIHdlIGNvbnZlcnQgYW55IHNpbmdsZSBzcHJpdGUgaW50byBhbiBhcnJheSBvZiBvbmUgc3ByaXRlLlxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgcG9zaXRpb25lZF9zcHJpdGUgb2YgcmVuZGVyZWQpXHJcbiAgICAgICAgICBzcHJpdGVfcmVuZGVyZXIocmVuZGVyX2FyZ3MsIHtcclxuICAgICAgICAgICAgc3ByaXRlOiBwb3NpdGlvbmVkX3Nwcml0ZS5zcHJpdGUsXHJcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uZWRfc3ByaXRlLngsXHJcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uZWRfc3ByaXRlLnksXHJcbiAgICAgICAgICAgIHJvdGF0aW9uOiBhLnN0YXRlLnJvdGF0aW9uLFxyXG4gICAgICAgICAgICBzY2FsZTogYS5zdGF0ZS5zY2FsaW5nLFxyXG4gICAgICAgICAgICBzY2FsZV90eXBlOmEuc2NhbGVfdHlwZVxyXG4gICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvL0hpdGJveGVzIGFyZSByZW5kZXJlZCBsYXRlIGluIHRoZSByZW5kZXIgbG9vcCwgdG8gZW5zdXJlIG9iamVjdHMgZG9uJ3Qgb3ZlcmxhcCB0aGVtXHJcbiAgICAgICAgLy9BcyB3ZSByZW5kZXIgb2JqZWN0cywgd2UgYWRkIHRoZWlyIGhpdGJveGVzIHRvIHRoaXMgbGlzdFxyXG4gICAgICAgIGlmIChERUJVRyAmJiBhLmNvbGxpc2lvbikge1xyXG4gICAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5hLmdldEFsbENvbGxpc2lvbkJveGVzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL1RoaXMgaXMgYSBzcGVjaWFsIGNsYXNzIG9mIG9iamVjdCB0aGF0IGV4aXN0cyBpbiB0aGUgZ2FtZSB3b3JsZFxyXG4gICAgICBmb3IgKGxldCBub2RlIG9mIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnRleHRfbm9kZXMpIHtcclxuICAgICAgICB0ZXh0X3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICB4OiBub2RlLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICB5OiBub2RlLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICBmb250OiBub2RlLnJlbmRlcmYodClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2FtZXJhLmh1ZCkge1xyXG4gICAgICAgIGxldCBncmFwaGljcyA9IGNhbWVyYS5odWQuZ3JhcGhpY19lbGVtZW50cztcclxuICAgICAgICBsZXQgdGV4dF9lbGVtZW50cyA9IGNhbWVyYS5odWQudGV4dF9lbGVtZW50cztcclxuICAgICAgICAvL1JlbmRlcnMgc3RhdGljIGdyYXBoaWNzIHRoYXQgYXJlIGEgcGFydCBvZiB0aGUgaHVkXHJcbiAgICAgICAgZm9yIChsZXQgZ3JhcGhpYyBvZiBncmFwaGljcykge1xyXG4gICAgICAgICAgbGV0IHJlbmRlcmVkID0gZ3JhcGhpYy5yZW5kZXJUcmFjayh0KTtcclxuICAgICAgICAgIGlmIChncmFwaGljLnJlbmRlcikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbmVkX3Nwcml0ZSBvZiByZW5kZXJlZCkge1xyXG4gICAgICAgICAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlOiBwb3NpdGlvbmVkX3Nwcml0ZS5zcHJpdGUsXHJcbiAgICAgICAgICAgICAgICB4OiBwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICAgICAgeTogcG9zaXRpb25lZF9zcHJpdGUueSxcclxuICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBncmFwaGljLnN0YXRlLnJvdGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IGdyYXBoaWMuc3RhdGUuc2NhbGluZyxcclxuICAgICAgICAgICAgICAgIHNjYWxlX3R5cGU6Z3JhcGhpYy5zY2FsZV90eXBlXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgdGV4dCBvZiB0ZXh0X2VsZW1lbnRzKSB7XHJcbiAgICAgICAgICBodWRfdGV4dF9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgICB4OiB0ZXh0LnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IHRleHQuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgZm9udDogdGV4dC5yZW5kZXJmKHQpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL0lmIGEgY2FtZXJhIGlzIG1hcmtlZCBhcyBhIGRlYnVnIGNhbWVyYSwgd2UgcmVuZGVyIHRoZVxyXG4gICAgICAvLyAgaGl0Ym94ZXMsIGFuZCBwb3RlbnRpYWxseSB1cGRhdGUgdGhlIGVkaXRvclxyXG4gICAgICBpZiAoY2FtZXJhLnN0YXRlLmRlYnVnKSB7XHJcbiAgICAgICAgbGV0IGJveDogY29sbGlzaW9uX2JveDtcclxuICAgICAgICBsZXQgYm94ZXNfY29weSA9IFsuLi5ib3hlc11cclxuICAgICAgICB3aGlsZSAoYm94ZXNfY29weS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBsZXQgYm94ID0gYm94ZXNfY29weS5wb3AoKTtcclxuICAgICAgICAgIGxldCByZWN0ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogYm94LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LCByZWN0LCBib3gueCwgYm94LnksIFwiI0ZGMDAwMFwiLCAxLCBjYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoaGl0Ym94ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGV0IGJveCA9IGhpdGJveGVzLnBvcCgpO1xyXG4gICAgICAgICAgbGV0IHJlY3QgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBib3gud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyKHRoaXMub2Zmc2NyZWVuX2NvbnRleHQsIHJlY3QsIGJveC54LCBib3gueSwgXCIjMDA4MDAwXCIsIDEsIGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vRHJhd3MgYSBzcGVjaWFsIGJveCBhcm91bmQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50XHJcbiAgICAgICAgLy9pbnNpZGUgdGhlIGVkaXRvciBVSVxyXG4gICAgICAgIGlmIChERUJVRyAmJiBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQpIHtcclxuICAgICAgICAgIGxldCBjb2xsID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50LmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICAgICAgICAgIHJlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCwgeyB3aWR0aDogMjUsIGhlaWdodDogMjUgfSwgY29sbC54LCBjb2xsLnksIFwic2t5Ymx1ZVwiLCAxMCwgY2FtZXJhKTtcclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LCBjb2xsLCBjb2xsLngsIGNvbGwueSwgXCJibHVlXCIsIDEsIGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vU2VwYXJhdGUgY2FudmFzIGZvciB0aGUgZWRpdG9yIGNhbWVyYVxyXG4gICAgICBpZiAoYSAhPT0gZWRpdG9yX2NhbWVyYV9pbmRleCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5vZmZzY3JlZW5fY2FudmFzLCBjYW1lcmEuc3RhdGUudmlld3BvcnQueCwgY2FtZXJhLnN0YXRlLnZpZXdwb3J0LnkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGRlYnVnX3N0YXRlLnRhcmdldC5nZXRDb250ZXh0KFwiMmRcIikuZHJhd0ltYWdlKHRoaXMub2Zmc2NyZWVuX2NhbnZhcywgY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngsIGNhbWVyYS5zdGF0ZS52aWV3cG9ydC55KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKERFQlVHKVxyXG4gICAgICBib3hlcyA9IFtdO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChhKSA9PiB7IHRoaXMucmVuZGVyKGEpIH0pO1xyXG4gIH1cclxuICBzdGFydF9sb2dpYyhhOiBudW1iZXIpIHtcclxuICAgIC8vdGhpcyBpcyB0aGUgcm9vbSdzIHN0YXRlIGxvb3BcclxuICAgIHJldHVybiB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoIVBBVVNFRCkge1xyXG4gICAgICAgIGxldCBuZXdfdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHRpbWVfc2luY2UgPSBuZXdfdGltZS5nZXRUaW1lKCkgLSBsYXN0X3RpbWUuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxhc3RfdGltZSA9IG5ld190aW1lO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbSkge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uc3RhdGVmKHRpbWVfc2luY2UpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmh1ZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5odWQuc3RhdGVmKHRpbWVfc2luY2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL1RoaXMgZnVuY3Rpb25zIGhhbmRsZXMgYmluZHMgdGhhdCBvY2N1ciBvbiBhbiBpbnRlcnZhbFxyXG4gICAgICBFeGVjdXRlUmVwZWF0QmluZHMoYSk7XHJcbiAgICB9LCBhKTtcclxuICB9XHJcbiAgZ2V0Um9vbSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbTtcclxuICB9XHJcbiAgYXN5bmMgbG9hZFJvb21TdHJpbmcoeDogc3RyaW5nKSB7XHJcbiAgICAvL3Jvb20gbGlzdCBpcyBhIG9iamVjdCB0aGF0IGNvbnRhaW5zIGVhY2ggcm9vbSdzIGNsYXNzLFxyXG4gICAgLy93aXRoIHRoZSByb29tJ3MgbmFtZSBhcyB0aGUga2V5IGZvciBjbGFzc1xyXG4gICAgLy9UaGlzIG9iamVjdCBpcyBwb3B1bGF0ZWQgYXQgY29tcGlsZSB0aW1lXHJcbiAgICBmb3IgKGxldCBhIG9mIE9iamVjdC5rZXlzKHJvb21fbGlzdCkpIHtcclxuICAgICAgaWYgKGEgPT0geCkge1xyXG4gICAgICAgIC8vdGhpcyBpc24ndCBwYXJ0aWN1bGFybHkgdHlwZS1zYWZlLlxyXG4gICAgICAgIGxldCBuZXdfcm9vbSA9IDxyb29tPHt9Pj5uZXcgcm9vbV9saXN0W2FdKHRoaXMpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkUm9vbShuZXdfcm9vbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRSb29tKHg6IHJvb208dW5rbm93bj4pIHtcclxuICAgIC8vQ2xlYXJzIHRoZSByb29tJ3MgbG9naWMgbG9vcCBpZiBvbmVcclxuICAgIC8vV2FzIGFscmVhZHkgcnVubmluZ1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubG9naWMpIHtcclxuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5sb2dpYyk7XHJcbiAgICB9XHJcbiAgICAvL1RoaXMgcmVmZXJlbmNlIGlzIHVzZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uXHJcbiAgICB4LmdhbWUgPSB0aGlzO1xyXG4gICAgLy9EZWxldGVzIGVhY2ggb2JqZWN0IGluIHRoZSByb29tICh3aGljaCBhbHNvIHVuYmluZHMgdGhlaXIgYmluZHMpLFxyXG4gICAgLy9hbmQgdW5iaW5kcyB0aGUgcm9vbSdzIGJpbmRpbmdzLlxyXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgd2hpbGUgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHNbMF0uZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaWQgb2YgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uYmluZHMpIHtcclxuICAgICAgICBVbmJpbmQoaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3X3Jvb20gPSBhd2FpdCB4LmxvYWQoKTtcclxuICAgIHgucmVnaXN0ZXJDb250cm9scygpO1xyXG4gICAgeC5yZWdpc3RlclBhcnRpY2xlcygpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUubG9naWMgPSB0aGlzLnN0YXJ0X2xvZ2ljKGxvZ2ljX2xvb3BfaW50ZXJ2YWwpXHJcbiAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbSA9IHg7XHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgZGVidWdfdXBkYXRlX3Jvb21fbGlzdCgpO1xyXG4gICAgICBkZWJ1Z191cGRhdGVfcHJlZmFicygpO1xyXG4gICAgICBkZWJ1Z191cGRhdGVfb2JqX2xpc3QoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKCF0aGlzLmlzUmVuZGVyaW5nKSB7XHJcbiAgICAgIC8vVGhpcyBzdGFydHMgdGhlIHJlbmRlciBsb29wIGZvciB0aGUgcm9vbVxyXG4gICAgICB0aGlzLnJlbmRlcigwKTtcclxuICAgICAgdGhpcy5pc1JlbmRlcmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=