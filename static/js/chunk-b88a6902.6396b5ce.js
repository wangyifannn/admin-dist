(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b88a6902"],{"25ea":function(e,t,a){"use strict";var s=a("de68"),n=a.n(s);n.a},"553a":function(e,t,a){},"58ba":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{width:"80px",align:"center",prop:"index",label:"序号"}}),a("el-table-column",{attrs:{prop:"title",align:"center",width:"260px",label:"标题"}}),a("el-table-column",{attrs:{label:"宝宝",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("div",[e._v("\n            "+e._s(t.row.family_member&&t.row.family_member.name)+"\n          ")]),a("div",[e._v("\n            "+e._s(t.row.family_member&&t.row.family_member.babyId)+"\n          ")])])]}}])}),a("el-table-column",{attrs:{align:"center",label:"用户",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("div",{staticStyle:{display:"inline-block"}},[a("el-avatar",{staticStyle:{"vertical-align":"middle"},attrs:{size:"small",src:t.row.user.avatar}}),e._v("\n            "+e._s(t.row.user.remark_name?t.row.user.remark_name:t.row.user.nickname)+"\n            "),t.row.is_replace?a("svg-icon",{attrs:{"icon-class":"replace"}}):e._e()],1),a("div",[e._v("\n            "+e._s(t.row.user._id)+"\n          ")])])]}}])}),a("el-table-column",{attrs:{align:"center",width:"80px",label:"创建人"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.creator?t.row.creator.name:"系统")+"\n      ")]}}])}),a("el-table-column",{attrs:{align:"center",prop:"sender",width:"80px",label:"发送人"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.sender?t.row.sender.name:"未知")+"\n      ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"消息任务类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("taskType")(t.row.subType))+"\n      ")]}}])}),a("el-table-column",{attrs:{align:"center",width:"110px",prop:"createTime",label:"任务创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("formatTime")(new Date(t.row.createTime),"y-m-d"))+"\n      ")]}}])}),a("el-table-column",{attrs:{width:"110px",label:"任务执行日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e.batchTaskIsSaved(t.row)?a("span",[e._v("\n            待发送\n          ")]):e.batchTaskIsCanceled(t.row)?a("span",[e._v("\n            已取消\n          ")]):a("span",[e._v("\n            "+e._s(e._f("formatTime")(new Date(t.row.executeTime),"y-m-d"))+"\n          ")])])]}}])}),a("el-table-column",{attrs:{label:"发送时间",align:"center",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[6===t.row.status?a("span",[e._v("\n            已关闭\n          ")]):e.taskHasNotSend(t.row.status)?a("span",[e._v("\n            待发送\n          ")]):e.batchTaskIsCanceled(t.row)?a("span",[e._v("\n            已取消\n          ")]):a("span",[e._v("\n            "+e._s(e._f("formatTime")(new Date(t.row.sendTime)))+"\n          ")])])]}}])}),a("el-table-column",{attrs:{align:"center",width:"100px",label:"完成状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("div",[e._v("\n            "+e._s(e._f("finishStatus")(t.row.status))+"\n          ")]),t.row.delayDay&&t.row.delayDay>0?a("div",{staticStyle:{"font-size":"12px",color:"red"}},[e._v("\n            延期"+e._s(t.row.delayDay)+"天\n          ")]):e._e()])]}}])}),a("el-table-column",{attrs:{align:"center",width:"180px",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[1!==t.row.subType||0!==t.row.status&&2!==t.row.status?a("span",[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v(e._s(e.switchHandleText(t.row.status)))]),e.canBeCanceled(t.row.status)?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.onHandleClose(t.row)}}},[e._v("关闭任务")]):e._e()],1):a("span",{staticStyle:{"font-size":"12px",cursor:"not-allowed"}},[a("span",[e._v("去发送")]),e._v("   "),a("span",[e._v("关闭任务")])])])]}}])})],1),e.total>0?a("div",{staticStyle:{"margin-top":"10px","text-align":"center"}},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1):e._e(),a("task-close-dialog",{attrs:{closeDialogVisible:e.closeDialogVisible},on:{closeTask:e.closeTask,closeDialog:function(t){e.closeDialogVisible=!1}}})],1)},n=[],i=a("db72"),r=(a("c5f6"),a("7b1f")),l=a("7afd"),c=a("2f62"),o=a("ed08"),u={name:"TaskList",props:{taskType:{type:Number,default:1},searchForm:{type:Object,default:function(){}}},components:{TaskCloseDialog:l["a"]},data:function(){return{closeDialogVisible:!1,currentTaskId:"",closeTaskId:"",currentPage:1,pageSize:10,total:0,tableData:[],loading:!1}},computed:Object(i["a"])({},Object(c["c"])(["babyList","selectBaby"])),destroyed:function(){this.setTaskCount({})},methods:Object(i["a"])({},Object(c["d"])({setSelectBaby:"health/SET_SELECTBABY",setSendStatus:"health/STE_SENDSTATUS",setTaskCount:"health/SET_TASKCOUNT"}),{},Object(c["b"])({getBabyList:"health/getBabyList"}),{batchTaskIsSaved:function(e){return 1===e.subType&&2===e.status},batchTaskIsCanceled:function(e){return 1===e.subType&&5===e.status},taskHasNotSend:function(e){return 0===e||2===e},onHandleClose:function(e){this.currentTaskId=e._id,this.closeDialogVisible=!0},closeTask:function(e){var t=this,a={reason:e.closeReasonType,reason_message:e.closeReason};Object(r["e"])(this.currentTaskId,a).then((function(e){2e4===e.code&&!0===e.data.result&&(t.closeDialogVisible=!1,t.$message.success("关闭任务成功"),t.$emit("closeTask"))}))},canBeCanceled:function(e){return 0===e||2===e},switchHandleText:function(e){switch(e){case 0:return"去发送";case 1:return"去回复";case 2:return"去发送";case 3:case 4:case 5:case 6:return"查看详情"}},getAllTaskList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0;var a=Object(i["a"])({},t,{currentPage:this.currentPage,pageSize:this.pageSize});Object(r["k"])(this.taskType,a).then((function(t){if(2e4===t.code){e.loading=!1;var a=t.data;e.tableData=a.list,e.total=a.count;var s={allListNum:a.allListNum,needToRelayNum:a.needToRelayNum,todayListNum:a.todayListNum};e.setTaskCount(s)}else e.loading=!1}))},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getAllTaskList(this.searchForm)},handleCurrentChange:function(e){this.currentPage=e,this.getAllTaskList(this.searchForm)},taskTypeRouter:function(e){switch(e){case 2:return"follow";case 3:return"guidance";case 4:return"prevention"}},handleClick:function(e){this.setSelectBaby(null),this.setSendStatus("edit"),Object(o["j"])("currentTask",JSON.stringify(e));var t=this.taskTypeRouter(this.taskType);if(e.isOnServer||1!==e.status&&0!==e.status&&2!==e.status)switch(e.status){case 0:case 2:this.$router.push({path:"".concat(t,"/send"),query:{step:"send",taskId:e._id}});break;case 1:this.$router.push({path:"".concat(t,"/comment"),query:{babyId:e.family_member._id,taskId:e._id}});break;case 3:case 4:case 5:this.$router.push({path:"".concat(t,"/detail"),query:{babyId:e.family_member._id,taskId:e._id}});break;case 6:this.$router.push({path:"".concat(t,"/close"),query:{babyId:e.family_member._id,taskId:e._id}});break}else this.$message.warning("该任务的宝宝不在服务中")}})},d=u,h=a("2877"),m=Object(h["a"])(d,s,n,!1,null,null,null);t["a"]=m.exports},"84d3":function(e,t,a){"use strict";var s=a("553a"),n=a.n(s);n.a},"8c05":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"guidance-container"},[a("el-card",{staticStyle:{"margin-bottom":"30px"}},[a("div",{staticClass:"express-container"},[a("div",{staticClass:"add-item",on:{click:function(t){return e.gotoNewPage("add")}}},[e._v("\n        新建预防提醒任务\n        "),a("div",{staticClass:"add-text"},[e._v("\n          (或修改疫苗提醒计划任务)\n        ")])]),a("div",{staticClass:"express-item",on:{click:function(t){return e.gotoNewPage("send")}}},[e._v("\n        直接发送预防提醒消息\n      ")])]),a("div",{staticClass:"search-container"},[a("el-row",[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"search-item"},[a("div",[e._v("宝宝乳名")]),a("div",[a("el-input",{attrs:{placeholder:"请输入宝宝乳名",size:"mini"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1)])]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"search-item"},[a("div",[e._v("宝宝ID")]),a("div",[a("el-input",{attrs:{placeholder:"请输入宝宝ID",size:"mini"},model:{value:e.searchForm.babyId,callback:function(t){e.$set(e.searchForm,"babyId",t)},expression:"searchForm.babyId"}})],1)])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"search-item"},[a("div",[e._v("用户")]),a("div",[a("el-input",{attrs:{placeholder:"请输入用户昵称或备注名",size:"mini"},model:{value:e.searchForm.nickname,callback:function(t){e.$set(e.searchForm,"nickname",t)},expression:"searchForm.nickname"}})],1)])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"search-item"},[a("div",[e._v("用户ID")]),a("div",[a("el-input",{attrs:{placeholder:"请输入",size:"mini"},model:{value:e.searchForm.uid,callback:function(t){e.$set(e.searchForm,"uid",t)},expression:"searchForm.uid"}})],1)])])],1),a("el-row",[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"search-item"},[a("div",[e._v("消息任务类型")]),a("div",[a("el-select",{attrs:{size:"mini"},model:{value:e.searchForm.subType,callback:function(t){e.$set(e.searchForm,"subType",t)},expression:"searchForm.subType"}},e._l(e.typeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)])]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"search-item"},[a("div",[e._v("完成状态")]),a("div",[a("el-select",{attrs:{size:"mini",disabled:e.statusDisabled,placeholder:"请选择"},model:{value:e.searchForm.status,callback:function(t){e.$set(e.searchForm,"status",t)},expression:"searchForm.status"}},e._l(e.statusOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)])]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"search-time search-date-picker"},[a("div",[e._v("\n              任务执行日期\n            ")]),a("div",[a("el-date-picker",{attrs:{size:"mini",type:"daterange","range-separator":"-","start-placeholder":"请选择时间范围起始","end-placeholder":"请选择时间范围结束"},model:{value:e.searchTime,callback:function(t){e.searchTime=t},expression:"searchTime"}})],1)])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"search-item search-button margin-left-20"},[a("div",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.search}},[e._v("搜索")])],1),a("div",[a("el-button",{attrs:{size:"mini"},on:{click:e.reset}},[e._v("重置")])],1)])])],1)],1)]),a("el-card",[a("el-tabs",{staticClass:"tab-container",staticStyle:{"padding-right":"20px"},on:{"tab-click":e.handleTab},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"全部预防提醒",name:"0"}}),a("el-tab-pane",{attrs:{name:"1"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("div",[e.taskCount.todayListNum>0?a("el-badge",{staticClass:"item",attrs:{value:e.taskCount.todayListNum,max:99}},[e._v("\n              今日待预防提醒任务\n            ")]):a("span",[e._v("今日待预防提醒任务")])],1)])]),a("el-tab-pane",{attrs:{name:"2"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("div",[e.taskCount.allListNum>0?a("el-badge",{staticClass:"item",attrs:{value:e.taskCount.allListNum,max:99}},[e._v("\n              全部待预防提醒任务\n            ")]):a("span",[e._v("全部待预防提醒任务")])],1)])]),a("el-tab-pane",{attrs:{name:"3"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("div",[e.taskCount.needToRelayNum>0?a("el-badge",{staticClass:"item",attrs:{value:e.taskCount.needToRelayNum,max:99}},[e._v("\n              留言待回复\n            ")]):a("span",[e._v("留言待回复")])],1)])])],1),a("div",{staticClass:"table-title"},[e._v("\n      预防提醒消息任务列表\n    ")]),a("task-list",{ref:"taskList",attrs:{"task-type":4,"search-form":e.searchForm},on:{closeTask:e.search}})],1)],1)},n=[],i=(a("6762"),a("2fdb"),a("386d"),a("db72")),r=a("58ba"),l=a("2f62"),c=a("ed08"),o=a("cded"),u=a("2ef0"),d=a.n(u),h={name:"Guidance",components:{TaskList:r["a"]},data:function(){return{statusDisabled:!1,searchForm:{name:"",nickname:"",uid:"",status:"",subType:"",beginTime:"",endTime:"",type:"",taskStatus:"",babyId:""},searchTime:null,activeName:0,typeOptions:[{value:1,label:"批量发送"},{value:3,label:"直接发送"},{value:4,label:"自定义任务"},{value:6,label:"疫苗提醒任务"}],statusOptions:o["b"]}},computed:Object(i["a"])({},Object(l["c"])(["taskCount","sendStatus","getReplaceStatus"])),watch:{getReplaceStatus:{handler:function(e,t){var a=d.a.get(e,"replace.replace_list"),s=d.a.get(t,"replace.replace_list");a&&s&&a.length!==s.length&&this.search()},deep:!0}},methods:Object(i["a"])({},Object(l["d"])({setSendStatus:"health/STE_SENDSTATUS"}),{resetSearchForm:function(){this.searchForm={name:"",user:"",status:"",subType:"",beginTime:"",endTime:"",type:"",babyId:""}},handleTab:function(){if(this.$refs.taskList.pageSize=10,this.$refs.taskList.currentPage=1,this.resetSearchForm(),this.searchForm.taskStatus=this.activeName,this.$refs.taskList.getAllTaskList(this.searchForm),"0"!==this.activeName)return this.statusDisabled=!0,void this.filterSatatusOptions(this.activeName);this.statusDisabled=!1,this.resetStatus()},resetStatus:function(){this.searchForm.status=null,this.statusOptions=o["b"]},filterSatatusOptions:function(e){switch(e){case"1":this.searchForm.status="",this.statusOptions=[{value:"",label:"今日待预防提醒"}];break;case"2":this.searchForm.status="",this.statusOptions=[{value:"",label:"全部待预防提醒"}];break;case"3":this.searchForm.status="",this.statusOptions=[{value:"",label:"留言待回复"}];break;case"4":this.statusOptions=[{value:"",label:"已关闭"}]}},search:function(){this.$refs.taskList.pageSize=10,this.$refs.taskList.currentPage=1,this.searchForm.beginTime=this.searchTime?this.searchTime[0]:"",this.searchForm.endTime=this.searchTime?this.searchTime[1]:"",this.$refs.taskList.getAllTaskList(this.searchForm)},reset:function(){this.resetSearchForm(),this.searchForm.taskStatus=this.activeName,this.searchTime=null,this.$refs.taskList.pageSize=10,this.$refs.taskList.currentPage=1,this.$refs.taskList.getAllTaskList(this.searchForm)},gotoNewPage:function(e){"send"===e&&(this.setSendStatus("select"),Object(c["j"])("taskStep",0)),this.$router.push("prevention/".concat(e))},needKeepAlive:function(e){var t=["prevention/send","prevention/detail","prevention/comment","prevention/add","prevention/close"];return t.some((function(t){return e.includes(t)}))},refreshPage:function(){this.statusDisabled=!1,this.activeName="0",this.statusOptions=o["b"],this.reset()}}),beforeRouteEnter:function(e,t,a){a((function(e){e.needKeepAlive(t.path)?e.search():e.refreshPage()}))}},m=h,p=(a("25ea"),a("84d3"),a("2877")),b=Object(p["a"])(m,s,n,!1,null,"1a3b601f",null);t["default"]=b.exports},cded:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return r}));a("a481"),a("3b2b"),a("a18c");var s=function(e){switch(e.vaccine_type){case 1:return"减毒";case 2:return"灭活";case 3:return"多糖"}},n=function(e){switch(e.vaccine_class){case 1:return"一类";case 2:return"二类"}},i=function(e){var t=new RegExp("<.+?>","g"),a=e.replace(t,"");return a.length>38?a.slice(0,38)+"...":a},r=[{value:0,label:"待发送"},{value:2,label:"已保存"},{value:3,label:"已发送"},{value:1,label:"留言待回复"},{value:4,label:"已完成"},{value:5,label:"已取消"},{value:6,label:"已关闭"},{value:100,label:"延期"}]},de68:function(e,t,a){}}]);
//# sourceMappingURL=chunk-b88a6902.6396b5ce.js.map