"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("../../lib/object");
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
//# sourceMappingURL=platformer_obj.js.map