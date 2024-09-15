/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menus */ \"./src/modules/menus.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_aside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/aside */ \"./src/modules/aside.js\");\n/* harmony import */ var _modules_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/theme */ \"./src/modules/theme.js\");\n\n\n\n\n\n\n\n\n\nconst menuBtn = document.querySelector('.floatingMenuBtn');\nconst closeMenuBtn = document.getElementById('closeMenuBtn')\n\nmenuBtn.addEventListener('click', () => {\n    ;(0,_modules_menus__WEBPACK_IMPORTED_MODULE_0__.showAside)();\n})\n\ncloseMenuBtn.addEventListener('click', () => {\n    ;(0,_modules_menus__WEBPACK_IMPORTED_MODULE_0__.closeAside)();\n});\n\n\nconst moreBtn = document.querySelector('.floatingMoreBtn');\n\nmoreBtn.addEventListener('click', () => {\n    if(moreBtn.classList.contains('floatingBackBtn')){\n        (0,_modules_menus__WEBPACK_IMPORTED_MODULE_0__.closeMore)();\n        (0,_modules_menus__WEBPACK_IMPORTED_MODULE_0__.moreBtnToggle)(moreBtn);\n    } else {\n        (0,_modules_menus__WEBPACK_IMPORTED_MODULE_0__.showMore)();\n        (0,_modules_menus__WEBPACK_IMPORTED_MODULE_0__.moreBtnToggle)(moreBtn);\n    }\n})\n\n\nconst asideBtnHome = document.getElementById('asideBtnHome');\nconst asideBtnAbout = document.getElementById('asideBtnAbout');\nconst asideBtnProjects = document.getElementById('asideBtnProjects');\n\nasideBtnHome.addEventListener('click', () => {\n    (0,_modules_aside__WEBPACK_IMPORTED_MODULE_2__.home)();\n})\n\nasideBtnAbout.addEventListener('click', () => {\n    ;(0,_modules_aside__WEBPACK_IMPORTED_MODULE_2__.about)();\n})\n\nasideBtnProjects.addEventListener('click', () => {\n    ;(0,_modules_aside__WEBPACK_IMPORTED_MODULE_2__.projects)();\n})\n\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.slider)();\n\n(0,_modules_aside__WEBPACK_IMPORTED_MODULE_2__.currentSection)();\n\n(0,_modules_aside__WEBPACK_IMPORTED_MODULE_2__.styleLinks)();\n\n(0,_modules_theme__WEBPACK_IMPORTED_MODULE_3__.hoverDayNight)();\n\n\nconst themeCheckbox = document.getElementById('themeCheckbox');\nconst mobileThemeCheckbox = document.getElementById('mobileThemeCheckbox');\n\nthemeCheckbox.addEventListener('click', () => {\n    (0,_modules_theme__WEBPACK_IMPORTED_MODULE_3__.toggleDayNight)();\n})\n\nmobileThemeCheckbox.addEventListener('click', () => {\n    ;(0,_modules_theme__WEBPACK_IMPORTED_MODULE_3__.toggleDayNight)();\n})\n\n\nconst mobileOpenAsideBtn = document.getElementById('mobileOpenAsideBtn');\nconst mobileCloseAsideBtn = document.getElementById('mobileCloseAsideBtn');\n\nmobileOpenAsideBtn.addEventListener('click', () => {\n    (0,_modules_menus__WEBPACK_IMPORTED_MODULE_0__.showMobileAside)();\n})\n\nmobileCloseAsideBtn.addEventListener('click', () => {\n    ;(0,_modules_menus__WEBPACK_IMPORTED_MODULE_0__.closeMobileAside)();\n})\n\n\nconst scrollToTopBtn = document.getElementById('scrollToTopBtn');\n\nscrollToTopBtn.addEventListener('click', () => {\n    (0,_modules_aside__WEBPACK_IMPORTED_MODULE_2__.home)();\n})\n\n//# sourceURL=webpack://homepage/./src/index.js?");

/***/ }),

/***/ "./src/modules/aside.js":
/*!******************************!*\
  !*** ./src/modules/aside.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about),\n/* harmony export */   currentSection: () => (/* binding */ currentSection),\n/* harmony export */   home: () => (/* binding */ home),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   styleLinks: () => (/* binding */ styleLinks)\n/* harmony export */ });\n/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menus */ \"./src/modules/menus.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ \"./src/modules/theme.js\");\n\n\n\nfunction home() {\n    const welcomeSection = document.getElementById('welcomeSection');\n\n    (0,_menus__WEBPACK_IMPORTED_MODULE_0__.closeAside)();\n\n    setTimeout(() => {welcomeSection.scrollIntoView({behavior: 'smooth', block: 'end'})}, 400)\n}\n\nfunction about() {\n    const aboutSection = document.getElementById('aboutSection');\n\n    (0,_menus__WEBPACK_IMPORTED_MODULE_0__.closeAside)();\n\n    setTimeout(() => {aboutSection.scrollIntoView({behavior: 'smooth', block: 'center'})}, 400)\n}\n\nfunction projects() {\n    const projectSection = document.getElementById('projectSection');\n\n    (0,_menus__WEBPACK_IMPORTED_MODULE_0__.closeAside)();\n\n    setTimeout(() => {projectSection.scrollIntoView({behavior: 'smooth', block: 'start'})}, 400)\n}\n\nfunction styleLinks(){\n    window.addEventListener('scrollend', () => {\n\n        let isScrolling;\n    \n        clearTimeout(isScrolling);\n        \n        isScrolling = setTimeout(() => {\n            currentSection();\n            (0,_theme__WEBPACK_IMPORTED_MODULE_1__.hoverDayNight)();\n        }, 150);\n    \n        false;\n    \n    });\n}\n\nfunction currentSection() {\n    const welcomeBookmark = document.getElementById('welcomeBookmark');\n    const aboutBookmark = document.getElementById('aboutBookmark');\n    const projectBookmark = document.getElementById('projectBookmark');\n\n    const asideBtnHome = document.getElementById('asideBtnHome');\n    const asideBtnAbout = document.getElementById('asideBtnAbout');\n    const asideBtnProjects = document.getElementById('asideBtnProjects');\n\n    const asideSpans = document.querySelectorAll('.asideSpan');\n\n    if(isInViewport(welcomeBookmark)){ \n        styleLink(asideBtnHome);\n\n        for(let span of asideSpans){\n            span.style.color = 'var(--secondary-color)'\n        }\n    } else if(isInViewport(aboutBookmark)){\n        styleLink(asideBtnAbout);\n\n        for(let span of asideSpans){\n            span.style.color = 'var(--third-color)'\n        }\n    } else if(isInViewport(projectBookmark)){\n        styleLink(asideBtnProjects);\n\n        for(let span of asideSpans){\n            span.style.color = 'var(--fourth-color)'\n        }\n    };\n}\n\nfunction isInViewport(element) {\n    var rect = element.getBoundingClientRect();\n    var html = document.documentElement;\n    return (\n      rect.top >= 0 &&\n      rect.left >= 0 &&\n      rect.bottom <= (window.innerHeight || html.clientHeight) &&\n      rect.right <= (window.innerWidth || html.clientWidth)\n    );\n};\n\nfunction styleLink(btn) {\n    const directoryLinks = document.querySelectorAll('.directoryLink');\n\n    for(let link of directoryLinks){\n        link.disabled = false;\n        \n        let span = link.querySelector('.asideSpan');\n        span.style.display = 'none';\n    }\n\n    btn.disabled = true;\n    \n    let btnSpan = btn.querySelector('.asideSpan');\n    btnSpan.style.display = 'inline';\n}\n\n\n\n\n//# sourceURL=webpack://homepage/./src/modules/aside.js?");

/***/ }),

/***/ "./src/modules/menus.js":
/*!******************************!*\
  !*** ./src/modules/menus.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeAside: () => (/* binding */ closeAside),\n/* harmony export */   closeMobileAside: () => (/* binding */ closeMobileAside),\n/* harmony export */   closeMore: () => (/* binding */ closeMore),\n/* harmony export */   moreBtnToggle: () => (/* binding */ moreBtnToggle),\n/* harmony export */   showAside: () => (/* binding */ showAside),\n/* harmony export */   showMobileAside: () => (/* binding */ showMobileAside),\n/* harmony export */   showMore: () => (/* binding */ showMore)\n/* harmony export */ });\nfunction showAside(){\n    const aside = document.querySelector('aside');\n    const main = document.querySelector('main');\n\n    aside.classList.add('showAside');\n    main.classList.add('asideOpen');\n}\n\nfunction closeAside(){\n    const aside = document.querySelector('aside');\n    const main = document.querySelector('main');\n\n    aside.classList.remove('showAside');\n    main.classList.remove('asideOpen');\n}\n\nfunction showMobileAside(){\n    const aside = document.querySelector('aside');\n    const main = document.querySelector('main');\n    const openBtn = document.getElementById('mobileOpenAsideBtn');\n    const closeBtn = document.getElementById('mobileCloseAsideBtn');\n\n    aside.classList.add('showMobileAside');\n    main.classList.add('asideMobileOpen');\n\n    openBtn.style.display = 'none';\n    closeBtn.style.display = 'inline-block';\n}\n\nfunction closeMobileAside(){\n    const aside = document.querySelector('aside');\n    const main = document.querySelector('main');\n    const openBtn = document.getElementById('mobileOpenAsideBtn');\n    const closeBtn = document.getElementById('mobileCloseAsideBtn');\n\n    aside.classList.remove('showMobileAside');\n    main.classList.remove('asideMobileOpen');\n\n    closeBtn.style.display = 'none';\n    openBtn.style.display = 'inline-block';\n}\n\nfunction showMore(){\n    const more = document.querySelector('.moreContainer');\n    const about = document.querySelector('.aboutContainer');\n\n    more.classList.add('showMore');\n    about.classList.add('moreOpen');\n}\n\nfunction closeMore(){\n    const more = document.querySelector('.moreContainer');\n    const about = document.querySelector('.aboutContainer');   \n\n    more.classList.remove('showMore');\n    about.classList.remove('moreOpen');\n}\n\nfunction moreBtnToggle (moreBtn) {\n    if(moreBtn.classList.contains('floatingBackBtn')){\n        moreBtn.classList.remove('floatingBackBtn');\n    } else {\n        moreBtn.classList.add('floatingBackBtn');\n    }\n}\n\n\n\n//# sourceURL=webpack://homepage/./src/modules/menus.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slider: () => (/* binding */ slider)\n/* harmony export */ });\nfunction slider (){\n    const slides = document.querySelectorAll('.slide');\n    const prevBtn = document.querySelector('.prevSlideBtn');\n    const nextBtn = document.querySelector('.nextSlideBtn');\n    let currentSlide = 1;\n\n    slideLinkActive(currentSlide);\n\n    //prevBtn function\n    prevBtn.addEventListener('click', () => {\n        if(currentSlide > 1) {\n            prevBtn.href = `#slide-${currentSlide - 1}`;\n            nextBtn.href = `#slide-${currentSlide}`;\n            currentSlide -= 1;\n            slideLinkActive(currentSlide);\n        } else if (currentSlide <= 1) {\n            prevBtn.href = `#slide-${slides.length}`\n            nextBtn.href = `#slide-1`;\n            currentSlide = slides.length;\n            slideLinkActive(currentSlide);\n        }\n    });\n\n    //nextBtn function\n    nextBtn.addEventListener('click', () => {\n        if(currentSlide < slides.length) {\n            nextBtn.href = `#slide-${currentSlide + 1}`;\n            prevBtn.href = `#slide-${currentSlide}`;\n            currentSlide += 1;\n            slideLinkActive(currentSlide);\n        } else if (currentSlide >= slides.length) {\n            nextBtn.href = `#slide-1`;\n            prevBtn.href = `#slide-${slides.length}`\n            currentSlide = 1;\n            slideLinkActive(currentSlide);\n        }\n    });\n\n    //slideLinks function\n    const slideLinks = document.querySelector('.slideLinks').getElementsByTagName('a');\n\n    for(let link of slideLinks) {\n        link.addEventListener('click', () => {\n            let href = link.href.slice(-1);\n            currentSlide = href;\n            slideLinkActive(currentSlide)\n        })\n    }\n\n}\n\nfunction slideLinkActive (currentSlide) {\n    const slideLinks = document.querySelector('.slideLinks').getElementsByTagName('a');\n\n    for(let link of slideLinks) {\n        link.classList.remove('activeLink');\n    }\n\n    slideLinks[currentSlide - 1].classList.add('activeLink');\n}\n\n\n\n//# sourceURL=webpack://homepage/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/theme.js":
/*!******************************!*\
  !*** ./src/modules/theme.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hoverDayNight: () => (/* binding */ hoverDayNight),\n/* harmony export */   toggleDayNight: () => (/* binding */ toggleDayNight)\n/* harmony export */ });\nfunction toggleDayNight() {\n    const r = document.querySelector(':root');\n    const rs = getComputedStyle(r);\n\n    const primaryColor = rs.getPropertyValue('--primary-color');\n    const alternateColor = rs.getPropertyValue('--alternate-color');\n\n    r.style.setProperty('--primary-color', alternateColor);\n    r.style.setProperty('--alternate-color', primaryColor);\n}\n\nfunction hoverDayNight () {\n    const welcomeBookmark = document.getElementById('welcomeBookmark');\n    const aboutBookmark = document.getElementById('aboutBookmark');\n    const projectBookmark = document.getElementById('projectBookmark');\n\n    if(isInViewport(welcomeBookmark)){ \n        const secondaryHover = '.toggle:hover { background-color: var(--secondary-color) }';\n\n        const styleTag = document.querySelector('style');\n        styleTag.innerHTML = secondaryHover;\n    } else if(isInViewport(aboutBookmark)){\n        const secondaryHover = '.toggle:hover { background-color: var(--third-color) }';\n\n        const styleTag = document.querySelector('style');\n        styleTag.innerHTML = secondaryHover;\n    } else if(isInViewport(projectBookmark)){\n        const secondaryHover = '.toggle:hover { background-color: var(--fourth-color) }';\n\n        const styleTag = document.querySelector('style');\n        styleTag.innerHTML = secondaryHover;\n    };\n}\n\nfunction isInViewport(element) {\n    var rect = element.getBoundingClientRect();\n    var html = document.documentElement;\n    return (\n      rect.top >= 0 &&\n      rect.left >= 0 &&\n      rect.bottom <= (window.innerHeight || html.clientHeight) &&\n      rect.right <= (window.innerWidth || html.clientWidth)\n    );\n};\n\n\n\n//# sourceURL=webpack://homepage/./src/modules/theme.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;