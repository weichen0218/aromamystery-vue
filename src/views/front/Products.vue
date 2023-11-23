<template>
  <Loading :active="isLoading"></Loading>
  <section class="container py-5" id="product">
    <h2 class="text-center mb-4">精選課程</h2>
    <div class="btn-group d-flex justify-content-center mb-4" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" v-model="category" value="全部" />
      <label class="btn btn-outline-primary" for="btnradio1">全部</label>
      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" v-model="category" value="初階" />
      <label class="btn btn-outline-primary" for="btnradio2">初階</label>
      <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" v-model="category" value="中階" />
      <label class="btn btn-outline-primary" for="btnradio3"> 中階</label>
      <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" v-model="category" value="進階" />
      <label class="btn btn-outline-primary" for="btnradio4">進階</label>
    </div>

    <div class="row g-4 pb-5">
      <price-card
        v-for="(product, index) in productList"
        :key="index"
        :id="product.id"
        :title="product.title"
        :content="product.content"
        :image="product.imageUrl"
        :image-alt="product.title"
        :price="product.price"
        :origin_price="product.origin_price"
      />
    </div>
    <pagination :pages="pagination" @emit-pages="getPageProducts"></pagination>
  </section>
</template>
<style>
.btn-check:checked + .btn-outline-primary {
  color: white;
}
</style>
<script>
import PriceCard from '@/components/PriceCard.vue'
import Pagination from '@/components/Pagination.vue'
import productStore from '@/stores/productStore.js'
import statusStore from '@/stores/statusStore.js'
import { mapState, mapActions } from 'pinia'
import gsap from 'gsap'
export default {
  components: {
    'price-card': PriceCard,
    pagination: Pagination
  },
  data() {
    return {
      category: '',
      pagination: {},
      productList: [],
      selectedCategoryCollection: []
    }
  },
  computed: {
    ...mapState(statusStore, ['isLoading']),
    ...mapState(productStore, ['sortProducts'])
  },
  watch: {
    category(type) {
      this.selectedCategoryCollection = []
      const selectedProducts = this.sortProducts.filter((item) => (type !== '全部' ? item.category == type : item))
      const total_pages = Math.ceil(selectedProducts.length / 6)
      const defaultCurrentPage = 1
      for (let pageNum = 1; pageNum <= total_pages; pageNum++) {
        this.selectedCategoryCollection.push(selectedProducts.slice(6 * (pageNum - 1), 6 * pageNum))
      }
      this.productList = this.selectedCategoryCollection[defaultCurrentPage - 1]
      this.pagination = {
        category: `${type}`,
        total_pages,
        current_page: defaultCurrentPage,
        has_pre: defaultCurrentPage - 1 > 0,
        has_next: defaultCurrentPage < total_pages
      }
    },
    sortProducts() {
      this.category = '全部'
    }
  },
  methods: {
    getPageProducts(page) {
      this.productList = this.selectedCategoryCollection[page - 1]
      this.pagination.current_page = page
      this.pagination.has_pre = page - 1 > 0
      this.pagination.has_next = page < this.pagination.total_pages
    },
    ...mapActions(productStore, ['getAllProducts'])
  },
  created() {
    this.getAllProducts()
  },
  mounted() {
    gsap.set('#product', { opacity: 0 })
    gsap.to('#product', {
      opacity: 1,
      delay: 0.5
    })
  }
}
</script>
