(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[312],{1205:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/FriendChat",function(){return l(9005)}])},9005:function(e,s,l){"use strict";l.r(s);var t=l(5893),n=l(7294),a=l(3443),r=l(6154),i=l(3678),c=l(7288);s.default=function(){let[e,s]=(0,n.useState)(!1),[l,o]=(0,n.useState)(""),[d,h]=(0,n.useState)([]),[u,x]=(0,n.useState)(""),[j,p]=(0,n.useState)(""),f=(0,n.useRef)(null);(0,n.useEffect)(()=>{f.current.scrollTop=f.current.scrollHeight},[d]);let m=e=>{x(e.target.value),p(e.target.value),console.log(u)},g=e=>{h(s=>[...s,e])},v=e=>{"Enter"===e.key&&""!==j&&(g(j),p(""))},N=()=>{""!==j&&(g(j),p(""))},y=r.Z.create({baseURL:"https://freetoknow.pythonanywhere.com"}),w=async(e,s)=>{e.preventDefault(),console.log(s);try{let e=await y.post("/api/friend-chat",{animal:s},{headers:{"Content-Type":"application/json"}});e.data.error?console.error("API error:",e.data.error):console.log("API response:",e.data.result),console.log(e),console.log(e.data),console.log("API response:",e.data.result),o(e.data.result),g(e.data.result),console.log(d)}catch(e){console.error("API error:",e)}};return(0,t.jsxs)("div",{className:"App",style:{height:"100vh",display:"flex",flexDirection:"column"},children:[(0,t.jsx)("header",{className:"App-header",children:(0,t.jsxs)("div",{className:"navbar",children:[(0,t.jsx)("button",{className:"menu-button",onClick:()=>s(!e),children:"☰"}),(0,t.jsx)("h6",{className:"App-title",children:"New chat"}),(0,t.jsx)("button",{className:"plus-button",children:"+"})]})}),(0,t.jsx)("div",{className:"App-content",ref:f,style:{overflowY:"scroll",marginTop:4,marginLeft:10,marginRight:10},children:(0,t.jsx)("ul",{style:{listStyleType:"none"},children:d.map((e,s)=>(0,t.jsxs)("li",{style:{display:"flex",alignItems:"top",justifyContent:s%2==0?"flex-start":"flex-end",marginBottom:"10px"},children:[s%2==0&&(0,t.jsx)(c.default,{src:(s+1)%2==0?"/chatGPT2.png":"/me.png",alt:"head icon"}),(0,t.jsx)("div",{style:{marginLeft:"10px"},children:(0,t.jsx)("div",{style:{backgroundColor:(s+1)%2==0?"#f0f0f0":"#a2e855",borderRadius:"8px",padding:"10px",color:"black",fontSize:14,fontWeight:500,marginBottom:"10px",textAlign:"left"},children:e})}),s%2==1&&(0,t.jsx)(c.default,{src:(s+1)%2==0?"/chatGPT2.jpg":"/me.png",alt:"head icon"})]},s))})}),(0,t.jsx)("div",{className:"chat-container",style:{marginTop:"auto"},children:(0,t.jsxs)("div",{className:"ChatInput",children:[(0,t.jsx)("div",{className:"InputContainer",children:(0,t.jsxs)("form",{onSubmit:e=>w(e,u),children:[(0,t.jsx)("input",{type:"text",placeholder:"Type a sentence...",value:j,name:"animal",onChange:m,onKeyDown:v}),(0,t.jsx)("button",{className:"SendButton",onClick:N,children:(0,t.jsx)(i.default,{})})]})}),(0,t.jsx)("div",{className:"ChatInfo",children:"Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 3 Version."})]})}),(0,t.jsx)(a.default,{isOpen:e,onClose:()=>s(!1)})]})}},7288:function(e,s,l){"use strict";l.r(s);var t=l(5893);l(7294);let n=e=>{let{src:s,alt:l}=e;return(0,t.jsx)("img",{src:s,alt:l,className:"w-6 h-6 rounded-full"})};s.default=n},3542:function(e,s,l){"use strict";l.r(s);var t=l(5893);l(7294);let n=()=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})});s.default=n},3678:function(e,s,l){"use strict";l.r(s);var t=l(5893);l(7294),s.default=function(){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"#999",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-send",children:[(0,t.jsx)("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),(0,t.jsx)("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})}},3443:function(e,s,l){"use strict";l.r(s);var t=l(5893);l(7294);var n=l(1664),a=l.n(n),r=l(3542);let i=e=>{let{isOpen:s,onClose:l}=e;return(0,t.jsxs)("div",{className:"Sidebar ".concat(s?"open":""),children:[(0,t.jsxs)("div",{className:"Sidebar-header",children:[(0,t.jsx)("h6",{children:"+  New Chat"}),(0,t.jsx)("button",{className:"close-btn",onClick:l,children:"\xd7"})]}),(0,t.jsx)("div",{className:"Sidebar-content",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("ul",{children:[(0,t.jsx)("label",{className:"label",children:"Basic"}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"/page/HistoryTruth",children:(0,t.jsxs)("div",{className:"list-item",children:[(0,t.jsx)(r.default,{}),(0,t.jsx)("span",{children:"History Truth"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"/page/ChatGPTMobile",children:(0,t.jsxs)("div",{className:"list-item",children:[(0,t.jsx)(r.default,{}),(0,t.jsx)("span",{children:"Grammar Correction"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"/page/FriendChat",children:(0,t.jsxs)("div",{className:"list-item",children:[(0,t.jsx)(r.default,{}),(0,t.jsx)("span",{children:"Friend Chat"})]})})})]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("label",{className:"label",children:"Advance"}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"/page/ExplainCode",children:(0,t.jsxs)("div",{className:"list-item",children:[(0,t.jsx)(r.default,{}),(0,t.jsx)("span",{children:"Explain Code"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"/page/EssayOutline",children:(0,t.jsxs)("div",{className:"list-item",children:[(0,t.jsx)(r.default,{}),(0,t.jsx)("span",{children:"Generate writing outline"})]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"/page/EnglishOther",children:(0,t.jsxs)("div",{className:"list-item",children:[(0,t.jsx)(r.default,{}),(0,t.jsx)("span",{children:"English Translate"})]})})})]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("label",{className:"label",children:"More"}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"/page/StoryCreate",children:(0,t.jsxs)("div",{className:"list-item",children:[(0,t.jsx)(r.default,{}),(0,t.jsx)("span",{children:"Story Create"})]})})})]})]})})]})};s.default=i}},function(e){e.O(0,[664,588,774,888,179],function(){return e(e.s=1205)}),_N_E=e.O()}]);