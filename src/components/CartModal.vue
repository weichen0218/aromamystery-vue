<template>
  <div class="modal cart-modal" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center pb-0">
          <i class="fa-regular fa-circle-check fs-1 d-block mb-2" style="color: #b0db7d"></i>
          商品已加入您的購物車！
        </div>
        <div class="modal-footer border-0 justify-content-center">
          <button type="button" class="btn btn-successlight text-white" data-bs-dismiss="modal">繼續購物</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '../mixins/modalMixins'

export default {
  data() {
    return {
      modal: ''
    }
  },
  mixins: [modalMixins]
}
</script>
