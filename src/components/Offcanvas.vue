<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel" ref="offcanvas">
    <div class="offcanvas-header border-bottom">
      <h5 class="offcanvas-title" id="cartOffcanvasLabel">購物車</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div v-if="!cart.carts.length" class="text-center">購物車目前沒有商品！</div>
      <!-- 購物車內容 -->
      <div v-else>
        <table class="table table-borderless align-middle text-center">
          <thead class="thead">
            <tr>
              <!-- <th>商品名稱</th>
              <th>數量</th>
              <th>小計</th>
              <th>移除</th> -->
            </tr>
          </thead>
          <tbody class="tbody">
            <tr v-for="item in cart.carts" :key="item.id">
              <td width="80"><img class="table-img" :src="item.product.imageUrl" alt="" /></td>
              <td class="text-primary">
                {{ item.product.title }} <span class="d-block"> NT$ {{ item.product.origin_price }}</span>
              </td>
              <td><input type="number" v-model.number="item.qty" @blur="updateCart(item)" min="1" max="10" class="form-control" inputmode="numeric" /></td>

              <td>
                <button @click.prevent="removeFromCart(item.id)" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="border-top-1">
              <td colspan="5" class="text-end totalPrice">總金額 NT$ {{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="cart-controls d-flex justify-content-between">
          <button @click.prevent="removeAllCart()" class="btn btn-primary text-white clearCart">清空購物車</button>
          <!-- data-bs-toggle="modal" data-bs-target="#loginModal" -->
          <button @click="checkout" class="btn btn-primary text-white">前往結帳</button>
        </div>
        <!-- {{ getCartList.cartList }} -->
      </div>
    </div>
  </div>
</template>
<style>
/* .bi-trash:before {
  content: '\f2ed';
} */
input[type='number'] {
  writing-mode: horizontal-tb;
}
</style>
<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas'
import cartStore from '@/stores/cartStore.js'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      offcanvas: {},
      toggleCart: false
    }
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'addToCart', 'updateCart', 'removeFromCart', 'removeAllCart']),
    checkout() {
      // if (this.offcanvas.hide()) {
      //   console.log('hide success')
      //   console.log(this.offcanvas)
      // }
      // this.offcanvas.toggle()
      console.log(this.offcanvas)
      // this.$router.push('/checkout')
    }
  },
  mounted() {
    // this.offcanvas = new Offcanvas(this.$refs.offcanvas)
  }
}
</script>
