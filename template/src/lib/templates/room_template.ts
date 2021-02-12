export let room_template = 
`import { room } from "lib/room";
import { game } from "src/van";
import { state_config } from "lib/room";
import * as config from "./template.json";
let cfig = config as unknown as state_config;
interface template_state {

}

export class template extends room<template_state>{
  background_url = "./sprites/Error.png";
  render = true;
  constructor(game: game<unknown>) {
    super(game, cfig);
  }
  registerControls() {

  }
  registerParticles() {

  }
  statef(delta_time: number) {
    super.statef(delta_time);
  }

}`;