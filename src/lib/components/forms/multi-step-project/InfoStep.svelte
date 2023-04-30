<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const handleClick = (dir: 'next' | 'prev') => dispatch('changeStep', { dir });
	const submitForm = () => dispatch('submitForm');
</script>

Info Step

<div class="grid grid-cols-[repeat(2,_max-content)] justify-between gap-3">
	<Button type="ghost" on:btnClicked={() => handleClick('prev')}>Prev</Button>
	<Button on:btnClicked={submitForm}>Submit</Button>
</div>
