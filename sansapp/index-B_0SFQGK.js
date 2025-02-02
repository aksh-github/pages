(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))p(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const u of f.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&p(u)}).observe(document,{childList:!0,subtree:!0});function n(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function p(c){if(c.ep)return;c.ep=!0;const f=n(c);fetch(c.href,f)}})();function Dt(s,r){let n;return function(...p){const c=()=>(n=null,s.apply(this,p));clearTimeout(n),n=setTimeout(c,r)}}const B=new Set,nt=new Set,X=(()=>{let s=null;const r=b=>{s=b},n=b=>{console.warn("untested code"),u=!0,b(),u=!1,f()},p=b=>{o=!0,b(),o=!1};let c=null,f=()=>{},u=!1,o=!1;const h=(b,S=100)=>{f=b,c=Dt(f,S)},O=b=>{let S={...b},T=s;return[d=>d?S[d]:S,d=>{if(typeof d=="function")S=d(S);else{if(S==d)return;S={...d}}u?T&&B.add(T):o||(T&&B.add(T),c())}]},R=b=>{let S=b,T=s;return[()=>S,d=>{if(typeof d=="function")S=d(S);else{if(S==d)return;S=d}u?T&&B.add(T):o||(T&&B.add(T),c())}]};return{batch:n,registerCallback:h,state:O,atom:R,context:b=>{const[S,T]=R(b);return{get:()=>S(),set:z=>{const G=S();p(()=>T(z)),G!==S()&&(nt.add(S()),c())}}},skipUpdate:p,setCurrComp:r}})(),xt=X.registerCallback,tt=X.atom,It=X.skipUpdate,at=X.setCurrComp,Mt=X.context,w=()=>{},Z=(()=>{let s=[],r={},n={},p=[],c=null,f=null,u=null;function o(){const t=new WeakMap;return{registerEventListener:(e,l,i,g)=>{t.has(e)||t.set(e,[]),t.get(e).push({type:l,listener:i,options:g})},unregisterEventListener:e=>{if(t.has(e)){const l=t.get(e);for(;l.length;){const{type:i,listener:g,options:E}=l.pop();e.removeEventListener(i,g,E)}}},getEventListeners:e=>t.get(e)||[],unRegisterAllEventListeners:async e=>{const l=ht(e);for(let i=0;i<l.length;i++)h.unregisterEventListener(l[i]),l[i]=null,i%50===0&&await Ut()}}}const h=new o;let O=null,R=null;function U(t){O=t}function b(t){R=t}function S(){Object.keys(n).forEach(t=>{var e,l;r[t]||((l=(e=n[t]).unMount)==null||l.call(e),n[t].unMount=null,pt[t]&&delete pt[t])})}function T(){for(;s!=null&&s.length;)s.pop()()}function z(t,...e){return e}function G(t,e,...l){var E,x,M,q;let i=null,g;if(Array.isArray(l)&&(l=l.flat()),typeof t=="function"){g=(E=p[p.length-1])==null?void 0:E.n,p.push({n:t==null?void 0:t.name});const I=`${t.name}:${g}:${e==null?void 0:e.key}`;if(n){const D=n[I];D?(i=D.fn,O=D.mount,R=D.unMount):(at(I),i=t(e,...l),O&&s.push(O),at(null))}r[I]={fname:t.name,fn:i,mount:O,unMount:R,p:g,key:e==null?void 0:e.key},O=R=null;const y=typeof i=="function"?i({...e,children:l}):i;return p.pop(),y!=null&&y.type?(y.type==="df"&&(e={...e,fragChildLen:y==null?void 0:y.children.length}),{...y,$c:t.name,children:[y],$p:g,key:e==null?void 0:e.key,props:e||{},type:"df"}):Array.isArray(y)?(console.warn("Your component named `",t.name,"` is returning Array, manipulation to this Array is currently NOT supported and can lead to Unexpected behavior"),{$c:t.name,type:"df",children:y,$p:g}):y!=null&&y.$c?{$c:t.name,children:[y],$p:g}:{$c:t.name,value:y,props:e||{},$p:g}}if(t==="df"){let I=0;for(let y=0;y<l.length;++y)((x=l[y])==null?void 0:x.type)==="df"?I+=((q=(M=l[y])==null?void 0:M.props)==null?void 0:q.fragChildLen)||0:I+=1;return{type:t,props:{...e,fragChildLen:I},children:l}}else return{type:t,props:e||{},children:e!=null&&e.ignoreNode?[]:l}}function d(t,e,l){l?(t.setAttribute(e,l),t[e]=!0):t[e]=!1}function Et(t,e){t.removeAttribute(e),t[e]=!1}function ct(t){return/^on/.test(t)}function yt(t){return t.slice(2).toLowerCase()}function rt(t){return ct(t)||t==="forceUpdate"}function ut(t,e,l){rt(e)||(e==="className"?t.setAttribute("class",l):e==="style"?Object.keys(l).forEach(i=>{t.style[i]=l[i]}):e==="ref"?l==null||l(t):e==="ignoreLater"?(t.setAttribute("ignorenode",!0),t.removeAttribute(e.toLowerCase())):typeof l=="boolean"?d(t,e,l):((e==="value"||e==="htmlFor")&&(t[e]=l),t.setAttribute(e,l)))}function Ct(t,e,l){rt(e)||(e==="className"?t.removeAttribute("class"):typeof l=="boolean"?Et(t,e):t.removeAttribute(e))}function St(t,e){Object.keys(e).forEach(l=>{ut(t,l,e[l])})}function Pt(t,e,l,i){!l&&l==null?Ct(t,e,i):(!i||l!==i)&&ut(t,e,l)}function At(t,e,l={}){const i=Object.assign({},e,l);Object.keys(i).forEach(g=>{Pt(t,g,e[g],l[g])})}function Lt(t,e){Object.keys(e).forEach(l=>{if(ct(l)){const i=yt(l);h.registerEventListener(t,i,e[l]),t.addEventListener(i,e[l])}})}const bt=(t,e,...l)=>{function i(E,x){Object.keys(x).forEach(M=>{E.setAttributeNS(null,M,x[M])})}const g=document.createElementNS("http://www.w3.org/2000/svg","svg");i(g,e);for(const E of l){const x=document.createElementNS("http://www.w3.org/2000/svg",E.type);i(x,E.props),g.appendChild(x)}return g};function V(t){if(!(t!=null&&t.type))return t!=null&&t.$c?t.children?V(t.children[0]):document.createTextNode((t==null?void 0:t.value)==null||(t==null?void 0:t.value)==null?"":t==null?void 0:t.value):document.createTextNode(t==null||t==null?"":t);if((t==null?void 0:t.type)==="df"){const l=document.createDocumentFragment();return t.children.map(V).forEach(l.appendChild.bind(l)),l}if(t.type==="svg")return bt(t.type,t.props,...t.children);const e=document.createElement(t.type);return t!=null&&t.$c||(St(e,t.props),Lt(e,t.props)),t.children.map(V).forEach(e.appendChild.bind(e)),e}function Tt(t,e){return(t==null?void 0:t.type)===(e==null?void 0:e.type)&&(t==null?void 0:t.type)==="df"?(t==null?void 0:t.$c)!==(e==null?void 0:e.$c):typeof t!=typeof e||!(t!=null&&t.type)&&t!==e||(t==null?void 0:t.type)!==(e==null?void 0:e.type)||(t==null?void 0:t.value)!==(e==null?void 0:e.value)}function kt(t,e){c=t,f=e,u=f(),c.firstChild?c.replaceChild(V(u),c.firstChild):c.appendChild(V(u)),T(),n={...r},r={}}let j=[],$=[];function dt(){let t=f();w(performance.now()),j=[],$=[],Ot(c,t,u),w(performance.now());let e=setTimeout(()=>{clearTimeout(e),S(),$&&Rt($),j&&jt(j),T(),u=t,n={...r},r={}},0)}function ot(t){return t!==void 0||t!==""}const J={routeChange:!1,set:t=>{J.routeChange=t}};window.addEventListener("popstate",()=>J.set(!0)),window.addEventListener("navigate",()=>J.set(!0));function Ot(t,e,l,i=0){let g=ht(c),E=0,x=null,M=!1,q=null;J.routeChange&&(B.clear(),J.set(!1));const I=B.size;let y=null,D=!1,W=0,N=0;function st(a,P,A,F=0){var Y;if(!D&&I){if(P!=null&&P.type&&(A!=null&&A.type))return ft(P,A);if(P===A)return}if(!ot(A))j.push({p:a,op:"APPEND",c:V(P)});else if(ot(P))if(Tt(P,A))if(a!=null&&a.childNodes[F]){const C=a.childNodes[F];if(j.push({p:a,op:"REPLACE",c:[V(P),C]}),(C==null?void 0:C.nodeType)===1){for(;E<g.length;)if(E++,g[E]===C){const L=C.querySelectorAll("*").length;g.splice(E,L);break}}const H=(Y=A==null?void 0:A.props)==null?void 0:Y.fragChildLen;if((A==null?void 0:A.type)==="df"&&H)for(let L=H-1;L>=1;--L)j.push({p:a,op:"REMOVE",c:a.childNodes[F+L]}),E+=1}else if(a!=null&&a.appendChild){const C=V(P);C!=null&&C.nodeName?M?j.push({p:q,op:"APPEND",c:C}):j.push({p:a,op:"APPEND",c:C}):j.push({p:a,op:"CONTENT",c:C==null?void 0:C.textContent})}else j.push({p:a==null?void 0:a.parentNode,op:"APPEND",c:V(P)});else P!=null&&P.type&&ft(P,A);else{const C=a.childNodes[F];if(j.push({p:a,op:"REMOVE",c:C}),(C==null?void 0:C.nodeType)===1){for(;E<g.length;)if(E++,g[E]===C){const H=C.querySelectorAll("*").length;g.splice(E,H);break}}}}function ft(a,P){var F,Y,C,H;if((a==null?void 0:a.type)!=="df"?E+=1:(y=`${a.$c}:${a.$p}:${a.key}`,y.split(":")[0],I?B.has(y)&&(D=!0):D||nt.has((F=a==null?void 0:a.props)==null?void 0:F.context)&&(D=!0)),D&&W===0){w(a.props);const{fragChildLen:L}=a.props;if(L){let v=E+1;for(let _=0;_<L;++_){let lt=0;lt=g[v].querySelectorAll("*").length,W+=lt,v+=1+lt}N=E+L+W+1}else W+=g[E+1].querySelectorAll("*").length,w("comparisonsReqd till: ",g[E+W+1]),N=E+W+1}const A=g[E];if(E===N&&(D=!1,W=0,N=0),x!==A){const L=Object.keys(a.props).length,v=Object.keys(P.props).length;if(!(L===v&&L===0)){if(a.props.ignoreNode||a.props.ignoreLater)return;$.push({$target:A,newProps:a.props,oldProps:P.props})}x=A}if((Y=a==null?void 0:a.props)!=null&&Y.cacheKey){const L=(H=(C=a.children[0])==null?void 0:C.props)==null?void 0:H.__cached,v=L?P.children[0]:null;I&&!L&&(D=!0),st(g[++E],a.children[0],v,0);return}else{const L=a.children.length,v=P.children.length;L>100&&(M=!0,q=document.createDocumentFragment());for(let _=0;_<L||_<v;_++)st(A,a.children[_],P.children[_],_)}M&&(j.push({p:A,op:"APPEND",c:q}),M=!1,q=null)}st(t,e,l,i),B.clear(),nt.clear()}function Rt(t){for(;t.length;){const e=t.shift();At(e.$target,e.newProps,e.oldProps),e.$target=null,e.newProps=null,e.oldProps=null}}function jt(t){var e,l;for(;t.length;){const i=t.shift();switch(i.op){case"APPEND":i.p.appendChild(i.c),i.c=null,i.p=null,i.op=null;break;case"REMOVE":i.p.removeChild(i.c),((e=i.c)==null?void 0:e.nodeType)===1&&requestIdleCallback(()=>{h.unRegisterAllEventListeners(i.c),i.c=null,i.p=null,i.op=null});break;case"REPLACE":i.p.replaceChild(i.c[0],i.c[1]),((l=i.c[1])==null?void 0:l.nodeType)===1&&requestIdleCallback(()=>{h.unRegisterAllEventListeners(i.c[1]),i.c=null,i.p=null,i.op=null});break;case"CONTENT":i.p.textContent=i.c,i.c=null,i.p=null,i.op=null;break}}}return{mount:kt,forceUpdate:dt,onMount:U,onCleanup:b,h:G,df:z}})(),Vt=Z.mount,_t=Z.forceUpdate,vt=Z.onMount,Bt=Z.onCleanup,m=Z.h,pt={};function ht(s){let r=[s],n=s;function p(){for(;n;){const f=!n.getAttribute("ignorenode");n.firstElementChild&&f?(n=n.firstElementChild,r.push(n)):c()}}function c(){for(;n;){if(n.nextElementSibling){n=n.nextElementSibling,r.push(n);return}n=n.parentElement,n===s&&(n=null)}}return p(),r}function Ut(){var s;return(s=globalThis.scheduler)!=null&&s.yield?scheduler.yield():new Promise(r=>{setTimeout(r,0)})}var qt={VITE_API_HOST:"https://aksh-github.github.io",VITE_BASEPATH:"/pages/data/sanskrit/db",VITE_TS:"/data-ts.json",VITE_WORDS:"/words.json",VITE_VERBS:"/verbs.json",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Q=qt,Wt=()=>{var r;const s=(((r=window==null?void 0:window.location)==null?void 0:r.host)||"localhost")+":sans:";return{updateData:(n,p)=>{localStorage.setItem(s+n,JSON.stringify({ts:Date.now(),d:p}))},get:n=>JSON.parse(localStorage.getItem(s+n))}},et={VERBS:0,WORDS:1},K={words:{d:[],ts:0},verbs:{d:[],ts:0}};let it=null;const gt=Mt(""),Ft=()=>({row:s})=>{var r,n,p,c,f,u;return m("div",{className:"divrow"},m("h3",null,s==null?void 0:s.ev),m("p",null," ",(r=s==null?void 0:s.sv)==null?void 0:r.join(", ")),m("p",null,(n=s==null?void 0:s.gana)==null?void 0:n.join(", ")),m("p",null,(p=s==null?void 0:s.roop)==null?void 0:p.join(", ")),m("p",null,(c=s==null?void 0:s.lyut)==null?void 0:c.join(", ")),m("p",null,(f=s==null?void 0:s.kta)==null?void 0:f.join(", ")),m("p",null,(u=s==null?void 0:s.mv)==null?void 0:u.join(", ")))},Ht=s=>{var p,c,f,u,o;let r=(c=(p=it[0]())==null?void 0:p.trim())==null?void 0:c.toLowerCase(),n=(f=s==null?void 0:s.ev)==null?void 0:f.includes(r);if(!n){for(let h=0;h<((u=s==null?void 0:s.sv)==null?void 0:u.length);h++)if((s==null?void 0:s.sv[h].indexOf(r))>-1){n=!0;break}}if(!n){for(let h=0;h<((o=s==null?void 0:s.mv)==null?void 0:o.length);h++)if((s==null?void 0:s.mv[h].indexOf(r))>-1){n=!0;break}}return n},Kt=()=>({row:s})=>{var r,n;return m("li",null,m("h3",null,s==null?void 0:s.ew),m("p",null,(r=s==null?void 0:s.sw)==null?void 0:r.join(", ")),m("p",null,(n=s==null?void 0:s.mw)==null?void 0:n.join(", ")))},zt=s=>{var p,c,f,u,o;let r=(c=(p=it[0]())==null?void 0:p.trim())==null?void 0:c.toLowerCase(),n=(f=s==null?void 0:s.ew)==null?void 0:f.includes(r);if(!n){for(let h=0;h<((u=s==null?void 0:s.sw)==null?void 0:u.length);h++)if((s==null?void 0:s.sw[h].indexOf(r))>-1){n=!0;break}}if(!n){for(let h=0;h<((o=s==null?void 0:s.mw)==null?void 0:o.length);h++)if((s==null?void 0:s.mw[h].indexOf(r))>-1){n=!0;break}}return n},k={[et.VERBS]:{title:"Verbs",dkey:"verbs",jsonFile:Q.VITE_VERBS,filterFunc:Ht,RowComponent:Ft},[et.WORDS]:{title:"Words",dkey:"words",jsonFile:Q.VITE_WORDS,filterFunc:zt,setDatacb:s=>s["Everyday words"].concat(s.home).concat(s["eng other"]),RowComponent:Kt,asList:!0}},mt=(s=!1)=>{const{updateData:r,get:n}=Wt(),p=[],c=[];return Object.keys(k).forEach(f=>{const u=n(`${k[f].dkey}`);if(!u||s)p.push(Gt(k[f].jsonFile)),c.push(k[f].dkey);else{const{ts:o,d:h}=u;p.push(Promise.resolve({ts:o,d:h||[]}))}}),Promise.all(p).then(f=>{Object.keys(k).forEach(u=>{var h,O,R,U;let o=((h=f[u])==null?void 0:h.d)||f[u];o=k[u].setDatacb&&!(o!=null&&o.length)?k[u].setDatacb(o):o,(O=o==null?void 0:o.shift)==null||O.call(o),(R=o==null?void 0:o.shift)==null||R.call(o),c.includes(k[u].dkey)&&requestIdleCallback(()=>{r(`${k[u].dkey}`,o),c.splice(c.indexOf(k[u].dkey),1)}),K[`${k[u].dkey}`].d=o,K[`${k[u].dkey}`].ts=((U=f[u])==null?void 0:U.ts)||0})})},Gt=s=>fetch(`${Q.VITE_BASEPATH}${s}`).then(r=>r.json());function Jt({dkey:s}){let r=null,n=()=>[];const p=-1,[c,f]=tt(K[`${s}`].d.slice(0,p));return({prop:u,search:o,dkey:h})=>{const{title:O,filterFunc:R,RowComponent:U,asList:b}=k[u];r!==o&&(r=o,r?n=()=>K[`${h}`].d.filter(R):n=()=>[]),console.log("exec",gt.get());const S=(n().length>0?n():c()).map(T=>m(U,{row:T}));return m("div",null,m("h2",{className:"title"},O),n().length===0&&o?m("p",{className:"info"},'No results for your search: "',o,'"'):null,n().length>0&&o?m("p",{className:"info"},"Matching results: ",n().length):null,b?m("ul",{className:"list"},S):m("div",{className:"search"},S))}}function Yt(){const[s,r]=tt(0),[n,p]=tt(!1),[c,f]=it=tt("");return vt(()=>{console.log("mount for Sans"),alert("https://www.youtube.com/watch?v=b6iVByCOx8A"),mt().then(()=>{p(!0),fetch(`${Q.VITE_BASEPATH}${Q.VITE_TS}?ts=${Date.now()}`).then(u=>u.json()).then(u=>{let o=0;Object.keys(K).forEach(h=>{K[h].ts<u[h]&&(console.log("update for",h),o+=1)}),o>0&&mt(!0)})}).catch(u=>{console.log(u),n(!0)})}),Bt(()=>{console.log("unmount for Sans"),It(()=>f(""))}),u=>m("div",{className:"sans"},m("header",{className:"sticky-header"},m("h1",{className:"main-head"},"संस्कृतकोष:"),m("div",{style:{textAlign:"center"}},m("input",{value:c(),type:"text",placeholder:"Search in English or Sanskrit...",onInput:o=>{f(o.target.value)}})),m("p",{className:"tabs"},m("button",{onClick:()=>r(et.VERBS)},"Verbs"),m("button",{onClick:()=>r(et.WORDS)},"Words"))),n()?m("div",{className:"search-wrapper"},m(Qt,{contextdf:gt.get()},m(Jt,{key:k[s()].dkey,dkey:k[s()].dkey,prop:s(),search:c()}))):m("p",null,"Loading..."))}const Qt=()=>({children:s})=>m("div",null,s),Xt=document.getElementById("root-vdom");xt(_t);Vt(Xt,()=>m(Yt,null));
