<script>
	import '../app.css';
	import Navigation from '../lib/components/layout-components/Navigation.svelte';
	import Footer from '../lib/components/layout-components/Footer.svelte';

	let open = false;
</script>

<div class:open>
	<Navigation bind:open />
	<slot />
	<Footer />
</div>

<style>
	.open {
		overflow-y: hidden;
	}
</style>
