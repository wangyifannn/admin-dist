(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15459c5f"],{"0a29":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"comment"},[s("div",{staticClass:"success-item"},[s("div",{staticClass:"label"},[t._v("\n      服务类型:\n    ")]),s("div",{staticClass:"content"},[t._v(t._s(t._f("serviceType")(t.taskDetail.serviceType)))])]),s("div",{staticClass:"baby-number"},[s("div",{staticClass:"baby-number"},[s("i",{staticClass:"iconfont icon-xuanze"}),t._v("        已选择"+t._s(t.babyNum)+"个宝宝\n    ")])]),s("div",{staticClass:"success-item"},[s("div",{staticClass:"label"},[t._v("标题:")]),s("div",{staticClass:"content"},[t._v("\n      "+t._s(t.taskDetail.title)+"  \n      "),t.taskDetail.is_replace?s("svg-icon",{attrs:{"icon-class":"replace"}}):t._e()],1)]),s("div",{staticClass:"success-item"},[s("div",{staticClass:"label"},[t._v("创建时间:")]),s("div",{staticClass:"content"},[t._v("\n      "+t._s(t._f("formatTime")(new Date(t.taskDetail.createTime)))+"\n    ")])]),s("div",{staticClass:"success-item"},[s("div",{staticClass:"label"},[t._v("内容详情:")]),s("div",{staticClass:"content rich-text rich-text__image--max480",domProps:{innerHTML:t._s(t.taskDetail.content)}})]),t.taskDetail.contentVideos&&t.taskDetail.contentVideos.length>0?s("div",{staticClass:"success-item"},[s("div",{staticClass:"label"}),s("div",{staticClass:"content"},t._l(t.taskDetail.contentVideos,(function(t){var a=t.url;return s("div",{key:a},[s("video-item",{attrs:{url:a}})],1)})),0)]):t._e(),t.taskDetail.sendTime?s("div",{staticClass:"time-stamp"},[t._v("\n    "+t._s(t._f("formatTime")(new Date(t.taskDetail.sendTime)))+"\n  ")]):t._e(),t.taskDetail.cancelTime?s("div",{staticClass:"success-item"},[s("div",{staticClass:"label"},[t._v("取消时间:")]),s("div",{staticClass:"content"},[t._v("\n      "+t._s(t._f("formatTime")(new Date(t.taskDetail.cancelTime)))+"\n    ")])]):t._e()])},i=[],n=(s("c5f6"),s("d537")),c={name:"BatchDetail",components:{VideoItem:n["a"]},props:{taskDetail:{type:Object,default:function(){}},babyNum:{type:[String,Number],default:0}},data:function(){return{}}},o=c,l=(s("b7af"),s("2877")),r=Object(l["a"])(o,e,i,!1,null,"1d82f77d",null);a["a"]=r.exports},"350a":function(t,a,s){"use strict";var e=s("c2d7"),i=s.n(e);i.a},"92d9":function(t,a,s){},9778:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("batch-detail-form",{attrs:{"baby-num":t.babyNum,"task-detail":t.taskDetail}})},i=[],n=s("7b1f"),c=s("0a29"),o={name:"CanceledBatch",components:{BatchDetailForm:c["a"]},data:function(){return{babyNum:0,taskId:"",taskDetail:{}}},mounted:function(){var t=this;this.babyNum=this.$route.query.babyNum,this.taskId=this.$route.query.taskId,Object(n["d"])(this.taskId,{type:1}).then((function(a){2e4===a.code&&(t.taskDetail=a.data)}))}},l=o,r=s("2877"),d=Object(r["a"])(l,e,i,!1,null,null,null);a["default"]=d.exports},b7af:function(t,a,s){"use strict";var e=s("92d9"),i=s.n(e);i.a},c2d7:function(t,a,s){},d537:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"video-container"},[s("img",{attrs:{src:t.url+"?x-oss-process=video/snapshot,t_0,w_0,h_0,f_jpg",width:"480"}}),s("div",{staticClass:"video-container__play-icon",on:{click:function(a){return t.showMediaDetail(t.url)}}},[s("div",{staticClass:"el-icon-video-play"})]),s("monitor",{ref:"monitor",attrs:{"monitor-info":t.monitorInfo}})],1)])},i=[],n=s("7962"),c={name:"VideoItem",components:{Monitor:n["a"]},props:{url:{type:String,default:""}},data:function(){return{monitorInfo:{}}},methods:{showMediaDetail:function(t){this.monitorInfo={type:"video",meta:{url:t}},this.$refs.monitor.show()}}},o=c,l=(s("350a"),s("2877")),r=Object(l["a"])(o,e,i,!1,null,"df4e0e06",null);a["a"]=r.exports}}]);
//# sourceMappingURL=chunk-15459c5f.3b06dfc4.js.map