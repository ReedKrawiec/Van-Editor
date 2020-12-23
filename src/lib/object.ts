import { state_func, obj_state, position, dimensions } from "./state";
import { render_func, render_type ,scale_type} from "./render";
import { Particle, positioned_sprite, sprite, sprite_gen } from "./sprite";
import { collision_box } from "./collision";
import { Unbind, Bind, control_func, exec_type } from "./controls";
import {audio} from "./audio";
import {deep, game} from "../van";
import { Distance } from "./math";

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



export abstract class obj{
  //Url to the object's individual sprite, or all of its sprites
  //bundled into a spritesheet
  sprite_url = "";
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
  layer:number = 1;
  save_to_file:boolean = true;
  tick_state = true;
  scale_type = scale_type.grow;
  static default_params:unknown = {};
  opacity:number = 1;
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
    return deep(this.defaultParams);
  }
  constructor(state:obj_state,params = obj.default_params) {
    
    this.id = "" + counter;
    this.binds = [];
    counter++;
    this.params = params;
    this.registerControls();
    this.registerAudio();
    //Creates a copy of the passed in initial state to avoid 
    //Updating the saved state of the room
    this.state = JSON.parse(JSON.stringify(state));
    
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
  //Within normal objects, this just returns an array that contains the object.
  //This method is overwritten by composite objects, which returns every object
  //that the composite object contains. This simplifies the backend work, as each
  //object returns an array of atleast one object.
  combinedObjects():obj[]{
    return [this];
  }
  //Distance from one object to another.
  distance(target:obj):number{
    return Distance(this.state.position,target.state.position);
  }
  angleTowards(a: obj): number {
    return this.angleTowardsPoint(a.state.position);
  }
  angleTowardsPoint(target:position):number{
    if (this.state.position.x < target.x && this.state.position.y > target.y
      || (this.state.position.x < target.x && this.state.position.y < target.y)) {
      return 90 - Math.atan((target.y - this.state.position.y) / (target.x - this.state.position.x)) * 180 / Math.PI
    }
    if (this.state.position.x > target.x && this.state.position.y < target.y
      || this.state.position.x > target.x && this.state.position.y > target.y) {
      return 270 - Math.atan((target.y - this.state.position.y) / (target.x - this.state.position.x)) * 180 / Math.PI
    }
    return 0;
  }
  bindControl(key: string, x: exec_type, func: control_func, interval = 1) {
    this.binds.push(Bind(key, func, x, interval, this));
  }
  //This method is where controls and keybinds should
  //be defined using bindControl
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
  emitParticle(name:string,offset:position,lifetime:number,range:number){
    let room = this.game.getRoom();
    let st = this.state as unknown as obj_state;
    let final_position:position = {
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
      if(!this.sprite_sheet || !this.height || !this.width){
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
          opacity:this.opacity
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