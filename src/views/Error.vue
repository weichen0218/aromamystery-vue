<template>
  <div class="container-fluid error">
    <div class="container min-vh-100 d-flex">
      <div class="row">
        <img src="/image/404.svg" class="img-fluid col-md-8" alt="" />
        <div class="hero-text-box align-self-center col-md-4">
          <h1 class="fw-bold text-primary">哎呀！</h1>
          <h2 class="fw-bold text-primary mb-5">這個頁面好像躲起來了！</h2>
          <p class="fs-5">讓我們回首頁重新再來吧！</p>
          <router-link class="btn btn-primary text-white rounded" to="/">回首頁</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
