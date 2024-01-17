<script setup lang="ts">
import { useAnimalsStore } from '@/stores/animalsStore';
import { computed, ref } from 'vue';


interface Animal {
  id: number;
  image: string;
  name: string;
  family: string;
  gener: string;
  origin: string;
  date: string;
  tipe: string;
  title: string;
}
const animalStore = useAnimalsStore();
const allAnimals = ref<Animal[]>(animalStore.animals);
const itemsPerPage = 4;
const currentPage = ref(1);
const pages = computed(() => Math.ceil(allAnimals.value.length / itemsPerPage));
const sendEditForm = (animalId: number) => {
  // Lógica para enviar el formulario de edición
}
const changePage = (page: number) => {
  if (page >= 1 && page <= pages.value) {
    currentPage.value = page;
  }
}
</script>
<template>
    <div>
        <aside>
            <form action="">
                <label for="">
                    <p>Nombre</p>
                    <input type="text">
                </label>
                <label for="">
                    <p>Tipo</p>
                    <input type="text">
                </label>
                <label for="">
                    <p>Familia</p>
                    <input type="text">
                </label>
                <label for="">
                    <p>Genero</p>
                    <input type="text">
                </label>
                <label for="">
                    <p>Fecha de ingreso</p>
                    <input class="inputLarge" type="text">
                </label>
                <label for="">
                    <p>Nacionalidad</p>
                    <input class="inputLarge" type="text">
                </label>

                <div class="button_div">
                    <button>Buscar</button>
                </div>
            </form>
        </aside>
        <section>
            <div class="animals">
                <div class="animals-cards">
                    <div v-for="(animal, index) in allAnimals.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)" :key="animal.id" class="animal-card">
                        <img :src="animal.image" :alt="animal.title">
                        <div class="info-card">
                            <h3>{{ animal.title }}</h3>
                            <h5>Familia: {{ animal.family }}</h5>
                            <h5>Genero: {{ animal.gener }}</h5>
                            <h5>Origen: {{ animal.origin }}</h5>
                            <h5>Fecha de Entrada: {{ animal.date }}</h5>
                            <h5>Nombre: {{ animal.name }}</h5>
                            <h5>Tipo: {{ animal.tipe }}</h5>
                            <button><i class="bi bi-pencil-square" @click="sendEditForm(animal.id)"></i></button>
                        </div>
                    </div>
                </div>
                <nav aria-label="page">
                    <ul class="pagination justify-content-center">
                        <li class="page-item" :class="{ disabled: currentPage === 1 }">
                            <button class="page-link" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
                        </li>
                        <li class="page-item" v-for="page in pages" :key="page">
                            <button class="page-link" @click="changePage(page)">{{ page }}</button>
                        </li>
                        <li class="page-item" :class="{ disabled: currentPage === pages }">
                            <button class="page-link" @click="changePage(currentPage + 1)" :disabled="currentPage === pages">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    </div>
</template>
<style lang="scss" scoped>
    div{
        display: grid;
        grid-template-columns: 1fr 3fr;
    }
    form{
        background-color: #B6AD90;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        gap: 1rem;
        padding-left: 1rem;
        margin-right: 1rem;

        input{
            background-color: #414833;
            color: #fff;
            border: none;
            height: 4rem;
            border-radius: 20px;
        }
        .inputLarge{
            width: 34rem;
        }
        button{
            background-color: #7F4F24;
            color: #fff;
            border: none;
            border-radius: 20px;
            height: 4rem;
            width: 13rem;
            margin-bottom: 3rem;
            position: relative;
            right: -20rem;
        }
        .button_div{
            display: flex;
        }
    }
.animals{
    display: flex;
    flex-direction: column;
}
.animals-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    margin-bottom: 5rem;

    .animal-card {
        margin: 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 3rem;
        text-align: center;
        background-color: #656D4A;
        display: flex;
        flex-direction: column;

        h5{
            font-size: 1.5rem;
            text-align: center;
            margin: 0;
        }

        img {
            width: 20rem;
            height: 20rem;
            cursor: pointer;
            border-radius:3rem;
        }

        .info-card{
            border-radius:3rem;
            background:#A4AC86;
            margin:-1rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            
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
}
</style>