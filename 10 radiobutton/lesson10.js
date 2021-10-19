//программа для считывания зн Value с кнопок

var radio = document.getElementsByName('prim');

for (var i = 0; i < radio.length; i++) {
  radio[i].onchange = testRadio; 
}

function testRadio() {
  console.log(this.value); 
}
// присваевает кнопке событие "click" и функцию checkRadio
document.getElementById('one').onclick = checkRadio;
//выводим в алерт значение радиокнопки
function checkRadio () {
for (var i = 0; i < radio.length; i++) {
  if (radio[i].checked) {
    alert(radio[i].value);
    break;
  }
  
}
  
}