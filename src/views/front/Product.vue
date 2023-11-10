<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6">
          <img :src="product.imageUrl" alt="" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <div class="d-flex flex-column justify-content-center h-100 px-lg-5">
            <h1 class="fw-bold mt-5 mt-lg-0 mb-3">{{ product.title }}</h1>
            <p class="fs-5 fw-bold mb-2 border-top">課程介紹</p>
            <p class="lh-lg mb-3 text-muted">
              {{ product.description }}
            </p>
            <!-- <p class="mb-4">主題：{{ product.content }}</p> -->
            <!-- <div class="d-flex justify-content-between mt-3"> -->
            <p class="mb-0">
              <span class="fs-2 fw-bold text-danger me-2">${{ product.price }}</span>
              <del>${{ product.origin_price }}</del> / {{ product.unit }}
            </p>
            <!-- <button class="btn btn-primary text-white fw-bold w-50 me-2" type="button" @click="addToCart(id)" :disabled="product.id === cartLoadingItem">加入購物車</button> -->
            <!-- </div> -->

            <div class="d-flex mt-3">
              <div class="input-group w-50">
                <button class="btn p-2 border text-dark" @click.prevent="decrement"><i class="bi bi-dash-lg"></i></button>
                <input
                  type="number"
                  class="productInput text-center flex-grow-1 form-control"
                  min="1"
                  :max="available"
                  inputmode="numeric"
                  @blur="blurInput"
                  :disabled="is_max"
                  v-model.number="tempNum"
                />
                <button class="btn p-2 border text-dark" @click.prevent="increment"><i class="bi bi-plus-lg"></i></button>
              </div>
              <button class="btn btn-primary text-white fw-bold w-50 ms-2" type="button" @click="addToCartAndResetInput(id, tempNum)" :disabled="product.id === cartLoadingItem || is_max">
                加入購物車
              </button>
            </div>
            <p v-if="is_max" class="mt-2 text-danger d-block">已達可購買最大數量</p>
            <!-- <div class="d-flex mt-3">
              <button class="btn btn-outline-primary fw-bold w-50 me-2" type="button" @click="addToCart(id, tempNum)" :disabled="product.id === cartLoadingItem">加入購物車</button>
              <button class="btn btn-primary fw-bold text-white w-50" type="button">立即購買</button>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-5">
      <div class="container">
        <h2 class="mb-3">購買課程須知</h2>
        <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
          <li><p class="mb-0">※仔細閱讀本課程內容和包含的資源，確保符合您的學習需求。</p></li>
          <li><p class="mb-0">※請按照本課程指示正確使用精油，並在使用前謹慎閱讀課程提供的相關資訊</p></li>
          <li><p class="mb-0">※如果對某些精油成分過敏，請在使用前諮詢專業意見。</p></li>
          <li><p class="mb-0">※如有任何問題或需要進一步諮詢，請隨時聯繫我們的專業支援團隊</p></li>
        </ul>
      </div>
    </div>
    <div class="bg-white py-5">
      <div class="container">
        <h2 class="mb-3">每滴精油，都是學習的永恆誓約</h2>
        <p class="mb-0">除了精油課程以外，我們也有課程專屬的社群討論區。</p>
        <p>您可以與其他學員分享經驗，提問問題，促進互動和學習。</p>
        <p class="mb-0">我們也會不定期舉辦專業講座和工作坊，</p>
        <p>邀請業界專家分享實用的技巧和最新的研究成果。</p>
      </div>
    </div>
  </div>
</template>
<style>
@media (min-width: 768px) {
  .container {
    max-width: 1200px;
  }
}
.productInput::-webkit-inner-spin-button,
.productInput::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.productInput {
  -moz-appearance: textfield;
}
/* input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
} */
</style>
<script>
import productStore from '@/stores/productStore.js'
import cartStore from '@/stores/cartStore.js'
import statusStore from '@/stores/statusStore.js'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      id: '',
      available: 30,
      is_max: false,
      tempNum: 1
    }
  },
  computed: {
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem']),
    ...mapState(productStore, ['product']),
    ...mapState(cartStore, ['cart', 'getCartItems'])
  },
  methods: {
    ...mapActions(productStore, ['getProduct']),
    ...mapActions(cartStore, ['getCart', 'addToCart']),
    increment() {
      if (this.tempNum < this.available) {
        this.tempNum++
      }
    },
    decrement() {
      if (this.tempNum > 1) {
        this.tempNum--
      }
    },
    getMaxNum() {
      console.log('id:', this.id)
      const inCart = this.cart.carts.find((item) => this.id === item.product_id)
      console.log('inCart:', inCart)
      console.log(this.cart.carts)

      const quantityInCart = inCart ? inCart.qty : 0
      const availableSpace = 30 - quantityInCart
      this.is_max = availableSpace <= 0
      this.available = this.is_max ? 0 : availableSpace
      console.log('is_max:', this.is_max)
      console.log('available:', this.available)
      console.log(this.is_max)
      console.log(this.available)
    },
    blurInput() {
      if (this.tempNum < 1) {
        this.tempNum = 1
      } else if (this.tempNum > this.available) {
        this.tempNum = this.available
      }
    },
    addToCartAndResetInput(id, tempNum) {
      this.addToCart(id, tempNum)
      this.tempNum = 1
    }
  },
  watch: {
    cart: {
      handler() {
        this.getMaxNum()
      },
      immediate: true
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getProduct(this.id)
  }
}
</script>
