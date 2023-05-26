'use strict';

const container = document.querySelector('.container');
const textarea = document.querySelector('.text');
const alphabet = document.querySelectorAll('.alpha');
const key = document.querySelectorAll('.key');
let checkCaps = false;

const caps = function () {
  if (checkCaps === false) {
    for (let i = 0; i < alphabet.length; i++) {
      let getAlpha = alphabet[i].textContent;
      const up = getAlpha.toUpperCase();
      alphabet[i].textContent = up;
    }
    checkCaps = true;
  } else {
    for (let i = 0; i < alphabet.length; i++) {
      let getAlpha = alphabet[i].textContent;
      const low = getAlpha.toLowerCase();
      alphabet[i].textContent = low;
    }
    checkCaps = false;
  }
};

container.addEventListener('click', function (el) {
  if (el.target.classList.contains('key')) {
    if (el.target.classList.contains('spaceBar')) {
      textarea.textContent += ' ';
    }
    if (el.target.classList.contains('caps')) {
      caps();
    }
    if (el.target.classList.contains('content')) {
      const getContent = el.target.textContent;
      textarea.textContent += getContent;
    }
    if (el.target.classList.contains('backSpace')) {
      textarea.textContent = textarea.textContent.substring(
        0,
        textarea.textContent.length - 1
      );
    }
  } else {
    return;
  }
});
