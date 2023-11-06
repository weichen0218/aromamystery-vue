<template>
  <div class="row align-items-center">
    <div class="col-lg-4 text-center mb-4 mb-lg-0">
      <img :src="person.image" alt="person-image" class="img-fluid rounded-circle" width="200" height="200" />
      <h4 class="text-muted mt-2">{{ person.name }}</h4>
    </div>
    <div class="col-lg-8">
      <ul class="list-unstyled text-warning mb-1 d-flex justify-content-center justify-content-lg-start">
        <li v-for="n in 5" :key="n"><i class="bi bi-star-fill"></i></li>
      </ul>
      <p class="text-muted mb-0 text-start">{{ person.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>
