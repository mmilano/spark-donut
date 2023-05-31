/*
spark chart: single value doughnut
mmilano.02021.02022.02023
*/

/*
notes about SVG circles:
The path begins at the "3 o'clock" point on the radius and proceeds in a clock-wise direction (before any transformations).
*/

<template>

  <div class="sparkchart-doughnut">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle
        class="doughnut-background"
        :stroke-width="strokeWidth"
        fill="none"
        cx="50" cy="50"
        :r="radius"
      />
      <circle
        class="doughnut-arc"
        :class="direction"
        :style="arcStyle"
        :stroke-width="strokeWidth"
        :stroke-dasharray="strokeDashArray"
        stroke-linecap="butt"
        fill="none"
        cx="50" cy="50"
        :r="radius"
      />
    </svg>
  </div>

</template>

<script>

export default {
  name: "SparkDoughnut",

  props: {

    // logical radius of the doughnut ≈ how you commonly think about it
    // basically 1/2 of the viewport
    radiusLogical: {
      type: [String, Number],
      default: 50,
    },

    // stroke size can be percentage (default) or a fixed number.
    // note that when percentage, it is logically expressed as %, but that is a % of 1/2 total width = % of radius
    stroke: {
      type: [String, Number],
      default: "60%",
    },

    // the "value" of the doughnut's arc
    // Expected to be % of the whole
    value: {
      type: Number,
      required: true,
    },

    // should the arc rotate in counterclockwise or clockwise direction
    counterClockwise: {
      type: Boolean,
      default: true,
    },

    // color of unfilled area
    colorBackground: {
      type: String,
      default: "#DDD",
      required: false,
    },

    // color of filled area
    colorForeground: {
      type: String,
      default: "#202089",
      required: false,
    },

  },

  // internal value for chart's internal view width
  defaultChartWidth: 100,

  methods: {
    // common fixed/limited number of decimal places for the computed values
    fixedLen: (v) => v.toFixed(4),
  },

  computed: {

    // calculated radius to account for the stroke width
    radius() {
      return this.radiusLogical - (this.strokeWidth / 2);
    },

    // total circumference of the doughnut
    // also the value for strokeGap
    circumference() {
      return this.fixedLen(2 * Math.PI * this.radius);
    },

    // is it counterclockwise or clockwise?
    direction() {
      return this.counterClockwise ? "widdershins" : "clockwise";
    },

    // boolean test for wehther or not the stroke width is a percentage, or a fixed measurement
    strokeIsPercentage() {
      // regex check
      // return (/^(\d+|(\.\d+))(\.\d+)?%$/.test(this.stroke));
      // simple check
      return String(this.stroke).indexOf("%") > -1;
    },

    // if fixed width, then used directly.
    // if responsive/%, then more complicated: % is really percentage of 1/2 overall width.
    strokeWidth() {
      return this.strokeIsPercentage ? (((parseFloat(this.stroke) / 100) / 2) * this.$options.defaultChartWidth) : this.stroke;
    },

    // strokeDash = the length of the dash size = the length of the values 'arc' on the doughnut
    strokeDash() {
      return this.fixedLen((this.circumference / 100) * this.value);
    },

    // strokeGap() {
    //   return this.circumference;
    // },

    strokeDashArray() {
      return `${this.strokeDash},${this.circumference}`;
    },

    arcStyle() {
      const style = {
        stroke: this.colorForeground,
      };

      // compute the rotation of the arc.
      // circle path ALWAYS starks painting @ 3:00, and goes clockwise.
      // so to make arc appear to begin at 12:00, roration must be computed:
      // for clockwise:  {return -90°}
      // for widdershins: {  - (90° + degrees-of-arc) }
      if (this.counterClockwise) {
        const rotation = -((360 * this.value / 100) + 90);
        style.transform = `rotate(${rotation}deg)`;
      }
      return style;
    },

  },

};
</script>

<style lang="scss">
  @use "@/assets/scss/sparkDoughnut";
</style>
