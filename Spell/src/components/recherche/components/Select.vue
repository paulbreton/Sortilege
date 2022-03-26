<template>
  <select :value="valueSelect" @input="handleSelect">
    <option v-for="(option, index) in options" :key="index">{{ option }}</option>
  </select>
</template>
<script>
import { ref, watch } from '@vue/composition-api'
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      require: false,
      default: ''
    }
  },
  setup (props, { emit }) {
    const handleSelect = (option) => {
      emit('handle-select', option.target.value)
    }

    const valueSelect = ref(null)

    watch(
      () => props.value,
      () => {
        valueSelect.value = props.value
      },
      { immediate: true }
    )

    return {
      handleSelect,
      valueSelect
    }
  }
}
</script>
<style scoped>
select {
  width: 100%;
}
</style>
