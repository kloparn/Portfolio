import { n as fetchRepos } from "../../../chunks/github.js";
//#region src/routes/projects/+page.server.ts
var load = async ({ setHeaders }) => {
	const { projects, error } = await fetchRepos();
	setHeaders({ "cache-control": "public, max-age=600" });
	return {
		projects,
		githubError: error
	};
};
//#endregion
export { load };
