(this["webpackJsonpurl-shortener"]=this["webpackJsonpurl-shortener"]||[]).push([[0],{10:function(e,t,s){},11:function(e,t,s){},12:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s(1),n=s.n(i),a=s(4),r=s.n(a),l=(s(10),s.p+"static/media/icon-facebook.229c75a0.svg"),o=s.p+"static/media/icon-twitter.1d5c6d5e.svg",j=s.p+"static/media/icon-pinterest.a2d25ab4.svg",d=s.p+"static/media/icon-instagram.df587328.svg",h=function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsxs)("div",{className:"upfooter",children:[Object(c.jsx)("h1",{children:"Boost your links today"}),Object(c.jsx)("h4",{className:"btn",children:"Get Started"})]}),Object(c.jsxs)("div",{className:"ftrinfo",children:[Object(c.jsx)("h1",{className:"ftrsection",children:"Shortly"}),Object(c.jsxs)("div",{className:"ftrsection",children:[Object(c.jsx)("h5",{children:"Features"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Link Shortening"}),Object(c.jsx)("li",{children:"Branded Links"}),Object(c.jsx)("li",{children:"Analytics"})]})]}),Object(c.jsxs)("div",{className:"ftrsection",children:[Object(c.jsx)("h5",{children:"Resources"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Blog"}),Object(c.jsx)("li",{children:"Developers"}),Object(c.jsx)("li",{children:"Support"})]})]}),Object(c.jsxs)("div",{className:"ftrsection",children:[Object(c.jsx)("h5",{children:"Company"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"About"}),Object(c.jsx)("li",{children:"Our Team"}),Object(c.jsx)("li",{children:"Careers"}),Object(c.jsx)("li",{children:"Contact"})]})]}),Object(c.jsxs)("div",{className:"ftrsection",children:[Object(c.jsx)("img",{className:"socialicon",src:l,alt:"fb"}),Object(c.jsx)("img",{className:"socialicon",src:o,alt:"twitter"}),Object(c.jsx)("img",{className:"socialicon",src:j,alt:"pinterest"}),Object(c.jsx)("img",{className:"socialicon",src:d,alt:"instagram"})]})]})]})},b=s.p+"static/media/illustration-working.c9b5ef54.svg",u=function(){return Object(c.jsxs)("div",{className:"intro",children:[Object(c.jsxs)("div",{className:"intro__text",children:[Object(c.jsx)("h1",{className:"intro__title",children:"More than just shorter links"}),Object(c.jsx)("p",{className:"intro__info",children:"Build your brand's recognition and get detailed insights on how your links are performing."}),Object(c.jsx)("h4",{className:"btn",children:"Get Started"})]}),Object(c.jsx)("img",{className:"intro__image",src:b,alt:"working"})]})},m=s.p+"static/media/logo.83464303.svg",O=function(){return Object(c.jsxs)("div",{id:"nav__options",className:"mobile nav__options",children:[Object(c.jsxs)("div",{className:"nav__left",children:[Object(c.jsx)("h4",{children:"Features"}),Object(c.jsx)("h4",{children:"Pricing"}),Object(c.jsx)("h4",{children:"Resources"})]}),Object(c.jsxs)("div",{className:"nav__right",children:[Object(c.jsx)("h4",{children:"Login"}),Object(c.jsx)("h4",{className:"btn",children:"Sign Up"})]})]})},x=function(){return Object(c.jsxs)("div",{id:"hamburger",className:"container",onClick:function(){document.getElementById("hamburger").classList.toggle("change"),document.getElementById("nav__options").classList.toggle("mobile")},children:[Object(c.jsx)("div",{className:"bar1"}),Object(c.jsx)("div",{className:"bar2"}),Object(c.jsx)("div",{className:"bar3"})]})},g=function(){return Object(c.jsxs)("div",{className:"nav",children:[Object(c.jsxs)("div",{className:"nav__title",children:[Object(c.jsx)("img",{src:m,alt:"logo"}),Object(c.jsx)(x,{})]}),Object(c.jsx)(O,{})]})},v=s(2),f=function(e){var t=e.linkInfo,s=Object(i.useState)(!1),n=Object(v.a)(s,2),a=n[0],r=n[1];return Object(c.jsxs)("div",{className:"shortened",children:[Object(c.jsx)("div",{className:"base__url",children:Object(c.jsx)("h4",{children:t.result.original_link})}),Object(c.jsxs)("div",{className:"shortened__rslt",children:[Object(c.jsx)("h4",{id:"rslt__url",className:"rslt__url",children:t.result.full_short_link}),void 0!==navigator.clipboard&&Object(c.jsx)("button",{disabled:a,onClick:function(){try{navigator.clipboard.writeText(t.result.full_short_link).then(r(!0)).catch((function(e){return console.log(e)}))}catch(e){console.log(e)}},className:"action__btn copy ".concat(a&&"copied"),children:a?"Copied!":"Copy"})]})]})},p=function(){var e=Object(i.useState)(""),t=Object(v.a)(e,2),s=t[0],n=t[1],a=Object(i.useState)(null),r=Object(v.a)(a,2),l=r[0],o=r[1],j=Object(i.useState)(null),d=Object(v.a)(j,2),h=d[0],b=d[1];return Object(c.jsxs)("div",{className:"shorten",children:[Object(c.jsxs)("form",{className:"shorten__box",children:[Object(c.jsx)("input",{onChange:function(e){return n(e.target.value)},className:"shorten__inp",type:"text",name:"url",placeholder:"Shorten a link here...",value:s}),Object(c.jsx)("button",{disabled:"Loading"===h,type:"submit",onClick:function(e){if(e.preventDefault(),s){var t=s;n(""),b("Loading"),fetch("https://api.shrtco.de/v2/shorten?url=".concat(t)).then((function(e){return e.json()})).then((function(e){e.ok?(o(e),b(null)):b({error:!0,info:"Please add a valid link!"})})).catch((function(e){b({error:!0,info:"Unknown Error Occured!"})}))}else b({error:!0,info:"Please provide your Link!"})},className:"action__btn",children:"Shorten it!"})]}),l&&Object(c.jsx)(f,{linkInfo:l}),"Loading"===h&&Object(c.jsx)("div",{className:"loading",children:Object(c.jsx)("span",{children:"Just a moment..."})}),(null===h||void 0===h?void 0:h.error)&&Object(c.jsxs)("div",{className:"error",children:[h.info," ",Object(c.jsx)("span",{onClick:function(){return b(null)},children:"\xd7"})]})]})},_=s.p+"static/media/icon-brand-recognition.c349d3b6.svg",N=s.p+"static/media/icon-detailed-records.265c8aea.svg",k=s.p+"static/media/icon-fully-customizable.a1532a74.svg",y=function(e){var t=e.title,s=e.info,i=e.imageurl;return Object(c.jsxs)("div",{className:"statscard",children:[Object(c.jsx)("div",{className:"img__container",children:Object(c.jsx)("img",{src:i,alt:"icon"})}),Object(c.jsx)("h3",{children:t}),Object(c.jsx)("p",{children:s})]})},w=function(){return Object(c.jsxs)("div",{className:"stats",children:[Object(c.jsxs)("div",{className:"stats__head",children:[Object(c.jsx)("h2",{children:"Advanced Statistics"}),Object(c.jsxs)("p",{children:["Track how your links are performing across the web with ",Object(c.jsx)("br",{}),"our advanced statistics dashboard."]})]}),Object(c.jsxs)("div",{className:"stats__body",children:[Object(c.jsx)(y,{title:"Brand Recognition",info:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",imageurl:_}),Object(c.jsx)(y,{title:"Detailed Records",info:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",imageurl:N}),Object(c.jsx)(y,{title:"Fully Customizable",info:"Improve brand awareness and content discoverabilty through customizable links, supercharging audience engagement.",imageurl:k})]})]})},S=(s(11),function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(g,{}),Object(c.jsx)(u,{}),Object(c.jsx)(p,{}),Object(c.jsx)(w,{}),Object(c.jsx)(h,{})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.1b535669.chunk.js.map