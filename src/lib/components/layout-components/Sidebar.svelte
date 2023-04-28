<script lang="ts">
	export let open: boolean;
</script>

<aside class="absolute w-full h-full bg-body-color-light dark:bg-body-color-dark" class:open>
	<nav class="p-12 text-xl">
		<a class="block" href="#about">About</a>
		<a class="block" href="#contact">Contact</a>
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
