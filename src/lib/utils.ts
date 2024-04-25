export async function getPosts(filter: Function | null = null, limit = 10) {
	const all = import.meta.glob(`../posts/**/*.md`);
	let raw = [];

	for (let post in all) {
		const data = await all[post]();
		raw.push({
			...data.metadata,
			content: data.default.render().html,
			category: post.split('/')[2],
			slug: post.split('/').pop()?.slice(0, -3)
		});
	}

	let posts = raw
		.filter((post) => post.published)
		.sort((a, b) => b.date.localeCompare(a.date))
		.slice(0, limit);

	if (filter) {
		posts = posts.filter((post) => filter(post));
	}

	return posts;
}
