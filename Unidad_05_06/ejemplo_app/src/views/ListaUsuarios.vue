<template>
<v-table>
    <thead>
        <tr>
            <th class="text-left">
                Nombre
            </th>
            <th class="text-left">
                Email
            </th>
            <th class="text-left">
                Compañia
            </th>
            <th class="text-left">
                Editar
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.compania }}</td>
            <td>
                <v-btn size="x-small" icon color="secondary" @click="$router.push(`/usuarios/${usuario.id}`)">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
            </td>
        </tr>
    </tbody>
</v-table>
</template>

<script>
export default {
    name: 'ListaUsuarios',
    computed: {
        usuarios() {
            return this.$store.state.usuarios;
        }
    }
}
</script>
