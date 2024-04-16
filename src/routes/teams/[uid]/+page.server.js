import { checkoutActivating } from '$lib/config';
import { error, fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals: { supabase }, params, parent }) {
	const { session } = await parent();
	if (!session) return redirect(307, '/auth/signin');

	const { data, error: err } = await supabase
		.from('team_members')
		.select('active, teams(*)')
		.eq('member', session.user.id)
		.eq('team', params.uid)
		.single();

	if (err)
		return error(500, {
			message: 'There was an error retrieving your team membership status from the database.'
		});

	if (!data.active)
		return error(401, {
			message:
				"You are not a member of this team. If you believe this is a mistake, please contact your team's administrator."
		});

	const { data: members } = await supabase
		.from('team_members')
		.select('active, members( id, first_name, last_name )')
		.eq('team', params.uid);

	return {
		members,
		isAdmin: session.user.id === data.teams.admin,
		team: data.teams
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	alert: async ({ locals: { getSession, supabase }, params, request }) => {
		const session = await getSession();
		if (!session)
			return fail(401, { error: true, message: 'You must be signed in to send a message.' });

		const form = await request.formData();
		const recipients = form.get('recipients');
		const subject = form.get('subject');
		const text = form.get('text');

		if (!recipients)
			return fail(400, {
				error: true,
				message: 'Please select at least one member to send the message.'
			});

		const { error } = await supabase
			.from('messages')
			.insert({ recipients, subject, text, member: session.user.id, team: params.uid });
		if (error)
			return fail(500, {
				error: true,
				message: `There was an error saving the message.\n\nDetails: ${error.message}`
			});

		return { success: true, message: 'Your message has been posted.' };
	},

	game: async () => {},

	invite: async ({ locals: { supabase_admin }, request, params }) => {
		const form = await request.formData();
		let addresses = form.get('addresses')?.toString();

		if (!addresses)
			return fail(400, { error: true, message: 'Please enter at least one email address.' });

		const emails = addresses.split(',').map((a) => a.trim());
		for (const email of emails) {
			const password =
				Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
			await supabase_admin.from('team_invites').insert({ email, password, team: params.uid });
		}

		return { success: true, message: 'Email invites sent successfully.' };
	},

	name: async ({ locals: { supabase }, params, request }) => {
		const form = await request.formData();
		const name = form.get('name');

		const { error } = await supabase.from('teams').update({ name }).eq('id', params.uid);
		if (error)
			return fail(500, { error: true, message: "There was an error updating the team's name." });

		return { success: true, message: 'Name updated successfully.' };
	},

	password: async ({ locals: { supabase }, params, request }) => {
		const form = await request.formData();
		const password = form.get('password');

		const { error } = await supabase.from('teams').update({ password }).eq('id', params.uid);
		if (error)
			return fail(500, {
				error: true,
				message: "There was an error updating the team's password."
			});

		return { success: true, message: 'Password updated successfully.' };
	},

	subscription: async ({ locals: { stripe }, params, request, url }) => {
		const form = await request.formData();
		const activating = form.get('activating');
		const customer = form.get('stripe_customer');

		let session;

		try {
			activating
				? (session = await stripe.checkout.sessions.create(
						checkoutActivating({
							origin: url.origin,
							stripe_customer: customer,
							team_id: params.uid
						})
					))
				: (session = await stripe.billingPortal.sessions.create({
						customer,
						return_url: `${url.origin}/teams/${params.uid}`
					}));
		} catch (error) {
			return fail(500, {
				error: true,
				// @ts-ignore
				message: `There was an error retreiving your subscription. ${error.message}`
			});
		}

		return {
			success: true,
			message: 'You will be redirected to Stripe to manage your account.',
			url: session.url
		};
	}
};
