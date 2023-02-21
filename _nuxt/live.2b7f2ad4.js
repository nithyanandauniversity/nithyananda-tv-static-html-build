import{_ as h}from"./Chat.vue.a73a8db9.js";import{j as v,B as g,x as b,I as w,C as d,a as _,b as t,u as i,e as k,t as l,F as y,r as C,p as L,i as S,o as r,c as I,w as N,f as B}from"./entry.1682faa2.js";import{u as T}from"./composables.14d93683.js";import"./lazysizes.869e4f93.js";import{_ as A}from"./_plugin-vue_export-helper.c27b6911.js";import"./mdi.ae7c41fd.js";import"./Loader.620ed525.js";import"./index.a8fdb12b.js";const m=a=>(L("data-v-8faaf477"),a=a(),S(),a),V={class:"gridContainer my-6 px-6 gap-4"},$={class:"live__videoframe aspect-video flex-grow-0 flex-shrink-0 <lg:w-full <lg:mb-6"},D=["src"],U={class:"live__chat max-h-80vh <lg:mb-8"},j={class:"metaContainer"},z={class:"video__text flex-grow-1 mt-4 mb-8"},E={class:"text-3xl mb-3 font-bold text-secondary dark:text-dark_text_lighten"},F=m(()=>t("p",{class:"text-base text-text_lighten dark:text-dark_text opacity-80"}," KAILASA's Nithyananda TV Livestream: Join the broadcast to get front-row access to live Satsangs, discourses, latest news, events, and teachings from the SPH Nithyananda Paramashivam. ",-1)),H={class:"video__watchmore"},P=m(()=>t("h2",{class:"text-2xl font-bold my-3 text-secondary dark:text-dark_text_lighten"}," More Livestreams ",-1)),R={class:"pt-4 flex flex-wrap gap-x-2 gap-y-5"},J={class:"videoThumbnail__container bg-accent_lighten dark:bg-dark_lighten aspect-video relative <sm:basis-2/5 <sm:flex-grow-0 <sm:flex-shrink"},K=["data-src"],M={class:"videoCard__meta <sm:basis-3/5 <sm:flex-grow <sm:flex-shrink-0"},q={class:"videoCard__title text-sm text-text dark:text-text_dark font-medium"},G={class:"videoCard__description text-xs text-text dark:text-text_dark mt-1 opacity-70"},O=v({__name:"live",async setup(a){let e,o;const{find:n}=g(),f=b(),c=w();[e,o]=d(()=>n("primary-livestream")),e=await e,o(),T({title:"Livestream - Nithyananda TV"});const p=([e,o]=d(()=>n("livestreams",{fields:["title","slug","description","embedUrl"],populate:{featuredImage:{fields:["url"]}}})),e=await e,o(),e);return(Q,W)=>{const u=h,x=B;return r(),_("div",V,[t("div",$,[t("iframe",{class:"w-full",id:"e7bb6704-0c6d-2dfb-bc93-c5fe4dda8ac9",src:i(c).getLivestreamDetails.liveEmbedUrl,width:"100%",height:"100%",frameborder:"0",scrolling:"no",allow:"autoplay;encrypted-media",allowfullscreen:"",webkitallowfullscreen:"",mozallowfullscreen:"",oallowfullscreen:"",msallowfullscreen:""},null,8,D)]),t("div",U,[k(u)]),t("div",j,[t("div",z,[t("h1",E,l(i(c).getLivestreamDetails.liveTitle),1),F]),t("div",H,[P,t("div",R,[(r(!0),_(y,null,C(i(p).data,s=>(r(),I(x,{key:s.id,to:`/livestream/${s.attributes.slug}`,class:"videoCard videoCard__link flex flex-row sm:flex-col gap-2 <sm:w-full"},{default:N(()=>[t("div",J,[t("img",{"data-src":`${i(f).public.strapiURL}${s.attributes.featuredImage.data.attributes.url}`,class:"videoThumbnail lazyload w-full h-full object-cover",ref_for:!0,ref:"vImg"},null,8,K)]),t("div",M,[t("h3",q,l(s.attributes.title),1),t("p",G,l(s.attributes.description.substring(0,100)+"..."),1)])]),_:2},1032,["to"]))),128))])])])])}}});const it=A(O,[["__scopeId","data-v-8faaf477"]]);export{it as default};
