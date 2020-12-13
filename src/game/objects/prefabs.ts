
interface prefabs {
  [index:string]:any
}
import {Bishop} from "./Bishop";
import {Board_Label} from "./Board_Label";
import {box} from "./box";
import {bullet} from "./bullet";
import {ControlledPlayer} from "./ControlledPlayer";
import {Cursor} from "./Cursor";
import {Door} from "./Door";
import {Goomba} from "./Goomba";
import {Gun} from "./Gun";
import {King} from "./King";
import {Knight} from "./Knight";
import {Move} from "./Move";
import {Pawn} from "./Pawn";
import {Player} from "./Player";
import {Queen} from "./Queen";
import {Rook} from "./Rook";
import {Rotator} from "./Rotator";
import {VertBox} from "./VertBox";
export let prefabs:prefabs = {
	Bishop:Bishop,
	Board_Label:Board_Label,
	box:box,
	bullet:bullet,
	ControlledPlayer:ControlledPlayer,
	Cursor:Cursor,
	Door:Door,
	Goomba:Goomba,
	Gun:Gun,
	King:King,
	Knight:Knight,
	Move:Move,
	Pawn:Pawn,
	Player:Player,
	Queen:Queen,
	Rook:Rook,
	Rotator:Rotator,
	VertBox:VertBox,
}