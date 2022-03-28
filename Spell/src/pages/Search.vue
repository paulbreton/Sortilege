<template>
  <div>
    <Search @results="results"/>
    <Results :results="data"/>
  </div>
</template>
<script>
import Resultats from '@/components/resultats/Results'
import Search from '@/components/recherche/Search'
import { ref } from '@vue/composition-api'
export default {
  components: {
    Search,
    Results: Resultats
  },
  setup () {
    const data = ref([])
    const results = (res) => { data.value = res }

    return {
      data,
      results
    }
  }
}
</script>
