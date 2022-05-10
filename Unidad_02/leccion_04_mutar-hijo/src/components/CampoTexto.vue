<template>
<label>{{etiqueta}}: </label>
<input ref="input" type="text" v-model="valorTexto" />
</template>

<script>
export default {
  name: 'CampoTexto',
  data(){
    return{
      valorTexto: ''
    }
  },
  methods: {
    enforcar(){
      this.$refs.input.focus();
    }
  },
  props:{
    etiqueta: String
  }
}
</script>

<style scoped></style>
