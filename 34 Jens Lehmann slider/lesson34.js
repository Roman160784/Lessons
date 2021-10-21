window.onload = function () {
var mas = document.getElementsByClassName('layer');
// j - каждая картинка из массива mas
var j = 0;
// y - длинна прокрутки
var y = 0;

document.querySelector('.jlehmann').onmousewheel = function (event) {
// делаем работающей прокрутку и в верх и вниз
    if (event.deltaY > 0) {
        y = y + Math.round(event.deltaY);
    }
    else{
        y = y + Math.round(event.deltaY); // возможно нужен -
    }
//
     console.log(y);
    mas[j].style.top = (y*0.1) + 'px';
    if (y*0.1 >= 450){
        j++;
        y=0;
        //останавливаем прокрутку на паследней картинке массива.  (-1)   паследняя картинка массива не прокручивается
        if (j == mas.length-1) {
            document.querySelector('.jlehmann').onmousewheel = null;
        }
    }
}  
}