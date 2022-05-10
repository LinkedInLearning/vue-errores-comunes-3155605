<template>
<div>
    <label>Incorrecto</label>
    <input id="checkbox" type="checkbox" @change="cambiarEstado" />
</div>
</template>

<script>
export default {
    name: 'Incorrecto',
    methods: {
        cambiarEstado() {
            const estaSeleccionado = document.getElementById('checkbox').checked;
            if (estaSeleccionado) {
                console.log('Seleccionado');
            } else {
                console.log('no seleccionado');
            }
        }
    },
}
</script>

<style></style>
