<template>
  <!-- class="min-height" -->
  <div class="front">
    <Navbar></Navbar>
    <div class="min-height">
      <router-view></router-view>
    </div>
  </div>

  <div v-if="showBtn">
    <a href="#home" class="btn btn-tertiary rounded-circle" id="btn-back-to-top" @click.prevent="scrollToTop">
      <i class="bi bi-arrow-up text-white"></i>
    </a>
  </div>
  <footer>
    <section class="bg-primary py-4 text-white" id="copyright">
      <div class="container">
        <div class="row text-center">
          <p class="mb-0">
            本網站僅供個人作品使用，不提供商業用途｜<router-link to="/login" class="d-inline nav-link">登入後台</router-link>
            <small class="d-block"> &copy; 2023 芳香秘境 All Rights Reserved. </small>
          </p>
        </div>
      </div>
    </section>
  </footer>
  <ToastMessage />
</template>
<style>
.min-height {
  min-height: calc(100vh - 136px);
}
</style>
<script>
import Navbar from '@/components/Navbar.vue'
import ToastMessage from '@/components/ToastMessage.vue'
export default {
  data() {
    return {
      showBtn: false
    }
  },
  components: {
    Navbar,
    ToastMessage
  },
  methods: {
    showScrollBtn() {
      this.showBtn = window.scrollY >= 40
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.showScrollBtn)
  },
  unmounted() {
    window.removeEventListener('scroll', this.showScrollBtn)
  }
}
</script>
