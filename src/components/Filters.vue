<template>
  <div id="filters">
    <h3>Filters</h3>
    <p>Rating highest</p>
    <p>Rating lowest</p>
    <p>Year newest</p>
    <p>Year oldest</p>
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
export default class Filters extends Vue {}
</script>

<style lang="scss" scoped>
#filters {
  text-align: left;
  color: rgb(143, 143, 143);
  cursor: pointer;

  p {
    margin-left: 10px;
    padding: 10px 5px;
    &:hover {
      color: white;
      background: #ffffff38;
    }
  }
}
</style>
