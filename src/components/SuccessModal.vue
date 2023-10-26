<template>
  <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title fs-5" id="exampleModalLabel">親愛的客戶<i class="bi bi-heart-fill text-danger ms-2"></i></h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-start">
          我們非常感謝您撥冗給予寶貴的回饋。您的意見對於我們不僅僅是一份寶貴的資源，更是我們不斷進步的動力。如果您還有任何想法、建議或疑問，請隨時與我們聯繫。我們非常期待能夠持續為您提供優質的服務。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-tertiarylight" data-bs-dismiss="modal">
            <p class="mb-0 text-white">關閉</p>
          </button>
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
