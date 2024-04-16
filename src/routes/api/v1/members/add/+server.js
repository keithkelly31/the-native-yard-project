/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { supabase_admin }, request }) {
	// inserted row from auth users table
	const body = await request.json();
	const record = body.record;

	await supabase_admin
		.from('members')
		.insert({
			id: record.id,
			email: record.email,
			first_name: record.raw_user_meta_data.first_name,
			last_name: record.raw_user_meta_data.last_name
		});

	return new Response();
}
