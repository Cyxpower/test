(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-list-list"],{1140:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"mybox",props:{title:{type:String,default:"默认标题"},subtitle:{type:String,default:"默认副标题"}},data:function(){return{}},methods:{oninput:function(t){console.log(t.detail.value),this.$emit("myvalue",{value:t.detail.value,time:Date.now()})}}};n.default=r},"118c":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"big"},[t._v(t._s(t.title))]),e("v-uni-view",{staticClass:"small"},[t._v(t._s(t.subtitle))]),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",[e("v-uni-input",{attrs:{type:"text",placeholder:"请输入..."},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.oninput.apply(void 0,arguments)}}})],1)],1)},a=[]},3328:function(t,n,e){var r=e("5f74");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=e("4f06").default;a("0d39a0bf",r,!0,{sourceMap:!1,shadowMode:!1})},"372b":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{newsarr:[]}},methods:{getnews:function(){var t=this;uni.request({url:"http://jsonplaceholder.typicode.com/posts",success:function(n){console.log(n),t.newsarr=n.data}})},todetail:function(t){uni.navigateTo({url:"/pages/detail/detail?id="+t})}},onLoad:function(){this.getnews()}};n.default=r},3915:function(t,n,e){"use strict";e.r(n);var r=e("d322"),a=e("7b4a");for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("5082");var o=e("f0c5"),u=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"8fa878ca",null,!1,r["a"],void 0);n["default"]=u.exports},5082:function(t,n,e){"use strict";var r=e("3328"),a=e.n(r);a.a},"5f74":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.out[data-v-8fa878ca]{padding:%?50?% %?30?%}.out .row[data-v-8fa878ca]{padding:%?20?% %?10?%;border:1px dotted #e4e4e4;margin-bottom:%?20?%}.out .row .title[data-v-8fa878ca]{font-size:%?36?%;font-weight:600;padding-bottom:%?15?%}.out .row .content[data-v-8fa878ca]{font-size:%?30?%;color:#a9a9a9}',""]),t.exports=n},"7b4a":function(t,n,e){"use strict";e.r(n);var r=e("372b"),a=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=a.a},"86e3":function(t,n,e){"use strict";e.r(n);var r=e("118c"),a=e("aed5");for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("8756");var o=e("f0c5"),u=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"4e44f4e2",null,!1,r["a"],void 0);n["default"]=u.exports},8756:function(t,n,e){"use strict";var r=e("fdba"),a=e.n(r);a.a},"93fe":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.item[data-v-4e44f4e2]{padding:%?60?% %?30?%;text-align:center;background:#5bd1d7}.item .big[data-v-4e44f4e2]{font-size:%?50?%;font-weight:600;color:#333}.item .small[data-v-4e44f4e2]{font-size:%?28?%;color:#888}.item .line[data-v-4e44f4e2]{display:inline-block;width:%?80?%;height:%?8?%;background:red}',""]),t.exports=n},aed5:function(t,n,e){"use strict";e.r(n);var r=e("1140"),a=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=a.a},d322:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}));var r={mybox:e("86e3").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("mybox",{attrs:{title:"列表",subtitle:"列表小标题"}}),e("v-uni-view",{staticClass:"out"},t._l(t.newsarr,(function(n,r){return e("v-uni-view",{key:n.id,staticClass:"row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.todetail(n.id)}}},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(n.title))]),e("v-uni-view",{staticClass:"content"},[t._v(t._s(n.body))])],1)})),1)],1)},i=[]},fdba:function(t,n,e){var r=e("93fe");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=e("4f06").default;a("166ff8ec",r,!0,{sourceMap:!1,shadowMode:!1})}}]);