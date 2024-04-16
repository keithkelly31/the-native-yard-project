/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { supabase_admin }, request }) {
	const body = await request.json();

	const { data } = await supabase_admin
		.from('team_members')
		.select('teams(active, id, name)')
		.eq('member', body.user_id)
		.eq('active', true);

	return new Response(JSON.stringify(data), { status: 200 });
}
