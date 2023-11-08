import{p as l}from"./productStore-9d1a9cce.js";import{c as r}from"./cartStore-4ce3be18.js";import{s as _}from"./statusStore-100a51da.js";import{m as d,a as n,g as b,o as c,c as u,h as f,b as t,t as a,e as g,f as p,w as N,v as x,j as v,F as w,l as y}from"./index-9ac85d31.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const k={data(){return{id:"",maxNum:0,is_max:!1,tempNum:1}},computed:{...d(_,["isLoading","cartLoadingItem"]),...d(l,["product"]),...d(r,["cart","getCartItems"])},methods:{...n(l,["getProduct"]),...n(r,["getCart","addToCart"]),increment(){this.tempNum<this.maxNum&&this.tempNum++},decrement(){this.tempNum>1&&this.tempNum--},getMaxNum(){const s=this.cart.carts.filter(e=>this.id===e.product_id);if(!s){this.maxNum=30;return}s.length>0?this.maxNum=30-s[0].qty:this.maxNum=30,this.maxNum<=0?this.is_max=!0:this.is_max=!1},blurInput(){this.tempNum<1?this.tempNum=1:this.tempNum>this.maxNum&&(this.tempNum=this.maxNum)}},watch:{tempNum:{handler(s){s>this.maxNum&&(this.tempNum=this.maxNum)},deep:!0},getCartItems(){this.getMaxNum()}},created(){this.id=this.$route.params.id,this.getProduct(this.id),this.getMaxNum()}},I={class:"container-fluid"},L={class:"container py-5"},S={class:"row"},V={class:"col-md-6"},M=["src"],B={class:"col-md-6"},P={class:"d-flex flex-column justify-content-center h-100 px-lg-5"},T={class:"fw-bold mt-5 mt-lg-0 mb-3"},j=t("p",{class:"fs-5 fw-bold mb-2 border-top"},"課程介紹",-1),D={class:"lh-lg mb-3 text-muted"},F={class:"mb-0"},U={class:"fs-2 fw-bold text-danger me-2"},q={class:"d-flex mt-3"},A={class:"input-group w-50"},E=t("i",{class:"bi bi-dash-lg"},null,-1),z=[E],G=["max","disabled"],H=t("i",{class:"bi bi-plus-lg"},null,-1),J=[H],K=["disabled"],O={key:0,class:"mt-2 text-danger d-block"},Q=y('<div class="bg-white py-5"><div class="container"><h2 class="mb-3">購買課程須知</h2><ul class="list-unstyled d-flex flex-column gap-2 mb-0"><li><p class="mb-0">※仔細閱讀本課程內容和包含的資源，確保符合您的學習需求。</p></li><li><p class="mb-0">※請按照本課程指示正確使用精油，並在使用前謹慎閱讀課程提供的相關資訊</p></li><li><p class="mb-0">※如果對某些精油成分過敏，請在使用前諮詢專業意見。</p></li><li><p class="mb-0">※如有任何問題或需要進一步諮詢，請隨時聯繫我們的專業支援團隊</p></li></ul></div></div><div class="bg-white py-5"><div class="container"><h2 class="mb-3">每滴精油，都是學習的永恆誓約</h2><p class="mb-0">除了精油課程以外，我們也有課程專屬的社群討論區。</p><p>您可以與其他學員分享經驗，提問問題，促進互動和學習。</p><p class="mb-0">我們也會不定期舉辦專業講座和工作坊，</p><p>邀請業界專家分享實用的技巧和最新的研究成果。</p></div></div>',2);function R(s,e,W,X,i,m){const h=b("Loading");return c(),u(w,null,[f(h,{active:s.isLoading},null,8,["active"]),t("div",I,[t("div",L,[t("div",S,[t("div",V,[t("img",{src:s.product.imageUrl,alt:"",class:"img-fluid"},null,8,M)]),t("div",B,[t("div",P,[t("h1",T,a(s.product.title),1),j,t("p",D,a(s.product.description),1),t("p",F,[t("span",U,"$"+a(s.product.price),1),t("del",null,"$"+a(s.product.origin_price),1),g(" / "+a(s.product.unit),1)]),t("div",q,[t("div",A,[t("button",{class:"btn p-2 border text-dark",onClick:e[0]||(e[0]=p((...o)=>m.decrement&&m.decrement(...o),["prevent"]))},z),N(t("input",{type:"number",class:"productInput text-center flex-grow-1 form-control",min:"1",max:i.maxNum,inputmode:"numeric",onBlur:e[1]||(e[1]=(...o)=>m.blurInput&&m.blurInput(...o)),disabled:i.is_max,"onUpdate:modelValue":e[2]||(e[2]=o=>i.tempNum=o)},null,40,G),[[x,i.tempNum,void 0,{number:!0}]]),t("button",{class:"btn p-2 border text-dark",onClick:e[3]||(e[3]=p((...o)=>m.increment&&m.increment(...o),["prevent"]))},J)]),t("button",{class:"btn btn-primary text-white fw-bold w-50 ms-2",type:"button",onClick:e[4]||(e[4]=o=>s.addToCart(i.id,i.tempNum)),disabled:s.product.id===s.cartLoadingItem||i.is_max},"加入購物車",8,K)]),i.is_max?(c(),u("p",O,"已達可購買最大數量")):v("",!0)])])])]),Q])],64)}const et=C(k,[["render",R]]);export{et as default};