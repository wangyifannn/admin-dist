(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-300c83f2"],{1855:function(t,e,n){},"3bde":function(t,e,n){"use strict";var r=n("1855"),a=n.n(r);a.a},"49fc":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"look-template-page"},[n("el-row",[n("span",{staticClass:"title"},[t._v("\n      模版名称："),n("span",{staticClass:"col-value"},[t._v(t._s(t.templateName))])])]),n("el-row",[n("span",{staticClass:"title"},[t._v("\n      测试月龄："),n("span",{staticClass:"col-value"},[t._v(t._s(t.ageOfMoon))])])]),n("AnswerContent",{attrs:{"test-arr":t.TestArr}})],1)},a=[],o=(n("7f7f"),n("96cf"),n("3b8d")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.testArr&&t.testArr.length>0?n("div",{staticClass:"answer_box_page"},t._l(t.testArr,(function(e,r){return n("div",{key:r,staticClass:"answer_box",attrs:{gutter:24}},[n("el-row",[n("el-col",{staticClass:"title",attrs:{span:2}},[t._v(" 问题"+t._s(r+1)+": ")]),n("el-col",{staticClass:"col-value",attrs:{span:22}},[t._v("\n        "+t._s(e.question)+"\n      ")])],1),n("el-row",[n("el-col",{staticClass:"title",attrs:{span:2}},[t._v("\n        答案：\n      ")]),n("el-col",{staticClass:"col-value",attrs:{span:22}},t._l(e.answer,(function(e,r){return n("span",{key:r,staticClass:"answer_choice"},[t._v("\n          "+t._s(e.value)+"\n        ")])})),0)],1)],1)})),0):t._e()},u=[],c={props:{testArr:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{}},i=c,l=(n("b3e3"),n("2877")),f=Object(l["a"])(i,s,u,!1,null,"5e7c3698",null),d=f.exports,h=n("875a"),_={components:{AnswerContent:d},data:function(){return{templateName:"",ageOfMoon:"",TestArr:[]}},created:function(){this.getGrowDetail()},methods:{getGrowDetail:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["d"])(this.$route.params.id);case 2:e=t.sent,n=e.data,r=e.code,2e4===r&&n&&n.growth&&(this.ageOfMoon=n.growth.month_age,this.templateName=n.growth.name,this.TestArr=n.growth.questions);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},p=_,b=(n("3bde"),Object(l["a"])(p,r,a,!1,null,"12ca82b8",null));e["default"]=b.exports},6691:function(t,e,n){},"875a":function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"k",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return c})),n.d(e,"f",(function(){return i})),n.d(e,"h",(function(){return l})),n.d(e,"g",(function(){return f})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return h})),n.d(e,"a",(function(){return _}));var r=n("b775");function a(t){return Object(r["a"])({url:"/growth_info/list",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/growth_info",method:"post",data:t})}function s(t,e){return Object(r["a"])({url:"/growth_info/"+t,method:"put",data:e})}function u(t){return Object(r["a"])({url:"/growth_info",method:"delete",data:t})}function c(t){return Object(r["a"])({url:"/growth_info/"+t,method:"get"})}function i(t){return Object(r["a"])({url:"/growth_info/"+t+"/status",method:"put"})}function l(t){return Object(r["a"])({url:"/family_member/in_server_list",method:"get",params:t})}function f(t){return Object(r["a"])({url:"baby_growth_info/growth",method:"get",params:t})}function d(t){return Object(r["a"])({url:"baby_growth_info/detail/"+t,method:"get"})}function h(t){return Object(r["a"])({url:"baby_growth_info/send/"+t,method:"get"})}function _(t){return Object(r["a"])({url:"baby_growth_info/content",method:"post",data:t})}},b3e3:function(t,e,n){"use strict";var r=n("6691"),a=n.n(r);a.a}}]);
//# sourceMappingURL=chunk-300c83f2.b8a9c605.js.map