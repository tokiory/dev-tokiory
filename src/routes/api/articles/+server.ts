import type { Article } from '$lib/types.ts';
import { json, type RequestHandler } from '@sveltejs/kit';

async function getArticles() {
	const articles: Article[] = [];
	const paths = import.meta.glob('/content/articles/*.mdx', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('content/').at(-1)?.replace('.mdx', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Article, 'slug'>;
			const article = { ...metadata, slug } satisfies Article;
			articles.push(article);
		}
	}

	return articles;
}

export const GET: RequestHandler = async ({ url }) => {
	const limit = url.searchParams.get('limit');
	let articles = await getArticles();

	if (limit) {
		articles = articles.slice(0, Number(limit));
	}

	return json(articles);
};
