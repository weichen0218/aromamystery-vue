import { defineStore } from 'pinia'

export default defineStore('statusStore', {
  state: () => ({
    isLoading: false,
    cartLoadingItem: '',
    messages: []
  }),
  actions: {
    pushMessage(data) {
      const { style, title, content } = data
      this.messages.push({ style, title, content })
    },
    resetMessage() {
      this.messages = []
    }
  }
})
