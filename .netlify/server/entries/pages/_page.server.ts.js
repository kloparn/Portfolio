import { t as fetchFeaturedRepos } from "../../chunks/github.js";
//#region src/routes/+page.server.ts
var load = async ({ setHeaders }) => {
	const { projects, error } = await fetchFeaturedRepos(4);
	setHeaders({ "cache-control": "public, max-age=600" });
	return {
		featured: projects,
		githubError: error
	};
};
//#endregion
export { load };
