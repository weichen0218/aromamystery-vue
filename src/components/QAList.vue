<template>
  <section class="py-5" id="qa" style="background-image: url(src/assets/image/bg_paper.png)">
    <div class="container">
      <h2 class="text-center mb-4">{{ qaTitle }}</h2>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="accordion accordion-flush" id="accordionPanels">
            <div class="accordion-item" v-for="(qa, index) in qaList" :key="index">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  :data-bs-toggle="'collapse'"
                  :data-bs-target="'#qa-' + (index + 1)"
                  :aria-expanded="{ true: index === 0 }"
                  :aria-controls="'qa-' + (index + 1)"
                >
                  <p class="mb-0">{{ qa.question }}</p>
                </button>
              </h2>
              <div :id="'qa-' + (index + 1)" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  <p class="mb-0">{{ qa.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      qaTitle: '常見問題',
      qaList: [
        {
          question: 'Q: 什麼是芳療師？',
          answer: '芳療師是一種專業人士，通過學習植物精油的特性和應用，幫助人們改善身體和心理健康的專業人士。他們使用精油進行按摩、熏香和其他治療方法，以促進身心平衡。'
        },
        {
          question: 'Q: 需要哪些知識背景才能成為芳療師？',
          answer: '成為芳療師通常需要對植物學、精油學、人體解剖學和生理學等相關領域有基本了解。這些知識將幫助你更好地了解精油的作用和影響。'
        },
        {
          question: 'Q: 這堂課需要有一定的知識背景才能上嗎？',
          answer: '我們提供的線上芳療師培訓課程，涵蓋基本概念、精油特性、使用方法和安全注意事項等，就算不具備有芳療背景也能輕鬆學習。'
        },
        {
          question: 'Q: 如何取得芳療師的資格？',
          answer: '成為合格的芳療師需要完成相應的培訓課程，並通過相關的認證考試。在我們的網站上，你將學習到必要的知識和技能，並在課程結束後有機會參加認證考試。'
        }
      ]
    }
  }
}
</script>
