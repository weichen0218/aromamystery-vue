import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from '@/stores/statusStore.js'
const status = statusStore()
export default defineStore('productStore', {
  state: () => ({
    products: [],
    product: {},
    category: []
  }),
  actions: {
    getAllProducts() {
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/products/all`
      status.isLoading = true
      axios.get(api).then((res) => {
        this.products = res.data.products
        const arry = this.products.map((item) => item.category)
        const newSet = new Set(arry)
        this.category = [...newSet]
        console.log(this.category)
        status.isLoading = false
      })
    },
    getProduct(id) {
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/product/${id}`
      status.isLoading = true
      axios.get(api).then((res) => {
        this.product = res.data.product
        console.log(this.product)
        status.isLoading = false
      })
    }
  },
  getters: {
    sortProducts: (state) => state.products.sort((a, b) => a.price - b.price)
  }
})
