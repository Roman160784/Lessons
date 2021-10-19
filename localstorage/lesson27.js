
if (localStorage.getItem('bgcolor')!==null) {  // !==   - означает не равно
    var color = localStorage.getItem('bgcolor');
    document.getElementsByTagName('body')[0].style.background = color;
}

document.getElementById('green').onclick = function() {
    console.log('work');
    document.getElementsByTagName('body')[0].style.background = 'green';
    localStorage.setItem('bgcolor', 'green'); //bgcolor - ключ  set - устанавливаем
}

document.getElementById('red').onclick = function() {
    console.log('work');
    document.getElementsByTagName('body')[0].style.background = 'red';
    localStorage.setItem('bgcolor', 'red'); //bgcolor - ключ  set - устанавливае
}
