import { obj } from "./object";
import { obj_state, Vector, dimensions} from "./state";
import {getRandInt,Vec} from "./math";
import {particle_entry} from "./room";

export interface sprite{
  sprite_sheet:HTMLImageElement,
  left:number,
  top:number,
  sprite_width:number,
  sprite_height:number,
  opacity:number
}

export interface positioned_sprite{
  sprite:sprite,
  x:number,
  y:number
}

interface Particle_i extends obj_state{
  lifetime:number;
}

export class Particle extends obj{
  collision = false;
  random_range:number;
  max_lifetime:number;
  state:Particle_i;
  selected_sprite:sprite;
  constructor(part:particle_entry,state:obj_state,lifetime:number){
    super(state);
    this.state.position = Vec.create(this.state.position.x,this.state.position.y);
    this.state.lifetime = 0;
    this.sprite_url = part.sprite;
    this.height = part.height;
    this.width = part.width;
    this.max_lifetime = lifetime;
  }
  statef(time:number){
    this.state.lifetime += time;
    if(this.state.lifetime > this.max_lifetime){
      this.delete();
    }
  }
  delete(){
    let room = this.game.getRoom();
    room.deleteItem(this.id,room.particles_arr);
  }
  renderf(time:number):positioned_sprite{
    if(!this.selected_sprite){
      let sprites = sprite_gen(this.sprite_sheet,this.width,this.height)
      let random_row = getRandInt(0,sprites.length);
      let random_col = getRandInt(0,sprites[random_row].length);
      this.selected_sprite = sprites[random_row][random_col];
    }
    this.selected_sprite.opacity = 1 - this.state.lifetime/this.max_lifetime;
    return{
      x:this.state.position.x,
      y:this.state.position.y,
      sprite:this.selected_sprite 
    }
  }
}

export function sprite_gen(sprite_sheet:HTMLImageElement,sprite_width:number,sprite_height:number):Array<Array<sprite>>{
  let width = sprite_sheet.width;
  let height = sprite_sheet.height;
  let sprites:Array<Array<sprite>> = [];
  for(let b = 0; b < height;b += sprite_height){
    sprites.push([]);
    for(let a = 0; a < width;a += sprite_width){
      sprites[b/sprite_height].push({
        sprite_sheet,
        left:a,
        top:b,
        sprite_height,
        sprite_width,
        opacity:1
      })
    }
  }
  return sprites;
}

