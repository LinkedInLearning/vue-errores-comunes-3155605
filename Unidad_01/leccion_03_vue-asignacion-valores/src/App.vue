<template>
<div>
    <h1>{{texto}}</h1>
    <h2>{{miArreglo}}</h2>
    <h2>{{miObjeto}}</h2>
    <br />
    <button @click="cambiarTexto">Cambiar texto</button>
    <br />
    <button @click="agregarArreglo">Agregar elemento a arreglo</button>
    <br />
    <button @click="agregarObjeto">Agregar propiedad a objeto</button>
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            texto: 'Hola',
            miArreglo: [1, 2, 3, 4, 5],
            miObjeto: {}
        }
    },
    methods: {
        cambiarTexto() {
            this.texto = 'Hola Vue';
        },
        agregarArreglo() {
           // this.miArreglo[2] = 15;
           this.$set(this.miArreglo, 2, 15);
        },
        agregarObjeto() {
           // this.miObjeto.prop = 15;
            this.$set(this.miObjeto, 'prop', 15);
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
