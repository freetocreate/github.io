(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6616)}])},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6495).Z,n=r(2648).Z,o=r(1598).Z,i=r(7273).Z,s=o(r(7294)),l=n(r(2636)),c=r(7757),d=r(3735),f=r(3341);r(4210);var u=n(r(7746));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/github.io/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,n,o,i,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current(a({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}function b(e){let[t,r]=s.version.split("."),a=parseInt(t,10),n=parseInt(r,10);return a>18||18===a&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let x=s.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:o,qualityInt:l,className:c,imgStyle:d,blurStyle:f,isLazy:u,fetchPriority:g,fill:m,placeholder:h,loading:x,srcString:v,config:w,unoptimized:y,loader:j,onLoadRef:k,onLoadingCompleteRef:_,setBlurComplete:N,setShowAltText:E,onLoad:C,onError:S}=e,z=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return x=u?"lazy":x,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},z,b(g),{loading:x,width:o,height:n,decoding:"async","data-nimg":m?"fill":"1",className:c,style:a({},d,f)},r,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&p(e,v,h,k,_,N,y))},[v,h,k,_,N,S,y,t]),onLoad:e=>{let t=e.currentTarget;p(t,v,h,k,_,N,y)},onError:e=>{E(!0),"blur"===h&&N(!0),S&&S(e)}})))}),v=s.forwardRef((e,t)=>{let r,n;var o,{src:p,sizes:v,unoptimized:w=!1,priority:y=!1,loading:j,className:k,quality:_,width:N,height:E,fill:C,style:S,onLoad:z,onLoadingComplete:P,placeholder:I="empty",blurDataURL:R,fetchPriority:O,layout:M,objectFit:A,objectPosition:L,lazyBoundary:T,lazyRoot:F}=e,G=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=s.useContext(f.ImageConfigContext),D=s.useMemo(()=>{let e=g||B||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return a({},e,{allSizes:t,deviceSizes:r})},[B]),W=G,q=W.loader||u.default;delete W.loader;let V="__next_img_default"in q;if(V){if("custom"===D.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=q;q=t=>{let{config:r}=t,a=i(t,["config"]);return e(a)}}if(M){"fill"===M&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(S=a({},S,e));let t={responsive:"100vw",fill:"100vw"}[M];t&&!v&&(v=t)}let Z="",U=h(N),J=h(E);if("object"==typeof(o=p)&&(m(o)||void 0!==o.src)){let e=m(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,n=e.blurHeight,R=R||e.blurDataURL,Z=e.src,!C){if(U||J){if(U&&!J){let t=U/e.width;J=Math.round(e.height*t)}else if(!U&&J){let t=J/e.height;U=Math.round(e.width*t)}}else U=e.width,J=e.height}}let X=!y&&("lazy"===j||void 0===j);(!(p="string"==typeof p?p:Z)||p.startsWith("data:")||p.startsWith("blob:"))&&(w=!0,X=!1),D.unoptimized&&(w=!0),V&&p.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(w=!0),y&&(O="high");let[Y,H]=s.useState(!1),[$,K]=s.useState(!1),Q=h(_),ee=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:L}:{},$?{}:{color:"transparent"},S),et="blur"===I&&R&&!Y?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:J,blurWidth:r,blurHeight:n,blurDataURL:R,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:a,width:n,quality:o,sizes:i,loader:s}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:a,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(r);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,i),d=l.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:l.map((e,a)=>"".concat(s({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:a+1).concat(c)).join(", "),src:s({config:t,src:r,quality:o,width:l[d]})}}({config:D,src:p,unoptimized:w,width:U,quality:Q,sizes:v,loader:q}),ea=p,en=s.useRef(z);s.useEffect(()=>{en.current=z},[z]);let eo=s.useRef(P);s.useEffect(()=>{eo.current=P},[P]);let ei=a({isLazy:X,imgAttributes:er,heightInt:J,widthInt:U,qualityInt:Q,className:k,imgStyle:ee,blurStyle:et,loading:j,config:D,fetchPriority:O,fill:C,unoptimized:w,placeholder:I,loader:q,srcString:ea,onLoadRef:en,onLoadingCompleteRef:eo,setBlurComplete:H,setShowAltText:K},W);return s.default.createElement(s.default.Fragment,null,s.default.createElement(x,Object.assign({},ei,{ref:t})),y?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:W.crossOrigin},b(O)))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:n,blurDataURL:o,objectFit:i}=e,s=a||t,l=n||r,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:a,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(a,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},6616:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(5893),n=r(695),o=r.n(n),i=r(5675),s=r.n(i),l=r(1664),c=r.n(l);function d(){return(0,a.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24",children:[(0,a.jsxs)("div",{className:"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex",children:[(0,a.jsxs)("p",{className:"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30",children:["Get started by\xa0",(0,a.jsx)("code",{className:"font-mono font-bold",children:"one click!"})]}),(0,a.jsx)("div",{className:"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",children:(0,a.jsxs)("a",{className:"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0",href:"#",target:"_blank",rel:"noopener noreferrer",children:[" ",(0,a.jsx)(s(),{src:"/gptitle.jpg",alt:"Vercel Logo",className:"dark:invert",width:100,height:24,priority:!0})]})})]}),(0,a.jsx)("div",{className:"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]",children:(0,a.jsx)(s(),{className:"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert",src:"/chatGPT.jpg",alt:"Next.js Logo",width:450,height:317,priority:!0})}),(0,a.jsxs)("div",{className:"mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left",children:[(0,a.jsxs)(c(),{href:"/page/ChatGPTMobile",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"".concat(o().className," mb-3 text-2xl font-semibold"),children:["Grammar correction"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"".concat(o().className," m-0 max-w-[30ch] text-sm opacity-50"),children:"Corrects sentences into standard English."})]}),(0,a.jsxs)("a",{href:"#",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"".concat(o().className," mb-3 text-2xl font-semibold"),children:["Chat with chatGPT freely"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"".concat(o().className," m-0 max-w-[30ch] text-sm opacity-50"),children:"Open ended conversation with an AI assistant."})]}),(0,a.jsxs)("a",{href:"#",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"".concat(o().className," mb-3 text-2xl font-semibold"),children:["Parse unstructured data"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"".concat(o().className," m-0 max-w-[30ch] text-sm opacity-50"),children:"Create tables from long form text by specifying a structure and supplying some examples."})]}),(0,a.jsxs)("a",{href:"#",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"".concat(o().className," mb-3 text-2xl font-semibold"),children:["Restaurant review creator"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"".concat(o().className," m-0 max-w-[30ch] text-sm opacity-50"),children:"Turn a few words into a restaurant review."})]})]})]})}},695:function(e){e.exports={style:{fontFamily:"'__Inter_49cd42', '__Inter_Fallback_49cd42'",fontStyle:"normal"},className:"__className_49cd42"}},5675:function(e,t,r){e.exports=r(3740)}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);