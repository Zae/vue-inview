webpackJsonp([1],[,,function(e,i){},,,function(e,i,n){"use strict";var s=n(1),r=n(26),o=n(23),a=n.n(o);s.default.use(r.a),i.a=new r.a({routes:[{path:"/",name:"Hello",component:a.a}]})},,function(e,i,n){function s(e){n(13)}var r=n(4)(n(10),n(25),s,null,null);e.exports=r.exports},,function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=n(2),r=(n.n(s),n(6)),o=n.n(r),a=n(1),m=n(7),l=n.n(m),t=n(5),v=n(8),u=n.n(v);a.default.use(o.a),a.default.use(u.a),u.a.threshold(.3),a.default.config.productionTip=!1,new a.default({el:"#app",router:t.a,template:"<App/>",components:{App:l.a}})},function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"app"}},function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"hello",data:function(){return{onseen:!1,onstyling:!1}},methods:{goNpm:function(){window.location="https://npmjs.com/package/vueinview"},goGithub:function(){window.location="https://github.com/rachmanzz/vue-inview"},seing:function(){alert("Are you see me ??")},trying:function(e){1===e&&(this.onstyling=!0),6===e&&(this.onseen=!0)}}}},function(e,i){},function(e,i){},,,,,,,,,,function(e,i,n){function s(e){n(12)}var r=n(4)(n(11),n(24),s,"data-v-8714223a",null);e.exports=r.exports},function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"hello"},[n("el-row",[n("el-col",{directives:[{name:"inview",rawName:"v-inview:style",value:{background:"#1D8CE0"},expression:"{background: '#1D8CE0'}",arg:"style"},{name:"inview",rawName:"v-inview:style.leave",value:{background:"#20A0FF"},expression:"{background: '#20A0FF'}",arg:"style",modifiers:{leave:!0}}],staticClass:"elm",attrs:{span:24}},[n("div",{staticClass:"box-inview"},[n("h1",[e._v("VUE INVIEW")]),e._v(" "),n("p",[e._v("Viewport, get notified when element enter or leave.")]),e._v(" "),n("p",[n("el-button",{on:{click:e.goNpm}},[e._v("NPM Package")]),e._v(" "),n("el-button",{on:{click:e.goGithub}},[e._v("Github Repo.")])],1)])]),e._v(" "),n("el-col",{directives:[{name:"inview",rawName:"v-inview:style",value:{background:"#1D8CE0"},expression:"{background: '#1D8CE0'}",arg:"style"},{name:"inview",rawName:"v-inview:style.leave",value:{background:"#20A0FF"},expression:"{background: '#20A0FF'}",arg:"style",modifiers:{leave:!0}}],staticClass:"elm",attrs:{span:24}},[n("div",{staticClass:"inner-container"},[n("h2",[e._v("# Instalation")]),e._v(" "),n("pre",{staticStyle:{background:"#eee"}},[e._v("          "),n("code",{staticStyle:{color:"#222"}},[e._v("\n            // Install from npm package\n            npm install --save vueinview\n            // install from github repository\n            npm install --save rachmanzz/vueinview\n          ")]),e._v("\n        ")]),e._v(" "),n("h2",[e._v("# Usage")]),e._v(" "),n("h3",[e._v("- Vue Instance")]),e._v(" "),n("pre",{staticStyle:{background:"#eee"}},[e._v("          "),n("code",{staticStyle:{color:"#222"}},[e._v("\n            import Vue from 'vue'\n            import Inview from 'vueinview'\n\n            Vue.use(Inview)\n          ")]),e._v("\n        ")])])]),e._v(" "),n("el-col",{directives:[{name:"inview",rawName:"v-inview:style",value:{background:"#1D8CE0"},expression:"{background: '#1D8CE0'}",arg:"style"},{name:"inview",rawName:"v-inview:style.leave",value:{background:"#20A0FF"},expression:"{background: '#20A0FF'}",arg:"style",modifiers:{leave:!0}}],staticClass:"elm",attrs:{span:24}},[n("div",{staticClass:"inner-container"},[n("h3",[e._v("- Threshold & Offset")]),e._v(" "),n("p",[e._v("Threshold "),n("a",{attrs:{href:"https://github.com/camwiegert/in-view#inviewthresholdthreshold"}},[e._v("check here")]),e._v(",\n        Offset "),n("a",{attrs:{href:"https://github.com/camwiegert/in-view#inviewoffsetoffset"}},[e._v("check here")])]),e._v(" "),n("pre",{staticStyle:{background:"#eee"}},[e._v("          "),n("code",{staticStyle:{color:"#222"}},[e._v("\n            import Vue from 'vue'\n            import Inview from 'vueinview'\n\n            Vue.use(Inview)\n            Inview.threshold(/* threshold */)\n            Inview.offset(/* offset */)\n          ")]),e._v("\n        ")]),e._v(" "),n("h3",[e._v("- Vue Directive")]),e._v(" "),n("pre",{staticStyle:{background:"#eee"}},[e._v("          "),n("samp",{staticStyle:{color:"#222"}},[e._v("\n            "),n("span",[e._v("<")]),e._v('element v-inview:on="methods"'),n("span",[e._v(">")]),n("span",[e._v("<")]),e._v("/element"),n("span",[e._v(">")]),e._v("\n            "),n("span",[e._v("<")]),e._v('div v-inview:enter="methods"'),n("span",[e._v(">")]),n("span",[e._v("<")]),e._v("/div"),n("span",[e._v(">")]),e._v("\n          ")]),e._v("\n        ")]),e._v(" "),n("p",[e._v("More documentation see "),n("a",{attrs:{href:"https://github.com/rachmanzz/vue-inview/#vue-directive"}},[e._v("here")])])])]),e._v(" "),n("el-col",{directives:[{name:"inview",rawName:"v-inview:style",value:{background:"#1D8CE0"},expression:"{background: '#1D8CE0'}",arg:"style"},{name:"inview",rawName:"v-inview:style.leave",value:{background:"#20A0FF"},expression:"{background: '#20A0FF'}",arg:"style",modifiers:{leave:!0}}],staticClass:"elm",attrs:{span:24}},[n("div",{staticClass:"inner-container"},[n("h3",[e._v("# Example")]),e._v(" "),n("h4",[e._v("- Add & Remove Style")]),e._v(" "),n("pre",{staticStyle:{background:"#eee"}},[e._v("            "),n("samp",{staticStyle:{color:"#222"}},[e._v("\n              "),n("span",[e._v("<")]),e._v("div v-inview:style=\"{background: '#222'}\" v-inview:style.leave=\"['background']\""),n("span",[e._v(">")]),e._v("\n                "),n("span",[e._v("<")]),e._v("p"),n("span",[e._v(">")]),e._v("lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum \n                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"),n("span",[e._v("<")]),e._v("/p"),n("span",[e._v(">")]),e._v("\n              "),n("span",[e._v("<")]),e._v("/div"),n("span",[e._v(">")]),e._v("\n            ")]),e._v("\n          ")]),e._v(" "),n("br"),e._v(" "),n("el-button",{on:{click:function(i){e.trying(1)}}},[e._v("Try Source")]),e._v(" "),n("div",{directives:[{name:"inview",rawName:"v-inview:style",value:{background:"#222"},expression:"{background: '#222'}",arg:"style"},{name:"inview",rawName:"v-inview:style.leave",value:["background"],expression:"['background']",arg:"style",modifiers:{leave:!0}},{name:"show",rawName:"v-show",value:e.onstyling,expression:"onstyling"}]},[n("p",[e._v("lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum \n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum \n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum \n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum \n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum \n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum \n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum \n              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n              ")])]),e._v(" "),n("h5",{directives:[{name:"show",rawName:"v-show",value:e.onstyling,expression:"onstyling"}]},[e._v(" ** Try to scroll up and scroll down again")])],1)]),e._v(" "),n("el-col",{directives:[{name:"inview",rawName:"v-inview:style",value:{background:"#1D8CE0"},expression:"{background: '#1D8CE0'}",arg:"style"},{name:"inview",rawName:"v-inview:style.leave",value:{background:"#20A0FF"},expression:"{background: '#20A0FF'}",arg:"style",modifiers:{leave:!0}}],staticClass:"elm",attrs:{span:24}},[n("div",{staticClass:"inner-container"},[n("h4",[e._v("- On element entered")]),e._v(" "),n("pre",{staticStyle:{background:"#eee"}},[e._v("            "),n("code",{staticStyle:{color:"#222"}},[e._v("\n              ## on element\n              "),n("span",[e._v("<")]),e._v('div v-inview:enter="seeing"'),n("span",[e._v(">")]),e._v("\n              "),n("span",[e._v("<")]),e._v("p"),n("span",[e._v(">")]),e._v("Yes, I'am See you.."),n("span",[e._v("<")]),e._v("/p"),n("span",[e._v(">")]),e._v("\n              "),n("span",[e._v("<")]),e._v("/div"),n("span",[e._v(">")]),e._v("\n\n              ## on methods vue instance\n              ...\n               methods: {\n                 seeing () {\n                   alert('Are you see me ??')\n                 }\n               }\n              ...\n\n            ")]),e._v("\n          ")]),e._v(" "),n("el-button",{on:{click:function(i){e.trying(6)}}},[e._v("Try Source")]),e._v(" "),n("div",{directives:[{name:"inview",rawName:"v-inview:enter",value:e.seing,expression:"seing",arg:"enter"},{name:"show",rawName:"v-show",value:e.onseen,expression:"onseen"}],staticStyle:{background:"#eee",color:"#222","margin-top":"10px",padding:"10px"}},[n("p",[e._v("Yes, I'am See you..")]),e._v(" "),n("p",[e._v("Try to scroll up and scroll down again")])])],1)]),e._v(" "),n("el-col",{directives:[{name:"inview",rawName:"v-inview:style",value:{background:"#1D8CE0"},expression:"{background: '#1D8CE0'}",arg:"style"},{name:"inview",rawName:"v-inview:style.leave",value:{background:"#20A0FF"},expression:"{background: '#20A0FF'}",arg:"style",modifiers:{leave:!0}}],staticClass:"elm",attrs:{span:24}},[n("div",{staticClass:"inner-container"},[n("h1",{staticStyle:{"text-align":"center","margin-top":"20%"}},[e._v("Other Example Available Next Time")])])])],1)],1)},staticRenderFns:[]}},function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}}],[9]);
//# sourceMappingURL=app.c64c5c40f316c68d2aba.js.map