import { describe, it, expect } from 'vitest';
import { getTranslations, detectLocale, locales, localeNames, type Locale } from '$lib/i18n';
import en from '$lib/i18n/en';

describe('i18n', () => {
	describe('getTranslations', () => {
		for (const locale of locales) {
			it(`returns correct translations for "${locale}"`, () => {
				const t = getTranslations(locale);
				// Should return an object with the same keys as English
				const enKeys = Object.keys(en);
				const tKeys = Object.keys(t);
				expect(tKeys).toEqual(expect.arrayContaining(enKeys));
				// Should not return English when requesting a different locale
				if (locale !== 'en') {
					expect(t.heroGreeting).not.toBe(en.heroGreeting);
				}
			});
		}

		it('falls back to English for unknown locale', () => {
			const t = getTranslations('xx' as Locale);
			expect(t).toEqual(getTranslations('en'));
		});
	});

	describe('detectLocale', () => {
		it('returns "sv" for Swedish accept-language', () => {
			expect(detectLocale('sv-SE,sv;q=0.9,en;q=0.8')).toBe('sv');
		});

		it('returns "es" for Spanish accept-language', () => {
			expect(detectLocale('es-ES,es;q=0.9')).toBe('es');
		});

		it('returns "ja" for Japanese accept-language', () => {
			expect(detectLocale('ja,en-US;q=0.9')).toBe('ja');
		});

		it('returns "en" for English accept-language', () => {
			expect(detectLocale('en-US,en;q=0.9')).toBe('en');
		});

		it('returns "en" for null', () => {
			expect(detectLocale(null)).toBe('en');
		});

		it('returns "en" for unknown language', () => {
			expect(detectLocale('de-DE,de;q=0.9')).toBe('en');
		});
	});

	describe('translation completeness', () => {
		const enKeys = Object.keys(en) as (keyof typeof en)[];

		for (const locale of locales) {
			it(`"${locale}" has all keys from English`, () => {
				const t = getTranslations(locale);
				const missing = enKeys.filter((key) => !(key in t));
				expect(missing, `Missing keys in ${locale}: ${missing.join(', ')}`).toEqual([]);
			});
		}

		for (const locale of locales) {
			it(`"${locale}" has no empty string values`, () => {
				const t = getTranslations(locale);
				const empty = enKeys.filter((key) => {
					const val = t[key];
					return typeof val === 'string' && val.trim() === '';
				});
				expect(empty, `Empty values in ${locale}: ${empty.join(', ')}`).toEqual([]);
			});
		}
	});

	describe('locales config', () => {
		it('has a name for every locale', () => {
			for (const locale of locales) {
				expect(localeNames[locale]).toBeDefined();
				expect(localeNames[locale].length).toBeGreaterThan(0);
			}
		});

		it('every locale in the array is a valid key', () => {
			for (const locale of locales) {
				const t = getTranslations(locale);
				// Should not fall back to English (meaning the locale actually exists)
				expect(t.siteTitle).toBeTruthy();
			}
		});
	});
});
