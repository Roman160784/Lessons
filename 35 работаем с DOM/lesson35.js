// var p = document.createElement('p');
// console.log(p);
// p.innerHTML = 'Exzample element';
// p.classList.add('main', 'green');

// document.body.insertBefore(p, document.querySelector('#out'));

// var div4 = document.getElementById('four4');
// //var p = div4.getElementsByTagName('p');

//  var div = document.getElementsByTagName('div');
//  console.log(div);
//  div[2].style.background = 'yellow';
 //------------------------

//  var div = document.querySelector('div').querySelector('p'); //найдёт первый div на странице а в div потом р
//  var div = document.querySelector('div p'); // более кратко
//  var div2 = document.querySelectorAll('div');
//  console.log(div2);
 //------------------
//  four4.style.background = 'red';

var div = document.querySelector('div');
var child = div.childNodes; // возвращает все элементы тега + текст + переносы строки + пробелы
child = div.children;
console.log(child);

var hyper = document.querySelector('a');
console.log(hyper.parentElement.nextElementSibling);
console.log(hyper.parentElement.previousElementSibling);

