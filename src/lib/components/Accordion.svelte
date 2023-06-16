<script lang="ts">
	import { slide } from 'svelte/transition';
	export let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<div class="w-full max-w-[900px] mt-4">
	<button
		on:click={toggle}
		aria-expanded={isOpen}
		class="grid grid-cols-[1fr,_min-content] gap-2 items-center text-left w-full justify-between bg-secondary-bg-light dark:bg-secondary-bg-dark rounded-lg p-5">
		<slot name="question" />
		<svg
			style="tran"
			width="20"
			height="20"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			class="{isOpen ? '-rotate-90' : 'rotate-90'} transition-transform duration-200"
			stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg>
	</button>
	{#if isOpen}
		<div transition:slide={{ duration: 300 }} class="text-left w-full max-w-[900px] p-5">
			<slot name="answer" />
		</div>
	{/if}
</div>
