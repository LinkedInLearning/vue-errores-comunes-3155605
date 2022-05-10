<template>
<input type="number" v-model="cantidad" />
  <p>El valor total es: {{valorTotal}}</p>
</template>

<script>

export default {
  name: 'App',
  PRECIO: 500,
  data(){
    return{
      precio: 500,
      cantidad: 0
    }
  },
  computed:{
    valorTotal(){
      //return this.precio * this.cantidad;
      return this.$options.PRECIO * this.cantidad;
    }
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
