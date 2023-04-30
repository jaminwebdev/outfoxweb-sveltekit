<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let type: 'button' | 'link' = 'button';
	export let color: 'primary' | 'secondary' | 'tertiary' = 'primary';
	export let link: string = '/';
	export let classes = '';

	const colorVariants = {
		primary: 'bg-primary shadow-[0_0_0.5em_0] shadow-primary after:shadow-[0_0_2.25rem] after:shadow-primary',
		secondary: 'bg-secondary shadow-[0_0_.5em_0] shadow-secondary after:shadow-[0_0_2.25rem] after:shadow-secondary',
		tertiary: 'bg-tertiary shadow-[0_0_.5em_0] shadow-tertiary after:shadow-[0_0_2.25rem] after:shadow-tertiary'
	};
</script>

{#if type === 'button'}
	<button
		type="button"
		on:click={() => dispatch('glowBtnClicked')}
		class={`glowBtn 
	${colorVariants[color]} 
	py-[16px] 
	px-[28px] 
	rounded-lg 
	inline-block 
	text-body-text-dark 
	relative 
	font-medium 
	cursor-pointer
    ${classes}`}
	>
		<slot />
	</button>
{:else if type === 'link'}
	<a
		href={link}
		class={`glowBtn 
	${colorVariants[color]} 
	py-[16px] 
	px-[28px] 
	rounded-lg 
	inline-block 
	text-body-text-dark 
	relative 
	font-medium 
	cursor-pointer
	${classes}`}
	>
		<slot />
	</a>
{/if}

<style>
	.glowBtn::before {
		pointer-events: none;
		content: '';
		position: absolute;
		background: inherit;
		top: 80%;
		left: 0;
		width: 100%;
		height: 100%;

		transform: perspective(40px) rotateX(40deg) scale(1, 0.35);
		filter: blur(20px);
		opacity: 0.3;
		transition: opacity 100ms linear;
	}

	.glowBtn::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: inherit;
		z-index: -1;
		opacity: 0;
		transition: opacity 100ms linear;
	}

	.glowBtn:hover::before,
	.glowBtn:focus::before {
		opacity: 1;
	}
	.glowBtn:hover::after,
	.glowBtn:focus::after {
		opacity: 0.5;
	}
</style>
