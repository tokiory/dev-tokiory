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
		'px-2 py-1 rounded-md appearance-none shadow-none',
		outlined
			? 'border border-stone-600 bg-white text-stone-800'
			: 'border border-stone-700 bg-stone-800 text-white',
		disabled && 'opacity-75 cursor-not-allowed',
		className
	]}>{@render children?.()}</button
>
