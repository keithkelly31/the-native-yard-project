import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/auth/signup');
});

test('has expected title', async ({ page }) => {
	await expect(page).toHaveTitle('simple lineup | sign up');
});

test('email input is visible', async ({ page }) => {
	await expect(page.getByRole('textbox', { name: 'email' })).toBeVisible();
});

test('password input is visible', async ({ page }) => {
	await expect(page.getByRole('textbox', { name: 'password' })).toBeVisible();
});

test('first name input is visible', async ({ page }) => {
	await expect(page.getByPlaceholder('first name')).toBeVisible();
});

test('last name input is visible', async ({ page }) => {
	await expect(page.getByPlaceholder('last name')).toBeVisible();
});

test('form submit button is visible', async ({ page }) => {
	await expect(page.getByRole('button').filter({ hasText: 'sign up' })).toBeVisible();
});

test('visitor can navigate to the sign in page', async ({ page }) => {
	await page.getByRole('link', { name: 'already have an account?' }).click();
	await page.waitForURL('/auth/signin');
	await expect(page).toHaveURL('/auth/signin');
});

test('visitor can sign up', async ({ page }) => {
	await page.getByRole('textbox', { name: 'email' }).fill('testuser1@simplelineup.com');
	await page.getByRole('textbox', { name: 'password' }).fill('123456');
	await page.getByPlaceholder('first name').fill('Test');
	await page.getByPlaceholder('last name').fill('User');
	await page.getByRole('button').filter({ hasText: 'sign up' }).click();

	await expect(
		page.getByText(
			'You have been signed up successfully. Please check your email to complete the confirmation process. You can safely close this window.'
		)
	).toBeVisible();
});
