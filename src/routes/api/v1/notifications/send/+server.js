import { MAILGUN_DOMAIN } from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { mail, supabase_admin }, request }) {
	// inserted row from emails table
	const body = await request.json();
	const record = body.record;

	const message = {
		to: record.to,
		from: `${record.from || 'Simple Lineup Notifications'} <noreply@mg.simplelineup.com>`,
		html: record.html,
		subject: record.subject,
		text: record.text
	};

	await mail.messages.create(MAILGUN_DOMAIN, message);

	await supabase_admin.from('emails').delete().eq('id', record.id);

	return new Response();
}
