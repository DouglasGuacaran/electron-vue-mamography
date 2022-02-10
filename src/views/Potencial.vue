<template>
  <div class="container">
    <div class="row">
      <div class="col-7">
        <table v-for="(item, index) in items1" :key="'B' + index">
          <caption style="caption-side: top">
            Anodo filtro:
            {{
              this.names[index]
            }}
          </caption>
          <tr>
            <th>kV nominal</th>
            <th>kV medido</th>
            <th>Exactitud kV</th>
            <th>t medido(s)</th>
          </tr>
          <tr v-for="(item, index) in items" :key="'A' + index">
            <td>
              <input
                class="inputs"
                v-model="item.kv"
                @change="edit($event, index)"
              />
            </td>
            <td>
              <input
                class="inputs"
                v-model="item.kvMedido"
                @change="edit($event, index)"
              />
            </td>
            <td>{{ item.dif }}</td>
            <td><input class="inputs" v-model="item.tiempo" /></td>
          </tr>
        </table>
      </div>
      <div class="col-5">
        <LineChart :chartData="data" />
      </div>
    </div>
  </div>
</template>

<script>
import { LineChart } from "vue-chart-3";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Potencial",
  components: { LineChart },
  props: {
    // names:String,
  },
  data() {
    return {
      items: [],
      items1: [],
      result: "",
      showGraph: false,
      optionsGraph: {},
      label1: String,
      nombres: [],
    };
  },
  setup() {
    const data = {
      labels: ["26", "27", "28", "29", "30", "31", "32", "33"],
      datasets: [
        {
          label: "Rh/Rh",
          data: [26.51, 27.51, 28.51, 29.51, 30.51, 31.51, 32.51, 33.51],
          borderColor: "rgb(54, 162, 235)",
        },
        {
          label: "Mo/Mo",
          data: [26.31, 27.64, 28.56, 29.49, 30.43, 31.23, 32.46, 33.04],
          borderColor: "rgb(54, 100, 35)",
        },
        {
          label: "Rh/Mo",
          data: [26.31, 27.44, 28.46, 29.19, 30.23, 31.23, 32.46, 33.04],
          borderColor: "rgb(54, 202, 235)",
        },
      ],
    };
    return { data };
  },
  methods: {
    edit(event, editedIndex) {
      this.items.splice(editedIndex, 1, {
        ...this.items[editedIndex],
        ...{
          dif: this.calcularDif(
            this.items[editedIndex].kv,
            this.items[editedIndex].kvMedido
          ),
        },
      });
      this.renderChart();
    },
    calcularDif(kv, kvMedido) {
      return Math.round(1000 * Math.abs(kv - kvMedido)) / 1000;
    },
    getData() {
      fetch("/json/kv.json")
        .then((response) => response.json())
        .then((data) => {
          let obj = data.data;
          this.items1 = Object.keys(obj);
          console.log(this.items1);
          this.names = Object.values(this.items1);
          console.log(this.names);
        });
    },

    renderChart() {
      this.showGraph = false;
      this.showGraph = true;
    },
  },
  created() {
    fetch("/json/kv.json")
      .then((response) => response.json())
      .then((data) => {
        this.items = data.data.RhRh.map((dato) => {
          return {
            ...dato,
            ...{ dif: this.calcularDif(dato.kv, dato.kvMedido) },
          };
        });
        this.renderChart();
      });
    this.getData();
  },
});
</script>


<style>
.inputs {
  width: 100%;
  border: none; 
  text-align: center;
}
</style>
