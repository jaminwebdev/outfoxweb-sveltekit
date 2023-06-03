<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/layout/navigation/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import BgSpotlight from '$lib/components/BgSpotlight.svelte';
	import OverflowContainer from '$lib/components/OverflowContainer.svelte';
</script>

<div class="relative overflow-hidden">
	<div class="w-screen h-[500px] md:h-[1000px] overflow-hidden absolute top-0 pointer-events-none">
		<BgSpotlight
			classes="absolute -top-[30vw] -right-[34%] md:-top-[420px] md:-right-[40%] w-[80%]" />
	</div>

	<OverflowContainer>
		<Navigation />
		<slot />
		<Footer />
	</OverflowContainer>
	<div
		class="w-screen h-[500px] md:h-[700px] overflow-hidden absolute bottom-0 pointer-events-none">
		<BgSpotlight classes="absolute -bottom-[200px] -left-[375px] w-[800px] rotate-180" />
	</div>
</div>
