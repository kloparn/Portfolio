import type { Handle } from '@sveltejs/kit';
import { detectLocale } from '$lib/i18n';

export const handle: Handle = async ({ event, resolve }) => {
	const theme = event.cookies.get('theme') ?? 'light';
	const locale = detectLocale(event.request.headers.get('accept-language'));

	event.locals.locale = locale;

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('<html lang="en">', `<html lang="${locale}" class="${theme}">`);
		}
	});
};
