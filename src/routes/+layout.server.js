/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch, locals: { getSession } }) {
	const session = await getSession();
	let count = 0;

	if (session) {
		const data = {
			user_id: session.user.id
		};

		const response = await fetch('/api/v1/teams/get/active/count', {
			method: 'post',
			body: JSON.stringify(data)
		});

		count = await response.json();
	}

	return {
		active_teams_count: count,
		session
	};
}
