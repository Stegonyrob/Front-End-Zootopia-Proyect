<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import axios from 'axios';



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

const allAnimals = ref<Animal[]>([]);
const itemsPerPage = 4;
const currentPage = ref(1);
const pages = computed(() => Math.ceil(allAnimals.value.length / itemsPerPage));

const router = useRouter();

const changePage = (page: number) => {
 if (page >= 1 && page <= pages.value) {
   currentPage.value = page;
 }
}

const fetchAnimals = async () => {
 const response = await axios.get("http://localhost:8080/api/v1/animals");
 allAnimals.value = response.data;
};

fetchAnimals();


const sendEditForm = (id: any) => {
 router.push({ name: 'Editar', params: { id: id } });
}
</script>
<template>

  <div class="animals">
    <div class="animals-cards">
      <div v-for="(animal, index) in allAnimals.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)"
        :key="animal.id" class="animal-card">
        <img :src="animal.image_path" :alt="animal.title">
        <div class="info-card">
          <h3>{{ animal.title }}</h3>
          <h5>Familia: {{ animal.family }}</h5>
          <h5>Genero: {{ animal.gener }}</h5>
          <h5>Origen: {{ animal.origin }}</h5>
          <h5>Fecha de Entrada: {{ animal.date }}</h5>
          <h5>Nombre: {{ animal.name }}</h5>
          <h5>Tipo: {{ animal.type }}</h5>
          <button @click="sendEditForm(animal.id)"><i class="bi bi-pencil-square"></i></button>
        </div>
      </div>
    </div>
    <nav aria-label="page" class="page">
      <ul class="pagination active pagination-lg justify-content-center" aria-current="page">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="changePage(currentPage - 1)" :disabled="currentPage === 1"><i
              class="bi bi-arrow-left"></i></button>
        </li>
        <li class="page-item" v-for="page in pages" :key="page">
          <button class="page-link" @click="changePage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === pages }">
          <button class="page-link" @click="changePage(currentPage + 1)" :disabled="currentPage === pages"><i
              class="bi bi-arrow-right"></i></button>
        </li>
      </ul>
    </nav>
</div>
</template>

<style lang="scss">

.animals{
height: 60%;
.animals-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
 .animal-card {
   margin: 1rem;
   padding: 1rem;
   border: 1px solid #ccc;
   border-radius: 3rem;
   text-align: center;
   background-color: #656D4A;
   max-width: 23rem;
   font-size: 100%;
 
   img {
     width: 20rem;
     height: 20rem;
     cursor: pointer;
     border-radius:3rem;
   }
   .info-card{
       border-radius:3rem;
       background:#A4AC86;
       padding:1rem;
       margin:-1rem;
       margin-top: 1rem;
       button{
           border:none;
           background: none;
           font-size:2rem;
           display: inline-block;
           position: relative;
           margin-left: 10rem;
       }
   }
   

 }
}}
.page{
    margin-bottom: 1rem;
    margin-top: 1rem;
   }
</style>
