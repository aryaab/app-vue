<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.form-control(
          type="text", 
          placeholder="Buscar canciones", v-model="searchQuery"
          )
          a.btn.btn-primary.form-control(@click="search") Buscar
          a.btn.btn-danger.form-control &times;
          p
            small {{ searchMessage }}

      .container
        .row
          .col-md-6.results 
            p(v-for="t in tracks") {{ t.name }} - {{ t.artist }}

</template>

<script>

const tracks = [
  {name: 'In The Dark', artist: 'Sonata Arctica'},
  {name: 'Siempre', artist: 'Warcry'},
  {name: 'Un poco de Fe', artist: 'Warcry'}
]

export default {
  name: 'app',

  data () {
    return {
      msg: 'Expresiones en Vue',
      name: '',
      searchQuery: '',
      tracks: []
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      this.tracks = tracks
      console.log(this.searchQuery)
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'</style>