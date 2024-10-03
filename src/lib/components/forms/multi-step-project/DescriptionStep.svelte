<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let description = '';
	let touched = false;
	let blurred = false;

	const handleClick = (dir: 'next' | 'prev') => dispatch('changeStep', { dir });
</script>

<p>Great! Give me a brief overview of what you have in mind.</p>

<textarea
	rows="6"
	class="w-full rounded-lg text-body-text p-3"
	bind:value={description}
	placeholder="Tell me more"
	on:focus={() => (touched = true)}
	on:blur={() => (blurred = true)} />
<p>Characters left: {750 - description.length}</p>

{#if description.length < 1 && touched && blurred}
	<p transition:fade|global class="text-secondary">
		We need a description of your project in order to serve your needs better 😀.
	</p>
{/if}

{#if description.length > 750}
	<p transition:fade|global class="text-secondary">
		Please keep the description to less than 750 characters.
	</p>
{/if}

<div class="grid grid-cols-[repeat(2,_max-content)] justify-between gap-3">
	<Button type="ghost" color="tertiary" on:btnClicked={() => handleClick('prev')}>Prev</Button>
	{#if description.length > 0}
		<span transition:fade|global>
			<Button on:btnClicked={() => handleClick('next')}>Next</Button>
		</span>
	{/if}
</div>
