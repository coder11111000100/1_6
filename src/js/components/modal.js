'use strict';

const callBack = document.querySelector('.navigation__item-two:first-child');
const callBack_1 = document.querySelector('.header__item:nth-child(5)');
const message = document.querySelector('.navigation__item-two:nth-child(2)');
const message_1 = document.querySelector('.header__item:nth-child(6)');
const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const phone = document.querySelector('.modal-focus');
const fieldName = document.querySelector('.modal__input:first-child');

function showModal(item, i) {
  item.addEventListener('click', () => {
    modals[i].classList.add('modal--active');
    overlay.classList.add('overlay--active');
  });
}

modals.forEach(modal => {
  const btnClose = modal.querySelector('.close-btn');
  function open(item) {
    if (item == callBack || item == callBack_1) {
      showModal(item, 0);
    }
    if (item == message || item == message_1) {
      showModal(item, 1);
      fieldName.fo;
    }
  }

  function exit(item) {
    item.addEventListener('click', () => {
      modal.classList.remove('modal--active');
      overlay.classList.remove('overlay--active');
      phone.focus();
    });
  }

  open(callBack);
  open(callBack_1);
  open(message);
  open(message_1);
  exit(btnClose);
  exit(overlay);
});

// fieldName.focus();
