<template lang="pug">
  main

    nd-notification(v-show="showNotification" v-bind:total="total")

    nd-loader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.nav.has-shadow
        .container
          h2.mb-4 {{ msg }}
          .row
            .col-md-6
              input.input.form-control(
              type="text", 
              placeholder="Buscar canciones", v-model="searchQuery",
              v-on:keyup.enter="search"
              )
            .col-md-2
              a.btn.btn-primary.form-control(@click="search") Buscar
            .col-md-1
              a.btn.btn-danger.form-control &times;
          p.text-left.mt-4
            small {{ searchMessage }}

      .container
        .row.results 
          .col-md-3.text-left.mb-3(v-for="t in tracks")
            nd-track(
              v-blur="t.preview_url",
              :class="{'is-active': t.id == selectedTrack }",
              v-bind:track="t", v-on:select="setSelectedTrack"
            )

</template>

<script>

import trackService from '@/services/track'

import ndTrack from '@/components/track.vue'

import ndLoader from '@/components/shared/loader.vue'
import ndNotification from '@/components/shared/notification.vue'

export default {
  name: 'app',

  components: { ndTrack, ndLoader, ndNotification },

  data () {
    return {
      msg: '',
      name: '',
      searchQuery: '',
      tracks: [],
      total: 0,

      isLoading: false,
      showNotification: false,

      selectedTrack: ''
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  watch: {
    showNotification () {
      // if (this.showNotification) {
      //   setTimeout(() => {
      //     this.showNotification = false
      //   }, 3000)
      // }
    }
  }, 

  methods: {
    search () {
      // this.tracks = tracks
      if (!this.searchQuery) { return }

      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.total = res.tracks.total
          this.tracks = res.tracks.items
          this.isLoading = false
          this.showNotification = true
        })
    }, 

    setSelectedTrack (id) {
      this.selectedTrack = id
      console.log(id)
    }
  }
}
</script>