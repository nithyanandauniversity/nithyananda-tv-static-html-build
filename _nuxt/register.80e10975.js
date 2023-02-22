import{j as I,x as R,v as r,o as m,a as g,e as o,w as L,b as t,u as e,S as x,q as F,t as U,h as S,c as q,p as B,i as E,l as P,k as T,m as G,A as j,f as Z}from"./entry.ef5d6334.js";import{o as N,j as z,k as D,l as H,_ as A,n as K}from"./mdi.8a543158.js";import{_ as O}from"./Loader.18622640.js";import{F as v,a as J}from"./vee-validate.esm.fdb8d0ff.js";import{_ as M}from"./_plugin-vue_export-helper.c27b6911.js";import{u as Q}from"./composables.49ef9c00.js";const w=_=>(B("data-v-44822f80"),_=_(),E(),_),W={class:"inputItem flex gap-3 p-3 bg-white dark:bg-dark_info"},X=w(()=>t("div",{class:"flex flex-col justify-end min-h-4 mt-2"},null,-1)),Y={class:"inputItem flex gap-3 p-3 bg-white dark:bg-dark_info"},ee=w(()=>t("div",{class:"flex flex-col justify-end min-h-4 mt-2"},null,-1)),te={class:"inputItem flex gap-3 p-3 bg-white dark:bg-dark_info"},se=w(()=>t("div",{class:"flex flex-col justify-end min-h-4 mt-2"},null,-1)),oe={class:"inputItem flex gap-3 p-3 bg-white dark:bg-dark_info"},ne=w(()=>t("div",{class:"flex flex-col justify-end min-h-4 mt-2"},null,-1)),ae={key:0,type:"submit",class:"submitForm flex justify-center items-center gap-2 p-3 transition bg-accent hover:bg-accent_darken text-accent_lighten font-medium"},le=I({__name:"RegisterForm",emits:["registerSuccess"],setup(_,{emit:b}){const y=R(),i=r(""),c=r(""),a=r(""),u=r(""),f=r(""),n=r(!1),$=s=>s?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(s)?!0:"Not a valid email address":"This field is required",h=s=>s?!0:"This field is required",k=s=>s?s.length<8?"Password must be at least 8 characters":!0:"This field is required",V=async()=>{n.value=!0;try{const s=await $fetch(`${y.public.strapiURL}/api/auth/local/register`,{method:"POST",body:{givenName:c.value,familyName:a.value,name:`${c.value} ${a.value}`,username:i.value,email:i.value,password:u.value}});n.value=!1,b("registerSuccess",{user:s.user,jwt:s.jwt})}catch(s){f.value=s.response.data.error.message,n.value=!1}};return(s,l)=>{const p=A,C=O;return m(),g("div",null,[o(e(J),{autocomplete:"off",onSubmit:V,class:"registrationForm flex flex-col gap-2 mt-6"},{default:L(()=>[t("div",W,[o(p,{icon:e(N),color:"fill-gray-400 w-4",class:"transition hover:fill-white"},null,8,["icon"]),o(e(v),{type:"text",name:"fname",id:"fname",placeholder:"First Name",class:"bg-transparent outline-none border-none text-sm w-full font-medium",modelValue:e(c),"onUpdate:modelValue":l[0]||(l[0]=d=>x(c)?c.value=d:null),rules:h},null,8,["modelValue"])]),X,t("div",Y,[o(p,{icon:e(N),color:"fill-gray-400 w-4",class:"transition hover:fill-white"},null,8,["icon"]),o(e(v),{type:"text",name:"lname",id:"lname",placeholder:"Last Name",class:"bg-transparent outline-none border-none text-sm w-full font-medium",modelValue:e(a),"onUpdate:modelValue":l[1]||(l[1]=d=>x(a)?a.value=d:null),rules:h},null,8,["modelValue"])]),ee,t("div",te,[o(p,{icon:e(z),color:"fill-gray-400 w-4",class:"transition hover:fill-white"},null,8,["icon"]),o(e(v),{type:"email",name:"email",id:"email",placeholder:"Email Address",class:"bg-transparent outline-none border-none text-sm w-full font-medium",modelValue:e(i),"onUpdate:modelValue":l[2]||(l[2]=d=>x(i)?i.value=d:null),rules:$},null,8,["modelValue"])]),se,t("div",oe,[o(p,{icon:e(D),color:"fill-gray-400 w-4",class:"transition hover:fill-white"},null,8,["icon"]),o(e(v),{type:"password",name:"password",id:"password",placeholder:"Password",class:"bg-transparent outline-none border-none text-sm w-full font-medium",modelValue:e(u),"onUpdate:modelValue":l[3]||(l[3]=d=>x(u)?u.value=d:null),rules:k},null,8,["modelValue"])]),ne,t("p",{class:F(["text-base text-red-400 transition text-center w-full",e(f)?"opacity-100 visible":"opacity-0 invisible"])},U(e(f)),3),e(n)?(m(),q(C,{key:1})):(m(),g("button",ae,[o(p,{icon:e(H),color:"fill-white",class:"w-4"},null,8,["icon"]),S(" Register ")]))]),_:1})])}}});const ie=M(le,[["__scopeId","data-v-44822f80"]]),re={class:"flex justify-center items-center"},ce={key:0,class:"px-10 py-14 my-16 <md:min-w-screen md:w-512px bg-accent_lighten dark:bg-dark_lighten"},de={key:0},ue=t("div",{class:"text-3xl font-bold mb-1 text-text dark:text-dark_text_lighten"}," Get Started ",-1),me={class:"text-base text-text dark:text-dark_text opacity-70"},_e=["href"],fe=t("span",{class:"font-medium text-white"}," Sign in with Google ",-1),pe=t("p",{class:"separator my-3 text-text dark:text-dark_text opacity-50 text-center overflow-hidden"}," or ",-1),ye=I({__name:"register",setup(_){Q({title:"Register - Nithyananda TV"});const b=R(),y=P(),i=r(!1),c=r({}),a=T(),u=G("NTV_Session"),f=async n=>{c.value=n.user,i.value=!0,u.value=n.jwt,a.setLoggedIn({jwt:n.jwt,user:n.user}),y.push("/account")};return(n,$)=>{const h=Z,k=A,V=ie;return m(),g("div",re,[e(a).getAuthChecked&&!e(a).getLoggedIn?(m(),g("div",ce,[e(i)?j("",!0):(m(),g("div",de,[ue,t("p",me,[S(" Already have an account? "),o(h,{class:"font-medium text-accent dark:text-accent hover:dark:text-accent_lighten",to:"/login"},{default:L(()=>[S("Log in")]),_:1})]),t("a",{class:"googleLogin flex justify-center items-center gap-2 mt-6 p-3 transition bg-accent hover:bg-accent_darken",href:`${e(b).public.strapiURL}/api/connect/google`},[o(k,{icon:e(K),color:"fill-white",class:"w-5"},null,8,["icon"]),fe],8,_e),pe,o(V,{onRegisterSuccess:f})]))])):j("",!0)])}}});export{ye as default};
