<template>
  <div>
    <Nav />
    <div class="container-page">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>
