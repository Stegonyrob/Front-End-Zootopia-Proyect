<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/header/navbar.vue";
import Footer from "./components/footer/Footer.vue";
</script>

<template >
  <header >
    <Navbar v-if="$route.name !== 'Inicio'"/>

<<<<<<< HEAD
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
=======
>>>>>>> dev
  </header>
  <div class="wrapper">
    <nav>
      <router-view/>
    </nav>
  </div>
  
  <Footer v-if="$route.name !== 'Inicio'"/>
</template>

<style scoped lang="scss">
@import "./assets/main.scss";
div{
  height: 100%;
  width: 100%;
}
</style>
