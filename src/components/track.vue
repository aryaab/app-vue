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
            button.btn.primary.level-item.text-center(@click="selectTrack") ▶
          .level.text-center
            button.btn.warning.level-item.text-center(@click="goToTrack(track.id)" ) 🌎
</template>

<script>
	export default {
	  props: {
	    track: { type: Object, required: true }
	  },

	  methods: {
	    selectTrack () {
      if (!this.track.preview_url) { return }
	      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)
	    },

    goToTrack (id) {
      if (!this.track.preview_url) { return }
      this.$router.push({ name: 'track', params: { id } })
    }
	  }
	}
</script>

