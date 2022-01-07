<template>
    <div class="Unidad">
      <h3>II Características de la Unidad Mamográfica</h3>
      <div class="row justify-content-lg-center">
          <div class="col-5">
            <h2>Mamógrafo</h2>
            <hr>
            <form>
              <div class="form-group mt-2">
                <label for="formulario1"> Marca:</label>
                <input type="text" class="form-control" id="formulario1Input1" placeholder="P. ej. Phillips" required>
              </div>
              <div class="form-group">
                <label for="formulario1">Modelo:</label>
                <input type="text" class="form-control" id="formulario1Input2" placeholder="P. ej. Mammomath" required>
              </div>
              <div class="form-group">
                <label for="formulario1">Serial:</label>
                <input type="text" class="form-control" id="formulario1Input3" placeholder="P. ej. 123456789" required>
              </div>
              <div class="m-2">
                <h2>Tubo de Rayos X</h2>
                <hr>  
              </div>
              <div>
              <label for="formulario1"> Marca:</label>
              <input type="text" class="form-control" id="formulario1Input1" placeholder="P. ej. Phillips" required>
              </div>
              <div class="form-group">
                <label for="formulario1">Modelo:</label>
                <input type="text" class="form-control" id="formulario1Input2" placeholder="P. ej. Mammomath" required>
              </div>
              <div class="form-group">
                <label for="formulario1">Serial:</label>
                <input type="text" class="form-control" id="formulario1Input3" placeholder="P. ej. 123456789" required>
              </div>            
            
            </form>
          </div>
                    <div class="col-5">
            <h2>Housing</h2>
            <hr>
            <form>
              <div class="form-group mt-2">
                <label for="formulario1"> Marca:</label>
                <input type="text" class="form-control" id="formulario1Input1" placeholder="P. ej. Phillips" required>
              </div>
              <div class="form-group">
                <label for="formulario1">Modelo:</label>
                <input type="text" class="form-control" id="formulario1Input2" placeholder="P. ej. Mammomath" required>
              </div>
              <div class="form-group">
                <label for="formulario1">Serial:</label>
                <input type="text" class="form-control" id="formulario1Input3" placeholder="P. ej. 123456789" required>
              </div>
              <div class="m-2">
                <h2>Receptor de Imagen</h2>
                <hr>  
              </div>
              <div>
              <label for="formulario1"> Marca:</label>
              <input type="text" class="form-control" id="formulario1Input1" placeholder="P. ej. Phillips" required>
              </div>
              <div class="form-group">
                <label for="formulario1">Modelo:</label>
                <input type="text" class="form-control" id="formulario1Input2" placeholder="P. ej. Mammomath" required>
              </div>
              <div class="form-group">
                <label for="formulario1">Serial:</label>
                <input type="text" class="form-control" id="formulario1Input3" placeholder="P. ej. 123456789" required>
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
  name:"Unidad",

}
</script>

<style>

</style>