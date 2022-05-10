<template>
  <Perfil :usuario="usuario"/>
</template>

<script>
import Perfil from './components/Perfil.vue'

export default {
  name: 'App',
  components: {
    Perfil
  },
  data(){
    return{
      usuario:{
        nombre: 'Ana',
        apellido: 'Quesada'
      }
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
