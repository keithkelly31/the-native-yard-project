import { expect, test } from '@playwright/test';
import { signIn, test_user_id } from '../config';

test.beforeEach(async ({ page }) => {
	await page.goto('/auth/signin');
});

test('has expected title', async ({ page }) => {
	await expect(page).toHaveTitle('simple lineup | sign in');
});

test('email input is visible', async ({ page }) => {
	await expect(page.getByRole('textbox', { name: 'email' })).toBeVisible();
});

test('password input is visible', async ({ page }) => {
	await expect(page.getByRole('textbox', { name: 'password' })).toBeVisible();
});

test('form submit button is visible', async ({ page }) => {
	await expect(page.getByRole('button', { name: 'sign in' })).toBeVisible();
});

test('visitor can navigate to the sign up page', async ({ page }) => {
	await page.getByRole('link', { name: 'need an account?' }).click();
	await page.waitForURL('/auth/signup');
	await expect(page).toHaveURL('/auth/signup');
});

test('visitor can navigate to the forgot password page', async ({ page }) => {
	await page.getByRole('link', { name: 'forgot your password?' }).click();
	await page.waitForURL('/auth/forgot-password');
	await expect(page).toHaveURL('/auth/forgot-password');
});

test('visitor can login', async ({ page }) => {
	await signIn(page);
	await expect(page).toHaveURL(`/members/${test_user_id}`);
});
