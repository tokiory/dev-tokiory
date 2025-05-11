<script lang="ts">
	import Footer from "$components/Footer.svelte";
	import Header from "$components/Header.svelte";
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<div class="main mx-auto flex flex-col min-h-screen">
	<Header />
	{@render children()}
	<Footer class="mt-auto" />
</div>
