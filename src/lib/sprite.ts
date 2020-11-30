import { obj } from "./object";
import { obj_state, position, dimensions} from "./state";
import {getRandInt} from "./rand";
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

interface Particle_i{
  lifetime:number;
  position:{
    x:number,
    y:number
  },
  velocity:{
    x:number,
    y:number
  }
}

export class Particle extends obj<Particle_i>{
  collision = false;
  random_range:number;
  max_lifetime:number;
  selected_sprite:sprite;
  constructor(part:particle_entry,pos:position,lifetime:number,random_range:number){
    super(pos);
    this.state = {
      lifetime:0,
      position:{
        x:pos.x + getRandInt(-random_range,random_range),
        y:pos.y + getRandInt(-random_range,random_range)
      },
      velocity:{
        x:0,
        y:0
      }
    };
    this.sprite_url = part.sprite;
    this.height = part.height;
    this.width = part.width;
    this.max_lifetime = lifetime;
    this.random_range = random_range;
  }
  delete(){
    let room = this.game.getRoom();
    room.deleteItem(this.id,room.particles_arr);
  }
  statef(time:number){
    this.state.lifetime += time;
    if(this.state.lifetime > this.max_lifetime){
      this.delete();
    }
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
      sprites[b].push({
        sprite_sheet,
        left:a,
        top:b * sprite_height,
        sprite_height,
        sprite_width,
        opacity:1
      })
    }
  }
  return sprites;
}

