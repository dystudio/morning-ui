!function(e){function t(t){for(var r,i,a=t[0],l=t[1],f=t[2],d=0,s=[];d<a.length;d++)i=a[d],u[i]&&s.push(u[i][0]),u[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);s.length;)s.shift()();return o.push.apply(o,f||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==u[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},u={88:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var f=0;f<a.length;f++)t(a[f]);var c=l;o.push([642,0]),n()}({1:function(e,t){e.exports=Vue},318:function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v("\n# 成为贡献者\n\n首先非常感谢你愿意为MorningUI贡献自己的时间及能力。\n\n## 成为哪种贡献者\n\n目前你可以通过两种方式为项目做出贡献：\n\n- 检视代码(Review)\n- 编写代码(Coding)\n\n如果你决定通过检视代码(Review)的方式来提供贡献，请直接查阅：[检视代码](/guide/review.html)章节。\n\n如果你决定编写代码至项目请发送邮件至`earlyhe0@gmail.com`我们会联系你，在等待回复的时候请阅读以下章节了解详细情况：\n\n- [开发环境](/guide/devenv.html)\n- [开发规范](/guide/devrule.html)\n- [编写文档](/guide/writedoc.html)\n- [编写测试](/guide/writetest.html)\n- [检视代码](/guide/review.html)\n- [提交代码](/guide/commitcode.html)\n- [版本计划](/guide/versionplan.html)\n\n")])])},u=[];r._withStripped=!0,n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u})},642:function(e,t,n){"use strict";var r=o(n(1)),u=o(n(643));function o(e){return e&&e.__esModule?e:{default:e}}new r.default({el:"#root",render:function(e){return e(u.default)}})},643:function(e,t,n){"use strict";n.r(t);var r=n(318),u=n(70);for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);var i=n(0),a=Object(i.a)(u.default,r.a,r.b,!1,null,null,null);a.options.__file="src/docs/pages/guide/becontributor/index.vue",t.default=a.exports},70:function(e,t,n){"use strict";n.r(t);var r=n(71),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t.default=u.a},71:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(3),o=(r=u)&&r.__esModule?r:{default:r};t.default={data:function(){return{page:"becontributor"}},components:{"doc-guide":o.default}},e.exports=t.default}});