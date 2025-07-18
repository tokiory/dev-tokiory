const enum TelegramParam {
	StartParam = 'tgWebAppStartParam'
}

export const paramStore = {
	get article(): string | null {
		const params = new URLSearchParams(window.location.hash);
		const startParam = params.get(TelegramParam.StartParam) || '';
		return startParam.match(/article_([a-zA-Z-]+)/)?.[1] || null;
	}
};
