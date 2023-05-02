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
		class="bg-bg-color-dark rounded-xl"
		on:mouseenter={() => (hovering = true)}
		on:mouseleave={() => (hovering = false)}
	>
		<InteractiveLottie path="/lottie/Successful.json" bind:forceAnimate={play} />
	</div>
	<!-- Example of repeating lottie animation -->
	<div class="bg-bg-color-dark rounded-xl">
		<InteractiveLottie path="/lottie/Bubbles.json" timeLoop={5000} repeat />
	</div>
</div>

<div class="max-w-4xl m-auto">
	<h2>Multi-step form</h2>
	<MultiStepProjectForm />
</div>

<div class="grid place-items-center p-7">
	<h2>Glow Buttons</h2>
	<div class="grid gap-3 grid-cols-3">
		<GlowButton classes="mt-6" link="/" type="link">Glow Button Link</GlowButton>
		<GlowButton classes="mt-6 text-body-text-light" on:glowBtnClicked={console.log} color="tertiary"
			>Glow Button Action</GlowButton
		>
		<GlowButton
			classes="mt-6 text-body-text-light"
			on:glowBtnClicked={console.log}
			color="secondary">Glow Button Action</GlowButton
		>
	</div>
</div>
<div class="grid gap-6 place-items-center p-7">
	<h2>Regular Buttons - regular</h2>
	<div class="grid gap-3 grid-cols-3">
		<Button color="primary" on:btnClicked={console.log}>Normal button</Button>
		<Button color="secondary" on:btnClicked={console.log}>Normal button</Button>
		<Button color="tertiary" on:btnClicked={console.log}>Normal button</Button>
	</div>
</div>
<div class="grid gap-6 place-items-center p-7">
	<h2>Regular Buttons - outline</h2>
	<div class="grid gap-3 grid-cols-3">
		<Button color="primary" type="outline" on:btnClicked={console.log}>Outline button</Button>
		<Button color="secondary" type="outline" on:btnClicked={console.log}>Outline button</Button>
		<Button color="tertiary" type="outline" on:btnClicked={console.log}>Outline button</Button>
	</div>
</div>
<div class="grid gap-6 place-items-center p-7">
	<h2>Regular Buttons - ghost</h2>
	<div class="grid gap-3 grid-cols-3">
		<Button color="primary" type="ghost" on:btnClicked={console.log}>Ghost button</Button>
		<Button color="secondary" type="ghost" on:btnClicked={console.log}>Ghost button</Button>
		<Button color="tertiary" type="ghost" on:btnClicked={console.log}>Ghost button</Button>
	</div>
</div>
