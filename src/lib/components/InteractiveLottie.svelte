<script lang="ts">
	import { Lottie } from 'lottie-svelte';
	import type { AnimationEvent, AnimationItem } from 'lottie-svelte/iface';

	export let timeLoop = 6000;
	export let repeat = false;
	export let path = '/lottie/Successful.json';
	export let forceAnimate = false;

	let animation: AnimationItem;

	const handler = (event: AnimationEvent) => {
		animation = event.detail;
		animation.goToAndStop(0);
		if (repeat) {
			setInterval(() => animation.goToAndPlay(0), timeLoop);
		}
	};

	$: if (forceAnimate) {
		animation.goToAndPlay(0);
	}
</script>

<!-- Lottie file is located at static/heart.json -->
<Lottie bind:path loop={false} on:animation={handler} />
