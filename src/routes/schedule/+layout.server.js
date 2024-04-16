import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch, parent }) {
	const { session } = await parent();
	if (!session) return redirect(307, '/auth/signin');

	const data = {
		user_id: session.user.id
	};

	const response = await fetch('/api/v1/teams/get/active/count', {
		method: 'post',
		body: JSON.stringify(data)
	});

	const count = await response.json();

	if (count === 0) redirect(307, '/teams');

	return {};
}
