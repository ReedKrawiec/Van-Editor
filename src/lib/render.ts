import { sprite } from "./sprite";
import { GetViewportDimensions } from "../van";
import { obj } from "./object";
import { dimensions, obj_state } from "./state";
import { Text_Node, TextSetting,HUD,Text } from "./hud";
import {positioned_sprite} from "./sprite"

interface camera_state {
  scaling: number,
  position: {
    x: number,
    y: number
  }
  dimensions: {
    width: number,
    height: number
  },
  viewport: viewport,
  debug:boolean,
  hud:HUD  
}

interface viewport {
  x: number,
  y: number,
  width: number,
  height: number
}

interface camera_properties {
  x:number,
  y:number,
  dimensions:{
    height:number,
    width:number
  }
  scaling:number,
  debug:boolean
}

export class Camera {
  state: camera_state;
  hud: HUD;
  constructor(props:camera_properties, v: viewport) {
    this.state = {
      scaling:props.scaling,
      position: {
        x: props.x * props.scaling,
        y: props.y * props.scaling
      },
      dimensions: props.dimensions,
      viewport: {
        x:v.x,
        y:v.y ,
        width: v.width * props.dimensions.width,
        height: v.height * props.dimensions.height
      },
      debug:props.debug,
      hud:undefined
    }
  }
  set x(x: number) {
    this.state.position.x = x;
  }
  set y(y: number) {
    this.state.position.y = y
  }
  get x() {
    return this.state.position.x;
  }
  get y() {
    return this.state.position.y;
  }

}

export interface render_func {
  (x: number, y: number, scaling: number): void
}

interface rectangle {
  width: number,
  height: number
}

interface sprite_args {
  sprite: sprite,
  x: number,
  y: number,
  rotation: number,
  scale:dimensions
}

interface renderer_args {
  context: CanvasRenderingContext2D,
  camera: Camera
}

export enum render_type {
  text,
  sprite,
  rect,
  stroke_rect
}
/*
export const element_render = (r:renderer_args,o:obj<unknown>,time:number) => {
  let camera = r.camera;
  let vheight = r.camera.state.dimensions.height / r.camera.state.scaling;
  let final_x = ((s.x - camera.state.position.x + camera.state.dimensions.width / 2 - s.sprite.sprite_width / 2) * r.camera.state.scaling);
  let final_y = ((vheight - s.y - camera.state.dimensions.height / 2 - s.sprite.sprite_height / 2 + camera.state.position.y) * r.camera.state.scaling);
  let height = s.sprite.sprite_height * r.camera.state.scaling;
  let width = s.sprite.sprite_width * r.camera.state.scaling;
  if(o.render_type == render_type.text){

  }
  else if(o.render_type == render_type.sprite){

  }
  else if(o.render_type == render_type.stroke_rect){

  }
}
*/


export const hud_text_renderer = (r: renderer_args, s: TextSetting) => {
  let vheight = GetViewportDimensions().height;
  r.context.font = `${s.font.size}px ${s.font.font}`;
  r.context.fillStyle = s.font.color;
  r.context.textAlign = s.font.align;
  if (s.font.max_width) {
    r.context.fillText(s.font.text, s.x, vheight - s.y, s.font.max_width);
  }
  else {
    r.context.fillText(s.font.text, s.x, vheight - s.y);
  }
}

export const text_renderer = (r:renderer_args,s:TextSetting) => {
  let camera = r.camera;
  let vheight = r.camera.state.dimensions.height;
  let width = r.context.measureText(s.font.text).width * r.camera.state.scaling;
  let height = s.font.size * 1.2 * r.camera.state.scaling;
  let final_x = ((s.x - camera.state.position.x + camera.state.dimensions.width * (1/r.camera.state.scaling) / 2) * r.camera.state.scaling);
  let final_y = ((vheight - s.y * camera.state.scaling - camera.state.dimensions.height/2 + camera.state.position.y * camera.state.scaling));
  r.context.font = `${s.font.size * r.camera.state.scaling}px ${s.font.font}`;
  r.context.fillStyle = s.font.color;
  r.context.textAlign = s.font.align
  r.context.save();
  r.context.translate(final_x, final_y);
  if (s.font.max_width) {
    r.context.fillText(s.font.text, 0, 0, s.font.max_width);
  }
  else {
    r.context.fillText(s.font.text, 0, 0);
  }
  r.context.restore();
}

export const sprite_renderer = (r: renderer_args, s: sprite_args) => {
  let camera = r.camera;
  let vheight = r.camera.state.dimensions.height / r.camera.state.scaling;
  let final_x = ((s.x - camera.state.position.x + camera.state.dimensions.width * (1/r.camera.state.scaling) / 2 - s.sprite.sprite_width * s.scale.width / 2) * r.camera.state.scaling);
  let final_y = ((vheight - s.y - camera.state.dimensions.height * (1/r.camera.state.scaling) / 2 - s.sprite.sprite_height * s.scale.height / 2 + camera.state.position.y) * r.camera.state.scaling);
  let height = s.sprite.sprite_height * r.camera.state.scaling * s.scale.height;
  let width = s.sprite.sprite_width * r.camera.state.scaling * s.scale.width;
  r.context.save();
  r.context.globalAlpha = s.sprite.opacity;
  r.context.translate(final_x  + (width) / 2, final_y + height / 2)
  let radians = s.rotation * (Math.PI / 180);
  r.context.rotate(radians);
  r.context.drawImage(
    s.sprite.sprite_sheet,
    s.sprite.left,
    s.sprite.top,
    s.sprite.sprite_width,
    s.sprite.sprite_height,
    -(width ) / 2,
    -height / 2,
    width,
    height
  )
  r.context.restore();
}

export const stroked_rect_renderer = (context: CanvasRenderingContext2D, rect: rectangle, x: number, y: number, color: string, lineWidth:number, camera: Camera) => {
  let vheight = camera.state.dimensions.height / camera.state.scaling;
  let final_x = ((x - camera.state.position.x + camera.state.dimensions.width * (1/camera.state.scaling) / 2 - rect.width / 2) * camera.state.scaling);
  let final_y = ((vheight - y - rect.height / 2 - camera.state.dimensions.height * (1/camera.state.scaling) / 2 + camera.state.position.y) * camera.state.scaling);
  let height = rect.height * camera.state.scaling;
  let width = rect.width * camera.state.scaling;
  context.strokeStyle = color;
  context.lineWidth = lineWidth * camera.state.scaling;
  context.strokeRect(final_x, final_y, width, height);
}

export const rect_renderer = (context: CanvasRenderingContext2D, rect: rectangle, x: number, y: number, color: string, lineWidth:number, camera: Camera) => {
  let vheight = camera.state.dimensions.height / camera.state.scaling;
  let final_x = ((x - camera.state.position.x + camera.state.dimensions.width * (1/camera.state.scaling) / 2 - rect.width / 2) * camera.state.scaling);
  let final_y = ((vheight - y - rect.height / 2 - camera.state.dimensions.height * (1/camera.state.scaling) / 2 + camera.state.position.y) * camera.state.scaling);
  let height = rect.height * camera.state.scaling;
  let width = rect.width * camera.state.scaling;
  context.strokeStyle = color;
  context.fillRect(final_x, final_y, width, height);
}