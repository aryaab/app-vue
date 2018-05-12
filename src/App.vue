<template lang="pug">
  #app

      h1 {{ msg }}

      p {{ 1 + 1}}

      p {{ 'Hola ' + 'Mundo' }}

      p {{ person.name }}

      p {{ JSON.stringify(person) }}

      p {{ true ? 'true' : 'false' }}
      

</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      msg: 'Expresiones en Vue',

      person: {
        name: 'Nidia'
      }
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>