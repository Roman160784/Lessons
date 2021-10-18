 var p = document.getElementsByTagName('p');
 console.log(p);
 //p.onclick = f1 не верный синтаксис для данного случая
 var one = document.getElementsByClassName('one');
 

for (let i = 0; i < p.length; i++) {
  p[i].onclick=f1;
  
}

for (let i = 0; i < one.length; i++) {
  one[i].onclick=f2;
  
}

 function f1() {
   //window.alert('hello');
   console.log(this); // this указывает на элемент на котором произошло событие
   this.style.background = 'pink';
 }

 function f2() {
   this.style.fontWeight = 'bold'; 
 }