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
            <p class="lh-lg mb-3 text-description">
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
                  :max="maxNum"
                  inputmode="numeric"
                  @blur="blurInput"
                  :disabled="is_max"
                  v-model.number="tempNum"
                />
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

    <div class="container py-5">
      <div class="row">
        <div class="col-md-6 p-3 px-md-0 py-md-5 lh-lg">
          <h2 class="fs-5 text-primary">注意事項</h2>
          <p class="mb-4">購買內容： 仔細閱讀課程內容和包含的資源，確保符合您的學習需求。</p>
          <ul class="list-unstyled fa-ul m-0 mt-3 ps-4">
            <li>
              <span class="fa-li">
                <i class="fas fa fa-cookie cookie"></i>
              </span>

              安全保障： 我們平台重視您的隱私和安全，所有交易和個人資訊都經過嚴格的加密保護，以確保您的安心。
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa fa-cookie-bite cookie"></i>
              </span>
              互動社群： 加入我們的社群，與其他學生和專業導師互動，分享經驗和擴大您的精油圈。
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa fa-cookie cookie"></i>
              </span>
              多元教學資源： 除了課程視頻外，我們還提供豐富的教學資源，如教材、下載文件等，以支持您的學習。
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa fa-cookie-bite cookie"></i>
              </span>
              專業技術支援： 我們的技術支援團隊專業且隨時待命，確保您在任何學習時段都能獲得快速而有效的協助，以確保您的學習體驗順暢無阻。
            </li>
          </ul>
        </div>

        <div class="bg-notice col-6">
          <span
            style="
              background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/panya/1627476566603.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=p3Hs3ZDZOVQHup%2ByuFxmTCCzZdZ61mRuNZYlZapNzSzW8dPb0u9qNtjmZxalOUdM8sYUicXS2UQgilr3%2F8fFXBWr1nfbLKjgFuY5wQcLpPbBEnIM1BFT45LtMxWgOExwNgG2eANiTWOZfbtZCwYcOO%2F3Pz2cShtKK8F29vE%2FKarXoHLnkEvYzppZtphgRTGQeFW2aJwia%2F1tcTAoseHPALQ7lbROXdZNS6mqRs0%2FK1NT%2BA1C5EKUlzXXbbZ8ps3Lln%2FZ35d0Ni1mtQSeDGvWyEdJdd%2F%2BBiab4WfRQByqZAJGmR06IhGMLqnOkEdFJcSok7QZQ7wMnpatOkQWIFExIg%3D%3D');
            "
          ></span>
        </div>
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
/* .productInput::-webkit-inner-spin-button,
.productInput::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.productInput {
  -moz-appearance: textfield;
} */
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
      console.log(this.cart.carts.length)
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
  },
  mounted() {
    this.getMaxNum()
  }
}
</script>
