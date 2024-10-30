<script lang="ts">
	import MultiStepProjectForm from '$lib/components/forms/multi-step-project/MultiStepProjectForm.svelte';
	import GlowButton from '$lib/components/GlowButton.svelte';
	import Button from '$lib/components/Button.svelte';
	import InteractiveLottie from '$lib/components/InteractiveLottie.svelte';

	let hovering = false;
	$: play = hovering;
</script>

<div class="grid grid-cols-3 my-8 gap-5 max-w-4xl mx-auto">
	<!-- Example of outer card hover controlling lottie animation -->
	<div
		class="bg-body-color-secondary rounded-xl"
		onmouseenter={() => (hovering = true)}
		onmouseleave={() => (hovering = false)}>
		<InteractiveLottie path="/lottie/Successful.json" bind:forceAnimate={play} />
	</div>
	<!-- Example of repeating lottie animation -->
	<div class="bg-body-color-secondary rounded-xl">
		<InteractiveLottie path="/lottie/Bubbles.json" timeLoop={5000} repeat />
	</div>
</div>

<div class="max-w-4xl m-auto">
	<h2>Multi-step form</h2>
	<MultiStepProjectForm />
</div>

<div>
	<h2 class="text-center pb-4">Glow Buttons</h2>
	<div class="pb-10 flex justify-center flex-wrap gap-4">
		<Button type="button" color="primary">Button Primary</Button>
		<Button type="link" color="secondary" link="/showcase">Button Secondary (link)</Button>
		<Button type="button" color="tertiary">Button Tertiary</Button>
	</div>
</div>
<div>
	<h2 class="text-center pb-4">Normal Buttons</h2>
	<div class="pb-10 flex justify-center flex-wrap gap-4">
		<Button type="button" flavor="normal" color="primary">Button Primary</Button>
		<Button type="link" flavor="normal" color="secondary" link="/showcase">
			Button Secondary (link)
		</Button>
		<Button type="button" flavor="normal" color="tertiary">Button Tertiary</Button>
	</div>
</div>
<div>
	<h2 class="text-center pb-4">Ghost Buttons</h2>
	<div class="pb-10 flex justify-center flex-wrap gap-4">
		<Button type="button" flavor="ghost" color="primary">Button Primary</Button>
		<Button type="link" flavor="ghost" color="secondary" link="/showcase">
			Button Secondary (link)
		</Button>
		<Button type="button" flavor="ghost" color="tertiary">Button Tertiary</Button>
	</div>
</div>
<div>
	<h2 class="text-center pb-4">Outline Buttons</h2>
	<div class="pb-10 flex justify-center flex-wrap gap-4">
		<Button type="button" flavor="outline" color="primary">Button Primary</Button>
		<Button type="link" flavor="outline" color="secondary" link="/showcase">
			Button Secondary (link)
		</Button>
		<Button type="button" flavor="outline" color="tertiary">Button Tertiary</Button>
	</div>
</div>
