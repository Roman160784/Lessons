var man = {
"name" : "Akex",
"age" : 67,
"id" : "223344d",
"sex" : "male"
}

//console.log (man);
//console.log (man.name);
//console.log (man['name']);
//var a = "name";
//console.log(man[a]);


var man2 = {
  "name" : "Akex",
  "age" : 67,
  "id" : "223344d",
  "sex" : "male",
  "year" : function(){
    return 2020 - this.age;
  }
  }

  //console.log( man2.year() );

  var array = {
    "mas" : [5, 6, 34, 12, 45],
    "summa" : function(){
      var sum = 0;
      for (var i = 0; i < this.mas.length; i++) {
        sum = sum +this.mas[i];
      }
      return sum;
    }
  }
console.log(array.summa());























