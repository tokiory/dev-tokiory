<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		active?: boolean;
		onclick?: () => void;
	}

	const { children, active, onclick }: Props = $props();
</script>

<button
	class={[
		'py-1 px-4 border-b transition-colors',
		active ? 'border-driftwood-700' : 'border-driftwood-700/40'
	]}
	{onclick}
>
	{@render children?.()}
</button>
