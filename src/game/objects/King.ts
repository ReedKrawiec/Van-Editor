import {piece,side,piece_type,piece_parameters} from "./abstract/piece";
import {obj_state, Vector} from "../../lib/state";
import {Board} from "../rooms/Board";
import {g} from "../main";

export class King extends piece{
  sprite_url = "./sprites/king.png"
  constructor(state:obj_state,params:piece_parameters = piece.default_params){
    super(state,{
      side:params.side
    });
    this.state.type = piece_type.king;
  }
  check_left_castle(room:Board,cords:Vector){
    if(!this.state.has_moved && room.get_piece({x:cords.x - 1,y:cords.y}).length == 0 && room.get_piece({x:cords.x - 2,y:cords.y}).length == 0 && room.get_piece({x:cords.x - 3, y:cords.y}).length == 0){
      
      console.log("ya")
      let rook = room.get_piece({x:cords.x - 4,y:cords.y});
      if(rook.length > 0 && !rook[0].state.has_moved){
        console.log("no");
        return true;
      }
    }
    return false;
  }
  check_right_castle(room:Board,cords:Vector){
    if(!this.state.has_moved && room.get_piece({x:cords.x + 1,y:cords.y}).length == 0 && room.get_piece({x:cords.x + 2,y:cords.y}).length == 0){
      let rook = room.get_piece({x:cords.x + 3,y:cords.y});
      if(rook.length > 0 && !rook[0].state.has_moved){
        return true;
      }
    }
    return false;
  }
  getAttacking():Array<Vector>{
    let cords = this.getCords();
    let room = g.getRoom() as Board;
    let attacked:Array<Vector> = [];
    for(let x = -1;x <= 1; x++){
      for(let y = -1;y <= 1; y++){
        if((x !== 0 || y !== 0) && cords.x + x >= 0 && cords.x + x < 8 && cords.y + y >= 0 && cords.y + y < 8){
          let piece = room.get_piece({x:cords.x + x, y:cords.y + y});
          let safe = true;
          if(safe && piece.length === 0 || piece[0].state.side !== this.state.side){
            attacked.push({x:cords.x + x, y:cords.y + y});
          }
        }
      }
    }
    //castle check left
    if(this.check_left_castle(room,cords)){
      attacked.push({x:cords.x - 2,y:cords.y});
    }
    if(this.check_right_castle(room,cords)){
      attacked.push({x:cords.x + 2,y:cords.y});
    }
    return attacked;
  }
}