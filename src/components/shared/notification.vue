<template lang="pug">
	.container
	  .col-md-12
	    .col-md-5.offset-md-4
	      .notification
	        p.alert.alert-danger(v-if="total == 0 ") Hay {{ total }} resultados.
	        p.alert.alert-success(v-else) Hay {{ total }} resultados.
</template>

<script>
	export default {
	  props: {
	    total: { type: Number, required: true }
	  }
	}
</script>