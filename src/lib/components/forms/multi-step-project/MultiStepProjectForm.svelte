<script lang="ts">
	import { fade } from 'svelte/transition';
	import ProjectStep from './ProjectStep.svelte';
	import DescriptionStep from './DescriptionStep.svelte';
	import InfoStep from './InfoStep.svelte';

	const steps = ['project', 'description', 'info'];
	let currentStep = 0;

	const form = {
		projectType: '',
		description: '',
		name: '',
		email: ''
	};

	const submitForm = () => {
		console.log(form);
	};

	const changeStep = (event: CustomEvent<{ dir: 'prev' | 'next' }>) => {
		if (event.detail.dir === 'next' && currentStep < steps.length - 1) {
			currentStep++;
			return;
		}
		if (event.detail.dir === 'prev' && currentStep >= 1) {
			currentStep--;
			return;
		}
	};
</script>

<div>
	{#if steps[currentStep] === 'project'}
		<div in:fade={{ duration: 250, delay: 250 }} out:fade={{ duration: 250 }}>
			<ProjectStep on:changeStep={changeStep} />
		</div>
	{:else if steps[currentStep] === 'description'}
		<div in:fade={{ duration: 250, delay: 250 }} out:fade={{ duration: 250 }}>
			<DescriptionStep on:changeStep={changeStep} />
		</div>
	{:else if steps[currentStep] === 'info'}
		<div in:fade={{ duration: 250, delay: 250 }} out:fade={{ duration: 250 }}>
			<InfoStep on:changeStep={changeStep} on:submitForm={submitForm} />
		</div>
	{/if}
</div>
