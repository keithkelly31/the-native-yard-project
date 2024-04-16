import { expect, test } from '@playwright/test';
import { signIn, test_user_id } from '../config';

test.describe('authenticated user', () => {
	test.beforeEach(async ({ page }) => {
		await signIn(page);
	});

	test('has expected title', async ({ page }) => {
		await expect(page).toHaveTitle('simple lineup | Test User');
	});

	test.fail('member can sign out', () => {});
});

test.describe('games', () => {
	test.beforeEach(async ({ page }) => {
		await signIn(page);
	});

	test.fail('games list is displayed properly', async () => {});

	test.fail('member is redirected to game page when clicked in list', async () => {});

	test.fail('text displayed when member has no games', async () => {});
});

test.describe('settings', () => {
	test.beforeEach(async ({ page }) => {
		await signIn(page);
	});

	test.describe('email', () => {
		test.fail('email input is visible', async () => {});

		test.fail('form submit button is visible', async () => {});

		test.fail('member can change email', async () => {});
	});

	test.describe('password', () => {
		test.fail('password input is visible', async () => {});

		test.fail('confirm password input is visible', async () => {});

		test.fail('form submit button is visible', async () => {});

		test.fail('member can change password', async () => {});
	});
});

test.describe('teams', () => {
	test.beforeEach(async ({ page }) => {
		await signIn(page);
	});

	test.fail('team list is displayed properly', async () => {});

	test.fail('member is redirected to team page when clicked in list', async () => {});

	test.fail('text displayed when member has no teams', async () => {});

	test('member can create a team', async ({ page }) => {
		await page.getByRole('button').filter({ hasText: 'create a team' }).click();
		await page.getByRole('textbox', { name: 'name' }).fill('simple lineup test team');
		await page.getByRole('button').filter({ hasText: 'create team' }).click();

		await page.waitForURL('https://checkout.stripe.com/**');
		await expect(page).toHaveURL(/(https:\/\/checkout\.stripe\.com\/)((?:[a-z][a-z0-9_]*))/i);
	});

	test.fail('member can join a team', async () => {});
});

test('logged out user is redirected to sign in page', async ({ page }) => {
	await page.goto(`/members/${test_user_id}`);
	await page.waitForURL('/auth/signin');
	await expect(page).toHaveURL('/auth/signin');
});
