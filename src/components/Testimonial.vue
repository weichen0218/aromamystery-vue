<template>
  <h2 class="text-center mb-4">學員分享</h2>
  <div id="carousel" class="carousel slide" ref="carousel">
    <div class="carousel-indicators mb-0">
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="bg-primary active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" class="bg-primary" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" class="bg-primary" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" class="bg-primary" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="4" class="bg-primary" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item" :class="{ active: index === 0 }" v-for="(person, index) in persons" :key="index">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="card border-0">
              <div class="card-body m-3">
                <share-card :person="person"></share-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon bg-primary rounded-circle" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon bg-primary rounded-circle" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import Carousel from 'bootstrap/js/dist/carousel'
import ShareCard from '@/components/ShareCard.vue'
export default {
  components: {
    'share-card': ShareCard
  },
  data() {
    return {
      Carousel: null,
      buttons: [0, 1, 2, 3, 4],
      persons: [
        {
          image: '/image/person01.jpg',
          name: '霏婷',
          description:
            '當初，我是一位自學的芳療愛好者。透過閱讀書籍和線上資源，我努力學習了一些基本的芳療知識。然而，我一直想把這份愛好轉化為我的職業。參加了一個線上的芳療課程後，我的知識得到了更深層次的擴展，我開始理解精油背後的科學原理、安全使用的方法，以及一些專業技能。'
        },
        {
          image: '/image/person02.jpg',
          name: '婷娜',
          description:
            '曾經，我長時間深陷於壓力和焦慮的漩渦中，迫切尋找著自然的解決方法來改善我的健康。透過朋友的介紹，我發現了一個線上芳療課程，而這成為我轉變的契機。在課程中，我學到了如何運用精油來緩解壓力和焦慮，並開始在日常生活中實踐這些技巧。'
        },
        {
          image: '/image/person03.jpg',
          name: '雅露',
          description:
            '我是一位瑜伽老師，我一直在追求將瑜伽和自然療法相融合的方法。我透過這個課程將芳療元素融入我的瑜伽課堂，利用精油的香氣和療效來提升學生的瑜伽體驗。現在，我不僅在瑜伽課程中傳授這些美好的經驗，還開始在社區中提供芳療治療服務。'
        },
        {
          image: '/image/person04.jpg',
          name: '悦婷',
          description:
            '一直以來，我都是一位忙碌的家庭主婦，然而內心一直懷抱著擁有自己事業的渴望。為了實現這個夢想，我參加了線上芳療課程。過程中我學到了如何製作精油產品，並開始在社交媒體上展示我的作品。這讓我不僅受到了廣泛的討論，也成功實現了在家工作的夢想。'
        },
        {
          image: '/image/person05.jpg',
          name: '拉斯',
          description:
            '我是一位具有三年經驗的按摩師，我一直渴望擴展自己的技能，提供多樣化的治療選項。因此，我參加了線上芳療課程，學到了如何在按摩療法中巧妙運用精油，以增強療效。這項新的技能讓我的按摩服務更加多元化，也受到了客戶的喜愛。'
        }
      ]
    }
  },
  methods: {
    slidePrev() {
      this.Carousel.prev()
    },
    slideNext() {
      this.Carousel.next()
    },
    slideTo(val) {
      console.log('val:', val)
      console.log('this.Carousel:', this.Carousel)
      this.Carousel.to(val)
    }
  },
  mounted() {
    this.Carousel = new Carousel(this.$refs.carousel)
  }
}
</script>
