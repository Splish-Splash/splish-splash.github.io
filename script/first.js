function firstFunc(element_id){
    if(document.getElementById(element_id)){
        let obj = document.getElementById(element_id);
        if(obj.style.display != "block"){
            obj.style.display = "block";
        }
        else{
            obj.style.display = "none";
        }
    }
    else{
        alert("No such element");
    }
}
