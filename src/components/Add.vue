<script setup lang="ts">
import axios from 'axios';

let nombre = '';
let tipo = '';
let familia = '';
let origen = '';
let date = '';
let genero = '';
let selectedImagePath = '';

const submitForm = () => {
 axios.post("http://localhost:8080/api/v1/animals", {
    name: nombre,
    type: tipo,
    family: familia,
    origin: origen,
    date: date,
    gener: genero,
    image_path: selectedImagePath 
 })
 .then(response => {
    console.log(response);
 })
 .catch(error => {
    console.log(error);
 });
}
</script>




<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="" rel="stylesheet">

  <div class="container p-5">
    <h3 class="text-center">Añadir Animal</h3>
      <form action="" class="row">
        <div class="col-4 text-center p-2">
          <label for="nombre" class="form-label">Nombre:</label>
          <input type="text" class="form-control" id="nombre" v-model="nombre">
        </div>
        <div class="col-4 text-center p-2">
          <label for="tipo" class="form-label">Tipo:</label>
          <input type="text" class="form-control" id="tipo" v-model="tipo">
        </div>
        <div class="col-4 text-center p-2">
          <label for="familia" class="form-label">Familia:</label>
          <input type="text" class="form-control" id="familia" v-model="familia">
        </div>
        <div class="col-4 p-2">
          <figure class="figure p-2">
            <img src="../assets/img/conejo.jpg" class="figure-img img-fluid rounded" alt="Animal" width="150">
            <figcaption class="figure-caption"><button type="button" class="btn btn-success add_img">Añadir Imagen</button></figcaption>
          </figure>
        </div>
        <div class="col-4 text-center p-2">
          <label for="date" class="form-label">Fecha de ingreso:</label>
          <input type="date" class="form-control" id="date" v-model="date">

          <label for="origen" class="form-label p-2">Origen:</label>
          <input type="text" class="form-control" id="origen" v-model="origen">
        </div>
        <div class="col-4 text-center p-2">
          <label for="genero" class="form-label">Genero:</label>
          <input type="text" class="form-control" id="genero" v-model="genero">
        </div>
        <div class="col-6">
          <button type="button" class="btn btn_subir btn-lg float-end" @click="submitForm">Subir</button>

        </div>
        
      </form>
  </div>
</template>


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