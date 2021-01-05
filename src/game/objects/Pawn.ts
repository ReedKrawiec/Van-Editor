import {piece,side,piece_type,piece_parameters} from "./abstract/piece";
import {obj_state, Vector} from "../../lib/state";
import {Board} from "../rooms/Board";
import {g} from "../main";

export class Pawn extends piece{
  sprite_url = "./sprites/pawn.png"
  constructor(state:obj_state,params:piece_parameters = piece.default_params){
    super(state,{
      side:params.side
    });
    this.state.type = piece_type.pawn;
  }
  getAttacking():Array<Vector>{
    let attacked:Array<Vector> = [];
    let cords = this.getCords();
    let room = g.getRoom() as Board;
    if(this.state.side == side.white){
      if(room.get_piece({x:cords.x,y:cords.y + 1}).length === 0){
        attacked.push({x:cords.x,y:cords.y + 1});
        if(!this.state.has_moved && room.get_piece({x:cords.x,y:cords.y + 2}).length === 0){
          attacked.push({x:cords.x,y:cords.y + 2});
        }
      }
      let left_cords:Vector = {x:cords.x- 1,y:cords.y + 1};
      let right_cords:Vector = {x:cords.x+ 1,y:cords.y + 1}; 
      let left = room.get_piece(left_cords);
      let right = room.get_piece(right_cords);
      let left_en = room.get_meta(left_cords,side.black);
      let right_en = room.get_meta(right_cords,side.black);
      if((cords.x - 1 >= 0) && ((left.length > 0 && left[0].state.side !== this.state.side) || (left_en && left_en.enpassent))){
        attacked.push(left_cords);
      }
      if((cords.x + 1 < 8) && ((right.length > 0 && right[0].state.side !== this.state.side) || (right_en && right_en.enpassent))){
        attacked.push(right_cords);
      }
    }
    else {
      if(room.get_piece({x:cords.x,y:cords.y - 1}).length === 0){
        attacked.push({x:cords.x,y:cords.y - 1});
        if(!this.state.has_moved && room.get_piece({x:cords.x,y:cords.y - 2}).length === 0){
          attacked.push({x:cords.x,y:cords.y - 2});
        }
      }
      let left_cords:Vector = {x:cords.x - 1,y:cords.y - 1};
      let right_cords:Vector = {x:cords.x+ 1,y:cords.y - 1};
      let left = room.get_piece(left_cords);
      let right = room.get_piece(right_cords);
      let left_en = room.get_meta(left_cords,side.white);
      let right_en = room.get_meta(right_cords,side.white);
      if((cords.x - 1 >= 0) && ((left.length > 0 && left[0].state.side !== this.state.side) || (left_en && left_en.enpassent))){
        attacked.push(left_cords);
      }
      if((cords.x + 1 < 8) && ((right.length > 0 && right[0].state.side !== this.state.side) || (right_en && right_en.enpassent))){
        attacked.push(right_cords);
      }
    }
    return attacked;
  }
}