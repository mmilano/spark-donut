<template>
  <main id="app">
    <Hello msg="Spark Chart Donut"/>

  <h2>one</h2>
    <div class="donut1">
      <SparkDonut v-bind="$options.donutExample1"></SparkDonut>
    </div>

    <h2>two</h2>
    <div class="donut2">
      <SparkDonut v-bind="$options.donutExample2"></SparkDonut>
    </div>

  </main>
</template>

<script>
import Hello from './components/Hello.vue';
import SparkDonut from './components/SparkDonut.vue';

export default {
  name: "App",

  components: {
    Hello,
    SparkDonut
  },

  data() {
    return {};
  },

  donutExample1: {
    value: 35,
    colorForeground: "#33F",
  },

  donutExample2: {
    value: 55,
    colorForeground: "#33F",
    stroke: 5,
    counterClockwise: false
  },

  computed: {
  },

  mounted() {
  },
}
</script>

<style lang="scss">
// .container {
//   width: 220px;
//   border: 1px dotted #999;
//   svg {
//     width: 100%;
//   }
// }

.donut1 {
  width: 200px;
}

.donut2 {
  width: 200px;
}



.o-spark {
  border: 1px dotted #999;
  width: 260px;
}

.o-donut-background {
  stroke: #DDD;
}

.o-donut-arc {
    transform: rotate(-180deg);
    transform-origin: center;
    stroke: #20894f;
}

</style>
