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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/electron/index.js":
/*!****************************************!*\
  !*** ./node_modules/electron/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname, process) {var fs = __webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js")
var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js")

var pathFile = path.join(__dirname, 'path.txt')

function getElectronPath () {
  if (fs.existsSync(pathFile)) {
    var executablePath = fs.readFileSync(pathFile, 'utf-8')
    if (process.env.ELECTRON_OVERRIDE_DIST_PATH) {
      return path.join(process.env.ELECTRON_OVERRIDE_DIST_PATH, executablePath)
    }
    return path.join(__dirname, 'dist', executablePath)
  } else {
    throw new Error('Electron failed to install correctly, please delete node_modules/electron and try installing again')
  }
}

module.exports = getElectronPath()

/* WEBPACK VAR INJECTION */}.call(this, "/", __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/node-libs-browser/mock/empty.js":
/*!******************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/empty.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/editor.ts":
/*!***********************!*\
  !*** ./src/editor.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __webpack_require__(/*! ./game/main */ "./src/game/main.ts");
const ipcRenderer = __webpack_require__(/*! electron */ "./node_modules/electron/index.js");
document.getElementById("compile_button").addEventListener("click", () => {
    console.log("clicked");
    ipcRenderer.sendSync('compile-prompt', 'ping');
});
let x = ipcRenderer.sendSync('project-path-request', "t");
console.log(x);
console.log(main_1.g);


/***/ }),

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
const json_info = __webpack_require__(/*! ../Overworld/info.json */ "./src/game/rooms/Overworld/info.json");
console.log(json_info);
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

/***/ "./src/game/rooms/Overworld/info.json":
/*!********************************************!*\
  !*** ./src/game/rooms/Overworld/info.json ***!
  \********************************************/
/*! exports provided: menu, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"menu\":{\"id\":\"file\",\"value\":\"File\",\"popup\":{\"menuitem\":[{\"value\":\"New\",\"onclick\":\"CreateNewDoc()\"},{\"value\":\"Open\",\"onclick\":\"OpenDoc()\"},{\"value\":\"Close\",\"onclick\":\"CloseDoc()\"}]}}}");

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
        st.position.x = mouse.x - exports.DEBUG_v.selected_element_offset.x,
            st.position.y = mouse.y - exports.DEBUG_v.selected_element_offset.y;
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
                selected_element_offset: undefined,
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9idWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9nb29tYmEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9wbGF0Zm9ybWVyX29iai50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL3RhcmdldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9yb29tcy9PdmVyd29ybGQvT3ZlcndvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvYXVkaW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb250cm9scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2h1ZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL29iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JhbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9yb29tLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBp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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN1NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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LENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25EO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxvQkFBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN0RCxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxvQkFBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLG9CQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25EO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxvQkFBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFR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UUFBUSxDQUFDLENBQUM7ZUFDN0QsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFO1NBQ3pHO1FBQ0QsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO2VBQzdELEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUNuRSxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFO1NBQzFHO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsWUFBWSxDQUFDLEdBQVcsRUFBRSxDQUFZLEVBQUUsSUFBa0IsRUFBRSxRQUFRLEdBQUcsQ0FBQztRQUN0RSxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEdBQUcsZUFBSSxDQUFDLEdBQUcsRUFBRSxJ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TSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFJLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0ksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1RSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7SUFDbEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNwQixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMs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SUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM5QyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM1QixPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFFWSxxQkFBYSxHQUFHLENBQUMsT0FBaUMsRUFBRSxJQUFlLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhLEVBQUUsTUFBYyxFQUFFLEVBQUU7SUFDdkksSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3BFLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckosSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakssSUFBSSxNQUFNLEdBQUcsSUFBSSxD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QTtJQUNLLFFBQVEsQ0FBQyxDQUFlOztZQUU1QixDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNkLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFDO2dCQUN2QyxPQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO29CQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQzdDO2FBQ0Y7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDNUIsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUIsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDdEIsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUM7Z0JBQy9CLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztZQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBdGFELG9CQXNhQyIsImZpbGUiOiJlZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lZGl0b3IudHNcIik7XG4iLCJ2YXIgZnMgPSByZXF1aXJlKCdmcycpXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG52YXIgcGF0aEZpbGUgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAncGF0aC50eHQnKVxuXG5mdW5jdGlvbiBnZXRFbGVjdHJvblBhdGggKCkge1xuICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoRmlsZSkpIHtcbiAgICB2YXIgZXhlY3V0YWJsZVBhdGggPSBmcy5yZWFkRmlsZVN5bmMocGF0aEZpbGUsICd1dGYtOCcpXG4gICAgaWYgKHByb2Nlc3MuZW52LkVMRUNUUk9OX09WRVJSSURFX0RJU1RfUEFUSCkge1xuICAgICAgcmV0dXJuIHBhdGguam9pbihwcm9jZXNzLmVudi5FTEVDVFJPTl9PVkVSUklERV9ESVNUX1BBVEgsIGV4ZWN1dGFibGVQYXRoKVxuICAgIH1cbiAgICByZXR1cm4gcGF0aC5qb2luKF9fZGlybmFtZSwgJ2Rpc3QnLCBleGVjdXRhYmxlUGF0aClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsZWN0cm9uIGZhaWxlZCB0byBpbnN0YWxsIGNvcnJlY3RseSwgcGxlYXNlIGRlbGV0ZSBub2RlX21vZHVsZXMvZWxlY3Ryb24gYW5kIHRyeSBpbnN0YWxsaW5nIGFnYWluJylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEVsZWN0cm9uUGF0aCgpXG4iLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IGcgfSBmcm9tIFwiLi9nYW1lL21haW5cIjtcclxuY29uc3QgaXBjUmVuZGVyZXIgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGlsZV9idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XHJcbiAgaXBjUmVuZGVyZXIuc2VuZFN5bmMoJ2NvbXBpbGUtcHJvbXB0JywgJ3BpbmcnKVxyXG59KVxyXG5sZXQgeCA9IGlwY1JlbmRlcmVyLnNlbmRTeW5jKCdwcm9qZWN0LXBhdGgtcmVxdWVzdCcsIFwidFwiKTtcclxuY29uc29sZS5sb2coeCk7XHJcbmNvbnNvbGUubG9nKGcpIiwiaW1wb3J0IHt2ZWxvY2l0eSxvYmpfc3RhdGUscm9vbV9zdGF0ZX0gZnJvbSBcIi4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge2dhbWUsdmlld3BvcnR9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHtDYW1lcmF9IGZyb20gXCIuLi9saWIvcmVuZGVyXCI7XHJcbmltcG9ydCB7cm9vbXN9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHtPdmVyd29ybGR9IGZyb20gXCIuL3Jvb21zL092ZXJ3b3JsZC9PdmVyd29ybGRcIjtcclxubGV0IGNhbnZhc19lbGVtZW50OkhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG5leHBvcnQgbGV0IGcgPSBuZXcgZ2FtZShjYW52YXNfZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIikse30sIGFzeW5jIChnOmdhbWU8e30+KT0+e1xyXG4gIGcuc3RhdGUuY2FtZXJhcyA9IFtcclxuICAgIG5ldyBDYW1lcmEoe1xyXG4gICAgICB4OjAsXHJcbiAgICAgIHk6MCxcclxuICAgICAgZGltZW5zaW9uczp7XHJcbiAgICAgICAgaGVpZ2h0OnZpZXdwb3J0LmhlaWdodCxcclxuICAgICAgICB3aWR0aDp2aWV3cG9ydC53aWR0aCAqIDQvNVxyXG4gICAgICB9LFxyXG4gICAgICBzY2FsaW5nOjAuNSxcclxuICAgICAgZGVidWc6ZmFsc2VcclxuICAgIH1cclxuICAgICx7XHJcbiAgICAgIHg6MSxcclxuICAgICAgeTowLFxyXG4gICAgICB3aWR0aDowLjgsXHJcbiAgICAgIGhlaWdodDoxXHJcbiAgICB9KSxcclxuICAgIG5ldyBDYW1lcmEoe1xyXG4gICAgICB4OjAsXHJcbiAgICAgIHk6MCxcclxuICAgICAgZGltZW5zaW9uczp7XHJcbiAgICAgICAgd2lkdGg6dmlld3BvcnQud2lkdGgvNSxcclxuICAgICAgICBoZWlnaHQ6dmlld3BvcnQuaGVpZ2h0XHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxpbmc6MC4yLFxyXG4gICAgICBkZWJ1ZzpmYWxzZVxyXG4gICAgfSx7XHJcbiAgICAgIHg6dmlld3BvcnQud2lkdGggKiA0LzUsXHJcbiAgICAgIHk6MCxcclxuICAgICAgd2lkdGg6MC4yLFxyXG4gICAgICBoZWlnaHQ6MVxyXG4gICAgfSlcclxuICBdXHJcbiAgbGV0IHBhdGggPSBcIi4vcm9vbXMvT3ZlcndvcmxkL092ZXJ3b3JsZC50c1wiO1xyXG4gIC8vY29uc29sZS5sb2coYXdhaXQgaW1wb3J0KHBhdGgpKTtcclxuICBnLmxvYWRSb29tKG5ldyBPdmVyd29ybGQoZykpO1xyXG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJvb21zKSk7XHJcbn0pO1xyXG5cclxuIiwiaW1wb3J0IHtwbGF0Zm9ybWVyX29iaixwbGF0X3N0YXRlfSBmcm9tIFwiLi9wbGF0Zm9ybWVyX29ialwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSxwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBleGVjX3R5cGUgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm94IGV4dGVuZHMgcGxhdGZvcm1lcl9vYmo8b2JqX3N0YXRlPntcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvYm94LnBuZ1wiXHJcbiAgY29sbGlzaW9uID0gdHJ1ZVxyXG4gIGhlaWdodCA9IDY0O1xyXG4gIHdpZHRoID0gNTAwO1xyXG4gIGdyYXZpdHkgPSBmYWxzZTtcclxuICBlbmVteSA9IGZhbHNlO1xyXG4gIHRhZ3MgPSBbXCJzdGF0aWNcIl1cclxuICBjb25zdHJ1Y3RvcihhOnBvc2l0aW9uLGI6bnVtYmVyKXtcclxuICAgIHN1cGVyKGEsYixCb3guZGVmYXVsdF9wYXJhbXMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcG9zaXRpb246YSxcclxuICAgICAgdmVsb2NpdHk6e1xyXG4gICAgICAgIHg6MCxcclxuICAgICAgICB5OjBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgY2xhc3MgVmVydEJveCBleHRlbmRzIEJveHtcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvYm94Mi5wbmdcIjtcclxuICB3aWR0aCA9IDY0O1xyXG4gIGhlaWdodCA9IDUwMDtcclxufSIsImltcG9ydCB7cGxhdGZvcm1lcl9vYmosIHBsYXRfc3RhdGV9IGZyb20gXCIuL3BsYXRmb3JtZXJfb2JqXCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7IGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHtyb3RhdGlvbl9sZW5ndGgsIG9ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgR29vbWJhIH0gZnJvbSBcIi4vZ29vbWJhXCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uL21haW5cIjtcclxuXHJcbmludGVyZmFjZSBidWxsZXRfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XHJcbiAgcm90YXRpb246bnVtYmVyLFxyXG4gIGRpc3RhbmNlOm51bWJlcixcclxuICBzcGVlZDpudW1iZXIsXHJcbiAgZGFtYWdlOm51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgcG9zaXRpb257XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1bGxldCBleHRlbmRzIG9iajxidWxsZXRfc3RhdGU+e1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9idWxsZXQucG5nXCI7XHJcbiAgaGVpZ2h0ID0gMjA7XHJcbiAgd2lkdGggPSAxMDtcclxuICBncmF2aXR5ID0gZmFsc2U7XHJcbiAgbWF4X2Rpc3RhbmNlID0gMjAwMDtcclxuICB0YWdzID0gW1wiYnVsbGV0XCJdO1xyXG4gIGNvbnN0cnVjdG9yKHg6cG9zaXRpb24sIGFuZ2xlOm51bWJlciwgaWQ6c3RyaW5nID0gdW5kZWZpbmVkKXtcclxuICAgIHN1cGVyKHgpO1xyXG4gICAgaWYoaWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcG9zaXRpb246eCxcclxuICAgICAgdmVsb2NpdHk6e1xyXG4gICAgICAgIHg6MCxcclxuICAgICAgICB5OjBcclxuICAgICAgfSxcclxuICAgICAgc3BlZWQ6MTAsXHJcbiAgICAgIHJvdGF0aW9uOmFuZ2xlLFxyXG4gICAgICBkaXN0YW5jZTowLFxyXG4gICAgICBkYW1hZ2U6NVxyXG4gICAgfVxyXG4gICAgdGhpcy5yb3RhdGlvbiA9IGFuZ2xlO1xyXG4gIH1cclxuICBzdGF0ZWYodGltZTpudW1iZXIpe1xyXG4gICAgdGhpcy5zdGF0ZS52ZWxvY2l0eSA9IHJvdGF0aW9uX2xlbmd0aCh0aGlzLnN0YXRlLnNwZWVkLHRoaXMuc3RhdGUucm90YXRpb24pO1xyXG4gICAgdGhpcy5zdGF0ZS5kaXN0YW5jZSArPSB0aGlzLnN0YXRlLnNwZWVkO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5kaXN0YW5jZSA+IHRoaXMubWF4X2Rpc3RhbmNlKXtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVnaXN0ZXJfY29udHJvbHMoKXtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm9ja2V0IGV4dGVuZHMgQnVsbGV0e1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9mb2xkZXIvcm9ja2V0LnBuZ1wiO1xyXG4gIGhlaWdodCA9IDY3O1xyXG4gIHdpZHRoID0gMTY7XHJcbiAgcGFydGljbGVfdGltZXIgPSAwO1xyXG4gIHBhcnRpY2xlX2ZyZXF1ZW5jeSA9IDU7XHJcbiAgbWF4X2Rpc3RhbmNlID0gNTAwMDtcclxuICB0YWdzID0gW1wiUm9ja2V0XCJdXHJcbiAgaGl0Ym94ID0ge1xyXG4gICAgeF9vZmZzZXQ6MCxcclxuICAgIHlfb2Zmc2V0OjAsXHJcbiAgICB3aWR0aDoxNixcclxuICAgIGhlaWdodDoxNlxyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcih4OnBvc2l0aW9uLGFuZ2xlOm51bWJlcil7XHJcbiAgICBzdXBlcih4LGFuZ2xlKTtcclxuICAgIHRoaXMuc3RhdGUuc3BlZWQgPSAxNTtcclxuICAgIHRoaXMuc3RhdGUuZGFtYWdlID0gMjA7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2F1ZGlvKCl7XHJcbiAgICB0aGlzLmF1ZGlvLmFkZChcImV4cGxvc2lvblwiLFwiLi9zb3VuZHMvZXhwbG9zaW9uMi5tcDNcIik7XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOm51bWJlcil7XHJcbiAgICBzdXBlci5zdGF0ZWYodGltZSk7XHJcbiAgICBpZih0aGlzLnBhcnRpY2xlX3RpbWVyID09IDApe1xyXG4gICAgICBsZXQgb2Zmc2V0ID0gcm90YXRpb25fbGVuZ3RoKDMwLHRoaXMucm90YXRpb24gKyAxODApO1xyXG4gICAgICB0aGlzLmVtaXRfcGFydGljbGUoXCJzbW9rZVwiLG9mZnNldCwgNDAwLCAxMik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhcnRpY2xlX3RpbWVyICs9IHRpbWU7XHJcbiAgICBpZih0aGlzLnBhcnRpY2xlX3RpbWVyID4gdGhpcy5wYXJ0aWNsZV9mcmVxdWVuY3kpe1xyXG4gICAgIHRoaXMucGFydGljbGVfdGltZXIgPSAwOyBcclxuICAgIH1cclxuICAgIGxldCByb29tID0gZy5zdGF0ZS5jdXJyZW50X3Jvb207XHJcbiAgICBsZXQgY29sbGlzaW9ucyA9IHJvb20uY2hlY2tfY29sbGlzaW9ucyh0aGlzLmdldF9mdWxsX2NvbGxpc2lvbl9ib3goKSxbXCJndW5cIixcInBsYXllclwiXSk7XHJcbiAgICBpZihjb2xsaXNpb25zLmxlbmd0aCA+IDApe1xyXG4gICAgICBmb3IobGV0IGNvbGxpc2lvbiBvZiBjb2xsaXNpb25zKXtcclxuICAgICAgICBsZXQgc3QgPSBjb2xsaXNpb24uc3RhdGUgYXMgdW5rbm93biBhcyBwbGF0X3N0YXRlO1xyXG4gICAgICAgIGlmKCg8cGxhdGZvcm1lcl9vYmo8cGxhdF9zdGF0ZT4+Y29sbGlzaW9uKS5zdGF0ZS5oZWFsdGgpe1xyXG4gICAgICAgICAgc3QuaGVhbHRoIC09IHRoaXMuc3RhdGUuZGFtYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb2xsaXNpb24udGFncy5pbmRleE9mKFwiZHVtbXlcIikgPiAtMSl7XHJcbiAgICAgICAgICBsZXQgZHVtbXkgPSBjb2xsaXNpb24gYXMgR29vbWJhO1xyXG4gICAgICAgICAgaWYoZHVtbXkuc3RhdGUuanVtcGluZyl7XHJcbiAgICAgICAgICAgIGR1bW15LnN0YXRlLnRpbWVzX2FpcnNob3QrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdGF0ZS5kaXN0YW5jZSA9IHRoaXMubWF4X2Rpc3RhbmNlO1xyXG4gICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgICBsZXQgZXhwbG9zaW9uX2NvbGxpc2lvbnMgPSByb29tLmNoZWNrX2NvbGxpc2lvbnMoe1xyXG4gICAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOjI1NixcclxuICAgICAgICBoZWlnaHQ6MjU2XHJcbiAgICAgIH0sW1wic3RhdGljXCJdKVxyXG4gICAgICBmb3IobGV0IGNvbGxpZGVyIG9mIGV4cGxvc2lvbl9jb2xsaXNpb25zKXtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKGNvbGxpZGVyKTtcclxuICAgICAgICBsZXQgbXVsdGlwbHllciA9IDEgLSBkaXN0YW5jZS8zMDA7XHJcbiAgICAgICAgaWYobXVsdGlwbHllciA8IDApXHJcbiAgICAgICAgICBtdWx0aXBseWVyID0gMDtcclxuICAgICAgICBsZXQgb19zdGF0ZSA9IGNvbGxpZGVyLnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICAgICAgICBsZXQgdmVsb2NpdGllcyA9IHJvdGF0aW9uX2xlbmd0aChtdWx0aXBseWVyICogMTAwLCB0aGlzLmFuZ2xlVG93YXJkcyhjb2xsaWRlcikpO1xyXG4gICAgICAgIG9fc3RhdGUudmVsb2NpdHkueCArPSB2ZWxvY2l0aWVzLng7XHJcbiAgICAgICAgb19zdGF0ZS52ZWxvY2l0eS55ICs9IHZlbG9jaXRpZXMueTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXRfcGFydGljbGUoXCJleHBsb3Npb25cIix7eDowLHk6MH0sNTAwLDApO1xyXG4gICAgICB0aGlzLmF1ZGlvLnBsYXkoXCJleHBsb3Npb25cIiwwLjIpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IHZlbG9jaXR5LCBvYmpfc3RhdGUsIHBvc2l0aW9uX2luaXQsIHN0YXRlX2Z1bmMscG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHsgc3ByaXRlLCBzcHJpdGVfZ2VuIH0gZnJvbSBcIi4uLy4uL2xpYi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgb2JqLCByb3RhdGlvbl9sZW5ndGgsIGNvbXBvc2l0ZV9vYmogfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybWVyX29iaiwgcGxhdGZvcm1lcl9vYmpfY29tcG9zaXRlLCBwbGF0X3N0YXRlIH0gZnJvbSBcIi4vcGxhdGZvcm1lcl9vYmpcIjtcclxuaW1wb3J0IHsgUG9sbF9Nb3VzZSwgZXhlY190eXBlIH0gZnJvbSBcIi4uLy4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4uLy4uL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgQmluZCB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHtUZXh0X05vZGUsVGV4dH0gZnJvbSBcIi4uLy4uL2xpYi9odWRcIjtcclxuaW1wb3J0IHsgT3ZlcndvcmxkIH0gZnJvbSBcIi4uL3Jvb21zL092ZXJ3b3JsZC9PdmVyd29ybGRcIjtcclxuaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9tYWluXCI7XHJcblxyXG5lbnVtIGRpcmVjdGlvbiB7XHJcbiAgbGVmdCxcclxuICByaWdodFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGdvb21iYV9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZSwgcGxhdF9zdGF0ZSB7XHJcbiAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXHJcbiAgdmVsb2NpdHk6IHZlbG9jaXR5LFxyXG4gIGp1bXBpbmc6IGJvb2xlYW4sXHJcbiAgdGltZXNfYWlyc2hvdDogbnVtYmVyLFxyXG4gIG1heF90aW1lc19haXJzaG90OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIGd1bl9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZSB7XHJcbiAgcm90YXRpb246IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGxheWVyX1BhcmFtc3tcclxuICBpZDpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIGNvbXBvc2l0ZV9vYmo8b2JqX3N0YXRlPntcclxuICBlbmVteSA9IHRydWU7XHJcbiAgY29uc3RydWN0b3IoYTogcG9zaXRpb24scm90YXRpb246bnVtYmVyLGQ6UGxheWVyX1BhcmFtcykge1xyXG4gICAgXHJcbiAgICBzdXBlcihhKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhLFxyXG4gICAgICB2ZWxvY2l0eToge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgQ29udHJvbGxlZFBsYXllcihhLCByb3RhdGlvbixkKSk7XHJcbiAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgR3VuKCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEd1biBleHRlbmRzIHBsYXRmb3JtZXJfb2JqPGd1bl9zdGF0ZT57XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL2ZvbGRlci9ndW4ucG5nXCI7XHJcbiAgaGVpZ2h0ID0gNTA7XHJcbiAgd2lkdGggPSAyMDtcclxuICBjb2xsaXNpb24gPSBmYWxzZTtcclxuICByZW5kZXIgPSB0cnVlO1xyXG4gIHBsYXllcjogR29vbWJhO1xyXG4gIGdyYXZpdHkgPSBmYWxzZTtcclxuICBjdXJzb3I6IEN1cnNvcjtcclxuICB0YWdzID0gW1wiZ3VuXCJdXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihwb3NpdGlvbl9pbml0KCkucG9zaXRpb24sMCxHdW4uZGVmYXVsdF9wYXJhbXMpO1xyXG4gICAgdGhpcy5pZCA9IFwiZ3VuXCI7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb25faW5pdCgpLnBvc2l0aW9uLFxyXG4gICAgICB2ZWxvY2l0eTogcG9zaXRpb25faW5pdCgpLnZlbG9jaXR5LFxyXG4gICAgICByb3RhdGlvbjogLTFcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGVmKHQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMucGxheWVyKSB7XHJcbiAgICAgIGxldCBhbmdsZSA9IHRoaXMucGxheWVyLmFuZ2xlVG93YXJkcyh0aGlzLmN1cnNvcik7XHJcbiAgICAgIGxldCByb3QgPSByb3RhdGlvbl9sZW5ndGgoNTAsIGFuZ2xlKTtcclxuICAgICAgdGhpcy5yb3RhdGlvbiA9IGFuZ2xlO1xyXG4gICAgICB0aGlzLnN0YXRlLnJvdGF0aW9uID0gYW5nbGU7XHJcbiAgICAgIHRoaXMuc3RhdGUucG9zaXRpb24gPSB7XHJcbiAgICAgICAgeDogcm90LnggKyB0aGlzLnBsYXllci5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHJvdC55ICsgdGhpcy5wbGF5ZXIuc3RhdGUucG9zaXRpb24ueVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxldCByb29tID0gZy5nZXRSb29tKCk7XHJcbiAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wYXJlbnQuZ2V0X0l0ZW1zX2J5X1RhZyhcInBsYXllclwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIHRoaXMuY3Vyc29yID0gPEN1cnNvcj5yb29tLmdldE9iaihcImN1cnNvclwiKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3Vyc29yIGV4dGVuZHMgcGxhdGZvcm1lcl9vYmo8b2JqX3N0YXRlPntcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvY3Vyc29yLnBuZ1wiO1xyXG4gIGhlaWdodCA9IDY0O1xyXG4gIHdpZHRoID0gNjQ7XHJcbiAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICByZW5kZXIgPSB0cnVlO1xyXG4gIHNjYWxpbmcgPSAxO1xyXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHt4OjAseTowfSwwLHtpZDppZH0pO1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgICAgfSxcclxuICAgICAgdmVsb2NpdHk6IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0ZWYoKSB7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgZ29vbWJhX3BhcmFtc3tcclxuICBpZD86c3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHb29tYmEgZXh0ZW5kcyBwbGF0Zm9ybWVyX29iajxnb29tYmFfc3RhdGU+e1xyXG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9mb2xkZXIvcm9ib3QucG5nXCI7XHJcbiAgaGVpZ2h0ID0gMTQ5O1xyXG4gIHdpZHRoID0gMTQ5O1xyXG4gIHRhZ3MgPSBbXCJkdW1teVwiXVxyXG4gIGNvbGxpc2lvbiA9IHRydWU7XHJcbiAgaGVhbHRoX3RleHQ6IFRleHQ7XHJcbiAgY29uc3RydWN0b3IoYTpwb3NpdGlvbixiOm51bWJlcixjOmdvb21iYV9wYXJhbXMgPSBHb29tYmEuZGVmYXVsdF9wYXJhbXMpIHtcclxuICAgIHN1cGVyKGEsYixjKTtcclxuICAgIGlmIChjLmlkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmlkID0gYy5pZDtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLmxlZnQsXHJcbiAgICAgIHBvc2l0aW9uOmEsXHJcbiAgICAgIHZlbG9jaXR5OiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGp1bXBpbmc6IGZhbHNlLFxyXG4gICAgICBoZWFsdGg6IDEwMCxcclxuICAgICAgdGltZXNfYWlyc2hvdDogMCxcclxuICAgICAgbWF4X3RpbWVzX2FpcnNob3Q6IDBcclxuICAgIH1cclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KFwid2FsazFcIik7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2FuaW1hdGlvbnMoKSB7XHJcbiAgICBsZXQgc3ByaXRlcyA9IHNwcml0ZV9nZW4odGhpcy5zcHJpdGVfc2hlZXQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoXCJ3YWxrMVwiLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzBdXSxcclxuICAgICAgWzEwMCwgc3ByaXRlc1swXVsxXV0sXHJcbiAgICAgIFs0MDAsIHNwcml0ZXNbMF1bMF1dLFxyXG4gICAgICBbNTAwLCBzcHJpdGVzWzBdWzJdXVxyXG4gICAgXSwgODAwKVxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZChcIndhbGsyXCIsIFtcclxuICAgICAgWzAsIHNwcml0ZXNbMF1bNV1dLFxyXG4gICAgICBbMTAwLCBzcHJpdGVzWzBdWzRdXSxcclxuICAgICAgWzQwMCwgc3ByaXRlc1swXVs1XV0sXHJcbiAgICAgIFs1MDAsIHNwcml0ZXNbMF1bM11dXHJcbiAgICBdLCA4MDApXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKFwiaWRsZWxlZnRcIiwgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVswXV1cclxuICAgIF0sIDEpO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnaWRsZXJpZ2h0JywgW1xyXG4gICAgICBbMCwgc3ByaXRlc1swXVs1XV1cclxuICAgIF0sIDEpO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnZmFsbGxlZnQnLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzZdXVxyXG4gICAgXSwgMSk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMuYWRkKCdmYWxscmlnaHQnLCBbXHJcbiAgICAgIFswLCBzcHJpdGVzWzBdWzddXVxyXG4gICAgXSwgMSlcclxuICB9XHJcbiAgcmVnaXN0ZXJfYXVkaW8oKSB7XHJcbiAgICB0aGlzLmF1ZGlvLmFkZChcInNsaW1lXCIsIFwiLi9zb3VuZHMvZ29vbWJhL3NsaW1lYmFsbC53YXZcIik7XHJcbiAgICB0aGlzLmF1ZGlvLmFkZChcImV4cGxvc2lvblwiLCBcIi4vc291bmRzL2V4cGxvc2lvbi5tcDNcIilcclxuICB9XHJcbiAgcmVuZGVyZih0OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmp1bXBpbmcpIHtcclxuICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMuc3RhdGUuZGlyZWN0aW9uID09IGRpcmVjdGlvbi5sZWZ0ID8gXCJmYWxsbGVmdFwiIDogXCJmYWxscmlnaHRcIjtcclxuICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoYW5pbWF0aW9uKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA9PSAwICYmIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9PSAwKSB7XHJcbiAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PSBkaXJlY3Rpb24ubGVmdCA/IFwiaWRsZWxlZnRcIiA6IFwiaWRsZXJpZ2h0XCI7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KGFuaW1hdGlvbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghdGhpcy5hbmltYXRpb25zLmFuaW1hdGluZykge1xyXG4gICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT0gZGlyZWN0aW9uLmxlZnQgPyBcIndhbGsxXCIgOiBcIndhbGsyXCI7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KGFuaW1hdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VwZXIucmVuZGVyZih0KTtcclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6IG51bWJlcikge1xyXG4gICAgbGV0IHJvb20gPSBnLmdldFJvb20oKTtcclxuICAgIC8qXHJcbiAgICBpZighdGhpcy5oZWFsdGhfdGV4dCl7XHJcbiAgICAgIGxldCBuZXdfbm9kZSA9IG5ldyBUZXh0KHtcclxuICAgICAgICBwb3NpdGlvbjp7XHJcbiAgICAgICAgICB4OjAsXHJcbiAgICAgICAgICB5OjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpemU6MjAsXHJcbiAgICAgICAgc2NhbGluZzoxLFxyXG4gICAgICAgIGNvbG9yOlwid2hpdGVcIixcclxuICAgICAgICBmb250OlwiQWxhdGFcIixcclxuICAgICAgICBhbGlnbjpcImNlbnRlclwiXHJcbiAgICAgIH0sKCk9PlwiXCIrTWF0aC5mbG9vcih0aGlzLnN0YXRlLnBvc2l0aW9uLnkpKTtcclxuICAgICAgcm9vbS50ZXh0X25vZGVzLnB1c2gobmV3X25vZGUpO1xyXG4gICAgICB0aGlzLmhlYWx0aF90ZXh0ID0gbmV3X25vZGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuaGVhbHRoX3RleHQuc3RhdGUucG9zaXRpb24ueCA9IHRoaXMuc3RhdGUucG9zaXRpb24ueCArIDMwO1xyXG4gICAgdGhpcy5oZWFsdGhfdGV4dC5zdGF0ZS5wb3NpdGlvbi55ID0gdGhpcy5zdGF0ZS5wb3NpdGlvbi55ICsgMTAwO1xyXG4gICAgKi9cclxuICAgIGxldCBjdXJzb3IgPSByb29tLmdldE9iaihcImN1cnNvclwiKTtcclxuICAgIGlmICh0aGlzLmNvbGxpc2lvbikge1xyXG4gICAgICBpZiAocm9vbS5jaGVja19jb2xsaXNpb25zKHtcclxuICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IDEsXHJcbiAgICAgICAgeDogdGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHRoaXMuc3RhdGUucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0IC8gMiAtIDEsXHJcbiAgICAgIH0pLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmp1bXBpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXRlLm1heF90aW1lc19haXJzaG90ID0gTWF0aC5tYXgodGhpcy5zdGF0ZS50aW1lc19haXJzaG90LCB0aGlzLnN0YXRlLm1heF90aW1lc19haXJzaG90KTtcclxuICAgICAgICB0aGlzLnN0YXRlLnRpbWVzX2FpcnNob3QgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuanVtcGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPiAwKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9IHRoaXMuc3RhdGUudmVsb2NpdHkueSAtIDAuNCAqIDE2IC8gdGltZTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueSA8IDApXHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPCAwKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9IHRoaXMuc3RhdGUudmVsb2NpdHkueSArIDAuNCAqIDE2IC8gdGltZTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueSA+IDApXHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZlbG9jaXR5LnggPiAwKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuZGlyZWN0aW9uID0gZGlyZWN0aW9uLnJpZ2h0O1xyXG4gICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggPSB0aGlzLnN0YXRlLnZlbG9jaXR5LnggLSAwLjQgKiAxNiAvIHRpbWU7O1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52ZWxvY2l0eS54IDwgMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA8IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24ubGVmdDtcclxuICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54ICsgMC40ICogMTYgLyB0aW1lOztcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA+IDApIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlZFBsYXllciBleHRlbmRzIEdvb21iYSB7XHJcbiAgdGFncyA9IFtcInBsYXllclwiXVxyXG4gIHJlZ2lzdGVyX2NvbnRyb2xzKCkge1xyXG4gICAgdGhpcy5iaW5kX2NvbnRyb2woXCJLZXlBXCIsIGV4ZWNfdHlwZS5yZXBlYXQsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA+IC0xMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5iaW5kX2NvbnRyb2woXCJLZXlBXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdGUuZGlyZWN0aW9uID0gZGlyZWN0aW9uLmxlZnQ7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCAtIDAuMTtcclxuICAgIH0pXHJcbiAgICB0aGlzLmJpbmRfY29udHJvbChcIm1vdXNlMGRvd25cIiwgZXhlY190eXBlLnJlcGVhdCwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmF1ZGlvLnBsYXkoXCJleHBsb3Npb25cIiwgMC40KTtcclxuICAgIH0sIDQwMCk7XHJcbiAgICB0aGlzLmJpbmRfY29udHJvbChcIktleVNcIiwgZXhlY190eXBlLnJlcGVhdCwgKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuY29sbGlzaW9uICYmIHRoaXMuc3RhdGUudmVsb2NpdHkueSA+IC0xMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9IHRoaXMuc3RhdGUudmVsb2NpdHkueSAtIDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5iaW5kX2NvbnRyb2woXCJLZXlXXCIsIGV4ZWNfdHlwZS5yZXBlYXQsICgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmNvbGxpc2lvbiAmJiB0aGlzLnN0YXRlLnZlbG9jaXR5LnkgPCAxMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueSA9IHRoaXMuc3RhdGUudmVsb2NpdHkueSArIDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5iaW5kX2NvbnRyb2woXCJLZXlEXCIsIGV4ZWNfdHlwZS5yZXBlYXQsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmVsb2NpdHkueCA8IDEwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS52ZWxvY2l0eS54ICsgMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJpbmRfY29udHJvbChcIktleURcIiwgZXhlY190eXBlLm9uY2UsICgpID0+IHtcclxuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24ucmlnaHQ7XHJcbiAgICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCA9IHRoaXMuc3RhdGUudmVsb2NpdHkueCArIDAuMTtcclxuICAgIH0pXHJcbiAgICB0aGlzLmJpbmRfY29udHJvbChcIlNwYWNlXCIsIGV4ZWNfdHlwZS5vbmNlLCAoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5qdW1waW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ICs9IDI1O1xyXG4gICAgICAgIHRoaXMuYXVkaW8ucGxheShcInNsaW1lXCIsIDAuMSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBzdGF0ZWYodGltZTogbnVtYmVyKSB7XHJcbiAgICBzdXBlci5zdGF0ZWYodGltZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhbmRpbmdHb29tYmEgZXh0ZW5kcyBwbGF0Zm9ybWVyX29iajxnb29tYmFfc3RhdGU+e1xyXG4gIHNwcml0ZV91cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Qvc3JjL2dhbWUvb2JqZWN0cy9nb29tYmEucG5nXCI7XHJcbiAgaGVpZ2h0ID0gNjQ7XHJcbiAgd2lkdGggPSA2NDtcclxuICBjb2xsaXNpb24gPSB0cnVlO1xyXG4gIGVuZW15ID0gdHJ1ZTtcclxuICB0YWdzID0gW1wic3RhbmRlclwiXVxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBpZDogc3RyaW5nID0gdW5kZWZpbmVkKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIHgseVxyXG4gICAgfSwwLFN0YW5kaW5nR29vbWJhLmRlZmF1bHRfcGFyYW1zKTtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbi5sZWZ0LFxyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHgsXHJcbiAgICAgICAgeVxyXG4gICAgICB9LFxyXG4gICAgICB2ZWxvY2l0eToge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgICB9LFxyXG4gICAgICBqdW1waW5nOiBmYWxzZSxcclxuICAgICAgaGVhbHRoOiAxMDAsXHJcbiAgICAgIHRpbWVzX2FpcnNob3Q6IDAsXHJcbiAgICAgIG1heF90aW1lc19haXJzaG90OiAwXHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc3RhdGUuanVtcGluZykge1xyXG4gICAgICBsZXQgbW91c2VfcG9zaXRpb24gPSBQb2xsX01vdXNlKHRoaXMuZ2FtZS5zdGF0ZS5jYW52YXMsdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXNbMF0pO1xyXG4gICAgICBpZiAobW91c2VfcG9zaXRpb24ueSA+IG1vdXNlX3Bvc2l0aW9uLmxhc3QueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvbl9jaGVjayh7XHJcbiAgICAgICAgICB4OiB0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICB5OiB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCxcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSA9IG1vdXNlX3Bvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKG1vdXNlX3Bvc2l0aW9uLnkgPCBtb3VzZV9wb3NpdGlvbi5sYXN0LnkpIHtcclxuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25fY2hlY2soe1xyXG4gICAgICAgICAgeDogdGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgeTogdGhpcy5zdGF0ZS5wb3NpdGlvbi55IC0gMSxcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgICAgfSkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSA9IG1vdXNlX3Bvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtb3VzZV9wb3NpdGlvbi54IDwgbW91c2VfcG9zaXRpb24ubGFzdC54KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uX2NoZWNrKHtcclxuICAgICAgICAgIHg6IHRoaXMuc3RhdGUucG9zaXRpb24ueCAtIDEsXHJcbiAgICAgICAgICB5OiB0aGlzLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRcclxuICAgICAgICB9KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi54ID0gbW91c2VfcG9zaXRpb24ueCAtIHRoaXMud2lkdGggLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChtb3VzZV9wb3NpdGlvbi54ID4gbW91c2VfcG9zaXRpb24ubGFzdC54KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uX2NoZWNrKHtcclxuICAgICAgICAgIHg6IHRoaXMuc3RhdGUucG9zaXRpb24ueCArIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICB5OiB0aGlzLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRcclxuICAgICAgICB9KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi54ID0gbW91c2VfcG9zaXRpb24ueCAtIHRoaXMud2lkdGggLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3VwZXIuc3RhdGVmKHRpbWUpO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtjb21wb3NpdGVfb2JqLCBncmF2aXR5X29ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGUscG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGxhdF9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcclxuICBoZWFsdGg6bnVtYmVyICBcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHBsYXRmb3JtZXJfb2JqPHQ+IGV4dGVuZHMgZ3Jhdml0eV9vYmo8dD57XHJcbiAgZW5lbXkgPSBmYWxzZTtcclxuICBjb25zdHJ1Y3RvcihhOnBvc2l0aW9uLGI6bnVtYmVyLGM6dW5rbm93bil7XHJcbiAgICBzdXBlcihhLGIsYyk7XHJcbiAgfVxyXG4gIHN0YXRlZihhOm51bWJlcil7XHJcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgcGxhdF9zdGF0ZTtcclxuICAgIGlmKHN0YXRlLmhlYWx0aCA8PSAwKXtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBwbGF0Zm9ybWVyX29ial9jb21wb3NpdGU8dD4gZXh0ZW5kcyBjb21wb3NpdGVfb2JqPHQ+e1xyXG4gIGVuZW15ID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoYTpwb3NpdGlvbil7XHJcbiAgICBzdXBlcihhKTtcclxuICB9XHJcbiAgc3RhdGVmKGE6bnVtYmVyKXtcclxuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBwbGF0X3N0YXRlO1xyXG4gICAgaWYoc3RhdGUuaGVhbHRoIDw9IDApe1xyXG4gICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7dmVsb2NpdHksb2JqX3N0YXRlLHN0YXRlX2Z1bmMscG9zaXRpb259IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtzcHJpdGUsc3ByaXRlX2dlbn0gZnJvbSBcIi4uLy4uL2xpYi9zcHJpdGVcIjtcclxuaW1wb3J0IHtvYmoscm90YXRpb25fbGVuZ3RofSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQge3BsYXRmb3JtZXJfb2JqLHBsYXRfc3RhdGV9IGZyb20gXCIuL3BsYXRmb3JtZXJfb2JqXCI7XHJcbmltcG9ydCB7UG9sbF9Nb3VzZSwgZXhlY190eXBlfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7Y29sbGlzaW9uX2JveH0gZnJvbSBcIi4uLy4uL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHtCaW5kfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XHJcblxyXG5pbXBvcnQge2d9IGZyb20gXCIuLi9tYWluXCI7XHJcblxyXG5pbnRlcmZhY2UgdGFyZ2V0X3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRle1xyXG4gIGhlYWx0aDpudW1iZXI7XHJcbiAgYnJlYWtpbmc6Ym9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgcGxhdGZvcm1lcl9vYmo8dGFyZ2V0X3N0YXRlPntcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvdGFyZ2V0LnBuZ1wiO1xyXG4gIGhlaWdodCA9IDY0O1xyXG4gIHdpZHRoID0gNjQ7XHJcbiAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICBncmF2aXR5ID0gZmFsc2U7XHJcbiAgcmVuZGVyID0gdHJ1ZTtcclxuICBlbmVteSA9IHRydWU7XHJcbiAgY29uc3RydWN0b3IoYTpwb3NpdGlvbil7XHJcbiAgICBzdXBlcihhLDAsVGFyZ2V0LmRlZmF1bHRfcGFyYW1zKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOmEsXHJcbiAgICAgIHZlbG9jaXR5OntcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowXHJcbiAgICAgIH0sXHJcbiAgICAgIGhlYWx0aDoyMCxcclxuICAgICAgYnJlYWtpbmc6ZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgcmVnaXN0ZXJfYXVkaW8oKXtcclxuICAgIHRoaXMuYXVkaW8uYWRkKFwiYnJlYWtcIixcIi4vc291bmRzL3RhcmdldC9oaXRzb3VuZF8yNzQubXAzXCIpO1xyXG4gIH1cclxuICByZWdpc3Rlcl9hbmltYXRpb25zKCl7XHJcbiAgICBsZXQgc3ByaXRlcyA9IHNwcml0ZV9nZW4odGhpcy5zcHJpdGVfc2hlZXQsdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XHJcbiAgICBcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoXCJicmVha1wiLFtcclxuICAgICAgWzAsc3ByaXRlc1swXVsxXV0sXHJcbiAgICAgIFs1MCxzcHJpdGVzWzBdWzJdXSxcclxuICAgICAgWzEwMCxzcHJpdGVzWzBdWzNdXSxcclxuICAgICAgWzE1MCxzcHJpdGVzWzBdWzRdXVxyXG4gICAgXSwyMDApXHJcbiAgfVxyXG4gIHN0YXRlZigpe1xyXG4gICAgaWYodGhpcy5zdGF0ZS5oZWFsdGggPD0gMCAmJiAhdGhpcy5zdGF0ZS5icmVha2luZyl7XHJcbiAgICAgIHRoaXMuc3RhdGUuYnJlYWtpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbnMucGxheShcImJyZWFrXCIsKCk9PntcclxuICAgICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmF1ZGlvLnBsYXkoXCJicmVha1wiLDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgcm9vbSwgYXBwbHlfZ3Jhdml0eSB9IGZyb20gXCIuLi8uLi8uLi9saWIvcm9vbVwiO1xyXG5pbXBvcnQgeyBHdW4sIEdvb21iYSxDdXJzb3IsIENvbnRyb2xsZWRQbGF5ZXIsIFBsYXllciB9IGZyb20gXCIuLi8uLi9vYmplY3RzL2dvb21iYVwiO1xyXG5pbXBvcnQgeyBCb3gsIFZlcnRCb3ggfSBmcm9tIFwiLi4vLi4vb2JqZWN0cy9ib3hcIjtcclxuaW1wb3J0IHsgdmVsb2NpdHlfY29sbGlzaW9uX2NoZWNrIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgZ3Jhdml0eV9vYmosIHJvdGF0aW9uX2xlbmd0aCB9IGZyb20gXCIuLi8uLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IFBvbGxfTW91c2UsIGV4ZWNfdHlwZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgSFVELCBUZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9odWRcIjtcclxuaW1wb3J0IHsgREVCVUcsIGdhbWUsIEdldFZpZXdwb3J0RGltZW5zaW9ucywgc2V0RGVidWcgfSBmcm9tIFwiLi4vLi4vLi4vdmFuXCI7XHJcbmltcG9ydCB7QnVsbGV0LCBSb2NrZXR9IGZyb20gXCIuLi8uLi9vYmplY3RzL2J1bGxldFwiO1xyXG5pbXBvcnQge1RhcmdldH0gZnJvbSBcIi4uLy4uL29iamVjdHMvdGFyZ2V0XCI7XHJcbmltcG9ydCB7Z30gZnJvbSBcIi4uLy4uL21haW5cIjtcclxuaW1wb3J0ICogYXMganNvbl9pbmZvIGZyb20gXCIuLi9PdmVyd29ybGQvaW5mby5qc29uXCI7XHJcbmludGVyZmFjZSBvdmVyd29ybGRfaSB7XHJcbiAgcGxheWVyOiBncmF2aXR5X29iajx1bmtub3duPixcclxuICBwYXVzZWQ6IGJvb2xlYW4sXHJcbiAgbG9ja2VkX2J1bGxldDpCdWxsZXRcclxufVxyXG5jb25zb2xlLmxvZyhqc29uX2luZm8pO1xyXG5jbGFzcyBPdmVyd29ybGRfSFVEIGV4dGVuZHMgSFVEIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnRleHRfZWxlbWVudHMucHVzaChuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0ICogNy84XHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDQ0LFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOlwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOjFcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgbGV0IHggPSBnLmdldFJvb20oKS5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgaWYoeClcclxuICAgICAgICByZXR1cm4gYFRpbWVzIEFpcnNob3Q6JHt4LnN0YXRlLnRpbWVzX2FpcnNob3R9YDtcclxuICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH0pKTtcclxuICAgIHRoaXMudGV4dF9lbGVtZW50cy5wdXNoKG5ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQgKiA2LzhcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogNDQsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOjFcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgbGV0IHggPSBnLmdldFJvb20oKS5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgaWYoeClcclxuICAgICAgICByZXR1cm4gYE1heCBUaW1lcyBBaXJzaG90OiR7TWF0aC5tYXgoeC5zdGF0ZS50aW1lc19haXJzaG90LHguc3RhdGUubWF4X3RpbWVzX2FpcnNob3QpfWA7XHJcbiAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBIZWlnaHRfSFVEIGV4dGVuZHMgSFVEe1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy50ZXh0X2VsZW1lbnRzLnB1c2gobmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IDYwMFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiAxNSxcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjpcImxlZnRcIixcclxuICAgICAgc2NhbGluZzoxXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGxldCB4ID0gZy5nZXRSb29tKCkuZ2V0T2JqQnlUYWcoXCJkdW1teVwiKVswXSBhcyBHb29tYmE7XHJcbiAgICAgIGlmKHgpXHJcbiAgICAgICAgcmV0dXJuIGBIZWlnaHQ6JHtNYXRoLmZsb29yKHguc3RhdGUucG9zaXRpb24ueSl9YDtcclxuICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPdmVyd29ybGQgZXh0ZW5kcyByb29tPG92ZXJ3b3JsZF9pPntcclxuICBiYWNrZ3JvdW5kX3VybCA9IFwiLi9zcHJpdGVzL2ltRDQxbC5qcGdcIjtcclxuICBvYmplY3RzOmdyYXZpdHlfb2JqPHVua25vd24+W107XHJcbiAgcHJlZmFicyA9IHtcclxuICAgIFwiZ29vbWJhXCI6R29vbWJhLFxyXG4gICAgXCJwbGF5ZXJcIjpQbGF5ZXIsXHJcbiAgICBcImJveFwiOkJveCxcclxuICAgIFwidGFyZ2V0XCI6VGFyZ2V0XHJcbiAgfTtcclxuICBjb25zdHJ1Y3RvcihnYW1lOmdhbWU8dW5rbm93bj4pIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcGxheWVyOiB1bmRlZmluZWQsXHJcbiAgICAgIHBhdXNlZDogZmFsc2UsXHJcbiAgICAgIGxvY2tlZF9idWxsZXQ6bnVsbFxyXG4gICAgfTtcclxuICAgIGZvcihsZXQgYSA9IDA7YTwxMDthKyspe1xyXG4gICAgICB0aGlzLm9iamVjdHMucHVzaChuZXcgVmVydEJveCh7eDozMjAseToyNTAgKyBhICogNTAwfSwwKSk7XHJcbiAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBWZXJ0Qm94KHt4OjkwMCx5OjI1MCArIGEgKiA1MDB9LDApKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCAxMDA7IGErKyl7XHJcbiAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBCb3goe3g6NzAwICsgYSAqIDUwMCx5OjB9LDApKTtcclxuICAgIH1cclxuICAgIHRoaXMuYWRkSXRlbXMoWy4uLm5ldyBQbGF5ZXIoe3g6NzAwLHk6MTUwfSwwLHtpZDpcInBsYXllclwifSkuY29tYmluZWRfb2JqZWN0cygpLCBuZXcgR29vbWJhKHt4OjU1MCx5OjE1MH0sMCksbmV3IEJveCh7eDo2MDAseTowfSwwKSxuZXcgQ3Vyc29yKFwiY3Vyc29yXCIpXSlcclxuICAgIGdhbWUuc3RhdGUuY2FtZXJhc1swXS5odWQgPSBuZXcgT3ZlcndvcmxkX0hVRCgpO1xyXG4gICAgZ2FtZS5zdGF0ZS5jYW1lcmFzWzFdLmh1ZCA9IG5ldyBIZWlnaHRfSFVEKCk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2NvbnRyb2xzKCkge1xyXG4gICAgdGhpcy5iaW5kQ29udHJvbChcIkVzY2FwZVwiLCBleGVjX3R5cGUub25jZSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmdhbWUuc3RhdGUuY2FtZXJhc1swXS5zdGF0ZS5kZWJ1ZyA9ICF0aGlzLmdhbWUuc3RhdGUuY2FtZXJhc1swXS5zdGF0ZS5kZWJ1ZztcclxuICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0T2JqKFwicGxheWVyXCIpIGFzIEdvb21iYTtcclxuICAgICAgcGxheWVyLmNvbGxpc2lvbiA9ICFwbGF5ZXIuY29sbGlzaW9uO1xyXG4gICAgICBwbGF5ZXIuZ3Jhdml0eSA9ICFwbGF5ZXIuZ3Jhdml0eTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIHRoaXMuYmluZENvbnRyb2woXCJtb3VzZTBkb3duXCIsIGV4ZWNfdHlwZS5yZXBlYXQsKCkgPT4ge1xyXG4gICAgICBsZXQgZ3VuID0gdGhpcy5nZXRPYmooXCJndW5cIikgYXMgR3VuO1xyXG4gICAgICBpZihndW4pe1xyXG4gICAgICAgIGxldCBtdXp6bGUgPSByb3RhdGlvbl9sZW5ndGgoMzAsZ3VuLnN0YXRlLnJvdGF0aW9uKTtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICB4Omd1bi5zdGF0ZS5wb3NpdGlvbi54ICsgbXV6emxlLngsXHJcbiAgICAgICAgICB5Omd1bi5zdGF0ZS5wb3NpdGlvbi55ICsgbXV6emxlLnlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ1bGxldHMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGEgPSAwO2EgPCAxO2EgKyspe1xyXG4gICAgICAgICAgYnVsbGV0cy5wdXNoKG5ldyBSb2NrZXQoe3g6cG9zaXRpb24ueCx5OnBvc2l0aW9uLnl9LGd1bi5zdGF0ZS5yb3RhdGlvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmxvY2tlZF9idWxsZXQgPT0gbnVsbClcclxuICAgICAgICAgIHRoaXMuc3RhdGUubG9ja2VkX2J1bGxldCA9IGJ1bGxldHNbMF07XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtcyhidWxsZXRzKTtcclxuICAgICAgfVxyXG4gICAgfSw0MDApXHJcbiAgfVxyXG4gIHJlZ2lzdGVyUGFydGljbGVzKCl7XHJcbiAgICB0aGlzLnBhcnRpY2xlc1tcInNtb2tlXCJdID0ge1xyXG4gICAgICBzcHJpdGU6XCIuL3Nwcml0ZXMvZm9sZGVyL3Ntb2tlLnBuZ1wiLFxyXG4gICAgICBoZWlnaHQ6NjQsXHJcbiAgICAgIHdpZHRoOjY0XHJcbiAgICB9O1xyXG4gICAgdGhpcy5wYXJ0aWNsZXNbXCJleHBsb3Npb25cIl0gPSB7XHJcbiAgICAgIHNwcml0ZTpcIi4vc3ByaXRlcy9mb2xkZXIvZXhwbG9zaW9uLnBuZ1wiLFxyXG4gICAgICBoZWlnaHQ6MTI4LFxyXG4gICAgICB3aWR0aDoxMjhcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6IG51bWJlcikge1xyXG4gICAgXHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMub2JqZWN0cyk7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUucGF1c2VkKSB7XHJcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgYXBwbHlfZ3Jhdml0eSh0aGlzLm9iamVjdHNbYV0sIC0xLCAtMTUpO1xyXG4gICAgICAgIHZlbG9jaXR5X2NvbGxpc2lvbl9jaGVjayh0aGlzLm9iamVjdHNbYV0sIHRoaXMub2JqZWN0cyk7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzW2FdLnN0YXRlZih0aW1lKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IHBhcnRpY2xlIG9mIHRoaXMucGFydGljbGVzX2Fycil7XHJcbiAgICAgICAgcGFydGljbGUuc3RhdGVmKHRpbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgdGV4dF9ub2RlIG9mIHRoaXMudGV4dF9ub2Rlcyl7XHJcbiAgICAgICAgdGV4dF9ub2RlLnN0YXRlZih0aW1lKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRPYmooXCJwbGF5ZXJcIikgYXMgR29vbWJhO1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5nZXRPYmpCeVRhZyhcImR1bW15XCIpWzBdIGFzIEdvb21iYTtcclxuICAgICAgbGV0IGN1cnNvciA9IHRoaXMuZ2V0T2JqKFwiY3Vyc29yXCIpIGFzIEN1cnNvcjtcclxuICAgICAgbGV0IGNhbWVyYXMgPSBnLnN0YXRlLmNhbWVyYXM7XHJcbiAgICAgIFxyXG4gICAgICBmb3IobGV0IGNhbSBvZiBjYW1lcmFzKXtcclxuICAgICAgICBpZihjYW0uaHVkKXtcclxuICAgICAgICAgIGNhbS5odWQuc3RhdGVmKHRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHBsYXllcikgeyAgICAgICAgXHJcbiAgICAgICAgY2FtZXJhc1swXS54ID0gcGxheWVyLnN0YXRlLnBvc2l0aW9uLng7XHJcbiAgICAgICAgY2FtZXJhc1swXS55ID0gcGxheWVyLnN0YXRlLnBvc2l0aW9uLnkgKyAoY2FtZXJhc1swXS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodC8yIC0gcGxheWVyLmhlaWdodC8yKTsgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZih0YXJnZXQpe1xyXG4gICAgICAgIGNhbWVyYXNbMV0uc3RhdGUucG9zaXRpb24ueCA9IHRhcmdldC5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gICAgICAgIGNhbWVyYXNbMV0uc3RhdGUucG9zaXRpb24ueSA9IHRhcmdldC5zdGF0ZS5wb3NpdGlvbi55O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoY3Vyc29yKSB7XHJcbiAgICAgICAgY3Vyc29yLmNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgIGN1cnNvci5ncmF2aXR5ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZSh0aGlzLmdhbWUuc3RhdGUuY2FudmFzLHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdKTtcclxuICAgICAgICBjdXJzb3Iuc3RhdGUucG9zaXRpb24ueCA9IG1vdXNlLng7XHJcbiAgICAgICAgY3Vyc29yLnN0YXRlLnBvc2l0aW9uLnkgPSBtb3VzZS55O1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgY2FtZXJhc1syXS5zdGF0ZS5wb3NpdGlvbi54ID0gbW91c2UueDtcclxuICAgICAgICBjYW1lcmFzWzJdLnN0YXRlLnBvc2l0aW9uLnkgPSBtb3VzZS55O1xyXG4gICAgICAgICovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbnRlcmZhY2Ugc291bmRfc3RvcmFnZSB7XHJcbiAgW2luZGV4OiBzdHJpbmddOiBIVE1MQXVkaW9FbGVtZW50XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBhdWRpbyB7XHJcbiAgc291bmRzOiBzb3VuZF9zdG9yYWdlID0ge307XHJcbiAgYWRkKG5hbWU6IHN0cmluZywgczogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNvdW5kc1tuYW1lXSA9IG5ldyBBdWRpbyhzKTtcclxuICB9XHJcbiAgYXN5bmMgbG9hZCgpIHtcclxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zb3VuZHMpO1xyXG4gICAgbGV0IHByb21pc2VzID0ga2V5cy5tYXAoKGtleSkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc291bmRzW2tleV0uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXl0aHJvdWdoXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICB0cnl7XHJcbiAgICAgIGxldCB4ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICByZXR1cm4oeCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBsYXkobmFtZTpzdHJpbmcsdm9sdW1lOm51bWJlcil7XHJcbiAgICBsZXQgYSA9IHRoaXMuc291bmRzW25hbWVdO1xyXG4gICAgYS5wYXVzZSgpXHJcbiAgICBhLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGEudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgYS5wbGF5KCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtvYmosZ2V0SWR9IGZyb20gXCIuLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlfSBmcm9tIFwiLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7ZGVlcH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBjb2xsaXNpb25fYm94e1xyXG4gIHg6bnVtYmVyO1xyXG4gIHk6bnVtYmVyO1xyXG4gIHdpZHRoOm51bWJlcjtcclxuICBoZWlnaHQ6bnVtYmVyO1xyXG59XHJcblxyXG5lbnVtIGRpcmVjdGlvbntcclxuICBsZWZ0LFxyXG4gIHJpZ2h0LFxyXG4gIHVwLFxyXG4gIGRvd25cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX2FsbF9vYmplY3RzKGM6IGNvbGxpc2lvbl9ib3gsb2JqczpBcnJheTxvYmo8dW5rbm93bj4+LGV4ZW1wdGlvbjpzdHJpbmdbXSA9IFtdKTpBcnJheTxvYmo8dW5rbm93bj4+e1xyXG4gIHJldHVybiBvYmpzLmZpbHRlcigoYSk9PighZXhlbXB0aW9uLnNvbWUoKGIpPT5hLnRhZ3MuaW5kZXhPZihiKSAhPT0gLTEpICYmIGEuY29sbGlkZXNfd2l0aF9ib3goYykpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX2FsbF9jb2xsaXNpb25zKGM6IGNvbGxpc2lvbl9ib3gsb2JqczpBcnJheTxvYmo8dW5rbm93bj4+LGV4ZW1wdGlvbjpzdHJpbmdbXSA9IFtdKTpBcnJheTxvYmo8dW5rbm93bj4+e1xyXG4gIGxldCBtYXRjaGVkID0gW107XHJcbiAgZm9yIChsZXQgYSBvZiBvYmpzKSB7XHJcbiAgICBpZiAoIWV4ZW1wdGlvbi5zb21lKChiKT0+YS50YWdzLmluZGV4T2YoYikgIT09IC0xKSAmJiBhLmNvbGxpc2lvbiAmJiBhLmNvbGxpZGVzX3dpdGhfYm94KGMpKSB7XHJcbiAgICAgIG1hdGNoZWQucHVzaChhKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG1hdGNoZWRcclxufVxyXG4vL0NoZWNrcyB1cCB0byB0aGUgZmlyc3QgY29sbGlzaW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja19jb2xsaXNpb25zKGM6IGNvbGxpc2lvbl9ib3gsIG9ianM6IEFycmF5PG9iajx1bmtub3duPj4sIGV4ZW1wdGlvbjpzdHJpbmcpIHtcclxuICBmb3IgKGxldCBhIG9mIG9ianMpIHtcclxuICAgIGlmIChhLmlkICE9PSBleGVtcHRpb24gJiYgYS5jb2xsaXNpb24gJiYgYS5jb2xsaWRlc193aXRoX2JveChjKSkge1xyXG4gICAgICByZXR1cm4gYTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlbG9jaXR5X21heCh2ZWxvY2l0eTpudW1iZXIsYm94OmNvbGxpc2lvbl9ib3gsb2JqczpBcnJheTxvYmo8dW5rbm93bj4+LCBleGVtcHRpb246c3RyaW5nLGRpcjpkaXJlY3Rpb24pe1xyXG4gIGxldCBjb2xsaXNpb24gPSBjaGVja19jb2xsaXNpb25zKGJveCwgb2JqcywgZXhlbXB0aW9uKTtcclxuICBpZihjb2xsaXNpb24gPT0gbnVsbCl7XHJcbiAgICByZXR1cm4gdmVsb2NpdHk7XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBsZXQgY29sbGlkZXIgPSBjb2xsaXNpb247XHJcbiAgICBsZXQgb3JpZ2luID0gZ2V0SWQob2JqcyxleGVtcHRpb24pO1xyXG4gICAgbGV0IG9yaWdfc3QgPSBvcmlnaW4uc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gICAgbGV0IGNvbGxpZGVyX3N0ID0gY29sbGlkZXIuc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gICAgaWYoZGlyID09IGRpcmVjdGlvbi5sZWZ0KXtcclxuICAgICAgcmV0dXJuIChvcmlnX3N0LnBvc2l0aW9uLnggLSBvcmlnaW4ud2lkdGgvMikgLSAoY29sbGlkZXJfc3QucG9zaXRpb24ueCArIGNvbGxpZGVyLndpZHRoLzIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkaXIgPT0gZGlyZWN0aW9uLnJpZ2h0KXtcclxuICAgICAgcmV0dXJuIChjb2xsaWRlcl9zdC5wb3NpdGlvbi54IC0gY29sbGlkZXIud2lkdGgvMikgLSAob3JpZ19zdC5wb3NpdGlvbi54ICsgb3JpZ2luLndpZHRoLzIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkaXIgPT0gZGlyZWN0aW9uLmRvd24pe1xyXG4gICAgICByZXR1cm4gKG9yaWdfc3QucG9zaXRpb24ueSAtIG9yaWdpbi5oZWlnaHQvMikgLSAoY29sbGlkZXJfc3QucG9zaXRpb24ueSArIGNvbGxpZGVyLmhlaWdodC8yKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlyID09IGRpcmVjdGlvbi51cCl7XHJcbiAgICAgIHJldHVybiAoY29sbGlkZXJfc3QucG9zaXRpb24ueSAtIGNvbGxpZGVyLmhlaWdodC8yKSAtIChvcmlnX3N0LnBvc2l0aW9uLnkgKyBvcmlnaW4uaGVpZ2h0LzIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlbG9jaXR5X2NvbGxpc2lvbl9jaGVjayhvYmplY3Q6b2JqPHVua25vd24+LGxpc3Q6QXJyYXk8b2JqPHVua25vd24+Pikge1xyXG4gIGxpc3QgPSBbLi4ubGlzdF07XHJcbiAgbGV0IG9iID0gb2JqZWN0O1xyXG4gIGxldCBzdCA9IG9iamVjdC5zdGF0ZSBhcyBvYmpfc3RhdGU7XHJcbiAgbGV0IHhfdmVsID0gc3QudmVsb2NpdHkueDtcclxuICBsZXQgeV92ZWwgPSBzdC52ZWxvY2l0eS55O1xyXG4gIGlmKCFvYi5jb2xsaXNpb24pe1xyXG4gICAgKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnBvc2l0aW9uLnggKz0gKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnZlbG9jaXR5Lng7XHJcbiAgICAoPG9ial9zdGF0ZT5vYi5zdGF0ZSkucG9zaXRpb24ueSArPSAoPG9ial9zdGF0ZT5vYi5zdGF0ZSkudmVsb2NpdHkueTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKHhfdmVsID4gMCkge1xyXG4gICAgbGV0IGJveCA9IHtcclxuICAgICAgeDogc3QucG9zaXRpb24ueCArIG9iLndpZHRoLzIgKyB4X3ZlbC8yLFxyXG4gICAgICB5OiBzdC5wb3NpdGlvbi55LFxyXG4gICAgICB3aWR0aDogeF92ZWwsXHJcbiAgICAgIGhlaWdodDogb2IuaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgbGV0IHZlbCA9IHZlbG9jaXR5X21heChzdC52ZWxvY2l0eS54LGJveCxsaXN0LG9iLmlkLGRpcmVjdGlvbi5yaWdodCk7XHJcbiAgICBpZih2ZWwgPiAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueCArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS54ID0gMDsgIFxyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIGlmICh4X3ZlbCA8IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IHhfdmVsLzIgKyBzdC5wb3NpdGlvbi54IC0gb2Iud2lkdGgvMixcclxuICAgICAgeTogc3QucG9zaXRpb24ueSxcclxuICAgICAgd2lkdGg6IC0xICogeF92ZWwsXHJcbiAgICAgIGhlaWdodDogb2IuaGVpZ2h0XHJcbiAgICB9XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LngsYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLmxlZnQpO1xyXG4gICAgaWYodmVsIDwgMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnggKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueCA9IDA7IFxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoeV92ZWwgPiAwKSB7XHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICB4OiBzdC5wb3NpdGlvbi54LFxyXG4gICAgICB5OiBzdC5wb3NpdGlvbi55ICsgb2IuaGVpZ2h0LzIgKyB5X3ZlbC8yLFxyXG4gICAgICB3aWR0aDogb2Iud2lkdGgsXHJcbiAgICAgIGhlaWdodDogeV92ZWxcclxuICAgIH1cclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueSxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24udXApO1xyXG4gICAgaWYodmVsID4gMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnkgKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHlfdmVsIDwgMCkge1xyXG4gICAgbGV0IGJveCA9IHtcclxuICAgICAgeDogc3QucG9zaXRpb24ueCxcclxuICAgICAgeTogeV92ZWwvMiArIHN0LnBvc2l0aW9uLnkgLSBvYi5oZWlnaHQvMixcclxuICAgICAgd2lkdGg6IG9iLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IC0xICogeV92ZWxcclxuICAgIH1cclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueSxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24uZG93bik7XHJcbiAgICBpZih2ZWwgPCAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueSArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS55ID0gMDtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQge2dhbWUsUEFVU0VELERFQlVHLERFQlVHX3YsIEdldFNjcmVlbkRpbWVuc2lvbnMsR2V0Vmlld3BvcnREaW1lbnNpb25zfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHtvYmp9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi9yZW5kZXJcIjtcclxuXHJcbmludGVyZmFjZSBtb3VzZVBvc3tcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBsYXN0OntcclxuICAgIHg6bnVtYmVyLFxyXG4gICAgeTpudW1iZXJcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBjb250cm9sX2Z1bmN7XHJcbiAgKCk6dm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgbW91c2VCaW5kc3tcclxuICBba2V5OnN0cmluZ106IEFycmF5PFtjb250cm9sX2Z1bmMsb2JqPHVua25vd24+XT5cclxufVxyXG5cclxuaW50ZXJmYWNlIGtleUJpbmRze1xyXG4gIFtrZXk6c3RyaW5nXTogQXJyYXk8Y29udHJvbF9mdW5jPlxyXG59XHJcbmxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfY2xpY2tfaGFuZGxlcihnYW1lOmdhbWU8dW5rbm93bj4pe1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PntcclxuICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZ2FtZS5zdGF0ZS5jYW52YXMsZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdKTtcclxuICAgIGxldCBib3g6Y29sbGlzaW9uX2JveCA9IHtcclxuICAgICAgeDptb3VzZS54LFxyXG4gICAgICB5Om1vdXNlLnksXHJcbiAgICAgIGhlaWdodDoxLFxyXG4gICAgICB3aWR0aDoxXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCBkLmxlbmd0aDthKyspe1xyXG4gICAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgICBpZihzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IFwibW91c2UxXCIgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWQub2JqICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgaWYoc2VsZWN0ZWQub2JqLmNvbGxpZGVzX3dpdGhfYm94KGJveCkpe1xyXG4gICAgICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSAgXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwiZG93blwiKSAgJiYgIXNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgICAgc2VsZWN0ZWQucmVwZWF0X3RpbWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwidXBcIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2V1cFwiKSAmJiBzZWxlY3RlZC5leGVjdXRlZCAmJiBzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSkge1xyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJ1cFwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZXVwXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgIGxldCBnID0gWy4uLnJlcGVhdF9iaW5kc107XHJcbiAgICAgZm9yKGxldCBhID0gMDsgYSA8IGcubGVuZ3RoO2ErKyl7XHJcbiAgICAgICBpZihnW2FdLmJpbmQuaWQgPT09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgZ1thXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgfVxyXG59KVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB7XHJcbiAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJ1cFwiKSAgJiYgIXNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgICAgc2VsZWN0ZWQucmVwZWF0X3RpbWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwiZG93blwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZWRvd25cIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2UpIHtcclxuICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwiZG93blwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZWRvd25cIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgIGxldCBnID0gWy4uLnJlcGVhdF9iaW5kc107XHJcbiAgICAgIGZvcihsZXQgYSA9IDA7IGEgPCBnLmxlbmd0aDthKyspe1xyXG4gICAgICAgIGlmKGdbYV0uYmluZC5pZCA9PT0gc2VsZWN0ZWQuaWQpe1xyXG4gICAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5pbnRlcmZhY2UgaGVsZF9rZXlze1xyXG4gIFtpbmRleDpzdHJpbmddOmJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGxldCBoZWxkX2tleXM6aGVsZF9rZXlzID0ge307XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsKGUpPT57XHJcbiAgbGV0IGNvZGU6c3RyaW5nO1xyXG5cclxuICBpZihlLmRlbHRhWSA8IDApe1xyXG4gICAgY29kZSA9IFwic2Nyb2xsdXBcIjtcclxuICB9XHJcbiAgZWxzZSBpZihlLmRlbHRhWSA+IDApe1xyXG4gICAgY29kZSA9IFwic2Nyb2xsZG93blwiO1xyXG4gIH1cclxuXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgXHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIHNlbGVjdGVkLmtleSA9PT0gY29kZSkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gIGhlbGRfa2V5c1tlLmNvZGVdID0gdHJ1ZTtcclxuICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoREVCVUdfdi5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUua2V5Ym9hcmQgJiYgc2VsZWN0ZWQua2V5ID09PSBlLmNvZGUgICYmICFzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIGZvcihsZXQgYyBvZiByZXBlYXRfYmluZHMpe1xyXG4gICAgICAgICAgaWYoYy5iaW5kLmlkID09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgICAgYy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxufSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gIGhlbGRfa2V5c1tlLmNvZGVdID0gZmFsc2U7XHJcbiAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLmtleWJvYXJkICYmIHNlbGVjdGVkLmtleSA9PT0gZS5jb2RlICYmIHNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlICl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIGxldCBnID0gWy4uLnJlcGVhdF9iaW5kc107XHJcbiAgICAgICAgZm9yKGxldCBhID0gMDsgYSA8IGcubGVuZ3RoO2ErKyl7XHJcbiAgICAgICAgICBpZihnW2FdLmJpbmQuaWQgPT09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZ1thXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxubGV0IHRyYWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcclxuICB2YXIgcmVjdCA9IChlLnRhcmdldCBhcyBIVE1MQ2FudmFzRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgO1xyXG4gIFxyXG4gIGxhc3RfeCA9IHg7XHJcbiAgbGFzdF95ID0geTtcclxuICB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0OyAvL3ggcG9zaXRpb24gd2l0aGluIHRoZSBlbGVtZW50LlxyXG4gIHkgPSBlLmNsaWVudFkgLSByZWN0LnRvcDsgIC8veSBwb3NpdGlvbiB3aXRoaW4gdGhlIGVsZW1lbnQuXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGVudW0gYnR5cGV7XHJcbiAgbW91c2UsXHJcbiAga2V5Ym9hcmRcclxufVxyXG5cclxuaW50ZXJmYWNlIGJpbmR7XHJcbiAga2V5OnN0cmluZyxcclxuICB0eXBlOmJ0eXBlLFxyXG4gIGlkOm51bWJlcixcclxuICBmdW5jdGlvbjpjb250cm9sX2Z1bmMsXHJcbiAgZXhlY3V0ZTpleGVjX3R5cGUsXHJcbiAgcmVwZWF0X3RpbWVyPzpyZXBlYXRfYmluZCxcclxuICBvYmo/Om9iajx1bmtub3duPixcclxuICBleGVjdXRlZD86Ym9vbGVhbixcclxuICBpbnRlcnZhbD86bnVtYmVyLFxyXG4gIGNhbWVyYT86Q2FtZXJhXHJcbn1cclxuXHJcbmludGVyZmFjZSByZXBlYXRfYmluZHtcclxuICBiaW5kOmJpbmQsXHJcbiAgdGltZXI6bnVtYmVyLFxyXG4gIGludGVydmFsOm51bWJlcixcclxuICBhY3RpdmU6Ym9vbGVhblxyXG59XHJcblxyXG5sZXQgeCA9IDA7XHJcbmxldCB5ID0gMDtcclxubGV0IGxhc3RfeCA9IDA7XHJcbmxldCBsYXN0X3kgPSAwO1xyXG5sZXQgYmluZHM6a2V5QmluZHMgPSB7fTtcclxuZXhwb3J0IGxldCBkZWJ1Z19iaW5kczpiaW5kW10gPSBbXTtcclxubGV0IG1vdXNlQmluZHM6bW91c2VCaW5kcyA9IHt9O1xyXG5sZXQgYmluZF9jb3VudCA9IDA7XHJcblxyXG5sZXQgYWxsX2JpbmRzOkFycmF5PGJpbmQ+ID0gW11cclxuXHJcbmxldCByZXBlYXRfYmluZHM6QXJyYXk8cmVwZWF0X2JpbmQ+ID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9sbF9Nb3VzZShjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQsY2FtZXJhOkNhbWVyYSk6bW91c2VQb3N7XHJcbiAgbGV0IGhlaWdodCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodDtcclxuICBsZXQgd3JhdGlvID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLndpZHRoKS9HZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aDtcclxuICBsZXQgdnJhdGlvID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmhlaWdodCkvR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0O1xyXG4gIHJldHVybiAoe1xyXG4gICAgeDogKCh4IC0gY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngpL3dyYXRpby9jYW1lcmEuc3RhdGUuc2NhbGluZyArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgvY2FtZXJhLnN0YXRlLnNjYWxpbmcvMikgLFxyXG4gICAgeTogKChoZWlnaHQgLSB5L3ZyYXRpbykvY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodC9jYW1lcmEuc3RhdGUuc2NhbGluZy8yIC0gY2FtZXJhLnN0YXRlLnZpZXdwb3J0LnkpLFxyXG4gICAgbGFzdDp7XHJcbiAgICAgIHg6ICh4L3dyYXRpby9jYW1lcmEuc3RhdGUuc2NhbGluZyArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54KSxcclxuICAgICAgeTogKChoZWlnaHQgLSB5L3ZyYXRpbykvY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSlcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhlY3V0ZVJlcGVhdEJpbmRzKGI6bnVtYmVyKXtcclxuICBmb3IobGV0IGEgb2YgcmVwZWF0X2JpbmRzKXtcclxuICAgIGlmKGEuYmluZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0ICYmIGEudGltZXIgPT0gMCAmJiBhLmFjdGl2ZSl7XHJcbiAgICAgIGEuYmluZC5mdW5jdGlvbigpO1xyXG4gICAgfVxyXG4gICAgaWYoYS5hY3RpdmUgfHwgKCFhLmFjdGl2ZSAmJiBhLnRpbWVyICE9IDApKVxyXG4gICAgICBhLnRpbWVyICs9IGI7XHJcbiAgICBpZihhLnRpbWVyID4gYS5pbnRlcnZhbCl7XHJcbiAgICAgIGEudGltZXIgPSAwOyBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVbmJpbmQoYmluZF9pZDpudW1iZXIpe1xyXG4gIGZvcihsZXQgYSA9IDA7YSA8IGFsbF9iaW5kcy5sZW5ndGg7IGErKyl7XHJcbiAgICBpZihhbGxfYmluZHNbYV0uaWQgPT0gYmluZF9pZCl7XHJcbiAgICAgIGFsbF9iaW5kcy5zcGxpY2UoYSwxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gZXhlY190eXBle1xyXG4gIG9uY2UsXHJcbiAgcmVwZWF0XHJcbn1cclxuXHJcbmxldCBpZCA9IDA7XHJcbmV4cG9ydCBmdW5jdGlvbiBCaW5kKGtleW5hbWU6c3RyaW5nLGZ1bmM6Y29udHJvbF9mdW5jLHR5cGU6ZXhlY190eXBlLGludGVydmFsOm51bWJlcixvYmplY3Q/Om9iajx1bmtub3duPik6bnVtYmVye1xyXG4gIGlmKGtleW5hbWUuc2xpY2UoMCw1KSA9PT0gXCJtb3VzZVwiKXtcclxuICAgIGxldCBiOmJpbmQgPSB7XHJcbiAgICAgIGtleTprZXluYW1lLFxyXG4gICAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgICBpZCxcclxuICAgICAgZnVuY3Rpb246ZnVuYyxcclxuICAgICAgb2JqOm9iamVjdCxcclxuICAgICAgZXhlY3V0ZTp0eXBlLFxyXG4gICAgICBleGVjdXRlZDpmYWxzZSxcclxuICAgICAgaW50ZXJ2YWxcclxuICAgIH07XHJcbiAgICBpZih0eXBlID09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICBiLnJlcGVhdF90aW1lciA9IHtcclxuICAgICAgICBiaW5kOmIsXHJcbiAgICAgICAgdGltZXI6MCxcclxuICAgICAgICBpbnRlcnZhbCxcclxuICAgICAgICBhY3RpdmU6ZmFsc2VcclxuICAgICAgfVxyXG4gICAgICByZXBlYXRfYmluZHMucHVzaChiLnJlcGVhdF90aW1lcik7XHJcbiAgICB9XHJcbiAgICBhbGxfYmluZHMucHVzaChiKTtcclxuXHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBsZXQgYjpiaW5kID0ge1xyXG4gICAgICBrZXk6a2V5bmFtZSxcclxuICAgICAgdHlwZTpidHlwZS5rZXlib2FyZCxcclxuICAgICAgaWQsXHJcbiAgICAgIGZ1bmN0aW9uOmZ1bmMsXHJcbiAgICAgIGV4ZWN1dGU6dHlwZSxcclxuICAgICAgZXhlY3V0ZWQ6ZmFsc2UsXHJcbiAgICAgIGludGVydmFsXHJcbiAgICB9XHJcbiAgICBpZih0eXBlID09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICBiLnJlcGVhdF90aW1lciA9IHtcclxuICAgICAgICBiaW5kOmIsXHJcbiAgICAgICAgdGltZXI6MCxcclxuICAgICAgICBpbnRlcnZhbCxcclxuICAgICAgICBhY3RpdmU6ZmFsc2VcclxuICAgICAgfVxyXG4gICAgICByZXBlYXRfYmluZHMucHVzaChiLnJlcGVhdF90aW1lcik7XHJcbiAgICB9XHJcbiAgICBhbGxfYmluZHMucHVzaChiKTtcclxuICB9XHJcbiAgaWQrKztcclxuICByZXR1cm4gaWQgLSAxO1xyXG59IiwiaW1wb3J0IHtvYmp9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBHb29tYmEgfSBmcm9tIFwiLi4vZ2FtZS9vYmplY3RzL2dvb21iYVwiO1xyXG5cclxuaW50ZXJmYWNlIEh1ZFRleHRHZXRGdW5je1xyXG4gICgpOnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRTZXR0aW5ne1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyLFxyXG4gIGZvbnQ6Rm9udFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvbnR7XHJcbiAgbWF4X3dpZHRoPzpudW1iZXIsXHJcbiAgc2l6ZTpudW1iZXIsXHJcbiAgZm9udDpzdHJpbmcsXHJcbiAgY29sb3I6c3RyaW5nLFxyXG4gIHRleHQ6c3RyaW5nLFxyXG4gIGFsaWduOkNhbnZhc1RleHRBbGlnblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRfTm9kZXtcclxuICBtYXhfd2lkdGg/Om51bWJlcixcclxuICBwb3NpdGlvbjp7XHJcbiAgICB4Om51bWJlcixcclxuICAgIHk6bnVtYmVyXHJcbiAgfVxyXG4gIHNpemU6bnVtYmVyO1xyXG4gIHNjYWxpbmc6bnVtYmVyO1xyXG4gIGZvbnQ6c3RyaW5nO1xyXG4gIGNvbG9yOnN0cmluZztcclxuICB0ZXh0PzpzdHJpbmc7XHJcbiAgYWxpZ24/OkNhbnZhc1RleHRBbGlnbjtcclxufVxyXG5leHBvcnQgY2xhc3MgSFVEe1xyXG4gIGdyYXBoaWNfZWxlbWVudHM6QXJyYXk8b2JqPHVua25vd24+PiA9IFtdO1xyXG4gIHRleHRfZWxlbWVudHM6QXJyYXk8VGV4dD4gPSBbXTtcclxuICBzdGF0ZWYoYTpudW1iZXIpe1xyXG4gICAgZm9yKGxldCB4IG9mIHRoaXMuZ3JhcGhpY19lbGVtZW50cyl7XHJcbiAgICAgIHguc3RhdGVmKGEpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCB4IG9mIHRoaXMudGV4dF9lbGVtZW50cyl7XHJcbiAgICAgIHguc3RhdGVmKGEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR7XHJcbiAgZ2V0X2Z1bmM6SHVkVGV4dEdldEZ1bmM7XHJcbiAgc3RhdGU6VGV4dF9Ob2RlO1xyXG4gIGNvbnN0cnVjdG9yKGE6VGV4dF9Ob2RlLGI6SHVkVGV4dEdldEZ1bmMpe1xyXG4gICAgaWYoIWEuYWxpZ24pe1xyXG4gICAgICBhLmFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSBhO1xyXG4gICAgaWYoIXRoaXMuc3RhdGUudGV4dCl7XHJcbiAgICAgIHRoaXMuc3RhdGUudGV4dCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdldF9mdW5jID0gYjtcclxuICB9XHJcbiAgc3RhdGVmKGE6bnVtYmVyKXtcclxuICAgdGhpcy5zdGF0ZS50ZXh0ID0gdGhpcy5nZXRfZnVuYygpO1xyXG4gIH1cclxuICByZW5kZXJmKGE6bnVtYmVyKTpGb250e1xyXG4gICAgbGV0IHtzaXplLGNvbG9yLGZvbnQsdGV4dCxtYXhfd2lkdGgsYWxpZ259ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNpemUsXHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBmb250LFxyXG4gICAgICB0ZXh0LFxyXG4gICAgICBtYXhfd2lkdGgsXHJcbiAgICAgIGFsaWduXHJcbiAgICB9O1xyXG4gIH1cclxufSIsImltcG9ydCB7IHN0YXRlX2Z1bmMsIG9ial9zdGF0ZSwgcG9zaXRpb24gfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJfZnVuYywgcmVuZGVyX3R5cGUgfSBmcm9tIFwiLi9yZW5kZXJcIjtcclxuaW1wb3J0IHsgUGFydGljbGUsIHBvc2l0aW9uZWRfc3ByaXRlLCBzcHJpdGUsIHNwcml0ZV9nZW4gfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgY29sbGlzaW9uX2JveCB9IGZyb20gXCIuL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQgeyBVbmJpbmQsIEJpbmQsIGNvbnRyb2xfZnVuYywgZXhlY190eXBlIH0gZnJvbSBcIi4vY29udHJvbHNcIjtcclxuaW1wb3J0IHthdWRpb30gZnJvbSBcIi4vYXVkaW9cIjtcclxuaW1wb3J0IHtnYW1lfSBmcm9tIFwiLi4vdmFuXCI7XHJcblxyXG5pbnRlcmZhY2Ugb2JqX2k8VD4ge1xyXG4gIHN0YXRlZjogc3RhdGVfZnVuYzxUPixcclxuICByZW5kZXJmOiByZW5kZXJfZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25fbGVuZ3RoKGxlbmd0aDogbnVtYmVyLCBkZWdyZWU6IG51bWJlcikge1xyXG4gIGxldCBhX2xlbiA9IGxlbmd0aCAqIE1hdGguc2luKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xyXG4gIGxldCBiX2xlbiA9IGxlbmd0aCAqIE1hdGguY29zKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiBhX2xlbixcclxuICAgIHk6IGJfbGVuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWQoYTogQXJyYXk8b2JqPHVua25vd24+PiwgaWQ6IHN0cmluZyk6IG9iajx1bmtub3duPiB7XHJcbiAgZm9yIChsZXQgYiA9IDA7IGIgPCBhLmxlbmd0aDsgYisrKSB7XHJcbiAgICBpZiAoYVtiXS5pZCA9PSBpZCkge1xyXG4gICAgICByZXR1cm4gYVtiXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxubGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuaW50ZXJmYWNlIGFuaW1fc3RvcmFnZSB7XHJcbiAgW2luZGV4OiBzdHJpbmddOiBbQXJyYXk8W251bWJlciwgc3ByaXRlXT4sIG51bWJlcl1cclxufVxyXG5cclxuaW50ZXJmYWNlIHZvaWRfZnVuYyB7XHJcbiAgKCk6IHZvaWRcclxufVxyXG5cclxuY2xhc3MgYW5pbWF0aW9ucyB7XHJcbiAgYW5pbWF0aW9uczogYW5pbV9zdG9yYWdlID0ge307XHJcbiAgYW5pbWF0aW9uX3RyYWNrZXIgPSAwO1xyXG4gIGN1cnJlbnQ6IHN0cmluZztcclxuICBjYWxsYmFjazogdm9pZF9mdW5jO1xyXG4gIGFuaW1hdGluZzpib29sZWFuID0gZmFsc2U7XHJcbiAgYWRkKG5hbWU6IHN0cmluZywgczogQXJyYXk8W251bWJlciwgc3ByaXRlXT4sIGxlbmd0aDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBbcywgbGVuZ3RoXTtcclxuICB9XHJcbiAgcGxheShuYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogdm9pZF9mdW5jKSB7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciA9IDA7XHJcbiAgfVxyXG4gIHJlbmRlcmYodDogbnVtYmVyKTogc3ByaXRlIHtcclxuICAgIGxldCBjdXJyX2FuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRdWzBdO1xyXG4gICAgbGV0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5hbmltYXRpb25zW3RoaXMuY3VycmVudF1bMV07XHJcbiAgICBsZXQgaW5kZXg7XHJcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBjdXJyX2FuaW1hdGlvbi5sZW5ndGggLSAxOyBpbmRleCsrKSB7XHJcbiAgICAgIGlmICh0aGlzLmFuaW1hdGlvbl90cmFja2VyID49IGN1cnJfYW5pbWF0aW9uW2luZGV4XVswXSAmJiB0aGlzLmFuaW1hdGlvbl90cmFja2VyIDwgY3Vycl9hbmltYXRpb25baW5kZXggKyAxXVswXSkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPSB0aGlzLmFuaW1hdGlvbl90cmFja2VyICsgdDtcclxuICAgICAgICB0aGlzLmFuaW1hdGluZyA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJfYW5pbWF0aW9uW2luZGV4XVsxXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbl90cmFja2VyID49IGxlbmd0aCkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbl90cmFja2VyID0gMDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbl90cmFja2VyICs9IHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3Vycl9hbmltYXRpb25baW5kZXhdWzFdO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGhpdGJveHtcclxuICB3aWR0aDpudW1iZXIsXHJcbiAgaGVpZ2h0Om51bWJlcixcclxuICB4X29mZnNldDpudW1iZXIsXHJcbiAgeV9vZmZzZXQ6bnVtYmVyXHJcbn1cclxuXHJcbmVudW0gUmVuZGVyVHlwZXtcclxuICBib3gsXHJcbiAgc3ByaXRlXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBvYmo8VD57XHJcbiAgc3ByaXRlX3VybCA9IFwiXCI7XHJcbiAgc3ByaXRlX3NoZWV0OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIHN0YXRlOiBUO1xyXG4gIHJlbmRlcl90eXBlID0gcmVuZGVyX3R5cGUuc3ByaXRlO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgY29sbGlzaW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaGl0Ym94OiBoaXRib3hcclxuICBpZDogc3RyaW5nO1xyXG4gIGJpbmRzOiBBcnJheTxudW1iZXI+O1xyXG4gIHRhZ3M6c3RyaW5nW10gPSBbXTtcclxuICByb3RhdGlvbjogbnVtYmVyID0gMDtcclxuICByZW5kZXIgPSB0cnVlO1xyXG4gIGFuaW1hdGlvbnMgPSBuZXcgYW5pbWF0aW9ucygpO1xyXG4gIGF1ZGlvID0gbmV3IGF1ZGlvKCk7XHJcbiAgbGFzdF9yZW5kZXI6bnVtYmVyID0gMDtcclxuICBnYW1lOmdhbWU8dW5rbm93bj47XHJcbiAgcGFyZW50OmNvbXBvc2l0ZV9vYmo8dW5rbm93bj47XHJcbiAgc2NhbGluZzpudW1iZXIgPSAxO1xyXG4gIHN0YXRpYyBkZWZhdWx0X3BhcmFtczp1bmtub3duID0ge307XHJcbiAgZ2V0U3RhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcclxuICB9XHJcbiAgcmVnaXN0ZXJfYW5pbWF0aW9ucygpIHtcclxuXHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2F1ZGlvKCkge1xyXG5cclxuICB9XHJcbiAgY29uc3RydWN0b3IocG9zaXRpb246cG9zaXRpb24scm90YXRpb249MCxwYXJhbXMgPSBvYmouZGVmYXVsdF9wYXJhbXMpIHtcclxuICAgIHRoaXMuaWQgPSBcIlwiICsgY291bnRlcjtcclxuICAgIHRoaXMuYmluZHMgPSBbXTtcclxuICAgIGNvdW50ZXIrKztcclxuICAgIHRoaXMucmVnaXN0ZXJfY29udHJvbHMoKTtcclxuICAgIHRoaXMucmVnaXN0ZXJfYXVkaW8oKTtcclxuICB9XHJcbiAgbG9hZCgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgYSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBhLnNyYyA9IHRoaXMuc3ByaXRlX3VybDtcclxuICAgICAgYS5vbmxvYWQgPSAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIF90aGlzLnNwcml0ZV9zaGVldCA9IGE7XHJcbiAgICAgICAgX3RoaXMucmVnaXN0ZXJfYW5pbWF0aW9ucygpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXVkaW8ubG9hZCgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICBkaXN0YW5jZShhOm9iajx1bmtub3duPik6bnVtYmVye1xyXG4gICAgbGV0IG9fc3QgPSBhLnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgbGV0IHN0ID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coc3QucG9zaXRpb24ueCAtIG9fc3QucG9zaXRpb24ueCwyKSArIE1hdGgucG93KHN0LnBvc2l0aW9uLnkgLSBvX3N0LnBvc2l0aW9uLnksMikpO1xyXG4gIH1cclxuICBhbmdsZVRvd2FyZHMoYTogb2JqPHVua25vd24+KTogbnVtYmVyIHtcclxuICAgIGxldCBiID0gYSBhcyBvYmo8b2JqX3N0YXRlPjtcclxuICAgIHJldHVybiB0aGlzLmFuZ2xlVG93YXJkc1BvaW50KGIuc3RhdGUucG9zaXRpb24pO1xyXG4gIH1cclxuICBhbmdsZVRvd2FyZHNQb2ludChwb3NpdGlvbjpwb3NpdGlvbik6bnVtYmVye1xyXG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGlmIChzdGF0ZS5wb3NpdGlvbi54IDwgcG9zaXRpb24ueCAmJiBzdGF0ZS5wb3NpdGlvbi55ID4gcG9zaXRpb24ueVxyXG4gICAgICB8fCAoc3RhdGUucG9zaXRpb24ueCA8IHBvc2l0aW9uLnggJiYgc3RhdGUucG9zaXRpb24ueSA8IHBvc2l0aW9uLnkpKSB7XHJcbiAgICAgIHJldHVybiA5MCAtIE1hdGguYXRhbigocG9zaXRpb24ueSAtIHN0YXRlLnBvc2l0aW9uLnkpIC8gKHBvc2l0aW9uLnggLSBzdGF0ZS5wb3NpdGlvbi54KSkgKiAxODAgLyBNYXRoLlBJXHJcbiAgICB9XHJcbiAgICBpZiAoc3RhdGUucG9zaXRpb24ueCA+IHBvc2l0aW9uLnggJiYgc3RhdGUucG9zaXRpb24ueSA8IHBvc2l0aW9uLnlcclxuICAgICAgfHwgc3RhdGUucG9zaXRpb24ueCA+IHBvc2l0aW9uLnggJiYgc3RhdGUucG9zaXRpb24ueSA+IHBvc2l0aW9uLnkpIHtcclxuICAgICAgcmV0dXJuIDI3MCAtIE1hdGguYXRhbigocG9zaXRpb24ueSAtIHN0YXRlLnBvc2l0aW9uLnkpIC8gKHBvc2l0aW9uLnggLSBzdGF0ZS5wb3NpdGlvbi54KSkgKiAxODAgLyBNYXRoLlBJXHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgYmluZF9jb250cm9sKGtleTogc3RyaW5nLCB4OiBleGVjX3R5cGUsIGZ1bmM6IGNvbnRyb2xfZnVuYywgaW50ZXJ2YWwgPSAxKSB7XHJcbiAgICBpZiAoa2V5ID09IFwibW91c2UxXCIpIHtcclxuICAgICAgbGV0IGIgPSBCaW5kKGtleSwgZnVuYywgeCwgaW50ZXJ2YWwsIHRoaXMpO1xyXG4gICAgICB0aGlzLmJpbmRzLnB1c2goYik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5iaW5kcy5wdXNoKEJpbmQoa2V5LCBmdW5jLCB4LCBpbnRlcnZhbCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWdpc3Rlcl9jb250cm9scygpIHtcclxuXHJcbiAgfVxyXG4gIGRlbGV0ZSgpIHtcclxuICAgIGZvciAobGV0IGEgb2YgdGhpcy5iaW5kcykge1xyXG4gICAgICBVbmJpbmQoYSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWUuZ2V0Um9vbSgpLmRlbGV0ZUl0ZW0odGhpcy5pZCk7XHJcbiAgfVxyXG4gIGNvbGxpc2lvbl9jaGVjayhhOiBjb2xsaXNpb25fYm94KTogQXJyYXk8b2JqPHVua25vd24+PiB7XHJcbiAgICBpZiAodGhpcy5jb2xsaXNpb24pIHtcclxuICAgICAgbGV0IHJvb20gPSB0aGlzLmdhbWUuZ2V0Um9vbSgpO1xyXG4gICAgICByZXR1cm4gcm9vbS5jaGVja19jb2xsaXNpb25zKGEsIFt0aGlzLmlkXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuXHJcbiAgfVxyXG4gIGdldF9mdWxsX2NvbGxpc2lvbl9ib3goKTpjb2xsaXNpb25fYm94e1xyXG4gICAgbGV0IHN0ID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGlmKHRoaXMuaGl0Ym94KXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB4OnN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTpzdC5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOnRoaXMuaGl0Ym94LndpZHRoICogdGhpcy5zY2FsaW5nLFxyXG4gICAgICAgIGhlaWdodDp0aGlzLmhpdGJveC5oZWlnaHQgKiB0aGlzLnNjYWxpbmdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB4OnN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTpzdC5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOnRoaXMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZ2V0X2FsbF9jb2xsaXNpb25fYm94ZXMoKTpjb2xsaXNpb25fYm94W117XHJcbiAgICBsZXQgc3QgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgaWYodGhpcy5oaXRib3gpe1xyXG4gICAgICByZXR1cm4gW3tcclxuICAgICAgICB4OnN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTpzdC5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOnRoaXMuaGl0Ym94LndpZHRoICogdGhpcy5zY2FsaW5nLFxyXG4gICAgICAgIGhlaWdodDp0aGlzLmhpdGJveC5oZWlnaHQgKiB0aGlzLnNjYWxpbmdcclxuICAgICAgfV1cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiBbe1xyXG4gICAgICAgIHg6c3QucG9zaXRpb24ueCxcclxuICAgICAgICB5OnN0LnBvc2l0aW9uLnksXHJcbiAgICAgICAgd2lkdGg6dGhpcy53aWR0aCAqIHRoaXMuc2NhbGluZyxcclxuICAgICAgICBoZWlnaHQ6dGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxpbmdcclxuICAgICAgfV1cclxuICAgIH1cclxuICB9XHJcbiAgY29sbGlkZXNfd2l0aF9ib3goYTogY29sbGlzaW9uX2JveCk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHN0ID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGxldCBoY29sbGlkZXMgPSBmYWxzZSwgdmNvbGxpZGVzID0gZmFsc2U7XHJcbiAgICBsZXQgaGJveCA9IHRoaXMuaGl0Ym94O1xyXG4gICAgaWYoIXRoaXMuaGl0Ym94KXtcclxuICAgICAgaGJveCA9IHtcclxuICAgICAgICB4X29mZnNldDowLFxyXG4gICAgICAgIHlfb2Zmc2V0OjAsXHJcbiAgICAgICAgd2lkdGg6dGhpcy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6dGhpcy5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IG9iID0ge1xyXG4gICAgICBsZWZ0OiAoc3QucG9zaXRpb24ueCArIGhib3gueF9vZmZzZXQgLSBoYm94LndpZHRoIC8gMiksXHJcbiAgICAgIHJpZ2h0OiAoc3QucG9zaXRpb24ueCArIGhib3gueF9vZmZzZXQgKyBoYm94LndpZHRoIC8gMiksXHJcbiAgICAgIHRvcDogKHN0LnBvc2l0aW9uLnkgKyBoYm94Lnlfb2Zmc2V0ICsgaGJveC5oZWlnaHQgLyAyKSxcclxuICAgICAgYm90dG9tOiAoc3QucG9zaXRpb24ueSArIGhib3gueV9vZmZzZXQgLSBoYm94LmhlaWdodCAvIDIpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJveCA9IHtcclxuICAgICAgbGVmdDogKGEueCAtIGEud2lkdGggLyAyKSxcclxuICAgICAgcmlnaHQ6IChhLnggKyBhLndpZHRoIC8gMiksXHJcbiAgICAgIHRvcDogKGEueSArIGEuaGVpZ2h0IC8gMiksXHJcbiAgICAgIGJvdHRvbTogKGEueSAtIGEuaGVpZ2h0IC8gMilcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKG9iLmxlZnQgPj0gYm94LmxlZnQgJiYgb2IubGVmdCA8IGJveC5yaWdodCkgfHwgKGJveC5sZWZ0ID4gb2IubGVmdCAmJiBib3gubGVmdCA8IG9iLnJpZ2h0KSkge1xyXG4gICAgICBoY29sbGlkZXMgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKChvYi5ib3R0b20gPj0gYm94LmJvdHRvbSAmJiBvYi5ib3R0b20gPCBib3gudG9wKSB8fCAoYm94LmJvdHRvbSA+IG9iLmJvdHRvbSAmJiBib3guYm90dG9tIDwgb2IudG9wKSl7XHJcbiAgICAgIHZjb2xsaWRlcyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGNvbGxpZGVzICYmIHZjb2xsaWRlcztcclxuICB9XHJcbiAgZW1pdF9wYXJ0aWNsZShuYW1lOnN0cmluZyxvZmZzZXQ6cG9zaXRpb24sbGlmZXRpbWU6bnVtYmVyLHJhbmdlOm51bWJlcil7XHJcbiAgICBsZXQgcm9vbSA9IHRoaXMuZ2FtZS5nZXRSb29tKCk7XHJcbiAgICBsZXQgc3QgPSB0aGlzLnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgbGV0IGZpbmFsX3Bvc2l0aW9uOnBvc2l0aW9uID0ge1xyXG4gICAgICB4OnN0LnBvc2l0aW9uLnggKyBvZmZzZXQueCxcclxuICAgICAgeTpzdC5wb3NpdGlvbi55ICsgb2Zmc2V0LnlcclxuICAgIH1cclxuICAgIHJvb20uZW1pdF9wYXJ0aWNsZShuYW1lLGZpbmFsX3Bvc2l0aW9uLGxpZmV0aW1lLHJhbmdlKVxyXG4gIH1cclxuICByZW5kZXJfdHJhY2sodGltZTpudW1iZXIpOiBwb3NpdGlvbmVkX3Nwcml0ZVtdIHtcclxuICAgIGxldCByZW5kZXJlZCA9IHRoaXMucmVuZGVyZih0aW1lIC0gdGhpcy5sYXN0X3JlbmRlcik7XHJcbiAgICBsZXQgZmluYWw6cG9zaXRpb25lZF9zcHJpdGVbXTtcclxuICAgIHRoaXMubGFzdF9yZW5kZXIgPSB0aW1lO1xyXG4gICAgaWYoQXJyYXkuaXNBcnJheShyZW5kZXJlZCkpXHJcbiAgICAgIGZpbmFsID0gcmVuZGVyZWRcclxuICAgIGVsc2V7XHJcbiAgICAgIGZpbmFsID0gW3JlbmRlcmVkXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpbmFsO1xyXG4gIH1cclxuICByZW5kZXJmKHRpbWU6IG51bWJlcik6IHBvc2l0aW9uZWRfc3ByaXRlW10gfCBwb3NpdGlvbmVkX3Nwcml0ZXtcclxuICAgIGxldCBzdCA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICBpZiAoIXRoaXMuYW5pbWF0aW9ucy5jdXJyZW50KSB7XHJcbiAgICAgIGxldCBzcHJpdGVfaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgIGxldCBzcHJpdGVfd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICBpZiAodGhpcy5oZWlnaHQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3ByaXRlX2hlaWdodCA9IHRoaXMuc3ByaXRlX3NoZWV0LmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy53aWR0aCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzcHJpdGVfd2lkdGggPSB0aGlzLnNwcml0ZV9zaGVldC53aWR0aDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgc3ByaXRlX3NoZWV0OiB0aGlzLnNwcml0ZV9zaGVldCxcclxuICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICBzcHJpdGVfd2lkdGg6IHNwcml0ZV93aWR0aCxcclxuICAgICAgICAgIHNwcml0ZV9oZWlnaHQ6IHNwcml0ZV9oZWlnaHQsXHJcbiAgICAgICAgICBvcGFjaXR5OjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHg6IHN0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTogc3QucG9zaXRpb24ueVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3ByaXRlOnRoaXMuYW5pbWF0aW9ucy5yZW5kZXJmKHRpbWUpLFxyXG4gICAgICB4OiBzdC5wb3NpdGlvbi54LFxyXG4gICAgICB5OiBzdC5wb3NpdGlvbi55XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGNvbXBvc2l0ZV9zdGF0aWN7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgb2JqOm9iajx1bmtub3duPlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgY29tcG9zaXRlX29iajxUPiBleHRlbmRzIG9iajxUPntcclxuICBvYmplY3RzOm9iajx1bmtub3duPltdID0gW107XHJcbiAgcmVuZGVyID0gZmFsc2U7XHJcbiAgcmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG4gIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gIHN0YXRpY3M6Y29tcG9zaXRlX3N0YXRpY1tdID0gW107XHJcbiAgY29uc3RydWN0b3IocG9zOnBvc2l0aW9uKXtcclxuICAgIHN1cGVyKHBvcyk7XHJcbiAgfVxyXG4gIGxvYWQoKXtcclxuICAgIC8vcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PnJlc29sdmUoKSk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoWy4uLnRoaXMub2JqZWN0cy5tYXAoKGEpPT5hLmxvYWQoKSksLi4udGhpcy5zdGF0aWNzLm1hcChhPT5hLm9iai5sb2FkKCkpXSk7XHJcbiAgfVxyXG4gIGFzeW5jIHJlZ2lzdGVyX2NvbXBvc2l0ZSgpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgbGV0IGxlbmd0aCA9IHRoaXMuY29tYmluZWRfb2JqZWN0cygpLmxlbmd0aDtcclxuICAgICAgZm9yKGxldCBhID0gMDthIDwgbGVuZ3RoOyBhKyspe1xyXG4gICAgICAgIGxldCBvID0gdGhpcy5jb21iaW5lZF9vYmplY3RzKClbYV07XHJcbiAgICAgICAgby5wYXJlbnQgPSB0aGlzO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2FtZS5nZXRSb29tKCkuYWRkSXRlbXModGhpcy5jb21iaW5lZF9vYmplY3RzKCkpO1xyXG4gICAgICByZXNvbHZlKCk7IFxyXG4gICAgfSlcclxuICAgIFxyXG4gIH1cclxuICBjb21iaW5lZF9vYmplY3RzKCk6b2JqPHVua25vd24+W117XHJcbiAgICBsZXQgY29tYmluZWQgPSBbLi4udGhpcy5vYmplY3RzLC4uLnRoaXMuc3RhdGljcy5tYXAoYT0+YS5vYmopXTtcclxuICAgIGNvbWJpbmVkLmZvckVhY2goYT0+YS5wYXJlbnQgPSB0aGlzKTtcclxuICAgIHJldHVybiBjb21iaW5lZDtcclxuICB9XHJcbiAgZ2V0X0l0ZW1zX2J5X1RhZyh0YWc6c3RyaW5nKXtcclxuICAgIHJldHVybiB0aGlzLmNvbWJpbmVkX29iamVjdHMoKS5maWx0ZXIoKGEpPT5hLnRhZ3MuaW5kZXhPZih0YWcpID4gLTEpO1xyXG4gIH1cclxuICBhZGRfSXRlbShhOm9iajx1bmtub3duPixsaXN0PXRoaXMub2JqZWN0cyl7XHJcbiAgICBsaXN0LnB1c2goYSk7XHJcbiAgICBhLnBhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmdhbWUuZ2V0Um9vbSgpLmFkZEl0ZW0oYSk7XHJcbiAgfVxyXG4gIGdldF9hbGxfY29sbGlzaW9uX2JveGVzKCk6Y29sbGlzaW9uX2JveFtde1xyXG4gICAgbGV0IGFycjpjb2xsaXNpb25fYm94W10gPSBbXTtcclxuICAgIGZvcihsZXQgb2JqIG9mIFsuLi50aGlzLnN0YXRpY3MubWFwKGE9PmEub2JqKSwuLi50aGlzLm9iamVjdHNdKXtcclxuICAgICAgbGV0IGNyZWF0ZWRfYm94ID0gb2JqLmdldF9hbGxfY29sbGlzaW9uX2JveGVzKCk7XHJcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoY3JlYXRlZF9ib3gpKXtcclxuICAgICAgICBhcnIucHVzaCguLi5jcmVhdGVkX2JveCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBhcnIucHVzaChjcmVhdGVkX2JveCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbiAgfVxyXG4gIGRlbGV0ZSgpe1xyXG4gICAgZm9yKGxldCBhIG9mIHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGEuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgb2YgdGhpcy5zdGF0aWNzKXtcclxuICAgICAgYS5vYmouZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgICBzdXBlci5kZWxldGUoKTtcclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6bnVtYmVyKXtcclxuICAgIFxyXG4gICAgaWYodGhpcy5nYW1lLmdldFJvb20oKSAmJiAhdGhpcy5yZWdpc3RlcmVkKXtcclxuICAgICAgdGhpcy5yZWdpc3Rlcl9jb21wb3NpdGUoKTtcclxuICAgICAgdGhpcy5yZWdpc3RlcmVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuICBjb2xsaWRlc193aXRoX2JveChhOiBjb2xsaXNpb25fYm94KTpib29sZWFue1xyXG4gICAgZm9yKGxldCBvYmogb2YgdGhpcy5vYmplY3RzKXtcclxuICAgICAgaWYob2JqLmNvbGxpZGVzX3dpdGhfYm94KGEpKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBvIG9mIHRoaXMuc3RhdGljcyl7XHJcbiAgICAgIGlmKG8ub2JqLmNvbGxpZGVzX3dpdGhfYm94KGEpKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIHN0YXRpY19vYmoge1xyXG4gIHNwcml0ZV91cmwgPSBcIlwiO1xyXG4gIHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGdyYXZpdHlfb2JqPFQ+IGV4dGVuZHMgb2JqPFQ+e1xyXG4gIGdyYXZpdHkgPSB0cnVlXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UmFuZEludChtaW46bnVtYmVyLCBtYXg6bnVtYmVyKSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICkgKyBtaW47XHJcbn0iLCJpbXBvcnQgeyBzcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgR2V0Vmlld3BvcnREaW1lbnNpb25zIH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQgeyBvYmogfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgb2JqX3N0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgVGV4dF9Ob2RlLCBUZXh0U2V0dGluZyxIVUQsVGV4dCB9IGZyb20gXCIuL2h1ZFwiO1xyXG5pbXBvcnQge3Bvc2l0aW9uZWRfc3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVcIlxyXG5cclxuaW50ZXJmYWNlIGNhbWVyYV9zdGF0ZSB7XHJcbiAgc2NhbGluZzogbnVtYmVyLFxyXG4gIHBvc2l0aW9uOiB7XHJcbiAgICB4OiBudW1iZXIsXHJcbiAgICB5OiBudW1iZXJcclxuICB9XHJcbiAgZGltZW5zaW9uczoge1xyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodDogbnVtYmVyXHJcbiAgfSxcclxuICB2aWV3cG9ydDogdmlld3BvcnQsXHJcbiAgZGVidWc6Ym9vbGVhbixcclxuICBodWQ6SFVEICBcclxufVxyXG5cclxuaW50ZXJmYWNlIHZpZXdwb3J0IHtcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIGNhbWVyYV9wcm9wZXJ0aWVzIHtcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBkaW1lbnNpb25zOntcclxuICAgIGhlaWdodDpudW1iZXIsXHJcbiAgICB3aWR0aDpudW1iZXJcclxuICB9XHJcbiAgc2NhbGluZzpudW1iZXIsXHJcbiAgZGVidWc6Ym9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhIHtcclxuICBzdGF0ZTogY2FtZXJhX3N0YXRlO1xyXG4gIGh1ZDogSFVEO1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOmNhbWVyYV9wcm9wZXJ0aWVzLCB2OiB2aWV3cG9ydCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2NhbGluZzpwcm9wcy5zY2FsaW5nLFxyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IHByb3BzLnggKiBwcm9wcy5zY2FsaW5nLFxyXG4gICAgICAgIHk6IHByb3BzLnkgKiBwcm9wcy5zY2FsaW5nXHJcbiAgICAgIH0sXHJcbiAgICAgIGRpbWVuc2lvbnM6IHByb3BzLmRpbWVuc2lvbnMsXHJcbiAgICAgIHZpZXdwb3J0OiB7XHJcbiAgICAgICAgeDp2LngsXHJcbiAgICAgICAgeTp2LnkgLFxyXG4gICAgICAgIHdpZHRoOiB2LndpZHRoICogcHJvcHMuZGltZW5zaW9ucy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHYuaGVpZ2h0ICogcHJvcHMuZGltZW5zaW9ucy5oZWlnaHRcclxuICAgICAgfSxcclxuICAgICAgZGVidWc6cHJvcHMuZGVidWcsXHJcbiAgICAgIGh1ZDp1bmRlZmluZWRcclxuICAgIH1cclxuICB9XHJcbiAgc2V0IHgoeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnggPSB4O1xyXG4gIH1cclxuICBzZXQgeSh5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSA9IHlcclxuICB9XHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gIH1cclxuICBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLnBvc2l0aW9uLnk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSByZW5kZXJfZnVuYyB7XHJcbiAgKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsaW5nOiBudW1iZXIpOiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSByZWN0YW5nbGUge1xyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIHNwcml0ZV9hcmdzIHtcclxuICBzcHJpdGU6IHNwcml0ZSxcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHJvdGF0aW9uOiBudW1iZXIsXHJcbiAgc2NhbGU6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSByZW5kZXJlcl9hcmdzIHtcclxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgY2FtZXJhOiBDYW1lcmFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gcmVuZGVyX3R5cGUge1xyXG4gIHRleHQsXHJcbiAgc3ByaXRlLFxyXG4gIHJlY3QsXHJcbiAgc3Ryb2tlX3JlY3RcclxufVxyXG4vKlxyXG5leHBvcnQgY29uc3QgZWxlbWVudF9yZW5kZXIgPSAocjpyZW5kZXJlcl9hcmdzLG86b2JqPHVua25vd24+LHRpbWU6bnVtYmVyKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKChzLnggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoIC8gMiAtIHMuc3ByaXRlLnNwcml0ZV93aWR0aCAvIDIpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSBzLnkgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyAyIC0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IHdpZHRoID0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnRleHQpe1xyXG5cclxuICB9XHJcbiAgZWxzZSBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnNwcml0ZSl7XHJcblxyXG4gIH1cclxuICBlbHNlIGlmKG8ucmVuZGVyX3R5cGUgPT0gcmVuZGVyX3R5cGUuc3Ryb2tlX3JlY3Qpe1xyXG5cclxuICB9XHJcbn1cclxuKi9cclxuZXhwb3J0IGNvbnN0IG9iamVjdF9yZW5kZXIgPSAocjpyZW5kZXJlcl9hcmdzLG86b2JqPHVua25vd24+LHRpbWU6bnVtYmVyKSA9PiB7XHJcbiAgbGV0IHJlbmRlcmVkID0gby5yZW5kZXJfdHJhY2sodGltZSk7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVuZGVyZWQpKSB7XHJcbiAgICBmb3IgKGxldCBwIG9mIHJlbmRlcmVkKXtcclxuICAgICAgc3ByaXRlX3JlbmRlcmVyKHIsIHtcclxuICAgICAgICBzcHJpdGU6cC5zcHJpdGUsXHJcbiAgICAgICAgeDogcC54LFxyXG4gICAgICAgIHk6IHAueSxcclxuICAgICAgICByb3RhdGlvbjogby5yb3RhdGlvbixcclxuICAgICAgICBzY2FsZTpvLnNjYWxpbmdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgbGV0IHBvc2l0aW9uZWRfc3ByaXRlID0gcmVuZGVyZWQgYXMgcG9zaXRpb25lZF9zcHJpdGU7XHJcbiAgICBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnNwcml0ZSl7XHJcbiAgICAgIHNwcml0ZV9yZW5kZXJlcihyLCB7XHJcbiAgICAgICAgc3ByaXRlOiBwb3NpdGlvbmVkX3Nwcml0ZS5zcHJpdGUsXHJcbiAgICAgICAgeDogcG9zaXRpb25lZF9zcHJpdGUueCxcclxuICAgICAgICB5OiBwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgIHJvdGF0aW9uOiBvLnJvdGF0aW9uLFxyXG4gICAgICAgIHNjYWxlOm8uc2NhbGluZ1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZihvLnJlbmRlcl90eXBlID09IHJlbmRlcl90eXBlLnJlY3Qpe1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBodWRfdGV4dF9yZW5kZXJlciA9IChyOiByZW5kZXJlcl9hcmdzLCBzOiBUZXh0U2V0dGluZykgPT4ge1xyXG4gIGxldCB2aGVpZ2h0ID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0O1xyXG4gIHIuY29udGV4dC5mb250ID0gYCR7cy5mb250LnNpemV9cHggJHtzLmZvbnQuZm9udH1gO1xyXG4gIHIuY29udGV4dC5maWxsU3R5bGUgPSBzLmZvbnQuY29sb3I7XHJcbiAgci5jb250ZXh0LnRleHRBbGlnbiA9IHMuZm9udC5hbGlnbjtcclxuICBpZiAocy5mb250Lm1heF93aWR0aCkge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCBzLngsIHZoZWlnaHQgLSBzLnksIHMuZm9udC5tYXhfd2lkdGgpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgcy54LCB2aGVpZ2h0IC0gcy55KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0ZXh0X3JlbmRlcmVyID0gKHI6cmVuZGVyZXJfYXJncyxzOlRleHRTZXR0aW5nKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgbGV0IHdpZHRoID0gci5jb250ZXh0Lm1lYXN1cmVUZXh0KHMuZm9udC50ZXh0KS53aWR0aCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGhlaWdodCA9IHMuZm9udC5zaXplICogMS4yICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgocy54IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL3IuY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMikgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHMueSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0LzIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgci5jb250ZXh0LmZvbnQgPSBgJHtzLmZvbnQuc2l6ZSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmd9cHggJHtzLmZvbnQuZm9udH1gO1xyXG4gIHIuY29udGV4dC5maWxsU3R5bGUgPSBzLmZvbnQuY29sb3I7XHJcbiAgci5jb250ZXh0LnRleHRBbGlnbiA9IHMuZm9udC5hbGlnblxyXG4gIHIuY29udGV4dC5zYXZlKCk7XHJcbiAgci5jb250ZXh0LnRyYW5zbGF0ZShmaW5hbF94LCBmaW5hbF95KTtcclxuICBpZiAocy5mb250Lm1heF93aWR0aCkge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCAwLCAwLCBzLmZvbnQubWF4X3dpZHRoKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByLmNvbnRleHQuZmlsbFRleHQocy5mb250LnRleHQsIDAsIDApO1xyXG4gIH1cclxuICByLmNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3ByaXRlX3JlbmRlcmVyID0gKHI6IHJlbmRlcmVyX2FyZ3MsIHM6IHNwcml0ZV9hcmdzKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKChzLnggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvci5jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogcy5zY2FsZSAvIDIpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSBzLnkgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9yLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0ICogcy5zY2FsZSAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHMuc2NhbGUgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCB3aWR0aCA9IHMuc3ByaXRlLnNwcml0ZV93aWR0aCAqIHMuc2NhbGUgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIHIuY29udGV4dC5zYXZlKCk7XHJcbiAgci5jb250ZXh0Lmdsb2JhbEFscGhhID0gcy5zcHJpdGUub3BhY2l0eTtcclxuICByLmNvbnRleHQudHJhbnNsYXRlKGZpbmFsX3ggICsgKHdpZHRoKSAvIDIsIGZpbmFsX3kgKyBoZWlnaHQgLyAyKVxyXG4gIGxldCByYWRpYW5zID0gcy5yb3RhdGlvbiAqIChNYXRoLlBJIC8gMTgwKTtcclxuICByLmNvbnRleHQucm90YXRlKHJhZGlhbnMpO1xyXG4gIHIuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICBzLnNwcml0ZS5zcHJpdGVfc2hlZXQsXHJcbiAgICBzLnNwcml0ZS5sZWZ0LFxyXG4gICAgcy5zcHJpdGUudG9wLFxyXG4gICAgcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogcy5zY2FsZSxcclxuICAgIHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQgKiBzLnNjYWxlLFxyXG4gICAgLSh3aWR0aCkgLyAyLFxyXG4gICAgLWhlaWdodCAvIDIsXHJcbiAgICB3aWR0aCxcclxuICAgIGhlaWdodFxyXG4gIClcclxuICByLmNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcmVjdDogcmVjdGFuZ2xlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgY2FtZXJhOiBDYW1lcmEpID0+IHtcclxuICBsZXQgdmhlaWdodCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAvIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKCh4IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSByZWN0LndpZHRoIC8gMikgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSB5IC0gcmVjdC5oZWlnaHQgLyAyIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55KSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgd2lkdGggPSByZWN0LndpZHRoICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGNvbnRleHQuc3Ryb2tlUmVjdChmaW5hbF94LCBmaW5hbF95LCB3aWR0aCwgaGVpZ2h0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlY3RfcmVuZGVyZXIgPSAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByZWN0OiByZWN0YW5nbGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBjYW1lcmE6IENhbWVyYSkgPT4ge1xyXG4gIGxldCB2aGVpZ2h0ID0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGZpbmFsX3ggPSAoKHggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiAtIHJlY3Qud2lkdGggLyAyKSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHkgLSByZWN0LmhlaWdodCAvIDIgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBoZWlnaHQgPSByZWN0LmhlaWdodCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCB3aWR0aCA9IHJlY3Qud2lkdGggKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgY29udGV4dC5maWxsUmVjdChmaW5hbF94LCBmaW5hbF95LCB3aWR0aCwgaGVpZ2h0KTtcclxufSIsImltcG9ydCB7IGdyYXZpdHlfb2JqLG9iaiB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSwgc3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IHZlbG9jaXR5X2NvbGxpc2lvbl9jaGVjayxjaGVja19jb2xsaXNpb25zLGNvbGxpc2lvbl9ib3gsY2hlY2tfYWxsX2NvbGxpc2lvbnMsY2hlY2tfYWxsX29iamVjdHN9IGZyb20gXCIuL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge3JlbmRlcl9jb2xsaXNpb25fYm94LERFQlVHfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7QmluZCxjb250cm9sX2Z1bmMsIGV4ZWNfdHlwZX0gZnJvbSBcIi4vY29udHJvbHNcIjtcclxuaW1wb3J0IHtIVUQsVGV4dCwgVGV4dF9Ob2RlfSBmcm9tIFwiLi9odWRcIjtcclxuaW1wb3J0IHthdWRpb30gZnJvbSBcIi4vYXVkaW9cIlxyXG5pbXBvcnQge2dhbWV9IGZyb20gXCIuLi92YW5cIjtcclxuXHJcbmludGVyZmFjZSBwb3NpdGlvbntcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlclxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlfZ3Jhdml0eShvYjpncmF2aXR5X29iajx1bmtub3duPixncmF2X2NvbnN0Om51bWJlciwgZ3Jhdl9tYXg6bnVtYmVyKXtcclxuICBsZXQgc3QgPSBvYi5zdGF0ZSBhcyBvYmpfc3RhdGU7XHJcbiAgaWYob2IuZ3Jhdml0eSAmJiBzdC52ZWxvY2l0eS55ID4gZ3Jhdl9tYXgpe1xyXG4gICAgc3QudmVsb2NpdHkueSArPSBncmF2X2NvbnN0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwYXJ0aWNsZV9lbnRyeXtcclxuICBzcHJpdGU6c3RyaW5nLFxyXG4gIGhlaWdodDpudW1iZXIsXHJcbiAgd2lkdGg6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBwYXJ0aWNsZXN7XHJcbiAgW2luZGV4OnN0cmluZ106cGFydGljbGVfZW50cnlcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSByb29tX2k8VD57XHJcbiAgYmFja2dyb3VuZF91cmw6c3RyaW5nLFxyXG4gIG9iamVjdHM6QXJyYXk8b2JqPHVua25vd24+PlxyXG4gIHN0YXRlOlRcclxufVxyXG5leHBvcnQgY2xhc3Mgcm9vbTxUPntcclxuICBiYWNrZ3JvdW5kX3VybDogc3RyaW5nO1xyXG4gIGJhY2tncm91bmQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgb2JqZWN0czogQXJyYXk8b2JqPHVua25vd24+PiA9IFtdO1xyXG4gIHBhcnRpY2xlczpwYXJ0aWNsZXMgPSB7fTtcclxuICBwYXJ0aWNsZXNfYXJyOiBBcnJheTxvYmo8dW5rbm93bj4+ID0gW107XHJcbiAgc3RhdGU6IFQ7XHJcbiAgZ2FtZTpnYW1lPHVua25vd24+O1xyXG4gIGh1ZDpIVUQ7XHJcbiAgYXVkaW8gPSBuZXcgYXVkaW8oKTtcclxuICB0ZXh0X25vZGVzOlRleHRbXSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKGdhbWU6Z2FtZTx1bmtub3duPil7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gIH1cclxuICBsb2FkKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGxldCBhID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGxldCB0b19hd2FpdCA9IHRoaXMub2JqZWN0cy5tYXAoKGEpID0+IGEubG9hZCgpKTtcclxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodG9fYXdhaXQpO1xyXG4gICAgICBhLnNyYyA9IHRoaXMuYmFja2dyb3VuZF91cmw7XHJcbiAgICAgIGEub25lcnJvciA9ICgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBsb2FkaW5nIHVybDpcIiArIHRoaXMuYmFja2dyb3VuZF91cmwpO1xyXG4gICAgICB9KVxyXG4gICAgICBhLm9ubG9hZCA9IChhc3luYygpID0+IHtcclxuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kID0gYTtcclxuICAgICAgICBhd2FpdCB0aGlzLmF1ZGlvLmxvYWQoKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICB9XHJcbiAgYXN5bmMgYWRkSXRlbShvOm9iajx1bmtub3duPiwgbGlzdCA9IHRoaXMub2JqZWN0cyl7XHJcbiAgICBhd2FpdCBvLmxvYWQoKTtcclxuICAgIG8uZ2FtZSA9IHRoaXMuZ2FtZTtcclxuICAgIGxpc3QucHVzaChvKTtcclxuICB9XHJcbiAgYXN5bmMgYWRkSXRlbXMobzpvYmo8dW5rbm93bj5bXSwgbGlzdCA9IHRoaXMub2JqZWN0cyl7XHJcbiAgICBmb3IobGV0IG9iIG9mIG8pe1xyXG4gICAgICBvYi5nYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoby5tYXAoKGEpPT5hLmxvYWQoKSkpO1xyXG4gICAgbGlzdC5wdXNoKC4uLm8pO1xyXG4gIH1cclxuICBkZWxldGVJdGVtKGlkOnN0cmluZywgbGlzdCA9IHRoaXMub2JqZWN0cyl7XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCBsaXN0Lmxlbmd0aDthKyspe1xyXG4gICAgICBpZihsaXN0W2FdLmlkID09PSBpZCl7XHJcbiAgICAgICAgbGlzdC5zcGxpY2UoYSwxKVxyXG4gICAgICAgIGEtLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZWdpc3RlclBhcnRpY2xlcygpe1xyXG5cclxuICB9XHJcbiAgYmluZENvbnRyb2woa2V5OnN0cmluZyx4OmV4ZWNfdHlwZSxmdW5jOmNvbnRyb2xfZnVuYyxpbnRlcnZhbDpudW1iZXIgPSAxKXtcclxuICAgIEJpbmQoa2V5LGZ1bmMseCxpbnRlcnZhbCk7IFxyXG4gIH1cclxuICBjaGVja19jb2xsaXNpb25zKGJveDpjb2xsaXNpb25fYm94LGV4ZW1wdD86QXJyYXk8c3RyaW5nPik6QXJyYXk8b2JqPHVua25vd24+PntcclxuICAgIGlmKERFQlVHKXtcclxuICAgICAgcmVuZGVyX2NvbGxpc2lvbl9ib3goYm94KTtcclxuICAgIH1cclxuICAgIHJldHVybiBjaGVja19hbGxfY29sbGlzaW9ucyhib3gsdGhpcy5vYmplY3RzLGV4ZW1wdCk7XHJcbiAgfVxyXG4gIGNoZWNrX29iamVjdHMoYm94OmNvbGxpc2lvbl9ib3gsZXhlbXB0PzpzdHJpbmdbXSxsaXN0PXRoaXMub2JqZWN0cyl7XHJcbiAgICBpZihERUJVRyl7XHJcbiAgICAgIHJlbmRlcl9jb2xsaXNpb25fYm94KGJveCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hlY2tfYWxsX29iamVjdHMoYm94LGxpc3QsZXhlbXB0KTtcclxuICB9XHJcbiAgcmVnaXN0ZXJfY29udHJvbHMoKXtcclxuXHJcbiAgfVxyXG4gIGNsZWFudXAoKXtcclxuXHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgIHRoaXMub2JqZWN0c1thXS5zdGF0ZWYodGltZSk7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmdhbWUuc3RhdGUuY2FtZXJhcyl7XHJcbiAgICAgIGZvcihsZXQgY2FtZXJhcyBvZiB0aGlzLmdhbWUuc3RhdGUuY2FtZXJhcyl7XHJcbiAgICAgICAgaWYoY2FtZXJhcy5odWQpe1xyXG4gICAgICAgICAgY2FtZXJhcy5odWQuc3RhdGVmKHRpbWUpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgIH0gXHJcbiAgICB9XHJcbiAgfVxyXG4gIGVtaXRfcGFydGljbGUobmFtZTpzdHJpbmcscG9zOnBvc2l0aW9uLGxpZmV0aW1lOm51bWJlcixwb3NfcmFuZ2U6bnVtYmVyKXtcclxuICAgIHRoaXMuYWRkSXRlbShuZXcgUGFydGljbGUodGhpcy5wYXJ0aWNsZXNbbmFtZV0scG9zLGxpZmV0aW1lLHBvc19yYW5nZSksIHRoaXMucGFydGljbGVzX2Fycik7XHJcbiAgfVxyXG4gIGdldE9iaihpZDpzdHJpbmcpe1xyXG4gICAgZm9yKGxldCBhID0gMDsgYSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGErKyl7XHJcbiAgICAgIGlmKHRoaXMub2JqZWN0c1thXS5pZCA9PSBpZCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0c1thXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGdldE9iakJ5VGFnKHRhZzpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIHRoaXMub2JqZWN0cy5maWx0ZXIoKGEpPT5hLnRhZ3MuaW5kZXhPZih0YWcpID4gLTEpO1xyXG4gIH1cclxuICByZW5kZXJmKHRpbWU6IG51bWJlcik6IHNwcml0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcHJpdGVfc2hlZXQ6IHRoaXMuYmFja2dyb3VuZCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBzcHJpdGVfaGVpZ2h0OiB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LFxyXG4gICAgICBzcHJpdGVfd2lkdGg6IHRoaXMuYmFja2dyb3VuZC53aWR0aCxcclxuICAgICAgb3BhY2l0eToxXHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSwgcG9zaXRpb24sIGRpbWVuc2lvbnN9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7Z2V0UmFuZEludH0gZnJvbSBcIi4vcmFuZFwiO1xyXG5pbXBvcnQge3BhcnRpY2xlX2VudHJ5fSBmcm9tIFwiLi9yb29tXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHNwcml0ZXtcclxuICBzcHJpdGVfc2hlZXQ6SFRNTEltYWdlRWxlbWVudCxcclxuICBsZWZ0Om51bWJlcixcclxuICB0b3A6bnVtYmVyLFxyXG4gIHNwcml0ZV93aWR0aDpudW1iZXIsXHJcbiAgc3ByaXRlX2hlaWdodDpudW1iZXIsXHJcbiAgb3BhY2l0eTpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwb3NpdGlvbmVkX3Nwcml0ZXtcclxuICBzcHJpdGU6c3ByaXRlLFxyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBQYXJ0aWNsZV9pe1xyXG4gIGxpZmV0aW1lOm51bWJlcjtcclxuICBwb3NpdGlvbjp7XHJcbiAgICB4Om51bWJlcixcclxuICAgIHk6bnVtYmVyXHJcbiAgfSxcclxuICB2ZWxvY2l0eTp7XHJcbiAgICB4Om51bWJlcixcclxuICAgIHk6bnVtYmVyXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFydGljbGUgZXh0ZW5kcyBvYmo8UGFydGljbGVfaT57XHJcbiAgY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgcmFuZG9tX3JhbmdlOm51bWJlcjtcclxuICBtYXhfbGlmZXRpbWU6bnVtYmVyO1xyXG4gIHNlbGVjdGVkX3Nwcml0ZTpzcHJpdGU7XHJcbiAgY29uc3RydWN0b3IocGFydDpwYXJ0aWNsZV9lbnRyeSxwb3M6cG9zaXRpb24sbGlmZXRpbWU6bnVtYmVyLHJhbmRvbV9yYW5nZTpudW1iZXIpe1xyXG4gICAgc3VwZXIocG9zKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxpZmV0aW1lOjAsXHJcbiAgICAgIHBvc2l0aW9uOntcclxuICAgICAgICB4OnBvcy54ICsgZ2V0UmFuZEludCgtcmFuZG9tX3JhbmdlLHJhbmRvbV9yYW5nZSksXHJcbiAgICAgICAgeTpwb3MueSArIGdldFJhbmRJbnQoLXJhbmRvbV9yYW5nZSxyYW5kb21fcmFuZ2UpXHJcbiAgICAgIH0sXHJcbiAgICAgIHZlbG9jaXR5OntcclxuICAgICAgICB4OjAsXHJcbiAgICAgICAgeTowXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLnNwcml0ZV91cmwgPSBwYXJ0LnNwcml0ZTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gcGFydC5oZWlnaHQ7XHJcbiAgICB0aGlzLndpZHRoID0gcGFydC53aWR0aDtcclxuICAgIHRoaXMubWF4X2xpZmV0aW1lID0gbGlmZXRpbWU7XHJcbiAgICB0aGlzLnJhbmRvbV9yYW5nZSA9IHJhbmRvbV9yYW5nZTtcclxuICB9XHJcbiAgZGVsZXRlKCl7XHJcbiAgICBsZXQgcm9vbSA9IHRoaXMuZ2FtZS5nZXRSb29tKCk7XHJcbiAgICByb29tLmRlbGV0ZUl0ZW0odGhpcy5pZCxyb29tLnBhcnRpY2xlc19hcnIpO1xyXG4gIH1cclxuICBzdGF0ZWYodGltZTpudW1iZXIpe1xyXG4gICAgdGhpcy5zdGF0ZS5saWZldGltZSArPSB0aW1lO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5saWZldGltZSA+IHRoaXMubWF4X2xpZmV0aW1lKXtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyZih0aW1lOm51bWJlcik6cG9zaXRpb25lZF9zcHJpdGV7XHJcbiAgICBpZighdGhpcy5zZWxlY3RlZF9zcHJpdGUpe1xyXG4gICAgICBsZXQgc3ByaXRlcyA9IHNwcml0ZV9nZW4odGhpcy5zcHJpdGVfc2hlZXQsdGhpcy53aWR0aCx0aGlzLmhlaWdodClcclxuICAgICAgbGV0IHJhbmRvbV9yb3cgPSBnZXRSYW5kSW50KDAsc3ByaXRlcy5sZW5ndGgpO1xyXG4gICAgICBsZXQgcmFuZG9tX2NvbCA9IGdldFJhbmRJbnQoMCxzcHJpdGVzW3JhbmRvbV9yb3ddLmxlbmd0aCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRfc3ByaXRlID0gc3ByaXRlc1tyYW5kb21fcm93XVtyYW5kb21fY29sXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRfc3ByaXRlLm9wYWNpdHkgPSAxIC0gdGhpcy5zdGF0ZS5saWZldGltZS90aGlzLm1heF9saWZldGltZTtcclxuICAgIHJldHVybntcclxuICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICBzcHJpdGU6dGhpcy5zZWxlY3RlZF9zcHJpdGUgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ByaXRlX2dlbihzcHJpdGVfc2hlZXQ6SFRNTEltYWdlRWxlbWVudCxzcHJpdGVfd2lkdGg6bnVtYmVyLHNwcml0ZV9oZWlnaHQ6bnVtYmVyKTpBcnJheTxBcnJheTxzcHJpdGU+PntcclxuICBsZXQgd2lkdGggPSBzcHJpdGVfc2hlZXQud2lkdGg7XHJcbiAgbGV0IGhlaWdodCA9IHNwcml0ZV9zaGVldC5oZWlnaHQ7XHJcbiAgbGV0IHNwcml0ZXM6QXJyYXk8QXJyYXk8c3ByaXRlPj4gPSBbXTtcclxuICBmb3IobGV0IGIgPSAwOyBiIDwgaGVpZ2h0O2IgKz0gc3ByaXRlX2hlaWdodCl7XHJcbiAgICBzcHJpdGVzLnB1c2goW10pO1xyXG4gICAgZm9yKGxldCBhID0gMDsgYSA8IHdpZHRoO2EgKz0gc3ByaXRlX3dpZHRoKXtcclxuICAgICAgc3ByaXRlc1tiXS5wdXNoKHtcclxuICAgICAgICBzcHJpdGVfc2hlZXQsXHJcbiAgICAgICAgbGVmdDphLFxyXG4gICAgICAgIHRvcDpiICogc3ByaXRlX2hlaWdodCxcclxuICAgICAgICBzcHJpdGVfaGVpZ2h0LFxyXG4gICAgICAgIHNwcml0ZV93aWR0aCxcclxuICAgICAgICBvcGFjaXR5OjFcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHNwcml0ZXM7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBpbnRlcmZhY2Ugc3RhdGVfZnVuYzxUPntcclxuICAobGFzdF90aW1lOm51bWJlcixjdXJyZW50X3N0YXRlOlQpOlRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSB2ZWxvY2l0eXtcclxuICB4Om51bWJlcjtcclxuICB5Om51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwb3NpdGlvbntcclxuICB4Om51bWJlcjtcclxuICB5Om51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBkaW1lbnNpb25ze1xyXG4gIGhlaWdodDpudW1iZXIsXHJcbiAgd2lkdGg6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugb2JqX3N0YXRle1xyXG4gIHBvc2l0aW9uOnBvc2l0aW9uO1xyXG4gIHZlbG9jaXR5OnZlbG9jaXR5O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHJvb21fc3RhdGV7XHJcbiAgb2JqZWN0czogQXJyYXk8b2JqX3N0YXRlPlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25faW5pdCgpOm9ial9zdGF0ZXtcclxuICByZXR1cm4ge1xyXG4gICAgcG9zaXRpb246e1xyXG4gICAgICB4OjAsXHJcbiAgICAgIHk6MFxyXG4gICAgfSxcclxuICAgIHZlbG9jaXR5OntcclxuICAgICAgeDowLFxyXG4gICAgICB5OjBcclxuICAgIH1cclxuXHJcbiAgfSAgXHJcbn0iLCJleHBvcnQgbGV0IERFQlVHID0gdHJ1ZTtcclxuZXhwb3J0IGxldCBQQVVTRUQgPSB0cnVlO1xyXG5pbXBvcnQge29ian0gZnJvbSBcIi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQge29ial9zdGF0ZSwgcG9zaXRpb259IGZyb20gXCIuL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge3Jvb219IGZyb20gXCIuL2xpYi9yb29tXCI7XHJcbmltcG9ydCB7cG9zaXRpb25lZF9zcHJpdGUsIHNwcml0ZX0gZnJvbSBcIi4vbGliL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4vbGliL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge3Nwcml0ZV9yZW5kZXJlcixyZWN0X3JlbmRlcmVyLCBzdHJva2VkX3JlY3RfcmVuZGVyZXIsIGh1ZF90ZXh0X3JlbmRlcmVyLCBDYW1lcmEsIHRleHRfcmVuZGVyZXJ9IGZyb20gXCIuL2xpYi9yZW5kZXJcIjtcclxuaW1wb3J0IHtIVUR9IGZyb20gXCIuL2xpYi9odWRcIjtcclxuaW1wb3J0IHtFeGVjdXRlUmVwZWF0QmluZHMsZGVidWdfYmluZHMsYnR5cGUsZXhlY190eXBlLCBQb2xsX01vdXNlLCBCaW5kLCBoZWxkX2tleXN9IGZyb20gXCIuL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQge2luaXRfY2xpY2tfaGFuZGxlcn0gZnJvbSBcIi4vbGliL2NvbnRyb2xzXCI7XHJcblxyXG5cclxubGV0IGNhbnZhc19lbGVtZW50OkhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmxldCBjb250ZXh0OkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhc19lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcblxyXG5sZXQgc2NyZWVuX3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmxldCBzY3JlZW5faGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxubGV0IHZ3aWR0aCA9IGNhbnZhc19lbGVtZW50LndpZHRoO1xyXG5sZXQgdmhlaWdodCA9IGNhbnZhc19lbGVtZW50LmhlaWdodDtcclxuXHJcblxyXG4vL0hvdyBvZnRlbiB0aGUgZ2FtZSBsb2dpYyBsb29wIHNob3VsZCBydW4sIGluIG1pbGxpc2Vjb25kc1xyXG5sZXQgbG9naWNfbG9vcF9pbnRlcnZhbDpudW1iZXIgPSAxMDAwLzYwOyAgXHJcblxyXG5sZXQgbGFzdF90aW1lID0gbmV3IERhdGUoKTtcclxuXHJcbmxldCBsYXN0X3JlbmRlcl90aW1lID0gMDtcclxuXHJcbmludGVyZmFjZSBkaW1lbnNpb25ze1xyXG4gIGhlaWdodDpudW1iZXIsXHJcbiAgd2lkdGg6bnVtYmVyXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0U2NyZWVuRGltZW5zaW9ucyAoKTpkaW1lbnNpb25ze1xyXG4gIHJldHVybih7XHJcbiAgICB3aWR0aDpzY3JlZW5fd2lkdGgsXHJcbiAgICBoZWlnaHQ6c2NyZWVuX2hlaWdodFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRWaWV3cG9ydERpbWVuc2lvbnMgKCk6ZGltZW5zaW9uc3tcclxuICByZXR1cm4oe1xyXG4gICAgaGVpZ2h0OmNhbnZhc19lbGVtZW50LmhlaWdodCxcclxuICAgIHdpZHRoOmNhbnZhc19lbGVtZW50LndpZHRoXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGxldCB2aWV3cG9ydCA9IHtcclxuICBoZWlnaHQ6R2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0LFxyXG4gIHdpZHRoOkdldFZpZXdwb3J0RGltZW5zaW9ucygpLndpZHRoXHJcbn1cclxuXHJcbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcclxuICB2aWV3cG9ydC5oZWlnaHQgPSBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHRcclxuICB2aWV3cG9ydC53aWR0aCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLndpZHRoXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWJ1Zyh4OmJvb2xlYW4pe1xyXG4gIERFQlVHID0geDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBhdXNlZCh4OmJvb2xlYW4pe1xyXG4gIFBBVVNFRCA9IHg7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJfY29sbGlzaW9uX2JveCA9IChhOmNvbGxpc2lvbl9ib3gpID0+IHtcclxuICBib3hlcy5wdXNoKGEpO1xyXG59XHJcblxyXG5sZXQgYm94ZXM6QXJyYXk8Y29sbGlzaW9uX2JveD4gPSBbXTtcclxuXHJcbmV4cG9ydCBsZXQgZGVlcCA9IChhOmFueSkgPT57XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYSkpO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgZGVidWdfdmFyc3tcclxuICB0YXJnZXQ6SFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgY2FtZXJhOkNhbWVyYSxcclxuICBsYXN0X2NsaWNrZWQ6SFRNTEVsZW1lbnQsXHJcbiAgc2VsZWN0ZWRfZWxlbWVudDpvYmo8dW5rbm93bj4sXHJcbiAgc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQ6cG9zaXRpb24sXHJcbiAgcm90YXRpb25fZWxlbWVudDpvYmo8dW5rbm93bj4sXHJcbiAgbWlkZGxlX3Bvc2l0aW9uOnBvc2l0aW9uXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgREVCVUdfdjpkZWJ1Z192YXJzO1xyXG5cclxuXHJcblxyXG5pbnRlcmZhY2UgZ2FtZV9zdGF0ZTxUPntcclxuICBsb2dpYzpudW1iZXIsXHJcbiAgY29udGV4dDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgY3VycmVudF9yb29tOnJvb208dW5rbm93bj4sXHJcbiAgY2FtZXJhczpBcnJheTxDYW1lcmE+LFxyXG4gIGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudCxcclxuICBnYW1lOlRcclxufVxyXG5cclxuZnVuY3Rpb24gZGVidWdfc3RhdGVmKHQ6bnVtYmVyKXtcclxuICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKERFQlVHX3YudGFyZ2V0LERFQlVHX3YuY2FtZXJhKTtcclxuICBpZihERUJVR192LnNlbGVjdGVkX2VsZW1lbnQpe1xyXG4gICAgbGV0IHN0ID0gREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50LnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgc3QucG9zaXRpb24ueCA9IG1vdXNlLnggLSBERUJVR192LnNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0LngsXHJcbiAgICBzdC5wb3NpdGlvbi55ID0gbW91c2UueSAtIERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQueVxyXG4gIH1cclxuICBpZihERUJVR192LnJvdGF0aW9uX2VsZW1lbnQpe1xyXG4gICAgREVCVUdfdi5yb3RhdGlvbl9lbGVtZW50LnJvdGF0aW9uID0gREVCVUdfdi5yb3RhdGlvbl9lbGVtZW50LmFuZ2xlVG93YXJkc1BvaW50KG1vdXNlKTtcclxuICB9XHJcbiAgaWYoREVCVUdfdi5taWRkbGVfcG9zaXRpb24pe1xyXG4gICBsZXQgZGlmZl95ID0gbW91c2UueSAtIERFQlVHX3YubWlkZGxlX3Bvc2l0aW9uLnk7XHJcbiAgIGxldCBkaWZmX3ggPSBtb3VzZS54IC0gREVCVUdfdi5taWRkbGVfcG9zaXRpb24ueDtcclxuICAgIERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggPSBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgLTEgKiBkaWZmX3g7XHJcbiAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ID0gREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSArIC0xICogZGlmZl95O1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGxldCByb29tczphbnlbXSA9IFtdO1xyXG5leHBvcnQgbGV0IG9iamVjdHM6YW55W107XHJcblxyXG5leHBvcnQgY2xhc3MgZ2FtZTxUPntcclxuICBzdGF0ZTpnYW1lX3N0YXRlPFQ+O1xyXG4gIGNvbnRleHQ6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIG9mZnNjcmVlbl9jYW52YXM6SFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgb2Zmc2NyZWVuX2NvbnRleHQ6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIHByb3RvdHlwZXM6QXJyYXk8b2JqPHVua25vd24+PiA9IFtdO1xyXG4gIHJvb21zOkFycmF5PGFueT4gPSBbXTtcclxuICBjb25zdHJ1Y3RvcihjdHg6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJELGluaXRfc3RhdGU6VCxpbml0OmFueSl7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjYW52YXM6Y2FudmFzX2VsZW1lbnQsXHJcbiAgICAgIGxvZ2ljOnVuZGVmaW5lZCxcclxuICAgICAgY29udGV4dDpjdHgsXHJcbiAgICAgIGNhbWVyYXM6W1xyXG4gICAgICBdLFxyXG4gICAgICBjdXJyZW50X3Jvb206IHVuZGVmaW5lZCxcclxuICAgICAgZ2FtZTppbml0X3N0YXRlXHJcbiAgICB9XHJcbiAgICB0aGlzLm9mZnNjcmVlbl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dCA9IHRoaXMub2Zmc2NyZWVuX2NhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgaWYgKERFQlVHKSB7XHJcbiAgICAgIERFQlVHX3YgPSB7XHJcbiAgICAgICAgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnX3RhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcclxuICAgICAgICBjYW1lcmE6IG5ldyBDYW1lcmEoe1xyXG4gICAgICAgICAgeDowLFxyXG4gICAgICAgICAgeTowLFxyXG4gICAgICAgICAgZGltZW5zaW9uczp7XHJcbiAgICAgICAgICAgIGhlaWdodDp2aWV3cG9ydC5oZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOnZpZXdwb3J0LndpZHRoXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2NhbGluZzoxLFxyXG4gICAgICAgICAgZGVidWc6dHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAse1xyXG4gICAgICAgICAgeDoxLFxyXG4gICAgICAgICAgeTowLFxyXG4gICAgICAgICAgd2lkdGg6MSxcclxuICAgICAgICAgIGhlaWdodDoxXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbGFzdF9jbGlja2VkOnVuZGVmaW5lZCxcclxuICAgICAgICBzZWxlY3RlZF9lbGVtZW50OnVuZGVmaW5lZCxcclxuICAgICAgICBzZWxlY3RlZF9lbGVtZW50X29mZnNldDp1bmRlZmluZWQsXHJcbiAgICAgICAgcm90YXRpb25fZWxlbWVudDp1bmRlZmluZWQsXHJcbiAgICAgICAgbWlkZGxlX3Bvc2l0aW9uOnVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIm1vdXNlMGRvd25cIixcclxuICAgICAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgICAgIGlkOjAsXHJcbiAgICAgICAgZnVuY3Rpb246KCk9PntcclxuICAgICAgICAgIGlmKERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudCl7XHJcbiAgICAgICAgICAgIERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKERFQlVHX3YudGFyZ2V0LERFQlVHX3YuY2FtZXJhKTtcclxuICAgICAgICAgICAgbGV0IGNsaWNrZWQgPSB0aGlzLmdldFJvb20oKS5jaGVja19vYmplY3RzKHtcclxuICAgICAgICAgICAgICB4Om1vdXNlLngsXHJcbiAgICAgICAgICAgICAgeTptb3VzZS55LFxyXG4gICAgICAgICAgICAgIGhlaWdodDoxLFxyXG4gICAgICAgICAgICAgIHdpZHRoOjFcclxuICAgICAgICAgICAgfSlbMF1cclxuICAgICAgICAgICAgaWYoY2xpY2tlZCl7XHJcbiAgICAgICAgICAgICAgREVCVUdfdi5zZWxlY3RlZF9lbGVtZW50ID0gY2xpY2tlZDtcclxuICAgICAgICAgICAgICBERUJVR192LnNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0ID0ge1xyXG4gICAgICAgICAgICAgICAgeDogbW91c2UueCAtICg8b2JqX3N0YXRlPmNsaWNrZWQuc3RhdGUpLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICB5OiBtb3VzZS55IC0gKDxvYmpfc3RhdGU+Y2xpY2tlZC5zdGF0ZSkucG9zaXRpb24ueVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgICAgICBjYW1lcmE6REVCVUdfdi5jYW1lcmFcclxuICAgICAgfSk7XHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIm1vdXNlMXVwXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDo1LFxyXG4gICAgICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgICAgICBERUJVR192Lm1pZGRsZV9wb3NpdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2UsXHJcbiAgICAgICAgY2FtZXJhOkRFQlVHX3YuY2FtZXJhXHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJtb3VzZTFkb3duXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDo2LFxyXG4gICAgICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKERFQlVHX3YudGFyZ2V0LERFQlVHX3YuY2FtZXJhKTtcclxuICAgICAgICAgIERFQlVHX3YubWlkZGxlX3Bvc2l0aW9uID0gbW91c2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgICAgIGNhbWVyYTpERUJVR192LmNhbWVyYVxyXG4gICAgICB9KTtcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwibW91c2UwdXBcIixcclxuICAgICAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgZnVuY3Rpb246KCk9PntcclxuICAgICAgICAgIERFQlVHX3Yuc2VsZWN0ZWRfZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2UsXHJcbiAgICAgICAgY2FtZXJhOkRFQlVHX3YuY2FtZXJhXHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJtb3VzZTJkb3duXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDozLFxyXG4gICAgICAgIGZ1bmN0aW9uOigpPT57XHJcbiAgICAgICAgICBpZihERUJVR192LnJvdGF0aW9uX2VsZW1lbnQpe1xyXG4gICAgICAgICAgICBERUJVR192LnJvdGF0aW9uX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShERUJVR192LnRhcmdldCxERUJVR192LmNhbWVyYSk7XHJcbiAgICAgICAgICAgIGxldCBjbGlja2VkID0gdGhpcy5nZXRSb29tKCkuY2hlY2tfb2JqZWN0cyh7XHJcbiAgICAgICAgICAgICAgeDptb3VzZS54LFxyXG4gICAgICAgICAgICAgIHk6bW91c2UueSxcclxuICAgICAgICAgICAgICBoZWlnaHQ6MSxcclxuICAgICAgICAgICAgICB3aWR0aDoxXHJcbiAgICAgICAgICAgIH0pWzBdXHJcbiAgICAgICAgICAgIGlmKGNsaWNrZWQpe1xyXG4gICAgICAgICAgICAgIERFQlVHX3Yucm90YXRpb25fZWxlbWVudCA9IGNsaWNrZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2UsXHJcbiAgICAgICAgY2FtZXJhOkRFQlVHX3YuY2FtZXJhXHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJtb3VzZTJ1cFwiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgICAgaWQ6NCxcclxuICAgICAgICBmdW5jdGlvbjooKT0+e1xyXG4gICAgICAgICAgREVCVUdfdi5yb3RhdGlvbl9lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZSxcclxuICAgICAgICBjYW1lcmE6REVCVUdfdi5jYW1lcmFcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgbGVmdF9mdW5jID0gKCk9PntcclxuICAgICAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDE6MDtcclxuICAgICAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICAgICAgREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggLSAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMS9ERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCByaWdodF9mdW5jID0gKCk9PntcclxuICAgICAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDE6MDtcclxuICAgICAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICAgICAgREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMS9ERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBkb3duX2Z1bmMgPSAoKT0+e1xyXG4gICAgICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMTowO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSAmJiBERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICAgICAgREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgLSAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMS9ERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCB1cF9mdW5jID0gKCk9PntcclxuICAgICAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDE6MDtcclxuICAgICAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICAgICAgREVCVUdfdi5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgKyAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMS9ERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBzY3JvbGxfdXAgPSAoKT0+e1xyXG4gICAgICAgIGlmKERFQlVHX3YubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgICAgICBERUJVR192LmNhbWVyYS5zdGF0ZS5zY2FsaW5nID0gREVCVUdfdi5jYW1lcmEuc3RhdGUuc2NhbGluZyArIDAuMDU7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHNhdmVfZnVuYyA9ICgpPT57XHJcbiAgICAgICAgbGV0IGN0cmxfaGVsZCA9IGhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdO1xyXG4gICAgICAgIGlmKGN0cmxfaGVsZCAmJiBQQVVTRUQpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTQVZFXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGN0cmxfaGVsZCAmJiAhUEFVU0VEKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicGF1c2UgdG8gZW5hYmxlIHNhdmluZy5cIilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHNjcm9sbF9kb3duID0gKCk9PntcclxuICAgICAgICBpZihERUJVR192Lmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiICYmIERFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPiAwLjA1KVxyXG4gICAgICAgICAgREVCVUdfdi5jYW1lcmEuc3RhdGUuc2NhbGluZyA9IERFQlVHX3YuY2FtZXJhLnN0YXRlLnNjYWxpbmcgLSAwLjA1O1xyXG4gICAgICB9XHJcbiAgICAgIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAgICAgIGtleTpcIktleUFcIixcclxuICAgICAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgICAgIGlkOkJpbmQoXCJLZXlBXCIsbGVmdF9mdW5jLGV4ZWNfdHlwZS5yZXBlYXQsMSksXHJcbiAgICAgICAgZnVuY3Rpb246bGVmdF9mdW5jLFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLnJlcGVhdFxyXG4gICAgICB9KVxyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJLZXlEXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5rZXlib2FyZCxcclxuICAgICAgICBpZDpCaW5kKFwiS2V5RFwiLHJpZ2h0X2Z1bmMsZXhlY190eXBlLnJlcGVhdCwxKSxcclxuICAgICAgICBmdW5jdGlvbjpyaWdodF9mdW5jLFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLnJlcGVhdFxyXG4gICAgICB9KVxyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJLZXlXXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5rZXlib2FyZCxcclxuICAgICAgICBpZDpCaW5kKFwiS2V5V1wiLHVwX2Z1bmMsZXhlY190eXBlLnJlcGVhdCwxKSxcclxuICAgICAgICBmdW5jdGlvbjp1cF9mdW5jLFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLnJlcGVhdFxyXG4gICAgICB9KVxyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJLZXlTXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5rZXlib2FyZCxcclxuICAgICAgICBpZDpCaW5kKFwiS2V5U1wiLGRvd25fZnVuYyxleGVjX3R5cGUucmVwZWF0LDEpLFxyXG4gICAgICAgIGZ1bmN0aW9uOmRvd25fZnVuYyxcclxuICAgICAgICBleGVjdXRlOmV4ZWNfdHlwZS5yZXBlYXRcclxuICAgICAgfSlcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5Olwic2Nyb2xsdXBcIixcclxuICAgICAgICB0eXBlOmJ0eXBlLm1vdXNlLFxyXG4gICAgICAgIGlkOkJpbmQoXCJzY3JvbGx1cFwiLHNjcm9sbF91cCxleGVjX3R5cGUub25jZSwxKSxcclxuICAgICAgICBmdW5jdGlvbjpzY3JvbGxfdXAsXHJcbiAgICAgICAgZXhlY3V0ZTpleGVjX3R5cGUub25jZVxyXG4gICAgICB9KVxyXG4gICAgICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgICAgICBrZXk6XCJzY3JvbGxkb3duXCIsXHJcbiAgICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgICBpZDpCaW5kKFwic2Nyb2xsZG93blwiLHNjcm9sbF9kb3duLGV4ZWNfdHlwZS5vbmNlLDEpLFxyXG4gICAgICAgIGZ1bmN0aW9uOnNjcm9sbF9kb3duLFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2VcclxuICAgICAgfSlcclxuICAgICAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICAgICAga2V5OlwiS2V5U1wiLFxyXG4gICAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgICAgaWQ6QmluZChcIktleVNcIixzYXZlX2Z1bmMsZXhlY190eXBlLm9uY2UsMSksXHJcbiAgICAgICAgZnVuY3Rpb246c2F2ZV9mdW5jLFxyXG4gICAgICAgIGV4ZWN1dGU6ZXhlY190eXBlLm9uY2VcclxuICAgICAgfSlcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xyXG4gICAgICAgIGlmKGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xyXG4gICAgICAgICAgREVCVUdfdi5sYXN0X2NsaWNrZWQgPSBlLnRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF1c2VfYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xyXG4gICAgICAgIFBBVVNFRCA9ICFQQVVTRUQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgIGlmKHRoaXMuZ2V0Um9vbSgpKXtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlZigwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sMTYuNjYpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICBpbml0KHRoaXMpO1xyXG4gIH1cclxuICByZW5kZXIodDpudW1iZXIpe1xyXG4gICAgbGV0IHRpbWUgPSB0IC0gbGFzdF9yZW5kZXJfdGltZVxyXG4gICAgbGFzdF9yZW5kZXJfdGltZSA9IHQ7XHJcbiAgICBsZXQgYWxsX2NhbWVyYXMgPSB0aGlzLnN0YXRlLmNhbWVyYXM7XHJcbiAgICBsZXQgZGVidWdfaW5kZXggPSAtMTtcclxuICAgIGlmKERFQlVHKXtcclxuICAgICAgYWxsX2NhbWVyYXMgPSBbLi4uYWxsX2NhbWVyYXMsREVCVUdfdi5jYW1lcmFdXHJcbiAgICAgIGRlYnVnX2luZGV4ID0gYWxsX2NhbWVyYXMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgYSA9IDA7YSA8ICBhbGxfY2FtZXJhcy5sZW5ndGg7YSsrKXtcclxuICAgICAgbGV0IGNhbWVyYSA9IGFsbF9jYW1lcmFzW2FdO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jYW52YXMuaGVpZ2h0ID0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0O1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jYW52YXMud2lkdGggPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aDtcclxuICAgICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dC5jbGVhclJlY3QoMCwwLGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoLGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCk7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NvbnRleHQuZmlsbFN0eWxlPVwiYmxhY2tcIjtcclxuICAgICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dC5maWxsUmVjdCgwLDAsY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgsY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgbGV0IGNhbWVyYV9ib3ggPSB7XHJcbiAgICAgICAgeDpjYW1lcmEuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOmNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpLFxyXG4gICAgICAgIGhlaWdodDpjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZylcclxuICAgICAgfTtcclxuICAgICAgbGV0IHBhcnRpY2xlX2NvbGxpZGVzID0gdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uY2hlY2tfb2JqZWN0cyhjYW1lcmFfYm94LFtdLHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnBhcnRpY2xlc19hcnIpO1xyXG4gICAgICBsZXQgY2FtZXJhX2NvbGxpZGVycyA9IFsuLi50aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5jaGVja19vYmplY3RzKGNhbWVyYV9ib3gpLC4uLnBhcnRpY2xlX2NvbGxpZGVzXTtcclxuICAgICAgbGV0IHJlbmRlcl9hcmdzID0ge1xyXG4gICAgICAgIGNvbnRleHQ6dGhpcy5vZmZzY3JlZW5fY29udGV4dCxcclxuICAgICAgICBjYW1lcmE6Y2FtZXJhLFxyXG4gICAgICB9O1xyXG4gICAgICBzcHJpdGVfcmVuZGVyZXIocmVuZGVyX2FyZ3Mse1xyXG4gICAgICAgIHNwcml0ZTp0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5yZW5kZXJmKHRpbWUpLFxyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICByb3RhdGlvbjogMCxcclxuICAgICAgICBzY2FsZToxXHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgaGl0Ym94ZXM6Y29sbGlzaW9uX2JveFtdID0gW107XHJcbiAgICAgIGZvciAobGV0IGEgb2YgY2FtZXJhX2NvbGxpZGVycy5maWx0ZXIoKGIpID0+IGIucmVuZGVyKSkge1xyXG4gICAgICAgIGxldCByZW5kZXJlZCA9IGEucmVuZGVyX3RyYWNrKHQpO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlbmRlcmVkKSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgcG9zaXRpb25lZF9zcHJpdGUgb2YgcmVuZGVyZWQpXHJcbiAgICAgICAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgICAgIHNwcml0ZTpwb3NpdGlvbmVkX3Nwcml0ZS5zcHJpdGUsXHJcbiAgICAgICAgICAgICAgeDogcG9zaXRpb25lZF9zcHJpdGUueCxcclxuICAgICAgICAgICAgICB5OiBwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgICAgICAgIHJvdGF0aW9uOiBhLnJvdGF0aW9uLFxyXG4gICAgICAgICAgICAgIHNjYWxlOmEuc2NhbGluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBsZXQgcG9zaXRpb25lZF9zcHJpdGUgPSByZW5kZXJlZCBhcyBwb3NpdGlvbmVkX3Nwcml0ZTtcclxuICAgICAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgICBzcHJpdGU6IHBvc2l0aW9uZWRfc3ByaXRlLnNwcml0ZSxcclxuICAgICAgICAgICAgeDogcG9zaXRpb25lZF9zcHJpdGUueCxcclxuICAgICAgICAgICAgeTogcG9zaXRpb25lZF9zcHJpdGUueSxcclxuICAgICAgICAgICAgcm90YXRpb246IGEucm90YXRpb24sXHJcbiAgICAgICAgICAgIHNjYWxlOmEuc2NhbGluZ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKERFQlVHICYmIGEuY29sbGlzaW9uKXtcclxuICAgICAgICAgIGhpdGJveGVzLnB1c2goLi4uYS5nZXRfYWxsX2NvbGxpc2lvbl9ib3hlcygpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBub2RlIG9mIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnRleHRfbm9kZXMpe1xyXG4gICAgICAgIHRleHRfcmVuZGVyZXIocmVuZGVyX2FyZ3Mse1xyXG4gICAgICAgICAgeDpub2RlLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICB5Om5vZGUuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICAgIGZvbnQ6bm9kZS5yZW5kZXJmKHQpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBpZihjYW1lcmEuaHVkKXtcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBjYW1lcmEuaHVkLmdyYXBoaWNfZWxlbWVudHM7XHJcbiAgICAgICAgbGV0IHRleHRfZWxlbWVudHMgPSBjYW1lcmEuaHVkLnRleHRfZWxlbWVudHM7XHJcbiAgICAgICAgZm9yKGxldCBhIG9mIGdyYXBoaWNzKXtcclxuICAgICAgICAgIGxldCByZW5kZXJlZCA9IGEucmVuZGVyX3RyYWNrKHQpO1xyXG4gICAgICAgICAgaWYoYS5yZW5kZXIpe1xyXG4gICAgICAgICAgICBmb3IobGV0IHBvc2l0aW9uZWRfc3ByaXRlIG9mIHJlbmRlcmVkKXtcclxuICAgICAgICAgICAgICBzcHJpdGVfcmVuZGVyZXIocmVuZGVyX2FyZ3Mse1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlOnBvc2l0aW9uZWRfc3ByaXRlLnNwcml0ZSxcclxuICAgICAgICAgICAgICAgIHg6cG9zaXRpb25lZF9zcHJpdGUueCxcclxuICAgICAgICAgICAgICAgIHk6cG9zaXRpb25lZF9zcHJpdGUueSxcclxuICAgICAgICAgICAgICAgIHJvdGF0aW9uOmEucm90YXRpb24sXHJcbiAgICAgICAgICAgICAgICBzY2FsZTphLnNjYWxpbmdcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3JlbmRlcl9hcmdzLmNvbnRleHQgPSB0aGlzLnN0YXRlLmNvbnRleHQ7XHJcbiAgICAgICAgZm9yKGxldCBhIG9mIHRleHRfZWxlbWVudHMpe1xyXG4gICAgICAgICAgbGV0IHN0ID0gYS5zdGF0ZTtcclxuICAgICAgICAgIGh1ZF90ZXh0X3JlbmRlcmVyKHJlbmRlcl9hcmdzLHtcclxuICAgICAgICAgICAgeDpzdC5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OnN0LnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIGZvbnQ6YS5yZW5kZXJmKHQpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoREVCVUcgJiYgY2FtZXJhLnN0YXRlLmRlYnVnKSB7XHJcbiAgICAgICAgbGV0IGJveDogY29sbGlzaW9uX2JveDtcclxuICAgICAgICBsZXQgYm94ZXNfY29weSA9IFsuLi5ib3hlc11cclxuICAgICAgICB3aGlsZShib3hlc19jb3B5Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgbGV0IGJveCA9IGJveGVzX2NvcHkucG9wKCk7XHJcbiAgICAgICAgICBsZXQgcmVjdCA9IHtcclxuICAgICAgICAgICAgd2lkdGg6Ym94LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6Ym94LmhlaWdodFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyKHRoaXMub2Zmc2NyZWVuX2NvbnRleHQscmVjdCxib3gueCxib3gueSxcIiNGRjAwMDBcIixjYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZShoaXRib3hlcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgIGxldCBib3ggPSBoaXRib3hlcy5wb3AoKTtcclxuICAgICAgICAgIGxldCByZWN0ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDpib3gud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDpib3guaGVpZ2h0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHJva2VkX3JlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCxyZWN0LGJveC54LGJveC55LFwiIzAwODAwMFwiLGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKGEgIT09IGRlYnVnX2luZGV4KXtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMub2Zmc2NyZWVuX2NhbnZhcyxjYW1lcmEuc3RhdGUudmlld3BvcnQueCxjYW1lcmEuc3RhdGUudmlld3BvcnQueSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBERUJVR192LnRhcmdldC5nZXRDb250ZXh0KFwiMmRcIikuZHJhd0ltYWdlKHRoaXMub2Zmc2NyZWVuX2NhbnZhcyxjYW1lcmEuc3RhdGUudmlld3BvcnQueCxjYW1lcmEuc3RhdGUudmlld3BvcnQueSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKERFQlVHKVxyXG4gICAgICBib3hlcyA9IFtdO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChhKT0+e3RoaXMucmVuZGVyKGEpfSk7IFxyXG4gIH1cclxuICBpbml0aWFsaXplKCl7XHJcbiAgICBpbml0X2NsaWNrX2hhbmRsZXIodGhpcyk7XHJcbiAgfVxyXG4gIHN0YXJ0X2xvZ2ljKGE6bnVtYmVyKXtcclxuICAgIHJldHVybiB3aW5kb3cuc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgaWYoIVBBVVNFRCl7XHJcbiAgICAgICAgbGV0IG5ld190aW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgdGltZV9zaW5jZSA9IG5ld190aW1lLmdldFRpbWUoKSAtIGxhc3RfdGltZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgbGFzdF90aW1lID0gbmV3X3RpbWU7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20pe1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uc3RhdGVmKHRpbWVfc2luY2UpO1xyXG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uaHVkKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uaHVkLnN0YXRlZih0aW1lX3NpbmNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEV4ZWN1dGVSZXBlYXRCaW5kcyhhKTtcclxuICAgIH0sYSk7XHJcbiAgfVxyXG4gIGdldFJvb20oKXtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbTtcclxuICB9XHJcbiAgYXN5bmMgbG9hZFJvb21TdHJpbmcoeDpzdHJpbmcpe1xyXG4gICAgY29uc29sZS5sb2coXCJjYWxsZWRcIik7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyb29tcykpO1xyXG4gICAgZm9yKGxldCBhIG9mIHJvb21zKXtcclxuICAgICAgY29uc29sZS5sb2coYS5jb25zdHJ1Y3Rvci5uYW1lKVxyXG4gICAgICBpZihhLmNvbnN0cnVjdG9yLm5hbWUgPT0geCl7XHJcbiAgICAgICAgdGhpcy5sb2FkUm9vbShuZXcgYSh0aGlzKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgbG9hZFJvb20oeDpyb29tPHVua25vd24+KXtcclxuICAgIFxyXG4gICAgeC5nYW1lID0gdGhpcztcclxuICAgIGlmKHRoaXMuc3RhdGUuY3VycmVudF9yb29tICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICB3aGlsZSh0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5vYmplY3RzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHNbMF0uZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tID0geDtcclxuICAgIGxldCBuZXdfcm9vbSA9IGF3YWl0IHgubG9hZCgpO1xyXG4gICAgeC5yZWdpc3Rlcl9jb250cm9scygpO1xyXG4gICAgeC5yZWdpc3RlclBhcnRpY2xlcygpO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5sb2dpYyAhPSB1bmRlZmluZWQpe1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUubG9naWMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZS5sb2dpYyA9IHRoaXMuc3RhcnRfbG9naWMobG9naWNfbG9vcF9pbnRlcnZhbClcclxuICAgIHRoaXMucmVuZGVyKDApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9