function one (){
  //window.alert ('Hello')
  return 9;
}

console.log(5+one());


function summa (a, b){
  a = a || 10; // а = числу пользователя если нет числа то 10
  b = b || 1;
  alert(a+b);
  //return (a+b);
}

//console.log(summa(3,5));

//var out = document.getElementById('out');
//out.innerText = summa(7,4);

document.getElementById('result').onclick = function () {
  summa   (12,6);
}


var d = function () {
  window.alert('work');
}

d();