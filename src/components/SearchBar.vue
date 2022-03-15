<template>
  <div>
      <input @keyup.enter="searchName" type="text" v-model="search" />
      <button @click="searchName" >Cerca!</button>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            search: ''
        }
    },
    methods: {
        searchName: function() {
            this.$emit('searchByName', this.search)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>