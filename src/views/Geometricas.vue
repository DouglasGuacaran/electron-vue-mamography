<template>
  <div class="Institucion">
    <h3>IV Geometría</h3>
      <div class="row">
          <div class="col-5">
              <div>
                <table class='table'>
                  <caption style="caption-side:top">Geometría del campo luminoso </caption>
                    <thead>
                      <th>Pared del Tórax</th>
                      <th>Lado Derecho</th>
                      <th>Lado Izquierdo</th>
                      <th>Tolerancia</th>                
                    </thead>             
                    <tbody>
                      <td contenteditable='true'>0</td>
                      <td contenteditable='true'>0</td>
                      <td contenteditable='true'>0</td>
                      <th> 2%</th>
                    </tbody>
                </table>
                <div class="input-group m-2">
                  <label class="m-1" for="formulario1">Conclusiones:</label>
                  <input type="text" class="form-control" id="formularioInput8" required>
                </div>
              </div>

            <form>
              <div class="input-group mt-2">
                <table class="table">
                  <caption style="caption-side:top">Simetría del sistema de compresión</caption>
                    <thead>
                    <tr>
                      <th>Diferencia del Lado del tórax</th>
                      <th>Diferencia del lado posterior</th>
                      <th>Exactitud del espesor indicado</th>
                      <th>Fuerza de Compresión</th>
                      <th>Tolerancia</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td contenteditable='true'>0</td>
                      <td contenteditable='true'>0</td>
                      <td contenteditable='true'>0</td>
                      <td contenteditable='true'>0</td> 
                      <th contenteditable='true'>2%</th>
                    </tr>                      
                    </tbody>
                </table>
                <div class="input-group m-2">
                  <label class="m-1" for="formulario1">Conclusiones:</label>
                  <input type="text" class="form-control" id="formularioInput8" required>
                </div>
              </div>
            </form>
          </div>
          <div class="col-5">
            <h2>Radiológica</h2>
            <hr>
            <form>
              <div class="input-group mt-2">
                <span class="m-1" for="formulario1">Clasificación de las zonas</span>
              <hr>
              </div>
              <div class="input-group m-2">
                <label class="m-2" for="formulario1">Cartel de Zona Controlada:</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-1">
                <label class="custom-control-input m-2" for="custom-radio-1">Si</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-2">
                <label class="custom-control-input m-2" for="custom-radio-2">No</label>
                
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Cartel de Zona Supervisada:</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-1">
                <label class="custom-control-input m-2" for="custom-radio-1">Si</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-2">
                <label class="custom-control-input m-2" for="custom-radio-2">No</label>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Lámparas luminosas:</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-1">
                <label class="custom-control-input m-2" for="custom-radio-1">Si</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-2">
                <label class="custom-control-input m-2" for="custom-radio-2">No</label>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Interruptores manuales:</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-1">
                <label class="custom-control-input m-2" for="custom-radio-1">Si</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-2">
                <label class="custom-control-input m-2" for="custom-radio-2">No</label>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Interruptores automáticos:</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-1">
                <label class="custom-control-input m-2" for="custom-radio-1">Si</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-2">
                <label class="custom-control-input m-2" for="custom-radio-2">No</label>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Visión del paciente:</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-1">
                <label class="custom-control-input m-2" for="custom-radio-1">Si</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-2">
                <label class="custom-control-input m-2" for="custom-radio-2">No</label>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Luces de Emergencia:</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-1">
                <label class="custom-control-input m-2" for="custom-radio-1">Si</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-2">
                <label class="custom-control-input m-2" for="custom-radio-2">No</label>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Extintor de incendio:</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-1">
                <label class="custom-control-input m-2" for="custom-radio-1">Si</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-2">
                <label class="custom-control-input m-2" for="custom-radio-2">No</label>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Detector de incendio:</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-1">
                <label class="custom-control-input m-2" for="custom-radio-1">Si</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-2">
                <label class="custom-control-input m-2" for="custom-radio-2">No</label>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Protector de rostro:</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-1">
                <label class="custom-control-input m-2" for="custom-radio-1">Si</label>
                <input type="radio" name="customRadio" class="align-self-center custom-control-input" id="custom-radio-2">
                <label class="custom-control-input m-2" for="custom-radio-2">No</label>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Observaciones:</label>
                <input type="text" class="form-control" id="formularioInput8" required>
              </div>
            </form>
          </div>
      </div>
      <div class="row">
        <div class="col-1">
        </div>
        <div class="row justify-content-center">
          <div class="col-3 m-3">
            <button type="submit" class="btn btn-primary btn-sm">Guardar datos</button>
          </div>
          <div class="col-3 m-3">
            <button type="button" class="btn btn-outline-primary btn-sm" @click="$router.push('/')">Volver al inicio</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'Geometricas',
  methods:{
    editaTabla(){
      console.log("entro a editar")
      document.getElementById("paredTorax").innerHTML = "0"
    }
  }

}
</script>

<style>


.btn{
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
  top:100%;
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

.celda {

}
</style>