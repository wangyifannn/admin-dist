(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a74ead36"],{ca7e:function(e,t,r){"use strict";var n=r("bc3a"),o=r.n(n),a=r("5c96"),l=r("a18c"),s=r("4360"),i=r("5f87"),u=o.a.create({baseURL:"https://api-crm.baobaohehu.com",timeout:2e5});u.interceptors.request.use((function(e){return s["a"].getters.token&&(e.headers["Authorization"]=Object(i["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){var t=e.config,r=e.data;return t.url.indexOf(t.baseURL)>-1&&1e4!==r.code?40001===r.code?(l["c"].push("/404"),Promise.reject()):(Object(a["Message"])({message:r.message||"Error",type:"error",duration:5e3}),401===r.code&&s["a"].dispatch("user/resetToken").then((function(){location.reload()})),Promise.reject(new Error(r.message||"Error"))):r}),(function(e){return console.log("err"+e),Object(a["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var c=u;function p(e){return c({url:"/corp/wechat/helper",method:"get",params:e})}function f(e){return c({url:"/corp/admin",method:"get",params:e})}function d(e){return c({url:"/corp/helper",method:"get",params:e})}function m(e){return c({url:"/corp/helper",method:"post",data:e})}function h(e,t){return c({url:"/corp/helper/"+e,method:"put",data:t})}function w(e,t){return c({url:"/corp/helper/change/"+e,method:"put",data:t})}function b(e){return c({url:"/corp/helper/"+e,method:"delete"})}function g(e){return c({url:"/corp/source_channel",method:"get",params:e})}function v(e){return c({url:"/corp/source_channel",method:"post",data:e})}function F(e,t){return c({url:"/corp/source_channel/"+e,method:"put",data:t})}function y(e){return c({url:"/corp/source_channel/"+e,method:"delete"})}function S(e){return c({url:"/corp/user_type",method:"get",params:e})}function _(e){return c({url:"/corp/user_type",method:"post",data:e})}function x(e,t){return c({url:"/corp/user_type/"+e,method:"put",data:t})}function k(e){return c({url:"/corp/user_type/"+e,method:"delete"})}function C(e){return c({url:"/corp/user_visit",method:"get",params:e})}function L(e){return c({url:"/corp/user_visit",method:"post",data:e})}function j(e,t){return c({url:"/corp/user_visit/"+e,method:"put",data:t})}function O(e){return c({url:"/corp/user_visit/"+e,method:"delete"})}function z(e){return c({url:"/corp/user_visit/status/"+e,method:"put"})}r.d(t,"u",(function(){return p})),r.d(t,"n",(function(){return f})),r.d(t,"t",(function(){return d})),r.d(t,"d",(function(){return m})),r.d(t,"C",(function(){return h})),r.d(t,"H",(function(){return w})),r.d(t,"i",(function(){return b})),r.d(t,"o",(function(){return g})),r.d(t,"b",(function(){return v})),r.d(t,"F",(function(){return F})),r.d(t,"g",(function(){return y})),r.d(t,"B",(function(){return S})),r.d(t,"f",(function(){return _})),r.d(t,"I",(function(){return x})),r.d(t,"l",(function(){return k})),r.d(t,"r",(function(){return C})),r.d(t,"c",(function(){return L})),r.d(t,"G",(function(){return j})),r.d(t,"h",(function(){return O})),r.d(t,"E",(function(){return z})),r.d(t,"q",(function(){return $})),r.d(t,"z",(function(){return I})),r.d(t,"s",(function(){return R})),r.d(t,"A",(function(){return T})),r.d(t,"v",(function(){return P})),r.d(t,"a",(function(){return q})),r.d(t,"D",(function(){return E})),r.d(t,"x",(function(){return A})),r.d(t,"k",(function(){return G})),r.d(t,"y",(function(){return J})),r.d(t,"w",(function(){return M})),r.d(t,"p",(function(){return U})),r.d(t,"e",(function(){return B})),r.d(t,"j",(function(){return D})),r.d(t,"m",(function(){return H}));var $=function(e){return c({url:"corp/user",method:"get",params:e})},I=function(e){return c({url:"corp/admin/crm_user/"+e,method:"get"})},R=function(e){return c({url:"corp/follow_up_log",method:"get",params:e})},T=function(e){return c({url:"corp/source_channel",method:"get",params:e})},P=function(e){return c({url:"corp/admin/order/"+e,method:"get"})},q=function(e){return c({url:"corp/admin/scene",method:"post",data:e})},E=function(e,t){return c({url:"corp/admin/scene/"+e,method:"put",data:t})},A=function(e){return c({url:"corp/admin/scene/detail/"+e,method:"get"})},G=function(e){return c({url:"corp/admin/scene/"+e,method:"delete"})},J=function(e){return c({url:"corp/admin/scene",method:"get",params:e})},M=function(e){return c({url:"corp/admin/scene/qrcode/"+e,method:"get"})},U=function(e){return c({url:"corp/admin/wx_qrcode",method:"get",params:e})},B=function(e){return c({url:"corp/admin/wx_qrcode",method:"post",data:e})},D=function(e){return c({url:"corp/admin/wx_qrcode/"+e,method:"delete"})},H=function(e){return c({url:"corp/admin/wx_qrcode/download",method:"get",params:e})}},dc44:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"follow-operation"},[r("el-form",{ref:"followSearch",attrs:{"label-position":"left",model:e.followSearch,inline:""}},[r("el-form-item",{staticClass:"search-item",attrs:{label:"跟进类型"}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择跟进类型"},model:{value:e.followSearch.type,callback:function(t){e.$set(e.followSearch,"type",t)},expression:"followSearch.type"}},e._l(e.typeList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{staticClass:"search-item",attrs:{label:"跟进动作名称"}},[r("el-input",{attrs:{clearable:"",placeholder:"请输入跟进动作名称"},model:{value:e.followSearch.name,callback:function(t){e.$set(e.followSearch,"name",t)},expression:"followSearch.name"}})],1),r("el-form-item",{staticClass:"search-item",attrs:{label:"状态"}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择状态"},model:{value:e.followSearch.status,callback:function(t){e.$set(e.followSearch,"status",t)},expression:"followSearch.status"}},e._l(e.statusList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{staticClass:"search-item",attrs:{label:"创建人"}},[r("el-input",{attrs:{clearable:"",placeholder:"请输入创建人"},model:{value:e.followSearch.founder,callback:function(t){e.$set(e.followSearch,"founder",t)},expression:"followSearch.founder"}})],1),r("el-form-item",{staticStyle:{float:"right"}},[r("el-button",{staticClass:"select-btn",attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")]),r("el-button",{staticClass:"select-btn",attrs:{type:"primary"},on:{click:e.resetForm}},[e._v("重置")])],1)],1),r("div",{staticClass:"list"},[r("div",{staticClass:"title"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.setFollowOperation(1)}}},[e._v("新增跟进动作")])],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,border:"","empty-text":e.hasListInfo}},[r("el-table-column",{attrs:{fixed:"",prop:"num",label:"序号",width:"100",align:"center"}}),r("el-table-column",{attrs:{prop:"name",label:"跟进动作名称",align:"center"}}),r("el-table-column",{attrs:{prop:"type",label:"跟进类型",align:"center"}}),r("el-table-column",{attrs:{prop:"status",label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("el-switch",{on:{change:function(t){return e.setStatus(n.id)}},model:{value:n.status,callback:function(t){e.$set(n,"status",t)},expression:"row.status"}})]}}])}),r("el-table-column",{attrs:{prop:"founder",label:"创建人",align:"center"}}),r("el-table-column",{attrs:{prop:"created_at",label:"创建时间",align:"center"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.setFollowOperation(2,t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){e.rowInfo=t.row,e.delShow=!0}}},[e._v("删除")])]}}])})],1),r("div",{staticClass:"pagination"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),r("el-dialog",{attrs:{title:"删除提示",visible:e.delShow,width:"400px",center:"",top:"30vh"},on:{"update:visible":function(t){e.delShow=t}}},[r("p",{staticClass:"center"},[e._v("\n      删除后，该跟进动作将不存在，\n      "),r("br"),e._v("请确定是否删除？\n    ")]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.delConfirm}},[e._v("确 定")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.delShow=!1}}},[e._v("取 消")])],1)]),r("el-dialog",{attrs:{title:e.followTitle,visible:e.followShow,width:"400px",center:"",top:"30vh"},on:{"update:visible":function(t){e.followShow=t}}},[r("el-form",{ref:"setFollowForm",staticClass:"demo-ruleForm",attrs:{model:e.setFollowForm,"label-width":"110px"}},[r("el-form-item",{attrs:{label:"跟进类型",prop:"type",rules:e.followShow?[{required:!0,message:"请选择",target:"blur"}]:{}}},[r("el-select",{attrs:{filterable:"","allow-create":"",clearable:"",placeholder:"请选择跟进类型"},model:{value:e.setFollowForm.type,callback:function(t){e.$set(e.setFollowForm,"type",t)},expression:"setFollowForm.type"}},e._l(e.typeList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"跟进动作名称",prop:"name",rules:e.followShow?[{required:!0,message:"请输入跟进动作名称",target:"blur"}]:{}}},[r("el-input",{attrs:{clearable:"",placeholder:"请输入跟进动作名称"},model:{value:e.setFollowForm.name,callback:function(t){e.$set(e.setFollowForm,"name",t)},expression:"setFollowForm.name"}})],1),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{type:"texarea",clearable:"",placeholder:"请输入相关描述"},model:{value:e.setFollowForm.description,callback:function(t){e.$set(e.setFollowForm,"description",t)},expression:"setFollowForm.description"}})],1),r("div",{staticStyle:{"text-align":"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.inputFormSubmit("setFollowForm")}}},[e._v("\n          "+e._s(e.btnText)+"\n        ")])],1)],1)],1)],1)},o=[],a=(r("7f7f"),r("96cf"),r("3b8d")),l=r("ca7e"),s={data:function(){return{isOpen:!1,list:[],currentPage:1,delShow:!1,followTitle:"",btnText:"",followShow:!1,pageSize:10,count:0,rowInfo:"",hasListInfo:"暂无数据",singleList:[],createNameList:[],followSearch:{type:"",name:"",status:"",founder:""},typeList:[{value:"first",label:"首次跟进"},{value:"take_care",label:"回访"},{value:"visit",label:"日常关心"},{value:"announcement",label:"活动通知"}],statusList:[{value:"online",label:"已启用"},{value:"offline",label:"已禁用"}],setFollowForm:{type:"",name:"",description:""}}},computed:{getFollowTypeCh:function(){return function(e){return"first"===e?"首次跟进":"take_care"===e?"回访":"visit"===e?"日常关心":"announcement"===e?"活动通知":void 0}}},watch:{followShow:function(e){e||(this.setFollowForm={type:"",name:"",description:""})}},created:function(){this.getFollowList()},methods:{onSubmit:function(){this.currentPage=1,this.getFollowList(this.followSearch)},handleSizeChange:function(e){this.pageSize=e,this.getFollowList(this.followSearch)},handleCurrentChange:function(e){this.currentPage=e,this.getFollowList(this.followSearch)},resetForm:function(){this.followSearch={type:"",name:"",status:"",founder:""},this.getFollowList()},delConfirm:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["h"])(this.rowInfo.id);case 2:t=e.sent,r=t.code,n=t.message,1e4===r&&(this.$message.success(n),this.getFollowList(this.followSearch),this.delShow=!1);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setFollowOperation:function(e,t){1===e?(this.followTitle="新增跟进动作",this.btnText="确认新增"):2===e&&(this.followTitle="编辑跟进动作",this.btnText="确认编辑",this.setFollowForm={type:t.typeEn,name:t.name,description:"/"===t.description?"":t.description}),this.rowInfo=t||{},this.rowInfo.num=e,this.followShow=!0},inputFormSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;1===t.rowInfo.num&&t.createFollow(),2===t.rowInfo.num&&t.updateFollow()}))},getFollowList:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,n,o,a,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={pageSize:this.pageSize,page:this.currentPage},t?(t.name&&(r.name=t.name),t.type&&(r.type=t.type),t.status&&(r.status=t.status),t.founder&&(r.creator_name=t.founder),this.hasListInfo="暂无数据，请重新输入关键词"):this.hasListInfo="暂无数据",e.next=4,Object(l["r"])(r);case 4:n=e.sent,o=n.data,a=n.code,1e4===a&&(this.count=o.count,this.list=o.list.map((function(e,t){return{num:(s.currentPage-1)*s.pageSize+t+1,id:e._id,name:e.name,type:s.getFollowTypeCh(e.type),typeEn:e.type,status:"online"===e.status,founder:e.creator_name,created_at:e.created_at?s.formatTime(e.created_at):"-",description:e.describe||"/"}})));case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),createFollow:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={type:this.setFollowForm.type,name:this.setFollowForm.name,describe:this.setFollowForm.description||void 0},e.next=3,Object(l["c"])(t);case 3:r=e.sent,n=r.code,o=r.message,1e4===n&&(this.$message.success(o),this.getFollowList(this.followSearch),this.followShow=!1);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateFollow:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={type:this.setFollowForm.type,name:this.setFollowForm.name,describe:this.setFollowForm.description||void 0},e.next=3,Object(l["G"])(this.rowInfo.id,t);case 3:r=e.sent,n=r.code,o=r.message,1e4===n&&(this.$message.success(o),this.getFollowList(this.followSearch),this.followShow=!1);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setStatus:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["E"])(t);case 2:r=e.sent,n=r.code,o=r.message,1e4===n&&(this.$message.success(o),this.getFollowList(this.followSearch));case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},i=s,u=(r("e22f"),r("2877")),c=Object(u["a"])(i,n,o,!1,null,"5db6b926",null);t["default"]=c.exports},e22f:function(e,t,r){"use strict";var n=r("f6f3"),o=r.n(n);o.a},f6f3:function(e,t,r){}}]);
//# sourceMappingURL=chunk-a74ead36.9ccefaf4.js.map