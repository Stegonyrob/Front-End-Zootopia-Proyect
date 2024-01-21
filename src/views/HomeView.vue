<script setup lang="ts">
import FormLogin from '../components/login/FormLogin.vue';
</script>

<template>
  <main>
    <body>


      <FormLogin/>
    </body>
  </main>
</template>

<style scoped lang="scss">
body {
  background-image: url("../assets/img/fondo.jpg");
  background-size:cover;

  @media only screen and (max-width: 600px){
    background-size: auto;
    background-position: right;
  }
}
footer {
  display: none;
}
header {
  display: none;
}
</style>
