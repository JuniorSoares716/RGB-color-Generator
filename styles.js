window.addEventListener('load', start);


function start() {

  var resultColor = document.querySelector('.quadrado');
  var inputRed = document.querySelector('#inputValueRed');
  var inputGreen = document.querySelector('#inputValueGreen');
  var inputBlue = document.querySelector('#inputValueBlue');


  addEventListener('input', handleInputRange);


  function handleInputRange() {
    var red = document.querySelector('#myRangeRed').value;
    var green = document.querySelector('#myRangeGreen').value;
    var blue = document.querySelector('#myRangeBlue').value;


    inputRed.value = red;
    inputGreen.value = green;
    inputBlue.value = blue;

    resultColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


  }
}
