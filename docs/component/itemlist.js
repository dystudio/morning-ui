!function(i){function n(n){for(var t,a,l=n[0],c=n[1],u=n[2],r=0,p=[];r<l.length;r++)a=l[r],d[a]&&p.push(d[a][0]),d[a]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(i[t]=c[t]);for(o&&o(n);p.length;)p.shift()();return s.push.apply(s,u||[]),e()}function e(){for(var i,n=0;n<s.length;n++){for(var e=s[n],t=!0,l=1;l<e.length;l++){var c=e[l];0!==d[c]&&(t=!1)}t&&(s.splice(n--,1),i=a(a.s=e[0]))}return i}var t={},d={39:0};var s=[];function a(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return i[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=i,a.c=t,a.d=function(i,n,e){a.o(i,n)||Object.defineProperty(i,n,{configurable:!1,enumerable:!0,get:e})},a.r=function(i){Object.defineProperty(i,"__esModule",{value:!0})},a.n=function(i){var n=i&&i.__esModule?function(){return i.default}:function(){return i};return a.d(n,"a",n),n},a.o=function(i,n){return Object.prototype.hasOwnProperty.call(i,n)},a.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var o=c;s.push([331,0]),e()}({1:function(i,n){i.exports=Vue},161:function(i,n,e){"use strict";e.d(n,"a",function(){return t}),e.d(n,"b",function(){return d});var t=function(){var i=this.$createElement,n=this._self._c||i;return n("doc-component",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n# 项目列表 `<ui-itemlist>`\n\n<doc-component-status page="itemlist"></doc-component-status>\n\n[[[开始]]]\n\n定义项目列表组件，项目列表中的每一项包含图片及文字内容，这是一个块级元素。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n项目列表可包含：\n<br><br>\n- 缩略图 `img`\n- 标题 `.title`\n- 描述 `.desc`\n- 主体内容 `.body`\n- 附加信息 `.additional`\n>tpl\n<div style="width:400px">\n    <ui-itemlist>\n        <ui-ul>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">Header</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">Additional Details</div> \n            </li>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">Header</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">Additional Details</div> \n            </li>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">Header</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">Additional Details</div> \n            </li>\n        </ui-ul>\n    </ui-itemlist>\n</div>\n:::\n\n:::vue\n@name:下划线分隔\n---\n#demo\n>desc\n添加`underline`样式类可添加下划线分隔。\n>tpl\n<div style="width:400px">\n    <ui-itemlist class="underline">\n        <ui-ul>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">Header</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">Additional Details</div> \n            </li>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">Header</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">Additional Details</div> \n            </li>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">Header</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">Additional Details</div> \n            </li>\n        </ui-ul>\n    </ui-itemlist>\n</div>\n:::\n\n:::vue\n@name:单行标题\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-itemlist xs>\n        <ui-ul>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">Header</h3>\n            </li>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">Header</h3>\n            </li>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">Header</h3>\n            </li>\n        </ui-ul>\n    </ui-itemlist>\n</div>\n:::\n\n:::vue\n@name:单行内容\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-itemlist xs>\n        <ui-ul>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <div class="body">Body</div>\n            </li>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <div class="body">Body</div>\n            </li>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <div class="body">Body</div>\n            </li>\n        </ui-ul>\n    </ui-itemlist>\n</div>\n:::\n\n:::vue\n@name:无图片\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-itemlist>\n        <ui-ul>\n            <li>\n                <h3 class="title">Header</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">Additional Details</div> \n            </li>\n            <li>\n                <h3 class="title">Header</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">Additional Details</div> \n            </li>\n            <li>\n                <h3 class="title">Header</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">Additional Details</div> \n            </li>\n        </ui-ul>\n    </ui-itemlist>\n</div>\n:::\n\n:::vue\n@name:配合`ui-label`\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-itemlist>\n        <ui-ul>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">Header</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">\n                    <ui-label s minor>Normal</ui-label>\n                </div> \n            </li>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">Header</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">\n                    <ui-label s danger>High</ui-label>\n                </div> \n            </li>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">Header</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">\n                    <ui-label s minor>Normal</ui-label>\n                </div> \n            </li>\n        </ui-ul>\n    </ui-itemlist>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n:::vue\n@layout:size\n---\n<div style="width:400px">\n    <ui-itemlist size="{$sizeKey}">\n        <ui-ul>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">{$&sizeName}</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">Additional Details</div> \n            </li>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">{$&sizeName}</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">Additional Details</div> \n            </li>\n            <li>\n                <ui-img class="img" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n                <h3 class="title">{$&sizeName}</h3>\n                <p class="desc">Description</p>\n                <div class="body">Body</div>\n                <div class="additional">Additional Details</div> \n            </li>\n        </ui-ul>\n    </ui-itemlist>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/itemlist/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},d=[];t._withStripped=!0},330:function(i,n,e){"use strict";e.r(n);var t=e(42),d=e.n(t);for(var s in t)"default"!==s&&function(i){e.d(n,i,function(){return t[i]})}(s);var a=e(161),l=e(0),c=!1;var u=function(i){c||e(733)},o=Object(l.a)(d.a,a.a,a.b,!1,u,null,null);o.options.__file="src/docs/pages/component/itemlist/index.vue",n.default=o.exports},331:function(i,n,e){"use strict";var t=s(e(1)),d=s(e(330));function s(i){return i&&i.__esModule?i:{default:i}}new t.default({el:"#root",render:function(i){return i(d.default)}})},42:function(i,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t,d=e(2),s=(t=d)&&t.__esModule?t:{default:t};n.default={data:function(){return{page:"itemlist"}},components:{"doc-component":s.default}},i.exports=n.default},733:function(i,n){}});