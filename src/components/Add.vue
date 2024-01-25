<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="" rel="stylesheet">

  <div class="container p-5">
    <h3 class="text-center">Añadir Animal</h3>
      <form action="" class="row">
        <div class="col-4 text-center p-2">
          <label for="nombre" class="form-label">Nombre:</label>
          <input type="text" class="form-control" id="nombre">
        </div>
        <div class="col-4 text-center p-2">
          <label for="tipo" class="form-label">Tipo:</label>
          <input type="text" class="form-control" id="tipo">
        </div>
        <div class="col-4 text-center p-2">
          <label for="familia" class="form-label">Familia:</label>
          <input type="text" class="form-control" id="familia">
        </div>
        <div class="col-4 p-2">
          <figure class="figure p-2">
            <img src="../assets/img/conejo.jpg" class="figure-img img-fluid rounded" alt="Animal" width="150">
            <figcaption class="figure-caption"><button type="button" class="btn btn-success add_img">Añadir Imagen</button></figcaption>
          </figure>
        </div>
        <div class="col-4 text-center p-2">
          <label for="date" class="form-label">Fecha de ingreso:</label>
          <input type="date" class="form-control" id="date">

          <label for="origen" class="form-label p-2">Origen:</label>
          <input type="text" class="form-control" id="origen">
        </div>
        <div class="col-4 text-center p-2">
          <label for="genero" class="form-label">Genero:</label>
          <input type="text" class="form-control" id="genero">
        </div>
        <div class="col-6">
          <button type="button" class="btn btn_subir btn-lg float-end">Subir</button>
        </div>
        
      </form>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style scoped lang="scss">

h3{
  font-family: "Irish Grover", system-ui;
  font-size: 40px;
}
input{
  padding: 10px;
  border-radius: 50px;;
}
.btn_subir{
  background-color: #582F0E;
  color: #fff;
  font-family: "Irish Grover", system-ui;
  font-size: 20px;
}
.btn_subir:hover{
  background-color: #915724;
  transition: 0.5s;
}
label{
  text-align: center;
  font-size: 20px;
  font-family: "Irish Grover", system-ui;
}
.add_img{
  background-color: #A4AC86;
  border-style: none;
}
.add_img:hover{
  background-color: #44520f;
  transition: 0.5s;
}
</style>