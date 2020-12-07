let path = require("path");
let fs = require("fs");

let pre = `
interface prefabs {
  [index:string]:any
}
`;
let pre2 = `
interface room_dir {
  [index:string]:any
}
`
let imports = [];
let exp = ["export let prefabs:prefabs = {"];
let imports2 = [];
let exp2 = ["export let rooms:room_dir = {"];
fs.readdirSync("./src/game/objects").forEach((file) => {
  if(file !== "prefabs.ts" && file !=="abstract"){
    let name = file.substr(0,file.length - 3);
    imports.push(`import {${name}} from "./${name}";`)
    exp.push(`\t${name}:${name},`)  
  }
});
fs.readdirSync("./src/game/rooms").forEach((dir) => {
  if(dir.indexOf(".json") === -1){
    if(dir !== "rooms.ts" && dir !=="abstract"){
      let name = dir.substr(0,dir.length - 3);
      imports2.push(`import {${name}} from "./${name}";`)
      exp2.push(`\t${name}:${name},`)  
    }
  }
});
fs.writeFileSync("src/game/objects/prefabs.ts",pre + imports.join("\n") + "\n" + exp.join("\n") + "\n}")
fs.writeFileSync("src/game/rooms/rooms.ts",pre2 + imports2.join("\n") + "\n" + exp2.join("\n") + "\n}")