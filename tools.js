function includesID(list,id){
    has = false
    for(key in list){
        if(list[key]['id'] == id){
            has = true
        }
    }
    return has
}
function play(id){
    var bc = new BroadcastChannel("player-ui-play")
    bc.postMessage({
        id: id
    })
}
function addlist(id){
    const d = {
            id: id,
            image: document.getElementById(id+"_tr_image").src,
            title: document.getElementById(id+"_tr_name").innerHTML,
            arts: document.getElementById(id+"_tr_arts").innerHTML
        }
        list = JSON.parse(localStorage.getItem('list'))
        nlist = []
        if(!includesID(list['list'],id)){
            nlist.push(d)
            list['list'].forEach((item,_)=>{
                nlist.push(item)
            });
            list['list'] = nlist
            alert('添加成功！')
        }else{
            alert('已存在')
        }
        localStorage.setItem('list',JSON.stringify(list))
}
function openNew(id){
    window.open('https://music.163.com/#/song?id='+id)
}
function getQueryString(name) {
    const url_string = window.location.href
    const url = new URL(url_string);
    return url.searchParams.get(name);
}