const enum TelegramParam {
	StartParam = 'tgWebAppStartParam'
}

export const paramStore = {
	get article(): string | null {
		const params = new URLSearchParams(window.location.hash.slice(1));
		const startParam = params.get(TelegramParam.StartParam) || '';
		const articleId = startParam.match(/article_([a-zA-Z-]+)/)?.[1];

		if (articleId) {
			umami.track('tma_article', { articleId });
			return articleId;
		}

		return null;
	}
};
