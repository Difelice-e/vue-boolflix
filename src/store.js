import Vue from 'vue';
import axios from 'axios'

const state = Vue.observable({
    search: '',
    movies: [],
    baseURL: 'https://api.themoviedb.org/3',
})

export default state

export function searchFilter() {

      axios.get(`${state.baseURL}/search/movie`, {
        params: {
        api_key: 'bab6bf2018fe2a02fb4ff2a26ccb51f2',
        query: state.search,
        language: 'it-IT'
        }
        })
        .then( res => {
        state.movies = res.data.results
        })
        .catch( error => {
        console.log(error.response)
      })

      axios.get(`${state.baseURL}/search/tv`, {
        params: {
        api_key: 'bab6bf2018fe2a02fb4ff2a26ccb51f2',
        query: state.search,
        language: 'it-IT'
        }
      })
      .then( res => {
      state.movies.push(...res.data.results)
      })
      .catch( error => {
      console.log(error.response)
      })
  }