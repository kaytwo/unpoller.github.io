"use strict";(self.webpackChunkpollerdox=self.webpackChunkpollerdox||[]).push([[30],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(3117),o=(n(7294),n(3905));const l={id:"controllerlogin",title:"Unifi Controller Login"},i=void 0,a={unversionedId:"install/controllerlogin",id:"install/controllerlogin",title:"Unifi Controller Login",description:"Configuring the Unifi controller",source:"@site/docs/install/controllerlogin.md",sourceDirName:"install",slug:"/install/controllerlogin",permalink:"/docs/install/controllerlogin",draft:!1,tags:[],version:"current",frontMatter:{id:"controllerlogin",title:"Unifi Controller Login"},sidebar:"someSidebar",previous:{title:"Install Method",permalink:"/docs/install/installmethod"},next:{title:"Docker Compose",permalink:"/docs/install/dockercompose"}},c={},s=[{value:"Configuring the Unifi controller",id:"configuring-the-unifi-controller",level:2},{value:"UnifiOS Controller",id:"unifios-controller",level:3},{value:"Non UnifiOS Controller",id:"non-unifios-controller",level:3},{value:"Next Steps",id:"next-steps",level:2}],u={toc:s};function p(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuring-the-unifi-controller"},"Configuring the Unifi controller"),(0,o.kt)("p",null,"The only requirement of the controller is that UniFi Poller can log in to it and extract data.\nFor this purpose go ahead and create a new user. Make a note of the username and password you have chosen."),(0,o.kt)("p",null,"Adding a user depends on the type of controller you have."),(0,o.kt)("h3",{id:"unifios-controller"},"UnifiOS Controller"),(0,o.kt)("p",null,"If your controller is on a UDM, UXG, or UDM-Pro or UCK running UnifiOS then it is recommended that a\nLimited Admin user is created with Read-Only rights to the UniFi Network app. Other access\nlevels may not work correctly."),(0,o.kt)("p",null,"For example,the screenshot below show the username chosen as ",(0,o.kt)("inlineCode",{parentName:"p"},"unifipoller"),".\nThis is the default, will be used throughout these docs."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(8937).Z,width:"399",height:"1030"})),(0,o.kt)("h3",{id:"non-unifios-controller"},"Non UnifiOS Controller"),(0,o.kt)("p",null,"If you are using another controller type (eg. Cloudkey or Virtual) then create a menual read-only user."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Email")," field will be the 'username' you will need to create the config file."),(0,o.kt)("p",null,"The Unifi controller currently requires the email be formated correctly. If you don't have your own domain try using @example.com so you don't inadvertantly give access to a random user."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"overview"},"Installation Overview")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"controllerlogin"},"Create Config"))))}p.isMDXComponent=!0},8937:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/UDM_user-318c3fb11a9240fdba65e66d552da9d7.png"}}]);