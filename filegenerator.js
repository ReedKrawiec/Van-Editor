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
  if(dir !== "rooms.ts"){
    imports2.push(`import {${dir}} from "./${dir}/${dir}";`)
    exp2.push(`\t${dir}:${dir},`)  
  }
});
fs.writeFileSync("src/game/objects/prefabs.ts",pre + imports.join("\n") + "\n" + exp.join("\n") + "\n}")
fs.writeFileSync("src/game/rooms/rooms.ts",pre2 + imports2.join("\n") + "\n" + exp2.join("\n") + "\n}")