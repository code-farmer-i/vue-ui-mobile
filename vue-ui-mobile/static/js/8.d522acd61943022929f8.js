webpackJsonp([8],{b01d:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t("r6nL"),r={methods:{onkeyClick:function(e){this.$message.info("点击了"+e)},defaultKeyboard:function(){this.$refs.VKeyboard.open({onKeyClick:this.onkeyClick})},haveXKeyboard:function(){this.$refs.VKeyboard.open({XButton:!0,onKeyClick:this.onkeyClick})},PwdKeyboard:function(){this.$refs.VPwdKeyboard.open({onComplete:function(e){this.$message.info("输入结果: "+e)}})}},components:{ComponentView:n.a}},s=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("component-view",{attrs:{scroll:!1}},[t("div",{staticClass:"scroll",attrs:{slot:"no-scroll"},slot:"no-scroll"},[t("v-button",{attrs:{type:"primary"},on:{click:e.defaultKeyboard}},[e._v("普通数字键盘")]),e._v(" "),t("v-button",{attrs:{type:"primary"},on:{click:e.haveXKeyboard}},[e._v("带有X字符数字键盘")]),e._v(" "),t("v-button",{attrs:{type:"primary"},on:{click:e.PwdKeyboard}},[e._v("密码数字键盘")]),e._v(" "),t("v-keyboard",{ref:"VKeyboard"}),e._v(" "),t("v-pwd-keyboard",{ref:"VPwdKeyboard"})],1)])},a=[],i={render:s,staticRenderFns:a},l=i,c=t("VU/8"),d=c(r,l,!1,null,null,null);o.default=d.exports}});