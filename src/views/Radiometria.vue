<template>
  <div>
    <h3>Tasa de Exposición Ambiental</h3>
    <div class="row">
      <div class="col input-group m-2">
        <label class="m-1" for="formulario1">Anodo/Filtro:</label>
        <input
          type="text"
          class="form-control"
          id="formulario1Input"
          placeholder="p.ej Rh/Rh"
          required
        />
      </div>
      <div class="col input-group m-2">
        <label class="m-1" for="formulario1">kV:</label>
        <input
          type="text"
          class="form-control"
          id="formulario1Input"
          placeholder="p.ej 32"
          required
        />
      </div>
      <div class="col input-group m-2">
        <label class="m-1" for="formulario1">mAs:</label>
        <input
          type="text"
          class="form-control"
          id="formulario1Input"
          placeholder="p.ej 200"
          required
        />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-5">
        <div class="input-group m-1">
          <table class="table">
            <tr>
              <th>Nivel del Foco</th>
              <th>mGy/h</th>
            </tr>
            <tr>
              <th>Lado frontal</th>
              <td contenteditable="true">0</td>
            </tr>
            <tr>
              <th>Lado derecho</th>
              <td contenteditable="true">0</td>
            </tr>
            <tr>
              <th>Lado izquierdo</th>
              <td contenteditable="true">0</td>
            </tr>
          </table>
        </div>
        <div class="input-group mt-1">
          <table class="table">
            <tr>
              <th>Consola de Control</th>
              <th>mGy/h</th>
            </tr>
            <tr>
              <th>Lado externo</th>
              <td contenteditable="true">0</td>
            </tr>
            <tr>
              <th>Lado interno</th>
              <td contenteditable="true">0</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-1"></div>
      <div class="col-5">
                <div class="input-group m-1">
          <table class="table">
            <tr>
              <th>Nivel del Rostro</th>
              <th>mGy/h</th>
            </tr>
            <tr>
              <th>Lado frontal</th>
              <td contenteditable="true">0</td>
            </tr>
            <tr>
              <th>Lado derecho</th>
              <td contenteditable="true">0</td>
            </tr>
            <tr>
              <th>Lado izquierdo</th>
              <td contenteditable="true">0</td>
            </tr>
          </table>
        </div>
        <div class="input-group mt-1">
          <table class="table">
            <tr>
              <th>Puerta de Acceso</th>
              <th>mGy/h</th>
            </tr>
            <tr>
              <th>Lado externo</th>
              <td contenteditable="true">0</td>
            </tr>
            <tr>
              <th>Lado interno</th>
              <td contenteditable="true">0</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 m-2">
        <p class="m-1" align="start"><b>Tolerancia:</b> 20mSv/año para el Trabajador Ocupacionalmente Expuesto</p>
        <pre align="start" style="font-family:helvetica; font-size:16px">                     1 mSv/año para el Público</pre>
      </div>
    <div class="row">
        <div class="col m-2 input-group">
          <label class="m-1" for="formulario1">Conclusiones:</label>
          <input type="text" class="form-control" id="formularioInput8" required>
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
  name: "Radiometria",
  methods: {},
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