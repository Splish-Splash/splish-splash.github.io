
function eemail(){
    let elem = document.getElementById('mail');
    let block = document.getElementById('mail_warn');
    let submit = document.getElementById('submit');
    block.style.color = 'red';
    if (elem.value.length == 0){
        block.innerHTML = "Поле не может быть пустым";
        block.style.display = 'block';
        elem.style.background = 'red';
        submit.disabled = true;
        return false;
    }
    if(elem.value.match(/\S+/) != elem.value){
        block.innerHTML = "В почте не должно быть пробелов";
        block.style.display = 'block';
        elem.style.background = 'red';
        submit.disabled = true;
        return false;
    }
    if (elem.value.match(/\S+@\S+/) != elem.value){
        block.innerHTML = "В почте должна присутствовать собачка";
        block.style.display = 'block';
        elem.style.background = 'red';
        submit.disabled = true;
        return false;
    }
    if (elem.value.match(/\S+@\S+.\S+/) != elem.value){
        block.innerHTML = "Неправильно указана почта(должна быть точка";
        block.style.display = 'block';
        elem.style.background = 'red';
        submit.disabled = true;
        return false;
    }
    if (elem.value.match(/\S+nure.ua/) != elem.value){
        block.innerHTML = "Почта должна быть домена nure.ua";
        block.style.display = 'block';
        elem.style.background = 'red';
        submit.disabled = true;
        return false;
    }
    block.style.display = 'none';
    elem.style.borderColor = 'green';
    elem.style.background = '#B6FCD5';
    submit.disabled = false;
    return true;
}
function number(){
    let elem = document.getElementById("phone");
    let block = document.getElementById('phone_warn');
    block.style.color = 'red';
    let phone_reg = /380[1-9]\d\d\d\d\d\d\d\d/;
    if(elem.value.length == 0){
        block.style.display="block";
        block.innerHTML = "Поле не может быть пустым";
        elem.style.background = 'red';
        submit.disabled = true;
        return false;
    }
    if(elem.value.length != 12){
        block.style.display = "block";
        block.innerHTML = "Неправильное количество символов";
        elem.style.background = 'red';
        submit.disabled = true;
        return false;
    }
    if (elem.value.match(phone_reg) != elem.value){
        block.style.display = "block";
        block.innerHTML = "Неправильный формат ввода";
        elem.style.background = 'red';
        submit.disabled = true;
        return false;
    }
    block.style.display = "none";
    elem.style.borderColor = 'green';
    elem.style.background = '#B6FCD5';
    submit.disabled = false;
    return true;
}
