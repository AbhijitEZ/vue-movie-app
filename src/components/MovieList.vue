<template>
  <div id="movie-container">
    <movie v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import movies from "@/assets/movie-list";
import Movie from "@/components/Movie.vue";

@Options({
  components: { Movie },
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies;
    },
  },
})
export default class MovieList extends Vue {}
</script>

<style lang="scss" scoped>
#movie-container {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 2;
  justify-content: center;
}
</style>
