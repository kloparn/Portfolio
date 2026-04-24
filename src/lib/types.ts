export interface GitHubRepo {
	name: string;
	description: string | null;
	html_url: string;
	homepage: string | null;
	language: string | null;
	updated_at: string;
	stargazers_count: number;
	topics: string[];
	fork: boolean;
}

export interface Project {
	name: string;
	description: string;
	url: string;
	homepage: string | null;
	language: string | null;
	updatedAt: string;
	stars: number;
	topics: string[];
}

export const LANGUAGE_COLORS: Record<string, string> = {
	TypeScript: '#3178c6',
	JavaScript: '#f1e05a',
	Python: '#3572A5',
	'C#': '#178600',
	Java: '#b07219',
	HTML: '#e34c26',
	CSS: '#563d7c',
	Vue: '#41b883',
	Svelte: '#ff3e00',
	Go: '#00ADD8',
	Rust: '#dea584',
	Shell: '#89e051',
	Dockerfile: '#384d54'
};
