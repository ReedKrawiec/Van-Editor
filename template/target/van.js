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
exports.g = new van_1.game(canvas_element.getContext("2d"), {});
exports.g.loadRoomString("example");


/***/ }),

/***/ "./src/game/objects/example.ts":
/*!*************************************!*\
  !*** ./src/game/objects/example.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.example = void 0;
const object_1 = __webpack_require__(/*! lib/object */ "./src/lib/object.ts");
class example extends object_1.obj {
    constructor(state, params = example.default_params) {
        super(state, params);
        this.sprite_url = "./sprites/Error.png";
        this.height = 100;
        this.width = 100;
        this.collision = true;
        this.render = true;
    }
    statef(time_delta) {
        super.statef(time_delta);
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
exports.example = example;
example.default_params = {};


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
const example_1 = __webpack_require__(/*! ./example */ "./src/game/objects/example.ts");
exports.prefabs = {
    example: example_1.example,
};


/***/ }),

/***/ "./src/game/rooms/example.json":
/*!*************************************!*\
  !*** ./src/game/rooms/example.json ***!
  \*************************************/
/*! exports provided: objects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"objects\":[]}");

/***/ }),

/***/ "./src/game/rooms/example.ts":
/*!***********************************!*\
  !*** ./src/game/rooms/example.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.example = void 0;
const room_1 = __webpack_require__(/*! lib/room */ "./src/lib/room.ts");
const config = __webpack_require__(/*! ./example.json */ "./src/game/rooms/example.json");
let cfig = config;
class example extends room_1.room {
    constructor(game) {
        super(game, cfig);
        this.background_url = "./sprites/Error.png";
        this.render = true;
    }
    registerControls() {
    }
    registerParticles() {
    }
    statef(delta_time) {
        super.statef(delta_time);
    }
}
exports.example = example;


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
const example_1 = __webpack_require__(/*! ./example */ "./src/game/rooms/example.ts");
exports.rooms = {
    example: example_1.example,
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
const debug_1 = __webpack_require__(/*! ./debug */ "./src/lib/debug.ts");
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
class audio {
    constructor() {
        this.sounds = {};
    }
    add(name, url) {
        let p = url;
        if (van_1.DEBUG) {
            p = debug_1.path.join(debug_1.root_path, url);
        }
        this.sounds[name] = new Audio(p);
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
exports.velocityCollisionCheck = exports.check_collisions = exports.check_all_collisions = exports.check_all_objects = exports.getEncompassingBox = void 0;
const object_1 = __webpack_require__(/*! ../lib/object */ "./src/lib/object.ts");
var direction;
(function (direction) {
    direction[direction["left"] = 0] = "left";
    direction[direction["right"] = 1] = "right";
    direction[direction["up"] = 2] = "up";
    direction[direction["down"] = 3] = "down";
})(direction || (direction = {}));
function getEncompassingBox(objects) {
    let first_object = objects[0].getBoundingBox();
    let max_y = first_object.top_right.y;
    let max_x = first_object.top_right.x;
    let min_y = first_object.bottom_left.y;
    let min_x = first_object.bottom_left.x;
    for (let a = 1; a < objects.length; a++) {
        let object = objects[a].getBoundingBox();
        if (object.top_right.y > max_y)
            max_y = object.top_right.y;
        if (object.top_right.x > max_x)
            max_x = object.top_right.x;
        if (object.bottom_left.y < min_y)
            min_y = object.bottom_left.y;
        if (object.bottom_left.x < min_x)
            min_x = object.bottom_left.x;
    }
    return {
        x: min_x + (max_x - min_x) / 2,
        y: min_y + (max_y - min_y) / 2,
        height: max_y - min_y,
        width: max_x - min_x
    };
}
exports.getEncompassingBox = getEncompassingBox;
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
    if (keyname.slice(0, 5) === "mouse" || keyname.slice(0, 6) === "scroll") {
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
exports.debug_setup = exports.debug_state = exports.debug_update_prefabs = exports.debug_update_obj_list = exports.debug_update_properties_element = exports.debug_update_room_list = exports.debug_statef = exports.Debug_hud = exports.root_path = exports.project_path = exports.path = void 0;
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
let fs;
let ipcRenderer;
const prefabs_1 = __webpack_require__(/*! ../game/objects/prefabs */ "./src/game/objects/prefabs.ts");
exports.project_path = "";
exports.root_path = "";
if (van_1.DEBUG) {
    exports.path = window.require("path");
    fs = window.require("fs");
    ipcRenderer = window.require("electron").ipcRenderer;
    exports.project_path = ipcRenderer.sendSync('path-request', 'ping')[0];
    exports.root_path = exports.path.join(exports.project_path, "..");
}
const object_template_1 = __webpack_require__(/*! ./templates/object_template */ "./src/lib/templates/object_template.ts");
const room_template_1 = __webpack_require__(/*! ./templates/room_template */ "./src/lib/templates/room_template.ts");
const main_1 = __webpack_require__(/*! ../game/main */ "./src/game/main.ts");
const rooms_1 = __webpack_require__(/*! ../game/rooms/rooms */ "./src/game/rooms/rooms.ts");
const controls_1 = __webpack_require__(/*! ../lib/controls */ "./src/lib/controls.ts");
const hud_1 = __webpack_require__(/*! ../lib/hud */ "./src/lib/hud.ts");
const render_1 = __webpack_require__(/*! ../lib/render */ "./src/lib/render.ts");
class Debug_hud extends hud_1.HUD {
    setTextElements() {
        return [
            new hud_1.Text({
                position: {
                    x: 10,
                    y: van_1.viewport.height - 24
                },
                size: 22,
                font: "Alata",
                color: "white",
                align: "left",
                scaling: 1
            }, () => exports.debug_state.render_delta_time > 0 ? Math.round(1000 / exports.debug_state.render_delta_time) + "" : ""),
            new hud_1.Text({
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
            }, () => `Y:${exports.debug_state.camera.state.position.y.toFixed(0)}`),
            new hud_1.Text({
                position: {
                    x: van_1.viewport.width - 10,
                    y: 32
                },
                size: 22,
                font: "Alata",
                color: "white",
                align: "right",
                scaling: 1
            }, () => {
                let mouse = controls_1.Poll_Mouse(exports.debug_state.camera, exports.debug_state.target);
                if (mouse) {
                    return `${mouse.x.toFixed(0)}:X`;
                }
                return `:X`;
            }),
            new hud_1.Text({
                position: {
                    x: van_1.viewport.width - 10,
                    y: 10
                },
                size: 22,
                font: "Alata",
                color: "white",
                align: "right",
                scaling: 1
            }, () => {
                let mouse = controls_1.Poll_Mouse(exports.debug_state.camera, exports.debug_state.target);
                if (mouse) {
                    return `${mouse.y.toFixed(0)}:Y`;
                }
                return `:Y`;
            }),
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
    if (mouse) {
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
        for (let obj of main_1.g.getRoom().objects.slice().reverse()) {
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
        render_delta_time: 0,
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
                let alL_clicked = main_1.g.getRoom().checkObjectsPoint(mouse);
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
                let clicked = main_1.g.getRoom().checkObjectsPoint(mouse)[0];
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
        if (exports.debug_state.last_clicked.id == "debug_target" && exports.debug_state.camera.state.scaling < 0.05)
            exports.debug_state.camera.state.scaling = exports.debug_state.camera.state.scaling + 0.01;
        else if (exports.debug_state.last_clicked.id == "debug_target")
            exports.debug_state.camera.state.scaling = exports.debug_state.camera.state.scaling + 0.05;
    };
    let save_func = () => {
        let ctrl_held = controls_1.held_keys["ControlLeft"];
        if (ctrl_held && van_1.PAUSED) {
            let name = main_1.g.getRoom().constructor.name;
            let a = exports.path.join(`${exports.project_path}`, `../rooms/${name}.json`);
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
        else if (exports.debug_state.last_clicked.id == "debug_target" && exports.debug_state.camera.state.scaling > 0.01)
            exports.debug_state.camera.state.scaling = exports.debug_state.camera.state.scaling - 0.01;
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
            let full_name = exports.path.parse(file_path).base;
            let new_name = full_name.substr(0, full_name.length - 3);
            let path_to_write = exports.path.join(`${file_path}`, "..", new_name + ".ts");
            fs.writeFileSync(path_to_write, room_template_1.room_template.split("template").join(new_name));
            path_to_write = exports.path.join(`${file_path}`, "..", new_name + ".json");
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
            let full_name = exports.path.parse(file_path).base;
            let new_name = full_name.substr(0, full_name.length - 3);
            let path_to_write = exports.path.join(`${file_path}`, "..", new_name + ".ts");
            fs.writeFileSync(path_to_write, object_template_1.object_template.split("template").join(new_name));
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
const debug_1 = __webpack_require__(/*! ../lib/debug */ "./src/lib/debug.ts");
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
            let p = this.sprite_url;
            if (van_1.DEBUG) {
                p = debug_1.path.join(debug_1.root_path, this.sprite_url);
            }
            a.src = p;
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
    getBoundingBox() {
        let coll_box = this.getFullCollisionBox();
        return {
            top_right: {
                x: coll_box.x + coll_box.width / 2,
                y: coll_box.y + coll_box.height / 2
            },
            bottom_left: {
                x: coll_box.x - coll_box.width / 2,
                y: coll_box.y - coll_box.height / 2
            }
        };
    }
    //Distance from one object to another.
    distance(target) {
        return math_1.Distance(this.state.position, target.state.position);
    }
    applyForce(vel) {
        this.state.velocity.x += vel.x;
        this.state.velocity.y += vel.y;
    }
    angleTowards(a) {
        return this.angleTowardsPoint(a.state.position);
    }
    angleTowardsPoint(target) {
        return 90 - Math.atan2((target.y - this.state.position.y), (target.x - this.state.position.x)) * 180 / Math.PI;
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
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([...this.objects.map((a) => a.load()), ...this.statics.map(a => a.obj.load())]);
            resolve();
        }));
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
    constructor(props, v, hud = undefined) {
        this.state = {
            scaling: props.scaling,
            position: {
                x: props.x,
                y: props.y
            },
            dimensions: props.dimensions,
            viewport: {
                x: v.x,
                y: v.y,
                width: v.width * props.dimensions.width,
                height: v.height * props.dimensions.height
            },
            debug: props.debug,
            hud
        };
        this.hud = hud;
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
        for (let a = 0; a < total_hor_sprites; a += 1) {
            for (let b = 0; b < total_ver_sprites; b += 1) {
                let new_width = one_width;
                let new_height = one_height;
                if ((a + 1) * one_width - width > 0) {
                    new_width = width % one_width;
                }
                if ((b + 1) * one_height - height > 0) {
                    new_height = height % one_height;
                }
                r.context.drawImage(s.sprite.sprite_sheet, s.sprite.left, s.sprite.top, new_width / (r.camera.state.scaling), new_height / (r.camera.state.scaling), -width / 2 + a * one_width, -height / 2 + b * one_height, new_width, new_height);
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
        this.render = true;
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
            //If an object has a parent object, it's a descendent of a composite object
            //The parent will spawn this object when it's instantiated, so we do
            //not have to save this instance.
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
    //This handles the loading of all room sprites, and
    //any objects it contains.
    load() {
        let _this = this;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let a = new Image();
            let to_await = this.objects.map((a) => a.load());
            yield Promise.all(to_await);
            let p = this.background_url;
            if (van_1.DEBUG) {
                p = debug_1.path.join(debug_1.root_path, this.background_url);
            }
            a.src = p;
            a.onerror = (() => {
                throw new Error("Loading Error:" + this.background_url);
            });
            a.onload = (() => __awaiter(this, void 0, void 0, function* () {
                _this.background = a;
                yield this.audio.load();
                resolve();
            }));
        }));
    }
    //This is used while loading objects from file, it's used to dynamically load
    //objects from the room's json. If adding items within code, it's better to create
    //new instances of objects through addItem
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
    //Adds the passed item to the room.
    addItem(o, list = this.objects) {
        return __awaiter(this, void 0, void 0, function* () {
            this.addItems([o], list);
        });
    }
    //Adds every item in the passed array to the room.
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
    //Deletes the item and removes it from the room's object list
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
    //Any particles that are needed in the room should be added to the particle array here.
    registerParticles() {
    }
    //Adds a bind that is executed when the passed key is activated
    //key examples: mouse0down KeyAdown KeyLup
    bindControl(key, x, func, interval = 1) {
        this.binds.push(controls_1.Bind(key, func, x, interval));
    }
    //Checks for objects that have collision at the passed point
    checkCollisionsPoint(pos, exempt, list = this.objects) {
        return this.checkCollisions({ x: pos.x, y: pos.y, height: 0, width: 0 }, exempt, list);
    }
    //Checks for any objects at the passed point
    checkObjectsPoint(pos, exempt, list = this.objects) {
        return this.checkObjects({ x: pos.x, y: pos.y, height: 0, width: 0 }, exempt, list);
    }
    //Checks for collisions at the point that contain every tag within the second argument
    checkCollisionsPointInclusive(pos, tags, list = this.objects) {
        return this.checkCollisionsInclusive({ x: pos.x, y: pos.y, height: 0, width: 0 }, tags, list);
    }
    //Checks for any objects that contain every tag within the second argument
    checkObjectsPointInclusive(pos, tags, list = this.objects) {
        return this.checkObjectsInclusive({ x: pos.x, y: pos.y, height: 0, width: 0 }, tags, list);
    }
    //Checks for collisions in the box that contain the tags in the second argument
    checkCollisionsInclusive(box, tags, list = this.objects) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return list.filter(obj => obj.collision && obj.collidesWithBox(box) && tags.every((val) => obj.tags.includes(val)));
    }
    //Checks for any objects in the box that contain all tags in the second argument
    checkObjectsInclusive(box, tags, list = this.objects) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return list.filter((obj) => obj.collidesWithBox(box) && tags.every((val) => obj.tags.includes(val)));
    }
    //checks for objects with collision in the box that do not contain the tags in the second argument
    checkCollisions(box, exempt, list = this.objects) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return collision_1.check_all_collisions(box, list, exempt);
    }
    //checks for  any objects in the box that do not contain the tags in the second argument
    checkObjects(box, exempt, list = this.objects) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return collision_1.check_all_objects(box, list, exempt);
    }
    //This method should be used to call bindControl and create any needed keyBindings
    registerControls() {
    }
    cleanup() {
    }
    //The room's state updating function.
    statef(time) {
        for (let particle of this.particles_arr) {
            particle.statef(time);
        }
        for (let text_node of this.text_nodes) {
            text_node.statef(time);
        }
        let ticking_objects = this.objects.filter((o) => o.tick_state);
        for (let a = 0; a < ticking_objects.length; a++) {
            //This function checks the velocity of every object, and moves it into it's next location
            //provided that it can fit there.
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
    //Gets any objects that have the passed tag
    getObjByTag(tag) {
        return this.objects.filter((a) => a.tags.indexOf(tag) > -1);
    }
    //renders the room's sprite
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

/***/ "./src/lib/templates/object_template.ts":
/*!**********************************************!*\
  !*** ./src/lib/templates/object_template.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.object_template = void 0;
exports.object_template = `import {obj} from "lib/object";
import { obj_state, Vector } from "lib/state";

interface template_state extends obj_state{
    
}
    
interface template_parameters{
    
}
    
export class template extends obj{
  sprite_url = "./sprites/Error.png";
  height = 100;
  width = 100;
  tags:Array<string>;
  collision = true;
  render = true;
  state:template_state;
  params:template_parameters;
  static default_params:template_parameters = {}
  constructor(state:obj_state,params:template_parameters = template.default_params){
    super(state,params);
  }
  statef(time_delta:number){
    super.statef(time_delta);
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
}`;


/***/ }),

/***/ "./src/lib/templates/room_template.ts":
/*!********************************************!*\
  !*** ./src/lib/templates/room_template.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.room_template = void 0;
exports.room_template = `import { room } from "lib/room";
import { game } from "src/van";
import { state_config } from "lib/room";
import * as config from "./template.json";
let cfig = config as unknown as state_config;
interface template_state {

}

export class template extends room<template_state>{
  background_url = "./sprites/Error.png";
  render = true;
  constructor(game: game<unknown>) {
    super(game, cfig);
  }
  registerControls() {

  }
  registerParticles() {

  }
  statef(delta_time: number) {
    super.statef(delta_time);
  }

}`;


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
exports.game = exports.objects = exports.rooms = exports.deep = exports.render_collision_box = exports.setPaused = exports.setDebug = exports.viewport = exports.GetViewportDimensions = exports.GetScreenDimensions = exports.PAUSED = exports.DEBUG = void 0;
exports.DEBUG = 'dev' === 'dev';
exports.PAUSED = 'dev' === 'dev';
const render_1 = __webpack_require__(/*! ./lib/render */ "./src/lib/render.ts");
const controls_1 = __webpack_require__(/*! ./lib/controls */ "./src/lib/controls.ts");
const controls_2 = __webpack_require__(/*! ./lib/controls */ "./src/lib/controls.ts");
const debug_1 = __webpack_require__(/*! ./lib/debug */ "./src/lib/debug.ts");
const rooms_1 = __webpack_require__(/*! ./game/rooms/rooms */ "./src/game/rooms/rooms.ts");
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
            debug_1.debug_state.render_delta_time = delta_time;
            all_cameras = [...all_cameras, debug_1.debug_state.camera];
            editor_camera_index = all_cameras.length - 1;
            if (all_cameras.length === 1) {
                this.state.context.fillStyle = "white";
                this.state.context.font = "50px Arial";
                this.state.context.textAlign = "center";
                this.state.context.fillText("NO CAMERA", exports.viewport.width / 2, exports.viewport.height / 2);
            }
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
            if (this.state.current_room.render) {
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
            }
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
            let new_time = new Date();
            if (!exports.PAUSED) {
                let time_since = new_time.getTime() - last_time.getTime();
                if (this.state.current_room) {
                    this.state.current_room.statef(time_since);
                    if (this.state.current_room.hud) {
                        this.state.current_room.hud.statef(time_since);
                    }
                }
            }
            last_time = new_time;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL2V4YW1wbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9wcmVmYWJzLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL2V4YW1wbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm9vbXMvcm9vbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9hdWRpby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbnRyb2xzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9odWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmVuZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3RlbXBsYXRlcy9vYmplY3RfdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi90ZW1wbGF0ZXMvcm9vbV90ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7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LENBQUMsQ0FBQztLQUNyRDtBQUNILENBQUM7QUFFWSxxQkFBYSxHQUFHLENBQUMsQ0FBZSxFQUFDLENBQWEsRUFBRSxFQUFFO0lBQzdELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDdEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDOUUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUN4RCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFJLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0ksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1RSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7SUFDbEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNwQixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDekQ7U0FDSTtRQUNILENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN2QztJQUNELENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQUVZLHVCQUFlLEdBQUcsQ0FBQyxDQUFnQixFQUFFLENBQWMsRUFBRSxFQUFFO0lBQ2xFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDdEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDeEUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEwsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25NLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM5RSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDM0UsQ0FBQyxDQUFDLE9B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LENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QixDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNyQixDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUV0QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDO1lBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUM1QixJQUFJLGFBQUssRUFBRTtnQkFDVCw4QkFBc0IsRUFBRSxDQUFDO2dCQUN6Qiw0QkFBb0IsRUFBRSxDQUFDO2dCQUN2Qiw2QkFBcUIsRUFBRSxDQUFDO2FBQ3pCO1lBR0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLDBDQUEwQztnQkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUN6QjtRQUNILENBQUM7S0FBQTtDQUNGO0FBelJELG9CQXlSQyIsImZpbGUiOiJ2YW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9nYW1lL21haW4udHNcIik7XG4iLCJpbXBvcnQge1ZlY3RvcixvYmpfc3RhdGUscm9vbV9zdGF0ZX0gZnJvbSBcIi4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge2dhbWUsR2V0Vmlld3BvcnREaW1lbnNpb25zLHZpZXdwb3J0fSBmcm9tIFwiLi4vdmFuXCI7XHJcblxyXG5sZXQgY2FudmFzX2VsZW1lbnQ6SFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHsgYm9hcmRfZnVuY3Rpb25zOiBhbnk7IH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGdsb2JhbHN7XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgZyA9IG5ldyBnYW1lPGdsb2JhbHM+KGNhbnZhc19lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKSx7XHJcbn0pO1xyXG5cclxuZy5sb2FkUm9vbVN0cmluZyhcImV4YW1wbGVcIik7XHJcblxyXG4iLCJcbmltcG9ydCB7b2JqfSBmcm9tIFwibGliL29iamVjdFwiO1xuaW1wb3J0IHsgb2JqX3N0YXRlLCBWZWN0b3IgfSBmcm9tIFwibGliL3N0YXRlXCI7XG5cbmludGVyZmFjZSBleGFtcGxlX3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRle1xuICAgIFxufVxuICAgIFxuaW50ZXJmYWNlIGV4YW1wbGVfcGFyYW1ldGVyc3tcbiAgICBcbn1cbiAgICBcbmV4cG9ydCBjbGFzcyBleGFtcGxlIGV4dGVuZHMgb2Jqe1xuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvRXJyb3IucG5nXCI7XG4gIGhlaWdodCA9IDEwMDtcbiAgd2lkdGggPSAxMDA7XG4gIHRhZ3M6QXJyYXk8c3RyaW5nPjtcbiAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgcmVuZGVyID0gdHJ1ZTtcbiAgc3RhdGU6ZXhhbXBsZV9zdGF0ZTtcbiAgcGFyYW1zOmV4YW1wbGVfcGFyYW1ldGVycztcbiAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOmV4YW1wbGVfcGFyYW1ldGVycyA9IHt9XG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6ZXhhbXBsZV9wYXJhbWV0ZXJzID0gZXhhbXBsZS5kZWZhdWx0X3BhcmFtcyl7XG4gICAgc3VwZXIoc3RhdGUscGFyYW1zKTtcbiAgfVxuICBzdGF0ZWYodGltZV9kZWx0YTpudW1iZXIpe1xuICAgIHN1cGVyLnN0YXRlZih0aW1lX2RlbHRhKTtcbiAgfVxuICByZW5kZXJmKHRpbWVfZGVsdGE6bnVtYmVyKXtcbiAgIHJldHVybiBzdXBlci5yZW5kZXJmKHRpbWVfZGVsdGEpOyBcbiAgfVxuICByZWdpc3Rlcl9hbmltYXRpb25zKCl7XG4gICAgXG4gIH1cbiAgcmVnaXN0ZXJfYXVkaW8oKXtcbiAgICBcbiAgfVxuICByZWdpc3Rlcl9jb250cm9scygpe1xuICAgICAgICBcbiAgfVxufVxuICAgICIsIlxuaW50ZXJmYWNlIHByZWZhYnMge1xuICBbaW5kZXg6c3RyaW5nXTphbnlcbn1cbmltcG9ydCB7ZXhhbXBsZX0gZnJvbSBcIi4vZXhhbXBsZVwiO1xuZXhwb3J0IGxldCBwcmVmYWJzOnByZWZhYnMgPSB7XG5cdGV4YW1wbGU6ZXhhbXBsZSxcbn0iLCJpbXBvcnQgeyByb29tIH0gZnJvbSBcImxpYi9yb29tXCI7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSBcInNyYy92YW5cIjtcbmltcG9ydCB7IHN0YXRlX2NvbmZpZyB9IGZyb20gXCJsaWIvcm9vbVwiO1xuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuL2V4YW1wbGUuanNvblwiO1xubGV0IGNmaWcgPSBjb25maWcgYXMgdW5rbm93biBhcyBzdGF0ZV9jb25maWc7XG5pbnRlcmZhY2UgZXhhbXBsZV9zdGF0ZSB7XG5cbn1cblxuZXhwb3J0IGNsYXNzIGV4YW1wbGUgZXh0ZW5kcyByb29tPGV4YW1wbGVfc3RhdGU+e1xuICBiYWNrZ3JvdW5kX3VybCA9IFwiLi9zcHJpdGVzL0Vycm9yLnBuZ1wiO1xuICByZW5kZXIgPSB0cnVlO1xuICBjb25zdHJ1Y3RvcihnYW1lOiBnYW1lPHVua25vd24+KSB7XG4gICAgc3VwZXIoZ2FtZSwgY2ZpZyk7XG4gIH1cbiAgcmVnaXN0ZXJDb250cm9scygpIHtcblxuICB9XG4gIHJlZ2lzdGVyUGFydGljbGVzKCkge1xuXG4gIH1cbiAgc3RhdGVmKGRlbHRhX3RpbWU6IG51bWJlcikge1xuICAgIHN1cGVyLnN0YXRlZihkZWx0YV90aW1lKTtcbiAgfVxuXG59XG5cbiIsIlxuaW50ZXJmYWNlIHJvb21fZGlyIHtcbiAgW2luZGV4OnN0cmluZ106YW55XG59XG5pbXBvcnQge2V4YW1wbGV9IGZyb20gXCIuL2V4YW1wbGVcIjtcbmV4cG9ydCBsZXQgcm9vbXM6cm9vbV9kaXIgPSB7XG5cdGV4YW1wbGU6ZXhhbXBsZSxcbn0iLCJpbXBvcnQgeyByb290X3BhdGgsIHBhdGggfSBmcm9tIFwiLi9kZWJ1Z1wiO1xyXG5pbXBvcnQgeyBERUJVRyB9IGZyb20gXCIuLi92YW5cIjtcclxuXHJcbmludGVyZmFjZSBzb3VuZF9zdG9yYWdlIHtcclxuICBbaW5kZXg6IHN0cmluZ106IEhUTUxBdWRpb0VsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGF1ZGlvIHtcclxuICBzb3VuZHM6IHNvdW5kX3N0b3JhZ2UgPSB7fTtcclxuICBhZGQobmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xyXG4gICAgbGV0IHAgPSB1cmw7XHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgcCA9IHBhdGguam9pbihyb290X3BhdGgsIHVybCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNvdW5kc1tuYW1lXSA9IG5ldyBBdWRpbyhwKTtcclxuICB9XHJcbiAgYXN5bmMgbG9hZCgpIHtcclxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zb3VuZHMpO1xyXG4gICAgbGV0IHByb21pc2VzID0ga2V5cy5tYXAoKGtleSkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc291bmRzW2tleV0uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXl0aHJvdWdoXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgeCA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgcmV0dXJuICh4KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwbGF5KG5hbWU6IHN0cmluZywgdm9sdW1lOiBudW1iZXIpIHtcclxuICAgIGxldCBhID0gdGhpcy5zb3VuZHNbbmFtZV07XHJcbiAgICBhLnBhdXNlKClcclxuICAgIGEuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgYS52b2x1bWUgPSB2b2x1bWU7XHJcbiAgICBhLnBsYXkoKTtcclxuICB9XHJcbn0iLCJpbXBvcnQge29iaixnZXRJZH0gZnJvbSBcIi4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGV9IGZyb20gXCIuLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtkZWVwfSBmcm9tIFwiLi4vdmFuXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGNvbGxpc2lvbl9ib3h7XHJcbiAgeDpudW1iZXI7XHJcbiAgeTpudW1iZXI7XHJcbiAgd2lkdGg6bnVtYmVyO1xyXG4gIGhlaWdodDpudW1iZXI7XHJcbn1cclxuXHJcbmVudW0gZGlyZWN0aW9ue1xyXG4gIGxlZnQsXHJcbiAgcmlnaHQsXHJcbiAgdXAsXHJcbiAgZG93blxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW5jb21wYXNzaW5nQm94KG9iamVjdHM6b2JqW10pOmNvbGxpc2lvbl9ib3h7XHJcbiAgbGV0IGZpcnN0X29iamVjdCA9IG9iamVjdHNbMF0uZ2V0Qm91bmRpbmdCb3goKTtcclxuICBsZXQgbWF4X3kgPSBmaXJzdF9vYmplY3QudG9wX3JpZ2h0Lnk7XHJcbiAgbGV0IG1heF94ID0gZmlyc3Rfb2JqZWN0LnRvcF9yaWdodC54O1xyXG4gIGxldCBtaW5feSA9IGZpcnN0X29iamVjdC5ib3R0b21fbGVmdC55O1xyXG4gIGxldCBtaW5feCA9IGZpcnN0X29iamVjdC5ib3R0b21fbGVmdC54O1xyXG4gIGZvcihsZXQgYSA9IDE7IGEgPCBvYmplY3RzLmxlbmd0aDthKyspe1xyXG4gICAgbGV0IG9iamVjdCA9IG9iamVjdHNbYV0uZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGlmKG9iamVjdC50b3BfcmlnaHQueSA+IG1heF95KVxyXG4gICAgICBtYXhfeSA9IG9iamVjdC50b3BfcmlnaHQueTtcclxuICAgIGlmKG9iamVjdC50b3BfcmlnaHQueCA+IG1heF94KVxyXG4gICAgICBtYXhfeCA9IG9iamVjdC50b3BfcmlnaHQueDtcclxuICAgIGlmKG9iamVjdC5ib3R0b21fbGVmdC55IDwgbWluX3kpXHJcbiAgICAgIG1pbl95ID0gb2JqZWN0LmJvdHRvbV9sZWZ0Lnk7XHJcbiAgICBpZihvYmplY3QuYm90dG9tX2xlZnQueCA8IG1pbl94KVxyXG4gICAgICBtaW5feCA9IG9iamVjdC5ib3R0b21fbGVmdC54O1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgeDptaW5feCArIChtYXhfeCAtIG1pbl94KS8yLFxyXG4gICAgeTptaW5feSArIChtYXhfeSAtIG1pbl95KS8yLFxyXG4gICAgaGVpZ2h0Om1heF95IC0gbWluX3ksXHJcbiAgICB3aWR0aDptYXhfeCAtIG1pbl94XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfYWxsX29iamVjdHMoYzogY29sbGlzaW9uX2JveCxvYmpzOm9ialtdLGV4ZW1wdGlvbjpzdHJpbmdbXSA9IFtdKTpvYmpbXXtcclxuICByZXR1cm4gb2Jqcy5maWx0ZXIoKGEpPT4oIWV4ZW1wdGlvbi5zb21lKChiKT0+YS50YWdzLmluZGV4T2YoYikgIT09IC0xKSAmJiBhLmNvbGxpZGVzV2l0aEJveChjKSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfYWxsX2NvbGxpc2lvbnMoYzogY29sbGlzaW9uX2JveCxvYmpzOm9ialtdLGV4ZW1wdGlvbjpzdHJpbmdbXSA9IFtdKTpBcnJheTxvYmo+e1xyXG4gIGxldCBtYXRjaGVkID0gW107XHJcbiAgZm9yIChsZXQgYSBvZiBvYmpzKSB7XHJcbiAgICBpZiAoIWV4ZW1wdGlvbi5zb21lKChiKT0+YS50YWdzLmluZGV4T2YoYikgIT09IC0xKSAmJiBhLmNvbGxpc2lvbiAmJiBhLmNvbGxpZGVzV2l0aEJveChjKSkge1xyXG4gICAgICBtYXRjaGVkLnB1c2goYSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBtYXRjaGVkXHJcbn1cclxuLy9DaGVja3MgdXAgdG8gdGhlIGZpcnN0IGNvbGxpc2lvblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfY29sbGlzaW9ucyhjOiBjb2xsaXNpb25fYm94LCBvYmpzOiBvYmpbXSwgZXhlbXB0aW9uOnN0cmluZykge1xyXG4gIGZvciAobGV0IGEgb2Ygb2Jqcykge1xyXG4gICAgaWYgKGEuaWQgIT09IGV4ZW1wdGlvbiAmJiBhLmNvbGxpc2lvbiAmJiBhLmNvbGxpZGVzV2l0aEJveChjKSkge1xyXG4gICAgICByZXR1cm4gYTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlbG9jaXR5X21heCh2ZWxvY2l0eTpudW1iZXIsYm94OmNvbGxpc2lvbl9ib3gsb2JqczpvYmpbXSwgZXhlbXB0aW9uOnN0cmluZyxkaXI6ZGlyZWN0aW9uKXtcclxuICBsZXQgY29sbGlzaW9uID0gY2hlY2tfY29sbGlzaW9ucyhib3gsIG9ianMsIGV4ZW1wdGlvbik7XHJcbiAgaWYoY29sbGlzaW9uID09IG51bGwpe1xyXG4gICAgcmV0dXJuIHZlbG9jaXR5O1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgbGV0IGNvbGxpZGVyID0gY29sbGlzaW9uO1xyXG4gICAgbGV0IG9yaWdpbiA9IGdldElkKG9ianMsZXhlbXB0aW9uKTtcclxuICAgIGxldCBvcmlnX3N0ID0gb3JpZ2luLnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICAgIGxldCBjb2xsaWRlcl9zdCA9IGNvbGxpZGVyLnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICAgIGxldCBvcmlnX2NvbCA9IG9yaWdpbi5nZXRGdWxsQ29sbGlzaW9uQm94KCk7XHJcbiAgICBsZXQgY29sbGlkZXJfY29sID0gY29sbGlkZXIuZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gICAgaWYoZGlyID09IGRpcmVjdGlvbi5sZWZ0KXtcclxuICAgICAgcmV0dXJuIChvcmlnX2NvbC54IC0gb3JpZ19jb2wud2lkdGgvMikgLSAoY29sbGlkZXJfY29sLnggKyBjb2xsaWRlcl9jb2wud2lkdGgvMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRpciA9PSBkaXJlY3Rpb24ucmlnaHQpe1xyXG4gICAgICByZXR1cm4gKGNvbGxpZGVyX2NvbC54IC0gY29sbGlkZXJfY29sLndpZHRoLzIpIC0gKG9yaWdfY29sLnggKyBvcmlnX2NvbC53aWR0aC8yKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlyID09IGRpcmVjdGlvbi5kb3duKXtcclxuICAgICAgcmV0dXJuIChvcmlnX2NvbC55IC0gb3JpZ19jb2wuaGVpZ2h0LzIpIC0gKGNvbGxpZGVyX2NvbC55ICsgY29sbGlkZXJfY29sLmhlaWdodC8yKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlyID09IGRpcmVjdGlvbi51cCl7XHJcbiAgICAgIHJldHVybiAoY29sbGlkZXJfY29sLnkgLSBjb2xsaWRlcl9jb2wuaGVpZ2h0LzIpIC0gKG9yaWdfY29sLnkgKyBvcmlnX2NvbC5oZWlnaHQvMik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVsb2NpdHlDb2xsaXNpb25DaGVjayhvYmplY3Q6b2JqLGxpc3Q6b2JqW10pIHtcclxuICBsaXN0ID0gWy4uLmxpc3RdO1xyXG4gIGxldCBvYiA9IG9iamVjdDtcclxuICBsZXQgc3QgPSBvYmplY3Quc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gIGxldCB4X3ZlbCA9IHN0LnZlbG9jaXR5Lng7XHJcbiAgbGV0IHlfdmVsID0gc3QudmVsb2NpdHkueTtcclxuICBpZighb2IuY29sbGlzaW9uKXtcclxuICAgICg8b2JqX3N0YXRlPm9iLnN0YXRlKS5wb3NpdGlvbi54ICs9ICg8b2JqX3N0YXRlPm9iLnN0YXRlKS52ZWxvY2l0eS54O1xyXG4gICAgKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnBvc2l0aW9uLnkgKz0gKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnZlbG9jaXR5Lnk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGxldCBjb2xfYm94ID0gb2IuZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gIGlmICh4X3ZlbCA+IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IGNvbF9ib3gueCArIGNvbF9ib3gud2lkdGgvMiArIHhfdmVsLzIsXHJcbiAgICAgIHk6IGNvbF9ib3gueSxcclxuICAgICAgd2lkdGg6IHhfdmVsLFxyXG4gICAgICBoZWlnaHQ6IGNvbF9ib3guaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgbGV0IHZlbCA9IHZlbG9jaXR5X21heChzdC52ZWxvY2l0eS54LGJveCxsaXN0LG9iLmlkLGRpcmVjdGlvbi5yaWdodCk7XHJcbiAgICBpZih2ZWwgPiAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueCArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS54ID0gMDsgIFxyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIGlmICh4X3ZlbCA8IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IHhfdmVsLzIgKyBjb2xfYm94LnggLSBjb2xfYm94LndpZHRoLzIsXHJcbiAgICAgIHk6IGNvbF9ib3gueSxcclxuICAgICAgd2lkdGg6IC0xICogeF92ZWwsXHJcbiAgICAgIGhlaWdodDogY29sX2JveC5oZWlnaHRcclxuICAgIH1cclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueCxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24ubGVmdCk7XHJcbiAgICBpZih2ZWwgPCAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueCArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS54ID0gMDsgXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICh5X3ZlbCA+IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IGNvbF9ib3gueCxcclxuICAgICAgeTogY29sX2JveC55ICsgY29sX2JveC5oZWlnaHQvMiArIHlfdmVsLzIsXHJcbiAgICAgIHdpZHRoOiBjb2xfYm94LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHlfdmVsXHJcbiAgICB9XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LnksYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLnVwKTtcclxuICAgIGlmKHZlbCA+IDApe1xyXG4gICAgICBzdC5wb3NpdGlvbi55ICs9IHZlbDtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHN0LnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIGlmICh5X3ZlbCA8IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IGNvbF9ib3gueCxcclxuICAgICAgeTogeV92ZWwvMiArIGNvbF9ib3gueSAtIGNvbF9ib3guaGVpZ2h0LzIsXHJcbiAgICAgIHdpZHRoOiBjb2xfYm94LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IC0xICogeV92ZWxcclxuICAgIH1cclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueSxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24uZG93bik7XHJcbiAgICBpZih2ZWwgPCAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueSArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS55ID0gMDtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBnIH0gZnJvbSBcIi4uL2dhbWUvbWFpblwiO1xyXG5pbXBvcnQge2dhbWUsUEFVU0VELERFQlVHLCBHZXRTY3JlZW5EaW1lbnNpb25zLEdldFZpZXdwb3J0RGltZW5zaW9uc30gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4vY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7b2JqfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcbmltcG9ydCB7VmVjdG9yfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQge2RlYnVnX3N0YXRlfSBmcm9tIFwiLi9kZWJ1Z1wiO1xyXG5cclxuaW50ZXJmYWNlIG1vdXNlUG9ze1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyLFxyXG4gIGxhc3Q6e1xyXG4gICAgeDpudW1iZXIsXHJcbiAgICB5Om51bWJlclxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGNvbnRyb2xfZnVuY3tcclxuICAoKTp2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBtb3VzZUJpbmRze1xyXG4gIFtrZXk6c3RyaW5nXTogQXJyYXk8W2NvbnRyb2xfZnVuYyxvYmpdPlxyXG59XHJcblxyXG5pbnRlcmZhY2Uga2V5QmluZHN7XHJcbiAgW2tleTpzdHJpbmddOiBBcnJheTxjb250cm9sX2Z1bmM+XHJcbn1cclxubGV0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpO1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9jbGlja19oYW5kbGVyKGdhbWU6Z2FtZTx1bmtub3duPil7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xyXG4gICAgXHJcbiAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGdhbWUuc3RhdGUuY2FtZXJhc1swXSk7XHJcbiAgICBpZighbW91c2Upe1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCBib3g6Y29sbGlzaW9uX2JveCA9IHtcclxuICAgICAgeDptb3VzZS54LFxyXG4gICAgICB5Om1vdXNlLnksXHJcbiAgICAgIGhlaWdodDoxLFxyXG4gICAgICB3aWR0aDoxXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gICAgZm9yKGxldCBhID0gMDthIDwgZC5sZW5ndGg7YSsrKXtcclxuICAgICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgICAgaWYoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSBcIm1vdXNlMVwiICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIGlmKHNlbGVjdGVkLm9iaiAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgIGlmKHNlbGVjdGVkLm9iai5jb2xsaWRlc1dpdGhCb3goYm94KSl7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9ICBcclxuICB9KVxyXG59XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiAgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcImRvd25cIikgICYmICFzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIHNlbGVjdGVkLnJlcGVhdF90aW1lci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcInVwXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNldXBcIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2UpIHtcclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgfVxyXG4gICBlbHNlIGlmKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwidXBcIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2V1cFwiKSAmJiBzZWxlY3RlZC5leGVjdXRlZCAmJiBzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICBsZXQgZyA9IFsuLi5yZXBlYXRfYmluZHNdO1xyXG4gICAgIGZvcihsZXQgYSA9IDA7IGEgPCBnLmxlbmd0aDthKyspe1xyXG4gICAgICAgaWYoZ1thXS5iaW5kLmlkID09PSBzZWxlY3RlZC5pZCl7XHJcbiAgICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG4gIH1cclxufSlcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJ1cFwiKSAgJiYgIXNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgICAgc2VsZWN0ZWQucmVwZWF0X3RpbWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwiZG93blwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZWRvd25cIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2UpIHtcclxuICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwiZG93blwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZWRvd25cIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgIGxldCBnID0gWy4uLnJlcGVhdF9iaW5kc107XHJcbiAgICAgIGZvcihsZXQgYSA9IDA7IGEgPCBnLmxlbmd0aDthKyspe1xyXG4gICAgICAgIGlmKGdbYV0uYmluZC5pZCA9PT0gc2VsZWN0ZWQuaWQpe1xyXG4gICAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5pbnRlcmZhY2UgaGVsZF9rZXlze1xyXG4gIFtpbmRleDpzdHJpbmddOmJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGxldCBoZWxkX2tleXM6aGVsZF9rZXlzID0ge307XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsKGUpPT57XHJcbiAgbGV0IGNvZGU6c3RyaW5nO1xyXG5cclxuICBpZihlLmRlbHRhWSA8IDApe1xyXG4gICAgY29kZSA9IFwic2Nyb2xsdXBcIjtcclxuICB9XHJcbiAgZWxzZSBpZihlLmRlbHRhWSA+IDApe1xyXG4gICAgY29kZSA9IFwic2Nyb2xsZG93blwiO1xyXG4gIH1cclxuXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIFxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IGNvZGUpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICBoZWxkX2tleXNbZS5jb2RlXSA9IHRydWU7XHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5rZXlib2FyZCAmJiBzZWxlY3RlZC5rZXkgPT09IGUuY29kZSAgJiYgIXNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgICAgZm9yKGxldCBjIG9mIHJlcGVhdF9iaW5kcyl7XHJcbiAgICAgICAgICBpZihjLmJpbmQuaWQgPT0gc2VsZWN0ZWQuaWQpe1xyXG4gICAgICAgICAgICBjLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59KVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgaGVsZF9rZXlzW2UuY29kZV0gPSBmYWxzZTtcclxuICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLmtleWJvYXJkICYmIHNlbGVjdGVkLmtleSA9PT0gZS5jb2RlICYmIHNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlICl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIGxldCBnID0gWy4uLnJlcGVhdF9iaW5kc107XHJcbiAgICAgICAgZm9yKGxldCBhID0gMDsgYSA8IGcubGVuZ3RoO2ErKyl7XHJcbiAgICAgICAgICBpZihnW2FdLmJpbmQuaWQgPT09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZ1thXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxubGV0IHRyYWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcclxuICB2YXIgcmVjdCA9IChlLnRhcmdldCBhcyBIVE1MQ2FudmFzRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgO1xyXG4gIC8vY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgbGFzdF94ID0geDtcclxuICBsYXN0X3kgPSB5O1xyXG4gIHggPSBlLmNsaWVudFg7IC8veCBwb3NpdGlvbiB3aXRoaW4gdGhlIGVsZW1lbnQuXHJcbiAgeSA9IGUuY2xpZW50WTsgIC8veSBwb3NpdGlvbiB3aXRoaW4gdGhlIGVsZW1lbnQuXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGVudW0gYnR5cGV7XHJcbiAgbW91c2UsXHJcbiAga2V5Ym9hcmRcclxufVxyXG5cclxuaW50ZXJmYWNlIGJpbmR7XHJcbiAga2V5OnN0cmluZyxcclxuICB0eXBlOmJ0eXBlLFxyXG4gIGlkOm51bWJlcixcclxuICBmdW5jdGlvbjpjb250cm9sX2Z1bmMsXHJcbiAgZXhlY3V0ZTpleGVjX3R5cGUsXHJcbiAgcmVwZWF0X3RpbWVyPzpyZXBlYXRfYmluZCxcclxuICBvYmo/Om9iaixcclxuICBleGVjdXRlZD86Ym9vbGVhbixcclxuICBpbnRlcnZhbD86bnVtYmVyLFxyXG4gIGNhbWVyYT86Q2FtZXJhXHJcbn1cclxuXHJcbmludGVyZmFjZSByZXBlYXRfYmluZHtcclxuICBiaW5kOmJpbmQsXHJcbiAgdGltZXI6bnVtYmVyLFxyXG4gIGludGVydmFsOm51bWJlcixcclxuICBhY3RpdmU6Ym9vbGVhblxyXG59XHJcblxyXG5sZXQgeCA9IDA7XHJcbmxldCB5ID0gMDtcclxubGV0IGxhc3RfeCA9IDA7XHJcbmxldCBsYXN0X3kgPSAwO1xyXG5sZXQgYmluZHM6a2V5QmluZHMgPSB7fTtcclxuZXhwb3J0IGxldCBkZWJ1Z19iaW5kczpiaW5kW10gPSBbXTtcclxubGV0IG1vdXNlQmluZHM6bW91c2VCaW5kcyA9IHt9O1xyXG5sZXQgYmluZF9jb3VudCA9IDA7XHJcblxyXG5sZXQgYWxsX2JpbmRzOkFycmF5PGJpbmQ+ID0gW11cclxuXHJcbmxldCByZXBlYXRfYmluZHM6QXJyYXk8cmVwZWF0X2JpbmQ+ID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9sbF9Nb3VzZShjYW1lcmE6Q2FtZXJhLGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudCA9IGcuc3RhdGUuY2FudmFzKTpWZWN0b3J7XHJcbiAgbGV0IGhlaWdodCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodDtcclxuICBsZXQgd3JhdGlvID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLndpZHRoKS9HZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aDtcclxuICBsZXQgdnJhdGlvID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmhlaWdodCkvR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0O1xyXG4gIGxldCBib3VuZHMgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgaWYoeCA+IGJvdW5kcy5sZWZ0ICYmIHggPCBib3VuZHMucmlnaHQgJiYgeSA8IGJvdW5kcy5ib3R0b20gJiYgeSA+IGJvdW5kcy50b3Ape1xyXG4gICAgXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgeDogKCh4IC0gYm91bmRzLmxlZnQgLSBjYW1lcmEuc3RhdGUudmlld3BvcnQueCkvd3JhdGlvL2NhbWVyYS5zdGF0ZS5zY2FsaW5nICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aC9jYW1lcmEuc3RhdGUuc2NhbGluZy8yKSAsXHJcbiAgICAgIHk6ICgoaGVpZ2h0IC0gKHktYm91bmRzLnRvcCkvdnJhdGlvKS9jYW1lcmEuc3RhdGUuc2NhbGluZyArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0L2NhbWVyYS5zdGF0ZS5zY2FsaW5nLzIgLSBjYW1lcmEuc3RhdGUudmlld3BvcnQueSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFeGVjdXRlUmVwZWF0QmluZHMoYjpudW1iZXIpe1xyXG4gIGZvcihsZXQgYSBvZiByZXBlYXRfYmluZHMpe1xyXG4gICAgaWYoYS5iaW5kLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQgJiYgYS50aW1lciA9PSAwICYmIGEuYWN0aXZlKXtcclxuICAgICAgYS5iaW5kLmZ1bmN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBpZihhLmFjdGl2ZSB8fCAoIWEuYWN0aXZlICYmIGEudGltZXIgIT0gMCkpXHJcbiAgICAgIGEudGltZXIgKz0gYjtcclxuICAgIGlmKGEudGltZXIgPiBhLmludGVydmFsKXtcclxuICAgICAgYS50aW1lciA9IDA7IFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVuYmluZChiaW5kX2lkOm51bWJlcil7XHJcbiAgZm9yKGxldCBhID0gMDthIDwgYWxsX2JpbmRzLmxlbmd0aDsgYSsrKXtcclxuICAgIGlmKGFsbF9iaW5kc1thXS5pZCA9PSBiaW5kX2lkKXtcclxuICAgICAgYWxsX2JpbmRzLnNwbGljZShhLDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGxldCBhID0gMDthIDwgcmVwZWF0X2JpbmRzLmxlbmd0aDsgYSsrKXtcclxuICAgIGlmKHJlcGVhdF9iaW5kc1thXS5iaW5kLmlkID09IGJpbmRfaWQpe1xyXG4gICAgICByZXBlYXRfYmluZHMuc3BsaWNlKGEsMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gZXhlY190eXBle1xyXG4gIG9uY2UsXHJcbiAgcmVwZWF0XHJcbn1cclxuXHJcbmxldCBpZCA9IDA7XHJcbmV4cG9ydCBmdW5jdGlvbiBCaW5kKGtleW5hbWU6c3RyaW5nLGZ1bmM6Y29udHJvbF9mdW5jLHR5cGU6ZXhlY190eXBlLGludGVydmFsOm51bWJlcixvYmplY3Q/Om9iaik6bnVtYmVye1xyXG4gIGlmKGtleW5hbWUuc2xpY2UoMCw1KSA9PT0gXCJtb3VzZVwiIHx8IGtleW5hbWUuc2xpY2UoMCw2KSA9PT0gXCJzY3JvbGxcIil7XHJcbiAgICBsZXQgYjpiaW5kID0ge1xyXG4gICAgICBrZXk6a2V5bmFtZSxcclxuICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgaWQsXHJcbiAgICAgIGZ1bmN0aW9uOmZ1bmMsXHJcbiAgICAgIG9iajpvYmplY3QsXHJcbiAgICAgIGV4ZWN1dGU6dHlwZSxcclxuICAgICAgZXhlY3V0ZWQ6ZmFsc2UsXHJcbiAgICAgIGludGVydmFsXHJcbiAgICB9O1xyXG4gICAgaWYodHlwZSA9PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgYi5yZXBlYXRfdGltZXIgPSB7XHJcbiAgICAgICAgYmluZDpiLFxyXG4gICAgICAgIHRpbWVyOjAsXHJcbiAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgYWN0aXZlOmZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmVwZWF0X2JpbmRzLnB1c2goYi5yZXBlYXRfdGltZXIpO1xyXG4gICAgfVxyXG4gICAgYWxsX2JpbmRzLnB1c2goYik7XHJcblxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgbGV0IGI6YmluZCA9IHtcclxuICAgICAga2V5OmtleW5hbWUsXHJcbiAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgIGlkLFxyXG4gICAgICBmdW5jdGlvbjpmdW5jLFxyXG4gICAgICBleGVjdXRlOnR5cGUsXHJcbiAgICAgIGV4ZWN1dGVkOmZhbHNlLFxyXG4gICAgICBpbnRlcnZhbFxyXG4gICAgfVxyXG4gICAgaWYodHlwZSA9PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgYi5yZXBlYXRfdGltZXIgPSB7XHJcbiAgICAgICAgYmluZDpiLFxyXG4gICAgICAgIHRpbWVyOjAsXHJcbiAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgYWN0aXZlOmZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmVwZWF0X2JpbmRzLnB1c2goYi5yZXBlYXRfdGltZXIpO1xyXG4gICAgfVxyXG4gICAgYWxsX2JpbmRzLnB1c2goYik7XHJcbiAgfVxyXG4gIGlkKys7XHJcbiAgcmV0dXJuIGlkIC0gMTtcclxufSIsImltcG9ydCB7IERFQlVHLCBQQVVTRUQsIHNldFBhdXNlZCwgdmlld3BvcnQgfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmV4cG9ydCBsZXQgcGF0aDphbnk7IFxyXG5sZXQgZnM6YW55O1xyXG5sZXQgaXBjUmVuZGVyZXI6YW55O1xyXG5pbXBvcnQgeyBwcmVmYWJzIH0gZnJvbSBcIi4uL2dhbWUvb2JqZWN0cy9wcmVmYWJzXCI7XHJcbmV4cG9ydCBsZXQgcHJvamVjdF9wYXRoID0gXCJcIjtcclxuZXhwb3J0IGxldCByb290X3BhdGggPSBcIlwiO1xyXG5pZihERUJVRyl7XHJcbiBwYXRoID0gIHdpbmRvdy5yZXF1aXJlKFwicGF0aFwiKTtcclxuIGZzID0gd2luZG93LnJlcXVpcmUoXCJmc1wiKTtcclxuIGlwY1JlbmRlcmVyICA9IHdpbmRvdy5yZXF1aXJlKFwiZWxlY3Ryb25cIikuaXBjUmVuZGVyZXI7XHJcbiBwcm9qZWN0X3BhdGggPSBpcGNSZW5kZXJlci5zZW5kU3luYygncGF0aC1yZXF1ZXN0JywgJ3BpbmcnKVswXVxyXG4gcm9vdF9wYXRoID0gcGF0aC5qb2luKHByb2plY3RfcGF0aCxcIi4uXCIpXHJcbn1cclxuaW1wb3J0IHsgb2JqLCBwYXJhbXMgfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgb2JqX3N0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHtvYmplY3RfdGVtcGxhdGV9IGZyb20gXCIuL3RlbXBsYXRlcy9vYmplY3RfdGVtcGxhdGVcIjtcclxuaW1wb3J0IHtyb29tX3RlbXBsYXRlfSBmcm9tIFwiLi90ZW1wbGF0ZXMvcm9vbV90ZW1wbGF0ZVwiO1xyXG5pbXBvcnQgeyBnIH0gZnJvbSBcIi4uL2dhbWUvbWFpblwiO1xyXG5pbXBvcnQgeyByb29tcyBhcyByb29tX2xpc3QgfSBmcm9tIFwiLi4vZ2FtZS9yb29tcy9yb29tc1wiO1xyXG5pbXBvcnQgeyBCaW5kLCBidHlwZSwgUG9sbF9Nb3VzZSwgZXhlY190eXBlLCBoZWxkX2tleXMsIGRlYnVnX2JpbmRzIH0gZnJvbSBcIi4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBIVUQsIFRleHQgfSBmcm9tIFwiLi4vbGliL2h1ZFwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi4vbGliL3JlbmRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IsIGRpbWVuc2lvbnN9IGZyb20gXCIuLi9saWIvc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z19odWQgZXh0ZW5kcyBIVUQge1xyXG4gIHNldFRleHRFbGVtZW50cygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIG5ldyBUZXh0KHtcclxuICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgeDogMTAsXHJcbiAgICAgICAgICB5OiB2aWV3cG9ydC5oZWlnaHQgLSAyNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2l6ZTogMjIsXHJcbiAgICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgIHNjYWxpbmc6IDFcclxuICAgICAgfSwgKCkgPT4gZGVidWdfc3RhdGUucmVuZGVyX2RlbHRhX3RpbWUgPiAwID8gTWF0aC5yb3VuZCgxMDAwL2RlYnVnX3N0YXRlLnJlbmRlcl9kZWx0YV90aW1lKSArIFwiXCIgOiBcIlwiKSxcclxuICAgICAgbmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IDEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDIyLFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgc2NhbGluZzogMVxyXG4gICAgfSwgKCkgPT4gYFg6JHtkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueC50b0ZpeGVkKDApfWApLFxyXG4gICAgbmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IDMyXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDIyLFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgc2NhbGluZzogMVxyXG4gICAgfSwgKCkgPT4gYFk6JHtkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueS50b0ZpeGVkKDApfWApLFxyXG4gICAgbmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IHZpZXdwb3J0LndpZHRoIC0gMTAsXHJcbiAgICAgICAgeTogMzJcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogMjIsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246IFwicmlnaHRcIixcclxuICAgICAgc2NhbGluZzogMVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSxkZWJ1Z19zdGF0ZS50YXJnZXQpO1xyXG4gICAgICBpZihtb3VzZSl7XHJcbiAgICAgICAgcmV0dXJuIGAke21vdXNlLngudG9GaXhlZCgwKX06WGBcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYDpYYFxyXG4gICAgfSksXHJcbiAgICBuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogdmlld3BvcnQud2lkdGggLSAxMCxcclxuICAgICAgICB5OiAxMFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiAyMixcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICBzY2FsaW5nOiAxXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZGVidWdfc3RhdGUuY2FtZXJhLGRlYnVnX3N0YXRlLnRhcmdldCk7XHJcbiAgICAgIGlmKG1vdXNlKXtcclxuICAgICAgICByZXR1cm4gYCR7bW91c2UueS50b0ZpeGVkKDApfTpZYFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBgOllgXHJcbiAgICB9KSxcclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdfc3RhdGVmKHQ6IG51bWJlcikge1xyXG4gIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZGVidWdfc3RhdGUuY2FtZXJhLCBkZWJ1Z19zdGF0ZS50YXJnZXQpO1xyXG4gIGlmIChkZWJ1Z19zdGF0ZS5jYW1lcmEuaHVkKSB7XHJcbiAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuaHVkLnN0YXRlZih0KTtcclxuICB9XHJcbiAgaWYgKCFQQVVTRUQpIHtcclxuICAgIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKTtcclxuICB9XHJcbiAgaWYobW91c2Upe1xyXG4gICAgaWYgKGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQpIHtcclxuICAgICAgaWYgKFBBVVNFRCAmJiBoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSAmJiBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5wcm9wZXJ0eSA9PSBcInNjYWxpbmdcIikge1xyXG4gICAgICAgIGxldCBkaXN0ID0ge1xyXG4gICAgICAgICAgeDogTWF0aC5hYnMobW91c2UueCAtIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUucG9zaXRpb24ueCksXHJcbiAgICAgICAgICB5OiBNYXRoLmFicyhtb3VzZS55IC0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5wb3NpdGlvbi55KVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlLnNjYWxpbmcud2lkdGggPSAoMiAqIGRpc3QueCkgLyBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LndpZHRoO1xyXG4gICAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUuc2NhbGluZy5oZWlnaHQgPSAoMiAqIGRpc3QueSkgLyBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgc3QgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgICAgIHN0LnBvc2l0aW9uLnggPSBtb3VzZS54IC0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQueCxcclxuICAgICAgICAgIHN0LnBvc2l0aW9uLnkgPSBtb3VzZS55IC0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQueVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoUEFVU0VEICYmIGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQpIHtcclxuICAgICAgZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudC5zdGF0ZS5yb3RhdGlvbiA9IGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQuYW5nbGVUb3dhcmRzUG9pbnQobW91c2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRlYnVnX3N0YXRlLm1pZGRsZV9wb3NpdGlvbikge1xyXG4gICAgICBsZXQgZGlmZl95ID0gbW91c2UueSAtIGRlYnVnX3N0YXRlLm1pZGRsZV9wb3NpdGlvbi55O1xyXG4gICAgICBsZXQgZGlmZl94ID0gbW91c2UueCAtIGRlYnVnX3N0YXRlLm1pZGRsZV9wb3NpdGlvbi54O1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgLTEgKiBkaWZmX3g7XHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgKyAtMSAqIGRpZmZfeTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z191cGRhdGVfcm9vbV9saXN0KCkge1xyXG4gIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb29tX2xpc3RcIik7XHJcbiAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGZvciAobGV0IHJvb21fbmFtZSBvZiBPYmplY3Qua2V5cyhyb29tX2xpc3QpKSB7XHJcbiAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyb29tX25hbWUpKTtcclxuICAgIHBhcmEuY2xhc3NMaXN0LmFkZChcInJvb21fbGlzdF9pdGVtXCIpO1xyXG4gICAgcGFyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZy5sb2FkUm9vbVN0cmluZyhyb29tX25hbWUpO1xyXG4gICAgfSlcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgcHJvcGVydGllc19lbGVtZW50IHtcclxuICBwb3NfeDogSFRNTElucHV0RWxlbWVudCxcclxuICBwb3NfeTogSFRNTElucHV0RWxlbWVudCxcclxuICB2ZWxfeDogSFRNTElucHV0RWxlbWVudCxcclxuICB2ZWxfeTogSFRNTElucHV0RWxlbWVudCxcclxuICByb3Q6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgc2NhX3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgc2NhX3k6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgcmVuZGVyOiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIGNvbGxpc2lvbjogSFRNTElucHV0RWxlbWVudFxyXG59XHJcbmxldCBwcm9wZXJ0aWVzX2VsZW1lbnRzOiBwcm9wZXJ0aWVzX2VsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbmlmIChERUJVRykge1xyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMgPSB7XHJcbiAgICBwb3NfeDogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zX3hcIikpLFxyXG4gICAgcG9zX3k6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc195XCIpKSxcclxuICAgIHZlbF94OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZWxfeFwiKSksXHJcbiAgICB2ZWxfeTogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVsX3lcIikpLFxyXG4gICAgcm90OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RcIikpLFxyXG4gICAgc2NhX3g6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYV94XCIpKSxcclxuICAgIHNjYV95OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FfeVwiKSksXHJcbiAgICByZW5kZXI6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbmRlclwiKSksXHJcbiAgICBjb2xsaXNpb246ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbGxpc2lvblwiKSlcclxuICB9XHJcblxyXG4gIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpO1xyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgaW5wdXRzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBpbnB1dHNbYV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICg8SFRNTEVsZW1lbnQ+aW5wdXRzW2FdKS5mb2N1cygpO1xyXG4gICAgfSlcclxuICB9XHJcbiAgbGV0IGZvY3VzZWQ7XHJcbiAgbGV0IGRlYnVnX3RhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgZGVidWdfdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBpbnB1dHMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgaW5wdXRzW2FdLmJsdXIoKTtcclxuICAgIH1cclxuICB9KVxyXG4gIGxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKTtcclxuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGlucHV0cy5sZW5ndGg7IGErKykge1xyXG4gICAgICBpbnB1dHNbYV0uYmx1cigpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuXHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3gudmFsdWUpIHx8IDA7XHJcbiAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogXCJwb3NpdGlvblwiLFxyXG4gICAgICBlbGVtZW50OiBlbGUsXHJcbiAgICAgIG5ldzogSlNPTi5zdHJpbmdpZnkoeyB4OiBuZXdfdmFsLCB5OiBlbGUuc3RhdGUucG9zaXRpb24ueSB9KSxcclxuICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUucG9zaXRpb24pXHJcbiAgICB9KVxyXG4gICAgZWxlLnN0YXRlLnBvc2l0aW9uLnggPSBuZXdfdmFsO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBsZXQgbmV3X3ZhbCA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy5wb3NfeS52YWx1ZSkgfHwgMDtcclxuICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBcInBvc2l0aW9uXCIsXHJcbiAgICAgIGVsZW1lbnQ6IGVsZSxcclxuICAgICAgbmV3OiBKU09OLnN0cmluZ2lmeSh7IHg6IGVsZS5zdGF0ZS5wb3NpdGlvbi54LCB5OiBuZXdfdmFsIH0pLFxyXG4gICAgICBvbGQ6IEpTT04uc3RyaW5naWZ5KGVsZS5zdGF0ZS5wb3NpdGlvbilcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUucG9zaXRpb24ueSA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF94LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5zdGF0ZS52ZWxvY2l0eS54ID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF94LnZhbHVlKSB8fCAwO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy52ZWxfeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUuc3RhdGUudmVsb2NpdHkueSA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy52ZWxfeS52YWx1ZSkgfHwgMDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMucm90LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGxldCBuZXdfdmFsID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnJvdC52YWx1ZSkgfHwgMDtcclxuICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBcInJvdGF0aW9uXCIsXHJcbiAgICAgIGVsZW1lbnQ6IGVsZSxcclxuICAgICAgbmV3OiBKU09OLnN0cmluZ2lmeShuZXdfdmFsKSxcclxuICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUucm90YXRpb24pXHJcbiAgICB9KVxyXG4gICAgZWxlLnN0YXRlLnJvdGF0aW9uID0gbmV3X3ZhbDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3guYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3gudmFsdWUpIHx8IDA7XHJcbiAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogXCJzY2FsaW5nXCIsXHJcbiAgICAgIGVsZW1lbnQ6IGVsZSxcclxuICAgICAgbmV3OiBKU09OLnN0cmluZ2lmeSh7IHdpZHRoOiBuZXdfdmFsLCBoZWlnaHQ6IGVsZS5zdGF0ZS5zY2FsaW5nLmhlaWdodCB9KSxcclxuICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUuc2NhbGluZylcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUuc2NhbGluZy53aWR0aCA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV95LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGxldCBuZXdfdmFsID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV95LnZhbHVlKSB8fCAwO1xyXG4gICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IFwic2NhbGluZ1wiLFxyXG4gICAgICBlbGVtZW50OiBlbGUsXHJcbiAgICAgIG5ldzogSlNPTi5zdHJpbmdpZnkoeyB3aWR0aDogZWxlLnN0YXRlLnNjYWxpbmcud2lkdGgsIGhlaWdodDogbmV3X3ZhbCB9KSxcclxuICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUuc2NhbGluZylcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUuc2NhbGluZy5oZWlnaHQgPSBuZXdfdmFsO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5yZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLnJlbmRlciA9IHByb3BlcnRpZXNfZWxlbWVudHMucmVuZGVyLmNoZWNrZWQ7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLmNvbGxpc2lvbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUuY29sbGlzaW9uID0gcHJvcGVydGllc19lbGVtZW50cy5jb2xsaXNpb24uY2hlY2tlZDtcclxuICB9KVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlX2VsZW1lbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLmRlbGV0ZSgpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z191cGRhdGVfcHJvcGVydGllc19lbGVtZW50KCkge1xyXG4gIGlmIChkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQpIHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9ial9uYW1lXCIpLmlubmVySFRNTCA9IGVsZS5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeC52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUucG9zaXRpb24ueC50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeS52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUucG9zaXRpb24ueS50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy52ZWxfeC52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUudmVsb2NpdHkueC50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy52ZWxfeS52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUudmVsb2NpdHkueS50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5yb3QudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnJvdGF0aW9uLnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV94LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS5zY2FsaW5nLndpZHRoLnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV95LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS5zY2FsaW5nLmhlaWdodC50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5yZW5kZXIuY2hlY2tlZCA9IGVsZS5yZW5kZXI7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLmNvbGxpc2lvbi5jaGVja2VkID0gZWxlLmNvbGxpc2lvbjtcclxuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXJhbXNfbGlzdFwiKTtcclxuICAgIGxpc3QudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMoZWxlLnBhcmFtcykpIHtcclxuXHJcbiAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaykpO1xyXG4gICAgICBsZXQgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgIGlmICh0eXBlb2YgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZW9mICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaylcclxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gKyBcIlwiKTtcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgfSlcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgICAgICBsZXQgdmFsOiBzdHJpbmcgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBpZiAoIWlzTmFOKHZhbCBhcyB1bmtub3duIGFzIG51bWJlcikpIHtcclxuICAgICAgICAgICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID0gcGFyc2VGbG9hdCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWwgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsID09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHAuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgIHAuYXBwZW5kKGlucHV0KTtcclxuICAgICAgbGlzdC5hcHBlbmQocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCgpIHtcclxuICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqZWN0c19saXN0XCIpO1xyXG4gIGxpc3QudGV4dENvbnRlbnQgPSAnJztcclxuICBpZiAoZy5nZXRSb29tKCkpIHtcclxuICAgIGZvciAobGV0IG9iaiBvZiBnLmdldFJvb20oKS5vYmplY3RzLnNsaWNlKCkucmV2ZXJzZSgpKSB7XHJcbiAgICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIHBhcmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUob2JqLmNvbnN0cnVjdG9yLm5hbWUpKTtcclxuICAgICAgcGFyYS5jbGFzc0xpc3QuYWRkKFwib2JqZWN0X2xpc3RfaXRlbVwiKTtcclxuICAgICAgcGFyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50ID09IDxvYmo+b2JqKSB7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCAoPG9iaj5vYmopLnN0YXRlLnBvc2l0aW9uKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudCA9IDxvYmo+b2JqO1xyXG4gICAgICAgICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBsaXN0LmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9wcmVmYWJzKCkge1xyXG4gIGxldCBwcmVzID0gT2JqZWN0LmtleXMocHJlZmFicykubWFwKGFzeW5jIChvOiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBhID0gPG9iaj4obmV3IHByZWZhYnNbb10oe1xyXG4gICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgIHZlbG9jaXR5OiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgIHNjYWxpbmc6IHsgd2lkdGg6IDEsIGhlaWdodDogMSB9XHJcbiAgICB9KSk7XHJcbiAgICBhd2FpdCBhLmxvYWQoKTtcclxuICAgIGEucmVuZGVyID0gdHJ1ZTtcclxuICAgIGxldCBvYmpzID0gYS5jb21iaW5lZE9iamVjdHMoKTtcclxuICAgIGZvciAobGV0IG9iaiBvZiBvYmpzKSB7XHJcbiAgICAgIG9iai5VbmJpbmRBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmlsdGVyZWQgPSBvYmpzLmZpbHRlcigoYSkgPT4gYS5yZW5kZXIpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJlZmFiOiBwcmVmYWJzW29dLFxyXG4gICAgICBuYW1lOiBhLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgIHJlbmRlcmVkOiBmaWx0ZXJlZC5tYXAoKG8pID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogby5jb25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICAgICAgcmVuZGVyOiBvLnJlbmRlcmYoMClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICB9KVxyXG4gIGxldCBhID0gYXdhaXQgUHJvbWlzZS5hbGwocHJlcyk7XHJcblxyXG4gIGxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWZhYl90YXJnZXRcIik7XHJcbiAgdGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgZm9yIChsZXQgcHJlZmFiIG9mIGEpIHtcclxuXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXJhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByZWZhYi5uYW1lKSk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcmVmYWIucmVuZGVyZWRbMF0ucmVuZGVyKSkge1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGRpdi5hcHBlbmQocHJlZmFiLnJlbmRlcmVkWzBdLnJlbmRlci5zcHJpdGUuc3ByaXRlX3NoZWV0KTtcclxuICAgIH1cclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJlZmFiX2JveFwiKTtcclxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IHZhbCA9IHtcclxuICAgICAgICBwb3NpdGlvbjogeyB4OiBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCwgeTogZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgfSxcclxuICAgICAgICB2ZWxvY2l0eTogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgICAgc2NhbGluZzogeyB3aWR0aDogMSwgaGVpZ2h0OiAxIH1cclxuICAgICAgfTtcclxuICAgICAgbGV0IG9iaiA9IDxvYmo+KG5ldyBwcmVmYWIucHJlZmFiKHZhbCkpO1xyXG4gICAgICBhd2FpdCBnLnN0YXRlLmN1cnJlbnRfcm9vbS5hZGRJdGVtcyhvYmouY29tYmluZWRPYmplY3RzKCkpO1xyXG4gICAgfSk7XHJcbiAgICB0YXJnZXQuYXBwZW5kKGRpdik7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgZGVidWdfYWN0aW9uIHtcclxuICBwcm9wZXJ0eTogc3RyaW5nLFxyXG4gIG9sZDogc3RyaW5nLFxyXG4gIG5ldzogc3RyaW5nLFxyXG4gIGVsZW1lbnQ6IG9ialxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGRlYnVnX3ZhcnMge1xyXG4gIHRhcmdldDogSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgY2FtZXJhOiBDYW1lcmEsXHJcbiAgbGFzdF9jbGlja2VkOiBIVE1MRWxlbWVudCxcclxuICBzZWxlY3RlZF9lbGVtZW50X2luaXRpYWxfc2NhbGluZzogZGltZW5zaW9ucyxcclxuICBzZWxlY3RlZF9lbGVtZW50OiBvYmosXHJcbiAgc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQ6IFZlY3RvcixcclxuICByb3RhdGlvbl9lbGVtZW50OiBvYmosXHJcbiAgc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50OiBvYmosXHJcbiAgbWlkZGxlX3Bvc2l0aW9uOiBWZWN0b3IsXHJcbiAgY2xpY2tfcG9zaXRpb246IFZlY3RvcixcclxuICBhY3Rpb25zX3N0YWNrOiBkZWJ1Z19hY3Rpb25bXSxcclxuICBjdXJyZW50X2FjdGlvbjogZGVidWdfYWN0aW9uLFxyXG4gIHJlbmRlcl9kZWx0YV90aW1lOm51bWJlclxyXG59XHJcblxyXG5leHBvcnQgbGV0IGRlYnVnX3N0YXRlOiBkZWJ1Z192YXJzO1xyXG5cclxuZXhwb3J0IGxldCBkZWJ1Z19zZXR1cCA9ICgpID0+IHtcclxuICBkZWJ1Z19zdGF0ZSA9IHtcclxuICAgIHRhcmdldDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z190YXJnZXRcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgICBjYW1lcmE6IG5ldyBDYW1lcmEoe1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwLFxyXG4gICAgICBkaW1lbnNpb25zOiB7XHJcbiAgICAgICAgaGVpZ2h0OiB2aWV3cG9ydC5oZWlnaHQsXHJcbiAgICAgICAgd2lkdGg6IHZpZXdwb3J0LndpZHRoXHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxpbmc6IDEsXHJcbiAgICAgIGRlYnVnOiB0cnVlXHJcbiAgICB9XHJcbiAgICAgICwge1xyXG4gICAgICAgIHg6IDEsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgfSksXHJcbiAgICBsYXN0X2NsaWNrZWQ6IHVuZGVmaW5lZCxcclxuICAgIHNlbGVjdGVkX2VsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgIHNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0OiB1bmRlZmluZWQsXHJcbiAgICByb3RhdGlvbl9lbGVtZW50OiB1bmRlZmluZWQsXHJcbiAgICBtaWRkbGVfcG9zaXRpb246IHVuZGVmaW5lZCxcclxuICAgIGNsaWNrX3Bvc2l0aW9uOiB1bmRlZmluZWQsXHJcbiAgICBzZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgIHNlbGVjdGVkX2VsZW1lbnRfaW5pdGlhbF9zY2FsaW5nOiB7IHdpZHRoOiAxLCBoZWlnaHQ6IDEgfSxcclxuICAgIGFjdGlvbnNfc3RhY2s6IFtdLFxyXG4gICAgcmVuZGVyX2RlbHRhX3RpbWU6MCxcclxuICAgIGN1cnJlbnRfYWN0aW9uOiB1bmRlZmluZWRcclxuICB9XHJcbiAgZGVidWdfc3RhdGUuY2FtZXJhLmh1ZCA9IG5ldyBEZWJ1Z19odWQoKTtcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJtb3VzZTBkb3duXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiAwLFxyXG4gICAgZnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgaWYgKGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQpIHtcclxuICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSwgZGVidWdfc3RhdGUudGFyZ2V0KTtcclxuICAgICAgICBpZighbW91c2Upe1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlYnVnX3N0YXRlLmNsaWNrX3Bvc2l0aW9uID0gbW91c2U7XHJcbiAgICAgICAgbGV0IGFsTF9jbGlja2VkID0gZy5nZXRSb29tKCkuY2hlY2tPYmplY3RzUG9pbnQobW91c2UpO1xyXG4gICAgICAgIGxldCBjbGlja2VkO1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZCA9IGFsTF9jbGlja2VkLmZpbHRlcigoZWxlKSA9PiBlbGUgPT0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50KVxyXG4gICAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjbGlja2VkID0gZmlsdGVyZWRbMF1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjbGlja2VkID0gYWxMX2NsaWNrZWRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjbGlja2VkKSB7XHJcbiAgICAgICAgICBpZiAoaGVsZF9rZXlzW1wiQ29udHJvbExlZnRcIl0pIHtcclxuICAgICAgICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudDogY2xpY2tlZCxcclxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJzY2FsaW5nXCIsXHJcbiAgICAgICAgICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShjbGlja2VkLnN0YXRlLnNjYWxpbmcpLFxyXG4gICAgICAgICAgICAgIG5ldzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbiA9IHtcclxuICAgICAgICAgICAgICBlbGVtZW50OiBjbGlja2VkLFxyXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcInBvc2l0aW9uXCIsXHJcbiAgICAgICAgICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShjbGlja2VkLnN0YXRlLnBvc2l0aW9uKSxcclxuICAgICAgICAgICAgICBuZXc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQgPSBjbGlja2VkO1xyXG4gICAgICAgICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpXHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50ID0gY2xpY2tlZDtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnRfaW5pdGlhbF9zY2FsaW5nID0gY2xpY2tlZC5zdGF0ZS5zY2FsaW5nO1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQgPSB7XHJcbiAgICAgICAgICAgIHg6IG1vdXNlLnggLSBjbGlja2VkLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IG1vdXNlLnkgLSBjbGlja2VkLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTogZGVidWdfc3RhdGUuY2FtZXJhXHJcbiAgfSk7XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwibW91c2UxdXBcIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDUsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5taWRkbGVfcG9zaXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2UsXHJcbiAgICBjYW1lcmE6IGRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIm1vdXNlMWRvd25cIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDYsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSwgZGVidWdfc3RhdGUudGFyZ2V0KTtcclxuICAgICAgaWYoIW1vdXNlKXtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5taWRkbGVfcG9zaXRpb24gPSBtb3VzZTtcclxuICAgIH0sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTogZGVidWdfc3RhdGUuY2FtZXJhXHJcbiAgfSk7XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwibW91c2UwdXBcIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDEsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBpZiAoZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5wcm9wZXJ0eSA9PSBcInNjYWxpbmdcIikge1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ubmV3ID0gSlNPTi5zdHJpbmdpZnkoZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5zY2FsaW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5wcm9wZXJ0eSA9PSBcInBvc2l0aW9uXCIpIHtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uLm5ldyA9IEpTT04uc3RyaW5naWZ5KCg8b2JqX3N0YXRlPmRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUpLnBvc2l0aW9uKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpXHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2UsXHJcbiAgICBjYW1lcmE6IGRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIm1vdXNlMmRvd25cIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDMsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBpZiAoZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCkge1xyXG4gICAgICAgIGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZGVidWdfc3RhdGUuY2FtZXJhLCBkZWJ1Z19zdGF0ZS50YXJnZXQpO1xyXG4gICAgICAgIGlmKCFtb3VzZSl7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNsaWNrZWQgPSBnLmdldFJvb20oKS5jaGVja09iamVjdHNQb2ludChtb3VzZSlbMF1cclxuICAgICAgICBpZiAoY2xpY2tlZCkge1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCA9IGNsaWNrZWQ7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbiA9IHtcclxuICAgICAgICAgICAgZWxlbWVudDogZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCxcclxuICAgICAgICAgICAgcHJvcGVydHk6IFwicm90YXRpb25cIixcclxuICAgICAgICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50LnN0YXRlLnJvdGF0aW9uKSxcclxuICAgICAgICAgICAgbmV3OiB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTogZGVidWdfc3RhdGUuY2FtZXJhXHJcbiAgfSk7XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwibW91c2UydXBcIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDQsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5uZXcgPSBKU09OLnN0cmluZ2lmeShkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50LnN0YXRlLnJvdGF0aW9uKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24pO1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgY2FtZXJhOiBkZWJ1Z19zdGF0ZS5jYW1lcmFcclxuICB9KTtcclxuXHJcbiAgbGV0IGxlZnRfZnVuYyA9ICgpID0+IHtcclxuICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMSA6IDA7XHJcbiAgICBpZiAoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggLSAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMSAvIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgfTtcclxuICBsZXQgcmlnaHRfZnVuYyA9ICgpID0+IHtcclxuICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMSA6IDA7XHJcbiAgICBpZiAoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMSAvIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgfTtcclxuICBsZXQgZG93bl9mdW5jID0gKCkgPT4ge1xyXG4gICAgbGV0IHNoaWZ0X2hlbGQgPSBoZWxkX2tleXNbXCJTaGlmdExlZnRcIl0gPyAxIDogMDtcclxuXHJcbiAgICBpZiAoIWhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55IC0gKCg1ICsgc2hpZnRfaGVsZCAqIDUpICogKDEgLyBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIH07XHJcbiAgbGV0IHVwX2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDEgOiAwO1xyXG4gICAgaWYgKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ICsgKCg1ICsgc2hpZnRfaGVsZCAqIDUpICogKDEgLyBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIH07XHJcbiAgbGV0IHNjcm9sbF91cCA9ICgpID0+IHtcclxuICAgIGlmIChkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIiAmJiBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyA8IDAuMDUpXHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyAwLjAxO1xyXG4gICAgZWxzZSBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIilcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyArIDAuMDU7XHJcbiAgfVxyXG4gIGxldCBzYXZlX2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBsZXQgY3RybF9oZWxkID0gaGVsZF9rZXlzW1wiQ29udHJvbExlZnRcIl07XHJcbiAgICBpZiAoY3RybF9oZWxkICYmIFBBVVNFRCkge1xyXG4gICAgICBsZXQgbmFtZSA9IGcuZ2V0Um9vbSgpLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgIGxldCBhID0gcGF0aC5qb2luKGAke3Byb2plY3RfcGF0aH1gLCBgLi4vcm9vbXMvJHtuYW1lfS5qc29uYCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhhLCBKU09OLnN0cmluZ2lmeShnLmdldFJvb20oKS5leHBvcnRTdGF0ZUNvbmZpZygpKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIFdSSVRJTkcgUk9PTSBJTkZPIEZJTEUuXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGFsZXJ0KFwiU2F2ZWRcIik7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY3RybF9oZWxkICYmICFQQVVTRUQpIHtcclxuICAgICAgYWxlcnQoXCJwYXVzZSB0byBlbmFibGUgc2F2aW5nLlwiKVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgc2Nyb2xsX2Rvd24gPSAoKSA9PiB7XHJcbiAgICBpZiAoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIgJiYgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPiAwLjA1KVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nIC0gMC4wNTtcclxuICAgIGVsc2UgaWYgKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiICYmIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nID4gMC4wMSlcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyAtIDAuMDE7XHJcbiAgfVxyXG4gIGxldCB1bmRvX2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBpZiAoaGVsZF9rZXlzW1wiQ29udHJvbExlZnRcIl0pIHtcclxuICAgICAgbGV0IGN1cnI6IGRlYnVnX2FjdGlvbiA9IGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucG9wKCk7XHJcbiAgICAgIGlmIChjdXJyKSB7XHJcbiAgICAgICAgaWYgKGN1cnIucHJvcGVydHkgPT0gXCJwb3NpdGlvblwiKSB7XHJcbiAgICAgICAgICBjdXJyLmVsZW1lbnQuc3RhdGUucG9zaXRpb24gPSBKU09OLnBhcnNlKGN1cnIub2xkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY3Vyci5wcm9wZXJ0eSA9PT0gXCJyb3RhdGlvblwiKSB7XHJcbiAgICAgICAgICBjdXJyLmVsZW1lbnQuc3RhdGUucm90YXRpb24gPSBKU09OLnBhcnNlKGN1cnIub2xkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY3Vyci5wcm9wZXJ0eSA9PT0gXCJzY2FsaW5nXCIpIHtcclxuICAgICAgICAgIGN1cnIuZWxlbWVudC5zdGF0ZS5zY2FsaW5nID0gSlNPTi5wYXJzZShjdXJyLm9sZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleUFcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlBXCIsIGxlZnRfZnVuYywgZXhlY190eXBlLnJlcGVhdCwgMSksXHJcbiAgICBmdW5jdGlvbjogbGVmdF9mdW5jLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLnJlcGVhdFxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwiS2V5RFwiLFxyXG4gICAgdHlwZTogYnR5cGUua2V5Ym9hcmQsXHJcbiAgICBpZDogQmluZChcIktleURcIiwgcmlnaHRfZnVuYywgZXhlY190eXBlLnJlcGVhdCwgMSksXHJcbiAgICBmdW5jdGlvbjogcmlnaHRfZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5yZXBlYXRcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleVdcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlXXCIsIHVwX2Z1bmMsIGV4ZWNfdHlwZS5yZXBlYXQsIDEpLFxyXG4gICAgZnVuY3Rpb246IHVwX2Z1bmMsXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUucmVwZWF0XHJcbiAgfSlcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJLZXlTXCIsXHJcbiAgICB0eXBlOiBidHlwZS5rZXlib2FyZCxcclxuICAgIGlkOiBCaW5kKFwiS2V5U1wiLCBkb3duX2Z1bmMsIGV4ZWNfdHlwZS5yZXBlYXQsIDEpLFxyXG4gICAgZnVuY3Rpb246IGRvd25fZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5yZXBlYXRcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcInNjcm9sbHVwXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiBCaW5kKFwic2Nyb2xsdXBcIiwgc2Nyb2xsX3VwLCBleGVjX3R5cGUub25jZSwgMSksXHJcbiAgICBmdW5jdGlvbjogc2Nyb2xsX3VwLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2VcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcInNjcm9sbGRvd25cIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IEJpbmQoXCJzY3JvbGxkb3duXCIsIHNjcm9sbF9kb3duLCBleGVjX3R5cGUub25jZSwgMSksXHJcbiAgICBmdW5jdGlvbjogc2Nyb2xsX2Rvd24sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZVxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwiS2V5U1wiLFxyXG4gICAgdHlwZTogYnR5cGUua2V5Ym9hcmQsXHJcbiAgICBpZDogQmluZChcIktleVNcIiwgc2F2ZV9mdW5jLCBleGVjX3R5cGUub25jZSwgMSksXHJcbiAgICBmdW5jdGlvbjogc2F2ZV9mdW5jLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2VcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleVpcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlaXCIsIHVuZG9fZnVuYywgZXhlY190eXBlLm9uY2UsIDEpLFxyXG4gICAgZnVuY3Rpb246IHVuZG9fZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlXHJcbiAgfSlcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgPSBlLnRhcmdldDtcclxuICAgIH1cclxuICB9KVxyXG4gIGxldCBwYXVzZV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlX2J1dHRvblwiKVxyXG4gIHBhdXNlX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIHNldFBhdXNlZCghUEFVU0VEKTtcclxuICAgIGlmIChQQVVTRUQpIHtcclxuICAgICAgcGF1c2VfYnV0dG9uLmlubmVySFRNTCA9IFwiVU5QQVVTRVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHBhdXNlX2J1dHRvbi5pbm5lckhUTUwgPSBcIlBBVVNFXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgbGV0IG9ial9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19vYmplY3RfYnV0dG9uXCIpO1xyXG4gIGxldCByb29tX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Jvb21fYnV0dG9uXCIpO1xyXG4gIHJvb21fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGZpbGVfcGF0aCA9IGlwY1JlbmRlcmVyLnNlbmRTeW5jKCdvYmplY3QtcGF0aC1yZXF1ZXN0JywgXCJyb29tc1wiKTtcclxuICAgIGlmIChmaWxlX3BhdGgpIHtcclxuICAgICAgbGV0IGZ1bGxfbmFtZSA9IHBhdGgucGFyc2UoZmlsZV9wYXRoKS5iYXNlO1xyXG4gICAgICBsZXQgbmV3X25hbWUgPSBmdWxsX25hbWUuc3Vic3RyKDAsIGZ1bGxfbmFtZS5sZW5ndGggLSAzKTtcclxuICAgICAgbGV0IHBhdGhfdG9fd3JpdGUgPSBwYXRoLmpvaW4oYCR7ZmlsZV9wYXRofWAsIFwiLi5cIiwgbmV3X25hbWUgKyBcIi50c1wiKTtcclxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoX3RvX3dyaXRlLCByb29tX3RlbXBsYXRlLnNwbGl0KFwidGVtcGxhdGVcIikuam9pbihuZXdfbmFtZSkpO1xyXG5cclxuICAgICAgcGF0aF90b193cml0ZSA9IHBhdGguam9pbihgJHtmaWxlX3BhdGh9YCwgXCIuLlwiLCBuZXdfbmFtZSArIFwiLmpzb25cIik7XHJcblxyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGhfdG9fd3JpdGUsIGBcclxuICAgIHtcclxuICAgICAgXCJvYmplY3RzXCI6W11cclxuICAgIH1cclxuICAgIGApXHJcbiAgICB9XHJcbiAgfSlcclxuICBvYmpfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGZpbGVfcGF0aCA9IGlwY1JlbmRlcmVyLnNlbmRTeW5jKCdvYmplY3QtcGF0aC1yZXF1ZXN0JywgXCJvYmplY3RzXCIpO1xyXG4gICAgaWYgKGZpbGVfcGF0aCkge1xyXG4gICAgICBsZXQgZnVsbF9uYW1lID0gcGF0aC5wYXJzZShmaWxlX3BhdGgpLmJhc2U7XHJcbiAgICAgIGxldCBuZXdfbmFtZSA9IGZ1bGxfbmFtZS5zdWJzdHIoMCwgZnVsbF9uYW1lLmxlbmd0aCAtIDMpO1xyXG4gICAgICBsZXQgcGF0aF90b193cml0ZSA9IHBhdGguam9pbihgJHtmaWxlX3BhdGh9YCwgXCIuLlwiLCBuZXdfbmFtZSArIFwiLnRzXCIpO1xyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGhfdG9fd3JpdGUsb2JqZWN0X3RlbXBsYXRlLnNwbGl0KFwidGVtcGxhdGVcIikuam9pbihuZXdfbmFtZSkpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG59IiwiaW1wb3J0IHtvYmp9IGZyb20gXCIuL29iamVjdFwiO1xyXG5cclxuaW50ZXJmYWNlIEh1ZFRleHRHZXRGdW5je1xyXG4gICgpOnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRTZXR0aW5ne1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyLFxyXG4gIGZvbnQ6Rm9udFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvbnR7XHJcbiAgbWF4X3dpZHRoPzpudW1iZXIsXHJcbiAgc2l6ZTpudW1iZXIsXHJcbiAgZm9udDpzdHJpbmcsXHJcbiAgY29sb3I6c3RyaW5nLFxyXG4gIHRleHQ6c3RyaW5nLFxyXG4gIGFsaWduOkNhbnZhc1RleHRBbGlnblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRfTm9kZXtcclxuICBtYXhfd2lkdGg/Om51bWJlcixcclxuICBwb3NpdGlvbjp7XHJcbiAgICB4Om51bWJlcixcclxuICAgIHk6bnVtYmVyXHJcbiAgfVxyXG4gIHNpemU6bnVtYmVyO1xyXG4gIHNjYWxpbmc6bnVtYmVyO1xyXG4gIGZvbnQ6c3RyaW5nO1xyXG4gIGNvbG9yOnN0cmluZztcclxuICB0ZXh0PzpzdHJpbmc7XHJcbiAgYWxpZ24/OkNhbnZhc1RleHRBbGlnbjtcclxufVxyXG5leHBvcnQgY2xhc3MgSFVEe1xyXG4gIGdyYXBoaWNfZWxlbWVudHM6b2JqW10gPSBbXTtcclxuICB0ZXh0X2VsZW1lbnRzOkFycmF5PFRleHQ+ID0gW107XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMudGV4dF9lbGVtZW50cy5wdXNoKC4uLnRoaXMuc2V0VGV4dEVsZW1lbnRzKCkpO1xyXG4gICAgdGhpcy5ncmFwaGljX2VsZW1lbnRzLnB1c2goLi4udGhpcy5zZXRHcmFwaGljRWxlbWVudHMoKSk7IFxyXG4gIH1cclxuICBzdGF0ZWYoYTpudW1iZXIpe1xyXG4gICAgZm9yKGxldCB4IG9mIHRoaXMuZ3JhcGhpY19lbGVtZW50cyl7XHJcbiAgICAgIHguc3RhdGVmKGEpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCB4IG9mIHRoaXMudGV4dF9lbGVtZW50cyl7XHJcbiAgICAgIHguc3RhdGVmKGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRUZXh0RWxlbWVudHMoKTpUZXh0W117XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIHNldEdyYXBoaWNFbGVtZW50cygpOm9ialtde1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR7XHJcbiAgZ2V0RnVuYzpIdWRUZXh0R2V0RnVuYztcclxuICBzdGF0ZTpUZXh0X05vZGU7XHJcbiAgY29uc3RydWN0b3Iobm9kZTpUZXh0X05vZGUsZ2V0RnVuYzpIdWRUZXh0R2V0RnVuYyl7XHJcbiAgICBpZighbm9kZS5hbGlnbil7XHJcbiAgICAgIG5vZGUuYWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IG5vZGU7XHJcbiAgICBpZighdGhpcy5zdGF0ZS50ZXh0KXtcclxuICAgICAgdGhpcy5zdGF0ZS50ZXh0ID0gXCJcIjtcclxuICAgIH1cclxuICAgIHRoaXMuZ2V0RnVuYyA9IGdldEZ1bmM7XHJcbiAgfVxyXG4gIHN0YXRlZihhOm51bWJlcil7XHJcbiAgIHRoaXMuc3RhdGUudGV4dCA9IHRoaXMuZ2V0RnVuYygpO1xyXG4gIH1cclxuICByZW5kZXJmKGE6bnVtYmVyKTpGb250e1xyXG4gICAgbGV0IHtzaXplLGNvbG9yLGZvbnQsdGV4dCxtYXhfd2lkdGgsYWxpZ259ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNpemUsXHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBmb250LFxyXG4gICAgICB0ZXh0LFxyXG4gICAgICBtYXhfd2lkdGgsXHJcbiAgICAgIGFsaWduXHJcbiAgICB9O1xyXG4gIH1cclxufSIsImltcG9ydCB7VmVjdG9yfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERpc3RhbmNlKGE6VmVjdG9yLGI6VmVjdG9yKXtcclxuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGEueCAtIGIueCwyKSArIE1hdGgucG93KGEueSAtIGIueSwyKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kSW50KG1pbjpudW1iZXIsIG1heDpudW1iZXIpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKSArIG1pbjtcclxufSIsImltcG9ydCB7IHN0YXRlX2Z1bmMsIG9ial9zdGF0ZSwgVmVjdG9yLCBkaW1lbnNpb25zIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgcmVuZGVyX2Z1bmMsIHJlbmRlcl90eXBlICxzY2FsZV90eXBlfSBmcm9tIFwiLi9yZW5kZXJcIjtcclxuaW1wb3J0IHsgUGFydGljbGUsIHBvc2l0aW9uZWRfc3ByaXRlLCBzcHJpdGUsIHNwcml0ZV9nZW4gfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgY29sbGlzaW9uX2JveCB9IGZyb20gXCIuL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQgeyBVbmJpbmQsIEJpbmQsIGNvbnRyb2xfZnVuYywgZXhlY190eXBlIH0gZnJvbSBcIi4vY29udHJvbHNcIjtcclxuaW1wb3J0IHthdWRpb30gZnJvbSBcIi4vYXVkaW9cIjtcclxuaW1wb3J0IHtERUJVRywgZGVlcCwgZ2FtZX0gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQgeyBEaXN0YW5jZSB9IGZyb20gXCIuL21hdGhcIjtcclxuaW1wb3J0IHtyb290X3BhdGgscGF0aH0gZnJvbSBcIi4uL2xpYi9kZWJ1Z1wiOyBcclxuXHJcbmludGVyZmFjZSBvYmpfaTxUPiB7XHJcbiAgc3RhdGVmOiBzdGF0ZV9mdW5jPFQ+LFxyXG4gIHJlbmRlcmY6IHJlbmRlcl9mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJZChhOiBvYmpbXSwgaWQ6IHN0cmluZyk6IG9iaiB7XHJcbiAgZm9yIChsZXQgYiA9IDA7IGIgPCBhLmxlbmd0aDsgYisrKSB7XHJcbiAgICBpZiAoYVtiXS5pZCA9PSBpZCkge1xyXG4gICAgICByZXR1cm4gYVtiXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuLy9GaW5kcyB0aGUgc2lkZSBsZW5ndGhzIG9mIGEgdHJpYW5nbGUgaWYgZ2l2ZW4gdGhlICBhbmdsZSAoaW4gZGVncmVlcylcclxuLy9hbG9uZyB3aXRoIHRoZSBsZW5ndGggb2YgdGhlIGh5cG90ZW51c2VcclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uX2xlbmd0aChsZW5ndGg6IG51bWJlciwgZGVncmVlOiBudW1iZXIpIHtcclxuICBsZXQgYV9sZW4gPSBsZW5ndGggKiBNYXRoLnNpbihkZWdyZWUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICBsZXQgYl9sZW4gPSBsZW5ndGggKiBNYXRoLmNvcyhkZWdyZWUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICByZXR1cm4ge1xyXG4gICAgeDogYV9sZW4sXHJcbiAgICB5OiBiX2xlblxyXG4gIH1cclxufVxyXG5cclxuLy9UaGlzIGNvdW50ZXIgdHJhY2tzIHRoZSBnbG9iYWwgbnVtYmVyIG9mIG9iamVjdHMgY3JlYXRlZCBzbyBmYXJcclxuLy9hbiBvYmplY3QncyBpZCAoaWYgbm90IG92ZXJ3cml0dGVuKSB3aWxsIGJlIGEgdW5pcXVlIGludGVnZXIsIHdoaWNoXHJcbi8vdXNlcyB0aGlzIGNvdW50ZXIuXHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcbmludGVyZmFjZSBhbmltX3N0b3JhZ2Uge1xyXG4gIFtpbmRleDogc3RyaW5nXTogW0FycmF5PFtudW1iZXIsIHNwcml0ZV0+LCBudW1iZXJdXHJcbn1cclxuXHJcbmludGVyZmFjZSB2b2lkX2Z1bmMge1xyXG4gICgpOiB2b2lkXHJcbn1cclxuXHJcbmNsYXNzIGFuaW1hdGlvbnMge1xyXG4gIGFuaW1hdGlvbnM6IGFuaW1fc3RvcmFnZSA9IHt9O1xyXG4gIC8vVHJhY2tzIHRoZSB0aW1lIHBhc3NlZCBzaW5jZSB0aGUgY3VycmVudCBhbmltYXRpb25cclxuICAvL2hhcyBzdGFydGVkIHBsYXlpbmdcclxuICBhbmltYXRpb25fdHJhY2tlciA9IDA7XHJcbiAgY3VycmVudDogc3RyaW5nO1xyXG4gIGNhbGxiYWNrOiB2b2lkX2Z1bmM7XHJcbiAgYW5pbWF0aW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuICAvL2RlZmluZXMgYW4gYW5pbWF0aW9uIHRoYXQgY2FuIGJlIHBsYXllZCB1c2luZyB0aGUgcGxheSBtZXRob2RcclxuICAvL3RoZSBrZXlmcmFtZXMgYXJlIGFuIGFycmF5IG9mIHR1cGxlcyBpbiB0aGUgXHJcbiAgLy9mb3JtYXQgb2YgWyh0aW1lIGZvciB0aGlzIHNwcml0ZSB0byBzaG93KSwgc3ByaXRlXVxyXG4gIGFkZChuYW1lOiBzdHJpbmcsIGtleWZyYW1lczogQXJyYXk8W251bWJlciwgc3ByaXRlXT4sIGxlbmd0aDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBba2V5ZnJhbWVzLCBsZW5ndGhdO1xyXG4gIH1cclxuICBwbGF5KG5hbWU6IHN0cmluZywgY2FsbGJhY2s/OiB2b2lkX2Z1bmMpIHtcclxuICAgIHRoaXMuY3VycmVudCA9IG5hbWU7XHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB0aGlzLmFuaW1hdGlvbl90cmFja2VyID0gMDtcclxuICB9XHJcbiAgcmVuZGVyZih0OiBudW1iZXIpOiBzcHJpdGUge1xyXG4gICAgbGV0IGN1cnJfYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25zW3RoaXMuY3VycmVudF1bMF07XHJcbiAgICBsZXQgbGVuZ3RoOiBudW1iZXIgPSB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50XVsxXTtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBmb3IgKDsgaW5kZXggPCBjdXJyX2FuaW1hdGlvbi5sZW5ndGggLSAxOyBpbmRleCsrKSB7XHJcbiAgICAgIGxldCBrZXlmcmFtZV90aW1lID0gY3Vycl9hbmltYXRpb25baW5kZXhdWzBdO1xyXG4gICAgICBsZXQgbmV4dF9rZXlmcmFtZV90aW1lID0gY3Vycl9hbmltYXRpb25baW5kZXggKyAxXVswXTtcclxuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPj0ga2V5ZnJhbWVfdGltZSAmJiB0aGlzLmFuaW1hdGlvbl90cmFja2VyIDwgbmV4dF9rZXlmcmFtZV90aW1lKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciA9IHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgKyB0O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICAvL1JldHVybnMgdGhlIHJhdyBzcHJpdGUgdGhhdCdzIGNvcnJlY3QgdG8gc2hvdyBhdCB0aGlzIHRpbWVcclxuICAgICAgICByZXR1cm4gY3Vycl9hbmltYXRpb25baW5kZXhdWzFdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25fdHJhY2tlciA+PSBsZW5ndGgpIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciA9IDA7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciArPSB0O1xyXG4gICAgfVxyXG4gICAgLy9SZXR1cm5zIHRoZSBsYXN0IGFwcHJvcHJpYXRlIGZyYW1lIHVudGlsIHRoZSBhbmltYXRpb24gaXMgb3Zlci5cclxuICAgIHJldHVybiBjdXJyX2FuaW1hdGlvbltpbmRleF1bMV07XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgaGl0Ym94e1xyXG4gIHdpZHRoOm51bWJlcixcclxuICBoZWlnaHQ6bnVtYmVyLFxyXG4gIHhfb2Zmc2V0Om51bWJlcixcclxuICB5X29mZnNldDpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwYXJhbXN7XHJcbiAgW2luZGV4OnN0cmluZ106Ym9vbGVhbnxzdHJpbmd8bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYm91bmRpbmdfYm94e1xyXG4gIGJvdHRvbV9sZWZ0OlZlY3RvcixcclxuICB0b3BfcmlnaHQ6VmVjdG9yXHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBvYmp7XHJcbiAgLy9VcmwgdG8gdGhlIG9iamVjdCdzIGluZGl2aWR1YWwgc3ByaXRlLCBvciBhbGwgb2YgaXRzIHNwcml0ZXNcclxuICAvL2J1bmRsZWQgaW50byBhIHNwcml0ZXNoZWV0XHJcbiAgc3ByaXRlX3VybCA9IFwiXCI7XHJcbiAgLy9UaGlzIGlzIHRoZSBsb2FkZWQgc3ByaXRlL3Nwcml0ZXNoZWV0IG9mIHRoZSBvYmplY3RcclxuICAvL3doaWNoIGlzIGZldGNoZWQgZnJvbSB0aGUgdXJsIGFib3ZlXHJcbiAgc3ByaXRlX3NoZWV0OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIHN0YXRlOiBvYmpfc3RhdGU7XHJcbiAgcmVuZGVyX3R5cGUgPSByZW5kZXJfdHlwZS5zcHJpdGU7XHJcbiAgLy9UaGVzZSBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgYWN0dWFsIG9iamVjdCdzIHNwcml0ZSBoZWlnaHQgYW5kIHdpZHRoXHJcbiAgLy9JZiB1c2luZyBhIHNwcml0ZSBzaGVldCwgdGhlc2UgYmUgb25lIHNwcml0ZSdzIGhlaWdodCBhbmQgd2lkdGguXHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBcclxuICBjb2xsaXNpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBoaXRib3g6IGhpdGJveFxyXG4gIGlkOiBzdHJpbmc7XHJcbiAgLy9BcnJheSBvZiBiaW5kIGlkc1xyXG4gIC8vQmluZHMgYXJlIGluZGVudGlmaWVkIGJ5IGEgdW5pcXVlIG51bWJlciB0aGF0IGlzIHJldHVybiB3aGVuXHJcbiAgLy9UaGUgYmluZCBpcyBjcmVhdGVkLiBXZSBtdXN0IHN0b3JlIHRoZXNlIGlkcyBpbiBvcmRlciB0byBcclxuICAvL2RlbGV0ZSB0aGUgYmluZHMgd2hlbiB0aGV5IGFyZSBtYW51YWxseSB1bmJvdW5kLCBvciB0aGUgb2JqZWN0IGlzIGRlbGV0ZWQuXHJcbiAgYmluZHM6IEFycmF5PG51bWJlcj47XHJcbiAgdGFnczpzdHJpbmdbXSA9IFtdO1xyXG4gIC8vdGFncyBhcmUgdXNlZCB0byBleGNsdWRlIG9yIGluY2x1ZGUgb2JqZWN0cyB3aGVuIGNoZWNraW5nIGZvciBjb2xsaXNpb25zLFxyXG4gIC8vYW5kIGZvciBvYmplY3QgaWRlbnRpZmljYXRpb24gLyBjbGFzc2lmaWNhdGlvbiBpbiBzY3JpcHRzXHJcbiAgcmVuZGVyID0gdHJ1ZTtcclxuICBhbmltYXRpb25zID0gbmV3IGFuaW1hdGlvbnMoKTtcclxuICBhdWRpbyA9IG5ldyBhdWRpbygpO1xyXG4gIC8vTGFzdCByZW5kZXIgdGltZSwgdXNlZCB0byBjYWxjdWxhdGUgZGVsdGFfdGltZVxyXG4gIGxhc3RfcmVuZGVyOm51bWJlciA9IDA7XHJcbiAgZ2FtZTpnYW1lPHVua25vd24+O1xyXG4gIHBhcmVudDpjb21wb3NpdGVfb2JqO1xyXG4gIC8vUGFyYW1zIGFyZSBvcHRpb25zIGZvciB0aGUgb2JqZWN0LCB0aGF0IGRvIG5vdCByZWx5IG9uIHN0YXRlXHJcbiAgLy8gRm9yIGV4YW1wbGUsIHRoZSBzaWRlIG9mIGEgcGllY2UgaW4gY2hlc3MuXHJcbiAgcGFyYW1zOnVua25vd24gPSB7fTtcclxuICBsYXllcjpudW1iZXIgPSAxO1xyXG4gIHNhdmVfdG9fZmlsZTpib29sZWFuID0gdHJ1ZTtcclxuICB0aWNrX3N0YXRlID0gdHJ1ZTtcclxuICBzY2FsZV90eXBlID0gc2NhbGVfdHlwZS5ncm93O1xyXG4gIHN0YXRpYyBkZWZhdWx0X3BhcmFtczp1bmtub3duID0ge307XHJcbiAgb3BhY2l0eTpudW1iZXIgPSAxO1xyXG4gIGdldFN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgfVxyXG4gIC8vQW5pbWF0aW9ucyBzaG91bGQgYmUgcmVnaXN0ZXJlZCB1c2luZyB0aGlzLmFuaW1hdGlvbnMuYWRkIGluIHRoaXMgbWV0aG9kXHJcbiAgcmVnaXN0ZXJBbmltYXRpb25zKCkge1xyXG5cclxuICB9XHJcbiAgLy9Tb3VuZHMgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgdXNpbmcgdGhpcy5hdWRpby5hZGQgaW4gdGhpcyBtZXRob2QuXHJcbiAgcmVnaXN0ZXJBdWRpbygpIHtcclxuXHJcbiAgfVxyXG4gIGRlZmF1bHRQYXJhbXMoKTp1bmtub3due1xyXG4gICAgcmV0dXJuIGRlZXAodGhpcy5kZWZhdWx0UGFyYW1zKTtcclxuICB9XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtcyA9IG9iai5kZWZhdWx0X3BhcmFtcykge1xyXG4gICAgXHJcbiAgICB0aGlzLmlkID0gXCJcIiArIGNvdW50ZXI7XHJcbiAgICB0aGlzLmJpbmRzID0gW107XHJcbiAgICBjb3VudGVyKys7XHJcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcclxuICAgIHRoaXMucmVnaXN0ZXJDb250cm9scygpO1xyXG4gICAgdGhpcy5yZWdpc3RlckF1ZGlvKCk7XHJcbiAgICAvL0NyZWF0ZXMgYSBjb3B5IG9mIHRoZSBwYXNzZWQgaW4gaW5pdGlhbCBzdGF0ZSB0byBhdm9pZCBcclxuICAgIC8vVXBkYXRpbmcgdGhlIHNhdmVkIHN0YXRlIG9mIHRoZSByb29tXHJcbiAgICB0aGlzLnN0YXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xyXG4gICAgXHJcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcclxuICB9XHJcbiAgbG9hZCgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgYSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBsZXQgcCA9IHRoaXMuc3ByaXRlX3VybDtcclxuICAgICAgaWYoREVCVUcpe1xyXG4gICAgICAgIHAgPSBwYXRoLmpvaW4ocm9vdF9wYXRoLHRoaXMuc3ByaXRlX3VybCk7XHJcbiAgICAgIH1cclxuICAgICAgYS5zcmMgPSBwO1xyXG4gICAgICBhLm9ubG9hZCA9IChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgX3RoaXMuc3ByaXRlX3NoZWV0ID0gYTtcclxuICAgICAgICBfdGhpcy5yZWdpc3RlckFuaW1hdGlvbnMoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmF1ZGlvLmxvYWQoKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICB9XHJcbiAgLy9XaXRoaW4gbm9ybWFsIG9iamVjdHMsIHRoaXMganVzdCByZXR1cm5zIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIG9iamVjdC5cclxuICAvL1RoaXMgbWV0aG9kIGlzIG92ZXJ3cml0dGVuIGJ5IGNvbXBvc2l0ZSBvYmplY3RzLCB3aGljaCByZXR1cm5zIGV2ZXJ5IG9iamVjdFxyXG4gIC8vdGhhdCB0aGUgY29tcG9zaXRlIG9iamVjdCBjb250YWlucy4gVGhpcyBzaW1wbGlmaWVzIHRoZSBiYWNrZW5kIHdvcmssIGFzIGVhY2hcclxuICAvL29iamVjdCByZXR1cm5zIGFuIGFycmF5IG9mIGF0bGVhc3Qgb25lIG9iamVjdC5cclxuICBjb21iaW5lZE9iamVjdHMoKTpvYmpbXXtcclxuICAgIHJldHVybiBbdGhpc107XHJcbiAgfVxyXG4gIGdldEJvdW5kaW5nQm94KCk6Ym91bmRpbmdfYm94e1xyXG4gICAgbGV0IGNvbGxfYm94ID0gdGhpcy5nZXRGdWxsQ29sbGlzaW9uQm94KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b3BfcmlnaHQ6e1xyXG4gICAgICAgIHg6Y29sbF9ib3gueCArIGNvbGxfYm94LndpZHRoLzIsXHJcbiAgICAgICAgeTpjb2xsX2JveC55ICsgY29sbF9ib3guaGVpZ2h0LzJcclxuICAgICAgfSxcclxuICAgICAgYm90dG9tX2xlZnQ6e1xyXG4gICAgICAgIHg6Y29sbF9ib3gueCAtIGNvbGxfYm94LndpZHRoLzIsXHJcbiAgICAgICAgeTpjb2xsX2JveC55IC0gY29sbF9ib3guaGVpZ2h0LzJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvL0Rpc3RhbmNlIGZyb20gb25lIG9iamVjdCB0byBhbm90aGVyLlxyXG4gIGRpc3RhbmNlKHRhcmdldDpvYmopOm51bWJlcntcclxuICAgIHJldHVybiBEaXN0YW5jZSh0aGlzLnN0YXRlLnBvc2l0aW9uLHRhcmdldC5zdGF0ZS5wb3NpdGlvbik7XHJcbiAgfVxyXG4gIGFwcGx5Rm9yY2UodmVsOlZlY3Rvcil7XHJcbiAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggKz0gdmVsLng7XHJcbiAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgKz0gdmVsLnk7XHJcbiAgfVxyXG4gIGFuZ2xlVG93YXJkcyhhOiBvYmopOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5nbGVUb3dhcmRzUG9pbnQoYS5zdGF0ZS5wb3NpdGlvbik7XHJcbiAgfVxyXG4gIGFuZ2xlVG93YXJkc1BvaW50KHRhcmdldDpWZWN0b3IpOm51bWJlcntcclxuICAgIHJldHVybiA5MCAtIE1hdGguYXRhbjIoKHRhcmdldC55IC0gdGhpcy5zdGF0ZS5wb3NpdGlvbi55KSwodGFyZ2V0LnggLSB0aGlzLnN0YXRlLnBvc2l0aW9uLngpKSAqIDE4MC9NYXRoLlBJO1xyXG4gIH1cclxuICBiaW5kQ29udHJvbChrZXk6IHN0cmluZywgeDogZXhlY190eXBlLCBmdW5jOiBjb250cm9sX2Z1bmMsIGludGVydmFsID0gMSkge1xyXG4gICAgdGhpcy5iaW5kcy5wdXNoKEJpbmQoa2V5LCBmdW5jLCB4LCBpbnRlcnZhbCwgdGhpcykpO1xyXG4gIH1cclxuICAvL1RoaXMgbWV0aG9kIGlzIHdoZXJlIGNvbnRyb2xzIGFuZCBrZXliaW5kcyBzaG91bGRcclxuICAvL2JlIGRlZmluZWQgdXNpbmcgYmluZENvbnRyb2xcclxuICByZWdpc3RlckNvbnRyb2xzKCl7XHJcblxyXG4gIH1cclxuICBzdGF0ZWYodGltZTpudW1iZXIpe1xyXG5cclxuICB9XHJcbiAgZGVsZXRlKCkge1xyXG4gICAgZm9yIChsZXQgYSBvZiB0aGlzLmJpbmRzKSB7XHJcbiAgICAgIFVuYmluZChhKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ2FtZS5nZXRSb29tKCkuZGVsZXRlSXRlbSh0aGlzLmlkKTtcclxuICB9XHJcbiAgVW5iaW5kQWxsKCl7XHJcbiAgICBmb3IgKGxldCBhIG9mIHRoaXMuYmluZHMpIHtcclxuICAgICAgVW5iaW5kKGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvL1JldHVybnMgdGhlIGNvbGxpc2lvbiBib3ggb2YgdGhlIG9iamVjdFxyXG4gIC8vRG9lcyBub3QgaGF2ZSB0byBjb3JyZXNwb25kIHRvIHRoZSBvYmplY3QncyBzcHJpdGUncyBzaXplIFxyXG4gIC8vQSBjb21wb3NpdGUgb2JqZWN0IGluc3RlYWQgcmV0dXJucyB0aGUgYm91bmRpbmcgYm94IHRoYXQgXHJcbiAgLy9jb250YWlucyBldmVyeSBvbmUgb2YgaXRzIGNvbnRhaW5lZCBvYmplY3RzXHJcbiAgZ2V0RnVsbENvbGxpc2lvbkJveCgpOmNvbGxpc2lvbl9ib3h7XHJcbiAgICAvL0lmIGEgZGV2ZWxvcGVyIGRlZmluZWQgaGl0Ym94IGV4aXN0cywgdXNlIHRoYXQsIG90aGVyd2lzZVxyXG4gICAgLy9nZW5lcmF0ZSBpdCB1c2luZyB0aGUgc3ByaXRlIHdpZHRoIC8gaGVpZ2h0XHJcbiAgICBpZih0aGlzLmhpdGJveCl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgd2lkdGg6dGhpcy5oaXRib3gud2lkdGggKiB0aGlzLnN0YXRlLnNjYWxpbmcud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGl0Ym94LmhlaWdodCAqIHRoaXMuc3RhdGUuc2NhbGluZy5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB4OnRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OnRoaXMuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDp0aGlzLndpZHRoICogdGhpcy5zdGF0ZS5zY2FsaW5nLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDp0aGlzLmhlaWdodCAqIHRoaXMuc3RhdGUuc2NhbGluZy5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvL1RoaXMgaXMgYW5vdGhlciBtZXRob2RzLCBzaW1pbGFyIHRvIGdldENvbWJpbmVkXHJcbiAgLy9KdXN0IHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgb2JqZWN0J3MgY29sbGlzaW9uIGJveFxyXG4gIC8vT3ZlcndyaXR0ZW4gaW4gY29tcG9zaXRlIG9iamVjdHMgdG8gcmV0dXJuIGV2ZXJ5IG9iamVjdCdzIGNvbGxpc2lvbiBib3hcclxuICAvL3dpdGhpbiB0aGUgY29tcG9zaXRlIG9iZWN0LlxyXG4gIGdldEFsbENvbGxpc2lvbkJveGVzKCk6Y29sbGlzaW9uX2JveFtde1xyXG4gICAgcmV0dXJuIFt0aGlzLmdldEZ1bGxDb2xsaXNpb25Cb3goKV1cclxuICB9XHJcbiAgLy9DaGVja3MgdG8gc2VlIGlmIGFuIG9iamVjdCBhY3R1YWxseSBjb2xsaWRlcyB3aXRoIHRoZSBwcm92aWRlZCBib3guXHJcbiAgLy9BIGJveCByZXByZXNlbnRzIGFuIGFyZWEgd2l0aGluIHRoZSBnYW1lIHNwYWNlXHJcbiAgLy9DaGVja2luZyBmb3IgY29sbGlzaW9ucyBpcyB0cml2aWFsIGN1cnJlbnRseSwgYXMgYWxsIGhpdGJveGVzIGFyZSBheGlzIGFsaWduZWRcclxuICAvL0J1dCBpbXBsZW1lbnRpbmcgYSBtb3JlIGNvbXBsaWNhdGVkIHBoeXNpY3MgZW5naW5lIHdvdWxkIG1ha2UgdGhpcyBtZXRob2QncyBpbXBsLlxyXG4gIC8vc2lnbmlmaWNhdGx5IG1vcmUgY29tcGxleC5cclxuICBjb2xsaWRlc1dpdGhCb3gob3RoZXJfb2JqZWN0OiBjb2xsaXNpb25fYm94KTogYm9vbGVhbiB7XHJcbiAgICBsZXQgY29sbGlkZXNfaG9ycml6b250YWxseSA9IGZhbHNlLCBjb2xsaWRlc192ZXJ0aWNhbGx5ID0gZmFsc2U7XHJcbiAgICBsZXQgaGJveCA9IHRoaXMuaGl0Ym94O1xyXG4gICAgaWYoIXRoaXMuaGl0Ym94KXtcclxuICAgICAgaGJveCA9IHtcclxuICAgICAgICB4X29mZnNldDowLFxyXG4gICAgICAgIHlfb2Zmc2V0OjAsXHJcbiAgICAgICAgd2lkdGg6dGhpcy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6dGhpcy5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IG9iamVjdF9ib3VuZHMgPSB7XHJcbiAgICAgIGxlZnQ6ICh0aGlzLnN0YXRlLnBvc2l0aW9uLnggKyBoYm94Lnhfb2Zmc2V0IC0gaGJveC53aWR0aCAqIHRoaXMuc3RhdGUuc2NhbGluZy53aWR0aCAvIDIpLFxyXG4gICAgICByaWdodDogKHRoaXMuc3RhdGUucG9zaXRpb24ueCArIGhib3gueF9vZmZzZXQgKyBoYm94LndpZHRoICogdGhpcy5zdGF0ZS5zY2FsaW5nLndpZHRoIC8gMiksXHJcbiAgICAgIHRvcDogKHRoaXMuc3RhdGUucG9zaXRpb24ueSArIGhib3gueV9vZmZzZXQgKyBoYm94LmhlaWdodCAqIHRoaXMuc3RhdGUuc2NhbGluZy5oZWlnaHQgLyAyKSxcclxuICAgICAgYm90dG9tOiAodGhpcy5zdGF0ZS5wb3NpdGlvbi55ICsgaGJveC55X29mZnNldCAtIGhib3guaGVpZ2h0ICogdGhpcy5zdGF0ZS5zY2FsaW5nLmhlaWdodCAvIDIpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG90aGVyX29iamVjdF9ib3VuZHMgPSB7XHJcbiAgICAgIGxlZnQ6IChvdGhlcl9vYmplY3QueCAtIG90aGVyX29iamVjdC53aWR0aCAvIDIpLFxyXG4gICAgICByaWdodDogKG90aGVyX29iamVjdC54ICsgb3RoZXJfb2JqZWN0LndpZHRoIC8gMiksXHJcbiAgICAgIHRvcDogKG90aGVyX29iamVjdC55ICsgb3RoZXJfb2JqZWN0LmhlaWdodCAvIDIpLFxyXG4gICAgICBib3R0b206IChvdGhlcl9vYmplY3QueSAtIG90aGVyX29iamVjdC5oZWlnaHQgLyAyKVxyXG4gICAgfVxyXG5cclxuICAgIC8vV2UgY2FuIGNvbXBhcmUgdGhlIHNpZGVzIG9mIHRoZSBib3hlcyB0byBzZWUgaWYgdGhleSBvdmVybGFwXHJcbiAgICAvL1dlIGNoZWNrIG9uY2UgZm9yIGhvaXpvbnRhbCBvdmVybGFwLCB0aGVuIHZlcnRpY2FsLlxyXG4gICAgaWYgKChvYmplY3RfYm91bmRzLmxlZnQgPj0gb3RoZXJfb2JqZWN0X2JvdW5kcy5sZWZ0ICYmIG9iamVjdF9ib3VuZHMubGVmdCA8IG90aGVyX29iamVjdF9ib3VuZHMucmlnaHQpIHx8IChvdGhlcl9vYmplY3RfYm91bmRzLmxlZnQgPiBvYmplY3RfYm91bmRzLmxlZnQgJiYgb3RoZXJfb2JqZWN0X2JvdW5kcy5sZWZ0IDwgb2JqZWN0X2JvdW5kcy5yaWdodCkpIHtcclxuICAgICAgY29sbGlkZXNfaG9ycml6b250YWxseSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoKG9iamVjdF9ib3VuZHMuYm90dG9tID49IG90aGVyX29iamVjdF9ib3VuZHMuYm90dG9tICYmIG9iamVjdF9ib3VuZHMuYm90dG9tIDwgb3RoZXJfb2JqZWN0X2JvdW5kcy50b3ApIHx8IChvdGhlcl9vYmplY3RfYm91bmRzLmJvdHRvbSA+IG9iamVjdF9ib3VuZHMuYm90dG9tICYmIG90aGVyX29iamVjdF9ib3VuZHMuYm90dG9tIDwgb2JqZWN0X2JvdW5kcy50b3ApKXtcclxuICAgICAgY29sbGlkZXNfdmVydGljYWxseSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sbGlkZXNfaG9ycml6b250YWxseSAmJiBjb2xsaWRlc192ZXJ0aWNhbGx5O1xyXG4gIH1cclxuICAvL1RoZSBwYXJ0aWNsZSBtdXN0IGJlIHJlZ2lzdGVyZWQgaW4gdGhlIHJvb20ncyByZWdpc3RlclBhcnRpY2xlcyBtZXRob2QgXHJcbiAgLy9UaGUgbmFtZSBwYXJhbWV0ZXIgc2hvdWxkIGNvcnJlc3BvbmQgdG8gdGhlIGtleSBvZiBhIHBhcnRpY2xlXHJcbiAgZW1pdFBhcnRpY2xlKG5hbWU6c3RyaW5nLG9mZnNldDpWZWN0b3IsbGlmZXRpbWU6bnVtYmVyLHJhbmdlOm51bWJlcil7XHJcbiAgICBsZXQgcm9vbSA9IHRoaXMuZ2FtZS5nZXRSb29tKCk7XHJcbiAgICBsZXQgc3QgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgbGV0IGZpbmFsX3Bvc2l0aW9uOlZlY3RvciA9IHtcclxuICAgICAgeDpzdC5wb3NpdGlvbi54ICsgb2Zmc2V0LngsXHJcbiAgICAgIHk6c3QucG9zaXRpb24ueSArIG9mZnNldC55XHJcbiAgICB9XHJcbiAgICByb29tLmVtaXRQYXJ0aWNsZShuYW1lLGZpbmFsX3Bvc2l0aW9uLGxpZmV0aW1lLHJhbmdlKVxyXG4gIH1cclxuICAvL0ludGVybmFsIG1ldGhvZCB0aGF0IGtlZXBzIGNhbGN1bGF0ZXMgdGhlIGRlbHRhX3RpbWVcclxuICAvL0Fsc28gY29udmVydHMgaW5kaXZpZHVhbCBzcHJpdGVzIGludG8gYXJyYXlzIG9mIG9uZSBzcHJpdGUuXHJcbiAgcmVuZGVyVHJhY2sodGltZTpudW1iZXIpOiBwb3NpdGlvbmVkX3Nwcml0ZVtdIHtcclxuICAgIGxldCByZW5kZXJlZCA9IHRoaXMucmVuZGVyZih0aW1lIC0gdGhpcy5sYXN0X3JlbmRlcik7XHJcbiAgICBsZXQgZmluYWw6cG9zaXRpb25lZF9zcHJpdGVbXTtcclxuICAgIHRoaXMubGFzdF9yZW5kZXIgPSB0aW1lO1xyXG4gICAgaWYoQXJyYXkuaXNBcnJheShyZW5kZXJlZCkpXHJcbiAgICAgIGZpbmFsID0gcmVuZGVyZWRcclxuICAgIGVsc2V7XHJcbiAgICAgIGZpbmFsID0gW3JlbmRlcmVkXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpbmFsO1xyXG4gIH1cclxuICAvL01vc3Qgb2JqZWN0cyBzaG91bGQgbm90IGJlIG92ZXJ3cml0dGluZyB0aGUgcmVuZGVyZiBtZXRob2RcclxuICAvL1JldHVybnMgdGhlIGFwcHJvcHJpYXRlIHNwcml0ZSBmb3IgdGhlIG9iamVjdFxyXG4gIHJlbmRlcmYodGltZTogbnVtYmVyKTogcG9zaXRpb25lZF9zcHJpdGVbXSB8IHBvc2l0aW9uZWRfc3ByaXRle1xyXG4gICAgLy9JZiB0aGUgb2JqZWN0IGRvZXNuJ3QgaGF2ZSByZWdpc3RlcmVkIGFuaW1hdGlvbnMsIG9yIGlzbid0IHBsYXlpbmcgb25lXHJcbiAgICAvL1dlIGhhdmUgdG8gY3JlYXRlIHRoZSBzcHJpdGUgaGVyZS5cclxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmFuaW1hdGlvbnMuYW5pbWF0aW9ucykubGVuZ3RoID09IDAgfHwgIXRoaXMuYW5pbWF0aW9ucy5jdXJyZW50KSB7XHJcbiAgICAgIGlmKCF0aGlzLnNwcml0ZV9zaGVldCB8fCAhdGhpcy5oZWlnaHQgfHwgIXRoaXMud2lkdGgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzcHJpdGU6dW5kZWZpbmVkLFxyXG4gICAgICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICB5OnRoaXMuc3RhdGUucG9zaXRpb24ueVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgc3ByaXRlX2hlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICBsZXQgc3ByaXRlX3dpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgLy9UZWNobmljYWxseSB3ZSBkb24ndCBuZWVkIHRvIGRlZmluZSBhbiBvYmplY3QgaGVpZ2h0IGFuZCB3aWR0aFxyXG4gICAgICAvL0lmIHRoZSBzcHJpdGVfdXJsIHBvaW50cyB0byBhIHNpbmdsZSBzdGF0aWMgc3ByaXRlLCBhcyB3ZSBjYW4ganVzdCBwdWxsXHJcbiAgICAgIC8vdGhlIGRpbWVuc2lvbnMgZnJvbSB0aGUgaW1hZ2VcclxuICAgICAgaWYgKHRoaXMuaGVpZ2h0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHNwcml0ZV9oZWlnaHQgPSB0aGlzLnNwcml0ZV9zaGVldC5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMud2lkdGggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3ByaXRlX3dpZHRoID0gdGhpcy5zcHJpdGVfc2hlZXQud2lkdGg7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcHJpdGU6IHtcclxuICAgICAgICAgIHNwcml0ZV9zaGVldDogdGhpcy5zcHJpdGVfc2hlZXQsXHJcbiAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgc3ByaXRlX3dpZHRoOiBzcHJpdGVfd2lkdGgsXHJcbiAgICAgICAgICBzcHJpdGVfaGVpZ2h0OiBzcHJpdGVfaGVpZ2h0LFxyXG4gICAgICAgICAgb3BhY2l0eTp0aGlzLm9wYWNpdHlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHg6IHRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OiB0aGlzLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNwcml0ZTp0aGlzLmFuaW1hdGlvbnMucmVuZGVyZih0aW1lKSxcclxuICAgICAgeDogdGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgY29tcG9zaXRlX3N0YXRpY3tcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBvYmo6b2JqXHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBjb21wb3NpdGVfb2JqIGV4dGVuZHMgb2Jqe1xyXG4gIG9iamVjdHM6b2JqW10gPSBbXTtcclxuICByZW5kZXIgPSBmYWxzZTtcclxuICByZWdpc3RlcmVkID0gZmFsc2U7XHJcbiAgY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgc3RhdGljczpjb21wb3NpdGVfc3RhdGljW10gPSBbXTtcclxuICBjb25zdHJ1Y3Rvcihwb3M6b2JqX3N0YXRlKXtcclxuICAgIHN1cGVyKHBvcyk7XHJcbiAgfVxyXG4gIGxvYWQoKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPiggYXN5bmMgKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbLi4udGhpcy5vYmplY3RzLm1hcCgoYSk9PmEubG9hZCgpKSwuLi50aGlzLnN0YXRpY3MubWFwKGE9PmEub2JqLmxvYWQoKSldKTtcclxuICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgfSlcclxuICB9XHJcbiAgY29tYmluZWRPYmplY3RzKCk6b2JqW117XHJcbiAgICBsZXQgY29tYmluZWQgPSBbLi4udGhpcy5vYmplY3RzLC4uLnRoaXMuc3RhdGljcy5tYXAoYT0+YS5vYmopXTtcclxuICAgIGNvbWJpbmVkLmZvckVhY2goYT0+YS5wYXJlbnQgPSB0aGlzKTtcclxuICAgIHJldHVybiBbLi4uY29tYmluZWQsdGhpc107XHJcbiAgfVxyXG4gIGdldEl0ZW1zQnlUYWcodGFnOnN0cmluZyl7XHJcbiAgICByZXR1cm4gdGhpcy5jb21iaW5lZE9iamVjdHMoKS5maWx0ZXIoKGEpPT5hLnRhZ3MuaW5kZXhPZih0YWcpID4gLTEpO1xyXG4gIH1cclxuICBhZGRJdGVtKGE6b2JqLGxpc3Q9dGhpcy5vYmplY3RzKXtcclxuICAgIGxpc3QucHVzaChhKTtcclxuICAgIGEucGFyZW50ID0gdGhpcztcclxuICAgIHRoaXMuZ2FtZS5nZXRSb29tKCkuYWRkSXRlbShhKTtcclxuICB9XHJcbiAgZ2V0QWxsQ29sbGlzaW9uQm94ZXMoKTpjb2xsaXNpb25fYm94W117XHJcbiAgICBsZXQgYXJyOmNvbGxpc2lvbl9ib3hbXSA9IFtdO1xyXG4gICAgZm9yKGxldCBvYmogb2YgWy4uLnRoaXMuc3RhdGljcy5tYXAoYT0+YS5vYmopLC4uLnRoaXMub2JqZWN0c10pe1xyXG4gICAgICBsZXQgY3JlYXRlZF9ib3ggPSBvYmouZ2V0QWxsQ29sbGlzaW9uQm94ZXMoKTtcclxuICAgICAgaWYoQXJyYXkuaXNBcnJheShjcmVhdGVkX2JveCkpe1xyXG4gICAgICAgIGFyci5wdXNoKC4uLmNyZWF0ZWRfYm94KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIGFyci5wdXNoKGNyZWF0ZWRfYm94KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxuICB9XHJcbiAgZGVsZXRlKCl7XHJcbiAgICBmb3IobGV0IGEgb2YgdGhpcy5vYmplY3RzKXtcclxuICAgICAgYS5kZWxldGUoKTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSBvZiB0aGlzLnN0YXRpY3Mpe1xyXG4gICAgICBhLm9iai5kZWxldGUoKTtcclxuICAgIH1cclxuICAgIHN1cGVyLmRlbGV0ZSgpO1xyXG4gIH1cclxuICBjb2xsaWRlc1dpdGhCb3goYTogY29sbGlzaW9uX2JveCk6Ym9vbGVhbntcclxuICAgIGZvcihsZXQgb2JqIG9mIHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGlmKG9iai5jb2xsaWRlc1dpdGhCb3goYSkpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IG8gb2YgdGhpcy5zdGF0aWNzKXtcclxuICAgICAgaWYoby5vYmouY29sbGlkZXNXaXRoQm94KGEpKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIHN0YXRpY19vYmoge1xyXG4gIHNwcml0ZV91cmwgPSBcIlwiO1xyXG4gIHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIGdyYXZpdHlfb2JqIGV4dGVuZHMgb2Jqe1xyXG4gIGdyYXZpdHkgPSB0cnVlXHJcbn0iLCJpbXBvcnQgeyBzcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgR2V0Vmlld3BvcnREaW1lbnNpb25zIH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQgeyBvYmogfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgZGltZW5zaW9ucywgb2JqX3N0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgVGV4dF9Ob2RlLCBUZXh0U2V0dGluZyxIVUQsVGV4dCB9IGZyb20gXCIuL2h1ZFwiO1xyXG5pbXBvcnQge3Bvc2l0aW9uZWRfc3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVcIlxyXG5cclxuaW50ZXJmYWNlIGNhbWVyYV9zdGF0ZSB7XHJcbiAgc2NhbGluZzogbnVtYmVyLFxyXG4gIHBvc2l0aW9uOiB7XHJcbiAgICB4OiBudW1iZXIsXHJcbiAgICB5OiBudW1iZXJcclxuICB9XHJcbiAgZGltZW5zaW9uczoge1xyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbiAgfSxcclxuICB2aWV3cG9ydDogdmlld3BvcnQsXHJcbiAgZGVidWc6Ym9vbGVhbixcclxuICBodWQ6SFVEICBcclxufVxyXG5cclxuaW50ZXJmYWNlIHZpZXdwb3J0IHtcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIGNhbWVyYV9wcm9wZXJ0aWVzIHtcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBkaW1lbnNpb25zOntcclxuICAgIGhlaWdodDpudW1iZXIsXHJcbiAgICB3aWR0aDpudW1iZXJcclxuICB9XHJcbiAgc2NhbGluZzpudW1iZXIsXHJcbiAgZGVidWc6Ym9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhIHtcclxuICBzdGF0ZTogY2FtZXJhX3N0YXRlO1xyXG4gIGh1ZDogSFVEO1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOmNhbWVyYV9wcm9wZXJ0aWVzLCB2OiB2aWV3cG9ydCwgaHVkOkhVRCA9IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2NhbGluZzpwcm9wcy5zY2FsaW5nLFxyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IHByb3BzLngsXHJcbiAgICAgICAgeTogcHJvcHMueVxyXG4gICAgICB9LFxyXG4gICAgICBkaW1lbnNpb25zOiBwcm9wcy5kaW1lbnNpb25zLFxyXG4gICAgICB2aWV3cG9ydDoge1xyXG4gICAgICAgIHg6di54LFxyXG4gICAgICAgIHk6di55ICxcclxuICAgICAgICB3aWR0aDogdi53aWR0aCAqIHByb3BzLmRpbWVuc2lvbnMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB2LmhlaWdodCAqIHByb3BzLmRpbWVuc2lvbnMuaGVpZ2h0XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlYnVnOnByb3BzLmRlYnVnLFxyXG4gICAgICBodWRcclxuICAgIH1cclxuICAgIHRoaXMuaHVkID0gaHVkO1xyXG4gIH1cclxuICBzZXQgeCh4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueCA9IHg7XHJcbiAgfVxyXG4gIHNldCB5KHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi55ID0geVxyXG4gIH1cclxuICBnZXQgeCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLnBvc2l0aW9uLng7XHJcbiAgfVxyXG4gIGdldCB5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucG9zaXRpb24ueTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHJlbmRlcl9mdW5jIHtcclxuICAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxpbmc6IG51bWJlcik6IHZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIHJlY3RhbmdsZSB7XHJcbiAgd2lkdGg6IG51bWJlcixcclxuICBoZWlnaHQ6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2Ugc3ByaXRlX2FyZ3Mge1xyXG4gIHNwcml0ZTogc3ByaXRlLFxyXG4gIHg6IG51bWJlcixcclxuICB5OiBudW1iZXIsXHJcbiAgcm90YXRpb246IG51bWJlcixcclxuICBzY2FsZTpkaW1lbnNpb25zLFxyXG4gIHNjYWxlX3R5cGU6c2NhbGVfdHlwZVxyXG59XHJcblxyXG5pbnRlcmZhY2UgcmVuZGVyZXJfYXJncyB7XHJcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gIGNhbWVyYTogQ2FtZXJhXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIHJlbmRlcl90eXBlIHtcclxuICB0ZXh0LFxyXG4gIHNwcml0ZSxcclxuICByZWN0LFxyXG4gIHN0cm9rZV9yZWN0XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIHNjYWxlX3R5cGV7XHJcbiAgZ3JvdyxcclxuICByZXBlYXRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGh1ZF90ZXh0X3JlbmRlcmVyID0gKHI6IHJlbmRlcmVyX2FyZ3MsIHM6IFRleHRTZXR0aW5nKSA9PiB7XHJcbiAgbGV0IHZoZWlnaHQgPSBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQ7XHJcbiAgci5jb250ZXh0LmZvbnQgPSBgJHtzLmZvbnQuc2l6ZX1weCAke3MuZm9udC5mb250fWA7XHJcbiAgci5jb250ZXh0LmZpbGxTdHlsZSA9IHMuZm9udC5jb2xvcjtcclxuICByLmNvbnRleHQudGV4dEFsaWduID0gcy5mb250LmFsaWduO1xyXG4gIGlmIChzLmZvbnQubWF4X3dpZHRoKSB7XHJcbiAgICByLmNvbnRleHQuZmlsbFRleHQocy5mb250LnRleHQsIHMueCwgdmhlaWdodCAtIHMueSwgcy5mb250Lm1heF93aWR0aCk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCBzLngsIHZoZWlnaHQgLSBzLnkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRleHRfcmVuZGVyZXIgPSAocjpyZW5kZXJlcl9hcmdzLHM6VGV4dFNldHRpbmcpID0+IHtcclxuICBsZXQgY2FtZXJhID0gci5jYW1lcmE7XHJcbiAgbGV0IHZoZWlnaHQgPSByLmNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodDtcclxuICBsZXQgd2lkdGggPSByLmNvbnRleHQubWVhc3VyZVRleHQocy5mb250LnRleHQpLndpZHRoICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgaGVpZ2h0ID0gcy5mb250LnNpemUgKiAxLjIgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKChzLnggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvci5jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyKSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0gcy55ICogY2FtZXJhLnN0YXRlLnNjYWxpbmcgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQvMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICByLmNvbnRleHQuZm9udCA9IGAke3MuZm9udC5zaXplICogci5jYW1lcmEuc3RhdGUuc2NhbGluZ31weCAke3MuZm9udC5mb250fWA7XHJcbiAgci5jb250ZXh0LmZpbGxTdHlsZSA9IHMuZm9udC5jb2xvcjtcclxuICByLmNvbnRleHQudGV4dEFsaWduID0gcy5mb250LmFsaWduXHJcbiAgci5jb250ZXh0LnNhdmUoKTtcclxuICByLmNvbnRleHQudHJhbnNsYXRlKGZpbmFsX3gsIGZpbmFsX3kpO1xyXG4gIGlmIChzLmZvbnQubWF4X3dpZHRoKSB7XHJcbiAgICByLmNvbnRleHQuZmlsbFRleHQocy5mb250LnRleHQsIDAsIDAsIHMuZm9udC5tYXhfd2lkdGgpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgMCwgMCk7XHJcbiAgfVxyXG4gIHIuY29udGV4dC5yZXN0b3JlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzcHJpdGVfcmVuZGVyZXIgPSAocjogcmVuZGVyZXJfYXJncywgczogc3ByaXRlX2FyZ3MpID0+IHtcclxuICBsZXQgY2FtZXJhID0gci5jYW1lcmE7XHJcbiAgbGV0IHZoZWlnaHQgPSByLmNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAvIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGZpbmFsX3ggPSAoKHMueCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9yLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSBzLnNwcml0ZS5zcHJpdGVfd2lkdGggKiBzLnNjYWxlLndpZHRoIC8gMikgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHMueSAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxL3IuY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiAtIHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQgKiBzLnNjYWxlLmhlaWdodCAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcgKiBzLnNjYWxlLmhlaWdodDtcclxuICBsZXQgd2lkdGggPSBzLnNwcml0ZS5zcHJpdGVfd2lkdGggKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nICogcy5zY2FsZS53aWR0aDtcclxuICByLmNvbnRleHQuc2F2ZSgpO1xyXG4gIHIuY29udGV4dC5nbG9iYWxBbHBoYSA9IHMuc3ByaXRlLm9wYWNpdHk7XHJcbiAgci5jb250ZXh0LnRyYW5zbGF0ZShmaW5hbF94ICArICh3aWR0aCkgLyAyLCBmaW5hbF95ICsgaGVpZ2h0IC8gMilcclxuICBsZXQgcmFkaWFucyA9IHMucm90YXRpb24gKiAoTWF0aC5QSSAvIDE4MCk7XHJcbiAgci5jb250ZXh0LnJvdGF0ZShyYWRpYW5zKTtcclxuICBpZihzLnNjYWxlX3R5cGUgPT0gc2NhbGVfdHlwZS5ncm93KXtcclxuICAgIHIuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgIHMuc3ByaXRlLnNwcml0ZV9zaGVldCxcclxuICAgICAgcy5zcHJpdGUubGVmdCxcclxuICAgICAgcy5zcHJpdGUudG9wLFxyXG4gICAgICBzLnNwcml0ZS5zcHJpdGVfd2lkdGgsXHJcbiAgICAgIHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQsXHJcbiAgICAgIC0od2lkdGggKSAvIDIsXHJcbiAgICAgIC1oZWlnaHQgLyAyLFxyXG4gICAgICB3aWR0aCxcclxuICAgICAgaGVpZ2h0XHJcbiAgICApXHJcbiAgfVxyXG4gIGVsc2UgaWYocy5zY2FsZV90eXBlID09IHNjYWxlX3R5cGUucmVwZWF0KXtcclxuICAgIGxldCBvbmVfd2lkdGggPSBzLnNwcml0ZS5zcHJpdGVfd2lkdGggKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gICAgbGV0IG9uZV9oZWlnaHQgPSBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0ICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICAgIGxldCB0b3RhbF9ob3Jfc3ByaXRlcyA9IHdpZHRoL29uZV93aWR0aFxyXG4gICAgbGV0IHRvdGFsX3Zlcl9zcHJpdGVzID0gaGVpZ2h0L29uZV9oZWlnaHQ7XHJcbiAgIGZvcihsZXQgYSA9IDA7YSA8IHRvdGFsX2hvcl9zcHJpdGVzO2EgKz0gMSl7XHJcbiAgICAgZm9yKGxldCBiID0gMDtiIDwgdG90YWxfdmVyX3Nwcml0ZXM7YiArPSAxKXtcclxuICAgICAgIGxldCBuZXdfd2lkdGggPSBvbmVfd2lkdGg7XHJcbiAgICAgICBsZXQgbmV3X2hlaWdodCA9IG9uZV9oZWlnaHQ7XHJcbiAgICAgICBpZigoYSArIDEpICogb25lX3dpZHRoIC0gd2lkdGggPiAwKXtcclxuICAgICAgICAgbmV3X3dpZHRoID0gd2lkdGggJSBvbmVfd2lkdGg7XHJcbiAgICAgICB9XHJcbiAgICAgICBpZigoYiArIDEpICogb25lX2hlaWdodCAtIGhlaWdodCA+IDApe1xyXG4gICAgICAgICBuZXdfaGVpZ2h0ID0gaGVpZ2h0ICUgb25lX2hlaWdodDtcclxuICAgICAgIH1cclxuICAgICAgIHIuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgcy5zcHJpdGUuc3ByaXRlX3NoZWV0LFxyXG4gICAgICAgIHMuc3ByaXRlLmxlZnQsXHJcbiAgICAgICAgcy5zcHJpdGUudG9wLFxyXG4gICAgICAgIG5ld193aWR0aCAvIChyLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSxcclxuICAgICAgICBuZXdfaGVpZ2h0IC8gKHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcpLFxyXG4gICAgICAgIC13aWR0aC8yICsgYSAqIG9uZV93aWR0aCxcclxuICAgICAgICAtaGVpZ2h0LzIgKyBiICogb25lX2hlaWdodCxcclxuICAgICAgICBuZXdfd2lkdGgsXHJcbiAgICAgICAgbmV3X2hlaWdodFxyXG4gICAgICAgKVxyXG4gICAgIH1cclxuXHJcbiAgIH0gXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHIuY29udGV4dC5yZXN0b3JlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHJva2VkX3JlY3RfcmVuZGVyZXIgPSAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByZWN0OiByZWN0YW5nbGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6bnVtYmVyLCBjYW1lcmE6IENhbWVyYSkgPT4ge1xyXG4gIGxldCB2aGVpZ2h0ID0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGZpbmFsX3ggPSAoKHggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiAtIHJlY3Qud2lkdGggLyAyKSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHkgLSByZWN0LmhlaWdodCAvIDIgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBoZWlnaHQgPSByZWN0LmhlaWdodCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCB3aWR0aCA9IHJlY3Qud2lkdGggKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGggKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBjb250ZXh0LnN0cm9rZVJlY3QoZmluYWxfeCwgZmluYWxfeSwgd2lkdGgsIGhlaWdodCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWN0X3JlbmRlcmVyID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcmVjdDogcmVjdGFuZ2xlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOm51bWJlciwgY2FtZXJhOiBDYW1lcmEpID0+IHtcclxuICBsZXQgdmhlaWdodCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAvIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKCh4IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSByZWN0LndpZHRoIC8gMikgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSB5IC0gcmVjdC5oZWlnaHQgLyAyIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55KSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgd2lkdGggPSByZWN0LndpZHRoICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGNvbnRleHQuZmlsbFJlY3QoZmluYWxfeCwgZmluYWxfeSwgd2lkdGgsIGhlaWdodCk7XHJcbn0iLCJpbXBvcnQgeyBncmF2aXR5X29iaixvYmogfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgUGFydGljbGUsIHNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBkaW1lbnNpb25zLCBvYmpfc3RhdGUsIFZlY3RvciB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IHZlbG9jaXR5Q29sbGlzaW9uQ2hlY2ssY2hlY2tfY29sbGlzaW9ucyxjb2xsaXNpb25fYm94LGNoZWNrX2FsbF9jb2xsaXNpb25zLGNoZWNrX2FsbF9vYmplY3RzfSBmcm9tIFwiLi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHtyZW5kZXJfY29sbGlzaW9uX2JveCxERUJVR30gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQge0JpbmQsY29udHJvbF9mdW5jLCBleGVjX3R5cGV9IGZyb20gXCIuL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7SFVELFRleHQsIFRleHRfTm9kZX0gZnJvbSBcIi4vaHVkXCI7XHJcbmltcG9ydCB7YXVkaW99IGZyb20gXCIuL2F1ZGlvXCJcclxuaW1wb3J0IHtnYW1lfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7ZGVidWdfdXBkYXRlX29ial9saXN0LHJvb3RfcGF0aCxwYXRofSBmcm9tIFwiLi4vbGliL2RlYnVnXCI7XHJcbmltcG9ydCB7cHJlZmFic30gZnJvbSBcIi4uL2dhbWUvb2JqZWN0cy9wcmVmYWJzXCI7XHJcblxyXG5pbnRlcmZhY2UgcG9zaXRpb257XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5R3Jhdml0eShvYjpncmF2aXR5X29iaixncmF2X2NvbnN0Om51bWJlciwgZ3Jhdl9tYXg6bnVtYmVyKXtcclxuICBpZihvYi5ncmF2aXR5ICYmIG9iLnN0YXRlLnZlbG9jaXR5LnkgPiBncmF2X21heCl7XHJcbiAgICBvYi5zdGF0ZS52ZWxvY2l0eS55ICs9IGdyYXZfY29uc3Q7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHBhcnRpY2xlX2VudHJ5e1xyXG4gIHNwcml0ZTpzdHJpbmcsXHJcbiAgaGVpZ2h0Om51bWJlcixcclxuICB3aWR0aDpudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIHBhcnRpY2xlc3tcclxuICBbaW5kZXg6c3RyaW5nXTpwYXJ0aWNsZV9lbnRyeVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHJvb21faTxUPntcclxuICBiYWNrZ3JvdW5kX3VybDpzdHJpbmcsXHJcbiAgb2JqZWN0czpvYmpbXVxyXG4gIHN0YXRlOlRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBvYmplY3Rfc3RhdGVfY29uZmlnIHtcclxuICB0eXBlOnN0cmluZyxcclxuICBzdGF0ZTpvYmpfc3RhdGUsXHJcbiAgcGFyYW1ldGVycz86IHVua25vd25cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzdGF0ZV9jb25maWd7XHJcbiAgb2JqZWN0czpvYmplY3Rfc3RhdGVfY29uZmlnW11cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHJvb208VD57XHJcbiAgLy9VcmwgdG8gYW4gaW1hZ2UgdG8gYmUgdXNlZCBmb3IgdGhlIHJvb20gYmFja2dyb3VuZFxyXG4gIGJhY2tncm91bmRfdXJsOiBzdHJpbmc7XHJcbiAgYmFja2dyb3VuZDogSFRNTEltYWdlRWxlbWVudDtcclxuICBvYmplY3RzOiBvYmpbXSA9IFtdO1xyXG4gIC8vVGhpcyBvYmplY3QgY29udGFpbnMgcGFydGljbGUgZGVmaW5pdGlvbnNcclxuICBwYXJ0aWNsZXM6cGFydGljbGVzID0ge307XHJcbiAgLy9UaGlzIGFycmF5IGlzIHdoYXQgYWN0dWFsbHkgY29udGFpbnMgdGhlIHBhcnRpY2xlc1xyXG4gIC8vdGhhdCBleGlzdHMgd2l0aGluIHRoZSByb29tLlxyXG4gIHBhcnRpY2xlc19hcnI6IG9ialtdID0gW107XHJcbiAgc3RhdGU6IFQ7XHJcbiAgYmluZHM6bnVtYmVyW10gPSBbXTtcclxuICBnYW1lOmdhbWU8dW5rbm93bj47XHJcbiAgaHVkOkhVRDtcclxuICBhdWRpbyA9IG5ldyBhdWRpbygpO1xyXG4gIC8vVGhlc2UgdGV4dCBub2RlcyBleGlzdHMgaW4gdGhlIGFjdHVhbCByb29tIHNwYWNlLCByYXRoZXIgdGhhblxyXG4gIC8vb24gdGhlIGh1ZCBsYXllci5cclxuICByZW5kZXI6Ym9vbGVhbiA9IHRydWU7XHJcbiAgdGV4dF9ub2RlczpUZXh0W10gPSBbXTtcclxuICBjb25zdHJ1Y3RvcihnYW1lOmdhbWU8dW5rbm93bj4sY29uZmlnOnN0YXRlX2NvbmZpZyl7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgZm9yKGxldCBjIG9mIGNvbmZpZy5vYmplY3RzKXtcclxuICAgICAgLy9UaGlzIGhhbmRsZXMgbG9hZGluZyBvYmplY3RzIGZyb20gdGhlIHNhdmVkIGpzb24gZmlsZSBhc3NvY2lhdGVkIHdpdGggZWFjaCByb29tLlxyXG4gICAgICB0aGlzLmFkZEl0ZW1TdGF0ZUNvbmZpZyhjKVxyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnRTdGF0ZUNvbmZpZygpe1xyXG4gICAgbGV0IGNvbmZpZzpzdGF0ZV9jb25maWcgPSB7b2JqZWN0czpbXX07XHJcbiAgICBmb3IobGV0IG8gb2YgdGhpcy5vYmplY3RzLmZpbHRlcigob2JqKT0+b2JqLnNhdmVfdG9fZmlsZSkpe1xyXG4gICAgICAvL0lmIGFuIG9iamVjdCBoYXMgYSBwYXJlbnQgb2JqZWN0LCBpdCdzIGEgZGVzY2VuZGVudCBvZiBhIGNvbXBvc2l0ZSBvYmplY3RcclxuICAgICAgLy9UaGUgcGFyZW50IHdpbGwgc3Bhd24gdGhpcyBvYmplY3Qgd2hlbiBpdCdzIGluc3RhbnRpYXRlZCwgc28gd2UgZG9cclxuICAgICAgLy9ub3QgaGF2ZSB0byBzYXZlIHRoaXMgaW5zdGFuY2UuXHJcbiAgICAgICAgaWYoIW8ucGFyZW50KXtcclxuICAgICAgICBjb25maWcub2JqZWN0cy5wdXNoKHtcclxuICAgICAgICAgIHR5cGU6by5jb25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICAgICAgc3RhdGU6by5zdGF0ZSxcclxuICAgICAgICAgIHBhcmFtZXRlcnM6by5wYXJhbXNcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuICAvL1RoaXMgaGFuZGxlcyB0aGUgbG9hZGluZyBvZiBhbGwgcm9vbSBzcHJpdGVzLCBhbmRcclxuICAvL2FueSBvYmplY3RzIGl0IGNvbnRhaW5zLlxyXG4gIGxvYWQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IGEgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgbGV0IHRvX2F3YWl0ID0gdGhpcy5vYmplY3RzLm1hcCgoYSkgPT4gYS5sb2FkKCkpO1xyXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbCh0b19hd2FpdCk7XHJcbiAgICAgIGxldCBwID0gdGhpcy5iYWNrZ3JvdW5kX3VybDtcclxuICAgICAgaWYoREVCVUcpe1xyXG4gICAgICAgIHAgPSBwYXRoLmpvaW4ocm9vdF9wYXRoLHRoaXMuYmFja2dyb3VuZF91cmwpO1xyXG4gICAgICB9XHJcbiAgICAgIGEuc3JjID0gcDtcclxuICAgICAgYS5vbmVycm9yID0gKCgpID0+IHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMb2FkaW5nIEVycm9yOlwiICsgdGhpcy5iYWNrZ3JvdW5kX3VybCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIGEub25sb2FkID0gKGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIF90aGlzLmJhY2tncm91bmQgPSBhO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXVkaW8ubG9hZCgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICAvL1RoaXMgaXMgdXNlZCB3aGlsZSBsb2FkaW5nIG9iamVjdHMgZnJvbSBmaWxlLCBpdCdzIHVzZWQgdG8gZHluYW1pY2FsbHkgbG9hZFxyXG4gIC8vb2JqZWN0cyBmcm9tIHRoZSByb29tJ3MganNvbi4gSWYgYWRkaW5nIGl0ZW1zIHdpdGhpbiBjb2RlLCBpdCdzIGJldHRlciB0byBjcmVhdGVcclxuICAvL25ldyBpbnN0YW5jZXMgb2Ygb2JqZWN0cyB0aHJvdWdoIGFkZEl0ZW1cclxuICBhc3luYyBhZGRJdGVtU3RhdGVDb25maWcoY29uZmlnOm9iamVjdF9zdGF0ZV9jb25maWcpe1xyXG4gICAgaWYocHJlZmFic1tjb25maWcudHlwZV0pe1xyXG4gICAgICBsZXQgbmV3X29iaiA9IDxvYmo+KG5ldyBwcmVmYWJzW2NvbmZpZy50eXBlXShPYmplY3QuYXNzaWduKHt9LGNvbmZpZy5zdGF0ZSksY29uZmlnLnBhcmFtZXRlcnMpKTtcclxuICAgICAgdGhpcy5hZGRJdGVtcyhuZXdfb2JqLmNvbWJpbmVkT2JqZWN0cygpKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVU5LTk9XTiBUWVBFIEFUVEVNUFRFRCBUTyBMT0FEOiBcIiArIGNvbmZpZy50eXBlKVxyXG4gICAgfVxyXG4gIH1cclxuICAvL0FkZHMgdGhlIHBhc3NlZCBpdGVtIHRvIHRoZSByb29tLlxyXG4gIGFzeW5jIGFkZEl0ZW0obzpvYmosIGxpc3QgPSB0aGlzLm9iamVjdHMpe1xyXG4gICAgdGhpcy5hZGRJdGVtcyhbb10sbGlzdCk7XHJcbiAgfVxyXG4gIC8vQWRkcyBldmVyeSBpdGVtIGluIHRoZSBwYXNzZWQgYXJyYXkgdG8gdGhlIHJvb20uXHJcbiAgYXN5bmMgYWRkSXRlbXMobzpvYmpbXSwgbGlzdCA9IHRoaXMub2JqZWN0cyl7XHJcbiAgICBmb3IobGV0IG9iIG9mIG8pe1xyXG4gICAgICBvYi5nYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoby5tYXAoKGEpPT5hLmxvYWQoKSkpO1xyXG4gICAgbGlzdC5wdXNoKC4uLm8pO1xyXG4gICAgaWYoREVCVUcgJiYgbGlzdCA9PT0gdGhpcy5vYmplY3RzKXtcclxuICAgICAgZGVidWdfdXBkYXRlX29ial9saXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vRGVsZXRlcyB0aGUgaXRlbSBhbmQgcmVtb3ZlcyBpdCBmcm9tIHRoZSByb29tJ3Mgb2JqZWN0IGxpc3RcclxuICBkZWxldGVJdGVtKGlkOnN0cmluZywgbGlzdCA9IHRoaXMub2JqZWN0cyl7XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCBsaXN0Lmxlbmd0aDthKyspe1xyXG4gICAgICBpZihsaXN0W2FdLmlkID09PSBpZCl7XHJcbiAgICAgICAgbGlzdC5zcGxpY2UoYSwxKVxyXG4gICAgICAgIGEtLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoREVCVUcgJiYgbGlzdCA9PT0gdGhpcy5vYmplY3RzKXtcclxuICAgICAgZGVidWdfdXBkYXRlX29ial9saXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vQW55IHBhcnRpY2xlcyB0aGF0IGFyZSBuZWVkZWQgaW4gdGhlIHJvb20gc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBwYXJ0aWNsZSBhcnJheSBoZXJlLlxyXG4gIHJlZ2lzdGVyUGFydGljbGVzKCl7XHJcblxyXG4gIH1cclxuICAvL0FkZHMgYSBiaW5kIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgcGFzc2VkIGtleSBpcyBhY3RpdmF0ZWRcclxuICAvL2tleSBleGFtcGxlczogbW91c2UwZG93biBLZXlBZG93biBLZXlMdXBcclxuICBiaW5kQ29udHJvbChrZXk6c3RyaW5nLHg6ZXhlY190eXBlLGZ1bmM6Y29udHJvbF9mdW5jLGludGVydmFsOm51bWJlciA9IDEpe1xyXG4gICAgdGhpcy5iaW5kcy5wdXNoKEJpbmQoa2V5LGZ1bmMseCxpbnRlcnZhbCkpOyBcclxuICB9XHJcbiAgLy9DaGVja3MgZm9yIG9iamVjdHMgdGhhdCBoYXZlIGNvbGxpc2lvbiBhdCB0aGUgcGFzc2VkIHBvaW50XHJcbiAgY2hlY2tDb2xsaXNpb25zUG9pbnQocG9zOlZlY3RvcixleGVtcHQ/OnN0cmluZ1tdLGxpc3QgPSB0aGlzLm9iamVjdHMpOm9ialtde1xyXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tDb2xsaXNpb25zKHt4OnBvcy54LHk6cG9zLnksaGVpZ2h0OjAsd2lkdGg6MH0sZXhlbXB0LGxpc3QpO1xyXG4gIH1cclxuICAvL0NoZWNrcyBmb3IgYW55IG9iamVjdHMgYXQgdGhlIHBhc3NlZCBwb2ludFxyXG4gIGNoZWNrT2JqZWN0c1BvaW50KHBvczpWZWN0b3IsZXhlbXB0PzpzdHJpbmdbXSxsaXN0ID0gdGhpcy5vYmplY3RzKTpvYmpbXXtcclxuICAgIHJldHVybiB0aGlzLmNoZWNrT2JqZWN0cyh7eDpwb3MueCx5OnBvcy55LGhlaWdodDowLHdpZHRoOjB9LGV4ZW1wdCxsaXN0KTtcclxuICB9XHJcbiAgLy9DaGVja3MgZm9yIGNvbGxpc2lvbnMgYXQgdGhlIHBvaW50IHRoYXQgY29udGFpbiBldmVyeSB0YWcgd2l0aGluIHRoZSBzZWNvbmQgYXJndW1lbnRcclxuICBjaGVja0NvbGxpc2lvbnNQb2ludEluY2x1c2l2ZShwb3M6VmVjdG9yLHRhZ3M/OnN0cmluZ1tdLGxpc3QgPSB0aGlzLm9iamVjdHMpOm9ialtde1xyXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tDb2xsaXNpb25zSW5jbHVzaXZlKHt4OnBvcy54LHk6cG9zLnksaGVpZ2h0OjAsd2lkdGg6MH0sdGFncyxsaXN0KTtcclxuICB9XHJcbiAgLy9DaGVja3MgZm9yIGFueSBvYmplY3RzIHRoYXQgY29udGFpbiBldmVyeSB0YWcgd2l0aGluIHRoZSBzZWNvbmQgYXJndW1lbnRcclxuICBjaGVja09iamVjdHNQb2ludEluY2x1c2l2ZShwb3M6VmVjdG9yLHRhZ3M/OnN0cmluZ1tdLGxpc3QgPSB0aGlzLm9iamVjdHMpOm9ialtde1xyXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tPYmplY3RzSW5jbHVzaXZlKHt4OnBvcy54LHk6cG9zLnksaGVpZ2h0OjAsd2lkdGg6MH0sdGFncyxsaXN0KTtcclxuICB9XHJcbiAgLy9DaGVja3MgZm9yIGNvbGxpc2lvbnMgaW4gdGhlIGJveCB0aGF0IGNvbnRhaW4gdGhlIHRhZ3MgaW4gdGhlIHNlY29uZCBhcmd1bWVudFxyXG4gIGNoZWNrQ29sbGlzaW9uc0luY2x1c2l2ZShib3g6Y29sbGlzaW9uX2JveCx0YWdzOnN0cmluZ1tdLGxpc3Q9dGhpcy5vYmplY3RzKTpvYmpbXXtcclxuICAgIGlmKERFQlVHKXtcclxuICAgICAgcmVuZGVyX2NvbGxpc2lvbl9ib3goYm94KTtcclxuICAgIH1cclxuICAgIHJldHVybiBsaXN0LmZpbHRlcihvYmo9Pm9iai5jb2xsaXNpb24gJiYgb2JqLmNvbGxpZGVzV2l0aEJveChib3gpICYmIHRhZ3MuZXZlcnkoKHZhbCk9Pm9iai50YWdzLmluY2x1ZGVzKHZhbCkpKTtcclxuICAgIFxyXG4gIH1cclxuICAvL0NoZWNrcyBmb3IgYW55IG9iamVjdHMgaW4gdGhlIGJveCB0aGF0IGNvbnRhaW4gYWxsIHRhZ3MgaW4gdGhlIHNlY29uZCBhcmd1bWVudFxyXG4gIGNoZWNrT2JqZWN0c0luY2x1c2l2ZShib3g6Y29sbGlzaW9uX2JveCx0YWdzOnN0cmluZ1tdLGxpc3Q9dGhpcy5vYmplY3RzKTpvYmpbXXtcclxuICAgIGlmKERFQlVHKXtcclxuICAgICAgcmVuZGVyX2NvbGxpc2lvbl9ib3goYm94KTtcclxuICAgIH1cclxuICAgIHJldHVybiBsaXN0LmZpbHRlcigob2JqKT0+b2JqLmNvbGxpZGVzV2l0aEJveChib3gpICYmIHRhZ3MuZXZlcnkoKHZhbCk9Pm9iai50YWdzLmluY2x1ZGVzKHZhbCkpKTtcclxuICAgIFxyXG4gIH1cclxuICAvL2NoZWNrcyBmb3Igb2JqZWN0cyB3aXRoIGNvbGxpc2lvbiBpbiB0aGUgYm94IHRoYXQgZG8gbm90IGNvbnRhaW4gdGhlIHRhZ3MgaW4gdGhlIHNlY29uZCBhcmd1bWVudFxyXG4gIGNoZWNrQ29sbGlzaW9ucyhib3g6Y29sbGlzaW9uX2JveCxleGVtcHQ/OnN0cmluZ1tdLGxpc3Q9dGhpcy5vYmplY3RzKTpvYmpbXXtcclxuICAgIGlmKERFQlVHKXtcclxuICAgICAgcmVuZGVyX2NvbGxpc2lvbl9ib3goYm94KTtcclxuICAgIH1cclxuICAgIHJldHVybiBjaGVja19hbGxfY29sbGlzaW9ucyhib3gsbGlzdCxleGVtcHQpO1xyXG4gIH1cclxuICAvL2NoZWNrcyBmb3IgIGFueSBvYmplY3RzIGluIHRoZSBib3ggdGhhdCBkbyBub3QgY29udGFpbiB0aGUgdGFncyBpbiB0aGUgc2Vjb25kIGFyZ3VtZW50XHJcbiAgY2hlY2tPYmplY3RzKGJveDpjb2xsaXNpb25fYm94LGV4ZW1wdD86c3RyaW5nW10sbGlzdD10aGlzLm9iamVjdHMpOm9ialtde1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICByZW5kZXJfY29sbGlzaW9uX2JveChib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoZWNrX2FsbF9vYmplY3RzKGJveCxsaXN0LGV4ZW1wdCk7XHJcbiAgfVxyXG4gIC8vVGhpcyBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgdG8gY2FsbCBiaW5kQ29udHJvbCBhbmQgY3JlYXRlIGFueSBuZWVkZWQga2V5QmluZGluZ3NcclxuICByZWdpc3RlckNvbnRyb2xzKCl7XHJcblxyXG4gIH1cclxuICBjbGVhbnVwKCl7XHJcblxyXG4gIH1cclxuICAvL1RoZSByb29tJ3Mgc3RhdGUgdXBkYXRpbmcgZnVuY3Rpb24uXHJcbiAgc3RhdGVmKHRpbWU6IG51bWJlcikge1xyXG4gICAgZm9yKGxldCBwYXJ0aWNsZSBvZiB0aGlzLnBhcnRpY2xlc19hcnIpe1xyXG4gICAgICBwYXJ0aWNsZS5zdGF0ZWYodGltZSk7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IHRleHRfbm9kZSBvZiB0aGlzLnRleHRfbm9kZXMpe1xyXG4gICAgICB0ZXh0X25vZGUuc3RhdGVmKHRpbWUpO1xyXG4gICAgfVxyXG4gICAgbGV0IHRpY2tpbmdfb2JqZWN0cyA9IHRoaXMub2JqZWN0cy5maWx0ZXIoKG8pPT5vLnRpY2tfc3RhdGUpO1xyXG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCB0aWNraW5nX29iamVjdHMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgLy9UaGlzIGZ1bmN0aW9uIGNoZWNrcyB0aGUgdmVsb2NpdHkgb2YgZXZlcnkgb2JqZWN0LCBhbmQgbW92ZXMgaXQgaW50byBpdCdzIG5leHQgbG9jYXRpb25cclxuICAgICAgLy9wcm92aWRlZCB0aGF0IGl0IGNhbiBmaXQgdGhlcmUuXHJcbiAgICAgIHZlbG9jaXR5Q29sbGlzaW9uQ2hlY2sodGlja2luZ19vYmplY3RzW2FdLCB0aGlzLm9iamVjdHMpO1xyXG4gICAgICB0aWNraW5nX29iamVjdHNbYV0uc3RhdGVmKHRpbWUpO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5nYW1lLnN0YXRlLmNhbWVyYXMpe1xyXG4gICAgICBmb3IobGV0IGNhbWVyYXMgb2YgdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXMpe1xyXG4gICAgICAgIGlmKGNhbWVyYXMuaHVkKXtcclxuICAgICAgICAgIGNhbWVyYXMuaHVkLnN0YXRlZih0aW1lKTtcclxuICAgICAgICB9IFxyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gIH1cclxuICBlbWl0UGFydGljbGUobmFtZTpzdHJpbmcscG9zOnBvc2l0aW9uLGxpZmV0aW1lOm51bWJlcixwb3NfcmFuZ2U6bnVtYmVyKXtcclxuICAgIGxldCBzdGF0ZSA9IHtcclxuICAgICAgcG9zaXRpb246cG9zLFxyXG4gICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFkZEl0ZW0obmV3IFBhcnRpY2xlKHRoaXMucGFydGljbGVzW25hbWVdLHN0YXRlLGxpZmV0aW1lLHBvc19yYW5nZSksIHRoaXMucGFydGljbGVzX2Fycik7XHJcbiAgfVxyXG4gIGdldE9iaihpZDpzdHJpbmcpe1xyXG4gICAgZm9yKGxldCBhID0gMDsgYSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGErKyl7XHJcbiAgICAgIGlmKHRoaXMub2JqZWN0c1thXS5pZCA9PSBpZCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0c1thXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIC8vR2V0cyBhbnkgb2JqZWN0cyB0aGF0IGhhdmUgdGhlIHBhc3NlZCB0YWdcclxuICBnZXRPYmpCeVRhZyh0YWc6c3RyaW5nKTpvYmpbXXtcclxuICAgIHJldHVybiB0aGlzLm9iamVjdHMuZmlsdGVyKChhKT0+YS50YWdzLmluZGV4T2YodGFnKSA+IC0xKTtcclxuICB9XHJcbiAgLy9yZW5kZXJzIHRoZSByb29tJ3Mgc3ByaXRlXHJcbiAgcmVuZGVyZih0aW1lOiBudW1iZXIpOiBzcHJpdGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3ByaXRlX3NoZWV0OiB0aGlzLmJhY2tncm91bmQsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgc3ByaXRlX2hlaWdodDogdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCxcclxuICAgICAgc3ByaXRlX3dpZHRoOiB0aGlzLmJhY2tncm91bmQud2lkdGgsXHJcbiAgICAgIG9wYWNpdHk6MVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IG9iaiB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBvYmpfc3RhdGUsIFZlY3RvciwgZGltZW5zaW9uc30gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHtnZXRSYW5kSW50fSBmcm9tIFwiLi9tYXRoXCI7XHJcbmltcG9ydCB7cGFydGljbGVfZW50cnl9IGZyb20gXCIuL3Jvb21cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugc3ByaXRle1xyXG4gIHNwcml0ZV9zaGVldDpIVE1MSW1hZ2VFbGVtZW50LFxyXG4gIGxlZnQ6bnVtYmVyLFxyXG4gIHRvcDpudW1iZXIsXHJcbiAgc3ByaXRlX3dpZHRoOm51bWJlcixcclxuICBzcHJpdGVfaGVpZ2h0Om51bWJlcixcclxuICBvcGFjaXR5Om51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHBvc2l0aW9uZWRfc3ByaXRle1xyXG4gIHNwcml0ZTpzcHJpdGUsXHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhcnRpY2xlX2kgZXh0ZW5kcyBvYmpfc3RhdGV7XHJcbiAgbGlmZXRpbWU6bnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFydGljbGUgZXh0ZW5kcyBvYmp7XHJcbiAgY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgcmFuZG9tX3JhbmdlOm51bWJlcjtcclxuICBtYXhfbGlmZXRpbWU6bnVtYmVyO1xyXG4gIHN0YXRlOlBhcnRpY2xlX2k7XHJcbiAgc2VsZWN0ZWRfc3ByaXRlOnNwcml0ZTtcclxuICBjb25zdHJ1Y3RvcihwYXJ0OnBhcnRpY2xlX2VudHJ5LHN0YXRlOm9ial9zdGF0ZSxsaWZldGltZTpudW1iZXIscmFuZG9tX3JhbmdlOm51bWJlcil7XHJcbiAgICBzdXBlcihzdGF0ZSk7XHJcbiAgICB0aGlzLnN0YXRlLmxpZmV0aW1lID0gMDtcclxuICAgIHRoaXMuc3ByaXRlX3VybCA9IHBhcnQuc3ByaXRlO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBwYXJ0LmhlaWdodDtcclxuICAgIHRoaXMud2lkdGggPSBwYXJ0LndpZHRoO1xyXG4gICAgdGhpcy5tYXhfbGlmZXRpbWUgPSBsaWZldGltZTtcclxuICAgIHRoaXMucmFuZG9tX3JhbmdlID0gcmFuZG9tX3JhbmdlO1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi54ICs9IGdldFJhbmRJbnQoLXJhbmRvbV9yYW5nZS8yLHJhbmRvbV9yYW5nZS8yKTtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSArPSBnZXRSYW5kSW50KC1yYW5kb21fcmFuZ2UvMixyYW5kb21fcmFuZ2UvMik7XHJcbiAgfVxyXG4gIGRlbGV0ZSgpe1xyXG4gICAgbGV0IHJvb20gPSB0aGlzLmdhbWUuZ2V0Um9vbSgpO1xyXG4gICAgcm9vbS5kZWxldGVJdGVtKHRoaXMuaWQscm9vbS5wYXJ0aWNsZXNfYXJyKTtcclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6bnVtYmVyKXtcclxuICAgIHRoaXMuc3RhdGUubGlmZXRpbWUgKz0gdGltZTtcclxuICAgIGlmKHRoaXMuc3RhdGUubGlmZXRpbWUgPiB0aGlzLm1heF9saWZldGltZSl7XHJcbiAgICAgIHRoaXMuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcmYodGltZTpudW1iZXIpOnBvc2l0aW9uZWRfc3ByaXRle1xyXG4gICAgaWYoIXRoaXMuc2VsZWN0ZWRfc3ByaXRlKXtcclxuICAgICAgbGV0IHNwcml0ZXMgPSBzcHJpdGVfZ2VuKHRoaXMuc3ByaXRlX3NoZWV0LHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgIGxldCByYW5kb21fcm93ID0gZ2V0UmFuZEludCgwLHNwcml0ZXMubGVuZ3RoKTtcclxuICAgICAgbGV0IHJhbmRvbV9jb2wgPSBnZXRSYW5kSW50KDAsc3ByaXRlc1tyYW5kb21fcm93XS5sZW5ndGgpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkX3Nwcml0ZSA9IHNwcml0ZXNbcmFuZG9tX3Jvd11bcmFuZG9tX2NvbF07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkX3Nwcml0ZS5vcGFjaXR5ID0gMSAtIHRoaXMuc3RhdGUubGlmZXRpbWUvdGhpcy5tYXhfbGlmZXRpbWU7XHJcbiAgICByZXR1cm57XHJcbiAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICB5OnRoaXMuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgc3ByaXRlOnRoaXMuc2VsZWN0ZWRfc3ByaXRlIFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwcml0ZV9nZW4oc3ByaXRlX3NoZWV0OkhUTUxJbWFnZUVsZW1lbnQsc3ByaXRlX3dpZHRoOm51bWJlcixzcHJpdGVfaGVpZ2h0Om51bWJlcik6QXJyYXk8QXJyYXk8c3ByaXRlPj57XHJcbiAgbGV0IHdpZHRoID0gc3ByaXRlX3NoZWV0LndpZHRoO1xyXG4gIGxldCBoZWlnaHQgPSBzcHJpdGVfc2hlZXQuaGVpZ2h0O1xyXG4gIGxldCBzcHJpdGVzOkFycmF5PEFycmF5PHNwcml0ZT4+ID0gW107XHJcbiAgZm9yKGxldCBiID0gMDsgYiA8IGhlaWdodDtiICs9IHNwcml0ZV9oZWlnaHQpe1xyXG4gICAgc3ByaXRlcy5wdXNoKFtdKTtcclxuICAgIGZvcihsZXQgYSA9IDA7IGEgPCB3aWR0aDthICs9IHNwcml0ZV93aWR0aCl7XHJcbiAgICAgIHNwcml0ZXNbYl0ucHVzaCh7XHJcbiAgICAgICAgc3ByaXRlX3NoZWV0LFxyXG4gICAgICAgIGxlZnQ6YSxcclxuICAgICAgICB0b3A6YiAqIHNwcml0ZV9oZWlnaHQsXHJcbiAgICAgICAgc3ByaXRlX2hlaWdodCxcclxuICAgICAgICBzcHJpdGVfd2lkdGgsXHJcbiAgICAgICAgb3BhY2l0eToxXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzcHJpdGVzO1xyXG59XHJcblxyXG4iLCJleHBvcnQgbGV0IG9iamVjdF90ZW1wbGF0ZSA9IFxyXG5gaW1wb3J0IHtvYmp9IGZyb20gXCJsaWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSwgVmVjdG9yIH0gZnJvbSBcImxpYi9zdGF0ZVwiO1xyXG5cclxuaW50ZXJmYWNlIHRlbXBsYXRlX3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRle1xyXG4gICAgXHJcbn1cclxuICAgIFxyXG5pbnRlcmZhY2UgdGVtcGxhdGVfcGFyYW1ldGVyc3tcclxuICAgIFxyXG59XHJcbiAgICBcclxuZXhwb3J0IGNsYXNzIHRlbXBsYXRlIGV4dGVuZHMgb2Jqe1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9FcnJvci5wbmdcIjtcclxuICBoZWlnaHQgPSAxMDA7XHJcbiAgd2lkdGggPSAxMDA7XHJcbiAgdGFnczpBcnJheTxzdHJpbmc+O1xyXG4gIGNvbGxpc2lvbiA9IHRydWU7XHJcbiAgcmVuZGVyID0gdHJ1ZTtcclxuICBzdGF0ZTp0ZW1wbGF0ZV9zdGF0ZTtcclxuICBwYXJhbXM6dGVtcGxhdGVfcGFyYW1ldGVycztcclxuICBzdGF0aWMgZGVmYXVsdF9wYXJhbXM6dGVtcGxhdGVfcGFyYW1ldGVycyA9IHt9XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczp0ZW1wbGF0ZV9wYXJhbWV0ZXJzID0gdGVtcGxhdGUuZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUscGFyYW1zKTtcclxuICB9XHJcbiAgc3RhdGVmKHRpbWVfZGVsdGE6bnVtYmVyKXtcclxuICAgIHN1cGVyLnN0YXRlZih0aW1lX2RlbHRhKTtcclxuICB9XHJcbiAgcmVuZGVyZih0aW1lX2RlbHRhOm51bWJlcil7XHJcbiAgIHJldHVybiBzdXBlci5yZW5kZXJmKHRpbWVfZGVsdGEpOyBcclxuICB9XHJcbiAgcmVnaXN0ZXJfYW5pbWF0aW9ucygpe1xyXG4gICAgXHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2F1ZGlvKCl7XHJcbiAgICBcclxuICB9XHJcbiAgcmVnaXN0ZXJfY29udHJvbHMoKXtcclxuICAgICAgICBcclxuICB9XHJcbn1gOyAgICAiLCJleHBvcnQgbGV0IHJvb21fdGVtcGxhdGUgPSBcclxuYGltcG9ydCB7IHJvb20gfSBmcm9tIFwibGliL3Jvb21cIjtcclxuaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCJzcmMvdmFuXCI7XHJcbmltcG9ydCB7IHN0YXRlX2NvbmZpZyB9IGZyb20gXCJsaWIvcm9vbVwiO1xyXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4vdGVtcGxhdGUuanNvblwiO1xyXG5sZXQgY2ZpZyA9IGNvbmZpZyBhcyB1bmtub3duIGFzIHN0YXRlX2NvbmZpZztcclxuaW50ZXJmYWNlIHRlbXBsYXRlX3N0YXRlIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyB0ZW1wbGF0ZSBleHRlbmRzIHJvb208dGVtcGxhdGVfc3RhdGU+e1xyXG4gIGJhY2tncm91bmRfdXJsID0gXCIuL3Nwcml0ZXMvRXJyb3IucG5nXCI7XHJcbiAgcmVuZGVyID0gdHJ1ZTtcclxuICBjb25zdHJ1Y3RvcihnYW1lOiBnYW1lPHVua25vd24+KSB7XHJcbiAgICBzdXBlcihnYW1lLCBjZmlnKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJDb250cm9scygpIHtcclxuXHJcbiAgfVxyXG4gIHJlZ2lzdGVyUGFydGljbGVzKCkge1xyXG5cclxuICB9XHJcbiAgc3RhdGVmKGRlbHRhX3RpbWU6IG51bWJlcikge1xyXG4gICAgc3VwZXIuc3RhdGVmKGRlbHRhX3RpbWUpO1xyXG4gIH1cclxuXHJcbn1gOyIsImV4cG9ydCBsZXQgREVCVUcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2Rldic7XHJcbmV4cG9ydCBsZXQgUEFVU0VEID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXYnO1xyXG5pbXBvcnQgeyBvYmp9IGZyb20gXCIuL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgcm9vbSB9IGZyb20gXCIuL2xpYi9yb29tXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi9saWIvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IHNwcml0ZV9yZW5kZXJlciwgcmVjdF9yZW5kZXJlciwgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyLCBodWRfdGV4dF9yZW5kZXJlciwgQ2FtZXJhLCB0ZXh0X3JlbmRlcmVyICxzY2FsZV90eXBlfSBmcm9tIFwiLi9saWIvcmVuZGVyXCI7XHJcbmltcG9ydCB7IEV4ZWN1dGVSZXBlYXRCaW5kcywgVW5iaW5kIH0gZnJvbSBcIi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IGluaXRfY2xpY2tfaGFuZGxlciB9IGZyb20gXCIuL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBkZWJ1Z19zdGF0ZSwgZGVidWdfdXBkYXRlX3Jvb21fbGlzdCwgZGVidWdfdXBkYXRlX29ial9saXN0LGRlYnVnX3VwZGF0ZV9wcmVmYWJzLCBkZWJ1Z19zdGF0ZWYsIGRlYnVnX3NldHVwIH0gZnJvbSBcIi4vbGliL2RlYnVnXCI7XHJcbmltcG9ydCB7IHJvb21zIGFzIHJvb21fbGlzdCB9IGZyb20gXCIuL2dhbWUvcm9vbXMvcm9vbXNcIjtcclxuXHJcblxyXG5sZXQgY2FudmFzX2VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmxldCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXNfZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5cclxubGV0IHNjcmVlbl93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5sZXQgc2NyZWVuX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcblxyXG4vL0hvdyBvZnRlbiB0aGUgZ2FtZSBsb2dpYyBsb29wIHNob3VsZCBydW4sIGluIG1pbGxpc2Vjb25kc1xyXG5sZXQgbG9naWNfbG9vcF9pbnRlcnZhbDogbnVtYmVyID0gMTAwMCAvIDYwO1xyXG5cclxubGV0IGxhc3RfdGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG5sZXQgbGFzdF9yZW5kZXJfdGltZSA9IDA7XHJcblxyXG5pbnRlcmZhY2UgZGltZW5zaW9ucyB7XHJcbiAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgd2lkdGg6IG51bWJlclxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFNjcmVlbkRpbWVuc2lvbnMoKTogZGltZW5zaW9ucyB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICB3aWR0aDogc2NyZWVuX3dpZHRoLFxyXG4gICAgaGVpZ2h0OiBzY3JlZW5faGVpZ2h0XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFZpZXdwb3J0RGltZW5zaW9ucygpOiBkaW1lbnNpb25zIHtcclxuICByZXR1cm4gKHtcclxuICAgIGhlaWdodDogY2FudmFzX2VsZW1lbnQuaGVpZ2h0LFxyXG4gICAgd2lkdGg6IGNhbnZhc19lbGVtZW50LndpZHRoXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGxldCB2aWV3cG9ydCA9IHtcclxuICBoZWlnaHQ6IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodCxcclxuICB3aWR0aDogR2V0Vmlld3BvcnREaW1lbnNpb25zKCkud2lkdGhcclxufVxyXG5cclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gIHZpZXdwb3J0LmhlaWdodCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodFxyXG4gIHZpZXdwb3J0LndpZHRoID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkud2lkdGhcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERlYnVnKHg6IGJvb2xlYW4pIHtcclxuICBERUJVRyA9IHg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQYXVzZWQoeDogYm9vbGVhbikge1xyXG4gIFBBVVNFRCA9IHg7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJfY29sbGlzaW9uX2JveCA9IChhOiBjb2xsaXNpb25fYm94KSA9PiB7XHJcbiAgYm94ZXMucHVzaChhKTtcclxufVxyXG5cclxubGV0IGJveGVzOiBBcnJheTxjb2xsaXNpb25fYm94PiA9IFtdO1xyXG5cclxuZXhwb3J0IGxldCBkZWVwID0gKGE6IGFueSkgPT4ge1xyXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGEpKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIGdhbWVfc3RhdGU8VD4ge1xyXG4gIGxvZ2ljOiBudW1iZXIsXHJcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gIGN1cnJlbnRfcm9vbTogcm9vbTx1bmtub3duPixcclxuICBjYW1lcmFzOiBBcnJheTxDYW1lcmE+LFxyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgZ2xvYmFsczogVFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCByb29tczogYW55W10gPSBbXTtcclxuZXhwb3J0IGxldCBvYmplY3RzOiBhbnlbXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBnYW1lPFQ+e1xyXG4gIHN0YXRlOiBnYW1lX3N0YXRlPFQ+O1xyXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAvL1RoZSBvZmZzY3JlZW4gY2FudmFzIGFuZCBjb250ZXh0IGFyZSB1c2VkIGluIHJlbmRlcmluZyBtdWx0aXBsZSBDYW1lcmFzXHJcbiAgLy9UaGUgY29udGVudHMgYXJlIHJlbmRlcmVkIHRvIHRoZSBvZmZzY3JlZW4gY2FudmFzLCB0aGVuIGNvcGllZCB0byB0aGUgXHJcbiAgLy9vbnNjcmVlbiBjYW52YXMsIGluIHRoZSBwcm9wZXIgcG9zaXRpb24gaW4gdGhlIHZpZXdwb3J0XHJcbiAgb2Zmc2NyZWVuX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgb2Zmc2NyZWVuX2NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwcm90b3R5cGVzOiBBcnJheTxvYmo+ID0gW107XHJcbiAgcm9vbXM6IEFycmF5PGFueT4gPSBbXTtcclxuICBpc1JlbmRlcmluZyA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBpbml0X3N0YXRlOiBUKSB7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjYW52YXM6IGNhbnZhc19lbGVtZW50LFxyXG4gICAgICBsb2dpYzogdW5kZWZpbmVkLFxyXG4gICAgICBjb250ZXh0OiBjdHgsXHJcbiAgICAgIGNhbWVyYXM6IFtcclxuICAgICAgXSxcclxuICAgICAgY3VycmVudF9yb29tOiB1bmRlZmluZWQsXHJcbiAgICAgIGdsb2JhbHM6IGluaXRfc3RhdGVcclxuICAgIH1cclxuICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0ID0gdGhpcy5vZmZzY3JlZW5fY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIC8vREVCVUcgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnYW1lIGlzIHJ1bm5pbmcgd2l0aGluIHRoZSBlZGl0b3JcclxuICAgIGlmIChERUJVRykge1xyXG4gICAgICAvL1NldHMgdXAgc29tZSBnbG9iYWwgZGVidWcgc3RhdGUgYW5kIHRoZSBlZGl0b3Iga2V5YmluZGluZ3NcclxuICAgICAgZGVidWdfc2V0dXAoKTtcclxuICAgICAgLy9Jbml0aWFsaXplcyBhIHNlcGFyYXRlIGxvZ2ljIGxvb3Agc29sZWx5IGZvciB0aGUgZWRpdG9yXHJcbiAgICAgIC8vVGhpcyBzZXBhcmF0aW9uIGFsbG93cyBmb3IgdGhlIGVkaXRvciB0byBpbnRlcmFjdCB3aXRoIHRoZSBlbnZpcm9ubWVudCB3aGlsZVxyXG4gICAgICAvL3RoZSBhY3R1YWwgcm9vbSdzIHN0YXRlIGxvb3AgaXMgcGF1c2VkLlxyXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Um9vbSgpKSB7XHJcbiAgICAgICAgICAvL1RoaXMgZnVuY3Rpb25zIGhhbmRsZXMgdGhlIGVkaXRvciBpbnRlcmFjdGlvbnMgd2l0aCB0aGUgZ2FtZSBlbnZpcm9ubWVudFxyXG4gICAgICAgICAgZGVidWdfc3RhdGVmKDE2LjY2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDE2LjY2KVxyXG4gICAgfVxyXG4gICAgLy9DcmVhdGVzIGEgb25jbGljayBmdW5jdGlvbiBvbiB0aGUgd2luZG93IHRoYXQgaGFuZGxlcyBlbGVtZW50IG9uY2xpY2sgZnVuY3Rpb25zXHJcbiAgICBpbml0X2NsaWNrX2hhbmRsZXIodGhpcyk7XHJcbiAgfVxyXG4gIHJlbmRlcih0OiBudW1iZXIpIHtcclxuICAgIC8vdCBpcyBjdXJyZW50IHJlbmRlciB0aW1lXHJcbiAgICBsZXQgZGVsdGFfdGltZSA9IHQgLSBsYXN0X3JlbmRlcl90aW1lXHJcbiAgICBsYXN0X3JlbmRlcl90aW1lID0gdDtcclxuICAgIGxldCBhbGxfY2FtZXJhcyA9IHRoaXMuc3RhdGUuY2FtZXJhcztcclxuICAgIGxldCBlZGl0b3JfY2FtZXJhX2luZGV4ID0gLTE7XHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgZGVidWdfc3RhdGUucmVuZGVyX2RlbHRhX3RpbWUgPSBkZWx0YV90aW1lO1xyXG4gICAgICBhbGxfY2FtZXJhcyA9IFsuLi5hbGxfY2FtZXJhcywgZGVidWdfc3RhdGUuY2FtZXJhXVxyXG4gICAgICBlZGl0b3JfY2FtZXJhX2luZGV4ID0gYWxsX2NhbWVyYXMubGVuZ3RoIC0gMTtcclxuICAgICAgaWYoYWxsX2NhbWVyYXMubGVuZ3RoID09PSAxKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jb250ZXh0LmZvbnQgPSBcIjUwcHggQXJpYWxcIlxyXG4gICAgICAgIHRoaXMuc3RhdGUuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29udGV4dC5maWxsVGV4dChcIk5PIENBTUVSQVwiLCB2aWV3cG9ydC53aWR0aC8yLCB2aWV3cG9ydC5oZWlnaHQvMik7XHJcbiAgICAgIH1cclxuICAgICAgLy9UaGUgZWRpdG9yIGNhbWVyYSBpcyBhbHdheXMgdGhlIGxhc3QgY2FtZXJhIGluc2lkZSB0aGUgY2FtZXJhcyBhcnJheVxyXG4gICAgICAvL3RoZSBlZGl0b3IgY2FtZXJhIGlzIHJlbmRlcmVkIHRvIGEgZGlmZmVyZW50IGNhbnZhcyB0aGFuIHRoZSBtYWluIGdhbWUgY2FudmFzXHJcbiAgICAgIC8vc28gd2UgdXNlIHRoZSBjYW1lcmEncyBpbmRleCB0byBjaGVjayB3aGF0IGNhbnZhcyB0byByZW5kZXIgdG9cclxuICAgIH1cclxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYWxsX2NhbWVyYXMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgbGV0IGNhbWVyYSA9IGFsbF9jYW1lcmFzW2FdO1xyXG4gICAgICAvL1dlIHJlbmRlciB0aGUgY2FtZXJhcyBjb250ZW50cyB0byBhbiBvZmZzY3JlZW4gY2FudmFzLCB0aGVuIGNvcHkgaXRzIGNvbnRlbnRzXHJcbiAgICAgIC8vdG8gdGhlIG1haW4gY2FudmFzLlxyXG4gICAgICAvL1RoaXMgYWxsb3dzIHVzIHRvIGF2b2lkIGFueSBtYXRoIG5lZWRlZCB0byBkZXRlcm1pbmUgc3ByaXRlcyB0aGF0IGFyZSBwYXJ0aWFsbHkgb2Zmc2NyZWVuXHJcbiAgICAgIC8vYXMgYW55IG9mZnNjcmVlbiBzZWN0aW9ucyBvZiB0aGUgc3ByaXRlcyB3aWxsIG5vdCBiZSBjb3BpZWQgb3ZlciwgcmF0aGVyIHRoYW4gZXhwbGljaXRseSBcclxuICAgICAgLy9jYWxjdWxhdGluZyB0aGUgY3V0b2Zmc1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jYW52YXMuaGVpZ2h0ID0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0O1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jYW52YXMud2lkdGggPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aDtcclxuICAgICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgsIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCk7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoLCBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQpO1xyXG4gICAgICAvL1RoaXMgY29sbGlzaW9uIGJveCByZXByZXNlbnRzIHRoZSBjYW1lcmEncyBmaWVsZCBvZiB2aWV3IGluIHRoZSBnYW1lIHNwYWNlXHJcbiAgICAgIC8vV2UgdXNlIHRoZSByb29tJ3MgY2hlY2tPYmplY3RzIGZ1bmN0aW9uIHRvIGZpbmQgYW55IG9iamVjdCB0aGF0IGV4aXN0cyB3aXRoaW4gdGhpcyBhcmVhXHJcbiAgICAgIC8vVGhlc2Ugb2JqZWN0cyBhcmUgdGhlIG9iamVjdHMgdGhhdCBuZWVkIHRvIGJlIHJlbmRlcmVkIGZvciB0aGlzIGNhbWVyYVxyXG4gICAgICBsZXQgY2FtZXJhX2JveCA9IHtcclxuICAgICAgICB4OiBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OiBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDogY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMSAvIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKSxcclxuICAgICAgICBoZWlnaHQ6IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxIC8gY2FtZXJhLnN0YXRlLnNjYWxpbmcpXHJcbiAgICAgIH07XHJcbiAgICAgIC8vTGlzdCBvZiBhbGwgcGFydGljbGVzIHdpdGhpbiB0aGUgY2FtZXJhJ3MgZm92XHJcbiAgICAgIGxldCBwYXJ0aWNsZV9jb2xsaWRlcyA9IHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmNoZWNrT2JqZWN0cyhjYW1lcmFfYm94LCBbXSwgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ucGFydGljbGVzX2Fycik7XHJcbiAgICAgIC8vTGlzdCBvZiBhbGwgb2JqZWN0cyB3aXRoaW4gdGhlIGNhbWVyYSdzIGZvdlxyXG4gICAgICBsZXQgY2FtZXJhX2NvbGxpZGVycyA9IFsuLi50aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5jaGVja09iamVjdHMoY2FtZXJhX2JveCksIC4uLnBhcnRpY2xlX2NvbGxpZGVzXTtcclxuXHJcbiAgICAgIGxldCByZW5kZXJfYXJncyA9IHtcclxuICAgICAgICBjb250ZXh0OiB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LFxyXG4gICAgICAgIGNhbWVyYTogY2FtZXJhLFxyXG4gICAgICB9O1xyXG4gICAgICAvL1JlbmRlcnMgdGhlIHJvb20ncyBiYWNrZ3JvdW5kLlxyXG4gICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5yZW5kZXIpe1xyXG4gICAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgc3ByaXRlOiB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5yZW5kZXJmKGRlbHRhX3RpbWUpLFxyXG4gICAgICAgICAgeDogMCxcclxuICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICByb3RhdGlvbjogMCxcclxuICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzY2FsZV90eXBlOnNjYWxlX3R5cGUuZ3Jvd1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vQXJyYXkgb2YgaGl0Ym94ZXMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgcm9vbVxyXG4gICAgICBsZXQgaGl0Ym94ZXM6IGNvbGxpc2lvbl9ib3hbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBhIG9mIGNhbWVyYV9jb2xsaWRlcnMuZmlsdGVyKChiKSA9PiBiLnJlbmRlcikuc29ydCgoYSwgYikgPT4gKGEubGF5ZXIgLSBiLmxheWVyKSkpIHtcclxuICAgICAgICBsZXQgcmVuZGVyZWQgPSBhLnJlbmRlclRyYWNrKHQpO1xyXG5cclxuICAgICAgICAvL09iamVjdHMgY2FuIHJldHVybiBlaXRoZXIgYSBzcHJpdGUsIG9yIGFuIGFycmF5IG9mIHNwcml0ZXMgdG8gc2ltcGxpZnkgdGhlIEFQSVxyXG4gICAgICAgIC8vRm9yIHRoZSB1c2VyLCBhbmQgZm9yIHVzZSBpbiBjb21wb3NpdGUgb2JqZWN0cyhvYmplY3QgdGhhdCBidW5kbGVzIG90aGVyIG9iamVjdHMgdG9nZXRoZXIpXHJcbiAgICAgICAgLy9JbnRlcm5hbGx5LCB3ZSBjb252ZXJ0IGFueSBzaW5nbGUgc3ByaXRlIGludG8gYW4gYXJyYXkgb2Ygb25lIHNwcml0ZS5cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IHBvc2l0aW9uZWRfc3ByaXRlIG9mIHJlbmRlcmVkKVxyXG4gICAgICAgICAgc3ByaXRlX3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICAgIHNwcml0ZTogcG9zaXRpb25lZF9zcHJpdGUuc3ByaXRlLFxyXG4gICAgICAgICAgICB4OiBwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICB5OiBwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgICAgICByb3RhdGlvbjogYS5zdGF0ZS5yb3RhdGlvbixcclxuICAgICAgICAgICAgc2NhbGU6IGEuc3RhdGUuc2NhbGluZyxcclxuICAgICAgICAgICAgc2NhbGVfdHlwZTphLnNjYWxlX3R5cGVcclxuICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy9IaXRib3hlcyBhcmUgcmVuZGVyZWQgbGF0ZSBpbiB0aGUgcmVuZGVyIGxvb3AsIHRvIGVuc3VyZSBvYmplY3RzIGRvbid0IG92ZXJsYXAgdGhlbVxyXG4gICAgICAgIC8vQXMgd2UgcmVuZGVyIG9iamVjdHMsIHdlIGFkZCB0aGVpciBoaXRib3hlcyB0byB0aGlzIGxpc3RcclxuICAgICAgICBpZiAoREVCVUcgJiYgYS5jb2xsaXNpb24pIHtcclxuICAgICAgICAgIGhpdGJveGVzLnB1c2goLi4uYS5nZXRBbGxDb2xsaXNpb25Cb3hlcygpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy9UaGlzIGlzIGEgc3BlY2lhbCBjbGFzcyBvZiBvYmplY3QgdGhhdCBleGlzdHMgaW4gdGhlIGdhbWUgd29ybGRcclxuICAgICAgZm9yIChsZXQgbm9kZSBvZiB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS50ZXh0X25vZGVzKSB7XHJcbiAgICAgICAgdGV4dF9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgeDogbm9kZS5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgeTogbm9kZS5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgZm9udDogbm9kZS5yZW5kZXJmKHQpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNhbWVyYS5odWQpIHtcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBjYW1lcmEuaHVkLmdyYXBoaWNfZWxlbWVudHM7XHJcbiAgICAgICAgbGV0IHRleHRfZWxlbWVudHMgPSBjYW1lcmEuaHVkLnRleHRfZWxlbWVudHM7XHJcbiAgICAgICAgLy9SZW5kZXJzIHN0YXRpYyBncmFwaGljcyB0aGF0IGFyZSBhIHBhcnQgb2YgdGhlIGh1ZFxyXG4gICAgICAgIGZvciAobGV0IGdyYXBoaWMgb2YgZ3JhcGhpY3MpIHtcclxuICAgICAgICAgIGxldCByZW5kZXJlZCA9IGdyYXBoaWMucmVuZGVyVHJhY2sodCk7XHJcbiAgICAgICAgICBpZiAoZ3JhcGhpYy5yZW5kZXIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcG9zaXRpb25lZF9zcHJpdGUgb2YgcmVuZGVyZWQpIHtcclxuICAgICAgICAgICAgICBzcHJpdGVfcmVuZGVyZXIocmVuZGVyX2FyZ3MsIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZTogcG9zaXRpb25lZF9zcHJpdGUuc3ByaXRlLFxyXG4gICAgICAgICAgICAgICAgeDogcG9zaXRpb25lZF9zcHJpdGUueCxcclxuICAgICAgICAgICAgICAgIHk6IHBvc2l0aW9uZWRfc3ByaXRlLnksXHJcbiAgICAgICAgICAgICAgICByb3RhdGlvbjogZ3JhcGhpYy5zdGF0ZS5yb3RhdGlvbixcclxuICAgICAgICAgICAgICAgIHNjYWxlOiBncmFwaGljLnN0YXRlLnNjYWxpbmcsXHJcbiAgICAgICAgICAgICAgICBzY2FsZV90eXBlOmdyYXBoaWMuc2NhbGVfdHlwZVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHRleHQgb2YgdGV4dF9lbGVtZW50cykge1xyXG4gICAgICAgICAgaHVkX3RleHRfcmVuZGVyZXIocmVuZGVyX2FyZ3MsIHtcclxuICAgICAgICAgICAgeDogdGV4dC5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiB0ZXh0LnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIGZvbnQ6IHRleHQucmVuZGVyZih0KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy9JZiBhIGNhbWVyYSBpcyBtYXJrZWQgYXMgYSBkZWJ1ZyBjYW1lcmEsIHdlIHJlbmRlciB0aGVcclxuICAgICAgLy8gIGhpdGJveGVzLCBhbmQgcG90ZW50aWFsbHkgdXBkYXRlIHRoZSBlZGl0b3JcclxuICAgICAgaWYgKGNhbWVyYS5zdGF0ZS5kZWJ1Zykge1xyXG4gICAgICAgIGxldCBib3g6IGNvbGxpc2lvbl9ib3g7XHJcbiAgICAgICAgbGV0IGJveGVzX2NvcHkgPSBbLi4uYm94ZXNdXHJcbiAgICAgICAgd2hpbGUgKGJveGVzX2NvcHkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGV0IGJveCA9IGJveGVzX2NvcHkucG9wKCk7XHJcbiAgICAgICAgICBsZXQgcmVjdCA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IGJveC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBib3guaGVpZ2h0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHJva2VkX3JlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCwgcmVjdCwgYm94LngsIGJveC55LCBcIiNGRjAwMDBcIiwgMSwgY2FtZXJhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGhpdGJveGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGxldCBib3ggPSBoaXRib3hlcy5wb3AoKTtcclxuICAgICAgICAgIGxldCByZWN0ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogYm94LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LCByZWN0LCBib3gueCwgYm94LnksIFwiIzAwODAwMFwiLCAxLCBjYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0RyYXdzIGEgc3BlY2lhbCBib3ggYXJvdW5kIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZWxlbWVudFxyXG4gICAgICAgIC8vaW5zaWRlIHRoZSBlZGl0b3IgVUlcclxuICAgICAgICBpZiAoREVCVUcgJiYgZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50KSB7XHJcbiAgICAgICAgICBsZXQgY29sbCA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudC5nZXRGdWxsQ29sbGlzaW9uQm94KCk7XHJcbiAgICAgICAgICByZWN0X3JlbmRlcmVyKHRoaXMub2Zmc2NyZWVuX2NvbnRleHQsIHsgd2lkdGg6IDI1LCBoZWlnaHQ6IDI1IH0sIGNvbGwueCwgY29sbC55LCBcInNreWJsdWVcIiwgMTAsIGNhbWVyYSk7XHJcbiAgICAgICAgICBzdHJva2VkX3JlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCwgY29sbCwgY29sbC54LCBjb2xsLnksIFwiYmx1ZVwiLCAxLCBjYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL1NlcGFyYXRlIGNhbnZhcyBmb3IgdGhlIGVkaXRvciBjYW1lcmFcclxuICAgICAgaWYgKGEgIT09IGVkaXRvcl9jYW1lcmFfaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMub2Zmc2NyZWVuX2NhbnZhcywgY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngsIGNhbWVyYS5zdGF0ZS52aWV3cG9ydC55KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBkZWJ1Z19zdGF0ZS50YXJnZXQuZ2V0Q29udGV4dChcIjJkXCIpLmRyYXdJbWFnZSh0aGlzLm9mZnNjcmVlbl9jYW52YXMsIGNhbWVyYS5zdGF0ZS52aWV3cG9ydC54LCBjYW1lcmEuc3RhdGUudmlld3BvcnQueSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChERUJVRylcclxuICAgICAgYm94ZXMgPSBbXTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoYSkgPT4geyB0aGlzLnJlbmRlcihhKSB9KTtcclxuICB9XHJcbiAgc3RhcnRfbG9naWMoYTogbnVtYmVyKSB7XHJcbiAgICAvL3RoaXMgaXMgdGhlIHJvb20ncyBzdGF0ZSBsb29wXHJcbiAgICByZXR1cm4gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgbGV0IG5ld190aW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgaWYgKCFQQVVTRUQpIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdGltZV9zaW5jZSA9IG5ld190aW1lLmdldFRpbWUoKSAtIGxhc3RfdGltZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tKSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5zdGF0ZWYodGltZV9zaW5jZSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uaHVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmh1ZC5zdGF0ZWYodGltZV9zaW5jZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxhc3RfdGltZSA9IG5ld190aW1lO1xyXG4gICAgICAvL1RoaXMgZnVuY3Rpb25zIGhhbmRsZXMgYmluZHMgdGhhdCBvY2N1ciBvbiBhbiBpbnRlcnZhbFxyXG4gICAgICBFeGVjdXRlUmVwZWF0QmluZHMoYSk7XHJcbiAgICB9LCBhKTtcclxuICB9XHJcbiAgZ2V0Um9vbSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbTtcclxuICB9XHJcbiAgYXN5bmMgbG9hZFJvb21TdHJpbmcoeDogc3RyaW5nKSB7XHJcbiAgICAvL3Jvb20gbGlzdCBpcyBhIG9iamVjdCB0aGF0IGNvbnRhaW5zIGVhY2ggcm9vbSdzIGNsYXNzLFxyXG4gICAgLy93aXRoIHRoZSByb29tJ3MgbmFtZSBhcyB0aGUga2V5IGZvciBjbGFzc1xyXG4gICAgLy9UaGlzIG9iamVjdCBpcyBwb3B1bGF0ZWQgYXQgY29tcGlsZSB0aW1lXHJcbiAgICBmb3IgKGxldCBhIG9mIE9iamVjdC5rZXlzKHJvb21fbGlzdCkpIHtcclxuICAgICAgaWYgKGEgPT0geCkge1xyXG4gICAgICAgIC8vdGhpcyBpc24ndCBwYXJ0aWN1bGFybHkgdHlwZS1zYWZlLlxyXG4gICAgICAgIGxldCBuZXdfcm9vbSA9IDxyb29tPHt9Pj5uZXcgcm9vbV9saXN0W2FdKHRoaXMpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkUm9vbShuZXdfcm9vbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRSb29tKHg6IHJvb208dW5rbm93bj4pIHtcclxuICAgIC8vQ2xlYXJzIHRoZSByb29tJ3MgbG9naWMgbG9vcCBpZiBvbmVcclxuICAgIC8vV2FzIGFscmVhZHkgcnVubmluZ1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubG9naWMpIHtcclxuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5sb2dpYyk7XHJcbiAgICB9XHJcbiAgICAvL1RoaXMgcmVmZXJlbmNlIGlzIHVzZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uXHJcbiAgICB4LmdhbWUgPSB0aGlzO1xyXG4gICAgLy9EZWxldGVzIGVhY2ggb2JqZWN0IGluIHRoZSByb29tICh3aGljaCBhbHNvIHVuYmluZHMgdGhlaXIgYmluZHMpLFxyXG4gICAgLy9hbmQgdW5iaW5kcyB0aGUgcm9vbSdzIGJpbmRpbmdzLlxyXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgd2hpbGUgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHNbMF0uZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaWQgb2YgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uYmluZHMpIHtcclxuICAgICAgICBVbmJpbmQoaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3X3Jvb20gPSBhd2FpdCB4LmxvYWQoKTtcclxuICAgIHgucmVnaXN0ZXJDb250cm9scygpO1xyXG4gICAgeC5yZWdpc3RlclBhcnRpY2xlcygpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUubG9naWMgPSB0aGlzLnN0YXJ0X2xvZ2ljKGxvZ2ljX2xvb3BfaW50ZXJ2YWwpXHJcbiAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbSA9IHg7XHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgZGVidWdfdXBkYXRlX3Jvb21fbGlzdCgpO1xyXG4gICAgICBkZWJ1Z191cGRhdGVfcHJlZmFicygpO1xyXG4gICAgICBkZWJ1Z191cGRhdGVfb2JqX2xpc3QoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKCF0aGlzLmlzUmVuZGVyaW5nKSB7XHJcbiAgICAgIC8vVGhpcyBzdGFydHMgdGhlIHJlbmRlciBsb29wIGZvciB0aGUgcm9vbVxyXG4gICAgICB0aGlzLnJlbmRlcigwKTtcclxuICAgICAgdGhpcy5pc1JlbmRlcmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=