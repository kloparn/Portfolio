import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the $env/dynamic/private module
vi.mock('$env/dynamic/private', () => ({
	env: {}
}));

// We need to mock fetch before importing the module
const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);

const { fetchRepos, fetchFeaturedRepos, clearCache } = await import('$lib/server/github');

const mockRepos = [
	{
		name: 'project-alpha',
		description: 'A cool project',
		html_url: 'https://github.com/kloparn/project-alpha',
		homepage: 'https://alpha.dev',
		language: 'TypeScript',
		updated_at: '2025-01-15T10:00:00Z',
		stargazers_count: 5,
		topics: ['web', 'svelte'],
		fork: false
	},
	{
		name: 'project-beta',
		description: 'Another project',
		html_url: 'https://github.com/kloparn/project-beta',
		homepage: null,
		language: 'Python',
		updated_at: '2025-02-20T10:00:00Z',
		stargazers_count: 2,
		topics: [],
		fork: false
	},
	{
		name: 'forked-repo',
		description: 'Someone elses project',
		html_url: 'https://github.com/kloparn/forked-repo',
		homepage: null,
		language: 'JavaScript',
		updated_at: '2025-03-01T10:00:00Z',
		stargazers_count: 0,
		topics: [],
		fork: true
	}
];

describe('GitHub API', () => {
	beforeEach(() => {
		mockFetch.mockReset();
		clearCache();
	});

	describe('fetchRepos', () => {
		it('returns mapped projects excluding forks', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: async () => mockRepos
			});

			const { projects } = await fetchRepos();

			expect(projects).toHaveLength(2);
			expect(projects.find((r) => r.name === 'forked-repo')).toBeUndefined();
		});

		it('maps GitHub API response to Project type', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: async () => [mockRepos[0]]
			});

			const { projects } = await fetchRepos();

			expect(projects[0]).toEqual({
				name: 'project-alpha',
				description: 'A cool project',
				url: 'https://github.com/kloparn/project-alpha',
				homepage: 'https://alpha.dev',
				language: 'TypeScript',
				updatedAt: '2025-01-15T10:00:00Z',
				stars: 5,
				topics: ['web', 'svelte']
			});
		});

		it('sorts by most recently updated', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: async () => mockRepos
			});

			const { projects } = await fetchRepos();

			expect(projects[0].name).toBe('project-beta');
			expect(projects[1].name).toBe('project-alpha');
		});

		it('returns error flag on API failure', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: false,
				status: 403,
				statusText: 'rate limited'
			});

			const { projects, error } = await fetchRepos();
			expect(projects).toEqual([]);
			expect(error).toBe(true);
		});

		it('returns no error on success', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: async () => mockRepos
			});

			const { error } = await fetchRepos();
			expect(error).toBe(false);
		});

		it('handles repos with null description', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: async () => [{ ...mockRepos[0], description: null }]
			});

			const { projects } = await fetchRepos();
			expect(projects[0].description).toBe('');
		});
	});

	describe('fetchFeaturedRepos', () => {
		it('returns the specified number of repos', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: async () => mockRepos
			});

			const { projects } = await fetchFeaturedRepos(1);
			expect(projects).toHaveLength(1);
		});

		it('defaults to 3 repos', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: async () => mockRepos
			});

			const { projects } = await fetchFeaturedRepos();
			expect(projects).toHaveLength(2); // only 2 non-fork repos
		});
	});
});
