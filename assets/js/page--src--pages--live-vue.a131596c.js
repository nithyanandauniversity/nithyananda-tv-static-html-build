(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"C+AA":function(t,e,a){},PnwD:function(t,e,a){"use strict";a.r(e);a("s+lh");var s=a("gpus"),i=a("5rCo"),n=a("4hLg"),l={name:"Live",components:{VideoCard:s.a,Chat:i.a},metaInfo:{title:"Livestream",meta:[{name:"description",content:"KAILASA's Nithyananda TV gives you front-row access to live Satsangs,\n      discourses, latest news, events, and teachings from the SPH Nithyananda\n      Paramashivam."},{key:"og:title",hid:"og:title",property:"og:title",content:"Live - KAILASA's Nithyananda TV "},{key:"og:description",hid:"og:description",property:"og:description",content:"KAILASA's Nithyananda TV gives you front-row access to live Satsangs,\n      discourses, latest news, events, and teachings from the SPH Nithyananda\n      Paramashivam."}]},mixins:[n.a],data:function(){return{websiteDomain:"nithyananda.tv",strapiUrl:"https://ntv.dev.nithyanandajnanalaya.org"}}},r=(a("f8/J"),a("KHd+")),o=null,d=Object(r.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"gridContainer my-6 px-6 gap-4"},[a("div",{staticClass:"live__videoframe aspect-video flex-grow-0 flex-shrink-0 <lg:w-full <lg:mb-6"},[a("iframe",{staticClass:"w-full",attrs:{id:"e7bb6704-0c6d-2dfb-bc93-c5fe4dda8ac9",src:t.$store.getters.getLivestreamDetails.liveTitle,width:"100%",height:"100%",frameborder:"0",scrolling:"no",allow:"autoplay;encrypted-media",allowfullscreen:"",webkitallowfullscreen:"",mozallowfullscreen:"",oallowfullscreen:"",msallowfullscreen:""}})]),a("div",{staticClass:"live__chat max-h-80vh <lg:mb-8"},[a("Chat")],1),a("div",{staticClass:"metaContainer"},[a("div",{staticClass:"video__text flex-grow-1 mt-4 mb-8"},[a("h1",{staticClass:"text-3xl mb-3 font-bold text-secondary dark:text-dark_text_lighten"},[t._v("\n          "+t._s(t.$store.getters.getLivestreamDetails.liveTitle)+"\n        ")]),a("p",{staticClass:"text-base text-text_lighten dark:text-dark_text opacity-80"},[t._v("\n          KAILASA's Nithyananda TV Livestream: Join the broadcast to get\n          front-row access to live Satsangs, discourses, latest news, events,\n          and teachings from the SPH Nithyananda Paramashivam.\n        ")])]),a("div",{staticClass:"video__watchmore"},[a("h2",{staticClass:"text-2xl font-bold my-3 text-secondary dark:text-dark_text_lighten"},[t._v("\n          More Livestreams\n        ")]),a("div",{staticClass:"pt-4 flex flex-wrap gap-x-2 gap-y-5"},t._l(t.$page.strapi.livestreams.data,(function(e){return a("g-link",{key:e.id,staticClass:"videoCard videoCard__link flex flex-row sm:flex-col gap-2 <sm:w-full",attrs:{to:"/livestream/"+e.attributes.slug}},[a("div",{staticClass:"videoThumbnail__container bg-accent_lighten dark:bg-dark_lighten aspect-video relative <sm:basis-2/5 <sm:flex-grow-0 <sm:flex-shrink"},[a("img",{ref:"vImg",refInFor:!0,staticClass:"videoThumbnail lazyload w-full h-full object-cover",attrs:{"data-src":""+t.strapiUrl+e.attributes.featuredImage.data.attributes.url}})]),a("div",{staticClass:"videoCard__meta <sm:basis-3/5 <sm:flex-grow <sm:flex-shrink-0"},[a("h3",{staticClass:"videoCard__title text-sm text-text dark:text-text_dark font-medium"},[t._v("\n                "+t._s(e.attributes.title)+"\n              ")]),a("p",{staticClass:"videoCard__description text-xs text-text dark:text-text_dark mt-1 opacity-70"},[t._v("\n                "+t._s(e.attributes.description.substring(0,100)+"...")+"\n              ")])])])})),1)])])])])}),[],!1,null,"1f3f56a3",null);"function"==typeof o&&o(d);e.default=d.exports},"f8/J":function(t,e,a){"use strict";a("C+AA")}}]);