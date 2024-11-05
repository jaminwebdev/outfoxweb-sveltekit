<script lang="ts">
	import type { PageData } from './$types';
	import BlogGrid from '$lib/components/blog/BlogGrid.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { posts, searchParams } = data;
	let currentPage = $derived(data.params.page);
	let trimStart = $derived((+currentPage - 1) * 9);
	let trimEnd = $derived(trimStart + 9);
	let search = $state('');

	$effect(() => {
		search = searchParams.get('search') ?? '';
	});

	let filteredPosts = $derived.by(() => {
		if (!search.length) {
			return posts
				.filter((post) => post.search.toLowerCase().includes(search.toLowerCase()))
				.slice(trimStart, trimEnd);
		}
		return posts.filter((post) => post.search.toLowerCase().includes(search.toLowerCase()));
	});
	let totalPages = $derived(Math.ceil(posts.length / 9));
</script>

<section id="blogPosts" class="min-h-[500px]">
	<div class="max-w-[700px] mx-auto grid">
		<input class="text-body-text-dark p-3 rounded-lg" bind:value={search} placeholder="Search..." />
	</div>

	<div>
		{#if filteredPosts.length}
			<BlogGrid blogs={filteredPosts} />
		{:else}
			<h3 class="text-center mt-16">Sorry, it doesn't look like any posts match your search...</h3>
		{/if}
	</div>
	{#if !search}
		<div class="flex gap-3 justify-center my-8 text-lg">
			{#each Array(totalPages) as _, idx}
				{#if idx === +currentPage - 1}
					<span class="text-primary">{idx + 1}</span>
				{:else if idx === 0}
					<a href="/blog{search ? `?search=${search}` : ''}"> 1 </a>
				{:else}
					<a href="/blog/page/{idx + 1}{search ? `?search=${search}` : ''}">
						{idx + 1}
					</a>
				{/if}
			{/each}
			{#if totalPages < 1}
				<a href="/blog{search ? `?search=${search}` : ''}"> 1 </a>
			{/if}
		</div>
	{/if}
</section>
