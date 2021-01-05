
interface room_dir {
  [index:string]:any
}
import {Board} from "./Board";
import {Overworld} from "./Overworld";
import {resturant} from "./resturant";
import {TestR} from "./TestR";
import {Underworld} from "./Underworld";
export let rooms:room_dir = {
	Board:Board,
	Overworld:Overworld,
	resturant:resturant,
	TestR:TestR,
	Underworld:Underworld,
}