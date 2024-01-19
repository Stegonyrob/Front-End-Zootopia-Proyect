<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/header/navbar.vue";
import Footer from "./components/footer/Footer.vue";
</script>

<template>
  <header>
    <Navbar />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Inicio </RouterLink>
        <RouterLink to="/Familias"> Familias</RouterLink>
        <RouterLink to="/animals"> Animals </RouterLink>
        <RouterLink to="/Add"> Añadir</RouterLink>
        <RouterLink to="/Edit"> Editar</RouterLink>
        <RouterLink to="/Buscar"> Buscar</RouterLink>
        <RouterLink to="/family">Family</RouterLink>
      </nav>
    </div>
  </header>
  

  <RouterView />
  <Footer />
</template>

<style scoped lang="scss">
@import "./assets/main.scss";
</style>
