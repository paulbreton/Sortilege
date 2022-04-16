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
    <Search-filter label="Recherche par niveau" v-if="getSeachFilter('level')">
      <template v-slot:search>
        <Select :options="optionsLevel" :value="allSearchFilters.level" @handle-select="levelSelected"/>
      </template>
    </Search-filter>
    <Search-filter label="Livres Dispo">
      <template v-slot:search>
        <Select :options="optionsBookAvailable" :value="allSearchFilters.bookAvailable" @handle-select="bookAvailableSelected"/>
      </template>
      <template v-slot:button>
        <button v-on:click="addBook" :disabled="disabledBtnAdd">Add</button>
      </template>
    </Search-filter>
    <Search-filter label="Livres Ajoutés">
      <template v-slot:search>
        <Select :options="optionsBookAdd" :value="allSearchFilters.bookAddSelect" @handle-select="bookAddSelected"/>
      </template>
      <template v-slot:button>
        <button v-on:click="deleteBook" :disabled="disabledBtnDelete">Suppr</button>
      </template>
    </Search-filter>
    </div>
    Nombre de livre trouvé : {{ allSearchFilters.nbBookFind }}
    <div class="group-btn">
      <button v-on:click="reset">Reset</button>
      <button v-on:click="search">Recherche</button>
    </div>
  </div>
</template>
<script>
import { fetchAllSchool, fetchAllBranch, fetchAllClass, fetchAllLevel } from '@/api/service'
import { useHandleSelect } from './functions/handleSelect'
import { useSearch } from './functions/search'
import SearchFilter from '@/components/recherche/components/SearchFilter.vue'
import Select from '@/components/recherche/components/Select.vue'
import Input from '@/components/recherche/components/Input.vue'
import { computed, onMounted } from '@vue/composition-api'

export default {
  components: {
    SearchFilter,
    Select,
    Input
  },
  setup (_, { root, emit }) {
    const { reset, search, allSearchFilters } = useSearch(root, emit)

    onMounted(() => {
      root.$store.dispatch('filters/reset')
      root.$store.dispatch('filters/fetchBookAvailable')
    })

    const optionsBranch = fetchAllBranch()
    const optionsClass = fetchAllClass()
    const optionsSchool = fetchAllSchool()
    const optionsLevel = fetchAllLevel()
    const optionsBookAvailable = computed(() => root.$store.state.filters.bookAvailable)
    const optionsBookAdd = computed(() => root.$store.state.filters.bookAdd)

    const disabledBtnAdd = computed(() => {
      return (allSearchFilters.value.bookAvailable === null || allSearchFilters.value.bookAvailable === '' || allSearchFilters.value.bookAvailable === undefined || optionsBookAvailable.value.length === 0)
    })
    const disabledBtnDelete = computed(() => (allSearchFilters.value.bookAddSelect === null || allSearchFilters.value.bookAvailable === undefined || optionsBookAdd.value.length === 0))

    const { nameSelected, classSelected, schoolSelected, branchSelected, bookAvailableSelected, bookAddSelected, levelSelected } = useHandleSelect(allSearchFilters)

    const getSeachFilter = (key) => window.localStorage.getItem(key) === 'true'

    const addBook = () => {
      root.$store.dispatch('filters/addBook', allSearchFilters.value.bookAvailable)
      allSearchFilters.value.bookAvailable = optionsBookAvailable.value[0]
    }

    const deleteBook = () => {
      root.$store.dispatch('filters/deleteBook', allSearchFilters.value.bookAddSelect)
      allSearchFilters.value.bookAddSelect = optionsBookAdd.value[0]
    }

    return {
      allSearchFilters,
      nameSelected,
      classSelected,
      branchSelected,
      schoolSelected,
      levelSelected,
      bookAvailableSelected,
      bookAddSelected,
      getSeachFilter,
      reset,
      search,
      addBook,
      deleteBook,
      optionsSchool,
      optionsBranch,
      optionsClass,
      optionsBookAvailable,
      optionsBookAdd,
      optionsLevel,
      disabledBtnAdd,
      disabledBtnDelete
    }
  }
}
</script>

<style lang="css" scoped>
  .search{
    background-color: var(--background-secondary-color);
    border-radius: 15px;
    margin:5vh auto auto auto;
    width:70vw;
    height:70vh;
    padding:10px;
    display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:space-evenly;
  }
  .all-search{
  width:100%;
  }
</style>
