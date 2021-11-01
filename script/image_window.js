let gallery = document.getElementById('gallery');
console.log(gallery.tagName);
console.log('asdasdasd');
document.onmousedown = show_Image;
let wind = document.createElement('div');
let img = document.createElement('img');
let x = document.createElement('span');
x.innerHTML = 'x';
x.style.float = 'right';
x.style.backgroundColor = 'rgba(0,0,0,0.5)';
let close = document.createElement('div');
close.appendChild(x);
//img.appendChild(x);
//wind.appendChild(x);
//x.style.position = 'absolute';
wind.appendChild(close);
wind.appendChild(img);

gallery.insertBefore(wind, gallery.firstChild);
wind.style.display = 'none';
wind.style.top = '0';
wind.style.bottom = '0';
wind.style.right = '0';
wind.style.left = '0';
wind.style.overflow = 'hidden';
wind.style.overflowY = 'auto';
wind.style.position = 'fixed';
wind.style.alignItems = 'center';
wind.style.justifyContent = 'center';
wind.style.padding = '30px 0';
wind.style.flexFlow = 'column nowrap';
wind.style.animationName = 'animate';
wind.style.animationDuration = '2000ms';
x.style.float = 'right';
function show_Image(event){
    console.log(event.target.tagName);
    if (event.target && event.target.tagName == 'IMG'){
        let image = event.target;
        img.src = image.src;
        
        wind.style.backgroundColor = "rgba(0,0,0,0.5)";
        wind.style.zIndex = '99';
        wind.style.display = 'flex';
    }
}
//мейби просто после онлоада продублировать после картинок скрытые дивы, и просто показывать их, хотя вроде
// этот вариант тоже норм, нужно только подумтаь..

wind.onmousedown = closeWind;

function closeWind(event){
    if (event.target == x){
        wind.style.display = 'none';
    }
}