'use strict';
const backgroundColored = document.querySelector('body');
const textSpam = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = () => {
  const color = getRandomHexColor();
  backgroundColored.style.backgroundColor = color;
  textSpam.innerHTML = color;
};

buttonChangeColor.addEventListener('click', changeColor);
