import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, url }) => {
	// await parent (root) layout where all blog posts are loaded
	await parent();
	return {
		searchParams: url.searchParams
	};
};
