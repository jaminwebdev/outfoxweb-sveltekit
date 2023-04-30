<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const handleClick = (dir: 'next' | 'prev') => dispatch('changeStep', { dir });
</script>

Project Step

<div class="grid grid-cols-[repeat(2,_max-content)] justify-between gap-3">
	<Button classes="col-start-2" on:btnClicked={() => handleClick('next')}>Next</Button>
</div>
