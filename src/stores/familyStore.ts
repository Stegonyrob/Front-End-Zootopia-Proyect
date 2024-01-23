import { defineStore } from 'pinia';
import { reactive } from 'vue';

interface Family {

    id: number;
    image: string;
    family: string;
    
}

export const useFamiliesStore = defineStore('families', () => {
    const families = reactive<Family[]>([
        {
            id: 1,
            image: './src/assets/img/chacales.jpg',
            family: 'Canidae',
        },
        
        {
            id: 4,
            image: './src/assets/img/tejon.jpg',
            family: 'Mustelidae',
        },

        {
            id: 5,
            image: './src/assets/img/conejo.jpg',
            family: 'Leporidae',
        },
       
        {
            id: 8,
            image: './src/assets/img/iguana.jpg',
            family: 'Reptil',
        },
       
        {
            id: 12,
            image: './src/assets/img/lince.jpg',
            family: 'Felidae'
        }

    ]);
   
    return {
        families,
    };
});