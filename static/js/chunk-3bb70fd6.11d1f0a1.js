(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bb70fd6"],{"4bfb":function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"j",(function(){return i})),n.d(e,"k",(function(){return s})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"i",(function(){return m})),n.d(e,"h",(function(){return f})),n.d(e,"f",(function(){return p}));var r=n("b775");function a(t){return Object(r["a"])({url:"notify",method:"post",data:t,mock:!1})}function i(t){return Object(r["a"])({url:"notify",method:"get",params:t,mock:!1})}function s(t){return Object(r["a"])({url:"mts_user/record/typing_speed",method:"post",data:t,mock:!1})}function o(t){return Object(r["a"])({url:"mts_user/record/test_question",method:"post",data:t,mock:!1})}function c(t){return Object(r["a"])({url:"question/short_answer",method:"post",data:t,mock:!1})}function u(){return Object(r["a"])({url:"question/my/error",method:"get",mock:!1})}function l(){return Object(r["a"])({url:"plan/my",method:"get",mock:!1})}function d(t){return Object(r["a"])({url:"question/my/error/"+t,method:"delete",mock:!1})}function m(){return Object(r["a"])({url:"mts_user/record/stage",method:"put",mock:!1})}function f(){return Object(r["a"])({url:"mts_user/pass",method:"put",mock:!1})}function p(){return Object(r["a"])({url:"mts_user/record/rotation/type",method:"get",mock:!1})}},5118:function(t,e,n){(function(t){var r="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,a=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(a.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new i(a.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("24aa"))},6017:function(t,e,n){(function(t,e){(function(t,n){"use strict";if(!t.setImmediate){var r,a=1,i={},s=!1,o=t.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(t);c=c&&c.setTimeout?c:t,"[object process]"==={}.toString.call(t.process)?f():p()?h():t.MessageChannel?g():o&&"onreadystatechange"in o.createElement("script")?_():v(),c.setImmediate=u,c.clearImmediate=l}function u(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var s={callback:t,args:e};return i[a]=s,r(a),a++}function l(t){delete i[t]}function d(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r);break}}function m(t){if(s)setTimeout(m,0,t);else{var e=i[t];if(e){s=!0;try{d(e)}finally{l(t),s=!1}}}}function f(){r=function(t){e.nextTick((function(){m(t)}))}}function p(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}function h(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"===typeof n.data&&0===n.data.indexOf(e)&&m(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),r=function(n){t.postMessage(e+n,"*")}}function g(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;m(e)},r=function(e){t.port2.postMessage(e)}}function _(){var t=o.documentElement;r=function(e){var n=o.createElement("script");n.onreadystatechange=function(){m(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}function v(){r=function(t){setTimeout(m,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,n("24aa"),n("4362"))},"84a3":function(t,e,n){},ab09:function(t,e,n){"use strict";var r=n("84a3"),a=n.n(r);a.a},df0c:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"study-home"},[n("h3",{staticClass:"study-time"},[t._v("\n    学习时长："),n("span",[t._v(t._s(t.getTime))])]),n("el-divider"),n("div",{staticClass:"part"},[t._m(0),n("div",{staticClass:"part-wrap"},[n("h3",{staticClass:"title"},[t._v("\n        part1   想知道“我们”适合吗？来测测就知道了\n      ")]),n("div",{staticClass:"img-wrap"},[n("router-link",{attrs:{to:"/study/corporate-culture/corporate_culture"}},[n("img",{attrs:{src:t.imgSrc+"20200217175305529/1581933185240.png"}})]),n("router-link",{attrs:{to:"/study/corporate-culture/service_responsibilities"}},[n("img",{attrs:{src:t.imgSrc+"20200217175416176/1581933256242.png"}})])],1)])]),n("div",{staticClass:"part"},[t._m(1),n("div",{staticClass:"part-wrap"},[n("h3",{staticClass:"title"},[t._v("\n        part2   关于健康管理师的工作，你了解多少\n      ")]),n("div",{staticClass:"img-wrap"},[n("router-link",{attrs:{to:"/study/corporate-culture/workflow"}},[n("img",{attrs:{src:t.imgSrc+"20200217175521157/1581933320863.png"}})]),n("router-link",{attrs:{to:"/study/workflow"}},[n("img",{attrs:{src:t.imgSrc+"20200217175615090/1581933374760.png"}})])],1)])]),n("div",{staticClass:"part"},[t._m(2),n("div",{staticClass:"part-wrap"},[n("h3",{staticClass:"title"},[t._v("\n        part3   看看你还需要提升的空间在哪里？\n      ")]),n("div",{staticClass:"img-box"},[n("router-link",{attrs:{to:"/study/corporate-culture/professional_knowledge"}},[n("img",{staticClass:"start-img",attrs:{src:t.imgSrc+"20200217175655946/1581933415668.png",alt:"业务能力"}})]),n("div",{staticClass:"images"},[n("div",{staticClass:"top"},[n("img",{attrs:{src:t.imgSrc+"20200217173255691/1581931975434.png",alt:"专业能力"},on:{click:function(e){return t.goToTest("专业能力")}}}),n("img",{attrs:{src:t.imgSrc+"20200217175108286/1581933067993.png",alt:"打字速度"},on:{click:function(e){return t.goToTest("打字速度")}}})]),n("div",{staticClass:"bottom"},[n("div",{staticClass:"ability-test",staticStyle:{display:"inline",cursor:"pointer"},on:{click:function(e){return t.goToTest("用户问题确诊能力")}}},[n("img",{attrs:{src:t.imgSrc+"20200217173511153/1581932110845.png",alt:"用户问题确诊能力"}})]),n("img",{attrs:{src:t.imgSrc+"20200217173547177/1581932146838.png",alt:"学习总结能力"},on:{click:function(e){return t.goToTest("学习总结能力")}}})])])],1)])]),t.getPlanShow?n("tip",{staticClass:"center",attrs:{"tip-show":t.getPlanShow,"btn-text":"领取计划","has-footer":!0,"model-close":!1},on:{"update:tipShow":function(e){t.getPlanShow=e},"update:tip-show":function(e){t.getPlanShow=e},btnHandle:t.btnGetPlanShow}},[n("p",{attrs:{slot:"content"},slot:"content"},[t._v("恭喜通过试岗阶段，点击领取计划")])]):t._e(),t.eliminateShow?n("tip",{staticClass:"center",attrs:{"tip-show":t.eliminateShow,"btn-text":"确定","has-footer":!0},on:{"update:tipShow":function(e){t.eliminateShow=e},"update:tip-show":function(e){t.eliminateShow=e},btnHandle:t.btnEliminateShow}},[n("p",{attrs:{slot:"content"},slot:"content"},[t._v("很遗憾未通过试岗阶段，无法再继续向下进行")])]):t._e(),t.isRemind?n("tip",{staticClass:"center",attrs:{"tip-show":t.isRemind,"btn-text":"开始学习","has-footer":!0,"close-hid":!0,"model-close":!1},on:{"update:tipShow":function(e){t.isRemind=e},"update:tip-show":function(e){t.isRemind=e},btnHandle:t.btnIsRemindShow}},[t.remindData.real_day-t.remindData.record_day>0?n("p",{attrs:{slot:"content"},slot:"content"},[t._v("\n      "+t._s(1===t.remindData.record_day?"恭喜进入":"目前处于")+"试岗阶段，点击开始学习进入试岗"+t._s(t.remindData.record_day!==t.remindData.real_day?"第"+(t.remindData.record_day+1):"最后一")+"天\n    ")]):t._e(),t.remindData.record_day-t.remindData.real_day>=0?n("p",{attrs:{slot:"content"},slot:"content"},[t._v("\n      目前处于试岗阶段，试岗阶段已超时"+t._s(t.remindData.record_day-t.remindData.real_day)+"天\n    ")]):t._e()]):t._e(),n("el-dialog",{attrs:{title:"提示",visible:t.isTest,width:"30%",center:"",top:"30vh"},on:{"update:visible":function(e){t.isTest=e}}},[n("p",{staticClass:"center"},[t._v("该板块只有一次测试机会，进入则开始，请确定是否开始？")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.isTest=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.abilityTest}},[t._v("确 定")])],1)])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circle"},[n("i",{staticClass:"spot"}),n("i",{staticClass:"block"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circle"},[n("i",{staticClass:"spot"}),n("i",{staticClass:"block"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circle"},[n("i",{staticClass:"spot"}),n("i",{staticClass:"block"})])}],i=(n("96cf"),n("3b8d")),s=n("f296"),o=n("4bfb"),c=n("c24f"),u=n("fd0b"),l=n("9039"),d={components:{Tip:l["a"]},data:function(){return{getPlanShow:!1,eliminateShow:!1,isRemind:!1,remindData:{},isTest:!1,time:0,testProject:"",testStatus:[],imgSrc:"https://pic1.baobaohehu.com/fd/admin_v3/5d7f5f5c1c03121b82179aee//"}},computed:{getTime:function(){return Object(u["c"])({time:this.time})}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["b"])();case 2:e=t.sent,n=e.data,n&&n.mts_user&&(this.$store.state.user.mts_user=n.mts_user,-1===n.mts_user.stage&&"pass"===n.mts_user.stage_status&&(this.getPlanShow=!0),-1===n.mts_user.stage&&"eliminate"===n.mts_user.stage_status&&(this.eliminateShow=!0),-1!==n.mts_user.stage&&this.$router.push("/study/stage")),-1===this.$store.state.user.mts_user.stage&&this.trialRemind(),this.studyTime(),this.getTestStatus();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{btnGetPlanShow:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["D"])();case 2:e=t.sent,n=e.data,n.result&&(window.location.href="/study/stage"),this.getPlanShow=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),btnEliminateShow:function(){this.eliminateShow=!1},studyTime:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["Q"])();case 2:e=t.sent,n=e.data,r=e.code,2e4===r&&n.result&&(this.time=n.time);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),trialRemind:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a,i,s,c,u,l,d,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["j"])();case 2:e=t.sent,n=e.code,r=e.data,2e4===n&&r.result&&r.record_day!==r.real_day&&(this.remindData=r,a=new Date(r.start_at).getFullYear(),i=new Date(r.start_at).getMonth(),s=new Date(r.start_at).getDate(),c="".concat(a,"-").concat(i,"-").concat(s),u=(new Date).getFullYear(),l=(new Date).getMonth(),d=(new Date).getDate(),m="".concat(u,"-").concat(l,"-").concat(d),c!==m&&(this.isRemind=!0));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),btnIsRemindShow:function(){this.createRemind(),this.isRemind=!1},createRemind:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["c"])({type:"test_job"});case 2:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),abilityTest:function(){"打字速度"===this.testProject?this.$router.push("/study/speed-of-typing"):this.$router.push("/study/ability-test/"+this.testProject),this.isTest=!1},getTestStatus:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["f"])();case 2:e=t.sent,n=e.code,r=e.data,2e4===n&&r.result&&(this.testStatus=r.list);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),goToTest:function(t){this.testProject=t;var e="";"专业能力"===t&&(e="professional_ability"),"打字速度"===t&&(e="typing_speed"),"用户问题确诊能力"===t&&(e="problem_diagnosis_ability"),"学习总结能力"===t&&(e="summarizing_ability");var n=this.testStatus.filter((function(t){return t.lesson_column===e})).length;n?this.$message({message:"您已经完成该版块测试，不需要再测试，请完成其他未完成的测试",type:"error"}):this.isTest=!0}}},m=d,f=(n("ab09"),n("2877")),p=Object(f["a"])(m,r,a,!1,null,"622ec9fd",null);e["a"]=p.exports},fd0b:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return i}));var r=function(t){var e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),a=t.getHours(),i=t.getMinutes(),s=t.getSeconds();return n<10&&(n="0"+n),"".concat(e,"-").concat(n,"-").concat(r," ").concat(a,":").concat(i,":").concat(s)},a=function(t){var e=t.start,n=t.end,r=t.time;if(!e&&!n&&!r)return"0天0小时0分钟";r||(r=new Date(n)-new Date(e));var a=Math.floor(r/864e5),i=r%864e5,s=Math.floor(i/36e5),o=i%36e5,c=Math.ceil(o/6e4);return a+"天"+s+"小时"+c+"分钟"},i=function(t){var e=new Date(t),n="-",r=":",a=e.getMonth()+1,i=e.getDate();a>=1&&a<=9&&(a="0"+a),i>=0&&i<=9&&(i="0"+i);var s=e.getFullYear()+n+a+n+i+" "+e.getHours()+r+e.getMinutes()+r+e.getSeconds();return-1!==s.indexOf("NaN")?"/":s}}}]);
//# sourceMappingURL=chunk-3bb70fd6.11d1f0a1.js.map