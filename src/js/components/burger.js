const burger = document.querySelector('.container-show__item');
const overlay = document.querySelector('.overlay');
const elem = document.querySelector('.container-show__item:first-child');
const exit = document.querySelector('.navigation__item:first-child');
const button = document.querySelector('.header_type_burger');
// console.log(button);

function handlerModal(modification) {
  burger.classList[modification]('navigation__show');
  overlay.classList[modification]('overlay--active-burger');
}

function handlerEvent(block) {
  if (block.classList.contains('header_type_burger')) {
    block.addEventListener('click', () => {
      handlerModal('add');
    });
  } else {
    block.addEventListener('click', () => {
      handlerModal('remove');
    });
  }
}

handlerEvent(button);
handlerEvent(exit);
handlerEvent(overlay);
