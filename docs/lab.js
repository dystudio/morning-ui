!function(t){function e(e){for(var r,u,s=e[0],a=e[1],c=e[2],f=0,d=[];f<s.length;f++)u=s[f],i[u]&&d.push(i[u][0]),i[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(l&&l(e);d.length;)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},i={107:0};var o=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},u.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=a;o.push([642,0]),n()}({1:function(t,e){t.exports=Vue},117:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(119)),i=o(n(118));function o(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{btntext:"发送",list:[{name:"Tim Boelaars",age:20,gender:"male",action:'<ui-btn color="success" size="xs">{{context.btntext}}</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'},{name:"Andrew Colin Beck",age:41,gender:"female",action:'<ui-btn color="success" size="xs">{{context.btntext}}</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'},{name:"Gustavo Zambelli",age:23,gender:"male",action:'<ui-btn color="success" size="xs">{{context.btntext}}</ui-btn> <ui-link color="minor" size="xs">详情</ui-link>'}]}},components:{"doc-header":r.default,"doc-footer":i.default},methods:{echo:function(t){alert(t)}},mounted:function(){}},t.exports=e.default},231:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("doc-header",{attrs:{category:this.category}}),this._v(" "),e("div",{staticClass:"lab",staticStyle:{width:"1130px"}},[this._m(0),this._v(" "),e("div",{staticClass:"area"},[e("div",{staticStyle:{width:"600px",height:"60px"}},[e("ui-tab",[e("div",{attrs:{slot:"key"},slot:"key"},[e("ui-table",{attrs:{list:this.list}})],1)])],1)])]),this._v(" "),e("doc-footer")],1)},i=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("i",{staticClass:"iconfont"},[this._v("")]),this._v("Morning Laboratory")])}];r._withStripped=!0},641:function(t,e,n){"use strict";n.r(e);var r=n(117),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);var u=n(231),s=n(0),a=!1;var c=function(t){a||n(876)},l=Object(s.a)(i.a,u.a,u.b,!1,c,null,null);l.options.__file="src/docs/pages/lab/index.vue",e.default=l.exports},642:function(t,e,n){"use strict";var r=o(n(1)),i=o(n(641));function o(t){return t&&t.__esModule?t:{default:t}}new r.default({el:"#root",render:function(t){return t(i.default)}})},876:function(t,e){}});