<template>
<CampoTexto etiqueta="Prueba" ref="campoTexto" />
</template>

<script>
import CampoTexto from './components/CampoTexto.vue'

export default {
    name: 'App',
    components: {
        CampoTexto
    },
    mounted() {
        this.$refs.campoTexto.valorTexto = 'valor inicial';
        this.$refs.campoTexto.enforcar();
        console.log(this.$refs.campoTexto);
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
