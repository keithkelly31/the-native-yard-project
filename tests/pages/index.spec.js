import { expect, test } from '@playwright/test';
import { signIn, test_user_id } from '../config';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test('has expected title', async ({ page }) => {
	await expect(page).toHaveTitle('simple lineup');
});

test('visitor can navigate to the sign in page', async ({ page }) => {
	await page.getByRole('link').filter({ hasText: 'sign in' }).click();
	await page.waitForURL('/auth/signin');
	await expect(page).toHaveURL('/auth/signin');
});

test('visitor can navigate to the sign up page', async ({ page }) => {
	await page.getByRole('link').filter({ hasText: 'sign up' }).click();
	await page.waitForURL('/auth/signup');
	await expect(page).toHaveURL('/auth/signup');
});

test('visitor can navigate to the contact page', async ({ page }) => {
	await page.getByRole('link').filter({ hasText: 'contact' }).click();
	await page.waitForURL('/contact');
	await expect(page).toHaveURL('/contact');
});

test('visitor can navigate to the privacy page', async ({ page }) => {
	await page.getByRole('link').filter({ hasText: 'privacy' }).click();
	await page.waitForURL('/privacy');
	await expect(page).toHaveURL('/privacy');
});

test('visitor can navigate to the terms of service page', async ({ page }) => {
	await page.getByRole('link').filter({ hasText: 'terms of service' }).click();
	await page.waitForURL('/tos');
	await expect(page).toHaveURL('/tos');
});

test('sign up form is visible', async ({ page }) => {
	await expect(await page.getByTestId('sign-up-form')).toBeTruthy();
});

test('logged in user is redirected to member page', async ({ page }) => {
	await signIn(page);
	await page.goto('/');

	await page.waitForURL('/members/**');
	await expect(page).toHaveURL(`/members/${test_user_id}`);
});
