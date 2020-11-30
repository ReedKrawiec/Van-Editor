
interface prefabs {
  [index:string]:any
}
import {box} from "./box";
import {bullet} from "./bullet";
import {ControlledPlayer} from "./ControlledPlayer";
import {Cursor} from "./Cursor";
import {Door} from "./Door";
import {Goomba} from "./Goomba";
import {Gun} from "./Gun";
import {Player} from "./Player";
import {Test} from "./Test";
import {VertBox} from "./VertBox";
export let prefabs:prefabs = {
	box:box,
	bullet:bullet,
	ControlledPlayer:ControlledPlayer,
	Cursor:Cursor,
	Door:Door,
	Goomba:Goomba,
	Gun:Gun,
	Player:Player,
	Test:Test,
	VertBox:VertBox,
}