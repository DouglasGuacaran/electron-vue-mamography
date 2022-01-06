<template>
  <div class="Institucion">
    <h1>Inspección de Seguridad</h1>
      <div class="row">
        <div class="col-1"></div>
          <div class="col-5">
            <h2>Mecánica</h2>
            <hr>
            <form>
              <div class="input-group mt-2">
                <span class="m-1" for="formulario1">Movimiento Vertical del mamógrafo:</span>
              <hr>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Ascendente:</label>
                <input type="text" class="form-control" id="formulario1Input" required>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Descendente:</label>
                <input type="text" class="form-control" id="formulario1Input1" required>
              </div>
              <div class="input-group mt-2">
                <label class="m-1" for="formulario1">Movimiento Rotatorio del Brazo:</label>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Derecho:</label>
                <input type="text" class="form-control" id="formulario1Input2" required>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Izquierdo:</label>
                <input type="text" class="form-control" id="formulario1Input3" required>
              </div>
              <div class="input-group mt-2">
                <label class="m-1" for="formulario1">Movimiento de la paleta de compresión:</label>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Ascendente:</label>
                <input type="text" class="form-control" id="formulario1Input4" required>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Descendente:</label>
                <input type="text" class="form-control" id="formulario1Input5" required>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Funcionamiento de pedales:</label>
                <input type="text" class="form-control" id="formularioInput6" required>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Botones para accionar los movimientos:</label>
                <input type="text" class="form-control" id="formularioInput7" required>
              </div>
              <div class="input-group m-2">
                <label class="m-1" for="formulario1">Funcionamiento del sistema de Aire Acondicionado:</label>
                <input type="text" class="form-control" id="formularioInput8" required>
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
  name:'Institucion',
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

</style>