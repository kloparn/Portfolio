import { json } from '@sveltejs/kit';
import { fetchRepos } from '$lib/server/github';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ setHeaders }) => {
	const { projects, error } = await fetchRepos();

	setHeaders({
		'cache-control': 'public, max-age=600'
	});

	return json({ projects, error });
};
