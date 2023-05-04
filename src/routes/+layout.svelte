<script>
	import '../app.css';
	import Navigation from '../lib/components/layout-components/Navigation.svelte';
	import Footer from '../lib/components/layout-components/Footer.svelte';
</script>

<div class="max-w-[1200px] mx-auto px-5">
	<Navigation />
	<slot />
	<Footer />
</div>
