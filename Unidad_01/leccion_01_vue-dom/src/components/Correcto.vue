<template>
<div>
    <label>Correcto</label>
    <input id="checkbox" type="checkbox" v-model="estaSeleccionado" />
</div>
</template>

<script>
export default {
    name: 'Correcto',
    data() {
        return {
            estaSeleccionado: false
        }
    },
    watch:{
         estaSeleccionado() {
            if (this.estaSeleccionado) {
                console.log('Seleccionado');
            } else {
                console.log('no seleccionado');
            }
        }
    }
}
</script>

<style></style>
