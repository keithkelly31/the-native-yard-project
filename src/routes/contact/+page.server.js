import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals: { supabase_admin }, request }) => {
		const form = await request.formData();
		const email = form.get('email');
		const message = form.get('message');
		const name = form.get('name');

		const to = 'keith@simplelineup.com';
		const from = 'Simple Lineup Contact <noreply@simplelineup.com>';
		const html = `<p>Name: ${name}</p><p>Email: ${email}</p><p>${message}</p>`;
		const subject = `New Website Contact From ${name}`;
		const text = `Name: ${name}\n\nEmail: ${email}\n\n${message}`;

		const { error } = await supabase_admin.from('emails').insert({ from, html, subject, text, to });
		if (error)
			return fail(500, {
				details: error,
				error: true,
				message: 'There was an error sending the message.'
			});

		return {
			success: true,
			message: 'Message sent successfully. I will reply as soon as I can. Thank you.'
		};
	}
};
