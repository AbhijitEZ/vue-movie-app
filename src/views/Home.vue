<template>
  <div class="home">
    <navbar />
    <section id="main-section">
      <sidebar />
      <movie-list />
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import MovieList from "@/components/MovieList.vue";
import { EventCustom } from "@/types/global";

@Options({
  components: {
    Navbar,
    Sidebar,
    MovieList,
  },
  data() {
    return {
      movies: ["Start wars", "Avengers", "The dark knight", "Inception", "Intersteller", "Tenent"],
    };
  },
})
export default class Home extends Vue {
  movieDetail: string = "Test";

  handleClick = (event: EventCustom) => {
    this.movieDetail = event.target.innerText;
  };
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;

  #main-section {
    display: flex;
    margin-top: 50px;
  }
}
</style>
