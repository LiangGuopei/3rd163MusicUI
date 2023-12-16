function includesID(list,id){
    has = false
    for(key in list){
        if(list[key]['id'] == id){
            has = true
        }
    }
    return has
}