import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, params }) => {
	// await parent (root) layout where all blog posts are loaded
	if (params.page === '1') {
		const searchParams = url.searchParams ? `?${url.searchParams}` : '';
		redirect(302, `/blog${searchParams}`);
	}
	return {
		searchParams: url.searchParams,
		params
	};
};
