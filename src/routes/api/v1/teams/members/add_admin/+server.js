/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { supabase_admin }, request }) {
	const body = await request.json();
	const record = body.record;

	await supabase_admin
		.from('team_members')
		.insert({ active: true, member: record.admin, team: record.id });

	return new Response();
}
