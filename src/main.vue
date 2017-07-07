<template>
	<!-- App -->
	<div id="app">

		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>

		<!-- Statusbar -->
		<f7-panel overlay></f7-panel>

		<!-- Views container -->
		<xartis-tabs></xartis-tabs>

	</div>
</template>

<script>
	import XartisTabs from './assets/vue/tabs.vue'

	export default {
		components: { XartisTabs },
		data: function() {
			return {}
		}
	}
</script>
