(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"19Cb":function(t,e,a){"use strict";a("rrPl")},"4hLg":function(t,e,a){"use strict";var s=a("Mj6V"),n=a.n(s);e.a={beforeRouteLeave:function(t,e,a){t.hash||"undefined"==typeof document||(n.a.start(),a())}}},"AT+L":function(t,e,a){"use strict";a.r(e);var s=a("HaE+"),n=(a("ls82"),a("lO2I")),i=a("za7x"),r=a("VTBJ"),o=a("VV+c"),c=a("e7F3"),l=a("TJPC"),u=a("vDqi");Object(c.c)("email",Object(r.a)(Object(r.a)({},l.b),{},{message:"Not a valid email address"})),Object(c.c)("min",{validate:function(t,e){return t.length>=e.length},params:["length"],message:"{_field_} must be at least {length} characters"}),Object(c.c)("required",Object(r.a)(Object(r.a)({},l.c),{},{message:"{_field_} is required"}));var d={name:"LoginForm",components:{Icon:i.a,ValidationProvider:c.b,ValidationObserver:c.a,Loader:o.a},data:function(){return{emailIcon:n.b,pwdIcon:n.l,submitIcon:n.u,email:"",name:"",password:"",strapiError:null,submitLoader:!1}},methods:{onSubmit:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.submitLoader=!0,u.post("".concat("https://blooming-mesa-83646.herokuapp.com","/api/auth/local"),{identifier:t.email,password:t.password}).then((function(e){t.submitLoader=!1,t.$emit("loginSuccess",{user:e.data.user,jwt:e.data.jwt})})).catch((function(e){t.strapiError=e.response.data.error.message,t.submitLoader=!1}));case 2:case"end":return e.stop()}}),e)})))()}}},m=(a("wxJP"),a("KHd+")),p=Object(m.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[a("form",{staticClass:"registrationForm flex flex-col gap-2 mt-6",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),s(t.onSubmit)}}},[a("ValidationProvider",{attrs:{name:"Email Address",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"inputItem flex gap-3 p-3 bg-theme_lighter "},[a("Icon",{staticClass:"transition hover:fill-white",attrs:{icon:t.emailIcon,color:"fill-gray-400 w-4"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"bg-transparent outline-none border-none text-sm w-full",attrs:{type:"email",name:"email",id:"email",placeholder:"Email Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})],1),a("div",{staticClass:"flex flex-col justify-end min-h-4 mt-2"},[a("span",{staticClass:"text-xs text-red-400 transition",class:e.touched&&e.failed||e.pristine&&e.failed?"opacity-100 visible":"opacity-0 invisible"},[t._v(t._s(e.errors[0]))])])]}}],null,!0)}),a("ValidationProvider",{attrs:{name:"Password",rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"inputItem flex gap-3 p-3 bg-theme_lighter "},[a("Icon",{staticClass:"transition hover:fill-white",attrs:{icon:t.pwdIcon,color:"fill-gray-400 w-4"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"bg-transparent outline-none border-none text-sm w-full",attrs:{type:"password",name:"password",id:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})],1),a("div",{staticClass:"flex flex-col justify-end min-h-4 mt-2"},[a("span",{staticClass:"text-xs text-red-400 transition",class:e.touched&&e.failed||e.pristine&&e.failed?"opacity-100 visible":"opacity-0 invisible"},[t._v(t._s(e.errors[0]))])])]}}],null,!0)}),a("p",{staticClass:"text-base text-red-400 transition text-center w-full",class:t.strapiError?"opacity-100 visible":"opacity-0 invisible"},[t._v("\n        "+t._s(t.strapiError)+"\n      ")]),t.submitLoader?a("Loader"):a("button",{staticClass:"submitForm flex justify-center items-center gap-2 p-3 bg-theme_bg transition hover:bg-theme_dark hover:text-accent font-medium",attrs:{type:"submit"}},[a("Icon",{staticClass:"transition",attrs:{icon:t.submitIcon,color:"fill-gray-100 w-4"}}),t._v("\n        Log in\n      ")],1)],1)]}}])})],1)}),[],!1,null,"51adf848",null).exports,f=a("MyAk"),g=a("4hLg"),h={name:"Login",components:{Icon:i.a,LoginForm:p},mixins:[g.a,f.a],data:function(){return{googleIcon:n.i,loggedIn:!1,strapiUrl:"https://blooming-mesa-83646.herokuapp.com"}},methods:{handleLogin:function(t){var e=this;return Object(s.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.$cookies.set("NTV_Session",t.jwt),e.$store.commit("setLoggedIn",{jwt:t.jwt,user:t.user}),e.$store.commit("setAuthChecked",!0),e.loggedIn=!0,e.$router.push("/account");case 5:case"end":return a.stop()}}),a)})))()}}},b=(a("dml+"),Object(m.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"flex justify-center items-center"},[t.$store.getters.authChecked&&!t.$store.getters.loggedIn?a("div",{staticClass:"px-10 py-14 mt-16 <md:min-w-screen md:w-512px bg-theme_light"},[a("div",{staticClass:"text-3xl font-bold mb-1"},[t._v("Log in")]),a("p",{staticClass:"text-base text-text_dark opacity-70"},[t._v("\n        Don't have an account?\n        "),a("g-link",{staticClass:"font-bold text-accent",attrs:{to:"/register"}},[t._v("Sign up")])],1),a("a",{staticClass:"googleLogin flex justify-center items-center gap-2 mt-6 p-3 bg-theme_lighter transition hover:bg-theme_bg",attrs:{href:t.strapiUrl+"/api/connect/google"}},[a("Icon",{staticClass:"transition hover:fill-white",attrs:{icon:t.googleIcon,color:"fill-gray-400 w-6"}}),t._v("\n        Sign in with Google\n      ")],1),a("p",{staticClass:"separator my-3 text-text_dark opacity-50 text-center overflow-hidden"},[t._v("\n        or\n      ")]),a("LoginForm",{on:{loginSuccess:t.handleLogin}})],1):t._e()])])}),[],!1,null,"3a1adb66",null));e.default=b.exports},EYHA:function(t,e,a){},MyAk:function(t,e,a){"use strict";a("vDqi");e.a={created:function(){var t=this;this.unwatch=this.$store.watch((function(t,e){return e.authChecked}),(function(e,a){e&&t.$store.getters.loggedIn&&t.$router.push("/account")}))},beforeDestroy:function(){this.unwatch()}}},"VV+c":function(t,e,a){"use strict";var s={},n=(a("19Cb"),a("KHd+")),i=Object(n.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"Loader mx-auto"})}),[],!1,null,"23e2b738",null);e.a=i.exports},"dml+":function(t,e,a){"use strict";a("EYHA")},ld2f:function(t,e,a){},rrPl:function(t,e,a){},wxJP:function(t,e,a){"use strict";a("ld2f")}}]);