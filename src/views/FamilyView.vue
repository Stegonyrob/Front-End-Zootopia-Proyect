<script setup lang="ts">
import CardFamily from '@/components/family/CardFamily.vue';
</script>

<template>
  <main>
    <h1>Familia</h1>

    <section class="Galery">

     <CardFamily/>

    </section>
  </main>

</template>

<style scoped>

h1{
  text-align: center;
  font-size: 4rem;
  margin-top: 2rem;
}

.Galery{
display: grid;
justify-items: center;
align-items: center;
grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
gap: 3rem;
width: 100%;
padding: 2rem;
margin-bottom: 9rem;
}


</style>
