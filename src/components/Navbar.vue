<template>
  <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
    <!-- container-fluid -->
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
        <img
          src="src/assets/image/logo.svg"
          alt="logo"
          class="me-1 d-none d-lg-inline"
          style="height: 30px"
        />
        <a class="navbar-brand text-tertiary align-bottom" href="#">芳香秘境</a>
      </div>
      <div class="order-lg-1">
        <a class="nav-link d-inline mx-1" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas"
          ><i class="bi bi-cart2 cartIcon">
            <span class="cartBadge">
              <span class="cartCount">0</span>
            </span>
          </i>
        </a>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-for="(nav, index) in navs" :key="index" class="nav-item mx-2">
            <a :class="['nav-link', { active: index === 0 }]" :href="'#' + nav.id">{{
              nav.text
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { id: 'home', text: '首頁' },
        { id: 'info', text: '課程資訊' },
        { id: 'share', text: '案例分享' },
        { id: 'qa', text: '常見問題' },
        { id: 'price', text: '方案費用' },
        { id: 'contact', text: '聯絡我們' }
      ]
    }
  }
}
</script>
