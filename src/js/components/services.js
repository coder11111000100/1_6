import Swiper, { Navigation, Pagination } from 'swiper';

const services = document.querySelector('.main-services');
const head = services.querySelector('.main-services__item:first-child');
const elements = head.querySelector('.main-services__row');

const slider = services.querySelector('.swiper');
const mainRows = services.querySelectorAll('.main-services__row');
const list = services.querySelector('.main-services__list');
const container = services.querySelector('.main-services__wrapper');

function serviceSlider() {
  let mySwiper;
  if (
    document.documentElement.clientWidth <= 767 &&
    slider.dataset.mobile == 'false'
  ) {
    mySwiper = new Swiper(slider, {
      modules: [Navigation, Pagination],
      // Optional parameters
      direction: 'horizontal',
      // loop: true,
      slidesPerView: 'auto',

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 20,
    });

    for (let i = 0; i < mainRows.length; i++) {
      const clone = elements.cloneNode(true);
      mainRows[i].prepend(
        clone.children[0],
        clone.children[1],
        clone.children[2]
      );
    }
    slider.dataset.mobile = 'true';
  }

  if (document.documentElement.clientWidth > 767) {
    slider.dataset.mobile = 'false';
    container.classList.remove('swiper');
    list.classList.remove('swiper-wrapper');
    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}

// serviceSlider()

window.addEventListener('DOMContentLoaded', () => {
  serviceSlider();
});
