<template>
  <div >
      {{ movie.title }}
    </div>
</template>

<script>
export default {
    name: 'MovieItem',
    props: {
        movie: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>