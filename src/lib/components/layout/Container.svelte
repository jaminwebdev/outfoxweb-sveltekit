<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		classes: string;
    children: Snippet;
	}

	let { classes, children }: Props = $props();
</script>

<div class="max-w-[1200px] mx-auto px-6 {classes}">
	{@render children()}
</div>
