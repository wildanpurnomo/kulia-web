(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4365f8b8"],{"22b2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",{attrs:{bottom:!0,timeout:t.duration},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{dark:"",text:""},on:{click:function(e){t.isSnackbarShown=!1}}},"v-btn",n,!1),[t._v("Tutup")])]}}]),model:{value:t.isSnackbarShown,callback:function(e){t.isSnackbarShown=e},expression:"isSnackbarShown"}},[t._v(" "+t._s(t.message)+" ")])},s=[],i=(a("a9e3"),a("f5ef")),r={name:"Snackbar",props:{duration:Number},data:function(){return{isSnackbarShown:!1,message:""}},methods:{showSnackbar:function(t){this.message=t,this.isSnackbarShown=!0}},mounted:function(){var t=this;i["a"].$on("onShowSnackbar",(function(e){t.showSnackbar(e)}))}},o=r,c=a("2877"),u=a("6544"),l=a.n(u),d=a("8336"),h=(a("caad"),a("ade3")),f=(a("ca71"),a("8dd9")),m=a("a9ad"),v=a("7560"),p=a("f2e7"),g=a("fe6c"),b=a("58df"),k=a("80d2"),w=a("d9bd"),_=Object(b["a"])(f["a"],m["a"],p["a"],Object(g["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:v["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,a=t.bottom,n=t.footer,s=t.insetFooter,i=t.left,r=t.right,o=t.top;return{paddingBottom:Object(k["f"])(a+n+s),paddingLeft:this.app?Object(k["f"])(i):void 0,paddingRight:this.app?Object(k["f"])(r):void 0,paddingTop:Object(k["f"])(e+o)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(w["e"])("auto-height",this),0==this.timeout&&Object(w["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(k["l"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(h["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(k["l"])(this)])},genWrapper:function(){var t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:f["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),S=Object(c["a"])(o,n,s,!1,null,null,null);e["a"]=S.exports;l()(S,{VBtn:d["a"],VSnackbar:_})},"4bd4":function(t,e,a){"use strict";a("4de4"),a("7db0"),a("4160"),a("caad"),a("07ac"),a("2532"),a("159b");var n=a("5530"),s=a("58df"),i=a("7e2b"),r=a("3206");e["a"]=Object(s["a"])(i["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=a(t)))})):n.valid=a(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"615b":function(t,e,a){},"749d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{justify:"center"}},[a("v-card",{staticClass:"pa-10 rounded-lg",attrs:{width:"500",color:t.colorTheme}},[a("v-row",{attrs:{justify:"center"}},[a("div",{staticClass:"mb-15 text-h3 white--text"},[t._v("Login")])]),a("v-form",{ref:"loginForm"},[a("v-text-field",{attrs:{label:"Username",type:"text","append-icon":"mdi-account",required:"",dark:""},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),a("v-text-field",{attrs:{label:"Password","append-icon":t.isPasswordShown?"mdi-eye":"mdi-eye-off",type:t.isPasswordShown?"text":"password",required:"",dark:""},on:{"click:append":function(e){t.isPasswordShown=!t.isPasswordShown}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),a("div",{staticClass:"text-center ma-8"},[a("v-btn",{staticClass:"white--text red accent-2 rounded-xl",attrs:{width:"70%",type:"submit",disabled:t.isFormLoading,loading:t.isFormLoading},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Masuk")])],1),a("div",{staticClass:"text-center white--text"},[t._v(" Belum memiliki akun? "),a("router-link",{attrs:{to:{name:"Register"}}},[a("b",[t._v("Register")])])],1),a("div",{staticClass:"text-center white--text"},[t._v("atau")]),a("div",{staticClass:"text-center mt-2"},[a("GoogleAuth")],1),a("div",{staticClass:"red--text mt-8",attrs:{hidden:0===t.errorMessage.length}},[t._v(" "+t._s(t.errorMessage)+" ")])],1)],1)],1)],1)],1),a("Snackbar",{attrs:{duration:3e3}})],1)},s=[],i=(a("96cf"),a("1da1")),r=a("22b2"),o=a("ece7"),c=a("f5ef"),u=a("c405"),l=a("c009"),d=a("1a57"),h={name:"Login",components:{Snackbar:r["a"],GoogleAuth:o["a"]},data:function(){return{user:new d["a"],isPasswordShown:!1,errorMessage:"",colorTheme:"#4F4F68"}},methods:{login:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isFormLoading=!0,e.prev=1,e.next=4,t.$store.dispatch("auth/login",t.user);case 4:a=e.sent,200===a.status&&(t.errorMessage="",t.$router.push({name:"Home"})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),t.isFormLoading=!1,t.errorMessage=t.getErrorMessage(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},mounted:function(){var t=this.$route.params;t.snackbarMessage&&c["a"].$emit("onShowSnackbar",t.snackbarMessage)},mixins:[u["a"],l["a"]]},f=h,m=a("2877"),v=a("6544"),p=a.n(v),g=a("8336"),b=a("b0af"),k=a("62ad"),w=a("a523"),_=a("4bd4"),S=a("0fd9"),x=a("8654"),B=Object(m["a"])(f,n,s,!1,null,null,null);e["default"]=B.exports;p()(B,{VBtn:g["a"],VCard:b["a"],VCol:k["a"],VContainer:w["a"],VForm:_["a"],VRow:S["a"],VTextField:x["a"]})},a40b:function(t,e,a){"use strict";a("b49f")},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var n=a("5530"),s=(a("615b"),a("10d2")),i=a("297c"),r=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(i["a"],r["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},r["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},b49f:function(t,e,a){},c009:function(t,e,a){"use strict";e["a"]={methods:{getErrorMessage:function(t){return t.response?t.response.data.data.message:"Terjadi kesalahan. Silahkan coba ulang lain kali."}}}},c405:function(t,e,a){"use strict";e["a"]={data:function(){return{usernameRules:[function(t){return!!t||"Mohon masukkan username"},function(t){return(t||"").length>=6||"Minimal 6 karakter"}],emailRules:[function(t){return!!t||"Mohon masukkan email"},function(t){return/.+@.+/.test(t)||"Alamat email tidak valid"}],passwordRules:[function(t){return(t||"").length>=8||"Minimal 8 karakter"},function(t){return/(?=.*[a-z])/.test(t)||"Harus terdapat minimal satu huruf kecil"},function(t){return/(?=.*[A-Z])/.test(t)||"Harus terdapat minimal satu huruf besar"},function(t){return/(?=.*[0-9])/.test(t)||"Harus terdapat minimal satu digit angka"}],isFormValid:!1,isFormLoading:!1}}}},ca71:function(t,e,a){},ece7:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g-signin-button",{attrs:{params:t.googleAuthParams},on:{success:t.onAuthSuccess,error:t.onAuthError}},[t._v(" Masuk dengan Google ")])},s=[],i=(a("96cf"),a("1da1")),r=a("f5ef"),o=a("c009"),c={name:"GoogleAuth",data:function(){return{googleAuthParams:{client_id:"93381776253-kapm7r0mt6ca2ijllmmtalfufi8sbj4s.apps.googleusercontent.com"}}},methods:{onAuthSuccess:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,n={username:t.wt.Ad,email:t.wt.cu,profilePicUrl:t.wt.SJ},a.next=4,e.$store.dispatch("auth/withGoogle",n);case 4:s=a.sent,200===s.status?e.$router.push({name:"Home"}):r["a"].$emit("onShowSnackbar","Username atau email telah digunakan"),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),r["a"].$emit("onShowSnackbar",e.getErrorMessage(a.t0));case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},onAuthError:function(t){0}},mixins:[o["a"]]},u=c,l=(a("a40b"),a("2877")),d=Object(l["a"])(u,n,s,!1,null,"a21eb4a4",null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-4365f8b8.f4ddea0a.js.map