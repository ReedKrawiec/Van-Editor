
interface room_dir {
  [index:string]:any
}
import {Board} from "./Board";
import {Overworld} from "./Overworld";
import {Underworld} from "./Underworld";
export let rooms:room_dir = {
	Board:Board,
	Overworld:Overworld,
	Underworld:Underworld,
}