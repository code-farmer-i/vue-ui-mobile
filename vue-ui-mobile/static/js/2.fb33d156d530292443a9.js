webpackJsonp([2],{GM1z:function(t,n,e){n=t.exports=e("FZ+f")(!1),n.push([t.i,"\n.dialog-view .v-button {\n  margin-top: 0.26666667rem;\n}\n",""])},WYKc:function(t,n,e){var i=e("GM1z");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("7f5a56d6",i,!0)},gJ2T:function(t,n,e){"use strict";function i(t){e("WYKc")}Object.defineProperty(n,"__esModule",{value:!0});var o=e("Dd8w"),c=e.n(o),s=e("r6nL"),a={data:function(){return{config:{titleCenter:!1,contentCenter:!1}}},methods:{showDialog:function(t){this.$dialog(c()({},t,this.config))}},components:{ComponentView:s.a}},l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("component-view",{staticClass:"dialog-view"},[e("div",{staticClass:"scroll"},[e("div",{staticClass:"config"},[e("span",[t._v("标题居中")]),t._v(" "),e("v-switch",{model:{value:t.config.titleCenter,callback:function(n){t.$set(t.config,"titleCenter",n)},expression:"config.titleCenter"}})],1),t._v(" "),e("div",{staticClass:"config"},[e("span",[t._v("内容居中")]),t._v(" "),e("v-switch",{model:{value:t.config.contentCenter,callback:function(n){t.$set(t.config,"contentCenter",n)},expression:"config.contentCenter"}})],1),t._v(" "),e("v-button",{attrs:{type:"primary"},on:{click:function(n){t.showDialog({content:"自定义文本"})}}},[t._v("默认Dialog")]),t._v(" "),e("v-button",{attrs:{type:"primary"},on:{click:function(n){t.showDialog({title:"自定义标题",content:"自定义文本"})}}},[t._v("自定义标题")]),t._v(" "),e("v-button",{attrs:{type:"primary"},on:{click:function(n){t.showDialog({content:"<div>div1</div><div>div2</div>",useHtmlStr:!0})}}},[t._v("内容为html字符串片段")])],1)])},r=[],v={render:l,staticRenderFns:r},f=v,u=e("VU/8"),d=i,p=u(a,f,!1,d,null,null);n.default=p.exports}});