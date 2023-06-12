<script lang="ts">
	import MobileNav from './MobileNav.svelte';
	import DesktopNav from './DesktopNav.svelte';
	export let urlData: string;
</script>

<nav>
	<div class="hidden lg:block">
		<DesktopNav {urlData} />
	</div>
	<div class="block lg:hidden">
		<MobileNav />
	</div>
</nav>
