<script lang="ts">
	import type { PostMeta } from '$lib/utils/markdownPosts';
	import BlogCard from './BlogCard.svelte';

	interface Props {
		blogs: PostMeta[];
	}

	let { blogs }: Props = $props();
</script>

<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
	{#each blogs as blog (Math.random())}
		<BlogCard {blog} />
	{/each}
</section>
