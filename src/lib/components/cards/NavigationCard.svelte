<script lang="ts">
	import InteractiveLottie from '$lib/components/InteractiveLottie.svelte';

	export let link = '/';
	export let lottiePath = '';
	export let bgColor: 'primary' | 'secondary' | 'tertiary' | 'orange' = 'primary';

	let isHovering = false;
	$: play = isHovering;
	const mouseEntered = () => (isHovering = true);
	const mouseLeft = () => (isHovering = false);

	const bgColors = {
		primary: 'hover:bg-primary/10',
		secondary: 'hover:bg-secondary/10',
		tertiary: 'hover:bg-tertiary/10',
		orange: 'hover:bg-orange/10'
	};
</script>

<a
	href={link}
	on:mouseenter={mouseEntered}
	on:mouseleave={mouseLeft}
	class="p-[70px_40px] hover:bg-body-color-dark {bgColors[bgColor]}">
	<div class="grid gap-2">
		<div class="max-w-[60px] max-h-[60px] -ml-2">
			<InteractiveLottie path={lottiePath} bind:forceAnimate={play} />
		</div>
		<h3 class="text-xl">
			<slot name="heading" />
		</h3>
		<p>
			<slot name="body" />
		</p>
	</div>
</a>
