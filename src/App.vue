<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      

      <nav>   
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/animals">Animals</RouterLink>
        <RouterLink to="/form">Form</RouterLink>
        <RouterLink to="/filters">Busqueda</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">

</style>
