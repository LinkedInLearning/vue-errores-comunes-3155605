<template>
<h1 ref="titulo">Ejemplos Vue</h1>
</template>

<script>
import {
    gsap
} from 'gsap'
export default {
    name: 'Refs',
    mounted() {
        gsap.to(this.$refs.titulo, {
            color: '#0ad1f0',
            duration: 2,
            repeat: 10,
            yoyoEase: true
        });
    },
}
</script>

<style scoped>
h1 {
    font-size: 2rem;
    width: 100%;
    text-align: center;
}
</style>
