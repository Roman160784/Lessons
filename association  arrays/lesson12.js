//var array = [1, 2, 'hello'];
//  console.log(array);

//правильный синтаксис
var array = {
  "one" : 12,
  "hello" : "world",
  "prim" : 2000
};

//console.log(array["prim"]);

array.one = 9000;
console.log(array.one);

var ppp = 'hello';
console.log(array[ppp]);  

//выведет всле ключи ассоциативного массива 1 раз
var out = document.getElementById('out')
for(var key in array){
  //key - ключ
  //array[key] - значение ключа
out.innerHTML += key + ' ------- ' + array[key]+'<br>';

}
