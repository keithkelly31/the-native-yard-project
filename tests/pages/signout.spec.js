import { expect, test } from '@playwright/test';
import { signIn } from '../config';

test('member is successfully signed out and redirected to site home page', async ({ page }) => {
	await signIn(page);
	await page.goto('/auth/signout');
	await page.waitForURL('/');
	await expect(page).toHaveURL('/');
});
