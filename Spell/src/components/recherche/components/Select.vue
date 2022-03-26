<template>
  <select v-model="valueSelect">
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
      emit('handle-select', option)
    }

    const valueSelect = ref(props.value)

    watch(
      () => props.value,
      () => { valueSelect.value = props.value }
    )

    watch(
      () => valueSelect.value,
      () => { handleSelect(valueSelect.value) }
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
