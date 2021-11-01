let i = 1;
for(let li of carousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

/* конфигурация */
let width = 260; // ширина картинки
let count = 1; // видимое количество изображений

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let listOfImages = gallery.querySelectorAll('li');
for (let i = 0; i < listElems.length; i++) {
    listElems[i].children[0].src = listOfImages[i].children[0].src;
}
let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count)+(3-count)*260);
    //console.log(position-(3-count)*130, -width*(listElems.length - count));
    list.style.marginLeft = position + 'px';
}