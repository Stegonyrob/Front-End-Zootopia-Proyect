<script setup lang="ts">
import { computed, ref } from 'vue';
import { useFamiliesStore } from '../../stores/familyStore';

interface Family {

  id: number;
  image: string;
  family: string;
  
}
const familyStore = useFamiliesStore();
const allFamilies = ref<Family []>(familyStore.families);

</script>
<template>
  
      <div v-for="(family, index) in allFamilies " :key="family.id" class="cards">
      <img :src="family.image" :alt="family.family">
       <h1> {{ family.family }}</h1>
     </div>
 
</template>
<style lang="scss" scoped>


.cards{
  width: 20rem;
  height: 30rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background-color: rgb(61, 113, 61);

.cards:hover{
  background-color: #1c1919;
}

img{
  width: 85%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0px 0px 30px #1c1919; 
}

}

</style>



















