import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Article } from '@/lib/types';
import type { Component } from 'svelte';

export const load: PageLoad = async ({ params, url }) => {
  try {
    let post: {
      default: Component<object, object, "">;
      metadata: Article;
    };

    if (params.slug.includes('drafts/') && process.env.NODE_ENV === 'development') {
      const formattedSlug = params.slug.split('drafts/')[1];
      post = await import(`$content/articles/drafts/${formattedSlug}.mdx`);
    } else {
      post = await import(`$content/articles/${params.slug}.mdx`);
    }

    return {
      content: post.default,
      meta: post.metadata,
      baseURL: url.origin
    };
  } catch (err) {
    console.log(err);
    error(404, `Could not find ${params.slug}`);
  }
};
