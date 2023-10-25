import { defineStore } from 'pinia'
import productStore from '@/stores/productStore.js'
export default defineStore('cartStore', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart')) || []
  }),
  actions: {
    addToCart(productId, qty = 1) {
      const productInCart = this.cart.find((item) => item.productId === productId)
      if (productInCart) {
        productInCart.qty++
      } else {
        this.cart.push({
          productId,
          qty
        })
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    removeFromCart(productId) {
      const productIndex = this.cart.findIndex((item) => item.productId === productId)
      this.cart.splice(productIndex, 1)
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    removeAllCart() {
      this.cart = []
      localStorage.removeItem('cart')
    },
    setCartQty(productId, event) {
      const productInCart = this.cart.find((item) => item.productId === productId)
      productInCart.qty = event.target.value * 1
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  },
  getters: {
    getCartList: ({ cart }) => {
      // 1. 取得 productList
      const { productList } = productStore()
      // 2. 整合資料 productList
      const cartList = cart.map((cartItem) => {
        const product = productList.find((productItem) => productItem.id === cartItem.productId)
        return {
          ...cartItem,
          product,
          subtotal: product.price * cartItem.qty
        }
      })
      const totalPrice = cartList.reduce((a, b) => a + b.subtotal, 0)
      return {
        cartList,
        totalPrice
      }
    }
  }
})
