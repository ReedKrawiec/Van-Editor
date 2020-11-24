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
const render_1 = __webpack_require__(/*! ../lib/render */ "./src/lib/render.ts");
let canvas_element = document.getElementById("target");
exports.g = new van_1.game(canvas_element.getContext("2d"), {});
exports.g.state.cameras = [
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
exports.g.loadRoomString("Overworld");


/***/ }),

/***/ "./src/lib/controls.ts":
/*!*****************************!*\
  !*** ./src/lib/controls.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bind = exports.Unbind = exports.ExecuteRepeatBinds = exports.Poll_Mouse = exports.held_keys = exports.debug_binds = exports.exec_type = exports.btype = exports.init_click_handler = void 0;
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
let target = document.getElementById("target");
function init_click_handler(game) {
    let func = (e) => {
        for (let camera of game.state.cameras) {
            let mouse = Poll_Mouse(game.state.canvas, camera);
            let box = {
                x: mouse.x,
                y: mouse.y,
                height: 1,
                width: 1
            };
            let d;
            if (!van_1.PAUSED && (!van_1.DEBUG || van_1.DEBUG_v.last_clicked.id == "target")) {
                d = [...all_binds];
            }
            else if (van_1.DEBUG && van_1.DEBUG_v.last_clicked.id == "debug_target") {
                d = [...exports.debug_binds];
            }
            else {
                d = [];
            }
            for (let a = 0; a < d.length; a++) {
                let selected = d[a];
                if (selected.type === btype.mouse && selected.key === "mouse1" && camera === selected.camera && selected.execute == exec_type.once) {
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
        }
    };
    target.addEventListener("click", (e) => func(e));
    target.addEventListener("contextmenu", (e) => func(e));
}
exports.init_click_handler = init_click_handler;
window.addEventListener("wheel", (e) => {
    let dir;
    if (e.deltaY < 0) {
        dir = "up";
    }
    else if (e.deltaY > 0) {
        dir = "down";
    }
    let d;
    if (!van_1.PAUSED && (!van_1.DEBUG || van_1.DEBUG_v.last_clicked.id == "target")) {
        d = [...all_binds];
    }
    else if (van_1.DEBUG && e.target.id == "debug_target") {
        d = [...exports.debug_binds];
    }
    else {
        d = [];
    }
    for (let a = 0; a < d.length; a++) {
        let selected = d[a];
        if (selected.type === btype.mouse && selected.key === ("scroll" + dir)) {
            if (selected.execute === exec_type.once) {
                selected.function();
            }
        }
    }
});
window.addEventListener("mousedown", (e) => {
    e.preventDefault();
    let d;
    if (!van_1.PAUSED && (!van_1.DEBUG || van_1.DEBUG_v.last_clicked.id == "target")) {
        d = [...all_binds];
    }
    else if (van_1.DEBUG && e.target.id == "debug_target") {
        d = [...exports.debug_binds];
    }
    else {
        d = [];
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
    if (!van_1.PAUSED && (!van_1.DEBUG || van_1.DEBUG_v.last_clicked.id == "target")) {
        d = [...all_binds];
    }
    else if (van_1.DEBUG && e.target.id == "debug_target") {
        d = [...exports.debug_binds];
    }
    else {
        d = [];
    }
    for (let a = 0; a < d.length; a++) {
        let selected = d[a];
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
        else if (selected.type === btype.mouse && selected.key === ("mouse" + e.button + "up") && !selected.executed) {
            if (selected.execute === exec_type.once) {
                selected.function();
            }
            else if (selected.execute === exec_type.repeat) {
                selected.repeat_timer.active = true;
            }
            selected.executed = true;
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
window.addEventListener("keydown", (e) => {
    let d;
    if (!van_1.PAUSED && (!van_1.DEBUG || van_1.DEBUG_v.last_clicked.id == "target")) {
        d = [...all_binds];
    }
    else if (van_1.DEBUG && van_1.DEBUG_v.last_clicked.id == "debug_target") {
        d = [...exports.debug_binds];
    }
    else {
        d = [];
    }
    exports.held_keys[e.key] = true;
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
    let d;
    if (!van_1.PAUSED && (!van_1.DEBUG || van_1.DEBUG_v.last_clicked.id == "target")) {
        d = [...all_binds];
    }
    else if (van_1.DEBUG && van_1.DEBUG_v.last_clicked.id == "debug_target") {
        d = [...exports.debug_binds];
    }
    else {
        d = [];
    }
    exports.held_keys[e.key] = false;
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
tracker.addEventListener("mousemove", (e) => {
    var rect = e.target.getBoundingClientRect();
    last_x = x;
    last_y = y;
    x = e.clientX - rect.left; //x position within the element.
    y = e.clientY - rect.top; //y position within the element.
});
if (van_1.DEBUG) {
    document.getElementById("debug_target").addEventListener("mousemove", (e) => {
        var rect = e.target.getBoundingClientRect();
        last_x = x;
        last_y = y;
        x = e.clientX - rect.left; //x position within the element.
        y = e.clientY - rect.top; //y position within the element.
    });
}
var btype;
(function (btype) {
    btype[btype["mouse"] = 0] = "mouse";
    btype[btype["keyboard"] = 1] = "keyboard";
})(btype = exports.btype || (exports.btype = {}));
var exec_type;
(function (exec_type) {
    exec_type[exec_type["once"] = 0] = "once";
    exec_type[exec_type["repeat"] = 1] = "repeat";
})(exec_type = exports.exec_type || (exports.exec_type = {}));
let x = 0;
let y = 0;
let last_x = 0;
let last_y = 0;
let binds = {};
let mouseBinds = {};
let bind_count = 0;
let all_binds = [];
exports.debug_binds = [];
let repeat_binds = [];
exports.held_keys = {};
function Poll_Mouse(canvas, camera) {
    let height = canvas.height;
    let wratio = parseFloat(window.getComputedStyle(canvas).width) / canvas.width;
    let vratio = parseFloat(window.getComputedStyle(canvas).height) / canvas.height;
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
    constructor(ctx, init_state) {
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
                let shift_held = controls_1.held_keys["Shift"] ? 1 : 0;
                if (exports.DEBUG_v.last_clicked.id == "debug_target")
                    exports.DEBUG_v.camera.state.position.x = exports.DEBUG_v.camera.state.position.x - ((5 + shift_held * 5) * (1 / exports.DEBUG_v.camera.state.scaling));
            };
            let right_func = () => {
                let shift_held = controls_1.held_keys["Shift"] ? 1 : 0;
                if (exports.DEBUG_v.last_clicked.id == "debug_target")
                    exports.DEBUG_v.camera.state.position.x = exports.DEBUG_v.camera.state.position.x + ((5 + shift_held * 5) * (1 / exports.DEBUG_v.camera.state.scaling));
            };
            let down_func = () => {
                let shift_held = controls_1.held_keys["Shift"] ? 1 : 0;
                if (!controls_1.held_keys["Control"] && exports.DEBUG_v.last_clicked.id == "debug_target")
                    exports.DEBUG_v.camera.state.position.y = exports.DEBUG_v.camera.state.position.y - ((5 + shift_held * 5) * (1 / exports.DEBUG_v.camera.state.scaling));
            };
            let up_func = () => {
                let shift_held = controls_1.held_keys["Shift"] ? 1 : 0;
                if (exports.DEBUG_v.last_clicked.id == "debug_target")
                    exports.DEBUG_v.camera.state.position.y = exports.DEBUG_v.camera.state.position.y + ((5 + shift_held * 5) * (1 / exports.DEBUG_v.camera.state.scaling));
            };
            let scroll_up = () => {
                if (exports.DEBUG_v.last_clicked.id == "debug_target")
                    exports.DEBUG_v.camera.state.scaling = exports.DEBUG_v.camera.state.scaling + 0.05;
            };
            let save_func = () => {
                let ctrl_held = controls_1.held_keys["Control"];
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
                debug_statef(0);
            }, 16.66);
        }
        this.initialize();
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
            for (let a of exports.rooms) {
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbnRyb2xzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmVuZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQSxnRUFBcUM7QUFDckMsaUZBQXFDO0FBRXJDLElBQUksY0FBYyxHQUFxQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztBQUVuRixTQUFDLEdBQUcsSUFBSSxVQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQztBQUM1RCxTQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRztJ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LENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUksSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztJQUNsQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ3BCLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN6RDtTQUNJO1FBQ0gsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUks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SUFBSSxTQUFTLEVBQUM7Z0JBQy9CLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztZQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBM1pELG9CQTJaQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZ2FtZS9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHt2ZWxvY2l0eSxvYmpfc3RhdGUscm9vbV9zdGF0ZX0gZnJvbSBcIi4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge2dhbWUsdmlld3BvcnR9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHtDYW1lcmF9IGZyb20gXCIuLi9saWIvcmVuZGVyXCI7XHJcblxyXG5sZXQgY2FudmFzX2VsZW1lbnQ6SFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbmV4cG9ydCBsZXQgZyA9IG5ldyBnYW1lKGNhbnZhc19lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKSx7fSk7XHJcbmcuc3RhdGUuY2FtZXJhcyA9IFtcclxuICBuZXcgQ2FtZXJhKHtcclxuICAgIHg6MCxcclxuICAgIHk6MCxcclxuICAgIGRpbWVuc2lvbnM6e1xyXG4gICAgICBoZWlnaHQ6dmlld3BvcnQuaGVpZ2h0LFxyXG4gICAgICB3aWR0aDp2aWV3cG9ydC53aWR0aCAqIDQvNVxyXG4gICAgfSxcclxuICAgIHNjYWxpbmc6MC41LFxyXG4gICAgZGVidWc6ZmFsc2VcclxuICB9XHJcbiAgLHtcclxuICAgIHg6MSxcclxuICAgIHk6MCxcclxuICAgIHdpZHRoOjAuOCxcclxuICAgIGhlaWdodDoxXHJcbiAgfSksXHJcbiAgbmV3IENhbWVyYSh7XHJcbiAgICB4OjAsXHJcbiAgICB5OjAsXHJcbiAgICBkaW1lbnNpb25zOntcclxuICAgICAgd2lkdGg6dmlld3BvcnQud2lkdGgvNSxcclxuICAgICAgaGVpZ2h0OnZpZXdwb3J0LmhlaWdodFxyXG4gICAgfSxcclxuICAgIHNjYWxpbmc6MC4yLFxyXG4gICAgZGVidWc6ZmFsc2VcclxuICB9LHtcclxuICAgIHg6dmlld3BvcnQud2lkdGggKiA0LzUsXHJcbiAgICB5OjAsXHJcbiAgICB3aWR0aDowLjIsXHJcbiAgICBoZWlnaHQ6MVxyXG4gIH0pXHJcbl1cclxuZy5sb2FkUm9vbVN0cmluZyhcIk92ZXJ3b3JsZFwiKTtcclxuXHJcbiIsImltcG9ydCB7IGdhbWUsIEdldFNjcmVlbkRpbWVuc2lvbnMsIEdldFZpZXdwb3J0RGltZW5zaW9ucywgREVCVUdfdiwgUEFVU0VELCBERUJVR30gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4vY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IG9iaiB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi9yZW5kZXJcIjtcclxuXHJcbmludGVyZmFjZSBtb3VzZVBvcyB7XHJcbiAgeDogbnVtYmVyLFxyXG4gIHk6IG51bWJlcixcclxuICBsYXN0OiB7XHJcbiAgICB4OiBudW1iZXIsXHJcbiAgICB5OiBudW1iZXJcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBjb250cm9sX2Z1bmMge1xyXG4gICgpOiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBtb3VzZUJpbmRzIHtcclxuICBba2V5OiBzdHJpbmddOiBBcnJheTxbY29udHJvbF9mdW5jLCBvYmo8dW5rbm93bj5dPlxyXG59XHJcblxyXG5pbnRlcmZhY2Uga2V5QmluZHMge1xyXG4gIFtrZXk6IHN0cmluZ106IEFycmF5PGNvbnRyb2xfZnVuYz5cclxufVxyXG5sZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0X2NsaWNrX2hhbmRsZXIoZ2FtZTogZ2FtZTx1bmtub3duPikge1xyXG4gIGxldCBmdW5jID0gIChlOkV2ZW50KSA9PiB7XHJcblxyXG4gICAgZm9yIChsZXQgY2FtZXJhIG9mIGdhbWUuc3RhdGUuY2FtZXJhcykge1xyXG4gICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGdhbWUuc3RhdGUuY2FudmFzLCBjYW1lcmEpO1xyXG4gICAgICBsZXQgYm94OiBjb2xsaXNpb25fYm94ID0ge1xyXG4gICAgICAgIHg6IG1vdXNlLngsXHJcbiAgICAgICAgeTogbW91c2UueSxcclxuICAgICAgICBoZWlnaHQ6IDEsXHJcbiAgICAgICAgd2lkdGg6IDFcclxuICAgICAgfTtcclxuICAgICAgbGV0IGQ6IGJpbmRbXTtcclxuICAgICAgaWYgKCFQQVVTRUQgJiYgKCFERUJVRyB8fCBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKSkge1xyXG4gICAgICAgIGQgPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKERFQlVHICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpIHtcclxuICAgICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGQgPSBbXVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IFwibW91c2UxXCIgJiYgY2FtZXJhID09PSBzZWxlY3RlZC5jYW1lcmEgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PSBleGVjX3R5cGUub25jZSkge1xyXG4gICAgICAgICAgaWYgKHNlbGVjdGVkLm9iaiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZC5vYmouY29sbGlkZXNfd2l0aF9ib3goYm94KSkge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9O1xyXG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PmZ1bmMoZSkpO1xyXG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwoZSk9PmZ1bmMoZSkpO1xyXG5cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLChlKT0+e1xyXG4gIGxldCBkaXI7XHJcbiAgaWYoZS5kZWx0YVkgPCAwKXtcclxuICAgIGRpciA9IFwidXBcIjtcclxuICB9XHJcbiAgZWxzZSBpZihlLmRlbHRhWSA+IDApe1xyXG4gICAgZGlyID0gXCJkb3duXCI7XHJcbiAgfVxyXG4gIGxldCBkOiBiaW5kW107XHJcbiAgaWYgKCFQQVVTRUQgJiYgKCFERUJVRyB8fCBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKSkge1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdXHJcbiAgfVxyXG4gIGVsc2UgaWYgKERFQlVHICYmICg8SFRNTEVsZW1lbnQ+ZS50YXJnZXQpLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpIHtcclxuICAgIGQgPSBbLi4uZGVidWdfYmluZHNdXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgZCA9IFtdXHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IChcInNjcm9sbFwiICsgZGlyKSkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2UpIHtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgZDogYmluZFtdO1xyXG4gIGlmICghUEFVU0VEICYmICghREVCVUcgfHwgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIikpIHtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXVxyXG4gIH1cclxuICBlbHNlIGlmIChERUJVRyAmJiAoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5pZCA9PSBcImRlYnVnX3RhcmdldFwiKSB7XHJcbiAgICBkID0gWy4uLmRlYnVnX2JpbmRzXVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGQgPSBbXVxyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcImRvd25cIikgJiYgIXNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmIChzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSkge1xyXG4gICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCkge1xyXG4gICAgICAgIHNlbGVjdGVkLnJlcGVhdF90aW1lci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcInVwXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNldXBcIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2UpIHtcclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcInVwXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNldXBcIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCkge1xyXG4gICAgICBsZXQgZyA9IFsuLi5yZXBlYXRfYmluZHNdO1xyXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGcubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICBpZiAoZ1thXS5iaW5kLmlkID09PSBzZWxlY3RlZC5pZCkge1xyXG4gICAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcclxuICBsZXQgZDogYmluZFtdO1xyXG4gIGlmICghUEFVU0VEICYmICghREVCVUcgfHwgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIikpIHtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXVxyXG4gIH1cclxuICBlbHNlIGlmIChERUJVRyAmJiAoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5pZCA9PSBcImRlYnVnX3RhcmdldFwiKSB7XHJcbiAgICBkID0gWy4uLmRlYnVnX2JpbmRzXVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGQgPSBbXVxyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJkb3duXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNlZG93blwiKSAmJiBzZWxlY3RlZC5leGVjdXRlZCAmJiBzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSkge1xyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwiZG93blwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZWRvd25cIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCkge1xyXG4gICAgICBsZXQgZyA9IFsuLi5yZXBlYXRfYmluZHNdO1xyXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGcubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICBpZiAoZ1thXS5iaW5kLmlkID09PSBzZWxlY3RlZC5pZCkge1xyXG4gICAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJ1cFwiKSAmJiAhc2VsZWN0ZWQuZXhlY3V0ZWQpIHtcclxuICAgICAgaWYgKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKSB7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KSB7XHJcbiAgICAgICAgc2VsZWN0ZWQucmVwZWF0X3RpbWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJ1cFwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZXVwXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpIHtcclxuICAgICAgbGV0IGcgPSBbLi4ucmVwZWF0X2JpbmRzXTtcclxuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBnLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgaWYgKGdbYV0uYmluZC5pZCA9PT0gc2VsZWN0ZWQuaWQpIHtcclxuICAgICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBnW2FdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgbGV0IGQ6IGJpbmRbXTtcclxuICBpZiAoIVBBVVNFRCAmJiAoIURFQlVHIHx8IERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpKSB7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc11cclxuICB9XHJcbiAgZWxzZSBpZiAoREVCVUcgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIikge1xyXG4gICAgZCA9IFsuLi5kZWJ1Z19iaW5kc11cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBkID0gW11cclxuICB9XHJcbiAgaGVsZF9rZXlzW2Uua2V5XSA9IHRydWU7XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLmtleWJvYXJkICYmIHNlbGVjdGVkLmtleSA9PT0gZS5jb2RlICYmICFzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2UpIHtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpIHtcclxuICAgICAgICBmb3IgKGxldCBjIG9mIHJlcGVhdF9iaW5kcykge1xyXG4gICAgICAgICAgaWYgKGMuYmluZC5pZCA9PSBzZWxlY3RlZC5pZCkge1xyXG4gICAgICAgICAgICBjLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gIGxldCBkOiBiaW5kW107XHJcbiAgaWYgKCFQQVVTRUQgJiYgKCFERUJVRyB8fCBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKSkge1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdXHJcbiAgfVxyXG4gIGVsc2UgaWYgKERFQlVHICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpIHtcclxuICAgIGQgPSBbLi4uZGVidWdfYmluZHNdXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgZCA9IFtdXHJcbiAgfVxyXG4gIGhlbGRfa2V5c1tlLmtleV0gPSBmYWxzZTtcclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUua2V5Ym9hcmQgJiYgc2VsZWN0ZWQua2V5ID09PSBlLmNvZGUgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQpIHtcclxuICAgICAgaWYgKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKSB7XHJcbiAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KSB7XHJcbiAgICAgICAgbGV0IGcgPSBbLi4ucmVwZWF0X2JpbmRzXTtcclxuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGcubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAgIGlmIChnW2FdLmJpbmQuaWQgPT09IHNlbGVjdGVkLmlkKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbmxldCB0cmFja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XHJcbnRyYWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xyXG4gIHZhciByZWN0ID0gKGUudGFyZ2V0IGFzIEhUTUxDYW52YXNFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgbGFzdF94ID0geDtcclxuICBsYXN0X3kgPSB5O1xyXG4gIHggPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7IC8veCBwb3NpdGlvbiB3aXRoaW4gdGhlIGVsZW1lbnQuXHJcbiAgeSA9IGUuY2xpZW50WSAtIHJlY3QudG9wOyAgLy95IHBvc2l0aW9uIHdpdGhpbiB0aGUgZWxlbWVudC5cclxuXHJcbn0pXHJcblxyXG5pZihERUJVRyl7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z190YXJnZXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xyXG4gICAgdmFyIHJlY3QgPSAoZS50YXJnZXQgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIFxyXG4gICAgbGFzdF94ID0geDtcclxuICAgIGxhc3RfeSA9IHk7XHJcbiAgICB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0OyAvL3ggcG9zaXRpb24gd2l0aGluIHRoZSBlbGVtZW50LlxyXG4gICAgeSA9IGUuY2xpZW50WSAtIHJlY3QudG9wOyAgLy95IHBvc2l0aW9uIHdpdGhpbiB0aGUgZWxlbWVudC5cclxuICBcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBidHlwZSB7XHJcbiAgbW91c2UsXHJcbiAga2V5Ym9hcmRcclxufVxyXG5cclxuZXhwb3J0IGVudW0gZXhlY190eXBlIHtcclxuICBvbmNlLFxyXG4gIHJlcGVhdFxyXG59XHJcblxyXG5pbnRlcmZhY2UgYmluZCB7XHJcbiAga2V5OiBzdHJpbmcsXHJcbiAgdHlwZTogYnR5cGUsXHJcbiAgaWQ6IG51bWJlcixcclxuICBmdW5jdGlvbjogY29udHJvbF9mdW5jLFxyXG4gIGV4ZWN1dGU6IGV4ZWNfdHlwZSxcclxuICByZXBlYXRfdGltZXI/OiByZXBlYXRfYmluZCxcclxuICBvYmo/OiBvYmo8dW5rbm93bj4sXHJcbiAgZXhlY3V0ZWQ/OiBib29sZWFuLFxyXG4gIGludGVydmFsPzogbnVtYmVyLFxyXG4gIGNhbWVyYT86Q2FtZXJhXHJcbn1cclxuXHJcbmludGVyZmFjZSByZXBlYXRfYmluZCB7XHJcbiAgYmluZDogYmluZCxcclxuICB0aW1lcjogbnVtYmVyLFxyXG4gIGludGVydmFsOiBudW1iZXIsXHJcbiAgYWN0aXZlOiBib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBoZWxkX2tleXN7XHJcbiAgW2luZGV4OnN0cmluZ106Ym9vbGVhblxyXG59XHJcblxyXG5sZXQgeCA9IDA7XHJcbmxldCB5ID0gMDtcclxubGV0IGxhc3RfeCA9IDA7XHJcbmxldCBsYXN0X3kgPSAwO1xyXG5sZXQgYmluZHM6IGtleUJpbmRzID0ge307XHJcbmxldCBtb3VzZUJpbmRzOiBtb3VzZUJpbmRzID0ge307XHJcbmxldCBiaW5kX2NvdW50ID0gMDtcclxuXHJcbmxldCBhbGxfYmluZHM6IEFycmF5PGJpbmQ+ID0gW11cclxuZXhwb3J0IGxldCBkZWJ1Z19iaW5kczogQXJyYXk8YmluZD4gPSBbXVxyXG5sZXQgcmVwZWF0X2JpbmRzOiBBcnJheTxyZXBlYXRfYmluZD4gPSBbXTtcclxuZXhwb3J0IGxldCBoZWxkX2tleXM6aGVsZF9rZXlzID0ge307XHJcbmV4cG9ydCBmdW5jdGlvbiBQb2xsX01vdXNlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGNhbWVyYTogQ2FtZXJhKTogbW91c2VQb3Mge1xyXG4gIGxldCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gIGxldCB3cmF0aW8gPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNhbnZhcykud2lkdGgpIC8gY2FudmFzLndpZHRoO1xyXG4gIGxldCB2cmF0aW8gPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNhbnZhcykuaGVpZ2h0KSAvIGNhbnZhcy5oZWlnaHQ7XHJcbiAgcmV0dXJuICh7XHJcbiAgICB4OiAoKHggLSBjYW1lcmEuc3RhdGUudmlld3BvcnQueCkgLyB3cmF0aW8gLyBjYW1lcmEuc3RhdGUuc2NhbGluZyArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggLyBjYW1lcmEuc3RhdGUuc2NhbGluZyAvIDIpLFxyXG4gICAgeTogKChoZWlnaHQgLSB5IC8gdnJhdGlvKSAvIGNhbWVyYS5zdGF0ZS5zY2FsaW5nICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyBjYW1lcmEuc3RhdGUuc2NhbGluZyAvIDIgLSBjYW1lcmEuc3RhdGUudmlld3BvcnQueSksXHJcbiAgICBsYXN0OiB7XHJcbiAgICAgIHg6ICh4IC8gd3JhdGlvIC8gY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCksXHJcbiAgICAgIHk6ICgoaGVpZ2h0IC0geSAvIHZyYXRpbykgLyBjYW1lcmEuc3RhdGUuc2NhbGluZyArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55KVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFeGVjdXRlUmVwZWF0QmluZHMoYjogbnVtYmVyKSB7XHJcbiAgZm9yIChsZXQgYSBvZiByZXBlYXRfYmluZHMpIHtcclxuICAgIGlmIChhLmJpbmQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCAmJiBhLnRpbWVyID09IDAgJiYgYS5hY3RpdmUpIHtcclxuICAgICAgYS5iaW5kLmZ1bmN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoYS5hY3RpdmUgfHwgKCFhLmFjdGl2ZSAmJiBhLnRpbWVyICE9IDApKVxyXG4gICAgICBhLnRpbWVyICs9IGI7XHJcbiAgICBpZiAoYS50aW1lciA+IGEuaW50ZXJ2YWwpIHtcclxuICAgICAgYS50aW1lciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVW5iaW5kKGJpbmRfaWQ6IG51bWJlcikge1xyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgYWxsX2JpbmRzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBpZiAoYWxsX2JpbmRzW2FdLmlkID09IGJpbmRfaWQpIHtcclxuICAgICAgYWxsX2JpbmRzLnNwbGljZShhLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmxldCBpZCA9IDA7XHJcbmV4cG9ydCBmdW5jdGlvbiBCaW5kKGtleW5hbWU6IHN0cmluZywgZnVuYzogY29udHJvbF9mdW5jLCB0eXBlOiBleGVjX3R5cGUsIGludGVydmFsOiBudW1iZXIsIG9iamVjdD86IG9iajx1bmtub3duPik6IG51bWJlciB7XHJcbiAgaWYgKGtleW5hbWUuc2xpY2UoMCwgNSkgPT09IFwibW91c2VcIikge1xyXG4gICAgbGV0IGI6IGJpbmQgPSB7XHJcbiAgICAgIGtleToga2V5bmFtZSxcclxuICAgICAgdHlwZTogYnR5cGUubW91c2UsXHJcbiAgICAgIGlkLFxyXG4gICAgICBmdW5jdGlvbjogZnVuYyxcclxuICAgICAgb2JqOiBvYmplY3QsXHJcbiAgICAgIGV4ZWN1dGU6IHR5cGUsXHJcbiAgICAgIGV4ZWN1dGVkOiBmYWxzZSxcclxuICAgICAgaW50ZXJ2YWxcclxuICAgIH07XHJcbiAgICBpZiAodHlwZSA9PSBleGVjX3R5cGUucmVwZWF0KSB7XHJcbiAgICAgIGIucmVwZWF0X3RpbWVyID0ge1xyXG4gICAgICAgIGJpbmQ6IGIsXHJcbiAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHJlcGVhdF9iaW5kcy5wdXNoKGIucmVwZWF0X3RpbWVyKTtcclxuICAgIH1cclxuICAgIGFsbF9iaW5kcy5wdXNoKGIpO1xyXG5cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBsZXQgYjogYmluZCA9IHtcclxuICAgICAga2V5OiBrZXluYW1lLFxyXG4gICAgICB0eXBlOiBidHlwZS5rZXlib2FyZCxcclxuICAgICAgaWQsXHJcbiAgICAgIGZ1bmN0aW9uOiBmdW5jLFxyXG4gICAgICBleGVjdXRlOiB0eXBlLFxyXG4gICAgICBleGVjdXRlZDogZmFsc2UsXHJcbiAgICAgIGludGVydmFsXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PSBleGVjX3R5cGUucmVwZWF0KSB7XHJcbiAgICAgIGIucmVwZWF0X3RpbWVyID0ge1xyXG4gICAgICAgIGJpbmQ6IGIsXHJcbiAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHJlcGVhdF9iaW5kcy5wdXNoKGIucmVwZWF0X3RpbWVyKTtcclxuICAgIH1cclxuICAgIGFsbF9iaW5kcy5wdXNoKGIpO1xyXG4gIH1cclxuICBpZCsrO1xyXG4gIHJldHVybiBpZCAtIDE7XHJcbn0iLCJpbXBvcnQgeyBzcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgR2V0Vmlld3BvcnREaW1lbnNpb25zIH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQgeyBvYmogfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgb2JqX3N0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgVGV4dF9Ob2RlLCBUZXh0U2V0dGluZyxIVUQsVGV4dCB9IGZyb20gXCIuL2h1ZFwiO1xyXG5pbXBvcnQge3Bvc2l0aW9uZWRfc3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVcIlxyXG5cclxuaW50ZXJmYWNlIGNhbWVyYV9zdGF0ZSB7XHJcbiAgc2NhbGluZzogbnVtYmVyLFxyXG4gIHBvc2l0aW9uOiB7XHJcbiAgICB4OiBudW1iZXIsXHJcbiAgICB5OiBudW1iZXJcclxuICB9XHJcbiAgZGltZW5zaW9uczoge1xyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbiAgfSxcclxuICB2aWV3cG9ydDogdmlld3BvcnQsXHJcbiAgZGVidWc6Ym9vbGVhbixcclxuICBodWQ6SFVEICBcclxufVxyXG5cclxuaW50ZXJmYWNlIHZpZXdwb3J0IHtcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIGNhbWVyYV9wcm9wZXJ0aWVzIHtcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBkaW1lbnNpb25zOntcclxuICAgIGhlaWdodDpudW1iZXIsXHJcbiAgICB3aWR0aDpudW1iZXJcclxuICB9XHJcbiAgc2NhbGluZzpudW1iZXIsXHJcbiAgZGVidWc6Ym9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhIHtcclxuICBzdGF0ZTogY2FtZXJhX3N0YXRlO1xyXG4gIGh1ZDogSFVEO1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOmNhbWVyYV9wcm9wZXJ0aWVzLCB2OiB2aWV3cG9ydCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2NhbGluZzpwcm9wcy5zY2FsaW5nLFxyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IHByb3BzLnggKiBwcm9wcy5zY2FsaW5nLFxyXG4gICAgICAgIHk6IHByb3BzLnkgKiBwcm9wcy5zY2FsaW5nXHJcbiAgICAgIH0sXHJcbiAgICAgIGRpbWVuc2lvbnM6IHByb3BzLmRpbWVuc2lvbnMsXHJcbiAgICAgIHZpZXdwb3J0OiB7XHJcbiAgICAgICAgeDp2LngsXHJcbiAgICAgICAgeTp2LnkgLFxyXG4gICAgICAgIHdpZHRoOiB2LndpZHRoICogcHJvcHMuZGltZW5zaW9ucy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHYuaGVpZ2h0ICogcHJvcHMuZGltZW5zaW9ucy5oZWlnaHRcclxuICAgICAgfSxcclxuICAgICAgZGVidWc6cHJvcHMuZGVidWcsXHJcbiAgICAgIGh1ZDp1bmRlZmluZWRcclxuICAgIH1cclxuICB9XHJcbiAgc2V0IHgoeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnggPSB4O1xyXG4gIH1cclxuICBzZXQgeSh5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSA9IHlcclxuICB9XHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gIH1cclxuICBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLnBvc2l0aW9uLnk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSByZW5kZXJfZnVuYyB7XHJcbiAgKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsaW5nOiBudW1iZXIpOiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSByZWN0YW5nbGUge1xyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIHNwcml0ZV9hcmdzIHtcclxuICBzcHJpdGU6IHNwcml0ZSxcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHJvdGF0aW9uOiBudW1iZXIsXHJcbiAgc2NhbGU6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSByZW5kZXJlcl9hcmdzIHtcclxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgY2FtZXJhOiBDYW1lcmFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gcmVuZGVyX3R5cGUge1xyXG4gIHRleHQsXHJcbiAgc3ByaXRlLFxyXG4gIHJlY3QsXHJcbiAgc3Ryb2tlX3JlY3RcclxufVxyXG4vKlxyXG5leHBvcnQgY29uc3QgZWxlbWVudF9yZW5kZXIgPSAocjpyZW5kZXJlcl9hcmdzLG86b2JqPHVua25vd24+LHRpbWU6bnVtYmVyKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKChzLnggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoIC8gMiAtIHMuc3ByaXRlLnNwcml0ZV93aWR0aCAvIDIpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSBzLnkgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyAyIC0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IHdpZHRoID0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnRleHQpe1xyXG5cclxuICB9XHJcbiAgZWxzZSBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnNwcml0ZSl7XHJcblxyXG4gIH1cclxuICBlbHNlIGlmKG8ucmVuZGVyX3R5cGUgPT0gcmVuZGVyX3R5cGUuc3Ryb2tlX3JlY3Qpe1xyXG5cclxuICB9XHJcbn1cclxuKi9cclxuZXhwb3J0IGNvbnN0IG9iamVjdF9yZW5kZXIgPSAocjpyZW5kZXJlcl9hcmdzLG86b2JqPHVua25vd24+LHRpbWU6bnVtYmVyKSA9PiB7XHJcbiAgbGV0IHJlbmRlcmVkID0gby5yZW5kZXJfdHJhY2sodGltZSk7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVuZGVyZWQpKSB7XHJcbiAgICBmb3IgKGxldCBwIG9mIHJlbmRlcmVkKXtcclxuICAgICAgc3ByaXRlX3JlbmRlcmVyKHIsIHtcclxuICAgICAgICBzcHJpdGU6cC5zcHJpdGUsXHJcbiAgICAgICAgeDogcC54LFxyXG4gICAgICAgIHk6IHAueSxcclxuICAgICAgICByb3RhdGlvbjogby5yb3RhdGlvbixcclxuICAgICAgICBzY2FsZTpvLnNjYWxpbmdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgbGV0IHBvc2l0aW9uZWRfc3ByaXRlID0gcmVuZGVyZWQgYXMgcG9zaXRpb25lZF9zcHJpdGU7XHJcbiAgICBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnNwcml0ZSl7XHJcbiAgICAgIHNwcml0ZV9yZW5kZXJlcihyLCB7XHJcbiAgICAgICAgc3ByaXRlOiBwb3NpdGlvbmVkX3Nwcml0ZS5zcHJpdGUsXHJcbiAgICAgICAgeDogcG9zaXRpb25lZF9zcHJpdGUueCxcclxuICAgICAgICB5OiBwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgIHJvdGF0aW9uOiBvLnJvdGF0aW9uLFxyXG4gICAgICAgIHNjYWxlOm8uc2NhbGluZ1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnJlY3Qpe1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBodWRfdGV4dF9yZW5kZXJlciA9IChyOiByZW5kZXJlcl9hcmdzLCBzOiBUZXh0U2V0dGluZykgPT4ge1xyXG4gIGxldCB2aGVpZ2h0ID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0O1xyXG4gIHIuY29udGV4dC5mb250ID0gYCR7cy5mb250LnNpemV9cHggJHtzLmZvbnQuZm9udH1gO1xyXG4gIHIuY29udGV4dC5maWxsU3R5bGUgPSBzLmZvbnQuY29sb3I7XHJcbiAgci5jb250ZXh0LnRleHRBbGlnbiA9IHMuZm9udC5hbGlnbjtcclxuICBpZiAocy5mb250Lm1heF93aWR0aCkge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCBzLngsIHZoZWlnaHQgLSBzLnksIHMuZm9udC5tYXhfd2lkdGgpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgcy54LCB2aGVpZ2h0IC0gcy55KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0ZXh0X3JlbmRlcmVyID0gKHI6cmVuZGVyZXJfYXJncyxzOlRleHRTZXR0aW5nKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgbGV0IHdpZHRoID0gci5jb250ZXh0Lm1lYXN1cmVUZXh0KHMuZm9udC50ZXh0KS53aWR0aCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGhlaWdodCA9IHMuZm9udC5zaXplICogMS4yICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgocy54IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL3IuY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMikgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHMueSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0LzIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgci5jb250ZXh0LmZvbnQgPSBgJHtzLmZvbnQuc2l6ZSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmd9cHggJHtzLmZvbnQuZm9udH1gO1xyXG4gIHIuY29udGV4dC5maWxsU3R5bGUgPSBzLmZvbnQuY29sb3I7XHJcbiAgci5jb250ZXh0LnRleHRBbGlnbiA9IHMuZm9udC5hbGlnblxyXG4gIHIuY29udGV4dC5zYXZlKCk7XHJcbiAgci5jb250ZXh0LnRyYW5zbGF0ZShmaW5hbF94LCBmaW5hbF95KTtcclxuICBpZiAocy5mb250Lm1heF93aWR0aCkge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCAwLCAwLCBzLmZvbnQubWF4X3dpZHRoKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByLmNvbnRleHQuZmlsbFRleHQocy5mb250LnRleHQsIDAsIDApO1xyXG4gIH1cclxuICByLmNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3ByaXRlX3JlbmRlcmVyID0gKHI6IHJlbmRlcmVyX2FyZ3MsIHM6IHNwcml0ZV9hcmdzKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKChzLnggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvci5jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogcy5zY2FsZSAvIDIpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSBzLnkgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9yLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0ICogcy5zY2FsZSAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHMuc2NhbGUgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCB3aWR0aCA9IHMuc3ByaXRlLnNwcml0ZV93aWR0aCAqIHMuc2NhbGUgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIHIuY29udGV4dC5zYXZlKCk7XHJcbiAgci5jb250ZXh0Lmdsb2JhbEFscGhhID0gcy5zcHJpdGUub3BhY2l0eTtcclxuICByLmNvbnRleHQudHJhbnNsYXRlKGZpbmFsX3ggICsgKHdpZHRoKSAvIDIsIGZpbmFsX3kgKyBoZWlnaHQgLyAyKVxyXG4gIGxldCByYWRpYW5zID0gcy5yb3RhdGlvbiAqIChNYXRoLlBJIC8gMTgwKTtcclxuICByLmNvbnRleHQucm90YXRlKHJhZGlhbnMpO1xyXG4gIHIuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICBzLnNwcml0ZS5zcHJpdGVfc2hlZXQsXHJcbiAgICBzLnNwcml0ZS5sZWZ0LFxyXG4gICAgcy5zcHJpdGUudG9wLFxyXG4gICAgcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogcy5zY2FsZSxcclxuICAgIHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQgKiBzLnNjYWxlLFxyXG4gICAgLSh3aWR0aCkgLyAyLFxyXG4gICAgLWhlaWdodCAvIDIsXHJcbiAgICB3aWR0aCxcclxuICAgIGhlaWdodFxyXG4gIClcclxuICByLmNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcmVjdDogcmVjdGFuZ2xlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgY2FtZXJhOiBDYW1lcmEpID0+IHtcclxuICBsZXQgdmhlaWdodCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAvIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKCh4IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSByZWN0LndpZHRoIC8gMikgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSB5IC0gcmVjdC5oZWlnaHQgLyAyIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55KSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgd2lkdGggPSByZWN0LndpZHRoICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGNvbnRleHQuc3Ryb2tlUmVjdChmaW5hbF94LCBmaW5hbF95LCB3aWR0aCwgaGVpZ2h0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlY3RfcmVuZGVyZXIgPSAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByZWN0OiByZWN0YW5nbGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBjYW1lcmE6IENhbWVyYSkgPT4ge1xyXG4gIGxldCB2aGVpZ2h0ID0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGZpbmFsX3ggPSAoKHggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiAtIHJlY3Qud2lkdGggLyAyKSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHkgLSByZWN0LmhlaWdodCAvIDIgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBoZWlnaHQgPSByZWN0LmhlaWdodCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCB3aWR0aCA9IHJlY3Qud2lkdGggKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgY29udGV4dC5maWxsUmVjdChmaW5hbF94LCBmaW5hbF95LCB3aWR0aCwgaGVpZ2h0KTtcclxufSIsImV4cG9ydCBsZXQgREVCVUcgPSB0cnVlO1xyXG5leHBvcnQgbGV0IFBBVVNFRCA9IHRydWU7XHJcbmltcG9ydCB7b2JqfSBmcm9tIFwiLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlLCBwb3NpdGlvbn0gZnJvbSBcIi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7cm9vbX0gZnJvbSBcIi4vbGliL3Jvb21cIjtcclxuaW1wb3J0IHtwb3NpdGlvbmVkX3Nwcml0ZSwgc3ByaXRlfSBmcm9tIFwiLi9saWIvc3ByaXRlXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi9saWIvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7c3ByaXRlX3JlbmRlcmVyLHJlY3RfcmVuZGVyZXIsIHN0cm9rZWRfcmVjdF9yZW5kZXJlciwgaHVkX3RleHRfcmVuZGVyZXIsIENhbWVyYSwgdGV4dF9yZW5kZXJlcn0gZnJvbSBcIi4vbGliL3JlbmRlclwiO1xyXG5pbXBvcnQge0hVRH0gZnJvbSBcIi4vbGliL2h1ZFwiO1xyXG5pbXBvcnQge0V4ZWN1dGVSZXBlYXRCaW5kcyxkZWJ1Z19iaW5kcyxidHlwZSxleGVjX3R5cGUsIFBvbGxfTW91c2UsIEJpbmQsIGhlbGRfa2V5c30gZnJvbSBcIi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7aW5pdF9jbGlja19oYW5kbGVyfSBmcm9tIFwiLi9saWIvY29udHJvbHNcIjtcclxuXHJcblxyXG5sZXQgY2FudmFzX2VsZW1lbnQ6SFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxubGV0IGNvbnRleHQ6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzX2VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuXHJcbmxldCBzY3JlZW5fd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxubGV0IHNjcmVlbl9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5sZXQgdndpZHRoID0gY2FudmFzX2VsZW1lbnQud2lkdGg7XHJcbmxldCB2aGVpZ2h0ID0gY2FudmFzX2VsZW1lbnQuaGVpZ2h0O1xyXG5cclxuXHJcbi8vSG93IG9mdGVuIHRoZSBnYW1lIGxvZ2ljIGxvb3Agc2hvdWxkIHJ1biwgaW4gbWlsbGlzZWNvbmRzXHJcbmxldCBsb2dpY19sb29wX2ludGVydmFsOm51bWJlciA9IDEwMDAvNjA7ICBcclxuXHJcbmxldCBsYXN0X3RpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxubGV0IGxhc3RfcmVuZGVyX3RpbWUgPSAwO1xyXG5cclxuaW50ZXJmYWNlIGRpbWVuc2lvbnN7XHJcbiAgaGVpZ2h0Om51bWJlcixcclxuICB3aWR0aDpudW1iZXJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRTY3JlZW5EaW1lbnNpb25zICgpOmRpbWVuc2lvbnN7XHJcbiAgcmV0dXJuKHtcclxuICAgIHdpZHRoOnNjcmVlbl93aWR0aCxcclxuICAgIGhlaWdodDpzY3JlZW5faGVpZ2h0XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFZpZXdwb3J0RGltZW5zaW9ucyAoKTpkaW1lbnNpb25ze1xyXG4gIHJldHVybih7XHJcbiAgICBoZWlnaHQ6Y2FudmFzX2VsZW1lbnQuaGVpZ2h0LFxyXG4gICAgd2lkdGg6Y2FudmFzX2VsZW1lbnQud2lkdGhcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHZpZXdwb3J0ID0ge1xyXG4gIGhlaWdodDpHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQsXHJcbiAgd2lkdGg6R2V0Vmlld3BvcnREaW1lbnNpb25zKCkud2lkdGhcclxufVxyXG5cclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gIHZpZXdwb3J0LmhlaWdodCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodFxyXG4gIHZpZXdwb3J0LndpZHRoID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkud2lkdGhcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERlYnVnKHg6Ym9vbGVhbil7XHJcbiAgREVCVUcgPSB4O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UGF1c2VkKHg6Ym9vbGVhbil7XHJcbiAgUEFVU0VEID0geDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlcl9jb2xsaXNpb25fYm94ID0gKGE6Y29sbGlzaW9uX2JveCkgPT4ge1xyXG4gIGJveGVzLnB1c2goYSk7XHJcbn1cclxuXHJcbmxldCBib3hlczpBcnJheTxjb2xsaXNpb25fYm94PiA9IFtdO1xyXG5cclxuZXhwb3J0IGxldCBkZWVwID0gKGE6YW55KSA9PntcclxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhKSk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBkZWJ1Z192YXJze1xyXG4gIHRhcmdldDpIVE1MQ2FudmFzRWxlbWVudCxcclxuICBjYW1lcmE6Q2FtZXJhLFxyXG4gIGxhc3RfY2xpY2tlZDpIVE1MRWxlbWVudCxcclxuICBzZWxlY3RlZF9lbGVtZW50Om9iajx1bmtub3duPixcclxuICByb3RhdGlvbl9lbGVtZW50Om9iajx1bmtub3duPixcclxuICBtaWRkbGVfcG9zaXRpb246cG9zaXRpb25cclxufVxyXG5cclxuZXhwb3J0IGxldCBERUJVR192OmRlYnVnX3ZhcnM7XHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBnYW1lX3N0YXRlPFQ+e1xyXG4gIGxvZ2ljOm51bWJlcixcclxuICBjb250ZXh0OkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICBjdXJyZW50X3Jvb206cm9vbTx1bmtub3duPixcclxuICBjYW1lcmFzOkFycmF5PENhbWVyYT4sXHJcbiAgY2FudmFzOkhUTUxDYW52YXNFbGVtZW50LFxyXG4gIGdhbWU6VFxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJ1Z19zdGF0ZWYodDpudW1iZXIpe1xyXG4gIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoREVCVUdfdi50YXJnZXQsREVCVUdfdi5jYW1lcmEpO1xyXG4gIGlmKERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudCl7XHJcbiAgICBsZXQgc3QgPSBERUJVR192LnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICBzdC5wb3NpdGlvbi54ID0gbW91c2UueCxcclxuICAgIHN0LnBvc2l0aW9uLnkgPSBtb3VzZS55XHJcbiAgfVxyXG4gIGlmKERFQlVHX3Yucm90YXRpb25fZWxlbWVudCl7XHJcbiAgICBERUJVR192LnJvdGF0aW9uX2VsZW1lbnQucm90YXRpb24gPSBERUJVR192LnJvdGF0aW9uX2VsZW1lbnQuYW5nbGVUb3dhcmRzUG9pbnQobW91c2UpO1xyXG4gIH1cclxuICBpZihERUJVR192Lm1pZGRsZV9wb3NpdGlvbil7XHJcbiAgIGxldCBkaWZmX3kgPSBtb3VzZS55IC0gREVCVUdfdi5taWRkbGVfcG9zaXRpb24ueTtcclxuICAgbGV0IGRpZmZfeCA9IG1vdXNlLnggLSBERUJVR192Lm1pZGRsZV9wb3NpdGlvbi54O1xyXG4gICAgREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyAtMSAqIGRpZmZfeDtcclxuICAgIERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgPSBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ICsgLTEgKiBkaWZmX3k7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgbGV0IHJvb21zOmFueVtdID0gW107XHJcbmV4cG9ydCBsZXQgb2JqZWN0czphbnlbXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBnYW1lPFQ+e1xyXG4gIHN0YXRlOmdhbWVfc3RhdGU8VD47XHJcbiAgY29udGV4dDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgb2Zmc2NyZWVuX2NhbnZhczpIVE1MQ2FudmFzRWxlbWVudDtcclxuICBvZmZzY3JlZW5fY29udGV4dDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgcHJvdG90eXBlczpBcnJheTxvYmo8dW5rbm93bj4+ID0gW107XHJcbiAgcm9vbXM6QXJyYXk8YW55PiA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKGN0eDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsaW5pdF9zdGF0ZTpUKXtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhbnZhczpjYW52YXNfZWxlbWVudCxcclxuICAgICAgbG9naWM6dW5kZWZpbmVkLFxyXG4gICAgICBjb250ZXh0OmN0eCxcclxuICAgICAgY2FtZXJhczpbXHJcbiAgICAgIF0sXHJcbiAgICAgIGN1cnJlbnRfcm9vbTogdW5kZWZpbmVkLFxyXG4gICAgICBnYW1lOmluaXRfc3RhdGVcclxuICAgIH1cclxuICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0ID0gdGhpcy5vZmZzY3JlZW5fY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgREVCVUdfdiA9IHtcclxuICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWdfdGFyZ2V0XCIpIGFzIEhUTUxDYW52YXNFbGVtZW50LFxyXG4gICAgICAgIGNhbWVyYTogbmV3IENhbWVyYSh7XHJcbiAgICAgICAgICB4OjAsXHJcbiAgICAgICAgICB5OjAsXHJcbiAgICAgICAgICBkaW1lbnNpb25zOntcclxuICAgICAgICAgICAgaGVpZ2h0OnZpZXdwb3J0LmhlaWdodCxcclxuICAgICAgICAgICAgd2lkdGg6dmlld3BvcnQud2lkdGhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzY2FsaW5nOjEsXHJcbiAgICAgICAgICBkZWJ1Zzp0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICx7XHJcbiAgICAgICAgICB4OjEsXHJcbiAgICAgICAgICB5OjAsXHJcbiAgICAgICAgICB3aWR0aDoxLFxyXG4gICAgICAgICAgaGVpZ2h0OjFcclxuICAgICAgICB9KSxcclxuICAgICAgICBsYXN0X2NsaWNrZWQ6dW5kZWZpbmVkLFxyXG4gICAgICAgIHNlbGVjdGVkX2VsZW1lbnQ6dW5kZWZpbmVkLFxyXG4gICAgICAgIHJvdGF0aW9uX2VsZW1lbnQ6dW5kZWZpbmVkLFxyXG4gICAgICAgIG1pZGRsZV9wb3NpdGlvbjp1bmRlZmluZWRcclxuICAgICAgfVxyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJtb3VzZTBkb3duXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDowLFxyXG4gICAgICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgICAgICBpZihERUJVR192LnNlbGVjdGVkX2VsZW1lbnQpe1xyXG4gICAgICAgICAgICBERUJVR192LnNlbGVjdGVkX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShERUJVR192LnRhcmdldCxERUJVR192LmNhbWVyYSk7XHJcbiAgICAgICAgICAgIGxldCBjbGlja2VkID0gdGhpcy5nZXRSb29tKCkuY2hlY2tfb2JqZWN0cyh7XHJcbiAgICAgICAgICAgICAgeDptb3VzZS54LFxyXG4gICAgICAgICAgICAgIHk6bW91c2UueSxcclxuICAgICAgICAgICAgICBoZWlnaHQ6MSxcclxuICAgICAgICAgICAgICB3aWR0aDoxXHJcbiAgICAgICAgICAgIH0pWzBdXHJcbiAgICAgICAgICAgIGlmKGNsaWNrZWQpe1xyXG4gICAgICAgICAgICAgIERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudCA9IGNsaWNrZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2UsXHJcbiAgICAgICAgY2FtZXJhOkRFQlVHX3YuY2FtZXJhXHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJtb3VzZTF1cFwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgICAgaWQ6NSxcclxuICAgICAgICBmdW5jdGlvbjooKT0+e1xyXG4gICAgICAgICAgREVCVUdfdi5taWRkbGVfcG9zaXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgICAgIGNhbWVyYTpERUJVR192LmNhbWVyYVxyXG4gICAgICB9KTtcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwibW91c2UxZG93blwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgICAgaWQ6NixcclxuICAgICAgICBmdW5jdGlvbjooKT0+e1xyXG4gICAgICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShERUJVR192LnRhcmdldCxERUJVR192LmNhbWVyYSk7XHJcbiAgICAgICAgICBERUJVR192Lm1pZGRsZV9wb3NpdGlvbiA9IG1vdXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgICAgICBjYW1lcmE6REVCVUdfdi5jYW1lcmFcclxuICAgICAgfSk7XHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIm1vdXNlMHVwXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgICAgICBERUJVR192LnNlbGVjdGVkX2VsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgICAgIGNhbWVyYTpERUJVR192LmNhbWVyYVxyXG4gICAgICB9KTtcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwibW91c2UyZG93blwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgICAgaWQ6MyxcclxuICAgICAgICBmdW5jdGlvbjooKT0+e1xyXG4gICAgICAgICAgaWYoREVCVUdfdi5yb3RhdGlvbl9lbGVtZW50KXtcclxuICAgICAgICAgICAgREVCVUdfdi5yb3RhdGlvbl9lbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoREVCVUdfdi50YXJnZXQsREVCVUdfdi5jYW1lcmEpO1xyXG4gICAgICAgICAgICBsZXQgY2xpY2tlZCA9IHRoaXMuZ2V0Um9vbSgpLmNoZWNrX29iamVjdHMoe1xyXG4gICAgICAgICAgICAgIHg6bW91c2UueCxcclxuICAgICAgICAgICAgICB5Om1vdXNlLnksXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjEsXHJcbiAgICAgICAgICAgICAgd2lkdGg6MVxyXG4gICAgICAgICAgICB9KVswXVxyXG4gICAgICAgICAgICBpZihjbGlja2VkKXtcclxuICAgICAgICAgICAgICBERUJVR192LnJvdGF0aW9uX2VsZW1lbnQgPSBjbGlja2VkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgICAgIGNhbWVyYTpERUJVR192LmNhbWVyYVxyXG4gICAgICB9KTtcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwibW91c2UydXBcIixcclxuICAgICAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgICAgIGlkOjQsXHJcbiAgICAgICAgZnVuY3Rpb246KCk9PntcclxuICAgICAgICAgIERFQlVHX3Yucm90YXRpb25fZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2UsXHJcbiAgICAgICAgY2FtZXJhOkRFQlVHX3YuY2FtZXJhXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IGxlZnRfZnVuYyA9ICgpPT57XHJcbiAgICAgICAgbGV0IHNoaWZ0X2hlbGQgPSBoZWxkX2tleXNbXCJTaGlmdFwiXSA/IDE6MDtcclxuICAgICAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICAgICAgREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggLSAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMS9ERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCByaWdodF9mdW5jID0gKCk9PntcclxuICAgICAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0XCJdID8gMTowO1xyXG4gICAgICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgICAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ID0gREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCArICgoNSArIHNoaWZ0X2hlbGQgKiA1KSAqICgxL0RFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICAgICAgfTtcclxuICAgICAgbGV0IGRvd25fZnVuYyA9ICgpPT57XHJcbiAgICAgICAgbGV0IHNoaWZ0X2hlbGQgPSBoZWxkX2tleXNbXCJTaGlmdFwiXSA/IDE6MDtcclxuICAgICAgICBcclxuICAgICAgICBpZighaGVsZF9rZXlzW1wiQ29udHJvbFwiXSAmJiBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICAgICAgREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgLSAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMS9ERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCB1cF9mdW5jID0gKCk9PntcclxuICAgICAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0XCJdID8gMTowO1xyXG4gICAgICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgICAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ID0gREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSArICgoNSArIHNoaWZ0X2hlbGQgKiA1KSAqICgxL0RFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICAgICAgfTtcclxuICAgICAgbGV0IHNjcm9sbF91cCA9ICgpPT57XHJcbiAgICAgICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIilcclxuICAgICAgICAgIERFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPSBERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nICsgMC4wNTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgc2F2ZV9mdW5jID0gKCk9PntcclxuICAgICAgICBsZXQgY3RybF9oZWxkID0gaGVsZF9rZXlzW1wiQ29udHJvbFwiXTtcclxuICAgICAgICBpZihjdHJsX2hlbGQgJiYgUEFVU0VEKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0FWRVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjdHJsX2hlbGQgJiYgIVBBVVNFRCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBhdXNlIHRvIGVuYWJsZSBzYXZpbmcuXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBzY3JvbGxfZG93biA9ICgpPT57XHJcbiAgICAgICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIiAmJiBERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nID4gMC4wNSlcclxuICAgICAgICAgIERFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPSBERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nIC0gMC4wNTtcclxuICAgICAgfVxyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJLZXlBXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5rZXlib2FyZCxcclxuICAgICAgICBpZDpCaW5kKFwiS2V5QVwiLGxlZnRfZnVuYyxleGVjX3R5cGUucmVwZWF0LDEpLFxyXG4gICAgICAgIGZ1bmN0aW9uOmxlZnRfZnVuYyxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5yZXBlYXRcclxuICAgICAgfSlcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwiS2V5RFwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgICAgaWQ6QmluZChcIktleURcIixyaWdodF9mdW5jLGV4ZWNfdHlwZS5yZXBlYXQsMSksXHJcbiAgICAgICAgZnVuY3Rpb246cmlnaHRfZnVuYyxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5yZXBlYXRcclxuICAgICAgfSlcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwiS2V5V1wiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgICAgaWQ6QmluZChcIktleVdcIix1cF9mdW5jLGV4ZWNfdHlwZS5yZXBlYXQsMSksXHJcbiAgICAgICAgZnVuY3Rpb246dXBfZnVuYyxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5yZXBlYXRcclxuICAgICAgfSlcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwiS2V5U1wiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgICAgaWQ6QmluZChcIktleVNcIixkb3duX2Z1bmMsZXhlY190eXBlLnJlcGVhdCwxKSxcclxuICAgICAgICBmdW5jdGlvbjpkb3duX2Z1bmMsXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUucmVwZWF0XHJcbiAgICAgIH0pXHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcInNjcm9sbHVwXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDpCaW5kKFwic2Nyb2xsdXBcIixzY3JvbGxfdXAsZXhlY190eXBlLm9uY2UsMSksXHJcbiAgICAgICAgZnVuY3Rpb246c2Nyb2xsX3VwLFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2VcclxuICAgICAgfSlcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5Olwic2Nyb2xsZG93blwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgICAgaWQ6QmluZChcInNjcm9sbGRvd25cIixzY3JvbGxfZG93bixleGVjX3R5cGUub25jZSwxKSxcclxuICAgICAgICBmdW5jdGlvbjpzY3JvbGxfZG93bixcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlXHJcbiAgICAgIH0pXHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIktleVNcIixcclxuICAgICAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgICAgIGlkOkJpbmQoXCJLZXlTXCIsc2F2ZV9mdW5jLGV4ZWNfdHlwZS5vbmNlLDEpLFxyXG4gICAgICAgIGZ1bmN0aW9uOnNhdmVfZnVuYyxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlXHJcbiAgICAgIH0pXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PntcclxuICAgICAgICBpZihlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcclxuICAgICAgICAgIERFQlVHX3YubGFzdF9jbGlja2VkID0gZS50YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlX2J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PntcclxuICAgICAgICBQQVVTRUQgPSAhUEFVU0VEO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICBkZWJ1Z19zdGF0ZWYoMCk7XHJcbiAgICAgIH0sMTYuNjYpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgfVxyXG4gIHJlbmRlcih0Om51bWJlcil7XHJcbiAgICBsZXQgdGltZSA9IHQgLSBsYXN0X3JlbmRlcl90aW1lXHJcbiAgICBsYXN0X3JlbmRlcl90aW1lID0gdDtcclxuICAgIGxldCBhbGxfY2FtZXJhcyA9IHRoaXMuc3RhdGUuY2FtZXJhcztcclxuICAgIGxldCBkZWJ1Z19pbmRleCA9IC0xO1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICBhbGxfY2FtZXJhcyA9IFsuLi5hbGxfY2FtZXJhcyxERUJVR192LmNhbWVyYV1cclxuICAgICAgZGVidWdfaW5kZXggPSBhbGxfY2FtZXJhcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhID0gMDthIDwgIGFsbF9jYW1lcmFzLmxlbmd0aDthKyspe1xyXG4gICAgICBsZXQgY2FtZXJhID0gYWxsX2NhbWVyYXNbYV07XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcy5oZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcy53aWR0aCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LmNsZWFyUmVjdCgwLDAsY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgsY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dC5maWxsU3R5bGU9XCJibGFja1wiO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LmZpbGxSZWN0KDAsMCxjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCxjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQpO1xyXG4gICAgICBsZXQgY2FtZXJhX2JveCA9IHtcclxuICAgICAgICB4OmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6Y2FtZXJhLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgd2lkdGg6Y2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZyksXHJcbiAgICAgICAgaGVpZ2h0OmNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKVxyXG4gICAgICB9O1xyXG4gICAgICBsZXQgcGFydGljbGVfY29sbGlkZXMgPSB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5jaGVja19vYmplY3RzKGNhbWVyYV9ib3gsW10sdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ucGFydGljbGVzX2Fycik7XHJcbiAgICAgIGxldCBjYW1lcmFfY29sbGlkZXJzID0gWy4uLnRoaXMuc3RhdGUuY3VycmVudF9yb29tLmNoZWNrX29iamVjdHMoY2FtZXJhX2JveCksLi4ucGFydGljbGVfY29sbGlkZXNdO1xyXG4gICAgICBsZXQgcmVuZGVyX2FyZ3MgPSB7XHJcbiAgICAgICAgY29udGV4dDp0aGlzLm9mZnNjcmVlbl9jb250ZXh0LFxyXG4gICAgICAgIGNhbWVyYTpjYW1lcmEsXHJcbiAgICAgIH07XHJcbiAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncyx7XHJcbiAgICAgICAgc3ByaXRlOnRoaXMuc3RhdGUuY3VycmVudF9yb29tLnJlbmRlcmYodGltZSksXHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICAgIHNjYWxlOjFcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBoaXRib3hlczpjb2xsaXNpb25fYm94W10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgYSBvZiBjYW1lcmFfY29sbGlkZXJzLmZpbHRlcigoYikgPT4gYi5yZW5kZXIpKSB7XHJcbiAgICAgICAgbGV0IHJlbmRlcmVkID0gYS5yZW5kZXJfdHJhY2sodCk7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVuZGVyZWQpKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbmVkX3Nwcml0ZSBvZiByZW5kZXJlZClcclxuICAgICAgICAgICAgc3ByaXRlX3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICAgICAgc3ByaXRlOnBvc2l0aW9uZWRfc3ByaXRlLnNwcml0ZSxcclxuICAgICAgICAgICAgICB4OiBwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICAgIHk6IHBvc2l0aW9uZWRfc3ByaXRlLnksXHJcbiAgICAgICAgICAgICAgcm90YXRpb246IGEucm90YXRpb24sXHJcbiAgICAgICAgICAgICAgc2NhbGU6YS5zY2FsaW5nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGxldCBwb3NpdGlvbmVkX3Nwcml0ZSA9IHJlbmRlcmVkIGFzIHBvc2l0aW9uZWRfc3ByaXRlO1xyXG4gICAgICAgICAgc3ByaXRlX3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICAgIHNwcml0ZTogcG9zaXRpb25lZF9zcHJpdGUuc3ByaXRlLFxyXG4gICAgICAgICAgICB4OiBwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICB5OiBwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgICAgICByb3RhdGlvbjogYS5yb3RhdGlvbixcclxuICAgICAgICAgICAgc2NhbGU6YS5zY2FsaW5nXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoREVCVUcgJiYgYS5jb2xsaXNpb24pe1xyXG4gICAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5hLmdldF9hbGxfY29sbGlzaW9uX2JveGVzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20udGV4dF9ub2Rlcyl7XHJcbiAgICAgICAgdGV4dF9yZW5kZXJlcihyZW5kZXJfYXJncyx7XHJcbiAgICAgICAgICB4Om5vZGUuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICAgIHk6bm9kZS5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgZm9udDpub2RlLnJlbmRlcmYodClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIGlmKGNhbWVyYS5odWQpe1xyXG4gICAgICAgIGxldCBncmFwaGljcyA9IGNhbWVyYS5odWQuZ3JhcGhpY19lbGVtZW50cztcclxuICAgICAgICBsZXQgdGV4dF9lbGVtZW50cyA9IGNhbWVyYS5odWQudGV4dF9lbGVtZW50cztcclxuICAgICAgICBmb3IobGV0IGEgb2YgZ3JhcGhpY3Mpe1xyXG4gICAgICAgICAgbGV0IHJlbmRlcmVkID0gYS5yZW5kZXJfdHJhY2sodCk7XHJcbiAgICAgICAgICBpZihhLnJlbmRlcil7XHJcbiAgICAgICAgICAgIGZvcihsZXQgcG9zaXRpb25lZF9zcHJpdGUgb2YgcmVuZGVyZWQpe1xyXG4gICAgICAgICAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncyx7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGU6cG9zaXRpb25lZF9zcHJpdGUuc3ByaXRlLFxyXG4gICAgICAgICAgICAgICAgeDpwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICAgICAgeTpwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgICAgICAgICAgcm90YXRpb246YS5yb3RhdGlvbixcclxuICAgICAgICAgICAgICAgIHNjYWxlOmEuc2NhbGluZ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vcmVuZGVyX2FyZ3MuY29udGV4dCA9IHRoaXMuc3RhdGUuY29udGV4dDtcclxuICAgICAgICBmb3IobGV0IGEgb2YgdGV4dF9lbGVtZW50cyl7XHJcbiAgICAgICAgICBsZXQgc3QgPSBhLnN0YXRlO1xyXG4gICAgICAgICAgaHVkX3RleHRfcmVuZGVyZXIocmVuZGVyX2FyZ3Mse1xyXG4gICAgICAgICAgICB4OnN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6c3QucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgZm9udDphLnJlbmRlcmYodClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChERUJVRyAmJiBjYW1lcmEuc3RhdGUuZGVidWcpIHtcclxuICAgICAgICBsZXQgYm94OiBjb2xsaXNpb25fYm94O1xyXG4gICAgICAgIGxldCBib3hlc19jb3B5ID0gWy4uLmJveGVzXVxyXG4gICAgICAgIHdoaWxlKGJveGVzX2NvcHkubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICBsZXQgYm94ID0gYm94ZXNfY29weS5wb3AoKTtcclxuICAgICAgICAgIGxldCByZWN0ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDpib3gud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDpib3guaGVpZ2h0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHJva2VkX3JlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCxyZWN0LGJveC54LGJveC55LFwiI0ZGMDAwMFwiLGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlKGhpdGJveGVzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgbGV0IGJveCA9IGhpdGJveGVzLnBvcCgpO1xyXG4gICAgICAgICAgbGV0IHJlY3QgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOmJveC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OmJveC5oZWlnaHRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LHJlY3QsYm94LngsYm94LnksXCIjMDA4MDAwXCIsY2FtZXJhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYoYSAhPT0gZGVidWdfaW5kZXgpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5vZmZzY3JlZW5fY2FudmFzLGNhbWVyYS5zdGF0ZS52aWV3cG9ydC54LGNhbWVyYS5zdGF0ZS52aWV3cG9ydC55KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIERFQlVHX3YudGFyZ2V0LmdldENvbnRleHQoXCIyZFwiKS5kcmF3SW1hZ2UodGhpcy5vZmZzY3JlZW5fY2FudmFzLGNhbWVyYS5zdGF0ZS52aWV3cG9ydC54LGNhbWVyYS5zdGF0ZS52aWV3cG9ydC55KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoREVCVUcpXHJcbiAgICAgIGJveGVzID0gW107XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGEpPT57dGhpcy5yZW5kZXIoYSl9KTsgXHJcbiAgfVxyXG4gIGluaXRpYWxpemUoKXtcclxuICAgIGluaXRfY2xpY2tfaGFuZGxlcih0aGlzKTtcclxuICB9XHJcbiAgc3RhcnRfbG9naWMoYTpudW1iZXIpe1xyXG4gICAgcmV0dXJuIHdpbmRvdy5zZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICBpZighUEFVU0VEKXtcclxuICAgICAgICBsZXQgbmV3X3RpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCB0aW1lX3NpbmNlID0gbmV3X3RpbWUuZ2V0VGltZSgpIC0gbGFzdF90aW1lLmdldFRpbWUoKTtcclxuICAgICAgICBsYXN0X3RpbWUgPSBuZXdfdGltZTtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbSl7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5zdGF0ZWYodGltZV9zaW5jZSk7XHJcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5odWQpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5odWQuc3RhdGVmKHRpbWVfc2luY2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgRXhlY3V0ZVJlcGVhdEJpbmRzKGEpO1xyXG4gICAgfSxhKTtcclxuICB9XHJcbiAgZ2V0Um9vbSgpe1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuY3VycmVudF9yb29tO1xyXG4gIH1cclxuICBhc3luYyBsb2FkUm9vbVN0cmluZyh4OnN0cmluZyl7XHJcbiAgICBmb3IobGV0IGEgb2Ygcm9vbXMpe1xyXG4gICAgICBpZihhLmNvbnN0cnVjdG9yLm5hbWUgPT0geCl7XHJcbiAgICAgICAgdGhpcy5sb2FkUm9vbShuZXcgYSh0aGlzKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgbG9hZFJvb20oeDpyb29tPHVua25vd24+KXtcclxuICAgIFxyXG4gICAgeC5nYW1lID0gdGhpcztcclxuICAgIGlmKHRoaXMuc3RhdGUuY3VycmVudF9yb29tICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICB3aGlsZSh0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5vYmplY3RzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHNbMF0uZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tID0geDtcclxuICAgIGxldCBuZXdfcm9vbSA9IGF3YWl0IHgubG9hZCgpO1xyXG4gICAgeC5yZWdpc3Rlcl9jb250cm9scygpO1xyXG4gICAgeC5yZWdpc3RlclBhcnRpY2xlcygpO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5sb2dpYyAhPSB1bmRlZmluZWQpe1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUubG9naWMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZS5sb2dpYyA9IHRoaXMuc3RhcnRfbG9naWMobG9naWNfbG9vcF9pbnRlcnZhbClcclxuICAgIHRoaXMucmVuZGVyKDApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9