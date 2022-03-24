<template>
  <div>
    <h1>{{ name }}</h1>
    <div class="div-test">
      <span>New name</span>
      <input v-model="newName" type="text">
    </div>
    <div>
      <span>reactive: {{ newName }}</span>
      <button @click="changeName">Change name</button>
    </div>
    <div class="div-test">
      <span>Compteur: </span>
      <span>{{ compter }}</span>
      <button @click="increase">Increase</button>
    </div>
    <button @click="reset">Reset</button>

    <font-awesome-icon icon="fa-solid fa-apple-whole" />
    <Toggle />
  </div>
</template>

<script>
import Toggle from '@/components/Toggle.vue'
import { computed, ref } from '@vue/composition-api'
export default {
  components: {
    Toggle
  },
  setup (_, { root }) {
    const compter = ref(0)
    const newName = ref('')
    const name = computed(() => root.$store.state.filters.name)

    const changeName = () => {
      root.$store.dispatch('filters/fetchName', newName.value)
    }

    const reset = () => {
      root.$store.dispatch('filters/resetName')
      newName.value = ''
      compter.value = 0
    }

    const increase = () => {
      compter.value += 1
    }

    return {
      name,
      changeName,
      reset,
      compter,
      increase,
      newName
    }
  }
}
</script>

<style lang="css" scoped>
.div-test {
  margin: 1rem;
}
</style>
