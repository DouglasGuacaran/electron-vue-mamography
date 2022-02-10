<template>
  <div>Aca</div>
  <div v-if="showGraph">
    <LineChart :chartData="data" :options="options" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { LineChart } from "vue-chart-3";

export default defineComponent({
  name: "LineChartCustom",
  components: {
    LineChart,
  },
  props: {
    data: Object,
    showGraph: Boolean,
    options: Object,
  },
});
</script>

<style>
</style>
