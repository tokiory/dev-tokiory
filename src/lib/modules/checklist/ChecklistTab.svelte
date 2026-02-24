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
		active ? 'border-stone-700' : 'border-stone-700/40'
	]}
	{onclick}
>
	{@render children?.()}
</button>
