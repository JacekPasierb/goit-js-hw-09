function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("7Y9D8");const i=document.querySelector("input[name=delay]"),l=document.querySelector("input[name=step]"),a=document.querySelector("input[name=amount]"),d=document.querySelector(".form");let s=null;d.addEventListener("submit",(n=>{let t=Number(i.value),o=Number(a.value),r=Number(l.value);function m(e,n){return new Promise(((t,o)=>{s=setTimeout((()=>{Math.random()>.3?t({position:e,numDelay:n}):o({position:e,numDelay:n})}),n)}))}n.preventDefault(),clearTimeout(s);for(let n=0;n<o;n++){m(n,t).then((({position:n,numDelay:t})=>{e(u).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({position:n,numDelay:t})=>{e(u).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)})),t+=r}d.reset()}));
//# sourceMappingURL=03-promises.e8fec61c.js.map