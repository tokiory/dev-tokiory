<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string | string[];
		url?: string;
		children?: Snippet;
	}

	const { class: className = '', url = '', children }: Props = $props();
</script>

<a
	class={[
		'w-full sm:w-fit border rounded-md transition-colors border-driftwood-700/40 hover:border-driftwood-700/80 block p-2',
		className
	]}
	href={url}
>
	{@render children?.()}
</a>
