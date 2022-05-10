<template>
<v-alert density="compact" v-bind:style="`${$props.mostrar? '' : 'display: none'}`" v-bind:type="`${$props.error? 'error' : 'success'}`">{{$props.mensaje}}.</v-alert>
</template>

<script>
export default {
    props: {
        error: {
            type: Boolean,
            default: false,
            required: false
        },
        mensaje: {
            type: String,
            required: true
        },
        mostrar: {
            type: Boolean,
            default: false,
            required: false
        }
    }
}
</script>
