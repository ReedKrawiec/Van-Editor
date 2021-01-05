import {piece,side,piece_type,piece_parameters} from "./abstract/piece";
import {obj_state, Vector} from "../../lib/state";

export class Queen extends piece{
  sprite_url = "./sprites/queen.png"
  constructor(state:obj_state,params:piece_parameters = piece.default_params){
    super(state,{
      side:params.side
    });
    this.state.type = piece_type.queen;
  }
  getAttacking():Array<Vector>{
    return this.attackDiagonal().concat(this.attackCardinal());
  }
}