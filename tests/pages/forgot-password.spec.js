import { expect, test } from '@playwright/test';
import { signIn, test_email, test_user_id } from '../config';

test.beforeEach(async ({ page }) => {
	await page.goto('/auth/forgot-password');
});

test('has expected title', async ({ page }) => {
	await expect(page).toHaveTitle('simple lineup | forgot password');
});

test('email input is visible', async ({ page }) => {
	await expect(page.getByRole('textbox', { name: 'email' })).toBeVisible();
});

test('form submit button is visible', async ({ page }) => {
	await expect(page.getByRole('button', { name: 'send password reset' })).toBeVisible();
});

test('visitor can submit password reset request', async ({ page }) => {
	await page.getByRole('textbox', { name: 'email' }).fill(test_email);
	await page.getByRole('button', { name: 'send password reset' }).click();
	await expect(
		page.getByText(
			`An email with instructions to reset your password has been sent to ${test_email}. You can safely close this window and complete the process through the email.`
		)
	).toBeVisible();
});

test('signed in user is redirected to the members page', async ({ page }) => {
	await signIn(page);
	await page.goto('/auth/forgot-password');
	await page.waitForURL(`/members/**`);
	await expect(page).toHaveURL(`/members/${test_user_id}`);
});
