import { defineStore } from 'pinia'
import Offcanvas from 'bootstrap/js/dist/offcanvas'

export default defineStore('uiStore', {
  state: () => ({
    offcanvas: null
  }),
  actions: {
    newOffcanvasInstance(domElement) {
      this.offcanvas = new Offcanvas(domElement)
    },
    openOffcanvas() {
      this.offcanvas.show()
    },
    closeOffcanvas() {
      this.offcanvas.hide()
    },
    toggleOffcanvas() {
      this.offcanvas.toggle()
    }
  }
})
