import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Grow Better & Engage More' })).toBeVisible();
});

test('desktop navigation dropdown link', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('button', { name: 'Services' }).click();
	await expect(
		page.getByRole('link', {
			name: 'Web Development Decrease load times and increase customer conversions with a new site'
		})
	).toBeVisible();
});
