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

		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: `${url.origin}/auth/reset-password`
		});
		if (error)
			return fail(500, {
				error: true,
				message: `There was an error attempting to initiate a password reset. ${error.message}`
			});
		return {
			success: true,
			message: `An email with instructions to reset your password has been sent to ${email}. You can safely close this window and complete the process through the email.`
		};
	}
};
