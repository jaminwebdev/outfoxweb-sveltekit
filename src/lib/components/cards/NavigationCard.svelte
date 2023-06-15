<script lang="ts">
	import InteractiveLottie from '$lib/components/InteractiveLottie.svelte';

	export let link = '/';
	export let lottiePath = '';

	let isHovering = false;
	$: play = isHovering;
	const mouseEntered = () => (isHovering = true);
	const mouseLeft = () => (isHovering = false);
</script>

<a
	href={link}
	on:mouseenter={mouseEntered}
	on:mouseleave={mouseLeft}
	class="p-[60px_40px] hover:bg-body-color-dark">
	<div class="grid gap-2">
		<div class="max-w-[60px]">
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
