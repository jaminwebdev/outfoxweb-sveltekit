import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const post = await import(`../${params.slug}.md`);
	const { title, pubDate, tags, coverImage } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		tags,
		pubDate,
		coverImage
	};
};
