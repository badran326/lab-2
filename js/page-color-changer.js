const red = document.getElementById('red');;
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const body = document.body;

red.addEventListener('input', changeBackgroundColor);
green.addEventListener('input', changeBackgroundColor);
blue.addEventListener('input', changeBackgroundColor);

function changeBackgroundColor() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    const backgroundColor = `rgb(${r}, ${g}, ${b})`;
    body.style.backgroundColor = backgroundColor;
}