var goods = {
  "1111" : {
"name" : "Banana",
"cost" : "30",
"img" : "https://cdn0.iconfinder.com/data/icons/food-and-drink-43/512/food-22-128.png",
"sklad" : "yes"
  },
  "0001" : {
    "name" : "Tomato",
    "cost" : "50",
    "img" : "https://cdn1.iconfinder.com/data/icons/vegetable-flat-1/48/Plants_Vegetables_Artboard_4-256.png",
    "sklad" : "yes"
  } 
};

console.log(goods);

var out = '';
for (var key in goods) {
  out += 'Название :' +goods[key].name +'<br>';
  out += 'Цена :' +goods[key].cost +'<br>';
  out += 'Наличие :' +goods[key].sklad +'<br>';
  out += '<img src="' +goods[key].img+'">';
  out += '<hr>';
}

document.getElementById('out').innerHTML = out;