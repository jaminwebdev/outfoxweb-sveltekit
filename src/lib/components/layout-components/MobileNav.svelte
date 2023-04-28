<script lang="ts">
	import Hamburger from './Hamburger.svelte';
	import Sidebar from './Sidebar.svelte';
	export let open: boolean;
</script>

<div class="py-6 relative">
	<Hamburger bind:open />
	<Sidebar bind:open />
</div>
