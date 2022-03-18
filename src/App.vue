<template>
  <div id="app">
    <SearchBar />

    <div class="movie_wrapper container" v-if="movies.length !== 0">
      <FilmItem
        v-for="(movie, i) in movies"
        :key="i"
        :movie="movie"
        :baseImgUrl="baseImgURL"
        :flags="flags"
      />
    </div>

    <div class="movie_wrapper container" v-else>
      <h2>Cerca tra milioni di film e serie tv nel nostro catalogo!</h2>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import FilmItem from "./components/FilmItem.vue";

import state from "./store.js";
import axios from "axios";

export default {
  name: "App",
  components: {
    SearchBar,
    FilmItem,
  },
  data() {
    return {
      baseImgURL: "https://image.tmdb.org/t/p/w342",
      flags: {
        it: require("./assets/img/it.png"),
        en: require("./assets/img/en.png"),
        de: require("./assets/img/de.png"),
        fr: require("./assets/img/fr.png"),
        es: require("./assets/img/es.png"),
      },
    };
  },

  methods: {
    searchFilter: function (filtro) {
      this.search = filtro;

      axios
        .get(`${this.baseURL}/search/movie`, {
          params: {
            api_key: "bab6bf2018fe2a02fb4ff2a26ccb51f2",
            query: this.search,
            language: "it-IT",
          },
        })
        .then((res) => {
          this.movies = res.data.results;
        })
        .catch((error) => {
          console.log(error.response);
        });

      axios
        .get(`${this.baseURL}/search/tv`, {
          params: {
            api_key: "bab6bf2018fe2a02fb4ff2a26ccb51f2",
            query: this.search,
            language: "it-IT",
          },
        })
        .then((res) => {
          this.movies.push(...res.data.results);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  computed: {
    search: function () {
      return state.search;
    },
    movies: function () {
      return state.movies;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #b8b8b8;
  background-color: #434343;
  height: 100vh;
}

// scrollbar
::-webkit-scrollbar {
  width: 8px;
  padding: 0 2px;
}

::-webkit-scrollbar-thumb {
  visibility: hidden;
  border-radius: 5px;
  background: #b20000;
}

.container:hover::-webkit-scrollbar-thumb {
  visibility: visible;
}

.film-info:hover::-webkit-scrollbar-thumb {
  visibility: visible;
}

// -----

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
}

.movie_wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px 15px;
  height: calc(100% - 154px);
  padding: 0px 10px 20px;
  overflow: auto;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
  }
}
</style>
