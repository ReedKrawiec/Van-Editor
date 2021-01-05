import {obj} from "../../../lib/object";
import {positioned_sprite, sprite,sprite_gen} from "../../../lib/sprite";
import {board_state, Board} from "../../rooms/Board";
import { Unbind, exec_type } from "../../../lib/controls";
import {Vector,obj_state} from "../../../lib/state";
import {g} from "../../main";

export interface moves{
  type:string,
  old_position:Vector,
  new_position:Vector,
  old_piece?:piece_type,
  new_piece?:piece_type,
  move_piece?:piece,
  side:side
}

export enum side{
  white,
  black
}

export enum piece_type{
  pawn,
  rook,
  bishop,
  queen,
  king,
  knight
}

interface piece_state extends obj_state{
  side:side,
  type:piece_type,
  has_moved:boolean
}

export interface piece_parameters{
  side:side
}

export class piece extends obj{
  height = 100;
  width = 100;
  collision = true;
  params:piece_parameters;
  state:piece_state;
  tags = ["piece"];
  tick_state = false;
  save_to_file = false;
  static default_params:piece_parameters = {
    side:side.white
  }
  constructor(state:obj_state,params:piece_parameters = piece.default_params){
    super(state,params);
    this.state = {
      position:{
        x:state.position.x * this.width - 350,
        y:state.position.y * this.height - 350
      },
      velocity:{
        x:0,
        y:0
      },
      side:params.side,
      type:undefined,
      has_moved:false,
      rotation:state.rotation,
      scaling:state.scaling
    }
    this.params = params;
  }
  movetoCordsHistory(a:Vector){
    let room = g.getRoom() as Board;
    room.state.last_move.push({
      type:"move",
      old_position:Object.assign({},this.getCords()),      
      new_position:Object.assign({},a),
      old_piece:this.state.type,
      new_piece:this.state.type,
      side:this.state.side
     })
    this.movetoCords(a);
  }
  movetoCords(a:Vector){
    let room = g.getRoom() as Board;
    this.state.position.x = a.x * this.width - 350;
    this.state.position.y = a.y * this.height - 350;
  }
  getCords():Vector{
    return {x:Math.round((this.state.position.x+350)/100),y:Math.round((this.state.position.y + 350)/100)};
  }
  getAttacking():Array<Vector>{
    return [];
  }
  renderf(t:number):positioned_sprite{
    let sprites = sprite_gen(this.sprite_sheet,this.width,this.height);
    if(this.params.side === side.white){
      return {
        sprite:sprites[0][0],
        x:this.state.position.x,
        y:this.state.position.y
      }
    }
    else{
      return {
        sprite:sprites[0][1],
        x:this.state.position.x,
        y:this.state.position.y
      }
    }
  }
  attackDiagonal(){
    let cords = this.getCords();
    let room = g.getRoom() as Board;
    let attacked:Array<Vector> = [];
    for(let a = 1;a < 8;a++){
      if(cords.x - a >= 0 && cords.x - a < 8 && cords.y - a >= 0 && cords.x - a < 8){
        let pieces = room.get_piece({x:cords.x - a,y:cords.y - a});
        if(pieces.length == 0 || pieces[0].state.side !== this.state.side){
          attacked.push({x:cords.x - a,y:cords.y - a});
        }
        if(pieces.length > 0){
          break;
        }
      }  
    }
    for(let a = 1;a < 8;a++){
      if(cords.x - a >= 0 && cords.x - a < 8 && cords.y + a >= 0 && cords.y + a < 8){
        let pieces = room.get_piece({x:cords.x - a,y:cords.y + a});
        if(pieces.length == 0 || pieces[0].state.side !== this.state.side){
          attacked.push({x:cords.x - a,y:cords.y + a});
        }
        if(pieces.length > 0){
          break;
        }
      }  
    }
    for(let a = 1;a < 8;a++){
      if(cords.x + a >= 0 && cords.x + a < 8 && cords.y + a >= 0 && cords.y + a < 8){
        let pieces = room.get_piece({x:cords.x + a,y:cords.y + a});
        if(pieces.length == 0 || pieces[0].state.side !== this.state.side){
          attacked.push({x:cords.x + a,y:cords.y + a});
        }
        if(pieces.length > 0){
          break;
        }  
      }
    }
    for(let a = 1;a < 8;a++){
      if(cords.x + a >= 0 && cords.x + a < 8 && cords.y - a >= 0 && cords.y - a < 8){
        let pieces = room.get_piece({x:cords.x + a,y:cords.y - a});
        if(pieces.length == 0 || pieces[0].state.side !== this.state.side){
          attacked.push({x:cords.x + a,y:cords.y - a});
        }
        if(pieces.length > 0){
          break;
        }  
      }
    }
    return attacked;
  }
  attackCardinal(){
    let cords = this.getCords();
    let room = g.getRoom() as Board;
    let attacked:Array<Vector> = [];
    for(let a = cords.x - 1;a >= 0;a--){
      let pieces = room.get_piece({x:a,y:cords.y});
      if(pieces.length === 0 || pieces[0].state.side !== this.state.side){
        attacked.push({x:a,y:cords.y});
      }
      if(pieces.length > 0){
        break;
      }
    }
    for(let a = cords.x + 1;a < 8;a++){
      let pieces = room.get_piece({x:a,y:cords.y});
      if(pieces.length === 0 || pieces[0].state.side !== this.state.side){
        attacked.push({x:a,y:cords.y});
      }
      if(pieces.length > 0){
        break;
      }
    }
    for(let a = cords.y - 1;a >= 0;a--){
      let pieces = room.get_piece({x:cords.x,y:a});
      if(pieces.length === 0 || pieces[0].state.side !== this.state.side){
        attacked.push({x:cords.x,y:a});
      }
      if(pieces.length > 0){
        break;
      }
    }
    for(let a = cords.y + 1;a < 8;a++){
      let pieces = room.get_piece({x:cords.x,y:a});
      if(pieces.length === 0 || pieces[0].state.side !== this.state.side){
        attacked.push({x:cords.x,y:a});
      }
      if(pieces.length > 0){
        break;
      }
    }
    return attacked;
  }
  unbind_controls(){
    for(let a of this.binds){
      Unbind(a);
    }
  }
  select(){
    let room = g.state.current_room as Board;
      if(room.state.turn === this.state.side){
        room.state.selected = this;
        room.clear_attacked();
        let valid_attacked = [];
        for(let g of this.getAttacking()){
          
          let pieces = room.get_piece(g);
          if(pieces.length == 0 || pieces[0].state.side !== this.state.side){
            valid_attacked.push(g);
          }
        }
        room.state.attacked = valid_attacked;
        room.attack(valid_attacked);
      }
  }
  bind_controls(){
    /*
    this.bindControl("mouse1",exec_type.once,()=>{
      this.select();  
    })
    */
  }
}