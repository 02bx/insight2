webpackJsonp([6],{"1kT1":function(n,e){},"2Heg":function(n,e,i){var t={"./00 CHANGELOG.md":"5YYb","./01 README.md":"5H5g","./02 旧版本洞察升级2.0迁移文档.md":"ToiH","./03 扩展开发文档.md":"yBBn","./04 前端文档.md":"MUrl"};function o(n){return i(l(n))}function l(n){var e=t[n];if(!(e+1))throw new Error("Cannot find module '"+n+"'.");return e}o.keys=function(){return Object.keys(t)},o.resolve=l,n.exports=o,o.id="2Heg"},"5H5g":function(n,e){n.exports='<h1 id="洞察-ii">洞察 II</h1>\n<hr>\n<p>愿景：<code>让用户快速方便快捷地进行风险管理 ，更加直观和实时地了解和处置自己的安全隐患。\n                 提升漏洞修复效率，同时进行安全风险管理功能联动。</code></p>\n'},"5YYb":function(n,e){n.exports='<h2 id="当前版本-202">当前版本 <code>2.0.2</code></h2>\n<hr>\n<ul>\n<li><h3 id="202">2.0.2</h3>\n</li>\n</ul>\n<h4 id="new-features">New features</h4>\n<ul>\n<li><code>漏洞</code> - <code>推迟处理机制</code> 实现 日志中记录推迟原因，记录推迟时间，每日通知将此时间进行相关参与计算 ✓</li>\n<li><code>漏洞</code> 新增 <code>手动邮件发送</code> 通知  ✓</li>\n<li>LDAP<code>离职人员</code>监控扩展中<code>变更邮件通知</code> 增加<code>新增用户</code> ✓</li>\n<li><code>用户</code>功能中新增<code>失效用户数据清理</code>功能实现 ✓</li>\n<li><code>超级管理员权限</code>  全局水印开关  ✓</li>\n<li>新增<code>Sentry</code>客户端异常捕获 ✓</li>\n<li>用户管理，新增<code>最后活跃</code>时间 ✓</li>\n</ul>\n<p>用户体验提升：</p>\n<ul>\n<li>邮件通知的同时，进行消息通知 ✓</li>\n<li>前台默认进入我的待处理漏洞 ✓</li>\n<li>登录后保持原URL自动跳转  ✓</li>\n<li>漏洞状态: 已逾期 XX 天 高亮 ✓</li>\n<li>前台漏洞，公开漏洞，知识库，改为新标签打开✓</li>\n</ul>\n<hr>\n<h4 id="bug-fixes">Bug fixes</h4>\n<hr>\n<h3 id="201">2.0.1</h3>\n<h4 id="new-features-1">New features</h4>\n<ul>\n<li>LDAP<code>离职人员</code>监控扩展  ✓   <code>变更邮件通知</code> ✓</li>\n<li>漏洞时间线（TimeLine） ✓</li>\n<li>邮件SMTP配置 新增支持 <code>默认</code>/<code>SSL</code>/<code>TLS</code> 三种认证模式 ✓</li>\n</ul>\n<hr>\n<ul>\n<li>后台-漏洞管理：增加 <code>只看我</code> 过滤 ✓  <code>只看我</code>本地存储 ✓</li>\n<li>用户组 - <code>拥有者变更</code> ✓</li>\n<li>编辑中新增<code>漏洞状态</code>编辑 ✓</li>\n<li>前端用户编辑 - 新增<code>邮箱</code>字段 ✓</li>\n<li>漏洞/应用 新标签打开详情 ✓</li>\n<li>漏洞列表新增 <code>筛选列</code> 新增显示<code>团队</code>和 <code>应用</code> ✓</li>\n<li>前台所有日期悬浮显示<code>具体时间</code> ✓</li>\n</ul>\n<hr>\n<h4 id="bug-fixes-1">Bug fixes</h4>\n<ul>\n<li>前端漏洞操作交互优化</li>\n<li>前端部分CSS颜色样式优化</li>\n<li>前端漏洞时间排序修复</li>\n</ul>\n<hr>\n<h3 id="200">2.0.0</h3>\n<h4 id="new-features-2">New features</h4>\n<ul>\n<li>前端水印</li>\n<li>前端脱敏</li>\n<li>洞察1-&gt;2 迁移工具</li>\n<li>邮件发送日志</li>\n</ul>\n<h4 id="bug-fixes-2">Bug fixes</h4>\n'},GO6L:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("pw1w");var t=i("X2Oc"),o=i("5YYb"),l={data:function(){return{apikey:"",menuTree:{},curl_eg:"",htmlMD:o||"",htmlMDList:[]}},created:function(){this.menuTree=this.getMenuTree()},methods:{loadMarkdown:function(n){this.htmlMD=this.htmlMDList[n]},getMenuTree:function(){var n,e=i("2Heg");this.htmlMDList=(n=e).keys().map(n);var t=[],o=0;return e.keys().map(function(n){var e={},i=n.split("/");if(2==i.length)return e.name=i[1].replace(".md",""),e.path=n,e.children=[],e.showChild=!1,e.index=o++,t.push(e)}),t},keyGet:function(){var n=this;this.$axios.get("/api/user/apikey/get").then(function(e){e.data.status>=1&&(n.apikey=e.data.apikey,n.is_enable=e.data.enable,n.curl_eg="curl "+e.data.host+"/api/user/apikey/test?token="+e.data.apikey)})},enbaleKey:function(n){this.$axios.post("/api/user/apikey/enable",Object(t.h)({enable:n?1:0})).then(function(n){})}}},d={render:function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-tickets"}),n._v(" 使用文档\n        ")])],1)],1),n._v(" "),i("el-row",{staticClass:"tac"},[i("el-col",{attrs:{span:6}},[i("div",{attrs:{name:"side_menu"}},[i("el-menu",{attrs:{"default-active":"0"}},n._l(n.menuTree,function(e){return i("div",{key:e.index},[e.showChild?n._e():i("el-menu-item",{attrs:{index:e.index.toString()},on:{click:function(i){return n.loadMarkdown(e.index)}}},[i("i",{staticClass:"el-icon-menu"}),n._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[n._v(n._s(e.name))])])],1)}),0)],1)]),n._v(" "),i("el-col",{attrs:{span:18}},[i("div",{staticClass:"container"},[i("div",{staticClass:"block",staticStyle:{width:"100%"}},[i("div",{staticStyle:{"margin-top":"10px",width:"90%"}},[i("div",{staticClass:"markdown-body",domProps:{innerHTML:n._s(n.htmlMD)}})])])])])],1)],1)},staticRenderFns:[]};var c=i("VU/8")(l,d,!1,function(n){i("1kT1")},null,null);e.default=c.exports},MUrl:function(n,e){n.exports='<h1 id="洞察2-前端">洞察2 前端</h1>\n<p>基于Vue.js 2.x系列 + Element UI .</p>\n<h2 id="功能">功能</h2>\n<ul>\n<li><input checked="" disabled="" type="checkbox"> 用户管理</li>\n<li><input checked="" disabled="" type="checkbox"> 异步路由和权限加载</li>\n<li><input checked="" disabled="" type="checkbox"> 统计面板</li>\n</ul>\n<h2 id="目录结构介绍">目录结构介绍</h2>\n<pre><code>|-- build                            // webpack配置文件\n|-- config                           // 项目打包路径\n|-- src                              // 源码目录\n|   |-- components                   // 组件\n|       |-- common                   // 公共组件\n|           |-- bus.js                // Event Bus\n|           |-- Header.vue           // 公共头部\n|           |-- Home.vue                // 公共路由入口\n|           |-- Sidebar.vue          // 公共左边栏\n|           |-- Tags.vue                // 页面切换标签组件\n|       |-- page                        // 主要路由页面\n|           |-- 403.vue\n|           |-- 404.vue\n|           |-- Dashboard.vue  //面板\n|           |-- Login.vue   //登录\n|           |-- Setting.vue   //系统配置\n\n|   |-- App.vue                      // 页面入口文件\n|   |-- main.js                       // 程序入口文件，加载各种公共组件\n|-- .babelrc                         // ES6语法编译配置\n|-- .editorconfig               // 代码编写规格\n|-- .gitignore                     // 忽略的文件\n|-- index.html                       // 入口html文件\n|-- package.json                     // 项目及工具的依赖配置文件\n|-- README.md                        // 说明</code></pre><h2 id="安装步骤">安装步骤</h2>\n<pre><code>git clone\ncd insight2_front    // 进入模板目录\nnpm install         // 安装项目依赖，等待安装完成之后</code></pre><h2 id="本地开发">本地开发</h2>\n<pre><code>// 开启服务器，浏览器访问 http://localhost:8080\nnpm run dev</code></pre><h2 id="构建生产">构建生产</h2>\n<pre><code>// 执行构建命令，生成的dist文件夹放在服务器下即可访问\nnpm run build</code></pre><h2 id="其他">其他</h2>\n<pre><code>    point-vue-cron \n    中设置\n    .cron-button-group{\n        display:inline;\n    }</code></pre>'},ToiH:function(n,e){n.exports='<h1 id="旧版本洞察升级20迁移文档">旧版本洞察升级2.0迁移文档</h1>\n<hr>\n<h4 id="文章drop以及静态文件目录迁移">文章Drop以及静态文件目录迁移</h4>\n<ul>\n<li>迁移目录 srcpm/drops/static/upload --&gt; insight2/upload</li>\n</ul>\n<h4 id="迁移数据库">迁移数据库</h4>\n<ul>\n<li><p>执行步骤</p>\n<ol>\n<li><p>在<code>config.py</code> 里配置好源数据库FROM_DB和目标数据库，如下所示。</p>\n</li>\n<li><p>运行命令<code>python run.py --init=data</code></p>\n</li>\n</ol>\n</li>\n</ul>\n<p>配置文件示例。</p>\n<pre><code class="language-python">\nDEBUG = True\n\nPORT = 8000\n\nDB_HOST = &#39;web_mysql&#39;\nDB_PORT = 3306\nDB_NAME = &#39;insight2&#39;\nDB_USER = &#39;root&#39;\nDB_PASS = &#39;crediteaseitsec&#39;\n\nREDIS_HOST = &#39;web_redis&#39;\nREDIS_PORT = 6379\nREDIS_PASS = &#39;crediteaseitsec&#39;\nREDIS_DB = 0\nREDIS_CHANNEL = &quot;SERVICE_CHANNEL&quot;\n\n\nACTION_DIR_NAME = (&quot;action&quot;, )\n\nSTATIC_DIR_NAME = &quot;upload&quot;\n\nTEMPLATE_DIR_NAME = &quot;template&quot;\n\nCOOKIE_SECRET = &quot;kG6QcnqzQAGqE2zg2DYyv8q19f78zUz7nvH/KkoodTY=&quot;\n\nAPI_VERSION = &quot;/api&quot;\n\nFROM_DB = dict(\n            host = &#39;web_mysql&#39;,\n            port = 3306,\n            user = &quot;root&quot;,\n            password = &quot;crediteaseitsec&quot;,\n            database = &quot;insight&quot;\n        )</code></pre>\n<p>迁移成功输出示例。</p>\n<pre><code>文章分类迁移...\n用户数据初始化...\n资产应用数据初始化...\n漏洞数据导入...\n文章数据迁移...\n用户积分迁移...\n\n[+] 数据库迁移成功\n</code></pre>'},yBBn:function(n,e){n.exports='<h1 id="扩展开发文档">扩展开发文档</h1>\n<hr>\n<h3 id="1-扩展类型支持">1. 扩展类型支持</h3>\n<ul>\n<li>&quot;0&quot;:&quot;安全扫描&quot;</li>\n<li>&quot;1&quot;:&quot;资产收集&quot;</li>\n<li>&quot;2&quot;:&quot;通知&quot;</li>\n<li>&quot;3&quot;:&quot;授权&quot;</li>\n<li>&quot;4&quot;:&quot;持续集成&quot;</li>\n<li>&quot;5&quot;:&quot;事件响应&quot;</li>\n<li>&quot;6&quot;:&quot;工作流&quot;</li>\n<li>&quot;7&quot;:&quot;安全验证&quot;</li>\n</ul>\n<h3 id="2-扩展示例">2. 扩展示例</h3>\n<p>开发目录：</p>\n<ul>\n<li><strong>init</strong>.py</li>\n<li>main.py 主文件</li>\n<li>config.json 配置文件</li>\n<li>logo.png  图标</li>\n</ul>\n<p><code>main.py</code></p>\n<pre><code class="language-Python">#!usr/bin/env python\n#-*- coding:utf-8 -*-\n\ndef main(*args, **kwargs):\n    print (args, kwargs)</code></pre>\n<p><a href="./attachments/scan.zip">示例下载</a></p>\n'}});