<template>
  <nav class="navbar navbar-expand-lg sticky-top" id="navbar">
    <div class="container">
      <button class="navbar-toggler collapsed" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click.prevent="toggleCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div>
        <img src="@/assets/image/logo.svg" alt="logo" class="me-1 d-none d-lg-inline" style="height: 30px" />
        <router-link to="/" class="navbar-brand text-tertiary align-bottom" @click.prevent="hideCollapse">芳香秘境</router-link>
      </div>
      <div class="order-lg-1">
        <a @click.prevent="openOffcanvas" class="navbar-brand d-inline mx-1" aria-controls="cartOffcanvas">
          <i class="bi bi-cart2 cartIcon">
            <span v-if="cart.carts" class="cartBadge">
              <span class="cartCount">{{ cart.carts.length }}</span>
            </span>
          </i>
        </a>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="collapse">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <router-link to="/about" class="nav-link" @click.prevent="hideCollapse">關於我們</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/products" class="nav-link" @click.prevent="hideCollapse">課程列表</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/service" class="nav-link" @click.prevent="hideCollapse">常見問題</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/contact" class="nav-link" @click.prevent="hideCollapse">聯絡我們</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Offcanvas />
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse'
import Offcanvas from '@/components/Offcanvas.vue'
import cartStore from '@/stores/cartStore.js'
import uiStore from '@/stores/uiStore'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return { Collapse: null }
  },
  components: { Offcanvas },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(uiStore, ['offcanvas'])
  },
  methods: {
    ...mapActions(uiStore, ['openOffcanvas', 'closeOffcanvas']),
    toggleCollapse() {
      this.Collapse.toggle()
    },
    hideCollapse() {
      this.Collapse.hide()
    }
  },
  mounted() {
    this.Collapse = new Collapse(this.$refs.collapse)
  }
}
</script>
