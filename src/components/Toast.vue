<template>
  <div class="toast align-items-center border-0" :class="`toast-${msg.style}`" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="d-flex">
      <div class="toast-body">{{ msg.title }}</div>
      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'
export default {
  name: 'Toast',
  props: ['msg'],
  mounted() {
    const toastEl = this.$refs.toast
    const toast = new Toast(toastEl, { delay: 2000 })
    toast.show()
  }
}
</script>
