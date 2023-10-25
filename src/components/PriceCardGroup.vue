<template>
  <section class="container py-5" id="price">
    <h2 class="text-center mb-4">{{ priceTitle }}</h2>
    <ul class="row row-cols-1 row-cols-lg-3 g-3 g-lg-4 list-unstyled">
      <price-card
        v-for="(plan, index) in plans"
        :key="index"
        :id="plan.id"
        :title="plan.title"
        :header-class="plan.headerClass"
        :image="plan.image"
        :image-alt="plan.imageAlt"
        :price="plan.price"
        :features="plan.features"
      />
    </ul>
  </section>
</template>

<script>
import PriceCard from '@/components/PriceCard.vue'

export default {
  components: {
    PriceCard
  },
  data() {
    return {
      priceTitle: '方案費用',
      plans: [
        {
          id: 'plan01',
          title: '初階課程',
          headerClass: 'text-primary',
          image: 'src/assets/image/plan01.jpg',
          imageAlt: 'plan01-img',
          price: '1999',
          features: ['精油基礎知識', '精油的療效和用途', '安全使用精油守則', '精油品牌的選擇和評估']
        },
        {
          id: 'plan02',
          title: '中階課程',
          headerClass: 'bg-primary text-white',
          image: 'src/assets/image/plan02.jpg',
          imageAlt: 'plan02-img',
          price: '3999',
          features: ['認識人體七大脈輪', '精油成分深入探索', '特定情境下的應用', '自製按摩油和產品']
        },
        {
          id: 'plan03',
          title: '高階課程',
          headerClass: 'text-primary',
          image: 'src/assets/image/plan03.jpg',
          imageAlt: 'plan03-img',
          price: '6999',
          features: ['芳療心理學', '穴位按摩指導', '一對一芳療諮詢', '十大生理系統專論']
        }
      ]
    }
  }
}
</script>
