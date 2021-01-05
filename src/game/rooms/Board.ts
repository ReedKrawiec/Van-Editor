import {room,room_i,state_config} from "../../lib/room";
import {piece, piece_type,moves} from "../objects/abstract/piece";
import {Knight} from "../objects/Knight";
import {Rook} from "../objects/Rook";
import {Move} from "../objects/Move";
import {obj} from "../../lib/object";
import { Bishop } from "../objects/Bishop";
import { Queen } from "../objects/Queen";
import { King } from "../objects/King";
import { Pawn } from "../objects/Pawn";
import {game,GetViewportDimensions } from "../../van";
import {g} from "../main";
import {obj_state, Vector, room_state} from "../../lib/state";
import {Camera} from "../../lib/render";
import * as json from "./Board.json";
import { velocityCollisionCheck } from "../../lib/collision";
import { exec_type, Poll_Mouse } from "../../lib/controls";
import * as config from "./Board.json";
let cfig = config as unknown as state_config;
export enum side{
  white,
  black
}

interface space_state{
  enpassent:boolean,
  attacked:boolean
}

function state_converter(pos:Vector,rotation:number,scaling:number):obj_state{
  return {
    position:pos,
    velocity:{
      x:0,
      y:0
    },
    rotation,
    scaling:{
      width:scaling,
      height:scaling
    }
  }
}



export interface board_state{
  turn:side,
  white_board:Array<Array<space_state>>,
  black_board:Array<Array<space_state>>
  selected:piece,
  selected_original_position:Vector,
  squares:Array<Array<Move>>,
  pieces:Array<piece>,
  attacked:Array<Vector>,
  dragging:boolean,
  last_move:moves[],
  before_history:moves[][],
  after_history:moves[][]
}
export class Board extends room<board_state>{
  state:board_state;
  background_url="./sprites/board.png";
  constructor(game:game<unknown>){
    super(game,cfig);
    game.state.cameras = [
      new Camera({
        x:0,
        y:0,
        dimensions:{
          height:GetViewportDimensions().height,
          width:GetViewportDimensions().width
        },
        scaling:0.65,
        debug:false
      },{
        x:0,
        y:0,
        width:1,
        height:1
      })
    ]
    this.state = {
      turn:side.white,
      white_board:[],
      black_board:[],
      selected:undefined,
      selected_original_position:undefined,
      squares:[],
      pieces:[],
      attacked:[],
      dragging:false,
      last_move:[],
      before_history:[],
      after_history:[]
    };
    
    let row2 = [new Rook(state_converter({x:0,y:7},0,1),{side:side.black}),new Knight(state_converter({x:1,y:7},0,1),{side:side.black}),new Bishop(state_converter({x:2,y:7},0,1),{side:side.black}),new Queen(state_converter({x:3,y:7},0,1),{side:side.black}),new King(state_converter({x:4,y:7},0,1),{side:side.black}),new Bishop(state_converter({x:5,y:7},0,1),{side:side.black}),new Knight(state_converter({x:6,y:7},0,1),{side:side.black}),new Rook(state_converter({x:7,y:7},0,1),{side:side.black})];
    let row7 = [new Rook(state_converter({x:0,y:0},0,1),{side:side.white}),new Knight(state_converter({x:1,y:0},0,1),{side:side.white}),new Bishop(state_converter({x:2,y:0},0,1),{side:side.white}),new Queen(state_converter({x:3,y:0},0,1),{side:side.white}),new King(state_converter({x:4,y:0},0,1),{side:side.white}),new Bishop(state_converter({x:5,y:0},0,1),{side:side.white}),new Knight(state_converter({x:6,y:0},0,1),{side:side.white}),new Rook(state_converter({x:7,y:0},0,1),{side:side.white})];
    for(let a = 0;a < row2.length;a++){
      let pawn1 = new Pawn(state_converter({x:a,y:1},0,1),{side:side.white});
      let pawn2 = new Pawn(state_converter({x:a,y:6},0,1),{side:side.black});
      this.addItem(row7[a]);
      this.addItem(pawn1);
      this.addItem(row2[a]);
      this.addItem(pawn2);
      this.state.pieces.push(pawn2);
      this.state.pieces.push(row7[a]);
      this.state.pieces.push(pawn1);
      this.state.pieces.push(row2[a]);
      
    }
    for(let a = 0;a<8;a++){
      let mv_row:Array<Move> = [];
      for(let b = 0;b<8;b++){
        let d = a;
        (()=> {
          let move_o = new Move(state_converter({x:a,y:b},0,1));
          mv_row.push(move_o);
          this.addItem(move_o);
        })()
      }
      this.state.squares.push(mv_row);
    }
    this.state.black_board = this.blank_board();
    this.state.white_board = this.blank_board();
    for(let x of this.state.pieces){
      if(x.state.side === side.white){
        x.bind_controls();
      }
    }
  }
  
  registerControls() {
    this.bindControl("mouse0down", exec_type.once, () => {

      let mouse = Poll_Mouse(g.state.cameras[0]);
      if(!mouse){
        return
      }
      let collisions = g.getRoom().checkCollisions({
        x: mouse.x,
        y: mouse.y,
        width: 1,
        height: 1
      }, ["move"]);
      if (collisions.length > 0) {
        let piece = (<piece>collisions[0]);
        if(this.state.turn == piece.state.side){
          this.state.dragging = true;
          piece.select();
          piece.layer = 3;
          this.state.selected_original_position = Object.assign({}, collisions[0].state.position);
        }
      }
    });
    this.bindControl("mouse0up", exec_type.once, () => {
      if (this.state.selected) {
        this.state.selected.layer = 1;
        let collisions = g.getRoom().checkObjects({
          x:this.state.selected.state.position.x,
          y:this.state.selected.state.position.y,
          width:1,
          height:1
        },["piece"]);
        if(collisions.length > 0 && collisions[0].render == true){
          (<Move>collisions[0]).drop();
        }
        else{
          this.state.selected.state.position = this.state.selected_original_position;
          this.state.dragging = false;
        }
      }
    })
  }
  get_meta(a: Vector, s: side) {
    if (a.x >= 0 && a.x < 8 && a.y >= 0 && a.y < 8){
      if(s === side.white){
        return this.state.white_board[a.x][a.y];
      }
      return this.state.black_board[a.x][a.y];
    }
    return undefined;
  }
  change_side(s:side){
    let to_bind;
    let to_unbind;
    
    if(s == side.white){
      to_bind = s;
      to_unbind = side.black;
      
      this.clear_enpassent_board(this.state.white_board);
      
      this.clear_attacked_board(this.state.black_board);
      
      this.calculate_attacked_board(this.state.black_board,side.black);
      
    }
    else{
      to_bind = side.black;
      to_unbind = side.white;
      
      this.clear_enpassent_board(this.state.black_board);
      
      this.clear_attacked_board(this.state.white_board);
      
      this.calculate_attacked_board(this.state.white_board,side.white);
      
    }
    for(let x of this.state.pieces){
      if(x.state.side === to_bind){
        x.bind_controls();
      }
      else{
        x.unbind_controls();
      }
    }
    this.state.turn = s;
  }
  clear_enpassent_board(x:Array<Array<space_state>>){
    for(let a = 0;a<8;a++){
      for(let b = 0;b<8;b++){
        x[a][b].enpassent = false;
      }
    }
  }
  calculate_attacked_board(x:Array<Array<space_state>>,s:side){
    for(let a of this.state.pieces){
      if(a.state.side == s){
        let attacked = a.getAttacking();
        for(let b of attacked){
          x[b.x][b.y].attacked = true;
        }
      }
    } 
  }
  clear_attacked_board(x:Array<Array<space_state>>){
    for(let a = 0;a<8;a++){
      for(let b = 0;b<8;b++){
        x[a][b].attacked = false;
      }
    }
  }
  blank_board(){
    let board = [];
    for(let a = 0;a<8;a++){
      let row = [];
      for(let b = 0;b<8;b++){
        row.push({
          enpassent:false,
          attacked:false
        });
      }
      board.push(row);
    }
    return board;
  }
  async add_piece_history(a:piece){
    this.state.last_move.push({
      type:"add",
      old_position:Object.assign({},a.getCords()),
      new_position:Object.assign({},a.getCords()),
      new_piece:a.state.type,
      side:a.state.side
    })
    await this.add_piece(a);
  }
  async add_piece_from_type(type:piece_type,position:Vector,side:side){
    let piece:piece;
    let state:obj_state = {
      position,
      velocity:{
        x:0,
        y:0
      },
      rotation:0,
      scaling:{
        height:1,
        width:1
      }
    }
    switch(type){
      case piece_type.bishop:
        piece = new Bishop(state,{side})
        break;  
      case piece_type.rook:
        piece = new Rook(state,{side})
        break;
      case piece_type.queen:
        piece = new Queen(state,{side})
        break;
      case piece_type.pawn:
        piece = new Pawn(state,{side});
        break;
      case piece_type.knight:
        piece = new Knight(state,{side});
        break;
      case piece_type.king:
        piece = new King(state,{side});
        break;
    }
    await this.add_piece(piece);
  }
  async add_piece(a:piece){
    await a.load();
    this.addItem(a);
    this.state.pieces.unshift(a);
  }
  remove_piece(a:piece){
    this.state.last_move.push({
      type:"remove",
      old_position:Object.assign({},a.getCords()),
      new_position:Object.assign({},a.getCords()),
      old_piece:a.state.type,
      side:a.state.side
    })
    for(let b = 0;b < this.state.pieces.length;b++){
      if(a.id === this.state.pieces[b].id){
        this.state.pieces.splice(b,1);
      }   
    }
    a.delete();
  }
  get_piece(a:Vector):Array<piece>{
    return (this.checkCollisions({
      x:a.x * 100 - 350,
      y:a.y * 100 - 350,
      height:100,
      width:100
    }) as unknown as Array<piece>);
  }
  clear_attacked(){
    for(let a of this.state.attacked){
      this.state.squares[a.x][a.y].render = false;
    }
  }
  attack(x:Array<Vector>){
    for(let a of x){
      this.state.squares[a.x][a.y].render = true;
    }
  }
  statef(a:number){
    if(this.state.selected && this.state.dragging){
      let mouse = Poll_Mouse(g.state.cameras[0]);
      if(mouse){
        this.state.selected.state.position.x = mouse.x;
        this.state.selected.state.position.y = mouse.y;
      }
    }
    super.statef(a);
  }
}