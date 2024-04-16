/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { supabase_admin }, request }) {
	const body = await request.json();

	const { data } = await supabase_admin
		.from('team_members')
		.select('*, teams(*)')
		.eq('member', body.user_id)
		.eq('active', true)
		.eq('teams.active', true);

	const teams = data.filter((/** @type {{ teams: any; }} */ team) => team.teams);

	return new Response(JSON.stringify(teams), { status: 200 });
}
