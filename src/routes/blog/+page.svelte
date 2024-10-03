<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const POSTS_PER_PAGE = 9;
	const { posts, searchParams } = data;
	$: search = searchParams.get('search') ?? '';
	$: filteredPosts = posts.filter((post) =>
		post.search.toLowerCase().includes(search.toLowerCase())
	);
	$: totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
</script>

<section id="blogPosts" class="min-h-[500px]">
	<div class="max-w-[700px] mx-auto grid">
		<input class="text-body-text p-3 rounded-lg" bind:value={search} placeholder="Search..." />
	</div>

	<div>
		{#if filteredPosts.length}
			{#each filteredPosts.slice(0, POSTS_PER_PAGE) as post}
				<a href={post.path}>
					<h3>{post.meta.title}</h3>
					<p>{post.meta.date}</p>
					<p>{post.meta.excerpt}</p>
				</a>
			{/each}
		{:else}
			<h3 class="text-center mt-16">Sorry, it doesn't look like any posts match your search...</h3>
		{/if}
	</div>
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
</section>
