<script lang="ts">
	import Hamburger from './Hamburger.svelte';
	import SiteLogo from '$lib/components/SiteLogo.svelte';
	import Sidebar from './Sidebar.svelte';
	import { browser } from '$app/environment';

	let open = false;

	const toggleOpen = () => (open = !open);

	$: if (browser) {
		const body = document.querySelector('body');
		open ? (body!.style.overflowY = 'hidden') : (body!.style.overflowY = 'auto');
	}
</script>

<div class="py-4 relative">
	<div class="w-[65%] max-w-[170px]">
		<SiteLogo />
	</div>
	<Hamburger bind:open on:mobileMenuOpenToggle={toggleOpen} />
	<Sidebar bind:open />
</div>
