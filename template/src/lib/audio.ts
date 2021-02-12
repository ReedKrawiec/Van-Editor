import { root_path, path } from "./debug";
import { DEBUG } from "../van";

interface sound_storage {
  [index: string]: HTMLAudioElement
}

export class audio {
  sounds: sound_storage = {};
  add(name: string, url: string) {
    let p = url;
    if (DEBUG) {
      p = path.join(root_path, url);
    }
    this.sounds[name] = new Audio(p);
  }
  async load() {
    let keys = Object.keys(this.sounds);
    let promises = keys.map((key) => {
      return new Promise<void>((resolve, reject) => {
        this.sounds[key].addEventListener("canplaythrough", (e) => {
          resolve();
        })
      })
    })
    try {
      let x = await Promise.all(promises);
      return (x);
    }
    catch (e) {
      console.log(e);
    }
  }
  play(name: string, volume: number) {
    let a = this.sounds[name];
    a.pause()
    a.currentTime = 0;
    a.volume = volume;
    a.play();
  }
}