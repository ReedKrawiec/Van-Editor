import {obj,getId} from "../lib/object";
import {obj_state} from "../lib/state";

export interface collision_box{
  x:number;
  y:number;
  width:number;
  height:number;
}

enum direction{
  left,
  right,
  up,
  down
}

export function getEncompassingBox(objects:obj[]):collision_box{
  let first_object = objects[0].getBoundingBox();
  let max_y = first_object.top_right.y;
  let max_x = first_object.top_right.x;
  let min_y = first_object.bottom_left.y;
  let min_x = first_object.bottom_left.x;
  for(let a = 1; a < objects.length;a++){
    let object = objects[a].getBoundingBox();
    if(object.top_right.y > max_y)
      max_y = object.top_right.y;
    if(object.top_right.x > max_x)
      max_x = object.top_right.x;
    if(object.bottom_left.y < min_y)
      min_y = object.bottom_left.y;
    if(object.bottom_left.x < min_x)
      min_x = object.bottom_left.x;
  }
  return {
    x:min_x + (max_x - min_x)/2,
    y:min_y + (max_y - min_y)/2,
    height:max_y - min_y,
    width:max_x - min_x
  }
}

export function check_all_objects(c: collision_box,objs:obj[],exemption:string[] = []):obj[]{
  return objs.filter((a)=>(!exemption.some((b)=>a.tags.indexOf(b) !== -1) && a.collidesWithBox(c)));
}

export function check_all_collisions(c: collision_box,objs:obj[],exemption:string[] = []):Array<obj>{
  let matched = [];
  for (let a of objs) {
    if (!exemption.some((b)=>a.tags.indexOf(b) !== -1) && a.collision && a.collidesWithBox(c)) {
      matched.push(a);
    }
  }
  return matched
}
//Checks up to the first collision
export function check_collisions(c: collision_box, objs: obj[], exemption:string) {
  for (let a of objs) {
    if (a.id !== exemption && a.collision && a.collidesWithBox(c)) {
      return a;
    }
  }
  return null;
}

function velocity_max(velocity:number,box:collision_box,objs:obj[], exemption:string,dir:direction){
  let collision = check_collisions(box, objs, exemption);
  if(collision == null){
    return velocity;
  }
  else{
    let collider = collision;
    let origin = getId(objs,exemption);
    let orig_st = origin.state as obj_state;
    let collider_st = collider.state as obj_state;
    let orig_col = origin.getFullCollisionBox();
    let collider_col = collider.getFullCollisionBox();
    if(dir == direction.left){
      return (orig_col.x - orig_col.width/2) - (collider_col.x + collider_col.width/2);
    }
    else if(dir == direction.right){
      return (collider_col.x - collider_col.width/2) - (orig_col.x + orig_col.width/2);
    }
    else if(dir == direction.down){
      return (orig_col.y - orig_col.height/2) - (collider_col.y + collider_col.height/2);
    }
    else if(dir == direction.up){
      return (collider_col.y - collider_col.height/2) - (orig_col.y + orig_col.height/2);
    }
  }
}

export function velocityCollisionCheck(object:obj,list:obj[]) {
  list = [...list];
  let ob = object;
  let st = object.state as obj_state;
  let x_vel = st.velocity.x;
  let y_vel = st.velocity.y;
  if(x_vel == 0 && y_vel == 0) return;
  if(!ob.collision){
    (<obj_state>ob.state).position.x += (<obj_state>ob.state).velocity.x;
    (<obj_state>ob.state).position.y += (<obj_state>ob.state).velocity.y;
    return;
  }
  let col_box = ob.getFullCollisionBox();
  if (x_vel > 0) {
    let box = {
      x: col_box.x + col_box.width/2 + x_vel/2,
      y: col_box.y,
      width: x_vel,
      height: col_box.height
    };
    let vel = velocity_max(st.velocity.x,box,list,ob.id,direction.right);
    if(vel > 0){
      st.position.x = st.position.x + vel
    }
    else{
      st.velocity.x = 0;  
    }
  }
  else if (x_vel < 0) {
    let box = {
      x: x_vel/2 + col_box.x - col_box.width/2,
      y: col_box.y,
      width: -1 * x_vel,
      height: col_box.height
    }
    let vel = velocity_max(st.velocity.x,box,list,ob.id,direction.left);
    if(vel < 0){
      st.position.x = st.position.x + vel
    }
    else{
      st.velocity.x = 0; 
    }
  }
  if (y_vel > 0) {
    let box = {
      x: col_box.x,
      y: col_box.y + col_box.height/2 + y_vel/2,
      width: col_box.width,
      height: y_vel
    }
    let vel = velocity_max(st.velocity.y,box,list,ob.id,direction.up);
    if(vel > 0){
      st.position.y = st.position.y + vel;
    }
    else{
      st.velocity.y = 0;
    }
  }
  else if (y_vel < 0) {
    let box = {
      x: col_box.x,
      y: y_vel/2 + col_box.y - col_box.height/2,
      width: col_box.width,
      height: -1 * y_vel
    }
    let vel = velocity_max(st.velocity.y,box,list,ob.id,direction.down);
    if(vel < 0){
      st.position.y = st.position.y + vel;
    }
    else{
      st.velocity.y = 0;
    }
  }
}