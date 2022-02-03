<template>
  <div class="home">
    <button @click="presionarBoton()">Boton de prueba</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  mounted() {
    // handle reply from the backend
    window.ipc.on('READ_FILE', (payload) => {
      console.log(payload.content);
    });
  },
  methods: {
    readFile(path) {
      // ask backend to read file
      console.log('algo');
      const payload = { path };
      window.ipc.send('READ_FILE', payload);
    },
    presionarBoton() {
      console.log('ejecutando presionar boton');
      window.ipc.send('READ_FILE', {
        name: 'daglas.json',
        content: {
          id: 0,
          name: 'Informe numero 1',
          data: [
            {
              nombre: 'primer formulario',
              campo1: 'data1',
              campo2: 'data2',
              campo3: 'data3',
              campo4: 'data4',
              campo5: 'data5'
            }
          ]
        }
      });
    }
  },
}



</script>

