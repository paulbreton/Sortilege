<template>
  <div>
    <Nav />
    <div class="container-page">
      <!-- injection des composants dans le slot -->
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
