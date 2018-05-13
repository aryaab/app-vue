<template lang="pug">
  #app
    p(v-show="show") {{ valor }}     

    p(v-if="show") {{ valor }}   
    p(v-else) {{ 'No existe el valor' }}  

    ul
      li(v-for="i in items") {{ i }}


</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      msg: 'Expresiones en Vue',
      show: true,
      valor: 'Nidia',
      items: [1, 2, 3, 4, 5, 6, 7]
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>