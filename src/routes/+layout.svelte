<script>
	import '../app.css';
	import Navigation from '../lib/components/layout-components/Navigation.svelte';
	import Sidebar from '../lib/components/layout-components/Sidebar.svelte';
	import Footer from '../lib/components/layout-components/Footer.svelte';

	let open = false;
</script>

<div class:open class="relative">
	<Navigation bind:open />
	<Sidebar bind:open />
	<slot />
	<Footer />
</div>

<style>
	.open {
		overflow-y: hidden;
	}
</style>
