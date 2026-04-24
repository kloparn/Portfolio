//#region src/routes/+layout.server.ts
var load = async ({ cookies, locals }) => {
	return {
		theme: cookies.get("theme") ?? "light",
		locale: locals.locale
	};
};
//#endregion
export { load };
