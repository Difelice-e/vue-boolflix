<template>
  <section>
      <div>
        <SearchBar @searchByName="searchFilter"/>
      </div>
      <div class="movie_wrapper container">
        <FilmItem v-for="(movie, i) in movies" 
        :key="i" 
        :movie="movie"
        :baseImgUrl="baseImgURL"
        />
      </div>
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
        baseURL: 'https://api.themoviedb.org/3',
        baseImgURL: 'https://image.tmdb.org/t/p/w342'
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

            axios.get(`${this.baseURL}/search/tv`, {
            params: {
            api_key: 'bab6bf2018fe2a02fb4ff2a26ccb51f2',
            query: this.search,
            language: 'it-IT'
            }
            })
            .then( res => {
            this.movies.push(...res.data.results)
            })
            .catch( error => {
            console.log(error.response)
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.movie_wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        align-items: center;     
}
</style>