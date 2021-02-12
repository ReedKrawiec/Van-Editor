import {Vector,obj_state,room_state} from "../lib/state";
import {game,GetViewportDimensions,viewport} from "../van";

let canvas_element:HTMLCanvasElement = document.getElementById("target") as HTMLCanvasElement;

declare global {
  interface Window { board_functions: any; }
}

interface globals{
}

export let g = new game<globals>(canvas_element.getContext("2d"),{
});

g.loadRoomString("example");

