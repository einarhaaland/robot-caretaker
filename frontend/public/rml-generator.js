"use strict";var RML=(()=>{var Za=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var E=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Nn=E((Wo,tl)=>{(function(t,e){if(typeof Wo=="object"&&typeof tl=="object")tl.exports=e();else if(typeof define=="function"&&define.amd)define([],e);else{var r=e();for(var n in r)(typeof Wo=="object"?Wo:t)[n]=r[n]}})(Wo,()=>(()=>{"use strict";var t={470:i=>{function o(u){if(typeof u!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(u))}function a(u,c){for(var l,f="",y=0,_=-1,h=0,A=0;A<=u.length;++A){if(A<u.length)l=u.charCodeAt(A);else{if(l===47)break;l=47}if(l===47){if(!(_===A-1||h===1))if(_!==A-1&&h===2){if(f.length<2||y!==2||f.charCodeAt(f.length-1)!==46||f.charCodeAt(f.length-2)!==46){if(f.length>2){var w=f.lastIndexOf("/");if(w!==f.length-1){w===-1?(f="",y=0):y=(f=f.slice(0,w)).length-1-f.lastIndexOf("/"),_=A,h=0;continue}}else if(f.length===2||f.length===1){f="",y=0,_=A,h=0;continue}}c&&(f.length>0?f+="/..":f="..",y=2)}else f.length>0?f+="/"+u.slice(_+1,A):f=u.slice(_+1,A),y=A-_-1;_=A,h=0}else l===46&&h!==-1?++h:h=-1}return f}var s={resolve:function(){for(var u,c="",l=!1,f=arguments.length-1;f>=-1&&!l;f--){var y;f>=0?y=arguments[f]:(u===void 0&&(u=process.cwd()),y=u),o(y),y.length!==0&&(c=y+"/"+c,l=y.charCodeAt(0)===47)}return c=a(c,!l),l?c.length>0?"/"+c:"/":c.length>0?c:"."},normalize:function(u){if(o(u),u.length===0)return".";var c=u.charCodeAt(0)===47,l=u.charCodeAt(u.length-1)===47;return(u=a(u,!c)).length!==0||c||(u="."),u.length>0&&l&&(u+="/"),c?"/"+u:u},isAbsolute:function(u){return o(u),u.length>0&&u.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var u,c=0;c<arguments.length;++c){var l=arguments[c];o(l),l.length>0&&(u===void 0?u=l:u+="/"+l)}return u===void 0?".":s.normalize(u)},relative:function(u,c){if(o(u),o(c),u===c||(u=s.resolve(u))===(c=s.resolve(c)))return"";for(var l=1;l<u.length&&u.charCodeAt(l)===47;++l);for(var f=u.length,y=f-l,_=1;_<c.length&&c.charCodeAt(_)===47;++_);for(var h=c.length-_,A=y<h?y:h,w=-1,k=0;k<=A;++k){if(k===A){if(h>A){if(c.charCodeAt(_+k)===47)return c.slice(_+k+1);if(k===0)return c.slice(_+k)}else y>A&&(u.charCodeAt(l+k)===47?w=k:k===0&&(w=0));break}var R=u.charCodeAt(l+k);if(R!==c.charCodeAt(_+k))break;R===47&&(w=k)}var T="";for(k=l+w+1;k<=f;++k)k!==f&&u.charCodeAt(k)!==47||(T.length===0?T+="..":T+="/..");return T.length>0?T+c.slice(_+w):(_+=w,c.charCodeAt(_)===47&&++_,c.slice(_))},_makeLong:function(u){return u},dirname:function(u){if(o(u),u.length===0)return".";for(var c=u.charCodeAt(0),l=c===47,f=-1,y=!0,_=u.length-1;_>=1;--_)if((c=u.charCodeAt(_))===47){if(!y){f=_;break}}else y=!1;return f===-1?l?"/":".":l&&f===1?"//":u.slice(0,f)},basename:function(u,c){if(c!==void 0&&typeof c!="string")throw new TypeError('"ext" argument must be a string');o(u);var l,f=0,y=-1,_=!0;if(c!==void 0&&c.length>0&&c.length<=u.length){if(c.length===u.length&&c===u)return"";var h=c.length-1,A=-1;for(l=u.length-1;l>=0;--l){var w=u.charCodeAt(l);if(w===47){if(!_){f=l+1;break}}else A===-1&&(_=!1,A=l+1),h>=0&&(w===c.charCodeAt(h)?--h==-1&&(y=l):(h=-1,y=A))}return f===y?y=A:y===-1&&(y=u.length),u.slice(f,y)}for(l=u.length-1;l>=0;--l)if(u.charCodeAt(l)===47){if(!_){f=l+1;break}}else y===-1&&(_=!1,y=l+1);return y===-1?"":u.slice(f,y)},extname:function(u){o(u);for(var c=-1,l=0,f=-1,y=!0,_=0,h=u.length-1;h>=0;--h){var A=u.charCodeAt(h);if(A!==47)f===-1&&(y=!1,f=h+1),A===46?c===-1?c=h:_!==1&&(_=1):c!==-1&&(_=-1);else if(!y){l=h+1;break}}return c===-1||f===-1||_===0||_===1&&c===f-1&&c===l+1?"":u.slice(c,f)},format:function(u){if(u===null||typeof u!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof u);return function(c,l){var f=l.dir||l.root,y=l.base||(l.name||"")+(l.ext||"");return f?f===l.root?f+y:f+"/"+y:y}(0,u)},parse:function(u){o(u);var c={root:"",dir:"",base:"",ext:"",name:""};if(u.length===0)return c;var l,f=u.charCodeAt(0),y=f===47;y?(c.root="/",l=1):l=0;for(var _=-1,h=0,A=-1,w=!0,k=u.length-1,R=0;k>=l;--k)if((f=u.charCodeAt(k))!==47)A===-1&&(w=!1,A=k+1),f===46?_===-1?_=k:R!==1&&(R=1):_!==-1&&(R=-1);else if(!w){h=k+1;break}return _===-1||A===-1||R===0||R===1&&_===A-1&&_===h+1?A!==-1&&(c.base=c.name=h===0&&y?u.slice(1,A):u.slice(h,A)):(h===0&&y?(c.name=u.slice(1,_),c.base=u.slice(1,A)):(c.name=u.slice(h,_),c.base=u.slice(h,A)),c.ext=u.slice(_,A)),h>0?c.dir=u.slice(0,h-1):y&&(c.dir="/"),c},sep:"/",delimiter:":",win32:null,posix:null};s.posix=s,i.exports=s},674:(i,o)=>{if(Object.defineProperty(o,"__esModule",{value:!0}),o.isWindows=void 0,typeof process=="object")o.isWindows=process.platform==="win32";else if(typeof navigator=="object"){var a=navigator.userAgent;o.isWindows=a.indexOf("Windows")>=0}},796:function(i,o,a){var s,u,c=this&&this.__extends||(s=function($,L){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(q,K){q.__proto__=K}||function(q,K){for(var he in K)Object.prototype.hasOwnProperty.call(K,he)&&(q[he]=K[he])},s($,L)},function($,L){if(typeof L!="function"&&L!==null)throw new TypeError("Class extends value "+String(L)+" is not a constructor or null");function q(){this.constructor=$}s($,L),$.prototype=L===null?Object.create(L):(q.prototype=L.prototype,new q)});Object.defineProperty(o,"__esModule",{value:!0}),o.uriToFsPath=o.URI=void 0;var l=a(674),f=/^\w[\w\d+.-]*$/,y=/^\//,_=/^\/\//,h="",A="/",w=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,k=function(){function $(L,q,K,he,ee,ie){ie===void 0&&(ie=!1),typeof L=="object"?(this.scheme=L.scheme||h,this.authority=L.authority||h,this.path=L.path||h,this.query=L.query||h,this.fragment=L.fragment||h):(this.scheme=function(Ce,Ge){return Ce||Ge?Ce:"file"}(L,ie),this.authority=q||h,this.path=function(Ce,Ge){switch(Ce){case"https":case"http":case"file":Ge?Ge[0]!==A&&(Ge=A+Ge):Ge=A}return Ge}(this.scheme,K||h),this.query=he||h,this.fragment=ee||h,function(Ce,Ge){if(!Ce.scheme&&Ge)throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "'.concat(Ce.authority,'", path: "').concat(Ce.path,'", query: "').concat(Ce.query,'", fragment: "').concat(Ce.fragment,'"}'));if(Ce.scheme&&!f.test(Ce.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(Ce.path){if(Ce.authority){if(!y.test(Ce.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(_.test(Ce.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}(this,ie))}return $.isUri=function(L){return L instanceof $||!!L&&typeof L.authority=="string"&&typeof L.fragment=="string"&&typeof L.path=="string"&&typeof L.query=="string"&&typeof L.scheme=="string"&&typeof L.fsPath=="string"&&typeof L.with=="function"&&typeof L.toString=="function"},Object.defineProperty($.prototype,"fsPath",{get:function(){return G(this,!1)},enumerable:!1,configurable:!0}),$.prototype.with=function(L){if(!L)return this;var q=L.scheme,K=L.authority,he=L.path,ee=L.query,ie=L.fragment;return q===void 0?q=this.scheme:q===null&&(q=h),K===void 0?K=this.authority:K===null&&(K=h),he===void 0?he=this.path:he===null&&(he=h),ee===void 0?ee=this.query:ee===null&&(ee=h),ie===void 0?ie=this.fragment:ie===null&&(ie=h),q===this.scheme&&K===this.authority&&he===this.path&&ee===this.query&&ie===this.fragment?this:new T(q,K,he,ee,ie)},$.parse=function(L,q){q===void 0&&(q=!1);var K=w.exec(L);return K?new T(K[2]||h,je(K[4]||h),je(K[5]||h),je(K[7]||h),je(K[9]||h),q):new T(h,h,h,h,h)},$.file=function(L){var q=h;if(l.isWindows&&(L=L.replace(/\\/g,A)),L[0]===A&&L[1]===A){var K=L.indexOf(A,2);K===-1?(q=L.substring(2),L=A):(q=L.substring(2,K),L=L.substring(K)||A)}return new T("file",q,L,h,h)},$.from=function(L){return new T(L.scheme,L.authority,L.path,L.query,L.fragment)},$.prototype.toString=function(L){return L===void 0&&(L=!1),ve(this,L)},$.prototype.toJSON=function(){return this},$.revive=function(L){if(L){if(L instanceof $)return L;var q=new T(L);return q._formatted=L.external,q._fsPath=L._sep===R?L.fsPath:null,q}return L},$}();o.URI=k;var R=l.isWindows?1:void 0,T=function($){function L(){var q=$!==null&&$.apply(this,arguments)||this;return q._formatted=null,q._fsPath=null,q}return c(L,$),Object.defineProperty(L.prototype,"fsPath",{get:function(){return this._fsPath||(this._fsPath=G(this,!1)),this._fsPath},enumerable:!1,configurable:!0}),L.prototype.toString=function(q){return q===void 0&&(q=!1),q?ve(this,!0):(this._formatted||(this._formatted=ve(this,!1)),this._formatted)},L.prototype.toJSON=function(){var q={$mid:1};return this._fsPath&&(q.fsPath=this._fsPath,q._sep=R),this._formatted&&(q.external=this._formatted),this.path&&(q.path=this.path),this.scheme&&(q.scheme=this.scheme),this.authority&&(q.authority=this.authority),this.query&&(q.query=this.query),this.fragment&&(q.fragment=this.fragment),q},L}(k),D=((u={})[58]="%3A",u[47]="%2F",u[63]="%3F",u[35]="%23",u[91]="%5B",u[93]="%5D",u[64]="%40",u[33]="%21",u[36]="%24",u[38]="%26",u[39]="%27",u[40]="%28",u[41]="%29",u[42]="%2A",u[43]="%2B",u[44]="%2C",u[59]="%3B",u[61]="%3D",u[32]="%20",u);function B($,L){for(var q=void 0,K=-1,he=0;he<$.length;he++){var ee=$.charCodeAt(he);if(ee>=97&&ee<=122||ee>=65&&ee<=90||ee>=48&&ee<=57||ee===45||ee===46||ee===95||ee===126||L&&ee===47)K!==-1&&(q+=encodeURIComponent($.substring(K,he)),K=-1),q!==void 0&&(q+=$.charAt(he));else{q===void 0&&(q=$.substr(0,he));var ie=D[ee];ie!==void 0?(K!==-1&&(q+=encodeURIComponent($.substring(K,he)),K=-1),q+=ie):K===-1&&(K=he)}}return K!==-1&&(q+=encodeURIComponent($.substring(K))),q!==void 0?q:$}function V($){for(var L=void 0,q=0;q<$.length;q++){var K=$.charCodeAt(q);K===35||K===63?(L===void 0&&(L=$.substr(0,q)),L+=D[K]):L!==void 0&&(L+=$[q])}return L!==void 0?L:$}function G($,L){var q;return q=$.authority&&$.path.length>1&&$.scheme==="file"?"//".concat($.authority).concat($.path):$.path.charCodeAt(0)===47&&($.path.charCodeAt(1)>=65&&$.path.charCodeAt(1)<=90||$.path.charCodeAt(1)>=97&&$.path.charCodeAt(1)<=122)&&$.path.charCodeAt(2)===58?L?$.path.substr(1):$.path[1].toLowerCase()+$.path.substr(2):$.path,l.isWindows&&(q=q.replace(/\//g,"\\")),q}function ve($,L){var q=L?V:B,K="",he=$.scheme,ee=$.authority,ie=$.path,Ce=$.query,Ge=$.fragment;if(he&&(K+=he,K+=":"),(ee||he==="file")&&(K+=A,K+=A),ee){var dt=ee.indexOf("@");if(dt!==-1){var or=ee.substr(0,dt);ee=ee.substr(dt+1),(dt=or.indexOf(":"))===-1?K+=q(or,!1):(K+=q(or.substr(0,dt),!1),K+=":",K+=q(or.substr(dt+1),!1)),K+="@"}(dt=(ee=ee.toLowerCase()).indexOf(":"))===-1?K+=q(ee,!1):(K+=q(ee.substr(0,dt),!1),K+=ee.substr(dt))}if(ie){if(ie.length>=3&&ie.charCodeAt(0)===47&&ie.charCodeAt(2)===58)(pr=ie.charCodeAt(1))>=65&&pr<=90&&(ie="/".concat(String.fromCharCode(pr+32),":").concat(ie.substr(3)));else if(ie.length>=2&&ie.charCodeAt(1)===58){var pr;(pr=ie.charCodeAt(0))>=65&&pr<=90&&(ie="".concat(String.fromCharCode(pr+32),":").concat(ie.substr(2)))}K+=q(ie,!0)}return Ce&&(K+="?",K+=q(Ce,!1)),Ge&&(K+="#",K+=L?Ge:B(Ge,!1)),K}function Fe($){try{return decodeURIComponent($)}catch{return $.length>3?$.substr(0,3)+Fe($.substr(3)):$}}o.uriToFsPath=G;var Qe=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function je($){return $.match(Qe)?$.replace(Qe,function(L){return Fe(L)}):$}},679:function(i,o,a){var s=this&&this.__spreadArray||function(y,_,h){if(h||arguments.length===2)for(var A,w=0,k=_.length;w<k;w++)!A&&w in _||(A||(A=Array.prototype.slice.call(_,0,w)),A[w]=_[w]);return y.concat(A||Array.prototype.slice.call(_))};Object.defineProperty(o,"__esModule",{value:!0}),o.Utils=void 0;var u,c=a(470),l=c.posix||c,f="/";(u=o.Utils||(o.Utils={})).joinPath=function(y){for(var _=[],h=1;h<arguments.length;h++)_[h-1]=arguments[h];return y.with({path:l.join.apply(l,s([y.path],_,!1))})},u.resolvePath=function(y){for(var _=[],h=1;h<arguments.length;h++)_[h-1]=arguments[h];var A=y.path,w=!1;A[0]!==f&&(A=f+A,w=!0);var k=l.resolve.apply(l,s([A],_,!1));return w&&k[0]===f&&!y.authority&&(k=k.substring(1)),y.with({path:k})},u.dirname=function(y){if(y.path.length===0||y.path===f)return y;var _=l.dirname(y.path);return _.length===1&&_.charCodeAt(0)===46&&(_=""),y.with({path:_})},u.basename=function(y){return l.basename(y.path)},u.extname=function(y){return l.extname(y.path)}}},e={};function r(i){var o=e[i];if(o!==void 0)return o.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,r),a.exports}var n={};return(()=>{var i=n;Object.defineProperty(i,"__esModule",{value:!0}),i.Utils=i.URI=void 0;var o=r(796);Object.defineProperty(i,"URI",{enumerable:!0,get:function(){return o.URI}});var a=r(679);Object.defineProperty(i,"Utils",{enumerable:!0,get:function(){return a.Utils}})})(),n})())});var Sn=E(il=>{"use strict";Object.defineProperty(il,"__esModule",{value:!0});var rl;function nl(){if(rl===void 0)throw new Error("No runtime abstraction layer installed");return rl}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");rl=r}t.install=e})(nl||(nl={}));il.default=nl});var ol=E(Ko=>{"use strict";Object.defineProperty(Ko,"__esModule",{value:!0});Ko.Disposable=void 0;var d0;(function(t){function e(r){return{dispose:r}}t.create=e})(d0=Ko.Disposable||(Ko.Disposable={}))});var Ti=E(vi=>{"use strict";Object.defineProperty(vi,"__esModule",{value:!0});vi.Emitter=vi.Event=void 0;var f0=Sn(),p0;(function(t){let e={dispose(){}};t.None=function(){return e}})(p0=vi.Event||(vi.Event={}));var al=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,a=n.length;o<a;o++)try{r.push(n[o].apply(i[o],e))}catch(s){(0,f0.default)().console.error(s)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},Wi=class{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new al),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{!this._callbacks||(this._callbacks.remove(e,r),i.dispose=Wi._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};vi.Emitter=Wi;Wi._noop=function(){}});var cm=E(es=>{"use strict";Object.defineProperty(es,"__esModule",{value:!0});es.AbstractMessageBuffer=void 0;var h0=13,m0=10,g0=`\r
`,sl=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(){if(this._chunks.length===0)return;let e=0,r=0,n=0,i=0;e:for(;r<this._chunks.length;){let u=this._chunks[r];n=0;t:for(;n<u.length;){switch(u[n]){case h0:switch(e){case 0:e=1;break;case 2:e=3;break;default:e=0}break;case m0:switch(e){case 1:e=2;break;case 3:e=4,n++;break e;default:e=0}break;default:e=0}n++}i+=u.byteLength,r++}if(e!==4)return;let o=this._read(i+n),a=new Map,s=this.toString(o,"ascii").split(g0);if(s.length<2)return a;for(let u=0;u<s.length-2;u++){let c=s[u],l=c.indexOf(":");if(l===-1)throw new Error("Message header must separate key and value using :");let f=c.substr(0,l),y=c.substr(l+1).trim();a.set(f,y)}return a}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let o=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(o)}if(this._chunks[0].byteLength>e){let o=this._chunks[0],a=this.asNative(o,e);return this._chunks[0]=o.slice(e),this._totalLength-=e,a}let r=this.allocNative(e),n=0,i=0;for(;e>0;){let o=this._chunks[i];if(o.byteLength>e){let a=o.slice(0,e);r.set(a,n),n+=e,this._chunks[i]=o.slice(e),this._totalLength-=e,e-=e}else r.set(o,n),n+=o.byteLength,this._chunks.shift(),this._totalLength-=o.byteLength,e-=o.byteLength}return r}};es.AbstractMessageBuffer=sl});var fm=E(dl=>{"use strict";Object.defineProperty(dl,"__esModule",{value:!0});var lm=Sn(),Ki=ol(),y0=Ti(),v0=cm(),Bi=class extends v0.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return Bi.emptyBuffer}fromString(e,r){return new TextEncoder().encode(e)}toString(e,r){return r==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e:e.slice(0,r)}allocNative(e){return new Uint8Array(e)}};Bi.emptyBuffer=new Uint8Array(0);var ul=class{constructor(e){this.socket=e,this._onData=new y0.Emitter,this._messageListener=r=>{r.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,lm.default)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),Ki.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Ki.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Ki.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}},cl=class{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),Ki.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Ki.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Ki.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,r){if(typeof e=="string"){if(r!==void 0&&r!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${r}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}},T0=new TextEncoder,dm=Object.freeze({messageBuffer:Object.freeze({create:t=>new Bi(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(T0.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new ul(t),asWritableStream:t=>new cl(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function ll(){return dm}(function(t){function e(){lm.default.install(dm)}t.install=e})(ll||(ll={}));dl.default=ll});var zi=E(Ut=>{"use strict";Object.defineProperty(Ut,"__esModule",{value:!0});Ut.stringArray=Ut.array=Ut.func=Ut.error=Ut.number=Ut.string=Ut.boolean=void 0;function _0(t){return t===!0||t===!1}Ut.boolean=_0;function pm(t){return typeof t=="string"||t instanceof String}Ut.string=pm;function R0(t){return typeof t=="number"||t instanceof Number}Ut.number=R0;function A0(t){return t instanceof Error}Ut.error=A0;function C0(t){return typeof t=="function"}Ut.func=C0;function hm(t){return Array.isArray(t)}Ut.array=hm;function b0(t){return hm(t)&&t.every(e=>pm(e))}Ut.stringArray=b0});var Il=E(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.Message=Y.NotificationType9=Y.NotificationType8=Y.NotificationType7=Y.NotificationType6=Y.NotificationType5=Y.NotificationType4=Y.NotificationType3=Y.NotificationType2=Y.NotificationType1=Y.NotificationType0=Y.NotificationType=Y.RequestType9=Y.RequestType8=Y.RequestType7=Y.RequestType6=Y.RequestType5=Y.RequestType4=Y.RequestType3=Y.RequestType2=Y.RequestType1=Y.RequestType=Y.RequestType0=Y.AbstractMessageSignature=Y.ParameterStructures=Y.ResponseError=Y.ErrorCodes=void 0;var _i=zi(),mm;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(mm=Y.ErrorCodes||(Y.ErrorCodes={}));var Bo=class extends Error{constructor(e,r,n){super(r),this.code=_i.number(e)?e:mm.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,Bo.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};Y.ResponseError=Bo;var Nt=class{constructor(e){this.kind=e}static is(e){return e===Nt.auto||e===Nt.byName||e===Nt.byPosition}toString(){return this.kind}};Y.ParameterStructures=Nt;Nt.auto=new Nt("auto");Nt.byPosition=new Nt("byPosition");Nt.byName=new Nt("byName");var Xe=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return Nt.auto}};Y.AbstractMessageSignature=Xe;var fl=class extends Xe{constructor(e){super(e,0)}};Y.RequestType0=fl;var pl=class extends Xe{constructor(e,r=Nt.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Y.RequestType=pl;var hl=class extends Xe{constructor(e,r=Nt.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Y.RequestType1=hl;var ml=class extends Xe{constructor(e){super(e,2)}};Y.RequestType2=ml;var gl=class extends Xe{constructor(e){super(e,3)}};Y.RequestType3=gl;var yl=class extends Xe{constructor(e){super(e,4)}};Y.RequestType4=yl;var vl=class extends Xe{constructor(e){super(e,5)}};Y.RequestType5=vl;var Tl=class extends Xe{constructor(e){super(e,6)}};Y.RequestType6=Tl;var _l=class extends Xe{constructor(e){super(e,7)}};Y.RequestType7=_l;var Rl=class extends Xe{constructor(e){super(e,8)}};Y.RequestType8=Rl;var Al=class extends Xe{constructor(e){super(e,9)}};Y.RequestType9=Al;var Cl=class extends Xe{constructor(e,r=Nt.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Y.NotificationType=Cl;var bl=class extends Xe{constructor(e){super(e,0)}};Y.NotificationType0=bl;var El=class extends Xe{constructor(e,r=Nt.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Y.NotificationType1=El;var Pl=class extends Xe{constructor(e){super(e,2)}};Y.NotificationType2=Pl;var kl=class extends Xe{constructor(e){super(e,3)}};Y.NotificationType3=kl;var Nl=class extends Xe{constructor(e){super(e,4)}};Y.NotificationType4=Nl;var Sl=class extends Xe{constructor(e){super(e,5)}};Y.NotificationType5=Sl;var wl=class extends Xe{constructor(e){super(e,6)}};Y.NotificationType6=wl;var Dl=class extends Xe{constructor(e){super(e,7)}};Y.NotificationType7=Dl;var Ol=class extends Xe{constructor(e){super(e,8)}};Y.NotificationType8=Ol;var xl=class extends Xe{constructor(e){super(e,9)}};Y.NotificationType9=xl;var E0;(function(t){function e(i){let o=i;return o&&_i.string(o.method)&&(_i.string(o.id)||_i.number(o.id))}t.isRequest=e;function r(i){let o=i;return o&&_i.string(o.method)&&i.id===void 0}t.isNotification=r;function n(i){let o=i;return o&&(o.result!==void 0||!!o.error)&&(_i.string(o.id)||_i.number(o.id)||o.id===null)}t.isResponse=n})(E0=Y.Message||(Y.Message={}))});var Ll=E(wn=>{"use strict";var gm;Object.defineProperty(wn,"__esModule",{value:!0});wn.LRUCache=wn.LinkedMap=wn.Touch=void 0;var Qt;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(Qt=wn.Touch||(wn.Touch={}));var ts=class{constructor(){this[gm]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(e){return this._map.has(e)}get(e,r=Qt.None){let n=this._map.get(e);if(!!n)return r!==Qt.None&&this.touch(n,r),n.value}set(e,r,n=Qt.None){let i=this._map.get(e);if(i)i.value=r,n!==Qt.None&&this.touch(i,n);else{switch(i={key:e,value:r,next:void 0,previous:void 0},n){case Qt.None:this.addItemLast(i);break;case Qt.First:this.addItemFirst(i);break;case Qt.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(!!r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,i=this._head;for(;i;){if(r?e.bind(r)(i.value,i.key,this):e(i.value,i.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.key,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.value,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:[r.key,r.value],done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}[(gm=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==Qt.First&&r!==Qt.Last)){if(r===Qt.First){if(e===this._head)return;let n=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(n.previous=i,i.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===Qt.Last){if(e===this._tail)return;let n=e.next,i=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=i,i.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};wn.LinkedMap=ts;var Ml=class extends ts{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=Qt.AsNew){return super.get(e,r)}peek(e){return super.get(e,Qt.None)}set(e,r){return super.set(e,r,Qt.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};wn.LRUCache=Ml});var jl=E(Ri=>{"use strict";Object.defineProperty(Ri,"__esModule",{value:!0});Ri.CancellationTokenSource=Ri.CancellationToken=void 0;var P0=Sn(),k0=zi(),$l=Ti(),ql;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:$l.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:$l.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||k0.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(ql=Ri.CancellationToken||(Ri.CancellationToken={}));var N0=Object.freeze(function(t,e){let r=(0,P0.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),rs=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?N0:(this._emitter||(this._emitter=new $l.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},Fl=class{get token(){return this._token||(this._token=new rs),this._token}cancel(){this._token?this._token.cancel():this._token=ql.Cancelled}dispose(){this._token?this._token instanceof rs&&this._token.dispose():this._token=ql.None}};Ri.CancellationTokenSource=Fl});var ym=E(Dn=>{"use strict";Object.defineProperty(Dn,"__esModule",{value:!0});Dn.ReadableStreamMessageReader=Dn.AbstractMessageReader=Dn.MessageReader=void 0;var Ul=Sn(),Vi=zi(),Gl=Ti(),S0;(function(t){function e(r){let n=r;return n&&Vi.func(n.listen)&&Vi.func(n.dispose)&&Vi.func(n.onError)&&Vi.func(n.onClose)&&Vi.func(n.onPartialMessage)}t.is=e})(S0=Dn.MessageReader||(Dn.MessageReader={}));var ns=class{constructor(){this.errorEmitter=new Gl.Emitter,this.closeEmitter=new Gl.Emitter,this.partialMessageEmitter=new Gl.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${Vi.string(e.message)?e.message:"unknown"}`)}};Dn.AbstractMessageReader=ns;var Hl;(function(t){function e(r){let n,i,o,a=new Map,s,u=new Map;if(r===void 0||typeof r=="string")n=r??"utf-8";else{if(n=r.charset??"utf-8",r.contentDecoder!==void 0&&(o=r.contentDecoder,a.set(o.name,o)),r.contentDecoders!==void 0)for(let c of r.contentDecoders)a.set(c.name,c);if(r.contentTypeDecoder!==void 0&&(s=r.contentTypeDecoder,u.set(s.name,s)),r.contentTypeDecoders!==void 0)for(let c of r.contentTypeDecoders)u.set(c.name,c)}return s===void 0&&(s=(0,Ul.default)().applicationJson.decoder,u.set(s.name,s)),{charset:n,contentDecoder:o,contentDecoders:a,contentTypeDecoder:s,contentTypeDecoders:u}}t.fromOptions=e})(Hl||(Hl={}));var Wl=class extends ns{constructor(e,r){super(),this.readable=e,this.options=Hl.fromOptions(r),this.buffer=(0,Ul.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let i=this.buffer.tryReadHeaders();if(!i)return;let o=i.get("Content-Length");if(!o)throw new Error("Header must provide a Content-Length property.");let a=parseInt(o);if(isNaN(a))throw new Error("Content-Length value must be a number.");this.nextMessageLength=a}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1;let n;this.options.contentDecoder!==void 0?n=this.options.contentDecoder.decode(r):n=Promise.resolve(r),n.then(i=>{this.options.contentTypeDecoder.decode(i,this.options).then(o=>{this.callback(o)},o=>{this.fireError(o)})},i=>{this.fireError(i)})}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,Ul.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};Dn.ReadableStreamMessageReader=Wl});var vm=E(is=>{"use strict";Object.defineProperty(is,"__esModule",{value:!0});is.Semaphore=void 0;var w0=Sn(),Kl=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,w0.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};is.Semaphore=Kl});var Am=E(On=>{"use strict";Object.defineProperty(On,"__esModule",{value:!0});On.WriteableStreamMessageWriter=On.AbstractMessageWriter=On.MessageWriter=void 0;var Tm=Sn(),zo=zi(),D0=vm(),_m=Ti(),O0="Content-Length: ",Rm=`\r
`,x0;(function(t){function e(r){let n=r;return n&&zo.func(n.dispose)&&zo.func(n.onClose)&&zo.func(n.onError)&&zo.func(n.write)}t.is=e})(x0=On.MessageWriter||(On.MessageWriter={}));var os=class{constructor(){this.errorEmitter=new _m.Emitter,this.closeEmitter=new _m.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${zo.string(e.message)?e.message:"unknown"}`)}};On.AbstractMessageWriter=os;var Bl;(function(t){function e(r){return r===void 0||typeof r=="string"?{charset:r??"utf-8",contentTypeEncoder:(0,Tm.default)().applicationJson.encoder}:{charset:r.charset??"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:r.contentTypeEncoder??(0,Tm.default)().applicationJson.encoder}}t.fromOptions=e})(Bl||(Bl={}));var zl=class extends os{constructor(e,r){super(),this.writable=e,this.options=Bl.fromOptions(r),this.errorCount=0,this.writeSemaphore=new D0.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let i=[];return i.push(O0,n.byteLength.toString(),Rm),i.push(Rm),this.doWrite(e,i,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};On.WriteableStreamMessageWriter=zl});var Nm=E(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});J.createMessageConnection=J.ConnectionOptions=J.CancellationStrategy=J.CancellationSenderStrategy=J.CancellationReceiverStrategy=J.ConnectionStrategy=J.ConnectionError=J.ConnectionErrors=J.LogTraceNotification=J.SetTraceNotification=J.TraceFormat=J.TraceValues=J.Trace=J.NullLogger=J.ProgressType=J.ProgressToken=void 0;var Cm=Sn(),Ct=zi(),Z=Il(),bm=Ll(),Vo=Ti(),Vl=jl(),Xo;(function(t){t.type=new Z.NotificationType("$/cancelRequest")})(Xo||(Xo={}));var Em;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(Em=J.ProgressToken||(J.ProgressToken={}));var Yo;(function(t){t.type=new Z.NotificationType("$/progress")})(Yo||(Yo={}));var Yl=class{constructor(){}};J.ProgressType=Yl;var Xl;(function(t){function e(r){return Ct.func(r)}t.is=e})(Xl||(Xl={}));J.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var Se;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(Se=J.Trace||(J.Trace={}));var I0;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(I0=J.TraceValues||(J.TraceValues={}));(function(t){function e(n){if(!Ct.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(Se=J.Trace||(J.Trace={}));var $r;(function(t){t.Text="text",t.JSON="json"})($r=J.TraceFormat||(J.TraceFormat={}));(function(t){function e(r){return Ct.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})($r=J.TraceFormat||(J.TraceFormat={}));var Pm;(function(t){t.type=new Z.NotificationType("$/setTrace")})(Pm=J.SetTraceNotification||(J.SetTraceNotification={}));var Jl;(function(t){t.type=new Z.NotificationType("$/logTrace")})(Jl=J.LogTraceNotification||(J.LogTraceNotification={}));var as;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(as=J.ConnectionErrors||(J.ConnectionErrors={}));var Jn=class extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,Jn.prototype)}};J.ConnectionError=Jn;var km;(function(t){function e(r){let n=r;return n&&Ct.func(n.cancelUndispatched)}t.is=e})(km=J.ConnectionStrategy||(J.ConnectionStrategy={}));var Ql;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new Vl.CancellationTokenSource}});function e(r){let n=r;return n&&Ct.func(n.createCancellationTokenSource)}t.is=e})(Ql=J.CancellationReceiverStrategy||(J.CancellationReceiverStrategy={}));var Zl;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(Xo.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&Ct.func(n.sendCancellation)&&Ct.func(n.cleanup)}t.is=e})(Zl=J.CancellationSenderStrategy||(J.CancellationSenderStrategy={}));var ed;(function(t){t.Message=Object.freeze({receiver:Ql.Message,sender:Zl.Message});function e(r){let n=r;return n&&Ql.is(n.receiver)&&Zl.is(n.sender)}t.is=e})(ed=J.CancellationStrategy||(J.CancellationStrategy={}));var M0;(function(t){function e(r){let n=r;return n&&(ed.is(n.cancellationStrategy)||km.is(n.connectionStrategy))}t.is=e})(M0=J.ConnectionOptions||(J.ConnectionOptions={}));var qr;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(qr||(qr={}));function L0(t,e,r,n){let i=r!==void 0?r:J.NullLogger,o=0,a=0,s=0,u="2.0",c,l=new Map,f,y=new Map,_=new Map,h,A=new bm.LinkedMap,w=new Map,k=new Set,R=new Map,T=Se.Off,D=$r.Text,B,V=qr.New,G=new Vo.Emitter,ve=new Vo.Emitter,Fe=new Vo.Emitter,Qe=new Vo.Emitter,je=new Vo.Emitter,$=n&&n.cancellationStrategy?n.cancellationStrategy:ed.Message;function L(C){if(C===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+C.toString()}function q(C){return C===null?"res-unknown-"+(++s).toString():"res-"+C.toString()}function K(){return"not-"+(++a).toString()}function he(C,I){Z.Message.isRequest(I)?C.set(L(I.id),I):Z.Message.isResponse(I)?C.set(q(I.id),I):C.set(K(),I)}function ee(C){}function ie(){return V===qr.Listening}function Ce(){return V===qr.Closed}function Ge(){return V===qr.Disposed}function dt(){(V===qr.New||V===qr.Listening)&&(V=qr.Closed,ve.fire(void 0))}function or(C){G.fire([C,void 0,void 0])}function pr(C){G.fire(C)}t.onClose(dt),t.onError(or),e.onClose(dt),e.onError(pr);function $i(){h||A.size===0||(h=(0,Cm.default)().timer.setImmediate(()=>{h=void 0,qi()}))}function qi(){if(A.size===0)return;let C=A.shift();try{Z.Message.isRequest(C)?Fi(C):Z.Message.isNotification(C)?Uo(C):Z.Message.isResponse(C)?ji(C):yr(C)}finally{$i()}}let Jt=C=>{try{if(Z.Message.isNotification(C)&&C.method===Xo.type.method){let I=C.params.id,j=L(I),z=A.get(j);if(Z.Message.isRequest(z)){let Ie=n?.connectionStrategy,Ze=Ie&&Ie.cancelUndispatched?Ie.cancelUndispatched(z,ee):void 0;if(Ze&&(Ze.error!==void 0||Ze.result!==void 0)){A.delete(j),R.delete(I),Ze.id=z.id,tn(Ze,C.method,Date.now()),e.write(Ze).catch(()=>i.error("Sending response for canceled message failed."));return}}let xe=R.get(I);if(xe!==void 0){xe.cancel(),bn(C);return}else k.add(I)}he(A,C)}finally{$i()}};function Fi(C){if(Ge())return;function I(de,Ue,Te){let ft={jsonrpc:u,id:C.id};de instanceof Z.ResponseError?ft.error=de.toJson():ft.result=de===void 0?null:de,tn(ft,Ue,Te),e.write(ft).catch(()=>i.error("Sending response failed."))}function j(de,Ue,Te){let ft={jsonrpc:u,id:C.id,error:de.toJson()};tn(ft,Ue,Te),e.write(ft).catch(()=>i.error("Sending response failed."))}function z(de,Ue,Te){de===void 0&&(de=null);let ft={jsonrpc:u,id:C.id,result:de};tn(ft,Ue,Te),e.write(ft).catch(()=>i.error("Sending response failed."))}Yn(C);let xe=l.get(C.method),Ie,Ze;xe&&(Ie=xe.type,Ze=xe.handler);let ht=Date.now();if(Ze||c){let de=C.id??String(Date.now()),Ue=$.receiver.createCancellationTokenSource(de);C.id!==null&&k.has(C.id)&&Ue.cancel(),C.id!==null&&R.set(de,Ue);try{let Te;if(Ze)if(C.params===void 0){if(Ie!==void 0&&Ie.numberOfParams!==0){j(new Z.ResponseError(Z.ErrorCodes.InvalidParams,`Request ${C.method} defines ${Ie.numberOfParams} params but received none.`),C.method,ht);return}Te=Ze(Ue.token)}else if(Array.isArray(C.params)){if(Ie!==void 0&&Ie.parameterStructures===Z.ParameterStructures.byName){j(new Z.ResponseError(Z.ErrorCodes.InvalidParams,`Request ${C.method} defines parameters by name but received parameters by position`),C.method,ht);return}Te=Ze(...C.params,Ue.token)}else{if(Ie!==void 0&&Ie.parameterStructures===Z.ParameterStructures.byPosition){j(new Z.ResponseError(Z.ErrorCodes.InvalidParams,`Request ${C.method} defines parameters by position but received parameters by name`),C.method,ht);return}Te=Ze(C.params,Ue.token)}else c&&(Te=c(C.method,C.params,Ue.token));let ft=Te;Te?ft.then?ft.then(Gt=>{R.delete(de),I(Gt,C.method,ht)},Gt=>{R.delete(de),Gt instanceof Z.ResponseError?j(Gt,C.method,ht):Gt&&Ct.string(Gt.message)?j(new Z.ResponseError(Z.ErrorCodes.InternalError,`Request ${C.method} failed with message: ${Gt.message}`),C.method,ht):j(new Z.ResponseError(Z.ErrorCodes.InternalError,`Request ${C.method} failed unexpectedly without providing any details.`),C.method,ht)}):(R.delete(de),I(Te,C.method,ht)):(R.delete(de),z(Te,C.method,ht))}catch(Te){R.delete(de),Te instanceof Z.ResponseError?I(Te,C.method,ht):Te&&Ct.string(Te.message)?j(new Z.ResponseError(Z.ErrorCodes.InternalError,`Request ${C.method} failed with message: ${Te.message}`),C.method,ht):j(new Z.ResponseError(Z.ErrorCodes.InternalError,`Request ${C.method} failed unexpectedly without providing any details.`),C.method,ht)}}else j(new Z.ResponseError(Z.ErrorCodes.MethodNotFound,`Unhandled method ${C.method}`),C.method,ht)}function ji(C){if(!Ge())if(C.id===null)C.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(C.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let I=C.id,j=w.get(I);if(yi(C,j),j!==void 0){w.delete(I);try{if(C.error){let z=C.error;j.reject(new Z.ResponseError(z.code,z.message,z.data))}else if(C.result!==void 0)j.resolve(C.result);else throw new Error("Should never happen.")}catch(z){z.message?i.error(`Response handler '${j.method}' failed with message: ${z.message}`):i.error(`Response handler '${j.method}' failed unexpectedly.`)}}}}function Uo(C){if(Ge())return;let I,j;if(C.method===Xo.type.method){let z=C.params.id;k.delete(z),bn(C);return}else{let z=y.get(C.method);z&&(j=z.handler,I=z.type)}if(j||f)try{if(bn(C),j)if(C.params===void 0)I!==void 0&&I.numberOfParams!==0&&I.parameterStructures!==Z.ParameterStructures.byName&&i.error(`Notification ${C.method} defines ${I.numberOfParams} params but received none.`),j();else if(Array.isArray(C.params)){let z=C.params;C.method===Yo.type.method&&z.length===2&&Em.is(z[0])?j({token:z[0],value:z[1]}):(I!==void 0&&(I.parameterStructures===Z.ParameterStructures.byName&&i.error(`Notification ${C.method} defines parameters by name but received parameters by position`),I.numberOfParams!==C.params.length&&i.error(`Notification ${C.method} defines ${I.numberOfParams} params but received ${z.length} arguments`)),j(...z))}else I!==void 0&&I.parameterStructures===Z.ParameterStructures.byPosition&&i.error(`Notification ${C.method} defines parameters by position but received parameters by name`),j(C.params);else f&&f(C.method,C.params)}catch(z){z.message?i.error(`Notification handler '${C.method}' failed with message: ${z.message}`):i.error(`Notification handler '${C.method}' failed unexpectedly.`)}else Fe.fire(C)}function yr(C){if(!C){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(C,null,4)}`);let I=C;if(Ct.string(I.id)||Ct.number(I.id)){let j=I.id,z=w.get(j);z&&z.reject(new Error("The received response has neither a result nor an error property."))}}function kt(C){if(C!=null)switch(T){case Se.Verbose:return JSON.stringify(C,null,4);case Se.Compact:return JSON.stringify(C);default:return}}function Ho(C){if(!(T===Se.Off||!B))if(D===$r.Text){let I;(T===Se.Verbose||T===Se.Compact)&&C.params&&(I=`Params: ${kt(C.params)}

`),B.log(`Sending request '${C.method} - (${C.id})'.`,I)}else vr("send-request",C)}function gi(C){if(!(T===Se.Off||!B))if(D===$r.Text){let I;(T===Se.Verbose||T===Se.Compact)&&(C.params?I=`Params: ${kt(C.params)}

`:I=`No parameters provided.

`),B.log(`Sending notification '${C.method}'.`,I)}else vr("send-notification",C)}function tn(C,I,j){if(!(T===Se.Off||!B))if(D===$r.Text){let z;(T===Se.Verbose||T===Se.Compact)&&(C.error&&C.error.data?z=`Error data: ${kt(C.error.data)}

`:C.result?z=`Result: ${kt(C.result)}

`:C.error===void 0&&(z=`No result returned.

`)),B.log(`Sending response '${I} - (${C.id})'. Processing request took ${Date.now()-j}ms`,z)}else vr("send-response",C)}function Yn(C){if(!(T===Se.Off||!B))if(D===$r.Text){let I;(T===Se.Verbose||T===Se.Compact)&&C.params&&(I=`Params: ${kt(C.params)}

`),B.log(`Received request '${C.method} - (${C.id})'.`,I)}else vr("receive-request",C)}function bn(C){if(!(T===Se.Off||!B||C.method===Jl.type.method))if(D===$r.Text){let I;(T===Se.Verbose||T===Se.Compact)&&(C.params?I=`Params: ${kt(C.params)}

`:I=`No parameters provided.

`),B.log(`Received notification '${C.method}'.`,I)}else vr("receive-notification",C)}function yi(C,I){if(!(T===Se.Off||!B))if(D===$r.Text){let j;if((T===Se.Verbose||T===Se.Compact)&&(C.error&&C.error.data?j=`Error data: ${kt(C.error.data)}

`:C.result?j=`Result: ${kt(C.result)}

`:C.error===void 0&&(j=`No result returned.

`)),I){let z=C.error?` Request failed: ${C.error.message} (${C.error.code}).`:"";B.log(`Received response '${I.method} - (${C.id})' in ${Date.now()-I.timerStart}ms.${z}`,j)}else B.log(`Received response ${C.id} without active response promise.`,j)}else vr("receive-response",C)}function vr(C,I){if(!B||T===Se.Off)return;let j={isLSPMessage:!0,type:C,message:I,timestamp:Date.now()};B.log(j)}function rn(){if(Ce())throw new Jn(as.Closed,"Connection is closed.");if(Ge())throw new Jn(as.Disposed,"Connection is disposed.")}function Gi(){if(ie())throw new Jn(as.AlreadyListening,"Connection is already listening")}function En(){if(!ie())throw new Error("Call listen() first.")}function Ir(C){return C===void 0?null:C}function st(C){if(C!==null)return C}function nn(C){return C!=null&&!Array.isArray(C)&&typeof C=="object"}function Tr(C,I){switch(C){case Z.ParameterStructures.auto:return nn(I)?st(I):[Ir(I)];case Z.ParameterStructures.byName:if(!nn(I))throw new Error("Received parameters by name but param is not an object literal.");return st(I);case Z.ParameterStructures.byPosition:return[Ir(I)];default:throw new Error(`Unknown parameter structure ${C.toString()}`)}}function Ui(C,I){let j,z=C.numberOfParams;switch(z){case 0:j=void 0;break;case 1:j=Tr(C.parameterStructures,I[0]);break;default:j=[];for(let xe=0;xe<I.length&&xe<z;xe++)j.push(Ir(I[xe]));if(I.length<z)for(let xe=I.length;xe<z;xe++)j.push(null);break}return j}let Xn={sendNotification:(C,...I)=>{rn();let j,z;if(Ct.string(C)){j=C;let Ie=I[0],Ze=0,ht=Z.ParameterStructures.auto;Z.ParameterStructures.is(Ie)&&(Ze=1,ht=Ie);let de=I.length,Ue=de-Ze;switch(Ue){case 0:z=void 0;break;case 1:z=Tr(ht,I[Ze]);break;default:if(ht===Z.ParameterStructures.byName)throw new Error(`Received ${Ue} parameters for 'by Name' notification parameter structure.`);z=I.slice(Ze,de).map(Te=>Ir(Te));break}}else{let Ie=I;j=C.method,z=Ui(C,Ie)}let xe={jsonrpc:u,method:j,params:z};return gi(xe),e.write(xe).catch(()=>i.error("Sending notification failed."))},onNotification:(C,I)=>{rn();let j;return Ct.func(C)?f=C:I&&(Ct.string(C)?(j=C,y.set(C,{type:void 0,handler:I})):(j=C.method,y.set(C.method,{type:C,handler:I}))),{dispose:()=>{j!==void 0?y.delete(j):f=void 0}}},onProgress:(C,I,j)=>{if(_.has(I))throw new Error(`Progress handler for token ${I} already registered`);return _.set(I,j),{dispose:()=>{_.delete(I)}}},sendProgress:(C,I,j)=>Xn.sendNotification(Yo.type,{token:I,value:j}),onUnhandledProgress:Qe.event,sendRequest:(C,...I)=>{rn(),En();let j,z,xe;if(Ct.string(C)){j=C;let de=I[0],Ue=I[I.length-1],Te=0,ft=Z.ParameterStructures.auto;Z.ParameterStructures.is(de)&&(Te=1,ft=de);let Gt=I.length;Vl.CancellationToken.is(Ue)&&(Gt=Gt-1,xe=Ue);let Pn=Gt-Te;switch(Pn){case 0:z=void 0;break;case 1:z=Tr(ft,I[Te]);break;default:if(ft===Z.ParameterStructures.byName)throw new Error(`Received ${Pn} parameters for 'by Name' request parameter structure.`);z=I.slice(Te,Gt).map(on=>Ir(on));break}}else{let de=I;j=C.method,z=Ui(C,de);let Ue=C.numberOfParams;xe=Vl.CancellationToken.is(de[Ue])?de[Ue]:void 0}let Ie=o++,Ze;return xe&&(Ze=xe.onCancellationRequested(()=>{let de=$.sender.sendCancellation(Xn,Ie);return de===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${Ie}`),Promise.resolve()):de.catch(()=>{i.log(`Sending cancellation messages for id ${Ie} failed`)})})),new Promise((de,Ue)=>{let Te={jsonrpc:u,id:Ie,method:j,params:z},ft=on=>{de(on),$.sender.cleanup(Ie),Ze?.dispose()},Gt=on=>{Ue(on),$.sender.cleanup(Ie),Ze?.dispose()},Pn={method:j,timerStart:Date.now(),resolve:ft,reject:Gt};Ho(Te);try{e.write(Te).catch(()=>i.error("Sending request failed."))}catch(on){Pn.reject(new Z.ResponseError(Z.ErrorCodes.MessageWriteError,on.message?on.message:"Unknown reason")),Pn=null}Pn&&w.set(Ie,Pn)})},onRequest:(C,I)=>{rn();let j=null;return Xl.is(C)?(j=void 0,c=C):Ct.string(C)?(j=null,I!==void 0&&(j=C,l.set(C,{handler:I,type:void 0}))):I!==void 0&&(j=C.method,l.set(C.method,{type:C,handler:I})),{dispose:()=>{j!==null&&(j!==void 0?l.delete(j):c=void 0)}}},hasPendingResponse:()=>w.size>0,trace:async(C,I,j)=>{let z=!1,xe=$r.Text;j!==void 0&&(Ct.boolean(j)?z=j:(z=j.sendNotification||!1,xe=j.traceFormat||$r.Text)),T=C,D=xe,T===Se.Off?B=void 0:B=I,z&&!Ce()&&!Ge()&&await Xn.sendNotification(Pm.type,{value:Se.toString(C)})},onError:G.event,onClose:ve.event,onUnhandledNotification:Fe.event,onDispose:je.event,end:()=>{e.end()},dispose:()=>{if(Ge())return;V=qr.Disposed,je.fire(void 0);let C=new Z.ResponseError(Z.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let I of w.values())I.reject(C);w=new Map,R=new Map,k=new Set,A=new bm.LinkedMap,Ct.func(e.dispose)&&e.dispose(),Ct.func(t.dispose)&&t.dispose()},listen:()=>{rn(),Gi(),V=qr.Listening,t.listen(Jt)},inspect:()=>{(0,Cm.default)().console.log("inspect")}};return Xn.onNotification(Jl.type,C=>{if(T===Se.Off||!B)return;let I=T===Se.Verbose||T===Se.Compact;B.log(C.message,I?C.verbose:void 0)}),Xn.onNotification(Yo.type,C=>{let I=_.get(C.token);I?I(C.value):Qe.fire(C)}),Xn}J.createMessageConnection=L0});var id=E(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.TraceFormat=O.TraceValues=O.Trace=O.ProgressType=O.ProgressToken=O.createMessageConnection=O.NullLogger=O.ConnectionOptions=O.ConnectionStrategy=O.WriteableStreamMessageWriter=O.AbstractMessageWriter=O.MessageWriter=O.ReadableStreamMessageReader=O.AbstractMessageReader=O.MessageReader=O.CancellationToken=O.CancellationTokenSource=O.Emitter=O.Event=O.Disposable=O.LRUCache=O.Touch=O.LinkedMap=O.ParameterStructures=O.NotificationType9=O.NotificationType8=O.NotificationType7=O.NotificationType6=O.NotificationType5=O.NotificationType4=O.NotificationType3=O.NotificationType2=O.NotificationType1=O.NotificationType0=O.NotificationType=O.ErrorCodes=O.ResponseError=O.RequestType9=O.RequestType8=O.RequestType7=O.RequestType6=O.RequestType5=O.RequestType4=O.RequestType3=O.RequestType2=O.RequestType1=O.RequestType0=O.RequestType=O.Message=O.RAL=void 0;O.CancellationStrategy=O.CancellationSenderStrategy=O.CancellationReceiverStrategy=O.ConnectionError=O.ConnectionErrors=O.LogTraceNotification=O.SetTraceNotification=void 0;var We=Il();Object.defineProperty(O,"Message",{enumerable:!0,get:function(){return We.Message}});Object.defineProperty(O,"RequestType",{enumerable:!0,get:function(){return We.RequestType}});Object.defineProperty(O,"RequestType0",{enumerable:!0,get:function(){return We.RequestType0}});Object.defineProperty(O,"RequestType1",{enumerable:!0,get:function(){return We.RequestType1}});Object.defineProperty(O,"RequestType2",{enumerable:!0,get:function(){return We.RequestType2}});Object.defineProperty(O,"RequestType3",{enumerable:!0,get:function(){return We.RequestType3}});Object.defineProperty(O,"RequestType4",{enumerable:!0,get:function(){return We.RequestType4}});Object.defineProperty(O,"RequestType5",{enumerable:!0,get:function(){return We.RequestType5}});Object.defineProperty(O,"RequestType6",{enumerable:!0,get:function(){return We.RequestType6}});Object.defineProperty(O,"RequestType7",{enumerable:!0,get:function(){return We.RequestType7}});Object.defineProperty(O,"RequestType8",{enumerable:!0,get:function(){return We.RequestType8}});Object.defineProperty(O,"RequestType9",{enumerable:!0,get:function(){return We.RequestType9}});Object.defineProperty(O,"ResponseError",{enumerable:!0,get:function(){return We.ResponseError}});Object.defineProperty(O,"ErrorCodes",{enumerable:!0,get:function(){return We.ErrorCodes}});Object.defineProperty(O,"NotificationType",{enumerable:!0,get:function(){return We.NotificationType}});Object.defineProperty(O,"NotificationType0",{enumerable:!0,get:function(){return We.NotificationType0}});Object.defineProperty(O,"NotificationType1",{enumerable:!0,get:function(){return We.NotificationType1}});Object.defineProperty(O,"NotificationType2",{enumerable:!0,get:function(){return We.NotificationType2}});Object.defineProperty(O,"NotificationType3",{enumerable:!0,get:function(){return We.NotificationType3}});Object.defineProperty(O,"NotificationType4",{enumerable:!0,get:function(){return We.NotificationType4}});Object.defineProperty(O,"NotificationType5",{enumerable:!0,get:function(){return We.NotificationType5}});Object.defineProperty(O,"NotificationType6",{enumerable:!0,get:function(){return We.NotificationType6}});Object.defineProperty(O,"NotificationType7",{enumerable:!0,get:function(){return We.NotificationType7}});Object.defineProperty(O,"NotificationType8",{enumerable:!0,get:function(){return We.NotificationType8}});Object.defineProperty(O,"NotificationType9",{enumerable:!0,get:function(){return We.NotificationType9}});Object.defineProperty(O,"ParameterStructures",{enumerable:!0,get:function(){return We.ParameterStructures}});var td=Ll();Object.defineProperty(O,"LinkedMap",{enumerable:!0,get:function(){return td.LinkedMap}});Object.defineProperty(O,"LRUCache",{enumerable:!0,get:function(){return td.LRUCache}});Object.defineProperty(O,"Touch",{enumerable:!0,get:function(){return td.Touch}});var $0=ol();Object.defineProperty(O,"Disposable",{enumerable:!0,get:function(){return $0.Disposable}});var Sm=Ti();Object.defineProperty(O,"Event",{enumerable:!0,get:function(){return Sm.Event}});Object.defineProperty(O,"Emitter",{enumerable:!0,get:function(){return Sm.Emitter}});var wm=jl();Object.defineProperty(O,"CancellationTokenSource",{enumerable:!0,get:function(){return wm.CancellationTokenSource}});Object.defineProperty(O,"CancellationToken",{enumerable:!0,get:function(){return wm.CancellationToken}});var rd=ym();Object.defineProperty(O,"MessageReader",{enumerable:!0,get:function(){return rd.MessageReader}});Object.defineProperty(O,"AbstractMessageReader",{enumerable:!0,get:function(){return rd.AbstractMessageReader}});Object.defineProperty(O,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return rd.ReadableStreamMessageReader}});var nd=Am();Object.defineProperty(O,"MessageWriter",{enumerable:!0,get:function(){return nd.MessageWriter}});Object.defineProperty(O,"AbstractMessageWriter",{enumerable:!0,get:function(){return nd.AbstractMessageWriter}});Object.defineProperty(O,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return nd.WriteableStreamMessageWriter}});var Ht=Nm();Object.defineProperty(O,"ConnectionStrategy",{enumerable:!0,get:function(){return Ht.ConnectionStrategy}});Object.defineProperty(O,"ConnectionOptions",{enumerable:!0,get:function(){return Ht.ConnectionOptions}});Object.defineProperty(O,"NullLogger",{enumerable:!0,get:function(){return Ht.NullLogger}});Object.defineProperty(O,"createMessageConnection",{enumerable:!0,get:function(){return Ht.createMessageConnection}});Object.defineProperty(O,"ProgressToken",{enumerable:!0,get:function(){return Ht.ProgressToken}});Object.defineProperty(O,"ProgressType",{enumerable:!0,get:function(){return Ht.ProgressType}});Object.defineProperty(O,"Trace",{enumerable:!0,get:function(){return Ht.Trace}});Object.defineProperty(O,"TraceValues",{enumerable:!0,get:function(){return Ht.TraceValues}});Object.defineProperty(O,"TraceFormat",{enumerable:!0,get:function(){return Ht.TraceFormat}});Object.defineProperty(O,"SetTraceNotification",{enumerable:!0,get:function(){return Ht.SetTraceNotification}});Object.defineProperty(O,"LogTraceNotification",{enumerable:!0,get:function(){return Ht.LogTraceNotification}});Object.defineProperty(O,"ConnectionErrors",{enumerable:!0,get:function(){return Ht.ConnectionErrors}});Object.defineProperty(O,"ConnectionError",{enumerable:!0,get:function(){return Ht.ConnectionError}});Object.defineProperty(O,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return Ht.CancellationReceiverStrategy}});Object.defineProperty(O,"CancellationSenderStrategy",{enumerable:!0,get:function(){return Ht.CancellationSenderStrategy}});Object.defineProperty(O,"CancellationStrategy",{enumerable:!0,get:function(){return Ht.CancellationStrategy}});var q0=Sn();O.RAL=q0.default});var xn=E(hr=>{"use strict";var F0=hr&&hr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),j0=hr&&hr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&F0(e,t,r)};Object.defineProperty(hr,"__esModule",{value:!0});hr.createMessageConnection=hr.BrowserMessageWriter=hr.BrowserMessageReader=void 0;var G0=fm();G0.default.install();var Yi=id();j0(id(),hr);var od=class extends Yi.AbstractMessageReader{constructor(e){super(),this._onData=new Yi.Emitter,this._messageListener=r=>{this._onData.fire(r.data)},e.addEventListener("error",r=>this.fireError(r)),e.onmessage=this._messageListener}listen(e){return this._onData.event(e)}};hr.BrowserMessageReader=od;var ad=class extends Yi.AbstractMessageWriter{constructor(e){super(),this.context=e,this.errorCount=0,e.addEventListener("error",r=>this.fireError(r))}write(e){try{return this.context.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};hr.BrowserMessageWriter=ad;function U0(t,e,r,n){return r===void 0&&(r=Yi.NullLogger),Yi.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Yi.createMessageConnection)(t,e,r,n)}hr.createMessageConnection=U0});var sd=E((kL,Dm)=>{"use strict";Dm.exports=xn()});var Xi=E((Om,ss)=>{(function(t){if(typeof ss=="object"&&typeof ss.exports=="object"){var e=t(Za,Om);e!==void 0&&(ss.exports=e)}else typeof define=="function"&&define.amd&&define(["require","exports"],t)})(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TextDocument=e.EOL=e.WorkspaceFolder=e.InlayHint=e.InlayHintLabelPart=e.InlayHintKind=e.InlineValueContext=e.InlineValueEvaluatableExpression=e.InlineValueVariableLookup=e.InlineValueText=e.SemanticTokens=e.SemanticTokenModifiers=e.SemanticTokenTypes=e.SelectionRange=e.DocumentLink=e.FormattingOptions=e.CodeLens=e.CodeAction=e.CodeActionContext=e.CodeActionTriggerKind=e.CodeActionKind=e.DocumentSymbol=e.WorkspaceSymbol=e.SymbolInformation=e.SymbolTag=e.SymbolKind=e.DocumentHighlight=e.DocumentHighlightKind=e.SignatureInformation=e.ParameterInformation=e.Hover=e.MarkedString=e.CompletionList=e.CompletionItem=e.CompletionItemLabelDetails=e.InsertTextMode=e.InsertReplaceEdit=e.CompletionItemTag=e.InsertTextFormat=e.CompletionItemKind=e.MarkupContent=e.MarkupKind=e.TextDocumentItem=e.OptionalVersionedTextDocumentIdentifier=e.VersionedTextDocumentIdentifier=e.TextDocumentIdentifier=e.WorkspaceChange=e.WorkspaceEdit=e.DeleteFile=e.RenameFile=e.CreateFile=e.TextDocumentEdit=e.AnnotatedTextEdit=e.ChangeAnnotationIdentifier=e.ChangeAnnotation=e.TextEdit=e.Command=e.Diagnostic=e.CodeDescription=e.DiagnosticTag=e.DiagnosticSeverity=e.DiagnosticRelatedInformation=e.FoldingRange=e.FoldingRangeKind=e.ColorPresentation=e.ColorInformation=e.Color=e.LocationLink=e.Location=e.Range=e.Position=e.uinteger=e.integer=e.URI=e.DocumentUri=void 0;var r;(function(p){function b(P){return typeof P=="string"}p.is=b})(r=e.DocumentUri||(e.DocumentUri={}));var n;(function(p){function b(P){return typeof P=="string"}p.is=b})(n=e.URI||(e.URI={}));var i;(function(p){p.MIN_VALUE=-2147483648,p.MAX_VALUE=2147483647;function b(P){return typeof P=="number"&&p.MIN_VALUE<=P&&P<=p.MAX_VALUE}p.is=b})(i=e.integer||(e.integer={}));var o;(function(p){p.MIN_VALUE=0,p.MAX_VALUE=2147483647;function b(P){return typeof P=="number"&&p.MIN_VALUE<=P&&P<=p.MAX_VALUE}p.is=b})(o=e.uinteger||(e.uinteger={}));var a;(function(p){function b(g,d){return g===Number.MAX_VALUE&&(g=o.MAX_VALUE),d===Number.MAX_VALUE&&(d=o.MAX_VALUE),{line:g,character:d}}p.create=b;function P(g){var d=g;return N.objectLiteral(d)&&N.uinteger(d.line)&&N.uinteger(d.character)}p.is=P})(a=e.Position||(e.Position={}));var s;(function(p){function b(g,d,S,x){if(N.uinteger(g)&&N.uinteger(d)&&N.uinteger(S)&&N.uinteger(x))return{start:a.create(g,d),end:a.create(S,x)};if(a.is(g)&&a.is(d))return{start:g,end:d};throw new Error("Range#create called with invalid arguments[".concat(g,", ").concat(d,", ").concat(S,", ").concat(x,"]"))}p.create=b;function P(g){var d=g;return N.objectLiteral(d)&&a.is(d.start)&&a.is(d.end)}p.is=P})(s=e.Range||(e.Range={}));var u;(function(p){function b(g,d){return{uri:g,range:d}}p.create=b;function P(g){var d=g;return N.objectLiteral(d)&&s.is(d.range)&&(N.string(d.uri)||N.undefined(d.uri))}p.is=P})(u=e.Location||(e.Location={}));var c;(function(p){function b(g,d,S,x){return{targetUri:g,targetRange:d,targetSelectionRange:S,originSelectionRange:x}}p.create=b;function P(g){var d=g;return N.objectLiteral(d)&&s.is(d.targetRange)&&N.string(d.targetUri)&&s.is(d.targetSelectionRange)&&(s.is(d.originSelectionRange)||N.undefined(d.originSelectionRange))}p.is=P})(c=e.LocationLink||(e.LocationLink={}));var l;(function(p){function b(g,d,S,x){return{red:g,green:d,blue:S,alpha:x}}p.create=b;function P(g){var d=g;return N.objectLiteral(d)&&N.numberRange(d.red,0,1)&&N.numberRange(d.green,0,1)&&N.numberRange(d.blue,0,1)&&N.numberRange(d.alpha,0,1)}p.is=P})(l=e.Color||(e.Color={}));var f;(function(p){function b(g,d){return{range:g,color:d}}p.create=b;function P(g){var d=g;return N.objectLiteral(d)&&s.is(d.range)&&l.is(d.color)}p.is=P})(f=e.ColorInformation||(e.ColorInformation={}));var y;(function(p){function b(g,d,S){return{label:g,textEdit:d,additionalTextEdits:S}}p.create=b;function P(g){var d=g;return N.objectLiteral(d)&&N.string(d.label)&&(N.undefined(d.textEdit)||B.is(d))&&(N.undefined(d.additionalTextEdits)||N.typedArray(d.additionalTextEdits,B.is))}p.is=P})(y=e.ColorPresentation||(e.ColorPresentation={}));var _;(function(p){p.Comment="comment",p.Imports="imports",p.Region="region"})(_=e.FoldingRangeKind||(e.FoldingRangeKind={}));var h;(function(p){function b(g,d,S,x,re,ut){var He={startLine:g,endLine:d};return N.defined(S)&&(He.startCharacter=S),N.defined(x)&&(He.endCharacter=x),N.defined(re)&&(He.kind=re),N.defined(ut)&&(He.collapsedText=ut),He}p.create=b;function P(g){var d=g;return N.objectLiteral(d)&&N.uinteger(d.startLine)&&N.uinteger(d.startLine)&&(N.undefined(d.startCharacter)||N.uinteger(d.startCharacter))&&(N.undefined(d.endCharacter)||N.uinteger(d.endCharacter))&&(N.undefined(d.kind)||N.string(d.kind))}p.is=P})(h=e.FoldingRange||(e.FoldingRange={}));var A;(function(p){function b(g,d){return{location:g,message:d}}p.create=b;function P(g){var d=g;return N.defined(d)&&u.is(d.location)&&N.string(d.message)}p.is=P})(A=e.DiagnosticRelatedInformation||(e.DiagnosticRelatedInformation={}));var w;(function(p){p.Error=1,p.Warning=2,p.Information=3,p.Hint=4})(w=e.DiagnosticSeverity||(e.DiagnosticSeverity={}));var k;(function(p){p.Unnecessary=1,p.Deprecated=2})(k=e.DiagnosticTag||(e.DiagnosticTag={}));var R;(function(p){function b(P){var g=P;return N.objectLiteral(g)&&N.string(g.href)}p.is=b})(R=e.CodeDescription||(e.CodeDescription={}));var T;(function(p){function b(g,d,S,x,re,ut){var He={range:g,message:d};return N.defined(S)&&(He.severity=S),N.defined(x)&&(He.code=x),N.defined(re)&&(He.source=re),N.defined(ut)&&(He.relatedInformation=ut),He}p.create=b;function P(g){var d,S=g;return N.defined(S)&&s.is(S.range)&&N.string(S.message)&&(N.number(S.severity)||N.undefined(S.severity))&&(N.integer(S.code)||N.string(S.code)||N.undefined(S.code))&&(N.undefined(S.codeDescription)||N.string((d=S.codeDescription)===null||d===void 0?void 0:d.href))&&(N.string(S.source)||N.undefined(S.source))&&(N.undefined(S.relatedInformation)||N.typedArray(S.relatedInformation,A.is))}p.is=P})(T=e.Diagnostic||(e.Diagnostic={}));var D;(function(p){function b(g,d){for(var S=[],x=2;x<arguments.length;x++)S[x-2]=arguments[x];var re={title:g,command:d};return N.defined(S)&&S.length>0&&(re.arguments=S),re}p.create=b;function P(g){var d=g;return N.defined(d)&&N.string(d.title)&&N.string(d.command)}p.is=P})(D=e.Command||(e.Command={}));var B;(function(p){function b(S,x){return{range:S,newText:x}}p.replace=b;function P(S,x){return{range:{start:S,end:S},newText:x}}p.insert=P;function g(S){return{range:S,newText:""}}p.del=g;function d(S){var x=S;return N.objectLiteral(x)&&N.string(x.newText)&&s.is(x.range)}p.is=d})(B=e.TextEdit||(e.TextEdit={}));var V;(function(p){function b(g,d,S){var x={label:g};return d!==void 0&&(x.needsConfirmation=d),S!==void 0&&(x.description=S),x}p.create=b;function P(g){var d=g;return N.objectLiteral(d)&&N.string(d.label)&&(N.boolean(d.needsConfirmation)||d.needsConfirmation===void 0)&&(N.string(d.description)||d.description===void 0)}p.is=P})(V=e.ChangeAnnotation||(e.ChangeAnnotation={}));var G;(function(p){function b(P){var g=P;return N.string(g)}p.is=b})(G=e.ChangeAnnotationIdentifier||(e.ChangeAnnotationIdentifier={}));var ve;(function(p){function b(S,x,re){return{range:S,newText:x,annotationId:re}}p.replace=b;function P(S,x,re){return{range:{start:S,end:S},newText:x,annotationId:re}}p.insert=P;function g(S,x){return{range:S,newText:"",annotationId:x}}p.del=g;function d(S){var x=S;return B.is(x)&&(V.is(x.annotationId)||G.is(x.annotationId))}p.is=d})(ve=e.AnnotatedTextEdit||(e.AnnotatedTextEdit={}));var Fe;(function(p){function b(g,d){return{textDocument:g,edits:d}}p.create=b;function P(g){var d=g;return N.defined(d)&&Ce.is(d.textDocument)&&Array.isArray(d.edits)}p.is=P})(Fe=e.TextDocumentEdit||(e.TextDocumentEdit={}));var Qe;(function(p){function b(g,d,S){var x={kind:"create",uri:g};return d!==void 0&&(d.overwrite!==void 0||d.ignoreIfExists!==void 0)&&(x.options=d),S!==void 0&&(x.annotationId=S),x}p.create=b;function P(g){var d=g;return d&&d.kind==="create"&&N.string(d.uri)&&(d.options===void 0||(d.options.overwrite===void 0||N.boolean(d.options.overwrite))&&(d.options.ignoreIfExists===void 0||N.boolean(d.options.ignoreIfExists)))&&(d.annotationId===void 0||G.is(d.annotationId))}p.is=P})(Qe=e.CreateFile||(e.CreateFile={}));var je;(function(p){function b(g,d,S,x){var re={kind:"rename",oldUri:g,newUri:d};return S!==void 0&&(S.overwrite!==void 0||S.ignoreIfExists!==void 0)&&(re.options=S),x!==void 0&&(re.annotationId=x),re}p.create=b;function P(g){var d=g;return d&&d.kind==="rename"&&N.string(d.oldUri)&&N.string(d.newUri)&&(d.options===void 0||(d.options.overwrite===void 0||N.boolean(d.options.overwrite))&&(d.options.ignoreIfExists===void 0||N.boolean(d.options.ignoreIfExists)))&&(d.annotationId===void 0||G.is(d.annotationId))}p.is=P})(je=e.RenameFile||(e.RenameFile={}));var $;(function(p){function b(g,d,S){var x={kind:"delete",uri:g};return d!==void 0&&(d.recursive!==void 0||d.ignoreIfNotExists!==void 0)&&(x.options=d),S!==void 0&&(x.annotationId=S),x}p.create=b;function P(g){var d=g;return d&&d.kind==="delete"&&N.string(d.uri)&&(d.options===void 0||(d.options.recursive===void 0||N.boolean(d.options.recursive))&&(d.options.ignoreIfNotExists===void 0||N.boolean(d.options.ignoreIfNotExists)))&&(d.annotationId===void 0||G.is(d.annotationId))}p.is=P})($=e.DeleteFile||(e.DeleteFile={}));var L;(function(p){function b(P){var g=P;return g&&(g.changes!==void 0||g.documentChanges!==void 0)&&(g.documentChanges===void 0||g.documentChanges.every(function(d){return N.string(d.kind)?Qe.is(d)||je.is(d)||$.is(d):Fe.is(d)}))}p.is=b})(L=e.WorkspaceEdit||(e.WorkspaceEdit={}));var q=function(){function p(b,P){this.edits=b,this.changeAnnotations=P}return p.prototype.insert=function(b,P,g){var d,S;if(g===void 0?d=B.insert(b,P):G.is(g)?(S=g,d=ve.insert(b,P,g)):(this.assertChangeAnnotations(this.changeAnnotations),S=this.changeAnnotations.manage(g),d=ve.insert(b,P,S)),this.edits.push(d),S!==void 0)return S},p.prototype.replace=function(b,P,g){var d,S;if(g===void 0?d=B.replace(b,P):G.is(g)?(S=g,d=ve.replace(b,P,g)):(this.assertChangeAnnotations(this.changeAnnotations),S=this.changeAnnotations.manage(g),d=ve.replace(b,P,S)),this.edits.push(d),S!==void 0)return S},p.prototype.delete=function(b,P){var g,d;if(P===void 0?g=B.del(b):G.is(P)?(d=P,g=ve.del(b,P)):(this.assertChangeAnnotations(this.changeAnnotations),d=this.changeAnnotations.manage(P),g=ve.del(b,d)),this.edits.push(g),d!==void 0)return d},p.prototype.add=function(b){this.edits.push(b)},p.prototype.all=function(){return this.edits},p.prototype.clear=function(){this.edits.splice(0,this.edits.length)},p.prototype.assertChangeAnnotations=function(b){if(b===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},p}(),K=function(){function p(b){this._annotations=b===void 0?Object.create(null):b,this._counter=0,this._size=0}return p.prototype.all=function(){return this._annotations},Object.defineProperty(p.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),p.prototype.manage=function(b,P){var g;if(G.is(b)?g=b:(g=this.nextId(),P=b),this._annotations[g]!==void 0)throw new Error("Id ".concat(g," is already in use."));if(P===void 0)throw new Error("No annotation provided for id ".concat(g));return this._annotations[g]=P,this._size++,g},p.prototype.nextId=function(){return this._counter++,this._counter.toString()},p}(),he=function(){function p(b){var P=this;this._textEditChanges=Object.create(null),b!==void 0?(this._workspaceEdit=b,b.documentChanges?(this._changeAnnotations=new K(b.changeAnnotations),b.changeAnnotations=this._changeAnnotations.all(),b.documentChanges.forEach(function(g){if(Fe.is(g)){var d=new q(g.edits,P._changeAnnotations);P._textEditChanges[g.textDocument.uri]=d}})):b.changes&&Object.keys(b.changes).forEach(function(g){var d=new q(b.changes[g]);P._textEditChanges[g]=d})):this._workspaceEdit={}}return Object.defineProperty(p.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),p.prototype.getTextEditChange=function(b){if(Ce.is(b)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var P={uri:b.uri,version:b.version},g=this._textEditChanges[P.uri];if(!g){var d=[],S={textDocument:P,edits:d};this._workspaceEdit.documentChanges.push(S),g=new q(d,this._changeAnnotations),this._textEditChanges[P.uri]=g}return g}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var g=this._textEditChanges[b];if(!g){var d=[];this._workspaceEdit.changes[b]=d,g=new q(d),this._textEditChanges[b]=g}return g}},p.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new K,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},p.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},p.prototype.createFile=function(b,P,g){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var d;V.is(P)||G.is(P)?d=P:g=P;var S,x;if(d===void 0?S=Qe.create(b,g):(x=G.is(d)?d:this._changeAnnotations.manage(d),S=Qe.create(b,g,x)),this._workspaceEdit.documentChanges.push(S),x!==void 0)return x},p.prototype.renameFile=function(b,P,g,d){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var S;V.is(g)||G.is(g)?S=g:d=g;var x,re;if(S===void 0?x=je.create(b,P,d):(re=G.is(S)?S:this._changeAnnotations.manage(S),x=je.create(b,P,d,re)),this._workspaceEdit.documentChanges.push(x),re!==void 0)return re},p.prototype.deleteFile=function(b,P,g){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var d;V.is(P)||G.is(P)?d=P:g=P;var S,x;if(d===void 0?S=$.create(b,g):(x=G.is(d)?d:this._changeAnnotations.manage(d),S=$.create(b,g,x)),this._workspaceEdit.documentChanges.push(S),x!==void 0)return x},p}();e.WorkspaceChange=he;var ee;(function(p){function b(g){return{uri:g}}p.create=b;function P(g){var d=g;return N.defined(d)&&N.string(d.uri)}p.is=P})(ee=e.TextDocumentIdentifier||(e.TextDocumentIdentifier={}));var ie;(function(p){function b(g,d){return{uri:g,version:d}}p.create=b;function P(g){var d=g;return N.defined(d)&&N.string(d.uri)&&N.integer(d.version)}p.is=P})(ie=e.VersionedTextDocumentIdentifier||(e.VersionedTextDocumentIdentifier={}));var Ce;(function(p){function b(g,d){return{uri:g,version:d}}p.create=b;function P(g){var d=g;return N.defined(d)&&N.string(d.uri)&&(d.version===null||N.integer(d.version))}p.is=P})(Ce=e.OptionalVersionedTextDocumentIdentifier||(e.OptionalVersionedTextDocumentIdentifier={}));var Ge;(function(p){function b(g,d,S,x){return{uri:g,languageId:d,version:S,text:x}}p.create=b;function P(g){var d=g;return N.defined(d)&&N.string(d.uri)&&N.string(d.languageId)&&N.integer(d.version)&&N.string(d.text)}p.is=P})(Ge=e.TextDocumentItem||(e.TextDocumentItem={}));var dt;(function(p){p.PlainText="plaintext",p.Markdown="markdown";function b(P){var g=P;return g===p.PlainText||g===p.Markdown}p.is=b})(dt=e.MarkupKind||(e.MarkupKind={}));var or;(function(p){function b(P){var g=P;return N.objectLiteral(P)&&dt.is(g.kind)&&N.string(g.value)}p.is=b})(or=e.MarkupContent||(e.MarkupContent={}));var pr;(function(p){p.Text=1,p.Method=2,p.Function=3,p.Constructor=4,p.Field=5,p.Variable=6,p.Class=7,p.Interface=8,p.Module=9,p.Property=10,p.Unit=11,p.Value=12,p.Enum=13,p.Keyword=14,p.Snippet=15,p.Color=16,p.File=17,p.Reference=18,p.Folder=19,p.EnumMember=20,p.Constant=21,p.Struct=22,p.Event=23,p.Operator=24,p.TypeParameter=25})(pr=e.CompletionItemKind||(e.CompletionItemKind={}));var $i;(function(p){p.PlainText=1,p.Snippet=2})($i=e.InsertTextFormat||(e.InsertTextFormat={}));var qi;(function(p){p.Deprecated=1})(qi=e.CompletionItemTag||(e.CompletionItemTag={}));var Jt;(function(p){function b(g,d,S){return{newText:g,insert:d,replace:S}}p.create=b;function P(g){var d=g;return d&&N.string(d.newText)&&s.is(d.insert)&&s.is(d.replace)}p.is=P})(Jt=e.InsertReplaceEdit||(e.InsertReplaceEdit={}));var Fi;(function(p){p.asIs=1,p.adjustIndentation=2})(Fi=e.InsertTextMode||(e.InsertTextMode={}));var ji;(function(p){function b(P){var g=P;return g&&(N.string(g.detail)||g.detail===void 0)&&(N.string(g.description)||g.description===void 0)}p.is=b})(ji=e.CompletionItemLabelDetails||(e.CompletionItemLabelDetails={}));var Uo;(function(p){function b(P){return{label:P}}p.create=b})(Uo=e.CompletionItem||(e.CompletionItem={}));var yr;(function(p){function b(P,g){return{items:P||[],isIncomplete:!!g}}p.create=b})(yr=e.CompletionList||(e.CompletionList={}));var kt;(function(p){function b(g){return g.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}p.fromPlainText=b;function P(g){var d=g;return N.string(d)||N.objectLiteral(d)&&N.string(d.language)&&N.string(d.value)}p.is=P})(kt=e.MarkedString||(e.MarkedString={}));var Ho;(function(p){function b(P){var g=P;return!!g&&N.objectLiteral(g)&&(or.is(g.contents)||kt.is(g.contents)||N.typedArray(g.contents,kt.is))&&(P.range===void 0||s.is(P.range))}p.is=b})(Ho=e.Hover||(e.Hover={}));var gi;(function(p){function b(P,g){return g?{label:P,documentation:g}:{label:P}}p.create=b})(gi=e.ParameterInformation||(e.ParameterInformation={}));var tn;(function(p){function b(P,g){for(var d=[],S=2;S<arguments.length;S++)d[S-2]=arguments[S];var x={label:P};return N.defined(g)&&(x.documentation=g),N.defined(d)?x.parameters=d:x.parameters=[],x}p.create=b})(tn=e.SignatureInformation||(e.SignatureInformation={}));var Yn;(function(p){p.Text=1,p.Read=2,p.Write=3})(Yn=e.DocumentHighlightKind||(e.DocumentHighlightKind={}));var bn;(function(p){function b(P,g){var d={range:P};return N.number(g)&&(d.kind=g),d}p.create=b})(bn=e.DocumentHighlight||(e.DocumentHighlight={}));var yi;(function(p){p.File=1,p.Module=2,p.Namespace=3,p.Package=4,p.Class=5,p.Method=6,p.Property=7,p.Field=8,p.Constructor=9,p.Enum=10,p.Interface=11,p.Function=12,p.Variable=13,p.Constant=14,p.String=15,p.Number=16,p.Boolean=17,p.Array=18,p.Object=19,p.Key=20,p.Null=21,p.EnumMember=22,p.Struct=23,p.Event=24,p.Operator=25,p.TypeParameter=26})(yi=e.SymbolKind||(e.SymbolKind={}));var vr;(function(p){p.Deprecated=1})(vr=e.SymbolTag||(e.SymbolTag={}));var rn;(function(p){function b(P,g,d,S,x){var re={name:P,kind:g,location:{uri:S,range:d}};return x&&(re.containerName=x),re}p.create=b})(rn=e.SymbolInformation||(e.SymbolInformation={}));var Gi;(function(p){function b(P,g,d,S){return S!==void 0?{name:P,kind:g,location:{uri:d,range:S}}:{name:P,kind:g,location:{uri:d}}}p.create=b})(Gi=e.WorkspaceSymbol||(e.WorkspaceSymbol={}));var En;(function(p){function b(g,d,S,x,re,ut){var He={name:g,detail:d,kind:S,range:x,selectionRange:re};return ut!==void 0&&(He.children=ut),He}p.create=b;function P(g){var d=g;return d&&N.string(d.name)&&N.number(d.kind)&&s.is(d.range)&&s.is(d.selectionRange)&&(d.detail===void 0||N.string(d.detail))&&(d.deprecated===void 0||N.boolean(d.deprecated))&&(d.children===void 0||Array.isArray(d.children))&&(d.tags===void 0||Array.isArray(d.tags))}p.is=P})(En=e.DocumentSymbol||(e.DocumentSymbol={}));var Ir;(function(p){p.Empty="",p.QuickFix="quickfix",p.Refactor="refactor",p.RefactorExtract="refactor.extract",p.RefactorInline="refactor.inline",p.RefactorRewrite="refactor.rewrite",p.Source="source",p.SourceOrganizeImports="source.organizeImports",p.SourceFixAll="source.fixAll"})(Ir=e.CodeActionKind||(e.CodeActionKind={}));var st;(function(p){p.Invoked=1,p.Automatic=2})(st=e.CodeActionTriggerKind||(e.CodeActionTriggerKind={}));var nn;(function(p){function b(g,d,S){var x={diagnostics:g};return d!=null&&(x.only=d),S!=null&&(x.triggerKind=S),x}p.create=b;function P(g){var d=g;return N.defined(d)&&N.typedArray(d.diagnostics,T.is)&&(d.only===void 0||N.typedArray(d.only,N.string))&&(d.triggerKind===void 0||d.triggerKind===st.Invoked||d.triggerKind===st.Automatic)}p.is=P})(nn=e.CodeActionContext||(e.CodeActionContext={}));var Tr;(function(p){function b(g,d,S){var x={title:g},re=!0;return typeof d=="string"?(re=!1,x.kind=d):D.is(d)?x.command=d:x.edit=d,re&&S!==void 0&&(x.kind=S),x}p.create=b;function P(g){var d=g;return d&&N.string(d.title)&&(d.diagnostics===void 0||N.typedArray(d.diagnostics,T.is))&&(d.kind===void 0||N.string(d.kind))&&(d.edit!==void 0||d.command!==void 0)&&(d.command===void 0||D.is(d.command))&&(d.isPreferred===void 0||N.boolean(d.isPreferred))&&(d.edit===void 0||L.is(d.edit))}p.is=P})(Tr=e.CodeAction||(e.CodeAction={}));var Ui;(function(p){function b(g,d){var S={range:g};return N.defined(d)&&(S.data=d),S}p.create=b;function P(g){var d=g;return N.defined(d)&&s.is(d.range)&&(N.undefined(d.command)||D.is(d.command))}p.is=P})(Ui=e.CodeLens||(e.CodeLens={}));var Xn;(function(p){function b(g,d){return{tabSize:g,insertSpaces:d}}p.create=b;function P(g){var d=g;return N.defined(d)&&N.uinteger(d.tabSize)&&N.boolean(d.insertSpaces)}p.is=P})(Xn=e.FormattingOptions||(e.FormattingOptions={}));var C;(function(p){function b(g,d,S){return{range:g,target:d,data:S}}p.create=b;function P(g){var d=g;return N.defined(d)&&s.is(d.range)&&(N.undefined(d.target)||N.string(d.target))}p.is=P})(C=e.DocumentLink||(e.DocumentLink={}));var I;(function(p){function b(g,d){return{range:g,parent:d}}p.create=b;function P(g){var d=g;return N.objectLiteral(d)&&s.is(d.range)&&(d.parent===void 0||p.is(d.parent))}p.is=P})(I=e.SelectionRange||(e.SelectionRange={}));var j;(function(p){p.namespace="namespace",p.type="type",p.class="class",p.enum="enum",p.interface="interface",p.struct="struct",p.typeParameter="typeParameter",p.parameter="parameter",p.variable="variable",p.property="property",p.enumMember="enumMember",p.event="event",p.function="function",p.method="method",p.macro="macro",p.keyword="keyword",p.modifier="modifier",p.comment="comment",p.string="string",p.number="number",p.regexp="regexp",p.operator="operator",p.decorator="decorator"})(j=e.SemanticTokenTypes||(e.SemanticTokenTypes={}));var z;(function(p){p.declaration="declaration",p.definition="definition",p.readonly="readonly",p.static="static",p.deprecated="deprecated",p.abstract="abstract",p.async="async",p.modification="modification",p.documentation="documentation",p.defaultLibrary="defaultLibrary"})(z=e.SemanticTokenModifiers||(e.SemanticTokenModifiers={}));var xe;(function(p){function b(P){var g=P;return N.objectLiteral(g)&&(g.resultId===void 0||typeof g.resultId=="string")&&Array.isArray(g.data)&&(g.data.length===0||typeof g.data[0]=="number")}p.is=b})(xe=e.SemanticTokens||(e.SemanticTokens={}));var Ie;(function(p){function b(g,d){return{range:g,text:d}}p.create=b;function P(g){var d=g;return d!=null&&s.is(d.range)&&N.string(d.text)}p.is=P})(Ie=e.InlineValueText||(e.InlineValueText={}));var Ze;(function(p){function b(g,d,S){return{range:g,variableName:d,caseSensitiveLookup:S}}p.create=b;function P(g){var d=g;return d!=null&&s.is(d.range)&&N.boolean(d.caseSensitiveLookup)&&(N.string(d.variableName)||d.variableName===void 0)}p.is=P})(Ze=e.InlineValueVariableLookup||(e.InlineValueVariableLookup={}));var ht;(function(p){function b(g,d){return{range:g,expression:d}}p.create=b;function P(g){var d=g;return d!=null&&s.is(d.range)&&(N.string(d.expression)||d.expression===void 0)}p.is=P})(ht=e.InlineValueEvaluatableExpression||(e.InlineValueEvaluatableExpression={}));var de;(function(p){function b(g,d){return{frameId:g,stoppedLocation:d}}p.create=b;function P(g){var d=g;return N.defined(d)&&s.is(g.stoppedLocation)}p.is=P})(de=e.InlineValueContext||(e.InlineValueContext={}));var Ue;(function(p){p.Type=1,p.Parameter=2;function b(P){return P===1||P===2}p.is=b})(Ue=e.InlayHintKind||(e.InlayHintKind={}));var Te;(function(p){function b(g){return{value:g}}p.create=b;function P(g){var d=g;return N.objectLiteral(d)&&(d.tooltip===void 0||N.string(d.tooltip)||or.is(d.tooltip))&&(d.location===void 0||u.is(d.location))&&(d.command===void 0||D.is(d.command))}p.is=P})(Te=e.InlayHintLabelPart||(e.InlayHintLabelPart={}));var ft;(function(p){function b(g,d,S){var x={position:g,label:d};return S!==void 0&&(x.kind=S),x}p.create=b;function P(g){var d=g;return N.objectLiteral(d)&&a.is(d.position)&&(N.string(d.label)||N.typedArray(d.label,Te.is))&&(d.kind===void 0||Ue.is(d.kind))&&d.textEdits===void 0||N.typedArray(d.textEdits,B.is)&&(d.tooltip===void 0||N.string(d.tooltip)||or.is(d.tooltip))&&(d.paddingLeft===void 0||N.boolean(d.paddingLeft))&&(d.paddingRight===void 0||N.boolean(d.paddingRight))}p.is=P})(ft=e.InlayHint||(e.InlayHint={}));var Gt;(function(p){function b(P){var g=P;return N.objectLiteral(g)&&n.is(g.uri)&&N.string(g.name)}p.is=b})(Gt=e.WorkspaceFolder||(e.WorkspaceFolder={})),e.EOL=[`
`,`\r
`,"\r"];var Pn;(function(p){function b(S,x,re,ut){return new on(S,x,re,ut)}p.create=b;function P(S){var x=S;return!!(N.defined(x)&&N.string(x.uri)&&(N.undefined(x.languageId)||N.string(x.languageId))&&N.uinteger(x.lineCount)&&N.func(x.getText)&&N.func(x.positionAt)&&N.func(x.offsetAt))}p.is=P;function g(S,x){for(var re=S.getText(),ut=d(x,function(Hi,Qa){var um=Hi.range.start.line-Qa.range.start.line;return um===0?Hi.range.start.character-Qa.range.start.character:um}),He=re.length,Mr=ut.length-1;Mr>=0;Mr--){var Lr=ut[Mr],kn=S.offsetAt(Lr.range.start),fe=S.offsetAt(Lr.range.end);if(fe<=He)re=re.substring(0,kn)+Lr.newText+re.substring(fe,re.length);else throw new Error("Overlapping edit");He=kn}return re}p.applyEdits=g;function d(S,x){if(S.length<=1)return S;var re=S.length/2|0,ut=S.slice(0,re),He=S.slice(re);d(ut,x),d(He,x);for(var Mr=0,Lr=0,kn=0;Mr<ut.length&&Lr<He.length;){var fe=x(ut[Mr],He[Lr]);fe<=0?S[kn++]=ut[Mr++]:S[kn++]=He[Lr++]}for(;Mr<ut.length;)S[kn++]=ut[Mr++];for(;Lr<He.length;)S[kn++]=He[Lr++];return S}})(Pn=e.TextDocument||(e.TextDocument={}));var on=function(){function p(b,P,g,d){this._uri=b,this._languageId=P,this._version=g,this._content=d,this._lineOffsets=void 0}return Object.defineProperty(p.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),p.prototype.getText=function(b){if(b){var P=this.offsetAt(b.start),g=this.offsetAt(b.end);return this._content.substring(P,g)}return this._content},p.prototype.update=function(b,P){this._content=b.text,this._version=P,this._lineOffsets=void 0},p.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var b=[],P=this._content,g=!0,d=0;d<P.length;d++){g&&(b.push(d),g=!1);var S=P.charAt(d);g=S==="\r"||S===`
`,S==="\r"&&d+1<P.length&&P.charAt(d+1)===`
`&&d++}g&&P.length>0&&b.push(P.length),this._lineOffsets=b}return this._lineOffsets},p.prototype.positionAt=function(b){b=Math.max(Math.min(b,this._content.length),0);var P=this.getLineOffsets(),g=0,d=P.length;if(d===0)return a.create(0,b);for(;g<d;){var S=Math.floor((g+d)/2);P[S]>b?d=S:g=S+1}var x=g-1;return a.create(x,b-P[x])},p.prototype.offsetAt=function(b){var P=this.getLineOffsets();if(b.line>=P.length)return this._content.length;if(b.line<0)return 0;var g=P[b.line],d=b.line+1<P.length?P[b.line+1]:this._content.length;return Math.max(Math.min(g+b.character,d),g)},Object.defineProperty(p.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),p}(),N;(function(p){var b=Object.prototype.toString;function P(fe){return typeof fe<"u"}p.defined=P;function g(fe){return typeof fe>"u"}p.undefined=g;function d(fe){return fe===!0||fe===!1}p.boolean=d;function S(fe){return b.call(fe)==="[object String]"}p.string=S;function x(fe){return b.call(fe)==="[object Number]"}p.number=x;function re(fe,Hi,Qa){return b.call(fe)==="[object Number]"&&Hi<=fe&&fe<=Qa}p.numberRange=re;function ut(fe){return b.call(fe)==="[object Number]"&&-2147483648<=fe&&fe<=2147483647}p.integer=ut;function He(fe){return b.call(fe)==="[object Number]"&&0<=fe&&fe<=2147483647}p.uinteger=He;function Mr(fe){return b.call(fe)==="[object Function]"}p.func=Mr;function Lr(fe){return fe!==null&&typeof fe=="object"}p.objectLiteral=Lr;function kn(fe,Hi){return Array.isArray(fe)&&fe.every(Hi)}p.typedArray=kn})(N||(N={}))})});var it=E(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});Zt.ProtocolNotificationType=Zt.ProtocolNotificationType0=Zt.ProtocolRequestType=Zt.ProtocolRequestType0=Zt.RegistrationType=Zt.MessageDirection=void 0;var Ji=xn(),H0;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(H0=Zt.MessageDirection||(Zt.MessageDirection={}));var ud=class{constructor(e){this.method=e}};Zt.RegistrationType=ud;var cd=class extends Ji.RequestType0{constructor(e){super(e)}};Zt.ProtocolRequestType0=cd;var ld=class extends Ji.RequestType{constructor(e){super(e,Ji.ParameterStructures.byName)}};Zt.ProtocolRequestType=ld;var dd=class extends Ji.NotificationType0{constructor(e){super(e)}};Zt.ProtocolNotificationType0=dd;var fd=class extends Ji.NotificationType{constructor(e){super(e,Ji.ParameterStructures.byName)}};Zt.ProtocolNotificationType=fd});var us=E(mt=>{"use strict";Object.defineProperty(mt,"__esModule",{value:!0});mt.objectLiteral=mt.typedArray=mt.stringArray=mt.array=mt.func=mt.error=mt.number=mt.string=mt.boolean=void 0;function W0(t){return t===!0||t===!1}mt.boolean=W0;function xm(t){return typeof t=="string"||t instanceof String}mt.string=xm;function K0(t){return typeof t=="number"||t instanceof Number}mt.number=K0;function B0(t){return t instanceof Error}mt.error=B0;function z0(t){return typeof t=="function"}mt.func=z0;function Im(t){return Array.isArray(t)}mt.array=Im;function V0(t){return Im(t)&&t.every(e=>xm(e))}mt.stringArray=V0;function Y0(t,e){return Array.isArray(t)&&t.every(e)}mt.typedArray=Y0;function X0(t){return t!==null&&typeof t=="object"}mt.objectLiteral=X0});var Lm=E(Jo=>{"use strict";Object.defineProperty(Jo,"__esModule",{value:!0});Jo.ImplementationRequest=void 0;var Mm=it(),J0;(function(t){t.method="textDocument/implementation",t.messageDirection=Mm.MessageDirection.clientToServer,t.type=new Mm.ProtocolRequestType(t.method)})(J0=Jo.ImplementationRequest||(Jo.ImplementationRequest={}))});var qm=E(Qo=>{"use strict";Object.defineProperty(Qo,"__esModule",{value:!0});Qo.TypeDefinitionRequest=void 0;var $m=it(),Q0;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=$m.MessageDirection.clientToServer,t.type=new $m.ProtocolRequestType(t.method)})(Q0=Qo.TypeDefinitionRequest||(Qo.TypeDefinitionRequest={}))});var Fm=E(Qn=>{"use strict";Object.defineProperty(Qn,"__esModule",{value:!0});Qn.DidChangeWorkspaceFoldersNotification=Qn.WorkspaceFoldersRequest=void 0;var cs=it(),Z0;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=cs.MessageDirection.serverToClient,t.type=new cs.ProtocolRequestType0(t.method)})(Z0=Qn.WorkspaceFoldersRequest||(Qn.WorkspaceFoldersRequest={}));var eC;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=cs.MessageDirection.clientToServer,t.type=new cs.ProtocolNotificationType(t.method)})(eC=Qn.DidChangeWorkspaceFoldersNotification||(Qn.DidChangeWorkspaceFoldersNotification={}))});var Gm=E(Zo=>{"use strict";Object.defineProperty(Zo,"__esModule",{value:!0});Zo.ConfigurationRequest=void 0;var jm=it(),tC;(function(t){t.method="workspace/configuration",t.messageDirection=jm.MessageDirection.serverToClient,t.type=new jm.ProtocolRequestType(t.method)})(tC=Zo.ConfigurationRequest||(Zo.ConfigurationRequest={}))});var Um=E(Zn=>{"use strict";Object.defineProperty(Zn,"__esModule",{value:!0});Zn.ColorPresentationRequest=Zn.DocumentColorRequest=void 0;var ls=it(),rC;(function(t){t.method="textDocument/documentColor",t.messageDirection=ls.MessageDirection.clientToServer,t.type=new ls.ProtocolRequestType(t.method)})(rC=Zn.DocumentColorRequest||(Zn.DocumentColorRequest={}));var nC;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=ls.MessageDirection.clientToServer,t.type=new ls.ProtocolRequestType(t.method)})(nC=Zn.ColorPresentationRequest||(Zn.ColorPresentationRequest={}))});var Wm=E(ea=>{"use strict";Object.defineProperty(ea,"__esModule",{value:!0});ea.FoldingRangeRequest=void 0;var Hm=it(),iC;(function(t){t.method="textDocument/foldingRange",t.messageDirection=Hm.MessageDirection.clientToServer,t.type=new Hm.ProtocolRequestType(t.method)})(iC=ea.FoldingRangeRequest||(ea.FoldingRangeRequest={}))});var Bm=E(ta=>{"use strict";Object.defineProperty(ta,"__esModule",{value:!0});ta.DeclarationRequest=void 0;var Km=it(),oC;(function(t){t.method="textDocument/declaration",t.messageDirection=Km.MessageDirection.clientToServer,t.type=new Km.ProtocolRequestType(t.method)})(oC=ta.DeclarationRequest||(ta.DeclarationRequest={}))});var Vm=E(ra=>{"use strict";Object.defineProperty(ra,"__esModule",{value:!0});ra.SelectionRangeRequest=void 0;var zm=it(),aC;(function(t){t.method="textDocument/selectionRange",t.messageDirection=zm.MessageDirection.clientToServer,t.type=new zm.ProtocolRequestType(t.method)})(aC=ra.SelectionRangeRequest||(ra.SelectionRangeRequest={}))});var Ym=E(Fr=>{"use strict";Object.defineProperty(Fr,"__esModule",{value:!0});Fr.WorkDoneProgressCancelNotification=Fr.WorkDoneProgressCreateRequest=Fr.WorkDoneProgress=void 0;var sC=xn(),ds=it(),uC;(function(t){t.type=new sC.ProgressType;function e(r){return r===t.type}t.is=e})(uC=Fr.WorkDoneProgress||(Fr.WorkDoneProgress={}));var cC;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=ds.MessageDirection.serverToClient,t.type=new ds.ProtocolRequestType(t.method)})(cC=Fr.WorkDoneProgressCreateRequest||(Fr.WorkDoneProgressCreateRequest={}));var lC;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=ds.MessageDirection.clientToServer,t.type=new ds.ProtocolNotificationType(t.method)})(lC=Fr.WorkDoneProgressCancelNotification||(Fr.WorkDoneProgressCancelNotification={}))});var Xm=E(jr=>{"use strict";Object.defineProperty(jr,"__esModule",{value:!0});jr.CallHierarchyOutgoingCallsRequest=jr.CallHierarchyIncomingCallsRequest=jr.CallHierarchyPrepareRequest=void 0;var Qi=it(),dC;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=Qi.MessageDirection.clientToServer,t.type=new Qi.ProtocolRequestType(t.method)})(dC=jr.CallHierarchyPrepareRequest||(jr.CallHierarchyPrepareRequest={}));var fC;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=Qi.MessageDirection.clientToServer,t.type=new Qi.ProtocolRequestType(t.method)})(fC=jr.CallHierarchyIncomingCallsRequest||(jr.CallHierarchyIncomingCallsRequest={}));var pC;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=Qi.MessageDirection.clientToServer,t.type=new Qi.ProtocolRequestType(t.method)})(pC=jr.CallHierarchyOutgoingCallsRequest||(jr.CallHierarchyOutgoingCallsRequest={}))});var Jm=E(gt=>{"use strict";Object.defineProperty(gt,"__esModule",{value:!0});gt.SemanticTokensRefreshRequest=gt.SemanticTokensRangeRequest=gt.SemanticTokensDeltaRequest=gt.SemanticTokensRequest=gt.SemanticTokensRegistrationType=gt.TokenFormat=void 0;var In=it(),hC;(function(t){t.Relative="relative"})(hC=gt.TokenFormat||(gt.TokenFormat={}));var fs;(function(t){t.method="textDocument/semanticTokens",t.type=new In.RegistrationType(t.method)})(fs=gt.SemanticTokensRegistrationType||(gt.SemanticTokensRegistrationType={}));var mC;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=In.MessageDirection.clientToServer,t.type=new In.ProtocolRequestType(t.method),t.registrationMethod=fs.method})(mC=gt.SemanticTokensRequest||(gt.SemanticTokensRequest={}));var gC;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=In.MessageDirection.clientToServer,t.type=new In.ProtocolRequestType(t.method),t.registrationMethod=fs.method})(gC=gt.SemanticTokensDeltaRequest||(gt.SemanticTokensDeltaRequest={}));var yC;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=In.MessageDirection.clientToServer,t.type=new In.ProtocolRequestType(t.method),t.registrationMethod=fs.method})(yC=gt.SemanticTokensRangeRequest||(gt.SemanticTokensRangeRequest={}));var vC;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=In.MessageDirection.clientToServer,t.type=new In.ProtocolRequestType0(t.method)})(vC=gt.SemanticTokensRefreshRequest||(gt.SemanticTokensRefreshRequest={}))});var Zm=E(na=>{"use strict";Object.defineProperty(na,"__esModule",{value:!0});na.ShowDocumentRequest=void 0;var Qm=it(),TC;(function(t){t.method="window/showDocument",t.messageDirection=Qm.MessageDirection.serverToClient,t.type=new Qm.ProtocolRequestType(t.method)})(TC=na.ShowDocumentRequest||(na.ShowDocumentRequest={}))});var tg=E(ia=>{"use strict";Object.defineProperty(ia,"__esModule",{value:!0});ia.LinkedEditingRangeRequest=void 0;var eg=it(),_C;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=eg.MessageDirection.clientToServer,t.type=new eg.ProtocolRequestType(t.method)})(_C=ia.LinkedEditingRangeRequest||(ia.LinkedEditingRangeRequest={}))});var rg=E(ot=>{"use strict";Object.defineProperty(ot,"__esModule",{value:!0});ot.WillDeleteFilesRequest=ot.DidDeleteFilesNotification=ot.DidRenameFilesNotification=ot.WillRenameFilesRequest=ot.DidCreateFilesNotification=ot.WillCreateFilesRequest=ot.FileOperationPatternKind=void 0;var _r=it(),RC;(function(t){t.file="file",t.folder="folder"})(RC=ot.FileOperationPatternKind||(ot.FileOperationPatternKind={}));var AC;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=_r.MessageDirection.clientToServer,t.type=new _r.ProtocolRequestType(t.method)})(AC=ot.WillCreateFilesRequest||(ot.WillCreateFilesRequest={}));var CC;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=_r.MessageDirection.clientToServer,t.type=new _r.ProtocolNotificationType(t.method)})(CC=ot.DidCreateFilesNotification||(ot.DidCreateFilesNotification={}));var bC;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=_r.MessageDirection.clientToServer,t.type=new _r.ProtocolRequestType(t.method)})(bC=ot.WillRenameFilesRequest||(ot.WillRenameFilesRequest={}));var EC;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=_r.MessageDirection.clientToServer,t.type=new _r.ProtocolNotificationType(t.method)})(EC=ot.DidRenameFilesNotification||(ot.DidRenameFilesNotification={}));var PC;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=_r.MessageDirection.clientToServer,t.type=new _r.ProtocolNotificationType(t.method)})(PC=ot.DidDeleteFilesNotification||(ot.DidDeleteFilesNotification={}));var kC;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=_r.MessageDirection.clientToServer,t.type=new _r.ProtocolRequestType(t.method)})(kC=ot.WillDeleteFilesRequest||(ot.WillDeleteFilesRequest={}))});var ig=E(Gr=>{"use strict";Object.defineProperty(Gr,"__esModule",{value:!0});Gr.MonikerRequest=Gr.MonikerKind=Gr.UniquenessLevel=void 0;var ng=it(),NC;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(NC=Gr.UniquenessLevel||(Gr.UniquenessLevel={}));var SC;(function(t){t.$import="import",t.$export="export",t.local="local"})(SC=Gr.MonikerKind||(Gr.MonikerKind={}));var wC;(function(t){t.method="textDocument/moniker",t.messageDirection=ng.MessageDirection.clientToServer,t.type=new ng.ProtocolRequestType(t.method)})(wC=Gr.MonikerRequest||(Gr.MonikerRequest={}))});var og=E(Ur=>{"use strict";Object.defineProperty(Ur,"__esModule",{value:!0});Ur.TypeHierarchySubtypesRequest=Ur.TypeHierarchySupertypesRequest=Ur.TypeHierarchyPrepareRequest=void 0;var Zi=it(),DC;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=Zi.MessageDirection.clientToServer,t.type=new Zi.ProtocolRequestType(t.method)})(DC=Ur.TypeHierarchyPrepareRequest||(Ur.TypeHierarchyPrepareRequest={}));var OC;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=Zi.MessageDirection.clientToServer,t.type=new Zi.ProtocolRequestType(t.method)})(OC=Ur.TypeHierarchySupertypesRequest||(Ur.TypeHierarchySupertypesRequest={}));var xC;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=Zi.MessageDirection.clientToServer,t.type=new Zi.ProtocolRequestType(t.method)})(xC=Ur.TypeHierarchySubtypesRequest||(Ur.TypeHierarchySubtypesRequest={}))});var ag=E(ei=>{"use strict";Object.defineProperty(ei,"__esModule",{value:!0});ei.InlineValueRefreshRequest=ei.InlineValueRequest=void 0;var ps=it(),IC;(function(t){t.method="textDocument/inlineValue",t.messageDirection=ps.MessageDirection.clientToServer,t.type=new ps.ProtocolRequestType(t.method)})(IC=ei.InlineValueRequest||(ei.InlineValueRequest={}));var MC;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=ps.MessageDirection.clientToServer,t.type=new ps.ProtocolRequestType0(t.method)})(MC=ei.InlineValueRefreshRequest||(ei.InlineValueRefreshRequest={}))});var sg=E(Hr=>{"use strict";Object.defineProperty(Hr,"__esModule",{value:!0});Hr.InlayHintRefreshRequest=Hr.InlayHintResolveRequest=Hr.InlayHintRequest=void 0;var eo=it(),LC;(function(t){t.method="textDocument/inlayHint",t.messageDirection=eo.MessageDirection.clientToServer,t.type=new eo.ProtocolRequestType(t.method)})(LC=Hr.InlayHintRequest||(Hr.InlayHintRequest={}));var $C;(function(t){t.method="inlayHint/resolve",t.messageDirection=eo.MessageDirection.clientToServer,t.type=new eo.ProtocolRequestType(t.method)})($C=Hr.InlayHintResolveRequest||(Hr.InlayHintResolveRequest={}));var qC;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=eo.MessageDirection.clientToServer,t.type=new eo.ProtocolRequestType0(t.method)})(qC=Hr.InlayHintRefreshRequest||(Hr.InlayHintRefreshRequest={}))});var cg=E(Ot=>{"use strict";Object.defineProperty(Ot,"__esModule",{value:!0});Ot.DiagnosticRefreshRequest=Ot.WorkspaceDiagnosticRequest=Ot.DocumentDiagnosticRequest=Ot.DocumentDiagnosticReportKind=Ot.DiagnosticServerCancellationData=void 0;var ug=xn(),FC=us(),to=it(),jC;(function(t){function e(r){let n=r;return n&&FC.boolean(n.retriggerRequest)}t.is=e})(jC=Ot.DiagnosticServerCancellationData||(Ot.DiagnosticServerCancellationData={}));var GC;(function(t){t.Full="full",t.Unchanged="unchanged"})(GC=Ot.DocumentDiagnosticReportKind||(Ot.DocumentDiagnosticReportKind={}));var UC;(function(t){t.method="textDocument/diagnostic",t.messageDirection=to.MessageDirection.clientToServer,t.type=new to.ProtocolRequestType(t.method),t.partialResult=new ug.ProgressType})(UC=Ot.DocumentDiagnosticRequest||(Ot.DocumentDiagnosticRequest={}));var HC;(function(t){t.method="workspace/diagnostic",t.messageDirection=to.MessageDirection.clientToServer,t.type=new to.ProtocolRequestType(t.method),t.partialResult=new ug.ProgressType})(HC=Ot.WorkspaceDiagnosticRequest||(Ot.WorkspaceDiagnosticRequest={}));var WC;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=to.MessageDirection.clientToServer,t.type=new to.ProtocolRequestType0(t.method)})(WC=Ot.DiagnosticRefreshRequest||(Ot.DiagnosticRefreshRequest={}))});var fg=E(_e=>{"use strict";Object.defineProperty(_e,"__esModule",{value:!0});_e.DidCloseNotebookDocumentNotification=_e.DidSaveNotebookDocumentNotification=_e.DidChangeNotebookDocumentNotification=_e.NotebookCellArrayChange=_e.DidOpenNotebookDocumentNotification=_e.NotebookDocumentSyncRegistrationType=_e.NotebookDocument=_e.NotebookCell=_e.ExecutionSummary=_e.NotebookCellKind=void 0;var oa=Xi(),Wr=us(),an=it(),lg;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(lg=_e.NotebookCellKind||(_e.NotebookCellKind={}));var dg;(function(t){function e(i,o){let a={executionOrder:i};return(o===!0||o===!1)&&(a.success=o),a}t.create=e;function r(i){let o=i;return Wr.objectLiteral(o)&&oa.uinteger.is(o.executionOrder)&&(o.success===void 0||Wr.boolean(o.success))}t.is=r;function n(i,o){return i===o?!0:i==null||o===null||o===void 0?!1:i.executionOrder===o.executionOrder&&i.success===o.success}t.equals=n})(dg=_e.ExecutionSummary||(_e.ExecutionSummary={}));var pd;(function(t){function e(o,a){return{kind:o,document:a}}t.create=e;function r(o){let a=o;return Wr.objectLiteral(a)&&lg.is(a.kind)&&oa.DocumentUri.is(a.document)&&(a.metadata===void 0||Wr.objectLiteral(a.metadata))}t.is=r;function n(o,a){let s=new Set;return o.document!==a.document&&s.add("document"),o.kind!==a.kind&&s.add("kind"),o.executionSummary!==a.executionSummary&&s.add("executionSummary"),(o.metadata!==void 0||a.metadata!==void 0)&&!i(o.metadata,a.metadata)&&s.add("metadata"),(o.executionSummary!==void 0||a.executionSummary!==void 0)&&!dg.equals(o.executionSummary,a.executionSummary)&&s.add("executionSummary"),s}t.diff=n;function i(o,a){if(o===a)return!0;if(o==null||a===null||a===void 0||typeof o!=typeof a||typeof o!="object")return!1;let s=Array.isArray(o),u=Array.isArray(a);if(s!==u)return!1;if(s&&u){if(o.length!==a.length)return!1;for(let c=0;c<o.length;c++)if(!i(o[c],a[c]))return!1}if(Wr.objectLiteral(o)&&Wr.objectLiteral(a)){let c=Object.keys(o),l=Object.keys(a);if(c.length!==l.length||(c.sort(),l.sort(),!i(c,l)))return!1;for(let f=0;f<c.length;f++){let y=c[f];if(!i(o[y],a[y]))return!1}}return!0}})(pd=_e.NotebookCell||(_e.NotebookCell={}));var KC;(function(t){function e(n,i,o,a){return{uri:n,notebookType:i,version:o,cells:a}}t.create=e;function r(n){let i=n;return Wr.objectLiteral(i)&&Wr.string(i.uri)&&oa.integer.is(i.version)&&Wr.typedArray(i.cells,pd.is)}t.is=r})(KC=_e.NotebookDocument||(_e.NotebookDocument={}));var aa;(function(t){t.method="notebookDocument/sync",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.RegistrationType(t.method)})(aa=_e.NotebookDocumentSyncRegistrationType||(_e.NotebookDocumentSyncRegistrationType={}));var BC;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=aa.method})(BC=_e.DidOpenNotebookDocumentNotification||(_e.DidOpenNotebookDocumentNotification={}));var zC;(function(t){function e(n){let i=n;return Wr.objectLiteral(i)&&oa.uinteger.is(i.start)&&oa.uinteger.is(i.deleteCount)&&(i.cells===void 0||Wr.typedArray(i.cells,pd.is))}t.is=e;function r(n,i,o){let a={start:n,deleteCount:i};return o!==void 0&&(a.cells=o),a}t.create=r})(zC=_e.NotebookCellArrayChange||(_e.NotebookCellArrayChange={}));var VC;(function(t){t.method="notebookDocument/didChange",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=aa.method})(VC=_e.DidChangeNotebookDocumentNotification||(_e.DidChangeNotebookDocumentNotification={}));var YC;(function(t){t.method="notebookDocument/didSave",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=aa.method})(YC=_e.DidSaveNotebookDocumentNotification||(_e.DidSaveNotebookDocumentNotification={}));var XC;(function(t){t.method="notebookDocument/didClose",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=aa.method})(XC=_e.DidCloseNotebookDocumentNotification||(_e.DidCloseNotebookDocumentNotification={}))});var Rg=E(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});m.WorkspaceSymbolRequest=m.CodeActionResolveRequest=m.CodeActionRequest=m.DocumentSymbolRequest=m.DocumentHighlightRequest=m.ReferencesRequest=m.DefinitionRequest=m.SignatureHelpRequest=m.SignatureHelpTriggerKind=m.HoverRequest=m.CompletionResolveRequest=m.CompletionRequest=m.CompletionTriggerKind=m.PublishDiagnosticsNotification=m.WatchKind=m.RelativePattern=m.FileChangeType=m.DidChangeWatchedFilesNotification=m.WillSaveTextDocumentWaitUntilRequest=m.WillSaveTextDocumentNotification=m.TextDocumentSaveReason=m.DidSaveTextDocumentNotification=m.DidCloseTextDocumentNotification=m.DidChangeTextDocumentNotification=m.TextDocumentContentChangeEvent=m.DidOpenTextDocumentNotification=m.TextDocumentSyncKind=m.TelemetryEventNotification=m.LogMessageNotification=m.ShowMessageRequest=m.ShowMessageNotification=m.MessageType=m.DidChangeConfigurationNotification=m.ExitNotification=m.ShutdownRequest=m.InitializedNotification=m.InitializeErrorCodes=m.InitializeRequest=m.WorkDoneProgressOptions=m.TextDocumentRegistrationOptions=m.StaticRegistrationOptions=m.PositionEncodingKind=m.FailureHandlingKind=m.ResourceOperationKind=m.UnregistrationRequest=m.RegistrationRequest=m.DocumentSelector=m.NotebookCellTextDocumentFilter=m.NotebookDocumentFilter=m.TextDocumentFilter=void 0;m.TypeHierarchySubtypesRequest=m.TypeHierarchyPrepareRequest=m.MonikerRequest=m.MonikerKind=m.UniquenessLevel=m.WillDeleteFilesRequest=m.DidDeleteFilesNotification=m.WillRenameFilesRequest=m.DidRenameFilesNotification=m.WillCreateFilesRequest=m.DidCreateFilesNotification=m.FileOperationPatternKind=m.LinkedEditingRangeRequest=m.ShowDocumentRequest=m.SemanticTokensRegistrationType=m.SemanticTokensRefreshRequest=m.SemanticTokensRangeRequest=m.SemanticTokensDeltaRequest=m.SemanticTokensRequest=m.TokenFormat=m.CallHierarchyPrepareRequest=m.CallHierarchyOutgoingCallsRequest=m.CallHierarchyIncomingCallsRequest=m.WorkDoneProgressCancelNotification=m.WorkDoneProgressCreateRequest=m.WorkDoneProgress=m.SelectionRangeRequest=m.DeclarationRequest=m.FoldingRangeRequest=m.ColorPresentationRequest=m.DocumentColorRequest=m.ConfigurationRequest=m.DidChangeWorkspaceFoldersNotification=m.WorkspaceFoldersRequest=m.TypeDefinitionRequest=m.ImplementationRequest=m.ApplyWorkspaceEditRequest=m.ExecuteCommandRequest=m.PrepareRenameRequest=m.RenameRequest=m.PrepareSupportDefaultBehavior=m.DocumentOnTypeFormattingRequest=m.DocumentRangeFormattingRequest=m.DocumentFormattingRequest=m.DocumentLinkResolveRequest=m.DocumentLinkRequest=m.CodeLensRefreshRequest=m.CodeLensResolveRequest=m.CodeLensRequest=m.WorkspaceSymbolResolveRequest=void 0;m.DidCloseNotebookDocumentNotification=m.DidSaveNotebookDocumentNotification=m.DidChangeNotebookDocumentNotification=m.NotebookCellArrayChange=m.DidOpenNotebookDocumentNotification=m.NotebookDocumentSyncRegistrationType=m.NotebookDocument=m.NotebookCell=m.ExecutionSummary=m.NotebookCellKind=m.DiagnosticRefreshRequest=m.WorkspaceDiagnosticRequest=m.DocumentDiagnosticRequest=m.DocumentDiagnosticReportKind=m.DiagnosticServerCancellationData=m.InlayHintRefreshRequest=m.InlayHintResolveRequest=m.InlayHintRequest=m.InlineValueRefreshRequest=m.InlineValueRequest=m.TypeHierarchySupertypesRequest=void 0;var F=it(),pg=Xi(),xt=us(),JC=Lm();Object.defineProperty(m,"ImplementationRequest",{enumerable:!0,get:function(){return JC.ImplementationRequest}});var QC=qm();Object.defineProperty(m,"TypeDefinitionRequest",{enumerable:!0,get:function(){return QC.TypeDefinitionRequest}});var hg=Fm();Object.defineProperty(m,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return hg.WorkspaceFoldersRequest}});Object.defineProperty(m,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return hg.DidChangeWorkspaceFoldersNotification}});var ZC=Gm();Object.defineProperty(m,"ConfigurationRequest",{enumerable:!0,get:function(){return ZC.ConfigurationRequest}});var mg=Um();Object.defineProperty(m,"DocumentColorRequest",{enumerable:!0,get:function(){return mg.DocumentColorRequest}});Object.defineProperty(m,"ColorPresentationRequest",{enumerable:!0,get:function(){return mg.ColorPresentationRequest}});var eb=Wm();Object.defineProperty(m,"FoldingRangeRequest",{enumerable:!0,get:function(){return eb.FoldingRangeRequest}});var tb=Bm();Object.defineProperty(m,"DeclarationRequest",{enumerable:!0,get:function(){return tb.DeclarationRequest}});var rb=Vm();Object.defineProperty(m,"SelectionRangeRequest",{enumerable:!0,get:function(){return rb.SelectionRangeRequest}});var hd=Ym();Object.defineProperty(m,"WorkDoneProgress",{enumerable:!0,get:function(){return hd.WorkDoneProgress}});Object.defineProperty(m,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return hd.WorkDoneProgressCreateRequest}});Object.defineProperty(m,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return hd.WorkDoneProgressCancelNotification}});var md=Xm();Object.defineProperty(m,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return md.CallHierarchyIncomingCallsRequest}});Object.defineProperty(m,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return md.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(m,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return md.CallHierarchyPrepareRequest}});var ro=Jm();Object.defineProperty(m,"TokenFormat",{enumerable:!0,get:function(){return ro.TokenFormat}});Object.defineProperty(m,"SemanticTokensRequest",{enumerable:!0,get:function(){return ro.SemanticTokensRequest}});Object.defineProperty(m,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return ro.SemanticTokensDeltaRequest}});Object.defineProperty(m,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return ro.SemanticTokensRangeRequest}});Object.defineProperty(m,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return ro.SemanticTokensRefreshRequest}});Object.defineProperty(m,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return ro.SemanticTokensRegistrationType}});var nb=Zm();Object.defineProperty(m,"ShowDocumentRequest",{enumerable:!0,get:function(){return nb.ShowDocumentRequest}});var ib=tg();Object.defineProperty(m,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return ib.LinkedEditingRangeRequest}});var Ai=rg();Object.defineProperty(m,"FileOperationPatternKind",{enumerable:!0,get:function(){return Ai.FileOperationPatternKind}});Object.defineProperty(m,"DidCreateFilesNotification",{enumerable:!0,get:function(){return Ai.DidCreateFilesNotification}});Object.defineProperty(m,"WillCreateFilesRequest",{enumerable:!0,get:function(){return Ai.WillCreateFilesRequest}});Object.defineProperty(m,"DidRenameFilesNotification",{enumerable:!0,get:function(){return Ai.DidRenameFilesNotification}});Object.defineProperty(m,"WillRenameFilesRequest",{enumerable:!0,get:function(){return Ai.WillRenameFilesRequest}});Object.defineProperty(m,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return Ai.DidDeleteFilesNotification}});Object.defineProperty(m,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return Ai.WillDeleteFilesRequest}});var gd=ig();Object.defineProperty(m,"UniquenessLevel",{enumerable:!0,get:function(){return gd.UniquenessLevel}});Object.defineProperty(m,"MonikerKind",{enumerable:!0,get:function(){return gd.MonikerKind}});Object.defineProperty(m,"MonikerRequest",{enumerable:!0,get:function(){return gd.MonikerRequest}});var yd=og();Object.defineProperty(m,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return yd.TypeHierarchyPrepareRequest}});Object.defineProperty(m,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return yd.TypeHierarchySubtypesRequest}});Object.defineProperty(m,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return yd.TypeHierarchySupertypesRequest}});var gg=ag();Object.defineProperty(m,"InlineValueRequest",{enumerable:!0,get:function(){return gg.InlineValueRequest}});Object.defineProperty(m,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return gg.InlineValueRefreshRequest}});var vd=sg();Object.defineProperty(m,"InlayHintRequest",{enumerable:!0,get:function(){return vd.InlayHintRequest}});Object.defineProperty(m,"InlayHintResolveRequest",{enumerable:!0,get:function(){return vd.InlayHintResolveRequest}});Object.defineProperty(m,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return vd.InlayHintRefreshRequest}});var sa=cg();Object.defineProperty(m,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return sa.DiagnosticServerCancellationData}});Object.defineProperty(m,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return sa.DocumentDiagnosticReportKind}});Object.defineProperty(m,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return sa.DocumentDiagnosticRequest}});Object.defineProperty(m,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return sa.WorkspaceDiagnosticRequest}});Object.defineProperty(m,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return sa.DiagnosticRefreshRequest}});var sn=fg();Object.defineProperty(m,"NotebookCellKind",{enumerable:!0,get:function(){return sn.NotebookCellKind}});Object.defineProperty(m,"ExecutionSummary",{enumerable:!0,get:function(){return sn.ExecutionSummary}});Object.defineProperty(m,"NotebookCell",{enumerable:!0,get:function(){return sn.NotebookCell}});Object.defineProperty(m,"NotebookDocument",{enumerable:!0,get:function(){return sn.NotebookDocument}});Object.defineProperty(m,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return sn.NotebookDocumentSyncRegistrationType}});Object.defineProperty(m,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return sn.DidOpenNotebookDocumentNotification}});Object.defineProperty(m,"NotebookCellArrayChange",{enumerable:!0,get:function(){return sn.NotebookCellArrayChange}});Object.defineProperty(m,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return sn.DidChangeNotebookDocumentNotification}});Object.defineProperty(m,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return sn.DidSaveNotebookDocumentNotification}});Object.defineProperty(m,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return sn.DidCloseNotebookDocumentNotification}});var yg;(function(t){function e(r){let n=r;return xt.string(n.language)||xt.string(n.scheme)||xt.string(n.pattern)}t.is=e})(yg=m.TextDocumentFilter||(m.TextDocumentFilter={}));var vg;(function(t){function e(r){let n=r;return xt.objectLiteral(n)&&(xt.string(n.notebookType)||xt.string(n.scheme)||xt.string(n.pattern))}t.is=e})(vg=m.NotebookDocumentFilter||(m.NotebookDocumentFilter={}));var Tg;(function(t){function e(r){let n=r;return xt.objectLiteral(n)&&(xt.string(n.notebook)||vg.is(n.notebook))&&(n.language===void 0||xt.string(n.language))}t.is=e})(Tg=m.NotebookCellTextDocumentFilter||(m.NotebookCellTextDocumentFilter={}));var _g;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!xt.string(n)&&!yg.is(n)&&!Tg.is(n))return!1;return!0}t.is=e})(_g=m.DocumentSelector||(m.DocumentSelector={}));var ob;(function(t){t.method="client/registerCapability",t.messageDirection=F.MessageDirection.serverToClient,t.type=new F.ProtocolRequestType(t.method)})(ob=m.RegistrationRequest||(m.RegistrationRequest={}));var ab;(function(t){t.method="client/unregisterCapability",t.messageDirection=F.MessageDirection.serverToClient,t.type=new F.ProtocolRequestType(t.method)})(ab=m.UnregistrationRequest||(m.UnregistrationRequest={}));var sb;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(sb=m.ResourceOperationKind||(m.ResourceOperationKind={}));var ub;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(ub=m.FailureHandlingKind||(m.FailureHandlingKind={}));var cb;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(cb=m.PositionEncodingKind||(m.PositionEncodingKind={}));var lb;(function(t){function e(r){let n=r;return n&&xt.string(n.id)&&n.id.length>0}t.hasId=e})(lb=m.StaticRegistrationOptions||(m.StaticRegistrationOptions={}));var db;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||_g.is(n.documentSelector))}t.is=e})(db=m.TextDocumentRegistrationOptions||(m.TextDocumentRegistrationOptions={}));var fb;(function(t){function e(n){let i=n;return xt.objectLiteral(i)&&(i.workDoneProgress===void 0||xt.boolean(i.workDoneProgress))}t.is=e;function r(n){let i=n;return i&&xt.boolean(i.workDoneProgress)}t.hasWorkDoneProgress=r})(fb=m.WorkDoneProgressOptions||(m.WorkDoneProgressOptions={}));var pb;(function(t){t.method="initialize",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(pb=m.InitializeRequest||(m.InitializeRequest={}));var hb;(function(t){t.unknownProtocolVersion=1})(hb=m.InitializeErrorCodes||(m.InitializeErrorCodes={}));var mb;(function(t){t.method="initialized",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolNotificationType(t.method)})(mb=m.InitializedNotification||(m.InitializedNotification={}));var gb;(function(t){t.method="shutdown",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType0(t.method)})(gb=m.ShutdownRequest||(m.ShutdownRequest={}));var yb;(function(t){t.method="exit",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolNotificationType0(t.method)})(yb=m.ExitNotification||(m.ExitNotification={}));var vb;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolNotificationType(t.method)})(vb=m.DidChangeConfigurationNotification||(m.DidChangeConfigurationNotification={}));var Tb;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4})(Tb=m.MessageType||(m.MessageType={}));var _b;(function(t){t.method="window/showMessage",t.messageDirection=F.MessageDirection.serverToClient,t.type=new F.ProtocolNotificationType(t.method)})(_b=m.ShowMessageNotification||(m.ShowMessageNotification={}));var Rb;(function(t){t.method="window/showMessageRequest",t.messageDirection=F.MessageDirection.serverToClient,t.type=new F.ProtocolRequestType(t.method)})(Rb=m.ShowMessageRequest||(m.ShowMessageRequest={}));var Ab;(function(t){t.method="window/logMessage",t.messageDirection=F.MessageDirection.serverToClient,t.type=new F.ProtocolNotificationType(t.method)})(Ab=m.LogMessageNotification||(m.LogMessageNotification={}));var Cb;(function(t){t.method="telemetry/event",t.messageDirection=F.MessageDirection.serverToClient,t.type=new F.ProtocolNotificationType(t.method)})(Cb=m.TelemetryEventNotification||(m.TelemetryEventNotification={}));var bb;(function(t){t.None=0,t.Full=1,t.Incremental=2})(bb=m.TextDocumentSyncKind||(m.TextDocumentSyncKind={}));var Eb;(function(t){t.method="textDocument/didOpen",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolNotificationType(t.method)})(Eb=m.DidOpenTextDocumentNotification||(m.DidOpenTextDocumentNotification={}));var Pb;(function(t){function e(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}t.isIncremental=e;function r(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}t.isFull=r})(Pb=m.TextDocumentContentChangeEvent||(m.TextDocumentContentChangeEvent={}));var kb;(function(t){t.method="textDocument/didChange",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolNotificationType(t.method)})(kb=m.DidChangeTextDocumentNotification||(m.DidChangeTextDocumentNotification={}));var Nb;(function(t){t.method="textDocument/didClose",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolNotificationType(t.method)})(Nb=m.DidCloseTextDocumentNotification||(m.DidCloseTextDocumentNotification={}));var Sb;(function(t){t.method="textDocument/didSave",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolNotificationType(t.method)})(Sb=m.DidSaveTextDocumentNotification||(m.DidSaveTextDocumentNotification={}));var wb;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(wb=m.TextDocumentSaveReason||(m.TextDocumentSaveReason={}));var Db;(function(t){t.method="textDocument/willSave",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolNotificationType(t.method)})(Db=m.WillSaveTextDocumentNotification||(m.WillSaveTextDocumentNotification={}));var Ob;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(Ob=m.WillSaveTextDocumentWaitUntilRequest||(m.WillSaveTextDocumentWaitUntilRequest={}));var xb;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolNotificationType(t.method)})(xb=m.DidChangeWatchedFilesNotification||(m.DidChangeWatchedFilesNotification={}));var Ib;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(Ib=m.FileChangeType||(m.FileChangeType={}));var Mb;(function(t){function e(r){let n=r;return xt.objectLiteral(n)&&(pg.URI.is(n.baseUri)||pg.WorkspaceFolder.is(n.baseUri))&&xt.string(n.pattern)}t.is=e})(Mb=m.RelativePattern||(m.RelativePattern={}));var Lb;(function(t){t.Create=1,t.Change=2,t.Delete=4})(Lb=m.WatchKind||(m.WatchKind={}));var $b;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=F.MessageDirection.serverToClient,t.type=new F.ProtocolNotificationType(t.method)})($b=m.PublishDiagnosticsNotification||(m.PublishDiagnosticsNotification={}));var qb;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(qb=m.CompletionTriggerKind||(m.CompletionTriggerKind={}));var Fb;(function(t){t.method="textDocument/completion",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(Fb=m.CompletionRequest||(m.CompletionRequest={}));var jb;(function(t){t.method="completionItem/resolve",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(jb=m.CompletionResolveRequest||(m.CompletionResolveRequest={}));var Gb;(function(t){t.method="textDocument/hover",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(Gb=m.HoverRequest||(m.HoverRequest={}));var Ub;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(Ub=m.SignatureHelpTriggerKind||(m.SignatureHelpTriggerKind={}));var Hb;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(Hb=m.SignatureHelpRequest||(m.SignatureHelpRequest={}));var Wb;(function(t){t.method="textDocument/definition",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(Wb=m.DefinitionRequest||(m.DefinitionRequest={}));var Kb;(function(t){t.method="textDocument/references",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(Kb=m.ReferencesRequest||(m.ReferencesRequest={}));var Bb;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(Bb=m.DocumentHighlightRequest||(m.DocumentHighlightRequest={}));var zb;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(zb=m.DocumentSymbolRequest||(m.DocumentSymbolRequest={}));var Vb;(function(t){t.method="textDocument/codeAction",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(Vb=m.CodeActionRequest||(m.CodeActionRequest={}));var Yb;(function(t){t.method="codeAction/resolve",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(Yb=m.CodeActionResolveRequest||(m.CodeActionResolveRequest={}));var Xb;(function(t){t.method="workspace/symbol",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(Xb=m.WorkspaceSymbolRequest||(m.WorkspaceSymbolRequest={}));var Jb;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(Jb=m.WorkspaceSymbolResolveRequest||(m.WorkspaceSymbolResolveRequest={}));var Qb;(function(t){t.method="textDocument/codeLens",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(Qb=m.CodeLensRequest||(m.CodeLensRequest={}));var Zb;(function(t){t.method="codeLens/resolve",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(Zb=m.CodeLensResolveRequest||(m.CodeLensResolveRequest={}));var eE;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=F.MessageDirection.serverToClient,t.type=new F.ProtocolRequestType0(t.method)})(eE=m.CodeLensRefreshRequest||(m.CodeLensRefreshRequest={}));var tE;(function(t){t.method="textDocument/documentLink",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(tE=m.DocumentLinkRequest||(m.DocumentLinkRequest={}));var rE;(function(t){t.method="documentLink/resolve",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(rE=m.DocumentLinkResolveRequest||(m.DocumentLinkResolveRequest={}));var nE;(function(t){t.method="textDocument/formatting",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(nE=m.DocumentFormattingRequest||(m.DocumentFormattingRequest={}));var iE;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(iE=m.DocumentRangeFormattingRequest||(m.DocumentRangeFormattingRequest={}));var oE;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(oE=m.DocumentOnTypeFormattingRequest||(m.DocumentOnTypeFormattingRequest={}));var aE;(function(t){t.Identifier=1})(aE=m.PrepareSupportDefaultBehavior||(m.PrepareSupportDefaultBehavior={}));var sE;(function(t){t.method="textDocument/rename",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(sE=m.RenameRequest||(m.RenameRequest={}));var uE;(function(t){t.method="textDocument/prepareRename",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(uE=m.PrepareRenameRequest||(m.PrepareRenameRequest={}));var cE;(function(t){t.method="workspace/executeCommand",t.messageDirection=F.MessageDirection.clientToServer,t.type=new F.ProtocolRequestType(t.method)})(cE=m.ExecuteCommandRequest||(m.ExecuteCommandRequest={}));var lE;(function(t){t.method="workspace/applyEdit",t.messageDirection=F.MessageDirection.serverToClient,t.type=new F.ProtocolRequestType("workspace/applyEdit")})(lE=m.ApplyWorkspaceEditRequest||(m.ApplyWorkspaceEditRequest={}))});var Cg=E(hs=>{"use strict";Object.defineProperty(hs,"__esModule",{value:!0});hs.createProtocolConnection=void 0;var Ag=xn();function dE(t,e,r,n){return Ag.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Ag.createMessageConnection)(t,e,r,n)}hs.createProtocolConnection=dE});var bg=E(er=>{"use strict";var fE=er&&er.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),ms=er&&er.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&fE(e,t,r)};Object.defineProperty(er,"__esModule",{value:!0});er.LSPErrorCodes=er.createProtocolConnection=void 0;ms(xn(),er);ms(Xi(),er);ms(it(),er);ms(Rg(),er);var pE=Cg();Object.defineProperty(er,"createProtocolConnection",{enumerable:!0,get:function(){return pE.createProtocolConnection}});var hE;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(hE=er.LSPErrorCodes||(er.LSPErrorCodes={}))});var yt=E(un=>{"use strict";var mE=un&&un.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Eg=un&&un.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&mE(e,t,r)};Object.defineProperty(un,"__esModule",{value:!0});un.createProtocolConnection=void 0;var gE=sd();Eg(sd(),un);Eg(bg(),un);function yE(t,e,r,n){return(0,gE.createMessageConnection)(t,e,r,n)}un.createProtocolConnection=yE});var _d=E(ti=>{"use strict";Object.defineProperty(ti,"__esModule",{value:!0});ti.SemanticTokensBuilder=ti.SemanticTokensDiff=ti.SemanticTokensFeature=void 0;var gs=yt(),vE=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(gs.SemanticTokensRefreshRequest.type),on:e=>{let r=gs.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=gs.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=gs.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};ti.SemanticTokensFeature=vE;var ys=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let i=e-1,o=r-1;for(;i>=n&&o>=n&&this.originalSequence[i]===this.modifiedSequence[o];)i--,o--;(i<n||o<n)&&(i++,o++);let a=i-n+1,s=this.modifiedSequence.slice(n,o+1);return s.length===1&&s[0]===this.originalSequence[i]?[{start:n,deleteCount:a-1}]:[{start:n,deleteCount:a,data:s}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};ti.SemanticTokensDiff=ys;var Td=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,i,o){let a=e,s=r;this._dataLen>0&&(a-=this._prevLine,a===0&&(s-=this._prevChar)),this._data[this._dataLen++]=a,this._data[this._dataLen++]=s,this._data[this._dataLen++]=n,this._data[this._dataLen++]=i,this._data[this._dataLen++]=o,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new ys(this._prevData,this._data).computeDiff()}:this.build()}};ti.SemanticTokensBuilder=Td});var Ad=E(vs=>{"use strict";Object.defineProperty(vs,"__esModule",{value:!0});vs.TextDocuments=void 0;var Ci=yt(),Rd=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new Ci.Emitter,this._onDidOpen=new Ci.Emitter,this._onDidClose=new Ci.Emitter,this._onDidSave=new Ci.Emitter,this._onWillSave=new Ci.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=Ci.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let i=n.textDocument,o=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,o);let a=Object.freeze({document:o});this._onDidOpen.fire(a),this._onDidChangeContent.fire(a)})),r.push(e.onDidChangeTextDocument(n=>{let i=n.textDocument,o=n.contentChanges;if(o.length===0)return;let{version:a}=i;if(a==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let s=this._syncedDocuments.get(i.uri);s!==void 0&&(s=this._configuration.update(s,o,a),this._syncedDocuments.set(i.uri,s),this._onDidChangeContent.fire(Object.freeze({document:s})))})),r.push(e.onDidCloseTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),r.push(e.onWillSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,i)=>{let o=this._syncedDocuments.get(n.textDocument.uri);return o!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:o,reason:n.reason}),i):[]})),r.push(e.onDidSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),Ci.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};vs.TextDocuments=Rd});var bd=E(no=>{"use strict";Object.defineProperty(no,"__esModule",{value:!0});no.NotebookDocuments=no.NotebookSyncFeature=void 0;var Rr=yt(),Pg=Ad(),TE=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(Rr.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(Rr.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(Rr.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(Rr.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};no.NotebookSyncFeature=TE;var ri=class{onDidOpenTextDocument(e){return this.openHandler=e,Rr.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,Rr.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,Rr.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return ri.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return ri.NULL_DISPOSE}onDidSaveTextDocument(){return ri.NULL_DISPOSE}};ri.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var Cd=class{constructor(e){e instanceof Pg.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new Pg.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new Rr.Emitter,this._onDidChange=new Rr.Emitter,this._onDidSave=new Rr.Emitter,this._onDidClose=new Rr.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new ri,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(let o of i.cellTextDocuments)r.openTextDocument({textDocument:o});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o===void 0)return;o.version=i.notebookDocument.version;let a=o.metadata,s=!1,u=i.change;u.metadata!==void 0&&(s=!0,o.metadata=u.metadata);let c=[],l=[],f=[],y=[];if(u.cells!==void 0){let k=u.cells;if(k.structure!==void 0){let R=k.structure.array;if(o.cells.splice(R.start,R.deleteCount,...R.cells!==void 0?R.cells:[]),k.structure.didOpen!==void 0)for(let T of k.structure.didOpen)r.openTextDocument({textDocument:T}),c.push(T.uri);if(k.structure.didClose)for(let T of k.structure.didClose)r.closeTextDocument({textDocument:T}),l.push(T.uri)}if(k.data!==void 0){let R=new Map(k.data.map(T=>[T.document,T]));for(let T=0;T<=o.cells.length;T++){let D=R.get(o.cells[T].document);if(D!==void 0){let B=o.cells.splice(T,1,D);if(f.push({old:B[0],new:D}),R.delete(D.document),R.size===0)break}}}if(k.textContent!==void 0)for(let R of k.textContent)r.changeTextDocument({textDocument:R.document,contentChanges:R.changes}),y.push(R.document.uri)}this.updateCellMap(o);let _={notebookDocument:o};s&&(_.metadata={old:a,new:o.metadata});let h=[];for(let k of c)h.push(this.getNotebookCell(k));let A=[];for(let k of l)A.push(this.getNotebookCell(k));let w=[];for(let k of y)w.push(this.getNotebookCell(k));(h.length>0||A.length>0||f.length>0||w.length>0)&&(_.cells={added:h,removed:A,changed:{data:f,textContent:w}}),(_.metadata!==void 0||_.cells!==void 0)&&this._onDidChange.fire(_)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);o!==void 0&&this._onDidSave.fire(o)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o!==void 0){this._onDidClose.fire(o);for(let a of i.cellTextDocuments)r.closeTextDocument({textDocument:a});this.notebookDocuments.delete(i.notebookDocument.uri);for(let a of o.cells)this.notebookCellMap.delete(a.document)}})),Rr.Disposable.create(()=>{n.forEach(i=>i.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};no.NotebookDocuments=Cd});var Ed=E(vt=>{"use strict";Object.defineProperty(vt,"__esModule",{value:!0});vt.thenable=vt.typedArray=vt.stringArray=vt.array=vt.func=vt.error=vt.number=vt.string=vt.boolean=void 0;function _E(t){return t===!0||t===!1}vt.boolean=_E;function kg(t){return typeof t=="string"||t instanceof String}vt.string=kg;function RE(t){return typeof t=="number"||t instanceof Number}vt.number=RE;function AE(t){return t instanceof Error}vt.error=AE;function Ng(t){return typeof t=="function"}vt.func=Ng;function Sg(t){return Array.isArray(t)}vt.array=Sg;function CE(t){return Sg(t)&&t.every(e=>kg(e))}vt.stringArray=CE;function bE(t,e){return Array.isArray(t)&&t.every(e)}vt.typedArray=bE;function EE(t){return t&&Ng(t.then)}vt.thenable=EE});var Pd=E(Ar=>{"use strict";Object.defineProperty(Ar,"__esModule",{value:!0});Ar.generateUuid=Ar.parse=Ar.isUUID=Ar.v4=Ar.empty=void 0;var ua=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},ne=class extends ua{constructor(){super([ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex(),"-",ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex(),"-","4",ne._randomHex(),ne._randomHex(),ne._randomHex(),"-",ne._oneOf(ne._timeHighBits),ne._randomHex(),ne._randomHex(),ne._randomHex(),"-",ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex(),ne._randomHex()].join(""))}static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return ne._oneOf(ne._chars)}};ne._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];ne._timeHighBits=["8","9","a","b"];Ar.empty=new ua("00000000-0000-0000-0000-000000000000");function wg(){return new ne}Ar.v4=wg;var PE=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function Dg(t){return PE.test(t)}Ar.isUUID=Dg;function kE(t){if(!Dg(t))throw new Error("invalid uuid");return new ua(t)}Ar.parse=kE;function NE(){return wg().asHex()}Ar.generateUuid=NE});var Og=E(ii=>{"use strict";Object.defineProperty(ii,"__esModule",{value:!0});ii.attachPartialResult=ii.ProgressFeature=ii.attachWorkDone=void 0;var ni=yt(),SE=Pd(),cn=class{constructor(e,r){this._connection=e,this._token=r,cn.Instances.set(this._token,this)}begin(e,r,n,i){let o={kind:"begin",title:e,percentage:r,message:n,cancellable:i};this._connection.sendProgress(ni.WorkDoneProgress.type,this._token,o)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(ni.WorkDoneProgress.type,this._token,n)}done(){cn.Instances.delete(this._token),this._connection.sendProgress(ni.WorkDoneProgress.type,this._token,{kind:"end"})}};cn.Instances=new Map;var Ts=class extends cn{constructor(e,r){super(e,r),this._source=new ni.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},ca=class{constructor(){}begin(){}report(){}done(){}},_s=class extends ca{constructor(){super(),this._source=new ni.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function wE(t,e){if(e===void 0||e.workDoneToken===void 0)return new ca;let r=e.workDoneToken;return delete e.workDoneToken,new cn(t,r)}ii.attachWorkDone=wE;var DE=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){super.initialize(e),e?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(ni.WorkDoneProgressCancelNotification.type,r=>{let n=cn.Instances.get(r.token);(n instanceof Ts||n instanceof _s)&&n.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new ca:new cn(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,SE.generateUuid)();return this.connection.sendRequest(ni.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new Ts(this.connection,e))}else return Promise.resolve(new _s)}};ii.ProgressFeature=DE;var kd;(function(t){t.type=new ni.ProgressType})(kd||(kd={}));var Nd=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(kd.type,this._token,e)}};function OE(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new Nd(t,r)}ii.attachPartialResult=OE});var xg=E(Rs=>{"use strict";Object.defineProperty(Rs,"__esModule",{value:!0});Rs.ConfigurationFeature=void 0;var xE=yt(),IE=Ed(),ME=t=>class extends t{getConfiguration(e){return e?IE.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(xE.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};Rs.ConfigurationFeature=ME});var Ig=E(Cs=>{"use strict";Object.defineProperty(Cs,"__esModule",{value:!0});Cs.WorkspaceFoldersFeature=void 0;var As=yt(),LE=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new As.Emitter,this.connection.onNotification(As.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){super.fillServerCapabilities(e);let r=e.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(As.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(As.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Cs.WorkspaceFoldersFeature=LE});var Mg=E(bs=>{"use strict";Object.defineProperty(bs,"__esModule",{value:!0});bs.CallHierarchyFeature=void 0;var Sd=yt(),$E=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(Sd.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=Sd.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=Sd.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};bs.CallHierarchyFeature=$E});var Lg=E(Es=>{"use strict";Object.defineProperty(Es,"__esModule",{value:!0});Es.ShowDocumentFeature=void 0;var qE=yt(),FE=t=>class extends t{showDocument(e){return this.connection.sendRequest(qE.ShowDocumentRequest.type,e)}};Es.ShowDocumentFeature=FE});var $g=E(Ps=>{"use strict";Object.defineProperty(Ps,"__esModule",{value:!0});Ps.FileOperationsFeature=void 0;var io=yt(),jE=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(io.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(io.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(io.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(io.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(io.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(io.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};Ps.FileOperationsFeature=jE});var qg=E(ks=>{"use strict";Object.defineProperty(ks,"__esModule",{value:!0});ks.LinkedEditingRangeFeature=void 0;var GE=yt(),UE=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(GE.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};ks.LinkedEditingRangeFeature=UE});var Fg=E(Ns=>{"use strict";Object.defineProperty(Ns,"__esModule",{value:!0});Ns.TypeHierarchyFeature=void 0;var wd=yt(),HE=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(wd.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=wd.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=wd.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Ns.TypeHierarchyFeature=HE});var Gg=E(Ss=>{"use strict";Object.defineProperty(Ss,"__esModule",{value:!0});Ss.InlineValueFeature=void 0;var jg=yt(),WE=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(jg.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(jg.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};Ss.InlineValueFeature=WE});var Ug=E(ws=>{"use strict";Object.defineProperty(ws,"__esModule",{value:!0});ws.InlayHintFeature=void 0;var Dd=yt(),KE=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(Dd.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(Dd.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(Dd.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};ws.InlayHintFeature=KE});var Hg=E(Ds=>{"use strict";Object.defineProperty(Ds,"__esModule",{value:!0});Ds.DiagnosticFeature=void 0;var la=yt(),BE=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(la.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(la.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(la.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest(la.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(la.WorkspaceDiagnosticRequest.partialResult,r)))}}};Ds.DiagnosticFeature=BE});var Wg=E(Os=>{"use strict";Object.defineProperty(Os,"__esModule",{value:!0});Os.MonikerFeature=void 0;var zE=yt(),VE=t=>class extends t{get moniker(){return{on:e=>{let r=zE.MonikerRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Os.MonikerFeature=VE});var ny=E(me=>{"use strict";Object.defineProperty(me,"__esModule",{value:!0});me.createConnection=me.combineFeatures=me.combineNotebooksFeatures=me.combineLanguagesFeatures=me.combineWorkspaceFeatures=me.combineWindowFeatures=me.combineClientFeatures=me.combineTracerFeatures=me.combineTelemetryFeatures=me.combineConsoleFeatures=me._NotebooksImpl=me._LanguagesImpl=me.BulkUnregistration=me.BulkRegistration=me.ErrorMessageTracker=void 0;var U=yt(),Cr=Ed(),xd=Pd(),te=Og(),YE=xg(),XE=Ig(),JE=Mg(),QE=_d(),ZE=Lg(),eP=$g(),tP=qg(),rP=Fg(),nP=Gg(),iP=Ug(),oP=Hg(),aP=bd(),sP=Wg();function Od(t){if(t!==null)return t}var Id=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};me.ErrorMessageTracker=Id;var xs=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(U.MessageType.Error,e)}warn(e){this.send(U.MessageType.Warning,e)}info(e){this.send(U.MessageType.Info,e)}log(e){this.send(U.MessageType.Log,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(U.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,U.RAL)().console.error("Sending log message failed")})}},Md=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:U.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(U.ShowMessageRequest.type,n).then(Od)}showWarningMessage(e,...r){let n={type:U.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(U.ShowMessageRequest.type,n).then(Od)}showInformationMessage(e,...r){let n={type:U.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(U.ShowMessageRequest.type,n).then(Od)}},Kg=(0,ZE.ShowDocumentFeature)((0,te.ProgressFeature)(Md)),uP;(function(t){function e(){return new Is}t.create=e})(uP=me.BulkRegistration||(me.BulkRegistration={}));var Is=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=Cr.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let i=xd.generateUuid();this._registrations.push({id:i,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},cP;(function(t){function e(){return new da(void 0,[])}t.create=e})(cP=me.BulkUnregistration||(me.BulkUnregistration={}));var da=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(U.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=Cr.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let i={unregisterations:[n]};return this._connection.sendRequest(U.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(r)},o=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},Ms=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof Is?this.registerMany(e):e instanceof da?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let i=Cr.string(r)?r:r.method,o=xd.generateUuid(),a={registrations:[{id:o,method:i,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(U.RegistrationRequest.type,a).then(s=>(e.add({id:o,method:i}),e),s=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(s)))}registerSingle2(e,r){let n=Cr.string(e)?e:e.method,i=xd.generateUuid(),o={registrations:[{id:i,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(U.RegistrationRequest.type,o).then(a=>U.Disposable.create(()=>{this.unregisterSingle(i,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),a=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(a)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(U.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(U.RegistrationRequest.type,r).then(()=>new da(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},Ld=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(i){return i&&!!i.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(U.ApplyWorkspaceEditRequest.type,n)}},Bg=(0,eP.FileOperationsFeature)((0,XE.WorkspaceFoldersFeature)((0,YE.ConfigurationFeature)(Ld))),Ls=class{constructor(){this._trace=U.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==U.Trace.Off&&this.connection.sendNotification(U.LogTraceNotification.type,{message:e,verbose:this._trace===U.Trace.Verbose?r:void 0}).catch(()=>{})}},$s=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(U.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},qs=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,te.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,te.attachPartialResult)(this.connection,r)}};me._LanguagesImpl=qs;var zg=(0,sP.MonikerFeature)((0,oP.DiagnosticFeature)((0,iP.InlayHintFeature)((0,nP.InlineValueFeature)((0,rP.TypeHierarchyFeature)((0,tP.LinkedEditingRangeFeature)((0,QE.SemanticTokensFeature)((0,JE.CallHierarchyFeature)(qs)))))))),Fs=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,te.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,te.attachPartialResult)(this.connection,r)}};me._NotebooksImpl=Fs;var Vg=(0,aP.NotebookSyncFeature)(Fs);function Yg(t,e){return function(r){return e(t(r))}}me.combineConsoleFeatures=Yg;function Xg(t,e){return function(r){return e(t(r))}}me.combineTelemetryFeatures=Xg;function Jg(t,e){return function(r){return e(t(r))}}me.combineTracerFeatures=Jg;function Qg(t,e){return function(r){return e(t(r))}}me.combineClientFeatures=Qg;function Zg(t,e){return function(r){return e(t(r))}}me.combineWindowFeatures=Zg;function ey(t,e){return function(r){return e(t(r))}}me.combineWorkspaceFeatures=ey;function ty(t,e){return function(r){return e(t(r))}}me.combineLanguagesFeatures=ty;function ry(t,e){return function(r){return e(t(r))}}me.combineNotebooksFeatures=ry;function lP(t,e){function r(i,o,a){return i&&o?a(i,o):i||o}return{__brand:"features",console:r(t.console,e.console,Yg),tracer:r(t.tracer,e.tracer,Jg),telemetry:r(t.telemetry,e.telemetry,Xg),client:r(t.client,e.client,Qg),window:r(t.window,e.window,Zg),workspace:r(t.workspace,e.workspace,ey),languages:r(t.languages,e.languages,ty),notebooks:r(t.notebooks,e.notebooks,ry)}}me.combineFeatures=lP;function dP(t,e,r){let n=r&&r.console?new(r.console(xs)):new xs,i=t(n);n.rawAttach(i);let o=r&&r.tracer?new(r.tracer(Ls)):new Ls,a=r&&r.telemetry?new(r.telemetry($s)):new $s,s=r&&r.client?new(r.client(Ms)):new Ms,u=r&&r.window?new(r.window(Kg)):new Kg,c=r&&r.workspace?new(r.workspace(Bg)):new Bg,l=r&&r.languages?new(r.languages(zg)):new zg,f=r&&r.notebooks?new(r.notebooks(Vg)):new Vg,y=[n,o,a,s,u,c,l,f];function _(R){return R instanceof Promise?R:Cr.thenable(R)?new Promise((T,D)=>{R.then(B=>T(B),B=>D(B))}):Promise.resolve(R)}let h,A,w,k={listen:()=>i.listen(),sendRequest:(R,...T)=>i.sendRequest(Cr.string(R)?R:R.method,...T),onRequest:(R,T)=>i.onRequest(R,T),sendNotification:(R,T)=>{let D=Cr.string(R)?R:R.method;return arguments.length===1?i.sendNotification(D):i.sendNotification(D,T)},onNotification:(R,T)=>i.onNotification(R,T),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:R=>(A=R,{dispose:()=>{A=void 0}}),onInitialized:R=>i.onNotification(U.InitializedNotification.type,R),onShutdown:R=>(h=R,{dispose:()=>{h=void 0}}),onExit:R=>(w=R,{dispose:()=>{w=void 0}}),get console(){return n},get telemetry(){return a},get tracer(){return o},get client(){return s},get window(){return u},get workspace(){return c},get languages(){return l},get notebooks(){return f},onDidChangeConfiguration:R=>i.onNotification(U.DidChangeConfigurationNotification.type,R),onDidChangeWatchedFiles:R=>i.onNotification(U.DidChangeWatchedFilesNotification.type,R),__textDocumentSync:void 0,onDidOpenTextDocument:R=>i.onNotification(U.DidOpenTextDocumentNotification.type,R),onDidChangeTextDocument:R=>i.onNotification(U.DidChangeTextDocumentNotification.type,R),onDidCloseTextDocument:R=>i.onNotification(U.DidCloseTextDocumentNotification.type,R),onWillSaveTextDocument:R=>i.onNotification(U.WillSaveTextDocumentNotification.type,R),onWillSaveTextDocumentWaitUntil:R=>i.onRequest(U.WillSaveTextDocumentWaitUntilRequest.type,R),onDidSaveTextDocument:R=>i.onNotification(U.DidSaveTextDocumentNotification.type,R),sendDiagnostics:R=>i.sendNotification(U.PublishDiagnosticsNotification.type,R),onHover:R=>i.onRequest(U.HoverRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),void 0)),onCompletion:R=>i.onRequest(U.CompletionRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onCompletionResolve:R=>i.onRequest(U.CompletionResolveRequest.type,R),onSignatureHelp:R=>i.onRequest(U.SignatureHelpRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),void 0)),onDeclaration:R=>i.onRequest(U.DeclarationRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onDefinition:R=>i.onRequest(U.DefinitionRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onTypeDefinition:R=>i.onRequest(U.TypeDefinitionRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onImplementation:R=>i.onRequest(U.ImplementationRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onReferences:R=>i.onRequest(U.ReferencesRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onDocumentHighlight:R=>i.onRequest(U.DocumentHighlightRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onDocumentSymbol:R=>i.onRequest(U.DocumentSymbolRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onWorkspaceSymbol:R=>i.onRequest(U.WorkspaceSymbolRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onWorkspaceSymbolResolve:R=>i.onRequest(U.WorkspaceSymbolResolveRequest.type,R),onCodeAction:R=>i.onRequest(U.CodeActionRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onCodeActionResolve:R=>i.onRequest(U.CodeActionResolveRequest.type,(T,D)=>R(T,D)),onCodeLens:R=>i.onRequest(U.CodeLensRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onCodeLensResolve:R=>i.onRequest(U.CodeLensResolveRequest.type,(T,D)=>R(T,D)),onDocumentFormatting:R=>i.onRequest(U.DocumentFormattingRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),void 0)),onDocumentRangeFormatting:R=>i.onRequest(U.DocumentRangeFormattingRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),void 0)),onDocumentOnTypeFormatting:R=>i.onRequest(U.DocumentOnTypeFormattingRequest.type,(T,D)=>R(T,D)),onRenameRequest:R=>i.onRequest(U.RenameRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),void 0)),onPrepareRename:R=>i.onRequest(U.PrepareRenameRequest.type,(T,D)=>R(T,D)),onDocumentLinks:R=>i.onRequest(U.DocumentLinkRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onDocumentLinkResolve:R=>i.onRequest(U.DocumentLinkResolveRequest.type,(T,D)=>R(T,D)),onDocumentColor:R=>i.onRequest(U.DocumentColorRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onColorPresentation:R=>i.onRequest(U.ColorPresentationRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onFoldingRanges:R=>i.onRequest(U.FoldingRangeRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onSelectionRanges:R=>i.onRequest(U.SelectionRangeRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),(0,te.attachPartialResult)(i,T))),onExecuteCommand:R=>i.onRequest(U.ExecuteCommandRequest.type,(T,D)=>R(T,D,(0,te.attachWorkDone)(i,T),void 0)),dispose:()=>i.dispose()};for(let R of y)R.attach(k);return i.onRequest(U.InitializeRequest.type,R=>{e.initialize(R),Cr.string(R.trace)&&(o.trace=U.Trace.fromString(R.trace));for(let T of y)T.initialize(R.capabilities);if(A){let T=A(R,new U.CancellationTokenSource().token,(0,te.attachWorkDone)(i,R),void 0);return _(T).then(D=>{if(D instanceof U.ResponseError)return D;let B=D;B||(B={capabilities:{}});let V=B.capabilities;V||(V={},B.capabilities=V),V.textDocumentSync===void 0||V.textDocumentSync===null?V.textDocumentSync=Cr.number(k.__textDocumentSync)?k.__textDocumentSync:U.TextDocumentSyncKind.None:!Cr.number(V.textDocumentSync)&&!Cr.number(V.textDocumentSync.change)&&(V.textDocumentSync.change=Cr.number(k.__textDocumentSync)?k.__textDocumentSync:U.TextDocumentSyncKind.None);for(let G of y)G.fillServerCapabilities(V);return B})}else{let T={capabilities:{textDocumentSync:U.TextDocumentSyncKind.None}};for(let D of y)D.fillServerCapabilities(T.capabilities);return T}}),i.onRequest(U.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,h)return h(new U.CancellationTokenSource().token)}),i.onNotification(U.ExitNotification.type,()=>{try{w&&w()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(U.SetTraceNotification.type,R=>{o.trace=U.Trace.fromString(R.value)}),k}me.createConnection=dP});var $d=E(It=>{"use strict";var fP=It&&It.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),iy=It&&It.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&fP(e,t,r)};Object.defineProperty(It,"__esModule",{value:!0});It.ProposedFeatures=It.NotebookDocuments=It.TextDocuments=It.SemanticTokensBuilder=void 0;var pP=_d();Object.defineProperty(It,"SemanticTokensBuilder",{enumerable:!0,get:function(){return pP.SemanticTokensBuilder}});iy(yt(),It);var hP=Ad();Object.defineProperty(It,"TextDocuments",{enumerable:!0,get:function(){return hP.TextDocuments}});var mP=bd();Object.defineProperty(It,"NotebookDocuments",{enumerable:!0,get:function(){return mP.NotebookDocuments}});iy(ny(),It);var gP;(function(t){t.all={__brand:"features"}})(gP=It.ProposedFeatures||(It.ProposedFeatures={}))});var ay=E((I$,oy)=>{"use strict";oy.exports=yt()});var Ke=E(ln=>{"use strict";var yP=ln&&ln.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),uy=ln&&ln.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&yP(e,t,r)};Object.defineProperty(ln,"__esModule",{value:!0});ln.createConnection=void 0;var js=$d();uy(ay(),ln);uy($d(),ln);var sy=!1,vP={initialize:t=>{},get shutdownReceived(){return sy},set shutdownReceived(t){sy=t},exit:t=>{}};function TP(t,e,r,n){let i,o,a,s;t!==void 0&&t.__brand==="features"&&(i=t,t=e,e=r,r=n),js.ConnectionStrategy.is(t)||js.ConnectionOptions.is(t)?s=t:(o=t,a=e,s=r);let u=c=>(0,js.createProtocolConnection)(o,a,c,s);return(0,js.createConnection)(u,vP,i)}ln.createConnection=TP});var qd=E((cy,Gs)=>{(function(t){if(typeof Gs=="object"&&typeof Gs.exports=="object"){var e=t(Za,cy);e!==void 0&&(Gs.exports=e)}else typeof define=="function"&&define.amd&&define(["require","exports"],t)})(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TextDocument=void 0;class r{constructor(c,l,f,y){this._uri=c,this._languageId=l,this._version=f,this._content=y,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(c){if(c){let l=this.offsetAt(c.start),f=this.offsetAt(c.end);return this._content.substring(l,f)}return this._content}update(c,l){for(let f of c)if(r.isIncremental(f)){let y=a(f.range),_=this.offsetAt(y.start),h=this.offsetAt(y.end);this._content=this._content.substring(0,_)+f.text+this._content.substring(h,this._content.length);let A=Math.max(y.start.line,0),w=Math.max(y.end.line,0),k=this._lineOffsets,R=o(f.text,!1,_);if(w-A===R.length)for(let D=0,B=R.length;D<B;D++)k[D+A+1]=R[D];else R.length<1e4?k.splice(A+1,w-A,...R):this._lineOffsets=k=k.slice(0,A+1).concat(R,k.slice(w+1));let T=f.text.length-(h-_);if(T!==0)for(let D=A+1+R.length,B=k.length;D<B;D++)k[D]=k[D]+T}else if(r.isFull(f))this._content=f.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=l}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=o(this._content,!0)),this._lineOffsets}positionAt(c){c=Math.max(Math.min(c,this._content.length),0);let l=this.getLineOffsets(),f=0,y=l.length;if(y===0)return{line:0,character:c};for(;f<y;){let h=Math.floor((f+y)/2);l[h]>c?y=h:f=h+1}let _=f-1;return{line:_,character:c-l[_]}}offsetAt(c){let l=this.getLineOffsets();if(c.line>=l.length)return this._content.length;if(c.line<0)return 0;let f=l[c.line],y=c.line+1<l.length?l[c.line+1]:this._content.length;return Math.max(Math.min(f+c.character,y),f)}get lineCount(){return this.getLineOffsets().length}static isIncremental(c){let l=c;return l!=null&&typeof l.text=="string"&&l.range!==void 0&&(l.rangeLength===void 0||typeof l.rangeLength=="number")}static isFull(c){let l=c;return l!=null&&typeof l.text=="string"&&l.range===void 0&&l.rangeLength===void 0}}var n;(function(u){function c(y,_,h,A){return new r(y,_,h,A)}u.create=c;function l(y,_,h){if(y instanceof r)return y.update(_,h),y;throw new Error("TextDocument.update: document must be created by TextDocument.create")}u.update=l;function f(y,_){let h=y.getText(),A=i(_.map(s),(R,T)=>{let D=R.range.start.line-T.range.start.line;return D===0?R.range.start.character-T.range.start.character:D}),w=0,k=[];for(let R of A){let T=y.offsetAt(R.range.start);if(T<w)throw new Error("Overlapping edit");T>w&&k.push(h.substring(w,T)),R.newText.length&&k.push(R.newText),w=y.offsetAt(R.range.end)}return k.push(h.substr(w)),k.join("")}u.applyEdits=f})(n=e.TextDocument||(e.TextDocument={}));function i(u,c){if(u.length<=1)return u;let l=u.length/2|0,f=u.slice(0,l),y=u.slice(l);i(f,c),i(y,c);let _=0,h=0,A=0;for(;_<f.length&&h<y.length;)c(f[_],y[h])<=0?u[A++]=f[_++]:u[A++]=y[h++];for(;_<f.length;)u[A++]=f[_++];for(;h<y.length;)u[A++]=y[h++];return u}function o(u,c,l=0){let f=c?[l]:[];for(let y=0;y<u.length;y++){let _=u.charCodeAt(y);(_===13||_===10)&&(_===13&&y+1<u.length&&u.charCodeAt(y+1)===10&&y++,f.push(l+y+1))}return f}function a(u){let c=u.start,l=u.end;return c.line>l.line||c.line===l.line&&c.character>l.character?{start:l,end:c}:u}function s(u){let c=a(u.range);return c!==u.range?{newText:u.newText,range:c}:u}})});var oo=E(oi=>{"use strict";Object.defineProperty(oi,"__esModule",{value:!0});oi.isRootCstNode=oi.isLeafCstNode=oi.isCompositeCstNode=void 0;function ly(t){return typeof t=="object"&&!!t&&"children"in t}oi.isCompositeCstNode=ly;function _P(t){return typeof t=="object"&&!!t&&"tokenType"in t}oi.isLeafCstNode=_P;function RP(t){return ly(t)&&"fullText"in t}oi.isRootCstNode=RP});var bt=E(Be=>{"use strict";Object.defineProperty(Be,"__esModule",{value:!0});Be.Reduction=Be.TreeStreamImpl=Be.stream=Be.DONE_RESULT=Be.EMPTY_STREAM=Be.StreamImpl=void 0;var Mt=class{constructor(e,r){this.startFn=e,this.nextFn=r}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){let e=this.iterator(),r=0,n=e.next();for(;!n.done;)r++,n=e.next();return r}toArray(){let e=[],r=this.iterator(),n;do n=r.next(),n.value!==void 0&&e.push(n.value);while(!n.done);return e}toSet(){return new Set(this)}toMap(e,r){let n=this.map(i=>[e?e(i):i,r?r(i):i]);return new Map(n)}toString(){return this.join()}concat(e){let r=e[Symbol.iterator]();return new Mt(()=>({first:this.startFn(),firstDone:!1}),n=>{let i;if(!n.firstDone){do if(i=this.nextFn(n.first),!i.done)return i;while(!i.done);n.firstDone=!0}do if(i=r.next(),!i.done)return i;while(!i.done);return Be.DONE_RESULT})}join(e=","){let r=this.iterator(),n="",i,o=!1;do i=r.next(),i.done||(o&&(n+=e),n+=AP(i.value)),o=!0;while(!i.done);return n}indexOf(e,r=0){let n=this.iterator(),i=0,o=n.next();for(;!o.done;){if(i>=r&&o.value===e)return i;o=n.next(),i++}return-1}every(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(!e(n.value))return!1;n=r.next()}return!0}some(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return!0;n=r.next()}return!1}forEach(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;)e(i.value,n),i=r.next(),n++}map(e){return new Mt(this.startFn,r=>{let{done:n,value:i}=this.nextFn(r);return n?Be.DONE_RESULT:{done:!1,value:e(i)}})}filter(e){return new Mt(this.startFn,r=>{let n;do if(n=this.nextFn(r),!n.done&&e(n.value))return n;while(!n.done);return Be.DONE_RESULT})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,r){let n=this.iterator(),i=r,o=n.next();for(;!o.done;)i===void 0?i=o.value:i=e(i,o.value),o=n.next();return i}reduceRight(e,r){return this.recursiveReduce(this.iterator(),e,r)}recursiveReduce(e,r,n){let i=e.next();if(i.done)return n;let o=this.recursiveReduce(e,r,n);return o===void 0?i.value:r(o,i.value)}find(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return n.value;n=r.next()}}findIndex(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;){if(e(i.value))return n;i=r.next(),n++}return-1}includes(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(n.value===e)return!0;n=r.next()}return!1}flatMap(e){return new Mt(()=>({this:this.startFn()}),r=>{do{if(r.iterator){let o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}let{done:n,value:i}=this.nextFn(r.this);if(!n){let o=e(i);if(Us(o))r.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}}while(r.iterator);return Be.DONE_RESULT})}flat(e){if(e===void 0&&(e=1),e<=0)return this;let r=e>1?this.flat(e-1):this;return new Mt(()=>({this:r.startFn()}),n=>{do{if(n.iterator){let a=n.iterator.next();if(a.done)n.iterator=void 0;else return a}let{done:i,value:o}=r.nextFn(n.this);if(!i)if(Us(o))n.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}while(n.iterator);return Be.DONE_RESULT})}head(){let r=this.iterator().next();if(!r.done)return r.value}tail(e=1){return new Mt(()=>{let r=this.startFn();for(let n=0;n<e;n++)if(this.nextFn(r).done)return r;return r},this.nextFn)}limit(e){return new Mt(()=>({size:0,state:this.startFn()}),r=>(r.size++,r.size>e?Be.DONE_RESULT:this.nextFn(r.state)))}distinct(e){let r=new Set;return this.filter(n=>{let i=e?e(n):n;return r.has(i)?!1:(r.add(i),!0)})}exclude(e,r){let n=new Set;for(let i of e){let o=r?r(i):i;n.add(o)}return this.filter(i=>{let o=r?r(i):i;return!n.has(o)})}};Be.StreamImpl=Mt;function AP(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function Us(t){return!!t&&typeof t[Symbol.iterator]=="function"}Be.EMPTY_STREAM=new Mt(()=>{},()=>Be.DONE_RESULT);Be.DONE_RESULT=Object.freeze({done:!0,value:void 0});function CP(...t){if(t.length===1){let e=t[0];if(e instanceof Mt)return e;if(Us(e))return new Mt(()=>e[Symbol.iterator](),r=>r.next());if(typeof e.length=="number")return new Mt(()=>({index:0}),r=>r.index<e.length?{done:!1,value:e[r.index++]}:Be.DONE_RESULT)}return t.length>1?new Mt(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){let r=e.iterator.next();if(!r.done)return r;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){let r=t[e.collIndex++];Us(r)?e.iterator=r[Symbol.iterator]():r&&typeof r.length=="number"&&(e.array=r)}}while(e.iterator||e.array||e.collIndex<t.length);return Be.DONE_RESULT}):Be.EMPTY_STREAM}Be.stream=CP;var Fd=class extends Mt{constructor(e,r,n){super(()=>({iterators:n?.includeRoot?[[e][Symbol.iterator]()]:[r(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){let a=i.iterators[i.iterators.length-1].next();if(a.done)i.iterators.pop();else return i.iterators.push(r(a.value)[Symbol.iterator]()),a}return Be.DONE_RESULT})}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}};Be.TreeStreamImpl=Fd;var bP;(function(t){function e(o){return o.reduce((a,s)=>a+s,0)}t.sum=e;function r(o){return o.reduce((a,s)=>a*s,0)}t.product=r;function n(o){return o.reduce((a,s)=>Math.min(a,s))}t.min=n;function i(o){return o.reduce((a,s)=>Math.max(a,s))}t.max=i})(bP=Be.Reduction||(Be.Reduction={}))});var et=E(we=>{"use strict";Object.defineProperty(we,"__esModule",{value:!0});we.getInteriorNodes=we.getStartlineNode=we.getNextNode=we.getPreviousNode=we.findLeafNodeAtOffset=we.isCommentNode=we.findCommentNode=we.findDeclarationNodeAtOffset=we.DefaultNameRegexp=we.toDocumentSegment=we.tokenToRange=we.flattenCst=we.streamCst=void 0;var ao=oo(),EP=bt();function fy(t){return new EP.TreeStreamImpl(t,e=>(0,ao.isCompositeCstNode)(e)?e.children:[],{includeRoot:!0})}we.streamCst=fy;function PP(t){return fy(t).filter(ao.isLeafCstNode)}we.flattenCst=PP;function kP(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}we.tokenToRange=kP;function NP(t){let{offset:e,end:r,range:n}=t;return{range:n,offset:e,end:r,length:r-e}}we.toDocumentSegment=NP;we.DefaultNameRegexp=/^[\w\p{L}]$/u;function SP(t,e,r=we.DefaultNameRegexp){if(t){if(e>0){let n=e-t.offset,i=t.text.charAt(n);r.test(i)||e--}return Gd(t,e)}}we.findDeclarationNodeAtOffset=SP;function wP(t,e){if(t){let r=py(t,!0);if(r&&jd(r,e))return r;if((0,ao.isRootCstNode)(t)){let n=t.children.findIndex(i=>!i.hidden);for(let i=n-1;i>=0;i--){let o=t.children[i];if(jd(o,e))return o}}}}we.findCommentNode=wP;function jd(t,e){return(0,ao.isLeafCstNode)(t)&&e.includes(t.tokenType.name)}we.isCommentNode=jd;function Gd(t,e){if((0,ao.isLeafCstNode)(t))return t;if((0,ao.isCompositeCstNode)(t)){let r=0,n=t.children.length-1;for(;r<=n;){let i=Math.floor((r+n)/2),o=t.children[i];if(o.offset>e)n=i-1;else if(o.end<=e)r=i+1;else return Gd(o,e)}}}we.findLeafNodeAtOffset=Gd;function py(t,e=!0){for(;t.parent;){let r=t.parent,n=r.children.indexOf(t);if(n===0)t=r;else{n--;let i=r.children[n];if(e||!i.hidden)return i}}}we.getPreviousNode=py;function DP(t,e=!0){for(;t.parent;){let r=t.parent,n=r.children.indexOf(t);if(r.children.length-1===n)t=r;else{n++;let i=r.children[n];if(e||!i.hidden)return i}}}we.getNextNode=DP;function OP(t){if(t.range.start.character===0)return t;let e=t.range.start.line,r=t,n;for(;t.parent;){let i=t.parent,o=n??i.children.indexOf(t);if(o===0?(t=i,n=void 0):(n=o-1,t=i.children[n]),t.range.start.line!==e)break;r=t}return r}we.getStartlineNode=OP;function xP(t,e){let r=IP(t,e);return r?r.parent.children.slice(r.a+1,r.b):[]}we.getInteriorNodes=xP;function IP(t,e){let r=dy(t),n=dy(e),i;for(let o=0;o<r.length&&o<n.length;o++){let a=r[o],s=n[o];if(a.parent===s.parent)i={parent:a.parent,a:a.index,b:s.index};else break}return i}function dy(t){let e=[];for(;t.parent;){let r=t.parent,n=r.children.indexOf(t);e.push({parent:r,index:n}),t=r}return e.reverse()}});var fa=E(so=>{"use strict";Object.defineProperty(so,"__esModule",{value:!0});so.eagerLoad=so.inject=void 0;function MP(t,e,r,n){let i=[t,e,r,n].reduce(vy,{});return yy(i)}so.inject=MP;var Ud=Symbol("isProxy");function gy(t){if(t&&t[Ud])for(let e of Object.values(t))gy(e);return t}so.eagerLoad=gy;function yy(t,e){let r=new Proxy({},{deleteProperty:()=>!1,get:(n,i)=>my(n,i,t,e||r),getOwnPropertyDescriptor:(n,i)=>(my(n,i,t,e||r),Object.getOwnPropertyDescriptor(n,i)),has:(n,i)=>i in t,ownKeys:()=>[...Reflect.ownKeys(t),Ud]});return r[Ud]=!0,r}var hy=Symbol();function my(t,e,r,n){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===hy)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. See https://langium.org/docs/di/cyclic-dependencies');return t[e]}else if(e in r){let i=r[e];t[e]=hy;try{t[e]=typeof i=="function"?i(n):yy(i,n)}catch(o){throw t[e]=o instanceof Error?o:void 0,o}return t[e]}else return}function vy(t,e){if(e){for(let[r,n]of Object.entries(e))if(n!==void 0){let i=t[r];i!==null&&n!==null&&typeof i=="object"&&typeof n=="object"?t[r]=vy(i,n):t[r]=n}}return t}});var Re=E(Pe=>{"use strict";Object.defineProperty(Pe,"__esModule",{value:!0});Pe.findLocalReferences=Pe.streamReferences=Pe.streamAst=Pe.streamAllContents=Pe.streamContents=Pe.findRootNode=Pe.getDocument=Pe.hasContainerOfType=Pe.getContainerOfType=Pe.isLinkingError=Pe.isAstNodeDescription=Pe.isReference=Pe.linkContentToContainer=Pe.isAstNode=void 0;var bi=bt();function uo(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}Pe.isAstNode=uo;function LP(t){for(let[e,r]of Object.entries(t))e.startsWith("$")||(Array.isArray(r)?r.forEach((n,i)=>{uo(n)&&(n.$container=t,n.$containerProperty=e,n.$containerIndex=i)}):uo(r)&&(r.$container=t,r.$containerProperty=e))}Pe.linkContentToContainer=LP;function Hs(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}Pe.isReference=Hs;function $P(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}Pe.isAstNodeDescription=$P;function qP(t){return typeof t=="object"&&t!==null&&uo(t.container)&&Hs(t.reference)&&typeof t.message=="string"}Pe.isLinkingError=qP;function FP(t,e){let r=t;for(;r;){if(e(r))return r;r=r.$container}}Pe.getContainerOfType=FP;function jP(t,e){let r=t;for(;r;){if(e(r))return!0;r=r.$container}return!1}Pe.hasContainerOfType=jP;function Ty(t){let r=_y(t).$document;if(!r)throw new Error("AST node has no document.");return r}Pe.getDocument=Ty;function _y(t){for(;t.$container;)t=t.$container;return t}Pe.findRootNode=_y;function Hd(t){return new bi.StreamImpl(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if(uo(n))return e.keyIndex++,{done:!1,value:n};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let i=e.arrayIndex++,o=n[i];if(uo(o))return{done:!1,value:o}}e.arrayIndex=0}}e.keyIndex++}return bi.DONE_RESULT})}Pe.streamContents=Hd;function GP(t){return new bi.TreeStreamImpl(t,e=>Hd(e))}Pe.streamAllContents=GP;function Ry(t){return new bi.TreeStreamImpl(t,e=>Hd(e),{includeRoot:!0})}Pe.streamAst=Ry;function Ay(t){return new bi.StreamImpl(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if(Hs(n))return e.keyIndex++,{done:!1,value:{reference:n,container:t,property:r}};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let i=e.arrayIndex++,o=n[i];if(Hs(o))return{done:!1,value:{reference:o,container:t,property:r,index:i}}}e.arrayIndex=0}}e.keyIndex++}return bi.DONE_RESULT})}Pe.streamReferences=Ay;function UP(t,e=Ty(t).parseResult.value){let r=[];return Ry(e).forEach(n=>{Ay(n).forEach(i=>{i.reference.ref===t&&r.push(i.reference)})}),(0,bi.stream)(r)}Pe.findLocalReferences=UP});var br=E(Ws=>{"use strict";Object.defineProperty(Ws,"__esModule",{value:!0});Ws.MultiMap=void 0;var co=bt(),Wd=class{constructor(){this.map=new Map}get size(){return co.Reduction.sum((0,co.stream)(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,r){if(r===void 0)return this.map.delete(e);{let n=this.map.get(e);if(n){let i=n.indexOf(r);if(i>=0)return n.length===1?this.map.delete(e):n.splice(i,1),!0}return!1}}get(e){var r;return(r=this.map.get(e))!==null&&r!==void 0?r:[]}has(e,r){if(r===void 0)return this.map.has(e);{let n=this.map.get(e);return n?n.indexOf(r)>=0:!1}}add(e,r){return this.map.has(e)?this.map.get(e).push(r):this.map.set(e,[r]),this}addAll(e,r){return this.map.has(e)?this.map.get(e).push(...r):this.map.set(e,Array.from(r)),this}forEach(e){this.map.forEach((r,n)=>r.forEach(i=>e(i,n,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return(0,co.stream)(this.map.entries()).flatMap(([e,r])=>r.map(n=>[e,n]))}keys(){return(0,co.stream)(this.map.keys())}values(){return(0,co.stream)(this.map.values()).flat()}entriesGroupedByKey(){return(0,co.stream)(this.map.entries())}};Ws.MultiMap=Wd});var Bs=E(lo=>{"use strict";Object.defineProperty(lo,"__esModule",{value:!0});lo.EmptyFileSystem=lo.EmptyFileSystemProvider=void 0;var Ks=class{readFile(){throw new Error("Method not implemented.")}readFileSync(){throw new Error("Method not implemented.")}async readDirectory(){return[]}};lo.EmptyFileSystemProvider=Ks;lo.EmptyFileSystem={fileSystemProvider:()=>new Ks}});var ze=E(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});v.isParserRule=v.ParserRule=v.isParameterReference=v.ParameterReference=v.isParameter=v.Parameter=v.isNegation=v.Negation=v.isNegatedToken=v.NegatedToken=v.isNamedArgument=v.NamedArgument=v.isLiteralCondition=v.LiteralCondition=v.isKeyword=v.Keyword=v.isInterface=v.Interface=v.isInferredType=v.InferredType=v.isGroup=v.Group=v.isGrammarImport=v.GrammarImport=v.isGrammar=v.Grammar=v.isDisjunction=v.Disjunction=v.isCrossReference=v.CrossReference=v.isConjunction=v.Conjunction=v.isCharacterRange=v.CharacterRange=v.isAtomType=v.AtomType=v.isAssignment=v.Assignment=v.isAlternatives=v.Alternatives=v.isAction=v.Action=v.isAbstractElement=v.AbstractElement=v.isCondition=v.Condition=v.isAbstractType=v.AbstractType=v.isAbstractRule=v.AbstractRule=void 0;v.reflection=v.LangiumGrammarAstReflection=v.isWildcard=v.Wildcard=v.isUntilToken=v.UntilToken=v.isUnorderedGroup=v.UnorderedGroup=v.isTypeAttribute=v.TypeAttribute=v.isType=v.Type=v.isTerminalRuleCall=v.TerminalRuleCall=v.isTerminalRule=v.TerminalRule=v.isTerminalGroup=v.TerminalGroup=v.isTerminalAlternatives=v.TerminalAlternatives=v.isRuleCall=v.RuleCall=v.isReturnType=v.ReturnType=v.isRegexToken=v.RegexToken=void 0;var HP=Re();v.AbstractRule="AbstractRule";function WP(t){return v.reflection.isInstance(t,v.AbstractRule)}v.isAbstractRule=WP;v.AbstractType="AbstractType";function KP(t){return v.reflection.isInstance(t,v.AbstractType)}v.isAbstractType=KP;v.Condition="Condition";function BP(t){return v.reflection.isInstance(t,v.Condition)}v.isCondition=BP;v.AbstractElement="AbstractElement";function zP(t){return v.reflection.isInstance(t,v.AbstractElement)}v.isAbstractElement=zP;v.Action="Action";function VP(t){return v.reflection.isInstance(t,v.Action)}v.isAction=VP;v.Alternatives="Alternatives";function YP(t){return v.reflection.isInstance(t,v.Alternatives)}v.isAlternatives=YP;v.Assignment="Assignment";function XP(t){return v.reflection.isInstance(t,v.Assignment)}v.isAssignment=XP;v.AtomType="AtomType";function JP(t){return v.reflection.isInstance(t,v.AtomType)}v.isAtomType=JP;v.CharacterRange="CharacterRange";function QP(t){return v.reflection.isInstance(t,v.CharacterRange)}v.isCharacterRange=QP;v.Conjunction="Conjunction";function ZP(t){return v.reflection.isInstance(t,v.Conjunction)}v.isConjunction=ZP;v.CrossReference="CrossReference";function ek(t){return v.reflection.isInstance(t,v.CrossReference)}v.isCrossReference=ek;v.Disjunction="Disjunction";function tk(t){return v.reflection.isInstance(t,v.Disjunction)}v.isDisjunction=tk;v.Grammar="Grammar";function rk(t){return v.reflection.isInstance(t,v.Grammar)}v.isGrammar=rk;v.GrammarImport="GrammarImport";function nk(t){return v.reflection.isInstance(t,v.GrammarImport)}v.isGrammarImport=nk;v.Group="Group";function ik(t){return v.reflection.isInstance(t,v.Group)}v.isGroup=ik;v.InferredType="InferredType";function ok(t){return v.reflection.isInstance(t,v.InferredType)}v.isInferredType=ok;v.Interface="Interface";function ak(t){return v.reflection.isInstance(t,v.Interface)}v.isInterface=ak;v.Keyword="Keyword";function sk(t){return v.reflection.isInstance(t,v.Keyword)}v.isKeyword=sk;v.LiteralCondition="LiteralCondition";function uk(t){return v.reflection.isInstance(t,v.LiteralCondition)}v.isLiteralCondition=uk;v.NamedArgument="NamedArgument";function ck(t){return v.reflection.isInstance(t,v.NamedArgument)}v.isNamedArgument=ck;v.NegatedToken="NegatedToken";function lk(t){return v.reflection.isInstance(t,v.NegatedToken)}v.isNegatedToken=lk;v.Negation="Negation";function dk(t){return v.reflection.isInstance(t,v.Negation)}v.isNegation=dk;v.Parameter="Parameter";function fk(t){return v.reflection.isInstance(t,v.Parameter)}v.isParameter=fk;v.ParameterReference="ParameterReference";function pk(t){return v.reflection.isInstance(t,v.ParameterReference)}v.isParameterReference=pk;v.ParserRule="ParserRule";function hk(t){return v.reflection.isInstance(t,v.ParserRule)}v.isParserRule=hk;v.RegexToken="RegexToken";function mk(t){return v.reflection.isInstance(t,v.RegexToken)}v.isRegexToken=mk;v.ReturnType="ReturnType";function gk(t){return v.reflection.isInstance(t,v.ReturnType)}v.isReturnType=gk;v.RuleCall="RuleCall";function yk(t){return v.reflection.isInstance(t,v.RuleCall)}v.isRuleCall=yk;v.TerminalAlternatives="TerminalAlternatives";function vk(t){return v.reflection.isInstance(t,v.TerminalAlternatives)}v.isTerminalAlternatives=vk;v.TerminalGroup="TerminalGroup";function Tk(t){return v.reflection.isInstance(t,v.TerminalGroup)}v.isTerminalGroup=Tk;v.TerminalRule="TerminalRule";function _k(t){return v.reflection.isInstance(t,v.TerminalRule)}v.isTerminalRule=_k;v.TerminalRuleCall="TerminalRuleCall";function Rk(t){return v.reflection.isInstance(t,v.TerminalRuleCall)}v.isTerminalRuleCall=Rk;v.Type="Type";function Ak(t){return v.reflection.isInstance(t,v.Type)}v.isType=Ak;v.TypeAttribute="TypeAttribute";function Ck(t){return v.reflection.isInstance(t,v.TypeAttribute)}v.isTypeAttribute=Ck;v.UnorderedGroup="UnorderedGroup";function bk(t){return v.reflection.isInstance(t,v.UnorderedGroup)}v.isUnorderedGroup=bk;v.UntilToken="UntilToken";function Ek(t){return v.reflection.isInstance(t,v.UntilToken)}v.isUntilToken=Ek;v.Wildcard="Wildcard";function Pk(t){return v.reflection.isInstance(t,v.Wildcard)}v.isWildcard=Pk;var zs=class{getAllTypes(){return["AbstractElement","AbstractRule","AbstractType","Action","Alternatives","Assignment","AtomType","CharacterRange","Condition","Conjunction","CrossReference","Disjunction","Grammar","GrammarImport","Group","InferredType","Interface","Keyword","LiteralCondition","NamedArgument","NegatedToken","Negation","Parameter","ParameterReference","ParserRule","RegexToken","ReturnType","RuleCall","TerminalAlternatives","TerminalGroup","TerminalRule","TerminalRuleCall","Type","TypeAttribute","UnorderedGroup","UntilToken","Wildcard"]}isInstance(e,r){return(0,HP.isAstNode)(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;switch(e){case v.Action:return this.isSubtype(v.AbstractElement,r)||this.isSubtype(v.AbstractType,r);case v.Alternatives:case v.Assignment:case v.CharacterRange:case v.CrossReference:case v.Group:case v.Keyword:case v.NegatedToken:case v.RegexToken:case v.RuleCall:case v.TerminalAlternatives:case v.TerminalGroup:case v.TerminalRuleCall:case v.UnorderedGroup:case v.UntilToken:case v.Wildcard:return this.isSubtype(v.AbstractElement,r);case v.Conjunction:case v.Disjunction:case v.LiteralCondition:case v.Negation:case v.ParameterReference:return this.isSubtype(v.Condition,r);case v.Interface:case v.Type:return this.isSubtype(v.AbstractType,r);case v.ParserRule:return this.isSubtype(v.AbstractRule,r)||this.isSubtype(v.AbstractType,r);case v.TerminalRule:return this.isSubtype(v.AbstractRule,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action:type":return v.AbstractType;case"AtomType:refType":return v.AbstractType;case"CrossReference:type":return v.AbstractType;case"Grammar:hiddenTokens":return v.AbstractRule;case"Grammar:usedGrammars":return v.Grammar;case"Interface:superTypes":return v.AbstractType;case"NamedArgument:parameter":return v.Parameter;case"ParameterReference:parameter":return v.Parameter;case"ParserRule:hiddenTokens":return v.AbstractRule;case"ParserRule:returnType":return v.AbstractType;case"RuleCall:rule":return v.AbstractRule;case"TerminalRuleCall:rule":return v.TerminalRule;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"Alternatives":return{name:"Alternatives",mandatory:[{name:"elements",type:"array"}]};case"AtomType":return{name:"AtomType",mandatory:[{name:"isArray",type:"boolean"},{name:"isRef",type:"boolean"}]};case"CrossReference":return{name:"CrossReference",mandatory:[{name:"deprecatedSyntax",type:"boolean"}]};case"Grammar":return{name:"Grammar",mandatory:[{name:"definesHiddenTokens",type:"boolean"},{name:"hiddenTokens",type:"array"},{name:"imports",type:"array"},{name:"interfaces",type:"array"},{name:"isDeclared",type:"boolean"},{name:"rules",type:"array"},{name:"types",type:"array"},{name:"usedGrammars",type:"array"}]};case"Group":return{name:"Group",mandatory:[{name:"elements",type:"array"}]};case"Interface":return{name:"Interface",mandatory:[{name:"attributes",type:"array"},{name:"superTypes",type:"array"}]};case"LiteralCondition":return{name:"LiteralCondition",mandatory:[{name:"true",type:"boolean"}]};case"NamedArgument":return{name:"NamedArgument",mandatory:[{name:"calledByName",type:"boolean"}]};case"ParserRule":return{name:"ParserRule",mandatory:[{name:"definesHiddenTokens",type:"boolean"},{name:"entry",type:"boolean"},{name:"fragment",type:"boolean"},{name:"hiddenTokens",type:"array"},{name:"parameters",type:"array"},{name:"wildcard",type:"boolean"}]};case"RuleCall":return{name:"RuleCall",mandatory:[{name:"arguments",type:"array"}]};case"TerminalAlternatives":return{name:"TerminalAlternatives",mandatory:[{name:"elements",type:"array"}]};case"TerminalGroup":return{name:"TerminalGroup",mandatory:[{name:"elements",type:"array"}]};case"TerminalRule":return{name:"TerminalRule",mandatory:[{name:"fragment",type:"boolean"},{name:"hidden",type:"boolean"}]};case"Type":return{name:"Type",mandatory:[{name:"typeAlternatives",type:"array"}]};case"TypeAttribute":return{name:"TypeAttribute",mandatory:[{name:"isOptional",type:"boolean"},{name:"typeAlternatives",type:"array"}]};case"UnorderedGroup":return{name:"UnorderedGroup",mandatory:[{name:"elements",type:"array"}]};default:return{name:e,mandatory:[]}}}};v.LangiumGrammarAstReflection=zs;v.reflection=new zs});var Cy=E(Ys=>{"use strict";Object.defineProperty(Ys,"__esModule",{value:!0});Ys.LangiumGrammarGrammar=void 0;var kk=Et(),Vs,Nk=()=>Vs??(Vs=(0,kk.loadGrammarFromJson)(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "LangiumGrammar",
  "rules": [
    {
      "$type": "ParserRule",
      "name": "Grammar",
      "entry": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "isDeclared",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "grammar"
                }
              },
              {
                "$type": "Assignment",
                "feature": "name",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "ID"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "with"
                  },
                  {
                    "$type": "Assignment",
                    "feature": "usedGrammars",
                    "operator": "+=",
                    "terminal": {
                      "$type": "CrossReference",
                      "type": {
                        "$refText": "Grammar"
                      },
                      "terminal": {
                        "$type": "RuleCall",
                        "rule": {
                          "$refText": "ID"
                        },
                        "arguments": []
                      },
                      "deprecatedSyntax": false
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": ","
                      },
                      {
                        "$type": "Assignment",
                        "feature": "usedGrammars",
                        "operator": "+=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$refText": "Grammar"
                          },
                          "terminal": {
                            "$type": "RuleCall",
                            "rule": {
                              "$refText": "ID"
                            },
                            "arguments": []
                          },
                          "deprecatedSyntax": false
                        }
                      }
                    ],
                    "cardinality": "*"
                  }
                ],
                "cardinality": "?"
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "definesHiddenTokens",
                    "operator": "?=",
                    "terminal": {
                      "$type": "Keyword",
                      "value": "hidden"
                    }
                  },
                  {
                    "$type": "Keyword",
                    "value": "("
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Assignment",
                        "feature": "hiddenTokens",
                        "operator": "+=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$refText": "AbstractRule"
                          },
                          "terminal": {
                            "$type": "RuleCall",
                            "rule": {
                              "$refText": "ID"
                            },
                            "arguments": []
                          },
                          "deprecatedSyntax": false
                        }
                      },
                      {
                        "$type": "Group",
                        "elements": [
                          {
                            "$type": "Keyword",
                            "value": ","
                          },
                          {
                            "$type": "Assignment",
                            "feature": "hiddenTokens",
                            "operator": "+=",
                            "terminal": {
                              "$type": "CrossReference",
                              "type": {
                                "$refText": "AbstractRule"
                              },
                              "terminal": {
                                "$type": "RuleCall",
                                "rule": {
                                  "$refText": "ID"
                                },
                                "arguments": []
                              },
                              "deprecatedSyntax": false
                            }
                          }
                        ],
                        "cardinality": "*"
                      }
                    ],
                    "cardinality": "?"
                  },
                  {
                    "$type": "Keyword",
                    "value": ")"
                  }
                ],
                "cardinality": "?"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "imports",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "GrammarImport"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "rules",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "AbstractRule"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "interfaces",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Interface"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "types",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Type"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "+"
          }
        ]
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Interface",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "interface"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "ID"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "extends"
              },
              {
                "$type": "Assignment",
                "feature": "superTypes",
                "operator": "+=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$refText": "AbstractType"
                  },
                  "deprecatedSyntax": false
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "superTypes",
                    "operator": "+=",
                    "terminal": {
                      "$type": "CrossReference",
                      "type": {
                        "$refText": "AbstractType"
                      },
                      "deprecatedSyntax": false
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "SchemaType"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SchemaType",
      "fragment": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "TypeAttribute"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "}"
          },
          {
            "$type": "Keyword",
            "value": ";",
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "ID"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "isOptional",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "?"
            },
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "TypeAlternatives"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ";",
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TypeAlternatives",
      "fragment": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "typeAlternatives",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "AtomType"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "|"
              },
              {
                "$type": "Assignment",
                "feature": "typeAlternatives",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "AtomType"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AtomType",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Alternatives",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "primitiveType",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$refText": "PrimitiveType"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Assignment",
                        "feature": "isRef",
                        "operator": "?=",
                        "terminal": {
                          "$type": "Keyword",
                          "value": "@"
                        },
                        "cardinality": "?"
                      },
                      {
                        "$type": "Assignment",
                        "feature": "refType",
                        "operator": "=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$refText": "AbstractType"
                          },
                          "deprecatedSyntax": false
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "$type": "Assignment",
                "feature": "isArray",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "[]"
                },
                "cardinality": "?"
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "keywordType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Keyword"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PrimitiveType",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "string"
          },
          {
            "$type": "Keyword",
            "value": "number"
          },
          {
            "$type": "Keyword",
            "value": "boolean"
          },
          {
            "$type": "Keyword",
            "value": "Date"
          },
          {
            "$type": "Keyword",
            "value": "bigint"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Type",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "type"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "ID"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "="
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "TypeAlternatives"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ";",
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AbstractRule",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "ParserRule"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "TerminalRule"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GrammarImport",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "import"
          },
          {
            "$type": "Assignment",
            "feature": "path",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "STRING"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ";",
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParserRule",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "entry",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "entry"
                }
              },
              {
                "$type": "Assignment",
                "feature": "fragment",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "fragment"
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "RuleNameAndParams"
            },
            "arguments": []
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "wildcard",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "*"
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "returns"
                  },
                  {
                    "$type": "Alternatives",
                    "elements": [
                      {
                        "$type": "Assignment",
                        "feature": "returnType",
                        "operator": "=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$refText": "AbstractType"
                          },
                          "terminal": {
                            "$type": "RuleCall",
                            "rule": {
                              "$refText": "ID"
                            },
                            "arguments": []
                          },
                          "deprecatedSyntax": false
                        }
                      },
                      {
                        "$type": "Assignment",
                        "feature": "dataType",
                        "operator": "=",
                        "terminal": {
                          "$type": "RuleCall",
                          "rule": {
                            "$refText": "PrimitiveType"
                          },
                          "arguments": []
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "$type": "Assignment",
                "feature": "inferredType",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "InferredType"
                  },
                  "arguments": [
                    {
                      "$type": "NamedArgument",
                      "value": {
                        "$type": "LiteralCondition",
                        "true": false
                      },
                      "calledByName": false
                    }
                  ]
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "definesHiddenTokens",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "hidden"
                }
              },
              {
                "$type": "Keyword",
                "value": "("
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "hiddenTokens",
                    "operator": "+=",
                    "terminal": {
                      "$type": "CrossReference",
                      "type": {
                        "$refText": "AbstractRule"
                      },
                      "terminal": {
                        "$type": "RuleCall",
                        "rule": {
                          "$refText": "ID"
                        },
                        "arguments": []
                      },
                      "deprecatedSyntax": false
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": ","
                      },
                      {
                        "$type": "Assignment",
                        "feature": "hiddenTokens",
                        "operator": "+=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$refText": "AbstractRule"
                          },
                          "terminal": {
                            "$type": "RuleCall",
                            "rule": {
                              "$refText": "ID"
                            },
                            "arguments": []
                          },
                          "deprecatedSyntax": false
                        }
                      }
                    ],
                    "cardinality": "*"
                  }
                ],
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": ")"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "definition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Alternatives"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "InferredType",
      "parameters": [
        {
          "$type": "Parameter",
          "name": "imperative"
        }
      ],
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Group",
                "guardCondition": {
                  "$type": "ParameterReference",
                  "parameter": {
                    "$refText": "imperative"
                  }
                },
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "infer"
                  }
                ]
              },
              {
                "$type": "Group",
                "guardCondition": {
                  "$type": "Negation",
                  "value": {
                    "$type": "ParameterReference",
                    "parameter": {
                      "$refText": "imperative"
                    }
                  }
                },
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "infers"
                  }
                ]
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "ID"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RuleNameAndParams",
      "fragment": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "ID"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "<"
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "parameters",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$refText": "Parameter"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": ","
                      },
                      {
                        "$type": "Assignment",
                        "feature": "parameters",
                        "operator": "+=",
                        "terminal": {
                          "$type": "RuleCall",
                          "rule": {
                            "$refText": "Parameter"
                          },
                          "arguments": []
                        }
                      }
                    ],
                    "cardinality": "*"
                  }
                ],
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": ">"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Parameter",
      "definition": {
        "$type": "Assignment",
        "feature": "name",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$refText": "ID"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Alternatives",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "ConditionalBranch"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Alternatives"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "|"
                  },
                  {
                    "$type": "Assignment",
                    "feature": "elements",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$refText": "ConditionalBranch"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ConditionalBranch",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "UnorderedGroup"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Group"
                }
              },
              {
                "$type": "Keyword",
                "value": "<"
              },
              {
                "$type": "Assignment",
                "feature": "guardCondition",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Disjunction"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Keyword",
                "value": ">"
              },
              {
                "$type": "Assignment",
                "feature": "elements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "AbstractToken"
                  },
                  "arguments": []
                },
                "cardinality": "+"
              }
            ]
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UnorderedGroup",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Group"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "UnorderedGroup"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "&"
                  },
                  {
                    "$type": "Assignment",
                    "feature": "elements",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$refText": "Group"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Group",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "AbstractToken"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Group"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Assignment",
                "feature": "elements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "AbstractToken"
                  },
                  "arguments": []
                },
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AbstractToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "AbstractTokenWithCardinality"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Action"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AbstractTokenWithCardinality",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$refText": "Assignment"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$refText": "AbstractTerminal"
                },
                "arguments": []
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "cardinality",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "?"
                },
                {
                  "$type": "Keyword",
                  "value": "*"
                },
                {
                  "$type": "Keyword",
                  "value": "+"
                }
              ]
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Action",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "Action"
            }
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "type",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$refText": "AbstractType"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$refText": "ID"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              },
              {
                "$type": "Assignment",
                "feature": "inferredType",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "InferredType"
                  },
                  "arguments": [
                    {
                      "$type": "NamedArgument",
                      "value": {
                        "$type": "LiteralCondition",
                        "true": true
                      },
                      "calledByName": false
                    }
                  ]
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "."
              },
              {
                "$type": "Assignment",
                "feature": "feature",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "FeatureName"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "operator",
                "operator": "=",
                "terminal": {
                  "$type": "Alternatives",
                  "elements": [
                    {
                      "$type": "Keyword",
                      "value": "="
                    },
                    {
                      "$type": "Keyword",
                      "value": "+="
                    }
                  ]
                }
              },
              {
                "$type": "Keyword",
                "value": "current"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AbstractTerminal",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Keyword"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "RuleCall"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "ParenthesizedElement"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "PredicatedKeyword"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "PredicatedRuleCall"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "PredicatedGroup"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Keyword",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$refText": "STRING"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RuleCall",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "rule",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$refText": "AbstractRule"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$refText": "ID"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "<"
              },
              {
                "$type": "Assignment",
                "feature": "arguments",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "NamedArgument"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "arguments",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$refText": "NamedArgument"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              },
              {
                "$type": "Keyword",
                "value": ">"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "NamedArgument",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "parameter",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$refText": "Parameter"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$refText": "ID"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              },
              {
                "$type": "Assignment",
                "feature": "calledByName",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "="
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Disjunction"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "LiteralCondition",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "true",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "true"
            }
          },
          {
            "$type": "Keyword",
            "value": "false"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Disjunction",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Conjunction"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Disjunction"
                },
                "feature": "left",
                "operator": "="
              },
              {
                "$type": "Keyword",
                "value": "|"
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Conjunction"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Conjunction",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Negation"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Conjunction"
                },
                "feature": "left",
                "operator": "="
              },
              {
                "$type": "Keyword",
                "value": "&"
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Negation"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Negation",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Atom"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Negation"
                }
              },
              {
                "$type": "Keyword",
                "value": "!"
              },
              {
                "$type": "Assignment",
                "feature": "value",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Negation"
                  },
                  "arguments": []
                }
              }
            ]
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Atom",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "ParameterReference"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "ParenthesizedCondition"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "LiteralCondition"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParenthesizedCondition",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Disjunction"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParameterReference",
      "definition": {
        "$type": "Assignment",
        "feature": "parameter",
        "operator": "=",
        "terminal": {
          "$type": "CrossReference",
          "type": {
            "$refText": "Parameter"
          },
          "terminal": {
            "$type": "RuleCall",
            "rule": {
              "$refText": "ID"
            },
            "arguments": []
          },
          "deprecatedSyntax": false
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PredicatedKeyword",
      "inferredType": {
        "$type": "InferredType",
        "name": "Keyword"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "=>"
              },
              {
                "$type": "Keyword",
                "value": "->"
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "STRING"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PredicatedRuleCall",
      "inferredType": {
        "$type": "InferredType",
        "name": "RuleCall"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "=>"
              },
              {
                "$type": "Keyword",
                "value": "->"
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "rule",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$refText": "AbstractRule"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$refText": "ID"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "<"
              },
              {
                "$type": "Assignment",
                "feature": "arguments",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "NamedArgument"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "arguments",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$refText": "NamedArgument"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              },
              {
                "$type": "Keyword",
                "value": ">"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Assignment",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "Assignment"
            }
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "=>"
              },
              {
                "$type": "Keyword",
                "value": "->"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "feature",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "FeatureName"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "operator",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "+="
                },
                {
                  "$type": "Keyword",
                  "value": "="
                },
                {
                  "$type": "Keyword",
                  "value": "?="
                }
              ]
            }
          },
          {
            "$type": "Assignment",
            "feature": "terminal",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "AssignableTerminal"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AssignableTerminal",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Keyword"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "RuleCall"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "ParenthesizedAssignableElement"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "CrossReference"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParenthesizedAssignableElement",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "AssignableAlternatives"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AssignableAlternatives",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "AssignableTerminal"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Alternatives"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "|"
                  },
                  {
                    "$type": "Assignment",
                    "feature": "elements",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$refText": "AssignableTerminal"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "CrossReference",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "CrossReference"
            }
          },
          {
            "$type": "Keyword",
            "value": "["
          },
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$refText": "AbstractType"
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Alternatives",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "deprecatedSyntax",
                    "operator": "?=",
                    "terminal": {
                      "$type": "Keyword",
                      "value": "|"
                    }
                  },
                  {
                    "$type": "Keyword",
                    "value": ":"
                  }
                ]
              },
              {
                "$type": "Assignment",
                "feature": "terminal",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "CrossReferenceableTerminal"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "]"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "CrossReferenceableTerminal",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Keyword"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "RuleCall"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParenthesizedElement",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Alternatives"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PredicatedGroup",
      "inferredType": {
        "$type": "InferredType",
        "name": "Group"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "=>"
              },
              {
                "$type": "Keyword",
                "value": "->"
              }
            ]
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "elements",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Alternatives"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ReturnType",
      "definition": {
        "$type": "Assignment",
        "feature": "name",
        "operator": "=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$refText": "PrimitiveType"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$refText": "ID"
              },
              "arguments": []
            }
          ]
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalRule",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "hidden",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "hidden"
            },
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "terminal"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "fragment",
                    "operator": "?=",
                    "terminal": {
                      "$type": "Keyword",
                      "value": "fragment"
                    }
                  },
                  {
                    "$type": "Assignment",
                    "feature": "name",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$refText": "ID"
                      },
                      "arguments": []
                    }
                  }
                ]
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "name",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$refText": "ID"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": "returns"
                      },
                      {
                        "$type": "Assignment",
                        "feature": "type",
                        "operator": "=",
                        "terminal": {
                          "$type": "RuleCall",
                          "rule": {
                            "$refText": "ReturnType"
                          },
                          "arguments": []
                        }
                      }
                    ],
                    "cardinality": "?"
                  }
                ]
              }
            ]
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "definition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "TerminalAlternatives"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "RegexLiteral",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/(?![*+?])(?:[^\\\\r\\\\n\\\\[/\\\\\\\\]|\\\\\\\\.|\\\\[(?:[^\\\\r\\\\n\\\\]\\\\\\\\]|\\\\\\\\.)*\\\\])+\\\\/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalAlternatives",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "TerminalGroup"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "TerminalAlternatives"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Keyword",
                "value": "|"
              },
              {
                "$type": "Assignment",
                "feature": "elements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "TerminalGroup"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalGroup",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "TerminalToken"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "TerminalGroup"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Assignment",
                "feature": "elements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "TerminalToken"
                  },
                  "arguments": []
                },
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "TerminalTokenElement"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "cardinality",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "?"
                },
                {
                  "$type": "Keyword",
                  "value": "*"
                },
                {
                  "$type": "Keyword",
                  "value": "+"
                }
              ]
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalTokenElement",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "CharacterRange"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "TerminalRuleCall"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "ParenthesizedTerminalElement"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "NegatedToken"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "UntilToken"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "RegexToken"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "Wildcard"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParenthesizedTerminalElement",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "TerminalAlternatives"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalRuleCall",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "TerminalRuleCall"
            }
          },
          {
            "$type": "Assignment",
            "feature": "rule",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$refText": "TerminalRule"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$refText": "ID"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "NegatedToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "NegatedToken"
            }
          },
          {
            "$type": "Keyword",
            "value": "!"
          },
          {
            "$type": "Assignment",
            "feature": "terminal",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "TerminalTokenElement"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UntilToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "UntilToken"
            }
          },
          {
            "$type": "Keyword",
            "value": "->"
          },
          {
            "$type": "Assignment",
            "feature": "terminal",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "TerminalTokenElement"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RegexToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "RegexToken"
            }
          },
          {
            "$type": "Assignment",
            "feature": "regex",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "RegexLiteral"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Wildcard",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "Wildcard"
            }
          },
          {
            "$type": "Keyword",
            "value": "."
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "CharacterRange",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "CharacterRange"
            }
          },
          {
            "$type": "Assignment",
            "feature": "left",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Keyword"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": ".."
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Keyword"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "FeatureName",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "current"
          },
          {
            "$type": "Keyword",
            "value": "entry"
          },
          {
            "$type": "Keyword",
            "value": "extends"
          },
          {
            "$type": "Keyword",
            "value": "false"
          },
          {
            "$type": "Keyword",
            "value": "fragment"
          },
          {
            "$type": "Keyword",
            "value": "grammar"
          },
          {
            "$type": "Keyword",
            "value": "hidden"
          },
          {
            "$type": "Keyword",
            "value": "import"
          },
          {
            "$type": "Keyword",
            "value": "interface"
          },
          {
            "$type": "Keyword",
            "value": "returns"
          },
          {
            "$type": "Keyword",
            "value": "terminal"
          },
          {
            "$type": "Keyword",
            "value": "true"
          },
          {
            "$type": "Keyword",
            "value": "type"
          },
          {
            "$type": "Keyword",
            "value": "infer"
          },
          {
            "$type": "Keyword",
            "value": "infers"
          },
          {
            "$type": "Keyword",
            "value": "with"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "PrimitiveType"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$refText": "ID"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\^?[_a-zA-Z][\\\\w_]*"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "STRING",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\"[^\\"]*\\"|'[^']*'"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\s+"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\/[^\\\\n\\\\r]*"
      },
      "fragment": false
    }
  ],
  "types": [
    {
      "$type": "Type",
      "typeAlternatives": [
        {
          "$type": "AtomType",
          "refType": {
            "$refText": "Interface"
          },
          "isArray": false,
          "isRef": false
        },
        {
          "$type": "AtomType",
          "refType": {
            "$refText": "Type"
          },
          "isArray": false,
          "isRef": false
        },
        {
          "$type": "AtomType",
          "refType": {
            "$refText": "Action"
          },
          "isArray": false,
          "isRef": false
        },
        {
          "$type": "AtomType",
          "refType": {
            "$refText": "ParserRule"
          },
          "isArray": false,
          "isRef": false
        }
      ],
      "name": "AbstractType"
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "imports": [],
  "interfaces": [],
  "usedGrammars": []
}`));Ys.LangiumGrammarGrammar=Nk});var by=E(Mn=>{"use strict";Object.defineProperty(Mn,"__esModule",{value:!0});Mn.LangiumGrammarGeneratedModule=Mn.LangiumGrammarGeneratedSharedModule=Mn.LangiumGrammarLanguageMetaData=void 0;var Sk=ze(),wk=Cy();Mn.LangiumGrammarLanguageMetaData={languageId:"langium",fileExtensions:[".langium"],caseInsensitive:!1};Mn.LangiumGrammarGeneratedSharedModule={AstReflection:()=>new Sk.LangiumGrammarAstReflection};Mn.LangiumGrammarGeneratedModule={Grammar:()=>(0,wk.LangiumGrammarGrammar)(),LanguageMetaData:()=>Mn.LangiumGrammarLanguageMetaData,parser:{}}});var Kr=E(Tt=>{"use strict";Object.defineProperty(Tt,"__esModule",{value:!0});Tt.Deferred=Tt.MutexLock=Tt.interruptAndCheck=Tt.isOperationCancelled=Tt.OperationCancelled=Tt.setInterruptionPeriod=Tt.startCancelableOperation=Tt.delayNextTick=void 0;var Xs=xn();function Ey(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}Tt.delayNextTick=Ey;var Kd=0,Py=10;function Dk(){return Kd=Date.now(),new Xs.CancellationTokenSource}Tt.startCancelableOperation=Dk;function Ok(t){Py=t}Tt.setInterruptionPeriod=Ok;Tt.OperationCancelled=Symbol("OperationCancelled");function ky(t){return t===Tt.OperationCancelled}Tt.isOperationCancelled=ky;async function xk(t){if(t===Xs.CancellationToken.None)return;let e=Date.now();if(e-Kd>=Py&&(Kd=e,await Ey()),t.isCancellationRequested)throw Tt.OperationCancelled}Tt.interruptAndCheck=xk;var Bd=class{constructor(){this.previousAction=Promise.resolve(),this.previousTokenSource=new Xs.CancellationTokenSource}lock(e){this.cancel();let r=new Xs.CancellationTokenSource;return this.previousTokenSource=r,this.previousAction=this.previousAction.then(()=>e(r.token).catch(n=>{ky(n)||console.error("Error: ",n)}))}cancel(){this.previousTokenSource.cancel()}};Tt.MutexLock=Bd;var zd=class{constructor(){this.promise=new Promise((e,r)=>{this.resolve=n=>(e(n),this),this.reject=n=>(r(n),this)})}};Tt.Deferred=zd});var Qs=E(Js=>{"use strict";Object.defineProperty(Js,"__esModule",{value:!0});Js.DefaultScopeComputation=void 0;var Vd=xn(),Ny=Re(),Ik=br(),Sy=Kr(),Yd=class{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,r=Vd.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,r)}async computeExportsForNode(e,r,n=Ny.streamContents,i=Vd.CancellationToken.None){let o=[];this.exportNode(e,o,r);for(let a of n(e))await(0,Sy.interruptAndCheck)(i),this.exportNode(a,o,r);return o}exportNode(e,r,n){let i=this.nameProvider.getName(e);i&&r.push(this.descriptions.createDescription(e,i,n))}async computeLocalScopes(e,r=Vd.CancellationToken.None){let n=e.parseResult.value,i=new Ik.MultiMap;for(let o of(0,Ny.streamAllContents)(n))await(0,Sy.interruptAndCheck)(r),this.processNode(o,e,i);return i}processNode(e,r,n){let i=e.$container;if(i){let o=this.nameProvider.getName(e);o&&n.add(i,this.descriptions.createDescription(e,o,r))}}computeScope(){throw new Error("Deprecated: This method has been renamed to `computeLocalScopes`.")}};Js.DefaultScopeComputation=Yd});var eu=E(ai=>{"use strict";Object.defineProperty(ai,"__esModule",{value:!0});ai.DefaultScopeProvider=ai.EMPTY_SCOPE=ai.StreamScope=void 0;var Mk=Re(),Zs=bt(),fo=class{constructor(e,r,n){this.elements=e,this.outerScope=r,this.caseInsensitive=n?.caseInsensitive}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){let r=this.caseInsensitive?this.elements.find(n=>n.name.toLowerCase()===e.toLowerCase()):this.elements.find(n=>n.name===e);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}};ai.StreamScope=fo;ai.EMPTY_SCOPE={getElement(){},getAllElements(){return Zs.EMPTY_STREAM}};var Xd=class{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager}getScope(e){let r=[],n=this.reflection.getReferenceType(e),i=(0,Mk.getDocument)(e.container).precomputedScopes;if(i){let a=e.container;do{let s=i.get(a);s.length>0&&r.push((0,Zs.stream)(s).filter(u=>this.reflection.isSubtype(u.type,n))),a=a.$container}while(a)}let o=this.getGlobalScope(n);for(let a=r.length-1;a>=0;a--)o=this.createScope(r[a],o);return o}createScope(e,r,n){return new fo((0,Zs.stream)(e),r,n)}createScopeForNodes(e,r,n){let i=(0,Zs.stream)(e).map(o=>{let a=this.nameProvider.getName(o);if(a)return this.descriptions.createDescription(o,a)}).nonNullable();return new fo(i,r,n)}getGlobalScope(e){return new fo(this.indexManager.allElements(e))}};ai.DefaultScopeProvider=Xd});var nu=E(Er=>{"use strict";Object.defineProperty(Er,"__esModule",{value:!0});Er.NLEmpty=Er.NL=Er.NewLineNode=Er.IndentNode=Er.CompositeGeneratorNode=void 0;var Lk=typeof process>"u"?`
`:process.platform==="win32"?`\r
`:`
`,tu=class{constructor(...e){this.contents=[],this.append(...e)}append(...e){for(let r of e)typeof r=="function"?r(this):this.contents.push(r);return this}indent(e){let r=new ru;return this.contents.push(r),e&&e(r),this}};Er.CompositeGeneratorNode=tu;var ru=class extends tu{constructor(e,r=!0,n=!1){super(),this.indentImmediately=!0,this.indentEmptyLines=!1,typeof e=="string"?this.indentation=e:typeof e=="number"&&(this.indentation="".padStart(e)),this.indentImmediately=r,this.indentEmptyLines=n}};Er.IndentNode=ru;var pa=class{constructor(e,r=!1){this.ifNotEmpty=!1,this.lineDelimiter=e??Lk,this.ifNotEmpty=r}};Er.NewLineNode=pa;Er.NL=new pa;Er.NLEmpty=new pa(void 0,!0)});var Qd=E(iu=>{"use strict";Object.defineProperty(iu,"__esModule",{value:!0});iu.processGeneratorNode=void 0;var ha=nu(),Jd=class{constructor(e){this.defaultIndentation="    ",this.pendingIndent=!0,this.currentIndents=[],this.lines=[[]],typeof e=="string"?this.defaultIndentation=e:typeof e=="number"&&(this.defaultIndentation="".padStart(e))}get content(){return this.lines.map(e=>e.join("")).join("")}get currentLineNumber(){return this.lines.length-1}get currentLineContent(){return this.lines[this.currentLineNumber].join("")}append(e){e.length>0&&this.lines[this.currentLineNumber].push(e)}increaseIndent(e){this.currentIndents.push(e)}decreaseIndent(){this.currentIndents.pop()}resetCurrentLine(){this.lines[this.currentLineNumber]=[]}addNewLine(){this.pendingIndent=!0,this.lines.push([])}};function $k(t,e){let r=new Jd(e);return wy(t,r),r.content}iu.processGeneratorNode=$k;function wy(t,e){typeof t=="string"?qk(t,e):t instanceof ha.IndentNode?Fk(t,e):t instanceof ha.CompositeGeneratorNode?xy(t,e):t instanceof ha.NewLineNode&&jk(t,e)}function Dy(t,e){return typeof t=="string"?Iy(t):t instanceof ha.CompositeGeneratorNode?t.contents.some(r=>Dy(r,e)):t instanceof ha.NewLineNode?!(t.ifNotEmpty&&e.currentLineContent.length===0):!1}function qk(t,e){t&&(e.pendingIndent&&Oy(e,!1),e.append(t))}function Oy(t,e){var r;let n="";for(let i of t.currentIndents.filter(o=>o.indentEmptyLines||!e))n+=(r=i.indentation)!==null&&r!==void 0?r:t.defaultIndentation;t.append(n),t.pendingIndent=!1}function xy(t,e){for(let r of t.contents)wy(r,e)}function Fk(t,e){var r;if(Dy(t,e)){t.indentImmediately&&!e.pendingIndent&&e.append((r=t.indentation)!==null&&r!==void 0?r:e.defaultIndentation);try{e.increaseIndent(t),xy(t,e)}finally{e.decreaseIndent()}}}function jk(t,e){t.ifNotEmpty&&!Iy(e.currentLineContent)?e.resetCurrentLine():(e.pendingIndent&&Oy(e,!0),e.append(t.lineDelimiter),e.addNewLine())}function Iy(t){return t.trimStart()!==""}});var ui=E(ct=>{"use strict";Object.defineProperty(ct,"__esModule",{value:!0});ct.collectSuperTypes=ct.collectChildrenTypes=ct.typePropertyToString=ct.distinctAndSorted=ct.propertyTypeArrayToString=ct.collectAllAstResources=ct.collectAllProperties=ct.TypeResolutionError=ct.InterfaceType=ct.UnionType=void 0;var tr=nu(),Ly=Qd(),Gk=Re(),Uk=br(),si=ze(),My=Lt(),Zd=class{constructor(e,r,n){var i;this.superTypes=new Set,this.name=e,this.union=r,this.reflection=(i=n?.reflection)!==null&&i!==void 0?i:!1}toString(){let e=new tr.CompositeGeneratorNode;return e.contents.push(`export type ${this.name} = ${nf(this.union)};`,tr.NL),this.reflection&&Fy(this.name,e),(0,Ly.processGeneratorNode)(e)}};ct.UnionType=Zd;var ef=class{constructor(e,r,n){this.superTypes=new Set,this.interfaceSuperTypes=[],this.subTypes=new Set,this.containerTypes=new Set,this.name=e,this.superTypes=new Set(r),this.interfaceSuperTypes=[...r],this.properties=n}toString(){let e=new tr.CompositeGeneratorNode,r=this.interfaceSuperTypes.length>0?po([...this.interfaceSuperTypes]):["AstNode"];e.contents.push(`export interface ${this.name} extends ${r.join(", ")} {`,tr.NL);let n=new tr.IndentNode;this.containerTypes.size>0&&n.contents.push(`readonly $container: ${po([...this.containerTypes]).join(" | ")};`,tr.NL);for(let i of po(this.properties,(o,a)=>o.name.localeCompare(a.name))){let o=i.optional&&!i.typeAlternatives.some(s=>s.array)&&!i.typeAlternatives.every(s=>s.types.length===1&&s.types[0]==="boolean")?"?":"",a=nf(i.typeAlternatives);n.contents.push(`${i.name}${o}: ${a}`,tr.NL)}return e.contents.push(n,"}",tr.NL),Fy(this.name,e),(0,Ly.processGeneratorNode)(e)}};ct.InterfaceType=ef;var tf=class extends Error{constructor(e,r){super(e),this.name="TypeResolutionError",this.target=r}};ct.TypeResolutionError=tf;function Hk(t){let e=new Uk.MultiMap;for(let r of t)e.addAll(r.name,r.properties);for(let r of t)for(let n of r.interfaceSuperTypes){let i=e.get(n);i&&e.addAll(r.name,i)}return e}ct.collectAllProperties=Hk;function $y(t,e,r=new Set,n={parserRules:new Set,datatypeRules:new Set,interfaces:new Set,types:new Set}){for(let i of t){let o=(0,Gk.getDocument)(i);if(!r.has(o.uri)){r.add(o.uri);for(let a of i.rules)(0,si.isParserRule)(a)&&!a.fragment&&((0,My.isDataTypeRule)(a)?n.datatypeRules.add(a):n.parserRules.add(a));if(i.interfaces.forEach(a=>n.interfaces.add(a)),i.types.forEach(a=>n.types.add(a)),e){let a=i.imports.map(s=>(0,My.resolveImport)(e,s));$y(a,e,r,n)}}}return n}ct.collectAllAstResources=$y;function nf(t){return po(t.map(qy)).join(" | ")}ct.propertyTypeArrayToString=nf;function po(t,e){return Array.from(new Set(t)).sort(e)}ct.distinctAndSorted=po;function qy(t){let e=po(t.types).join(" | ");return e=t.reference?`Reference<${e}>`:e,e=t.array?`Array<${e}>`:e,e}ct.typePropertyToString=qy;function Fy(t,e){e.contents.push(tr.NL,`export const ${t} = '${t}';`,tr.NL,tr.NL),e.contents.push(`export function is${t}(item: unknown): item is ${t} {`,tr.NL);let r=new tr.IndentNode;r.contents.push(`return reflection.isInstance(item, ${t});`,tr.NL),e.contents.push(r,"}",tr.NL)}function jy(t,e,r,n){let i=new Set;return i.add(t),e.findReferences(t,{}).forEach(a=>{let s=r.getOrCreateDocument(a.sourceUri),u=n.getAstNode(s,a.sourcePath);(0,si.isInterface)(u)?(i.add(u),jy(u,e,r,n).forEach(l=>i.add(l))):u&&(0,si.isType)(u.$container)&&i.add(u.$container)}),i}ct.collectChildrenTypes=jy;function rf(t){let e=new Set;return(0,si.isInterface)(t)?(e.add(t),t.superTypes.forEach(r=>{if((0,si.isInterface)(r.ref)){e.add(r.ref);let n=rf(r.ref);for(let i of n)e.add(i)}})):(0,si.isType)(t)&&t.typeAlternatives.forEach(r=>{var n;if(!((n=r.refType)===null||n===void 0)&&n.ref&&((0,si.isInterface)(r.refType.ref)||(0,si.isType)(r.refType.ref))){let i=rf(r.refType.ref);for(let o of i)e.add(o)}}),e}ct.collectSuperTypes=rf});var ma=E((Gy,ou)=>{(function(t,e){typeof define=="function"&&define.amd?define([],e):typeof ou=="object"&&ou.exports?ou.exports=e():t.regexpToAst=e()})(typeof self<"u"?self:Gy,function(){function t(){}t.prototype.saveState=function(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}},t.prototype.restoreState=function(h){this.idx=h.idx,this.input=h.input,this.groupIdx=h.groupIdx},t.prototype.pattern=function(h){this.idx=0,this.input=h,this.groupIdx=0,this.consumeChar("/");var A=this.disjunction();this.consumeChar("/");for(var w={type:"Flags",loc:{begin:this.idx,end:h.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};this.isRegExpFlag();)switch(this.popChar()){case"g":a(w,"global");break;case"i":a(w,"ignoreCase");break;case"m":a(w,"multiLine");break;case"u":a(w,"unicode");break;case"y":a(w,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:w,value:A,loc:this.loc(0)}},t.prototype.disjunction=function(){var h=[],A=this.idx;for(h.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),h.push(this.alternative());return{type:"Disjunction",value:h,loc:this.loc(A)}},t.prototype.alternative=function(){for(var h=[],A=this.idx;this.isTerm();)h.push(this.term());return{type:"Alternative",value:h,loc:this.loc(A)}},t.prototype.term=function(){return this.isAssertion()?this.assertion():this.atom()},t.prototype.assertion=function(){var h=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(h)};case"$":return{type:"EndAnchor",loc:this.loc(h)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(h)};case"B":return{type:"NonWordBoundary",loc:this.loc(h)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");var A;switch(this.popChar()){case"=":A="Lookahead";break;case"!":A="NegativeLookahead";break}s(A);var w=this.disjunction();return this.consumeChar(")"),{type:A,value:w,loc:this.loc(h)}}u()},t.prototype.quantifier=function(h){var A,w=this.idx;switch(this.popChar()){case"*":A={atLeast:0,atMost:1/0};break;case"+":A={atLeast:1,atMost:1/0};break;case"?":A={atLeast:0,atMost:1};break;case"{":var k=this.integerIncludingZero();switch(this.popChar()){case"}":A={atLeast:k,atMost:k};break;case",":var R;this.isDigit()?(R=this.integerIncludingZero(),A={atLeast:k,atMost:R}):A={atLeast:k,atMost:1/0},this.consumeChar("}");break}if(h===!0&&A===void 0)return;s(A);break}if(!(h===!0&&A===void 0))return s(A),this.peekChar(0)==="?"?(this.consumeChar("?"),A.greedy=!1):A.greedy=!0,A.type="Quantifier",A.loc=this.loc(w),A},t.prototype.atom=function(){var h,A=this.idx;switch(this.peekChar()){case".":h=this.dotAll();break;case"\\":h=this.atomEscape();break;case"[":h=this.characterClass();break;case"(":h=this.group();break}return h===void 0&&this.isPatternCharacter()&&(h=this.patternCharacter()),s(h),h.loc=this.loc(A),this.isQuantifier()&&(h.quantifier=this.quantifier()),h},t.prototype.dotAll=function(){return this.consumeChar("."),{type:"Set",complement:!0,value:[i(`
`),i("\r"),i("\u2028"),i("\u2029")]}},t.prototype.atomEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.decimalEscapeAtom=function(){var h=this.positiveInteger();return{type:"GroupBackReference",value:h}},t.prototype.characterClassEscape=function(){var h,A=!1;switch(this.popChar()){case"d":h=l;break;case"D":h=l,A=!0;break;case"s":h=y;break;case"S":h=y,A=!0;break;case"w":h=f;break;case"W":h=f,A=!0;break}return s(h),{type:"Set",value:h,complement:A}},t.prototype.controlEscapeAtom=function(){var h;switch(this.popChar()){case"f":h=i("\f");break;case"n":h=i(`
`);break;case"r":h=i("\r");break;case"t":h=i("	");break;case"v":h=i("\v");break}return s(h),{type:"Character",value:h}},t.prototype.controlLetterEscapeAtom=function(){this.consumeChar("c");var h=this.popChar();if(/[a-zA-Z]/.test(h)===!1)throw Error("Invalid ");var A=h.toUpperCase().charCodeAt(0)-64;return{type:"Character",value:A}},t.prototype.nulCharacterAtom=function(){return this.consumeChar("0"),{type:"Character",value:i("\0")}},t.prototype.hexEscapeSequenceAtom=function(){return this.consumeChar("x"),this.parseHexDigits(2)},t.prototype.regExpUnicodeEscapeSequenceAtom=function(){return this.consumeChar("u"),this.parseHexDigits(4)},t.prototype.identityEscapeAtom=function(){var h=this.popChar();return{type:"Character",value:i(h)}},t.prototype.classPatternCharacterAtom=function(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:var h=this.popChar();return{type:"Character",value:i(h)}}},t.prototype.characterClass=function(){var h=[],A=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),A=!0);this.isClassAtom();){var w=this.classAtom(),k=w.type==="Character";if(k&&this.isRangeDash()){this.consumeChar("-");var R=this.classAtom(),T=R.type==="Character";if(T){if(R.value<w.value)throw Error("Range out of order in character class");h.push({from:w.value,to:R.value})}else o(w.value,h),h.push(i("-")),o(R.value,h)}else o(w.value,h)}return this.consumeChar("]"),{type:"Set",complement:A,value:h}},t.prototype.classAtom=function(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}},t.prototype.classEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:i("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.group=function(){var h=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),h=!1;break;default:this.groupIdx++;break}var A=this.disjunction();this.consumeChar(")");var w={type:"Group",capturing:h,value:A};return h&&(w.idx=this.groupIdx),w},t.prototype.positiveInteger=function(){var h=this.popChar();if(n.test(h)===!1)throw Error("Expecting a positive integer");for(;r.test(this.peekChar(0));)h+=this.popChar();return parseInt(h,10)},t.prototype.integerIncludingZero=function(){var h=this.popChar();if(r.test(h)===!1)throw Error("Expecting an integer");for(;r.test(this.peekChar(0));)h+=this.popChar();return parseInt(h,10)},t.prototype.patternCharacter=function(){var h=this.popChar();switch(h){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:i(h)}}},t.prototype.isRegExpFlag=function(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}},t.prototype.isRangeDash=function(){return this.peekChar()==="-"&&this.isClassAtom(1)},t.prototype.isDigit=function(){return r.test(this.peekChar(0))},t.prototype.isClassAtom=function(h){switch(h===void 0&&(h=0),this.peekChar(h)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.isTerm=function(){return this.isAtom()||this.isAssertion()},t.prototype.isAtom=function(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}},t.prototype.isAssertion=function(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}},t.prototype.isQuantifier=function(){var h=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(h)}},t.prototype.isPatternCharacter=function(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.parseHexDigits=function(h){for(var A="",w=0;w<h;w++){var k=this.popChar();if(e.test(k)===!1)throw Error("Expecting a HexDecimal digits");A+=k}var R=parseInt(A,16);return{type:"Character",value:R}},t.prototype.peekChar=function(h){return h===void 0&&(h=0),this.input[this.idx+h]},t.prototype.popChar=function(){var h=this.peekChar(0);return this.consumeChar(),h},t.prototype.consumeChar=function(h){if(h!==void 0&&this.input[this.idx]!==h)throw Error("Expected: '"+h+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++},t.prototype.loc=function(h){return{begin:h,end:this.idx}};var e=/[0-9a-fA-F]/,r=/[0-9]/,n=/[1-9]/;function i(h){return h.charCodeAt(0)}function o(h,A){h.length!==void 0?h.forEach(function(w){A.push(w)}):A.push(h)}function a(h,A){if(h[A]===!0)throw"duplicate flag "+A;h[A]=!0}function s(h){if(h===void 0)throw Error("Internal Error - Should never get here!")}function u(){throw Error("Internal Error - Should never get here!")}var c,l=[];for(c=i("0");c<=i("9");c++)l.push(c);var f=[i("_")].concat(l);for(c=i("a");c<=i("z");c++)f.push(c);for(c=i("A");c<=i("Z");c++)f.push(c);var y=[i(" "),i("\f"),i(`
`),i("\r"),i("	"),i("\v"),i("	"),i("\xA0"),i("\u1680"),i("\u2000"),i("\u2001"),i("\u2002"),i("\u2003"),i("\u2004"),i("\u2005"),i("\u2006"),i("\u2007"),i("\u2008"),i("\u2009"),i("\u200A"),i("\u2028"),i("\u2029"),i("\u202F"),i("\u205F"),i("\u3000"),i("\uFEFF")];function _(){}return _.prototype.visitChildren=function(h){for(var A in h){var w=h[A];h.hasOwnProperty(A)&&(w.type!==void 0?this.visit(w):Array.isArray(w)&&w.forEach(function(k){this.visit(k)},this))}},_.prototype.visit=function(h){switch(h.type){case"Pattern":this.visitPattern(h);break;case"Flags":this.visitFlags(h);break;case"Disjunction":this.visitDisjunction(h);break;case"Alternative":this.visitAlternative(h);break;case"StartAnchor":this.visitStartAnchor(h);break;case"EndAnchor":this.visitEndAnchor(h);break;case"WordBoundary":this.visitWordBoundary(h);break;case"NonWordBoundary":this.visitNonWordBoundary(h);break;case"Lookahead":this.visitLookahead(h);break;case"NegativeLookahead":this.visitNegativeLookahead(h);break;case"Character":this.visitCharacter(h);break;case"Set":this.visitSet(h);break;case"Group":this.visitGroup(h);break;case"GroupBackReference":this.visitGroupBackReference(h);break;case"Quantifier":this.visitQuantifier(h);break}this.visitChildren(h)},_.prototype.visitPattern=function(h){},_.prototype.visitFlags=function(h){},_.prototype.visitDisjunction=function(h){},_.prototype.visitAlternative=function(h){},_.prototype.visitStartAnchor=function(h){},_.prototype.visitEndAnchor=function(h){},_.prototype.visitWordBoundary=function(h){},_.prototype.visitNonWordBoundary=function(h){},_.prototype.visitLookahead=function(h){},_.prototype.visitNegativeLookahead=function(h){},_.prototype.visitCharacter=function(h){},_.prototype.visitSet=function(h){},_.prototype.visitGroup=function(h){},_.prototype.visitGroupBackReference=function(h){},_.prototype.visitQuantifier=function(h){},{RegExpParser:t,BaseRegExpVisitor:_,VERSION:"0.5.0"}})});var ho=E(Wt=>{"use strict";Object.defineProperty(Wt,"__esModule",{value:!0});Wt.partialRegex=Wt.partialMatches=Wt.getCaseInsensitivePattern=Wt.escapeRegExp=Wt.isWhitespaceRegExp=Wt.isMultilineComment=Wt.getTerminalParts=void 0;var Uy=ma(),Hy=new Uy.RegExpParser,of=class extends Uy.BaseRegExpVisitor{constructor(){super(...arguments),this.isStarting=!0,this.endRegexStack=[],this.multiline=!1}get endRegex(){return this.endRegexStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegex="",this.isStarting=!0,this.endRegexStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexStack=[])}visitCharacter(e){let r=String.fromCharCode(e.value);if(!this.multiline&&r===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexStack=[];else{let n=af(r);this.endRegexStack.push(n),this.isStarting&&(this.startRegex+=n)}}visitSet(e){if(!this.multiline){let r=this.regex.substring(e.loc.begin,e.loc.end),n=new RegExp(r);this.multiline=!!`
`.match(n)}if(e.quantifier)this.isStarting=!1,this.endRegexStack=[];else{let r=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexStack.push(r),this.isStarting&&(this.startRegex+=r)}}},Ei=new of;function Wk(t){try{typeof t!="string"&&(t=t.source),t=`/${t}/`;let e=Hy.pattern(t),r=[];for(let n of e.value.value)Ei.reset(t),Ei.visit(n),r.push({start:Ei.startRegex,end:Ei.endRegex});return r}catch{return[]}}Wt.getTerminalParts=Wk;function Kk(t){try{return typeof t!="string"&&(t=t.source),t=`/${t}/`,Ei.reset(t),Ei.visit(Hy.pattern(t)),Ei.multiline}catch{return!1}}Wt.isMultilineComment=Kk;function Bk(t){return(typeof t=="string"?new RegExp(t):t).test(" ")}Wt.isWhitespaceRegExp=Bk;function af(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}Wt.escapeRegExp=af;function zk(t){return Array.prototype.map.call(t,e=>/\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:af(e)).join("")}Wt.getCaseInsensitivePattern=zk;function Vk(t,e){let r=Wy(t),n=e.match(r);return!!n&&n[0].length>0}Wt.partialMatches=Vk;function Wy(t){typeof t=="string"&&(t=new RegExp(t));let e=t,r=t.source,n=0;function i(){let o="",a;function s(c){o+=r.substr(n,c),n+=c}function u(c){o+="(?:"+r.substr(n,c)+"|$)",n+=c}for(;n<r.length;)switch(r[n]){case"\\":switch(r[n+1]){case"c":u(3);break;case"x":u(4);break;case"u":e.unicode?r[n+2]==="{"?u(r.indexOf("}",n)-n+1):u(6):u(2);break;case"p":case"P":e.unicode?u(r.indexOf("}",n)-n+1):u(2);break;case"k":u(r.indexOf(">",n)-n+1);break;default:u(2);break}break;case"[":a=/\[(?:\\.|.)*?\]/g,a.lastIndex=n,a=a.exec(r)||[],u(a[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":s(1);break;case"{":a=/\{\d+,?\d*\}/g,a.lastIndex=n,a=a.exec(r),a?s(a[0].length):u(1);break;case"(":if(r[n+1]==="?")switch(r[n+2]){case":":o+="(?:",n+=3,o+=i()+"|$)";break;case"=":o+="(?=",n+=3,o+=i()+")";break;case"!":a=n,n+=3,i(),o+=r.substr(a,n-a);break;case"<":switch(r[n+3]){case"=":case"!":a=n,n+=4,i(),o+=r.substr(a,n-a);break;default:s(r.indexOf(">",n)-n+1),o+=i()+"|$)";break}break}else s(1),o+=i()+"|$)";break;case")":return++n,o;default:u(1);break}return o}return new RegExp(i(),t.flags)}Wt.partialRegex=Wy});var Lt=E(ae=>{"use strict";var Yk=ae&&ae.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Xk=ae&&ae.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),Jk=ae&&ae.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&Yk(e,t,r);return Xk(e,t),e};Object.defineProperty(ae,"__esModule",{value:!0});ae.extractAssignments=ae.processActionNodeWithNodeDescriptionProvider=ae.processTypeNodeWithNodeLocator=ae.prepareGrammar=ae.resolveTransitiveImports=ae.resolveImport=ae.terminalRegex=ae.getRuleType=ae.getExplicitRuleType=ae.getTypeName=ae.getActionAtElement=ae.isDataTypeRule=ae.isArrayOperator=ae.isArrayCardinality=ae.isOptionalCardinality=void 0;var pe=Jk(ze()),uf=Nn(),Pi=Re(),Qk=br(),Zk=ui(),eN=ho();function tN(t){return t==="?"||t==="*"}ae.isOptionalCardinality=tN;function rN(t){return t==="*"||t==="+"}ae.isArrayCardinality=rN;function nN(t){return t==="+="}ae.isArrayOperator=nN;function lf(t){return Ky(t,new Set)}ae.isDataTypeRule=lf;function Ky(t,e){if(e.has(t))return!0;e.add(t);for(let r of(0,Pi.streamAllContents)(t))if(pe.isRuleCall(r)&&pe.isParserRule(r.rule.ref)){if(!Ky(r.rule.ref,e))return!1}else{if(pe.isAssignment(r))return!1;if(pe.isAction(r))return!1}return!0}function By(t){let e=t.$container;if(pe.isGroup(e)){let r=e.elements,n=r.indexOf(t);for(let i=n-1;i>=0;i--){let o=r[i];if(pe.isAction(o))return o;{let a=(0,Pi.streamAllContents)(r[i]).find(pe.isAction);if(a)return a}}}if(pe.isAbstractElement(e))return By(e)}ae.getActionAtElement=By;function zy(t){var e;if(pe.isParserRule(t))return lf(t)?t.name:(e=df(t))!==null&&e!==void 0?e:t.name;if(pe.isInterface(t)||pe.isType(t)||pe.isReturnType(t))return t.name;if(pe.isAction(t)){let r=Vy(t);if(r)return r}else if(pe.isInferredType(t))return t.name;throw new Zk.TypeResolutionError("Cannot get name of Unknown Type",t.$cstNode)}ae.getTypeName=zy;function df(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){let e=t.returnType.ref;if(e){if(pe.isParserRule(e))return e.name;if(pe.isInterface(e)||pe.isType(e))return e.name}}}ae.getExplicitRuleType=df;function Vy(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return zy(t.type.ref)}function iN(t){var e,r,n;return pe.isTerminalRule(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":lf(t)?t.name:(n=df(t))!==null&&n!==void 0?n:t.name}ae.getRuleType=iN;function Yy(t){return ga(t.definition)}ae.terminalRegex=Yy;var ff=/[\s\S]/.source;function ga(t){if(pe.isTerminalAlternatives(t))return oN(t);if(pe.isTerminalGroup(t))return aN(t);if(pe.isCharacterRange(t))return cN(t);if(pe.isTerminalRuleCall(t)){let e=t.rule.ref;if(!e)throw new Error("Missing rule reference.");return Ln(Yy(e),t.cardinality)}else{if(pe.isNegatedToken(t))return uN(t);if(pe.isUntilToken(t))return sN(t);if(pe.isRegexToken(t))return Ln(t.regex,t.cardinality,!1);if(pe.isWildcard(t))return Ln(ff,t.cardinality);throw new Error("Invalid terminal element.")}}function oN(t){return Ln(t.elements.map(ga).join("|"),t.cardinality)}function aN(t){return Ln(t.elements.map(ga).join(""),t.cardinality)}function sN(t){return Ln(`${ff}*?${ga(t.terminal)}`,t.cardinality)}function uN(t){return Ln(`(?!${ga(t.terminal)})${ff}*?`,t.cardinality)}function cN(t){return t.right?Ln(`[${sf(t.left)}-${sf(t.right)}]`,t.cardinality,!1):Ln(sf(t.left),t.cardinality,!1)}function sf(t){return(0,eN.escapeRegExp)(t.value)}function Ln(t,e,r=!0){return r&&(t=`(${t})`),e?`${t}${e}`:t}function pf(t,e){if(e.path===void 0||e.path.length===0)return;let r=uf.Utils.dirname((0,Pi.getDocument)(e).uri),n=e.path;n.endsWith(".langium")||(n+=".langium");let i=uf.Utils.resolvePath(r,n);try{let a=t.getOrCreateDocument(i).parseResult.value;if(pe.isGrammar(a))return a}catch{}}ae.resolveImport=pf;function lN(t,e){if(pe.isGrammarImport(e)){let r=pf(t,e);if(r){let n=cf(t,r);return n.push(r),n}return[]}else return cf(t,e)}ae.resolveTransitiveImports=lN;function cf(t,e,r=e,n=new Set,i=new Set){let o=(0,Pi.getDocument)(e);if(r!==e&&i.add(e),!n.has(o.uri)){n.add(o.uri);for(let a of e.imports){let s=pf(t,a);s&&cf(t,s,r,n,i)}}return Array.from(i)}function dN(t,e){let r=e,n=t.shared.workspace.LangiumDocumentFactory.fromModel(e,uf.URI.parse("memory://grammar.langium"));return r.$document=n,n.precomputedScopes=fN(t,e),e}ae.prepareGrammar=dN;function fN(t,e){let r=t.references.NameProvider,n=t.workspace.AstNodeDescriptionProvider,i=(0,Pi.getDocument)(e),o=new Qk.MultiMap,a=Xy(t.workspace.AstNodeLocator),s=Jy(n);for(let u of(0,Pi.streamAllContents)(e)){if(pe.isReturnType(u))continue;s(u,i,o),a(u,i,o);let c=u.$container;if(c){let l=r.getName(u);l&&o.add(c,n.createDescription(u,l,i))}}return o}function Xy(t){return(e,r,n)=>{var i;let o=e.$container;if(o&&pe.isParserRule(e)&&!e.returnType&&!e.dataType){let a=(i=e.inferredType)!==null&&i!==void 0?i:e;n.add(o,{node:a,name:a.name,type:"Interface",documentUri:r.uri,path:t.getAstNodePath(a)})}}}ae.processTypeNodeWithNodeLocator=Xy;function Jy(t){return(e,r,n)=>{let i=(0,Pi.findRootNode)(e);if(i&&pe.isAction(e)&&e.inferredType){let o=Vy(e);o&&n.add(i,t.createDescription(e,o,r))}}}ae.processActionNodeWithNodeDescriptionProvider=Jy;function Qy(t){return pe.isAssignment(t)?[t]:pe.isAlternatives(t)||pe.isGroup(t)||pe.isUnorderedGroup(t)?t.elements.flatMap(e=>Qy(e)):[]}ae.extractAssignments=Qy});var tv=E(mo=>{"use strict";Object.defineProperty(mo,"__esModule",{value:!0});mo.LangiumGrammarScopeComputation=mo.LangiumGrammarScopeProvider=void 0;var pN=Qs(),hN=eu(),Zy=Re(),mN=bt(),gN=ze(),ev=Lt(),hf=class extends hN.DefaultScopeProvider{constructor(e){super(e)}getScope(e){let r=this.reflection.getReferenceType(e);if(r!=="AbstractType")return super.getScope(e);let n=[],i=(0,Zy.getDocument)(e.container).precomputedScopes,o=(0,Zy.findRootNode)(e.container);if(i&&o){let s=i.get(o),u=[],c=[];if(s.length>0){for(let l of s)this.reflection.isSubtype(l.type,"ParserRule")?u.push(l):this.reflection.isSubtype(l.type,r)&&c.push(l);n.push((0,mN.stream)(c.concat(u.filter(l=>!c.some(f=>f.name===l.name)))))}}let a=this.getGlobalScope(r);for(let s=n.length-1;s>=0;s--)a=this.createScope(n[s],a);return a}};mo.LangiumGrammarScopeProvider=hf;var mf=class extends pN.DefaultScopeComputation{constructor(e){super(e),this.processTypeNode=(0,ev.processTypeNodeWithNodeLocator)(e.workspace.AstNodeLocator),this.processActionNode=(0,ev.processActionNodeWithNodeDescriptionProvider)(e.workspace.AstNodeDescriptionProvider)}processNode(e,r,n){(0,gN.isReturnType)(e)||(this.processTypeNode(e,r,n),this.processActionNode(e,r,n),super.processNode(e,r,n))}};mo.LangiumGrammarScopeComputation=mf});var ci=E(go=>{"use strict";Object.defineProperty(go,"__esModule",{value:!0});go.relativeURI=go.equalURI=void 0;function yN(t,e){return t?.toString()===e?.toString()}go.equalURI=yN;function vN(t,e){let r=t.path,n=e.path,i=r.split("/").filter(c=>c.length>0),o=n.split("/").filter(c=>c.length>0),a=0;for(;a<i.length&&i[a]===o[a];a++);let s="../".repeat(i.length-a),u=o.slice(a).join("/");return s+u}go.relativeURI=vN});var su=E(au=>{"use strict";Object.defineProperty(au,"__esModule",{value:!0});au.ValidationRegistry=void 0;var TN=br(),_N=Kr(),gf=class{constructor(e){this.validationChecks=new TN.MultiMap,this.reflection=e.shared.AstReflection}register(e,r=this){for(let[n,i]of Object.entries(e))if(Array.isArray(i))for(let o of i)this.doRegister(n,this.wrapValidationException(o,r));else i&&this.doRegister(n,this.wrapValidationException(i,r))}wrapValidationException(e,r){return async(n,i,o)=>{try{await e.call(r,n,i,o)}catch(a){if((0,_N.isOperationCancelled)(a))throw a;console.error("An error occurred during validation:",a);let s=a instanceof Error?a.message:String(a);a instanceof Error&&a.stack&&console.error(a.stack),i("error","An error occurred during validation: "+s,{node:n})}}}doRegister(e,r){for(let n of this.reflection.getAllTypes())this.reflection.isSubtype(n,e)&&this.validationChecks.add(n,r)}getChecks(e){return this.validationChecks.get(e)}};au.ValidationRegistry=gf});var vf=E(uu=>{"use strict";Object.defineProperty(uu,"__esModule",{value:!0});uu.collectDeclaredTypes=void 0;var yf=Lt(),rv=ui(),RN=br();function AN(t,e,r){var n;function i(s,u){var c;let l=(c=u.unions.find(f=>f.name===s))!==null&&c!==void 0?c:u.interfaces.find(f=>f.name===s);l&&a.get(s).forEach(f=>l.superTypes.add(f))}let o={unions:[],interfaces:[]};for(let s of t){let u=s.superTypes.filter(l=>l.ref).map(l=>(0,yf.getTypeName)(l.ref)),c=s.attributes.map(l=>({name:l.name,optional:l.isOptional===!0,typeAlternatives:l.typeAlternatives.map(nv)}));o.interfaces.push(new rv.InterfaceType(s.name,u,c))}let a=new RN.MultiMap;for(let s of e){let u=s.typeAlternatives.map(nv),c=s.typeAlternatives.length>1&&s.typeAlternatives.some(l=>{var f;return((f=l.refType)===null||f===void 0?void 0:f.ref)!==void 0});if(o.unions.push(new rv.UnionType(s.name,u,{reflection:c})),c)for(let l of s.typeAlternatives)!((n=l.refType)===null||n===void 0)&&n.ref&&a.add((0,yf.getTypeName)(l.refType.ref),s.name)}for(let s of a.keys())i(s,r),i(s,o);return o}uu.collectDeclaredTypes=AN;function nv(t){var e,r;let n=[];return t.refType?n=[t.refType.ref?(0,yf.getTypeName)(t.refType.ref):t.refType.$refText]:n=[(e=t.primitiveType)!==null&&e!==void 0?e:`'${(r=t.keywordType)===null||r===void 0?void 0:r.value}'`],{types:n,reference:t.isRef===!0,array:t.isArray===!0}}});var vo=E(yo=>{"use strict";Object.defineProperty(yo,"__esModule",{value:!0});yo.DefaultNameProvider=yo.isNamed=void 0;var CN=Et();function iv(t){return typeof t.name=="string"}yo.isNamed=iv;var Tf=class{getName(e){if(iv(e))return e.name}getNameNode(e){return(0,CN.findNodeForProperty)(e.$cstNode,"name")}};yo.DefaultNameProvider=Tf});var Cf=E(cu=>{"use strict";Object.defineProperty(cu,"__esModule",{value:!0});cu.collectInferredTypes=void 0;var St=ze(),bN=vo(),EN=bt(),To=ui(),av=br(),$n=Lt();function ov(t){return JSON.parse(JSON.stringify(t))}function _f(t,e,r){if(e.ruleCalls.length>0){for(let n of e.ruleCalls)r.add(n);return}for(let n of e.parents)t.name===void 0?_f(n,n,r):n.name!==void 0&&n.name!==t.name?r.add(n.name):_f(t,n,r);e.parents.length===0&&e.name&&r.add(e.name)}var Rf=class{constructor(e,r){this.context=e,this.root=r}getTypes(){let e={name:this.root.name,properties:this.root.properties,ruleCalls:this.root.ruleCalls,super:[]};return this.root.children.length===0?[e]:this.applyNext(this.root,{alt:e,next:this.root.children}).map(r=>r.alt)}applyNext(e,r){let n=this.splitType(r.alt,r.next.length),i=[];for(let o=0;o<r.next.length;o++){let a=n[o],s=r.next[o];if(s.declaredType)continue;s.actionWithAssignment&&i.push({alt:ov(a),next:[]}),s.name!==void 0&&s.name!==a.name&&(s.actionWithAssignment?(a.properties=[],a.ruleCalls=[],a.super=[e.name],a.name=s.name):(a.super=[a.name],a.name=s.name)),a.properties.push(...s.properties),a.ruleCalls.push(...s.ruleCalls);let u={alt:a,next:s.children};u.next.length===0?(u.alt.super=u.alt.super.filter(c=>c!==u.alt.name),i.push(u)):i.push(...this.applyNext(e,u))}return i}splitType(e,r){let n=[];for(let i=0;i<r;i++)n.push(ov(e));return n}getSuperTypes(e){let r=new Set;return _f(e,e,r),Array.from(r).sort()}connect(e,r){return r.parents.push(e),e.children.push(r),r}merge(...e){if(e.length===1)return e[0];if(e.length===0)return;let r=ya();r.parents=e;for(let n of e)n.children.push(r);return r}};function PN(t,e){var r;let n=[],i={fragments:new Map};for(let u of t)n.push(...sv(i,u));let o=cv(n);$N(o);let a=kN(o),s=jN(o,a);for(let u of e){let c=(0,St.isAlternatives)(u.definition)&&u.definition.elements.every(l=>(0,St.isKeyword)(l))?(0,EN.stream)(u.definition.elements).filter(St.isKeyword).map(l=>`'${l.value}'`).toArray().sort():[(r=(0,$n.getExplicitRuleType)(u))!==null&&r!==void 0?r:"string"];s.unions.push(new To.UnionType(u.name,va(!1,!1,c)))}return s}cu.collectInferredTypes=PN;function kN(t){let e=[],r=new av.MultiMap;for(let n of t)for(let i of n.superTypes)r.add(i,n.name);for(let[n,i]of r.entriesGroupedByKey())t.some(o=>o.name===n)||e.push(new To.UnionType(n,va(!1,!1,i),{reflection:!0}));return e}function sv(t,e){let r=ya(e),n=new Rf(t,r);return Af(n,n.root,e.definition),n.getTypes()}function ya(t){return{name:(0,St.isParserRule)(t)?(0,$n.getTypeName)(t):t,properties:[],ruleCalls:[],children:[],parents:[],actionWithAssignment:!1}}function Af(t,e,r){let n=(0,$n.isOptionalCardinality)(r.cardinality);if((0,St.isAlternatives)(r)){let i=[];n&&i.push(e);for(let o of r.elements){let a=t.connect(e,ya());i.push(Af(t,a,o))}return t.merge(...i)}else if((0,St.isGroup)(r)||(0,St.isUnorderedGroup)(r)){let i=n?t.connect(e,ya()):e;for(let o of r.elements)i=Af(t,i,o);return n?t.merge(e,i):i}else{if((0,St.isAction)(r))return NN(t,e,r);(0,St.isAssignment)(r)?SN(e,r):(0,St.isRuleCall)(r)&&DN(t,e,r)}return e}function NN(t,e,r){var n,i;let o=t.connect(e,ya((n=r.inferredType)===null||n===void 0?void 0:n.name));if(r.type){o.declaredType=!0;let a=(i=r.type)===null||i===void 0?void 0:i.ref;a&&(0,bN.isNamed)(a)&&(o.name=a.name)}return r.feature&&r.operator&&(o.actionWithAssignment=!0,o.properties.push({name:r.feature,optional:!1,typeAlternatives:va(r.operator==="+=",!1,t.root.ruleCalls.length!==0?t.root.ruleCalls:t.getSuperTypes(o))})),o}function SN(t,e){let r={types:new Set,reference:!1};uv(e.terminal,r);let n=va(e.operator==="+=",r.reference,e.operator==="?="?["boolean"]:Array.from(r.types));t.properties.push({name:e.feature,optional:(0,$n.isOptionalCardinality)(e.cardinality),typeAlternatives:n})}function uv(t,e){(0,St.isAlternatives)(t)||(0,St.isUnorderedGroup)(t)||(0,St.isGroup)(t)?wN(t,e):(0,St.isKeyword)(t)?e.types.add(`'${t.value}'`):(0,St.isRuleCall)(t)&&t.rule.ref?e.types.add((0,$n.getRuleType)(t.rule.ref)):(0,St.isCrossReference)(t)&&t.type.ref&&(e.types.add((0,$n.getTypeName)(t.type.ref)),e.reference=!0)}function wN(t,e){for(let r of t.elements)uv(r,e)}function DN(t,e,r){let n=r.rule.ref;if((0,St.isParserRule)(n)&&n.fragment){let i=ON(n,t.context);(0,$n.isOptionalCardinality)(r.cardinality)?e.properties.push(...i.map(o=>Object.assign(Object.assign({},o),{optional:!0}))):e.properties.push(...i)}else(0,St.isParserRule)(n)&&e.ruleCalls.push((0,$n.getRuleType)(n))}function ON(t,e){let r=e.fragments.get(t);if(r)return r;let n=[];e.fragments.set(t,n);let i=(0,$n.getTypeName)(t),o=sv(e,t),s=cv(o).find(u=>u.name===i);return s&&n.push(...s.properties),n}function cv(t){let e=new Map,r=[],n=xN(t);for(let i of n){let o=new To.InterfaceType(i.name,i.super,i.properties);e.set(o.name,o),i.ruleCalls.length>0&&(r.push(i),i.ruleCalls.forEach(a=>{a!==o.name&&o.subTypes.add(a)}))}for(let i of r)for(let o of i.ruleCalls){let a=e.get(o);a&&a.name!==i.name&&a.superTypes.add(i.name)}return Array.from(e.values())}function xN(t){let e=t.reduce((n,i)=>n.add(i.name,i),new av.MultiMap),r=[];for(let[n,i]of e.entriesGroupedByKey()){let o=[],a=new Set,s={name:n,properties:o,ruleCalls:[],super:[]};for(let u of i){s.super.push(...u.super);let c=u.properties,l=new Set;for(let f of c){l.add(f.name);let y=o.find(_=>_.name===f.name);y?f.typeAlternatives.filter(IN(y.typeAlternatives)).forEach(_=>y.typeAlternatives.push(_)):o.push(Object.assign({},f))}c.length===0&&u.ruleCalls.forEach(f=>a.add(f))}for(let u of i)if(u.ruleCalls.length===0)for(let c of o)u.properties.find(l=>l.name===c.name)||(c.optional=!0);s.ruleCalls=Array.from(a),r.push(s)}return r}function IN(t){return e=>!t.some(r=>MN(r,e))}function MN(t,e){return t.array===e.array&&t.reference===e.reference&&LN(t.types,e.types)}function LN(t,e,r=(n,i)=>n===i){let n=(0,To.distinctAndSorted)(t),i=(0,To.distinctAndSorted)(e);return n.length!==i.length?!1:i.every((o,a)=>r(o,n[a]))}function $N(t){var e,r;for(let i of t){for(let o of i.properties.flatMap(a=>a.typeAlternatives.filter(s=>!s.reference).flatMap(s=>s.types)))(e=t.find(a=>a.name===o))===null||e===void 0||e.containerTypes.add(i.name);for(let o of i.superTypes)(r=t.find(a=>a.name===o))===null||r===void 0||r.subTypes.add(i.name)}let n=[];qN(n,t),FN(n)}function qN(t,e){function r(i){let o=[i];n.add(i.name);let a=[...i.subTypes,...i.superTypes];for(let s of a)if(!n.has(s)){let u=e.find(c=>c.name===s);u&&o.push(...r(u))}return o}let n=new Set;for(let i of e)n.has(i.name)||t.push(r(i))}function FN(t){for(let e of t){let r=new Set;e.forEach(n=>n.containerTypes.forEach(i=>r.add(i))),e.forEach(n=>n.containerTypes=r)}}function jN(t,e){let r={interfaces:[],unions:e},n=new Set(e.map(i=>i.name));for(let i of t)if(i.properties.length===0&&i.subTypes.size>0){let o=va(!1,!1,Array.from(i.subTypes)),a=e.find(s=>s.name===i.name);if(a)a.union.push(...o);else{let s=new To.UnionType(i.name,o,{reflection:!0});s.superTypes=i.superTypes,r.unions.push(s),n.add(i.name)}}else r.interfaces.push(i);for(let i of r.interfaces)i.interfaceSuperTypes=[...i.superTypes].filter(o=>!n.has(o)).sort();return r}function va(t,e,r){return t||e?[{array:t,reference:e,types:r}]:r.map(n=>({array:t,reference:e,types:[n]}))}});var vv=E(dn=>{"use strict";Object.defineProperty(dn,"__esModule",{value:!0});dn.collectAllInterfaces=dn.collectValidationResources=dn.applyErrorToAssignment=dn.validateTypesConsistency=void 0;var bf=br(),fv=vf(),pv=Cf(),_a=ui(),Ra=bt(),Ef=Lt();function GN(t,e){function r(a,s){return u=>{a.forEach(c=>e("error",u+` in a rule that returns type '${s}'.`,{node:c?.inferredType?c.inferredType:c,property:"name"}))}}function n(a,s){return(u,c)=>{a.forEach(l=>{(0,Ef.extractAssignments)(l.definition).find(y=>y.feature===u)===void 0&&e("error",c+` in rule '${l.name}', but is required in type '${s}'.`,{node:l,property:"parameters"})})}}let i=mv(t),o=new bf.MultiMap;for(let[a,s]of i.entries())"declared"in s&&Ta(s.declared)&&o.addAll(a,lu(s.declared,"declared",i).values());for(let[a,s]of i.entries()){if("declared"in s&&UN(s,o,e),!KN(s))continue;let u=r(s.nodes,a),c=n(s.nodes,a),l=hv(s.nodes,e);if(lv(s.inferred)&&lv(s.declared))zN(s.inferred.union,s.declared.union,u);else if(Ta(s.inferred)&&Ta(s.declared)){let f=lu(s.inferred,"inferred",i),y=lu(s.declared,"declared",i);VN(f,y,u,l,c)}else{let f=`Inferred and declared versions of type ${a} both have to be interfaces or unions.`;s.nodes.forEach(y=>e("error",f,{node:y?.inferredType?y.inferredType:y,property:"name"})),e("error",f,{node:s.node,property:"name"})}}}dn.validateTypesConsistency=GN;function UN(t,e,r){let n=t.declared;if(!Ta(n))return;let i=n.interfaceSuperTypes;for(let a=0;a<i.length;a++)for(let s=a+1;s<i.length;s++){let u=i[a],c=i[s],l=e.get(u),f=e.get(c),y=HN(l,f);y.length>0&&r("error",`Cannot simultaneously inherit from '${u}' and '${c}'. Their ${y.map(_=>"'"+_+"'").join(", ")} properties are not identical.`,{node:t.node,property:"name"})}let o=new Set;for(let a of i){let s=e.get(a);for(let u of s)o.add(u.name)}for(let a of n.properties)if(o.has(a.name)){let u=t.node.attributes.find(c=>c.name===a.name);u&&r("error",`Cannot redeclare property '${a.name}'. It is already inherited from another interface.`,{node:u,property:"name"})}}function HN(t,e){let r=[];for(let n of t){let i=e.find(o=>o.name===n.name);i&&!WN(n,i)&&r.push(n.name)}return r}function WN(t,e){if(t.optional!==e.optional||t.typeAlternatives.length!==e.typeAlternatives.length)return!1;for(let r of t.typeAlternatives){let n=!1;for(let i of e.typeAlternatives)i.array===r.array&&i.reference===r.reference&&i.types.length===r.types.length&&i.types.every(o=>r.types.includes(o))&&(n=!0);if(!n)return!1}return!0}function lu(t,e,r,n=new bf.MultiMap,i=new Set){if(i.has(t.name))return n;i.add(t.name);let o=t.properties;for(let a of o)n.add(a.name,a);for(let a of t.interfaceSuperTypes){let s=r.get(a),u=s?.[e];Ta(u)&&lu(u,e,r,n,i)}return n}function hv(t,e){let r=t.flatMap(n=>(0,Ef.extractAssignments)(n.definition));return(n,i)=>{let o=r.find(a=>a.feature===n);o&&e("error",i,{node:o,property:"feature"})}}dn.applyErrorToAssignment=hv;function lv(t){return t&&"union"in t}function Ta(t){return t&&"properties"in t}function KN(t){return t&&"inferred"in t&&"declared"in t}function mv(t){let e=(0,_a.collectAllAstResources)([t]),r=(0,pv.collectInferredTypes)(Array.from(e.parserRules),Array.from(e.datatypeRules)),n=(0,fv.collectDeclaredTypes)(Array.from(e.interfaces),Array.from(e.types),r),i=gv(e),o=dv(r).reduce((s,u)=>s.set(u.name,{inferred:u,nodes:i.get(u.name)}),new Map);return dv(n).reduce((s,u)=>{var c;let l=(c=(0,Ra.stream)(e.types).find(f=>f.name===u.name))!==null&&c!==void 0?c:(0,Ra.stream)(e.interfaces).find(f=>f.name===u.name);if(l){let f=o.get(u.name);s.set(u.name,f?Object.assign(Object.assign({},f),{declared:u,node:l}):{declared:u,node:l})}return s},new Map)}dn.collectValidationResources=mv;function gv(t){return(0,Ra.stream)(t.parserRules).concat(t.datatypeRules).reduce((e,r)=>e.add((0,Ef.getRuleType)(r),r),new bf.MultiMap)}function dv(t){return t.interfaces.concat(t.unions)}var BN=(t,e)=>t.array&&!e.array&&t.reference&&!e.reference?"can't be an array and a reference":!t.array&&e.array&&!t.reference&&e.reference?"has to be an array and a reference":t.array&&!e.array?"can't be an array":!t.array&&e.array?"has to be an array":t.reference&&!e.reference?"can't be a reference":!t.reference&&e.reference?"has to be a reference":"";function yv(t,e){let r=a=>a.reduce((s,u)=>s.set((0,_a.distinctAndSorted)(u.types).join(" | "),u),new Map),n=r(t),i=r(e),o=[];for(let[a,s]of(0,Ra.stream)(n)){let u=i.get(a);u?(u.array!==s.array||u.reference!==s.reference)&&o.push({typeString:a,errorMessage:BN(s,u)}):o.push({typeString:a,errorMessage:"is not expected"})}return o}function zN(t,e,r){let n=yv(t,e);for(let i of n)r(`A type '${i.typeString}' ${i.errorMessage}`)}function VN(t,e,r,n,i){let o=(s,u,c)=>`The assigned type '${u}' is not compatible with the declared property '${s}' of type '${c}'.`,a=(s,u)=>!(s.typeAlternatives.length===1&&s.typeAlternatives[0].array||u.typeAlternatives.length===1&&u.typeAlternatives[0].array);for(let s of t.keys()){let c=t.get(s)[0],f=e.get(s)[0];if(f){let y=(0,_a.propertyTypeArrayToString)(c.typeAlternatives),_=(0,_a.propertyTypeArrayToString)(f.typeAlternatives);if(y!==_){let h=yv(c.typeAlternatives,f.typeAlternatives);if(h.length>0){let A=o(c.name,y,_);for(let w of h)A=A+` '${w.typeString}' ${w.errorMessage};`;A=A.replace(/;$/,"."),n(c.name,A)}}a(c,f)&&!f.optional&&c.optional&&i(c.name,`Property '${c.name}' is missing`)}else n(c.name,`A property '${c.name}' is not expected.`)}for(let[s,u]of e.entriesGroupedByKey())t.get(s).length===0&&!u.some(l=>l.optional)&&r(`A property '${s}' is expected`)}function YN(t){let e=(0,_a.collectAllAstResources)([t]),r=(0,pv.collectInferredTypes)(Array.from(e.parserRules),Array.from(e.datatypeRules)),n=(0,fv.collectDeclaredTypes)(Array.from(e.interfaces),Array.from(e.types),r),i=gv(e),o=r.interfaces.reduce((a,s)=>a.set(s.name,{type:s,node:i.get(s.name)}),new Map);return n.interfaces.reduce((a,s)=>{if(!a.has(s.name)){let u=(0,Ra.stream)(e.interfaces).find(c=>c.name===s.name);u&&a.set(s.name,{type:s,node:u})}return a},o)}dn.collectAllInterfaces=YN});var Of=E(rr=>{"use strict";var XN=rr&&rr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),JN=rr&&rr.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),QN=rr&&rr.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&XN(e,t,r);return JN(e,t),e};Object.defineProperty(rr,"__esModule",{value:!0});rr.LangiumGrammarValidator=rr.IssueCodes=rr.LangiumGrammarValidationRegistry=void 0;var Pf=Xi(),ZN=Nn(),li=Re(),du=br(),kf=et(),qn=Et(),Nf=bt(),eS=ci(),tS=su(),Ve=QN(ze()),Tv=ze(),$t=Lt(),Sf=vv(),wf=class extends tS.ValidationRegistry{constructor(e){super(e);let r=e.validation.LangiumGrammarValidator,n={Action:r.checkActionTypeUnions,AbstractRule:r.checkRuleName,Assignment:[r.checkAssignmentWithFeatureName,r.checkAssignmentToFragmentRule],ParserRule:[r.checkParserRuleDataType,r.checkRuleParametersUsed],TerminalRule:[r.checkTerminalRuleReturnType,r.checkHiddenTerminalRule,r.checkEmptyTerminalRule],Keyword:r.checkKeyword,UnorderedGroup:r.checkUnorderedGroup,Grammar:[r.checkGrammarName,r.checkEntryGrammarRule,r.checkUniqueRuleName,r.checkUniqueTypeName,r.checkUniqueImportedRules,r.checkDuplicateImportedGrammar,r.checkGrammarHiddenTokens,r.checkGrammarForUnusedRules,r.checkGrammarImports,r.checkGrammarTypeUnions,r.checkGrammarTypeInfer,r.checkTypesConsistency,r.checkPropertyNameDuplication],GrammarImport:r.checkPackageImport,CharacterRange:r.checkInvalidCharacterRange,RuleCall:[r.checkUsedHiddenTerminalRule,r.checkUsedFragmentTerminalRule,r.checkRuleCallParameters],TerminalRuleCall:r.checkUsedHiddenTerminalRule,CrossReference:[r.checkCrossReferenceSyntax,r.checkCrossRefNameAssignment,r.checkCrossRefTerminalType,r.checkCrossRefType],AtomType:[r.checkAtomTypeRefType,r.checkFragmentsInTypes]};this.register(n,r)}};rr.LangiumGrammarValidationRegistry=wf;var Kt;(function(t){t.GrammarNameUppercase="grammar-name-uppercase",t.RuleNameUppercase="rule-name-uppercase",t.HiddenGrammarTokens="hidden-grammar-tokens",t.UseRegexTokens="use-regex-tokens",t.EntryRuleTokenSyntax="entry-rule-token-syntax",t.CrossRefTokenSyntax="cross-ref-token-syntax",t.MissingImport="missing-import",t.UnnecessaryFileExtension="unnecessary-file-extension",t.InvalidReturns="invalid-returns",t.InvalidInfers="invalid-infers",t.MissingInfer="missing-infer",t.SuperfluousInfer="superfluous-infer",t.OptionalUnorderedGroup="optional-unordered-group"})(Kt=rr.IssueCodes||(rr.IssueCodes={}));var Df=class{constructor(e){this.references=e.references.References,this.documents=e.shared.workspace.LangiumDocuments}checkGrammarName(e,r){if(e.name){let n=e.name.substring(0,1);n.toUpperCase()!==n&&r("warning","Grammar name should start with an upper case letter.",{node:e,property:"name",code:Kt.GrammarNameUppercase})}}checkEntryGrammarRule(e,r){let n=e.rules.filter(i=>Ve.isParserRule(i)&&i.entry);if(e.isDeclared&&n.length===0){let i=e.rules.find(o=>Ve.isParserRule(o)&&!(0,$t.isDataTypeRule)(o));i?r("error","The grammar is missing an entry parser rule. This rule can be an entry one.",{node:i,property:"name",code:Kt.EntryRuleTokenSyntax}):r("error","This grammar is missing an entry parser rule.",{node:e,property:"name"})}else!e.isDeclared&&n.length>=1?n.forEach(i=>r("error","Cannot declare entry rules for unnamed grammars.",{node:i,property:"name"})):n.length>1?n.forEach(i=>r("error","The entry rule has to be unique.",{node:i,property:"name"})):n.length===1&&(0,$t.isDataTypeRule)(n[0])&&r("error","The entry rule cannot be a data type rule.",{node:n[0],property:"name"})}checkUniqueRuleName(e,r){let n=i=>(0,Nf.stream)(i.rules).filter(o=>!Aa(o));this.checkUniqueName(e,r,n,"rule")}checkUniqueTypeName(e,r){let n=i=>(0,Nf.stream)(i.types).concat(i.interfaces);this.checkUniqueName(e,r,n,"type")}checkUniqueName(e,r,n,i){let o=new du.MultiMap;n(e).forEach(u=>o.add(u.name,u));for(let[,u]of o.entriesGroupedByKey())u.length>1&&u.forEach(c=>{r("error",`A ${i}'s name has to be unique.`,{node:c,property:"name"})});let a=new Set,s=(0,$t.resolveTransitiveImports)(this.documents,e);for(let u of s)n(u).forEach(c=>a.add(c.name));for(let u of o.keys())a.has(u)&&o.get(u).forEach(l=>{r("error",`A ${i} with the name '${l.name}' already exists in an imported grammar.`,{node:l,property:"name"})})}checkDuplicateImportedGrammar(e,r){let n=new du.MultiMap;for(let i of e.imports){let o=(0,$t.resolveImport)(this.documents,i);o&&n.add(o,i)}for(let[,i]of n.entriesGroupedByKey())i.length>1&&i.forEach((o,a)=>{a>0&&r("warning","The grammar is already being directly imported.",{node:o,tags:[Pf.DiagnosticTag.Unnecessary]})})}checkUniqueImportedRules(e,r){let n=new Map;for(let o of e.imports){let a=(0,$t.resolveTransitiveImports)(this.documents,o);n.set(o,a)}let i=new du.MultiMap;for(let o of e.imports){let a=n.get(o);for(let s of e.imports){if(o===s)continue;let u=n.get(s),c=this.getDuplicateExportedRules(a,u);for(let l of c)i.add(o,l)}}for(let o of e.imports){let a=i.get(o);a.length>0&&r("error","Some rules exported by this grammar are also included in other imports: "+(0,Nf.stream)(a).distinct().join(", "),{node:o,property:"path"})}}getDuplicateExportedRules(e,r){let i=e.filter(s=>!r.includes(s)).flatMap(s=>s.rules),o=r.flatMap(s=>s.rules),a=new Set;for(let s of i){let u=s.name;for(let c of o){let l=c.name;u===l&&a.add(c.name)}}return a}checkGrammarTypeInfer(e,r){var n,i;let o=new Set;for(let s of e.types)o.add(s.name);for(let s of e.interfaces)o.add(s.name);(0,$t.resolveTransitiveImports)(this.documents,e).forEach(s=>{s.types.forEach(u=>o.add(u.name)),s.interfaces.forEach(u=>o.add(u.name))});for(let s of e.rules.filter(Ve.isParserRule)){if(Aa(s))continue;let u=(0,$t.isDataTypeRule)(s),c=!s.returnType&&!s.dataType,l=(0,$t.getTypeName)(s);if(!u&&l&&o.has(l)===c){let f=c?(0,qn.findNodeForKeyword)(s.$cstNode,"infer"):(0,qn.findNodeForKeyword)(s.$cstNode,"returns");r("error",a(l,c),{node:(n=s.inferredType)!==null&&n!==void 0?n:s,property:"name",code:c?Kt.InvalidInfers:Kt.InvalidReturns,data:f&&(0,kf.toDocumentSegment)(f)})}else if(u&&c){let f=(0,qn.findNodeForKeyword)(s.$cstNode,"infer");r("error","Data type rules cannot infer a type.",{node:s,property:"inferredType",code:Kt.InvalidInfers,data:f&&(0,kf.toDocumentSegment)(f)})}}for(let s of(0,li.streamAllContents)(e).filter(Ve.isAction)){let u=this.getActionType(s);if(u){let c=!!s.inferredType,l=(0,$t.getTypeName)(s);if(s.type&&o.has(l)===c){let f=c?(0,qn.findNodeForKeyword)(s.$cstNode,"infer"):(0,qn.findNodeForKeyword)(s.$cstNode,"{");r("error",a(l,c),{node:s,property:"type",code:c?Kt.SuperfluousInfer:Kt.MissingInfer,data:f&&(0,kf.toDocumentSegment)(f)})}else if(u&&o.has(l)&&c&&s.$cstNode){let f=(0,qn.findNodeForProperty)((i=s.inferredType)===null||i===void 0?void 0:i.$cstNode,"name"),y=(0,qn.findNodeForKeyword)(s.$cstNode,"{");f&&y&&r("error",`${l} is a declared type and cannot be redefined.`,{node:s,property:"type",code:Kt.SuperfluousInfer,data:{start:y.range.end,end:f.range.start}})}}}function a(s,u){return u?`The type '${s}' is already explicitly declared and cannot be inferred.`:`The type '${s}' is not explicitly declared and must be inferred.`}}getActionType(e){var r;if(e.type)return(r=e.type)===null||r===void 0?void 0:r.ref;if(e.inferredType)return e.inferredType}checkGrammarHiddenTokens(e,r){e.definesHiddenTokens&&r("error","Hidden terminals are declared at the terminal definition.",{node:e,property:"definesHiddenTokens",code:Kt.HiddenGrammarTokens})}checkHiddenTerminalRule(e,r){e.hidden&&e.fragment&&r("error","Cannot use terminal fragments as hidden tokens.",{node:e,property:"hidden"})}checkEmptyTerminalRule(e,r){try{let n=(0,$t.terminalRegex)(e);new RegExp(n).test("")&&r("error","This terminal could match an empty string.",{node:e,property:"name"})}catch{}}checkUsedHiddenTerminalRule(e,r){let n=(0,li.getContainerOfType)(e,i=>Ve.isTerminalRule(i)||Ve.isParserRule(i));if(n){if("hidden"in n&&n.hidden)return;let i=e.rule.ref;Ve.isTerminalRule(i)&&i.hidden&&r("error","Cannot use hidden terminal in non-hidden rule",{node:e,property:"rule"})}}checkUsedFragmentTerminalRule(e,r){let n=e.rule.ref;Ve.isTerminalRule(n)&&n.fragment&&(0,li.getContainerOfType)(e,Ve.isParserRule)&&r("error","Cannot use terminal fragments as part of parser rules.",{node:e,property:"rule"})}checkCrossReferenceSyntax(e,r){e.deprecatedSyntax&&r("error","'|' is deprecated. Please, use ':' instead.",{node:e,property:"deprecatedSyntax",code:Kt.CrossRefTokenSyntax})}checkPackageImport(e,r){(0,$t.resolveImport)(this.documents,e)===void 0?r("error","Import cannot be resolved.",{node:e,property:"path"}):e.path.endsWith(".langium")&&r("warning","Imports do not need file extensions.",{node:e,property:"path",code:Kt.UnnecessaryFileExtension})}checkGrammarImports(e,r){let n=new Set((0,$t.resolveTransitiveImports)(this.documents,e).map(i=>(0,li.getDocument)(i)));(0,li.streamAllContents)(e).forEach(i=>{(Ve.isRuleCall(i)||Ve.isTerminalRuleCall(i))&&this.checkRuleCallImport(i,n,r)})}checkRuleCallImport(e,r,n){var i;let o=e.rule.ref;if(o){let a=(0,li.getDocument)(o),s=(0,li.getDocument)(e),u=s.parseResult.value;if(Ve.isGrammar(u)&&a!==s&&!r.has(a)){let c=(0,eS.relativeURI)(ZN.Utils.dirname(s.uri),a.uri);c.endsWith(".langium")&&(c=c.substring(0,c.length-8)),c.startsWith(".")||(c="./"+c),n("error",`Referenced rule "${(i=e.rule.ref)===null||i===void 0?void 0:i.name}" is not imported.`,{node:e,property:"rule",code:Kt.MissingImport,data:c})}}}checkGrammarTypeUnions(e,r){for(let n of e.rules)Ve.isParserRule(n)&&Ve.isType(n.returnType)&&r("error","Rules are not allowed to return union types.",{node:n,property:"returnType"});for(let n of e.interfaces)n.superTypes.forEach((i,o)=>{i.ref&&Ve.isType(i.ref)&&r("error","Interfaces cannot extend union types.",{node:n,property:"superTypes",index:o})})}checkActionTypeUnions(e,r){Ve.isType(e.type)&&r("error","Actions cannot create union types.",{node:e,property:"type"})}checkTypesConsistency(e,r){(0,Sf.validateTypesConsistency)(e,r)}checkPropertyNameDuplication(e,r){if(e.interfaces.length===0)return;let n=(0,Sf.collectAllInterfaces)(e);for(let i of e.interfaces.map(o=>o.name)){let o=new du.MultiMap;this.collectPropertyNamesForHierarchy(n,new Set,o,i);for(let[a,s]of o.entriesGroupedByKey())if(!(s.length<2))for(let u of s){let c=`A property '${a}' has to be unique for the whole hierarchy.`;if(Ve.isInterface(u)){let l=u.attributes.find(f=>f.name===a);l&&r("error",c,{node:l,property:"name"})}else(0,Sf.applyErrorToAssignment)(u,r)(a,c)}}}collectPropertyNamesForHierarchy(e,r,n,i){function o(a){if(r.has(a))return;r.add(a);let s=e.get(a);s&&(s.type.properties.forEach(u=>n.add(u.name,s.node)),s.type.interfaceSuperTypes.forEach(u=>o(u)))}o(i)}checkInvalidCharacterRange(e,r){if(e.right){let n="Character ranges cannot use more than one character",i=!1;e.left.value.length>1&&(i=!0,r("error",n,{node:e.left,property:"value"})),e.right.value.length>1&&(i=!0,r("error",n,{node:e.right,property:"value"})),i||r("hint","Consider using regex instead of character ranges",{node:e,code:Kt.UseRegexTokens})}}checkGrammarForUnusedRules(e,r){let n=(0,qn.getAllReachableRules)(e,!0);for(let i of e.rules)Ve.isTerminalRule(i)&&i.hidden||Aa(i)||n.has(i)||r("hint","This rule is declared but never referenced.",{node:i,property:"name",tags:[Pf.DiagnosticTag.Unnecessary]})}checkRuleName(e,r){if(e.name&&!Aa(e)){let n=e.name.substring(0,1);n.toUpperCase()!==n&&r("warning","Rule name should start with an upper case letter.",{node:e,property:"name",code:Kt.RuleNameUppercase})}}checkKeyword(e,r){e.value.length===0?r("error","Keywords cannot be empty.",{node:e}):e.value.trim().length===0?r("error","Keywords cannot only consist of whitespace characters.",{node:e}):/\s/g.test(e.value)&&r("warning","Keywords should not contain whitespace characters.",{node:e})}checkUnorderedGroup(e,r){e.elements.forEach(n=>{(0,$t.isOptionalCardinality)(n.cardinality)&&r("error","Optional elements in Unordered groups are currently not supported",{node:n,code:Kt.OptionalUnorderedGroup})})}checkRuleParametersUsed(e,r){let n=e.parameters;if(n.length>0){let i=(0,li.streamAllContents)(e).filter(Ve.isParameterReference);for(let o of n)i.some(a=>a.parameter.ref===o)||r("hint",`Parameter '${o.name}' is unused.`,{node:o,tags:[Pf.DiagnosticTag.Unnecessary]})}}checkParserRuleDataType(e,r){if(Aa(e))return;let n=e.dataType,i=(0,$t.isDataTypeRule)(e);!n&&i?r("error","This parser rule does not create an object. Add a primitive return type or an action to the start of the rule to force object instantiation.",{node:e,property:"name"}):n&&!i&&r("error","Normal parser rules are not allowed to return a primitive value. Use a datatype rule for that.",{node:e,property:"dataType"})}checkAssignmentToFragmentRule(e,r){(0,Tv.isRuleCall)(e.terminal)&&(0,Tv.isParserRule)(e.terminal.rule.ref)&&e.terminal.rule.ref.fragment&&r("error",`Cannot use fragment rule '${e.terminal.rule.ref.name}' for assignment of property '${e.feature}'.`,{node:e,property:"terminal"})}checkTerminalRuleReturnType(e,r){var n;((n=e.type)===null||n===void 0?void 0:n.name)&&!nS(e.type.name)&&r("error","Terminal rules can only return primitive types like 'string', 'boolean', 'number', 'Date' or 'bigint'.",{node:e.type,property:"name"})}checkRuleCallParameters(e,r){let n=e.rule.ref;if(Ve.isParserRule(n)){let i=n.parameters.length,o=e.arguments.length;i!==o&&r("error",`Rule '${n.name}' expects ${i} arguments, but got ${o}.`,{node:e})}else Ve.isTerminalRule(n)&&e.arguments.length>0&&r("error","Terminal rules do not accept any arguments",{node:e})}checkCrossRefNameAssignment(e,r){!e.terminal&&e.type.ref&&!(0,qn.findNameAssignment)(e.type.ref)&&r("error","Cannot infer terminal or data type rule for cross reference.",{node:e,property:"type"})}checkCrossRefTerminalType(e,r){Ve.isRuleCall(e.terminal)&&Ve.isParserRule(e.terminal.rule.ref)&&!(0,$t.isDataTypeRule)(e.terminal.rule.ref)&&r("error","Parser rules cannot be used for cross references.",{node:e.terminal,property:"rule"})}checkCrossRefType(e,r){let n=this.checkReferenceToRuleButNotType(e?.type);n&&r("error",n,{node:e,property:"type"})}checkAtomTypeRefType(e,r){if(e?.refType){let n=this.checkReferenceToRuleButNotType(e?.refType);n&&r("error",n,{node:e,property:"refType"})}}checkFragmentsInTypes(e,r){var n,i;Ve.isParserRule((n=e.refType)===null||n===void 0?void 0:n.ref)&&((i=e.refType)===null||i===void 0?void 0:i.ref.fragment)&&r("error","Cannot use rule fragments in types.",{node:e,property:"refType"})}checkReferenceToRuleButNotType(e){if(e&&Ve.isParserRule(e.ref)&&!(0,$t.isDataTypeRule)(e.ref)&&(e.ref.returnType||e.ref.inferredType)){let r=(0,$t.getTypeName)(e.ref);if(r)return`Use the rule type '${r}' instead of the typed rule name '${e.ref.name}' for cross references.`}}checkAssignmentWithFeatureName(e,r){e.feature==="name"&&Ve.isCrossReference(e.terminal)&&r("warning",'The "name" property is not recommended for cross-references.',{node:e,property:"feature"})}};rr.LangiumGrammarValidator=Df;var rS=["string","number","boolean","Date","bigint"];function nS(t){return rS.includes(t)}function Aa(t){return!t.definition||!t.definition.$cstNode||t.definition.$cstNode.length===0}});var hu=E(Br=>{"use strict";Object.defineProperty(Br,"__esModule",{value:!0});Br.DocumentValidator=Br.toDiagnosticSeverity=Br.getDiagnosticRange=Br.DefaultDocumentValidator=void 0;var Pr=Ke(),_v=Et(),iS=Re(),oS=et(),fu=Kr(),xf=class{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,r=Pr.CancellationToken.None){let n=e.parseResult,i=[];await(0,fu.interruptAndCheck)(r);for(let o of n.lexerErrors){let a={severity:Pr.DiagnosticSeverity.Error,range:{start:{line:o.line-1,character:o.column-1},end:{line:o.line-1,character:o.column+o.length-1}},message:o.message,code:pu.LexingError,source:this.getSource()};i.push(a)}for(let o of n.parserErrors){let a;if(isNaN(o.token.startOffset)){if("previousToken"in o){let s=o.previousToken;if(isNaN(s.startOffset))a=Pr.Range.create(0,0,0,0);else{let u=Pr.Position.create(s.endLine-1,s.endColumn);a=Pr.Range.create(u,u)}}}else a=(0,oS.tokenToRange)(o.token);if(a){let s={severity:Pr.DiagnosticSeverity.Error,range:a,message:o.message,code:pu.ParsingError,source:this.getSource()};i.push(s)}}for(let o of e.references){let a=o.error;if(a){let s={containerType:a.container.$type,property:a.property,refText:a.reference.$refText},u={node:a.container,property:a.property,index:a.index,code:pu.LinkingError,data:s};i.push(this.toDiagnostic("error",a.message,u))}}try{i.push(...await this.validateAst(n.value,e,r))}catch(o){if((0,fu.isOperationCancelled)(o))throw o;console.error("An error occurred during validation:",o)}return await(0,fu.interruptAndCheck)(r),i}async validateAst(e,r,n=Pr.CancellationToken.None){let i=[],o=(a,s,u)=>{i.push(this.toDiagnostic(a,s,u))};return await Promise.all((0,iS.streamAst)(e).map(async a=>{await(0,fu.interruptAndCheck)(n);let s=this.validationRegistry.getChecks(a.$type);for(let u of s)await u(a,o,n)})),i}toDiagnostic(e,r,n){return{message:r,range:Rv(n),severity:Av(e),code:n.code,codeDescription:n.codeDescription,tags:n.tags,relatedInformation:n.relatedInformation,data:n.data,source:this.getSource()}}getSource(){return this.metadata.languageId}};Br.DefaultDocumentValidator=xf;function Rv(t){if(Pr.Range.is(t.range))return t.range;let e;return typeof t.property=="string"?e=(0,_v.findNodeForProperty)(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=(0,_v.findNodeForKeyword)(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}Br.getDiagnosticRange=Rv;function Av(t){switch(t){case"error":return Pr.DiagnosticSeverity.Error;case"warning":return Pr.DiagnosticSeverity.Warning;case"info":return Pr.DiagnosticSeverity.Information;case"hint":return Pr.DiagnosticSeverity.Hint;default:throw new Error("Invalid diagnostic severity: "+t)}}Br.toDiagnosticSeverity=Av;var pu;(function(t){t.LexingError="lexing-error",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(pu=Br.DocumentValidator||(Br.DocumentValidator={}))});var Pv=E(fn=>{"use strict";var aS=fn&&fn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),sS=fn&&fn.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),uS=fn&&fn.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&aS(e,t,r);return sS(e,t),e};Object.defineProperty(fn,"__esModule",{value:!0});fn.LangiumGrammarCodeActionProvider=void 0;var zr=Ke(),Cv=Re(),bv=et(),cS=Et(),Ev=ho(),lS=hu(),If=uS(ze()),kr=Of(),Mf=class{getCodeActions(e,r){let n=[];for(let i of r.context.diagnostics){let o=this.createCodeAction(i,e);o&&n.push(o)}return n}createCodeAction(e,r){switch(e.code){case kr.IssueCodes.GrammarNameUppercase:case kr.IssueCodes.RuleNameUppercase:return this.makeUpperCase(e,r);case kr.IssueCodes.HiddenGrammarTokens:return this.fixHiddenTerminals(e,r);case kr.IssueCodes.UseRegexTokens:return this.fixRegexTokens(e,r);case kr.IssueCodes.EntryRuleTokenSyntax:return this.addEntryKeyword(e,r);case kr.IssueCodes.CrossRefTokenSyntax:return this.fixCrossRefSyntax(e,r);case kr.IssueCodes.MissingImport:return this.fixMissingImport(e,r);case kr.IssueCodes.UnnecessaryFileExtension:return this.fixUnnecessaryFileExtension(e,r);case kr.IssueCodes.InvalidInfers:case kr.IssueCodes.InvalidReturns:return this.fixInvalidReturnsInfers(e,r);case kr.IssueCodes.MissingInfer:return this.fixMissingInfer(e,r);case kr.IssueCodes.SuperfluousInfer:return this.fixSuperfluousInfer(e,r);case lS.DocumentValidator.LinkingError:{let n=e.data;if(n&&n.containerType==="RuleCall"&&n.property==="rule")return this.addNewRule(e,n,r);break}}}fixInvalidReturnsInfers(e,r){let n=e.data;if(n){let i=r.textDocument.getText(n.range);return{title:`Correct ${i} usage`,kind:zr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:n.range,newText:i==="infers"?"returns":"infers"}]}}}}}fixMissingInfer(e,r){let n=e.data;if(n)return{title:"Correct 'infer' usage",kind:zr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:{start:n.range.end,end:n.range.end},newText:"infer "}]}}}}fixSuperfluousInfer(e,r){if(e.data)return{title:"Remove the 'infer' keyword",kind:zr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:e.data,newText:""}]}}}}fixUnnecessaryFileExtension(e,r){let n=Object.assign({},e.range.end);n.character-=1;let i=Object.assign({},n);return i.character-=8,{title:"Remove file extension",kind:zr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:{start:i,end:n},newText:""}]}}}}fixMissingImport(e,r){let n,i=r.parseResult.value,o=i.imports,a=i.rules;if(o.length>0)n=o[0].$cstNode.range.start;else if(a.length>0)n=a[0].$cstNode.range.start;else return;let s=e.data;if(typeof s=="string")return{title:`Add import to '${s}'`,kind:zr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:{start:n,end:n},newText:`import '${s}';
`}]}}}}makeUpperCase(e,r){let n={start:e.range.start,end:{line:e.range.start.line,character:e.range.start.character+1}};return{title:"First letter to upper case",kind:zr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:n,newText:r.textDocument.getText(n).toUpperCase()}]}}}}addEntryKeyword(e,r){return{title:"Add entry keyword",kind:zr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:{start:e.range.start,end:e.range.start},newText:"entry "}]}}}}fixRegexTokens(e,r){let n=r.textDocument.offsetAt(e.range.start),i=r.parseResult.value.$cstNode;if(i){let o=(0,bv.findLeafNodeAtOffset)(i,n),a=(0,Cv.getContainerOfType)(o?.element,If.isCharacterRange);if(a&&a.right&&a.$cstNode){let s=a.left.value,u=a.right.value;return{title:"Refactor into regular expression",kind:zr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:a.$cstNode.range,newText:`/[${(0,Ev.escapeRegExp)(s)}-${(0,Ev.escapeRegExp)(u)}]/`}]}}}}}}fixCrossRefSyntax(e,r){return{title:"Replace '|' with ':'",kind:zr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:e.range,newText:":"}]}}}}fixHiddenTerminals(e,r){let n=r.parseResult.value,i=n.hiddenTokens,o=[],a=(0,cS.findNodeForProperty)(n.$cstNode,"definesHiddenTokens");if(a){let s=a.range.start,u=a.offset,c=n.$cstNode.text.indexOf(")",u)+1;o.push({newText:"",range:{start:s,end:r.textDocument.positionAt(c)}})}for(let s of i){let u=s.ref;if(u&&If.isTerminalRule(u)&&!u.hidden&&u.$cstNode){let c=u.$cstNode.range.start;o.push({newText:"hidden ",range:{start:c,end:c}})}}return{title:"Fix hidden terminals",kind:zr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:o}}}}addNewRule(e,r,n){let i=n.textDocument.offsetAt(e.range.start),o=n.parseResult.value.$cstNode;if(o){let a=(0,bv.findLeafNodeAtOffset)(o,i),s=(0,Cv.getContainerOfType)(a?.element,If.isParserRule);if(s&&s.$cstNode)return{title:`Add new rule '${r.refText}'`,kind:zr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[n.textDocument.uri]:[{range:{start:s.$cstNode.range.end,end:s.$cstNode.range.end},newText:`

`+r.refText+`:
    /* TODO implement rule */ {infer `+r.refText+"};"}]}}}}}};fn.LangiumGrammarCodeActionProvider=Mf});var gu=E(mu=>{"use strict";Object.defineProperty(mu,"__esModule",{value:!0});mu.DefaultFoldingRangeProvider=void 0;var Lf=Ke(),dS=Re(),fS=et(),$f=class{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e){let r=[],n=i=>r.push(i);return this.collectFolding(e,n),r}collectFolding(e,r){var n;let i=(n=e.parseResult)===null||n===void 0?void 0:n.value;if(i){if(this.shouldProcessContent(i)){let o=(0,dS.streamAllContents)(i).iterator(),a;do if(a=o.next(),!a.done){let s=a.value;this.shouldProcess(s)&&this.collectObjectFolding(e,s,r),this.shouldProcessContent(s)||o.prune()}while(!a.done)}this.collectCommentFolding(e,i,r)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,r,n){let i=r.$cstNode;if(i){let o=this.toFoldingRange(e,i);o&&n(o)}}collectCommentFolding(e,r,n){let i=r.$cstNode;if(i){for(let o of(0,fS.flattenCst)(i))if(this.commentNames.includes(o.tokenType.name)){let a=this.toFoldingRange(e,o,Lf.FoldingRangeKind.Comment);a&&n(a)}}}toFoldingRange(e,r,n){let i=r.range,o=i.start,a=i.end;if(!(a.line-o.line<2))return this.includeLastFoldingLine(r,n)||(a=e.textDocument.positionAt(e.textDocument.offsetAt({line:a.line,character:0})-1)),Lf.FoldingRange.create(o.line,a.line,o.character,a.character,n)}includeLastFoldingLine(e,r){if(r===Lf.FoldingRangeKind.Comment)return!1;let n=e.text,i=n.charAt(n.length-1);return!(i==="}"||i===")"||i==="]")}};mu.DefaultFoldingRangeProvider=$f});var kv=E(yu=>{"use strict";Object.defineProperty(yu,"__esModule",{value:!0});yu.LangiumGrammarFoldingRangeProvider=void 0;var pS=gu(),hS=ze(),qf=class extends pS.DefaultFoldingRangeProvider{shouldProcessContent(e){return!(0,hS.isParserRule)(e)}};yu.LangiumGrammarFoldingRangeProvider=qf});var Gf=E(Vr=>{"use strict";Object.defineProperty(Vr,"__esModule",{value:!0});Vr.Formatting=Vr.FormattingRegion=Vr.DefaultNodeFormatter=Vr.AbstractFormatter=void 0;var vu=Et(),Ff=oo(),mS=Re(),Nv=et(),Ca=bt(),jf=class{constructor(){this.collector=()=>{}}getNodeFormatter(e){return new Tu(e,this.collector)}formatDocument(e,r){return this.doDocumentFormat(e,r.options)}formatDocumentRange(e,r){return this.doDocumentFormat(e,r.options,r.range)}formatDocumentOnType(e,r){return this.doDocumentFormat(e,r.options,{start:{character:0,line:r.position.line},end:r.position})}get formatOnTypeOptions(){}doDocumentFormat(e,r,n){let i=new Map,o=(s,u,c)=>{var l,f;let y=this.nodeModeToKey(s,u),_=i.get(y),h=(l=c.options.priority)!==null&&l!==void 0?l:0,A=(f=_?.options.priority)!==null&&f!==void 0?f:0;(!_||A<=h)&&i.set(y,c)};this.collector=o,this.iterateAstFormatting(e,n);let a=this.iterateCstFormatting(e,i,r,n);return this.avoidOverlappingEdits(e.textDocument,a)}avoidOverlappingEdits(e,r){let n=[];for(let i of r){let o=n[n.length-1];if(o){let a=e.offsetAt(i.range.start),s=e.offsetAt(o.range.end);a<s&&n.pop()}n.push(i)}return n}iterateAstFormatting(e,r){let n=e.parseResult.value;this.format(n);let i=(0,mS.streamAllContents)(n).iterator(),o;do if(o=i.next(),!o.done){let a=o.value;this.insideRange(a.$cstNode.range,r)?this.format(a):i.prune()}while(!o.done)}nodeModeToKey(e,r){return`${e.offset}:${e.end}:${r}`}insideRange(e,r){return!r||e.start.line<=r.start.line&&e.end.line>=r.end.line||e.start.line>=r.start.line&&e.end.line<=r.end.line||e.start.line<=r.end.line&&e.end.line>=r.end.line}isNecessary(e,r){return r.getText(e.range)!==e.newText}iterateCstFormatting(e,r,n,i){let o={indentation:0,options:n,document:e.textDocument},a=[],u=this.iterateCstTree(e,o).iterator(),c,l;do if(l=u.next(),!l.done){let f=l.value,y=(0,Ff.isLeafCstNode)(f),_=this.nodeModeToKey(f,"prepend"),h=r.get(_);if(r.delete(_),h){let k=this.createTextEdit(c,f,h,o);for(let R of k)R&&this.insideRange(R.range,i)&&this.isNecessary(R,e.textDocument)&&a.push(R)}let A=this.nodeModeToKey(f,"append"),w=r.get(A);if(r.delete(A),w){let k=(0,Nv.getNextNode)(f);if(k){let R=this.createTextEdit(f,k,w,o);for(let T of R)T&&this.insideRange(T.range,i)&&this.isNecessary(T,e.textDocument)&&a.push(T)}}if(!h&&f.hidden){let k=this.createHiddenTextEdits(c,f,void 0,o);for(let R of k)R&&this.insideRange(R.range,i)&&this.isNecessary(R,e.textDocument)&&a.push(R)}y&&(c=f)}while(!l.done);return a}createHiddenTextEdits(e,r,n,i){var o;let a=r.range.start.line;if(e&&e.range.end.line===a)return[];let s=[],u={start:{character:0,line:a},end:r.range.start},c=i.document.getText(u),l=this.findFittingMove(u,(o=n?.moves)!==null&&o!==void 0?o:[],i),f=this.getExistingIndentationCharacterCount(c,i),_=this.getIndentationCharacterCount(i,l)-f;if(_===0)return[];let h="";_>0&&(h=(i.options.insertSpaces?" ":"	").repeat(_));let A=r.text.split(`
`);A[0]=c+A[0];for(let w=0;w<A.length;w++){let k=a+w,R={character:0,line:k};if(_>0)s.push({newText:h,range:{start:R,end:R}});else{let T=A[w],D=0;for(;D<T.length;D++){let B=T.charAt(D);if(B!==" "&&B!=="	")break}s.push({newText:"",range:{start:R,end:{line:k,character:Math.min(D,Math.abs(_))}}})}}return s}getExistingIndentationCharacterCount(e,r){let n=" ".repeat(r.options.tabSize);return(r.options.insertSpaces?e.replaceAll("	",n):e.replaceAll(n,"	")).length}getIndentationCharacterCount(e,r){let n=e.indentation;return r&&r.tabs&&(n+=r.tabs),(e.options.insertSpaces?e.options.tabSize:1)*n}createTextEdit(e,r,n,i){var o;if(r.hidden)return this.createHiddenTextEdits(e,r,n,i);let a={start:(o=e?.range.end)!==null&&o!==void 0?o:{character:0,line:0},end:r.range.start},s=this.findFittingMove(a,n.moves,i);if(!s)return[];let u=s.characters,c=s.lines,l=s.tabs,f=i.indentation;i.indentation+=l??0;let y=[];return u!==void 0?y.push(this.createSpaceTextEdit(a,u,n.options)):c!==void 0?y.push(this.createLineTextEdit(a,c,i,n.options)):l!==void 0&&y.push(this.createTabTextEdit(a,!!e,i)),(0,Ff.isLeafCstNode)(r)&&(i.indentation=f),y}createSpaceTextEdit(e,r,n){if(e.start.line===e.end.line){let o=e.end.character-e.start.character;r=this.fitIntoOptions(r,o,n)}return{newText:" ".repeat(r),range:e}}createLineTextEdit(e,r,n,i){let o=e.end.line-e.start.line;r=this.fitIntoOptions(r,o,i);let s=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation);return{newText:`${`
`.repeat(r)}${s}`,range:e}}createTabTextEdit(e,r,n){let o=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation),a=r?1:0,s=Math.max(e.end.line-e.start.line,a);return{newText:`${`
`.repeat(s)}${o}`,range:e}}fitIntoOptions(e,r,n){return n.allowMore?e=Math.max(r,e):n.allowLess&&(e=Math.min(r,e)),e}findFittingMove(e,r,n){if(r.length===0)return;if(r.length===1)return r[0];let i=e.end.line-e.start.line;for(let o of r){if(o.lines!==void 0&&i<=o.lines)return o;if(o.lines===void 0&&i===0)return o}return r[r.length-1]}iterateCstTree(e,r){let i=e.parseResult.value.$cstNode;return i?new Ca.TreeStreamImpl(i,o=>this.iterateCst(o,r)):Ca.EMPTY_STREAM}iterateCst(e,r){if(!(0,Ff.isCompositeCstNode)(e))return Ca.EMPTY_STREAM;let n=r.indentation;return new Ca.StreamImpl(()=>({index:0}),i=>i.index<e.children.length?{done:!1,value:e.children[i.index++]}:(r.indentation=n,Ca.DONE_RESULT))}};Vr.AbstractFormatter=jf;var Tu=class{constructor(e,r){this.astNode=e,this.collector=r}node(e){return new ar(e.$cstNode?[e.$cstNode]:[],this.collector)}nodes(...e){let r=[];for(let n of e)n.$cstNode&&r.push(n.$cstNode);return new ar(r,this.collector)}property(e,r){let n=(0,vu.findNodeForProperty)(this.astNode.$cstNode,e,r);return new ar(n?[n]:[],this.collector)}properties(...e){let r=[];for(let n of e){let i=(0,vu.findNodesForProperty)(this.astNode.$cstNode,n);r.push(...i)}return new ar(r,this.collector)}keyword(e,r){let n=(0,vu.findNodeForKeyword)(this.astNode.$cstNode,e,r);return new ar(n?[n]:[],this.collector)}keywords(...e){let r=[];for(let n of e){let i=(0,vu.findNodesForKeyword)(this.astNode.$cstNode,n);r.push(...i)}return new ar(r,this.collector)}cst(e){return new ar([...e],this.collector)}interior(e,r){let n=e.nodes,i=r.nodes;if(n.length!==1||i.length!==1)return new ar([],this.collector);let o=n[0],a=i[0];if(o.offset>a.offset){let s=o;o=a,a=s}return new ar((0,Nv.getInteriorNodes)(o,a),this.collector)}};Vr.DefaultNodeFormatter=Tu;var ar=class{constructor(e,r){this.nodes=e,this.collector=r}prepend(e){for(let r of this.nodes)this.collector(r,"prepend",e);return this}append(e){for(let r of this.nodes)this.collector(r,"append",e);return this}surround(e){for(let r of this.nodes)this.collector(r,"prepend",e),this.collector(r,"append",e);return this}slice(e,r){return new ar(this.nodes.slice(e,r),this.collector)}};Vr.FormattingRegion=ar;var gS;(function(t){function e(...l){return{options:{},moves:l.flatMap(f=>f.moves).sort(c)}}t.fit=e;function r(l){return i(0,l)}t.noSpace=r;function n(l){return i(1,l)}t.oneSpace=n;function i(l,f){return{options:f??{},moves:[{characters:l}]}}t.spaces=i;function o(l){return a(1,l)}t.newLine=o;function a(l,f){return{options:f??{},moves:[{lines:l}]}}t.newLines=a;function s(l){return{options:l??{},moves:[{tabs:1,lines:1}]}}t.indent=s;function u(l){return{options:l??{},moves:[{tabs:0}]}}t.noIndent=u;function c(l,f){var y,_,h,A,w,k;let R=(y=l.lines)!==null&&y!==void 0?y:0,T=(_=f.lines)!==null&&_!==void 0?_:0,D=(h=l.tabs)!==null&&h!==void 0?h:0,B=(A=f.tabs)!==null&&A!==void 0?A:0,V=(w=l.characters)!==null&&w!==void 0?w:0,G=(k=f.characters)!==null&&k!==void 0?k:0;return R<T?-1:R>T?1:D<B?-1:D>B?1:V<G?-1:V>G?1:0}})(gS=Vr.Formatting||(Vr.Formatting={}))});var Sv=E(pn=>{"use strict";var yS=pn&&pn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),vS=pn&&pn.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),TS=pn&&pn.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&yS(e,t,r);return vS(e,t),e};Object.defineProperty(pn,"__esModule",{value:!0});pn.LangiumGrammarFormatter=void 0;var be=Gf(),di=TS(ze()),Uf=class extends be.AbstractFormatter{format(e){if(di.isCrossReference(e))this.getNodeFormatter(e).properties("type","terminal").surround(be.Formatting.noSpace());else if(di.isParserRule(e)){let r=this.getNodeFormatter(e);r.keywords("entry","fragment","returns").append(be.Formatting.oneSpace()),(e.inferredType||e.returnType||e.dataType)&&e.parameters.length===0?r.property("name").append(be.Formatting.oneSpace()):r.property("name").append(be.Formatting.noSpace()),r.properties("parameters").append(be.Formatting.noSpace()),r.keywords(",").append(be.Formatting.oneSpace()),r.keywords("<").append(be.Formatting.noSpace());let n=r.keyword(";"),i=r.keyword(":");i.prepend(be.Formatting.noSpace()),r.interior(i,n).prepend(be.Formatting.indent()),n.prepend(be.Formatting.fit(be.Formatting.noSpace(),be.Formatting.newLine())),r.node(e).prepend(be.Formatting.noIndent())}else if(di.isTerminalRule(e)){let r=this.getNodeFormatter(e);e.type&&(r.property("name").append(be.Formatting.oneSpace()),r.keyword("returns").append(be.Formatting.oneSpace())),r.keywords("hidden","terminal","fragment").append(be.Formatting.oneSpace()),r.keyword(":").prepend(be.Formatting.noSpace()),r.keyword(";").prepend(be.Formatting.fit(be.Formatting.noSpace(),be.Formatting.newLine())),r.node(e).prepend(be.Formatting.noIndent())}else if(di.isAction(e)){let r=this.getNodeFormatter(e);r.keyword("{").append(be.Formatting.noSpace()),r.keywords(".","+=","=").surround(be.Formatting.noSpace()),r.keyword("}").prepend(be.Formatting.noSpace())}else if(di.isInferredType(e))this.getNodeFormatter(e).keywords("infer","infers").append(be.Formatting.oneSpace());else if(di.isAssignment(e))this.getNodeFormatter(e).keywords("=","+=","?=").surround(be.Formatting.noSpace());else if(di.isRuleCall(e)){let r=this.getNodeFormatter(e);r.keyword("<").surround(be.Formatting.noSpace()),r.keyword(",").append(be.Formatting.oneSpace()),r.properties("arguments").append(be.Formatting.noSpace())}di.isAbstractElement(e)&&this.getNodeFormatter(e).property("cardinality").prepend(be.Formatting.noSpace())}};pn.LangiumGrammarFormatter=Uf});var Au=E(_t=>{"use strict";Object.defineProperty(_t,"__esModule",{value:!0});_t.SemanticTokensDecoder=_t.AbstractSemanticTokenProvider=_t.SemanticTokensBuilder=_t.DefaultSemanticTokenOptions=_t.AllSemanticTokenModifiers=_t.AllSemanticTokenTypes=void 0;var ue=Ke(),_u=Et(),_S=Re();_t.AllSemanticTokenTypes={[ue.SemanticTokenTypes.class]:0,[ue.SemanticTokenTypes.comment]:1,[ue.SemanticTokenTypes.enum]:2,[ue.SemanticTokenTypes.enumMember]:3,[ue.SemanticTokenTypes.event]:4,[ue.SemanticTokenTypes.function]:5,[ue.SemanticTokenTypes.interface]:6,[ue.SemanticTokenTypes.keyword]:7,[ue.SemanticTokenTypes.macro]:8,[ue.SemanticTokenTypes.method]:9,[ue.SemanticTokenTypes.modifier]:10,[ue.SemanticTokenTypes.namespace]:11,[ue.SemanticTokenTypes.number]:12,[ue.SemanticTokenTypes.operator]:13,[ue.SemanticTokenTypes.parameter]:14,[ue.SemanticTokenTypes.property]:15,[ue.SemanticTokenTypes.regexp]:16,[ue.SemanticTokenTypes.string]:17,[ue.SemanticTokenTypes.struct]:18,[ue.SemanticTokenTypes.type]:19,[ue.SemanticTokenTypes.typeParameter]:20,[ue.SemanticTokenTypes.variable]:21};_t.AllSemanticTokenModifiers={[ue.SemanticTokenModifiers.abstract]:1<<0,[ue.SemanticTokenModifiers.async]:1<<1,[ue.SemanticTokenModifiers.declaration]:1<<2,[ue.SemanticTokenModifiers.defaultLibrary]:1<<3,[ue.SemanticTokenModifiers.definition]:1<<4,[ue.SemanticTokenModifiers.deprecated]:1<<5,[ue.SemanticTokenModifiers.documentation]:1<<6,[ue.SemanticTokenModifiers.modification]:1<<7,[ue.SemanticTokenModifiers.readonly]:1<<8,[ue.SemanticTokenModifiers.static]:1<<9};_t.DefaultSemanticTokenOptions={legend:{tokenTypes:Object.keys(_t.AllSemanticTokenTypes),tokenModifiers:Object.keys(_t.AllSemanticTokenModifiers)},full:{delta:!0},range:!0};var Ru=class extends ue.SemanticTokensBuilder{constructor(){super(...arguments),this._tokens=[]}push(e,r,n,i,o){this._tokens.push({line:e,char:r,length:n,tokenType:i,tokenModifiers:o})}build(){return this.applyTokens(),super.build()}buildEdits(){return this.applyTokens(),super.buildEdits()}applyTokens(){for(let e of this._tokens.sort(this.compareTokens))super.push(e.line,e.char,e.length,e.tokenType,e.tokenModifiers);this._tokens=[]}compareTokens(e,r){return e.line===r.line?e.char-r.char:e.line-r.line}};_t.SemanticTokensBuilder=Ru;var Hf=class{constructor(e){this.tokensBuilders=new Map,e.shared.workspace.TextDocuments.onDidClose(r=>{this.tokensBuilders.delete(r.document.uri)}),e.shared.lsp.LanguageServer.onInitialize(r=>{var n;this.initialize((n=r.capabilities.textDocument)===null||n===void 0?void 0:n.semanticTokens)})}initialize(e){this.clientCapabilities=e}semanticHighlight(e,r,n=ue.CancellationToken.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.build()}semanticHighlightRange(e,r,n=ue.CancellationToken.None){return this.currentRange=r.range,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.build()}semanticHighlightDelta(e,r,n=ue.CancellationToken.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.previousResult(r.previousResultId),this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.buildEdits()}createAcceptor(){return r=>{"line"in r?this.highlightToken({range:{start:{line:r.line,character:r.char},end:{line:r.line,character:r.char+r.length}},type:r.type,modifier:r.modifier}):"range"in r?this.highlightToken(r):"keyword"in r?this.highlightKeyword(r):"property"in r?this.highlightProperty(r):this.highlightNode({node:r.cst,type:r.type,modifier:r.modifier})}}getDocumentTokensBuilder(e){let r=this.tokensBuilders.get(e.uri.toString());if(r)return r;let n=new Ru;return this.tokensBuilders.set(e.uri.toString(),n),n}computeHighlighting(e,r,n){let i=e.parseResult.value;if(this.highlightElement(i,r)==="prune")return;let o=(0,_S.streamAllContents)(i).iterator(),a;do if(a=o.next(),!a.done){if(n.isCancellationRequested)break;let s=a.value,u=s.$cstNode.range,c=this.compareRange(u);if(c===1)break;if(c===-1)continue;this.highlightElement(s,r)==="prune"&&o.prune()}while(!a.done)}compareRange(e){if(!this.currentRange)return 0;let r=typeof e=="number"?e:e.start.line;return(typeof e=="number"?e:e.end.line)<this.currentRange.start.line?-1:r>this.currentRange.end.line?1:0}highlightToken(e){var r;let{range:n,type:i}=e,o=e.modifier;if(this.compareRange(n)!==0||!this.currentDocument||!this.currentTokensBuilder)return;let a=_t.AllSemanticTokenTypes[i],s=0;if(o!==void 0){typeof o=="string"&&(o=[o]);for(let l of o){let f=_t.AllSemanticTokenModifiers[l];s|=f}}let u=n.start.line,c=n.end.line;if(u===c){let l=n.start.character,f=n.end.character-l;this.currentTokensBuilder.push(u,l,f,a,s)}else if(!((r=this.clientCapabilities)===null||r===void 0)&&r.multilineTokenSupport){let l=n.start.character,f=this.currentDocument.textDocument.offsetAt(n.start),y=this.currentDocument.textDocument.offsetAt(n.end);this.currentTokensBuilder.push(u,l,y-f,a,s)}else{let l=n.start,f=this.currentDocument.textDocument.offsetAt({line:u+1,character:0});this.currentTokensBuilder.push(l.line,l.character,f-l.character-1,a,s);for(let y=u+1;y<c;y++){let _=f;f=this.currentDocument.textDocument.offsetAt({line:y+1,character:0}),this.currentTokensBuilder.push(y,0,f-_-1,a,s)}this.currentTokensBuilder.push(c,0,n.end.character,a,s)}}highlightProperty(e){let r=[];if(typeof e.index=="number"){let o=(0,_u.findNodeForProperty)(e.node.$cstNode,e.property,e.index);o&&r.push(o)}else r.push(...(0,_u.findNodesForProperty)(e.node.$cstNode,e.property));let{type:n,modifier:i}=e;for(let o of r)this.highlightNode({node:o,type:n,modifier:i})}highlightKeyword(e){let{node:r,keyword:n,type:i,index:o,modifier:a}=e,s=[];if(typeof o=="number"){let u=(0,_u.findNodeForKeyword)(r.$cstNode,n,o);u&&s.push(u)}else s.push(...(0,_u.findNodesForKeyword)(r.$cstNode,n));for(let u of s)this.highlightNode({node:u,type:i,modifier:a})}highlightNode(e){let{node:r,type:n,modifier:i}=e,o=r.range;this.highlightToken({range:o,type:n,modifier:i})}};_t.AbstractSemanticTokenProvider=Hf;var RS;(function(t){function e(n,i){let o=new Map;Object.entries(_t.AllSemanticTokenTypes).forEach(([u,c])=>o.set(c,u));let a=0,s=0;return r(n.data,5).map(u=>{a+=u[0],u[0]!==0&&(s=0),s+=u[1];let c=u[2];return{offset:i.textDocument.offsetAt({line:a,character:s}),tokenType:o.get(u[3]),tokenModifiers:u[4],text:i.textDocument.getText({start:{line:a,character:s},end:{line:a,character:s+c}})}})}t.decode=e;function r(n,i){let o=[];for(let a=0;a<n.length;a+=i){let s=n.slice(a,a+i);o.push(s)}return o}})(RS=_t.SemanticTokensDecoder||(_t.SemanticTokensDecoder={}))});var wv=E(Cu=>{"use strict";Object.defineProperty(Cu,"__esModule",{value:!0});Cu.LangiumGrammarSemanticTokenProvider=void 0;var ki=Ke(),AS=Au(),Ni=ze(),Wf=class extends AS.AbstractSemanticTokenProvider{highlightElement(e,r){var n;(0,Ni.isAssignment)(e)?r({node:e,property:"feature",type:ki.SemanticTokenTypes.property}):(0,Ni.isAction)(e)?e.feature&&r({node:e,property:"feature",type:ki.SemanticTokenTypes.property}):(0,Ni.isReturnType)(e)?r({node:e,property:"name",type:ki.SemanticTokenTypes.type}):(0,Ni.isAtomType)(e)?(e.primitiveType||e.refType)&&r({node:e,property:e.primitiveType?"primitiveType":"refType",type:ki.SemanticTokenTypes.type}):(0,Ni.isParameter)(e)?r({node:e,property:"name",type:ki.SemanticTokenTypes.parameter}):(0,Ni.isParameterReference)(e)?r({node:e,property:"parameter",type:ki.SemanticTokenTypes.parameter}):(0,Ni.isRuleCall)(e)&&!((n=e.rule.ref)===null||n===void 0)&&n.fragment&&r({node:e,property:"rule",type:ki.SemanticTokenTypes.type})}};Cu.LangiumGrammarSemanticTokenProvider=Wf});var Ov=E(bu=>{"use strict";Object.defineProperty(bu,"__esModule",{value:!0});bu.LangiumGrammarNameProvider=void 0;var CS=vo(),bS=Et(),Dv=ze(),Kf=class extends CS.DefaultNameProvider{getName(e){return(0,Dv.isAssignment)(e)?e.feature:super.getName(e)}getNameNode(e){return(0,Dv.isAssignment)(e)?(0,bS.findNodeForProperty)(e.$cstNode,"feature"):super.getNameNode(e)}};bu.LangiumGrammarNameProvider=Kf});var zf=E(Eu=>{"use strict";Object.defineProperty(Eu,"__esModule",{value:!0});Eu.DefaultReferences=void 0;var ES=Et(),hn=Re(),xv=et(),Iv=bt(),PS=ci(),Bf=class{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){let r=(0,ES.findAssignment)(e),n=e.element;if(r&&n){let i=n[r.feature];if((0,hn.isReference)(i))return i.ref;if(Array.isArray(i)){for(let o of i)if((0,hn.isReference)(o)&&o.$refNode.offset<=e.offset&&o.$refNode.end>=e.end)return o.ref}else return n}}}findDeclarationNode(e){let r=this.findDeclaration(e);if(r?.$cstNode){let n=this.nameProvider.getNameNode(r);return n||r.$cstNode}}findReferences(e,r){return r.onlyLocal?this.findLocalReferences(e,r.includeDeclaration):this.findGlobalReferences(e,r.includeDeclaration)}findGlobalReferences(e,r=!1){let n=[];if(r){let i=this.getReferenceToSelf(e);i&&n.push(i)}return n.push(...this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e))),(0,Iv.stream)(n)}findLocalReferences(e,r=!1){let i=(0,hn.getDocument)(e).parseResult.value,o=[];if(r){let s=this.getReferenceToSelf(e);s&&o.push(s)}let a=[];return(0,hn.streamAst)(i).forEach(s=>{(0,hn.streamReferences)(s).forEach(u=>{u.reference.ref===e&&a.push(u.reference)})}),a.forEach(s=>{o.push({sourceUri:(0,hn.getDocument)(s.$refNode.element).uri,sourcePath:this.nodeLocator.getAstNodePath(s.$refNode.element),targetUri:(0,hn.getDocument)(e).uri,targetPath:this.nodeLocator.getAstNodePath(e),segment:(0,xv.toDocumentSegment)(s.$refNode),local:(0,PS.equalURI)((0,hn.getDocument)(s.$refNode.element).uri,(0,hn.getDocument)(e).uri)})}),(0,Iv.stream)(o)}getReferenceToSelf(e){let r=this.nameProvider.getNameNode(e);if(r){let n=(0,hn.getDocument)(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:n.uri,sourcePath:i,targetUri:n.uri,targetPath:i,segment:(0,xv.toDocumentSegment)(r),local:!0}}}};Eu.DefaultReferences=Bf});var Fv=E(ku=>{"use strict";Object.defineProperty(ku,"__esModule",{value:!0});ku.LangiumGrammarReferences=void 0;var kS=zf(),Bt=Re(),Mv=et(),Lv=Et(),$v=bt(),Vf=ci(),qt=ze(),qv=Lt(),Pu=ui(),Yf=class extends kS.DefaultReferences{constructor(e){super(e),this.documents=e.shared.workspace.LangiumDocuments}findDeclaration(e){let r=e.element,n=(0,Lv.findAssignment)(e);if(n&&n.feature==="feature"){if((0,qt.isAssignment)(r))return this.findAssignmentDeclaration(r);if((0,qt.isAction)(r))return this.findActionDeclaration(r)}return super.findDeclaration(e)}findLocalReferences(e,r=!1){if((0,qt.isTypeAttribute)(e)){let i=(0,Bt.getDocument)(e).parseResult.value;return this.findLocalReferencesToTypeAttribute(e,i,r)}else return super.findLocalReferences(e,r)}findGlobalReferences(e,r=!1){return(0,qt.isTypeAttribute)(e)?this.findReferencesToTypeAttribute(e,r):super.findGlobalReferences(e,r)}findLocalReferencesToTypeAttribute(e,r,n){let i=[],o=(0,Bt.getContainerOfType)(e,qt.isInterface);if(o){let a=(0,Pu.collectChildrenTypes)(o,this,this.documents,this.nodeLocator),s=[];if(a.forEach(u=>{let c=this.findLocalRulesWithReturnType(u,r);s.push(...c)}),(0,Vf.equalURI)((0,Bt.getDocument)(e).uri,(0,Bt.getDocument)(r).uri)&&n){let u=this.getReferenceToSelf(e);u&&i.push(u)}s.forEach(u=>{let c=this.createReferencesToAttribute(u,e);i.push(...c)})}return(0,$v.stream)(i)}findReferencesToTypeAttribute(e,r){let n=[],i=(0,Bt.getContainerOfType)(e,qt.isInterface);if(i){if(r){let s=this.getReferenceToSelf(e);s&&n.push(s)}let o=(0,Pu.collectChildrenTypes)(i,this,this.documents,this.nodeLocator),a=[];o.forEach(s=>{let u=this.findRulesWithReturnType(s);a.push(...u)}),a.forEach(s=>{let u=this.createReferencesToAttribute(s,e);n.push(...u)})}return(0,$v.stream)(n)}createReferencesToAttribute(e,r){let n=[];if((0,qt.isParserRule)(e)){let i=(0,qv.extractAssignments)(e.definition).find(o=>o.feature===r.name);if(i?.$cstNode){let o=this.nameProvider.getNameNode(i);o&&n.push({sourceUri:(0,Bt.getDocument)(i).uri,sourcePath:this.nodeLocator.getAstNodePath(i),targetUri:(0,Bt.getDocument)(r).uri,targetPath:this.nodeLocator.getAstNodePath(r),segment:(0,Mv.toDocumentSegment)(o),local:(0,Vf.equalURI)((0,Bt.getDocument)(i).uri,(0,Bt.getDocument)(r).uri)})}}else{if(e.feature===r.name){let o=(0,Lv.findNodeForProperty)(e.$cstNode,"feature");o&&n.push({sourceUri:(0,Bt.getDocument)(e).uri,sourcePath:this.nodeLocator.getAstNodePath(e),targetUri:(0,Bt.getDocument)(r).uri,targetPath:this.nodeLocator.getAstNodePath(r),segment:(0,Mv.toDocumentSegment)(o),local:(0,Vf.equalURI)((0,Bt.getDocument)(e).uri,(0,Bt.getDocument)(r).uri)})}let i=(0,Bt.getContainerOfType)(e,qt.isParserRule);n.push(...this.createReferencesToAttribute(i,r))}return n}findAssignmentDeclaration(e){var r;let n=(0,Bt.getContainerOfType)(e,qt.isParserRule),i=(0,qv.getActionAtElement)(e);if(i){let o=this.findActionDeclaration(i,e.feature);if(o)return o}if(!((r=n?.returnType)===null||r===void 0)&&r.ref&&((0,qt.isInterface)(n.returnType.ref)||(0,qt.isType)(n.returnType.ref))){let o=(0,Pu.collectSuperTypes)(n.returnType.ref);for(let a of o){let s=a.attributes.find(u=>u.name===e.feature);if(s)return s}}return e}findActionDeclaration(e,r){var n;if(!((n=e.type)===null||n===void 0)&&n.ref){let i=r??e.feature,o=(0,Pu.collectSuperTypes)(e.type.ref);for(let a of o){let s=a.attributes.find(u=>u.name===i);if(s)return s}}}findRulesWithReturnType(e){let r=[];return this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e)).forEach(i=>{let o=this.documents.getOrCreateDocument(i.sourceUri),a=this.nodeLocator.getAstNode(o,i.sourcePath);((0,qt.isParserRule)(a)||(0,qt.isAction)(a))&&r.push(a)}),r}findLocalRulesWithReturnType(e,r){let n=[];return(0,Bt.streamAst)(r).filter(o=>{var a,s;return(0,qt.isParserRule)(o)&&((a=o.returnType)===null||a===void 0?void 0:a.ref)===e||(0,qt.isAction)(o)&&((s=o.type)===null||s===void 0?void 0:s.ref)===e}).forEach(o=>{((0,qt.isParserRule)(o)||(0,qt.isAction)(o))&&n.push(o)}),n}};ku.LangiumGrammarReferences=Yf});var Qf=E(Nr=>{"use strict";var NS=Nr&&Nr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),SS=Nr&&Nr.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),wS=Nr&&Nr.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&NS(e,t,r);return SS(e,t),e};Object.defineProperty(Nr,"__esModule",{value:!0});Nr.findFirstFeatures=Nr.findNextFeatures=void 0;var zt=wS(ze()),Fn=Lt(),jv=Re(),DS=Et();function OS(t,e){let r={stacks:t,tokens:e};return xS(r),r.stacks.flat().forEach(i=>{i.property=void 0}),Hv(r.stacks).map(i=>i[i.length-1])}Nr.findNextFeatures=OS;function Xf(t){let{next:e,cardinalities:r,visited:n,plus:i}=t,o=[],a=e.feature;if(n.has(a))return[];n.add(a);let s,u=a;for(;u.$container;)if(zt.isGroup(u.$container)){s=u.$container;break}else if(zt.isAbstractElement(u.$container))u=u.$container;else break;if((0,Fn.isArrayCardinality)(u.cardinality)){let c=_o({next:{feature:u,type:e.type,new:!1},cardinalities:r,visited:n,plus:i});for(let l of c)i.add(l.feature);o.push(...c)}if(s){let c=s.elements.indexOf(u);c!==void 0&&c<s.elements.length-1&&o.push(...Uv({feature:s,type:e.type,new:!1},c+1,r,n,i)),o.every(l=>(0,Fn.isOptionalCardinality)(l.feature.cardinality)||(0,Fn.isOptionalCardinality)(r.get(l.feature))||i.has(l.feature))&&o.push(...Xf({next:{feature:s,type:e.type,new:!1},cardinalities:r,visited:n,plus:i}))}return o}function Gv(t){return(0,jv.isAstNode)(t)&&(t={feature:t}),_o({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}Nr.findFirstFeatures=Gv;function _o(t){var e,r,n;let{next:i,cardinalities:o,visited:a,plus:s}=t;if(i===void 0)return[];let{feature:u,type:c}=i;if(zt.isGroup(u)){if(a.has(u))return[];a.add(u)}if(zt.isGroup(u))return Uv(i,0,o,a,s).map(l=>Nu(l,u.cardinality,o));if(zt.isAlternatives(u)||zt.isUnorderedGroup(u))return u.elements.flatMap(l=>_o({next:{feature:l,new:!1,type:c},cardinalities:o,visited:a,plus:s})).map(l=>Nu(l,u.cardinality,o));if(zt.isAssignment(u)){let l={feature:u.terminal,new:!1,type:c,property:(e=i.property)!==null&&e!==void 0?e:u.feature};return _o({next:l,cardinalities:o,visited:a,plus:s}).map(f=>Nu(f,u.cardinality,o))}else{if(zt.isAction(u))return Xf({next:{feature:u,new:!0,type:(0,Fn.getTypeName)(u),property:(r=i.property)!==null&&r!==void 0?r:u.feature},cardinalities:o,visited:a,plus:s});if(zt.isRuleCall(u)&&zt.isParserRule(u.rule.ref)){let l=u.rule.ref,f={feature:l.definition,new:!0,type:l.fragment?void 0:(n=(0,Fn.getExplicitRuleType)(l))!==null&&n!==void 0?n:l.name,property:i.property};return _o({next:f,cardinalities:o,visited:a,plus:s}).map(y=>Nu(y,u.cardinality,o))}else return[i]}}function Nu(t,e,r){return r.set(t.feature,e),t}function Uv(t,e,r,n,i){var o;let a=[],s;for(;e<t.feature.elements.length&&(s={feature:t.feature.elements[e++],new:!1,type:t.type},a.push(..._o({next:s,cardinalities:r,visited:n,plus:i})),!!(0,Fn.isOptionalCardinality)((o=s.feature.cardinality)!==null&&o!==void 0?o:r.get(s.feature))););return a}function xS(t){for(let e of t.tokens){let r=Hv(t.stacks,e);t.stacks=r}}function Hv(t,e){let r=[];for(let n of t)r.push(...IS(n,e));return r}function IS(t,e){let r=new Map,n=new Set(t.map(o=>o.feature).filter(MS)),i=[];for(;t.length>0;){let o=t.pop(),a=Xf({next:o,cardinalities:r,plus:n,visited:new Set}).filter(s=>e?Jf(s.feature,e):!0);for(let s of a)i.push([...t,s]);if(!a.every(s=>(0,Fn.isOptionalCardinality)(s.feature.cardinality)||(0,Fn.isOptionalCardinality)(r.get(s.feature))))break}return i}function MS(t){if(t.cardinality==="+")return!0;let e=(0,jv.getContainerOfType)(t,zt.isAssignment);return!!(e&&e.cardinality==="+")}function Jf(t,e){if(zt.isKeyword(t))return t.value===e.image;if(zt.isRuleCall(t))return LS(t.rule.ref,e);if(zt.isCrossReference(t)){let r=(0,DS.getCrossReferenceTerminal)(t);if(r)return Jf(r,e)}return!1}function LS(t,e){return zt.isParserRule(t)?Gv(t.definition).some(n=>Jf(n.feature,e)):zt.isTerminalRule(t)?new RegExp((0,Fn.terminalRegex)(t)).test(e.image):!1}});var tp=E(mn=>{"use strict";var $S=mn&&mn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),qS=mn&&mn.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),FS=mn&&mn.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&$S(e,t,r);return qS(e,t),e};Object.defineProperty(mn,"__esModule",{value:!0});mn.DefaultCompletionProvider=void 0;var ba=Ke(),Ea=FS(ze()),jS=Lt(),Zf=Re(),GS=et(),Wv=Et(),Kv=bt(),Su=Qf(),ep=class{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async getCompletion(e,r){let i=e.parseResult.value.$cstNode;if(!i)return;let o=[],a=e.textDocument,s=a.getText(),u=a.offsetAt(r.position),c=(w,k)=>{let R=this.fillCompletionItem(a,u,w,k);R&&o.push(R)},l=(0,GS.findLeafNodeAtOffset)(i,this.backtrackToAnyToken(s,u));if(!l){let w=(0,Wv.getEntryRule)(this.grammar);return await this.completionForRule(void 0,w,c),ba.CompletionList.create(o,!0)}let f=this.backtrackToTokenStart(s,u),y=this.findFeaturesAt(a,f),_=[],h=u!==f;h&&(_=this.findFeaturesAt(a,u));let A=w=>Ea.isKeyword(w.feature)?w.feature.value:w.feature;if(await Promise.all((0,Kv.stream)(y).distinct(A).map(w=>this.completionFor(l.element,w,c))),h){let w=a.getText({start:a.positionAt(f),end:r.position}).toLowerCase();o=o.filter(k=>k.label.toLowerCase().startsWith(w)),await Promise.all((0,Kv.stream)(_).exclude(y,A).distinct(A).map(k=>this.completionFor(l.element,k,c)))}return ba.CompletionList.create(o,!0)}findFeaturesAt(e,r){let n=e.getText({start:ba.Position.create(0,0),end:e.positionAt(r)}),i=this.completionParser.parse(n),o=i.tokens;if(i.tokenIndex===0){let u=(0,Wv.getEntryRule)(this.grammar),c=(0,Su.findFirstFeatures)({feature:u.definition,new:!0,type:(0,jS.getExplicitRuleType)(u)});return o.length>0?(o.shift(),(0,Su.findNextFeatures)(c.map(l=>[l]),o)):c}let a=[...o].splice(i.tokenIndex);return(0,Su.findNextFeatures)([i.elementStack.map(u=>({feature:u}))],a)}backtrackToAnyToken(e,r){for(r>=e.length&&(r=e.length-1);r>0&&/\s/.test(e.charAt(r));)r--;return r}backtrackToTokenStart(e,r){if(r<1)return r;let n=this.grammarConfig.nameRegexp,i=e.charAt(r-1);for(;r>0&&n.test(i);)r--,i=e.charAt(r-1);return r}async completionForRule(e,r,n){if(Ea.isParserRule(r)){let i=(0,Su.findFirstFeatures)(r.definition);await Promise.all(i.map(o=>this.completionFor(e,o,n)))}}completionFor(e,r,n){if(Ea.isKeyword(r.feature))return this.completionForKeyword(r.feature,e,n);if(Ea.isCrossReference(r.feature)&&e)return this.completionForCrossReference(r,e,n)}completionForCrossReference(e,r,n){let i=(0,Zf.getContainerOfType)(e.feature,Ea.isAssignment);if(i){if(e.type&&(e.new||r?.$type!==e.type)&&(r={$type:e.type,$container:r,$containerProperty:e.property}),!r)return;let o={reference:{},container:r,property:i.feature};try{let a=this.scopeProvider.getScope(o),s=new Set;a.getAllElements().forEach(u=>{!s.has(u.name)&&this.filterCrossReference(u)&&(n(u,this.createReferenceCompletionItem(u)),s.add(u.name))})}catch(a){console.error(a)}}}createReferenceCompletionItem(e){return{kind:ba.CompletionItemKind.Reference,detail:e.type,sortText:"0"}}filterCrossReference(e){return!0}completionForKeyword(e,r,n){!e.value.match(/[\w]+/)||n(e.value,{kind:ba.CompletionItemKind.Keyword,detail:"Keyword",sortText:/\w/.test(e.value)?"1":"2"})}fillCompletionItem(e,r,n,i){let o;if(typeof n=="string")o=n;else if((0,Zf.isAstNode)(n)){let u=this.nameProvider.getName(n);if(!u)return;o=u}else if(!(0,Zf.isAstNode)(n))o=n.name;else return;let a=this.buildCompletionTextEdit(e,r,o);return a?Object.assign({label:o,textEdit:a},i):void 0}buildCompletionTextEdit(e,r,n){let i=0,o=e.getText(),a=o.toLowerCase(),s=n.toLowerCase();for(let u=s.length;u>0;u--){let c=a.substring(r-u,r);if(s.startsWith(c)&&(u===0||!this.isWordCharacterAt(a,r-u-1))){i=u;break}}if(i>0||r===0||!this.isWordCharacterAt(n,0)||!this.isWordCharacterAt(o,r-1)){let u=e.positionAt(r-i),c=e.positionAt(r);return{newText:n,range:{start:u,end:c}}}else return}isWordCharacterAt(e,r){return this.grammarConfig.nameRegexp.test(e.charAt(r))}};mn.DefaultCompletionProvider=ep});var zv=E(Bv=>{"use strict";Object.defineProperty(Bv,"__esModule",{value:!0})});var np=E(wu=>{"use strict";Object.defineProperty(wu,"__esModule",{value:!0});wu.DefaultDocumentHighlightProvider=void 0;var US=Ke(),HS=Re(),WS=et(),KS=ci(),rp=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,r){let n=e.parseResult.value.$cstNode;if(!n)return;let i=(0,WS.findDeclarationNodeAtOffset)(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclaration(i);if(o){let a=[],u={onlyLocal:!0,includeDeclaration:(0,KS.equalURI)((0,HS.getDocument)(o).uri,e.uri)};return this.references.findReferences(o,u).forEach(c=>{a.push(this.createDocumentHighlight(c))}),a}}createDocumentHighlight(e){return US.DocumentHighlight.create(e.segment.range)}};wu.DefaultDocumentHighlightProvider=rp});var Yv=E(Vv=>{"use strict";Object.defineProperty(Vv,"__esModule",{value:!0})});var op=E(Du=>{"use strict";Object.defineProperty(Du,"__esModule",{value:!0});Du.DefaultDocumentSymbolProvider=void 0;var BS=Ke(),zS=Re(),ip=class{constructor(e){this.nameProvider=e.references.NameProvider}getSymbols(e){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,r){let n=r.$cstNode,i=this.nameProvider.getNameNode(r);if(i&&n){let o=this.nameProvider.getName(r);return[{kind:this.getSymbolKind(r.$type),name:o??i.text,range:n.range,selectionRange:i.range,children:this.getChildSymbols(e,r)}]}else return this.getChildSymbols(e,r)||[]}getChildSymbols(e,r){let n=[];for(let i of(0,zS.streamContents)(r)){let o=this.getSymbol(e,i);n.push(...o)}if(n.length>0)return n}getSymbolKind(e){return BS.SymbolKind.Field}};Du.DefaultDocumentSymbolProvider=ip});var Xv=E(Ou=>{"use strict";Object.defineProperty(Ou,"__esModule",{value:!0});Ou.AbstractExecuteCommandHandler=void 0;var VS=Ke(),ap=class{constructor(){this.registeredCommands=new Map,this.registerCommands(this.createCommandAcceptor())}get commands(){return Array.from(this.registeredCommands.keys())}async executeCommand(e,r,n=VS.CancellationToken.None){let i=this.registeredCommands.get(e);if(i)return i(r,n)}createCommandAcceptor(){return(e,r)=>this.registeredCommands.set(e,r)}};Ou.AbstractExecuteCommandHandler=ap});var up=E(xu=>{"use strict";Object.defineProperty(xu,"__esModule",{value:!0});xu.DefaultDefinitionProvider=void 0;var YS=Ke(),XS=Re(),JS=et(),sp=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,r){let n=e.parseResult.value;if(n.$cstNode){let i=n.$cstNode,o=(0,JS.findDeclarationNodeAtOffset)(i,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,r)}}collectLocationLinks(e,r){var n;let i=this.findLink(e);if(i)return[YS.LocationLink.create(i.targetDocument.textDocument.uri,((n=i.target.element.$cstNode)!==null&&n!==void 0?n:i.target).range,i.target.range,i.source.range)]}findLink(e){let r=this.references.findDeclarationNode(e);if(r?.element){let n=(0,XS.getDocument)(r.element);if(r&&n)return{source:e,target:r,targetDocument:n}}}};xu.DefaultDefinitionProvider=sp});var lp=E(Ro=>{"use strict";Object.defineProperty(Ro,"__esModule",{value:!0});Ro.MultilineCommentHoverProvider=Ro.AstNodeHoverProvider=void 0;var Jv=et(),Iu=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,r){var n,i;let o=(i=(n=e.parseResult)===null||n===void 0?void 0:n.value)===null||i===void 0?void 0:i.$cstNode;if(o){let a=e.textDocument.offsetAt(r.position),s=(0,Jv.findDeclarationNodeAtOffset)(o,a,this.grammarConfig.nameRegexp);if(s&&s.offset+s.length>a){let u=this.references.findDeclaration(s);if(u)return this.getAstNodeHoverContent(u)}}}};Ro.AstNodeHoverProvider=Iu;var cp=class extends Iu{constructor(){super(...arguments),this.commentContentRegex=/\/\*([\s\S]*?)\*\//}getAstNodeHoverContent(e){let r=(0,Jv.findCommentNode)(e.$cstNode,this.grammarConfig.multilineCommentRules),n;if(r){let i=this.commentContentRegex.exec(r.text);i&&i[1]&&(n=this.getCommentContent(i[1]))}if(n)return{contents:{kind:"markdown",value:n}}}getCommentContent(e){return e.split(`
`).map(n=>(n=n.trim(),n.startsWith("*")&&(n=n.substring(1).trim()),n)).join(" ").trim()}};Ro.MultilineCommentHoverProvider=cp});var Qv=E(Mu=>{"use strict";Object.defineProperty(Mu,"__esModule",{value:!0});Mu.AbstractGoToImplementationProvider=void 0;var QS=Ke(),ZS=et(),dp=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getImplementation(e,r,n=QS.CancellationToken.None){let i=e.parseResult.value;if(i.$cstNode){let o=(0,ZS.findDeclarationNodeAtOffset)(i.$cstNode,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o){let a=this.references.findDeclaration(o);if(a)return this.collectGoToImplementationLocationLinks(a,n)}}}};Mu.AbstractGoToImplementationProvider=dp});var Si=E(Yr=>{"use strict";Object.defineProperty(Yr,"__esModule",{value:!0});Yr.DefaultLangiumDocuments=Yr.DefaultLangiumDocumentFactory=Yr.DefaultTextDocumentFactory=Yr.DocumentState=void 0;var Zv=qd(),ew=Nn(),tw=bt(),mp;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(mp=Yr.DocumentState||(Yr.DocumentState={}));var fp=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.fileSystemProvider=e.workspace.FileSystemProvider}fromUri(e){let r=this.getContent(e),n=this.serviceRegistry.getServices(e);return Zv.TextDocument.create(e.toString(),n.LanguageMetaData.languageId,0,r)}getContent(e){return this.fileSystemProvider.readFileSync(e)}};Yr.DefaultTextDocumentFactory=fp;var pp=class{constructor(e){this.serviceRegistry=e.ServiceRegistry}fromTextDocument(e,r){return this.create(e,void 0,void 0,r)}fromString(e,r){return this.create(void 0,e,void 0,r)}fromModel(e,r){return this.create(void 0,void 0,e,r)}create(e,r,n,i){i===void 0&&(i=ew.URI.parse(e.uri));let o=this.serviceRegistry.getServices(i),a;return n===void 0?a=o.parser.LangiumParser.parse(r??e.getText()):a={value:n,parserErrors:[],lexerErrors:[]},this.createLangiumDocument(a,i,e??{$template:!0,languageId:o.LanguageMetaData.languageId,uri:i,text:r})}createLangiumDocument(e,r,n){let i,o=this,a={parseResult:e,uri:r,state:mp.Parsed,references:[],get textDocument(){return i||(i=n.$template?o.createTextDocument(n):n),i}};return e.value.$document=a,a}createTextDocument(e){var r;return Zv.TextDocument.create(e.uri.toString(),e.languageId,0,(r=e.text)!==null&&r!==void 0?r:"")}};Yr.DefaultLangiumDocumentFactory=pp;var hp=class{constructor(e){this.documentMap=new Map,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory}get all(){return(0,tw.stream)(this.documentMap.values())}addDocument(e){let r=e.uri.toString();if(this.documentMap.has(r))throw new Error(`A document with the URI '${r}' is already present.`);this.documentMap.set(r,e)}getOrCreateDocument(e){let r=e.toString(),n=this.documentMap.get(r);if(n)return n;let i=this.textDocuments.get(r);return i?n=this.langiumDocumentFactory.fromTextDocument(i,e):n=this.langiumDocumentFactory.fromString(this.getContent(e),e),this.documentMap.set(r,n),n}getContent(e){return this.fileSystemProvider.readFileSync(e)}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){let r=e.toString(),n=this.documentMap.get(r);n&&(n.state=mp.Changed,this.documentMap.delete(r))}};Yr.DefaultLangiumDocuments=hp});var yp=E(Ao=>{"use strict";Object.defineProperty(Ao,"__esModule",{value:!0});Ao.mergeSignatureHelpOptions=Ao.AbstractSignatureHelpProvider=void 0;var rw=Ke(),nw=et(),gp=class{provideSignatureHelp(e,r,n=rw.CancellationToken.None){let o=e.parseResult.value.$cstNode;if(o){let a=(0,nw.findLeafNodeAtOffset)(o,e.textDocument.offsetAt(r.position));if(a)return this.getSignatureFromElement(a.element,n)}}get signatureHelpOptions(){return{triggerCharacters:["("],retriggerCharacters:[","]}}};Ao.AbstractSignatureHelpProvider=gp;function iw(t){let e=[],r=[];t.forEach(i=>{i?.triggerCharacters&&e.push(...i.triggerCharacters),i?.retriggerCharacters&&r.push(...i.retriggerCharacters)});let n={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:r.length>0?Array.from(new Set(r)).sort():void 0};return n.triggerCharacters?n:void 0}Ao.mergeSignatureHelpOptions=iw});var _p=E(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.createRequestHandler=X.createServerRequestHandler=X.createCallHierarchyRequestHandler=X.addCallHierarchyHandler=X.addSignatureHelpHandler=X.addDocumentLinkHandler=X.addExecuteCommandHandler=X.addConfigurationChangeHandler=X.addSemanticTokenHandler=X.addRenameHandler=X.addFormattingHandler=X.addFoldingRangeHandler=X.addHoverHandler=X.addDocumentHighlightsHandler=X.addGoToImplementationHandler=X.addGoToTypeDefinitionHandler=X.addGotoDefinitionHandler=X.addDocumentSymbolHandler=X.addCodeActionHandler=X.addFindReferencesHandler=X.addCompletionHandler=X.addDiagnosticsHandler=X.addDocumentsHandler=X.startLanguageServer=X.DefaultLanguageServer=void 0;var sr=Ke(),Co=Nn(),eT=fa(),ow=Kr(),aw=Si(),sw=Au(),uw=yp(),vp=class{constructor(e){this.onInitializeEmitter=new sr.Emitter,this.onInitializedEmitter=new sr.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){(0,eT.eagerLoad)(this.services),this.services.ServiceRegistry.all.forEach(e=>(0,eT.eagerLoad)(e))}hasService(e){return this.services.ServiceRegistry.all.some(r=>e(r)!==void 0)}buildInitializeResult(e){var r;let n=this.services.ServiceRegistry.all,i=this.hasService(G=>G.lsp.Formatter),o=n.map(G=>{var ve;return(ve=G.lsp.Formatter)===null||ve===void 0?void 0:ve.formatOnTypeOptions}).find(G=>!!G),a=this.hasService(G=>G.lsp.CodeActionProvider),s=this.hasService(G=>G.lsp.SemanticTokenProvider),u=(r=this.services.lsp.ExecuteCommandHandler)===null||r===void 0?void 0:r.commands,c=this.services.lsp.DocumentLinkProvider,l=(0,uw.mergeSignatureHelpOptions)(n.map(G=>{var ve;return(ve=G.lsp.SignatureHelp)===null||ve===void 0?void 0:ve.signatureHelpOptions})),f=this.hasService(G=>G.lsp.TypeProvider),y=this.hasService(G=>G.lsp.ImplementationProvider),_=this.hasService(G=>G.lsp.CompletionProvider),h=this.hasService(G=>G.lsp.ReferencesProvider),A=this.hasService(G=>G.lsp.DocumentSymbolProvider),w=this.hasService(G=>G.lsp.DefinitionProvider),k=this.hasService(G=>G.lsp.DocumentHighlightProvider),R=this.hasService(G=>G.lsp.FoldingRangeProvider),T=this.hasService(G=>G.lsp.HoverProvider),D=this.hasService(G=>G.lsp.RenameProvider),B=this.hasService(G=>G.lsp.CallHierarchyProvider);return{capabilities:{workspace:{workspaceFolders:{supported:!0}},executeCommandProvider:u&&{commands:u},textDocumentSync:sr.TextDocumentSyncKind.Incremental,completionProvider:_?{}:void 0,referencesProvider:h,documentSymbolProvider:A,definitionProvider:w,typeDefinitionProvider:f,documentHighlightProvider:k,codeActionProvider:a,documentFormattingProvider:i,documentRangeFormattingProvider:i,documentOnTypeFormattingProvider:o,foldingRangeProvider:R,hoverProvider:T,renameProvider:D?{prepareProvider:!0}:void 0,semanticTokensProvider:s?sw.DefaultSemanticTokenOptions:void 0,signatureHelpProvider:l,implementationProvider:y,callHierarchyProvider:B?{}:void 0,documentLinkProvider:c?{resolveProvider:!!c.resolveDocumentLink}:void 0}}}async initialized(e){this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}};X.DefaultLanguageServer=vp;function cw(t){let e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");tT(e,t),rT(e,t),nT(e,t),iT(e,t),aT(e,t),sT(e,t),uT(e,t),cT(e,t),lT(e,t),fT(e,t),pT(e,t),oT(e,t),hT(e,t),dT(e,t),mT(e,t),yT(e,t),TT(e,t),_T(e,t),vT(e,t),gT(e,t),e.onInitialize(n=>t.lsp.LanguageServer.initialize(n)),e.onInitialized(n=>t.lsp.LanguageServer.initialized(n)),t.workspace.TextDocuments.listen(e),e.listen()}X.startLanguageServer=cw;function tT(t,e){let r=e.workspace.DocumentBuilder,n=e.workspace.MutexLock;function i(a,s){n.lock(u=>r.update(a,s,u))}e.workspace.TextDocuments.onDidChangeContent(a=>{i([Co.URI.parse(a.document.uri)],[])}),t.onDidChangeWatchedFiles(a=>{let s=a.changes.filter(c=>c.type!==sr.FileChangeType.Deleted).map(c=>Co.URI.parse(c.uri)),u=a.changes.filter(c=>c.type===sr.FileChangeType.Deleted).map(c=>Co.URI.parse(c.uri));i(s,u)})}X.addDocumentsHandler=tT;function rT(t,e){e.workspace.DocumentBuilder.onBuildPhase(aw.DocumentState.Validated,async(n,i)=>{for(let o of n)if(o.diagnostics&&t.sendDiagnostics({uri:o.uri.toString(),diagnostics:o.diagnostics}),i.isCancellationRequested)return})}X.addDiagnosticsHandler=rT;function nT(t,e){t.onCompletion(Vt((r,n,i,o)=>{var a;return(a=r.lsp.CompletionProvider)===null||a===void 0?void 0:a.getCompletion(n,i,o)},e))}X.addCompletionHandler=nT;function iT(t,e){t.onReferences(Vt((r,n,i,o)=>{var a;return(a=r.lsp.ReferencesProvider)===null||a===void 0?void 0:a.findReferences(n,i,o)},e))}X.addFindReferencesHandler=iT;function oT(t,e){t.onCodeAction(Vt((r,n,i,o)=>{var a;return(a=r.lsp.CodeActionProvider)===null||a===void 0?void 0:a.getCodeActions(n,i,o)},e))}X.addCodeActionHandler=oT;function aT(t,e){t.onDocumentSymbol(Vt((r,n,i,o)=>{var a;return(a=r.lsp.DocumentSymbolProvider)===null||a===void 0?void 0:a.getSymbols(n,i,o)},e))}X.addDocumentSymbolHandler=aT;function sT(t,e){t.onDefinition(Vt((r,n,i,o)=>{var a;return(a=r.lsp.DefinitionProvider)===null||a===void 0?void 0:a.getDefinition(n,i,o)},e))}X.addGotoDefinitionHandler=sT;function uT(t,e){t.onTypeDefinition(Vt((r,n,i,o)=>{var a;return(a=r.lsp.TypeProvider)===null||a===void 0?void 0:a.getTypeDefinition(n,i,o)},e))}X.addGoToTypeDefinitionHandler=uT;function cT(t,e){t.onImplementation(Vt((r,n,i,o)=>{var a;return(a=r.lsp.ImplementationProvider)===null||a===void 0?void 0:a.getImplementation(n,i,o)},e))}X.addGoToImplementationHandler=cT;function lT(t,e){t.onDocumentHighlight(Vt((r,n,i,o)=>{var a;return(a=r.lsp.DocumentHighlightProvider)===null||a===void 0?void 0:a.getDocumentHighlight(n,i,o)},e))}X.addDocumentHighlightsHandler=lT;function dT(t,e){t.onHover(Vt((r,n,i,o)=>{var a;return(a=r.lsp.HoverProvider)===null||a===void 0?void 0:a.getHoverContent(n,i,o)},e))}X.addHoverHandler=dT;function fT(t,e){t.onFoldingRanges(Vt((r,n,i,o)=>{var a;return(a=r.lsp.FoldingRangeProvider)===null||a===void 0?void 0:a.getFoldingRanges(n,i,o)},e))}X.addFoldingRangeHandler=fT;function pT(t,e){t.onDocumentFormatting(Vt((r,n,i,o)=>{var a;return(a=r.lsp.Formatter)===null||a===void 0?void 0:a.formatDocument(n,i,o)},e)),t.onDocumentRangeFormatting(Vt((r,n,i,o)=>{var a;return(a=r.lsp.Formatter)===null||a===void 0?void 0:a.formatDocumentRange(n,i,o)},e)),t.onDocumentOnTypeFormatting(Vt((r,n,i,o)=>{var a;return(a=r.lsp.Formatter)===null||a===void 0?void 0:a.formatDocumentOnType(n,i,o)},e))}X.addFormattingHandler=pT;function hT(t,e){t.onRenameRequest(Vt((r,n,i,o)=>{var a;return(a=r.lsp.RenameProvider)===null||a===void 0?void 0:a.rename(n,i,o)},e)),t.onPrepareRename(Vt((r,n,i,o)=>{var a;return(a=r.lsp.RenameProvider)===null||a===void 0?void 0:a.prepareRename(n,i,o)},e))}X.addRenameHandler=hT;function mT(t,e){let r="No semantic token provider registered";t.languages.semanticTokens.on(wi((n,i,o,a)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlight(i,o,a):new sr.ResponseError(0,r),e)),t.languages.semanticTokens.onDelta(wi((n,i,o,a)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightDelta(i,o,a):new sr.ResponseError(0,r),e)),t.languages.semanticTokens.onRange(wi((n,i,o,a)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightRange(i,o,a):new sr.ResponseError(0,r),e))}X.addSemanticTokenHandler=mT;function gT(t,e){t.onDidChangeConfiguration(r=>{r.settings&&e.workspace.ConfigurationProvider.updateConfiguration(r)})}X.addConfigurationChangeHandler=gT;function yT(t,e){let r=e.lsp.ExecuteCommandHandler;r&&t.onExecuteCommand(async(n,i)=>{var o;try{return await r.executeCommand(n.command,(o=n.arguments)!==null&&o!==void 0?o:[],i)}catch(a){return Pa(a)}})}X.addExecuteCommandHandler=yT;function vT(t,e){var r;let n=e.lsp.DocumentLinkProvider;if(n){t.onDocumentLinks(wi((o,a,s,u)=>n.getDocumentLinks(a,s,u),e));let i=(r=n.resolveDocumentLink)===null||r===void 0?void 0:r.bind(n);i&&t.onDocumentLinkResolve(async(o,a)=>{try{return await i(o,a)}catch(s){return Pa(s)}})}}X.addDocumentLinkHandler=vT;function TT(t,e){t.onSignatureHelp(wi((r,n,i,o)=>{var a;return(a=r.lsp.SignatureHelp)===null||a===void 0?void 0:a.provideSignatureHelp(n,i,o)},e))}X.addSignatureHelpHandler=TT;function _T(t,e){let r="No call hierarchy provider registered";t.languages.callHierarchy.onPrepare(wi((n,i,o,a)=>{var s;return n.lsp.CallHierarchyProvider?(s=n.lsp.CallHierarchyProvider.prepareCallHierarchy(i,o,a))!==null&&s!==void 0?s:null:new sr.ResponseError(0,r)},e)),t.languages.callHierarchy.onIncomingCalls(Tp((n,i,o)=>{var a;return n.lsp.CallHierarchyProvider?(a=n.lsp.CallHierarchyProvider.incomingCalls(i,o))!==null&&a!==void 0?a:null:new sr.ResponseError(0,r)},e)),t.languages.callHierarchy.onOutgoingCalls(Tp((n,i,o)=>{var a;return n.lsp.CallHierarchyProvider?(a=n.lsp.CallHierarchyProvider.outgoingCalls(i,o))!==null&&a!==void 0?a:null:new sr.ResponseError(0,r)},e))}X.addCallHierarchyHandler=_T;function Tp(t,e){let r=e.ServiceRegistry;return async(n,i)=>{let o=Co.URI.parse(n.item.uri),a=r.getServices(o);if(!a)throw console.error(`Could not find service instance for uri: '${o.toString()}'`),new Error;try{return await t(a,n,i)}catch(s){return Pa(s)}}}X.createCallHierarchyRequestHandler=Tp;function wi(t,e){let r=e.workspace.LangiumDocuments,n=e.ServiceRegistry;return async(i,o)=>{let a=Co.URI.parse(i.textDocument.uri),s=n.getServices(a);if(!s)throw console.error(`Could not find service instance for uri: '${a.toString()}'`),new Error;let u=r.getOrCreateDocument(a);if(!u)throw new Error;try{return await t(s,u,i,o)}catch(c){return Pa(c)}}}X.createServerRequestHandler=wi;function Vt(t,e){let r=e.workspace.LangiumDocuments,n=e.ServiceRegistry;return async(i,o)=>{let a=Co.URI.parse(i.textDocument.uri),s=n.getServices(a);if(!s)return console.error(`Could not find service instance for uri: '${a.toString()}'`),null;let u=r.getOrCreateDocument(a);if(!u)return null;try{return await t(s,u,i,o)}catch(c){return Pa(c)}}}X.createRequestHandler=Vt;function Pa(t){if((0,ow.isOperationCancelled)(t))return new sr.ResponseError(sr.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof sr.ResponseError)return t;throw t}});var Ap=E(Lu=>{"use strict";Object.defineProperty(Lu,"__esModule",{value:!0});Lu.DefaultReferencesProvider=void 0;var RT=Ke(),lw=Re(),dw=et(),Rp=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,r){let n=e.parseResult.value.$cstNode;if(!n)return[];let i=(0,dw.findDeclarationNodeAtOffset)(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);return i?this.getReferences(i,r,e):[]}getReferences(e,r,n){let i=[],o=this.references.findDeclaration(e);if(o){let a={includeDeclaration:r.context.includeDeclaration};this.references.findReferences(o,a).forEach(s=>{(0,lw.isReference)(s)?i.push(RT.Location.create(n.uri.toString(),s.$refNode.range)):i.push(RT.Location.create(s.sourceUri.toString(),s.segment.range))})}return i}};Lu.DefaultReferencesProvider=Rp});var bp=E($u=>{"use strict";Object.defineProperty($u,"__esModule",{value:!0});$u.DefaultRenameProvider=void 0;var fw=Ke(),pw=vo(),AT=et(),Cp=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,r){let n={},i=e.parseResult.value.$cstNode;if(!i)return;let o=e.textDocument.offsetAt(r.position),a=(0,AT.findDeclarationNodeAtOffset)(i,o,this.grammarConfig.nameRegexp);if(!a)return;let s=this.references.findDeclaration(a);if(!s)return;let u={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(s,u).forEach(l=>{let f=fw.TextEdit.replace(l.segment.range,r.newName),y=l.sourceUri.toString();n[y]?n[y].push(f):n[y]=[f]}),{changes:n}}prepareRename(e,r){return this.renameNodeRange(e,r.position)}renameNodeRange(e,r){let n=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(r);if(n&&i){let o=(0,AT.findDeclarationNodeAtOffset)(n,i,this.grammarConfig.nameRegexp);if(!o)return;if(this.references.findDeclaration(o)||this.isNameNode(o))return o.range}}isNameNode(e){return e?.element&&(0,pw.isNamed)(e.element)&&e===this.nameProvider.getNameNode(e.element)}};$u.DefaultRenameProvider=Cp});var CT=E(qu=>{"use strict";Object.defineProperty(qu,"__esModule",{value:!0});qu.AbstractTypeDefinitionProvider=void 0;var hw=Ke(),mw=et(),Ep=class{constructor(e){this.references=e.references.References}getTypeDefinition(e,r,n=hw.CancellationToken.None){let i=e.parseResult.value;if(i.$cstNode){let o=(0,mw.findDeclarationNodeAtOffset)(i.$cstNode,e.textDocument.offsetAt(r.position));if(o){let a=this.references.findDeclaration(o);if(a)return this.collectGoToTypeLocationLinks(a,n)}}}};qu.AbstractTypeDefinitionProvider=Ep});var Pp=E(tt=>{"use strict";var gw=tt&&tt.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),wt=tt&&tt.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&gw(e,t,r)};Object.defineProperty(tt,"__esModule",{value:!0});wt(tp(),tt);wt(Qf(),tt);wt(zv(),tt);wt(np(),tt);wt(Yv(),tt);wt(op(),tt);wt(Xv(),tt);wt(gu(),tt);wt(up(),tt);wt(lp(),tt);wt(Gf(),tt);wt(Qv(),tt);wt(_p(),tt);wt(Ap(),tt);wt(bp(),tt);wt(Au(),tt);wt(yp(),tt);wt(CT(),tt)});var bT=E(Fu=>{"use strict";Object.defineProperty(Fu,"__esModule",{value:!0});Fu.LangiumGrammarDefinitionProvider=void 0;var kp=Ke(),yw=Pp(),vw=Re(),Tw=Et(),_w=ze(),Rw=Lt(),Np=class extends yw.DefaultDefinitionProvider{constructor(e){super(e),this.documents=e.shared.workspace.LangiumDocuments}collectLocationLinks(e,r){var n,i,o,a,s,u;let c="path";if((0,_w.isGrammarImport)(e.element)&&((n=(0,Tw.findAssignment)(e))===null||n===void 0?void 0:n.feature)===c){let l=(0,Rw.resolveImport)(this.documents,e.element);if(l?.$document){let f=(i=this.findTargetObject(l))!==null&&i!==void 0?i:l,y=(a=(o=this.nameProvider.getNameNode(f))===null||o===void 0?void 0:o.range)!==null&&a!==void 0?a:kp.Range.create(0,0,0,0),_=(u=(s=f.$cstNode)===null||s===void 0?void 0:s.range)!==null&&u!==void 0?u:kp.Range.create(0,0,0,0);return[kp.LocationLink.create(l.$document.uri.toString(),_,y,e.range)]}return}return super.collectLocationLinks(e,r)}findTargetObject(e){return e.isDeclared?e:(0,vw.streamContents)(e).head()}};Fu.LangiumGrammarDefinitionProvider=Np});var PT=E(ju=>{"use strict";Object.defineProperty(ju,"__esModule",{value:!0});ju.AbstractCallHierarchyProvider=void 0;var Aw=Ke(),ET=Nn(),Sp=et(),wp=class{constructor(e){this.grammarConfig=e.parser.GrammarConfig,this.nameProvider=e.references.NameProvider,this.documents=e.shared.workspace.LangiumDocuments,this.references=e.references.References}prepareCallHierarchy(e,r){let n=e.parseResult.value,i=(0,Sp.findDeclarationNodeAtOffset)(n.$cstNode,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclarationNode(i);if(!!o)return this.getCallHierarchyItems(o.element,e)}getCallHierarchyItems(e,r){let n=this.nameProvider.getNameNode(e),i=this.nameProvider.getName(e);if(!(!n||!e.$cstNode||i===void 0))return[Object.assign({kind:Aw.SymbolKind.Method,name:i,range:e.$cstNode.range,selectionRange:n.range,uri:r.uri.toString()},this.getCallHierarchyItem(e))]}getCallHierarchyItem(e){}incomingCalls(e){let r=this.documents.getOrCreateDocument(ET.URI.parse(e.item.uri)),n=r.parseResult.value,i=(0,Sp.findDeclarationNodeAtOffset)(n.$cstNode,r.textDocument.offsetAt(e.item.range.start),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findReferences(i.element,{includeDeclaration:!1,onlyLocal:!1});return this.getIncomingCalls(i.element,o)}outgoingCalls(e){let r=this.documents.getOrCreateDocument(ET.URI.parse(e.item.uri)),n=r.parseResult.value,i=(0,Sp.findDeclarationNodeAtOffset)(n.$cstNode,r.textDocument.offsetAt(e.item.range.start),this.grammarConfig.nameRegexp);if(!!i)return this.getOutgoingCalls(i.element)}};ju.AbstractCallHierarchyProvider=wp});var NT=E(Uu=>{"use strict";Object.defineProperty(Uu,"__esModule",{value:!0});Uu.LangiumGrammarCallHierarchyProvider=void 0;var kT=Ke(),Cw=PT(),Dp=Re(),bw=et(),Gu=ze(),Op=class extends Cw.AbstractCallHierarchyProvider{getIncomingCalls(e,r){if(!(0,Gu.isParserRule)(e))return;let n=new Map;if(r.forEach(i=>{let a=this.documents.getOrCreateDocument(i.sourceUri).parseResult.value;if(!a.$cstNode)return;let s=(0,bw.findLeafNodeAtOffset)(a.$cstNode,i.segment.offset);if(!s)return;let u=(0,Dp.getContainerOfType)(s.element,Gu.isParserRule);if(!u||!u.$cstNode)return;let c=this.nameProvider.getNameNode(u);if(!c)return;let l=i.sourceUri.toString(),f=l+"@"+c.text;n.has(f)?n.set(f,{parserRule:u.$cstNode,nameNode:c,targetNodes:[...n.get(f).targetNodes,s],docUri:l}):n.set(f,{parserRule:u.$cstNode,nameNode:c,targetNodes:[s],docUri:l})}),n.size!==0)return Array.from(n.values()).map(i=>({from:{kind:kT.SymbolKind.Method,name:i.nameNode.text,range:i.parserRule.range,selectionRange:i.nameNode.range,uri:i.docUri},fromRanges:i.targetNodes.map(o=>o.range)}))}getOutgoingCalls(e){if(!(0,Gu.isParserRule)(e))return;let r=(0,Dp.streamAllContents)(e).filter(Gu.isRuleCall).toArray(),n=new Map;if(r.forEach(i=>{var o;let a=i.$cstNode;if(!a)return;let s=(o=i.rule.ref)===null||o===void 0?void 0:o.$cstNode;if(!s)return;let u=this.nameProvider.getNameNode(s.element);if(!u)return;let c=(0,Dp.getDocument)(s.element).uri.toString(),l=c+"@"+u.text;n.has(l)?n.set(l,{refCstNode:s,to:u,from:[...n.get(l).from,a.range],docUri:c}):n.set(l,{refCstNode:s,to:u,from:[a.range],docUri:c})}),n.size!==0)return Array.from(n.values()).map(i=>({to:{kind:kT.SymbolKind.Method,name:i.to.text,range:i.refCstNode.range,selectionRange:i.to.range,uri:i.docUri},fromRanges:i.from}))}};Uu.LangiumGrammarCallHierarchyProvider=Op});var Hu=E(Di=>{"use strict";Object.defineProperty(Di,"__esModule",{value:!0});Di.createLangiumGrammarServices=Di.LangiumGrammarModule=void 0;var ST=Wu(),wT=fa(),DT=by(),OT=tv(),xT=Of(),Ew=Pv(),Pw=kv(),kw=Sv(),Nw=wv(),Sw=Ov(),ww=Fv(),Dw=bT(),Ow=NT();Di.LangiumGrammarModule={validation:{ValidationRegistry:t=>new xT.LangiumGrammarValidationRegistry(t),LangiumGrammarValidator:t=>new xT.LangiumGrammarValidator(t)},lsp:{FoldingRangeProvider:t=>new Pw.LangiumGrammarFoldingRangeProvider(t),CodeActionProvider:()=>new Ew.LangiumGrammarCodeActionProvider,SemanticTokenProvider:t=>new Nw.LangiumGrammarSemanticTokenProvider(t),Formatter:()=>new kw.LangiumGrammarFormatter,DefinitionProvider:t=>new Dw.LangiumGrammarDefinitionProvider(t),CallHierarchyProvider:t=>new Ow.LangiumGrammarCallHierarchyProvider(t)},references:{ScopeComputation:t=>new OT.LangiumGrammarScopeComputation(t),ScopeProvider:t=>new OT.LangiumGrammarScopeProvider(t),References:t=>new ww.LangiumGrammarReferences(t),NameProvider:()=>new Sw.LangiumGrammarNameProvider}};function xw(t,e){let r=(0,wT.inject)((0,ST.createDefaultSharedModule)(t),DT.LangiumGrammarGeneratedSharedModule,e),n=(0,wT.inject)((0,ST.createDefaultModule)({shared:r}),DT.LangiumGrammarGeneratedModule,Di.LangiumGrammarModule);return r.ServiceRegistry.register(n),{shared:r,grammar:n}}Di.createLangiumGrammarServices=xw});var MT=E(Ku=>{"use strict";Object.defineProperty(Ku,"__esModule",{value:!0});Ku.collectAst=void 0;var IT=bt(),Iw=Cf(),Mw=vf(),Lw=ui();function $w(t,e){let r=(0,Lw.collectAllAstResources)(e,t),n=(0,Iw.collectInferredTypes)(Array.from(r.parserRules),Array.from(r.datatypeRules)),i=(0,Mw.collectDeclaredTypes)(Array.from(r.interfaces),Array.from(r.types),n),o=n.interfaces.concat(i.interfaces),a=n.unions.concat(i.unions);return qw(o),a.sort((s,u)=>s.name.localeCompare(u.name)),{interfaces:(0,IT.stream)(o).distinct(s=>s.name).toArray(),unions:(0,IT.stream)(a).distinct(s=>s.name).toArray()}}Ku.collectAst=$w;function qw(t){let e=t.sort((i,o)=>i.name.localeCompare(o.name)).map(i=>({value:i,nodes:[]}));for(let i of e)i.nodes=e.filter(o=>i.value.superTypes.has(o.value.name));let r=[],n=e.filter(i=>i.nodes.length===0);for(;n.length>0;){let i=n.shift();r.includes(i)||(r.push(i),e.filter(o=>o.nodes.includes(i)).forEach(o=>n.push(o)))}return r.map(i=>i.value)}});var Ip=E(Bu=>{"use strict";Object.defineProperty(Bu,"__esModule",{value:!0});Bu.interpretAstReflection=void 0;var Fw=Re(),jw=br(),Gw=Bs(),Uw=ze(),Hw=Hu(),Ww=MT(),Kw=ui(),xp;function Bw(t,e){let r;(0,Uw.isGrammar)(t)?(!xp&&!e&&(xp=(0,Hw.createLangiumGrammarServices)(Gw.EmptyFileSystem).shared.workspace.LangiumDocuments),r=(0,Ww.collectAst)(e??xp,[t])):r=t;let n=r.interfaces.map(s=>s.name).concat(r.unions.map(s=>s.name)),i=zw(r),o=Vw(r),a=Xw(r);return{getAllTypes(){return n},getReferenceType(s){let u=`${s.container.$type}:${s.property}`,c=i.get(u);if(c)return c;throw new Error("Could not find reference type for "+u)},getTypeMetaData(s){var u;return(u=o.get(s))!==null&&u!==void 0?u:{name:s,mandatory:[]}},isInstance(s,u){return(0,Fw.isAstNode)(s)&&this.isSubtype(s.$type,u)},isSubtype(s,u){if(s===u)return!0;let c=a.get(s);for(let l of c)if(this.isSubtype(l,u))return!0;return!1}}}Bu.interpretAstReflection=Bw;function zw(t){let e=new Map;for(let r of t.interfaces)for(let n of r.properties)for(let i of n.typeAlternatives)i.reference&&e.set(`${r.name}:${n.name}`,i.types[0]);return e}function Vw(t){let e=new Map,r=(0,Kw.collectAllProperties)(t.interfaces);for(let n of t.interfaces){let i=r.get(n.name),o=i.filter(s=>s.typeAlternatives.some(u=>u.array)),a=i.filter(s=>s.typeAlternatives.every(u=>!u.array&&u.types.includes("boolean")));(o.length>0||a.length>0)&&e.set(n.name,{name:n.name,mandatory:Yw(o,a)})}return e}function Yw(t,e){let r=[],n=t.concat(e).sort((i,o)=>i.name.localeCompare(o.name));for(let i of n){let o=t.includes(i)?"array":"boolean";r.push({name:i.name,type:o})}return r}function Xw(t){let e=new jw.MultiMap;for(let r of t.interfaces)e.addAll(r.name,r.superTypes);for(let r of t.unions)e.addAll(r.name,r.superTypes);return e}});var Et=E(ge=>{"use strict";var Jw=ge&&ge.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Qw=ge&&ge.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),Zw=ge&&ge.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&Jw(e,t,r);return Qw(e,t),e};Object.defineProperty(ge,"__esModule",{value:!0});ge.createServicesForGrammar=ge.loadGrammarFromJson=ge.findNameAssignment=ge.findAssignment=ge.findNodesForKeywordInternal=ge.findNodeForKeyword=ge.findNodesForKeyword=ge.findNodeForProperty=ge.findNodesForProperty=ge.isCommentTerminal=ge.getCrossReferenceTerminal=ge.getAllReachableRules=ge.getEntryRule=void 0;var LT=Wu(),$T=fa(),eD=Ip(),nr=Zw(ze()),Lp=Lt(),qT=Hu(),tD=oo(),ka=Re(),rD=et(),Mp=Bs();function FT(t){return t.rules.find(e=>nr.isParserRule(e)&&e.entry)}ge.getEntryRule=FT;function nD(t,e){let r=new Set,n=FT(t);if(!n)return new Set(t.rules);jT(n,r,e);let i=new Set;for(let o of t.rules)(r.has(o.name)||nr.isTerminalRule(o)&&o.hidden)&&i.add(o);return i}ge.getAllReachableRules=nD;function jT(t,e,r){e.add(t.name),(0,ka.streamAllContents)(t).forEach(n=>{if(nr.isRuleCall(n)||r&&nr.isTerminalRuleCall(n)){let i=n.rule.ref;i&&!e.has(i.name)&&jT(i,e,r)}})}function iD(t){if(t.terminal)return t.terminal;if(t.type.ref){let e=GT(t.type.ref);return e?.terminal}}ge.getCrossReferenceTerminal=iD;function oD(t){return t.hidden&&!" ".match((0,Lp.terminalRegex)(t))}ge.isCommentTerminal=oD;function aD(t,e){return!t||!e?[]:$p(t,e,t.element,!0)}ge.findNodesForProperty=aD;function sD(t,e,r){if(!t||!e)return;let n=$p(t,e,t.element,!0);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}ge.findNodeForProperty=sD;function $p(t,e,r,n){if(!n){let i=(0,ka.getContainerOfType)(t.feature,nr.isAssignment);if(i&&i.feature===e)return[t]}return(0,tD.isCompositeCstNode)(t)&&t.element===r?t.children.flatMap(i=>$p(i,e,r,!1)):[]}function uD(t,e){return t?qp(t,e,t?.element):[]}ge.findNodesForKeyword=uD;function cD(t,e,r){if(!t)return;let n=qp(t,e,t?.element);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}ge.findNodeForKeyword=cD;function qp(t,e,r){if(t.element!==r)return[];if(nr.isKeyword(t.feature)&&t.feature.value===e)return[t];let n=(0,rD.streamCst)(t).iterator(),i,o=[];do if(i=n.next(),!i.done){let a=i.value;a.element===r?nr.isKeyword(a.feature)&&a.feature.value===e&&o.push(a):n.prune()}while(!i.done);return o}ge.findNodesForKeywordInternal=qp;function lD(t){let e=t;do{let r=(0,ka.getContainerOfType)(e.feature,nr.isAssignment);if(r)return r;e=e.parent}while(e)}ge.findAssignment=lD;function GT(t){return nr.isInferredType(t)&&(t=t.$container),UT(t,new Map)}ge.findNameAssignment=GT;function UT(t,e){var r;function n(i,o){let a;return(0,ka.getContainerOfType)(i,nr.isAssignment)||(a=UT(o,e)),e.set(t,a),a}if(e.has(t))return e.get(t);e.set(t,void 0);for(let i of(0,ka.streamAllContents)(t)){if(nr.isAssignment(i)&&i.feature.toLowerCase()==="name")return e.set(t,i),i;if(nr.isRuleCall(i)&&nr.isParserRule(i.rule.ref))return n(i,i.rule.ref);if(nr.isAtomType(i)&&((r=i?.refType)===null||r===void 0?void 0:r.ref))return n(i,i.refType.ref)}}function dD(t){let e=(0,qT.createLangiumGrammarServices)(Mp.EmptyFileSystem).grammar,r=e.serializer.JsonSerializer.deserialize(t);if(!nr.isGrammar(r))throw new Error("Could not load grammar from specified json input.");return(0,Lp.prepareGrammar)(e,r)}ge.loadGrammarFromJson=dD;function fD(t){var e,r,n,i,o,a;let s=(e=t.grammarServices)!==null&&e!==void 0?e:(0,qT.createLangiumGrammarServices)(Mp.EmptyFileSystem).grammar,u=typeof t.grammar=="string"?s.parser.LangiumParser.parse(t.grammar).value:t.grammar;(0,Lp.prepareGrammar)(s,u);let c=(r=t.parserConfig)!==null&&r!==void 0?r:{skipValidations:!1},l=(n=t.languageMetaData)!==null&&n!==void 0?n:{caseInsensitive:!1,fileExtensions:[`.${(o=(i=u.name)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"unknown"}`],languageId:(a=u.name)!==null&&a!==void 0?a:"UNKNOWN"},f={AstReflection:()=>(0,eD.interpretAstReflection)(u)},y={Grammar:()=>u,LanguageMetaData:()=>l,parser:{ParserConfig:()=>c}},_=(0,$T.inject)((0,LT.createDefaultSharedModule)(Mp.EmptyFileSystem),f,t.sharedModule),h=(0,$T.inject)((0,LT.createDefaultModule)({shared:_}),y,t.module);return _.ServiceRegistry.register(h),h}ge.createServicesForGrammar=fD});var HT=E(zu=>{"use strict";Object.defineProperty(zu,"__esModule",{value:!0});zu.createGrammarConfig=void 0;var pD=et(),hD=Et(),mD=ho(),gD=ze(),yD=Lt();function vD(t){let e=[],r=t.Grammar;for(let n of r.rules)(0,gD.isTerminalRule)(n)&&(0,hD.isCommentTerminal)(n)&&(0,mD.isMultilineComment)((0,yD.terminalRegex)(n))&&e.push(n.name);return{multilineCommentRules:e,nameRegexp:pD.DefaultNameRegexp}}zu.createGrammarConfig=vD});var Fp=E(Vu=>{"use strict";Object.defineProperty(Vu,"__esModule",{value:!0});Vu.VERSION=void 0;Vu.VERSION="9.1.0"});var Ae=E((exports,module)=>{"use strict";var __spreadArray=exports&&exports.__spreadArray||function(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,o;n<i;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))};Object.defineProperty(exports,"__esModule",{value:!0});exports.toFastProperties=exports.timer=exports.peek=exports.isES2015MapSupported=exports.PRINT_WARNING=exports.PRINT_ERROR=exports.packArray=exports.IDENTITY=exports.NOOP=exports.merge=exports.groupBy=exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;exports.upperFirst=void 0;function isEmpty(t){return t&&t.length===0}exports.isEmpty=isEmpty;function keys(t){return t==null?[]:Object.keys(t)}exports.keys=keys;function values(t){for(var e=[],r=Object.keys(t),n=0;n<r.length;n++)e.push(t[r[n]]);return e}exports.values=values;function mapValues(t,e){for(var r=[],n=keys(t),i=0;i<n.length;i++){var o=n[i];r.push(e.call(null,t[o],o))}return r}exports.mapValues=mapValues;function map(t,e){for(var r=[],n=0;n<t.length;n++)r.push(e.call(null,t[n],n));return r}exports.map=map;function flatten(t){for(var e=[],r=0;r<t.length;r++){var n=t[r];Array.isArray(n)?e=e.concat(flatten(n)):e.push(n)}return e}exports.flatten=flatten;function first(t){return isEmpty(t)?void 0:t[0]}exports.first=first;function last(t){var e=t&&t.length;return e?t[e-1]:void 0}exports.last=last;function forEach(t,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)e.call(null,t[r],r);else if(isObject(t))for(var n=keys(t),r=0;r<n.length;r++){var i=n[r],o=t[i];e.call(null,o,i)}else throw Error("non exhaustive match")}exports.forEach=forEach;function isString(t){return typeof t=="string"}exports.isString=isString;function isUndefined(t){return t===void 0}exports.isUndefined=isUndefined;function isFunction(t){return t instanceof Function}exports.isFunction=isFunction;function drop(t,e){return e===void 0&&(e=1),t.slice(e,t.length)}exports.drop=drop;function dropRight(t,e){return e===void 0&&(e=1),t.slice(0,t.length-e)}exports.dropRight=dropRight;function filter(t,e){var r=[];if(Array.isArray(t))for(var n=0;n<t.length;n++){var i=t[n];e.call(null,i)&&r.push(i)}return r}exports.filter=filter;function reject(t,e){return filter(t,function(r){return!e(r)})}exports.reject=reject;function pick(t,e){for(var r=Object.keys(t),n={},i=0;i<r.length;i++){var o=r[i],a=t[o];e(a)&&(n[o]=a)}return n}exports.pick=pick;function has(t,e){return isObject(t)?t.hasOwnProperty(e):!1}exports.has=has;function contains(t,e){return find(t,function(r){return r===e})!==void 0}exports.contains=contains;function cloneArr(t){for(var e=[],r=0;r<t.length;r++)e.push(t[r]);return e}exports.cloneArr=cloneArr;function cloneObj(t){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}exports.cloneObj=cloneObj;function find(t,e){for(var r=0;r<t.length;r++){var n=t[r];if(e.call(null,n))return n}}exports.find=find;function findAll(t,e){for(var r=[],n=0;n<t.length;n++){var i=t[n];e.call(null,i)&&r.push(i)}return r}exports.findAll=findAll;function reduce(t,e,r){for(var n=Array.isArray(t),i=n?t:values(t),o=n?[]:keys(t),a=r,s=0;s<i.length;s++)a=e.call(null,a,i[s],n?s:o[s]);return a}exports.reduce=reduce;function compact(t){return reject(t,function(e){return e==null})}exports.compact=compact;function uniq(t,e){e===void 0&&(e=function(n){return n});var r=[];return reduce(t,function(n,i){var o=e(i);return contains(r,o)?n:(r.push(o),n.concat(i))},[])}exports.uniq=uniq;function partial(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=[null],i=n.concat(e);return Function.bind.apply(t,i)}exports.partial=partial;function isArray(t){return Array.isArray(t)}exports.isArray=isArray;function isRegExp(t){return t instanceof RegExp}exports.isRegExp=isRegExp;function isObject(t){return t instanceof Object}exports.isObject=isObject;function every(t,e){for(var r=0;r<t.length;r++)if(!e(t[r],r))return!1;return!0}exports.every=every;function difference(t,e){return reject(t,function(r){return contains(e,r)})}exports.difference=difference;function some(t,e){for(var r=0;r<t.length;r++)if(e(t[r]))return!0;return!1}exports.some=some;function indexOf(t,e){for(var r=0;r<t.length;r++)if(t[r]===e)return r;return-1}exports.indexOf=indexOf;function sortBy(t,e){var r=cloneArr(t);return r.sort(function(n,i){return e(n)-e(i)}),r}exports.sortBy=sortBy;function zipObject(t,e){if(t.length!==e.length)throw Error("can't zipObject with different number of keys and values!");for(var r={},n=0;n<t.length;n++)r[t[n]]=e[n];return r}exports.zipObject=zipObject;function assign(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=0;n<e.length;n++)for(var i=e[n],o=keys(i),a=0;a<o.length;a++){var s=o[a];t[s]=i[s]}return t}exports.assign=assign;function assignNoOverwrite(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=0;n<e.length;n++)for(var i=e[n],o=keys(i),a=0;a<o.length;a++){var s=o[a];has(t,s)||(t[s]=i[s])}return t}exports.assignNoOverwrite=assignNoOverwrite;function defaults(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return assignNoOverwrite.apply(void 0,__spreadArray([{}],t,!1))}exports.defaults=defaults;function groupBy(t,e){var r={};return forEach(t,function(n){var i=e(n),o=r[i];o?o.push(n):r[i]=[n]}),r}exports.groupBy=groupBy;function merge(t,e){for(var r=cloneObj(t),n=keys(e),i=0;i<n.length;i++){var o=n[i],a=e[o];r[o]=a}return r}exports.merge=merge;function NOOP(){}exports.NOOP=NOOP;function IDENTITY(t){return t}exports.IDENTITY=IDENTITY;function packArray(t){for(var e=[],r=0;r<t.length;r++){var n=t[r];e.push(n!==void 0?n:void 0)}return e}exports.packArray=packArray;function PRINT_ERROR(t){console&&console.error&&console.error("Error: "+t)}exports.PRINT_ERROR=PRINT_ERROR;function PRINT_WARNING(t){console&&console.warn&&console.warn("Warning: "+t)}exports.PRINT_WARNING=PRINT_WARNING;function isES2015MapSupported(){return typeof Map=="function"}exports.isES2015MapSupported=isES2015MapSupported;function peek(t){return t[t.length-1]}exports.peek=peek;function timer(t){var e=new Date().getTime(),r=t(),n=new Date().getTime(),i=n-e;return{time:i,value:r}}exports.timer=timer;function toFastProperties(toBecomeFast){function FakeConstructor(){}FakeConstructor.prototype=toBecomeFast;var fakeInstance=new FakeConstructor;function fakeAccess(){return typeof fakeInstance.bar}return fakeAccess(),fakeAccess(),toBecomeFast;eval(toBecomeFast)}exports.toFastProperties=toFastProperties;function upperFirst(t){if(!t)return t;var e=getCharacterFromCodePointAt(t,0);return e.toUpperCase()+t.substring(e.length)}exports.upperFirst=upperFirst;var surrogatePairPattern=/[\uD800-\uDBFF][\uDC00-\uDFFF]/;function getCharacterFromCodePointAt(t,e){var r=t.substring(e,e+1);return surrogatePairPattern.test(r)?r:t[e]}});var Xu=E(bo=>{"use strict";Object.defineProperty(bo,"__esModule",{value:!0});bo.clearRegExpParserCache=bo.getRegExpAst=void 0;var TD=ma(),Yu={},_D=new TD.RegExpParser;function RD(t){var e=t.toString();if(Yu.hasOwnProperty(e))return Yu[e];var r=_D.pattern(e);return Yu[e]=r,r}bo.getRegExpAst=RD;function AD(){Yu={}}bo.clearRegExpParserCache=AD});var VT=E(ur=>{"use strict";var CD=ur&&ur.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(ur,"__esModule",{value:!0});ur.canMatchCharCode=ur.firstCharOptimizedIndices=ur.getOptimizedStartCodesIndices=ur.failedOptimizationPrefixMsg=void 0;var KT=ma(),Sr=Ae(),BT=Xu(),jn=Gp(),zT="Complement Sets are not supported for first char optimization";ur.failedOptimizationPrefixMsg=`Unable to use "first char" lexer optimizations:
`;function bD(t,e){e===void 0&&(e=!1);try{var r=(0,BT.getRegExpAst)(t),n=Qu(r.value,{},r.flags.ignoreCase);return n}catch(o){if(o.message===zT)e&&(0,Sr.PRINT_WARNING)(""+ur.failedOptimizationPrefixMsg+("	Unable to optimize: < "+t.toString()+` >
`)+`	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{var i="";e&&(i=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),(0,Sr.PRINT_ERROR)(ur.failedOptimizationPrefixMsg+`
`+("	Failed parsing: < "+t.toString()+` >
`)+("	Using the regexp-to-ast library version: "+KT.VERSION+`
`)+"	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues"+i)}}return[]}ur.getOptimizedStartCodesIndices=bD;function Qu(t,e,r){switch(t.type){case"Disjunction":for(var n=0;n<t.value.length;n++)Qu(t.value[n],e,r);break;case"Alternative":for(var i=t.value,n=0;n<i.length;n++){var o=i[n];switch(o.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}var a=o;switch(a.type){case"Character":Ju(a.value,e,r);break;case"Set":if(a.complement===!0)throw Error(zT);(0,Sr.forEach)(a.value,function(c){if(typeof c=="number")Ju(c,e,r);else{var l=c;if(r===!0)for(var f=l.from;f<=l.to;f++)Ju(f,e,r);else{for(var f=l.from;f<=l.to&&f<jn.minOptimizationVal;f++)Ju(f,e,r);if(l.to>=jn.minOptimizationVal)for(var y=l.from>=jn.minOptimizationVal?l.from:jn.minOptimizationVal,_=l.to,h=(0,jn.charCodeToOptimizedIndex)(y),A=(0,jn.charCodeToOptimizedIndex)(_),w=h;w<=A;w++)e[w]=w}}});break;case"Group":Qu(a.value,e,r);break;default:throw Error("Non Exhaustive Match")}var s=a.quantifier!==void 0&&a.quantifier.atLeast===0;if(a.type==="Group"&&jp(a)===!1||a.type!=="Group"&&s===!1)break}break;default:throw Error("non exhaustive match!")}return(0,Sr.values)(e)}ur.firstCharOptimizedIndices=Qu;function Ju(t,e,r){var n=(0,jn.charCodeToOptimizedIndex)(t);e[n]=n,r===!0&&ED(t,e)}function ED(t,e){var r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){var i=(0,jn.charCodeToOptimizedIndex)(n.charCodeAt(0));e[i]=i}else{var o=r.toLowerCase();if(o!==r){var i=(0,jn.charCodeToOptimizedIndex)(o.charCodeAt(0));e[i]=i}}}function WT(t,e){return(0,Sr.find)(t.value,function(r){if(typeof r=="number")return(0,Sr.contains)(e,r);var n=r;return(0,Sr.find)(e,function(i){return n.from<=i&&i<=n.to})!==void 0})}function jp(t){return t.quantifier&&t.quantifier.atLeast===0?!0:t.value?(0,Sr.isArray)(t.value)?(0,Sr.every)(t.value,jp):jp(t.value):!1}var PD=function(t){CD(e,t);function e(r){var n=t.call(this)||this;return n.targetCharCodes=r,n.found=!1,n}return e.prototype.visitChildren=function(r){if(this.found!==!0){switch(r.type){case"Lookahead":this.visitLookahead(r);return;case"NegativeLookahead":this.visitNegativeLookahead(r);return}t.prototype.visitChildren.call(this,r)}},e.prototype.visitCharacter=function(r){(0,Sr.contains)(this.targetCharCodes,r.value)&&(this.found=!0)},e.prototype.visitSet=function(r){r.complement?WT(r,this.targetCharCodes)===void 0&&(this.found=!0):WT(r,this.targetCharCodes)!==void 0&&(this.found=!0)},e}(KT.BaseRegExpVisitor);function kD(t,e){if(e instanceof RegExp){var r=(0,BT.getRegExpAst)(e),n=new PD(t);return n.visit(r),n.found}else return(0,Sr.find)(e,function(i){return(0,Sr.contains)(t,i.charCodeAt(0))})!==void 0}ur.canMatchCharCode=kD});var Gp=E(W=>{"use strict";var YT=W&&W.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(W,"__esModule",{value:!0});W.charCodeToOptimizedIndex=W.minOptimizationVal=W.buildLineBreakIssueMessage=W.LineTerminatorOptimizedTester=W.isShortPattern=W.isCustomPattern=W.cloneEmptyGroups=W.performWarningRuntimeChecks=W.performRuntimeChecks=W.addStickyFlag=W.addStartOfInput=W.findUnreachablePatterns=W.findModesThatDoNotExist=W.findInvalidGroupType=W.findDuplicatePatterns=W.findUnsupportedFlags=W.findStartOfInputAnchor=W.findEmptyMatchRegExps=W.findEndOfInputAnchor=W.findInvalidPatterns=W.findMissingPatterns=W.validatePatterns=W.analyzeTokenTypes=W.enableSticky=W.disableSticky=W.SUPPORT_STICKY=W.MODES=W.DEFAULT_MODE=void 0;var XT=ma(),Me=Na(),M=Ae(),Eo=VT(),JT=Xu(),gn="PATTERN";W.DEFAULT_MODE="defaultMode";W.MODES="modes";W.SUPPORT_STICKY=typeof new RegExp("(?:)").sticky=="boolean";function ND(){W.SUPPORT_STICKY=!1}W.disableSticky=ND;function SD(){W.SUPPORT_STICKY=!0}W.enableSticky=SD;function wD(t,e){e=(0,M.defaults)(e,{useSticky:W.SUPPORT_STICKY,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:function(R,T){return T()}});var r=e.tracer;r("initCharCodeToOptimizedIndexMap",function(){jD()});var n;r("Reject Lexer.NA",function(){n=(0,M.reject)(t,function(R){return R[gn]===Me.Lexer.NA})});var i=!1,o;r("Transform Patterns",function(){i=!1,o=(0,M.map)(n,function(R){var T=R[gn];if((0,M.isRegExp)(T)){var D=T.source;return D.length===1&&D!=="^"&&D!=="$"&&D!=="."&&!T.ignoreCase?D:D.length===2&&D[0]==="\\"&&!(0,M.contains)(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],D[1])?D[1]:e.useSticky?Wp(T):Hp(T)}else{if((0,M.isFunction)(T))return i=!0,{exec:T};if((0,M.has)(T,"exec"))return i=!0,T;if(typeof T=="string"){if(T.length===1)return T;var B=T.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),V=new RegExp(B);return e.useSticky?Wp(V):Hp(V)}else throw Error("non exhaustive match")}})});var a,s,u,c,l;r("misc mapping",function(){a=(0,M.map)(n,function(R){return R.tokenTypeIdx}),s=(0,M.map)(n,function(R){var T=R.GROUP;if(T!==Me.Lexer.SKIPPED){if((0,M.isString)(T))return T;if((0,M.isUndefined)(T))return!1;throw Error("non exhaustive match")}}),u=(0,M.map)(n,function(R){var T=R.LONGER_ALT;if(T){var D=(0,M.isArray)(T)?(0,M.map)(T,function(B){return(0,M.indexOf)(n,B)}):[(0,M.indexOf)(n,T)];return D}}),c=(0,M.map)(n,function(R){return R.PUSH_MODE}),l=(0,M.map)(n,function(R){return(0,M.has)(R,"POP_MODE")})});var f;r("Line Terminator Handling",function(){var R=d_(e.lineTerminatorCharacters);f=(0,M.map)(n,function(T){return!1}),e.positionTracking!=="onlyOffset"&&(f=(0,M.map)(n,function(T){if((0,M.has)(T,"LINE_BREAKS"))return T.LINE_BREAKS;if(c_(T,R)===!1)return(0,Eo.canMatchCharCode)(R,T.PATTERN)}))});var y,_,h,A;r("Misc Mapping #2",function(){y=(0,M.map)(n,Bp),_=(0,M.map)(o,u_),h=(0,M.reduce)(n,function(R,T){var D=T.GROUP;return(0,M.isString)(D)&&D!==Me.Lexer.SKIPPED&&(R[D]=[]),R},{}),A=(0,M.map)(o,function(R,T){return{pattern:o[T],longerAlt:u[T],canLineTerminator:f[T],isCustom:y[T],short:_[T],group:s[T],push:c[T],pop:l[T],tokenTypeIdx:a[T],tokenType:n[T]}})});var w=!0,k=[];return e.safeMode||r("First Char Optimization",function(){k=(0,M.reduce)(n,function(R,T,D){if(typeof T.PATTERN=="string"){var B=T.PATTERN.charCodeAt(0),V=Kp(B);Up(R,V,A[D])}else if((0,M.isArray)(T.START_CHARS_HINT)){var G;(0,M.forEach)(T.START_CHARS_HINT,function(Fe){var Qe=typeof Fe=="string"?Fe.charCodeAt(0):Fe,je=Kp(Qe);G!==je&&(G=je,Up(R,je,A[D]))})}else if((0,M.isRegExp)(T.PATTERN))if(T.PATTERN.unicode)w=!1,e.ensureOptimizations&&(0,M.PRINT_ERROR)(""+Eo.failedOptimizationPrefixMsg+("	Unable to analyze < "+T.PATTERN.toString()+` > pattern.
`)+`	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{var ve=(0,Eo.getOptimizedStartCodesIndices)(T.PATTERN,e.ensureOptimizations);(0,M.isEmpty)(ve)&&(w=!1),(0,M.forEach)(ve,function(Fe){Up(R,Fe,A[D])})}else e.ensureOptimizations&&(0,M.PRINT_ERROR)(""+Eo.failedOptimizationPrefixMsg+("	TokenType: <"+T.name+`> is using a custom token pattern without providing <start_chars_hint> parameter.
`)+`	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),w=!1;return R},[])}),r("ArrayPacking",function(){k=(0,M.packArray)(k)}),{emptyGroups:h,patternIdxToConfig:A,charCodeToPatternIdxToConfig:k,hasCustom:i,canBeOptimized:w}}W.analyzeTokenTypes=wD;function DD(t,e){var r=[],n=QT(t);r=r.concat(n.errors);var i=ZT(n.valid),o=i.valid;return r=r.concat(i.errors),r=r.concat(OD(o)),r=r.concat(o_(o)),r=r.concat(a_(o,e)),r=r.concat(s_(o)),r}W.validatePatterns=DD;function OD(t){var e=[],r=(0,M.filter)(t,function(n){return(0,M.isRegExp)(n[gn])});return e=e.concat(e_(r)),e=e.concat(r_(r)),e=e.concat(n_(r)),e=e.concat(i_(r)),e=e.concat(t_(r)),e}function QT(t){var e=(0,M.filter)(t,function(i){return!(0,M.has)(i,gn)}),r=(0,M.map)(e,function(i){return{message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:Me.LexerDefinitionErrorType.MISSING_PATTERN,tokenTypes:[i]}}),n=(0,M.difference)(t,e);return{errors:r,valid:n}}W.findMissingPatterns=QT;function ZT(t){var e=(0,M.filter)(t,function(i){var o=i[gn];return!(0,M.isRegExp)(o)&&!(0,M.isFunction)(o)&&!(0,M.has)(o,"exec")&&!(0,M.isString)(o)}),r=(0,M.map)(e,function(i){return{message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:Me.LexerDefinitionErrorType.INVALID_PATTERN,tokenTypes:[i]}}),n=(0,M.difference)(t,e);return{errors:r,valid:n}}W.findInvalidPatterns=ZT;var xD=/[^\\][\$]/;function e_(t){var e=function(i){YT(o,i);function o(){var a=i!==null&&i.apply(this,arguments)||this;return a.found=!1,a}return o.prototype.visitEndAnchor=function(a){this.found=!0},o}(XT.BaseRegExpVisitor),r=(0,M.filter)(t,function(i){var o=i[gn];try{var a=(0,JT.getRegExpAst)(o),s=new e;return s.visit(a),s.found}catch{return xD.test(o.source)}}),n=(0,M.map)(r,function(i){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Me.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,tokenTypes:[i]}});return n}W.findEndOfInputAnchor=e_;function t_(t){var e=(0,M.filter)(t,function(n){var i=n[gn];return i.test("")}),r=(0,M.map)(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:Me.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,tokenTypes:[n]}});return r}W.findEmptyMatchRegExps=t_;var ID=/[^\\[][\^]|^\^/;function r_(t){var e=function(i){YT(o,i);function o(){var a=i!==null&&i.apply(this,arguments)||this;return a.found=!1,a}return o.prototype.visitStartAnchor=function(a){this.found=!0},o}(XT.BaseRegExpVisitor),r=(0,M.filter)(t,function(i){var o=i[gn];try{var a=(0,JT.getRegExpAst)(o),s=new e;return s.visit(a),s.found}catch{return ID.test(o.source)}}),n=(0,M.map)(r,function(i){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Me.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,tokenTypes:[i]}});return n}W.findStartOfInputAnchor=r_;function n_(t){var e=(0,M.filter)(t,function(n){var i=n[gn];return i instanceof RegExp&&(i.multiline||i.global)}),r=(0,M.map)(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:Me.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}});return r}W.findUnsupportedFlags=n_;function i_(t){var e=[],r=(0,M.map)(t,function(o){return(0,M.reduce)(t,function(a,s){return o.PATTERN.source===s.PATTERN.source&&!(0,M.contains)(e,s)&&s.PATTERN!==Me.Lexer.NA&&(e.push(s),a.push(s)),a},[])});r=(0,M.compact)(r);var n=(0,M.filter)(r,function(o){return o.length>1}),i=(0,M.map)(n,function(o){var a=(0,M.map)(o,function(u){return u.name}),s=(0,M.first)(o).PATTERN;return{message:"The same RegExp pattern ->"+s+"<-"+("has been used in all of the following Token Types: "+a.join(", ")+" <-"),type:Me.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,tokenTypes:o}});return i}W.findDuplicatePatterns=i_;function o_(t){var e=(0,M.filter)(t,function(n){if(!(0,M.has)(n,"GROUP"))return!1;var i=n.GROUP;return i!==Me.Lexer.SKIPPED&&i!==Me.Lexer.NA&&!(0,M.isString)(i)}),r=(0,M.map)(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:Me.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}});return r}W.findInvalidGroupType=o_;function a_(t,e){var r=(0,M.filter)(t,function(i){return i.PUSH_MODE!==void 0&&!(0,M.contains)(e,i.PUSH_MODE)}),n=(0,M.map)(r,function(i){var o="Token Type: ->"+i.name+"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->"+i.PUSH_MODE+"<-which does not exist";return{message:o,type:Me.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}});return n}W.findModesThatDoNotExist=a_;function s_(t){var e=[],r=(0,M.reduce)(t,function(n,i,o){var a=i.PATTERN;return a===Me.Lexer.NA||((0,M.isString)(a)?n.push({str:a,idx:o,tokenType:i}):(0,M.isRegExp)(a)&&LD(a)&&n.push({str:a.source,idx:o,tokenType:i})),n},[]);return(0,M.forEach)(t,function(n,i){(0,M.forEach)(r,function(o){var a=o.str,s=o.idx,u=o.tokenType;if(i<s&&MD(a,n.PATTERN)){var c="Token: ->"+u.name+`<- can never be matched.
`+("Because it appears AFTER the Token Type ->"+n.name+"<-")+`in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:c,type:Me.LexerDefinitionErrorType.UNREACHABLE_PATTERN,tokenTypes:[n,u]})}})}),e}W.findUnreachablePatterns=s_;function MD(t,e){if((0,M.isRegExp)(e)){var r=e.exec(t);return r!==null&&r.index===0}else{if((0,M.isFunction)(e))return e(t,0,[],{});if((0,M.has)(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function LD(t){var e=[".","\\","[","]","|","^","$","(",")","?","*","+","{"];return(0,M.find)(e,function(r){return t.source.indexOf(r)!==-1})===void 0}function Hp(t){var e=t.ignoreCase?"i":"";return new RegExp("^(?:"+t.source+")",e)}W.addStartOfInput=Hp;function Wp(t){var e=t.ignoreCase?"iy":"y";return new RegExp(""+t.source,e)}W.addStickyFlag=Wp;function $D(t,e,r){var n=[];return(0,M.has)(t,W.DEFAULT_MODE)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+W.DEFAULT_MODE+`> property in its definition
`,type:Me.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),(0,M.has)(t,W.MODES)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+W.MODES+`> property in its definition
`,type:Me.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),(0,M.has)(t,W.MODES)&&(0,M.has)(t,W.DEFAULT_MODE)&&!(0,M.has)(t.modes,t.defaultMode)&&n.push({message:"A MultiMode Lexer cannot be initialized with a "+W.DEFAULT_MODE+": <"+t.defaultMode+`>which does not exist
`,type:Me.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),(0,M.has)(t,W.MODES)&&(0,M.forEach)(t.modes,function(i,o){(0,M.forEach)(i,function(a,s){(0,M.isUndefined)(a)&&n.push({message:"A Lexer cannot be initialized using an undefined Token Type. Mode:"+("<"+o+"> at index: <"+s+`>
`),type:Me.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED})})}),n}W.performRuntimeChecks=$D;function qD(t,e,r){var n=[],i=!1,o=(0,M.compact)((0,M.flatten)((0,M.mapValues)(t.modes,function(u){return u}))),a=(0,M.reject)(o,function(u){return u[gn]===Me.Lexer.NA}),s=d_(r);return e&&(0,M.forEach)(a,function(u){var c=c_(u,s);if(c!==!1){var l=l_(u,c),f={message:l,type:c.issue,tokenType:u};n.push(f)}else(0,M.has)(u,"LINE_BREAKS")?u.LINE_BREAKS===!0&&(i=!0):(0,Eo.canMatchCharCode)(s,u.PATTERN)&&(i=!0)}),e&&!i&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:Me.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS}),n}W.performWarningRuntimeChecks=qD;function FD(t){var e={},r=(0,M.keys)(t);return(0,M.forEach)(r,function(n){var i=t[n];if((0,M.isArray)(i))e[n]=[];else throw Error("non exhaustive match")}),e}W.cloneEmptyGroups=FD;function Bp(t){var e=t.PATTERN;if((0,M.isRegExp)(e))return!1;if((0,M.isFunction)(e))return!0;if((0,M.has)(e,"exec"))return!0;if((0,M.isString)(e))return!1;throw Error("non exhaustive match")}W.isCustomPattern=Bp;function u_(t){return(0,M.isString)(t)&&t.length===1?t.charCodeAt(0):!1}W.isShortPattern=u_;W.LineTerminatorOptimizedTester={test:function(t){for(var e=t.length,r=this.lastIndex;r<e;r++){var n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function c_(t,e){if((0,M.has)(t,"LINE_BREAKS"))return!1;if((0,M.isRegExp)(t.PATTERN)){try{(0,Eo.canMatchCharCode)(e,t.PATTERN)}catch(r){return{issue:Me.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if((0,M.isString)(t.PATTERN))return!1;if(Bp(t))return{issue:Me.LexerDefinitionErrorType.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function l_(t,e){if(e.issue===Me.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
`+("	The problem is in the <"+t.name+`> Token Type
`)+("	 Root cause: "+e.errMsg+`.
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";if(e.issue===Me.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
`+("	The problem is in the <"+t.name+`> Token Type
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";throw Error("non exhaustive match")}W.buildLineBreakIssueMessage=l_;function d_(t){var e=(0,M.map)(t,function(r){return(0,M.isString)(r)&&r.length>0?r.charCodeAt(0):r});return e}function Up(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}W.minOptimizationVal=256;var Zu=[];function Kp(t){return t<W.minOptimizationVal?t:Zu[t]}W.charCodeToOptimizedIndex=Kp;function jD(){if((0,M.isEmpty)(Zu)){Zu=new Array(65536);for(var t=0;t<65536;t++)Zu[t]=t>255?255+~~(t/255):t}}});var Po=E(ce=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});ce.isTokenType=ce.hasExtendingTokensTypesMapProperty=ce.hasExtendingTokensTypesProperty=ce.hasCategoriesProperty=ce.hasShortKeyProperty=ce.singleAssignCategoriesToksMap=ce.assignCategoriesMapProp=ce.assignCategoriesTokensProp=ce.assignTokenDefaultProps=ce.expandCategories=ce.augmentTokenTypes=ce.tokenIdxToClass=ce.tokenShortNameIdx=ce.tokenStructuredMatcherNoCategories=ce.tokenStructuredMatcher=void 0;var Rt=Ae();function GD(t,e){var r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}ce.tokenStructuredMatcher=GD;function UD(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}ce.tokenStructuredMatcherNoCategories=UD;ce.tokenShortNameIdx=1;ce.tokenIdxToClass={};function HD(t){var e=f_(t);p_(e),m_(e),h_(e),(0,Rt.forEach)(e,function(r){r.isParent=r.categoryMatches.length>0})}ce.augmentTokenTypes=HD;function f_(t){for(var e=(0,Rt.cloneArr)(t),r=t,n=!0;n;){r=(0,Rt.compact)((0,Rt.flatten)((0,Rt.map)(r,function(o){return o.CATEGORIES})));var i=(0,Rt.difference)(r,e);e=e.concat(i),(0,Rt.isEmpty)(i)?n=!1:r=i}return e}ce.expandCategories=f_;function p_(t){(0,Rt.forEach)(t,function(e){g_(e)||(ce.tokenIdxToClass[ce.tokenShortNameIdx]=e,e.tokenTypeIdx=ce.tokenShortNameIdx++),zp(e)&&!(0,Rt.isArray)(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),zp(e)||(e.CATEGORIES=[]),y_(e)||(e.categoryMatches=[]),v_(e)||(e.categoryMatchesMap={})})}ce.assignTokenDefaultProps=p_;function h_(t){(0,Rt.forEach)(t,function(e){e.categoryMatches=[],(0,Rt.forEach)(e.categoryMatchesMap,function(r,n){e.categoryMatches.push(ce.tokenIdxToClass[n].tokenTypeIdx)})})}ce.assignCategoriesTokensProp=h_;function m_(t){(0,Rt.forEach)(t,function(e){Vp([],e)})}ce.assignCategoriesMapProp=m_;function Vp(t,e){(0,Rt.forEach)(t,function(r){e.categoryMatchesMap[r.tokenTypeIdx]=!0}),(0,Rt.forEach)(e.CATEGORIES,function(r){var n=t.concat(e);(0,Rt.contains)(n,r)||Vp(n,r)})}ce.singleAssignCategoriesToksMap=Vp;function g_(t){return(0,Rt.has)(t,"tokenTypeIdx")}ce.hasShortKeyProperty=g_;function zp(t){return(0,Rt.has)(t,"CATEGORIES")}ce.hasCategoriesProperty=zp;function y_(t){return(0,Rt.has)(t,"categoryMatches")}ce.hasExtendingTokensTypesProperty=y_;function v_(t){return(0,Rt.has)(t,"categoryMatchesMap")}ce.hasExtendingTokensTypesMapProperty=v_;function WD(t){return(0,Rt.has)(t,"tokenTypeIdx")}ce.isTokenType=WD});var Yp=E(ec=>{"use strict";Object.defineProperty(ec,"__esModule",{value:!0});ec.defaultLexerErrorProvider=void 0;ec.defaultLexerErrorProvider={buildUnableToPopLexerModeMessage:function(t){return"Unable to pop Lexer Mode after encountering Token ->"+t.image+"<- The Mode Stack is empty"},buildUnexpectedCharactersMessage:function(t,e,r,n,i){return"unexpected character: ->"+t.charAt(e)+"<- at offset: "+e+","+(" skipped "+r+" characters.")}}});var Na=E(Oi=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});Oi.Lexer=Oi.LexerDefinitionErrorType=void 0;var Xr=Gp(),Le=Ae(),KD=Po(),BD=Yp(),zD=Xu(),VD;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK"})(VD=Oi.LexerDefinitionErrorType||(Oi.LexerDefinitionErrorType={}));var Sa={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:BD.defaultLexerErrorProvider,traceInitPerf:!1,skipValidations:!1};Object.freeze(Sa);var YD=function(){function t(e,r){var n=this;if(r===void 0&&(r=Sa),this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.config=void 0,this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=(0,Le.merge)(Sa,r);var i=this.config.traceInitPerf;i===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof i=="number"&&(this.traceInitMaxIdent=i,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",function(){var o,a=!0;n.TRACE_INIT("Lexer Config handling",function(){if(n.config.lineTerminatorsPattern===Sa.lineTerminatorsPattern)n.config.lineTerminatorsPattern=Xr.LineTerminatorOptimizedTester;else if(n.config.lineTerminatorCharacters===Sa.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');n.trackStartLines=/full|onlyStart/i.test(n.config.positionTracking),n.trackEndLines=/full/i.test(n.config.positionTracking),(0,Le.isArray)(e)?(o={modes:{}},o.modes[Xr.DEFAULT_MODE]=(0,Le.cloneArr)(e),o[Xr.DEFAULT_MODE]=Xr.DEFAULT_MODE):(a=!1,o=(0,Le.cloneObj)(e))}),n.config.skipValidations===!1&&(n.TRACE_INIT("performRuntimeChecks",function(){n.lexerDefinitionErrors=n.lexerDefinitionErrors.concat((0,Xr.performRuntimeChecks)(o,n.trackStartLines,n.config.lineTerminatorCharacters))}),n.TRACE_INIT("performWarningRuntimeChecks",function(){n.lexerDefinitionWarning=n.lexerDefinitionWarning.concat((0,Xr.performWarningRuntimeChecks)(o,n.trackStartLines,n.config.lineTerminatorCharacters))})),o.modes=o.modes?o.modes:{},(0,Le.forEach)(o.modes,function(l,f){o.modes[f]=(0,Le.reject)(l,function(y){return(0,Le.isUndefined)(y)})});var s=(0,Le.keys)(o.modes);if((0,Le.forEach)(o.modes,function(l,f){n.TRACE_INIT("Mode: <"+f+"> processing",function(){if(n.modes.push(f),n.config.skipValidations===!1&&n.TRACE_INIT("validatePatterns",function(){n.lexerDefinitionErrors=n.lexerDefinitionErrors.concat((0,Xr.validatePatterns)(l,s))}),(0,Le.isEmpty)(n.lexerDefinitionErrors)){(0,KD.augmentTokenTypes)(l);var y;n.TRACE_INIT("analyzeTokenTypes",function(){y=(0,Xr.analyzeTokenTypes)(l,{lineTerminatorCharacters:n.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:n.TRACE_INIT.bind(n)})}),n.patternIdxToConfig[f]=y.patternIdxToConfig,n.charCodeToPatternIdxToConfig[f]=y.charCodeToPatternIdxToConfig,n.emptyGroups=(0,Le.merge)(n.emptyGroups,y.emptyGroups),n.hasCustom=y.hasCustom||n.hasCustom,n.canModeBeOptimized[f]=y.canBeOptimized}})}),n.defaultMode=o.defaultMode,!(0,Le.isEmpty)(n.lexerDefinitionErrors)&&!n.config.deferDefinitionErrorsHandling){var u=(0,Le.map)(n.lexerDefinitionErrors,function(l){return l.message}),c=u.join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+c)}(0,Le.forEach)(n.lexerDefinitionWarning,function(l){(0,Le.PRINT_WARNING)(l.message)}),n.TRACE_INIT("Choosing sub-methods implementations",function(){if(Xr.SUPPORT_STICKY?(n.chopInput=Le.IDENTITY,n.match=n.matchWithTest):(n.updateLastIndex=Le.NOOP,n.match=n.matchWithExec),a&&(n.handleModes=Le.NOOP),n.trackStartLines===!1&&(n.computeNewColumn=Le.IDENTITY),n.trackEndLines===!1&&(n.updateTokenEndLineColumnLocation=Le.NOOP),/full/i.test(n.config.positionTracking))n.createTokenInstance=n.createFullToken;else if(/onlyStart/i.test(n.config.positionTracking))n.createTokenInstance=n.createStartOnlyToken;else if(/onlyOffset/i.test(n.config.positionTracking))n.createTokenInstance=n.createOffsetOnlyToken;else throw Error('Invalid <positionTracking> config option: "'+n.config.positionTracking+'"');n.hasCustom?(n.addToken=n.addTokenUsingPush,n.handlePayload=n.handlePayloadWithCustom):(n.addToken=n.addTokenUsingMemberAccess,n.handlePayload=n.handlePayloadNoCustom)}),n.TRACE_INIT("Failed Optimization Warnings",function(){var l=(0,Le.reduce)(n.canModeBeOptimized,function(f,y,_){return y===!1&&f.push(_),f},[]);if(r.ensureOptimizations&&!(0,Le.isEmpty)(l))throw Error("Lexer Modes: < "+l.join(", ")+` > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),n.TRACE_INIT("clearRegExpParserCache",function(){(0,zD.clearRegExpParserCache)()}),n.TRACE_INIT("toFastProperties",function(){(0,Le.toFastProperties)(n)})})}return t.prototype.tokenize=function(e,r){if(r===void 0&&(r=this.defaultMode),!(0,Le.isEmpty)(this.lexerDefinitionErrors)){var n=(0,Le.map)(this.lexerDefinitionErrors,function(a){return a.message}),i=n.join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}var o=this.tokenizeInternal(e,r);return o},t.prototype.tokenizeInternal=function(e,r){var n=this,i,o,a,s,u,c,l,f,y,_,h,A,w,k,R,T,D=e,B=D.length,V=0,G=0,ve=this.hasCustom?0:Math.floor(e.length/10),Fe=new Array(ve),Qe=[],je=this.trackStartLines?1:void 0,$=this.trackStartLines?1:void 0,L=(0,Xr.cloneEmptyGroups)(this.emptyGroups),q=this.trackStartLines,K=this.config.lineTerminatorsPattern,he=0,ee=[],ie=[],Ce=[],Ge=[];Object.freeze(Ge);var dt=void 0;function or(){return ee}function pr(st){var nn=(0,Xr.charCodeToOptimizedIndex)(st),Tr=ie[nn];return Tr===void 0?Ge:Tr}var $i=function(st){if(Ce.length===1&&st.tokenType.PUSH_MODE===void 0){var nn=n.config.errorMessageProvider.buildUnableToPopLexerModeMessage(st);Qe.push({offset:st.startOffset,line:st.startLine!==void 0?st.startLine:void 0,column:st.startColumn!==void 0?st.startColumn:void 0,length:st.image.length,message:nn})}else{Ce.pop();var Tr=(0,Le.last)(Ce);ee=n.patternIdxToConfig[Tr],ie=n.charCodeToPatternIdxToConfig[Tr],he=ee.length;var Ui=n.canModeBeOptimized[Tr]&&n.config.safeMode===!1;ie&&Ui?dt=pr:dt=or}};function qi(st){Ce.push(st),ie=this.charCodeToPatternIdxToConfig[st],ee=this.patternIdxToConfig[st],he=ee.length,he=ee.length;var nn=this.canModeBeOptimized[st]&&this.config.safeMode===!1;ie&&nn?dt=pr:dt=or}qi.call(this,r);for(var Jt;V<B;){c=null;var Fi=D.charCodeAt(V),ji=dt(Fi),Uo=ji.length;for(i=0;i<Uo;i++){Jt=ji[i];var yr=Jt.pattern;l=null;var kt=Jt.short;if(kt!==!1?Fi===kt&&(c=yr):Jt.isCustom===!0?(T=yr.exec(D,V,Fe,L),T!==null?(c=T[0],T.payload!==void 0&&(l=T.payload)):c=null):(this.updateLastIndex(yr,V),c=this.match(yr,e,V)),c!==null){if(u=Jt.longerAlt,u!==void 0){var Ho=u.length;for(a=0;a<Ho;a++){var gi=ee[u[a]],tn=gi.pattern;if(f=null,gi.isCustom===!0?(T=tn.exec(D,V,Fe,L),T!==null?(s=T[0],T.payload!==void 0&&(f=T.payload)):s=null):(this.updateLastIndex(tn,V),s=this.match(tn,e,V)),s&&s.length>c.length){c=s,l=f,Jt=gi;break}}}break}}if(c!==null){if(y=c.length,_=Jt.group,_!==void 0&&(h=Jt.tokenTypeIdx,A=this.createTokenInstance(c,V,h,Jt.tokenType,je,$,y),this.handlePayload(A,l),_===!1?G=this.addToken(Fe,G,A):L[_].push(A)),e=this.chopInput(e,y),V=V+y,$=this.computeNewColumn($,y),q===!0&&Jt.canLineTerminator===!0){var Yn=0,bn=void 0,yi=void 0;K.lastIndex=0;do bn=K.test(c),bn===!0&&(yi=K.lastIndex-1,Yn++);while(bn===!0);Yn!==0&&(je=je+Yn,$=y-yi,this.updateTokenEndLineColumnLocation(A,_,yi,Yn,je,$,y))}this.handleModes(Jt,$i,qi,A)}else{for(var vr=V,rn=je,Gi=$,En=!1;!En&&V<B;)for(k=D.charCodeAt(V),e=this.chopInput(e,1),V++,o=0;o<he;o++){var Ir=ee[o],yr=Ir.pattern,kt=Ir.short;if(kt!==!1?D.charCodeAt(V)===kt&&(En=!0):Ir.isCustom===!0?En=yr.exec(D,V,Fe,L)!==null:(this.updateLastIndex(yr,V),En=yr.exec(e)!==null),En===!0)break}w=V-vr,R=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(D,vr,w,rn,Gi),Qe.push({offset:vr,line:rn,column:Gi,length:w,message:R})}}return this.hasCustom||(Fe.length=G),{tokens:Fe,groups:L,errors:Qe}},t.prototype.handleModes=function(e,r,n,i){if(e.pop===!0){var o=e.push;r(i),o!==void 0&&n.call(this,o)}else e.push!==void 0&&n.call(this,e.push)},t.prototype.chopInput=function(e,r){return e.substring(r)},t.prototype.updateLastIndex=function(e,r){e.lastIndex=r},t.prototype.updateTokenEndLineColumnLocation=function(e,r,n,i,o,a,s){var u,c;r!==void 0&&(u=n===s-1,c=u?-1:0,i===1&&u===!0||(e.endLine=o+c,e.endColumn=a-1+-c))},t.prototype.computeNewColumn=function(e,r){return e+r},t.prototype.createTokenInstance=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return null},t.prototype.createOffsetOnlyToken=function(e,r,n,i){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:i}},t.prototype.createStartOnlyToken=function(e,r,n,i,o,a){return{image:e,startOffset:r,startLine:o,startColumn:a,tokenTypeIdx:n,tokenType:i}},t.prototype.createFullToken=function(e,r,n,i,o,a,s){return{image:e,startOffset:r,endOffset:r+s-1,startLine:o,endLine:o,startColumn:a,endColumn:a+s-1,tokenTypeIdx:n,tokenType:i}},t.prototype.addToken=function(e,r,n){return 666},t.prototype.addTokenUsingPush=function(e,r,n){return e.push(n),r},t.prototype.addTokenUsingMemberAccess=function(e,r,n){return e[r]=n,r++,r},t.prototype.handlePayload=function(e,r){},t.prototype.handlePayloadNoCustom=function(e,r){},t.prototype.handlePayloadWithCustom=function(e,r){r!==null&&(e.payload=r)},t.prototype.match=function(e,r,n){return null},t.prototype.matchWithTest=function(e,r,n){var i=e.test(r);return i===!0?r.substring(n,e.lastIndex):null},t.prototype.matchWithExec=function(e,r){var n=e.exec(r);return n!==null?n[0]:n},t.prototype.TRACE_INIT=function(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;var n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(n+"--> <"+e+">");var i=(0,Le.timer)(r),o=i.time,a=i.value,s=o>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(n+"<-- <"+e+"> time: "+o+"ms"),this.traceInitIndent--,a}else return r()},t.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.",t.NA=/NOT_APPLICABLE/,t}();Oi.Lexer=YD});var fi=E(Ft=>{"use strict";Object.defineProperty(Ft,"__esModule",{value:!0});Ft.tokenMatcher=Ft.createTokenInstance=Ft.EOF=Ft.createToken=Ft.hasTokenLabel=Ft.tokenName=Ft.tokenLabel=void 0;var Jr=Ae(),XD=Na(),Xp=Po();function JD(t){return k_(t)?t.LABEL:t.name}Ft.tokenLabel=JD;function QD(t){return t.name}Ft.tokenName=QD;function k_(t){return(0,Jr.isString)(t.LABEL)&&t.LABEL!==""}Ft.hasTokenLabel=k_;var ZD="parent",T_="categories",__="label",R_="group",A_="push_mode",C_="pop_mode",b_="longer_alt",E_="line_breaks",P_="start_chars_hint";function N_(t){return eO(t)}Ft.createToken=N_;function eO(t){var e=t.pattern,r={};if(r.name=t.name,(0,Jr.isUndefined)(e)||(r.PATTERN=e),(0,Jr.has)(t,ZD))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return(0,Jr.has)(t,T_)&&(r.CATEGORIES=t[T_]),(0,Xp.augmentTokenTypes)([r]),(0,Jr.has)(t,__)&&(r.LABEL=t[__]),(0,Jr.has)(t,R_)&&(r.GROUP=t[R_]),(0,Jr.has)(t,C_)&&(r.POP_MODE=t[C_]),(0,Jr.has)(t,A_)&&(r.PUSH_MODE=t[A_]),(0,Jr.has)(t,b_)&&(r.LONGER_ALT=t[b_]),(0,Jr.has)(t,E_)&&(r.LINE_BREAKS=t[E_]),(0,Jr.has)(t,P_)&&(r.START_CHARS_HINT=t[P_]),r}Ft.EOF=N_({name:"EOF",pattern:XD.Lexer.NA});(0,Xp.augmentTokenTypes)([Ft.EOF]);function tO(t,e,r,n,i,o,a,s){return{image:e,startOffset:r,endOffset:n,startLine:i,endLine:o,startColumn:a,endColumn:s,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}Ft.createTokenInstance=tO;function rO(t,e){return(0,Xp.tokenStructuredMatcher)(t,e)}Ft.tokenMatcher=rO});var cr=E(ke=>{"use strict";var Gn=ke&&ke.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(ke,"__esModule",{value:!0});ke.serializeProduction=ke.serializeGrammar=ke.Terminal=ke.Alternation=ke.RepetitionWithSeparator=ke.Repetition=ke.RepetitionMandatoryWithSeparator=ke.RepetitionMandatory=ke.Option=ke.Alternative=ke.Rule=ke.NonTerminal=ke.AbstractProduction=void 0;var Ye=Ae(),nO=fi(),yn=function(){function t(e){this._definition=e}return Object.defineProperty(t.prototype,"definition",{get:function(){return this._definition},set:function(e){this._definition=e},enumerable:!1,configurable:!0}),t.prototype.accept=function(e){e.visit(this),(0,Ye.forEach)(this.definition,function(r){r.accept(e)})},t}();ke.AbstractProduction=yn;var S_=function(t){Gn(e,t);function e(r){var n=t.call(this,[])||this;return n.idx=1,(0,Ye.assign)(n,(0,Ye.pick)(r,function(i){return i!==void 0})),n}return Object.defineProperty(e.prototype,"definition",{get:function(){return this.referencedRule!==void 0?this.referencedRule.definition:[]},set:function(r){},enumerable:!1,configurable:!0}),e.prototype.accept=function(r){r.visit(this)},e}(yn);ke.NonTerminal=S_;var w_=function(t){Gn(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.orgText="",(0,Ye.assign)(n,(0,Ye.pick)(r,function(i){return i!==void 0})),n}return e}(yn);ke.Rule=w_;var D_=function(t){Gn(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.ignoreAmbiguities=!1,(0,Ye.assign)(n,(0,Ye.pick)(r,function(i){return i!==void 0})),n}return e}(yn);ke.Alternative=D_;var O_=function(t){Gn(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Ye.assign)(n,(0,Ye.pick)(r,function(i){return i!==void 0})),n}return e}(yn);ke.Option=O_;var x_=function(t){Gn(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Ye.assign)(n,(0,Ye.pick)(r,function(i){return i!==void 0})),n}return e}(yn);ke.RepetitionMandatory=x_;var I_=function(t){Gn(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Ye.assign)(n,(0,Ye.pick)(r,function(i){return i!==void 0})),n}return e}(yn);ke.RepetitionMandatoryWithSeparator=I_;var M_=function(t){Gn(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Ye.assign)(n,(0,Ye.pick)(r,function(i){return i!==void 0})),n}return e}(yn);ke.Repetition=M_;var L_=function(t){Gn(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Ye.assign)(n,(0,Ye.pick)(r,function(i){return i!==void 0})),n}return e}(yn);ke.RepetitionWithSeparator=L_;var $_=function(t){Gn(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,n.ignoreAmbiguities=!1,n.hasPredicates=!1,(0,Ye.assign)(n,(0,Ye.pick)(r,function(i){return i!==void 0})),n}return Object.defineProperty(e.prototype,"definition",{get:function(){return this._definition},set:function(r){this._definition=r},enumerable:!1,configurable:!0}),e}(yn);ke.Alternation=$_;var tc=function(){function t(e){this.idx=1,(0,Ye.assign)(this,(0,Ye.pick)(e,function(r){return r!==void 0}))}return t.prototype.accept=function(e){e.visit(this)},t}();ke.Terminal=tc;function iO(t){return(0,Ye.map)(t,wa)}ke.serializeGrammar=iO;function wa(t){function e(o){return(0,Ye.map)(o,wa)}if(t instanceof S_){var r={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return(0,Ye.isString)(t.label)&&(r.label=t.label),r}else{if(t instanceof D_)return{type:"Alternative",definition:e(t.definition)};if(t instanceof O_)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof x_)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof I_)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:wa(new tc({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof L_)return{type:"RepetitionWithSeparator",idx:t.idx,separator:wa(new tc({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof M_)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof $_)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof tc){var n={type:"Terminal",name:t.terminalType.name,label:(0,nO.tokenLabel)(t.terminalType),idx:t.idx};(0,Ye.isString)(t.label)&&(n.terminalLabel=t.label);var i=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(n.pattern=(0,Ye.isRegExp)(i)?i.source:i),n}else{if(t instanceof w_)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}ke.serializeProduction=wa});var nc=E(rc=>{"use strict";Object.defineProperty(rc,"__esModule",{value:!0});rc.RestWalker=void 0;var Jp=Ae(),lr=cr(),oO=function(){function t(){}return t.prototype.walk=function(e,r){var n=this;r===void 0&&(r=[]),(0,Jp.forEach)(e.definition,function(i,o){var a=(0,Jp.drop)(e.definition,o+1);if(i instanceof lr.NonTerminal)n.walkProdRef(i,a,r);else if(i instanceof lr.Terminal)n.walkTerminal(i,a,r);else if(i instanceof lr.Alternative)n.walkFlat(i,a,r);else if(i instanceof lr.Option)n.walkOption(i,a,r);else if(i instanceof lr.RepetitionMandatory)n.walkAtLeastOne(i,a,r);else if(i instanceof lr.RepetitionMandatoryWithSeparator)n.walkAtLeastOneSep(i,a,r);else if(i instanceof lr.RepetitionWithSeparator)n.walkManySep(i,a,r);else if(i instanceof lr.Repetition)n.walkMany(i,a,r);else if(i instanceof lr.Alternation)n.walkOr(i,a,r);else throw Error("non exhaustive match")})},t.prototype.walkTerminal=function(e,r,n){},t.prototype.walkProdRef=function(e,r,n){},t.prototype.walkFlat=function(e,r,n){var i=r.concat(n);this.walk(e,i)},t.prototype.walkOption=function(e,r,n){var i=r.concat(n);this.walk(e,i)},t.prototype.walkAtLeastOne=function(e,r,n){var i=[new lr.Option({definition:e.definition})].concat(r,n);this.walk(e,i)},t.prototype.walkAtLeastOneSep=function(e,r,n){var i=q_(e,r,n);this.walk(e,i)},t.prototype.walkMany=function(e,r,n){var i=[new lr.Option({definition:e.definition})].concat(r,n);this.walk(e,i)},t.prototype.walkManySep=function(e,r,n){var i=q_(e,r,n);this.walk(e,i)},t.prototype.walkOr=function(e,r,n){var i=this,o=r.concat(n);(0,Jp.forEach)(e.definition,function(a){var s=new lr.Alternative({definition:[a]});i.walk(s,o)})},t}();rc.RestWalker=oO;function q_(t,e,r){var n=[new lr.Option({definition:[new lr.Terminal({terminalType:t.separator})].concat(t.definition)})],i=n.concat(e,r);return i}});var ko=E(ic=>{"use strict";Object.defineProperty(ic,"__esModule",{value:!0});ic.GAstVisitor=void 0;var vn=cr(),aO=function(){function t(){}return t.prototype.visit=function(e){var r=e;switch(r.constructor){case vn.NonTerminal:return this.visitNonTerminal(r);case vn.Alternative:return this.visitAlternative(r);case vn.Option:return this.visitOption(r);case vn.RepetitionMandatory:return this.visitRepetitionMandatory(r);case vn.RepetitionMandatoryWithSeparator:return this.visitRepetitionMandatoryWithSeparator(r);case vn.RepetitionWithSeparator:return this.visitRepetitionWithSeparator(r);case vn.Repetition:return this.visitRepetition(r);case vn.Alternation:return this.visitAlternation(r);case vn.Terminal:return this.visitTerminal(r);case vn.Rule:return this.visitRule(r);default:throw Error("non exhaustive match")}},t.prototype.visitNonTerminal=function(e){},t.prototype.visitAlternative=function(e){},t.prototype.visitOption=function(e){},t.prototype.visitRepetition=function(e){},t.prototype.visitRepetitionMandatory=function(e){},t.prototype.visitRepetitionMandatoryWithSeparator=function(e){},t.prototype.visitRepetitionWithSeparator=function(e){},t.prototype.visitAlternation=function(e){},t.prototype.visitTerminal=function(e){},t.prototype.visitRule=function(e){},t}();ic.GAstVisitor=aO});var Oa=E(Yt=>{"use strict";var sO=Yt&&Yt.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(Yt,"__esModule",{value:!0});Yt.collectMethods=Yt.DslMethodsCollectorVisitor=Yt.getProductionDslName=Yt.isBranchingProd=Yt.isOptionalProd=Yt.isSequenceProd=void 0;var Da=Ae(),rt=cr(),uO=ko();function cO(t){return t instanceof rt.Alternative||t instanceof rt.Option||t instanceof rt.Repetition||t instanceof rt.RepetitionMandatory||t instanceof rt.RepetitionMandatoryWithSeparator||t instanceof rt.RepetitionWithSeparator||t instanceof rt.Terminal||t instanceof rt.Rule}Yt.isSequenceProd=cO;function Qp(t,e){e===void 0&&(e=[]);var r=t instanceof rt.Option||t instanceof rt.Repetition||t instanceof rt.RepetitionWithSeparator;return r?!0:t instanceof rt.Alternation?(0,Da.some)(t.definition,function(n){return Qp(n,e)}):t instanceof rt.NonTerminal&&(0,Da.contains)(e,t)?!1:t instanceof rt.AbstractProduction?(t instanceof rt.NonTerminal&&e.push(t),(0,Da.every)(t.definition,function(n){return Qp(n,e)})):!1}Yt.isOptionalProd=Qp;function lO(t){return t instanceof rt.Alternation}Yt.isBranchingProd=lO;function dO(t){if(t instanceof rt.NonTerminal)return"SUBRULE";if(t instanceof rt.Option)return"OPTION";if(t instanceof rt.Alternation)return"OR";if(t instanceof rt.RepetitionMandatory)return"AT_LEAST_ONE";if(t instanceof rt.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(t instanceof rt.RepetitionWithSeparator)return"MANY_SEP";if(t instanceof rt.Repetition)return"MANY";if(t instanceof rt.Terminal)return"CONSUME";throw Error("non exhaustive match")}Yt.getProductionDslName=dO;var F_=function(t){sO(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.separator="-",r.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]},r}return e.prototype.reset=function(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}},e.prototype.visitTerminal=function(r){var n=r.terminalType.name+this.separator+"Terminal";(0,Da.has)(this.dslMethods,n)||(this.dslMethods[n]=[]),this.dslMethods[n].push(r)},e.prototype.visitNonTerminal=function(r){var n=r.nonTerminalName+this.separator+"Terminal";(0,Da.has)(this.dslMethods,n)||(this.dslMethods[n]=[]),this.dslMethods[n].push(r)},e.prototype.visitOption=function(r){this.dslMethods.option.push(r)},e.prototype.visitRepetitionWithSeparator=function(r){this.dslMethods.repetitionWithSeparator.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.dslMethods.repetitionMandatory.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.dslMethods.repetitionMandatoryWithSeparator.push(r)},e.prototype.visitRepetition=function(r){this.dslMethods.repetition.push(r)},e.prototype.visitAlternation=function(r){this.dslMethods.alternation.push(r)},e}(uO.GAstVisitor);Yt.DslMethodsCollectorVisitor=F_;var oc=new F_;function fO(t){oc.reset(),t.accept(oc);var e=oc.dslMethods;return oc.reset(),e}Yt.collectMethods=fO});var eh=E(Tn=>{"use strict";Object.defineProperty(Tn,"__esModule",{value:!0});Tn.firstForTerminal=Tn.firstForBranching=Tn.firstForSequence=Tn.first=void 0;var ac=Ae(),j_=cr(),Zp=Oa();function sc(t){if(t instanceof j_.NonTerminal)return sc(t.referencedRule);if(t instanceof j_.Terminal)return H_(t);if((0,Zp.isSequenceProd)(t))return G_(t);if((0,Zp.isBranchingProd)(t))return U_(t);throw Error("non exhaustive match")}Tn.first=sc;function G_(t){for(var e=[],r=t.definition,n=0,i=r.length>n,o,a=!0;i&&a;)o=r[n],a=(0,Zp.isOptionalProd)(o),e=e.concat(sc(o)),n=n+1,i=r.length>n;return(0,ac.uniq)(e)}Tn.firstForSequence=G_;function U_(t){var e=(0,ac.map)(t.definition,function(r){return sc(r)});return(0,ac.uniq)((0,ac.flatten)(e))}Tn.firstForBranching=U_;function H_(t){return[t.terminalType]}Tn.firstForTerminal=H_});var th=E(uc=>{"use strict";Object.defineProperty(uc,"__esModule",{value:!0});uc.IN=void 0;uc.IN="_~IN~_"});var V_=E(wr=>{"use strict";var pO=wr&&wr.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(wr,"__esModule",{value:!0});wr.buildInProdFollowPrefix=wr.buildBetweenProdsFollowPrefix=wr.computeAllProdsFollows=wr.ResyncFollowsWalker=void 0;var hO=nc(),mO=eh(),W_=Ae(),K_=th(),gO=cr(),B_=function(t){pO(e,t);function e(r){var n=t.call(this)||this;return n.topProd=r,n.follows={},n}return e.prototype.startWalking=function(){return this.walk(this.topProd),this.follows},e.prototype.walkTerminal=function(r,n,i){},e.prototype.walkProdRef=function(r,n,i){var o=z_(r.referencedRule,r.idx)+this.topProd.name,a=n.concat(i),s=new gO.Alternative({definition:a}),u=(0,mO.first)(s);this.follows[o]=u},e}(hO.RestWalker);wr.ResyncFollowsWalker=B_;function yO(t){var e={};return(0,W_.forEach)(t,function(r){var n=new B_(r).startWalking();(0,W_.assign)(e,n)}),e}wr.computeAllProdsFollows=yO;function z_(t,e){return t.name+e+K_.IN}wr.buildBetweenProdsFollowPrefix=z_;function vO(t){var e=t.terminalType.name;return e+t.idx+K_.IN}wr.buildInProdFollowPrefix=vO});var xa=E(Un=>{"use strict";Object.defineProperty(Un,"__esModule",{value:!0});Un.defaultGrammarValidatorErrorProvider=Un.defaultGrammarResolverErrorProvider=Un.defaultParserErrorProvider=void 0;var No=fi(),TO=Ae(),Qr=Ae(),rh=cr(),Y_=Oa();Un.defaultParserErrorProvider={buildMismatchTokenMessage:function(t){var e=t.expected,r=t.actual,n=t.previous,i=t.ruleName,o=(0,No.hasTokenLabel)(e),a=o?"--> "+(0,No.tokenLabel)(e)+" <--":"token of type --> "+e.name+" <--",s="Expecting "+a+" but found --> '"+r.image+"' <--";return s},buildNotAllInputParsedMessage:function(t){var e=t.firstRedundant,r=t.ruleName;return"Redundant input, expecting EOF but found: "+e.image},buildNoViableAltMessage:function(t){var e=t.expectedPathsPerAlt,r=t.actual,n=t.previous,i=t.customUserDescription,o=t.ruleName,a="Expecting: ",s=(0,Qr.first)(r).image,u=`
but found: '`+s+"'";if(i)return a+i+u;var c=(0,Qr.reduce)(e,function(_,h){return _.concat(h)},[]),l=(0,Qr.map)(c,function(_){return"["+(0,Qr.map)(_,function(h){return(0,No.tokenLabel)(h)}).join(", ")+"]"}),f=(0,Qr.map)(l,function(_,h){return"  "+(h+1)+". "+_}),y=`one of these possible Token sequences:
`+f.join(`
`);return a+y+u},buildEarlyExitMessage:function(t){var e=t.expectedIterationPaths,r=t.actual,n=t.customUserDescription,i=t.ruleName,o="Expecting: ",a=(0,Qr.first)(r).image,s=`
but found: '`+a+"'";if(n)return o+n+s;var u=(0,Qr.map)(e,function(l){return"["+(0,Qr.map)(l,function(f){return(0,No.tokenLabel)(f)}).join(",")+"]"}),c=`expecting at least one iteration which starts with one of these possible Token sequences::
  `+("<"+u.join(" ,")+">");return o+c+s}};Object.freeze(Un.defaultParserErrorProvider);Un.defaultGrammarResolverErrorProvider={buildRuleNotFoundError:function(t,e){var r="Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-";return r}};Un.defaultGrammarValidatorErrorProvider={buildDuplicateFoundError:function(t,e){function r(l){return l instanceof rh.Terminal?l.terminalType.name:l instanceof rh.NonTerminal?l.nonTerminalName:""}var n=t.name,i=(0,Qr.first)(e),o=i.idx,a=(0,Y_.getProductionDslName)(i),s=r(i),u=o>0,c="->"+a+(u?o:"")+"<- "+(s?"with argument: ->"+s+"<-":"")+`
                  appears more than once (`+e.length+" times) in the top level rule: ->"+n+`<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return c=c.replace(/[ \t]+/g," "),c=c.replace(/\s\s+/g,`
`),c},buildNamespaceConflictError:function(t){var e=`Namespace conflict found in grammar.
`+("The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <"+t.name+`>.
`)+`To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;return e},buildAlternationPrefixAmbiguityError:function(t){var e=(0,Qr.map)(t.prefixPath,function(i){return(0,No.tokenLabel)(i)}).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n="Ambiguous alternatives: <"+t.ambiguityIndices.join(" ,")+`> due to common lookahead prefix
`+("in <OR"+r+"> inside <"+t.topLevelRule.name+`> Rule,
`)+("<"+e+`> may appears as a prefix path in all these alternatives.
`)+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;return n},buildAlternationAmbiguityError:function(t){var e=(0,Qr.map)(t.prefixPath,function(i){return(0,No.tokenLabel)(i)}).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n="Ambiguous Alternatives Detected: <"+t.ambiguityIndices.join(" ,")+"> in <OR"+r+">"+(" inside <"+t.topLevelRule.name+`> Rule,
`)+("<"+e+`> may appears as a prefix path in all these alternatives.
`);return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n},buildEmptyRepetitionError:function(t){var e=(0,Y_.getProductionDslName)(t.repetition);t.repetition.idx!==0&&(e+=t.repetition.idx);var r="The repetition <"+e+"> within Rule <"+t.topLevelRule.name+`> can never consume any tokens.
This could lead to an infinite loop.`;return r},buildTokenNameError:function(t){return"deprecated"},buildEmptyAlternationError:function(t){var e="Ambiguous empty alternative: <"+(t.emptyChoiceIdx+1)+">"+(" in <OR"+t.alternation.idx+"> inside <"+t.topLevelRule.name+`> Rule.
`)+"Only the last alternative may be an empty alternative.";return e},buildTooManyAlternativesError:function(t){var e=`An Alternation cannot have more than 256 alternatives:
`+("<OR"+t.alternation.idx+"> inside <"+t.topLevelRule.name+`> Rule.
 has `+(t.alternation.definition.length+1)+" alternatives.");return e},buildLeftRecursionError:function(t){var e=t.topLevelRule.name,r=TO.map(t.leftRecursionPath,function(o){return o.name}),n=e+" --> "+r.concat([e]).join(" --> "),i=`Left Recursion found in grammar.
`+("rule: <"+e+`> can be invoked from itself (directly or indirectly)
`)+(`without consuming any Tokens. The grammar path that causes this is: 
 `+n+`
`)+` To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.`;return i},buildInvalidRuleNameError:function(t){return"deprecated"},buildDuplicateRuleNameError:function(t){var e;t.topLevelRule instanceof rh.Rule?e=t.topLevelRule.name:e=t.topLevelRule;var r="Duplicate definition, rule: ->"+e+"<- is already defined in the grammar: ->"+t.grammarName+"<-";return r}}});var Q_=E(pi=>{"use strict";var _O=pi&&pi.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(pi,"__esModule",{value:!0});pi.GastRefResolverVisitor=pi.resolveGrammar=void 0;var RO=mr(),X_=Ae(),AO=ko();function CO(t,e){var r=new J_(t,e);return r.resolveRefs(),r.errors}pi.resolveGrammar=CO;var J_=function(t){_O(e,t);function e(r,n){var i=t.call(this)||this;return i.nameToTopRule=r,i.errMsgProvider=n,i.errors=[],i}return e.prototype.resolveRefs=function(){var r=this;(0,X_.forEach)((0,X_.values)(this.nameToTopRule),function(n){r.currTopLevel=n,n.accept(r)})},e.prototype.visitNonTerminal=function(r){var n=this.nameToTopRule[r.nonTerminalName];if(n)r.referencedRule=n;else{var i=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,r);this.errors.push({message:i,type:RO.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:r.nonTerminalName})}},e}(AO.GAstVisitor);pi.GastRefResolverVisitor=J_});var Ma=E(lt=>{"use strict";var xi=lt&&lt.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(lt,"__esModule",{value:!0});lt.nextPossibleTokensAfter=lt.possiblePathsFrom=lt.NextTerminalAfterAtLeastOneSepWalker=lt.NextTerminalAfterAtLeastOneWalker=lt.NextTerminalAfterManySepWalker=lt.NextTerminalAfterManyWalker=lt.AbstractNextTerminalAfterProductionWalker=lt.NextAfterTokenWalker=lt.AbstractNextPossibleTokensWalker=void 0;var Z_=nc(),ye=Ae(),bO=eh(),se=cr(),eR=function(t){xi(e,t);function e(r,n){var i=t.call(this)||this;return i.topProd=r,i.path=n,i.possibleTokTypes=[],i.nextProductionName="",i.nextProductionOccurrence=0,i.found=!1,i.isAtEndOfPath=!1,i}return e.prototype.startWalking=function(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=(0,ye.cloneArr)(this.path.ruleStack).reverse(),this.occurrenceStack=(0,ye.cloneArr)(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes},e.prototype.walk=function(r,n){n===void 0&&(n=[]),this.found||t.prototype.walk.call(this,r,n)},e.prototype.walkProdRef=function(r,n,i){if(r.referencedRule.name===this.nextProductionName&&r.idx===this.nextProductionOccurrence){var o=n.concat(i);this.updateExpectedNext(),this.walk(r.referencedRule,o)}},e.prototype.updateExpectedNext=function(){(0,ye.isEmpty)(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())},e}(Z_.RestWalker);lt.AbstractNextPossibleTokensWalker=eR;var EO=function(t){xi(e,t);function e(r,n){var i=t.call(this,r,n)||this;return i.path=n,i.nextTerminalName="",i.nextTerminalOccurrence=0,i.nextTerminalName=i.path.lastTok.name,i.nextTerminalOccurrence=i.path.lastTokOccurrence,i}return e.prototype.walkTerminal=function(r,n,i){if(this.isAtEndOfPath&&r.terminalType.name===this.nextTerminalName&&r.idx===this.nextTerminalOccurrence&&!this.found){var o=n.concat(i),a=new se.Alternative({definition:o});this.possibleTokTypes=(0,bO.first)(a),this.found=!0}},e}(eR);lt.NextAfterTokenWalker=EO;var Ia=function(t){xi(e,t);function e(r,n){var i=t.call(this)||this;return i.topRule=r,i.occurrence=n,i.result={token:void 0,occurrence:void 0,isEndOfRule:void 0},i}return e.prototype.startWalking=function(){return this.walk(this.topRule),this.result},e}(Z_.RestWalker);lt.AbstractNextTerminalAfterProductionWalker=Ia;var PO=function(t){xi(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkMany=function(r,n,i){if(r.idx===this.occurrence){var o=(0,ye.first)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof se.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkMany.call(this,r,n,i)},e}(Ia);lt.NextTerminalAfterManyWalker=PO;var kO=function(t){xi(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkManySep=function(r,n,i){if(r.idx===this.occurrence){var o=(0,ye.first)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof se.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkManySep.call(this,r,n,i)},e}(Ia);lt.NextTerminalAfterManySepWalker=kO;var NO=function(t){xi(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkAtLeastOne=function(r,n,i){if(r.idx===this.occurrence){var o=(0,ye.first)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof se.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkAtLeastOne.call(this,r,n,i)},e}(Ia);lt.NextTerminalAfterAtLeastOneWalker=NO;var SO=function(t){xi(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkAtLeastOneSep=function(r,n,i){if(r.idx===this.occurrence){var o=(0,ye.first)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof se.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkAtLeastOneSep.call(this,r,n,i)},e}(Ia);lt.NextTerminalAfterAtLeastOneSepWalker=SO;function tR(t,e,r){r===void 0&&(r=[]),r=(0,ye.cloneArr)(r);var n=[],i=0;function o(c){return c.concat((0,ye.drop)(t,i+1))}function a(c){var l=tR(o(c),e,r);return n.concat(l)}for(;r.length<e&&i<t.length;){var s=t[i];if(s instanceof se.Alternative)return a(s.definition);if(s instanceof se.NonTerminal)return a(s.definition);if(s instanceof se.Option)n=a(s.definition);else if(s instanceof se.RepetitionMandatory){var u=s.definition.concat([new se.Repetition({definition:s.definition})]);return a(u)}else if(s instanceof se.RepetitionMandatoryWithSeparator){var u=[new se.Alternative({definition:s.definition}),new se.Repetition({definition:[new se.Terminal({terminalType:s.separator})].concat(s.definition)})];return a(u)}else if(s instanceof se.RepetitionWithSeparator){var u=s.definition.concat([new se.Repetition({definition:[new se.Terminal({terminalType:s.separator})].concat(s.definition)})]);n=a(u)}else if(s instanceof se.Repetition){var u=s.definition.concat([new se.Repetition({definition:s.definition})]);n=a(u)}else{if(s instanceof se.Alternation)return(0,ye.forEach)(s.definition,function(c){(0,ye.isEmpty)(c.definition)===!1&&(n=a(c.definition))}),n;if(s instanceof se.Terminal)r.push(s.terminalType);else throw Error("non exhaustive match")}i++}return n.push({partialPath:r,suffixDef:(0,ye.drop)(t,i)}),n}lt.possiblePathsFrom=tR;function wO(t,e,r,n){var i="EXIT_NONE_TERMINAL",o=[i],a="EXIT_ALTERNATIVE",s=!1,u=e.length,c=u-n-1,l=[],f=[];for(f.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!(0,ye.isEmpty)(f);){var y=f.pop();if(y===a){s&&(0,ye.last)(f).idx<=c&&f.pop();continue}var _=y.def,h=y.idx,A=y.ruleStack,w=y.occurrenceStack;if(!(0,ye.isEmpty)(_)){var k=_[0];if(k===i){var R={idx:h,def:(0,ye.drop)(_),ruleStack:(0,ye.dropRight)(A),occurrenceStack:(0,ye.dropRight)(w)};f.push(R)}else if(k instanceof se.Terminal)if(h<u-1){var T=h+1,D=e[T];if(r(D,k.terminalType)){var R={idx:T,def:(0,ye.drop)(_),ruleStack:A,occurrenceStack:w};f.push(R)}}else if(h===u-1)l.push({nextTokenType:k.terminalType,nextTokenOccurrence:k.idx,ruleStack:A,occurrenceStack:w}),s=!0;else throw Error("non exhaustive match");else if(k instanceof se.NonTerminal){var B=(0,ye.cloneArr)(A);B.push(k.nonTerminalName);var V=(0,ye.cloneArr)(w);V.push(k.idx);var R={idx:h,def:k.definition.concat(o,(0,ye.drop)(_)),ruleStack:B,occurrenceStack:V};f.push(R)}else if(k instanceof se.Option){var G={idx:h,def:(0,ye.drop)(_),ruleStack:A,occurrenceStack:w};f.push(G),f.push(a);var ve={idx:h,def:k.definition.concat((0,ye.drop)(_)),ruleStack:A,occurrenceStack:w};f.push(ve)}else if(k instanceof se.RepetitionMandatory){var Fe=new se.Repetition({definition:k.definition,idx:k.idx}),Qe=k.definition.concat([Fe],(0,ye.drop)(_)),R={idx:h,def:Qe,ruleStack:A,occurrenceStack:w};f.push(R)}else if(k instanceof se.RepetitionMandatoryWithSeparator){var je=new se.Terminal({terminalType:k.separator}),Fe=new se.Repetition({definition:[je].concat(k.definition),idx:k.idx}),Qe=k.definition.concat([Fe],(0,ye.drop)(_)),R={idx:h,def:Qe,ruleStack:A,occurrenceStack:w};f.push(R)}else if(k instanceof se.RepetitionWithSeparator){var G={idx:h,def:(0,ye.drop)(_),ruleStack:A,occurrenceStack:w};f.push(G),f.push(a);var je=new se.Terminal({terminalType:k.separator}),$=new se.Repetition({definition:[je].concat(k.definition),idx:k.idx}),Qe=k.definition.concat([$],(0,ye.drop)(_)),ve={idx:h,def:Qe,ruleStack:A,occurrenceStack:w};f.push(ve)}else if(k instanceof se.Repetition){var G={idx:h,def:(0,ye.drop)(_),ruleStack:A,occurrenceStack:w};f.push(G),f.push(a);var $=new se.Repetition({definition:k.definition,idx:k.idx}),Qe=k.definition.concat([$],(0,ye.drop)(_)),ve={idx:h,def:Qe,ruleStack:A,occurrenceStack:w};f.push(ve)}else if(k instanceof se.Alternation)for(var L=k.definition.length-1;L>=0;L--){var q=k.definition[L],K={idx:h,def:q.definition.concat((0,ye.drop)(_)),ruleStack:A,occurrenceStack:w};f.push(K),f.push(a)}else if(k instanceof se.Alternative)f.push({idx:h,def:k.definition.concat((0,ye.drop)(_)),ruleStack:A,occurrenceStack:w});else if(k instanceof se.Rule)f.push(DO(k,h,A,w));else throw Error("non exhaustive match")}}return l}lt.nextPossibleTokensAfter=wO;function DO(t,e,r,n){var i=(0,ye.cloneArr)(r);i.push(t.name);var o=(0,ye.cloneArr)(n);return o.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:o}}});var La=E(De=>{"use strict";var iR=De&&De.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(De,"__esModule",{value:!0});De.areTokenCategoriesNotUsed=De.isStrictPrefixOfPath=De.containsPath=De.getLookaheadPathsForOptionalProd=De.getLookaheadPathsForOr=De.lookAheadSequenceFromAlternatives=De.buildSingleAlternativeLookaheadFunction=De.buildAlternativesLookAheadFunc=De.buildLookaheadFuncForOptionalProd=De.buildLookaheadFuncForOr=De.getProdType=De.PROD_TYPE=void 0;var $e=Ae(),rR=Ma(),OO=nc(),cc=Po(),hi=cr(),xO=ko(),Pt;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(Pt=De.PROD_TYPE||(De.PROD_TYPE={}));function IO(t){if(t instanceof hi.Option)return Pt.OPTION;if(t instanceof hi.Repetition)return Pt.REPETITION;if(t instanceof hi.RepetitionMandatory)return Pt.REPETITION_MANDATORY;if(t instanceof hi.RepetitionMandatoryWithSeparator)return Pt.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof hi.RepetitionWithSeparator)return Pt.REPETITION_WITH_SEPARATOR;if(t instanceof hi.Alternation)return Pt.ALTERNATION;throw Error("non exhaustive match")}De.getProdType=IO;function MO(t,e,r,n,i,o){var a=aR(t,e,r),s=oh(a)?cc.tokenStructuredMatcherNoCategories:cc.tokenStructuredMatcher;return o(a,n,s,i)}De.buildLookaheadFuncForOr=MO;function LO(t,e,r,n,i,o){var a=sR(t,e,i,r),s=oh(a)?cc.tokenStructuredMatcherNoCategories:cc.tokenStructuredMatcher;return o(a[0],s,n)}De.buildLookaheadFuncForOptionalProd=LO;function $O(t,e,r,n){var i=t.length,o=(0,$e.every)(t,function(u){return(0,$e.every)(u,function(c){return c.length===1})});if(e)return function(u){for(var c=(0,$e.map)(u,function(T){return T.GATE}),l=0;l<i;l++){var f=t[l],y=f.length,_=c[l];if(_!==void 0&&_.call(this)===!1)continue;e:for(var h=0;h<y;h++){for(var A=f[h],w=A.length,k=0;k<w;k++){var R=this.LA(k+1);if(r(R,A[k])===!1)continue e}return l}}};if(o&&!n){var a=(0,$e.map)(t,function(u){return(0,$e.flatten)(u)}),s=(0,$e.reduce)(a,function(u,c,l){return(0,$e.forEach)(c,function(f){(0,$e.has)(u,f.tokenTypeIdx)||(u[f.tokenTypeIdx]=l),(0,$e.forEach)(f.categoryMatches,function(y){(0,$e.has)(u,y)||(u[y]=l)})}),u},[]);return function(){var u=this.LA(1);return s[u.tokenTypeIdx]}}else return function(){for(var u=0;u<i;u++){var c=t[u],l=c.length;e:for(var f=0;f<l;f++){for(var y=c[f],_=y.length,h=0;h<_;h++){var A=this.LA(h+1);if(r(A,y[h])===!1)continue e}return u}}}}De.buildAlternativesLookAheadFunc=$O;function qO(t,e,r){var n=(0,$e.every)(t,function(c){return c.length===1}),i=t.length;if(n&&!r){var o=(0,$e.flatten)(t);if(o.length===1&&(0,$e.isEmpty)(o[0].categoryMatches)){var a=o[0],s=a.tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===s}}else{var u=(0,$e.reduce)(o,function(c,l,f){return c[l.tokenTypeIdx]=!0,(0,$e.forEach)(l.categoryMatches,function(y){c[y]=!0}),c},[]);return function(){var c=this.LA(1);return u[c.tokenTypeIdx]===!0}}}else return function(){e:for(var c=0;c<i;c++){for(var l=t[c],f=l.length,y=0;y<f;y++){var _=this.LA(y+1);if(e(_,l[y])===!1)continue e}return!0}return!1}}De.buildSingleAlternativeLookaheadFunction=qO;var FO=function(t){iR(e,t);function e(r,n,i){var o=t.call(this)||this;return o.topProd=r,o.targetOccurrence=n,o.targetProdType=i,o}return e.prototype.startWalking=function(){return this.walk(this.topProd),this.restDef},e.prototype.checkIsTarget=function(r,n,i,o){return r.idx===this.targetOccurrence&&this.targetProdType===n?(this.restDef=i.concat(o),!0):!1},e.prototype.walkOption=function(r,n,i){this.checkIsTarget(r,Pt.OPTION,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkAtLeastOne=function(r,n,i){this.checkIsTarget(r,Pt.REPETITION_MANDATORY,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkAtLeastOneSep=function(r,n,i){this.checkIsTarget(r,Pt.REPETITION_MANDATORY_WITH_SEPARATOR,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkMany=function(r,n,i){this.checkIsTarget(r,Pt.REPETITION,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkManySep=function(r,n,i){this.checkIsTarget(r,Pt.REPETITION_WITH_SEPARATOR,n,i)||t.prototype.walkOption.call(this,r,n,i)},e}(OO.RestWalker),oR=function(t){iR(e,t);function e(r,n,i){var o=t.call(this)||this;return o.targetOccurrence=r,o.targetProdType=n,o.targetRef=i,o.result=[],o}return e.prototype.checkIsTarget=function(r,n){r.idx===this.targetOccurrence&&this.targetProdType===n&&(this.targetRef===void 0||r===this.targetRef)&&(this.result=r.definition)},e.prototype.visitOption=function(r){this.checkIsTarget(r,Pt.OPTION)},e.prototype.visitRepetition=function(r){this.checkIsTarget(r,Pt.REPETITION)},e.prototype.visitRepetitionMandatory=function(r){this.checkIsTarget(r,Pt.REPETITION_MANDATORY)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.checkIsTarget(r,Pt.REPETITION_MANDATORY_WITH_SEPARATOR)},e.prototype.visitRepetitionWithSeparator=function(r){this.checkIsTarget(r,Pt.REPETITION_WITH_SEPARATOR)},e.prototype.visitAlternation=function(r){this.checkIsTarget(r,Pt.ALTERNATION)},e}(xO.GAstVisitor);function nR(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=[];return e}function nh(t){for(var e=[""],r=0;r<t.length;r++){for(var n=t[r],i=[],o=0;o<e.length;o++){var a=e[o];i.push(a+"_"+n.tokenTypeIdx);for(var s=0;s<n.categoryMatches.length;s++){var u="_"+n.categoryMatches[s];i.push(a+u)}}e=i}return e}function jO(t,e,r){for(var n=0;n<t.length;n++)if(n!==r)for(var i=t[n],o=0;o<e.length;o++){var a=e[o];if(i[a]===!0)return!1}return!0}function ih(t,e){for(var r=(0,$e.map)(t,function(l){return(0,rR.possiblePathsFrom)([l],1)}),n=nR(r.length),i=(0,$e.map)(r,function(l){var f={};return(0,$e.forEach)(l,function(y){var _=nh(y.partialPath);(0,$e.forEach)(_,function(h){f[h]=!0})}),f}),o=r,a=1;a<=e;a++){var s=o;o=nR(s.length);for(var u=function(l){for(var f=s[l],y=0;y<f.length;y++){var _=f[y].partialPath,h=f[y].suffixDef,A=nh(_),w=jO(i,A,l);if(w||(0,$e.isEmpty)(h)||_.length===e){var k=n[l];if(uR(k,_)===!1){k.push(_);for(var R=0;R<A.length;R++){var T=A[R];i[l][T]=!0}}}else{var D=(0,rR.possiblePathsFrom)(h,a+1,_);o[l]=o[l].concat(D),(0,$e.forEach)(D,function(B){var V=nh(B.partialPath);(0,$e.forEach)(V,function(G){i[l][G]=!0})})}}},c=0;c<s.length;c++)u(c)}return n}De.lookAheadSequenceFromAlternatives=ih;function aR(t,e,r,n){var i=new oR(t,Pt.ALTERNATION,n);return e.accept(i),ih(i.result,r)}De.getLookaheadPathsForOr=aR;function sR(t,e,r,n){var i=new oR(t,r);e.accept(i);var o=i.result,a=new FO(e,t,r),s=a.startWalking(),u=new hi.Alternative({definition:o}),c=new hi.Alternative({definition:s});return ih([u,c],n)}De.getLookaheadPathsForOptionalProd=sR;function uR(t,e){e:for(var r=0;r<t.length;r++){var n=t[r];if(n.length===e.length){for(var i=0;i<n.length;i++){var o=e[i],a=n[i],s=o===a||a.categoryMatchesMap[o.tokenTypeIdx]!==void 0;if(s===!1)continue e}return!0}}return!1}De.containsPath=uR;function GO(t,e){return t.length<e.length&&(0,$e.every)(t,function(r,n){var i=e[n];return r===i||i.categoryMatchesMap[r.tokenTypeIdx]})}De.isStrictPrefixOfPath=GO;function oh(t){return(0,$e.every)(t,function(e){return(0,$e.every)(e,function(r){return(0,$e.every)(r,function(n){return(0,$e.isEmpty)(n.categoryMatches)})})})}De.areTokenCategoriesNotUsed=oh});var dh=E(Ne=>{"use strict";var ah=Ne&&Ne.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(Ne,"__esModule",{value:!0});Ne.checkPrefixAlternativesAmbiguities=Ne.validateSomeNonEmptyLookaheadPath=Ne.validateTooManyAlts=Ne.RepetionCollector=Ne.validateAmbiguousAlternationAlternatives=Ne.validateEmptyOrAlternative=Ne.getFirstNoneTerminal=Ne.validateNoLeftRecursion=Ne.validateRuleIsOverridden=Ne.validateRuleDoesNotAlreadyExist=Ne.OccurrenceValidationCollector=Ne.identifyProductionForDuplicates=Ne.validateGrammar=void 0;var Oe=Ae(),nt=Ae(),_n=mr(),sh=Oa(),So=La(),UO=Ma(),Zr=cr(),uh=ko();function HO(t,e,r,n,i){var o=Oe.map(t,function(_){return WO(_,n)}),a=Oe.map(t,function(_){return ch(_,_,n)}),s=[],u=[],c=[];(0,nt.every)(a,nt.isEmpty)&&(s=(0,nt.map)(t,function(_){return pR(_,n)}),u=(0,nt.map)(t,function(_){return hR(_,e,n)}),c=yR(t,e,n));var l=zO(t,r,n),f=(0,nt.map)(t,function(_){return gR(_,n)}),y=(0,nt.map)(t,function(_){return fR(_,t,i,n)});return Oe.flatten(o.concat(c,a,s,u,l,f,y))}Ne.validateGrammar=HO;function WO(t,e){var r=new dR;t.accept(r);var n=r.allProductions,i=Oe.groupBy(n,cR),o=Oe.pick(i,function(s){return s.length>1}),a=Oe.map(Oe.values(o),function(s){var u=Oe.first(s),c=e.buildDuplicateFoundError(t,s),l=(0,sh.getProductionDslName)(u),f={message:c,type:_n.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:l,occurrence:u.idx},y=lR(u);return y&&(f.parameter=y),f});return a}function cR(t){return(0,sh.getProductionDslName)(t)+"_#_"+t.idx+"_#_"+lR(t)}Ne.identifyProductionForDuplicates=cR;function lR(t){return t instanceof Zr.Terminal?t.terminalType.name:t instanceof Zr.NonTerminal?t.nonTerminalName:""}var dR=function(t){ah(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.allProductions=[],r}return e.prototype.visitNonTerminal=function(r){this.allProductions.push(r)},e.prototype.visitOption=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetition=function(r){this.allProductions.push(r)},e.prototype.visitAlternation=function(r){this.allProductions.push(r)},e.prototype.visitTerminal=function(r){this.allProductions.push(r)},e}(uh.GAstVisitor);Ne.OccurrenceValidationCollector=dR;function fR(t,e,r,n){var i=[],o=(0,nt.reduce)(e,function(s,u){return u.name===t.name?s+1:s},0);if(o>1){var a=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});i.push({message:a,type:_n.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}Ne.validateRuleDoesNotAlreadyExist=fR;function KO(t,e,r){var n=[],i;return Oe.contains(e,t)||(i="Invalid rule override, rule: ->"+t+"<- cannot be overridden in the grammar: ->"+r+"<-as it is not defined in any of the super grammars ",n.push({message:i,type:_n.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,ruleName:t})),n}Ne.validateRuleIsOverridden=KO;function ch(t,e,r,n){n===void 0&&(n=[]);var i=[],o=$a(e.definition);if(Oe.isEmpty(o))return[];var a=t.name,s=Oe.contains(o,t);s&&i.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:_n.ParserDefinitionErrorType.LEFT_RECURSION,ruleName:a});var u=Oe.difference(o,n.concat([t])),c=Oe.map(u,function(l){var f=Oe.cloneArr(n);return f.push(l),ch(t,l,r,f)});return i.concat(Oe.flatten(c))}Ne.validateNoLeftRecursion=ch;function $a(t){var e=[];if(Oe.isEmpty(t))return e;var r=Oe.first(t);if(r instanceof Zr.NonTerminal)e.push(r.referencedRule);else if(r instanceof Zr.Alternative||r instanceof Zr.Option||r instanceof Zr.RepetitionMandatory||r instanceof Zr.RepetitionMandatoryWithSeparator||r instanceof Zr.RepetitionWithSeparator||r instanceof Zr.Repetition)e=e.concat($a(r.definition));else if(r instanceof Zr.Alternation)e=Oe.flatten(Oe.map(r.definition,function(a){return $a(a.definition)}));else if(!(r instanceof Zr.Terminal))throw Error("non exhaustive match");var n=(0,sh.isOptionalProd)(r),i=t.length>1;if(n&&i){var o=Oe.drop(t);return e.concat($a(o))}else return e}Ne.getFirstNoneTerminal=$a;var lh=function(t){ah(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.alternations=[],r}return e.prototype.visitAlternation=function(r){this.alternations.push(r)},e}(uh.GAstVisitor);function pR(t,e){var r=new lh;t.accept(r);var n=r.alternations,i=Oe.reduce(n,function(o,a){var s=Oe.dropRight(a.definition),u=Oe.map(s,function(c,l){var f=(0,UO.nextPossibleTokensAfter)([c],[],null,1);return Oe.isEmpty(f)?{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:a,emptyChoiceIdx:l}),type:_n.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:a.idx,alternative:l+1}:null});return o.concat(Oe.compact(u))},[]);return i}Ne.validateEmptyOrAlternative=pR;function hR(t,e,r){var n=new lh;t.accept(n);var i=n.alternations;i=(0,nt.reject)(i,function(a){return a.ignoreAmbiguities===!0});var o=Oe.reduce(i,function(a,s){var u=s.idx,c=s.maxLookahead||e,l=(0,So.getLookaheadPathsForOr)(u,t,c,s),f=BO(l,s,t,r),y=vR(l,s,t,r);return a.concat(f,y)},[]);return o}Ne.validateAmbiguousAlternationAlternatives=hR;var mR=function(t){ah(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.allProductions=[],r}return e.prototype.visitRepetitionWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetition=function(r){this.allProductions.push(r)},e}(uh.GAstVisitor);Ne.RepetionCollector=mR;function gR(t,e){var r=new lh;t.accept(r);var n=r.alternations,i=Oe.reduce(n,function(o,a){return a.definition.length>255&&o.push({message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:a}),type:_n.ParserDefinitionErrorType.TOO_MANY_ALTS,ruleName:t.name,occurrence:a.idx}),o},[]);return i}Ne.validateTooManyAlts=gR;function yR(t,e,r){var n=[];return(0,nt.forEach)(t,function(i){var o=new mR;i.accept(o);var a=o.allProductions;(0,nt.forEach)(a,function(s){var u=(0,So.getProdType)(s),c=s.maxLookahead||e,l=s.idx,f=(0,So.getLookaheadPathsForOptionalProd)(l,i,u,c),y=f[0];if((0,nt.isEmpty)((0,nt.flatten)(y))){var _=r.buildEmptyRepetitionError({topLevelRule:i,repetition:s});n.push({message:_,type:_n.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),n}Ne.validateSomeNonEmptyLookaheadPath=yR;function BO(t,e,r,n){var i=[],o=(0,nt.reduce)(t,function(s,u,c){return e.definition[c].ignoreAmbiguities===!0||(0,nt.forEach)(u,function(l){var f=[c];(0,nt.forEach)(t,function(y,_){c!==_&&(0,So.containsPath)(y,l)&&e.definition[_].ignoreAmbiguities!==!0&&f.push(_)}),f.length>1&&!(0,So.containsPath)(i,l)&&(i.push(l),s.push({alts:f,path:l}))}),s},[]),a=Oe.map(o,function(s){var u=(0,nt.map)(s.alts,function(l){return l+1}),c=n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:u,prefixPath:s.path});return{message:c,type:_n.ParserDefinitionErrorType.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:[s.alts]}});return a}function vR(t,e,r,n){var i=[],o=(0,nt.reduce)(t,function(a,s,u){var c=(0,nt.map)(s,function(l){return{idx:u,path:l}});return a.concat(c)},[]);return(0,nt.forEach)(o,function(a){var s=e.definition[a.idx];if(s.ignoreAmbiguities!==!0){var u=a.idx,c=a.path,l=(0,nt.findAll)(o,function(y){return e.definition[y.idx].ignoreAmbiguities!==!0&&y.idx<u&&(0,So.isStrictPrefixOfPath)(y.path,c)}),f=(0,nt.map)(l,function(y){var _=[y.idx+1,u+1],h=e.idx===0?"":e.idx,A=n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:_,prefixPath:y.path});return{message:A,type:_n.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:h,alternatives:_}});i=i.concat(f)}}),i}Ne.checkPrefixAlternativesAmbiguities=vR;function zO(t,e,r){var n=[],i=(0,nt.map)(e,function(o){return o.name});return(0,nt.forEach)(t,function(o){var a=o.name;if((0,nt.contains)(i,a)){var s=r.buildNamespaceConflictError(o);n.push({message:s,type:_n.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:a})}}),n}});var _R=E(wo=>{"use strict";Object.defineProperty(wo,"__esModule",{value:!0});wo.validateGrammar=wo.resolveGrammar=void 0;var fh=Ae(),VO=Q_(),YO=dh(),TR=xa();function XO(t){t=(0,fh.defaults)(t,{errMsgProvider:TR.defaultGrammarResolverErrorProvider});var e={};return(0,fh.forEach)(t.rules,function(r){e[r.name]=r}),(0,VO.resolveGrammar)(e,t.errMsgProvider)}wo.resolveGrammar=XO;function JO(t){return t=(0,fh.defaults)(t,{errMsgProvider:TR.defaultGrammarValidatorErrorProvider}),(0,YO.validateGrammar)(t.rules,t.maxLookahead,t.tokenTypes,t.errMsgProvider,t.grammarName)}wo.validateGrammar=JO});var Do=E(dr=>{"use strict";var qa=dr&&dr.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(dr,"__esModule",{value:!0});dr.EarlyExitException=dr.NotAllInputParsedException=dr.NoViableAltException=dr.MismatchedTokenException=dr.isRecognitionException=void 0;var QO=Ae(),RR="MismatchedTokenException",AR="NoViableAltException",CR="EarlyExitException",bR="NotAllInputParsedException",ER=[RR,AR,CR,bR];Object.freeze(ER);function ZO(t){return(0,QO.contains)(ER,t.name)}dr.isRecognitionException=ZO;var lc=function(t){qa(e,t);function e(r,n){var i=this.constructor,o=t.call(this,r)||this;return o.token=n,o.resyncedTokens=[],Object.setPrototypeOf(o,i.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,o.constructor),o}return e}(Error),ex=function(t){qa(e,t);function e(r,n,i){var o=t.call(this,r,n)||this;return o.previousToken=i,o.name=RR,o}return e}(lc);dr.MismatchedTokenException=ex;var tx=function(t){qa(e,t);function e(r,n,i){var o=t.call(this,r,n)||this;return o.previousToken=i,o.name=AR,o}return e}(lc);dr.NoViableAltException=tx;var rx=function(t){qa(e,t);function e(r,n){var i=t.call(this,r,n)||this;return i.name=bR,i}return e}(lc);dr.NotAllInputParsedException=rx;var nx=function(t){qa(e,t);function e(r,n,i){var o=t.call(this,r,n)||this;return o.previousToken=i,o.name=CR,o}return e}(lc);dr.EarlyExitException=nx});var hh=E(Xt=>{"use strict";Object.defineProperty(Xt,"__esModule",{value:!0});Xt.attemptInRepetitionRecovery=Xt.Recoverable=Xt.InRuleRecoveryException=Xt.IN_RULE_RECOVERY_EXCEPTION=Xt.EOF_FOLLOW_KEY=void 0;var dc=fi(),Dr=Ae(),ix=Do(),ox=th(),ax=mr();Xt.EOF_FOLLOW_KEY={};Xt.IN_RULE_RECOVERY_EXCEPTION="InRuleRecoveryException";function ph(t){this.name=Xt.IN_RULE_RECOVERY_EXCEPTION,this.message=t}Xt.InRuleRecoveryException=ph;ph.prototype=Error.prototype;var sx=function(){function t(){}return t.prototype.initRecoverable=function(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=(0,Dr.has)(e,"recoveryEnabled")?e.recoveryEnabled:ax.DEFAULT_PARSER_CONFIG.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=PR)},t.prototype.getTokenToInsert=function(e){var r=(0,dc.createTokenInstance)(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r},t.prototype.canTokenTypeBeInsertedInRecovery=function(e){return!0},t.prototype.tryInRepetitionRecovery=function(e,r,n,i){for(var o=this,a=this.findReSyncTokenType(),s=this.exportLexerState(),u=[],c=!1,l=this.LA(1),f=this.LA(1),y=function(){var _=o.LA(0),h=o.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:l,previous:_,ruleName:o.getCurrRuleFullName()}),A=new ix.MismatchedTokenException(h,l,o.LA(0));A.resyncedTokens=(0,Dr.dropRight)(u),o.SAVE_ERROR(A)};!c;)if(this.tokenMatcher(f,i)){y();return}else if(n.call(this)){y(),e.apply(this,r);return}else this.tokenMatcher(f,a)?c=!0:(f=this.SKIP_TOKEN(),this.addToResyncTokens(f,u));this.importLexerState(s)},t.prototype.shouldInRepetitionRecoveryBeTried=function(e,r,n){return!(n===!1||e===void 0||r===void 0||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))},t.prototype.getFollowsForInRuleRecovery=function(e,r){var n=this.getCurrentGrammarPath(e,r),i=this.getNextPossibleTokenTypes(n);return i},t.prototype.tryInRuleRecovery=function(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r)){var n=this.getTokenToInsert(e);return n}if(this.canRecoverWithSingleTokenDeletion(e)){var i=this.SKIP_TOKEN();return this.consumeToken(),i}throw new ph("sad sad panda")},t.prototype.canPerformInRuleRecovery=function(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)},t.prototype.canRecoverWithSingleTokenInsertion=function(e,r){var n=this;if(!this.canTokenTypeBeInsertedInRecovery(e)||(0,Dr.isEmpty)(r))return!1;var i=this.LA(1),o=(0,Dr.find)(r,function(a){return n.tokenMatcher(i,a)})!==void 0;return o},t.prototype.canRecoverWithSingleTokenDeletion=function(e){var r=this.tokenMatcher(this.LA(2),e);return r},t.prototype.isInCurrentRuleReSyncSet=function(e){var r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return(0,Dr.contains)(n,e)},t.prototype.findReSyncTokenType=function(){for(var e=this.flattenFollowSet(),r=this.LA(1),n=2;;){var i=r.tokenType;if((0,Dr.contains)(e,i))return i;r=this.LA(n),n++}},t.prototype.getCurrFollowKey=function(){if(this.RULE_STACK.length===1)return Xt.EOF_FOLLOW_KEY;var e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}},t.prototype.buildFullFollowKeyStack=function(){var e=this,r=this.RULE_STACK,n=this.RULE_OCCURRENCE_STACK;return(0,Dr.map)(r,function(i,o){return o===0?Xt.EOF_FOLLOW_KEY:{ruleName:e.shortRuleNameToFullName(i),idxInCallingRule:n[o],inRule:e.shortRuleNameToFullName(r[o-1])}})},t.prototype.flattenFollowSet=function(){var e=this,r=(0,Dr.map)(this.buildFullFollowKeyStack(),function(n){return e.getFollowSetFromFollowKey(n)});return(0,Dr.flatten)(r)},t.prototype.getFollowSetFromFollowKey=function(e){if(e===Xt.EOF_FOLLOW_KEY)return[dc.EOF];var r=e.ruleName+e.idxInCallingRule+ox.IN+e.inRule;return this.resyncFollows[r]},t.prototype.addToResyncTokens=function(e,r){return this.tokenMatcher(e,dc.EOF)||r.push(e),r},t.prototype.reSyncTo=function(e){for(var r=[],n=this.LA(1);this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return(0,Dr.dropRight)(r)},t.prototype.attemptInRepetitionRecovery=function(e,r,n,i,o,a,s){},t.prototype.getCurrentGrammarPath=function(e,r){var n=this.getHumanReadableRuleStack(),i=(0,Dr.cloneArr)(this.RULE_OCCURRENCE_STACK),o={ruleStack:n,occurrenceStack:i,lastTok:e,lastTokOccurrence:r};return o},t.prototype.getHumanReadableRuleStack=function(){var e=this;return(0,Dr.map)(this.RULE_STACK,function(r){return e.shortRuleNameToFullName(r)})},t}();Xt.Recoverable=sx;function PR(t,e,r,n,i,o,a){var s=this.getKeyForAutomaticLookahead(n,i),u=this.firstAfterRepMap[s];if(u===void 0){var c=this.getCurrRuleFullName(),l=this.getGAstProductions()[c],f=new o(l,i);u=f.startWalking(),this.firstAfterRepMap[s]=u}var y=u.token,_=u.occurrence,h=u.isEndOfRule;this.RULE_STACK.length===1&&h&&y===void 0&&(y=dc.EOF,_=1),this.shouldInRepetitionRecoveryBeTried(y,_,a)&&this.tryInRepetitionRecovery(t,e,r,y)}Xt.attemptInRepetitionRecovery=PR});var fc=E(Ee=>{"use strict";Object.defineProperty(Ee,"__esModule",{value:!0});Ee.getKeyForAutomaticLookahead=Ee.AT_LEAST_ONE_SEP_IDX=Ee.MANY_SEP_IDX=Ee.AT_LEAST_ONE_IDX=Ee.MANY_IDX=Ee.OPTION_IDX=Ee.OR_IDX=Ee.BITS_FOR_ALT_IDX=Ee.BITS_FOR_RULE_IDX=Ee.BITS_FOR_OCCURRENCE_IDX=Ee.BITS_FOR_METHOD_TYPE=void 0;Ee.BITS_FOR_METHOD_TYPE=4;Ee.BITS_FOR_OCCURRENCE_IDX=8;Ee.BITS_FOR_RULE_IDX=12;Ee.BITS_FOR_ALT_IDX=8;Ee.OR_IDX=1<<Ee.BITS_FOR_OCCURRENCE_IDX;Ee.OPTION_IDX=2<<Ee.BITS_FOR_OCCURRENCE_IDX;Ee.MANY_IDX=3<<Ee.BITS_FOR_OCCURRENCE_IDX;Ee.AT_LEAST_ONE_IDX=4<<Ee.BITS_FOR_OCCURRENCE_IDX;Ee.MANY_SEP_IDX=5<<Ee.BITS_FOR_OCCURRENCE_IDX;Ee.AT_LEAST_ONE_SEP_IDX=6<<Ee.BITS_FOR_OCCURRENCE_IDX;function ux(t,e,r){return r|e|t}Ee.getKeyForAutomaticLookahead=ux;var h1=32-Ee.BITS_FOR_ALT_IDX});var NR=E(pc=>{"use strict";Object.defineProperty(pc,"__esModule",{value:!0});pc.LooksAhead=void 0;var Hn=La(),en=Ae(),kR=mr(),Wn=fc(),Ii=Oa(),cx=function(){function t(){}return t.prototype.initLooksAhead=function(e){this.dynamicTokensEnabled=(0,en.has)(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:kR.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled,this.maxLookahead=(0,en.has)(e,"maxLookahead")?e.maxLookahead:kR.DEFAULT_PARSER_CONFIG.maxLookahead,this.lookAheadFuncsCache=(0,en.isES2015MapSupported)()?new Map:[],(0,en.isES2015MapSupported)()?(this.getLaFuncFromCache=this.getLaFuncFromMap,this.setLaFuncCache=this.setLaFuncCacheUsingMap):(this.getLaFuncFromCache=this.getLaFuncFromObj,this.setLaFuncCache=this.setLaFuncUsingObj)},t.prototype.preComputeLookaheadFunctions=function(e){var r=this;(0,en.forEach)(e,function(n){r.TRACE_INIT(n.name+" Rule Lookahead",function(){var i=(0,Ii.collectMethods)(n),o=i.alternation,a=i.repetition,s=i.option,u=i.repetitionMandatory,c=i.repetitionMandatoryWithSeparator,l=i.repetitionWithSeparator;(0,en.forEach)(o,function(f){var y=f.idx===0?"":f.idx;r.TRACE_INIT(""+(0,Ii.getProductionDslName)(f)+y,function(){var _=(0,Hn.buildLookaheadFuncForOr)(f.idx,n,f.maxLookahead||r.maxLookahead,f.hasPredicates,r.dynamicTokensEnabled,r.lookAheadBuilderForAlternatives),h=(0,Wn.getKeyForAutomaticLookahead)(r.fullRuleNameToShort[n.name],Wn.OR_IDX,f.idx);r.setLaFuncCache(h,_)})}),(0,en.forEach)(a,function(f){r.computeLookaheadFunc(n,f.idx,Wn.MANY_IDX,Hn.PROD_TYPE.REPETITION,f.maxLookahead,(0,Ii.getProductionDslName)(f))}),(0,en.forEach)(s,function(f){r.computeLookaheadFunc(n,f.idx,Wn.OPTION_IDX,Hn.PROD_TYPE.OPTION,f.maxLookahead,(0,Ii.getProductionDslName)(f))}),(0,en.forEach)(u,function(f){r.computeLookaheadFunc(n,f.idx,Wn.AT_LEAST_ONE_IDX,Hn.PROD_TYPE.REPETITION_MANDATORY,f.maxLookahead,(0,Ii.getProductionDslName)(f))}),(0,en.forEach)(c,function(f){r.computeLookaheadFunc(n,f.idx,Wn.AT_LEAST_ONE_SEP_IDX,Hn.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,f.maxLookahead,(0,Ii.getProductionDslName)(f))}),(0,en.forEach)(l,function(f){r.computeLookaheadFunc(n,f.idx,Wn.MANY_SEP_IDX,Hn.PROD_TYPE.REPETITION_WITH_SEPARATOR,f.maxLookahead,(0,Ii.getProductionDslName)(f))})})})},t.prototype.computeLookaheadFunc=function(e,r,n,i,o,a){var s=this;this.TRACE_INIT(""+a+(r===0?"":r),function(){var u=(0,Hn.buildLookaheadFuncForOptionalProd)(r,e,o||s.maxLookahead,s.dynamicTokensEnabled,i,s.lookAheadBuilderForOptional),c=(0,Wn.getKeyForAutomaticLookahead)(s.fullRuleNameToShort[e.name],n,r);s.setLaFuncCache(c,u)})},t.prototype.lookAheadBuilderForOptional=function(e,r,n){return(0,Hn.buildSingleAlternativeLookaheadFunction)(e,r,n)},t.prototype.lookAheadBuilderForAlternatives=function(e,r,n,i){return(0,Hn.buildAlternativesLookAheadFunc)(e,r,n,i)},t.prototype.getKeyForAutomaticLookahead=function(e,r){var n=this.getLastExplicitRuleShortName();return(0,Wn.getKeyForAutomaticLookahead)(n,e,r)},t.prototype.getLaFuncFromCache=function(e){},t.prototype.getLaFuncFromMap=function(e){return this.lookAheadFuncsCache.get(e)},t.prototype.getLaFuncFromObj=function(e){return this.lookAheadFuncsCache[e]},t.prototype.setLaFuncCache=function(e,r){},t.prototype.setLaFuncCacheUsingMap=function(e,r){this.lookAheadFuncsCache.set(e,r)},t.prototype.setLaFuncUsingObj=function(e,r){this.lookAheadFuncsCache[e]=r},t}();pc.LooksAhead=cx});var SR=E(Rn=>{"use strict";Object.defineProperty(Rn,"__esModule",{value:!0});Rn.addNoneTerminalToCst=Rn.addTerminalToCst=Rn.setNodeLocationFull=Rn.setNodeLocationOnlyOffset=void 0;function lx(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}Rn.setNodeLocationOnlyOffset=lx;function dx(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}Rn.setNodeLocationFull=dx;function fx(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}Rn.addTerminalToCst=fx;function px(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}Rn.addNoneTerminalToCst=px});var mh=E(mi=>{"use strict";Object.defineProperty(mi,"__esModule",{value:!0});mi.defineNameProp=mi.functionName=mi.classNameFromInstance=void 0;var hx=Ae();function mx(t){return DR(t.constructor)}mi.classNameFromInstance=mx;var wR="name";function DR(t){var e=t.name;return e||"anonymous"}mi.functionName=DR;function gx(t,e){var r=Object.getOwnPropertyDescriptor(t,wR);return(0,hx.isUndefined)(r)||r.configurable?(Object.defineProperty(t,wR,{enumerable:!1,configurable:!0,writable:!1,value:e}),!0):!1}mi.defineNameProp=gx});var LR=E(jt=>{"use strict";Object.defineProperty(jt,"__esModule",{value:!0});jt.validateRedundantMethods=jt.validateMissingCstMethods=jt.validateVisitor=jt.CstVisitorDefinitionError=jt.createBaseVisitorConstructorWithDefaults=jt.createBaseSemanticVisitorConstructor=jt.defaultVisit=void 0;var Or=Ae(),Fa=mh();function OR(t,e){for(var r=(0,Or.keys)(t),n=r.length,i=0;i<n;i++)for(var o=r[i],a=t[o],s=a.length,u=0;u<s;u++){var c=a[u];c.tokenTypeIdx===void 0&&this[c.name](c.children,e)}}jt.defaultVisit=OR;function yx(t,e){var r=function(){};(0,Fa.defineNameProp)(r,t+"BaseSemantics");var n={visit:function(i,o){if((0,Or.isArray)(i)&&(i=i[0]),!(0,Or.isUndefined)(i))return this[i.name](i.children,o)},validateVisitor:function(){var i=xR(this,e);if(!(0,Or.isEmpty)(i)){var o=(0,Or.map)(i,function(a){return a.msg});throw Error("Errors Detected in CST Visitor <"+(0,Fa.functionName)(this.constructor)+`>:
	`+(""+o.join(`

`).replace(/\n/g,`
	`)))}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}jt.createBaseSemanticVisitorConstructor=yx;function vx(t,e,r){var n=function(){};(0,Fa.defineNameProp)(n,t+"BaseSemanticsWithDefaults");var i=Object.create(r.prototype);return(0,Or.forEach)(e,function(o){i[o]=OR}),n.prototype=i,n.prototype.constructor=n,n}jt.createBaseVisitorConstructorWithDefaults=vx;var gh;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(gh=jt.CstVisitorDefinitionError||(jt.CstVisitorDefinitionError={}));function xR(t,e){var r=IR(t,e),n=MR(t,e);return r.concat(n)}jt.validateVisitor=xR;function IR(t,e){var r=(0,Or.map)(e,function(n){if(!(0,Or.isFunction)(t[n]))return{msg:"Missing visitor method: <"+n+"> on "+(0,Fa.functionName)(t.constructor)+" CST Visitor.",type:gh.MISSING_METHOD,methodName:n}});return(0,Or.compact)(r)}jt.validateMissingCstMethods=IR;var Tx=["constructor","visit","validateVisitor"];function MR(t,e){var r=[];for(var n in t)(0,Or.isFunction)(t[n])&&!(0,Or.contains)(Tx,n)&&!(0,Or.contains)(e,n)&&r.push({msg:"Redundant visitor method: <"+n+"> on "+(0,Fa.functionName)(t.constructor)+` CST Visitor
There is no Grammar Rule corresponding to this method's name.
`,type:gh.REDUNDANT_METHOD,methodName:n});return r}jt.validateRedundantMethods=MR});var qR=E(hc=>{"use strict";Object.defineProperty(hc,"__esModule",{value:!0});hc.TreeBuilder=void 0;var Oo=SR(),At=Ae(),$R=LR(),_x=mr(),Rx=function(){function t(){}return t.prototype.initTreeBuilder=function(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=(0,At.has)(e,"nodeLocationTracking")?e.nodeLocationTracking:_x.DEFAULT_PARSER_CONFIG.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=At.NOOP,this.cstFinallyStateUpdate=At.NOOP,this.cstPostTerminal=At.NOOP,this.cstPostNonTerminal=At.NOOP,this.cstPostRule=At.NOOP;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=Oo.setNodeLocationFull,this.setNodeLocationFromNode=Oo.setNodeLocationFull,this.cstPostRule=At.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=At.NOOP,this.setNodeLocationFromNode=At.NOOP,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=Oo.setNodeLocationOnlyOffset,this.setNodeLocationFromNode=Oo.setNodeLocationOnlyOffset,this.cstPostRule=At.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=At.NOOP,this.setNodeLocationFromNode=At.NOOP,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=At.NOOP,this.setNodeLocationFromNode=At.NOOP,this.cstPostRule=At.NOOP,this.setInitialNodeLocation=At.NOOP;else throw Error('Invalid <nodeLocationTracking> config option: "'+e.nodeLocationTracking+'"')},t.prototype.setInitialNodeLocationOnlyOffsetRecovery=function(e){e.location={startOffset:NaN,endOffset:NaN}},t.prototype.setInitialNodeLocationOnlyOffsetRegular=function(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}},t.prototype.setInitialNodeLocationFullRecovery=function(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}},t.prototype.setInitialNodeLocationFullRegular=function(e){var r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}},t.prototype.cstInvocationStateUpdate=function(e,r){var n={name:e,children:{}};this.setInitialNodeLocation(n),this.CST_STACK.push(n)},t.prototype.cstFinallyStateUpdate=function(){this.CST_STACK.pop()},t.prototype.cstPostRuleFull=function(e){var r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)},t.prototype.cstPostRuleOnlyOffset=function(e){var r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN},t.prototype.cstPostTerminal=function(e,r){var n=this.CST_STACK[this.CST_STACK.length-1];(0,Oo.addTerminalToCst)(n,r,e),this.setNodeLocationFromToken(n.location,r)},t.prototype.cstPostNonTerminal=function(e,r){var n=this.CST_STACK[this.CST_STACK.length-1];(0,Oo.addNoneTerminalToCst)(n,r,e),this.setNodeLocationFromNode(n.location,e.location)},t.prototype.getBaseCstVisitorConstructor=function(){if((0,At.isUndefined)(this.baseCstVisitorConstructor)){var e=(0,$R.createBaseSemanticVisitorConstructor)(this.className,(0,At.keys)(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor},t.prototype.getBaseCstVisitorConstructorWithDefaults=function(){if((0,At.isUndefined)(this.baseCstVisitorWithDefaultsConstructor)){var e=(0,$R.createBaseVisitorConstructorWithDefaults)(this.className,(0,At.keys)(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor},t.prototype.getLastExplicitRuleShortName=function(){var e=this.RULE_STACK;return e[e.length-1]},t.prototype.getPreviousExplicitRuleShortName=function(){var e=this.RULE_STACK;return e[e.length-2]},t.prototype.getLastExplicitRuleOccurrenceIndex=function(){var e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]},t}();hc.TreeBuilder=Rx});var jR=E(mc=>{"use strict";Object.defineProperty(mc,"__esModule",{value:!0});mc.LexerAdapter=void 0;var FR=mr(),Ax=function(){function t(){}return t.prototype.initLexerAdapter=function(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1},Object.defineProperty(t.prototype,"input",{get:function(){return this.tokVector},set:function(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length},enumerable:!1,configurable:!0}),t.prototype.SKIP_TOKEN=function(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):FR.END_OF_FILE},t.prototype.LA=function(e){var r=this.currIdx+e;return r<0||this.tokVectorLength<=r?FR.END_OF_FILE:this.tokVector[r]},t.prototype.consumeToken=function(){this.currIdx++},t.prototype.exportLexerState=function(){return this.currIdx},t.prototype.importLexerState=function(e){this.currIdx=e},t.prototype.resetLexerState=function(){this.currIdx=-1},t.prototype.moveToTerminatedState=function(){this.currIdx=this.tokVector.length-1},t.prototype.getLexerPosition=function(){return this.exportLexerState()},t}();mc.LexerAdapter=Ax});var UR=E(gc=>{"use strict";Object.defineProperty(gc,"__esModule",{value:!0});gc.RecognizerApi=void 0;var GR=Ae(),Cx=Do(),yh=mr(),bx=xa(),Ex=dh(),Px=cr(),kx=function(){function t(){}return t.prototype.ACTION=function(e){return e.call(this)},t.prototype.consume=function(e,r,n){return this.consumeInternal(r,e,n)},t.prototype.subrule=function(e,r,n){return this.subruleInternal(r,e,n)},t.prototype.option=function(e,r){return this.optionInternal(r,e)},t.prototype.or=function(e,r){return this.orInternal(r,e)},t.prototype.many=function(e,r){return this.manyInternal(e,r)},t.prototype.atLeastOne=function(e,r){return this.atLeastOneInternal(e,r)},t.prototype.CONSUME=function(e,r){return this.consumeInternal(e,0,r)},t.prototype.CONSUME1=function(e,r){return this.consumeInternal(e,1,r)},t.prototype.CONSUME2=function(e,r){return this.consumeInternal(e,2,r)},t.prototype.CONSUME3=function(e,r){return this.consumeInternal(e,3,r)},t.prototype.CONSUME4=function(e,r){return this.consumeInternal(e,4,r)},t.prototype.CONSUME5=function(e,r){return this.consumeInternal(e,5,r)},t.prototype.CONSUME6=function(e,r){return this.consumeInternal(e,6,r)},t.prototype.CONSUME7=function(e,r){return this.consumeInternal(e,7,r)},t.prototype.CONSUME8=function(e,r){return this.consumeInternal(e,8,r)},t.prototype.CONSUME9=function(e,r){return this.consumeInternal(e,9,r)},t.prototype.SUBRULE=function(e,r){return this.subruleInternal(e,0,r)},t.prototype.SUBRULE1=function(e,r){return this.subruleInternal(e,1,r)},t.prototype.SUBRULE2=function(e,r){return this.subruleInternal(e,2,r)},t.prototype.SUBRULE3=function(e,r){return this.subruleInternal(e,3,r)},t.prototype.SUBRULE4=function(e,r){return this.subruleInternal(e,4,r)},t.prototype.SUBRULE5=function(e,r){return this.subruleInternal(e,5,r)},t.prototype.SUBRULE6=function(e,r){return this.subruleInternal(e,6,r)},t.prototype.SUBRULE7=function(e,r){return this.subruleInternal(e,7,r)},t.prototype.SUBRULE8=function(e,r){return this.subruleInternal(e,8,r)},t.prototype.SUBRULE9=function(e,r){return this.subruleInternal(e,9,r)},t.prototype.OPTION=function(e){return this.optionInternal(e,0)},t.prototype.OPTION1=function(e){return this.optionInternal(e,1)},t.prototype.OPTION2=function(e){return this.optionInternal(e,2)},t.prototype.OPTION3=function(e){return this.optionInternal(e,3)},t.prototype.OPTION4=function(e){return this.optionInternal(e,4)},t.prototype.OPTION5=function(e){return this.optionInternal(e,5)},t.prototype.OPTION6=function(e){return this.optionInternal(e,6)},t.prototype.OPTION7=function(e){return this.optionInternal(e,7)},t.prototype.OPTION8=function(e){return this.optionInternal(e,8)},t.prototype.OPTION9=function(e){return this.optionInternal(e,9)},t.prototype.OR=function(e){return this.orInternal(e,0)},t.prototype.OR1=function(e){return this.orInternal(e,1)},t.prototype.OR2=function(e){return this.orInternal(e,2)},t.prototype.OR3=function(e){return this.orInternal(e,3)},t.prototype.OR4=function(e){return this.orInternal(e,4)},t.prototype.OR5=function(e){return this.orInternal(e,5)},t.prototype.OR6=function(e){return this.orInternal(e,6)},t.prototype.OR7=function(e){return this.orInternal(e,7)},t.prototype.OR8=function(e){return this.orInternal(e,8)},t.prototype.OR9=function(e){return this.orInternal(e,9)},t.prototype.MANY=function(e){this.manyInternal(0,e)},t.prototype.MANY1=function(e){this.manyInternal(1,e)},t.prototype.MANY2=function(e){this.manyInternal(2,e)},t.prototype.MANY3=function(e){this.manyInternal(3,e)},t.prototype.MANY4=function(e){this.manyInternal(4,e)},t.prototype.MANY5=function(e){this.manyInternal(5,e)},t.prototype.MANY6=function(e){this.manyInternal(6,e)},t.prototype.MANY7=function(e){this.manyInternal(7,e)},t.prototype.MANY8=function(e){this.manyInternal(8,e)},t.prototype.MANY9=function(e){this.manyInternal(9,e)},t.prototype.MANY_SEP=function(e){this.manySepFirstInternal(0,e)},t.prototype.MANY_SEP1=function(e){this.manySepFirstInternal(1,e)},t.prototype.MANY_SEP2=function(e){this.manySepFirstInternal(2,e)},t.prototype.MANY_SEP3=function(e){this.manySepFirstInternal(3,e)},t.prototype.MANY_SEP4=function(e){this.manySepFirstInternal(4,e)},t.prototype.MANY_SEP5=function(e){this.manySepFirstInternal(5,e)},t.prototype.MANY_SEP6=function(e){this.manySepFirstInternal(6,e)},t.prototype.MANY_SEP7=function(e){this.manySepFirstInternal(7,e)},t.prototype.MANY_SEP8=function(e){this.manySepFirstInternal(8,e)},t.prototype.MANY_SEP9=function(e){this.manySepFirstInternal(9,e)},t.prototype.AT_LEAST_ONE=function(e){this.atLeastOneInternal(0,e)},t.prototype.AT_LEAST_ONE1=function(e){return this.atLeastOneInternal(1,e)},t.prototype.AT_LEAST_ONE2=function(e){this.atLeastOneInternal(2,e)},t.prototype.AT_LEAST_ONE3=function(e){this.atLeastOneInternal(3,e)},t.prototype.AT_LEAST_ONE4=function(e){this.atLeastOneInternal(4,e)},t.prototype.AT_LEAST_ONE5=function(e){this.atLeastOneInternal(5,e)},t.prototype.AT_LEAST_ONE6=function(e){this.atLeastOneInternal(6,e)},t.prototype.AT_LEAST_ONE7=function(e){this.atLeastOneInternal(7,e)},t.prototype.AT_LEAST_ONE8=function(e){this.atLeastOneInternal(8,e)},t.prototype.AT_LEAST_ONE9=function(e){this.atLeastOneInternal(9,e)},t.prototype.AT_LEAST_ONE_SEP=function(e){this.atLeastOneSepFirstInternal(0,e)},t.prototype.AT_LEAST_ONE_SEP1=function(e){this.atLeastOneSepFirstInternal(1,e)},t.prototype.AT_LEAST_ONE_SEP2=function(e){this.atLeastOneSepFirstInternal(2,e)},t.prototype.AT_LEAST_ONE_SEP3=function(e){this.atLeastOneSepFirstInternal(3,e)},t.prototype.AT_LEAST_ONE_SEP4=function(e){this.atLeastOneSepFirstInternal(4,e)},t.prototype.AT_LEAST_ONE_SEP5=function(e){this.atLeastOneSepFirstInternal(5,e)},t.prototype.AT_LEAST_ONE_SEP6=function(e){this.atLeastOneSepFirstInternal(6,e)},t.prototype.AT_LEAST_ONE_SEP7=function(e){this.atLeastOneSepFirstInternal(7,e)},t.prototype.AT_LEAST_ONE_SEP8=function(e){this.atLeastOneSepFirstInternal(8,e)},t.prototype.AT_LEAST_ONE_SEP9=function(e){this.atLeastOneSepFirstInternal(9,e)},t.prototype.RULE=function(e,r,n){if(n===void 0&&(n=yh.DEFAULT_RULE_CONFIG),(0,GR.contains)(this.definedRulesNames,e)){var i=bx.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),o={message:i,type:yh.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(o)}this.definedRulesNames.push(e);var a=this.defineRule(e,r,n);return this[e]=a,a},t.prototype.OVERRIDE_RULE=function(e,r,n){n===void 0&&(n=yh.DEFAULT_RULE_CONFIG);var i=[];i=i.concat((0,Ex.validateRuleIsOverridden)(e,this.definedRulesNames,this.className)),this.definitionErrors=this.definitionErrors.concat(i);var o=this.defineRule(e,r,n);return this[e]=o,o},t.prototype.BACKTRACK=function(e,r){return function(){this.isBackTrackingStack.push(1);var n=this.saveRecogState();try{return e.apply(this,r),!0}catch(i){if((0,Cx.isRecognitionException)(i))return!1;throw i}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}},t.prototype.getGAstProductions=function(){return this.gastProductionsCache},t.prototype.getSerializedGastProductions=function(){return(0,Px.serializeGrammar)((0,GR.values)(this.gastProductionsCache))},t}();gc.RecognizerApi=kx});var BR=E(vc=>{"use strict";Object.defineProperty(vc,"__esModule",{value:!0});vc.RecognizerEngine=void 0;var at=Ae(),gr=fc(),yc=Do(),HR=La(),xo=Ma(),WR=mr(),Nx=hh(),KR=fi(),ja=Po(),Sx=mh(),wx=function(){function t(){}return t.prototype.initRecognizerEngine=function(e,r){if(this.className=(0,Sx.classNameFromInstance)(this),this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=ja.tokenStructuredMatcherNoCategories,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},(0,at.has)(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if((0,at.isArray)(e)){if((0,at.isEmpty)(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if((0,at.isArray)(e))this.tokensMap=(0,at.reduce)(e,function(a,s){return a[s.name]=s,a},{});else if((0,at.has)(e,"modes")&&(0,at.every)((0,at.flatten)((0,at.values)(e.modes)),ja.isTokenType)){var n=(0,at.flatten)((0,at.values)(e.modes)),i=(0,at.uniq)(n);this.tokensMap=(0,at.reduce)(i,function(a,s){return a[s.name]=s,a},{})}else if((0,at.isObject)(e))this.tokensMap=(0,at.cloneObj)(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=KR.EOF;var o=(0,at.every)((0,at.values)(e),function(a){return(0,at.isEmpty)(a.categoryMatches)});this.tokenMatcher=o?ja.tokenStructuredMatcherNoCategories:ja.tokenStructuredMatcher,(0,ja.augmentTokenTypes)((0,at.values)(this.tokensMap))},t.prototype.defineRule=function(e,r,n){if(this.selfAnalysisDone)throw Error("Grammar rule <"+e+`> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);var i=(0,at.has)(n,"resyncEnabled")?n.resyncEnabled:WR.DEFAULT_RULE_CONFIG.resyncEnabled,o=(0,at.has)(n,"recoveryValueFunc")?n.recoveryValueFunc:WR.DEFAULT_RULE_CONFIG.recoveryValueFunc,a=this.ruleShortNameIdx<<gr.BITS_FOR_METHOD_TYPE+gr.BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++,this.shortRuleNameToFull[a]=e,this.fullRuleNameToShort[e]=a;function s(l){try{if(this.outputCst===!0){r.apply(this,l);var f=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(f),f}else return r.apply(this,l)}catch(y){return this.invokeRuleCatch(y,i,o)}finally{this.ruleFinallyStateUpdate()}}var u=function(l,f){return l===void 0&&(l=0),this.ruleInvocationStateUpdate(a,e,l),s.call(this,f)},c="ruleName";return u[c]=e,u.originalGrammarAction=r,u},t.prototype.invokeRuleCatch=function(e,r,n){var i=this.RULE_STACK.length===1,o=r&&!this.isBackTracking()&&this.recoveryEnabled;if((0,yc.isRecognitionException)(e)){var a=e;if(o){var s=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(s))if(a.resyncedTokens=this.reSyncTo(s),this.outputCst){var u=this.CST_STACK[this.CST_STACK.length-1];return u.recoveredNode=!0,u}else return n();else{if(this.outputCst){var u=this.CST_STACK[this.CST_STACK.length-1];u.recoveredNode=!0,a.partialCstResult=u}throw a}}else{if(i)return this.moveToTerminatedState(),n();throw a}}else throw e},t.prototype.optionInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(gr.OPTION_IDX,r);return this.optionInternalLogic(e,r,n)},t.prototype.optionInternalLogic=function(e,r,n){var i=this,o=this.getLaFuncFromCache(n),a,s;if(e.DEF!==void 0){if(a=e.DEF,s=e.GATE,s!==void 0){var u=o;o=function(){return s.call(i)&&u.call(i)}}}else a=e;if(o.call(this)===!0)return a.call(this)},t.prototype.atLeastOneInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(gr.AT_LEAST_ONE_IDX,e);return this.atLeastOneInternalLogic(e,r,n)},t.prototype.atLeastOneInternalLogic=function(e,r,n){var i=this,o=this.getLaFuncFromCache(n),a,s;if(r.DEF!==void 0){if(a=r.DEF,s=r.GATE,s!==void 0){var u=o;o=function(){return s.call(i)&&u.call(i)}}}else a=r;if(o.call(this)===!0)for(var c=this.doSingleRepetition(a);o.call(this)===!0&&c===!0;)c=this.doSingleRepetition(a);else throw this.raiseEarlyExitException(e,HR.PROD_TYPE.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],o,gr.AT_LEAST_ONE_IDX,e,xo.NextTerminalAfterAtLeastOneWalker)},t.prototype.atLeastOneSepFirstInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(gr.AT_LEAST_ONE_SEP_IDX,e);this.atLeastOneSepFirstInternalLogic(e,r,n)},t.prototype.atLeastOneSepFirstInternalLogic=function(e,r,n){var i=this,o=r.DEF,a=r.SEP,s=this.getLaFuncFromCache(n);if(s.call(this)===!0){o.call(this);for(var u=function(){return i.tokenMatcher(i.LA(1),a)};this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,a,u,o,xo.NextTerminalAfterAtLeastOneSepWalker],u,gr.AT_LEAST_ONE_SEP_IDX,e,xo.NextTerminalAfterAtLeastOneSepWalker)}else throw this.raiseEarlyExitException(e,HR.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)},t.prototype.manyInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(gr.MANY_IDX,e);return this.manyInternalLogic(e,r,n)},t.prototype.manyInternalLogic=function(e,r,n){var i=this,o=this.getLaFuncFromCache(n),a,s;if(r.DEF!==void 0){if(a=r.DEF,s=r.GATE,s!==void 0){var u=o;o=function(){return s.call(i)&&u.call(i)}}}else a=r;for(var c=!0;o.call(this)===!0&&c===!0;)c=this.doSingleRepetition(a);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],o,gr.MANY_IDX,e,xo.NextTerminalAfterManyWalker,c)},t.prototype.manySepFirstInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(gr.MANY_SEP_IDX,e);this.manySepFirstInternalLogic(e,r,n)},t.prototype.manySepFirstInternalLogic=function(e,r,n){var i=this,o=r.DEF,a=r.SEP,s=this.getLaFuncFromCache(n);if(s.call(this)===!0){o.call(this);for(var u=function(){return i.tokenMatcher(i.LA(1),a)};this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,a,u,o,xo.NextTerminalAfterManySepWalker],u,gr.MANY_SEP_IDX,e,xo.NextTerminalAfterManySepWalker)}},t.prototype.repetitionSepSecondInternal=function(e,r,n,i,o){for(;n();)this.CONSUME(r),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,i,o],n,gr.AT_LEAST_ONE_SEP_IDX,e,o)},t.prototype.doSingleRepetition=function(e){var r=this.getLexerPosition();e.call(this);var n=this.getLexerPosition();return n>r},t.prototype.orInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(gr.OR_IDX,r),i=(0,at.isArray)(e)?e:e.DEF,o=this.getLaFuncFromCache(n),a=o.call(this,i);if(a!==void 0){var s=i[a];return s.ALT.call(this)}this.raiseNoAltException(r,e.ERR_MSG)},t.prototype.ruleFinallyStateUpdate=function(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){var e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new yc.NotAllInputParsedException(r,e))}},t.prototype.subruleInternal=function(e,r,n){var i;try{var o=n!==void 0?n.ARGS:void 0;return i=e.call(this,r,o),this.cstPostNonTerminal(i,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),i}catch(a){this.subruleInternalError(a,n,e.ruleName)}},t.prototype.subruleInternalError=function(e,r,n){throw(0,yc.isRecognitionException)(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e},t.prototype.consumeInternal=function(e,r,n){var i;try{var o=this.LA(1);this.tokenMatcher(o,e)===!0?(this.consumeToken(),i=o):this.consumeInternalError(e,o,n)}catch(a){i=this.consumeInternalRecovery(e,r,a)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,i),i},t.prototype.consumeInternalError=function(e,r,n){var i,o=this.LA(0);throw n!==void 0&&n.ERR_MSG?i=n.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:o,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new yc.MismatchedTokenException(i,r,o))},t.prototype.consumeInternalRecovery=function(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){var i=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,i)}catch(o){throw o.name===Nx.IN_RULE_RECOVERY_EXCEPTION?n:o}}else throw n},t.prototype.saveRecogState=function(){var e=this.errors,r=(0,at.cloneArr)(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}},t.prototype.reloadRecogState=function(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK},t.prototype.ruleInvocationStateUpdate=function(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r,e)},t.prototype.isBackTracking=function(){return this.isBackTrackingStack.length!==0},t.prototype.getCurrRuleFullName=function(){var e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]},t.prototype.shortRuleNameToFullName=function(e){return this.shortRuleNameToFull[e]},t.prototype.isAtEndOfInput=function(){return this.tokenMatcher(this.LA(1),KR.EOF)},t.prototype.reset=function(){this.resetLexerState(),this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]},t}();vc.RecognizerEngine=wx});var VR=E(Tc=>{"use strict";Object.defineProperty(Tc,"__esModule",{value:!0});Tc.ErrorHandler=void 0;var vh=Do(),Th=Ae(),zR=La(),Dx=mr(),Ox=function(){function t(){}return t.prototype.initErrorHandler=function(e){this._errors=[],this.errorMessageProvider=(0,Th.has)(e,"errorMessageProvider")?e.errorMessageProvider:Dx.DEFAULT_PARSER_CONFIG.errorMessageProvider},t.prototype.SAVE_ERROR=function(e){if((0,vh.isRecognitionException)(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:(0,Th.cloneArr)(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")},Object.defineProperty(t.prototype,"errors",{get:function(){return(0,Th.cloneArr)(this._errors)},set:function(e){this._errors=e},enumerable:!1,configurable:!0}),t.prototype.raiseEarlyExitException=function(e,r,n){for(var i=this.getCurrRuleFullName(),o=this.getGAstProductions()[i],a=(0,zR.getLookaheadPathsForOptionalProd)(e,o,r,this.maxLookahead),s=a[0],u=[],c=1;c<=this.maxLookahead;c++)u.push(this.LA(c));var l=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:s,actual:u,previous:this.LA(0),customUserDescription:n,ruleName:i});throw this.SAVE_ERROR(new vh.EarlyExitException(l,this.LA(1),this.LA(0)))},t.prototype.raiseNoAltException=function(e,r){for(var n=this.getCurrRuleFullName(),i=this.getGAstProductions()[n],o=(0,zR.getLookaheadPathsForOr)(e,i,this.maxLookahead),a=[],s=1;s<=this.maxLookahead;s++)a.push(this.LA(s));var u=this.LA(0),c=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:o,actual:a,previous:u,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new vh.NoViableAltException(c,this.LA(1),u))},t}();Tc.ErrorHandler=Ox});var JR=E(_c=>{"use strict";Object.defineProperty(_c,"__esModule",{value:!0});_c.ContentAssist=void 0;var YR=Ma(),XR=Ae(),xx=function(){function t(){}return t.prototype.initContentAssist=function(){},t.prototype.computeContentAssist=function(e,r){var n=this.gastProductionsCache[e];if((0,XR.isUndefined)(n))throw Error("Rule ->"+e+"<- does not exist in this grammar.");return(0,YR.nextPossibleTokensAfter)([n],r,this.tokenMatcher,this.maxLookahead)},t.prototype.getNextPossibleTokenTypes=function(e){var r=(0,XR.first)(e.ruleStack),n=this.getGAstProductions(),i=n[r],o=new YR.NextAfterTokenWalker(i,e).startWalking();return o},t}();_c.ContentAssist=xx});var oA=E(Cc=>{"use strict";Object.defineProperty(Cc,"__esModule",{value:!0});Cc.GastRecorder=void 0;var fr=Ae(),An=cr(),Ix=Na(),tA=Po(),rA=fi(),Mx=mr(),Lx=fc(),Ac={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(Ac);var QR=!0,ZR=Math.pow(2,Lx.BITS_FOR_OCCURRENCE_IDX)-1,nA=(0,rA.createToken)({name:"RECORDING_PHASE_TOKEN",pattern:Ix.Lexer.NA});(0,tA.augmentTokenTypes)([nA]);var iA=(0,rA.createTokenInstance)(nA,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(iA);var $x={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},qx=function(){function t(){}return t.prototype.initGastRecorder=function(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1},t.prototype.enableRecording=function(){var e=this;this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",function(){for(var r=function(i){var o=i>0?i:"";e["CONSUME"+o]=function(a,s){return this.consumeInternalRecord(a,i,s)},e["SUBRULE"+o]=function(a,s){return this.subruleInternalRecord(a,i,s)},e["OPTION"+o]=function(a){return this.optionInternalRecord(a,i)},e["OR"+o]=function(a){return this.orInternalRecord(a,i)},e["MANY"+o]=function(a){this.manyInternalRecord(i,a)},e["MANY_SEP"+o]=function(a){this.manySepFirstInternalRecord(i,a)},e["AT_LEAST_ONE"+o]=function(a){this.atLeastOneInternalRecord(i,a)},e["AT_LEAST_ONE_SEP"+o]=function(a){this.atLeastOneSepFirstInternalRecord(i,a)}},n=0;n<10;n++)r(n);e.consume=function(i,o,a){return this.consumeInternalRecord(o,i,a)},e.subrule=function(i,o,a){return this.subruleInternalRecord(o,i,a)},e.option=function(i,o){return this.optionInternalRecord(o,i)},e.or=function(i,o){return this.orInternalRecord(o,i)},e.many=function(i,o){this.manyInternalRecord(i,o)},e.atLeastOne=function(i,o){this.atLeastOneInternalRecord(i,o)},e.ACTION=e.ACTION_RECORD,e.BACKTRACK=e.BACKTRACK_RECORD,e.LA=e.LA_RECORD})},t.prototype.disableRecording=function(){var e=this;this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",function(){for(var r=0;r<10;r++){var n=r>0?r:"";delete e["CONSUME"+n],delete e["SUBRULE"+n],delete e["OPTION"+n],delete e["OR"+n],delete e["MANY"+n],delete e["MANY_SEP"+n],delete e["AT_LEAST_ONE"+n],delete e["AT_LEAST_ONE_SEP"+n]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})},t.prototype.ACTION_RECORD=function(e){},t.prototype.BACKTRACK_RECORD=function(e,r){return function(){return!0}},t.prototype.LA_RECORD=function(e){return Mx.END_OF_FILE},t.prototype.topLevelRuleRecord=function(e,r){try{var n=new An.Rule({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(i){if(i.KNOWN_RECORDER_ERROR!==!0)try{i.message=i.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw i}throw i}},t.prototype.optionInternalRecord=function(e,r){return Ga.call(this,An.Option,e,r)},t.prototype.atLeastOneInternalRecord=function(e,r){Ga.call(this,An.RepetitionMandatory,r,e)},t.prototype.atLeastOneSepFirstInternalRecord=function(e,r){Ga.call(this,An.RepetitionMandatoryWithSeparator,r,e,QR)},t.prototype.manyInternalRecord=function(e,r){Ga.call(this,An.Repetition,r,e)},t.prototype.manySepFirstInternalRecord=function(e,r){Ga.call(this,An.RepetitionWithSeparator,r,e,QR)},t.prototype.orInternalRecord=function(e,r){return Fx.call(this,e,r)},t.prototype.subruleInternalRecord=function(e,r,n){if(Rc(r),!e||(0,fr.has)(e,"ruleName")===!1){var i=new Error("<SUBRULE"+eA(r)+"> argument is invalid"+(" expecting a Parser method reference but got: <"+JSON.stringify(e)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw i.KNOWN_RECORDER_ERROR=!0,i}var o=(0,fr.peek)(this.recordingProdStack),a=e.ruleName,s=new An.NonTerminal({idx:r,nonTerminalName:a,label:n?.LABEL,referencedRule:void 0});return o.definition.push(s),this.outputCst?$x:Ac},t.prototype.consumeInternalRecord=function(e,r,n){if(Rc(r),!(0,tA.hasShortKeyProperty)(e)){var i=new Error("<CONSUME"+eA(r)+"> argument is invalid"+(" expecting a TokenType reference but got: <"+JSON.stringify(e)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw i.KNOWN_RECORDER_ERROR=!0,i}var o=(0,fr.peek)(this.recordingProdStack),a=new An.Terminal({idx:r,terminalType:e,label:n?.LABEL});return o.definition.push(a),iA},t}();Cc.GastRecorder=qx;function Ga(t,e,r,n){n===void 0&&(n=!1),Rc(r);var i=(0,fr.peek)(this.recordingProdStack),o=(0,fr.isFunction)(e)?e:e.DEF,a=new t({definition:[],idx:r});return n&&(a.separator=e.SEP),(0,fr.has)(e,"MAX_LOOKAHEAD")&&(a.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(a),o.call(this),i.definition.push(a),this.recordingProdStack.pop(),Ac}function Fx(t,e){var r=this;Rc(e);var n=(0,fr.peek)(this.recordingProdStack),i=(0,fr.isArray)(t)===!1,o=i===!1?t:t.DEF,a=new An.Alternation({definition:[],idx:e,ignoreAmbiguities:i&&t.IGNORE_AMBIGUITIES===!0});(0,fr.has)(t,"MAX_LOOKAHEAD")&&(a.maxLookahead=t.MAX_LOOKAHEAD);var s=(0,fr.some)(o,function(u){return(0,fr.isFunction)(u.GATE)});return a.hasPredicates=s,n.definition.push(a),(0,fr.forEach)(o,function(u){var c=new An.Alternative({definition:[]});a.definition.push(c),(0,fr.has)(u,"IGNORE_AMBIGUITIES")?c.ignoreAmbiguities=u.IGNORE_AMBIGUITIES:(0,fr.has)(u,"GATE")&&(c.ignoreAmbiguities=!0),r.recordingProdStack.push(c),u.ALT.call(r),r.recordingProdStack.pop()}),Ac}function eA(t){return t===0?"":""+t}function Rc(t){if(t<0||t>ZR){var e=new Error("Invalid DSL Method idx value: <"+t+`>
	`+("Idx value must be a none negative value smaller than "+(ZR+1)));throw e.KNOWN_RECORDER_ERROR=!0,e}}});var sA=E(bc=>{"use strict";Object.defineProperty(bc,"__esModule",{value:!0});bc.PerformanceTracer=void 0;var aA=Ae(),jx=mr(),Gx=function(){function t(){}return t.prototype.initPerformanceTracer=function(e){if((0,aA.has)(e,"traceInitPerf")){var r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:1/0,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=jx.DEFAULT_PARSER_CONFIG.traceInitPerf;this.traceInitIndent=-1},t.prototype.TRACE_INIT=function(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;var n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(n+"--> <"+e+">");var i=(0,aA.timer)(r),o=i.time,a=i.value,s=o>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(n+"<-- <"+e+"> time: "+o+"ms"),this.traceInitIndent--,a}else return r()},t}();bc.PerformanceTracer=Gx});var uA=E(Ec=>{"use strict";Object.defineProperty(Ec,"__esModule",{value:!0});Ec.applyMixins=void 0;function Ux(t,e){e.forEach(function(r){var n=r.prototype;Object.getOwnPropertyNames(n).forEach(function(i){if(i!=="constructor"){var o=Object.getOwnPropertyDescriptor(n,i);o&&(o.get||o.set)?Object.defineProperty(t.prototype,i,o):t.prototype[i]=r.prototype[i]}})})}Ec.applyMixins=Ux});var mr=E(Je=>{"use strict";var dA=Je&&Je.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(Je,"__esModule",{value:!0});Je.EmbeddedActionsParser=Je.CstParser=Je.Parser=Je.EMPTY_ALT=Je.ParserDefinitionErrorType=Je.DEFAULT_RULE_CONFIG=Je.DEFAULT_PARSER_CONFIG=Je.END_OF_FILE=void 0;var ir=Ae(),Hx=V_(),cA=fi(),fA=xa(),lA=_R(),Wx=hh(),Kx=NR(),Bx=qR(),zx=jR(),Vx=UR(),Yx=BR(),Xx=VR(),Jx=JR(),Qx=oA(),Zx=sA(),eI=uA();Je.END_OF_FILE=(0,cA.createTokenInstance)(cA.EOF,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Je.END_OF_FILE);Je.DEFAULT_PARSER_CONFIG=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:fA.defaultParserErrorProvider,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1});Je.DEFAULT_RULE_CONFIG=Object.freeze({recoveryValueFunc:function(){},resyncEnabled:!0});var tI;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS"})(tI=Je.ParserDefinitionErrorType||(Je.ParserDefinitionErrorType={}));function rI(t){return t===void 0&&(t=void 0),function(){return t}}Je.EMPTY_ALT=rI;var Pc=function(){function t(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;var n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),(0,ir.has)(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=(0,ir.has)(r,"skipValidations")?r.skipValidations:Je.DEFAULT_PARSER_CONFIG.skipValidations}return t.performSelfAnalysis=function(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")},t.prototype.performSelfAnalysis=function(){var e=this;this.TRACE_INIT("performSelfAnalysis",function(){var r;e.selfAnalysisDone=!0;var n=e.className;e.TRACE_INIT("toFastProps",function(){(0,ir.toFastProperties)(e)}),e.TRACE_INIT("Grammar Recording",function(){try{e.enableRecording(),(0,ir.forEach)(e.definedRulesNames,function(o){var a=e[o],s=a.originalGrammarAction,u=void 0;e.TRACE_INIT(o+" Rule",function(){u=e.topLevelRuleRecord(o,s)}),e.gastProductionsCache[o]=u})}finally{e.disableRecording()}});var i=[];if(e.TRACE_INIT("Grammar Resolving",function(){i=(0,lA.resolveGrammar)({rules:(0,ir.values)(e.gastProductionsCache)}),e.definitionErrors=e.definitionErrors.concat(i)}),e.TRACE_INIT("Grammar Validations",function(){if((0,ir.isEmpty)(i)&&e.skipValidations===!1){var o=(0,lA.validateGrammar)({rules:(0,ir.values)(e.gastProductionsCache),maxLookahead:e.maxLookahead,tokenTypes:(0,ir.values)(e.tokensMap),errMsgProvider:fA.defaultGrammarValidatorErrorProvider,grammarName:n});e.definitionErrors=e.definitionErrors.concat(o)}}),(0,ir.isEmpty)(e.definitionErrors)&&(e.recoveryEnabled&&e.TRACE_INIT("computeAllProdsFollows",function(){var o=(0,Hx.computeAllProdsFollows)((0,ir.values)(e.gastProductionsCache));e.resyncFollows=o}),e.TRACE_INIT("ComputeLookaheadFunctions",function(){e.preComputeLookaheadFunctions((0,ir.values)(e.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!(0,ir.isEmpty)(e.definitionErrors))throw r=(0,ir.map)(e.definitionErrors,function(o){return o.message}),new Error(`Parser Definition Errors detected:
 `+r.join(`
-------------------------------
`))})},t.DEFER_DEFINITION_ERRORS_HANDLING=!1,t}();Je.Parser=Pc;(0,eI.applyMixins)(Pc,[Wx.Recoverable,Kx.LooksAhead,Bx.TreeBuilder,zx.LexerAdapter,Yx.RecognizerEngine,Vx.RecognizerApi,Xx.ErrorHandler,Jx.ContentAssist,Qx.GastRecorder,Zx.PerformanceTracer]);var nI=function(t){dA(e,t);function e(r,n){n===void 0&&(n=Je.DEFAULT_PARSER_CONFIG);var i=this,o=(0,ir.cloneObj)(n);return o.outputCst=!0,i=t.call(this,r,o)||this,i}return e}(Pc);Je.CstParser=nI;var iI=function(t){dA(e,t);function e(r,n){n===void 0&&(n=Je.DEFAULT_PARSER_CONFIG);var i=this,o=(0,ir.cloneObj)(n);return o.outputCst=!1,i=t.call(this,r,o)||this,i}return e}(Pc);Je.EmbeddedActionsParser=iI});var hA=E(kc=>{"use strict";Object.defineProperty(kc,"__esModule",{value:!0});kc.createSyntaxDiagramsCode=void 0;var pA=Fp();function oI(t,e){var r=e===void 0?{}:e,n=r.resourceBase,i=n===void 0?"https://unpkg.com/chevrotain@"+pA.VERSION+"/diagrams/":n,o=r.css,a=o===void 0?"https://unpkg.com/chevrotain@"+pA.VERSION+"/diagrams/diagrams.css":o,s=`
<!-- This is a generated file -->
<!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    background-color: hsl(30, 20%, 95%)
  }
</style>

`,u=`
<link rel='stylesheet' href='`+a+`'>
`,c=`
<script src='`+i+`vendor/railroad-diagrams.js'><\/script>
<script src='`+i+`src/diagrams_builder.js'><\/script>
<script src='`+i+`src/diagrams_behavior.js'><\/script>
<script src='`+i+`src/main.js'><\/script>
`,l=`
<div id="diagrams" align="center"></div>    
`,f=`
<script>
    window.serializedGrammar = `+JSON.stringify(t,null,"  ")+`;
<\/script>
`,y=`
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
<\/script>
`;return s+u+c+l+f+y}kc.createSyntaxDiagramsCode=oI});var Sc=E(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.Parser=H.createSyntaxDiagramsCode=H.clearCache=H.GAstVisitor=H.serializeProduction=H.serializeGrammar=H.Terminal=H.Rule=H.RepetitionWithSeparator=H.RepetitionMandatoryWithSeparator=H.RepetitionMandatory=H.Repetition=H.Option=H.NonTerminal=H.Alternative=H.Alternation=H.defaultLexerErrorProvider=H.NoViableAltException=H.NotAllInputParsedException=H.MismatchedTokenException=H.isRecognitionException=H.EarlyExitException=H.defaultParserErrorProvider=H.tokenName=H.tokenMatcher=H.tokenLabel=H.EOF=H.createTokenInstance=H.createToken=H.LexerDefinitionErrorType=H.Lexer=H.EMPTY_ALT=H.ParserDefinitionErrorType=H.EmbeddedActionsParser=H.CstParser=H.VERSION=void 0;var aI=Fp();Object.defineProperty(H,"VERSION",{enumerable:!0,get:function(){return aI.VERSION}});var Nc=mr();Object.defineProperty(H,"CstParser",{enumerable:!0,get:function(){return Nc.CstParser}});Object.defineProperty(H,"EmbeddedActionsParser",{enumerable:!0,get:function(){return Nc.EmbeddedActionsParser}});Object.defineProperty(H,"ParserDefinitionErrorType",{enumerable:!0,get:function(){return Nc.ParserDefinitionErrorType}});Object.defineProperty(H,"EMPTY_ALT",{enumerable:!0,get:function(){return Nc.EMPTY_ALT}});var mA=Na();Object.defineProperty(H,"Lexer",{enumerable:!0,get:function(){return mA.Lexer}});Object.defineProperty(H,"LexerDefinitionErrorType",{enumerable:!0,get:function(){return mA.LexerDefinitionErrorType}});var Io=fi();Object.defineProperty(H,"createToken",{enumerable:!0,get:function(){return Io.createToken}});Object.defineProperty(H,"createTokenInstance",{enumerable:!0,get:function(){return Io.createTokenInstance}});Object.defineProperty(H,"EOF",{enumerable:!0,get:function(){return Io.EOF}});Object.defineProperty(H,"tokenLabel",{enumerable:!0,get:function(){return Io.tokenLabel}});Object.defineProperty(H,"tokenMatcher",{enumerable:!0,get:function(){return Io.tokenMatcher}});Object.defineProperty(H,"tokenName",{enumerable:!0,get:function(){return Io.tokenName}});var sI=xa();Object.defineProperty(H,"defaultParserErrorProvider",{enumerable:!0,get:function(){return sI.defaultParserErrorProvider}});var Ua=Do();Object.defineProperty(H,"EarlyExitException",{enumerable:!0,get:function(){return Ua.EarlyExitException}});Object.defineProperty(H,"isRecognitionException",{enumerable:!0,get:function(){return Ua.isRecognitionException}});Object.defineProperty(H,"MismatchedTokenException",{enumerable:!0,get:function(){return Ua.MismatchedTokenException}});Object.defineProperty(H,"NotAllInputParsedException",{enumerable:!0,get:function(){return Ua.NotAllInputParsedException}});Object.defineProperty(H,"NoViableAltException",{enumerable:!0,get:function(){return Ua.NoViableAltException}});var uI=Yp();Object.defineProperty(H,"defaultLexerErrorProvider",{enumerable:!0,get:function(){return uI.defaultLexerErrorProvider}});var Cn=cr();Object.defineProperty(H,"Alternation",{enumerable:!0,get:function(){return Cn.Alternation}});Object.defineProperty(H,"Alternative",{enumerable:!0,get:function(){return Cn.Alternative}});Object.defineProperty(H,"NonTerminal",{enumerable:!0,get:function(){return Cn.NonTerminal}});Object.defineProperty(H,"Option",{enumerable:!0,get:function(){return Cn.Option}});Object.defineProperty(H,"Repetition",{enumerable:!0,get:function(){return Cn.Repetition}});Object.defineProperty(H,"RepetitionMandatory",{enumerable:!0,get:function(){return Cn.RepetitionMandatory}});Object.defineProperty(H,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return Cn.RepetitionMandatoryWithSeparator}});Object.defineProperty(H,"RepetitionWithSeparator",{enumerable:!0,get:function(){return Cn.RepetitionWithSeparator}});Object.defineProperty(H,"Rule",{enumerable:!0,get:function(){return Cn.Rule}});Object.defineProperty(H,"Terminal",{enumerable:!0,get:function(){return Cn.Terminal}});var gA=cr();Object.defineProperty(H,"serializeGrammar",{enumerable:!0,get:function(){return gA.serializeGrammar}});Object.defineProperty(H,"serializeProduction",{enumerable:!0,get:function(){return gA.serializeProduction}});var cI=ko();Object.defineProperty(H,"GAstVisitor",{enumerable:!0,get:function(){return cI.GAstVisitor}});function lI(){console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`)}H.clearCache=lI;var dI=hA();Object.defineProperty(H,"createSyntaxDiagramsCode",{enumerable:!0,get:function(){return dI.createSyntaxDiagramsCode}});var fI=function(){function t(){throw new Error(`The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.	
See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0`)}return t}();H.Parser=fI});var TA=E(xr=>{"use strict";Object.defineProperty(xr,"__esModule",{value:!0});xr.RootCstNodeImpl=xr.CompositeCstNodeImpl=xr.LeafCstNodeImpl=xr.AbstractCstNode=xr.CstNodeBuilder=void 0;var yA=Xi(),pI=oo(),vA=et(),_h=class{constructor(){this.nodeStack=[]}get current(){return this.nodeStack[this.nodeStack.length-1]}buildRootNode(e){return this.rootNode=new wc(e),this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){let r=new Ka;return r.feature=e,r.root=this.rootNode,this.current.children.push(r),this.nodeStack.push(r),r}buildLeafNode(e,r){let n=new Wa(e.startOffset,e.image.length,(0,vA.tokenToRange)(e),e.tokenType,!1);return n.feature=r,n.root=this.rootNode,this.current.children.push(n),n}removeNode(e){let r=e.parent;if(r){let n=r.children.indexOf(e);n>=0&&r.children.splice(n,1)}}construct(e){let r=this.current;typeof e.$type=="string"&&(this.current.element=e),e.$cstNode=r;let n=this.nodeStack.pop();n?.children.length===0&&this.removeNode(n)}addHiddenTokens(e){if(e)for(let r of e){let n=new Wa(r.startOffset,r.image.length,(0,vA.tokenToRange)(r),r.tokenType,!0);n.root=this.rootNode,this.addHiddenToken(this.rootNode,n)}}addHiddenToken(e,r){let{offset:n,end:i}=r;for(let o=0;o<e.children.length;o++){let a=e.children[o],{offset:s,end:u}=a;if((0,pI.isCompositeCstNode)(a)&&n>s&&i<u){this.addHiddenToken(a,r);return}else if(i<=s){e.children.splice(o,0,r);return}}e.children.push(r)}};xr.CstNodeBuilder=_h;var Ha=class{get hidden(){return!1}get element(){var e,r;let n=typeof((e=this._element)===null||e===void 0?void 0:e.$type)=="string"?this._element:(r=this.parent)===null||r===void 0?void 0:r.element;if(!n)throw new Error("This node has no associated AST element");return n}set element(e){this._element=e}get text(){return this.root.fullText.substring(this.offset,this.end)}};xr.AbstractCstNode=Ha;var Wa=class extends Ha{constructor(e,r,n,i,o=!1){super(),this._hidden=o,this._offset=e,this._tokenType=i,this._length=r,this._range=n}get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}};xr.LeafCstNodeImpl=Wa;var Ka=class extends Ha{constructor(){super(...arguments),this.children=new Ba(this)}get offset(){var e,r;return(r=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&r!==void 0?r:0}get length(){return this.end-this.offset}get end(){var e,r;return(r=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&r!==void 0?r:0}get range(){let e=this.firstNonHiddenNode,r=this.lastNonHiddenNode;if(e&&r){if(this._rangeCache===void 0){let{range:n}=e,{range:i}=r;this._rangeCache={start:n.start,end:i.end.line<n.start.line?n.start:i.end}}return this._rangeCache}else return{start:yA.Position.create(0,0),end:yA.Position.create(0,0)}}get firstNonHiddenNode(){for(let e of this.children)if(!e.hidden)return e;return this.children[0]}get lastNonHiddenNode(){for(let e=this.children.length-1;e>=0;e--){let r=this.children[e];if(!r.hidden)return r}return this.children[this.children.length-1]}};xr.CompositeCstNodeImpl=Ka;var Ba=class extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,Ba.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,r,...n){return this.addParents(n),super.splice(e,r,...n)}addParents(e){for(let r of e)r.parent=this.parent}},wc=class extends Ka{constructor(e){super(),this._text="",this._text=e??""}get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}};xr.RootCstNodeImpl=wc});var Va=E(pt=>{"use strict";Object.defineProperty(pt,"__esModule",{value:!0});pt.isTokenTypeDictionary=pt.isIMultiModeLexerDefinition=pt.isTokenTypeArray=pt.LangiumCompletionParser=pt.LangiumParserErrorMessageProvider=pt.LangiumParser=pt.AbstractLangiumParser=pt.DatatypeSymbol=void 0;var Oc=Sc(),Dc=ze(),_A=Lt(),RA=Re(),hI=TA();pt.DatatypeSymbol=Symbol("Datatype");function Rh(t){return t.$type===pt.DatatypeSymbol}var za=class{constructor(e,r){this._unorderedGroups=new Map,this.lexer=new Oc.Lexer(bA(r)?Object.values(r):r),this.wrapper=new bh(r,e.parser.ParserConfig)}alternatives(e,r){this.wrapper.wrapOr(e,r)}optional(e,r){this.wrapper.wrapOption(e,r)}many(e,r){this.wrapper.wrapMany(e,r)}atLeastOne(e,r){this.wrapper.wrapAtLeastOne(e,r)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}};pt.AbstractLangiumParser=za;var Ah=class extends za{constructor(e,r){super(e,r),this.nodeBuilder=new hI.CstNodeBuilder,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}get current(){return this.stack[this.stack.length-1]}rule(e,r){let n=e.fragment?void 0:(0,_A.isDataTypeRule)(e)?pt.DatatypeSymbol:(0,_A.getTypeName)(e),i=this.wrapper.DEFINE_RULE(e.name,this.startImplementation(n,r).bind(this));return e.entry&&(this.mainRule=i),i}parse(e){this.nodeBuilder.buildRootNode(e);let r=this.lexer.tokenize(e);this.wrapper.input=r.tokens;let n=this.mainRule.call(this.wrapper);return this.nodeBuilder.addHiddenTokens(r.groups.hidden),this.unorderedGroups.clear(),{value:n,lexerErrors:r.errors,parserErrors:this.wrapper.errors}}startImplementation(e,r){return n=>{if(!this.isRecording()){let o={$type:e};this.stack.push(o),e===pt.DatatypeSymbol&&(o.value="")}let i;try{i=r(n)}catch{i=void 0}return!this.isRecording()&&i===void 0&&(i=this.construct()),i}}consume(e,r,n){let i=this.wrapper.wrapConsume(e,r);if(!this.isRecording()){let o=this.nodeBuilder.buildLeafNode(i,n),{assignment:a,isCrossRef:s}=this.getAssignment(n),u=this.current;if(a){let c=(0,Dc.isKeyword)(n)?i.image:this.converter.convert(i.image,o);this.assign(a.operator,a.feature,c,o,s)}else if(Rh(u)){let c=i.image;(0,Dc.isKeyword)(n)||(c=this.converter.convert(c,o).toString()),u.value+=c}}}subrule(e,r,n,i){let o;this.isRecording()||(o=this.nodeBuilder.buildCompositeNode(n));let a=this.wrapper.wrapSubrule(e,r,i);this.isRecording()||this.performSubruleAssignment(a,n,o)}performSubruleAssignment(e,r,n){let{assignment:i,isCrossRef:o}=this.getAssignment(r);if(i&&n)this.assign(i.operator,i.feature,e,n,o);else if(!i){let a=this.current;if(Rh(a))a.value+=e.toString();else{let s=e.$type,u=this.assignWithoutOverride(e,a);s&&(u.$type=s);let c=u;this.stack.pop(),this.stack.push(c)}}}action(e,r){if(!this.isRecording()){let n=this.current;if(!n.$cstNode&&r.feature&&r.operator){n=this.construct(!1);let o=n.$cstNode.feature;this.nodeBuilder.buildCompositeNode(o)}let i={$type:e};this.stack.pop(),this.stack.push(i),r.feature&&r.operator&&this.assign(r.operator,r.feature,n,n.$cstNode,!1)}}construct(e=!0){if(this.isRecording())return;let r=this.current;return(0,RA.linkContentToContainer)(r),this.nodeBuilder.construct(r),e&&this.stack.pop(),Rh(r)?this.converter.convert(r.value,r.$cstNode):(this.assignMandatoryProperties(r),r)}assignMandatoryProperties(e){let r=this.astReflection.getTypeMetaData(e.$type);for(let n of r.mandatory){let i=e[n.name];n.type==="array"&&!Array.isArray(i)?e[n.name]=[]:n.type==="boolean"&&i===void 0&&(e[n.name]=!1)}}getAssignment(e){if(!this.assignmentMap.has(e)){let r=(0,RA.getContainerOfType)(e,Dc.isAssignment);this.assignmentMap.set(e,{assignment:r,isCrossRef:r?(0,Dc.isCrossReference)(r.terminal):!1})}return this.assignmentMap.get(e)}assign(e,r,n,i,o){let a=this.current,s;switch(o&&typeof n=="string"?s=this.linker.buildReference(a,r,i,n):s=n,e){case"=":{a[r]=s;break}case"?=":{a[r]=!0;break}case"+=":Array.isArray(a[r])||(a[r]=[]),a[r].push(s)}}assignWithoutOverride(e,r){for(let[n,i]of Object.entries(r))e[n]===void 0&&(e[n]=i);return e}get definitionErrors(){return this.wrapper.definitionErrors}};pt.LangiumParser=Ah;var xc=class{buildMismatchTokenMessage({expected:e,actual:r}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${r.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}buildNoViableAltMessage(e){return Oc.defaultParserErrorProvider.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return Oc.defaultParserErrorProvider.buildEarlyExitMessage(e)}};pt.LangiumParserErrorMessageProvider=xc;var Ch=class extends za{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();let r=this.lexer.tokenize(e);return this.tokens=r.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,r){let n=this.wrapper.DEFINE_RULE(e.name,this.startImplementation(r).bind(this));return e.entry&&(this.mainRule=n),n}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return r=>{let n=this.keepStackSize();try{e(r)}finally{this.resetStackSize(n)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){let e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,r,n){this.wrapper.wrapConsume(e,r),this.isRecording()||(this.lastElementStack=[...this.elementStack,n],this.nextTokenIndex=this.currIdx+1)}subrule(e,r,n,i){this.before(n),this.wrapper.wrapSubrule(e,r,i),this.after(n)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){let r=this.elementStack.lastIndexOf(e);r>=0&&this.elementStack.splice(r)}}get currIdx(){return this.wrapper.currIdx}};pt.LangiumCompletionParser=Ch;var mI={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new xc},bh=class extends Oc.EmbeddedActionsParser{constructor(e,r){super(e,Object.assign(Object.assign({},mI),r))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,r){return this.RULE(e,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,r){return this.consume(e,r)}wrapSubrule(e,r,n){return this.subrule(e,r,{ARGS:[n]})}wrapOr(e,r){this.or(e,r)}wrapOption(e,r){this.option(e,r)}wrapMany(e,r){this.many(e,r)}wrapAtLeastOne(e,r){this.atLeastOne(e,r)}};function AA(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}pt.isTokenTypeArray=AA;function CA(t){return t&&"modes"in t&&"defaultMode"in t}pt.isIMultiModeLexerDefinition=CA;function bA(t){return!AA(t)&&!CA(t)}pt.isTokenTypeDictionary=bA});var EA=E(Mo=>{"use strict";Object.defineProperty(Mo,"__esModule",{value:!0});Mo.assertUnreachable=Mo.ErrorWithLocation=void 0;var Eh=class extends Error{constructor(e,r){super(e?`${r} at ${e.range.start.line}:${e.range.start.character}`:r)}};Mo.ErrorWithLocation=Eh;function gI(t){throw new Error("Error! The input value was not handled.")}Mo.assertUnreachable=gI});var kh=E(Mc=>{"use strict";Object.defineProperty(Mc,"__esModule",{value:!0});Mc.createParser=void 0;var PA=Sc(),qe=ze(),kA=Va(),Ya=EA(),yI=bt(),NA=Lt(),SA=Et();function vI(t,e,r){let n=kI(r);return TI({parser:e,tokens:n,rules:new Map,ruleNames:new Map},t),e}Mc.createParser=vI;function TI(t,e){let r=(0,SA.getAllReachableRules)(e,!1),n=(0,yI.stream)(e.rules).filter(qe.isParserRule).filter(i=>r.has(i));for(let i of n){let o=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});o.rules.set(i.name,t.parser.rule(i,Mi(o,i.definition)))}}function Mi(t,e,r=!1){let n;if((0,qe.isKeyword)(e))n=PI(t,e);else if((0,qe.isAction)(e))n=_I(t,e);else if((0,qe.isAssignment)(e))n=Mi(t,e.terminal);else if((0,qe.isCrossReference)(e))n=wA(t,e);else if((0,qe.isRuleCall)(e))n=RI(t,e);else if((0,qe.isAlternatives)(e))n=CI(t,e);else if((0,qe.isUnorderedGroup)(e))n=bI(t,e);else if((0,qe.isGroup)(e))n=EI(t,e);else throw new Ya.ErrorWithLocation(e.$cstNode,`Unexpected element type: ${e.$type}`);return OA(t,r?void 0:Ic(e),n,e.cardinality)}function _I(t,e){let r=(0,NA.getTypeName)(e);return()=>t.parser.action(r,e)}function RI(t,e){let r=e.rule.ref;if((0,qe.isParserRule)(r)){let n=t.subrule++,i=e.arguments.length>0?AI(r,e.arguments):()=>({});return o=>t.parser.subrule(n,xA(t,r),e,i(o))}else if((0,qe.isTerminalRule)(r)){let n=t.consume++,i=Ph(t,r.name);return()=>t.parser.consume(n,i,e)}else if(r)(0,Ya.assertUnreachable)(r);else throw new Ya.ErrorWithLocation(e.$cstNode,`Undefined rule type: ${e.$type}`)}function AI(t,e){let r=e.map(n=>Kn(n.value));return n=>{let i={};for(let o=0;o<r.length;o++){let a=t.parameters[o],s=r[o];i[a.name]=s(n)}return i}}function Kn(t){if((0,qe.isDisjunction)(t)){let e=Kn(t.left),r=Kn(t.right);return n=>e(n)||r(n)}else if((0,qe.isConjunction)(t)){let e=Kn(t.left),r=Kn(t.right);return n=>e(n)&&r(n)}else if((0,qe.isNegation)(t)){let e=Kn(t.value);return r=>!e(r)}else if((0,qe.isParameterReference)(t)){let e=t.parameter.ref.name;return r=>r!==void 0&&r[e]===!0}else if((0,qe.isLiteralCondition)(t)){let e=!!t.true;return()=>e}(0,Ya.assertUnreachable)(t)}function CI(t,e){if(e.elements.length===1)return Mi(t,e.elements[0]);{let r=[];for(let i of e.elements){let o={ALT:Mi(t,i,!0)},a=Ic(i);a&&(o.GATE=Kn(a)),r.push(o)}let n=t.or++;return i=>t.parser.alternatives(n,r.map(o=>{let a={ALT:()=>o.ALT(i)},s=o.GATE;return s&&(a.GATE=()=>s(i)),a}))}}function bI(t,e){if(e.elements.length===1)return Mi(t,e.elements[0]);let r=[];for(let s of e.elements){let u={ALT:Mi(t,s,!0)},c=Ic(s);c&&(u.GATE=Kn(c)),r.push(u)}let n=t.or++,i=(s,u)=>{let c=u.getRuleStack().join("-");return`uGroup_${s}_${c}`},o=s=>t.parser.alternatives(n,r.map((u,c)=>{let l={ALT:()=>!0},f=t.parser;l.ALT=()=>{if(u.ALT(s),!f.isRecording()){let _=i(n,f);f.unorderedGroups.get(_)||f.unorderedGroups.set(_,[]);let h=f.unorderedGroups.get(_);typeof h?.[c]>"u"&&(h[c]=!0)}};let y=u.GATE;return y?l.GATE=()=>y(s):l.GATE=()=>{let _=f.unorderedGroups.get(i(n,f));return!_?.[c]},l})),a=OA(t,Ic(e),o,"*");return s=>{a(s),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(n,t.parser))}}function EI(t,e){let r=e.elements.map(n=>Mi(t,n));return n=>r.forEach(i=>i(n))}function Ic(t){if((0,qe.isGroup)(t))return t.guardCondition}function wA(t,e,r=e.terminal){if(r)if((0,qe.isRuleCall)(r)&&(0,qe.isParserRule)(r.rule.ref)){let n=t.subrule++;return i=>t.parser.subrule(n,xA(t,r.rule.ref),e,i)}else if((0,qe.isRuleCall)(r)&&(0,qe.isTerminalRule)(r.rule.ref)){let n=t.consume++,i=Ph(t,r.rule.ref.name);return()=>t.parser.consume(n,i,e)}else if((0,qe.isKeyword)(r)){let n=t.consume++,i=Ph(t,r.value);return i.name=DA(i.name),()=>t.parser.consume(n,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);let n=(0,SA.findNameAssignment)(e.type.ref),i=n?.terminal;if(!i)throw new Error("Could not find name assignment for type: "+(0,NA.getTypeName)(e.type.ref));return wA(t,e,i)}}var DA=t=>t.endsWith(":KW")?t:t+":KW";function PI(t,e){let r=t.consume++,n=t.tokens[e.value];if(!n)throw new Error("Could not find token for keyword: "+e.value);return n.name=DA(n.name),()=>t.parser.consume(r,n,e)}function OA(t,e,r,n){let i=e&&Kn(e);if(!n)if(i){let o=t.or++;return a=>t.parser.alternatives(o,[{ALT:()=>r(a),GATE:()=>i(a)},{ALT:(0,PA.EMPTY_ALT)(),GATE:()=>!i(a)}])}else return r;if(n==="*"){let o=t.many++;return a=>t.parser.many(o,{DEF:()=>r(a),GATE:i?()=>i(a):void 0})}else if(n==="+"){let o=t.many++;if(i){let a=t.or++;return s=>t.parser.alternatives(a,[{ALT:()=>t.parser.atLeastOne(o,{DEF:()=>r(s)}),GATE:()=>i(s)},{ALT:(0,PA.EMPTY_ALT)(),GATE:()=>!i(s)}])}else return a=>t.parser.atLeastOne(o,{DEF:()=>r(a)})}else if(n==="?"){let o=t.optional++;return a=>t.parser.optional(o,{DEF:()=>r(a),GATE:i?()=>i(a):void 0})}else(0,Ya.assertUnreachable)(n)}function kI(t){if((0,kA.isTokenTypeDictionary)(t))return t;let e=(0,kA.isIMultiModeLexerDefinition)(t)?Object.values(t.modes).flat():t,r={};return e.forEach(n=>r[n.name]=n),r}function xA(t,e){let r=NI(t,e),n=t.rules.get(r);if(!n)throw new Error(`Rule "${r}" not found."`);return n}function NI(t,e){if((0,qe.isParserRule)(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let r=e,n=r.$container,i=e.$type;for(;!(0,qe.isParserRule)(n);)((0,qe.isGroup)(n)||(0,qe.isAlternatives)(n)||(0,qe.isUnorderedGroup)(n))&&(i=n.elements.indexOf(r).toString()+":"+i),r=n,n=n.$container;return i=n.name+":"+i,t.ruleNames.set(e,i),i}}function Ph(t,e){let r=t.tokens[e];if(!r)throw new Error(`Token "${e}" not found."`);return r}});var IA=E(Lc=>{"use strict";Object.defineProperty(Lc,"__esModule",{value:!0});Lc.createCompletionParser=void 0;var SI=Va(),wI=kh();function DI(t){let e=t.Grammar,r=t.parser.TokenBuilder.buildTokens(e,{caseInsensitive:t.LanguageMetaData.caseInsensitive}),n=new SI.LangiumCompletionParser(t,r);return(0,wI.createParser)(e,n,r),n.finalize(),n}Lc.createCompletionParser=DI});var Nh=E(Lo=>{"use strict";Object.defineProperty(Lo,"__esModule",{value:!0});Lo.prepareLangiumParser=Lo.createLangiumParser=void 0;var OI=Va(),xI=kh();function II(t){let e=MA(t);return e.finalize(),e}Lo.createLangiumParser=II;function MA(t){let e=t.Grammar,r=t.parser.TokenBuilder.buildTokens(e,{caseInsensitive:t.LanguageMetaData.caseInsensitive}),n=new OI.LangiumParser(t,r);return(0,xI.createParser)(e,n,r)}Lo.prepareLangiumParser=MA});var Dh=E(qc=>{"use strict";Object.defineProperty(qc,"__esModule",{value:!0});qc.DefaultTokenBuilder=void 0;var MI=Sc(),Sh=ze(),LI=Lt(),$I=Re(),qI=Et(),$c=ho(),FI=bt(),wh=class{buildTokens(e,r){let n=(0,FI.stream)((0,qI.getAllReachableRules)(e,!1)),i=this.buildTerminalTokens(n),o=this.buildKeywordTokens(n,i,r);return i.forEach(a=>{let s=a.PATTERN;typeof s=="object"&&s&&"test"in s&&(0,$c.isWhitespaceRegExp)(s)?o.unshift(a):o.push(a)}),o}buildTerminalTokens(e){return e.filter(Sh.isTerminalRule).filter(r=>!r.fragment).map(r=>this.buildTerminalToken(r)).toArray()}buildTerminalToken(e){let r=(0,LI.terminalRegex)(e),n={name:e.name,PATTERN:new RegExp(r)};return e.hidden&&(n.GROUP=(0,$c.isWhitespaceRegExp)(r)?MI.Lexer.SKIPPED:"hidden"),n}buildKeywordTokens(e,r,n){return e.filter(Sh.isParserRule).flatMap(i=>(0,$I.streamAllContents)(i).filter(Sh.isKeyword)).distinct(i=>i.value).toArray().sort((i,o)=>o.value.length-i.value.length).map(i=>this.buildKeywordToken(i,r,!!n?.caseInsensitive))}buildKeywordToken(e,r,n){return{name:e.value,PATTERN:this.buildKeywordPattern(e,n),LONGER_ALT:this.findLongerAlt(e,r)}}buildKeywordPattern(e,r){return r?new RegExp((0,$c.getCaseInsensitivePattern)(e.value)):e.value}findLongerAlt(e,r){return r.reduce((n,i)=>{let o=i?.PATTERN;return o?.source&&(0,$c.partialMatches)("^"+o.source+"$",e.value)&&n.push(i),n},[])}};qc.DefaultTokenBuilder=wh});var Ih=E(Dt=>{"use strict";Object.defineProperty(Dt,"__esModule",{value:!0});Dt.convertBoolean=Dt.convertNumber=Dt.convertDate=Dt.convertBigint=Dt.convertInt=Dt.convertID=Dt.convertString=Dt.DefaultValueConverter=void 0;var LA=ze(),jI=Lt(),GI=Et(),Oh=class{convert(e,r){let n=r.feature;if((0,LA.isCrossReference)(n)&&(n=(0,GI.getCrossReferenceTerminal)(n)),(0,LA.isRuleCall)(n)){let i=n.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,r)}return e}runConverter(e,r,n){var i;switch(e.name.toUpperCase()){case"INT":return qA(r);case"STRING":return xh(r);case"ID":return $A(r);case"REGEXLITERAL":return xh(r)}switch((i=(0,jI.getRuleType)(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return GA(r);case"boolean":return UA(r);case"bigint":return FA(r);case"date":return jA(r);default:return r}}};Dt.DefaultValueConverter=Oh;function xh(t){return t.substring(1,t.length-1)}Dt.convertString=xh;function $A(t){return t.charAt(0)==="^"?t.substring(1):t}Dt.convertID=$A;function qA(t){return parseInt(t)}Dt.convertInt=qA;function FA(t){return BigInt(t)}Dt.convertBigint=FA;function jA(t){return new Date(t)}Dt.convertDate=jA;function GA(t){return Number(t)}Dt.convertNumber=GA;function UA(t){return t.toLowerCase()==="true"}Dt.convertBoolean=UA});var Lh=E(Fc=>{"use strict";Object.defineProperty(Fc,"__esModule",{value:!0});Fc.DefaultLinker=void 0;var UI=Ke(),Bn=Re(),HI=Kr(),HA=Si(),Mh=class{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,r=UI.CancellationToken.None){for(let n of(0,Bn.streamAst)(e.parseResult.value))await(0,HI.interruptAndCheck)(r),(0,Bn.streamReferences)(n).forEach(i=>this.doLink(i,e));e.state=HA.DocumentState.Linked}doLink(e,r){let n=e.reference;if(n._ref===void 0)try{let i=this.getCandidate(e);if((0,Bn.isLinkingError)(i))n._ref=i;else if(n._nodeDescription=i,this.langiumDocuments().hasDocument(i.documentUri)){let o=this.loadAstNode(i);n._ref=o??this.createLinkingError(e,i)}}catch(i){n._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${n.$refText}': ${i}`})}r.references.push(n)}unlink(e){for(let r of e.references)delete r._ref,delete r._nodeDescription;e.references=[]}getCandidate(e){let n=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return n??this.createLinkingError(e)}buildReference(e,r,n,i){let o=this,a={$refNode:n,$refText:i,get ref(){var s;if((0,Bn.isAstNode)(this._ref))return this._ref;if((0,Bn.isAstNodeDescription)(this._nodeDescription)){let u=o.loadAstNode(this._nodeDescription);this._ref=u??o.createLinkingError({reference:a,container:e,property:r},this._nodeDescription)}else if(this._ref===void 0){let u=o.getLinkedNode({reference:a,container:e,property:r});this._ref=(s=u.node)!==null&&s!==void 0?s:u.error,this._nodeDescription=u.descr}return(0,Bn.isAstNode)(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return(0,Bn.isLinkingError)(this._ref)?this._ref:void 0}};return a}getLinkedNode(e){try{let r=this.getCandidate(e);if((0,Bn.isLinkingError)(r))return{error:r};let n=this.loadAstNode(r);return n?{node:n,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${r}`})}}}loadAstNode(e){if(e.node)return e.node;let r=this.langiumDocuments().getOrCreateDocument(e.documentUri);return this.astNodeLocator.getAstNode(r,e.path)}createLinkingError(e,r){let n=(0,Bn.getDocument)(e.container);n.state<HA.DocumentState.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);let i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:r})}};Fc.DefaultLinker=Mh});var qh=E(Gc=>{"use strict";Object.defineProperty(Gc,"__esModule",{value:!0});Gc.DefaultJsonSerializer=void 0;var jc=Re(),$h=class{constructor(e){this.ignoreProperties=["$container","$containerProperty","$containerIndex","$document","$cstNode"],this.linker=e.references.Linker}serialize(e,r){return JSON.stringify(this.decycle(e,this.ignoreProperties),void 0,r)}deserialize(e){return this.revive(JSON.parse(e))}decycle(e,r){let n=new Set,i=o=>{if(typeof o=="object"&&o!==null){if(n.has(o))throw new Error("Cycle in ast detected.");if(n.add(o),(0,jc.isReference)(o))return{$refText:o.$refText};let a;if(Array.isArray(o)){a=[];for(let s=0;s<o.length;s++)a[s]=i(o[s])}else{a={};for(let[s,u]of Object.entries(o))r.includes(s)||(a[s]=i(u))}return a}return o};return i(e)}revive(e){let r=(n,i,o)=>{if(Array.isArray(n))for(let a=0;a<n.length;a++){let s=n[a];if((0,jc.isReference)(s)&&(0,jc.isAstNode)(i)){let u=this.linker.buildReference(i,o,s.$refNode,s.$refText);n[a]=u}else typeof s=="object"&&s!==null&&(r(s),s.$container=i,s.$containerProperty=o,s.$containerIndex=a)}else if(typeof n=="object"&&n!==null){for(let[a,s]of Object.entries(n))if(typeof s=="object"&&s!==null)if((0,jc.isReference)(s)){let u=this.linker.buildReference(n,a,s.$refNode,s.$refText);n[a]=u}else Array.isArray(s)?r(s,n,a):(r(s),s.$container=n,s.$containerProperty=a)}};return r(e),e}};Gc.DefaultJsonSerializer=$h});var jh=E(Uc=>{"use strict";Object.defineProperty(Uc,"__esModule",{value:!0});Uc.DefaultServiceRegistry=void 0;var WI=Nn(),Fh=class{register(e){if(!this.singleton&&!this.map){this.singleton=e;return}if(!this.map&&(this.map={},this.singleton)){for(let r of this.singleton.LanguageMetaData.fileExtensions)this.map[r]=this.singleton;this.singleton=void 0}for(let r of e.LanguageMetaData.fileExtensions)this.map[r]!==void 0&&this.map[r]!==e&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`),this.map[r]=e}getServices(e){if(this.singleton!==void 0)return this.singleton;if(this.map===void 0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");let r=WI.Utils.extname(e),n=this.map[r];if(!n)throw new Error(`The service registry contains no services for the extension '${r}'.`);return n}get all(){return this.singleton!==void 0?[this.singleton]:this.map!==void 0?Object.values(this.map):[]}};Uc.DefaultServiceRegistry=Fh});var Hh=E($o=>{"use strict";Object.defineProperty($o,"__esModule",{value:!0});$o.DefaultReferenceDescriptionProvider=$o.DefaultAstNodeDescriptionProvider=void 0;var KI=Ke(),Xa=Re(),BI=et(),zI=Kr(),VI=ci(),Gh=class{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator}createDescription(e,r,n=(0,Xa.getDocument)(e)){return{node:e,name:r,type:e.$type,documentUri:n.uri,path:this.astNodeLocator.getAstNodePath(e)}}createDescriptions(){throw new Error("Deprecated: This method has been moved to the `ScopeComputation` service and renamed to `computeExports`.")}};$o.DefaultAstNodeDescriptionProvider=Gh;var Uh=class{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,r=KI.CancellationToken.None){let n=[],i=e.parseResult.value;for(let o of(0,Xa.streamAst)(i))await(0,zI.interruptAndCheck)(r),(0,Xa.streamReferences)(o).filter(a=>!(0,Xa.isLinkingError)(a)).forEach(a=>{let s=a.reference.$nodeDescription;s&&n.push(this.createDescription(a,s))});return n}createDescription(e,r){let n=(0,Xa.getDocument)(e.container).uri,i=e.reference.$refNode;return{sourceUri:n,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:r.documentUri,targetPath:r.path,segment:(0,BI.toDocumentSegment)(i),local:(0,VI.equalURI)(r.documentUri,n)}}};$o.DefaultReferenceDescriptionProvider=Uh});var WA=E(Hc=>{"use strict";Object.defineProperty(Hc,"__esModule",{value:!0});Hc.DefaultAstNodeLocator=void 0;var Wh=class{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){let r=this.getAstNodePath(e.$container),n=this.getPathSegment(e);return r+this.segmentSeparator+n}return""}getPathSegment({$containerProperty:e,$containerIndex:r}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return r!==void 0?e+this.indexSeparator+r:e}getAstNode(e,r){return r.split(this.segmentSeparator).reduce((i,o)=>{if(!i||o.length===0)return i;let a=o.indexOf(this.indexSeparator);if(a>0){let s=o.substring(0,a),u=parseInt(o.substring(a+1));return i[s][u]}return i[o]},e.parseResult.value)}};Hc.DefaultAstNodeLocator=Wh});var Bh=E(Wc=>{"use strict";Object.defineProperty(Wc,"__esModule",{value:!0});Wc.DefaultConfigurationProvider=void 0;var YI=yt(),Kh=class{constructor(e){this.settings={},this.workspaceConfig=!1,this.initialized=!1,this.serviceRegistry=e.ServiceRegistry,this.connection=e.lsp.Connection,e.lsp.LanguageServer.onInitialize(r=>{var n,i;this.workspaceConfig=(i=(n=r.capabilities.workspace)===null||n===void 0?void 0:n.configuration)!==null&&i!==void 0?i:!1}),e.lsp.LanguageServer.onInitialized(r=>{var n;let i=this.serviceRegistry.all;(n=e.lsp.Connection)===null||n===void 0||n.client.register(YI.DidChangeConfigurationNotification.type,{section:i.map(o=>this.toSectionName(o.LanguageMetaData.languageId))})})}async initialize(){if(this.workspaceConfig&&this.connection){let r=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),n=await this.connection.workspace.getConfiguration(r);r.forEach((i,o)=>{this.updateSectionConfiguration(i.section,n[o])})}this.initialized=!0}updateConfiguration(e){!e.settings||Object.keys(e.settings).forEach(r=>{this.updateSectionConfiguration(r,e.settings[r])})}updateSectionConfiguration(e,r){this.settings[e]=r}async getConfiguration(e,r){this.initialized||await this.initialize();let n=this.toSectionName(e);if(this.settings[n])return this.settings[n][r]}toSectionName(e){return`${e}`}};Wc.DefaultConfigurationProvider=Kh});var Yh=E(Bc=>{"use strict";Object.defineProperty(Bc,"__esModule",{value:!0});Bc.DefaultDocumentBuilder=void 0;var Kc=Ke(),XI=br(),zh=Kr(),zn=Si(),Vh=class{constructor(e){this.updateListeners=[],this.buildPhaseListeners=new XI.MultiMap,this.langiumDocuments=e.workspace.LangiumDocuments,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,r={},n=Kc.CancellationToken.None){await this.buildDocuments(e,r,n)}async update(e,r,n=Kc.CancellationToken.None){for(let s of r)this.langiumDocuments.invalidateDocument(s);this.indexManager.remove(r);for(let s of e)this.langiumDocuments.invalidateDocument(s);for(let s of this.updateListeners)s(e,r);await(0,zh.interruptAndCheck)(n);let i=e.map(s=>this.langiumDocuments.getOrCreateDocument(s)),o=this.collectDocuments(i,r),a={validationChecks:"all"};await this.buildDocuments(o,a,n)}onUpdate(e){return this.updateListeners.push(e),Kc.Disposable.create(()=>{let r=this.updateListeners.indexOf(e);r>=0&&this.updateListeners.splice(r,1)})}collectDocuments(e,r){let n=e.map(a=>a.uri).concat(r),i=this.indexManager.getAffectedDocuments(n).toArray();i.forEach(a=>{this.serviceRegistry.getServices(a.uri).references.Linker.unlink(a),a.state=Math.min(a.state,zn.DocumentState.ComputedScopes)});let o=new Set([...e,...i,...this.langiumDocuments.all.filter(a=>a.state<zn.DocumentState.Validated)]);return Array.from(o)}async buildDocuments(e,r,n){await this.runCancelable(e,zn.DocumentState.IndexedContent,n,o=>this.indexManager.updateContent(o,n)),await this.runCancelable(e,zn.DocumentState.ComputedScopes,n,o=>this.computeScopes(o,n)),await this.runCancelable(e,zn.DocumentState.Linked,n,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,n)),await this.runCancelable(e,zn.DocumentState.IndexedReferences,n,o=>this.indexManager.updateReferences(o,n));let i=e.filter(o=>this.shouldValidate(o,r));await this.runCancelable(i,zn.DocumentState.Validated,n,o=>this.validate(o,n))}async runCancelable(e,r,n,i){let o=e.filter(a=>a.state<r);for(let a of o)await(0,zh.interruptAndCheck)(n),await i(a);await this.notifyBuildPhase(o,r,n)}onBuildPhase(e,r){return this.buildPhaseListeners.add(e,r),Kc.Disposable.create(()=>{this.buildPhaseListeners.delete(e,r)})}async notifyBuildPhase(e,r,n){if(e.length===0)return;let i=this.buildPhaseListeners.get(r);for(let o of i)await(0,zh.interruptAndCheck)(n),await o(e,n)}async computeScopes(e,r){let n=this.serviceRegistry.getServices(e.uri).references.ScopeComputation;e.precomputedScopes=await n.computeLocalScopes(e,r),e.state=zn.DocumentState.ComputedScopes}shouldValidate(e,r){return r.validationChecks==="all"}async validate(e,r){let i=await this.serviceRegistry.getServices(e.uri).validation.DocumentValidator.validateDocument(e,r);e.diagnostics=i,e.state=zn.DocumentState.Validated}};Bc.DefaultDocumentBuilder=Vh});var Zh=E(zc=>{"use strict";Object.defineProperty(zc,"__esModule",{value:!0});zc.DefaultIndexManager=void 0;var KA=Ke(),JI=Re(),Xh=bt(),Jh=ci(),BA=Si(),Qh=class{constructor(e){this.simpleIndex=new Map,this.referenceIndex=new Map,this.globalScopeCache=new Map,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection,this.langiumDocuments=()=>e.workspace.LangiumDocuments}findAllReferences(e,r){let n=(0,JI.getDocument)(e).uri,i=[];return this.referenceIndex.forEach(o=>{o.forEach(a=>{(0,Jh.equalURI)(a.targetUri,n)&&a.targetPath===r&&i.push(a)})}),(0,Xh.stream)(i)}allElements(e=""){this.globalScopeCache.has("")||this.globalScopeCache.set("",Array.from(this.simpleIndex.values()).flat());let r=this.globalScopeCache.get(e);if(r)return(0,Xh.stream)(r);{let n=this.globalScopeCache.get("").filter(i=>this.astReflection.isSubtype(i.type,e));return this.globalScopeCache.set(e,n),(0,Xh.stream)(n)}}remove(e){for(let r of e){let n=r.toString();this.simpleIndex.delete(n),this.referenceIndex.delete(n)}}async updateContent(e,r=KA.CancellationToken.None){this.globalScopeCache.clear();let i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,r);for(let o of i)o.node=void 0;this.simpleIndex.set(e.uri.toString(),i),e.state=BA.DocumentState.IndexedContent}async updateReferences(e,r=KA.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,r);this.referenceIndex.set(e.uri.toString(),i),e.state=BA.DocumentState.IndexedReferences}getAffectedDocuments(e){return this.langiumDocuments().all.filter(r=>{if(e.some(n=>(0,Jh.equalURI)(r.uri,n)))return!1;for(let n of e)if(this.isAffected(r,n))return!0;return!1})}isAffected(e,r){let n=r.toString(),i=e.uri.toString();if(e.references.some(a=>a.error!==void 0))return!0;let o=this.referenceIndex.get(i);return o?o.filter(a=>!a.local).some(a=>(0,Jh.equalURI)(a.targetUri,n)):!1}};zc.DefaultIndexManager=Qh});var rm=E(Vc=>{"use strict";Object.defineProperty(Vc,"__esModule",{value:!0});Vc.DefaultWorkspaceManager=void 0;var QI=Ke(),em=Nn(),ZI=Kr(),tm=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.MutexLock,e.lsp.LanguageServer.onInitialize(r=>{var n;this.folders=(n=r.workspaceFolders)!==null&&n!==void 0?n:void 0}),e.lsp.LanguageServer.onInitialized(r=>{this.mutex.lock(n=>{var i;return this.initializeWorkspace((i=this.folders)!==null&&i!==void 0?i:[],n)})})}async initializeWorkspace(e,r=QI.CancellationToken.None){let n=this.serviceRegistry.all.flatMap(a=>a.LanguageMetaData.fileExtensions),i=[],o=a=>{i.push(a),this.langiumDocuments.hasDocument(a.uri)||this.langiumDocuments.addDocument(a)};await this.loadAdditionalDocuments(e,o),await Promise.all(e.map(a=>[a,this.getRootFolder(a)]).map(async a=>this.traverseFolder(...a,n,o))),await(0,ZI.interruptAndCheck)(r),await this.documentBuilder.build(i,void 0,r)}loadAdditionalDocuments(e,r){return Promise.resolve()}getRootFolder(e){return em.URI.parse(e.uri)}async traverseFolder(e,r,n,i){let o=await this.fileSystemProvider.readDirectory(r);await Promise.all(o.map(async a=>{if(this.includeEntry(e,a,n)){if(a.isDirectory)await this.traverseFolder(e,a.uri,n,i);else if(a.isFile){let s=this.langiumDocuments.getOrCreateDocument(a.uri);i(s)}}}))}includeEntry(e,r,n){let i=em.Utils.basename(r.uri);if(i.startsWith("."))return!1;if(r.isDirectory)return i!=="node_modules"&&i!=="out";if(r.isFile){let o=em.Utils.extname(r.uri);return n.includes(o)}return!1}};Vc.DefaultWorkspaceManager=tm});var Wu=E(qo=>{"use strict";Object.defineProperty(qo,"__esModule",{value:!0});qo.createDefaultSharedModule=qo.createDefaultModule=void 0;var eM=Ke(),tM=qd(),rM=HT(),nM=IA(),iM=tp(),oM=np(),aM=op(),sM=gu(),uM=up(),cM=lp(),lM=_p(),dM=Ap(),fM=bp(),pM=Nh(),hM=Dh(),mM=Ih(),gM=Lh(),yM=vo(),vM=zf(),TM=Qs(),_M=eu(),RM=qh(),AM=jh(),CM=Kr(),bM=hu(),EM=su(),zA=Hh(),PM=WA(),kM=Bh(),NM=Yh(),nm=Si(),SM=Zh(),wM=rm();function DM(t){return{parser:{GrammarConfig:e=>(0,rM.createGrammarConfig)(e),LangiumParser:e=>(0,pM.createLangiumParser)(e),CompletionParser:e=>(0,nM.createCompletionParser)(e),ValueConverter:()=>new mM.DefaultValueConverter,TokenBuilder:()=>new hM.DefaultTokenBuilder},lsp:{CompletionProvider:e=>new iM.DefaultCompletionProvider(e),DocumentSymbolProvider:e=>new aM.DefaultDocumentSymbolProvider(e),HoverProvider:e=>new cM.MultilineCommentHoverProvider(e),FoldingRangeProvider:e=>new sM.DefaultFoldingRangeProvider(e),ReferencesProvider:e=>new dM.DefaultReferencesProvider(e),DefinitionProvider:e=>new uM.DefaultDefinitionProvider(e),DocumentHighlightProvider:e=>new oM.DefaultDocumentHighlightProvider(e),RenameProvider:e=>new fM.DefaultRenameProvider(e)},workspace:{AstNodeLocator:()=>new PM.DefaultAstNodeLocator,AstNodeDescriptionProvider:e=>new zA.DefaultAstNodeDescriptionProvider(e),ReferenceDescriptionProvider:e=>new zA.DefaultReferenceDescriptionProvider(e)},references:{Linker:e=>new gM.DefaultLinker(e),NameProvider:()=>new yM.DefaultNameProvider,ScopeProvider:e=>new _M.DefaultScopeProvider(e),ScopeComputation:e=>new TM.DefaultScopeComputation(e),References:e=>new vM.DefaultReferences(e)},serializer:{JsonSerializer:e=>new RM.DefaultJsonSerializer(e)},validation:{DocumentValidator:e=>new bM.DefaultDocumentValidator(e),ValidationRegistry:e=>new EM.ValidationRegistry(e)},shared:()=>t.shared}}qo.createDefaultModule=DM;function OM(t){return{ServiceRegistry:()=>new AM.DefaultServiceRegistry,lsp:{Connection:()=>t.connection,LanguageServer:e=>new lM.DefaultLanguageServer(e)},workspace:{LangiumDocuments:e=>new nm.DefaultLangiumDocuments(e),LangiumDocumentFactory:e=>new nm.DefaultLangiumDocumentFactory(e),DocumentBuilder:e=>new NM.DefaultDocumentBuilder(e),TextDocuments:()=>new eM.TextDocuments(tM.TextDocument),TextDocumentFactory:e=>new nm.DefaultTextDocumentFactory(e),IndexManager:e=>new SM.DefaultIndexManager(e),WorkspaceManager:e=>new wM.DefaultWorkspaceManager(e),FileSystemProvider:e=>t.fileSystemProvider(e),MutexLock:()=>new CM.MutexLock,ConfigurationProvider:e=>new kM.DefaultConfigurationProvider(e)}}}qo.createDefaultSharedModule=OM});var VA=E(Yc=>{"use strict";Object.defineProperty(Yc,"__esModule",{value:!0});Yc.s=void 0;var xM=/^(s*\n)+/,IM=/\n/g,MM=/\S|$/;function LM(t,...e){let r=e.reduce((i,o,a)=>i+$M(String(o),i)+t[a+1],t[0]).split(`
`).map(i=>i.trimRight()),n=qM(r);return r.map(i=>i.slice(n).trimRight()).join(`
`).trimRight().replace(xM,"")}Yc.s=LM;function $M(t,e){let r=Math.max(0,e.length-e.lastIndexOf(`
`)-1),n=" ".repeat(r);return t.replace(IM,`
`+n)}function qM(t){let e=t.filter(n=>n.length>0).map(n=>n.search(MM)),r=e.length===0?0:Math.min(...e);return Math.max(0,r)}});var XA=E(YA=>{"use strict";Object.defineProperty(YA,"__esModule",{value:!0})});var QA=E(JA=>{"use strict";Object.defineProperty(JA,"__esModule",{value:!0})});var e0=E(ZA=>{"use strict";Object.defineProperty(ZA,"__esModule",{value:!0})});var Fo=E(Q=>{"use strict";var t0=Q&&Q.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),FM=Q&&Q.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),oe=Q&&Q.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&t0(e,t,r)},jM=Q&&Q.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&t0(e,t,r);return FM(e,t),e};Object.defineProperty(Q,"__esModule",{value:!0});Q.GrammarAST=void 0;oe(Wu(),Q);oe(fa(),Q);oe(nu(),Q);oe(Qd(),Q);oe(VA(),Q);oe(Ip(),Q);oe(Hu(),Q);oe(XA(),Q);oe(Pp(),Q);oe(Va(),Q);oe(Nh(),Q);oe(QA(),Q);oe(Dh(),Q);oe(Ih(),Q);oe(Lh(),Q);oe(vo(),Q);oe(Qs(),Q);oe(eu(),Q);oe(qh(),Q);oe(jh(),Q);oe(e0(),Q);oe(oo(),Q);oe(Re(),Q);oe(br(),Q);oe(et(),Q);oe(Et(),Q);oe(Kr(),Q);oe(ci(),Q);oe(ho(),Q);oe(bt(),Q);oe(hu(),Q);oe(su(),Q);oe(Hh(),Q);oe(Yh(),Q);oe(Si(),Q);oe(Zh(),Q);oe(Bs(),Q);oe(rm(),Q);oe(Bh(),Q);var GM=jM(ze());Q.GrammarAST=GM});var im=E(le=>{"use strict";Object.defineProperty(le,"__esModule",{value:!0});le.reflection=le.RobotMotionLanguageAstReflection=le.isRepeat=le.Repeat=le.isMultiMove=le.MultiMove=le.isMove=le.Move=le.isModel=le.Model=le.isDef=le.Def=void 0;var UM=Fo();le.Def="Def";function HM(t){return le.reflection.isInstance(t,le.Def)}le.isDef=HM;le.Model="Model";function WM(t){return le.reflection.isInstance(t,le.Model)}le.isModel=WM;le.Move="Move";function KM(t){return le.reflection.isInstance(t,le.Move)}le.isMove=KM;le.MultiMove="MultiMove";function BM(t){return le.reflection.isInstance(t,le.MultiMove)}le.isMultiMove=BM;le.Repeat="Repeat";function zM(t){return le.reflection.isInstance(t,le.Repeat)}le.isRepeat=zM;var Xc=class{getAllTypes(){return["Def","Model","Move","MultiMove","Repeat"]}isInstance(e,r){return(0,UM.isAstNode)(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;switch(e){default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"Def":return{name:"Def",mandatory:[{name:"stmts",type:"array"}]};case"MultiMove":return{name:"MultiMove",mandatory:[{name:"compositeMoves",type:"array"}]};case"Repeat":return{name:"Repeat",mandatory:[{name:"stmtsToRepeat",type:"array"}]};default:return{name:e,mandatory:[]}}}};le.RobotMotionLanguageAstReflection=Xc;le.reflection=new Xc});var r0=E(Qc=>{"use strict";Object.defineProperty(Qc,"__esModule",{value:!0});Qc.RobotMotionLanguageGrammar=void 0;var VM=Fo(),Jc,YM=()=>Jc!=null?Jc:Jc=(0,VM.loadGrammarFromJson)(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "RobotMotionLanguage",
  "rules": [
    {
      "$type": "ParserRule",
      "name": "Model",
      "entry": true,
      "definition": {
        "$type": "Assignment",
        "feature": "def",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$refText": "Def"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Def",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "define"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "ID"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "stmts",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Move"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "MultiMove"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Repeat"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "end"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Repeat",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "repeat"
          },
          {
            "$type": "Assignment",
            "feature": "amount",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "NUMBER"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "stmtsToRepeat",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "Move"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$refText": "MultiMove"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "end"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "MultiMove",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "multimove"
          },
          {
            "$type": "Assignment",
            "feature": "compositeMoves",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "Move"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "end"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Move",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "move"
          },
          {
            "$type": "Assignment",
            "feature": "side",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "SIDE"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "joint",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "JOINT"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "rotation",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "ROT"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "to"
          },
          {
            "$type": "Assignment",
            "feature": "position",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$refText": "NUMBER"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "NUMBER",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "[+-]?[0-9]+(\\\\.[0-9]*)?"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "SIDE",
      "definition": {
        "$type": "TerminalAlternatives",
        "elements": [
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "right"
            }
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "left"
            }
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "JOINT",
      "definition": {
        "$type": "TerminalAlternatives",
        "elements": [
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "TerminalAlternatives",
                    "elements": [
                      {
                        "$type": "TerminalAlternatives",
                        "elements": [
                          {
                            "$type": "TerminalAlternatives",
                            "elements": [
                              {
                                "$type": "TerminalAlternatives",
                                "elements": [
                                  {
                                    "$type": "TerminalAlternatives",
                                    "elements": [
                                      {
                                        "$type": "TerminalAlternatives",
                                        "elements": [
                                          {
                                            "$type": "CharacterRange",
                                            "left": {
                                              "$type": "Keyword",
                                              "value": "head"
                                            }
                                          },
                                          {
                                            "$type": "CharacterRange",
                                            "left": {
                                              "$type": "Keyword",
                                              "value": "fingers"
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        "$type": "CharacterRange",
                                        "left": {
                                          "$type": "Keyword",
                                          "value": "wrist"
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "$type": "CharacterRange",
                                    "left": {
                                      "$type": "Keyword",
                                      "value": "elbow"
                                    }
                                  }
                                ]
                              },
                              {
                                "$type": "CharacterRange",
                                "left": {
                                  "$type": "Keyword",
                                  "value": "shoulder"
                                }
                              }
                            ]
                          },
                          {
                            "$type": "CharacterRange",
                            "left": {
                              "$type": "Keyword",
                              "value": "torso"
                            }
                          }
                        ]
                      },
                      {
                        "$type": "CharacterRange",
                        "left": {
                          "$type": "Keyword",
                          "value": "hip"
                        }
                      }
                    ]
                  },
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "knee"
                    }
                  }
                ]
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "ankle"
                }
              }
            ]
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "toes"
            }
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "ROT",
      "definition": {
        "$type": "TerminalAlternatives",
        "elements": [
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "pitch"
                }
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "roll"
                }
              }
            ]
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "yaw"
            }
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "[_a-zA-Z][\\\\w_]*"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\s+"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\/[^\\\\n\\\\r]*"
      },
      "fragment": false
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "imports": [],
  "interfaces": [],
  "types": [],
  "usedGrammars": []
}`);Qc.RobotMotionLanguageGrammar=YM});var n0=E(Vn=>{"use strict";Object.defineProperty(Vn,"__esModule",{value:!0});Vn.RobotMotionLanguageGeneratedModule=Vn.RobotMotionLanguageGeneratedSharedModule=Vn.RobotMotionLanguageLanguageMetaData=void 0;var XM=im(),JM=r0();Vn.RobotMotionLanguageLanguageMetaData={languageId:"robot-motion-language",fileExtensions:[".rml"],caseInsensitive:!1};Vn.RobotMotionLanguageGeneratedSharedModule={AstReflection:()=>new XM.RobotMotionLanguageAstReflection};Vn.RobotMotionLanguageGeneratedModule={Grammar:()=>(0,JM.RobotMotionLanguageGrammar)(),LanguageMetaData:()=>Vn.RobotMotionLanguageLanguageMetaData,parser:{}}});var i0=E(jo=>{"use strict";Object.defineProperty(jo,"__esModule",{value:!0});jo.RobotMotionLanguageValidator=jo.RobotMotionLanguageValidationRegistry=void 0;var QM=Fo(),om=class extends QM.ValidationRegistry{constructor(e){super(e);let r=e.validation.RobotMotionLanguageValidator,n={Repeat:r.checkRepeatAmountIsInt,Move:r.checkMove};this.register(n,r)}};jo.RobotMotionLanguageValidationRegistry=om;var am=class{checkRepeatAmountIsInt(e,r){Number.isInteger(e.amount)||r("error",`Repeat amount '${e.amount}' should be an integer.`,{node:e,property:"amount"})}checkMove(e,r){this.checkMoveSideArg(e,r),this.checkMoveRotationArg(e,r)}checkMoveSideArg(e,r){e.joint==="head"||e.joint==="torso"?e.side&&r("error",`Side '${e.side}' is unnecessary on joint '${e.joint}'`,{node:e,property:"joint"}):e.side||r("error",`Side 'left' or 'right' is necessary on joint '${e.joint}'`,{node:e,property:"joint"})}checkMoveRotationArg(e,r){e.joint==="knee"?e.rotation&&r("error",`Rotation '${e.rotation}' is unnecessary on joint '${e.joint}'`,{node:e,property:"rotation"}):e.rotation||r("error",`Rotation 'pitch' or 'roll' or 'yaw' is necessary on joint '${e.joint}'`,{node:e,property:"rotation"})}};jo.RobotMotionLanguageValidator=am});var s0=E(Li=>{"use strict";Object.defineProperty(Li,"__esModule",{value:!0});Li.createRobotMotionLanguageServices=Li.RobotMotionLanguageModule=void 0;var Zc=Fo(),o0=n0(),a0=i0();Li.RobotMotionLanguageModule={validation:{ValidationRegistry:t=>new a0.RobotMotionLanguageValidationRegistry(t),RobotMotionLanguageValidator:()=>new a0.RobotMotionLanguageValidator}};function ZM(t){let e=(0,Zc.inject)((0,Zc.createDefaultSharedModule)(t),o0.RobotMotionLanguageGeneratedSharedModule),r=(0,Zc.inject)((0,Zc.createDefaultModule)({shared:e}),o0.RobotMotionLanguageGeneratedModule,Li.RobotMotionLanguageModule);return e.ServiceRegistry.register(r),{shared:e,RobotMotionLanguage:r}}Li.createRobotMotionLanguageServices=ZM});var c0=E(el=>{"use strict";Object.defineProperty(el,"__esModule",{value:!0});el.generateCommands=void 0;var Ja=im();function eL(t){return tL(t)}el.generateCommands=eL;function tL(t){return{def:t.def.name,commands:rL(t.def)}}function rL(t){var e=[];return t.stmts.forEach(r=>{if((0,Ja.isRepeat)(r))e.push(nL(r));else if((0,Ja.isMultiMove)(r))e.push(u0(r));else if((0,Ja.isMove)(r))e.push(sm(r));else throw new Error(`'${r}' is not a known statement.`)}),e}function nL(t){var e=[];return t.stmtsToRepeat.forEach(r=>{(0,Ja.isMultiMove)(r)?e.push(u0(r)):(0,Ja.isMove)(r)&&e.push(sm(r))}),{repeat:e,amount:t.amount}}function u0(t){var e=[];return t.compositeMoves.forEach(r=>{e.push(sm(r))}),{multimove:e}}function sm(t){return{move:{side:t.side,joint:t.joint,rotation:t.rotation,position:t.position}}}});var lL=E(Go=>{var l0=Go&&Go.__awaiter||function(t,e,r,n){function i(o){return o instanceof r?o:new r(function(a){a(o)})}return new(r||(r=Promise))(function(o,a){function s(l){try{c(n.next(l))}catch(f){a(f)}}function u(l){try{c(n.throw(l))}catch(f){a(f)}}function c(l){l.done?o(l.value):i(l.value).then(s,u)}c((n=n.apply(t,e||[])).next())})};Object.defineProperty(Go,"__esModule",{value:!0});Go.parseAndGenerate=void 0;var iL=Nn(),oL=Fo(),aL=s0(),sL=c0();function uL(t){return l0(this,void 0,void 0,function*(){let e=(0,aL.createRobotMotionLanguageServices)(oL.EmptyFileSystem).RobotMotionLanguage,r=yield cL(t,e),n=(0,sL.generateCommands)(r);return Promise.resolve(n)})}Go.parseAndGenerate=uL;function cL(t,e){var r;return l0(this,void 0,void 0,function*(){let n=e.shared.workspace.LangiumDocumentFactory.fromString(t,iL.URI.parse("memory://robot-motion-language.document"));return yield e.shared.workspace.DocumentBuilder.build([n],{validationChecks:"all"}),(r=n.parseResult)===null||r===void 0?void 0:r.value})}});return lL();})();
