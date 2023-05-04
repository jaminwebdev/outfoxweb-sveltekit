<script lang="ts">
	import SiteLogo from '$lib/components/SiteLogo.svelte';
</script>

<div class="py-[28px] grid grid-cols-[minmax(200px,_250px)_1fr]">
	<SiteLogo />
	<div class="grid gap-20 grid-flow-col text-xl justify-self-end items-center">
		<a href="/">Services</a>
		<a href="/">About</a>
		<a href="/">Resources</a>
		<button class="rounded-lg bg-secondary text-body-text-light py-[13px] px-[23px]"
			>Let's Chat</button>
	</div>
</div>
