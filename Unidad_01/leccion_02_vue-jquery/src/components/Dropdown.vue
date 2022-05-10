<template>
<div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="menu-desplegable-id" data-bs-toggle="dropdown" aria-expanded="false">
        Opciones
    </a>

    <ul class="dropdown-menu" aria-labelledby="menu-desplegable-id">
        <li v-for="opcion in opciones" :key="opcion">
            <a class="dropdown-item" href="#">{{opcion}}</a>
        </li>
    </ul>
</div>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'Dropdown',
    mounted() {
        $('.dropdown-menu li a').on('click', (evento) => {
            this.$emit('seleccionado', $(evento.currentTarget).text())
        });
    },
    props: {
        opciones: Array
    }
}
</script>

<style scoped>
</style>
