<template>
  <div class="col-md-6 col-lg-4">
    <!-- <div class="card card--float border-0 shadow h-100">
      <div class="card-header border-0 text-center" :class="headerClass">
        {{ title }}
      </div>
      <div class="card-body text-center">
        <img :src="image" :alt="imageAlt" class="img-fluid object-fit-cover" />
        <div class="text-primary mt-3">
          NT <strong class="fs-1">{{ price }}</strong> /堂
        </div>
      </div>
      <ul class="list-group list-group-flush border-top border-bottom">
        <li class="list-group-item text-quaternary" v-for="(feature, index) in featureString" :key="index"><i class="bi bi-check-circle-fill text-primary me-2"></i>{{ feature }}</li>
      </ul>
      <div class="card-body d-flex">
        <button @click="addToCart(id)" :disabled="id === cartLoadingItem" :id="id" :name="title" type="button" class="btn btn-primary text-white w-100 align-self-end">
          選擇方案
          <div v-if="id === cartLoadingItem" class="spinner-grow spinner-grow-xs text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </button>
      </div>
    </div> -->
    <div class="card price-card h-100 shadow">
      <div class="card-img-top" @click="$router.push(`/product/${id}`)">
        <img :src="image" :alt="imageAlt" class="price-card-img img-fluid object-fit-cover" />
        <div class="card-img-overlay d-flex align-items-center justify-content-center">
          <h5 class="card-title text-center text-white fs-4">查看更多</h5>
        </div>
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text text-muted flex-grow-1">{{ content }}</p>
        <div class="product-price align-self-end">
          <span class="text-danger fw-bold fs-3">${{ $cash(price) }}&nbsp;</span><del>${{ $cash(origin_price) }}</del>
        </div>

        <button @click="addToCart(id)" :disabled="id === cartLoadingItem" :id="id" :name="title" type="button" class="btn btn-primary text-white w-100 mt-auto">
          選擇方案
          <Spinner v-if="id === cartLoadingItem" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'
import cartStore from '@/stores/cartStore.js'
import statusStore from '@/stores/statusStore.js'
import { mapState, mapActions } from 'pinia'
export default {
  components: { Spinner },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    origin_price: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState(statusStore, ['cartLoadingItem'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart'])
  }
}
</script>
