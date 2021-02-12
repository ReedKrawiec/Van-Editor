import {Vector} from "./state";

export function getRandInt(min:number, max:number) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

interface Vec_func{
  (a:number):number
}

export class Vec{
  static add(a:Vector,b:Vector):Vector{
    return {x:a.x+b.x,y:a.y+b.y};
  }
  static sub(a:Vector,b:Vector):Vector{
    return {x:a.x - b.x,y:a.y - b.y}
  }
  static scalar_divide(a:Vector,b:number){
    return {x:a.x/b,y:a.y/b};
  }
  static scalar_add(a:Vector,b:number){
    return {x:a.x + b,y:a.y + b};
  }
  static scalar_sub(a:Vector,b:number){
    return {x:a.x - b, y:a.y - b};
  }
  static scalar_mod(a:Vector,b:number){
    return {x:a.x % b, y: a.y % b};
  }
  static scalar_mult(a:Vector,b:number){
    return {x:a.x * b,y:a.y * b};
  }
  static func(a:Vector,b:Vec_func):Vector{
    let arr = [a.x,a.y].map(b);
    return Vec.create(arr[0],arr[1]);
  }
  static distance(a:Vector,b:Vector){
    return Math.sqrt(Math.pow(a.x - b.x,2) + Math.pow(a.y - b.y,2));
  }
  static create(x:number,y:number){
    return {x,y};
  }
}