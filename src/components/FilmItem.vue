<template>
  <div class="item_wrapper">
    <figure class="film-poster">
      <img :src="baseImgUrl + movie.poster_path" alt="" />
    </figure>

    <div class="film-info">
      <!-- <h3 v-if="movie.title">{{ movie.original_title }}</h3>
      <h3 v-else>{{ movie.original_name }}</h3> -->
      <h3>{{movie.original_title || movie.original_name}}</h3>

      <h4>{{movie.title || movie.name}}</h4>

      <figure class="language-flag">
        <img
          v-if="flags[movie.original_language]"
          :src="flags[movie.original_language]"
          alt=""
        />
        <span v-else>{{ movie.original_language }}</span>
      </figure>

      <div class="star_wrapper">
        <div
          :class="i < stars(movie) ? 'star' : ''"
          v-for="(el, i) in 5"
          :key="i"
        >
          <span v-if="i < stars(movie)"> &starf; </span>
          <span v-else> &star; </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
    baseImgUrl: {
      type: String,
      required: true,
    },
    cambioValutazione: {
      type: Function,
    },
    flags: {
      type: Object,
    },
  },
  methods: {
    stars: function (element) {
      return Math.ceil(element.vote_average / 2);
    },
  },
};
</script>

<style lang="scss" scoped>
.item_wrapper {
  width: 20%;
  height: 350px;
  border: 1px solid black;
  overflow: hidden;
  position: relative;

  &:hover .film-poster {
    opacity: 0;
  }

  .film-poster {
    opacity: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .film-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .language-flag {
      width: 40px;
  }

  .star_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .star {
    color: gold;
  }
  }
  
}
</style>