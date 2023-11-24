import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{o as u,c as h,b as t,t as f,l as P,n as W,g as E,F as S,r as D,k as K,p as At,q as Nt,h as L,m as B,a as J,u as kt,i as Lt,e as q}from"./index-890cc92c.js";import{M as Pt}from"./modal-9ef85add.js";import{a as st,j as Ot,c as it,d as ot,r as Mt,k as Dt,b as Rt,g as Vt}from"./scrollbar-4bb2394e.js";import{P as jt}from"./PriceCard-3f1e2a5b.js";import{p as Z}from"./productStore-612dc705.js";import{c as qt}from"./cartStore-c8295fc0.js";import{s as tt}from"./statusStore-d38cbfda.js";import{g as p}from"./index-4db78ffb.js";import{S as Xt,a as Ut}from"./index-fe1cb509.js";import"./Spinner-9e9451cb.js";const Bt={name:"Header",data(){return{title:"你是不是也有夢想",subtitle:"想成為一位芳療師",content:`你是否渴望在繁忙的現代生活中找到一份舒緩和平靜？
我們的精油課程將帶你進入精油的奇妙世界，
讓你從中獲得健康、平衡和幸福。`}}},Yt={id:"home",class:"header header-bg px-4 py-5 d-flex justify-content-center align-items-center"},Kt={class:"text-center text-white"},Wt={class:"fs-5"},Ht={class:"fw-bold"},zt={class:"line-break"};function Ft(c,m,i,n,r,l){return u(),h("section",Yt,[t("div",Kt,[t("p",Wt,f(r.title),1),t("h1",Ht,f(r.subtitle),1),t("p",zt,f(r.content),1)])])}const Gt=T(Bt,[["render",Ft]]),nt={methods:{show(){this.modal.show()},hide(){this.modal.hide()}},mounted(){this.modal=new Pt(this.$refs.modal)}},Qt={data(){return{modal:""}},mixins:[nt]},Jt={class:"modal fade",id:"successModal",tabindex:"-1","aria-labelledby":"successModalLabel","aria-hidden":"true",ref:"modal"},Zt=P('<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h2 class="modal-title fs-5" id="exampleModalLabel">親愛的客戶<i class="bi bi-heart-fill text-danger ms-2"></i></h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body text-start"> 我們非常感謝您撥冗給予寶貴的回饋。您的意見對於我們不僅僅是一份寶貴的資源，更是我們不斷進步的動力。如果您還有任何想法、建議或疑問，請隨時與我們聯繫。我們非常期待能夠持續為您提供優質的服務。 </div><div class="modal-footer"><button type="button" class="btn btn-tertiarylight" data-bs-dismiss="modal"><p class="mb-0 text-white">關閉</p></button></div></div></div>',1),te=[Zt];function ee(c,m,i,n,r,l){return u(),h("div",Jt,te,512)}const se=T(Qt,[["render",ee]]),ie={data(){return{modal:""}},mixins:[nt]},oe={class:"modal fade",id:"loginModal",tabindex:"-1","aria-labelledby":"loginModalLabel","aria-hidden":"true",ref:"modal"},ne=P('<div class="modal-dialog modal-dialog-centered modal-sm"><div class="modal-content"><div class="modal-body text-center pb-0"><i class="bi bi-box-arrow-in-right fs-1 d-block mb-2"></i> 請先登入會員 </div><div class="modal-footer border-0 justify-content-center"><button type="button" class="login btn btn-success text-white" data-bs-dismiss="modal">登入會員</button></div></div></div>',1),re=[ne];function ce(c,m,i,n,r,l){return u(),h("div",oe,re,512)}const ae=T(ie,[["render",ce]]),le={props:{iconClass:String,title:String,description:String}},de={class:"col"},ue={class:"card card-float border-0 shadow h-100"},_e={class:"card-body text-center py-4 h-100"},he={class:"h4"},pe={class:"text-quaternary card-text lh-lg"};function me(c,m,i,n,r,l){return u(),h("li",de,[t("div",ue,[t("div",_e,[t("i",{class:W(i.iconClass)},null,2),t("h3",he,f(i.title),1),t("p",pe,f(i.description),1)])])])}const be=T(le,[["render",me]]),ge="/aromamystery-vue/assets/info-14b9b888.jpg";const fe={components:{InfoCard:be},data(){return{infoTitle:"讓我們幫你節省寶貴的時間",infoContent:`我們的專家團隊擁有多年的精油研究和實踐經驗，<br class="d-none d-sm-block" />
              將帶領你探索精油的各個層面。<br class="d-none d-sm-block" />
              課程提供高質量的學習資料、影片示範和互動環節，<br class="d-none d-sm-block" />
              確保你能夠輕鬆學習並掌握知識。<br class="d-none d-sm-block" />
              你可以隨時隨地在線學習，無需擔心時間和地點的限制，<br class="d-none d-sm-block" />
              讓學習融入你的生活。`,troubleTitle:"你有這些煩惱嗎？",items:[{iconClass:"bi bi-journal-x fs-s-48 text-primary",title:"缺乏精油知識",description:"網路上有很多精油資訊，不知道從何開始學習"},{iconClass:"bi bi-eyedropper fs-s-48 text-primary",title:"不會調配精油",description:"初學者不熟悉精油的安全使用方法，可能會擔心使用不當導致不良反應。"},{iconClass:"bi bi-shop fs-s-48 text-primary",title:"不會挑選精油",description:"精油種類眾多，初學者不知道該選擇哪些精油，以及如何區分它們的用途和特性"},{iconClass:"bi bi-emoji-dizzy fs-s-48 text-primary",title:"不會分辨真假",description:"市場上有許多假冒產品，無法辨別出高品質的精油"}]}}},ve=c=>(At("data-v-649336cb"),c=c(),Nt(),c),ye={id:"info"},Ee={class:"container py-5"},Te={class:"row flex-row-reverse"},xe={class:"col-lg-6 d-flex align-items-center justify-content-center"},$e={class:"fw-bold"},Ce=["innerHTML"],Ie=ve(()=>t("div",{class:"col-lg-6 d-flex align-items-center justify-content-center"},[t("img",{src:ge,alt:"info-picture",class:"w-100 w-lg-75"})],-1)),we={class:"py-5 trouble-bg",id:"trouble"},Se={class:"container"},Ae={class:"text-center mb-4"},Ne={class:"row row-cols-1 row-cols-lg-4 g-3 g-lg-4 list-unstyled"};function ke(c,m,i,n,r,l){const a=E("info-card");return u(),h("section",ye,[t("div",Ee,[t("div",Te,[t("div",xe,[t("div",null,[t("h2",$e,f(r.infoTitle),1),t("p",{class:"text-primary lh-lg",innerHTML:r.infoContent},null,8,Ce)])]),Ie])]),t("div",we,[t("div",Se,[t("h2",Ae,f(r.troubleTitle),1),t("ul",Ne,[(u(!0),h(S,null,D(r.items,(b,v)=>(u(),K(a,{key:v,"icon-class":b.iconClass,title:b.title,description:b.description},null,8,["icon-class","title","description"]))),128))])])])])}const Le=T(fe,[["render",ke],["__scopeId","data-v-649336cb"]]);var rt={exports:{}},Y={exports:{}};/*!
  * Bootstrap swipe.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var et;function Pe(){return et||(et=1,function(c,m){(function(i,n){c.exports=n(st(),Ot(),it())})(ot,function(i,n,r){const l="swipe",a=".bs.swipe",b=`touchstart${a}`,v=`touchmove${a}`,R=`touchend${a}`,g=`pointerdown${a}`,A=`pointerup${a}`,O="touch",_="pen",M="pointer-event",I=40,x={endCallback:null,leftCallback:null,rightCallback:null},$={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class C extends n{constructor(s,N){super(),this._element=s,!(!s||!C.isSupported())&&(this._config=this._getConfig(N),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return x}static get DefaultType(){return $}static get NAME(){return l}dispose(){i.off(this._element,a)}_start(s){if(!this._supportPointerEvents){this._deltaX=s.touches[0].clientX;return}this._eventIsPointerPenTouch(s)&&(this._deltaX=s.clientX)}_end(s){this._eventIsPointerPenTouch(s)&&(this._deltaX=s.clientX-this._deltaX),this._handleSwipe(),r.execute(this._config.endCallback)}_move(s){this._deltaX=s.touches&&s.touches.length>1?0:s.touches[0].clientX-this._deltaX}_handleSwipe(){const s=Math.abs(this._deltaX);if(s<=I)return;const N=s/this._deltaX;this._deltaX=0,N&&r.execute(N>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(i.on(this._element,g,s=>this._start(s)),i.on(this._element,A,s=>this._end(s)),this._element.classList.add(M)):(i.on(this._element,b,s=>this._start(s)),i.on(this._element,v,s=>this._move(s)),i.on(this._element,R,s=>this._end(s)))}_eventIsPointerPenTouch(s){return this._supportPointerEvents&&(s.pointerType===_||s.pointerType===O)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}return C})}(Y)),Y.exports}/*!
  * Bootstrap carousel.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(c,m){(function(i,n){c.exports=n(Mt(),st(),Dt(),Rt(),it(),Pe())})(ot,function(i,n,r,l,a,b){const v="carousel",g=".bs.carousel",A=".data-api",O="ArrowLeft",_="ArrowRight",M=500,I="next",x="prev",$="left",C="right",ct=`slide${g}`,s=`slid${g}`,N=`keydown${g}`,at=`mouseenter${g}`,lt=`mouseleave${g}`,dt=`dragstart${g}`,ut=`load${g}${A}`,_t=`click${g}${A}`,H="carousel",V="active",ht="slide",pt="carousel-item-end",mt="carousel-item-start",bt="carousel-item-next",gt="carousel-item-prev",z=".active",F=".carousel-item",ft=z+F,vt=".carousel-item img",yt=".carousel-indicators",Et="[data-bs-slide], [data-bs-slide-to]",Tt='[data-bs-ride="carousel"]',xt={[O]:C,[_]:$},$t={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ct={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class k extends i{constructor(e,o){super(e,o),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=l.findOne(yt,this._element),this._addEventListeners(),this._config.ride===H&&this.cycle()}static get Default(){return $t}static get DefaultType(){return Ct}static get NAME(){return v}next(){this._slide(I)}nextWhenVisible(){!document.hidden&&a.isVisible(this._element)&&this.next()}prev(){this._slide(x)}pause(){this._isSliding&&a.triggerTransitionEnd(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){n.one(this._element,s,()=>this.cycle());return}this.cycle()}}to(e){const o=this._getItems();if(e>o.length-1||e<0)return;if(this._isSliding){n.one(this._element,s,()=>this.to(e));return}const d=this._getItemIndex(this._getActive());if(d===e)return;const w=e>d?I:x;this._slide(w,o[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&n.on(this._element,N,e=>this._keydown(e)),this._config.pause==="hover"&&(n.on(this._element,at,()=>this.pause()),n.on(this._element,lt,()=>this._maybeEnableCycle())),this._config.touch&&b.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const d of l.find(vt,this._element))n.on(d,dt,w=>w.preventDefault());const o={leftCallback:()=>this._slide(this._directionToOrder($)),rightCallback:()=>this._slide(this._directionToOrder(C)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),M+this._config.interval))}};this._swipeHelper=new b(this._element,o)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const o=xt[e.key];o&&(e.preventDefault(),this._slide(this._directionToOrder(o)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const o=l.findOne(z,this._indicatorsElement);o.classList.remove(V),o.removeAttribute("aria-current");const d=l.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);d&&(d.classList.add(V),d.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const o=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=o||this._config.defaultInterval}_slide(e,o=null){if(this._isSliding)return;const d=this._getActive(),w=e===I,y=o||a.getNextActiveElement(this._getItems(),d,w,this._config.wrap);if(y===d)return;const G=this._getItemIndex(y),Q=St=>n.trigger(this._element,St,{relatedTarget:y,direction:this._orderToDirection(e),from:this._getItemIndex(d),to:G});if(Q(ct).defaultPrevented||!d||!y)return;const It=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(G),this._activeElement=y;const j=w?mt:pt,U=w?bt:gt;y.classList.add(U),a.reflow(y),d.classList.add(j),y.classList.add(j);const wt=()=>{y.classList.remove(j,U),y.classList.add(V),d.classList.remove(V,U,j),this._isSliding=!1,Q(s)};this._queueCallback(wt,d,this._isAnimated()),It&&this.cycle()}_isAnimated(){return this._element.classList.contains(ht)}_getActive(){return l.findOne(ft,this._element)}_getItems(){return l.find(F,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return a.isRTL()?e===$?x:I:e===$?I:x}_orderToDirection(e){return a.isRTL()?e===x?$:C:e===x?C:$}static jQueryInterface(e){return this.each(function(){const o=k.getOrCreateInstance(this,e);if(typeof e=="number"){o.to(e);return}if(typeof e=="string"){if(o[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);o[e]()}})}}return n.on(document,_t,Et,function(X){const e=l.getElementFromSelector(this);if(!e||!e.classList.contains(H))return;X.preventDefault();const o=k.getOrCreateInstance(e),d=this.getAttribute("data-bs-slide-to");if(d){o.to(d),o._maybeEnableCycle();return}if(r.getDataAttribute(this,"slide")==="next"){o.next(),o._maybeEnableCycle();return}o.prev(),o._maybeEnableCycle()}),n.on(window,ut,()=>{const X=l.find(Tt);for(const e of X)k.getOrCreateInstance(e)}),a.defineJQueryPlugin(k),k})})(rt);var Oe=rt.exports;const Me=Vt(Oe),De={props:{person:{type:Object,required:!0}}},Re={class:"row align-items-center"},Ve={class:"col-lg-4 text-center mb-4 mb-lg-0"},je=["src"],qe={class:"text-muted mt-2"},Xe={class:"col-lg-8"},Ue={class:"list-unstyled text-warning mb-1 d-flex justify-content-center justify-content-lg-start"},Be=t("i",{class:"bi bi-star-fill"},null,-1),Ye=[Be],Ke={class:"text-muted mb-0 text-start"};function We(c,m,i,n,r,l){return u(),h("div",Re,[t("div",Ve,[t("img",{src:i.person.image,alt:"person-image",class:"img-fluid rounded-circle",width:"200",height:"200"},null,8,je),t("h4",qe,f(i.person.name),1)]),t("div",Xe,[t("ul",Ue,[(u(),h(S,null,D(5,a=>t("li",{key:a},Ye)),64))]),t("p",Ke,f(i.person.description),1)])])}const He=T(De,[["render",We]]),ze={components:{"share-card":He},data(){return{Carousel:null,buttons:[0,1,2,3,4],persons:[{image:"/image/person01.jpg",name:"霏婷",description:"當初，我是一位自學的芳療愛好者。透過閱讀書籍和線上資源，我努力學習了一些基本的芳療知識。然而，我一直想把這份愛好轉化為我的職業。參加了一個線上的芳療課程後，我的知識得到了更深層次的擴展，我開始理解精油背後的科學原理、安全使用的方法，以及一些專業技能。"},{image:"/image/person02.jpg",name:"婷娜",description:"曾經，我長時間深陷於壓力和焦慮的漩渦中，迫切尋找著自然的解決方法來改善我的健康。透過朋友的介紹，我發現了一個線上芳療課程，而這成為我轉變的契機。在課程中，我學到了如何運用精油來緩解壓力和焦慮，並開始在日常生活中實踐這些技巧。"},{image:"/image/person03.jpg",name:"雅露",description:"我是一位瑜伽老師，我一直在追求將瑜伽和自然療法相融合的方法。我透過這個課程將芳療元素融入我的瑜伽課堂，利用精油的香氣和療效來提升學生的瑜伽體驗。現在，我不僅在瑜伽課程中傳授這些美好的經驗，還開始在社區中提供芳療治療服務。"},{image:"/image/person04.jpg",name:"悦婷",description:"一直以來，我都是一位忙碌的家庭主婦，然而內心一直懷抱著擁有自己事業的渴望。為了實現這個夢想，我參加了線上芳療課程。過程中我學到了如何製作精油產品，並開始在社交媒體上展示我的作品。這讓我不僅受到了廣泛的討論，也成功實現了在家工作的夢想。"},{image:"/image/person05.jpg",name:"拉斯",description:"我是一位具有三年經驗的按摩師，我一直渴望擴展自己的技能，提供多樣化的治療選項。因此，我參加了線上芳療課程，學到了如何在按摩療法中巧妙運用精油，以增強療效。這項新的技能讓我的按摩服務更加多元化，也受到了客戶的喜愛。"}]}},methods:{slidePrev(){this.Carousel.prev()},slideNext(){this.Carousel.next()},slideTo(c){console.log("val:",c),console.log("this.Carousel:",this.Carousel),this.Carousel.to(c)}},mounted(){this.Carousel=new Me(this.$refs.carousel)}},Fe=t("h2",{class:"text-center mb-4"},"學員分享",-1),Ge={id:"carousel",class:"carousel slide",ref:"carousel"},Qe=P('<div class="carousel-indicators mb-0"><button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="bg-primary active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carousel" data-bs-slide-to="1" class="bg-primary" aria-label="Slide 2"></button><button type="button" data-bs-target="#carousel" data-bs-slide-to="2" class="bg-primary" aria-label="Slide 3"></button><button type="button" data-bs-target="#carousel" data-bs-slide-to="3" class="bg-primary" aria-label="Slide 4"></button><button type="button" data-bs-target="#carousel" data-bs-slide-to="4" class="bg-primary" aria-label="Slide 5"></button></div>',1),Je={class:"carousel-inner"},Ze={class:"row justify-content-center"},ts={class:"col-lg-10"},es={class:"card border-0"},ss={class:"card-body m-3"},is=P('<button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev"><span class="carousel-control-prev-icon bg-primary rounded-circle" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next"><span class="carousel-control-next-icon bg-primary rounded-circle" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2);function os(c,m,i,n,r,l){const a=E("share-card");return u(),h(S,null,[Fe,t("div",Ge,[Qe,t("div",Je,[(u(!0),h(S,null,D(r.persons,(b,v)=>(u(),h("div",{class:W(["carousel-item",{active:v===0}]),key:v},[t("div",Ze,[t("div",ts,[t("div",es,[t("div",ss,[L(a,{person:b},null,8,["person"])])])])])],2))),128))]),is],512)],64)}const ns=T(ze,[["render",os]]),rs={props:{icon:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0}}},cs={class:"col"},as={class:"card card-float border-0 shadow h-100"},ls={class:"card-body text-center py-4 h-100"},ds={class:"h4"},us={class:"text-quaternary card-text lh-lg"};function _s(c,m,i,n,r,l){return u(),h("li",cs,[t("div",as,[t("div",ls,[t("i",{class:W(["fs-s-48 text-primary",i.icon])},null,2),t("h3",ds,f(i.title),1),t("p",us,f(i.description),1)])])])}const hs=T(rs,[["render",_s]]),ps="/aromamystery-vue/assets/info-8a6d5d6f.png",ms="/aromamystery-vue/assets/course-47c572cf.png";p.registerPlugin(Xt);const bs={data(){return{heroBackground:'linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2)), url("/image/hero03.jpg")',troubles:[{id:1,icon:"bi bi-journal-x",title:"缺乏精油知識",description:"網路上有很多精油資訊，不知道從何開始學習"},{id:2,icon:"bi bi-eyedropper",title:"不會調配精油",description:"初學者不熟悉精油的安全使用方法，可能會擔心使用不當導致不良反應。"},{id:3,icon:"bi bi-shop",title:"不會挑選精油",description:"精油種類眾多，初學者不知道該選擇哪些精油，以及如何區分它們的用途和特性"},{id:4,icon:"bi bi-emoji-dizzy",title:"不會分辨真假",description:"市場上有許多假冒產品，無法辨別出高品質的精油"}],initialProducts:[{id:"1",title:"Product 1",content:"Product 1 description",imageUrl:"",price:0,origin_price:0},{id:"2",title:"Product 2",content:"Product 2 description",imageUrl:"",price:0,origin_price:0},{id:"3",title:"Product 3",content:"Product 3 description",imageUrl:"",price:0,origin_price:0}]}},watch:{sortProducts(){const c=this.sortProducts.filter(m=>m.title.includes("初階"));this.initialProducts=c}},computed:{...B(Z,["sortProducts"]),...B(qt,["cart"]),...B(tt,["isLoading"])},methods:{...J(Z,["getAllProducts"]),...J(tt,["resetMessage"])},created(){this.getAllProducts()},mounted(){new Ut(".hero-primary"),p.set(".hero-primary",{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}),p.set(".char",{y:100}),p.to(".char",{y:0,stagger:.1,delay:.2,duration:.5}),p.set("#info",{opacity:0,y:100}),p.to("#info",{y:0,opacity:1,scrollTrigger:{trigger:"#info",start:"top 60%",end:"top 20%",scrub:!0,once:!0}}),p.set(["#trouble h2","#trouble .col"],{opacity:0,x:100}),p.to(["#trouble h2","#trouble .col"],{x:0,opacity:1,stagger:.3,scrollTrigger:{trigger:"#trouble",start:"top 60%",end:"top 20%",scrub:!0,once:!0}}),p.set("#course",{opacity:0,y:100}),p.to("#course",{y:0,opacity:1,scrollTrigger:{trigger:"#course",start:"top 60%",end:"top 20%",scrub:!0,once:!0}}),p.set("#testimonial",{opacity:0,y:100}),p.to("#testimonial",{y:0,opacity:1,scrollTrigger:{trigger:"#testimonial",start:"top 60%",end:"top 20%",scrub:!0,once:!0}}),p.set(["#popularCourse h2","#popularCourse .col-md-6"],{opacity:0,x:100}),p.to(["#popularCourse h2","#popularCourse .col-md-6"],{x:0,opacity:1,stagger:.3,scrollTrigger:{trigger:"#popularCourse",start:"top 60%",end:"top 20%",scrub:!0,once:!0}})},beforeUnmount(){this.resetMessage()},components:{Header:Gt,SuccessModal:se,LoginModal:ae,Info:Le,"trouble-card":hs,Testimonial:ns,"price-card":jt}},gs={class:"text-center text-white"},fs=t("div",{class:"hero-text-box"},[t("p",{class:"fs-5"},"你是不是也有夢想"),t("h1",{class:"fw-bold hero-primary"},"想成為一位芳療師"),t("p",null,[q(" 你是否渴望在繁忙的現代生活中找到一份舒緩和平靜？"),t("br"),q(" 我們的精油課程將帶你進入精油的奇妙世界，"),t("br"),q(" 讓你從中獲得健康、平衡和幸福。 ")])],-1),vs=t("i",{class:"bi bi-arrow-right"},null,-1),ys=P('<section id="info"><div class="container py-5"><div class="row flex-row-reverse"><div class="col-lg-6 d-flex align-items-center justify-content-center"><div><h2 class="fw-bold">讓我們幫你節省寶貴的時間</h2><p class="text-primary lh-lg"> 我們的專家團隊擁有多年的精油研究和實踐經驗，<br class="d-none d-sm-block"> 將帶領你探索精油的各個層面。<br class="d-none d-sm-block"> 課程提供高質量的學習資料、影片示範和互動環節，<br class="d-none d-sm-block"> 確保你能夠輕鬆學習並掌握知識。<br class="d-none d-sm-block"> 你可以隨時隨地在線學習，無需擔心時間和地點的限制，<br class="d-none d-sm-block"> 讓學習融入你的生活。 </p></div></div><div class="col-lg-6 d-flex align-items-center justify-content-center"><img src="'+ps+'" alt="info-picture" class="w-100 w-lg-75"></div></div></div></section>',1),Es={id:"trouble"},Ts={class:"container py-5"},xs=t("h2",{class:"text-center mb-4"},"你有這些煩惱嗎？",-1),$s={class:"row row-cols-1 row-cols-lg-4 g-3 g-lg-4 list-unstyled"},Cs=P('<section id="course"><div class="container py-5"><h2 class="text-center mb-4">我們的課程提供</h2><div class="row flex-row-reverse align-items-center"><div class="col-lg-6"><h3 class="h4"><i class="bi bi-check-circle-fill checkIcon me-2"></i>全面的精油基礎知識</h3><p class="text-quaternary ms-6">從精油的起源、提取方法到各種精油的特性，讓您建立堅實的基礎。我們還會深入瞭解每種精油的化學成分，以及這些成分如何影響我們的身體和心理</p><h2 class="h4"><i class="bi bi-check-circle-fill checkIcon me-2"></i>實用的應用技巧</h2><p class="text-quaternary ms-6">學習如何安全合理地使用精油，包括擴香技巧，使學員能夠在家中營造舒適的氛圍，以及按摩和護膚技巧，讓精油的益處能夠透過皮膚吸收</p><h2 class="h4"><i class="bi bi-check-circle-fill checkIcon me-2"></i>精心設計的調配示範</h2><p class="text-quaternary ms-6">我們將示範多種情境下的精油調配，讓您能夠根據需求自行製作出符合目標的混合物。</p></div><div class="col-lg-6 d-flex align-items-center justify-content-center"><img src="'+ms+'" alt="info-picture" class="w-100 w-lg-75"></div></div></div></section>',1),Is={id:"testimonial"},ws={class:"container py-5"},Ss={class:"container py-5",id:"popularCourse"},As=t("h2",{class:"text-center mb-4"},"熱門課程",-1),Ns={class:"row g-4 pb-5"};function ks(c,m,i,n,r,l){const a=E("Loading"),b=E("router-link"),v=E("SuccessModal"),R=E("LoginModal"),g=E("trouble-card"),A=E("Testimonial"),O=E("price-card");return u(),h(S,null,[L(a,{active:c.isLoading},null,8,["active"]),t("header",null,[t("section",{id:"home",class:"header px-4 py-5 d-flex justify-content-center align-items-center",style:kt({backgroundImage:r.heroBackground})},[t("div",gs,[fs,L(b,{to:"/products",class:"btn btn-outline-primary text-white border-white"},{default:Lt(()=>[q("探索精油之美 "),vs]),_:1})])],4)]),t("div",null,[L(v,{ref:"successModal"},null,512),L(R,{ref:"loginModal"},null,512)]),ys,t("section",Es,[t("div",Ts,[xs,t("ul",$s,[(u(!0),h(S,null,D(r.troubles,_=>(u(),K(g,{key:_.id,icon:_.icon,title:_.title,description:_.description},null,8,["icon","title","description"]))),128))])])]),Cs,t("section",Is,[t("div",ws,[L(A)])]),t("section",Ss,[As,t("div",Ns,[(u(!0),h(S,null,D(r.initialProducts,(_,M)=>(u(),K(O,{key:M,id:_.id,title:_.title,content:_.content,image:_.imageUrl,"image-alt":_.title,price:_.price,origin_price:_.origin_price},null,8,["id","title","content","image","image-alt","price","origin_price"]))),128))])])],64)}const Ys=T(bs,[["render",ks]]);export{Ys as default};