import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/contact');
});

test('has expected title', async ({ page }) => {
	await expect(page).toHaveTitle('simple lineup | contact me');
});

test('name input is visible', async ({ page }) => {
	await expect(page.getByRole('textbox', { name: 'name' })).toBeVisible();
});

test('email input is visible', async ({ page }) => {
	await expect(page.getByRole('textbox', { name: 'email' })).toBeVisible();
});

test('message input is visible', async ({ page }) => {
	await expect(page.getByRole('textbox', { name: 'message' })).toBeVisible();
});

test('form submit button is visible', async ({ page }) => {
	await expect(page.getByRole('button').filter({ hasText: 'send message' })).toBeVisible();
});

test('visitor can send message', async ({ page }) => {
	await page.getByRole('textbox', { name: 'name' }).fill('test message');
	await page.getByRole('textbox', { name: 'email' }).fill('testuser@simplelineup.com');
	await page.getByRole('textbox', { name: 'message' }).fill('This is a test message');
	await page.getByRole('button').filter({ hasText: 'send message' }).click();
	await expect(
		page.getByText('Message sent successfully. I will reply as soon as I can. Thank you.')
	).toBeVisible();
});
