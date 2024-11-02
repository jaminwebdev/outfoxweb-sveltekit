<script lang="ts">
	import { formatDate } from '$lib/utils/dates';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { title, date, content } = data;
</script>

<article class="singlePost">
	<h1>{title}</h1>
	<p>{formatDate(date)}</p>
	<svelte:component this={content} />
</article>

<style>
	.singlePost {
		display: grid;
		gap: 20px;
	}

	:global(.singlePost .shiki) {
		padding: 15px;
		border-radius: 20px;
	}
</style>
