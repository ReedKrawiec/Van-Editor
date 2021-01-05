
interface prefabs {
  [index:string]:any
}
import {Bishop} from "./Bishop";
import {Board_Label} from "./Board_Label";
import {box} from "./box";
import {bullet} from "./bullet";
import {ControlledPlayer} from "./ControlledPlayer";
import {corner} from "./corner";
import {Cursor} from "./Cursor";
import {Door} from "./Door";
import {Goomba} from "./Goomba";
import {Gun} from "./Gun";
import {King} from "./King";
import {Knight} from "./Knight";
import {Move} from "./Move";
import {Pather} from "./Pather";
import {Pawn} from "./Pawn";
import {Planks} from "./Planks";
import {Player} from "./Player";
import {Queen} from "./Queen";
import {Rook} from "./Rook";
import {Rotator} from "./Rotator";
import {side_wall} from "./side_wall";
import {VertBox} from "./VertBox";
import {wall} from "./wall";
export let prefabs:prefabs = {
	Bishop:Bishop,
	Board_Label:Board_Label,
	box:box,
	bullet:bullet,
	ControlledPlayer:ControlledPlayer,
	corner:corner,
	Cursor:Cursor,
	Door:Door,
	Goomba:Goomba,
	Gun:Gun,
	King:King,
	Knight:Knight,
	Move:Move,
	Pather:Pather,
	Pawn:Pawn,
	Planks:Planks,
	Player:Player,
	Queen:Queen,
	Rook:Rook,
	Rotator:Rotator,
	side_wall:side_wall,
	VertBox:VertBox,
	wall:wall,
}