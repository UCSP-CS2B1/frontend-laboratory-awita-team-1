function getValue(field){
  var valor = document.getElementById(field).value;
  return valor;
}
function displayResult(field,value) {
  var result = value;
  document.getElementById(field).innerHTML = result;
  return false;
}

var btn = document.querySelector('.burgerbutton');
btn.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
  document.querySelector('body').classList.toggle('displaced');
});
