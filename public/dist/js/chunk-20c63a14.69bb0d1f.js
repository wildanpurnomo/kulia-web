(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20c63a14"],{"22b2":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-snackbar",{attrs:{bottom:!0,timeout:t.duration},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[i("v-btn",t._b({attrs:{dark:"",text:""},on:{click:function(e){t.isSnackbarShown=!1}}},"v-btn",n,!1),[t._v("Tutup")])]}}]),model:{value:t.isSnackbarShown,callback:function(e){t.isSnackbarShown=e},expression:"isSnackbarShown"}},[t._v(" "+t._s(t.message)+" ")])},a=[],s=(i("a9e3"),i("f5ef")),r={name:"Snackbar",props:{duration:Number},data:function(){return{isSnackbarShown:!1,message:""}},methods:{showSnackbar:function(t){this.message=t,this.isSnackbarShown=!0}},mounted:function(){var t=this;s["a"].$on("onShowSnackbar",(function(e){t.showSnackbar(e)}))}},o=r,c=i("2877"),u=i("6544"),h=i.n(u),l=i("8336"),d=(i("caad"),i("ade3")),p=(i("ca71"),i("8dd9")),v=i("a9ad"),f=i("7560"),m=i("f2e7"),b=i("fe6c"),g=i("58df"),w=i("80d2"),y=i("d9bd"),k=Object(g["a"])(p["a"],v["a"],m["a"],Object(b["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:f["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,i=t.bottom,n=t.footer,a=t.insetFooter,s=t.left,r=t.right,o=t.top;return{paddingBottom:Object(w["f"])(i+n+a),paddingLeft:this.app?Object(w["f"])(s):void 0,paddingRight:this.app?Object(w["f"])(r):void 0,paddingTop:Object(w["f"])(e+o)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(y["e"])("auto-height",this),0==this.timeout&&Object(y["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(w["l"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(d["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(w["l"])(this)])},genWrapper:function(){var t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:p["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),O=Object(c["a"])(o,n,a,!1,null,null,null);e["a"]=O.exports;h()(O,{VBtn:l["a"],VSnackbar:k})},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("6b75");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=i("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||s(t)||Object(r["a"])(t)||o()}},"5e23":function(t,e,i){},7958:function(t,e,i){},"8ce9":function(t,e,i){},abd3:function(t,e,i){},ca71:function(t,e,i){},cd56:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("MainNavbar",{attrs:{pages:t.children}}),i("Breadcrumbs"),i("Snackbar",{attrs:{duration:3e3}}),i("router-view")],1)},a=[],s=(i("96cf"),i("1da1")),r=i("22b2"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",[i("v-toolbar",{attrs:{color:t.colorTheme,dark:""}},[i("v-app-bar-nav-icon",{on:{click:function(e){t.isDrawer=!t.isDrawer}}}),i("v-toolbar-title",[t._v(t._s(t.pageTitle))]),i("v-spacer"),i("v-btn",{attrs:{text:""},on:{click:t.logout}},[i("span",[t._v("Logout")]),i("v-icon",[t._v("mdi-exit-to-app")])],1)],1),i("v-navigation-drawer",{attrs:{color:t.colorTheme,absolute:"",temporary:"",dark:""},model:{value:t.isDrawer,callback:function(e){t.isDrawer=e},expression:"isDrawer"}},[i("v-list",{attrs:{nav:""}},[i("v-list-item",{attrs:{"two-line":""}},[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.user.profilePicUrl}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.user.username))])],1)],1),i("v-divider"),t._l(t.pages,(function(e,n){return i("v-list-item",{key:n,attrs:{link:"",group:"pages",to:e.routerTo,exact:""}},[i("v-list-item-icon",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.name))])],1)],1)}))],2)],1)],1)},c=[],u=i("f5ef"),h={name:"Navbar",props:{pages:Array},computed:{user:function(){return this.$store.getters["auth/userData"]}},data:function(){return{isDrawer:!1,colorTheme:"#4F4F68",pageTitle:""}},methods:{logout:function(){u["a"].$emit("onLogout")}},created:function(){""===this.user.username&&u["a"].$emit("onAuthenticate")},mounted:function(){var t=this;u["a"].$on("onPageChange",(function(e){t.pageTitle=e}))}},l=h,d=i("2877"),p=i("6544"),v=i.n(p),f=(i("498a"),i("5530")),m=i("9d26"),b=i("8336"),g=i("2b0e"),w=g["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var i=e.slots,n=e.listeners,a=e.props,s=e.data,r=Object.assign(s,{staticClass:"v-app-bar__nav-icon ".concat(s.staticClass||"").trim(),props:Object(f["a"])(Object(f["a"])({},a),{},{icon:!0}),on:n}),o=i().default;return t(b["a"],r,o||[t(m["a"],"$menu")])}}),y=i("ce7e"),k=i("132d"),O=i("adda"),$=i("8860"),_=i("da13"),j=i("8270"),x=i("5d23"),B=i("34c3"),A=(i("99af"),i("a9e3"),i("c7cd"),i("7958"),i("fe6c")),S=i("58df");function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(S["a"])(Object(A["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}var T=i("a9ad"),M=i("b848"),E=(i("caad"),i("b0c0"),i("d9bd")),V=g["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,i=t.width,n=t.name,a=t.mobileBreakpoint;if(a===this.mobileBreakpoint)return e;var s=parseInt(this.mobileBreakpoint,10),r=!isNaN(s);return r?i<s:n===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(E["d"])("mobile-break-point","mobile-breakpoint",this)}}),R=i("e707"),H=i("d10f"),N=i("7560"),L=i("a293"),P=i("dc22"),X=(i("4160"),i("159b"),i("80d2")),I=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,a=t.touchendY,s=.5,r=16;t.offsetX=i-e,t.offsetY=a-n,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&i<e-r&&t.left(t),t.right&&i>e+r&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&a<n-r&&t.up(t),t.down&&a>n+r&&t.down(t))};function D(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function Y(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),I(e)}function W(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function z(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return D(t,e)},touchend:function(t){return Y(t,e)},touchmove:function(t){return W(t,e)}}}function U(t,e,i){var n=e.value,a=n.parent?t.parentElement:t,s=n.options||{passive:!0};if(a){var r=z(e.value);a._touchHandlers=Object(a._touchHandlers),a._touchHandlers[i.context._uid]=r,Object(X["r"])(r).forEach((function(t){a.addEventListener(t,r[t],s)}))}}function F(t,e,i){var n=e.value.parent?t.parentElement:t;if(n&&n._touchHandlers){var a=n._touchHandlers[i.context._uid];Object(X["r"])(a).forEach((function(t){n.removeEventListener(t,a[t])})),delete n._touchHandlers[i.context._uid]}}var J={inserted:U,unbind:F},q=J,K=Object(S["a"])(C("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),T["a"],M["a"],V,R["a"],H["a"],N["a"]),Z=K.extend({name:"v-navigation-drawer",directives:{ClickOutside:L["a"],Resize:P["a"],Touch:q},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(f["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&V.options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(X["f"])(this.height),top:this.isBottom?"auto":Object(X["f"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(X["f"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(X["f"])(this.computedTransform,"%"),")"),width:Object(X["f"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(O["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var e=Object(X["l"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(X["l"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),G=i("2fa4"),Q=(i("0481"),i("4069"),i("3835")),tt=(i("5e23"),i("8dd9")),et=tt["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(f["a"])(Object(f["a"])({},tt["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(f["a"])(Object(f["a"])({},this.measurableStyles),{},{height:Object(X["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(Q["a"])(e,2),n=i[0],a=i[1];t.$attrs.hasOwnProperty(n)&&Object(E["a"])(n,a,t)}))},methods:{genBackground:function(){var t={height:Object(X["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(O["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(X["f"])(this.computedContentHeight)}},Object(X["l"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(X["f"])(this.extensionHeight)}},Object(X["l"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}}),it=Object(X["g"])("v-toolbar__title"),nt=(Object(X["g"])("v-toolbar__items"),Object(d["a"])(l,o,c,!1,null,null,null)),at=nt.exports;v()(nt,{VAppBarNavIcon:w,VBtn:b["a"],VDivider:y["a"],VIcon:k["a"],VImg:O["a"],VList:$["a"],VListItem:_["a"],VListItemAvatar:j["a"],VListItemContent:x["a"],VListItemIcon:B["a"],VListItemTitle:x["c"],VNavigationDrawer:Z,VSpacer:G["a"],VToolbar:et,VToolbarTitle:it});var st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pl-13"},[i("v-breadcrumbs",{attrs:{large:""}},[i("v-breadcrumbs-item",{attrs:{items:t.items,href:t.items.path,disabled:t.items.disabled}},[t._v(t._s(t.items.meta.value))])],1),i("v-divider")],1)},rt=[],ot={data:function(){return{items:[]}},watch:{$route:function(){this.getRoute()}},methods:{getRoute:function(){this.items=this.$route}},created:function(){this.getRoute()}},ct=ot,ut=(i("a15b"),i("abd3"),i("ade3")),ht=i("1c87"),lt=Object(S["a"])(ht["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(ut["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return t("li",[t(i,Object(f["a"])(Object(f["a"])({},n),{},{attrs:Object(f["a"])(Object(f["a"])({},n.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),dt=Object(X["g"])("v-breadcrumbs__divider","li"),pt=Object(S["a"])(N["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(f["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(dt,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,i=[],n=0;n<this.items.length;n++){var a=this.items[n];i.push(a.text),e?t.push(this.$scopedSlots.item({item:a})):t.push(this.$createElement(lt,{key:i.join("."),props:a},[a.text])),n<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),vt=Object(d["a"])(ct,st,rt,!1,null,null,null),ft=vt.exports;v()(vt,{VBreadcrumbs:pt,VBreadcrumbsItem:lt,VDivider:y["a"]});var mt=i("d4ec"),bt=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(mt["a"])(this,t),this.name=e,this.icon=i,this.routerTo=n},gt={name:"Main",components:{MainNavbar:at,Snackbar:r["a"],Breadcrumbs:ft},data:function(){return{currentPageName:"Beranda",children:[new bt("Beranda","mdi-view-dashboard",{name:"Home"}),new bt("Konten Saya","mdi-content-paste",{name:"MyContent"}),new bt("Mengikuti","mdi-account-box-multiple",{name:"MyFollowing"}),new bt("Edit Profil","mdi-account",{name:"MyProfile"})]}},methods:{authenticate:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("auth/authenticate");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),t.logout(!0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},logout:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var n,a,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=t.length>0&&void 0!==t[0]&&t[0],i.next=3,e.$store.dispatch("auth/logout");case 3:a=i.sent,200===a.status&&(e.resetStates(),s=n?"Sesi berakhir":"Berhasil log out",e.redirectLogin(s));case 5:case"end":return i.stop()}}),i)})))()},redirectLogin:function(t){this.$router.push({name:"Login",params:{snackbarMessage:t}}).catch((function(t){0}))},resetStates:function(){this.$store.dispatch("content/resetState"),this.$store.dispatch("story/resetState")}},created:function(){var t=this;u["a"].$on("onLogout",(function(){t.logout()})),u["a"].$on("onSessionEnd",(function(){t.logout({isForceLogout:!0})})),u["a"].$on("onAuthenticate",(function(){t.authenticate()}))}},wt=gt,yt=Object(d["a"])(wt,n,a,!1,null,null,null);e["default"]=yt.exports},ce7e:function(t,e,i){"use strict";var n=i("5530"),a=(i("8ce9"),i("7560"));e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},dc22:function(t,e,i){"use strict";function n(t,e){var i=e.value,n=e.options||{passive:!0};window.addEventListener("resize",i,n),t._onResize={callback:i,options:n},e.modifiers&&e.modifiers.quiet||i()}function a(t){if(t._onResize){var e=t._onResize,i=e.callback,n=e.options;window.removeEventListener("resize",i,n),delete t._onResize}}var s={inserted:n,unbind:a};e["a"]=s}}]);
//# sourceMappingURL=chunk-20c63a14.69bb0d1f.js.map