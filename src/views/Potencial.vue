<template>
  <div>
      <div class="row">
          <div class="col-5 table m-2" >
              <table>
                  <caption style="caption-side: top">
                      Anodo filtro: Rh/Rh
                  </caption>
                  <tr>
                      <th>kV nominal</th>
                      <th>kV medido</th>
                      <th>Exactitud kV</th>
                      <th>t medido(s)</th>
                  </tr>
                  <tr v-for="(item, index) in items" :key="'A'+index">
                    <td> <input v-model="item.kv" @change="edit($event, index)"/></td>
                    <td> <input v-model="item.kvMedido" @change="edit($event, index)"/></td>
                    <td>{{item.dif}}</td>
                    <td> <input v-model="item.tiempo"/></td>
                  </tr>
              </table>
          </div>
          <div class="col-10">
              <LineChart  :chartData="data"/>
          </div>
      </div>
  </div>
</template>

<script>

import { LineChart } from 'vue-chart-3';
import {defineComponent} from "vue";

export default defineComponent({
    name:'Potencial',
    components: {LineChart},
    data(){
        return{
            items:[],
            result:"",
            showGraph: false,
            optionsGraph: {}
        }
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
    methods: {
        edit(event, editedIndex) {
            this.items.splice(editedIndex, 1, {
                ...this.items[editedIndex],
                ...{dif: this.calcularDif(this.items[editedIndex].kv, this.items[editedIndex].kvMedido)}
            });
            this.renderChart();
        },
        calcularDif(kv, kvMedido) {
            return Math.round( 1000 *  Math.abs(kv - kvMedido) ) / 1000
        },
        renderChart() {
            this.showGraph = false;
            this.potenciaData = {
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
            this.showGraph = true;
        }
    },
    created () {
    fetch("/json/kv.json")
        .then((response) => response.json())
        .then((data) => {
            this.items = data.data.map((dato) => {
              return {...dato, ...{dif: this.calcularDif(dato.kv, dato.kvMedido)}}
            });
            this.renderChart();
        });
    },
 })
</script>


<style>
.small {
    max-width: 500px;
    margin:  150px auto;
}
</style>
