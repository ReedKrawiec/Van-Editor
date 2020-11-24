import { room, apply_gravity } from "../../../lib/room";
import { Gun, Goomba,Cursor, ControlledPlayer, Player } from "../../objects/goomba";
import { Box, VertBox } from "../../objects/box";
import { velocity_collision_check } from "../../../lib/collision";
import { gravity_obj, rotation_length } from "../../../lib/object";
import { Poll_Mouse, exec_type } from "../../../lib/controls";
import { HUD, Text } from "../../../lib/hud";
import { DEBUG, game, GetViewportDimensions, setDebug } from "../../../van";
import {Bullet, Rocket} from "../../objects/bullet";
import {Target} from "../../objects/target";
import {g} from "../../main";

interface overworld_i {
  player: gravity_obj<unknown>,
  paused: boolean,
  locked_bullet:Bullet
}

class Overworld_HUD extends HUD {
  constructor() {
    super();
    this.text_elements.push(new Text({
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
      if(x)
        return `Times Airshot:${x.state.times_airshot}`;
      return ""
    }));
    this.text_elements.push(new Text({
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
    }));
  }
}

class Height_HUD extends HUD{
  constructor(){
    super();
    this.text_elements.push(new Text({
      position: {
        x: 10,
        y: 600
      },
      size: 15,
      font: "Alata",
      color: "white",
      align:"left",
      scaling:1
    }, () => {
      let x = g.getRoom().getObjByTag("dummy")[0] as Goomba;
      if(x)
        return `Height:${Math.floor(x.state.position.y)}`;
      return ""
    }));
  }
}

export class Overworld extends room<overworld_i>{
  background_url = "./sprites/imD41l.jpg";
  objects:gravity_obj<unknown>[];
  prefabs = {
    "goomba":Goomba,
    "player":Player,
    "box":Box,
    "target":Target
  };
  constructor(game:game<unknown>) {
    super(game);
    this.state = {
      player: undefined,
      paused: false,
      locked_bullet:null
    };
    for(let a = 0;a<10;a++){
      this.objects.push(new VertBox({x:320,y:250 + a * 500},0));
      this.objects.push(new VertBox({x:900,y:250 + a * 500},0));
      
    }
    for(let a = 0;a < 100; a++){
      this.objects.push(new Box({x:700 + a * 500,y:0},0));
    }
    this.addItems([...new Player({x:700,y:150},0,{id:"player"}).combined_objects(), new Goomba({x:550,y:150},0),new Box({x:600,y:0},0),new Cursor("cursor")])
    game.state.cameras[0].hud = new Overworld_HUD();
    game.state.cameras[1].hud = new Height_HUD();
  }
  register_controls() {
    this.bindControl("Escape", exec_type.once, () => {
      this.game.state.cameras[0].state.debug = !this.game.state.cameras[0].state.debug;
      let player = this.getObj("player") as Goomba;
      player.collision = !player.collision;
      player.gravity = !player.gravity;
    })
    
    this.bindControl("mouse0down", exec_type.repeat,() => {
      let gun = this.getObj("gun") as Gun;
      if(gun){
        let muzzle = rotation_length(30,gun.state.rotation);
        let position = {
          x:gun.state.position.x + muzzle.x,
          y:gun.state.position.y + muzzle.y
        }
        let bullets = [];
        for(let a = 0;a < 1;a ++){
          bullets.push(new Rocket({x:position.x,y:position.y},gun.state.rotation));
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
    
    //console.log(this.objects);
    if (!this.state.paused) {
      for (let a = 0; a < this.objects.length; a++) {
        apply_gravity(this.objects[a], -1, -15);
        velocity_collision_check(this.objects[a], this.objects);
        this.objects[a].statef(time);
      }
      for(let particle of this.particles_arr){
        particle.statef(time);
      }
      for(let text_node of this.text_nodes){
        text_node.statef(time);
      }
      let player = this.getObj("player") as Goomba;
      let target = this.getObjByTag("dummy")[0] as Goomba;
      let cursor = this.getObj("cursor") as Cursor;
      let cameras = g.state.cameras;
      
      for(let cam of cameras){
        if(cam.hud){
          cam.hud.statef(time);
        }
      }
      
      if (player) {        
        cameras[0].x = player.state.position.x;
        cameras[0].y = player.state.position.y + (cameras[0].state.dimensions.height/2 - player.height/2);     
      }
      
      if(target){
        cameras[1].state.position.x = target.state.position.x;
        cameras[1].state.position.y = target.state.position.y;
      }
      
      if (cursor) {
        cursor.collision = false;
        cursor.gravity = false;
        let mouse = Poll_Mouse(this.game.state.canvas,this.game.state.cameras[0]);
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
