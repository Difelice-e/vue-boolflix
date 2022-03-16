<template>
      <div class="item_wrapper">
        <figure class="film-poster">
            <img :src="baseImgUrl+movie.poster_path" alt="">
        </figure>
        
        <h3 v-if="movie.title">{{ movie.original_title}}</h3>
        <h3 v-else>{{ movie.original_name}}</h3>
        
        <h4 v-if="movie.title">{{ movie.title}}</h4>
        <h4 v-else>{{ movie.name}}</h4>

        <figure class="language-flag">
            <img v-if="flags[movie.original_language]" :src="flags[movie.original_language]" alt="">
            <span v-else>{{movie.original_language}}</span>
        </figure>

        {{ stars(movie) }} 
        
      </div>
</template>

<script>
export default {
    name: 'MovieItem',
    props: {
        movie: {
            type: Object,
            required: true
        },
        baseImgUrl: {
            type: String,
            required: true
        },
        cambioValutazione: {
            type: Function
        },
        flags: {
            type: Object
        }
    },
    methods: {
        stars: function (element) {
            return Math.floor((element.vote_average / 2))
        }
    }
}
</script>

<style lang="scss" scoped>
    .item_wrapper {
        width: 20%;
        min-height: 130px;
        border: 1px solid black;

        .film-poster {
            // width: 100px;
        }
        
        .language-flag {
            width: 40px;
        }
    }
    
    
</style>