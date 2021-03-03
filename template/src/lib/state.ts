export interface state_func<T>{
  (last_time:number,current_state:T):T
}

export interface Vector{
  x:number;
  y:number;
}

export interface dimensions{
  height:number,
  width:number
}

export interface obj_state{
  position:Vector;
  velocity?:Vector;
  rotation?:number;
  scaling?:dimensions;
}

export interface room_state{
  objects: Array<obj_state>
}
