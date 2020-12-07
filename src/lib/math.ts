import {position} from "./state";

export function Distance(a:position,b:position){
  return Math.sqrt(Math.pow(a.x - b.x,2) + Math.pow(a.y - b.y,2));
}

export function getRandInt(min:number, max:number) {
  return Math.floor(Math.random() * (max - min) ) + min;
}