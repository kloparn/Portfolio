import type { GitHubRepo, Project } from '$lib/types';
import { env } from '$env/dynamic/private';

const GITHUB_USER = 'kloparn';
const GITHUB_API = 'https://api.github.com';

const CACHE_TTL = 10 * 60 * 1000; // 10 minutes
let cache: { data: Project[]; timestamp: number } | null = null;

export interface GitHubResult {
	projects: Project[];
	error: boolean;
}

function getHeaders(): HeadersInit {
	const headers: HeadersInit = {
		Accept: 'application/vnd.github.v3+json'
	};

	if (env.GITHUB_TOKEN) {
		headers.Authorization = `Bearer ${env.GITHUB_TOKEN}`;
	}

	return headers;
}

function toProject(repo: GitHubRepo): Project {
	return {
		name: repo.name,
		description: repo.description ?? '',
		url: repo.html_url,
		homepage: repo.homepage || null,
		language: repo.language,
		updatedAt: repo.updated_at,
		stars: repo.stargazers_count,
		topics: repo.topics ?? []
	};
}

export async function fetchRepos(): Promise<GitHubResult> {
	if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
		return { projects: cache.data, error: false };
	}

	const res = await fetch(
		`${GITHUB_API}/users/${GITHUB_USER}/repos?sort=updated&per_page=30&type=owner`,
		{ headers: getHeaders() }
	);

	if (!res.ok) {
		console.error(`GitHub API error: ${res.status} ${res.statusText}`);
		return { projects: cache?.data ?? [], error: true };
	}

	const repos: GitHubRepo[] = await res.json();

	const projects = repos
		.filter((r) => !r.fork)
		.map(toProject)
		.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

	cache = { data: projects, timestamp: Date.now() };

	return { projects, error: false };
}

export function clearCache() {
	cache = null;
}

export async function fetchFeaturedRepos(count = 3): Promise<GitHubResult> {
	const result = await fetchRepos();
	return { projects: result.projects.slice(0, count), error: result.error };
}
