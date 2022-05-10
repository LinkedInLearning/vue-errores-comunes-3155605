<template>
  <div @click="$emit('valido')" />
  <div @click="$emit('no-valido')" />
</template>

<script>
export default {
  emits: ['valido']
}
</script>
