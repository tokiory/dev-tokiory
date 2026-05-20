<script lang="ts">
	import { browser } from '$app/environment';
	import {
		getTweetData,
		loadWidgetsScript,
		TWEET_REQUEST_ERROR_MESSAGE,
		type TweetAlign
	} from './twitter-embed';

	interface Props {
		urls?: string[] | string;
		plainUrls?: string;
		theme?: 'light' | 'dark';
		dnt?: boolean;
		align?: TweetAlign;
		class?: string;
	}

	const {
		urls = [],
		plainUrls = '',
		theme = 'dark',
		dnt = true,
		align = 'center',
		class: className = ''
	}: Props = $props();

	const normalizeUrls = (value: string[] | string) => {
		if (Array.isArray(value)) {
			return value.map((entry) => entry.trim()).filter(Boolean);
		}

		return value
			.split(/\r?\n|,/)
			.map((entry) => entry.trim())
			.filter(Boolean);
	};

	const parsePlainUrls = (value: string) => {
		const trimmed = value.trim();
		if (!trimmed) return [];

		try {
			const parsed = JSON.parse(trimmed) as unknown;
			return Array.isArray(parsed)
				? parsed.map((entry) => String(entry).trim()).filter(Boolean)
				: [];
		} catch {
			return [];
		}
	};

	type GalleryTweet = {
		id: string;
		data: ReturnType<typeof getTweetData>;
	};

	let tweetContainers = $state<(HTMLDivElement | undefined)[]>([]);
	let galleryError = $state('');
	let uniformHeight = $state<number | null>(null);

	const tweets = $derived.by<GalleryTweet[]>(() => {
		const sourceUrls = parsePlainUrls(plainUrls);
		const normalizedUrls = sourceUrls.length ? sourceUrls : normalizeUrls(urls);

		return normalizedUrls.map((value, index) => ({
			id: `${index}-${value}`,
			data: getTweetData(value)
		}));
	});

	$effect(() => {
		if (!browser) return;

		const currentTweets = tweets;

		galleryError = '';
		uniformHeight = null;

		for (const target of tweetContainers) {
			target?.replaceChildren();
		}

		if (!currentTweets.length) return;

		let cancelled = false;
		const timers: number[] = [];
		const observers: ResizeObserver[] = [];

		const updateUniformHeight = () => {
			const heights = tweetContainers
				.map((container) => container?.firstElementChild?.getBoundingClientRect().height ?? 0)
				.filter((height) => height > 0);

			if (!heights.length) {
				uniformHeight = null;
				return;
			}

			uniformHeight = Math.ceil(Math.max(...heights));
		};

		const scheduleHeightSync = () => {
			for (const delay of [0, 150, 500, 1000, 2000, 3500]) {
				const timer = window.setTimeout(() => {
					if (cancelled) return;
					updateUniformHeight();
				}, delay);
				timers.push(timer);
			}
		};

		const observeEmbedSizeChanges = () => {
			if (!('ResizeObserver' in window)) return;

			for (const container of tweetContainers) {
				const embeddedNode = container?.firstElementChild;
				if (!embeddedNode) continue;

				const observer = new ResizeObserver(() => {
					if (cancelled) return;
					updateUniformHeight();
				});

				observer.observe(embeddedNode);
				observers.push(observer);
			}
		};

		const handleResize = () => {
			if (cancelled) return;
			updateUniformHeight();
		};

		window.addEventListener('resize', handleResize);

		const mountTweets = async () => {
			try {
				await loadWidgetsScript();

				if (cancelled) return;

				const createRequests: Promise<HTMLElement>[] = [];

				for (const [index, tweet] of currentTweets.entries()) {
					const target = tweetContainers[index];
					if (!target || !tweet.data) continue;

					createRequests.push(
						window.twttr!.widgets!.createTweet(tweet.data.tweetId, target, {
							theme,
							dnt,
							align
						})
					);
				}

				const results = await Promise.allSettled(createRequests);

				if (cancelled) return;

				if (results.some((result) => result.status === 'rejected')) {
					galleryError = TWEET_REQUEST_ERROR_MESSAGE;
				}

				scheduleHeightSync();
				observeEmbedSizeChanges();
			} catch {
				if (cancelled) return;
				galleryError = TWEET_REQUEST_ERROR_MESSAGE;
			}
		};

		void mountTweets();

		return () => {
			cancelled = true;
			window.removeEventListener('resize', handleResize);
			for (const timer of timers) {
				window.clearTimeout(timer);
			}
			for (const observer of observers) {
				observer.disconnect();
			}
		};
	});
</script>

<div class={['tweet-gallery', className]}>
	<div class="tweet-gallery-track">
		{#each tweets as tweet, index (tweet.id)}
			<div class="tweet-gallery-item" style:height={uniformHeight ? `${uniformHeight}px` : 'auto'}>
				<div class="tweet-gallery-embed" bind:this={tweetContainers[index]}></div>
				{#if !tweet.data}
					<div class="tweet-item-invalid">Invalid Twitter/X tweet URL.</div>
				{/if}
			</div>
		{/each}
	</div>

	{#if galleryError}
		<div class="tweet-fallback">{galleryError}</div>
	{/if}
</div>

<style>
	.tweet-gallery {
		@apply w-full mt-4 mb-8;
	}

	.tweet-gallery-track {
		@apply flex gap-4 overflow-x-auto pb-2;
		align-items: stretch;
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
	}

	.tweet-gallery-item {
		@apply shrink-0 flex;
		width: min(100%, 550px);
		scroll-snap-align: start;
	}

	.tweet-gallery-embed {
		@apply w-full;
	}

	.tweet-item-invalid {
		@apply text-xs border-2 border-dashed border-stone-800/30 bg-stone-100 rounded-md p-3;
		font-family: 'Martian Mono Variable', monospace;
	}

	.tweet-fallback {
		@apply mt-3 text-xs border-2 border-dashed border-stone-800/30 bg-stone-100 rounded-md p-3;
		font-family: 'Martian Mono Variable', monospace;
	}
</style>
