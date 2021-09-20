import{p as e}from"./vendor.757739d2.js";import{a as t,b as r}from"./index.bb7006e4.js";const n=(e,t=0)=>{const r={};switch(e){case"ARS":r.symbol="$",r.decimals=2;break;default:r.symbol="$",r.decimals=0}return`${r.symbol} ${t.toFixed(r.decimals).replace(/\d(?=(\d{3})+\.)/g,"$&.")}`};var o={exports:{}},i=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},a=i,s=Object.prototype.toString;function c(e){return"[object Array]"===s.call(e)}function u(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function l(e){if("[object Object]"!==s.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function d(e){return"[object Function]"===s.call(e)}function p(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),c(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var h={isArray:c,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:function(e){return null!==e&&!u(e)&&null!==e.constructor&&!u(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:f,isPlainObject:l,isUndefined:u,isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:d,isStream:function(e){return f(e)&&d(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:p,merge:function e(){var t={};function r(r,n){l(t[n])&&l(r)?t[n]=e(t[n],r):l(r)?t[n]=e({},r):c(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)p(arguments[n],r);return t},extend:function(e,t,r){return p(t,(function(t,n){e[n]=r&&"function"==typeof t?a(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},m=h;function g(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var y=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(m.isURLSearchParams(t))n=t.toString();else{var o=[];m.forEach(t,(function(e,t){null!=e&&(m.isArray(e)?t+="[]":e=[e],m.forEach(e,(function(e){m.isDate(e)?e=e.toISOString():m.isObject(e)&&(e=JSON.stringify(e)),o.push(g(t)+"="+g(e))})))})),n=o.join("&")}if(n){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},v=h;function b(){this.handlers=[]}b.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},b.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},b.prototype.forEach=function(e){v.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var w=b,x=h,j=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},E=j,S=function(e,t,r,n,o){var i=new Error(e);return E(i,t,r,n,o)},O=S,k=h,A=k.isStandardBrowserEnv()?{write:function(e,t,r,n,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),k.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),k.isString(n)&&a.push("path="+n),k.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},N=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},C=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},R=h,T=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],_=h,P=_.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=_.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},U=h,B=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(O("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)},q=A,L=y,D=function(e,t){return e&&!N(t)?C(e,t):t},H=function(e){var t,r,n,o={};return e?(R.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=R.trim(e.substr(0,n)).toLowerCase(),r=R.trim(e.substr(n+1)),t){if(o[t]&&T.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o},z=P,M=S,F=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers,i=e.responseType;U.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",c=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+c)}var u=D(e.baseURL,e.url);function f(){if(a){var n="getAllResponseHeaders"in a?H(a.getAllResponseHeaders()):null,o={data:i&&"text"!==i&&"json"!==i?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:n,config:e,request:a};B(t,r,o),a=null}}if(a.open(e.method.toUpperCase(),L(u,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,"onloadend"in a?a.onloadend=f:a.onreadystatechange=function(){a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))&&setTimeout(f)},a.onabort=function(){a&&(r(M("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(M("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(M(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",a)),a=null},U.isStandardBrowserEnv()){var l=(e.withCredentials||z(u))&&e.xsrfCookieName?q.read(e.xsrfCookieName):void 0;l&&(o[e.xsrfHeaderName]=l)}"setRequestHeader"in a&&U.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),U.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),i&&"json"!==i&&(a.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),r(e),a=null)})),n||(n=null),a.send(n)}))},J=h,$=function(e,t){x.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},V=j,I={"Content-Type":"application/x-www-form-urlencoded"};function X(e,t){!J.isUndefined(e)&&J.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var G,W={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(G=F),G),transformRequest:[function(e,t){return $(t,"Accept"),$(t,"Content-Type"),J.isFormData(e)||J.isArrayBuffer(e)||J.isBuffer(e)||J.isStream(e)||J.isFile(e)||J.isBlob(e)?e:J.isArrayBufferView(e)?e.buffer:J.isURLSearchParams(e)?(X(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):J.isObject(e)||t&&"application/json"===t["Content-Type"]?(X(t,"application/json"),function(e,t,r){if(J.isString(e))try{return(t||JSON.parse)(e),J.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,r=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,o=!r&&"json"===this.responseType;if(o||n&&J.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(o){if("SyntaxError"===i.name)throw V(i,this,"E_JSON_PARSE");throw i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};W.headers={common:{Accept:"application/json, text/plain, */*"}},J.forEach(["delete","get","head"],(function(e){W.headers[e]={}})),J.forEach(["post","put","patch"],(function(e){W.headers[e]=J.merge(I)}));var K=W,Q=h,Z=K,Y=function(e){return!(!e||!e.__CANCEL__)},ee=h,te=function(e,t,r){var n=this||Z;return Q.forEach(r,(function(r){e=r.call(n,e,t)})),e},re=Y,ne=K;function oe(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var ie=h,ae=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function s(e,t){return ie.isPlainObject(e)&&ie.isPlainObject(t)?ie.merge(e,t):ie.isPlainObject(t)?ie.merge({},t):ie.isArray(t)?t.slice():t}function c(n){ie.isUndefined(t[n])?ie.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(e[n],t[n])}ie.forEach(n,(function(e){ie.isUndefined(t[e])||(r[e]=s(void 0,t[e]))})),ie.forEach(o,c),ie.forEach(i,(function(n){ie.isUndefined(t[n])?ie.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(void 0,t[n])})),ie.forEach(a,(function(n){n in t?r[n]=s(e[n],t[n]):n in e&&(r[n]=s(void 0,e[n]))}));var u=n.concat(o).concat(i).concat(a),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return ie.forEach(f,c),r};var se={_from:"axios@^0.21.4",_id:"axios@0.21.4",_inBundle:!1,_integrity:"sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==",_location:"/axios",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"axios@^0.21.4",name:"axios",escapedName:"axios",rawSpec:"^0.21.4",saveSpec:null,fetchSpec:"^0.21.4"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/axios/-/axios-0.21.4.tgz",_shasum:"c67b90dc0568e5c1cf2b0b858c43ba28e2eda575",_spec:"axios@^0.21.4",_where:"/home/runner/work/meli-challenge/meli-challenge",author:{name:"Matt Zabriskie"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},bugs:{url:"https://github.com/axios/axios/issues"},bundleDependencies:!1,bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}],dependencies:{"follow-redirects":"^1.14.0"},deprecated:!1,description:"Promise based HTTP client for the browser and node.js",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},homepage:"https://axios-http.com",jsdelivr:"dist/axios.min.js",keywords:["xhr","http","ajax","promise","node"],license:"MIT",main:"index.js",name:"axios",repository:{type:"git",url:"git+https://github.com/axios/axios.git"},scripts:{build:"NODE_ENV=production grunt build",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",examples:"node ./examples/server.js",fix:"eslint --fix lib/**/*.js",postversion:"git push && git push --tags",preversion:"npm test",start:"node ./sandbox/server.js",test:"grunt test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},typings:"./index.d.ts",unpkg:"dist/axios.min.js",version:"0.21.4"},ce={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var ue={},fe=se.version.split(".");function le(e,t){for(var r=t?t.split("."):fe,n=e.split("."),o=0;o<3;o++){if(r[o]>n[o])return!0;if(r[o]<n[o])return!1}return!1}ce.transitional=function(e,t,r){var n=t&&le(t);function o(e,t){return"[Axios v"+se.version+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,i,a){if(!1===e)throw new Error(o(i," has been removed in "+t));return n&&!ue[i]&&(ue[i]=!0,console.warn(o(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,a)}};var de=h,pe=y,he=w,me=function(e){return oe(e),e.headers=e.headers||{},e.data=te.call(e,e.data,e.headers,e.transformRequest),e.headers=ee.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ee.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||ne.adapter)(e).then((function(t){return oe(e),t.data=te.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return re(t)||(oe(e),t&&t.response&&(t.response.data=te.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},ge=ae,ye={isOlderVersion:le,assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],a=t[i];if(a){var s=e[i],c=void 0===s||a(s,i,e);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==r)throw Error("Unknown option "+i)}},validators:ce},ve=ye.validators;function be(e){this.defaults=e,this.interceptors={request:new he,response:new he}}be.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=ge(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&ye.assertOptions(t,{silentJSONParsing:ve.transitional(ve.boolean,"1.0.0"),forcedJSONParsing:ve.transitional(ve.boolean,"1.0.0"),clarifyTimeoutError:ve.transitional(ve.boolean,"1.0.0")},!1);var r=[],n=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(n=n&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!n){var a=[me,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(i),o=Promise.resolve(e);a.length;)o=o.then(a.shift(),a.shift());return o}for(var s=e;r.length;){var c=r.shift(),u=r.shift();try{s=c(s)}catch(f){u(f);break}}try{o=me(s)}catch(f){return Promise.reject(f)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},be.prototype.getUri=function(e){return e=ge(this.defaults,e),pe(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},de.forEach(["delete","get","head","options"],(function(e){be.prototype[e]=function(t,r){return this.request(ge(r||{},{method:e,url:t,data:(r||{}).data}))}})),de.forEach(["post","put","patch"],(function(e){be.prototype[e]=function(t,r,n){return this.request(ge(n||{},{method:e,url:t,data:r}))}}));var we=be;function xe(e){this.message=e}xe.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},xe.prototype.__CANCEL__=!0;var je=xe,Ee=je;function Se(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new Ee(e),t(r.reason))}))}Se.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Se.source=function(){var e;return{token:new Se((function(t){e=t})),cancel:e}};var Oe=Se,ke=h,Ae=i,Ne=we,Ce=ae;function Re(e){var t=new Ne(e),r=Ae(Ne.prototype.request,t);return ke.extend(r,Ne.prototype,t),ke.extend(r,t),r}var Te=Re(K);Te.Axios=Ne,Te.create=function(e){return Re(Ce(Te.defaults,e))},Te.Cancel=je,Te.CancelToken=Oe,Te.isCancel=Y,Te.all=function(e){return Promise.all(e)},Te.spread=function(e){return function(t){return e.apply(null,t)}},Te.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},o.exports=Te,o.exports.default=Te;var _e=o.exports;_e.interceptors.request.use((e=>e));const Pe=e=>_e.get(`https://api.mercadolibre.com${e}`),Ue=e("search/products",(async(e,{dispatch:r})=>{try{const{data:n}=await Pe(`/sites/MLA/search?q=${e}`),o=n.available_filters.filter((e=>"category"===e.id))[0];let i=(({items:e,categories:t})=>({author:{name:"Miguel",lastname:"López"},categories:t,items:e.map((({shipping:e,id:t,thumbnail:r,title:n,currency_id:o,price:i,condition:a,address:s})=>({id:t,title:n,price:{currency:o,amount:i,decimals:0},picture:r,condition:a,state_name:s.state_name,free_shipping:e.free_shipping})))}))({items:n.results.slice(0,4),categories:null==o?void 0:o.values});r(t(i))}catch(n){console.error("search/products",n)}})),Be=e("product/byId",(async(e,{dispatch:t})=>{try{const{data:n}=await Pe(`/items/${e}`),{data:o}=await Pe(`/items/${e}/description`),i=((e,t)=>({author:{name:"Miguel",lastname:"López"},item:{id:e.id,title:e.title,price:{currency:e.currency_id,amount:e.base_price,decimals:0},picture:e.pictures[0].url,condition:e.condition,free_shipping:e.shipping.free_shipping,sold_quantity:e.sold_quantity,description:t.plain_text}}))(n,o);t(r(i))}catch(n){console.error("search/products",n)}}));export{n as f,Be as g,Ue as s};
