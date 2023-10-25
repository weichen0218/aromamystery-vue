import { defineStore } from 'pinia'
export default defineStore('modalStore', {
  state: () => ({
    modals: []
  }),
  actions: {
    addModal(modal) {
      this.modals.push(modal)
    },
    openModal() {
      this.modals.show()
    }
    // closeModal() {
    //   this.$pinia.state.modalStore.showModal = false
    // }
  },
  getters: {}
})
