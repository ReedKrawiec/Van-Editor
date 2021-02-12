import { state_func, obj_state, Vector, dimensions } from "./state";
import { render_func, render_type ,scale_type} from "./render";
import { Particle, positioned_sprite, sprite, sprite_gen } from "./sprite";
import { collision_box } from "./collision";
import { Unbind, Bind, control_func, exec_type } from "./controls";
import {audio} from "./audio";
import {DEBUG, copy, game} from "../van";
import { Vec } from "./math";
import {root_path,path} from "../lib/debug"; 
import {Text} from "./hud";

interface obj_i<T> {
  statef: state_func<T>,
  renderf: render_func
}

export function getId(a: obj[], id: string): obj {
  for (let b = 0; b < a.length; b++) {
    if (a[b].id == id) {
      return a[b];
    }
  }
  return undefined;
}

//Finds the side lengths of a triangle if given the  angle (in degrees)
//along with the length of the hypotenuse
export function rotation_length(length: number, degree: number) {
  let a_len = length * Math.sin(degree * Math.PI / 180);
  let b_len = length * Math.cos(degree * Math.PI / 180);
  return {
    x: a_len,
    y: b_len
  }
}

//This counter tracks the global number of objects created so far
//an object's id (if not overwritten) will be a unique integer, which
//uses this counter.
let counter = 0;

interface anim_storage {
  [index: string]: [Array<[number, sprite]>, number]
}

interface void_func {
  (): void
}

class animations {
  animations: anim_storage = {};
  //Tracks the time passed since the current animation
  //has started playing
  animation_tracker = 0;
  current: string;
  callback: void_func;
  animating:boolean = false;
  //defines an animation that can be played using the play method
  //the keyframes are an array of tuples in the 
  //format of [(time for this sprite to show), sprite]
  add(name: string, keyframes: Array<[number, sprite]>, length: number) {
    this.animations[name] = [keyframes, length];
  }
  play(name: string, callback?: void_func) {
    this.current = name;
    this.callback = callback;
    this.animation_tracker = 0;
  }
  renderf(t: number): sprite {
    let curr_animation = this.animations[this.current][0];
    let length: number = this.animations[this.current][1];
    let index = 0;
    for (; index < curr_animation.length - 1; index++) {
      let keyframe_time = curr_animation[index][0];
      let next_keyframe_time = curr_animation[index + 1][0];
      if (this.animation_tracker >= keyframe_time && this.animation_tracker < next_keyframe_time) {
        this.animation_tracker = this.animation_tracker + t;
        this.animating = true;
        //Returns the raw sprite that's correct to show at this time
        return curr_animation[index][1];
      }
    }
    if (this.animation_tracker >= length) {
      this.animation_tracker = 0;
      this.animating = false;
      if (this.callback) {
        this.callback();
      }
    }
    else {
      this.animation_tracker += t;
    }
    //Returns the last appropriate frame until the animation is over.
    return curr_animation[index][1];
  }
}

interface hitbox{
  width:number,
  height:number,
  x_offset:number,
  y_offset:number
}

export interface params{
  [index:string]:boolean|string|number
}

export interface bounding_box{
  bottom_left:Vector,
  top_right:Vector
}

export abstract class obj{
  //Url to the object's individual sprite, or all of its sprites
  //bundled into a spritesheet
  sprite_url = "./sprites/Error.png";
  //This is the loaded sprite/spritesheet of the object
  //which is fetched from the url above
  sprite_sheet: HTMLImageElement;
  state: obj_state;
  render_type = render_type.sprite;
  //These should correspond to the actual object's sprite height and width
  //If using a sprite sheet, these be one sprite's height and width.
  height: number;
  width: number;
  
  collision: boolean = false;
  hitbox: hitbox
  id: string;
  //Array of bind ids
  //Binds are indentified by a unique number that is return when
  //The bind is created. We must store these ids in order to 
  //delete the binds when they are manually unbound, or the object is deleted.
  binds: Array<number>;
  tags:string[] = [];
  //tags are used to exclude or include objects when checking for collisions,
  //and for object identification / classification in scripts
  render = true;
  animations = new animations();
  audio = new audio();
  //Last render time, used to calculate delta_time
  last_render:number = 0;
  game:game<unknown>;
  parent:composite_obj;
  //Params are options for the object, that do not rely on state
  // For example, the side of a piece in chess.
  params:unknown = {};
  static = false;
  layer:number = 1;
  save_to_file:boolean = true;
  tick_state = true;
  scale_type = scale_type.grow;
  static default_params:unknown = {};
  proximity_boxes:Set<Vector> = new Set();
  opacity:number;
  text_nodes:Text[] = [];
  getState() {
    return this.state;
  }
  //Animations should be registered using this.animations.add in this method
  registerAnimations() {

  }
  //Sounds should be registered using this.audio.add in this method.
  registerAudio() {

  }
  defaultParams():unknown{
    return copy(this.defaultParams);
  }
  x_proxy(val:number){
    return val;
  }
  y_proxy(val:number){
    return val;
  }
  recalculateProxBoxes(){
    let bounds = this.getBoundingBox();
          
    let prox_map = this.game.getRoom().proximity_map;
    let boxes = prox_map.getBoxLocations(this);
    for (let cord of this.proximity_boxes) {
      prox_map.remove(cord, this);
    }
    for (let cord of boxes) {
      prox_map.add(cord, this);
    }  
  }
  constructor(state:obj_state,params = obj.default_params) {

    this.id = "" + counter;
    this.binds = [];
    counter++;
    this.params = Object.assign({},params);
    this.registerControls();
    this.registerAudio();
    let position_proxy = (pos:Vector) => new Proxy(pos, {
      "set": (target, prop, reciever: number) => {

        if (prop == "y" || prop == "x") {
          if (target[prop] == reciever) {
            return true;
          }
          let room = this.game.getRoom();
          let offset = 0
          if (prop == "y") {
            offset = this.getFullCollisionBox().height / 2;
          }
          else if (prop == "x") {
            offset = this.getFullCollisionBox().width / 2;
          }
          if (reciever > 0) {
            offset = -offset;
          }
          if (reciever > room.proximity_map.length / 2 + offset) {
            reciever = room.proximity_map.length / 2 + offset;
          }
          if (reciever < -room.proximity_map.length / 2 + offset) {
            reciever = -room.proximity_map.length / 2 + offset
          }
          target[prop] = this.x_proxy(reciever);
          this.recalculateProxBoxes();
          if(this.static){
            this.game.redrawStatics();
          }
        }
        return true;
      }
    });
    let scaling_proxy = (a:dimensions) => new Proxy(a,{
      "set" : (target,prop,reciever:number) => {
        if(prop == "width" || prop == "height"){
          target[prop] = reciever;
          this.recalculateProxBoxes();
          if(this.static){
            this.game.redrawStatics();
          }
        }
        return true;
      }
    });
    //Creates a copy of the passed in initial state to avoid 
    //Updating the saved state of the room
    this.state = JSON.parse(JSON.stringify(state));
    this.state = new Proxy(this.state,{
      "set": (target, prop, reciever: unknown) => {
        if (prop == "position") {
          let res = reciever as Vector;
          let vec = Vec.create(res.x,res.y);
          target[prop] = position_proxy(vec);
          if(this.game && this.game.getRoom()){
            this.recalculateProxBoxes();
            if(this.static){
              this.game.redrawStatics();
            }
          }
        } else if(prop == "scaling"){
          let res = reciever as dimensions;
          let dim = {width:res.width,height:res.height};
          target[prop] = scaling_proxy(dim);
          if(this.game && this.game.getRoom()){
            this.recalculateProxBoxes();
            if(this.static){
              this.game.redrawStatics();
            }
          }
        }
        else{
          (target as any)[prop] = reciever;
        }
        return true;
      }
    });
    this.state.position = position_proxy(this.state.position); 
    this.state.scaling = scaling_proxy(this.state.scaling);
    this.params = params;
  }
  load() {
    let _this = this;
    return new Promise<void>((resolve, reject) => {
      let a = new Image();
      let p = this.sprite_url;
      if(DEBUG){
        p = path.join(root_path,this.sprite_url);
      }
      a.src = p;
      a.onload = (async () => {
        _this.sprite_sheet = a;
        _this.registerAnimations();
        await this.audio.load();
        resolve();
      });
    })
  }
  //Within normal objects, this just returns an array that contains the object.
  //This method is overwritten by composite objects, which returns every object
  //that the composite object contains. This simplifies the backend work, as each
  //object returns an array of atleast one object.
  combinedObjects():obj[]{
    return [this];
  }
  getBoundingBox():bounding_box{
    let coll_box = this.getFullCollisionBox();
    return {
      top_right:{
        x:coll_box.x + coll_box.width/2,
        y:coll_box.y + coll_box.height/2
      },
      bottom_left:{
        x:coll_box.x - coll_box.width/2,
        y:coll_box.y - coll_box.height/2
      }
    }
  }
  //Distance from one object to another.
  distance(target:obj):number{
    return Vec.distance(this.state.position,target.state.position);
  }
  applyForce(vel:Vector){
    this.state.velocity.x += vel.x;
    this.state.velocity.y += vel.y;
  }
  angleTowards(a: obj): number {
    return this.angleTowardsPoint(a.state.position);
  }
  angleTowardsPoint(target:Vector):number{
    return 90 - Math.atan2((target.y - this.state.position.y),(target.x - this.state.position.x)) * 180/Math.PI;
  }
  bindControl(key: string, x: exec_type, func: control_func, interval = 1) {
    this.binds.push(Bind(key, func, x, interval, this));
  }
  //This method is where controls and keybinds should
  //be defined using bindControl
  registerControls(){

  }
  statef(time:number){
    for(let node of this.text_nodes){
      node.statef(time);
    }
  }
  delete() {
    for (let a of this.binds) {
      Unbind(a);
    }
    for (let cord of this.proximity_boxes){
      this.game.getRoom().proximity_map.remove(cord,this);
    }
    this.game.getRoom().deleteItem(this.id);
    if(this.static){
      this.game.redrawStatics();
    }
  }
  UnbindAll(){
    for (let a of this.binds) {
      Unbind(a);
    }
  }
  //Returns the collision box of the object
  //Does not have to correspond to the object's sprite's size 
  //A composite object instead returns the bounding box that 
  //contains every one of its contained objects
  getFullCollisionBox():collision_box{
    //If a developer defined hitbox exists, use that, otherwise
    //generate it using the sprite width / height
    if(this.hitbox){
      return {
        x:this.state.position.x,
        y:this.state.position.y,
        width:this.hitbox.width * this.state.scaling.width,
        height:this.hitbox.height * this.state.scaling.height
      }
    }
    else{
      return {
        x:this.state.position.x,
        y:this.state.position.y,
        width:this.width * this.state.scaling.width,
        height:this.height * this.state.scaling.height
      }
    }
  }
  //This is another methods, similar to getCombined
  //Just returns an array containing the object's collision box
  //Overwritten in composite objects to return every object's collision box
  //within the composite obect.
  getAllCollisionBoxes():collision_box[]{
    return [this.getFullCollisionBox()]
  }
  //Checks to see if an object actually collides with the provided box.
  //A box represents an area within the game space
  //Checking for collisions is trivial currently, as all hitboxes are axis aligned
  //But implementing a more complicated physics engine would make this method's impl.
  //significatly more complex.
  collidesWithBox(other_object: collision_box): boolean {
    let collides_horrizontally = false, collides_vertically = false;
    let hbox = this.hitbox;
    if(!this.hitbox){
      hbox = {
        x_offset:0,
        y_offset:0,
        width:this.width,
        height:this.height
      }
    }
    let object_bounds = {
      left: (this.state.position.x + hbox.x_offset - hbox.width * this.state.scaling.width / 2),
      right: (this.state.position.x + hbox.x_offset + hbox.width * this.state.scaling.width / 2),
      top: (this.state.position.y + hbox.y_offset + hbox.height * this.state.scaling.height / 2),
      bottom: (this.state.position.y + hbox.y_offset - hbox.height * this.state.scaling.height / 2)
    }

    let other_object_bounds = {
      left: (other_object.x - other_object.width / 2),
      right: (other_object.x + other_object.width / 2),
      top: (other_object.y + other_object.height / 2),
      bottom: (other_object.y - other_object.height / 2)
    }

    //We can compare the sides of the boxes to see if they overlap
    //We check once for hoizontal overlap, then vertical.
    if ((object_bounds.left >= other_object_bounds.left && object_bounds.left < other_object_bounds.right) || (other_object_bounds.left > object_bounds.left && other_object_bounds.left < object_bounds.right)) {
      collides_horrizontally = true;
    }
    else{
      return false;
    }
    if ((object_bounds.bottom >= other_object_bounds.bottom && object_bounds.bottom < other_object_bounds.top) || (other_object_bounds.bottom > object_bounds.bottom && other_object_bounds.bottom < object_bounds.top)){
      collides_vertically = true;
    }
    else{
      return false;
    }
    return collides_horrizontally && collides_vertically;
  }
  //The particle must be registered in the room's registerParticles method 
  //The name parameter should correspond to the key of a particle
  emitParticle(name:string,offset:Vector,lifetime:number,range:number){
    let room = this.game.getRoom();
    let st = this.state as unknown as obj_state;
    let final_position:Vector = {
      x:st.position.x + offset.x,
      y:st.position.y + offset.y
    }
    room.emitParticle(name,final_position,lifetime,range)
  }
  //Internal method that keeps calculates the delta_time
  //Also converts individual sprites into arrays of one sprite.
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
  //Most objects should not be overwritting the renderf method
  //Returns the appropriate sprite for the object
  renderf(time: number): positioned_sprite[] | positioned_sprite{
    //If the object doesn't have registered animations, or isn't playing one
    //We have to create the sprite here.
    if (Object.keys(this.animations.animations).length == 0 || !this.animations.current) {
      if(!this.sprite_sheet){
        return {
          sprite:undefined,
          x:this.state.position.x,
          y:this.state.position.y
        }
      }
      let sprite_height = this.height;
      let sprite_width = this.width;
      //Technically we don't need to define an object height and width
      //If the sprite_url points to a single static sprite, as we can just pull
      //the dimensions from the image
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
          opacity:this.opacity || 1
        },
        x: this.state.position.x,
        y: this.state.position.y
      };
    }
    return {
      sprite:this.animations.renderf(time),
      x: this.state.position.x,
      y: this.state.position.y
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
  constructor(pos:obj_state,params:unknown){
    super(pos,params);
  }
  async load(){
    await super.load();
    await Promise.all([...this.objects.map((a)=>a.load()),...this.statics.map(a=>a.obj.load())]);
  }
  combinedObjects():obj[]{
    let combined = [...this.objects,...this.statics.map(a=>a.obj)];
    return [...combined,this];
  }
  getItemsByTag(tag:string){
    return this.combinedObjects().filter((a)=>a.tags.indexOf(tag) > -1);
  }
  addItem(a:obj,list=this.objects){
    a.parent = this;
    list.push(...a.combinedObjects());
  }
  addItems(a:obj[],list=this.objects){
    for(let o of a){
      this.addItem(o,list);
    }
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