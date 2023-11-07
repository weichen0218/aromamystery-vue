<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel" ref="offcanvas">
    <div class="offcanvas-header border-bottom">
      <h5 class="offcanvas-title" id="cartOffcanvasLabel">購物車</h5>
      <button @click="closeOffcanvas" type="button" class="btn-close text-reset" aria-label="Close"></button>
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
                {{ item.product.title }} <span class="d-block"> NT$ {{ $cash(item.product.price) }}</span>
              </td>
              <td>
                <input type="number" :disabled="item.id === cartLoadingItem" v-model.number="item.qty" @blur="updateCart(item)" min="1" max="30" class="form-control" inputmode="numeric" />
              </td>

              <td>
                <button @click.prevent="removeFromCart(item.id)" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="border-top">
              <td v-if="cart.total === cart.final_total" colspan="5" class="text-end">總計金額： NT$ {{ $cash(cart.total) }}</td>
              <td v-else colspan="5" class="text-end">
                <del class="text-muted">總計金額： NT$ {{ $cash(cart.total) }}</del>
                <span class="d-block">折扣後金額： NT$ {{ $cash(cart.final_total) }}</span>
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="cart-controls d-flex justify-content-between">
          <button @click.prevent="removeAllCart()" class="btn btn-primary text-white clearCart">清空購物車</button>
          <!-- data-bs-toggle="modal" data-bs-target="#loginModal" -->
          <button @click="checkorder" class="btn btn-primary text-white">前往結帳</button>
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
import uiStore from '@/stores/uiStore'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(uiStore, ['offcanvas']),
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'addToCart', 'updateCart', 'removeFromCart', 'removeAllCart']),
    ...mapActions(uiStore, ['newOffcanvasInstance', 'closeOffcanvas']),
    checkorder() {
      this.closeOffcanvas()
      this.$router.push('/checkorder')
    }
  },
  created() {
    this.getCart()
  },
  mounted() {
    this.newOffcanvasInstance(this.$refs.offcanvas)
  }
}
</script>
