webpackJsonp([38],{F842:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("INCx"),a=i.n(r),o=(i("7+uW"),i("X2Oc")),s=i("diDo"),l={name:"curd",components:{},data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,i=new Date;i.setTime(i.getTime()-6048e5),e.$emit("pick",[i,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,i=new Date;i.setTime(i.getTime()-2592e6),e.$emit("pick",[i,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,i=new Date;i.setTime(i.getTime()-7776e6),e.$emit("pick",[i,t])}}]},time_range:[0,Date.parse(new Date+864e5)],app_list_url:"/api/vullog/list",is_report_visible:!1,is_solution_visible:!1,cronPopover:!1,cron:"",rank:0,links:[],task_type:"立即任务",url:"",md_report:"一、URL地址：\n二、发现方式：\n\n\n请尽量详细描述，保留场景/截图/重现方法等 \n\n\n三、漏洞证明：\n\n\n请在这里写POC\n\n\n",form_errors:[],cur_entity:{},add_url:"/api/vullog/add",list_url:"/api/extension/log/list",del_url:"/api/vullog/del",role_list_url:"/api/role/select",del_list:new URLSearchParams,tableData:[],select_word:"",cur_page:1,page_size:10,total:0,multipleSelection:[],editVisible:!1,createVisible:!1,vul_id:null,form:{self_rank:"1",layer:10},role_options:[{value:"__",label:"--"}],static_config:s.b}},created:function(){this.getData()},updated:function(){this.$desensitive()},computed:{colortype:function(){return this.form.self_rank>=0&&this.form.self_rank<6?"success":this.form.self_rank<11?"":this.form.self_rank<16?"danger":this.form.self_rank<=20?"warning":void 0},risklevel:function(){return this.form.self_rank>=0&&this.form.self_rank<6?"低危":this.form.self_rank<11?"中危":this.form.self_rank<16?"高危":this.form.self_rank<=20?"严重":void 0}},filters:{getDateDiff_timestamp:function(e){return Object(o.e)(e)},formatDate:function(e){var t=new Date(a()(1e3*e));return Object(o.c)(t,"yyyy-MM-dd HH:mm:ss")},statusFilter:function(e){return{0:"info",1:"success","-1":"danger"}[e]},statusNameFilter:function(e,t){return s.b[t][e]}},methods:{filterTitle:function(e){this.vul_id=e,this.getData()},statusColor:function(e){return Object(o.g)(e)},pocChange:function(e,t){this.form.vul_poc_html=t},$imgAdd:function(e,t){var i=this,r=new FormData;r.append("image",t),this.$axios({url:"/api/image/upload",method:"post",data:r,headers:{"Content-Type":"multipart/form-data"}}).then(function(t){i.$refs.poc_editor.$img2Url(e,"api/"+t.data.path)})},handleSelect:function(e){this.form.app_id=e.id},querySearchAsync:function(e,t){this.$axios.get(this.app_list_url,{params:{search:e}}).then(function(e){var i=new Array;e.data.result.map(function(e){i.push({value:e.appname,id:e.id})}),t(i)})},handleClose:function(e){this.$confirm("数据还未提交，确认关闭？").then(function(t){e()}).catch(function(e){})},getRoleList:function(){var e=this;this.$axios.get(this.role_list_url,{params:{type:0}}).then(function(t){e.role_options=t.data.result})},sortChange:function(e,t,i){this.sortcolumn=e.prop,this.sortorder=e.order,this.getData()},viewUser:function(){this.cur_entity.id?this.$router.push({name:"viewvulndetail",params:this.cur_entity}):this.$message.info("请选择数据")},checkForm:function(){if(this.form.username&&this.form.password&&this.form.repassword&&null!=this.form.enable&&this.form.password==this.form.repassword)return!0;this.form_errors=[],this.form.username||this.form_errors.push("请输入用户名"),this.form.password||this.form_errors.push("请输入密码"),this.form.repassword||this.form_errors.push("请输入重复密码"),this.form.repassword&&this.form.repassword&&this.form.username!==this.form.repassword&&this.form_errors.push("两次密码输入不一致"),this.form.enable||this.form_errors.push("请选择状态")},doCreate:function(e){var t=this;this.$axios.post(this.add_url,Object(o.h)(this.form)).then(function(e){1==e.data.status?(t.$message.success("操作成功"),t.getData()):t.$message.error("操作失败, 错误码:"+e.data.status+e.data.msg),t.createVisible=!1,t.editVisible=!1})},getData:function(){var e=this;this.$axios.get(this.list_url,{params:{search:this.select_word,page_index:this.cur_page,page_size:this.page_size,sort:this.sortcolumn,direction:this.sortorder,start:this.time_range?this.time_range[0]/1e3:null,end:this.time_range?this.time_range[1]/1e3:null,vul_id:this.vul_id}}).then(function(t){e.tableData=t.data.result,e.total=t.data.total})},handleSizeChange:function(e){this.page_size=e,this.getData()},handleCurrentChange:function(e){this.cur_page=e,this.getData()},handleCurrentChangeRow:function(e){this.cur_entity=e},search:function(){this.getData()},handleEdit:function(e,t){this.form_errors=[],this.editVisible=!0,this.form=t,delete this.form.create_time,this.form.enable=1==t.enable?"1":"0"},handleSelectionChange:function(e){this.multipleSelection=e},dataDel:function(e){var t=this,i=null;if(e)i=e;else{if(this.multipleSelection.length<=0)return void this.$message.info("未选择任何数据");this.del_list=this.multipleSelection.map(function(e){return e.id}),i=this.del_list}this.$confirm("是否确认此操作","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.post(t.del_url,Object(o.h)({id:i})).then(function(e){e.data.status>=1?(t.getData(),t.$message.success("删除成功")):t.$message.error("删除失败, 错误码: "+e.data.status)})}).catch(function(){})}}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-tickets"}),e._v(" 扩展\n      ")]),e._v(" "),i("el-breadcrumb-item",[e._v("执行日志")])],1)],1),e._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box"},[i("el-input",{staticClass:"handle-input",attrs:{size:"mini",placeholder:"请输入关键词"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search()}},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),i("el-button",{staticStyle:{float:"right"},attrs:{size:"mini"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")]),e._v(" "),i("el-date-picker",{attrs:{type:"datetimerange","value-format":"timestamp","picker-options":e.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"mini",align:"right"},model:{value:e.time_range,callback:function(t){e.time_range=t},expression:"time_range"}}),e._v(" "),i("div",{staticStyle:{float:"right"}})],1),e._v(" "),i("el-table",{attrs:{data:e.tableData,border:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange,"current-change":e.handleCurrentChangeRow,"sort-change":e.sortChange}},[i("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"30"}}),e._v(" "),i("el-table-column",{attrs:{prop:"app_name",label:"应用","min-width":"100"}}),e._v(" "),i("el-table-column",{attrs:{prop:"op_username",label:"操作人","min-width":"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"insight_sensitive"},[e._v("["+e._s(t.row.op_username)+"]")])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"",label:" 时间","min-width":"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tooltip",{attrs:{effect:"light",content:e._f("formatDate")(t.row.create_time),placement:"right"}},[i("span",[e._v(e._s(e._f("getDateDiff_timestamp")(t.row.create_time)))])])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"title",label:"名称","min-width":"150"}}),e._v(" "),i("el-table-column",{attrs:{prop:"is_auto",label:"类型","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"primary-title"},[e._v(e._s(t.row.is_auto?"手动操作":"计划任务"))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"content",label:"内容","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"insight_sensitive"},[e._v("["+e._s(t.row.content)+"]")])]}}])})],1),e._v(" "),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{"current-page":e.cur_page,"page-sizes":[10,20,50,100],"page-size":e.page_size,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.cur_page=t},"update:current-page":function(t){e.cur_page=t},"update:pageSize":function(t){e.page_size=t},"update:page-size":function(t){e.page_size=t},"update:total":function(t){e.total=t}}})],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"新增漏洞",visible:e.createVisible,width:"80%","before-close":e.handleClose},on:{"update:visible":function(t){e.createVisible=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"漏洞标题"}},[i("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{clearable:"",placeholder:"请输入漏洞名称",size:"mini",type:"text",name:"task_name"},model:{value:e.form.vul_name,callback:function(t){e.$set(e.form,"vul_name",t)},expression:"form.vul_name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"关联应用"}},[i("el-autocomplete",{attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"请输入内容"},on:{select:e.handleSelect},model:{value:e.form.app_id_name,callback:function(t){e.$set(e.form,"app_id_name",t)},expression:"form.app_id_name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"漏洞层面"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:e.form.layer,callback:function(t){e.$set(e.form,"layer",t)},expression:"form.layer"}},e._l(e.static_config.VUL_LAYER,function(t,r){return i("el-radio-button",{key:t,attrs:{label:r}},[e._v(e._s(t))])}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"漏洞类型"}},[i("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.form.vul_type,callback:function(t){e.$set(e.form,"vul_type",t)},expression:"form.vul_type"}},e._l(e.static_config.VUL_TYPE,function(e,t){return i("el-option",{key:t,attrs:{label:e,value:t}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"Rank值"}},[i("el-input-number",{attrs:{"controls-position":"right",min:0,max:20,size:"mini"},model:{value:e.form.self_rank,callback:function(t){e.$set(e.form,"self_rank",t)},expression:"form.self_rank"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"风险等级"}},[i("el-tag",{attrs:{type:e.colortype,size:"medium"}},[e._v(e._s(e.risklevel))])],1),e._v(" "),i("el-form-item",{attrs:{label:"漏洞来源"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:e.form.vul_source,callback:function(t){e.$set(e.form,"vul_source",t)},expression:"form.vul_source"}},e._l(e.static_config.VUL_SOURCE,function(t,r){return i("el-radio-button",{key:t,attrs:{label:r}},[e._v(e._s(t))])}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"选项"}},[i("el-checkbox",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"显示漏洞证明编辑器",expression:"'显示漏洞证明编辑器'"}],model:{value:e.is_report_visible,callback:function(t){e.is_report_visible=t},expression:"is_report_visible"}},[e._v("漏洞证明")]),e._v(" "),i("el-checkbox",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"显示解决方案编辑器",expression:"'显示解决方案编辑器'"}],model:{value:e.is_solution_visible,callback:function(t){e.is_solution_visible=t},expression:"is_solution_visible"}},[e._v("解决方案")])],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.is_report_visible,expression:"is_report_visible"}],attrs:{label:"漏洞证明"}},[i("mavon-editor",{ref:"poc_editor",on:{change:e.pocChange,imgAdd:e.$imgAdd},model:{value:e.form.vul_poc,callback:function(t){e.$set(e.form,"vul_poc",t)},expression:"form.vul_poc"}})],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.is_solution_visible,expression:"is_solution_visible"}],attrs:{label:"解决方案"}},[i("mavon-editor",{on:{imgAdd:e.$imgAdd},model:{value:e.form.vul_solution,callback:function(t){e.$set(e.form,"vul_solution",t)},expression:"form.vul_solution"}})],1),e._v(" "),e.form_errors.length?i("el-form-item",{staticStyle:{color:"#f78989"}},[i("b",[e._v("出现以下问题 :")]),e._v(" "),i("ul",e._l(e.form_errors,function(t){return i("li",{key:t},[e._v(e._s(t))])}),0)]):e._e()],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.doCreate()}}},[e._v("创建")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"编辑用户",visible:e.editVisible,width:"80%"},on:{"update:visible":function(t){e.editVisible=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"漏洞标题"}},[i("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{clearable:"",placeholder:"请输入漏洞名称",size:"mini",type:"text",name:"task_name"},model:{value:e.form.vul_name,callback:function(t){e.$set(e.form,"vul_name",t)},expression:"form.vul_name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"关联应用"}},[i("el-autocomplete",{attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"请输入内容"},on:{select:e.handleSelect},model:{value:e.form.app_id_name,callback:function(t){e.$set(e.form,"app_id_name",t)},expression:"form.app_id_name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"漏洞层面"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:e.form.layer,callback:function(t){e.$set(e.form,"layer",t)},expression:"form.layer"}},e._l(e.static_config.VUL_LAYER,function(t,r){return i("el-radio-button",{key:t,attrs:{label:r}},[e._v(e._s(t))])}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"漏洞类型"}},[i("el-select",{attrs:{placeholder:"请选择",size:"mini",clearable:""},model:{value:e.form.vul_type,callback:function(t){e.$set(e.form,"vul_type",t)},expression:"form.vul_type"}},e._l(e.static_config.VUL_TYPE,function(e,t){return i("el-option",{key:t,attrs:{label:e,value:t}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"Rank值"}},[i("el-input-number",{attrs:{"controls-position":"right",min:0,max:20,size:"mini"},model:{value:e.form.self_rank,callback:function(t){e.$set(e.form,"self_rank",t)},expression:"form.self_rank"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"风险等级"}},[i("el-tag",{attrs:{type:e.colortype,size:"medium"}},[e._v(e._s(e.risklevel))])],1),e._v(" "),i("el-form-item",{attrs:{label:"漏洞来源"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:e.form.vul_source,callback:function(t){e.$set(e.form,"vul_source",t)},expression:"form.vul_source"}},e._l(e.static_config.VUL_SOURCE,function(t,r){return i("el-radio-button",{key:t,attrs:{label:r}},[e._v(e._s(t))])}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"选项"}},[i("el-checkbox",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"显示漏洞证明编辑器",expression:"'显示漏洞证明编辑器'"}],model:{value:e.is_report_visible,callback:function(t){e.is_report_visible=t},expression:"is_report_visible"}},[e._v("漏洞证明")]),e._v(" "),i("el-checkbox",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"显示解决方案编辑器",expression:"'显示解决方案编辑器'"}],model:{value:e.is_solution_visible,callback:function(t){e.is_solution_visible=t},expression:"is_solution_visible"}},[e._v("解决方案")])],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.is_report_visible,expression:"is_report_visible"}],attrs:{label:"漏洞证明"}},[i("mavon-editor",{ref:"poc_editor",on:{imgAdd:e.$imgAdd},model:{value:e.form.vul_poc,callback:function(t){e.$set(e.form,"vul_poc",t)},expression:"form.vul_poc"}})],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.is_solution_visible,expression:"is_solution_visible"}],attrs:{label:"解决方案"}},[i("mavon-editor",{on:{imgAdd:e.$imgAdd},model:{value:e.form.vul_solution,callback:function(t){e.$set(e.form,"vul_solution",t)},expression:"form.vul_solution"}})],1),e._v(" "),e.form_errors.length?i("el-form-item",{staticStyle:{color:"#f78989"}},[i("b",[e._v("出现以下问题 :")]),e._v(" "),i("ul",e._l(e.form_errors,function(t){return i("li",{key:t},[e._v(e._s(t))])}),0)]):e._e()],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.doCreate()}}},[e._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var c=i("VU/8")(l,n,!1,function(e){i("Jv2t")},"data-v-122a0cbe",null);t.default=c.exports},Jv2t:function(e,t){}});