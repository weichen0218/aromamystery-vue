<template>
  <!-- <dashboard-navbar></dashboard-navbar>
   -->
  <div class="container-fluid row g-0 min-vh-100 bg-dark">
    <div class="col-lg-2 text-light">
      <nav class="navbar navbar-dark navbar-expand-lg bg-dark p-3 d-flex flex-lg-column align-items-start">
        <router-link to="/" target="_blank" class="navbar-brand fs-6 fw-light">Aromamystery</router-link>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav-collapse">
          <i class="navbar-toggler-icon"></i>
        </button>
        <div class="collapse navbar-collapse" id="nav-collapse">
          <ul class="navbar-nav d-flex flex-column mt-lg-4">
            <li class="nav-item">
              <router-link class="nav-link px-0" to="/admin/products">商品管理</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link px-0" to="/admin/coupons">優惠券管理</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link px-0" to="/admin/orders">訂單管理</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="col-lg-10 bg-light min-vh-100 shadow-md">
      <nav class="p-3 bg-white d-flex justify-content-between align-items-center" style="--bs-breadcrumb-divider: '>'">
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item">後台管理</li>
          <li class="breadcrumb-item active">{{ page }}</li>
        </ol>
        <span class="ms-auto me-3" :class="status === '登入中' ? 'text-success' : 'text-danger'">
          {{ status }}
        </span>
        <button type="button" class="btn btn-sm btn-gray" @click="logout">登出</button>
      </nav>
      <RouterView />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      status: '',
      page: ''
    }
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
  },
  watch: {
    $route() {
      this.page = this.$route.meta.title
    }
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${import.meta.env.VITE_APP_API}/api/user/check`
    this.$http.post(api).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login')
      } else {
        this.status = res.data.message || '登入中'
        this.page = this.$route.meta.title
      }
    })
  }
}
</script>
