import { defineStore } from 'pinia'
import Lenis from '@studio-freight/lenis'
export default defineStore('lenisStore', {
  state: () => ({
    lenis: null
  }),
  actions: {
    initLenis() {
      this.lenis = new Lenis()
      this.lenis.on('scroll', (e) => {
        // console.log(e)
      })
      const raf = (time) => {
        this.lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    },
    openLenis() {
      this.lenis.on('scroll', (e) => {})
    },
    closeLenis() {
      this.lenis.off('scroll', (e) => {})
    }
  }
})
// const lenis = new Lenis()
// lenis.on('scroll', (e) => {
//   console.log(e)
// })
// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }
// requestAnimationFrame(raf)
