import { test, expect } from '@playwright/test';
import en from '../../src/lib/i18n/en';

const t = en;

test.describe('Projects', () => {
	test('projects page loads and displays repos', async ({ page }) => {
		await page.goto('/projects');

		await expect(page.locator('h1')).toContainText(t.projectsHeading);

		const cards = page.locator('article');
		await expect(cards.first()).toBeVisible({ timeout: 10000 });
	});

	test('project cards have GitHub links', async ({ page }) => {
		await page.goto('/projects');

		const firstCard = page.locator('article').first();
		await expect(firstCard).toBeVisible({ timeout: 10000 });

		const githubLink = firstCard.locator('a[aria-label*="GitHub"]');
		await expect(githubLink).toBeVisible();
		await expect(githubLink).toHaveAttribute('href', /github\.com/);
	});

	test('language filter buttons are present', async ({ page }) => {
		await page.goto('/projects');

		const allButton = page.locator('button', { hasText: t.projectsFilterAll });
		await expect(allButton).toBeVisible();
	});

	test('sort controls work', async ({ page }) => {
		await page.goto('/projects');

		await expect(page.locator('button', { hasText: t.projectsSortRecent })).toBeVisible();
		await expect(page.locator('button', { hasText: t.projectsSortStars })).toBeVisible();
		await expect(page.locator('button', { hasText: t.projectsSortAz })).toBeVisible();
	});

	test('homepage shows featured projects', async ({ page }) => {
		await page.goto('/');

		const featuredSection = page.locator(`text=${t.featuredTitle}`);
		await expect(featuredSection).toBeVisible({ timeout: 10000 });
	});

	test('GitHub API endpoint returns JSON', async ({ request }) => {
		const response = await request.get('/api/github');
		expect(response.ok()).toBeTruthy();

		const data = await response.json();
		expect(data).toHaveProperty('projects');
		expect(Array.isArray(data.projects)).toBeTruthy();
		expect(data).toHaveProperty('error');

		if (data.projects.length > 0) {
			expect(data.projects[0]).toHaveProperty('name');
			expect(data.projects[0]).toHaveProperty('url');
			expect(data.projects[0]).toHaveProperty('language');
		}
	});
});
