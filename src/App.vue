<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/header/navbar.vue";
import Footer from "./components/footer/Footer.vue";
</script>

<template >
  <header v-if="$route.name !== 'Inicio'">
    <Navbar/>

    <div class="wrapper">
      <nav>
    <router-view/>
  
      </nav>
    </div>
  </header>
  
  <Footer v-if="$route.name !== 'Inicio'"/>
</template>

<style scoped lang="scss">
@import "./assets/main.scss";
</style>
