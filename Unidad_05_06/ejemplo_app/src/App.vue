<template>
<v-app>
    <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Librería</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" bottom temporary>
        <v-list :items="items" @update:selected="abrirRuta"></v-list>
    </v-navigation-drawer>
    <v-main>
        <v-container fluid>
            <router-view :key="$route.fullPath"/>
        </v-container>
    </v-main>
    <v-footer app></v-footer>
</v-app>
</template>

<script>
import img from './assets/Sunset over water_LIL_134196.jpg'

export default {
    data: () => ({
        drawer: false,
        group: null,
        items: [{
                title: 'Inicio',
                value: '/',
            },
            {
                title: 'Libros',
                value: '/libros',
            },
            {
                title: 'Usuarios',
                value: '/usuarios',
            },
            {
                title: 'Galería',
                value: '/galeria',
            },
            {
                title: 'Imagen muestra',
                value: '/imagenmuestra',
            },
        ],
    }),
    watch: {
        group() {
            this.drawer = false
        },
    },
    methods: {
        async abrirRuta(item) {
            if (item[0]) {
                if (item[0] === '/imagenmuestra') {
                    await this.$store.dispatch('seleccionarImagen', img);
                }
                this.$router.push(item[0]);
            }
        }
    },
}
</script>
