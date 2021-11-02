let timer = setInterval(toDeadLine, 1000)
let deadLine = new Date('November 4, 2021 17:00:00')
let divTimer = document.createElement('div');
document.body.appendChild(divTimer);
divTimer.style.top = '45px';
divTimer.style.right = '0px';
divTimer.style.position='absolute';
divTimer.style.color = 'red';
function toDeadLine(){
    let now = new Date();
    divTimer.innerHTML = "До дедлайна осталось " + toNormal(~~((deadLine - now)/1000));
}

function toNormal(date){
    s = '';
    s += ~~(date/(24*3600));
    date %= 24*3600;
    s += "дня " + ~~(date/3600);
    date %= 3600;
    s+= ":" + ~~(date/60);
    date %= 60;
    s += ":" + date;
    return s;
}