<template lang="pug">
	.container
	  nd-track(v-bind:track="track")
</template>

<script>
import trackService from '@/services/track'
import ndTrack from '@/components/track.vue'

export default {
  components: { ndTrack },
  data () {
    return {
      track: {}
    }
  },

  created () {
    const id = this.$route.params.id

    trackService.getById(id)
      .then(res => { 
        this.track = res
      })
  }
}
</script>