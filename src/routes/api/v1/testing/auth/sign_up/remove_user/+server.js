/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { supabase_admin }, request }) {
	// inserted row from auth users table
	const body = await request.json();
	const record = body.record;

	if (record.email === 'testuser1@simplelineup.com') {
		await supabase_admin.auth.admin.deleteUser(record.id);
	}

	return new Response();
}
