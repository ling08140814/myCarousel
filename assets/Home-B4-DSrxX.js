import{_ as He,r as K,w as dt,o as F,c as L,a as J,F as Se,b as Te,u as V,d as Oe,t as Ae,n as xe,e as pt}from"./index-C2VOMyxp.js";const ht={class:"carousel-wrap"},mt={class:"dots"},yt=["onClick"],wt={class:"footer"},bt={__name:"Carousel",props:{title:String,list:Array,speed:{type:Number,default:1},initialIndex:{type:Number,default:0},autoPlay:{type:Boolean,default:!0}},setup(e){const t=e,{title:n,list:r,speed:s,initialIndex:o,autoPlay:i}=t,c=K(0),f=K(null);dt(()=>{c.value=o>=r.length?0:o});const u=()=>{clearInterval(f.value)},l=E=>{u(),E==="left"?c.value--:c.value++,w()},p=E=>{u(),c.value=E,w()},w=()=>{i&&(u(),f.value=setInterval(()=>{c.value<r.length-1?c.value++:c.value=0},s))};return w(),(E,h)=>(F(),L("div",ht,[J("div",{class:"carousel",onMouseover:u,onMouseout:w},[(F(!0),L(Se,null,Te(V(r),(y,d)=>(F(),L("div",{key:"content_"+d,class:xe([{active:d===c.value},"carousel-item"])},[J("span",null,Ae(y.content),1)],2))),128)),J("div",mt,[(F(!0),L(Se,null,Te(V(r),(y,d)=>(F(),L("div",{key:"dot_"+d,class:xe({"active-dot":d===c.value}),onClick:S=>p(d)},null,10,yt))),128))]),c.value!==0?(F(),L("div",{key:0,class:"arrow left-arrow",onClick:h[0]||(h[0]=y=>l("left"))})):Oe("",!0),c.value!==V(r).length-1?(F(),L("div",{key:1,class:"arrow right-arrow",onClick:h[1]||(h[1]=y=>l("right"))})):Oe("",!0)],32),J("div",wt,Ae(V(n)||"轮播图示例"),1)]))}},Et=He(bt,[["__scopeId","data-v-7d497fa5"]]);function Me(e,t){return function(){return e.apply(t,arguments)}}const{toString:gt}=Object.prototype,{getPrototypeOf:ye}=Object,Q=(e=>t=>{const n=gt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>Q(t)===e),Z=e=>t=>typeof t===e,{isArray:j}=Array,I=Z("undefined");function Rt(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ze=C("ArrayBuffer");function St(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ze(e.buffer),t}const Tt=Z("string"),A=Z("function"),Je=Z("number"),Y=e=>e!==null&&typeof e=="object",Ot=e=>e===!0||e===!1,$=e=>{if(Q(e)!=="object")return!1;const t=ye(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},At=C("Date"),xt=C("File"),_t=C("Blob"),Ct=C("FileList"),Nt=e=>Y(e)&&A(e.pipe),Pt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=Q(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},Ft=C("URLSearchParams"),[Lt,Bt,Dt,Ut]=["ReadableStream","Request","Response","Headers"].map(C),kt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),j(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ve(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const B=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,$e=e=>!I(e)&&e!==B;function ce(){const{caseless:e}=$e(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ve(t,s)||s;$(t[o])&&$(r)?t[o]=ce(t[o],r):$(r)?t[o]=ce({},r):j(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&H(arguments[r],n);return t}const jt=(e,t,n,{allOwnKeys:r}={})=>(H(t,(s,o)=>{n&&A(s)?e[o]=Me(s,n):e[o]=s},{allOwnKeys:r}),e),qt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),vt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},It=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ye(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ht=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Mt=e=>{if(!e)return null;if(j(e))return e;let t=e.length;if(!Je(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},zt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ye(Uint8Array)),Jt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Vt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},$t=C("HTMLFormElement"),Wt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),_e=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Kt=C("RegExp"),We=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Gt=e=>{We(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Xt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return j(e)?r(e):r(String(e).split(t)),n},Qt=()=>{},Zt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,se="abcdefghijklmnopqrstuvwxyz",Ce="0123456789",Ke={DIGIT:Ce,ALPHA:se,ALPHA_DIGIT:se+se.toUpperCase()+Ce},Yt=(e=16,t=Ke.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function en(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const tn=e=>{const t=new Array(10),n=(r,s)=>{if(Y(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=j(r)?[]:{};return H(r,(i,c)=>{const f=n(i,s+1);!I(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},nn=C("AsyncFunction"),rn=e=>e&&(Y(e)||A(e))&&A(e.then)&&A(e.catch),Ge=((e,t)=>e?setImmediate:t?((n,r)=>(B.addEventListener("message",({source:s,data:o})=>{s===B&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),B.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",A(B.postMessage)),sn=typeof queueMicrotask<"u"?queueMicrotask.bind(B):typeof process<"u"&&process.nextTick||Ge,a={isArray:j,isArrayBuffer:ze,isBuffer:Rt,isFormData:Pt,isArrayBufferView:St,isString:Tt,isNumber:Je,isBoolean:Ot,isObject:Y,isPlainObject:$,isReadableStream:Lt,isRequest:Bt,isResponse:Dt,isHeaders:Ut,isUndefined:I,isDate:At,isFile:xt,isBlob:_t,isRegExp:Kt,isFunction:A,isStream:Nt,isURLSearchParams:Ft,isTypedArray:zt,isFileList:Ct,forEach:H,merge:ce,extend:jt,trim:kt,stripBOM:qt,inherits:vt,toFlatObject:It,kindOf:Q,kindOfTest:C,endsWith:Ht,toArray:Mt,forEachEntry:Jt,matchAll:Vt,isHTMLForm:$t,hasOwnProperty:_e,hasOwnProp:_e,reduceDescriptors:We,freezeMethods:Gt,toObjectSet:Xt,toCamelCase:Wt,noop:Qt,toFiniteNumber:Zt,findKey:Ve,global:B,isContextDefined:$e,ALPHABET:Ke,generateString:Yt,isSpecCompliantForm:en,toJSONObject:tn,isAsyncFn:nn,isThenable:rn,setImmediate:Ge,asap:sn};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const Xe=m.prototype,Qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Qe[e]={value:e}});Object.defineProperties(m,Qe);Object.defineProperty(Xe,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Xe);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const on=null;function ue(e){return a.isPlainObject(e)||a.isArray(e)}function Ze(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ne(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ze(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function an(e){return a.isArray(e)&&!e.some(ue)}const cn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ee(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,d){return!a.isUndefined(d[y])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(a.isDate(h))return h.toISOString();if(!f&&a.isBlob(h))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(h)||a.isTypedArray(h)?f&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function l(h,y,d){let S=h;if(h&&!d&&typeof h=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),h=JSON.stringify(h);else if(a.isArray(h)&&an(h)||(a.isFileList(h)||a.endsWith(y,"[]"))&&(S=a.toArray(h)))return y=Ze(y),S.forEach(function(b,R){!(a.isUndefined(b)||b===null)&&t.append(i===!0?Ne([y],R,o):i===null?y:y+"[]",u(b))}),!1}return ue(h)?!0:(t.append(Ne(d,y,o),u(h)),!1)}const p=[],w=Object.assign(cn,{defaultVisitor:l,convertValue:u,isVisitable:ue});function E(h,y){if(!a.isUndefined(h)){if(p.indexOf(h)!==-1)throw Error("Circular reference detected in "+y.join("."));p.push(h),a.forEach(h,function(S,O){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(O)?O.trim():O,y,w))===!0&&E(S,y?y.concat(O):[O])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function Pe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function we(e,t){this._pairs=[],e&&ee(e,this,t)}const Ye=we.prototype;Ye.append=function(t,n){this._pairs.push([t,n])};Ye.toString=function(t){const n=t?function(r){return t.call(this,r,Pe)}:Pe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function un(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function et(e,t,n){if(!t)return e;const r=n&&n.encode||un,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new we(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Fe{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const tt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ln=typeof URLSearchParams<"u"?URLSearchParams:we,fn=typeof FormData<"u"?FormData:null,dn=typeof Blob<"u"?Blob:null,pn={isBrowser:!0,classes:{URLSearchParams:ln,FormData:fn,Blob:dn},protocols:["http","https","file","blob","url","data"]},be=typeof window<"u"&&typeof document<"u",le=typeof navigator=="object"&&navigator||void 0,hn=be&&(!le||["ReactNative","NativeScript","NS"].indexOf(le.product)<0),mn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",yn=be&&window.location.href||"http://localhost",wn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:be,hasStandardBrowserEnv:hn,hasStandardBrowserWebWorkerEnv:mn,navigator:le,origin:yn},Symbol.toStringTag,{value:"Module"})),x={...wn,...pn};function bn(e,t){return ee(e,new x.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return x.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function En(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function gn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function nt(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=gn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(En(r),s,n,0)}),n}return null}function Rn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const M={transitional:tt,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(nt(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return bn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return ee(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Rn(t)):t}],transformResponse:[function(t){const n=this.transitional||M.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x.classes.FormData,Blob:x.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{M.headers[e]={}});const Sn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Tn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Sn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Le=Symbol("internals");function v(e){return e&&String(e).trim().toLowerCase()}function W(e){return e===!1||e==null?e:a.isArray(e)?e.map(W):String(e)}function On(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const An=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function oe(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function xn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function _n(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class T{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,u){const l=v(f);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||f]=W(c))}const i=(c,f)=>a.forEach(c,(u,l)=>o(u,l,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!An(t))i(Tn(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=v(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return On(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=v(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||oe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=v(i),i){const c=a.findKey(r,i);c&&(!n||oe(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||oe(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=W(s),delete n[o];return}const c=t?xn(o):String(o).trim();c!==o&&delete n[o],n[c]=W(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Le]=this[Le]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=v(i);r[c]||(_n(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}T.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(T.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(T);function ie(e,t){const n=this||M,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function rt(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,m,{__CANCEL__:!0});function st(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Cn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Nn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),l=r[o];i||(i=u),n[s]=f,r[s]=u;let p=o,w=0;for(;p!==s;)w+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const E=l&&u-l;return E?Math.round(w*1e3/E):void 0}}function Pn(e,t){let n=0,r=1e3/t,s,o;const i=(u,l=Date.now())=>{n=l,s=null,o&&(clearTimeout(o),o=null),e.apply(null,u)};return[(...u)=>{const l=Date.now(),p=l-n;p>=r?i(u,l):(s=u,o||(o=setTimeout(()=>{o=null,i(s)},r-p)))},()=>s&&i(s)]}const G=(e,t,n=3)=>{let r=0;const s=Nn(50,250);return Pn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,u=s(f),l=i<=c;r=i;const p={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:u||void 0,estimated:u&&c&&l?(c-i)/u:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(p)},n)},Be=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},De=e=>(...t)=>a.asap(()=>e(...t)),Fn=x.hasStandardBrowserEnv?function(){const t=x.navigator&&/(msie|trident)/i.test(x.navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),Ln=x.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Bn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Dn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ot(e,t){return e&&!Bn(t)?Dn(e,t):t}const Ue=e=>e instanceof T?{...e}:e;function U(e,t){t=t||{};const n={};function r(u,l,p){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:p},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,p){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,p)}else return r(u,l,p)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,p){if(p in t)return r(u,l);if(p in e)return r(void 0,u)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s(Ue(u),Ue(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=f[l]||s,w=p(e[l],t[l],l);a.isUndefined(w)&&p!==c||(n[l]=w)}),n}const it=e=>{const t=U({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=T.from(i),t.url=et(ot(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(x.hasStandardBrowserEnv||x.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[u,...l]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...l].join("; "))}}if(x.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Fn(t.url))){const u=s&&o&&Ln.read(o);u&&i.set(s,u)}return t},Un=typeof XMLHttpRequest<"u",kn=Un&&function(e){return new Promise(function(n,r){const s=it(e);let o=s.data;const i=T.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:u}=s,l,p,w,E,h;function y(){E&&E(),h&&h(),s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}let d=new XMLHttpRequest;d.open(s.method.toUpperCase(),s.url,!0),d.timeout=s.timeout;function S(){if(!d)return;const b=T.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),N={data:!c||c==="text"||c==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:b,config:e,request:d};st(function(_){n(_),y()},function(_){r(_),y()},N),d=null}"onloadend"in d?d.onloadend=S:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(S)},d.onabort=function(){d&&(r(new m("Request aborted",m.ECONNABORTED,e,d)),d=null)},d.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let R=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const N=s.transitional||tt;s.timeoutErrorMessage&&(R=s.timeoutErrorMessage),r(new m(R,N.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,d)),d=null},o===void 0&&i.setContentType(null),"setRequestHeader"in d&&a.forEach(i.toJSON(),function(R,N){d.setRequestHeader(N,R)}),a.isUndefined(s.withCredentials)||(d.withCredentials=!!s.withCredentials),c&&c!=="json"&&(d.responseType=s.responseType),u&&([w,h]=G(u,!0),d.addEventListener("progress",w)),f&&d.upload&&([p,E]=G(f),d.upload.addEventListener("progress",p),d.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(l=b=>{d&&(r(!b||b.type?new q(null,e,d):b),d.abort(),d=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l)));const O=Cn(s.url);if(O&&x.protocols.indexOf(O)===-1){r(new m("Unsupported protocol "+O+":",m.ERR_BAD_REQUEST,e));return}d.send(o||null)})},jn=(e,t)=>{let n=new AbortController,r;const s=function(f){if(!r){r=!0,i();const u=f instanceof Error?f:this.reason;n.abort(u instanceof m?u:new q(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{s(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},qn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},vn=async function*(e,t,n){for await(const r of e)yield*qn(ArrayBuffer.isView(r)?r:await n(String(r)),t)},ke=(e,t,n,r,s)=>{const o=vn(e,t,s);let i=0,c,f=u=>{c||(c=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:l,value:p}=await o.next();if(l){f(),u.close();return}let w=p.byteLength;if(n){let E=i+=w;n(E)}u.enqueue(new Uint8Array(p))}catch(l){throw f(l),l}},cancel(u){return f(u),o.return()}},{highWaterMark:2})},te=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",at=te&&typeof ReadableStream=="function",fe=te&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),ct=(e,...t)=>{try{return!!e(...t)}catch{return!1}},In=at&&ct(()=>{let e=!1;const t=new Request(x.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),je=64*1024,de=at&&ct(()=>a.isReadableStream(new Response("").body)),X={stream:de&&(e=>e.body)};te&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!X[t]&&(X[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const Hn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await fe(e)).byteLength},Mn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??Hn(t)},zn=te&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:u,headers:l,withCredentials:p="same-origin",fetchOptions:w}=it(e);u=u?(u+"").toLowerCase():"text";let[E,h]=s||o||i?jn([s,o],i):[],y,d;const S=()=>{!y&&setTimeout(()=>{E&&E.unsubscribe()}),y=!0};let O;try{if(f&&In&&n!=="get"&&n!=="head"&&(O=await Mn(l,r))!==0){let _=new Request(t,{method:"POST",body:r,duplex:"half"}),k;if(a.isFormData(r)&&(k=_.headers.get("content-type"))&&l.setContentType(k),_.body){const[re,z]=Be(O,G(De(f)));r=ke(_.body,je,re,z,fe)}}a.isString(p)||(p=p?"include":"omit");const b="credentials"in Request.prototype;d=new Request(t,{...w,signal:E,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:b?p:void 0});let R=await fetch(d);const N=de&&(u==="stream"||u==="response");if(de&&(c||N)){const _={};["status","statusText","headers"].forEach(Re=>{_[Re]=R[Re]});const k=a.toFiniteNumber(R.headers.get("content-length")),[re,z]=c&&Be(k,G(De(c),!0))||[];R=new Response(ke(R.body,je,re,()=>{z&&z(),N&&S()},fe),_)}u=u||"text";let ne=await X[a.findKey(X,u)||"text"](R,e);return!N&&S(),h&&h(),await new Promise((_,k)=>{st(_,k,{data:ne,headers:T.from(R.headers),status:R.status,statusText:R.statusText,config:e,request:d})})}catch(b){throw S(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,d),{cause:b.cause||b}):m.from(b,b&&b.code,e,d)}}),pe={http:on,xhr:kn,fetch:zn};a.forEach(pe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const qe=e=>`- ${e}`,Jn=e=>a.isFunction(e)||e===null||e===!1,ut={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Jn(n)&&(r=pe[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(qe).join(`
`):" "+qe(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:pe};function ae(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function ve(e){return ae(e),e.headers=T.from(e.headers),e.data=ie.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ut.getAdapter(e.adapter||M.adapter)(e).then(function(r){return ae(e),r.data=ie.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return rt(r)||(ae(e),r&&r.response&&(r.response.data=ie.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const lt="1.7.5",Ee={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ee[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ie={};Ee.transitional=function(t,n,r){function s(o,i){return"[Axios v"+lt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ie[i]&&(Ie[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Vn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const he={assertOptions:Vn,validators:Ee},P=he.validators;class D{constructor(t){this.defaults=t,this.interceptors={request:new Fe,response:new Fe}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=U(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&he.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:he.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],h=>{delete o[h]}),n.headers=T.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let l,p=0,w;if(!f){const h=[ve.bind(this),void 0];for(h.unshift.apply(h,c),h.push.apply(h,u),w=h.length,l=Promise.resolve(n);p<w;)l=l.then(h[p++],h[p++]);return l}w=c.length;let E=n;for(p=0;p<w;){const h=c[p++],y=c[p++];try{E=h(E)}catch(d){y.call(this,d);break}}try{l=ve.call(this,E)}catch(h){return Promise.reject(h)}for(p=0,w=u.length;p<w;)l=l.then(u[p++],u[p++]);return l}getUri(t){t=U(this.defaults,t);const n=ot(t.baseURL,t.url);return et(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(n,r){return this.request(U(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(U(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}D.prototype[t]=n(),D.prototype[t+"Form"]=n(!0)});class ge{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new q(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ge(function(s){t=s}),cancel:t}}}function $n(e){return function(n){return e.apply(null,n)}}function Wn(e){return a.isObject(e)&&e.isAxiosError===!0}const me={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(me).forEach(([e,t])=>{me[t]=e});function ft(e){const t=new D(e),n=Me(D.prototype.request,t);return a.extend(n,D.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ft(U(e,s))},n}const g=ft(M);g.Axios=D;g.CanceledError=q;g.CancelToken=ge;g.isCancel=rt;g.VERSION=lt;g.toFormData=ee;g.AxiosError=m;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=$n;g.isAxiosError=Wn;g.mergeConfig=U;g.AxiosHeaders=T;g.formToJSON=e=>nt(a.isHTMLForm(e)?new FormData(e):e);g.getAdapter=ut.getAdapter;g.HttpStatusCode=me;g.default=g;g.defaults.timeout=3e4;g.defaults.baseURL="https://v1.jinrishici.com";g.defaults.headers.post["Content-Type"]="application/json";g.interceptors.request.use(e=>e,e=>Promise.reject(e));g.interceptors.response.use(e=>e.data?e:Promise.reject(e.data),e=>Promise.reject(e));function Kn(e,t={}){return new Promise((n,r)=>{g.get(e,{params:t}).then(s=>{n(s.data)}).catch(s=>{r(s)})})}const Gn={__name:"Home",setup(e){const t=K([]),n=K(4);return(()=>{for(let s=0;s<n.value;s++)Kn("/all.json").then(o=>{t.value.push({content:(o==null?void 0:o.content)||""})}).catch(()=>{}).finally(()=>{})})(),(s,o)=>(F(),L("div",null,[pt(Et,{class:"carousel",list:t.value,speed:2e3},null,8,["list"])]))}},Qn=He(Gn,[["__scopeId","data-v-2e36b14e"]]);export{Qn as default};