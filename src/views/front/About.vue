<template>
  <section id="about" class="px-4 py-5 d-flex justify-content-center align-items-center min-vh-75 banner">
    <div class="text-box">
      <h1 class="fw-bold hero-primary">芳香秘境，生活寧靜</h1>
    </div>
  </section>
  <div class="container">
    <div class="px-4 py-5">
      <div class="row mb-5 about-session1">
        <div class="col-12 col-lg-6 p-5 d-flex justify-content-center">
          <img src="@/assets/image/about01.jpg" alt="about-picture" class="img-fluid rounded" />
        </div>
        <div class="col-12 col-lg-6 p-5 py-md-0 d-flex flex-column justify-content-center">
          <h3 class="text-primary mb-3">我們的故事</h3>
          <p>我們是一群對自然療法和身心靈平衡深具熱情的夥伴。我們相信大自然的恩賜，尤其是來自植物的精油，能夠為人們帶來身心的寧靜和能量。</p>
          <p>從最初的小工作坊開始，我們就吸引了一群志同道合的學生。隨著時間的推移，我們不僅培育出許多優秀的學員，更見證了他們在自然療法和身心靈平衡領域的成長。</p>
        </div>
      </div>
      <div class="row flex-md-row-reverse about-session2">
        <div class="col-12 col-lg-6 p-5 d-flex justify-content-center">
          <img src="@/assets/image/about02.jpg" alt="about-picture" class="img-fluid rounded" />
        </div>
        <div class="col-12 col-lg-6 p-5 py-md-0 d-flex flex-column justify-content-center">
          <h3 class="text-primary mb-3">教學理念</h3>
          <p>我們不僅教學基本的精油應用技巧，還鼓勵學生發揮創意，將香氛融入生活的方方面面。這包括製作自己的香氛產品、設計個性化的香氛噴霧，或是創建個人香氣配方。</p>
          <p>學生將有機會參與社群分享活動，互相交流心得和創意。透過這種互動，不僅可以擴充使用精油的想法，還能在社群中感受到正面能量的共鳴。</p>
        </div>
      </div>
    </div>
    <div class="px-4 py-5">
      <div class="row d-flex justify-content-center our-team1">
        <div class="col-md-10 col-xl-8 text-center">
          <h3 class="mb-4 text-primary">我們的團隊</h3>
          <p class="mb-4 pb-2 mb-md-5 pb-md-0">
            我們的教學團隊擁有多元的專業背景，包括藥學、芳療治療、生態學等領域。這不僅保證了我們的課程的專業性，更為學員提供了多元的學習視角，讓你能夠全面了解精油的奧妙。
          </p>
        </div>
      </div>

      <div class="row text-center d-flex align-items-stretch our-team2">
        <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
          <div class="card testimonial-card">
            <div class="card-up" style="background-color: #ffd299"></div>
            <div class="avatar mx-auto bg-white">
              <img src="@/assets/image/avatar01.svg" class="rounded-circle img-fluid" />
            </div>
            <div class="card-body">
              <h4 class="mb-2">艾莉亞</h4>
              <h6 class="career text-primary mb-3">芳療治療師</h6>
              <hr />
              <p class="dark-grey-text mt-4">艾莉亞擁有超過十年的臨床經驗。曾在多個健康中心和社區機構提供芳療服務。</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
          <div class="card testimonial-card">
            <div class="card-up" style="background-color: #ff7f50"></div>
            <div class="avatar mx-auto bg-white">
              <img src="@/assets/image/avatar02.svg" class="rounded-circle img-fluid" />
            </div>
            <div class="card-body">
              <h4 class="mb-2">梅莉莎</h4>
              <h6 class="career text-primary mb-3">臨床藥劑師</h6>
              <hr />
              <p class="dark-grey-text mt-4">梅莉莎擁有豐富的藥學背景。可以提供更全面的健康解決方案，並給予實用的建議。</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-0 d-flex align-items-stretch">
          <div class="card testimonial-card">
            <div class="card-up" style="background-color: #dd6236"></div>
            <div class="avatar mx-auto bg-white">
              <img src="@/assets/image/avatar03.svg" class="rounded-circle img-fluid" />
            </div>
            <div class="card-body">
              <h4 class="mb-2">蕾拉</h4>
              <h6 class="career text-primary mb-3">心理學與情緒健康專家</h6>
              <hr />
              <p class="dark-grey-text mt-4">蕾拉專注於精油在情緒調節上的應用，擁有臨床心理學碩士學位。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.banner {
  background-image: url('/image/banner01.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}
.text-box {
  width: 450px;
  height: 150px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 50px;
}
.testimonial-card .card-up {
  height: 120px;
  overflow: hidden;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.testimonial-card .avatar {
  width: 110px;
  margin-top: -60px;
  overflow: hidden;
  border: 3px solid #fff;
  border-radius: 50%;
}
.career {
  letter-spacing: 2px;
}
</style>
<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger)
export default {
  mounted() {
    const text = new SplitType('.hero-primary')
    gsap.set('.hero-primary', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' })
    gsap.set('.char', { y: 100 })
    gsap.to('.char', { y: 0, stagger: 0.1, delay: 0.2, duration: 0.5 })
    gsap.set('.about-session1', { opacity: 0, x: 100 })
    gsap.to('.about-session1', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.about-session1',
        start: 'top 60%',
        end: 'top 20%',
        scrub: true,
        once: true
      }
    })
    gsap.set('.about-session2', { opacity: 0, x: -100 })
    gsap.to('.about-session2', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.about-session2',
        start: 'top 60%',
        end: 'top 20%',
        scrub: true,
        once: true
      }
    })
    gsap.set('.our-team1', { opacity: 0, y: 100 })
    gsap.to('.our-team1', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.our-team1',
        start: 'top 60%',
        end: 'top 20%',
        scrub: true,
        once: true
      }
    })
    gsap.set('.our-team2', { opacity: 0, y: 100 })
    gsap.to('.our-team2', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.our-team2',
        start: 'top 40%',
        end: 'top 20%',
        scrub: true,
        markers: true,
        once: true
      }
    })
  }
}
</script>
