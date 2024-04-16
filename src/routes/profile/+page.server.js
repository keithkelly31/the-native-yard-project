import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
	const { session } = await parent();
	if (!session) return redirect(307, '/auth/signin');

	return {};
}

/** @type { import("./$types").Actions } */
export const actions = {
	email: async () => {},
	name: async () => {},
	password: async ({ request }) => {
		const form = await request.formData();
		const password = form.get('password');
		const password_confirm = form.get('confirm');

		console.log(password, password_confirm);
	}
};
