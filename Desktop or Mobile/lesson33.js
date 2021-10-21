//щпределения устройства
document.querySelector('#out').innerHTML = navigator.userAgent;
//console.log(navigator);

if (navigator.userAgent.match('iPhine') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad')) {
  window.alert('Mobile');
}
else {
  window.alert('Desktop');
}