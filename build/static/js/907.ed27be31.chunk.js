"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[907],{63907:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var c=n(89379),s=n(65043),r=n(23927),a=n(27210),o=n(6051),l=n(2761),i=n(37490),d=n(30326),m=n(80495),u=n(79126),f=n(47419),p=n(96651),x=n(57967),h=n(85531),y=n(18758),j=n(76191),v=n(67407),g=n(61966),A=n(24236),b=n(70579);const{Title:w}=r.A,{Search:k}=a.A,C=()=>{const[e,t]=(0,s.useState)([{key:"1",nomor:"1",name:"User A",telp:"083892010575",role:"Direksi",username:"usera",password:"******",foto:"https://via.placeholder.com/50"},{key:"2",nomor:"2",name:"User B",telp:"081234567890",role:"Gudang",username:"userb",password:"******",foto:"https://via.placeholder.com/50"},{key:"3",nomor:"3",name:"User C",telp:"085678910112",role:"Admin Online",username:"userc",password:"******",foto:"https://via.placeholder.com/50"},{key:"4",nomor:"4",name:"User D",telp:"081356789012",role:"Packing",username:"userd",password:"******",foto:"https://via.placeholder.com/50"},{key:"5",nomor:"5",name:"User E",telp:"082345678912",username:"usere",password:"******",foto:"https://via.placeholder.com/50"}]),n=[{title:"No",dataIndex:"nomor",key:"nomor"},{title:"Nama",key:"name",render:(e,t)=>(0,b.jsxs)(o.A,{children:[(0,b.jsx)(l.A,{size:"large",src:t.foto}),(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{children:t.name}),(0,b.jsx)("br",{}),(0,b.jsx)(i.A,{status:"success",text:"Online"})]})]})},{title:"Telp",dataIndex:"telp",key:"telp"},{title:"Hak Akses",dataIndex:"role",key:"role"},{title:"Username",dataIndex:"username",key:"username"},{title:"Menu",key:"menu",render:(e,t)=>(0,b.jsx)(d.A,{overlay:r(t),trigger:["click"],children:(0,b.jsx)(m.Ay,{icon:(0,b.jsx)(y.A,{})})})}],r=e=>(0,b.jsxs)(u.A,{children:[(0,b.jsx)(u.A.Item,{icon:(0,b.jsx)(j.A,{}),children:"Detail"},"detail"),(0,b.jsx)(u.A.Item,{icon:(0,b.jsx)(v.A,{}),children:"Edit"},"edit"),(0,b.jsx)(u.A.Item,{icon:(0,b.jsx)(g.A,{}),children:"Hapus"},"delete")]});return(0,b.jsxs)("div",{children:[(0,b.jsxs)(f.A,{style:{marginTop:25,display:"flex",justifyContent:"space-between"},children:[(0,b.jsx)(w,{level:2,children:"User"}),(0,b.jsx)(p.A,{title:"Buat Baru",children:(0,b.jsx)(m.Ay,{type:"primary",icon:(0,b.jsx)(A.A,{}),children:"Buat Baru"})})]}),(0,b.jsx)(f.A,{style:{marginBottom:16,display:"flex",justifyContent:"flex-end"},children:(0,b.jsx)(k,{placeholder:"Search by Name",onSearch:n=>{const c=e.filter((e=>e.name.toLowerCase().includes(n.toLowerCase())));t(c)},allowClear:!0,style:{flex:"1 1 auto",maxWidth:"300px",width:"100%"}})}),(0,b.jsxs)("div",{className:"container mx-auto p-0",children:[(0,b.jsx)("div",{className:"hidden lg:block",children:(0,b.jsx)(x.A,{columns:n,dataSource:e,components:{header:{cell:e=>(0,b.jsx)("th",(0,c.A)((0,c.A)({},e),{},{style:{backgroundColor:"#1890ff",color:"white"},children:e.children}))}}})}),(0,b.jsx)("div",{className:"block lg:hidden space-y-4",children:e.map((e=>(0,b.jsxs)(h.A,{className:"shadow-lg border-l-emerald-700 border-l-4 p-0.5",children:[(0,b.jsxs)("div",{className:"flex justify-between items-center mb-1",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("strong",{children:"No:"})," ",e.nomor]}),(0,b.jsx)(d.A,{overlay:r(e),trigger:["click"],children:(0,b.jsx)(m.Ay,{icon:(0,b.jsx)(y.A,{}),type:"text"})})]}),(0,b.jsx)("div",{className:"mb-1",children:(0,b.jsx)("strong",{children:e.name})}),(0,b.jsx)("div",{className:"mb-1",children:(0,b.jsxs)("p",{className:"mt-0.5",children:["Telp: ",e.telp," ",(0,b.jsx)("br",{}),"Username: ",e.username]})}),(0,b.jsxs)("div",{className:"mb-1",children:[(0,b.jsx)("strong",{children:"Foto:"}),(0,b.jsx)("p",{className:"mt-0.5",children:(0,b.jsx)("img",{src:e.foto,alt:"Foto",style:{width:50,borderRadius:"50%"}})})]})]},e.key)))})]})]})}},61966:(e,t,n)=>{n.d(t,{A:()=>l});var c=n(58168),s=n(65043);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var a=n(22172),o=function(e,t){return s.createElement(a.A,(0,c.A)({},e,{ref:t,icon:r}))};const l=s.forwardRef(o)},18758:(e,t,n)=>{n.d(t,{A:()=>l});var c=n(58168),s=n(65043);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};var a=n(22172),o=function(e,t){return s.createElement(a.A,(0,c.A)({},e,{ref:t,icon:r}))};const l=s.forwardRef(o)},24236:(e,t,n)=>{n.d(t,{A:()=>l});var c=n(58168),s=n(65043);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var a=n(22172),o=function(e,t){return s.createElement(a.A,(0,c.A)({},e,{ref:t,icon:r}))};const l=s.forwardRef(o)},95150:(e,t,n)=>{n.d(t,{A:()=>c});const c=(0,n(65043).createContext)({})},28821:(e,t,n)=>{n.d(t,{A:()=>u});var c=n(65043),s=n(98139),r=n.n(s),a=n(44320),o=n(35296),l=n(95150),i=n(56055),d=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(c=Object.getOwnPropertySymbols(e);s<c.length;s++)t.indexOf(c[s])<0&&Object.prototype.propertyIsEnumerable.call(e,c[s])&&(n[c[s]]=e[c[s]])}return n};function m(e,t){const[n,s]=c.useState("string"===typeof e?e:"");return c.useEffect((()=>{(()=>{if("string"===typeof e&&s(e),"object"===typeof e)for(let n=0;n<a.ye.length;n++){const c=a.ye[n];if(!t[c])continue;const r=e[c];if(void 0!==r)return void s(r)}})()}),[JSON.stringify(e),t]),n}const u=c.forwardRef(((e,t)=>{const{prefixCls:n,justify:s,align:u,className:f,style:p,children:x,gutter:h=0,wrap:y}=e,j=d(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:v,direction:g}=c.useContext(o.QO),[A,b]=c.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[w,k]=c.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),C=m(u,w),O=m(s,w),I=c.useRef(h),N=(0,a.Ay)();c.useEffect((()=>{const e=N.subscribe((e=>{k(e);const t=I.current||0;(!Array.isArray(t)&&"object"===typeof t||Array.isArray(t)&&("object"===typeof t[0]||"object"===typeof t[1]))&&b(e)}));return()=>N.unsubscribe(e)}),[]);const S=v("row",n),[E,M,z]=(0,i.L3)(S),B=(()=>{const e=[void 0,void 0];return(Array.isArray(h)?h:[h,void 0]).forEach(((t,n)=>{if("object"===typeof t)for(let c=0;c<a.ye.length;c++){const s=a.ye[c];if(A[s]&&void 0!==t[s]){e[n]=t[s];break}}else e[n]=t})),e})(),H=r()(S,{["".concat(S,"-no-wrap")]:!1===y,["".concat(S,"-").concat(O)]:O,["".concat(S,"-").concat(C)]:C,["".concat(S,"-rtl")]:"rtl"===g},f,M,z),L={},U=null!=B[0]&&B[0]>0?B[0]/-2:void 0;U&&(L.marginLeft=U,L.marginRight=U);const[R,P]=B;L.rowGap=P;const F=c.useMemo((()=>({gutter:[R,P],wrap:y})),[R,P,y]);return E(c.createElement(l.A.Provider,{value:F},c.createElement("div",Object.assign({},j,{className:H,style:Object.assign(Object.assign({},L),p),ref:t}),x)))}))},56055:(e,t,n)=>{n.d(t,{L3:()=>l,xV:()=>i});var c=n(43944),s=n(78855),r=n(78446);const a=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},o=(e,t)=>((e,t)=>{const{prefixCls:n,componentCls:c,gridColumns:s}=e,r={};for(let a=s;a>=0;a--)0===a?(r["".concat(c).concat(t,"-").concat(a)]={display:"none"},r["".concat(c,"-push-").concat(a)]={insetInlineStart:"auto"},r["".concat(c,"-pull-").concat(a)]={insetInlineEnd:"auto"},r["".concat(c).concat(t,"-push-").concat(a)]={insetInlineStart:"auto"},r["".concat(c).concat(t,"-pull-").concat(a)]={insetInlineEnd:"auto"},r["".concat(c).concat(t,"-offset-").concat(a)]={marginInlineStart:0},r["".concat(c).concat(t,"-order-").concat(a)]={order:0}):(r["".concat(c).concat(t,"-").concat(a)]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:"0 0 ".concat(a/s*100,"%"),maxWidth:"".concat(a/s*100,"%")}],r["".concat(c).concat(t,"-push-").concat(a)]={insetInlineStart:"".concat(a/s*100,"%")},r["".concat(c).concat(t,"-pull-").concat(a)]={insetInlineEnd:"".concat(a/s*100,"%")},r["".concat(c).concat(t,"-offset-").concat(a)]={marginInlineStart:"".concat(a/s*100,"%")},r["".concat(c).concat(t,"-order-").concat(a)]={order:a});return r["".concat(c).concat(t,"-flex")]={flex:"var(--".concat(n).concat(t,"-flex)")},r})(e,t),l=(0,s.OF)("Grid",(e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}}),(()=>({}))),i=(0,s.OF)("Grid",(e=>{const t=(0,r.oX)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[a(t),o(t,""),o(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({["@media (min-width: ".concat((0,c.zA)(t),")")]:Object.assign({},o(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}),(()=>({})))},47419:(e,t,n)=>{n.d(t,{A:()=>c});const c=n(28821).A}}]);
//# sourceMappingURL=907.ed27be31.chunk.js.map