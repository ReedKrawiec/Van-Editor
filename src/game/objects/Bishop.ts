import {piece,side,piece_type,piece_parameters} from "./abstract/piece";
import {obj_state, Vector} from "../../lib/state";

export class Bishop extends piece{
  sprite_url = "./sprites/bishop.png"
  constructor(state:obj_state,params:piece_parameters = piece.default_params){
    super(state,{
      side:params.side
    });
    this.state.type = piece_type.bishop;
  }
  getAttacking():Array<Vector>{
    return this.attackDiagonal();
  }
}