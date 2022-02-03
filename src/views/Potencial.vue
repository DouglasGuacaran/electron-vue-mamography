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
                    <td contenteditable="true">{{item.kv}}</td>
                    <td contenteditable="true" @keyup="edit">{{item.kvMedido}}</td>
                    <td >{{item.dif}}</td>
                    <td contenteditable="true">{{item.tiempo}}</td>
                  </tr>
                                    

              </table>
          </div>
          <div class="col-5">

          </div>
      </div>
  </div>
</template>

<script>

export default {
    name:'Potencial',
    data(){
        return{
            items:[],
            result:"",
        }
        
    },
    methods: {
        edit() {
            let id = this.items.id
            console.log(id[0])
        }
    },
    created () {
    fetch("/json/kv.json")
        .then((response) => response.json())
        .then((data) => {
            this.items = data.data;
        });
    },
}
</script>

<style>

</style>