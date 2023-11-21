import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from '@/stores/statusStore.js'
const status = statusStore()
export default defineStore('productStore', {
  state: () => ({
    products: [],
    pagination: {},
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
        status.isLoading = false
      })
    },
    getProduct(id) {
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/product/${id}`
      status.isLoading = true
      axios.get(api).then((res) => {
        this.product = res.data.product
        status.isLoading = false
      })
    },
    getProducts(page = 1) {
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/products?page=${page}`
      status.isLoading = true
      axios.get(api).then((res) => {
        this.products = res.data.products
        this.pagination = res.data.pagination
        status.isLoading = false
      })
    }
  },
  getters: {
    sortProducts: (state) => state.products.sort((a, b) => a.price - b.price)
  }
})
