/*! For license information please see 170.19fe68a4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{3313:function(t,r,n){n.d(r,{Ai:function(){return l},Bt:function(){return d},KJ:function(){return f},Y5:function(){return h},y:function(){return p}});var e=n(5861),o=n(1243);function i(){i=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,n){return t[r]=n}}function l(t,r,n,e){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new S(e||[]);return o(a,"_invoke",{value:Z(t,n,c)}),a}function h(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p="suspendedStart",d="executing",y="completed",v={};function g(){}function m(){}function x(){}var w={};f(w,c,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(N([])));L&&L!==n&&e.call(L,c)&&(w=L);var E=x.prototype=g.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function n(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function Z(r,n,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=k(c,e);if(u){if(u===v)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var s=h(r,n,e);if("normal"===s.type){if(o=e.done?y:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=y,e.method="throw",e.arg=s.arg)}}}function k(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,k(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),v;var i=h(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=x,o(E,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=f(x,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},j(_.prototype),f(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new _(l(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),f(E,s,"Generator"),f(E,c,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=N,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:N(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),v}},r}var a="https://api.themoviedb.org/3/",c="afc97726cd3b4e142bea1138da06bc07";function u(){return s.apply(this,arguments)}function s(){return s=(0,e.Z)(i().mark((function t(){var r,n,e,a=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},t.next=4,o.Z.get(r,n);case 4:return e=t.sent,t.abrupt("return",e.data);case 6:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function f(){return u("".concat(a,"/trending/movie/day?api_key=").concat(c))}function l(t){return u("".concat(a,"search/movie?api_key=").concat(c,"&query=").concat(t,"&language=en-US&include_adult=false"))}function h(t){return u("".concat(a,"movie/").concat(t,"?api_key=").concat(c,"&language=en-US"))}function p(t){return u("".concat(a,"movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US&"))}function d(t){return u("".concat(a,"/movie/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US&"))}},9040:function(t,r,n){n.d(r,{$4:function(){return x},Dx:function(){return g},Ei:function(){return _},H2:function(){return E},MW:function(){return j},US:function(){return w},Xb:function(){return Z},eW:function(){return L},jJ:function(){return m},sj:function(){return b}});var e,o,i,a,c,u,s,f,l,h,p,d=n(168),y=n(5867),v=n(1087),g=(y.ZP.section(e||(e=(0,d.Z)(["\n  display: flex;\n  margin-top: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  justify-content: center;\n"]))),y.ZP.h1(o||(o=(0,d.Z)(["\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 10px;\n  color: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(t){return t.theme.colors.primaryText}))),m=(0,y.ZP)(v.OL)(i||(i=(0,d.Z)(["\n  text-decoration: none;\n"]))),x=y.ZP.div(a||(a=(0,d.Z)(["\n  padding: 0 10px;\n"]))),w=y.ZP.h2(c||(c=(0,d.Z)(["\n  font-size: 26px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: ",";\n"])),(function(t){return t.theme.colors.primaryText})),b=y.ZP.h3(u||(u=(0,d.Z)(["\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(t){return t.theme.colors.primaryText})),L=y.ZP.ul(s||(s=(0,d.Z)(["\n  display: grid;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  grid-gap: 24px;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n"]))),E=y.ZP.li(f||(f=(0,d.Z)(["\n  width: 100%;\n  display: block;\n  padding: 5px;\n  background-color: ",";\n  transform: scale(1);\n  transition: transform 250ms linear;\n  border-radius: 15px 15px 0 0;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    cursor: pointer;\n  }\n"])),(function(t){return t.theme.colors.buttonBg})),j=y.ZP.p(l||(l=(0,d.Z)(["\n  margin-bottom: 10px;\n  color: ",";\n  font-size: 14px;\n  font-weight: bold;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(t){return t.theme.colors.grey})),_=y.ZP.img(h||(h=(0,d.Z)(["\n  border-radius: 15px 15px 0 0;\n  max-width: 300px;\n"]))),Z=y.ZP.img(p||(p=(0,d.Z)(["\n  border-radius: 15px 15px 0 0;\n  width: 100%;\n"])))},4913:function(t,r,n){n.r(r),n.d(r,{default:function(){return b}});var e,o,i=n(1413),a=n(5861),c=n(9439),u=n(2791),s=n(7689),f=n(3313),l=n(9040),h=n(168),p=n(5867),d=p.ZP.div(e||(e=(0,h.Z)(["\n  padding: 5px;\n  background-color: ",";\n  margin-right: 10px;\n  border-radius: 15px 15px 0 0;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    cursor: pointer;\n  }\n"])),(function(t){return t.theme.colors.buttonBg})),y=p.ZP.img(o||(o=(0,h.Z)(["\n  border-radius: 15px 15px 0 0;\n  margin-right: auto;\n  margin-left: auto;\n  width: 100%;\n"]))),v=n(5510),g=function(t){var r={speed:500,slidesToShow:4,swipeToSlide:!0};return t<5?(0,i.Z)((0,i.Z)({},r),{},{slidesToShow:t}):r},m=n(5717),x=(n(3037),n(8688),n(184));function w(){w=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,n){return t[r]=n}}function f(t,r,n,e){var i=r&&r.prototype instanceof v?r:v,a=Object.create(i.prototype),c=new S(e||[]);return o(a,"_invoke",{value:Z(t,n,c)}),a}function l(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var h="suspendedStart",p="executing",d="completed",y={};function v(){}function g(){}function m(){}var x={};s(x,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(N([])));L&&L!==n&&e.call(L,a)&&(x=L);var E=m.prototype=v.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function Z(r,n,e){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=k(c,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===h)throw o=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=p;var s=l(r,n,e);if("normal"===s.type){if(o=e.done?d:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=d,e.method="throw",e.arg=s.arg)}}}function k(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,k(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),y;var i=l(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(r){if(r||""===r){var n=r[a];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return g.prototype=m,o(E,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=s(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},j(_.prototype),s(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new _(f(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=N,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:N(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),y}},r}function b(){var t=(0,u.useState)([]),r=(0,c.Z)(t,2),n=r[0],e=r[1],o=(0,u.useState)(!1),h=(0,c.Z)(o,2),p=h[0],b=h[1],L=(0,u.useState)(null),E=(0,c.Z)(L,2),j=E[0],_=E[1],Z=(0,s.UO)().moviesId;(0,u.useEffect)((function(){var t=function(){var t=(0,a.Z)(w().mark((function t(){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.prev=1,t.next=4,(0,f.y)(Z).then((function(t){return e(t.cast)}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),_(t.t0);case 9:return t.prev=9,b(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[1,6,9,12]])})));return function(){return t.apply(this,arguments)}}();t()}),[Z]);var k=!p&&0===n.length;return(0,x.jsxs)(x.Fragment,{children:[p&&(0,x.jsx)(v.a,{}),k&&(0,x.jsx)(l.Dx,{children:"No actors for this movie"}),(0,x.jsx)(m.Z,(0,i.Z)((0,i.Z)({},g(n.length)),{},{width:"100%",children:!j&&n&&n.map((function(t){var r=t.id,n=t.character,e=t.name,o=t.profile_path;return(0,x.jsxs)(d,{children:[o((0,x.jsx)(y,{src:"https://image.tmdb.org/t/p/w300".concat(o),alt:""})),e?(0,x.jsx)(l.sj,{children:e}):(0,x.jsx)(l.sj,{children:"No actor`s name"}),n?(0,x.jsx)(l.MW,{children:n}):(0,x.jsx)(l.MW,{children:"No actor`s character"})]},r)}))}))]})}}}]);
//# sourceMappingURL=170.19fe68a4.chunk.js.map