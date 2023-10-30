<template>
  <li class="col">
    <div class="card card-float border-0 shadow h-100">
      <div class="card-body text-center py-4 h-100">
        <i :class="iconClass"></i>
        <h3 class="h4">{{ title }}</h3>
        <p class="text-quaternary card-text lh-lg">{{ description }}</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    iconClass: String,
    title: String,
    description: String
  }
}
</script>
