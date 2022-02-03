<template>
  <div class="Institucion">
    <h3>Geometría del haz de Radiación</h3>
    <div class="row justify-content-center">
      <div class="col-5">
        <div class="input-group m-1">
          <table class="table">
            <caption style="caption-side: top">
              Geometría del campo luminoso
            </caption>
            <thead>
              <th>Pared del Tórax</th>
              <th>Lado Derecho</th>
              <th>Lado Izquierdo</th>
              <th>Tolerancia</th>
            </thead>
            <tbody>
              <td contenteditable="true">0</td>
              <td contenteditable="true">0</td>
              <td contenteditable="true">0</td>
              <th contenteditable="true"><span>&#45;</span> 2%</th>
            </tbody>
          </table>
          <div class="input-group m-2">
            <label class="m-1" for="formulario1">Conclusiones:</label>
            <input
              type="text"
              class="form-control"
              id="formularioInput8"
              required
            />
          </div>
        </div>
        <div class="input-group mt-1">
          <table class="table">
            <caption style="caption-side: top">
              Simetría del sistema de compresión
            </caption>
            <tbody>
              <tr>
                <th>Diferencia del lado del tórax</th>
                <td contenteditable="true">0</td>
                <th>Tolerancia</th>
                <th colspan="2">Fuerza de Compresión</th>
              </tr>
              <tr>
                <th>Diferencia del lado posterior</th>
                <td contenteditable="true">0</td>
                <td class="rowspanText" rowspan="2" contenteditable="true">
                  <span>&#8804;</span> 5 mm
                </td>
                <th>Nominal</th>
                <td contenteditable="true">0</td>
              </tr>
              <tr>
                <th>Diferencia del espesor indicado</th>
                <td contenteditable="true">0</td>
                <th>Medido</th>
                <td contenteditable="true">0</td>
              </tr>
            </tbody>
          </table>
          <div class="input-group m-1">
            <label class="m-1" for="formulario1">Conclusiones:</label>
            <input
              type="text"
              class="form-control"
              id="formularioInput8"
              required
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="row justify-content-center">
        <div class="col-3 m-3">
          <button type="submit" class="btn btn-primary btn-sm">
            Guardar datos
          </button>
        </div>
        <div class="col-3 m-3">
          <button
            type="button"
            class="btn btn-outline-primary btn-sm"
            @click="$router.push('/')"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Geometria",
  methods: {
    editaTabla() {
      console.log("entro a editar");
      document.getElementById("paredTorax").innerHTML = "0";
    },
  },
};
</script>

<style>
body td:hover {
  background-color: skyblue;
}

body table caption {
  margin: 0;
  padding: 0;
  font-size: 25px;
  background-color: skyblue;
  color: black;
  text-align: center;
}
.btn {
  position: relative;
  display: inline-block;
}

.btn .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.btn .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.btn:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.rowspanText {
  vertical-align: middle;
  text-align: center;
}
</style>