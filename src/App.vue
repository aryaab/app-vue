<template lang="pug">
  #app
    img(src="./assets/img/logo.png")
    h1 Ciclo de Vida

</template>

<script>

export default {
  name: 'app',

  data () {
    return {
      person: {
        name: 'Nidia'
      }
    }
  },

  created () {
    console.log('created....')
  },

  mounted () {
    console.log('mounted....')
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'</style>