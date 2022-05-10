<template>
<label for="nombre">Nombre: </label>
<input type="text" name="nombre" v-model="usuarioInterno.nombre"/>
<br />
<br />
<label for="apellido">Apellido: </label>
<input type="text" name="apellido" v-model="usuarioInterno.apellido"/>
<br />
<br />
<button @click="guardar">Guardar</button>
</template>

<script>

export default {
  name: 'Login',
  data(){
    return{
      usuarioInterno: {
        nombre: null,
        apellido: null,
      }
    }
  },
  methods: {
    guardar(){
     // this.$parent.usuario = this.usuarioInterno;
     this.$emit('actualizado', this.usuarioInterno);
    }
  },
  watch:{
    usuario: {
      immediate: true,
      handler: function(valorUsuario){
        this.usuarioInterno = valorUsuario;
      }
    }
  },
  props: {
    usuario:{
      type: Object,
      default: ()=>({ nombre: null, apellido: null })
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
