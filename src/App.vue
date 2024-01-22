<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/header/navbar.vue";
import Footer from "./components/footer/Footer.vue";
</script>

<template >
  <header>
    <Navbar/>

    <div class="wrapper">
      <nav>
       
      </nav>
    </div>
  </header>
  

  <RouterView />
  <Footer />
</template>

<style scoped lang="scss">
@import "./assets/main.scss";
</style>
