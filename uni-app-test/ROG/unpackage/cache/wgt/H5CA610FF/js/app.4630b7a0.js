(function(){"use strict";var e={1161:function(e,t,n){n(5240);var r=n(7370),a=(n(363),n(4321)),o=(n(544),n(7788)),i=(n(5773),n(5791)),s=(n(4795),n(6996)),u=(n(5478),n(914)),c=(n(8659),n(3195)),l=(n(5604),n(342)),d=(n(7874),n(3225)),p=(n(8291),n(7960)),h=(n(7351),n(5944)),m=(n(3307),n(1392)),f=(n(7853),n(3955)),g=(n(1927),n(7512)),v=(n(3019),n(4014)),Z=(n(1443),n(7837)),b=(n(4263),n(4168)),y=(n(2355),n(9233)),k=(n(3787),n(90)),w=(n(7141),n(960)),_=(n(3474),n(4755)),C=(n(6277),n(6904)),x=(n(4830),n(6475)),S=(n(4052),n(8521)),E=(n(9191),n(27)),A=(n(5181),n(2682)),O=(n(3433),n(9381)),$=(n(4837),n(9146)),j=(n(9015),n(495)),M=(n(4681),n(2476)),N=(n(2971),n(5032)),L=(n(1382),n(4297)),P=(n(7735),n(5165)),T=(n(5622),n(6940)),D=(n(4368),n(6165)),I=(n(2975),n(8655)),H=(n(1155),n(1391)),B=(n(1584),n(5874)),F=(n(1023),n(3809)),U=(n(1790),n(4031)),q=(n(5631),n(9978)),R=(n(4107),n(7763)),z=(n(9833),n(8244)),V=n(144),G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isShow?n("router-view"):e._e()],1)},J=[],K={provide(){return{reload:this.reload}},data(){return{isShow:!0}},methods:{reload(){this.isShow=!1,this.$nextTick((()=>{this.isShow=!0}))}}},W=K,X=n(3736),Y=(0,X.Z)(W,G,J,!1,null,null,null),Q=Y.exports,ee=n(8345),te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"search-box"},[n("div",{staticClass:"time-user"},[e._v(" "+e._s(e.message)+" "),n("span",{on:{click:e.toLogin}},[e._v(e._s(e.Nickname))])]),n("div",{staticClass:"search"},[n("form",{attrs:{action:"/"}},[n("van-search",{attrs:{"show-action":"",placeholder:"想买点什么吗？","input-align":"center","action-text":"返回",shape:"round"},on:{click:e.toSearch,cancel:e.onCancel},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)])]),n("div",{staticClass:"home-content"},[n("div",{staticClass:"banner"},[n("van-notice-bar",{attrs:{color:"#1989fa",background:"#ecf9ff","left-icon":"good-job",scrollable:!1}},[n("van-swipe",{staticClass:"notice-swipe",attrs:{vertical:"",autoplay:3e3,"show-indicators":!1}},[n("van-swipe-item",[e._v("现在购买可以获取往年以来最实惠的零件价格！！！")]),n("van-swipe-item",[e._v("自组装机未来会代替整机购买！！！")]),n("van-swipe-item",[e._v("现在不入手可就晚啦！！！")])],1)],1),n("van-swipe",{attrs:{autoplay:"2000"},on:{change:e.onChange},scopedSlots:e._u([{key:"indicator",fn:function(){return[n("div",{staticClass:"dots"},e._l(e.bannerArr,(function(t,r){return n("div",{key:r,staticClass:"custom-indicator",class:{active:e.current==r}})})),0)]},proxy:!0}])},e._l(e.bannerArr,(function(t){return n("van-swipe-item",{key:t.pid,on:{click:function(n){return e.toDetail(t.pid)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.bannerImg,expression:"item.bannerImg"}],attrs:{alt:""}})])})),1)],1),e._m(0),n("div",{staticClass:"product-box"},e._l(e.productArr,(function(t){return n("div",{key:t.pid,staticClass:"product-item",on:{click:function(n){return e.toDetail(t.pid)}}},[n("img",{attrs:{src:t.smallImg,alt:""}}),n("div",{staticClass:"product-name"},[n("span",[e._v(e._s(t.name))])]),n("div",{staticClass:"product-enname"},[n("span",[e._v(e._s(t.enname))])]),n("div",{staticClass:"product-price"},[n("span",[e._v("¥"+e._s(t.price)+" "),n("van-icon",{attrs:{name:"fire",color:"#ee0a24",size:"20px"}}),e._v("Hot")],1),n("div",{staticClass:"count_down"},[e._v(e._s(e.text)+" "),e.show?n("van-count-down",{attrs:{format:"HH:mm:ss:SS",millisecond:"",time:e.time},on:{finish:e.finish}}):e._e()],1)])])})),0)])])},ne=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hot-recommend"},[n("div",{staticClass:"text"},[e._v("热卖推荐")])])}],re={data(){return{show:!0,text:"价格回调时间还剩下：",time:18e5,loading:!0,message:"",bannerArr:[],current:0,value:"",productArr:[],Nickname:{}}},created(){this.getBanner(),this.getProduct(),this.getUser(),this.getTime(),this.loading=!1},methods:{finish(){this.show=!1,this.text="价格已回调"},getTime(){let e=new Date,t=e.getHours();this.message=t>=0&&t<=12?"早上好，":t>12&&t<=17?"下午好，":"晚上好，"},toLogin(){localStorage.getItem("_lk")?this.$router.push({name:"My"}):(this.$router.push({name:"Login"}),(0,$.Z)("请登录！"))},toSearch(){this.$router.push({name:"Search"}),localStorage.setItem("his","")},onCancel(){localStorage.getItem("_lk")?this.$toast("您已登录！"):this.$router.push({name:"Login"})},onChange(e){this.current=e},getBanner(){this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"get",url:"/banner",params:{appkey:this.appkey}}).then((e=>{console.log("请求成功的轮播图",e),this.bannerArr=e.data.result,300==e.data.code&&(this.bannerArr=e.data.result,$.Z.clear()),this.bannerArr=e.data.result})).catch((e=>{console.log("请求失败",e)}))},getUser(){localStorage.getItem("_lk")?this.axios({method:"get",url:"/findAccountInfo",params:{appkey:this.appkey,tokenString:localStorage.getItem("_lk")}}).then((e=>{this.Nickname=e.data.result[0].nickName,console.log("请求回来的个人信息",e)})):this.Nickname="请登录"},getProduct(){this.axios({method:"get",url:"/typeProducts",params:{appkey:this.appkey,key:"isHot",value:1}}).then((e=>{console.log("请求成功的产品",e),this.productArr=e.data.result})).catch((e=>{console.log("请求失败",e)}))},toDetail(e){console.log(e),this.$router.push({name:"Detail",query:{pid:e}})}}},ae=re,oe=(0,X.Z)(ae,te,ne,!1,null,null,null),ie=oe.exports;V.Z.use(ee.Z);const se=[{path:"/",redirect:{name:"Login"}},{path:"/login",name:"Login",component:()=>n.e(766).then(n.bind(n,6766))},{path:"/updatepwd",name:"Updatepwd",component:()=>n.e(12).then(n.bind(n,4012))},{path:"/detail",name:"Detail",component:()=>n.e(933).then(n.bind(n,2933))},{path:"/search",name:"Search",component:()=>n.e(361).then(n.bind(n,5361))},{path:"/mylike",name:"Mylike",component:()=>n.e(737).then(n.bind(n,737))},{path:"/address",name:"Address",component:()=>n.e(630).then(n.bind(n,1630))},{path:"/newaddress",name:"NewAddress",component:()=>n.e(497).then(n.bind(n,8497))},{path:"/pay",name:"Pay",component:()=>n.e(743).then(n.bind(n,5743))},{path:"/safe",name:"Safe",component:()=>n.e(706).then(n.bind(n,706))},{path:"/mymsg",name:"Mymsg",component:()=>n.e(944).then(n.bind(n,6944))},{path:"/order",name:"Order",component:()=>n.e(986).then(n.bind(n,7986))},{path:"/main",name:"Main",component:()=>n.e(443).then(n.bind(n,968)),children:[{path:"/home",name:"Home",component:ie},{path:"/my",name:"My",component:()=>n.e(443).then(n.bind(n,1353))},{path:"/menu",name:"Menu",component:()=>n.e(443).then(n.bind(n,4055))},{path:"/car",name:"Car",component:()=>n.e(443).then(n.bind(n,9574))}]}],ue=new ee.Z({mode:"hash",base:"",routes:se});var ce=ue,le=n(7015),de=n(9669),pe=n.n(de),he=n(2346),me=(n(1335),n(1847),n(4894));n(9025);V.Z.use(he.Z,pe()),V.Z.use(le.ZP),pe().defaults.baseURL="http://124.222.196.87:10002",V.Z.use(z.Z),V.Z.use(R.Z),V.Z.use(q.Z),V.Z.use(U.Z),V.Z.use(F.Z),V.Z.use(B.Z),V.Z.use(H.Z),V.Z.use(I.Z),V.Z.use(D.Z),V.Z.use(T.Z),V.Z.use(P.Z),V.Z.use(L.Z),V.Z.use(N.Z),V.Z.use(M.Z),V.Z.use(j.Z),V.Z.use($.Z),V.Z.use(O.Z),V.Z.use(A.Z),V.Z.use(E.Z),V.Z.use(S.Z),V.Z.use(x.Z),V.Z.use(C.Z),V.Z.use(_.Z),V.Z.use(w.Z),V.Z.use(k.Z),V.Z.use(y.Z),V.Z.use(b.Z),V.Z.use(Z.Z),V.Z.use(v.Z),V.Z.use(g.Z),V.Z.use(f.Z),V.Z.use(m.Z),V.Z.use(h.Z),V.Z.use(p.Z),V.Z.use(d.Z),V.Z.use(l.Z),V.Z.use(c.Z),V.Z.use(u.Z),V.Z.use(s.Z),V.Z.use(i.Z),V.Z.use(o.Z),V.Z.use(a.Z),V.Z.use(r.Z),V.Z.prototype.appkey="U2FsdGVkX187hjBtMe8gMWs5J3SuLc9apD5H2igVjvE=",pe().interceptors.request.use((e=>{if("post"==e.method){let t="";for(let n in e.data)t+=`${n}=${e.data[n]}&`;e.data=t.slice(0,-1)}return e})),V.Z.filter("formatDate",((e,t)=>{let n=new Date(e),r=n.getFullYear().toString();if(/(y+)/.test(t)){var a=RegExp.$1;t=t.replace(a,r.slice(r.length-a.length))}let o={M:n.getMonth()+1,d:n.getDate(),h:n.getHours(),m:n.getMinutes(),s:n.getSeconds()};for(let i in o){let e=new RegExp(`(${i}+)`);if(e.test(t)){let e=RegExp.$1;t=t.replace(e,o[i]>=10?o[i]:2==e.length?"0"+o[i]:o[i])}}return t})),V.Z.filter("decimal",((e,t=2)=>e.toFixed(t))),V.Z.prototype.$EventBus=new V.Z,V.Z.config.productionTip=!1,new V.Z({swiper:me.Z,router:ce,render:e=>e(Q)}).$mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],o=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{12:"2adf878e",361:"5c389eb5",443:"63b7f159",497:"46e7e48d",630:"d6b99430",706:"6ddf169f",737:"7f0648eb",743:"3df46373",766:"3149f88a",933:"38508f6f",944:"7032b892",986:"2d457362"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{12:"ebae20c9",361:"c1e03ada",443:"ce667e8a",497:"2f365f0d",630:"b41857c0",706:"88f0ec8d",737:"2ddf315e",743:"01073633",766:"4aaeec1d",933:"c64a8f3f",944:"c19c873c",986:"8bc60117"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="muban:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[a];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(h);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return a();e(r,s,a,o)}))},a={143:0};n.f.miniCss=function(e,t){var n={12:1,361:1,443:1,497:1,630:1,706:1,737:1,743:1,766:1,933:1,944:1,986:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var l=u(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunkmuban"]=self["webpackChunkmuban"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1161)}));r=n.O(r)})();
//# sourceMappingURL=app.4630b7a0.js.map