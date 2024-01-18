<script lang="ts" setup>

</script>

<template>
<nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">Zootopia</a>
    <img class= "img-logo" width="90" height="80" src="../../assets/img/icons8-cat-footprint-96 (1).png" alt="cat-footprint"/>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Familias">Familias</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/animals">Animales</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/Add">Añadir</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/Edit">Editar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/Buscar">Buscar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">LogOut</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>
<style scoped lang="scss">
@import '../../assets/navbar.scss';
</style>