!function(n){function e(e){for(var t,s,o=e[0],i=e[1],u=e[2],p=0,d=[];p<o.length;p++)s=o[p],r[s]&&d.push(r[s][0]),r[s]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t]);for(c&&c(e);d.length;)d.shift()();return l.push.apply(l,u||[]),a()}function a(){for(var n,e=0;e<l.length;e++){for(var a=l[e],t=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(t=!1)}t&&(l.splice(e--,1),n=s(s.s=a[0]))}return n}var t={},r={32:0};var l=[];function s(e){if(t[e])return t[e].exports;var a=t[e]={i:e,l:!1,exports:{}};return n[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=n,s.c=t,s.d=function(n,e,a){s.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:a})},s.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},s.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=i;l.push([279,0]),a()}({1:function(n,e){n.exports=Vue},135:function(n,e,a){"use strict";a.d(e,"a",function(){return t}),a.d(e,"b",function(){return r});var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 标签 `<ui-label>`\n\n<doc-component-status page="label"></doc-component-status>\n\n[[[开始]]]\n\n定义一个标签，标签和徽章不同在于标签可以插入图片或图标，这是一个内联块元素。\n\n徽章一般单独使用，而标签一般多个一起使用。\n\n#### 使用\n\n:::democode/html\n<ui-label>标签</ui-label>\n:::\n\n#### 使用图片\n\n为`ui-label`加上`image`类，然后在标签内通过`<img>`标签插入图片，此时标签文本请使用`<span>`标签。\n\n> 注意：使用时请确保`<span>`和`<img>`标签之间有空格。\n\n\n:::democode/html\n<ui-label class="image">\n    <img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/>\n    <span>标签</span>\n</ui-label>\n\n<ui-label class="image">\n    <span>标签</span>\n    <img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/>\n</ui-label>\n:::\n\n#### 使用图标\n\n为`ui-label`加上`icon`类，然后在标签内通过`<i class="iconfont">`标签插入图标，此时标签文本请使用`<span>`标签。\n\n> 注意：使用时请确保`<span>`和`<img>`标签之间有空格。\n\n\n:::democode/html\n<ui-label class="icon">\n    <i class="iconfont">&#xe6e2;</i>\n    <span>标签</span>\n</ui-label>\n\n<ui-label class="icon">\n    <span>标签</span>\n    <i class="iconfont">&#xe6e2;</i>\n</ui-label>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`theme`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<ui-label size="{$sizeKey}">{$&sizeName}</ui-label>\n:::\n\n:::repeat/html\nsize\n---\n<ui-label class="icon" size="{$sizeKey}"><i class="iconfont">&#xe6e2;</i> <span>{$&sizeName}</span></ui-label>\n:::\n\n:::repeat/html\nsize\n---\n<ui-label class="image" size="{$sizeKey}"><img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/> <span>{$&sizeName}</span></ui-label>\n:::\n\n#### 色彩\n\n:::preset/html\nstatusColor\n---\nuikey:label\n:::\n\n#### 状态\n\n:::repeat/html\nstate:normal,apparent\n---\n<ui-label state="{$stateKey}">{$&stateName}</ui-label>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/label/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];t._withStripped=!0},278:function(n,e,a){"use strict";a.r(e);var t=a(35),r=a.n(t);for(var l in t)"default"!==l&&function(n){a.d(e,n,function(){return t[n]})}(l);var s=a(135),o=a(0),i=!1;var u=function(n){i||a(642)},c=Object(o.a)(r.a,s.a,s.b,!1,u,null,null);c.options.__file="src/docs/pages/component/label/index.vue",e.default=c.exports},279:function(n,e,a){"use strict";var t=l(a(1)),r=l(a(278));function l(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(r.default)}})},35:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,r=a(2),l=(t=r)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"label"}},components:{"doc-component":l.default}},n.exports=e.default},642:function(n,e){}});