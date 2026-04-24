import en from './en';
import sv from './sv';
import es from './es';
import ja from './ja';

export type Locale = 'en' | 'sv' | 'es' | 'ja';
export type Translations = typeof en;

export const locales: Locale[] = ['en', 'sv', 'es', 'ja'];

export const localeNames: Record<Locale, string> = {
	en: 'EN',
	sv: 'SV',
	es: 'ES',
	ja: 'JA'
};

const translations: Record<Locale, Translations> = { en, sv, es, ja };

export function getTranslations(locale: Locale): Translations {
	return translations[locale] ?? translations.en;
}

export function detectLocale(acceptLanguage: string | null): Locale {
	if (!acceptLanguage) return 'en';

	const preferred = acceptLanguage.toLowerCase();
	if (preferred.startsWith('sv')) return 'sv';
	if (preferred.startsWith('es')) return 'es';
	if (preferred.startsWith('ja')) return 'ja';
	return 'en';
}
