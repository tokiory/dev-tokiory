import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Article, ArticlesResponse } from '@/lib/types';
import type { Component } from 'svelte';

const getSlugName = (slug: string) => {
	const parts = slug.split('articles/');
	return parts[parts.length - 1];
};

export const load: PageLoad = async ({ params, url, fetch }) => {
	let previousArticle: Article | undefined;
	let nextArticle: Article | undefined;

	try {
		const articlesResponse = await fetch('/api/articles');
		const { articles } = (await articlesResponse.json()) as ArticlesResponse;
		const articleIdx = articles.findIndex((article) => getSlugName(article.slug) === params.slug);

		if (articleIdx > 0) {
			previousArticle = articles[articleIdx - 1];
		}

		if (articleIdx < articles.length - 1) {
			nextArticle = articles[articleIdx + 1];
		}
	} catch (err) {
		console.log(err);
	}

	try {
		let post: {
			default: Component<object, object, ''>;
			metadata: Article;
		};

		if (params.slug.includes('drafts/') && process.env.NODE_ENV === 'development') {
			const formattedSlug = params.slug.split('drafts/')[1];
			post = await import(`$content/articles/drafts/${formattedSlug}.mdx`);
		} else {
			post = await import(`$content/articles/${params.slug}.mdx`);
		}

		return {
			pagination: {
				previous: previousArticle,
				next: nextArticle
			},
			content: post.default,
			meta: post.metadata,
			baseURL: url.origin
		};
	} catch (err) {
		console.log(err);
		error(404, `Could not find ${params.slug}`);
	}
};
