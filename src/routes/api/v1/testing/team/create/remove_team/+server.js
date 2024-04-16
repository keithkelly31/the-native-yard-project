import { test_user_id } from '../../../../../../../../tests/config';

/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { supabase_admin }, request }) {
	// inserted row from teams table
	const body = await request.json();
	const record = body.record;

	if (record.admin === test_user_id && record.stripe_checkout_session !== null) {
		await supabase_admin.from('team_members').delete().eq('member', test_user_id);
		await supabase_admin.from('teams').delete().eq('id', record.id);
	}

	return new Response();
}
