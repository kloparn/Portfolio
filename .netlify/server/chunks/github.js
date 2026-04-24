import { n as private_env } from "./shared-server.js";
//#region src/lib/server/github.ts
var GITHUB_USER = "kloparn";
var GITHUB_API = "https://api.github.com";
var CACHE_TTL = 600 * 1e3;
var cache = null;
function getHeaders() {
	const headers = { Accept: "application/vnd.github.v3+json" };
	if (private_env.GITHUB_TOKEN) headers.Authorization = `Bearer ${private_env.GITHUB_TOKEN}`;
	return headers;
}
function toProject(repo) {
	return {
		name: repo.name,
		description: repo.description ?? "",
		url: repo.html_url,
		homepage: repo.homepage || null,
		language: repo.language,
		updatedAt: repo.updated_at,
		stars: repo.stargazers_count,
		topics: repo.topics ?? []
	};
}
async function fetchRepos() {
	if (cache && Date.now() - cache.timestamp < CACHE_TTL) return {
		projects: cache.data,
		error: false
	};
	const res = await fetch(`${GITHUB_API}/users/${GITHUB_USER}/repos?sort=updated&per_page=30&type=owner`, { headers: getHeaders() });
	if (!res.ok) {
		console.error(`GitHub API error: ${res.status} ${res.statusText}`);
		return {
			projects: cache?.data ?? [],
			error: true
		};
	}
	const projects = (await res.json()).filter((r) => !r.fork).map(toProject).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
	cache = {
		data: projects,
		timestamp: Date.now()
	};
	return {
		projects,
		error: false
	};
}
async function fetchFeaturedRepos(count = 3) {
	const result = await fetchRepos();
	return {
		projects: result.projects.slice(0, count),
		error: result.error
	};
}
//#endregion
export { fetchRepos as n, fetchFeaturedRepos as t };
