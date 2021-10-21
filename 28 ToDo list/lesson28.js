var todoist = [];

if (localStorage.getItem ('todo') != undefined) {
    todoist = JSON.parse (localStorage.getItem ('todo')); //JSON.parse - строка в массив
    out();
}

document.getElementById('add').onclick = function () {
    var task = document.getElementById('in').value;
    // ассоциативный массив
    // {todo: Добавить хлеб, check: false}
    var temp = {};
    temp.todo = task;
    temp.check = false;
    var i = todoist.length;
    todoist [i] = temp;
    console.log(todoist);
    out();
    localStorage.setItem('todo', JSON.stringify(todoist)); //JSON.stringify - массив в строку
}

function out () {
    var out = '';
    for (var key in todoist) {
        if (todoist[key].check == true ) {
            out += '<input type="checkbox" checked>';
        }
        else {
            out += '<input type="checkbox">';  
        }

        out += todoist[key].todo + '<br>';
           
    }

    document.getElementById('out').innerHTML = out;

}