document.querySelector('#menu').onmouseover = menuShow;
document.querySelector('#menu').onmouseout = menuHide;

document.onkeydown = function (event) {
    //console.log(event);
    if (event.code == 'KeyM') {
        menuShow();
    }
    if (event.code == 'Escape') {
        menuHide();
    }
}

function menuShow () {
    //берём элемент по css селектору
    document.querySelector('#menu').style.left = 0;
}

function menuHide () {
    //берём элемент по css селектору
    document.querySelector('#menu').style.left = '-230px';
}