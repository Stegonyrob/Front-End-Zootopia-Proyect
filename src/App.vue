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
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/animals">Animals</RouterLink>
        <RouterLink to="/form">Form</RouterLink>
        <RouterLink to="/filters">Busqueda</RouterLink>
      </nav>
    </div>
  </header>
  

  <RouterView />
  <Footer />
</template>

<style scoped lang="scss">
@import "./assets/main.scss";
</style>
