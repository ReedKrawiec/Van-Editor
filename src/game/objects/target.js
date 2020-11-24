"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sprite_1 = require("../../lib/sprite");
const platformer_obj_1 = require("./platformer_obj");
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
//# sourceMappingURL=target.js.map