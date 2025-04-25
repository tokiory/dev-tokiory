import type { Article } from '$lib/types.ts';
import { json, type RequestHandler } from '@sveltejs/kit';

async function getArticles() {
	const articles: Article[] = [];
	let paths = import.meta.glob('$content/articles/*.mdx', { eager: true });

	if (process.env.NODE_ENV === 'development') {
		paths = {
			...paths,
			...import.meta.glob('$content/articles/drafts/*.mdx', { eager: true })
		};
	}

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('content/').at(-1)?.replace('.mdx', '');
		const isDraft = path.includes('drafts/');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Article, 'slug'>;
			let article = { ...metadata, slug } satisfies Article;

			if (process.env.NODE_ENV === 'development' && isDraft) {
				article = { ...article, draft: true };
			}

			articles.push(article);
		}
	}

	return { articles, amount: Object.keys(paths).length };
}

export const GET: RequestHandler = async ({ url }) => {
	const limit = url.searchParams.get('limit');
	const data = await getArticles();
	let { articles } = data;

	articles.sort(({ date: a }, { date: b }) => b.toLowerCase().localeCompare(a.toLowerCase()));

	if (limit) {
		articles = articles.slice(0, Number(limit));
	}

	return json({
		articles,
		amount: data.amount
	});
};
