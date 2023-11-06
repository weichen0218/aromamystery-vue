<template>
  <section class="py-5" id="contact">
    <div class="container">
      <div class="contact-card py-5 rounded">
        <h2 class="text-center mb-4">聯絡我們</h2>
        <div class="row justify-content-center flex-row-reverse gy-5">
          <contact-form></contact-form>
          <div class="col-md-6 col-lg-5">
            <p>現在就報名加入我們，探索芳療的獨特魅力！</p>
            <h3 class="h4">聯絡方式</h3>
            <ul class="list-unstyled">
              <li v-for="(item, index) in contacts" :key="index"><i :class="item.iconClass + ' me-2'"></i>{{ item.text }}</li>
            </ul>
            <h3 class="h4 mt-5">社群關注</h3>
            <ul class="list-unstyled">
              <li v-for="(item, index) in socialMedia" :key="index"><i :class="item.iconClass + ' me-2'"></i>{{ item.text }}</li>
            </ul>
            <p id="copyright">2023 &copy; 芳香秘境｜Designed By 劉韋辰</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.contact-card {
  background: var(--bs-primary-bg-subtle);
}
</style>
<script>
import ContactForm from '@/components/ContactForm.vue'
export default {
  data() {
    return {
      contacts: [
        { iconClass: 'bi bi-envelope', text: 'Aromamystery@email.com' },
        { iconClass: 'bi bi-telephone', text: '0987-654-321' }
      ],
      socialMedia: [
        { iconClass: 'bi bi-instagram', text: '@Aromamystery' },
        { iconClass: 'bi bi-facebook', text: 'fb.me/Aromamystery' },
        { iconClass: 'bi bi-twitter', text: 'Aromamystery' }
      ]
    }
  },
  components: { 'contact-form': ContactForm }
}
</script>
