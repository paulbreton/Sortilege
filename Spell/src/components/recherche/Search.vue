<template>
  <div class="search">
    <h1>Recherche</h1>
    <Search-filter label="Recherche nom" v-show="showSearchName">
      <template v-slot:search>
        <Select />
      </template>
    </Search-filter>
    <Search-filter label="Recherche école" v-show="showSearchSchool">
      <template v-slot:search>
        <Input />
      </template>
      <template v-slot:button>
        <p>BTN</p>
      </template>
    </Search-filter>
  </div>
</template>
<script>
import SearchFilter from '@/components/recherche/components/SearchFilter.vue'
import Select from '@/components/recherche/components/Select.vue'
import Input from '@/components/recherche/components/Input.vue'
import { computed } from '@vue/composition-api'

export default {
  components: {
    SearchFilter,
    Select,
    Input
  },
  setup (_, { root }) {
    const showSearchName = computed(() => root.$store.state.enableFilters.name)
    const showSearchSchool = computed(() => root.$store.state.enableFilters.school)

    return {
      showSearchName,
      showSearchSchool
    }
  }
}
</script>
