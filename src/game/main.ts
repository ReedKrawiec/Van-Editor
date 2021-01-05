import {Vector,obj_state,room_state} from "../lib/state";
import {game,GetViewportDimensions,viewport} from "../van";
import {Board, side} from "../game/rooms/Board";
import { piece } from "./objects/abstract/piece";
let canvas_element:HTMLCanvasElement = document.getElementById("target") as HTMLCanvasElement;

declare global {
  interface Window { board_functions: any; }
}

interface globals{
  test:number
}

export let g = new game<globals>(canvas_element.getContext("2d"),{
  test:0
});
/*
window.board_functions = {};

window.board_functions.backwards = ()=>{
  let room = g.getRoom() as Board;
  for(let move of room.state.last_move.reverse()){
    let piece:piece;
    
    switch(move.type){
      case "remove":
        room.add_piece_from_type(move.old_piece,move.old_position,move.side);
        break;
        
      case "add":
        piece = room.get_piece(move.old_position).filter((p)=>p.state.side === move.side && p.state.type === move.new_piece)[0];
        room.remove_piece(piece);
        break;
    
      case "move":
        piece = room.get_piece(move.new_position).filter((p)=>p.state.side === move.side && p.state.type === move.new_piece)[0]
        piece.movetoCords(move.old_position);
        break;
        
    }
    
  }
  room.state.after_history.unshift(room.state.last_move);
  room.state.last_move = room.state.before_history.pop();
  room.state.turn = room.state.turn == side.white ? side.black : side.white;
}
*/
g.loadRoomString("Overworld");

