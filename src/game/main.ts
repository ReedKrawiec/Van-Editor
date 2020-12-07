import {velocity,obj_state,room_state} from "../lib/state";
import {game,GetViewportDimensions,viewport} from "../van";
let canvas_element:HTMLCanvasElement = document.getElementById("target") as HTMLCanvasElement;

export let g = new game(canvas_element.getContext("2d"),{}, async (g:game<{}>)=>{
  g.loadRoomString("Overworld");
});

