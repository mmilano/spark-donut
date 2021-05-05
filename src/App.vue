<template>
  <main id="app">
    <Demo />

    <h2>Example 1</h2>
    <div class="doughnut1">
      <SparkDoughnut v-bind="$options.doughnutExample1"></SparkDoughnut>
    </div>

    <h2>Example 2</h2>
    <div class="doughnut2">
      <SparkDoughnut v-bind="$options.doughnutExample2"></SparkDoughnut>
    </div>

  </main>
</template>

<script>
import Demo from './components/Demo.vue';
import SparkDoughnut from './components/SparkDoughnut.vue';

export default {
  name: "App",

  components: {
    Demo,
    SparkDoughnut
  },

  data() {
    return {};
  },

  doughnutExample1: {
    value: 35,
    colorForeground: "#33F",
  },

  doughnutExample2: {
    value: 55,
    colorForeground: "#F3F",
    stroke: 5,
    counterClockwise: false
  },

  computed: {},

  mounted() {},
}
</script>

<style lang="scss">

  .doughnut1 {
    width: 200px;
  }

  .doughnut2 {
    width: 111px;
  }

  // .o-spark {
  //   border: 1px dotted #999;
  //   width: 260px;
  // }

  // .o-doughnut-background {
  //   stroke: #DDD;
  // }

  // .o-doughnut-arc {
  //     transform: rotate(-180deg);
  //     transform-origin: center;
  //     stroke: #20894f;
  // }

</style>
