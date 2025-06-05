// /src/routes/sitemap.xml/+server.ts
import type { ArticlesResponse } from '@/lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import * as sitemap from 'super-sitemap';

export const GET: RequestHandler = async (event) => {
	const response = await event.fetch('/api/articles');
	const data: ArticlesResponse = await response.json();

	const articles = data.articles.map((article) => article.slug);

	return await sitemap.response({
		origin: 'https://tokiory.vercel.app',
		paramValues: {
			'/articles/[...slug]': articles
		},
		defaultChangefreq: 'daily',
		defaultPriority: 0.7
	});
};
