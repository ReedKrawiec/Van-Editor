import {position} from "./state";

export function Distance(a:position,b:position){
  return Math.sqrt(Math.pow(a.x - b.x,2) + Math.pow(a.y - b.y,2));
}