<template>
  <dashboard-navbar></dashboard-navbar>
  <div class="container-fluid">
    <RouterView />
  </div>
</template>
<script>
import DashboardNavbar from '@/components/DashboardNavbar.vue'
export default {
  components: {
    'dashboard-navbar': DashboardNavbar
  },
  data() {
    return {}
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${import.meta.env.VITE_APP_API}api/user/check`
    this.$http.post(api).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  }
}
</script>
