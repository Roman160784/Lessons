document.getElementById('r1').oninput = cssGenerator;

function cssGenerator() {
 // получаем прямоугольник
  var div = document.getElementById('test');
  // получаю textarea
  var out = document.getElementById('out'); 
  // код для скругления границ
 //console.log(this.value);
  div.style.borderRadius = this.value + 'px';
// выводим в textarea зн borderradius \n - перенос кода на новую строку
out.innerHTML = '-webkit-border-radius' + this.value + 'px;\n' ;
out.innerHTML += 'border-radius' + this.value + 'px;' ;

}