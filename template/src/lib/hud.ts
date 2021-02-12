import {obj} from "./object";
import {Vector} from "lib/state";
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
  position:Vector
  size:number;
  scaling:number;
  font:string;
  color:string;
  text?:string;
  align?:CanvasTextAlign;
}
export class HUD{
  graphic_elements:obj[] = [];
  text_elements:Array<Text> = [];
  constructor(){
    this.text_elements.push(...this.setTextElements());
    this.graphic_elements.push(...this.setGraphicElements()); 
  }
  statef(a:number){
    for(let x of this.graphic_elements){
      x.statef(a);
    }
    for(let x of this.text_elements){
      x.statef(a);
    }
  }
  setTextElements():Text[]{
    return [];
  }
  setGraphicElements():obj[]{
    return [];
  }
}

export class Text{
  getFunc:HudTextGetFunc;
  state:Text_Node;
  constructor(node:Text_Node,getFunc:HudTextGetFunc){
    if(!node.align){
      node.align = "center";
    }
    this.state = node;
    if(!this.state.text){
      this.state.text = "";
    }
    this.getFunc = getFunc;
  }
  statef(a:number){
   this.state.text = this.getFunc();
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