<template>
  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center pb-0">
          <i class="bi bi-box-arrow-in-right fs-1 d-block mb-2"></i>
          請先登入會員
        </div>
        <div class="modal-footer border-0 justify-content-center">
          <button type="button" class="login btn btn-success text-white" data-bs-dismiss="modal">登入會員</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data() {
    return {
      modal: null
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal)
  },
  methods: {
    show() {
      this.modal.show()
    },
    hide() {
      this.modal.hide()
    }
  }
}
</script>
