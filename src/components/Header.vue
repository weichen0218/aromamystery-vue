<template>
  <section
    id="home"
    class="header header-bg px-4 py-5 d-flex justify-content-center align-items-center"
  >
    <div class="text-center text-white">
      <p class="fs-5">{{ title }}</p>
      <h1 class="fw-bold">{{ subtitle }}</h1>
      <p class="line-break">{{ content }}</p>
    </div>
  </section>
</template>

<style>
.line-break {
  white-space: pre-line;
}
</style>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: '你是不是也有夢想',
      subtitle: '想成為一位芳療師',
      content:
        '你是否渴望在繁忙的現代生活中找到一份舒緩和平靜？\n我們的精油課程將帶你進入精油的奇妙世界，\n讓你從中獲得健康、平衡和幸福。'
    }
  }
}
</script>
