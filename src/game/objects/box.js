"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platformer_obj_1 = require("./platformer_obj");
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
//# sourceMappingURL=box.js.map