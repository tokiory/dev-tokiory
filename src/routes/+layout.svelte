<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import 'virtual:uno.css';
	import '@/styles/app.css';
	import type { Snippet } from 'svelte';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import 'virtual:uno.css';
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/martian-mono';

	import '@unocss/reset/tailwind.css';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<main class="main mx-auto flex flex-col min-h-screen">
	<Header />
	{@render children()}
	<Footer class="mt-auto" />
</main>
