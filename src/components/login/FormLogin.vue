<script lang="ts" setup></script>
<template>
  <div class="form_container">
    <div class="title_form">
      <h1>Login</h1>
    </div>
    <form class="login">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Introduzca email"
        />
        
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <div>
      <button id="btn_sign_up" type="submit" class="boton">SIGN UP</button>
    </div>
    </form>
  </div>
</template>
<style scoped lang="scss"></style>
