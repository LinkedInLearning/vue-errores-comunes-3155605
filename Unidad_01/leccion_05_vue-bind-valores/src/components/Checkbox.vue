<template>
<label>Prueba Checkbox</label>
<input type="checkbox" v-bind="{
             ...$attrs,
             onChange: (event) => $emit('update:modelValue', event.target.checked)}" :checked="modelValue"/>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
    }
}
</script>

<style scoped></style>
