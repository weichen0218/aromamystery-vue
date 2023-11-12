import{p as c}from"./productStore-80e9afa1.js";import{c as m}from"./cartStore-587903b7.js";import{s as v}from"./statusStore-c4451eba.js";import{m as n,a as p,g as f,o as u,c as h,h as g,b as t,t as l,e as x,f as b,w as N,v as w,j as y,F as C,l as I}from"./index-eea3ee0c.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const S={data(){return{id:"",available:30,is_max:!1,tempNum:1}},computed:{...n(v,["isLoading","cartLoadingItem"]),...n(c,["product"]),...n(m,["cart","getCartItems"])},methods:{...p(c,["getProduct"]),...p(m,["getCart","addToCart"]),increment(){this.tempNum<this.available&&this.tempNum++},decrement(){this.tempNum>1&&this.tempNum--},getMaxNum(){const s=this.cart.carts.find(r=>this.id===r.product_id),d=30-(s?s.qty:0);this.is_max=d<=0,this.available=this.is_max?0:d},blurInput(){this.tempNum<1?this.tempNum=1:this.tempNum>this.available&&(this.tempNum=this.available)},addToCartAndResetInput(s,e){this.addToCart(s,e),this.tempNum=1}},watch:{cart:{handler(){this.id=this.$route.params.id,this.getMaxNum()},immediate:!0}},created(){this.getProduct(this.id)}},L={class:"container-fluid"},T={class:"container py-5"},V={class:"row"},B={class:"col-md-6"},M=["src"],P={class:"col-md-6"},q={class:"d-flex flex-column justify-content-center h-100 px-lg-5"},A={class:"fw-bold mt-5 mt-lg-0 mb-3"},j=t("p",{class:"fs-5 fw-bold mb-2 border-top"},"課程介紹",-1),D={class:"lh-lg mb-3 text-muted"},F={class:"mb-0"},R={class:"fs-2 fw-bold text-danger me-2"},U={class:"d-flex mt-3"},E={class:"input-group w-50"},z=t("i",{class:"bi bi-dash-lg"},null,-1),G=[z],H=["max","disabled"],J=t("i",{class:"bi bi-plus-lg"},null,-1),K=[J],O=["disabled"],Q={key:0,class:"mt-2 text-danger d-block"},W=I('<div class="bg-white py-5"><div class="container"><h2 class="mb-3">購買課程須知</h2><ul class="list-unstyled d-flex flex-column gap-2 mb-0"><li><p class="mb-0">※仔細閱讀本課程內容和包含的資源，確保符合您的學習需求。</p></li><li><p class="mb-0">※請按照本課程指示正確使用精油，並在使用前謹慎閱讀課程提供的相關資訊</p></li><li><p class="mb-0">※如果對某些精油成分過敏，請在使用前諮詢專業意見。</p></li><li><p class="mb-0">※如有任何問題或需要進一步諮詢，請隨時聯繫我們的專業支援團隊</p></li></ul></div></div><div class="bg-white py-5"><div class="container"><h2 class="mb-3">每滴精油，都是學習的永恆誓約</h2><p class="mb-0">除了精油課程以外，我們也有課程專屬的社群討論區。</p><p>您可以與其他學員分享經驗，提問問題，促進互動和學習。</p><p class="mb-0">我們也會不定期舉辦專業講座和工作坊，</p><p>邀請業界專家分享實用的技巧和最新的研究成果。</p></div></div>',2);function X(s,e,d,r,i,a){const _=f("Loading");return u(),h(C,null,[g(_,{active:s.isLoading},null,8,["active"]),t("div",L,[t("div",T,[t("div",V,[t("div",B,[t("img",{src:s.product.imageUrl,alt:"",class:"img-fluid"},null,8,M)]),t("div",P,[t("div",q,[t("h1",A,l(s.product.title),1),j,t("p",D,l(s.product.description),1),t("p",F,[t("span",R,"$"+l(s.product.price),1),t("del",null,"$"+l(s.product.origin_price),1),x(" / "+l(s.product.unit),1)]),t("div",U,[t("div",E,[t("button",{class:"btn p-2 border text-dark",onClick:e[0]||(e[0]=b((...o)=>a.decrement&&a.decrement(...o),["prevent"]))},G),N(t("input",{type:"number",class:"productInput text-center flex-grow-1 form-control",min:"1",max:i.available,inputmode:"numeric",onBlur:e[1]||(e[1]=(...o)=>a.blurInput&&a.blurInput(...o)),disabled:i.is_max,"onUpdate:modelValue":e[2]||(e[2]=o=>i.tempNum=o)},null,40,H),[[w,i.tempNum,void 0,{number:!0}]]),t("button",{class:"btn p-2 border text-dark",onClick:e[3]||(e[3]=b((...o)=>a.increment&&a.increment(...o),["prevent"]))},K)]),t("button",{class:"btn btn-primary text-white fw-bold w-50 ms-2",type:"button",onClick:e[4]||(e[4]=o=>a.addToCartAndResetInput(i.id,i.tempNum)),disabled:s.product.id===s.cartLoadingItem||i.is_max}," 加入購物車 ",8,O)]),i.is_max?(u(),h("p",Q,"已達可購買最大數量")):y("",!0)])])])]),W])],64)}const et=k(S,[["render",X]]);export{et as default};
