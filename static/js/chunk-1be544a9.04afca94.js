(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1be544a9"],{2349:function(e,t,r){"use strict";var i=r("eb49"),a=r.n(i);a.a},5241:function(e,t,r){},"7cdf":function(e,t,r){var i=r("5ca1");i(i.S,"Number",{isInteger:r("9c12")})},"89c2":function(e,t,r){"use strict";var i=r("5241"),a=r.n(i);a.a},"91b6":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return u}));r("7f7f"),r("386d"),r("28a5");var i=r("db72"),a=(r("96cf"),r("3b8d")),n=r("b775"),o=function(){return Object(n["a"])({url:"/oss/auth",method:"get"})},s=function(e){return Object(n["a"])({url:e+"?x-oss-process=image/info",method:"get"})},l=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,a,o,l,c,u,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.oss,a=t.key,o=t.file,l=t.onProgress,c=new FormData,c.append("OSSAccessKeyId",r.OSSAccessKeyId),c.append("success_action_status",200),c.append("policy",r.policy),c.append("Signature",r.Signature),c.append("key",a),c.append("file",o),u="https://pic1.baobaohehu.com/",e.next=11,Object(n["a"])({url:u,method:"post",headers:{"Content-Type":"multipart/form-data"},onUploadProgress:l||null,data:c});case 11:if(u+=a,!(o.type.indexOf("image")>-1)){e.next=18;break}return e.next=15,s(u);case 15:p=e.sent,e.next=27;break;case 18:if(!(o.type.indexOf("video")>-1)){e.next=22;break}p=Object(i["a"])({},o.videoMeta,{size:o.size}),e.next=27;break;case 22:if(!(o.type.indexOf("audio")>-1)){e.next=26;break}p={size:o.size,type:o.type},e.next=27;break;case 26:throw new Error("当前上传的类型不是image或者video；当前上传的类型是"+o.type);case 27:return e.abrupt("return",{url:u,meta:p});case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(e){if(!e||"string"!==typeof e)return!1;var t=e.split("").reverse().join(""),r=t.substring(0,t.search(/\./)).split("").reverse().join("");return r},u=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var i,a,n,s,u,p,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:return i=e.sent,a=i.data,n=Math.floor(99*Math.random())+1,s=(new Date).getTime(),u=c(t.name),s=s+n+"."+u,p="".concat(a.path,"/").concat(a.prefix,"/").concat(s),e.next=11,l({oss:a,key:p,file:t,onProgress:r});case 11:return m=e.sent,e.abrupt("return",m);case 13:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},"9c12":function(e,t,r){var i=r("d3f4"),a=Math.floor;e.exports=function(e){return!i(e)&&isFinite(e)&&a(e)===e}},be91:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"margin-left-20 color-576277"},[e._v(e._s(e.pageTitle))]),r("div",{staticClass:"role-form"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"120px"}},[r("role",{attrs:{"select-disable":"编辑"===e.pageAction,placeholder:"请选择"+e.pageRole,prop:"name",pageType:e.pageType,rules:[{required:!0,message:"请选择"+e.pageRole,trigger:"change"}]},on:{getRoleInfo:e.getRoleInfo},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}}),e.ruleForm.name?r("div",[r("el-form-item",{attrs:{label:"性别",prop:"gender",rules:[{required:!0,message:"请选择性别",trigger:"blur"}]}},[r("el-select",{attrs:{placeholder:e.pageRole+"性别",disabled:!0},model:{value:e.ruleForm.gender,callback:function(t){e.$set(e.ruleForm,"gender",t)},expression:"ruleForm.gender"}},e._l(e.$store.state.dictionary.genders,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"联系方式",prop:"phone",rules:[{required:!0,message:"请输入联系方式",trigger:"blur"},{validator:e.checkPhone,trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:"请输入联系方式"},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone","string"===typeof t?t.trim():t)},expression:"ruleForm.phone"}}),r("el-tooltip",{staticClass:"icon-item color-576277",attrs:{effect:"dark",content:"电话转诊等类似业务将会呼叫该联系方式",placement:"top"}},[r("i",{staticClass:"el-icon-info"})])],1),"营养师"!==e.pageRole&&"consult"!==e.pageType?r("el-form-item",{attrs:{label:"科室",prop:"department",rules:[{required:!0,message:"请选择科室",trigger:"change"}]}},[r("el-select",{attrs:{placeholder:"请选择科室"},model:{value:e.ruleForm.department,callback:function(t){e.$set(e.ruleForm,"department",t)},expression:"ruleForm.department"}},e._l(e.sectionOffice("","arr",!0),(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),"consult"===e.pageType?r("div",{staticClass:"section_box"},[r("el-form-item",{attrs:{label:"服务科室",prop:"single_ask_price_info[0].department",rules:[{required:!0,message:"请选择服务科室",trigger:"change"}]}},[r("el-select",{attrs:{placeholder:"请选择服务科室"},model:{value:e.ruleForm.single_ask_price_info[0].department,callback:function(t){e.$set(e.ruleForm.single_ask_price_info[0],"department",t)},expression:"ruleForm.single_ask_price_info[0].department"}},e._l(e.sectionOffice("","arr"),(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"图文问诊单价",prop:"single_ask_price_info[0].price",rules:[{required:!0,message:"请填写图文问诊单价，保留两位小数",trigger:"change"}]}},[r("el-input",{attrs:{placeholder:"请填写图文问诊单价，保留两位小数"},on:{input:function(t){return e.setNumber(t,0)},change:function(t){return e.toFixedNum(t,0)}},model:{value:e.ruleForm.single_ask_price_info[0].price,callback:function(t){e.$set(e.ruleForm.single_ask_price_info[0],"price","string"===typeof t?t.trim():t)},expression:"ruleForm.single_ask_price_info[0].price"}})],1)],1):e._e(),e.showDepartment?r("div",{staticClass:"section_box"},[r("i",{staticClass:"el-icon-close close_icon",on:{click:e.removeDepartment}}),"consult"===e.pageType?r("el-form-item",{attrs:{label:"服务科室",prop:"single_ask_price_info[1].department",rules:[{required:!0,message:"请选择服务科室",trigger:"change"}]}},[r("el-select",{attrs:{placeholder:"请选择科室"},model:{value:e.ruleForm.single_ask_price_info[1].department,callback:function(t){e.$set(e.ruleForm.single_ask_price_info[1],"department",t)},expression:"ruleForm.single_ask_price_info[1].department"}},e._l(e.sectionOffice("","arr"),(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),"营养师"!==e.pageRole||"consult"===e.pageType?r("el-form-item",{attrs:{label:"图文问诊单价",prop:"single_ask_price_info[1].price",rules:[{required:!0,message:"请填写图文问诊单价，保留两位小数",trigger:"change"}]}},[r("el-input",{attrs:{placeholder:"请填写图文问诊单价，保留两位小数"},on:{input:function(t){return e.setNumber(t,1)},change:function(t){return e.toFixedNum(t,1)}},model:{value:e.ruleForm.single_ask_price_info[1].price,callback:function(t){e.$set(e.ruleForm.single_ask_price_info[1],"price","string"===typeof t?t.trim():t)},expression:"ruleForm.single_ask_price_info[1].price"}})],1):e._e()],1):e._e(),"consult"!==e.pageType||e.showDepartment?e._e():r("el-form-item",[r("el-button",{attrs:{type:"primary",plain:""},on:{click:e.addDepartment}},[e._v("添加服务科室")])],1),"consult"!==e.pageType?r("el-form-item",{attrs:{label:"服务上限",prop:"limit",rules:[{required:!0,message:"请输入服务上限",trigger:"blur"}]}},[r("el-input-number",{attrs:{min:e.ruleForm.fd_resource_curr},model:{value:e.ruleForm.limit,callback:function(t){e.$set(e.ruleForm,"limit",t)},expression:"ruleForm.limit"}}),r("el-tooltip",{staticClass:"item color-576277",attrs:{effect:"dark",content:"请输入正整数，服务上限值不可低于当前已占用的服务资源:"+e.ruleForm.limit,placement:"top"}},[r("span",[e._v("\n                \n              "),r("i",{staticClass:"el-icon-info"})])])],1):e._e(),r("el-form-item",{attrs:{label:"头像",prop:"imageUrl",rules:[{required:!0,message:"请上传头像",trigger:"change"}]}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","show-file-list":!1,"on-success":e.handleAvatarSuccess,"http-request":e.uploadFunc,"before-upload":e.beforeAvatarUpload}},[e.ruleForm.imageUrl?r("img",{staticClass:"avatar",attrs:{src:e.ruleForm.imageUrl}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),r("div",{staticClass:"el-upload__tip tips",attrs:{slot:"tip"},slot:"tip"},[e._v("\n              图片格式支持：BMP、JPEG、JPG、PNG，大小不超过2M\n              上传的头像将在小程序展示，请慎重上传！\n              为保证美观，请上传长宽相等的图片\n            ")])])],1),r("el-form-item",{attrs:{label:"职业经历",prop:"desc",rules:[{required:!0,message:"请输入职业经历",trigger:"blur"}]}},[r("el-input",{attrs:{type:"textarea",placeholder:"请填写成员职业经历，填写完成的信息将在小程序展示，请慎重填写！"},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc","string"===typeof t?t.trim():t)},expression:"ruleForm.desc"}})],1),r("el-form-item",{attrs:{prop:"skill",label:"专业擅长",rules:[{required:!0,message:"请输入成员擅长",trigger:"blur"}]}},[r("el-input",{attrs:{type:"textarea",placeholder:"请填写成员专业擅长，填写完成的信息将在小程序展示，请慎重填写！"},model:{value:e.ruleForm.skill,callback:function(t){e.$set(e.ruleForm,"skill","string"===typeof t?t.trim():t)},expression:"ruleForm.skill"}})],1)],1):e._e(),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("确认"+e._s(this.pageAction))])],1)],1)],1),r("el-dialog",{attrs:{title:e.pageRole+"信息确认",visible:e.dialogVisible,width:"600px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("div",{staticClass:"confirm",staticStyle:{overflow:"auto","max-height":"500px"}},[e._l(e.confrimItem,(function(t,i){return r("div",{key:t.label+i},[t.show?r("div",{staticClass:"confirm__item"},[t.label?r("div",{staticClass:"confirm__item--label"},[e._v("\n            "+e._s(t.label)+"：\n          ")]):e._e(),r("div",{staticClass:"confirm__item--content",domProps:{innerHTML:e._s(t.html)}},[e._v("\n            "+e._s(t.html)+"\n          ")])]):e._e()])})),"编辑"===e.pageAction?r("div",{staticClass:"confirm__item"},[r("div",{staticClass:"confirm__item--label"},[r("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("修改原因：\n        ")]),r("div",{staticClass:"confirm__item--content"},[r("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.editReason,callback:function(t){e.editReason=t},expression:"editReason"}})],1)]):e._e(),r("div",{staticClass:"tips margin-left-20"},[e._v("\n        提交的部分信息将展示在小程序并影响业务，请确保信息的准确性!\n      ")])],2),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("div",{staticStyle:{"text-align":"center"}},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("返回修改")]),r("el-button",{attrs:{type:"primary"},on:{click:e.confirmForm}},[e._v("确认"+e._s(this.pageAction))])],1)])])],1)},a=[],n=(r("96cf"),r("3b8d")),o=(r("7f7f"),r("c5f6"),r("7cdf"),r("2b0e")),s=r("91b6"),l=r("0680"),c=r("8975"),u=r("bb80"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form-item",{attrs:{label:e.label,prop:e.prop,rules:e.rules}},[r("el-select",{attrs:{value:e.value,filterable:"",placeholder:e.placeholder,disabled:e.selectDisable,clearable:""},on:{change:e.onValueChange}},e._l(e.options,(function(t){return r("el-option",{key:t._id,attrs:{value:t._id,label:t.name}},[e._v(e._s(t.name))])})),1)],1)},m=[],f=(r("7514"),{data:function(){return{optionValue:"",options:[]}},props:{selectDisable:{type:Boolean,default:!1},value:{type:String,default:""},moduleName:{type:String,default:"医生"},label:{type:String,default:"姓名"},prop:{type:String,default:""},rules:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"请选择"},pageType:{type:String,default:""}},watch:{value:function(e){this.optionValue=e}},created:function(){this.getSupervisors()},methods:{getSupervisors:function(){var e=this,t="consult"===this.pageType?u["i"]:u["f"];t().then((function(t){e.options=t.data.list}))},onValueChange:function(e){this.$emit("input",e),this.$emit("getRoleInfo",this.options.find((function(t){return t._id===e})))}}}),d=f,g=r("2877"),h=Object(g["a"])(d,p,m,!1,null,null,null),_=h.exports,b=r("2ef0"),v=r.n(b),F=o["default"].filter("gender"),k={components:{Role:_},data:function(){var e=function(e,t,r){var i=/^1(3|4|5|6|7|8|9)\d{9}$/;if(!t)return r(new Error("电话号码不能为空"));setTimeout((function(){Number.isInteger(+t)?i.test(t)?r():r(new Error("电话号码格式不正确")):r(new Error("请输入数字值"))}),100)};return{confrimItem:[],editReason:"",currentId:"",roleName:"",checkPhone:e,dialogVisible:!1,uploading:!1,activeRole:"",ruleForm:{name:"",gender:0,phone:"",limit:0,imageUrl:"",single_ask_price_info:[{department:"",price:""}],department:"",desc:"",skill:"",fd_resource_curr:0},pageType:"",showDepartment:!1}},watch:{"$route.path":function(e){this.getPageType()}},created:function(){this.getPageType(),this.getProfessionalRoleById()},computed:{pageTitle:function(){return this.pageAction+this.pageRole},pageRole:function(){return Object(l["h"])(this.$route.params.role,"","")},pageAction:function(){return"new"===this.$route.params.id?"新增":"编辑"}},methods:{sectionOffice:l["d"],systemRole:l["h"],fenToYuan:c["fenToYuan"],setNumber:function(e,t){isNaN(Number(e))&&(this.ruleForm.single_ask_price_info[t].price="")},toFixedNum:function(e,t){e&&Number(e)&&(this.ruleForm.single_ask_price_info[t].price=Number(e).toFixed(2))},getConfrimItem:function(){var e=this.ruleForm,t="",r="",i=!1;"consult"===this.pageType&&(i=!0,r=e.single_ask_price_info,this.showDepartment&&(t=this.sectionOffice(r[1].department,"",!0)+"（￥"+r[1].price+"）"));var a=[{show:!0,label:"姓名",html:this.roleName||e.name},{show:!0,label:"性别",html:this.genderFilter(e.gender)},{show:!0,label:"联系方式",html:e.phone},{show:"营养师"!==this.pageRole&&!i,label:"科室",html:this.sectionOffice(e.department,"",!0)},{show:i,label:"服务科室及单价",html:i?this.sectionOffice(r[0].department,"",!0)+"（￥"+r[0].price+"）&nbsp;"+t:""},{show:!i,label:"服务上限",html:e.limit},{show:!0,label:"头像",html:'<img style="width: 50px;height: 50px;border-radius: 50%;vertical-align: middle;" src='+e.imageUrl+" />"},{show:!0,label:"职业经历",html:e.desc},{show:!0,label:"专业擅长",html:e.skill}];this.confrimItem=a},getPageType:function(){this.pageType=-1!==this.$route.path.indexOf("consultation")?"consult":"familyDoctor"},addDepartment:function(){this.ruleForm.single_ask_price_info.push({department:"",price:""}),this.showDepartment=!0},removeDepartment:function(){this.ruleForm.single_ask_price_info=v.a.remove(this.ruleForm.single_ask_price_info,(function(e,t){return!(1===t)})),this.showDepartment=!1},getRoleInfo:function(e){this.roleName=e.name,this.ruleForm.imageUrl=e.avatar,this.ruleForm.gender=e.gender,this.ruleForm.limit=e.fd_resource_curr,this.ruleForm.phone=e.mobile},handleAvatarSuccess:function(e,t){this.uploading=!1,this.$message({message:"上传成功",type:"success"})},uploadFunc:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["c"])(t.file,(function(e){}));case 2:r=e.sent,this.ruleForm.imageUrl=r.url;case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),beforeAvatarUpload:function(e){this.uploading=!0;var t=["image/png","image/jpeg","image/jpg","image/bmp"].indexOf(e.type)>=0,r=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&r},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){return e?t.showDepartment&&t.ruleForm.single_ask_price_info[0].department===t.ruleForm.single_ask_price_info[1].department?(t.$message.error("服务科室不能相同"),!1):(t.dialogVisible=!0,void t.getConfrimItem()):(console.log("error submit!!"),!1)}))},confirmForm:function(){var e=this,t={mobile:this.ruleForm.phone,fd_resource:this.ruleForm.limit,avatar:this.ruleForm.imageUrl,description:this.ruleForm.desc,expert:this.ruleForm.skill};if("营养师"!==this.pageRole&&"consult"!==this.pageType&&(t.department=this.ruleForm.department),t.bus_role=this.$route.params.role,"consult"===this.pageType&&(t.single_ask_bus_role=t.bus_role,t.single_ask_price_info=this.ruleForm.single_ask_price_info),"新增"===this.pageAction){t.id=this.ruleForm.name;var r="consult"===this.pageType?u["c"]:u["b"];r(t).then((function(t){e.$message.success("新增业务角色成功"),e.dialogVisible=!1,e.$router.back(-1)}))}else if("编辑"===this.pageAction){if(!this.editReason)return void this.$message.warning("请填写修改原因");t.update_remark=this.editReason;var i="consult"===this.pageType?u["n"]:u["l"];i(this.currentId,t).then((function(t){e.$message.success("更新业务角色成功"),e.dialogVisible=!1,e.$router.back(-1)}))}},cancelDialogFun:function(){this.getProfessionalRoleById()},genderFilter:F,getProfessionalRoleById:function(){var e=this,t=this.$route.params.id;if("new"!==t){var r="consult"===this.pageType?u["j"]:u["g"];r(t,"").then((function(t){e.currentId=t.data._id,e.ruleForm.name=t.data.name,e.ruleForm.imageUrl=t.data.avatar,e.ruleForm.gender=t.data.gender,e.ruleForm.phone=t.data.mobile,e.ruleForm.desc=t.data.description,e.ruleForm.skill=t.data.expert,e.ruleForm.department=t.data.department,e.ruleForm.limit=t.data.fd_resource,e.ruleForm.fd_resource_curr=t.data.fd_resource_curr;var r=t.data.single_ask_price_info;if(r){for(var i=0;i<r.length;i++)r[i].price=e.fenToYuan(r[i].price);e.ruleForm.single_ask_price_info=r}t.data.single_ask_price_info&&t.data.single_ask_price_info.length>1&&(e.showDepartment=!0)}))}}}},y=k,x=(r("89c2"),r("ee1f"),r("2349"),Object(g["a"])(y,i,a,!1,null,"2cdf2b38",null));t["default"]=x.exports},e890:function(e,t,r){},eb49:function(e,t,r){},ee1f:function(e,t,r){"use strict";var i=r("e890"),a=r.n(i);a.a}}]);
//# sourceMappingURL=chunk-1be544a9.04afca94.js.map