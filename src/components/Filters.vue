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
    <div>
        <aside>
            <form @submit.prevent>
                <label for="">
                    <p>Nombre</p>
                    <input type="text" />
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
                </section>
    </div>
</template>
<style lang="scss" scoped>
    div{
        display: grid;
        grid-template-columns: 1fr 3fr;
    }
    @media (max-width: 630px) {
    div{
        display: flex;
        flex-direction: column;
    }
 }
    aside{
        background-color: #B6AD90;
        height: 100%;
    }
    @media (max-width: 630px) {
    aside{
        max-width: 100%;
    }
 }
    form{
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        gap: 1rem;
        padding-left: 1rem;
        margin-top: 2rem;
        margin-right: 1rem;
        height: 70vh;
        @media (max-width: 630px) {
            form{
                align-content: stretch;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
            }
        }

        input{
            background-color: #414833;
            color: #fff;
            border: none;
            height: 4rem;
            border-radius: 20px;
            font-size: 1.8rem;
        }
        .inputLarge{
            width: 34rem;
        }
        button{
            background-color: #7F4F24;
            color: #fff;
            font-size: 1.8rem;
            border: none;
            border-radius: 20px;
            height: 4rem;
            width: 13rem;
            margin-bottom: 3rem;
            position: relative;
            right: -20rem;
        }
        @media (max-width: 630px) {
            button{
                right: auto;
            }
        }
        .button_div{
            display: flex;
        }
    }
.animals{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.animals-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    margin-bottom: 5rem;
    
    
    .animal-card {
        width: 30rem;
        margin: 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 3rem;
        text-align: center;
        background-color: #656D4A;
        display: flex;
        flex-direction: column;
        align-items: center;

        h5{
            font-size: 1.5rem;
            text-align: center;
            margin: 0;
        }

        img {
            width: 28rem;
            height: 28rem;
            cursor: pointer;
            border-radius:3rem;
        }

        .info-card{
            height: 100%;
            width: 100%;
            border-radius:3rem;
            background:#A4AC86;
            margin-top: 1rem;
            padding: 1rem;
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
@media (max-width: 1337px) {
    .animals-cards{
        grid-template-columns: repeat(2, 1fr);
    }   
    } 
 @media (max-width: 1012px) {
    .animals-cards{
        grid-template-columns: 1fr;
    }
 }
    
</style>