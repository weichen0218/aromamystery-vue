<template>
  <nav class="navbar navbar-expand-lg sticky-top" id="navbar">
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
        <a class="navbar-brand d-inline mx-1" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-controls="cartOffcanvas">
          <i class="bi bi-cart2 cartIcon">
            <span v-if="cart.carts" class="cartBadge">
              <span class="cartCount">{{ cart.carts.length }}</span>
            </span>
          </i>
        </a>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <router-link to="/about" class="nav-link">關於我們</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/products" class="nav-link">課程列表</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/service" class="nav-link">常見問題</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/contact" class="nav-link">聯絡我們</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { mapState } from 'pinia'
export default {
  computed: {
    ...mapState(cartStore, ['cart'])
  }
}
</script>
