import { getPosts } from '../lib/utils';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const posts = await getPosts(null, 5);

	return {
		posts
	};
}
