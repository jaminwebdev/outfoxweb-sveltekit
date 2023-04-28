<script lang="ts">
	import MobileNav from './MobileNav.svelte';
	import DesktopNav from './DesktopNav.svelte';
	export let open = false;
</script>

<nav>
	<div class="hidden lg:grid">
		<DesktopNav />
	</div>
	<div class="grid lg:hidden">
		<MobileNav bind:open />
	</div>
</nav>
