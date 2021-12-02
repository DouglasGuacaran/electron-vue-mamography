<template>
  <div>
      <div>
          <div>
            <h1>Cualquier cosa 1</h1>
            <form action="">
              <label for="">Ingrese el nombre de la Institución:</label>
              <input type="text">
              <br>
              <label for="">Ingrese la dirección de la Institución:</label>
              <input type="text">
              <br>
            </form>
            <button class="tooltip" style="margin:2px" ><router-link to="/about">Prueba 1</router-link><span class="tooltiptext">Acá va el mensaje</span></button>
            <button class="tooltip" style="margin:2px" type="submit">Prueba 2<span class="tooltiptext">Acá va el segundo mensaje</span></button>
            <button class="tooltip" style="margin:2px" type="submit">Prueba 3<span class="tooltiptext">Acá va el tercer mensaje</span></button>
            <button class="tooltip" style="margin:2px" type="submit">Prueba 4<span class="tooltiptext">Acá va el cuarto mensaje</span></button>
            <button class="tooltip" style="margin:2px" type="submit">Prueba 5<span class="tooltiptext">Acá va el quinto mensaje</span></button>
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
.btn {
  color: rgb(65, 180, 42);
}

.tooltip{
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
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

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top:100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

</style>