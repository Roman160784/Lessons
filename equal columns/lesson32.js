var left = document.querySelector('.left');
var right =document.querySelector('.right');
//console.log(left);
  //console.log(right);

function equalHight () {

  //разрешаем блокам формировать авто высоту  
  left.style.height = 'auto';
  right.style.height = 'auto';

//получаем длинну колонки в консоль
  var leftH = left.offsetHeight;
  var rightH = right.offsetHeight;
  
  //ищем максимальную колонку
  var max = Math.max(leftH, rightH);
  //присваеваем большую высоту
  left.style.height = max + 'px';
  right.style.height = max + 'px';

}
equalHight () 

// делаем, чтобы колонки меняли свой размер с изменением р-ров эквана
window.onresize = equalHight;

