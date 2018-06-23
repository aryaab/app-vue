<template lang="pug">
  #app
    nd-header

    router-view 
    
    nd-footer

</template>

<script>
import ndFooter from '@/components/layouts/footer.vue'
import ndHeader from '@/components/layouts/header.vue'

export default {
  name: 'app',

  components: { ndFooter, ndHeader }

}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>