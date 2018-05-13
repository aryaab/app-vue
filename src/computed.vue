<template lang="pug">
  #app
    input(v-model="name")
    p {{ name }}

    a(v-bind:href="url") Link

    input(v-model="lastname")

    p {{ fullname }}

    label Fecha de nacimiento:
    input(v-model="birthday")
    input(v-model="anio" type="hidden")

    p {{ 'Tu edad es: ' + age }}

</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      msg: 'Expresiones en Vue',
      name: '',
      lastname: '',
      url: 'https://platzi.com',
      birthday: '',
      anio: 2018
    }
  },
  computed: {
    fullname () {
      return this.name + ' ' + this.lastname
    },

    age () {
      return this.anio - this.birthday
    }
  },
  watch: {
    name (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'</style>