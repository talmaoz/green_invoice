(function(t){function e(e){for(var r,i,o=e[0],l=e[1],c=e[2],p=0,f=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/green_invoice/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21e5":function(t,e,n){"use strict";var r=n("6238"),s=n.n(r);s.a},"262b":function(t,e,n){},3855:function(t,e,n){},4450:function(t,e,n){"use strict";var r=n("f0dc"),s=n.n(r);s.a},4692:function(t,e,n){t.exports=n.p+"img/green_login_page.03945da8.svg"},"4ca1":function(t,e,n){"use strict";var r=n("620a"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={name:"app"},o=i,l=(n("5c0b"),n("2877")),c=Object(l["a"])(o,s,a,!1,null,null,null),u=c.exports,p=(n("7f7f"),n("96cf"),n("3b8d")),f=n("2f62"),_=n("bc3a"),d=n.n(_),v="https://sandbox.d.greeninvoice.co.il/api/v1",g=d.a.create({withCredentials:!1,headers:{post:{"Content-Type":"application/json"}}});function m(t,e){return h.apply(this,arguments)}function h(){return h=Object(p["a"])(regeneratorRuntime.mark((function t(e,n){var r,s,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:null,t.prev=1,t.next=4,g({url:"".concat(v).concat(e),method:n,data:r});case 4:return s=t.sent,t.abrupt("return",s.data);case 8:throw t.prev=8,t.t0=t["catch"](1),console.log(t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])}))),h.apply(this,arguments)}var w={GET:function(t,e){return m(t,"GET",e)},POST:function(t,e){return m(t,"POST",e)},PUT:function(t,e){return m(t,"PUT",e)},DELETE:function(t,e){return m(t,"DELETE",e)}};function b(t){return C.apply(this,arguments)}function C(){return C=Object(p["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.POST("/account/login",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),C.apply(this,arguments)}function y(t){var e={email:{regExp:/\S+@\S+\.\S+/,error:"כתובת המייל אינה תקינה"},password:{regExp:/\S{8,16}/,error:"יש להזין 8-16 תווים"}};return e[t]}var x=n("bfa9"),k=new x["a"]({key:"green_invoice",storage:window.localStorage});r["a"].use(f["a"]);var O=function(){return{loggedUser:null}},j=new f["a"].Store({plugins:[k.plugin],strict:!0,state:O(),getters:{getLoggedUser:function(t){return t.loggedUser}},mutations:{setLoggedUser:function(t,e){t.loggedUser=e},removeLoggedUser:function(t){Object.assign(t,O())}},actions:{login:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e,n){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,b(n);case 4:s=t.sent,r("setLoggedUser",s),Ct.push("/main/welcome").then(),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0),alert("מייל או סיסמה אינם נכונים.");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));function e(e,n){return t.apply(this,arguments)}return e}(),logout:function(t){var e=t.commit;e("removeLoggedUser"),Ct.push("/login").then()}}}),E=j,$=n("8c4f"),P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"login_page"},[r("div",{staticClass:"left"},[r("div",{staticClass:"center"},[r("img",{attrs:{src:n("4692"),alt:"Login Background Image"}})])]),r("div",{staticClass:"right"},[r("app_header"),r("login_form",{staticClass:"contained"}),r("app_footer",{staticClass:"contained"})],1)])},S=[],L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("img",{attrs:{src:n("bd67"),alt:"Green Invoice Logo"}})])},T=[],N={name:"appHeader"},U=N,F=(n("6a70"),Object(l["a"])(U,L,T,!1,null,"7346b832",null)),A=F.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"login"},[n("p",{staticClass:"login_title"},[t._v("התחברות לחשבונית ירוקה")]),n("form",{staticClass:"login_form",on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"login_form_input login_form_input_email",class:t.setInputClass("email"),on:{click:function(e){return t.handleFocus("email")}}},[n("p",{staticClass:"login_form_input_label"},[t._v("מייל")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email.value,expression:"email.value"}],ref:"email",domProps:{value:t.email.value},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFocus("password")},focus:function(e){return t.handleFocus("email")},blur:function(e){return t.handleBlur("email")},input:function(e){e.target.composing||t.$set(t.email,"value",e.target.value)}}}),n("div",{staticClass:"login_form_input_info login_form_input_info_email"},[n("div",{staticClass:"login_form_input_info_container",class:t.email.error?"display_err":""},[n("p",{staticClass:"login_form_input_info_err_msg"},[t._v("\n            כתובת המייל אינה תקינה\n          ")]),n("p",{staticClass:"login_form_input_info_tip"},[t._v("\n            כתובת המייל איתה נרשמת לחשבונית ירוקה\n          ")])])])]),n("div",{staticClass:"login_form_input",class:t.setInputClass("password"),on:{click:function(e){return t.handleFocus("password")}}},[n("p",{staticClass:"login_form_input_label"},[t._v("סיסמה")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password.value,expression:"password.value"}],ref:"password",attrs:{type:"password",maxlength:"16"},domProps:{value:t.password.value},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$refs.login.click()},focus:function(e){return t.handleFocus("password")},blur:function(e){return t.handleBlur("password")},input:function(e){e.target.composing||t.$set(t.password,"value",e.target.value)}}}),n("div",{staticClass:"login_form_input_info"},[n("div",{staticClass:"login_form_input_info_container",class:t.password.error?"display_err":""},[n("p",{staticClass:"login_form_input_info_err_msg"},[t._v("\n            יש להזין 8-16 תווים\n          ")]),n("router-link",{staticClass:"login_form_input_info_tip",attrs:{to:"/welcome"}},[t._v("\n            ?שכחת סיסמה\n          ")])],1)])])]),n("div",{staticClass:"login_buttons"},[n("button",{staticClass:"login_buttons_google_login"},[t._v("כניסה עם גוגל")]),n("button",{ref:"login",staticClass:"login_buttons_email_login",on:{click:function(e){return t.login()}}},[t._v("כניסה")])])])},I=[],q={name:"loginForm",data:function(){return{email:{value:"",active:!1,error:null},password:{value:"",active:!1,error:null}}},methods:{login:function(){this.$store.dispatch("login",{email:this.email.value,password:this.password.value})},handleFocus:function(t){var e=this;this[t].error=null,this[t].active=!0,this.$nextTick((function(){e.$refs[t].focus()}))},handleBlur:function(t){this[t].active=!1;var e=y(t);this[t].error=e.regExp.test(this[t].value)?null:e.error},setInputClass:function(t){var e=this[t].active||this[t].value.length?"display_input":"";return e+=this[t].error?" input_error":"",e+=this[t].active&&!this[t].error?" input_active":"",e}}},D=q,B=(n("21e5"),Object(l["a"])(D,R,I,!1,null,"5b4128c8",null)),G=B.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"app_footer"},[r("div",{staticClass:"app_footer_right"},[r("div",{staticClass:"app_footer_right_rights_reserved"},[r("img",{attrs:{src:n("d69a"),alt:"Green Invoice Logo"}}),r("p",[t._v("חשבונית ירוקה © 2019 ")])]),r("p",{staticClass:"app_footer_right_company_description"},[t._v("הפקת חשבוניות ומסמכים עסקיים באינטרנט")])]),r("router-link",{staticClass:"app_footer_left",attrs:{to:"/welcome"}},[t._v("להצטרפות חינם")])],1)},J=[],H={name:"appFooter"},z=H,K=(n("4ca1"),Object(l["a"])(z,M,J,!1,null,"dc0d31b0",null)),Q=K.exports,V={name:"loginPage",components:{app_header:A,login_form:G,app_footer:Q}},W=V,X=(n("f815"),Object(l["a"])(W,P,S,!1,null,"11c1c6c4",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"main_page"},[r("div",{staticClass:"main_header"},[r("div",{staticClass:"flex_column"},[r("nav",t._l(t.routes,(function(e){return r("router-link",{key:e.path,staticClass:"nav_bar_item",attrs:{to:e.path}},[t._v("\n          "+t._s(e.displayName)+"\n        ")])})),1)]),r("div",{staticClass:"flex_column"},[r("img",{attrs:{src:n("bd67"),alt:"Green Invoice Logo"}})])]),r("router-view",{staticClass:"content"})],1)},tt=[],et=(n("ac6a"),{name:"mainPage",components:{app_header:A},data:function(){return{routes:this.getNavRoutes()}},methods:{getNavRoutes:function(){var t;return this.$router.options.routes.forEach((function(e){"main"===e.name&&(t=e.children)})),t}}}),nt=et,rt=(n("87a9"),Object(l["a"])(nt,Z,tt,!1,null,"20265450",null)),st=rt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"welcome"},[n("div",{staticClass:"welcome_container"},[n("div",{staticClass:"welcome_msg"},[n("p",[t._v("\n        "+t._s(t.user.firstName)+"\n        שלום\n      ")]),n("p",[t._v("ברוך הבא לעסק שלך")]),n("p",[t._v('"'+t._s(t.user.businesses[0].name)+'"')])]),n("button",{on:{click:function(e){return t.logout()}}},[t._v("יציאה")])])])},it=[],ot={name:"welcome",data:function(){return{user:this.$store.getters.getLoggedUser}},methods:{logout:function(){this.$store.dispatch("logout")}}},lt=ot,ct=(n("4450"),Object(l["a"])(lt,at,it,!1,null,"78287b4a",null)),ut=ct.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"account_details"},[n("div",{staticClass:"account_details_container"},[n("p",{staticClass:"title"},[t._v("פרטי העסק שלך")]),n("div",{staticClass:"details_list"},[n("div",{staticClass:"details_list_row"},[n("p",{staticClass:"details_list_row_title"},[t._v("שם פרטי")]),n("p",{staticClass:"details_list_row_value"},[t._v(t._s(t.user.firstName))])]),n("div",{staticClass:"details_list_row"},[n("p",{staticClass:"details_list_row_title"},[t._v("שם משפחה")]),n("p",{staticClass:"details_list_row_value"},[t._v(t._s(t.user.lastName))])]),n("div",{staticClass:"details_list_row"},[n("p",{staticClass:"details_list_row_title"},[t._v("אימייל")]),n("p",{staticClass:"details_list_row_value"},[t._v(t._s(t.user.email))])]),n("div",{staticClass:"details_list_row"},[n("p",{staticClass:"details_list_row_title"},[t._v("שם עסק")]),n("p",{staticClass:"details_list_row_value"},[t._v(t._s(t.user.businesses[0].name))])]),n("div",{staticClass:"details_list_row"},[n("p",{staticClass:"details_list_row_title"},[t._v("כתובת עסק")]),n("p",{staticClass:"details_list_row_value"},[t._v("\n          "+t._s(t.user.businesses[0].address)+"\n          ,\n          "+t._s(t.user.businesses[0].city)+"\n        ")])])])])])},ft=[],_t={name:"accountDetails",data:function(){return{user:this.$store.getters.getLoggedUser}}},dt=_t,vt=(n("7cfc"),Object(l["a"])(dt,pt,ft,!1,null,"55daca89",null)),gt=vt.exports;r["a"].use($["a"]);var mt=[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"}],ht=[{path:"/login",name:"login",component:Y,meta:{requiresAuth:!1}},{path:"/main/:id",name:"main",component:st,meta:{requiresAuth:!0},children:[{path:"/main/accountDetails",name:"accountDetails",component:gt,displayName:"החשבון שלי",meta:{requiresAuth:!0}},{path:"/main/welcome",name:"welcome",component:ut,displayName:"לובי",meta:{requiresAuth:!0}}]}],wt=[].concat(mt,ht),bt=new $["a"]({mode:"history",base:"/green_invoice/dist/",routes:wt});bt.beforeEach((function(t,e,n){var r=E.getters.getLoggedUser,s=t.matched.some((function(t){return t.meta.requiresAuth}));"login"===t.name&&r?n("/main/welcome"):s&&!r?n("/login"):n()}));var Ct=bt,yt=n("9483");Object(yt["a"])("".concat("/green_invoice/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({router:Ct,store:E,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("e332"),s=n.n(r);s.a},"620a":function(t,e,n){},6238:function(t,e,n){},"6a70":function(t,e,n){"use strict";var r=n("262b"),s=n.n(r);s.a},"7cfc":function(t,e,n){"use strict";var r=n("b4c4"),s=n.n(r);s.a},"87a9":function(t,e,n){"use strict";var r=n("3855"),s=n.n(r);s.a},b4c4:function(t,e,n){},b7a0:function(t,e,n){},bd67:function(t,e,n){t.exports=n.p+"img/green_logo.65fd0f8d.svg"},d69a:function(t,e,n){t.exports=n.p+"img/green_leaf.b024df93.svg"},e332:function(t,e,n){},f0dc:function(t,e,n){},f815:function(t,e,n){"use strict";var r=n("b7a0"),s=n.n(r);s.a}});
//# sourceMappingURL=app.1d44edae.js.map