(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"06dg":function(t,e,n){"use strict";n("4dPn")},"4dPn":function(t,e,n){},"4hLg":function(t,e,n){"use strict";var a=n("Mj6V"),s=n.n(a);e.a={beforeRouteLeave:function(t,e,n){t.hash||"undefined"==typeof document||(s.a.start(),n())}}},"7l0S":function(t,e,n){"use strict";n.r(e);n("R5XZ");var a={mixins:[n("4hLg").a],data:function(){return{canvas:null}},methods:{resize:function(t){t.width=window.innerWidth,t.height=window.innerHeight}},mounted:function(){var t=document.getElementById("C");this.canvas=t,this.resize(t),window.addEventListener("resize",this.resize(t));var e=t.getContext("2d"),n=t.width,a=t.height,s=e.createImageData(n,a);setInterval((function(){for(var t=n*a*4;t-=4;)for(var i=255*Math.random(),r=4;r--;)s.data[r+t]=r>2?255:i;e.putImageData(s,0,0)}),17)}},s=(n("06dg"),n("KHd+")),i=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"overflow-hidden h-screen-50vh lg:h-screen-60vh xl:h-screen-70vh w-full relative"},[e("div",{staticClass:"content__404 absolute z-3 top-0 left-0 p-16 lg:mt-18 lg:ml-10"},[e("h1",{staticClass:"text-5rem font-bold mb-3 text-text_darken dark:text-dark_text_lighten"},[this._v("\n        404\n      ")]),e("h2",{staticClass:"text-xl text-2xl mb-3 font-medium"},[this._v("\n        Oops, the page you're looking for does not exist.\n      ")]),e("p",{staticClass:"text-sm"},[this._v("You may want to head back to the homepage.")]),e("g-link",{staticClass:"mt-4 bg-accent px-5 py-2 w-max flex justify-center items-center gap-x-1 text-sm transition-colors hover:bg-accent_darken text-white dark:text-white hover:text-white dark:hover:text-white font-medium",attrs:{to:"/"}},[this._v("\n        Return Home\n      ")])],1),e("div",{staticClass:"overlay__404 w-full h-screen-50vh lg:h-screen-60vh xl:h-screen-70vh absolute top-0 right-0 left-0"},[e("div",{staticClass:"w-full bg-white dark:bg-dark opacity-80 h-screen-50vh lg:h-screen-60vh xl:h-screen-70vh absolute top-0 right-0 left-0"}),e("h1",{staticClass:"text__404 text-center text-10rem sm:text-16rem lg:text-20rem font-semibold opacity-30"},[this._v("\n        404\n      ")])]),e("canvas",{ref:"canvas",staticClass:"bg__404 w-100% w-100% z-0",attrs:{id:"C"}})])])}),[],!1,null,"7e37fc79",null);e.default=i.exports}}]);