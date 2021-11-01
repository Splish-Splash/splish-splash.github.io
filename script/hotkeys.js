//let gallery = document.getElementById('gallery');
//document.addEventListener('keyup', press_key);
document.onkeyup = press_key;
let ul = gallery.children[1];
let list_items = ul.children;
function press_key(event){
    if (event.key in ['1', '2', '3', '4', '5', '6']){
        console.log(list_items[parseInt(event.key)-1]);
        list_items[parseInt(event.key)-1].scrollIntoView({block:'center', behavior:"smooth"});
    }
}