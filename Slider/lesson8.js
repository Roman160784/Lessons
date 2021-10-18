document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
var left = 0;
var timer;

function autoSlider() {
  timer = setTimeout(sliderLeft, 2000);
}




function sliderLeft() {
  var polosa = document.getElementById('polosa');
  left = left -128;
  if(left< -512){
    left=0;
    clearTimeout(timer);
  }
polosa.style.left = left+'px';
autoSlider();

}