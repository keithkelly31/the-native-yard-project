export const test_email = 'testuser@simplelineup.com';
export const test_password = '123456';
export const test_user_id = '9a0f5101-7868-4b3c-ab9c-e812c9610d7b';

export async function signIn(/** @type { import("@playwright/test").Page } */ page) {
	await page.goto('/auth/signin');
	await page.getByRole('textbox', { name: 'email' }).fill(test_email);
	await page.getByRole('textbox', { name: 'password' }).fill(test_password);
	await page.getByRole('button', { name: 'sign in' }).click();
	await page.waitForURL('/members/**');
	return;
}
