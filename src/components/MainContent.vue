<template>
  <section>
    <SearchBar @searchByName="searchFilter"/>

    <FilmItem v-for="(movie, i) in movies" 
    :key="i" 
    :movie="movie"/>

  </section>
</template>

<script>
import axios from 'axios'
import FilmItem from './FilmItem.vue'
import SearchBar from './SearchBar.vue'

export default {
    name: 'MainContent',
    components: {
        FilmItem,
        SearchBar
    },
    
    data() {
        return {
        movies: [],
        search: '',
        baseURL: 'https://api.themoviedb.org/3'
        }
    },

    methods: {
        searchFilter: function (filtro) {
            this.search = filtro

            axios.get(`${this.baseURL}/search/movie`, {
            params: {
            api_key: 'bab6bf2018fe2a02fb4ff2a26ccb51f2',
            query: this.search,
            language: 'it-IT'
            }
            })
            .then( res => {
            this.movies = res.data.results
            })
            .catch( error => {
            console.log(error.response)
            })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>