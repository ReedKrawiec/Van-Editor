import { state_func, obj_state, position, dimensions } from "./state";
import { render_func, render_type } from "./render";
import { Particle, positioned_sprite, sprite, sprite_gen } from "./sprite";
import { collision_box } from "./collision";
import { Unbind, Bind, control_func, exec_type } from "./controls";
import {audio} from "./audio";
import {game} from "../van";
import { Distance } from "./math";

interface obj_i<T> {
  statef: state_func<T>,
  renderf: render_func
}

export function rotation_length(length: number, degree: number) {
  let a_len = length * Math.sin(degree * Math.PI / 180);
  let b_len = length * Math.cos(degree * Math.PI / 180);
  return {
    x: a_len,
    y: b_len
  }
}

export function getId(a: obj[], id: string): obj {
  for (let b = 0; b < a.length; b++) {
    if (a[b].id == id) {
      return a[b];
    }
  }
  return undefined;
}

let counter = 0;

interface anim_storage {
  [index: string]: [Array<[number, sprite]>, number]
}

interface void_func {
  (): void
}

class animations {
  animations: anim_storage = {};
  animation_tracker = 0;
  current: string;
  callback: void_func;
  animating:boolean = false;
  add(name: string, s: Array<[number, sprite]>, length: number) {
    this.animations[name] = [s, length];
  }
  play(name: string, callback?: void_func) {
    this.current = name;
    this.callback = callback;
    this.animation_tracker = 0;
  }
  renderf(t: number): sprite {
    let curr_animation = this.animations[this.current][0];
    let length: number = this.animations[this.current][1];
    let index;
    for (index = 0; index < curr_animation.length - 1; index++) {
      if (this.animation_tracker >= curr_animation[index][0] && this.animation_tracker < curr_animation[index + 1][0]) {
        this.animation_tracker = this.animation_tracker + t;
        this.animating = true;
        return curr_animation[index][1];
      }
    }
    if (this.callback) {
      this.callback();
    }
    this.animating = false;
    if (this.animation_tracker >= length) {
      this.animation_tracker = 0;
    }
    else {
      this.animation_tracker += t;
    }
    return curr_animation[index][1];
  }
}

interface hitbox{
  width:number,
  height:number,
  x_offset:number,
  y_offset:number
}

enum RenderType{
  box,
  sprite
}

export interface params{
  [index:string]:boolean|string|number
}

export abstract class obj{
  sprite_url = "";
  sprite_sheet: HTMLImageElement;
  state: obj_state;
  render_type = render_type.sprite;
  height: number;
  width: number;
  collision: boolean = false;
  hitbox: hitbox
  id: string;
  binds: Array<number>;
  tags:string[] = [];
  rotation: number = 0;
  render = true;
  animations = new animations();
  audio = new audio();
  last_render:number = 0;
  game:game<unknown>;
  parent:composite_obj;
  scaling:dimensions = {
    height:1,
    width:1
  };
  params:unknown = {};
  layer:number = 1;
  static default_params:unknown = {};
  getState() {
    return this.state;
  }
  registerAnimations() {

  }
  registerAudio() {

  }
  constructor(state:obj_state,params = obj.default_params) {
    
    this.id = "" + counter;
    this.binds = [];
    counter++;
    this.params = params;
    this.registerControls();
    this.registerAudio();
    this.state = Object.assign({},JSON.parse(JSON.stringify(state)));
    
    this.params = params;
  }
  load() {
    let _this = this;
    return new Promise((resolve, reject) => {
      let a = new Image();
      a.src = this.sprite_url;
      a.onload = (async () => {
        _this.sprite_sheet = a;
        _this.registerAnimations();
        await this.audio.load();
        resolve();
      });
    })
  }
  combinedObjects():obj[]{
    return [this];
  }
  distance(a:obj):number{
    let o_st = a.state as unknown as obj_state;
    let st = this.state as unknown as obj_state;
    return Distance(st.position,o_st.position);
  }
  angleTowards(a: obj): number {
    return this.angleTowardsPoint(a.state.position);
  }
  angleTowardsPoint(position:position):number{
    let state = this.state as unknown as obj_state;
    if (state.position.x < position.x && state.position.y > position.y
      || (state.position.x < position.x && state.position.y < position.y)) {
      return 90 - Math.atan((position.y - state.position.y) / (position.x - state.position.x)) * 180 / Math.PI
    }
    if (state.position.x > position.x && state.position.y < position.y
      || state.position.x > position.x && state.position.y > position.y) {
      return 270 - Math.atan((position.y - state.position.y) / (position.x - state.position.x)) * 180 / Math.PI
    }
    return 0;
  }
  bindControl(key: string, x: exec_type, func: control_func, interval = 1) {
    if (key == "mouse1") {
      let b = Bind(key, func, x, interval, this);
      this.binds.push(b);
    }
    else {
      this.binds.push(Bind(key, func, x, interval));
    }
  }
  registerControls(){

  }
  statef(time:number){

  }
  delete() {
    for (let a of this.binds) {
      Unbind(a);
    }
    this.game.getRoom().deleteItem(this.id);
  }
  UnbindAll(){
    for (let a of this.binds) {
      Unbind(a);
    }
  }
  collisionCheck(a: collision_box): obj[] {
    if (this.collision) {
      let room = this.game.getRoom();
      return room.checkCollisions(a, [this.id]);
    }
    return [];
  }
  getFullCollisionBox():collision_box{
    let st = this.state as unknown as obj_state;
    if(this.hitbox){
      return {
        x:st.position.x,
        y:st.position.y,
        width:this.hitbox.width * this.state.scaling.width,
        height:this.hitbox.height * this.state.scaling.height
      }
    }
    else{
      return {
        x:st.position.x,
        y:st.position.y,
        width:this.width * this.state.scaling.width,
        height:this.height * this.state.scaling.height
      }
    }
  }
  getAllCollisionBoxes():collision_box[]{
    let st = this.state as unknown as obj_state;
    if(this.hitbox){
      return [{
        x:st.position.x,
        y:st.position.y,
        width:this.width * this.state.scaling.width,
        height:this.height * this.state.scaling.height
      }]
    }
    else{
      return [{
        x:st.position.x,
        y:st.position.y,
        width:this.width * this.state.scaling.width,
        height:this.height * this.state.scaling.height
      }]
    }
  }
  collidesWithBox(a: collision_box): boolean {
    let hcollides = false, vcollides = false;
    let hbox = this.hitbox;
    if(!this.hitbox){
      hbox = {
        x_offset:0,
        y_offset:0,
        width:this.width,
        height:this.height
      }
    }
    let ob = {
      left: (this.state.position.x + hbox.x_offset - hbox.width * this.state.scaling.width / 2),
      right: (this.state.position.x + hbox.x_offset + hbox.width * this.state.scaling.width / 2),
      top: (this.state.position.y + hbox.y_offset + hbox.height * this.state.scaling.height / 2),
      bottom: (this.state.position.y + hbox.y_offset - hbox.height * this.state.scaling.height / 2)
    }

    let box = {
      left: (a.x - a.width / 2),
      right: (a.x + a.width / 2),
      top: (a.y + a.height / 2),
      bottom: (a.y - a.height / 2)
    }

    if ((ob.left >= box.left && ob.left < box.right) || (box.left > ob.left && box.left < ob.right)) {
      hcollides = true;
    }
    else{
      return false;
    }
    if ((ob.bottom >= box.bottom && ob.bottom < box.top) || (box.bottom > ob.bottom && box.bottom < ob.top)){
      vcollides = true;
    }
    else{
      return false;
    }
    return hcollides && vcollides;
  }
  emitParticle(name:string,offset:position,lifetime:number,range:number){
    let room = this.game.getRoom();
    let st = this.state as unknown as obj_state;
    let final_position:position = {
      x:st.position.x + offset.x,
      y:st.position.y + offset.y
    }
    room.emitParticle(name,final_position,lifetime,range)
  }
  renderTrack(time:number): positioned_sprite[] {
    let rendered = this.renderf(time - this.last_render);
    let final:positioned_sprite[];
    this.last_render = time;
    if(Array.isArray(rendered))
      final = rendered
    else{
      final = [rendered]
    }
    return final;
  }
  renderf(time: number): positioned_sprite[] | positioned_sprite{
    let st = this.state as unknown as obj_state;
    if (Object.keys(this.animations.animations).length == 0 || !this.animations.current) {
      if(!this.sprite_sheet || !this.height || !this.width){
        return {
          sprite:undefined,
          x:st.position.x,
          y:st.position.y
        }
      }
      let sprite_height = this.height;
      let sprite_width = this.width;
      if (this.height == undefined) {
        sprite_height = this.sprite_sheet.height;
      }
      if (this.width == undefined) {
        sprite_width = this.sprite_sheet.width;
      }
      return {
        sprite: {
          sprite_sheet: this.sprite_sheet,
          left: 0,
          top: 0,
          sprite_width: sprite_width,
          sprite_height: sprite_height,
          opacity:1
        },
        x: st.position.x,
        y: st.position.y
      };
    }
    return {
      sprite:this.animations.renderf(time),
      x: st.position.x,
      y: st.position.y
    };
  }
}

interface composite_static{
  x:number,
  y:number,
  obj:obj
}

export abstract class composite_obj extends obj{
  objects:obj[] = [];
  render = false;
  registered = false;
  collision = false;
  statics:composite_static[] = [];
  constructor(pos:obj_state){
    super(pos);
  }
  load(){
    return Promise.all([...this.objects.map((a)=>a.load()),...this.statics.map(a=>a.obj.load())]);
  }
  combinedObjects():obj[]{
    let combined = [...this.objects,...this.statics.map(a=>a.obj)];
    combined.forEach(a=>a.parent = this);
    return [...combined,this];
  }
  getItemsByTag(tag:string){
    return this.combinedObjects().filter((a)=>a.tags.indexOf(tag) > -1);
  }
  addItem(a:obj,list=this.objects){
    list.push(a);
    a.parent = this;
    this.game.getRoom().addItem(a);
  }
  getAllCollisionBoxes():collision_box[]{
    let arr:collision_box[] = [];
    for(let obj of [...this.statics.map(a=>a.obj),...this.objects]){
      let created_box = obj.getAllCollisionBoxes();
      if(Array.isArray(created_box)){
        arr.push(...created_box);
      }
      else{
        arr.push(created_box);
      }
    }
    return arr;
  }
  delete(){
    for(let a of this.objects){
      a.delete();
    }
    for(let a of this.statics){
      a.obj.delete();
    }
    super.delete();
  }
  collidesWithBox(a: collision_box):boolean{
    for(let obj of this.objects){
      if(obj.collidesWithBox(a))
        return true;
    }
    for(let o of this.statics){
      if(o.obj.collidesWithBox(a))
        return true;
    }
    return false;
  }  
}


export class static_obj {
  sprite_url = "";
  sprite: HTMLImageElement;
}

export abstract class gravity_obj extends obj{
  gravity = true
}