import { test, expect } from '@playwright/test';
import en from '../../src/lib/i18n/en';

// Default locale is English since Playwright doesn't send Accept-Language: sv
const t = en;

test.describe('Navigation', () => {
	test('homepage loads with correct title and hero', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle(t.siteTitle);
		await expect(page.locator('h1')).toContainText(t.heroName);
	});

	test('nav links navigate to correct pages', async ({ page }) => {
		await page.goto('/');

		await page.click('a[href="/about"]');
		await expect(page).toHaveURL('/about');
		await expect(page).toHaveTitle(t.aboutTitle);

		await page.click('a[href="/projects"]');
		await expect(page).toHaveURL('/projects');
		await expect(page.locator('h1')).toContainText(t.projectsHeading);

		await page.click('a[href="/contact"]');
		await expect(page).toHaveURL('/contact');
		await expect(page.locator('h1')).toContainText(t.contactHeadingHighlight);
	});

	test('about page renders skills and timeline', async ({ page }) => {
		await page.goto('/about');
		await expect(page.getByRole('heading', { name: t.aboutSkillsTitle })).toBeVisible();
		await expect(page.getByRole('heading', { name: t.aboutTimelineTitle })).toBeVisible();
		await expect(page.locator('a', { hasText: t.aboutCertTitle })).toBeVisible();
	});

	test('contact page shows email', async ({ page }) => {
		await page.goto('/contact');
		await expect(page.locator('text=Adam.hakanson@hotmail.com')).toBeVisible();
	});

	test('footer is visible on all pages', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('footer')).toBeVisible();
		await expect(page.locator('footer')).toContainText(t.footerText);
	});
});
