var x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pt(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var P={exports:{}},W={exports:{}};/*!
  * Bootstrap data.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Z;function dt(){return Z||(Z=1,function(E,w){(function(o,c){E.exports=c()})(x,function(){const o=new Map;return{set(f,n,e){o.has(f)||o.set(f,new Map);const r=o.get(f);if(!r.has(n)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(n,e)},get(f,n){return o.has(f)&&o.get(f).get(n)||null},remove(f,n){if(!o.has(f))return;const e=o.get(f);e.delete(n),e.size===0&&o.delete(f)}}})}(W)),W.exports}var Y={exports:{}},F={exports:{}};/*!
  * Bootstrap index.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var tt;function I(){return tt||(tt=1,function(E,w){(function(o,c){c(w)})(x,function(o){const n="transitionend",e=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(a,s)=>`#${CSS.escape(s)}`)),t),r=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),g=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},l=t=>{if(!t)return 0;let{transitionDuration:a,transitionDelay:s}=window.getComputedStyle(t);const A=Number.parseFloat(a),v=Number.parseFloat(s);return!A&&!v?0:(a=a.split(",")[0],s=s.split(",")[0],(Number.parseFloat(a)+Number.parseFloat(s))*1e3)},_=t=>{t.dispatchEvent(new Event(n))},h=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),b=t=>h(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(e(t)):null,d=t=>{if(!h(t)||t.getClientRects().length===0)return!1;const a=getComputedStyle(t).getPropertyValue("visibility")==="visible",s=t.closest("details:not([open])");if(!s)return a;if(s!==t){const A=t.closest("summary");if(A&&A.parentNode!==s||A===null)return!1}return a},N=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",C=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const a=t.getRootNode();return a instanceof ShadowRoot?a:null}return t instanceof ShadowRoot?t:t.parentNode?C(t.parentNode):null},S=()=>{},y=t=>{t.offsetHeight},M=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,O=[],L=t=>{document.readyState==="loading"?(O.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of O)a()}),O.push(t)):t()},$=()=>document.documentElement.dir==="rtl",u=t=>{L(()=>{const a=M();if(a){const s=t.NAME,A=a.fn[s];a.fn[s]=t.jQueryInterface,a.fn[s].Constructor=t,a.fn[s].noConflict=()=>(a.fn[s]=A,t.jQueryInterface)}})},i=(t,a=[],s=t)=>typeof t=="function"?t(...a):s,p=(t,a,s=!0)=>{if(!s){i(t);return}const A=5,v=l(a)+A;let D=!1;const T=({target:k})=>{k===a&&(D=!0,a.removeEventListener(n,T),i(t))};a.addEventListener(n,T),setTimeout(()=>{D||_(a)},v)},m=(t,a,s,A)=>{const v=t.length;let D=t.indexOf(a);return D===-1?!s&&A?t[v-1]:t[0]:(D+=s?1:-1,A&&(D=(D+v)%v),t[Math.max(0,Math.min(D,v-1))])};o.defineJQueryPlugin=u,o.execute=i,o.executeAfterTransition=p,o.findShadowRoot=C,o.getElement=b,o.getNextActiveElement=m,o.getTransitionDurationFromElement=l,o.getUID=g,o.getjQuery=M,o.isDisabled=N,o.isElement=h,o.isRTL=$,o.isVisible=d,o.noop=S,o.onDOMContentLoaded=L,o.parseSelector=e,o.reflow=y,o.toType=r,o.triggerTransitionEnd=_,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})})}(F,F.exports)),F.exports}/*!
  * Bootstrap event-handler.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var et;function K(){return et||(et=1,function(E,w){(function(o,c){E.exports=c(I())})(x,function(o){const c=/[^.]*(?=\..*)\.|.*/,f=/\..*/,n=/::\d+$/,e={};let r=1;const g={mouseenter:"mouseover",mouseleave:"mouseout"},l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function _(u,i){return i&&`${i}::${r++}`||u.uidEvent||r++}function h(u){const i=_(u);return u.uidEvent=i,e[i]=e[i]||{},e[i]}function b(u,i){return function p(m){return $(m,{delegateTarget:u}),p.oneOff&&L.off(u,m.type,i),i.apply(u,[m])}}function d(u,i,p){return function m(t){const a=u.querySelectorAll(i);for(let{target:s}=t;s&&s!==this;s=s.parentNode)for(const A of a)if(A===s)return $(t,{delegateTarget:s}),m.oneOff&&L.off(u,t.type,i,p),p.apply(s,[t])}}function N(u,i,p=null){return Object.values(u).find(m=>m.callable===i&&m.delegationSelector===p)}function C(u,i,p){const m=typeof i=="string",t=m?p:i||p;let a=O(u);return l.has(a)||(a=u),[m,t,a]}function S(u,i,p,m,t){if(typeof i!="string"||!u)return;let[a,s,A]=C(i,p,m);i in g&&(s=(ft=>function(q){if(!q.relatedTarget||q.relatedTarget!==q.delegateTarget&&!q.delegateTarget.contains(q.relatedTarget))return ft.call(this,q)})(s));const v=h(u),D=v[A]||(v[A]={}),T=N(D,s,a?p:null);if(T){T.oneOff=T.oneOff&&t;return}const k=_(s,i.replace(c,"")),R=a?d(u,p,s):b(u,s);R.delegationSelector=a?p:null,R.callable=s,R.oneOff=t,R.uidEvent=k,D[k]=R,u.addEventListener(A,R,a)}function y(u,i,p,m,t){const a=N(i[p],m,t);a&&(u.removeEventListener(p,a,!!t),delete i[p][a.uidEvent])}function M(u,i,p,m){const t=i[p]||{};for(const[a,s]of Object.entries(t))a.includes(m)&&y(u,i,p,s.callable,s.delegationSelector)}function O(u){return u=u.replace(f,""),g[u]||u}const L={on(u,i,p,m){S(u,i,p,m,!1)},one(u,i,p,m){S(u,i,p,m,!0)},off(u,i,p,m){if(typeof i!="string"||!u)return;const[t,a,s]=C(i,p,m),A=s!==i,v=h(u),D=v[s]||{},T=i.startsWith(".");if(typeof a<"u"){if(!Object.keys(D).length)return;y(u,v,s,a,t?p:null);return}if(T)for(const k of Object.keys(v))M(u,v,k,i.slice(1));for(const[k,R]of Object.entries(D)){const G=k.replace(n,"");(!A||i.includes(G))&&y(u,v,s,R.callable,R.delegationSelector)}},trigger(u,i,p){if(typeof i!="string"||!u)return null;const m=o.getjQuery(),t=O(i),a=i!==t;let s=null,A=!0,v=!0,D=!1;a&&m&&(s=m.Event(i,p),m(u).trigger(s),A=!s.isPropagationStopped(),v=!s.isImmediatePropagationStopped(),D=s.isDefaultPrevented());const T=$(new Event(i,{bubbles:A,cancelable:!0}),p);return D&&T.preventDefault(),v&&u.dispatchEvent(T),T.defaultPrevented&&s&&s.preventDefault(),T}};function $(u,i={}){for(const[p,m]of Object.entries(i))try{u[p]=m}catch{Object.defineProperty(u,p,{configurable:!0,get(){return m}})}return u}return L})}(Y)),Y.exports}var B={exports:{}},U={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var nt;function lt(){return nt||(nt=1,function(E,w){(function(o,c){E.exports=c()})(x,function(){function o(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function c(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}return{setDataAttribute(n,e,r){n.setAttribute(`data-bs-${c(e)}`,r)},removeDataAttribute(n,e){n.removeAttribute(`data-bs-${c(e)}`)},getDataAttributes(n){if(!n)return{};const e={},r=Object.keys(n.dataset).filter(g=>g.startsWith("bs")&&!g.startsWith("bsConfig"));for(const g of r){let l=g.replace(/^bs/,"");l=l.charAt(0).toLowerCase()+l.slice(1,l.length),e[l]=o(n.dataset[g])}return e},getDataAttribute(n,e){return o(n.getAttribute(`data-bs-${c(e)}`))}}})}(U)),U.exports}/*!
  * Bootstrap config.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var rt;function J(){return rt||(rt=1,function(E,w){(function(o,c){E.exports=c(lt(),I())})(x,function(o,c){class f{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,r){const g=c.isElement(r)?o.getDataAttribute(r,"config"):{};return{...this.constructor.Default,...typeof g=="object"?g:{},...c.isElement(r)?o.getDataAttributes(r):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,r=this.constructor.DefaultType){for(const[g,l]of Object.entries(r)){const _=e[g],h=c.isElement(_)?"element":c.toType(_);if(!new RegExp(l).test(h))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${g}" provided type "${h}" but expected type "${l}".`)}}}return f})}(B)),B.exports}/*!
  * Bootstrap base-component.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ot;function ht(){return ot||(ot=1,function(E,w){(function(o,c){E.exports=c(dt(),K(),J(),I())})(x,function(o,c,f,n){const e="5.3.2";class r extends f{constructor(l,_){super(),l=n.getElement(l),l&&(this._element=l,this._config=this._getConfig(_),o.set(this._element,this.constructor.DATA_KEY,this))}dispose(){o.remove(this._element,this.constructor.DATA_KEY),c.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,_,h=!0){n.executeAfterTransition(l,_,h)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return o.get(n.getElement(l),this.DATA_KEY)}static getOrCreateInstance(l,_={}){return this.getInstance(l)||new this(l,typeof _=="object"?_:null)}static get VERSION(){return e}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}return r})}(P)),P.exports}var Q={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var st;function X(){return st||(st=1,function(E,w){(function(o,c){E.exports=c(I())})(x,function(o){const c=n=>{let e=n.getAttribute("data-bs-target");if(!e||e==="#"){let r=n.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),e=r&&r!=="#"?o.parseSelector(r.trim()):null}return e},f={find(n,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,n))},findOne(n,e=document.documentElement){return Element.prototype.querySelector.call(e,n)},children(n,e){return[].concat(...n.children).filter(r=>r.matches(e))},parents(n,e){const r=[];let g=n.parentNode.closest(e);for(;g;)r.push(g),g=g.parentNode.closest(e);return r},prev(n,e){let r=n.previousElementSibling;for(;r;){if(r.matches(e))return[r];r=r.previousElementSibling}return[]},next(n,e){let r=n.nextElementSibling;for(;r;){if(r.matches(e))return[r];r=r.nextElementSibling}return[]},focusableChildren(n){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(r=>`${r}:not([tabindex^="-"])`).join(",");return this.find(e,n).filter(r=>!o.isDisabled(r)&&o.isVisible(r))},getSelectorFromElement(n){const e=c(n);return e&&f.findOne(e)?e:null},getElementFromSelector(n){const e=c(n);return e?f.findOne(e):null},getMultipleElementsFromSelector(n){const e=c(n);return e?f.find(e):[]}};return f})}(Q)),Q.exports}var H={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var it;function gt(){return it||(it=1,function(E,w){(function(o,c){E.exports=c(K(),J(),I())})(x,function(o,c,f){const n="backdrop",e="fade",r="show",g=`mousedown.bs.${n}`,l={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},_={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class h extends c{constructor(d){super(),this._config=this._getConfig(d),this._isAppended=!1,this._element=null}static get Default(){return l}static get DefaultType(){return _}static get NAME(){return n}show(d){if(!this._config.isVisible){f.execute(d);return}this._append();const N=this._getElement();this._config.isAnimated&&f.reflow(N),N.classList.add(r),this._emulateAnimation(()=>{f.execute(d)})}hide(d){if(!this._config.isVisible){f.execute(d);return}this._getElement().classList.remove(r),this._emulateAnimation(()=>{this.dispose(),f.execute(d)})}dispose(){this._isAppended&&(o.off(this._element,g),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const d=document.createElement("div");d.className=this._config.className,this._config.isAnimated&&d.classList.add(e),this._element=d}return this._element}_configAfterMerge(d){return d.rootElement=f.getElement(d.rootElement),d}_append(){if(this._isAppended)return;const d=this._getElement();this._config.rootElement.append(d),o.on(d,g,()=>{f.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(d){f.executeAfterTransition(d,this._getElement(),this._config.isAnimated)}}return h})}(H)),H.exports}var V={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var at;function mt(){return at||(at=1,function(E,w){(function(o,c){c(w,K(),X(),I())})(x,function(o,c,f,n){const e=(r,g="hide")=>{const l=`click.dismiss${r.EVENT_KEY}`,_=r.NAME;c.on(document,l,`[data-bs-dismiss="${_}"]`,function(h){if(["A","AREA"].includes(this.tagName)&&h.preventDefault(),n.isDisabled(this))return;const b=f.getElementFromSelector(this)||this.closest(`.${_}`);r.getOrCreateInstance(b)[g]()})};o.enableDismissTrigger=e,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})})}(V,V.exports)),V.exports}var j={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ut;function bt(){return ut||(ut=1,function(E,w){(function(o,c){E.exports=c(K(),X(),J())})(x,function(o,c,f){const n="focustrap",r=".bs.focustrap",g=`focusin${r}`,l=`keydown.tab${r}`,_="Tab",h="forward",b="backward",d={autofocus:!0,trapElement:null},N={autofocus:"boolean",trapElement:"element"};class C extends f{constructor(y){super(),this._config=this._getConfig(y),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return d}static get DefaultType(){return N}static get NAME(){return n}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),o.off(document,r),o.on(document,g,y=>this._handleFocusin(y)),o.on(document,l,y=>this._handleKeydown(y)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,o.off(document,r))}_handleFocusin(y){const{trapElement:M}=this._config;if(y.target===document||y.target===M||M.contains(y.target))return;const O=c.focusableChildren(M);O.length===0?M.focus():this._lastTabNavDirection===b?O[O.length-1].focus():O[0].focus()}_handleKeydown(y){y.key===_&&(this._lastTabNavDirection=y.shiftKey?b:h)}}return C})}(j)),j.exports}var z={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ct;function Et(){return ct||(ct=1,function(E,w){(function(o,c){E.exports=c(lt(),X(),I())})(x,function(o,c,f){const n=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",e=".sticky-top",r="padding-right",g="margin-right";class l{constructor(){this._element=document.body}getWidth(){const h=document.documentElement.clientWidth;return Math.abs(window.innerWidth-h)}hide(){const h=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,r,b=>b+h),this._setElementAttributes(n,r,b=>b+h),this._setElementAttributes(e,g,b=>b-h)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,r),this._resetElementAttributes(n,r),this._resetElementAttributes(e,g)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(h,b,d){const N=this.getWidth(),C=S=>{if(S!==this._element&&window.innerWidth>S.clientWidth+N)return;this._saveInitialAttribute(S,b);const y=window.getComputedStyle(S).getPropertyValue(b);S.style.setProperty(b,`${d(Number.parseFloat(y))}px`)};this._applyManipulationCallback(h,C)}_saveInitialAttribute(h,b){const d=h.style.getPropertyValue(b);d&&o.setDataAttribute(h,b,d)}_resetElementAttributes(h,b){const d=N=>{const C=o.getDataAttribute(N,b);if(C===null){N.style.removeProperty(b);return}o.removeDataAttribute(N,b),N.style.setProperty(b,C)};this._applyManipulationCallback(h,d)}_applyManipulationCallback(h,b){if(f.isElement(h)){b(h);return}for(const d of c.find(h,this._element))b(d)}}return l})}(z)),z.exports}export{K as a,X as b,I as c,x as d,gt as e,mt as f,pt as g,bt as h,Et as i,J as j,lt as k,ht as r};
