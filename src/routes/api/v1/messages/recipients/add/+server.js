/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { supabase_admin }, request }) {
	const body = await request.json();
	const record = body.record;

	await supabase_admin
		.from('message_members')
		.insert({ message: record.id, member: record.member, read: true });

	const storeMessageMembers = async () => {
		const promises = record.recipients
			.split(',')
			.map(
				async (/** @type {string} */ id) =>
					await supabase_admin.from('message_members').insert({ message: record.id, member: id })
			);
		await Promise.all(promises);
	};

	await storeMessageMembers();

	return new Response();
}
