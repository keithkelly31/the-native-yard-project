import { getPosts } from '$lib/utils';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const posts = await getPosts((post) => post.category === 'wildlife', 1000);

	return {
		posts
	};
}
