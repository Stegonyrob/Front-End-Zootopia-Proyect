<script setup lang="ts">
let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:8080/api/v1/animals", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


</script>
<template>
    <div>
        <aside>
            <form action="">
                <label for="">
                    <p>Nombre</p>
                    <input type="text" >
                </label>
                <label for="">
                    <p>Tipo</p>
                    <input type="text">
                </label>
                <label for="">
                    <p>Familia</p>
                    <input type="text">
                </label>
                <label for="">
                    <p>Genero</p>
                    <input type="text">
                </label>
                <label for="">
                    <p>Fecha de ingreso</p>
                    <input class="inputLarge" type="text">
                </label>
                <label for="">
                    <p>Nacionalidad</p>
                    <input class="inputLarge" type="text">
                </label>

                <div class="button_div">
                    <button on-keyup="searchData">Buscar</button>
                </div>
            </form>
        </aside>
        <section>
            
        </section>
    </div>
</template>
<style lang="scss" scoped>
    div{
        display: grid;
        grid-template-columns: 1fr 3fr;
    }
    @media (max-width: 630px) {
    div{
        display: flex;
        flex-direction: column;
    }
 }
    aside{
        background-color: #B6AD90;
        height: 100%;
    }
    @media (max-width: 630px) {
    aside{
        max-width: 100%;
    }
 }
    form{
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        gap: 1rem;
        padding-left: 1rem;
        margin-top: 2rem;
        margin-right: 1rem;
        height: 70vh;
        @media (max-width: 630px) {
            form{
                align-content: stretch;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
            }
        }

        input{
            background-color: #414833;
            color: #fff;
            border: none;
            height: 4rem;
            border-radius: 20px;
            font-size: 1.8rem;
        }
        .inputLarge{
            width: 34rem;
        }
        button{
            background-color: #7F4F24;
            color: #fff;
            font-size: 1.8rem;
            border: none;
            border-radius: 20px;
            height: 4rem;
            width: 13rem;
            margin-bottom: 3rem;
            position: relative;
            right: -20rem;
        }
        @media (max-width: 630px) {
            button{
                right: auto;
            }
        }
        .button_div{
            display: flex;
        }
    }
.animals{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.animals-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    margin-bottom: 5rem;
    
    
    .animal-card {
        width: 30rem;
        margin: 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 3rem;
        text-align: center;
        background-color: #656D4A;
        display: flex;
        flex-direction: column;
        align-items: center;

        h5{
            font-size: 1.5rem;
            text-align: center;
            margin: 0;
        }

        img {
            width: 28rem;
            height: 28rem;
            cursor: pointer;
            border-radius:3rem;
        }

        .info-card{
            height: 100%;
            width: 100%;
            border-radius:3rem;
            background:#A4AC86;
            margin-top: 1rem;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            
            button{
                border:none;
                background: none;
                font-size:2rem;
                display: inline-block;
                position: relative;
                margin-left: 10rem;
            }
        }
    }
}
@media (max-width: 1337px) {
    .animals-cards{
        grid-template-columns: repeat(2, 1fr);
    }   
    } 
 @media (max-width: 1012px) {
    .animals-cards{
        grid-template-columns: 1fr;
    }
 }
    
</style>