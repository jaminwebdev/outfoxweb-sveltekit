<script lang="ts">
	import Hamburger from './Hamburger.svelte';
	export let open: boolean;
</script>

<div class="py-6">
	<Hamburger bind:open />
</div>
