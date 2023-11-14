<template>
  <Loading :active="isLoading"></Loading>
  <section class="container py-5" id="product">
    <h2 class="text-center mb-4">所有課程</h2>
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
</template>
<script>
import PriceCard from '@/components/PriceCard.vue'
import productStore from '@/stores/productStore.js'
import statusStore from '@/stores/statusStore.js'
import { mapState, mapActions } from 'pinia'
import gsap from 'gsap'
export default {
  components: {
    'price-card': PriceCard
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(statusStore, ['isLoading']),
    ...mapState(productStore, ['sortProducts'])
  },
  methods: {
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
