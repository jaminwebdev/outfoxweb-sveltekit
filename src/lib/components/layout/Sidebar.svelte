<script lang="ts">
	export let open: boolean;
	const handleNav = () => (open = !open);
</script>

<aside
	class="fixed top-0 z-10 w-full h-full bg-body-color-light dark:bg-body-color-dark text-body-text-dark dark:text-body-text-light"
	class:open>
	<nav class="p-12 text-xl">
		<a class="block" href="/about" on:click={handleNav}>About</a>
		<a class="block" href="#contact" on:click={handleNav}>Contact</a>
	</nav>
</aside>

<style>
	aside {
		right: -100%;
		transition: right 0.3s ease-in-out;
	}

	.open {
		right: 0;
	}
</style>
