<template>
  <div id="app">
    <div>
      <input type="text" v-model="search">
    </div>
    
    <div v-for="(movie, i) in movies" :key="i" > 
      {{movie}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      movies: [],
      search: ''
    }
  },
  created() {
    axios.get('')
    .then( res => {
      console.log(res.data)
    })
    .catch( error => {
      console.log(error.response)
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
