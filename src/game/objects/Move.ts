import { obj } from "../../lib/object";
import { Board, side } from "../rooms/Board";
import { piece, piece_type } from "./abstract/piece";
import { Queen } from "./Queen";
import { exec_type } from "../../lib/controls";
import { obj_state, Vector } from "../../lib/state";
import { g } from "../main";
interface move_state extends obj_state {
  position: {
    x: number,
    y: number
  }
}

export class Move extends obj {
  sprite_url = "./sprites/attacked.png";
  height = 100;
  width = 100;
  render = false;
  layer = 2;
  tick_state = false;
  save_to_file = false;
  tags = ["move"];
  constructor(state: obj_state) {
    super(state);
    this.state = {
      position: {
        x: state.position.x * this.width - 350,
        y: state.position.y * this.height - 350
      },
      velocity: {
        x: 0,
        y: 0
      },
      rotation: 0,
      scaling: {
        width: 1,
        height: 1
      }
    }
  }
  getCords(): Vector {
    return { x: Math.floor((this.state.position.x + 350) / 100), y: Math.floor((this.state.position.y + 350) / 100) };
  }
  drop(){
    if (this.render) {
      let room = g.state.current_room as Board;
      room.state.selected.state.position = room.state.selected_original_position;
      room.state.before_history.push(room.state.last_move);
      room.state.last_move = [];
      let p = room.get_piece(this.getCords()) as piece[];
      let s = room.state.selected;
      if (s.state.type === piece_type.king && !s.state.has_moved && this.getCords().x === 6) {
        let rooks = room.get_piece({ x: 7, y: s.getCords().y });
        rooks[0].movetoCordsHistory({ x: 5, y: s.getCords().y });
      }
      if (s.state.type === piece_type.king && !s.state.has_moved && this.getCords().x === 2) {
        let rooks = room.get_piece({ x: 0, y: s.getCords().y });
        rooks[0].movetoCordsHistory({ x: 3, y: s.getCords().y });
      }
      if (s.state.type === piece_type.pawn && !s.state.has_moved && s.state.side === side.white && this.getCords().y === 3) {
        room.state.white_board[this.getCords().x][this.getCords().y - 1].enpassent = true;
      }
      if (s.state.type === piece_type.pawn && !s.state.has_moved && s.state.side === side.black && this.getCords().y === 4) {
        room.state.black_board[this.getCords().x][this.getCords().y + 1].enpassent = true;
      }
      if (s.state.type === piece_type.pawn && s.state.side == side.black && room.get_meta(this.getCords(), side.white).enpassent) {
        let f = room.get_piece({ x: this.getCords().x, y: this.getCords().y + 1 });
        room.remove_piece(f[0]);
      }
      if (s.state.type === piece_type.pawn && s.state.side == side.white && room.get_meta(this.getCords(), side.black).enpassent) {
        let f = room.get_piece({ x: this.getCords().x, y: this.getCords().y - 1 });
        room.remove_piece(f[0]);
      }
      s.state.has_moved = true;
      if (p.length > 0) {
        room.remove_piece(p[0]);
      }
      if ((this.getCords().y == 7 || this.getCords().y == 0) && s.state.type === piece_type.pawn) {
        let qu = new Queen({
          position: this.getCords(),
          velocity: {
            x: 0,
            y: 0
          },
          rotation: 0,
          scaling: {
            height: 1, width: 1
          }
        }, { side: s.state.side });
        qu.load().then(() => {
          room.add_piece_history(qu);
          room.remove_piece(s);
        })
      }
      if (s.state.side === side.white) {
        room.change_side(side.black);
      }
      else if (s.state.side === side.black) {
        room.change_side(side.white);
      }
      room.clear_attacked();
      room.state.selected.movetoCordsHistory(this.getCords());

      room.state.attacked = [];
      room.state.selected = undefined;
      room.state.selected_original_position = undefined;
    }
  }
  registerControls() {
    
    this.bindControl("mouse1", exec_type.once, () => {
      if(this.render){
        let room = g.getRoom() as Board;
        room.state.selected_original_position = room.state.selected.state.position;
        this.drop();
      }
    })
    
  }
}