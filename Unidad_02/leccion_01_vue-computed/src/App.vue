<template>
<div>
  {{inverso}}
</div>
</template>

<script>
import { cloneDeep } from 'lodash'

export default {
  name: 'App',
  data() {
    return {
      array: [1, 2, 3]
    };
  }, 
  computed: {
    inverso() {
     // return this.array.reverse(); // Efecto secundario
      return cloneDeep(this.array).reverse();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
