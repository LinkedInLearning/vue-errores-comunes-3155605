<template>
<h1>{{texto}}</h1>
<button @click="cambiarTexto">Cambiar texto</button>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            texto: 'Título de la página'
        }
    },
    methods: {
        cambiarTexto(){
          this.texto = 'Este es otro título';
        }
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
