import {piece,side,piece_type,piece_parameters} from "./abstract/piece";
import {obj_state, Vector} from "../../lib/state";
import {g} from "../main";

export class Knight extends piece{
  sprite_url = "./sprites/knight.png"
  constructor(state:obj_state,params:piece_parameters = piece.default_params){
    super(state,{
      side:params.side
    });
    this.state.type = piece_type.knight;
  }
  getAttacking():Array<Vector>{
    let cords = this.getCords();
    let attacked:Array<Vector> = [];
    attacked.push({x:cords.x + 1,y:cords.y + 2});
    attacked.push({x:cords.x - 1,y:cords.y + 2});
    attacked.push({x:cords.x + 2,y:cords.y + 1});
    attacked.push({x:cords.x + 2,y:cords.y - 1});
    attacked.push({x:cords.x + 1,y:cords.y - 2});
    attacked.push({x:cords.x - 1,y:cords.y - 2});
    attacked.push({x:cords.x - 2,y:cords.y + 1});
    attacked.push({x:cords.x - 2,y:cords.y - 1});
    return(attacked.filter((x)=>x.x >= 0 && x.x < 8 && x.y >= 0 && x.y < 8));
  }
}