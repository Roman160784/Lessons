  var block = document.getElementById('one');
  
  //добовляем событие клик мышью
//block.onclick = function () {
//this.style.background = 'green';
//this.onclick = null;
//}

//двойной клик
//block.ondblclick = function () {
 // this.style.background = 'red';
//}

//клик правой кнопкой мышкой
// block.oncontextmenu = function () {
//   this.style.background = 'black';
//   return false; //запрет вывода контекстного меню
// }

//запрет вызова контекстного меню на всей странице
//document.oncontextmenu = function () {
 // return false;
//}

//наведение мышью на элемент
// block.onmouseenter = function () {
//   this.style.background = 'blue';
//   console.log('inn');
// }

// // мышь уходит с элемента
// block.onmouseleave = function () {
//   this.style.background = 'orange';
// }

//движение мыши внутри блока
var a = 0
// block.onmousemove = function () {
//   a++
//  this.style.width = 100 + a + 'px';
// }

//нажимаем и держим кнопку мыши
block.onmousedown = function (event) {
  this.style.background = 'purple';
  console.log(event.button); //выводим в консоль какую именно кнопку нажали
}

block.onmouseup = function () {
  this.style.background = 'pink';
}

