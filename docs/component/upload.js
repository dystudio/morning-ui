!function(n){function e(e){for(var a,u,r=e[0],i=e[1],p=e[2],m=0,s=[];m<r.length;m++)u=r[m],o[u]&&s.push(o[u][0]),o[u]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a]);for(d&&d(e);s.length;)s.shift()();return l.push.apply(l,p||[]),t()}function t(){for(var n,e=0;e<l.length;e++){for(var t=l[e],a=!0,r=1;r<t.length;r++){var i=t[r];0!==o[i]&&(a=!1)}a&&(l.splice(e--,1),n=u(u.s=t[0]))}return n}var a={},o={66:0};var l=[];function u(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=a,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},u.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var p=0;p<r.length;p++)e(r[p]);var d=i;l.push([357,0]),t()}({1:function(n,e){n.exports=Vue},174:function(n,e,t){"use strict";t.d(e,"a",function(){return a}),t.d(e,"b",function(){return o});var a=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 文件上传 `<ui-upload>`\n\n<doc-component-status page="upload"></doc-component-status>\n\n[[[开始]]]\n\n定义文件上传框。\n\n#### 使用\n\n:::democode/html\n<div style="width:300px;">\n    <ui-upload form-name="文件"></ui-upload>\n</div>\n:::\n\n#### 文件上传适配器\n\n文件上传适配器用来接收组件上传的文件，并传输到服务端，然后将服务端结果处理后返回给组件：\n\n<img src="http://h0.hucdn.com/open/201747/13c62e5ed487ec48_359x624.png" width="120" alt="">\n\n使用文件上传组件之前，需要在初始化Morning UI的时候配置文件上传适配器`uploader`：\n\n```js\nVue.use(morning, {\n    uploader : (file) => {\n\n        let formData = new FormData();\n\n        formData.append(\'file\', file.file);\n        formData.append(\'filename\', file.name);\n\n        return new Promise((resolve, reject) => {\n\n            $.ajax({\n                type : \'POST\',\n                url : \'/api/uploadfile\',\n                data : formData,\n                processData : false,\n                contentType : false,\n                dataType : \'json\',\n                success : resp => {\n\n                    if (resp.status) {\n\n                        resolve({\n                            status : true,\n                            path : resp.path\n                        });\n\n                    } else {\n\n                        resolve({\n                            status : false,\n                            message : resp.message\n                        });\n\n                    }\n\n                },\n                error : resp => {\n                    reject(\'upload fail.\');\n                }\n            })\n\n        });\n\n    }\n});\n```\n\n文件上传时会调用`uploader`并将需要上传的文件对象作为参数传入，由`uploader`解析文件对象并调用服务端上传接口。\n\n当文件上传完毕后，`uploader`需要返回一个对象，包含三个属性：\n\n- `status` : 文件是否上传成功(必需，Boolean)\n- `path` : 文件上传后的网络地址(必需，String)\n- `message` : `message` : 文件上传失败的提示信息(String)，仅在`status`为`false`的时候需要\n\n接下来的示例中如没有设置组件的`uploader`配置，均采用了上面这个适配器。\n\n#### 为单个组件指定文件上传适配器\n\n你也可以通过组件的`uploader`配置来为组件指定文件上传适配器，下面的示例的通过指定适配器演示了文件上传失败的情况：\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        uploader : function (file) {\n\n            return {\n                status : false,\n                message : \'文件上传失败，请重试\'\n            };\n\n        }\n    }\n});\n---\n<div style="width:300px;">\n    <ui-upload form-name="文件" :uploader="uploader"></ui-upload>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset/html\nformStatus\n---\nuikey:upload\nstatusDefaultValue:[{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\'}]\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[item-name](#item-name)|项目的名称，作为添加按钮标题的后缀。|项目的名称|String|`\'文件\'`|\n|[accept-type](#accept-type)|指导用户上传指定文件扩展名或MIME类型的文件，多个类型之间采用逗号分隔。比如：<br><br>`\'image/png\'` 或 `\'.png\'` : 允许上传png文件<br>`\'image/png, image/jpeg\'` 或 `\'.png, .jpg, .jpeg\'` : 允许上传png或jpg图片<br>`\'image/*\'` : 允许所有MIME类型为`image/*`的文件上传。<br><br>需要注意的是此配置并不验证文件的类型，它只指导用户选择正确类型的文件。用户可以在文件选择器中切换类型来上传其他类型的文件。|文件扩展名<br>MIME类型|String|`undefined`|\n|[multi](#multi)|允许同时选择多个文件上传|`true`<br>`false`|Boolean|`false`|\n|[max](#max)|最多允许上传多少文件|数字|Number|`Infinity`|\n|[allow-url](#allow-url)|允许从网络地址获取文件并上传|`true`<br>`false`|Boolean|`false`|\n|[allow-drag](#allow-drag)|允许拖拽文件或网络地址上传，若拖拽的是网络地址必须开启`allow-url`|`true`<br>`false`|Boolean|`false`|\n|[validate](#validate)|验证上传的文件，这是一个函数。函数包含两个入参：<br><br>第一个参数是上传文件的原始`File`对象<br>第二个参数是一个扩展对象，包含了以下这些信息：<br>&nbsp; &nbsp; `size` : 文件的大小<br>&nbsp; &nbsp; `width` : 图片的宽度(仅文件是图片时有效)<br>&nbsp; &nbsp; `height` : 图片的高度(仅文件是图片时有效)<br><br>通过这两个参数来验证文件。<br><br>此函数的返回值为验证结果，有两种：<br><br>非字符串：认为验证通过，开始上传文件<br>字符串：验证失败，字符串的内容作为提示信息展现给用户<br><br>如果是异步的验证，也可以返回Promise|验证函数|Function|`() => {}`|\n|[uploader](#uploader)|文件上传适配器，默认采用全局设置。`uploader`是一个函数，第一个参数是上传文件的`File`对象，需要返回一个对象：<br><br>`status` : 文件是否上传成功(必需，Boolean)<br>`path` : 文件上传后的网络地址(必需，String)<br>`message` : 文件上传失败的提示信息(String)，仅在`status`为`false`的时候需要|文件上传适配器函数|Function|`undefined`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:upload\nconfigDefaultValue:[{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\'}]\n:::\n\n#### item-name\n\n项目名称可以告知使用者输入项目的含义。\n\n:::democode/html\n<div style="width:300px;">\n    <ui-upload form-name="文件" item-name="文件"></ui-upload>\n</div>\n:::\n\n#### accept-type\n\n指导用户上传PNG图片：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-upload form-name="文件" accept-type="image/png"></ui-upload>\n</div>\n:::\n\n#### multi\n\n:::democode/html\n<div style="width:300px;">\n    <ui-upload form-name="文件" multi></ui-upload>\n</div>\n:::\n\n#### max\n\n设置最多上传两个文件。\n\n:::democode/html\n<div style="width:300px;">\n    <ui-upload form-name="文件" :max="2"></ui-upload>\n</div>\n:::\n\n#### allow-url\n\n:::democode/html\n<div style="width:300px;">\n    <ui-upload form-name="文件" :allow-url="true"></ui-upload>\n</div>\n:::\n\n#### allow-drag\n\n:::democode/html\n<div style="width:300px;">\n    <ui-upload form-name="文件" :allow-drag="true"></ui-upload>\n</div>\n:::\n\n开启`allow-url`后，可以拖拽网络地址上传：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-upload form-name="文件" :allow-drag="true" :allow-url="true"></ui-upload>\n</div>\n:::\n\n#### validate\n\n限制上传大小为30kb的文件：\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        checksize : function (file) {\n                \n            if (file.size > 30000) {\n                \n                return \'上传文件的大小不能超过30kb\';\n\n            }\n\n        }\n    }\n});\n---\n<div style="width:300px;">\n    <ui-upload form-name="文件" :validate="checksize"></ui-upload>\n</div>\n:::\n\n限制上传宽度和高度小于100px的图片：\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        checksize : function (file, ext) {\n                \n            if (ext.width > 100) {\n                \n                return \'上传图片的宽度不能超过100px\';\n\n            }\n                \n            if (ext.height > 100) {\n                \n                return \'上传图片的高度不能超过100px\';\n\n            }\n\n        }\n    }\n});\n---\n<div style="width:300px;">\n    <ui-upload form-name="文件" :validate="checksize"></ui-upload>\n</div>\n:::\n\n#### uploader\n\n下面的示例的通过指定适配器演示了文件上传失败的情况：\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        uploader : function (file) {\n\n            return {\n                status : false,\n                message : \'文件上传失败，请重试\'\n            };\n\n        }\n    }\n});\n---\n<div style="width:300px;">\n    <ui-upload form-name="文件" :uploader="uploader"></ui-upload>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:upload\nmethodValue:[{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\'}]\nmethodDefaultValue:[{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\'}]\n:::\n\n#### uploadUrl(url)\n\n上传网络文件，使用此方法需要开启组件的`allow-url`配置。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|url|NO|需要上传网络文件的URL地址|URL|`String`|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <ui-upload ref="demo1" form-name="网络文件" :allow-url="true"></ui-upload>\n</div>\n<br>\n<ui-link js="morning.findVM(\'demo1\').uploadUrl(\'https://cn.vuejs.org/images/logo.png\');">上传Vue的logo</ui-link>\n:::\n\n#### isUploading()\n\n组件是否仍在上传文件，返回布尔值。\n\n:::democode/html\n<div style="width:300px;">\n    <ui-upload ref="demo2" form-name="文件"></ui-upload>\n</div>\n<br>\n<ui-link js="alert(morning.findVM(\'demo2\').isUploading());">获取上传状态</ui-link>\n:::\n\n[[[事件]]]\n\n:::preset/html\nformEvent\n---\nuikey:upload\neventValue:[{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\'}]\neventDefaultValue:[{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\'}]\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Array` : 数组\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成空数组([])。\n- 若启用`max`，最多不会超过max设置的项目数量。\n\n#### 值格式\n\n数组由对象组成，对象包含两个属性：\n\n- `path` : 文件上传之后的路径(必需)\n- `name` : 文件的名称(非必需)\n\n#### 默认值\n\n`[]`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType:upload\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style="width:300px;">\n        <ui-upload ref="demoType{$valueType}" form-name="文件"></ui-upload>\n    </div>\n    <br>\n    <ui-link js="window.morning.findVM(\'demoType{$valueType}\').set({$&valueContent})">设置{$valueType}类型</ui-link>\n    <ui-link js="alert(window.morning.findVM(\'demoType{$valueType}\').getJson())">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/upload/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];a._withStripped=!0},356:function(n,e,t){"use strict";t.r(e);var a=t(69),o=t.n(a);for(var l in a)"default"!==l&&function(n){t.d(e,n,function(){return a[n]})}(l);var u=t(174),r=t(0),i=!1;var p=function(n){i||t(730)},d=Object(r.a)(o.a,u.a,u.b,!1,p,null,null);d.options.__file="src/docs/pages/component/upload/index.vue",e.default=d.exports},357:function(n,e,t){"use strict";var a=l(t(1)),o=l(t(356));function l(n){return n&&n.__esModule?n:{default:n}}new a.default({el:"#root",render:function(n){return n(o.default)}})},69:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,o=t(2),l=(a=o)&&a.__esModule?a:{default:a};e.default={data:function(){return{page:"upload"}},components:{"doc-component":l.default}},n.exports=e.default},730:function(n,e){}});