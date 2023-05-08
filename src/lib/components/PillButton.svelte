<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let active = false;

	const handleClick = () => dispatch('pillClicked');

	const pillColors = {
		active: 'bg-secondary/20 text-secondary',
		inactive:
			'bg-tertiary-bg-light dark:bg-tertiary-bg-dark text-body-text-dark dark:text-body-text-light'
	};
</script>

<button
	on:click={handleClick}
	class={` ${active ? pillColors['active'] : pillColors['inactive']}
rounded-md bg-secondary/20 py-[5px] px-[14px]`}>
	<slot />
</button>
