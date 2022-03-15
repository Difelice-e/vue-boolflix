<template>
  <div >
      {{ movie.original_title}} |
      {{ movie.title }} |
      {{ movie.original_language }} |
      {{ movie.vote_average }} |
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