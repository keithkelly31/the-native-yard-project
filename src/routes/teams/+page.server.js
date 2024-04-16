import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, parent }) {
	const { session } = await parent();
	if (!session) return redirect(307, '/auth/signin');

	const data = {
		user_id: session.user.id
	};

	const response = await fetch('/api/v1/teams/get', {
		method: 'post',
		body: JSON.stringify(data)
	});

	const teams = await response.json();

	return { teams };
}
