import { room, applyGravity,object_state_config, state_config } from "../../lib/room";
import { Goomba } from "../objects/Goomba";
import { ControlledPlayer } from "../objects/ControlledPlayer";
import { Gun } from "../objects/Gun";
import { Player } from "../objects/Player";
import { Cursor } from "../objects/Cursor";
import { box } from "../objects/box";
import { VertBox } from "../objects/VertBox";
import { velocityCollisionCheck as velocityCollisionCheck } from "../../lib/collision";
import { gravity_obj, rotation_length } from "../../lib/object";
import { Poll_Mouse, exec_type } from "../../lib/controls";
import { HUD, Text } from "../../lib/hud";
import { DEBUG, game, GetViewportDimensions, setDebug,viewport } from "../../van";
import {bullet, Rocket} from "../objects/bullet";
import {g} from "../main";
import {Camera} from "../../lib/render";
import * as json from "./Overworld.json";
interface overworld_i {
  player: gravity_obj,
  paused: boolean,
  locked_bullet:bullet
}

class Overworld_HUD extends HUD {
  setTextElements(){
    return [new Text({
      position: {
        x: 10,
        y: GetViewportDimensions().height * 7/8
      },
      size: 44,
      font: "Alata",
      color: "white",
      align:"left",
      scaling:1
    }, () => {
      let x = g.getRoom().getObjByTag("dummy")[0] as Goomba;
      return `Times Airshot:${x.state.times_airshot}`;
    }),
    new Text({
      position: {
        x: 10,
        y: GetViewportDimensions().height * 6/8
      },
      size: 44,
      font: "Alata",
      color: "white",
      align: "left",
      scaling:1
    }, () => {
      let x = g.getRoom().getObjByTag("dummy")[0] as Goomba;
      if(x)
        return `Max Times Airshot:${Math.max(x.state.times_airshot,x.state.max_times_airshot)}`;
      return ""
    })];
  }
}

export class Overworld extends room<overworld_i>{
  background_url = "./sprites/imD41l.jpg";
  objects:gravity_obj[];
  constructor(game:game<unknown>) {
    super(game,json as unknown as state_config);
    
    this.state = {
      player: undefined,
      paused: false,
      locked_bullet:null
    };
    game.state.cameras = [
      new Camera({
        x:0,
        y:0,
        dimensions:{
          height:viewport.height,
          width:viewport.width * 4/5
        },
        scaling:0.5,
        debug:false
      }
      ,{
        x:1,
        y:0,
        width:0.8,
        height:1
      }),
      new Camera({
        x:0,
        y:0,
        dimensions:{
          width:viewport.width/5,
          height:viewport.height
        },
        scaling:0.2,
        debug:false
      },{
        x:viewport.width * 4/5,
        y:0,
        width:0.2,
        height:1
      })
    ]
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
    this.bindControl("Escape", exec_type.once, () => {
      this.game.state.cameras[0].state.debug = !this.game.state.cameras[0].state.debug;
      let player = this.getObj("player") as Goomba;
      player.collision = !player.collision;
      player.gravity = !player.gravity;
    })
    
    this.bindControl("mouse0down", exec_type.repeat,() => {
      let gun = this.getObjByTag("gun")[0] as Gun;
      if(gun){
        let muzzle = rotation_length(30,gun.state.rotation);
        let position = {
          x:gun.state.position.x + muzzle.x,
          y:gun.state.position.y + muzzle.y
        }
        let bullets:bullet[] = [];
        for(let a = 0;a < 1;a ++){
          bullets.push(new Rocket({
            position:{x:position.x,y:position.y},
            velocity:{x:0,y:0},
            rotation:gun.state.rotation,
            scaling:{width:1,height:1}
          },gun.state.rotation));
        }
        
        if(this.state.locked_bullet == null)
          this.state.locked_bullet = bullets[0];
        this.addItems(bullets);
      }
    },400)
  }
  registerParticles(){
    this.particles["smoke"] = {
      sprite:"./sprites/folder/smoke.png",
      height:64,
      width:64
    };
    this.particles["explosion"] = {
      sprite:"./sprites/folder/explosion.png",
      height:128,
      width:128
    }
  }
  statef(time: number) {
    
    if (!this.state.paused) {
      for (let a = 0; a < this.objects.length; a++) {
        applyGravity(this.objects[a], -1 * time/16, -15);
      }
      let player = this.getObjByTag("player")[0] as Goomba;
      let target = this.getObjByTag("dummy")[0] as Goomba;
      let cursor = this.getObjByTag("Cursor")[0] as Cursor;
      let cameras = g.state.cameras;
      
      if (player) {        
        cameras[0].state.position.x = player.state.position.x;
        cameras[0].state.position.y = player.state.position.y + (cameras[0].state.dimensions.height/2 - player.height/2);     
      }
      
      if(target){
        cameras[1].state.position.x = target.state.position.x;
        cameras[1].state.position.y = target.state.position.y;
      }
      
      if (cursor) {
        cursor.collision = false;
        cursor.gravity = false;
        let mouse = Poll_Mouse(this.game.state.cameras[0]);
        if(mouse){
          
          cursor.state.position.x = mouse.x;
          cursor.state.position.y = mouse.y;
        }
      }
      
    }
    super.statef(time);
  }

}
