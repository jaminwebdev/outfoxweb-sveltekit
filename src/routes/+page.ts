export const prerender = true;
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	// await parent (root) layout where all blog posts are loaded
	await parent();
};
