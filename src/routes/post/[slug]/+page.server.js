import { getPosts } from '$lib/utils';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const posts = await getPosts((post) => post.slug === params.slug);
	const post = posts[0];
	return {
		post
	};
}
