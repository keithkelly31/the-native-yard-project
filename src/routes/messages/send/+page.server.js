/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, parent }) {
	const { session } = await parent();

	const data = {
		user_id: session.user.id
	};

	const response = await fetch('/api/v1/teams/get/active', {
		method: 'post',
		body: JSON.stringify(data)
	});

	const teams = await response.json();

	return { teams };
}
