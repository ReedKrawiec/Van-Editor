import { sprite } from "./sprite";
import { GetViewportDimensions } from "../van";
import { obj } from "./object";
import { dimensions, obj_state, Vector } from "./state";
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
  constructor(props:camera_properties, v: viewport, hud:HUD = undefined) {
    this.state = {
      scaling:props.scaling,
      position: {
        x: props.x,
        y: props.y
      },
      dimensions: props.dimensions,
      viewport: {
        x:v.x,
        y:v.y ,
        width: v.width * props.dimensions.width,
        height: v.height * props.dimensions.height
      },
      debug:props.debug,
      hud
    }
    this.hud = hud;
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
  scale:dimensions,
  scale_type:scale_type
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

export enum scale_type{
  grow,
  repeat
}

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
export interface canvas_args{
  canvas:HTMLCanvasElement,
  width:number;
  height:number,
  x:number,
  y:number,
  scale:dimensions
}
export const canvas_renderer = (r:renderer_args,a:canvas_args) => {
  let camera = r.camera;
  let vheight = r.camera.state.dimensions.height / r.camera.state.scaling;
  let final_x = ((a.x - camera.state.position.x + camera.state.dimensions.width * (1/r.camera.state.scaling) / 2 - a.width * a.scale.width / 2) * r.camera.state.scaling);
  let final_y = ((vheight - a.y - camera.state.dimensions.height * (1/r.camera.state.scaling) / 2 - a.height * a.scale.height / 2 + camera.state.position.y) * r.camera.state.scaling);
  let height = a.height * r.camera.state.scaling * a.scale.height;
  let width = a.width * r.camera.state.scaling * a.scale.width;
  r.context.save();
  r.context.translate(final_x  + (width) / 2, final_y + height / 2);
  r.context.drawImage(
    a.canvas,
    -(width ) / 2,
    -height / 2,
    width,
    height
  )
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
  r.context.translate(final_x  + (width) / 2, final_y + height / 2);
  let radians = s.rotation * (Math.PI / 180);
  r.context.rotate(radians);
  if(s.scale_type == scale_type.grow){
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
  }
  else if(s.scale_type == scale_type.repeat){
    let one_width = s.sprite.sprite_width * r.camera.state.scaling;
    let one_height = s.sprite.sprite_height * r.camera.state.scaling;
    let total_hor_sprites = width/one_width
    let total_ver_sprites = height/one_height;
   for(let a = 0;a < total_hor_sprites;a += 1){
     for(let b = 0;b < total_ver_sprites;b += 1){
       let new_width = one_width;
       let new_height = one_height;
       if((a + 1) * one_width - width > 0){
         new_width = width % one_width;
       }
       if((b + 1) * one_height - height > 0){
         new_height = height % one_height;
       }
       r.context.drawImage(
        s.sprite.sprite_sheet,
        s.sprite.left,
        s.sprite.top,
        new_width / (r.camera.state.scaling),
        new_height / (r.camera.state.scaling),
        -width/2 + a * one_width,
        -height/2 + b * one_height,
        new_width,
        new_height
       )
     }

   } 
  }
  
  
  r.context.restore();
}

export interface line{
  start:Vector,
  end:Vector
}

export const line_renderer = (context:CanvasRenderingContext2D,line:line,color:string,lineWidth:number,camera:Camera) => {
  let vheight = camera.state.dimensions.height / camera.state.scaling;
  let start_x = ((line.start.x - camera.state.position.x + camera.state.dimensions.width * (1/camera.state.scaling) / 2) * camera.state.scaling);
  let start_y = ((vheight - line.start.y + camera.state.position.y - camera.state.dimensions.height * (1/camera.state.scaling) / 2) * camera.state.scaling);

  let end_x = ((line.end.x - camera.state.position.x + camera.state.dimensions.width * (1/camera.state.scaling) / 2) * camera.state.scaling);
  let end_y = ((vheight - line.end.y + camera.state.position.y - camera.state.dimensions.height * (1/camera.state.scaling) / 2) * camera.state.scaling);
  
  
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = lineWidth * camera.state.scaling;
  context.moveTo(start_x,start_y);
  context.lineTo(end_x,end_y);
  context.stroke(); 
}

export const stroked_rect_renderer = (context: CanvasRenderingContext2D, rect: rectangle, x: number, y: number, color: string, lineWidth:number, camera: Camera) => {
  let vheight = camera.state.dimensions.height / camera.state.scaling;
  let final_x = ((x - camera.state.position.x + camera.state.dimensions.width * (1/camera.state.scaling) / 2 - rect.width / 2) * camera.state.scaling);
  let final_y = ((vheight - y + camera.state.position.y - camera.state.dimensions.height * (1/camera.state.scaling) / 2 - rect.height / 2 ) * camera.state.scaling);
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