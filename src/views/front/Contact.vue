<template>
  <section class="py-5" id="contact">
    <div class="container">
      <div class="contact-card py-5 rounded">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <h2 class="text-primary">讓我們知道你的想法</h2>
            <p>你的聯繫對我們而言非常重要，讓我們知道你的想法 <br />我們期待著與你保持聯繫！</p>
            <contact-form></contact-form>
          </div>
          <div class="col-md-6">
            <div class="text-center mb-5">
              <img src="@/assets/image/contact.png" class="img-fluid" style="max-height: 250px" alt="" />
            </div>

            <div class="d-flex flex-column">
              <div class="mx-auto">
                <h3 class="h4">客戶服務 | 技術支援</h3>
                <ul class="list-unstyled">
                  <li><i class="bi bi-envelope-fill me-2"></i>Aromamystery@email.com</li>
                  <li><i class="bi bi-telephone-fill me-2"></i>0987-654-321</li>
                </ul>
              </div>
            </div>
            <ul class="list-unstyled d-flex justify-content-center">
              <li>
                <a href="https://www.instagram.com/"><i class="bi bi-instagram display-5"></i></a>
              </li>
              <li class="mx-4">
                <a href="https://www.facebook.com/"><i class="bi bi-facebook display-5"></i></a>
              </li>
              <li>
                <a href="https://www.twitter.com/"><i class="bi bi-twitter-x display-5"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.bi-instagram {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bi-facebook {
  color: #0766ff;
}
.bi-twitter-x {
  color: #000;
}
.contact-card {
  /* background: #f4f2ef; */
}
</style>
<script>
import ContactForm from '@/components/ContactForm.vue'
export default {
  data() {
    return {}
  },
  components: { 'contact-form': ContactForm }
}
</script>
