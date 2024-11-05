<script lang="ts">
	import type { PageData } from './$types';
	import BlogGrid from '$lib/components/blog/BlogGrid.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const POSTS_PER_PAGE = 9;
	const { posts, searchParams } = data;

	let search = $state('');

	$effect(() => {
		search = searchParams.get('search') ?? '';
	});

	let filteredPosts = $derived.by(() => {
		if (!search.length) {
			return posts
				.filter((post) => post.search.toLowerCase().includes(search.toLowerCase()))
				.slice(0, POSTS_PER_PAGE);
		}
		return posts.filter((post) => post.search.toLowerCase().includes(search.toLowerCase()));
	});
	let totalPages = $derived(Math.ceil(posts.length / POSTS_PER_PAGE));
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
		<div id="pagination" class="flex gap-3 justify-center my-8 text-lg">
			{#each Array(totalPages) as _, idx}
				{#if idx === 0}
					<span class="text-primary">{idx + 1}</span>
				{:else}
					<a href="/blog/page/{idx + 1}{search ? `?search=${search}` : ''}">
						{idx + 1}
					</a>
				{/if}
			{/each}
		</div>
	{/if}
</section>
