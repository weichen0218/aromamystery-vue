<template>
  <Loading :active="isLoading"></Loading>
  <header>
    <section id="home" class="header px-4 py-5 d-flex justify-content-center align-items-center" :style="{ backgroundImage: heroBackground }">
      <div class="text-center text-white">
        <p class="fs-5">你是不是也有夢想</p>
        <h1 class="fw-bold">想成為一位芳療師</h1>
        <p>
          你是否渴望在繁忙的現代生活中找到一份舒緩和平靜？<br />
          我們的精油課程將帶你進入精油的奇妙世界，<br />
          讓你從中獲得健康、平衡和幸福。
        </p>
        <router-link to="/products" class="btn btn-outline-primary text-white border-white">探索精油之美&nbsp;<i class="bi bi-arrow-right"></i></router-link>
      </div>
    </section>
  </header>

  <div>
    <SuccessModal ref="successModal" />
    <LoginModal ref="loginModal" />
  </div>

  <section id="info">
    <div class="container py-5">
      <div class="row flex-row-reverse">
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <div>
            <h2 class="fw-bold">讓我們幫你節省寶貴的時間</h2>
            <p class="text-primary lh-lg">
              我們的專家團隊擁有多年的精油研究和實踐經驗，<br class="d-none d-sm-block" />
              將帶領你探索精油的各個層面。<br class="d-none d-sm-block" />
              課程提供高質量的學習資料、影片示範和互動環節，<br class="d-none d-sm-block" />
              確保你能夠輕鬆學習並掌握知識。<br class="d-none d-sm-block" />
              你可以隨時隨地在線學習，無需擔心時間和地點的限制，<br class="d-none d-sm-block" />
              讓學習融入你的生活。
            </p>
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <img src="@/assets/image/info.png" alt="info-picture" class="w-100 w-lg-75" />
        </div>
      </div>
    </div>

    <div class="py-5" id="trouble">
      <div class="container">
        <h2 class="text-center mb-4">你有這些煩惱嗎？</h2>
        <ul class="row row-cols-1 row-cols-lg-4 g-3 g-lg-4 list-unstyled">
          <trouble-card v-for="trouble in troubles" :key="trouble.id" :icon="trouble.icon" :title="trouble.title" :description="trouble.description"></trouble-card>
        </ul>
      </div>
    </div>
  </section>

  <section id="course">
    <div class="container py-5">
      <h2 class="text-center mb-4">我們的課程提供</h2>
      <div class="row flex-row-reverse align-items-center">
        <div class="col-lg-6">
          <h3 class="h4"><i class="bi bi-check-circle-fill checkIcon me-2"></i>全面的精油基礎知識</h3>
          <p class="text-quaternary ms-6">從精油的起源、提取方法到各種精油的特性，讓您建立堅實的基礎。我們還會深入瞭解每種精油的化學成分，以及這些成分如何影響我們的身體和心理</p>
          <h2 class="h4"><i class="bi bi-check-circle-fill checkIcon me-2"></i>實用的應用技巧</h2>
          <p class="text-quaternary ms-6">學習如何安全合理地使用精油，包括擴香技巧，使學員能夠在家中營造舒適的氛圍，以及按摩和護膚技巧，讓精油的益處能夠透過皮膚吸收</p>
          <h2 class="h4"><i class="bi bi-check-circle-fill checkIcon me-2"></i>精心設計的調配示範</h2>
          <p class="text-quaternary ms-6">我們將示範多種情境下的精油調配，讓您能夠根據需求自行製作出符合目標的混合物。</p>
        </div>
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <img src="@/assets/image/course.png" alt="info-picture" class="w-100 w-lg-75" />
        </div>
      </div>
    </div>
  </section>

  <Testimonial />

  <section class="container py-5" id="price">
    <h2 class="text-center mb-4">熱門課程</h2>
    <div class="row g-4 pb-5">
      <price-card
        v-for="(product, index) in sortProducts"
        :key="index"
        :id="product.id"
        :title="product.title"
        :content="product.content"
        :image="product.imageUrl"
        :image-alt="product.title"
        :price="product.price"
        :origin_price="product.origin_price"
      />
    </div>
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import SuccessModal from '@/components/SuccessModal.vue'

import LoginModal from '@/components/LoginModal.vue'

import Info from '@/components/Info.vue'
import Testimonial from '@/components/Testimonial.vue'

import PriceCard from '@/components/PriceCard.vue'
import TroubleCard from '@/components/TroubleCard.vue'

import productStore from '@/stores/productStore.js'
import cartStore from '@/stores/cartStore.js'
import statusStore from '@/stores/statusStore.js'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      heroBackground: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url("src/assets/image/hero03.jpg")',
      troubleBackground: 'url("src/assets/image/bg_paper.png")',
      troubles: [
        {
          id: 1,
          icon: 'bi bi-journal-x',
          title: '缺乏精油知識',
          description: '網路上有很多精油資訊，不知道從何開始學習'
        },
        {
          id: 2,
          icon: 'bi bi-eyedropper',
          title: '不會調配精油',
          description: '初學者不熟悉精油的安全使用方法，可能會擔心使用不當導致不良反應。'
        },
        {
          id: 3,
          icon: 'bi bi-shop',
          title: '不會挑選精油',
          description: '精油種類眾多，初學者不知道該選擇哪些精油，以及如何區分它們的用途和特性'
        },
        {
          id: 4,
          icon: 'bi bi-emoji-dizzy',
          title: '不會分辨真假',
          description: '市場上有許多假冒產品，無法辨別出高品質的精油'
        }
      ]
    }
  },
  computed: {
    ...mapState(productStore, ['sortProducts']),
    ...mapState(cartStore, ['cart']),
    ...mapState(statusStore, ['isLoading'])
  },
  methods: {
    ...mapActions(productStore, ['getAllProducts']),
    ...mapActions(cartStore, ['getCart']),
    ...mapActions(statusStore, ['resetMessage'])
  },
  created() {
    this.getAllProducts()
    this.getCart()
    console.log('this cart1:', this.cart)
  },
  beforeUnmount() {
    this.resetMessage()
  },
  components: {
    Header,
    SuccessModal,
    LoginModal,
    Info,
    'trouble-card': TroubleCard,
    Testimonial,
    'price-card': PriceCard
  }
}
</script>
