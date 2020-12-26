<template>
  <div id="navbar-wrap" class="card-shadow">
    <div id="navbar">
      <h2>Movie.io</h2>
      <input type="text" placeholder="Find movies..." />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  data() {
    return {};
  },
})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
#navbar-wrap {
  position: fixed;
  width: 100%;
  z-index: 9999;

  #navbar {
    display: flex;
    padding: 15px;
    justify-content: space-between;
    background-color: #a34c01;

    h2 {
      margin: 0 1rem 0 0;
      color: white;
      cursor: pointer;
    }

    & > div {
      display: flex;
      flex-grow: 2;
      justify-content: flex-end;

      input {
        width: 20%;
        border: none;
        height: 25px;
        border-radius: 10px;
        box-sizing: border-box;
        outline: none;
        padding: 5px;
      }
    }
  }
}
</style>
