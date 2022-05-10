<template>
<div id="app">
    <Refs />
    <Incorrecto />
    <Correcto />
</div>
</template>

<script>
import Incorrecto from './components/Incorrecto.vue'
import Correcto from './components/Correcto.vue'
import Refs from './components/Refs.vue'

export default {
    name: 'App',
    components: {
        Incorrecto,
        Correcto,
        Refs
    }
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
