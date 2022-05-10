<template>
  {{valor}}
  <br />
  <button @click="cambiarValor">Cambiar valor</button>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      valor: null
    }
  },
  mounted() {
    this.valor = 'valor en localStorage';
    localStorage.setItem('llave', this.valor);
  },
  methods: {
    cambiarValor(){
      this.valor = Math.floor(Math.random() * 10);
      localStorage.setItem('llave', this.valor);
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
