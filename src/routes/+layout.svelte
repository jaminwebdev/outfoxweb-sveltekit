<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/layout/navigation/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import BgSpotlight from '$lib/components/BgSpotlight.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import type { LayoutData } from './$types';
	import { onNavigate } from '$app/navigation';
	import type { Snippet } from 'svelte';

  interface Props {
    data: LayoutData;
    children: Snippet;
  }

	let { data, children }: Props = $props();

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="relative overflow-hidden">
	<div
		class="w-screen h-[500px] md:h-[1000px] overflow-hidden absolute top-0 pointer-events-none opacity-0 lg:opacity-100">
		<BgSpotlight
			classes="absolute -top-[30vw] -right-[34%] md:-top-[420px] md:-right-[40%] w-[80%]" />
	</div>

	<Container>
		<Navigation urlData={data.url} />
		{@render children()}
		<Footer />
	</Container>
	<div
		class="w-screen h-[500px] md:h-[700px] overflow-hidden absolute bottom-0 pointer-events-none">
		<BgSpotlight classes="absolute -bottom-[200px] -left-[375px] w-[800px] rotate-180" />
	</div>
</div>
