import type { LayoutLoad } from './$types';
import { fetchAllPosts } from '$lib/utils/markdownPosts';

export const load: LayoutLoad = async () => {
	const allPosts = await fetchAllPosts();
	const sortedPosts = allPosts.sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date));

	return {
		posts: sortedPosts
	};
};
