<template lang="pug">
  .content(v-if="track && track.album")
    figure.img-thumbnail
      img(:src="track.album.images[0].url")
    p
      strong {{ track.name }}
      small [ {{ track.duration_ms | ms-to-mm }} ]
    p
      audio(controls, :src="track.preview_url")
</template>

<script>
import { mapState } from 'vuex'
export default {

  computed: {
    ...mapState(['track'])
  }
  // created () {
  //   this.$bus.$on('set-track', (track) => {
  //     this.track = track
  //   })
  // }
}
</script>
