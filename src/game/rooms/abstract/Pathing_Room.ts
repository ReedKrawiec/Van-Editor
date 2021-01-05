

import { room } from "../../../lib/room";
import { game } from "../../../van";
import { state_config } from "../../../lib/room";
import {Vector} from "../../../lib/state";
import {obj} from "../../../lib/object";
import { collision_box, getEncompassingBox } from "../../../lib/collision";



function one_arr(height:number,width:number):number[][]{
  let mesh:number[][] = [];
  for(let a = 0;a < height;a++){
    mesh[a] = [];
    for(let b = 0;b < width;b++){
      mesh[a][b] = 1;
    }
  }
  return mesh;
}

export interface nav_mesh{
  box:collision_box,
  grid:number[][],
  objects:obj[]
}

export class Pathing_Room<T> extends room<T>{
  nav_node_diameter = 50;
  nav_mesh: nav_mesh;
  nav_recalculation_interval = 5000;
  floor_tag:string;
  private pathfind_counter = 0;

  computerNavMeshes(tag: string) {
    let room = this.game.getRoom();
    let floors = room.getObjByTag(tag);
    let coll_box = getEncompassingBox(floors);
    let width = coll_box.width / this.nav_node_diameter;
    let height = coll_box.height / this.nav_node_diameter;
    let colliders = room.checkCollisions(coll_box, [tag]);
    let bot_left: Vector = {
      x: coll_box.x - coll_box.width / 2,
      y: coll_box.y - coll_box.height / 2
    }

    let mesh: number[][] = one_arr(height, width);
    for (let a = 0; a < height; a++) {
      for (let b = 0; b < width; b++) {
        let small_col_box = {
          x: bot_left.x + b * this.nav_node_diameter + this.nav_node_diameter / 2,
          y: bot_left.y + a * this.nav_node_diameter + this.nav_node_diameter / 2,
          height: this.nav_node_diameter,
          width: this.nav_node_diameter
        }
        for(let floor of floors){
          if(floor.collidesWithBox(small_col_box) && room.checkCollisions(small_col_box,[],colliders).length == 0){
            mesh[a][b] = 0;
          }
        }
      }
    };
    this.nav_mesh = {
      grid:mesh,
      box:coll_box,
      objects:floors
    };
  }
  statef(time:number){
    if(this.floor_tag && this.pathfind_counter === 0){
      this.computerNavMeshes(this.floor_tag);
    }
    this.pathfind_counter += time;
    if(this.pathfind_counter > this.nav_recalculation_interval){
      this.pathfind_counter = 0;
    }
    super.statef(time);
  }

}

