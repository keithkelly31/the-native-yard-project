/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { supabase_admin }, request }) {
	const event = await request.json();

	await supabase_admin
		.from('teams')
		.update({ stripe_customer: event.data.object.id })
		.eq('id', event.data.object.name);

	return new Response();
}
