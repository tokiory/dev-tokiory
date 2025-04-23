import type { ArticlesResponse } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/articles?limit=2');
	const data: ArticlesResponse = await response.json();
	return data;
};
