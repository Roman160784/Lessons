document.onwheel = function (event) {
    console.log(event);
    if (event.deltaY > 0) {
        document.getElementById('line').innerHTML = "down";
    }
    else{
        document.getElementById('line').innerHTML = "top";  
    }
//отбражаем скорость
    var speed = event.deltaY;
    speed = Math.abs(speed);
    
    if (speed < 50) {
        document.getElementById('speed').innerHTML = "slow";   
    }
    else if (speed < 150) {
        document.getElementById('speed').innerHTML = "midle"; 
    }   
    else if (speed < 250) {
        document.getElementById('speed').innerHTML = "fast"; 
    }   

    else {
        document.getElementById('speed').innerHTML = "very fast"; 
    }   

}

var left = 290;
document.getElementById('test').onwheel = function(event){
    var line = event.deltaY;
    left = left + 0.2*line;
    document.getElementById('test2').style.left = left + 'px';
    return false //отмена прокрутки в вертекальном направлении  

}