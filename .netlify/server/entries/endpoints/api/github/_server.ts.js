import { n as fetchRepos } from "../../../../chunks/github.js";
import { json } from "@sveltejs/kit";
//#region src/routes/api/github/+server.ts
var GET = async ({ setHeaders }) => {
	const { projects, error } = await fetchRepos();
	setHeaders({ "cache-control": "public, max-age=600" });
	return json({
		projects,
		error
	});
};
//#endregion
export { GET };
