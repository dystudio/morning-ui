!function(n){function t(t){for(var e,d,r=t[0],l=t[1],o=t[2],c=0,v=[];c<r.length;c++)d=r[c],s[d]&&v.push(s[d][0]),s[d]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(n[e]=l[e]);for(u&&u(t);v.length;)v.shift()();return a.push.apply(a,o||[]),i()}function i(){for(var n,t=0;t<a.length;t++){for(var i=a[t],e=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(e=!1)}e&&(a.splice(t--,1),n=d(d.s=i[0]))}return n}var e={},s={35:0},a=[];function d(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,d),i.l=!0,i.exports}d.m=n,d.c=e,d.d=function(n,t,i){d.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},d.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,t){if(1&t&&(n=d(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(d.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)d.d(i,e,function(t){return n[t]}.bind(null,e));return i},d.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return d.d(t,"a",t),t},d.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},d.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var u=l;a.push([770,0]),i()}({1:function(n,t){n.exports=Vue},186:function(n,t,i){"use strict";i.r(t);var e=i(187),s=i.n(e);for(var a in e)"default"!==a&&function(n){i.d(t,n,function(){return e[n]})}(a);t.default=s.a},187:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e,s=i(2),a=(e=s)&&e.__esModule?e:{default:e};t.default={data:function(){return{page:"formgroup"}},components:{"doc-component":a.default}},n.exports=t.default},341:function(n,t,i){"use strict";var e=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 表单组 `<ui-formgroup>`\n\n<doc-component-status page="formgroup"></doc-component-status>\n\n[[[开始]]]\n\n定义一个表单组，通过不同的HTML结构表单组可以组合出不同的表单结构，这是一个块级元素。\n\n表单组通过`.inline`样式类来实现内联的表单样式。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n表单组内包含了各种表单，一般由表单组抬头、各种表单项、行动栏组成。\n<br><br>\n你可以用下面的类或元素来标记不同的表单部分：\n<br><br>\n- `.item` : 表单项\n- `.item > .title` : 表单项名称\n- `.item > .content` : 表单项内容\n- `.item > .content > .form` : 表单容器\n>tpl\n<div style="width:500px;margin:auto">\n    <ui-formgroup>\n        \x3c!-- .item : 表单项 --\x3e\n        <div class="item">\n            \x3c!-- .title : 表单项名称 --\x3e\n            <h5 class="title">\n                Name\n            </h5>\n            \x3c!-- .content : 表单项内容 --\x3e\n            <div class="content">\n                \x3c!-- .form : 表单容器 --\x3e\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:表单项小标题及说明\n---\n#demo\n>desc\n你可以用下面的类或元素来标记小标题及说明：\n<br><br>\n- `.item > .content > h6` : 表单项小标题\n- `.item > .content > p` : 表单项说明信息\n>tpl\n<div style="width:500px;margin:auto">\n    <ui-formgroup>\n        <div class="item">\n            <h5 class="title">\n                Name\n            </h5>\n            <div class="content">\n                \x3c!-- h6 : 小标题 --\x3e\n                <h6>Full Name?</h6>\n                \x3c!-- p : 说明信息 --\x3e\n                <p>Please fill in your full name.</p>\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:多个表单项\n---\n#demo\n>desc\n多个表单项之前会有间隔线。\n>tpl\n<div style="width:500px;margin:auto">\n    <ui-formgroup>\n        \x3c!-- .item : 表单项 --\x3e\n        <div class="item">\n            <h5 class="title">\n                Name\n            </h5>\n            <div class="content">\n                <h6>Full Name</h6>\n                <p>Please fill in your full name.</p>\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n            </div>\n        </div>\n        \x3c!-- .item : 表单项 --\x3e\n        <div class="item">\n            <h5 class="title">\n                Introduction\n            </h5>\n            <div class="content">\n                <div class="form">\n                    <ui-textarea></ui-textarea>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:表单组标题\n---\n#demo\n>desc\n你可以用下面的类或元素来标记表单组标题：\n<br><br>\n- `header` : 表单组头部\n- `header > h5` : 表单组标题\n- `header > p` : 表单组说明信息\n>tpl\n<div style="width:500px;margin:auto">\n    <ui-formgroup>\n        \x3c!-- header : 表单组头部 --\x3e\n        <header>\n            \x3c!-- h5 : 表单组标题 --\x3e\n            <h5>YOUR HEALTH</h5>\n            \x3c!-- p : 表单组说明信息 --\x3e\n            <p>Let\'s talk about your health.</p>\n        </header>\n        <div class="item">\n            <h5 class="title">\n                Name\n            </h5>\n            <div class="content">\n                <h6>Full Name</h6>\n                <p>Please fill in your full name.</p>\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n            </div>\n        </div>\n        <div class="item">\n            <h5 class="title">\n                Introduction\n            </h5>\n            <div class="content">\n                <div class="form">\n                    <ui-textarea></ui-textarea>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:行动栏\n---\n#demo\n>desc\n你可以用下面的类或元素在表尾添加行动区域：\n<br><br>\n- `.action` : 行动区域\n>tpl\n<div style="width:500px;margin:auto">\n    <ui-formgroup>\n        <header>\n            <h5>YOUR HEALTH</h5>\n            <p>Let\'s talk about your health.</p>\n        </header>\n        <div class="item">\n            <h5 class="title">\n                Name\n            </h5>\n            <div class="content">\n                <h6>Full Name</h6>\n                <p>Please fill in your full name.</p>\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n            </div>\n        </div>\n        <div class="item">\n            <h5 class="title">\n                Introduction\n            </h5>\n            <div class="content">\n                <div class="form">\n                    <ui-textarea></ui-textarea>\n                </div>\n            </div>\n        </div>\n        \x3c!-- .action : 行动区域 --\x3e\n        <div class="action">\n            <ui-btn>提交</ui-btn>&nbsp;\n            <ui-btn color="minor">取消</ui-btn>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:单项多表单\n---\n#demo\n>desc\n你可以在单个表单项中添加多个表单。\n>tpl\n<div style="width:500px;margin:auto">\n    <ui-formgroup>\n        <header>\n            <h5>YOUR HEALTH</h5>\n            <p>Let\'s talk about your health.</p>\n        </header>\n        <div class="item">\n            <h5 class="title">\n                Name\n            </h5>\n            <div class="content">\n                \x3c!-- 第一个表单 --\x3e\n                <h6>First Name</h6>\n                <p>Please fill in your first name.</p>\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n                \x3c!-- 第二个表单 --\x3e\n                <h6>Last Name</h6>\n                <p>Please fill in your last name.</p>\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n            </div>\n        </div>\n        <div class="item">\n            <h5 class="title">\n                Introduction\n            </h5>\n            <div class="content">\n                <div class="form">\n                    <ui-textarea></ui-textarea>\n                </div>\n            </div>\n        </div>\n        <div class="action">\n            <ui-btn>提交</ui-btn>&nbsp;\n            <ui-btn color="minor">取消</ui-btn>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:内联表单组\n---\n#demo\n>desc\n表单组支持内联方式，这种方式一行支持多个表单。表单的宽度会根据一行中表单的数量适配。\n<br><br>\n添加`.inline`样式类来使用内联的表单样式。\n<br><br>\n你可以用下面的类或元素来标记单行表单：\n<br><br>\n- `.row` : 单行(仅内联表单组可用)\n>tpl\n<div style="width:600px;margin:auto">\n    <ui-formgroup class="inline">\n        \x3c!-- .row : 单行 --\x3e\n        <div class="row">\n            \x3c!-- .item : 表单项 --\x3e\n            <div class="item">\n                \x3c!-- .title : 表单项名称 --\x3e\n                <h5 class="title">Name</h5>\n                \x3c!-- .content : 表单项内容 --\x3e\n                <div class="content">\n                    \x3c!-- .content : 表单容器 --\x3e\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n\n            <div class="item">\n                <h5 class="title">Introduction</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:内联表单组的小标题及说明\n---\n#demo\n>tpl\n<div style="width:600px;margin:auto">\n    <ui-formgroup class="inline">\n        <div class="row">\n            <div class="item">\n                <h5 class="title">Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                    \x3c!-- h6 : 小标题 --\x3e\n                    <h6>Full Name?</h6>\n                    \x3c!-- p : 说明信息 --\x3e\n                    <p>Please fill in your full name.</p>\n                </div>\n            </div>\n\n            <div class="item">\n                <h5 class="title">Introduction</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                    \x3c!-- 仅使用说明信息 --\x3e\n                    <p>You introduction.</p>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:多行内联表单组\n---\n#demo\n>desc\n通过多个`.row`可以实现多行的内联表单组。\n>tpl\n<div style="width:600px;margin:auto">\n    <ui-formgroup class="inline">\n        <div class="row">\n            <div class="item">\n                <h5 class="title">First Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                    <h6>First Name?</h6>\n                    <p>Please fill in your first name.</p>\n                </div>\n            </div>\n\n            <div class="item">\n                <h5 class="title">Last Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="item">\n                <h5 class="title">Introduction</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textarea></ui-textarea>\n                    </div>\n                    <p>You introduction.</p>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:内联表单组加表单组标题\n---\n#demo\n>tpl\n<div style="width:600px;margin:auto">\n    <ui-formgroup class="inline">\n        \x3c!-- header : 表单组头部 --\x3e\n        <header>\n            \x3c!-- h5 : 表单组标题 --\x3e\n            <h5>YOUR HEALTH</h5>\n            \x3c!-- p : 表单组说明信息 --\x3e\n            <p>Let\'s talk about your health.</p>\n        </header>\n        <div class="row">\n            <div class="item">\n                <h5 class="title">First Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                    <h6>First Name?</h6>\n                    <p>Please fill in your first name.</p>\n                </div>\n            </div>\n\n            <div class="item">\n                <h5 class="title">Last Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="item">\n                <h5 class="title">Introduction</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textarea></ui-textarea>\n                    </div>\n                    <p>You introduction.</p>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:内联表单组加行动栏\n---\n#demo\n>tpl\n<div style="width:600px;margin:auto">\n    <ui-formgroup class="inline">\n        <header>\n            <h5>YOUR HEALTH</h5>\n            <p>Let\'s talk about your health.</p>\n        </header>\n        <div class="row">\n            <div class="item">\n                <h5 class="title">First Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                    <h6>First Name?</h6>\n                    <p>Please fill in your first name.</p>\n                </div>\n            </div>\n\n            <div class="item">\n                <h5 class="title">Last Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="item">\n                <h5 class="title">Introduction</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textarea></ui-textarea>\n                    </div>\n                    <p>You introduction.</p>\n                </div>\n            </div>\n        </div>\n        <div class="action">\n            <ui-btn>提交</ui-btn>&nbsp;\n            <ui-btn color="minor">取消</ui-btn>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:内联表单组调整表单宽度\n---\n#demo\n>desc\n默认情况下所有表单会均分一行，你也可以通过样式按比例调整宽度占比。\n<br><br>\n注意由于采用了`flex`布局，样式的宽度只能影响比例，并不能设置固定值。\n>tpl\n<div style="width:600px;margin:auto">\n    <ui-formgroup class="inline">\n        <header>\n            <h5>YOUR HEALTH</h5>\n            <p>Let\'s talk about your health.</p>\n        </header>\n        <div class="row">\n            \x3c!-- 通过50%的宽度样式来缩短这个表单的宽度占比 --\x3e\n            <div class="item" style="width:50%">\n                <h5 class="title">First Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                    <h6>First Name?</h6>\n                    <p>Please fill in your first name.</p>\n                </div>\n            </div>\n            \n            <div class="item">\n                <h5 class="title">Middle Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n\n            <div class="item">\n                <h5 class="title">Last Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="item">\n                <h5 class="title">Introduction</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textarea></ui-textarea>\n                    </div>\n                    <p>You introduction.</p>\n                </div>\n            </div>\n        </div>\n        <div class="action">\n            <ui-btn>提交</ui-btn>&nbsp;\n            <ui-btn color="minor">取消</ui-btn>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:非内联表单项标题左对齐\n---\n#demo\n>desc\n默认情况下，如果是非内联表单项的标题是居中对齐，内联表单项的标题是左对齐。\n<br><br>\n你可以通过`item-title-left`、`item-title-center`、`item-title-right`三个样式类来重新设置。\n>tpl\n<div style="width:500px;margin:auto">\n    <ui-formgroup class="item-title-left">\n        <div class="item">\n            <h5 class="title">\n                Name\n            </h5>\n            <div class="content">\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n            </div>\n        </div>\n        <div class="item">\n            <h5 class="title">\n                Introduction\n            </h5>\n            <div class="content">\n                <div class="form">\n                    <ui-textarea></ui-textarea>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:非内联表单项标题右对齐\n---\n#demo\n>desc\n默认情况下，如果是非内联表单项的标题是居中对齐，内联表单项的标题是左对齐。\n<br><br>\n你可以通过`item-title-left`、`item-title-center`、`item-title-right`三个样式类来重新设置。\n>tpl\n<div style="width:500px;margin:auto">\n    <ui-formgroup class="item-title-right">\n        <div class="item">\n            <h5 class="title">\n                Name\n            </h5>\n            <div class="content">\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n            </div>\n        </div>\n        <div class="item">\n            <h5 class="title">\n                Introduction\n            </h5>\n            <div class="content">\n                <div class="form">\n                    <ui-textarea></ui-textarea>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:内联表单项标题居中对齐\n---\n#demo\n>desc\n默认情况下，如果是非内联表单项的标题是居中对齐，内联表单项的标题是左对齐。\n<br><br>\n你可以通过`item-title-left`、`item-title-center`、`item-title-right`三个样式类来重新设置。\n>tpl\n<div style="width:500px;margin:auto">\n    <ui-formgroup class="inline item-title-center">\n        <div class="row">\n            <div class="item">\n                <h5 class="title">\n                    Name\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n            <div class="item">\n                <h5 class="title">\n                    Introduction\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textarea></ui-textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n:::vue\n@name:内联表单项标题右对齐\n---\n#demo\n>desc\n默认情况下，如果是非内联表单项的标题是居中对齐，内联表单项的标题是左对齐。\n<br><br>\n你可以通过`item-title-left`、`item-title-center`、`item-title-right`三个样式类来重新设置。\n>tpl\n<div style="width:500px;margin:auto">\n    <ui-formgroup class="inline item-title-right">\n        <div class="row">\n            <div class="item">\n                <h5 class="title">\n                    Name\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n            <div class="item">\n                <h5 class="title">\n                    Introduction\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textarea></ui-textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/formgroup/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},s=[];e._withStripped=!0,i.d(t,"a",function(){return e}),i.d(t,"b",function(){return s})},770:function(n,t,i){"use strict";var e=a(i(1)),s=a(i(771));function a(n){return n&&n.__esModule?n:{default:n}}new e.default({el:"#root",render:function(n){return n(s.default)}})},771:function(n,t,i){"use strict";i.r(t);var e=i(341),s=i(186);for(var a in s)"default"!==a&&function(n){i.d(t,n,function(){return s[n]})}(a);var d=i(0),r=Object(d.a)(s.default,e.a,e.b,!1,null,null,null);r.options.__file="src/docs/pages/component/formgroup/index.vue",t.default=r.exports}});