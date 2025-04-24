<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLButtonElement> {
		class?: string | string[];
		children?: Snippet;
	}
	const { class: className, children, ...attrs }: Props = $props();
</script>

<button
	{...attrs}
	class={[
		'border border-driftwood-600 px-2 py-1 bg-driftwood-800 rounded-md text-driftwood-50',
		className
	]}>{@render children?.()}</button
>
