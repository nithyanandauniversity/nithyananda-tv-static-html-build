(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/z7q":function(t,e,i){"use strict";i("ma9I"),i("R5XZ");var s=i("lO2I"),n={name:"SocialShare",components:{Icon:i("za7x").a},props:{title:{type:String,required:!0},url:{type:String,required:!0}},data:function(){return{copyIcon:s.m,showTooltip:!1,socialPlatforms:[{icon:s.g,platform:"facebook",shareUrl:"https://www.facebook.com/sharer.php?u=".concat(this.url,"\n")},{icon:s.A,platform:"twitter",shareUrl:"https://twitter.com/intent/tweet?url=".concat(this.url,"&text=").concat(this.title,"&via=SriNithyananda&hashtags=Kailasa,Nithyananda")},{icon:s.w,platform:"reddit",shareUrl:"https://reddit.com/submit?url=".concat(this.url,"&title=").concat(this.title)},{icon:s.n,platform:"linkedin",shareUrl:"https://www.linkedin.com/sharing/share-offsite/?url=".concat(this.url)},{icon:s.z,platform:"weibo",shareUrl:"http://service.weibo.com/share/share.php?url=".concat(this.url,"&appkey=&title=").concat(this.title,"&pic=&ralateUid=")},{icon:s.f,platform:"email",shareUrl:"mailto:?subject=".concat(this.title,"&amp;body=Watch this video ").concat(this.url)}]}},methods:{copyClipboard:function(){var t=this;navigator.clipboard.writeText(this.url),this.showTooltip=!0,setTimeout((function(){t.showTooltip=!1}),2e3)}}},o=(i("8ZWQ"),i("KHd+")),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shareButtons flex gap-x-3"},[i("button",{staticClass:"relative socialShare",on:{click:t.copyClipboard}},[i("Transition",{attrs:{name:"fade"}},[t.showTooltip?i("div",{staticClass:"copyTooltip bg-accent_lighten text-text dark:text-dark_text dark:bg-dark_lighten p-2 rounded text-xs absolute bottom-0 mb-9 whitespace-nowrap"},[t._v("\n        Link copied to clipboard!\n      ")]):t._e()]),i("Icon",{staticClass:"transition hover:fill-white",attrs:{icon:t.copyIcon,color:"fill-gray-400 w-5"}})],1),t._l(t.socialPlatforms,(function(e,s){return i("a",{staticClass:"socialShare",attrs:{"data-network":e.platform,"data-title":t.title,"data-url":t.url,href:e.shareUrl,target:"_blank"}},[i("Icon",{key:"social-share-"+s,staticClass:"w-6 transition",attrs:{icon:e.icon}})],1)}))],2)}),[],!1,null,"259f8a8e",null);e.a=a.exports},"1nlf":function(t,e,i){"use strict";i("EaBe")},"2kS4":function(t,e,i){},"4hLg":function(t,e,i){"use strict";var s=i("Mj6V"),n=i.n(s);e.a={beforeRouteLeave:function(t,e,i){t.hash||"undefined"==typeof document||(n.a.start(),i())}}},"8ZWQ":function(t,e,i){"use strict";i("2kS4")},AlCB:function(t,e,i){var s={"./af":"hray","./af.js":"hray","./ar":"TLJG","./ar-dz":"ThGX","./ar-dz.js":"ThGX","./ar-kw":"mCMU","./ar-kw.js":"mCMU","./ar-ly":"d/tg","./ar-ly.js":"d/tg","./ar-ma":"XuiS","./ar-ma.js":"XuiS","./ar-sa":"VwnT","./ar-sa.js":"VwnT","./ar-tn":"YqvA","./ar-tn.js":"YqvA","./ar.js":"TLJG","./az":"btN9","./az.js":"btN9","./be":"buSO","./be.js":"buSO","./bg":"DsuT","./bg.js":"DsuT","./bm":"QRzF","./bm.js":"QRzF","./bn":"RDLs","./bn-bd":"Tn3t","./bn-bd.js":"Tn3t","./bn.js":"RDLs","./bo":"zUtL","./bo.js":"zUtL","./br":"cy8p","./br.js":"cy8p","./bs":"Zjyx","./bs.js":"Zjyx","./ca":"hCj3","./ca.js":"hCj3","./cs":"Lutb","./cs.js":"Lutb","./cv":"jgAC","./cv.js":"jgAC","./cy":"XMni","./cy.js":"XMni","./da":"+TDs","./da.js":"+TDs","./de":"qbPH","./de-at":"HTvs","./de-at.js":"HTvs","./de-ch":"9zgw","./de-ch.js":"9zgw","./de.js":"qbPH","./dv":"6Nr9","./dv.js":"6Nr9","./el":"VxZA","./el.js":"VxZA","./en-au":"JpMK","./en-au.js":"JpMK","./en-ca":"vMUg","./en-ca.js":"vMUg","./en-gb":"WsKC","./en-gb.js":"WsKC","./en-ie":"V12x","./en-ie.js":"V12x","./en-il":"x1vD","./en-il.js":"x1vD","./en-in":"C6Bk","./en-in.js":"C6Bk","./en-nz":"ISMT","./en-nz.js":"ISMT","./en-sg":"D3AS","./en-sg.js":"D3AS","./eo":"jSpR","./eo.js":"jSpR","./es":"Qh3T","./es-do":"8aos","./es-do.js":"8aos","./es-mx":"0B4w","./es-mx.js":"0B4w","./es-us":"ZsDa","./es-us.js":"ZsDa","./es.js":"Qh3T","./et":"8wfN","./et.js":"8wfN","./eu":"HZ5l","./eu.js":"HZ5l","./fa":"jDYW","./fa.js":"jDYW","./fi":"ClIw","./fi.js":"ClIw","./fil":"CY51","./fil.js":"CY51","./fo":"PfCv","./fo.js":"PfCv","./fr":"A5UK","./fr-ca":"DR1d","./fr-ca.js":"DR1d","./fr-ch":"qTOW","./fr-ch.js":"qTOW","./fr.js":"A5UK","./fy":"UgOA","./fy.js":"UgOA","./ga":"vqaJ","./ga.js":"vqaJ","./gd":"RxQf","./gd.js":"RxQf","./gl":"C+fz","./gl.js":"C+fz","./gom-deva":"mmOZ","./gom-deva.js":"mmOZ","./gom-latn":"1a8k","./gom-latn.js":"1a8k","./gu":"SbcW","./gu.js":"SbcW","./he":"5KRK","./he.js":"5KRK","./hi":"rr6q","./hi.js":"rr6q","./hr":"YqDl","./hr.js":"YqDl","./hu":"tSnw","./hu.js":"tSnw","./hy-am":"SCZk","./hy-am.js":"SCZk","./id":"vhKf","./id.js":"vhKf","./is":"Flay","./is.js":"Flay","./it":"mhIb","./it-ch":"nhrb","./it-ch.js":"nhrb","./it.js":"mhIb","./ja":"93QV","./ja.js":"93QV","./jv":"xZOw","./jv.js":"xZOw","./ka":"65Jj","./ka.js":"65Jj","./kk":"gyfh","./kk.js":"gyfh","./km":"gsWe","./km.js":"gsWe","./kn":"IbIq","./kn.js":"IbIq","./ko":"Jxvl","./ko.js":"Jxvl","./ku":"R18R","./ku.js":"R18R","./ky":"2ScD","./ky.js":"2ScD","./lb":"fMTw","./lb.js":"fMTw","./lo":"qTRV","./lo.js":"qTRV","./lt":"6Yf0","./lt.js":"6Yf0","./lv":"h+jF","./lv.js":"h+jF","./me":"A2NX","./me.js":"A2NX","./mi":"l5W7","./mi.js":"l5W7","./mk":"Y6iZ","./mk.js":"Y6iZ","./ml":"jOv1","./ml.js":"jOv1","./mn":"ozLs","./mn.js":"ozLs","./mr":"d+2t","./mr.js":"d+2t","./ms":"CRR7","./ms-my":"rT3g","./ms-my.js":"rT3g","./ms.js":"CRR7","./mt":"4C9+","./mt.js":"4C9+","./my":"2DxR","./my.js":"2DxR","./nb":"pWlV","./nb.js":"pWlV","./ne":"zncA","./ne.js":"zncA","./nl":"j/8D","./nl-be":"guIg","./nl-be.js":"guIg","./nl.js":"j/8D","./nn":"ZuGb","./nn.js":"ZuGb","./oc-lnc":"a83s","./oc-lnc.js":"a83s","./pa-in":"5yBZ","./pa-in.js":"5yBZ","./pl":"j3dE","./pl.js":"j3dE","./pt":"r77t","./pt-br":"78xH","./pt-br.js":"78xH","./pt.js":"r77t","./ro":"qEMr","./ro.js":"qEMr","./ru":"VG75","./ru.js":"VG75","./sd":"EEu+","./sd.js":"EEu+","./se":"DpDe","./se.js":"DpDe","./si":"0FiJ","./si.js":"0FiJ","./sk":"8XsU","./sk.js":"8XsU","./sl":"rNW4","./sl.js":"rNW4","./sq":"HZoN","./sq.js":"HZoN","./sr":"RUII","./sr-cyrl":"Vg7t","./sr-cyrl.js":"Vg7t","./sr.js":"RUII","./ss":"KWEL","./ss.js":"KWEL","./sv":"m86x","./sv.js":"m86x","./sw":"dG2q","./sw.js":"dG2q","./ta":"JqO8","./ta.js":"JqO8","./te":"i5Id","./te.js":"i5Id","./tet":"MNco","./tet.js":"MNco","./tg":"jxmi","./tg.js":"jxmi","./th":"ZW+a","./th.js":"ZW+a","./tk":"5moA","./tk.js":"5moA","./tl-ph":"3qvj","./tl-ph.js":"3qvj","./tlh":"ZhAa","./tlh.js":"ZhAa","./tr":"01/1","./tr.js":"01/1","./tzl":"SiY1","./tzl.js":"SiY1","./tzm":"6FU+","./tzm-latn":"IsxZ","./tzm-latn.js":"IsxZ","./tzm.js":"6FU+","./ug-cn":"mAKK","./ug-cn.js":"mAKK","./uk":"snIq","./uk.js":"snIq","./ur":"5+B7","./ur.js":"5+B7","./uz":"/O58","./uz-latn":"dJhR","./uz-latn.js":"dJhR","./uz.js":"/O58","./vi":"D5tQ","./vi.js":"D5tQ","./x-pseudo":"pOrv","./x-pseudo.js":"pOrv","./yo":"JeYJ","./yo.js":"JeYJ","./zh-cn":"Wrq9","./zh-cn.js":"Wrq9","./zh-hk":"rBrn","./zh-hk.js":"rBrn","./zh-mo":"gqoT","./zh-mo.js":"gqoT","./zh-tw":"5p2O","./zh-tw.js":"5p2O"};function n(t){var e=o(t);return i(e)}function o(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=o,t.exports=n,n.id="AlCB"},EaBe:function(t,e,i){},"GFA/":function(t,e,i){},GPXr:function(t,e,i){"use strict";i("XyO7")},IUgd:function(t,e,i){},JRQn:function(t,e,i){"use strict";var s=i("lO2I"),n=i("za7x"),o=i("NFb6"),a=i.n(o),r=(i("s+lh"),i("ZhIB")),l=i("gfuk"),c={name:"Hero",components:{Icon:n.a},props:{video:{type:Object,required:!0},isLive:Boolean,default:!1},data:function(){return{playIcon:s.u,liveIcon:s.v,formattedViewCount:r(this.video.attributes.viewCount).format("0.0a"),formattedPublishDate:l(this.video.attributes.eventDate).format("LL")}},methods:{openVideoModal:function(){a()({el:this.$refs.hero,ytSrc:this.video.attributes.youtubeID,ytNoCookie:!1,dimensions:[1920,1080],noLoader:!0})}}},d=(i("KnO2"),i("KHd+")),u=Object(d.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"hero",staticClass:"hero h-screen-50vh relative lg:h-screen-60vh xl:h-screen-70vh flex flex-col md:flex-row bg-white dark:bg-dark justify-between"},[t.isLive?s("div",{staticClass:"liveChip absolute top-0 right-0 z-20  bg-red-600 p-1 mt-3 mr-3 sm:mt-6 sm:mr-6 rounded flex jusitfy-center items-center gap-x-1 uppercase text-xs sm:text-sm font-medium tracking-wider"},[s("Icon",{staticClass:"liveChip__icon w-2 sm:w-3",attrs:{color:"fill-white",icon:t.liveIcon}}),t._v("Live\n  ")],1):t._e(),s("div",{staticClass:"hero__cover overflow-hidden"},[s("div",{staticClass:"w-full h-full"},[t.isLive?s("g-image",{staticClass:"hero__cover__img w-full h-full object-cover object-center",attrs:{src:i("JzAs")}}):s("img",{staticClass:"hero__cover__img w-full h-full lazyload object-cover object-center",attrs:{src:t.video.attributes.thumbnailURL}})],1)]),s("div",{staticClass:"hero__text px-10 pt-0 pb-6 flex flex-col justify-center"},[s("h1",{staticClass:"text-2xl font-bold mb-3 text-secondary dark:text-dark_text_lighten"},[t._v("\n      "+t._s(t.video.attributes.title)+"\n    ")]),s("div",{staticClass:"flex gap-2 items-end text-sm opacity-60 text-text_lighten dark:text-dark_text"},[s("p",{staticClass:"videoCard__publishDate"},[t._v("\n        "+t._s(t.formattedPublishDate)+"\n      ")]),t._v("\n      •\n      "),s("p",{staticClass:"videoCard__viewCount"},[t._v(t._s(t.formattedViewCount)+" views")])]),"/"==t.$route.path?s("p",{staticClass:"text-xs text-text_lighten dark:text-dark_text overflow-ellipsis overflow-hidden mt-2"},[t._v("\n      "+t._s(t.video.attributes.description.substring(0,100)+"...")+"\n    ")]):t._e(),"/"==t.$route.path?s("g-link",{staticClass:"hero__morebutton mt-4 bg-accent px-5 py-2 w-max flex justify-center items-center gap-x-1 text-sm transition-colors hover:bg-accent_darken text-white hover:text-white font-medium",attrs:{to:t.isLive?"/live":"/video/"+t.video.attributes.slug}},[s("Icon",{staticClass:"w-5",attrs:{color:"fill-white",icon:t.playIcon}}),t._v("Watch\n      Now")],1):s("button",{staticClass:"hero__playbutton mt-4 bg-accent px-5 py-2 w-max flex justify-center items-center gap-x-1 text-sm transition-colors hover:bg-accent_darken text-white hover:text-white font-medium",on:{click:t.openVideoModal}},[s("Icon",{staticClass:"w-5",attrs:{color:"fill-white",icon:t.playIcon}}),t._v("\n      Play Video\n    ")],1)],1)])}),[],!1,null,null,null);e.a=u.exports},JzAs:function(t,e){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/featured-live-video.2665e34.775fa11684af7f0e4bb094e342c35239.jpg",size:{width:1920,height:1080},sizes:"(max-width: 1920px) 100vw, 1920px",srcset:["/assets/static/featured-live-video.82a2fbd.775fa11684af7f0e4bb094e342c35239.jpg 480w","/assets/static/featured-live-video.cbab2cf.775fa11684af7f0e4bb094e342c35239.jpg 1024w","/assets/static/featured-live-video.2665e34.775fa11684af7f0e4bb094e342c35239.jpg 1920w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1920 1080' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-fc21e9f23ecdc65d1d7bb5755da0c96e'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-fc21e9f23ecdc65d1d7bb5755da0c96e)' width='1920' height='1080' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABgADBAUHAggB/8QAKhAAAgEDAwQBBAIDAAAAAAAAAQIDAAQRBSExBhITUUEUMmGBBxYicYL/xAAZAQACAwEAAAAAAAAAAAAAAAADBAECBQD/xAAhEQACAwACAgIDAAAAAAAAAAAAAQIDESFBEjEEYbHB8P/aAAwDAQACEQMRAD8A84BacCVyvNEukdKa1qWly6jZ6dPJYRKzNPgBcLzjPOMHjNDssjWtm8X2alcWwdEddCAmpgjU8VNtoFwODUN4NV177LjoT%2bPL/q2w1y7t5BBBplq05ZkLeRwMiMY%2bSAaGZNKu44wz28gX8iti6G6pn6T0y4g%2bvuYLS8gfwJFErL5sAE9xP3Y4B2%2bc52q10nQ4NW0yC40zVYpXkGZIZHywPo4zv%2bhzSVnynB546WhFa/J4ujz28ZB7WGCKZK9poz64tIYbzMaosuWVwnGQcZFCUygL%2baZhPzipLsrbXg2h3zWkNqZ/rWl2a9QC3GnxkfTRIVEpfLdwYHB57cnHB/eaxkk7VLgHupvoVua/XPX7F6ZYE1g6QQWyt4HeF5OJlAYOuMe9sVZtf91nNGyRK0kCKzRyKcsue4/9bbUJoQBT0c%2bNh8UCfx1J6/7nfyPVT6CmyeG70G%2bgvi6W0K%2bdZExlGX5GfecfutIuG6bt%2bjjJ2/TW4hdYJoblTJsBg4wCG59YJ3oL0XUtOgsRGIY5Ukj7ZFkAOdvX%2b6J5%2botBazugbS0LXMRjlPiXucEYwTjelL1KcliZ0ordMp6wQx6j4lkkkRFADyHLEc5J90Nyqe3ajfq3VNOviyw26pLt/kuw49UISFRnjFaFT2K4wlx1clehp%2bMmlSppmbAeDHFfVY0qVDYxEkRTOM4YjHqunnl7fvNKlVMDxfBEdickneozk5pUqsgNns//2Q==' /%3e%3c/svg%3e"}},KnO2:function(t,e,i){"use strict";i("nTdO")},N4rZ:function(t,e,i){"use strict";i("IUgd")},NFb6:function(t,e){var i,s,n,o,a,r,l,c,d,u,f,p,h,m,b,v,g,x,w,j,y,_,k,C,A,I,L,T,B,D,z,S,E,R=[],O={},V="appendChild",K="createElement",M="removeChild";function q(){var t=i.getBoundingClientRect(),e=t.top,s=t.left,a=t.width,r=t.height;return"transform:translate3D("+(s-(n.clientWidth-a)/2)+"px, "+(e-(n.clientHeight-r)/2)+"px, 0) scale3D("+i.clientWidth/o.clientWidth+", "+i.clientHeight/o.clientHeight+", 0)"}function Z(t){var e=D.length-1;if(!h){if(t>0&&B===e||t<0&&!B){if(!E.loop)return J(a,""),void setTimeout(J,9,a,"animation:"+(t>0?"bpl":"bpf")+" .3s;transition:transform .35s");B=t>0?-1:e+1}if([(B=Math.max(0,Math.min(B+t,e)))-1,B,B+1].forEach((function(t){if(t=Math.max(0,Math.min(t,e)),!O[t]){var i=D[t].src,s=document[K]("IMG");s.addEventListener("load",F.bind(null,i)),s.src=i,O[t]=s}})),O[B].complete)return H(t);h=!0,J(b,"opacity:.4;"),n[V](b),O[B].onload=function(){y&&H(t)},O[B].onerror=function(){D[B]={error:"Error loading image"},y&&H(t)}}}function H(t){h&&(n[M](b),h=!1);var e=D[B];if(e.error)alert(e.error);else{var s=n.querySelector("img:last-of-type");J(a=o=O[B],"animation:"+(t>0?"bpfl":"bpfr")+" .35s;transition:transform .35s"),J(s,"animation:"+(t>0?"bpfol":"bpfor")+" .35s both"),n[V](a),e.el&&(i=e.el)}z.innerHTML=B+1+"/"+D.length,Y(D[B].caption),I&&I([a,D[B]])}function U(){var t,e,i=.95*window.innerHeight,s=.95*window.innerWidth,n=i/s,o=E.dimensions||[1920,1080],a=o[0],r=o[1],l=r/a;l>n?e=(t=Math.min(r,i))/l:t=(e=Math.min(a,s))*l,c.style.cssText+="width:"+e+"px;height:"+t+"px;"}function W(t){~[1,4].indexOf(o.readyState)?(P(),setTimeout((function(){o.play()}),99)):o.error?P(t):m=setTimeout(W,35,t)}function N(t){E.noLoader||(t&&J(b,"top:"+i.offsetTop+"px;left:"+i.offsetLeft+"px;height:"+i.clientHeight+"px;width:"+i.clientWidth+"px"),i.parentElement[t?V:M](b),h=t)}function Y(t){t&&(g.innerHTML=t),J(v,"opacity:"+(t?"1;pointer-events:auto":"0"))}function F(t){!~R.indexOf(t)&&R.push(t)}function P(t){if(h&&N(),C&&C(),"string"==typeof t)return G(),E.onError?E.onError():alert("Error: The requested "+t+" could not be loaded.");k&&F(u),o.style.cssText+=q(),J(n,"opacity:1;pointer-events:auto"),A&&(A=setTimeout(A,410)),j=!0,y=!!D,setTimeout((function(){o.style.cssText+="transition:transform .35s;transform:none",x&&setTimeout(Y,250,x)}),60)}function Q(t){var e=t?t.target:n,i=[v,w,r,l,g,T,L,b];e.blur(),_||~i.indexOf(e)||(o.style.cssText+=q(),J(n,"pointer-events:auto"),setTimeout(G,350),clearTimeout(A),j=!1,_=!0)}function G(){if((o===c?d:o).removeAttribute("src"),document.body[M](n),n[M](o),J(n,""),J(o,""),Y(!1),y){for(var t=n.querySelectorAll("img"),e=0;e<t.length;e++)n[M](t[e]);h&&n[M](b),n[M](z),y=D=!1,O={},S||n[M](L),S||n[M](T),a.onload=P,a.onerror=P.bind(null,"image")}E.onClose&&E.onClose(),_=h=!1}function J(t,e){t.style.cssText=e}t.exports=function(t){var e;return s||function(){var t,e;function i(t){var e=document[K]("button");return e.className=t,e.innerHTML='<svg viewBox="0 0 48 48"><path d="M28 24L47 5a3 3 0 1 0-4-4L24 20 5 1a3 3 0 1 0-4 4l19 19L1 43a3 3 0 1 0 4 4l19-19 19 19a3 3 0 0 0 4 0v-4L28 24z"/></svg>',e}function u(t,e){var i=document[K]("button");return i.className="bp-lr",i.innerHTML='<svg viewBox="0 0 129 129" height="70" fill="#fff"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/></svg>',J(i,e),i.onclick=function(e){e.stopPropagation(),Z(t)},i}var p=document[K]("STYLE");p.innerHTML="#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0}#bp_container>*,#bp_loader{position:absolute;right:0;z-index:10}#bp_container,#bp_caption,#bp_container svg{pointer-events:none}#bp_container{top:0;z-index:9999;background:rgba(0,0,0,.7);opacity:0;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:flex;align-items:center;cursor:wait;background:0;z-index:9}#bp_loader svg{width:50%;max-width:300px;max-height:50%;margin:auto;animation:bpturn 1s infinite linear}#bp_aud,#bp_container img,#bp_sv,#bp_vid{user-select:none;max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{background:#111}#bp_sv svg{width:66px}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}#bp_aud{width:650px;top:calc(50% - 20px);bottom:auto;box-shadow:none}#bp_count{left:0;right:auto;padding:14px;color:rgba(255,255,255,.7);font-size:22px;cursor:default}#bp_container button{position:absolute;border:0;outline:0;background:0;cursor:pointer;transition:all .1s}#bp_container>.bp-x{padding:0;height:41px;width:41px;border-radius:100%;top:8px;right:14px;opacity:.8;line-height:1}#bp_container>.bp-x:focus,#bp_container>.bp-x:hover{background:rgba(255,255,255,.2)}.bp-x svg,.bp-xc svg{height:21px;width:20px;fill:#fff;vertical-align:top;}.bp-xc svg{width:16px}#bp_container .bp-xc{left:2%;bottom:100%;padding:9px 20px 7px;background:#d04444;border-radius:2px 2px 0 0;opacity:.85}#bp_container .bp-xc:focus,#bp_container .bp-xc:hover{opacity:1}.bp-lr{top:50%;top:calc(50% - 130px);padding:99px 0;width:6%;background:0;border:0;opacity:.4;transition:opacity .1s}.bp-lr:focus,.bp-lr:hover{opacity:.8}@keyframes bpf{50%{transform:translatex(15px)}100%{transform:none}}@keyframes bpl{50%{transform:translatex(-15px)}100%{transform:none}}@keyframes bpfl{0%{opacity:0;transform:translatex(70px)}100%{opacity:1;transform:none}}@keyframes bpfr{0%{opacity:0;transform:translatex(-70px)}100%{opacity:1;transform:none}}@keyframes bpfol{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(-70px)}}@keyframes bpfor{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(70px)}}@keyframes bpturn{0%{transform:none}100%{transform:rotate(360deg)}}@media (max-width:600px){.bp-lr{font-size:15vw}}",document.head[V](p),(n=document[K]("DIV")).id="bp_container",n.onclick=Q,f=i("bp-x"),n[V](f),"ontouchend"in window&&window.visualViewport&&(S=!0,n.ontouchstart=function(i){var s=i.touches,n=i.changedTouches;e=s.length>1,t=n[0].pageX},n.ontouchend=function(i){var s=i.changedTouches;if(y&&!e&&window.visualViewport.scale<=1){var n=s[0].pageX-t;n<-30&&Z(1),n>30&&Z(-1)}});a=document[K]("IMG"),(r=document[K]("VIDEO")).id="bp_vid",r.setAttribute("playsinline",!0),r.controls=!0,r.loop=!0,(l=document[K]("audio")).id="bp_aud",l.controls=!0,l.loop=!0,(z=document[K]("span")).id="bp_count",(v=document[K]("DIV")).id="bp_caption",(w=i("bp-xc")).onclick=Y.bind(null,!1),v[V](w),g=document[K]("SPAN"),v[V](g),n[V](v),L=u(1,"transform:scalex(-1)"),T=u(-1,"left:0;right:auto"),(b=document[K]("DIV")).id="bp_loader",b.innerHTML='<svg viewbox="0 0 32 32" fill="#fff" opacity=".8"><path d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24" fill="#000" opacity=".5"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"/></svg>',(c=document[K]("DIV")).id="bp_sv",(d=document[K]("IFRAME")).setAttribute("allowfullscreen",!0),d.allow="autoplay; fullscreen",d.onload=function(){return c[M](b)},J(d,"border:0;position:absolute;height:100%;width:100%;left:0;top:0"),c[V](d),a.onload=P,a.onerror=P.bind(null,"image"),window.addEventListener("resize",(function(){y||h&&N(!0),o===c&&U()})),document.addEventListener("keyup",(function(t){var e=t.keyCode;27===e&&j&&Q(),y&&(39===e&&Z(1),37===e&&Z(-1),38===e&&Z(10),40===e&&Z(-10))})),document.addEventListener("keydown",(function(t){y&&~[37,38,39,40].indexOf(t.keyCode)&&t.preventDefault()})),document.addEventListener("focus",(function(t){j&&!n.contains(t.target)&&(t.stopPropagation(),f.focus())}),!0),s=!0}(),h&&(clearTimeout(m),G()),E=t,p=t.ytSrc||t.vimeoSrc,C=t.animationStart,A=t.animationEnd,I=t.onChangeImage,i=t.el,k=!1,x=i.getAttribute("data-caption"),t.gallery?function(t,e){var s=E.galleryAttribute||"data-bp";if(Array.isArray(t))D=t,x=t[B=e||0].caption;else{var r=(D=[].slice.call("string"==typeof t?document.querySelectorAll(t+" ["+s+"]"):t)).indexOf(i);B=0===e||e?e:-1!==r?r:0,D=D.map((function(t){return{el:t,src:t.getAttribute(s),caption:t.getAttribute("data-caption")}}))}k=!0,u=D[B].src,!~R.indexOf(u)&&N(!0),D.length>1?(n[V](z),z.innerHTML=B+1+"/"+D.length,S||(n[V](L),n[V](T))):D=!1;(o=a).src=u}(t.gallery,t.position):p||t.iframeSrc?(o=c,function(){var t;E.ytSrc?t="https://www.youtube"+(E.ytNoCookie?"-nocookie":"")+".com/embed/"+p+"?html5=1&rel=0&playsinline=1&autoplay=1":E.vimeoSrc?t="https://player.vimeo.com/video/"+p+"?autoplay=1":E.iframeSrc&&(t=E.iframeSrc);J(b,""),c[V](b),d.src=t,U(),setTimeout(P,9)}()):t.imgSrc?(k=!0,u=t.imgSrc,!~R.indexOf(u)&&N(!0),(o=a).src=u):t.audio?(N(!0),(o=l).src=t.audio,W("audio file")):t.vidSrc?(N(!0),t.dimensions&&J(r,"width:"+t.dimensions[0]+"px"),e=t.vidSrc,Array.isArray(e)?(o=r.cloneNode(),e.forEach((function(t){var e=document[K]("SOURCE");e.src=t,e.type="video/"+t.match(/.(\w+)$/)[1],o[V](e)}))):(o=r).src=e,W("video")):(o=a).src="IMG"===i.tagName?i.src:window.getComputedStyle(i).backgroundImage.replace(/^url|[(|)|'|"]/g,""),n[V](o),document.body[V](n),{close:Q,opts:E,updateDimensions:U,display:o,next:function(){return Z(1)},prev:function(){return Z(-1)}}}},XyO7:function(t,e,i){},gpus:function(t,e,i){"use strict";i("s+lh");var s=i("ZhIB"),n=i("gfuk"),o={name:"VideoCard",props:{video:{type:Object,required:!0}},data:function(){return{formattedViewCount:this.video.attributes?s(this.video.attributes.viewCount).format("0.0a"):null,formattedPublishDate:this.video.attributes?n(this.video.attributes.eventDate).fromNow():null}}},a=(i("GPXr"),i("KHd+")),r=Object(a.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.video.attributes?i("g-link",{staticClass:"videoCard videoCard__link",attrs:{to:"/video/"+t.video.attributes.slug}},[i("div",{staticClass:"videoThumbnail__container bg-accent_lighten dark:bg-dark_lighten aspect-video relative"},[i("img",{ref:"vImg",staticClass:"videoThumbnail lazyload w-full h-full object-cover",attrs:{"data-src":t.video.attributes.thumbnailURL}})]),i("h3",{staticClass:"videoCard__title text-sm text-text dark:text-text_dark mt-2 font-medium"},[t._v("\n    "+t._s(t.video.attributes.title)+"\n  ")]),i("div",{staticClass:"flex gap-1 items-end text-xs text-text_lighten dark:text-dark_text opacity-70 mt-2"},[i("p",{staticClass:"videoCard__viewCount"},[t._v(t._s(t.formattedViewCount)+" views")]),t._v("\n    •\n    "),i("p",{staticClass:"videoCard__publishDate"},[t._v("\n      "+t._s(t.formattedPublishDate)+"\n    ")])])]):i("g-link",{attrs:{to:t.video.moreLink}},[i("div",{staticClass:"moreCard flex justify-center items-center text-lg ml-0.5 bg-accent_lighten dark:bg-dark_lighten font-bold"},[t._v("\n    View All\n  ")])])}),[],!1,null,"bf9aeb32",null);e.a=r.exports},iyQ6:function(t,e,i){"use strict";i.r(e);var s=i("HaE+"),n=(i("ls82"),i("JRQn")),o={},a=(i("N4rZ"),i("KHd+")),r=Object(a.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"hero",staticClass:"hero h-screen-50vh lg:h-screen-60vh xl:h-screen-70vh flex flex-col md:flex-row bg-white dark:bg-dark justify-between"},[this._m(0),this._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero__cover overflow-hidden"},[e("div",{staticClass:"w-full h-full"},[e("div",{staticClass:"hero__cover__img skeleton w-full h-full"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero__text px-10 pt-0 pb-6 flex flex-col justify-center"},[e("div",{staticClass:"textSkeleton flex flex-col w-full"},[e("h2",{staticClass:"textSkeleton__intro skeleton h-6 mr-18 mb-3 rounded"}),e("p",{staticClass:"textSkeleton__title skeleton mt-2 h-3 mr-3 rounded"}),e("p",{staticClass:"textSkeleton__title skeleton mt-2 h-3 mr-3 rounded"})])])}],!1,null,"69c13abd",null).exports,l=i("xXjg"),c=i("lO2I"),d=i("za7x"),u={name:"FloatingPlayer",props:{youtubeID:{type:String,required:!0}},components:{Icon:d.a},data:function(){return{openIcon:c.t,closeIcon:c.D}}},f=(i("1nlf"),Object(a.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"floatingPlayer <sm:hidden fixed z-30 bottom-0 right-0 mr-5 mb-5 rounded overflow-hidden"},[i("div",{staticClass:"actionButtons px-2 w-full mb-2 flex items-center justify-between gap-x-2"},[i("g-link",{attrs:{to:"/live"}},[i("Icon",{staticClass:"actionButtons__icon cursor-pointer transition w-4 transition hover:fill-accent",attrs:{color:"fill-gray-200",icon:t.openIcon}})],1),i("div",{staticClass:"iconss",on:{click:function(e){return t.$emit("closePlayer")}}},[i("Icon",{staticClass:"actionButtons__icon cursor-pointer transition w-4 transition hover:fill-accent",attrs:{color:"fill-gray-200",icon:t.closeIcon}})],1)],1),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aspect-video"},[e("iframe",{staticClass:"sm:w-200px md:w-300px xl:w-400px",attrs:{id:"54bbcb797b3e267a53295023ef9e7a5e",src:"https://iframe.dacast.com/live/bc4850501756d2c5a80af8ddc5642636/54bbcb797b3e267a53295023ef9e7a5e",width:"100%",height:"100%",frameborder:"0",scrolling:"no",allow:"autoplay;encrypted-media",allowfullscreen:"",webkitallowfullscreen:"",mozallowfullscreen:"",oallowfullscreen:"",msallowfullscreen:""}})])}],!1,null,null,null).exports),p=i("/z7q"),h=i("4hLg"),m=i("vDqi"),b={components:{Hero:n.a,VideoSlider:l.a,HeroSkeleton:r,FloatingPlayer:f,SocialShare:p.a},metaInfo:{title:"Livestreams, Events, Discourses of SPH Nithyananda Paramashivam"},mixins:[h.a],data:function(){return{featuredVideo:null,heroLoaded:!1,isLive:!1,liveID:null,showFloatingPlayer:!1}},methods:{closeFloatingPlayer:function(){this.showFloatingPlayer=!1}},mounted:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var i,s,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchLivestream");case 2:return e.next=4,t.$store.getters.getLiveStatus;case 4:if(t.isLive=e.sent,!t.isLive){e.next=13;break}t.showFloatingPlayer=!0,i=t.$store.getters.getLivestreamDetails,t.liveID=i.liveID,t.featuredVideo={attributes:{title:i.liveTitle,description:"Nithyananda TV is live now! Watch here",youtubeID:i.liveID,thumbnailURL:i.liveThumbnail,slug:"/live"}},t.heroLoaded=!0,e.next=19;break;case 13:return e.next=15,m.get("".concat("https://blooming-mesa-83646.herokuapp.com","/api/videos/random?filters[isFeatured][$eq]=true"));case 15:s=e.sent,n=s.data,t.featuredVideo=n.data,t.heroLoaded=!0;case 19:case"end":return e.stop()}}),e)})))()}},v=null,g=Object(a.a)(b,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[t.heroLoaded?i("Hero",{attrs:{video:t.featuredVideo,isLive:t.isLive}}):i("HeroSkeleton"),t._l(t.$page.strapi.playlists.data,(function(t){return i("VideoSlider",{key:t.id,attrs:{playlist:t}})})),t.showFloatingPlayer?i("FloatingPlayer",{attrs:{youtubeID:t.liveID},on:{closePlayer:t.closeFloatingPlayer}}):t._e()],2)}),[],!1,null,null,null);"function"==typeof v&&v(g);e.default=g.exports},nTdO:function(t,e,i){},xXjg:function(t,e,i){"use strict";i("QWBl"),i("07d7"),i("FZtP");var s=i("gpus"),n={name:"VideoSlider",props:{playlist:{type:Object,required:!0}},components:{VideoCard:s.a},data:function(){return{disableLeftButton:!0,disableRightButton:!1}},methods:{scrollLeft:function(){this.$refs.sliderContent.scrollTo({left:this.$refs.sliderContent.scrollLeft-500,behavior:"smooth"})},scrollRight:function(){this.$refs.sliderContent.scrollTo({left:this.$refs.sliderContent.scrollLeft+500,behavior:"smooth"})},toggleLeftButton:function(t){var e=this;t.forEach((function(t){!t.isIntersecting&&e.disableLeftButton?e.disableLeftButton=!1:t.isIntersecting&&!e.disableLeftButton&&(e.disableLeftButton=!0)}))},toggleRightButton:function(t){var e=this;t.forEach((function(t){t.isIntersecting&&!e.disableRightButton?e.disableRightButton=!0:!t.isIntersecting&&e.disableRightButton&&(e.disableRightButton=!1)}))}},mounted:function(){new IntersectionObserver(this.toggleLeftButton).observe(this.$refs.start),new IntersectionObserver(this.toggleRightButton).observe(this.$refs.end)}},o=(i("zflI"),i("KHd+")),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-10"},[i("div",{staticClass:"slider__header flex gap-x-4 items-center mb-4 <sm:px-6 px-10"},[i("div",{staticClass:"slider__text"},[i("h2",{staticClass:"text-2xl font-bold text-secondary dark:text-dark_text_lighten"},[t._v("\n        "+t._s(t.$route.path.startsWith("/video/")?"Related Videos":t.playlist.attributes.title)+"\n      ")])]),t.$route.path.startsWith("/video/")?t._e():i("g-link",{staticClass:"text-sm text-accent text-opacity-80 pt-1 carousel__header__moreLink hover:text-accent_darken hover:dark:text-accent_lighten font-medium",attrs:{to:"/playlist/"+t.playlist.attributes.slug}},[t._v("\n      View All\n    ")])],1),t.$route.path.startsWith("/video/")?t._e():i("p",{staticClass:"text-sm <sm:px-6 px-10 mb-6 text-text_lighten dark:text-dark_text opacity-806"},[t._v("\n    "+t._s(t.playlist.attributes.description)+"\n  ")]),i("div",{staticClass:"slider__wrapper w-full overflow-hidden relative"},[i("button",{staticClass:"slider__nav slider__nav--left",attrs:{id:"btn-left","aria-label":"Previous",type:"button",disabled:t.disableLeftButton},on:{click:t.scrollLeft}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[i("path",{attrs:{fill:"none",stroke:"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M17.9 23.2L6.1 12 17.9.8"}})])]),i("button",{staticClass:"slider__nav slider__nav--right",attrs:{id:"btn-right","aria-label":"Next",type:"button",disabled:t.disableRightButton},on:{click:t.scrollRight}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[i("path",{attrs:{fill:"none",stroke:"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M6.1 23.2L17.9 12 6.1.8"}})])]),i("div",{ref:"sliderContent",staticClass:"slider__content px-2.5rem overflow-x-scroll flex gap-x-2 scroll-smooth scrollbar-hide snap snap-proximity snap-x <sm:snap-pl-1.5rem snap-pl-2.5rem relative"},[i("div",{ref:"start",staticClass:"absolute left-0 invisible"},[t._v(".")]),t._l(t.playlist.attributes.videos.data,(function(t){return i("VideoCard",{key:t.id,attrs:{video:t}})})),i("div",{ref:"end"},[t.$route.path.startsWith("/video/")?t._e():i("VideoCard",{attrs:{video:{moreLink:"/playlist/"+t.playlist.attributes.slug}}})],1)],2)])])}),[],!1,null,"30eb04b4",null);e.a=a.exports},zflI:function(t,e,i){"use strict";i("GFA/")}}]);