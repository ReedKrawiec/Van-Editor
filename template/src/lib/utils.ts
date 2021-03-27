
export interface string_dict {
    [index:string]:string
}

export let diff = function(prev_state:string_dict,new_state:string_dict):string_dict{
    let delta_state:string_dict = {};
    let keys = Object.keys(new_state);

    for(let key of keys){
        if(!prev_state || new_state[key] != prev_state[key]){
            delta_state[key] = new_state[key]
        }
    }
    return delta_state;
}