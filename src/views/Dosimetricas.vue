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
        labels: ["1", "2", "3", "2", "3", "2", "3", "2", "3", "2", "3", "2"],
        datasets: [
          {
            label: 'Dataset 1',
            data: [30, 40, 60, 70, 5],
            borderColor: 'rgb(54, 162, 235)'
          },
          {
            label: 'Dataset 2',
            data: [90, 10, 20, 73, 15],
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
