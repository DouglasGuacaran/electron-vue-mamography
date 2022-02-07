<template>
  <div>
    <LineChart :chartData="data" />
  </div>
</template>

<script>

  import { defineComponent } from 'vue';
  import { LineChart } from 'vue-chart-3';

  export default defineComponent({
    name: 'Dosimetricas',
    components:{
      LineChart
    },
    setup() {

      const data = {
        labels: ["26", "27", "28", "29", "30", "31", "32", "33"],
        datasets: [
          {
            label: 'Rh/Rh',
            data: [26.51, 27.51, 28.51, 29.51, 30.51, 31.51, 32.51, 33.51],
            borderColor: 'rgb(54, 162, 235)'
          },
          {
            label: 'Mo/Mo',
            data: [26.31, 27.64, 28.56, 29.49, 30.43, 31.23, 32.46, 33.04],
            borderColor: 'rgb(54, 100, 35)'
          }
        ]
      };
      return { data };
    },
  })
</script>

<style>
.small {
  max-width: 600px;
  margin:  150px auto;
}
</style>
