<template>
  <header>
    <div class="title">
      <h1>Boolflix - il miglior sito di non-streaming di film e serie tv</h1>
    </div>

    <div class="search-control">
      <input @keyup.enter="setSearch" type="text" v-model="search" />
      <button @click="setSearch">Cerca!</button>
    </div>
  </header>
</template>

<script>
import state from "../store.js";
import { searchFilter } from '../store.js'

export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    setSearch: function () {
      state.search = this.search;

      searchFilter()
    },
  },
};
</script>

<style lang="scss" scoped>
.search-control {
  margin-bottom: 50px;

  input {
    max-width: 500px;
    width: 100%;
  }

  button {
    width: 100px;
  }
}
</style>