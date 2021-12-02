<template>
  <div>
      <div>
          <div>
            <form>
              <label for="">Ingrese el nombre de la Institución:</label>
              <input type="text">
              <br>
              <label for="">Ingrese la dirección de la Institución:</label>
              <input type="text">
              <br>
            </form>

            <button type="button" class="btn btn-outline-primary btn-sm" @click="$router.push('/')">Volver<span class="tooltiptext">Acá va el mensaje</span></button>

            
            <button type="button" class="btn">Prueba 2<span class="tooltiptext">Acá va el segundo mensaje</span></button>
            <button type="button" class="btn">Prueba 3<span class="tooltiptext">Acá va el tercer mensaje</span></button>
            <button type="button" class="btn">Prueba 4<span class="tooltiptext">Acá va el cuarto mensaje</span></button>
            <button type="button" class="btn">Prueba 5<span class="tooltiptext">Acá va el quinto mensaje</span></button>
          </div>
      </div>
      <div>
          <button type="button" class="btn btn-primary">Primary</button>
      </div>
  </div>
</template>

<script>
export default {

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