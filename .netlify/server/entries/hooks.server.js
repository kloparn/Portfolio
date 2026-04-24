import { t as detectLocale } from "../chunks/i18n.js";
//#region src/hooks.server.ts
var handle = async ({ event, resolve }) => {
	const theme = event.cookies.get("theme") ?? "light";
	const locale = detectLocale(event.request.headers.get("accept-language"));
	event.locals.locale = locale;
	return resolve(event, { transformPageChunk: ({ html }) => {
		return html.replace("<html lang=\"en\">", `<html lang="${locale}" class="${theme}">`);
	} });
};
//#endregion
export { handle };
