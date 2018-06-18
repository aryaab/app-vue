<template lang="pug">
  .card
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
        small.ml-2 Duración: {{ track.duration_ms }}
        nav.level
          .level.text-center
            a.level-item.text-center(:href="track.preview_url" target="_blank") ▶
          .level.text-center
            a.level-item.text-center(@click="selectTrack") ▶
</template>

<script>
	export default {
	  props: {
	    track: { type: Object, required: true }
	  },

	  methods: {
	    selectTrack () {
	      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)
	    }
	  }
	}
</script>

