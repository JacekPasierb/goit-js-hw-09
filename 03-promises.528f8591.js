function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");const u=document.querySelector("input[name=delay]"),i=document.querySelector("input[name=step]"),d=document.querySelector("input[name=amount]"),a=document.querySelector(".form");let f=null;a.addEventListener("submit",(t=>{let n=u.value,o=d.value,r=i.value;function s(t,o){f=setTimeout((()=>{Math.random()>.3?e(l).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`):e(l).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}),n)}t.preventDefault(),clearTimeout(f);for(let e=0;e<o;e++){let t=e;0==e||(n=r),s(t,n)}a.reset()}));
//# sourceMappingURL=03-promises.528f8591.js.map