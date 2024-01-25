<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';



interface Animal {
 id: number;
 image_path: string;
 name: string;
 family: string;
 gener: string;
 origin: string;
 date: string;
 type: string;
 title: string;
}

const currentAnimal = ref<Animal>({
 id: 0,
 image_path: '',
 name: '',
 family: '',
 gener: '',
 origin: '',
 date: '',
 type: '',
 title: ''
});

let id: string | undefined;

const route = useRoute();

onMounted(async () => {
 if (typeof route.params.id === 'string') {
    id = route.params.id;
    console.log('ID recibido en la página de edición:', id);

    try {
      const response = await axios.get(`http://localhost:8080/api/v1/animals/${id}`);
      currentAnimal.value = response.data;
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching animal:', error);
    }
 } else {
    console.error('ID is undefined');
 }
});

const submitForm = async () => {
 if (!currentAnimal.value || !id) {
    console.error('currentAnimal o ID es null');
    return;
 }

 try {
    const response = await axios.put(`http://localhost:8080/api/v1/animals/${id}`, currentAnimal.value);
    console.log(response.data);
 } catch (error) {
    console.error('Error updating animal:', error);
 }
}

</script>



<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="" rel="stylesheet">
  
    <div class="container p-5">
      <h3 class="text-center">Editar Animal</h3>
        <form action="" class="row">
          <div class="col-4 text-center p-2">
            <label for="nombre" class="form-label">Nombre:</label>
            <input type="text" class="form-control" id="nombre" v-model="currentAnimal.name">
        </div>

        <div class="col-4 text-center p-2">
          <label for="tipo" class="form-label">Tipo:</label>
            
<input type="text" class="form-control" id="tipo" v-model="currentAnimal.type">
        </div>
        <div class="col-4 text-center p-2">
          <label for="familia" class="form-label">Familia:</label>
          <input type="text" class="form-control" id="familia" v-model="currentAnimal.family">
        </div>
        <div class="col-4 p-2">
          <figure class="figure p-2">
            <img src="../assets/img/conejo.jpg" class="figure-img img-fluid rounded" alt="Animal" width="150">
            <figcaption class="figure-caption"><button type="button" class="btn btn-success add_img">Añadir Imagen</button></figcaption>
          </figure>
        </div>
        <div class="col-4 text-center p-2">
          <label for="date" class="form-label">Fecha de ingreso:</label>
          <input type="date" class="form-control" id="date" v-model="currentAnimal.date">

          <label for="origen" class="form-label p-2">Origen:</label>
          <input type="text" class="form-control" id="origen" v-model="currentAnimal.origin">
        </div>
        <div class="col-4 text-center p-2">
          <label for="genero" class="form-label">Genero:</label>
          <input type="text" class="form-control" id="genero" v-model="currentAnimal.gener">
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