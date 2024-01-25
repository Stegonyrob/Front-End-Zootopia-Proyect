<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
 
</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>

        <RouterLink to="/filters">Busqueda</RouterLink>

        <RouterLink to="/about">About</RouterLink>
        <router-link to="/Add">Añadir</router-link>
        <router-link to="/Edit">Editar</router-link>

      </nav>
    </div>
  </header>
  

  <RouterView />
</template>

<style scoped lang="scss">

</style>
