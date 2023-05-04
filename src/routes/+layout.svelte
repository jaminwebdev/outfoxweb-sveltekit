<script>
	import '../app.css';
	import Navigation from '$lib/components/layout-components/Navigation.svelte';
	import Footer from '$lib/components/layout-components/Footer.svelte';
	import BgSpotlight from '$lib/components/BgSpotlight.svelte';
</script>

<div class="relative overflow-x-hidden">
	<BgSpotlight
		classes="absolute -top-[30vw] -right-[34%] md:-top-[420px] md:-right-[40%] w-[80%]" />

	<div class="max-w-[1200px] mx-auto px-5">
		<Navigation />
		<slot />
		<Footer />
	</div>
</div>
