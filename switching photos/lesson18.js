document.getElementById('myslide').onmousemove = function(event){
    //x - координата мыши по горизонтали относительно блока myslide (offset)
    var x = event.offsetX;
    console.log(x);
    //изменяем ширина блок two
    document.getElementById('two').style.width = x + 'px';  
}

// при уходе мыши оставляем одну из картинок полностью открытой.
document.getElementById('myslide').onmouseleave = function(event){
    document.getElementById('two').style.width = '270px'; 
}