// событие onkeypress - события клавиатуры

var block = document.getElementById('test');
var left = 0;
var top1 = 0;


document.onkeydown = function (event) {
    console.log(event);
    //отступ слева
     if (event.key == 'ArrowRight'){
         block.style.left = left +'px';
         left++;
     }
     //отступ сверху
     if (event.key == 'ArrowDown'){
        block.style.top = top1 +'px';
        top1++;
    }

}