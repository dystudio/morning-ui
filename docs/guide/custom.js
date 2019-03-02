!function(n){function e(e){for(var t,i,s=e[0],l=e[1],a=e[2],f=0,d=[];f<s.length;f++)i=s[f],o[i]&&d.push(o[i][0]),o[i]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(n[t]=l[t]);for(c&&c(e);d.length;)d.shift()();return u.push.apply(u,a||[]),r()}function r(){for(var n,e=0;e<u.length;e++){for(var r=u[e],t=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(t=!1)}t&&(u.splice(e--,1),n=i(i.s=r[0]))}return n}var t={},o={95:0},u=[];function i(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=n,i.c=t,i.d=function(n,e,r){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)i.d(r,t,function(e){return n[e]}.bind(null,t));return r},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var c=l;u.push([632,0]),r()}({1:function(n,e){n.exports=Vue},280:function(n,e,r){"use strict";var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 定制化\n\nMorning UI目前支持主题色及圆角自定义。\n\n## 使用模块打包器\n\n若你的工程采用了类似`Webpack`这样的模块打包器，可以通过LESS变量覆盖的方式来实现定制化。\n\n首先在项目中创建一个主题样式文件，比如：`my-theme.less`，在文件中写入以下内容：\n\n```less\n@import '~morning-ui/src/lib/styles/index.less';\n\n// 自定主题色\n@colorTheme : #2890DA;\n@colorLightTheme : #3594D8;\n@colorDarkTheme : #0672BF;\n\n// 自定圆角\n@borderRadius : 0;\n```\n\n然后在项目中引入Morning UI时，将`import 'morning-ui/dist/morning-ui.css';`替换成`my-theme.less`这个文件，比如：\n\n```js\n// 引入Vue.js\nimport Vue from 'vue';\n\n// 引入Morning UI\nimport morning from 'morning-ui';\n\n// 引入定制化的主题\nimport './theme/my-theme.less';\n\n// 初始化Morning UI\nVue.use(morning);\n```\n\n由于Morning UI的样式中引用了`less`及`woff`文件，请确保你的模块打包器配置可处理此类型的文件。\n\n注意：若你的项目未使用模块打包器，则暂时不支持定制化。\n\n#### 主题色\n\nMorning UI默认使用了以下的主题色：\n\n```less\n@colorTheme : #F33D5D;\n@colorLightTheme : #F86F88;\n@colorDarkTheme : #D22343;\n```\n\n在主题色定制时需要注意的是Morning UI中除了主题色之外，分别有浅主题色、深主题色总共三种颜色，都需要进行覆写。\n\n#### 圆角\n\nMorning UI默认使用了`3px`的圆角，应用在了所有组件中：\n\n```less\n@borderRadius : 3px;\n```\n\n")])])},o=[];t._withStripped=!0,r.d(e,"a",function(){return t}),r.d(e,"b",function(){return o})},58:function(n,e,r){"use strict";r.r(e);var t=r(59),o=r.n(t);for(var u in t)"default"!==u&&function(n){r.d(e,n,function(){return t[n]})}(u);e.default=o.a},59:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,o=r(3),u=(t=o)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"custom"}},components:{"doc-guide":u.default}},n.exports=e.default},632:function(n,e,r){"use strict";var t=u(r(1)),o=u(r(633));function u(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(o.default)}})},633:function(n,e,r){"use strict";r.r(e);var t=r(280),o=r(58);for(var u in o)"default"!==u&&function(n){r.d(e,n,function(){return o[n]})}(u);var i=r(0),s=Object(i.a)(o.default,t.a,t.b,!1,null,null,null);s.options.__file="src/docs/pages/guide/custom/index.vue",e.default=s.exports}});