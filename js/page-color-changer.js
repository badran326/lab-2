const red = document.getElementById('red');;
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const body = document.body;

red.addEventListener('input', changeBackgroundColor);
green.addEventListener('input', changeBackgroundColor);
blue.addEventListener('input', changeBackgroundColor);