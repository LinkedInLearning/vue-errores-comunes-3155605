<template>
  <Checkbox v-model="seleccionado"/>
  {{seleccionado}}
</template>

<script>
import Checkbox from './components/Checkbox.vue'

export default {
  name: 'App',
  data(){
    return{
      seleccionado: false
    }
  },
  components: {
    Checkbox
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
