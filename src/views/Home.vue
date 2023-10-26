<template>
  <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
    <div class="container">
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div>
        <img src="@/assets/image/logo.svg" alt="logo" class="me-1 d-none d-lg-inline" style="height: 30px" />
        <a class="navbar-brand text-tertiary align-bottom" href="#">芳香秘境</a>
      </div>
      <div class="order-lg-1">
        <a class="nav-link d-inline mx-1" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas"
          ><i class="bi bi-cart2 cartIcon">
            <span v-if="cart.carts.length" class="cartBadge">
              <span class="cartCount">{{ cart.carts.length }}</span>
            </span>
          </i>
        </a>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <a class="nav-link active" aria-current="page" href="#home" @click.prevent="scrollToSection('home')">首頁</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#info" @click.prevent="scrollToSection('info')">課程資訊</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#share" @click.prevent="scrollToSection('share')">案例分享</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#qa" @click.prevent="scrollToSection('qa')">常見問題</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#price" @click.prevent="scrollToSection('price')">方案費用</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#contact" @click.prevent="scrollToSection('contact')">聯絡我們</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

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
      </div>
    </section>
  </header>

  <!-- Back to top button -->
  <div v-if="showBtn">
    <a href="#home" class="btn btn-tertiary rounded-circle" id="btn-back-to-top" @click.prevent="scrollToSection('home')">
      <i class="bi bi-arrow-up text-white"></i>
    </a>
  </div>

  <div>
    <SuccessModal ref="successModal" />
    <CartModal ref="cartModal" />
    <LoginModal ref="loginModal" />
    <Offcanvas ref="offcanvas" />
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
          <img src="@/assets/image/info.jpg" alt="info-picture" class="w-100 w-lg-75" />
        </div>
      </div>
    </div>

    <div class="py-5" id="trouble" :style="{ backgroundImage: troubleBackground }">
      <div class="container">
        <h2 class="text-center mb-4">你有這些煩惱嗎？</h2>
        <ul class="row row-cols-1 row-cols-lg-4 g-3 g-lg-4 list-unstyled">
          <trouble-card v-for="trouble in troubles" :key="trouble.id" :icon="trouble.icon" :title="trouble.title" :description="trouble.description"></trouble-card>
        </ul>
      </div>
    </div>
  </section>

  <share></share>

  <qa-list></qa-list>
  <section class="container py-5" id="price">
    <h2 class="text-center mb-4">方案費用</h2>
    <ul class="row row-cols-1 row-cols-lg-3 g-3 g-lg-4 list-unstyled">
      <price-card
        v-for="(product, index) in sortProducts"
        :key="index"
        :id="product.id"
        :title="product.title"
        :header-class="headerClass[index]"
        :image="product.imageUrl"
        :image-alt="product.title"
        :price="product.price"
        :features="product.content"
      />
    </ul>
  </section>

  <footer>
    <section class="bg-primary py-5 text-white" id="contact">
      <div class="container">
        <h2 class="text-center mb-4">聯絡我們</h2>
        <div class="row justify-content-center flex-row-reverse gy-5">
          <contact-form></contact-form>
          <div class="col-md-6 col-lg-5">
            <p>現在就報名加入我們，探索芳療的獨特魅力！</p>
            <h3 class="h4">聯絡方式</h3>
            <ul class="list-unstyled">
              <li v-for="(item, index) in contacts" :key="index"><i :class="item.iconClass + ' me-2'"></i>{{ item.text }}</li>
            </ul>
            <h3 class="h4 mt-5">社群關注</h3>
            <ul class="list-unstyled">
              <li v-for="(item, index) in socialMedia" :key="index"><i :class="item.iconClass + ' me-2'"></i>{{ item.text }}</li>
            </ul>
            <p id="copyright">2023 &copy; 芳香秘境｜Designed By 劉韋辰</p>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
// import Nav from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import SuccessModal from '@/components/SuccessModal.vue'
import CartModal from '@/components/CartModal.vue'
import LoginModal from '@/components/LoginModal.vue'
import Offcanvas from '@/components/Offcanvas.vue'
import Info from '@/components/Info.vue'
import Share from '@/components/Share.vue'
import QAList from '@/components/QAList.vue'
import PriceCard from '@/components/PriceCard.vue'
import ContactForm from '@/components/ContactForm.vue'
import troubleCard from '@/components/troubleCard.vue'

import productStore from '@/stores/productStore.js'
import cartStore from '@/stores/cartStore.js'
import statusStore from '@/stores/statusStore.js'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      showBtn: false,
      headerClass: ['text-primary', 'bg-primary text-white', 'text-primary'],
      heroBackground: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3)), url("src/assets/image/hero02.jpg")',
      troubleBackground: 'url("src/assets/image/bg_paper.png")',
      contacts: [
        { iconClass: 'bi bi-envelope', text: 'Aromamystery@email.com' },
        { iconClass: 'bi bi-telephone', text: '0987-654-321' }
      ],
      socialMedia: [
        { iconClass: 'bi bi-instagram', text: '@Aromamystery' },
        { iconClass: 'bi bi-facebook', text: 'fb.me/Aromamystery' },
        { iconClass: 'bi bi-twitter', text: 'Aromamystery' }
      ],
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
  // methods: {
  //   showSuccessModal() {
  //     this.$refs.successModal.show()
  //   },
  //   hideSuccessModal() {
  //     this.$refs.successModal.hide()
  //   },
  //   showCartModal() {
  //     this.$refs.cartModal.show()
  //   },
  //   hideCartModal() {
  //     this.$refs.cartModal.hide()
  //   },
  //   showLoginModal() {
  //     this.$refs.loginModal.show()
  //   },
  //   hideLoginModal() {
  //     this.$refs.loginModal.hide()
  //   }

  // },
  computed: {
    ...mapState(productStore, ['sortProducts']),
    ...mapState(cartStore, ['cart']),
    ...mapState(statusStore, ['isLoading'])
  },
  methods: {
    ...mapActions(productStore, ['GetAllProducts']),
    ...mapActions(cartStore, ['getCart']),
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    handleScroll() {
      this.showBtn = window.scrollY >= 40
    }
  },
  created() {
    this.GetAllProducts()
    this.getCart()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  components: {
    // Nav,
    Header,
    // Button,
    SuccessModal,
    CartModal,
    LoginModal,
    Offcanvas,
    Info,
    'trouble-card': troubleCard,
    share: Share,
    'qa-list': QAList,
    'price-card': PriceCard,
    'contact-form': ContactForm
  }
}
</script>
