<script lang="ts">
	import { fade } from 'svelte/transition';
	import ProjectStep from './ProjectStep.svelte';
	import DescriptionStep from './DescriptionStep.svelte';
	import InfoStep from './InfoStep.svelte';
	import { Lottie } from 'lottie-svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const steps = ['project', 'description', 'info'];
	let currentStep = 0;
	// form fields
	let projectType: string[], description: string, name: string, email: string;

	let formStatus: 'initial' | 'loading' | 'success' | 'error' = 'initial';
	let selfClose = 12;
	let closeInterval: NodeJS.Timer;

	const submitForm = () => {
		formStatus = 'loading';
		const formItems = {
			projectType,
			description,
			name,
			email
		};
		console.log(formItems);

		setTimeout(() => (formStatus = 'success'), 2000);
		closeInterval = setInterval(() => selfClose--, 1000);
	};

	const changeStep = (event: CustomEvent<{ dir: 'prev' | 'next' }>) => {
		if (event.detail.dir === 'next' && currentStep < steps.length - 1) {
			currentStep++;
		}
		if (event.detail.dir === 'prev' && currentStep >= 1) {
			currentStep--;
		}
	};

	$: if (selfClose <= -2) {
		dispatch('autoCloseForm');
		clearInterval(closeInterval);
	}
</script>

{#if formStatus === 'loading'}
	<div transition:fade|global>
		<p>Submitting...</p>
	</div>
{/if}

{#if formStatus === 'success'}
	<div class="grid justify-center">
		{#if selfClose > 0}
			<div>
				<div class="max-w-[350px]">
					<Lottie path="/lottie/Successful.json" loop={false} />
				</div>
				<p>Hooray we'll be in touch</p>
				<span>This message will self destruct in {selfClose} seconds 💣</span>
			</div>
		{:else}
			<div class="max-w-[350px]">
				<Lottie path="/lottie/Bubbles.json" loop={false} height={200} />
			</div>
		{/if}
	</div>
{/if}

{#if formStatus === 'error'}
	<div transition:fade|global>
		<p>Whoopsies</p>
	</div>
{/if}

{#if formStatus === 'initial'}
	<div>
		{#if steps[currentStep] === 'project'}
			<div in:fade|global={{ duration: 250, delay: 400 }} out:fade|global={{ duration: 150 }}>
				<ProjectStep on:changeStep={changeStep} bind:projectType />
			</div>
		{:else if steps[currentStep] === 'description'}
			<div in:fade|global={{ duration: 250, delay: 400 }} out:fade|global={{ duration: 150 }}>
				<DescriptionStep on:changeStep={changeStep} bind:description />
			</div>
		{:else if steps[currentStep] === 'info'}
			<div in:fade|global={{ duration: 250, delay: 400 }} out:fade|global={{ duration: 150 }}>
				<InfoStep on:changeStep={changeStep} on:submitForm={submitForm} bind:name bind:email />
			</div>
		{/if}
	</div>
{/if}
