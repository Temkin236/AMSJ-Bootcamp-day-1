const bulb = document.getElementById('bulb');

function turnOn() {
  bulb.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
  bulb.classList.add('on');
}

function turnOff() {
  bulb.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
  bulb.classList.remove('on');
}
