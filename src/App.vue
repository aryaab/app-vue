<template lang="pug">
  #app
    nd-header

    section.section
      nav.nav.has-shadow
        .container
          h2.mb-4 {{ msg }}
          .row
            .col-md-6
              input.input.form-control(
              type="text", 
              placeholder="Buscar canciones", v-model="searchQuery"
              )
            .col-md-2
              a.btn.btn-primary.form-control(@click="search") Buscar
            .col-md-1
              a.btn.btn-danger.form-control &times;
          p.text-left.mt-4
            small {{ searchMessage }}

      .container
        .row
          .col-md-6.results 
            p.alert.alert-primary.text-left(v-for="t in tracks") {{ t.name }} - {{ t.artists[0].name }}


    nd-footer

</template>

<script>

import trackService from './services/track'
import ndFooter from './components/layouts/footer.vue'
import ndHeader from './components/layouts/header.vue'

export default {
  name: 'app',

  components: {ndFooter, ndHeader},

  data () {
    return {
      msg: 'Consumiendo APIs Rest',
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
      // this.tracks = tracks
      if (!this.searchQuery) { return }
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          console.log(res) 
        })
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'</style>