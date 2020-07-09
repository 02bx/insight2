webpackJsonp([2],{USV7:function(t,a){},UqbM:function(t,a){},WBHA:function(t,a,e){var r;r=function(){return function(t){function a(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,a),s.l=!0,s.exports}var e={};return a.m=t,a.c=e,a.i=function(t){return t},a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},a.p="/dist/",a(a.s=2)}([function(t,a,e){var r=e(4)(e(1),e(5),null,null);t.exports=r.exports},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e(3);a.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,a,e,r){return e*(1-Math.pow(2,-10*t/r))*1024/1023+a}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,r.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,r.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,r.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,r.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var a=t-this.startTime;this.remaining=this.localDuration-a,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(a,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(a,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(a/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(a/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),a<this.localDuration?this.rAF=(0,r.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var a=(t+="").split("."),e=a[0],r=a.length>1?this.decimal+a[1]:"",s=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;s.test(e);)e=e.replace(s,"$1"+this.separator+"$2");return this.prefix+e+r+this.suffix}},destroyed:function(){(0,r.cancelAnimationFrame)(this.rAF)}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(e(0));a.default=r.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",r.default)},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=0,s="webkit moz ms o".split(" "),o=void 0,i=void 0;if("undefined"==typeof window)a.requestAnimationFrame=o=function(){},a.cancelAnimationFrame=i=function(){};else{a.requestAnimationFrame=o=window.requestAnimationFrame,a.cancelAnimationFrame=i=window.cancelAnimationFrame;for(var n=void 0,l=0;l<s.length&&(!o||!i);l++)n=s[l],a.requestAnimationFrame=o=o||window[n+"RequestAnimationFrame"],a.cancelAnimationFrame=i=i||window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"];o&&i||(a.requestAnimationFrame=o=function(t){var a=(new Date).getTime(),e=Math.max(0,16-(a-r)),s=window.setTimeout(function(){t(a+e)},e);return r=a+e,s},a.cancelAnimationFrame=i=function(t){window.clearTimeout(t)})}a.requestAnimationFrame=o,a.cancelAnimationFrame=i},function(t,a){t.exports=function(t,a,e,r){var s,o=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(s=t,o=t.default);var n="function"==typeof o?o.options:o;if(a&&(n.render=a.render,n.staticRenderFns=a.staticRenderFns),e&&(n._scopeId=e),r){var l=Object.create(n.computed||null);Object.keys(r).forEach(function(t){var a=r[t];l[t]=function(){return a}}),n.computed=l}return{esModule:s,exports:o,options:n}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},t.exports=r()},a52u:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("mvHQ"),s=e.n(r),o=e("INCx"),i=e.n(o),n=e("WBHA"),l=e.n(n),d={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},u={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"v-spinner"},[a("div",{staticClass:"v-pulse v-pulse1",style:[this.spinnerStyle,this.spinnerDelay1]}),a("div",{staticClass:"v-pulse v-pulse2",style:[this.spinnerStyle,this.spinnerDelay2]}),a("div",{staticClass:"v-pulse v-pulse3",style:[this.spinnerStyle,this.spinnerDelay3]})])},staticRenderFns:[]};var c,_,p=e("VU/8")(d,u,!1,function(t){e("USV7")},null,null).exports,h=e("X2Oc"),m=e("bOdI"),f=e.n(m),v=e("XLwt"),y=e.n(v);function b(t,a){switch(t){case"hot_data":return a&&(z.calendar[0].range=a.range,z.series[0].data=a.data),z;case"vul_ratio_data":return a&&(A.series[0].data=a),A;case"vul_trend_data":return a&&(F.xAxis.data=a.x,F.series[0].data=a.y),F;case"vul_source_data":return a&&(k.series[0].data=a.data),k;case"vul_type_top_data":return a&&(O.xAxis.data=a.xAxis_data,O.series[0].data=a.series_data),O;case"asset_generation_data":return a&&(T.title.text="应用("+a.total+")漏洞数量",T.xAxis.data=a.x_data,T.series[0].data=a.series_data),T;case"asset_overdue_sovled_data":return a&&(L.title.text="应用("+a.total+")逾期已修复漏洞数量",L.xAxis.data=a.x_data,L.series[0].data=a.series_data),L;case"asset_overdue_unsovled_data":return a&&(q.title.text="应用("+a.total+")逾期未修复漏洞数量",q.xAxis.data=a.x_data,q.series[0].data=a.series_data),q;case"asset_ratio_data":return a&&(M.series[0].data=a.data),M;case"vul_type_trend_line_data":return a&&(D.legend.data=a.legend_data,D.xAxis.data=a.xAxis_data,D.series=a.series),D;case"rank_distribution_data":return a&&(C.dataset.source=a),C}}for(var g=+new Date(1968,9,3),x=[],w=[100*Math.random()],S=1;S<2e4;S++){var V=new Date(g+=864e5);x.push([V.getFullYear(),V.getMonth()+1,V.getDate()].join("/")),w.push(Math.round(20*(Math.random()-.5)+w[S-1]))}!function(t){t=t||"2017";for(var a=+y.a.number.parseDate(t+"-01-01"),e=+y.a.number.parseDate(+t+1+"-01-01"),r=[],s=a;s<e;s+=864e5)r.push([y.a.format.formatTime("yyyy-MM-dd",s),Math.floor(1e4*Math.random())])}(2019);var A={title:{text:"漏洞状态比例",left:"center",textStyle:{color:"#000"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[(c={name:"漏洞状态",type:"pie",radius:["40%"," 45%"],avoidLabelOverlap:!0,label:{normal:{show:!1},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{length:1}}},f()(c,"label",{normal:{textStyle:{}}}),f()(c,"itemStyle",{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}),f()(c,"data",[{name:"待审核",value:1978}]),c)]},z={title:{top:10,text:"风险处理概览",left:"center",textStyle:{color:"#000"}},tooltip:{trigger:"item"},calendar:[{top:100,left:"center",range:["2019-04-01","2019-06-30"],cellSize:20,width:"75%",dayLabel:{firstDay:1,nameMap:"cn",textStyle:{fontSize:14,color:"#999"}},monthLabel:{nameMap:"cn",margin:15,textStyle:{fontSize:14,color:"#999"}},splitLine:{show:!0,lineStyle:{color:"#fff",width:4,type:"solid"}},yearLabel:{formatter:"{start}  Q2",margin:"10 0 0 0"},itemStyle:{normal:{borderWidth:1}}}],series:[{name:"事件数",type:"scatter",coordinateSystem:"calendar",data:[],symbolSize:function(t){return Math.sqrt(t[1])<18?Math.sqrt(t[1]):18},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,itemStyle:{normal:{color:"#75a770",shadowBlur:10,shadowColor:"#333"}},zlevel:1}]},F={tooltip:{trigger:"axis",position:function(t){return[t[0],"10%"]}},title:{left:"center",text:"漏洞趋势"},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:x},yAxis:{type:"value",boundaryGap:[0,"100%"]},dataZoom:[{type:"inside",start:90,end:100},{start:90,end:100,handleIcon:"M0,0 v9.7h5 v-9.7h-5 Z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}],series:[{name:"漏洞数",type:"line",smooth:!0,symbol:"none",sampling:"average",itemStyle:{color:"#75a770"},data:w}]},M={title:{text:"资产类型比例",left:"center",textStyle:{color:"#000"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[(_={name:"类型",type:"pie",radius:["20%"," 30%"],avoidLabelOverlap:!0,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{length:1}}},f()(_,"label",{normal:{textStyle:{}}}),f()(_,"itemStyle",{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}),f()(_,"data",[]),_)]},D={title:{text:"漏洞类型趋势",textStyle:{color:"#ccc",fontStyle:"normal",fontSize:13}},tooltip:{trigger:"axis"},legend:{data:[]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value"},series:[]},C={title:{text:"Rank分布",left:"center",textStyle:{color:"#000"}},dataset:{source:[["score","amount","rank"],[3,13,3],[8,9,8],[13,4,13],[1,14,1],[10,0,10],[9,1,9]]},grid:{containLabel:!0},xAxis:{name:"amount"},yAxis:{type:"category"},visualMap:{orient:"horizontal",left:"center",min:0,max:20,text:["低","高"],dimension:0,inRange:{color:["#D7DA8B","#0dad51"]}},series:[{type:"bar",encode:{x:"amount",y:"rank"}}]},k={title:{text:"漏洞来源",left:"center",top:0},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"漏洞比例",type:"pie",radius:"50%",center:["50%","50%"],data:[].sort(function(t,a){return t.value-a.value}),roseType:"radius",label:{normal:{textStyle:{color:"#000"}}},labelLine:{normal:{lineStyle:{color:"#000"},smooth:.2,length:10,length2:20}},itemStyle:{normal:{shadowBlur:200,shadowColor:"rgba(0, 0, 0, 0.5)"}},animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 200*Math.random()}}]},O={title:{text:"漏洞类型 TOP",x:"center",y:0},tooltip:{trigger:"axis",axisPointer:{animation:!1,label:{backgroundColor:"#aaa",borderColor:"#bbb",borderWidth:1,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#222"}}}},grid:{left:"3%",right:"2%",bottom:"2%",containLabel:!0},xAxis:{boundaryGap:!1,show:!0,axisLabel:{show:!0,interval:"auto",rotate:30,margin:10},data:[]},yAxis:{type:"value"},series:[{data:[],type:"line",areaStyle:{normal:{color:new y.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(40, 182, 252, 0.85)"},{offset:1,color:"rgba(28, 255, 125, 0.2)"}])}},itemStyle:{normal:{color:"#e4e4e4",barBorderColor:"#e4e4e4"}},show:!0}],animationDuration:1500},T={title:{text:"应用(662)漏洞数量",x:"center",y:0},tooltip:{trigger:"axis",axisPointer:{animation:!1,label:{backgroundColor:"#ccc",borderColor:"#aaa",borderWidth:1,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#222"}}}},grid:{left:"3%",right:"2%",bottom:"2%",containLabel:!0},xAxis:{boundaryGap:!1,show:!0,axisLabel:{show:!0,interval:"auto",rotate:30,margin:10},data:[]},yAxis:{type:"value"},series:[{data:[],type:"line",areaStyle:{},show:!0,itemStyle:{normal:{color:"#409EFF",shadowBlur:200,shadowColor:"rgba(0, 0, 0, 0.5)"}}}],animationDuration:1500},q={visualMap:[{show:!1,type:"continuous",seriesIndex:0,min:0,max:400},{show:!1,type:"continuous",seriesIndex:1,dimension:0,min:0,max:500}],title:{text:"应用(34)逾期未修复漏洞数量",x:"center",y:0},tooltip:{trigger:"axis",axisPointer:{animation:!1,label:{backgroundColor:"#ccc",borderColor:"#aaa",borderWidth:1,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#222"}}}},grid:{left:"3%",right:"2%",bottom:"2%",containLabel:!0},xAxis:{boundaryGap:!1,show:!0,axisLabel:{show:!0,interval:"auto",rotate:30,margin:10},data:[]},yAxis:{type:"value"},series:[{data:[],type:"line",areaStyle:{},show:!0}],animationDuration:1500},L={visualMap:[{show:!1,type:"continuous",seriesIndex:0,min:0,max:400},{show:!1,type:"continuous",seriesIndex:1,dimension:0,min:0,max:500}],title:{text:"应用(190)逾期已修复漏洞数量",x:"center",y:0},tooltip:{trigger:"axis",axisPointer:{animation:!1,label:{backgroundColor:"#ccc",borderColor:"#aaa",borderWidth:1,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#222"}}}},grid:{left:"3%",right:"2%",bottom:"2%",containLabel:!0},xAxis:{boundaryGap:!1,show:!0,axisLabel:{show:!0,interval:"auto",rotate:30,margin:10},data:[]},yAxis:{type:"value"},series:[{data:[],type:"line",areaStyle:{},show:!0}],animationDuration:1500},I=(e("o/zv"),{name:"dashboard",components:{PulseLoader:p,countTo:l.a},data:function(){return{dashboard_data:{summary:{total_vul_count:0,vul_increase_percent:-3,vul_increase_count:80,test_percent:80,fixes_percent:80.2,star_level:4,hot_data:{data:[["2019-01-01",2074],["2019-01-02",1074]],range:["2019-04-01","2019-06-30"]},vul_trend_data:{x:["1968/10/4"],y:[1]},vul_ratio_data:{data:[{value:335,name:"已完成"},{value:310,name:"未修复"},{value:234,name:"复测中"},{value:135,name:"未审核"},{value:500,name:"已过期"}]}},vul:{total_vul_count:4327,average_solved_cost:111,total_solved_cost:111,solved_score:66,vul_source_data:{data:[{value:0,name:"安全部"}]},vul_ratio_data:{data:[{value:0,name:"已完成"},{value:0,name:"未修复"},{value:0,name:"复测中"},{value:0,name:"未审核"},{value:0,name:"已过期"}]},rank_distribution_data:{data:[["score","amount","rank"],[0,0,"7"],[0,0,"15"]]},vul_type_top_data:{xAxis_data:["敏感信息泄露"],series_data:[820]},vul_type_trend_line_data:{legend_data:["SQL注入漏洞"],xAxis_data:["周一","周二","周三","周四","周五","周六","周日"],series:[{name:"SQL注入漏洞",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]}]}},assets:{total_app_count:70,total_asset_count:666,app_asset_associated_percent:95.2,unassociated_asset_count:666,unactive_asset_count:666,asset_generation_data:{total:123,x_data:["系统"],series_data:[444]},asset_overdue_sovled_data:{total:123,x_data:["系统"],series_data:[444]},asset_overdue_unsovled_data:{total:123,x_data:["系统"],series_data:[444]},asset_ratio_data:{data:[{value:335,name:"IP"},{value:310,name:"域名"},{value:234,name:"端口"}]}}},startVal:0,endVal:0,circle_process_width:95,name:sessionStorage.getItem("ms_username"),plugin_list:[],timer:null,hot_data:b("hot_data"),vul_ratio_data:b("vul_ratio_data"),vul_trend_data:b("vul_trend_data"),asset_ratio_data:b("asset_ratio_data"),vul_type_trend_line_data:b("vul_type_trend_line_data"),rank_distribution_data:b("rank_distribution_data"),vul_source_data:b("vul_source_data"),vul_type_top_data:b("vul_type_top_data"),asset_generation_data:b("asset_generation_data"),asset_overdue_sovled_data:b("asset_overdue_sovled_data"),asset_overdue_unsovled_data:b("asset_overdue_unsovled_data")}},created:function(){this.get_dashboard_data()},computed:{role:function(){return"admin"===this.name?"超级管理员":"普通用户"}},filters:{formatTimestamp:function(t){var a=new Date(i()(1e3*t));return Object(h.c)(a,"yyyy-MM-dd HH:mm:ss")}},destroyed:function(){clearInterval(this.timer)},methods:{get_dashboard_data:function(){var t=this,a=this;this.$axios.get("/api/dashboard").then(function(e){var r=s()(e.data.data);a.dashboard_data=JSON.parse(localStorage.getItem("__IS_DESENSITIVE__"))?JSON.parse(r.replace(/([^\u0000-\u00FF])/g,function(t){return"*"}).replace(/:[0-9]*,/g,function(t){return":666,"})):e.data.data,t.vul_ratio_data=b("vul_ratio_data",a.dashboard_data.summary.vul_ratio_data),t.vul_trend_data=b("vul_trend_data",a.dashboard_data.summary.vul_trend_data),t.hot_data=b("hot_data",a.dashboard_data.summary.hot_data),t.vul_type_top_data=b("vul_type_top_data",a.dashboard_data.vul.vul_type_top_data),t.vul_source_data=b("vul_source_data",a.dashboard_data.vul.vul_source_data),t.vul_type_trend_line_data=b("vul_type_trend_line_data",a.dashboard_data.vul.vul_type_trend_line_data),t.rank_distribution_data=b("rank_distribution_data",a.dashboard_data.vul.rank_distribution_data),t.asset_generation_data=b("asset_generation_data",a.dashboard_data.assets.asset_generation_data),t.asset_overdue_sovled_data=b("asset_overdue_sovled_data",a.dashboard_data.assets.asset_overdue_sovled_data),t.asset_overdue_unsovled_data=b("asset_overdue_unsovled_data",a.dashboard_data.assets.asset_overdue_unsovled_data),t.asset_ratio_data=b("asset_ratio_data",a.dashboard_data.assets.asset_ratio_data)})},secondToDate:function(t){var a=Math.floor(t/86400)<10?"0"+Math.floor(t/86400):Math.floor(t/86400),e=Math.floor(t/3600%24)<10?"0"+Math.floor(t/3600%24):Math.floor(t/3600%24),r=Math.floor(t/60%60)<10?"0"+Math.floor(t/60%60):Math.floor(t/60%60),s=Math.floor(t%60)<10?"0"+Math.floor(t%60):Math.floor(t%60);return a+" "+this.$t("label.days")+" "+e+" "+this.$t("label.hours")+" "+r+" "+this.$t("label.minutes")+" "+s+" "+this.$t("label.seconds")},fixn:function(t,a){return void 0==t?0:t.toFixed(a)}}}),N={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-tabs",{attrs:{type:"border-card"}},[e("el-tab-pane",{staticStyle:{width:"100%"},attrs:{label:"概览"}},[e("el-row",[e("el-col",{attrs:{span:6}},[e("el-row",[e("el-card",{staticStyle:{width:"90%",float:"left","margin-left":"2%"}},[e("countTo",{staticClass:"big-num",attrs:{startVal:t.startVal,endVal:t.dashboard_data.summary.total_vul_count,duration:2e3,decimals:0}}),t._v(" "),e("span",{staticStyle:{color:"#414959",float:"left","font-size":"10px","margin-bottom":"5px"}},[t._v("当月漏洞数")]),t._v(" "),e("span",{staticStyle:{color:"#414959",float:"right","font-size":"10px","margin-bottom":"5px"}},[e("span",{staticStyle:{"margin-right":"3px"}},[t._v("环比上月     ")]),t._v(" "),t.dashboard_data.summary.vul_increase_count>=0?e("span",{staticStyle:{color:"#3e9b87f3",float:"right","font-size":"10px","margin-bottom":"5px"}},[t._v(t._s(t.dashboard_data.summary.vul_increase_percent)+"%("+t._s(t.dashboard_data.summary.vul_increase_count)+")")]):t._e(),t._v(" "),t.dashboard_data.summary.vul_increase_count<0?e("span",{staticStyle:{color:"#ee6a6a",float:"right","font-size":"10px","margin-bottom":"5px"}},[t._v(t._s(t.dashboard_data.summary.vul_increase_percent)+"%("+t._s(t.dashboard_data.summary.vul_increase_count)+")")]):t._e()])],1)],1),t._v(" "),e("el-row",[e("el-card",{staticStyle:{width:"90%",float:"left","margin-left":"2%"}},[e("el-col",{attrs:{span:12}},[e("span",{staticStyle:{"font-size":"10px","margin-bottom":"20px"}},[t._v("资产测试率")]),t._v(" "),e("el-progress",{attrs:{percentage:t.dashboard_data.summary.test_percent}})],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("span",{staticStyle:{"font-size":"10px"}},[t._v("漏洞修复率")]),t._v(" "),e("el-progress",{attrs:{percentage:t.dashboard_data.summary.fixes_percent,color:"#67c23a"}})],1)],1)],1),t._v(" "),e("el-row",[e("el-card",{staticStyle:{width:"90%",float:"left","margin-left":"2%"}},[e("span",{staticStyle:{"font-size":"10px",float:"left","margin-bottom":"20px"}},[t._v("参考星级")]),t._v(" "),e("el-rate",{staticStyle:{float:"right"},model:{value:t.dashboard_data.summary.star_level>5?5:t.dashboard_data.summary.star_level,callback:function(a){t.$set(t.dashboard_data.summary.star_level>5?5:t.dashboard_data.summary,"star_level",a)},expression:"dashboard_data.summary.star_level>5?5:dashboard_data.summary.star_level"}})],1)],1),t._v(" "),e("el-row",[e("el-card",{staticStyle:{width:"90%",float:"left","margin-left":"2%"}},[e("v-chart",{ref:"vul_ratio_data",staticStyle:{width:"75%","margin-left":"12%"},attrs:{options:t.vul_ratio_data,autoresize:""}})],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:18}},[e("el-card",{staticStyle:{width:"95%",float:"left","margin-left":"2%","padding-bottom":"15px"}},[e("v-chart",{attrs:{options:t.vul_trend_data,autoresize:""}})],1),t._v(" "),e("el-card",{staticStyle:{width:"95%",float:"left","margin-left":"2%","margin-top":"20px"}},[e("v-chart",{attrs:{options:t.hot_data,autoresize:""}})],1)],1)],1)],1),t._v(" "),e("el-tab-pane",{staticStyle:{width:"100%"},attrs:{label:"漏洞"}},[e("el-row",[e("el-col",{attrs:{span:6}},[e("el-card",{staticStyle:{width:"90%"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[e("i",{staticClass:"el-icon-zonglan1 iconfont_no_margin"}),t._v("\n                漏洞概况  \n                "),e("div",{staticStyle:{float:"right"}})])]),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"vul_detail",staticStyle:{"margin-bottom":"30px"}},[e("div",{staticStyle:{display:"block"}},[t._v("漏洞总数  "),e("span",{staticStyle:{color:"#3e9b87f3"}},[t._v(" "+t._s(t.dashboard_data.vul.total_vul_count)+" ")])]),t._v(" "),e("div",{staticStyle:{display:"block"}},[t._v("平均漏洞处理时间 "),e("span",{staticStyle:{color:"#3e9b87f3"}},[t._v(" "+t._s(Math.round(t.dashboard_data.vul.average_solved_cost/60/60)))]),t._v(" 小时")]),t._v(" "),e("div",{staticStyle:{display:"block"}},[t._v("漏洞处理总花费时间 "),e("span",{staticStyle:{color:"#3e9b87f3"}},[t._v(" "+t._s(Math.round(t.dashboard_data.vul.total_solved_cost/60/60/24/30))+" ")]),t._v(" 月")]),t._v(" "),e("div",{staticStyle:{display:"block"}},[t._v("漏洞处理及时度评分 "),e("span",{staticStyle:{color:"#3e9b87f3"}},[t._v(" "+t._s(t.dashboard_data.vul.solved_score)+" ")])])])])],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-card",{staticStyle:{width:"90%"}},[e("el-col",{attrs:{span:24}},[e("v-chart",{attrs:{options:t.vul_type_top_data,autoresize:""}})],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:6}},[e("el-card",{staticStyle:{width:"90%"}},[e("v-chart",{attrs:{options:t.rank_distribution_data,autoresize:""}})],1)],1)],1),t._v(" "),e("el-row",[e("el-col",{attrs:{span:6}},[e("el-card",{staticStyle:{width:"90%"}},[e("el-col",{attrs:{span:24}},[e("v-chart",{attrs:{options:t.vul_ratio_data,autoresize:""}})],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-card",{staticStyle:{width:"95%"}},[e("v-chart",{attrs:{options:t.vul_type_trend_line_data,autoresize:""}})],1)],1),t._v(" "),e("el-col",{attrs:{span:6}},[e("el-card",{staticStyle:{width:"90%"}},[e("v-chart",{attrs:{options:t.vul_source_data,autoresize:""}})],1)],1)],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:"资产"}},[e("el-row",[e("el-col",{attrs:{span:6}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("el-card",{staticStyle:{width:"90%",float:"left","margin-left":"2%","text-align":"center","margin-bottom":"10px"}},[e("countTo",{staticClass:"big-num",attrs:{startVal:t.startVal,endVal:t.dashboard_data.assets.total_app_count,duration:2e3,decimals:0}}),t._v(" "),e("span",{staticStyle:{color:"#3e9b87f3","font-size":"10px",margin:"0 auto","font-weight":"bold"}},[t._v("应用总数")])],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-card",{staticStyle:{width:"90%",float:"left","margin-left":"2%","text-align":"center"}},[e("countTo",{staticClass:"big-num big-num-blue",attrs:{startVal:t.startVal,endVal:t.dashboard_data.assets.total_asset_count,duration:2e3,decimals:0}}),t._v(" "),e("span",{staticStyle:{color:"#3e9b87f3","font-size":"10px",margin:"0 auto","font-weight":"bold"}},[t._v("资产总数")])],1)],1)],1),t._v(" "),e("el-card",{staticStyle:{width:"90%","margin-left":"2%","text-align":"center"}},[e("span",{staticClass:"big-num"},[t._v(t._s(t.dashboard_data.assets.app_asset_associated_percent)+"%")]),t._v(" "),e("span",{staticStyle:{color:"#3e9b87f3","font-size":"10px",margin:"0 auto","font-weight":"bold"}},[t._v("应用-资产关联率")]),t._v(" "),e("br"),t._v(" "),e("div",{staticStyle:{"margin-top":"10px","text-align":"center"}},[e("div",{staticStyle:{align:"left"}},[e("span",{staticStyle:{"font-size":"10px","margin-bottom":"5px","margin-right":"10px"}},[t._v("未关联资产")]),t._v(" "),e("span",[e("countTo",{staticStyle:{"font-size":"10px",color:"#ee6a6a"},attrs:{startVal:t.startVal,endVal:t.dashboard_data.assets.unassociated_asset_count,duration:2e3,decimals:0}})],1),t._v(" "),e("span",{staticStyle:{color:"#756aee","font-size":"10px","margin-left":"15px","margin-bottom":"15px"}},[e("a",{attrs:{href:"#"},on:{click:function(a){return t.$router.push("app")}}},[t._v("去关联")])])])]),t._v(" "),e("div",{staticStyle:{"margin-top":"10px","text-align":"center"}},[e("span",{staticStyle:{"font-size":"10px","margin-bottom":"5px","margin-right":"10px"}},[t._v("非活跃资产")]),t._v(" "),e("span",{staticStyle:{width:"50px"}},[e("countTo",{staticStyle:{"font-size":"10px",color:"#ee6a6a"},attrs:{startVal:t.startVal,endVal:t.dashboard_data.assets.unactive_asset_count,duration:2e3,decimals:0}})],1),t._v(" "),e("span",{staticStyle:{color:"#756aee","font-size":"10px","margin-left":"15px","margin-bottom":"15px"}},[e("a",{attrs:{href:"#"},on:{click:function(a){return t.$router.push("asset")}}},[t._v("去查看")])])])])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-card",{staticStyle:{width:"100%"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[e("i",{staticClass:"el-icon-zonglan1 iconfont_no_margin"}),t._v("\n                资产概况\n              ")])]),t._v(" "),e("el-col",{attrs:{span:24}},[e("v-chart",{attrs:{options:t.asset_generation_data,autoresize:""}})],1),t._v(" "),e("div",{staticStyle:{height:"20px"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:6}},[e("el-card",{staticStyle:{width:"90%",float:"left","margin-left":"2%","text-align":"center"}},[e("v-chart",{staticStyle:{width:"75%","margin-left":"12%"},attrs:{options:t.asset_ratio_data,autoresize:""}}),t._v(" "),e("div",{staticStyle:{height:"60px"}})],1)],1)],1),t._v(" "),e("el-row",[e("el-col",{attrs:{span:12}},[e("el-card",{staticStyle:{width:"100%"}},[e("el-col",{attrs:{span:24}},[e("v-chart",{attrs:{options:t.asset_overdue_sovled_data,autoresize:""}})],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("el-card",{staticStyle:{width:"100%"}},[e("el-col",{attrs:{span:24}},[e("v-chart",{attrs:{options:t.asset_overdue_unsovled_data,autoresize:""}})],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var j=e("VU/8")(I,N,!1,function(t){e("UqbM")},"data-v-bbaf6ffa",null);a.default=j.exports},"o/zv":function(t,a,e){(function(t){function e(t,a){for(var e=0,r=t.length-1;r>=0;r--){var s=t[r];"."===s?t.splice(r,1):".."===s?(t.splice(r,1),e++):e&&(t.splice(r,1),e--)}if(a)for(;e--;e)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,s=function(t){return r.exec(t).slice(1)};function o(t,a){if(t.filter)return t.filter(a);for(var e=[],r=0;r<t.length;r++)a(t[r],r,t)&&e.push(t[r]);return e}a.resolve=function(){for(var a="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var i=s>=0?arguments[s]:t.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(a=i+"/"+a,r="/"===i.charAt(0))}return a=e(o(a.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+a||"."},a.normalize=function(t){var r=a.isAbsolute(t),s="/"===i(t,-1);return(t=e(o(t.split("/"),function(t){return!!t}),!r).join("/"))||r||(t="."),t&&s&&(t+="/"),(r?"/":"")+t},a.isAbsolute=function(t){return"/"===t.charAt(0)},a.join=function(){var t=Array.prototype.slice.call(arguments,0);return a.normalize(o(t,function(t,a){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},a.relative=function(t,e){function r(t){for(var a=0;a<t.length&&""===t[a];a++);for(var e=t.length-1;e>=0&&""===t[e];e--);return a>e?[]:t.slice(a,e-a+1)}t=a.resolve(t).substr(1),e=a.resolve(e).substr(1);for(var s=r(t.split("/")),o=r(e.split("/")),i=Math.min(s.length,o.length),n=i,l=0;l<i;l++)if(s[l]!==o[l]){n=l;break}var d=[];for(l=n;l<s.length;l++)d.push("..");return(d=d.concat(o.slice(n))).join("/")},a.sep="/",a.delimiter=":",a.dirname=function(t){var a=s(t),e=a[0],r=a[1];return e||r?(r&&(r=r.substr(0,r.length-1)),e+r):"."},a.basename=function(t,a){var e=s(t)[2];return a&&e.substr(-1*a.length)===a&&(e=e.substr(0,e.length-a.length)),e},a.extname=function(t){return s(t)[3]};var i="b"==="ab".substr(-1)?function(t,a,e){return t.substr(a,e)}:function(t,a,e){return a<0&&(a=t.length+a),t.substr(a,e)}}).call(a,e("W2nU"))}});