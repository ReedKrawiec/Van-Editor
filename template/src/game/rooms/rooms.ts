
interface room_dir {
  [index:string]:any
}
import {example} from "./example";
export let rooms:room_dir = {
	example:example,
}