(this["webpackJsonpreact-tinvio"]=this["webpackJsonpreact-tinvio"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={nav:"Nav_nav__aqvze",nav__list:"Nav_nav__list__1j6mv",nav__item:"Nav_nav__item__2-bpl",header:"Nav_header__3XDP_",active:"Nav_active__2T4e_"}},function(e,t,a){e.exports={burger:"Burger_burger__fnvQx",upLine:"Burger_upLine__wPto-",midLine:"Burger_midLine__xIEJf",downLine:"Burger_downLine__XmCic",active:"Burger_active__MDk1a"}},function(e,t,a){e.exports={partnersList:"PartnersList_partnersList__kw161",partnersItem:"PartnersList_partnersItem__1XsJE",itemLogo:"PartnersList_itemLogo__2_6lj"}},function(e,t,a){e.exports={BoxesFruits:"BoxesFruits_BoxesFruits__2Lv5p",Boxes:"BoxesFruits_Boxes__3Xhsl",Fruits:"BoxesFruits_Fruits__1BmDy"}},function(e,t,a){e.exports={container:"Container_container__2sDWK",header:"Container_header__2TtyH"}},function(e,t,a){e.exports={appLogo:"Logo_appLogo__3SwfQ",header:"Logo_header__1nNP0"}},function(e,t,a){e.exports={btn:"Btn_btn__emwdq",nav:"Btn_nav__2fteu",hero:"Btn_hero__3mw-u"}},function(e,t,a){e.exports={SectionTitle:"SectionTitle_SectionTitle__ajdo4",hero:"SectionTitle_hero__2S12P",partners:"SectionTitle_partners__2n7ND"}},function(e,t,a){e.exports={subtitle:"Subtitle_subtitle__3ZUzC"}},function(e,t,a){e.exports={TextNearBtn:"TextNearBtn_TextNearBtn__1IHe4",hero:"TextNearBtn_hero__1Tv_L"}},function(e,t,a){e.exports={WrapHomePageImg:"HomePageImg_WrapHomePageImg__3yN31",HomePageImg:"HomePageImg_HomePageImg__2OQne"}},,,function(e,t,a){e.exports={hero:"Hero_hero__1E9tU"}},function(e,t,a){e.exports={partners:"Partners_partners__2bjaj"}},function(e,t,a){e.exports=a(36)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./Bens.svg":30,"./GoCheken.png":31,"./Italian.png":32,"./Jolliebean.svg":33,"./SimplyWrapps.png":34};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=29},function(e,t,a){e.exports=a.p+"static/media/Bens.22860f6f.svg"},function(e,t,a){e.exports=a.p+"static/media/GoCheken.effb99e9.png"},function(e,t,a){e.exports=a.p+"static/media/Italian.324e20e9.png"},function(e,t,a){e.exports=a.p+"static/media/Jolliebean.512a1023.svg"},function(e,t,a){e.exports=a.p+"static/media/SimplyWrapps.02b9cb86.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),i=a.n(s),c=(a(26),a(27),a(1)),o=a(2),l=a(5),u=a(3),m=a(4),p=a(10),_=a.n(p),v=function(e){var t=[_.a.container];e.assignClasses&&Object(m.a)(e.assignClasses).map((function(e){return t.push(_.a[e])}));return r.a.createElement("div",{className:t.join(" ")},e.children)},f=a(11),g=a.n(f),h=function(e){var t=[g.a.appLogo];e.assignClasses&&Object(m.a)(e.assignClasses).map((function(e){return t.push(g.a[e])}));return r.a.createElement("a",{className:t.join(" "),href:"/"},r.a.createElement("span",{className:"visually-hidden"},"Logo"))},b=a(6),d=a.n(b),E=function(e){return r.a.createElement("li",{className:d.a.nav__item},r.a.createElement("a",{href:e.href},e.text))},j=a(12),C=a.n(j),x=function(e){var t=[C.a.btn];e.assignClasses&&Object(m.a)(e.assignClasses).map((function(e){return t.push(C.a[e])}));return r.a.createElement("button",{className:t.join(" ")},e.text)},O=function(e){var t=[d.a.nav];e.assignClasses&&Object(m.a)(e.assignClasses).map((function(e){return t.push(d.a[e])}));return r.a.createElement("div",{className:t.join(" ")},r.a.createElement("ul",{className:d.a.nav__list},e.items.map((function(e,t){return r.a.createElement(E,{key:t,text:e.text,href:e.href})}))),r.a.createElement(x,{text:"Get started",assignClasses:["nav"]}))},N=a(7),y=a.n(N),B=function(e){var t=[y.a.burger];e.assignClasses&&Object(m.a)(e.assignClasses).map((function(e){return t.push(y.a[e])}));return r.a.createElement("div",{className:t.join(" "),onClick:e.clicked},r.a.createElement("span",{className:y.a.upLine}),r.a.createElement("span",{className:y.a.midLine}),r.a.createElement("span",{className:y.a.downLine}))},L=(a(28),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={items:[{text:"Home",href:"#0"},{text:"Supplier",href:"#1"},{text:"About",href:"#2"},{text:"Contact",href:"#3"}],classAvtive:""},e.burgerActive=function(){var t=e.state.classAvtive?"":"active";e.setState({classAvtive:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"header"},r.a.createElement(v,{assignClasses:["header"]},r.a.createElement(h,{assignClasses:["header"]}),r.a.createElement(O,{items:this.state.items,assignClasses:["header",this.state.classAvtive]}),r.a.createElement(B,{clicked:function(){return e.burgerActive()},assignClasses:[this.state.classAvtive]})))}}]),a}(n.Component)),k=a(13),w=a.n(k),A=function(e){var t=[w.a.SectionTitle];e.assignClasses&&Object(m.a)(e.assignClasses).map((function(e){return t.push(w.a[e])}));return r.a.createElement("h2",{className:t.join(" ")},e.children)},P=a(14),S=a.n(P),I=function(e){var t=[S.a.subtitle];e.assignClasses&&Object(m.a)(e.assignClasses).map((function(e){return t.push(S.a[e])}));return r.a.createElement("h3",{className:t.join(" ")},e.children)},T=a(15),H=a.n(T),F=function(e){var t=[H.a.TextNearBtn];e.assignClasses&&Object(m.a)(e.assignClasses).map((function(e){return t.push(H.a[e])}));return r.a.createElement("span",{className:t.join(" ")},e.children)},W=a(9),J=a.n(W),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:J.a.BoxesFruits},r.a.createElement("div",{className:J.a.Boxes}),r.a.createElement("div",{className:J.a.Fruits}))}}]),a}(n.Component),G=a(16),U=a.n(G),M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:U.a.WrapHomePageImg},r.a.createElement("div",{className:U.a.HomePageImg}))}}]),a}(n.Component),X=a(19),Q=a.n(X),R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:Q.a.hero},r.a.createElement(v,{assignClasses:["hero"]},r.a.createElement(I,{assignClasses:[""]},"FOR A SMARTER SUPPLY CHAIN"),r.a.createElement(A,{assignClasses:["hero"]},"Take your business to the next level with Tinvio\u2019s Supplier Platform"),r.a.createElement(x,{assignClasses:["hero"],text:"Get Started Now"}),r.a.createElement(F,{assignClasses:["hero"]},"Yes, it\u2019s free \ud83c\udf89"),r.a.createElement(D,null),r.a.createElement(M,null)))}}]),a}(n.Component),q=a(8),z=a.n(q),Y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.src;return r.a.createElement("li",{className:z.a.partnersItem},r.a.createElement("img",{className:z.a.itemLogo,src:a(29)("./".concat(n)),alt:t}))}}]),n}(n.Component),K=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.partners;return r.a.createElement("ul",{className:z.a.partnersList},e.map((function(e,t){return r.a.createElement(Y,{key:t,name:e.name,src:e.logo})})))}}]),a}(n.Component),Z=a(20),$=a.n(Z),V=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={partners:[{id:1,name:"Go Cheken",logo:"GoCheken.png"},{id:2,name:"Jolliebean",logo:"Jolliebean.svg"},{id:3,name:"Bens Cookies",logo:"Bens.svg"},{id:4,name:"Simply Wrapps",logo:"SimplyWrapps.png"},{id:5,name:"Italian Club",logo:"Italian.png"}]},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:$.a.partners},r.a.createElement(v,{assignClasses:["partners"]},r.a.createElement(A,{assignClasses:["partners"]},"Trusted by 1000+ partners across APAC"),r.a.createElement(K,{partners:this.state.partners})))}}]),a}(n.Component),ee=(a(35),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null),r.a.createElement(R,null),r.a.createElement(V,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.38c112cd.chunk.js.map