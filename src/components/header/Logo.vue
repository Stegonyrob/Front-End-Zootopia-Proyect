<template>
    <div class="text-img-logo">
        <a class="navbar-brand" href="#">Zootopia</a>
        <img class= "img-logo" width="90" height="90" src="../../assets/img/icons8-cat-footprint-96 (1).png" alt="cat-footprint"/>
    </div>
</template>
<style scoped lang="scss">
@import '../../assets/navbar.scss';

.navbar-brand {
    font-size: 5rem;
}

.img-logo {
    @media only screen and (max-width: 600px){
        width: 60px;
        height: 60px;
    }
}

.text-img-logo{
    margin-left: 2%;
    display: flex;
    align-items: center;
    
}

</style>