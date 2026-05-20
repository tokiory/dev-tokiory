export type TweetAlign = 'left' | 'center' | 'right';

type TwitterWidgets = {
	widgets?: {
		createTweet: (
			tweetId: string,
			element: HTMLElement,
			options?: {
				theme?: 'light' | 'dark';
				dnt?: boolean;
				align?: TweetAlign;
			}
		) => Promise<HTMLElement>;
	};
};

declare global {
	interface Window {
		twttr?: TwitterWidgets;
	}
}

let widgetsLoader: Promise<void> | null = null;

const waitForWidgetsApi = () =>
	new Promise<void>((resolve, reject) => {
		const timeoutAt = Date.now() + 5000;

		const check = () => {
			if (window.twttr?.widgets?.createTweet) {
				resolve();
				return;
			}

			if (Date.now() >= timeoutAt) {
				reject(new Error('Twitter/X widgets API is unavailable.'));
				return;
			}

			window.setTimeout(check, 50);
		};

		check();
	});

export const TWEET_REQUEST_ERROR_MESSAGE =
	'Проверьте ваше подключение к интернету и доступность x.com';

export const loadWidgetsScript = async () => {
	if (typeof window === 'undefined') return;
	if (window.twttr?.widgets?.createTweet) return;

	if (!widgetsLoader) {
		widgetsLoader = new Promise<void>((resolve, reject) => {
			const existingScript = document.querySelector<HTMLScriptElement>(
				'script[src="https://platform.twitter.com/widgets.js"]'
			);

			if (existingScript) {
				existingScript.addEventListener(
					'load',
					() => void waitForWidgetsApi().then(resolve, reject),
					{ once: true }
				);
				existingScript.addEventListener(
					'error',
					() => reject(new Error('Failed to load Twitter/X widgets script.')),
					{ once: true }
				);
				void waitForWidgetsApi().then(resolve, () => {
					/* wait for script events */
				});
				return;
			}

			const script = document.createElement('script');
			script.src = 'https://platform.twitter.com/widgets.js';
			script.async = true;
			script.charset = 'utf-8';
			script.onload = () => void waitForWidgetsApi().then(resolve, reject);
			script.onerror = () => reject(new Error('Failed to load Twitter/X widgets script.'));
			document.head.append(script);
		});
	}

	return widgetsLoader;
};

export const getTweetData = (value: string) => {
	const trimmed = value.trim();
	if (!trimmed) return null;

	try {
		const parsed = new URL(trimmed);
		const hostname = parsed.hostname.toLowerCase();
		const isTwitterHost = [
			'twitter.com',
			'www.twitter.com',
			'mobile.twitter.com',
			'x.com',
			'www.x.com',
			'mobile.x.com'
		].includes(hostname);

		if (!isTwitterHost) return null;

		const match = parsed.pathname.match(/^\/(\w+)\/status\/(\d+)/i);
		if (!match) return null;

		const [, username, tweetId] = match;
		return {
			tweetId,
			url: `https://twitter.com/${username}/status/${tweetId}`
		};
	} catch {
		return null;
	}
};
