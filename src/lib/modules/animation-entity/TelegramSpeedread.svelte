<script>
	import { onMount } from 'svelte';

	const { class: className = '' } = $props();

	const words = [
		'Telegram',
		'Bot',
		'Mini App',
		'Webhook',
		'Web Events API',
		'Telegram API',
		'Telegram OAuth',
		'TON',
		'Telegram Groups',
		'Telegram Channels',
		'Telegram Stickers',
		'Telegram Payments',
		'MTProto',
		'Telegram Passport',
		'Telegram Desktop',
		'Telegram Cloud',
		'Telegram Files',
		'Telegram Login',
		'Bot API'
	];

	let currentWordIdx = $state(0);

	const swapWord = () => {
		currentWordIdx = currentWordIdx + 1 >= words.length ? 0 : currentWordIdx + 1;
	};

	onMount(() => {
		const interval = setInterval(swapWord, 150);

		return () => {
			clearInterval(interval);
		};
	});

	const word = $derived(words[currentWordIdx]);
</script>

<code class={['text-xl block shadow-sm shadow-driftwood-800/10 text-center leading-loose', className]}>
    {word}
</code>
