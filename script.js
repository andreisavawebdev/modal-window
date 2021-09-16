'use strict';
let btn1 = document.querySelector('.show-modal-1');
let btn2 = document.querySelector('.show-modal-2');
let btn3 = document.querySelector('.show-modal-3');

let modalWindow1 = document.querySelector('.modal-1');
let modalWindow2 = document.querySelector('.modal-2');
let modalWindow3 = document.querySelector('.modal-3');

let overlay = document.querySelector('.overlay');
let closeWindow = document.querySelectorAll('.close-window');

const showModal = (modalWindow) => {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modalWindow1.classList.add('hidden');
  modalWindow2.classList.add('hidden');
  modalWindow3.classList.add('hidden');
  overlay.classList.add('hidden');
};

btn1.addEventListener(
  'click',
  () => {
    showModal(modalWindow1);
  },
  false
);
btn2.addEventListener(
  'click',
  () => {
    showModal(modalWindow2);
  },
  false
);
btn3.addEventListener(
  'click',
  () => {
    showModal(modalWindow3);
  },
  false
);
// btn2.addEventListener('click', showModal(modalWindow2));
// btn3.addEventListener('click', showModal(modalWindow3));
// closeWindow.addEventListener('click', closeModal);
for (let i = 0; i < closeWindow.length; i++) {
  closeWindow[i].addEventListener('click', closeModal);
}

document.addEventListener('keydown', (e) => e.key === 'Escape' && closeModal());
