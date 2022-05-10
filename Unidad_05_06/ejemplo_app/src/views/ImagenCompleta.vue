<template>
<v-img :aspect-ratio="4 / 3" :width="600" :src="ruta" cover></v-img>
</template>

<script>
export default {
    computed:{
        ruta(){
            return this.$store.state.imagenSeleccionada;
        }
    }
}
</script>
