import type { ArticlesResponse } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/articles');
	const data: ArticlesResponse = await response.json();

	return { posts: data.articles };
};
