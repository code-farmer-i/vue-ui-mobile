webpackJsonp([0],{"5PWk":function(n,t,o){"use strict";function e(n){o("Qo3z")}var r={props:{back:{type:Boolean,default:!0},title:{type:String,default:""}}},i=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("header",{staticClass:"header"},[n.back?o("v-icon",{staticClass:"icon-back",attrs:{type:"chevron-left",size:"0.54"},nativeOn:{click:function(t){n.$router.go(-1)}}}):n._e(),n._v("\n  "+n._s(n.title)+"\n")],1)},s=[],c={render:i,staticRenderFns:s},a=c,l=o("VU/8"),p=e,f=l(r,a,!1,p,null,null);t.a=f.exports},Qo3z:function(n,t,o){var e=o("ZFCk");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);o("rjj0")("cb612002",e,!0)},ZFCk:function(n,t,o){t=n.exports=o("FZ+f")(!1),t.push([n.i,"\n.header {\n  position: relative;\n  height: 1rem;\n  line-height: 1rem;\n  text-align: center;\n  font-size: 0.42666667rem;\n  color: #464c5b;\n  background-color: #fff;\n  border-bottom: 1px solid #d7dde4;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.header .icon-back {\n  position: absolute;\n  top: 50%;\n  left: 0.26666667rem;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.header .icon-back:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 0.10666667rem;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n.header .icon-back:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 0.10666667rem;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n",""])},pckU:function(n,t,o){t=n.exports=o("FZ+f")(!1),t.push([n.i,"\n.component {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  z-index: 100;\n  background-color: #F5F5F5;\n  z-index: 101;\n}\n.component .scroll-view {\n  position: absolute;\n  top: 1rem;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #F5F5F5;\n}\n.component .scroll-view .scroll {\n  padding: 0.32rem 0.37333333rem;\n}\n.component .scroll-view .scroll .v-button {\n  margin-top: 0.26666667rem;\n}\n.component .config {\n  margin-top: 0.37333333rem;\n}\n.component .config .config-name {\n  margin-right: 0.10666667rem;\n}\n.component .config .v-radio {\n  margin-right: 0.10666667rem;\n}\n",""])},r6nL:function(n,t,o){"use strict";function e(n){o("wYeF")}var r=o("5PWk"),i={name:"component-view",props:{scroll:{type:Boolean,default:!0}},mounted:function(){var n=this;this.$nextTick(function(){n.$refs.scroll&&n.$refs.scroll.refresh()})},components:{TopBar:r.a}},s=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"component"},[o("top-bar",{attrs:{title:n.$route.name}}),n._v(" "),o("div",{staticClass:"scroll-view"},[n.scroll?o("v-scroll",{ref:"scroll"},[n._t("default")],2):n._t("no-scroll")],2)],1)},c=[],a={render:s,staticRenderFns:c},l=a,p=o("VU/8"),f=e,b=p(i,l,!1,f,null,null);t.a=b.exports},wYeF:function(n,t,o){var e=o("pckU");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);o("rjj0")("76c02c27",e,!0)}});