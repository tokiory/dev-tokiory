<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	interface Props extends HTMLAttributes<HTMLAnchorElement> {
		target?: string;
		darker?: boolean;
		download?: string | boolean;
		href: string;
		rel?: string;
		children?: Snippet;
		class?: string | string[];
	}

	let { href, target, darker, children, rel, download, class: className, ...attributes }: Props = $props();
</script>

<a
	{...attributes}
	{rel}
	{download}
	class={[
		'cursor-pointer transition-colors',
		darker
			? 'text-stone-800 hover:text-stone-900'
			: 'text-stone-600 hover:text-stone-700 active:text-stone-800',
		className
	]}
	{href}
	target={target || '_self'}
>
	{@render children?.()}
</a>
