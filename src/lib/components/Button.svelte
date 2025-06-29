<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLButtonElement> {
		class?: string | string[];
		children?: Snippet;
		disabled?: boolean;
		outlined?: boolean;
	}
	const { class: className, children, outlined, disabled, ...attrs }: Props = $props();
</script>

<button
  {disabled}
	{...attrs}
	class={[
		'border border-driftwood-600 px-2 py-1 bg-driftwood-800 rounded-md text-driftwood-50',
		outlined && 'bg-inherit text-driftwood-800',
		disabled && 'opacity-75 cursor-not-allowed',
		className
	]}>{@render children?.()}</button
>
