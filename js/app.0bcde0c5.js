(function(){"use strict";var t={5557:function(t,e,n){var o=n(9197),r=n(8473),i=n(4887),a=n(167),u=n.p+"img/user-4250.be56ca31.png",l=n.p+"img/home-2503.954b317b.png",c=n.p+"img/pencil-9435.c410c63b.png",s=n.p+"img/opened-book-3163.e83b6081.png",d=n.p+"img/school-1072.f2bf8a54.png",f=n.p+"img/question-11799.c6b8107d.png",g=n(5595);const m={class:"header-container"},p={class:"toggle-nav"},h=(0,r._)("img",{src:a,alt:"Indent",class:"icon-toggle"},null,-1),b=[h],v=(0,r._)("img",{src:u,alt:"Login",class:"icon-image"},null,-1),y=(0,r._)("img",{src:l,alt:"Home",class:"icon-image"},null,-1),_=(0,r._)("img",{src:c,alt:"Author",class:"icon-image"},null,-1),w=(0,r._)("img",{src:s,alt:"Reader",class:"icon-image"},null,-1),k=(0,r._)("img",{src:d,alt:"Community",class:"icon-image"},null,-1),C=(0,r._)("img",{src:f,alt:"Tutorial",class:"icon-image"},null,-1),T=(0,r._)("img",{src:g,alt:"Expand",class:"icon-toggle"},null,-1),E=[T],O={class:"user"};function P(t,e,n,a,u,l){const c=(0,r.up)("router-link"),s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",m,[(0,r._)("div",p,[(0,r.wy)((0,r._)("button",{class:"toggle-btn",onClick:e[0]||(e[0]=(...t)=>this.store.toggleBtn&&this.store.toggleBtn(...t))},b,512),[[o.F8,a.store.btnToggle]]),(0,r.wy)((0,r._)("nav",null,[(0,r.Wm)(c,{to:"/login",class:(0,i.C_)({"icon-selected":"/login"===t.$route.path})},{default:(0,r.w5)((()=>[v])),_:1},8,["class"]),(0,r.Wm)(c,{to:"/",class:(0,i.C_)({"icon-selected":"/"===t.$route.path})},{default:(0,r.w5)((()=>[y])),_:1},8,["class"]),(0,r.Wm)(c,{to:"/author",class:(0,i.C_)({"icon-selected":"/author"===t.$route.path})},{default:(0,r.w5)((()=>[_])),_:1},8,["class"]),(0,r.Wm)(c,{to:"/reader",class:(0,i.C_)({"icon-selected":"/reader"===t.$route.path})},{default:(0,r.w5)((()=>[w])),_:1},8,["class"]),(0,r.Wm)(c,{to:"/community",class:(0,i.C_)({"icon-selected":"/community"===t.$route.path})},{default:(0,r.w5)((()=>[k])),_:1},8,["class"]),(0,r.Wm)(c,{to:"/tutorial",class:(0,i.C_)({"icon-selected":"/tutorial"===t.$route.path})},{default:(0,r.w5)((()=>[C])),_:1},8,["class"])],512),[[o.F8,a.store.btnToggle]]),(0,r.wy)((0,r._)("button",{class:"toggle-btn",onClick:e[1]||(e[1]=(...t)=>this.store.toggleBtn&&this.store.toggleBtn(...t))},E,512),[[o.F8,!a.store.btnToggle]])]),(0,r.Wm)(s,{class:"views"})]),(0,r._)("div",O,[(0,r._)("span",null,(0,i.zw)(a.user.userInfo.email),1)]),(0,r._)("button",{onClick:e[2]||(e[2]=(...t)=>this.store.toggleTutorial&&this.store.toggleTutorial(...t)),class:"toggle-tutorial-btn"},"Tutorial")])}var x=n(1773),j=(n(6718),n(7080)),A=n(5667),N={mounted(){this.$nextTick((()=>{const t=document.querySelectorAll(".icon-image, .icon-toggle, .toggle-tutorial-btn");t.forEach((t=>{(0,x.ZP)(t,{content:t.alt})}))}))},setup(){const t=(0,j.o)(),e=(0,A.L)();return{store:t,user:e}},data(){return{}},methods:{}},I=n(5312);const S=(0,I.Z)(N,[["render",P]]);var B=S,D=n(4731),W=n.p+"img/logo.95850a31.png";const L={class:"home"},F={key:0,class:"tutorial"},$=(0,r._)("p",null,"I dont think this page need a tutorial",-1),q=[$],U=(0,r._)("img",{style:{width:"200px",height:"200px"},alt:"Vue logo",src:W},null,-1),H=(0,r._)("h1",null,"WEAVE",-1),M=(0,r._)("p",null,[(0,r.Uk)(" This is an interactive story web."),(0,r._)("br")],-1),V=(0,r._)("p",null,[(0,r.Uk)("Here you can create/read interesting form of interactive story"),(0,r._)("br")],-1),Z=(0,r._)("p",null,[(0,r.Uk)("You can click on the navigation bar left to move to the section you want to go to. "),(0,r._)("br")],-1);function Q(t,e,n,i,a,u){return(0,r.wg)(),(0,r.iD)("div",L,[(0,r.Wm)(o.uT,{name:"fade"},{default:(0,r.w5)((()=>[this.store.tutorialToggle?((0,r.wg)(),(0,r.iD)("div",F,q)):(0,r.kq)("",!0)])),_:1}),U,H,M,V,Z])}var z={name:"HomeView",setup(){const t=(0,j.o)();return{store:t}},methods:{}};const K=(0,I.Z)(z,[["render",Q]]);var R=K;const Y=[{path:"/",name:"home",component:R},{path:"/login",name:"login",component:()=>n.e(535).then(n.bind(n,5764))},{path:"/author",name:"author",component:()=>Promise.all([n.e(749),n.e(53)]).then(n.bind(n,8723))},{path:"/reader",name:"reader",component:()=>n.e(207).then(n.bind(n,4341))},{path:"/community",name:"community",component:()=>Promise.all([n.e(749),n.e(587)]).then(n.bind(n,3959))},{path:"/tutorial",name:"tutorial",component:()=>Promise.all([n.e(749),n.e(648)]).then(n.bind(n,5341))}],G=(0,D.p7)({history:(0,D.r5)(),routes:Y});var J=G,X=n(2386);const tt=(0,X.WB)(),et=(0,o.ri)(B);et.use(tt),et.use(J).mount("#app")},7080:function(t,e,n){n.d(e,{o:function(){return r}});var o=n(2386);const r=(0,o.Q_)("store",{state:()=>({btnToggle:!0,tutorialToggle:!1}),actions:{toggleTutorial(){this.tutorialToggle=!this.tutorialToggle},toggleBtn(){this.btnToggle=!this.btnToggle}}})},5667:function(t,e,n){n.d(e,{L:function(){return r}});var o=n(2386);n(7818);const r=(0,o.Q_)({id:"user",state:()=>({userInfo:{name:"",email:"",avatar:"",auth:"",token:""}}),actions:{setUserInfo(t){this.userInfo=t}}})},5595:function(t,e,n){t.exports=n.p+"img/arrow-203.e90c9c0f.png"},167:function(t,e,n){t.exports=n.p+"img/back-arrow-4845.7f3d3fee.png"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(s=0;s<t.length;s++){o=t[s][0],r=t[s][1],i=t[s][2];for(var u=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(u=!1,i<a&&(a=i));if(u){t.splice(s--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+({53:"author",207:"reader",535:"login",587:"community",648:"tutorial"}[t]||t)+"."+{24:"1c30b826",47:"c78be2e1",53:"c68b9453",71:"5d6d4de0",84:"3445bb26",87:"578779bc",207:"1d42ba5f",245:"29e61691",343:"07c9a0f0",347:"9bd64772",355:"1a8598dd",361:"c7e97a6a",422:"02a004ac",428:"b965875f",443:"9dc19baf",477:"7b40a2cf",515:"369ac1ce",535:"d32948ed",573:"fecb4358",587:"15a80341",648:"813d80c5",695:"4a4aba3d",728:"358783f8",749:"d36dfdcd",751:"6b0279a7",754:"b14d0d07",801:"16374d0b",823:"db1a340d",851:"402244f1",918:"dfefbf8b",976:"00325fb9"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+{53:"author",207:"reader",535:"login",587:"community",648:"tutorial"}[t]+"."+{53:"8c5d4b27",207:"49fdb9ee",535:"f21e009a",587:"4d04df90",648:"1c9353ea"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="IDNCreaterPages:";n.l=function(o,r,i,a){if(t[o])t[o].push(r);else{var u,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+i){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=o),t[o]=[r];var f=function(e,n){u.onerror=u.onload=null,clearTimeout(g);var r=t[o];if(delete t[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(t){return t(n)})),e)return e(n)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/IDNCreaterPages/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=u,i.parentNode.removeChild(i),r(l)}};return i.onerror=i.onload=a,i.href=e,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===t||i===e)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),u=n.p+a;if(e(a,u))return r();t(o,u,null,r,i)}))},r={143:0};n.f.miniCss=function(t,e){var n={53:1,207:1,535:1,587:1,648:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(e),u=new Error,l=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],u=o[1],l=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(l)var s=l(n)}for(e&&e(o);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(s)},o=self["webpackChunkIDNCreaterPages"]=self["webpackChunkIDNCreaterPages"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5557)}));o=n.O(o)})();
//# sourceMappingURL=app.0bcde0c5.js.map