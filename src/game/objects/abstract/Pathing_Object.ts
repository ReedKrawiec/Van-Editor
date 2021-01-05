
import { obj, rotation_length } from "../../../lib/object";
import { obj_state, Vector } from "../../../lib/state";
import { nav_mesh, Pathing_Room } from "../../rooms/abstract/Pathing_Room";
import { AStarFinder } from "astar-typescript";
import { Distance } from "../../../lib/math";
interface Pathing_Object_state extends obj_state {

}

interface Pathing_Object_parameters {

}

export class Pathing_Object extends obj {
  hasGoal: boolean = false;
  currentPath: Vector[];
  currentFullPath: Vector[];
  currentGoalPos: Vector;
  collision = false;
  speed: number = 1;
  posToCord(nav_mesh: nav_mesh, pos: Vector): Vector {
    let room = this.game.getRoom() as Pathing_Room<unknown>;
    let x = Math.floor((pos.x - nav_mesh.box.x + nav_mesh.box.width / 2) / nav_mesh.box.width * (nav_mesh.box.width / room.nav_node_diameter));
    let y = Math.floor((pos.y - nav_mesh.box.y + nav_mesh.box.height / 2) / nav_mesh.box.height * (nav_mesh.box.height / room.nav_node_diameter));
    return { x, y };
  }
  cordOnGrid(nav_mesh:nav_mesh, pos:Vector){
    return(pos.x >= 0 && pos.y >= 0 && pos.y < nav_mesh.grid.length && pos.x < nav_mesh.grid[0].length);
  }
  setGoal(pos: Vector) {
    let room = this.game.getRoom() as Pathing_Room<unknown>;
    if (room.nav_mesh) {
      let instance = new AStarFinder({
        grid: {
          matrix: room.nav_mesh.grid
        }
      });

      let start = this.posToCord(room.nav_mesh, this.state.position);
      let goal = this.posToCord(room.nav_mesh, pos);
      if(this.cordOnGrid(room.nav_mesh,start) && this.cordOnGrid(room.nav_mesh,goal)){
        let start_pos = {
          x: start.x * room.nav_node_diameter + room.nav_mesh.box.x - room.nav_mesh.box.width / 2,
          y: start.y * room.nav_node_diameter + room.nav_mesh.box.y - room.nav_mesh.box.height / 2
        }
        let bottom_left: Vector = {
          x: room.nav_mesh.box.x - room.nav_mesh.box.width / 2,
          y: room.nav_mesh.box.y - room.nav_mesh.box.height / 2
        }
        this.hasGoal = true;
        let raw_path = instance.findPath(start, goal);
        this.currentPath = raw_path.map((cord) => {
          return {
            x: bottom_left.x + room.nav_node_diameter * cord[0] + room.nav_node_diameter/2,
            y: bottom_left.y + room.nav_node_diameter * cord[1] + room.nav_node_diameter/2
          }
        });
        this.currentFullPath = Array.from(this.currentPath);
        this.currentGoalPos = start_pos;
      }
    }
  }
  statef(delta_time: number) {
    super.statef(delta_time);
    if (this.currentGoalPos) {
      let angle = this.angleTowardsPoint(this.currentGoalPos);
      let vel = rotation_length(this.speed, angle);
      this.state.velocity = {
        x:vel.x * delta_time/16.66,
        y:vel.y * delta_time/16.66
      };
      if (Distance(this.state.position,this.currentGoalPos) < this.speed) {
        if (this.currentPath.length > 1) {
          this.currentGoalPos = this.currentPath.shift();
        }
        else{
          this.hasGoal = false;
          this.currentGoalPos = undefined;
          this.currentFullPath = undefined;
          this.currentPath = undefined;
        }
        this.state.velocity = { x: 0, y: 0 };
      }
    }

  }
}
