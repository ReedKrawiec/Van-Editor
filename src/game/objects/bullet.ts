import {platformer_obj, plat_state} from "./abstract/platformer_obj";
import {obj_state} from "../../lib/state";
import { exec_type } from "../../lib/controls";
import {rotation_length, obj} from "../../lib/object";
import { Goomba } from "./Goomba";
import {g} from "../main";

interface bullet_state extends obj_state{
  rotation:number,
  distance:number,
  speed:number,
  damage:number
}

interface position{
  x:number,
  y:number
}

interface bullet_parameters{

}

export class bullet extends obj{
  sprite_url = "./sprites/bullet.png";
  height = 20;
  width = 10;
  gravity = false;
  max_distance = 2000;
  tags = ["bullet"];
  state:bullet_state;
  constructor(state:obj_state,params:bullet_parameters){
    super(state,params);
    this.state.damage = 5;
    this.state.distance = 0
  }
  statef(time:number){
    this.state.velocity = rotation_length(this.state.speed,this.state.rotation);
    this.state.distance += this.state.speed;
    if(this.state.distance > this.max_distance){
      this.delete();
    }
  }
  registerControls(){

  }
}

export class Rocket extends bullet{
  sprite_url = "./sprites/folder/rocket.png";
  height = 67;
  width = 16;
  particle_timer = 0;
  particle_frequency = 5;
  max_distance = 5000;
  tags = ["Rocket"]
  hitbox = {
    x_offset:0,
    y_offset:0,
    width:16,
    height:16
  }
  constructor(state:obj_state,params:bullet_parameters){
    super(state,params);
    this.state.speed = 15;
    this.state.damage = 20;
  }
  registerAudio(){
    this.audio.add("explosion","./sounds/explosion2.mp3");
  }
  statef(time:number){
    super.statef(time);
    if(this.particle_timer == 0){
      let offset = rotation_length(30,this.state.rotation + 180);
      this.emitParticle("smoke",offset, 400, 16);
    }
    this.particle_timer += time;
    if(this.particle_timer > this.particle_frequency){
     this.particle_timer = 0; 
    }
    let room = g.state.current_room;
    let collisions = room.checkCollisions(this.getFullCollisionBox(),["gun","player"]);
    if(collisions.length > 0){
      for(let collision of collisions){
        let st = collision.state as unknown as plat_state;
        if((<platformer_obj>collision).state.health){
          st.health -= this.state.damage;
        }
        if(collision.tags.indexOf("dummy") > -1){
          let dummy = collision as Goomba;
          if(dummy.state.jumping){
            dummy.state.times_airshot++;
          }
        }
      }
      this.state.distance = this.max_distance;
      this.delete();
      let explosion_collisions = room.checkCollisions({
        x:this.state.position.x,
        y:this.state.position.y,
        width:256,
        height:256
      },["static"])
      for(let collider of explosion_collisions){
        let distance = this.distance(collider);
        let multiplyer = 1 - distance/300;
        if(multiplyer < 0)
          multiplyer = 0;
        
        let o_state = collider.state as obj_state;
        let velocities = rotation_length(multiplyer * 100, this.angleTowards(collider));
        o_state.velocity.x += velocities.x * time/16;
        o_state.velocity.y += velocities.y * time/16;
      }
      this.emitParticle("explosion",{x:0,y:0},500,0);
      this.audio.play("explosion",0.2);
    }
  }
}