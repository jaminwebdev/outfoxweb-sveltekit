<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let color: 'primary' | 'secondary' | 'tertiary' = 'primary';
	export let type: 'normal' | 'outline' | 'ghost' = 'normal';
	export let classes = '';

	const variants = {
		normal: {
			primary: 'bg-primary hover:scale-[1.05]',
			secondary: 'bg-secondary text-body-text-light hover:scale-[1.05]',
			tertiary: 'bg-tertiary text-body-text-light hover:scale-[1.05]'
		},
		outline: {
			primary: 'border-2 border-primary text-primary hover:bg-primary hover:text-body-text-dark',
			secondary:
				'border-2 border-secondary text-secondary hover:bg-secondary hover:text-body-text-light',
			tertiary:
				'border-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-body-text-light'
		},
		ghost: {
			primary: 'bg-primary/10 text-primary hover:bg-primary/20 hover:scale-[1.05]',
			secondary: 'bg-secondary/10 text-secondary hover:bg-secondary/20 hover:scale-[1.05]',
			tertiary: 'bg-tertiary/10 text-tertiary hover:bg-tertiary/20 hover:scale-[1.05]'
		}
	};
</script>

<button
	type="button"
	on:click={() => dispatch('btnClicked')}
	class={`glowBtn 
	${variants[type][color]} 
	py-4 
	px-[28px] 
	rounded-lg 
	inline-block 
	text-body-text-dark 
	relative 
	font-medium 
	cursor-pointer
    transition-all
    duration-150
    ${classes}`}>
	<slot />
</button>
