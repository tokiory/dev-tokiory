const enum TelegramParam {
	Data = 'tgWebAppData',
	Start = 'tgWebAppStartParam'
}

const getHashParam = (urlHash: string, param: TelegramParam) => {
	return new URLSearchParams(decodeURI(urlHash)).get(param) || '';
};

const getDataParams = (dataParam: string) => {
	return new URLSearchParams(dataParam);
};

export const paramStore = {
	get article(): string | null {
		const dataParam = getHashParam(window.location.hash.slice(1), TelegramParam.Data);
		const articleId = getDataParams(dataParam).get('start_param')?.match(/article_([a-zA-Z-]+)/)?.[1];

		if (articleId) {
			return articleId;
		}

		return null;
	}
};
