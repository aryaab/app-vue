<template lang="pug">
  div
    h1 Este es un componente hijo
    local-component

</template>

<script>
  import localComponent from './localComponent.vue'
  export default {
    components: { localComponent }
  }
</script>
