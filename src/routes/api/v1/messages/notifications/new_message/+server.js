/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { supabase_admin }, request, url }) {
	const body = await request.json();
	const record = body.record;

	if (body.record.read) return new Response();

	const { data } = await supabase_admin
		.from('view_send_new_message_notification')
		.select('*')
		.eq('id', record.message)
		.single();
	if (!data) return new Response(null, { status: 404 });

	const {
		id,
		message_subject,
		message,
		member_email,
		member_first_name,
		member_last_name,
		team_id,
		team_name
	} = data;

	const to = member_email;
	const from = team_name;
	const html = `
		<p>You have received a new message from ${member_first_name} ${member_last_name}.</p>
		<hr />
		<p><strong>${message_subject}</strong></p>
		<pre>${message}</pre>
		<hr />
		<p>
			<a href="${url.origin}/team/${team_id}/messages/${id}">View and respond at SimpleLineup.com</a>
		</p>`;
	const subject = `New ${team_name} Message`;
	const text = `You have received a new message from ${member_first_name} ${member_last_name}.\n\n${message_subject}\n\n${message}\n\nView and respond at ${url.origin}/team/${team_id}/messages/${id}.`;

	await supabase_admin.from('emails').insert({ from, html, subject, text, to });

	return new Response();
}
