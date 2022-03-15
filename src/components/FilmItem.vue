<template>
      <div class="item_wrapper">
        <h3 v-if="movie.title">{{ movie.original_title}}</h3>
        <h3 v-else>{{ movie.original_name}}</h3>
        
        <h4 v-if="movie.title">{{ movie.title}}</h4>
        <h4 v-else>{{ movie.name}}</h4>

        <figure class="language-flag">
            <img :src="require(`../assets/img/${movie.original_language}.png`)" alt="">
        </figure>

        {{movie.original_language}}
        {{ movie.vote_average }} 
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
    .item_wrapper {
        width: 20%;
        min-height: 130px;
        border: 1px solid black;

        .language-flag {
            width: 40px;
            

            img {
                max-width: 100%;
                display: block;
            }
        }
    }
    
    
</style>