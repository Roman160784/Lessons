//добавляем в html новое изображение
document.onmousemove = function (){
  document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', '<img src ="https://cdn2.iconfinder.com/data/icons/cat-power/256/cat_fight.png" id = "cat">');
  var cat = document.getElementById('cat');

  //fixed - слиль css когда координаты отсчитываются относительно окна браузера
  cat.style.position = 'fixed';
  document.onmousemove = function (event){
      
      
      // отступ от левого края браузера
      cat.style.left = event.clientX + 30 + 'px';
      cat.style.top = event.clientY + 30 + 'px';
}
}











//первый спостоб
// var cat = document.getElementById('cat');

// document.onmousemove = function (event){
//   //fixed - слиль css когда координаты отсчитываются относительно окна браузера
//   cat.style.position = 'fixed';
//   // отступ от левого края браузера
//   cat.style.left = event.clientX + 30 + 'px';
//   cat.style.top = event.clientY + 30 + 'px';
// } 