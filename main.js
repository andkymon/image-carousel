(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>p});var r=e(354),o=e.n(r),a=e(314),s=e.n(a),i=e(417),c=e.n(i),A=new URL(e(36),e.b),l=s()(o()),u=c()(A);l.push([n.id,`* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.frame {\n    height: 360px;\n    width: 360px;\n    position: relative;\n    overflow: hidden;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 8px;\n}\n\n.slides-wrapper {\n    width: max-content;\n    transform: translateX(-0%);\n    display: flex;\n}\n\n.slide {\n    height: 360px;\n    width: 360px;\n    text-align: center;\n}\n\n.slide-image {\n    display: inline-block;\n    height: 360px;\n}\n\n.carousel-button {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 24px;\n    width: 24px;\n    background-image: url(${u});\n    background-size: contain;\n    background-color: transparent;\n    border: 0;\n    transition: 0.3s;\n}\n\n.carousel-button.left {\n    left: 0;\n    transform: translateY(-50%) scaleX(-1);\n}\n\n.carousel-button.left:hover {\n    transform: translateY(-50%) scaleX(-1) scale(1.2);\n}\n\n.carousel-button.right {\n    right: 0;\n}\n\n.carousel-button.right:hover {\n    transform: translateY(-50%) scale(1.2);\n}\n\n.carousel-dot-wrapper {\n    height: 36px;\n    width: fit-content;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    gap: 8px;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.carousel-dot {\n    height: 8px;\n    width: 8px;\n    border: 1px solid white;\n    border-radius: 50%;\n    transition: 0.3s;\n}\n\n.carousel-dot.selected {\n    background-color: white;\n}\n`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,2BAA2B;IAC3B,YAAY;IACZ,WAAW;IACX,yDAAiD;IACjD,wBAAwB;IACxB,6BAA6B;IAC7B,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,OAAO;IACP,sCAAsC;AAC1C;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,2BAA2B;IAC3B,aAAa;IACb,QAAQ;IACR,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;AAC3B",sourcesContent:['* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.frame {\n    height: 360px;\n    width: 360px;\n    position: relative;\n    overflow: hidden;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 8px;\n}\n\n.slides-wrapper {\n    width: max-content;\n    transform: translateX(-0%);\n    display: flex;\n}\n\n.slide {\n    height: 360px;\n    width: 360px;\n    text-align: center;\n}\n\n.slide-image {\n    display: inline-block;\n    height: 360px;\n}\n\n.carousel-button {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 24px;\n    width: 24px;\n    background-image: url("./assets/right-arrow.svg");\n    background-size: contain;\n    background-color: transparent;\n    border: 0;\n    transition: 0.3s;\n}\n\n.carousel-button.left {\n    left: 0;\n    transform: translateY(-50%) scaleX(-1);\n}\n\n.carousel-button.left:hover {\n    transform: translateY(-50%) scaleX(-1) scale(1.2);\n}\n\n.carousel-button.right {\n    right: 0;\n}\n\n.carousel-button.right:hover {\n    transform: translateY(-50%) scale(1.2);\n}\n\n.carousel-dot-wrapper {\n    height: 36px;\n    width: fit-content;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    gap: 8px;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.carousel-dot {\n    height: 8px;\n    width: 8px;\n    border: 1px solid white;\n    border-radius: 50%;\n    transition: 0.3s;\n}\n\n.carousel-dot.selected {\n    background-color: white;\n}\n'],sourceRoot:""}]);const p=l},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var A=0;A<n.length;A++){var l=[].concat(n[A]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},s=[],i=0;i<n.length;i++){var c=n[i],A=r.base?c[0]+r.base:c[0],l=a[A]||0,u="".concat(A," ").concat(l);a[A]=l+1;var p=e(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var f=o(d,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<a.length;s++){var i=e(a[s]);t[i].references--}for(var c=r(n,o),A=0;A<a.length;A++){var l=e(a[A]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},36:(n,t,e)=>{n.exports=e.p+"92a52a16aea6aeb3c6a0.svg"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var r=e(72),o=e.n(r),a=e(825),s=e.n(a),i=e(659),c=e.n(i),A=e(56),l=e.n(A),u=e(540),p=e.n(u),d=e(113),f=e.n(d),h=e(208),m={};m.styleTagTransform=f(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=p(),o()(h.A,m),h.A&&h.A.locals&&h.A.locals,function(n,t,e,r,o="selected",a=300,s=5e3){const i=n.childElementCount,c=100/i;let A;function l(){e.addEventListener("click",u),t.addEventListener("click",p)}function u(){f(),r[h].classList.remove(o),h++,h===i&&(h=0),r[h].classList.add(o),n.style.transition=a+"ms",n.style.transform=`translateX(-${c}%)`,setTimeout((()=>{n.append(n.firstElementChild),n.style.transition="none",n.style.transform="translateX(-0%)",l()}),a)}function p(){f(),r[h].classList.remove(o),0===h?h=i-1:h--,r[h].classList.add(o),n.insertBefore(n.lastElementChild,n.firstElementChild),n.style.transition="none",n.style.transform=`translateX(-${c}%)`,requestAnimationFrame((()=>{n.style.transition=a+"ms",n.style.transform="translateX(-0%)"})),setTimeout((()=>{l()}),a)}function d(){clearInterval(A),A=setInterval((()=>{e.click()}),s)}function f(){t.removeEventListener("click",p),e.removeEventListener("click",u)}l(),0!==s&&(A=setInterval((()=>{e.click()}),s),e.addEventListener("click",d),t.addEventListener("click",d));let h=0;r[h].classList.add(o)}(document.querySelector(".slides-wrapper"),document.querySelector(".carousel-button.left"),document.querySelector(".carousel-button.right"),document.querySelectorAll(".carousel-dot"))})();
//# sourceMappingURL=main.js.map