<template>
  <Navbar></Navbar>
  <router-view></router-view>
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
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
