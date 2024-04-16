/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { supabase_admin }, request }) {
	const event = await request.json();

	if (event.data.object.status === 'active' || event.data.object.status === 'trialing') {
		const { data } = await supabase_admin
			.from('teams')
			.select('id')
			.eq('stripe_customer', event.data.object.customer)
			.single();

		await supabase_admin.from('teams').update({ active: true }).eq('id', data.id);
	}

	return new Response();
}
