<template>
<h1>Editar usuario</h1>
<v-form>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field counter="20" variant="outlined" :error-messages="nombreErrors" v-model="v$.usuario.nombre.$model" label="Nombre Completo" @input="v$.usuario.nombre.$touch()" @blur="v$.usuario.nombre.$touch()"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field variant="outlined" :error-messages="emailErrors" v-model="v$.usuario.email.$model" label="Email" @input="v$.usuario.email.$touch()" @blur="v$.usuario.email.$touch()"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-select variant="outlined" :error-messages="companiaErrors" v-model="v$.usuario.compania.$model" :items="companias" label="Compañia" @input="v$.compania.email.$touch()" @blur="v$.compania.$touch()"></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-btn color="primary" @click="guardarUsuario">Guardar cambios</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <NotificacionGlobal :mensaje="notificacion.mensaje" :error="notificacion.error" :mostrar="notificacion.mostrar"/>
            </v-col>
        </v-row>
    </v-container>
</v-form>
</template>

<script>
import {
    cloneDeep
} from 'lodash';
import {
    email,
    required,
    maxLength,
} from '@vuelidate/validators';
import {
    useVuelidate
} from '@vuelidate/core';

export default {
    name: 'EditarUsuario',
    data() {
        return {
            usuario: {},
            formularioValido: null,
            companias: ['Geoforma', 'Dognost', 'Comtrek', 'Entality', 'Coriander', 'Orbean', 'Zanymax', 'Frosnex', 'Xth', 'Marqet'],
            notificacion: {
                mostrar: false,
                error: false,
                mensaje: ''
            }
        }
    },
    props: {
        id: String,
    },
    mounted() {
        this.usuario = cloneDeep(this.$store.getters.obtenerUsuarios.filter(usuario => usuario.id === this.id)[0]);
    },
    validations() {
        return {
            usuario: {
                nombre: {
                    required,
                    maxLength: maxLength(20),
                },
                email: {
                    required,
                    email,
                },
                compania: {
                    required
                },
                fdn: {
                    required
                }
            }
        }
    },
    computed: {
        nombreErrors() {
            if (!this.v$.usuario.nombre.$dirty) return [];
            return this.v$.usuario.nombre.$errors.map(errorObj => this.traducir(errorObj.$validator));
        },
        emailErrors() {
            if (!this.v$.usuario.email.$dirty) return [];
            return this.v$.usuario.email.$errors.map(errorObj => this.traducir(errorObj.$validator));
        },
        companiaErrors() {
            if (!this.v$.usuario.compania.$dirty) return [];
            return this.v$.usuario.compania.$errors.map(errorObj => this.traducir(errorObj.$validator));
        },
    },
    methods: {
        traducir(error) {
            switch (error) {
                case 'required':
                    return 'Valor es requerido';
                case 'maxLength':
                    return 'Valor excede el número de caracteres requerido';
                case 'email':
                    return 'El email no tiene un formato válido';
                default:
                    return '';
            }
        },
        async guardarUsuario() {
            const valido = await this.v$.$validate();
            if (!valido) {
                this.notificacion.error = true;
                this.notificacion.mensaje = 'Formulario no es valido';
                this.notificacion.mostrar = true;
                return;
            }
            this.$store.dispatch('modificarUsuario', this.usuario).then(() => {
                this.notificacion.error = false;
                this.notificacion.mensaje = 'Datos guardados correctamente';
                this.notificacion.mostrar = true;
            });
        }
    },
    setup: () => ({
        v$: useVuelidate()
    }),
}
</script>
