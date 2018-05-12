<template lang="pug">
  .app
    nav.navbar
      .col-md-2
        img(src="./assets/img/logo-movies.jpg")
      div(class="content-search col-md-8")
        input.form-control(type='text' placeholder='Busca tu peli, actor, actriz ó director favorito')
      .col-md-2
        ul(class="nav nav-tabs")
          li(class="nav-item dropdown")
            a(class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false") Nidia
              div(class="dropdown-menu")
                a(class="dropdown-item" href="#") Action
    section
      div(class="main-content")
        div(class="menu col-md-1")
          ul
            li 
             a(href="!#") 
              i(class="fas fa-home") 
              p Home
            li 
             a 
              i(class="fas fa-fire")
              p Trending
            li 
             a 
              i(class="far fa-heart")
              p Más likes
            li 
             a 
              i(class="fas fa-cog")
              p Ajustes


        div(class="col-md-11")
          .box-pelis(class="row")
            div(class="title col-md-12") Hoy en el cine
            .cards(class="col-md-4")
              img(src="./assets/img/Cazadores-de-sombras.jpg" alt="Película")
              p(class="card-text") Cazadores de Sombras: Ciudad de Hueso.

            .cards(class="col-md-4")
              img(src="./assets/img/Cazadores-de-sombras.jpg" alt="Película")
              p(class="card-text") Cazadores de Sombras: Ciudad de Hueso.

            .cards(class="col-md-4")
              img(src="./assets/img/Cazadores-de-sombras.jpg" alt="Película")
              p(class="card-text") Cazadores de Sombras: Ciudad de Hueso.
              


      

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
