<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let projectType: string[] = [];

	const handleClick = (dir: 'next' | 'prev') => dispatch('changeStep', { dir });
</script>

<p>What kind of project do you need help with?</p>
<div class="grid">
	<label><input type="checkbox" bind:group={projectType} value={'New website'} /> New website</label>
	<label><input type="checkbox" bind:group={projectType} value={'SEO'} /> SEO</label>
	<label><input type="checkbox" bind:group={projectType} value={'Design'} /> Design</label>
</div>

{#if projectType.length > 0}
	<div transition:fade class="grid grid-cols-[repeat(2,_max-content)] justify-between gap-3">
		<Button classes="col-start-2" on:btnClicked={() => handleClick('next')}>Next</Button>
	</div>
{/if}
