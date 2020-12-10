import {velocity,obj_state,room_state} from "../lib/state";
import {game,GetViewportDimensions,viewport} from "../van";
let canvas_element:HTMLCanvasElement = document.getElementById("target") as HTMLCanvasElement;

interface globals{
  test:number
}

export let g = new game<globals>(canvas_element.getContext("2d"),{
  test:0
});
g.loadRoomString("Board");

