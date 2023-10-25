<template>
  <section class="bg-primary py-5 text-white" id="contact">
    <div class="container">
      <h2 class="text-center mb-4">{{ contactTitle }}</h2>
      <div class="row justify-content-center flex-row-reverse gy-5">
        <contact-form></contact-form>
        <div class="col-md-6 col-lg-5">
          <p>{{ slogan }}</p>
          <h3 class="h4">{{ contactTitle }}</h3>
          <ul class="list-unstyled">
            <li v-for="(contact, index) in contacts" :key="index"><i :class="contact.iconClass + ' me-2'"></i>{{ contact.text }}</li>
          </ul>
          <h3 class="h4 mt-5">{{ socialTitle }}</h3>
          <ul class="list-unstyled">
            <li v-for="(social, index) in socials" :key="index"><i :class="social.iconClass + ' me-2'"></i>{{ social.text }}</li>
          </ul>
          <p>{{ copyright }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
export default {
  components: {
    'contact-form': ContactForm
  },
  data() {
    return {
      contactTitle: '聯絡我們',
      lastname: '',
      lastnameValid: null,
      firstname: '',
      firstnameValid: null,
      email: '',
      emailValid: null,
      message: '',
      messageValid: null
    }
  },
  watch: {
    lastname(value) {
      this.lastnameValid = value.trim() !== ''
    },
    firstname(value) {
      this.firstnameValid = value.trim() !== ''
    },
    email(value) {
      this.emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    },
    message(value) {
      this.messageValid = value.trim() !== ''
    }
  },
  computed: {
    lastnameValid() {
      return this.lastname !== ''
    },
    firstnameValid() {
      return this.firstname !== ''
    },
    emailValid() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
    },
    messageValid() {
      return this.message !== ''
    }
  },
  methods: {
    submitForm() {
      if (this.isFormValid) {
        this.feedbackResult
          .then((result) => {
            console.log(result)
            alert('表單已送出')
          })
          .catch((error) => {
            console.error(error)
            alert('表單送出失敗')
          })
      }
    }
  },
  props: {
    slogan: {
      type: String,
      default: '現在就報名加入我們，探索芳療的獨特魅力！'
    },
    contactTitle: {
      type: String,
      default: '聯絡方式'
    },
    contacts: {
      type: Array,
      default: () => [
        { iconClass: 'bi bi-envelope', text: 'Aromamystery@email.com' },
        { iconClass: 'bi bi-telephone', text: '0987-654-321' }
      ]
    },
    socialTitle: {
      type: String,
      default: '社群關注'
    },
    socials: {
      type: Array,
      default: () => [
        { iconClass: 'bi bi-instagram', text: '@Aromamystery' },
        { iconClass: 'bi bi-facebook', text: 'fb.me/Aromamystery' },
        { iconClass: 'bi bi-twitter', text: 'Aromamystery' }
      ]
    },
    copyright: {
      type: String,
      default: '2023 &copy; 芳香秘境｜Designed By 劉韋辰'
    }
  }
}
</script>
