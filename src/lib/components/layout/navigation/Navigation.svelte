<script lang="ts">
	import MobileNav from './MobileNav.svelte';
	import DesktopNav from './DesktopNav.svelte';
</script>

<nav>
	<div class="hidden lg:block">
		<DesktopNav />
	</div>
	<div class="block lg:hidden">
		<MobileNav />
	</div>
</nav>
