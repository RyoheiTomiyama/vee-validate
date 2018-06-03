(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{174:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("The default behavior for the plugin is to forcibly inject a validator instance for each component, which means each component has its own validator instance, this makes sharing error messages between components relatively hard depending on your case.")]),t._m(1),s("p",[t._v("You can rely on Vue's "),s("a",{attrs:{href:"https://vuejs.org/v2/api/#provide-inject",target:"_blank",rel:"noopener noreferrer"}},[t._v("Provide/Inject API"),s("OutboundLink")],1),t._v(" for this case, here is how it works:")]),t._m(2),t._m(3),t._m(4),t._m(5),s("p",[t._v("You may also want to stop all automatic injections to reduce the memory footprint of the plugin.")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"component-injections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#component-injections","aria-hidden":"true"}},[this._v("#")]),this._v(" Component Injections")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"injecting-parent-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#injecting-parent-validator","aria-hidden":"true"}},[this._v("#")]),this._v(" Injecting Parent Validator")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  inject"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("'$validator'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// OR use object synatx")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  inject"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $validator"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'$validator'")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("This will make the component inherit it's parent's validator instance, thus sharing all errors and validation state. Meaning it has access to the same "),a("code",[this._v("errors")]),this._v(" and "),a("code",[this._v("fields")]),this._v(" computed properties as well.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),a("p",[this._v("If the direct parent isn't able to provide a validator instance, the API will traverse the tree upwards looking for a parent that can.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"disabling-automatic-injection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disabling-automatic-injection","aria-hidden":"true"}},[this._v("#")]),this._v(" Disabling Automatic Injection")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VeeValidate "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vee-validate'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("use")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VeeValidate"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" inject"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("This will make the plugin stop instantiating a new validator for each component instance, excluding the root instance. But you would need to manage how a component gets its validator instance if it needs it. So it can inject it from a parent or "),a("a",{attrs:{href:"#requesting-a-new-validator-instance"}},[this._v("request a fresh validator instance")]),this._v(".")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),a("p",[this._v("Injecting the parent validator with the "),a("code",[this._v("Inject API")]),this._v(" will work the same regardless of automatic injection state. The component will always get its validator instance from the first parent that can provide it.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"requesting-a-new-validator-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requesting-a-new-validator-instance","aria-hidden":"true"}},[this._v("#")]),this._v(" Requesting a new validator instance")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("By setting a "),a("code",[this._v("validator")]),this._v(" property on the component's VeeValidate constructor options:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  $_veeValidate"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    validator"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'new'")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// give me my own validator instance.")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Typically a component would need a new validator instance for various reasons; common examples are if it is a "),a("code",[this._v("vue-router")]),this._v(" route component or a "),a("code",[this._v("nuxt")]),this._v(" page component. Requesting a fresh validator instance will make the component the only provider for validator instances to its children.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),a("p",[this._v("With SSR Frameworks like Nuxt, it is recommended to disable automatic injection since it may cause memory leaks due to all the validator instances being created for every component, which will slow down your site.")])])}],!1,null,null,null);a.default=e.exports}}]);