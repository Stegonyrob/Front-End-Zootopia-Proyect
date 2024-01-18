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
}

.Galery{
display: grid;
justify-items: center;
align-items: center;
grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
gap: 30px;
}


</style>
