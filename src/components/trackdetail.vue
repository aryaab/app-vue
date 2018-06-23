<template lang="pug">
  .container(v-if="track && track.id")
    .row 
      .col-md-4.text-center
        figure.img-thumbnail
          img(:src="track.album.images[0].url")
        p 
          a.btn.btn-primary
            span.icon(@click="selectTrack") ▶
      .col-md-8
        .card
          .card-body
            h1.title {{ trackTitle }}
          .panel-block
            article.media
              .media-content
                .content
                 ul(v-for="(v, k) in track")
                   li
                     strong {{ k }}:&nbsp;
                     span {{ v }}
                nav.level
                  .level-left
                    a.level-item
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import trackMixin from '@/mixins/track'
// import trackService from '@/services/track'

export default {
  
  mixins: [ trackMixin ],

  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },

  created () {
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id })
        .then(() => {
          console.log('Track loaded...')
        })
    }

    // trackService.getById(id)
    //   .then(res => { 
    //     this.track = res
    //   })
  },

  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>