export type PostMeta = {
	meta: Record<string, string>;
	path: string;
	search: string;
};

export const fetchAllPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts: PostMeta[] = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath,
				// for post filtering
				search: `${metadata.title}`
			};
		})
	);

	return allPosts;
};
