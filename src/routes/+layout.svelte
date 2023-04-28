<script>
	import '../app.css';
	import Navigation from '../lib/components/layout-components/Navigation.svelte';
	import Footer from '../lib/components/layout-components/Footer.svelte';
</script>

<div>
	<Navigation />
	<slot />
	<Footer />
</div>
