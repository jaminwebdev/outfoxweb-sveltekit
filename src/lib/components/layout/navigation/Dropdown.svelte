<script lang="ts">
	export let shown = false;
</script>

<div
	class:shown
	class="opacity-0 invisible absolute top-[130px] left-0 bg-secondary-bg-dark transition-all duration-150 w-screen p-3">
	<slot />
</div>

<style>
	.shown {
		opacity: 1;
		visibility: visible;
	}
</style>
