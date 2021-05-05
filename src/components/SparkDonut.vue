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
        :style="transformRotation"
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

    // logical radius of the doughnut ≈ how you think about it
    // basically 1/2 of the viewport
    radiusLogical: {
      type: [String, Number],
      default: 50
    },

    // stroke size can be percentage (default) or a fixed number.
    // note that when percentage, it is logically expressed as %, but that is a % of 1/2 total width = % of radius
    stroke: {
      type: [String, Number],
      default: "60%"
    },

    // the "value" of the doughnut's arc
    // Expected to be %
    value: {
      type: Number,
      required: true
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
      required: false
    },

    // color of filled area
    colorForeground: {
      type: String,
      default: "#F00",
      required: false
    },

  },

  data() {
    return {
      transformRotation: null,
    }
  },

  defaultChartWidth: 100,

  methods: {
    fixedLen: (v) => v.toFixed(4),
    //
      // console.log ("fixing: ", v, "-", v.toFixed(4));
      // return v.toFixed(4);
    // }
  },

  computed: {

    // calculated radius to account for the stroke width
    radius() {
      return this.radiusLogical - (this.strokeWidth/2);
      // let strokeSize = (parseFloat(this.stroke) / 100) * this.$options.defaultChartWidth;
      // return this.radiusLogical - (strokeSize/2);
    },

    // total circumference of the doughnut
    // also the value for strokeGap
    circumference() {
        return this.fixedLen((2 * Math.PI * this.radius));
    },

    // is it counterclockwise or clockwise?
    direction() {
        return this.counterClockwise ? "widdershins" : "clockwise";
    },

    // compute the rotation of the arc.
    // cicle path ALWAYS starks painting @ 3:00, and goes clockwise.
    // so to make arc appear to begin at 12:00, roration must be computed:
    // for clockwise:  {return -90°}
    // for widdershins: {  - (90° + degrees-of-arc) }

    // counterClockwiseTransform() {
      // 360 * this.value = the degrees of the arc
      // let rotation = -( (360 * this.value/100) + 90);
      // let style = `transform: rotate(${rotation})`;
      // this.transformRotation = style;
      // return style;
    // },

    // boolean test for wether or not the stroke width is a percentage, or a fixed measurement
    strokeIsPercentage() {
      // return (/^(\d+|(\.\d+))(\.\d+)?%$/.test(this.stroke));
      return String(this.stroke).indexOf("%") > -1 ? true : false;
    },

    // if fixed width, then no complications.
    // if response/%, then more complicated: % is really percentage of 1/2 overall width.
    strokeWidth() {
      return this.strokeIsPercentage ? (((parseFloat(this.stroke) / 100) / 2) * this.$options.defaultChartWidth) : this.stroke;
    },

    // strokeDash = the length of the dash size = the length of the values 'arc' on the doughnut
    strokeDash() {
      // return ((this.circumference / 100) * this.value).toFixed(4);
      return this.fixedLen((this.circumference / 100) * this.value);
    },

    // strokeGap() {
    //   return this.circumference;
    // },

    strokeDashArray() {
      // let strokeDash = this.fixedLen((this.circumference / 100) * this.value);
      return `${this.strokeDash},${this.circumference}`;
    }
  },

  mounted() {

    // compute the counterClockwise transformation if widdershins
    // creates an inline css style
    if (this.counterClockwise) {
      const rotation = -((360 * this.value/100) + 90);
      this.transformRotation = `transform: rotate(${rotation}deg)`;
    };
  },

}
</script>

<style lang="scss">

  // $doughnut-background-color: this.$options.bcolor;
  $doughnut-background-color: #DDD;

  // .spark {
  //   border: 1px dotted #444;
  //   width: 230px;
  // }

  .doughnut-background {
    // stroke: #DDD;
    stroke: $doughnut-background-color;
  }

  .doughnut-arc {
      // transform: rotate(-180deg);
      transform-origin: center;
      stroke: #202089;
  }

  // counterclockwise
  .widdershins {
      // transform: rotate(-180deg);
  }
  .clockwise {
      transform: rotate(-90deg);
  }

</style>
