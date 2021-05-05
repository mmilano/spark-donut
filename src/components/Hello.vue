<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>
      A simple doughnut chart created with generated SVG and css.
    </p>



    <p>

    original start for work comes from
    https://markus.oberlehner.net/blog/pure-css-animated-svg-circle-chart/
    along with twenty or thirty search results.

    </p>
    <h2>Doughnut Chart properties</h2>

    <ul>
      <li>r = 50</li>
      <li>calculated r' = r - (stroke-width/2)</li>
      <li>Percentage fill = 25</li>
      <li>C = 2 * π * r = 314.15</li>
      <li>C' = 2 * π * r' = 251.32</li>
      <li>Stroke length = (C/ 100) * (Percentage fill) = 78.54</li>
      <li>Stroke length' = (C'/ 100) * (Percentage fill) = 62.83</li>
    </ul>


  </div>
</template>

<script>
export default {
  name: 'Hello',

  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
// h3 {
  // margin: 40px 0 0;
// }
// ul {
  // list-style-type: none;
  // padding: 0;
// }
// li {
  // display: inline-block;
  // margin: 0 10px;
// }
// a {
  // color: #42b983;
// }
</style>
