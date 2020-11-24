import {velocity,obj_state,room_state} from "../lib/state";
import {game,viewport} from "../van";
import {Camera} from "../lib/render";
import {rooms} from "../van";
import {Overworld} from "./rooms/Overworld/Overworld";
let canvas_element:HTMLCanvasElement = document.getElementById("target") as HTMLCanvasElement;

export let g = new game(canvas_element.getContext("2d"),{}, async (g:game<{}>)=>{
  g.state.cameras = [
    new Camera({
      x:0,
      y:0,
      dimensions:{
        height:viewport.height,
        width:viewport.width * 4/5
      },
      scaling:0.5,
      debug:false
    }
    ,{
      x:1,
      y:0,
      width:0.8,
      height:1
    }),
    new Camera({
      x:0,
      y:0,
      dimensions:{
        width:viewport.width/5,
        height:viewport.height
      },
      scaling:0.2,
      debug:false
    },{
      x:viewport.width * 4/5,
      y:0,
      width:0.2,
      height:1
    })
  ]
  let path = "./rooms/Overworld/Overworld.ts";
  //console.log(await import(path));
  g.loadRoom(new Overworld(g));
  console.log(JSON.stringify(rooms));
});

