!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n(1),n(2),n(3),n(4)},function(e,t,n){"use strict";var o=document.querySelector(".btn-burger"),r=document.querySelector(".side-menu"),c=document.querySelector(".menu-close");o&&(o.addEventListener("click",(function(){r.classList.add("open")})),c.addEventListener("click",(function(){r.classList.remove("open")})))},function(e,t,n){"use strict";var o=document.querySelector(".arrow-up");o&&(o.addEventListener("click",(function(){window.scrollTo(pageXOffset,0)})),console.log("document.documentElement.clientHeight = "+document.documentElement.clientHeight),console.log("document.documentElement.clientWidth = "+document.documentElement.clientWidth),window.addEventListener("scroll",(function(){pageYOffset>300?o.classList.remove("hidden"):o.classList.add("hidden")})))},function(e,t,n){"use strict";var o=document.querySelectorAll(".form__input"),r=document.querySelector(".form__input_email"),c=(document.querySelector(".form__button"),document.querySelector(".form__body")),u=/^\w+@\w+\.\w{2,4}$/i;c&&(c.addEventListener("submit",(function(e){e.cancelable?(e.preventDefault(),console.log("Событие "+e.type+" отменено")):console.warn("Событие "+e.type+" не может быть отменено")})),o.forEach((function(e){e.oninput=function(){e.classList.remove("invalid")},e.addEventListener("focusout",(function(){e.value||e.classList.add("invalid")}))})),r&&r.addEventListener("focusout",(function(){var e=r.value;r.oninput=function(){r.classList.remove("invalid")},u.test(e)?r.classList.remove("invalid"):r.classList.add("invalid")})))},function(e,t){}]);