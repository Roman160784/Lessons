var sdvig = 0;
var test = document.getElementById('test');
var timer;

//часто используется для анимации
//move();

function move (){
    test.style.marginLeft = sdvig + 'px';
    sdvig = sdvig +10;  
    timer = setTimeout(move, 50);
}

//var timer = setInterval(move, 50);

 document.getElementById('stop').onclick = function () {
     clearTimeout(timer);
 }

//setTimeout(move, 5000);


var a = 10;

obr();

function obr () {
    document.getElementById('out').innerHTML = a;
    a--;
    if (a<0)  {
        clearTimeout(timer);
        window.alert ('Yay!!!');
    }
    
     else {
    timer = setTimeout(obr, 1000);
     }
}