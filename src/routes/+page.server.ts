import { fetchFeaturedRepos } from '$lib/server/github';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
	const { projects, error } = await fetchFeaturedRepos(4);

	setHeaders({
		'cache-control': 'public, max-age=600'
	});

	return { featured: projects, githubError: error };
};
