/*! For license information please see 218.a26717ef.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[218],{3313:function(t,n,r){r.d(n,{Ai:function(){return f},Bt:function(){return d},KJ:function(){return l},Y5:function(){return h},y:function(){return p}});var e=r(5861),o=r(1243);function i(){i=function(){return n};var t,n={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,n,r){t[n]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,r){return t[n]=r}}function f(t,n,r,e){var i=n&&n.prototype instanceof g?n:g,a=Object.create(i.prototype),c=new S(e||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function h(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var p="suspendedStart",d="executing",y="completed",v={};function g(){}function m(){}function x(){}var w={};l(w,c,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(G([])));L&&L!==r&&e.call(L,c)&&(w=L);var E=x.prototype=g.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function k(n,r,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=Z(c,e);if(u){if(u===v)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var s=h(n,r,e);if("normal"===s.type){if(o=e.done?y:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=y,e.method="throw",e.arg=s.arg)}}}function Z(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,Z(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),v;var i=h(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function G(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function r(){for(;++o<n.length;)if(e.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return m.prototype=x,o(E,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=l(x,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},j(_.prototype),l(_.prototype,u,(function(){return this})),n.AsyncIterator=_,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new _(f(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),l(E,s,"Generator"),l(E,c,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=G,S.prototype={constructor:S,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(e,o){return c.type="throw",c.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:G(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),v}},n}var a="https://api.themoviedb.org/3/",c="afc97726cd3b4e142bea1138da06bc07";function u(){return s.apply(this,arguments)}function s(){return s=(0,e.Z)(i().mark((function t(){var n,r,e,a=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",r=a.length>1&&void 0!==a[1]?a[1]:{},t.next=4,o.Z.get(n,r);case 4:return e=t.sent,t.abrupt("return",e.data);case 6:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function l(){return u("".concat(a,"/trending/movie/day?api_key=").concat(c))}function f(t){return u("".concat(a,"search/movie?api_key=").concat(c,"&query=").concat(t,"&language=en-US&include_adult=false"))}function h(t){return u("".concat(a,"movie/").concat(t,"?api_key=").concat(c,"&language=en-US"))}function p(t){return u("".concat(a,"movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US&"))}function d(t){return u("".concat(a,"/movie/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US&"))}},9040:function(t,n,r){r.d(n,{$4:function(){return x},Dx:function(){return g},Ei:function(){return _},H2:function(){return E},MW:function(){return j},US:function(){return w},Xb:function(){return k},eW:function(){return L},jJ:function(){return m},sj:function(){return b}});var e,o,i,a,c,u,s,l,f,h,p,d=r(168),y=r(5867),v=r(1087),g=(y.ZP.section(e||(e=(0,d.Z)(["\n  display: flex;\n  margin-top: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  justify-content: center;\n"]))),y.ZP.h1(o||(o=(0,d.Z)(["\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 10px;\n  color: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(t){return t.theme.colors.primaryText}))),m=(0,y.ZP)(v.OL)(i||(i=(0,d.Z)(["\n  text-decoration: none;\n"]))),x=y.ZP.div(a||(a=(0,d.Z)(["\n  padding: 0 10px;\n"]))),w=y.ZP.h2(c||(c=(0,d.Z)(["\n  font-size: 26px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: ",";\n"])),(function(t){return t.theme.colors.primaryText})),b=y.ZP.h3(u||(u=(0,d.Z)(["\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(t){return t.theme.colors.primaryText})),L=y.ZP.ul(s||(s=(0,d.Z)(["\n  display: grid;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  grid-gap: 24px;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n"]))),E=y.ZP.li(l||(l=(0,d.Z)(["\n  width: 100%;\n  display: block;\n  padding: 5px;\n  background-color: ",";\n  transform: scale(1);\n  transition: transform 250ms linear;\n  border-radius: 15px 15px 0 0;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    cursor: pointer;\n  }\n"])),(function(t){return t.theme.colors.buttonBg})),j=y.ZP.p(f||(f=(0,d.Z)(["\n  margin-bottom: 10px;\n  color: ",";\n  font-size: 14px;\n  font-weight: bold;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(t){return t.theme.colors.grey})),_=y.ZP.img(h||(h=(0,d.Z)(["\n  border-radius: 15px 15px 0 0;\n  max-width: 300px;\n"]))),k=y.ZP.img(p||(p=(0,d.Z)(["\n  border-radius: 15px 15px 0 0;\n  width: 100%;\n"])))},9467:function(t,n,r){r.d(n,{Z:function(){return a}});var e=r(7689),o=r(9040),i=r(184);function a(t){var n=t.id,r=t.title,a=t.name,c=t.backdrop_path,u=t.release_date,s=(0,e.TH)(),l=new Date(u);return(0,i.jsx)(o.H2,{children:(0,i.jsxs)(o.jJ,{to:"/movies/".concat(n),state:{from:s},children:[c((0,i.jsx)(o.Xb,{src:"https://image.tmdb.org/t/p/w300".concat(c),alt:""})),(0,i.jsxs)(o.$4,{children:[(0,i.jsx)(o.sj,{children:r||a}),(0,i.jsx)(o.MW,{children:l.toLocaleDateString()})]})]})},n)}},2218:function(t,n,r){r.r(n),r.d(n,{default:function(){return L}});var e=r(5861),o=r(9439),i=r(2791),a=r(1087),c=r(3313),u=r(5218),s=r(9467),l=r(9040),f=r(184);function h(t){var n=t.searchFilms;return(0,f.jsx)(l.eW,{children:n.map((function(t){var n=t.id,r=t.title,e=t.release_date,o=t.name,i=t.backdrop_path;return(0,f.jsx)(s.Z,{id:n,release_date:e,title:r,name:o,backdrop_path:i},n)}))})}var p,d,y,v=r(168),g=r(5867),m=g.ZP.form(p||(p=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 100%;\n"]))),x=g.ZP.input(d||(d=(0,v.Z)(["\n  display: inline-block;\n  font-size: 20px;\n  padding: 10px;\n  margin-right: 10px;\n  border: none;\n  border-radius: 20px;\n  background-color: ",";\n  box-shadow: inset 2px 2px 5px ",",\n    inset -5px -5px 10px ",";\n  transition: all 0.2s ease-in-out;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n  &:hover {\n    box-shadow: inset 1px 1px 2px var(--color-shadow),\n      inset -1px -1px 2px var(--color-white);\n  }\n"])),(function(t){return t.theme.colors.buttonBg}),(function(t){return t.theme.colors.colorShadow}),(function(t){return t.theme.colors.white})),w=g.ZP.button(y||(y=(0,v.Z)(["\n  background-color: ",";\n  width: 40px;\n  height: 40px;\n  border: 0;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  cursor: pointer;\n  outline: none;\n  appearance: none;\n  transition: all 0.2s ease-in-out;\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: inset 1px 1px 2px ",",\n      inset -1px -1px 2px ",";\n  }\n  &:focus {\n    opacity: 2;\n  }\n"])),(function(t){return t.theme.colors.buttonBg}),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.active}));function b(){b=function(){return n};var t,n={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,n,r){t[n]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,r){return t[n]=r}}function l(t,n,r,e){var i=n&&n.prototype instanceof v?n:v,a=Object.create(i.prototype),c=new S(e||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function f(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var h="suspendedStart",p="executing",d="completed",y={};function v(){}function g(){}function m(){}var x={};s(x,a,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==r&&e.call(L,a)&&(x=L);var E=m.prototype=v.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function k(n,r,e){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=Z(c,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===h)throw o=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=p;var s=f(n,r,e);if("normal"===s.type){if(o=e.done?d:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=d,e.method="throw",e.arg=s.arg)}}}function Z(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,Z(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),y;var i=f(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function G(n){if(n||""===n){var r=n[a];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function r(){for(;++o<n.length;)if(e.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return g.prototype=m,o(E,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=s(m,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},j(_.prototype),s(_.prototype,c,(function(){return this})),n.AsyncIterator=_,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new _(l(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=G,S.prototype={constructor:S,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(e,o){return c.type="throw",c.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:G(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),y}},n}function L(){var t=(0,i.useState)(""),n=(0,o.Z)(t,2),r=n[0],s=n[1],l=(0,i.useState)(""),p=(0,o.Z)(l,2),d=p[0],y=p[1],v=(0,i.useState)([]),g=(0,o.Z)(v,2),L=g[0],E=g[1],j=(0,a.lr)(),_=(0,o.Z)(j,2),k=_[0],Z=_[1];(0,i.useEffect)((function(){return k.has("query")&&y(k.get("query")),function(){E([])}}),[k]),(0,i.useEffect)((function(){if(""!==d){var t=function(){var t=(0,e.Z)(b().mark((function t(){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Ai)(d).then((function(t){if(!(t.results.length>0))throw Error();E(t.results)})).catch((function(t){u.ZP.error("Movie not found"),console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[d]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.x7,{}),(0,f.jsxs)(m,{onSubmit:function(t){t.preventDefault(),y(r),""!==r?(Z({query:r}),s("")):u.ZP.error("Enter what you want to find please")},children:[(0,f.jsx)(x,{onChange:function(t){s(t.target.value)},value:r,placeholder:"Search movies..."}),(0,f.jsx)(w,{type:"submit"})]}),L&&(0,f.jsx)(h,{searchFilms:L})]})}}}]);
//# sourceMappingURL=218.a26717ef.chunk.js.map