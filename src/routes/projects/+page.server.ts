import { fetchRepos } from '$lib/server/github';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
	const { projects, error } = await fetchRepos();

	setHeaders({
		'cache-control': 'public, max-age=600'
	});

	return { projects, githubError: error };
};
