//Place your javascript code related with HTML and CSS here
function getValue(field){
  var valor = document.getElementById(field).value;
  return valor;
}
function displayResult(field,value) {
  var result = value;
  document.getElementById(field).innerHTML = result;
  return false;
}

function disableScroll() {
  window.scrollTo(0, 0);
}

var btn = document.querySelector('.burgerbutton');
btn.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
  document.querySelector('body').classList.toggle('displaced');
  console.log("click");
  if (document.getElementById('sidebar').classList.contains('active')){
    window.addEventListener('scroll', disableScroll);
  }
  else {
    window.removeEventListener('scroll', disableScroll);
  }
});
