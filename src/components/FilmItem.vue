<template>
  <div class="item_wrapper">
    <figure class="film-poster">
      <img :src="baseImgUrl + movie.poster_path" alt="" />
    </figure>

    <div class="film-info">
      <p>
        <span class="text-info">Titolo:</span
        >{{ movie.original_title || movie.original_name }}
      </p>

      <p>
        <span class="text-info">Titolo originale:</span
        >{{ movie.title || movie.name }}
      </p>

      <div class="language">
        <span class="text-info">Lingua:</span>
        <figure class="language-flag">
          <img
            v-if="flags[movie.original_language]"
            :src="flags[movie.original_language]"
            alt=""
          />
          <span v-else>{{ movie.original_language }}</span>
        </figure>
      </div>

      <div class="star_wrapper">
        <span class="text-info">Voto:</span>
        <div
          :class="i < stars(movie) ? 'star' : ''"
          v-for="(el, i) in 5"
          :key="i"
        >
          <span v-if="i < stars(movie)"> &starf; </span>
          <span v-else> &star; </span>
        </div>
      </div>

      <p><span class="text-info">Overview:</span>{{ movie.overview }}</p>
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
  flex-grow: 1;
  width: 250px;
  height: 400px;
  border: 1px solid black;
  overflow: hidden;
  position: relative;
  border: 1px solid white;

  &:hover .film-poster {
    display: none;
  }

  .film-poster {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .film-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    overflow: auto;
    height: 100%;
    padding: 15px 10px;
    font-size: 1rem;

    &:hover ::-webkit-scrollbar {
      background-color: grey;
    }

    .language-flag {
      width: 20px;
    }

    .language {
      display: flex;
      align-items: center;
    }

    .text-info {
      color: #e6e6e6;
      margin-right: 5px;
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