!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}r.wrap=l;var h={};function d(){}function p(){}function g(){}var y={};s(y,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(E([])));m&&m!==n&&o.call(m,a)&&(y=m);var w=g.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(e,r){function n(i,a,c,u){var s=f(e[i],e,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=g,s(w,"constructor",g),s(g,"constructor",p),p.displayName=s(g,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(_.prototype),s(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=E,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.36710348.js","./index-legacy.af99a1db.js","./index-legacy.91c7f90a.js"],(function(t){"use strict";var r,o,c,u,s,l,f,h,d,p,g,y,v,m,w,b,_,x,O,L,j,E,S,P,k,I,$,A,G,N,T,C,F,D;return{setters:[function(t){r=t.d,o=t.u,c=t.e,u=t.a3,s=t.a,l=t.b9,f=t.as,h=t.f,d=t.m,p=t.a2,g=t.c2,y=t.c3,v=t.c4,m=t.c5,w=t.a0,b=t.aP,_=t.bh,x=t.c6,O=t.b3,L=t.b1,j=t.I,E=t.F,S=t.B,P=t.ai,k=t.ar,I=t.c7,$=t.v,A=t.ao,G=t.W,N=t.bz,T=t.bf,C=t.n},function(t){F=t.o},function(t){D=t.L}],execute:function(){var U=function(t){return h(N,{get colorScheme(){return t.can?"success":"danger"},get children(){return t.children}})};t("default",(function(){var t=r();F("manage.sidemenu.profile");var N=o(),R=N.to,Y=(N.searchParams,a(c(u().username),2)),z=Y[0],B=Y[1],M=a(c(""),2),W=M[0],q=M[1],H=a(s((function(t){return l.post("/me/update",{username:t?u().username:z(),password:t?"":W(),sso_id:u().sso_id})})),2),J=H[0],K=H[1],Q=function(){var r,o=(r=e().mark((function r(o){var i;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(o);case 2:i=e.sent,T(i,(function(){I(n(n({},u()),{},{username:z()})),o?R(""):(C.success(t("users.update_profile_success")),R("/@login?redirect=".concat(encodeURIComponent(location.pathname))))}));case 4:case"end":return e.stop()}}),r)})),function(){var t=this,e=arguments;return new Promise((function(n,o){var a=r.apply(t,e);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))});return function(t){return o.apply(this,arguments)}}();function V(t){var e=t.data;e.sso_id&&(I(n(n({},u()),{},{sso_id:e.sso_id})),Q(!0))}return window.addEventListener("message",V),f((function(){window.removeEventListener("message",V)})),h(G,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[h(d,{get when(){return!p.is_guest(u())},get fallback(){return[h(g,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[h(y,{mr:"$2_5"}),h(v,{mr:"$2_5",get children(){return t("users.guest-tips")}}),h(m,{get children(){return t("users.modify_nothing")}})]}}),h(w,{spacing:"$2",get children(){return[h(b,{get children(){return t("global.have_account")}}),h(b,{color:"$info9",as:D,get href(){return"/@login?redirect=".concat(encodeURIComponent(location.pathname))},get children(){return t("global.go_login")}})]}})]},get children(){return[h(_,{get children(){return t("users.update_profile")}}),h(x,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[h(O,{get children(){return[h(L,{for:"username",get children(){return t("users.change_username")}}),h(j,{id:"username",get value(){return z()},onInput:function(t){B(t.currentTarget.value)}})]}}),h(O,{get children(){return[h(L,{for:"password",get children(){return t("users.change_password")}}),h(j,{id:"password",type:"password",placeholder:"********",get value(){return W()},onInput:function(t){q(t.currentTarget.value)}}),h(E,{get children(){return t("users.change_password-tips")}})]}})]}}),h(w,{spacing:"$2",get children(){return[h(S,{get loading(){return J()},onClick:[Q,!1],get children(){return t("global.save")}}),h(d,{get when(){return!u().otp},get children(){return h(S,{colorScheme:"accent",onClick:function(){R("/@manage/2fa")},get children(){return t("users.enable_2fa")}})}})]}})]}}),h(d,{get when(){return P((function(){return!!k("sso_login_enabled")}),!0)()&&!p.is_guest(u())},get children(){return[h(_,{get children(){return t("users.sso_login")}}),h(w,{spacing:"$2",get children(){return h(d,{get when(){return u().sso_id},get fallback(){return h(S,{onClick:function(){var t=l.getUri()+"/auth/sso?method=get_sso_id";window.open(t,"authPopup","width=500,height=600")},get children(){return t("users.connect_sso")}})},get children(){return h(S,{colorScheme:"danger",get loading(){return J()},onClick:function(){I(n(n({},u()),{},{sso_id:""})),Q(!0)},get children(){return t("users.disconnect_sso")}})}})}})]}}),h(w,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return h($,{each:A,children:function(e,r){return h(U,{get can(){return p.can(u(),r())},get children(){return t("users.permissions.".concat(e))}})}})}})]}})}))}}}))}();
