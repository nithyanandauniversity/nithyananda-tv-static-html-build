import{_ as C}from"./VideoSlider.249082c1.js";import{_ as S}from"./VideoSliderSkeleton.c73d2427.js";import{i as B,j as E,q as t,y as N,z as T,s as L,o as s,a as l,e as u,w as h,F as x,r as w,u as _,T as M,A as P,B as I,b as i,C as A,x as F,c as H}from"./entry.6a23ce5c.js";import"./nuxt-link.01267993.js";import"./VideoCard.b43168f9.js";import"./lazysizes.869e4f93.js";import"./numbro.min.107d2f30.js";import"./index.e9cbcaec.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./CardSkeleton.c416f748.js";const j=i("h1",{class:"text-3xl font-bold text-secondary dark:text-dark_text_lighten <sm:px-6 px-10 mt-10"}," Explore Playlists ",-1),q={class:"my-4"},z={key:0,class:"min-h-400px"},Y=B({__name:"explore",async setup(D){let a,m;E({title:"Explore Videos and Playlists - Nithyananda TV"});const r=t([]),v=N(),k=([a,m]=T(()=>v("/playlists/with-videos")),a=await a,m(),a);r.value.push(...k.data);const o=t(!1),c=t(!1),f=t(1),d=t(null);L(()=>{new IntersectionObserver(b).observe(d.value?d.value:new HTMLElement)});const b=(e,y)=>{e.forEach(async p=>{p.isIntersecting&&!c.value&&(o.value=!0,await g()),c.value&&y.disconnect()})},g=async()=>{const e=await v("/playlists/with-videos",{params:{pagination:{start:f.value*5,limit:5}}});e.data.length>0?r.value.push(...e.data):c.value=!0,f.value++,o.value=!1};return(e,y)=>{const p=C,V=S;return s(),l("div",null,[j,u(M,{name:"fade"},{default:h(()=>[(s(!0),l(x,null,w(_(r),n=>(s(),H(p,{key:`playlist-${n.id}`,playlist:n,class:"videoSlider"},null,8,["playlist"]))),128))]),_:1}),u(A,{name:"fade"},{default:h(()=>[P(i("div",q,[(s(),l(x,null,w(3,n=>i("div",{key:n,class:"mt-10"},[u(V)])),64))],512),[[I,_(o)]])]),_:1}),_(o)?(s(),l("div",z)):F("",!0),i("div",{class:"invisible",ref_key:"loadMore",ref:d},".",512)])}}});export{Y as default};
