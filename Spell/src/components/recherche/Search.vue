<template>
  <div class="search">
    <h1>Recherche</h1>
    <div class="all-search">
    <Search-filter label="Recherche nom" v-if="getSeachFilter('name')">
      <template v-slot:search>
        <Input :value="allSearchFilters.name" @handle-input="nameSelected"/>
      </template>
    </Search-filter>
    <Search-filter label="Recherche branches" v-if="getSeachFilter('branch')">
      <template v-slot:search>
        <Select :options="optionsBranch" :value="allSearchFilters.branch" @handle-select="branchSelected"/>
      </template>
    </Search-filter>
    <Search-filter label="Recherche école" v-if="getSeachFilter('school')">
      <template v-slot:search>
        <Select :options="optionsSchool" :value="allSearchFilters.school" @handle-select="schoolSelected"/>
      </template>
    </Search-filter>
    <Search-filter label="Recherche classe" v-if="getSeachFilter('class')">
      <template v-slot:search>
        <Select :options="optionsClass" :value="allSearchFilters.class" @handle-select="classSelected"/>
      </template>
    </Search-filter>
    <Search-filter label="Livres Dispo">
      <template v-slot:search>
        <Select :options="optionsBookAvailable" :value="allSearchFilters.bookAvailable" @handle-select="bookAvailableSelected"/>
      </template>
      <template v-slot:button>
        <button @click="addBook" :disabled="disabledBtnAdd">Add</button>
      </template>
    </Search-filter>
    <Search-filter label="Livres Ajoutés">
      <template v-slot:search>
        <Select :options="optionsBookAdd" :value="allSearchFilters.bookAddSelect" @handle-select="bookAddSelected"/>
      </template>
      <template v-slot:button>
        <button @click="deleteFromBookAdd">Suppr</button>
      </template>
    </Search-filter>
    </div>
    <div class="group-btn">
      <button @click="reset">Reset</button>
      <button @click="search">Recherche</button>
    </div>
  </div>
</template>
<script>
import { fetchBookAvailable, fetchAllSchool, fetchAllBranch, fetchAllClass } from '@/api/service'
import { useHandleSelect } from './functions/handleSelect'
import { useSearch } from './functions/search'
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
  setup () {
    const { reset, search, allSearchFilters } = useSearch()

    const optionsBranch = fetchAllBranch()
    const optionsClass = fetchAllClass()
    const optionsSchool = fetchAllSchool()
    const optionsBookAvailable = fetchBookAvailable()
    const optionsBookAdd = computed(() => allSearchFilters.value.bookAdd)

    const disabledBtnAdd = computed(() => allSearchFilters.value.bookAvailable === null || allSearchFilters.value.bookAvailable === undefined)

    const { nameSelected, classSelected, schoolSelected, branchSelected, bookAvailableSelected, bookAddSelected } = useHandleSelect(allSearchFilters)

    const getSeachFilter = (key) => window.localStorage.getItem(key) === 'true'

    /* const deleteBookAvailable = (value) => {
      const index = optionsBookAvailable.findIndex((el) => el === value)
      optionsBookAvailable.splice(index, 1)
    } */

    const addBook = () => {
      const value = allSearchFilters.value.bookAvailable
      allSearchFilters.value.bookAdd.push(value)
    }

    return {
      allSearchFilters,
      nameSelected,
      classSelected,
      branchSelected,
      schoolSelected,
      bookAvailableSelected,
      bookAddSelected,
      getSeachFilter,
      reset,
      search,
      addBook,
      optionsSchool,
      optionsBranch,
      optionsClass,
      optionsBookAvailable,
      optionsBookAdd,
      disabledBtnAdd
    }
  }
}
</script>
