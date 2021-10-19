var number = Math.floor(10 * Math.random()) + 1; //случайное число сгенерированое
console.log(number);
var count = 3;

document.getElementById('check').onclick = function () {
    if (count > 0) {
        var usermumber = document.getElementById('mynumber').value;
        usermumber = parseInt(usermumber);
        var out = document.getElementById('out');

        if (usermumber == number) {
            out.innerHTML = 'You win! YAY!!!'
        }
        else if (usermumber < number) {
            out.innerHTML = 'Your number is less';
        }
        else if (usermumber > number) {
            out.innerHTML = 'Your number is more';
        }
       
       document.getElementById('count').innerHTML = 'Shots: ' + count;
       count = count - 1; 
    }
    else {
        window.alert('attempts are over, you have failed, start again');
        location.reload(); //перезагрузка страницы
    }
}
























