<template>
  <div class="enable-filter">
    <div class="label">{{ label }}</div>
    <div class="toggle">
      <Toggle @enable-filter="enableFilter" :value="enable"/>
    </div>
  </div>
</template>
<script>
import { computed } from '@vue/composition-api'
import Toggle from './Toggle.vue'
export default {
  components: {
    Toggle
  },
  props: {
    label: {
      type: String
    },
    module: {
      type: String
    }
  },
  setup (props, { root }) {
    const enableFilter = (value) => {
      root.$store.dispatch(`enableFilters/fetch_${props.module}`, value)
    }
    const enable = computed(() => root.$store.state.enableFilters[props.module])

    return {
      enable,
      enableFilter
    }
  }
}
</script>
<style scoped>
.enable-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
}
</style>
