<template>
  <li class="col">
    <div class="card card--float border-0 shadow h-100">
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
    </div>
  </li>
</template>
<style>
.spinner-grow-xs {
  width: 0.5rem;
  height: 0.5rem;
}
</style>
<script>
import cartStore from '@/stores/cartStore.js'
import statusStore from '@/stores/statusStore.js'
import { mapState, mapActions } from 'pinia'
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    headerClass: {
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
    features: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(statusStore, ['cartLoadingItem'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart'])
  },
  computed: {
    featureString() {
      return this.features.split('、')
    }
  }
}
</script>
