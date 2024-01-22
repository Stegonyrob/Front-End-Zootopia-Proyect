<script lang="ts" setup>
import { useAuthStore } from '@/stores/Auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const username = ref('')
const password = ref('')
const router = useRouter()
const store = useAuthStore()


function login() {
  if (username.value == store.user.username && password.value == store.user.password) {
    store.user.isAuthenticated = true
    const redirectPath = '/Familias' 
    router.push(redirectPath)
  }

}


</script>
<template>
  <div class="form_container">
    <div class="title_form">
      <h1 class="title">Login</h1>
    </div>
    <form class="login" @submit.prevent="login">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          name="username"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Introduzca email"
          v-model="username"
        />
        
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <!-- <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Recordar contraseña</label>
      </div> -->
      <div class="container_btn">
      <button id="btn_sign_up" type="submit" class="boton">SIGN UP</button>
    </div>
    </form>
  </div>
</template>
<style scoped lang="scss"></style>
