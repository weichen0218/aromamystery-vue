<template>
  <nav class="navbar navbar-expand-lg" id="navbar">
    <!-- container-fluid -->
    <div class="container">
      <div>
        <img src="src/assets/image/logo.svg" alt="logo" class="me-1 d-none d-lg-inline" style="height: 30px" />
        <a class="navbar-brand text-tertiary align-bottom" href="#">芳香秘境</a>
      </div>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">商品列表</a>
          </li>
          <li class="nav-item mx-2">
            <a @click.prevent="logout" class="nav-link" href="#">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      const api = `${import.meta.env.VITE_APP_API}/logout`
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.push('/login')
        } else {
          alert(res.data.message)
        }
      })
    }
  }
}
</script>
