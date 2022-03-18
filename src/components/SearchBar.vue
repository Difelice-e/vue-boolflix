<template>
  <header class="header">
    <div class="title">
      <h1>Boolflix</h1>
    </div>

    <div class="search-control">
      <input @keyup.enter="setSearch" type="text" v-model="search" placeholder="Cerca film e serie TV"/>
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 20px 50px;
  margin-bottom: 50px;
}

.title {
  text-transform: uppercase;
  font-size: 1.75rem;
  color: #B20000;
}

.search-control {
  display: flex;
  align-items: center;


  input {
    max-width: 500px;
    width: 100%;
    background-color: transparent;
    border: 1px solid white;
    padding: 5px;
    color: white;
  }

  button {
    width: 100px;
    padding: 5px;
    background-color: rgba($color: #471c1c, $alpha: 0.5);
    color: white;
    border: 1px solid white;
  }
}
</style>