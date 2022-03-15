<template>
  <div id="app">
    <MainHeader />
    <MainContent />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader"
import MainContent from "./components/MainContent"

export default {
  name: 'App',
  components: {
    MainHeader,
    MainContent
  },
  
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
}
</style>
