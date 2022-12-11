import Swiper, { Navigation, Pagination } from 'swiper';

const picters = [
  '../assets/brands/lenovo.png',
  '../assets/brands./samsung.png',
  '../assets/brands./apple.png',
  '../assets/brands./viewSonic.png',
  '../assets/brands./bosch.png',
  '../assets/brands./hp.png',
  '../assets/brands./acer.png',
  '../assets/brands./sony.png',
  '../assets/brands./lenovo.png',
  '../assets/brands./samsung.png',
  '../assets/brands./apple.png',
];

const technics = [
  'Ремонт ноутбуков ',
  'Ремонт планшетов ',
  'Ремонт ПК ',
  'Ремонт  мониторов ',
  'ремонт телефонов',
  'ремонт принтеров',
  'ремонт электросамокатов',
  'ремонт БП',
  'ремонт пустого места',
];

const block = document.querySelectorAll('.main-devices');

block.forEach((item, i) => {
  const list = item.querySelector('.main-devices__list');
  const template = item.querySelector('.template-list-item').content;
  const blockText = item.querySelector('.main-devices__hidden-text');
  const slider = item.querySelector('.swiper');
  const container = item.querySelector('.main-devices__wrapper');
  const hidden = item.querySelector('.main-devices__hidden');
  if (i == 1) {
    const pagination = item.querySelector('.swiper-pagination');
    pagination.style.bottom = '0px';
    container.style.height = '176px';
  }

  const addElemHandler = (elem, num) => {
    if (!num) {
      picters.forEach(item => {
        const li = elem.cloneNode(true);
        li.children[0].style.backgroundImage = `url(${item})`;
        list.appendChild(li);
      });
    } else {
      technics.forEach(item => {
        const li = elem.cloneNode(true);
        li.children[0].style.minHeight = '160px';
        li.children[0].style.padding = '10px';
        li.children[0].textContent = item;
        list.appendChild(li);
      });
    }
  };
  addElemHandler(template, i);

  const handlerAnimation = e => {
    if (!container.classList.contains('main-devices__hidden_animate-to')) {
      container.classList.add('main-devices__hidden_animate-to');

      if (window.innerWidth < 850) {
        container.style.height = '516px';
      } else {
        if (i) {
          container.style.height = '516px';
        } else {
          container.style.height = '356px';
        }
      }
      setTimeout(function () {
        e.target.textContent = 'Скрыть';
        // document.documentElement.style.cssText = "--angle: 45deg";
        document.documentElement.style.setProperty('--angle', '-135deg');
        document.documentElement.style.setProperty('--top-before', '6px');
        document.documentElement.style.setProperty('--top-after', '11px');
      }, 100);
    } else {
      container.classList.remove('main-devices__hidden_animate-to');
      container.style.height = '176px';
      setTimeout(function () {
        e.target.textContent = 'Показать все';
        document.documentElement.style.setProperty('--angle', '45deg');
        document.documentElement.style.setProperty('--top-before', '3px');
        document.documentElement.style.setProperty('--top-after', '8px');
      }, 100);
    }
  };

  blockText.addEventListener('click', function (e) {
    handlerAnimation(e);
  });
  blockText.addEventListener('keydown', function (e) {
    handlerAnimation(e);
  });

  function mobileSlider() {
    let mySwiper;
    if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
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
        spaceBetween: -8,
      });
      // window.location.reload()
      hidden.classList.add('none');
      slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 767) {
      slider.dataset.mobile = 'false';
      container.classList.remove('swiper');
      list.classList.remove('swiper-wrapper');
      if (slider.classList.contains('swiper-initialized')) {
        mySwiper.destroy();
      }
    }
  }

  // mobileSlider()

  window.addEventListener('DOMContentLoaded', () => {
    mobileSlider();
  });
  // console.log(container.offsetHeight);
});
