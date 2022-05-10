<template>
<v-window v-model="indiceVentana" show-arrows>
    <v-window-item v-for="(rutaImagen, i) in imagenes" :key="i">
        <v-card height="500px" class="d-flex justify-center align-center">
            <v-img @click="abrirImagen(rutaImagen)" :aspect-ratio="4 / 3" :width="300" :src="rutaImagen" cover></v-img>
        </v-card>
    </v-window-item>
</v-window>
</template>

<script>
import img1 from '../assets/Flowering plant_LIL_134187.jpg'
import img2 from '../assets/Logs_LIL_134130.jpg'
import img3 from '../assets/Point Reyes_ California_LIL_9672.jpg'
import img4 from '../assets/Sun over mountains_LIL_134158.jpg'
import img5 from '../assets/Sunset over water_LIL_134196.jpg'

export default {
    name: 'GaleriaImagenes',
    components: {},
    data: () => ({
        indiceVentana: 0,
        imagenes: [img1, img2, img3, img4, img5],
    }),
    methods: {
        abrirImagen(rutaImagen) {
            this.$store.dispatch('seleccionarImagen', rutaImagen).then(() => this.$router.push('/imagen'));
        }
    }
}
</script>
