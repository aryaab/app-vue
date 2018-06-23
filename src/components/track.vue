<template lang="pug">
  .card(v-if="track && track.album")
    .card-image
      figure.img-thumbnail
        img(:src="track.album.images[0].url")

    .card-content
      .info-media
        .row
          p.title.col-md-12.text-center
            strong {{ track.name }}
          p.subtitle.col-md-12.text-center {{ track.artists[0].name}}
      .content
        small.ml-2 Duración: {{ track.duration_ms | ms-to-mm }}
        nav.level
          .level.text-center
            button.btn.btn-primary.level-item.text-center(@click="selectTrack") ▶
          .level.text-center
            button.btn.btn-warning.level-item.text-center(@click="goToTrack(track.id)" ) 🌎
</template>

<script>
  import trackMixin from '@/mixins/track'

  export default {
    mixins: [ trackMixin ],
    
    props: {
      track: { type: Object, required: true }
    },

    methods: {
      goToTrack (id) {
        if (!this.track.preview_url) { return }
        this.$router.push({ name: 'track', params: { id } })
      }
    }
  }
</script>

