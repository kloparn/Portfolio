import { test, expect } from '@playwright/test';
import en from '../../src/lib/i18n/en';

const t = en;

test.describe('Projects', () => {
	test('projects page renders heading and description', async ({ page }) => {
		await page.goto('/projects');

		await expect(page.locator('h1')).toContainText(t.projectsHeading);
		await expect(page.locator('p', { hasText: t.projectsDescription })).toBeVisible();
	});

	test('project cards render from mock data', async ({ page }) => {
		await page.goto('/projects');

		const cards = page.locator('article');
		await expect(cards).toHaveCount(2);

		await expect(cards.first()).toContainText('mock-project');
	});

	test('project cards have GitHub links', async ({ page }) => {
		await page.goto('/projects');

		const firstCard = page.locator('article').first();
		const githubLink = firstCard.locator('a[aria-label*="GitHub"]');
		await expect(githubLink).toBeVisible();
		await expect(githubLink).toHaveAttribute('href', /github\.com/);
	});

	test('language filter buttons match mock data', async ({ page }) => {
		await page.goto('/projects');

		await expect(page.locator('button', { hasText: t.projectsFilterAll })).toBeVisible();
		await expect(page.locator('button', { hasText: 'TypeScript' })).toBeVisible();
		await expect(page.locator('button', { hasText: 'Python' })).toBeVisible();
	});

	test('sort controls are present', async ({ page }) => {
		await page.goto('/projects');

		await expect(page.locator('button', { hasText: t.projectsSortRecent })).toBeVisible();
		await expect(page.locator('button', { hasText: t.projectsSortStars })).toBeVisible();
		await expect(page.locator('button', { hasText: t.projectsSortAz })).toBeVisible();
	});

	test('filtering by language works', async ({ page }) => {
		await page.goto('/projects');

		await page.locator('button', { hasText: 'TypeScript' }).click();
		const cards = page.locator('article');
		await expect(cards).toHaveCount(1);
		await expect(cards.first()).toContainText('mock-project');

		// Clear filter
		await page.locator('button', { hasText: t.projectsFilterAll }).click();
		await expect(page.locator('article')).toHaveCount(2);
	});

	test('homepage shows featured projects', async ({ page }) => {
		await page.goto('/');

		await expect(page.locator(`text=${t.featuredTitle}`)).toBeVisible();
		await expect(page.locator('article').first()).toContainText('mock-project');
	});

	test('internal API endpoint returns mock data', async ({ request }) => {
		const response = await request.get('/api/github');
		expect(response.ok()).toBeTruthy();

		const data = await response.json();
		expect(data).toHaveProperty('projects');
		expect(data).toHaveProperty('error');
		expect(data.error).toBe(false);
		expect(data.projects).toHaveLength(2);
		expect(data.projects[0]).toHaveProperty('name');
		expect(data.projects[0]).toHaveProperty('url');
		expect(data.projects[0]).toHaveProperty('language');
	});
});
