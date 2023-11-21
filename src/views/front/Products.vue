<template>
  <Loading :active="isLoading"></Loading>
  <section class="container py-5" id="product">
    <h2 class="text-center mb-4">精選課程</h2>
    <ul class="nav nav-pills justify-content-center mb-4">
      <li class="nav-item mx-2">
        <a class="nav-link active" aria-current="page" href="#">全部</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link" href="#">初階</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link" href="#">中階</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link" href="#">進階</a>
      </li>
    </ul>
    <div class="row g-4 pb-5">
      <price-card
        v-for="(product, index) in sortProducts"
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
    <pagination :pages="pagination" @emit-pages="getProducts"></pagination>
  </section>
</template>
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
    return {}
  },
  computed: {
    ...mapState(statusStore, ['isLoading']),
    ...mapState(productStore, ['sortProducts', 'pagination'])
  },
  methods: {
    ...mapActions(productStore, ['getAllProducts', 'getProducts'])
  },
  created() {
    // this.getAllProducts()
    this.getProducts()
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
