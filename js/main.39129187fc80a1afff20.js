/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/brands.js":
/*!*********************************!*\
  !*** ./js/components/brands.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");

const picters = ['../assets/brands/lenovo.png', '../assets/brands./samsung.png', '../assets/brands./apple.png', '../assets/brands./viewSonic.png', '../assets/brands./bosch.png', '../assets/brands./hp.png', '../assets/brands./acer.png', '../assets/brands./sony.png', '../assets/brands./lenovo.png', '../assets/brands./samsung.png', '../assets/brands./apple.png'];
const technics = ['Ремонт ноутбуков ', 'Ремонт планшетов ', 'Ремонт ПК ', 'Ремонт  мониторов ', 'ремонт телефонов', 'ремонт принтеров', 'ремонт электросамокатов', 'ремонт БП', 'ремонт пустого места'];
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
      mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
        // Optional parameters
        direction: 'horizontal',
        // loop: true,
        slidesPerView: 'auto',
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        spaceBetween: -8
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

/***/ }),

/***/ "./js/components/burger.js":
/*!*********************************!*\
  !*** ./js/components/burger.js ***!
  \*********************************/
/***/ (function() {

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

/***/ }),

/***/ "./js/components/modal.js":
/*!********************************!*\
  !*** ./js/components/modal.js ***!
  \********************************/
/***/ (function() {

"use strict";


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

/***/ }),

/***/ "./js/components/services.js":
/*!***********************************!*\
  !*** ./js/components/services.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");

const services = document.querySelector('.main-services');
const head = services.querySelector('.main-services__item:first-child');
const elements = head.querySelector('.main-services__row');
const slider = services.querySelector('.swiper');
const mainRows = services.querySelectorAll('.main-services__row');
const list = services.querySelector('.main-services__list');
const container = services.querySelector('.main-services__wrapper');
function serviceSlider() {
  let mySwiper;
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
      // Optional parameters
      direction: 'horizontal',
      // loop: true,
      slidesPerView: 'auto',
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      spaceBetween: 20
    });
    for (let i = 0; i < mainRows.length; i++) {
      const clone = elements.cloneNode(true);
      mainRows[i].prepend(clone.children[0], clone.children[1], clone.children[2]);
    }
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

// serviceSlider()

window.addEventListener('DOMContentLoaded', () => {
  serviceSlider();
});

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _components_brands_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/brands.js */ "./js/components/brands.js");
/* harmony import */ var _components_services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/services.js */ "./js/components/services.js");
/* harmony import */ var _components_burger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/burger.js */ "./js/components/burger.js");
/* harmony import */ var _components_burger_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_burger_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal.js */ "./js/components/modal.js");
/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_modal_js__WEBPACK_IMPORTED_MODULE_4__);





console.log('Works!');

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_swiper_esm_js"], function() { return __webpack_require__("./js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;