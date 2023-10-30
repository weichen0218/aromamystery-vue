import { defineStore } from 'pinia'
import statusStore from '@/stores/statusStore.js'
import axios from 'axios'

const status = statusStore()

export default defineStore('cartStore', {
  state: () => ({
    cart: {
      carts: []
    }
  }),
  actions: {
    addToCart(id, qty = 1) {
      const url = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      status.cartLoadingItem = id
      axios.post(url, { data: cart }).then((res) => {
        this.getCart()
        status.cartLoadingItem = ''
        status.pushMessage({ style: 'success', title: '已加入購物車', content: '成功加入購物車' })
      })
    },
    getCart() {
      const url = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart`
      status.isLoading = true
      axios.get(url).then((res) => {
        this.cart = res.data.data
        status.isLoading = false
        console.log(res)
      })
    },
    updateCart(item) {
      if (item.qty <= 1) {
        item.qty = 1
      } else if (item.qty >= 30) {
        item.qty = 30
      }
      const url = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      status.isLoading = true
      status.cartLoadingItem = item.id
      axios.put(url, { data: cart }).then((res) => {
        this.getCart()
        status.pushMessage({ style: 'success', title: '已更新購物車', content: '成功更新購物車' })
        status.isLoading = false
        status.cartLoadingItem = ''
      })
    },
    removeFromCart(id) {
      const url = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart/${id}`
      status.isLoading = true
      status.cartLoadingItem = item.id
      axios.delete(url).then((res) => {
        this.getCart()
        status.pushMessage({ style: 'success', title: '已移除商品', content: '成功移除商品' })
        status.isLoading = false
        status.cartLoadingItem = ''
      })
    },
    removeAllCart() {
      const url = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/carts`
      status.isLoading = true
      axios.delete(url).then((res) => {
        this.getCart()
        status.pushMessage({ style: 'success', title: '已清空購物車', content: '成功清空購物車' })
        status.isLoading = false
      })
    }
    // setCartQty(productId, event) {
    //   const productInCart = this.cart.find((item) => item.productId === productId)
    //   productInCart.qty = event.target.value * 1
    // }
  },
  getters: {
    // getCartList: ({ cart }) => {
    //   // 1. 取得 productList
    //   const { productList } = productStore()
    //   // 2. 整合資料 productList
    //   const cartList = cart.map((cartItem) => {
    //     const product = productList.find((productItem) => productItem.id === cartItem.productId)
    //     return {
    //       ...cartItem,
    //       product,
    //       subtotal: product.price * cartItem.qty
    //     }
    //   })
    //   const totalPrice = cartList.reduce((a, b) => a + b.subtotal, 0)
    //   return {
    //     cartList,
    //     totalPrice
    //   }
    // }
  }
})
