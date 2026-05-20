<script lang="ts">
	import { browser } from '$app/environment';
	import {
		getTweetData,
		loadWidgetsScript,
		TWEET_REQUEST_ERROR_MESSAGE,
		type TweetAlign
	} from './twitter-embed';

	interface Props {
		url: string;
		theme?: 'light' | 'dark';
		dnt?: boolean;
		align?: TweetAlign;
		class?: string;
	}

	const {
		url = '',
		theme = 'dark',
		dnt = true,
		align = 'center',
		class: className = ''
	}: Props = $props();

	let containerRef = $state<HTMLDivElement>();
	let embedError = $state('');

	const tweetData = $derived(getTweetData(url));

	$effect(() => {
		if (!browser) return;
		if (!containerRef) return;

		const currentTweet = tweetData;
		const target = containerRef;

		target.innerHTML = '';

		if (!currentTweet) {
			embedError = 'Invalid Twitter/X tweet URL.';
			return;
		}

		let cancelled = false;

		const mountTweet = async () => {
			try {
				await loadWidgetsScript();
				if (cancelled) return;

				await window.twttr!.widgets!.createTweet(currentTweet.tweetId, target, {
					theme,
					dnt,
					align
				});

				if (cancelled) return;
				embedError = '';
			} catch {
				if (cancelled) return;
				embedError = TWEET_REQUEST_ERROR_MESSAGE;
			}
		};

		void mountTweet();

		return () => {
			cancelled = true;
		};
	});
</script>

<div class={['twitter-embed', className]}>
	<div bind:this={containerRef}></div>

	{#if embedError}
		<div class="tweet-fallback">
			{embedError}
			{#if tweetData}
				<a href={tweetData.url} target="_blank" rel="noreferrer">Open tweet</a>
			{/if}
		</div>
	{/if}
</div>

<style>
	.twitter-embed {
		@apply w-full mt-4 mb-8 overflow-x-auto;
	}

	.tweet-fallback {
		@apply text-xs border-2 border-dashed border-stone-800/30 bg-stone-100 rounded-md p-3;
		font-family: 'Martian Mono Variable', monospace;
	}

	.tweet-fallback a {
		text-decoration: underline;
	}
</style>
