<template>
  <section class="py-5" id="share">
    <div class="container">
      <h2 class="text-center mb-4">案例分享</h2>
      <div id="testimonial" class="carousel slide">
        <!-- data-bs-ride="carousel" -->
        <div class="carousel-indicators mb-0">
          <button type="button" v-for="(index, buttonIndex) in buttons" :key="buttonIndex" :data-bs-target="'#testimonial'" :data-bs-slide-to="index" class="bg-primary" :class="{ active: index === 0 }" :aria-current="{ true: index === 0 }" :aria-label="`Slide ${index + 1}`"></button>
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
        <button class="carousel-control-prev" type="button" data-bs-target="#testimonial" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bg-primary rounded-circle" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#testimonial" data-bs-slide="next">
          <span class="carousel-control-next-icon bg-primary rounded-circle" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import ShareCard from '@/components/ShareCard.vue'
export default {
  components: {
    'share-card': ShareCard
  },
  data() {
    return {
      buttons: [0, 1, 2, 3, 4],
      persons: [
        {
          image: 'src/assets/image/person01.jpg',
          description: '霏婷原本是一位自學的芳療愛好者，通過閱讀書籍和在線資源，學習基本的芳療知識。然而，她想將這個愛好發展為職業。通過參加我們的線上芳療課程，她學到了更深入的知識，了解了精油的科學背景、安全使用方法和專業技能。現在，霏婷成為了一名受人尊敬的芳療師，並且在社區中開設了自己的芳療諮詢服務。'
        },
        {
          image: 'src/assets/image/person02.jpg',
          description: '婷娜曾經長期處於壓力和焦慮中，尋求著自然的方法來改善她的健康狀況。她通過朋友的介紹，找到了我們的線上芳療課程。在課程中，她學到了如何使用精油來減輕壓力和焦慮，並開始在日常生活中實踐這些技巧。她不僅改善了自己的健康狀況，還幫助許多人。現在，她是一名專業的芳療師。'
        },
        {
          image: 'src/assets/image/person03.jpg',
          description: '雅露是一位瑜伽老師，她一直尋求著將瑜伽和自然療法相結合的方法。她參加了我們的線上芳療課程，以增強自己的專業知識。這使她能夠在瑜伽課程中融入芳療元素，通過精油的香氣和療效來加強學生的瑜伽體驗。她還開始提供芳療治療服務，幫助客戶實現身心靈的平衡。'
        },
        {
          image: 'src/assets/image/person04.jpg',
          description: '悦婷是一位忙碌的家庭主婦，她一直渴望擁有自己的事業。她參加了我們的線上芳療課程，以尋找一個能夠在家工作的機會。通過課程，她學到了如何製作精油產品，並開始在社交媒體上展示她的作品。很快，她的自製芳療產品受到了廣泛的歡迎，她成功地開始了自己的在線芳療事業。'
        },
        {
          image: 'src/assets/image/person05.jpg',
          description: '拉斯是一名按摩師，他想要擴展自己的技能並提供更多多樣化的治療選項。他參加了我們的線上芳療課程，並學到了如何在按摩療法中使用精油來增強療效。這使他的按摩服務更加多樣化並受到了客戶的喜愛。他現在被認為是一名芳療專家，綜合運用了按摩和芳療的知識，為客戶提供全面的綜合治療。'
        }
      ]
    }
  }
}
</script>
