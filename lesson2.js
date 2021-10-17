function out() {
  var p = document.getElementById('out'); 
  //p.innerHTML = ('Hello');   //теги обрабатываютя 
  //p.innerHTML += (' Hello');    
  //p.innerText += (' Hi');   //теги просто выводятся на экран
  //baforebegi - перед открывающим тегом
  //p.insertAdjacentHTML('beforebegin', ' Hi');
  //afterBegin - После открывающего тега
  //p.insertAdjacentHTML('afterBegin', ' Hi');
  //beforeEnd - вставляет срасу после текста
  //p.insertAdjacentHTML('beforeEnd', ' Hi');
  // afterEnd - после закрытого тега с нового абзатца
  //p.insertAdjacentHTML('afterEnd', ' Hi');
  p.outerHTML = '<div class="one">HELLO</div>';

}