<template>
<h4>{{opcionSeleccionada}}</h4>
<Dropdown :opciones="listaOpciones" @seleccionado="elementoSeleccionado" v-once/>
</template>

<script>
import Dropdown from "./components/Dropdown";

export default {
    name: 'App',
    data() {
        return {
            listaOpciones: [
                'Opción 1',
                'Opción 2',
                'Opción 3',
            ],
            opcionSeleccionada: null
        }
    },
    components: {
        Dropdown
    },
    methods: {
      elementoSeleccionado(elemento){
        this.opcionSeleccionada = elemento;
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
