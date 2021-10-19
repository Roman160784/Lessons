// document.onkeypress = function(event){
//     console.log(event.key);
//     if(event.shiftKey){
//         console.log('was push shift');
//     }
// }

document.getElementById('text').onkeypress = function (event) {
    //console.log(event);
     (event.keyCode<48 || event.keyCode>57);//не работает
    console.log('Не цифра');
    //return false;
}