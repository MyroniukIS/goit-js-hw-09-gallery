parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QdeU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];var o=p;exports.default=o;
},{}],"Mh9J":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.elementsGallery=void 0;var e=n(require("./app.js"));function n(e){return e&&e.__esModule?e:{default:e}}const l=r(e.default);function r(e){return e.map(({preview:e,original:n,description:l})=>`\n    <li class="gallery__item">\n  <a\n    class="gallery__link"\n    href="${n}">\n    <img\n      class="gallery__image"\n      src="${e}"\n      data-source="${n}"\n      alt="${l}"\n    />\n  </a>\n</li>`).join("")}exports.elementsGallery=l;
},{"./app.js":"QdeU"}],"oNU3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onEscKeyPress=o;var e=require("./on-close-open-modal.js");function o(o){"Escape"===o.code&&(0,e.onCloseModal)()}
},{"./on-close-open-modal.js":"vA1A"}],"vA1A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onCloseModal=s,exports.onOpenModal=n;var e=require("./on-esc-key-press.js");const o=document.querySelector(".js-lightbox");function s(){o.classList.remove("is-open"),window.removeEventListener("keydown",e.onEscKeyPress)}function n(n){o.classList.add("is-open"),document.querySelector(".lightbox__button").addEventListener("click",s),window.addEventListener("keydown",e.onEscKeyPress)}
},{"./on-esc-key-press.js":"oNU3"}],"BU5P":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onGalerryContainerClick=t;var e=require("./on-close-open-modal.js");const o=document.querySelector(".lightbox__image");function t(t){if(t.preventDefault(),"IMG"!==t.target.nodeName)return;const r=t.target.dataset.source;(0,e.onOpenModal)(),o.src=r,console.log("клік на картинці")}
},{"./on-close-open-modal.js":"vA1A"}],"UyRc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onOverlayClick=o;var e=require("./on-close-open-modal.js");function o(o){o.currentTarget===o.target&&(console.log("Клік на бекдроп!!!!"),(0,e.onCloseModal)())}
},{"./on-close-open-modal.js":"vA1A"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./js/create-elements.js"),r=require("./js/on-close-open-modal.js"),s=require("./js/on-esc-key-press.js"),l=require("./js/gallery-click.js"),n=require("./js/overlay.js");const c=document.querySelector(".js-gallery"),t=document.querySelector(".lightbox__overlay");c.addEventListener("click",l.onGalerryContainerClick),c.insertAdjacentHTML("beforeend",e.elementsGallery),t.addEventListener("click",n.onOverlayClick);
},{"./js/create-elements.js":"Mh9J","./js/on-close-open-modal.js":"vA1A","./js/on-esc-key-press.js":"oNU3","./js/gallery-click.js":"BU5P","./js/overlay.js":"UyRc"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.f3a1079b.js.map