window.addEventListener('load', start);
function start() {
  inputValueRed.value = myRangeRed.value;
  myRangeRed.oninput = function () {
    inputValueRed.value = this.value;
    carregaColor();
  };
  inputValueGreen.value = myRangeGreen.value;
  myRangeGreen.oninput = function () {
    inputValueGreen.value = this.value;
    carregaColor();
  };
  inputValueBlue.value = myRangeBlue.value;
  myRangeBlue.oninput = function () {
    inputValueBlue.value = this.value;
    carregaColor();
  };
}

function carregaColor() {
  var quadrado = document.querySelector('.quadrado');
  var red = document.querySelector('#myRangeRed').value;
  var green = document.querySelector('#inputValueGreen').value;
  var blue = document.querySelector('#myRangeBlue').value;

  quadrado.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
