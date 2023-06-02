import type { PageLoad } from './$types';

// await all posts from root layout.ts
export const load: PageLoad = async ({ parent }) => {
	return await parent();
};
