(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),c=n.n(o),i=(n(19),n(20),n(3)),l=function(){return a.a.createElement("div",null,a.a.createElement("nav",{className:"navbar navbar-expand-lg bg-light"},a.a.createElement("div",{className:"container-fluid"},a.a.createElement(i.b,{className:"navbar-brand",to:"/"},"NewsGeek"),a.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},a.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{className:"nav-link",to:"/Business"},"Business")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{className:"nav-link",to:"/Entertainment"},"Entertainment")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{className:"nav-link",to:"/Health"},"Health")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{className:"nav-link",to:"/Science"},"Science")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{className:"nav-link",to:"/Sports"},"Sports")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.b,{className:"nav-link",to:"/Technology"},"Technology")))))))},s=n(5),u=n(4),m=function(e){var t=e.title,n=e.description,r=e.imageUrl,o=e.newsUrl,c=e.author,i=e.date;return a.a.createElement("div",{className:"my-2"},a.a.createElement("div",{className:"card"},a.a.createElement("img",{src:r||"https://filecache.mediaroom.com/mr5mr_ibmnewsroom/193163/IBM%20Logo_Social.jpg",className:"card-img-top",alt:"..."}),a.a.createElement("div",{className:"card-body"},a.a.createElement("h5",{className:"card-title"},t),a.a.createElement("p",{className:"card-text"},n),a.a.createElement("p",{className:"card-text"},a.a.createElement("small",{className:"text-muted"}," By: ",c||"Unknown"," on ",new Date(i).toGMTString())),a.a.createElement("a",{rel:" noopener noreferrer",href:o,target:"_blank",className:"btn btn-sm btn-primary"},"Read More "))))},h=n(8),f=n.n(h),p=function(){return a.a.createElement("div",{className:"text-center "},a.a.createElement("img",{src:f.a,alt:"loading"}))},d=n(9);function v(){v=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(j){i=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new k(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=w(c,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var u={};function m(){}function h(){}function f(){}var p={};i(p,a,function(){return this});var d=Object.getPrototypeOf,y=d&&d(d(L([])));y&&y!==t&&n.call(y,a)&&(p=y);var g=f.prototype=m.prototype=Object.create(p);function E(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var r;this._invoke=function(a,o){function c(){return new t(function(r,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=f,i(g,"constructor",f),i(f,"constructor",h),h.displayName=i(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),i(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new b(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(g),i(g,c,"Generator"),i(g,a,function(){return this}),i(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var y=function(e){var t=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},n=Object(r.useState)([]),o=Object(u.a)(n,2),c=o[0],i=o[1],l=Object(r.useState)(!0),h=Object(u.a)(l,2),f=(h[0],h[1]),y=Object(r.useState)(0),g=Object(u.a)(y,2),E=g[0],b=g[1],w=Object(r.useState)(0),x=Object(u.a)(w,2),N=x[0],k=x[1];document.title="".concat(t(e.category),"-NewsGeek");var L=function(){var t=Object(s.a)(v().mark(function t(n){var r,a,o;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://newsapi.org/v2/top-headlines?country=".concat(e.country,"&category=").concat(e.category,"&apiKey=6c5f2e9ad307401daa3b11271282c9ab&page=1&pageSize=").concat(e.pageSize),f(!0),t.next=4,fetch(r);case 4:return a=t.sent,t.next=7,a.json();case 7:o=t.sent,i(o.articles),k(o.totalResults),f(!1);case 11:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();Object(r.useEffect)(function(){L()},[]);var S=function(){var t=Object(s.a)(v().mark(function t(){var n,r,a;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return b(E+1),n="https://newsapi.org/v2/top-headlines?country=".concat(e.country,"&category=").concat(e.category,"&apiKey=6c5f2e9ad307401daa3b11271282c9ab&page=").concat(E+1,"&pageSize=").concat(e.pageSize),f(!0),t.next=5,fetch(n);case 5:return r=t.sent,t.next=8,r.json();case 8:a=t.sent,i(c.concat(a.articles)),k(a.totalResults),f(!1);case 12:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",{className:"bg-success p-2 text-dark bg-opacity-25"},a.a.createElement("div",{className:"container my-3"},a.a.createElement("h2",{className:"text-center"},"NewsGeek- ",t(e.category)," Trending News"," "),a.a.createElement(d.a,{dataLength:c.length,next:S,hasMore:c.length!==N,loader:a.a.createElement(p,null),endMessage:a.a.createElement("p",{style:{textAlign:"center"}},a.a.createElement("b",null,"Yay! You have seen it all"))},a.a.createElement("div",{className:"row"},c.map(function(e){return a.a.createElement("div",{className:"col-md-3",key:e.url},a.a.createElement(m,{title:e.title,description:e.description,imageUrl:e.urlToImage,newsUrl:e.url,author:e.author,date:e.publishedAt}))})))))};y.defaultProps={country:"in",pageSize:12,category:"general"};var g=y,E=n(1),b=function(){return a.a.createElement(i.a,null,a.a.createElement("div",null,a.a.createElement(l,null),a.a.createElement(E.c,null,a.a.createElement(E.a,{exact:!0,path:"/",element:a.a.createElement(g,{key:"general",country:"in",category:"general"})}),a.a.createElement(E.a,{exact:!0,path:"/business",element:a.a.createElement(g,{key:"business",country:"in",category:"business"})}),a.a.createElement(E.a,{exact:!0,path:"/entertainment",element:a.a.createElement(g,{key:"entertainment",country:"in",category:"entertainment"})}),a.a.createElement(E.a,{exact:!0,path:"/health",element:a.a.createElement(g,{key:"health",country:"in",category:"health"})}),a.a.createElement(E.a,{path:"/science",element:a.a.createElement(g,{key:"science",country:"in",category:"science"})}),a.a.createElement(E.a,{exact:!0,path:"/sports",element:a.a.createElement(g,{key:"sports",country:"in",category:"sports"})}),a.a.createElement(E.a,{exact:!0,path:"/technology",element:a.a.createElement(g,{key:"technology",country:"in",category:"technology"})}))))},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null))),w()},8:function(e,t,n){e.exports=n.p+"static/media/loading.444c0d9c.gif"}},[[10,1,2]]]);
//# sourceMappingURL=main.55eeb38c.chunk.js.map