<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { fade } from 'svelte/transition';
	import { z } from 'zod';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let name = '';
	export let email = '';

	let nameTouched = false;
	let nameBlurred = false;
	let emailTouched = false;
	let emailBlurred = false;

	const emailSchema = z.string().email();
	$: emailValid = emailSchema.safeParse(email);

	const handleClick = (dir: 'next' | 'prev') => dispatch('changeStep', { dir });
	const submitForm = () => dispatch('submitForm');
</script>

<div class="grid gap-4">
	<label class="grid">
		What's your name, friend?
		<input
			type="text"
			bind:value={name}
			on:focus={() => (nameTouched = true)}
			on:blur={() => (nameBlurred = true)}
			class="text-body-text-dark" />
		{#if name.length < 1 && nameTouched && nameBlurred}
			<p transition:fade class="text-secondary">We need to know what to call you 😀.</p>
		{/if}
	</label>

	<label class="grid">
		What's your email {name}?
		<input
			type="email"
			bind:value={email}
			on:focus={() => (emailTouched = true)}
			on:blur={() => (emailBlurred = true)}
			class="text-body-text-dark" />
		{#if !emailValid.success && emailTouched && emailBlurred}
			<p transition:fade class="text-secondary">It's hard to email you without an email 😎.</p>
		{/if}
	</label>
</div>

<div class="grid grid-cols-[repeat(2,_max-content)] justify-between gap-3">
	<Button type="ghost" color="tertiary" on:btnClicked={() => handleClick('prev')}>Prev</Button>
	{#if name.length > 0 && emailValid.success}
		<span transition:fade>
			<Button on:btnClicked={submitForm}>Submit</Button>
		</span>
	{/if}
</div>
