(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"19Cb":function(t,e,r){"use strict";r("rrPl")},"4hLg":function(t,e,r){"use strict";var n=r("Mj6V"),a=r.n(n);e.a={beforeRouteLeave:function(t,e,r){t.hash||"undefined"==typeof document||(a.a.start(),r())}}},IScw:function(t,e,r){"use strict";r.r(e);var n=r("HaE+"),a=(r("ls82"),r("ma9I"),r("VV+c")),o=r("4hLg"),s=r("vDqi"),c={name:"Redirect",components:{Loader:a.a},mixins:[o.a],data:function(){return{loader:!0,strapiError:null}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$route.query.access_token?s.get("".concat("https://blooming-mesa-83646.herokuapp.com","/api/auth/google/callback?access_token=").concat(t.$route.query.access_token)).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$cookies.set("NTV_Session",r.data.jwt),t.$store.commit("setLoggedIn",{jwt:r.data.jwt,user:r.data.user}),t.$store.commit("setAuthChecked",!0),t.$router.push("/account");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){e.response.data.error?t.strapiError=e.response.data.error.message:t.strapiError="An unknown error occured.",t.loader=!1})):(t.strapiError="An error occured in signing you in to Google.",t.loader=!1);case 1:case"end":return e.stop()}}),e)})))()}},i=r("KHd+"),u=Object(i.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("div",{staticClass:"flex justify-center items-center w-full h-full"},[t.loader?r("div",{staticClass:"flex justify-center items-center p-12 min-w-50vw min-h-50vh"},[r("Loader")],1):r("div",{staticClass:"px-10 py-14 mt-16 min-w-40vw bg-theme_light"},[t.strapiError?r("div",[r("p",{staticClass:"text-base text-red-400 opacity-70 text-center"},[t._v("\n          "+t._s(t.strapiError)+" "),r("br"),t._v("Please try\n          "),r("g-link",{staticClass:"font-bold text-accent",attrs:{to:"/login"}},[t._v("logging in again")])],1)]):t._e()])])])}),[],!1,null,"dc28a274",null);e.default=u.exports},"VV+c":function(t,e,r){"use strict";var n={},a=(r("19Cb"),r("KHd+")),o=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"Loader mx-auto"})}),[],!1,null,"23e2b738",null);e.a=o.exports},rrPl:function(t,e,r){}}]);