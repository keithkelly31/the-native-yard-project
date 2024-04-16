import { checkoutActivating } from '$lib/config';
import { error, fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals: { getSession, stripe, supabase, supabase_admin }, request, url }) => {
		const session = await getSession();

		const form = await request.formData();
		const name = form.get('name');

		let checkout_url = '';

		if (!name) return fail(400, { error: "Please enter your team's name." });

		const { data: team, error: err } = await supabase
			.from('teams')
			.insert({ name, admin: session.user.id })
			.select()
			.single();

		if (err)
			return error(500, {
				message:
					'There was an error saving the team to the database. Please try creating your team again.'
			});

		await new Promise((resolve) => {
			supabase
				.channel('team')
				.on(
					'postgres_changes',
					{ event: 'UPDATE', schema: 'public', table: 'teams', filter: `id=eq.${team.id}` },
					async (/** @type {any} */ payload) => {
						const checkout_session = await stripe.checkout.sessions.create(
							checkoutActivating({
								origin: url.origin,
								stripe_customer: payload.new.stripe_customer,
								team_id: payload.new.id
							})
						);

						// Make sure this is stored so the database is cleaned properly when testing
						await supabase_admin
							.from('teams')
							.update({ stripe_checkout_session: checkout_session.id })
							.eq('id', team.id);
						resolve((checkout_url = checkout_session.url));
					}
				)
				.subscribe();
		});

		redirect(307, checkout_url);
	}
};
