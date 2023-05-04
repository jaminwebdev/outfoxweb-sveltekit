<script>
	import '../app.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import BgSpotlight from '$lib/components/BgSpotlight.svelte';
</script>

<div class="relative overflow-x-hidden">
	<BgSpotlight
		classes="absolute -top-[30vw] -right-[34%] md:-top-[420px] md:-right-[40%] w-[80%]" />

	<div id="layoutContainer" class="max-w-[1200px] mx-auto px-5">
		<Navigation />
		<slot />
		<Footer />
	</div>
</div>
