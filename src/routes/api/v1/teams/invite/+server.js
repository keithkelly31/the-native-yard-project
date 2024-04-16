/** @type {import('./$types').RequestHandler} */
export async function POST({ locals: { supabase_admin }, request, url }) {
	// inserted row from teams_invite table
	const body = await request.json();
	const record = body.record;

	const { data: team } = await supabase_admin
		.from('teams')
		.select('name')
		.eq('id', record.team)
		.single();

	const from = team.name;
	const html = `<h1>Simple Lineup</h1><h2>${team.name} Invitation</h2><p>You have been invited to join the team. Follow these steps to join:</p><p><ul><li><a href="${url.origin}/auth/signup">Sign up</a> or <a href="${url.origin}/auth/signin">sign in</a> to Simple Lineup</li><li>On your homepage click the join team button</li><li>In the form enter the team id and password below</li></ul></p><p>Team id: ${record.team}</p><p>Password: ${record.password}
	`;
	const subject = `Invite to Join ${team.name}`;
	const text = `You have been invited to join ${team.name} on Simple Lineup.\n\nTo join this team, please sign up or sign in to Simple Lineup (${url.origin}).\n\nOn your homepage click the join team button. In the form enter the team id and password below.\n\nTeam id: ${record.team}\n\nPassword: ${record.password}
	`;
	const to = record.email;

	await supabase_admin.from('emails').insert({ from, html, subject, text, to });

	return new Response();
}
