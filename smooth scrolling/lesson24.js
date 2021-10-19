// window.onload - для загрузки js после загрузки всей страницы
window.onload = function () {
    
    var scrolled;
    var timer;

    document.getElementById('top').onclick = function () {
        scrolled = window.pageYOffset; //показывает координаты текста
        //window.scrollTo(0,0); Резкая (быстрая) прокрутка текста
        scrollToTop()
    }
    function scrollToTop () {
     if (scrolled > 0) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 100; //100 - определяет скорость прокрутки
        timer = setTimeout (scrollToTop, 100);
     }
     else {
         clearTimeout(timer);
         window.scrollTo(0,0);
     }

    }

}