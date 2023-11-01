<template>
  <section class="container py-5" id="product">
    <h2 class="text-center mb-4">所有課程</h2>
    <ul class="category list-unstyled d-flex justify-content-center mb-4">
      <li class="btn btn-outline-primary p-0 active"><a aria-current="page" href="#/products?category=all&amp;page=1" class="router-link-active active px-3 px-md-4 py-1"> 全部課程 </a></li>
      <li class="btn btn-outline-primary p-0 ms-1"><a aria-current="page" href="#/products?category=%E9%BA%B5%E5%8C%85&amp;page=1" class="router-link-active active px-3 px-md-4 py-1">初階課程</a></li>
      <li class="btn btn-outline-primary p-0 ms-1"><a aria-current="page" href="#/products?category=%E8%9B%8B%E7%B3%95&amp;page=1" class="router-link-active active px-3 px-md-4 py-1">中階課程</a></li>
      <li class="btn btn-outline-primary p-0 ms-1"><a aria-current="page" href="#/products?category=%E9%A4%85%E4%B9%BE&amp;page=1" class="router-link-active active px-3 px-md-4 py-1">進階課程</a></li>
    </ul>
    <!-- <ul class="category list-unstyled d-flex justify-content-center mt-4">
      <li class="btn btn-outline-primary p-0" :class="isActive === 'all' ? 'active' : ''" @click="filterProducts(1, 'all'), (isActive = 'all')" v-if="products.length > 0">
        <router-link class="px-3 px-md-4 py-1" :to="{ query: { category: 'all', page: 1 } }"> 全部 </router-link>
      </li>
      <li class="btn btn-outline-primary p-0 ms-1" v-for="(item, i) in category" :key="i" :class="isActive === item ? 'active' : ''" @click="filterProducts(1, item), (isActive = item)">
        <router-link class="px-3 px-md-4 py-1" :to="{ query: { category: item, page: 1 } }">
          {{ item }}
        </router-link>
      </li>
    </ul> -->
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
  </section>
  <!-- <button @click="addToCart(id)" :disabled="id === cartLoadingItem" :id="id" :name="title" type="button" class="btn btn-primary text-white w-100 align-self-end">
    選擇方案
    <div v-if="id === cartLoadingItem" class="spinner-grow spinner-grow-xs text-light" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </button> -->
</template>
<script>
import PriceCard from '@/components/PriceCard.vue'
import productStore from '@/stores/productStore.js'
import { mapState, mapActions } from 'pinia'
export default {
  components: {
    'price-card': PriceCard
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(productStore, ['sortProducts'])
  },
  methods: {
    ...mapActions(productStore, ['GetAllProducts'])
  },
  created() {
    this.GetAllProducts()
  }
}
</script>
