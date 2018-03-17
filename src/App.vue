<template lang="pug">
  #app.main
    img(src="./assets/img/logo-estacion.jpg")
    div
      h2(class="title-form") {{ msg }}
    div.form
      form(action="#", class="form-content")
        label(for="name" class="label-field") Nombre
        input(type="text" id="name" name="name" class="label-content" placeholder="Nidia")

        label(for="name" class="label-field") Apellido
        input(type="text" id="lastname" name="lastname" class="label-content" placeholder="Bustos")

        label(for="name" class="label-field") Cargo
        input(type="text" id="charge" name="charge" class="label-content" placeholder="Aprendiz de VueJs")

        button(class="btn-send" id="send-form-contact") Enviar

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Registro estación Platzi'
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
