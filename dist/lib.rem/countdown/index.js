/*! vue-ydui v0.4.8 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CountDown=void 0;var o=n(42),i=r(o);e.CountDown=i.default},1:function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach(function(t){var e=r[t];s[t]=function(){return e}})}return{esModule:o,exports:i,options:u}}},42:function(t,e,n){var r=n(1)(n(153),n(104),null,null);t.exports=r.exports},104:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{domProps:{innerHTML:t._s(t.str)}}),t._v(" "),t.showTpl?n("span",{ref:"tpl"},[t._t("default")],2):t._e()])},staticRenderFns:[]}},153:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-countdown",data:function(){return{str:"",timer:null,tempFormat:"",showTpl:!0}},props:{time:{type:String},format:{type:String,default:"{%d}天{%h}时{%m}分{%s}秒"},callback:{type:Function},doneText:{type:String,default:"已结束"}},watch:{time:function(t){t&&this.run()}},methods:{run:function(){var t=this;if(this.time){var e=Math.floor(new Date(this.time).getTime()/1e3);this.timer=setInterval(function(){var n=e-Math.floor((new Date).getTime()/1e3);n>0?t.str=t.timestampTotime(n):("function"==typeof t.callback&&t.callback(),t.str=t.doneText,clearInterval(t.timer))},1e3)}},timestampTotime:function(t){var e=this.tempFormat,n={};n.s=t%60,t=Math.floor(t/60),n.m=t%60,t=Math.floor(t/60),n.h=t%24,n.d=Math.floor(t/24);var r=function(t){return t<=0?"00":t<10?"0"+t:t},o=["d","h","m","s"];return o.forEach(function(t){var o=r(n[t]).toString().split("");e=e.replace("{%"+t+"}",r(n[t])),e=e.replace("{%"+t+"0}",0!=~~o[0]?o[0]:""),e=e.replace("{%"+t+"1}",~~o[o.length-2]),e=e.replace("{%"+t+"2}",~~o[o.length-1])}),e}},mounted:function(){var t=this;this.$nextTick(function(){t.tempFormat=t.$slots.default?t.$refs.tpl.innerHTML:t.format,t.showTpl=!1,t.run()})},destroyed:function(){clearInterval(this.timer)}}}})});