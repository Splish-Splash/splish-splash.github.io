window.onresize = move;
window.onscroll = move;

function move(){
    //navigation = document.getElementById('navigation');
    //navigation.style.top = document.body.scrollTop;


}
document.onmousemove = menu;
let navi = document.getElementById('navi');
let index = navi.children[0];
let history = navi.children[1];
let example = navi.children[2];
let index_list = document.getElementById('index');
let history_list = document.getElementById('hist');
let example_list = document.getElementById('ex');
console.log(example.innerHTML);
console.log(index_list.children);
console.log(index_list);
function menu(event){
    
    if (check(event, index, index_list)){
        console.log(event.target==index_list.children[0].children[0]);
        ///////////////////
        index_list.style.top = '35px';
        index_list.style.left = '185px';
        ///////////////////
        index_list.style.position = 'fixed';
        //index_list.style.position = 'fixed';
        index_list.style.zIndex = 2;
        index_list.style.display = 'block';
    } else if(check(event, history, history_list)){
        history_list.style.top = '35px';
        history_list.style.left = '440px';
        history_list.style.position = 'fixed';
        history_list.style.display = 'block';
    }else if(check(event, example, example_list)){
        example_list.style.top = '35px';
        example_list.style.left = '580px';
        example_list.style.position = 'fixed';
        example_list.style.display = 'block';
    }
    else{
        index_list.style.display = 'none';
        history_list.style.display = 'none';
        example_list.style.display = 'none';
    }
}

function check(event, menu, menu_list){
    if (event.target == menu) return true;
    if(menu_list.style.display == 'block'){
        for(let i = 0; i < menu_list.children.length; i++){
            if(event.target == menu_list.children[i].children[0]) return true;
        }
    }
    return false;
}