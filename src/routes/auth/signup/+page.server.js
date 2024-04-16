import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
	const { session } = await parent();
	if (session) return redirect(307, `/members/${session.user.id}`);
	return {};
}

/** @type {import("./$types").Actions} */
export const actions = {
	default: async ({ locals: { supabase }, request, url }) => {
		const form = await request.formData();
		const email = form.get('email');
		const first_name = form.get('first_name');
		const last_name = form.get('last_name');
		const password = form.get('password');

		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: { emailRedirectTo: url.origin, data: { first_name, last_name } }
		});
		if (error)
			return fail(400, {
				error: `There was an error when attempting to sign you up.\n${error.message}`
			});
		return {
			success:
				'You have been signed up successfully. Please check your email to complete the confirmation process. You can safely close this window.'
		};
	}
};
