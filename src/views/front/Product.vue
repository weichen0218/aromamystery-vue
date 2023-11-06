<template>
  <Loading :active="isLoading"></Loading>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-6">
        <img :src="product.imageUrl" alt="" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <div class="d-flex flex-column justify-content-center h-100 px-lg-5">
          <h1 class="fw-bold mt-5 mt-lg-0 mb-3">{{ product.title }}</h1>
          <p class="fs-5 fw-bold mb-2 border-top">課程介紹</p>
          <p class="lh-lg mb-3 text-description">
            {{ product.description }}
          </p>
          <!-- <p class="mb-4">主題：{{ product.content }}</p> -->
          <p class="mb-0">
            <span class="fs-2 fw-bold text-danger me-2">${{ product.price }}</span>
            <del>${{ product.origin_price }}</del> / {{ product.unit }}
          </p>
          <div class="d-flex mt-3">
            <div class="input-group w-50">
              <button class="btn p-2 border text-dark" @click.prevent="decrement"><i class="bi bi-dash-lg"></i></button>
              <input type="number" class="text-center flex-grow-1 form-control" min="1" :max="maxNum" inputmode="numeric" @blur="blurInput" :disabled="is_max" v-model.number="tempNum" />
              <button class="btn p-2 border text-dark" @click.prevent="increment"><i class="bi bi-plus-lg"></i></button>
            </div>
          </div>
          <p v-if="is_max" class="mt-2 text-danger d-block">已達可購買最大數量</p>
          <div class="d-flex mt-3">
            <button class="btn btn-outline-primary fw-bold w-50 me-2" type="button" @click="addToCart(id, tempNum)" :disabled="product.id === cartLoadingItem">加入購物車</button>
            <button class="btn btn-primary fw-bold text-white w-50" type="button">立即購買</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
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
      maxNum: 0,
      is_max: false,
      tempNum: 1
    }
  },
  computed: {
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem']),
    ...mapState(productStore, ['product']),
    ...mapState(cartStore, ['cart'])
  },
  methods: {
    ...mapActions(productStore, ['getProduct']),
    ...mapActions(cartStore, ['getCart', 'addToCart']),
    increment() {
      if (this.tempNum < this.maxNum) {
        this.tempNum++
      }
    },
    decrement() {
      if (this.tempNum > 1) {
        this.tempNum--
      }
    },
    getMaxNum() {
      this.getCart()
      console.log('this cart:', this.cart)
      const inCart = this.cart.carts.filter((item) => this.id === item.product_id)
      if (!inCart) {
        this.maxNum = 30
        return
      }
      if (inCart.length > 0) {
        this.maxNum = 30 - inCart[0].qty
      } else {
        this.maxNum = 30
      }
      if (this.maxNum <= 0) {
        this.is_max = true
      } else {
        this.is_max = false
      }
    },
    blurInput() {
      if (this.tempNum < 1) {
        this.tempNum = 1
      } else if (this.tempNum > this.maxNum) {
        this.tempNum = this.maxNum
      }
    }
  },
  watch: {
    tempNum: {
      handler(val) {
        if (val > this.maxNum) {
          this.tempNum = this.maxNum
        }
      },
      deep: true
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getProduct(this.id)
    this.getMaxNum()
  }
}
</script>
