import {piece,side,piece_type,piece_parameters} from "./abstract/piece";
import {obj_state, Vector} from "../../lib/state";
import {Board} from "../rooms/Board";
import {g} from "../main";

export class Rook extends piece{
  sprite_url = "./sprites/rook.png"
  constructor(state:obj_state,params:piece_parameters = piece.default_params){
    super(state,{
      side:params.side
    });
    this.state.type = piece_type.rook;
  }
  getAttacking():Array<Vector>{
    return this.attackCardinal();
  }
}