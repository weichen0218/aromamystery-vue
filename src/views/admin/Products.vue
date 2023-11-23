<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid p-3">
    <div class="text-end"><button class="btn btn-primary text-white" @click="openModal(true)">新增產品</button></div>
    <table class="table mt-3">
      <thead>
        <tr>
          <th class="col-2 ps-4">分類</th>
          <th class="col-3">產品名稱</th>
          <th class="col-2">原價</th>
          <th class="col-2">售價</th>
          <th class="col-1">啟用</th>
          <th class="col-2">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td class="ps-4">{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price }}</td>
          <td class="text-right">{{ item.price }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm me-2" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="deleteProduct(item.id)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
</template>
<script>
import statusStore from '@/stores/statusStore.js'
import ProductModal from '@/components/AdminProductModal.vue'
import { mapState } from 'pinia'
export default {
  components: {
    ProductModal
  },
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      coupon: {
        title: '超級特惠價格',
        is_enabled: 1,
        percent: 80,
        due_date: 1719792000,
        code: 'Welcome'
      }
    }
  },
  computed: {
    ...mapState(statusStore, ['isLoading'])
  },
  methods: {
    getProducts() {
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/products`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log(res.data)
          this.products = res.data.products
          this.pagination = res.data.pagination
        } else {
          alert(res.data.message)
        }
      })
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    updateProduct(item) {
      this.tempProduct = item
      let api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      // 編輯
      if (!this.isNew) {
        api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        productComponent.hideModal()
        this.getProducts()
      })
    },
    deleteProduct(productId) {
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/product/${productId}`
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.getProducts()
        } else {
          alert(res.data.message)
        }
      })
    },
    addCoupon() {
      const url = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/coupon`
      // const coupon = { code: 'Welcome' }
      this.$http.post(url, { data: this.coupon }).then((res) => {
        if (res.data.success) {
          console.log(res.data)
        } else {
          alert(res.data.message)
        }
      })
    }
  },
  created() {
    this.getProducts()
  }
}
</script>
