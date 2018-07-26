!function(n){function e(e){for(var a,l,o=e[0],s=e[1],u=e[2],p=0,d=[];p<o.length;p++)l=o[p],i[l]&&d.push(i[l][0]),i[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(n[a]=s[a]);for(c&&c(e);d.length;)d.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],a=!0,o=1;o<t.length;o++){var s=t[o];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),n=l(l.s=t[0]))}return n}var a={},i={39:0};var r=[];function l(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=n,l.c=a,l.d=function(n,e,t){l.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},l.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=s;r.push([319,0]),t()}({1:function(n,e){n.exports=Vue},155:function(n,e,t){"use strict";t.d(e,"a",function(){return a}),t.d(e,"b",function(){return i});var a=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 标签 `<ui-label>`\n\n<doc-component-status page="label"></doc-component-status>\n\n[[[开始]]]\n\n定义一个标签，标签和徽章不同在于标签可以插入图片或图标，这是一个内联块元素。\n\n徽章一般单独使用，而标签一般多个一起使用。\n\n#### 使用\n\n:::democode/html\n<ui-label>标签</ui-label>\n:::\n\n#### 使用图片\n\n为`ui-label`加上`image`类，然后在标签内通过`<img>`标签插入图片，此时标签文本请使用`<span>`标签。\n\n> 注意：使用时请确保`<span>`和`<img>`标签之间有空格。\n\n\n:::democode/html\n<ui-label class="image">\n    <img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/>\n    <span>标签</span>\n</ui-label>\n\n<ui-label class="image">\n    <span>标签</span>\n    <img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/>\n</ui-label>\n:::\n\n#### 使用图标\n\n为`ui-label`加上`icon`类，然后在标签内通过`<i class="iconfont">`标签插入图标，此时标签文本请使用`<span>`标签。\n\n> 注意：使用时请确保`<span>`和`<img>`标签之间有空格。\n\n\n:::democode/html\n<ui-label class="icon">\n    <i class="iconfont">&#xe6e2;</i>\n    <span>标签</span>\n</ui-label>\n\n<ui-label class="icon">\n    <span>标签</span>\n    <i class="iconfont">&#xe6e2;</i>\n</ui-label>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`theme`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<ui-label size="{$sizeKey}">{$&sizeName}</ui-label>\n:::\n\n:::repeat/html\nsize\n---\n<ui-label class="icon" size="{$sizeKey}"><i class="iconfont">&#xe6e2;</i> <span>{$&sizeName}</span></ui-label>\n:::\n\n:::repeat/html\nsize\n---\n<ui-label class="image" size="{$sizeKey}"><img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/> <span>{$&sizeName}</span></ui-label>\n:::\n\n#### 色彩\n\n:::preset/html\nstatusColor\n---\nuikey:label\n:::\n\n#### 状态\n\n:::repeat/html\nstate:normal,apparent\n---\n<ui-label state="{$stateKey}">{$&stateName}</ui-label>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/label/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},i=[];a._withStripped=!0},318:function(n,e,t){"use strict";t.r(e);var a=t(42),i=t.n(a);for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);var l=t(155),o=t(0),s=!1;var u=function(n){s||t(708)},c=Object(o.a)(i.a,l.a,l.b,!1,u,null,null);c.options.__file="src/docs/pages/component/label/index.vue",e.default=c.exports},319:function(n,e,t){"use strict";var a=r(t(1)),i=r(t(318));function r(n){return n&&n.__esModule?n:{default:n}}new a.default({el:"#root",render:function(n){return n(i.default)}})},42:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=t(2),r=(a=i)&&a.__esModule?a:{default:a};e.default={data:function(){return{page:"label"}},components:{"doc-component":r.default}},n.exports=e.default},708:function(n,e){}});