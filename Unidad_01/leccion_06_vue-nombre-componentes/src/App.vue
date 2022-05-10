<template>
{{dropdown}}
<dropdown v-model="dropdown" :opciones="listaOpciones" />
</template>

<script>
import {
    ref
} from 'vue';
import Dropdown from "./components/Dropdown";

export default {
    components: {
        Dropdown
    },
    setup() {
        var dropdown = ref('Opción 1');
        const listaOpciones = [
            'Opción 1',
            'Opción 2',
            'Opción 3',
        ];
        return {
            dropdown,
            listaOpciones
        };
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
