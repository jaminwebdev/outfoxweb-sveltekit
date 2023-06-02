<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { posts } = data;
	let search = '';
	$: filteredPosts = posts.filter((post) =>
		post.search.toLowerCase().includes(search.toLowerCase())
	);
</script>

<section id="blogPosts" class="min-h-[500px]">
	<div class="max-w-[700px] mx-auto grid">
		<input class="text-body-text-dark p-3 rounded-lg" bind:value={search} placeholder="Search..." />
	</div>

	<div>
		{#each filteredPosts as post}
			<a href={post.path}>
				<h3>{post.meta.title}</h3>
				<p>{post.meta.date}</p>
				<p>{post.meta.excerpt}</p>
			</a>
		{/each}
	</div>
</section>
