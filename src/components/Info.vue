<template>
  <section id="info">
    <div class="container py-5">
      <div class="row flex-row-reverse">
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <div>
            <h2 class="fw-bold">{{ infoTitle }}</h2>
            <p class="text-primary lh-lg" v-html="infoContent"></p>
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <img src="@/assets/image/info.jpg" alt="info-picture" class="w-100 w-lg-75" />
        </div>
      </div>
    </div>

    <div class="py-5 trouble-bg" id="trouble">
      <div class="container">
        <h2 class="text-center mb-4">{{ troubleTitle }}</h2>
        <ul class="row row-cols-1 row-cols-lg-4 g-3 g-lg-4 list-unstyled">
          <info-card v-for="(item, index) in items" :key="index" :icon-class="item.iconClass" :title="item.title" :description="item.description"></info-card>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import InfoCard from './InfoCard.vue'

export default {
  components: {
    InfoCard
  },
  data() {
    return {
      infoTitle: '讓我們幫你節省寶貴的時間',
      infoContent: `我們的專家團隊擁有多年的精油研究和實踐經驗，<br class="d-none d-sm-block" />
              將帶領你探索精油的各個層面。<br class="d-none d-sm-block" />
              課程提供高質量的學習資料、影片示範和互動環節，<br class="d-none d-sm-block" />
              確保你能夠輕鬆學習並掌握知識。<br class="d-none d-sm-block" />
              你可以隨時隨地在線學習，無需擔心時間和地點的限制，<br class="d-none d-sm-block" />
              讓學習融入你的生活。`,
      troubleTitle: '你有這些煩惱嗎？',
      items: [
        {
          iconClass: 'bi bi-journal-x fs-s-48 text-primary',
          title: '缺乏精油知識',
          description: '網路上有很多精油資訊，不知道從何開始學習'
        },
        {
          iconClass: 'bi bi-eyedropper fs-s-48 text-primary',
          title: '不會調配精油',
          description: '初學者不熟悉精油的安全使用方法，可能會擔心使用不當導致不良反應。'
        },
        {
          iconClass: 'bi bi-shop fs-s-48 text-primary',
          title: '不會挑選精油',
          description: '精油種類眾多，初學者不知道該選擇哪些精油，以及如何區分它們的用途和特性'
        },
        {
          iconClass: 'bi bi-emoji-dizzy fs-s-48 text-primary',
          title: '不會分辨真假',
          description: '市場上有許多假冒產品，無法辨別出高品質的精油'
        }
      ]
    }
  }
}
</script>
<style scoped>
.trouble-bg {
  background-image: url(src/assets/image/bg_paper.png);
}
</style>
