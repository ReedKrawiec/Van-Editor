import {obj} from "./object";
import { Goomba } from "../game/objects/goomba";

interface HudTextGetFunc{
  ():string
}

export interface TextSetting{
  x:number,
  y:number,
  font:Font
}

export interface Font{
  max_width?:number,
  size:number,
  font:string,
  color:string,
  text:string,
  align:CanvasTextAlign
}

export interface Text_Node{
  max_width?:number,
  position:{
    x:number,
    y:number
  }
  size:number;
  scaling:number;
  font:string;
  color:string;
  text?:string;
  align?:CanvasTextAlign;
}
export class HUD{
  graphic_elements:Array<obj<unknown>> = [];
  text_elements:Array<Text> = [];
  statef(a:number){
    for(let x of this.graphic_elements){
      x.statef(a);
    }
    for(let x of this.text_elements){
      x.statef(a);
    }
  }
}

export class Text{
  get_func:HudTextGetFunc;
  state:Text_Node;
  constructor(a:Text_Node,b:HudTextGetFunc){
    if(!a.align){
      a.align = "center";
    }
    this.state = a;
    if(!this.state.text){
      this.state.text = "";
    }
    this.get_func = b;
  }
  statef(a:number){
   this.state.text = this.get_func();
  }
  renderf(a:number):Font{
    let {size,color,font,text,max_width,align} = this.state;
    return {
      size,
      color,
      font,
      text,
      max_width,
      align
    };
  }
}