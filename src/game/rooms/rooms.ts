
interface room_dir {
  [index:string]:any
}
import {Board} from "./Board";
import {Overworld} from "./Overworld";
import {TestR} from "./TestR";
import {Underworld} from "./Underworld";
export let rooms:room_dir = {
	Board:Board,
	Overworld:Overworld,
	TestR:TestR,
	Underworld:Underworld,
}