<template>
  <div>
    <SuccessModal ref="successModal" />
    <CartModal ref="cartModal" />
    <LoginModal ref="loginModal" />
  </div>
</template>

<script>
import SuccessModal from '@/components/SuccessModal.vue'
import CartModal from '@/components/CartModal.vue'
import LoginModal from '@/components/LoginModal.vue'

export default {
  components: {
    SuccessModal,
    CartModal,
    LoginModal
  },
  methods: {
    showSuccessModal() {
      this.$refs.successModal.show()
    },
    hideSuccessModal() {
      this.$refs.successModal.hide()
    },
    showCartModal() {
      this.$refs.cartModal.show()
    },
    hideCartModal() {
      this.$refs.cartModal.hide()
    },
    showLoginModal() {
      this.$refs.loginModal.show()
    },
    hideLoginModal() {
      this.$refs.loginModal.hide()
    }
  }
}
</script>
