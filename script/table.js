//let table = document.getElementById("blog");
document.onmouseover = paint_table;
//document.addEventListener('onmouseover', paint_table);/
function paint_table(event){
    if (event.relatedTarget && event.relatedTarget.tagName == 'TD') {
        event.relatedTarget.style.background = "transparent";
        for (let i = 0; i < event.relatedTarget.children.length; i++){
            event.relatedTarget.children[i].style.background = 'transparent';
        }
    }
    if (event.relatedTarget && event.relatedTarget.parentElement && event.relatedTarget.parentElement.tagName == "TD"){
        event.relatedTarget.parentElement.style.background = 'transparent';
        for (let i = 0; i < event.relatedTarget.parentElement.children.length; ++i){
            event.relatedTarget.parentElement.children[i].style.background = "transparent";
        }
    }
    if (event.target && event.target.tagName == 'TD') {
        event.target.style.background = "white";
        for (let i = 0; i < event.target.children.length; i++){
            event.target.children[i].style.background = 'white';
        }
    }
    if (event.target && event.target.parentElement && event.target.parentElement.tagName == "TD"){
        event.target.parentElement.style.background = "white";
        for (let i = 0; i < event.target.parentElement.children.length; ++i){
            event.target.parentElement.children[i].style.background = 'white';
        }
    }
}