<template lang="pug">
	section
		.header.nav
			.container
				.nav.pull-left
					.nav-item
						strong 💿 Platzi Music
				.nav.pull-right

		.body
			.container.text-center 
				h1.title Platzi Music
				h2.subtitle Canciones que están Vue-nisimas
				nd-player

</template>

<script>
import ndPlayer from '@/components/player.vue'

export default {
  components: { ndPlayer }
}
</script>