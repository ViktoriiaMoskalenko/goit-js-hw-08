var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,c=f||a||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var r,i,o,u,f,a,c=0,l=!1,v=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function T(e){return c=e,f=setTimeout(h,t),l?b(e):u}function j(e){var n=e-a;return void 0===a||n>=t||n<0||v&&e-c>=o}function h(){var e=m();if(j(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-a);return v?d(n,o-(e-c)):n}(e))}function w(e){return f=void 0,g&&r?b(e):(r=i=void 0,u)}function x(){var e=m(),n=j(e);if(r=arguments,i=this,a=e,n){if(void 0===f)return T(a);if(v)return f=setTimeout(h,t),b(a)}return void 0===f&&(f=setTimeout(h,t)),u}return t=y(t)||0,p(n)&&(l=!!n.leading,o=(v="maxWait"in n)?s(y(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=a=i=f=void 0},x.flush=function(){return void 0===f?u:w(m())},x}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||o.test(e)?u(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const g=document.querySelector("input"),b=document.querySelector("textarea"),T=document.querySelector("form");function j(e){const{elements:{email:t,message:n}}=e.currentTarget.form,r={email:t.value,message:n.value};localStorage.setItem("feedback-form-state",JSON.stringify(r))}g.addEventListener("input",t(j,500)),b.addEventListener("input",t(j,500)),T.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.5ba21fad.js.map
