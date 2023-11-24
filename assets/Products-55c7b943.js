import{P as L}from"./PriceCard-3f1e2a5b.js";import{o as c,c as d,b as t,n as m,f as _,F as f,r as k,t as w,m as y,a as S,g as h,h as v,w as p,x as u,k as V}from"./index-890cc92c.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{p as P}from"./productStore-612dc705.js";import{s as B}from"./statusStore-d38cbfda.js";import{g}from"./index-4db78ffb.js";import"./Spinner-9e9451cb.js";import"./cartStore-c8295fc0.js";const U={props:["pages"],methods:{updatePage(i){this.$emit("emit-pages",i)}}},N={"aria-label":"Page navigation example"},E={class:"pagination justify-content-center"},I=t("span",{"aria-hidden":"true"},"«",-1),M=[I],j=["onClick"],D=t("span",{"aria-hidden":"true"},"»",-1),F=[D];function $(i,a,n,r,e,l){return c(),d("nav",N,[t("ul",E,[t("li",{class:m(["page-item",n.pages.has_pre?"":"disabled"])},[t("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:a[0]||(a[0]=_(s=>l.updatePage(n.pages.current_page-1),["prevent"]))},M)],2),(c(!0),d(f,null,k(n.pages.total_pages,s=>(c(),d("li",{class:m(["page-item",{active:s===n.pages.current_page}]),key:s},[t("a",{class:"page-link",href:"#",onClick:_(b=>l.updatePage(s),["prevent"])},w(s),9,j)],2))),128)),t("li",{class:m(["page-item",n.pages.has_next?"":"disabled"])},[t("a",{class:"page-link",href:"#","aria-label":"Next",onClick:a[1]||(a[1]=_(s=>l.updatePage(n.pages.current_page+1),["prevent"]))},F)],2)])])}const z=C(U,[["render",$]]);const R={components:{"price-card":L,pagination:z},data(){return{category:"",pagination:{},productList:[],selectedCategoryCollection:[],currentAnimation:null}},computed:{...y(B,["isLoading"]),...y(P,["sortProducts"])},watch:{category(i){this.selectedCategoryCollection=[];const a=this.sortProducts.filter(e=>i!=="全部"?e.category==i:e),n=Math.ceil(a.length/6),r=1;for(let e=1;e<=n;e++)this.selectedCategoryCollection.push(a.slice(6*(e-1),6*e));this.productList=this.selectedCategoryCollection[r-1],this.pagination={category:`${i}`,total_pages:n,current_page:r,has_pre:r-1>0,has_next:r<n},this.currentAnimation&&this.currentAnimation.kill(),this.fadeIn()},sortProducts(){this.category="全部"}},methods:{getPageProducts(i){window.scrollTo({top:0,behavior:"smooth"}),this.productList=this.selectedCategoryCollection[i-1],this.pagination.current_page=i,this.pagination.has_pre=i-1>0,this.pagination.has_next=i<this.pagination.total_pages,this.currentAnimation&&this.currentAnimation.kill(),this.fadeIn()},fadeIn(){g.set("#pricecard",{opacity:0,y:100}),this.currentAnimation=g.to("#pricecard",{y:0,opacity:1,delay:.5,duration:1})},...S(P,["getAllProducts"])},created(){this.getAllProducts()},mounted(){g.set("#product",{opacity:0}),g.to("#product",{opacity:1,delay:.5})}},T={class:"container py-5",id:"product"},W=t("h2",{class:"text-center mb-4"},"精選課程",-1),q={class:"btn-group d-flex justify-content-center mb-4",role:"group","aria-label":"Basic radio toggle button group"},G=t("label",{class:"btn btn-outline-primary",for:"btnradio1"},"全部",-1),H=t("label",{class:"btn btn-outline-primary",for:"btnradio2"},"精油",-1),J=t("label",{class:"btn btn-outline-primary",for:"btnradio3"},"瑜珈",-1),K=t("label",{class:"btn btn-outline-primary",for:"btnradio4"},"心理學",-1),O={class:"row g-4 pb-5",id:"pricecard"};function Q(i,a,n,r,e,l){const s=h("Loading"),b=h("price-card"),x=h("pagination");return c(),d(f,null,[v(s,{active:i.isLoading},null,8,["active"]),t("section",T,[W,t("div",q,[p(t("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off","onUpdate:modelValue":a[0]||(a[0]=o=>e.category=o),value:"全部"},null,512),[[u,e.category]]),G,p(t("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off","onUpdate:modelValue":a[1]||(a[1]=o=>e.category=o),value:"精油"},null,512),[[u,e.category]]),H,p(t("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio3",autocomplete:"off","onUpdate:modelValue":a[2]||(a[2]=o=>e.category=o),value:"瑜珈"},null,512),[[u,e.category]]),J,p(t("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio4",autocomplete:"off","onUpdate:modelValue":a[3]||(a[3]=o=>e.category=o),value:"心理學"},null,512),[[u,e.category]]),K]),t("div",O,[(c(!0),d(f,null,k(e.productList,(o,A)=>(c(),V(b,{key:A,id:o.id,title:o.title,content:o.content,image:o.imageUrl,"image-alt":o.title,price:o.price,origin_price:o.origin_price},null,8,["id","title","content","image","image-alt","price","origin_price"]))),128))]),v(x,{pages:e.pagination,onEmitPages:l.getPageProducts},null,8,["pages","onEmitPages"])])],64)}const nt=C(R,[["render",Q]]);export{nt as default};
