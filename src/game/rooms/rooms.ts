
interface room_dir {
  [index:string]:any
}
import {Overworld} from "./Overworld/Overworld";
import {Underworld} from "./Underworld/Underworld";
export let rooms:room_dir = {
	Overworld:Overworld,
	Underworld:Underworld,
}