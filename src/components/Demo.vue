<template>
  <div>
    <h1>Spark Chart: Doughnut</h1>

    <p>
      A simple doughnut "spark" chart created with generated SVG and css.
    </p>

    <p>
      Generated in a VUE template using dynamic properties.
    </p>

    <p>
      Original start for work comes from
      https://markus.oberlehner.net/blog/pure-css-animated-svg-circle-chart/
      along with twenty or thirty search results.
    </p>


    <h3>Notes</h3>
    <p>
      notes about SVG circles:
    </p>
    <p>
      The path begins at the "3 o'clock" point on the radius and proceeds in a clock-wise direction (before any transformations).
    </p>



    <h2>Doughnut Chart Properties</h2>
    <div class="properties">
    <table >
      <tr>
        <th>Property</th>
        <th>type</th>
        <th>units</th>
        <th>description</th>
      </tr>

      <tr>
        <td>radiusLogical</td>
        <td>number</td>
        <td>%</td>
        <td>Radius of the doughnut chart. Defaults to 1/2 of the size of the viewport.</td>
      </tr>

      <tr>
        <td>circumference</td>
        <td>number</td>
        <td>px</td>
        <td>Calculated circumference of the doughnut (outside dimension)</td>
      </tr>

      <tr>
        <td>value</td>
        <td>number</td>
        <td>%</td>
        <td>the value metric to be displayed, as % of the total</td>
      </tr>

      <tr>
        <td>stroke</td>
        <td>number</td>
        <td>%</td>
        <td>The size of the graph's stroke; how thick the doughnut is.</td>
      </tr>


      <tr>
        <td>arc length</td>
        <td>number</td>
        <td>px</td>
        <td>the length of the arc, or "filled area" of the doughnut, based on the value metric</td>
      </tr>

      <tr>
        <td>counterClockwise</td>
        <td>Boolean</td>
        <td>n/a</td>
        <td>whether or not the arc should draw in clockwise or widdershins (i.e. counter-clockwise) orientation.</td>
      </tr>

    </table>
    </div>

    <h2>Internal Calculated Values (with defaults)</h2>
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
  name: "DemoDonut",
};
</script>

<style scoped lang="scss">
.properties {
  width: 50%;
  table {
    width: 100%;
    border-collapse: collapse;

    th {
      background-color: #C1C1C2;
    }
    th,td {
      padding: .5rem;
      border: 1px solid #666;
    }
  }
}
</style>
