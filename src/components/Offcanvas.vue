<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="cartOffcanvasLabel">購物車</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div v-if="!getCartList.cartList.length" class="text-center">購物車目前沒有商品！</div>
      <!-- 購物車內容 -->
      <div v-else>
        <table class="table table-borderless align-middle text-center">
          <thead class="thead">
            <tr>
              <th>商品名稱</th>
              <th>數量</th>
              <th>小計</th>
              <th>移除</th>
            </tr>
          </thead>
          <tbody class="tbody">
            <tr v-for="item in getCartList.cartList" :key="item.id">
              <!-- <td width="100"><img class="table-img" :src="item.product.image" alt="" /></td> -->
              <td class="text-primary">{{ item.product.title }}</td>
              <td>
                <select :value="item.qty" @change="(event) => setCartQty(item.productId, event)" class="form-select">
                  <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
                </select>
              </td>
              <td>{{ item.subtotal }}</td>
              <td>
                <button @click.prevent="removeFromCart(item.id)" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="border-top-1">
              <td colspan="5" class="text-end totalPrice">總金額 NT$ {{ getCartList.totalPrice }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="cart-controls d-flex justify-content-between">
          <button @click.prevent="removeAllCart()" class="btn btn-primary text-white clearCart">清空購物車</button>
          <!-- data-bs-toggle="modal" data-bs-target="#loginModal" -->
          <router-link to="/checkout" class="btn btn-primary text-white">前往結帳</router-link>
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
</style>
<script>
import cartStore from '@/stores/cartStore.js'
import modalStore from '@/stores/modalStore.js'
import { mapState, mapActions } from 'pinia'
export default {
  computed: {
    ...mapState(cartStore, ['getCartList'])
  },
  methods: {
    ...mapActions(cartStore, ['removeFromCart', 'removeAllCart', 'setCartQty']),
    ...mapActions(modalStore, ['openModal'])
  }
}
</script>
