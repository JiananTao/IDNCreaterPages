"use strict";(self["webpackChunkIDNCreaterPages"]=self["webpackChunkIDNCreaterPages"]||[]).push([[749],{5204:function(e,t,n){n.d(t,{l:function(){return o}});var s=n(6139);const r={apiKey:"AIzaSyCVEr6ULFvAwmAmV3UMlu80kkY6BQ2ifDc",authDomain:"idncreater.firebaseapp.com",projectId:"idncreater",storageBucket:"idncreater.appspot.com",messagingSenderId:"760391243578",appId:"1:760391243578:web:b2f6ed0bfba9f6c3952203",measurementId:"G-R5JC1S3W1F"},o=(0,s.ZF)(r)},6139:function(e,t,n){n.d(t,{C6:function(){return s.getApps},ZF:function(){return s.initializeApp}});var s=n(2730),r="firebase",o="9.20.0";
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
(0,s.registerVersion)(r,o,"app")},4716:function(e,t,n){n.d(t,{Jt:function(){return At},cF:function(){return Nt},aF:function(){return Ot},iH:function(){return Ct},B0:function(){return Ut}});n(2801),n(7658);var s=n(2730),r=n(6816),o=n(1724);
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
const i="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5,l=1e3;
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
class h extends r.ZR{constructor(e,t,n=0){super(p(e),`Firebase Storage: ${t} (${p(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return p(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var d,_;function p(e){return"storage/"+e}function f(){const e="An unknown error occurred, please check the error payload for server response.";return new h(d.UNKNOWN,e)}function m(e){return new h(d.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function g(e){return new h(d.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function b(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(d.UNAUTHENTICATED,e)}function R(){return new h(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function T(e){return new h(d.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function w(){return new h(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function k(){return new h(d.CANCELED,"User canceled the upload/download.")}function v(e){return new h(d.INVALID_URL,"Invalid URL '"+e+"'.")}function E(e){return new h(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function y(){return new h(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function U(){return new h(d.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function O(){return new h(d.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function A(){return new h(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function C(e){return new h(d.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function N(e){return new h(d.INVALID_ARGUMENT,e)}function x(){return new h(d.APP_DELETED,"The Firebase app was deleted.")}function I(e){return new h(d.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function S(e,t){return new h(d.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function P(e){throw new h(d.INTERNAL_ERROR,"Internal error: "+e)}
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
 */(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(d||(d={}));class D{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=D.makeFromUrl(e,t)}catch(s){return new D(e,"")}if(""===n.path)return n;throw E(e)}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";function r(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",_=new RegExp(`^https?://${h}/${l}/b/${s}/o${d}`,"i"),p={bucket:1,path:3},f=t===i?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",g=new RegExp(`^https?://${f}/${s}/${m}`,"i"),b={bucket:1,path:2},R=[{regex:a,indices:c,postModify:r},{regex:_,indices:p,postModify:u},{regex:g,indices:b,postModify:u}];for(let i=0;i<R.length;i++){const t=R[i],s=t.regex.exec(e);if(s){const e=s[t.indices.bucket];let r=s[t.indices.path];r||(r=""),n=new D(e,r),t.postModify(n);break}}if(null==n)throw v(e);return n}}class L{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function B(e,t,n){let s=1,r=null,o=null,i=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){r=setTimeout((()=>{r=null,e(_,c())}),t)}function d(){o&&clearTimeout(o)}function _(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);const n=c()||i;if(n)return d(),void l.call(null,e,...t);let r;s<64&&(s*=2),1===a?(a=2,r=0):r=1e3*(s+Math.random()),h(r)}let p=!1;function f(e){p||(p=!0,d(),u||(null!==r?(e||(a=2),clearTimeout(r),h(0)):e||(a=1)))}return h(0),o=setTimeout((()=>{i=!0,f(!0)}),n),f}function F(e){e(!1)}
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
 */function M(e){return void 0!==e}function q(e){return"function"===typeof e}function z(e){return"object"===typeof e&&!Array.isArray(e)}function H(e){return"string"===typeof e||e instanceof String}function V(e){return $()&&e instanceof Blob}function $(){return"undefined"!==typeof Blob&&!(0,r.UG)()}function G(e,t,n,s){if(s<t)throw N(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw N(`Invalid value for '${e}'. Expected ${n} or less.`)}
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
 */function j(e,t,n){let s=t;return null==n&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function X(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}
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
function W(e,t){const n=e>=500&&e<600,s=[408,429],r=-1!==s.indexOf(e),o=-1!==t.indexOf(e);return n||r||o}
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
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(_||(_={}));class K{constructor(e,t,n,s,r,o,i,a,c,u,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=i,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new Z(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const s=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(s),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(s),this.pendingConnection_=null;const t=n.getErrorCode()===_.NO_ERROR,r=n.getStatus();if(!t||W(r,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===_.ABORT;return void e(!1,new Z(!1,null,t))}const o=-1!==this.successCodes_.indexOf(r);e(!0,new Z(o,n))}))},t=(e,t)=>{const n=this.resolve_,s=this.reject_,r=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(r,r.getResponse());M(e)?n(e):n()}catch(o){s(o)}else if(null!==r){const e=f();e.serverResponse=r.getErrorText(),this.errorCallback_?s(this.errorCallback_(r,e)):s(e)}else if(t.canceled){const e=this.appDelete_?x():k();s(e)}else{const e=w();s(e)}};this.canceled_?t(!1,new Z(!1,null,!0)):this.backoffId_=B(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&F(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Z{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function J(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Y(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function Q(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ee(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function te(e,t,n,s,r,o,i=!0){const a=X(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return Q(u,t),J(u,n),Y(u,o),ee(u,s),new K(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}
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
 */function ne(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function se(...e){const t=ne();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if($())return new Blob(e);throw new h(d.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function re(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
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
 */function oe(e){if("undefined"===typeof atob)throw C("base-64");return atob(e)}
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
 */const ie={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ae{constructor(e,t){this.data=e,this.contentType=t||null}}function ce(e,t){switch(e){case ie.RAW:return new ae(ue(t));case ie.BASE64:case ie.BASE64URL:return new ae(he(e,t));case ie.DATA_URL:return new ae(_e(t),pe(t))}throw f()}function ue(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|63&s);else if(55296===(64512&s)){const r=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(r){const r=s,o=e.charCodeAt(++n);s=65536|(1023&r)<<10|1023&o,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|63&s)}else t.push(239,191,189)}else 56320===(64512&s)?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|63&s)}return new Uint8Array(t)}function le(e){let t;try{t=decodeURIComponent(e)}catch(n){throw S(ie.DATA_URL,"Malformed data URL.")}return ue(t)}function he(e,t){switch(e){case ie.BASE64:{const n=-1!==t.indexOf("-"),s=-1!==t.indexOf("_");if(n||s){const t=n?"-":"_";throw S(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case ie.BASE64URL:{const n=-1!==t.indexOf("+"),s=-1!==t.indexOf("/");if(n||s){const t=n?"+":"/";throw S(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=oe(t)}catch(r){if(r.message.includes("polyfill"))throw r;throw S(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class de{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw S(ie.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=fe(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function _e(e){const t=new de(e);return t.base64?he(ie.BASE64,t.rest):le(t.rest)}function pe(e){const t=new de(e);return t.contentType}function fe(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
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
 */class me{constructor(e,t){let n=0,s="";V(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(V(this.data_)){const n=this.data_,s=re(n,e,t);return null===s?null:new me(s)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new me(n,!0)}}static getBlob(...e){if($()){const t=e.map((e=>e instanceof me?e.data_:e));return new me(se.apply(null,t))}{const t=e.map((e=>H(e)?ce(ie.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const s=new Uint8Array(n);let r=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)s[r++]=e[t]})),new me(s,!0)}}uploadData(){return this.data_}}
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
 */function ge(e){let t;try{t=JSON.parse(e)}catch(n){return null}return z(t)?t:null}
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
 */function be(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function Re(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function Te(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function we(e,t){return t}class ke{constructor(e,t,n,s){this.server=e,this.local=t||e,this.writable=!!n,this.xform=s||we}}let ve=null;function Ee(e){return!H(e)||e.length<2?e:Te(e)}function ye(){if(ve)return ve;const e=[];function t(e,t){return Ee(t)}e.push(new ke("bucket")),e.push(new ke("generation")),e.push(new ke("metageneration")),e.push(new ke("name","fullPath",!0));const n=new ke("name");function s(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const r=new ke("size");return r.xform=s,e.push(r),e.push(new ke("timeCreated")),e.push(new ke("updated")),e.push(new ke("md5Hash",null,!0)),e.push(new ke("cacheControl",null,!0)),e.push(new ke("contentDisposition",null,!0)),e.push(new ke("contentEncoding",null,!0)),e.push(new ke("contentLanguage",null,!0)),e.push(new ke("contentType",null,!0)),e.push(new ke("metadata","customMetadata",!0)),ve=e,ve}function Ue(e,t){function n(){const n=e["bucket"],s=e["fullPath"],r=new D(n,s);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:n})}function Oe(e,t,n){const s={type:"file"},r=n.length;for(let o=0;o<r;o++){const e=n[o];s[e.local]=e.xform(s,t[e.server])}return Ue(s,e),s}function Ae(e,t,n){const s=ge(t);if(null===s)return null;const r=s;return Oe(e,r,n)}function Ce(e,t,n,s){const r=ge(t);if(null===r)return null;if(!H(r["downloadTokens"]))return null;const o=r["downloadTokens"];if(0===o.length)return null;const i=encodeURIComponent,a=o.split(","),c=a.map((t=>{const r=e["bucket"],o=e["fullPath"],a="/b/"+i(r)+"/o/"+i(o),c=j(a,n,s),u=X({alt:"media",token:t});return c+u}));return c[0]}function Ne(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const s=t[r];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}
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
 */const xe="prefixes",Ie="items";function Se(e,t,n){const s={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[xe])for(const r of n[xe]){const n=r.replace(/\/$/,""),o=e._makeStorageReference(new D(t,n));s.prefixes.push(o)}if(n[Ie])for(const r of n[Ie]){const n=e._makeStorageReference(new D(t,r["name"]));s.items.push(n)}return s}function Pe(e,t,n){const s=ge(n);if(null===s)return null;const r=s;return Se(e,t,r)}class De{constructor(e,t,n,s){this.url=e,this.method=t,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function Le(e){if(!e)throw f()}function Be(e,t){function n(n,s){const r=Ae(e,s,t);return Le(null!==r),r}return n}function Fe(e,t){function n(n,s){const r=Pe(e,t,s);return Le(null!==r),r}return n}function Me(e,t){function n(n,s){const r=Ae(e,s,t);return Le(null!==r),Ce(r,s,e.host,e._protocol)}return n}function qe(e){function t(t,n){let s;return s=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?R():b():402===t.getStatus()?g(e.bucket):403===t.getStatus()?T(e.path):n,s.status=t.getStatus(),s.serverResponse=n.serverResponse,s}return t}function ze(e){const t=qe(e);function n(n,s){let r=t(n,s);return 404===n.getStatus()&&(r=m(e.path)),r.serverResponse=s.serverResponse,r}return n}function He(e,t,n){const s=t.fullServerUrl(),r=j(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new De(r,o,Be(e,n),i);return a.errorHandler=ze(t),a}function Ve(e,t,n,s,r){const o={};t.isRoot?o["prefix"]="":o["prefix"]=t.path+"/",n&&n.length>0&&(o["delimiter"]=n),s&&(o["pageToken"]=s),r&&(o["maxResults"]=r);const i=t.bucketOnlyServerUrl(),a=j(i,e.host,e._protocol),c="GET",u=e.maxOperationRetryTime,l=new De(a,c,Fe(e,t.bucket),u);return l.urlParams=o,l.errorHandler=qe(t),l}function $e(e,t,n){const s=t.fullServerUrl(),r=j(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new De(r,o,Me(e,n),i);return a.errorHandler=ze(t),a}function Ge(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function je(e,t,n){const s=Object.assign({},n);return s["fullPath"]=e.path,s["size"]=t.size(),s["contentType"]||(s["contentType"]=Ge(null,t)),s}function Xe(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();i["Content-Type"]="multipart/related; boundary="+c;const u=je(t,s,r),l=Ne(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",_=me.getBlob(h,s,d);if(null===_)throw U();const p={name:u["fullPath"]},f=j(o,e.host,e._protocol),m="POST",g=e.maxUploadRetryTime,b=new De(f,m,Be(e,n),g);return b.urlParams=p,b.headers=i,b.body=_.uploadData(),b.errorHandler=qe(t),b}class We{constructor(e,t,n,s){this.current=e,this.total=t,this.finalized=!!n,this.metadata=s||null}}function Ke(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(r){Le(!1)}const s=t||["active"];return Le(!!n&&-1!==s.indexOf(n)),n}function Ze(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i=je(t,s,r),a={name:i["fullPath"]},c=j(o,e.host,e._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":i["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Ne(i,n),d=e.maxUploadRetryTime;function _(e){let t;Ke(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){Le(!1)}return Le(H(t)),t}const p=new De(c,u,_,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=qe(t),p}function Je(e,t,n,s){const r={"X-Goog-Upload-Command":"query"};function o(e){const t=Ke(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){Le(!1)}n||Le(!1);const r=Number(n);return Le(!isNaN(r)),new We(r,s.size(),"final"===t)}const i="POST",a=e.maxUploadRetryTime,c=new De(n,i,o,a);return c.headers=r,c.errorHandler=qe(t),c}const Ye=262144;function Qe(e,t,n,s,r,o,i,a){const c=new We(0,0);if(i?(c.current=i.current,c.total=i.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw O();const u=c.total-c.current;let l=u;r>0&&(l=Math.min(l,r));const h=c.current,d=h+l;let _="";_=0===l?"finalize":u===l?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":_,"X-Goog-Upload-Offset":`${c.current}`},f=s.slice(h,d);if(null===f)throw U();function m(e,n){const r=Ke(e,["active","final"]),i=c.current+l,a=s.size();let u;return u="final"===r?Be(t,o)(e,n):null,new We(i,a,"final"===r,u)}const g="POST",b=t.maxUploadRetryTime,R=new De(n,g,m,b);return R.headers=p,R.body=f.uploadData(),R.progressCallback=a||null,R.errorHandler=qe(e),R}
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
 */const et={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function tt(e){switch(e){case"running":case"pausing":case"canceling":return et.RUNNING;case"paused":return et.PAUSED;case"success":return et.SUCCESS;case"canceled":return et.CANCELED;case"error":return et.ERROR;default:return et.ERROR}}
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
 */class nt{constructor(e,t,n){const s=q(e)||null!=t||null!=n;if(s)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
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
 */function st(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
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
 */let rt=null;class ot{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=_.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=_.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,s){if(this.sent_)throw P("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==s)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw P("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw P("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw P("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw P("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class it extends ot{initXhr(){this.xhr_.responseType="text"}}function at(){return rt?rt():new it}
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
class ct{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=ye(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(d.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(W(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,l),this._needToFetchStatus=!0,void this.completeTransitions_();e=w()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(d.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=Ze(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(n,at,e,t);this._request=s,s.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const s=Je(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(s,at,t,n);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=Ye*this._chunkMultiplier,t=new We(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((s,r)=>{let o;try{o=Qe(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const i=this._ref.storage._makeRequest(o,at,s,r,!1);this._request=i,i.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const e=Ye*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=He(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(n,at,e,t);this._request=s,s.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=Xe(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(n,at,e,t);this._request=s,s.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=k(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=tt(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,s){const r=new nt(t||void 0,n||void 0,s||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(tt(this._state)){case et.SUCCESS:st(this._resolve.bind(null,this.snapshot))();break;case et.CANCELED:case et.ERROR:const t=this._reject;st(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=tt(this._state);switch(t){case et.RUNNING:case et.PAUSED:e.next&&st(e.next.bind(e,this.snapshot))();break;case et.SUCCESS:e.complete&&st(e.complete.bind(e))();break;case et.CANCELED:case et.ERROR:e.error&&st(e.error.bind(e,this._error))();break;default:e.error&&st(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
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
 */class ut{constructor(e,t){this._service=e,this._location=t instanceof D?t:D.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ut(e,t)}get root(){const e=new D(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Te(this._location.path)}get storage(){return this._service}get parent(){const e=be(this._location.path);if(null===e)return null;const t=new D(this._location.bucket,e);return new ut(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw I(e)}}function lt(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new ct(e,new me(t),n)}function ht(e){const t={prefixes:[],items:[]};return dt(e,t).then((()=>t))}async function dt(e,t,n){const s={pageToken:n},r=await _t(e,s);t.prefixes.push(...r.prefixes),t.items.push(...r.items),null!=r.nextPageToken&&await dt(e,t,r.nextPageToken)}function _t(e,t){null!=t&&"number"===typeof t.maxResults&&G("options.maxResults",1,1e3,t.maxResults);const n=t||{},s=Ve(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(s,at)}function pt(e){e._throwIfRoot("getDownloadURL");const t=$e(e.storage,e._location,ye());return e.storage.makeRequestWithTokens(t,at).then((e=>{if(null===e)throw A();return e}))}function ft(e,t){const n=Re(e._location.path,t),s=new D(e._location.bucket,n);return new ut(e.storage,s)}
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
 */function mt(e){return/^[A-Za-z]+:\/\//.test(e)}function gt(e,t){return new ut(e,t)}function bt(e,t){if(e instanceof kt){const n=e;if(null==n._bucket)throw y();const s=new ut(n,n._bucket);return null!=t?bt(s,t):s}return void 0!==t?ft(e,t):e}function Rt(e,t){if(t&&mt(t)){if(e instanceof kt)return gt(e,t);throw N("To use ref(service, url), the first argument must be a Storage instance.")}return bt(e,t)}function Tt(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:D.makeFromBucketSpec(n,e)}function wt(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken="string"===typeof o?o:(0,r.Sg)(o,e.app.options.projectId))}class kt{constructor(e,t,n,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=i,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=s?D.makeFromBucketSpec(s,this._host):Tt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=D.makeFromBucketSpec(this._url,e):this._bucket=Tt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){G("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){G("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ut(this,e)}_makeRequest(e,t,n,s,r=!0){if(this._deleted)return new L(x());{const o=te(e,this._appId,n,s,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const vt="@firebase/storage",Et="0.11.2",yt="storage";function Ut(e,t,n){return e=(0,r.m9)(e),lt(e,t,n)}function Ot(e){return e=(0,r.m9)(e),ht(e)}function At(e){return e=(0,r.m9)(e),pt(e)}function Ct(e,t){return e=(0,r.m9)(e),Rt(e,t)}function Nt(e=(0,s.getApp)(),t){e=(0,r.m9)(e);const n=(0,s._getProvider)(e,yt),o=n.getImmediate({identifier:t}),i=(0,r.P0)("storage");return i&&xt(o,...i),o}function xt(e,t,n,s={}){wt(e,t,n,s)}
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
 */function It(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new kt(n,r,o,t,s.SDK_VERSION)}function St(){(0,s._registerComponent)(new o.wA(yt,It,"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(vt,Et,""),(0,s.registerVersion)(vt,Et,"esm2017")}St()}}]);
//# sourceMappingURL=749.d36dfdcd.js.map