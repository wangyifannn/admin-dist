(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c62c32c"],{"265d":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"customer__box"},[a("el-row",{staticClass:"margin-top-20"},[a("searchForm",{on:{searchFun:e.searchFun}})],1),a("FileTable",{attrs:{searchParams:e.searchParams,searchFlag:e.searchFlag,serviceItem:e.serviceItem,radioColumn:e.radioColumn,showOperator:e.showOperator},on:{searchFlag:e.setSearchFlag,rowClick:e.rowClick}})],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("MyForm",{ref:"customerSearchForm",attrs:{form:e.form,formData:e.formData,formItem:e.formItem},on:{submit:e.searchSubmit,resetForm:e.reset}})},s=[],u=a("af7d"),l=a("63d4"),i={data:function(){var e={showFormBorder:!1,showTitle:!1,ref:"customerSearchForm",labelWidth:"120px",labelPositon:"right",style:"notprepend",column:3,btnStyle:"inline",hasSubmit:!0,btnRight:!0,cancleShow:!0,submitText:"搜索",cancleText:"重置"};return{searchParams:{},formItem:[],formData:{},form:e}},props:{optionsVal:{type:String,default:""},moduleName:{type:String,default:""}},components:{MyForm:l["a"]},created:function(){this.formInit()},methods:{searchSubmit:function(e){this.$emit("searchFun",e)},formInit:function(e){this.formItem=Object(u["b"])("healthFileTableSearch","item"),this.formData=e||Object(u["b"])("healthFileTableSearch","data")},reset:function(){this.$emit("searchFun")}}},c=i,d=a("2877"),h=Object(d["a"])(c,o,s,!1,null,null,null),m=h.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("MyTable",{attrs:{size:"mini",title:"服务中的患者",radioColumn:e.radioColumn,titleShow:!0,stripe:!1,border:!0,multiple:!1,hasIndex:!1,outlineBorder:!1,operation:e.operation,column:e.column,data:e.tableData,currentPage:e.currentPage,pageSize:e.pageSize,total:e.total},on:{fileDetail:e.fileDetail,rowClick:e.rowClick,handleSizeChange:e.handleSizeChange,handleCurrentChange:e.handleCurrentChange},scopedSlots:e._u([{key:"member",fn:function(t){return[a("div",[a("div",[e._v("\n          "+e._s(t.row.name)),t.row.is_replace?a("svg-icon",{attrs:{"icon-class":"replace"}}):e._e()],1),a("div",[e._v(e._s(t.row.babyId))])])]}},{key:"userInfo",fn:function(t){return[a("div",[a("div",{staticClass:"user-avatar"},[a("el-avatar",{key:t.row.user_info._id,attrs:{src:t.row.user_info.avatar,size:28}}),e._v("\n          "+e._s(t.row.user)+"\n        ")],1),a("div",[e._v(e._s(t.row.user_info.user_id))]),a("p",[e._v("\n          "+e._s(t.row.user_info.nickname)+"\n        ")])])]}},{key:"userStage",fn:function(t){return[e._v("\n      "+e._s(e.curStageTxt(t.row.chanke.cur_stage))+"\n    ")]}},{key:"userRemark",fn:function(t){return[e._v("\n      "+e._s(t.row.user_info.remark&&t.row.user_info.remark.content?t.row.user_info.remark.content:"-")+"\n    ")]}},{key:"servicePackage",fn:function(t){return[e._v("\n      "+e._s(t.row.fd_service_type_info.name)+"\n    ")]}},{key:"serviceTime",fn:function(t){return[a("p",[e._v("\n        "+e._s(e.formatTime(t.row.fd_contract_info.started_at,"{y}-{m}-{d}"))+"到\n      ")]),e._v("\n      "+e._s(e.formatTime(t.row.fd_contract_info.ended_at,"{y}-{m}-{d}"))+"\n    ")]}}])})],1)},p=[],b=(a("ac6a"),a("8975")),g=a("b5b3"),_=a("7b1f"),w={data:function(){var e={nowPage:"relatedTable",show:!0,fixed:!1,size:"mini",width:80,minWidth:100,label:"操作",btns:[{type:"text",size:"mini",content:"档案详情",icon:"",handle:"fileDetail",class:"button-operator"}]};return{userId:"",column:[],loading:!1,formItem:[],formData:{},tableData:[],pageSize:10,currentPage:1,total:0,operation:e}},components:{MyTable:g["a"]},props:{searchParams:{type:Object,default:function(){}},searchFlag:{type:Boolean,default:!1},radioColumn:{type:Boolean,default:!1},showOperator:{type:Boolean,default:!1},serviceItem:{type:String,default:"health_record"}},watch:{searchFlag:function(e){!0===e&&this.getHealthFileList()},showOperator:function(){console.log("是否显示按钮",this.showOperator),this.operation.show=this.showOperator}},created:function(){this.operation.show=this.showOperator,this.fieldInit(),this.getHealthFileList()},methods:{curStageTxt:b["curStageTxt"],gender:b["gender"],rowClick:function(e){this.$emit("rowClick",e)},fieldInit:function(){var e=Object(u["a"])("healthFileList");e.forEach((function(e){e.width&&"auto"!=e.width&&(e.width="300")})),this.column=e},fileDetail:function(e){this.$router.push({path:"/obstetricsDoctor/healthFile/detail/".concat(e._id),query:{userId:this.$route.query.userId}})},handleCurrentChange:function(e){this.currentPage=e,this.getHealthFileList()},handleSizeChange:function(e){this.pageSize=e,this.getHealthFileList()},setTableData:function(e){var t=e.list;this.tableData=t},getHealthFileList:function(){var e=this,t={current_page:this.currentPage,page_size:this.pageSize,type:"chanke",service_item:this.serviceItem,show_replace:1};this.loading=!0;var a=Object.assign({},t,this.searchParams);Object(_["p"])(a).then((function(t){e.$emit("searchFlag",!1),e.loading=!1,t&&(e.total=t.data.count,console.log("档案列表",t.data),e.setTableData(t.data))})).catch((function(t){e.loading=!1}))}}},v=w,y=Object(d["a"])(v,f,p,!1,null,null,null),O=y.exports,F={data:function(){return{searchParams:{},searchFlag:!1}},components:{searchForm:m,FileTable:O},props:{radioColumn:{type:Boolean,default:!1},showOperator:{type:Boolean,default:!1},serviceItem:{type:String,default:"health_record"}},created:function(){},methods:{setSearchFlag:function(e){this.searchFlag=e},rowClick:function(e){this.$emit("rowClick",e)},refreshRelated:function(){this.searchParams=this.searchParams?this.searchParams:{},this.setSearchFlag(!0)},searchFun:function(e){this.searchParams=e||{},this.setSearchFlag(!0)}}},j=F,S=(a("536c"),Object(d["a"])(j,r,n,!1,null,null,null));t["a"]=S.exports},"2e95":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("healthFileList",{attrs:{showOperator:!0}})],1)},n=[],o=a("265d"),s={data:function(){return{}},components:{healthFileList:o["a"]}},u=s,l=a("2877"),i=Object(l["a"])(u,r,n,!1,null,null,null);t["default"]=i.exports},"3acd":function(e,t,a){"use strict";a.d(t,"i",(function(){return n})),a.d(t,"l",(function(){return o})),a.d(t,"m",(function(){return s})),a.d(t,"g",(function(){return u})),a.d(t,"a",(function(){return l})),a.d(t,"o",(function(){return i})),a.d(t,"d",(function(){return c})),a.d(t,"k",(function(){return d})),a.d(t,"f",(function(){return h})),a.d(t,"e",(function(){return m})),a.d(t,"h",(function(){return f})),a.d(t,"n",(function(){return p})),a.d(t,"c",(function(){return b})),a.d(t,"j",(function(){return g})),a.d(t,"b",(function(){return _}));var r=a("b775");function n(e){return Object(r["a"])({url:"/crm/customer/list",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/crm/user/list",method:"get",params:e})}function s(e){return Object(r["a"])({url:"/crm/user/".concat(e),method:"get",params:e})}function u(e){return Object(r["a"])({url:"/crm/customer/".concat(e,"/detail"),method:"get",params:e})}function l(e){return Object(r["a"])({url:"/crm/customer",method:"post",data:e})}function i(e,t){return Object(r["a"])({url:"/crm/customer/".concat(t,"/update"),method:"put",data:e})}function c(e,t){return Object(r["a"])({url:"/crm/customer/".concat(t,"/relative"),method:"put",data:e})}function d(e,t){return Object(r["a"])({url:"/crm/customer/".concat(e,"/orders"),method:"get",params:t})}function h(e){return Object(r["a"])({url:"/crm/customer/".concat(e,"/brief_info"),method:"get"})}function m(e,t){return Object(r["a"])({url:"/crm/customer/".concat(e,"/path"),method:"post",data:t})}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r["a"])({url:"/crm/customer/".concat(e,"/path/list"),method:"get",params:t})}function p(){return Object(r["a"])({url:"/crm/basic/customer/supervisor/options",method:"get"})}function b(e){return Object(r["a"])({url:"/crm/customer/change_supervisor",method:"put",data:e})}function g(e){return Object(r["a"])({url:"/crm/customer/".concat(e,"/creator_options"),method:"get"})}function _(e){return Object(r["a"])({url:"/crm/customer/".concat(e,"/cancel_relative"),method:"put"})}},"536c":function(e,t,a){"use strict";var r=a("9d7e0"),n=a.n(r);n.a},8722:function(e){e.exports={healthFileTableSearch:{item:[{type:"text",name:"baby_name",value:"",placeholder:"请输入患者姓名",width:"100%",label:"患者姓名：",show:!0,colSpan:6,rules:[]},{type:"text",name:"baby_id",value:"",placeholder:"请输入患者ID",width:"100%",label:"患者ID：",colSpan:6,show:!0,rules:[]},{type:"select",value:"",placeholder:"请选择",show:!0,label:"患者当前阶段：",options:[{label:"备孕中",value:"byz"},{label:"怀孕中",value:"hyz"},{label:"产褥期",value:"crq"}],name:"cur_stage"},{type:"text",name:"user_name",value:"",placeholder:"请输入用户昵称或备注名",width:"100%",label:"用户：",show:!0,colSpan:6,rules:[]},{type:"text",name:"user_id",value:"",placeholder:"请输入用户ID",width:"100%",label:"用户ID：",colSpan:6,show:!0,rules:[]},{type:"servicePackage",value:"",show:!0,label:"当前服务套餐：",placeholder:"请选择",colSpan:7,name:"fd_service_type"},{type:"btn",colSpan:5,show:!0}],data:{baby_name:"",baby_id:"",cur_stage:"",user_name:"",user_id:"",fd_service_type:""}},byzForm:{item:[{type:"date",name:"started_at",value:"",placeholder:"选择日期",width:"100%",label:"备孕开始日期：",show:!0,showBefore:!1,rules:[{required:!0,message:"请选择",trigger:"blur"}]},{type:"tipRow",label:"备孕时长：",name:"bysc",show:!0,value:""},{type:"radio",name:"is_checked",value:"",width:"100%",label:"是否做过孕前检查：",show:!0,options:[{value:!0,label:"是"},{value:!1,label:"否"}],rules:[{required:!0,message:"请选择是否做过孕前检查",trigger:"blur"}]},{type:"radio",name:"has_unusual_status",cascaderItem:["is_checked"],cascaderValue:!0,value:"",width:"100%",label:"检查是否有异常：",show:!0,options:[{value:!0,label:"是"},{value:!1,label:"否"}],rules:[{required:!0,message:"请选择检查是否有异常",trigger:"blur"}]},{type:"textarea",name:"unusual_desc",cascaderItem:["has_unusual_status"],cascaderValue:!0,value:"",width:"100%",label:"说明：",placeholder:"请输入",minlength:"0",maxlength:"100",showLimit:!0,show:!0,rules:[{required:!0,message:"请填写",trigger:"blur"}]},{show:!0,type:"slot",slotName:"updateInfo"}],data:{started_at:"",bysc:"",is_checked:"",has_unusual_status:!1,unusual_desc:"",update_at:"",update_user:""}},hyzForm:{item:[{type:"date",name:"last_yuejing_at",value:"",placeholder:"选择日期",width:"100%",label:"末次月经日期：",show:!0,showBefore:!0,rules:[{required:!0,message:"请填写",trigger:"blur"}]},{type:"date",name:"yuchan_at",value:"",placeholder:"选择日期",width:"100%",label:"预产期：",show:!0,showAfter:!1,rules:[{required:!0,message:"请填写",trigger:"blur"}]},{type:"inputnumber",name:"gestational_weeks",value:"",colSpan:12,width:"100%",label:"孕周：",unit:"周",min:0,max:42,show:!0,rules:[{required:!0,message:"请填写",trigger:"blur"}]},{type:"inputnumber",name:"gestational_days",value:"",min:1,max:6,colSpan:12,width:"100%",label:"",unit:"天",show:!0},{type:"radio",name:"has_unusual_baby",value:"",width:"100%",label:"是否孕育过有出生缺陷的宝宝：",show:!0,options:[{value:!0,label:"是"},{value:!1,label:"否"}],rules:[{required:!0,message:"请选择",trigger:"blur"}]},{type:"textarea",name:"unusual_baby_desc",cascaderItem:["has_unusual_baby"],cascaderValue:!0,value:"",width:"100%",label:"说明：",placeholder:"请输入",minlength:"0",maxlength:"100",showLimit:!0,show:!0,rules:[{required:!0,message:"填写",trigger:"blur"}]},{type:"radio",name:"has_renshen_history",value:"",width:"100%",label:"既往有妊娠合并症：",show:!0,options:[{value:!0,label:"是"},{value:!1,label:"否"}],rules:[{required:!0,message:"请选择",trigger:"blur"}]},{type:"textarea",name:"renshen_desc",cascaderItem:["has_renshen_history"],cascaderValue:!0,value:"",width:"100%",label:"说明：",placeholder:"请输入",minlength:"0",maxlength:"100",showLimit:!0,show:!0,rules:[{required:!0,message:"请选择检查是否有异常",trigger:"blur"}]},{show:!0,type:"slot",slotName:"updateInfo"}],data:{last_yuejing_at:"",yuchan_at:"",gestational_weeks:"",gestational_days:"",has_unusual_baby:"",unusual_baby_desc:"",has_renshen_history:"",renshen_desc:"",update_at:"",update_user:""}},crqForm:{item:[{type:"date",name:"fenmian_at",value:"",placeholder:"选择日期",width:"100%",label:"本次生产分娩日期：",show:!0,showBefore:!0,rules:[]},{type:"select",label:"分娩方式：",name:"fenmian_mode",value:"",width:"100%",show:!0,placeholder:"请选择分娩方式",options:[{label:"阴道分娩",value:"ydfm"},{label:"剖宫产",value:"pgc"}],rules:[{required:!0,message:"请填写分娩情况",trigger:"blur"}]},{type:"radio",name:"is_ceqie",cascaderItem:["fenmian_mode"],cascaderValue:"ydfm",value:"",width:"100%",label:"是否侧切：",show:!0,options:[{value:!0,label:"是"},{value:!1,label:"否"}],rules:[{required:!0,message:"请选择",trigger:"blur"}]},{type:"radio",name:"feed_mode",value:"",width:"100%",label:"本次产后喂养方式：",show:!0,options:[{value:"muru",label:"母乳喂养"},{value:"rengong",label:"人工喂养"},{value:"mix",label:"混合喂养"}],rules:[{required:!0,message:"请选择",trigger:"blur"}]},{show:!0,type:"slot",slotName:"updateInfo"}],data:{fenmian_at:"",fenmian_mode:"",is_ceqie:"",feed_mode:"",update_at:"",update_user:""}}}},"92fc":function(e){e.exports={healthFileList:[{prop:"index",label:"序号",fixed:!1,widths:"50",sortable:!1,show:!0},{prop:"member",label:"患者",fixed:!1,widths:"190",type:"slot",sortable:!1,show:!0},{prop:"userInfo",label:"用户",width:"auto",fixed:!1,type:"slot",sortable:!1,show:!0},{prop:"userStage",label:"患者当前阶段",width:"auto",fixed:!1,type:"slot",sortable:!1,show:!0},{prop:"remark",label:"患者备注",width:"auto",fixed:!1,sortable:!1,slot:{header:!0,content:"接诊台患者资料处添加的备注",placement:"top"},show:!0},{prop:"userRemark",label:"用户备注",type:"slot",slot:{header:!0,content:"接诊台用户资料处添加的备注",placement:"top"},width:"auto",fixed:!1,sortable:!1,show:!0},{prop:"servicePackage",label:"当前服务套餐",type:"slot",widths:"170",fixed:!1,sortable:!1,show:!0},{prop:"serviceTime",label:"当前套餐服务时间",type:"slot",widths:"190",fixed:!1,sortable:!1,show:!0}]}},"9d7e0":function(e,t,a){},af7d:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var r=a("92fc"),n=a("8722");function o(e){return r[e]}function s(e,t){return n[e][t]}},f8b7:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"i",(function(){return o})),a.d(t,"h",(function(){return s})),a.d(t,"k",(function(){return u})),a.d(t,"l",(function(){return l})),a.d(t,"d",(function(){return i})),a.d(t,"f",(function(){return c})),a.d(t,"e",(function(){return d})),a.d(t,"j",(function(){return h})),a.d(t,"g",(function(){return m})),a.d(t,"c",(function(){return f})),a.d(t,"m",(function(){return p})),a.d(t,"b",(function(){return b}));var r=a("b775");function n(e){return Object(r["a"])({url:"/fd/contract/".concat(e,"/active"),method:"put"})}function o(){return Object(r["a"])({url:"order/basic/options",method:"get"})}function s(){return Object(r["a"])({url:"/order/basic/order_name/options",method:"get"})}function u(){return Object(r["a"])({url:"/order/basic/order_status/options",method:"get"})}function l(){return Object(r["a"])({url:"/order/basic/order_type/options",method:"get"})}function i(e){return Object(r["a"])({url:"/order/check_export",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/order/".concat(e,"/detail"),method:"get"})}function d(e,t){return Object(r["a"])({url:"/order/".concat(e,"/close"),method:"put",data:t})}function h(){return Object(r["a"])({url:"/order/process_numbers",method:"get"})}function m(e){return Object(r["a"])({url:"/order/list",method:"post",data:e})}function f(e,t){return Object(r["a"])({url:"/order/".concat(e,"/refund"),method:"put",data:t})}function p(e){return Object(r["a"])({url:"/order/log",method:"get",params:e})}function b(e){return Object(r["a"])({url:"/order/log",method:"post",data:e})}}}]);
//# sourceMappingURL=chunk-7c62c32c.43a32ab8.js.map