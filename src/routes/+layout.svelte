<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/layout/navigation/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import BgSpotlight from '$lib/components/BgSpotlight.svelte';
</script>

<div class="relative overflow-hidden">
	<BgSpotlight
		classes="absolute -top-[30vw] -right-[34%] md:-top-[420px] md:-right-[40%] w-[80%]" />

	<div id="layoutContainer" class="max-w-[1200px] mx-auto px-6">
		<Navigation />
		<slot />
		<Footer />
	</div>
	<BgSpotlight classes="absolute -bottom-[200px] -left-[375px] w-[800px] rotate-180" />
</div>
