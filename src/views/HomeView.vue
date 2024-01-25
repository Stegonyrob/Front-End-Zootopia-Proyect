<script setup lang="ts">
import FormLogin from '../components/login/FormLogin.vue';
import Logo from '../components/header/Logo.vue';

</script>

<template>
  <main>
    <div class="contain_logo">
      <Logo/>
    </div>
    <body>
      <div class="cont_form">
        <FormLogin/>
      </div>
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

  .cont_form {
    margin: 10%;
    @media only screen and (max-width: 600px){
      margin-top: 30%;
    }
  }

  
}
footer {
  display: none;
}
header {
  display: none;
}

.contain_logo {
  position: absolute;
  margin: 1%;
}
</style>
