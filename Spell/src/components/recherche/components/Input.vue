<template>
  <input :value="value" @input="handleInput"/>
</template>
<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  setup (_, { emit }) {
    const handleInput = (value) => emit('handle-input', value.target.value)

    return {
      handleInput
    }
  }
}
</script>
<style scoped>
input {
  width: -webkit-fill-available;
}
</style>
