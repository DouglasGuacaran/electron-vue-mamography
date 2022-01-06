<template>
  <div class="Institucion">
      <div class="row">
        <div class="col-1"></div>
          <div class="col-5">
            <form>
              <div class="form-group mt-2">
                <label for="formulario1"> Nombre de la Institución:</label>
                <input type="text" class="form-control" id="formulario1Input1" placeholder="P. ej. Cruz Roja" required>
              </div>
              <div class="form-group">
                <label for="formulario1">Dirección:</label>
                <input type="text" class="form-control" id="formulario1Input2" placeholder="P. ej. Av. El Ocaso" required>
              </div>
              <div class="form-group">
                <label for="formulario1">Director:</label>
                <input type="text" class="form-control" id="formulario1Input3" placeholder="P. ej. José Aguilar" required>
              </div>
              <div class="form-group">
                <label for="formulario1">Jefe(a) de Servicio:</label>
                <input type="text" class="form-control" id="formulario1Input4" placeholder="P. ej. Luz Mirabal" required>
              </div>
              <div class="form-group">
                <label for="formulario1">Oficial de Protección Radiológica:</label>
                <input type="text" class="form-control" id="formulario1Input5" placeholder="P. ej. Gustavo García" required>
              </div>
              <div class="form-group">
                <label for="formulario1">Dosimetría Personal:</label>
                <div class="form-group">
                  <input type="radio" name="customRadio" class="custom-control-input" id="custom-radio-1">
                  <label class="custom-control-input m-2" for="custom-radio-1">Si</label>
                  <input type="radio" name="customRadio" class="custom-control-input" id="custom-radio-2">
                  <label class="custom-control-input m-2" for="custom-radio-2">No</label>
                </div>
                
              </div>
            </form>
          </div>
          <div class="col-5">
            <form>
              <div class="form-group mt-2">
              <label for="formulario1">Responsable del Control Dosimétrico:</label>
              <input type="text" class="form-control" id="formulario1Input6" placeholder="P. ej. Gustavo García" required>
            </div>
            <div class="form-group">
              <label for="formulario1">Fecha de Última Inspección:</label>
              <input type="date" class="form-control" id="formulario1Input7" placeholder="Another input" required>
            </div>
              <div class="form-group">
              <label for="formulario1">Responsable de la Última Inspección:</label>
              <input type="text" class="form-control" id="formulario1Input8" placeholder="P. ej. Gustavo García" required>
            </div>
            <div class="form-group">
              <label for="formulario1">Fecha de Último Control:</label>
              <input type="date" class="form-control" id="formulario1Input9" placeholder="Another input" required>
            </div>
              <div class="form-group">
              <label for="formulario1">Responsable del Control Técnico:</label>
              <input type="text" class="form-control" id="formulario1Input10" placeholder="P. ej. Gustavo García" required>
            </div>
            <div>
              <label for="formulario1">Trabajadores Ocupacionalmente Expuestos:</label>
                <div class="form-group">
                  <label class="custom-control-input m-2" for="custom-radio-1">Médicos</label>
                  <input type="number" class="custom-control-input col-1" min="0">
                  <label class="custom-control-input m-2" for="custom-radio-2">Técnicos</label>
                  <input type="number" class="custom-control-input col-1" min="0">
                </div>
            </div>

            </form>
          </div>
      </div>
      <div class="row">
        <div class="col-1">

        </div>
        <div class="col-5">
          <form>
            <div class="form-group">
              <label for="formulario1">Inspección Realizada por:</label>
              <input type="text" class="form-control" id="formulario1Input10" placeholder="P. ej. Luis López" required>
            </div>
            <div class="form-group">
              <label for="formulario1">Revisado y Aprobado por:</label>
              <input type="text" class="form-control" id="formulario1Input10" placeholder="P. ej. José Mejías " required>
            </div>
          </form>
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