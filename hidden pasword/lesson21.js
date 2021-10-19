var str = '';

document.getElementById('test').onkeypress = function(event){
   // console.log(event);
    str = str + event.key;
    console.log(str);
    //создаёт страку из чар кодов символов
    //console.log(String.fromCharCode(97));
    this.value += String.fromCharCode(getRandomInt (65, 122));
    return false; 

    //65 - 122 - наши кей нумберс
}
// функция создания рандомных чисел
function getRandomInt (min, max) {
    return Math.floor (Math.random()  * (max - min))+ min;
}