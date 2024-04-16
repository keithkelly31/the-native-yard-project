/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { supabase_admin }, request }) {
	const body = await request.json();
	const record = body.record;

	await supabase_admin
		.from('message_members')
		.update({ unread_reply: record.id })
		.eq('message', record.message)
		.neq('member', record.member);

	return new Response();
}
