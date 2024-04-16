/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { supabase_admin }, request }) {
	const body = await request.json();

	const { count } = await supabase_admin
		.from('team_members')
		.select('*', { count: 'exact', head: true })
		.eq('member', body.user_id)
		.eq('active', true);

	return new Response(JSON.stringify(count), { status: 200 });
}
