var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let p;function m(t){p=t}function $(){if(!p)throw new Error("Function called outside component initialization");return p}const g=[],b=[],w=[],k=[],y=Promise.resolve();let x=!1;function _(t){w.push(t)}const v=new Set;let C=0;function E(){const t=p;do{for(;C<g.length;){const t=g[C];C++,m(t),N(t.$$)}for(m(null),g.length=0,C=0;b.length;)b.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];v.has(n)||(v.add(n),n())}w.length=0}while(g.length);for(;k.length;)k.pop()();x=!1,v.clear(),m(t)}function N(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const j=new Set;let M;function T(){M={r:0,c:[],p:M}}function A(){M.r||r(M.c),M=M.p}function X(t,n){t&&t.i&&(j.delete(t),t.i(n))}function O(t,n,e,r){if(t&&t.o){if(j.has(t))return;j.add(t),M.c.push((()=>{j.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function S(t,n){const e=n.token={};function r(t,r,o,c){if(n.token!==e)return;n.resolved=c;let u=n.ctx;void 0!==o&&(u=u.slice(),u[o]=c);const i=t&&(n.current=t)(u);let a=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==r&&t&&(T(),O(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),A())})):n.block.d(1),i.c(),X(i,1),i.m(n.mount(),n.anchor),a=!0),n.block=i,n.blocks&&(n.blocks[r]=i),a&&E()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const e=$();if(t.then((t=>{m(e),r(n.then,1,n.value,t),m(null)}),(t=>{if(m(e),r(n.catch,2,n.error,t),m(null),!n.hasCatch)throw t})),n.current!==n.pending)return r(n.pending,0),!0}else{if(n.current!==n.then)return r(n.then,1,n.value,t),!0;n.resolved=t}var o}function z(t){t&&t.c()}function H(t,e,c,u){const{fragment:i,on_mount:a,on_destroy:s,after_update:l}=t.$$;i&&i.m(e,c),u||_((()=>{const e=a.map(n).filter(o);s?s.push(...e):r(e),t.$$.on_mount=[]})),l.forEach(_)}function L(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function q(t,n){-1===t.$$.dirty[0]&&(g.push(t),x||(x=!0,y.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function B(n,o,c,u,i,s,l,f=[-1]){const d=p;m(n);const h=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};l&&l(h.root);let $=!1;if(h.ctx=c?c(n,o.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return h.ctx&&i(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),$&&q(n,t)),e})):[],h.update(),$=!0,r(h.before_update),h.fragment=!!u&&u(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(a)}else h.fragment&&h.fragment.c();o.intro&&X(n.$$.fragment),H(n,o.target,o.anchor,o.customElement),E()}m(d)}class F{$destroy(){L(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function P(n){let e,r,o,c,f,p=n[1].slice(0,n[2])+"",m=n[1].slice(n[2]+1,n[1].length)+"";return{c(){e=s("h1"),r=l(p),o=s("span"),c=l(n[0]),f=l(m),d(o,"class","svelte-eonjfn")},m(t,n){i(t,e,n),u(e,r),u(e,o),u(o,c),u(e,f)},p(t,[n]){6&n&&p!==(p=t[1].slice(0,t[2])+"")&&h(r,p),1&n&&h(c,t[0]),6&n&&m!==(m=t[1].slice(t[2]+1,t[1].length)+"")&&h(f,m)},i:t,o:t,d(t){t&&a(e)}}}function D(t,n,e){let{char:r}=n,{word:o}=n,{index:c}=n;return t.$$set=t=>{"char"in t&&e(0,r=t.char),"word"in t&&e(1,o=t.word),"index"in t&&e(2,c=t.index)},[r,o,c]}class G extends F{constructor(t){super(),B(this,t,D,P,c,{char:0,word:1,index:2})}}function I(n){let e,r,o,c,p,m,$,g,b,w,k,y,x,_;return{c(){e=s("h1"),r=l(n[0]),o=l(" وشە لە خولەکێکدا دەنووسیت بە وردیی "),c=l(n[1]),p=l("%."),m=f(),$=s("div"),g=s("a"),b=s("i"),k=f(),y=s("a"),y.innerHTML='<i class="fa fa-star"></i>',x=f(),_=s("a"),_.innerHTML='<i class="fa fa-code-fork"></i>',d(b,"class","fab fa-twitter"),d(g,"href",w="https://twitter.com/share?text="+n[0]+" وشە لە خولەکێکدا بە تەختەکلیلی کوردی دەنووسم. بزانە تۆ چەند دەنووسیت. #XêraNûsîn"),d(g,"target","_blank"),d(y,"href","https://github.com/roj1512/XeraNusin/stargazers"),d(y,"target","_blank"),d(_,"href","https://github.com/roj1512/XeraNusin/fork"),d(_,"target","_blank"),d($,"class","svelte-oo6igf")},m(t,n){i(t,e,n),u(e,r),u(e,o),u(e,c),u(e,p),i(t,m,n),i(t,$,n),u($,g),u(g,b),u($,k),u($,y),u($,x),u($,_)},p(t,[n]){1&n&&h(r,t[0]),2&n&&h(c,t[1]),1&n&&w!==(w="https://twitter.com/share?text="+t[0]+" وشە لە خولەکێکدا بە تەختەکلیلی کوردی دەنووسم. بزانە تۆ چەند دەنووسیت. #XêraNûsîn")&&d(g,"href",w)},i:t,o:t,d(t){t&&a(e),t&&a(m),t&&a($)}}}function J(t,n,e){let{wpm:r}=n,{accuracy:o}=n;return t.$$set=t=>{"wpm"in t&&e(0,r=t.wpm),"accuracy"in t&&e(1,o=t.accuracy)},[r,o]}class K extends F{constructor(t){super(),B(this,t,J,I,c,{wpm:0,accuracy:1})}}function Q(t){let n,e;return n=new G({props:{index:t[0],char:t[3],word:t[1]}}),{c(){z(n.$$.fragment)},m(t,r){H(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.index=t[0]),8&e&&(r.char=t[3]),2&e&&(r.word=t[1]),n.$set(r)},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){O(n.$$.fragment,t),e=!1},d(t){L(n,t)}}}function R(t){let n,e;return n=new K({props:{wpm:t[5],accuracy:t[4]}}),{c(){z(n.$$.fragment)},m(t,r){H(n,t,r),e=!0},p(t,e){const r={};32&e&&(r.wpm=t[5]),16&e&&(r.accuracy=t[4]),n.$set(r)},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){O(n.$$.fragment,t),e=!1},d(t){L(n,t)}}}function U(t){let n,e,r,o;const c=[R,Q],u=[];function s(t,n){return t[2]?0:1}return n=s(t),e=u[n]=c[n](t),{c(){e.c(),r=l("")},m(t,e){u[n].m(t,e),i(t,r,e),o=!0},p(t,[o]){let i=n;n=s(t),n===i?u[n].p(t,o):(T(),O(u[i],1,1,(()=>{u[i]=null})),A(),e=u[n],e?e.p(t,o):(e=u[n]=c[n](t),e.c()),X(e,1),e.m(r.parentNode,r))},i(t){o||(X(e),o=!0)},o(t){O(e),o=!1},d(t){u[n].d(t),t&&a(r)}}}function V(t){return t=(t=(t=(t=(t=(t=(t=(t=t.replace(/‌/g,"")).replace(/ـ/g,"")).replace(/ھ/g,"ه")).replace(/ي/g,"ی")).replace(/ك/g,"ک")).replace(/ة/g,"ە")).replace(/ء/g,"ئ")).replace(/ؤ/g,"ۆ")}function W(t,n,e){let r,o,c,{words:u}=n;function i(){const t=u[Math.floor(Math.random()*u.length)];return e(6,u=u.filter((n=>n!=t))),t}let a=0,s=i(),l=!1,f=!1,d=0,h=0;return window.onkeypress=function(t){if(f)return;l||(setTimeout((()=>e(2,f=!0)),6e4),l=!0);const n=String.fromCharCode(t.charCode);var o;o=r,V(n)==V(o)?s.length==a+1?(e(0,a=0),e(1,s=i())):(e(0,a++,a),e(7,d++,d)):e(8,h++,h)},t.$$set=t=>{"words"in t&&e(6,u=t.words)},t.$$.update=()=>{3&t.$$.dirty&&e(3,r=s[a]),128&t.$$.dirty&&e(5,o=Math.round(d/5)),384&t.$$.dirty&&e(4,c=Math.round((d-h)/d*100))},[a,s,f,r,c,o,u,d,h]}class Y extends F{constructor(t){super(),B(this,t,W,U,c,{words:6})}}function Z(n){let e,r,o=n[2]+"";return{c(){e=s("p"),r=l(o)},m(t,n){i(t,e,n),u(e,r)},p:t,i:t,o:t,d(t){t&&a(e)}}}function tt(n){let e,r;return e=new Y({props:{words:n[1]}}),{c(){z(e.$$.fragment)},m(t,n){H(e,t,n),r=!0},p:t,i(t){r||(X(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){L(e,t)}}}function nt(n){let e;return{c(){e=s("h1"),e.textContent="تکایە چاوەڕوان بە..."},m(t,n){i(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e)}}}function et(t){let n,e,r={ctx:t,current:null,token:null,hasCatch:!0,pending:nt,then:tt,catch:Z,value:1,error:2,blocks:[,,,]};return S(t[0],r),{c(){n=s("main"),r.block.c()},m(t,o){i(t,n,o),r.block.m(n,r.anchor=null),r.mount=()=>n,r.anchor=null,e=!0},p(n,[e]){!function(t,n,e){const r=n.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,e)}(r,t=n,e)},i(t){e||(X(r.block),e=!0)},o(t){for(let t=0;t<3;t+=1){O(r.blocks[t])}e=!1},d(t){t&&a(n),r.block.d(),r.token=null,r=null}}}function rt(t){return[(async()=>{const t=await fetch("https://raw.githubusercontent.com/layik/kurdi/master/corpus/kurdi_words.txt");return(await t.text()).split("\n").map((t=>t)).filter((t=>!t.includes(" "))).filter((t=>t.length>=3&&t.length<=10))})()]}return new class extends F{constructor(t){super(),B(this,t,rt,et,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map