<template>
<v-table>
    <thead>
        <tr>
            <th class="text-left">
                Autor
            </th>
            <th class="text-left">
                Páginas
            </th>
            <th class="text-left">
                Título
            </th>
            <th class="text-left">
                Año
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="libro in libros" :key="libro.id" @click="generarError">
            <td>{{ libro.autor }}</td>
            <td>{{ libro.paginas }}</td>
            <td>{{ libro.titulo }}</td>
            <td>{{ libro.anno }}</td>
        </tr>
    </tbody>
</v-table>
</template>

<script>
export default {
    name: 'ListaLibros',
    computed: {
        libros() {
            return this.$store.state.libros;
        },
    },
    methods: {
        generarError() {
            throw new Error('Otro error ha sucedido');
        }
    },
    errorCaptured(error) {
        console.log('*** Error capturado dentro de componente:', error.message);
    },
    mounted() {
        throw new Error('Un error ha sucedido');
    },
}
</script>
