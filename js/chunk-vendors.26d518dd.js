(self["webpackChunkIDNCreaterPages"]=self["webpackChunkIDNCreaterPages"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),o=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,u="Arguments"==o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var d=a[l];r(e,d)||n&&r(n,d)||c(e,d,u(t,d))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),o=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&o(n,u,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,o=r("".replace),s=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,d,f,h,p,m=e.target,g=e.global,v=e.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(d in t){if(h=t[d],e.dontCallGetSet?(p=i(l,d),f=p&&p.value):f=l[d],n=u(g?d:m+(v?".":"#")+d,e.forced),!n&&void 0!==f){if(typeof h==typeof f)continue;c(h,f)}(e.sham||f&&f.sham)&&o(h,"sham",!0),s(l,d,h,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),o=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a(e,""):s(e)}:s},9587:function(e,t,n){var r=n(614),i=n(111),o=n(7674);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},9909:function(e,t,n){var r,i,o,s=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),d=n(5465),f=n(6200),h=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var b=d.state||(d.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw m(p);return t.facade=e,b.set(e,t),t},i=function(e){return b.get(e)||{}},o=function(e){return b.has(e)}}else{var w=f("state");h[w]=!0,r=function(e,t){if(l(e,w))throw m(p);return t.facade=e,u(e,w,t),t},i=function(e){return l(e,w)?e[w]:{}},o=function(e){return l(e,w)}}e.exports={set:r,get:i,has:o,enforce:v,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===o}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),i=n(7293),o=n(614),s=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),d=l.enforce,f=l.get,h=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===m(h(t),0,7)&&(t="["+g(h(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=d(e);return s(r,"source")||(r.source=v(b,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return o(this)&&f(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",h="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&h in n&&!n[h]){var r=l(e,t);r&&r[h]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t),l)try{return d(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),o=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.27.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},5112:function(e,t,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),d=c?u["for"]||u:u&&u.withoutSetter||s;e.exports=function(e){return o(l,e)||(l[e]=a&&o(u,e)?u[e]:d("Symbol."+e)),l[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},d=u||!l();r({target:"Array",proto:!0,arity:1,forced:d},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},d=u||!l();r({target:"Array",proto:!0,arity:1,forced:d},{unshift:function(e){var t=i(this),n=o(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in t?t[l]=t[u]:a(t,l)}for(var d=0;d<r;d++)t[d]=arguments[d]}return s(t,n+r)}})},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),o=n(5005),s=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),d=n(6277),f=n(3678),h=n(1060),p=n(9781),m=n(1913),g="DOMException",v=o("Error"),y=o(g),b=function(){u(this,w);var e=arguments.length,t=d(e<1?void 0:arguments[0]),n=d(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=v(t);return i.name=g,a(r,"stack",s(1,h(i.stack,1))),l(r,this,b),r},w=b.prototype=y.prototype,_="stack"in v(g),I="stack"in new y(1,2),E=y&&p&&Object.getOwnPropertyDescriptor(i,g),T=!!E&&!(E.writable&&E.configurable),k=_&&!T&&!I;r({global:!0,constructor:!0,forced:m||k},{DOMException:k?b:y});var S=o(g),O=S.prototype;if(O.constructor!==S)for(var C in m||a(O,"constructor",s(1,S)),f)if(c(f,C)){var A=f[C],R=A.s;c(S,R)||a(S,R,s(6,A.c))}},6718:function(){},3279:function(e,t,n){"use strict";n.d(t,{$:function(){return Gt},A:function(){return u},D:function(){return f},I:function(){return Ge},J:function(){return Qe},L:function(){return pt},N:function(){return fe},P:function(){return Yr},Q:function(){return Tt},R:function(){return Hr},U:function(){return Ct},V:function(){return At},W:function(){return Rt},X:function(){return Ot},Y:function(){return Dt},Z:function(){return Lt},_:function(){return Ft},a:function(){return Qn},a0:function(){return Kt},a1:function(){return Yt},a2:function(){return Zt},a3:function(){return rn},a4:function(){return on},a5:function(){return sn},a6:function(){return an},a7:function(){return cn},a8:function(){return un},a9:function(){return ln},aA:function(){return E},aB:function(){return Oi},aC:function(){return le},aD:function(){return he},aE:function(){return Ti},aF:function(){return pi},aG:function(){return hi},aH:function(){return ze},aL:function(){return nr},aO:function(){return xt},aa:function(){return dn},ab:function(){return fn},ac:function(){return hn},ad:function(){return mn},ae:function(){return gn},af:function(){return vn},ai:function(){return bn},aj:function(){return wn},ak:function(){return _n},an:function(){return Bt},ao:function(){return Rn},aq:function(){return jn},ar:function(){return zn},as:function(){return k},at:function(){return Ee},au:function(){return we},av:function(){return y},aw:function(){return oo},ax:function(){return Pi},ay:function(){return Te},az:function(){return b},b:function(){return Xn},c:function(){return ii},d:function(){return si},e:function(){return oi},f:function(){return vi},g:function(){return _i},h:function(){return bi},i:function(){return Tr},j:function(){return Ei},k:function(){return uo},l:function(){return qr},m:function(){return ho},o:function(){return Oo},p:function(){return c},r:function(){return Jr},s:function(){return Wr},u:function(){return Kr},x:function(){return Nn}});n(7658);var r=n(6816),i=n(2730);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n(9511),a=n(1724);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=l,h=d,p=new r.LL("auth","Firebase",d()),m=new s.Yd("@firebase/auth");function g(e,...t){m.logLevel<=s["in"].WARN&&m.warn(`Auth (${i.SDK_VERSION}): ${e}`,...t)}function v(e,...t){m.logLevel<=s["in"].ERROR&&m.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,...t){throw I(e,...t)}function b(e,...t){return I(e,...t)}function w(e,t,n){const i=Object.assign(Object.assign({},h()),{[t]:n}),o=new r.LL("auth","Firebase",i);return o.create(t,{appName:e.name})}function _(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&y(e,"argument-error"),w(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function E(e,t,...n){if(!e)throw I(t,...n)}function T(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function k(e,t){e||T(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function O(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(O()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function R(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){k(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void T("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void T("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void T("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},L=new P(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,n,i,o={}){return U(e,o,(async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),N.fetch()(V(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function U(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},D),t);try{const t=new $(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw H(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw H(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw H(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw H(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw w(e,a,s);y(e,a)}}catch(o){if(o instanceof r.ZR)throw o;y(e,"network-request-failed",{message:String(o)})}}async function F(e,t,n,r,i={}){const o=await M(e,t,n,r,i);return"mfaPendingCredential"in o&&y(e,"multi-factor-auth-required",{_serverResponse:o}),o}function V(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?x(e.config,i):`${e.config.apiScheme}://${i}`}class ${constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(b(this.auth,"network-request-failed"))),L.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function H(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=b(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return M(e,"POST","/v1/accounts:delete",t)}async function z(e,t){return M(e,"POST","/v1/accounts:update",t)}async function W(e,t){return M(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),o=K(i);E(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:q(G(o.auth_time)),issuedAtTime:q(G(o.iat)),expirationTime:q(G(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function K(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(o){return v("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function Y(e){const t=K(e);return E(t,"internal-error"),E("undefined"!==typeof t.exp,"internal-error"),E("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&Z(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Z({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e){var t;const n=e.auth,r=await e.getIdToken(),i=await X(e,W(n,{idToken:r}));E(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?ie(o.providerUserInfo):[],a=re(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ee(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,d)}async function ne(e){const t=(0,r.m9)(e);await te(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function re(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ie(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t){const n=await U(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=V(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E("undefined"!==typeof e.idToken,"internal-error"),E("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await oe(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new se;return n&&(E("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(E("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(E("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new se,this.toJSON())}_performRefresh(){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){E("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ce{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ee(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await X(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return J(this,e)}reload(){return ne(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await te(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await X(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:I}=t;E(y&&I,e,"internal-error");const T=se.fromJSON(this.name,I);E("string"===typeof y,e,"internal-error"),ae(l,e.name),ae(d,e.name),E("boolean"===typeof b,e,"internal-error"),E("boolean"===typeof w,e,"internal-error"),ae(f,e.name),ae(h,e.name),ae(p,e.name),ae(m,e.name),ae(g,e.name),ae(v,e.name);const k=new ce({uid:y,auth:e,email:d,emailVerified:b,displayName:l,isAnonymous:w,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(k.providerData=_.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new se;r.updateFromServerResponse(t);const i=new ce({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await te(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Map;function le(e){k(e instanceof Function,"Expected a class definition");let t=ue.get(e);return t?(k(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ue.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=he(this.userKey,r.apiKey,i),this.fullPersistenceKey=he("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ce._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(le(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||le(fe);const o=he(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=ce._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new pe(i,e,n)):new pe(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(Ie(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=(0,r.z$)()){return/firefox\//i.test(e)}function ve(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=(0,r.z$)()){return/crios\//i.test(e)}function be(e=(0,r.z$)()){return/iemobile/i.test(e)}function we(e=(0,r.z$)()){return/android/i.test(e)}function _e(e=(0,r.z$)()){return/blackberry/i.test(e)}function Ie(e=(0,r.z$)()){return/webos/i.test(e)}function Ee(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Te(e=(0,r.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function ke(e=(0,r.z$)()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Se(){return(0,r.w1)()&&10===document.documentMode}function Oe(e=(0,r.z$)()){return Ee(e)||we(e)||Ie(e)||_e(e)||/windows phone/i.test(e)||be(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,t=[]){let n;switch(e){case"Browser":n=me((0,r.z$)());break;case"Worker":n=`${me((0,r.z$)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e){return(await M(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Pe(e,t){return M(e,"GET","/v2/recaptchaConfig",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e){return void 0!==e&&void 0!==e.getResponse}function Ne(e){return void 0!==e&&void 0!==e.enterprise}class De{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function je(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=b("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Le().appendChild(r)}))}function Me(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ue="https://www.google.com/recaptcha/enterprise.js?render=",Fe="recaptcha-enterprise";class Ve{constructor(e){this.type=Fe,this.auth=ze(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Pe(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new De(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;Ne(i)?i.enterprise.ready((()=>{try{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((e=>{r(e)}))}catch(o){r(o)}})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&Ne(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));je(Ue+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function $e(e,t,n,r=!1){const i=new Ve(e);let o;try{o=await i.verify(n)}catch(a){o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new We(this),this.idTokenSubscription=new We(this),this.beforeStateQueue=new He(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=le(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await te(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(le(e))}))}async initializeRecaptchaConfig(){const e=await Pe(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new De(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Ve(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&le(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return E(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ae(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&g(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function ze(e){return(0,r.m9)(e)}class We{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e,t){const n=(0,i._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;y(e,"already-initialized")}const o=n.initialize({options:t});return o}function Je(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(le);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ge(e,t,n){const r=ze(e);E(r._canInitEmulator,r,"emulator-config-failed"),E(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Ke(t),{host:s,port:a}=Ye(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ze()}function Ke(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ye(e){const t=Ke(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Xe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Xe(t)}}}function Xe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ze(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return T("not implemented")}_getIdTokenResponse(e){return T("not implemented")}_linkToIdToken(e,t){return T("not implemented")}_getReauthenticationResolver(e){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return M(e,"POST","/v1/accounts:resetPassword",j(e,t))}async function tt(e,t){return M(e,"POST","/v1/accounts:update",t)}async function nt(e,t){return M(e,"POST","/v1/accounts:update",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t){return F(e,"POST","/v1/accounts:signInWithPassword",j(e,t))}async function it(e,t){return M(e,"POST","/v1/accounts:sendOobCode",j(e,t))}async function ot(e,t){return it(e,t)}async function st(e,t){return it(e,t)}async function at(e,t){return it(e,t)}async function ct(e,t){return it(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",j(e,t))}async function lt(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Qe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new dt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new dt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await $e(e,n,"signInWithPassword");return rt(e,t)}return rt(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await $e(e,n,"signInWithPassword");return rt(e,t)}return Promise.reject(t)}));case"emailLink":return ut(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return tt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lt(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t){return F(e,"POST","/v1/accounts:signInWithIdp",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="http://localhost";class pt extends Qe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new pt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ft(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}buildRequest(){const e={requestUri:ht,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",j(e,t))}async function gt(e,t){return F(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,t))}async function vt(e,t){const n=await F(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,t));if(n.temporaryProof)throw H(e,"account-exists-with-different-credential",n);return n}const yt={["USER_NOT_FOUND"]:"user-not-found"};async function bt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return F(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,n),yt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Qe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new wt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new wt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return gt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return vt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return bt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new wt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function It(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||t||e}class Et{constructor(e){var t,n,i,o,s,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=_t(null!==(i=c["mode"])&&void 0!==i?i:null);E(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=It(e);try{return new Et(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{constructor(){this.providerId=Tt.PROVIDER_ID}static credential(e,t){return dt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Et.parseLink(t);return E(n,"argument-error"),dt._fromEmailAndCode(e,n.code,n.tenantId)}}Tt.PROVIDER_ID="password",Tt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Tt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends kt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ot extends St{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return E("providerId"in t&&"signInMethod"in t,"argument-error"),pt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return E(e.idToken||e.accessToken,"argument-error"),pt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ot.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ot.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:s}=e;if(!n&&!r&&!t&&!i)return null;if(!s)return null;try{return new Ot(s)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends St{constructor(){super("facebook.com")}static credential(e){return pt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch(t){return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ct.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At extends St{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return At.credential(t,n)}catch(r){return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com",At.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt extends St{constructor(){super("github.com")}static credential(e){return pt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch(t){return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com",Rt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pt="http://localhost";class xt extends Qe{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ft(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new xt(n,i):null}static _create(e,t){return new xt(e,t)}buildRequest(){return{requestUri:Pt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="saml.";class Dt extends kt{constructor(e){E(e.startsWith(Nt),"argument-error"),super(e)}static credentialFromResult(e){return Dt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Dt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=xt.fromJSON(e);return E(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return xt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends St{constructor(){super("twitter.com")}static credential(e,t){return pt._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Lt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function jt(e,t){return F(e,"POST","/v1/accounts:signUp",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.TWITTER_SIGN_IN_METHOD="twitter.com",Lt.PROVIDER_ID="twitter.com";class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ce._fromIdTokenResponse(e,n,r),o=Ut(n),s=new Mt({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ut(n);return new Mt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ut(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(e){var t;const n=ze(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Mt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await jt(n,{returnSecureToken:!0}),i=await Mt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Vt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Vt(e,t,n,r)}}function $t(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Vt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(e,t){const n=(0,r.m9)(e);await Wt(!0,n,t);const{providerUserInfo:i}=await z(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),o=Ht(i||[]);return n.providerData=n.providerData.filter((e=>o.has(e.providerId))),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function zt(e,t,n=!1){const r=await X(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Mt._forOperation(e,"link",r)}async function Wt(e,t,n){await te(t);const r=Ht(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";E(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await X(e,$t(r,i,t,e),n);E(o.idToken,r,"internal-error");const s=K(o.idToken);E(s,r,"internal-error");const{sub:a}=s;return E(e.uid===a,r,"user-mismatch"),Mt._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&y(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,t,n=!1){const r="signIn",i=await $t(e,r,t),o=await Mt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Gt(e,t){return Jt(ze(e),t)}async function Kt(e,t){const n=(0,r.m9)(e);return await Wt(!1,n,t.providerId),zt(n,t)}async function Yt(e,t){return qt((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){return F(e,"POST","/v1/accounts:signInWithCustomToken",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){const n=ze(e),r=await Xt(n,{token:t,returnSecureToken:!0}),i=await Mt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?en._fromServerResponse(e,t):"totpInfo"in t?tn._fromServerResponse(e,t):y(e,"internal-error")}}class en extends Qt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new en(t)}}class tn extends Qt{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new tn(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e,t,n){var r;E((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),E("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(E(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(E(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,t,n){var r;const i=ze(e),o={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await $e(i,o,"getOobCode",!0);n&&nn(i,e,n),await st(i,e)}else n&&nn(i,o,n),await st(i,o).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await $e(i,o,"getOobCode",!0);n&&nn(i,e,n),await st(i,e)}}))}async function on(e,t,n){await et((0,r.m9)(e),{oobCode:t,newPassword:n})}async function sn(e,t){await nt((0,r.m9)(e),{oobCode:t})}async function an(e,t){const n=(0,r.m9)(e),i=await et(n,{oobCode:t}),o=i.requestType;switch(E(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":E(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":E(i.mfaInfo,n,"internal-error");default:E(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=Qt._fromServerResponse(ze(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:s},operation:o}}async function cn(e,t){const{data:n}=await an((0,r.m9)(e),t);return n.email}async function un(e,t,n){var r;const i=ze(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await $e(i,o,"signUpPassword");s=jt(i,e)}else s=jt(i,o).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await $e(i,o,"signUpPassword");return jt(i,e)}return Promise.reject(e)}));const a=await s.catch((e=>Promise.reject(e))),c=await Mt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function ln(e,t,n){return Gt((0,r.m9)(e),Tt.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(e,t,n){var r;const i=ze(e),o={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function s(e,t){E(t.handleCodeInApp,i,"argument-error"),t&&nn(i,e,t)}if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await $e(i,o,"getOobCode",!0);s(e,n),await at(i,e)}else s(o,n),await at(i,o).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await $e(i,o,"getOobCode",!0);s(e,n),await at(i,e)}}))}function fn(e,t){const n=Et.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function hn(e,t,n){const i=(0,r.m9)(e),o=Tt.credentialWithLink(t,n||S());return E(o._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Gt(i,o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(e,t){return M(e,"POST","/v1/accounts:createAuthUri",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e,t){const n=O()?S():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:o}=await pn((0,r.m9)(e),i);return o||[]}async function gn(e,t){const n=(0,r.m9)(e),i=await e.getIdToken(),o={requestType:"VERIFY_EMAIL",idToken:i};t&&nn(n.auth,o,t);const{email:s}=await ot(n.auth,o);s!==e.email&&await e.reload()}async function vn(e,t,n){const i=(0,r.m9)(e),o=await e.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:o,newEmail:t};n&&nn(i.auth,s,n);const{email:a}=await ct(i.auth,s);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(e,t){return M(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.m9)(e),o=await i.getIdToken(),s={idToken:o,displayName:t,photoUrl:n,returnSecureToken:!0},a=await X(i,yn(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function wn(e,t){return In((0,r.m9)(e),t,null)}function _n(e,t){return In((0,r.m9)(e),null,t)}async function In(e,t,n){const{auth:r}=e,i=await e.getIdToken(),o={idToken:i,returnSecureToken:!0};t&&(o.email=t),n&&(o.password=n);const s=await X(e,tt(r,o));await e._updateTokensIfNecessary(s,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=K(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new Tn(o,e)}}if(!r)return null;switch(r){case"facebook.com":return new Sn(o,i);case"github.com":return new On(o,i);case"google.com":return new Cn(o,i);case"twitter.com":return new An(o,i,e.screenName||null);case"custom":case"anonymous":return new Tn(o,null);default:return new Tn(o,r,i)}}class Tn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class kn extends Tn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class Sn extends Tn{constructor(e,t){super(e,"facebook.com",t)}}class On extends kn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class Cn extends Tn{constructor(e,t){super(e,"google.com",t)}}class An extends kn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Rn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:En(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function xn(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function Nn(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}class Dn{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new Dn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Dn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Dn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Dn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=ze(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>Qt._fromServerResponse(n,e)));E(r.mfaPendingCredential,n,"internal-error");const o=Dn._fromMfaPendingCredential(r.mfaPendingCredential);return new Ln(o,i,(async e=>{const i=await e._process(n,o);delete r.mfaInfo,delete r.mfaPendingCredential;const s=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Mt._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return E(t.user,n,"internal-error"),Mt._forOperation(t.user,t.operationType,s);default:y(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function jn(e,t){var n;const i=(0,r.m9)(e),o=t;return E(t.customData.operationType,i,"argument-error"),E(null===(n=o.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),Ln._fromError(i,o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",j(e,t))}function Un(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",j(e,t))}function Fn(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",j(e,t))}function Vn(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",j(e,t))}function $n(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:withdraw",j(e,t))}class Hn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Qt._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Hn(e)}async getSession(){return Dn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await X(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await X(this.user,$n(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(r){throw r}}}const Bn=new WeakMap;function zn(e){const t=(0,r.m9)(e);return Bn.has(t)||Bn.set(t,Hn._fromUser(t)),Bn.get(t)}const Wn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wn,"1"),this.storage.removeItem(Wn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){const e=(0,r.z$)();return ve(e)||Ee(e)}const Gn=1e3,Kn=10;class Yn extends qn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Jn()&&Ce(),this.fallbackToPolling=Oe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Se()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Kn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Gn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yn.type="LOCAL";const Xn=Yn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends qn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zn.type="SESSION";const Qn=Zn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new tr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await er(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nr(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr.receivers=[];class rr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=nr("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return window}function or(e){ir().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return"undefined"!==typeof ir()["WorkerGlobalScope"]&&"function"===typeof ir()["importScripts"]}async function ar(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function cr(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function ur(){return sr()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="firebaseLocalStorageDb",dr=1,fr="firebaseLocalStorage",hr="fbase_key";class pr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function mr(e,t){return e.transaction([fr],t?"readwrite":"readonly").objectStore(fr)}function gr(){const e=indexedDB.deleteDatabase(lr);return new pr(e).toPromise()}function vr(){const e=indexedDB.open(lr,dr);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(fr,{keyPath:hr})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(fr)?t(n):(n.close(),await gr(),t(await vr()))}))}))}async function yr(e,t,n){const r=mr(e,!0).put({[hr]:t,value:n});return new pr(r).toPromise()}async function br(e,t){const n=mr(e,!1).get(t),r=await new pr(n).toPromise();return void 0===r?null:r.value}function wr(e,t){const n=mr(e,!0).delete(t);return new pr(n).toPromise()}const _r=800,Ir=3;class Er{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await vr()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Ir)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tr._getInstance(ur()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await ar(),!this.activeServiceWorker)return;this.sender=new rr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&cr()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vr();return await yr(e,Wn,"1"),await wr(e,Wn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>yr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>br(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>wr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=mr(e,!1).getAll();return new pr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),_r)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Er.type="LOCAL";const Tr=Er;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:start",j(e,t))}function Sr(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",j(e,t))}function Or(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=500,Ar=6e4,Rr=1e12;class Pr{constructor(e){this.auth=e,this.counter=Rr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new xr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||Rr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||Rr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||Rr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class xr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;E(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Nr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),Ar)}),Cr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Nr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=Me("rcb"),Lr=new P(3e4,6e4),jr="https://www.google.com/recaptcha/api.js?";class Mr{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=ir().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return E(Ur(t),e,"argument-error"),this.shouldResolveImmediately(t)&&xe(ir().grecaptcha)?Promise.resolve(ir().grecaptcha):new Promise(((n,i)=>{const o=ir().setTimeout((()=>{i(b(e,"network-request-failed"))}),Lr.get());ir()[Dr]=()=>{ir().clearTimeout(o),delete ir()[Dr];const r=ir().grecaptcha;if(!r||!xe(r))return void i(b(e,"internal-error"));const s=r.render;r.render=(e,t)=>{const n=s(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const s=`${jr}?${(0,r.xO)({onload:Dr,render:"explicit",hl:t})}`;je(s).catch((()=>{clearTimeout(o),i(b(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=ir().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ur(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Fr{async load(e){return new Pr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="recaptcha",$r={theme:"light",type:"image"};class Hr{constructor(e,t=Object.assign({},$r),n){this.parameters=t,this.type=Vr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ze(n),this.isInvisible="invisible"===this.parameters.size,E("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;E(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Fr:new Mr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){E(!this.parameters.sitekey,this.auth,"argument-error"),E(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),E("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=ir()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){E(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){E(O()&&!sr(),this.auth,"internal-error"),await Br(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Re(this.auth);E(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return E(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Br(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=wt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Wr(e,t,n){const i=ze(e),o=await Gr(i,t,(0,r.m9)(n));return new zr(o,(e=>Gt(i,e)))}async function qr(e,t,n){const i=(0,r.m9)(e);await Wt(!1,i,"phone");const o=await Gr(i.auth,t,(0,r.m9)(n));return new zr(o,(e=>Kt(i,e)))}async function Jr(e,t,n){const i=(0,r.m9)(e),o=await Gr(i.auth,t,(0,r.m9)(n));return new zr(o,(e=>Yt(i,e)))}async function Gr(e,t,n){var r;const i=await n.verify();try{let o;if(E("string"===typeof i,e,"argument-error"),E(n.type===Vr,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){E("enroll"===t.type,e,"internal-error");const n=await Mn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{E("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;E(n,e,"missing-multi-factor-info");const s=await kr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await mt(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Kr(e,t){await zt((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.providerId=Yr.PROVIDER_ID,this.auth=ze(e)}verifyPhoneNumber(e,t){return Gr(this.auth,e,(0,r.m9)(t))}static credential(e,t){return wt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Yr.credentialFromTaggedObject(t)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?wt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xr(e,t){return t?le(t):(E(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yr.PROVIDER_ID="phone",Yr.PHONE_SIGN_IN_METHOD="phone";class Zr extends Qe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qr(e){return Jt(e.auth,new Zr(e),e.bypassAuthState)}function ei(e){const{auth:t,user:n}=e;return E(n,t,"internal-error"),qt(n,new Zr(e),e.bypassAuthState)}async function ti(e){const{auth:t,user:n}=e;return E(n,t,"internal-error"),zt(n,new Zr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qr;case"linkViaPopup":case"linkViaRedirect":return ti;case"reauthViaPopup":case"reauthViaRedirect":return ei;default:y(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new P(2e3,1e4);async function ii(e,t,n){const r=ze(e);_(e,t,kt);const i=Xr(r,n),o=new ai(r,"signInViaPopup",t,i);return o.executeNotNull()}async function oi(e,t,n){const i=(0,r.m9)(e);_(i.auth,t,kt);const o=Xr(i.auth,n),s=new ai(i.auth,"reauthViaPopup",t,o,i);return s.executeNotNull()}async function si(e,t,n){const i=(0,r.m9)(e);_(i.auth,t,kt);const o=Xr(i.auth,n),s=new ai(i.auth,"linkViaPopup",t,o,i);return s.executeNotNull()}class ai extends ni{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,"Popup operations only handle one event");const e=nr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(b(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ri.get())};e()}}ai.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ci="pendingRedirect",ui=new Map;class li extends ni{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ui.get(this.auth._key());if(!e){try{const t=await di(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ui.set(this.auth._key(),e)}return this.bypassAuthState||ui.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function di(e,t){const n=gi(t),r=mi(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function fi(e,t){return mi(e)._set(gi(t),"true")}function hi(){ui.clear()}function pi(e,t){ui.set(e._key(),t)}function mi(e){return le(e._redirectPersistence)}function gi(e){return he(ci,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(e,t,n){return yi(e,t,n)}async function yi(e,t,n){const r=ze(e);_(e,t,kt),await r._initializationPromise;const i=Xr(r,n);return await fi(i,r),i._openRedirect(r,t,"signInViaRedirect")}function bi(e,t,n){return wi(e,t,n)}async function wi(e,t,n){const i=(0,r.m9)(e);_(i.auth,t,kt),await i.auth._initializationPromise;const o=Xr(i.auth,n);await fi(o,i.auth);const s=await ki(i);return o._openRedirect(i.auth,t,"reauthViaRedirect",s)}function _i(e,t,n){return Ii(e,t,n)}async function Ii(e,t,n){const i=(0,r.m9)(e);_(i.auth,t,kt),await i.auth._initializationPromise;const o=Xr(i.auth,n);await Wt(!1,i,t.providerId),await fi(o,i.auth);const s=await ki(i);return o._openRedirect(i.auth,t,"linkViaRedirect",s)}async function Ei(e,t){return await ze(e)._initializationPromise,Ti(e,t,!1)}async function Ti(e,t,n=!1){const r=ze(e),i=Xr(r,t),o=new li(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}async function ki(e){const t=nr(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=6e5;class Oi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Ri(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ai(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(b(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Si&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ci(e))}saveEventToCache(e){this.cachedEventUids.add(Ci(e)),this.lastProcessedEventTime=Date.now()}}function Ci(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ai({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Ri(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ai(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(e,t={}){return M(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ni=/^https?/;async function Di(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Pi(e);for(const r of t)try{if(Li(r))return}catch(n){}y(e,"unauthorized-domain")}function Li(e){const t=S(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ni.test(n))return!1;if(xi.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new P(3e4,6e4);function Mi(){const e=ir().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Ui(e){return new Promise(((t,n)=>{var r,i,o;function s(){Mi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mi(),n(b(e,"network-request-failed"))},timeout:ji.get()})}if(null===(i=null===(r=ir().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=ir().gapi)||void 0===o?void 0:o.load)){const t=Me("iframefcb");return ir()[t]=()=>{gapi.load?s():n(b(e,"network-request-failed"))},je(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Fi=null,e}))}let Fi=null;function Vi(e){return Fi=Fi||Ui(e),Fi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new P(5e3,15e3),Hi="__/auth/iframe",Bi="emulator/auth/iframe",zi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qi(e){const t=e.config;E(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?x(t,Bi):`https://${e.config.authDomain}/${Hi}`,o={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},s=Wi.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function Ji(e){const t=await Vi(e),n=ir().gapi;return E(n,e,"internal-error"),t.open({where:document.body,url:qi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zi,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=b(e,"network-request-failed"),o=ir().setTimeout((()=>{r(i)}),$i.get());function s(){ir().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ki=500,Yi=600,Xi="_blank",Zi="http://localhost";class Qi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function eo(e,t,n,i=Ki,o=Yi){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Gi),{width:i.toString(),height:o.toString(),top:s,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=ye(l)?Xi:n),ge(l)&&(t=t||Zi,u.scrollbars="yes");const d=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ke(l)&&"_self"!==c)return to(t||"",c),new Qi(null);const f=window.open(t||"",c,d);E(f,e,"popup-blocked");try{f.focus()}catch(h){}return new Qi(f)}function to(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="__/auth/handler",ro="emulator/auth/handler",io=encodeURIComponent("fac");async function oo(e,t,n,o,s,a){E(e.config.authDomain,e,"auth-domain-config-required"),E(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.SDK_VERSION,eventId:s};if(t instanceof kt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof St){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),d=l?`#${io}=${encodeURIComponent(l)}`:"";return`${so(e)}?${(0,r.xO)(u).slice(1)}${d}`}function so({config:e}){return e.emulator?x(e,ro):`https://${e.authDomain}/${no}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="webStorageSupport";class co{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qn,this._completeRedirectFn=Ti,this._overrideRedirectResult=pi}async _openPopup(e,t,n,r){var i;k(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await oo(e,t,n,S(),r);return eo(e,o,nr())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await oo(e,t,n,S(),r);return or(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ji(e),n=new Oi(e);return t.register("authEvent",(t=>{E(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ao,{type:ao},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[ao];void 0!==i&&t(!!i),y(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Di(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oe()||ve()||Ee()}}const uo=co;class lo{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return T("unexpected MultiFactorSessionType")}}}class fo extends lo{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new fo(e)}_finalizeEnroll(e,t,n){return Un(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Sr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ho{constructor(){}static assertion(e){return fo._fromCredential(e)}}ho.FACTOR_ID="phone";class po{static assertionForEnrollment(e,t){return mo._fromSecret(e,t)}static assertionForSignIn(e,t){return mo._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;E("undefined"!==typeof t.auth,"internal-error");const n=await Fn(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return go._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}po.FACTOR_ID="totp";class mo extends lo{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new mo(t,void 0,e)}static _fromEnrollmentId(e,t){return new mo(t,e)}async _finalizeEnroll(e,t,n){return E("undefined"!==typeof this.secret,e,"argument-error"),Vn(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){E(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Or(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class go{constructor(e,t,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new go(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(vo(e)||vo(t))&&(r=!0),r&&(vo(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),vo(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function vo(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var yo="@firebase/auth",bo="0.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Io(e){(0,i._registerComponent)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;E(s&&!s.includes(":"),"invalid-api-key",{appName:r.name}),E(!(null===a||void 0===a?void 0:a.includes(":")),"argument-error",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ae(e)},u=new Be(r,i,o,c);return Je(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i._registerComponent)(new a.wA("auth-internal",(e=>{const t=ze(e.getProvider("auth").getImmediate());return(e=>new wo(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(yo,bo,_o(e)),(0,i.registerVersion)(yo,bo,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=300,To=(0,r.Pz)("authIdTokenMaxAge")||Eo;let ko=null;const So=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>To)return;const i=null===n||void 0===n?void 0:n.token;ko!==i&&(ko=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Oo(e=(0,i.getApp)()){const t=(0,i._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=qe(e,{popupRedirectResolver:uo,persistence:[Tr,Xn,Qn]}),o=(0,r.Pz)("authTokenSyncURL");if(o){const e=So(o);xn(n,e,(()=>e(n.currentUser))),Pn(n,(t=>e(t)))}const s=(0,r.q4)("auth");return s&&Ge(n,`http://${s}`),n}Io("Browser")},6816:function(e,t,n){"use strict";n.d(t,{BH:function(){return _},L:function(){return c},LL:function(){return D},P0:function(){return y},Pz:function(){return w},Sg:function(){return I},UG:function(){return k},ZB:function(){return l},ZR:function(){return N},aH:function(){return b},b$:function(){return C},eu:function(){return P},hl:function(){return R},jU:function(){return S},m9:function(){return G},ne:function(){return z},pd:function(){return B},q4:function(){return v},r3:function(){return M},ru:function(){return O},tV:function(){return u},uI:function(){return T},vZ:function(){return F},w1:function(){return A},xO:function(){return $},xb:function(){return U},z$:function(){return E},zd:function(){return H}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(d=64)),r.push(n[u],n[l],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,a=o?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,d=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==d)throw new s;const f=t<<2|a>>4;if(r.push(f),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==d){const e=u<<6&192|d;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return o.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&d(n)&&(e[n]=l(e[n],t[n]));return e}function d(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>f().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/IDNCreaterPages/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},g=()=>{try{return h()||p()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},v=e=>{var t,n;return null===(n=null===(t=g())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},y=e=>{const t=v(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},b=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config},w=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function T(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function k(){var e;const t=null===(e=g())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function S(){return"object"===typeof self&&self.self===self}function O(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function A(){const e=E();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function R(){try{return"object"===typeof indexedDB}catch(e){return!1}}function P(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const x="FirebaseError";class N extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=x,Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?L(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new N(r,s,n);return a}}function L(e,t){return e.replace(j,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const j=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function U(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function F(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(V(n)&&V(o)){if(!F(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function V(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function H(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function B(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t){const n=new W(e,t);return n.subscribe.bind(n)}class W{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=q(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=J),void 0===r.error&&(r.error=J),void 0===r.complete&&(r.complete=J);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function q(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function J(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e){return e&&e._delegate?e._delegate:e}},4188:function(e,t,n){"use strict";n.d(t,{B:function(){return s},BK:function(){return Je},Bj:function(){return o},EB:function(){return u},Fl:function(){return Ze},IU:function(){return Ne},Jd:function(){return S},PG:function(){return Ae},SU:function(){return ze},Um:function(){return Se},WL:function(){return qe},X$:function(){return R},X3:function(){return xe},XI:function(){return $e},Xl:function(){return De},dq:function(){return Fe},iH:function(){return Ve},j:function(){return C},lk:function(){return O},nZ:function(){return c},qj:function(){return ke},qq:function(){return I},yT:function(){return Pe}});n(7658);var r=n(4887);let i;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function s(e){return new o(e)}function a(e,t=i){t&&t.active&&t.effects.push(e)}function c(){return i}function u(e){i&&i.cleanups.push(e)}const l=e=>{const t=new Set(e);return t.w=0,t.n=0,t},d=e=>(e.w&v)>0,f=e=>(e.n&v)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=v},p=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];d(i)&&!f(i)?i.delete(e):t[n++]=i,i.w&=~v,i.n&=~v}t.length=n}},m=new WeakMap;let g=0,v=1;const y=30;let b;const w=Symbol(""),_=Symbol("");class I{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=b,t=T;while(e){if(e===this)return;e=e.parent}try{return this.parent=b,b=this,T=!0,v=1<<++g,g<=y?h(this):E(this),this.fn()}finally{g<=y&&p(this),v=1<<--g,b=this.parent,T=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){b===this?this.deferStop=!0:this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let T=!0;const k=[];function S(){k.push(T),T=!1}function O(){const e=k.pop();T=void 0===e||e}function C(e,t,n){if(T&&b){let t=m.get(e);t||m.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=l());const i=void 0;A(r,i)}}function A(e,t){let n=!1;g<=y?f(e)||(e.n|=v,n=!d(e)):n=!e.has(b),n&&(e.add(b),b.deps.push(e))}function R(e,t,n,i,o,s){const a=m.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(w)),(0,r._N)(e)&&c.push(a.get(_)));break;case"delete":(0,r.kJ)(e)||(c.push(a.get(w)),(0,r._N)(e)&&c.push(a.get(_)));break;case"set":(0,r._N)(e)&&c.push(a.get(w));break}if(1===c.length)c[0]&&P(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);P(l(e))}}function P(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&x(r,t);for(const r of n)r.computed||x(r,t)}function x(e,t){(e!==b||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function N(e,t){var n;return null===(n=m.get(e))||void 0===n?void 0:n.get(t)}const D=(0,r.fY)("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),j=H(),M=H(!1,!0),U=H(!0),F=V();function V(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ne(this);for(let t=0,i=this.length;t<i;t++)C(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ne)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){S();const n=Ne(this)[t].apply(this,e);return O(),n}})),e}function $(e){const t=Ne(this);return C(t,"has",e),t.hasOwnProperty(e)}function H(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?Ie:_e:t?we:be).get(n))return n;const s=(0,r.kJ)(n);if(!e){if(s&&(0,r.RI)(F,i))return Reflect.get(F,i,o);if("hasOwnProperty"===i)return $}const a=Reflect.get(n,i,o);return((0,r.yk)(i)?L.has(i):D(i))?a:(e||C(n,"get",i),t?a:Fe(a)?s&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Oe(a):ke(a):a)}}const B=W(),z=W(!0);function W(e=!1){return function(t,n,i,o){let s=t[n];if(Re(s)&&Fe(s)&&!Fe(i))return!1;if(!e&&(Pe(i)||Re(i)||(s=Ne(s),i=Ne(i)),!(0,r.kJ)(t)&&Fe(s)&&!Fe(i)))return s.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,o);return t===Ne(o)&&(a?(0,r.aU)(i,s)&&R(t,"set",n,i,s):R(t,"add",n,i)),c}}function q(e,t){const n=(0,r.RI)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&R(e,"delete",t,void 0,i),o}function J(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&L.has(t)||C(e,"has",t),n}function G(e){return C(e,"iterate",(0,r.kJ)(e)?"length":w),Reflect.ownKeys(e)}const K={get:j,set:B,deleteProperty:q,has:J,ownKeys:G},Y={get:U,set(e,t){return!0},deleteProperty(e,t){return!0}},X=(0,r.l7)({},K,{get:M,set:z}),Z=e=>e,Q=e=>Reflect.getPrototypeOf(e);function ee(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ne(e),o=Ne(t);n||(t!==o&&C(i,"get",t),C(i,"get",o));const{has:s}=Q(i),a=r?Z:n?je:Le;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function te(e,t=!1){const n=this["__v_raw"],r=Ne(n),i=Ne(e);return t||(e!==i&&C(r,"has",e),C(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function ne(e,t=!1){return e=e["__v_raw"],!t&&C(Ne(e),"iterate",w),Reflect.get(e,"size",e)}function re(e){e=Ne(e);const t=Ne(this),n=Q(t),r=n.has.call(t,e);return r||(t.add(e),R(t,"add",e,e)),this}function ie(e,t){t=Ne(t);const n=Ne(this),{has:i,get:o}=Q(n);let s=i.call(n,e);s||(e=Ne(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?(0,r.aU)(t,a)&&R(n,"set",e,t,a):R(n,"add",e,t),this}function oe(e){const t=Ne(this),{has:n,get:r}=Q(t);let i=n.call(t,e);i||(e=Ne(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&R(t,"delete",e,void 0,o),s}function se(){const e=Ne(this),t=0!==e.size,n=void 0,r=e.clear();return t&&R(e,"clear",void 0,void 0,n),r}function ae(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Ne(o),a=t?Z:e?je:Le;return!e&&C(s,"iterate",w),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function ce(e,t,n){return function(...i){const o=this["__v_raw"],s=Ne(o),a=(0,r._N)(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=o[e](...i),d=n?Z:t?je:Le;return!t&&C(s,"iterate",u?_:w),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function ue(e){return function(...t){return"delete"!==e&&this}}function le(){const e={get(e){return ee(this,e)},get size(){return ne(this)},has:te,add:re,set:ie,delete:oe,clear:se,forEach:ae(!1,!1)},t={get(e){return ee(this,e,!1,!0)},get size(){return ne(this)},has:te,add:re,set:ie,delete:oe,clear:se,forEach:ae(!1,!0)},n={get(e){return ee(this,e,!0)},get size(){return ne(this,!0)},has(e){return te.call(this,e,!0)},add:ue("add"),set:ue("set"),delete:ue("delete"),clear:ue("clear"),forEach:ae(!0,!1)},r={get(e){return ee(this,e,!0,!0)},get size(){return ne(this,!0)},has(e){return te.call(this,e,!0)},add:ue("add"),set:ue("set"),delete:ue("delete"),clear:ue("clear"),forEach:ae(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=ce(i,!1,!1),n[i]=ce(i,!0,!1),t[i]=ce(i,!1,!0),r[i]=ce(i,!0,!0)})),[e,n,t,r]}const[de,fe,he,pe]=le();function me(e,t){const n=t?e?pe:he:e?fe:de;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,o)}const ge={get:me(!1,!1)},ve={get:me(!1,!0)},ye={get:me(!0,!1)};const be=new WeakMap,we=new WeakMap,_e=new WeakMap,Ie=new WeakMap;function Ee(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Te(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Ee((0,r.W7)(e))}function ke(e){return Re(e)?e:Ce(e,!1,K,ge,be)}function Se(e){return Ce(e,!1,X,ve,we)}function Oe(e){return Ce(e,!0,Y,ye,_e)}function Ce(e,t,n,i,o){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=Te(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function Ae(e){return Re(e)?Ae(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Re(e){return!(!e||!e["__v_isReadonly"])}function Pe(e){return!(!e||!e["__v_isShallow"])}function xe(e){return Ae(e)||Re(e)}function Ne(e){const t=e&&e["__v_raw"];return t?Ne(t):e}function De(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Le=e=>(0,r.Kn)(e)?ke(e):e,je=e=>(0,r.Kn)(e)?Oe(e):e;function Me(e){T&&b&&(e=Ne(e),A(e.dep||(e.dep=l())))}function Ue(e,t){e=Ne(e);const n=e.dep;n&&P(n)}function Fe(e){return!(!e||!0!==e.__v_isRef)}function Ve(e){return He(e,!1)}function $e(e){return He(e,!0)}function He(e,t){return Fe(e)?e:new Be(e,t)}class Be{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ne(e),this._value=t?e:Le(e)}get value(){return Me(this),this._value}set value(e){const t=this.__v_isShallow||Pe(e)||Re(e);e=t?e:Ne(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Le(e),Ue(this,e))}}function ze(e){return Fe(e)?e.value:e}const We={get:(e,t,n)=>ze(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Fe(i)&&!Fe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function qe(e){return Ae(e)?e:new Proxy(e,We)}function Je(e){const t=(0,r.kJ)(e)?new Array(e.length):{};for(const n in e)t[n]=Ke(e,n);return t}class Ge{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return N(Ne(this._object),this._key)}}function Ke(e,t,n){const r=e[t];return Fe(r)?r:new Ge(e,t,n)}var Ye;class Xe{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Ye]=!1,this._dirty=!0,this.effect=new I(e,(()=>{this._dirty||(this._dirty=!0,Ue(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ne(this);return Me(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ze(e,t,n=!1){let i,o;const s=(0,r.mf)(e);s?(i=e,o=r.dG):(i=e.get,o=e.set);const a=new Xe(i,o,s||!o,n);return a}Ye="__v_isReadonly"},8473:function(e,t,n){"use strict";n.d(t,{$d:function(){return s},Cn:function(){return j},FN:function(){return pn},Fl:function(){return Rn},HY:function(){return xt},JJ:function(){return q},Ko:function(){return Fe},P$:function(){return re},Q6:function(){return ue},U2:function(){return oe},Uk:function(){return tn},Us:function(){return St},Wm:function(){return Xt},Y3:function(){return y},Y8:function(){return ee},YP:function(){return K},_:function(){return Yt},aZ:function(){return le},dD:function(){return L},f3:function(){return J},h:function(){return Pn},iD:function(){return Bt},ic:function(){return ke},j4:function(){return zt},kq:function(){return rn},nK:function(){return ce},uE:function(){return nn},up:function(){return Le},w5:function(){return M},wg:function(){return Ut},wy:function(){return xe}});n(7658),n(541);var r=n(4188),i=n(4887);function o(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){a(o,t,n)}return i}function s(e,t,n,r){if((0,i.mf)(e)){const s=o(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{a(e,t,n)})),s}const c=[];for(let i=0;i<e.length;i++)c.push(s(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void o(a,null,10,[e,i,s])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const d=[];let f=0;const h=[];let p=null,m=0;const g=Promise.resolve();let v=null;function y(e){const t=v||g;return e?t.then(this?e.bind(this):e):t}function b(e){let t=f+1,n=d.length;while(t<n){const r=t+n>>>1,i=S(d[r]);i<e?t=r+1:n=r}return t}function w(e){d.length&&d.includes(e,u&&e.allowRecurse?f+1:f)||(null==e.id?d.push(e):d.splice(b(e.id),0,e),_())}function _(){u||l||(l=!0,v=g.then(C))}function I(e){const t=d.indexOf(e);t>f&&d.splice(t,1)}function E(e){(0,i.kJ)(e)?h.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||h.push(e),_()}function T(e,t=(u?f+1:0)){for(0;t<d.length;t++){const e=d[t];e&&e.pre&&(d.splice(t,1),t--,e())}}function k(e){if(h.length){const e=[...new Set(h)];if(h.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>S(e)-S(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const S=e=>null==e.id?1/0:e.id,O=(e,t)=>{const n=S(e)-S(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function C(e){l=!1,u=!0,d.sort(O);i.dG;try{for(f=0;f<d.length;f++){const e=d[f];e&&!1!==e.active&&o(e,null,14)}}finally{f=0,d.length=0,k(e),u=!1,v=null,(d.length||h.length)&&C(e)}}new Set;new Map;function A(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let o=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:s}=r[e]||i.kT;s&&(o=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(o=n.map(i.h5))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&s(l,e,6,o);const d=r[u+"Once"];if(d){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,s(d,e,6,o)}}function R(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=R(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,i.kJ)(s)?s.forEach((e=>a[e]=null)):(0,i.l7)(a,s),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function P(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let x=null,N=null;function D(e){const t=x;return x=e,N=e&&e.type.__scopeId||null,t}function L(e){N=e}function j(){N=null}function M(e,t=x,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&$t(-1);const i=D(t);let o;try{o=e(...n)}finally{D(i),r._d&&$t(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function U(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[c],slots:u,attrs:l,emit:d,render:f,renderCache:h,data:p,setupState:m,ctx:g,inheritAttrs:v}=e;let y,b;const w=D(e);try{if(4&n.shapeFlag){const e=o||r;y=on(f.call(e,e,h,s,m,p,g)),b=l}else{const e=t;0,y=on(e.length>1?e(s,{attrs:l,slots:u,emit:d}):e(s,null)),b=t.props?l:F(l)}}catch(I){jt.length=0,a(I,e,1),y=Xt(Dt)}let _=y;if(b&&!1!==v){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(c&&e.some(i.tR)&&(b=V(b,c)),_=en(_,b))}return n.dirs&&(_=en(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),y=_,D(w),y}const F=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},V=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function $(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||H(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?H(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!P(u,n))return!0}}return!1}function H(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!P(n,o))return!0}return!1}function B({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const z=e=>e.__isSuspense;function W(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):E(e)}function q(e,t){if(hn){let n=hn.provides;const r=hn.parent&&hn.parent.provides;r===n&&(n=hn.provides=Object.create(r)),n[e]=t}else 0}function J(e,t,n=!1){const r=hn||x;if(r){const o=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const G={};function K(e,t,n){return Y(e,t,n)}function Y(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const d=(0,r.nZ)()===(null===hn||void 0===hn?void 0:hn.scope)?hn:null;let f,h,p=!1,m=!1;if((0,r.dq)(e)?(f=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(f=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),f=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Q(e):(0,i.mf)(e)?o(e,d,2):void 0))):f=(0,i.mf)(e)?t?()=>o(e,d,2):()=>{if(!d||!d.isUnmounted)return h&&h(),s(e,d,3,[v])}:i.dG,t&&a){const e=f;f=()=>Q(e())}let g,v=e=>{h=I.onStop=()=>{o(e,d,4)}};if(wn){if(v=i.dG,t?n&&s(t,d,3,[f(),m?[]:void 0,v]):f(),"sync"!==c)return i.dG;{const e=Nn();g=e.__watcherHandles||(e.__watcherHandles=[])}}let y=m?new Array(e.length).fill(G):G;const b=()=>{if(I.active)if(t){const e=I.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(h&&h(),s(t,d,3,[e,y===G?void 0:m&&y[0]===G?[]:y,v]),y=e)}else I.run()};let _;b.allowRecurse=!!t,"sync"===c?_=b:"post"===c?_=()=>kt(b,d&&d.suspense):(b.pre=!0,d&&(b.id=d.uid),_=()=>w(b));const I=new r.qq(f,_);t?n?b():y=I.run():"post"===c?kt(I.run.bind(I),d&&d.suspense):I.run();const E=()=>{I.stop(),d&&d.scope&&(0,i.Od)(d.scope.effects,I)};return g&&g.push(E),E}function X(e,t,n){const r=this.proxy,o=(0,i.HD)(e)?e.includes(".")?Z(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.mf)(t)?s=t:(s=t.handler,n=t);const a=hn;mn(this);const c=Y(o,s.bind(r),n);return a?mn(a):gn(),c}function Z(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Q(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Q(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Q(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Q(e,t)}));else if((0,i.PO)(e))for(const n in e)Q(e[n],t);return e}function ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ee((()=>{e.isMounted=!0})),Se((()=>{e.isUnmounting=!0})),e}const te=[Function,Array],ne={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:te,onEnter:te,onAfterEnter:te,onEnterCancelled:te,onBeforeLeave:te,onLeave:te,onAfterLeave:te,onLeaveCancelled:te,onBeforeAppear:te,onAppear:te,onAfterAppear:te,onAppearCancelled:te},setup(e,{slots:t}){const n=pn(),i=ee();let o;return()=>{const s=t.default&&ue(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Dt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return se(a);const l=ae(a);if(!l)return se(a);const d=oe(l,c,i,n);ce(l,d);const f=n.subTree,h=f&&ae(f);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===o?o=e:e!==o&&(o=e,p=!0)}if(h&&h.type!==Dt&&(!qt(l,h)||p)){const e=oe(h,c,i,n);if(ce(h,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},se(a);"in-out"===u&&l.type!==Dt&&(e.delayLeave=(e,t,n)=>{const r=ie(i,h);r[String(h.key)]=h,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=n})}return a}}},re=ne;function ie(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function oe(e,t,n,r){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:b,onAppearCancelled:w}=t,_=String(e.key),I=ie(n,e),E=(e,t)=>{e&&s(e,r,9,t)},T=(e,t)=>{const n=t[1];E(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},k={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!o)return;r=v||u}t._leaveCb&&t._leaveCb(!0);const i=I[_];i&&qt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),E(r,[t])},enter(e){let t=l,r=d,i=f;if(!n.isMounted){if(!o)return;t=y||l,r=b||d,i=w||f}let s=!1;const a=e._enterCb=t=>{s||(s=!0,E(t?i:r,[e]),k.delayedLeave&&k.delayedLeave(),e._enterCb=void 0)};t?T(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();E(h,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),E(n?g:m,[t]),t._leaveCb=void 0,I[i]===e&&delete I[i])};I[i]=e,p?T(p,[t,s]):s()},clone(e){return oe(e,t,n,r)}};return k}function se(e){if(fe(e))return e=en(e),e.children=null,e}function ae(e){return fe(e)?e.children?e.children[0]:void 0:e}function ce(e,t){6&e.shapeFlag&&e.component?ce(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ue(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===xt?(128&s.patchFlag&&i++,r=r.concat(ue(s.children,t,a))):(t||s.type!==Dt)&&r.push(null!=a?en(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function le(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const de=e=>!!e.type.__asyncLoader;const fe=e=>e.type.__isKeepAlive;RegExp,RegExp;function he(e,t){return(0,i.kJ)(e)?e.some((e=>he(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!(0,i.Kj)(e)&&e.test(t)}function pe(e,t){ge(e,"a",t)}function me(e,t){ge(e,"da",t)}function ge(e,t,n=hn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(we(t,r,n),n){let e=n.parent;while(e&&e.parent)fe(e.parent.vnode)&&ve(r,t,n,e),e=e.parent}}function ve(e,t,n,r){const o=we(t,e,r,!0);Oe((()=>{(0,i.Od)(r[t],o)}),n)}function ye(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function be(e){return 128&e.shapeFlag?e.ssContent:e}function we(e,t,n=hn,i=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),mn(n);const o=s(t,n,e,i);return gn(),(0,r.lk)(),o});return i?o.unshift(a):o.push(a),a}}const _e=e=>(t,n=hn)=>(!wn||"sp"===e)&&we(e,((...e)=>t(...e)),n),Ie=_e("bm"),Ee=_e("m"),Te=_e("bu"),ke=_e("u"),Se=_e("bum"),Oe=_e("um"),Ce=_e("sp"),Ae=_e("rtg"),Re=_e("rtc");function Pe(e,t=hn){we("ec",e,t)}function xe(e,t){const n=x;if(null===n)return e;const r=On(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=i.kT]=t[s];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Q(n),o.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function Ne(e,t,n,i){const o=e.dirs,a=t&&t.dirs;for(let c=0;c<o.length;c++){const u=o[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),s(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}const De="components";function Le(e,t){return Me(De,e,!0,t)||e}const je=Symbol();function Me(e,t,n=!0,r=!1){const o=x||hn;if(o){const n=o.type;if(e===De){const e=Cn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const s=Ue(o[e]||n[e],t)||Ue(o.appContext[e],t);return!s&&r?n:s}}function Ue(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Fe(e,t,n,r){let o;const s=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}const Ve=e=>e?vn(e)?On(e)||e.proxy:Ve(e.parent):null,$e=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ve(e.parent),$root:e=>Ve(e.root),$emit:e=>e.emit,$options:e=>Ke(e),$forceUpdate:e=>e.f||(e.f=()=>w(e.update)),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>X.bind(e)}),He=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),Be={get({_:e},t){const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:u,appContext:l}=e;let d;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(He(o,t))return c[t]=1,o[t];if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=2,s[t];if((d=e.propsOptions[0])&&(0,i.RI)(d,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];ze&&(c[t]=0)}}const f=$e[t];let h,p;return f?("$attrs"===t&&(0,r.j)(e,"get",t),f(e)):(h=u.__cssModules)&&(h=h[t])?h:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return He(o,t)?(o[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||He(t,a)||(c=s[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)($e,a)||(0,i.RI)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ze=!0;function We(e){const t=Ke(e),n=e.proxy,o=e.ctx;ze=!1,t.beforeCreate&&Je(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:d,created:f,beforeMount:h,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:I,render:E,renderTracked:T,renderTriggered:k,errorCaptured:S,serverPrefetch:O,expose:C,inheritAttrs:A,components:R,directives:P,filters:x}=t,N=null;if(d&&qe(d,o,N,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(ze=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const s=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Rn({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ge(u[r],o,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{q(t,e[t])}))}function D(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(f&&Je(f,e,"c"),D(Ie,h),D(Ee,p),D(Te,m),D(ke,g),D(pe,v),D(me,y),D(Pe,S),D(Re,T),D(Ae,k),D(Se,w),D(Oe,I),D(Ce,O),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=A&&(e.inheritAttrs=A),R&&(e.components=R),P&&(e.directives=P)}function qe(e,t,n=i.dG,o=!1){(0,i.kJ)(e)&&(e=et(e));for(const s in e){const n=e[s];let a;a=(0,i.Kn)(n)?"default"in n?J(n.from||s,n.default,!0):J(n.from||s):J(n),(0,r.dq)(a)&&o?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[s]=a}}function Je(e,t,n){s((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ge(e,t,n,r){const o=r.includes(".")?Z(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&K(o,n)}else if((0,i.mf)(e))K(o,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ge(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&K(o,r,e)}else 0}function Ke(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let u;return c?u=c:o.length||n||r?(u={},o.length&&o.forEach((e=>Ye(u,e,a,!0))),Ye(u,t,a)):u=t,(0,i.Kn)(t)&&s.set(t,u),u}function Ye(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Ye(e,o,n,!0),i&&i.forEach((t=>Ye(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=Xe[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Xe={data:Ze,props:nt,emits:nt,methods:nt,computed:nt,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:nt,directives:nt,watch:rt,provide:Ze,inject:Qe};function Ze(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Qe(e,t){return nt(et(e),et(t))}function et(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function rt(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function it(e,t,n,o=!1){const s={},a={};(0,i.Nj)(a,Jt,1),e.propsDefaults=Object.create(null),st(e,t,s,a);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=o?s:(0,r.Um)(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function ot(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(s),[l]=e.propsOptions;let d=!1;if(!(o||c>0)||16&c){let r;st(e,t,s,a)&&(d=!0);for(const o in u)t&&((0,i.RI)(t,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(t,r))||(l?!n||void 0===n[o]&&void 0===n[r]||(s[o]=at(l,u,o,void 0,e,!0)):delete s[o]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],d=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(P(e.emitsOptions,o))continue;const c=t[o];if(l)if((0,i.RI)(a,o))c!==a[o]&&(a[o]=c,d=!0);else{const t=(0,i._A)(o);s[t]=at(l,u,t,c,e,!1)}else c!==a[o]&&(a[o]=c,d=!0)}}d&&(0,r.X$)(e,"set","$attrs")}function st(e,t,n,o){const[s,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let d;s&&(0,i.RI)(s,d=(0,i._A)(r))?a&&a.includes(d)?(c||(c={}))[d]=l:n[d]=l:P(e.emitsOptions,r)||r in o&&l===o[r]||(o[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),o=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=at(s,t,c,o[c],e,!(0,i.RI)(o,c))}}return u}function at(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=o;n in i?r=i[n]:(mn(o),r=i[n]=e.call(null,t),gn())}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ct(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=ct(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(s))for(let d=0;d<s.length;d++){0;const e=(0,i._A)(s[d]);ut(e)&&(a[e]=i.kT)}else if(s){0;for(const e in s){const t=(0,i._A)(e);if(ut(t)){const n=s[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=ft(Boolean,r.type),n=ft(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function ut(e){return"$"!==e[0]}function lt(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function dt(e,t){return lt(e)===lt(t)}function ft(e,t){return(0,i.kJ)(t)?t.findIndex((t=>dt(t,e))):(0,i.mf)(t)&&dt(t,e)?0:-1}const ht=e=>"_"===e[0]||"$stable"===e,pt=e=>(0,i.kJ)(e)?e.map(on):[on(e)],mt=(e,t,n)=>{if(t._n)return t;const r=M(((...e)=>pt(t(...e))),n);return r._c=!1,r},gt=(e,t,n)=>{const r=e._ctx;for(const o in e){if(ht(o))continue;const n=e[o];if((0,i.mf)(n))t[o]=mt(o,n,r);else if(null!=n){0;const e=pt(n);t[o]=()=>e}}},vt=(e,t)=>{const n=pt(t);e.slots.default=()=>n},yt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):gt(t,e.slots={})}else e.slots={},t&&vt(e,t);(0,i.Nj)(e.slots,Jt,1)},bt=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,i.l7)(o,t),n||1!==e||delete o._):(s=!t.$stable,gt(t,o)),a=t}else t&&(vt(e,t),a={default:1});if(s)for(const i in o)ht(i)||i in a||delete o[i]};function wt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _t=0;function It(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const o=wt(),s=new Set;let a=!1;const c=o.app={_uid:_t++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Dn,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,i.mf)(e.install)?(s.add(e),e.install(c,...t)):(0,i.mf)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(i,s,u){if(!a){0;const l=Xt(n,r);return l.appContext=o,s&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,On(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function Et(e,t,n,s,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Et(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,a)));if(de(s)&&!a)return;const c=4&s.shapeFlag?On(s.component)||s.component.proxy:s.el,u=a?null:c,{i:l,r:d}=e;const f=t&&t.r,h=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==d&&((0,i.HD)(f)?(h[f]=null,(0,i.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,i.mf)(d))o(d,l,12,[u,h]);else{const t=(0,i.HD)(d),o=(0,r.dq)(d);if(t||o){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,d)?p[d]:h[d]:d.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(h[d]=[c],(0,i.RI)(p,d)&&(p[d]=h[d])):(d.value=[c],e.k&&(h[e.k]=d.value))}else t?(h[d]=u,(0,i.RI)(p,d)&&(p[d]=u)):o&&(d.value=u,e.k&&(h[e.k]=u))};u?(r.id=-1,kt(r,n)):r()}else 0}}function Tt(){}const kt=W;function St(e){return Ot(e)}function Ot(e,t){Tt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:d,setElementText:f,parentNode:h,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!qt(e,t)&&(r=Z(e),J(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:d}=t;switch(u){case Nt:y(e,t,n,r);break;case Dt:b(e,t,n,r);break;case Lt:null==e&&_(t,n,r,s);break;case xt:D(e,t,n,r,i,o,s,a,c);break;default:1&d?O(e,t,n,r,i,o,s,a,c):6&d?L(e,t,n,r,i,o,s,a,c):(64&d||128&d)&&u.process(e,t,n,r,i,o,s,a,c,ee)}null!=l&&i&&Et(l,e&&e.ref,o,t||e,!t)},y=(e,t,n,r)=>{if(null==e)o(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},b=(e,t,n,r)=>{null==e?o(t.el=l(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),o(e,n,r),e=i;o(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},O=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?C(t,n,r,i,o,s,a,c):P(e,t,i,o,s,a,c)},C=(e,t,n,r,s,u,l,d)=>{let h,p;const{type:m,props:g,shapeFlag:v,transition:y,dirs:b}=e;if(h=e.el=c(e.type,u,g&&g.is,g),8&v?f(h,e.children):16&v&&R(e.children,h,null,r,s,u&&"foreignObject"!==m,l,d),b&&Ne(e,null,r,"created"),A(h,e,e.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(h,t,null,g[t],u,e.children,r,s,X);"value"in g&&a(h,"value",null,g.value),(p=g.onVnodeBeforeMount)&&un(p,r,e)}b&&Ne(e,null,r,"beforeMount");const w=(!s||s&&!s.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(h),o(h,t,n),((p=g&&g.onVnodeMounted)||w||b)&&kt((()=>{p&&un(p,r,e),w&&y.enter(h),b&&Ne(e,null,r,"mounted")}),s)},A=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let o=0;o<r.length;o++)m(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},R=(e,t,n,r,i,o,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?sn(e[u]):on(e[u]);v(null,c,t,n,r,i,o,s,a)}},P=(e,t,n,r,o,s,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:d,dirs:h}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&Ct(n,!1),(g=m.onVnodeBeforeUpdate)&&un(g,n,t,e),h&&Ne(t,e,n,"beforeUpdate"),n&&Ct(n,!0);const v=o&&"foreignObject"!==t.type;if(d?x(e.dynamicChildren,d,u,n,r,v,s):c||H(e,t,u,null,n,r,v,s,!1),l>0){if(16&l)N(u,t,p,m,n,r,o);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,o),4&l&&a(u,"style",p.style,m.style,o),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const s=i[t],c=p[s],l=m[s];l===c&&"value"!==s||a(u,s,c,l,o,e.children,n,r,X)}}1&l&&e.children!==t.children&&f(u,t.children)}else c||null!=d||N(u,t,p,m,n,r,o);((g=m.onVnodeUpdated)||h)&&kt((()=>{g&&un(g,n,t,e),h&&Ne(t,e,n,"updated")}),r)},x=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===xt||!qt(c,u)||70&c.shapeFlag)?h(c.el):n;v(c,u,l,null,r,i,o,s,!0)}},N=(e,t,n,r,o,s,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,o,s,X);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],d=n[u];l!==d&&"value"!==u&&a(e,u,d,l,c,t.children,o,s,X)}"value"in r&&a(e,"value",n.value,r.value)}},D=(e,t,n,r,i,s,a,c,l)=>{const d=t.el=e?e.el:u(""),f=t.anchor=e?e.anchor:u("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(o(d,n,r),o(f,n,r),R(t.children,n,f,i,s,a,c,l)):h>0&&64&h&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,i,s,a,c),(null!=t.key||i&&t===i.subTree)&&At(e,t,!0)):H(e,t,n,f,i,s,a,c,l)},L=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):j(t,n,r,i,o,s,c):M(e,t,c)},j=(e,t,n,r,i,o,s)=>{const a=e.component=fn(e,r,i);if(fe(e)&&(a.ctx.renderer=ee),_n(a),a.asyncDep){if(i&&i.registerDep(a,F),!e.el){const e=a.subTree=Xt(Dt);b(null,e,t,n)}}else F(a,e,t,n,i,o,s)},M=(e,t,n)=>{const r=t.component=e.component;if($(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,I(r.update),r.update()}else t.el=e.el,r.vnode=t},F=(e,t,n,o,s,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:o,parent:u,vnode:l}=e,d=n;0,Ct(e,!1),n?(n.el=l.el,V(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&un(t,u,n,l),Ct(e,!0);const f=U(e);0;const p=e.subTree;e.subTree=f,v(p,f,h(p.el),Z(p),e,s,a),n.el=f.el,null===d&&B(e,f.el),o&&kt(o,s),(t=n.props&&n.props.onVnodeUpdated)&&kt((()=>un(t,u,n,l)),s)}else{let r;const{el:c,props:u}=t,{bm:l,m:d,parent:f}=e,h=de(t);if(Ct(e,!1),l&&(0,i.ir)(l),!h&&(r=u&&u.onVnodeBeforeMount)&&un(r,f,t),Ct(e,!0),c&&ne){const n=()=>{e.subTree=U(e),ne(c,e.subTree,e,s,null)};h?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=U(e);0,v(null,r,n,o,e,s,a),t.el=r.el}if(d&&kt(d,s),!h&&(r=u&&u.onVnodeMounted)){const e=t;kt((()=>un(r,f,e)),s)}(256&t.shapeFlag||f&&de(f.vnode)&&256&f.vnode.shapeFlag)&&e.a&&kt(e.a,s),e.isMounted=!0,t=n=o=null}},l=e.effect=new r.qq(u,(()=>w(d)),e.scope),d=e.update=()=>l.run();d.id=e.uid,Ct(e,!0),d()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,ot(e,t.props,i,n),bt(e,t.children,n),(0,r.Jd)(),T(),(0,r.lk)()},H=(e,t,n,r,i,o,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,d=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void W(u,d,n,r,i,o,s,a,c);if(256&h)return void z(u,d,n,r,i,o,s,a,c)}8&p?(16&l&&X(u,i,o),d!==u&&f(n,d)):16&l?16&p?W(u,d,n,r,i,o,s,a,c):X(u,i,o,!0):(8&l&&f(n,""),16&p&&R(d,n,r,i,o,s,a,c))},z=(e,t,n,r,o,s,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,d=t.length,f=Math.min(l,d);let h;for(h=0;h<f;h++){const r=t[h]=u?sn(t[h]):on(t[h]);v(e[h],r,n,null,o,s,a,c,u)}l>d?X(e,o,s,!0,!1,f):R(t,n,r,o,s,a,c,u,f)},W=(e,t,n,r,o,s,a,c,u)=>{let l=0;const d=t.length;let f=e.length-1,h=d-1;while(l<=f&&l<=h){const r=e[l],i=t[l]=u?sn(t[l]):on(t[l]);if(!qt(r,i))break;v(r,i,n,null,o,s,a,c,u),l++}while(l<=f&&l<=h){const r=e[f],i=t[h]=u?sn(t[h]):on(t[h]);if(!qt(r,i))break;v(r,i,n,null,o,s,a,c,u),f--,h--}if(l>f){if(l<=h){const e=h+1,i=e<d?t[e].el:r;while(l<=h)v(null,t[l]=u?sn(t[l]):on(t[l]),n,i,o,s,a,c,u),l++}}else if(l>h)while(l<=f)J(e[l],o,s,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=h;l++){const e=t[l]=u?sn(t[l]):on(t[l]);null!=e.key&&g.set(e.key,l)}let y,b=0;const w=h-m+1;let _=!1,I=0;const E=new Array(w);for(l=0;l<w;l++)E[l]=0;for(l=p;l<=f;l++){const r=e[l];if(b>=w){J(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=h;y++)if(0===E[y-m]&&qt(r,t[y])){i=y;break}void 0===i?J(r,o,s,!0):(E[i-m]=l+1,i>=I?I=i:_=!0,v(r,t[i],n,null,o,s,a,c,u),b++)}const T=_?Rt(E):i.Z6;for(y=T.length-1,l=w-1;l>=0;l--){const e=m+l,i=t[e],f=e+1<d?t[e+1].el:r;0===E[l]?v(null,i,n,f,o,s,a,c,u):_&&(y<0||l!==T[y]?q(i,n,f,2):y--)}}},q=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void q(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ee);if(a===xt){o(s,t,n);for(let e=0;e<u.length;e++)q(u[e],t,n,r);return void o(e.anchor,t,n)}if(a===Lt)return void E(e,t,n);const d=2!==r&&1&l&&c;if(d)if(0===r)c.beforeEnter(s),o(s,t,n),kt((()=>c.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),u=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,u):u()}else o(s,t,n)},J=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:d,dirs:f}=e;if(null!=a&&Et(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const h=1&l&&f,p=!de(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&un(m,t,e),6&l)Y(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);h&&Ne(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,ee,r):u&&(o!==xt||d>0&&64&d)?X(u,t,n,!1,!0):(o===xt&&384&d||!i&&16&l)&&X(c,t,n),r&&G(e)}(p&&(m=s&&s.onVnodeUnmounted)||h)&&kt((()=>{m&&un(m,t,e),h&&Ne(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===xt)return void K(n,r);if(t===Lt)return void S(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},K=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},Y=(e,t,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:c}=e;r&&(0,i.ir)(r),o.stop(),s&&(s.active=!1,J(a,e,t,n)),c&&kt(c,t),kt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)J(e[s],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Q=(e,t,n)=>{null==e?t._vnode&&J(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),T(),k(),t._vnode=e},ee={p:v,um:J,m:q,r:G,mt:j,mc:R,pc:H,pbc:x,n:Z,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Q,hydrate:te,createApp:It(Q,te)}}function Ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function At(e,t,n=!1){const r=e.children,o=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=sn(o[i]),t.el=e.el),n||At(e,t)),t.type===Nt&&(t.el=e.el)}}function Rt(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const Pt=e=>e.__isTeleport;const xt=Symbol(void 0),Nt=Symbol(void 0),Dt=Symbol(void 0),Lt=Symbol(void 0),jt=[];let Mt=null;function Ut(e=!1){jt.push(Mt=e?null:[])}function Ft(){jt.pop(),Mt=jt[jt.length-1]||null}let Vt=1;function $t(e){Vt+=e}function Ht(e){return e.dynamicChildren=Vt>0?Mt||i.Z6:null,Ft(),Vt>0&&Mt&&Mt.push(e),e}function Bt(e,t,n,r,i,o){return Ht(Yt(e,t,n,r,i,o,!0))}function zt(e,t,n,r,i){return Ht(Xt(e,t,n,r,i,!0))}function Wt(e){return!!e&&!0===e.__v_isVNode}function qt(e,t){return e.type===t.type&&e.key===t.key}const Jt="__vInternal",Gt=({key:e})=>null!=e?e:null,Kt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:x,r:e,k:t,f:!!n}:e:null;function Yt(e,t=null,n=null,r=0,o=null,s=(e===xt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gt(t),ref:t&&Kt(t),scopeId:N,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:x};return c?(an(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Vt>0&&!a&&Mt&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Mt.push(u),u}const Xt=Zt;function Zt(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==je||(e=Dt),Wt(e)){const r=en(e,t,!0);return n&&an(r,n),Vt>0&&!a&&Mt&&(6&r.shapeFlag?Mt[Mt.indexOf(e)]=r:Mt.push(r)),r.patchFlag|=-2,r}if(An(e)&&(e=e.__vccOpts),t){t=Qt(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:z(e)?128:Pt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Yt(e,t,n,o,s,c,a,!0)}function Qt(e){return e?(0,r.X3)(e)||Jt in e?(0,i.l7)({},e):e:null}function en(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=e,c=t?cn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Gt(c),ref:t&&t.ref?n&&o?(0,i.kJ)(o)?o.concat(Kt(t)):[o,Kt(t)]:Kt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&en(e.ssContent),ssFallback:e.ssFallback&&en(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function tn(e=" ",t=0){return Xt(Nt,null,e,t)}function nn(e,t){const n=Xt(Lt,null,e);return n.staticCount=t,n}function rn(e="",t=!1){return t?(Ut(),zt(Dt,null,e)):Xt(Dt,null,e)}function on(e){return null==e||"boolean"===typeof e?Xt(Dt):(0,i.kJ)(e)?Xt(xt,null,e.slice()):"object"===typeof e?sn(e):Xt(Nt,null,String(e))}function sn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:en(e)}function an(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),an(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Jt in t?3===r&&x&&(1===x.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=x}}else(0,i.mf)(t)?(t={default:t,_ctx:x},n=32):(t=String(t),64&r?(n=16,t=[tn(t)]):n=8);e.children=t,e.shapeFlag|=n}function cn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.kJ)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function un(e,t,n,r=null){s(e,t,7,[n,r])}const ln=wt();let dn=0;function fn(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||ln,a={uid:dn++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ct(o,s),emitsOptions:R(o,s),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:o.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=A.bind(null,a),e.ce&&e.ce(a),a}let hn=null;const pn=()=>hn||x,mn=e=>{hn=e,e.scope.on()},gn=()=>{hn&&hn.scope.off(),hn=null};function vn(e){return 4&e.vnode.shapeFlag}let yn,bn,wn=!1;function _n(e,t=!1){wn=t;const{props:n,children:r}=e.vnode,i=vn(e);it(e,n,i,t),yt(e,r);const o=i?In(e,t):void 0;return wn=!1,o}function In(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Be));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Sn(e):null;mn(e),(0,r.Jd)();const c=o(s,e,0,[e.props,n]);if((0,r.lk)(),gn(),(0,i.tI)(c)){if(c.then(gn,gn),t)return c.then((n=>{En(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else En(e,c,t)}else Tn(e,t)}function En(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Tn(e,n)}function Tn(e,t,n){const o=e.type;if(!e.render){if(!t&&yn&&!o.render){const t=o.template||Ke(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:s},r),a);o.render=yn(t,c)}}e.render=o.render||i.dG,bn&&bn(e)}mn(e),(0,r.Jd)(),We(e),(0,r.lk)(),gn()}function kn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Sn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=kn(e))},slots:e.slots,emit:e.emit,expose:t}}function On(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in $e?$e[n](e):void 0},has(e,t){return t in e||t in $e}}))}function Cn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function An(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Rn=(e,t)=>(0,r.Fl)(e,t,wn);function Pn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Wt(t)?Xt(e,null,[t]):Xt(e,t):Xt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Wt(n)&&(n=[n]),Xt(e,t,n))}const xn=Symbol(""),Nn=()=>{{const e=J(xn);return e}};const Dn="3.2.47"},9197:function(e,t,n){"use strict";n.d(t,{F8:function(){return ue},nr:function(){return ce},ri:function(){return pe},uT:function(){return L}});n(7658);var r=n(4887),i=n(8473),o=n(4188);const s="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(s,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const i=c.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function d(e,t,n){const i=e.style,o=(0,r.HD)(n);if(n&&!o){if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&h(i,e,"");for(const e in n)h(i,e,n[e])}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const f=/\s*!important$/;function h(e,t,n){if((0,r.kJ)(n))n.forEach((n=>h(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=g(e,t);f.test(n)?e.setProperty((0,r.rs)(i),n.replace(f,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return m[t]=n}return t}const v="http://www.w3.org/1999/xlink";function y(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function b(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}function w(e,t,n,r){e.addEventListener(t,n,r)}function _(e,t,n,r){e.removeEventListener(t,n,r)}function I(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=T(t);if(r){const s=o[t]=C(r,i);w(e,n,s,a)}else s&&(_(e,n,s,a),o[t]=void 0)}}const E=/(?:Once|Passive|Capture)$/;function T(e){let t;if(E.test(e)){let n;t={};while(n=e.match(E))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let k=0;const S=Promise.resolve(),O=()=>k||(S.then((()=>k=0)),k=Date.now());function C(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(A(e,n.value),t,5,[e])};return n.value=e,n.attached=O(),n}function A(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const R=/^on[a-z]/,P=(e,t,n,i,o=!1,s,a,c,u)=>{"class"===t?l(e,i,o):"style"===t?d(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||I(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):x(e,t,i,o))?b(e,t,i,s,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,o))};function x(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&R.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!R.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const N="transition",D="animation",L=(e,{slots:t})=>(0,i.h)(i.P$,V(e),t);L.displayName="Transition";const j={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},M=L.props=(0,r.l7)({},i.P$.props,j),U=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},F=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function V(e){const t={};for(const r in e)r in j||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:l=a,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=$(o),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:I,onBeforeAppear:E=y,onAppear:T=b,onAppearCancelled:k=w}=t,S=(e,t,n)=>{z(e,t?d:c),z(e,t?l:a),n&&n()},O=(e,t)=>{e._isLeaving=!1,z(e,f),z(e,p),z(e,h),t&&t()},C=e=>(t,n)=>{const r=e?T:b,o=()=>S(t,e,n);U(r,[t,o]),W((()=>{z(t,e?u:s),B(t,e?d:c),F(r)||J(t,i,g,o)}))};return(0,r.l7)(t,{onBeforeEnter(e){U(y,[e]),B(e,s),B(e,a)},onBeforeAppear(e){U(E,[e]),B(e,u),B(e,l)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>O(e,t);B(e,f),X(),B(e,h),W((()=>{e._isLeaving&&(z(e,f),B(e,p),F(_)||J(e,i,v,n))})),U(_,[e,n])},onEnterCancelled(e){S(e,!1),U(w,[e])},onAppearCancelled(e){S(e,!0),U(k,[e])},onLeaveCancelled(e){O(e),U(I,[e])}})}function $(e){if(null==e)return null;if((0,r.Kn)(e))return[H(e.enter),H(e.leave)];{const t=H(e);return[t,t]}}function H(e){const t=(0,r.He)(e);return t}function B(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function W(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let q=0;function J(e,t,n,r){const i=e._endId=++q,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=G(e,t);if(!s)return r();const u=s+"end";let l=0;const d=()=>{e.removeEventListener(u,f),o()},f=t=>{t.target===e&&++l>=c&&d()};setTimeout((()=>{l<c&&d()}),a+1),e.addEventListener(u,f)}function G(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${N}Delay`),o=r(`${N}Duration`),s=K(i,o),a=r(`${D}Delay`),c=r(`${D}Duration`),u=K(a,c);let l=null,d=0,f=0;t===N?s>0&&(l=N,d=s,f=o.length):t===D?u>0&&(l=D,d=u,f=c.length):(d=Math.max(s,u),l=d>0?s>u?N:D:null,f=l?l===N?o.length:c.length:0);const h=l===N&&/\b(transform|all)(,|$)/.test(r(`${N}Property`).toString());return{type:l,timeout:d,propCount:f,hasTransform:h}}function K(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Y(t)+Y(e[n]))))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}const Z=new WeakMap,Q=new WeakMap,ee={name:"TransitionGroup",props:(0,r.l7)({},M,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let s,a;return(0,i.ic)((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ie(s[0].el,n.vnode.el,t))return;s.forEach(te),s.forEach(ne);const r=s.filter(re);X(),r.forEach((e=>{const n=e.el,r=n.style;B(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,z(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,o.IU)(e),u=V(c);let l=c.tag||i.HY;s=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,u,r,n))}if(s)for(let e=0;e<s.length;e++){const t=s[e];(0,i.nK)(t,(0,i.U2)(t,u,r,n)),Z.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}};ee.props;function te(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ne(e){Q.set(e,e.el.getBoundingClientRect())}function re(e){const t=Z.get(e),n=Q.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ie(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:o}=G(r);return i.removeChild(r),o}const oe=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function se(e){e.target.composing=!0}function ae(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ce={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=oe(o);const s=i||o.props&&"number"===o.props.type;w(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),s&&(i=(0,r.h5)(i)),e._assign(i)})),n&&w(e,"change",(()=>{e.value=e.value.trim()})),t||(w(e,"compositionstart",se),w(e,"compositionend",ae),w(e,"change",ae))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=oe(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&(0,r.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ue={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):le(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),le(e,!0),r.enter(e)):r.leave(e,(()=>{le(e,!1)})):le(e,t))},beforeUnmount(e,{value:t}){le(e,t)}};function le(e,t){e.style.display=t?e._vod:"none"}const de=(0,r.l7)({patchProp:P},u);let fe;function he(){return fe||(fe=(0,i.Us)(de))}const pe=(...e)=>{const t=he().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=me(e);if(!i)return;const o=t._component;(0,r.mf)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function me(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},4887:function(e,t,n){"use strict";n.d(t,{C_:function(){return d},DM:function(){return N},E9:function(){return se},F7:function(){return k},Gg:function(){return q},HD:function(){return M},He:function(){return ie},Kj:function(){return L},Kn:function(){return F},NO:function(){return E},Nj:function(){return ne},Od:function(){return C},PO:function(){return z},Pq:function(){return h},RI:function(){return R},S0:function(){return W},W7:function(){return B},WV:function(){return g},Z6:function(){return _},_A:function(){return K},_N:function(){return x},aU:function(){return ee},dG:function(){return I},e1:function(){return o},fY:function(){return r},h5:function(){return re},hR:function(){return Q},hq:function(){return v},ir:function(){return te},j5:function(){return s},kC:function(){return Z},kJ:function(){return P},kT:function(){return w},l7:function(){return O},mf:function(){return j},rs:function(){return X},tI:function(){return V},tR:function(){return S},yA:function(){return p},yk:function(){return U},zw:function(){return y}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);function s(e){if(P(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=M(r)?l(r):s(r);if(i)for(const e in i)t[e]=i[e]}return t}return M(e)||F(e)?e:void 0}const a=/;(?![^(]*\))/g,c=/:([^]+)/,u=/\/\*.*?\*\//gs;function l(e){const t={};return e.replace(u,"").split(a).forEach((e=>{if(e){const n=e.split(c);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function d(e){let t="";if(M(e))t=e;else if(P(e))for(let n=0;n<e.length;n++){const r=d(e[n]);r&&(t+=r+" ")}else if(F(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const f="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",h=r(f);function p(e){return!!e||""===e}function m(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=g(e[r],t[r]);return n}function g(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=U(e),r=U(t),n||r)return e===t;if(n=P(e),r=P(t),n||r)return!(!n||!r)&&m(e,t);if(n=F(e),r=F(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!g(e[n],t[n]))return!1}}return String(e)===String(t)}function v(e,t){return e.findIndex((e=>g(e,t)))}const y=e=>M(e)?e:null==e?"":P(e)||F(e)&&(e.toString===$||!j(e.toString))?JSON.stringify(e,b,2):String(e),b=(e,t)=>t&&t.__v_isRef?b(e,t.value):x(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:N(t)?{[`Set(${t.size})`]:[...t.values()]}:!F(t)||P(t)||z(t)?t:String(t),w={},_=[],I=()=>{},E=()=>!1,T=/^on[^a-z]/,k=e=>T.test(e),S=e=>e.startsWith("onUpdate:"),O=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,R=(e,t)=>A.call(e,t),P=Array.isArray,x=e=>"[object Map]"===H(e),N=e=>"[object Set]"===H(e),D=e=>"[object Date]"===H(e),L=e=>"[object RegExp]"===H(e),j=e=>"function"===typeof e,M=e=>"string"===typeof e,U=e=>"symbol"===typeof e,F=e=>null!==e&&"object"===typeof e,V=e=>F(e)&&j(e.then)&&j(e.catch),$=Object.prototype.toString,H=e=>$.call(e),B=e=>H(e).slice(8,-1),z=e=>"[object Object]"===H(e),W=e=>M(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,q=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),J=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},G=/-(\w)/g,K=J((e=>e.replace(G,((e,t)=>t?t.toUpperCase():"")))),Y=/\B([A-Z])/g,X=J((e=>e.replace(Y,"-$1").toLowerCase())),Z=J((e=>e.charAt(0).toUpperCase()+e.slice(1))),Q=J((e=>e?`on${Z(e)}`:"")),ee=(e,t)=>!Object.is(e,t),te=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ne=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},re=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ie=e=>{const t=M(e)?Number(e):NaN;return isNaN(t)?e:t};let oe;const se=()=>oe||(oe="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},1773:function(e,t,n){"use strict";n.d(t,{ZP:function(){return hn}});n(7658);function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){var t=r(e).Element;return e instanceof t||e instanceof Element}function o(e){var t=r(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function s(e){if("undefined"===typeof ShadowRoot)return!1;var t=r(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var a=Math.max,c=Math.min,u=Math.round;function l(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function d(){return!/^((?!chrome|android).)*safari/i.test(l())}function f(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var s=e.getBoundingClientRect(),a=1,c=1;t&&o(e)&&(a=e.offsetWidth>0&&u(s.width)/e.offsetWidth||1,c=e.offsetHeight>0&&u(s.height)/e.offsetHeight||1);var l=i(e)?r(e):window,f=l.visualViewport,h=!d()&&n,p=(s.left+(h&&f?f.offsetLeft:0))/a,m=(s.top+(h&&f?f.offsetTop:0))/c,g=s.width/a,v=s.height/c;return{width:g,height:v,top:m,right:p+g,bottom:m+v,left:p,x:p,y:m}}function h(e){var t=r(e),n=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:n,scrollTop:i}}function p(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function m(e){return e!==r(e)&&o(e)?p(e):h(e)}function g(e){return e?(e.nodeName||"").toLowerCase():null}function v(e){return((i(e)?e.ownerDocument:e.document)||window.document).documentElement}function y(e){return f(v(e)).left+h(e).scrollLeft}function b(e){return r(e).getComputedStyle(e)}function w(e){var t=b(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function _(e){var t=e.getBoundingClientRect(),n=u(t.width)/e.offsetWidth||1,r=u(t.height)/e.offsetHeight||1;return 1!==n||1!==r}function I(e,t,n){void 0===n&&(n=!1);var r=o(t),i=o(t)&&_(t),s=v(t),a=f(e,i,n),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!n)&&(("body"!==g(t)||w(s))&&(c=m(t)),o(t)?(u=f(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=y(s))),{x:a.left+c.scrollLeft-u.x,y:a.top+c.scrollTop-u.y,width:a.width,height:a.height}}function E(e){var t=f(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function T(e){return"html"===g(e)?e:e.assignedSlot||e.parentNode||(s(e)?e.host:null)||v(e)}function k(e){return["html","body","#document"].indexOf(g(e))>=0?e.ownerDocument.body:o(e)&&w(e)?e:k(T(e))}function S(e,t){var n;void 0===t&&(t=[]);var i=k(e),o=i===(null==(n=e.ownerDocument)?void 0:n.body),s=r(i),a=o?[s].concat(s.visualViewport||[],w(i)?i:[]):i,c=t.concat(a);return o?c:c.concat(S(T(a)))}function O(e){return["table","td","th"].indexOf(g(e))>=0}function C(e){return o(e)&&"fixed"!==b(e).position?e.offsetParent:null}function A(e){var t=/firefox/i.test(l()),n=/Trident/i.test(l());if(n&&o(e)){var r=b(e);if("fixed"===r.position)return null}var i=T(e);s(i)&&(i=i.host);while(o(i)&&["html","body"].indexOf(g(i))<0){var a=b(i);if("none"!==a.transform||"none"!==a.perspective||"paint"===a.contain||-1!==["transform","perspective"].indexOf(a.willChange)||t&&"filter"===a.willChange||t&&a.filter&&"none"!==a.filter)return i;i=i.parentNode}return null}function R(e){var t=r(e),n=C(e);while(n&&O(n)&&"static"===b(n).position)n=C(n);return n&&("html"===g(n)||"body"===g(n)&&"static"===b(n).position)?t:n||A(e)||t}var P="top",x="bottom",N="right",D="left",L="auto",j=[P,x,N,D],M="start",U="end",F="clippingParents",V="viewport",$="popper",H="reference",B=j.reduce((function(e,t){return e.concat([t+"-"+M,t+"-"+U])}),[]),z=[].concat(j,[L]).reduce((function(e,t){return e.concat([t,t+"-"+M,t+"-"+U])}),[]),W="beforeRead",q="read",J="afterRead",G="beforeMain",K="main",Y="afterMain",X="beforeWrite",Z="write",Q="afterWrite",ee=[W,q,J,G,K,Y,X,Z,Q];function te(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name);var o=[].concat(e.requires||[],e.requiresIfExists||[]);o.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function ne(e){var t=te(e);return ee.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function re(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function ie(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var oe={placement:"bottom",modifiers:[],strategy:"absolute"};function se(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function ae(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,s=void 0===o?oe:o;return function(e,t,n){void 0===n&&(n=s);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},oe,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],c=!1,u={state:o,setOptions:function(n){var a="function"===typeof n?n(o.options):n;d(),o.options=Object.assign({},s,o.options,a),o.scrollParents={reference:i(e)?S(e):e.contextElement?S(e.contextElement):[],popper:S(t)};var c=ne(ie([].concat(r,o.options.modifiers)));return o.orderedModifiers=c.filter((function(e){return e.enabled})),l(),u.update()},forceUpdate:function(){if(!c){var e=o.elements,t=e.reference,n=e.popper;if(se(t,n)){o.rects={reference:I(t,R(n),"fixed"===o.options.strategy),popper:E(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],s=i.fn,a=i.options,l=void 0===a?{}:a,d=i.name;"function"===typeof s&&(o=s({state:o,options:l,name:d,instance:u})||o)}else o.reset=!1,r=-1}}},update:re((function(){return new Promise((function(e){u.forceUpdate(),e(o)}))})),destroy:function(){d(),c=!0}};if(!se(e,t))return u;function l(){o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:u,options:r}),c=function(){};a.push(s||c)}}))}function d(){a.forEach((function(e){return e()})),a=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var ce={passive:!0};function ue(e){var t=e.state,n=e.instance,i=e.options,o=i.scroll,s=void 0===o||o,a=i.resize,c=void 0===a||a,u=r(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach((function(e){e.addEventListener("scroll",n.update,ce)})),c&&u.addEventListener("resize",n.update,ce),function(){s&&l.forEach((function(e){e.removeEventListener("scroll",n.update,ce)})),c&&u.removeEventListener("resize",n.update,ce)}}var le={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ue,data:{}};function de(e){return e.split("-")[0]}function fe(e){return e.split("-")[1]}function he(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function pe(e){var t,n=e.reference,r=e.element,i=e.placement,o=i?de(i):null,s=i?fe(i):null,a=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(o){case P:t={x:a,y:n.y-r.height};break;case x:t={x:a,y:n.y+n.height};break;case N:t={x:n.x+n.width,y:c};break;case D:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=o?he(o):null;if(null!=u){var l="y"===u?"height":"width";switch(s){case M:t[u]=t[u]-(n[l]/2-r[l]/2);break;case U:t[u]=t[u]+(n[l]/2-r[l]/2);break;default:}}return t}function me(e){var t=e.state,n=e.name;t.modifiersData[n]=pe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var ge={name:"popperOffsets",enabled:!0,phase:"read",fn:me,data:{}},ve={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ye(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:u(n*i)/i||0,y:u(r*i)/i||0}}function be(e){var t,n=e.popper,i=e.popperRect,o=e.placement,s=e.variation,a=e.offsets,c=e.position,u=e.gpuAcceleration,l=e.adaptive,d=e.roundOffsets,f=e.isFixed,h=a.x,p=void 0===h?0:h,m=a.y,g=void 0===m?0:m,y="function"===typeof d?d({x:p,y:g}):{x:p,y:g};p=y.x,g=y.y;var w=a.hasOwnProperty("x"),_=a.hasOwnProperty("y"),I=D,E=P,T=window;if(l){var k=R(n),S="clientHeight",O="clientWidth";if(k===r(n)&&(k=v(n),"static"!==b(k).position&&"absolute"===c&&(S="scrollHeight",O="scrollWidth")),o===P||(o===D||o===N)&&s===U){E=x;var C=f&&k===T&&T.visualViewport?T.visualViewport.height:k[S];g-=C-i.height,g*=u?1:-1}if(o===D||(o===P||o===x)&&s===U){I=N;var A=f&&k===T&&T.visualViewport?T.visualViewport.width:k[O];p-=A-i.width,p*=u?1:-1}}var L,j=Object.assign({position:c},l&&ve),M=!0===d?ye({x:p,y:g},r(n)):{x:p,y:g};return p=M.x,g=M.y,u?Object.assign({},j,(L={},L[E]=_?"0":"",L[I]=w?"0":"",L.transform=(T.devicePixelRatio||1)<=1?"translate("+p+"px, "+g+"px)":"translate3d("+p+"px, "+g+"px, 0)",L)):Object.assign({},j,(t={},t[E]=_?g+"px":"",t[I]=w?p+"px":"",t.transform="",t))}function we(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,s=void 0===o||o,a=n.roundOffsets,c=void 0===a||a,u={placement:de(t.placement),variation:fe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,be(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,be(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var _e={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:we,data:{}};function Ie(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];o(i)&&g(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))}function Ee(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),a=s.reduce((function(e,t){return e[t]="",e}),{});o(r)&&g(r)&&(Object.assign(r.style,a),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}}var Te={name:"applyStyles",enabled:!0,phase:"write",fn:Ie,effect:Ee,requires:["computeStyles"]};function ke(e,t,n){var r=de(e),i=[D,P].indexOf(r)>=0?-1:1,o="function"===typeof n?n(Object.assign({},t,{placement:e})):n,s=o[0],a=o[1];return s=s||0,a=(a||0)*i,[D,N].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function Se(e){var t=e.state,n=e.options,r=e.name,i=n.offset,o=void 0===i?[0,0]:i,s=z.reduce((function(e,n){return e[n]=ke(n,t.rects,o),e}),{}),a=s[t.placement],c=a.x,u=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=s}var Oe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Se},Ce={left:"right",right:"left",bottom:"top",top:"bottom"};function Ae(e){return e.replace(/left|right|bottom|top/g,(function(e){return Ce[e]}))}var Re={start:"end",end:"start"};function Pe(e){return e.replace(/start|end/g,(function(e){return Re[e]}))}function xe(e,t){var n=r(e),i=v(e),o=n.visualViewport,s=i.clientWidth,a=i.clientHeight,c=0,u=0;if(o){s=o.width,a=o.height;var l=d();(l||!l&&"fixed"===t)&&(c=o.offsetLeft,u=o.offsetTop)}return{width:s,height:a,x:c+y(e),y:u}}function Ne(e){var t,n=v(e),r=h(e),i=null==(t=e.ownerDocument)?void 0:t.body,o=a(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=a(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),c=-r.scrollLeft+y(e),u=-r.scrollTop;return"rtl"===b(i||n).direction&&(c+=a(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:c,y:u}}function De(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&s(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Le(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function je(e,t){var n=f(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Me(e,t,n){return t===V?Le(xe(e,n)):i(t)?je(t,n):Le(Ne(v(e)))}function Ue(e){var t=S(T(e)),n=["absolute","fixed"].indexOf(b(e).position)>=0,r=n&&o(e)?R(e):e;return i(r)?t.filter((function(e){return i(e)&&De(e,r)&&"body"!==g(e)})):[]}function Fe(e,t,n,r){var i="clippingParents"===t?Ue(e):[].concat(t),o=[].concat(i,[n]),s=o[0],u=o.reduce((function(t,n){var i=Me(e,n,r);return t.top=a(i.top,t.top),t.right=c(i.right,t.right),t.bottom=c(i.bottom,t.bottom),t.left=a(i.left,t.left),t}),Me(e,s,r));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function Ve(){return{top:0,right:0,bottom:0,left:0}}function $e(e){return Object.assign({},Ve(),e)}function He(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function Be(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,s=n.strategy,a=void 0===s?e.strategy:s,c=n.boundary,u=void 0===c?F:c,l=n.rootBoundary,d=void 0===l?V:l,h=n.elementContext,p=void 0===h?$:h,m=n.altBoundary,g=void 0!==m&&m,y=n.padding,b=void 0===y?0:y,w=$e("number"!==typeof b?b:He(b,j)),_=p===$?H:$,I=e.rects.popper,E=e.elements[g?_:p],T=Fe(i(E)?E:E.contextElement||v(e.elements.popper),u,d,a),k=f(e.elements.reference),S=pe({reference:k,element:I,strategy:"absolute",placement:o}),O=Le(Object.assign({},I,S)),C=p===$?O:k,A={top:T.top-C.top+w.top,bottom:C.bottom-T.bottom+w.bottom,left:T.left-C.left+w.left,right:C.right-T.right+w.right},R=e.modifiersData.offset;if(p===$&&R){var D=R[o];Object.keys(A).forEach((function(e){var t=[N,x].indexOf(e)>=0?1:-1,n=[P,x].indexOf(e)>=0?"y":"x";A[e]+=D[n]*t}))}return A}function ze(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?z:c,l=fe(r),d=l?a?B:B.filter((function(e){return fe(e)===l})):j,f=d.filter((function(e){return u.indexOf(e)>=0}));0===f.length&&(f=d);var h=f.reduce((function(t,n){return t[n]=Be(e,{placement:n,boundary:i,rootBoundary:o,padding:s})[de(n)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}function We(e){if(de(e)===L)return[];var t=Ae(e);return[Pe(e),t,Pe(t)]}function qe(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,o=void 0===i||i,s=n.altAxis,a=void 0===s||s,c=n.fallbackPlacements,u=n.padding,l=n.boundary,d=n.rootBoundary,f=n.altBoundary,h=n.flipVariations,p=void 0===h||h,m=n.allowedAutoPlacements,g=t.options.placement,v=de(g),y=v===g,b=c||(y||!p?[Ae(g)]:We(g)),w=[g].concat(b).reduce((function(e,n){return e.concat(de(n)===L?ze(t,{placement:n,boundary:l,rootBoundary:d,padding:u,flipVariations:p,allowedAutoPlacements:m}):n)}),[]),_=t.rects.reference,I=t.rects.popper,E=new Map,T=!0,k=w[0],S=0;S<w.length;S++){var O=w[S],C=de(O),A=fe(O)===M,R=[P,x].indexOf(C)>=0,j=R?"width":"height",U=Be(t,{placement:O,boundary:l,rootBoundary:d,altBoundary:f,padding:u}),F=R?A?N:D:A?x:P;_[j]>I[j]&&(F=Ae(F));var V=Ae(F),$=[];if(o&&$.push(U[C]<=0),a&&$.push(U[F]<=0,U[V]<=0),$.every((function(e){return e}))){k=O,T=!1;break}E.set(O,$)}if(T)for(var H=p?3:1,B=function(e){var t=w.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return k=t,"break"},z=H;z>0;z--){var W=B(z);if("break"===W)break}t.placement!==k&&(t.modifiersData[r]._skip=!0,t.placement=k,t.reset=!0)}}var Je={name:"flip",enabled:!0,phase:"main",fn:qe,requiresIfExists:["offset"],data:{_skip:!1}};function Ge(e){return"x"===e?"y":"x"}function Ke(e,t,n){return a(e,c(t,n))}function Ye(e,t,n){var r=Ke(e,t,n);return r>n?n:r}function Xe(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,o=void 0===i||i,s=n.altAxis,u=void 0!==s&&s,l=n.boundary,d=n.rootBoundary,f=n.altBoundary,h=n.padding,p=n.tether,m=void 0===p||p,g=n.tetherOffset,v=void 0===g?0:g,y=Be(t,{boundary:l,rootBoundary:d,padding:h,altBoundary:f}),b=de(t.placement),w=fe(t.placement),_=!w,I=he(b),T=Ge(I),k=t.modifiersData.popperOffsets,S=t.rects.reference,O=t.rects.popper,C="function"===typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,A="number"===typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,j={x:0,y:0};if(k){if(o){var U,F="y"===I?P:D,V="y"===I?x:N,$="y"===I?"height":"width",H=k[I],B=H+y[F],z=H-y[V],W=m?-O[$]/2:0,q=w===M?S[$]:O[$],J=w===M?-O[$]:-S[$],G=t.elements.arrow,K=m&&G?E(G):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ve(),X=Y[F],Z=Y[V],Q=Ke(0,S[$],K[$]),ee=_?S[$]/2-W-Q-X-A.mainAxis:q-Q-X-A.mainAxis,te=_?-S[$]/2+W+Q+Z+A.mainAxis:J+Q+Z+A.mainAxis,ne=t.elements.arrow&&R(t.elements.arrow),re=ne?"y"===I?ne.clientTop||0:ne.clientLeft||0:0,ie=null!=(U=null==L?void 0:L[I])?U:0,oe=H+ee-ie-re,se=H+te-ie,ae=Ke(m?c(B,oe):B,H,m?a(z,se):z);k[I]=ae,j[I]=ae-H}if(u){var ce,ue="x"===I?P:D,le="x"===I?x:N,pe=k[T],me="y"===T?"height":"width",ge=pe+y[ue],ve=pe-y[le],ye=-1!==[P,D].indexOf(b),be=null!=(ce=null==L?void 0:L[T])?ce:0,we=ye?ge:pe-S[me]-O[me]-be+A.altAxis,_e=ye?pe+S[me]+O[me]-be-A.altAxis:ve,Ie=m&&ye?Ye(we,pe,_e):Ke(m?we:ge,pe,m?_e:ve);k[T]=Ie,j[T]=Ie-pe}t.modifiersData[r]=j}}var Ze={name:"preventOverflow",enabled:!0,phase:"main",fn:Xe,requiresIfExists:["offset"]},Qe=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,$e("number"!==typeof e?e:He(e,j))};function et(e){var t,n=e.state,r=e.name,i=e.options,o=n.elements.arrow,s=n.modifiersData.popperOffsets,a=de(n.placement),c=he(a),u=[D,N].indexOf(a)>=0,l=u?"height":"width";if(o&&s){var d=Qe(i.padding,n),f=E(o),h="y"===c?P:D,p="y"===c?x:N,m=n.rects.reference[l]+n.rects.reference[c]-s[c]-n.rects.popper[l],g=s[c]-n.rects.reference[c],v=R(o),y=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,b=m/2-g/2,w=d[h],_=y-f[l]-d[p],I=y/2-f[l]/2+b,T=Ke(w,I,_),k=c;n.modifiersData[r]=(t={},t[k]=T,t.centerOffset=T-I,t)}}function tt(e){var t=e.state,n=e.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&De(t.elements.popper,i)&&(t.elements.arrow=i)}var nt={name:"arrow",enabled:!0,phase:"main",fn:et,effect:tt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function rt(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function it(e){return[P,N,x,D].some((function(t){return e[t]>=0}))}function ot(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,s=Be(t,{elementContext:"reference"}),a=Be(t,{altBoundary:!0}),c=rt(s,r),u=rt(a,i,o),l=it(c),d=it(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":d})}var st={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ot},at=[le,ge,_e,Te,Oe,Je,Ze,nt,st],ct=ae({defaultModifiers:at}),ut="tippy-box",lt="tippy-content",dt="tippy-backdrop",ft="tippy-arrow",ht="tippy-svg-arrow",pt={passive:!0,capture:!0},mt=function(){return document.body};function gt(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function vt(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function yt(e,t){return"function"===typeof e?e.apply(void 0,t):e}function bt(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function wt(e){return e.split(/\s+/).filter(Boolean)}function _t(e){return[].concat(e)}function It(e,t){-1===e.indexOf(t)&&e.push(t)}function Et(e){return e.filter((function(t,n){return e.indexOf(t)===n}))}function Tt(e){return e.split("-")[0]}function kt(e){return[].slice.call(e)}function St(e){return Object.keys(e).reduce((function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t}),{})}function Ot(){return document.createElement("div")}function Ct(e){return["Element","Fragment"].some((function(t){return vt(e,t)}))}function At(e){return vt(e,"NodeList")}function Rt(e){return vt(e,"MouseEvent")}function Pt(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function xt(e){return Ct(e)?[e]:At(e)?kt(e):Array.isArray(e)?e:kt(document.querySelectorAll(e))}function Nt(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Dt(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function Lt(e){var t,n=_t(e),r=n[0];return null!=r&&null!=(t=r.ownerDocument)&&t.body?r.ownerDocument:document}function jt(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,i=e.popperState,o=e.props,s=o.interactiveBorder,a=Tt(i.placement),c=i.modifiersData.offset;if(!c)return!0;var u="bottom"===a?c.top.y:0,l="top"===a?c.bottom.y:0,d="right"===a?c.left.x:0,f="left"===a?c.right.x:0,h=t.top-r+u>s,p=r-t.bottom-l>s,m=t.left-n+d>s,g=n-t.right-f>s;return h||p||m||g}))}function Mt(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}function Ut(e,t){var n=t;while(n){var r;if(e.contains(n))return!0;n=null==n.getRootNode||null==(r=n.getRootNode())?void 0:r.host}return!1}var Ft={isTouch:!1},Vt=0;function $t(){Ft.isTouch||(Ft.isTouch=!0,window.performance&&document.addEventListener("mousemove",Ht))}function Ht(){var e=performance.now();e-Vt<20&&(Ft.isTouch=!1,document.removeEventListener("mousemove",Ht)),Vt=e}function Bt(){var e=document.activeElement;if(Pt(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function zt(){document.addEventListener("touchstart",$t,pt),window.addEventListener("blur",Bt)}var Wt="undefined"!==typeof window&&"undefined"!==typeof document,qt=!!Wt&&!!window.msCrypto;var Jt={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Gt={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},Kt=Object.assign({appendTo:mt,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Jt,Gt),Yt=Object.keys(Kt),Xt=function(e){var t=Object.keys(e);t.forEach((function(t){Kt[t]=e[t]}))};function Zt(e){var t=e.plugins||[],n=t.reduce((function(t,n){var r,i=n.name,o=n.defaultValue;i&&(t[i]=void 0!==e[i]?e[i]:null!=(r=Kt[i])?r:o);return t}),{});return Object.assign({},e,n)}function Qt(e,t){var n=t?Object.keys(Zt(Object.assign({},Kt,{plugins:t}))):Yt,r=n.reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(i){t[n]=r}return t}),{});return r}function en(e,t){var n=Object.assign({},t,{content:yt(t.content,[e])},t.ignoreAttributes?{}:Qt(e,t.plugins));return n.aria=Object.assign({},Kt.aria,n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}var tn=function(){return"innerHTML"};function nn(e,t){e[tn()]=t}function rn(e){var t=Ot();return!0===e?t.className=ft:(t.className=ht,Ct(e)?t.appendChild(e):nn(t,e)),t}function on(e,t){Ct(t.content)?(nn(e,""),e.appendChild(t.content)):"function"!==typeof t.content&&(t.allowHTML?nn(e,t.content):e.textContent=t.content)}function sn(e){var t=e.firstElementChild,n=kt(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(lt)})),arrow:n.find((function(e){return e.classList.contains(ft)||e.classList.contains(ht)})),backdrop:n.find((function(e){return e.classList.contains(dt)}))}}function an(e){var t=Ot(),n=Ot();n.className=ut,n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=Ot();function i(n,r){var i=sn(t),o=i.box,s=i.content,a=i.arrow;r.theme?o.setAttribute("data-theme",r.theme):o.removeAttribute("data-theme"),"string"===typeof r.animation?o.setAttribute("data-animation",r.animation):o.removeAttribute("data-animation"),r.inertia?o.setAttribute("data-inertia",""):o.removeAttribute("data-inertia"),o.style.maxWidth="number"===typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?o.setAttribute("role",r.role):o.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||on(s,e.props),r.arrow?a?n.arrow!==r.arrow&&(o.removeChild(a),o.appendChild(rn(r.arrow))):o.appendChild(rn(r.arrow)):a&&o.removeChild(a)}return r.className=lt,r.setAttribute("data-state","hidden"),on(r,e.props),t.appendChild(n),n.appendChild(r),i(e.props,e.props),{popper:t,onUpdate:i}}an.$$tippy=!0;var cn=1,un=[],ln=[];function dn(e,t){var n,r,i,o,s,a,c,u=en(e,Object.assign({},Kt,Zt(St(t)))),l=!1,d=!1,f=!1,h=!1,p=[],m=bt(Y,u.interactiveDebounce),g=cn++,v=null,y=Et(u.plugins),b={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},w={id:g,reference:e,popper:Ot(),popperInstance:v,props:u,state:b,plugins:y,clearDelayTimeouts:ce,setProps:ue,setContent:le,show:de,hide:fe,hideWithInteractivity:he,enable:se,disable:ae,unmount:pe,destroy:me};if(!u.render)return w;var _=u.render(w),I=_.popper,E=_.onUpdate;I.setAttribute("data-tippy-root",""),I.id="tippy-"+w.id,w.popper=I,e._tippy=w,I._tippy=w;var T=y.map((function(e){return e.fn(w)})),k=e.hasAttribute("aria-expanded");return J(),j(),N(),D("onCreate",[w]),u.showOnCreate&&ie(),I.addEventListener("mouseenter",(function(){w.props.interactive&&w.state.isVisible&&w.clearDelayTimeouts()})),I.addEventListener("mouseleave",(function(){w.props.interactive&&w.props.trigger.indexOf("mouseenter")>=0&&R().addEventListener("mousemove",m)})),w;function S(){var e=w.props.touch;return Array.isArray(e)?e:[e,0]}function O(){return"hold"===S()[0]}function C(){var e;return!(null==(e=w.props.render)||!e.$$tippy)}function A(){return c||e}function R(){var e=A().parentNode;return e?Lt(e):document}function P(){return sn(I)}function x(e){return w.state.isMounted&&!w.state.isVisible||Ft.isTouch||o&&"focus"===o.type?0:gt(w.props.delay,e?0:1,Kt.delay)}function N(e){void 0===e&&(e=!1),I.style.pointerEvents=w.props.interactive&&!e?"":"none",I.style.zIndex=""+w.props.zIndex}function D(e,t,n){var r;(void 0===n&&(n=!0),T.forEach((function(n){n[e]&&n[e].apply(n,t)})),n)&&(r=w.props)[e].apply(r,t)}function L(){var t=w.props.aria;if(t.content){var n="aria-"+t.content,r=I.id,i=_t(w.props.triggerTarget||e);i.forEach((function(e){var t=e.getAttribute(n);if(w.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var i=t&&t.replace(r,"").trim();i?e.setAttribute(n,i):e.removeAttribute(n)}}))}}function j(){if(!k&&w.props.aria.expanded){var t=_t(w.props.triggerTarget||e);t.forEach((function(e){w.props.interactive?e.setAttribute("aria-expanded",w.state.isVisible&&e===A()?"true":"false"):e.removeAttribute("aria-expanded")}))}}function M(){R().removeEventListener("mousemove",m),un=un.filter((function(e){return e!==m}))}function U(t){if(!Ft.isTouch||!f&&"mousedown"!==t.type){var n=t.composedPath&&t.composedPath()[0]||t.target;if(!w.props.interactive||!Ut(I,n)){if(_t(w.props.triggerTarget||e).some((function(e){return Ut(e,n)}))){if(Ft.isTouch)return;if(w.state.isVisible&&w.props.trigger.indexOf("click")>=0)return}else D("onClickOutside",[w,t]);!0===w.props.hideOnClick&&(w.clearDelayTimeouts(),w.hide(),d=!0,setTimeout((function(){d=!1})),w.state.isMounted||H())}}}function F(){f=!0}function V(){f=!1}function $(){var e=R();e.addEventListener("mousedown",U,!0),e.addEventListener("touchend",U,pt),e.addEventListener("touchstart",V,pt),e.addEventListener("touchmove",F,pt)}function H(){var e=R();e.removeEventListener("mousedown",U,!0),e.removeEventListener("touchend",U,pt),e.removeEventListener("touchstart",V,pt),e.removeEventListener("touchmove",F,pt)}function B(e,t){W(e,(function(){!w.state.isVisible&&I.parentNode&&I.parentNode.contains(I)&&t()}))}function z(e,t){W(e,t)}function W(e,t){var n=P().box;function r(e){e.target===n&&(Mt(n,"remove",r),t())}if(0===e)return t();Mt(n,"remove",s),Mt(n,"add",r),s=r}function q(t,n,r){void 0===r&&(r=!1);var i=_t(w.props.triggerTarget||e);i.forEach((function(e){e.addEventListener(t,n,r),p.push({node:e,eventType:t,handler:n,options:r})}))}function J(){O()&&(q("touchstart",K,{passive:!0}),q("touchend",X,{passive:!0})),wt(w.props.trigger).forEach((function(e){if("manual"!==e)switch(q(e,K),e){case"mouseenter":q("mouseleave",X);break;case"focus":q(qt?"focusout":"blur",Z);break;case"focusin":q("focusout",Z);break}}))}function G(){p.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,i=e.options;t.removeEventListener(n,r,i)})),p=[]}function K(e){var t,n=!1;if(w.state.isEnabled&&!Q(e)&&!d){var r="focus"===(null==(t=o)?void 0:t.type);o=e,c=e.currentTarget,j(),!w.state.isVisible&&Rt(e)&&un.forEach((function(t){return t(e)})),"click"===e.type&&(w.props.trigger.indexOf("mouseenter")<0||l)&&!1!==w.props.hideOnClick&&w.state.isVisible?n=!0:ie(e),"click"===e.type&&(l=!n),n&&!r&&oe(e)}}function Y(e){var t=e.target,n=A().contains(t)||I.contains(t);if("mousemove"!==e.type||!n){var r=re().concat(I).map((function(e){var t,n=e._tippy,r=null==(t=n.popperInstance)?void 0:t.state;return r?{popperRect:e.getBoundingClientRect(),popperState:r,props:u}:null})).filter(Boolean);jt(r,e)&&(M(),oe(e))}}function X(e){var t=Q(e)||w.props.trigger.indexOf("click")>=0&&l;t||(w.props.interactive?w.hideWithInteractivity(e):oe(e))}function Z(e){w.props.trigger.indexOf("focusin")<0&&e.target!==A()||w.props.interactive&&e.relatedTarget&&I.contains(e.relatedTarget)||oe(e)}function Q(e){return!!Ft.isTouch&&O()!==e.type.indexOf("touch")>=0}function ee(){te();var t=w.props,n=t.popperOptions,r=t.placement,i=t.offset,o=t.getReferenceClientRect,s=t.moveTransition,c=C()?sn(I).arrow:null,u=o?{getBoundingClientRect:o,contextElement:o.contextElement||A()}:e,l={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(C()){var n=P(),r=n.box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?r.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?r.setAttribute("data-"+e,""):r.removeAttribute("data-"+e)})),t.attributes.popper={}}}},d=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!s}},l];C()&&c&&d.push({name:"arrow",options:{element:c,padding:3}}),d.push.apply(d,(null==n?void 0:n.modifiers)||[]),w.popperInstance=ct(u,I,Object.assign({},n,{placement:r,onFirstUpdate:a,modifiers:d}))}function te(){w.popperInstance&&(w.popperInstance.destroy(),w.popperInstance=null)}function ne(){var e,t=w.props.appendTo,n=A();e=w.props.interactive&&t===mt||"parent"===t?n.parentNode:yt(t,[n]),e.contains(I)||e.appendChild(I),w.state.isMounted=!0,ee()}function re(){return kt(I.querySelectorAll("[data-tippy-root]"))}function ie(e){w.clearDelayTimeouts(),e&&D("onTrigger",[w,e]),$();var t=x(!0),r=S(),i=r[0],o=r[1];Ft.isTouch&&"hold"===i&&o&&(t=o),t?n=setTimeout((function(){w.show()}),t):w.show()}function oe(e){if(w.clearDelayTimeouts(),D("onUntrigger",[w,e]),w.state.isVisible){if(!(w.props.trigger.indexOf("mouseenter")>=0&&w.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&l)){var t=x(!1);t?r=setTimeout((function(){w.state.isVisible&&w.hide()}),t):i=requestAnimationFrame((function(){w.hide()}))}}else H()}function se(){w.state.isEnabled=!0}function ae(){w.hide(),w.state.isEnabled=!1}function ce(){clearTimeout(n),clearTimeout(r),cancelAnimationFrame(i)}function ue(t){if(!w.state.isDestroyed){D("onBeforeUpdate",[w,t]),G();var n=w.props,r=en(e,Object.assign({},n,St(t),{ignoreAttributes:!0}));w.props=r,J(),n.interactiveDebounce!==r.interactiveDebounce&&(M(),m=bt(Y,r.interactiveDebounce)),n.triggerTarget&&!r.triggerTarget?_t(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded"),j(),N(),E&&E(n,r),w.popperInstance&&(ee(),re().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)}))),D("onAfterUpdate",[w,t])}}function le(e){w.setProps({content:e})}function de(){var e=w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=Ft.isTouch&&!w.props.touch,i=gt(w.props.duration,0,Kt.duration);if(!(e||t||n||r)&&!A().hasAttribute("disabled")&&(D("onShow",[w],!1),!1!==w.props.onShow(w))){if(w.state.isVisible=!0,C()&&(I.style.visibility="visible"),N(),$(),w.state.isMounted||(I.style.transition="none"),C()){var o=P(),s=o.box,c=o.content;Nt([s,c],0)}a=function(){var e;if(w.state.isVisible&&!h){if(h=!0,I.offsetHeight,I.style.transition=w.props.moveTransition,C()&&w.props.animation){var t=P(),n=t.box,r=t.content;Nt([n,r],i),Dt([n,r],"visible")}L(),j(),It(ln,w),null==(e=w.popperInstance)||e.forceUpdate(),D("onMount",[w]),w.props.animation&&C()&&z(i,(function(){w.state.isShown=!0,D("onShown",[w])}))}},ne()}}function fe(){var e=!w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=gt(w.props.duration,1,Kt.duration);if(!(e||t||n)&&(D("onHide",[w],!1),!1!==w.props.onHide(w))){if(w.state.isVisible=!1,w.state.isShown=!1,h=!1,l=!1,C()&&(I.style.visibility="hidden"),M(),H(),N(!0),C()){var i=P(),o=i.box,s=i.content;w.props.animation&&(Nt([o,s],r),Dt([o,s],"hidden"))}L(),j(),w.props.animation?C()&&B(r,w.unmount):w.unmount()}}function he(e){R().addEventListener("mousemove",m),It(un,m),m(e)}function pe(){w.state.isVisible&&w.hide(),w.state.isMounted&&(te(),re().forEach((function(e){e._tippy.unmount()})),I.parentNode&&I.parentNode.removeChild(I),ln=ln.filter((function(e){return e!==w})),w.state.isMounted=!1,D("onHidden",[w]))}function me(){w.state.isDestroyed||(w.clearDelayTimeouts(),w.unmount(),G(),delete e._tippy,w.state.isDestroyed=!0,D("onDestroy",[w]))}}function fn(e,t){void 0===t&&(t={});var n=Kt.plugins.concat(t.plugins||[]);zt();var r=Object.assign({},t,{plugins:n}),i=xt(e),o=i.reduce((function(e,t){var n=t&&dn(t,r);return n&&e.push(n),e}),[]);return Ct(e)?o[0]:o}fn.defaultProps=Kt,fn.setDefaultProps=Xt,fn.currentInput=Ft;Object.assign({},Te,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}});fn.setDefaultProps({render:an});var hn=fn},5312:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},2730:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return o.ZR},SDK_VERSION:function(){return ye},_DEFAULT_ENTRY_NAME:function(){return oe},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return fe},_registerComponent:function(){return de},_removeServiceInstance:function(){return he},deleteApp:function(){return Ie},getApp:function(){return we},getApps:function(){return _e},initializeApp:function(){return be},onLog:function(){return Te},registerVersion:function(){return Ee},setLogLevel:function(){return ke}});n(7658);var r=n(1724),i=n(9511),o=n(6816);n(2801);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,f=new WeakMap,h=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(I(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(f.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));f.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),I(d.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return h.set(r,t.sort?t.sort():[t]),I(r)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),s(e,u())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const E=e=>m.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=I(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(I(s.result),e.oldVersion,e.newVersion,I(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const k=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],O=new Map;function C(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(O.get(t))return O.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!k.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return O.set(t,o),o}b((e=>({...e,get:(t,n,r)=>C(t,n)||e.get(t,n,r),has:(t,n)=>!!C(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",x="0.9.8",N=new i.Yd("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",j="@firebase/analytics",M="@firebase/app-check-compat",U="@firebase/app-check",F="@firebase/auth",V="@firebase/auth-compat",$="@firebase/database",H="@firebase/database-compat",B="@firebase/functions",z="@firebase/functions-compat",W="@firebase/installations",q="@firebase/installations-compat",J="@firebase/messaging",G="@firebase/messaging-compat",K="@firebase/performance",Y="@firebase/performance-compat",X="@firebase/remote-config",Z="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.20.0",oe="[DEFAULT]",se={[P]:"fire-core",[D]:"fire-core-compat",[j]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[M]:"fire-app-check-compat",[F]:"fire-auth",[V]:"fire-auth-compat",[$]:"fire-rtdb",[H]:"fire-rtdb-compat",[B]:"fire-fn",[z]:"fire-fn-compat",[W]:"fire-iid",[q]:"fire-iid-compat",[J]:"fire-fcm",[G]:"fire-fcm-compat",[K]:"fire-perf",[Y]:"fire-perf-compat",[X]:"fire-rc",[Z]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function de(e){const t=e.name;if(ce.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function he(e,t,n=oe){fe(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new o.LL("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=ie;function be(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw ge.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw ge.create("no-options");const a=ae.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw ge.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ce.values())c.addComponent(r);const u=new ve(n,i,c);return ae.set(s,u),u}function we(e=oe){const t=ae.get(e);if(!t&&e===oe)return be();if(!t)throw ge.create("no-app",{appName:e});return t}function _e(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Ee(e,t,n){var i;let o=null!==(i=se[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void N.warn(e.join(" "))}de(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}function Te(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function ke(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="firebase-heartbeat-database",Oe=1,Ce="firebase-heartbeat-store";let Ae=null;function Re(){return Ae||(Ae=T(Se,Oe,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ce)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Ae}async function Pe(e){try{const t=await Re();return t.transaction(Ce).objectStore(Ce).get(Ne(e))}catch(t){if(t instanceof o.ZR)N.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});N.warn(e.message)}}}async function xe(e,t){try{const n=await Re(),r=n.transaction(Ce,"readwrite"),i=r.objectStore(Ce);return await i.put(t,Ne(e)),r.done}catch(n){if(n instanceof o.ZR)N.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(e.message)}}}function Ne(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De=1024,Le=2592e6;class je{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Fe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Me();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Me(),{heartbeatsToSend:t,unsentEntries:n}=Ue(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Me(){const e=new Date;return e.toISOString().substring(0,10)}function Ue(e,t=De){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ve(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ve(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Pe(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ve(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e){de(new r.wA("platform-logger",(e=>new A(e)),"PRIVATE")),de(new r.wA("heartbeat",(e=>new je(e)),"PRIVATE")),Ee(P,x,e),Ee(P,x,"esm2017"),Ee("fire-js","")}$e("")},1724:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(6816);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},9511:function(e,t,n){"use strict";n.d(t,{Am:function(){return d},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},7818:function(e,t,n){"use strict";n.d(t,{w9:function(){return r.Q},GH:function(){return r.W},hJ:function(){return r.V},RO:function(){return r.P},v0:function(){return r.o},Aj:function(){return r.x}});var r=n(3279);n(6816),n(2730),n(9511),n(1724)},2386:function(e,t,n){"use strict";n.d(t,{WB:function(){return de},Q_:function(){return Ee}});n(7658),n(541);var r=n(4188),i=n(8473),o=!1;function s(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function a(){return c().__VUE_DEVTOOLS_GLOBAL_HOOK__}function c(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const u="function"===typeof Proxy,l="devtools-plugin:setup",d="plugin:settings:set";let f,h,p;function m(){var e;return void 0!==f||("undefined"!==typeof window&&window.performance?(f=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(f=!0,h=n.g.perf_hooks.performance):f=!1),f}function g(){return m()?h.now():Date.now()}class v{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const s in e.settings){const t=e.settings[s];n[s]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(o){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(o){}i=e},now(){return g()}},t&&t.on(d,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function y(e,t){const n=e,r=c(),i=a(),o=u&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&o){const e=o?new v(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else i.emit(l,e,t)}const b=e=>p=e,w=Symbol();function _(e){return e&&"object"===typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!==typeof e.toJSON}var I;(function(e){e["direct"]="direct",e["patchObject"]="patch object",e["patchFunction"]="patch function"})(I||(I={}));const E="undefined"!==typeof window,T=!1,k=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof global&&global.global===global?global:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function S(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function O(e,t,n){const r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){x(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function C(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return t.status>=200&&t.status<=299}function A(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}const R="object"===typeof navigator?navigator:{userAgent:""},P=(()=>/Macintosh/.test(R.userAgent)&&/AppleWebKit/.test(R.userAgent)&&!/Safari/.test(R.userAgent))(),x=E?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!P?N:"msSaveOrOpenBlob"in R?D:L:()=>{};function N(e,t="download",n){const r=document.createElement("a");r.download=t,r.rel="noopener","string"===typeof e?(r.href=e,r.origin!==location.origin?C(r.href)?O(e,t,n):(r.target="_blank",A(r)):A(r)):(r.href=URL.createObjectURL(e),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){A(r)}),0))}function D(e,t="download",n){if("string"===typeof e)if(C(e))O(e,t,n);else{const t=document.createElement("a");t.href=e,t.target="_blank",setTimeout((function(){A(t)}))}else navigator.msSaveOrOpenBlob(S(e,n),t)}function L(e,t,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof e)return O(e,t,n);const i="application/octet-stream"===e.type,o=/constructor/i.test(String(k.HTMLElement))||"safari"in k,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&o||P)&&"undefined"!==typeof FileReader){const t=new FileReader;t.onloadend=function(){let e=t.result;if("string"!==typeof e)throw r=null,new Error("Wrong reader.result type");e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{const t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout((function(){URL.revokeObjectURL(t)}),4e4)}}function j(e,t){const n="🍍 "+e;"function"===typeof __VUE_DEVTOOLS_TOAST__?__VUE_DEVTOOLS_TOAST__(n,t):"error"===t?console.error(n):"warn"===t?console.warn(n):console.log(n)}function M(e){return"_a"in e&&"install"in e}function U(){if(!("clipboard"in navigator))return j("Your browser doesn't support the Clipboard API","error"),!0}function F(e){return!!(e instanceof Error&&e.message.toLowerCase().includes("document is not focused"))&&(j('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0)}async function V(e){if(!U())try{await navigator.clipboard.writeText(JSON.stringify(e.state.value)),j("Global state copied to clipboard.")}catch(t){if(F(t))return;j("Failed to serialize the state. Check the console for more details.","error"),console.error(t)}}async function $(e){if(!U())try{e.state.value=JSON.parse(await navigator.clipboard.readText()),j("Global state pasted from clipboard.")}catch(t){if(F(t))return;j("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(t)}}async function H(e){try{x(new Blob([JSON.stringify(e.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(t){j("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}let B;function z(){function e(){return new Promise(((e,t)=>{B.onchange=async()=>{const t=B.files;if(!t)return e(null);const n=t.item(0);return e(n?{text:await n.text(),file:n}:null)},B.oncancel=()=>e(null),B.onerror=t,B.click()}))}return B||(B=document.createElement("input"),B.type="file",B.accept=".json"),e}async function W(e){try{const t=await z(),n=await t();if(!n)return;const{text:r,file:i}=n;e.state.value=JSON.parse(r),j(`Global state imported from "${i.name}".`)}catch(t){j("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}function q(e){return{_custom:{display:e}}}const J="🍍 Pinia (root)",G="_root";function K(e){return M(e)?{id:G,label:J}:{id:e.$id,label:e.$id}}function Y(e){if(M(e)){const t=Array.from(e._s.keys()),n=e._s,r={state:t.map((t=>({editable:!0,key:t,value:e.state.value[t]}))),getters:t.filter((e=>n.get(e)._getters)).map((e=>{const t=n.get(e);return{editable:!1,key:e,value:t._getters.reduce(((e,n)=>(e[n]=t[n],e)),{})}}))};return r}const t={state:Object.keys(e.$state).map((t=>({editable:!0,key:t,value:e.$state[t]})))};return e._getters&&e._getters.length&&(t.getters=e._getters.map((t=>({editable:!1,key:t,value:e[t]})))),e._customProperties.size&&(t.customProperties=Array.from(e._customProperties).map((t=>({editable:!0,key:t,value:e[t]})))),t}function X(e){return e?Array.isArray(e)?e.reduce(((e,t)=>(e.keys.push(t.key),e.operations.push(t.type),e.oldValue[t.key]=t.oldValue,e.newValue[t.key]=t.newValue,e)),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:q(e.type),key:q(e.key),oldValue:e.oldValue,newValue:e.newValue}:{}}function Z(e){switch(e){case I.direct:return"mutation";case I.patchFunction:return"$patch";case I.patchObject:return"$patch";default:return"unknown"}}let Q=!0;const ee=[],te="pinia:mutations",ne="pinia",{assign:re}=Object,ie=e=>"🍍 "+e;function oe(e,t){y({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:ee,app:e},(n=>{"function"!==typeof n.now&&j("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:te,label:"Pinia 🍍",color:15064968}),n.addInspector({id:ne,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{V(t)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await $(t),n.sendInspectorTree(ne),n.sendInspectorState(ne)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{H(t)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await W(t),n.sendInspectorTree(ne),n.sendInspectorState(ne)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:"Reset the state (option store only)",action:e=>{const n=t._s.get(e);n?n._isOptionsAPI?(n.$reset(),j(`Store "${e}" reset.`)):j(`Cannot reset "${e}" store because it's a setup store.`,"warn"):j(`Cannot reset "${e}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent(((e,t)=>{const n=e.componentInstance&&e.componentInstance.proxy;if(n&&n._pStores){const t=e.componentInstance.proxy._pStores;Object.values(t).forEach((t=>{e.instanceData.state.push({type:ie(t.$id),key:"state",editable:!0,value:t._isOptionsAPI?{_custom:{value:(0,r.IU)(t.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>t.$reset()}]}}:Object.keys(t.$state).reduce(((e,n)=>(e[n]=t.$state[n],e)),{})}),t._getters&&t._getters.length&&e.instanceData.state.push({type:ie(t.$id),key:"getters",editable:!1,value:t._getters.reduce(((e,n)=>{try{e[n]=t[n]}catch(r){e[n]=r}return e}),{})})}))}})),n.on.getInspectorTree((n=>{if(n.app===e&&n.inspectorId===ne){let e=[t];e=e.concat(Array.from(t._s.values())),n.rootNodes=(n.filter?e.filter((e=>"$id"in e?e.$id.toLowerCase().includes(n.filter.toLowerCase()):J.toLowerCase().includes(n.filter.toLowerCase()))):e).map(K)}})),n.on.getInspectorState((n=>{if(n.app===e&&n.inspectorId===ne){const e=n.nodeId===G?t:t._s.get(n.nodeId);if(!e)return;e&&(n.state=Y(e))}})),n.on.editInspectorState(((n,r)=>{if(n.app===e&&n.inspectorId===ne){const e=n.nodeId===G?t:t._s.get(n.nodeId);if(!e)return j(`store "${n.nodeId}" not found`,"error");const{path:r}=n;M(e)?r.unshift("state"):1===r.length&&e._customProperties.has(r[0])&&!(r[0]in e.$state)||r.unshift("$state"),Q=!1,n.set(e,r,n.state.value),Q=!0}})),n.on.editComponentState((e=>{if(e.type.startsWith("🍍")){const n=e.type.replace(/^🍍\s*/,""),r=t._s.get(n);if(!r)return j(`store "${n}" not found`,"error");const{path:i}=e;if("state"!==i[0])return j(`Invalid path for store "${n}":\n${i}\nOnly state can be modified.`);i[0]="$state",Q=!1,e.set(r,i,e.state.value),Q=!0}}))}))}function se(e,t){ee.includes(ie(t.$id))||ee.push(ie(t.$id)),y({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:ee,app:e,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},(e=>{const n="function"===typeof e.now?e.now.bind(e):Date.now;t.$onAction((({after:r,onError:i,name:o,args:s})=>{const a=ce++;e.addTimelineEvent({layerId:te,event:{time:n(),title:"🛫 "+o,subtitle:"start",data:{store:q(t.$id),action:q(o),args:s},groupId:a}}),r((r=>{ae=void 0,e.addTimelineEvent({layerId:te,event:{time:n(),title:"🛬 "+o,subtitle:"end",data:{store:q(t.$id),action:q(o),args:s,result:r},groupId:a}})})),i((r=>{ae=void 0,e.addTimelineEvent({layerId:te,event:{time:n(),logType:"error",title:"💥 "+o,subtitle:"end",data:{store:q(t.$id),action:q(o),args:s,error:r},groupId:a}})}))}),!0),t._customProperties.forEach((o=>{(0,i.YP)((()=>(0,r.SU)(t[o])),((t,r)=>{e.notifyComponentUpdate(),e.sendInspectorState(ne),Q&&e.addTimelineEvent({layerId:te,event:{time:n(),title:"Change",subtitle:o,data:{newValue:t,oldValue:r},groupId:ae}})}),{deep:!0})})),t.$subscribe((({events:r,type:i},o)=>{if(e.notifyComponentUpdate(),e.sendInspectorState(ne),!Q)return;const s={time:n(),title:Z(i),data:re({store:q(t.$id)},X(r)),groupId:ae};ae=void 0,i===I.patchFunction?s.subtitle="⤵️":i===I.patchObject?s.subtitle="🧩":r&&!Array.isArray(r)&&(s.subtitle=r.type),r&&(s.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:r}}),e.addTimelineEvent({layerId:te,event:s})}),{detached:!0,flush:"sync"});const o=t._hotUpdate;t._hotUpdate=(0,r.Xl)((r=>{o(r),e.addTimelineEvent({layerId:te,event:{time:n(),title:"🔥 "+t.$id,subtitle:"HMR update",data:{store:q(t.$id),info:q("HMR update")}}}),e.notifyComponentUpdate(),e.sendInspectorTree(ne),e.sendInspectorState(ne)}));const{$dispose:s}=t;t.$dispose=()=>{s(),e.notifyComponentUpdate(),e.sendInspectorTree(ne),e.sendInspectorState(ne),e.getSettings().logStoreChanges&&j(`Disposed "${t.$id}" store 🗑`)},e.notifyComponentUpdate(),e.sendInspectorTree(ne),e.sendInspectorState(ne),e.getSettings().logStoreChanges&&j(`"${t.$id}" store installed 🆕`)}))}let ae,ce=0;function ue(e,t){const n=t.reduce(((t,n)=>(t[n]=(0,r.IU)(e)[n],t)),{});for(const r in n)e[r]=function(){const t=ce,i=new Proxy(e,{get(...e){return ae=t,Reflect.get(...e)},set(...e){return ae=t,Reflect.set(...e)}});return n[r].apply(i,arguments)}}function le({app:e,store:t,options:n}){if(!t.$id.startsWith("__hot:")){if(n.state&&(t._isOptionsAPI=!0),"function"===typeof n.state){ue(t,Object.keys(n.actions));const e=t._hotUpdate;(0,r.IU)(t)._hotUpdate=function(n){e.apply(this,arguments),ue(t,Object.keys(n._hmrPayload.actions))}}se(e,t)}}function de(){const e=(0,r.B)(!0),t=e.run((()=>(0,r.iH)({})));let n=[],i=[];const s=(0,r.Xl)({install(e){b(s),o||(s._a=e,e.provide(w,s),e.config.globalProperties.$pinia=s,T&&oe(e,s),i.forEach((e=>n.push(e))),i=[])},use(e){return this._a||o?n.push(e):i.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return T&&"undefined"!==typeof Proxy&&s.use(le),s}const fe=()=>{};function he(e,t,n,i=fe){e.push(t);const o=()=>{const n=e.indexOf(t);n>-1&&(e.splice(n,1),i())};return!n&&(0,r.nZ)()&&(0,r.EB)(o),o}function pe(e,...t){e.slice().forEach((e=>{e(...t)}))}function me(e,t){e instanceof Map&&t instanceof Map&&t.forEach(((t,n)=>e.set(n,t))),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const i=t[n],o=e[n];_(o)&&_(i)&&e.hasOwnProperty(n)&&!(0,r.dq)(i)&&!(0,r.PG)(i)?e[n]=me(o,i):e[n]=i}return e}const ge=Symbol(),ve=new WeakMap;function ye(e){return o?!ve.has(e):!_(e)||!e.hasOwnProperty(ge)}const{assign:be}=Object;function we(e){return!(!(0,r.dq)(e)||!e.effect)}function _e(e,t,n,a){const{state:c,actions:u,getters:l}=t,d=n.state.value[e];let f;function h(){d||(o?s(n.state.value,e,c?c():{}):n.state.value[e]=c?c():{});const t=(0,r.BK)(n.state.value[e]);return be(t,u,Object.keys(l||{}).reduce(((t,s)=>(t[s]=(0,r.Xl)((0,i.Fl)((()=>{b(n);const t=n._s.get(e);if(!o||t._r)return l[s].call(t,t)}))),t)),{}))}return f=Ie(e,h,t,n,a,!0),f}function Ie(e,t,n={},a,c,u){let l;const d=be({actions:{}},n);const f={deep:!0};let h,p;let m,g=(0,r.Xl)([]),v=(0,r.Xl)([]);const y=a.state.value[e];u||y||(o?s(a.state.value,e,{}):a.state.value[e]={});const w=(0,r.iH)({});let _;function E(t){let n;h=p=!1,"function"===typeof t?(t(a.state.value[e]),n={type:I.patchFunction,storeId:e,events:m}):(me(a.state.value[e],t),n={type:I.patchObject,payload:t,storeId:e,events:m});const r=_=Symbol();(0,i.Y3)().then((()=>{_===r&&(h=!0)})),p=!0,pe(g,n,a.state.value[e])}const k=u?function(){const{state:e}=n,t=e?e():{};this.$patch((e=>{be(e,t)}))}:fe;function S(){l.stop(),g=[],v=[],a._s.delete(e)}function O(t,n){return function(){b(a);const r=Array.from(arguments),i=[],o=[];function s(e){i.push(e)}function c(e){o.push(e)}let u;pe(v,{args:r,name:t,store:R,after:s,onError:c});try{u=n.apply(this&&this.$id===e?this:R,r)}catch(l){throw pe(o,l),l}return u instanceof Promise?u.then((e=>(pe(i,e),e))).catch((e=>(pe(o,e),Promise.reject(e)))):(pe(i,u),u)}}const C=(0,r.Xl)({actions:{},getters:{},state:[],hotState:w}),A={_p:a,$id:e,$onAction:he.bind(null,v),$patch:E,$reset:k,$subscribe(t,n={}){const r=he(g,t,n.detached,(()=>o())),o=l.run((()=>(0,i.YP)((()=>a.state.value[e]),(r=>{("sync"===n.flush?p:h)&&t({storeId:e,type:I.direct,events:m},r)}),be({},f,n))));return r},$dispose:S};o&&(A._r=!1);const R=(0,r.qj)(T?be({_hmrPayload:C,_customProperties:(0,r.Xl)(new Set)},A):A);a._s.set(e,R);const P=a._e.run((()=>(l=(0,r.B)(),l.run((()=>t())))));for(const i in P){const t=P[i];if((0,r.dq)(t)&&!we(t)||(0,r.PG)(t))u||(y&&ye(t)&&((0,r.dq)(t)?t.value=y[i]:me(t,y[i])),o?s(a.state.value[e],i,t):a.state.value[e][i]=t);else if("function"===typeof t){const e=O(i,t);o?s(P,i,e):P[i]=e,d.actions[i]=t}else 0}if(o?Object.keys(P).forEach((e=>{s(R,e,P[e])})):(be(R,P),be((0,r.IU)(R),P)),Object.defineProperty(R,"$state",{get:()=>a.state.value[e],set:e=>{E((t=>{be(t,e)}))}}),T){const e={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach((t=>{Object.defineProperty(R,t,be({value:R[t]},e))}))}return o&&(R._r=!0),a._p.forEach((e=>{if(T){const t=l.run((()=>e({store:R,app:a._a,pinia:a,options:d})));Object.keys(t||{}).forEach((e=>R._customProperties.add(e))),be(R,t)}else be(R,l.run((()=>e({store:R,app:a._a,pinia:a,options:d}))))})),y&&u&&n.hydrate&&n.hydrate(R.$state,y),h=!0,p=!0,R}function Ee(e,t,n){let r,o;const s="function"===typeof t;function a(e,n){const a=(0,i.FN)();e=e||a&&(0,i.f3)(w,null),e&&b(e),e=p,e._s.has(r)||(s?Ie(r,t,o,e):_e(r,o,e));const c=e._s.get(r);return c}return"string"===typeof e?(r=e,o=s?n:t):(o=e,r=e.id),a.$id=r,a}},4731:function(e,t,n){"use strict";n.d(t,{p7:function(){return nt},r5:function(){return V}});n(7658),n(541);var r=n(8473),i=n(4188);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof window;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const d=/\/$/,f=e=>e.replace(d,"");function h(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),i=e(o)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=_(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&v(t.matched[r],n.matched[i])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function v(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b(e[n],t[n]))return!1;return!0}function b(e,t){return l(e)?w(e,t):l(t)?w(t,e):e===t}function w(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function _(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],"."!==o){if(".."!==o)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var I,E;(function(e){e["pop"]="pop",e["push"]="push"})(I||(I={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(E||(E={}));function T(e){if(!e)if(o){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),f(e)}const k=/^[^#]+#/;function S(e,t){return e.replace(k,"#")+t}function O(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const C=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=O(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function R(e,t){const n=history.state?history.state.position-t:-1;return n+e}const P=new Map;function x(e,t){P.set(e,t)}function N(e){const t=P.get(e);return P.delete(e),t}let D=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const s=m(n,e);return s+r+i}function j(e,t,n,r){let i=[],o=[],s=null;const c=({state:o})=>{const a=L(e,location),c=n.value,u=t.value;let l=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:I.pop,direction:l?l>0?E.forward:E.back:E.unknown})}))};function u(){s=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function d(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:C()}),"")}function f(){for(const e of o)e();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:u,listen:l,destroy:f}}function M(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?C():null}}function U(e){const{history:t,location:n}=window,r={value:L(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:D()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=a({},t.state,M(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function c(e,n){const s=a({},i.value,t.state,{forward:e,scroll:C()});o(s.current,s,!0);const c=a({},M(r.value,e,null),{position:s.position+1},n);o(e,c,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:s}}function F(e){e=T(e);const t=U(e),n=j(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:S.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function V(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),F(e)}function $(e){return"string"===typeof e||e&&"object"===typeof e}function H(e){return"string"===typeof e||"symbol"===typeof e}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var W;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(W||(W={}));function q(e,t){return a(new Error,{type:e,[z]:!0},t)}function J(e,t){return e instanceof Error&&z in e&&(null==t||!!(e.type&t))}const G="[^/]+?",K={sensitive:!1,strict:!1,start:!0,end:!0},Y=/[.+*?^${}()[\]/\\]/g;function X(e,t){const n=a({},K,t),r=[];let i=n.start?"^":"";const o=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Y,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;o.push({name:e,repeatable:n,optional:c});const l=u||G;if(l!==G){s+=10;try{new RegExp(`(${l})`)}catch(d){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+d.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(f=c&&a.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),i+=f,s+=20,c&&(s+=-8),n&&(s+=-20),".*"===l&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(l(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:s,score:r,keys:o,parse:c,stringify:u}}function Z(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Q(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Z(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(ee(r))return 1;if(ee(i))return-1}return i.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function d(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&d(),s()):":"===a?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:ne.test(a)?f():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),d(),s(),i}function ie(e,t,n){const r=X(re(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function oe(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,c=ae(e);c.aliasOf=r&&r.record;const d=de(t,e),f=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)f.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let h,p;for(const t of f){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(h=ie(t,n,d),r?r.alias.push(h):(p=p||h,p!==h&&p.alias.push(h),i&&e.name&&!ue(h)&&s(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t])}r=r||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&l(h)}return p?()=>{s(p)}:u}function s(e){if(H(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function c(){return n}function l(e){let t=0;while(t<n.length&&Q(e,n[t])>=0&&(e.record.path!==n[t].record.path||!fe(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ue(e)&&r.set(e.record.name,e)}function d(e,t){let i,o,s,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw q(1,{location:e});0,s=i.record.name,c=a(se(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&se(e.params,i.keys.map((e=>e.name)))),o=i.stringify(c)}else if("path"in e)o=e.path,i=n.find((e=>e.re.test(o))),i&&(c=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw q(1,{location:e,currentLocation:t});s=i.record.name,c=a({},t.params,e.params),o=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:s,path:o,params:c,matched:u,meta:le(u)}}return t=de({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:d,removeRoute:s,getRoutes:c,getRecordMatcher:i}}function se(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ce(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ce(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ue(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function le(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function de(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function fe(e,t){return t.children.some((t=>t===e||fe(e,t)))}const he=/#/g,pe=/&/g,me=/\//g,ge=/=/g,ve=/\?/g,ye=/\+/g,be=/%5B/g,we=/%5D/g,_e=/%5E/g,Ie=/%60/g,Ee=/%7B/g,Te=/%7C/g,ke=/%7D/g,Se=/%20/g;function Oe(e){return encodeURI(""+e).replace(Te,"|").replace(be,"[").replace(we,"]")}function Ce(e){return Oe(e).replace(Ee,"{").replace(ke,"}").replace(_e,"^")}function Ae(e){return Oe(e).replace(ye,"%2B").replace(Se,"+").replace(he,"%23").replace(pe,"%26").replace(Ie,"`").replace(Ee,"{").replace(ke,"}").replace(_e,"^")}function Re(e){return Ae(e).replace(ge,"%3D")}function Pe(e){return Oe(e).replace(he,"%23").replace(ve,"%3F")}function xe(e){return null==e?"":Pe(e).replace(me,"%2F")}function Ne(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),o=Ne(n<0?e:e.slice(0,n)),s=n<0?null:Ne(e.slice(n+1));if(o in t){let e=t[o];l(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&Ae(e))):[r&&Ae(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Me=Symbol(""),Ue=Symbol(""),Fe=Symbol(""),Ve=Symbol(""),$e=Symbol("");function He(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((s,a)=>{const c=e=>{!1===e?a(q(4,{from:n,to:t})):e instanceof Error?a(e):$(e)?a(q(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function ze(e,t,n,r){const i=[];for(const o of e){0;for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(We(a)){const s=a.__vccOpts||a,c=s[t];c&&i.push(Be(c,n,r,o,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const a=s(i)?i.default:i;o.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&Be(u,n,r,o,e)()}))))}}}return i}function We(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function qe(e){const t=(0,r.f3)(Fe),n=(0,r.f3)(Ve),o=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),s=(0,r.Fl)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(v.bind(null,r));if(s>-1)return s;const a=Xe(e[t-2]);return t>1&&Xe(r)===a&&i[i.length-1].path!==a?i.findIndex(v.bind(null,e[t-2])):s})),a=(0,r.Fl)((()=>s.value>-1&&Ye(n.params,o.value.params))),c=(0,r.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&y(n.params,o.value.params)));function l(n={}){return Ke(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:o,href:(0,r.Fl)((()=>o.value.href)),isActive:a,isExactActive:c,navigate:l}}const Je=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qe,setup(e,{slots:t}){const n=(0,i.qj)(qe(e)),{options:o}=(0,r.f3)(Fe),s=(0,r.Fl)((()=>({[Ze(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Ze(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ge=Je;function Ke(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ze=(e,t,n)=>null!=e?e:null!=t?t:n,Qe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=(0,r.f3)($e),s=(0,r.Fl)((()=>e.route||o.value)),c=(0,r.f3)(Ue,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>s.value.matched[u.value]));(0,r.JJ)(Ue,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Me,l),(0,r.JJ)($e,s);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,l.value,e.name]),(([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&v(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=s.value,o=e.name,c=l.value,u=c&&c.components[o];if(!u)return et(n.default,{Component:u,route:i});const f=c.props[o],h=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=e=>{e.component.isUnmounted&&(c.instances[o]=null)},m=(0,r.h)(u,a({},h,t,{onVnodeUnmounted:p,ref:d}));return et(n.default,{Component:m,route:i})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Qe;function nt(e){const t=oe(e.routes,e),n=e.parseQuery||De,s=e.stringifyQuery||Le,d=e.history;const f=He(),m=He(),v=He(),y=(0,i.XI)(B);let b=B;o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=c.bind(null,(e=>""+e)),_=c.bind(null,xe),E=c.bind(null,Ne);function T(e,n){let r,i;return H(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function k(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function S(){return t.getRoutes().map((e=>e.record))}function O(e){return!!t.getRecordMatcher(e)}function P(e,r){if(r=a({},r||y.value),"string"===typeof e){const i=h(n,e,r.path),o=t.resolve({path:i.path},r),s=d.createHref(i.fullPath);return a(i,o,{params:E(o.params),hash:Ne(i.hash),redirectedFrom:void 0,href:s})}let i;if("path"in e)i=a({},e,{path:h(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:_(e.params)}),r.params=_(r.params)}const o=t.resolve(i,r),c=e.hash||"";o.params=w(E(o.params));const u=p(s,a({},e,{hash:Ce(c),path:o.path})),l=d.createHref(u);return a({fullPath:u,hash:c,query:s===Le?je(e.query):e.query||{}},o,{redirectedFrom:void 0,href:l})}function D(e){return"string"===typeof e?h(n,e,y.value.path):a({},e)}function L(e,t){if(b!==e)return q(8,{from:t,to:e})}function j(e){return F(e)}function M(e){return j(a(D(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=D(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function F(e,t){const n=b=P(e),r=y.value,i=e.state,o=e.force,c=!0===e.replace,u=U(n);if(u)return F(a(D(u),{state:"object"===typeof u?a({},i,u.state):i,force:o,replace:c}),t||n);const l=n;let d;return l.redirectedFrom=t,!o&&g(s,r,n)&&(d=q(16,{to:l,from:r}),ne(r,r,!0,!1)),(d?Promise.resolve(d):$(l,r)).catch((e=>J(e)?J(e,2)?e:te(e):Q(e,l,r))).then((e=>{if(e){if(J(e,2))return F(a({replace:c},D(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:o}),t||l)}else e=W(l,r,!0,c,i);return z(l,r,e),e}))}function V(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function $(e,t){let n;const[r,i,o]=it(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const s=V.bind(null,e,t);return n.push(s),rt(n).then((()=>{n=[];for(const r of f.list())n.push(Be(r,e,t));return n.push(s),rt(n)})).then((()=>{n=ze(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(s),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(s),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(o,"beforeRouteEnter",e,t),n.push(s),rt(n)))).then((()=>{n=[];for(const r of m.list())n.push(Be(r,e,t));return n.push(s),rt(n)})).catch((e=>J(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of v.list())r(e,t,n)}function W(e,t,n,r,i){const s=L(e,t);if(s)return s;const c=t===B,u=o?history.state:{};n&&(r||c?d.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):d.push(e.fullPath,i)),y.value=e,ne(e,t,n,c),te()}let G;function K(){G||(G=d.listen(((e,t,n)=>{if(!ae.listening)return;const r=P(e),i=U(r);if(i)return void F(a(i,{replace:!0}),r).catch(u);b=r;const s=y.value;o&&x(R(s.fullPath,n.delta),C()),$(r,s).catch((e=>J(e,12)?e:J(e,2)?(F(e.to,r).then((e=>{J(e,20)&&!n.delta&&n.type===I.pop&&d.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&d.go(-n.delta,!1),Q(e,r,s)))).then((e=>{e=e||W(r,s,!1),e&&(n.delta&&!J(e,8)?d.go(-n.delta,!1):n.type===I.pop&&J(e,20)&&d.go(-1,!1)),z(r,s,e)})).catch(u)})))}let Y,X=He(),Z=He();function Q(e,t,n){te(e);const r=Z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return Y&&y.value!==B?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function te(e){return Y||(Y=!e,K(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function ne(t,n,i,s){const{scrollBehavior:a}=e;if(!o||!a)return Promise.resolve();const c=!i&&N(R(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&A(e))).catch((e=>Q(e,t,n)))}const re=e=>d.go(e);let ie;const se=new Set,ae={currentRoute:y,listening:!0,addRoute:T,removeRoute:k,hasRoute:O,getRoutes:S,resolve:P,options:e,push:j,replace:M,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:f.add,beforeResolve:m.add,afterEach:v.add,onError:Z.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),o&&!ie&&y.value===B&&(ie=!0,j(d.location).catch((e=>{0})));const n={};for(const i in B)n[i]=(0,r.Fl)((()=>y.value[i]));e.provide(Fe,t),e.provide(Ve,(0,i.qj)(n)),e.provide($e,y);const s=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(b=B,G&&G(),G=null,y.value=B,ie=!1,Y=!1),s()}}};return ae}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find((e=>v(e,o)))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find((e=>v(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.26d518dd.js.map