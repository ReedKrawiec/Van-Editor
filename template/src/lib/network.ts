import { peer_connection, peer_to_peer_game } from "src/van";
import { getRandInt } from "lib/math";
import Peer from 'peerjs';
import { p2p_room } from "./room";
import { g } from "game/main";

export enum net_type {
    single_player,
    web,
    single_host
}

export enum obj_net_type {
    local,
    sync,
    host
}

interface peer{
    connection:Peer.DataConnection,
    authenticated:boolean,
    local_id:string,
    peer_id:string
}



export abstract class Network {
    type: net_type;
    game: peer_to_peer_game<unknown>;
    peer_connections: peer[] = [];
    id = getRandInt(0, 999999);
    local_connection: Peer;
    max_players:number = 8;
    current_players:number = 0;
    id_counter = 1;
    password:string = "";
    local_id:string = "0";
    constructor() {
        this.local_connection = new Peer(this.id + "", {
            host: 'localhost',
            port: 9000,
            path: '/'
        });
        this.local_connection.on("error",(err)=>{
            this.error(err);
        })
        this.local_connection.on("connection",(connection)=>{
            this.recieve_connect(connection);
        })
    }
    init(){
        
    }
    send(type:string,data:any) {

    }
    recieve(type:string, data: any, local_id:string) {
        let room = this.game.state.current_room as p2p_room<unknown>;
        switch(type){
            case "update_item":{
              let {id,state} = data;
              let obj = room.getObj(id);
              for(let key of Object.keys(state)){
                (<any>obj.state)[key] = JSON.parse(state[key]);
              }
              break;
            }       
            case "add_item":{
              let {state_config,id} = data;
              room.addItemStateConfig(state_config,id);
              break;
            }
            case "connection":{
                let {address,local_id} = JSON.parse(data);
                if(address == this.id){
                    this.local_id = local_id;
                } else if(this.current_players < this.max_players && !this.peer_connections.map(ent => ent.peer_id).includes(address)){
                    this.connect(address,this.password,local_id);
                    this.max_players++;
                }
            }
          }
          room.parse_packet(type,data,local_id);
    }
    async connect(address: string, password = "", local_id:string = undefined):Promise<boolean> {
        return;
    }
    recieve_connect(peer:Peer.DataConnection) {

    }
    error(error:any){

    }
}

export class Single_Player extends Network {
    type = net_type.single_player;
}

export class Web extends Network {
    type = net_type.web;
    async connect(address: string,password = "", local_id:string = "0"):Promise<boolean> {
        return new Promise<boolean>((resolve,reject)=>{
            let peer = this.local_connection.connect(address);
            peer.on("open",()=>{
                let entry:peer = {
                    authenticated:false,
                    connection:peer,
                    peer_id:address,
                    local_id
                }
                this.peer_connections.push(entry);
                peer.send(JSON.stringify({
                    type:"password",
                    data:password
                }));
                peer.on("data",(d)=>{
                    let {type,data} = JSON.parse(d);
                    if(type == "auth" && data.result == "success" && !entry.authenticated){
                        entry.authenticated = true;
                        peer.on("data", (d) => {
                            let {type,data,id} = JSON.parse(d);
                            this.recieve(type,data,entry.local_id);
                        });
                        resolve(true);
                    }
                    resolve(false);
                })
            })
        })
    }
    send(type:string,data:any){
        for(let peer of this.peer_connections){
            peer.connection.send(JSON.stringify({type,data,id:this.local_id}))
        }
    }
    recieve_connect(peer:Peer.DataConnection){
        let entry:peer = {
            connection:peer,
            authenticated:false,
            peer_id:peer.peer,
            local_id:undefined
        }
        this.peer_connections.push(entry);
        peer.on("data",(d)=>{
            let {type,data} = JSON.parse(d);
            if(type == "password" && data == this.password && !entry.authenticated){
                console.log("password right")
                entry.authenticated = true;
                entry.local_id = `${this.id_counter++}`
                peer.send(JSON.stringify({
                    type:"auth",
                    data:{
                        result:"success",
                        assigned_id:entry.local_id
                    }
                }))
                this.send("connection",JSON.stringify({
                    address:peer.peer,
                    local_id:entry.local_id
                }));
                entry.authenticated = true;
                peer.on("data",(d) => {
                    let {type,data} = JSON.parse(d);
                    this.recieve(type,data,entry.local_id);
                })
            }
            else if(type == "password" && data != this.password){
                console.log("password wrong")
                peer.send(JSON.stringify({
                    type:"auth",
                    data: "failure"
                }))
            }
        })
    }
}